import logging
import subprocess
import dbus
import time
import os
from PIL import Image
from .. import settings


def reload():
    logging.info(f"Reloading KWin")
    subprocess.Popen(
        "qdbus org.kde.KWin /KWin reconfigure",
        shell=True,
        stderr=subprocess.DEVNULL,
        stdout=subprocess.DEVNULL,
    )


def blend_changes():
    try:
        bus = dbus.SessionBus()
        kwin = dbus.Interface(
            bus.get_object("org.kde.KWin", "/org/kde/KWin/BlendChanges"),
            dbus_interface="org.kde.KWin.BlendChanges",
        )
        kwin.start()
    except Exception as e:
        logging.warning(
            f"Could not start blend effect (requires Plasma 5.25 or later):\n{e}"
        )


def load_desktop_window_id_script():
    is_loaded = False
    try:
        bus = dbus.SessionBus()
        kwin = bus.get_object("org.kde.KWin", "/Scripting")
        kwin_iface = dbus.Interface(kwin, dbus_interface="org.kde.kwin.Scripting")
        is_loaded = kwin_iface.isScriptLoaded("kde_material_you_get_desktop_view_id")
    except dbus.DBusException as e:
        logging.exception(f"An error occurred with D-Bus: {e.get_dbus_message()}")
        raise
    except Exception as e:
        logging.exception(f"An unexpected error occurred: {e}")
        raise

    if is_loaded:
        try:
            bus = dbus.SessionBus()
            kwin = bus.get_object("org.kde.KWin", "/Scripting")
            kwin_iface = dbus.Interface(kwin, dbus_interface="org.kde.kwin.Scripting")
            is_loaded = kwin_iface.unloadScript("kde_material_you_get_desktop_view_id")
        except dbus.DBusException as e:
            logging.exception(f"An error occurred with D-Bus: {e.get_dbus_message()}")
            raise
        except Exception as e:
            logging.exception(f"An unexpected error occurred: {e}")
            raise

    # Calling this overloaded method raises TypeError:
    # Fewer items found in D-Bus signature than in Python arguments
    # So have use subprocess with qdbus instead :(
    try:
        # Construct the command with the necessary arguments
        command = [
            "qdbus",
            "org.kde.KWin",
            "/Scripting",
            "org.kde.kwin.Scripting.loadScript",
            settings.KWIN_DESKTOP_ID_JSCRIPT,
            "kde_material_you_get_desktop_view_id",
        ]

        # Execute the command and decode the output
        result = subprocess.run(command, capture_output=True, text=True, check=True)
        script_id = result.stdout.strip()

        # Check if the script_id is an integer and convert it
        if script_id.isdigit():
            return script_id
        else:
            raise ValueError(f"Invalid script ID returned: {script_id}")

    except subprocess.CalledProcessError as e:
        logging.exception(f"An error occurred while loading the script: {e}")
        raise
    except ValueError as e:
        logging.exception(f"An error occurred: {e}")
        raise


def get_desktop_window_id(screen: int = 0) -> str | None:
    """_summary_

    Args:
        screen (int): Screen number

    Returns:
        str: Window id (empty if not found)
    """

    win_id = None
    script_str = f"""var windows = workspace.clientList()
for (var i = 0; i < windows.length; i++) {{
    let window = windows[i];
    var regex = /Desktop @ QRect\\((.*?)\\) — Plasma/;
    if (window.caption.match(regex) != null && window.screen == {screen}) {{
        print("KMYC-desktop-window-id:", window.internalId)
    }}
}}
"""
    with open(settings.KWIN_DESKTOP_ID_JSCRIPT, "w", encoding="utf-8") as js:
        js.write(script_str)

    # Load the script using qdbus
    try:
        script_id = load_desktop_window_id_script()
    except Exception as error:
        logging.error(error)
        raise

    try:
        # run the script
        bus = dbus.SessionBus()
        kwin = bus.get_object("org.kde.KWin", "/" + script_id)
        script = dbus.Interface(kwin, "org.kde.kwin.Script")
        timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
        script.run()
        try:
            command = [
                "journalctl",
                "--since",
                timestamp,
                "--user",
                "-u",
                "plasma-kwin_wayland.service",
                "--output",
                "cat",
                "-g",
                "js: KMYC-desktop-window-id",
            ]

            # Execute the command using subprocess.run
            result = subprocess.run(
                command,
                stdout=subprocess.PIPE,
                stderr=subprocess.STDOUT,
                text=True,
                check=True,
            )

            # The output is now stored in result.stdout
            output = result.stdout.strip()
            win_id = output.split(" ")[2]
        except subprocess.CalledProcessError as e:
            error = f"Script id {script_id} didn't return a desktop id for screen {screen}: {e}"
            cmd = str(e).replace(timestamp, "TIME_NOW")
            logging.exception(error)
            script.run()
            raise subprocess.CalledProcessError(e.returncode, cmd, e.output, e.stderr)
    except dbus.exceptions.DBusException as e:
        msg = f"Error running script with id {script_id}: {e.get_dbus_message()}"
        logging.exception(msg)
        raise
    else:
        script.stop()

    return win_id


def screenshot_window(window_handle, output_file):
    # create a pipe where the screenshot will be written
    read_fd, write_fd = os.pipe()
    results = None
    screenshot_taken = False

    try:
        # Create a connection to the session bus
        bus = dbus.SessionBus()

        # Get a proxy for the KWin object
        kwin = bus.get_object("org.kde.KWin", "/org/kde/KWin/ScreenShot2")
        screenshot = dbus.Interface(kwin, "org.kde.KWin.ScreenShot2")

        options = {
            "include-cursor": False,
            "native-resolution": True,
            "include-shadow": False,
            "include-decoration": False,
        }

        results = screenshot.CaptureWindow(
            window_handle, options, dbus.types.UnixFd(write_fd)
        )

    except dbus.exceptions.DBusException as e:
        logging.exception(
            f"Couldn't take screenshot of desktop: {window_handle}: {e.get_dbus_message()}"
        )
        raise

    os.close(write_fd)

    if results is not None:
        # Read the screenshot data from the pipe
        screenshot_data = b""
        while True:
            chunk = os.read(read_fd, 1048576)
            if not chunk:
                break
            screenshot_data += chunk

        os.close(read_fd)

        # get image dimensions and format from the results
        img_width = results["width"]
        img_height = results["height"]
        # img_format = results["format"]  # 5

        # image from the raw data
        image = Image.frombytes("RGBA", (img_width, img_height), screenshot_data, "raw")

        # convert from ABGR??? to RGBA
        b, g, r, a = image.split()
        image = Image.merge("RGB", (r, g, b))

        image.save(fp=output_file, compress_level=0)

        screenshot_taken = True

    return screenshot_taken

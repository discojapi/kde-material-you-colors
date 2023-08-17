import QtQuick 2.15
import QtQuick.Controls 2.5
import QtQuick.Layouts 1.15
import org.kde.plasma.core 2.0 as PlasmaCore
import org.kde.plasma.extras 2.0 as PlasmaExtras
import org.kde.plasma.plasmoid 2.0
import org.kde.plasma.components 3.0 as PlasmaComponents3

Item {
    id:root
    // Plasmoid.switchWidth: PlasmaCore.Units.gridUnit * 14
    // Plasmoid.switchHeight: PlasmaCore.Units.gridUnit * 10

    // Always display the compact view.
    // Never show the full popup view even if there is space for it.
    Plasmoid.preferredRepresentation: Plasmoid.compactRepresentation

    property string mainSource: "FullRepMain.qml"

    property bool autoHide: true

    Plasmoid.fullRepresentation: ColumnLayout {
        id:root
        anchors.fill: parent

        Layout.minimumWidth: 560 * PlasmaCore.Units.devicePixelRatio
        Layout.minimumHeight: 380 * PlasmaCore.Units.devicePixelRatio
        Layout.preferredWidth: 560 * PlasmaCore.Units.devicePixelRatio
        Layout.preferredHeight: loader.height + heading.height

        PlasmaExtras.PlasmoidHeading {
            id:heading
            visible: !(plasmoid.containmentDisplayHints & PlasmaCore.Types.ContainmentDrawsPlasmoidHeading)

            leftPadding: PlasmaCore.Units.smallSpacing
            rightPadding: PlasmaCore.Units.smallSpacing

            RowLayout {
                anchors.fill: parent

                PlasmaExtras.Heading {
                    Layout.fillWidth: true
                    level: 1
                    text: Plasmoid.metaData.name
                }

                PlasmaComponents3.ToolButton {
                    display: PlasmaComponents3.AbstractButton.IconOnly

                    icon.name: 'view-refresh'

                    text: Plasmoid.action("reloadConfig").text

                    onClicked: {
                        reloadConfig()
                    }

                    PlasmaComponents3.ToolTip {
                        text: parent.text
                    }
                }

                PlasmaComponents3.ToolButton {
                    display: PlasmaComponents3.AbstractButton.IconOnly

                    icon.name: 'configure'

                    text: Plasmoid.action("configure").text

                    onClicked: {
                        plasmoid.action("configure").trigger()
                    }

                    PlasmaComponents3.ToolTip {
                        text: parent.text
                    }
                }

                PlasmaComponents3.ToolButton {
                    display: PlasmaComponents3.AbstractButton.IconOnly

                    icon.name: 'pin'

                    text: i18n("Keep open")

                    checked: !autoHide

                    onClicked: {
                        autoHide = !autoHide
                        Plasmoid.hideOnWindowDeactivate = autoHide
                    }

                    PlasmaComponents3.ToolTip {
                        text: parent.text
                    }
                }
            }
        }

        Loader {
            id: loader
            Layout.fillWidth: true
            Layout.fillHeight: true
            source: mainSource

            // TODO: reload when config changes
            // onLoaded: {
            //     item.reloadUI.connect(function() {
            //         loader.source = ""
            //             loader.source = "FullRepMain.qml"
            //             console.log("RELOAD REQUEST SERVED");
            //     })
            // }
        }
    }

    function reloadConfig() {
        console.log("RELOAD");
        mainSource = ""
        mainSource = "FullRepMain.qml"
    }

    function action_reloadConfig() {
        reloadConfig()
    }


    Component.onCompleted: function() {
        Plasmoid.setAction('reloadConfig', i18n("Reload configuration file"), 'view-refresh');
    }
}

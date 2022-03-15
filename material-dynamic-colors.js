(() => {
    var n = { light: { background: "#FFFFFF", surface: "#FFFFFF" }, dark: {}, neutral: { luminance100: "#FFFFFF", luminance99: "#FDFCFB", luminance98: "#FAF9F9", luminance95: "#F2F2F2", luminance90: "#E3E3E3", luminance80: "#C7C7C7", luminance70: "#ABABAB", luminance60: "#8F8F8F", luminance50: "#757575", luminance40: "#5E5E5E", luminance35: "#525252", luminance30: "#474747", luminance25: "#3A3C3C", luminance20: "#303030", luminance10: "#1F1F1F", luminance0: "#000000" }, neutralVariant: { luminance100: "#FFFFFF", luminance99: "#FAFDFB", luminance98: "#F8FAF8", luminance95: "#EFF2EF", luminance90: "#E1E3E1", luminance80: "#C4C7C5", luminance70: "#A9ACAA", luminance60: "#8E918F", luminance50: "#747775", luminance40: "#5C5F5E", luminance35: "#4F5351", luminance30: "#444746", luminance25: "#393C3B", luminance20: "#2D312F", luminance10: "#191D1C", luminance0: "#000000" }, primary: { luminance100: "#FFFFFF", luminance99: "#FAFBFF", luminance98: "#F8F9FF", luminance95: "#ECF3FE", luminance90: "#D3E3FD", luminance80: "#A8C7FA", luminance70: "#7CACF8", luminance60: "#4C8DF6", luminance50: "#1B6EF3", luminance40: "#0B57D0", luminance35: "#155298", luminance30: "#0842A0", luminance25: "#003B77", luminance20: "#062E6F", luminance10: "#041E49", luminance0: "#000000" }, secondary: { luminance100: "#FFFFFF", luminance99: "#F7FCFF", luminance98: "#E3FFF6", luminance95: "#DFF3FF", luminance90: "#C2E7FF", luminance80: "#7FCFFF", luminance70: "#5AB3F0", luminance60: "#3998D3", luminance50: "#047DB7", luminance40: "#00639B", luminance35: "#005E4E", luminance30: "#004A77", luminance25: "#004438", luminance20: "#003355", luminance10: "#001D35", luminance0: "#000000" }, tertiary: { luminance100: "#FFFFFF", luminance99: "#F2FFEE", luminance98: "#E8FFE7", luminance95: "#E7F8ED", luminance90: "#C4EED0", luminance80: "#6DD58C", luminance70: "#37BE5F", luminance60: "#1EA446", luminance50: "#198639", luminance40: "#146C2E", luminance35: "#006024", luminance30: "#0F5223", luminance25: "#004618", luminance20: "#0A3818", luminance10: "#072711", luminance0: "#000000" }, error: { luminance100: "#FFFFFF", luminance99: "#FFFBF9", luminance98: "#FFF8F6", luminance95: "#FCEEEE", luminance90: "#F9DEDC", luminance80: "#F2B8B5", luminance70: "#EC928E", luminance60: "#E46962", luminance50: "#DC362E", luminance40: "#B3261E", luminance35: "#833D3B", luminance30: "#8C1D18", luminance25: "#662726", luminance20: "#601410", luminance10: "#410E0B", luminance0: "#000000" }, styles: { display1: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 64, lineHeight: 76, letterSpacing: 0, paragraphSpacing: 0 }, display2: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 57, lineHeight: 64, letterSpacing: 0, paragraphSpacing: 0 }, display3: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 45, lineHeight: 52, letterSpacing: 0, paragraphSpacing: 0 }, headline1: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 36, lineHeight: 44, letterSpacing: 0, paragraphSpacing: 0 }, headline2: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 32, lineHeight: 40, letterSpacing: 0, paragraphSpacing: 0 }, headline3: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 28, lineHeight: 36, letterSpacing: 0, paragraphSpacing: 0 }, headline4: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 24, lineHeight: 32, letterSpacing: 0, paragraphSpacing: 0 }, headline5: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 22, lineHeight: 28, letterSpacing: 0, paragraphSpacing: 0 }, headline6: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 18, lineHeight: 24, letterSpacing: 0, paragraphSpacing: 0 }, subhead1: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Medium", fontSize: 16, lineHeight: 24, letterSpacing: 0, paragraphSpacing: 0 }, subhead2: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Medium", fontSize: 14, lineHeight: 20, letterSpacing: 0, paragraphSpacing: 0 }, button: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Medium", fontSize: 14, lineHeight: 20, letterSpacing: 0, paragraphSpacing: 0 }, body1: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 16, lineHeight: 24, letterSpacing: 0, paragraphSpacing: 0 }, body2: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 14, lineHeight: 20, letterSpacing: 0, paragraphSpacing: 0 }, caption: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Regular", fontSize: 12, lineHeight: 16, letterSpacing: .1, paragraphSpacing: 0 }, overline: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Medium", fontSize: 12, lineHeight: 16, letterSpacing: .1, paragraphSpacing: 0 }, labelSmall: { fontFamilyName: "Google Sans Text", fontFamilyStyle: "Medium", fontSize: 11, lineHeight: 16, letterSpacing: .1, paragraphSpacing: 0 } } };
    const e = { light: {}, dark: {}, neutral: { luminance100: "#FFFFFF", luminance99: "#FFFBFE", luminance98: "#FDF8FC", luminance95: "#F4EFF4", luminance90: "#E6E1E5", luminance80: "#C9C5CA", luminance70: "#AEAAAE", luminance60: "#939094", luminance50: "#787579", luminance40: "#605D62", luminance35: "#545255", luminance30: "#484649", luminance25: "#3D3B3E", luminance20: "#313033", luminance10: "#1C1B1F", luminance0: "#000000" }, neutralVariant: { luminance100: "#FFFFFF", luminance99: "#FFFBFE", luminance98: "#FEF7FF", luminance95: "#F5EEFA", luminance90: "#E7E0EC", luminance80: "#CAC4D0", luminance70: "#AEA9B4", luminance60: "#938F99", luminance50: "#79747E", luminance40: "#605D66", luminance35: "#54515A", luminance30: "#49454F", luminance25: "#3D3A43", luminance20: "#322F37", luminance10: "#1D1A22", luminance0: "#000000" }, primary: { luminance100: "#FFFFFF", luminance99: "#FFFBFE", luminance98: "#FEF7FF", luminance95: "#F6EDFF", luminance90: "#EADDFF", luminance80: "#D0BCFF", luminance70: "#B69DF8", luminance60: "#9A82DB", luminance50: "#7F67BE", luminance40: "#6750A4", luminance35: "#5B4497", luminance30: "#4F378B", luminance25: "#432B7E", luminance20: "#381E72", luminance10: "#21005D", luminance0: "#000000" }, secondary: { luminance100: "#FFFFFF", luminance99: "#FFFBFE", luminance98: "#FEF7FF", luminance95: "#F6EDFF", luminance90: "#E8DEF8", luminance80: "#CCC2DC", luminance70: "#B0A7C0", luminance60: "#958DA5", luminance50: "#7A7289", luminance40: "#625B71", luminance35: "#564F65", luminance30: "#4A4458", luminance25: "#3E384D", luminance20: "#332D41", luminance10: "#1D192B", luminance0: "#000000" }, tertiary: { luminance100: "#FFFFFF", luminance99: "#FFFBFA", luminance98: "#FFF8F9", luminance95: "#FFECF1", luminance90: "#FFD8E4", luminance80: "#EFB8C8", luminance70: "#D29DAC", luminance60: "#B58392", luminance50: "#986977", luminance40: "#7D5260", luminance35: "#704653", luminance30: "#633B48", luminance25: "#57303D", luminance20: "#492532", luminance10: "#31111D", luminance0: "#000000" }, error: { luminance100: "#FFFFFF", luminance99: "#FFFBF9", luminance98: "#FFF8F6", luminance95: "#FCEEEE", luminance90: "#F9DEDC", luminance80: "#F2B8B5", luminance70: "#EC928E", luminance60: "#E46962", luminance50: "#DC362E", luminance40: "#B3261E", luminance35: "#833D3B", luminance30: "#8C1D18", luminance25: "#662726", luminance20: "#601410", luminance10: "#410E0B", luminance0: "#000000" }, styles: { display1: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 64, lineHeight: 76, letterSpacing: -.5, paragraphSpacing: 0 }, display2: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 57, lineHeight: 64, letterSpacing: -.25, paragraphSpacing: 0 }, display3: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 45, lineHeight: 52, letterSpacing: 0, paragraphSpacing: 0 }, headline1: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 36, lineHeight: 44, letterSpacing: 0, paragraphSpacing: 0 }, headline2: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 32, lineHeight: 40, letterSpacing: 0, paragraphSpacing: 0 }, headline3: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 28, lineHeight: 36, letterSpacing: 0, paragraphSpacing: 0 }, headline4: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 24, lineHeight: 32, letterSpacing: 0, paragraphSpacing: 0 }, headline5: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 22, lineHeight: 28, letterSpacing: 0, paragraphSpacing: 0 }, headline6: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 18, lineHeight: 24, letterSpacing: 0, paragraphSpacing: 0 }, subhead1: { fontFamilyName: "Roboto", fontFamilyStyle: "Medium", fontSize: 16, lineHeight: 24, letterSpacing: .1, paragraphSpacing: 0 }, subhead2: { fontFamilyName: "Roboto", fontFamilyStyle: "Medium", fontSize: 14, lineHeight: 20, letterSpacing: .1, paragraphSpacing: 0 }, button: { fontFamilyName: "Roboto", fontFamilyStyle: "Medium", fontSize: 14, lineHeight: 20, letterSpacing: .1, paragraphSpacing: 0 }, body1: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 16, lineHeight: 24, letterSpacing: .5, paragraphSpacing: 0 }, body2: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 14, lineHeight: 20, letterSpacing: .25, paragraphSpacing: 0 }, caption: { fontFamilyName: "Roboto", fontFamilyStyle: "Regular", fontSize: 12, lineHeight: 16, letterSpacing: .4, paragraphSpacing: 0 }, overline: { fontFamilyName: "Roboto", fontFamilyStyle: "Medium", fontSize: 12, lineHeight: 16, letterSpacing: .5, paragraphSpacing: 0 }, labelSmall: { fontFamilyName: "Roboto", fontFamilyStyle: "Medium", fontSize: 11, lineHeight: 16, letterSpacing: .5, paragraphSpacing: 0 } } },
        t = function(n, e, t) { return (null != t ? t : n.palettes).get(`${e}-40`) },
        o = function(n, e) { return (null == n ? void 0 : n.toUpperCase()) === (null == e ? void 0 : e.toUpperCase()) },
        l = function(n) { try { return B(n) } catch (e) { return console.debug(`error converting [${n}] to hex`, e), "#000000" } },
        i = function(n, e, t) {
            var o;
            const i = null !== (o = n.props.overrides.tonalGroups) && void 0 !== o ? o : {},
                r = Object(i)[e];
            return A.is1p && !n.props.isBaseline || !r ? function(n) { return { luminance100: l(n.tone(100)), luminance99: l(n.tone(99)), luminance98: l(n.tone(98)), luminance95: l(n.tone(95)), luminance90: l(n.tone(90)), luminance80: l(n.tone(80)), luminance70: l(n.tone(70)), luminance60: l(n.tone(60)), luminance50: l(n.tone(50)), luminance40: l(n.tone(40)), luminance35: l(n.tone(35)), luminance30: l(n.tone(30)), luminance25: l(n.tone(25)), luminance20: l(n.tone(20)), luminance10: l(n.tone(10)), luminance0: l(n.tone(0)) } }(t) : r
        },
        r = function(n, e) { const t = new Map; return t.set(`${n}-100`, e.luminance100), t.set(`${n}-99`, e.luminance99), t.set(`${n}-98`, e.luminance98), t.set(`${n}-95`, e.luminance95), t.set(`${n}-90`, e.luminance90), t.set(`${n}-80`, e.luminance80), t.set(`${n}-70`, e.luminance70), t.set(`${n}-60`, e.luminance60), t.set(`${n}-50`, e.luminance50), t.set(`${n}-40`, e.luminance40), t.set(`${n}-35`, e.luminance35), t.set(`${n}-30`, e.luminance30), t.set(`${n}-25`, e.luminance25), t.set(`${n}-20`, e.luminance20), t.set(`${n}-10`, e.luminance10), t.set(`${n}-0`, e.luminance0), t },
        a = n => {
            const e = (n + 16) / 116,
                t = 24389 / 27,
                o = e * e * e > 216 / 24389;
            var l = [(o ? e * e * e : (116 * e - 16) / t) * C[0], (8 < n ? e * e * e : n / t) * C[1], (o ? e * e * e : (116 * e - 16) / t) * C[2]];
            return m(l[0], l[1], l[2])
        },
        u = class {
            constructor(n, e) { this.hue = n, this.chroma = e, this.cache = new Map }
            tone(n) { let e = this.cache.get(n); return void 0 === e && (e = new y(this.hue, this.chroma, n).toInt(), this.cache.set(n, e)), e }
        },
        c = n => .0031308 >= n ? 12.92 * n : 1.055 * Math.pow(n, 1 / 2.4) - .055,
        s = n => (-16777216 | (255 & n[0]) << 16 | (255 & n[1]) << 8 | 255 & n[2]) >>> 0,
        m = (n, e, t) => (n /= 100, e /= 100, t /= 100, s([Math.round(h(255, 255 * c(3.2406 * n + -1.5372 * e + -.4986 * t))), Math.round(h(255, 255 * c(-.9689 * n + 1.8758 * e + .0415 * t))), Math.round(h(255, 255 * c(.0557 * n + -.204 * e + 1.057 * t)))])),
        d = function(n, e, t) {
            const o = t * Math.PI / 180,
                l = 1 / .0228 * Math.log(1 + .0228 * e * w.fLRoot);
            return new S(t, e, n, 4 / w.c * Math.sqrt(n / 100) * (w.aw + 4) * w.fLRoot, 50 * Math.sqrt(e / Math.sqrt(n / 100) * w.c / (w.aw + 4)), (1 + 100 * .007) * n / (1 + .007 * n), l * Math.cos(o), l * Math.sin(o))
        },
        g = function(n) {
            const e = Math.pow((0 === n.chroma || 0 === n.j ? 0 : n.chroma / Math.sqrt(n.j / 100)) / Math.pow(1.64 - Math.pow(.29, w.n), .73), 1 / .9),
                t = n.hue * Math.PI / 180,
                o = w.aw * Math.pow(n.j / 100, 1 / w.c / w.z) / w.nbb,
                l = Math.sin(t),
                i = Math.cos(t),
                r = 23 * (o + .305) * e / (5e4 / 13 * (Math.cos(t + 2) + 3.8) * 5.75 * w.nc * w.ncb + 11 * e * i + 108 * e * l),
                a = r * i,
                u = r * l,
                c = (460 * o + 451 * a + 288 * u) / 1403,
                s = (460 * o - 891 * a - 261 * u) / 1403,
                d = (460 * o - 220 * a - 6300 * u) / 1403,
                g = 100 / w.fl * b(c) * Math.pow(Math.max(0, 27.13 * Math.abs(c) / (400 - Math.abs(c))), 1 / .42) / w.rgbD[0],
                h = 100 / w.fl * b(s) * Math.pow(Math.max(0, 27.13 * Math.abs(s) / (400 - Math.abs(s))), 1 / .42) / w.rgbD[1],
                v = 100 / w.fl * b(d) * Math.pow(Math.max(0, 27.13 * Math.abs(d) / (400 - Math.abs(d))), 1 / .42) / w.rgbD[2];
            return m(1.86206786 * g - 1.01125463 * h + .14918677 * v, .38752654 * g + .62144744 * h - .00897398 * v, -.0158415 * g - .03412294 * h + 1.04996444 * v)
        },
        h = function(n, e) { return Math.min(Math.max(e, 0), n) },
        v = function(n) { return 0 > n ? n % 360 + 360 : 360 <= n ? n % 360 : n },
        p = function(n, e, t) {
            if (1 > e || 0 >= Math.round(t) || 100 <= Math.round(t)) return a(t);
            n = v(n);
            let o = e,
                l = e,
                i = 0,
                r = !0,
                u = null;
            for (; .4 <= Math.abs(i - o);) {
                var c = n,
                    s = l,
                    m = t;
                let e, a = 0,
                    h = 100,
                    v = 1e3,
                    p = 1e3,
                    f = null;
                for (; .01 < Math.abs(a - h);) {
                    e = a + (h - a) / 2;
                    const n = g(d(e, s, c)),
                        t = F(n),
                        o = Math.abs(m - t);
                    if (.2 > o) {
                        const e = M(n),
                            t = e.distance(d(e.j, e.chroma, c));
                        1 >= t && t <= p && (v = o, p = t, f = e)
                    }
                    if (0 === v && 0 === p) break;
                    t < m ? a = e : h = e
                }
                const y = f;
                if (r) {
                    if (null != y) return g(y);
                    r = !1
                } else null === y ? o = l : (u = y, i = l);
                l = i + (o - i) / 2
            }
            return null === u ? a(t) : g(u)
        },
        f = function(n, e) {
            const t = M(e),
                o = F(e);
            n.internalHue = t.hue, n.internalChroma = t.chroma, n.internalTone = o
        },
        F = n => { let e = 21.26 * E(((16711680 & n) >> 16) / 255) + 71.52 * E(((65280 & n) >> 8) / 255) + 7.22 * E((255 & n) / 255); return e /= 100, e <= 216 / 24389 ? 24389 / 27 * e : 116 * Math.pow(e, 1 / 3) - 16 },
        y = class {
            constructor(n, e, t) { this.internalHue = n, this.internalChroma = e, this.internalTone = t, f(this, this.toInt()) }
            toInt() { return p(v(this.internalHue), this.internalChroma, h(100, this.internalTone)) }
            get hue() { return this.internalHue }
            set hue(n) { f(this, p(v(v(n)), this.internalChroma, h(100, this.internalTone))) }
            get chroma() { return this.internalChroma }
            set chroma(n) { f(this, p(v(this.internalHue), n, h(100, this.internalTone))) }
            get tone() { return this.internalTone }
            set tone(n) { f(this, p(v(this.internalHue), this.internalChroma, h(100, n))) }
        },
        S = class {
            constructor(n, e, t, o, l, i, r, a) { this.hue = n, this.chroma = e, this.j = t, this.q = o, this.s = l, this.jstar = i, this.astar = r, this.bstar = a }
            distance(n) {
                const e = this.jstar - n.jstar,
                    t = this.astar - n.astar,
                    o = this.bstar - n.bstar;
                return 1.41 * Math.pow(Math.sqrt(e * e + t * t + o * o), .63)
            }
        },
        b = function(n) { return 0 > n ? -1 : 0 === n ? 0 : 1 },
        C = [95.047, 100, 108.883],
        w = function(n = C, e = 200 / Math.PI * 100 * Math.pow(66 / 116, 3) / 100, t = 50, o = 2, l = !1) {
            const i = .401288 * n[0] + .650173 * n[1] + -.051461 * n[2],
                r = -.250268 * n[0] + 1.204414 * n[1] + .045854 * n[2],
                a = -.002079 * n[0] + .048952 * n[1] + .953127 * n[2],
                u = .8 + o / 10;
            if (.9 <= u) var c = 10 * (u - .9),
                s = .59 * (1 - c) + .69 * c;
            else {
                var m = 10 * (u - .8);
                s = .525 * (1 - m) + .59 * m
            }
            let d = l ? 1 : u * (1 - 1 / 3.6 * Math.exp((-e - 42) / 92));
            d = 1 < d ? 1 : 0 > d ? 0 : d;
            const g = [100 / i * d + 1 - d, 100 / r * d + 1 - d, 100 / a * d + 1 - d],
                h = 1 / (5 * e + 1),
                v = h * h * h * h,
                p = 1 - v,
                f = v * e + .1 * p * p * Math.cbrt(5 * e),
                F = (8 < t ? 100 * Math.pow((t + 16) / 116, 3) : t / (24389 / 27) * 100) / n[1],
                y = .725 / Math.pow(F, .2),
                S = [Math.pow(f * g[0] * i / 100, .42), Math.pow(f * g[1] * r / 100, .42), Math.pow(f * g[2] * a / 100, .42)],
                b = [400 * S[0] / (S[0] + 27.13), 400 * S[1] / (S[1] + 27.13), 400 * S[2] / (S[2] + 27.13)];
            return new class { constructor(n, e, t, o, l, i, r, a, u, c) { this.n = n, this.aw = e, this.nbb = t, this.ncb = o, this.c = l, this.nc = i, this.rgbD = r, this.fl = a, this.fLRoot = u, this.z = c } }(F, (2 * b[0] + b[1] + .05 * b[2]) * y, y, y, s, u, g, f, Math.pow(f, .25), 1.48 + Math.sqrt(F))
        }(),
        E = n => .04045 >= n ? n / 12.92 : Math.pow((n + .055) / 1.055, 2.4),
        M = function(n) {
            const e = 100 * E(((16711680 & n) >> 16) / 255),
                t = 100 * E(((65280 & n) >> 8) / 255),
                o = 100 * E((255 & n) / 255),
                l = .41233895 * e + .35762064 * t + .18051042 * o,
                i = .2126 * e + .7152 * t + .0722 * o,
                r = .01932141 * e + .11916382 * t + .95034478 * o,
                a = w.rgbD[0] * (.401288 * l + .650173 * i - .051461 * r),
                u = w.rgbD[1] * (-.250268 * l + 1.204414 * i + .045854 * r),
                c = w.rgbD[2] * (-.002079 * l + .048952 * i + .953127 * r),
                s = Math.pow(w.fl * Math.abs(a) / 100, .42),
                m = Math.pow(w.fl * Math.abs(u) / 100, .42),
                d = Math.pow(w.fl * Math.abs(c) / 100, .42),
                g = 400 * b(a) * s / (s + 27.13),
                h = 400 * b(u) * m / (m + 27.13),
                v = 400 * b(c) * d / (d + 27.13),
                p = (11 * g + -12 * h + v) / 11,
                f = (g + h - 2 * v) / 9,
                F = 180 * Math.atan2(f, p) / Math.PI,
                y = 0 > F ? F + 360 : 360 <= F ? F - 360 : F,
                C = y * Math.PI / 180,
                M = 100 * Math.pow((40 * g + 20 * h + v) / 20 * w.nbb / w.aw, w.c * w.z),
                A = Math.pow(5e4 / 13 * .25 * (Math.cos((20.14 > y ? y + 360 : y) * Math.PI / 180 + 2) + 3.8) * w.nc * w.ncb * Math.sqrt(p * p + f * f) / ((20 * g + 20 * h + 21 * v) / 20 + .305), .9) * Math.pow(1.64 - Math.pow(.29, w.n), .73),
                N = A * Math.sqrt(M / 100),
                B = 1 / .0228 * Math.log(1 + .0228 * N * w.fLRoot);
            return new S(y, N, M, 4 / w.c * Math.sqrt(M / 100) * (w.aw + 4) * w.fLRoot, 50 * Math.sqrt(A * w.c / (w.aw + 4)), (1 + 100 * .007) * M / (1 + .007 * M), B * Math.cos(C), B * Math.sin(C))
        };
    const A = new class {get internal() { return !1 }
            get is3p() { return !this.internal }get is1p() { return this.internal }
            get enableDsp() { return !this.is1p }get enableAndroid() { return this.is1p }
            get enableWebExport() { return this.is3p }get enableExtendedColors() { return !0 }
            get enableColorShift() { return this.is1p }
        },
        N = (A.enableDsp, A.enableAndroid, A.enableWebExport, A.enableColorShift, function(a) {
            var c = A.is3p;
            console.debug("theme adapter from color");
            const s = new class {
                constructor(n) {
                    const e = function(n) { const e = M(n); return new y(e.hue, e.chroma, F(n)) }(n),
                        t = e.hue;
                    this.a1 = new u(t, Math.max(48, e.chroma)), this.a2 = new u(t, 16), this.a3 = new u(t + 60, 24), this.n1 = new u(t, 4), this.n2 = new u(t, 8), this.error = new u(25, 84)
                }
            }((n => {
                const e = 3 === (n = n.replace("#", "")).length,
                    t = 6 === n.length,
                    o = 8 === n.length;
                if (!e && !t && !o) throw Error("unexpected hex " + n);
                let l = 0,
                    i = 0,
                    r = 0;
                return e ? (l = parseInt(n.slice(0, 1).repeat(2), 16), i = parseInt(n.slice(1, 2).repeat(2), 16), r = parseInt(n.slice(2, 3).repeat(2), 16)) : t ? (l = parseInt(n.slice(0, 2), 16), i = parseInt(n.slice(2, 4), 16), r = parseInt(n.slice(4, 6), 16)) : o && (l = parseInt(n.slice(2, 4), 16), i = parseInt(n.slice(4, 6), 16), r = parseInt(n.slice(6, 8), 16)), (-16777216 | (255 & l) << 16 | (255 & i) << 8 | 255 & r) >>> 0
            })(a));
            return new class extends class {
                constructor(n) { this.props = n }
                get isBaseline() {
                    return function(t) {
                        let l = !0;
                        const i = function(n) { var e, t; return "Roboto" === (null === (t = null === (e = null == n ? void 0 : n.styles) || void 0 === e ? void 0 : e.headline1) || void 0 === t ? void 0 : t.fontFamilyName) }(t) ? e : n,
                            r = (n, e, t) => {
                                if (l) {
                                    let n;
                                    (n = o(e.luminance0, t.luminance0)) && (n = o(e.luminance10, t.luminance10)), n && (n = o(e.luminance20, t.luminance20)), n && (n = o(e.luminance30, t.luminance30)), n && (n = o(e.luminance40, t.luminance40)), n && (n = o(e.luminance50, t.luminance50)), n && (n = o(e.luminance60, t.luminance60)), n && (n = o(e.luminance70, t.luminance70)), n && (n = o(e.luminance80, t.luminance80)), n && (n = o(e.luminance90, t.luminance90)), n && (n = o(e.luminance95, t.luminance95)), n && (n = o(e.luminance98, t.luminance98)), n && (n = o(e.luminance100, t.luminance100)), l = n
                                }
                                l || console.debug(`theme adapter ${n} group mismatch`, e, t)
                            };
                        return r("primary", t.primary, i.primary), r("secondary", t.secondary, i.secondary), r("tertiary", t.tertiary, i.tertiary), r("neutral", t.neutral, i.neutral), r("neutralVariant", t.neutralVariant, i.neutralVariant), r("error", t.error, i.error), console.debug(`theme adapter baseline match: ${l}`), l
                    }(this.save())
                }
                get is3p() { return this.props.is3p }
                get styles() { return this.props.is3p ? e.styles : n.styles }
                get imageUrl() { return this.props.imageUrl }
                get light() { var t, o, l; const i = this.props.isBaseline ? null === (t = A.is1p ? n : e) || void 0 === t ? void 0 : t.light : null !== (l = null === (o = this.props.overrides) || void 0 === o ? void 0 : o.light) && void 0 !== l ? l : {}; var r, a, u, c, s, m, d, g, h, v, p, f, F, y, S, b, C, w, E, M, N, B, x, D, R, T, V, G = this.palettes; return { primary: null !== (r = null == i ? void 0 : i.primary) && void 0 !== r ? r : G.get("P-40"), onPrimary: null !== (a = null == i ? void 0 : i.onPrimary) && void 0 !== a ? a : G.get("P-100"), primaryContainer: null !== (u = null == i ? void 0 : i.primaryContainer) && void 0 !== u ? u : G.get("P-90"), onPrimaryContainer: null !== (c = null == i ? void 0 : i.onPrimaryContainer) && void 0 !== c ? c : G.get("P-10"), secondary: null !== (s = null == i ? void 0 : i.secondary) && void 0 !== s ? s : G.get("S-40"), onSecondary: null !== (m = null == i ? void 0 : i.onSecondary) && void 0 !== m ? m : G.get("S-100"), secondaryContainer: null !== (d = null == i ? void 0 : i.secondaryContainer) && void 0 !== d ? d : G.get("S-90"), onSecondaryContainer: null !== (g = null == i ? void 0 : i.onSecondaryContainer) && void 0 !== g ? g : G.get("S-10"), tertiary: null !== (h = null == i ? void 0 : i.tertiary) && void 0 !== h ? h : G.get("T-40"), onTertiary: null !== (v = null == i ? void 0 : i.onTertiary) && void 0 !== v ? v : G.get("T-100"), tertiaryContainer: null !== (p = null == i ? void 0 : i.tertiaryContainer) && void 0 !== p ? p : G.get("T-90"), onTertiaryContainer: null !== (f = null == i ? void 0 : i.onTertiaryContainer) && void 0 !== f ? f : G.get("T-10"), error: null !== (F = null == i ? void 0 : i.error) && void 0 !== F ? F : G.get("E-40"), errorContainer: null !== (y = null == i ? void 0 : i.errorContainer) && void 0 !== y ? y : G.get("E-90"), onError: null !== (S = null == i ? void 0 : i.onError) && void 0 !== S ? S : G.get("E-100"), onErrorContainer: null !== (b = null == i ? void 0 : i.onErrorContainer) && void 0 !== b ? b : G.get("E-10"), background: null !== (C = null == i ? void 0 : i.background) && void 0 !== C ? C : G.get("N-99"), onBackground: null !== (w = null == i ? void 0 : i.onBackground) && void 0 !== w ? w : G.get("N-10"), surface: null !== (E = null == i ? void 0 : i.surface) && void 0 !== E ? E : G.get("N-99"), onSurface: null !== (M = null == i ? void 0 : i.onSurface) && void 0 !== M ? M : G.get("N-10"), surfaceVariant: null !== (N = null == i ? void 0 : i.surfaceVariant) && void 0 !== N ? N : G.get("NV-90"), onSurfaceVariant: null !== (B = null == i ? void 0 : i.onSurfaceVariant) && void 0 !== B ? B : G.get("NV-30"), outline: null !== (x = null == i ? void 0 : i.outline) && void 0 !== x ? x : G.get("NV-50"), inverseOnSurface: null !== (D = null == i ? void 0 : i.inverseOnSurface) && void 0 !== D ? D : G.get("N-95"), inverseSurface: null !== (R = null == i ? void 0 : i.inverseSurface) && void 0 !== R ? R : G.get("N-20"), inversePrimary: null !== (T = null == i ? void 0 : i.inversePrimary) && void 0 !== T ? T : G.get("P-80"), shadow: null !== (V = null == i ? void 0 : i.shadow) && void 0 !== V ? V : G.get("N-0") } }
                get dark() { var t, o, l; const i = this.props.isBaseline ? null === (t = A.is1p ? n : e) || void 0 === t ? void 0 : t.dark : null !== (l = null === (o = this.props.overrides) || void 0 === o ? void 0 : o.dark) && void 0 !== l ? l : {}; var r, a, u, c, s, m, d, g, h, v, p, f, F, y, S, b, C, w, E, M, N, B, x, D, R, T, V, G = this.palettes; return { primary: null !== (r = null == i ? void 0 : i.primary) && void 0 !== r ? r : G.get("P-80"), onPrimary: null !== (a = null == i ? void 0 : i.onPrimary) && void 0 !== a ? a : G.get("P-20"), primaryContainer: null !== (u = null == i ? void 0 : i.primaryContainer) && void 0 !== u ? u : G.get("P-30"), onPrimaryContainer: null !== (c = null == i ? void 0 : i.onPrimaryContainer) && void 0 !== c ? c : G.get("P-90"), secondary: null !== (s = null == i ? void 0 : i.secondary) && void 0 !== s ? s : G.get("S-80"), onSecondary: null !== (m = null == i ? void 0 : i.onSecondary) && void 0 !== m ? m : G.get("S-20"), secondaryContainer: null !== (d = null == i ? void 0 : i.secondaryContainer) && void 0 !== d ? d : G.get("S-30"), onSecondaryContainer: null !== (g = null == i ? void 0 : i.onSecondaryContainer) && void 0 !== g ? g : G.get("S-90"), tertiary: null !== (h = null == i ? void 0 : i.tertiary) && void 0 !== h ? h : G.get("T-80"), onTertiary: null !== (v = null == i ? void 0 : i.onTertiary) && void 0 !== v ? v : G.get("T-20"), tertiaryContainer: null !== (p = null == i ? void 0 : i.tertiaryContainer) && void 0 !== p ? p : G.get("T-30"), onTertiaryContainer: null !== (f = null == i ? void 0 : i.onTertiaryContainer) && void 0 !== f ? f : G.get("T-90"), error: null !== (F = null == i ? void 0 : i.error) && void 0 !== F ? F : G.get("E-80"), errorContainer: null !== (y = null == i ? void 0 : i.errorContainer) && void 0 !== y ? y : G.get("E-30"), onError: null !== (S = null == i ? void 0 : i.onError) && void 0 !== S ? S : G.get("E-20"), onErrorContainer: null !== (b = null == i ? void 0 : i.onErrorContainer) && void 0 !== b ? b : G.get("E-90"), background: null !== (C = null == i ? void 0 : i.background) && void 0 !== C ? C : G.get("N-10"), onBackground: null !== (w = null == i ? void 0 : i.onBackground) && void 0 !== w ? w : G.get("N-90"), surface: null !== (E = null == i ? void 0 : i.surface) && void 0 !== E ? E : G.get("N-10"), onSurface: null !== (M = null == i ? void 0 : i.onSurface) && void 0 !== M ? M : G.get("N-90"), surfaceVariant: null !== (N = null == i ? void 0 : i.surfaceVariant) && void 0 !== N ? N : G.get("NV-30"), onSurfaceVariant: null !== (B = null == i ? void 0 : i.onSurfaceVariant) && void 0 !== B ? B : G.get("NV-80"), outline: null !== (x = null == i ? void 0 : i.outline) && void 0 !== x ? x : G.get("NV-60"), inverseOnSurface: null !== (D = null == i ? void 0 : i.inverseOnSurface) && void 0 !== D ? D : G.get("N-10"), inverseSurface: null !== (R = null == i ? void 0 : i.inverseSurface) && void 0 !== R ? R : G.get("N-90"), inversePrimary: null !== (T = null == i ? void 0 : i.inversePrimary) && void 0 !== T ? T : G.get("P-40"), shadow: null !== (V = null == i ? void 0 : i.shadow) && void 0 !== V ? V : G.get("N-0") } }
                get androidLight() {
                    var n, e, t, o, i, r, a, u, c, s, m, d, g, h, v, p, f, F, y, S, b, C, w, E, M, A, N, B, x, D, R, T, V, G, P, H, k, z, I, $, L, O, U, j, q, W, J, K, Q, X, Y, Z = this.palettes,
                        _ = this.props.tones,
                        nn = null === (n = this.props.overrides) || void 0 === n ? void 0 : n.androidLight;
                    return { colorAccentPrimary: null !== (t = null !== (e = null == nn ? void 0 : nn.colorAccentPrimary) && void 0 !== e ? e : Z.get("P-90")) && void 0 !== t ? t : l(_.a1.tone(90)), colorAccentPrimaryVariant: null !== (i = null !== (o = null == nn ? void 0 : nn.colorAccentPrimaryVariant) && void 0 !== o ? o : Z.get("P-40")) && void 0 !== i ? i : l(_.a1.tone(40)), colorAccentSecondary: null !== (a = null !== (r = null == nn ? void 0 : nn.colorAccentSecondary) && void 0 !== r ? r : Z.get("S-90")) && void 0 !== a ? a : l(_.a2.tone(90)), colorAccentSecondaryVariant: null !== (c = null !== (u = null == nn ? void 0 : nn.colorAccentSecondaryVariant) && void 0 !== u ? u : Z.get("S-40")) && void 0 !== c ? c : l(_.a2.tone(40)), colorAccentTertiary: null !== (m = null !== (s = null == nn ? void 0 : nn.colorAccentTertiary) && void 0 !== s ? s : Z.get("T-90")) && void 0 !== m ? m : l(_.a3.tone(90)), colorAccentTertiaryVariant: null !== (g = null !== (d = null == nn ? void 0 : nn.colorAccentTertiaryVariant) && void 0 !== d ? d : Z.get("T-40")) && void 0 !== g ? g : l(_.a3.tone(40)), textColorPrimary: null !== (v = null !== (h = null == nn ? void 0 : nn.textColorPrimary) && void 0 !== h ? h : Z.get("N-10")) && void 0 !== v ? v : l(_.n1.tone(10)), textColorSecondary: null !== (f = null !== (p = null == nn ? void 0 : nn.textColorSecondary) && void 0 !== p ? p : Z.get("NV-30")) && void 0 !== f ? f : l(_.n2.tone(30)), textColorTertiary: null !== (y = null !== (F = null == nn ? void 0 : nn.textColorTertiary) && void 0 !== F ? F : Z.get("NV-50")) && void 0 !== y ? y : l(_.n2.tone(50)), textColorPrimaryInverse: null !== (b = null !== (S = null == nn ? void 0 : nn.textColorPrimaryInverse) && void 0 !== S ? S : Z.get("N-95")) && void 0 !== b ? b : l(_.n1.tone(95)), textColorSecondaryInverse: null !== (w = null !== (C = null == nn ? void 0 : nn.textColorSecondaryInverse) && void 0 !== C ? C : Z.get("N-80")) && void 0 !== w ? w : l(_.n1.tone(80)), textColorTertiaryInverse: null !== (M = null !== (E = null == nn ? void 0 : nn.textColorTertiaryInverse) && void 0 !== E ? E : Z.get("N-60")) && void 0 !== M ? M : l(_.n1.tone(60)), colorBackground: null !== (N = null !== (A = null == nn ? void 0 : nn.colorBackground) && void 0 !== A ? A : Z.get("N-95")) && void 0 !== N ? N : l(_.n1.tone(95)), colorBackgroundFloating: null !== (x = null !== (B = null == nn ? void 0 : nn.colorBackgroundFloating) && void 0 !== B ? B : Z.get("N-98")) && void 0 !== x ? x : l(_.n1.tone(98)), colorSurface: null !== (R = null !== (D = null == nn ? void 0 : nn.colorSurface) && void 0 !== D ? D : Z.get("N-98")) && void 0 !== R ? R : l(_.n1.tone(98)), colorSurfaceVariant: null !== (V = null !== (T = null == nn ? void 0 : nn.colorSurfaceVariant) && void 0 !== T ? T : Z.get("N-90")) && void 0 !== V ? V : l(_.n1.tone(90)), colorSurfaceHighlight: null !== (P = null !== (G = null == nn ? void 0 : nn.colorSurfaceHighlight) && void 0 !== G ? G : Z.get("N-100")) && void 0 !== P ? P : l(_.n1.tone(100)), surfaceHeader: null !== (k = null !== (H = null == nn ? void 0 : nn.surfaceHeader) && void 0 !== H ? H : Z.get("N-90")) && void 0 !== k ? k : l(_.n1.tone(90)), underSurface: null !== (I = null !== (z = null == nn ? void 0 : nn.underSurface) && void 0 !== z ? z : Z.get("N-0")) && void 0 !== I ? I : l(_.n1.tone(0)), offState: null !== (L = null !== ($ = null == nn ? void 0 : nn.offState) && void 0 !== $ ? $ : Z.get("N-20")) && void 0 !== L ? L : l(_.n1.tone(20)), accentSurface: null !== (U = null !== (O = null == nn ? void 0 : nn.accentSurface) && void 0 !== O ? O : Z.get("NV-95")) && void 0 !== U ? U : l(_.a2.tone(95)), textPrimaryOnAccent: null !== (q = null !== (j = null == nn ? void 0 : nn.textPrimaryOnAccent) && void 0 !== j ? j : Z.get("N-10")) && void 0 !== q ? q : l(_.n1.tone(10)), textSecondaryOnAccent: null !== (J = null !== (W = null == nn ? void 0 : nn.textSecondaryOnAccent) && void 0 !== W ? W : Z.get("NV-30")) && void 0 !== J ? J : l(_.n2.tone(30)), volumeBackground: null !== (Q = null !== (K = null == nn ? void 0 : nn.volumeBackground) && void 0 !== K ? K : Z.get("N-25")) && void 0 !== Q ? Q : l(_.n1.tone(25)), scrim: null !== (Y = null !== (X = null == nn ? void 0 : nn.scrim) && void 0 !== X ? X : Z.get("N-80")) && void 0 !== Y ? Y : l(_.n1.tone(80)) }
                }
                get androidDark() {
                    var n, e, t, o, i, r, a, u, c, s, m, d, g, h, v, p, f, F, y, S, b, C, w, E, M, A, N, B, x, D, R, T, V, G, P, H, k, z, I, $, L, O, U, j, q, W, J, K, Q, X, Y, Z = this.palettes,
                        _ = this.props.tones,
                        nn = null === (n = this.props.overrides) || void 0 === n ? void 0 : n.androidDark;
                    return { colorAccentPrimary: null !== (t = null !== (e = null == nn ? void 0 : nn.colorAccentPrimary) && void 0 !== e ? e : Z.get("P-90")) && void 0 !== t ? t : l(_.a1.tone(90)), colorAccentPrimaryVariant: null !== (i = null !== (o = null == nn ? void 0 : nn.colorAccentPrimaryVariant) && void 0 !== o ? o : Z.get("P-70")) && void 0 !== i ? i : l(_.a1.tone(70)), colorAccentSecondary: null !== (a = null !== (r = null == nn ? void 0 : nn.colorAccentSecondary) && void 0 !== r ? r : Z.get("S-90")) && void 0 !== a ? a : l(_.a2.tone(90)), colorAccentSecondaryVariant: null !== (c = null !== (u = null == nn ? void 0 : nn.colorAccentSecondaryVariant) && void 0 !== u ? u : Z.get("S-70")) && void 0 !== c ? c : l(_.a2.tone(70)), colorAccentTertiary: null !== (m = null !== (s = null == nn ? void 0 : nn.colorAccentTertiary) && void 0 !== s ? s : Z.get("T-90")) && void 0 !== m ? m : l(_.a3.tone(90)), colorAccentTertiaryVariant: null !== (g = null !== (d = null == nn ? void 0 : nn.colorAccentTertiaryVariant) && void 0 !== d ? d : Z.get("T-70")) && void 0 !== g ? g : l(_.a3.tone(70)), textColorPrimary: null !== (v = null !== (h = null == nn ? void 0 : nn.textColorPrimary) && void 0 !== h ? h : Z.get("N-95")) && void 0 !== v ? v : l(_.n1.tone(95)), textColorSecondary: null !== (f = null !== (p = null == nn ? void 0 : nn.textColorSecondary) && void 0 !== p ? p : Z.get("NV-80")) && void 0 !== f ? f : l(_.n2.tone(80)), textColorTertiary: null !== (y = null !== (F = null == nn ? void 0 : nn.textColorTertiary) && void 0 !== F ? F : Z.get("NV-60")) && void 0 !== y ? y : l(_.n2.tone(60)), textColorPrimaryInverse: null !== (b = null !== (S = null == nn ? void 0 : nn.textColorPrimaryInverse) && void 0 !== S ? S : Z.get("N-10")) && void 0 !== b ? b : l(_.n1.tone(10)), textColorSecondaryInverse: null !== (w = null !== (C = null == nn ? void 0 : nn.textColorSecondaryInverse) && void 0 !== C ? C : Z.get("N-30")) && void 0 !== w ? w : l(_.n1.tone(30)), textColorTertiaryInverse: null !== (M = null !== (E = null == nn ? void 0 : nn.textColorTertiaryInverse) && void 0 !== E ? E : Z.get("N-50")) && void 0 !== M ? M : l(_.n1.tone(50)), colorBackground: null !== (N = null !== (A = null == nn ? void 0 : nn.colorBackground) && void 0 !== A ? A : Z.get("N-10")) && void 0 !== N ? N : l(_.n1.tone(10)), colorBackgroundFloating: null !== (x = null !== (B = null == nn ? void 0 : nn.colorBackgroundFloating) && void 0 !== B ? B : Z.get("N-10")) && void 0 !== x ? x : l(_.n1.tone(10)), colorSurface: null !== (R = null !== (D = null == nn ? void 0 : nn.colorSurface) && void 0 !== D ? D : Z.get("N-20")) && void 0 !== R ? R : l(_.n1.tone(20)), colorSurfaceVariant: null !== (V = null !== (T = null == nn ? void 0 : nn.colorSurfaceVariant) && void 0 !== T ? T : Z.get("N-30")) && void 0 !== V ? V : l(_.n1.tone(30)), colorSurfaceHighlight: null !== (P = null !== (G = null == nn ? void 0 : nn.colorSurfaceHighlight) && void 0 !== G ? G : Z.get("N-35")) && void 0 !== P ? P : l(_.n1.tone(35)), surfaceHeader: null !== (k = null !== (H = null == nn ? void 0 : nn.surfaceHeader) && void 0 !== H ? H : Z.get("N-30")) && void 0 !== k ? k : l(_.n1.tone(30)), underSurface: null !== (I = null !== (z = null == nn ? void 0 : nn.underSurface) && void 0 !== z ? z : Z.get("N-0")) && void 0 !== I ? I : l(_.n1.tone(0)), offState: null !== (L = null !== ($ = null == nn ? void 0 : nn.offState) && void 0 !== $ ? $ : Z.get("N-20")) && void 0 !== L ? L : l(_.n1.tone(20)), accentSurface: null !== (U = null !== (O = null == nn ? void 0 : nn.accentSurface) && void 0 !== O ? O : Z.get("NV-95")) && void 0 !== U ? U : l(_.a2.tone(95)), textPrimaryOnAccent: null !== (q = null !== (j = null == nn ? void 0 : nn.textPrimaryOnAccent) && void 0 !== j ? j : Z.get("N-10")) && void 0 !== q ? q : l(_.n1.tone(10)), textSecondaryOnAccent: null !== (J = null !== (W = null == nn ? void 0 : nn.textSecondaryOnAccent) && void 0 !== W ? W : Z.get("NV-30")) && void 0 !== J ? J : l(_.n2.tone(30)), volumeBackground: null !== (Q = null !== (K = null == nn ? void 0 : nn.volumeBackground) && void 0 !== K ? K : Z.get("N-25")) && void 0 !== Q ? Q : l(_.n1.tone(25)), scrim: null !== (Y = null !== (X = null == nn ? void 0 : nn.scrim) && void 0 !== X ? X : Z.get("N-80")) && void 0 !== Y ? Y : l(_.n1.tone(80)) }
                }
                get tonalGroups() { return Object.assign({ primary: this.primaryGroup, secondary: this.secondaryGroup, tertiary: this.tertiaryGroup, neutral: this.neutralGroup, neutralVariant: this.neutralVariantGroup, error: this.errorGroup }, this.props.overrides.tonalGroups) }
                get primaryGroup() { return i(this, "primary", this.props.tones.a1) }
                get secondaryGroup() { return i(this, "secondary", this.props.tones.a2) }
                get tertiaryGroup() { return i(this, "tertiary", this.props.tones.a3) }
                get neutralGroup() { return i(this, "neutral", this.props.tones.n1) }
                get neutralVariantGroup() { return i(this, "neutralVariant", this.props.tones.n2) }
                get errorGroup() { return i(this, "error", this.props.tones.error) }
                get primary() { return r("P", this.primaryGroup) }
                get secondary() { return r("S", this.secondaryGroup) }
                get tertiary() { return r("T", this.tertiaryGroup) }
                get neutral() { return r("N", this.neutralGroup) }
                get neutralVariant() { return r("NV", this.neutralVariantGroup) }
                get error() { return r("E", this.errorGroup) }
                get palettes() { let n = []; return n = n.concat(Array.from(this.primary.entries())), n = n.concat(Array.from(this.secondary.entries())), n = n.concat(Array.from(this.tertiary.entries())), n = n.concat(Array.from(this.neutral.entries())), n = n.concat(Array.from(this.neutralVariant.entries())), n = n.concat(Array.from(this.error.entries())), new Map(n) }
                get seedValue() { return this.props.seed }
                get source() {
                    var n, e, o, l, i, r;
                    const a = this.palettes,
                        u = this.props.overrides.source;
                    return Object.assign(Object.assign({}, u), { seed: this.seedValue, imageUrl: this.imageUrl, primary: null !== (n = null == u ? void 0 : u.primary) && void 0 !== n ? n : t(this, "P", a), secondary: null !== (e = null == u ? void 0 : u.secondary) && void 0 !== e ? e : t(this, "S", a), tertiary: null !== (o = null == u ? void 0 : u.tertiary) && void 0 !== o ? o : t(this, "T", a), neutral: null !== (l = null == u ? void 0 : u.neutral) && void 0 !== l ? l : t(this, "N", a), neutralVariant: null !== (i = null == u ? void 0 : u.neutralVariant) && void 0 !== i ? i : t(this, "NV", a), error: null !== (r = null == u ? void 0 : u.error) && void 0 !== r ? r : t(this, "E", a) })
                }
                get customColors() { var n, e; return [...null !== (e = null === (n = this.props.overrides) || void 0 === n ? void 0 : n.customColors) && void 0 !== e ? e : []] }
                save() { const n = { seed: this.seedValue, baseline: this.props.isBaseline, imageUrl: this.imageUrl, customColors: this.customColors, light: this.light, dark: this.dark, androidLight: A.enableAndroid ? this.androidLight : void 0, androidDark: A.enableAndroid ? this.androidDark : void 0, primary: this.primaryGroup, secondary: this.secondaryGroup, tertiary: this.tertiaryGroup, neutral: this.neutralGroup, neutralVariant: this.neutralVariantGroup, error: this.errorGroup, styles: this.styles, source: this.source }; return console.debug("saved theme", n), n }
            } {}({ tones: s, seed: a, is3p: c, overrides: {}, blend: !1, isBaseline: !1 })
        }),
        B = n => {
            const e = (65280 & n) >> 8,
                t = 255 & n,
                o = [((16711680 & n) >> 16).toString(16), e.toString(16), t.toString(16)];
            for (const [n, e] of o.entries()) {
                const t = n,
                    l = e;
                1 === l.length && (o[t] = "0" + l)
            }
            return "#" + o.join("")
        },
        x = function(n) {
            let e = 0;
            for (const t of n.values()) e += t;
            const t = new Map,
                o = new Map,
                l = Array(360).fill(0);
            for (const [i, r] of n.entries()) {
                const n = i,
                    a = r / e;
                t.set(n, a);
                const u = M(n);
                o.set(n, u), l[Math.round(u.hue)] += a
            }
            const i = new Map;
            for (const [n, e] of o.entries()) {
                const t = n,
                    o = Math.round(e.hue);
                let r = 0;
                for (let n = o - 15; n < o + 15; n++) r += l[v(n)];
                i.set(t, r)
            }
            const r = new Map;
            for (const [n, e] of o.entries()) {
                const t = n,
                    o = e,
                    l = 70 * i.get(t);
                r.set(t, l + (o.chroma - 48) * (48 > o.chroma ? .1 : .3))
            }
            const a = function(n, e) {
                    const t = [];
                    for (const [o, l] of e.entries()) {
                        const e = o,
                            i = l,
                            r = n.get(e);
                        15 <= i.chroma && 10 <= F(e) && .01 <= r && t.push(e)
                    }
                    return t
                }(i, o),
                u = new Map;
            for (const n of a) {
                let e = !1;
                const t = o.get(n).hue;
                for (const [n] of u) { const l = o.get(n).hue; if (15 > 180 - Math.abs(Math.abs(t - l) - 180)) { e = !0; break } }
                e || u.set(n, r.get(n))
            }
            const c = Array.from(u.entries());
            c.sort(((n, e) => e[1] - n[1]));
            const s = c.map((n => n[0]));
            return 0 === s.length && s.push(4282549748), s
        };
    class D { constructor() { this.index = this.distance = -1 } }
    const R = n => {
        const e = 216 / 24389,
            t = 24389 / 27,
            o = 100 * E(((16711680 & n) >> 16) / 255),
            l = 100 * E(((65280 & n) >> 8) / 255),
            i = 100 * E((255 & n) / 255),
            r = (.2126 * o + .7152 * l + .0722 * i) / C[1];
        let a;
        a = r > e ? Math.pow(r, 1 / 3) : (t * r + 16) / 116;
        const u = (.41233895 * o + .35762064 * l + .18051042 * i) / C[0],
            c = (.01932141 * o + .11916382 * l + .95034478 * i) / C[2];
        return [116 * a - 16, 500 * ((u > e ? Math.pow(u, 1 / 3) : (t * u + 16) / 116) - a), 200 * (a - (c > e ? Math.pow(c, 1 / 3) : (t * c + 16) / 116))]
    };
    class T { constructor(n) { this.resultCount = n } }
    const V = function(n, e) {
        const t = n.volume(e, n.momentsR),
            o = n.volume(e, n.momentsG),
            l = n.volume(e, n.momentsB);
        return n.moments[z(e.r1, e.g1, e.b1)] - n.moments[z(e.r1, e.g1, e.b0)] - n.moments[z(e.r1, e.g0, e.b1)] + n.moments[z(e.r1, e.g0, e.b0)] - n.moments[z(e.r0, e.g1, e.b1)] + n.moments[z(e.r0, e.g1, e.b0)] + n.moments[z(e.r0, e.g0, e.b1)] - n.moments[z(e.r0, e.g0, e.b0)] - (t * t + o * o + l * l) / n.volume(e, n.weights)
    };
    class G { constructor(n, e) { this.cutLocation = n, this.maximum = e } }
    const P = function(n, e, t, o, l, i, r, a, u) {
            const c = n.bottom(e, t, n.momentsR),
                s = n.bottom(e, t, n.momentsG),
                m = n.bottom(e, t, n.momentsB),
                d = n.bottom(e, t, n.weights);
            let g, h, v, p, f = 0,
                F = -1;
            for (let y = o; y < l; y++) {
                if (g = c + n.top(e, t, y, n.momentsR), h = s + n.top(e, t, y, n.momentsG), v = m + n.top(e, t, y, n.momentsB), p = d + n.top(e, t, y, n.weights), 0 === p) continue;
                let o = g * g + h * h + v * v,
                    l = 1 * p,
                    S = o / l;
                g = i - g, h = r - h, v = a - v, p = u - p, 0 !== p && (o = g * g + h * h + v * v, l = 1 * p, S += o / l, S > f && (f = S, F = y))
            }
            return new G(F, f)
        },
        H = function(n, e, t) {
            const o = n.volume(e, n.momentsR),
                l = n.volume(e, n.momentsG),
                i = n.volume(e, n.momentsB),
                r = n.volume(e, n.weights),
                a = P(n, e, "red", e.r0 + 1, e.r1, o, l, i, r),
                u = P(n, e, "green", e.g0 + 1, e.g1, o, l, i, r),
                c = P(n, e, "blue", e.b0 + 1, e.b1, o, l, i, r);
            let s;
            const m = a.maximum,
                d = u.maximum,
                g = c.maximum;
            if (m >= d && m >= g) {
                if (0 > a.cutLocation) return !1;
                s = "red"
            } else s = d >= m && d >= g ? "green" : "blue";
            switch (t.r1 = e.r1, t.g1 = e.g1, t.b1 = e.b1, s) {
                case "red":
                    e.r1 = a.cutLocation, t.r0 = e.r1, t.g0 = e.g0, t.b0 = e.b0;
                    break;
                case "green":
                    e.g1 = u.cutLocation, t.r0 = e.r0, t.g0 = e.g1, t.b0 = e.b0;
                    break;
                case "blue":
                    e.b1 = c.cutLocation, t.r0 = e.r0, t.g0 = e.g0, t.b0 = e.b1;
                    break;
                default:
                    throw Error("unexpected direction " + s)
            }
            return e.vol = (e.r1 - e.r0) * (e.g1 - e.g0) * (e.b1 - e.b0), t.vol = (t.r1 - t.r0) * (t.g1 - t.g0) * (t.b1 - t.b0), !0
        };
    class k { constructor() { this.vol = this.b1 = this.b0 = this.g1 = this.g0 = this.r1 = this.r0 = 0 } }
    const z = function(n, e, t) { return (n << 10) + (n << 6) + n + (e << 5) + e + t },
        I = class {};
    class $ extends I {
        constructor(n) { super(), this.privateDoNotAccessOrElseWrappedUrl = n }
        toString() { return this.privateDoNotAccessOrElseWrappedUrl }
    }
    const L = async function(n) {
            const e = function(n) { const e = n.type.match(/^([^;]+)(?:;\w+=(?:\w+|"[\w;,= ]+"))*$/i); if (2 !== (null == e ? void 0 : e.length) || !(/^image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)$/i.test(e[1]) || /^video\/(?:mpeg|mp4|ogg|webm|x-matroska|quicktime|x-ms-wmv)$/i.test(e[1]) || /^audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)$/i.test(e[1]))) throw Error(`unsafe blob MIME type: ${n.type}`); return new $(URL.createObjectURL(n)) }(new Blob([n], { type: "image/png" })),
                t = await new Promise(((n, t) => {
                    const o = new Image;
                    o.onload = () => { n(o) }, o.onerror = () => { t() }, o.src = function(n) { if (n instanceof I) { if (!(n instanceof $)) throw Error("Unexpected type when unwrapping SafeUrl"); var e = n.privateDoNotAccessOrElseWrappedUrl } else e = unwrap(n); return e }(e)
                })),
                o = document.createElement("canvas").getContext("2d");
            return o.canvas.width = 112, o.canvas.height = 112, o.drawImage(t, 0, 0, t.width, t.height, 0, 0, o.canvas.width, o.canvas.height), o.getImageData(0, 0, t.width, t.height)
        },
        O = async function(n) {
            const e = "string" == typeof n ? await (await fetch(n)).arrayBuffer() : n;
            var t, o, l = await async function(n) {
                    const e = new Uint8Array(n),
                        t = await L(e),
                        o = [];
                    for (let n = 0; n < t.data.length; n += 4) 255 > t.data[n + 3] || o.push(s([t.data[n], t.data[n + 1], t.data[n + 2]]));
                    return o
                }(e),
                i = new class {
                    constructor() { this.weights = [], this.momentsR = [], this.momentsG = [], this.momentsB = [], this.moments = [], this.cubes = [] }
                    volume(n, e) { return e[z(n.r1, n.g1, n.b1)] - e[z(n.r1, n.g1, n.b0)] - e[z(n.r1, n.g0, n.b1)] + e[z(n.r1, n.g0, n.b0)] - e[z(n.r0, n.g1, n.b1)] + e[z(n.r0, n.g1, n.b0)] + e[z(n.r0, n.g0, n.b1)] - e[z(n.r0, n.g0, n.b0)] }
                    bottom(n, e, t) {
                        switch (e) {
                            case "red":
                                return -t[z(n.r0, n.g1, n.b1)] + t[z(n.r0, n.g1, n.b0)] + t[z(n.r0, n.g0, n.b1)] - t[z(n.r0, n.g0, n.b0)];
                            case "green":
                                return -t[z(n.r1, n.g0, n.b1)] + t[z(n.r1, n.g0, n.b0)] + t[z(n.r0, n.g0, n.b1)] - t[z(n.r0, n.g0, n.b0)];
                            case "blue":
                                return -t[z(n.r1, n.g1, n.b0)] + t[z(n.r1, n.g0, n.b0)] + t[z(n.r0, n.g1, n.b0)] - t[z(n.r0, n.g0, n.b0)];
                            default:
                                throw Error("unexpected direction $direction")
                        }
                    }
                    top(n, e, t, o) {
                        switch (e) {
                            case "red":
                                return o[z(t, n.g1, n.b1)] - o[z(t, n.g1, n.b0)] - o[z(t, n.g0, n.b1)] + o[z(t, n.g0, n.b0)];
                            case "green":
                                return o[z(n.r1, t, n.b1)] - o[z(n.r1, t, n.b0)] - o[z(n.r0, t, n.b1)] + o[z(n.r0, t, n.b0)];
                            case "blue":
                                return o[z(n.r1, n.g1, t)] - o[z(n.r1, n.g0, t)] - o[z(n.r0, n.g1, t)] + o[z(n.r0, n.g0, t)];
                            default:
                                throw Error("unexpected direction $direction")
                        }
                    }
                };
            i.weights = Array.from({ length: 35937 }).fill(0), i.momentsR = Array.from({ length: 35937 }).fill(0), i.momentsG = Array.from({ length: 35937 }).fill(0), i.momentsB = Array.from({ length: 35937 }).fill(0), i.moments = Array.from({ length: 35937 }).fill(0);
            const r = new Map;
            for (let n = 0; n < l.length; n++) {
                const e = l[n];
                255 > (4278190080 & e) >> 24 >>> 0 || r.set(e, (null !== (o = r.get(e)) && void 0 !== o ? o : 0) + 1)
            }
            for (const [n, e] of r.entries()) {
                const o = e,
                    l = (16711680 & n) >> 16,
                    r = (65280 & n) >> 8,
                    a = 255 & n,
                    u = z(1 + (l >> 3), 1 + (r >> 3), 1 + (a >> 3));
                i.weights[u] = (null !== (t = i.weights[u]) && void 0 !== t ? t : 0) + o, i.momentsR[u] += o * l, i.momentsG[u] += o * r, i.momentsB[u] += o * a, i.moments[u] += o * (l * l + r * r + a * a)
            }
            for (let n = 1; 33 > n; n++) {
                const e = Array.from({ length: 33 }).fill(0),
                    t = Array.from({ length: 33 }).fill(0),
                    o = Array.from({ length: 33 }).fill(0),
                    l = Array.from({ length: 33 }).fill(0),
                    r = Array.from({ length: 33 }).fill(0);
                for (let a = 1; 33 > a; a++) {
                    let u = 0,
                        c = 0,
                        s = 0,
                        m = 0,
                        d = 0;
                    for (let g = 1; 33 > g; g++) {
                        const h = z(n, a, g);
                        u += i.weights[h], c += i.momentsR[h], s += i.momentsG[h], m += i.momentsB[h], d += i.moments[h], e[g] += u, t[g] += c, o[g] += s, l[g] += m, r[g] += d;
                        const v = z(n - 1, a, g);
                        i.weights[h] = i.weights[v] + e[g], i.momentsR[h] = i.momentsR[v] + t[g], i.momentsG[h] = i.momentsG[v] + o[g], i.momentsB[h] = i.momentsB[v] + l[g], i.moments[h] = i.moments[v] + r[g]
                    }
                }
            }
            var a = function(n) {
                n.cubes = Array.from({ length: 256 }).fill(0).map((() => new k));
                const e = Array.from({ length: 256 }).fill(0);
                n.cubes[0].r0 = 0, n.cubes[0].g0 = 0, n.cubes[0].b0 = 0, n.cubes[0].r1 = 32, n.cubes[0].g1 = 32, n.cubes[0].b1 = 32;
                let t = 256,
                    o = 0;
                for (let l = 1; 256 > l; l++) { H(n, n.cubes[o], n.cubes[l]) ? (e[o] = 1 < n.cubes[o].vol ? V(n, n.cubes[o]) : 0, e[l] = 1 < n.cubes[l].vol ? V(n, n.cubes[l]) : 0) : (e[o] = 0, l--), o = 0; let i = e[0]; for (let n = 1; n <= l; n++) e[n] > i && (i = e[n], o = n); if (0 >= i) { t = l + 1; break } }
                return new T(t)
            }(i).resultCount;
            const u = [];
            for (let n = 0; n < a; ++n) {
                const e = i.cubes[n],
                    t = i.volume(e, i.weights);
                if (0 < t) {
                    const n = Math.round(i.volume(e, i.momentsR) / t),
                        o = Math.round(i.volume(e, i.momentsG) / t),
                        l = Math.round(i.volume(e, i.momentsB) / t);
                    u.push(-16777216 | (255 & n) << 16 | (255 & o) << 8 | 255 & l)
                }
            }
            const c = new Map,
                d = [],
                g = [],
                h = new class {
                    toInt(n) {
                        var e = n[0];
                        const t = 216 / 24389,
                            o = 24389 / 27,
                            l = (e + 16) / 116,
                            i = n[1] / 500 + l,
                            r = l - n[2] / 200,
                            a = i * i * i,
                            u = r * r * r;
                        var c = [(a > t ? a : (116 * i - 16) / o) * C[0], (8 < e ? l * l * l : e / o) * C[1], (u > t ? u : (116 * r - 16) / o) * C[2]];
                        return m(c[0], c[1], c[2])
                    }
                    distance(n, e) {
                        const t = n[0] - e[0],
                            o = n[1] - e[1],
                            l = n[2] - e[2];
                        return t * t + o * o + l * l
                    }
                };
            let v = 0;
            for (let n = 0; n < l.length; n++) {
                const e = l[n],
                    t = c.get(e);
                void 0 === t ? (v++, d.push(R(e)), g.push(e), c.set(e, 1)) : c.set(e, t + 1)
            }
            const p = [];
            for (let n = 0; n < v; n++) {
                const e = c.get(g[n]);
                void 0 !== e && (p[n] = e)
            }
            let f = Math.min(256, v);
            0 < u.length && (f = Math.min(f, u.length));
            const F = [];
            for (let n = 0; n < u.length; n++) F.push(R(u[n]));
            const y = f - F.length;
            if (0 === u.length && 0 < y)
                for (let n = 0; n < y; n++) F.push([100 * Math.random(), 201 * Math.random() - 100, 201 * Math.random() - 100]);
            const S = [];
            for (let n = 0; n < v; n++) S.push(Math.floor(Math.random() * f));
            const b = [];
            for (let n = 0; n < f; n++) { b.push([]); for (let e = 0; e < f; e++) b[n].push(0) }
            const w = [];
            for (let n = 0; n < f; n++) { w.push([]); for (let e = 0; e < f; e++) w[n].push(new D) }
            const E = [];
            for (let n = 0; n < f; n++) E.push(0);
            for (let n = 0; 10 > n; n++) {
                for (let n = 0; n < f; n++) {
                    for (let e = n + 1; e < f; e++) {
                        const t = h.distance(F[n], F[e]);
                        w[e][n].distance = t, w[e][n].index = n, w[n][e].distance = t, w[n][e].index = e
                    }
                    w[n].sort();
                    for (let e = 0; e < f; e++) b[n][e] = w[n][e].index
                }
                let e = 0;
                for (let n = 0; n < v; n++) {
                    const t = d[n],
                        o = S[n],
                        l = h.distance(t, F[o]);
                    let i = l,
                        r = -1;
                    for (let n = 0; n < f; n++) {
                        if (w[o][n].distance >= 4 * l) continue;
                        const e = h.distance(t, F[n]);
                        e < i && (i = e, r = n)
                    } - 1 !== r && 3 < Math.abs(Math.sqrt(i) - Math.sqrt(l)) && (e++, S[n] = r)
                }
                if (0 === e && 0 !== n) break;
                const t = Array(f).fill(0),
                    o = Array(f).fill(0),
                    l = Array(f).fill(0);
                for (let n = 0; n < f; n++) E[n] = 0;
                for (let n = 0; n < v; n++) {
                    const e = S[n],
                        i = d[n],
                        r = p[n];
                    E[e] += r, t[e] += i[0] * r, o[e] += i[1] * r, l[e] += i[2] * r
                }
                for (let n = 0; n < f; n++) {
                    const e = E[n];
                    F[n] = 0 === e ? [0, 0, 0] : [t[n] / e, o[n] / e, l[n] / e]
                }
            }
            const M = new Map;
            for (let n = 0; n < f; n++) {
                const e = E[n];
                if (0 === e) continue;
                const t = h.toInt(F[n]);
                M.has(t) || M.set(t, e)
            }
            const A = x(M);
            return B(A[0])
        };
    materialDynamicColors = async function(n) {
        if (/\#[a-fA-F0-9]{6}/.test(n)) { let e = N(n); return { light: e.light, dark: e.dark } }
        let e = n;
        (n instanceof Blob || n instanceof File) && (e = URL.createObjectURL(n)), n.target && n.target.files[0] && (e = URL.createObjectURL(n.target.files[0])), n.files && n.files[0] && (e = URL.createObjectURL(n.files[0]));
        let t = await O(e),
            o = N(t);
        return { light: o.light, dark: o.dark }
    }
})();
! function(e, t) {
    "use strict";
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document) throw new Error("jQuery requires a window with a document");
        return t(e)
    } : t(e)
}("undefined" != typeof window ? window : this, function(E, e) {
    "use strict";

    function m(e) {
        return null != e && e === e.window
    }
    var t = [],
        T = E.document,
        n = Object.getPrototypeOf,
        o = t.slice,
        v = t.concat,
        l = t.push,
        r = t.indexOf,
        i = {},
        a = i.toString,
        g = i.hasOwnProperty,
        s = g.toString,
        d = s.call(Object),
        y = {},
        b = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        },
        u = {
            type: !0,
            src: !0,
            noModule: !0
        };

    function w(e, t, n) {
        var i, r = (t = t || T).createElement("script");
        if (r.text = e, n)
            for (i in u) n[i] && (r[i] = n[i]);
        t.head.appendChild(r).parentNode.removeChild(r)
    }

    function f(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[a.call(e)] || "object" : typeof e
    }
    var C = function(e, t) {
            return new C.fn.init(e, t)
        },
        c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function p(e) {
        var t = !!e && "length" in e && e.length,
            n = f(e);
        return !b(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
    }
    C.fn = C.prototype = {
        jquery: "3.3.1",
        constructor: C,
        length: 0,
        toArray: function() {
            return o.call(this)
        },
        get: function(e) {
            return null == e ? o.call(this) : e < 0 ? this[e + this.length] : this[e]
        },
        pushStack: function(e) {
            e = C.merge(this.constructor(), e);
            return e.prevObject = this, e
        },
        each: function(e) {
            return C.each(this, e)
        },
        map: function(n) {
            return this.pushStack(C.map(this, function(e, t) {
                return n.call(e, t, e)
            }))
        },
        slice: function() {
            return this.pushStack(o.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length,
                e = +e + (e < 0 ? t : 0);
            return this.pushStack(0 <= e && e < t ? [this[e]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: l,
        sort: t.sort,
        splice: t.splice
    }, C.extend = C.fn.extend = function() {
        var e, t, n, i, r, a = arguments[0] || {},
            s = 1,
            o = arguments.length,
            l = !1;
        for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || b(a) || (a = {}), s === o && (a = this, s--); s < o; s++)
            if (null != (e = arguments[s]))
                for (t in e) r = a[t], a !== (n = e[t]) && (l && n && (C.isPlainObject(n) || (i = Array.isArray(n))) ? (r = i ? (i = !1, r && Array.isArray(r) ? r : []) : r && C.isPlainObject(r) ? r : {}, a[t] = C.extend(l, r, n)) : void 0 !== n && (a[t] = n));
        return a
    }, C.extend({
        expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isPlainObject: function(e) {
            return !(!e || "[object Object]" !== a.call(e) || (e = n(e)) && ("function" != typeof(e = g.call(e, "constructor") && e.constructor) || s.call(e) !== d))
        },
        isEmptyObject: function(e) {
            for (var t in e) return !1;
            return !0
        },
        globalEval: function(e) {
            w(e)
        },
        each: function(e, t) {
            var n, i = 0;
            if (p(e))
                for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++);
            else
                for (i in e)
                    if (!1 === t.call(e[i], i, e[i])) break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(c, "")
        },
        makeArray: function(e, t) {
            t = t || [];
            return null != e && (p(Object(e)) ? C.merge(t, "string" == typeof e ? [e] : e) : l.call(t, e)), t
        },
        inArray: function(e, t, n) {
            return null == t ? -1 : r.call(t, e, n)
        },
        merge: function(e, t) {
            for (var n = +t.length, i = 0, r = e.length; i < n; i++) e[r++] = t[i];
            return e.length = r, e
        },
        grep: function(e, t, n) {
            for (var i = [], r = 0, a = e.length, s = !n; r < a; r++) !t(e[r], r) != s && i.push(e[r]);
            return i
        },
        map: function(e, t, n) {
            var i, r, a = 0,
                s = [];
            if (p(e))
                for (i = e.length; a < i; a++) null != (r = t(e[a], a, n)) && s.push(r);
            else
                for (a in e) null != (r = t(e[a], a, n)) && s.push(r);
            return v.apply([], s)
        },
        guid: 1,
        support: y
    }), "function" == typeof Symbol && (C.fn[Symbol.iterator] = t[Symbol.iterator]), C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        i["[object " + t + "]"] = t.toLowerCase()
    });
    var h = function(n) {
        function c(e, t, n) {
            var i = "0x" + t - 65536;
            return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }

        function i() {
            E()
        }
        var e, h, w, a, r, f, p, m, x, l, d, E, T, s, C, v, o, u, g, S = "sizzle" + +new Date,
            y = n.document,
            k = 0,
            b = 0,
            M = se(),
            L = se(),
            P = se(),
            $ = function(e, t) {
                return e === t && (d = !0), 0
            },
            A = {}.hasOwnProperty,
            t = [],
            z = t.pop,
            D = t.push,
            O = t.push,
            N = t.slice,
            I = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t) return n;
                return -1
            },
            H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            q = "[\\x20\\t\\r\\n\\f]",
            R = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            j = "\\[" + q + "*(" + R + ")(?:" + q + "*([*^$|!~]?=)" + q + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + R + "))|)" + q + "*\\]",
            B = ":(" + R + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + j + ")*)|.*)\\)|)",
            F = new RegExp(q + "+", "g"),
            W = new RegExp("^" + q + "+|((?:^|[^\\\\])(?:\\\\.)*)" + q + "+$", "g"),
            G = new RegExp("^" + q + "*," + q + "*"),
            _ = new RegExp("^" + q + "*([>+~]|" + q + ")" + q + "*"),
            X = new RegExp("=" + q + "*([^\\]'\"]*?)" + q + "*\\]", "g"),
            V = new RegExp(B),
            Y = new RegExp("^" + R + "$"),
            U = {
                ID: new RegExp("^#(" + R + ")"),
                CLASS: new RegExp("^\\.(" + R + ")"),
                TAG: new RegExp("^(" + R + "|[*])"),
                ATTR: new RegExp("^" + j),
                PSEUDO: new RegExp("^" + B),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + q + "*(even|odd|(([+-]|)(\\d*)n|)" + q + "*(?:([+-]|)" + q + "*(\\d+)|))" + q + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + H + ")$", "i"),
                needsContext: new RegExp("^" + q + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + q + "*((?:-\\d)?\\d*)" + q + "*\\)|)(?=[^-]|$)", "i")
            },
            K = /^(?:input|select|textarea|button)$/i,
            Q = /^h\d$/i,
            J = /^[^{]+\{\s*\[native \w/,
            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ee = /[+~]/,
            te = new RegExp("\\\\([\\da-f]{1,6}" + q + "?|(" + q + ")|.)", "ig"),
            ne = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            ie = function(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            },
            re = ve(function(e) {
                return !0 === e.disabled && ("form" in e || "label" in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            O.apply(t = N.call(y.childNodes), y.childNodes), t[y.childNodes.length].nodeType
        } catch (n) {
            O = {
                apply: t.length ? function(e, t) {
                    D.apply(e, N.call(t))
                } : function(e, t) {
                    for (var n = e.length, i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }

        function ae(e, t, n, i) {
            var r, a, s, o, l, d, u, c = t && t.ownerDocument,
                p = t ? t.nodeType : 9;
            if (n = n || [], "string" != typeof e || !e || 1 !== p && 9 !== p && 11 !== p) return n;
            if (!i && ((t ? t.ownerDocument || t : y) !== T && E(t), t = t || T, C)) {
                if (11 !== p && (l = Z.exec(e)))
                    if (r = l[1]) {
                        if (9 === p) {
                            if (!(s = t.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (c && (s = c.getElementById(r)) && g(t, s) && s.id === r) return n.push(s), n
                    } else {
                        if (l[2]) return O.apply(n, t.getElementsByTagName(e)), n;
                        if ((r = l[3]) && h.getElementsByClassName && t.getElementsByClassName) return O.apply(n, t.getElementsByClassName(r)), n
                    }
                if (h.qsa && !P[e + " "] && (!v || !v.test(e))) {
                    if (1 !== p) c = t, u = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((o = t.getAttribute("id")) ? o = o.replace(ne, ie) : t.setAttribute("id", o = S), a = (d = f(e)).length; a--;) d[a] = "#" + o + " " + me(d[a]);
                        u = d.join(","), c = ee.test(e) && he(t.parentNode) || t
                    }
                    if (u) try {
                        return O.apply(n, c.querySelectorAll(u)), n
                    } catch (e) {} finally {
                        o === S && t.removeAttribute("id")
                    }
                }
            }
            return m(e.replace(W, "$1"), t, n, i)
        }

        function se() {
            var n = [];

            function i(e, t) {
                return n.push(e + " ") > w.cacheLength && delete i[n.shift()], i[e + " "] = t
            }
            return i
        }

        function oe(e) {
            return e[S] = !0, e
        }

        function le(e) {
            var t = T.createElement("fieldset");
            try {
                return !!e(t)
            } catch (e) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t), t = null
            }
        }

        function de(e, t) {
            for (var n = e.split("|"), i = n.length; i--;) w.attrHandle[n[i]] = t
        }

        function ue(e, t) {
            var n = t && e,
                i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === t) return -1;
            return e ? 1 : -1
        }

        function ce(t) {
            return function(e) {
                return "form" in e ? e.parentNode && !1 === e.disabled ? "label" in e ? "label" in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && re(e) === t : e.disabled === t : "label" in e && e.disabled === t
            }
        }

        function pe(s) {
            return oe(function(a) {
                return a = +a, oe(function(e, t) {
                    for (var n, i = s([], e.length, a), r = i.length; r--;) e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                })
            })
        }

        function he(e) {
            return e && void 0 !== e.getElementsByTagName && e
        }
        for (e in h = ae.support = {}, r = ae.isXML = function(e) {
                e = e && (e.ownerDocument || e).documentElement;
                return !!e && "HTML" !== e.nodeName
            }, E = ae.setDocument = function(e) {
                var t, e = e ? e.ownerDocument || e : y;
                return e !== T && 9 === e.nodeType && e.documentElement && (s = (T = e).documentElement, C = !r(T), y !== T && (t = T.defaultView) && t.top !== t && (t.addEventListener ? t.addEventListener("unload", i, !1) : t.attachEvent && t.attachEvent("onunload", i)), h.attributes = le(function(e) {
                    return e.className = "i", !e.getAttribute("className")
                }), h.getElementsByTagName = le(function(e) {
                    return e.appendChild(T.createComment("")), !e.getElementsByTagName("*").length
                }), h.getElementsByClassName = J.test(T.getElementsByClassName), h.getById = le(function(e) {
                    return s.appendChild(e).id = S, !T.getElementsByName || !T.getElementsByName(S).length
                }), h.getById ? (w.filter.ID = function(e) {
                    var t = e.replace(te, c);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        e = t.getElementById(e);
                        return e ? [e] : []
                    }
                }) : (w.filter.ID = function(e) {
                    var t = e.replace(te, c);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }, w.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && C) {
                        var n, i, r, a = t.getElementById(e);
                        if (a) {
                            if ((n = a.getAttributeNode("id")) && n.value === e) return [a];
                            for (r = t.getElementsByName(e), i = 0; a = r[i++];)
                                if ((n = a.getAttributeNode("id")) && n.value === e) return [a]
                        }
                        return []
                    }
                }), w.find.TAG = h.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : h.qsa ? t.querySelectorAll(e) : void 0
                } : function(e, t) {
                    var n, i = [],
                        r = 0,
                        a = t.getElementsByTagName(e);
                    if ("*" !== e) return a;
                    for (; n = a[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }, w.find.CLASS = h.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && C) return t.getElementsByClassName(e)
                }, o = [], v = [], (h.qsa = J.test(T.querySelectorAll)) && (le(function(e) {
                    s.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + q + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + q + "*(?:value|" + H + ")"), e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="), e.querySelectorAll(":checked").length || v.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]")
                }), le(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = T.createElement("input");
                    t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + q + "*[*^$|!~]?="), 2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"), s.appendChild(e).disabled = !0, 2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:")
                })), (h.matchesSelector = J.test(u = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && le(function(e) {
                    h.disconnectedMatch = u.call(e, "*"), u.call(e, "[s!='']:x"), o.push("!=", B)
                }), v = v.length && new RegExp(v.join("|")), o = o.length && new RegExp(o.join("|")), t = J.test(s.compareDocumentPosition), g = t || J.test(s.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                        t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                } : function(e, t) {
                    if (t)
                        for (; t = t.parentNode;)
                            if (t === e) return !0;
                    return !1
                }, $ = t ? function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !h.sortDetached && t.compareDocumentPosition(e) === n ? e === T || e.ownerDocument === y && g(y, e) ? -1 : t === T || t.ownerDocument === y && g(y, t) ? 1 : l ? I(l, e) - I(l, t) : 0 : 4 & n ? -1 : 1)
                } : function(e, t) {
                    if (e === t) return d = !0, 0;
                    var n, i = 0,
                        r = e.parentNode,
                        a = t.parentNode,
                        s = [e],
                        o = [t];
                    if (!r || !a) return e === T ? -1 : t === T ? 1 : r ? -1 : a ? 1 : l ? I(l, e) - I(l, t) : 0;
                    if (r === a) return ue(e, t);
                    for (n = e; n = n.parentNode;) s.unshift(n);
                    for (n = t; n = n.parentNode;) o.unshift(n);
                    for (; s[i] === o[i];) i++;
                    return i ? ue(s[i], o[i]) : s[i] === y ? -1 : o[i] === y ? 1 : 0
                }), T
            }, ae.matches = function(e, t) {
                return ae(e, null, null, t)
            }, ae.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== T && E(e), t = t.replace(X, "='$1']"), h.matchesSelector && C && !P[t + " "] && (!o || !o.test(t)) && (!v || !v.test(t))) try {
                    var n = u.call(e, t);
                    if (n || h.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
                } catch (e) {}
                return 0 < ae(t, T, null, [e]).length
            }, ae.contains = function(e, t) {
                return (e.ownerDocument || e) !== T && E(e), g(e, t)
            }, ae.attr = function(e, t) {
                (e.ownerDocument || e) !== T && E(e);
                var n = w.attrHandle[t.toLowerCase()],
                    n = n && A.call(w.attrHandle, t.toLowerCase()) ? n(e, t, !C) : void 0;
                return void 0 !== n ? n : h.attributes || !C ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }, ae.escape = function(e) {
                return (e + "").replace(ne, ie)
            }, ae.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }, ae.uniqueSort = function(e) {
                var t, n = [],
                    i = 0,
                    r = 0;
                if (d = !h.detectDuplicates, l = !h.sortStable && e.slice(0), e.sort($), d) {
                    for (; t = e[r++];) t === e[r] && (i = n.push(r));
                    for (; i--;) e.splice(n[i], 1)
                }
                return l = null, e
            }, a = ae.getText = function(e) {
                var t, n = "",
                    i = 0,
                    r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent) return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling) n += a(e)
                    } else if (3 === r || 4 === r) return e.nodeValue
                } else
                    for (; t = e[i++];) n += a(t);
                return n
            }, (w = ae.selectors = {
                cacheLength: 50,
                createPseudo: oe,
                match: U,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, c), e[3] = (e[3] || e[4] || e[5] || "").replace(te, c), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ae.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ae.error(e[0]), e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return U.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = f(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, c).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        } : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = M[e + " "];
                        return t || (t = new RegExp("(^|" + q + ")" + e + "(" + q + "|$)")) && M(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(e) {
                            e = ae.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "", "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(F, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(f, e, t, m, v) {
                        var g = "nth" !== f.slice(0, 3),
                            y = "last" !== f.slice(-4),
                            b = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) {
                            return !!e.parentNode
                        } : function(e, t, n) {
                            var i, r, a, s, o, l, d = g != y ? "nextSibling" : "previousSibling",
                                u = e.parentNode,
                                c = b && e.nodeName.toLowerCase(),
                                p = !n && !b,
                                h = !1;
                            if (u) {
                                if (g) {
                                    for (; d;) {
                                        for (s = e; s = s[d];)
                                            if (b ? s.nodeName.toLowerCase() === c : 1 === s.nodeType) return !1;
                                        l = d = "only" === f && !l && "nextSibling"
                                    }
                                    return !0
                                }
                                if (l = [y ? u.firstChild : u.lastChild], y && p) {
                                    for (h = (o = (i = (r = (a = (s = u)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && i[1]) && i[2], s = o && u.childNodes[o]; s = ++o && s && s[d] || (h = o = 0) || l.pop();)
                                        if (1 === s.nodeType && ++h && s === e) {
                                            r[f] = [k, o, h];
                                            break
                                        }
                                } else if (p && (h = o = (i = (r = (a = (s = e)[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] || [])[0] === k && i[1]), !1 === h)
                                    for (;
                                        (s = ++o && s && s[d] || (h = o = 0) || l.pop()) && ((b ? s.nodeName.toLowerCase() !== c : 1 !== s.nodeType) || !++h || (p && ((r = (a = s[S] || (s[S] = {}))[s.uniqueID] || (a[s.uniqueID] = {}))[f] = [k, h]), s !== e)););
                                return (h -= v) === m || h % m == 0 && 0 <= h / m
                            }
                        }
                    },
                    PSEUDO: function(e, a) {
                        var t, s = w.pseudos[e] || w.setFilters[e.toLowerCase()] || ae.error("unsupported pseudo: " + e);
                        return s[S] ? s(a) : 1 < s.length ? (t = [e, e, "", a], w.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, t) {
                            for (var n, i = s(e, a), r = i.length; r--;) e[n = I(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return s(e, 0, t)
                        }) : s
                    }
                },
                pseudos: {
                    not: oe(function(e) {
                        var i = [],
                            r = [],
                            o = p(e.replace(W, "$1"));
                        return o[S] ? oe(function(e, t, n, i) {
                            for (var r, a = o(e, null, i, []), s = e.length; s--;)(r = a[s]) && (e[s] = !(t[s] = r))
                        }) : function(e, t, n) {
                            return i[0] = e, o(i, null, n, r), i[0] = null, !r.pop()
                        }
                    }),
                    has: oe(function(t) {
                        return function(e) {
                            return 0 < ae(t, e).length
                        }
                    }),
                    contains: oe(function(t) {
                        return t = t.replace(te, c),
                            function(e) {
                                return -1 < (e.textContent || e.innerText || a(e)).indexOf(t)
                            }
                    }),
                    lang: oe(function(n) {
                        return Y.test(n || "") || ae.error("unsupported lang: " + n), n = n.replace(te, c).toLowerCase(),
                            function(e) {
                                var t;
                                do {
                                    if (t = C ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                                } while ((e = e.parentNode) && 1 === e.nodeType);
                                return !1
                            }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === s
                    },
                    focus: function(e) {
                        return e === T.activeElement && (!T.hasFocus || T.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ce(!1),
                    disabled: ce(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !w.pseudos.empty(e)
                    },
                    header: function(e) {
                        return Q.test(e.nodeName)
                    },
                    input: function(e) {
                        return K.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: pe(function() {
                        return [0]
                    }),
                    last: pe(function(e, t) {
                        return [t - 1]
                    }),
                    eq: pe(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: pe(function(e, t) {
                        for (var n = 0; n < t; n += 2) e.push(n);
                        return e
                    }),
                    odd: pe(function(e, t) {
                        for (var n = 1; n < t; n += 2) e.push(n);
                        return e
                    }),
                    lt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i;) e.push(i);
                        return e
                    }),
                    gt: pe(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t;) e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = w.pseudos.eq, {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) w.pseudos[e] = function(t) {
            return function(e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }(e);
        for (e in {
                submit: !0,
                reset: !0
            }) w.pseudos[e] = function(n) {
            return function(e) {
                var t = e.nodeName.toLowerCase();
                return ("input" === t || "button" === t) && e.type === n
            }
        }(e);

        function fe() {}

        function me(e) {
            for (var t = 0, n = e.length, i = ""; t < n; t++) i += e[t].value;
            return i
        }

        function ve(s, e, t) {
            var o = e.dir,
                l = e.next,
                d = l || o,
                u = t && "parentNode" === d,
                c = b++;
            return e.first ? function(e, t, n) {
                for (; e = e[o];)
                    if (1 === e.nodeType || u) return s(e, t, n);
                return !1
            } : function(e, t, n) {
                var i, r, a = [k, c];
                if (n) {
                    for (; e = e[o];)
                        if ((1 === e.nodeType || u) && s(e, t, n)) return !0
                } else
                    for (; e = e[o];)
                        if (1 === e.nodeType || u)
                            if (i = (r = e[S] || (e[S] = {}))[e.uniqueID] || (r[e.uniqueID] = {}), l && l === e.nodeName.toLowerCase()) e = e[o] || e;
                            else {
                                if ((r = i[d]) && r[0] === k && r[1] === c) return a[2] = r[2];
                                if ((i[d] = a)[2] = s(e, t, n)) return !0
                            } return !1
            }
        }

        function ge(r) {
            return 1 < r.length ? function(e, t, n) {
                for (var i = r.length; i--;)
                    if (!r[i](e, t, n)) return !1;
                return !0
            } : r[0]
        }

        function ye(e, t, n, i, r) {
            for (var a, s = [], o = 0, l = e.length, d = null != t; o < l; o++)(a = e[o]) && (n && !n(a, i, r) || (s.push(a), d && t.push(o)));
            return s
        }

        function be(h, f, m, v, g, e) {
            return v && !v[S] && (v = be(v)), g && !g[S] && (g = be(g, e)), oe(function(e, t, n, i) {
                var r, a, s, o = [],
                    l = [],
                    d = t.length,
                    u = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++) ae(e, t[i], n);
                        return n
                    }(f || "*", n.nodeType ? [n] : n, []),
                    c = !h || !e && f ? u : ye(u, o, h, n, i),
                    p = m ? g || (e ? h : d || v) ? [] : t : c;
                if (m && m(c, p, n, i), v)
                    for (r = ye(p, l), v(r, [], n, i), a = r.length; a--;)(s = r[a]) && (p[l[a]] = !(c[l[a]] = s));
                if (e) {
                    if (g || h) {
                        if (g) {
                            for (r = [], a = p.length; a--;)(s = p[a]) && r.push(c[a] = s);
                            g(null, p = [], r, i)
                        }
                        for (a = p.length; a--;)(s = p[a]) && -1 < (r = g ? I(e, s) : o[a]) && (e[r] = !(t[r] = s))
                    }
                } else p = ye(p === t ? p.splice(d, p.length) : p), g ? g(null, t, p, i) : O.apply(t, p)
            })
        }

        function we(v, g) {
            function e(e, t, n, i, r) {
                var a, s, o, l = 0,
                    d = "0",
                    u = e && [],
                    c = [],
                    p = x,
                    h = e || b && w.find.TAG("*", r),
                    f = k += null == p ? 1 : Math.random() || .1,
                    m = h.length;
                for (r && (x = t === T || t || r); d !== m && null != (a = h[d]); d++) {
                    if (b && a) {
                        for (s = 0, t || a.ownerDocument === T || (E(a), n = !C); o = v[s++];)
                            if (o(a, t || T, n)) {
                                i.push(a);
                                break
                            }
                        r && (k = f)
                    }
                    y && ((a = !o && a) && l--, e && u.push(a))
                }
                if (l += d, y && d !== l) {
                    for (s = 0; o = g[s++];) o(u, c, t, n);
                    if (e) {
                        if (0 < l)
                            for (; d--;) u[d] || c[d] || (c[d] = z.call(i));
                        c = ye(c)
                    }
                    O.apply(i, c), r && !e && 0 < c.length && 1 < l + g.length && ae.uniqueSort(i)
                }
                return r && (k = f, x = p), u
            }
            var y = 0 < g.length,
                b = 0 < v.length;
            return y ? oe(e) : e
        }
        return fe.prototype = w.filters = w.pseudos, w.setFilters = new fe, f = ae.tokenize = function(e, t) {
            var n, i, r, a, s, o, l, d = L[e + " "];
            if (d) return t ? 0 : d.slice(0);
            for (s = e, o = [], l = w.preFilter; s;) {
                for (a in n && !(i = G.exec(s)) || (i && (s = s.slice(i[0].length) || s), o.push(r = [])), n = !1, (i = _.exec(s)) && (n = i.shift(), r.push({
                        value: n,
                        type: i[0].replace(W, " ")
                    }), s = s.slice(n.length)), w.filter) !(i = U[a].exec(s)) || l[a] && !(i = l[a](i)) || (n = i.shift(), r.push({
                    value: n,
                    type: a,
                    matches: i
                }), s = s.slice(n.length));
                if (!n) break
            }
            return t ? s.length : s ? ae.error(e) : L(e, o).slice(0)
        }, p = ae.compile = function(e, t) {
            var n, i = [],
                r = [],
                a = P[e + " "];
            if (!a) {
                for (n = (t = t || f(e)).length; n--;)((a = function e(t) {
                    for (var i, n, r, a = t.length, s = w.relative[t[0].type], o = s || w.relative[" "], l = s ? 1 : 0, d = ve(function(e) {
                            return e === i
                        }, o, !0), u = ve(function(e) {
                            return -1 < I(i, e)
                        }, o, !0), c = [function(e, t, n) {
                            return n = !s && (n || t !== x) || ((i = t).nodeType ? d : u)(e, t, n), i = null, n
                        }]; l < a; l++)
                        if (n = w.relative[t[l].type]) c = [ve(ge(c), n)];
                        else {
                            if ((n = w.filter[t[l].type].apply(null, t[l].matches))[S]) {
                                for (r = ++l; r < a && !w.relative[t[r].type]; r++);
                                return be(1 < l && ge(c), 1 < l && me(t.slice(0, l - 1).concat({
                                    value: " " === t[l - 2].type ? "*" : ""
                                })).replace(W, "$1"), n, l < r && e(t.slice(l, r)), r < a && e(t = t.slice(r)), r < a && me(t))
                            }
                            c.push(n)
                        }
                    return ge(c)
                }(t[n]))[S] ? i : r).push(a);
                (a = P(e, we(r, i))).selector = e
            }
            return a
        }, m = ae.select = function(e, t, n, i) {
            var r, a, s, o, l, d = "function" == typeof e && e,
                u = !i && f(e = d.selector || e);
            if (n = n || [], 1 === u.length) {
                if (2 < (a = u[0] = u[0].slice(0)).length && "ID" === (s = a[0]).type && 9 === t.nodeType && C && w.relative[a[1].type]) {
                    if (!(t = (w.find.ID(s.matches[0].replace(te, c), t) || [])[0])) return n;
                    d && (t = t.parentNode), e = e.slice(a.shift().value.length)
                }
                for (r = U.needsContext.test(e) ? 0 : a.length; r-- && (s = a[r], !w.relative[o = s.type]);)
                    if ((l = w.find[o]) && (i = l(s.matches[0].replace(te, c), ee.test(a[0].type) && he(t.parentNode) || t))) {
                        if (a.splice(r, 1), !(e = i.length && me(a))) return O.apply(n, i), n;
                        break
                    }
            }
            return (d || p(e, u))(i, t, !C, n, !t || ee.test(e) && he(t.parentNode) || t), n
        }, h.sortStable = S.split("").sort($).join("") === S, h.detectDuplicates = !!d, E(), h.sortDetached = le(function(e) {
            return 1 & e.compareDocumentPosition(T.createElement("fieldset"))
        }), le(function(e) {
            return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
        }) || de("type|href|height|width", function(e, t, n) {
            if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }), h.attributes && le(function(e) {
            return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
        }) || de("value", function(e, t, n) {
            if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue
        }), le(function(e) {
            return null == e.getAttribute("disabled")
        }) || de(H, function(e, t, n) {
            if (!n) return !0 === e[t] ? t.toLowerCase() : (t = e.getAttributeNode(t)) && t.specified ? t.value : null
        }), ae
    }(E);
    C.find = h, C.expr = h.selectors, C.expr[":"] = C.expr.pseudos, C.uniqueSort = C.unique = h.uniqueSort, C.text = h.getText, C.isXMLDoc = h.isXML, C.contains = h.contains, C.escapeSelector = h.escape;

    function x(e, t, n) {
        for (var i = [], r = void 0 !== n;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (r && C(e).is(n)) break;
                i.push(e)
            }
        return i
    }

    function S(e, t) {
        for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
        return n
    }
    var k = C.expr.match.needsContext;

    function M(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    }
    var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;

    function P(e, n, i) {
        return b(n) ? C.grep(e, function(e, t) {
            return !!n.call(e, t, e) !== i
        }) : n.nodeType ? C.grep(e, function(e) {
            return e === n !== i
        }) : "string" != typeof n ? C.grep(e, function(e) {
            return -1 < r.call(n, e) !== i
        }) : C.filter(n, e, i)
    }
    C.filter = function(e, t, n) {
        var i = t[0];
        return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === i.nodeType ? C.find.matchesSelector(i, e) ? [i] : [] : C.find.matches(e, C.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }, C.fn.extend({
        find: function(e) {
            var t, n, i = this.length,
                r = this;
            if ("string" != typeof e) return this.pushStack(C(e).filter(function() {
                for (t = 0; t < i; t++)
                    if (C.contains(r[t], this)) return !0
            }));
            for (n = this.pushStack([]), t = 0; t < i; t++) C.find(e, r[t], n);
            return 1 < i ? C.uniqueSort(n) : n
        },
        filter: function(e) {
            return this.pushStack(P(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(P(this, e || [], !0))
        },
        is: function(e) {
            return !!P(this, "string" == typeof e && k.test(e) ? C(e) : e || [], !1).length
        }
    });
    var $, A = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    (C.fn.init = function(e, t, n) {
        if (!e) return this;
        if (n = n || $, "string" != typeof e) return e.nodeType ? (this[0] = e, this.length = 1, this) : b(e) ? void 0 !== n.ready ? n.ready(e) : e(C) : C.makeArray(e, this);
        if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : A.exec(e)) || !i[1] && t) return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
        if (i[1]) {
            if (t = t instanceof C ? t[0] : t, C.merge(this, C.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), L.test(i[1]) && C.isPlainObject(t))
                for (var i in t) b(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
            return this
        }
        return (e = T.getElementById(i[2])) && (this[0] = e, this.length = 1), this
    }).prototype = C.fn, $ = C(T);
    var z = /^(?:parents|prev(?:Until|All))/,
        D = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };

    function O(e, t) {
        for (;
            (e = e[t]) && 1 !== e.nodeType;);
        return e
    }
    C.fn.extend({
        has: function(e) {
            var t = C(e, this),
                n = t.length;
            return this.filter(function() {
                for (var e = 0; e < n; e++)
                    if (C.contains(this, t[e])) return !0
            })
        },
        closest: function(e, t) {
            var n, i = 0,
                r = this.length,
                a = [],
                s = "string" != typeof e && C(e);
            if (!k.test(e))
                for (; i < r; i++)
                    for (n = this[i]; n && n !== t; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? -1 < s.index(n) : 1 === n.nodeType && C.find.matchesSelector(n, e))) {
                            a.push(n);
                            break
                        }
            return this.pushStack(1 < a.length ? C.uniqueSort(a) : a)
        },
        index: function(e) {
            return e ? "string" == typeof e ? r.call(C(e), this[0]) : r.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(C.uniqueSort(C.merge(this.get(), C(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }), C.each({
        parent: function(e) {
            e = e.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function(e) {
            return x(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return x(e, "parentNode", n)
        },
        next: function(e) {
            return O(e, "nextSibling")
        },
        prev: function(e) {
            return O(e, "previousSibling")
        },
        nextAll: function(e) {
            return x(e, "nextSibling")
        },
        prevAll: function(e) {
            return x(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return x(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return x(e, "previousSibling", n)
        },
        siblings: function(e) {
            return S((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return S(e.firstChild)
        },
        contents: function(e) {
            return M(e, "iframe") ? e.contentDocument : (M(e, "template") && (e = e.content || e), C.merge([], e.childNodes))
        }
    }, function(i, r) {
        C.fn[i] = function(e, t) {
            var n = C.map(this, r, e);
            return "Until" !== i.slice(-5) && (t = e), t && "string" == typeof t && (n = C.filter(t, n)), 1 < this.length && (D[i] || C.uniqueSort(n), z.test(i) && n.reverse()), this.pushStack(n)
        }
    });
    var N = /[^\x20\t\r\n\f]+/g;

    function I(e) {
        return e
    }

    function H(e) {
        throw e
    }

    function q(e, t, n, i) {
        var r;
        try {
            e && b(r = e.promise) ? r.call(e).done(t).fail(n) : e && b(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
        } catch (e) {
            n.apply(void 0, [e])
        }
    }
    C.Callbacks = function(i) {
        var e, n;
        i = "string" == typeof i ? (e = i, n = {}, C.each(e.match(N) || [], function(e, t) {
            n[t] = !0
        }), n) : C.extend({}, i);

        function r() {
            for (o = o || i.once, s = a = !0; d.length; u = -1)
                for (t = d.shift(); ++u < l.length;) !1 === l[u].apply(t[0], t[1]) && i.stopOnFalse && (u = l.length, t = !1);
            i.memory || (t = !1), a = !1, o && (l = t ? [] : "")
        }
        var a, t, s, o, l = [],
            d = [],
            u = -1,
            c = {
                add: function() {
                    return l && (t && !a && (u = l.length - 1, d.push(t)), function n(e) {
                        C.each(e, function(e, t) {
                            b(t) ? i.unique && c.has(t) || l.push(t) : t && t.length && "string" !== f(t) && n(t)
                        })
                    }(arguments), t && !a && r()), this
                },
                remove: function() {
                    return C.each(arguments, function(e, t) {
                        for (var n; - 1 < (n = C.inArray(t, l, n));) l.splice(n, 1), n <= u && u--
                    }), this
                },
                has: function(e) {
                    return e ? -1 < C.inArray(e, l) : 0 < l.length
                },
                empty: function() {
                    return l = l && [], this
                },
                disable: function() {
                    return o = d = [], l = t = "", this
                },
                disabled: function() {
                    return !l
                },
                lock: function() {
                    return o = d = [], t || a || (l = t = ""), this
                },
                locked: function() {
                    return !!o
                },
                fireWith: function(e, t) {
                    return o || (t = [e, (t = t || []).slice ? t.slice() : t], d.push(t), a || r()), this
                },
                fire: function() {
                    return c.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!s
                }
            };
        return c
    }, C.extend({
        Deferred: function(e) {
            var a = [
                    ["notify", "progress", C.Callbacks("memory"), C.Callbacks("memory"), 2],
                    ["resolve", "done", C.Callbacks("once memory"), C.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", C.Callbacks("once memory"), C.Callbacks("once memory"), 1, "rejected"]
                ],
                r = "pending",
                s = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return o.done(arguments).fail(arguments), this
                    },
                    catch: function(e) {
                        return s.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return C.Deferred(function(i) {
                            C.each(a, function(e, t) {
                                var n = b(r[t[4]]) && r[t[4]];
                                o[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && b(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }), r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var l = 0;

                        function d(r, a, s, o) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(r < l)) {
                                        if ((e = s.apply(n, i)) === a.promise()) throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then, b(t) ? o ? t.call(e, d(l, a, I, o), d(l, a, H, o)) : (l++, t.call(e, d(l, a, I, o), d(l, a, H, o), d(l, a, I, a.notifyWith))) : (s !== I && (n = void 0, i = [e]), (o || a.resolveWith)(n, i))
                                    }
                                }
                                var n = this,
                                    i = arguments,
                                    t = o ? e : function() {
                                        try {
                                            e()
                                        } catch (e) {
                                            C.Deferred.exceptionHook && C.Deferred.exceptionHook(e, t.stackTrace), l <= r + 1 && (s !== H && (n = void 0, i = [e]), a.rejectWith(n, i))
                                        }
                                    };
                                r ? t() : (C.Deferred.getStackHook && (t.stackTrace = C.Deferred.getStackHook()), E.setTimeout(t))
                            }
                        }
                        return C.Deferred(function(e) {
                            a[0][3].add(d(0, e, b(i) ? i : I, e.notifyWith)), a[1][3].add(d(0, e, b(t) ? t : I)), a[2][3].add(d(0, e, b(n) ? n : H))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? C.extend(e, s) : s
                    }
                },
                o = {};
            return C.each(a, function(e, t) {
                var n = t[2],
                    i = t[5];
                s[t[1]] = n.add, i && n.add(function() {
                    r = i
                }, a[3 - e][2].disable, a[3 - e][3].disable, a[0][2].lock, a[0][3].lock), n.add(t[3].fire), o[t[0]] = function() {
                    return o[t[0] + "With"](this === o ? void 0 : this, arguments), this
                }, o[t[0] + "With"] = n.fireWith
            }), s.promise(o), e && e.call(o, o), o
        },
        when: function(e) {
            function t(t) {
                return function(e) {
                    r[t] = this, a[t] = 1 < arguments.length ? o.call(arguments) : e, --n || s.resolveWith(r, a)
                }
            }
            var n = arguments.length,
                i = n,
                r = Array(i),
                a = o.call(arguments),
                s = C.Deferred();
            if (n <= 1 && (q(e, s.done(t(i)).resolve, s.reject, !n), "pending" === s.state() || b(a[i] && a[i].then))) return s.then();
            for (; i--;) q(a[i], t(i), s.reject);
            return s.promise()
        }
    });
    var R = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    C.Deferred.exceptionHook = function(e, t) {
        E.console && E.console.warn && e && R.test(e.name) && E.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
    }, C.readyException = function(e) {
        E.setTimeout(function() {
            throw e
        })
    };
    var j = C.Deferred();

    function B() {
        T.removeEventListener("DOMContentLoaded", B), E.removeEventListener("load", B), C.ready()
    }
    C.fn.ready = function(e) {
        return j.then(e).catch(function(e) {
            C.readyException(e)
        }), this
    }, C.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(e) {
            (!0 === e ? --C.readyWait : C.isReady) || ((C.isReady = !0) !== e && 0 < --C.readyWait || j.resolveWith(T, [C]))
        }
    }), C.ready.then = j.then, "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? E.setTimeout(C.ready) : (T.addEventListener("DOMContentLoaded", B), E.addEventListener("load", B));
    var F = function(e, t, n, i, r, a, s) {
            var o = 0,
                l = e.length,
                d = null == n;
            if ("object" === f(n))
                for (o in r = !0, n) F(e, t, o, n[o], !0, a, s);
            else if (void 0 !== i && (r = !0, b(i) || (s = !0), d && (t = s ? (t.call(e, i), null) : (d = t, function(e, t, n) {
                    return d.call(C(e), n)
                })), t))
                for (; o < l; o++) t(e[o], n, s ? i : i.call(e[o], o, t(e[o], n)));
            return r ? e : d ? t.call(e) : l ? t(e[0], n) : a
        },
        W = /^-ms-/,
        G = /-([a-z])/g;

    function _(e, t) {
        return t.toUpperCase()
    }

    function X(e) {
        return e.replace(W, "ms-").replace(G, _)
    }

    function V(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    }

    function Y() {
        this.expando = C.expando + Y.uid++
    }
    Y.uid = 1, Y.prototype = {
        cache: function(e) {
            var t = e[this.expando];
            return t || (t = {}, V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(e, t, n) {
            var i, r = this.cache(e);
            if ("string" == typeof t) r[X(t)] = n;
            else
                for (i in t) r[X(i)] = t[i];
            return r
        },
        get: function(e, t) {
            return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
        },
        access: function(e, t, n) {
            return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t)
        },
        remove: function(e, t) {
            var n, i = e[this.expando];
            if (void 0 !== i) {
                if (void 0 !== t) {
                    n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in i ? [t] : t.match(N) || []).length;
                    for (; n--;) delete i[t[n]]
                }
                void 0 !== t && !C.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
            }
        },
        hasData: function(e) {
            e = e[this.expando];
            return void 0 !== e && !C.isEmptyObject(e)
        }
    };
    var U = new Y,
        K = new Y,
        Q = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        J = /[A-Z]/g;

    function Z(e, t, n) {
        var i, r;
        if (void 0 === n && 1 === e.nodeType)
            if (i = "data-" + t.replace(J, "-$&").toLowerCase(), "string" == typeof(n = e.getAttribute(i))) {
                try {
                    n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : Q.test(r) ? JSON.parse(r) : r)
                } catch (e) {}
                K.set(e, t, n)
            } else n = void 0;
        return n
    }
    C.extend({
        hasData: function(e) {
            return K.hasData(e) || U.hasData(e)
        },
        data: function(e, t, n) {
            return K.access(e, t, n)
        },
        removeData: function(e, t) {
            K.remove(e, t)
        },
        _data: function(e, t, n) {
            return U.access(e, t, n)
        },
        _removeData: function(e, t) {
            U.remove(e, t)
        }
    }), C.fn.extend({
        data: function(n, e) {
            var t, i, r, a = this[0],
                s = a && a.attributes;
            if (void 0 !== n) return "object" == typeof n ? this.each(function() {
                K.set(this, n)
            }) : F(this, function(e) {
                var t;
                return a && void 0 === e ? void 0 !== (t = K.get(a, n)) || void 0 !== (t = Z(a, n)) ? t : void 0 : void this.each(function() {
                    K.set(this, n, e)
                })
            }, null, e, 1 < arguments.length, null, !0);
            if (this.length && (r = K.get(a), 1 === a.nodeType && !U.get(a, "hasDataAttrs"))) {
                for (t = s.length; t--;) s[t] && 0 === (i = s[t].name).indexOf("data-") && (i = X(i.slice(5)), Z(a, i, r[i]));
                U.set(a, "hasDataAttrs", !0)
            }
            return r
        },
        removeData: function(e) {
            return this.each(function() {
                K.remove(this, e)
            })
        }
    }), C.extend({
        queue: function(e, t, n) {
            var i;
            if (e) return t = (t || "fx") + "queue", i = U.get(e, t), n && (!i || Array.isArray(n) ? i = U.access(e, t, C.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = C.queue(e, t),
                i = n.length,
                r = n.shift(),
                a = C._queueHooks(e, t);
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === t && n.unshift("inprogress"), delete a.stop, r.call(e, function() {
                C.dequeue(e, t)
            }, a)), !i && a && a.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return U.get(e, n) || U.access(e, n, {
                empty: C.Callbacks("once memory").add(function() {
                    U.remove(e, [t + "queue", n])
                })
            })
        }
    }), C.fn.extend({
        queue: function(t, n) {
            var e = 2;
            return "string" != typeof t && (n = t, t = "fx", e--), arguments.length < e ? C.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                var e = C.queue(this, t, n);
                C._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && C.dequeue(this, t)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                C.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            function n() {
                --r || a.resolveWith(s, [s])
            }
            var i, r = 1,
                a = C.Deferred(),
                s = this,
                o = this.length;
            for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(i = U.get(s[o], e + "queueHooks")) && i.empty && (r++, i.empty.add(n));
            return n(), a.promise(t)
        }
    });

    function ee(e, t, n, i) {
        var r, a = {};
        for (r in t) a[r] = e.style[r], e.style[r] = t[r];
        for (r in i = n.apply(e, i || []), t) e.style[r] = a[r];
        return i
    }
    var te = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ne = new RegExp("^(?:([+-])=|)(" + te + ")([a-z%]*)$", "i"),
        ie = ["Top", "Right", "Bottom", "Left"],
        re = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && C.contains(e.ownerDocument, e) && "none" === C.css(e, "display")
        };

    function ae(e, t, n, i) {
        var r, a, s = 20,
            o = i ? function() {
                return i.cur()
            } : function() {
                return C.css(e, t, "")
            },
            l = o(),
            d = n && n[3] || (C.cssNumber[t] ? "" : "px"),
            u = (C.cssNumber[t] || "px" !== d && +l) && ne.exec(C.css(e, t));
        if (u && u[3] !== d) {
            for (l /= 2, d = d || u[3], u = +l || 1; s--;) C.style(e, t, u + d), (1 - a) * (1 - (a = o() / l || .5)) <= 0 && (s = 0), u /= a;
            u *= 2, C.style(e, t, u + d), n = n || []
        }
        return n && (u = +u || +l || 0, r = n[1] ? u + (n[1] + 1) * n[2] : +n[2], i && (i.unit = d, i.start = u, i.end = r)), r
    }
    var se = {};

    function oe(e, t) {
        for (var n, i, r, a, s, o = [], l = 0, d = e.length; l < d; l++)(i = e[l]).style && (n = i.style.display, t ? ("none" === n && (o[l] = U.get(i, "display") || null, o[l] || (i.style.display = "")), "" === i.style.display && re(i) && (o[l] = (s = a = void 0, a = (r = i).ownerDocument, s = r.nodeName, (r = se[s]) || (a = a.body.appendChild(a.createElement(s)), r = C.css(a, "display"), a.parentNode.removeChild(a), "none" === r && (r = "block"), se[s] = r)))) : "none" !== n && (o[l] = "none", U.set(i, "display", n)));
        for (l = 0; l < d; l++) null != o[l] && (e[l].style.display = o[l]);
        return e
    }
    C.fn.extend({
        show: function() {
            return oe(this, !0)
        },
        hide: function() {
            return oe(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                re(this) ? C(this).show() : C(this).hide()
            })
        }
    });
    var le = /^(?:checkbox|radio)$/i,
        de = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        ue = /^$|^module$|\/(?:java|ecma)script/i,
        ce = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };

    function pe(e, t) {
        var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
        return void 0 === t || t && M(e, t) ? C.merge([e], n) : n
    }

    function he(e, t) {
        for (var n = 0, i = e.length; n < i; n++) U.set(e[n], "globalEval", !t || U.get(t[n], "globalEval"))
    }
    ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td;
    var fe = /<|&#?\w+;/;

    function me(e, t, n, i, r) {
        for (var a, s, o, l, d, u = t.createDocumentFragment(), c = [], p = 0, h = e.length; p < h; p++)
            if ((a = e[p]) || 0 === a)
                if ("object" === f(a)) C.merge(c, a.nodeType ? [a] : a);
                else if (fe.test(a)) {
            for (s = s || u.appendChild(t.createElement("div")), o = (de.exec(a) || ["", ""])[1].toLowerCase(), o = ce[o] || ce._default, s.innerHTML = o[1] + C.htmlPrefilter(a) + o[2], d = o[0]; d--;) s = s.lastChild;
            C.merge(c, s.childNodes), (s = u.firstChild).textContent = ""
        } else c.push(t.createTextNode(a));
        for (u.textContent = "", p = 0; a = c[p++];)
            if (i && -1 < C.inArray(a, i)) r && r.push(a);
            else if (l = C.contains(a.ownerDocument, a), s = pe(u.appendChild(a), "script"), l && he(s), n)
            for (d = 0; a = s[d++];) ue.test(a.type || "") && n.push(a);
        return u
    }
    t = T.createDocumentFragment().appendChild(T.createElement("div")), (h = T.createElement("input")).setAttribute("type", "radio"), h.setAttribute("checked", "checked"), h.setAttribute("name", "t"), t.appendChild(h), y.checkClone = t.cloneNode(!0).cloneNode(!0).lastChild.checked, t.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!t.cloneNode(!0).lastChild.defaultValue;
    var ve = T.documentElement,
        ge = /^key/,
        ye = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        be = /^([^.]*)(?:\.(.+)|)/;

    function we() {
        return !0
    }

    function xe() {
        return !1
    }

    function Ee() {
        try {
            return T.activeElement
        } catch (e) {}
    }

    function Te(e, t, n, i, r, a) {
        var s, o;
        if ("object" == typeof t) {
            for (o in "string" != typeof n && (i = i || n, n = void 0), t) Te(e, o, n, i, t[o], a);
            return e
        }
        if (null == i && null == r ? (r = n, i = n = void 0) : null == r && ("string" == typeof n ? (r = i, i = void 0) : (r = i, i = n, n = void 0)), !1 === r) r = xe;
        else if (!r) return e;
        return 1 === a && (s = r, (r = function(e) {
            return C().off(e), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = C.guid++)), e.each(function() {
            C.event.add(this, t, r, i, n)
        })
    }
    C.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var a, s, o, l, d, u, c, p, h, f = U.get(t);
            if (f)
                for (n.handler && (n = (a = n).handler, r = a.selector), r && C.find.matchesSelector(ve, r), n.guid || (n.guid = C.guid++), (o = f.events) || (o = f.events = {}), (s = f.handle) || (s = f.handle = function(e) {
                        return void 0 !== C && C.event.triggered !== e.type ? C.event.dispatch.apply(t, arguments) : void 0
                    }), l = (e = (e || "").match(N) || [""]).length; l--;) c = h = (d = be.exec(e[l]) || [])[1], p = (d[2] || "").split(".").sort(), c && (u = C.event.special[c] || {}, c = (r ? u.delegateType : u.bindType) || c, u = C.event.special[c] || {}, d = C.extend({
                    type: c,
                    origType: h,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && C.expr.match.needsContext.test(r),
                    namespace: p.join(".")
                }, a), (h = o[c]) || ((h = o[c] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, p, s) || t.addEventListener && t.addEventListener(c, s)), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? h.splice(h.delegateCount++, 0, d) : h.push(d), C.event.global[c] = !0)
        },
        remove: function(e, t, n, i, r) {
            var a, s, o, l, d, u, c, p, h, f, m, v = U.hasData(e) && U.get(e);
            if (v && (l = v.events)) {
                for (d = (t = (t || "").match(N) || [""]).length; d--;)
                    if (h = m = (o = be.exec(t[d]) || [])[1], f = (o[2] || "").split(".").sort(), h) {
                        for (c = C.event.special[h] || {}, p = l[h = (i ? c.delegateType : c.bindType) || h] || [], o = o[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), s = a = p.length; a--;) u = p[a], !r && m !== u.origType || n && n.guid !== u.guid || o && !o.test(u.namespace) || i && i !== u.selector && ("**" !== i || !u.selector) || (p.splice(a, 1), u.selector && p.delegateCount--, c.remove && c.remove.call(e, u));
                        s && !p.length && (c.teardown && !1 !== c.teardown.call(e, f, v.handle) || C.removeEvent(e, h, v.handle), delete l[h])
                    } else
                        for (h in l) C.event.remove(e, h + t[d], n, i, !0);
                C.isEmptyObject(l) && U.remove(e, "handle events")
            }
        },
        dispatch: function(e) {
            var t, n, i, r, a, s = C.event.fix(e),
                o = new Array(arguments.length),
                l = (U.get(this, "events") || {})[s.type] || [],
                e = C.event.special[s.type] || {};
            for (o[0] = s, t = 1; t < arguments.length; t++) o[t] = arguments[t];
            if (s.delegateTarget = this, !e.preDispatch || !1 !== e.preDispatch.call(this, s)) {
                for (a = C.event.handlers.call(this, s, l), t = 0;
                    (i = a[t++]) && !s.isPropagationStopped();)
                    for (s.currentTarget = i.elem, n = 0;
                        (r = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(r.namespace) || (s.handleObj = r, s.data = r.data, void 0 !== (r = ((C.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, o)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                return e.postDispatch && e.postDispatch.call(this, s), s.result
            }
        },
        handlers: function(e, t) {
            var n, i, r, a, s, o = [],
                l = t.delegateCount,
                d = e.target;
            if (l && d.nodeType && !("click" === e.type && 1 <= e.button))
                for (; d !== this; d = d.parentNode || this)
                    if (1 === d.nodeType && ("click" !== e.type || !0 !== d.disabled)) {
                        for (a = [], s = {}, n = 0; n < l; n++) void 0 === s[r = (i = t[n]).selector + " "] && (s[r] = i.needsContext ? -1 < C(r, this).index(d) : C.find(r, this, null, [d]).length), s[r] && a.push(i);
                        a.length && o.push({
                            elem: d,
                            handlers: a
                        })
                    }
            return d = this, l < t.length && o.push({
                elem: d,
                handlers: t.slice(l)
            }), o
        },
        addProp: function(t, e) {
            Object.defineProperty(C.Event.prototype, t, {
                enumerable: !0,
                configurable: !0,
                get: b(e) ? function() {
                    if (this.originalEvent) return e(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[t]
                },
                set: function(e) {
                    Object.defineProperty(this, t, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: e
                    })
                }
            })
        },
        fix: function(e) {
            return e[C.expando] ? e : new C.Event(e)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== Ee() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === Ee() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if ("checkbox" === this.type && this.click && M(this, "input")) return this.click(), !1
                },
                _default: function(e) {
                    return M(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        }
    }, C.removeEvent = function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }, C.Event = function(e, t) {
        if (!(this instanceof C.Event)) return new C.Event(e, t);
        e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : xe, this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target, this.currentTarget = e.currentTarget, this.relatedTarget = e.relatedTarget) : this.type = e, t && C.extend(this, t), this.timeStamp = e && e.timeStamp || Date.now(), this[C.expando] = !0
    }, C.Event.prototype = {
        constructor: C.Event,
        isDefaultPrevented: xe,
        isPropagationStopped: xe,
        isImmediatePropagationStopped: xe,
        isSimulated: !1,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = we, e && !this.isSimulated && e.preventDefault()
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = we, e && !this.isSimulated && e.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = we, e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation()
        }
    }, C.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(e) {
            var t = e.button;
            return null == e.which && ge.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && ye.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
        }
    }, C.event.addProp), C.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, r) {
        C.event.special[e] = {
            delegateType: r,
            bindType: r,
            handle: function(e) {
                var t, n = e.relatedTarget,
                    i = e.handleObj;
                return n && (n === this || C.contains(this, n)) || (e.type = i.origType, t = i.handler.apply(this, arguments), e.type = r), t
            }
        }
    }), C.fn.extend({
        on: function(e, t, n, i) {
            return Te(this, e, t, n, i)
        },
        one: function(e, t, n, i) {
            return Te(this, e, t, n, i, 1)
        },
        off: function(e, t, n) {
            var i, r;
            if (e && e.preventDefault && e.handleObj) return i = e.handleObj, C(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" != typeof e) return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = xe), this.each(function() {
                C.event.remove(this, e, n, t)
            });
            for (r in e) this.off(r, t, e[r]);
            return this
        }
    });
    var Ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        Se = /<script|<style|<link/i,
        ke = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

    function Le(e, t) {
        return M(e, "table") && M(11 !== t.nodeType ? t : t.firstChild, "tr") && C(e).children("tbody")[0] || e
    }

    function Pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
    }

    function $e(e) {
        return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"), e
    }

    function Ae(e, t) {
        var n, i, r, a, s, o;
        if (1 === t.nodeType) {
            if (U.hasData(e) && (a = U.access(e), s = U.set(t, a), o = a.events))
                for (r in delete s.handle, s.events = {}, o)
                    for (n = 0, i = o[r].length; n < i; n++) C.event.add(t, r, o[r][n]);
            K.hasData(e) && (e = K.access(e), e = C.extend({}, e), K.set(t, e))
        }
    }

    function ze(n, i, r, a) {
        i = v.apply([], i);
        var e, t, s, o, l, d, u = 0,
            c = n.length,
            p = c - 1,
            h = i[0],
            f = b(h);
        if (f || 1 < c && "string" == typeof h && !y.checkClone && ke.test(h)) return n.each(function(e) {
            var t = n.eq(e);
            f && (i[0] = h.call(this, e, t.html())), ze(t, i, r, a)
        });
        if (c && (t = (e = me(i, n[0].ownerDocument, !1, n, a)).firstChild, 1 === e.childNodes.length && (e = t), t || a)) {
            for (o = (s = C.map(pe(e, "script"), Pe)).length; u < c; u++) l = e, u !== p && (l = C.clone(l, !0, !0), o && C.merge(s, pe(l, "script"))), r.call(n[u], l, u);
            if (o)
                for (d = s[s.length - 1].ownerDocument, C.map(s, $e), u = 0; u < o; u++) l = s[u], ue.test(l.type || "") && !U.access(l, "globalEval") && C.contains(d, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? C._evalUrl && C._evalUrl(l.src) : w(l.textContent.replace(Me, ""), d, l))
        }
        return n
    }

    function De(e, t, n) {
        for (var i, r = t ? C.filter(t, e) : e, a = 0; null != (i = r[a]); a++) n || 1 !== i.nodeType || C.cleanData(pe(i)), i.parentNode && (n && C.contains(i.ownerDocument, i) && he(pe(i, "script")), i.parentNode.removeChild(i));
        return e
    }
    C.extend({
        htmlPrefilter: function(e) {
            return e.replace(Ce, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var i, r, a, s, o, l, d, u = e.cloneNode(!0),
                c = C.contains(e.ownerDocument, e);
            if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || C.isXMLDoc(e)))
                for (s = pe(u), i = 0, r = (a = pe(e)).length; i < r; i++) o = a[i], l = s[i], d = void 0, "input" === (d = l.nodeName.toLowerCase()) && le.test(o.type) ? l.checked = o.checked : "input" !== d && "textarea" !== d || (l.defaultValue = o.defaultValue);
            if (t)
                if (n)
                    for (a = a || pe(e), s = s || pe(u), i = 0, r = a.length; i < r; i++) Ae(a[i], s[i]);
                else Ae(e, u);
            return 0 < (s = pe(u, "script")).length && he(s, !c && pe(e, "script")), u
        },
        cleanData: function(e) {
            for (var t, n, i, r = C.event.special, a = 0; void 0 !== (n = e[a]); a++)
                if (V(n)) {
                    if (t = n[U.expando]) {
                        if (t.events)
                            for (i in t.events) r[i] ? C.event.remove(n, i) : C.removeEvent(n, i, t.handle);
                        n[U.expando] = void 0
                    }
                    n[K.expando] && (n[K.expando] = void 0)
                }
        }
    }), C.fn.extend({
        detach: function(e) {
            return De(this, e, !0)
        },
        remove: function(e) {
            return De(this, e)
        },
        text: function(e) {
            return F(this, function(e) {
                return void 0 === e ? C.text(this) : this.empty().each(function() {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                })
            }, null, e, arguments.length)
        },
        append: function() {
            return ze(this, arguments, function(e) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Le(this, e).appendChild(e)
            })
        },
        prepend: function() {
            return ze(this, arguments, function(e) {
                var t;
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Le(this, e)).insertBefore(e, t.firstChild)
            })
        },
        before: function() {
            return ze(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return ze(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (C.cleanData(pe(e, !1)), e.textContent = "");
            return this
        },
        clone: function(e, t) {
            return e = null != e && e, t = null == t ? e : t, this.map(function() {
                return C.clone(this, e, t)
            })
        },
        html: function(e) {
            return F(this, function(e) {
                var t = this[0] || {},
                    n = 0,
                    i = this.length;
                if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                if ("string" == typeof e && !Se.test(e) && !ce[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = C.htmlPrefilter(e);
                    try {
                        for (; n < i; n++) 1 === (t = this[n] || {}).nodeType && (C.cleanData(pe(t, !1)), t.innerHTML = e);
                        t = 0
                    } catch (e) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return ze(this, arguments, function(e) {
                var t = this.parentNode;
                C.inArray(this, n) < 0 && (C.cleanData(pe(this)), t && t.replaceChild(e, this))
            }, n)
        }
    }), C.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, s) {
        C.fn[e] = function(e) {
            for (var t, n = [], i = C(e), r = i.length - 1, a = 0; a <= r; a++) t = a === r ? this : this.clone(!0), C(i[a])[s](t), l.apply(n, t.get());
            return this.pushStack(n)
        }
    });
    var Oe, Ne, Ie, He, qe, Re, je, Be = new RegExp("^(" + te + ")(?!px)[a-z%]+$", "i"),
        Fe = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = E), t.getComputedStyle(e)
        },
        We = new RegExp(ie.join("|"), "i");

    function Ge() {
        var e;
        je && (Re.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", je.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", ve.appendChild(Re).appendChild(je), e = E.getComputedStyle(je), Oe = "1%" !== e.top, qe = 12 === _e(e.marginLeft), je.style.right = "60%", He = 36 === _e(e.right), Ne = 36 === _e(e.width), je.style.position = "absolute", Ie = 36 === je.offsetWidth || "absolute", ve.removeChild(Re), je = null)
    }

    function _e(e) {
        return Math.round(parseFloat(e))
    }

    function Xe(e, t, n) {
        var i, r, a = e.style;
        return (n = n || Fe(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || C.contains(e.ownerDocument, e) || (r = C.style(e, t)), !y.pixelBoxStyles() && Be.test(r) && We.test(t) && (i = a.width, e = a.minWidth, t = a.maxWidth, a.minWidth = a.maxWidth = a.width = r, r = n.width, a.width = i, a.minWidth = e, a.maxWidth = t)), void 0 !== r ? r + "" : r
    }

    function Ve(e, t) {
        return {
            get: function() {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get
            }
        }
    }
    Re = T.createElement("div"), (je = T.createElement("div")).style && (je.style.backgroundClip = "content-box", je.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === je.style.backgroundClip, C.extend(y, {
        boxSizingReliable: function() {
            return Ge(), Ne
        },
        pixelBoxStyles: function() {
            return Ge(), He
        },
        pixelPosition: function() {
            return Ge(), Oe
        },
        reliableMarginLeft: function() {
            return Ge(), qe
        },
        scrollboxSize: function() {
            return Ge(), Ie
        }
    }));
    var Ye = /^(none|table(?!-c[ea]).+)/,
        Ue = /^--/,
        Ke = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        Qe = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Je = ["Webkit", "Moz", "ms"],
        Ze = T.createElement("div").style;

    function et(e) {
        return C.cssProps[e] || (C.cssProps[e] = function(e) {
            if (e in Ze) return e;
            for (var t = e[0].toUpperCase() + e.slice(1), n = Je.length; n--;)
                if ((e = Je[n] + t) in Ze) return e
        }(e) || e)
    }

    function tt(e, t, n) {
        var i = ne.exec(t);
        return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
    }

    function nt(e, t, n, i, r, a) {
        var s = "width" === t ? 1 : 0,
            o = 0,
            l = 0;
        if (n === (i ? "border" : "content")) return 0;
        for (; s < 4; s += 2) "margin" === n && (l += C.css(e, n + ie[s], !0, r)), i ? ("content" === n && (l -= C.css(e, "padding" + ie[s], !0, r)), "margin" !== n && (l -= C.css(e, "border" + ie[s] + "Width", !0, r))) : (l += C.css(e, "padding" + ie[s], !0, r), "padding" !== n ? l += C.css(e, "border" + ie[s] + "Width", !0, r) : o += C.css(e, "border" + ie[s] + "Width", !0, r));
        return !i && 0 <= a && (l += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - a - l - o - .5))), l
    }

    function it(e, t, n) {
        var i = Fe(e),
            r = Xe(e, t, i),
            a = "border-box" === C.css(e, "boxSizing", !1, i),
            s = a;
        if (Be.test(r)) {
            if (!n) return r;
            r = "auto"
        }
        return s = s && (y.boxSizingReliable() || r === e.style[t]), "auto" !== r && (parseFloat(r) || "inline" !== C.css(e, "display", !1, i)) || (r = e["offset" + t[0].toUpperCase() + t.slice(1)], s = !0), (r = parseFloat(r) || 0) + nt(e, t, n || (a ? "border" : "content"), s, i, r) + "px"
    }

    function rt(e, t, n, i, r) {
        return new rt.prototype.init(e, t, n, i, r)
    }
    C.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        e = Xe(e, "opacity");
                        return "" === e ? "1" : e
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {},
        style: function(e, t, n, i) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var r, a, s, o = X(t),
                    l = Ue.test(t),
                    d = e.style;
                if (l || (t = et(o)), s = C.cssHooks[t] || C.cssHooks[o], void 0 === n) return s && "get" in s && void 0 !== (r = s.get(e, !1, i)) ? r : d[t];
                "string" == (a = typeof n) && (r = ne.exec(n)) && r[1] && (n = ae(e, t, r), a = "number"), null != n && n == n && ("number" === a && (n += r && r[3] || (C.cssNumber[o] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (d[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, i)) || (l ? d.setProperty(t, n) : d[t] = n))
            }
        },
        css: function(e, t, n, i) {
            var r, a = X(t);
            return Ue.test(t) || (t = et(a)), (a = C.cssHooks[t] || C.cssHooks[a]) && "get" in a && (r = a.get(e, !0, n)), void 0 === r && (r = Xe(e, t, i)), "normal" === r && t in Qe && (r = Qe[t]), "" === n || n ? (t = parseFloat(r), !0 === n || isFinite(t) ? t || 0 : r) : r
        }
    }), C.each(["height", "width"], function(e, s) {
        C.cssHooks[s] = {
            get: function(e, t, n) {
                if (t) return !Ye.test(C.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? it(e, s, n) : ee(e, Ke, function() {
                    return it(e, s, n)
                })
            },
            set: function(e, t, n) {
                var i, r = Fe(e),
                    a = "border-box" === C.css(e, "boxSizing", !1, r),
                    n = n && nt(e, s, n, a, r);
                return a && y.scrollboxSize() === r.position && (n -= Math.ceil(e["offset" + s[0].toUpperCase() + s.slice(1)] - parseFloat(r[s]) - nt(e, s, "border", !1, r) - .5)), n && (i = ne.exec(t)) && "px" !== (i[3] || "px") && (e.style[s] = t, t = C.css(e, s)), tt(0, t, n)
            }
        }
    }), C.cssHooks.marginLeft = Ve(y.reliableMarginLeft, function(e, t) {
        if (t) return (parseFloat(Xe(e, "marginLeft")) || e.getBoundingClientRect().left - ee(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        })) + "px"
    }), C.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(r, a) {
        C.cssHooks[r + a] = {
            expand: function(e) {
                for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) n[r + ie[t] + a] = i[t] || i[t - 2] || i[0];
                return n
            }
        }, "margin" !== r && (C.cssHooks[r + a].set = tt)
    }), C.fn.extend({
        css: function(e, t) {
            return F(this, function(e, t, n) {
                var i, r, a = {},
                    s = 0;
                if (Array.isArray(t)) {
                    for (i = Fe(e), r = t.length; s < r; s++) a[t[s]] = C.css(e, t[s], !1, i);
                    return a
                }
                return void 0 !== n ? C.style(e, t, n) : C.css(e, t)
            }, e, t, 1 < arguments.length)
        }
    }), (C.Tween = rt).prototype = {
        constructor: rt,
        init: function(e, t, n, i, r, a) {
            this.elem = e, this.prop = n, this.easing = r || C.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = i, this.unit = a || (C.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = rt.propHooks[this.prop];
            return (e && e.get ? e : rt.propHooks._default).get(this)
        },
        run: function(e) {
            var t, n = rt.propHooks[this.prop];
            return this.options.duration ? this.pos = t = C.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), (n && n.set ? n : rt.propHooks._default).set(this), this
        }
    }, rt.prototype.init.prototype = rt.prototype, rt.propHooks = {
        _default: {
            get: function(e) {
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = C.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
            },
            set: function(e) {
                C.fx.step[e.prop] ? C.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[C.cssProps[e.prop]] && !C.cssHooks[e.prop] ? e.elem[e.prop] = e.now : C.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    }, rt.propHooks.scrollTop = rt.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    }, C.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    }, C.fx = rt.prototype.init, C.fx.step = {};
    var at, st, ot = /^(?:toggle|show|hide)$/,
        lt = /queueHooks$/;

    function dt() {
        st && (!1 === T.hidden && E.requestAnimationFrame ? E.requestAnimationFrame(dt) : E.setTimeout(dt, C.fx.interval), C.fx.tick())
    }

    function ut() {
        return E.setTimeout(function() {
            at = void 0
        }), at = Date.now()
    }

    function ct(e, t) {
        var n, i = 0,
            r = {
                height: e
            };
        for (t = t ? 1 : 0; i < 4; i += 2 - t) r["margin" + (n = ie[i])] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e), r
    }

    function pt(e, t, n) {
        for (var i, r = (ht.tweeners[t] || []).concat(ht.tweeners["*"]), a = 0, s = r.length; a < s; a++)
            if (i = r[a].call(n, t, e)) return i
    }

    function ht(r, e, t) {
        var n, a, i = 0,
            s = ht.prefilters.length,
            o = C.Deferred().always(function() {
                delete l.elem
            }),
            l = function() {
                if (a) return !1;
                for (var e = at || ut(), e = Math.max(0, d.startTime + d.duration - e), t = 1 - (e / d.duration || 0), n = 0, i = d.tweens.length; n < i; n++) d.tweens[n].run(t);
                return o.notifyWith(r, [d, t, e]), t < 1 && i ? e : (i || o.notifyWith(r, [d, 1, 0]), o.resolveWith(r, [d]), !1)
            },
            d = o.promise({
                elem: r,
                props: C.extend({}, e),
                opts: C.extend(!0, {
                    specialEasing: {},
                    easing: C.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: at || ut(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    e = C.Tween(r, d.opts, e, t, d.opts.specialEasing[e] || d.opts.easing);
                    return d.tweens.push(e), e
                },
                stop: function(e) {
                    var t = 0,
                        n = e ? d.tweens.length : 0;
                    if (a) return this;
                    for (a = !0; t < n; t++) d.tweens[t].run(1);
                    return e ? (o.notifyWith(r, [d, 1, 0]), o.resolveWith(r, [d, e])) : o.rejectWith(r, [d, e]), this
                }
            }),
            u = d.props;
        for (function(e, t) {
                var n, i, r, a, s;
                for (n in e)
                    if (i = X(n), r = t[i], a = e[n], Array.isArray(a) && (r = a[1], a = e[n] = a[0]), n !== i && (e[i] = a, delete e[n]), (s = C.cssHooks[i]) && "expand" in s)
                        for (n in a = s.expand(a), delete e[i], a) n in e || (e[n] = a[n], t[n] = r);
                    else t[i] = r
            }(u, d.opts.specialEasing); i < s; i++)
            if (n = ht.prefilters[i].call(d, r, u, d.opts)) return b(n.stop) && (C._queueHooks(d.elem, d.opts.queue).stop = n.stop.bind(n)), n;
        return C.map(u, pt, d), b(d.opts.start) && d.opts.start.call(r, d), d.progress(d.opts.progress).done(d.opts.done, d.opts.complete).fail(d.opts.fail).always(d.opts.always), C.fx.timer(C.extend(l, {
            elem: r,
            anim: d,
            queue: d.opts.queue
        })), d
    }
    C.Animation = C.extend(ht, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return ae(n.elem, e, ne.exec(t), n), n
            }]
        },
        tweener: function(e, t) {
            for (var n, i = 0, r = (e = b(e) ? (t = e, ["*"]) : e.match(N)).length; i < r; i++) n = e[i], ht.tweeners[n] = ht.tweeners[n] || [], ht.tweeners[n].unshift(t)
        },
        prefilters: [function(e, t, n) {
            var i, r, a, s, o, l, d, u = "width" in t || "height" in t,
                c = this,
                p = {},
                h = e.style,
                f = e.nodeType && re(e),
                m = U.get(e, "fxshow");
            for (i in n.queue || (null == (s = C._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, o = s.empty.fire, s.empty.fire = function() {
                    s.unqueued || o()
                }), s.unqueued++, c.always(function() {
                    c.always(function() {
                        s.unqueued--, C.queue(e, "fx").length || s.empty.fire()
                    })
                })), t)
                if (r = t[i], ot.test(r)) {
                    if (delete t[i], a = a || "toggle" === r, r === (f ? "hide" : "show")) {
                        if ("show" !== r || !m || void 0 === m[i]) continue;
                        f = !0
                    }
                    p[i] = m && m[i] || C.style(e, i)
                }
            if ((l = !C.isEmptyObject(t)) || !C.isEmptyObject(p))
                for (i in u && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY], null == (d = m && m.display) && (d = U.get(e, "display")), "none" === (u = C.css(e, "display")) && (d ? u = d : (oe([e], !0), d = e.style.display || d, u = C.css(e, "display"), oe([e]))), ("inline" === u || "inline-block" === u && null != d) && "none" === C.css(e, "float") && (l || (c.done(function() {
                        h.display = d
                    }), null == d && (u = h.display, d = "none" === u ? "" : u)), h.display = "inline-block")), n.overflow && (h.overflow = "hidden", c.always(function() {
                        h.overflow = n.overflow[0], h.overflowX = n.overflow[1], h.overflowY = n.overflow[2]
                    })), l = !1, p) l || (m ? "hidden" in m && (f = m.hidden) : m = U.access(e, "fxshow", {
                    display: d
                }), a && (m.hidden = !f), f && oe([e], !0), c.done(function() {
                    for (i in f || oe([e]), U.remove(e, "fxshow"), p) C.style(e, i, p[i])
                })), l = pt(f ? m[i] : 0, i, c), i in m || (m[i] = l.start, f && (l.end = l.start, l.start = 0))
        }],
        prefilter: function(e, t) {
            t ? ht.prefilters.unshift(e) : ht.prefilters.push(e)
        }
    }), C.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? C.extend({}, e) : {
            complete: n || !n && t || b(e) && e,
            duration: e,
            easing: n && t || t && !b(t) && t
        };
        return C.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in C.fx.speeds ? i.duration = C.fx.speeds[i.duration] : i.duration = C.fx.speeds._default), null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function() {
            b(i.old) && i.old.call(this), i.queue && C.dequeue(this, i.queue)
        }, i
    }, C.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(re).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, i)
        },
        animate: function(t, e, n, i) {
            var r = C.isEmptyObject(t),
                a = C.speed(e, n, i),
                i = function() {
                    var e = ht(this, C.extend({}, t), a);
                    (r || U.get(this, "finish")) && e.stop(!0)
                };
            return i.finish = i, r || !1 === a.queue ? this.each(i) : this.queue(a.queue, i)
        },
        stop: function(r, e, a) {
            function s(e) {
                var t = e.stop;
                delete e.stop, t(a)
            }
            return "string" != typeof r && (a = e, e = r, r = void 0), e && !1 !== r && this.queue(r || "fx", []), this.each(function() {
                var e = !0,
                    t = null != r && r + "queueHooks",
                    n = C.timers,
                    i = U.get(this);
                if (t) i[t] && i[t].stop && s(i[t]);
                else
                    for (t in i) i[t] && i[t].stop && lt.test(t) && s(i[t]);
                for (t = n.length; t--;) n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(a), e = !1, n.splice(t, 1));
                !e && a || C.dequeue(this, r)
            })
        },
        finish: function(s) {
            return !1 !== s && (s = s || "fx"), this.each(function() {
                var e, t = U.get(this),
                    n = t[s + "queue"],
                    i = t[s + "queueHooks"],
                    r = C.timers,
                    a = n ? n.length : 0;
                for (t.finish = !0, C.queue(this, s, []), i && i.stop && i.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === s && (r[e].anim.stop(!0), r.splice(e, 1));
                for (e = 0; e < a; e++) n[e] && n[e].finish && n[e].finish.call(this);
                delete t.finish
            })
        }
    }), C.each(["toggle", "show", "hide"], function(e, i) {
        var r = C.fn[i];
        C.fn[i] = function(e, t, n) {
            return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(ct(i, !0), e, t, n)
        }
    }), C.each({
        slideDown: ct("show"),
        slideUp: ct("hide"),
        slideToggle: ct("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, i) {
        C.fn[e] = function(e, t, n) {
            return this.animate(i, e, t, n)
        }
    }), C.timers = [], C.fx.tick = function() {
        var e, t = 0,
            n = C.timers;
        for (at = Date.now(); t < n.length; t++)(e = n[t])() || n[t] !== e || n.splice(t--, 1);
        n.length || C.fx.stop(), at = void 0
    }, C.fx.timer = function(e) {
        C.timers.push(e), C.fx.start()
    }, C.fx.interval = 13, C.fx.start = function() {
        st || (st = !0, dt())
    }, C.fx.stop = function() {
        st = null
    }, C.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, C.fn.delay = function(i, e) {
        return i = C.fx && C.fx.speeds[i] || i, e = e || "fx", this.queue(e, function(e, t) {
            var n = E.setTimeout(e, i);
            t.stop = function() {
                E.clearTimeout(n)
            }
        })
    }, t = T.createElement("input"), te = T.createElement("select").appendChild(T.createElement("option")), t.type = "checkbox", y.checkOn = "" !== t.value, y.optSelected = te.selected, (t = T.createElement("input")).value = "t", t.type = "radio", y.radioValue = "t" === t.value;
    var ft, mt = C.expr.attrHandle;
    C.fn.extend({
        attr: function(e, t) {
            return F(this, C.attr, e, t, 1 < arguments.length)
        },
        removeAttr: function(e) {
            return this.each(function() {
                C.removeAttr(this, e)
            })
        }
    }), C.extend({
        attr: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return void 0 === e.getAttribute ? C.prop(e, t, n) : (1 === a && C.isXMLDoc(e) || (r = C.attrHooks[t.toLowerCase()] || (C.expr.match.bool.test(t) ? ft : void 0)), void 0 !== n ? null === n ? void C.removeAttr(e, t) : r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : !(r && "get" in r && null !== (i = r.get(e, t))) && null == (i = C.find.attr(e, t)) ? void 0 : i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!y.radioValue && "radio" === t && M(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t), n && (e.value = n), t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, i = 0,
                r = t && t.match(N);
            if (r && 1 === e.nodeType)
                for (; n = r[i++];) e.removeAttribute(n)
        }
    }), ft = {
        set: function(e, t, n) {
            return !1 === t ? C.removeAttr(e, n) : e.setAttribute(n, n), n
        }
    }, C.each(C.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var s = mt[t] || C.find.attr;
        mt[t] = function(e, t, n) {
            var i, r, a = t.toLowerCase();
            return n || (r = mt[a], mt[a] = i, i = null != s(e, t, n) ? a : null, mt[a] = r), i
        }
    });
    var vt = /^(?:input|select|textarea|button)$/i,
        gt = /^(?:a|area)$/i;

    function yt(e) {
        return (e.match(N) || []).join(" ")
    }

    function bt(e) {
        return e.getAttribute && e.getAttribute("class") || ""
    }

    function wt(e) {
        return Array.isArray(e) ? e : "string" == typeof e && e.match(N) || []
    }
    C.fn.extend({
        prop: function(e, t) {
            return F(this, C.prop, e, t, 1 < arguments.length)
        },
        removeProp: function(e) {
            return this.each(function() {
                delete this[C.propFix[e] || e]
            })
        }
    }), C.extend({
        prop: function(e, t, n) {
            var i, r, a = e.nodeType;
            if (3 !== a && 8 !== a && 2 !== a) return 1 === a && C.isXMLDoc(e) || (t = C.propFix[t] || t, r = C.propHooks[t]), void 0 !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get" in r && null !== (i = r.get(e, t)) ? i : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = C.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : vt.test(e.nodeName) || gt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            for: "htmlFor",
            class: "className"
        }
    }), y.optSelected || (C.propHooks.selected = {
        get: function(e) {
            e = e.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex, null
        },
        set: function(e) {
            e = e.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), C.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        C.propFix[this.toLowerCase()] = this
    }), C.fn.extend({
        addClass: function(t) {
            var e, n, i, r, a, s, o = 0;
            if (b(t)) return this.each(function(e) {
                C(this).addClass(t.call(this, e, bt(this)))
            });
            if ((e = wt(t)).length)
                for (; n = this[o++];)
                    if (s = bt(n), i = 1 === n.nodeType && " " + yt(s) + " ") {
                        for (a = 0; r = e[a++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s !== (s = yt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, a, s, o = 0;
            if (b(t)) return this.each(function(e) {
                C(this).removeClass(t.call(this, e, bt(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ((e = wt(t)).length)
                for (; n = this[o++];)
                    if (s = bt(n), i = 1 === n.nodeType && " " + yt(s) + " ") {
                        for (a = 0; r = e[a++];)
                            for (; - 1 < i.indexOf(" " + r + " ");) i = i.replace(" " + r + " ", " ");
                        s !== (s = yt(i)) && n.setAttribute("class", s)
                    }
            return this
        },
        toggleClass: function(r, t) {
            var a = typeof r,
                s = "string" == a || Array.isArray(r);
            return "boolean" == typeof t && s ? t ? this.addClass(r) : this.removeClass(r) : b(r) ? this.each(function(e) {
                C(this).toggleClass(r.call(this, e, bt(this), t), t)
            }) : this.each(function() {
                var e, t, n, i;
                if (s)
                    for (t = 0, n = C(this), i = wt(r); e = i[t++];) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                else void 0 !== r && "boolean" != a || ((e = bt(this)) && U.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== r && U.get(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            for (var t, n = 0, i = " " + e + " "; t = this[n++];)
                if (1 === t.nodeType && -1 < (" " + yt(bt(t)) + " ").indexOf(i)) return !0;
            return !1
        }
    });
    var xt = /\r/g;
    C.fn.extend({
        val: function(t) {
            var n, e, i, r = this[0];
            return arguments.length ? (i = b(t), this.each(function(e) {
                1 === this.nodeType && (null == (e = i ? t.call(this, e, C(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = C.map(e, function(e) {
                    return null == e ? "" : e + ""
                })), (n = C.valHooks[this.type] || C.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, e, "value") || (this.value = e))
            })) : r ? (n = C.valHooks[r.type] || C.valHooks[r.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof(e = r.value) ? e.replace(xt, "") : null == e ? "" : e : void 0
        }
    }), C.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = C.find.attr(e, "value");
                    return null != t ? t : yt(C.text(e))
                }
            },
            select: {
                get: function(e) {
                    for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, a = r ? null : [], s = r ? i + 1 : n.length, o = i < 0 ? s : r ? i : 0; o < s; o++)
                        if (((t = n[o]).selected || o === i) && !t.disabled && (!t.parentNode.disabled || !M(t.parentNode, "optgroup"))) {
                            if (t = C(t).val(), r) return t;
                            a.push(t)
                        }
                    return a
                },
                set: function(e, t) {
                    for (var n, i, r = e.options, a = C.makeArray(t), s = r.length; s--;)((i = r[s]).selected = -1 < C.inArray(C.valHooks.option.get(i), a)) && (n = !0);
                    return n || (e.selectedIndex = -1), a
                }
            }
        }
    }), C.each(["radio", "checkbox"], function() {
        C.valHooks[this] = {
            set: function(e, t) {
                if (Array.isArray(t)) return e.checked = -1 < C.inArray(C(e).val(), t)
            }
        }, y.checkOn || (C.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        })
    }), y.focusin = "onfocusin" in E;

    function Et(e) {
        e.stopPropagation()
    }
    var Tt = /^(?:focusinfocus|focusoutblur)$/;
    C.extend(C.event, {
        trigger: function(e, t, n, i) {
            var r, a, s, o, l, d, u, c = [n || T],
                p = g.call(e, "type") ? e.type : e,
                h = g.call(e, "namespace") ? e.namespace.split(".") : [],
                f = u = a = n = n || T;
            if (3 !== n.nodeType && 8 !== n.nodeType && !Tt.test(p + C.event.triggered) && (-1 < p.indexOf(".") && (p = (h = p.split(".")).shift(), h.sort()), o = p.indexOf(":") < 0 && "on" + p, (e = e[C.expando] ? e : new C.Event(p, "object" == typeof e && e)).isTrigger = i ? 2 : 3, e.namespace = h.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : C.makeArray(t, [e]), d = C.event.special[p] || {}, i || !d.trigger || !1 !== d.trigger.apply(n, t))) {
                if (!i && !d.noBubble && !m(n)) {
                    for (s = d.delegateType || p, Tt.test(s + p) || (f = f.parentNode); f; f = f.parentNode) c.push(f), a = f;
                    a === (n.ownerDocument || T) && c.push(a.defaultView || a.parentWindow || E)
                }
                for (r = 0;
                    (f = c[r++]) && !e.isPropagationStopped();) u = f, e.type = 1 < r ? s : d.bindType || p, (l = (U.get(f, "events") || {})[e.type] && U.get(f, "handle")) && l.apply(f, t), (l = o && f[o]) && l.apply && V(f) && (e.result = l.apply(f, t), !1 === e.result && e.preventDefault());
                return e.type = p, i || e.isDefaultPrevented() || d._default && !1 !== d._default.apply(c.pop(), t) || !V(n) || o && b(n[p]) && !m(n) && ((a = n[o]) && (n[o] = null), C.event.triggered = p, e.isPropagationStopped() && u.addEventListener(p, Et), n[p](), e.isPropagationStopped() && u.removeEventListener(p, Et), C.event.triggered = void 0, a && (n[o] = a)), e.result
            }
        },
        simulate: function(e, t, n) {
            e = C.extend(new C.Event, n, {
                type: e,
                isSimulated: !0
            });
            C.event.trigger(e, null, t)
        }
    }), C.fn.extend({
        trigger: function(e, t) {
            return this.each(function() {
                C.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            if (n) return C.event.trigger(e, t, n, !0)
        }
    }), y.focusin || C.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, i) {
        function r(e) {
            C.event.simulate(i, e.target, C.event.fix(e))
        }
        C.event.special[i] = {
            setup: function() {
                var e = this.ownerDocument || this,
                    t = U.access(e, i);
                t || e.addEventListener(n, r, !0), U.access(e, i, (t || 0) + 1)
            },
            teardown: function() {
                var e = this.ownerDocument || this,
                    t = U.access(e, i) - 1;
                t ? U.access(e, i, t) : (e.removeEventListener(n, r, !0), U.remove(e, i))
            }
        }
    });
    var Ct = E.location,
        St = Date.now(),
        kt = /\?/;
    C.parseXML = function(e) {
        var t;
        if (!e || "string" != typeof e) return null;
        try {
            t = (new E.DOMParser).parseFromString(e, "text/xml")
        } catch (e) {
            t = void 0
        }
        return t && !t.getElementsByTagName("parsererror").length || C.error("Invalid XML: " + e), t
    };
    var Mt = /\[\]$/,
        Lt = /\r?\n/g,
        Pt = /^(?:submit|button|image|reset|file)$/i,
        $t = /^(?:input|select|textarea|keygen)/i;
    C.param = function(e, t) {
        function n(e, t) {
            t = b(t) ? t() : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
        }
        var i, r = [];
        if (Array.isArray(e) || e.jquery && !C.isPlainObject(e)) C.each(e, function() {
            n(this.name, this.value)
        });
        else
            for (i in e) ! function n(i, e, r, a) {
                if (Array.isArray(e)) C.each(e, function(e, t) {
                    r || Mt.test(i) ? a(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, a)
                });
                else if (r || "object" !== f(e)) a(i, e);
                else
                    for (var t in e) n(i + "[" + t + "]", e[t], r, a)
            }(i, e[i], t, n);
        return r.join("&")
    }, C.fn.extend({
        serialize: function() {
            return C.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = C.prop(this, "elements");
                return e ? C.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !C(this).is(":disabled") && $t.test(this.nodeName) && !Pt.test(e) && (this.checked || !le.test(e))
            }).map(function(e, t) {
                var n = C(this).val();
                return null == n ? null : Array.isArray(n) ? C.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(Lt, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(Lt, "\r\n")
                }
            }).get()
        }
    });
    var At = /%20/g,
        zt = /#.*$/,
        Dt = /([?&])_=[^&]*/,
        Ot = /^(.*?):[ \t]*([^\r\n]*)$/gm,
        Nt = /^(?:GET|HEAD)$/,
        It = /^\/\//,
        Ht = {},
        qt = {},
        Rt = "*/".concat("*"),
        jt = T.createElement("a");

    function Bt(a) {
        return function(e, t) {
            "string" != typeof e && (t = e, e = "*");
            var n, i = 0,
                r = e.toLowerCase().match(N) || [];
            if (b(t))
                for (; n = r[i++];) "+" === n[0] ? (n = n.slice(1) || "*", (a[n] = a[n] || []).unshift(t)) : (a[n] = a[n] || []).push(t)
        }
    }

    function Ft(t, i, r, a) {
        var s = {},
            o = t === qt;

        function l(e) {
            var n;
            return s[e] = !0, C.each(t[e] || [], function(e, t) {
                t = t(i, r, a);
                return "string" != typeof t || o || s[t] ? o ? !(n = t) : void 0 : (i.dataTypes.unshift(t), l(t), !1)
            }), n
        }
        return l(i.dataTypes[0]) || !s["*"] && l("*")
    }

    function Wt(e, t) {
        var n, i, r = C.ajaxSettings.flatOptions || {};
        for (n in t) void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
        return i && C.extend(!0, e, i), e
    }
    jt.href = Ct.href, C.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ct.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Ct.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Rt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": C.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? Wt(Wt(e, C.ajaxSettings), t) : Wt(C.ajaxSettings, e)
        },
        ajaxPrefilter: Bt(Ht),
        ajaxTransport: Bt(qt),
        ajax: function(e, t) {
            "object" == typeof e && (t = e, e = void 0), t = t || {};
            var l, d, u, n, c, i, p, h, r, f = C.ajaxSetup({}, t),
                m = f.context || f,
                v = f.context && (m.nodeType || m.jquery) ? C(m) : C.event,
                g = C.Deferred(),
                y = C.Callbacks("once memory"),
                b = f.statusCode || {},
                a = {},
                s = {},
                o = "canceled",
                w = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (p) {
                            if (!n)
                                for (n = {}; t = Ot.exec(u);) n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return p ? u : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == p && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e, a[e] = t), this
                    },
                    overrideMimeType: function(e) {
                        return null == p && (f.mimeType = e), this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (p) w.always(e[w.status]);
                            else
                                for (var t in e) b[t] = [b[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || o;
                        return l && l.abort(e), x(0, e), this
                    }
                };
            if (g.promise(w), f.url = ((e || f.url || Ct.href) + "").replace(It, Ct.protocol + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(N) || [""], null == f.crossDomain) {
                i = T.createElement("a");
                try {
                    i.href = f.url, i.href = i.href, f.crossDomain = jt.protocol + "//" + jt.host != i.protocol + "//" + i.host
                } catch (e) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && "string" != typeof f.data && (f.data = C.param(f.data, f.traditional)), Ft(Ht, f, t, w), p) return w;
            for (r in (h = C.event && f.global) && 0 == C.active++ && C.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Nt.test(f.type), d = f.url.replace(zt, ""), f.hasContent ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(At, "+")) : (e = f.url.slice(d.length), f.data && (f.processData || "string" == typeof f.data) && (d += (kt.test(d) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (d = d.replace(Dt, "$1"), e = (kt.test(d) ? "&" : "?") + "_=" + St++ + e), f.url = d + e), f.ifModified && (C.lastModified[d] && w.setRequestHeader("If-Modified-Since", C.lastModified[d]), C.etag[d] && w.setRequestHeader("If-None-Match", C.etag[d])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && w.setRequestHeader("Content-Type", f.contentType), w.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]), f.headers) w.setRequestHeader(r, f.headers[r]);
            if (f.beforeSend && (!1 === f.beforeSend.call(m, w, f) || p)) return w.abort();
            if (o = "abort", y.add(f.complete), w.done(f.success), w.fail(f.error), l = Ft(qt, f, t, w)) {
                if (w.readyState = 1, h && v.trigger("ajaxSend", [w, f]), p) return w;
                f.async && 0 < f.timeout && (c = E.setTimeout(function() {
                    w.abort("timeout")
                }, f.timeout));
                try {
                    p = !1, l.send(a, x)
                } catch (e) {
                    if (p) throw e;
                    x(-1, e)
                }
            } else x(-1, "No Transport");

            function x(e, t, n, i) {
                var r, a, s, o = t;
                p || (p = !0, c && E.clearTimeout(c), l = void 0, u = i || "", w.readyState = 0 < e ? 4 : 0, i = 200 <= e && e < 300 || 304 === e, n && (s = function(e, t, n) {
                    for (var i, r, a, s, o = e.contents, l = e.dataTypes;
                        "*" === l[0];) l.shift(), void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                    if (i)
                        for (r in o)
                            if (o[r] && o[r].test(i)) {
                                l.unshift(r);
                                break
                            }
                    if (l[0] in n) a = l[0];
                    else {
                        for (r in n) {
                            if (!l[0] || e.converters[r + " " + l[0]]) {
                                a = r;
                                break
                            }
                            s = s || r
                        }
                        a = a || s
                    }
                    if (a) return a !== l[0] && l.unshift(a), n[a]
                }(f, w, n)), s = function(e, t, n, i) {
                    var r, a, s, o, l, d = {},
                        u = e.dataTypes.slice();
                    if (u[1])
                        for (s in e.converters) d[s.toLowerCase()] = e.converters[s];
                    for (a = u.shift(); a;)
                        if (e.responseFields[a] && (n[e.responseFields[a]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = a, a = u.shift())
                            if ("*" === a) a = l;
                            else if ("*" !== l && l !== a) {
                        if (!(s = d[l + " " + a] || d["* " + a]))
                            for (r in d)
                                if ((o = r.split(" "))[1] === a && (s = d[l + " " + o[0]] || d["* " + o[0]])) {
                                    !0 === s ? s = d[r] : !0 !== d[r] && (a = o[0], u.unshift(o[1]));
                                    break
                                }
                        if (!0 !== s)
                            if (s && e.throws) t = s(t);
                            else try {
                                t = s(t)
                            } catch (e) {
                                return {
                                    state: "parsererror",
                                    error: s ? e : "No conversion from " + l + " to " + a
                                }
                            }
                    }
                    return {
                        state: "success",
                        data: t
                    }
                }(f, s, w, i), i ? (f.ifModified && ((n = w.getResponseHeader("Last-Modified")) && (C.lastModified[d] = n), (n = w.getResponseHeader("etag")) && (C.etag[d] = n)), 204 === e || "HEAD" === f.type ? o = "nocontent" : 304 === e ? o = "notmodified" : (o = s.state, r = s.data, i = !(a = s.error))) : (a = o, !e && o || (o = "error", e < 0 && (e = 0))), w.status = e, w.statusText = (t || o) + "", i ? g.resolveWith(m, [r, o, w]) : g.rejectWith(m, [w, o, a]), w.statusCode(b), b = void 0, h && v.trigger(i ? "ajaxSuccess" : "ajaxError", [w, f, i ? r : a]), y.fireWith(m, [w, o]), h && (v.trigger("ajaxComplete", [w, f]), --C.active || C.event.trigger("ajaxStop")))
            }
            return w
        },
        getJSON: function(e, t, n) {
            return C.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return C.get(e, void 0, t, "script")
        }
    }), C.each(["get", "post"], function(e, r) {
        C[r] = function(e, t, n, i) {
            return b(t) && (i = i || n, n = t, t = void 0), C.ajax(C.extend({
                url: e,
                type: r,
                dataType: i,
                data: t,
                success: n
            }, C.isPlainObject(e) && e))
        }
    }), C._evalUrl = function(e) {
        return C.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, C.fn.extend({
        wrapAll: function(e) {
            return this[0] && (b(e) && (e = e.call(this[0])), e = C(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                for (var e = this; e.firstElementChild;) e = e.firstElementChild;
                return e
            }).append(this)), this
        },
        wrapInner: function(n) {
            return b(n) ? this.each(function(e) {
                C(this).wrapInner(n.call(this, e))
            }) : this.each(function() {
                var e = C(this),
                    t = e.contents();
                t.length ? t.wrapAll(n) : e.append(n)
            })
        },
        wrap: function(t) {
            var n = b(t);
            return this.each(function(e) {
                C(this).wrapAll(n ? t.call(this, e) : t)
            })
        },
        unwrap: function(e) {
            return this.parent(e).not("body").each(function() {
                C(this).replaceWith(this.childNodes)
            }), this
        }
    }), C.expr.pseudos.hidden = function(e) {
        return !C.expr.pseudos.visible(e)
    }, C.expr.pseudos.visible = function(e) {
        return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }, C.ajaxSettings.xhr = function() {
        try {
            return new E.XMLHttpRequest
        } catch (e) {}
    };
    var Gt = {
            0: 200,
            1223: 204
        },
        _t = C.ajaxSettings.xhr();
    y.cors = !!_t && "withCredentials" in _t, y.ajax = _t = !!_t, C.ajaxTransport(function(r) {
        var a, s;
        if (y.cors || _t && !r.crossDomain) return {
            send: function(e, t) {
                var n, i = r.xhr();
                if (i.open(r.type, r.url, r.async, r.username, r.password), r.xhrFields)
                    for (n in r.xhrFields) i[n] = r.xhrFields[n];
                for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType), r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) i.setRequestHeader(n, e[n]);
                a = function(e) {
                    return function() {
                        a && (a = s = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null, "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Gt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                            binary: i.response
                        } : {
                            text: i.responseText
                        }, i.getAllResponseHeaders()))
                    }
                }, i.onload = a(), s = i.onerror = i.ontimeout = a("error"), void 0 !== i.onabort ? i.onabort = s : i.onreadystatechange = function() {
                    4 === i.readyState && E.setTimeout(function() {
                        a && s()
                    })
                }, a = a("abort");
                try {
                    i.send(r.hasContent && r.data || null)
                } catch (e) {
                    if (a) throw e
                }
            },
            abort: function() {
                a && a()
            }
        }
    }), C.ajaxPrefilter(function(e) {
        e.crossDomain && (e.contents.script = !1)
    }), C.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return C.globalEval(e), e
            }
        }
    }), C.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
    }), C.ajaxTransport("script", function(n) {
        var i, r;
        if (n.crossDomain) return {
            send: function(e, t) {
                i = C("<script>").prop({
                    charset: n.scriptCharset,
                    src: n.url
                }).on("load error", r = function(e) {
                    i.remove(), r = null, e && t("error" === e.type ? 404 : 200, e.type)
                }), T.head.appendChild(i[0])
            },
            abort: function() {
                r && r()
            }
        }
    });
    var Xt = [],
        Vt = /(=)\?(?=&|$)|\?\?/;
    C.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xt.pop() || C.expando + "_" + St++;
            return this[e] = !0, e
        }
    }), C.ajaxPrefilter("json jsonp", function(e, t, n) {
        var i, r, a, s = !1 !== e.jsonp && (Vt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Vt.test(e.data) && "data");
        if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = b(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Vt, "$1" + i) : !1 !== e.jsonp && (e.url += (kt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function() {
            return a || C.error(i + " was not called"), a[0]
        }, e.dataTypes[0] = "json", r = E[i], E[i] = function() {
            a = arguments
        }, n.always(function() {
            void 0 === r ? C(E).removeProp(i) : E[i] = r, e[i] && (e.jsonpCallback = t.jsonpCallback, Xt.push(i)), a && b(r) && r(a[0]), a = r = void 0
        }), "script"
    }), y.createHTMLDocument = ((t = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === t.childNodes.length), C.parseHTML = function(e, t, n) {
        return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t, t = !1), t || (y.createHTMLDocument ? ((i = (t = T.implementation.createHTMLDocument("")).createElement("base")).href = T.location.href, t.head.appendChild(i)) : t = T), i = !n && [], (n = L.exec(e)) ? [t.createElement(n[1])] : (n = me([e], t, i), i && i.length && C(i).remove(), C.merge([], n.childNodes)));
        var i
    }, C.fn.load = function(e, t, n) {
        var i, r, a, s = this,
            o = e.indexOf(" ");
        return -1 < o && (i = yt(e.slice(o)), e = e.slice(0, o)), b(t) ? (n = t, t = void 0) : t && "object" == typeof t && (r = "POST"), 0 < s.length && C.ajax({
            url: e,
            type: r || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            a = arguments, s.html(i ? C("<div>").append(C.parseHTML(e)).find(i) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, a || [e.responseText, t, e])
            })
        }), this
    }, C.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        C.fn[t] = function(e) {
            return this.on(t, e)
        }
    }), C.expr.pseudos.animated = function(t) {
        return C.grep(C.timers, function(e) {
            return t === e.elem
        }).length
    }, C.offset = {
        setOffset: function(e, t, n) {
            var i, r, a, s, o = C.css(e, "position"),
                l = C(e),
                d = {};
            "static" === o && (e.style.position = "relative"), a = l.offset(), i = C.css(e, "top"), s = C.css(e, "left"), s = ("absolute" === o || "fixed" === o) && -1 < (i + s).indexOf("auto") ? (r = (o = l.position()).top, o.left) : (r = parseFloat(i) || 0, parseFloat(s) || 0), b(t) && (t = t.call(e, n, C.extend({}, a))), null != t.top && (d.top = t.top - a.top + r), null != t.left && (d.left = t.left - a.left + s), "using" in t ? t.using.call(e, d) : l.css(d)
        }
    }, C.fn.extend({
        offset: function(t) {
            if (arguments.length) return void 0 === t ? this : this.each(function(e) {
                C.offset.setOffset(this, t, e)
            });
            var e, n = this[0];
            return n ? n.getClientRects().length ? (e = n.getBoundingClientRect(), n = n.ownerDocument.defaultView, {
                top: e.top + n.pageYOffset,
                left: e.left + n.pageXOffset
            }) : {
                top: 0,
                left: 0
            } : void 0
        },
        position: function() {
            if (this[0]) {
                var e, t, n, i = this[0],
                    r = {
                        top: 0,
                        left: 0
                    };
                if ("fixed" === C.css(i, "position")) t = i.getBoundingClientRect();
                else {
                    for (t = this.offset(), n = i.ownerDocument, e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === C.css(e, "position");) e = e.parentNode;
                    e && e !== i && 1 === e.nodeType && ((r = C(e).offset()).top += C.css(e, "borderTopWidth", !0), r.left += C.css(e, "borderLeftWidth", !0))
                }
                return {
                    top: t.top - r.top - C.css(i, "marginTop", !0),
                    left: t.left - r.left - C.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && "static" === C.css(e, "position");) e = e.offsetParent;
                return e || ve
            })
        }
    }), C.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(t, r) {
        var a = "pageYOffset" === r;
        C.fn[t] = function(e) {
            return F(this, function(e, t, n) {
                var i;
                return m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView), void 0 === n ? i ? i[r] : e[t] : void(i ? i.scrollTo(a ? i.pageXOffset : n, a ? n : i.pageYOffset) : e[t] = n)
            }, t, e, arguments.length)
        }
    }), C.each(["top", "left"], function(e, n) {
        C.cssHooks[n] = Ve(y.pixelPosition, function(e, t) {
            if (t) return t = Xe(e, n), Be.test(t) ? C(e).position()[n] + "px" : t
        })
    }), C.each({
        Height: "height",
        Width: "width"
    }, function(s, o) {
        C.each({
            padding: "inner" + s,
            content: o,
            "": "outer" + s
        }, function(i, a) {
            C.fn[a] = function(e, t) {
                var n = arguments.length && (i || "boolean" != typeof e),
                    r = i || (!0 === e || !0 === t ? "margin" : "border");
                return F(this, function(e, t, n) {
                    var i;
                    return m(e) ? 0 === a.indexOf("outer") ? e["inner" + s] : e.document.documentElement["client" + s] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + s], i["scroll" + s], e.body["offset" + s], i["offset" + s], i["client" + s])) : void 0 === n ? C.css(e, t, r) : C.style(e, t, n, r)
                }, o, n ? e : void 0, n)
            }
        })
    }), C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
        C.fn[n] = function(e, t) {
            return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
    }), C.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    }), C.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }), C.proxy = function(e, t) {
        var n, i;
        if ("string" == typeof t && (i = e[t], t = e, e = i), b(e)) return n = o.call(arguments, 2), (i = function() {
            return e.apply(t || this, n.concat(o.call(arguments)))
        }).guid = e.guid = e.guid || C.guid++, i
    }, C.holdReady = function(e) {
        e ? C.readyWait++ : C.ready(!0)
    }, C.isArray = Array.isArray, C.parseJSON = JSON.parse, C.nodeName = M, C.isFunction = b, C.isWindow = m, C.camelCase = X, C.type = f, C.now = Date.now, C.isNumeric = function(e) {
        var t = C.type(e);
        return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
    }, "function" == typeof define && define.amd && define("jquery", [], function() {
        return C
    });
    var Yt = E.jQuery,
        Ut = E.$;
    return C.noConflict = function(e) {
        return E.$ === C && (E.$ = Ut), e && E.jQuery === C && (E.jQuery = Yt), C
    }, e || (E.jQuery = E.$ = C), C
}),
function(n) {
    "use strict";
    var t, e;

    function i(e, t) {
        this.opts = n.extend({
            handleWheel: !0,
            handleScrollbar: !0,
            handleKeys: !0,
            scrollEventKeys: [32, 33, 34, 35, 36, 37, 38, 39, 40]
        }, t), this.$container = e, this.$document = n(document), this.lockToScrollPos = [0, 0], this.disable()
    }(e = i.prototype).disable = function() {
        var t = this;
        t.opts.handleWheel && t.$container.on("mousewheel.disablescroll DOMMouseScroll.disablescroll touchmove.disablescroll", t._handleWheel), t.opts.handleScrollbar && (t.lockToScrollPos = [t.$container.scrollLeft(), t.$container.scrollTop()], t.$container.on("scroll.disablescroll", function() {
            t._handleScrollbar.call(t)
        })), t.opts.handleKeys && t.$document.on("keydown.disablescroll", function(e) {
            t._handleKeydown.call(t, e)
        })
    }, e.undo = function() {
        this.$container.off(".disablescroll"), this.opts.handleKeys && this.$document.off(".disablescroll")
    }, e._handleWheel = function(e) {
        e.preventDefault()
    }, e._handleScrollbar = function() {
        this.$container.scrollLeft(this.lockToScrollPos[0]), this.$container.scrollTop(this.lockToScrollPos[1])
    }, e._handleKeydown = function(e) {
        for (var t = 0; t < this.opts.scrollEventKeys.length; t++)
            if (e.keyCode === this.opts.scrollEventKeys[t]) return void e.preventDefault()
    }, n.fn.disablescroll = function(e) {
        return t || "object" != typeof e && e || (t = new i(this, e)), t && void 0 === e ? t.disable() : t && t[e] && t[e].call(t), this
    }, window.UserScrollDisabler = i
}(jQuery),
function() {
    "use strict";

    function t(e) {
        if (!e) throw new Error("No options passed to Waypoint constructor");
        if (!e.element) throw new Error("No element option passed to Waypoint constructor");
        if (!e.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + n, this.options = t.Adapter.extend({}, t.defaults, e), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = e.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), a[this.key] = this, n += 1
    }
    var n = 0,
        a = {};
    t.prototype.queueTrigger = function(e) {
        this.group.queueTrigger(this, e)
    }, t.prototype.trigger = function(e) {
        this.enabled && this.callback && this.callback.apply(this, e)
    }, t.prototype.destroy = function() {
        this.context.remove(this), this.group.remove(this), delete a[this.key]
    }, t.prototype.disable = function() {
        return this.enabled = !1, this
    }, t.prototype.enable = function() {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function() {
        return this.group.next(this)
    }, t.prototype.previous = function() {
        return this.group.previous(this)
    }, t.invokeAll = function(e) {
        var t, n = [];
        for (t in a) n.push(a[t]);
        for (var i = 0, r = n.length; i < r; i++) n[i][e]()
    }, t.destroyAll = function() {
        t.invokeAll("destroy")
    }, t.disableAll = function() {
        t.invokeAll("disable")
    }, t.enableAll = function() {
        t.invokeAll("enable")
    }, t.refreshAll = function() {
        t.Context.refreshAll()
    }, t.viewportHeight = function() {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function() {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function() {
            return this.context.innerHeight() - this.adapter.outerHeight()
        },
        "right-in-view": function() {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(),
function() {
    "use strict";

    function t(e) {
        window.setTimeout(e, 1e3 / 60)
    }

    function n(e) {
        this.element = e, this.Adapter = h.Adapter, this.adapter = new this.Adapter(e), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, e.waypointContextKey = this.key, r[e.waypointContextKey] = this, i += 1, this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }
    var i = 0,
        r = {},
        h = window.Waypoint,
        e = window.onload;
    n.prototype.add = function(e) {
        var t = e.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[t][e.key] = e, this.refresh()
    }, n.prototype.checkEmpty = function() {
        var e = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            t = this.Adapter.isEmptyObject(this.waypoints.vertical);
        e && t && (this.adapter.off(".waypoints"), delete r[this.key])
    }, n.prototype.createThrottledResizeHandler = function() {
        function e() {
            t.handleResize(), t.didResize = !1
        }
        var t = this;
        this.adapter.on("resize.waypoints", function() {
            t.didResize || (t.didResize = !0, h.requestAnimationFrame(e))
        })
    }, n.prototype.createThrottledScrollHandler = function() {
        function e() {
            t.handleScroll(), t.didScroll = !1
        }
        var t = this;
        this.adapter.on("scroll.waypoints", function() {
            t.didScroll && !h.isTouch || (t.didScroll = !0, h.requestAnimationFrame(e))
        })
    }, n.prototype.handleResize = function() {
        h.Context.refreshAll()
    }, n.prototype.handleScroll = function() {
        var e, t, n = {},
            i = {
                horizontal: {
                    newScroll: this.adapter.scrollLeft(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left"
                },
                vertical: {
                    newScroll: this.adapter.scrollTop(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up"
                }
            };
        for (e in i) {
            var r, a = i[e],
                s = a.newScroll > a.oldScroll ? a.forward : a.backward;
            for (r in this.waypoints[e]) {
                var o = this.waypoints[e][r],
                    l = a.oldScroll < o.triggerPoint,
                    d = a.newScroll >= o.triggerPoint;
                (l && d || !l && !d) && (o.queueTrigger(s), n[o.group.id] = o.group)
            }
        }
        for (t in n) n[t].flushTriggers();
        this.oldScroll = {
            x: i.horizontal.newScroll,
            y: i.vertical.newScroll
        }
    }, n.prototype.innerHeight = function() {
        return this.element == this.element.window ? h.viewportHeight() : this.adapter.innerHeight()
    }, n.prototype.remove = function(e) {
        delete this.waypoints[e.axis][e.key], this.checkEmpty()
    }, n.prototype.innerWidth = function() {
        return this.element == this.element.window ? h.viewportWidth() : this.adapter.innerWidth()
    }, n.prototype.destroy = function() {
        var e, t = [];
        for (e in this.waypoints)
            for (var n in this.waypoints[e]) t.push(this.waypoints[e][n]);
        for (var i = 0, r = t.length; i < r; i++) t[i].destroy()
    }, n.prototype.refresh = function() {
        var e, t, n = this.element == this.element.window,
            i = n ? void 0 : this.adapter.offset(),
            r = {};
        for (t in this.handleScroll(), e = {
                horizontal: {
                    contextOffset: n ? 0 : i.left,
                    contextScroll: n ? 0 : this.oldScroll.x,
                    contextDimension: this.innerWidth(),
                    oldScroll: this.oldScroll.x,
                    forward: "right",
                    backward: "left",
                    offsetProp: "left"
                },
                vertical: {
                    contextOffset: n ? 0 : i.top,
                    contextScroll: n ? 0 : this.oldScroll.y,
                    contextDimension: this.innerHeight(),
                    oldScroll: this.oldScroll.y,
                    forward: "down",
                    backward: "up",
                    offsetProp: "top"
                }
            }) {
            var a, s = e[t];
            for (a in this.waypoints[t]) {
                var o, l = this.waypoints[t][a],
                    d = l.options.offset,
                    u = l.triggerPoint,
                    c = 0,
                    p = null == u;
                l.element !== l.element.window && (c = l.adapter.offset()[s.offsetProp]), "function" == typeof d ? d = d.apply(l) : "string" == typeof d && (d = parseFloat(d), -1 < l.options.offset.indexOf("%") && (d = Math.ceil(s.contextDimension * d / 100))), o = s.contextScroll - s.contextOffset, l.triggerPoint = c + o - d, o = u < s.oldScroll, d = l.triggerPoint >= s.oldScroll, u = !o && !d, !p && (o && d) ? (l.queueTrigger(s.backward), r[l.group.id] = l.group) : (!p && u || p && s.oldScroll >= l.triggerPoint) && (l.queueTrigger(s.forward), r[l.group.id] = l.group)
            }
        }
        return h.requestAnimationFrame(function() {
            for (var e in r) r[e].flushTriggers()
        }), this
    }, n.findOrCreateByElement = function(e) {
        return n.findByElement(e) || new n(e)
    }, n.refreshAll = function() {
        for (var e in r) r[e].refresh()
    }, n.findByElement = function(e) {
        return r[e.waypointContextKey]
    }, window.onload = function() {
        e && e(), n.refreshAll()
    }, h.requestAnimationFrame = function(e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, h.Context = n
}(),
function() {
    "use strict";

    function s(e, t) {
        return e.triggerPoint - t.triggerPoint
    }

    function o(e, t) {
        return t.triggerPoint - e.triggerPoint
    }

    function t(e) {
        this.name = e.name, this.axis = e.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), n[this.axis][this.name] = this
    }
    var n = {
            vertical: {},
            horizontal: {}
        },
        i = window.Waypoint;
    t.prototype.add = function(e) {
        this.waypoints.push(e)
    }, t.prototype.clearTriggerQueues = function() {
        this.triggerQueues = {
            up: [],
            down: [],
            left: [],
            right: []
        }
    }, t.prototype.flushTriggers = function() {
        for (var e in this.triggerQueues) {
            var t = this.triggerQueues[e],
                n = "up" === e || "left" === e;
            t.sort(n ? o : s);
            for (var i = 0, r = t.length; i < r; i += 1) {
                var a = t[i];
                !a.options.continuous && i !== t.length - 1 || a.trigger([e])
            }
        }
        this.clearTriggerQueues()
    }, t.prototype.next = function(e) {
        this.waypoints.sort(s);
        e = i.Adapter.inArray(e, this.waypoints);
        return e === this.waypoints.length - 1 ? null : this.waypoints[e + 1]
    }, t.prototype.previous = function(e) {
        this.waypoints.sort(s);
        e = i.Adapter.inArray(e, this.waypoints);
        return e ? this.waypoints[e - 1] : null
    }, t.prototype.queueTrigger = function(e, t) {
        this.triggerQueues[t].push(e)
    }, t.prototype.remove = function(e) {
        e = i.Adapter.inArray(e, this.waypoints); - 1 < e && this.waypoints.splice(e, 1)
    }, t.prototype.first = function() {
        return this.waypoints[0]
    }, t.prototype.last = function() {
        return this.waypoints[this.waypoints.length - 1]
    }, t.findOrCreate = function(e) {
        return n[e.axis][e.name] || new t(e)
    }, i.Group = t
}(),
function() {
    "use strict";

    function n(e) {
        this.$element = i(e)
    }
    var i = window.jQuery,
        e = window.Waypoint;
    i.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function(e, t) {
        n.prototype[t] = function() {
            var e = Array.prototype.slice.call(arguments);
            return this.$element[t].apply(this.$element, e)
        }
    }), i.each(["extend", "inArray", "isEmptyObject"], function(e, t) {
        n[t] = i[t]
    }), e.adapters.push({
        name: "jquery",
        Adapter: n
    }), e.Adapter = n
}(),
function() {
    "use strict";

    function e(i) {
        return function() {
            var t = [],
                n = arguments[0];
            return i.isFunction(arguments[0]) && ((n = i.extend({}, arguments[1])).handler = arguments[0]), this.each(function() {
                var e = i.extend({}, n, {
                    element: this
                });
                "string" == typeof e.context && (e.context = i(this).closest(e.context)[0]), t.push(new r(e))
            }), t
        }
    }
    var r = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
}(),
function(n) {
    "use strict";
    n.fn.countUp = function(e) {
        var t = n.extend({
            time: 2e3,
            delay: 10
        }, e);
        return this.each(function() {
            var u = n(this),
                c = t;
            u.waypoint(function() {
                u.data("counterupTo") || u.data("counterupTo", u.text());
                for (var e = 0 < parseInt(u.data("counter-time")) ? parseInt(u.data("counter-time")) : c.time, t = 0 < parseInt(u.data("counter-delay")) ? parseInt(u.data("counter-delay")) : c.delay, n = e / t, i = [a = u.data("counterupTo")], r = /[0-9]+,[0-9]+/.test(a), a = a.replace(/,/g, ""), s = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)), o = s ? (a.split(".")[1] || []).length : 0, l = n; 1 <= l; l--) {
                    var d = parseInt(Math.round(a / n * l));
                    if (s && (d = parseFloat(a / n * l).toFixed(o)), r)
                        for (;
                            /(\d+)(\d{3})/.test(d.toString());) d = d.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    i.unshift(d)
                }
                u.data("counterup-nums", i), u.text("0");
                u.data("counterup-func", function() {
                    u.data("counterup-nums") && (u.text(u.data("counterup-nums").shift()), u.data("counterup-nums").length ? setTimeout(u.data("counterup-func"), t) : (u.data("counterup-nums"), u.data("counterup-nums", null), u.data("counterup-func", null)))
                }), setTimeout(u.data("counterup-func"), t)
            }, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(u) {
    u.extend(u.fn, {
        validate: function(e) {
            if (this.length) {
                var i = u.data(this[0], "validator");
                return i ? i : (this.attr("novalidate", "novalidate"), i = new u.validator(e, this[0]), u.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function(e) {
                    i.submitButton = e.currentTarget, u(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== u(this).attr("formnovalidate") && (i.cancelSubmit = !0)
                }), this.on("submit.validate", function(n) {
                    function e() {
                        var e, t;
                        return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (e = u("<input type='hidden'/>").attr("name", i.submitButton.name).val(u(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (t = i.settings.submitHandler.call(i, i.currentForm, n), e && e.remove(), void 0 !== t && t)
                    }
                    return i.settings.debug && n.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, e()) : i.form() ? i.pendingRequest ? !(i.formSubmitted = !0) : e() : (i.focusInvalid(), !1)
                })), i)
            }
            e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.")
        },
        valid: function() {
            var e, t, n;
            return u(this[0]).is("form") ? e = this.validate().form() : (n = [], e = !0, t = u(this[0].form).validate(), this.each(function() {
                (e = t.element(this) && e) || (n = n.concat(t.errorList))
            }), t.errorList = n), e
        },
        rules: function(e, t) {
            var n, i, r, a, s, o = this[0];
            if (null != o && (!o.form && o.hasAttribute("contenteditable") && (o.form = this.closest("form")[0], o.name = this.attr("name")), null != o.form)) {
                if (e) switch (i = (n = u.data(o.form, "validator").settings).rules, r = u.validator.staticRules(o), e) {
                    case "add":
                        u.extend(r, u.validator.normalizeRule(t)), delete r.messages, i[o.name] = r, t.messages && (n.messages[o.name] = u.extend(n.messages[o.name], t.messages));
                        break;
                    case "remove":
                        return t ? (s = {}, u.each(t.split(/\s/), function(e, t) {
                            s[t] = r[t], delete r[t]
                        }), s) : (delete i[o.name], r)
                }
                return (e = u.validator.normalizeRules(u.extend({}, u.validator.classRules(o), u.validator.attributeRules(o), u.validator.dataRules(o), u.validator.staticRules(o)), o)).required && (a = e.required, delete e.required, e = u.extend({
                    required: a
                }, e)), e.remote && (a = e.remote, delete e.remote, e = u.extend(e, {
                    remote: a
                })), e
            }
        }
    }), u.extend(u.expr.pseudos || u.expr[":"], {
        blank: function(e) {
            return !u.trim("" + u(e).val())
        },
        filled: function(e) {
            e = u(e).val();
            return null !== e && !!u.trim("" + e)
        },
        unchecked: function(e) {
            return !u(e).prop("checked")
        }
    }), u.validator = function(e, t) {
        this.settings = u.extend(!0, {}, u.validator.defaults, e), this.currentForm = t, this.init()
    }, u.validator.format = function(n, e) {
        return 1 === arguments.length ? function() {
            var e = u.makeArray(arguments);
            return e.unshift(n), u.validator.format.apply(this, e)
        } : (void 0 === e || (2 < arguments.length && e.constructor !== Array && (e = u.makeArray(arguments).slice(1)), e.constructor !== Array && (e = [e]), u.each(e, function(e, t) {
            n = n.replace(new RegExp("\\{" + e + "\\}", "g"), function() {
                return t
            })
        })), n)
    }, u.extend(u.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: u([]),
            errorLabelContainer: u([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function(e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function(e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function(e, t) {
                9 === t.which && "" === this.elementValue(e) || -1 !== u.inArray(t.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) || (e.name in this.submitted || e.name in this.invalid) && this.element(e)
            },
            onclick: function(e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function(e, t, n) {
                ("radio" === e.type ? this.findByName(e.name) : u(e)).addClass(t).removeClass(n)
            },
            unhighlight: function(e, t, n) {
                ("radio" === e.type ? this.findByName(e.name) : u(e)).removeClass(t).addClass(n)
            }
        },
        setDefaults: function(e) {
            u.extend(u.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: u.validator.format("Please enter no more than {0} characters."),
            minlength: u.validator.format("Please enter at least {0} characters."),
            rangelength: u.validator.format("Please enter a value between {0} and {1} characters long."),
            range: u.validator.format("Please enter a value between {0} and {1}."),
            max: u.validator.format("Please enter a value less than or equal to {0}."),
            min: u.validator.format("Please enter a value greater than or equal to {0}."),
            step: u.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function() {
                this.labelContainer = u(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || u(this.currentForm), this.containers = u(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var n, i = this.groups = {};

                function e(e) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = u(this).attr("name"));
                    var t = u.data(this.form, "validator"),
                        n = "on" + e.type.replace(/^validate/, ""),
                        i = t.settings;
                    i[n] && !u(this).is(i.ignore) && i[n].call(t, this, e)
                }
                u.each(this.settings.groups, function(n, e) {
                    "string" == typeof e && (e = e.split(/\s/)), u.each(e, function(e, t) {
                        i[t] = n
                    })
                }), n = this.settings.rules, u.each(n, function(e, t) {
                    n[e] = u.validator.normalizeRule(t)
                }), u(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", e).on("click.validate", "select, option, [type='radio'], [type='checkbox']", e), this.settings.invalidHandler && u(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            },
            form: function() {
                return this.checkForm(), u.extend(this.submitted, this.errorMap), this.invalid = u.extend({}, this.errorMap), this.valid() || u(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            },
            checkForm: function() {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            },
            element: function(e) {
                var t, n, i = this.clean(e),
                    r = this.validationTargetFor(i),
                    a = this,
                    s = !0;
                return void 0 === r ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = u(r), (n = this.groups[r.name]) && u.each(this.groups, function(e, t) {
                    t === n && e !== r.name && (i = a.validationTargetFor(a.clean(a.findByName(e)))) && i.name in a.invalid && (a.currentElements.push(i), s = a.check(i) && s)
                }), t = !1 !== this.check(r), s = s && t, this.invalid[r.name] = !t, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), u(e).attr("aria-invalid", !t)), s
            },
            showErrors: function(t) {
                var n;
                t && (n = this, u.extend(this.errorMap, t), this.errorList = u.map(this.errorMap, function(e, t) {
                    return {
                        message: e,
                        element: n.findByName(t)[0]
                    }
                }), this.successList = u.grep(this.successList, function(e) {
                    return !(e.name in t)
                })), this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            },
            resetForm: function() {
                u.fn.resetForm && u(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var e = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(e)
            },
            resetElements: function(e) {
                var t;
                if (this.settings.unhighlight)
                    for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass);
                else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            },
            numberOfInvalids: function() {
                return this.objectLength(this.invalid)
            },
            objectLength: function(e) {
                var t, n = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && !1 !== e[t] && n++;
                return n
            },
            hideErrors: function() {
                this.hideThese(this.toHide)
            },
            hideThese: function(e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            },
            valid: function() {
                return 0 === this.size()
            },
            size: function() {
                return this.errorList.length
            },
            focusInvalid: function() {
                if (this.settings.focusInvalid) try {
                    u(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {}
            },
            findLastActive: function() {
                var t = this.lastActive;
                return t && 1 === u.grep(this.errorList, function(e) {
                    return e.element.name === t.name
                }).length && t
            },
            elements: function() {
                var t = this,
                    n = {};
                return u(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                    var e = this.name || u(this).attr("name");
                    return !e && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = u(this).closest("form")[0], this.name = e), !(e in n || !t.objectLength(u(this).rules())) && (n[e] = !0)
                })
            },
            clean: function(e) {
                return u(e)[0]
            },
            errors: function() {
                var e = this.settings.errorClass.split(" ").join(".");
                return u(this.settings.errorElement + "." + e, this.errorContext)
            },
            resetInternals: function() {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = u([]), this.toHide = u([])
            },
            reset: function() {
                this.resetInternals(), this.currentElements = u([])
            },
            prepareForm: function() {
                this.reset(), this.toHide = this.errors().add(this.containers)
            },
            prepareElement: function(e) {
                this.reset(), this.toHide = this.errorsFor(e)
            },
            elementValue: function(e) {
                var t = u(e),
                    n = e.type;
                return "radio" === n || "checkbox" === n ? this.findByName(e.name).filter(":checked").val() : "number" === n && void 0 !== e.validity ? e.validity.badInput ? "NaN" : t.val() : (t = e.hasAttribute("contenteditable") ? t.text() : t.val(), "file" === n ? "C:\\fakepath\\" === t.substr(0, 12) ? t.substr(12) : 0 <= (n = t.lastIndexOf("/")) || 0 <= (n = t.lastIndexOf("\\")) ? t.substr(n + 1) : t : "string" == typeof t ? t.replace(/\r/g, "") : t)
            },
            check: function(t) {
                t = this.validationTargetFor(this.clean(t));
                var e, n, i, r, a = u(t).rules(),
                    s = u.map(a, function(e, t) {
                        return t
                    }).length,
                    o = !1,
                    l = this.elementValue(t);
                if ("function" == typeof a.normalizer ? r = a.normalizer : "function" == typeof this.settings.normalizer && (r = this.settings.normalizer), r) {
                    if ("string" != typeof(l = r.call(t, l))) throw new TypeError("The normalizer should return a string value.");
                    delete a.normalizer
                }
                for (n in a) {
                    i = {
                        method: n,
                        parameters: a[n]
                    };
                    try {
                        if ("dependency-mismatch" === (e = u.validator.methods[n].call(this, l, t, i.parameters)) && 1 === s) {
                            o = !0;
                            continue
                        }
                        if (o = !1, "pending" === e) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!e) return this.formatAndAdd(t, i), !1
                    } catch (e) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method.", e), e instanceof TypeError && (e.message += ".  Exception occurred when checking element " + t.id + ", check the '" + i.method + "' method."), e
                    }
                }
                if (!o) return this.objectLength(a) && this.successList.push(t), !0
            },
            customDataMessage: function(e, t) {
                return u(e).data("msg" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()) || u(e).data("msg")
            },
            customMessage: function(e, t) {
                e = this.settings.messages[e];
                return e && (e.constructor === String ? e : e[t])
            },
            findDefined: function() {
                for (var e = 0; e < arguments.length; e++)
                    if (void 0 !== arguments[e]) return arguments[e]
            },
            defaultMessage: function(e, t) {
                "string" == typeof t && (t = {
                    method: t
                });
                var n = this.findDefined(this.customMessage(e.name, t.method), this.customDataMessage(e, t.method), !this.settings.ignoreTitle && e.title || void 0, u.validator.messages[t.method], "<strong>Warning: No message defined for " + e.name + "</strong>"),
                    i = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, t.parameters, e) : i.test(n) && (n = u.validator.format(n.replace(i, "{$1}"), t.parameters)), n
            },
            formatAndAdd: function(e, t) {
                var n = this.defaultMessage(e, t);
                this.errorList.push({
                    message: n,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = n, this.submitted[e.name] = n
            },
            addWrapper: function(e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            },
            defaultShowErrors: function() {
                for (var e, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                    for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                if (this.settings.unhighlight)
                    for (n = 0, e = this.validElements(); e[n]; n++) this.settings.unhighlight.call(this, e[n], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            },
            validElements: function() {
                return this.currentElements.not(this.invalidElements())
            },
            invalidElements: function() {
                return u(this.errorList).map(function() {
                    return this.element
                })
            },
            showLabel: function(e, t) {
                var n, i, r, a = this.errorsFor(e),
                    s = this.idOrName(e),
                    o = u(e).attr("aria-describedby");
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(t)) : (n = a = u("<" + this.settings.errorElement + ">").attr("id", s + "-error").addClass(this.settings.errorClass).html(t || ""), this.settings.wrapper && (n = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, u(e)) : n.insertAfter(e), a.is("label") ? a.attr("for", s) : 0 === a.parents("label[for='" + this.escapeCssMeta(s) + "']").length && (s = a.attr("id"), o ? o.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (o += " " + s) : o = s, u(e).attr("aria-describedby", o), (i = this.groups[e.name]) && (r = this, u.each(r.groups, function(e, t) {
                    t === i && u("[name='" + r.escapeCssMeta(e) + "']", r.currentForm).attr("aria-describedby", a.attr("id"))
                })))), !t && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            },
            errorsFor: function(e) {
                var t = this.escapeCssMeta(this.idOrName(e)),
                    e = u(e).attr("aria-describedby"),
                    t = "label[for='" + t + "'], label[for='" + t + "'] *";
                return e && (t = t + ", #" + this.escapeCssMeta(e).replace(/\s+/g, ", #")), this.errors().filter(t)
            },
            escapeCssMeta: function(e) {
                return e.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
            },
            idOrName: function(e) {
                return this.groups[e.name] || !this.checkable(e) && e.id || e.name
            },
            validationTargetFor: function(e) {
                return this.checkable(e) && (e = this.findByName(e.name)), u(e).not(this.settings.ignore)[0]
            },
            checkable: function(e) {
                return /radio|checkbox/i.test(e.type)
            },
            findByName: function(e) {
                return u(this.currentForm).find("[name='" + this.escapeCssMeta(e) + "']")
            },
            getLength: function(e, t) {
                switch (t.nodeName.toLowerCase()) {
                    case "select":
                        return u("option:selected", t).length;
                    case "input":
                        if (this.checkable(t)) return this.findByName(t.name).filter(":checked").length
                }
                return e.length
            },
            depend: function(e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            },
            dependTypes: {
                boolean: function(e) {
                    return e
                },
                string: function(e, t) {
                    return !!u(e, t.form).length
                },
                function: function(e, t) {
                    return e(t)
                }
            },
            optional: function(e) {
                var t = this.elementValue(e);
                return !u.validator.methods.required.call(this, t, e) && "dependency-mismatch"
            },
            startRequest: function(e) {
                this.pending[e.name] || (this.pendingRequest++, u(e).addClass(this.settings.pendingClass), this.pending[e.name] = !0)
            },
            stopRequest: function(e, t) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], u(e).removeClass(this.settings.pendingClass), t && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (u(this.currentForm).submit(), this.submitButton && u("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !t && 0 === this.pendingRequest && this.formSubmitted && (u(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            },
            previousValue: function(e, t) {
                return t = "string" == typeof t && t || "remote", u.data(e, "previousValue") || u.data(e, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(e, {
                        method: t
                    })
                })
            },
            destroy: function() {
                this.resetForm(), u(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {
                required: !0
            },
            email: {
                email: !0
            },
            url: {
                url: !0
            },
            date: {
                date: !0
            },
            dateISO: {
                dateISO: !0
            },
            number: {
                number: !0
            },
            digits: {
                digits: !0
            },
            creditcard: {
                creditcard: !0
            }
        },
        addClassRules: function(e, t) {
            e.constructor === String ? this.classRuleSettings[e] = t : u.extend(this.classRuleSettings, e)
        },
        classRules: function(e) {
            var t = {},
                e = u(e).attr("class");
            return e && u.each(e.split(" "), function() {
                this in u.validator.classRuleSettings && u.extend(t, u.validator.classRuleSettings[this])
            }), t
        },
        normalizeAttributeRule: function(e, t, n, i) {
            /min|max|step/.test(n) && (null === t || /number|range|text/.test(t)) && (i = Number(i), isNaN(i) && (i = void 0)), i || 0 === i ? e[n] = i : t === n && "range" !== t && (e[n] = !0)
        },
        attributeRules: function(e) {
            var t, n, i = {},
                r = u(e),
                a = e.getAttribute("type");
            for (t in u.validator.methods) n = "required" === t ? ("" === (n = e.getAttribute(t)) && (n = !0), !!n) : r.attr(t), this.normalizeAttributeRule(i, a, t, n);
            return i.maxlength && /-1|2147483647|524288/.test(i.maxlength) && delete i.maxlength, i
        },
        dataRules: function(e) {
            var t, n, i = {},
                r = u(e),
                a = e.getAttribute("type");
            for (t in u.validator.methods) n = r.data("rule" + t.charAt(0).toUpperCase() + t.substring(1).toLowerCase()), this.normalizeAttributeRule(i, a, t, n);
            return i
        },
        staticRules: function(e) {
            var t = {},
                n = u.data(e.form, "validator");
            return n.settings.rules && (t = u.validator.normalizeRule(n.settings.rules[e.name]) || {}), t
        },
        normalizeRules: function(i, r) {
            return u.each(i, function(e, t) {
                if (!1 !== t) {
                    if (t.param || t.depends) {
                        var n = !0;
                        switch (typeof t.depends) {
                            case "string":
                                n = !!u(t.depends, r.form).length;
                                break;
                            case "function":
                                n = t.depends.call(r, r)
                        }
                        n ? i[e] = void 0 === t.param || t.param : (u.data(r.form, "validator").resetElements(u(r)), delete i[e])
                    }
                } else delete i[e]
            }), u.each(i, function(e, t) {
                i[e] = u.isFunction(t) && "normalizer" !== e ? t(r) : t
            }), u.each(["minlength", "maxlength"], function() {
                i[this] && (i[this] = Number(i[this]))
            }), u.each(["rangelength", "range"], function() {
                var e;
                i[this] && (u.isArray(i[this]) ? i[this] = [Number(i[this][0]), Number(i[this][1])] : "string" == typeof i[this] && (e = i[this].replace(/[\[\]]/g, "").split(/[\s,]+/), i[this] = [Number(e[0]), Number(e[1])]))
            }), u.validator.autoCreateRanges && (null != i.min && null != i.max && (i.range = [i.min, i.max], delete i.min, delete i.max), null != i.minlength && null != i.maxlength && (i.rangelength = [i.minlength, i.maxlength], delete i.minlength, delete i.maxlength)), i
        },
        normalizeRule: function(e) {
            var t;
            return "string" == typeof e && (t = {}, u.each(e.split(/\s/), function() {
                t[this] = !0
            }), e = t), e
        },
        addMethod: function(e, t, n) {
            u.validator.methods[e] = t, u.validator.messages[e] = void 0 !== n ? n : u.validator.messages[e], t.length < 3 && u.validator.addClassRules(e, u.validator.normalizeRule(e))
        },
        methods: {
            required: function(e, t, n) {
                if (!this.depend(n, t)) return "dependency-mismatch";
                if ("select" !== t.nodeName.toLowerCase()) return this.checkable(t) ? 0 < this.getLength(e, t) : 0 < e.length;
                t = u(t).val();
                return t && 0 < t.length
            },
            email: function(e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            },
            url: function(e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(e)
            },
            date: function(e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            },
            dateISO: function(e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            },
            number: function(e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            },
            digits: function(e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            },
            minlength: function(e, t, n) {
                e = u.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || n <= e
            },
            maxlength: function(e, t, n) {
                e = u.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || e <= n
            },
            rangelength: function(e, t, n) {
                e = u.isArray(e) ? e.length : this.getLength(e, t);
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            min: function(e, t, n) {
                return this.optional(t) || n <= e
            },
            max: function(e, t, n) {
                return this.optional(t) || e <= n
            },
            range: function(e, t, n) {
                return this.optional(t) || e >= n[0] && e <= n[1]
            },
            step: function(e, t, n) {
                function i(e) {
                    return (e = ("" + e).match(/(?:\.(\d+))?$/)) && e[1] ? e[1].length : 0
                }

                function r(e) {
                    return Math.round(e * Math.pow(10, a))
                }
                var a, s = u(t).attr("type"),
                    o = "Step attribute on input type " + s + " is not supported.",
                    l = new RegExp("\\b" + s + "\\b"),
                    d = !0;
                if (s && !l.test(["text", "number", "range"].join())) throw new Error(o);
                return a = i(n), (i(e) > a || r(e) % r(n) != 0) && (d = !1), this.optional(t) || d
            },
            equalTo: function(e, t, n) {
                n = u(n);
                return this.settings.onfocusout && n.not(".validate-equalTo-blur").length && n.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                    u(t).valid()
                }), e === n.val()
            },
            remote: function(i, r, e, a) {
                if (this.optional(r)) return "dependency-mismatch";
                a = "string" == typeof a && a || "remote";
                var s, t, o = this.previousValue(r, a);
                return this.settings.messages[r.name] || (this.settings.messages[r.name] = {}), o.originalMessage = o.originalMessage || this.settings.messages[r.name][a], this.settings.messages[r.name][a] = o.message, e = "string" == typeof e ? {
                    url: e
                } : e, t = u.param(u.extend({
                    data: i
                }, e.data)), o.old === t ? o.valid : (o.old = t, (s = this).startRequest(r), (t = {})[r.name] = i, u.ajax(u.extend(!0, {
                    mode: "abort",
                    port: "validate" + r.name,
                    dataType: "json",
                    data: t,
                    context: s.currentForm,
                    success: function(e) {
                        var t, n = !0 === e || "true" === e;
                        s.settings.messages[r.name][a] = o.originalMessage, n ? (t = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(r), s.formSubmitted = t, s.successList.push(r), s.invalid[r.name] = !1, s.showErrors()) : (t = {}, e = e || s.defaultMessage(r, {
                            method: a,
                            parameters: i
                        }), t[r.name] = o.message = e, s.invalid[r.name] = !0, s.showErrors(t)), o.valid = n, s.stopRequest(r, n)
                    }
                }, e)), "pending")
            }
        }
    });
    var i, r = {};
    return u.ajaxPrefilter ? u.ajaxPrefilter(function(e, t, n) {
        var i = e.port;
        "abort" === e.mode && (r[i] && r[i].abort(), r[i] = n)
    }) : (i = u.ajax, u.ajax = function(e) {
        var t = ("mode" in e ? e : u.ajaxSettings).mode,
            n = ("port" in e ? e : u.ajaxSettings).port;
        return "abort" === t ? (r[n] && r[n].abort(), r[n] = i.apply(this, arguments), r[n]) : i.apply(this, arguments)
    }), u
}),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery", "../jquery.validate"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
    return e.extend(e.validator.messages, {
        required: "Hãy nhập.",
        remote: "Hãy sửa cho đúng.",
        email: "Hãy nhập email.",
        url: "Hãy nhập URL.",
        date: "Hãy nhập ngày.",
        dateISO: "Hãy nhập ngày (ISO).",
        number: "Hãy nhập số.",
        digits: "Hãy nhập chữ số.",
        creditcard: "Hãy nhập số thẻ tín dụng.",
        equalTo: "Hãy nhập thêm lần nữa.",
        extension: "Phần mở rộng không đúng.",
        maxlength: e.validator.format("Hãy nhập từ {0} kí tự trở xuống."),
        minlength: e.validator.format("Hãy nhập từ {0} kí tự trở lên."),
        rangelength: e.validator.format("Hãy nhập từ {0} đến {1} kí tự."),
        range: e.validator.format("Hãy nhập từ {0} đến {1}."),
        max: e.validator.format("Hãy nhập từ {0} trở xuống."),
        min: e.validator.format("Hãy nhập từ {0} trở lên.")
    }), e
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
}(this, function() {
    "use strict";

    function i(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function e() {
        return (e = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }

    function r(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function a(t, n) {
        void 0 === t && (t = {}), void 0 === n && (n = {}), Object.keys(n).forEach(function(e) {
            void 0 === t[e] ? t[e] = n[e] : r(n[e]) && r(t[e]) && 0 < Object.keys(n[e]).length && a(t[e], n[e])
        })
    }
    var t = {
        body: {},
        addEventListener: function() {},
        removeEventListener: function() {},
        activeElement: {
            blur: function() {},
            nodeName: ""
        },
        querySelector: function() {
            return null
        },
        querySelectorAll: function() {
            return []
        },
        getElementById: function() {
            return null
        },
        createEvent: function() {
            return {
                initEvent: function() {}
            }
        },
        createElement: function() {
            return {
                children: [],
                childNodes: [],
                style: {},
                setAttribute: function() {},
                getElementsByTagName: function() {
                    return []
                }
            }
        },
        createElementNS: function() {
            return {}
        },
        importNode: function() {
            return null
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function b() {
        var e = "undefined" != typeof document ? document : {};
        return a(e, t), e
    }
    var n = {
        document: t,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState: function() {},
            pushState: function() {},
            go: function() {},
            back: function() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener: function() {},
        removeEventListener: function() {},
        getComputedStyle: function() {
            return {
                getPropertyValue: function() {
                    return ""
                }
            }
        },
        Image: function() {},
        Date: function() {},
        screen: {},
        setTimeout: function() {},
        clearTimeout: function() {},
        matchMedia: function() {
            return {}
        },
        requestAnimationFrame: function(e) {
            return "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        },
        cancelAnimationFrame: function(e) {
            "undefined" != typeof setTimeout && clearTimeout(e)
        }
    };

    function w() {
        var e = "undefined" != typeof window ? window : {};
        return a(e, n), e
    }

    function s(e) {
        return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
            return e.__proto__ || Object.getPrototypeOf(e)
        })(e)
    }

    function o(e, t) {
        return (o = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
        })(e, t)
    }

    function l(e, t, n) {
        return (l = function() {
            if ("undefined" != typeof Reflect && Reflect.construct && !Reflect.construct.sham) {
                if ("function" == typeof Proxy) return 1;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})), 1
                } catch (e) {
                    return
                }
            }
        }() ? Reflect.construct : function(e, t, n) {
            var i = [null];
            i.push.apply(i, t);
            i = new(Function.bind.apply(e, i));
            return n && o(i, n.prototype), i
        }).apply(null, arguments)
    }

    function d(e) {
        var i = "function" == typeof Map ? new Map : void 0;
        return (d = function(e) {
            if (null === e || (t = e, -1 === Function.toString.call(t).indexOf("[native code]"))) return e;
            var t;
            if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
            if (void 0 !== i) {
                if (i.has(e)) return i.get(e);
                i.set(e, n)
            }

            function n() {
                return l(e, arguments, s(this).constructor)
            }
            return n.prototype = Object.create(e.prototype, {
                constructor: {
                    value: n,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }), o(n, e)
        })(e)
    }
    var u = function(i) {
        var e, t;

        function n(e) {
            var t, n = i.call.apply(i, [this].concat(e)) || this;
            return e = function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }(n), t = e.__proto__, Object.defineProperty(e, "__proto__", {
                get: function() {
                    return t
                },
                set: function(e) {
                    t.__proto__ = e
                }
            }), n
        }
        return t = i, (e = n).prototype = Object.create(t.prototype), (e.prototype.constructor = e).__proto__ = t, n
    }(d(Array));

    function c(e) {
        void 0 === e && (e = []);
        var t = [];
        return e.forEach(function(e) {
            Array.isArray(e) ? t.push.apply(t, c(e)) : t.push(e)
        }), t
    }

    function p(e, t) {
        return Array.prototype.filter.call(e, t)
    }

    function C(e, t) {
        var n = w(),
            i = b(),
            r = [];
        if (!t && e instanceof u) return e;
        if (!e) return new u(r);
        if ("string" == typeof e) {
            var a = e.trim();
            if (0 <= a.indexOf("<") && 0 <= a.indexOf(">")) {
                var s = "div";
                0 === a.indexOf("<li") && (s = "ul"), 0 === a.indexOf("<tr") && (s = "tbody"), 0 !== a.indexOf("<td") && 0 !== a.indexOf("<th") || (s = "tr"), 0 === a.indexOf("<tbody") && (s = "table"), 0 === a.indexOf("<option") && (s = "select");
                var o = i.createElement(s);
                o.innerHTML = a;
                for (var l = 0; l < o.childNodes.length; l += 1) r.push(o.childNodes[l])
            } else r = function(e, t) {
                if ("string" != typeof e) return [e];
                for (var n = [], i = t.querySelectorAll(e), r = 0; r < i.length; r += 1) n.push(i[r]);
                return n
            }(e.trim(), t || i)
        } else if (e.nodeType || e === n || e === i) r.push(e);
        else if (Array.isArray(e)) {
            if (e instanceof u) return e;
            r = e
        }
        return new u(function(e) {
            for (var t = [], n = 0; n < e.length; n += 1) - 1 === t.indexOf(e[n]) && t.push(e[n]);
            return t
        }(r))
    }
    C.fn = u.prototype;
    var h, f, m, v = {
        addClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = c(t.map(function(e) {
                return e.split(" ")
            }));
            return this.forEach(function(e) {
                (e = e.classList).add.apply(e, i)
            }), this
        },
        removeClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = c(t.map(function(e) {
                return e.split(" ")
            }));
            return this.forEach(function(e) {
                (e = e.classList).remove.apply(e, i)
            }), this
        },
        hasClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = c(t.map(function(e) {
                return e.split(" ")
            }));
            return 0 < p(this, function(t) {
                return 0 < i.filter(function(e) {
                    return t.classList.contains(e)
                }).length
            }).length
        },
        toggleClass: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = c(t.map(function(e) {
                return e.split(" ")
            }));
            this.forEach(function(t) {
                i.forEach(function(e) {
                    t.classList.toggle(e)
                })
            })
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1)
                if (2 === arguments.length) this[n].setAttribute(e, t);
                else
                    for (var i in e) this[n][i] = e[i], this[n].setAttribute(i, e[i]);
            return this
        },
        removeAttr: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        },
        transform: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transform = e;
            return this
        },
        transition: function(e) {
            for (var t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? e + "ms" : e;
            return this
        },
        on: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0],
                a = t[1],
                s = t[2],
                r = t[3];

            function o(e) {
                var t = e.target;
                if (t) {
                    var n = e.target.dom7EventData || [];
                    if (n.indexOf(e) < 0 && n.unshift(e), C(t).is(a)) s.apply(t, n);
                    else
                        for (var i = C(t).parents(), r = 0; r < i.length; r += 1) C(i[r]).is(a) && s.apply(i[r], n)
                }
            }

            function l(e) {
                var t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), s.apply(this, t)
            }
            "function" == typeof t[1] && (i = t[0], s = t[1], r = t[2], a = void 0), r = r || !1;
            for (var d, u = i.split(" "), c = 0; c < this.length; c += 1) {
                var p = this[c];
                if (a)
                    for (d = 0; d < u.length; d += 1) {
                        var h = u[d];
                        p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[h] || (p.dom7LiveListeners[h] = []), p.dom7LiveListeners[h].push({
                            listener: s,
                            proxyListener: o
                        }), p.addEventListener(h, o, r)
                    } else
                        for (d = 0; d < u.length; d += 1) {
                            var f = u[d];
                            p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[f] || (p.dom7Listeners[f] = []), p.dom7Listeners[f].push({
                                listener: s,
                                proxyListener: l
                            }), p.addEventListener(f, l, r)
                        }
            }
            return this
        },
        off: function() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
            var i = t[0],
                r = t[1],
                a = t[2],
                s = t[3];
            "function" == typeof t[1] && (i = t[0], a = t[1], s = t[2], r = void 0), s = s || !1;
            for (var o = i.split(" "), l = 0; l < o.length; l += 1)
                for (var d = o[l], u = 0; u < this.length; u += 1) {
                    var c = this[u],
                        p = void 0;
                    if (!r && c.dom7Listeners ? p = c.dom7Listeners[d] : r && c.dom7LiveListeners && (p = c.dom7LiveListeners[d]), p && p.length)
                        for (var h = p.length - 1; 0 <= h; --h) {
                            var f = p[h];
                            (!a || f.listener !== a) && !(a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a) && a || (c.removeEventListener(d, f.proxyListener, s), p.splice(h, 1))
                        }
                }
            return this
        },
        trigger: function() {
            for (var e = w(), t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            for (var r = n[0].split(" "), a = n[1], s = 0; s < r.length; s += 1)
                for (var o = r[s], l = 0; l < this.length; l += 1) {
                    var d, u = this[l];
                    e.CustomEvent && (d = new e.CustomEvent(o, {
                        detail: a,
                        bubbles: !0,
                        cancelable: !0
                    }), u.dom7EventData = n.filter(function(e, t) {
                        return 0 < t
                    }), u.dispatchEvent(d), u.dom7EventData = [], delete u.dom7EventData)
                }
            return this
        },
        transitionEnd: function(n) {
            var i = this;
            return n && i.on("transitionend", function e(t) {
                t.target === this && (n.call(this, t), i.off("transitionend", e))
            }), this
        },
        outerWidth: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        },
        outerHeight: function(e) {
            if (0 < this.length) {
                if (e) {
                    e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        },
        styles: function() {
            var e = w();
            return this[0] ? e.getComputedStyle(this[0], null) : {}
        },
        offset: function() {
            if (0 < this.length) {
                var e = w(),
                    t = b(),
                    n = this[0],
                    i = n.getBoundingClientRect(),
                    r = t.body,
                    a = n.clientTop || r.clientTop || 0,
                    t = n.clientLeft || r.clientLeft || 0,
                    r = n === e ? e.scrollY : n.scrollTop,
                    n = n === e ? e.scrollX : n.scrollLeft;
                return {
                    top: i.top + r - a,
                    left: i.left + n - t
                }
            }
            return null
        },
        css: function(e, t) {
            var n, i = w();
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (n = 0; n < this.length; n += 1)
                        for (var r in e) this[n].style[r] = e[r];
                    return this
                }
                if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 !== arguments.length || "string" != typeof e) return this;
            for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
            return this
        },
        each: function(n) {
            return n && this.forEach(function(e, t) {
                n.apply(e, [e, t])
            }), this
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        },
        is: function(e) {
            var t, n, i = w(),
                r = b(),
                a = this[0];
            if (!a || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (a.matches) return a.matches(e);
                if (a.webkitMatchesSelector) return a.webkitMatchesSelector(e);
                if (a.msMatchesSelector) return a.msMatchesSelector(e);
                for (t = C(e), n = 0; n < t.length; n += 1)
                    if (t[n] === a) return !0;
                return !1
            }
            if (e === r) return a === r;
            if (e === i) return a === i;
            if (e.nodeType || e instanceof u) {
                for (t = e.nodeType ? [e] : e, n = 0; n < t.length; n += 1)
                    if (t[n] === a) return !0;
                return !1
            }
            return !1
        },
        index: function() {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            var t = this.length;
            if (t - 1 < e) return C([]);
            if (e < 0) {
                t = t + e;
                return t < 0 ? C([]) : C([this[t]])
            }
            return C([this[e]])
        },
        append: function() {
            for (var e, t = b(), n = 0; n < arguments.length; n += 1) {
                e = n < 0 || arguments.length <= n ? void 0 : arguments[n];
                for (var i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        var r = t.createElement("div");
                        for (r.innerHTML = e; r.firstChild;) this[i].appendChild(r.firstChild)
                    } else if (e instanceof u)
                    for (var a = 0; a < e.length; a += 1) this[i].appendChild(e[a]);
                else this[i].appendChild(e)
            }
            return this
        },
        prepend: function(e) {
            for (var t, n = b(), i = 0; i < this.length; i += 1)
                if ("string" == typeof e) {
                    var r = n.createElement("div");
                    for (r.innerHTML = e, t = r.childNodes.length - 1; 0 <= t; --t) this[i].insertBefore(r.childNodes[t], this[i].childNodes[0])
                } else if (e instanceof u)
                for (t = 0; t < e.length; t += 1) this[i].insertBefore(e[t], this[i].childNodes[0]);
            else this[i].insertBefore(e, this[i].childNodes[0]);
            return this
        },
        next: function(e) {
            return 0 < this.length ? e ? this[0].nextElementSibling && C(this[0].nextElementSibling).is(e) ? C([this[0].nextElementSibling]) : C([]) : this[0].nextElementSibling ? C([this[0].nextElementSibling]) : C([]) : C([])
        },
        nextAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return C([]);
            for (; n.nextElementSibling;) {
                var i = n.nextElementSibling;
                (!e || C(i).is(e)) && t.push(i), n = i
            }
            return C(t)
        },
        prev: function(e) {
            if (0 < this.length) {
                var t = this[0];
                return e ? t.previousElementSibling && C(t.previousElementSibling).is(e) ? C([t.previousElementSibling]) : C([]) : t.previousElementSibling ? C([t.previousElementSibling]) : C([])
            }
            return C([])
        },
        prevAll: function(e) {
            var t = [],
                n = this[0];
            if (!n) return C([]);
            for (; n.previousElementSibling;) {
                var i = n.previousElementSibling;
                (!e || C(i).is(e)) && t.push(i), n = i
            }
            return C(t)
        },
        parent: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1) null === this[n].parentNode || e && !C(this[n].parentNode).is(e) || t.push(this[n].parentNode);
            return C(t)
        },
        parents: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].parentNode; i;) e && !C(i).is(e) || t.push(i), i = i.parentNode;
            return C(t)
        },
        closest: function(e) {
            var t = this;
            return void 0 === e ? C([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        },
        find: function(t) {
            for (var e = [], n = 0; n < this.length; n += 1) {
                try {
                    var i = this[n].querySelectorAll(t)
                } catch (e) {
                    console.log(t)
                }
                for (var r = 0; r < i.length; r += 1) e.push(i[r])
            }
            return C(e)
        },
        children: function(e) {
            for (var t = [], n = 0; n < this.length; n += 1)
                for (var i = this[n].children, r = 0; r < i.length; r += 1) e && !C(i[r]).is(e) || t.push(i[r]);
            return C(t)
        },
        filter: function(e) {
            return C(p(this, e))
        },
        remove: function() {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }
    };

    function S(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
    }

    function k() {
        return Date.now()
    }

    function g(e, t) {
        void 0 === t && (t = "x");
        var n, i, r, a, s, o = w(),
            s = (a = e, (e = w()).getComputedStyle && (s = e.getComputedStyle(a, null)), !s && a.currentStyle && (s = a.currentStyle), s = s || a.style);
        return o.WebKitCSSMatrix ? (6 < (i = s.transform || s.webkitTransform).split(",").length && (i = i.split(", ").map(function(e) {
            return e.replace(",", ".")
        }).join(", ")), r = new o.WebKitCSSMatrix("none" === i ? "" : i)) : n = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (i = o.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (i = o.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), i || 0
    }

    function y(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function Y(e) {
        for (var t, n = Object(arguments.length <= 0 ? void 0 : e), i = ["__proto__", "constructor", "prototype"], r = 1; r < arguments.length; r += 1) {
            var a = r < 0 || arguments.length <= r ? void 0 : arguments[r];
            if (null != a && (t = a, !("undefined" != typeof window && void 0 !== window.HTMLElement ? t instanceof HTMLElement : t && (1 === t.nodeType || 11 === t.nodeType))))
                for (var s = Object.keys(Object(a)).filter(function(e) {
                        return i.indexOf(e) < 0
                    }), o = 0, l = s.length; o < l; o += 1) {
                    var d = s[o],
                        u = Object.getOwnPropertyDescriptor(a, d);
                    void 0 !== u && u.enumerable && (y(n[d]) && y(a[d]) ? a[d].__swiper__ ? n[d] = a[d] : Y(n[d], a[d]) : !y(n[d]) && y(a[d]) ? (n[d] = {}, a[d].__swiper__ ? n[d] = a[d] : Y(n[d], a[d])) : n[d] = a[d])
                }
        }
        return n
    }

    function x(n, i) {
        Object.keys(i).forEach(function(t) {
            y(i[t]) && Object.keys(i[t]).forEach(function(e) {
                "function" == typeof i[t][e] && (i[t][e] = i[t][e].bind(n))
            }), n[t] = i[t]
        })
    }

    function E(e) {
        return void 0 === e && (e = ""), "." + e.trim().replace(/([\.:\/])/g, "\\$1").replace(/ /g, ".")
    }

    function T(n, i, e, r) {
        var a = b();
        return e && Object.keys(r).forEach(function(e) {
            var t;
            i[e] || !0 !== i.auto || ((t = a.createElement("div")).className = r[e], n.append(t), i[e] = t)
        }), i
    }

    function M() {
        var n, e;
        return h || (n = w(), e = b(), h = {
            touch: !!("ontouchstart" in n || n.DocumentTouch && e instanceof n.DocumentTouch),
            pointerEvents: !!n.PointerEvent && "maxTouchPoints" in n.navigator && 0 <= n.navigator.maxTouchPoints,
            observer: "MutationObserver" in n || "WebkitMutationObserver" in n,
            passiveListener: function() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    n.addEventListener("testPassiveListener", null, t)
                } catch (e) {}
                return e
            }(),
            gestures: "ongesturestart" in n
        }), h
    }

    function L(e) {
        var t, n, i, r, a, s, o, l, d, u;
        return void 0 === e && (e = {}), f || (n = (void 0 === (t = e) ? {} : t).userAgent, i = M(), r = (u = w()).navigator.platform, a = n || u.navigator.userAgent, s = {
            ios: !1,
            android: !1
        }, o = u.screen.width, l = u.screen.height, d = a.match(/(Android);?[\s\/]+([\d.]+)?/), e = a.match(/(iPad).*OS\s([\d_]+)/), t = a.match(/(iPod)(.*OS\s([\d_]+))?/), n = !e && a.match(/(iPhone\sOS|iOS)\s([\d_]+)/), u = "Win32" === r, r = "MacIntel" === r, !e && r && i.touch && 0 <= ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(o + "x" + l) && (e = (e = a.match(/(Version)\/([\d.]+)/)) || [0, 1, "13_0_0"], r = !1), d && !u && (s.os = "android", s.android = !0), (e || n || t) && (s.os = "ios", s.ios = !0), f = s), f
    }

    function P() {
        var e, t;
        return m || (t = w(), m = {
            isEdge: !!t.navigator.userAgent.match(/Edge/g),
            isSafari: 0 <= (e = t.navigator.userAgent.toLowerCase()).indexOf("safari") && e.indexOf("chrome") < 0 && e.indexOf("android") < 0,
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
        }), m
    }
    Object.keys(v).forEach(function(e) {
        Object.defineProperty(C.fn, e, {
            value: v[e],
            writable: !0
        })
    });
    var $ = {
            name: "resize",
            create: function() {
                var a = this;
                Y(a, {
                    resize: {
                        observer: null,
                        createObserver: function() {
                            a && !a.destroyed && a.initialized && (a.resize.observer = new ResizeObserver(function(e) {
                                var t = a.width,
                                    n = a.height,
                                    i = t,
                                    r = n;
                                e.forEach(function(e) {
                                    var t = e.contentBoxSize,
                                        n = e.contentRect,
                                        e = e.target;
                                    e && e !== a.el || (i = n ? n.width : (t[0] || t).inlineSize, r = n ? n.height : (t[0] || t).blockSize)
                                }), i === t && r === n || a.resize.resizeHandler()
                            }), a.resize.observer.observe(a.el))
                        },
                        removeObserver: function() {
                            a.resize.observer && a.resize.observer.unobserve && a.el && (a.resize.observer.unobserve(a.el), a.resize.observer = null)
                        },
                        resizeHandler: function() {
                            a && !a.destroyed && a.initialized && (a.emit("beforeResize"), a.emit("resize"))
                        },
                        orientationChangeHandler: function() {
                            a && !a.destroyed && a.initialized && a.emit("orientationchange")
                        }
                    }
                })
            },
            on: {
                init: function(e) {
                    var t = w();
                    e.params.resizeObserver && void 0 !== w().ResizeObserver ? e.resize.createObserver() : (t.addEventListener("resize", e.resize.resizeHandler), t.addEventListener("orientationchange", e.resize.orientationChangeHandler))
                },
                destroy: function(e) {
                    var t = w();
                    e.resize.removeObserver(), t.removeEventListener("resize", e.resize.resizeHandler), t.removeEventListener("orientationchange", e.resize.orientationChangeHandler)
                }
            }
        },
        A = {
            attach: function(e, t) {
                void 0 === t && (t = {});
                var n = w(),
                    i = this,
                    r = new(n.MutationObserver || n.WebkitMutationObserver)(function(e) {
                        var t;
                        1 !== e.length ? (t = function() {
                            i.emit("observerUpdate", e[0])
                        }, n.requestAnimationFrame ? n.requestAnimationFrame(t) : n.setTimeout(t, 0)) : i.emit("observerUpdate", e[0])
                    });
                r.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(r)
            },
            init: function() {
                var e = this;
                if (e.support.observer && e.params.observer) {
                    if (e.params.observeParents)
                        for (var t = e.$el.parents(), n = 0; n < t.length; n += 1) e.observer.attach(t[n]);
                    e.observer.attach(e.$el[0], {
                        childList: e.params.observeSlideChildren
                    }), e.observer.attach(e.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            },
            destroy: function() {
                this.observer.observers.forEach(function(e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        },
        z = {
            name: "observer",
            params: {
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            },
            create: function() {
                x(this, {
                    observer: e({}, A, {
                        observers: []
                    })
                })
            },
            on: {
                init: function(e) {
                    e.observer.init()
                },
                destroy: function(e) {
                    e.observer.destroy()
                }
            }
        };

    function D(n, e) {
        return void 0 === e && (e = this),
            function e(t) {
                return t && t !== b() && t !== w() ? (t.assignedSlot && (t = t.assignedSlot), t.closest(n) || e(t.getRootNode().host)) : null
            }(e)
    }

    function O() {
        var e, t, n = this,
            i = n.params,
            r = n.el;
        r && 0 === r.offsetWidth || (i.breakpoints && n.setBreakpoint(), e = n.allowSlideNext, t = n.allowSlidePrev, r = n.snapGrid, n.allowSlideNext = !0, n.allowSlidePrev = !0, n.updateSize(), n.updateSlides(), n.updateSlidesClasses(), ("auto" === i.slidesPerView || 1 < i.slidesPerView) && n.isEnd && !n.isBeginning && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0), n.autoplay && n.autoplay.running && n.autoplay.paused && n.autoplay.run(), n.allowSlidePrev = t, n.allowSlideNext = e, n.params.watchOverflow && r !== n.snapGrid && n.checkOverflow())
    }
    var N = !1;

    function I() {}
    var H = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !1,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        },
        q = {
            modular: {
                useParams: function(t) {
                    var n = this;
                    n.modules && Object.keys(n.modules).forEach(function(e) {
                        e = n.modules[e];
                        e.params && Y(t, e.params)
                    })
                },
                useModules: function(n) {
                    void 0 === n && (n = {});
                    var i = this;
                    i.modules && Object.keys(i.modules).forEach(function(e) {
                        var t = i.modules[e],
                            e = n[e] || {};
                        t.on && i.on && Object.keys(t.on).forEach(function(e) {
                            i.on(e, t.on[e])
                        }), t.create && t.create.bind(i)(e)
                    })
                }
            },
            eventsEmitter: {
                on: function(e, t, n) {
                    var i = this;
                    if ("function" != typeof t) return i;
                    var r = n ? "unshift" : "push";
                    return e.split(" ").forEach(function(e) {
                        i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][r](t)
                    }), i
                },
                once: function(i, r, e) {
                    var a = this;
                    return "function" != typeof r ? a : (s.__emitterProxy = r, a.on(i, s, e));

                    function s() {
                        a.off(i, s), s.__emitterProxy && delete s.__emitterProxy;
                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                        r.apply(a, t)
                    }
                },
                onAny: function(e, t) {
                    if ("function" != typeof e) return this;
                    t = t ? "unshift" : "push";
                    return this.eventsAnyListeners.indexOf(e) < 0 && this.eventsAnyListeners[t](e), this
                },
                offAny: function(e) {
                    var t = this;
                    if (!t.eventsAnyListeners) return t;
                    e = t.eventsAnyListeners.indexOf(e);
                    return 0 <= e && t.eventsAnyListeners.splice(e, 1), t
                },
                off: function(e, i) {
                    var r = this;
                    return r.eventsListeners && e.split(" ").forEach(function(n) {
                        void 0 === i ? r.eventsListeners[n] = [] : r.eventsListeners[n] && r.eventsListeners[n].forEach(function(e, t) {
                            (e === i || e.__emitterProxy && e.__emitterProxy === i) && r.eventsListeners[n].splice(t, 1)
                        })
                    }), r
                },
                emit: function() {
                    var e, n, i, r = this;
                    if (!r.eventsListeners) return r;
                    for (var t = arguments.length, a = new Array(t), s = 0; s < t; s++) a[s] = arguments[s];
                    return i = "string" == typeof a[0] || Array.isArray(a[0]) ? (e = a[0], n = a.slice(1, a.length), r) : (e = a[0].events, n = a[0].data, a[0].context || r), n.unshift(i), (Array.isArray(e) ? e : e.split(" ")).forEach(function(t) {
                        r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(function(e) {
                            e.apply(i, [t].concat(n))
                        }), r.eventsListeners && r.eventsListeners[t] && r.eventsListeners[t].forEach(function(e) {
                            e.apply(i, n)
                        })
                    }), r
                }
            },
            update: {
                updateSize: function() {
                    var e = this,
                        t = e.$el,
                        n = void 0 !== e.params.width && null !== e.params.width ? e.params.width : t[0].clientWidth,
                        i = void 0 !== e.params.height && null !== e.params.height ? e.params.height : t[0].clientHeight;
                    0 === n && e.isHorizontal() || 0 === i && e.isVertical() || (n = n - parseInt(t.css("padding-left") || 0, 10) - parseInt(t.css("padding-right") || 0, 10), i = i - parseInt(t.css("padding-top") || 0, 10) - parseInt(t.css("padding-bottom") || 0, 10), Number.isNaN(n) && (n = 0), Number.isNaN(i) && (i = 0), Y(e, {
                        width: n,
                        height: i,
                        size: e.isHorizontal() ? n : i
                    }))
                },
                updateSlides: function() {
                    var t = this;

                    function n(e) {
                        return t.isHorizontal() ? e : {
                            width: "height",
                            "margin-top": "margin-left",
                            "margin-bottom ": "margin-right",
                            "margin-left": "margin-top",
                            "margin-right": "margin-bottom",
                            "padding-left": "padding-top",
                            "padding-right": "padding-bottom",
                            marginRight: "marginBottom"
                        }[e]
                    }

                    function e(e, t) {
                        return parseFloat(e.getPropertyValue(n(t)) || 0)
                    }
                    var i = t.params,
                        r = t.$wrapperEl,
                        a = t.size,
                        s = t.rtlTranslate,
                        o = t.wrongRTL,
                        l = ((y = t.virtual && i.virtual.enabled) ? t.virtual : t).slides.length,
                        d = r.children("." + t.params.slideClass),
                        u = (y ? t.virtual.slides : d).length,
                        c = [],
                        p = [],
                        h = [],
                        f = i.slidesOffsetBefore;
                    "function" == typeof f && (f = i.slidesOffsetBefore.call(t));
                    var m = i.slidesOffsetAfter;
                    "function" == typeof m && (m = i.slidesOffsetAfter.call(t));
                    var v, g = t.snapGrid.length,
                        y = t.slidesGrid.length,
                        b = i.spaceBetween,
                        w = -f,
                        x = 0,
                        E = 0;
                    if (void 0 !== a) {
                        "string" == typeof b && 0 <= b.indexOf("%") && (b = parseFloat(b.replace("%", "")) / 100 * a), t.virtualSize = -b, s ? d.css({
                            marginLeft: "",
                            marginBottom: "",
                            marginTop: ""
                        }) : d.css({
                            marginRight: "",
                            marginBottom: "",
                            marginTop: ""
                        }), 1 < i.slidesPerColumn && (v = Math.floor(u / i.slidesPerColumn) === u / t.params.slidesPerColumn ? u : Math.ceil(u / i.slidesPerColumn) * i.slidesPerColumn, "auto" !== i.slidesPerView && "row" === i.slidesPerColumnFill && (v = Math.max(v, i.slidesPerView * i.slidesPerColumn)));
                        for (var T, C, S, k, M, L, P = i.slidesPerColumn, $ = v / P, A = Math.floor(u / i.slidesPerColumn), z = 0; z < u; z += 1) {
                            F = 0;
                            var D, O, N, I, H, q, R, j, B, F, W = d.eq(z);
                            1 < i.slidesPerColumn && (B = R = q = void 0, "row" === i.slidesPerColumnFill && 1 < i.slidesPerGroup ? (H = Math.floor(z / (i.slidesPerGroup * i.slidesPerColumn)), N = z - i.slidesPerColumn * i.slidesPerGroup * H, I = 0 === H ? i.slidesPerGroup : Math.min(Math.ceil((u - H * P * i.slidesPerGroup) / P), i.slidesPerGroup), q = (R = N - (B = Math.floor(N / I)) * I + H * i.slidesPerGroup) + B * v / P, W.css({
                                "-webkit-box-ordinal-group": q,
                                "-moz-box-ordinal-group": q,
                                "-ms-flex-order": q,
                                "-webkit-order": q,
                                order: q
                            })) : "column" === i.slidesPerColumnFill ? (B = z - (R = Math.floor(z / P)) * P, (A < R || R === A && B === P - 1) && P <= (B += 1) && (B = 0, R += 1)) : R = z - (B = Math.floor(z / $)) * $, W.css(n("margin-top"), 0 !== B ? i.spaceBetween && i.spaceBetween + "px" : "")), "none" !== W.css("display") && ("auto" === i.slidesPerView ? (j = getComputedStyle(W[0]), D = W[0].style.transform, O = W[0].style.webkitTransform, D && (W[0].style.transform = "none"), O && (W[0].style.webkitTransform = "none"), F = i.roundLengths ? t.isHorizontal() ? W.outerWidth(!0) : W.outerHeight(!0) : (N = e(j, "width"), I = e(j, "padding-left"), H = e(j, "padding-right"), q = e(j, "margin-left"), R = e(j, "margin-right"), (B = j.getPropertyValue("box-sizing")) && "border-box" === B ? N + q + R : (B = (j = W[0]).clientWidth, N + I + H + q + R + (j.offsetWidth - B))), D && (W[0].style.transform = D), O && (W[0].style.webkitTransform = O), i.roundLengths && (F = Math.floor(F))) : (F = (a - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (F = Math.floor(F)), d[z] && (d[z].style[n("width")] = F + "px")), d[z] && (d[z].swiperSlideSize = F), h.push(F), i.centeredSlides ? (w = w + F / 2 + x / 2 + b, 0 === x && 0 !== z && (w = w - a / 2 - b), 0 === z && (w = w - a / 2 - b), Math.abs(w) < .001 && (w = 0), i.roundLengths && (w = Math.floor(w)), E % i.slidesPerGroup == 0 && c.push(w), p.push(w)) : (i.roundLengths && (w = Math.floor(w)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && c.push(w), p.push(w), w = w + F + b), t.virtualSize += F + b, x = F, E += 1)
                        }
                        if (t.virtualSize = Math.max(t.virtualSize, a) + m, s && o && ("slide" === i.effect || "coverflow" === i.effect) && r.css({
                                width: t.virtualSize + i.spaceBetween + "px"
                            }), i.setWrapperSize && r.css(((o = {})[n("width")] = t.virtualSize + i.spaceBetween + "px", o)), 1 < i.slidesPerColumn)
                            if (t.virtualSize = (F + i.spaceBetween) * v, t.virtualSize = Math.ceil(t.virtualSize / i.slidesPerColumn) - i.spaceBetween, r.css(((C = {})[n("width")] = t.virtualSize + i.spaceBetween + "px", C)), i.centeredSlides) {
                                T = [];
                                for (var G = 0; G < c.length; G += 1) {
                                    var _ = c[G];
                                    i.roundLengths && (_ = Math.floor(_)), c[G] < t.virtualSize + c[0] && T.push(_)
                                }
                                c = T
                            }
                        if (!i.centeredSlides) {
                            T = [];
                            for (var X = 0; X < c.length; X += 1) {
                                var V = c[X];
                                i.roundLengths && (V = Math.floor(V)), c[X] <= t.virtualSize - a && T.push(V)
                            }
                            c = T, 1 < Math.floor(t.virtualSize - a) - Math.floor(c[c.length - 1]) && c.push(t.virtualSize - a)
                        }
                        0 === c.length && (c = [0]), 0 !== i.spaceBetween && (C = t.isHorizontal() && s ? "marginLeft" : n("marginRight"), d.filter(function(e, t) {
                            return !i.cssMode || t !== d.length - 1
                        }).css(((s = {})[C] = b + "px", s))), i.centeredSlides && i.centeredSlidesBounds && (S = 0, h.forEach(function(e) {
                            S += e + (i.spaceBetween || 0)
                        }), k = (S -= i.spaceBetween) - a, c = c.map(function(e) {
                            return e < 0 ? -f : k < e ? k + m : e
                        })), i.centerInsufficientSlides && (M = 0, h.forEach(function(e) {
                            M += e + (i.spaceBetween || 0)
                        }), (M -= i.spaceBetween) < a && (L = (a - M) / 2, c.forEach(function(e, t) {
                            c[t] = e - L
                        }), p.forEach(function(e, t) {
                            p[t] = e + L
                        }))), Y(t, {
                            slides: d,
                            snapGrid: c,
                            slidesGrid: p,
                            slidesSizesGrid: h
                        }), u !== l && t.emit("slidesLengthChange"), c.length !== g && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), p.length !== y && t.emit("slidesGridLengthChange"), (i.watchSlidesProgress || i.watchSlidesVisibility) && t.updateSlidesOffset()
                    }
                },
                updateAutoHeight: function(e) {
                    var t, n, i = this,
                        r = [],
                        a = i.virtual && i.params.virtual.enabled,
                        s = 0;

                    function o(t) {
                        return (a ? i.slides.filter(function(e) {
                            return parseInt(e.getAttribute("data-swiper-slide-index"), 10) === t
                        }) : i.slides.eq(t))[0]
                    }
                    if ("number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed), "auto" !== i.params.slidesPerView && 1 < i.params.slidesPerView)
                        if (i.params.centeredSlides) i.visibleSlides.each(function(e) {
                            r.push(e)
                        });
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                var l = i.activeIndex + t;
                                if (l > i.slides.length && !a) break;
                                r.push(o(l))
                            } else r.push(o(i.activeIndex));
                    for (t = 0; t < r.length; t += 1) void 0 !== r[t] && (s = s < (n = r[t].offsetHeight) ? n : s);
                    s && i.$wrapperEl.css("height", s + "px")
                },
                updateSlidesOffset: function() {
                    for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                },
                updateSlidesProgress: function(e) {
                    void 0 === e && (e = this && this.translate || 0);
                    var t = this,
                        n = t.params,
                        i = t.slides,
                        r = t.rtlTranslate;
                    if (0 !== i.length) {
                        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
                        var a = r ? e : -e;
                        i.removeClass(n.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (var s = 0; s < i.length; s += 1) {
                            var o, l, d = i[s],
                                u = (a + (n.centeredSlides ? t.minTranslate() : 0) - d.swiperSlideOffset) / (d.swiperSlideSize + n.spaceBetween);
                            (n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && (l = (o = -(a - d.swiperSlideOffset)) + t.slidesSizesGrid[s], (0 <= o && o < t.size - 1 || 1 < l && l <= t.size || o <= 0 && l >= t.size) && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(s), i.eq(s).addClass(n.slideVisibleClass))), d.progress = r ? -u : u
                        }
                        t.visibleSlides = C(t.visibleSlides)
                    }
                },
                updateProgress: function(e) {
                    var t = this;
                    void 0 === e && (o = t.rtlTranslate ? -1 : 1, e = t && t.translate && t.translate * o || 0);
                    var n = t.params,
                        i = t.maxTranslate() - t.minTranslate(),
                        r = t.progress,
                        a = t.isBeginning,
                        s = a,
                        o = l = t.isEnd,
                        l = 0 == i ? a = !(r = 0) : (a = (r = (e - t.minTranslate()) / i) <= 0, 1 <= r);
                    Y(t, {
                        progress: r,
                        isBeginning: a,
                        isEnd: l
                    }), (n.watchSlidesProgress || n.watchSlidesVisibility || n.centeredSlides && n.autoHeight) && t.updateSlidesProgress(e), a && !s && t.emit("reachBeginning toEdge"), l && !o && t.emit("reachEnd toEdge"), (s && !a || o && !l) && t.emit("fromEdge"), t.emit("progress", r)
                },
                updateSlidesClasses: function() {
                    var e = this,
                        t = e.slides,
                        n = e.params,
                        i = e.$wrapperEl,
                        r = e.activeIndex,
                        a = e.realIndex,
                        s = e.virtual && n.virtual.enabled;
                    t.removeClass(n.slideActiveClass + " " + n.slideNextClass + " " + n.slidePrevClass + " " + n.slideDuplicateActiveClass + " " + n.slideDuplicateNextClass + " " + n.slideDuplicatePrevClass), (r = s ? e.$wrapperEl.find("." + n.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(n.slideActiveClass), n.loop && (r.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a + '"]') : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a + '"]')).addClass(n.slideDuplicateActiveClass), a = r.nextAll("." + n.slideClass).eq(0).addClass(n.slideNextClass), n.loop && 0 === a.length && (a = t.eq(0)).addClass(n.slideNextClass), r = r.prevAll("." + n.slideClass).eq(0).addClass(n.slidePrevClass), n.loop && 0 === r.length && (r = t.eq(-1)).addClass(n.slidePrevClass), n.loop && ((a.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]') : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + a.attr("data-swiper-slide-index") + '"]')).addClass(n.slideDuplicateNextClass), (r.hasClass(n.slideDuplicateClass) ? i.children("." + n.slideClass + ":not(." + n.slideDuplicateClass + ')[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]') : i.children("." + n.slideClass + "." + n.slideDuplicateClass + '[data-swiper-slide-index="' + r.attr("data-swiper-slide-index") + '"]')).addClass(n.slideDuplicatePrevClass)), e.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    var t = this,
                        n = t.rtlTranslate ? t.translate : -t.translate,
                        i = t.slidesGrid,
                        r = t.snapGrid,
                        a = t.params,
                        s = t.activeIndex,
                        o = t.realIndex,
                        l = t.snapIndex,
                        d = e;
                    if (void 0 === d) {
                        for (var u = 0; u < i.length; u += 1) void 0 !== i[u + 1] ? n >= i[u] && n < i[u + 1] - (i[u + 1] - i[u]) / 2 ? d = u : n >= i[u] && n < i[u + 1] && (d = u + 1) : n >= i[u] && (d = u);
                        a.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0)
                    }(a = 0 <= r.indexOf(n) ? r.indexOf(n) : (e = Math.min(a.slidesPerGroupSkip, d)) + Math.floor((d - e) / a.slidesPerGroup)) >= r.length && (a = r.length - 1), d !== s ? (r = parseInt(t.slides.eq(d).attr("data-swiper-slide-index") || d, 10), Y(t, {
                        snapIndex: a,
                        realIndex: r,
                        previousIndex: s,
                        activeIndex: d
                    }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== r && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")) : a !== l && (t.snapIndex = a, t.emit("snapIndexChange"))
                },
                updateClickedSlide: function(e) {
                    var t, n = this,
                        i = n.params,
                        r = C(e.target).closest("." + i.slideClass)[0],
                        a = !1;
                    if (r)
                        for (var s = 0; s < n.slides.length; s += 1)
                            if (n.slides[s] === r) {
                                a = !0, t = s;
                                break
                            }
                    if (!r || !a) return n.clickedSlide = void 0, void(n.clickedIndex = void 0);
                    n.clickedSlide = r, n.virtual && n.params.virtual.enabled ? n.clickedIndex = parseInt(C(r).attr("data-swiper-slide-index"), 10) : n.clickedIndex = t, i.slideToClickedSlide && void 0 !== n.clickedIndex && n.clickedIndex !== n.activeIndex && n.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e) {
                    void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                    var t = this.params,
                        n = this.rtlTranslate,
                        i = this.translate,
                        r = this.$wrapperEl;
                    return t.virtualTranslate ? n ? -i : i : t.cssMode ? i : (e = g(r[0], e), n && (e = -e), e || 0)
                },
                setTranslate: function(e, t) {
                    var n = this,
                        i = n.rtlTranslate,
                        r = n.params,
                        a = n.$wrapperEl,
                        s = n.wrapperEl,
                        o = n.progress,
                        l = 0,
                        d = 0;
                    n.isHorizontal() ? l = i ? -e : e : d = e, r.roundLengths && (l = Math.floor(l), d = Math.floor(d)), r.cssMode ? s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal() ? -l : -d : r.virtualTranslate || a.transform("translate3d(" + l + "px, " + d + "px, 0px)"), n.previousTranslate = n.translate, n.translate = n.isHorizontal() ? l : d, (0 == (d = n.maxTranslate() - n.minTranslate()) ? 0 : (e - n.minTranslate()) / d) !== o && n.updateProgress(e), n.emit("setTranslate", n.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e, t, n, i, r) {
                    void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), void 0 === i && (i = !0);
                    var a = this,
                        s = a.params,
                        o = a.wrapperEl;
                    if (a.animating && s.preventInteractionOnTransition) return !1;
                    var l = a.minTranslate(),
                        d = a.maxTranslate(),
                        d = i && l < e ? l : i && e < d ? d : e;
                    if (a.updateProgress(d), s.cssMode) {
                        e = a.isHorizontal();
                        return 0 !== t && o.scrollTo ? o.scrollTo(((s = {})[e ? "left" : "top"] = -d, s.behavior = "smooth", s)) : o[e ? "scrollLeft" : "scrollTop"] = -d, !0
                    }
                    return 0 === t ? (a.setTransition(0), a.setTranslate(d), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(d), n && (a.emit("beforeTransitionStart", t, r), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                        a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, n && a.emit("transitionEnd"))
                    }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                },
                transitionStart: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this,
                        i = n.activeIndex,
                        r = n.params,
                        a = n.previousIndex;
                    r.cssMode || (r.autoHeight && n.updateAutoHeight(), t = (t = t) || (a < i ? "next" : i < a ? "prev" : "reset"), n.emit("transitionStart"), e && i !== a && ("reset" !== t ? (n.emit("slideChangeTransitionStart"), "next" === t ? n.emit("slideNextTransitionStart") : n.emit("slidePrevTransitionStart")) : n.emit("slideResetTransitionStart")))
                },
                transitionEnd: function(e, t) {
                    void 0 === e && (e = !0);
                    var n = this,
                        i = n.activeIndex,
                        r = n.previousIndex,
                        a = n.params;
                    n.animating = !1, a.cssMode || (n.setTransition(0), t = (t = t) || (r < i ? "next" : i < r ? "prev" : "reset"), n.emit("transitionEnd"), e && i !== r && ("reset" !== t ? (n.emit("slideChangeTransitionEnd"), "next" === t ? n.emit("slideNextTransitionEnd") : n.emit("slidePrevTransitionEnd")) : n.emit("slideResetTransitionEnd")))
                }
            },
            slide: {
                slideTo: function(e, t, n, i, r) {
                    if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), "number" != typeof e && "string" != typeof e) throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof e + "] given.");
                    if ("string" == typeof e) {
                        var a = parseInt(e, 10);
                        if (!isFinite(a)) throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + e + "] given.");
                        e = a
                    }
                    var s = this,
                        o = e;
                    o < 0 && (o = 0);
                    var l = s.params,
                        d = s.snapGrid,
                        u = s.slidesGrid,
                        c = s.previousIndex,
                        p = s.activeIndex,
                        h = s.rtlTranslate,
                        a = s.wrapperEl,
                        e = s.enabled;
                    if (s.animating && l.preventInteractionOnTransition || !e && !i && !r) return !1;
                    r = Math.min(s.params.slidesPerGroupSkip, o), (r += Math.floor((o - r) / s.params.slidesPerGroup)) >= d.length && (r = d.length - 1), (p || l.initialSlide || 0) === (c || 0) && n && s.emit("beforeSlideChangeStart");
                    var f, m = -d[r];
                    if (s.updateProgress(m), l.normalizeSlideIndex)
                        for (var v = 0; v < u.length; v += 1) {
                            var g = -Math.floor(100 * m),
                                y = Math.floor(100 * u[v]),
                                b = Math.floor(100 * u[v + 1]);
                            void 0 !== u[v + 1] ? y <= g && g < b - (b - y) / 2 ? o = v : y <= g && g < b && (o = v + 1) : y <= g && (o = v)
                        }
                    if (s.initialized && o !== p) {
                        if (!s.allowSlideNext && m < s.translate && m < s.minTranslate()) return !1;
                        if (!s.allowSlidePrev && m > s.translate && m > s.maxTranslate() && (p || 0) !== o) return !1
                    }
                    if (f = p < o ? "next" : o < p ? "prev" : "reset", h && -m === s.translate || !h && m === s.translate) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(m), "reset" !== f && (s.transitionStart(n, f), s.transitionEnd(n, f)), !1;
                    if (l.cssMode) {
                        p = s.isHorizontal(), l = -m;
                        return h && (l = a.scrollWidth - a.offsetWidth - l), 0 !== t && a.scrollTo ? a.scrollTo(((h = {})[p ? "left" : "top"] = l, h.behavior = "smooth", h)) : a[p ? "scrollLeft" : "scrollTop"] = l, !0
                    }
                    return 0 === t ? (s.setTransition(0), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, f), s.transitionEnd(n, f)) : (s.setTransition(t), s.setTranslate(m), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(n, f), s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
                        s && !s.destroyed && e.target === this && (s.$wrapperEl[0].removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].removeEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(n, f))
                    }), s.$wrapperEl[0].addEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.$wrapperEl[0].addEventListener("webkitTransitionEnd", s.onSlideToWrapperTransitionEnd))), !0
                },
                slideToLoop: function(e, t, n, i) {
                    return void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === n && (n = !0), this.params.loop && (e += this.loopedSlides), this.slideTo(e, t, n, i)
                },
                slideNext: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        a = i.animating;
                    if (!i.enabled) return i;
                    var s = i.activeIndex < r.slidesPerGroupSkip ? 1 : r.slidesPerGroup;
                    if (r.loop) {
                        if (a && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }
                    return i.slideTo(i.activeIndex + s, e, t, n)
                },
                slidePrev: function(e, t, n) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                    var i = this,
                        r = i.params,
                        a = i.animating,
                        s = i.snapGrid,
                        o = i.slidesGrid,
                        l = i.rtlTranslate;
                    if (!i.enabled) return i;
                    if (r.loop) {
                        if (a && r.loopPreventsSlide) return !1;
                        i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft
                    }

                    function d(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    var u, c = d(l ? i.translate : -i.translate),
                        l = s.map(d),
                        p = s[l.indexOf(c) - 1];
                    return void 0 === p && r.cssMode && s.forEach(function(e) {
                        !p && e <= c && (p = e)
                    }), void 0 !== p && (u = o.indexOf(p)) < 0 && (u = i.activeIndex - 1), i.slideTo(u, e, t, n)
                },
                slideReset: function(e, t, n) {
                    return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, n)
                },
                slideToClosest: function(e, t, n, i) {
                    void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
                    var r = this,
                        a = r.activeIndex,
                        s = Math.min(r.params.slidesPerGroupSkip, a),
                        o = s + Math.floor((a - s) / r.params.slidesPerGroup),
                        l = r.rtlTranslate ? r.translate : -r.translate;
                    return l >= r.snapGrid[o] ? (s = r.snapGrid[o], (r.snapGrid[o + 1] - s) * i < l - s && (a += r.params.slidesPerGroup)) : l - (l = r.snapGrid[o - 1]) <= (r.snapGrid[o] - l) * i && (a -= r.params.slidesPerGroup), a = Math.max(a, 0), a = Math.min(a, r.slidesGrid.length - 1), r.slideTo(a, e, t, n)
                },
                slideToClickedSlide: function() {
                    var e, t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = "auto" === n.slidesPerView ? t.slidesPerViewDynamic() : n.slidesPerView,
                        a = t.clickedIndex;
                    n.loop ? t.animating || (e = parseInt(C(t.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? a < t.loopedSlides - r / 2 || a > t.slides.length - t.loopedSlides + r / 2 ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), S(function() {
                        t.slideTo(a)
                    })) : t.slideTo(a) : a > t.slides.length - r ? (t.loopFix(), a = i.children("." + n.slideClass + '[data-swiper-slide-index="' + e + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), S(function() {
                        t.slideTo(a)
                    })) : t.slideTo(a)) : t.slideTo(a)
                }
            },
            loop: {
                loopCreate: function() {
                    var i = this,
                        e = b(),
                        t = i.params,
                        n = i.$wrapperEl;
                    n.children("." + t.slideClass + "." + t.slideDuplicateClass).remove();
                    var r = n.children("." + t.slideClass);
                    if (t.loopFillGroupWithBlank) {
                        var a = t.slidesPerGroup - r.length % t.slidesPerGroup;
                        if (a !== t.slidesPerGroup) {
                            for (var s = 0; s < a; s += 1) {
                                var o = C(e.createElement("div")).addClass(t.slideClass + " " + t.slideBlankClass);
                                n.append(o)
                            }
                            r = n.children("." + t.slideClass)
                        }
                    }
                    "auto" !== t.slidesPerView || t.loopedSlides || (t.loopedSlides = r.length), i.loopedSlides = Math.ceil(parseFloat(t.loopedSlides || t.slidesPerView, 10)), i.loopedSlides += t.loopAdditionalSlides, i.loopedSlides > r.length && (i.loopedSlides = r.length);
                    var l = [],
                        d = [];
                    r.each(function(e, t) {
                        var n = C(e);
                        t < i.loopedSlides && d.push(e), t < r.length && t >= r.length - i.loopedSlides && l.push(e), n.attr("data-swiper-slide-index", t)
                    });
                    for (var u = 0; u < d.length; u += 1) n.append(C(d[u].cloneNode(!0)).addClass(t.slideDuplicateClass));
                    for (var c = l.length - 1; 0 <= c; --c) n.prepend(C(l[c].cloneNode(!0)).addClass(t.slideDuplicateClass))
                },
                loopFix: function() {
                    var e = this;
                    e.emit("beforeLoopFix");
                    var t = e.activeIndex,
                        n = e.slides,
                        i = e.loopedSlides,
                        r = e.allowSlidePrev,
                        a = e.allowSlideNext,
                        s = e.snapGrid,
                        o = e.rtlTranslate;
                    e.allowSlidePrev = !0, e.allowSlideNext = !0;
                    var l, s = -s[t] - e.getTranslate();
                    t < i ? (l = n.length - 3 * i + t, l += i, e.slideTo(l, 0, !1, !0) && 0 != s && e.setTranslate((o ? -e.translate : e.translate) - s)) : t >= n.length - i && (l = -n.length + t + i, l += i, e.slideTo(l, 0, !1, !0) && 0 != s && e.setTranslate((o ? -e.translate : e.translate) - s)), e.allowSlidePrev = r, e.allowSlideNext = a, e.emit("loopFix")
                },
                loopDestroy: function() {
                    var e = this.$wrapperEl,
                        t = this.params,
                        n = this.slides;
                    e.children("." + t.slideClass + "." + t.slideDuplicateClass + ",." + t.slideClass + "." + t.slideBlankClass).remove(), n.removeAttr("data-swiper-slide-index")
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    var t = this;
                    t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode || ((t = t.el).style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab")
                },
                unsetGrabCursor: function() {
                    var e = this;
                    e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.el.style.cursor = "")
                }
            },
            manipulation: {
                appendSlide: function(e) {
                    var t = this,
                        n = t.$wrapperEl,
                        i = t.params;
                    if (i.loop && t.loopDestroy(), "object" == typeof e && "length" in e)
                        for (var r = 0; r < e.length; r += 1) e[r] && n.append(e[r]);
                    else n.append(e);
                    i.loop && t.loopCreate(), i.observer && t.support.observer || t.update()
                },
                prependSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = t.activeIndex;
                    n.loop && t.loopDestroy();
                    var a = r + 1;
                    if ("object" == typeof e && "length" in e) {
                        for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                        a = r + e.length
                    } else i.prepend(e);
                    n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), t.slideTo(a, 0, !1)
                },
                addSlide: function(e, t) {
                    var n = this,
                        i = n.$wrapperEl,
                        r = n.params,
                        a = n.activeIndex;
                    r.loop && (a -= n.loopedSlides, n.loopDestroy(), n.slides = i.children("." + r.slideClass));
                    var s = n.slides.length;
                    if (e <= 0) n.prependSlide(t);
                    else if (s <= e) n.appendSlide(t);
                    else {
                        for (var o = e < a ? a + 1 : a, l = [], d = s - 1; e <= d; --d) {
                            var u = n.slides.eq(d);
                            u.remove(), l.unshift(u)
                        }
                        if ("object" == typeof t && "length" in t) {
                            for (var c = 0; c < t.length; c += 1) t[c] && i.append(t[c]);
                            o = e < a ? a + t.length : a
                        } else i.append(t);
                        for (var p = 0; p < l.length; p += 1) i.append(l[p]);
                        r.loop && n.loopCreate(), r.observer && n.support.observer || n.update(), r.loop ? n.slideTo(o + n.loopedSlides, 0, !1) : n.slideTo(o, 0, !1)
                    }
                },
                removeSlide: function(e) {
                    var t = this,
                        n = t.params,
                        i = t.$wrapperEl,
                        r = t.activeIndex;
                    n.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = i.children("." + n.slideClass));
                    var a, s = r;
                    if ("object" == typeof e && "length" in e) {
                        for (var o = 0; o < e.length; o += 1) a = e[o], t.slides[a] && t.slides.eq(a).remove(), a < s && --s;
                        s = Math.max(s, 0)
                    } else a = e, t.slides[a] && t.slides.eq(a).remove(), a < s && --s, s = Math.max(s, 0);
                    n.loop && t.loopCreate(), n.observer && t.support.observer || t.update(), n.loop ? t.slideTo(s + t.loopedSlides, 0, !1) : t.slideTo(s, 0, !1)
                },
                removeAllSlides: function() {
                    for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                    this.removeSlide(e)
                }
            },
            events: {
                attachEvents: function() {
                    var e = this,
                        t = b(),
                        n = e.params,
                        i = e.touchEvents,
                        r = e.el,
                        a = e.wrapperEl,
                        s = e.device,
                        o = e.support;
                    e.onTouchStart = function(e) {
                        var t = this,
                            n = b(),
                            i = w(),
                            r = t.touchEventsData,
                            a = t.params,
                            s = t.touches,
                            o = t.enabled;
                        if (o && (!t.animating || !a.preventInteractionOnTransition)) {
                            var l = e;
                            l.originalEvent && (l = l.originalEvent);
                            var d = C(l.target);
                            if (("wrapper" !== a.touchEventsTarget || d.closest(t.wrapperEl).length) && (r.isTouchEvent = "touchstart" === l.type, (r.isTouchEvent || !("which" in l) || 3 !== l.which) && !(!r.isTouchEvent && "button" in l && 0 < l.button || r.isTouched && r.isMoved))) {
                                !!a.noSwipingClass && "" !== a.noSwipingClass && l.target && l.target.shadowRoot && e.path && e.path[0] && (d = C(e.path[0]));
                                var u = a.noSwipingSelector || "." + a.noSwipingClass,
                                    c = !(!l.target || !l.target.shadowRoot);
                                if (a.noSwiping && (c ? D(u, l.target) : d.closest(u)[0])) t.allowClick = !0;
                                else if (!a.swipeHandler || d.closest(a.swipeHandler)[0]) {
                                    s.currentX = ("touchstart" === l.type ? l.targetTouches[0] : l).pageX, s.currentY = ("touchstart" === l.type ? l.targetTouches[0] : l).pageY;
                                    var p = s.currentX,
                                        o = s.currentY,
                                        c = a.edgeSwipeDetection || a.iOSEdgeSwipeDetection,
                                        u = a.edgeSwipeThreshold || a.iOSEdgeSwipeThreshold;
                                    if (c && (p <= u || p >= i.innerWidth - u)) {
                                        if ("prevent" !== c) return;
                                        e.preventDefault()
                                    }
                                    Y(r, {
                                        isTouched: !0,
                                        isMoved: !1,
                                        allowTouchCallbacks: !0,
                                        isScrolling: void 0,
                                        startMoving: void 0
                                    }), s.startX = p, s.startY = o, r.touchStartTime = k(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, 0 < a.threshold && (r.allowThresholdMove = !1), "touchstart" !== l.type && (o = !0, d.is(r.focusableElements) && (o = !1), n.activeElement && C(n.activeElement).is(r.focusableElements) && n.activeElement !== d[0] && n.activeElement.blur(), o = o && t.allowTouchMove && a.touchStartPreventDefault, !a.touchStartForcePreventDefault && !o || d[0].isContentEditable || l.preventDefault()), t.emit("touchStart", l)
                                }
                            }
                        }
                    }.bind(e), e.onTouchMove = function(e) {
                        var t = b(),
                            n = this,
                            i = n.touchEventsData,
                            r = n.params,
                            a = n.touches,
                            s = n.rtlTranslate;
                        if (n.enabled) {
                            var o = e;
                            if (o.originalEvent && (o = o.originalEvent), i.isTouched) {
                                if (!i.isTouchEvent || "touchmove" === o.type) {
                                    var l = "touchmove" === o.type && o.targetTouches && (o.targetTouches[0] || o.changedTouches[0]),
                                        e = ("touchmove" === o.type ? l : o).pageX,
                                        l = ("touchmove" === o.type ? l : o).pageY;
                                    if (o.preventedByNestedSwiper) return a.startX = e, void(a.startY = l);
                                    if (!n.allowTouchMove) return n.allowClick = !1, void(i.isTouched && (Y(a, {
                                        startX: e,
                                        startY: l,
                                        currentX: e,
                                        currentY: l
                                    }), i.touchStartTime = k()));
                                    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
                                        if (n.isVertical()) {
                                            if (l < a.startY && n.translate <= n.maxTranslate() || l > a.startY && n.translate >= n.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                                        } else if (e < a.startX && n.translate <= n.maxTranslate() || e > a.startX && n.translate >= n.minTranslate()) return;
                                    if (i.isTouchEvent && t.activeElement && o.target === t.activeElement && C(o.target).is(i.focusableElements)) return i.isMoved = !0, void(n.allowClick = !1);
                                    if (i.allowTouchCallbacks && n.emit("touchMove", o), !(o.targetTouches && 1 < o.targetTouches.length)) {
                                        a.currentX = e, a.currentY = l;
                                        t = a.currentX - a.startX, e = a.currentY - a.startY;
                                        if (!(n.params.threshold && Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) < n.params.threshold))
                                            if (void 0 === i.isScrolling && (n.isHorizontal() && a.currentY === a.startY || n.isVertical() && a.currentX === a.startX ? i.isScrolling = !1 : 25 <= t * t + e * e && (l = 180 * Math.atan2(Math.abs(e), Math.abs(t)) / Math.PI, i.isScrolling = n.isHorizontal() ? l > r.touchAngle : 90 - l > r.touchAngle)), i.isScrolling && n.emit("touchMoveOpposite", o), void 0 === i.startMoving && (a.currentX === a.startX && a.currentY === a.startY || (i.startMoving = !0)), i.isScrolling) i.isTouched = !1;
                                            else if (i.startMoving) {
                                            n.allowClick = !1, !r.cssMode && o.cancelable && o.preventDefault(), r.touchMoveStopPropagation && !r.nested && o.stopPropagation(), i.isMoved || (r.loop && n.loopFix(), i.startTranslate = n.getTranslate(), n.setTransition(0), n.animating && n.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== n.allowSlideNext && !0 !== n.allowSlidePrev || n.setGrabCursor(!0), n.emit("sliderFirstMove", o)), n.emit("sliderMove", o), i.isMoved = !0;
                                            t = n.isHorizontal() ? t : e;
                                            a.diff = t, t *= r.touchRatio, s && (t = -t), n.swipeDirection = 0 < t ? "prev" : "next", i.currentTranslate = t + i.startTranslate;
                                            e = !0, s = r.resistanceRatio;
                                            if (r.touchReleaseOnEdges && (s = 0), 0 < t && i.currentTranslate > n.minTranslate() ? (e = !1, r.resistance && (i.currentTranslate = n.minTranslate() - 1 + Math.pow(-n.minTranslate() + i.startTranslate + t, s))) : t < 0 && i.currentTranslate < n.maxTranslate() && (e = !1, r.resistance && (i.currentTranslate = n.maxTranslate() + 1 - Math.pow(n.maxTranslate() - i.startTranslate - t, s))), e && (o.preventedByNestedSwiper = !0), !n.allowSlideNext && "next" === n.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !n.allowSlidePrev && "prev" === n.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.allowSlidePrev || n.allowSlideNext || (i.currentTranslate = i.startTranslate), 0 < r.threshold) {
                                                if (!(Math.abs(t) > r.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                                                if (!i.allowThresholdMove) return i.allowThresholdMove = !0, a.startX = a.currentX, a.startY = a.currentY, i.currentTranslate = i.startTranslate, void(a.diff = n.isHorizontal() ? a.currentX - a.startX : a.currentY - a.startY)
                                            }
                                            r.followFinger && !r.cssMode && ((r.freeMode || r.watchSlidesProgress || r.watchSlidesVisibility) && (n.updateActiveIndex(), n.updateSlidesClasses()), r.freeMode && (0 === i.velocities.length && i.velocities.push({
                                                position: a[n.isHorizontal() ? "startX" : "startY"],
                                                time: i.touchStartTime
                                            }), i.velocities.push({
                                                position: a[n.isHorizontal() ? "currentX" : "currentY"],
                                                time: k()
                                            })), n.updateProgress(i.currentTranslate), n.setTranslate(i.currentTranslate))
                                        }
                                    }
                                }
                            } else i.startMoving && i.isScrolling && n.emit("touchMoveOpposite", o)
                        }
                    }.bind(e), e.onTouchEnd = function(e) {
                        var t = this,
                            n = t.touchEventsData,
                            i = t.params,
                            r = t.touches,
                            a = t.rtlTranslate,
                            s = t.$wrapperEl,
                            o = t.slidesGrid,
                            l = t.snapGrid;
                        if (t.enabled) {
                            var d = e;
                            if (d.originalEvent && (d = d.originalEvent), n.allowTouchCallbacks && t.emit("touchEnd", d), n.allowTouchCallbacks = !1, !n.isTouched) return n.isMoved && i.grabCursor && t.setGrabCursor(!1), n.isMoved = !1, void(n.startMoving = !1);
                            i.grabCursor && n.isMoved && n.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                            var u, c = k(),
                                e = c - n.touchStartTime;
                            if (t.allowClick && (t.updateClickedSlide(d), t.emit("tap click", d), e < 300 && c - n.lastClickTime < 300 && t.emit("doubleTap doubleClick", d)), n.lastClickTime = k(), S(function() {
                                    t.destroyed || (t.allowClick = !0)
                                }), !n.isTouched || !n.isMoved || !t.swipeDirection || 0 === r.diff || n.currentTranslate === n.startTranslate) return n.isTouched = !1, n.isMoved = !1, void(n.startMoving = !1);
                            if (n.isTouched = !1, n.isMoved = !1, n.startMoving = !1, u = i.followFinger ? a ? t.translate : -t.translate : -n.currentTranslate, !i.cssMode)
                                if (i.freeMode)
                                    if (u < -t.minTranslate()) t.slideTo(t.activeIndex);
                                    else if (u > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                            else {
                                if (i.freeModeMomentum) {
                                    1 < n.velocities.length ? (g = n.velocities.pop(), h = n.velocities.pop(), p = g.position - h.position, h = g.time - h.time, t.velocity = p / h, t.velocity /= 2, Math.abs(t.velocity) < i.freeModeMinimumVelocity && (t.velocity = 0), (150 < h || 300 < k() - g.time) && (t.velocity = 0)) : t.velocity = 0, t.velocity *= i.freeModeMomentumVelocityRatio, n.velocities.length = 0;
                                    var p = 1e3 * i.freeModeMomentumRatio,
                                        h = t.velocity * p,
                                        f = t.translate + h;
                                    a && (f = -f);
                                    var m, v, g = !1,
                                        h = 20 * Math.abs(t.velocity) * i.freeModeMomentumBounceRatio;
                                    if (f < t.maxTranslate()) i.freeModeMomentumBounce ? (f + t.maxTranslate() < -h && (f = t.maxTranslate() - h), m = t.maxTranslate(), g = !0, n.allowMomentumBounce = !0) : f = t.maxTranslate(), i.loop && i.centeredSlides && (v = !0);
                                    else if (f > t.minTranslate()) i.freeModeMomentumBounce ? (f - t.minTranslate() > h && (f = t.minTranslate() + h), m = t.minTranslate(), g = !0, n.allowMomentumBounce = !0) : f = t.minTranslate(), i.loop && i.centeredSlides && (v = !0);
                                    else if (i.freeModeSticky) {
                                        for (var y, b = 0; b < l.length; b += 1)
                                            if (l[b] > -f) {
                                                y = b;
                                                break
                                            }
                                        f = -(f = Math.abs(l[y] - f) < Math.abs(l[y - 1] - f) || "next" === t.swipeDirection ? l[y] : l[y - 1])
                                    }
                                    if (v && t.once("transitionEnd", function() {
                                            t.loopFix()
                                        }), 0 !== t.velocity) p = a ? Math.abs((-f - t.translate) / t.velocity) : Math.abs((f - t.translate) / t.velocity), i.freeModeSticky && (p = (v = Math.abs((a ? -f : f) - t.translate)) < (a = t.slidesSizesGrid[t.activeIndex]) ? i.speed : v < 2 * a ? 1.5 * i.speed : 2.5 * i.speed);
                                    else if (i.freeModeSticky) return void t.slideToClosest();
                                    i.freeModeMomentumBounce && g ? (t.updateProgress(m), t.setTransition(p), t.setTranslate(f), t.transitionStart(!0, t.swipeDirection), t.animating = !0, s.transitionEnd(function() {
                                        t && !t.destroyed && n.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(i.speed), setTimeout(function() {
                                            t.setTranslate(m), s.transitionEnd(function() {
                                                t && !t.destroyed && t.transitionEnd()
                                            })
                                        }, 0))
                                    })) : t.velocity ? (t.updateProgress(f), t.setTransition(p), t.setTranslate(f), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, s.transitionEnd(function() {
                                        t && !t.destroyed && t.transitionEnd()
                                    }))) : (t.emit("_freeModeNoMomentumRelease"), t.updateProgress(f)), t.updateActiveIndex(), t.updateSlidesClasses()
                                } else {
                                    if (i.freeModeSticky) return void t.slideToClosest();
                                    i.freeMode && t.emit("_freeModeNoMomentumRelease")
                                }(!i.freeModeMomentum || e >= i.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                            } else {
                                for (var w = 0, x = t.slidesSizesGrid[0], E = 0; E < o.length; E += E < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup) {
                                    var T = E < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                    void 0 !== o[E + T] ? u >= o[E] && u < o[E + T] && (x = o[(w = E) + T] - o[E]) : u >= o[E] && (w = E, x = o[o.length - 1] - o[o.length - 2])
                                }
                                g = (u - o[w]) / x, p = w < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
                                e > i.longSwipesMs ? i.longSwipes ? ("next" === t.swipeDirection && (g >= i.longSwipesRatio ? t.slideTo(w + p) : t.slideTo(w)), "prev" === t.swipeDirection && (g > 1 - i.longSwipesRatio ? t.slideTo(w + p) : t.slideTo(w))) : t.slideTo(t.activeIndex) : i.shortSwipes ? t.navigation && (d.target === t.navigation.nextEl || d.target === t.navigation.prevEl) ? d.target === t.navigation.nextEl ? t.slideTo(w + p) : t.slideTo(w) : ("next" === t.swipeDirection && t.slideTo(w + p), "prev" === t.swipeDirection && t.slideTo(w)) : t.slideTo(t.activeIndex)
                            }
                        }
                    }.bind(e), n.cssMode && (e.onScroll = function() {
                        var e = this,
                            t = e.wrapperEl,
                            n = e.rtlTranslate;
                        e.enabled && (e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = n ? t.scrollWidth - t.offsetWidth - t.scrollLeft : -t.scrollLeft : e.translate = -t.scrollTop, -0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses(), (0 == (t = e.maxTranslate() - e.minTranslate()) ? 0 : (e.translate - e.minTranslate()) / t) !== e.progress && e.updateProgress(n ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1))
                    }.bind(e)), e.onClick = function(e) {
                        var t = this;
                        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
                    }.bind(e);
                    var l, d = !!n.nested;
                    !o.touch && o.pointerEvents ? (r.addEventListener(i.start, e.onTouchStart, !1), t.addEventListener(i.move, e.onTouchMove, d), t.addEventListener(i.end, e.onTouchEnd, !1)) : (o.touch && (l = !("touchstart" !== i.start || !o.passiveListener || !n.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, r.addEventListener(i.start, e.onTouchStart, l), r.addEventListener(i.move, e.onTouchMove, o.passiveListener ? {
                        passive: !1,
                        capture: d
                    } : d), r.addEventListener(i.end, e.onTouchEnd, l), i.cancel && r.addEventListener(i.cancel, e.onTouchEnd, l), N || (t.addEventListener("touchstart", I), N = !0)), (n.simulateTouch && !s.ios && !s.android || n.simulateTouch && !o.touch && s.ios) && (r.addEventListener("mousedown", e.onTouchStart, !1), t.addEventListener("mousemove", e.onTouchMove, d), t.addEventListener("mouseup", e.onTouchEnd, !1))), (n.preventClicks || n.preventClicksPropagation) && r.addEventListener("click", e.onClick, !0), n.cssMode && a.addEventListener("scroll", e.onScroll), n.updateOnWindowResize ? e.on(s.ios || s.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O, !0) : e.on("observerUpdate", O, !0)
                },
                detachEvents: function() {
                    var e, t = this,
                        n = b(),
                        i = t.params,
                        r = t.touchEvents,
                        a = t.el,
                        s = t.wrapperEl,
                        o = t.device,
                        l = t.support,
                        d = !!i.nested;
                    !l.touch && l.pointerEvents ? (a.removeEventListener(r.start, t.onTouchStart, !1), n.removeEventListener(r.move, t.onTouchMove, d), n.removeEventListener(r.end, t.onTouchEnd, !1)) : (l.touch && (e = !("onTouchStart" !== r.start || !l.passiveListener || !i.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    }, a.removeEventListener(r.start, t.onTouchStart, e), a.removeEventListener(r.move, t.onTouchMove, d), a.removeEventListener(r.end, t.onTouchEnd, e), r.cancel && a.removeEventListener(r.cancel, t.onTouchEnd, e)), (i.simulateTouch && !o.ios && !o.android || i.simulateTouch && !l.touch && o.ios) && (a.removeEventListener("mousedown", t.onTouchStart, !1), n.removeEventListener("mousemove", t.onTouchMove, d), n.removeEventListener("mouseup", t.onTouchEnd, !1))), (i.preventClicks || i.preventClicksPropagation) && a.removeEventListener("click", t.onClick, !0), i.cssMode && s.removeEventListener("scroll", t.onScroll), t.off(o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", O)
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    var e, n, t, i, r = this,
                        a = r.activeIndex,
                        s = r.initialized,
                        o = r.loopedSlides,
                        l = void 0 === o ? 0 : o,
                        d = r.params,
                        u = r.$el,
                        c = d.breakpoints;
                    !c || c && 0 === Object.keys(c).length || (e = r.getBreakpoint(c, r.params.breakpointsBase, r.el)) && r.currentBreakpoint !== e && ((n = e in c ? c[e] : void 0) && ["slidesPerView", "spaceBetween", "slidesPerGroup", "slidesPerGroupSkip", "slidesPerColumn"].forEach(function(e) {
                        var t = n[e];
                        void 0 !== t && (n[e] = "slidesPerView" !== e || "AUTO" !== t && "auto" !== t ? "slidesPerView" === e ? parseFloat(t) : parseInt(t, 10) : "auto")
                    }), t = n || r.originalParams, i = 1 < d.slidesPerColumn, o = 1 < t.slidesPerColumn, c = d.enabled, i && !o ? (u.removeClass(d.containerModifierClass + "multirow " + d.containerModifierClass + "multirow-column"), r.emitContainerClasses()) : !i && o && (u.addClass(d.containerModifierClass + "multirow"), (t.slidesPerColumnFill && "column" === t.slidesPerColumnFill || !t.slidesPerColumnFill && "column" === d.slidesPerColumnFill) && u.addClass(d.containerModifierClass + "multirow-column"), r.emitContainerClasses()), u = t.direction && t.direction !== d.direction, d = d.loop && (t.slidesPerView !== d.slidesPerView || u), u && s && r.changeDirection(), Y(r.params, t), u = r.params.enabled, Y(r, {
                        allowTouchMove: r.params.allowTouchMove,
                        allowSlideNext: r.params.allowSlideNext,
                        allowSlidePrev: r.params.allowSlidePrev
                    }), c && !u ? r.disable() : !c && u && r.enable(), r.currentBreakpoint = e, r.emit("_beforeBreakpoint", t), d && s && (r.loopDestroy(), r.loopCreate(), r.updateSlides(), r.slideTo(a - l + r.loopedSlides, 0, !1)), r.emit("breakpoint", t))
                },
                getBreakpoint: function(e, t, n) {
                    if (void 0 === t && (t = "window"), e && ("container" !== t || n)) {
                        var i = !1,
                            r = w(),
                            a = "window" === t ? r.innerHeight : n.clientHeight,
                            s = Object.keys(e).map(function(e) {
                                if ("string" != typeof e || 0 !== e.indexOf("@")) return {
                                    value: e,
                                    point: e
                                };
                                var t = parseFloat(e.substr(1));
                                return {
                                    value: a * t,
                                    point: e
                                }
                            });
                        s.sort(function(e, t) {
                            return parseInt(e.value, 10) - parseInt(t.value, 10)
                        });
                        for (var o = 0; o < s.length; o += 1) {
                            var l = s[o],
                                d = l.point,
                                l = l.value;
                            "window" === t ? r.matchMedia("(min-width: " + l + "px)").matches && (i = d) : l <= n.clientWidth && (i = d)
                        }
                        return i || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    var e = this,
                        t = e.params,
                        n = e.isLocked,
                        i = 0 < e.slides.length && t.slidesOffsetBefore + t.spaceBetween * (e.slides.length - 1) + e.slides[0].offsetWidth * e.slides.length;
                    t.slidesOffsetBefore && t.slidesOffsetAfter && i ? e.isLocked = i <= e.size : e.isLocked = 1 === e.snapGrid.length, e.allowSlideNext = !e.isLocked, e.allowSlidePrev = !e.isLocked, n !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"), n && n !== e.isLocked && (e.isEnd = !1, e.navigation && e.navigation.update())
                }
            },
            classes: {
                addClasses: function() {
                    var n, i, e = this,
                        t = e.classNames,
                        r = e.params,
                        a = e.rtl,
                        s = e.$el,
                        o = e.device,
                        l = e.support,
                        o = (o = ["initialized", r.direction, {
                            "pointer-events": l.pointerEvents && !l.touch
                        }, {
                            "free-mode": r.freeMode
                        }, {
                            autoheight: r.autoHeight
                        }, {
                            rtl: a
                        }, {
                            multirow: 1 < r.slidesPerColumn
                        }, {
                            "multirow-column": 1 < r.slidesPerColumn && "column" === r.slidesPerColumnFill
                        }, {
                            android: o.android
                        }, {
                            ios: o.ios
                        }, {
                            "css-mode": r.cssMode
                        }], n = r.containerModifierClass, i = [], o.forEach(function(t) {
                            "object" == typeof t ? Object.keys(t).forEach(function(e) {
                                t[e] && i.push(n + e)
                            }) : "string" == typeof t && i.push(n + t)
                        }), i);
                    t.push.apply(t, o), s.addClass([].concat(t).join(" ")), e.emitContainerClasses()
                },
                removeClasses: function() {
                    var e = this.$el,
                        t = this.classNames;
                    e.removeClass(t.join(" ")), this.emitContainerClasses()
                }
            },
            images: {
                loadImage: function(e, t, n, i, r, a) {
                    var s = w();

                    function o() {
                        a && a()
                    }!(C(e).parent("picture")[0] || e.complete && r) && t ? ((s = new s.Image).onload = o, s.onerror = o, i && (s.sizes = i), n && (s.srcset = n), t && (s.src = t)) : o()
                },
                preloadImages: function() {
                    var e = this;

                    function t() {
                        null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                    }
                    e.imagesToLoad = e.$el.find("img");
                    for (var n = 0; n < e.imagesToLoad.length; n += 1) {
                        var i = e.imagesToLoad[n];
                        e.loadImage(i, i.currentSrc || i.getAttribute("src"), i.srcset || i.getAttribute("srcset"), i.sizes || i.getAttribute("sizes"), !0, t)
                    }
                }
            }
        },
        R = {},
        j = function() {
            function l() {
                for (var n, e = arguments.length, t = new Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                if (n = Y({}, n = (n = 1 === t.length && t[0].constructor && "Object" === Object.prototype.toString.call(t[0]).slice(8, -1) ? t[0] : (s = t[0], t[1])) || {}), s && !n.el && (n.el = s), n.el && 1 < C(n.el).length) {
                    var r = [];
                    return C(n.el).each(function(e) {
                        e = Y({}, n, {
                            el: e
                        });
                        r.push(new l(e))
                    }), r
                }
                var a = this;
                a.__swiper__ = !0, a.support = M(), a.device = L({
                    userAgent: n.userAgent
                }), a.browser = P(), a.eventsListeners = {}, a.eventsAnyListeners = [], void 0 === a.modules && (a.modules = {}), Object.keys(a.modules).forEach(function(e) {
                    var t = a.modules[e];
                    t.params && (e = Object.keys(t.params)[0], "object" == typeof(t = t.params[e]) && null !== t && (0 <= ["navigation", "pagination", "scrollbar"].indexOf(e) && !0 === n[e] && (n[e] = {
                        auto: !0
                    }), e in n && "enabled" in t && (!0 === n[e] && (n[e] = {
                        enabled: !0
                    }), "object" != typeof n[e] || "enabled" in n[e] || (n[e].enabled = !0), n[e] || (n[e] = {
                        enabled: !1
                    }))))
                });
                var s, o = Y({}, H);
                return a.useParams(o), a.params = Y({}, o, R, n), a.originalParams = Y({}, a.params), a.passedParams = Y({}, n), a.params && a.params.on && Object.keys(a.params.on).forEach(function(e) {
                    a.on(e, a.params.on[e])
                }), a.params && a.params.onAny && a.onAny(a.params.onAny), a.$ = C, Y(a, {
                    enabled: a.params.enabled,
                    el: s,
                    classNames: [],
                    slides: C(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: function() {
                        return "horizontal" === a.params.direction
                    },
                    isVertical: function() {
                        return "vertical" === a.params.direction
                    },
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: a.params.allowSlideNext,
                    allowSlidePrev: a.params.allowSlidePrev,
                    touchEvents: (o = ["touchstart", "touchmove", "touchend", "touchcancel"], s = ["mousedown", "mousemove", "mouseup"], a.support.pointerEvents && (s = ["pointerdown", "pointermove", "pointerup"]), a.touchEventsTouch = {
                        start: o[0],
                        move: o[1],
                        end: o[2],
                        cancel: o[3]
                    }, a.touchEventsDesktop = {
                        start: s[0],
                        move: s[1],
                        end: s[2]
                    }, a.support.touch || !a.params.simulateTouch ? a.touchEventsTouch : a.touchEventsDesktop),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: a.params.focusableElements,
                        lastClickTime: k(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: a.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), a.useModules(), a.emit("_swiper"), a.params.init && a.init(), a
            }
            var e, t, n = l.prototype;
            return n.enable = function() {
                var e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }, n.disable = function() {
                var e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }, n.setProgress = function(e, t) {
                var n = this;
                e = Math.min(Math.max(e, 0), 1);
                var i = n.minTranslate(),
                    i = (n.maxTranslate() - i) * e + i;
                n.translateTo(i, void 0 === t ? 0 : t), n.updateActiveIndex(), n.updateSlidesClasses()
            }, n.emitContainerClasses = function() {
                var e, t = this;
                t.params._emitClasses && t.el && (e = t.el.className.split(" ").filter(function(e) {
                    return 0 === e.indexOf("swiper-container") || 0 === e.indexOf(t.params.containerModifierClass)
                }), t.emit("_containerClasses", e.join(" ")))
            }, n.getSlideClasses = function(e) {
                var t = this;
                return e.className.split(" ").filter(function(e) {
                    return 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
                }).join(" ")
            }, n.emitSlidesClasses = function() {
                var n, i = this;
                i.params._emitClasses && i.el && (n = [], i.slides.each(function(e) {
                    var t = i.getSlideClasses(e);
                    n.push({
                        slideEl: e,
                        classNames: t
                    }), i.emit("_slideClass", e, t)
                }), i.emit("_slideClasses", n))
            }, n.slidesPerViewDynamic = function() {
                var e = this,
                    t = e.params,
                    n = e.slides,
                    i = e.slidesGrid,
                    r = e.size,
                    a = e.activeIndex,
                    s = 1;
                if (t.centeredSlides) {
                    for (var o, l = n[a].swiperSlideSize, d = a + 1; d < n.length; d += 1) n[d] && !o && (s += 1, r < (l += n[d].swiperSlideSize) && (o = !0));
                    for (var u = a - 1; 0 <= u; --u) n[u] && !o && (s += 1, r < (l += n[u].swiperSlideSize) && (o = !0))
                } else
                    for (var c = a + 1; c < n.length; c += 1) i[c] - i[a] < r && (s += 1);
                return s
            }, n.update = function() {
                var e, t, n = this;

                function i() {
                    var e = n.rtlTranslate ? -1 * n.translate : n.translate,
                        e = Math.min(Math.max(e, n.maxTranslate()), n.minTranslate());
                    n.setTranslate(e), n.updateActiveIndex(), n.updateSlidesClasses()
                }
                n && !n.destroyed && (e = n.snapGrid, (t = n.params).breakpoints && n.setBreakpoint(), n.updateSize(), n.updateSlides(), n.updateProgress(), n.updateSlidesClasses(), n.params.freeMode ? (i(), n.params.autoHeight && n.updateAutoHeight()) : (("auto" === n.params.slidesPerView || 1 < n.params.slidesPerView) && n.isEnd && !n.params.centeredSlides ? n.slideTo(n.slides.length - 1, 0, !1, !0) : n.slideTo(n.activeIndex, 0, !1, !0)) || i(), t.watchOverflow && e !== n.snapGrid && n.checkOverflow(), n.emit("update"))
            }, n.changeDirection = function(t, e) {
                void 0 === e && (e = !0);
                var n = this,
                    i = n.params.direction;
                return (t = t || ("horizontal" === i ? "vertical" : "horizontal")) === i || "horizontal" !== t && "vertical" !== t || (n.$el.removeClass("" + n.params.containerModifierClass + i).addClass("" + n.params.containerModifierClass + t), n.emitContainerClasses(), n.params.direction = t, n.slides.each(function(e) {
                    "vertical" === t ? e.style.width = "" : e.style.height = ""
                }), n.emit("changeDirection"), e && n.update()), n
            }, n.mount = function(t) {
                var e = this;
                if (e.mounted) return !0;
                var n = C(t || e.params.el);
                if (!(t = n[0])) return !1;
                t.swiper = e;

                function i() {
                    return "." + (e.params.wrapperClass || "").trim().split(" ").join(".")
                }
                var r, a = function() {
                    if (t && t.shadowRoot && t.shadowRoot.querySelector) {
                        var e = C(t.shadowRoot.querySelector(i()));
                        return e.children = function(e) {
                            return n.children(e)
                        }, e
                    }
                    return n.children(i())
                }();
                return 0 === a.length && e.params.createElements && (r = b().createElement("div"), a = C(r), r.className = e.params.wrapperClass, n.append(r), n.children("." + e.params.slideClass).each(function(e) {
                    a.append(e)
                })), Y(e, {
                    $el: n,
                    el: t,
                    $wrapperEl: a,
                    wrapperEl: a[0],
                    mounted: !0,
                    rtl: "rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction"),
                    rtlTranslate: "horizontal" === e.params.direction && ("rtl" === t.dir.toLowerCase() || "rtl" === n.css("direction")),
                    wrongRTL: "-webkit-box" === a.css("display")
                }), !0
            }, n.init = function(e) {
                var t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }, n.destroy = function(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var n, i = this,
                    r = i.params,
                    a = i.$el,
                    s = i.$wrapperEl,
                    o = i.slides;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), r.loop && i.loopDestroy(), t && (i.removeClasses(), a.removeAttr("style"), s.removeAttr("style"), o && o.length && o.removeClass([r.slideVisibleClass, r.slideActiveClass, r.slideNextClass, r.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function(e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, n = i, Object.keys(n).forEach(function(e) {
                    try {
                        n[e] = null
                    } catch (e) {}
                    try {
                        delete n[e]
                    } catch (e) {}
                })), i.destroyed = !0), null
            }, l.extendDefaults = function(e) {
                Y(R, e)
            }, l.installModule = function(e) {
                l.prototype.modules || (l.prototype.modules = {});
                var t = e.name || Object.keys(l.prototype.modules).length + "_" + k();
                l.prototype.modules[t] = e
            }, l.use = function(e) {
                return Array.isArray(e) ? e.forEach(function(e) {
                    return l.installModule(e)
                }) : l.installModule(e), l
            }, e = l, t = [{
                key: "extendedDefaults",
                get: function() {
                    return R
                }
            }, {
                key: "defaults",
                get: function() {
                    return H
                }
            }], (n = null) && i(e.prototype, n), t && i(e, t), l
        }();
    Object.keys(q).forEach(function(t) {
        Object.keys(q[t]).forEach(function(e) {
            j.prototype[e] = q[t][e]
        })
    }), j.use([$, z]);
    var B = {
            update: function(e) {
                var t = this,
                    n = t.params,
                    i = n.slidesPerView,
                    r = n.slidesPerGroup,
                    a = n.centeredSlides,
                    s = t.params.virtual,
                    o = s.addSlidesBefore,
                    l = s.addSlidesAfter,
                    d = t.virtual,
                    u = d.from,
                    c = d.to,
                    p = d.slides,
                    h = d.slidesGrid,
                    f = d.renderSlide,
                    n = d.offset;
                t.updateActiveIndex();
                var s = t.activeIndex || 0,
                    d = t.rtlTranslate ? "right" : t.isHorizontal() ? "left" : "top",
                    o = a ? (g = Math.floor(i / 2) + r + l, Math.floor(i / 2) + r + o) : (g = i + (r - 1) + l, r + o),
                    m = Math.max((s || 0) - o, 0),
                    v = Math.min((s || 0) + g, p.length - 1),
                    g = (t.slidesGrid[m] || 0) - (t.slidesGrid[0] || 0);

                function y() {
                    t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.lazy && t.params.lazy.enabled && t.lazy.load()
                }
                if (Y(t.virtual, {
                        from: m,
                        to: v,
                        offset: g,
                        slidesGrid: t.slidesGrid
                    }), u === m && c === v && !e) return t.slidesGrid !== h && g !== n && t.slides.css(d, g + "px"), void t.updateProgress();
                if (t.params.virtual.renderExternal) return t.params.virtual.renderExternal.call(t, {
                    offset: g,
                    from: m,
                    to: v,
                    slides: function() {
                        for (var e = [], t = m; t <= v; t += 1) e.push(p[t]);
                        return e
                    }()
                }), void(t.params.virtual.renderExternalUpdate && y());
                var b = [],
                    w = [];
                if (e) t.$wrapperEl.find("." + t.params.slideClass).remove();
                else
                    for (var x = u; x <= c; x += 1)(x < m || v < x) && t.$wrapperEl.find("." + t.params.slideClass + '[data-swiper-slide-index="' + x + '"]').remove();
                for (var E = 0; E < p.length; E += 1) m <= E && E <= v && (void 0 === c || e ? w.push(E) : (c < E && w.push(E), E < u && b.push(E)));
                w.forEach(function(e) {
                    t.$wrapperEl.append(f(p[e], e))
                }), b.sort(function(e, t) {
                    return t - e
                }).forEach(function(e) {
                    t.$wrapperEl.prepend(f(p[e], e))
                }), t.$wrapperEl.children(".swiper-slide").css(d, g + "px"), y()
            },
            renderSlide: function(e, t) {
                var n = this.params.virtual;
                if (n.cache && this.virtual.cache[t]) return this.virtual.cache[t];
                e = n.renderSlide ? C(n.renderSlide.call(this, e, t)) : C('<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + t + '">' + e + "</div>");
                return e.attr("data-swiper-slide-index") || e.attr("data-swiper-slide-index", t), n.cache && (this.virtual.cache[t] = e), e
            },
            appendSlide: function(e) {
                if ("object" == typeof e && "length" in e)
                    for (var t = 0; t < e.length; t += 1) e[t] && this.virtual.slides.push(e[t]);
                else this.virtual.slides.push(e);
                this.virtual.update(!0)
            },
            prependSlide: function(e) {
                var i, r, t = this.activeIndex,
                    n = t + 1,
                    a = 1;
                if (Array.isArray(e)) {
                    for (var s = 0; s < e.length; s += 1) e[s] && this.virtual.slides.unshift(e[s]);
                    n = t + e.length, a = e.length
                } else this.virtual.slides.unshift(e);
                this.params.virtual.cache && (i = this.virtual.cache, r = {}, Object.keys(i).forEach(function(e) {
                    var t = i[e],
                        n = t.attr("data-swiper-slide-index");
                    n && t.attr("data-swiper-slide-index", parseInt(n, 10) + 1), r[parseInt(e, 10) + a] = t
                }), this.virtual.cache = r), this.virtual.update(!0), this.slideTo(n, 0)
            },
            removeSlide: function(e) {
                if (null != e) {
                    var t = this.activeIndex;
                    if (Array.isArray(e))
                        for (var n = e.length - 1; 0 <= n; --n) this.virtual.slides.splice(e[n], 1), this.params.virtual.cache && delete this.virtual.cache[e[n]], e[n] < t && --t, t = Math.max(t, 0);
                    else this.virtual.slides.splice(e, 1), this.params.virtual.cache && delete this.virtual.cache[e], e < t && --t, t = Math.max(t, 0);
                    this.virtual.update(!0), this.slideTo(t, 0)
                }
            },
            removeAllSlides: function() {
                this.virtual.slides = [], this.params.virtual.cache && (this.virtual.cache = {}), this.virtual.update(!0), this.slideTo(0, 0)
            }
        },
        $ = {
            name: "virtual",
            params: {
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            },
            create: function() {
                x(this, {
                    virtual: e({}, B, {
                        slides: this.params.virtual.slides,
                        cache: {}
                    })
                })
            },
            on: {
                beforeInit: function(e) {
                    var t;
                    e.params.virtual.enabled && (e.classNames.push(e.params.containerModifierClass + "virtual"), t = {
                        watchSlidesProgress: !0
                    }, Y(e.params, t), Y(e.originalParams, t), e.params.initialSlide || e.virtual.update())
                },
                setTranslate: function(e) {
                    e.params.virtual.enabled && e.virtual.update()
                }
            }
        },
        F = {
            handle: function(e) {
                var t = this;
                if (t.enabled) {
                    var n = w(),
                        i = b(),
                        r = t.rtlTranslate,
                        a = e;
                    a.originalEvent && (a = a.originalEvent);
                    var s = a.keyCode || a.charCode,
                        o = t.params.keyboard.pageUpDown,
                        l = o && 33 === s,
                        d = o && 34 === s,
                        u = 37 === s,
                        c = 39 === s,
                        p = 38 === s,
                        e = 40 === s;
                    if (!t.allowSlideNext && (t.isHorizontal() && c || t.isVertical() && e || d)) return !1;
                    if (!t.allowSlidePrev && (t.isHorizontal() && u || t.isVertical() && p || l)) return !1;
                    if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || i.activeElement && i.activeElement.nodeName && ("input" === i.activeElement.nodeName.toLowerCase() || "textarea" === i.activeElement.nodeName.toLowerCase()))) {
                        if (t.params.keyboard.onlyInViewport && (l || d || u || c || p || e)) {
                            var h = !1;
                            if (0 < t.$el.parents("." + t.params.slideClass).length && 0 === t.$el.parents("." + t.params.slideActiveClass).length) return;
                            var o = t.$el,
                                i = o[0].clientWidth,
                                o = o[0].clientHeight,
                                f = n.innerWidth,
                                m = n.innerHeight,
                                n = t.$el.offset();
                            r && (n.left -= t.$el[0].scrollLeft);
                            for (var v = [
                                    [n.left, n.top],
                                    [n.left + i, n.top],
                                    [n.left, n.top + o],
                                    [n.left + i, n.top + o]
                                ], g = 0; g < v.length; g += 1) {
                                var y = v[g];
                                0 <= y[0] && y[0] <= f && 0 <= y[1] && y[1] <= m && (0 === y[0] && 0 === y[1] || (h = !0))
                            }
                            if (!h) return
                        }
                        t.isHorizontal() ? ((l || d || u || c) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((d || c) && !r || (l || u) && r) && t.slideNext(), ((l || u) && !r || (d || c) && r) && t.slidePrev()) : ((l || d || p || e) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (d || e) && t.slideNext(), (l || p) && t.slidePrev()), t.emit("keyPress", s)
                    }
                }
            },
            enable: function() {
                var e = b();
                this.keyboard.enabled || (C(e).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            },
            disable: function() {
                var e = b();
                this.keyboard.enabled && (C(e).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        },
        z = {
            name: "keyboard",
            params: {
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            },
            create: function() {
                x(this, {
                    keyboard: e({
                        enabled: !1
                    }, F)
                })
            },
            on: {
                init: function(e) {
                    e.params.keyboard.enabled && e.keyboard.enable()
                },
                destroy: function(e) {
                    e.keyboard.enabled && e.keyboard.disable()
                }
            }
        };
    var W = {
            lastScrollTime: k(),
            lastEventBeforeSnap: void 0,
            recentWheelEvents: [],
            event: function() {
                var e, t, n, i;
                return -1 < w().navigator.userAgent.indexOf("firefox") ? "DOMMouseScroll" : (t = b(), (i = (n = "onwheel") in t) || ((e = t.createElement("div")).setAttribute(n, "return;"), i = "function" == typeof e[n]), !i && t.implementation && t.implementation.hasFeature && !0 !== t.implementation.hasFeature("", "") && (i = t.implementation.hasFeature("Events.wheel", "3.0")), i ? "wheel" : "mousewheel")
            },
            normalize: function(e) {
                var t = 0,
                    n = 0,
                    i = 0,
                    r = 0;
                return "detail" in e && (n = e.detail), "wheelDelta" in e && (n = -e.wheelDelta / 120), "wheelDeltaY" in e && (n = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = n, n = 0), i = 10 * t, r = 10 * n, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (i = e.deltaX), e.shiftKey && !i && (i = r, r = 0), (i || r) && e.deltaMode && (1 === e.deltaMode ? (i *= 40, r *= 40) : (i *= 800, r *= 800)), i && !t && (t = i < 1 ? -1 : 1), r && !n && (n = r < 1 ? -1 : 1), {
                    spinX: t,
                    spinY: n,
                    pixelX: i,
                    pixelY: r
                }
            },
            handleMouseEnter: function() {
                this.enabled && (this.mouseEntered = !0)
            },
            handleMouseLeave: function() {
                this.enabled && (this.mouseEntered = !1)
            },
            handle: function(e) {
                var t = e,
                    n = this;
                if (n.enabled) {
                    var i = n.params.mousewheel;
                    n.params.cssMode && t.preventDefault();
                    var r = n.$el;
                    if ("container" !== n.params.mousewheel.eventsTarget && (r = C(n.params.mousewheel.eventsTarget)), !n.mouseEntered && !r[0].contains(t.target) && !i.releaseOnEdges) return !0;
                    t.originalEvent && (t = t.originalEvent);
                    var a = 0,
                        s = n.rtlTranslate ? -1 : 1,
                        r = W.normalize(t);
                    if (i.forceToAxis)
                        if (n.isHorizontal()) {
                            if (!(Math.abs(r.pixelX) > Math.abs(r.pixelY))) return !0;
                            a = -r.pixelX * s
                        } else {
                            if (!(Math.abs(r.pixelY) > Math.abs(r.pixelX))) return !0;
                            a = -r.pixelY
                        }
                    else a = Math.abs(r.pixelX) > Math.abs(r.pixelY) ? -r.pixelX * s : -r.pixelY;
                    if (0 === a) return !0;
                    i.invert && (a = -a);
                    s = n.getTranslate() + a * i.sensitivity;
                    if (s >= n.minTranslate() && (s = n.minTranslate()), s <= n.maxTranslate() && (s = n.maxTranslate()), (!!n.params.loop || !(s === n.minTranslate() || s === n.maxTranslate())) && n.params.nested && t.stopPropagation(), n.params.freeMode) {
                        var o = {
                                time: k(),
                                delta: Math.abs(a),
                                direction: Math.sign(a)
                            },
                            r = n.mousewheel.lastEventBeforeSnap,
                            s = r && o.time < r.time + 500 && o.delta <= r.delta && o.direction === r.direction;
                        if (!s) {
                            n.mousewheel.lastEventBeforeSnap = void 0, n.params.loop && n.loopFix();
                            var l, d, u = n.getTranslate() + a * i.sensitivity,
                                r = n.isBeginning,
                                i = n.isEnd;
                            if (u >= n.minTranslate() && (u = n.minTranslate()), u <= n.maxTranslate() && (u = n.maxTranslate()), n.setTransition(0), n.setTranslate(u), n.updateProgress(), n.updateActiveIndex(), n.updateSlidesClasses(), (!r && n.isBeginning || !i && n.isEnd) && n.updateSlidesClasses(), n.params.freeModeSticky && (clearTimeout(n.mousewheel.timeout), n.mousewheel.timeout = void 0, 15 <= (l = n.mousewheel.recentWheelEvents).length && l.shift(), r = l.length ? l[l.length - 1] : void 0, i = l[0], l.push(o), r && (o.delta > r.delta || o.direction !== r.direction) ? l.splice(0) : 15 <= l.length && o.time - i.time < 500 && 1 <= i.delta - o.delta && o.delta <= 6 && (d = 0 < a ? .8 : .2, n.mousewheel.lastEventBeforeSnap = o, l.splice(0), n.mousewheel.timeout = S(function() {
                                    n.slideToClosest(n.params.speed, !0, void 0, d)
                                }, 0)), n.mousewheel.timeout || (n.mousewheel.timeout = S(function() {
                                    n.mousewheel.lastEventBeforeSnap = o, l.splice(0), n.slideToClosest(n.params.speed, !0, void 0, .5)
                                }, 500))), s || n.emit("scroll", t), n.params.autoplay && n.params.autoplayDisableOnInteraction && n.autoplay.stop(), u === n.minTranslate() || u === n.maxTranslate()) return !0
                        }
                    } else {
                        u = {
                            time: k(),
                            delta: Math.abs(a),
                            direction: Math.sign(a),
                            raw: e
                        }, a = n.mousewheel.recentWheelEvents;
                        2 <= a.length && a.shift();
                        e = a.length ? a[a.length - 1] : void 0;
                        if (a.push(u), (!e || u.direction !== e.direction || u.delta > e.delta || u.time > e.time + 150) && n.mousewheel.animateSlider(u), n.mousewheel.releaseScroll(u)) return !0
                    }
                    return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
                }
            },
            animateSlider: function(e) {
                var t = this,
                    n = w();
                return !(this.params.mousewheel.thresholdDelta && e.delta < this.params.mousewheel.thresholdDelta) && (!(this.params.mousewheel.thresholdTime && k() - t.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) && (6 <= e.delta && k() - t.mousewheel.lastScrollTime < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), t.emit("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), t.emit("scroll", e.raw)), t.mousewheel.lastScrollTime = (new n.Date).getTime(), !1)))
            },
            releaseScroll: function(e) {
                var t = this.params.mousewheel;
                if (e.direction < 0) {
                    if (this.isEnd && !this.params.loop && t.releaseOnEdges) return !0
                } else if (this.isBeginning && !this.params.loop && t.releaseOnEdges) return !0;
                return !1
            },
            enable: function() {
                var e = this,
                    t = W.event();
                if (e.params.cssMode) return e.wrapperEl.removeEventListener(t, e.mousewheel.handle), !0;
                if (!t) return !1;
                if (e.mousewheel.enabled) return !1;
                var n = e.$el;
                return "container" !== e.params.mousewheel.eventsTarget && (n = C(e.params.mousewheel.eventsTarget)), n.on("mouseenter", e.mousewheel.handleMouseEnter), n.on("mouseleave", e.mousewheel.handleMouseLeave), n.on(t, e.mousewheel.handle), e.mousewheel.enabled = !0
            },
            disable: function() {
                var e = W.event();
                if (this.params.cssMode) return this.wrapperEl.addEventListener(e, this.mousewheel.handle), !0;
                if (!e) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarget && (t = C(this.params.mousewheel.eventsTarget)), t.off(e, this.mousewheel.handle), !(this.mousewheel.enabled = !1)
            }
        },
        G = {
            toggleEl: function(e, t) {
                e[t ? "addClass" : "removeClass"](this.params.navigation.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = t)
            },
            update: function() {
                var e, t, n = this,
                    i = n.params.navigation,
                    r = n.navigation.toggleEl;
                n.params.loop || (e = (t = n.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (n.isBeginning ? r(t, !0) : r(t, !1), n.params.watchOverflow && n.enabled && t[n.isLocked ? "addClass" : "removeClass"](i.lockClass)), e && 0 < e.length && (n.isEnd ? r(e, !0) : r(e, !1), n.params.watchOverflow && n.enabled && e[n.isLocked ? "addClass" : "removeClass"](i.lockClass)))
            },
            onPrevClick: function(e) {
                e.preventDefault(), this.isBeginning && !this.params.loop || this.slidePrev()
            },
            onNextClick: function(e) {
                e.preventDefault(), this.isEnd && !this.params.loop || this.slideNext()
            },
            init: function() {
                var e, t, n = this,
                    i = n.params.navigation;
                n.params.navigation = T(n.$el, n.params.navigation, n.params.createElements, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), (i.nextEl || i.prevEl) && (i.nextEl && (e = C(i.nextEl), n.params.uniqueNavElements && "string" == typeof i.nextEl && 1 < e.length && 1 === n.$el.find(i.nextEl).length && (e = n.$el.find(i.nextEl))), i.prevEl && (t = C(i.prevEl), n.params.uniqueNavElements && "string" == typeof i.prevEl && 1 < t.length && 1 === n.$el.find(i.prevEl).length && (t = n.$el.find(i.prevEl))), e && 0 < e.length && e.on("click", n.navigation.onNextClick), t && 0 < t.length && t.on("click", n.navigation.onPrevClick), Y(n.navigation, {
                    $nextEl: e,
                    nextEl: e && e[0],
                    $prevEl: t,
                    prevEl: t && t[0]
                }), n.enabled || (e && e.addClass(i.lockClass), t && t.addClass(i.lockClass)))
            },
            destroy: function() {
                var e = this.navigation,
                    t = e.$nextEl,
                    e = e.$prevEl;
                t && t.length && (t.off("click", this.navigation.onNextClick), t.removeClass(this.params.navigation.disabledClass)), e && e.length && (e.off("click", this.navigation.onPrevClick), e.removeClass(this.params.navigation.disabledClass))
            }
        },
        _ = {
            update: function() {
                var e = this,
                    t = e.rtl,
                    n = e.params.pagination;
                if (n.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var i, r = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length,
                        a = e.pagination.$el,
                        s = e.params.loop ? Math.ceil((r - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                    if (e.params.loop ? ((i = Math.ceil((e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup)) > r - 1 - 2 * e.loopedSlides && (i -= r - 2 * e.loopedSlides), s - 1 < i && (i -= s), i < 0 && "bullets" !== e.params.paginationType && (i = s + i)) : i = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0, "bullets" === n.type && e.pagination.bullets && 0 < e.pagination.bullets.length) {
                        var o, l, d, u, c, p = e.pagination.bullets;
                        if (n.dynamicBullets && (e.pagination.bulletSize = p.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(e.isHorizontal() ? "width" : "height", e.pagination.bulletSize * (n.dynamicMainBullets + 4) + "px"), 1 < n.dynamicMainBullets && void 0 !== e.previousIndex && (e.pagination.dynamicBulletIndex += i - e.previousIndex, e.pagination.dynamicBulletIndex > n.dynamicMainBullets - 1 ? e.pagination.dynamicBulletIndex = n.dynamicMainBullets - 1 : e.pagination.dynamicBulletIndex < 0 && (e.pagination.dynamicBulletIndex = 0)), o = i - e.pagination.dynamicBulletIndex, d = ((l = o + (Math.min(p.length, n.dynamicMainBullets) - 1)) + o) / 2), p.removeClass(n.bulletActiveClass + " " + n.bulletActiveClass + "-next " + n.bulletActiveClass + "-next-next " + n.bulletActiveClass + "-prev " + n.bulletActiveClass + "-prev-prev " + n.bulletActiveClass + "-main"), 1 < a.length) p.each(function(e) {
                            var t = C(e),
                                e = t.index();
                            e === i && t.addClass(n.bulletActiveClass), n.dynamicBullets && (o <= e && e <= l && t.addClass(n.bulletActiveClass + "-main"), e === o && t.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), e === l && t.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next"))
                        });
                        else {
                            var h = p.eq(i),
                                f = h.index();
                            if (h.addClass(n.bulletActiveClass), n.dynamicBullets) {
                                for (var r = p.eq(o), h = p.eq(l), m = o; m <= l; m += 1) p.eq(m).addClass(n.bulletActiveClass + "-main");
                                if (e.params.loop)
                                    if (f >= p.length - n.dynamicMainBullets) {
                                        for (var v = n.dynamicMainBullets; 0 <= v; --v) p.eq(p.length - v).addClass(n.bulletActiveClass + "-main");
                                        p.eq(p.length - n.dynamicMainBullets - 1).addClass(n.bulletActiveClass + "-prev")
                                    } else r.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), h.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next");
                                else r.prev().addClass(n.bulletActiveClass + "-prev").prev().addClass(n.bulletActiveClass + "-prev-prev"), h.next().addClass(n.bulletActiveClass + "-next").next().addClass(n.bulletActiveClass + "-next-next")
                            }
                        }
                        n.dynamicBullets && (c = Math.min(p.length, n.dynamicMainBullets + 4), u = (e.pagination.bulletSize * c - e.pagination.bulletSize) / 2 - d * e.pagination.bulletSize, c = t ? "right" : "left", p.css(e.isHorizontal() ? c : "top", u + "px"))
                    }
                    "fraction" === n.type && (a.find(E(n.currentClass)).text(n.formatFractionCurrent(i + 1)), a.find(E(n.totalClass)).text(n.formatFractionTotal(s))), "progressbar" === n.type && (d = n.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical", t = (i + 1) / s, u = c = 1, "horizontal" === d ? c = t : u = t, a.find(E(n.progressbarFillClass)).transform("translate3d(0,0,0) scaleX(" + c + ") scaleY(" + u + ")").transition(e.params.speed)), "custom" === n.type && n.renderCustom ? (a.html(n.renderCustom(e, i + 1, s)), e.emit("paginationRender", a[0])) : e.emit("paginationUpdate", a[0]), e.params.watchOverflow && e.enabled && a[e.isLocked ? "addClass" : "removeClass"](n.lockClass)
                }
            },
            render: function() {
                var e = this,
                    t = e.params.pagination;
                if (t.el && e.pagination.el && e.pagination.$el && 0 !== e.pagination.$el.length) {
                    var n = (e.virtual && e.params.virtual.enabled ? e.virtual : e).slides.length,
                        i = e.pagination.$el,
                        r = "";
                    if ("bullets" === t.type) {
                        var a = e.params.loop ? Math.ceil((n - 2 * e.loopedSlides) / e.params.slidesPerGroup) : e.snapGrid.length;
                        e.params.freeMode && !e.params.loop && n < a && (a = n);
                        for (var s = 0; s < a; s += 1) t.renderBullet ? r += t.renderBullet.call(e, s, t.bulletClass) : r += "<" + t.bulletElement + ' class="' + t.bulletClass + '"></' + t.bulletElement + ">";
                        i.html(r), e.pagination.bullets = i.find(E(t.bulletClass))
                    }
                    "fraction" === t.type && (r = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : '<span class="' + t.currentClass + '"></span> / <span class="' + t.totalClass + '"></span>', i.html(r)), "progressbar" === t.type && (r = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : '<span class="' + t.progressbarFillClass + '"></span>', i.html(r)), "custom" !== t.type && e.emit("paginationRender", e.pagination.$el[0])
                }
            },
            init: function() {
                var t = this;
                t.params.pagination = T(t.$el, t.params.pagination, t.params.createElements, {
                    el: "swiper-pagination"
                });
                var e, n = t.params.pagination;
                !n.el || 0 !== (e = C(n.el)).length && (t.params.uniqueNavElements && "string" == typeof n.el && 1 < e.length && (e = t.$el.find(n.el)), "bullets" === n.type && n.clickable && e.addClass(n.clickableClass), e.addClass(n.modifierClass + n.type), "bullets" === n.type && n.dynamicBullets && (e.addClass("" + n.modifierClass + n.type + "-dynamic"), t.pagination.dynamicBulletIndex = 0, n.dynamicMainBullets < 1 && (n.dynamicMainBullets = 1)), "progressbar" === n.type && n.progressbarOpposite && e.addClass(n.progressbarOppositeClass), n.clickable && e.on("click", E(n.bulletClass), function(e) {
                    e.preventDefault();
                    e = C(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (e += t.loopedSlides), t.slideTo(e)
                }), Y(t.pagination, {
                    $el: e,
                    el: e[0]
                }), t.enabled || e.addClass(n.lockClass))
            },
            destroy: function() {
                var e, t = this.params.pagination;
                t.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length && ((e = this.pagination.$el).removeClass(t.hiddenClass), e.removeClass(t.modifierClass + t.type), this.pagination.bullets && this.pagination.bullets.removeClass(t.bulletActiveClass), t.clickable && e.off("click", E(t.bulletClass)))
            }
        },
        X = {
            setTranslate: function() {
                var e, t, n, i, r, a, s, o;
                this.params.scrollbar.el && this.scrollbar.el && (s = this.scrollbar, e = this.rtlTranslate, o = this.progress, t = s.dragSize, n = s.trackSize, i = s.$dragEl, r = s.$el, a = this.params.scrollbar, o = (n - (s = t)) * o, e ? 0 < (o = -o) ? (s = t - o, o = 0) : n < -o + t && (s = n + o) : o < 0 ? (s = t + o, o = 0) : n < o + t && (s = n - o), this.isHorizontal() ? (i.transform("translate3d(" + o + "px, 0, 0)"), i[0].style.width = s + "px") : (i.transform("translate3d(0px, " + o + "px, 0)"), i[0].style.height = s + "px"), a.hide && (clearTimeout(this.scrollbar.timeout), r[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function() {
                    r[0].style.opacity = 0, r.transition(400)
                }, 1e3)))
            },
            setTransition: function(e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            },
            updateSize: function() {
                var e, t, n, i, r, a, s, o = this;
                o.params.scrollbar.el && o.scrollbar.el && (t = (e = o.scrollbar).$dragEl, n = e.$el, t[0].style.width = "", t[0].style.height = "", i = o.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, a = (r = o.size / o.virtualSize) * (i / o.size), s = "auto" === o.params.scrollbar.dragSize ? i * r : parseInt(o.params.scrollbar.dragSize, 10), o.isHorizontal() ? t[0].style.width = s + "px" : t[0].style.height = s + "px", n[0].style.display = 1 <= r ? "none" : "", o.params.scrollbar.hide && (n[0].style.opacity = 0), Y(e, {
                    trackSize: i,
                    divider: r,
                    moveDivider: a,
                    dragSize: s
                }), o.params.watchOverflow && o.enabled && e.$el[o.isLocked ? "addClass" : "removeClass"](o.params.scrollbar.lockClass))
            },
            getPointerPosition: function(e) {
                return this.isHorizontal() ? ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientX : ("touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0] : e).clientY
            },
            setDragPosition: function(e) {
                var t = this,
                    n = t.scrollbar,
                    i = t.rtlTranslate,
                    r = n.$el,
                    a = n.dragSize,
                    s = n.trackSize,
                    o = n.dragStartPos,
                    a = (n.getPointerPosition(e) - r.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : a / 2)) / (s - a);
                a = Math.max(Math.min(a, 1), 0), i && (a = 1 - a);
                a = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                t.updateProgress(a), t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses()
            },
            onDragStart: function(e) {
                var t = this,
                    n = t.params.scrollbar,
                    i = t.scrollbar,
                    r = t.$wrapperEl,
                    a = i.$el,
                    s = i.$dragEl;
                t.scrollbar.isTouched = !0, t.scrollbar.dragStartPos = e.target === s[0] || e.target === s ? i.getPointerPosition(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), r.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(t.scrollbar.dragTimeout), a.transition(0), n.hide && a.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), t.emit("scrollbarDragStart", e)
            },
            onDragMove: function(e) {
                var t = this.scrollbar,
                    n = this.$wrapperEl,
                    i = t.$el,
                    r = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), n.transition(0), i.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
            },
            onDragEnd: function(e) {
                var t = this,
                    n = t.params.scrollbar,
                    i = t.scrollbar,
                    r = t.$wrapperEl,
                    a = i.$el;
                t.scrollbar.isTouched && (t.scrollbar.isTouched = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), r.transition("")), n.hide && (clearTimeout(t.scrollbar.dragTimeout), t.scrollbar.dragTimeout = S(function() {
                    a.css("opacity", 0), a.transition(400)
                }, 1e3)), t.emit("scrollbarDragEnd", e), n.snapOnRelease && t.slideToClosest())
            },
            enableDraggable: function() {
                var e, t, n, i, r, a, s, o = this;
                o.params.scrollbar.el && (e = b(), a = o.scrollbar, t = o.touchEventsTouch, n = o.touchEventsDesktop, s = o.params, i = o.support, r = a.$el[0], a = !(!i.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, s = !(!i.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, r && (i.touch ? (r.addEventListener(t.start, o.scrollbar.onDragStart, a), r.addEventListener(t.move, o.scrollbar.onDragMove, a), r.addEventListener(t.end, o.scrollbar.onDragEnd, s)) : (r.addEventListener(n.start, o.scrollbar.onDragStart, a), e.addEventListener(n.move, o.scrollbar.onDragMove, a), e.addEventListener(n.end, o.scrollbar.onDragEnd, s))))
            },
            disableDraggable: function() {
                var e, t, n, i, r, a, s, o = this;
                o.params.scrollbar.el && (e = b(), a = o.scrollbar, t = o.touchEventsTouch, n = o.touchEventsDesktop, s = o.params, i = o.support, r = a.$el[0], a = !(!i.passiveListener || !s.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, s = !(!i.passiveListener || !s.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, r && (i.touch ? (r.removeEventListener(t.start, o.scrollbar.onDragStart, a), r.removeEventListener(t.move, o.scrollbar.onDragMove, a), r.removeEventListener(t.end, o.scrollbar.onDragEnd, s)) : (r.removeEventListener(n.start, o.scrollbar.onDragStart, a), e.removeEventListener(n.move, o.scrollbar.onDragMove, a), e.removeEventListener(n.end, o.scrollbar.onDragEnd, s))))
            },
            init: function() {
                var e = this,
                    t = e.scrollbar,
                    n = e.$el;
                e.params.scrollbar = T(n, e.params.scrollbar, e.params.createElements, {
                    el: "swiper-scrollbar"
                });
                var i, r = e.params.scrollbar;
                r.el && (i = C(r.el), e.params.uniqueNavElements && "string" == typeof r.el && 1 < i.length && 1 === n.find(r.el).length && (i = n.find(r.el)), 0 === (n = i.find("." + e.params.scrollbar.dragClass)).length && (n = C('<div class="' + e.params.scrollbar.dragClass + '"></div>'), i.append(n)), Y(t, {
                    $el: i,
                    el: i[0],
                    $dragEl: n,
                    dragEl: n[0]
                }), r.draggable && t.enableDraggable(), i && i[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass))
            },
            destroy: function() {
                this.scrollbar.disableDraggable()
            }
        },
        V = {
            setTransform: function(e, t) {
                var n = this.rtl,
                    i = C(e),
                    r = n ? -1 : 1,
                    a = i.attr("data-swiper-parallax") || "0",
                    s = i.attr("data-swiper-parallax-x"),
                    o = i.attr("data-swiper-parallax-y"),
                    e = i.attr("data-swiper-parallax-scale"),
                    n = i.attr("data-swiper-parallax-opacity");
                s || o ? (s = s || "0", o = o || "0") : this.isHorizontal() ? (s = a, o = "0") : (o = a, s = "0"), s = 0 <= s.indexOf("%") ? parseInt(s, 10) * t * r + "%" : s * t * r + "px", o = 0 <= o.indexOf("%") ? parseInt(o, 10) * t + "%" : o * t + "px", null != n && (n = n - (n - 1) * (1 - Math.abs(t)), i[0].style.opacity = n), null == e ? i.transform("translate3d(" + s + ", " + o + ", 0px)") : (t = e - (e - 1) * (1 - Math.abs(t)), i.transform("translate3d(" + s + ", " + o + ", 0px) scale(" + t + ")"))
            },
            setTranslate: function() {
                var i = this,
                    e = i.$el,
                    t = i.slides,
                    r = i.progress,
                    a = i.snapGrid;
                e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                    i.parallax.setTransform(e, r)
                }), t.each(function(e, t) {
                    var n = e.progress;
                    1 < i.params.slidesPerGroup && "auto" !== i.params.slidesPerView && (n += Math.ceil(t / 2) - r * (a.length - 1)), n = Math.min(Math.max(n, -1), 1), C(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                        i.parallax.setTransform(e, n)
                    })
                })
            },
            setTransition: function(n) {
                void 0 === n && (n = this.params.speed);
                this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(function(e) {
                    var t = C(e),
                        e = parseInt(t.attr("data-swiper-parallax-duration"), 10) || n;
                    0 === n && (e = 0), t.transition(e)
                })
            }
        },
        U = {
            getDistanceBetweenTouches: function(e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX,
                    n = e.targetTouches[0].pageY,
                    i = e.targetTouches[1].pageX,
                    e = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(i - t, 2) + Math.pow(e - n, 2))
            },
            onGestureStart: function(e) {
                var t = this.support,
                    n = this.params.zoom,
                    i = this.zoom,
                    r = i.gesture;
                if (i.fakeGestureTouched = !1, i.fakeGestureMoved = !1, !t.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureTouched = !0, r.scaleStart = U.getDistanceBetweenTouches(e)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = C(e.target).closest("." + this.params.slideClass), 0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), r.$imageWrapEl = r.$imageEl.parent("." + n.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl && r.$imageEl.transition(0), this.zoom.isScaling = !0) : r.$imageEl = void 0
            },
            onGestureChange: function(e) {
                var t = this.support,
                    n = this.params.zoom,
                    i = this.zoom,
                    r = i.gesture;
                if (!t.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, r.scaleMove = U.getDistanceBetweenTouches(e)
                }
                r.$imageEl && 0 !== r.$imageEl.length ? (t.gestures ? i.scale = e.scale * i.currentScale : i.scale = r.scaleMove / r.scaleStart * i.currentScale, i.scale > r.maxRatio && (i.scale = r.maxRatio - 1 + Math.pow(i.scale - r.maxRatio + 1, .5)), i.scale < n.minRatio && (i.scale = n.minRatio + 1 - Math.pow(n.minRatio - i.scale + 1, .5)), r.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")")) : "gesturechange" === e.type && i.onGestureStart(e)
            },
            onGestureEnd: function(e) {
                var t = this.device,
                    n = this.support,
                    i = this.params.zoom,
                    r = this.zoom,
                    a = r.gesture;
                if (!n.gestures) {
                    if (!r.fakeGestureTouched || !r.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !t.android) return;
                    r.fakeGestureTouched = !1, r.fakeGestureMoved = !1
                }
                a.$imageEl && 0 !== a.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, a.maxRatio), i.minRatio), a.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + r.scale + ")"), r.currentScale = r.scale, r.isScaling = !1, 1 === r.scale && (a.$slideEl = void 0))
            },
            onTouchStart: function(e) {
                var t = this.device,
                    n = this.zoom,
                    i = n.gesture,
                    n = n.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (t.android && e.cancelable && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = ("touchstart" === e.type ? e.targetTouches[0] : e).pageX, n.touchesStart.y = ("touchstart" === e.type ? e.targetTouches[0] : e).pageY))
            },
            onTouchMove: function(e) {
                var t = this.zoom,
                    n = t.gesture,
                    i = t.image,
                    r = t.velocity;
                if (n.$imageEl && 0 !== n.$imageEl.length && (this.allowClick = !1, i.isTouched && n.$slideEl)) {
                    i.isMoved || (i.width = n.$imageEl[0].offsetWidth, i.height = n.$imageEl[0].offsetHeight, i.startX = g(n.$imageWrapEl[0], "x") || 0, i.startY = g(n.$imageWrapEl[0], "y") || 0, n.slideWidth = n.$slideEl[0].offsetWidth, n.slideHeight = n.$slideEl[0].offsetHeight, n.$imageWrapEl.transition(0));
                    var a = i.width * t.scale,
                        s = i.height * t.scale;
                    if (!(a < n.slideWidth && s < n.slideHeight)) {
                        if (i.minX = Math.min(n.slideWidth / 2 - a / 2, 0), i.maxX = -i.minX, i.minY = Math.min(n.slideHeight / 2 - s / 2, 0), i.maxY = -i.minY, i.touchesCurrent.x = ("touchmove" === e.type ? e.targetTouches[0] : e).pageX, i.touchesCurrent.y = ("touchmove" === e.type ? e.targetTouches[0] : e).pageY, !i.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(i.minX) === Math.floor(i.startX) && i.touchesCurrent.x < i.touchesStart.x || Math.floor(i.maxX) === Math.floor(i.startX) && i.touchesCurrent.x > i.touchesStart.x)) return void(i.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(i.minY) === Math.floor(i.startY) && i.touchesCurrent.y < i.touchesStart.y || Math.floor(i.maxY) === Math.floor(i.startY) && i.touchesCurrent.y > i.touchesStart.y)) return void(i.isTouched = !1)
                        }
                        e.cancelable && e.preventDefault(), e.stopPropagation(), i.isMoved = !0, i.currentX = i.touchesCurrent.x - i.touchesStart.x + i.startX, i.currentY = i.touchesCurrent.y - i.touchesStart.y + i.startY, i.currentX < i.minX && (i.currentX = i.minX + 1 - Math.pow(i.minX - i.currentX + 1, .8)), i.currentX > i.maxX && (i.currentX = i.maxX - 1 + Math.pow(i.currentX - i.maxX + 1, .8)), i.currentY < i.minY && (i.currentY = i.minY + 1 - Math.pow(i.minY - i.currentY + 1, .8)), i.currentY > i.maxY && (i.currentY = i.maxY - 1 + Math.pow(i.currentY - i.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = i.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = i.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (i.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (i.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(i.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(i.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = i.touchesCurrent.x, r.prevPositionY = i.touchesCurrent.y, r.prevTime = Date.now(), n.$imageWrapEl.transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                    }
                }
            },
            onTouchEnd: function() {
                var e = this.zoom,
                    t = e.gesture,
                    n = e.image,
                    i = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!n.isTouched || !n.isMoved) return n.isTouched = !1, void(n.isMoved = !1);
                    n.isTouched = !1, n.isMoved = !1;
                    var r = 300,
                        a = 300,
                        s = i.x * r,
                        o = n.currentX + s,
                        s = i.y * a,
                        s = n.currentY + s;
                    0 !== i.x && (r = Math.abs((o - n.currentX) / i.x)), 0 !== i.y && (a = Math.abs((s - n.currentY) / i.y));
                    a = Math.max(r, a);
                    n.currentX = o, n.currentY = s;
                    s = n.width * e.scale, e = n.height * e.scale;
                    n.minX = Math.min(t.slideWidth / 2 - s / 2, 0), n.maxX = -n.minX, n.minY = Math.min(t.slideHeight / 2 - e / 2, 0), n.maxY = -n.minY, n.currentX = Math.max(Math.min(n.currentX, n.maxX), n.minX), n.currentY = Math.max(Math.min(n.currentY, n.maxY), n.minY), t.$imageWrapEl.transition(a).transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                }
            },
            onTransitionEnd: function() {
                var e = this.zoom,
                    t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl && t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl && t.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, e.currentScale = 1, t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0)
            },
            toggle: function(e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t.in(e)
            },
            in: function(e) {
                var t, n, i, r = this,
                    a = w(),
                    s = r.zoom,
                    o = r.params.zoom,
                    l = s.gesture,
                    d = s.image;
                l.$slideEl || (e && e.target && (l.$slideEl = C(e.target).closest("." + r.params.slideClass)), l.$slideEl || (r.params.virtual && r.params.virtual.enabled && r.virtual ? l.$slideEl = r.$wrapperEl.children("." + r.params.slideActiveClass) : l.$slideEl = r.slides.eq(r.activeIndex)), l.$imageEl = l.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), l.$imageWrapEl = l.$imageEl.parent("." + o.containerClass)), l.$imageEl && 0 !== l.$imageEl.length && l.$imageWrapEl && 0 !== l.$imageWrapEl.length && (l.$slideEl.addClass("" + o.zoomedSlideClass), d = void 0 === d.touchesStart.x && e ? (t = ("touchend" === e.type ? e.changedTouches[0] : e).pageX, ("touchend" === e.type ? e.changedTouches[0] : e).pageY) : (t = d.touchesStart.x, d.touchesStart.y), s.scale = l.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, s.currentScale = l.$imageWrapEl.attr("data-swiper-zoom") || o.maxRatio, e ? (o = l.$slideEl[0].offsetWidth, e = l.$slideEl[0].offsetHeight, n = l.$slideEl.offset().left + a.scrollX + o / 2 - t, i = l.$slideEl.offset().top + a.scrollY + e / 2 - d, a = l.$imageEl[0].offsetWidth, d = l.$imageEl[0].offsetHeight, a = a * s.scale, d = d * s.scale, a = -(o = Math.min(o / 2 - a / 2, 0)), d = -(e = Math.min(e / 2 - d / 2, 0)), (n = n * s.scale) < o && (n = o), a < n && (n = a), (i = i * s.scale) < e && (i = e), d < i && (i = d)) : i = n = 0, l.$imageWrapEl.transition(300).transform("translate3d(" + n + "px, " + i + "px,0)"), l.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + s.scale + ")"))
            },
            out: function() {
                var e = this.zoom,
                    t = this.params.zoom,
                    n = e.gesture;
                n.$slideEl || (this.params.virtual && this.params.virtual.enabled && this.virtual ? n.$slideEl = this.$wrapperEl.children("." + this.params.slideActiveClass) : n.$slideEl = this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas, picture, .swiper-zoom-target"), n.$imageWrapEl = n.$imageEl.parent("." + t.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && n.$imageWrapEl && 0 !== n.$imageWrapEl.length && (e.scale = 1, e.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + t.zoomedSlideClass), n.$slideEl = void 0)
            },
            toggleGestures: function(e) {
                var t = this.zoom,
                    n = t.slideSelector,
                    i = t.passiveListener;
                this.$wrapperEl[e]("gesturestart", n, t.onGestureStart, i), this.$wrapperEl[e]("gesturechange", n, t.onGestureChange, i), this.$wrapperEl[e]("gestureend", n, t.onGestureEnd, i)
            },
            enableGestures: function() {
                this.zoom.gesturesEnabled || (this.zoom.gesturesEnabled = !0, this.zoom.toggleGestures("on"))
            },
            disableGestures: function() {
                this.zoom.gesturesEnabled && (this.zoom.gesturesEnabled = !1, this.zoom.toggleGestures("off"))
            },
            enable: function() {
                var e, t, n, i = this,
                    r = i.support,
                    a = i.zoom;
                a.enabled || (a.enabled = !0, e = !("touchstart" !== i.touchEvents.start || !r.passiveListener || !i.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, t = !r.passiveListener || {
                    passive: !1,
                    capture: !0
                }, n = "." + i.params.slideClass, i.zoom.passiveListener = e, i.zoom.slideSelector = n, r.gestures ? (i.$wrapperEl.on(i.touchEvents.start, i.zoom.enableGestures, e), i.$wrapperEl.on(i.touchEvents.end, i.zoom.disableGestures, e)) : "touchstart" === i.touchEvents.start && (i.$wrapperEl.on(i.touchEvents.start, n, a.onGestureStart, e), i.$wrapperEl.on(i.touchEvents.move, n, a.onGestureChange, t), i.$wrapperEl.on(i.touchEvents.end, n, a.onGestureEnd, e), i.touchEvents.cancel && i.$wrapperEl.on(i.touchEvents.cancel, n, a.onGestureEnd, e)), i.$wrapperEl.on(i.touchEvents.move, "." + i.params.zoom.containerClass, a.onTouchMove, t))
            },
            disable: function() {
                var e, t, n, i, r = this,
                    a = r.zoom;
                a.enabled && (e = r.support, r.zoom.enabled = !1, t = !("touchstart" !== r.touchEvents.start || !e.passiveListener || !r.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                }, n = !e.passiveListener || {
                    passive: !1,
                    capture: !0
                }, i = "." + r.params.slideClass, e.gestures ? (r.$wrapperEl.off(r.touchEvents.start, r.zoom.enableGestures, t), r.$wrapperEl.off(r.touchEvents.end, r.zoom.disableGestures, t)) : "touchstart" === r.touchEvents.start && (r.$wrapperEl.off(r.touchEvents.start, i, a.onGestureStart, t), r.$wrapperEl.off(r.touchEvents.move, i, a.onGestureChange, n), r.$wrapperEl.off(r.touchEvents.end, i, a.onGestureEnd, t), r.touchEvents.cancel && r.$wrapperEl.off(r.touchEvents.cancel, i, a.onGestureEnd, t)), r.$wrapperEl.off(r.touchEvents.move, "." + r.params.zoom.containerClass, a.onTouchMove, n))
            }
        },
        K = {
            loadInSlide: function(e, l) {
                void 0 === l && (l = !0);
                var d, u = this,
                    c = u.params.lazy;
                void 0 !== e && 0 !== u.slides.length && (e = (d = u.virtual && u.params.virtual.enabled ? u.$wrapperEl.children("." + u.params.slideClass + '[data-swiper-slide-index="' + e + '"]') : u.slides.eq(e)).find("." + c.elementClass + ":not(." + c.loadedClass + "):not(." + c.loadingClass + ")"), !d.hasClass(c.elementClass) || d.hasClass(c.loadedClass) || d.hasClass(c.loadingClass) || e.push(d[0]), 0 !== e.length && e.each(function(e) {
                    var n = C(e);
                    n.addClass(c.loadingClass);
                    var i = n.attr("data-background"),
                        r = n.attr("data-src"),
                        a = n.attr("data-srcset"),
                        s = n.attr("data-sizes"),
                        o = n.parent("picture");
                    u.loadImage(n[0], r || i, a, s, !1, function() {
                        var e, t;
                        null == u || !u || u && !u.params || u.destroyed || (i ? (n.css("background-image", 'url("' + i + '")'), n.removeAttr("data-background")) : (a && (n.attr("srcset", a), n.removeAttr("data-srcset")), s && (n.attr("sizes", s), n.removeAttr("data-sizes")), o.length && o.children("source").each(function(e) {
                            e = C(e);
                            e.attr("data-srcset") && (e.attr("srcset", e.attr("data-srcset")), e.removeAttr("data-srcset"))
                        }), r && (n.attr("src", r), n.removeAttr("data-src"))), n.addClass(c.loadedClass).removeClass(c.loadingClass), d.find("." + c.preloaderClass).remove(), u.params.loop && l && (t = d.attr("data-swiper-slide-index"), d.hasClass(u.params.slideDuplicateClass) ? (e = u.$wrapperEl.children('[data-swiper-slide-index="' + t + '"]:not(.' + u.params.slideDuplicateClass + ")"), u.lazy.loadInSlide(e.index(), !1)) : (t = u.$wrapperEl.children("." + u.params.slideDuplicateClass + '[data-swiper-slide-index="' + t + '"]'), u.lazy.loadInSlide(t.index(), !1))), u.emit("lazyImageReady", d[0], n[0]), u.params.autoHeight && u.updateAutoHeight())
                    }), u.emit("lazyImageLoad", d[0], n[0])
                }))
            },
            load: function() {
                var t = this,
                    n = t.$wrapperEl,
                    i = t.params,
                    r = t.slides,
                    e = t.activeIndex,
                    a = t.virtual && i.virtual.enabled,
                    s = i.lazy,
                    o = i.slidesPerView;

                function l(e) {
                    if (a) {
                        if (n.children("." + i.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return 1
                    } else if (r[e]) return 1
                }

                function d(e) {
                    return a ? C(e).attr("data-swiper-slide-index") : C(e).index()
                }
                if ("auto" === o && (o = 0), t.lazy.initialImageLoaded || (t.lazy.initialImageLoaded = !0), t.params.watchSlidesVisibility) n.children("." + i.slideVisibleClass).each(function(e) {
                    e = a ? C(e).attr("data-swiper-slide-index") : C(e).index();
                    t.lazy.loadInSlide(e)
                });
                else if (1 < o)
                    for (var u = e; u < e + o; u += 1) l(u) && t.lazy.loadInSlide(u);
                else t.lazy.loadInSlide(e);
                if (s.loadPrevNext)
                    if (1 < o || s.loadPrevNextAmount && 1 < s.loadPrevNextAmount) {
                        for (var c = s.loadPrevNextAmount, s = o, p = Math.min(e + s + Math.max(c, s), r.length), c = Math.max(e - Math.max(s, c), 0), h = e + o; h < p; h += 1) l(h) && t.lazy.loadInSlide(h);
                        for (var f = c; f < e; f += 1) l(f) && t.lazy.loadInSlide(f)
                    } else {
                        c = n.children("." + i.slideNextClass);
                        0 < c.length && t.lazy.loadInSlide(d(c));
                        c = n.children("." + i.slidePrevClass);
                        0 < c.length && t.lazy.loadInSlide(d(c))
                    }
            },
            checkInViewOnLoad: function() {
                var e = w(),
                    t = this;
                if (t && !t.destroyed) {
                    var n = t.params.lazy.scrollingElement ? C(t.params.lazy.scrollingElement) : C(e),
                        i = n[0] === e,
                        r = i ? e.innerWidth : n[0].offsetWidth,
                        a = i ? e.innerHeight : n[0].offsetHeight,
                        e = t.$el.offset(),
                        s = !1;
                    t.rtlTranslate && (e.left -= t.$el[0].scrollLeft);
                    for (var o = [
                            [e.left, e.top],
                            [e.left + t.width, e.top],
                            [e.left, e.top + t.height],
                            [e.left + t.width, e.top + t.height]
                        ], l = 0; l < o.length; l += 1) {
                        var d = o[l];
                        0 <= d[0] && d[0] <= r && 0 <= d[1] && d[1] <= a && (0 === d[0] && 0 === d[1] || (s = !0))
                    }
                    e = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    s ? (t.lazy.load(), n.off("scroll", t.lazy.checkInViewOnLoad, e)) : t.lazy.scrollHandlerAttached || (t.lazy.scrollHandlerAttached = !0, n.on("scroll", t.lazy.checkInViewOnLoad, e))
                }
            }
        },
        Q = {
            LinearSpline: function(e, t) {
                var n, i, r, a, s, o = function(e, t) {
                    for (i = -1, n = e.length; 1 < n - i;) e[r = n + i >> 1] <= t ? i = r : n = r;
                    return n
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (s = o(this.x, e), a = s - 1, (e - this.x[a]) * (this.y[s] - this.y[a]) / (this.x[s] - this.x[a]) + this.y[a]) : 0
                }, this
            },
            getInterpolateFunction: function(e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new Q.LinearSpline(this.slidesGrid, e.slidesGrid) : new Q.LinearSpline(this.snapGrid, e.snapGrid))
            },
            setTranslate: function(e, t) {
                var n, i, r = this,
                    a = r.controller.control,
                    s = r.constructor;

                function o(e) {
                    var t = r.rtlTranslate ? -r.translate : r.translate;
                    "slide" === r.params.controller.by && (r.controller.getInterpolateFunction(e), i = -r.controller.spline.interpolate(-t)), i && "container" !== r.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (r.maxTranslate() - r.minTranslate()), i = (t - r.minTranslate()) * n + e.minTranslate()), r.params.controller.inverse && (i = e.maxTranslate() - i), e.updateProgress(i), e.setTranslate(i, r), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                if (Array.isArray(a))
                    for (var l = 0; l < a.length; l += 1) a[l] !== t && a[l] instanceof s && o(a[l]);
                else a instanceof s && t !== a && o(a)
            },
            setTransition: function(t, e) {
                var n, i = this,
                    r = i.constructor,
                    a = i.controller.control;

                function s(e) {
                    e.setTransition(t, i), 0 !== t && (e.transitionStart(), e.params.autoHeight && S(function() {
                        e.updateAutoHeight()
                    }), e.$wrapperEl.transitionEnd(function() {
                        a && (e.params.loop && "slide" === i.params.controller.by && e.loopFix(), e.transitionEnd())
                    }))
                }
                if (Array.isArray(a))
                    for (n = 0; n < a.length; n += 1) a[n] !== e && a[n] instanceof r && s(a[n]);
                else a instanceof r && e !== a && s(a)
            }
        },
        J = {
            getRandomNumber: function(e) {
                void 0 === e && (e = 16);
                return "x".repeat(e).replace(/x/g, function() {
                    return Math.round(16 * Math.random()).toString(16)
                })
            },
            makeElFocusable: function(e) {
                return e.attr("tabIndex", "0"), e
            },
            makeElNotFocusable: function(e) {
                return e.attr("tabIndex", "-1"), e
            },
            addElRole: function(e, t) {
                return e.attr("role", t), e
            },
            addElRoleDescription: function(e, t) {
                return e.attr("aria-roledescription", t), e
            },
            addElControls: function(e, t) {
                return e.attr("aria-controls", t), e
            },
            addElLabel: function(e, t) {
                return e.attr("aria-label", t), e
            },
            addElId: function(e, t) {
                return e.attr("id", t), e
            },
            addElLive: function(e, t) {
                return e.attr("aria-live", t), e
            },
            disableEl: function(e) {
                return e.attr("aria-disabled", !0), e
            },
            enableEl: function(e) {
                return e.attr("aria-disabled", !1), e
            },
            onEnterOrSpaceKey: function(e) {
                var t, n;
                13 !== e.keyCode && 32 !== e.keyCode || (n = (t = this).params.a11y, e = C(e.target), t.navigation && t.navigation.$nextEl && e.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? t.a11y.notify(n.lastSlideMessage) : t.a11y.notify(n.nextSlideMessage)), t.navigation && t.navigation.$prevEl && e.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? t.a11y.notify(n.firstSlideMessage) : t.a11y.notify(n.prevSlideMessage)), t.pagination && e.is(E(t.params.pagination.bulletClass)) && e[0].click())
            },
            notify: function(e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            },
            updateNavigation: function() {
                var e, t, n = this;
                !n.params.loop && n.navigation && (e = (t = n.navigation).$nextEl, (t = t.$prevEl) && 0 < t.length && (n.isBeginning ? (n.a11y.disableEl(t), n.a11y.makeElNotFocusable(t)) : (n.a11y.enableEl(t), n.a11y.makeElFocusable(t))), e && 0 < e.length && (n.isEnd ? (n.a11y.disableEl(e), n.a11y.makeElNotFocusable(e)) : (n.a11y.enableEl(e), n.a11y.makeElFocusable(e))))
            },
            updatePagination: function() {
                var t = this,
                    n = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function(e) {
                    e = C(e);
                    t.a11y.makeElFocusable(e), t.params.pagination.renderBullet || (t.a11y.addElRole(e, "button"), t.a11y.addElLabel(e, n.paginationBulletMessage.replace(/\{\{index\}\}/, e.index() + 1)))
                })
            },
            init: function() {
                var n = this,
                    i = n.params.a11y;
                n.$el.append(n.a11y.liveRegion);
                var e = n.$el;
                i.containerRoleDescriptionMessage && n.a11y.addElRoleDescription(e, i.containerRoleDescriptionMessage), i.containerMessage && n.a11y.addElLabel(e, i.containerMessage);
                var t = n.$wrapperEl,
                    r = t.attr("id") || "swiper-wrapper-" + n.a11y.getRandomNumber(16),
                    e = n.params.autoplay && n.params.autoplay.enabled ? "off" : "polite";
                n.a11y.addElId(t, r), n.a11y.addElLive(t, e), i.itemRoleDescriptionMessage && n.a11y.addElRoleDescription(C(n.slides), i.itemRoleDescriptionMessage), n.a11y.addElRole(C(n.slides), i.slideRole);
                var a, s, o = (n.params.loop ? n.slides.filter(function(e) {
                    return !e.classList.contains(n.params.slideDuplicateClass)
                }) : n.slides).length;
                n.slides.each(function(e, t) {
                    e = C(e), t = n.params.loop ? parseInt(e.attr("data-swiper-slide-index"), 10) : t, t = i.slideLabelMessage.replace(/\{\{index\}\}/, t + 1).replace(/\{\{slidesLength\}\}/, o);
                    n.a11y.addElLabel(e, t)
                }), n.navigation && n.navigation.$nextEl && (a = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (s = n.navigation.$prevEl), a && a.length && (n.a11y.makeElFocusable(a), "BUTTON" !== a[0].tagName && (n.a11y.addElRole(a, "button"), a.on("keydown", n.a11y.onEnterOrSpaceKey)), n.a11y.addElLabel(a, i.nextSlideMessage), n.a11y.addElControls(a, r)), s && s.length && (n.a11y.makeElFocusable(s), "BUTTON" !== s[0].tagName && (n.a11y.addElRole(s, "button"), s.on("keydown", n.a11y.onEnterOrSpaceKey)), n.a11y.addElLabel(s, i.prevSlideMessage), n.a11y.addElControls(s, r)), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.on("keydown", E(n.params.pagination.bulletClass), n.a11y.onEnterOrSpaceKey)
            },
            destroy: function() {
                var e, t, n = this;
                n.a11y.liveRegion && 0 < n.a11y.liveRegion.length && n.a11y.liveRegion.remove(), n.navigation && n.navigation.$nextEl && (e = n.navigation.$nextEl), n.navigation && n.navigation.$prevEl && (t = n.navigation.$prevEl), e && e.off("keydown", n.a11y.onEnterOrSpaceKey), t && t.off("keydown", n.a11y.onEnterOrSpaceKey), n.pagination && n.params.pagination.clickable && n.pagination.bullets && n.pagination.bullets.length && n.pagination.$el.off("keydown", E(n.params.pagination.bulletClass), n.a11y.onEnterOrSpaceKey)
            }
        },
        Z = {
            init: function() {
                var e = w();
                if (this.params.history) {
                    if (!e.history || !e.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var t = this.history;
                    t.initialized = !0, t.paths = Z.getPathValues(this.params.url), (t.paths.key || t.paths.value) && (t.scrollToSlide(0, t.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || e.addEventListener("popstate", this.history.setHistoryPopState))
                }
            },
            destroy: function() {
                var e = w();
                this.params.history.replaceState || e.removeEventListener("popstate", this.history.setHistoryPopState)
            },
            setHistoryPopState: function() {
                this.history.paths = Z.getPathValues(this.params.url), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            },
            getPathValues: function(e) {
                var t = w(),
                    e = e ? new URL(e) : t.location,
                    t = e.pathname.slice(1).split("/").filter(function(e) {
                        return "" !== e
                    }),
                    e = t.length;
                return {
                    key: t[e - 2],
                    value: t[e - 1]
                }
            },
            setHistory: function(e, t) {
                var n, i, r = w();
                this.history.initialized && this.params.history.enabled && (n = this.params.url ? new URL(this.params.url) : r.location, i = this.slides.eq(t), t = Z.slugify(i.attr("data-history")), 0 < this.params.history.root.length ? ("/" === (i = this.params.history.root)[i.length - 1] && (i = i.slice(0, i.length - 1)), t = i + "/" + e + "/" + t) : n.pathname.includes(e) || (t = e + "/" + t), (e = r.history.state) && e.value === t || (this.params.history.replaceState ? r.history.replaceState({
                    value: t
                }, null, t) : r.history.pushState({
                    value: t
                }, null, t)))
            },
            slugify: function(e) {
                return e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            },
            scrollToSlide: function(e, t, n) {
                if (t)
                    for (var i = 0, r = this.slides.length; i < r; i += 1) {
                        var a = this.slides.eq(i);
                        Z.slugify(a.attr("data-history")) !== t || a.hasClass(this.params.slideDuplicateClass) || (a = a.index(), this.slideTo(a, e, n))
                    } else this.slideTo(0, e, n)
            }
        },
        ee = {
            onHashChange: function() {
                var e = b();
                this.emit("hashChange");
                e = e.location.hash.replace("#", "");
                e === this.slides.eq(this.activeIndex).attr("data-hash") || void 0 !== (e = this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index()) && this.slideTo(e)
            },
            setHash: function() {
                var e = w(),
                    t = b();
                this.hashNavigation.initialized && this.params.hashNavigation.enabled && (this.params.hashNavigation.replaceState && e.history && e.history.replaceState ? e.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || "") : (e = (e = this.slides.eq(this.activeIndex)).attr("data-hash") || e.attr("data-history"), t.location.hash = e || ""), this.emit("hashSet"))
            },
            init: function() {
                var e = this,
                    t = b(),
                    n = w();
                if (!(!e.params.hashNavigation.enabled || e.params.history && e.params.history.enabled)) {
                    e.hashNavigation.initialized = !0;
                    var i = t.location.hash.replace("#", "");
                    if (i)
                        for (var r = 0, a = e.slides.length; r < a; r += 1) {
                            var s = e.slides.eq(r);
                            (s.attr("data-hash") || s.attr("data-history")) !== i || s.hasClass(e.params.slideDuplicateClass) || (s = s.index(), e.slideTo(s, 0, e.params.runCallbacksOnInit, !0))
                        }
                    e.params.hashNavigation.watchState && C(n).on("hashchange", e.hashNavigation.onHashChange)
                }
            },
            destroy: function() {
                var e = w();
                this.params.hashNavigation.watchState && C(e).off("hashchange", this.hashNavigation.onHashChange)
            }
        },
        te = {
            run: function() {
                var t = this,
                    e = t.slides.eq(t.activeIndex),
                    n = t.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || t.params.autoplay.delay), clearTimeout(t.autoplay.timeout), t.autoplay.timeout = S(function() {
                    var e;
                    t.params.autoplay.reverseDirection ? t.params.loop ? (t.loopFix(), e = t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.isBeginning ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(t.slides.length - 1, t.params.speed, !0, !0), t.emit("autoplay")) : (e = t.slidePrev(t.params.speed, !0, !0), t.emit("autoplay")) : t.params.loop ? (t.loopFix(), e = t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")) : t.isEnd ? t.params.autoplay.stopOnLastSlide ? t.autoplay.stop() : (e = t.slideTo(0, t.params.speed, !0, !0), t.emit("autoplay")) : (e = t.slideNext(t.params.speed, !0, !0), t.emit("autoplay")), (t.params.cssMode && t.autoplay.running || !1 === e) && t.autoplay.run()
                }, n)
            },
            start: function() {
                return void 0 === this.autoplay.timeout && (!this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0))
            },
            stop: function() {
                return !!this.autoplay.running && (void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0))
            },
            pause: function(e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].addEventListener(e, t.autoplay.onTransitionEnd)
                }) : (t.autoplay.paused = !1, t.autoplay.run())))
            },
            onVisibilityChange: function() {
                var e = b();
                "hidden" === e.visibilityState && this.autoplay.running && this.autoplay.pause(), "visible" === e.visibilityState && this.autoplay.paused && (this.autoplay.run(), this.autoplay.paused = !1)
            },
            onTransitionEnd: function(e) {
                var t = this;
                t && !t.destroyed && t.$wrapperEl && e.target === t.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
                }), t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
            },
            onMouseEnter: function() {
                var t = this;
                t.params.autoplay.disableOnInteraction ? t.autoplay.stop() : t.autoplay.pause(), ["transitionend", "webkitTransitionEnd"].forEach(function(e) {
                    t.$wrapperEl[0].removeEventListener(e, t.autoplay.onTransitionEnd)
                })
            },
            onMouseLeave: function() {
                this.params.autoplay.disableOnInteraction || (this.autoplay.paused = !1, this.autoplay.run())
            },
            attachMouseEvents: function() {
                this.params.autoplay.pauseOnMouseEnter && (this.$el.on("mouseenter", this.autoplay.onMouseEnter), this.$el.on("mouseleave", this.autoplay.onMouseLeave))
            },
            detachMouseEvents: function() {
                this.$el.off("mouseenter", this.autoplay.onMouseEnter), this.$el.off("mouseleave", this.autoplay.onMouseLeave)
            }
        },
        ne = {
            setTranslate: function() {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var n = this.slides.eq(t),
                        i = -n[0].swiperSlideOffset;
                    this.params.virtualTranslate || (i -= this.translate);
                    var r = 0;
                    this.isHorizontal() || (r = i, i = 0);
                    var a = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(n[0].progress), 0) : 1 + Math.min(Math.max(n[0].progress, -1), 0);
                    n.css({
                        opacity: a
                    }).transform("translate3d(" + i + "px, " + r + "px, 0px)")
                }
            },
            setTransition: function(e) {
                var n, i = this,
                    t = i.slides,
                    r = i.$wrapperEl;
                t.transition(e), i.params.virtualTranslate && 0 !== e && (n = !1, t.transitionEnd(function() {
                    if (!n && i && !i.destroyed) {
                        n = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) r.trigger(e[t])
                    }
                }))
            }
        },
        ie = {
            setTranslate: function() {
                var e, t = this,
                    n = t.$el,
                    i = t.$wrapperEl,
                    r = t.slides,
                    a = t.width,
                    s = t.height,
                    o = t.rtlTranslate,
                    l = t.size,
                    d = t.browser,
                    u = t.params.cubeEffect,
                    c = t.isHorizontal(),
                    p = t.virtual && t.params.virtual.enabled,
                    h = 0;
                u.shadow && (c ? (0 === (e = i.find(".swiper-cube-shadow")).length && (e = C('<div class="swiper-cube-shadow"></div>'), i.append(e)), e.css({
                    height: a + "px"
                })) : 0 === (e = n.find(".swiper-cube-shadow")).length && (e = C('<div class="swiper-cube-shadow"></div>'), n.append(e)));
                for (var f, m = 0; m < r.length; m += 1) {
                    var v = r.eq(m),
                        g = m;
                    p && (g = parseInt(v.attr("data-swiper-slide-index"), 10));
                    var y = 90 * g,
                        b = Math.floor(y / 360);
                    o && (y = -y, b = Math.floor(-y / 360));
                    var w = Math.max(Math.min(v[0].progress, 1), -1),
                        x = 0,
                        E = 0,
                        T = 0;
                    g % 4 == 0 ? (x = 4 * -b * l, T = 0) : (g - 1) % 4 == 0 ? (x = 0, T = 4 * -b * l) : (g - 2) % 4 == 0 ? (x = l + 4 * b * l, T = l) : (g - 3) % 4 == 0 && (x = -l, T = 3 * l + 4 * l * b), o && (x = -x), c || (E = x, x = 0);
                    T = "rotateX(" + (c ? 0 : -y) + "deg) rotateY(" + (c ? y : 0) + "deg) translate3d(" + x + "px, " + E + "px, " + T + "px)";
                    w <= 1 && -1 < w && (h = o ? 90 * -g - 90 * w : 90 * g + 90 * w), v.transform(T), u.slideShadows && (g = c ? v.find(".swiper-slide-shadow-left") : v.find(".swiper-slide-shadow-top"), T = c ? v.find(".swiper-slide-shadow-right") : v.find(".swiper-slide-shadow-bottom"), 0 === g.length && (g = C('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), v.append(g)), 0 === T.length && (T = C('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), v.append(T)), g.length && (g[0].style.opacity = Math.max(-w, 0)), T.length && (T[0].style.opacity = Math.max(w, 0)))
                }
                i.css({
                    "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                    "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                    "transform-origin": "50% 50% -" + l / 2 + "px"
                }), u.shadow && (c ? e.transform("translate3d(0px, " + (a / 2 + u.shadowOffset) + "px, " + -a / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")") : (f = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90), n = 1.5 - (Math.sin(2 * f * Math.PI / 360) / 2 + Math.cos(2 * f * Math.PI / 360) / 2), a = u.shadowScale, f = u.shadowScale / n, n = u.shadowOffset, e.transform("scale3d(" + a + ", 1, " + f + ") translate3d(0px, " + (s / 2 + n) + "px, " + -s / 2 / f + "px) rotateX(-90deg)")));
                d = d.isSafari || d.isWebView ? -l / 2 : 0;
                i.transform("translate3d(0px,0," + d + "px) rotateX(" + (t.isHorizontal() ? 0 : h) + "deg) rotateY(" + (t.isHorizontal() ? -h : 0) + "deg)")
            },
            setTransition: function(e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        },
        re = {
            setTranslate: function() {
                for (var e = this.slides, t = this.rtlTranslate, n = 0; n < e.length; n += 1) {
                    var i = e.eq(n),
                        r = i[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(i[0].progress, 1), -1));
                    var a, s, o = -180 * r,
                        l = 0,
                        d = -i[0].swiperSlideOffset,
                        u = 0;
                    this.isHorizontal() ? t && (o = -o) : (u = d, l = -o, o = d = 0), i[0].style.zIndex = -Math.abs(Math.round(r)) + e.length, this.params.flipEffect.slideShadows && (a = this.isHorizontal() ? i.find(".swiper-slide-shadow-left") : i.find(".swiper-slide-shadow-top"), s = this.isHorizontal() ? i.find(".swiper-slide-shadow-right") : i.find(".swiper-slide-shadow-bottom"), 0 === a.length && (a = C('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), i.append(a)), 0 === s.length && (s = C('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), i.append(s)), a.length && (a[0].style.opacity = Math.max(-r, 0)), s.length && (s[0].style.opacity = Math.max(r, 0))), i.transform("translate3d(" + d + "px, " + u + "px, 0px) rotateX(" + l + "deg) rotateY(" + o + "deg)")
                }
            },
            setTransition: function(e) {
                var n, i = this,
                    t = i.slides,
                    r = i.activeIndex,
                    a = i.$wrapperEl;
                t.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), i.params.virtualTranslate && 0 !== e && (n = !1, t.eq(r).transitionEnd(function() {
                    if (!n && i && !i.destroyed) {
                        n = !0, i.animating = !1;
                        for (var e = ["webkitTransitionEnd", "transitionend"], t = 0; t < e.length; t += 1) a.trigger(e[t])
                    }
                }))
            }
        },
        ae = {
            setTranslate: function() {
                for (var e = this.width, t = this.height, n = this.slides, i = this.slidesSizesGrid, r = this.params.coverflowEffect, a = this.isHorizontal(), s = this.translate, o = a ? e / 2 - s : t / 2 - s, l = a ? r.rotate : -r.rotate, d = r.depth, u = 0, c = n.length; u < c; u += 1) {
                    var p = n.eq(u),
                        h = i[u],
                        f = (o - p[0].swiperSlideOffset - h / 2) / h * r.modifier,
                        m = a ? l * f : 0,
                        v = a ? 0 : l * f,
                        g = -d * Math.abs(f),
                        y = r.stretch;
                    "string" == typeof y && -1 !== y.indexOf("%") && (y = parseFloat(r.stretch) / 100 * h);
                    var b = a ? 0 : y * f,
                        h = a ? y * f : 0,
                        y = 1 - (1 - r.scale) * Math.abs(f);
                    Math.abs(h) < .001 && (h = 0), Math.abs(b) < .001 && (b = 0), Math.abs(g) < .001 && (g = 0), Math.abs(m) < .001 && (m = 0), Math.abs(v) < .001 && (v = 0), Math.abs(y) < .001 && (y = 0);
                    m = "translate3d(" + h + "px," + b + "px," + g + "px)  rotateX(" + v + "deg) rotateY(" + m + "deg) scale(" + y + ")";
                    p.transform(m), p[0].style.zIndex = 1 - Math.abs(Math.round(f)), r.slideShadows && (y = a ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"), m = a ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom"), 0 === y.length && (y = C('<div class="swiper-slide-shadow-' + (a ? "left" : "top") + '"></div>'), p.append(y)), 0 === m.length && (m = C('<div class="swiper-slide-shadow-' + (a ? "right" : "bottom") + '"></div>'), p.append(m)), y.length && (y[0].style.opacity = 0 < f ? f : 0), m.length && (m[0].style.opacity = 0 < -f ? -f : 0))
                }
            },
            setTransition: function(e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        },
        se = {
            init: function() {
                var e = this,
                    t = e.params.thumbs;
                if (e.thumbs.initialized) return !1;
                e.thumbs.initialized = !0;
                var n = e.constructor;
                return t.swiper instanceof n ? (e.thumbs.swiper = t.swiper, Y(e.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Y(e.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })) : y(t.swiper) && (e.thumbs.swiper = new n(Y({}, t.swiper, {
                    watchSlidesVisibility: !0,
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                })), e.thumbs.swiperCreated = !0), e.thumbs.swiper.$el.addClass(e.params.thumbs.thumbsContainerClass), e.thumbs.swiper.on("tap", e.thumbs.onThumbClick), !0
            },
            onThumbClick: function() {
                var e, t, n, i = this,
                    r = i.thumbs.swiper;
                r && (t = r.clickedIndex, (e = r.clickedSlide) && C(e).hasClass(i.params.thumbs.slideThumbActiveClass) || null != t && (n = r.params.loop ? parseInt(C(r.clickedSlide).attr("data-swiper-slide-index"), 10) : t, i.params.loop && (e = i.activeIndex, i.slides.eq(e).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, e = i.activeIndex), r = i.slides.eq(e).prevAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(), t = i.slides.eq(e).nextAll('[data-swiper-slide-index="' + n + '"]').eq(0).index(), n = void 0 === r || void 0 !== t && t - e < e - r ? t : r), i.slideTo(n)))
            },
            update: function(e) {
                var t = this,
                    n = t.thumbs.swiper;
                if (n) {
                    var i, r, a, s = "auto" === n.params.slidesPerView ? n.slidesPerViewDynamic() : n.params.slidesPerView,
                        o = t.params.thumbs.autoScrollOffset,
                        l = o && !n.params.loop;
                    t.realIndex === n.realIndex && !l || (i = n.activeIndex, a = n.params.loop ? (n.slides.eq(i).hasClass(n.params.slideDuplicateClass) && (n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft, i = n.activeIndex), a = n.slides.eq(i).prevAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), r = n.slides.eq(i).nextAll('[data-swiper-slide-index="' + t.realIndex + '"]').eq(0).index(), r = void 0 === a ? r : void 0 === r ? a : r - i == i - a ? 1 < n.params.slidesPerGroup ? r : i : r - i < i - a ? r : a, t.activeIndex > t.previousIndex ? "next" : "prev") : (r = t.realIndex) > t.previousIndex ? "next" : "prev", l && (r += "next" === a ? o : -1 * o), n.visibleSlidesIndexes && n.visibleSlidesIndexes.indexOf(r) < 0 && (n.params.centeredSlides ? r = i < r ? r - Math.floor(s / 2) + 1 : r + Math.floor(s / 2) - 1 : i < r && n.params.slidesPerGroup, n.slideTo(r, e ? 0 : void 0)));
                    var d = 1,
                        u = t.params.thumbs.slideThumbActiveClass;
                    if (1 < t.params.slidesPerView && !t.params.centeredSlides && (d = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (d = 1), d = Math.floor(d), n.slides.removeClass(u), n.params.loop || n.params.virtual && n.params.virtual.enabled)
                        for (var c = 0; c < d; c += 1) n.$wrapperEl.children('[data-swiper-slide-index="' + (t.realIndex + c) + '"]').addClass(u);
                    else
                        for (var p = 0; p < d; p += 1) n.slides.eq(t.realIndex + p).addClass(u)
                }
            }
        },
        z = [$, z, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            },
            create: function() {
                x(this, {
                    mousewheel: {
                        enabled: !1,
                        lastScrollTime: k(),
                        lastEventBeforeSnap: void 0,
                        recentWheelEvents: [],
                        enable: W.enable,
                        disable: W.disable,
                        handle: W.handle,
                        handleMouseEnter: W.handleMouseEnter,
                        handleMouseLeave: W.handleMouseLeave,
                        animateSlider: W.animateSlider,
                        releaseScroll: W.releaseScroll
                    }
                })
            },
            on: {
                init: function(e) {
                    !e.params.mousewheel.enabled && e.params.cssMode && e.mousewheel.disable(), e.params.mousewheel.enabled && e.mousewheel.enable()
                },
                destroy: function(e) {
                    e.params.cssMode && e.mousewheel.enable(), e.mousewheel.enabled && e.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function() {
                x(this, {
                    navigation: e({}, G)
                })
            },
            on: {
                init: function(e) {
                    e.navigation.init(), e.navigation.update()
                },
                toEdge: function(e) {
                    e.navigation.update()
                },
                fromEdge: function(e) {
                    e.navigation.update()
                },
                destroy: function(e) {
                    e.navigation.destroy()
                },
                "enable disable": function(e) {
                    var t = e.navigation,
                        n = t.$nextEl,
                        t = t.$prevEl;
                    n && n[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass), t && t[e.enabled ? "removeClass" : "addClass"](e.params.navigation.lockClass)
                },
                click: function(e, t) {
                    var n, i = e.navigation,
                        r = i.$nextEl,
                        i = i.$prevEl,
                        t = t.target;
                    !e.params.navigation.hideOnClick || C(t).is(i) || C(t).is(r) || e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === t || e.pagination.el.contains(t)) || (r ? n = r.hasClass(e.params.navigation.hiddenClass) : i && (n = i.hasClass(e.params.navigation.hiddenClass)), !0 === n ? e.emit("navigationShow") : e.emit("navigationHide"), r && r.toggleClass(e.params.navigation.hiddenClass), i && i.toggleClass(e.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: function(e) {
                        return e
                    },
                    formatFractionTotal: function(e) {
                        return e
                    },
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    progressbarOppositeClass: "swiper-pagination-progressbar-opposite",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function() {
                x(this, {
                    pagination: e({
                        dynamicBulletIndex: 0
                    }, _)
                })
            },
            on: {
                init: function(e) {
                    e.pagination.init(), e.pagination.render(), e.pagination.update()
                },
                activeIndexChange: function(e) {
                    (e.params.loop || void 0 === e.snapIndex) && e.pagination.update()
                },
                snapIndexChange: function(e) {
                    e.params.loop || e.pagination.update()
                },
                slidesLengthChange: function(e) {
                    e.params.loop && (e.pagination.render(), e.pagination.update())
                },
                snapGridLengthChange: function(e) {
                    e.params.loop || (e.pagination.render(), e.pagination.update())
                },
                destroy: function(e) {
                    e.pagination.destroy()
                },
                "enable disable": function(e) {
                    var t = e.pagination.$el;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.pagination.lockClass)
                },
                click: function(e, t) {
                    t = t.target;
                    e.params.pagination.el && e.params.pagination.hideOnClick && 0 < e.pagination.$el.length && !C(t).hasClass(e.params.pagination.bulletClass) && (e.navigation && (e.navigation.nextEl && t === e.navigation.nextEl || e.navigation.prevEl && t === e.navigation.prevEl) || (!0 === e.pagination.$el.hasClass(e.params.pagination.hiddenClass) ? e.emit("paginationShow") : e.emit("paginationHide"), e.pagination.$el.toggleClass(e.params.pagination.hiddenClass)))
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            },
            create: function() {
                x(this, {
                    scrollbar: e({
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }, X)
                })
            },
            on: {
                init: function(e) {
                    e.scrollbar.init(), e.scrollbar.updateSize(), e.scrollbar.setTranslate()
                },
                update: function(e) {
                    e.scrollbar.updateSize()
                },
                resize: function(e) {
                    e.scrollbar.updateSize()
                },
                observerUpdate: function(e) {
                    e.scrollbar.updateSize()
                },
                setTranslate: function(e) {
                    e.scrollbar.setTranslate()
                },
                setTransition: function(e, t) {
                    e.scrollbar.setTransition(t)
                },
                "enable disable": function(e) {
                    var t = e.scrollbar.$el;
                    t && t[e.enabled ? "removeClass" : "addClass"](e.params.scrollbar.lockClass)
                },
                destroy: function(e) {
                    e.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax",
            params: {
                parallax: {
                    enabled: !1
                }
            },
            create: function() {
                x(this, {
                    parallax: e({}, V)
                })
            },
            on: {
                beforeInit: function(e) {
                    e.params.parallax.enabled && (e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                init: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTranslate: function(e) {
                    e.params.parallax.enabled && e.parallax.setTranslate()
                },
                setTransition: function(e, t) {
                    e.params.parallax.enabled && e.parallax.setTransition(t)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function() {
                var i = this;
                x(i, {
                    zoom: e({
                        enabled: !1,
                        scale: 1,
                        currentScale: 1,
                        isScaling: !1,
                        gesture: {
                            $slideEl: void 0,
                            slideWidth: void 0,
                            slideHeight: void 0,
                            $imageEl: void 0,
                            $imageWrapEl: void 0,
                            maxRatio: 3
                        },
                        image: {
                            isTouched: void 0,
                            isMoved: void 0,
                            currentX: void 0,
                            currentY: void 0,
                            minX: void 0,
                            minY: void 0,
                            maxX: void 0,
                            maxY: void 0,
                            width: void 0,
                            height: void 0,
                            startX: void 0,
                            startY: void 0,
                            touchesStart: {},
                            touchesCurrent: {}
                        },
                        velocity: {
                            x: void 0,
                            y: void 0,
                            prevPositionX: void 0,
                            prevPositionY: void 0,
                            prevTime: void 0
                        }
                    }, U)
                });
                var r = 1;
                Object.defineProperty(i.zoom, "scale", {
                    get: function() {
                        return r
                    },
                    set: function(e) {
                        var t, n;
                        r !== e && (t = i.zoom.gesture.$imageEl ? i.zoom.gesture.$imageEl[0] : void 0, n = i.zoom.gesture.$slideEl ? i.zoom.gesture.$slideEl[0] : void 0, i.emit("zoomChange", e, t, n)), r = e
                    }
                })
            },
            on: {
                init: function(e) {
                    e.params.zoom.enabled && e.zoom.enable()
                },
                destroy: function(e) {
                    e.zoom.disable()
                },
                touchStart: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchStart(t)
                },
                touchEnd: function(e, t) {
                    e.zoom.enabled && e.zoom.onTouchEnd(t)
                },
                doubleTap: function(e, t) {
                    !e.animating && e.params.zoom.enabled && e.zoom.enabled && e.params.zoom.toggle && e.zoom.toggle(t)
                },
                transitionEnd: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.zoom.onTransitionEnd()
                },
                slideChange: function(e) {
                    e.zoom.enabled && e.params.zoom.enabled && e.params.cssMode && e.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function() {
                x(this, {
                    lazy: e({
                        initialImageLoaded: !1
                    }, K)
                })
            },
            on: {
                beforeInit: function(e) {
                    e.params.lazy.enabled && e.params.preloadImages && (e.params.preloadImages = !1)
                },
                init: function(e) {
                    e.params.lazy.enabled && !e.params.loop && 0 === e.params.initialSlide && (e.params.lazy.checkInView ? e.lazy.checkInViewOnLoad() : e.lazy.load())
                },
                scroll: function(e) {
                    e.params.freeMode && !e.params.freeModeSticky && e.lazy.load()
                },
                "scrollbarDragMove resize _freeModeNoMomentumRelease": function(e) {
                    e.params.lazy.enabled && e.lazy.load()
                },
                transitionStart: function(e) {
                    e.params.lazy.enabled && (!e.params.lazy.loadOnTransitionStart && (e.params.lazy.loadOnTransitionStart || e.lazy.initialImageLoaded) || e.lazy.load())
                },
                transitionEnd: function(e) {
                    e.params.lazy.enabled && !e.params.lazy.loadOnTransitionStart && e.lazy.load()
                },
                slideChange: function(e) {
                    var t = e.params,
                        n = t.lazy,
                        i = t.cssMode,
                        r = t.watchSlidesVisibility,
                        a = t.watchSlidesProgress,
                        s = t.touchReleaseOnEdges,
                        t = t.resistanceRatio;
                    n.enabled && (i || (r || a) && (s || 0 === t)) && e.lazy.load()
                }
            }
        }, {
            name: "controller",
            params: {
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            },
            create: function() {
                x(this, {
                    controller: e({
                        control: this.params.controller.control
                    }, Q)
                })
            },
            on: {
                update: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                resize: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                observerUpdate: function(e) {
                    e.controller.control && e.controller.spline && (e.controller.spline = void 0, delete e.controller.spline)
                },
                setTranslate: function(e, t, n) {
                    e.controller.control && e.controller.setTranslate(t, n)
                },
                setTransition: function(e, t, n) {
                    e.controller.control && e.controller.setTransition(t, n)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group"
                }
            },
            create: function() {
                x(this, {
                    a11y: e({}, J, {
                        liveRegion: C('<span class="' + this.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')
                    })
                })
            },
            on: {
                afterInit: function(e) {
                    e.params.a11y.enabled && (e.a11y.init(), e.a11y.updateNavigation())
                },
                toEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                fromEdge: function(e) {
                    e.params.a11y.enabled && e.a11y.updateNavigation()
                },
                paginationUpdate: function(e) {
                    e.params.a11y.enabled && e.a11y.updatePagination()
                },
                destroy: function(e) {
                    e.params.a11y.enabled && e.a11y.destroy()
                }
            }
        }, {
            name: "history",
            params: {
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides"
                }
            },
            create: function() {
                x(this, {
                    history: e({}, Z)
                })
            },
            on: {
                init: function(e) {
                    e.params.history.enabled && e.history.init()
                },
                destroy: function(e) {
                    e.params.history.enabled && e.history.destroy()
                },
                "transitionEnd _freeModeNoMomentumRelease": function(e) {
                    e.history.initialized && e.history.setHistory(e.params.history.key, e.activeIndex)
                },
                slideChange: function(e) {
                    e.history.initialized && e.params.cssMode && e.history.setHistory(e.params.history.key, e.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            },
            create: function() {
                x(this, {
                    hashNavigation: e({
                        initialized: !1
                    }, ee)
                })
            },
            on: {
                init: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.init()
                },
                destroy: function(e) {
                    e.params.hashNavigation.enabled && e.hashNavigation.destroy()
                },
                "transitionEnd _freeModeNoMomentumRelease": function(e) {
                    e.hashNavigation.initialized && e.hashNavigation.setHash()
                },
                slideChange: function(e) {
                    e.hashNavigation.initialized && e.params.cssMode && e.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            },
            create: function() {
                x(this, {
                    autoplay: e({}, te, {
                        running: !1,
                        paused: !1
                    })
                })
            },
            on: {
                init: function(e) {
                    e.params.autoplay.enabled && (e.autoplay.start(), b().addEventListener("visibilitychange", e.autoplay.onVisibilityChange), e.autoplay.attachMouseEvents())
                },
                beforeTransitionStart: function(e, t, n) {
                    e.autoplay.running && (n || !e.params.autoplay.disableOnInteraction ? e.autoplay.pause(t) : e.autoplay.stop())
                },
                sliderFirstMove: function(e) {
                    e.autoplay.running && (e.params.autoplay.disableOnInteraction ? e.autoplay.stop() : e.autoplay.pause())
                },
                touchEnd: function(e) {
                    e.params.cssMode && e.autoplay.paused && !e.params.autoplay.disableOnInteraction && e.autoplay.run()
                },
                destroy: function(e) {
                    e.autoplay.detachMouseEvents(), e.autoplay.running && e.autoplay.stop(), b().removeEventListener("visibilitychange", e.autoplay.onVisibilityChange)
                }
            }
        }, {
            name: "effect-fade",
            params: {
                fadeEffect: {
                    crossFade: !1
                }
            },
            create: function() {
                x(this, {
                    fadeEffect: e({}, ne)
                })
            },
            on: {
                beforeInit: function(e) {
                    var t;
                    "fade" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "fade"), t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }, Y(e.params, t), Y(e.originalParams, t))
                },
                setTranslate: function(e) {
                    "fade" === e.params.effect && e.fadeEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "fade" === e.params.effect && e.fadeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-cube",
            params: {
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            },
            create: function() {
                x(this, {
                    cubeEffect: e({}, ie)
                })
            },
            on: {
                beforeInit: function(e) {
                    var t;
                    "cube" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "cube"), e.classNames.push(e.params.containerModifierClass + "3d"), t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    }, Y(e.params, t), Y(e.originalParams, t))
                },
                setTranslate: function(e) {
                    "cube" === e.params.effect && e.cubeEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "cube" === e.params.effect && e.cubeEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-flip",
            params: {
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0
                }
            },
            create: function() {
                x(this, {
                    flipEffect: e({}, re)
                })
            },
            on: {
                beforeInit: function(e) {
                    var t;
                    "flip" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "flip"), e.classNames.push(e.params.containerModifierClass + "3d"), t = {
                        slidesPerView: 1,
                        slidesPerColumn: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !0
                    }, Y(e.params, t), Y(e.originalParams, t))
                },
                setTranslate: function(e) {
                    "flip" === e.params.effect && e.flipEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "flip" === e.params.effect && e.flipEffect.setTransition(t)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0
                }
            },
            create: function() {
                x(this, {
                    coverflowEffect: e({}, ae)
                })
            },
            on: {
                beforeInit: function(e) {
                    "coverflow" === e.params.effect && (e.classNames.push(e.params.containerModifierClass + "coverflow"), e.classNames.push(e.params.containerModifierClass + "3d"), e.params.watchSlidesProgress = !0, e.originalParams.watchSlidesProgress = !0)
                },
                setTranslate: function(e) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTranslate()
                },
                setTransition: function(e, t) {
                    "coverflow" === e.params.effect && e.coverflowEffect.setTransition(t)
                }
            }
        }, {
            name: "thumbs",
            params: {
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-container-thumbs"
                }
            },
            create: function() {
                x(this, {
                    thumbs: e({
                        swiper: null,
                        initialized: !1
                    }, se)
                })
            },
            on: {
                beforeInit: function(e) {
                    var t = e.params.thumbs;
                    t && t.swiper && (e.thumbs.init(), e.thumbs.update(!0))
                },
                slideChange: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                update: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                resize: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                observerUpdate: function(e) {
                    e.thumbs.swiper && e.thumbs.update()
                },
                setTransition: function(e, t) {
                    e = e.thumbs.swiper;
                    e && e.setTransition(t)
                },
                beforeDestroy: function(e) {
                    var t = e.thumbs.swiper;
                    t && e.thumbs.swiperCreated && t && t.destroy()
                }
            }
        }];
    return j.use(z), j
});
var btn = {
        app: function() {
            $(document).on("click", ".btn-app", function() {
                $("div.main").addClass("opened"), $("div.wrapper").disablescroll(), $("div.main-app").addClass("opened")
            })
        },
        viewPass: function() {
            $(document).on("click", ".input .icn-view", function() {
                "password" == $(this).prev().attr("type") ? $(this).prev().attr("type", "text") : $(this).prev().attr("type", "password")
            })
        },
        closeApp: function() {
            $(document).on("click", ".box-app .btn-close", function() {
                $("div.main").removeClass("opened"), $("div.main-app").removeClass("opened"), $("div.wrapper").disablescroll("undo")
            })
        },
        closePopup: function() {
            $(document).on("click", ".popup-main .btn-close", function() {
                setCookie("popup", !1, 30), $(".popup").hide(), $(".main").removeClass("opened")
            })
        },
        closeInfo: function() {
            $(document).on("click", ".info .btn-close", function() {
                $(".info").hide(), $(".main").removeClass("opened")
            })
        },
        openInfo: function() {
            $(document).on("click", ".btn-info", function() {
                $(".info").show(), $(".main").addClass("opened")
            })
        },
        getMobileOperatingSystem: function() {
            var e = "Android",
                t = navigator.userAgent || navigator.vendor || window.opera;
            /android/i.test(t) && (e = "Android"), /iPad|iPhone|iPod/.test(t) && !window.MSStream && (e = "iOS"), "Android" == e ? $(".down-app > a").attr("href", "https://cb5chau.com/app/BENTLEY.apk") : "iOS" == e && $(".down-app > a").attr("href", "itms-services://?action=download-manifest&url=https://cb5chau.com/app/manifest.plist")
        },
        fetchCaptcha: function() {
            $("#btn-fetch-captcha").click(function() {
                $.get(apiUrl + "/api?c=124&cp=R&cl=R&pf=web", function(e, t) {
                    e = JSON.parse(e);
                    "success" == t && ($("#id_captcha").val(e.id), $("#img_captcha").attr("src", "data:image/png;base64, " + e.img))
                })
            })
        },
        btnSocial: function() {
            $("#btn-facebook").on("click", function() {
                FB.getLoginStatus(function(e) {
                    var t;
                    "connected" === e.status ? (console.log("connected:" + JSON.stringify(e)), e.authResponse.userID, t = e.authResponse.accessToken, location.href = "http://cb5chau.com/indexGame.html?at_fb=" + t) : "not_authorized" === e.status ? alert("Lỗi đăng nhập :" + e.status) : (console.log("not connected" + JSON.stringify(e)), FB.login(function(e) {
                        var t;
                        e.authResponse && (console.log("Welcome!  Fetching your information....: " + JSON.stringify(e)), t = e.authResponse.accessToken, e = e.authResponse.userID, location.href = "http://cb5chau.com/indexGame.html?at_fb=" + t + "&fb_id=" + e)
                    }, {
                        scope: "email,public_profile"
                    }))
                })
            }), $("#btn-facebook1").on("click", function() {
                console.log("btn facebook1"), FB.getLoginStatus(function(e) {
                    var t;
                    "connected" === e.status ? (console.log("connected1:" + JSON.stringify(e)), e.authResponse.userID, t = e.authResponse.accessToken, location.href = "http://cb5chau.com/indexGame.html?at_fb=" + t) : "not_authorized" === e.status ? alert("Lỗi đăng nhập :" + e.status) : (console.log("not connected1" + JSON.stringify(e)), FB.login(function(e) {
                        e.authResponse && (console.log("Welcome!  Fetching your information....: " + JSON.stringify(e)), e = e.authResponse.accessToken, location.href = "http://cb5chau.com/indexGame.html?at_fb=" + e)
                    }, {
                        scope: "email,public_profile"
                    }))
                })
            })
        }
    },
    form = {
        tab: function() {
            $(document).on("click", ".header-login", function() {
                $(".form-register").hide(), $(".form-login").show(), setCookie("tab-active", 1, 30)
            }), $(document).on("click", ".header-register", function() {
                $(".form-register").show(), $(".form-login").hide(), setCookie("tab-active", 0, 30)
            })
        },
        register: function() {
            var c = this;
            $("form#form-register").validate({
                onkeyup: function(e) {
                    $(e).valid()
                },
                onblur: function(e) {
                    $(e).valid()
                },
                rules: {
                    username: {
                        required: !0,
                        minlength: 2
                    },
                    password: {
                        required: !0,
                        minlength: 6
                    },
                    password_confirm: {
                        required: !0,
                        minlength: 6,
                        equalTo: "#password"
                    },
                //    captcha: {
                //        required: !0
                //    }
                },
                errorPlacement: function(e, t) {
                    var n = $(t).parents(".form-item-row");
                    n ? $(n).append(e) : e.insertAfter(t)
                },
                submitHandler: function(e) {
                    var t = document.getElementById("username").value,
                        n = document.getElementById("password").value,
                        i = document.getElementById("code").value,
                    //    r = document.getElementById("id_captcha").value,
                   //     a = document.getElementById("captcha").value,
                        r = "https://iportal.cb5chau.com/api?c=1&un=" + t + "&pw=" + md5(n) + "&ac=" + i + "&utm_source=WEB&utm_medium=WEB&utm_campaign=WEB&cl=WEB",
                        s = "" + c.encode("username", 3265812),
                        o = "" + c.encode(t, 3265812),
                        l = "" + c.encode("userpass", 3265812),
                        d = "" + c.encode(n, 3265812),
                        u = new XMLHttpRequest;
                    return u.onreadystatechange = function() {
                        if (4 == u.readyState && 200 == u.status) {
                            var e = JSON.parse(u.responseText);
                            if (e.success) return localStorage.setItem(s, o), localStorage.setItem(l, d), location.href = "http://cb5chau.com/indexGame.html?un=" + t + "&pw=" + n, !1;
                            switch (parseInt(e.errorCode)) {
                                case 1001:
                                    alert("Kết nối mạng không ổn định, vui lòng thử lại sau.");
                                    break;
                                case 101:
                                    alert("Tên đăng nhập không hợp lệ.");
                                    break;
                                case 1006:
                                    alert("Tài khoản đã tồn tại.");
                                    break;
                                case 102:
                                    alert("Mật khẩu không hợp lệ.");
                                    break;
                                case 108:
                                    alert("Mật khẩu không được trùng với tên đăng nhập.");
                                    break;
                                case 115:
                                    alert("Mã xác nhận không chính xác.");
                                    break;
                                case 1114:
                                    alert("Hệ thống đang bảo trì. Vui lòng quay trở lại sau!");
                                    break;
                                default:
                                    alert("Xảy ra lỗi, vui lòng thử lại sau!")
                            }
                            return $.get(apiUrl + "/api?c=124&cp=R&cl=R&pf=web", function(e, t) {
                                e = JSON.parse(e);
                                "success" == t && ($("#id_captcha").val(e.id), $("#img_captcha").attr("src", "data:image/png;base64, " + e.img))
                            }), !1
                        }
                    }, u.open("GET", r, !0), u.send(null), !1
                }
            });
            $("#password_confirm").keyup(function() {
                $(this).val() != $("#password").val() ? $(this).prev().removeClass("icn-lock-checked").addClass("icn-lock") : $(this).prev().removeClass("icn-lock").addClass("icn-lock-checked")
            }), $("#password").keyup(function() {
                var e = $(this).val();
                $("#password_confirm").val() != e ? $(this).prev().removeClass("icn-lock-checked").addClass("icn-lock") : $(this).prev().removeClass("icn-lock").addClass("icn-lock-checked")
            })
        },
        login: function() {
            var d = this;
            $("form#form-login").validate({
                rules: {
                    "username-login": {
                        required: !0,
                        minlength: 2
                    },
                    "password-login": {
                        required: !0,
                        minlength: 6
                    }
                },
                errorPlacement: function(e, t) {
                    var n = $(t).parents(".form-item-row");
                    n ? $(n).append(e) : e.insertAfter(t)
                },
                submitHandler: function(e) {
                    var t = document.getElementById("username-login").value,
                        n = document.getElementById("password-login").value,
                        i = "https://iportal.cb5chau.com/api?c=3&un=" + t + "&pw=" + md5(n) + "&cp=R&cl=R&pf=web&at=",
                        r = "" + d.encode("username", 3265812),
                        a = "" + d.encode(t, 3265812),
                        s = "" + d.encode("userpass", 3265812),
                        o = "" + d.encode(n, 3265812),
                        l = new XMLHttpRequest;
                    l.onreadystatechange = function() {
                        if (4 == l.readyState && 200 == l.status) {
                            var e = JSON.parse(l.responseText);
                            if (e.success) {
                                localStorage.setItem(r, a), localStorage.setItem(s, o);
                                var t = window.atob(e.sessionKey),
                                    t = JSON.parse(t);
                                location.href = "http://cb5chau.com/indexGame.html?un=" + t + "&pw=" + n, !1;
                            } else switch (parseInt(e.errorCode)) {
                                case 1001:
                                    alert("Mất kết nối đến Server!");
                                    break;
                                case 1005:
                                    alert("Tài khoản không tồn tại.");
                                    break;
                                case 1007:
                                    alert("Mật khẩu không chính xác.");
                                    break;
                                case 1109:
                                    alert("Tài khoản đã bị khóa.");
                                    break;
                                case 106:
                                    alert("Tên hiển thị không hợp lệ.");
                                    break;
                                case 1010:
                                case 1013:
                                    alert("Tên hiển thị đã tồn tại.");
                                    break;
                                case 1011:
                                    alert("Tên hiển thị khôn được trùng với tên đăng nhập.");
                                    break;
                                case 116:
                                    alert("Không chọn tên hiển thị nhạy cảm.");
                                    break;
                                case 1114:
                                    alert("Hệ thống đang bảo trì. Vui lòng quay trở lại sau!");
                                    break;
                                default:
                                    alert("Xảy ra lỗi, vui lòng thử lại sau!")
                            }
                        }
                    }, l.open("GET", i, !0), l.send(null)
                }
            })
        },
        encode: function(e, t) {
            for (var n = "", i = (e.toString(), 0); i < e.length; i++) {
                var r = e.charCodeAt(i) ^ t;
                n += String.fromCharCode(r)
            }
            return n
        },
        changeHeightForm: function() {
            var e = $(".form-register").height();
            $(".form-login").height(e)
        },
        popupCookie: function() {
            var e = getCookie("popup");
            "" == e && (setCookie("popup", !0, 30), $(".popup").show(), $(".main").addClass("opened")), "true" == e && ($(".popup").show(), $(".main").addClass("opened"))
        },
        getUrlParameter: function(e) {
            for (var t, n = window.location.search.substring(1).split("&"), i = 0; i < n.length; i++)
                if ((t = n[i].split("="))[0] === e) return t[1], decodeURIComponent(t[1]);
            return !1
        },
        getRefernceCode: function() {
            var e = this.getUrlParameter("refcode");
            e && ($("#code").val(e), $("#code").attr("disabled", !0))
        },
        completeCode: function() {
            $("#code").on("blur", function() {
                var e = $("#code").val(),
                    e = apiUrl + "/api?c=18&code=" + e,
                    t = new XMLHttpRequest;
                $("#loader").show(), t.onreadystatechange = function() {
                    4 == t.readyState && 200 == t.status && (JSON.parse(t.responseText).success ? (console.log("success"), $("#code-valid").removeClass("code-hidden-agent").removeClass("invalid-agent").toggleClass("valid-agent")) : (console.log("fail"), $("#code-valid").removeClass("code-hidden-agent").removeClass("valid-agent").addClass("invalid-agent")))
                }, t.open("GET", e, !0), t.send(null)
            })
        }
    },
    slider = {
        league: function() {
            new Swiper(".mySwiper", {
                direction: "vertical",
                slidesPerView: 3,
                spaceBetween: 8,
                mousewheel: !0
            })
        }
    },
    sidebar = {
        countUp: function() {
            setInterval(function() {
                $(".counter").countUp({
                    time: 5e3,
                    delay: 80
                })
            }, 5e3)
        }
    };
$(document).ready(function() {
    slider.league(), sidebar.countUp(), btn.viewPass(), btn.app(), btn.closeApp(), btn.closePopup(), btn.closeInfo(), btn.openInfo(), btn.fetchCaptcha(), btn.getMobileOperatingSystem(), btn.btnSocial(), form.popupCookie(), form.tab(), form.register(), form.login(), form.getRefernceCode(), form.completeCode(), form.changeHeightForm(), $(window).resize(function() {
        form.changeHeightForm()
    })
});
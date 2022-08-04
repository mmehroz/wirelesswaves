!(function (t) {
    var e = {};
    function i(n) {
        if (e[n]) return e[n].exports;
        var o = (e[n] = { i: n, l: !1, exports: {} });
        return t[n].call(o.exports, o, o.exports, i), (o.l = !0), o.exports;
    }
    (i.m = t),
        (i.c = e),
        (i.d = function (t, e, n) {
            i.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
        }),
        (i.n = function (t) {
            var e =
                t && t.__esModule
                    ? function () {
                          return t.default;
                      }
                    : function () {
                          return t;
                      };
            return i.d(e, "a", e), e;
        }),
        (i.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }),
        (i.p = "/"),
        i((i.s = 280));
})({
    10: function (t, e, i) {
        var n;
        !(function (e, i) {
            "use strict";
            "object" == typeof t && "object" == typeof t.exports
                ? (t.exports = e.document
                      ? i(e, !0)
                      : function (t) {
                            if (!t.document) throw new Error("jQuery requires a window with a document");
                            return i(t);
                        })
                : i(e);
        })("undefined" != typeof window ? window : this, function (i, o) {
            "use strict";
            var s = [],
                r = i.document,
                a = Object.getPrototypeOf,
                l = s.slice,
                c = s.concat,
                u = s.push,
                d = s.indexOf,
                p = {},
                h = p.toString,
                f = p.hasOwnProperty,
                g = f.toString,
                v = g.call(Object),
                m = {},
                y = function (t) {
                    return "function" == typeof t && "number" != typeof t.nodeType;
                },
                b = function (t) {
                    return null != t && t === t.window;
                },
                w = { type: !0, src: !0, noModule: !0 };
            function x(t, e, i) {
                var n,
                    o = (e = e || r).createElement("script");
                if (((o.text = t), i)) for (n in w) i[n] && (o[n] = i[n]);
                e.head.appendChild(o).parentNode.removeChild(o);
            }
            function C(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? p[h.call(t)] || "object" : typeof t;
            }
            var k = function (t, e) {
                    return new k.fn.init(t, e);
                },
                S = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
            function $(t) {
                var e = !!t && "length" in t && t.length,
                    i = C(t);
                return !y(t) && !b(t) && ("array" === i || 0 === e || ("number" == typeof e && e > 0 && e - 1 in t));
            }
            (k.fn = k.prototype = {
                jquery: "3.3.1",
                constructor: k,
                length: 0,
                toArray: function () {
                    return l.call(this);
                },
                get: function (t) {
                    return null == t ? l.call(this) : t < 0 ? this[t + this.length] : this[t];
                },
                pushStack: function (t) {
                    var e = k.merge(this.constructor(), t);
                    return (e.prevObject = this), e;
                },
                each: function (t) {
                    return k.each(this, t);
                },
                map: function (t) {
                    return this.pushStack(
                        k.map(this, function (e, i) {
                            return t.call(e, i, e);
                        })
                    );
                },
                slice: function () {
                    return this.pushStack(l.apply(this, arguments));
                },
                first: function () {
                    return this.eq(0);
                },
                last: function () {
                    return this.eq(-1);
                },
                eq: function (t) {
                    var e = this.length,
                        i = +t + (t < 0 ? e : 0);
                    return this.pushStack(i >= 0 && i < e ? [this[i]] : []);
                },
                end: function () {
                    return this.prevObject || this.constructor();
                },
                push: u,
                sort: s.sort,
                splice: s.splice,
            }),
                (k.extend = k.fn.extend = function () {
                    var t,
                        e,
                        i,
                        n,
                        o,
                        s,
                        r = arguments[0] || {},
                        a = 1,
                        l = arguments.length,
                        c = !1;
                    for ("boolean" == typeof r && ((c = r), (r = arguments[a] || {}), a++), "object" == typeof r || y(r) || (r = {}), a === l && ((r = this), a--); a < l; a++)
                        if (null != (t = arguments[a]))
                            for (e in t)
                                (i = r[e]),
                                    r !== (n = t[e]) &&
                                        (c && n && (k.isPlainObject(n) || (o = Array.isArray(n)))
                                            ? (o ? ((o = !1), (s = i && Array.isArray(i) ? i : [])) : (s = i && k.isPlainObject(i) ? i : {}), (r[e] = k.extend(c, s, n)))
                                            : void 0 !== n && (r[e] = n));
                    return r;
                }),
                k.extend({
                    expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
                    isReady: !0,
                    error: function (t) {
                        throw new Error(t);
                    },
                    noop: function () {},
                    isPlainObject: function (t) {
                        var e, i;
                        return !(!t || "[object Object]" !== h.call(t)) && (!(e = a(t)) || ("function" == typeof (i = f.call(e, "constructor") && e.constructor) && g.call(i) === v));
                    },
                    isEmptyObject: function (t) {
                        var e;
                        for (e in t) return !1;
                        return !0;
                    },
                    globalEval: function (t) {
                        x(t);
                    },
                    each: function (t, e) {
                        var i,
                            n = 0;
                        if ($(t)) for (i = t.length; n < i && !1 !== e.call(t[n], n, t[n]); n++);
                        else for (n in t) if (!1 === e.call(t[n], n, t[n])) break;
                        return t;
                    },
                    trim: function (t) {
                        return null == t ? "" : (t + "").replace(S, "");
                    },
                    makeArray: function (t, e) {
                        var i = e || [];
                        return null != t && ($(Object(t)) ? k.merge(i, "string" == typeof t ? [t] : t) : u.call(i, t)), i;
                    },
                    inArray: function (t, e, i) {
                        return null == e ? -1 : d.call(e, t, i);
                    },
                    merge: function (t, e) {
                        for (var i = +e.length, n = 0, o = t.length; n < i; n++) t[o++] = e[n];
                        return (t.length = o), t;
                    },
                    grep: function (t, e, i) {
                        for (var n = [], o = 0, s = t.length, r = !i; o < s; o++) !e(t[o], o) !== r && n.push(t[o]);
                        return n;
                    },
                    map: function (t, e, i) {
                        var n,
                            o,
                            s = 0,
                            r = [];
                        if ($(t)) for (n = t.length; s < n; s++) null != (o = e(t[s], s, i)) && r.push(o);
                        else for (s in t) null != (o = e(t[s], s, i)) && r.push(o);
                        return c.apply([], r);
                    },
                    guid: 1,
                    support: m,
                }),
                "function" == typeof Symbol && (k.fn[Symbol.iterator] = s[Symbol.iterator]),
                k.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
                    p["[object " + e + "]"] = e.toLowerCase();
                });
            var T = (function (t) {
                var e,
                    i,
                    n,
                    o,
                    s,
                    r,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h,
                    f,
                    g,
                    v,
                    m,
                    y,
                    b,
                    w = "sizzle" + 1 * new Date(),
                    x = t.document,
                    C = 0,
                    k = 0,
                    S = rt(),
                    $ = rt(),
                    T = rt(),
                    E = function (t, e) {
                        return t === e && (d = !0), 0;
                    },
                    O = {}.hasOwnProperty,
                    A = [],
                    D = A.pop,
                    I = A.push,
                    P = A.push,
                    N = A.slice,
                    L = function (t, e) {
                        for (var i = 0, n = t.length; i < n; i++) if (t[i] === e) return i;
                        return -1;
                    },
                    j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    H = "[\\x20\\t\\r\\n\\f]",
                    z = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    _ = "\\[" + H + "*(" + z + ")(?:" + H + "*([*^$|!~]?=)" + H + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + z + "))|)" + H + "*\\]",
                    F = ":(" + z + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + _ + ")*)|.*)\\)|)",
                    M = new RegExp(H + "+", "g"),
                    R = new RegExp("^" + H + "+|((?:^|[^\\\\])(?:\\\\.)*)" + H + "+$", "g"),
                    q = new RegExp("^" + H + "*," + H + "*"),
                    B = new RegExp("^" + H + "*([>+~]|" + H + ")" + H + "*"),
                    U = new RegExp("=" + H + "*([^\\]'\"]*?)" + H + "*\\]", "g"),
                    W = new RegExp(F),
                    V = new RegExp("^" + z + "$"),
                    Q = {
                        ID: new RegExp("^#(" + z + ")"),
                        CLASS: new RegExp("^\\.(" + z + ")"),
                        TAG: new RegExp("^(" + z + "|[*])"),
                        ATTR: new RegExp("^" + _),
                        PSEUDO: new RegExp("^" + F),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + H + "*(even|odd|(([+-]|)(\\d*)n|)" + H + "*(?:([+-]|)" + H + "*(\\d+)|))" + H + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + j + ")$", "i"),
                        needsContext: new RegExp("^" + H + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + H + "*((?:-\\d)?\\d*)" + H + "*\\)|)(?=[^-]|$)", "i"),
                    },
                    X = /^(?:input|select|textarea|button)$/i,
                    Y = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    G = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    J = /[+~]/,
                    Z = new RegExp("\\\\([\\da-f]{1,6}" + H + "?|(" + H + ")|.)", "ig"),
                    tt = function (t, e, i) {
                        var n = "0x" + e - 65536;
                        return n != n || i ? e : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
                    },
                    et = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                    it = function (t, e) {
                        return e ? ("\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " ") : "\\" + t;
                    },
                    nt = function () {
                        p();
                    },
                    ot = yt(
                        function (t) {
                            return !0 === t.disabled && ("form" in t || "label" in t);
                        },
                        { dir: "parentNode", next: "legend" }
                    );
                try {
                    P.apply((A = N.call(x.childNodes)), x.childNodes), A[x.childNodes.length].nodeType;
                } catch (t) {
                    P = {
                        apply: A.length
                            ? function (t, e) {
                                  I.apply(t, N.call(e));
                              }
                            : function (t, e) {
                                  for (var i = t.length, n = 0; (t[i++] = e[n++]); );
                                  t.length = i - 1;
                              },
                    };
                }
                function st(t, e, n, o) {
                    var s,
                        a,
                        c,
                        u,
                        d,
                        f,
                        m,
                        y = e && e.ownerDocument,
                        C = e ? e.nodeType : 9;
                    if (((n = n || []), "string" != typeof t || !t || (1 !== C && 9 !== C && 11 !== C))) return n;
                    if (!o && ((e ? e.ownerDocument || e : x) !== h && p(e), (e = e || h), g)) {
                        if (11 !== C && (d = G.exec(t)))
                            if ((s = d[1])) {
                                if (9 === C) {
                                    if (!(c = e.getElementById(s))) return n;
                                    if (c.id === s) return n.push(c), n;
                                } else if (y && (c = y.getElementById(s)) && b(e, c) && c.id === s) return n.push(c), n;
                            } else {
                                if (d[2]) return P.apply(n, e.getElementsByTagName(t)), n;
                                if ((s = d[3]) && i.getElementsByClassName && e.getElementsByClassName) return P.apply(n, e.getElementsByClassName(s)), n;
                            }
                        if (i.qsa && !T[t + " "] && (!v || !v.test(t))) {
                            if (1 !== C) (y = e), (m = t);
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((u = e.getAttribute("id")) ? (u = u.replace(et, it)) : e.setAttribute("id", (u = w)), a = (f = r(t)).length; a--; ) f[a] = "#" + u + " " + mt(f[a]);
                                (m = f.join(",")), (y = (J.test(t) && gt(e.parentNode)) || e);
                            }
                            if (m)
                                try {
                                    return P.apply(n, y.querySelectorAll(m)), n;
                                } catch (t) {
                                } finally {
                                    u === w && e.removeAttribute("id");
                                }
                        }
                    }
                    return l(t.replace(R, "$1"), e, n, o);
                }
                function rt() {
                    var t = [];
                    return function e(i, o) {
                        return t.push(i + " ") > n.cacheLength && delete e[t.shift()], (e[i + " "] = o);
                    };
                }
                function at(t) {
                    return (t[w] = !0), t;
                }
                function lt(t) {
                    var e = h.createElement("fieldset");
                    try {
                        return !!t(e);
                    } catch (t) {
                        return !1;
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), (e = null);
                    }
                }
                function ct(t, e) {
                    for (var i = t.split("|"), o = i.length; o--; ) n.attrHandle[i[o]] = e;
                }
                function ut(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (n) return n;
                    if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
                    return t ? 1 : -1;
                }
                function dt(t) {
                    return function (e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t;
                    };
                }
                function pt(t) {
                    return function (e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t;
                    };
                }
                function ht(t) {
                    return function (e) {
                        return "form" in e
                            ? e.parentNode && !1 === e.disabled
                                ? "label" in e
                                    ? "label" in e.parentNode
                                        ? e.parentNode.disabled === t
                                        : e.disabled === t
                                    : e.isDisabled === t || (e.isDisabled !== !t && ot(e) === t)
                                : e.disabled === t
                            : "label" in e && e.disabled === t;
                    };
                }
                function ft(t) {
                    return at(function (e) {
                        return (
                            (e = +e),
                            at(function (i, n) {
                                for (var o, s = t([], i.length, e), r = s.length; r--; ) i[(o = s[r])] && (i[o] = !(n[o] = i[o]));
                            })
                        );
                    });
                }
                function gt(t) {
                    return t && void 0 !== t.getElementsByTagName && t;
                }
                for (e in ((i = st.support = {}),
                (s = st.isXML = function (t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return !!e && "HTML" !== e.nodeName;
                }),
                (p = st.setDocument = function (t) {
                    var e,
                        o,
                        r = t ? t.ownerDocument || t : x;
                    return r !== h && 9 === r.nodeType && r.documentElement
                        ? ((f = (h = r).documentElement),
                          (g = !s(h)),
                          x !== h && (o = h.defaultView) && o.top !== o && (o.addEventListener ? o.addEventListener("unload", nt, !1) : o.attachEvent && o.attachEvent("onunload", nt)),
                          (i.attributes = lt(function (t) {
                              return (t.className = "i"), !t.getAttribute("className");
                          })),
                          (i.getElementsByTagName = lt(function (t) {
                              return t.appendChild(h.createComment("")), !t.getElementsByTagName("*").length;
                          })),
                          (i.getElementsByClassName = K.test(h.getElementsByClassName)),
                          (i.getById = lt(function (t) {
                              return (f.appendChild(t).id = w), !h.getElementsByName || !h.getElementsByName(w).length;
                          })),
                          i.getById
                              ? ((n.filter.ID = function (t) {
                                    var e = t.replace(Z, tt);
                                    return function (t) {
                                        return t.getAttribute("id") === e;
                                    };
                                }),
                                (n.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var i = e.getElementById(t);
                                        return i ? [i] : [];
                                    }
                                }))
                              : ((n.filter.ID = function (t) {
                                    var e = t.replace(Z, tt);
                                    return function (t) {
                                        var i = void 0 !== t.getAttributeNode && t.getAttributeNode("id");
                                        return i && i.value === e;
                                    };
                                }),
                                (n.find.ID = function (t, e) {
                                    if (void 0 !== e.getElementById && g) {
                                        var i,
                                            n,
                                            o,
                                            s = e.getElementById(t);
                                        if (s) {
                                            if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                            for (o = e.getElementsByName(t), n = 0; (s = o[n++]); ) if ((i = s.getAttributeNode("id")) && i.value === t) return [s];
                                        }
                                        return [];
                                    }
                                })),
                          (n.find.TAG = i.getElementsByTagName
                              ? function (t, e) {
                                    return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : i.qsa ? e.querySelectorAll(t) : void 0;
                                }
                              : function (t, e) {
                                    var i,
                                        n = [],
                                        o = 0,
                                        s = e.getElementsByTagName(t);
                                    if ("*" === t) {
                                        for (; (i = s[o++]); ) 1 === i.nodeType && n.push(i);
                                        return n;
                                    }
                                    return s;
                                }),
                          (n.find.CLASS =
                              i.getElementsByClassName &&
                              function (t, e) {
                                  if (void 0 !== e.getElementsByClassName && g) return e.getElementsByClassName(t);
                              }),
                          (m = []),
                          (v = []),
                          (i.qsa = K.test(h.querySelectorAll)) &&
                              (lt(function (t) {
                                  (f.appendChild(t).innerHTML = "<a id='" + w + "'></a><select id='" + w + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                      t.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + H + "*(?:''|\"\")"),
                                      t.querySelectorAll("[selected]").length || v.push("\\[" + H + "*(?:value|" + j + ")"),
                                      t.querySelectorAll("[id~=" + w + "-]").length || v.push("~="),
                                      t.querySelectorAll(":checked").length || v.push(":checked"),
                                      t.querySelectorAll("a#" + w + "+*").length || v.push(".#.+[+~]");
                              }),
                              lt(function (t) {
                                  t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                  var e = h.createElement("input");
                                  e.setAttribute("type", "hidden"),
                                      t.appendChild(e).setAttribute("name", "D"),
                                      t.querySelectorAll("[name=d]").length && v.push("name" + H + "*[*^$|!~]?="),
                                      2 !== t.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                                      (f.appendChild(t).disabled = !0),
                                      2 !== t.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                                      t.querySelectorAll("*,:x"),
                                      v.push(",.*:");
                              })),
                          (i.matchesSelector = K.test((y = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector))) &&
                              lt(function (t) {
                                  (i.disconnectedMatch = y.call(t, "*")), y.call(t, "[s!='']:x"), m.push("!=", F);
                              }),
                          (v = v.length && new RegExp(v.join("|"))),
                          (m = m.length && new RegExp(m.join("|"))),
                          (e = K.test(f.compareDocumentPosition)),
                          (b =
                              e || K.test(f.contains)
                                  ? function (t, e) {
                                        var i = 9 === t.nodeType ? t.documentElement : t,
                                            n = e && e.parentNode;
                                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)));
                                    }
                                  : function (t, e) {
                                        if (e) for (; (e = e.parentNode); ) if (e === t) return !0;
                                        return !1;
                                    }),
                          (E = e
                              ? function (t, e) {
                                    if (t === e) return (d = !0), 0;
                                    var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                                    return (
                                        n ||
                                        (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || (!i.sortDetached && e.compareDocumentPosition(t) === n)
                                            ? t === h || (t.ownerDocument === x && b(x, t))
                                                ? -1
                                                : e === h || (e.ownerDocument === x && b(x, e))
                                                ? 1
                                                : u
                                                ? L(u, t) - L(u, e)
                                                : 0
                                            : 4 & n
                                            ? -1
                                            : 1)
                                    );
                                }
                              : function (t, e) {
                                    if (t === e) return (d = !0), 0;
                                    var i,
                                        n = 0,
                                        o = t.parentNode,
                                        s = e.parentNode,
                                        r = [t],
                                        a = [e];
                                    if (!o || !s) return t === h ? -1 : e === h ? 1 : o ? -1 : s ? 1 : u ? L(u, t) - L(u, e) : 0;
                                    if (o === s) return ut(t, e);
                                    for (i = t; (i = i.parentNode); ) r.unshift(i);
                                    for (i = e; (i = i.parentNode); ) a.unshift(i);
                                    for (; r[n] === a[n]; ) n++;
                                    return n ? ut(r[n], a[n]) : r[n] === x ? -1 : a[n] === x ? 1 : 0;
                                }),
                          h)
                        : h;
                }),
                (st.matches = function (t, e) {
                    return st(t, null, null, e);
                }),
                (st.matchesSelector = function (t, e) {
                    if (((t.ownerDocument || t) !== h && p(t), (e = e.replace(U, "='$1']")), i.matchesSelector && g && !T[e + " "] && (!m || !m.test(e)) && (!v || !v.test(e))))
                        try {
                            var n = y.call(t, e);
                            if (n || i.disconnectedMatch || (t.document && 11 !== t.document.nodeType)) return n;
                        } catch (t) {}
                    return st(e, h, null, [t]).length > 0;
                }),
                (st.contains = function (t, e) {
                    return (t.ownerDocument || t) !== h && p(t), b(t, e);
                }),
                (st.attr = function (t, e) {
                    (t.ownerDocument || t) !== h && p(t);
                    var o = n.attrHandle[e.toLowerCase()],
                        s = o && O.call(n.attrHandle, e.toLowerCase()) ? o(t, e, !g) : void 0;
                    return void 0 !== s ? s : i.attributes || !g ? t.getAttribute(e) : (s = t.getAttributeNode(e)) && s.specified ? s.value : null;
                }),
                (st.escape = function (t) {
                    return (t + "").replace(et, it);
                }),
                (st.error = function (t) {
                    throw new Error("Syntax error, unrecognized expression: " + t);
                }),
                (st.uniqueSort = function (t) {
                    var e,
                        n = [],
                        o = 0,
                        s = 0;
                    if (((d = !i.detectDuplicates), (u = !i.sortStable && t.slice(0)), t.sort(E), d)) {
                        for (; (e = t[s++]); ) e === t[s] && (o = n.push(s));
                        for (; o--; ) t.splice(n[o], 1);
                    }
                    return (u = null), t;
                }),
                (o = st.getText = function (t) {
                    var e,
                        i = "",
                        n = 0,
                        s = t.nodeType;
                    if (s) {
                        if (1 === s || 9 === s || 11 === s) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += o(t);
                        } else if (3 === s || 4 === s) return t.nodeValue;
                    } else for (; (e = t[n++]); ) i += o(e);
                    return i;
                }),
                ((n = st.selectors = {
                    cacheLength: 50,
                    createPseudo: at,
                    match: Q,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: {
                        ATTR: function (t) {
                            return (t[1] = t[1].replace(Z, tt)), (t[3] = (t[3] || t[4] || t[5] || "").replace(Z, tt)), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4);
                        },
                        CHILD: function (t) {
                            return (
                                (t[1] = t[1].toLowerCase()),
                                "nth" === t[1].slice(0, 3) ? (t[3] || st.error(t[0]), (t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3]))), (t[5] = +(t[7] + t[8] || "odd" === t[3]))) : t[3] && st.error(t[0]),
                                t
                            );
                        },
                        PSEUDO: function (t) {
                            var e,
                                i = !t[6] && t[2];
                            return Q.CHILD.test(t[0])
                                ? null
                                : (t[3] ? (t[2] = t[4] || t[5] || "") : i && W.test(i) && (e = r(i, !0)) && (e = i.indexOf(")", i.length - e) - i.length) && ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))), t.slice(0, 3));
                        },
                    },
                    filter: {
                        TAG: function (t) {
                            var e = t.replace(Z, tt).toLowerCase();
                            return "*" === t
                                ? function () {
                                      return !0;
                                  }
                                : function (t) {
                                      return t.nodeName && t.nodeName.toLowerCase() === e;
                                  };
                        },
                        CLASS: function (t) {
                            var e = S[t + " "];
                            return (
                                e ||
                                ((e = new RegExp("(^|" + H + ")" + t + "(" + H + "|$)")) &&
                                    S(t, function (t) {
                                        return e.test(("string" == typeof t.className && t.className) || (void 0 !== t.getAttribute && t.getAttribute("class")) || "");
                                    }))
                            );
                        },
                        ATTR: function (t, e, i) {
                            return function (n) {
                                var o = st.attr(n, t);
                                return null == o
                                    ? "!=" === e
                                    : !e ||
                                          ((o += ""),
                                          "=" === e
                                              ? o === i
                                              : "!=" === e
                                              ? o !== i
                                              : "^=" === e
                                              ? i && 0 === o.indexOf(i)
                                              : "*=" === e
                                              ? i && o.indexOf(i) > -1
                                              : "$=" === e
                                              ? i && o.slice(-i.length) === i
                                              : "~=" === e
                                              ? (" " + o.replace(M, " ") + " ").indexOf(i) > -1
                                              : "|=" === e && (o === i || o.slice(0, i.length + 1) === i + "-"));
                            };
                        },
                        CHILD: function (t, e, i, n, o) {
                            var s = "nth" !== t.slice(0, 3),
                                r = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === o
                                ? function (t) {
                                      return !!t.parentNode;
                                  }
                                : function (e, i, l) {
                                      var c,
                                          u,
                                          d,
                                          p,
                                          h,
                                          f,
                                          g = s !== r ? "nextSibling" : "previousSibling",
                                          v = e.parentNode,
                                          m = a && e.nodeName.toLowerCase(),
                                          y = !l && !a,
                                          b = !1;
                                      if (v) {
                                          if (s) {
                                              for (; g; ) {
                                                  for (p = e; (p = p[g]); ) if (a ? p.nodeName.toLowerCase() === m : 1 === p.nodeType) return !1;
                                                  f = g = "only" === t && !f && "nextSibling";
                                              }
                                              return !0;
                                          }
                                          if (((f = [r ? v.firstChild : v.lastChild]), r && y)) {
                                              for (
                                                  b = (h = (c = (u = (d = (p = v)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === C && c[1]) && c[2], p = h && v.childNodes[h];
                                                  (p = (++h && p && p[g]) || (b = h = 0) || f.pop());

                                              )
                                                  if (1 === p.nodeType && ++b && p === e) {
                                                      u[t] = [C, h, b];
                                                      break;
                                                  }
                                          } else if ((y && (b = h = (c = (u = (d = (p = e)[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === C && c[1]), !1 === b))
                                              for (
                                                  ;
                                                  (p = (++h && p && p[g]) || (b = h = 0) || f.pop()) &&
                                                  ((a ? p.nodeName.toLowerCase() !== m : 1 !== p.nodeType) || !++b || (y && ((u = (d = p[w] || (p[w] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [C, b]), p !== e));

                                              );
                                          return (b -= o) === n || (b % n == 0 && b / n >= 0);
                                      }
                                  };
                        },
                        PSEUDO: function (t, e) {
                            var i,
                                o = n.pseudos[t] || n.setFilters[t.toLowerCase()] || st.error("unsupported pseudo: " + t);
                            return o[w]
                                ? o(e)
                                : o.length > 1
                                ? ((i = [t, t, "", e]),
                                  n.setFilters.hasOwnProperty(t.toLowerCase())
                                      ? at(function (t, i) {
                                            for (var n, s = o(t, e), r = s.length; r--; ) t[(n = L(t, s[r]))] = !(i[n] = s[r]);
                                        })
                                      : function (t) {
                                            return o(t, 0, i);
                                        })
                                : o;
                        },
                    },
                    pseudos: {
                        not: at(function (t) {
                            var e = [],
                                i = [],
                                n = a(t.replace(R, "$1"));
                            return n[w]
                                ? at(function (t, e, i, o) {
                                      for (var s, r = n(t, null, o, []), a = t.length; a--; ) (s = r[a]) && (t[a] = !(e[a] = s));
                                  })
                                : function (t, o, s) {
                                      return (e[0] = t), n(e, null, s, i), (e[0] = null), !i.pop();
                                  };
                        }),
                        has: at(function (t) {
                            return function (e) {
                                return st(t, e).length > 0;
                            };
                        }),
                        contains: at(function (t) {
                            return (
                                (t = t.replace(Z, tt)),
                                function (e) {
                                    return (e.textContent || e.innerText || o(e)).indexOf(t) > -1;
                                }
                            );
                        }),
                        lang: at(function (t) {
                            return (
                                V.test(t || "") || st.error("unsupported lang: " + t),
                                (t = t.replace(Z, tt).toLowerCase()),
                                function (e) {
                                    var i;
                                    do {
                                        if ((i = g ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))) return (i = i.toLowerCase()) === t || 0 === i.indexOf(t + "-");
                                    } while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1;
                                }
                            );
                        }),
                        target: function (e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id;
                        },
                        root: function (t) {
                            return t === f;
                        },
                        focus: function (t) {
                            return t === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(t.type || t.href || ~t.tabIndex);
                        },
                        enabled: ht(!1),
                        disabled: ht(!0),
                        checked: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e && !!t.checked) || ("option" === e && !!t.selected);
                        },
                        selected: function (t) {
                            return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected;
                        },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling) if (t.nodeType < 6) return !1;
                            return !0;
                        },
                        parent: function (t) {
                            return !n.pseudos.empty(t);
                        },
                        header: function (t) {
                            return Y.test(t.nodeName);
                        },
                        input: function (t) {
                            return X.test(t.nodeName);
                        },
                        button: function (t) {
                            var e = t.nodeName.toLowerCase();
                            return ("input" === e && "button" === t.type) || "button" === e;
                        },
                        text: function (t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase());
                        },
                        first: ft(function () {
                            return [0];
                        }),
                        last: ft(function (t, e) {
                            return [e - 1];
                        }),
                        eq: ft(function (t, e, i) {
                            return [i < 0 ? i + e : i];
                        }),
                        even: ft(function (t, e) {
                            for (var i = 0; i < e; i += 2) t.push(i);
                            return t;
                        }),
                        odd: ft(function (t, e) {
                            for (var i = 1; i < e; i += 2) t.push(i);
                            return t;
                        }),
                        lt: ft(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; --n >= 0; ) t.push(n);
                            return t;
                        }),
                        gt: ft(function (t, e, i) {
                            for (var n = i < 0 ? i + e : i; ++n < e; ) t.push(n);
                            return t;
                        }),
                    },
                }).pseudos.nth = n.pseudos.eq),
                { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
                    n.pseudos[e] = dt(e);
                for (e in { submit: !0, reset: !0 }) n.pseudos[e] = pt(e);
                function vt() {}
                function mt(t) {
                    for (var e = 0, i = t.length, n = ""; e < i; e++) n += t[e].value;
                    return n;
                }
                function yt(t, e, i) {
                    var n = e.dir,
                        o = e.next,
                        s = o || n,
                        r = i && "parentNode" === s,
                        a = k++;
                    return e.first
                        ? function (e, i, o) {
                              for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, o);
                              return !1;
                          }
                        : function (e, i, l) {
                              var c,
                                  u,
                                  d,
                                  p = [C, a];
                              if (l) {
                                  for (; (e = e[n]); ) if ((1 === e.nodeType || r) && t(e, i, l)) return !0;
                              } else
                                  for (; (e = e[n]); )
                                      if (1 === e.nodeType || r)
                                          if (((u = (d = e[w] || (e[w] = {}))[e.uniqueID] || (d[e.uniqueID] = {})), o && o === e.nodeName.toLowerCase())) e = e[n] || e;
                                          else {
                                              if ((c = u[s]) && c[0] === C && c[1] === a) return (p[2] = c[2]);
                                              if (((u[s] = p), (p[2] = t(e, i, l)))) return !0;
                                          }
                              return !1;
                          };
                }
                function bt(t) {
                    return t.length > 1
                        ? function (e, i, n) {
                              for (var o = t.length; o--; ) if (!t[o](e, i, n)) return !1;
                              return !0;
                          }
                        : t[0];
                }
                function wt(t, e, i, n, o) {
                    for (var s, r = [], a = 0, l = t.length, c = null != e; a < l; a++) (s = t[a]) && ((i && !i(s, n, o)) || (r.push(s), c && e.push(a)));
                    return r;
                }
                function xt(t, e, i, n, o, s) {
                    return (
                        n && !n[w] && (n = xt(n)),
                        o && !o[w] && (o = xt(o, s)),
                        at(function (s, r, a, l) {
                            var c,
                                u,
                                d,
                                p = [],
                                h = [],
                                f = r.length,
                                g =
                                    s ||
                                    (function (t, e, i) {
                                        for (var n = 0, o = e.length; n < o; n++) st(t, e[n], i);
                                        return i;
                                    })(e || "*", a.nodeType ? [a] : a, []),
                                v = !t || (!s && e) ? g : wt(g, p, t, a, l),
                                m = i ? (o || (s ? t : f || n) ? [] : r) : v;
                            if ((i && i(v, m, a, l), n)) for (c = wt(m, h), n(c, [], a, l), u = c.length; u--; ) (d = c[u]) && (m[h[u]] = !(v[h[u]] = d));
                            if (s) {
                                if (o || t) {
                                    if (o) {
                                        for (c = [], u = m.length; u--; ) (d = m[u]) && c.push((v[u] = d));
                                        o(null, (m = []), c, l);
                                    }
                                    for (u = m.length; u--; ) (d = m[u]) && (c = o ? L(s, d) : p[u]) > -1 && (s[c] = !(r[c] = d));
                                }
                            } else (m = wt(m === r ? m.splice(f, m.length) : m)), o ? o(null, r, m, l) : P.apply(r, m);
                        })
                    );
                }
                function Ct(t) {
                    for (
                        var e,
                            i,
                            o,
                            s = t.length,
                            r = n.relative[t[0].type],
                            a = r || n.relative[" "],
                            l = r ? 1 : 0,
                            u = yt(
                                function (t) {
                                    return t === e;
                                },
                                a,
                                !0
                            ),
                            d = yt(
                                function (t) {
                                    return L(e, t) > -1;
                                },
                                a,
                                !0
                            ),
                            p = [
                                function (t, i, n) {
                                    var o = (!r && (n || i !== c)) || ((e = i).nodeType ? u(t, i, n) : d(t, i, n));
                                    return (e = null), o;
                                },
                            ];
                        l < s;
                        l++
                    )
                        if ((i = n.relative[t[l].type])) p = [yt(bt(p), i)];
                        else {
                            if ((i = n.filter[t[l].type].apply(null, t[l].matches))[w]) {
                                for (o = ++l; o < s && !n.relative[t[o].type]; o++);
                                return xt(l > 1 && bt(p), l > 1 && mt(t.slice(0, l - 1).concat({ value: " " === t[l - 2].type ? "*" : "" })).replace(R, "$1"), i, l < o && Ct(t.slice(l, o)), o < s && Ct((t = t.slice(o))), o < s && mt(t));
                            }
                            p.push(i);
                        }
                    return bt(p);
                }
                return (
                    (vt.prototype = n.filters = n.pseudos),
                    (n.setFilters = new vt()),
                    (r = st.tokenize = function (t, e) {
                        var i,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            u = $[t + " "];
                        if (u) return e ? 0 : u.slice(0);
                        for (a = t, l = [], c = n.preFilter; a; ) {
                            for (r in ((i && !(o = q.exec(a))) || (o && (a = a.slice(o[0].length) || a), l.push((s = []))),
                            (i = !1),
                            (o = B.exec(a)) && ((i = o.shift()), s.push({ value: i, type: o[0].replace(R, " ") }), (a = a.slice(i.length))),
                            n.filter))
                                !(o = Q[r].exec(a)) || (c[r] && !(o = c[r](o))) || ((i = o.shift()), s.push({ value: i, type: r, matches: o }), (a = a.slice(i.length)));
                            if (!i) break;
                        }
                        return e ? a.length : a ? st.error(t) : $(t, l).slice(0);
                    }),
                    (a = st.compile = function (t, e) {
                        var i,
                            o = [],
                            s = [],
                            a = T[t + " "];
                        if (!a) {
                            for (e || (e = r(t)), i = e.length; i--; ) (a = Ct(e[i]))[w] ? o.push(a) : s.push(a);
                            (a = T(
                                t,
                                (function (t, e) {
                                    var i = e.length > 0,
                                        o = t.length > 0,
                                        s = function (s, r, a, l, u) {
                                            var d,
                                                f,
                                                v,
                                                m = 0,
                                                y = "0",
                                                b = s && [],
                                                w = [],
                                                x = c,
                                                k = s || (o && n.find.TAG("*", u)),
                                                S = (C += null == x ? 1 : Math.random() || 0.1),
                                                $ = k.length;
                                            for (u && (c = r === h || r || u); y !== $ && null != (d = k[y]); y++) {
                                                if (o && d) {
                                                    for (f = 0, r || d.ownerDocument === h || (p(d), (a = !g)); (v = t[f++]); )
                                                        if (v(d, r || h, a)) {
                                                            l.push(d);
                                                            break;
                                                        }
                                                    u && (C = S);
                                                }
                                                i && ((d = !v && d) && m--, s && b.push(d));
                                            }
                                            if (((m += y), i && y !== m)) {
                                                for (f = 0; (v = e[f++]); ) v(b, w, r, a);
                                                if (s) {
                                                    if (m > 0) for (; y--; ) b[y] || w[y] || (w[y] = D.call(l));
                                                    w = wt(w);
                                                }
                                                P.apply(l, w), u && !s && w.length > 0 && m + e.length > 1 && st.uniqueSort(l);
                                            }
                                            return u && ((C = S), (c = x)), b;
                                        };
                                    return i ? at(s) : s;
                                })(s, o)
                            )).selector = t;
                        }
                        return a;
                    }),
                    (l = st.select = function (t, e, i, o) {
                        var s,
                            l,
                            c,
                            u,
                            d,
                            p = "function" == typeof t && t,
                            h = !o && r((t = p.selector || t));
                        if (((i = i || []), 1 === h.length)) {
                            if ((l = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = l[0]).type && 9 === e.nodeType && g && n.relative[l[1].type]) {
                                if (!(e = (n.find.ID(c.matches[0].replace(Z, tt), e) || [])[0])) return i;
                                p && (e = e.parentNode), (t = t.slice(l.shift().value.length));
                            }
                            for (s = Q.needsContext.test(t) ? 0 : l.length; s-- && ((c = l[s]), !n.relative[(u = c.type)]); )
                                if ((d = n.find[u]) && (o = d(c.matches[0].replace(Z, tt), (J.test(l[0].type) && gt(e.parentNode)) || e))) {
                                    if ((l.splice(s, 1), !(t = o.length && mt(l)))) return P.apply(i, o), i;
                                    break;
                                }
                        }
                        return (p || a(t, h))(o, e, !g, i, !e || (J.test(t) && gt(e.parentNode)) || e), i;
                    }),
                    (i.sortStable = w.split("").sort(E).join("") === w),
                    (i.detectDuplicates = !!d),
                    p(),
                    (i.sortDetached = lt(function (t) {
                        return 1 & t.compareDocumentPosition(h.createElement("fieldset"));
                    })),
                    lt(function (t) {
                        return (t.innerHTML = "<a href='#'></a>"), "#" === t.firstChild.getAttribute("href");
                    }) ||
                        ct("type|href|height|width", function (t, e, i) {
                            if (!i) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
                        }),
                    (i.attributes &&
                        lt(function (t) {
                            return (t.innerHTML = "<input/>"), t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value");
                        })) ||
                        ct("value", function (t, e, i) {
                            if (!i && "input" === t.nodeName.toLowerCase()) return t.defaultValue;
                        }),
                    lt(function (t) {
                        return null == t.getAttribute("disabled");
                    }) ||
                        ct(j, function (t, e, i) {
                            var n;
                            if (!i) return !0 === t[e] ? e.toLowerCase() : (n = t.getAttributeNode(e)) && n.specified ? n.value : null;
                        }),
                    st
                );
            })(i);
            (k.find = T), (k.expr = T.selectors), (k.expr[":"] = k.expr.pseudos), (k.uniqueSort = k.unique = T.uniqueSort), (k.text = T.getText), (k.isXMLDoc = T.isXML), (k.contains = T.contains), (k.escapeSelector = T.escape);
            var E = function (t, e, i) {
                    for (var n = [], o = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
                        if (1 === t.nodeType) {
                            if (o && k(t).is(i)) break;
                            n.push(t);
                        }
                    return n;
                },
                O = function (t, e) {
                    for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                    return i;
                },
                A = k.expr.match.needsContext;
            function D(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
            }
            var I = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
            function P(t, e, i) {
                return y(e)
                    ? k.grep(t, function (t, n) {
                          return !!e.call(t, n, t) !== i;
                      })
                    : e.nodeType
                    ? k.grep(t, function (t) {
                          return (t === e) !== i;
                      })
                    : "string" != typeof e
                    ? k.grep(t, function (t) {
                          return d.call(e, t) > -1 !== i;
                      })
                    : k.filter(e, t, i);
            }
            (k.filter = function (t, e, i) {
                var n = e[0];
                return (
                    i && (t = ":not(" + t + ")"),
                    1 === e.length && 1 === n.nodeType
                        ? k.find.matchesSelector(n, t)
                            ? [n]
                            : []
                        : k.find.matches(
                              t,
                              k.grep(e, function (t) {
                                  return 1 === t.nodeType;
                              })
                          )
                );
            }),
                k.fn.extend({
                    find: function (t) {
                        var e,
                            i,
                            n = this.length,
                            o = this;
                        if ("string" != typeof t)
                            return this.pushStack(
                                k(t).filter(function () {
                                    for (e = 0; e < n; e++) if (k.contains(o[e], this)) return !0;
                                })
                            );
                        for (i = this.pushStack([]), e = 0; e < n; e++) k.find(t, o[e], i);
                        return n > 1 ? k.uniqueSort(i) : i;
                    },
                    filter: function (t) {
                        return this.pushStack(P(this, t || [], !1));
                    },
                    not: function (t) {
                        return this.pushStack(P(this, t || [], !0));
                    },
                    is: function (t) {
                        return !!P(this, "string" == typeof t && A.test(t) ? k(t) : t || [], !1).length;
                    },
                });
            var N,
                L = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            ((k.fn.init = function (t, e, i) {
                var n, o;
                if (!t) return this;
                if (((i = i || N), "string" == typeof t)) {
                    if (!(n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : L.exec(t)) || (!n[1] && e)) return !e || e.jquery ? (e || i).find(t) : this.constructor(e).find(t);
                    if (n[1]) {
                        if (((e = e instanceof k ? e[0] : e), k.merge(this, k.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : r, !0)), I.test(n[1]) && k.isPlainObject(e)))
                            for (n in e) y(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                        return this;
                    }
                    return (o = r.getElementById(n[2])) && ((this[0] = o), (this.length = 1)), this;
                }
                return t.nodeType ? ((this[0] = t), (this.length = 1), this) : y(t) ? (void 0 !== i.ready ? i.ready(t) : t(k)) : k.makeArray(t, this);
            }).prototype = k.fn),
                (N = k(r));
            var j = /^(?:parents|prev(?:Until|All))/,
                H = { children: !0, contents: !0, next: !0, prev: !0 };
            function z(t, e) {
                for (; (t = t[e]) && 1 !== t.nodeType; );
                return t;
            }
            k.fn.extend({
                has: function (t) {
                    var e = k(t, this),
                        i = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < i; t++) if (k.contains(this, e[t])) return !0;
                    });
                },
                closest: function (t, e) {
                    var i,
                        n = 0,
                        o = this.length,
                        s = [],
                        r = "string" != typeof t && k(t);
                    if (!A.test(t))
                        for (; n < o; n++)
                            for (i = this[n]; i && i !== e; i = i.parentNode)
                                if (i.nodeType < 11 && (r ? r.index(i) > -1 : 1 === i.nodeType && k.find.matchesSelector(i, t))) {
                                    s.push(i);
                                    break;
                                }
                    return this.pushStack(s.length > 1 ? k.uniqueSort(s) : s);
                },
                index: function (t) {
                    return t ? ("string" == typeof t ? d.call(k(t), this[0]) : d.call(this, t.jquery ? t[0] : t)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
                },
                add: function (t, e) {
                    return this.pushStack(k.uniqueSort(k.merge(this.get(), k(t, e))));
                },
                addBack: function (t) {
                    return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
                },
            }),
                k.each(
                    {
                        parent: function (t) {
                            var e = t.parentNode;
                            return e && 11 !== e.nodeType ? e : null;
                        },
                        parents: function (t) {
                            return E(t, "parentNode");
                        },
                        parentsUntil: function (t, e, i) {
                            return E(t, "parentNode", i);
                        },
                        next: function (t) {
                            return z(t, "nextSibling");
                        },
                        prev: function (t) {
                            return z(t, "previousSibling");
                        },
                        nextAll: function (t) {
                            return E(t, "nextSibling");
                        },
                        prevAll: function (t) {
                            return E(t, "previousSibling");
                        },
                        nextUntil: function (t, e, i) {
                            return E(t, "nextSibling", i);
                        },
                        prevUntil: function (t, e, i) {
                            return E(t, "previousSibling", i);
                        },
                        siblings: function (t) {
                            return O((t.parentNode || {}).firstChild, t);
                        },
                        children: function (t) {
                            return O(t.firstChild);
                        },
                        contents: function (t) {
                            return D(t, "iframe") ? t.contentDocument : (D(t, "template") && (t = t.content || t), k.merge([], t.childNodes));
                        },
                    },
                    function (t, e) {
                        k.fn[t] = function (i, n) {
                            var o = k.map(this, e, i);
                            return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = k.filter(n, o)), this.length > 1 && (H[t] || k.uniqueSort(o), j.test(t) && o.reverse()), this.pushStack(o);
                        };
                    }
                );
            var _ = /[^\x20\t\r\n\f]+/g;
            function F(t) {
                return t;
            }
            function M(t) {
                throw t;
            }
            function R(t, e, i, n) {
                var o;
                try {
                    t && y((o = t.promise)) ? o.call(t).done(e).fail(i) : t && y((o = t.then)) ? o.call(t, e, i) : e.apply(void 0, [t].slice(n));
                } catch (t) {
                    i.apply(void 0, [t]);
                }
            }
            (k.Callbacks = function (t) {
                t =
                    "string" == typeof t
                        ? (function (t) {
                              var e = {};
                              return (
                                  k.each(t.match(_) || [], function (t, i) {
                                      e[i] = !0;
                                  }),
                                  e
                              );
                          })(t)
                        : k.extend({}, t);
                var e,
                    i,
                    n,
                    o,
                    s = [],
                    r = [],
                    a = -1,
                    l = function () {
                        for (o = o || t.once, n = e = !0; r.length; a = -1) for (i = r.shift(); ++a < s.length; ) !1 === s[a].apply(i[0], i[1]) && t.stopOnFalse && ((a = s.length), (i = !1));
                        t.memory || (i = !1), (e = !1), o && (s = i ? [] : "");
                    },
                    c = {
                        add: function () {
                            return (
                                s &&
                                    (i && !e && ((a = s.length - 1), r.push(i)),
                                    (function e(i) {
                                        k.each(i, function (i, n) {
                                            y(n) ? (t.unique && c.has(n)) || s.push(n) : n && n.length && "string" !== C(n) && e(n);
                                        });
                                    })(arguments),
                                    i && !e && l()),
                                this
                            );
                        },
                        remove: function () {
                            return (
                                k.each(arguments, function (t, e) {
                                    for (var i; (i = k.inArray(e, s, i)) > -1; ) s.splice(i, 1), i <= a && a--;
                                }),
                                this
                            );
                        },
                        has: function (t) {
                            return t ? k.inArray(t, s) > -1 : s.length > 0;
                        },
                        empty: function () {
                            return s && (s = []), this;
                        },
                        disable: function () {
                            return (o = r = []), (s = i = ""), this;
                        },
                        disabled: function () {
                            return !s;
                        },
                        lock: function () {
                            return (o = r = []), i || e || (s = i = ""), this;
                        },
                        locked: function () {
                            return !!o;
                        },
                        fireWith: function (t, i) {
                            return o || ((i = [t, (i = i || []).slice ? i.slice() : i]), r.push(i), e || l()), this;
                        },
                        fire: function () {
                            return c.fireWith(this, arguments), this;
                        },
                        fired: function () {
                            return !!n;
                        },
                    };
                return c;
            }),
                k.extend({
                    Deferred: function (t) {
                        var e = [
                                ["notify", "progress", k.Callbacks("memory"), k.Callbacks("memory"), 2],
                                ["resolve", "done", k.Callbacks("once memory"), k.Callbacks("once memory"), 0, "resolved"],
                                ["reject", "fail", k.Callbacks("once memory"), k.Callbacks("once memory"), 1, "rejected"],
                            ],
                            n = "pending",
                            o = {
                                state: function () {
                                    return n;
                                },
                                always: function () {
                                    return s.done(arguments).fail(arguments), this;
                                },
                                catch: function (t) {
                                    return o.then(null, t);
                                },
                                pipe: function () {
                                    var t = arguments;
                                    return k
                                        .Deferred(function (i) {
                                            k.each(e, function (e, n) {
                                                var o = y(t[n[4]]) && t[n[4]];
                                                s[n[1]](function () {
                                                    var t = o && o.apply(this, arguments);
                                                    t && y(t.promise) ? t.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[n[0] + "With"](this, o ? [t] : arguments);
                                                });
                                            }),
                                                (t = null);
                                        })
                                        .promise();
                                },
                                then: function (t, n, o) {
                                    var s = 0;
                                    function r(t, e, n, o) {
                                        return function () {
                                            var a = this,
                                                l = arguments,
                                                c = function () {
                                                    var i, c;
                                                    if (!(t < s)) {
                                                        if ((i = n.apply(a, l)) === e.promise()) throw new TypeError("Thenable self-resolution");
                                                        (c = i && ("object" == typeof i || "function" == typeof i) && i.then),
                                                            y(c)
                                                                ? o
                                                                    ? c.call(i, r(s, e, F, o), r(s, e, M, o))
                                                                    : (s++, c.call(i, r(s, e, F, o), r(s, e, M, o), r(s, e, F, e.notifyWith)))
                                                                : (n !== F && ((a = void 0), (l = [i])), (o || e.resolveWith)(a, l));
                                                    }
                                                },
                                                u = o
                                                    ? c
                                                    : function () {
                                                          try {
                                                              c();
                                                          } catch (i) {
                                                              k.Deferred.exceptionHook && k.Deferred.exceptionHook(i, u.stackTrace), t + 1 >= s && (n !== M && ((a = void 0), (l = [i])), e.rejectWith(a, l));
                                                          }
                                                      };
                                            t ? u() : (k.Deferred.getStackHook && (u.stackTrace = k.Deferred.getStackHook()), i.setTimeout(u));
                                        };
                                    }
                                    return k
                                        .Deferred(function (i) {
                                            e[0][3].add(r(0, i, y(o) ? o : F, i.notifyWith)), e[1][3].add(r(0, i, y(t) ? t : F)), e[2][3].add(r(0, i, y(n) ? n : M));
                                        })
                                        .promise();
                                },
                                promise: function (t) {
                                    return null != t ? k.extend(t, o) : o;
                                },
                            },
                            s = {};
                        return (
                            k.each(e, function (t, i) {
                                var r = i[2],
                                    a = i[5];
                                (o[i[1]] = r.add),
                                    a &&
                                        r.add(
                                            function () {
                                                n = a;
                                            },
                                            e[3 - t][2].disable,
                                            e[3 - t][3].disable,
                                            e[0][2].lock,
                                            e[0][3].lock
                                        ),
                                    r.add(i[3].fire),
                                    (s[i[0]] = function () {
                                        return s[i[0] + "With"](this === s ? void 0 : this, arguments), this;
                                    }),
                                    (s[i[0] + "With"] = r.fireWith);
                            }),
                            o.promise(s),
                            t && t.call(s, s),
                            s
                        );
                    },
                    when: function (t) {
                        var e = arguments.length,
                            i = e,
                            n = Array(i),
                            o = l.call(arguments),
                            s = k.Deferred(),
                            r = function (t) {
                                return function (i) {
                                    (n[t] = this), (o[t] = arguments.length > 1 ? l.call(arguments) : i), --e || s.resolveWith(n, o);
                                };
                            };
                        if (e <= 1 && (R(t, s.done(r(i)).resolve, s.reject, !e), "pending" === s.state() || y(o[i] && o[i].then))) return s.then();
                        for (; i--; ) R(o[i], r(i), s.reject);
                        return s.promise();
                    },
                });
            var q = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            (k.Deferred.exceptionHook = function (t, e) {
                i.console && i.console.warn && t && q.test(t.name) && i.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e);
            }),
                (k.readyException = function (t) {
                    i.setTimeout(function () {
                        throw t;
                    });
                });
            var B = k.Deferred();
            function U() {
                r.removeEventListener("DOMContentLoaded", U), i.removeEventListener("load", U), k.ready();
            }
            (k.fn.ready = function (t) {
                return (
                    B.then(t).catch(function (t) {
                        k.readyException(t);
                    }),
                    this
                );
            }),
                k.extend({
                    isReady: !1,
                    readyWait: 1,
                    ready: function (t) {
                        (!0 === t ? --k.readyWait : k.isReady) || ((k.isReady = !0), (!0 !== t && --k.readyWait > 0) || B.resolveWith(r, [k]));
                    },
                }),
                (k.ready.then = B.then),
                "complete" === r.readyState || ("loading" !== r.readyState && !r.documentElement.doScroll) ? i.setTimeout(k.ready) : (r.addEventListener("DOMContentLoaded", U), i.addEventListener("load", U));
            var W = function (t, e, i, n, o, s, r) {
                    var a = 0,
                        l = t.length,
                        c = null == i;
                    if ("object" === C(i)) for (a in ((o = !0), i)) W(t, e, a, i[a], !0, s, r);
                    else if (
                        void 0 !== n &&
                        ((o = !0),
                        y(n) || (r = !0),
                        c &&
                            (r
                                ? (e.call(t, n), (e = null))
                                : ((c = e),
                                  (e = function (t, e, i) {
                                      return c.call(k(t), i);
                                  }))),
                        e)
                    )
                        for (; a < l; a++) e(t[a], i, r ? n : n.call(t[a], a, e(t[a], i)));
                    return o ? t : c ? e.call(t) : l ? e(t[0], i) : s;
                },
                V = /^-ms-/,
                Q = /-([a-z])/g;
            function X(t, e) {
                return e.toUpperCase();
            }
            function Y(t) {
                return t.replace(V, "ms-").replace(Q, X);
            }
            var K = function (t) {
                return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
            };
            function G() {
                this.expando = k.expando + G.uid++;
            }
            (G.uid = 1),
                (G.prototype = {
                    cache: function (t) {
                        var e = t[this.expando];
                        return e || ((e = {}), K(t) && (t.nodeType ? (t[this.expando] = e) : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e;
                    },
                    set: function (t, e, i) {
                        var n,
                            o = this.cache(t);
                        if ("string" == typeof e) o[Y(e)] = i;
                        else for (n in e) o[Y(n)] = e[n];
                        return o;
                    },
                    get: function (t, e) {
                        return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][Y(e)];
                    },
                    access: function (t, e, i) {
                        return void 0 === e || (e && "string" == typeof e && void 0 === i) ? this.get(t, e) : (this.set(t, e, i), void 0 !== i ? i : e);
                    },
                    remove: function (t, e) {
                        var i,
                            n = t[this.expando];
                        if (void 0 !== n) {
                            if (void 0 !== e) {
                                i = (e = Array.isArray(e) ? e.map(Y) : (e = Y(e)) in n ? [e] : e.match(_) || []).length;
                                for (; i--; ) delete n[e[i]];
                            }
                            (void 0 === e || k.isEmptyObject(n)) && (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
                        }
                    },
                    hasData: function (t) {
                        var e = t[this.expando];
                        return void 0 !== e && !k.isEmptyObject(e);
                    },
                });
            var J = new G(),
                Z = new G(),
                tt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                et = /[A-Z]/g;
            function it(t, e, i) {
                var n;
                if (void 0 === i && 1 === t.nodeType)
                    if (((n = "data-" + e.replace(et, "-$&").toLowerCase()), "string" == typeof (i = t.getAttribute(n)))) {
                        try {
                            i = (function (t) {
                                return "true" === t || ("false" !== t && ("null" === t ? null : t === +t + "" ? +t : tt.test(t) ? JSON.parse(t) : t));
                            })(i);
                        } catch (t) {}
                        Z.set(t, e, i);
                    } else i = void 0;
                return i;
            }
            k.extend({
                hasData: function (t) {
                    return Z.hasData(t) || J.hasData(t);
                },
                data: function (t, e, i) {
                    return Z.access(t, e, i);
                },
                removeData: function (t, e) {
                    Z.remove(t, e);
                },
                _data: function (t, e, i) {
                    return J.access(t, e, i);
                },
                _removeData: function (t, e) {
                    J.remove(t, e);
                },
            }),
                k.fn.extend({
                    data: function (t, e) {
                        var i,
                            n,
                            o,
                            s = this[0],
                            r = s && s.attributes;
                        if (void 0 === t) {
                            if (this.length && ((o = Z.get(s)), 1 === s.nodeType && !J.get(s, "hasDataAttrs"))) {
                                for (i = r.length; i--; ) r[i] && 0 === (n = r[i].name).indexOf("data-") && ((n = Y(n.slice(5))), it(s, n, o[n]));
                                J.set(s, "hasDataAttrs", !0);
                            }
                            return o;
                        }
                        return "object" == typeof t
                            ? this.each(function () {
                                  Z.set(this, t);
                              })
                            : W(
                                  this,
                                  function (e) {
                                      var i;
                                      if (s && void 0 === e) return void 0 !== (i = Z.get(s, t)) ? i : void 0 !== (i = it(s, t)) ? i : void 0;
                                      this.each(function () {
                                          Z.set(this, t, e);
                                      });
                                  },
                                  null,
                                  e,
                                  arguments.length > 1,
                                  null,
                                  !0
                              );
                    },
                    removeData: function (t) {
                        return this.each(function () {
                            Z.remove(this, t);
                        });
                    },
                }),
                k.extend({
                    queue: function (t, e, i) {
                        var n;
                        if (t) return (e = (e || "fx") + "queue"), (n = J.get(t, e)), i && (!n || Array.isArray(i) ? (n = J.access(t, e, k.makeArray(i))) : n.push(i)), n || [];
                    },
                    dequeue: function (t, e) {
                        e = e || "fx";
                        var i = k.queue(t, e),
                            n = i.length,
                            o = i.shift(),
                            s = k._queueHooks(t, e);
                        "inprogress" === o && ((o = i.shift()), n--),
                            o &&
                                ("fx" === e && i.unshift("inprogress"),
                                delete s.stop,
                                o.call(
                                    t,
                                    function () {
                                        k.dequeue(t, e);
                                    },
                                    s
                                )),
                            !n && s && s.empty.fire();
                    },
                    _queueHooks: function (t, e) {
                        var i = e + "queueHooks";
                        return (
                            J.get(t, i) ||
                            J.access(t, i, {
                                empty: k.Callbacks("once memory").add(function () {
                                    J.remove(t, [e + "queue", i]);
                                }),
                            })
                        );
                    },
                }),
                k.fn.extend({
                    queue: function (t, e) {
                        var i = 2;
                        return (
                            "string" != typeof t && ((e = t), (t = "fx"), i--),
                            arguments.length < i
                                ? k.queue(this[0], t)
                                : void 0 === e
                                ? this
                                : this.each(function () {
                                      var i = k.queue(this, t, e);
                                      k._queueHooks(this, t), "fx" === t && "inprogress" !== i[0] && k.dequeue(this, t);
                                  })
                        );
                    },
                    dequeue: function (t) {
                        return this.each(function () {
                            k.dequeue(this, t);
                        });
                    },
                    clearQueue: function (t) {
                        return this.queue(t || "fx", []);
                    },
                    promise: function (t, e) {
                        var i,
                            n = 1,
                            o = k.Deferred(),
                            s = this,
                            r = this.length,
                            a = function () {
                                --n || o.resolveWith(s, [s]);
                            };
                        for ("string" != typeof t && ((e = t), (t = void 0)), t = t || "fx"; r--; ) (i = J.get(s[r], t + "queueHooks")) && i.empty && (n++, i.empty.add(a));
                        return a(), o.promise(e);
                    },
                });
            var nt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                ot = new RegExp("^(?:([+-])=|)(" + nt + ")([a-z%]*)$", "i"),
                st = ["Top", "Right", "Bottom", "Left"],
                rt = function (t, e) {
                    return "none" === (t = e || t).style.display || ("" === t.style.display && k.contains(t.ownerDocument, t) && "none" === k.css(t, "display"));
                },
                at = function (t, e, i, n) {
                    var o,
                        s,
                        r = {};
                    for (s in e) (r[s] = t.style[s]), (t.style[s] = e[s]);
                    for (s in ((o = i.apply(t, n || [])), e)) t.style[s] = r[s];
                    return o;
                };
            function lt(t, e, i, n) {
                var o,
                    s,
                    r = 20,
                    a = n
                        ? function () {
                              return n.cur();
                          }
                        : function () {
                              return k.css(t, e, "");
                          },
                    l = a(),
                    c = (i && i[3]) || (k.cssNumber[e] ? "" : "px"),
                    u = (k.cssNumber[e] || ("px" !== c && +l)) && ot.exec(k.css(t, e));
                if (u && u[3] !== c) {
                    for (l /= 2, c = c || u[3], u = +l || 1; r--; ) k.style(t, e, u + c), (1 - s) * (1 - (s = a() / l || 0.5)) <= 0 && (r = 0), (u /= s);
                    (u *= 2), k.style(t, e, u + c), (i = i || []);
                }
                return i && ((u = +u || +l || 0), (o = i[1] ? u + (i[1] + 1) * i[2] : +i[2]), n && ((n.unit = c), (n.start = u), (n.end = o))), o;
            }
            var ct = {};
            function ut(t) {
                var e,
                    i = t.ownerDocument,
                    n = t.nodeName,
                    o = ct[n];
                return o || ((e = i.body.appendChild(i.createElement(n))), (o = k.css(e, "display")), e.parentNode.removeChild(e), "none" === o && (o = "block"), (ct[n] = o), o);
            }
            function dt(t, e) {
                for (var i, n, o = [], s = 0, r = t.length; s < r; s++)
                    (n = t[s]).style &&
                        ((i = n.style.display),
                        e ? ("none" === i && ((o[s] = J.get(n, "display") || null), o[s] || (n.style.display = "")), "" === n.style.display && rt(n) && (o[s] = ut(n))) : "none" !== i && ((o[s] = "none"), J.set(n, "display", i)));
                for (s = 0; s < r; s++) null != o[s] && (t[s].style.display = o[s]);
                return t;
            }
            k.fn.extend({
                show: function () {
                    return dt(this, !0);
                },
                hide: function () {
                    return dt(this);
                },
                toggle: function (t) {
                    return "boolean" == typeof t
                        ? t
                            ? this.show()
                            : this.hide()
                        : this.each(function () {
                              rt(this) ? k(this).show() : k(this).hide();
                          });
                },
            });
            var pt = /^(?:checkbox|radio)$/i,
                ht = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ft = /^$|^module$|\/(?:java|ecma)script/i,
                gt = {
                    option: [1, "<select multiple='multiple'>", "</select>"],
                    thead: [1, "<table>", "</table>"],
                    col: [2, "<table><colgroup>", "</colgroup></table>"],
                    tr: [2, "<table><tbody>", "</tbody></table>"],
                    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                    _default: [0, "", ""],
                };
            function vt(t, e) {
                var i;
                return (i = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []), void 0 === e || (e && D(t, e)) ? k.merge([t], i) : i;
            }
            function mt(t, e) {
                for (var i = 0, n = t.length; i < n; i++) J.set(t[i], "globalEval", !e || J.get(e[i], "globalEval"));
            }
            (gt.optgroup = gt.option), (gt.tbody = gt.tfoot = gt.colgroup = gt.caption = gt.thead), (gt.th = gt.td);
            var yt,
                bt,
                wt = /<|&#?\w+;/;
            function xt(t, e, i, n, o) {
                for (var s, r, a, l, c, u, d = e.createDocumentFragment(), p = [], h = 0, f = t.length; h < f; h++)
                    if ((s = t[h]) || 0 === s)
                        if ("object" === C(s)) k.merge(p, s.nodeType ? [s] : s);
                        else if (wt.test(s)) {
                            for (r = r || d.appendChild(e.createElement("div")), a = (ht.exec(s) || ["", ""])[1].toLowerCase(), l = gt[a] || gt._default, r.innerHTML = l[1] + k.htmlPrefilter(s) + l[2], u = l[0]; u--; ) r = r.lastChild;
                            k.merge(p, r.childNodes), ((r = d.firstChild).textContent = "");
                        } else p.push(e.createTextNode(s));
                for (d.textContent = "", h = 0; (s = p[h++]); )
                    if (n && k.inArray(s, n) > -1) o && o.push(s);
                    else if (((c = k.contains(s.ownerDocument, s)), (r = vt(d.appendChild(s), "script")), c && mt(r), i)) for (u = 0; (s = r[u++]); ) ft.test(s.type || "") && i.push(s);
                return d;
            }
            (yt = r.createDocumentFragment().appendChild(r.createElement("div"))),
                (bt = r.createElement("input")).setAttribute("type", "radio"),
                bt.setAttribute("checked", "checked"),
                bt.setAttribute("name", "t"),
                yt.appendChild(bt),
                (m.checkClone = yt.cloneNode(!0).cloneNode(!0).lastChild.checked),
                (yt.innerHTML = "<textarea>x</textarea>"),
                (m.noCloneChecked = !!yt.cloneNode(!0).lastChild.defaultValue);
            var Ct = r.documentElement,
                kt = /^key/,
                St = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                $t = /^([^.]*)(?:\.(.+)|)/;
            function Tt() {
                return !0;
            }
            function Et() {
                return !1;
            }
            function Ot() {
                try {
                    return r.activeElement;
                } catch (t) {}
            }
            function At(t, e, i, n, o, s) {
                var r, a;
                if ("object" == typeof e) {
                    for (a in ("string" != typeof i && ((n = n || i), (i = void 0)), e)) At(t, a, i, n, e[a], s);
                    return t;
                }
                if ((null == n && null == o ? ((o = i), (n = i = void 0)) : null == o && ("string" == typeof i ? ((o = n), (n = void 0)) : ((o = n), (n = i), (i = void 0))), !1 === o)) o = Et;
                else if (!o) return t;
                return (
                    1 === s &&
                        ((r = o),
                        ((o = function (t) {
                            return k().off(t), r.apply(this, arguments);
                        }).guid = r.guid || (r.guid = k.guid++))),
                    t.each(function () {
                        k.event.add(this, e, o, n, i);
                    })
                );
            }
            (k.event = {
                global: {},
                add: function (t, e, i, n, o) {
                    var s,
                        r,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        g,
                        v = J.get(t);
                    if (v)
                        for (
                            i.handler && ((i = (s = i).handler), (o = s.selector)),
                                o && k.find.matchesSelector(Ct, o),
                                i.guid || (i.guid = k.guid++),
                                (l = v.events) || (l = v.events = {}),
                                (r = v.handle) ||
                                    (r = v.handle = function (e) {
                                        return void 0 !== k && k.event.triggered !== e.type ? k.event.dispatch.apply(t, arguments) : void 0;
                                    }),
                                c = (e = (e || "").match(_) || [""]).length;
                            c--;

                        )
                            (h = g = (a = $t.exec(e[c]) || [])[1]),
                                (f = (a[2] || "").split(".").sort()),
                                h &&
                                    ((d = k.event.special[h] || {}),
                                    (h = (o ? d.delegateType : d.bindType) || h),
                                    (d = k.event.special[h] || {}),
                                    (u = k.extend({ type: h, origType: g, data: n, handler: i, guid: i.guid, selector: o, needsContext: o && k.expr.match.needsContext.test(o), namespace: f.join(".") }, s)),
                                    (p = l[h]) || (((p = l[h] = []).delegateCount = 0), (d.setup && !1 !== d.setup.call(t, n, f, r)) || (t.addEventListener && t.addEventListener(h, r))),
                                    d.add && (d.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
                                    o ? p.splice(p.delegateCount++, 0, u) : p.push(u),
                                    (k.event.global[h] = !0));
                },
                remove: function (t, e, i, n, o) {
                    var s,
                        r,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        f,
                        g,
                        v = J.hasData(t) && J.get(t);
                    if (v && (l = v.events)) {
                        for (c = (e = (e || "").match(_) || [""]).length; c--; )
                            if (((h = g = (a = $t.exec(e[c]) || [])[1]), (f = (a[2] || "").split(".").sort()), h)) {
                                for (d = k.event.special[h] || {}, p = l[(h = (n ? d.delegateType : d.bindType) || h)] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), r = s = p.length; s--; )
                                    (u = p[s]),
                                        (!o && g !== u.origType) ||
                                            (i && i.guid !== u.guid) ||
                                            (a && !a.test(u.namespace)) ||
                                            (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                                            (p.splice(s, 1), u.selector && p.delegateCount--, d.remove && d.remove.call(t, u));
                                r && !p.length && ((d.teardown && !1 !== d.teardown.call(t, f, v.handle)) || k.removeEvent(t, h, v.handle), delete l[h]);
                            } else for (h in l) k.event.remove(t, h + e[c], i, n, !0);
                        k.isEmptyObject(l) && J.remove(t, "handle events");
                    }
                },
                dispatch: function (t) {
                    var e,
                        i,
                        n,
                        o,
                        s,
                        r,
                        a = k.event.fix(t),
                        l = new Array(arguments.length),
                        c = (J.get(this, "events") || {})[a.type] || [],
                        u = k.event.special[a.type] || {};
                    for (l[0] = a, e = 1; e < arguments.length; e++) l[e] = arguments[e];
                    if (((a.delegateTarget = this), !u.preDispatch || !1 !== u.preDispatch.call(this, a))) {
                        for (r = k.event.handlers.call(this, a, c), e = 0; (o = r[e++]) && !a.isPropagationStopped(); )
                            for (a.currentTarget = o.elem, i = 0; (s = o.handlers[i++]) && !a.isImmediatePropagationStopped(); )
                                (a.rnamespace && !a.rnamespace.test(s.namespace)) ||
                                    ((a.handleObj = s), (a.data = s.data), void 0 !== (n = ((k.event.special[s.origType] || {}).handle || s.handler).apply(o.elem, l)) && !1 === (a.result = n) && (a.preventDefault(), a.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, a), a.result;
                    }
                },
                handlers: function (t, e) {
                    var i,
                        n,
                        o,
                        s,
                        r,
                        a = [],
                        l = e.delegateCount,
                        c = t.target;
                    if (l && c.nodeType && !("click" === t.type && t.button >= 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && ("click" !== t.type || !0 !== c.disabled)) {
                                for (s = [], r = {}, i = 0; i < l; i++) void 0 === r[(o = (n = e[i]).selector + " ")] && (r[o] = n.needsContext ? k(o, this).index(c) > -1 : k.find(o, this, null, [c]).length), r[o] && s.push(n);
                                s.length && a.push({ elem: c, handlers: s });
                            }
                    return (c = this), l < e.length && a.push({ elem: c, handlers: e.slice(l) }), a;
                },
                addProp: function (t, e) {
                    Object.defineProperty(k.Event.prototype, t, {
                        enumerable: !0,
                        configurable: !0,
                        get: y(e)
                            ? function () {
                                  if (this.originalEvent) return e(this.originalEvent);
                              }
                            : function () {
                                  if (this.originalEvent) return this.originalEvent[t];
                              },
                        set: function (e) {
                            Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
                        },
                    });
                },
                fix: function (t) {
                    return t[k.expando] ? t : new k.Event(t);
                },
                special: {
                    load: { noBubble: !0 },
                    focus: {
                        trigger: function () {
                            if (this !== Ot() && this.focus) return this.focus(), !1;
                        },
                        delegateType: "focusin",
                    },
                    blur: {
                        trigger: function () {
                            if (this === Ot() && this.blur) return this.blur(), !1;
                        },
                        delegateType: "focusout",
                    },
                    click: {
                        trigger: function () {
                            if ("checkbox" === this.type && this.click && D(this, "input")) return this.click(), !1;
                        },
                        _default: function (t) {
                            return D(t.target, "a");
                        },
                    },
                    beforeunload: {
                        postDispatch: function (t) {
                            void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result);
                        },
                    },
                },
            }),
                (k.removeEvent = function (t, e, i) {
                    t.removeEventListener && t.removeEventListener(e, i);
                }),
                (k.Event = function (t, e) {
                    if (!(this instanceof k.Event)) return new k.Event(t, e);
                    t && t.type
                        ? ((this.originalEvent = t),
                          (this.type = t.type),
                          (this.isDefaultPrevented = t.defaultPrevented || (void 0 === t.defaultPrevented && !1 === t.returnValue) ? Tt : Et),
                          (this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target),
                          (this.currentTarget = t.currentTarget),
                          (this.relatedTarget = t.relatedTarget))
                        : (this.type = t),
                        e && k.extend(this, e),
                        (this.timeStamp = (t && t.timeStamp) || Date.now()),
                        (this[k.expando] = !0);
                }),
                (k.Event.prototype = {
                    constructor: k.Event,
                    isDefaultPrevented: Et,
                    isPropagationStopped: Et,
                    isImmediatePropagationStopped: Et,
                    isSimulated: !1,
                    preventDefault: function () {
                        var t = this.originalEvent;
                        (this.isDefaultPrevented = Tt), t && !this.isSimulated && t.preventDefault();
                    },
                    stopPropagation: function () {
                        var t = this.originalEvent;
                        (this.isPropagationStopped = Tt), t && !this.isSimulated && t.stopPropagation();
                    },
                    stopImmediatePropagation: function () {
                        var t = this.originalEvent;
                        (this.isImmediatePropagationStopped = Tt), t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation();
                    },
                }),
                k.each(
                    {
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
                        which: function (t) {
                            var e = t.button;
                            return null == t.which && kt.test(t.type) ? (null != t.charCode ? t.charCode : t.keyCode) : !t.which && void 0 !== e && St.test(t.type) ? (1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0) : t.which;
                        },
                    },
                    k.event.addProp
                ),
                k.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, e) {
                    k.event.special[t] = {
                        delegateType: e,
                        bindType: e,
                        handle: function (t) {
                            var i,
                                n = t.relatedTarget,
                                o = t.handleObj;
                            return (n && (n === this || k.contains(this, n))) || ((t.type = o.origType), (i = o.handler.apply(this, arguments)), (t.type = e)), i;
                        },
                    };
                }),
                k.fn.extend({
                    on: function (t, e, i, n) {
                        return At(this, t, e, i, n);
                    },
                    one: function (t, e, i, n) {
                        return At(this, t, e, i, n, 1);
                    },
                    off: function (t, e, i) {
                        var n, o;
                        if (t && t.preventDefault && t.handleObj) return (n = t.handleObj), k(t.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
                        if ("object" == typeof t) {
                            for (o in t) this.off(o, e, t[o]);
                            return this;
                        }
                        return (
                            (!1 !== e && "function" != typeof e) || ((i = e), (e = void 0)),
                            !1 === i && (i = Et),
                            this.each(function () {
                                k.event.remove(this, t, i, e);
                            })
                        );
                    },
                });
            var Dt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                It = /<script|<style|<link/i,
                Pt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Nt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Lt(t, e) {
                return (D(t, "table") && D(11 !== e.nodeType ? e : e.firstChild, "tr") && k(t).children("tbody")[0]) || t;
            }
            function jt(t) {
                return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
            }
            function Ht(t) {
                return "true/" === (t.type || "").slice(0, 5) ? (t.type = t.type.slice(5)) : t.removeAttribute("type"), t;
            }
            function zt(t, e) {
                var i, n, o, s, r, a, l, c;
                if (1 === e.nodeType) {
                    if (J.hasData(t) && ((s = J.access(t)), (r = J.set(e, s)), (c = s.events))) for (o in (delete r.handle, (r.events = {}), c)) for (i = 0, n = c[o].length; i < n; i++) k.event.add(e, o, c[o][i]);
                    Z.hasData(t) && ((a = Z.access(t)), (l = k.extend({}, a)), Z.set(e, l));
                }
            }
            function _t(t, e, i, n) {
                e = c.apply([], e);
                var o,
                    s,
                    r,
                    a,
                    l,
                    u,
                    d = 0,
                    p = t.length,
                    h = p - 1,
                    f = e[0],
                    g = y(f);
                if (g || (p > 1 && "string" == typeof f && !m.checkClone && Pt.test(f)))
                    return t.each(function (o) {
                        var s = t.eq(o);
                        g && (e[0] = f.call(this, o, s.html())), _t(s, e, i, n);
                    });
                if (p && ((s = (o = xt(e, t[0].ownerDocument, !1, t, n)).firstChild), 1 === o.childNodes.length && (o = s), s || n)) {
                    for (a = (r = k.map(vt(o, "script"), jt)).length; d < p; d++) (l = o), d !== h && ((l = k.clone(l, !0, !0)), a && k.merge(r, vt(l, "script"))), i.call(t[d], l, d);
                    if (a)
                        for (u = r[r.length - 1].ownerDocument, k.map(r, Ht), d = 0; d < a; d++)
                            (l = r[d]),
                                ft.test(l.type || "") && !J.access(l, "globalEval") && k.contains(u, l) && (l.src && "module" !== (l.type || "").toLowerCase() ? k._evalUrl && k._evalUrl(l.src) : x(l.textContent.replace(Nt, ""), u, l));
                }
                return t;
            }
            function Ft(t, e, i) {
                for (var n, o = e ? k.filter(e, t) : t, s = 0; null != (n = o[s]); s++) i || 1 !== n.nodeType || k.cleanData(vt(n)), n.parentNode && (i && k.contains(n.ownerDocument, n) && mt(vt(n, "script")), n.parentNode.removeChild(n));
                return t;
            }
            k.extend({
                htmlPrefilter: function (t) {
                    return t.replace(Dt, "<$1></$2>");
                },
                clone: function (t, e, i) {
                    var n,
                        o,
                        s,
                        r,
                        a,
                        l,
                        c,
                        u = t.cloneNode(!0),
                        d = k.contains(t.ownerDocument, t);
                    if (!(m.noCloneChecked || (1 !== t.nodeType && 11 !== t.nodeType) || k.isXMLDoc(t)))
                        for (r = vt(u), n = 0, o = (s = vt(t)).length; n < o; n++)
                            (a = s[n]), (l = r[n]), void 0, "input" === (c = l.nodeName.toLowerCase()) && pt.test(a.type) ? (l.checked = a.checked) : ("input" !== c && "textarea" !== c) || (l.defaultValue = a.defaultValue);
                    if (e)
                        if (i) for (s = s || vt(t), r = r || vt(u), n = 0, o = s.length; n < o; n++) zt(s[n], r[n]);
                        else zt(t, u);
                    return (r = vt(u, "script")).length > 0 && mt(r, !d && vt(t, "script")), u;
                },
                cleanData: function (t) {
                    for (var e, i, n, o = k.event.special, s = 0; void 0 !== (i = t[s]); s++)
                        if (K(i)) {
                            if ((e = i[J.expando])) {
                                if (e.events) for (n in e.events) o[n] ? k.event.remove(i, n) : k.removeEvent(i, n, e.handle);
                                i[J.expando] = void 0;
                            }
                            i[Z.expando] && (i[Z.expando] = void 0);
                        }
                },
            }),
                k.fn.extend({
                    detach: function (t) {
                        return Ft(this, t, !0);
                    },
                    remove: function (t) {
                        return Ft(this, t);
                    },
                    text: function (t) {
                        return W(
                            this,
                            function (t) {
                                return void 0 === t
                                    ? k.text(this)
                                    : this.empty().each(function () {
                                          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = t);
                                      });
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    append: function () {
                        return _t(this, arguments, function (t) {
                            (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || Lt(this, t).appendChild(t);
                        });
                    },
                    prepend: function () {
                        return _t(this, arguments, function (t) {
                            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                                var e = Lt(this, t);
                                e.insertBefore(t, e.firstChild);
                            }
                        });
                    },
                    before: function () {
                        return _t(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this);
                        });
                    },
                    after: function () {
                        return _t(this, arguments, function (t) {
                            this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
                        });
                    },
                    empty: function () {
                        for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (k.cleanData(vt(t, !1)), (t.textContent = ""));
                        return this;
                    },
                    clone: function (t, e) {
                        return (
                            (t = null != t && t),
                            (e = null == e ? t : e),
                            this.map(function () {
                                return k.clone(this, t, e);
                            })
                        );
                    },
                    html: function (t) {
                        return W(
                            this,
                            function (t) {
                                var e = this[0] || {},
                                    i = 0,
                                    n = this.length;
                                if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                                if ("string" == typeof t && !It.test(t) && !gt[(ht.exec(t) || ["", ""])[1].toLowerCase()]) {
                                    t = k.htmlPrefilter(t);
                                    try {
                                        for (; i < n; i++) 1 === (e = this[i] || {}).nodeType && (k.cleanData(vt(e, !1)), (e.innerHTML = t));
                                        e = 0;
                                    } catch (t) {}
                                }
                                e && this.empty().append(t);
                            },
                            null,
                            t,
                            arguments.length
                        );
                    },
                    replaceWith: function () {
                        var t = [];
                        return _t(
                            this,
                            arguments,
                            function (e) {
                                var i = this.parentNode;
                                k.inArray(this, t) < 0 && (k.cleanData(vt(this)), i && i.replaceChild(e, this));
                            },
                            t
                        );
                    },
                }),
                k.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, e) {
                    k.fn[t] = function (t) {
                        for (var i, n = [], o = k(t), s = o.length - 1, r = 0; r <= s; r++) (i = r === s ? this : this.clone(!0)), k(o[r])[e](i), u.apply(n, i.get());
                        return this.pushStack(n);
                    };
                });
            var Mt = new RegExp("^(" + nt + ")(?!px)[a-z%]+$", "i"),
                Rt = function (t) {
                    var e = t.ownerDocument.defaultView;
                    return (e && e.opener) || (e = i), e.getComputedStyle(t);
                },
                qt = new RegExp(st.join("|"), "i");
            function Bt(t, e, i) {
                var n,
                    o,
                    s,
                    r,
                    a = t.style;
                return (
                    (i = i || Rt(t)) &&
                        ("" !== (r = i.getPropertyValue(e) || i[e]) || k.contains(t.ownerDocument, t) || (r = k.style(t, e)),
                        !m.pixelBoxStyles() && Mt.test(r) && qt.test(e) && ((n = a.width), (o = a.minWidth), (s = a.maxWidth), (a.minWidth = a.maxWidth = a.width = r), (r = i.width), (a.width = n), (a.minWidth = o), (a.maxWidth = s))),
                    void 0 !== r ? r + "" : r
                );
            }
            function Ut(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get;
                    },
                };
            }
            !(function () {
                function t() {
                    if (u) {
                        (c.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                            (u.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                            Ct.appendChild(c).appendChild(u);
                        var t = i.getComputedStyle(u);
                        (n = "1%" !== t.top),
                            (l = 12 === e(t.marginLeft)),
                            (u.style.right = "60%"),
                            (a = 36 === e(t.right)),
                            (o = 36 === e(t.width)),
                            (u.style.position = "absolute"),
                            (s = 36 === u.offsetWidth || "absolute"),
                            Ct.removeChild(c),
                            (u = null);
                    }
                }
                function e(t) {
                    return Math.round(parseFloat(t));
                }
                var n,
                    o,
                    s,
                    a,
                    l,
                    c = r.createElement("div"),
                    u = r.createElement("div");
                u.style &&
                    ((u.style.backgroundClip = "content-box"),
                    (u.cloneNode(!0).style.backgroundClip = ""),
                    (m.clearCloneStyle = "content-box" === u.style.backgroundClip),
                    k.extend(m, {
                        boxSizingReliable: function () {
                            return t(), o;
                        },
                        pixelBoxStyles: function () {
                            return t(), a;
                        },
                        pixelPosition: function () {
                            return t(), n;
                        },
                        reliableMarginLeft: function () {
                            return t(), l;
                        },
                        scrollboxSize: function () {
                            return t(), s;
                        },
                    }));
            })();
            var Wt = /^(none|table(?!-c[ea]).+)/,
                Vt = /^--/,
                Qt = { position: "absolute", visibility: "hidden", display: "block" },
                Xt = { letterSpacing: "0", fontWeight: "400" },
                Yt = ["Webkit", "Moz", "ms"],
                Kt = r.createElement("div").style;
            function Gt(t) {
                var e = k.cssProps[t];
                return (
                    e ||
                        (e = k.cssProps[t] =
                            (function (t) {
                                if (t in Kt) return t;
                                for (var e = t[0].toUpperCase() + t.slice(1), i = Yt.length; i--; ) if ((t = Yt[i] + e) in Kt) return t;
                            })(t) || t),
                    e
                );
            }
            function Jt(t, e, i) {
                var n = ot.exec(e);
                return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
            }
            function Zt(t, e, i, n, o, s) {
                var r = "width" === e ? 1 : 0,
                    a = 0,
                    l = 0;
                if (i === (n ? "border" : "content")) return 0;
                for (; r < 4; r += 2)
                    "margin" === i && (l += k.css(t, i + st[r], !0, o)),
                        n
                            ? ("content" === i && (l -= k.css(t, "padding" + st[r], !0, o)), "margin" !== i && (l -= k.css(t, "border" + st[r] + "Width", !0, o)))
                            : ((l += k.css(t, "padding" + st[r], !0, o)), "padding" !== i ? (l += k.css(t, "border" + st[r] + "Width", !0, o)) : (a += k.css(t, "border" + st[r] + "Width", !0, o)));
                return !n && s >= 0 && (l += Math.max(0, Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - s - l - a - 0.5))), l;
            }
            function te(t, e, i) {
                var n = Rt(t),
                    o = Bt(t, e, n),
                    s = "border-box" === k.css(t, "boxSizing", !1, n),
                    r = s;
                if (Mt.test(o)) {
                    if (!i) return o;
                    o = "auto";
                }
                return (
                    (r = r && (m.boxSizingReliable() || o === t.style[e])),
                    ("auto" === o || (!parseFloat(o) && "inline" === k.css(t, "display", !1, n))) && ((o = t["offset" + e[0].toUpperCase() + e.slice(1)]), (r = !0)),
                    (o = parseFloat(o) || 0) + Zt(t, e, i || (s ? "border" : "content"), r, n, o) + "px"
                );
            }
            function ee(t, e, i, n, o) {
                return new ee.prototype.init(t, e, i, n, o);
            }
            k.extend({
                cssHooks: {
                    opacity: {
                        get: function (t, e) {
                            if (e) {
                                var i = Bt(t, "opacity");
                                return "" === i ? "1" : i;
                            }
                        },
                    },
                },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: {},
                style: function (t, e, i, n) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var o,
                            s,
                            r,
                            a = Y(e),
                            l = Vt.test(e),
                            c = t.style;
                        if ((l || (e = Gt(a)), (r = k.cssHooks[e] || k.cssHooks[a]), void 0 === i)) return r && "get" in r && void 0 !== (o = r.get(t, !1, n)) ? o : c[e];
                        "string" === (s = typeof i) && (o = ot.exec(i)) && o[1] && ((i = lt(t, e, o)), (s = "number")),
                            null != i &&
                                i == i &&
                                ("number" === s && (i += (o && o[3]) || (k.cssNumber[a] ? "" : "px")),
                                m.clearCloneStyle || "" !== i || 0 !== e.indexOf("background") || (c[e] = "inherit"),
                                (r && "set" in r && void 0 === (i = r.set(t, i, n))) || (l ? c.setProperty(e, i) : (c[e] = i)));
                    }
                },
                css: function (t, e, i, n) {
                    var o,
                        s,
                        r,
                        a = Y(e);
                    return (
                        Vt.test(e) || (e = Gt(a)),
                        (r = k.cssHooks[e] || k.cssHooks[a]) && "get" in r && (o = r.get(t, !0, i)),
                        void 0 === o && (o = Bt(t, e, n)),
                        "normal" === o && e in Xt && (o = Xt[e]),
                        "" === i || i ? ((s = parseFloat(o)), !0 === i || isFinite(s) ? s || 0 : o) : o
                    );
                },
            }),
                k.each(["height", "width"], function (t, e) {
                    k.cssHooks[e] = {
                        get: function (t, i, n) {
                            if (i)
                                return !Wt.test(k.css(t, "display")) || (t.getClientRects().length && t.getBoundingClientRect().width)
                                    ? te(t, e, n)
                                    : at(t, Qt, function () {
                                          return te(t, e, n);
                                      });
                        },
                        set: function (t, i, n) {
                            var o,
                                s = Rt(t),
                                r = "border-box" === k.css(t, "boxSizing", !1, s),
                                a = n && Zt(t, e, n, r, s);
                            return (
                                r && m.scrollboxSize() === s.position && (a -= Math.ceil(t["offset" + e[0].toUpperCase() + e.slice(1)] - parseFloat(s[e]) - Zt(t, e, "border", !1, s) - 0.5)),
                                a && (o = ot.exec(i)) && "px" !== (o[3] || "px") && ((t.style[e] = i), (i = k.css(t, e))),
                                Jt(0, i, a)
                            );
                        },
                    };
                }),
                (k.cssHooks.marginLeft = Ut(m.reliableMarginLeft, function (t, e) {
                    if (e)
                        return (
                            (parseFloat(Bt(t, "marginLeft")) ||
                                t.getBoundingClientRect().left -
                                    at(t, { marginLeft: 0 }, function () {
                                        return t.getBoundingClientRect().left;
                                    })) + "px"
                        );
                })),
                k.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
                    (k.cssHooks[t + e] = {
                        expand: function (i) {
                            for (var n = 0, o = {}, s = "string" == typeof i ? i.split(" ") : [i]; n < 4; n++) o[t + st[n] + e] = s[n] || s[n - 2] || s[0];
                            return o;
                        },
                    }),
                        "margin" !== t && (k.cssHooks[t + e].set = Jt);
                }),
                k.fn.extend({
                    css: function (t, e) {
                        return W(
                            this,
                            function (t, e, i) {
                                var n,
                                    o,
                                    s = {},
                                    r = 0;
                                if (Array.isArray(e)) {
                                    for (n = Rt(t), o = e.length; r < o; r++) s[e[r]] = k.css(t, e[r], !1, n);
                                    return s;
                                }
                                return void 0 !== i ? k.style(t, e, i) : k.css(t, e);
                            },
                            t,
                            e,
                            arguments.length > 1
                        );
                    },
                }),
                (k.Tween = ee),
                (ee.prototype = {
                    constructor: ee,
                    init: function (t, e, i, n, o, s) {
                        (this.elem = t), (this.prop = i), (this.easing = o || k.easing._default), (this.options = e), (this.start = this.now = this.cur()), (this.end = n), (this.unit = s || (k.cssNumber[i] ? "" : "px"));
                    },
                    cur: function () {
                        var t = ee.propHooks[this.prop];
                        return t && t.get ? t.get(this) : ee.propHooks._default.get(this);
                    },
                    run: function (t) {
                        var e,
                            i = ee.propHooks[this.prop];
                        return (
                            this.options.duration ? (this.pos = e = k.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration)) : (this.pos = e = t),
                            (this.now = (this.end - this.start) * e + this.start),
                            this.options.step && this.options.step.call(this.elem, this.now, this),
                            i && i.set ? i.set(this) : ee.propHooks._default.set(this),
                            this
                        );
                    },
                }),
                (ee.prototype.init.prototype = ee.prototype),
                (ee.propHooks = {
                    _default: {
                        get: function (t) {
                            var e;
                            return 1 !== t.elem.nodeType || (null != t.elem[t.prop] && null == t.elem.style[t.prop]) ? t.elem[t.prop] : (e = k.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0;
                        },
                        set: function (t) {
                            k.fx.step[t.prop] ? k.fx.step[t.prop](t) : 1 !== t.elem.nodeType || (null == t.elem.style[k.cssProps[t.prop]] && !k.cssHooks[t.prop]) ? (t.elem[t.prop] = t.now) : k.style(t.elem, t.prop, t.now + t.unit);
                        },
                    },
                }),
                (ee.propHooks.scrollTop = ee.propHooks.scrollLeft = {
                    set: function (t) {
                        t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
                    },
                }),
                (k.easing = {
                    linear: function (t) {
                        return t;
                    },
                    swing: function (t) {
                        return 0.5 - Math.cos(t * Math.PI) / 2;
                    },
                    _default: "swing",
                }),
                (k.fx = ee.prototype.init),
                (k.fx.step = {});
            var ie,
                ne,
                oe = /^(?:toggle|show|hide)$/,
                se = /queueHooks$/;
            function re() {
                ne && (!1 === r.hidden && i.requestAnimationFrame ? i.requestAnimationFrame(re) : i.setTimeout(re, k.fx.interval), k.fx.tick());
            }
            function ae() {
                return (
                    i.setTimeout(function () {
                        ie = void 0;
                    }),
                    (ie = Date.now())
                );
            }
            function le(t, e) {
                var i,
                    n = 0,
                    o = { height: t };
                for (e = e ? 1 : 0; n < 4; n += 2 - e) o["margin" + (i = st[n])] = o["padding" + i] = t;
                return e && (o.opacity = o.width = t), o;
            }
            function ce(t, e, i) {
                for (var n, o = (ue.tweeners[e] || []).concat(ue.tweeners["*"]), s = 0, r = o.length; s < r; s++) if ((n = o[s].call(i, e, t))) return n;
            }
            function ue(t, e, i) {
                var n,
                    o,
                    s = 0,
                    r = ue.prefilters.length,
                    a = k.Deferred().always(function () {
                        delete l.elem;
                    }),
                    l = function () {
                        if (o) return !1;
                        for (var e = ie || ae(), i = Math.max(0, c.startTime + c.duration - e), n = 1 - (i / c.duration || 0), s = 0, r = c.tweens.length; s < r; s++) c.tweens[s].run(n);
                        return a.notifyWith(t, [c, n, i]), n < 1 && r ? i : (r || a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c]), !1);
                    },
                    c = a.promise({
                        elem: t,
                        props: k.extend({}, e),
                        opts: k.extend(!0, { specialEasing: {}, easing: k.easing._default }, i),
                        originalProperties: e,
                        originalOptions: i,
                        startTime: ie || ae(),
                        duration: i.duration,
                        tweens: [],
                        createTween: function (e, i) {
                            var n = k.Tween(t, c.opts, e, i, c.opts.specialEasing[e] || c.opts.easing);
                            return c.tweens.push(n), n;
                        },
                        stop: function (e) {
                            var i = 0,
                                n = e ? c.tweens.length : 0;
                            if (o) return this;
                            for (o = !0; i < n; i++) c.tweens[i].run(1);
                            return e ? (a.notifyWith(t, [c, 1, 0]), a.resolveWith(t, [c, e])) : a.rejectWith(t, [c, e]), this;
                        },
                    }),
                    u = c.props;
                for (
                    !(function (t, e) {
                        var i, n, o, s, r;
                        for (i in t)
                            if (((o = e[(n = Y(i))]), (s = t[i]), Array.isArray(s) && ((o = s[1]), (s = t[i] = s[0])), i !== n && ((t[n] = s), delete t[i]), (r = k.cssHooks[n]) && ("expand" in r)))
                                for (i in ((s = r.expand(s)), delete t[n], s)) (i in t) || ((t[i] = s[i]), (e[i] = o));
                            else e[n] = o;
                    })(u, c.opts.specialEasing);
                    s < r;
                    s++
                )
                    if ((n = ue.prefilters[s].call(c, t, u, c.opts))) return y(n.stop) && (k._queueHooks(c.elem, c.opts.queue).stop = n.stop.bind(n)), n;
                return (
                    k.map(u, ce, c),
                    y(c.opts.start) && c.opts.start.call(t, c),
                    c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always),
                    k.fx.timer(k.extend(l, { elem: t, anim: c, queue: c.opts.queue })),
                    c
                );
            }
            (k.Animation = k.extend(ue, {
                tweeners: {
                    "*": [
                        function (t, e) {
                            var i = this.createTween(t, e);
                            return lt(i.elem, t, ot.exec(e), i), i;
                        },
                    ],
                },
                tweener: function (t, e) {
                    y(t) ? ((e = t), (t = ["*"])) : (t = t.match(_));
                    for (var i, n = 0, o = t.length; n < o; n++) (i = t[n]), (ue.tweeners[i] = ue.tweeners[i] || []), ue.tweeners[i].unshift(e);
                },
                prefilters: [
                    function (t, e, i) {
                        var n,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            u,
                            d = "width" in e || "height" in e,
                            p = this,
                            h = {},
                            f = t.style,
                            g = t.nodeType && rt(t),
                            v = J.get(t, "fxshow");
                        for (n in (i.queue ||
                            (null == (r = k._queueHooks(t, "fx")).unqueued &&
                                ((r.unqueued = 0),
                                (a = r.empty.fire),
                                (r.empty.fire = function () {
                                    r.unqueued || a();
                                })),
                            r.unqueued++,
                            p.always(function () {
                                p.always(function () {
                                    r.unqueued--, k.queue(t, "fx").length || r.empty.fire();
                                });
                            })),
                        e))
                            if (((o = e[n]), oe.test(o))) {
                                if ((delete e[n], (s = s || "toggle" === o), o === (g ? "hide" : "show"))) {
                                    if ("show" !== o || !v || void 0 === v[n]) continue;
                                    g = !0;
                                }
                                h[n] = (v && v[n]) || k.style(t, n);
                            }
                        if ((l = !k.isEmptyObject(e)) || !k.isEmptyObject(h))
                            for (n in (d &&
                                1 === t.nodeType &&
                                ((i.overflow = [f.overflow, f.overflowX, f.overflowY]),
                                null == (c = v && v.display) && (c = J.get(t, "display")),
                                "none" === (u = k.css(t, "display")) && (c ? (u = c) : (dt([t], !0), (c = t.style.display || c), (u = k.css(t, "display")), dt([t]))),
                                ("inline" === u || ("inline-block" === u && null != c)) &&
                                    "none" === k.css(t, "float") &&
                                    (l ||
                                        (p.done(function () {
                                            f.display = c;
                                        }),
                                        null == c && ((u = f.display), (c = "none" === u ? "" : u))),
                                    (f.display = "inline-block"))),
                            i.overflow &&
                                ((f.overflow = "hidden"),
                                p.always(function () {
                                    (f.overflow = i.overflow[0]), (f.overflowX = i.overflow[1]), (f.overflowY = i.overflow[2]);
                                })),
                            (l = !1),
                            h))
                                l ||
                                    (v ? "hidden" in v && (g = v.hidden) : (v = J.access(t, "fxshow", { display: c })),
                                    s && (v.hidden = !g),
                                    g && dt([t], !0),
                                    p.done(function () {
                                        for (n in (g || dt([t]), J.remove(t, "fxshow"), h)) k.style(t, n, h[n]);
                                    })),
                                    (l = ce(g ? v[n] : 0, n, p)),
                                    n in v || ((v[n] = l.start), g && ((l.end = l.start), (l.start = 0)));
                    },
                ],
                prefilter: function (t, e) {
                    e ? ue.prefilters.unshift(t) : ue.prefilters.push(t);
                },
            })),
                (k.speed = function (t, e, i) {
                    var n = t && "object" == typeof t ? k.extend({}, t) : { complete: i || (!i && e) || (y(t) && t), duration: t, easing: (i && e) || (e && !y(e) && e) };
                    return (
                        k.fx.off ? (n.duration = 0) : "number" != typeof n.duration && (n.duration in k.fx.speeds ? (n.duration = k.fx.speeds[n.duration]) : (n.duration = k.fx.speeds._default)),
                        (null != n.queue && !0 !== n.queue) || (n.queue = "fx"),
                        (n.old = n.complete),
                        (n.complete = function () {
                            y(n.old) && n.old.call(this), n.queue && k.dequeue(this, n.queue);
                        }),
                        n
                    );
                }),
                k.fn.extend({
                    fadeTo: function (t, e, i, n) {
                        return this.filter(rt).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n);
                    },
                    animate: function (t, e, i, n) {
                        var o = k.isEmptyObject(t),
                            s = k.speed(e, i, n),
                            r = function () {
                                var e = ue(this, k.extend({}, t), s);
                                (o || J.get(this, "finish")) && e.stop(!0);
                            };
                        return (r.finish = r), o || !1 === s.queue ? this.each(r) : this.queue(s.queue, r);
                    },
                    stop: function (t, e, i) {
                        var n = function (t) {
                            var e = t.stop;
                            delete t.stop, e(i);
                        };
                        return (
                            "string" != typeof t && ((i = e), (e = t), (t = void 0)),
                            e && !1 !== t && this.queue(t || "fx", []),
                            this.each(function () {
                                var e = !0,
                                    o = null != t && t + "queueHooks",
                                    s = k.timers,
                                    r = J.get(this);
                                if (o) r[o] && r[o].stop && n(r[o]);
                                else for (o in r) r[o] && r[o].stop && se.test(o) && n(r[o]);
                                for (o = s.length; o--; ) s[o].elem !== this || (null != t && s[o].queue !== t) || (s[o].anim.stop(i), (e = !1), s.splice(o, 1));
                                (!e && i) || k.dequeue(this, t);
                            })
                        );
                    },
                    finish: function (t) {
                        return (
                            !1 !== t && (t = t || "fx"),
                            this.each(function () {
                                var e,
                                    i = J.get(this),
                                    n = i[t + "queue"],
                                    o = i[t + "queueHooks"],
                                    s = k.timers,
                                    r = n ? n.length : 0;
                                for (i.finish = !0, k.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = s.length; e--; ) s[e].elem === this && s[e].queue === t && (s[e].anim.stop(!0), s.splice(e, 1));
                                for (e = 0; e < r; e++) n[e] && n[e].finish && n[e].finish.call(this);
                                delete i.finish;
                            })
                        );
                    },
                }),
                k.each(["toggle", "show", "hide"], function (t, e) {
                    var i = k.fn[e];
                    k.fn[e] = function (t, n, o) {
                        return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(le(e, !0), t, n, o);
                    };
                }),
                k.each({ slideDown: le("show"), slideUp: le("hide"), slideToggle: le("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (t, e) {
                    k.fn[t] = function (t, i, n) {
                        return this.animate(e, t, i, n);
                    };
                }),
                (k.timers = []),
                (k.fx.tick = function () {
                    var t,
                        e = 0,
                        i = k.timers;
                    for (ie = Date.now(); e < i.length; e++) (t = i[e])() || i[e] !== t || i.splice(e--, 1);
                    i.length || k.fx.stop(), (ie = void 0);
                }),
                (k.fx.timer = function (t) {
                    k.timers.push(t), k.fx.start();
                }),
                (k.fx.interval = 13),
                (k.fx.start = function () {
                    ne || ((ne = !0), re());
                }),
                (k.fx.stop = function () {
                    ne = null;
                }),
                (k.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                (k.fn.delay = function (t, e) {
                    return (
                        (t = (k.fx && k.fx.speeds[t]) || t),
                        (e = e || "fx"),
                        this.queue(e, function (e, n) {
                            var o = i.setTimeout(e, t);
                            n.stop = function () {
                                i.clearTimeout(o);
                            };
                        })
                    );
                }),
                (function () {
                    var t = r.createElement("input"),
                        e = r.createElement("select").appendChild(r.createElement("option"));
                    (t.type = "checkbox"), (m.checkOn = "" !== t.value), (m.optSelected = e.selected), ((t = r.createElement("input")).value = "t"), (t.type = "radio"), (m.radioValue = "t" === t.value);
                })();
            var de,
                pe = k.expr.attrHandle;
            k.fn.extend({
                attr: function (t, e) {
                    return W(this, k.attr, t, e, arguments.length > 1);
                },
                removeAttr: function (t) {
                    return this.each(function () {
                        k.removeAttr(this, t);
                    });
                },
            }),
                k.extend({
                    attr: function (t, e, i) {
                        var n,
                            o,
                            s = t.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s)
                            return void 0 === t.getAttribute
                                ? k.prop(t, e, i)
                                : ((1 === s && k.isXMLDoc(t)) || (o = k.attrHooks[e.toLowerCase()] || (k.expr.match.bool.test(e) ? de : void 0)),
                                  void 0 !== i
                                      ? null === i
                                          ? void k.removeAttr(t, e)
                                          : o && "set" in o && void 0 !== (n = o.set(t, i, e))
                                          ? n
                                          : (t.setAttribute(e, i + ""), i)
                                      : o && "get" in o && null !== (n = o.get(t, e))
                                      ? n
                                      : null == (n = k.find.attr(t, e))
                                      ? void 0
                                      : n);
                    },
                    attrHooks: {
                        type: {
                            set: function (t, e) {
                                if (!m.radioValue && "radio" === e && D(t, "input")) {
                                    var i = t.value;
                                    return t.setAttribute("type", e), i && (t.value = i), e;
                                }
                            },
                        },
                    },
                    removeAttr: function (t, e) {
                        var i,
                            n = 0,
                            o = e && e.match(_);
                        if (o && 1 === t.nodeType) for (; (i = o[n++]); ) t.removeAttribute(i);
                    },
                }),
                (de = {
                    set: function (t, e, i) {
                        return !1 === e ? k.removeAttr(t, i) : t.setAttribute(i, i), i;
                    },
                }),
                k.each(k.expr.match.bool.source.match(/\w+/g), function (t, e) {
                    var i = pe[e] || k.find.attr;
                    pe[e] = function (t, e, n) {
                        var o,
                            s,
                            r = e.toLowerCase();
                        return n || ((s = pe[r]), (pe[r] = o), (o = null != i(t, e, n) ? r : null), (pe[r] = s)), o;
                    };
                });
            var he = /^(?:input|select|textarea|button)$/i,
                fe = /^(?:a|area)$/i;
            function ge(t) {
                return (t.match(_) || []).join(" ");
            }
            function ve(t) {
                return (t.getAttribute && t.getAttribute("class")) || "";
            }
            function me(t) {
                return Array.isArray(t) ? t : ("string" == typeof t && t.match(_)) || [];
            }
            k.fn.extend({
                prop: function (t, e) {
                    return W(this, k.prop, t, e, arguments.length > 1);
                },
                removeProp: function (t) {
                    return this.each(function () {
                        delete this[k.propFix[t] || t];
                    });
                },
            }),
                k.extend({
                    prop: function (t, e, i) {
                        var n,
                            o,
                            s = t.nodeType;
                        if (3 !== s && 8 !== s && 2 !== s)
                            return (
                                (1 === s && k.isXMLDoc(t)) || ((e = k.propFix[e] || e), (o = k.propHooks[e])),
                                void 0 !== i ? (o && "set" in o && void 0 !== (n = o.set(t, i, e)) ? n : (t[e] = i)) : o && "get" in o && null !== (n = o.get(t, e)) ? n : t[e]
                            );
                    },
                    propHooks: {
                        tabIndex: {
                            get: function (t) {
                                var e = k.find.attr(t, "tabindex");
                                return e ? parseInt(e, 10) : he.test(t.nodeName) || (fe.test(t.nodeName) && t.href) ? 0 : -1;
                            },
                        },
                    },
                    propFix: { for: "htmlFor", class: "className" },
                }),
                m.optSelected ||
                    (k.propHooks.selected = {
                        get: function (t) {
                            var e = t.parentNode;
                            return e && e.parentNode && e.parentNode.selectedIndex, null;
                        },
                        set: function (t) {
                            var e = t.parentNode;
                            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
                        },
                    }),
                k.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
                    k.propFix[this.toLowerCase()] = this;
                }),
                k.fn.extend({
                    addClass: function (t) {
                        var e,
                            i,
                            n,
                            o,
                            s,
                            r,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                k(this).addClass(t.call(this, e, ve(this)));
                            });
                        if ((e = me(t)).length)
                            for (; (i = this[l++]); )
                                if (((o = ve(i)), (n = 1 === i.nodeType && " " + ge(o) + " "))) {
                                    for (r = 0; (s = e[r++]); ) n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                                    o !== (a = ge(n)) && i.setAttribute("class", a);
                                }
                        return this;
                    },
                    removeClass: function (t) {
                        var e,
                            i,
                            n,
                            o,
                            s,
                            r,
                            a,
                            l = 0;
                        if (y(t))
                            return this.each(function (e) {
                                k(this).removeClass(t.call(this, e, ve(this)));
                            });
                        if (!arguments.length) return this.attr("class", "");
                        if ((e = me(t)).length)
                            for (; (i = this[l++]); )
                                if (((o = ve(i)), (n = 1 === i.nodeType && " " + ge(o) + " "))) {
                                    for (r = 0; (s = e[r++]); ) for (; n.indexOf(" " + s + " ") > -1; ) n = n.replace(" " + s + " ", " ");
                                    o !== (a = ge(n)) && i.setAttribute("class", a);
                                }
                        return this;
                    },
                    toggleClass: function (t, e) {
                        var i = typeof t,
                            n = "string" === i || Array.isArray(t);
                        return "boolean" == typeof e && n
                            ? e
                                ? this.addClass(t)
                                : this.removeClass(t)
                            : y(t)
                            ? this.each(function (i) {
                                  k(this).toggleClass(t.call(this, i, ve(this), e), e);
                              })
                            : this.each(function () {
                                  var e, o, s, r;
                                  if (n) for (o = 0, s = k(this), r = me(t); (e = r[o++]); ) s.hasClass(e) ? s.removeClass(e) : s.addClass(e);
                                  else (void 0 !== t && "boolean" !== i) || ((e = ve(this)) && J.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === t ? "" : J.get(this, "__className__") || ""));
                              });
                    },
                    hasClass: function (t) {
                        var e,
                            i,
                            n = 0;
                        for (e = " " + t + " "; (i = this[n++]); ) if (1 === i.nodeType && (" " + ge(ve(i)) + " ").indexOf(e) > -1) return !0;
                        return !1;
                    },
                });
            var ye = /\r/g;
            k.fn.extend({
                val: function (t) {
                    var e,
                        i,
                        n,
                        o = this[0];
                    return arguments.length
                        ? ((n = y(t)),
                          this.each(function (i) {
                              var o;
                              1 === this.nodeType &&
                                  (null == (o = n ? t.call(this, i, k(this).val()) : t)
                                      ? (o = "")
                                      : "number" == typeof o
                                      ? (o += "")
                                      : Array.isArray(o) &&
                                        (o = k.map(o, function (t) {
                                            return null == t ? "" : t + "";
                                        })),
                                  ((e = k.valHooks[this.type] || k.valHooks[this.nodeName.toLowerCase()]) && "set" in e && void 0 !== e.set(this, o, "value")) || (this.value = o));
                          }))
                        : o
                        ? (e = k.valHooks[o.type] || k.valHooks[o.nodeName.toLowerCase()]) && "get" in e && void 0 !== (i = e.get(o, "value"))
                            ? i
                            : "string" == typeof (i = o.value)
                            ? i.replace(ye, "")
                            : null == i
                            ? ""
                            : i
                        : void 0;
                },
            }),
                k.extend({
                    valHooks: {
                        option: {
                            get: function (t) {
                                var e = k.find.attr(t, "value");
                                return null != e ? e : ge(k.text(t));
                            },
                        },
                        select: {
                            get: function (t) {
                                var e,
                                    i,
                                    n,
                                    o = t.options,
                                    s = t.selectedIndex,
                                    r = "select-one" === t.type,
                                    a = r ? null : [],
                                    l = r ? s + 1 : o.length;
                                for (n = s < 0 ? l : r ? s : 0; n < l; n++)
                                    if (((i = o[n]).selected || n === s) && !i.disabled && (!i.parentNode.disabled || !D(i.parentNode, "optgroup"))) {
                                        if (((e = k(i).val()), r)) return e;
                                        a.push(e);
                                    }
                                return a;
                            },
                            set: function (t, e) {
                                for (var i, n, o = t.options, s = k.makeArray(e), r = o.length; r--; ) ((n = o[r]).selected = k.inArray(k.valHooks.option.get(n), s) > -1) && (i = !0);
                                return i || (t.selectedIndex = -1), s;
                            },
                        },
                    },
                }),
                k.each(["radio", "checkbox"], function () {
                    (k.valHooks[this] = {
                        set: function (t, e) {
                            if (Array.isArray(e)) return (t.checked = k.inArray(k(t).val(), e) > -1);
                        },
                    }),
                        m.checkOn ||
                            (k.valHooks[this].get = function (t) {
                                return null === t.getAttribute("value") ? "on" : t.value;
                            });
                }),
                (m.focusin = "onfocusin" in i);
            var be = /^(?:focusinfocus|focusoutblur)$/,
                we = function (t) {
                    t.stopPropagation();
                };
            k.extend(k.event, {
                trigger: function (t, e, n, o) {
                    var s,
                        a,
                        l,
                        c,
                        u,
                        d,
                        p,
                        h,
                        g = [n || r],
                        v = f.call(t, "type") ? t.type : t,
                        m = f.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (
                        ((a = h = l = n = n || r),
                        3 !== n.nodeType &&
                            8 !== n.nodeType &&
                            !be.test(v + k.event.triggered) &&
                            (v.indexOf(".") > -1 && ((v = (m = v.split(".")).shift()), m.sort()),
                            (u = v.indexOf(":") < 0 && "on" + v),
                            ((t = t[k.expando] ? t : new k.Event(v, "object" == typeof t && t)).isTrigger = o ? 2 : 3),
                            (t.namespace = m.join(".")),
                            (t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null),
                            (t.result = void 0),
                            t.target || (t.target = n),
                            (e = null == e ? [t] : k.makeArray(e, [t])),
                            (p = k.event.special[v] || {}),
                            o || !p.trigger || !1 !== p.trigger.apply(n, e)))
                    ) {
                        if (!o && !p.noBubble && !b(n)) {
                            for (c = p.delegateType || v, be.test(c + v) || (a = a.parentNode); a; a = a.parentNode) g.push(a), (l = a);
                            l === (n.ownerDocument || r) && g.push(l.defaultView || l.parentWindow || i);
                        }
                        for (s = 0; (a = g[s++]) && !t.isPropagationStopped(); )
                            (h = a),
                                (t.type = s > 1 ? c : p.bindType || v),
                                (d = (J.get(a, "events") || {})[t.type] && J.get(a, "handle")) && d.apply(a, e),
                                (d = u && a[u]) && d.apply && K(a) && ((t.result = d.apply(a, e)), !1 === t.result && t.preventDefault());
                        return (
                            (t.type = v),
                            o ||
                                t.isDefaultPrevented() ||
                                (p._default && !1 !== p._default.apply(g.pop(), e)) ||
                                !K(n) ||
                                (u &&
                                    y(n[v]) &&
                                    !b(n) &&
                                    ((l = n[u]) && (n[u] = null),
                                    (k.event.triggered = v),
                                    t.isPropagationStopped() && h.addEventListener(v, we),
                                    n[v](),
                                    t.isPropagationStopped() && h.removeEventListener(v, we),
                                    (k.event.triggered = void 0),
                                    l && (n[u] = l))),
                            t.result
                        );
                    }
                },
                simulate: function (t, e, i) {
                    var n = k.extend(new k.Event(), i, { type: t, isSimulated: !0 });
                    k.event.trigger(n, null, e);
                },
            }),
                k.fn.extend({
                    trigger: function (t, e) {
                        return this.each(function () {
                            k.event.trigger(t, e, this);
                        });
                    },
                    triggerHandler: function (t, e) {
                        var i = this[0];
                        if (i) return k.event.trigger(t, e, i, !0);
                    },
                }),
                m.focusin ||
                    k.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
                        var i = function (t) {
                            k.event.simulate(e, t.target, k.event.fix(t));
                        };
                        k.event.special[e] = {
                            setup: function () {
                                var n = this.ownerDocument || this,
                                    o = J.access(n, e);
                                o || n.addEventListener(t, i, !0), J.access(n, e, (o || 0) + 1);
                            },
                            teardown: function () {
                                var n = this.ownerDocument || this,
                                    o = J.access(n, e) - 1;
                                o ? J.access(n, e, o) : (n.removeEventListener(t, i, !0), J.remove(n, e));
                            },
                        };
                    });
            var xe = i.location,
                Ce = Date.now(),
                ke = /\?/;
            k.parseXML = function (t) {
                var e;
                if (!t || "string" != typeof t) return null;
                try {
                    e = new i.DOMParser().parseFromString(t, "text/xml");
                } catch (t) {
                    e = void 0;
                }
                return (e && !e.getElementsByTagName("parsererror").length) || k.error("Invalid XML: " + t), e;
            };
            var Se = /\[\]$/,
                $e = /\r?\n/g,
                Te = /^(?:submit|button|image|reset|file)$/i,
                Ee = /^(?:input|select|textarea|keygen)/i;
            function Oe(t, e, i, n) {
                var o;
                if (Array.isArray(e))
                    k.each(e, function (e, o) {
                        i || Se.test(t) ? n(t, o) : Oe(t + "[" + ("object" == typeof o && null != o ? e : "") + "]", o, i, n);
                    });
                else if (i || "object" !== C(e)) n(t, e);
                else for (o in e) Oe(t + "[" + o + "]", e[o], i, n);
            }
            (k.param = function (t, e) {
                var i,
                    n = [],
                    o = function (t, e) {
                        var i = y(e) ? e() : e;
                        n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == i ? "" : i);
                    };
                if (Array.isArray(t) || (t.jquery && !k.isPlainObject(t)))
                    k.each(t, function () {
                        o(this.name, this.value);
                    });
                else for (i in t) Oe(i, t[i], e, o);
                return n.join("&");
            }),
                k.fn.extend({
                    serialize: function () {
                        return k.param(this.serializeArray());
                    },
                    serializeArray: function () {
                        return this.map(function () {
                            var t = k.prop(this, "elements");
                            return t ? k.makeArray(t) : this;
                        })
                            .filter(function () {
                                var t = this.type;
                                return this.name && !k(this).is(":disabled") && Ee.test(this.nodeName) && !Te.test(t) && (this.checked || !pt.test(t));
                            })
                            .map(function (t, e) {
                                var i = k(this).val();
                                return null == i
                                    ? null
                                    : Array.isArray(i)
                                    ? k.map(i, function (t) {
                                          return { name: e.name, value: t.replace($e, "\r\n") };
                                      })
                                    : { name: e.name, value: i.replace($e, "\r\n") };
                            })
                            .get();
                    },
                });
            var Ae = /%20/g,
                De = /#.*$/,
                Ie = /([?&])_=[^&]*/,
                Pe = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                Ne = /^(?:GET|HEAD)$/,
                Le = /^\/\//,
                je = {},
                He = {},
                ze = "*/".concat("*"),
                _e = r.createElement("a");
            function Fe(t) {
                return function (e, i) {
                    "string" != typeof e && ((i = e), (e = "*"));
                    var n,
                        o = 0,
                        s = e.toLowerCase().match(_) || [];
                    if (y(i)) for (; (n = s[o++]); ) "+" === n[0] ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i);
                };
            }
            function Me(t, e, i, n) {
                var o = {},
                    s = t === He;
                function r(a) {
                    var l;
                    return (
                        (o[a] = !0),
                        k.each(t[a] || [], function (t, a) {
                            var c = a(e, i, n);
                            return "string" != typeof c || s || o[c] ? (s ? !(l = c) : void 0) : (e.dataTypes.unshift(c), r(c), !1);
                        }),
                        l
                    );
                }
                return r(e.dataTypes[0]) || (!o["*"] && r("*"));
            }
            function Re(t, e) {
                var i,
                    n,
                    o = k.ajaxSettings.flatOptions || {};
                for (i in e) void 0 !== e[i] && ((o[i] ? t : n || (n = {}))[i] = e[i]);
                return n && k.extend(!0, t, n), t;
            }
            (_e.href = xe.href),
                k.extend({
                    active: 0,
                    lastModified: {},
                    etag: {},
                    ajaxSettings: {
                        url: xe.href,
                        type: "GET",
                        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(xe.protocol),
                        global: !0,
                        processData: !0,
                        async: !0,
                        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                        accepts: { "*": ze, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" },
                        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                        responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" },
                        converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": k.parseXML },
                        flatOptions: { url: !0, context: !0 },
                    },
                    ajaxSetup: function (t, e) {
                        return e ? Re(Re(t, k.ajaxSettings), e) : Re(k.ajaxSettings, t);
                    },
                    ajaxPrefilter: Fe(je),
                    ajaxTransport: Fe(He),
                    ajax: function (t, e) {
                        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
                        var n,
                            o,
                            s,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p,
                            h,
                            f = k.ajaxSetup({}, e),
                            g = f.context || f,
                            v = f.context && (g.nodeType || g.jquery) ? k(g) : k.event,
                            m = k.Deferred(),
                            y = k.Callbacks("once memory"),
                            b = f.statusCode || {},
                            w = {},
                            x = {},
                            C = "canceled",
                            S = {
                                readyState: 0,
                                getResponseHeader: function (t) {
                                    var e;
                                    if (u) {
                                        if (!a) for (a = {}; (e = Pe.exec(s)); ) a[e[1].toLowerCase()] = e[2];
                                        e = a[t.toLowerCase()];
                                    }
                                    return null == e ? null : e;
                                },
                                getAllResponseHeaders: function () {
                                    return u ? s : null;
                                },
                                setRequestHeader: function (t, e) {
                                    return null == u && ((t = x[t.toLowerCase()] = x[t.toLowerCase()] || t), (w[t] = e)), this;
                                },
                                overrideMimeType: function (t) {
                                    return null == u && (f.mimeType = t), this;
                                },
                                statusCode: function (t) {
                                    var e;
                                    if (t)
                                        if (u) S.always(t[S.status]);
                                        else for (e in t) b[e] = [b[e], t[e]];
                                    return this;
                                },
                                abort: function (t) {
                                    var e = t || C;
                                    return n && n.abort(e), $(0, e), this;
                                },
                            };
                        if (
                            (m.promise(S),
                            (f.url = ((t || f.url || xe.href) + "").replace(Le, xe.protocol + "//")),
                            (f.type = e.method || e.type || f.method || f.type),
                            (f.dataTypes = (f.dataType || "*").toLowerCase().match(_) || [""]),
                            null == f.crossDomain)
                        ) {
                            c = r.createElement("a");
                            try {
                                (c.href = f.url), (c.href = c.href), (f.crossDomain = _e.protocol + "//" + _e.host != c.protocol + "//" + c.host);
                            } catch (t) {
                                f.crossDomain = !0;
                            }
                        }
                        if ((f.data && f.processData && "string" != typeof f.data && (f.data = k.param(f.data, f.traditional)), Me(je, f, e, S), u)) return S;
                        for (p in ((d = k.event && f.global) && 0 == k.active++ && k.event.trigger("ajaxStart"),
                        (f.type = f.type.toUpperCase()),
                        (f.hasContent = !Ne.test(f.type)),
                        (o = f.url.replace(De, "")),
                        f.hasContent
                            ? f.data && f.processData && 0 === (f.contentType || "").indexOf("application/x-www-form-urlencoded") && (f.data = f.data.replace(Ae, "+"))
                            : ((h = f.url.slice(o.length)),
                              f.data && (f.processData || "string" == typeof f.data) && ((o += (ke.test(o) ? "&" : "?") + f.data), delete f.data),
                              !1 === f.cache && ((o = o.replace(Ie, "$1")), (h = (ke.test(o) ? "&" : "?") + "_=" + Ce++ + h)),
                              (f.url = o + h)),
                        f.ifModified && (k.lastModified[o] && S.setRequestHeader("If-Modified-Since", k.lastModified[o]), k.etag[o] && S.setRequestHeader("If-None-Match", k.etag[o])),
                        ((f.data && f.hasContent && !1 !== f.contentType) || e.contentType) && S.setRequestHeader("Content-Type", f.contentType),
                        S.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + ze + "; q=0.01" : "") : f.accepts["*"]),
                        f.headers))
                            S.setRequestHeader(p, f.headers[p]);
                        if (f.beforeSend && (!1 === f.beforeSend.call(g, S, f) || u)) return S.abort();
                        if (((C = "abort"), y.add(f.complete), S.done(f.success), S.fail(f.error), (n = Me(He, f, e, S)))) {
                            if (((S.readyState = 1), d && v.trigger("ajaxSend", [S, f]), u)) return S;
                            f.async &&
                                f.timeout > 0 &&
                                (l = i.setTimeout(function () {
                                    S.abort("timeout");
                                }, f.timeout));
                            try {
                                (u = !1), n.send(w, $);
                            } catch (t) {
                                if (u) throw t;
                                $(-1, t);
                            }
                        } else $(-1, "No Transport");
                        function $(t, e, r, a) {
                            var c,
                                p,
                                h,
                                w,
                                x,
                                C = e;
                            u ||
                                ((u = !0),
                                l && i.clearTimeout(l),
                                (n = void 0),
                                (s = a || ""),
                                (S.readyState = t > 0 ? 4 : 0),
                                (c = (t >= 200 && t < 300) || 304 === t),
                                r &&
                                    (w = (function (t, e, i) {
                                        for (var n, o, s, r, a = t.contents, l = t.dataTypes; "*" === l[0]; ) l.shift(), void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
                                        if (n)
                                            for (o in a)
                                                if (a[o] && a[o].test(n)) {
                                                    l.unshift(o);
                                                    break;
                                                }
                                        if (l[0] in i) s = l[0];
                                        else {
                                            for (o in i) {
                                                if (!l[0] || t.converters[o + " " + l[0]]) {
                                                    s = o;
                                                    break;
                                                }
                                                r || (r = o);
                                            }
                                            s = s || r;
                                        }
                                        if (s) return s !== l[0] && l.unshift(s), i[s];
                                    })(f, S, r)),
                                (w = (function (t, e, i, n) {
                                    var o,
                                        s,
                                        r,
                                        a,
                                        l,
                                        c = {},
                                        u = t.dataTypes.slice();
                                    if (u[1]) for (r in t.converters) c[r.toLowerCase()] = t.converters[r];
                                    for (s = u.shift(); s; )
                                        if ((t.responseFields[s] && (i[t.responseFields[s]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), (l = s), (s = u.shift())))
                                            if ("*" === s) s = l;
                                            else if ("*" !== l && l !== s) {
                                                if (!(r = c[l + " " + s] || c["* " + s]))
                                                    for (o in c)
                                                        if ((a = o.split(" "))[1] === s && (r = c[l + " " + a[0]] || c["* " + a[0]])) {
                                                            !0 === r ? (r = c[o]) : !0 !== c[o] && ((s = a[0]), u.unshift(a[1]));
                                                            break;
                                                        }
                                                if (!0 !== r)
                                                    if (r && t.throws) e = r(e);
                                                    else
                                                        try {
                                                            e = r(e);
                                                        } catch (t) {
                                                            return { state: "parsererror", error: r ? t : "No conversion from " + l + " to " + s };
                                                        }
                                            }
                                    return { state: "success", data: e };
                                })(f, w, S, c)),
                                c
                                    ? (f.ifModified && ((x = S.getResponseHeader("Last-Modified")) && (k.lastModified[o] = x), (x = S.getResponseHeader("etag")) && (k.etag[o] = x)),
                                      204 === t || "HEAD" === f.type ? (C = "nocontent") : 304 === t ? (C = "notmodified") : ((C = w.state), (p = w.data), (c = !(h = w.error))))
                                    : ((h = C), (!t && C) || ((C = "error"), t < 0 && (t = 0))),
                                (S.status = t),
                                (S.statusText = (e || C) + ""),
                                c ? m.resolveWith(g, [p, C, S]) : m.rejectWith(g, [S, C, h]),
                                S.statusCode(b),
                                (b = void 0),
                                d && v.trigger(c ? "ajaxSuccess" : "ajaxError", [S, f, c ? p : h]),
                                y.fireWith(g, [S, C]),
                                d && (v.trigger("ajaxComplete", [S, f]), --k.active || k.event.trigger("ajaxStop")));
                        }
                        return S;
                    },
                    getJSON: function (t, e, i) {
                        return k.get(t, e, i, "json");
                    },
                    getScript: function (t, e) {
                        return k.get(t, void 0, e, "script");
                    },
                }),
                k.each(["get", "post"], function (t, e) {
                    k[e] = function (t, i, n, o) {
                        return y(i) && ((o = o || n), (n = i), (i = void 0)), k.ajax(k.extend({ url: t, type: e, dataType: o, data: i, success: n }, k.isPlainObject(t) && t));
                    };
                }),
                (k._evalUrl = function (t) {
                    return k.ajax({ url: t, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, throws: !0 });
                }),
                k.fn.extend({
                    wrapAll: function (t) {
                        var e;
                        return (
                            this[0] &&
                                (y(t) && (t = t.call(this[0])),
                                (e = k(t, this[0].ownerDocument).eq(0).clone(!0)),
                                this[0].parentNode && e.insertBefore(this[0]),
                                e
                                    .map(function () {
                                        for (var t = this; t.firstElementChild; ) t = t.firstElementChild;
                                        return t;
                                    })
                                    .append(this)),
                            this
                        );
                    },
                    wrapInner: function (t) {
                        return y(t)
                            ? this.each(function (e) {
                                  k(this).wrapInner(t.call(this, e));
                              })
                            : this.each(function () {
                                  var e = k(this),
                                      i = e.contents();
                                  i.length ? i.wrapAll(t) : e.append(t);
                              });
                    },
                    wrap: function (t) {
                        var e = y(t);
                        return this.each(function (i) {
                            k(this).wrapAll(e ? t.call(this, i) : t);
                        });
                    },
                    unwrap: function (t) {
                        return (
                            this.parent(t)
                                .not("body")
                                .each(function () {
                                    k(this).replaceWith(this.childNodes);
                                }),
                            this
                        );
                    },
                }),
                (k.expr.pseudos.hidden = function (t) {
                    return !k.expr.pseudos.visible(t);
                }),
                (k.expr.pseudos.visible = function (t) {
                    return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length);
                }),
                (k.ajaxSettings.xhr = function () {
                    try {
                        return new i.XMLHttpRequest();
                    } catch (t) {}
                });
            var qe = { 0: 200, 1223: 204 },
                Be = k.ajaxSettings.xhr();
            (m.cors = !!Be && "withCredentials" in Be),
                (m.ajax = Be = !!Be),
                k.ajaxTransport(function (t) {
                    var e, n;
                    if (m.cors || (Be && !t.crossDomain))
                        return {
                            send: function (o, s) {
                                var r,
                                    a = t.xhr();
                                if ((a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)) for (r in t.xhrFields) a[r] = t.xhrFields[r];
                                for (r in (t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest"), o)) a.setRequestHeader(r, o[r]);
                                (e = function (t) {
                                    return function () {
                                        e &&
                                            ((e = n = a.onload = a.onerror = a.onabort = a.ontimeout = a.onreadystatechange = null),
                                            "abort" === t
                                                ? a.abort()
                                                : "error" === t
                                                ? "number" != typeof a.status
                                                    ? s(0, "error")
                                                    : s(a.status, a.statusText)
                                                : s(
                                                      qe[a.status] || a.status,
                                                      a.statusText,
                                                      "text" !== (a.responseType || "text") || "string" != typeof a.responseText ? { binary: a.response } : { text: a.responseText },
                                                      a.getAllResponseHeaders()
                                                  ));
                                    };
                                }),
                                    (a.onload = e()),
                                    (n = a.onerror = a.ontimeout = e("error")),
                                    void 0 !== a.onabort
                                        ? (a.onabort = n)
                                        : (a.onreadystatechange = function () {
                                              4 === a.readyState &&
                                                  i.setTimeout(function () {
                                                      e && n();
                                                  });
                                          }),
                                    (e = e("abort"));
                                try {
                                    a.send((t.hasContent && t.data) || null);
                                } catch (t) {
                                    if (e) throw t;
                                }
                            },
                            abort: function () {
                                e && e();
                            },
                        };
                }),
                k.ajaxPrefilter(function (t) {
                    t.crossDomain && (t.contents.script = !1);
                }),
                k.ajaxSetup({
                    accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" },
                    contents: { script: /\b(?:java|ecma)script\b/ },
                    converters: {
                        "text script": function (t) {
                            return k.globalEval(t), t;
                        },
                    },
                }),
                k.ajaxPrefilter("script", function (t) {
                    void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
                }),
                k.ajaxTransport("script", function (t) {
                    var e, i;
                    if (t.crossDomain)
                        return {
                            send: function (n, o) {
                                (e = k("<script>")
                                    .prop({ charset: t.scriptCharset, src: t.url })
                                    .on(
                                        "load error",
                                        (i = function (t) {
                                            e.remove(), (i = null), t && o("error" === t.type ? 404 : 200, t.type);
                                        })
                                    )),
                                    r.head.appendChild(e[0]);
                            },
                            abort: function () {
                                i && i();
                            },
                        };
                });
            var Ue,
                We = [],
                Ve = /(=)\?(?=&|$)|\?\?/;
            k.ajaxSetup({
                jsonp: "callback",
                jsonpCallback: function () {
                    var t = We.pop() || k.expando + "_" + Ce++;
                    return (this[t] = !0), t;
                },
            }),
                k.ajaxPrefilter("json jsonp", function (t, e, n) {
                    var o,
                        s,
                        r,
                        a = !1 !== t.jsonp && (Ve.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && Ve.test(t.data) && "data");
                    if (a || "jsonp" === t.dataTypes[0])
                        return (
                            (o = t.jsonpCallback = y(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback),
                            a ? (t[a] = t[a].replace(Ve, "$1" + o)) : !1 !== t.jsonp && (t.url += (ke.test(t.url) ? "&" : "?") + t.jsonp + "=" + o),
                            (t.converters["script json"] = function () {
                                return r || k.error(o + " was not called"), r[0];
                            }),
                            (t.dataTypes[0] = "json"),
                            (s = i[o]),
                            (i[o] = function () {
                                r = arguments;
                            }),
                            n.always(function () {
                                void 0 === s ? k(i).removeProp(o) : (i[o] = s), t[o] && ((t.jsonpCallback = e.jsonpCallback), We.push(o)), r && y(s) && s(r[0]), (r = s = void 0);
                            }),
                            "script"
                        );
                }),
                (m.createHTMLDocument = (((Ue = r.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>"), 2 === Ue.childNodes.length)),
                (k.parseHTML = function (t, e, i) {
                    return "string" != typeof t
                        ? []
                        : ("boolean" == typeof e && ((i = e), (e = !1)),
                          e || (m.createHTMLDocument ? (((n = (e = r.implementation.createHTMLDocument("")).createElement("base")).href = r.location.href), e.head.appendChild(n)) : (e = r)),
                          (o = I.exec(t)),
                          (s = !i && []),
                          o ? [e.createElement(o[1])] : ((o = xt([t], e, s)), s && s.length && k(s).remove(), k.merge([], o.childNodes)));
                    var n, o, s;
                }),
                (k.fn.load = function (t, e, i) {
                    var n,
                        o,
                        s,
                        r = this,
                        a = t.indexOf(" ");
                    return (
                        a > -1 && ((n = ge(t.slice(a))), (t = t.slice(0, a))),
                        y(e) ? ((i = e), (e = void 0)) : e && "object" == typeof e && (o = "POST"),
                        r.length > 0 &&
                            k
                                .ajax({ url: t, type: o || "GET", dataType: "html", data: e })
                                .done(function (t) {
                                    (s = arguments), r.html(n ? k("<div>").append(k.parseHTML(t)).find(n) : t);
                                })
                                .always(
                                    i &&
                                        function (t, e) {
                                            r.each(function () {
                                                i.apply(this, s || [t.responseText, e, t]);
                                            });
                                        }
                                ),
                        this
                    );
                }),
                k.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
                    k.fn[e] = function (t) {
                        return this.on(e, t);
                    };
                }),
                (k.expr.pseudos.animated = function (t) {
                    return k.grep(k.timers, function (e) {
                        return t === e.elem;
                    }).length;
                }),
                (k.offset = {
                    setOffset: function (t, e, i) {
                        var n,
                            o,
                            s,
                            r,
                            a,
                            l,
                            c = k.css(t, "position"),
                            u = k(t),
                            d = {};
                        "static" === c && (t.style.position = "relative"),
                            (a = u.offset()),
                            (s = k.css(t, "top")),
                            (l = k.css(t, "left")),
                            ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? ((r = (n = u.position()).top), (o = n.left)) : ((r = parseFloat(s) || 0), (o = parseFloat(l) || 0)),
                            y(e) && (e = e.call(t, i, k.extend({}, a))),
                            null != e.top && (d.top = e.top - a.top + r),
                            null != e.left && (d.left = e.left - a.left + o),
                            "using" in e ? e.using.call(t, d) : u.css(d);
                    },
                }),
                k.fn.extend({
                    offset: function (t) {
                        if (arguments.length)
                            return void 0 === t
                                ? this
                                : this.each(function (e) {
                                      k.offset.setOffset(this, t, e);
                                  });
                        var e,
                            i,
                            n = this[0];
                        return n ? (n.getClientRects().length ? ((e = n.getBoundingClientRect()), (i = n.ownerDocument.defaultView), { top: e.top + i.pageYOffset, left: e.left + i.pageXOffset }) : { top: 0, left: 0 }) : void 0;
                    },
                    position: function () {
                        if (this[0]) {
                            var t,
                                e,
                                i,
                                n = this[0],
                                o = { top: 0, left: 0 };
                            if ("fixed" === k.css(n, "position")) e = n.getBoundingClientRect();
                            else {
                                for (e = this.offset(), i = n.ownerDocument, t = n.offsetParent || i.documentElement; t && (t === i.body || t === i.documentElement) && "static" === k.css(t, "position"); ) t = t.parentNode;
                                t && t !== n && 1 === t.nodeType && (((o = k(t).offset()).top += k.css(t, "borderTopWidth", !0)), (o.left += k.css(t, "borderLeftWidth", !0)));
                            }
                            return { top: e.top - o.top - k.css(n, "marginTop", !0), left: e.left - o.left - k.css(n, "marginLeft", !0) };
                        }
                    },
                    offsetParent: function () {
                        return this.map(function () {
                            for (var t = this.offsetParent; t && "static" === k.css(t, "position"); ) t = t.offsetParent;
                            return t || Ct;
                        });
                    },
                }),
                k.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, e) {
                    var i = "pageYOffset" === e;
                    k.fn[t] = function (n) {
                        return W(
                            this,
                            function (t, n, o) {
                                var s;
                                if ((b(t) ? (s = t) : 9 === t.nodeType && (s = t.defaultView), void 0 === o)) return s ? s[e] : t[n];
                                s ? s.scrollTo(i ? s.pageXOffset : o, i ? o : s.pageYOffset) : (t[n] = o);
                            },
                            t,
                            n,
                            arguments.length
                        );
                    };
                }),
                k.each(["top", "left"], function (t, e) {
                    k.cssHooks[e] = Ut(m.pixelPosition, function (t, i) {
                        if (i) return (i = Bt(t, e)), Mt.test(i) ? k(t).position()[e] + "px" : i;
                    });
                }),
                k.each({ Height: "height", Width: "width" }, function (t, e) {
                    k.each({ padding: "inner" + t, content: e, "": "outer" + t }, function (i, n) {
                        k.fn[n] = function (o, s) {
                            var r = arguments.length && (i || "boolean" != typeof o),
                                a = i || (!0 === o || !0 === s ? "margin" : "border");
                            return W(
                                this,
                                function (e, i, o) {
                                    var s;
                                    return b(e)
                                        ? 0 === n.indexOf("outer")
                                            ? e["inner" + t]
                                            : e.document.documentElement["client" + t]
                                        : 9 === e.nodeType
                                        ? ((s = e.documentElement), Math.max(e.body["scroll" + t], s["scroll" + t], e.body["offset" + t], s["offset" + t], s["client" + t]))
                                        : void 0 === o
                                        ? k.css(e, i, a)
                                        : k.style(e, i, o, a);
                                },
                                e,
                                r ? o : void 0,
                                r
                            );
                        };
                    });
                }),
                k.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, e) {
                    k.fn[e] = function (t, i) {
                        return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e);
                    };
                }),
                k.fn.extend({
                    hover: function (t, e) {
                        return this.mouseenter(t).mouseleave(e || t);
                    },
                }),
                k.fn.extend({
                    bind: function (t, e, i) {
                        return this.on(t, null, e, i);
                    },
                    unbind: function (t, e) {
                        return this.off(t, null, e);
                    },
                    delegate: function (t, e, i, n) {
                        return this.on(e, t, i, n);
                    },
                    undelegate: function (t, e, i) {
                        return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i);
                    },
                }),
                (k.proxy = function (t, e) {
                    var i, n, o;
                    if (("string" == typeof e && ((i = t[e]), (e = t), (t = i)), y(t)))
                        return (
                            (n = l.call(arguments, 2)),
                            ((o = function () {
                                return t.apply(e || this, n.concat(l.call(arguments)));
                            }).guid = t.guid = t.guid || k.guid++),
                            o
                        );
                }),
                (k.holdReady = function (t) {
                    t ? k.readyWait++ : k.ready(!0);
                }),
                (k.isArray = Array.isArray),
                (k.parseJSON = JSON.parse),
                (k.nodeName = D),
                (k.isFunction = y),
                (k.isWindow = b),
                (k.camelCase = Y),
                (k.type = C),
                (k.now = Date.now),
                (k.isNumeric = function (t) {
                    var e = k.type(t);
                    return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t));
                }),
                void 0 ===
                    (n = function () {
                        return k;
                    }.apply(e, [])) || (t.exports = n);
            var Qe = i.jQuery,
                Xe = i.$;
            return (
                (k.noConflict = function (t) {
                    return i.$ === k && (i.$ = Xe), t && i.jQuery === k && (i.jQuery = Qe), k;
                }),
                o || (i.jQuery = i.$ = k),
                k
            );
        });
    },
    14: function (t, e, i) {
        "use strict";
        (e.a = function (t) {
            (t = t instanceof jQuery ? t : $(t)).data("loading-text", t.html()).removeClass("btn-loading").button("reset");
        }),
            (e.b = function (t) {
                return FleetCart.langs[t];
            });
    },
    280: function (t, e, i) {
        t.exports = i(281);
    },
    281: function (t, e, i) {
        "use strict";
        function n(t) {
            return (n =
                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                    ? function (t) {
                          return typeof t;
                      }
                    : function (t) {
                          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                      })(t);
        }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var o = "object" === ("undefined" == typeof HTMLElement ? "undefined" : n(HTMLElement));
        function s(t) {
            return o ? t instanceof HTMLElement : t && "object" === n(t) && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName;
        }
        function r(t, e) {
            e.forEach(function (e) {
                t.classList.add(e);
            });
        }
        function a(t, e) {
            e.forEach(function (e) {
                t.classList.remove(e);
            });
        }
        var l =
            ".drift-bounding-box,.drift-zoom-pane{position:absolute;pointer-events:none}@keyframes noop{0%{zoom:1}}@-webkit-keyframes noop{0%{zoom:1}}.drift-zoom-pane.drift-open{display:block}.drift-zoom-pane.drift-closing,.drift-zoom-pane.drift-opening{animation:noop 1ms;-webkit-animation:noop 1ms}.drift-zoom-pane{overflow:hidden;width:100%;height:100%;top:0;left:0}.drift-zoom-pane-loader{display:none}.drift-zoom-pane img{position:absolute;display:block;max-width:none;max-height:none}";
        function c() {
            throw new Error("Missing parameter");
        }
        function u(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        var d = (function () {
            function t(e) {
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this.isShowing = !1);
                var i = e.namespace,
                    n = void 0 === i ? null : i,
                    o = e.zoomFactor,
                    s = void 0 === o ? c() : o,
                    r = e.containerEl,
                    a = void 0 === r ? c() : r;
                (this.settings = { namespace: n, zoomFactor: s, containerEl: a }), (this.openClasses = this._buildClasses("open")), this._buildElement();
            }
            var e, i, n;
            return (
                (e = t),
                (i = [
                    {
                        key: "_buildClasses",
                        value: function (t) {
                            var e = ["drift-".concat(t)],
                                i = this.settings.namespace;
                            return i && e.push("".concat(i, "-").concat(t)), e;
                        },
                    },
                    {
                        key: "_buildElement",
                        value: function () {
                            (this.el = document.createElement("div")), r(this.el, this._buildClasses("bounding-box"));
                        },
                    },
                    {
                        key: "show",
                        value: function (t, e) {
                            (this.isShowing = !0), this.settings.containerEl.appendChild(this.el);
                            var i = this.el.style;
                            (i.width = "".concat(Math.round(t / this.settings.zoomFactor), "px")), (i.height = "".concat(Math.round(e / this.settings.zoomFactor), "px")), r(this.el, this.openClasses);
                        },
                    },
                    {
                        key: "hide",
                        value: function () {
                            this.isShowing && this.settings.containerEl.removeChild(this.el), (this.isShowing = !1), a(this.el, this.openClasses);
                        },
                    },
                    {
                        key: "setPosition",
                        value: function (t, e, i) {
                            var n = window.pageXOffset,
                                o = window.pageYOffset,
                                s = i.left + t * i.width - this.el.clientWidth / 2 + n,
                                r = i.top + e * i.height - this.el.clientHeight / 2 + o;
                            this.el.getBoundingClientRect();
                            s < i.left + n ? (s = i.left + n) : s + this.el.clientWidth > i.left + i.width + n && (s = i.left + i.width - this.el.clientWidth + n),
                                r < i.top + o ? (r = i.top + o) : r + this.el.clientHeight > i.top + i.height + o && (r = i.top + i.height - this.el.clientHeight + o),
                                (this.el.style.left = "".concat(s, "px")),
                                (this.el.style.top = "".concat(r, "px"));
                        },
                    },
                ]) && u(e.prototype, i),
                n && u(e, n),
                t
            );
        })();
        function p(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        var h = (function () {
            function t() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                !(function (t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                })(this, t),
                    (this._show = this._show.bind(this)),
                    (this._hide = this._hide.bind(this)),
                    (this._handleEntry = this._handleEntry.bind(this)),
                    (this._handleMovement = this._handleMovement.bind(this));
                var i = e.el,
                    n = void 0 === i ? c() : i,
                    o = e.zoomPane,
                    s = void 0 === o ? c() : o,
                    r = e.sourceAttribute,
                    a = void 0 === r ? c() : r,
                    l = e.handleTouch,
                    u = void 0 === l ? c() : l,
                    p = e.onShow,
                    h = void 0 === p ? null : p,
                    f = e.onHide,
                    g = void 0 === f ? null : f,
                    v = e.hoverDelay,
                    m = void 0 === v ? 0 : v,
                    y = e.touchDelay,
                    b = void 0 === y ? 0 : y,
                    w = e.hoverBoundingBox,
                    x = void 0 === w ? c() : w,
                    C = e.touchBoundingBox,
                    k = void 0 === C ? c() : C,
                    S = e.namespace,
                    $ = void 0 === S ? null : S,
                    T = e.zoomFactor,
                    E = void 0 === T ? c() : T,
                    O = e.boundingBoxContainer,
                    A = void 0 === O ? c() : O;
                (this.settings = {
                    el: n,
                    zoomPane: s,
                    sourceAttribute: a,
                    handleTouch: u,
                    onShow: h,
                    onHide: g,
                    hoverDelay: m,
                    touchDelay: b,
                    hoverBoundingBox: x,
                    touchBoundingBox: k,
                    namespace: $,
                    zoomFactor: E,
                    boundingBoxContainer: A,
                }),
                    (this.settings.hoverBoundingBox || this.settings.touchBoundingBox) &&
                        (this.boundingBox = new d({ namespace: this.settings.namespace, zoomFactor: this.settings.zoomFactor, containerEl: this.settings.boundingBoxContainer })),
                    (this.enabled = !0),
                    this._bindEvents();
            }
            var e, i, n;
            return (
                (e = t),
                (i = [
                    {
                        key: "_bindEvents",
                        value: function () {
                            this.settings.el.addEventListener("mouseenter", this._handleEntry, !1),
                                this.settings.el.addEventListener("mouseleave", this._hide, !1),
                                this.settings.el.addEventListener("mousemove", this._handleMovement, !1),
                                this.settings.handleTouch &&
                                    (this.settings.el.addEventListener("touchstart", this._handleEntry, !1),
                                    this.settings.el.addEventListener("touchend", this._hide, !1),
                                    this.settings.el.addEventListener("touchmove", this._handleMovement, !1));
                        },
                    },
                    {
                        key: "_unbindEvents",
                        value: function () {
                            this.settings.el.removeEventListener("mouseenter", this._handleEntry, !1),
                                this.settings.el.removeEventListener("mouseleave", this._hide, !1),
                                this.settings.el.removeEventListener("mousemove", this._handleMovement, !1),
                                this.settings.handleTouch &&
                                    (this.settings.el.removeEventListener("touchstart", this._handleEntry, !1),
                                    this.settings.el.removeEventListener("touchend", this._hide, !1),
                                    this.settings.el.removeEventListener("touchmove", this._handleMovement, !1));
                        },
                    },
                    {
                        key: "_handleEntry",
                        value: function (t) {
                            t.preventDefault(),
                                (this._lastMovement = t),
                                "mouseenter" == t.type && this.settings.hoverDelay
                                    ? (this.entryTimeout = setTimeout(this._show, this.settings.hoverDelay))
                                    : this.settings.touchDelay
                                    ? (this.entryTimeout = setTimeout(this._show, this.settings.touchDelay))
                                    : this._show();
                        },
                    },
                    {
                        key: "_show",
                        value: function () {
                            if (this.enabled) {
                                var t = this.settings.onShow;
                                if (
                                    (t && "function" == typeof t && t(),
                                    this.settings.zoomPane.show(this.settings.el.getAttribute(this.settings.sourceAttribute), this.settings.el.clientWidth, this.settings.el.clientHeight),
                                    this._lastMovement)
                                ) {
                                    var e = this._lastMovement.touches;
                                    ((e && this.settings.touchBoundingBox) || (!e && this.settings.hoverBoundingBox)) && this.boundingBox.show(this.settings.zoomPane.el.clientWidth, this.settings.zoomPane.el.clientHeight);
                                }
                                this._handleMovement();
                            }
                        },
                    },
                    {
                        key: "_hide",
                        value: function (t) {
                            t.preventDefault(), (this._lastMovement = null), this.entryTimeout && clearTimeout(this.entryTimeout), this.boundingBox && this.boundingBox.hide();
                            var e = this.settings.onHide;
                            e && "function" == typeof e && e(), this.settings.zoomPane.hide();
                        },
                    },
                    {
                        key: "_handleMovement",
                        value: function (t) {
                            if (t) t.preventDefault(), (this._lastMovement = t);
                            else {
                                if (!this._lastMovement) return;
                                t = this._lastMovement;
                            }
                            var e, i;
                            if (t.touches) {
                                var n = t.touches[0];
                                (e = n.clientX), (i = n.clientY);
                            } else (e = t.clientX), (i = t.clientY);
                            var o = this.settings.el.getBoundingClientRect(),
                                s = e - o.left,
                                r = i - o.top,
                                a = s / this.settings.el.clientWidth,
                                l = r / this.settings.el.clientHeight;
                            this.boundingBox && this.boundingBox.setPosition(a, l, o), this.settings.zoomPane.setPosition(a, l, o);
                        },
                    },
                    {
                        key: "isShowing",
                        get: function () {
                            return this.settings.zoomPane.isShowing;
                        },
                    },
                ]) && p(e.prototype, i),
                n && p(e, n),
                t
            );
        })();
        function f(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        var g = document.createElement("div").style,
            v = "undefined" != typeof document && ("animation" in g || "webkitAnimation" in g),
            m = (function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    !(function (t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, t),
                        (this._completeShow = this._completeShow.bind(this)),
                        (this._completeHide = this._completeHide.bind(this)),
                        (this._handleLoad = this._handleLoad.bind(this)),
                        (this.isShowing = !1);
                    var i = e.container,
                        n = void 0 === i ? null : i,
                        o = e.zoomFactor,
                        s = void 0 === o ? c() : o,
                        r = e.inline,
                        a = void 0 === r ? c() : r,
                        l = e.namespace,
                        u = void 0 === l ? null : l,
                        d = e.showWhitespaceAtEdges,
                        p = void 0 === d ? c() : d,
                        h = e.containInline,
                        f = void 0 === h ? c() : h,
                        g = e.inlineOffsetX,
                        v = void 0 === g ? 0 : g,
                        m = e.inlineOffsetY,
                        y = void 0 === m ? 0 : m,
                        b = e.inlineContainer,
                        w = void 0 === b ? document.body : b;
                    (this.settings = { container: n, zoomFactor: s, inline: a, namespace: u, showWhitespaceAtEdges: p, containInline: f, inlineOffsetX: v, inlineOffsetY: y, inlineContainer: w }),
                        (this.openClasses = this._buildClasses("open")),
                        (this.openingClasses = this._buildClasses("opening")),
                        (this.closingClasses = this._buildClasses("closing")),
                        (this.inlineClasses = this._buildClasses("inline")),
                        (this.loadingClasses = this._buildClasses("loading")),
                        this._buildElement();
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "_buildClasses",
                            value: function (t) {
                                var e = ["drift-".concat(t)],
                                    i = this.settings.namespace;
                                return i && e.push("".concat(i, "-").concat(t)), e;
                            },
                        },
                        {
                            key: "_buildElement",
                            value: function () {
                                (this.el = document.createElement("div")), r(this.el, this._buildClasses("zoom-pane"));
                                var t = document.createElement("div");
                                r(t, this._buildClasses("zoom-pane-loader")), this.el.appendChild(t), (this.imgEl = document.createElement("img")), this.el.appendChild(this.imgEl);
                            },
                        },
                        {
                            key: "_setImageURL",
                            value: function (t) {
                                this.imgEl.setAttribute("src", t);
                            },
                        },
                        {
                            key: "_setImageSize",
                            value: function (t, e) {
                                (this.imgEl.style.width = "".concat(t * this.settings.zoomFactor, "px")), (this.imgEl.style.height = "".concat(e * this.settings.zoomFactor, "px"));
                            },
                        },
                        {
                            key: "setPosition",
                            value: function (t, e, i) {
                                var n = this.imgEl.getBoundingClientRect(),
                                    o = n.width,
                                    s = n.height,
                                    r = this.el.getBoundingClientRect(),
                                    a = r.width,
                                    l = r.height,
                                    c = a / 2 - o * t,
                                    u = l / 2 - s * e,
                                    d = a - o,
                                    p = l - s,
                                    h = d > 0,
                                    f = p > 0,
                                    g = h ? d / 2 : 0,
                                    v = f ? p / 2 : 0,
                                    m = h ? d / 2 : d,
                                    y = f ? p / 2 : p;
                                if (this.el.parentElement === this.settings.inlineContainer) {
                                    var b = window.pageXOffset,
                                        w = window.pageYOffset,
                                        x = i.left + t * i.width - a / 2 + this.settings.inlineOffsetX + b,
                                        C = i.top + e * i.height - l / 2 + this.settings.inlineOffsetY + w;
                                    this.settings.containInline &&
                                        (x < i.left + b ? (x = i.left + b) : x + a > i.left + i.width + b && (x = i.left + i.width - a + b), C < i.top + w ? (C = i.top + w) : C + l > i.top + i.height + w && (C = i.top + i.height - l + w)),
                                        (this.el.style.left = "".concat(x, "px")),
                                        (this.el.style.top = "".concat(C, "px"));
                                }
                                this.settings.showWhitespaceAtEdges || (c > g ? (c = g) : c < m && (c = m), u > v ? (u = v) : u < y && (u = y)),
                                    (this.imgEl.style.transform = "translate(".concat(c, "px, ").concat(u, "px)")),
                                    (this.imgEl.style.webkitTransform = "translate(".concat(c, "px, ").concat(u, "px)"));
                            },
                        },
                        {
                            key: "_removeListenersAndResetClasses",
                            value: function () {
                                this.el.removeEventListener("animationend", this._completeShow, !1),
                                    this.el.removeEventListener("animationend", this._completeHide, !1),
                                    this.el.removeEventListener("webkitAnimationEnd", this._completeShow, !1),
                                    this.el.removeEventListener("webkitAnimationEnd", this._completeHide, !1),
                                    a(this.el, this.openClasses),
                                    a(this.el, this.closingClasses);
                            },
                        },
                        {
                            key: "show",
                            value: function (t, e, i) {
                                this._removeListenersAndResetClasses(),
                                    (this.isShowing = !0),
                                    r(this.el, this.openClasses),
                                    r(this.el, this.loadingClasses),
                                    this.imgEl.addEventListener("load", this._handleLoad, !1),
                                    this._setImageURL(t),
                                    this._setImageSize(e, i),
                                    this._isInline ? this._showInline() : this._showInContainer(),
                                    v && (this.el.addEventListener("animationend", this._completeShow, !1), this.el.addEventListener("webkitAnimationEnd", this._completeShow, !1), r(this.el, this.openingClasses));
                            },
                        },
                        {
                            key: "_showInline",
                            value: function () {
                                this.settings.inlineContainer.appendChild(this.el), r(this.el, this.inlineClasses);
                            },
                        },
                        {
                            key: "_showInContainer",
                            value: function () {
                                this.settings.container.appendChild(this.el);
                            },
                        },
                        {
                            key: "hide",
                            value: function () {
                                this._removeListenersAndResetClasses(),
                                    (this.isShowing = !1),
                                    v
                                        ? (this.el.addEventListener("animationend", this._completeHide, !1), this.el.addEventListener("webkitAnimationEnd", this._completeHide, !1), r(this.el, this.closingClasses))
                                        : (a(this.el, this.openClasses), a(this.el, this.inlineClasses));
                            },
                        },
                        {
                            key: "_completeShow",
                            value: function () {
                                this.el.removeEventListener("animationend", this._completeShow, !1), this.el.removeEventListener("webkitAnimationEnd", this._completeShow, !1), a(this.el, this.openingClasses);
                            },
                        },
                        {
                            key: "_completeHide",
                            value: function () {
                                this.el.removeEventListener("animationend", this._completeHide, !1),
                                    this.el.removeEventListener("webkitAnimationEnd", this._completeHide, !1),
                                    a(this.el, this.openClasses),
                                    a(this.el, this.closingClasses),
                                    a(this.el, this.inlineClasses),
                                    this.el.setAttribute("style", ""),
                                    this.el.parentElement === this.settings.container
                                        ? this.settings.container.removeChild(this.el)
                                        : this.el.parentElement === this.settings.inlineContainer && this.settings.inlineContainer.removeChild(this.el);
                            },
                        },
                        {
                            key: "_handleLoad",
                            value: function () {
                                this.imgEl.removeEventListener("load", this._handleLoad, !1), a(this.el, this.loadingClasses);
                            },
                        },
                        {
                            key: "_isInline",
                            get: function () {
                                var t = this.settings.inline;
                                return !0 === t || ("number" == typeof t && window.innerWidth <= t);
                            },
                        },
                    ]) && f(e.prototype, i),
                    n && f(e, n),
                    t
                );
            })();
        function y(t, e) {
            for (var i = 0; i < e.length; i++) {
                var n = e[i];
                (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
            }
        }
        var b = (function () {
                function t(e) {
                    var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (
                        ((function (t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
                        })(this, t),
                        (this.VERSION = "1.3.0"),
                        (this.triggerEl = e),
                        (this.destroy = this.destroy.bind(this)),
                        !s(this.triggerEl))
                    )
                        throw new TypeError("`new Drift` requires a DOM element as its first argument.");
                    var n = i.namespace || null,
                        o = i.showWhitespaceAtEdges || !1,
                        r = i.containInline || !1,
                        a = i.inlineOffsetX || 0,
                        c = i.inlineOffsetY || 0,
                        u = i.inlineContainer || document.body,
                        d = i.sourceAttribute || "data-zoom",
                        p = i.zoomFactor || 3,
                        h = void 0 === i.paneContainer ? document.body : i.paneContainer,
                        f = i.inlinePane || 375,
                        g = i.handleTouch || !0,
                        v = i.onShow || null,
                        m = i.onHide || null,
                        y = i.injectBaseStyles || !0,
                        b = i.hoverDelay || 0,
                        w = i.touchDelay || 0,
                        x = i.hoverBoundingBox || !1,
                        C = i.touchBoundingBox || !1,
                        k = i.boundingBoxContainer || document.body;
                    if (!0 !== f && !s(h)) throw new TypeError("`paneContainer` must be a DOM element when `inlinePane !== true`");
                    if (!s(u)) throw new TypeError("`inlineContainer` must be a DOM element");
                    (this.settings = {
                        namespace: n,
                        showWhitespaceAtEdges: o,
                        containInline: r,
                        inlineOffsetX: a,
                        inlineOffsetY: c,
                        inlineContainer: u,
                        sourceAttribute: d,
                        zoomFactor: p,
                        paneContainer: h,
                        inlinePane: f,
                        handleTouch: g,
                        onShow: v,
                        onHide: m,
                        injectBaseStyles: y,
                        hoverDelay: b,
                        touchDelay: w,
                        hoverBoundingBox: x,
                        touchBoundingBox: C,
                        boundingBoxContainer: k,
                    }),
                        this.settings.injectBaseStyles &&
                            (function () {
                                if (!document.querySelector(".drift-base-styles")) {
                                    var t = document.createElement("style");
                                    (t.type = "text/css"), t.classList.add("drift-base-styles"), t.appendChild(document.createTextNode(l));
                                    var e = document.head;
                                    e.insertBefore(t, e.firstChild);
                                }
                            })(),
                        this._buildZoomPane(),
                        this._buildTrigger();
                }
                var e, i, n;
                return (
                    (e = t),
                    (i = [
                        {
                            key: "_buildZoomPane",
                            value: function () {
                                this.zoomPane = new m({
                                    container: this.settings.paneContainer,
                                    zoomFactor: this.settings.zoomFactor,
                                    showWhitespaceAtEdges: this.settings.showWhitespaceAtEdges,
                                    containInline: this.settings.containInline,
                                    inline: this.settings.inlinePane,
                                    namespace: this.settings.namespace,
                                    inlineOffsetX: this.settings.inlineOffsetX,
                                    inlineOffsetY: this.settings.inlineOffsetY,
                                    inlineContainer: this.settings.inlineContainer,
                                });
                            },
                        },
                        {
                            key: "_buildTrigger",
                            value: function () {
                                this.trigger = new h({
                                    el: this.triggerEl,
                                    zoomPane: this.zoomPane,
                                    handleTouch: this.settings.handleTouch,
                                    onShow: this.settings.onShow,
                                    onHide: this.settings.onHide,
                                    sourceAttribute: this.settings.sourceAttribute,
                                    hoverDelay: this.settings.hoverDelay,
                                    touchDelay: this.settings.touchDelay,
                                    hoverBoundingBox: this.settings.hoverBoundingBox,
                                    touchBoundingBox: this.settings.touchBoundingBox,
                                    namespace: this.settings.namespace,
                                    zoomFactor: this.settings.zoomFactor,
                                    boundingBoxContainer: this.settings.boundingBoxContainer,
                                });
                            },
                        },
                        {
                            key: "setZoomImageURL",
                            value: function (t) {
                                this.zoomPane._setImageURL(t);
                            },
                        },
                        {
                            key: "disable",
                            value: function () {
                                this.trigger.enabled = !1;
                            },
                        },
                        {
                            key: "enable",
                            value: function () {
                                this.trigger.enabled = !0;
                            },
                        },
                        {
                            key: "destroy",
                            value: function () {
                                this.trigger._unbindEvents();
                            },
                        },
                        {
                            key: "isShowing",
                            get: function () {
                                return this.zoomPane.isShowing;
                            },
                        },
                        {
                            key: "zoomFactor",
                            get: function () {
                                return this.settings.zoomFactor;
                            },
                            set: function (t) {
                                (this.settings.zoomFactor = t), (this.zoomPane.settings.zoomFactor = t), (this.trigger.settings.zoomFactor = t), (this.boundingBox.settings.zoomFactor = t);
                            },
                        },
                    ]) && y(e.prototype, i),
                    n && y(e, n),
                    t
                );
            })(),
            w = i(304),
            x = i.n(w),
            C = i(14);
        i(282),
            $(function () {
                var t = $("body").hasClass("rtl"),
                    e = t ? "rtl" : "ltr",
                    i = $(".header-wrapper").offset().top;
                $(window).on("load scroll", function () {
                    $(window).scrollTop() > i ? $(".header-inner, .autocomplete-suggestions").addClass("sticky") : $(".header-inner, .autocomplete-suggestions").removeClass("sticky");
                });
                var n = $(".content-wrapper"),
                    o = $(".footer");
                function s(t, e) {
                    $(t).autocomplete(
                        Object.assign(
                            {
                                dataType: "json",
                                triggerSelectOnValidInput: !1,
                                transformResult: function (t) {
                                    return {
                                        suggestions: t.data.map(function (t) {
                                            return { value: t.name.toLowerCase(), label: t.name.toLowerCase() };
                                        }),
                                    };
                                },
                                onSelect: function () {
                                    $(t).closest("#search-box-form").submit();
                                },
                            },
                            e
                        )
                    );
                }
                function r() {
                    var t = $(".checkbox > input"),
                        e = $(".switch > input");
                    function i(t) {
                        t.on("click", function (t) {
                            $(t.currentTarget).toggleClass("checked");
                        });
                    }
                    i(t), i(e);
                }
                $(window).on("load resize", function () {
                    $(".content-wrapper").css("min-height", $(window).height() - n.offset().top - o.height() + "px");
                }),
                    s(".search-box .search-box-input", {
                        serviceUrl: function () {
                            return route("products.index", { category: $(".search-box-select").val(), perPage: 10 });
                        },
                    }),
                    s(".mobile-search .search-box-input", {
                        appendTo: ".mobile-search .dropdown-menu",
                        serviceUrl: function () {
                            return route("products.index", { perPage: 5 });
                        },
                        beforeRender: function (t) {
                            t.addClass("mobile-search-suggestions");
                        },
                    }),
                    $("#search-box-form").on("submit", function (t) {
                        t.preventDefault(),
                            $(".search-box-input").each(function (t, e) {
                                "" === e.value && e.removeAttribute("name");
                            });
                        var e = $('select[name="category"]');
                        "" === e.val() && e.removeAttr("name"), t.currentTarget.submit();
                    }),
                    $(".select").each(function () {
                        var t = $(this);
                        t.on("change", function () {
                            var e = t.find("option:selected").text(),
                                i = $("<span>").html(e);
                            i.appendTo("body");
                            var n = i.width();
                            i.remove(), t.width(n);
                        }).change();
                    }),
                    $(document).on("click", "[data-loading]", function (t) {
                        var e = $(t.currentTarget);
                        if ((e.is("i") && (e = e.parent()), e.hasClass("disabled"))) return t.preventDefault();
                        if (e.hasClass('btn-checkout')) {
                            if (e.parents('form#checkout-form').valid()) {
                                e.data("loading-text", e.html()).addClass("btn-loading").button("loading");
                            }
                        }
                        else{
                            e.data("loading-text", e.html()).addClass("btn-loading").button("loading");
                        }
                    }),
                    $(".navbar-default .dropdown-toggle").append('<i class="fa fa-angle-down"></i>'),
                    $(".btn-cookie").on("click", function () {
                        $.post(route("cookie_bar.accepted"), function () {
                            var t = $(".cookie-bar-wrapper");
                            t.fadeOut(300, function () {
                                return t.remove();
                            });
                        });
                    }),
                    r(),
                    $(".navbar-toggle").on("click", function () {
                        $(".wrapper").toggleClass("offcanvas");
                    }),
                    $(window).on("load resize", function () {
                        $(window).width() >= 768 && $(".wrapper").removeClass("offcanvas");
                    }),
                    $(".sidebar-content li").each(function () {
                        $(this).children("ul").length > 0 && $(this).addClass("parent");
                    }),
                    $(".sidebar-content li.parent > a").after('<i class="fa fa-angle-down pull-right" aria-hidden="true"></i>'),
                    $(".sidebar-content > li").on("click", function () {
                        $(this).hasClass("active") ? $(".sidebar-content > li").removeClass("active") : ($(".sidebar-content > li").removeClass("active"), $(this).addClass("active")),
                            $(this).children("ul").hasClass("open")
                                ? $(".sidebar-content .open").removeClass("open").slideUp(300)
                                : ($(".sidebar-content .open").removeClass("open").slideUp(300), $(this).children("ul").addClass("open").slideDown(300));
                    }),
                    $(".sidebar-content > li > a").on("click", function (t) {
                        t.stopPropagation();
                    }),
                    $(".sidebar-content > li > ul").on("click", function (t) {
                        t.stopPropagation();
                    }),
                    $(".submenu").on("click", function () {
                        $(this).hasClass("active") ? $(this).removeClass("active") : $(this).addClass("active"), $(this).children("ul").slideToggle(300);
                    }),
                    $(".submenu ul").on("click", function (t) {
                        t.stopPropagation();
                    }),
                    $("body").on("click", ".dropdown-menu", function (t) {
                        $(this).parent().is(".open") && t.stopPropagation();
                    }),
                    $(".mini-cart").slimScroll({ height: "250px" });
                var a = $(".user-cart"),
                    l = $(".mini-cart-variants");
                function c(t) {
                    t.each(function () {
                        var t = $(this),
                            e = t.data("delay"),
                            i = "animated " + t.data("effect");
                        t.css({ "animation-delay": e, "-webkit-animation-delay": e }),
                            t.addClass(i).one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                                t.removeClass(i);
                            });
                    });
                }
                a.on("mouseleave", function () {
                    $(".mini-cart-variants").removeClass("open");
                }),
                    l.on("click", function (t) {
                        var e = $(t.currentTarget);
                        e.hasClass("open") ? l.removeClass("open") : (l.removeClass("open"), e.addClass("open")), t.stopPropagation(), t.preventDefault();
                    }),
                    $(".home-slider").on("init", function () {
                        c($("div.slide:first-child").find("[data-effect]"));
                    }),
                    $(".home-slider").on("beforeChange", function (t, e, i, n) {
                        c($("div.slick-slide[data-slick-index=" + n + "]").find("[data-effect]"));
                    });
                var u = $(".home-slider");
                0 !== u.length &&
                    u.slick({ autoplay: !!JSON.parse(u.data("autoplay")), autoplaySpeed: parseInt(u.data("autoplay-speed")), arrows: !!JSON.parse(u.data("arrows")), fade: !0, dots: !1, pauseOnHover: !0, pauseOnFocus: !1, rtl: t }),
                    $('a[data-toggle="tab"]').on("shown.bs.tab", function (t) {
                        $(".product-slider, .tab-product-slider").slick("setPosition");
                    });
                var d = $(".product-slider"),
                    p = $(".product-slider-2");
                function h() {
                    $(".btn-number").on("click", function (t) {
                        t.preventDefault();
                        var e = $(this).attr("data-type"),
                            i = $(this).closest(".input-group-quantity").find("input.input-quantity"),
                            n = i.attr("min"),
                            o = i.attr("max"),
                            s = parseInt(i.val());
                        $.isNumeric(s) || i.val(n),
                            "minus" === e
                                ? (s > n && (i.val(s - 1), $(".btn-number.btn-plus").removeAttr("disabled")), i.val() === n && $(this).attr("disabled", !0))
                                : "plus" === e && ((!o || s < o) && (i.val(s + 1), $(".btn-number.btn-minus").removeAttr("disabled")), i.val() === o && $(this).attr("disabled", !0));
                    }),
                        $(".input-number").on("input", function () {
                            var t = $(this),
                                e = parseInt(t.attr("min")),
                                i = parseInt(t.attr("max")),
                                n = parseInt(t.val());
                            $.isNumeric(t.val()) || (t.val(e), $(".btn-number.btn-minus").attr("disabled", !0)),
                                n < e && (t.val(e), $(".btn-number.btn-minus").attr("disabled", !0)),
                                i && n > i && (t.val(i), $(".btn-number.btn-plus").attr("disabled", !0));
                        });
                }
                function f() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = $(".base-image"),
                        o = $(".additional-image");
                    n.slick($.extend({ slidesToShow: 1, slidesToScroll: 1, dots: !1, arrows: !1, infinite: !1, fade: !1, draggable: !1, swipe: !1, rows: 0, rtl: t }, e)),
                        o.slick(
                            $.extend(
                                {
                                    slidesToShow: 4,
                                    slideToScroll: 1,
                                    dots: !1,
                                    arrows: !0,
                                    infinite: !1,
                                    centerMode: !1,
                                    focusOnSelect: !0,
                                    asNavFor: ".base-image",
                                    rows: 0,
                                    rtl: t,
                                    responsive: [
                                        { breakpoint: 1199, settings: { slidesToShow: 4 } },
                                        { breakpoint: 992, settings: { slidesToShow: 3 } },
                                    ],
                                },
                                i
                            )
                        ),
                        $(".base-image-inner img").each(function (t, e) {
                            new b(e, { sourceAttribute: "src", paneContainer: document.querySelector(".product-details"), inlinePane: 991, inlineOffsetY: -80, containInline: !0, hoverBoundingBox: !0 });
                        }),
                        n.slickLightbox({ itemSelector: ".base-image-inner", useHistoryApi: !0, slick: { infinite: !1, rtl: t } });
                }
                function g() {
                    var t = $("select.selectize").removeClass("custom-select-black"),
                        e = !0,
                        i = !1,
                        n = void 0;
                    try {
                        for (var o, s = t[Symbol.iterator](); !(e = (o = s.next()).done); e = !0) {
                            var r = o.value;
                            $(r).selectize({ delimiter: ",", persist: !0, selectOnTab: !0, hideSelected: !1, allowEmptyOption: !0, plugins: ["remove_button"] });
                        }
                    } catch (t) {
                        (i = !0), (n = t);
                    } finally {
                        try {
                            !e && s.return && s.return();
                        } finally {
                            if (i) throw n;
                        }
                    }
                }
                d.slick({
                    autoplay: !1,
                    autoplaySpeed: 1e4,
                    dots: !1,
                    arrows: !0,
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    rtl: t,
                    responsive: [
                        { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
                        { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                        { breakpoint: 681, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                        { breakpoint: 501, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                    ],
                }),
                    p.slick({
                        autoplay: !1,
                        autoplaySpeed: 1e4,
                        dots: !1,
                        arrows: !0,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        rtl: t,
                        responsive: [
                            { breakpoint: 681, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                            { breakpoint: 501, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        ],
                    }),
                    $(".tab-product-slider").slick({
                        autoplay: !1,
                        autoplaySpeed: 1e4,
                        dots: !0,
                        arrows: !1,
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        rtl: t,
                        responsive: [
                            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
                            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                            { breakpoint: 681, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                            { breakpoint: 501, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        ],
                    }),
                    $(".vertical-products").slick({ autoplay: !1, autoplaySpeed: 4e3, dots: !1, arrows: !0, slidesToShow: 1, slidesToScroll: 1, rows: 0, rtl: t }),
                    $(".landscape-products").slick({
                        infinite: !0,
                        autoplay: !1,
                        autoplaySpeed: 1e4,
                        dots: !1,
                        arrows: !0,
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        rtl: t,
                        responsive: [
                            { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                            { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                            { breakpoint: 481, settings: { slidesToShow: 1, slidesToScroll: 1 } },
                        ],
                    }),
                    $(".brands").slick({
                        slidesToShow: 5,
                        slidesToScroll: 5,
                        dots: !1,
                        arrows: !1,
                        rtl: t,
                        responsive: [
                            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 4 } },
                            { breakpoint: 992, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                            { breakpoint: 768, settings: { slidesToShow: 3, slidesToScroll: 3 } },
                            { breakpoint: 601, settings: { slidesToShow: 2, slidesToScroll: 2 } },
                        ],
                    }),
                    $(window).on("load scroll", function () {
                        $(this).scrollTop() > 200 ? $(".scroll-top").addClass("active") : $(".scroll-top").removeClass("active");
                    }),
                    $(".scroll-top").on("click", function () {
                        return $("html, body").animate({ scrollTop: 0 }, 1e3, "easeInOutQuint"), !1;
                    }),
                    $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" }),
                    $(window).on("load resize", function () {
                        $(window).outerWidth() <= 767 ? $(".mobile-collapse").next().slideUp(0) : $(".mobile-collapse").next().slideDown(0);
                    }),
                    $(".mobile-collapse").on("click", function () {
                        if (!($(window).outerWidth() >= 767)) {
                            var t = $(this).next();
                            t.hasClass("show") ? $(".links .show").removeClass("show").slideUp(300) : ($(".links .show").removeClass("show").slideUp(300), t.addClass("show").slideDown(300)),
                                $(this).hasClass("active") ? $(".links .active").removeClass("active") : ($(".links .active").removeClass("active"), $(this).addClass("active"));
                        }
                    }),
                    h(),
                    f(),
                    $(".thumb-image").on("click", function () {
                        $(".thumb-image").removeClass("slick-current"), $(this).addClass("slick-current");
                    }),
                    g(),
                    $(".filter-category li").each(function (t, e) {
                        $(e).children("ul").length > 0 && $(e).addClass("parent");
                    }),
                    $(".filter-category li.parent > a").before('<i class="fa fa-angle-right pull-left" aria-hidden="true"></i>'),
                    $(".filter-category li.active").parentsUntil(".filter-category", "ul").slideDown().addClass("open"),
                    $(".filter-category ul.open").siblings("i").addClass("open"),
                    $(".filter-category li i").on("click", function (t) {
                        $(t.currentTarget).toggleClass("open").siblings("ul").slideToggle(300);
                    });
                var v = $(".continue-button");
                $(".wizard .nav-tabs li a").on("click", function () {
                    var t = $(this).parent();
                    t.removeClass("selected"),
                        t.prev().addClass("selected"),
                        t.next().removeClass("selected"),
                        t.hasClass("disabled") && t.prev().removeClass("selected"),
                        $(".wizard .nav-tabs li").hasClass("selected") && $(".wizard .nav-tabs li.selected").prev().addClass("selected"),
                        t.hasClass("disabled") || t.hasClass("active") ? v.removeClass("") : v.removeClass("collapsed");
                }),
                    $('a[data-toggle="tab"]').on("show.bs.tab", function (t) {
                        if ($(t.currentTarget).parent().hasClass("disabled")) return !1;
                    }),
                    $(".next-step").on("click", function (t) {
                        // alert($('#address').valid())
                        // alert('test')
                        var isValid = true;
                        var curInputs = $('#address').find("input");
                        $("#address .form-group").removeClass("has-error");
                        for(var i=0; i<curInputs.length; i++){
                            if (!curInputs[i].validity.valid){
                                isValid = false;
                                $(curInputs[i]).closest(".form-group").addClass("has-error");
                            }
                        }

                        if (isValid){
                            var e = $(".wizard .nav-tabs li.active");
                            e.next().removeClass("disabled"), $(e).next().find('a[data-toggle="tab"]').click(), $(".wizard .nav-tabs li.active").prev().addClass("selected"), $(this).removeClass("collapsed");
                        }
                    }),
                    $(".prev-step").on("click", function (t) {
                        var e = $(".wizard .nav-tabs li.active");
                        $(e).prev().find('a[data-toggle="tab"]').click();
                    }),
                    $('a[data-toggle="tab"]').on("shown.bs.tab", function (t) {
                        var e = $(t.currentTarget).data("step"),
                            i = (parseInt(e - 1) / 3) * 150;
                        $(".progress-bar").css({ width: i + "%" });
                    }),
                    $(".ship-to-a-different-address label").on("click", function () {
                        $(this).parent().toggleClass("clicked"), $(".shipping-address").toggleClass("hide"), $(window).resize();
                    }),
                    $(".prev-step, .next-step").on("click", function () {
                        $("#confirm .next-step").attr("disabled", !0), !$(".confirm-tab").hasClass("disabled") && $(".checkout-terms > label").hasClass("checked") && m.removeAttr("disabled"), $(window).resize();
                    });
                var m = $(".btn-checkout");
                $(".checkout-terms > label").on("click", function (t) {
                    var e = $(t.currentTarget);
                    if ((e.toggleClass("checked"), !$(".confirm-tab").hasClass("disabled"))) {
                        var i = !e.hasClass("checked") || null;
                        m.prop("disabled", i);
                    }
                }),
                    $(".create-account > .checkbox > label").on("click", function () {
                        $(".create-account > .form-group").toggleClass("hide");
                    });
                var y = $("#stripe-payment");
                $("#payment .next-step").on("click", function () {
                    var t = $('[name="payment_method"]:checked').val();
                    "stripe" === t &&
                        y.slideDown(300, function () {
                            $(window).resize();
                        }),
                        $(".payment-instructions." + t).removeClass("hide");
                }),
                    $("#confirm .prev-step, .address-tab, .payment-tab").on("click", function () {
                        $("#stripe-payment").slideUp(300), $(".payment-instructions").addClass("hide");
                    }),
                    $(".confirm-tab").on("click", function () {
                        if (!$(this).hasClass("disabled")) {
                            var t = $('[name="payment_method"]:checked').val();
                            "stripe" === t &&
                                y.slideDown(300, function () {
                                    $(window).resize();
                                }),
                                $(".payment-instructions." + t).removeClass("hide");
                        }
                    }),
                    $(window).on("load scroll resize", function () {
                        var t = $(".wizard");
                        if (0 !== t.length) {
                            var e = $(this).scrollTop(),
                                i = $(".order-review"),
                                n = $(".cart-list"),
                                o = $(".checkout-sidebar"),
                                s = $(".cart-list-sidebar"),
                                r = t.height() - o.height(),
                                a = n.height() - s.height();
                            if ($(this).width() <= 991) i.removeClass("sticky").removeClass("bottom").width("").css("top", "");
                            else {
                                var l = "",
                                    c = t.offset().top - 100;
                                l = 1 !== t.length ? "" : t.height() + t.offset().top - o.height() - 100;
                                var u = "",
                                    d = n.offset().top - 100;
                                (u = 1 !== n.length ? "" : n.height() + n.offset().top - s.height() - 100), i.width(i.parent().width()), p(c, o, l, r), p(d, s, u, a);
                            }
                        }
                        function p(t, i, n, o) {
                            e >= t ? i.addClass("sticky") : i.removeClass("sticky"), e >= n ? i.removeClass("sticky").addClass("bottom").css("top", o) : i.removeClass("bottom").css("top", "");
                        }
                    });
                var w = document.getElementById("price-range-slider");
                if (null !== w) {
                    x.a.create(w, { start: [0, w.dataset.toPrice], connect: !0, direction: e, range: { min: 0, max: Number(w.dataset.max) + 1 } });
                    var k = document.querySelector(".range-from"),
                        S = document.querySelector(".range-to");
                    w.noUiSlider.on("update", function (t, e) {
                        var i = t[e];
                        e ? (S.value = Math.round(i)) : (k.value = Math.round(i));
                    }),
                        k.addEventListener("change", function () {
                            w.noUiSlider.set([this.value, null]);
                        }),
                        S.addEventListener("change", function () {
                            w.noUiSlider.set([null, this.value]);
                        });
                }
                function T() {
                    (function () {
                        if ($(".ship-to-a-different-address").hasClass("clicked")) return "" === $("#billing-state").val() || "" === $("#shipping-state").val();
                        return "" === $("#billing-state").val();
                    })() ||
                        $.ajax({
                            url: route("cart.taxes.store"),
                            type: "POST",
                            data: $("#checkout-form").serializeArray(),
                            success: function (t) {
                                $("#taxes").html(
                                    (function (t) {
                                        var e = "",
                                            i = !0,
                                            n = !1,
                                            o = void 0;
                                        try {
                                            for (var s, r = t[Symbol.iterator](); !(i = (s = r.next()).done); i = !0) {
                                                var a = s.value;
                                                e += '\n                <span class="item-amount">\n                    ' + a.name + "\n                    <span>" + a.amount + "</span>\n                </span>\n            ";
                                            }
                                        } catch (t) {
                                            (n = !0), (o = t);
                                        } finally {
                                            try {
                                                !i && r.return && r.return();
                                            } finally {
                                                if (n) throw o;
                                            }
                                        }
                                        return e;
                                    })(t.taxes)
                                ),
                                    $("#total-amount").text(t.total);
                            },
                        });
                }
                $(".filter-scroll").slimScroll({ height: "215px" }),
                    $(".btn-quick-view").on("click", function (t) {
                        t.preventDefault(),
                            $("#quick-view-modal .modal-body").html(Object(C.b)("storefront::products.loading")),
                            $("#quick-view-modal").modal("show"),
                            $.ajax({
                                type: "GET",
                                url: route("products.quick_view.show", { slug: t.currentTarget.dataset.slug }),
                                success: function (t) {
                                    $("#quick-view-modal .modal-body").html(t), f({}, { slidesToShow: 2, responsive: [{ breakpoint: 992, settings: { slidesToShow: 3 } }] }), g(), h(), r();
                                },
                                error: function (t) {
                                    $("#quick-view-modal .modal-body").html(t.statusText);
                                },
                            });
                    }),
                    $("#coupon-apply-form").on("submit", function (t) {
                        "" === $("#coupon").val() && (t.preventDefault(), Object(C.a)($("#coupon-apply-submit")));
                    }),
                    $(".cart-list .btn-update").on("click", function (t) {
                        $(t.currentTarget).addClass("fa-spin");
                        var e = $(t.currentTarget.dataset.quantityField).val(),
                            i = $(
                                '\n            <form method="POST" action="' +
                                    route("cart.items.update", t.currentTarget.dataset.id) +
                                    '">\n                <input type="hidden" name="_token" value="' +
                                    FleetCart.csrfToken +
                                    '">\n                <input type="hidden" name="_method" value="put">\n                <input type="hidden" name="qty" value="' +
                                    e +
                                    '">\n            </form>\n        '
                            );
                        $(document.body).append(i), i.submit();
                    }),
                    $(".shipping-method").on("change", function (t) {
                        $.ajax({
                            type: "POST",
                            url: route("cart.shipping_method.store"),
                            data: { shipping_method: t.currentTarget.value },
                            success: function (t) {
                                $("#coupon-value").html("&#8211;" + t.discount), $("#total-amount").text(t.total);
                            },
                        });
                    }),
                    !!$('meta[name="cart-has-shipping-method"]').attr("content") || $(".shipping-method").first().trigger("change"),
                    $("#billing-country, #shipping-country").on("change", function (t) {
                        var e = void 0,
                            i = void 0,
                            n = void 0;
                        "billing-country" === t.currentTarget.id
                            ? ((e = "#billing-state"), (i = $('<input name="billing[state]" class="form-control" id="billing-state">')), (n = $('<select name="billing[state]" class="custom-select-black" id="billing-state"></select>')))
                            : ((e = "#shipping-state"),
                              (i = $('<input name="shipping[state]" class="form-control" id="shipping-state">')),
                              (n = $('<select name="shipping[state]" class="custom-select-black" id="shipping-state"></select>'))),
                            $(e).prop("disabled", !0),
                            $.ajax({
                                type: "GET",
                                url: route("countries.states.index", t.currentTarget.value),
                                dataType: "json",
                                success: function (t) {
                                    var o = $(e).val();
                                    if ($.isEmptyObject(t)) return $(e).replaceWith(i).prop("disabled", !1), i.on("change", T), $(e).val(o);
                                    $(e).replaceWith(n);
                                    var s = '<option value="" selected>' + Object(C.b)("storefront::checkout.please_select") + "</option>";
                                    for (var r in t) s += '<option value="' + r + '">' + t[r] + "</option>";
                                    $(e).html(s).val(o).prop("disabled", !1), n.on("change", T);
                                },
                                error: function () {
                                    $(e).replaceWith(i).prop("disabled", !1), i.on("change", T);
                                },
                            });
                    }),
                    $("#billing-country, #shipping-country").trigger("change"),
                    $("\n        #billing-city,\n        #shipping-city,\n        #billing-zip,\n        #shipping-zip,\n        #billing-country,\n        #shipping-country\n    ").on("change", T);
            });
    },
    282: function (t, e, i) {
        (window.$ = window.jQuery = i(10)), $.ajaxSetup({ headers: { "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content") } }), i(283), i(296), i(297), i(298), i(299), i(300), i(301);
    },
    283: function (t, e, i) {
        i(284), i(285), i(286), i(287), i(288), i(289), i(290), i(291), i(292), i(293), i(294), i(295);
    },
    284: function (t, e) {
        !(function (t) {
            "use strict";
            (t.fn.emulateTransitionEnd = function (e) {
                var i = !1,
                    n = this;
                t(this).one("bsTransitionEnd", function () {
                    i = !0;
                });
                return (
                    setTimeout(function () {
                        i || t(n).trigger(t.support.transition.end);
                    }, e),
                    this
                );
            }),
                t(function () {
                    (t.support.transition = (function () {
                        var t = document.createElement("bootstrap"),
                            e = { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd otransitionend", transition: "transitionend" };
                        for (var i in e) if (void 0 !== t.style[i]) return { end: e[i] };
                        return !1;
                    })()),
                        t.support.transition &&
                            (t.event.special.bsTransitionEnd = {
                                bindType: t.support.transition.end,
                                delegateType: t.support.transition.end,
                                handle: function (e) {
                                    if (t(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
                                },
                            });
                });
        })(jQuery);
    },
    285: function (t, e) {
        !(function (t) {
            "use strict";
            var e = '[data-dismiss="alert"]',
                i = function (i) {
                    t(i).on("click", e, this.close);
                };
            (i.VERSION = "3.3.7"),
                (i.TRANSITION_DURATION = 150),
                (i.prototype.close = function (e) {
                    var n = t(this),
                        o = n.attr("data-target");
                    o || (o = (o = n.attr("href")) && o.replace(/.*(?=#[^\s]*$)/, ""));
                    var s = t("#" === o ? [] : o);
                    function r() {
                        s.detach().trigger("closed.bs.alert").remove();
                    }
                    e && e.preventDefault(),
                        s.length || (s = n.closest(".alert")),
                        s.trigger((e = t.Event("close.bs.alert"))),
                        e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r());
                });
            var n = t.fn.alert;
            (t.fn.alert = function (e) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.alert");
                    o || n.data("bs.alert", (o = new i(this))), "string" == typeof e && o[e].call(n);
                });
            }),
                (t.fn.alert.Constructor = i),
                (t.fn.alert.noConflict = function () {
                    return (t.fn.alert = n), this;
                }),
                t(document).on("click.bs.alert.data-api", e, i.prototype.close);
        })(jQuery);
    },
    286: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (i, n) {
                (this.$element = t(i)), (this.options = t.extend({}, e.DEFAULTS, n)), (this.isLoading = !1);
            };
            function i(i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.button"),
                        s = "object" == typeof i && i;
                    o || n.data("bs.button", (o = new e(this, s))), "toggle" == i ? o.toggle() : i && o.setState(i);
                });
            }
            (e.VERSION = "3.3.7"),
                (e.DEFAULTS = { loadingText: "loading..." }),
                (e.prototype.setState = function (e) {
                    var i = "disabled",
                        n = this.$element,
                        o = n.is("input") ? "val" : "html",
                        s = n.data();
                    (e += "Text"),
                        null == s.resetText && n.data("resetText", n[o]()),
                        setTimeout(
                            t.proxy(function () {
                                n[o](null == s[e] ? this.options[e] : s[e]),
                                    "loadingText" == e ? ((this.isLoading = !0), n.addClass(i).attr(i, i).prop(i, !0)) : this.isLoading && ((this.isLoading = !1), n.removeClass(i).removeAttr(i).prop(i, !1));
                            }, this),
                            0
                        );
                }),
                (e.prototype.toggle = function () {
                    var t = !0,
                        e = this.$element.closest('[data-toggle="buttons"]');
                    if (e.length) {
                        var i = this.$element.find("input");
                        "radio" == i.prop("type")
                            ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active"))
                            : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")),
                            i.prop("checked", this.$element.hasClass("active")),
                            t && i.trigger("change");
                    } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active");
                });
            var n = t.fn.button;
            (t.fn.button = i),
                (t.fn.button.Constructor = e),
                (t.fn.button.noConflict = function () {
                    return (t.fn.button = n), this;
                }),
                t(document)
                    .on("click.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                        var n = t(e.target).closest(".btn");
                        i.call(n, "toggle"), t(e.target).is('input[type="radio"], input[type="checkbox"]') || (e.preventDefault(), n.is("input,button") ? n.trigger("focus") : n.find("input:visible,button:visible").first().trigger("focus"));
                    })
                    .on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (e) {
                        t(e.target)
                            .closest(".btn")
                            .toggleClass("focus", /^focus(in)?$/.test(e.type));
                    });
        })(jQuery);
    },
    287: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (e, i) {
                (this.$element = t(e)),
                    (this.$indicators = this.$element.find(".carousel-indicators")),
                    (this.options = i),
                    (this.paused = null),
                    (this.sliding = null),
                    (this.interval = null),
                    (this.$active = null),
                    (this.$items = null),
                    this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
                    "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
            };
            function i(i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.carousel"),
                        s = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i),
                        r = "string" == typeof i ? i : s.slide;
                    o || n.data("bs.carousel", (o = new e(this, s))), "number" == typeof i ? o.to(i) : r ? o[r]() : s.interval && o.pause().cycle();
                });
            }
            (e.VERSION = "3.3.7"),
                (e.TRANSITION_DURATION = 600),
                (e.DEFAULTS = { interval: 5e3, pause: "hover", wrap: !0, keyboard: !0 }),
                (e.prototype.keydown = function (t) {
                    if (!/input|textarea/i.test(t.target.tagName)) {
                        switch (t.which) {
                            case 37:
                                this.prev();
                                break;
                            case 39:
                                this.next();
                                break;
                            default:
                                return;
                        }
                        t.preventDefault();
                    }
                }),
                (e.prototype.cycle = function (e) {
                    return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this;
                }),
                (e.prototype.getItemIndex = function (t) {
                    return (this.$items = t.parent().children(".item")), this.$items.index(t || this.$active);
                }),
                (e.prototype.getItemForDirection = function (t, e) {
                    var i = this.getItemIndex(e);
                    if ((("prev" == t && 0 === i) || ("next" == t && i == this.$items.length - 1)) && !this.options.wrap) return e;
                    var n = (i + ("prev" == t ? -1 : 1)) % this.$items.length;
                    return this.$items.eq(n);
                }),
                (e.prototype.to = function (t) {
                    var e = this,
                        i = this.getItemIndex((this.$active = this.$element.find(".item.active")));
                    if (!(t > this.$items.length - 1 || t < 0))
                        return this.sliding
                            ? this.$element.one("slid.bs.carousel", function () {
                                  e.to(t);
                              })
                            : i == t
                            ? this.pause().cycle()
                            : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
                }),
                (e.prototype.pause = function (e) {
                    return (
                        e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), (this.interval = clearInterval(this.interval)), this
                    );
                }),
                (e.prototype.next = function () {
                    if (!this.sliding) return this.slide("next");
                }),
                (e.prototype.prev = function () {
                    if (!this.sliding) return this.slide("prev");
                }),
                (e.prototype.slide = function (i, n) {
                    var o = this.$element.find(".item.active"),
                        s = n || this.getItemForDirection(i, o),
                        r = this.interval,
                        a = "next" == i ? "left" : "right",
                        l = this;
                    if (s.hasClass("active")) return (this.sliding = !1);
                    var c = s[0],
                        u = t.Event("slide.bs.carousel", { relatedTarget: c, direction: a });
                    if ((this.$element.trigger(u), !u.isDefaultPrevented())) {
                        if (((this.sliding = !0), r && this.pause(), this.$indicators.length)) {
                            this.$indicators.find(".active").removeClass("active");
                            var d = t(this.$indicators.children()[this.getItemIndex(s)]);
                            d && d.addClass("active");
                        }
                        var p = t.Event("slid.bs.carousel", { relatedTarget: c, direction: a });
                        return (
                            t.support.transition && this.$element.hasClass("slide")
                                ? (s.addClass(i),
                                  s[0].offsetWidth,
                                  o.addClass(a),
                                  s.addClass(a),
                                  o
                                      .one("bsTransitionEnd", function () {
                                          s.removeClass([i, a].join(" ")).addClass("active"),
                                              o.removeClass(["active", a].join(" ")),
                                              (l.sliding = !1),
                                              setTimeout(function () {
                                                  l.$element.trigger(p);
                                              }, 0);
                                      })
                                      .emulateTransitionEnd(e.TRANSITION_DURATION))
                                : (o.removeClass("active"), s.addClass("active"), (this.sliding = !1), this.$element.trigger(p)),
                            r && this.cycle(),
                            this
                        );
                    }
                });
            var n = t.fn.carousel;
            (t.fn.carousel = i),
                (t.fn.carousel.Constructor = e),
                (t.fn.carousel.noConflict = function () {
                    return (t.fn.carousel = n), this;
                });
            var o = function (e) {
                var n,
                    o = t(this),
                    s = t(o.attr("data-target") || ((n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")));
                if (s.hasClass("carousel")) {
                    var r = t.extend({}, s.data(), o.data()),
                        a = o.attr("data-slide-to");
                    a && (r.interval = !1), i.call(s, r), a && s.data("bs.carousel").to(a), e.preventDefault();
                }
            };
            t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o),
                t(window).on("load", function () {
                    t('[data-ride="carousel"]').each(function () {
                        var e = t(this);
                        i.call(e, e.data());
                    });
                });
        })(jQuery);
    },
    288: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (i, n) {
                (this.$element = t(i)),
                    (this.options = t.extend({}, e.DEFAULTS, n)),
                    (this.$trigger = t('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]')),
                    (this.transitioning = null),
                    this.options.parent ? (this.$parent = this.getParent()) : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
                    this.options.toggle && this.toggle();
            };
            function i(e) {
                var i,
                    n = e.attr("data-target") || ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
                return t(n);
            }
            function n(i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.collapse"),
                        s = t.extend({}, e.DEFAULTS, n.data(), "object" == typeof i && i);
                    !o && s.toggle && /show|hide/.test(i) && (s.toggle = !1), o || n.data("bs.collapse", (o = new e(this, s))), "string" == typeof i && o[i]();
                });
            }
            (e.VERSION = "3.3.7"),
                (e.TRANSITION_DURATION = 350),
                (e.DEFAULTS = { toggle: !0 }),
                (e.prototype.dimension = function () {
                    return this.$element.hasClass("width") ? "width" : "height";
                }),
                (e.prototype.show = function () {
                    if (!this.transitioning && !this.$element.hasClass("in")) {
                        var i,
                            o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                        if (!(o && o.length && (i = o.data("bs.collapse")) && i.transitioning)) {
                            var s = t.Event("show.bs.collapse");
                            if ((this.$element.trigger(s), !s.isDefaultPrevented())) {
                                o && o.length && (n.call(o, "hide"), i || o.data("bs.collapse", null));
                                var r = this.dimension();
                                this.$element.removeClass("collapse").addClass("collapsing")[r](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), (this.transitioning = 1);
                                var a = function () {
                                    this.$element.removeClass("collapsing").addClass("collapse in")[r](""), (this.transitioning = 0), this.$element.trigger("shown.bs.collapse");
                                };
                                if (!t.support.transition) return a.call(this);
                                var l = t.camelCase(["scroll", r].join("-"));
                                this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(e.TRANSITION_DURATION)[r](this.$element[0][l]);
                            }
                        }
                    }
                }),
                (e.prototype.hide = function () {
                    if (!this.transitioning && this.$element.hasClass("in")) {
                        var i = t.Event("hide.bs.collapse");
                        if ((this.$element.trigger(i), !i.isDefaultPrevented())) {
                            var n = this.dimension();
                            this.$element[n](this.$element[n]())[0].offsetHeight,
                                this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                                this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                                (this.transitioning = 1);
                            var o = function () {
                                (this.transitioning = 0), this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");
                            };
                            if (!t.support.transition) return o.call(this);
                            this.$element[n](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(e.TRANSITION_DURATION);
                        }
                    }
                }),
                (e.prototype.toggle = function () {
                    this[this.$element.hasClass("in") ? "hide" : "show"]();
                }),
                (e.prototype.getParent = function () {
                    return t(this.options.parent)
                        .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
                        .each(
                            t.proxy(function (e, n) {
                                var o = t(n);
                                this.addAriaAndCollapsedClass(i(o), o);
                            }, this)
                        )
                        .end();
                }),
                (e.prototype.addAriaAndCollapsedClass = function (t, e) {
                    var i = t.hasClass("in");
                    t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i);
                });
            var o = t.fn.collapse;
            (t.fn.collapse = n),
                (t.fn.collapse.Constructor = e),
                (t.fn.collapse.noConflict = function () {
                    return (t.fn.collapse = o), this;
                }),
                t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
                    var o = t(this);
                    o.attr("data-target") || e.preventDefault();
                    var s = i(o),
                        r = s.data("bs.collapse") ? "toggle" : o.data();
                    n.call(s, r);
                });
        })(jQuery);
    },
    289: function (t, e) {
        !(function (t) {
            "use strict";
            var e = ".dropdown-backdrop",
                i = '[data-toggle="dropdown"]',
                n = function (e) {
                    t(e).on("click.bs.dropdown", this.toggle);
                };
            function o(e) {
                var i = e.attr("data-target");
                i || (i = (i = e.attr("href")) && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
                var n = i && t(i);
                return n && n.length ? n : e.parent();
            }
            function s(n) {
                (n && 3 === n.which) ||
                    (t(e).remove(),
                    t(i).each(function () {
                        var e = t(this),
                            i = o(e),
                            s = { relatedTarget: this };
                        i.hasClass("open") &&
                            ((n && "click" == n.type && /input|textarea/i.test(n.target.tagName) && t.contains(i[0], n.target)) ||
                                (i.trigger((n = t.Event("hide.bs.dropdown", s))), n.isDefaultPrevented() || (e.attr("aria-expanded", "false"), i.removeClass("open").trigger(t.Event("hidden.bs.dropdown", s)))));
                    }));
            }
            (n.VERSION = "3.3.7"),
                (n.prototype.toggle = function (e) {
                    var i = t(this);
                    if (!i.is(".disabled, :disabled")) {
                        var n = o(i),
                            r = n.hasClass("open");
                        if ((s(), !r)) {
                            "ontouchstart" in document.documentElement && !n.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", s);
                            var a = { relatedTarget: this };
                            if ((n.trigger((e = t.Event("show.bs.dropdown", a))), e.isDefaultPrevented())) return;
                            i.trigger("focus").attr("aria-expanded", "true"), n.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a));
                        }
                        return !1;
                    }
                }),
                (n.prototype.keydown = function (e) {
                    if (/(38|40|27|32)/.test(e.which) && !/input|textarea/i.test(e.target.tagName)) {
                        var n = t(this);
                        if ((e.preventDefault(), e.stopPropagation(), !n.is(".disabled, :disabled"))) {
                            var s = o(n),
                                r = s.hasClass("open");
                            if ((!r && 27 != e.which) || (r && 27 == e.which)) return 27 == e.which && s.find(i).trigger("focus"), n.trigger("click");
                            var a = s.find(".dropdown-menu li:not(.disabled):visible a");
                            if (a.length) {
                                var l = a.index(e.target);
                                38 == e.which && l > 0 && l--, 40 == e.which && l < a.length - 1 && l++, ~l || (l = 0), a.eq(l).trigger("focus");
                            }
                        }
                    }
                });
            var r = t.fn.dropdown;
            (t.fn.dropdown = function (e) {
                return this.each(function () {
                    var i = t(this),
                        o = i.data("bs.dropdown");
                    o || i.data("bs.dropdown", (o = new n(this))), "string" == typeof e && o[e].call(i);
                });
            }),
                (t.fn.dropdown.Constructor = n),
                (t.fn.dropdown.noConflict = function () {
                    return (t.fn.dropdown = r), this;
                }),
                t(document)
                    .on("click.bs.dropdown.data-api", s)
                    .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
                        t.stopPropagation();
                    })
                    .on("click.bs.dropdown.data-api", i, n.prototype.toggle)
                    .on("keydown.bs.dropdown.data-api", i, n.prototype.keydown)
                    .on("keydown.bs.dropdown.data-api", ".dropdown-menu", n.prototype.keydown);
        })(jQuery);
    },
    290: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (e, i) {
                (this.options = i),
                    (this.$body = t(document.body)),
                    (this.$element = t(e)),
                    (this.$dialog = this.$element.find(".modal-dialog")),
                    (this.$backdrop = null),
                    (this.isShown = null),
                    (this.originalBodyPad = null),
                    (this.scrollbarWidth = 0),
                    (this.ignoreBackdropClick = !1),
                    this.options.remote &&
                        this.$element.find(".modal-content").load(
                            this.options.remote,
                            t.proxy(function () {
                                this.$element.trigger("loaded.bs.modal");
                            }, this)
                        );
            };
            function i(i, n) {
                return this.each(function () {
                    var o = t(this),
                        s = o.data("bs.modal"),
                        r = t.extend({}, e.DEFAULTS, o.data(), "object" == typeof i && i);
                    s || o.data("bs.modal", (s = new e(this, r))), "string" == typeof i ? s[i](n) : r.show && s.show(n);
                });
            }
            (e.VERSION = "3.3.7"),
                (e.TRANSITION_DURATION = 300),
                (e.BACKDROP_TRANSITION_DURATION = 150),
                (e.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
                (e.prototype.toggle = function (t) {
                    return this.isShown ? this.hide() : this.show(t);
                }),
                (e.prototype.show = function (i) {
                    var n = this,
                        o = t.Event("show.bs.modal", { relatedTarget: i });
                    this.$element.trigger(o),
                        this.isShown ||
                            o.isDefaultPrevented() ||
                            ((this.isShown = !0),
                            this.checkScrollbar(),
                            this.setScrollbar(),
                            this.$body.addClass("modal-open"),
                            this.escape(),
                            this.resize(),
                            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)),
                            this.$dialog.on("mousedown.dismiss.bs.modal", function () {
                                n.$element.one("mouseup.dismiss.bs.modal", function (e) {
                                    t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0);
                                });
                            }),
                            this.backdrop(function () {
                                var o = t.support.transition && n.$element.hasClass("fade");
                                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
                                var s = t.Event("shown.bs.modal", { relatedTarget: i });
                                o
                                    ? n.$dialog
                                          .one("bsTransitionEnd", function () {
                                              n.$element.trigger("focus").trigger(s);
                                          })
                                          .emulateTransitionEnd(e.TRANSITION_DURATION)
                                    : n.$element.trigger("focus").trigger(s);
                            }));
                }),
                (e.prototype.hide = function (i) {
                    i && i.preventDefault(),
                        (i = t.Event("hide.bs.modal")),
                        this.$element.trigger(i),
                        this.isShown &&
                            !i.isDefaultPrevented() &&
                            ((this.isShown = !1),
                            this.escape(),
                            this.resize(),
                            t(document).off("focusin.bs.modal"),
                            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
                            this.$dialog.off("mousedown.dismiss.bs.modal"),
                            t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(e.TRANSITION_DURATION) : this.hideModal());
                }),
                (e.prototype.enforceFocus = function () {
                    t(document)
                        .off("focusin.bs.modal")
                        .on(
                            "focusin.bs.modal",
                            t.proxy(function (t) {
                                document === t.target || this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus");
                            }, this)
                        );
                }),
                (e.prototype.escape = function () {
                    this.isShown && this.options.keyboard
                        ? this.$element.on(
                              "keydown.dismiss.bs.modal",
                              t.proxy(function (t) {
                                  27 == t.which && this.hide();
                              }, this)
                          )
                        : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
                }),
                (e.prototype.resize = function () {
                    this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal");
                }),
                (e.prototype.hideModal = function () {
                    var t = this;
                    this.$element.hide(),
                        this.backdrop(function () {
                            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal");
                        });
                }),
                (e.prototype.removeBackdrop = function () {
                    this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
                }),
                (e.prototype.backdrop = function (i) {
                    var n = this,
                        o = this.$element.hasClass("fade") ? "fade" : "";
                    if (this.isShown && this.options.backdrop) {
                        var s = t.support.transition && o;
                        if (
                            ((this.$backdrop = t(document.createElement("div"))
                                .addClass("modal-backdrop " + o)
                                .appendTo(this.$body)),
                            this.$element.on(
                                "click.dismiss.bs.modal",
                                t.proxy(function (t) {
                                    this.ignoreBackdropClick ? (this.ignoreBackdropClick = !1) : t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide());
                                }, this)
                            ),
                            s && this.$backdrop[0].offsetWidth,
                            this.$backdrop.addClass("in"),
                            !i)
                        )
                            return;
                        s ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : i();
                    } else if (!this.isShown && this.$backdrop) {
                        this.$backdrop.removeClass("in");
                        var r = function () {
                            n.removeBackdrop(), i && i();
                        };
                        t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", r).emulateTransitionEnd(e.BACKDROP_TRANSITION_DURATION) : r();
                    } else i && i();
                }),
                (e.prototype.handleUpdate = function () {
                    this.adjustDialog();
                }),
                (e.prototype.adjustDialog = function () {
                    var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
                    this.$element.css({ paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "", paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "" });
                }),
                (e.prototype.resetAdjustments = function () {
                    this.$element.css({ paddingLeft: "", paddingRight: "" });
                }),
                (e.prototype.checkScrollbar = function () {
                    var t = window.innerWidth;
                    if (!t) {
                        var e = document.documentElement.getBoundingClientRect();
                        t = e.right - Math.abs(e.left);
                    }
                    (this.bodyIsOverflowing = document.body.clientWidth < t), (this.scrollbarWidth = this.measureScrollbar());
                }),
                (e.prototype.setScrollbar = function () {
                    var t = parseInt(this.$body.css("padding-right") || 0, 10);
                    (this.originalBodyPad = document.body.style.paddingRight || ""), this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth);
                }),
                (e.prototype.resetScrollbar = function () {
                    this.$body.css("padding-right", this.originalBodyPad);
                }),
                (e.prototype.measureScrollbar = function () {
                    var t = document.createElement("div");
                    (t.className = "modal-scrollbar-measure"), this.$body.append(t);
                    var e = t.offsetWidth - t.clientWidth;
                    return this.$body[0].removeChild(t), e;
                });
            var n = t.fn.modal;
            (t.fn.modal = i),
                (t.fn.modal.Constructor = e),
                (t.fn.modal.noConflict = function () {
                    return (t.fn.modal = n), this;
                }),
                t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
                    var n = t(this),
                        o = n.attr("href"),
                        s = t(n.attr("data-target") || (o && o.replace(/.*(?=#[^\s]+$)/, ""))),
                        r = s.data("bs.modal") ? "toggle" : t.extend({ remote: !/#/.test(o) && o }, s.data(), n.data());
                    n.is("a") && e.preventDefault(),
                        s.one("show.bs.modal", function (t) {
                            t.isDefaultPrevented() ||
                                s.one("hidden.bs.modal", function () {
                                    n.is(":visible") && n.trigger("focus");
                                });
                        }),
                        i.call(s, r, this);
                });
        })(jQuery);
    },
    291: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (t, e) {
                (this.type = null), (this.options = null), (this.enabled = null), (this.timeout = null), (this.hoverState = null), (this.$element = null), (this.inState = null), this.init("tooltip", t, e);
            };
            (e.VERSION = "3.3.7"),
                (e.TRANSITION_DURATION = 150),
                (e.DEFAULTS = {
                    animation: !0,
                    placement: "top",
                    selector: !1,
                    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
                    trigger: "hover focus",
                    title: "",
                    delay: 0,
                    html: !1,
                    container: !1,
                    viewport: { selector: "body", padding: 0 },
                }),
                (e.prototype.init = function (e, i, n) {
                    if (
                        ((this.enabled = !0),
                        (this.type = e),
                        (this.$element = t(i)),
                        (this.options = this.getOptions(n)),
                        (this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport)),
                        (this.inState = { click: !1, hover: !1, focus: !1 }),
                        this.$element[0] instanceof document.constructor && !this.options.selector)
                    )
                        throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
                    for (var o = this.options.trigger.split(" "), s = o.length; s--; ) {
                        var r = o[s];
                        if ("click" == r) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                        else if ("manual" != r) {
                            var a = "hover" == r ? "mouseenter" : "focusin",
                                l = "hover" == r ? "mouseleave" : "focusout";
                            this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this));
                        }
                    }
                    this.options.selector ? (this._options = t.extend({}, this.options, { trigger: "manual", selector: "" })) : this.fixTitle();
                }),
                (e.prototype.getDefaults = function () {
                    return e.DEFAULTS;
                }),
                (e.prototype.getOptions = function (e) {
                    return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = { show: e.delay, hide: e.delay }), e;
                }),
                (e.prototype.getDelegateOptions = function () {
                    var e = {},
                        i = this.getDefaults();
                    return (
                        this._options &&
                            t.each(this._options, function (t, n) {
                                i[t] != n && (e[t] = n);
                            }),
                        e
                    );
                }),
                (e.prototype.enter = function (e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (
                        (i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                        e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0),
                        i.tip().hasClass("in") || "in" == i.hoverState)
                    )
                        i.hoverState = "in";
                    else {
                        if ((clearTimeout(i.timeout), (i.hoverState = "in"), !i.options.delay || !i.options.delay.show)) return i.show();
                        i.timeout = setTimeout(function () {
                            "in" == i.hoverState && i.show();
                        }, i.options.delay.show);
                    }
                }),
                (e.prototype.isInStateTrue = function () {
                    for (var t in this.inState) if (this.inState[t]) return !0;
                    return !1;
                }),
                (e.prototype.leave = function (e) {
                    var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
                    if (
                        (i || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i)),
                        e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1),
                        !i.isInStateTrue())
                    ) {
                        if ((clearTimeout(i.timeout), (i.hoverState = "out"), !i.options.delay || !i.options.delay.hide)) return i.hide();
                        i.timeout = setTimeout(function () {
                            "out" == i.hoverState && i.hide();
                        }, i.options.delay.hide);
                    }
                }),
                (e.prototype.show = function () {
                    var i = t.Event("show.bs." + this.type);
                    if (this.hasContent() && this.enabled) {
                        this.$element.trigger(i);
                        var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                        if (i.isDefaultPrevented() || !n) return;
                        var o = this,
                            s = this.tip(),
                            r = this.getUID(this.type);
                        this.setContent(), s.attr("id", r), this.$element.attr("aria-describedby", r), this.options.animation && s.addClass("fade");
                        var a = "function" == typeof this.options.placement ? this.options.placement.call(this, s[0], this.$element[0]) : this.options.placement,
                            l = /\s?auto?\s?/i,
                            c = l.test(a);
                        c && (a = a.replace(l, "") || "top"),
                            s
                                .detach()
                                .css({ top: 0, left: 0, display: "block" })
                                .addClass(a)
                                .data("bs." + this.type, this),
                            this.options.container ? s.appendTo(this.options.container) : s.insertAfter(this.$element),
                            this.$element.trigger("inserted.bs." + this.type);
                        var u = this.getPosition(),
                            d = s[0].offsetWidth,
                            p = s[0].offsetHeight;
                        if (c) {
                            var h = a,
                                f = this.getPosition(this.$viewport);
                            (a = "bottom" == a && u.bottom + p > f.bottom ? "top" : "top" == a && u.top - p < f.top ? "bottom" : "right" == a && u.right + d > f.width ? "left" : "left" == a && u.left - d < f.left ? "right" : a),
                                s.removeClass(h).addClass(a);
                        }
                        var g = this.getCalculatedOffset(a, u, d, p);
                        this.applyPlacement(g, a);
                        var v = function () {
                            var t = o.hoverState;
                            o.$element.trigger("shown.bs." + o.type), (o.hoverState = null), "out" == t && o.leave(o);
                        };
                        t.support.transition && this.$tip.hasClass("fade") ? s.one("bsTransitionEnd", v).emulateTransitionEnd(e.TRANSITION_DURATION) : v();
                    }
                }),
                (e.prototype.applyPlacement = function (e, i) {
                    var n = this.tip(),
                        o = n[0].offsetWidth,
                        s = n[0].offsetHeight,
                        r = parseInt(n.css("margin-top"), 10),
                        a = parseInt(n.css("margin-left"), 10);
                    isNaN(r) && (r = 0),
                        isNaN(a) && (a = 0),
                        (e.top += r),
                        (e.left += a),
                        t.offset.setOffset(
                            n[0],
                            t.extend(
                                {
                                    using: function (t) {
                                        n.css({ top: Math.round(t.top), left: Math.round(t.left) });
                                    },
                                },
                                e
                            ),
                            0
                        ),
                        n.addClass("in");
                    var l = n[0].offsetWidth,
                        c = n[0].offsetHeight;
                    "top" == i && c != s && (e.top = e.top + s - c);
                    var u = this.getViewportAdjustedDelta(i, e, l, c);
                    u.left ? (e.left += u.left) : (e.top += u.top);
                    var d = /top|bottom/.test(i),
                        p = d ? 2 * u.left - o + l : 2 * u.top - s + c,
                        h = d ? "offsetWidth" : "offsetHeight";
                    n.offset(e), this.replaceArrow(p, n[0][h], d);
                }),
                (e.prototype.replaceArrow = function (t, e, i) {
                    this.arrow()
                        .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
                        .css(i ? "top" : "left", "");
                }),
                (e.prototype.setContent = function () {
                    var t = this.tip(),
                        e = this.getTitle();
                    t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right");
                }),
                (e.prototype.hide = function (i) {
                    var n = this,
                        o = t(this.$tip),
                        s = t.Event("hide.bs." + this.type);
                    function r() {
                        "in" != n.hoverState && o.detach(), n.$element && n.$element.removeAttr("aria-describedby").trigger("hidden.bs." + n.type), i && i();
                    }
                    if ((this.$element.trigger(s), !s.isDefaultPrevented()))
                        return o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one("bsTransitionEnd", r).emulateTransitionEnd(e.TRANSITION_DURATION) : r(), (this.hoverState = null), this;
                }),
                (e.prototype.fixTitle = function () {
                    var t = this.$element;
                    (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "");
                }),
                (e.prototype.hasContent = function () {
                    return this.getTitle();
                }),
                (e.prototype.getPosition = function (e) {
                    var i = (e = e || this.$element)[0],
                        n = "BODY" == i.tagName,
                        o = i.getBoundingClientRect();
                    null == o.width && (o = t.extend({}, o, { width: o.right - o.left, height: o.bottom - o.top }));
                    var s = window.SVGElement && i instanceof window.SVGElement,
                        r = n ? { top: 0, left: 0 } : s ? null : e.offset(),
                        a = { scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop() },
                        l = n ? { width: t(window).width(), height: t(window).height() } : null;
                    return t.extend({}, o, a, l, r);
                }),
                (e.prototype.getCalculatedOffset = function (t, e, i, n) {
                    return "bottom" == t
                        ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
                        : "top" == t
                        ? { top: e.top - n, left: e.left + e.width / 2 - i / 2 }
                        : "left" == t
                        ? { top: e.top + e.height / 2 - n / 2, left: e.left - i }
                        : { top: e.top + e.height / 2 - n / 2, left: e.left + e.width };
                }),
                (e.prototype.getViewportAdjustedDelta = function (t, e, i, n) {
                    var o = { top: 0, left: 0 };
                    if (!this.$viewport) return o;
                    var s = (this.options.viewport && this.options.viewport.padding) || 0,
                        r = this.getPosition(this.$viewport);
                    if (/right|left/.test(t)) {
                        var a = e.top - s - r.scroll,
                            l = e.top + s - r.scroll + n;
                        a < r.top ? (o.top = r.top - a) : l > r.top + r.height && (o.top = r.top + r.height - l);
                    } else {
                        var c = e.left - s,
                            u = e.left + s + i;
                        c < r.left ? (o.left = r.left - c) : u > r.right && (o.left = r.left + r.width - u);
                    }
                    return o;
                }),
                (e.prototype.getTitle = function () {
                    var t = this.$element,
                        e = this.options;
                    return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title);
                }),
                (e.prototype.getUID = function (t) {
                    do {
                        t += ~~(1e6 * Math.random());
                    } while (document.getElementById(t));
                    return t;
                }),
                (e.prototype.tip = function () {
                    if (!this.$tip && ((this.$tip = t(this.options.template)), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
                    return this.$tip;
                }),
                (e.prototype.arrow = function () {
                    return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
                }),
                (e.prototype.enable = function () {
                    this.enabled = !0;
                }),
                (e.prototype.disable = function () {
                    this.enabled = !1;
                }),
                (e.prototype.toggleEnabled = function () {
                    this.enabled = !this.enabled;
                }),
                (e.prototype.toggle = function (e) {
                    var i = this;
                    e && ((i = t(e.currentTarget).data("bs." + this.type)) || ((i = new this.constructor(e.currentTarget, this.getDelegateOptions())), t(e.currentTarget).data("bs." + this.type, i))),
                        e ? ((i.inState.click = !i.inState.click), i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
                }),
                (e.prototype.destroy = function () {
                    var t = this;
                    clearTimeout(this.timeout),
                        this.hide(function () {
                            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), (t.$tip = null), (t.$arrow = null), (t.$viewport = null), (t.$element = null);
                        });
                });
            var i = t.fn.tooltip;
            (t.fn.tooltip = function (i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.tooltip"),
                        s = "object" == typeof i && i;
                    (!o && /destroy|hide/.test(i)) || (o || n.data("bs.tooltip", (o = new e(this, s))), "string" == typeof i && o[i]());
                });
            }),
                (t.fn.tooltip.Constructor = e),
                (t.fn.tooltip.noConflict = function () {
                    return (t.fn.tooltip = i), this;
                });
        })(jQuery);
    },
    292: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (t, e) {
                this.init("popover", t, e);
            };
            if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
            (e.VERSION = "3.3.7"),
                (e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
                    placement: "right",
                    trigger: "click",
                    content: "",
                    template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
                })),
                (e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
                (e.prototype.constructor = e),
                (e.prototype.getDefaults = function () {
                    return e.DEFAULTS;
                }),
                (e.prototype.setContent = function () {
                    var t = this.tip(),
                        e = this.getTitle(),
                        i = this.getContent();
                    t.find(".popover-title")[this.options.html ? "html" : "text"](e),
                        t.find(".popover-content").children().detach().end()[this.options.html ? ("string" == typeof i ? "html" : "append") : "text"](i),
                        t.removeClass("fade top bottom left right in"),
                        t.find(".popover-title").html() || t.find(".popover-title").hide();
                }),
                (e.prototype.hasContent = function () {
                    return this.getTitle() || this.getContent();
                }),
                (e.prototype.getContent = function () {
                    var t = this.$element,
                        e = this.options;
                    return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content);
                }),
                (e.prototype.arrow = function () {
                    return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
                });
            var i = t.fn.popover;
            (t.fn.popover = function (i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.popover"),
                        s = "object" == typeof i && i;
                    (!o && /destroy|hide/.test(i)) || (o || n.data("bs.popover", (o = new e(this, s))), "string" == typeof i && o[i]());
                });
            }),
                (t.fn.popover.Constructor = e),
                (t.fn.popover.noConflict = function () {
                    return (t.fn.popover = i), this;
                });
        })(jQuery);
    },
    293: function (t, e) {
        !(function (t) {
            "use strict";
            function e(i, n) {
                (this.$body = t(document.body)),
                    (this.$scrollElement = t(i).is(document.body) ? t(window) : t(i)),
                    (this.options = t.extend({}, e.DEFAULTS, n)),
                    (this.selector = (this.options.target || "") + " .nav li > a"),
                    (this.offsets = []),
                    (this.targets = []),
                    (this.activeTarget = null),
                    (this.scrollHeight = 0),
                    this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)),
                    this.refresh(),
                    this.process();
            }
            function i(i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.scrollspy"),
                        s = "object" == typeof i && i;
                    o || n.data("bs.scrollspy", (o = new e(this, s))), "string" == typeof i && o[i]();
                });
            }
            (e.VERSION = "3.3.7"),
                (e.DEFAULTS = { offset: 10 }),
                (e.prototype.getScrollHeight = function () {
                    return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight);
                }),
                (e.prototype.refresh = function () {
                    var e = this,
                        i = "offset",
                        n = 0;
                    (this.offsets = []),
                        (this.targets = []),
                        (this.scrollHeight = this.getScrollHeight()),
                        t.isWindow(this.$scrollElement[0]) || ((i = "position"), (n = this.$scrollElement.scrollTop())),
                        this.$body
                            .find(this.selector)
                            .map(function () {
                                var e = t(this),
                                    o = e.data("target") || e.attr("href"),
                                    s = /^#./.test(o) && t(o);
                                return (s && s.length && s.is(":visible") && [[s[i]().top + n, o]]) || null;
                            })
                            .sort(function (t, e) {
                                return t[0] - e[0];
                            })
                            .each(function () {
                                e.offsets.push(this[0]), e.targets.push(this[1]);
                            });
                }),
                (e.prototype.process = function () {
                    var t,
                        e = this.$scrollElement.scrollTop() + this.options.offset,
                        i = this.getScrollHeight(),
                        n = this.options.offset + i - this.$scrollElement.height(),
                        o = this.offsets,
                        s = this.targets,
                        r = this.activeTarget;
                    if ((this.scrollHeight != i && this.refresh(), e >= n)) return r != (t = s[s.length - 1]) && this.activate(t);
                    if (r && e < o[0]) return (this.activeTarget = null), this.clear();
                    for (t = o.length; t--; ) r != s[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(s[t]);
                }),
                (e.prototype.activate = function (e) {
                    (this.activeTarget = e), this.clear();
                    var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                        n = t(i).parents("li").addClass("active");
                    n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy");
                }),
                (e.prototype.clear = function () {
                    t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
                });
            var n = t.fn.scrollspy;
            (t.fn.scrollspy = i),
                (t.fn.scrollspy.Constructor = e),
                (t.fn.scrollspy.noConflict = function () {
                    return (t.fn.scrollspy = n), this;
                }),
                t(window).on("load.bs.scrollspy.data-api", function () {
                    t('[data-spy="scroll"]').each(function () {
                        var e = t(this);
                        i.call(e, e.data());
                    });
                });
        })(jQuery);
    },
    294: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (e) {
                this.element = t(e);
            };
            function i(i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.tab");
                    o || n.data("bs.tab", (o = new e(this))), "string" == typeof i && o[i]();
                });
            }
            (e.VERSION = "3.3.7"),
                (e.TRANSITION_DURATION = 150),
                (e.prototype.show = function () {
                    var e = this.element,
                        i = e.closest("ul:not(.dropdown-menu)"),
                        n = e.data("target");
                    if ((n || (n = (n = e.attr("href")) && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active"))) {
                        var o = i.find(".active:last a"),
                            s = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
                            r = t.Event("show.bs.tab", { relatedTarget: o[0] });
                        if ((o.trigger(s), e.trigger(r), !r.isDefaultPrevented() && !s.isDefaultPrevented())) {
                            var a = t(n);
                            this.activate(e.closest("li"), i),
                                this.activate(a, a.parent(), function () {
                                    o.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }), e.trigger({ type: "shown.bs.tab", relatedTarget: o[0] });
                                });
                        }
                    }
                }),
                (e.prototype.activate = function (i, n, o) {
                    var s = n.find("> .active"),
                        r = o && t.support.transition && ((s.length && s.hasClass("fade")) || !!n.find("> .fade").length);
                    function a() {
                        s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                            r ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade"),
                            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                            o && o();
                    }
                    s.length && r ? s.one("bsTransitionEnd", a).emulateTransitionEnd(e.TRANSITION_DURATION) : a(), s.removeClass("in");
                });
            var n = t.fn.tab;
            (t.fn.tab = i),
                (t.fn.tab.Constructor = e),
                (t.fn.tab.noConflict = function () {
                    return (t.fn.tab = n), this;
                });
            var o = function (e) {
                e.preventDefault(), i.call(t(this), "show");
            };
            t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
        })(jQuery);
    },
    295: function (t, e) {
        !(function (t) {
            "use strict";
            var e = function (i, n) {
                (this.options = t.extend({}, e.DEFAULTS, n)),
                    (this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this))),
                    (this.$element = t(i)),
                    (this.affixed = null),
                    (this.unpin = null),
                    (this.pinnedOffset = null),
                    this.checkPosition();
            };
            function i(i) {
                return this.each(function () {
                    var n = t(this),
                        o = n.data("bs.affix"),
                        s = "object" == typeof i && i;
                    o || n.data("bs.affix", (o = new e(this, s))), "string" == typeof i && o[i]();
                });
            }
            (e.VERSION = "3.3.7"),
                (e.RESET = "affix affix-top affix-bottom"),
                (e.DEFAULTS = { offset: 0, target: window }),
                (e.prototype.getState = function (t, e, i, n) {
                    var o = this.$target.scrollTop(),
                        s = this.$element.offset(),
                        r = this.$target.height();
                    if (null != i && "top" == this.affixed) return o < i && "top";
                    if ("bottom" == this.affixed) return null != i ? !(o + this.unpin <= s.top) && "bottom" : !(o + r <= t - n) && "bottom";
                    var a = null == this.affixed,
                        l = a ? o : s.top;
                    return null != i && o <= i ? "top" : null != n && l + (a ? r : e) >= t - n && "bottom";
                }),
                (e.prototype.getPinnedOffset = function () {
                    if (this.pinnedOffset) return this.pinnedOffset;
                    this.$element.removeClass(e.RESET).addClass("affix");
                    var t = this.$target.scrollTop(),
                        i = this.$element.offset();
                    return (this.pinnedOffset = i.top - t);
                }),
                (e.prototype.checkPositionWithEventLoop = function () {
                    setTimeout(t.proxy(this.checkPosition, this), 1);
                }),
                (e.prototype.checkPosition = function () {
                    if (this.$element.is(":visible")) {
                        var i = this.$element.height(),
                            n = this.options.offset,
                            o = n.top,
                            s = n.bottom,
                            r = Math.max(t(document).height(), t(document.body).height());
                        "object" != typeof n && (s = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof s && (s = n.bottom(this.$element));
                        var a = this.getState(r, i, o, s);
                        if (this.affixed != a) {
                            null != this.unpin && this.$element.css("top", "");
                            var l = "affix" + (a ? "-" + a : ""),
                                c = t.Event(l + ".bs.affix");
                            if ((this.$element.trigger(c), c.isDefaultPrevented())) return;
                            (this.affixed = a),
                                (this.unpin = "bottom" == a ? this.getPinnedOffset() : null),
                                this.$element
                                    .removeClass(e.RESET)
                                    .addClass(l)
                                    .trigger(l.replace("affix", "affixed") + ".bs.affix");
                        }
                        "bottom" == a && this.$element.offset({ top: r - i - s });
                    }
                });
            var n = t.fn.affix;
            (t.fn.affix = i),
                (t.fn.affix.Constructor = e),
                (t.fn.affix.noConflict = function () {
                    return (t.fn.affix = n), this;
                }),
                t(window).on("load", function () {
                    t('[data-spy="affix"]').each(function () {
                        var e = t(this),
                            n = e.data();
                        (n.offset = n.offset || {}), null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), i.call(e, n);
                    });
                });
        })(jQuery);
    },
    296: function (t, e, i) {
        var n, o, s;
        (s = function (t) {
            t.easing.jswing = t.easing.swing;
            var e = Math.pow,
                i = Math.sqrt,
                n = Math.sin,
                o = Math.cos,
                s = Math.PI,
                r = 1.70158,
                a = 1.525 * r,
                l = (2 * s) / 3,
                c = (2 * s) / 4.5;
            function u(t) {
                var e = 7.5625,
                    i = 2.75;
                return t < 1 / i ? e * t * t : t < 2 / i ? e * (t -= 1.5 / i) * t + 0.75 : t < 2.5 / i ? e * (t -= 2.25 / i) * t + 0.9375 : e * (t -= 2.625 / i) * t + 0.984375;
            }
            t.extend(t.easing, {
                def: "easeOutQuad",
                swing: function (e) {
                    return t.easing[t.easing.def](e);
                },
                easeInQuad: function (t) {
                    return t * t;
                },
                easeOutQuad: function (t) {
                    return 1 - (1 - t) * (1 - t);
                },
                easeInOutQuad: function (t) {
                    return t < 0.5 ? 2 * t * t : 1 - e(-2 * t + 2, 2) / 2;
                },
                easeInCubic: function (t) {
                    return t * t * t;
                },
                easeOutCubic: function (t) {
                    return 1 - e(1 - t, 3);
                },
                easeInOutCubic: function (t) {
                    return t < 0.5 ? 4 * t * t * t : 1 - e(-2 * t + 2, 3) / 2;
                },
                easeInQuart: function (t) {
                    return t * t * t * t;
                },
                easeOutQuart: function (t) {
                    return 1 - e(1 - t, 4);
                },
                easeInOutQuart: function (t) {
                    return t < 0.5 ? 8 * t * t * t * t : 1 - e(-2 * t + 2, 4) / 2;
                },
                easeInQuint: function (t) {
                    return t * t * t * t * t;
                },
                easeOutQuint: function (t) {
                    return 1 - e(1 - t, 5);
                },
                easeInOutQuint: function (t) {
                    return t < 0.5 ? 16 * t * t * t * t * t : 1 - e(-2 * t + 2, 5) / 2;
                },
                easeInSine: function (t) {
                    return 1 - o((t * s) / 2);
                },
                easeOutSine: function (t) {
                    return n((t * s) / 2);
                },
                easeInOutSine: function (t) {
                    return -(o(s * t) - 1) / 2;
                },
                easeInExpo: function (t) {
                    return 0 === t ? 0 : e(2, 10 * t - 10);
                },
                easeOutExpo: function (t) {
                    return 1 === t ? 1 : 1 - e(2, -10 * t);
                },
                easeInOutExpo: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : t < 0.5 ? e(2, 20 * t - 10) / 2 : (2 - e(2, -20 * t + 10)) / 2;
                },
                easeInCirc: function (t) {
                    return 1 - i(1 - e(t, 2));
                },
                easeOutCirc: function (t) {
                    return i(1 - e(t - 1, 2));
                },
                easeInOutCirc: function (t) {
                    return t < 0.5 ? (1 - i(1 - e(2 * t, 2))) / 2 : (i(1 - e(-2 * t + 2, 2)) + 1) / 2;
                },
                easeInElastic: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : -e(2, 10 * t - 10) * n((10 * t - 10.75) * l);
                },
                easeOutElastic: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : e(2, -10 * t) * n((10 * t - 0.75) * l) + 1;
                },
                easeInOutElastic: function (t) {
                    return 0 === t ? 0 : 1 === t ? 1 : t < 0.5 ? (-e(2, 20 * t - 10) * n((20 * t - 11.125) * c)) / 2 : (e(2, -20 * t + 10) * n((20 * t - 11.125) * c)) / 2 + 1;
                },
                easeInBack: function (t) {
                    return 2.70158 * t * t * t - r * t * t;
                },
                easeOutBack: function (t) {
                    return 1 + 2.70158 * e(t - 1, 3) + r * e(t - 1, 2);
                },
                easeInOutBack: function (t) {
                    return t < 0.5 ? (e(2 * t, 2) * (7.189819 * t - a)) / 2 : (e(2 * t - 2, 2) * ((a + 1) * (2 * t - 2) + a) + 2) / 2;
                },
                easeInBounce: function (t) {
                    return 1 - u(1 - t);
                },
                easeOutBounce: u,
                easeInOutBounce: function (t) {
                    return t < 0.5 ? (1 - u(1 - 2 * t)) / 2 : (1 + u(2 * t - 1)) / 2;
                },
            });
        }),
            (n = [i(10)]),
            void 0 ===
                (o = function (t) {
                    return s(t);
                }.apply(e, n)) || (t.exports = o);
    },
    297: function (t, e, i) {
        var n, o, s;
        !(function (r) {
            "use strict";
            (o = [i(10)]), void 0 === (s = "function" == typeof (n = r) ? n.apply(e, o) : n) || (t.exports = s);
        })(function (t) {
            "use strict";
            var e = window.Slick || {};
            ((e = (function () {
                var e = 0;
                return function (i, n) {
                    var o,
                        s = this;
                    (s.defaults = {
                        accessibility: !0,
                        adaptiveHeight: !1,
                        appendArrows: t(i),
                        appendDots: t(i),
                        arrows: !0,
                        asNavFor: null,
                        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                        nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                        autoplay: !1,
                        autoplaySpeed: 3e3,
                        centerMode: !1,
                        centerPadding: "50px",
                        cssEase: "ease",
                        customPaging: function (e, i) {
                            return t('<button type="button" />').text(i + 1);
                        },
                        dots: !1,
                        dotsClass: "slick-dots",
                        draggable: !0,
                        easing: "linear",
                        edgeFriction: 0.35,
                        fade: !1,
                        focusOnSelect: !1,
                        focusOnChange: !1,
                        infinite: !0,
                        initialSlide: 0,
                        lazyLoad: "ondemand",
                        mobileFirst: !1,
                        pauseOnHover: !0,
                        pauseOnFocus: !0,
                        pauseOnDotsHover: !1,
                        respondTo: "window",
                        responsive: null,
                        rows: 1,
                        rtl: !1,
                        slide: "",
                        slidesPerRow: 1,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        speed: 500,
                        swipe: !0,
                        swipeToSlide: !1,
                        touchMove: !0,
                        touchThreshold: 5,
                        useCSS: !0,
                        useTransform: !0,
                        variableWidth: !1,
                        vertical: !1,
                        verticalSwiping: !1,
                        waitForAnimate: !0,
                        zIndex: 1e3,
                    }),
                        (s.initials = {
                            animating: !1,
                            dragging: !1,
                            autoPlayTimer: null,
                            currentDirection: 0,
                            currentLeft: null,
                            currentSlide: 0,
                            direction: 1,
                            $dots: null,
                            listWidth: null,
                            listHeight: null,
                            loadIndex: 0,
                            $nextArrow: null,
                            $prevArrow: null,
                            scrolling: !1,
                            slideCount: null,
                            slideWidth: null,
                            $slideTrack: null,
                            $slides: null,
                            sliding: !1,
                            slideOffset: 0,
                            swipeLeft: null,
                            swiping: !1,
                            $list: null,
                            touchObject: {},
                            transformsEnabled: !1,
                            unslicked: !1,
                        }),
                        t.extend(s, s.initials),
                        (s.activeBreakpoint = null),
                        (s.animType = null),
                        (s.animProp = null),
                        (s.breakpoints = []),
                        (s.breakpointSettings = []),
                        (s.cssTransitions = !1),
                        (s.focussed = !1),
                        (s.interrupted = !1),
                        (s.hidden = "hidden"),
                        (s.paused = !0),
                        (s.positionProp = null),
                        (s.respondTo = null),
                        (s.rowCount = 1),
                        (s.shouldClick = !0),
                        (s.$slider = t(i)),
                        (s.$slidesCache = null),
                        (s.transformType = null),
                        (s.transitionType = null),
                        (s.visibilityChange = "visibilitychange"),
                        (s.windowWidth = 0),
                        (s.windowTimer = null),
                        (o = t(i).data("slick") || {}),
                        (s.options = t.extend({}, s.defaults, n, o)),
                        (s.currentSlide = s.options.initialSlide),
                        (s.originalSettings = s.options),
                        void 0 !== document.mozHidden
                            ? ((s.hidden = "mozHidden"), (s.visibilityChange = "mozvisibilitychange"))
                            : void 0 !== document.webkitHidden && ((s.hidden = "webkitHidden"), (s.visibilityChange = "webkitvisibilitychange")),
                        (s.autoPlay = t.proxy(s.autoPlay, s)),
                        (s.autoPlayClear = t.proxy(s.autoPlayClear, s)),
                        (s.autoPlayIterator = t.proxy(s.autoPlayIterator, s)),
                        (s.changeSlide = t.proxy(s.changeSlide, s)),
                        (s.clickHandler = t.proxy(s.clickHandler, s)),
                        (s.selectHandler = t.proxy(s.selectHandler, s)),
                        (s.setPosition = t.proxy(s.setPosition, s)),
                        (s.swipeHandler = t.proxy(s.swipeHandler, s)),
                        (s.dragHandler = t.proxy(s.dragHandler, s)),
                        (s.keyHandler = t.proxy(s.keyHandler, s)),
                        (s.instanceUid = e++),
                        (s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/),
                        s.registerBreakpoints(),
                        s.init(!0);
                };
            })()).prototype.activateADA = function () {
                this.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
            }),
                (e.prototype.addSlide = e.prototype.slickAdd = function (e, i, n) {
                    var o = this;
                    if ("boolean" == typeof i) (n = i), (i = null);
                    else if (i < 0 || i >= o.slideCount) return !1;
                    o.unload(),
                        "number" == typeof i
                            ? 0 === i && 0 === o.$slides.length
                                ? t(e).appendTo(o.$slideTrack)
                                : n
                                ? t(e).insertBefore(o.$slides.eq(i))
                                : t(e).insertAfter(o.$slides.eq(i))
                            : !0 === n
                            ? t(e).prependTo(o.$slideTrack)
                            : t(e).appendTo(o.$slideTrack),
                        (o.$slides = o.$slideTrack.children(this.options.slide)),
                        o.$slideTrack.children(this.options.slide).detach(),
                        o.$slideTrack.append(o.$slides),
                        o.$slides.each(function (e, i) {
                            t(i).attr("data-slick-index", e);
                        }),
                        (o.$slidesCache = o.$slides),
                        o.reinit();
                }),
                (e.prototype.animateHeight = function () {
                    var t = this;
                    if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                        t.$list.animate({ height: e }, t.options.speed);
                    }
                }),
                (e.prototype.animateSlide = function (e, i) {
                    var n = {},
                        o = this;
                    o.animateHeight(),
                        !0 === o.options.rtl && !1 === o.options.vertical && (e = -e),
                        !1 === o.transformsEnabled
                            ? !1 === o.options.vertical
                                ? o.$slideTrack.animate({ left: e }, o.options.speed, o.options.easing, i)
                                : o.$slideTrack.animate({ top: e }, o.options.speed, o.options.easing, i)
                            : !1 === o.cssTransitions
                            ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft),
                              t({ animStart: o.currentLeft }).animate(
                                  { animStart: e },
                                  {
                                      duration: o.options.speed,
                                      easing: o.options.easing,
                                      step: function (t) {
                                          (t = Math.ceil(t)), !1 === o.options.vertical ? ((n[o.animType] = "translate(" + t + "px, 0px)"), o.$slideTrack.css(n)) : ((n[o.animType] = "translate(0px," + t + "px)"), o.$slideTrack.css(n));
                                      },
                                      complete: function () {
                                          i && i.call();
                                      },
                                  }
                              ))
                            : (o.applyTransition(),
                              (e = Math.ceil(e)),
                              !1 === o.options.vertical ? (n[o.animType] = "translate3d(" + e + "px, 0px, 0px)") : (n[o.animType] = "translate3d(0px," + e + "px, 0px)"),
                              o.$slideTrack.css(n),
                              i &&
                                  setTimeout(function () {
                                      o.disableTransition(), i.call();
                                  }, o.options.speed));
                }),
                (e.prototype.getNavTarget = function () {
                    var e = this.options.asNavFor;
                    return e && null !== e && (e = t(e).not(this.$slider)), e;
                }),
                (e.prototype.asNavFor = function (e) {
                    var i = this.getNavTarget();
                    null !== i &&
                        "object" == typeof i &&
                        i.each(function () {
                            var i = t(this).slick("getSlick");
                            i.unslicked || i.slideHandler(e, !0);
                        });
                }),
                (e.prototype.applyTransition = function (t) {
                    var e = this,
                        i = {};
                    !1 === e.options.fade ? (i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase) : (i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase),
                        !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
                }),
                (e.prototype.autoPlay = function () {
                    var t = this;
                    t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed));
                }),
                (e.prototype.autoPlayClear = function () {
                    this.autoPlayTimer && clearInterval(this.autoPlayTimer);
                }),
                (e.prototype.autoPlayIterator = function () {
                    var t = this,
                        e = t.currentSlide + t.options.slidesToScroll;
                    t.paused ||
                        t.interrupted ||
                        t.focussed ||
                        (!1 === t.options.infinite &&
                            (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? (t.direction = 0) : 0 === t.direction && ((e = t.currentSlide - t.options.slidesToScroll), t.currentSlide - 1 == 0 && (t.direction = 1))),
                        t.slideHandler(e));
                }),
                (e.prototype.buildArrows = function () {
                    var e = this;
                    !0 === e.options.arrows &&
                        ((e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow")),
                        (e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow")),
                        e.slideCount > e.options.slidesToShow
                            ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                              e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),
                              e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows),
                              e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
                              !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"))
                            : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
                }),
                (e.prototype.buildDots = function () {
                    var e,
                        i,
                        n = this;
                    if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
                        for (n.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(n.options.dotsClass), e = 0; e <= n.getDotCount(); e += 1) i.append(t("<li />").append(n.options.customPaging.call(this, n, e)));
                        (n.$dots = i.appendTo(n.options.appendDots)), n.$dots.find("li").first().addClass("slick-active");
                    }
                }),
                (e.prototype.buildOut = function () {
                    var e = this;
                    (e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide")),
                        (e.slideCount = e.$slides.length),
                        e.$slides.each(function (e, i) {
                            t(i)
                                .attr("data-slick-index", e)
                                .data("originalStyling", t(i).attr("style") || "");
                        }),
                        e.$slider.addClass("slick-slider"),
                        (e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent()),
                        (e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent()),
                        e.$slideTrack.css("opacity", 0),
                        (!0 !== e.options.centerMode && !0 !== e.options.swipeToSlide) || (e.options.slidesToScroll = 1),
                        t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"),
                        e.setupInfinite(),
                        e.buildArrows(),
                        e.buildDots(),
                        e.updateDots(),
                        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                        !0 === e.options.draggable && e.$list.addClass("draggable");
                }),
                (e.prototype.buildRows = function () {
                    var t,
                        e,
                        i,
                        n,
                        o,
                        s,
                        r,
                        a = this;
                    if (((n = document.createDocumentFragment()), (s = a.$slider.children()), a.options.rows > 0)) {
                        for (r = a.options.slidesPerRow * a.options.rows, o = Math.ceil(s.length / r), t = 0; t < o; t++) {
                            var l = document.createElement("div");
                            for (e = 0; e < a.options.rows; e++) {
                                var c = document.createElement("div");
                                for (i = 0; i < a.options.slidesPerRow; i++) {
                                    var u = t * r + (e * a.options.slidesPerRow + i);
                                    s.get(u) && c.appendChild(s.get(u));
                                }
                                l.appendChild(c);
                            }
                            n.appendChild(l);
                        }
                        a.$slider.empty().append(n),
                            a.$slider
                                .children()
                                .children()
                                .children()
                                .css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
                    }
                }),
                (e.prototype.checkResponsive = function (e, i) {
                    var n,
                        o,
                        s,
                        r = this,
                        a = !1,
                        l = r.$slider.width(),
                        c = window.innerWidth || t(window).width();
                    if (("window" === r.respondTo ? (s = c) : "slider" === r.respondTo ? (s = l) : "min" === r.respondTo && (s = Math.min(c, l)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive)) {
                        for (n in ((o = null), r.breakpoints)) r.breakpoints.hasOwnProperty(n) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[n] && (o = r.breakpoints[n]) : s > r.breakpoints[n] && (o = r.breakpoints[n]));
                        null !== o
                            ? null !== r.activeBreakpoint
                                ? (o !== r.activeBreakpoint || i) &&
                                  ((r.activeBreakpoint = o),
                                  "unslick" === r.breakpointSettings[o] ? r.unslick(o) : ((r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                                  (a = o))
                                : ((r.activeBreakpoint = o),
                                  "unslick" === r.breakpointSettings[o] ? r.unslick(o) : ((r.options = t.extend({}, r.originalSettings, r.breakpointSettings[o])), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)),
                                  (a = o))
                            : null !== r.activeBreakpoint && ((r.activeBreakpoint = null), (r.options = r.originalSettings), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), (a = o)),
                            e || !1 === a || r.$slider.trigger("breakpoint", [r, a]);
                    }
                }),
                (e.prototype.changeSlide = function (e, i) {
                    var n,
                        o,
                        s = this,
                        r = t(e.currentTarget);
                    switch ((r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), (n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll), e.data.message)) {
                        case "previous":
                            (o = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - o, !1, i);
                            break;
                        case "next":
                            (o = 0 === n ? s.options.slidesToScroll : n), s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + o, !1, i);
                            break;
                        case "index":
                            var a = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
                            s.slideHandler(s.checkNavigable(a), !1, i), r.children().trigger("focus");
                            break;
                        default:
                            return;
                    }
                }),
                (e.prototype.checkNavigable = function (t) {
                    var e, i;
                    if (((i = 0), t > (e = this.getNavigableIndexes())[e.length - 1])) t = e[e.length - 1];
                    else
                        for (var n in e) {
                            if (t < e[n]) {
                                t = i;
                                break;
                            }
                            i = e[n];
                        }
                    return t;
                }),
                (e.prototype.cleanUpEvents = function () {
                    var e = this;
                    e.options.dots &&
                        null !== e.$dots &&
                        (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)),
                        !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)),
                        e.$slider.off("focus.slick blur.slick"),
                        !0 === e.options.arrows &&
                            e.slideCount > e.options.slidesToShow &&
                            (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide),
                            e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide),
                            !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))),
                        e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler),
                        e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler),
                        e.$list.off("touchend.slick mouseup.slick", e.swipeHandler),
                        e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler),
                        e.$list.off("click.slick", e.clickHandler),
                        t(document).off(e.visibilityChange, e.visibility),
                        e.cleanUpSlideEvents(),
                        !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler),
                        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler),
                        t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange),
                        t(window).off("resize.slick.slick-" + e.instanceUid, e.resize),
                        t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault),
                        t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition);
                }),
                (e.prototype.cleanUpSlideEvents = function () {
                    var e = this;
                    e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                }),
                (e.prototype.cleanUpRows = function () {
                    var t,
                        e = this;
                    e.options.rows > 0 && ((t = e.$slides.children().children()).removeAttr("style"), e.$slider.empty().append(t));
                }),
                (e.prototype.clickHandler = function (t) {
                    !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault());
                }),
                (e.prototype.destroy = function (e) {
                    var i = this;
                    i.autoPlayClear(),
                        (i.touchObject = {}),
                        i.cleanUpEvents(),
                        t(".slick-cloned", i.$slider).detach(),
                        i.$dots && i.$dots.remove(),
                        i.$prevArrow &&
                            i.$prevArrow.length &&
                            (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()),
                        i.$nextArrow &&
                            i.$nextArrow.length &&
                            (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()),
                        i.$slides &&
                            (i.$slides
                                .removeClass("slick-slide slick-active slick-center slick-visible slick-current")
                                .removeAttr("aria-hidden")
                                .removeAttr("data-slick-index")
                                .each(function () {
                                    t(this).attr("style", t(this).data("originalStyling"));
                                }),
                            i.$slideTrack.children(this.options.slide).detach(),
                            i.$slideTrack.detach(),
                            i.$list.detach(),
                            i.$slider.append(i.$slides)),
                        i.cleanUpRows(),
                        i.$slider.removeClass("slick-slider"),
                        i.$slider.removeClass("slick-initialized"),
                        i.$slider.removeClass("slick-dotted"),
                        (i.unslicked = !0),
                        e || i.$slider.trigger("destroy", [i]);
                }),
                (e.prototype.disableTransition = function (t) {
                    var e = this,
                        i = {};
                    (i[e.transitionType] = ""), !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i);
                }),
                (e.prototype.fadeSlide = function (t, e) {
                    var i = this;
                    !1 === i.cssTransitions
                        ? (i.$slides.eq(t).css({ zIndex: i.options.zIndex }), i.$slides.eq(t).animate({ opacity: 1 }, i.options.speed, i.options.easing, e))
                        : (i.applyTransition(t),
                          i.$slides.eq(t).css({ opacity: 1, zIndex: i.options.zIndex }),
                          e &&
                              setTimeout(function () {
                                  i.disableTransition(t), e.call();
                              }, i.options.speed));
                }),
                (e.prototype.fadeSlideOut = function (t) {
                    var e = this;
                    !1 === e.cssTransitions
                        ? e.$slides.eq(t).animate({ opacity: 0, zIndex: e.options.zIndex - 2 }, e.options.speed, e.options.easing)
                        : (e.applyTransition(t), e.$slides.eq(t).css({ opacity: 0, zIndex: e.options.zIndex - 2 }));
                }),
                (e.prototype.filterSlides = e.prototype.slickFilter = function (t) {
                    var e = this;
                    null !== t && ((e.$slidesCache = e.$slides), e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit());
                }),
                (e.prototype.focusHandler = function () {
                    var e = this;
                    e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
                        i.stopImmediatePropagation();
                        var n = t(this);
                        setTimeout(function () {
                            e.options.pauseOnFocus && ((e.focussed = n.is(":focus")), e.autoPlay());
                        }, 0);
                    });
                }),
                (e.prototype.getCurrent = e.prototype.slickCurrentSlide = function () {
                    return this.currentSlide;
                }),
                (e.prototype.getDotCount = function () {
                    var t = this,
                        e = 0,
                        i = 0,
                        n = 0;
                    if (!0 === t.options.infinite)
                        if (t.slideCount <= t.options.slidesToShow) ++n;
                        else for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                    else if (!0 === t.options.centerMode) n = t.slideCount;
                    else if (t.options.asNavFor) for (; e < t.slideCount; ) ++n, (e = i + t.options.slidesToScroll), (i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow);
                    else n = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
                    return n - 1;
                }),
                (e.prototype.getLeft = function (t) {
                    var e,
                        i,
                        n,
                        o,
                        s = this,
                        r = 0;
                    return (
                        (s.slideOffset = 0),
                        (i = s.$slides.first().outerHeight(!0)),
                        !0 === s.options.infinite
                            ? (s.slideCount > s.options.slidesToShow &&
                                  ((s.slideOffset = s.slideWidth * s.options.slidesToShow * -1),
                                  (o = -1),
                                  !0 === s.options.vertical && !0 === s.options.centerMode && (2 === s.options.slidesToShow ? (o = -1.5) : 1 === s.options.slidesToShow && (o = -2)),
                                  (r = i * s.options.slidesToShow * o)),
                              s.slideCount % s.options.slidesToScroll != 0 &&
                                  t + s.options.slidesToScroll > s.slideCount &&
                                  s.slideCount > s.options.slidesToShow &&
                                  (t > s.slideCount
                                      ? ((s.slideOffset = (s.options.slidesToShow - (t - s.slideCount)) * s.slideWidth * -1), (r = (s.options.slidesToShow - (t - s.slideCount)) * i * -1))
                                      : ((s.slideOffset = (s.slideCount % s.options.slidesToScroll) * s.slideWidth * -1), (r = (s.slideCount % s.options.slidesToScroll) * i * -1))))
                            : t + s.options.slidesToShow > s.slideCount && ((s.slideOffset = (t + s.options.slidesToShow - s.slideCount) * s.slideWidth), (r = (t + s.options.slidesToShow - s.slideCount) * i)),
                        s.slideCount <= s.options.slidesToShow && ((s.slideOffset = 0), (r = 0)),
                        !0 === s.options.centerMode && s.slideCount <= s.options.slidesToShow
                            ? (s.slideOffset = (s.slideWidth * Math.floor(s.options.slidesToShow)) / 2 - (s.slideWidth * s.slideCount) / 2)
                            : !0 === s.options.centerMode && !0 === s.options.infinite
                            ? (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth)
                            : !0 === s.options.centerMode && ((s.slideOffset = 0), (s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2))),
                        (e = !1 === s.options.vertical ? t * s.slideWidth * -1 + s.slideOffset : t * i * -1 + r),
                        !0 === s.options.variableWidth &&
                            ((n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow)),
                            (e = !0 === s.options.rtl ? (n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0) : n[0] ? -1 * n[0].offsetLeft : 0),
                            !0 === s.options.centerMode &&
                                ((n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(t) : s.$slideTrack.children(".slick-slide").eq(t + s.options.slidesToShow + 1)),
                                (e = !0 === s.options.rtl ? (n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0) : n[0] ? -1 * n[0].offsetLeft : 0),
                                (e += (s.$list.width() - n.outerWidth()) / 2))),
                        e
                    );
                }),
                (e.prototype.getOption = e.prototype.slickGetOption = function (t) {
                    return this.options[t];
                }),
                (e.prototype.getNavigableIndexes = function () {
                    var t,
                        e = this,
                        i = 0,
                        n = 0,
                        o = [];
                    for (!1 === e.options.infinite ? (t = e.slideCount) : ((i = -1 * e.options.slidesToScroll), (n = -1 * e.options.slidesToScroll), (t = 2 * e.slideCount)); i < t; )
                        o.push(i), (i = n + e.options.slidesToScroll), (n += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow);
                    return o;
                }),
                (e.prototype.getSlick = function () {
                    return this;
                }),
                (e.prototype.getSlideCount = function () {
                    var e,
                        i,
                        n = this;
                    return (
                        (i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0),
                        !0 === n.options.swipeToSlide
                            ? (n.$slideTrack.find(".slick-slide").each(function (o, s) {
                                  if (s.offsetLeft - i + t(s).outerWidth() / 2 > -1 * n.swipeLeft) return (e = s), !1;
                              }),
                              Math.abs(t(e).attr("data-slick-index") - n.currentSlide) || 1)
                            : n.options.slidesToScroll
                    );
                }),
                (e.prototype.goTo = e.prototype.slickGoTo = function (t, e) {
                    this.changeSlide({ data: { message: "index", index: parseInt(t) } }, e);
                }),
                (e.prototype.init = function (e) {
                    var i = this;
                    t(i.$slider).hasClass("slick-initialized") ||
                        (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()),
                        e && i.$slider.trigger("init", [i]),
                        !0 === i.options.accessibility && i.initADA(),
                        i.options.autoplay && ((i.paused = !1), i.autoPlay());
                }),
                (e.prototype.initADA = function () {
                    var e = this,
                        i = Math.ceil(e.slideCount / e.options.slidesToShow),
                        n = e.getNavigableIndexes().filter(function (t) {
                            return t >= 0 && t < e.slideCount;
                        });
                    e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }),
                        null !== e.$dots &&
                            (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
                                var o = n.indexOf(i);
                                if ((t(this).attr({ role: "tabpanel", id: "slick-slide" + e.instanceUid + i, tabindex: -1 }), -1 !== o)) {
                                    var s = "slick-slide-control" + e.instanceUid + o;
                                    t("#" + s).length && t(this).attr({ "aria-describedby": s });
                                }
                            }),
                            e.$dots
                                .attr("role", "tablist")
                                .find("li")
                                .each(function (o) {
                                    var s = n[o];
                                    t(this).attr({ role: "presentation" }),
                                        t(this)
                                            .find("button")
                                            .first()
                                            .attr({ role: "tab", id: "slick-slide-control" + e.instanceUid + o, "aria-controls": "slick-slide" + e.instanceUid + s, "aria-label": o + 1 + " of " + i, "aria-selected": null, tabindex: "-1" });
                                })
                                .eq(e.currentSlide)
                                .find("button")
                                .attr({ "aria-selected": "true", tabindex: "0" })
                                .end());
                    for (var o = e.currentSlide, s = o + e.options.slidesToShow; o < s; o++) e.options.focusOnChange ? e.$slides.eq(o).attr({ tabindex: "0" }) : e.$slides.eq(o).removeAttr("tabindex");
                    e.activateADA();
                }),
                (e.prototype.initArrowEvents = function () {
                    var t = this;
                    !0 === t.options.arrows &&
                        t.slideCount > t.options.slidesToShow &&
                        (t.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, t.changeSlide),
                        t.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, t.changeSlide),
                        !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)));
                }),
                (e.prototype.initDotEvents = function () {
                    var e = this;
                    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && (t("li", e.$dots).on("click.slick", { message: "index" }, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)),
                        !0 === e.options.dots &&
                            !0 === e.options.pauseOnDotsHover &&
                            e.slideCount > e.options.slidesToShow &&
                            t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1));
                }),
                (e.prototype.initSlideEvents = function () {
                    var e = this;
                    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)));
                }),
                (e.prototype.initializeEvents = function () {
                    var e = this;
                    e.initArrowEvents(),
                        e.initDotEvents(),
                        e.initSlideEvents(),
                        e.$list.on("touchstart.slick mousedown.slick", { action: "start" }, e.swipeHandler),
                        e.$list.on("touchmove.slick mousemove.slick", { action: "move" }, e.swipeHandler),
                        e.$list.on("touchend.slick mouseup.slick", { action: "end" }, e.swipeHandler),
                        e.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, e.swipeHandler),
                        e.$list.on("click.slick", e.clickHandler),
                        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
                        !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler),
                        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                        t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)),
                        t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)),
                        t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault),
                        t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition),
                        t(e.setPosition);
                }),
                (e.prototype.initUI = function () {
                    var t = this;
                    !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show();
                }),
                (e.prototype.keyHandler = function (t) {
                    var e = this;
                    t.target.tagName.match("TEXTAREA|INPUT|SELECT") ||
                        (37 === t.keyCode && !0 === e.options.accessibility
                            ? e.changeSlide({ data: { message: !0 === e.options.rtl ? "next" : "previous" } })
                            : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({ data: { message: !0 === e.options.rtl ? "previous" : "next" } }));
                }),
                (e.prototype.lazyLoad = function () {
                    var e,
                        i,
                        n,
                        o = this;
                    function s(e) {
                        t("img[data-lazy]", e).each(function () {
                            var e = t(this),
                                i = t(this).attr("data-lazy"),
                                n = t(this).attr("data-srcset"),
                                s = t(this).attr("data-sizes") || o.$slider.attr("data-sizes"),
                                r = document.createElement("img");
                            (r.onload = function () {
                                e.animate({ opacity: 0 }, 100, function () {
                                    n && (e.attr("srcset", n), s && e.attr("sizes", s)),
                                        e.attr("src", i).animate({ opacity: 1 }, 200, function () {
                                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading");
                                        }),
                                        o.$slider.trigger("lazyLoaded", [o, e, i]);
                                });
                            }),
                                (r.onerror = function () {
                                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), o.$slider.trigger("lazyLoadError", [o, e, i]);
                                }),
                                (r.src = i);
                        });
                    }
                    if (
                        (!0 === o.options.centerMode
                            ? !0 === o.options.infinite
                                ? (n = (i = o.currentSlide + (o.options.slidesToShow / 2 + 1)) + o.options.slidesToShow + 2)
                                : ((i = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1))), (n = o.options.slidesToShow / 2 + 1 + 2 + o.currentSlide))
                            : ((i = o.options.infinite ? o.options.slidesToShow + o.currentSlide : o.currentSlide), (n = Math.ceil(i + o.options.slidesToShow)), !0 === o.options.fade && (i > 0 && i--, n <= o.slideCount && n++)),
                        (e = o.$slider.find(".slick-slide").slice(i, n)),
                        "anticipated" === o.options.lazyLoad)
                    )
                        for (var r = i - 1, a = n, l = o.$slider.find(".slick-slide"), c = 0; c < o.options.slidesToScroll; c++) r < 0 && (r = o.slideCount - 1), (e = (e = e.add(l.eq(r))).add(l.eq(a))), r--, a++;
                    s(e),
                        o.slideCount <= o.options.slidesToShow
                            ? s(o.$slider.find(".slick-slide"))
                            : o.currentSlide >= o.slideCount - o.options.slidesToShow
                            ? s(o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow))
                            : 0 === o.currentSlide && s(o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow));
                }),
                (e.prototype.loadSlider = function () {
                    var t = this;
                    t.setPosition(), t.$slideTrack.css({ opacity: 1 }), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad();
                }),
                (e.prototype.next = e.prototype.slickNext = function () {
                    this.changeSlide({ data: { message: "next" } });
                }),
                (e.prototype.orientationChange = function () {
                    this.checkResponsive(), this.setPosition();
                }),
                (e.prototype.pause = e.prototype.slickPause = function () {
                    this.autoPlayClear(), (this.paused = !0);
                }),
                (e.prototype.play = e.prototype.slickPlay = function () {
                    var t = this;
                    t.autoPlay(), (t.options.autoplay = !0), (t.paused = !1), (t.focussed = !1), (t.interrupted = !1);
                }),
                (e.prototype.postSlide = function (e) {
                    var i = this;
                    i.unslicked ||
                        (i.$slider.trigger("afterChange", [i, e]),
                        (i.animating = !1),
                        i.slideCount > i.options.slidesToShow && i.setPosition(),
                        (i.swipeLeft = null),
                        i.options.autoplay && i.autoPlay(),
                        !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()));
                }),
                (e.prototype.prev = e.prototype.slickPrev = function () {
                    this.changeSlide({ data: { message: "previous" } });
                }),
                (e.prototype.preventDefault = function (t) {
                    t.preventDefault();
                }),
                (e.prototype.progressiveLazyLoad = function (e) {
                    e = e || 1;
                    var i,
                        n,
                        o,
                        s,
                        r,
                        a = this,
                        l = t("img[data-lazy]", a.$slider);
                    l.length
                        ? ((i = l.first()),
                          (n = i.attr("data-lazy")),
                          (o = i.attr("data-srcset")),
                          (s = i.attr("data-sizes") || a.$slider.attr("data-sizes")),
                          ((r = document.createElement("img")).onload = function () {
                              o && (i.attr("srcset", o), s && i.attr("sizes", s)),
                                  i.attr("src", n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),
                                  !0 === a.options.adaptiveHeight && a.setPosition(),
                                  a.$slider.trigger("lazyLoaded", [a, i, n]),
                                  a.progressiveLazyLoad();
                          }),
                          (r.onerror = function () {
                              e < 3
                                  ? setTimeout(function () {
                                        a.progressiveLazyLoad(e + 1);
                                    }, 500)
                                  : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), a.$slider.trigger("lazyLoadError", [a, i, n]), a.progressiveLazyLoad());
                          }),
                          (r.src = n))
                        : a.$slider.trigger("allImagesLoaded", [a]);
                }),
                (e.prototype.refresh = function (e) {
                    var i,
                        n,
                        o = this;
                    (n = o.slideCount - o.options.slidesToShow),
                        !o.options.infinite && o.currentSlide > n && (o.currentSlide = n),
                        o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0),
                        (i = o.currentSlide),
                        o.destroy(!0),
                        t.extend(o, o.initials, { currentSlide: i }),
                        o.init(),
                        e || o.changeSlide({ data: { message: "index", index: i } }, !1);
                }),
                (e.prototype.registerBreakpoints = function () {
                    var e,
                        i,
                        n,
                        o = this,
                        s = o.options.responsive || null;
                    if ("array" === t.type(s) && s.length) {
                        for (e in ((o.respondTo = o.options.respondTo || "window"), s))
                            if (((n = o.breakpoints.length - 1), s.hasOwnProperty(e))) {
                                for (i = s[e].breakpoint; n >= 0; ) o.breakpoints[n] && o.breakpoints[n] === i && o.breakpoints.splice(n, 1), n--;
                                o.breakpoints.push(i), (o.breakpointSettings[i] = s[e].settings);
                            }
                        o.breakpoints.sort(function (t, e) {
                            return o.options.mobileFirst ? t - e : e - t;
                        });
                    }
                }),
                (e.prototype.reinit = function () {
                    var e = this;
                    (e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide")),
                        (e.slideCount = e.$slides.length),
                        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
                        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
                        e.registerBreakpoints(),
                        e.setProps(),
                        e.setupInfinite(),
                        e.buildArrows(),
                        e.updateArrows(),
                        e.initArrowEvents(),
                        e.buildDots(),
                        e.updateDots(),
                        e.initDotEvents(),
                        e.cleanUpSlideEvents(),
                        e.initSlideEvents(),
                        e.checkResponsive(!1, !0),
                        !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler),
                        e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0),
                        e.setPosition(),
                        e.focusHandler(),
                        (e.paused = !e.options.autoplay),
                        e.autoPlay(),
                        e.$slider.trigger("reInit", [e]);
                }),
                (e.prototype.resize = function () {
                    var e = this;
                    t(window).width() !== e.windowWidth &&
                        (clearTimeout(e.windowDelay),
                        (e.windowDelay = window.setTimeout(function () {
                            (e.windowWidth = t(window).width()), e.checkResponsive(), e.unslicked || e.setPosition();
                        }, 50)));
                }),
                (e.prototype.removeSlide = e.prototype.slickRemove = function (t, e, i) {
                    var n = this;
                    if (((t = "boolean" == typeof t ? (!0 === (e = t) ? 0 : n.slideCount - 1) : !0 === e ? --t : t), n.slideCount < 1 || t < 0 || t > n.slideCount - 1)) return !1;
                    n.unload(),
                        !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(t).remove(),
                        (n.$slides = n.$slideTrack.children(this.options.slide)),
                        n.$slideTrack.children(this.options.slide).detach(),
                        n.$slideTrack.append(n.$slides),
                        (n.$slidesCache = n.$slides),
                        n.reinit();
                }),
                (e.prototype.setCSS = function (t) {
                    var e,
                        i,
                        n = this,
                        o = {};
                    !0 === n.options.rtl && (t = -t),
                        (e = "left" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
                        (i = "top" == n.positionProp ? Math.ceil(t) + "px" : "0px"),
                        (o[n.positionProp] = t),
                        !1 === n.transformsEnabled
                            ? n.$slideTrack.css(o)
                            : ((o = {}), !1 === n.cssTransitions ? ((o[n.animType] = "translate(" + e + ", " + i + ")"), n.$slideTrack.css(o)) : ((o[n.animType] = "translate3d(" + e + ", " + i + ", 0px)"), n.$slideTrack.css(o)));
                }),
                (e.prototype.setDimensions = function () {
                    var t = this;
                    !1 === t.options.vertical
                        ? !0 === t.options.centerMode && t.$list.css({ padding: "0px " + t.options.centerPadding })
                        : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({ padding: t.options.centerPadding + " 0px" })),
                        (t.listWidth = t.$list.width()),
                        (t.listHeight = t.$list.height()),
                        !1 === t.options.vertical && !1 === t.options.variableWidth
                            ? ((t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow)), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length)))
                            : !0 === t.options.variableWidth
                            ? t.$slideTrack.width(5e3 * t.slideCount)
                            : ((t.slideWidth = Math.ceil(t.listWidth)), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
                    var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
                    !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e);
                }),
                (e.prototype.setFade = function () {
                    var e,
                        i = this;
                    i.$slides.each(function (n, o) {
                        (e = i.slideWidth * n * -1),
                            !0 === i.options.rtl
                                ? t(o).css({ position: "relative", right: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 })
                                : t(o).css({ position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0 });
                    }),
                        i.$slides.eq(i.currentSlide).css({ zIndex: i.options.zIndex - 1, opacity: 1 });
                }),
                (e.prototype.setHeight = function () {
                    var t = this;
                    if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
                        var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
                        t.$list.css("height", e);
                    }
                }),
                (e.prototype.setOption = e.prototype.slickSetOption = function () {
                    var e,
                        i,
                        n,
                        o,
                        s,
                        r = this,
                        a = !1;
                    if (
                        ("object" === t.type(arguments[0])
                            ? ((n = arguments[0]), (a = arguments[1]), (s = "multiple"))
                            : "string" === t.type(arguments[0]) &&
                              ((n = arguments[0]), (o = arguments[1]), (a = arguments[2]), "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? (s = "responsive") : void 0 !== arguments[1] && (s = "single")),
                        "single" === s)
                    )
                        r.options[n] = o;
                    else if ("multiple" === s)
                        t.each(n, function (t, e) {
                            r.options[t] = e;
                        });
                    else if ("responsive" === s)
                        for (i in o)
                            if ("array" !== t.type(r.options.responsive)) r.options.responsive = [o[i]];
                            else {
                                for (e = r.options.responsive.length - 1; e >= 0; ) r.options.responsive[e].breakpoint === o[i].breakpoint && r.options.responsive.splice(e, 1), e--;
                                r.options.responsive.push(o[i]);
                            }
                    a && (r.unload(), r.reinit());
                }),
                (e.prototype.setPosition = function () {
                    var t = this;
                    t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t]);
                }),
                (e.prototype.setProps = function () {
                    var t = this,
                        e = document.body.style;
                    (t.positionProp = !0 === t.options.vertical ? "top" : "left"),
                        "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"),
                        (void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition) || (!0 === t.options.useCSS && (t.cssTransitions = !0)),
                        t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : (t.options.zIndex = t.defaults.zIndex)),
                        void 0 !== e.OTransform &&
                            ((t.animType = "OTransform"), (t.transformType = "-o-transform"), (t.transitionType = "OTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                        void 0 !== e.MozTransform &&
                            ((t.animType = "MozTransform"), (t.transformType = "-moz-transform"), (t.transitionType = "MozTransition"), void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
                        void 0 !== e.webkitTransform &&
                            ((t.animType = "webkitTransform"), (t.transformType = "-webkit-transform"), (t.transitionType = "webkitTransition"), void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
                        void 0 !== e.msTransform && ((t.animType = "msTransform"), (t.transformType = "-ms-transform"), (t.transitionType = "msTransition"), void 0 === e.msTransform && (t.animType = !1)),
                        void 0 !== e.transform && !1 !== t.animType && ((t.animType = "transform"), (t.transformType = "transform"), (t.transitionType = "transition")),
                        (t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType);
                }),
                (e.prototype.setSlideClasses = function (t) {
                    var e,
                        i,
                        n,
                        o,
                        s = this;
                    if (((i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true")), s.$slides.eq(t).addClass("slick-current"), !0 === s.options.centerMode)) {
                        var r = s.options.slidesToShow % 2 == 0 ? 1 : 0;
                        (e = Math.floor(s.options.slidesToShow / 2)),
                            !0 === s.options.infinite &&
                                (t >= e && t <= s.slideCount - 1 - e
                                    ? s.$slides
                                          .slice(t - e + r, t + e + 1)
                                          .addClass("slick-active")
                                          .attr("aria-hidden", "false")
                                    : ((n = s.options.slidesToShow + t),
                                      i
                                          .slice(n - e + 1 + r, n + e + 2)
                                          .addClass("slick-active")
                                          .attr("aria-hidden", "false")),
                                0 === t ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : t === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")),
                            s.$slides.eq(t).addClass("slick-center");
                    } else
                        t >= 0 && t <= s.slideCount - s.options.slidesToShow
                            ? s.$slides
                                  .slice(t, t + s.options.slidesToShow)
                                  .addClass("slick-active")
                                  .attr("aria-hidden", "false")
                            : i.length <= s.options.slidesToShow
                            ? i.addClass("slick-active").attr("aria-hidden", "false")
                            : ((o = s.slideCount % s.options.slidesToShow),
                              (n = !0 === s.options.infinite ? s.options.slidesToShow + t : t),
                              s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - t < s.options.slidesToShow
                                  ? i
                                        .slice(n - (s.options.slidesToShow - o), n + o)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false")
                                  : i
                                        .slice(n, n + s.options.slidesToShow)
                                        .addClass("slick-active")
                                        .attr("aria-hidden", "false"));
                    ("ondemand" !== s.options.lazyLoad && "anticipated" !== s.options.lazyLoad) || s.lazyLoad();
                }),
                (e.prototype.setupInfinite = function () {
                    var e,
                        i,
                        n,
                        o = this;
                    if ((!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && ((i = null), o.slideCount > o.options.slidesToShow))) {
                        for (n = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - n; e -= 1)
                            (i = e - 1),
                                t(o.$slides[i])
                                    .clone(!0)
                                    .attr("id", "")
                                    .attr("data-slick-index", i - o.slideCount)
                                    .prependTo(o.$slideTrack)
                                    .addClass("slick-cloned");
                        for (e = 0; e < n + o.slideCount; e += 1)
                            (i = e),
                                t(o.$slides[i])
                                    .clone(!0)
                                    .attr("id", "")
                                    .attr("data-slick-index", i + o.slideCount)
                                    .appendTo(o.$slideTrack)
                                    .addClass("slick-cloned");
                        o.$slideTrack
                            .find(".slick-cloned")
                            .find("[id]")
                            .each(function () {
                                t(this).attr("id", "");
                            });
                    }
                }),
                (e.prototype.interrupt = function (t) {
                    t || this.autoPlay(), (this.interrupted = t);
                }),
                (e.prototype.selectHandler = function (e) {
                    var i = this,
                        n = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
                        o = parseInt(n.attr("data-slick-index"));
                    o || (o = 0), i.slideCount <= i.options.slidesToShow ? i.slideHandler(o, !1, !0) : i.slideHandler(o);
                }),
                (e.prototype.slideHandler = function (t, e, i) {
                    var n,
                        o,
                        s,
                        r,
                        a,
                        l,
                        c = this;
                    if (((e = e || !1), !((!0 === c.animating && !0 === c.options.waitForAnimate) || (!0 === c.options.fade && c.currentSlide === t))))
                        if (
                            (!1 === e && c.asNavFor(t),
                            (n = t),
                            (a = c.getLeft(n)),
                            (r = c.getLeft(c.currentSlide)),
                            (c.currentLeft = null === c.swipeLeft ? r : c.swipeLeft),
                            !1 === c.options.infinite && !1 === c.options.centerMode && (t < 0 || t > c.getDotCount() * c.options.slidesToScroll))
                        )
                            !1 === c.options.fade &&
                                ((n = c.currentSlide),
                                !0 !== i && c.slideCount > c.options.slidesToShow
                                    ? c.animateSlide(r, function () {
                                          c.postSlide(n);
                                      })
                                    : c.postSlide(n));
                        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (t < 0 || t > c.slideCount - c.options.slidesToScroll))
                            !1 === c.options.fade &&
                                ((n = c.currentSlide),
                                !0 !== i && c.slideCount > c.options.slidesToShow
                                    ? c.animateSlide(r, function () {
                                          c.postSlide(n);
                                      })
                                    : c.postSlide(n));
                        else {
                            if (
                                (c.options.autoplay && clearInterval(c.autoPlayTimer),
                                (o =
                                    n < 0
                                        ? c.slideCount % c.options.slidesToScroll != 0
                                            ? c.slideCount - (c.slideCount % c.options.slidesToScroll)
                                            : c.slideCount + n
                                        : n >= c.slideCount
                                        ? c.slideCount % c.options.slidesToScroll != 0
                                            ? 0
                                            : n - c.slideCount
                                        : n),
                                (c.animating = !0),
                                c.$slider.trigger("beforeChange", [c, c.currentSlide, o]),
                                (s = c.currentSlide),
                                (c.currentSlide = o),
                                c.setSlideClasses(c.currentSlide),
                                c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide),
                                c.updateDots(),
                                c.updateArrows(),
                                !0 === c.options.fade)
                            )
                                return (
                                    !0 !== i
                                        ? (c.fadeSlideOut(s),
                                          c.fadeSlide(o, function () {
                                              c.postSlide(o);
                                          }))
                                        : c.postSlide(o),
                                    void c.animateHeight()
                                );
                            !0 !== i && c.slideCount > c.options.slidesToShow
                                ? c.animateSlide(a, function () {
                                      c.postSlide(o);
                                  })
                                : c.postSlide(o);
                        }
                }),
                (e.prototype.startLoad = function () {
                    var t = this;
                    !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()),
                        !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
                        t.$slider.addClass("slick-loading");
                }),
                (e.prototype.swipeDirection = function () {
                    var t,
                        e,
                        i,
                        n,
                        o = this;
                    return (
                        (t = o.touchObject.startX - o.touchObject.curX),
                        (e = o.touchObject.startY - o.touchObject.curY),
                        (i = Math.atan2(e, t)),
                        (n = Math.round((180 * i) / Math.PI)) < 0 && (n = 360 - Math.abs(n)),
                        n <= 45 && n >= 0
                            ? !1 === o.options.rtl
                                ? "left"
                                : "right"
                            : n <= 360 && n >= 315
                            ? !1 === o.options.rtl
                                ? "left"
                                : "right"
                            : n >= 135 && n <= 225
                            ? !1 === o.options.rtl
                                ? "right"
                                : "left"
                            : !0 === o.options.verticalSwiping
                            ? n >= 35 && n <= 135
                                ? "down"
                                : "up"
                            : "vertical"
                    );
                }),
                (e.prototype.swipeEnd = function (t) {
                    var e,
                        i,
                        n = this;
                    if (((n.dragging = !1), (n.swiping = !1), n.scrolling)) return (n.scrolling = !1), !1;
                    if (((n.interrupted = !1), (n.shouldClick = !(n.touchObject.swipeLength > 10)), void 0 === n.touchObject.curX)) return !1;
                    if ((!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe)) {
                        switch ((i = n.swipeDirection())) {
                            case "left":
                            case "down":
                                (e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount()), (n.currentDirection = 0);
                                break;
                            case "right":
                            case "up":
                                (e = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount()), (n.currentDirection = 1);
                        }
                        "vertical" != i && (n.slideHandler(e), (n.touchObject = {}), n.$slider.trigger("swipe", [n, i]));
                    } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), (n.touchObject = {}));
                }),
                (e.prototype.swipeHandler = function (t) {
                    var e = this;
                    if (!(!1 === e.options.swipe || ("ontouchend" in document && !1 === e.options.swipe) || (!1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))))
                        switch (
                            ((e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1),
                            (e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold),
                            !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
                            t.data.action)
                        ) {
                            case "start":
                                e.swipeStart(t);
                                break;
                            case "move":
                                e.swipeMove(t);
                                break;
                            case "end":
                                e.swipeEnd(t);
                        }
                }),
                (e.prototype.swipeMove = function (t) {
                    var e,
                        i,
                        n,
                        o,
                        s,
                        r,
                        a = this;
                    return (
                        (s = void 0 !== t.originalEvent ? t.originalEvent.touches : null),
                        !(!a.dragging || a.scrolling || (s && 1 !== s.length)) &&
                            ((e = a.getLeft(a.currentSlide)),
                            (a.touchObject.curX = void 0 !== s ? s[0].pageX : t.clientX),
                            (a.touchObject.curY = void 0 !== s ? s[0].pageY : t.clientY),
                            (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2)))),
                            (r = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))),
                            !a.options.verticalSwiping && !a.swiping && r > 4
                                ? ((a.scrolling = !0), !1)
                                : (!0 === a.options.verticalSwiping && (a.touchObject.swipeLength = r),
                                  (i = a.swipeDirection()),
                                  void 0 !== t.originalEvent && a.touchObject.swipeLength > 4 && ((a.swiping = !0), t.preventDefault()),
                                  (o = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1)),
                                  !0 === a.options.verticalSwiping && (o = a.touchObject.curY > a.touchObject.startY ? 1 : -1),
                                  (n = a.touchObject.swipeLength),
                                  (a.touchObject.edgeHit = !1),
                                  !1 === a.options.infinite &&
                                      ((0 === a.currentSlide && "right" === i) || (a.currentSlide >= a.getDotCount() && "left" === i)) &&
                                      ((n = a.touchObject.swipeLength * a.options.edgeFriction), (a.touchObject.edgeHit = !0)),
                                  !1 === a.options.vertical ? (a.swipeLeft = e + n * o) : (a.swipeLeft = e + n * (a.$list.height() / a.listWidth) * o),
                                  !0 === a.options.verticalSwiping && (a.swipeLeft = e + n * o),
                                  !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? ((a.swipeLeft = null), !1) : void a.setCSS(a.swipeLeft))))
                    );
                }),
                (e.prototype.swipeStart = function (t) {
                    var e,
                        i = this;
                    if (((i.interrupted = !0), 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow)) return (i.touchObject = {}), !1;
                    void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]),
                        (i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX),
                        (i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY),
                        (i.dragging = !0);
                }),
                (e.prototype.unfilterSlides = e.prototype.slickUnfilter = function () {
                    var t = this;
                    null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit());
                }),
                (e.prototype.unload = function () {
                    var e = this;
                    t(".slick-cloned", e.$slider).remove(),
                        e.$dots && e.$dots.remove(),
                        e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(),
                        e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(),
                        e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
                }),
                (e.prototype.unslick = function (t) {
                    var e = this;
                    e.$slider.trigger("unslick", [e, t]), e.destroy();
                }),
                (e.prototype.updateArrows = function () {
                    var t = this;
                    Math.floor(t.options.slidesToShow / 2),
                        !0 === t.options.arrows &&
                            t.slideCount > t.options.slidesToShow &&
                            !t.options.infinite &&
                            (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                            t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"),
                            0 === t.currentSlide
                                ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode
                                ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"))
                                : t.currentSlide >= t.slideCount - 1 &&
                                  !0 === t.options.centerMode &&
                                  (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
                }),
                (e.prototype.updateDots = function () {
                    var t = this;
                    null !== t.$dots &&
                        (t.$dots.find("li").removeClass("slick-active").end(),
                        t.$dots
                            .find("li")
                            .eq(Math.floor(t.currentSlide / t.options.slidesToScroll))
                            .addClass("slick-active"));
                }),
                (e.prototype.visibility = function () {
                    var t = this;
                    t.options.autoplay && (document[t.hidden] ? (t.interrupted = !0) : (t.interrupted = !1));
                }),
                (t.fn.slick = function () {
                    var t,
                        i,
                        n = this,
                        o = arguments[0],
                        s = Array.prototype.slice.call(arguments, 1),
                        r = n.length;
                    for (t = 0; t < r; t++) if (("object" == typeof o || void 0 === o ? (n[t].slick = new e(n[t], o)) : (i = n[t].slick[o].apply(n[t].slick, s)), void 0 !== i)) return i;
                    return n;
                });
        });
    },
    298: function (t, e, i) {
        "use strict";
        var n, o, s;
        (n = jQuery),
            (o = (function () {
                function t(t, e) {
                    var i;
                    (this.options = e),
                        (this.$element = n(t)),
                        (this.didInit = !1),
                        (i = this),
                        this.$element.on("click.slickLightbox", this.options.itemSelector, function (t) {
                            var e, o;
                            if ((t.preventDefault(), (e = n(this)).blur(), "function" != typeof i.options.shouldOpen || i.options.shouldOpen(i, e, t)))
                                return (o = i.filterOutSlickClones(i.$element.find(i.options.itemSelector))), i.init(o.index(e));
                        });
                }
                return (
                    (t.prototype.init = function (t) {
                        return (this.didInit = !0), this.detectIE(), this.createModal(), this.bindEvents(), this.initSlick(t), this.open();
                    }),
                    (t.prototype.createModalItems = function () {
                        var t, e, i, o, s, r, a;
                        return (
                            (o = this.options.lazyPlaceholder || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"),
                            (i = function (t, e, i) {
                                return (
                                    '<div class="slick-lightbox-slick-item">\n  <div class="slick-lightbox-slick-item-inner">\n    <img class="slick-lightbox-slick-img" ' +
                                    (!0 === i ? ' data-lazy="' + t + '" src="' + o + '" ' : ' src="' + t + '" ') +
                                    " />\n    " +
                                    e +
                                    "\n  </div>\n</div>"
                                );
                            }),
                            this.options.images
                                ? (r = n.map(this.options.images, function (t) {
                                      return i(t, this.options.lazy);
                                  }))
                                : ((t = this.filterOutSlickClones(this.$element.find(this.options.itemSelector))),
                                  (s = t.length),
                                  (a = this),
                                  (e = function (t, e) {
                                      var n, o, r;
                                      return (o = { index: e, length: s }), (n = a.getElementCaption(t, o)), (r = a.getElementSrc(t)), i(r, n, a.options.lazy);
                                  }),
                                  (r = n.map(t, e))),
                            r
                        );
                    }),
                    (t.prototype.createModal = function () {
                        var t, e;
                        return (
                            (e = this.createModalItems()),
                            (t =
                                '<div class="slick-lightbox slick-lightbox-hide-init' +
                                (this.isIE ? " slick-lightbox-ie" : "") +
                                '" style="background: ' +
                                this.options.background +
                                ';">\n  <div class="slick-lightbox-inner">\n    <div class="slick-lightbox-slick slick-caption-' +
                                this.options.captionPosition +
                                '">' +
                                e.join("") +
                                "</div>\n  <div>\n<div>"),
                            (this.$modalElement = n(t)),
                            (this.$parts = {}),
                            (this.$parts.closeButton = n(this.options.layouts.closeButton)),
                            this.$modalElement.find(".slick-lightbox-inner").append(this.$parts.closeButton),
                            n("body").append(this.$modalElement)
                        );
                    }),
                    (t.prototype.initSlick = function (t) {
                        var e;
                        return (
                            (e = { initialSlide: t }),
                            this.options.lazy && (e.lazyLoad = "ondemand"),
                            null != this.options.slick
                                ? "function" == typeof this.options.slick
                                    ? (this.slick = this.options.slick(this.$modalElement))
                                    : (this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(n.extend({}, this.options.slick, e)))
                                : (this.slick = this.$modalElement.find(".slick-lightbox-slick").slick(e)),
                            this.$modalElement.trigger("init.slickLightbox")
                        );
                    }),
                    (t.prototype.open = function () {
                        var t;
                        return (
                            this.options.useHistoryApi && this.writeHistory(),
                            this.$element.trigger("show.slickLightbox"),
                            setTimeout(
                                ((t = this),
                                function () {
                                    return t.$element.trigger("shown.slickLightbox");
                                }),
                                this.getTransitionDuration()
                            ),
                            this.$modalElement.removeClass("slick-lightbox-hide-init")
                        );
                    }),
                    (t.prototype.close = function () {
                        var t;
                        return (
                            this.$element.trigger("hide.slickLightbox"),
                            setTimeout(
                                ((t = this),
                                function () {
                                    return t.$element.trigger("hidden.slickLightbox");
                                }),
                                this.getTransitionDuration()
                            ),
                            this.$modalElement.addClass("slick-lightbox-hide"),
                            this.destroy()
                        );
                    }),
                    (t.prototype.bindEvents = function () {
                        var t, e;
                        if (
                            ((e = this),
                            (t = function () {
                                var t;
                                return (
                                    (t = e.$modalElement.find(".slick-lightbox-inner").height()),
                                    e.$modalElement.find(".slick-lightbox-slick-item").height(t),
                                    e.$modalElement.find(".slick-lightbox-slick-img, .slick-lightbox-slick-item-inner").css("max-height", Math.round(e.options.imageMaxHeight * t))
                                );
                            }),
                            n(window).on("orientationchange.slickLightbox resize.slickLightbox", t),
                            this.options.useHistoryApi &&
                                n(window).on(
                                    "popstate.slickLightbox",
                                    (function (t) {
                                        return function () {
                                            return t.close();
                                        };
                                    })(this)
                                ),
                            this.$modalElement.on("init.slickLightbox", t),
                            this.$modalElement.on(
                                "destroy.slickLightbox",
                                (function (t) {
                                    return function () {
                                        return t.destroy();
                                    };
                                })(this)
                            ),
                            this.$element.on(
                                "destroy.slickLightbox",
                                (function (t) {
                                    return function () {
                                        return t.destroy(!0);
                                    };
                                })(this)
                            ),
                            this.$parts.closeButton.on(
                                "click.slickLightbox touchstart.slickLightbox",
                                (function (t) {
                                    return function (e) {
                                        return e.preventDefault(), t.close();
                                    };
                                })(this)
                            ),
                            (this.options.closeOnEscape || this.options.navigateByKeyboard) &&
                                n(document).on(
                                    "keydown.slickLightbox",
                                    (function (t) {
                                        return function (e) {
                                            var i;
                                            if (((i = e.keyCode ? e.keyCode : e.which), t.options.navigateByKeyboard && (37 === i ? t.slideSlick("left") : 39 === i && t.slideSlick("right")), t.options.closeOnEscape && 27 === i))
                                                return t.close();
                                        };
                                    })(this)
                                ),
                            this.options.closeOnBackdropClick)
                        )
                            return (
                                this.$modalElement.on("click.slickLightbox touchstart.slickLightbox", ".slick-lightbox-slick-img", function (t) {
                                    return t.stopPropagation();
                                }),
                                this.$modalElement.on(
                                    "click.slickLightbox",
                                    ".slick-lightbox-slick-item",
                                    (function (t) {
                                        return function (e) {
                                            return e.preventDefault(), t.close();
                                        };
                                    })(this)
                                )
                            );
                    }),
                    (t.prototype.slideSlick = function (t) {
                        return "left" === t ? this.slick.slick("slickPrev") : this.slick.slick("slickNext");
                    }),
                    (t.prototype.detectIE = function () {
                        if (((this.isIE = !1), /MSIE (\d+\.\d+);/.test(navigator.userAgent) && new Number(RegExp.$1) < 9)) return (this.isIE = !0);
                    }),
                    (t.prototype.getElementCaption = function (t, e) {
                        return this.options.caption
                            ? '<span class="slick-lightbox-slick-caption">' +
                                  function () {
                                      switch (typeof this.options.caption) {
                                          case "function":
                                              return this.options.caption(t, e);
                                          case "string":
                                              return n(t).data(this.options.caption);
                                      }
                                  }.call(this) +
                                  "</span>"
                            : "";
                    }),
                    (t.prototype.getElementSrc = function (t) {
                        switch (typeof this.options.src) {
                            case "function":
                                return this.options.src(t);
                            case "string":
                                return n(t).attr(this.options.src);
                            default:
                                return t.href;
                        }
                    }),
                    (t.prototype.unbindEvents = function () {
                        return n(window).off(".slickLightbox"), n(document).off(".slickLightbox"), this.$modalElement.off(".slickLightbox");
                    }),
                    (t.prototype.destroy = function (t) {
                        var e;
                        if (
                            (null == t && (t = !1),
                            this.didInit &&
                                (this.unbindEvents(),
                                setTimeout(
                                    ((e = this),
                                    function () {
                                        return e.$modalElement.remove();
                                    }),
                                    this.options.destroyTimeout
                                )),
                            t)
                        )
                            return this.$element.off(".slickLightbox"), this.$element.off(".slickLightbox", this.options.itemSelector);
                    }),
                    (t.prototype.destroyPrevious = function () {
                        return n("body").children(".slick-lightbox").trigger("destroy.slickLightbox");
                    }),
                    (t.prototype.getTransitionDuration = function () {
                        var t;
                        return this.transitionDuration
                            ? this.transitionDuration
                            : ((t = this.$modalElement.css("transition-duration")), (this.transitionDuration = void 0 === t ? 500 : t.indexOf("ms") > -1 ? parseFloat(t) : 1e3 * parseFloat(t)));
                    }),
                    (t.prototype.writeHistory = function () {
                        return "undefined" != typeof history && null !== history && "function" == typeof history.pushState ? history.pushState(null, null, "") : void 0;
                    }),
                    (t.prototype.filterOutSlickClones = function (t) {
                        return this.$element.hasClass("slick-slider")
                            ? t.filter(function () {
                                  var t;
                                  return !(t = n(this)).hasClass("slick-cloned") && 0 === t.parents(".slick-cloned").length;
                              })
                            : t;
                    }),
                    t
                );
            })()),
            (s = {
                background: "rgba(0,0,0,.8)",
                closeOnEscape: !0,
                closeOnBackdropClick: !0,
                destroyTimeout: 500,
                itemSelector: "a",
                navigateByKeyboard: !0,
                src: !1,
                caption: !1,
                captionPosition: "dynamic",
                images: !1,
                slick: {},
                useHistoryApi: !1,
                layouts: { closeButton: '<button type="button" class="slick-lightbox-close"></button>' },
                shouldOpen: null,
                imageMaxHeight: 0.9,
                lazy: !1,
            }),
            (n.fn.slickLightbox = function (t) {
                return (
                    (t = n.extend({}, s, t)),
                    n(this).each(function () {
                        return (this.slickLightbox = new o(this, t));
                    }),
                    this
                );
            }),
            (n.fn.unslickLightbox = function () {
                return n(this)
                    .trigger("destroy.slickLightbox")
                    .each(function () {
                        return (this.slickLightbox = null);
                    });
            });
    },
    299: function (e, i) {
        var n;
        (n = jQuery).fn.extend({
            slimScroll: function (e) {
                var i = n.extend(
                    {
                        width: "auto",
                        height: "250px",
                        size: "7px",
                        color: "#000",
                        position: "right",
                        distance: "1px",
                        start: "top",
                        opacity: 0.4,
                        alwaysVisible: !1,
                        disableFadeOut: !1,
                        railVisible: !1,
                        railColor: "#333",
                        railOpacity: 0.2,
                        railDraggable: !0,
                        railClass: "slimScrollRail",
                        barClass: "slimScrollBar",
                        wrapperClass: "slimScrollDiv",
                        allowPageScroll: !1,
                        wheelStep: 20,
                        touchScrollStep: 200,
                        borderRadius: "7px",
                        railBorderRadius: "7px",
                    },
                    e
                );
                return (
                    this.each(function () {
                        var o,
                            s,
                            r,
                            a,
                            l,
                            c,
                            u,
                            d,
                            p = "<div></div>",
                            h = 30,
                            f = !1,
                            g = n(this);
                        if (g.parent().hasClass(i.wrapperClass)) {
                            var v = g.scrollTop();
                            if (((C = g.siblings("." + i.barClass)), (x = g.siblings("." + i.railClass)), T(), n.isPlainObject(e))) {
                                if ("height" in e && "auto" == e.height) {
                                    g.parent().css("height", "auto"), g.css("height", "auto");
                                    var m = g.parent().parent().height();
                                    g.parent().css("height", m), g.css("height", m);
                                } else if ("height" in e) {
                                    var y = e.height;
                                    g.parent().css("height", y), g.css("height", y);
                                }
                                if ("scrollTo" in e) v = parseInt(i.scrollTo);
                                else if ("scrollBy" in e) v += parseInt(i.scrollBy);
                                else if ("destroy" in e) return C.remove(), x.remove(), void g.unwrap();
                                $(v, !1, !0);
                            }
                        } else if (!(n.isPlainObject(e) && "destroy" in e)) {
                            i.height = "auto" == i.height ? g.parent().height() : i.height;
                            var b = n(p).addClass(i.wrapperClass).css({ position: "relative", overflow: "hidden", width: i.width, height: i.height });
                            g.css({ overflow: "hidden", width: i.width, height: i.height });
                            var w,
                                x = n(p)
                                    .addClass(i.railClass)
                                    .css({
                                        width: i.size,
                                        height: "100%",
                                        position: "absolute",
                                        top: 0,
                                        display: i.alwaysVisible && i.railVisible ? "block" : "none",
                                        "border-radius": i.railBorderRadius,
                                        background: i.railColor,
                                        opacity: i.railOpacity,
                                        zIndex: 90,
                                    }),
                                C = n(p)
                                    .addClass(i.barClass)
                                    .css({
                                        background: i.color,
                                        width: i.size,
                                        position: "absolute",
                                        top: 0,
                                        opacity: i.opacity,
                                        display: i.alwaysVisible ? "block" : "none",
                                        "border-radius": i.borderRadius,
                                        BorderRadius: i.borderRadius,
                                        MozBorderRadius: i.borderRadius,
                                        WebkitBorderRadius: i.borderRadius,
                                        zIndex: 99,
                                    }),
                                k = "right" == i.position ? { right: i.distance } : { left: i.distance };
                            x.css(k),
                                C.css(k),
                                g.wrap(b),
                                g.parent().append(C),
                                g.parent().append(x),
                                i.railDraggable &&
                                    C.bind("mousedown", function (e) {
                                        var i = n(document);
                                        return (
                                            (r = !0),
                                            (t = parseFloat(C.css("top"))),
                                            (pageY = e.pageY),
                                            i.bind("mousemove.slimscroll", function (e) {
                                                (currTop = t + e.pageY - pageY), C.css("top", currTop), $(0, C.position().top, !1);
                                            }),
                                            i.bind("mouseup.slimscroll", function (t) {
                                                (r = !1), O(), i.unbind(".slimscroll");
                                            }),
                                            !1
                                        );
                                    }).bind("selectstart.slimscroll", function (t) {
                                        return t.stopPropagation(), t.preventDefault(), !1;
                                    }),
                                x.hover(
                                    function () {
                                        E();
                                    },
                                    function () {
                                        O();
                                    }
                                ),
                                C.hover(
                                    function () {
                                        s = !0;
                                    },
                                    function () {
                                        s = !1;
                                    }
                                ),
                                g.hover(
                                    function () {
                                        (o = !0), E(), O();
                                    },
                                    function () {
                                        (o = !1), O();
                                    }
                                ),
                                g.bind("touchstart", function (t, e) {
                                    t.originalEvent.touches.length && (l = t.originalEvent.touches[0].pageY);
                                }),
                                g.bind("touchmove", function (t) {
                                    f || t.originalEvent.preventDefault(), t.originalEvent.touches.length && ($((l - t.originalEvent.touches[0].pageY) / i.touchScrollStep, !0), (l = t.originalEvent.touches[0].pageY));
                                }),
                                T(),
                                "bottom" === i.start ? (C.css({ top: g.outerHeight() - C.outerHeight() }), $(0, !0)) : "top" !== i.start && ($(n(i.start).position().top, null, !0), i.alwaysVisible || C.hide()),
                                (w = this),
                                window.addEventListener ? (w.addEventListener("DOMMouseScroll", S, !1), w.addEventListener("mousewheel", S, !1)) : document.attachEvent("onmousewheel", S);
                        }
                        function S(t) {
                            if (o) {
                                var e = 0;
                                (t = t || window.event).wheelDelta && (e = -t.wheelDelta / 120), t.detail && (e = t.detail / 3);
                                var s = t.target || t.srcTarget || t.srcElement;
                                n(s)
                                    .closest("." + i.wrapperClass)
                                    .is(g.parent()) && $(e, !0),
                                    t.preventDefault && !f && t.preventDefault(),
                                    f || (t.returnValue = !1);
                            }
                        }
                        function $(t, e, n) {
                            f = !1;
                            var o = t,
                                s = g.outerHeight() - C.outerHeight();
                            if (
                                (e && ((o = parseInt(C.css("top")) + ((t * parseInt(i.wheelStep)) / 100) * C.outerHeight()), (o = Math.min(Math.max(o, 0), s)), (o = t > 0 ? Math.ceil(o) : Math.floor(o)), C.css({ top: o + "px" })),
                                (o = (u = parseInt(C.css("top")) / (g.outerHeight() - C.outerHeight())) * (g[0].scrollHeight - g.outerHeight())),
                                n)
                            ) {
                                var r = ((o = t) / g[0].scrollHeight) * g.outerHeight();
                                (r = Math.min(Math.max(r, 0), s)), C.css({ top: r + "px" });
                            }
                            g.scrollTop(o), g.trigger("slimscrolling", ~~o), E(), O();
                        }
                        function T() {
                            (c = Math.max((g.outerHeight() / g[0].scrollHeight) * g.outerHeight(), h)), C.css({ height: c + "px" });
                            var t = c == g.outerHeight() ? "none" : "block";
                            C.css({ display: t });
                        }
                        function E() {
                            if ((T(), clearTimeout(a), u == ~~u)) {
                                if (((f = i.allowPageScroll), d != u)) {
                                    var t = 0 == ~~u ? "top" : "bottom";
                                    g.trigger("slimscroll", t);
                                }
                            } else f = !1;
                            (d = u), c >= g.outerHeight() ? (f = !0) : (C.stop(!0, !0).fadeIn("fast"), i.railVisible && x.stop(!0, !0).fadeIn("fast"));
                        }
                        function O() {
                            i.alwaysVisible ||
                                (a = setTimeout(function () {
                                    (i.disableFadeOut && o) || s || r || (C.fadeOut("slow"), x.fadeOut("slow"));
                                }, 1e3));
                        }
                    }),
                    this
                );
            },
        }),
            n.fn.extend({ slimscroll: n.fn.slimScroll });
    },
    300: function (t, e, i) {
        var n, o, s;
        !(function (r) {
            "use strict";
            (o = [i(10)]), void 0 === (s = "function" == typeof (n = r) ? n.apply(e, o) : n) || (t.exports = s);
        })(function (t) {
            "use strict";
            var e = {
                    escapeRegExChars: function (t) {
                        return t.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
                    },
                    createNode: function (t) {
                        var e = document.createElement("div");
                        return (e.className = t), (e.style.position = "absolute"), (e.style.display = "none"), e;
                    },
                },
                i = 27,
                n = 9,
                o = 13,
                s = 38,
                r = 39,
                a = 40,
                l = t.noop;
            function c(e, i) {
                (this.element = e),
                    (this.el = t(e)),
                    (this.suggestions = []),
                    (this.badQueries = []),
                    (this.selectedIndex = -1),
                    (this.currentValue = this.element.value),
                    (this.timeoutId = null),
                    (this.cachedResponse = {}),
                    (this.onChangeTimeout = null),
                    (this.onChange = null),
                    (this.isLocal = !1),
                    (this.suggestionsContainer = null),
                    (this.noSuggestionsContainer = null),
                    (this.options = t.extend(!0, {}, c.defaults, i)),
                    (this.classes = { selected: "autocomplete-selected", suggestion: "autocomplete-suggestion" }),
                    (this.hint = null),
                    (this.hintValue = ""),
                    (this.selection = null),
                    this.initialize(),
                    this.setOptions(i);
            }
            (c.utils = e),
                (t.Autocomplete = c),
                (c.defaults = {
                    ajaxSettings: {},
                    autoSelectFirst: !1,
                    appendTo: "body",
                    serviceUrl: null,
                    lookup: null,
                    onSelect: null,
                    width: "auto",
                    minChars: 1,
                    maxHeight: 300,
                    deferRequestBy: 0,
                    params: {},
                    formatResult: function (t, i) {
                        if (!i) return t.value;
                        var n = "(" + e.escapeRegExChars(i) + ")";
                        return t.value
                            .replace(new RegExp(n, "gi"), "<strong>$1</strong>")
                            .replace(/&/g, "&amp;")
                            .replace(/</g, "&lt;")
                            .replace(/>/g, "&gt;")
                            .replace(/"/g, "&quot;")
                            .replace(/&lt;(\/?strong)&gt;/g, "<$1>");
                    },
                    formatGroup: function (t, e) {
                        return '<div class="autocomplete-group">' + e + "</div>";
                    },
                    delimiter: null,
                    zIndex: 9999,
                    type: "GET",
                    noCache: !1,
                    onSearchStart: l,
                    onSearchComplete: l,
                    onSearchError: l,
                    preserveInput: !1,
                    containerClass: "autocomplete-suggestions",
                    tabDisabled: !1,
                    dataType: "text",
                    currentRequest: null,
                    triggerSelectOnValidInput: !0,
                    preventBadQueries: !0,
                    lookupFilter: function (t, e, i) {
                        return -1 !== t.value.toLowerCase().indexOf(i);
                    },
                    paramName: "query",
                    transformResult: function (e) {
                        return "string" == typeof e ? t.parseJSON(e) : e;
                    },
                    showNoSuggestionNotice: !1,
                    noSuggestionNotice: "No results",
                    orientation: "bottom",
                    forceFixPosition: !1,
                }),
                (c.prototype = {
                    initialize: function () {
                        var e,
                            i = this,
                            n = "." + i.classes.suggestion,
                            o = i.classes.selected,
                            s = i.options;
                        i.element.setAttribute("autocomplete", "off"),
                            (i.noSuggestionsContainer = t('<div class="autocomplete-no-suggestion"></div>').html(this.options.noSuggestionNotice).get(0)),
                            (i.suggestionsContainer = c.utils.createNode(s.containerClass)),
                            (e = t(i.suggestionsContainer)).appendTo(s.appendTo || "body"),
                            "auto" !== s.width && e.css("width", s.width),
                            e.on("mouseover.autocomplete", n, function () {
                                i.activate(t(this).data("index"));
                            }),
                            e.on("mouseout.autocomplete", function () {
                                (i.selectedIndex = -1), e.children("." + o).removeClass(o);
                            }),
                            e.on("click.autocomplete", n, function () {
                                i.select(t(this).data("index"));
                            }),
                            e.on("click.autocomplete", function () {
                                clearTimeout(i.blurTimeoutId);
                            }),
                            (i.fixPositionCapture = function () {
                                i.visible && i.fixPosition();
                            }),
                            t(window).on("resize.autocomplete", i.fixPositionCapture),
                            i.el.on("keydown.autocomplete", function (t) {
                                i.onKeyPress(t);
                            }),
                            i.el.on("keyup.autocomplete", function (t) {
                                i.onKeyUp(t);
                            }),
                            i.el.on("blur.autocomplete", function () {
                                i.onBlur();
                            }),
                            i.el.on("focus.autocomplete", function () {
                                i.onFocus();
                            }),
                            i.el.on("change.autocomplete", function (t) {
                                i.onKeyUp(t);
                            }),
                            i.el.on("input.autocomplete", function (t) {
                                i.onKeyUp(t);
                            });
                    },
                    onFocus: function () {
                        this.fixPosition(), this.el.val().length >= this.options.minChars && this.onValueChange();
                    },
                    onBlur: function () {
                        var t = this;
                        t.blurTimeoutId = setTimeout(function () {
                            t.hide();
                        }, 200);
                    },
                    abortAjax: function () {
                        this.currentRequest && (this.currentRequest.abort(), (this.currentRequest = null));
                    },
                    setOptions: function (e) {
                        var i = t.extend({}, this.options, e);
                        (this.isLocal = Array.isArray(i.lookup)),
                            this.isLocal && (i.lookup = this.verifySuggestionsFormat(i.lookup)),
                            (i.orientation = this.validateOrientation(i.orientation, "bottom")),
                            t(this.suggestionsContainer).css({ "max-height": i.maxHeight + "px", width: i.width + "px", "z-index": i.zIndex }),
                            (this.options = i);
                    },
                    clearCache: function () {
                        (this.cachedResponse = {}), (this.badQueries = []);
                    },
                    clear: function () {
                        this.clearCache(), (this.currentValue = ""), (this.suggestions = []);
                    },
                    disable: function () {
                        (this.disabled = !0), clearTimeout(this.onChangeTimeout), this.abortAjax();
                    },
                    enable: function () {
                        this.disabled = !1;
                    },
                    fixPosition: function () {
                        var e = t(this.suggestionsContainer),
                            i = e.parent().get(0);
                        if (i === document.body || this.options.forceFixPosition) {
                            var n = this.options.orientation,
                                o = e.outerHeight(),
                                s = this.el.outerHeight(),
                                r = this.el.offset(),
                                a = { top: r.top, left: r.left };
                            if ("auto" === n) {
                                var l = t(window).height(),
                                    c = t(window).scrollTop(),
                                    u = -c + r.top - o,
                                    d = c + l - (r.top + s + o);
                                n = Math.max(u, d) === u ? "top" : "bottom";
                            }
                            if (((a.top += "top" === n ? -o : s), i !== document.body)) {
                                var p,
                                    h = e.css("opacity");
                                this.visible || e.css("opacity", 0).show(), (p = e.offsetParent().offset()), (a.top -= p.top), (a.top += i.scrollTop), (a.left -= p.left), this.visible || e.css("opacity", h).hide();
                            }
                            "auto" === this.options.width && (a.width = this.el.outerWidth() + "px"), e.css(a);
                        }
                    },
                    isCursorAtEnd: function () {
                        var t,
                            e = this.el.val().length,
                            i = this.element.selectionStart;
                        return "number" == typeof i ? i === e : !document.selection || ((t = document.selection.createRange()).moveStart("character", -e), e === t.text.length);
                    },
                    onKeyPress: function (t) {
                        if (this.disabled || this.visible || t.which !== a || !this.currentValue) {
                            if (!this.disabled && this.visible) {
                                switch (t.which) {
                                    case i:
                                        this.el.val(this.currentValue), this.hide();
                                        break;
                                    case r:
                                        if (this.hint && this.options.onHint && this.isCursorAtEnd()) {
                                            this.selectHint();
                                            break;
                                        }
                                        return;
                                    case n:
                                        if (this.hint && this.options.onHint) return void this.selectHint();
                                        if (-1 === this.selectedIndex) return void this.hide();
                                        if ((this.select(this.selectedIndex), !1 === this.options.tabDisabled)) return;
                                        break;
                                    case o:
                                        if (-1 === this.selectedIndex) return void this.hide();
                                        this.select(this.selectedIndex);
                                        break;
                                    case s:
                                        this.moveUp();
                                        break;
                                    case a:
                                        this.moveDown();
                                        break;
                                    default:
                                        return;
                                }
                                t.stopImmediatePropagation(), t.preventDefault();
                            }
                        } else this.suggest();
                    },
                    onKeyUp: function (t) {
                        var e = this;
                        if (!e.disabled) {
                            switch (t.which) {
                                case s:
                                case a:
                                    return;
                            }
                            clearTimeout(e.onChangeTimeout),
                                e.currentValue !== e.el.val() &&
                                    (e.findBestHint(),
                                    e.options.deferRequestBy > 0
                                        ? (e.onChangeTimeout = setTimeout(function () {
                                              e.onValueChange();
                                          }, e.options.deferRequestBy))
                                        : e.onValueChange());
                        }
                    },
                    onValueChange: function () {
                        if (this.ignoreValueChange) this.ignoreValueChange = !1;
                        else {
                            var e = this.options,
                                i = this.el.val(),
                                n = this.getQuery(i);
                            this.selection && this.currentValue !== n && ((this.selection = null), (e.onInvalidateSelection || t.noop).call(this.element)),
                                clearTimeout(this.onChangeTimeout),
                                (this.currentValue = i),
                                (this.selectedIndex = -1),
                                e.triggerSelectOnValidInput && this.isExactMatch(n) ? this.select(0) : n.length < e.minChars ? this.hide() : this.getSuggestions(n);
                        }
                    },
                    isExactMatch: function (t) {
                        var e = this.suggestions;
                        return 1 === e.length && e[0].value.toLowerCase() === t.toLowerCase();
                    },
                    getQuery: function (e) {
                        var i,
                            n = this.options.delimiter;
                        return n ? ((i = e.split(n)), t.trim(i[i.length - 1])) : e;
                    },
                    getSuggestionsLocal: function (e) {
                        var i,
                            n = this.options,
                            o = e.toLowerCase(),
                            s = n.lookupFilter,
                            r = parseInt(n.lookupLimit, 10);
                        return (
                            (i = {
                                suggestions: t.grep(n.lookup, function (t) {
                                    return s(t, e, o);
                                }),
                            }),
                            r && i.suggestions.length > r && (i.suggestions = i.suggestions.slice(0, r)),
                            i
                        );
                    },
                    getSuggestions: function (e) {
                        var i,
                            n,
                            o,
                            s,
                            r = this,
                            a = r.options,
                            l = a.serviceUrl;
                        (a.params[a.paramName] = e),
                            !1 !== a.onSearchStart.call(r.element, a.params) &&
                                ((n = a.ignoreParams ? null : a.params),
                                t.isFunction(a.lookup)
                                    ? a.lookup(e, function (t) {
                                          (r.suggestions = t.suggestions), r.suggest(), a.onSearchComplete.call(r.element, e, t.suggestions);
                                      })
                                    : (r.isLocal ? (i = r.getSuggestionsLocal(e)) : (t.isFunction(l) && (l = l.call(r.element, e)), (o = l + "?" + t.param(n || {})), (i = r.cachedResponse[o])),
                                      i && Array.isArray(i.suggestions)
                                          ? ((r.suggestions = i.suggestions), r.suggest(), a.onSearchComplete.call(r.element, e, i.suggestions))
                                          : r.isBadQuery(e)
                                          ? a.onSearchComplete.call(r.element, e, [])
                                          : (r.abortAjax(),
                                            (s = { url: l, data: n, type: a.type, dataType: a.dataType }),
                                            t.extend(s, a.ajaxSettings),
                                            (r.currentRequest = t
                                                .ajax(s)
                                                .done(function (t) {
                                                    var i;
                                                    (r.currentRequest = null), (i = a.transformResult(t, e)), r.processResponse(i, e, o), a.onSearchComplete.call(r.element, e, i.suggestions);
                                                })
                                                .fail(function (t, i, n) {
                                                    a.onSearchError.call(r.element, e, t, i, n);
                                                })))));
                    },
                    isBadQuery: function (t) {
                        if (!this.options.preventBadQueries) return !1;
                        for (var e = this.badQueries, i = e.length; i--; ) if (0 === t.indexOf(e[i])) return !0;
                        return !1;
                    },
                    hide: function () {
                        var e = t(this.suggestionsContainer);
                        t.isFunction(this.options.onHide) && this.visible && this.options.onHide.call(this.element, e),
                            (this.visible = !1),
                            (this.selectedIndex = -1),
                            clearTimeout(this.onChangeTimeout),
                            t(this.suggestionsContainer).hide(),
                            this.signalHint(null);
                    },
                    suggest: function () {
                        if (this.suggestions.length) {
                            var e,
                                i = this.options,
                                n = i.groupBy,
                                o = i.formatResult,
                                s = this.getQuery(this.currentValue),
                                r = this.classes.suggestion,
                                a = this.classes.selected,
                                l = t(this.suggestionsContainer),
                                c = t(this.noSuggestionsContainer),
                                u = i.beforeRender,
                                d = "";
                            i.triggerSelectOnValidInput && this.isExactMatch(s)
                                ? this.select(0)
                                : (t.each(this.suggestions, function (t, a) {
                                      n &&
                                          (d += (function (t, o) {
                                              var s = t.data[n];
                                              return e === s ? "" : ((e = s), i.formatGroup(t, e));
                                          })(a, 0)),
                                          (d += '<div class="' + r + '" data-index="' + t + '">' + o(a, s, t) + "</div>");
                                  }),
                                  this.adjustContainerWidth(),
                                  c.detach(),
                                  l.html(d),
                                  t.isFunction(u) && u.call(this.element, l, this.suggestions),
                                  this.fixPosition(),
                                  l.show(),
                                  i.autoSelectFirst &&
                                      ((this.selectedIndex = 0),
                                      l.scrollTop(0),
                                      l
                                          .children("." + r)
                                          .first()
                                          .addClass(a)),
                                  (this.visible = !0),
                                  this.findBestHint());
                        } else this.options.showNoSuggestionNotice ? this.noSuggestions() : this.hide();
                    },
                    noSuggestions: function () {
                        var e = this.options.beforeRender,
                            i = t(this.suggestionsContainer),
                            n = t(this.noSuggestionsContainer);
                        this.adjustContainerWidth(), n.detach(), i.empty(), i.append(n), t.isFunction(e) && e.call(this.element, i, this.suggestions), this.fixPosition(), i.show(), (this.visible = !0);
                    },
                    adjustContainerWidth: function () {
                        var e,
                            i = this.options,
                            n = t(this.suggestionsContainer);
                        "auto" === i.width ? ((e = this.el.outerWidth()), n.css("width", e > 0 ? e : 300)) : "flex" === i.width && n.css("width", "");
                    },
                    findBestHint: function () {
                        var e = this.el.val().toLowerCase(),
                            i = null;
                        e &&
                            (t.each(this.suggestions, function (t, n) {
                                var o = 0 === n.value.toLowerCase().indexOf(e);
                                return o && (i = n), !o;
                            }),
                            this.signalHint(i));
                    },
                    signalHint: function (e) {
                        var i = "";
                        e && (i = this.currentValue + e.value.substr(this.currentValue.length)), this.hintValue !== i && ((this.hintValue = i), (this.hint = e), (this.options.onHint || t.noop)(i));
                    },
                    verifySuggestionsFormat: function (e) {
                        return e.length && "string" == typeof e[0]
                            ? t.map(e, function (t) {
                                  return { value: t, data: null };
                              })
                            : e;
                    },
                    validateOrientation: function (e, i) {
                        return (e = t.trim(e || "").toLowerCase()), -1 === t.inArray(e, ["auto", "bottom", "top"]) && (e = i), e;
                    },
                    processResponse: function (t, e, i) {
                        var n = this.options;
                        (t.suggestions = this.verifySuggestionsFormat(t.suggestions)),
                            n.noCache || ((this.cachedResponse[i] = t), n.preventBadQueries && !t.suggestions.length && this.badQueries.push(e)),
                            e === this.getQuery(this.currentValue) && ((this.suggestions = t.suggestions), this.suggest());
                    },
                    activate: function (e) {
                        var i,
                            n = this.classes.selected,
                            o = t(this.suggestionsContainer),
                            s = o.find("." + this.classes.suggestion);
                        return o.find("." + n).removeClass(n), (this.selectedIndex = e), -1 !== this.selectedIndex && s.length > this.selectedIndex ? ((i = s.get(this.selectedIndex)), t(i).addClass(n), i) : null;
                    },
                    selectHint: function () {
                        var e = t.inArray(this.hint, this.suggestions);
                        this.select(e);
                    },
                    select: function (t) {
                        this.hide(), this.onSelect(t);
                    },
                    moveUp: function () {
                        if (-1 !== this.selectedIndex)
                            return 0 === this.selectedIndex
                                ? (t(this.suggestionsContainer)
                                      .children("." + this.classes.suggestion)
                                      .first()
                                      .removeClass(this.classes.selected),
                                  (this.selectedIndex = -1),
                                  (this.ignoreValueChange = !1),
                                  this.el.val(this.currentValue),
                                  void this.findBestHint())
                                : void this.adjustScroll(this.selectedIndex - 1);
                    },
                    moveDown: function () {
                        this.selectedIndex !== this.suggestions.length - 1 && this.adjustScroll(this.selectedIndex + 1);
                    },
                    adjustScroll: function (e) {
                        var i = this.activate(e);
                        if (i) {
                            var n,
                                o,
                                s,
                                r = t(i).outerHeight();
                            (n = i.offsetTop),
                                (s = (o = t(this.suggestionsContainer).scrollTop()) + this.options.maxHeight - r),
                                n < o ? t(this.suggestionsContainer).scrollTop(n) : n > s && t(this.suggestionsContainer).scrollTop(n - this.options.maxHeight + r),
                                this.options.preserveInput || ((this.ignoreValueChange = !0), this.el.val(this.getValue(this.suggestions[e].value))),
                                this.signalHint(null);
                        }
                    },
                    onSelect: function (e) {
                        var i = this.options.onSelect,
                            n = this.suggestions[e];
                        (this.currentValue = this.getValue(n.value)),
                            this.currentValue === this.el.val() || this.options.preserveInput || this.el.val(this.currentValue),
                            this.signalHint(null),
                            (this.suggestions = []),
                            (this.selection = n),
                            t.isFunction(i) && i.call(this.element, n);
                    },
                    getValue: function (t) {
                        var e,
                            i,
                            n = this.options.delimiter;
                        return n ? (1 === (i = (e = this.currentValue).split(n)).length ? t : e.substr(0, e.length - i[i.length - 1].length) + t) : t;
                    },
                    dispose: function () {
                        this.el.off(".autocomplete").removeData("autocomplete"), t(window).off("resize.autocomplete", this.fixPositionCapture), t(this.suggestionsContainer).remove();
                    },
                }),
                (t.fn.devbridgeAutocomplete = function (e, i) {
                    return arguments.length
                        ? this.each(function () {
                              var n = t(this),
                                  o = n.data("autocomplete");
                              "string" == typeof e ? o && "function" == typeof o[e] && o[e](i) : (o && o.dispose && o.dispose(), (o = new c(this, e)), n.data("autocomplete", o));
                          })
                        : this.first().data("autocomplete");
                }),
                t.fn.autocomplete || (t.fn.autocomplete = t.fn.devbridgeAutocomplete);
        });
    },
    301: function (t, e, i) {
        var n, o, s, r;
        (r = function (t, e, i) {
            "use strict";
            var n = function (t, e) {
                if ("string" != typeof e || e.length) {
                    var i = "string" == typeof e ? new RegExp(e, "i") : e,
                        n = function (t) {
                            var e = 0;
                            if (3 === t.nodeType) {
                                var o = t.data.search(i);
                                if (o >= 0 && t.data.length > 0) {
                                    var s = t.data.match(i),
                                        r = document.createElement("span");
                                    r.className = "highlight";
                                    var a = t.splitText(o),
                                        l = (a.splitText(s[0].length), a.cloneNode(!0));
                                    r.appendChild(l), a.parentNode.replaceChild(r, a), (e = 1);
                                }
                            } else if (1 === t.nodeType && t.childNodes && !/(script|style)/i.test(t.tagName) && ("highlight" !== t.className || "SPAN" !== t.tagName)) for (var c = 0; c < t.childNodes.length; ++c) c += n(t.childNodes[c]);
                            return e;
                        };
                    return t.each(function () {
                        n(this);
                    });
                }
            };
            t.fn.removeHighlight = function () {
                return this.find("span.highlight")
                    .each(function () {
                        this.parentNode.firstChild.nodeName;
                        var t = this.parentNode;
                        t.replaceChild(this.firstChild, this), t.normalize();
                    })
                    .end();
            };
            var o = function () {};
            (o.prototype = {
                on: function (t, e) {
                    (this._events = this._events || {}), (this._events[t] = this._events[t] || []), this._events[t].push(e);
                },
                off: function (t, e) {
                    var i = arguments.length;
                    return 0 === i ? delete this._events : 1 === i ? delete this._events[t] : ((this._events = this._events || {}), void (t in this._events != !1 && this._events[t].splice(this._events[t].indexOf(e), 1)));
                },
                trigger: function (t) {
                    if (((this._events = this._events || {}), t in this._events != !1)) for (var e = 0; e < this._events[t].length; e++) this._events[t][e].apply(this, Array.prototype.slice.call(arguments, 1));
                },
            }),
                (o.mixin = function (t) {
                    for (var e = ["on", "off", "trigger"], i = 0; i < e.length; i++) t.prototype[e[i]] = o.prototype[e[i]];
                });
            var s = /Mac/.test(navigator.userAgent),
                r = s ? 91 : 17,
                a = s ? 18 : 17,
                l = !/android/i.test(window.navigator.userAgent) && !!document.createElement("input").validity,
                c = function (t) {
                    return void 0 !== t;
                },
                u = function (t) {
                    return void 0 === t || null === t ? null : "boolean" == typeof t ? (t ? "1" : "0") : t + "";
                },
                d = function (t) {
                    return (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
                },
                p = {
                    before: function (t, e, i) {
                        var n = t[e];
                        t[e] = function () {
                            return i.apply(t, arguments), n.apply(t, arguments);
                        };
                    },
                    after: function (t, e, i) {
                        var n = t[e];
                        t[e] = function () {
                            var e = n.apply(t, arguments);
                            return i.apply(t, arguments), e;
                        };
                    },
                },
                h = function (t, e, i) {
                    var n,
                        o = t.trigger,
                        s = {};
                    for (n in ((t.trigger = function () {
                        var i = arguments[0];
                        if (-1 === e.indexOf(i)) return o.apply(t, arguments);
                        s[i] = arguments;
                    }),
                    i.apply(t, []),
                    (t.trigger = o),
                    s))
                        s.hasOwnProperty(n) && o.apply(t, s[n]);
                },
                f = function (t) {
                    var e = {};
                    if ("selectionStart" in t) (e.start = t.selectionStart), (e.length = t.selectionEnd - e.start);
                    else if (document.selection) {
                        t.focus();
                        var i = document.selection.createRange(),
                            n = document.selection.createRange().text.length;
                        i.moveStart("character", -t.value.length), (e.start = i.text.length - n), (e.length = n);
                    }
                    return e;
                },
                g = function (e) {
                    var i = null,
                        n = function (n, o) {
                            var s, r, a, l, c, u, d, p, h, g;
                            ((n = n || window.event || {}), (o = o || {}), n.metaKey || n.altKey) ||
                                ((o.force || !1 !== e.data("grow")) &&
                                    ((s = e.val()),
                                    n.type &&
                                        "keydown" === n.type.toLowerCase() &&
                                        ((a = ((r = n.keyCode) >= 48 && r <= 57) || (r >= 65 && r <= 90) || (r >= 96 && r <= 111) || (r >= 186 && r <= 222) || 32 === r),
                                        46 === r || 8 === r
                                            ? (p = f(e[0])).length
                                                ? (s = s.substring(0, p.start) + s.substring(p.start + p.length))
                                                : 8 === r && p.start
                                                ? (s = s.substring(0, p.start - 1) + s.substring(p.start + 1))
                                                : 46 === r && void 0 !== p.start && (s = s.substring(0, p.start) + s.substring(p.start + 1))
                                            : a && ((u = n.shiftKey), (d = String.fromCharCode(n.keyCode)), (s += d = u ? d.toUpperCase() : d.toLowerCase()))),
                                    (l = e.attr("placeholder")),
                                    !s && l && (s = l),
                                    (g = e),
                                    (c =
                                        ((h = s)
                                            ? (v.$testInput || (v.$testInput = t("<span />").css({ position: "absolute", top: -99999, left: -99999, width: "auto", padding: 0, whiteSpace: "pre" }).appendTo("body")),
                                              v.$testInput.text(h),
                                              (function (t, e, i) {
                                                  var n,
                                                      o,
                                                      s = {};
                                                  if (i) for (n = 0, o = i.length; n < o; n++) s[i[n]] = t.css(i[n]);
                                                  else s = t.css();
                                                  e.css(s);
                                              })(g, v.$testInput, ["letterSpacing", "fontSize", "fontFamily", "fontWeight", "textTransform"]),
                                              v.$testInput.width())
                                            : 0) + 4) !== i && ((i = c), e.width(c), e.triggerHandler("resize"))));
                        };
                    e.on("keydown keyup update blur", n), n();
                },
                v = function (i, n) {
                    var o, s, r, a;
                    (a = i[0]).selectize = this;
                    var l,
                        c,
                        u,
                        d = window.getComputedStyle && window.getComputedStyle(a, null);
                    if (
                        ((r = (r = d ? d.getPropertyValue("direction") : a.currentStyle && a.currentStyle.direction) || i.parents("[dir]:first").attr("dir") || ""),
                        t.extend(this, {
                            order: 0,
                            settings: n,
                            $input: i,
                            tabIndex: i.attr("tabindex") || "",
                            tagType: "select" === a.tagName.toLowerCase() ? 1 : 2,
                            rtl: /rtl/i.test(r),
                            eventNS: ".selectize" + ++v.count,
                            highlightedValue: null,
                            isBlurring: !1,
                            isOpen: !1,
                            isDisabled: !1,
                            isRequired: i.is("[required]"),
                            isInvalid: !1,
                            isLocked: !1,
                            isFocused: !1,
                            isInputHidden: !1,
                            isSetup: !1,
                            isShiftDown: !1,
                            isCmdDown: !1,
                            isCtrlDown: !1,
                            ignoreFocus: !1,
                            ignoreBlur: !1,
                            ignoreHover: !1,
                            hasOptions: !1,
                            currentResults: null,
                            lastValue: "",
                            caretPos: 0,
                            loading: 0,
                            loadedSearches: {},
                            $activeOption: null,
                            $activeItems: [],
                            optgroups: {},
                            options: {},
                            userOptions: {},
                            items: [],
                            renderCache: {},
                            onSearchChange:
                                null === n.loadThrottle
                                    ? this.onSearchChange
                                    : ((l = this.onSearchChange),
                                      (c = n.loadThrottle),
                                      function () {
                                          var t = this,
                                              e = arguments;
                                          window.clearTimeout(u),
                                              (u = window.setTimeout(function () {
                                                  l.apply(t, e);
                                              }, c));
                                      }),
                        }),
                        (this.sifter = new e(this.options, { diacritics: n.diacritics })),
                        this.settings.options)
                    ) {
                        for (o = 0, s = this.settings.options.length; o < s; o++) this.registerOption(this.settings.options[o]);
                        delete this.settings.options;
                    }
                    if (this.settings.optgroups) {
                        for (o = 0, s = this.settings.optgroups.length; o < s; o++) this.registerOptionGroup(this.settings.optgroups[o]);
                        delete this.settings.optgroups;
                    }
                    (this.settings.mode = this.settings.mode || (1 === this.settings.maxItems ? "single" : "multi")),
                        "boolean" != typeof this.settings.hideSelected && (this.settings.hideSelected = "multi" === this.settings.mode),
                        this.initializePlugins(this.settings.plugins),
                        this.setupCallbacks(),
                        this.setupTemplates(),
                        this.setup();
                };
            return (
                o.mixin(v),
                void 0 !== i
                    ? i.mixin(v)
                    : (function (t, e) {
                          e || (e = {});
                          console.error("Selectize: " + t), e.explanation && (console.group && console.group(), console.error(e.explanation), console.group && console.groupEnd());
                      })("Dependency MicroPlugin is missing", { explanation: 'Make sure you either: (1) are using the "standalone" version of Selectize, or (2) require MicroPlugin before you load Selectize.' }),
                t.extend(v.prototype, {
                    setup: function () {
                        var e,
                            i,
                            n,
                            o,
                            c,
                            u,
                            d,
                            p,
                            h,
                            f,
                            v,
                            m,
                            y,
                            b,
                            w = this,
                            x = w.settings,
                            C = w.eventNS,
                            k = t(window),
                            S = t(document),
                            $ = w.$input;
                        if (
                            ((d = w.settings.mode),
                            (p = $.attr("class") || ""),
                            (e = t("<div>").addClass(x.wrapperClass).addClass(p).addClass(d)),
                            (i = t("<div>").addClass(x.inputClass).addClass("items").appendTo(e)),
                            (n = t('<input type="text" autocomplete="off" />')
                                .appendTo(i)
                                .attr("tabindex", $.is(":disabled") ? "-1" : w.tabIndex)),
                            (u = t(x.dropdownParent || e)),
                            (o = t("<div>").addClass(x.dropdownClass).addClass(d).hide().appendTo(u)),
                            (c = t("<div>").addClass(x.dropdownContentClass).appendTo(o)),
                            (f = $.attr("id")) && (n.attr("id", f + "-selectized"), t("label[for='" + f + "']").attr("for", f + "-selectized")),
                            w.settings.copyClassesToDropdown && o.addClass(p),
                            e.css({ width: $[0].style.width }),
                            w.plugins.names.length && ((h = "plugin-" + w.plugins.names.join(" plugin-")), e.addClass(h), o.addClass(h)),
                            (null === x.maxItems || x.maxItems > 1) && 1 === w.tagType && $.attr("multiple", "multiple"),
                            w.settings.placeholder && n.attr("placeholder", x.placeholder),
                            !w.settings.splitOn && w.settings.delimiter)
                        ) {
                            var T = w.settings.delimiter.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
                            w.settings.splitOn = new RegExp("\\s*" + T + "+\\s*");
                        }
                        $.attr("autocorrect") && n.attr("autocorrect", $.attr("autocorrect")),
                            $.attr("autocapitalize") && n.attr("autocapitalize", $.attr("autocapitalize")),
                            (n[0].type = $[0].type),
                            (w.$wrapper = e),
                            (w.$control = i),
                            (w.$control_input = n),
                            (w.$dropdown = o),
                            (w.$dropdown_content = c),
                            o.on("mouseenter mousedown click", "[data-disabled]>[data-selectable]", function (t) {
                                t.stopImmediatePropagation();
                            }),
                            o.on("mouseenter", "[data-selectable]", function () {
                                return w.onOptionHover.apply(w, arguments);
                            }),
                            o.on("mousedown click", "[data-selectable]", function () {
                                return w.onOptionSelect.apply(w, arguments);
                            }),
                            (m = "mousedown"),
                            (y = "*:not(input)"),
                            (b = function () {
                                return w.onItemSelect.apply(w, arguments);
                            }),
                            (v = i).on(m, y, function (t) {
                                for (var e = t.target; e && e.parentNode !== v[0]; ) e = e.parentNode;
                                return (t.currentTarget = e), b.apply(this, [t]);
                            }),
                            g(n),
                            i.on({
                                mousedown: function () {
                                    return w.onMouseDown.apply(w, arguments);
                                },
                                click: function () {
                                    return w.onClick.apply(w, arguments);
                                },
                            }),
                            n.on({
                                mousedown: function (t) {
                                    t.stopPropagation();
                                },
                                keydown: function () {
                                    return w.onKeyDown.apply(w, arguments);
                                },
                                keyup: function () {
                                    return w.onKeyUp.apply(w, arguments);
                                },
                                keypress: function () {
                                    return w.onKeyPress.apply(w, arguments);
                                },
                                resize: function () {
                                    w.positionDropdown.apply(w, []);
                                },
                                blur: function () {
                                    return w.onBlur.apply(w, arguments);
                                },
                                focus: function () {
                                    return (w.ignoreBlur = !1), w.onFocus.apply(w, arguments);
                                },
                                paste: function () {
                                    return w.onPaste.apply(w, arguments);
                                },
                            }),
                            S.on("keydown" + C, function (t) {
                                (w.isCmdDown = t[s ? "metaKey" : "ctrlKey"]), (w.isCtrlDown = t[s ? "altKey" : "ctrlKey"]), (w.isShiftDown = t.shiftKey);
                            }),
                            S.on("keyup" + C, function (t) {
                                t.keyCode === a && (w.isCtrlDown = !1), 16 === t.keyCode && (w.isShiftDown = !1), t.keyCode === r && (w.isCmdDown = !1);
                            }),
                            S.on("mousedown" + C, function (t) {
                                if (w.isFocused) {
                                    if (t.target === w.$dropdown[0] || t.target.parentNode === w.$dropdown[0]) return !1;
                                    w.$control.has(t.target).length || t.target === w.$control[0] || w.blur(t.target);
                                }
                            }),
                            k.on(["scroll" + C, "resize" + C].join(" "), function () {
                                w.isOpen && w.positionDropdown.apply(w, arguments);
                            }),
                            k.on("mousemove" + C, function () {
                                w.ignoreHover = !1;
                            }),
                            (this.revertSettings = { $children: $.children().detach(), tabindex: $.attr("tabindex") }),
                            $.attr("tabindex", -1).hide().after(w.$wrapper),
                            t.isArray(x.items) && (w.setValue(x.items), delete x.items),
                            l &&
                                $.on("invalid" + C, function (t) {
                                    t.preventDefault(), (w.isInvalid = !0), w.refreshState();
                                }),
                            w.updateOriginalInput(),
                            w.refreshItems(),
                            w.refreshState(),
                            w.updatePlaceholder(),
                            (w.isSetup = !0),
                            $.is(":disabled") && w.disable(),
                            w.on("change", this.onChange),
                            $.data("selectize", w),
                            $.addClass("selectized"),
                            w.trigger("initialize"),
                            !0 === x.preload && w.onSearchChange("");
                    },
                    setupTemplates: function () {
                        var e = this.settings.labelField,
                            i = this.settings.optgroupLabelField,
                            n = {
                                optgroup: function (t) {
                                    return '<div class="optgroup">' + t.html + "</div>";
                                },
                                optgroup_header: function (t, e) {
                                    return '<div class="optgroup-header">' + e(t[i]) + "</div>";
                                },
                                option: function (t, i) {
                                    return '<div class="option">' + i(t[e]) + "</div>";
                                },
                                item: function (t, i) {
                                    return '<div class="item">' + i(t[e]) + "</div>";
                                },
                                option_create: function (t, e) {
                                    return '<div class="create">Add <strong>' + e(t.input) + "</strong>&hellip;</div>";
                                },
                            };
                        this.settings.render = t.extend({}, n, this.settings.render);
                    },
                    setupCallbacks: function () {
                        var t,
                            e,
                            i = {
                                initialize: "onInitialize",
                                change: "onChange",
                                item_add: "onItemAdd",
                                item_remove: "onItemRemove",
                                clear: "onClear",
                                option_add: "onOptionAdd",
                                option_remove: "onOptionRemove",
                                option_clear: "onOptionClear",
                                optgroup_add: "onOptionGroupAdd",
                                optgroup_remove: "onOptionGroupRemove",
                                optgroup_clear: "onOptionGroupClear",
                                dropdown_open: "onDropdownOpen",
                                dropdown_close: "onDropdownClose",
                                type: "onType",
                                load: "onLoad",
                                focus: "onFocus",
                                blur: "onBlur",
                            };
                        for (t in i) i.hasOwnProperty(t) && (e = this.settings[i[t]]) && this.on(t, e);
                    },
                    onClick: function (t) {
                        (this.isFocused && this.isOpen) || (this.focus(), t.preventDefault());
                    },
                    onMouseDown: function (e) {
                        var i = this,
                            n = e.isDefaultPrevented();
                        t(e.target);
                        if (i.isFocused) {
                            if (e.target !== i.$control_input[0]) return "single" === i.settings.mode ? (i.isOpen ? i.close() : i.open()) : n || i.setActiveItem(null), !1;
                        } else
                            n ||
                                window.setTimeout(function () {
                                    i.focus();
                                }, 0);
                    },
                    onChange: function () {
                        this.$input.trigger("change");
                    },
                    onPaste: function (e) {
                        var i = this;
                        i.isFull() || i.isInputHidden || i.isLocked
                            ? e.preventDefault()
                            : i.settings.splitOn &&
                              setTimeout(function () {
                                  var e = i.$control_input.val();
                                  if (e.match(i.settings.splitOn)) for (var n = t.trim(e).split(i.settings.splitOn), o = 0, s = n.length; o < s; o++) i.createItem(n[o]);
                              }, 0);
                    },
                    onKeyPress: function (t) {
                        if (this.isLocked) return t && t.preventDefault();
                        var e = String.fromCharCode(t.keyCode || t.which);
                        return this.settings.create && "multi" === this.settings.mode && e === this.settings.delimiter ? (this.createItem(), t.preventDefault(), !1) : void 0;
                    },
                    onKeyDown: function (t) {
                        t.target, this.$control_input[0];
                        if (this.isLocked) 9 !== t.keyCode && t.preventDefault();
                        else {
                            switch (t.keyCode) {
                                case 65:
                                    if (this.isCmdDown) return void this.selectAll();
                                    break;
                                case 27:
                                    return void (this.isOpen && (t.preventDefault(), t.stopPropagation(), this.close()));
                                case 78:
                                    if (!t.ctrlKey || t.altKey) break;
                                case 40:
                                    if (!this.isOpen && this.hasOptions) this.open();
                                    else if (this.$activeOption) {
                                        this.ignoreHover = !0;
                                        var e = this.getAdjacentOption(this.$activeOption, 1);
                                        e.length && this.setActiveOption(e, !0, !0);
                                    }
                                    return void t.preventDefault();
                                case 80:
                                    if (!t.ctrlKey || t.altKey) break;
                                case 38:
                                    if (this.$activeOption) {
                                        this.ignoreHover = !0;
                                        var i = this.getAdjacentOption(this.$activeOption, -1);
                                        i.length && this.setActiveOption(i, !0, !0);
                                    }
                                    return void t.preventDefault();
                                case 13:
                                    return void (this.isOpen && this.$activeOption && (this.onOptionSelect({ currentTarget: this.$activeOption }), t.preventDefault()));
                                case 37:
                                    return void this.advanceSelection(-1, t);
                                case 39:
                                    return void this.advanceSelection(1, t);
                                case 9:
                                    return (
                                        this.settings.selectOnTab && this.isOpen && this.$activeOption && (this.onOptionSelect({ currentTarget: this.$activeOption }), this.isFull() || t.preventDefault()),
                                        void (this.settings.create && this.createItem() && t.preventDefault())
                                    );
                                case 8:
                                case 46:
                                    return void this.deleteSelection(t);
                            }
                            (!this.isFull() && !this.isInputHidden) || (s ? t.metaKey : t.ctrlKey) || t.preventDefault();
                        }
                    },
                    onKeyUp: function (t) {
                        if (this.isLocked) return t && t.preventDefault();
                        var e = this.$control_input.val() || "";
                        this.lastValue !== e && ((this.lastValue = e), this.onSearchChange(e), this.refreshOptions(), this.trigger("type", e));
                    },
                    onSearchChange: function (t) {
                        var e = this,
                            i = e.settings.load;
                        i &&
                            (e.loadedSearches.hasOwnProperty(t) ||
                                ((e.loadedSearches[t] = !0),
                                e.load(function (n) {
                                    i.apply(e, [t, n]);
                                })));
                    },
                    onFocus: function (t) {
                        var e = this.isFocused;
                        if (this.isDisabled) return this.blur(), t && t.preventDefault(), !1;
                        this.ignoreFocus ||
                            ((this.isFocused = !0),
                            "focus" === this.settings.preload && this.onSearchChange(""),
                            e || this.trigger("focus"),
                            this.$activeItems.length || (this.showInput(), this.setActiveItem(null), this.refreshOptions(!!this.settings.openOnFocus)),
                            this.refreshState());
                    },
                    onBlur: function (t, e) {
                        var i = this;
                        if (i.isFocused && ((i.isFocused = !1), !i.ignoreFocus)) {
                            if (!i.ignoreBlur && document.activeElement === i.$dropdown_content[0]) return (i.ignoreBlur = !0), void i.onFocus(t);
                            var n = function () {
                                i.close(),
                                    i.setTextboxValue(""),
                                    i.setActiveItem(null),
                                    i.setActiveOption(null),
                                    i.setCaret(i.items.length),
                                    i.refreshState(),
                                    e && e.focus && e.focus(),
                                    (i.isBlurring = !1),
                                    (i.ignoreFocus = !1),
                                    i.trigger("blur");
                            };
                            (i.isBlurring = !0), (i.ignoreFocus = !0), i.settings.create && i.settings.createOnBlur ? i.createItem(null, !1, n) : n();
                        }
                    },
                    onOptionHover: function (t) {
                        this.ignoreHover || this.setActiveOption(t.currentTarget, !1);
                    },
                    onOptionSelect: function (e) {
                        var i,
                            n,
                            o = this;
                        e.preventDefault && (e.preventDefault(), e.stopPropagation()),
                            (n = t(e.currentTarget)).hasClass("create")
                                ? o.createItem(null, function () {
                                      o.settings.closeAfterSelect && o.close();
                                  })
                                : void 0 !== (i = n.attr("data-value")) &&
                                  ((o.lastQuery = null), o.setTextboxValue(""), o.addItem(i), o.settings.closeAfterSelect ? o.close() : !o.settings.hideSelected && e.type && /mouse/.test(e.type) && o.setActiveOption(o.getOption(i)));
                    },
                    onItemSelect: function (t) {
                        this.isLocked || ("multi" === this.settings.mode && (t.preventDefault(), this.setActiveItem(t.currentTarget, t)));
                    },
                    load: function (t) {
                        var e = this,
                            i = e.$wrapper.addClass(e.settings.loadingClass);
                        e.loading++,
                            t.apply(e, [
                                function (t) {
                                    (e.loading = Math.max(e.loading - 1, 0)), t && t.length && (e.addOption(t), e.refreshOptions(e.isFocused && !e.isInputHidden)), e.loading || i.removeClass(e.settings.loadingClass), e.trigger("load", t);
                                },
                            ]);
                    },
                    setTextboxValue: function (t) {
                        var e = this.$control_input;
                        e.val() !== t && (e.val(t).triggerHandler("update"), (this.lastValue = t));
                    },
                    getValue: function () {
                        return 1 === this.tagType && this.$input.attr("multiple") ? this.items : this.items.join(this.settings.delimiter);
                    },
                    setValue: function (t, e) {
                        h(this, e ? [] : ["change"], function () {
                            this.clear(e), this.addItems(t, e);
                        });
                    },
                    setActiveItem: function (e, i) {
                        var n, o, s, r, a, l, c, u;
                        if ("single" !== this.settings.mode) {
                            if (!(e = t(e)).length) return t(this.$activeItems).removeClass("active"), (this.$activeItems = []), void (this.isFocused && this.showInput());
                            if ("mousedown" === (n = i && i.type.toLowerCase()) && this.isShiftDown && this.$activeItems.length) {
                                for (
                                    u = this.$control.children(".active:last"),
                                        (r = Array.prototype.indexOf.apply(this.$control[0].childNodes, [u[0]])) > (a = Array.prototype.indexOf.apply(this.$control[0].childNodes, [e[0]])) && ((c = r), (r = a), (a = c)),
                                        o = r;
                                    o <= a;
                                    o++
                                )
                                    (l = this.$control[0].childNodes[o]), -1 === this.$activeItems.indexOf(l) && (t(l).addClass("active"), this.$activeItems.push(l));
                                i.preventDefault();
                            } else
                                ("mousedown" === n && this.isCtrlDown) || ("keydown" === n && this.isShiftDown)
                                    ? e.hasClass("active")
                                        ? ((s = this.$activeItems.indexOf(e[0])), this.$activeItems.splice(s, 1), e.removeClass("active"))
                                        : this.$activeItems.push(e.addClass("active")[0])
                                    : (t(this.$activeItems).removeClass("active"), (this.$activeItems = [e.addClass("active")[0]]));
                            this.hideInput(), this.isFocused || this.focus();
                        }
                    },
                    setActiveOption: function (e, i, n) {
                        var o, s, r, a, l;
                        this.$activeOption && this.$activeOption.removeClass("active"),
                            (this.$activeOption = null),
                            (e = t(e)).length &&
                                ((this.$activeOption = e.addClass("active")),
                                (!i && c(i)) ||
                                    ((o = this.$dropdown_content.height()),
                                    (s = this.$activeOption.outerHeight(!0)),
                                    (i = this.$dropdown_content.scrollTop() || 0),
                                    (a = r = this.$activeOption.offset().top - this.$dropdown_content.offset().top + i),
                                    (l = r - o + s),
                                    r + s > o + i
                                        ? this.$dropdown_content.stop().animate({ scrollTop: l }, n ? this.settings.scrollDuration : 0)
                                        : r < i && this.$dropdown_content.stop().animate({ scrollTop: a }, n ? this.settings.scrollDuration : 0)));
                    },
                    selectAll: function () {
                        "single" !== this.settings.mode &&
                            ((this.$activeItems = Array.prototype.slice.apply(this.$control.children(":not(input)").addClass("active"))), this.$activeItems.length && (this.hideInput(), this.close()), this.focus());
                    },
                    hideInput: function () {
                        this.setTextboxValue(""), this.$control_input.css({ opacity: 0, position: "absolute", left: this.rtl ? 1e4 : -1e4 }), (this.isInputHidden = !0);
                    },
                    showInput: function () {
                        this.$control_input.css({ opacity: 1, position: "relative", left: 0 }), (this.isInputHidden = !1);
                    },
                    focus: function () {
                        var t = this;
                        t.isDisabled ||
                            ((t.ignoreFocus = !0),
                            t.$control_input[0].focus(),
                            window.setTimeout(function () {
                                (t.ignoreFocus = !1), t.onFocus();
                            }, 0));
                    },
                    blur: function (t) {
                        this.$control_input[0].blur(), this.onBlur(null, t);
                    },
                    getScoreFunction: function (t) {
                        return this.sifter.getScoreFunction(t, this.getSearchOptions());
                    },
                    getSearchOptions: function () {
                        var t = this.settings,
                            e = t.sortField;
                        return "string" == typeof e && (e = [{ field: e }]), { fields: t.searchField, conjunction: t.searchConjunction, sort: e, nesting: t.nesting };
                    },
                    search: function (e) {
                        var i,
                            n,
                            o,
                            s = this.settings,
                            r = this.getSearchOptions();
                        if (s.score && "function" != typeof (o = this.settings.score.apply(this, [e]))) throw new Error('Selectize "score" setting must be a function that returns a function');
                        if ((e !== this.lastQuery ? ((this.lastQuery = e), (n = this.sifter.search(e, t.extend(r, { score: o }))), (this.currentResults = n)) : (n = t.extend(!0, {}, this.currentResults)), s.hideSelected))
                            for (i = n.items.length - 1; i >= 0; i--) -1 !== this.items.indexOf(u(n.items[i].id)) && n.items.splice(i, 1);
                        return n;
                    },
                    refreshOptions: function (e) {
                        var i, o, s, r, a, l, c, d, p, h, f, g, v, m, y, b;
                        void 0 === e && (e = !0);
                        var w,
                            x,
                            C = this,
                            k = t.trim(C.$control_input.val()),
                            S = C.search(k),
                            $ = C.$dropdown_content,
                            T = C.$activeOption && u(C.$activeOption.attr("data-value"));
                        for (r = S.items.length, "number" == typeof C.settings.maxOptions && (r = Math.min(r, C.settings.maxOptions)), a = {}, l = [], i = 0; i < r; i++)
                            for (c = C.options[S.items[i].id], d = C.render("option", c), p = c[C.settings.optgroupField] || "", o = 0, s = (h = t.isArray(p) ? p : [p]) && h.length; o < s; o++)
                                (p = h[o]), C.optgroups.hasOwnProperty(p) || (p = ""), a.hasOwnProperty(p) || ((a[p] = document.createDocumentFragment()), l.push(p)), a[p].appendChild(d);
                        for (
                            this.settings.lockOptgroupOrder &&
                                l.sort(function (t, e) {
                                    return (C.optgroups[t].$order || 0) - (C.optgroups[e].$order || 0);
                                }),
                                f = document.createDocumentFragment(),
                                i = 0,
                                r = l.length;
                            i < r;
                            i++
                        )
                            (p = l[i]),
                                C.optgroups.hasOwnProperty(p) && a[p].childNodes.length
                                    ? ((g = document.createDocumentFragment()).appendChild(C.render("optgroup_header", C.optgroups[p])),
                                      g.appendChild(a[p]),
                                      f.appendChild(C.render("optgroup", t.extend({}, C.optgroups[p], { html: ((w = g), (x = void 0), (x = document.createElement("div")), x.appendChild(w.cloneNode(!0)), x.innerHTML), dom: g }))))
                                    : f.appendChild(a[p]);
                        if (($.html(f), C.settings.highlight && ($.removeHighlight(), S.query.length && S.tokens.length))) for (i = 0, r = S.tokens.length; i < r; i++) n($, S.tokens[i].regex);
                        if (!C.settings.hideSelected) for (i = 0, r = C.items.length; i < r; i++) C.getOption(C.items[i]).addClass("selected");
                        (v = C.canCreate(k)) && ($.prepend(C.render("option_create", { input: k })), (b = t($[0].childNodes[0]))),
                            (C.hasOptions = S.items.length > 0 || v),
                            C.hasOptions
                                ? (S.items.length > 0
                                      ? ((y = T && C.getOption(T)) && y.length ? (m = y) : "single" === C.settings.mode && C.items.length && (m = C.getOption(C.items[0])),
                                        (m && m.length) || (m = b && !C.settings.addPrecedence ? C.getAdjacentOption(b, 1) : $.find("[data-selectable]:first")))
                                      : (m = b),
                                  C.setActiveOption(m),
                                  e && !C.isOpen && C.open())
                                : (C.setActiveOption(null), e && C.isOpen && C.close());
                    },
                    addOption: function (e) {
                        var i, n, o;
                        if (t.isArray(e)) for (i = 0, n = e.length; i < n; i++) this.addOption(e[i]);
                        else (o = this.registerOption(e)) && ((this.userOptions[o] = !0), (this.lastQuery = null), this.trigger("option_add", o, e));
                    },
                    registerOption: function (t) {
                        var e = u(t[this.settings.valueField]);
                        return void 0 !== e && null !== e && !this.options.hasOwnProperty(e) && ((t.$order = t.$order || ++this.order), (this.options[e] = t), e);
                    },
                    registerOptionGroup: function (t) {
                        var e = u(t[this.settings.optgroupValueField]);
                        return !!e && ((t.$order = t.$order || ++this.order), (this.optgroups[e] = t), e);
                    },
                    addOptionGroup: function (t, e) {
                        (e[this.settings.optgroupValueField] = t), (t = this.registerOptionGroup(e)) && this.trigger("optgroup_add", t, e);
                    },
                    removeOptionGroup: function (t) {
                        this.optgroups.hasOwnProperty(t) && (delete this.optgroups[t], (this.renderCache = {}), this.trigger("optgroup_remove", t));
                    },
                    clearOptionGroups: function () {
                        (this.optgroups = {}), (this.renderCache = {}), this.trigger("optgroup_clear");
                    },
                    updateOption: function (e, i) {
                        var n, o, s, r, a, l, c;
                        if (((e = u(e)), (s = u(i[this.settings.valueField])), null !== e && this.options.hasOwnProperty(e))) {
                            if ("string" != typeof s) throw new Error("Value must be set in option data");
                            (c = this.options[e].$order),
                                s !== e && (delete this.options[e], -1 !== (r = this.items.indexOf(e)) && this.items.splice(r, 1, s)),
                                (i.$order = i.$order || c),
                                (this.options[s] = i),
                                (a = this.renderCache.item),
                                (l = this.renderCache.option),
                                a && (delete a[e], delete a[s]),
                                l && (delete l[e], delete l[s]),
                                -1 !== this.items.indexOf(s) && ((n = this.getItem(e)), (o = t(this.render("item", i))), n.hasClass("active") && o.addClass("active"), n.replaceWith(o)),
                                (this.lastQuery = null),
                                this.isOpen && this.refreshOptions(!1);
                        }
                    },
                    removeOption: function (t, e) {
                        t = u(t);
                        var i = this.renderCache.item,
                            n = this.renderCache.option;
                        i && delete i[t], n && delete n[t], delete this.userOptions[t], delete this.options[t], (this.lastQuery = null), this.trigger("option_remove", t), this.removeItem(t, e);
                    },
                    clearOptions: function () {
                        var e = this;
                        (e.loadedSearches = {}), (e.userOptions = {}), (e.renderCache = {});
                        var i = e.options;
                        t.each(e.options, function (t, n) {
                            -1 == e.items.indexOf(t) && delete i[t];
                        }),
                            (e.options = e.sifter.items = i),
                            (e.lastQuery = null),
                            e.trigger("option_clear");
                    },
                    getOption: function (t) {
                        return this.getElementWithValue(t, this.$dropdown_content.find("[data-selectable]"));
                    },
                    getAdjacentOption: function (e, i) {
                        var n = this.$dropdown.find("[data-selectable]"),
                            o = n.index(e) + i;
                        return o >= 0 && o < n.length ? n.eq(o) : t();
                    },
                    getElementWithValue: function (e, i) {
                        if (void 0 !== (e = u(e)) && null !== e) for (var n = 0, o = i.length; n < o; n++) if (i[n].getAttribute("data-value") === e) return t(i[n]);
                        return t();
                    },
                    getItem: function (t) {
                        return this.getElementWithValue(t, this.$control.children());
                    },
                    addItems: function (e, i) {
                        this.buffer = document.createDocumentFragment();
                        for (var n = this.$control[0].childNodes, o = 0; o < n.length; o++) this.buffer.appendChild(n[o]);
                        for (var s = t.isArray(e) ? e : [e], r = ((o = 0), s.length); o < r; o++) (this.isPending = o < r - 1), this.addItem(s[o], i);
                        var a = this.$control[0];
                        a.insertBefore(this.buffer, a.firstChild), (this.buffer = null);
                    },
                    addItem: function (e, i) {
                        h(this, i ? [] : ["change"], function () {
                            var n,
                                o,
                                s,
                                r,
                                a,
                                l = this.settings.mode;
                            (e = u(e)),
                                -1 === this.items.indexOf(e)
                                    ? this.options.hasOwnProperty(e) &&
                                      ("single" === l && this.clear(i),
                                      ("multi" === l && this.isFull()) ||
                                          ((n = t(this.render("item", this.options[e]))),
                                          (a = this.isFull()),
                                          this.items.splice(this.caretPos, 0, e),
                                          this.insertAtCaret(n),
                                          (!this.isPending || (!a && this.isFull())) && this.refreshState(),
                                          this.isSetup &&
                                              ((s = this.$dropdown_content.find("[data-selectable]")),
                                              this.isPending ||
                                                  ((o = this.getOption(e)), (r = this.getAdjacentOption(o, 1).attr("data-value")), this.refreshOptions(this.isFocused && "single" !== l), r && this.setActiveOption(this.getOption(r))),
                                              !s.length || this.isFull() ? this.close() : this.isPending || this.positionDropdown(),
                                              this.updatePlaceholder(),
                                              this.trigger("item_add", e, n),
                                              this.isPending || this.updateOriginalInput({ silent: i }))))
                                    : "single" === l && this.close();
                        });
                    },
                    removeItem: function (e, i) {
                        var n, o, s;
                        (n = e instanceof t ? e : this.getItem(e)),
                            (e = u(n.attr("data-value"))),
                            -1 !== (o = this.items.indexOf(e)) &&
                                (n.remove(),
                                n.hasClass("active") && ((s = this.$activeItems.indexOf(n[0])), this.$activeItems.splice(s, 1)),
                                this.items.splice(o, 1),
                                (this.lastQuery = null),
                                !this.settings.persist && this.userOptions.hasOwnProperty(e) && this.removeOption(e, i),
                                o < this.caretPos && this.setCaret(this.caretPos - 1),
                                this.refreshState(),
                                this.updatePlaceholder(),
                                this.updateOriginalInput({ silent: i }),
                                this.positionDropdown(),
                                this.trigger("item_remove", e, n));
                    },
                    createItem: function (e, i) {
                        var n = this,
                            o = n.caretPos;
                        e = e || t.trim(n.$control_input.val() || "");
                        var s = arguments[arguments.length - 1];
                        if (("function" != typeof s && (s = function () {}), "boolean" != typeof i && (i = !0), !n.canCreate(e))) return s(), !1;
                        n.lock();
                        var r,
                            a,
                            l =
                                "function" == typeof n.settings.create
                                    ? this.settings.create
                                    : function (t) {
                                          var e = {};
                                          return (e[n.settings.labelField] = t), (e[n.settings.valueField] = t), e;
                                      },
                            c =
                                ((r = function (t) {
                                    if ((n.unlock(), !t || "object" != typeof t)) return s();
                                    var e = u(t[n.settings.valueField]);
                                    if ("string" != typeof e) return s();
                                    n.setTextboxValue(""), n.addOption(t), n.setCaret(o), n.addItem(e), n.refreshOptions(i && "single" !== n.settings.mode), s(t);
                                }),
                                (a = !1),
                                function () {
                                    a || ((a = !0), r.apply(this, arguments));
                                }),
                            d = l.apply(this, [e, c]);
                        return void 0 !== d && c(d), !0;
                    },
                    refreshItems: function () {
                        (this.lastQuery = null), this.isSetup && this.addItem(this.items), this.refreshState(), this.updateOriginalInput();
                    },
                    refreshState: function () {
                        this.refreshValidityState(), this.refreshClasses();
                    },
                    refreshValidityState: function () {
                        if (!this.isRequired) return !1;
                        var t = !this.items.length;
                        (this.isInvalid = t), this.$control_input.prop("required", t), this.$input.prop("required", !t);
                    },
                    refreshClasses: function () {
                        var e = this.isFull(),
                            i = this.isLocked;
                        this.$wrapper.toggleClass("rtl", this.rtl),
                            this.$control
                                .toggleClass("focus", this.isFocused)
                                .toggleClass("disabled", this.isDisabled)
                                .toggleClass("required", this.isRequired)
                                .toggleClass("invalid", this.isInvalid)
                                .toggleClass("locked", i)
                                .toggleClass("full", e)
                                .toggleClass("not-full", !e)
                                .toggleClass("input-active", this.isFocused && !this.isInputHidden)
                                .toggleClass("dropdown-active", this.isOpen)
                                .toggleClass("has-options", !t.isEmptyObject(this.options))
                                .toggleClass("has-items", this.items.length > 0),
                            this.$control_input.data("grow", !e && !i);
                    },
                    isFull: function () {
                        return null !== this.settings.maxItems && this.items.length >= this.settings.maxItems;
                    },
                    updateOriginalInput: function (t) {
                        var e, i, n, o;
                        if (((t = t || {}), 1 === this.tagType)) {
                            for (n = [], e = 0, i = this.items.length; e < i; e++)
                                (o = this.options[this.items[e]][this.settings.labelField] || ""), n.push('<option value="' + d(this.items[e]) + '" selected="selected">' + d(o) + "</option>");
                            n.length || this.$input.attr("multiple") || n.push('<option value="" selected="selected"></option>'), this.$input.html(n.join(""));
                        } else this.$input.val(this.getValue()), this.$input.attr("value", this.$input.val());
                        this.isSetup && (t.silent || this.trigger("change", this.$input.val()));
                    },
                    updatePlaceholder: function () {
                        if (this.settings.placeholder) {
                            var t = this.$control_input;
                            this.items.length ? t.removeAttr("placeholder") : t.attr("placeholder", this.settings.placeholder), t.triggerHandler("update", { force: !0 });
                        }
                    },
                    open: function () {
                        this.isLocked ||
                            this.isOpen ||
                            ("multi" === this.settings.mode && this.isFull()) ||
                            (this.focus(),
                            (this.isOpen = !0),
                            this.refreshState(),
                            this.$dropdown.css({ visibility: "hidden", display: "block" }),
                            this.positionDropdown(),
                            this.$dropdown.css({ visibility: "visible" }),
                            this.trigger("dropdown_open", this.$dropdown));
                    },
                    close: function () {
                        var t = this.isOpen;
                        "single" === this.settings.mode && this.items.length && (this.hideInput(), this.isBlurring || this.$control_input.blur()),
                            (this.isOpen = !1),
                            this.$dropdown.hide(),
                            this.setActiveOption(null),
                            this.refreshState(),
                            t && this.trigger("dropdown_close", this.$dropdown);
                    },
                    positionDropdown: function () {
                        var t = this.$control,
                            e = "body" === this.settings.dropdownParent ? t.offset() : t.position();
                        (e.top += t.outerHeight(!0)), this.$dropdown.css({ width: t[0].getBoundingClientRect().width, top: e.top, left: e.left });
                    },
                    clear: function (t) {
                        this.items.length &&
                            (this.$control.children(":not(input)").remove(),
                            (this.items = []),
                            (this.lastQuery = null),
                            this.setCaret(0),
                            this.setActiveItem(null),
                            this.updatePlaceholder(),
                            this.updateOriginalInput({ silent: t }),
                            this.refreshState(),
                            this.showInput(),
                            this.trigger("clear"));
                    },
                    insertAtCaret: function (t) {
                        var e = Math.min(this.caretPos, this.items.length),
                            i = t[0],
                            n = this.buffer || this.$control[0];
                        0 === e ? n.insertBefore(i, n.firstChild) : n.insertBefore(i, n.childNodes[e]), this.setCaret(e + 1);
                    },
                    deleteSelection: function (e) {
                        var i, n, o, s, r, a, l, c, u;
                        if (
                            ((o = e && 8 === e.keyCode ? -1 : 1),
                            (s = f(this.$control_input[0])),
                            this.$activeOption && !this.settings.hideSelected && (l = this.getAdjacentOption(this.$activeOption, -1).attr("data-value")),
                            (r = []),
                            this.$activeItems.length)
                        ) {
                            for (u = this.$control.children(".active:" + (o > 0 ? "last" : "first")), a = this.$control.children(":not(input)").index(u), o > 0 && a++, i = 0, n = this.$activeItems.length; i < n; i++)
                                r.push(t(this.$activeItems[i]).attr("data-value"));
                            e && (e.preventDefault(), e.stopPropagation());
                        } else
                            (this.isFocused || "single" === this.settings.mode) &&
                                this.items.length &&
                                (o < 0 && 0 === s.start && 0 === s.length ? r.push(this.items[this.caretPos - 1]) : o > 0 && s.start === this.$control_input.val().length && r.push(this.items[this.caretPos]));
                        if (!r.length || ("function" == typeof this.settings.onDelete && !1 === this.settings.onDelete.apply(this, [r]))) return !1;
                        for (void 0 !== a && this.setCaret(a); r.length; ) this.removeItem(r.pop());
                        return this.showInput(), this.positionDropdown(), this.refreshOptions(!0), l && (c = this.getOption(l)).length && this.setActiveOption(c), !0;
                    },
                    advanceSelection: function (t, e) {
                        var i, n, o, s, r;
                        0 !== t &&
                            (this.rtl && (t *= -1),
                            (i = t > 0 ? "last" : "first"),
                            (n = f(this.$control_input[0])),
                            this.isFocused && !this.isInputHidden
                                ? ((s = this.$control_input.val().length), (t < 0 ? 0 === n.start && 0 === n.length : n.start === s) && !s && this.advanceCaret(t, e))
                                : (r = this.$control.children(".active:" + i)).length && ((o = this.$control.children(":not(input)").index(r)), this.setActiveItem(null), this.setCaret(t > 0 ? o + 1 : o)));
                    },
                    advanceCaret: function (t, e) {
                        var i, n;
                        0 !== t && ((i = t > 0 ? "next" : "prev"), this.isShiftDown ? (n = this.$control_input[i]()).length && (this.hideInput(), this.setActiveItem(n), e && e.preventDefault()) : this.setCaret(this.caretPos + t));
                    },
                    setCaret: function (e) {
                        var i, n, o, s;
                        if (((e = "single" === this.settings.mode ? this.items.length : Math.max(0, Math.min(this.items.length, e))), !this.isPending))
                            for (i = 0, n = (o = this.$control.children(":not(input)")).length; i < n; i++) (s = t(o[i]).detach()), i < e ? this.$control_input.before(s) : this.$control.append(s);
                        this.caretPos = e;
                    },
                    lock: function () {
                        this.close(), (this.isLocked = !0), this.refreshState();
                    },
                    unlock: function () {
                        (this.isLocked = !1), this.refreshState();
                    },
                    disable: function () {
                        this.$input.prop("disabled", !0), this.$control_input.prop("disabled", !0).prop("tabindex", -1), (this.isDisabled = !0), this.lock();
                    },
                    enable: function () {
                        this.$input.prop("disabled", !1), this.$control_input.prop("disabled", !1).prop("tabindex", this.tabIndex), (this.isDisabled = !1), this.unlock();
                    },
                    destroy: function () {
                        var e = this.eventNS,
                            i = this.revertSettings;
                        this.trigger("destroy"),
                            this.off(),
                            this.$wrapper.remove(),
                            this.$dropdown.remove(),
                            this.$input.html("").append(i.$children).removeAttr("tabindex").removeClass("selectized").attr({ tabindex: i.tabindex }).show(),
                            this.$control_input.removeData("grow"),
                            this.$input.removeData("selectize"),
                            0 == --v.count && v.$testInput && (v.$testInput.remove(), (v.$testInput = void 0)),
                            t(window).off(e),
                            t(document).off(e),
                            t(document.body).off(e),
                            delete this.$input[0].selectize;
                    },
                    render: function (e, i) {
                        var n,
                            o,
                            s = "",
                            r = !1;
                        return (
                            ("option" !== e && "item" !== e) || (r = !!(n = u(i[this.settings.valueField]))),
                            r && (c(this.renderCache[e]) || (this.renderCache[e] = {}), this.renderCache[e].hasOwnProperty(n))
                                ? this.renderCache[e][n]
                                : ((s = t(this.settings.render[e].apply(this, [i, d]))),
                                  "option" === e || "option_create" === e
                                      ? i[this.settings.disabledField] || s.attr("data-selectable", "")
                                      : "optgroup" === e && ((o = i[this.settings.optgroupValueField] || ""), s.attr("data-group", o), i[this.settings.disabledField] && s.attr("data-disabled", "")),
                                  ("option" !== e && "item" !== e) || s.attr("data-value", n || ""),
                                  r && (this.renderCache[e][n] = s[0]),
                                  s[0])
                        );
                    },
                    clearCache: function (t) {
                        void 0 === t ? (this.renderCache = {}) : delete this.renderCache[t];
                    },
                    canCreate: function (t) {
                        if (!this.settings.create) return !1;
                        var e = this.settings.createFilter;
                        return t.length && ("function" != typeof e || e.apply(this, [t])) && ("string" != typeof e || new RegExp(e).test(t)) && (!(e instanceof RegExp) || e.test(t));
                    },
                }),
                (v.count = 0),
                (v.defaults = {
                    options: [],
                    optgroups: [],
                    plugins: [],
                    delimiter: ",",
                    splitOn: null,
                    persist: !0,
                    diacritics: !0,
                    create: !1,
                    createOnBlur: !1,
                    createFilter: null,
                    highlight: !0,
                    openOnFocus: !0,
                    maxOptions: 1e3,
                    maxItems: null,
                    hideSelected: null,
                    addPrecedence: !1,
                    selectOnTab: !1,
                    preload: !1,
                    allowEmptyOption: !1,
                    closeAfterSelect: !1,
                    scrollDuration: 60,
                    loadThrottle: 300,
                    loadingClass: "loading",
                    dataAttr: "data-data",
                    optgroupField: "optgroup",
                    valueField: "value",
                    labelField: "text",
                    disabledField: "disabled",
                    optgroupLabelField: "label",
                    optgroupValueField: "value",
                    lockOptgroupOrder: !1,
                    sortField: "$order",
                    searchField: ["text"],
                    searchConjunction: "and",
                    mode: null,
                    wrapperClass: "selectize-control",
                    inputClass: "selectize-input",
                    dropdownClass: "selectize-dropdown",
                    dropdownContentClass: "selectize-dropdown-content",
                    dropdownParent: null,
                    copyClassesToDropdown: !0,
                    render: {},
                }),
                (t.fn.selectize = function (e) {
                    var i = t.fn.selectize.defaults,
                        n = t.extend({}, i, e),
                        o = n.dataAttr,
                        s = n.labelField,
                        r = n.valueField,
                        a = n.disabledField,
                        l = n.optgroupField,
                        c = n.optgroupLabelField,
                        d = n.optgroupValueField;
                    return this.each(function () {
                        if (!this.selectize) {
                            var p = t(this),
                                h = this.tagName.toLowerCase(),
                                f = p.attr("placeholder") || p.attr("data-placeholder");
                            f || n.allowEmptyOption || (f = p.children('option[value=""]').text());
                            var g = { placeholder: f, options: [], optgroups: [], items: [] };
                            "select" === h
                                ? (function (e, i) {
                                      var p,
                                          h,
                                          f,
                                          g,
                                          v = i.options,
                                          m = {},
                                          y = function (t) {
                                              var e = o && t.attr(o);
                                              return "string" == typeof e && e.length ? JSON.parse(e) : null;
                                          },
                                          b = function (e, o) {
                                              e = t(e);
                                              var c = u(e.val());
                                              if (c || n.allowEmptyOption)
                                                  if (m.hasOwnProperty(c)) {
                                                      if (o) {
                                                          var d = m[c][l];
                                                          d ? (t.isArray(d) ? d.push(o) : (m[c][l] = [d, o])) : (m[c][l] = o);
                                                      }
                                                  } else {
                                                      var p = y(e) || {};
                                                      (p[s] = p[s] || e.text()), (p[r] = p[r] || c), (p[a] = p[a] || e.prop("disabled")), (p[l] = p[l] || o), (m[c] = p), v.push(p), e.is(":selected") && i.items.push(c);
                                                  }
                                          },
                                          w = function (e) {
                                              var n, o, s, r, l;
                                              for ((s = (e = t(e)).attr("label")) && (((r = y(e) || {})[c] = s), (r[d] = s), (r[a] = e.prop("disabled")), i.optgroups.push(r)), n = 0, o = (l = t("option", e)).length; n < o; n++) b(l[n], s);
                                          };
                                      for (i.maxItems = e.attr("multiple") ? null : 1, p = 0, h = (g = e.children()).length; p < h; p++) "optgroup" === (f = g[p].tagName.toLowerCase()) ? w(g[p]) : "option" === f && b(g[p]);
                                  })(p, g)
                                : (function (e, i) {
                                      var a,
                                          l,
                                          c,
                                          u,
                                          d = e.attr(o);
                                      if (d) for (i.options = JSON.parse(d), a = 0, l = i.options.length; a < l; a++) i.items.push(i.options[a][r]);
                                      else {
                                          var p = t.trim(e.val() || "");
                                          if (!n.allowEmptyOption && !p.length) return;
                                          for (a = 0, l = (c = p.split(n.delimiter)).length; a < l; a++) ((u = {})[s] = c[a]), (u[r] = c[a]), i.options.push(u);
                                          i.items = c;
                                      }
                                  })(p, g),
                                new v(p, t.extend(!0, {}, i, g, e));
                        }
                    });
                }),
                (t.fn.selectize.defaults = v.defaults),
                (t.fn.selectize.support = { validity: l }),
                v.define("drag_drop", function (e) {
                    if (!t.fn.sortable) throw new Error('The "drag_drop" plugin requires jQuery UI "sortable".');
                    if ("multi" === this.settings.mode) {
                        var i,
                            n = this;
                        (n.lock =
                            ((i = n.lock),
                            function () {
                                var t = n.$control.data("sortable");
                                return t && t.disable(), i.apply(n, arguments);
                            })),
                            (n.unlock = (function () {
                                var t = n.unlock;
                                return function () {
                                    var e = n.$control.data("sortable");
                                    return e && e.enable(), t.apply(n, arguments);
                                };
                            })()),
                            (n.setup = (function () {
                                var e = n.setup;
                                return function () {
                                    e.apply(this, arguments);
                                    var i = n.$control.sortable({
                                        items: "[data-value]",
                                        forcePlaceholderSize: !0,
                                        disabled: n.isLocked,
                                        start: function (t, e) {
                                            e.placeholder.css("width", e.helper.css("width")), i.css({ overflow: "visible" });
                                        },
                                        stop: function () {
                                            i.css({ overflow: "hidden" });
                                            var e = n.$activeItems ? n.$activeItems.slice() : null,
                                                o = [];
                                            i.children("[data-value]").each(function () {
                                                o.push(t(this).attr("data-value"));
                                            }),
                                                n.setValue(o),
                                                n.setActiveItem(e);
                                        },
                                    });
                                };
                            })());
                    }
                }),
                v.define("dropdown_header", function (e) {
                    var i,
                        n = this;
                    (e = t.extend(
                        {
                            title: "Untitled",
                            headerClass: "selectize-dropdown-header",
                            titleRowClass: "selectize-dropdown-header-title",
                            labelClass: "selectize-dropdown-header-label",
                            closeClass: "selectize-dropdown-header-close",
                            html: function (t) {
                                return (
                                    '<div class="' +
                                    t.headerClass +
                                    '"><div class="' +
                                    t.titleRowClass +
                                    '"><span class="' +
                                    t.labelClass +
                                    '">' +
                                    t.title +
                                    '</span><a href="javascript:void(0)" class="' +
                                    t.closeClass +
                                    '">&times;</a></div></div>'
                                );
                            },
                        },
                        e
                    )),
                        (n.setup =
                            ((i = n.setup),
                            function () {
                                i.apply(n, arguments), (n.$dropdown_header = t(e.html(e))), n.$dropdown.prepend(n.$dropdown_header);
                            }));
                }),
                v.define("optgroup_columns", function (e) {
                    var i,
                        n = this;
                    (e = t.extend({ equalizeWidth: !0, equalizeHeight: !0 }, e)),
                        (this.getAdjacentOption = function (e, i) {
                            var n = e.closest("[data-group]").find("[data-selectable]"),
                                o = n.index(e) + i;
                            return o >= 0 && o < n.length ? n.eq(o) : t();
                        }),
                        (this.onKeyDown =
                            ((i = n.onKeyDown),
                            function (t) {
                                var e, o, s, r;
                                return !this.isOpen || (37 !== t.keyCode && 39 !== t.keyCode)
                                    ? i.apply(this, arguments)
                                    : ((n.ignoreHover = !0),
                                      (e = (r = this.$activeOption.closest("[data-group]")).find("[data-selectable]").index(this.$activeOption)),
                                      void ((o = (s = (r = 37 === t.keyCode ? r.prev("[data-group]") : r.next("[data-group]")).find("[data-selectable]")).eq(Math.min(s.length - 1, e))).length && this.setActiveOption(o)));
                            }));
                    var o = function () {
                            var t,
                                e = o.width,
                                i = document;
                            return (
                                void 0 === e &&
                                    (((t = i.createElement("div")).innerHTML = '<div style="width:50px;height:50px;position:absolute;left:-50px;top:-50px;overflow:auto;"><div style="width:1px;height:100px;"></div></div>'),
                                    (t = t.firstChild),
                                    i.body.appendChild(t),
                                    (e = o.width = t.offsetWidth - t.clientWidth),
                                    i.body.removeChild(t)),
                                e
                            );
                        },
                        s = function () {
                            var i, s, r, a, l, c, u;
                            if ((s = (u = t("[data-group]", n.$dropdown_content)).length) && n.$dropdown_content.width()) {
                                if (e.equalizeHeight) {
                                    for (r = 0, i = 0; i < s; i++) r = Math.max(r, u.eq(i).height());
                                    u.css({ height: r });
                                }
                                e.equalizeWidth && ((c = n.$dropdown_content.innerWidth() - o()), (a = Math.round(c / s)), u.css({ width: a }), s > 1 && ((l = c - a * (s - 1)), u.eq(s - 1).css({ width: l })));
                            }
                        };
                    (e.equalizeHeight || e.equalizeWidth) && (p.after(this, "positionDropdown", s), p.after(this, "refreshOptions", s));
                }),
                v.define("remove_button", function (e) {
                    e = t.extend({ label: "&times;", title: "Remove", className: "remove", append: !0 }, e);
                    "single" !== this.settings.mode
                        ? (function (e, i) {
                              var n,
                                  o = e,
                                  s = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + d(i.title) + '">' + i.label + "</a>";
                              e.setup =
                                  ((n = o.setup),
                                  function () {
                                      if (i.append) {
                                          var r = o.settings.render.item;
                                          o.settings.render.item = function (t) {
                                              return (i = r.apply(e, arguments)), (n = s), (o = i.search(/(<\/[^>]+>\s*)$/)), i.substring(0, o) + n + i.substring(o);
                                              var i, n, o;
                                          };
                                      }
                                      n.apply(e, arguments),
                                          e.$control.on("click", "." + i.className, function (e) {
                                              if ((e.preventDefault(), !o.isLocked)) {
                                                  var i = t(e.currentTarget).parent();
                                                  o.setActiveItem(i), o.deleteSelection() && o.setCaret(o.items.length);
                                              }
                                          });
                                  });
                          })(this, e)
                        : (function (e, i) {
                              i.className = "remove-single";
                              var n,
                                  o = e,
                                  s = '<a href="javascript:void(0)" class="' + i.className + '" tabindex="-1" title="' + d(i.title) + '">' + i.label + "</a>";
                              e.setup =
                                  ((n = o.setup),
                                  function () {
                                      if (i.append) {
                                          var r = t(o.$input.context).attr("id"),
                                              a = (t("#" + r), o.settings.render.item);
                                          o.settings.render.item = function (i) {
                                              return (n = a.apply(e, arguments)), (o = s), t("<span>").append(n).append(o);
                                              var n, o;
                                          };
                                      }
                                      n.apply(e, arguments),
                                          e.$control.on("click", "." + i.className, function (t) {
                                              t.preventDefault(), o.isLocked || o.clear();
                                          });
                                  });
                          })(this, e);
                }),
                v.define("restore_on_backspace", function (t) {
                    var e,
                        i = this;
                    (t.text =
                        t.text ||
                        function (t) {
                            return t[this.settings.labelField];
                        }),
                        (this.onKeyDown =
                            ((e = i.onKeyDown),
                            function (i) {
                                var n, o;
                                return 8 === i.keyCode && "" === this.$control_input.val() && !this.$activeItems.length && (n = this.caretPos - 1) >= 0 && n < this.items.length
                                    ? ((o = this.options[this.items[n]]), this.deleteSelection(i) && (this.setTextboxValue(t.text.apply(this, [o])), this.refreshOptions(!0)), void i.preventDefault())
                                    : e.apply(this, arguments);
                            }));
                }),
                v
            );
        }),
            (o = [i(10), i(302), i(303)]),
            void 0 === (s = "function" == typeof (n = r) ? n.apply(e, o) : n) || (t.exports = s);
    },
    302: function (t, e, i) {
        var n, o;
        void 0 ===
            (o =
                "function" ==
                typeof (n = function () {
                    var t = function (t, e) {
                        (this.items = t), (this.settings = e || { diacritics: !0 });
                    };
                    (t.prototype.tokenize = function (t) {
                        if (!(t = o(String(t || "").toLowerCase())) || !t.length) return [];
                        var e,
                            i,
                            n,
                            r,
                            l = [],
                            c = t.split(/ +/);
                        for (e = 0, i = c.length; e < i; e++) {
                            if (((n = s(c[e])), this.settings.diacritics)) for (r in a) a.hasOwnProperty(r) && (n = n.replace(new RegExp(r, "g"), a[r]));
                            l.push({ string: c[e], regex: new RegExp(n, "i") });
                        }
                        return l;
                    }),
                        (t.prototype.iterator = function (t, e) {
                            (r(t)
                                ? Array.prototype.forEach ||
                                  function (t) {
                                      for (var e = 0, i = this.length; e < i; e++) t(this[e], e, this);
                                  }
                                : function (t) {
                                      for (var e in this) this.hasOwnProperty(e) && t(this[e], e, this);
                                  }
                            ).apply(t, [e]);
                        }),
                        (t.prototype.getScoreFunction = function (t, e) {
                            var i, o, s, r;
                            (t = this.prepareSearch(t, e)), (o = t.tokens), (i = t.options.fields), (s = o.length), (r = t.options.nesting);
                            var a,
                                l = function (t, e) {
                                    var i, n;
                                    return t ? (-1 === (n = (t = String(t || "")).search(e.regex)) ? 0 : ((i = e.string.length / t.length), 0 === n && (i += 0.5), i)) : 0;
                                },
                                c = (a = i.length)
                                    ? 1 === a
                                        ? function (t, e) {
                                              return l(n(e, i[0], r), t);
                                          }
                                        : function (t, e) {
                                              for (var o = 0, s = 0; o < a; o++) s += l(n(e, i[o], r), t);
                                              return s / a;
                                          }
                                    : function () {
                                          return 0;
                                      };
                            return s
                                ? 1 === s
                                    ? function (t) {
                                          return c(o[0], t);
                                      }
                                    : "and" === t.options.conjunction
                                    ? function (t) {
                                          for (var e, i = 0, n = 0; i < s; i++) {
                                              if ((e = c(o[i], t)) <= 0) return 0;
                                              n += e;
                                          }
                                          return n / s;
                                      }
                                    : function (t) {
                                          for (var e = 0, i = 0; e < s; e++) i += c(o[e], t);
                                          return i / s;
                                      }
                                : function () {
                                      return 0;
                                  };
                        }),
                        (t.prototype.getSortFunction = function (t, i) {
                            var o, s, r, a, l, c, u, d, p, h, f;
                            if (
                                ((f = (!(t = (r = this).prepareSearch(t, i)).query && i.sort_empty) || i.sort),
                                (p = function (t, e) {
                                    return "$score" === t ? e.score : n(r.items[e.id], t, i.nesting);
                                }),
                                (l = []),
                                f)
                            )
                                for (o = 0, s = f.length; o < s; o++) (t.query || "$score" !== f[o].field) && l.push(f[o]);
                            if (t.query) {
                                for (h = !0, o = 0, s = l.length; o < s; o++)
                                    if ("$score" === l[o].field) {
                                        h = !1;
                                        break;
                                    }
                                h && l.unshift({ field: "$score", direction: "desc" });
                            } else
                                for (o = 0, s = l.length; o < s; o++)
                                    if ("$score" === l[o].field) {
                                        l.splice(o, 1);
                                        break;
                                    }
                            for (d = [], o = 0, s = l.length; o < s; o++) d.push("desc" === l[o].direction ? -1 : 1);
                            return (c = l.length)
                                ? 1 === c
                                    ? ((a = l[0].field),
                                      (u = d[0]),
                                      function (t, i) {
                                          return u * e(p(a, t), p(a, i));
                                      })
                                    : function (t, i) {
                                          var n, o, s;
                                          for (n = 0; n < c; n++) if (((s = l[n].field), (o = d[n] * e(p(s, t), p(s, i))))) return o;
                                          return 0;
                                      }
                                : null;
                        }),
                        (t.prototype.prepareSearch = function (t, e) {
                            if ("object" == typeof t) return t;
                            var n = (e = i({}, e)).fields,
                                o = e.sort,
                                s = e.sort_empty;
                            return n && !r(n) && (e.fields = [n]), o && !r(o) && (e.sort = [o]), s && !r(s) && (e.sort_empty = [s]), { options: e, query: String(t || "").toLowerCase(), tokens: this.tokenize(t), total: 0, items: [] };
                        }),
                        (t.prototype.search = function (t, e) {
                            var i, n, o, s;
                            return (
                                (n = this.prepareSearch(t, e)),
                                (e = n.options),
                                (t = n.query),
                                (s = e.score || this.getScoreFunction(n)),
                                t.length
                                    ? this.iterator(this.items, function (t, o) {
                                          (i = s(t)), (!1 === e.filter || i > 0) && n.items.push({ score: i, id: o });
                                      })
                                    : this.iterator(this.items, function (t, e) {
                                          n.items.push({ score: 1, id: e });
                                      }),
                                (o = this.getSortFunction(n, e)) && n.items.sort(o),
                                (n.total = n.items.length),
                                "number" == typeof e.limit && (n.items = n.items.slice(0, e.limit)),
                                n
                            );
                        });
                    var e = function (t, e) {
                            return "number" == typeof t && "number" == typeof e ? (t > e ? 1 : t < e ? -1 : 0) : (t = l(String(t || ""))) > (e = l(String(e || ""))) ? 1 : e > t ? -1 : 0;
                        },
                        i = function (t, e) {
                            var i, n, o, s;
                            for (i = 1, n = arguments.length; i < n; i++) if ((s = arguments[i])) for (o in s) s.hasOwnProperty(o) && (t[o] = s[o]);
                            return t;
                        },
                        n = function (t, e, i) {
                            if (t && e) {
                                if (!i) return t[e];
                                for (var n = e.split("."); n.length && (t = t[n.shift()]); );
                                return t;
                            }
                        },
                        o = function (t) {
                            return (t + "").replace(/^\s+|\s+$|/g, "");
                        },
                        s = function (t) {
                            return (t + "").replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1");
                        },
                        r =
                            Array.isArray ||
                            ("undefined" != typeof $ && $.isArray) ||
                            function (t) {
                                return "[object Array]" === Object.prototype.toString.call(t);
                            },
                        a = {
                            a: "[aḀḁĂăÂâǍǎȺⱥȦȧẠạÄäÀàÁáĀāÃãÅåąĄÃąĄ]",
                            b: "[b␢βΒB฿𐌁ᛒ]",
                            c: "[cĆćĈĉČčĊċC̄c̄ÇçḈḉȻȼƇƈɕᴄＣｃ]",
                            d: "[dĎďḊḋḐḑḌḍḒḓḎḏĐđD̦d̦ƉɖƊɗƋƌᵭᶁᶑȡᴅＤｄð]",
                            e: "[eÉéÈèÊêḘḙĚěĔĕẼẽḚḛẺẻĖėËëĒēȨȩĘęᶒɆɇȄȅẾếỀềỄễỂểḜḝḖḗḔḕȆȇẸẹỆệⱸᴇＥｅɘǝƏƐε]",
                            f: "[fƑƒḞḟ]",
                            g: "[gɢ₲ǤǥĜĝĞğĢģƓɠĠġ]",
                            h: "[hĤĥĦħḨḩẖẖḤḥḢḣɦʰǶƕ]",
                            i: "[iÍíÌìĬĭÎîǏǐÏïḮḯĨĩĮįĪīỈỉȈȉȊȋỊịḬḭƗɨɨ̆ᵻᶖİiIıɪＩｉ]",
                            j: "[jȷĴĵɈɉʝɟʲ]",
                            k: "[kƘƙꝀꝁḰḱǨǩḲḳḴḵκϰ₭]",
                            l: "[lŁłĽľĻļĹĺḶḷḸḹḼḽḺḻĿŀȽƚⱠⱡⱢɫɬᶅɭȴʟＬｌ]",
                            n: "[nŃńǸǹŇňÑñṄṅŅņṆṇṊṋṈṉN̈n̈ƝɲȠƞᵰᶇɳȵɴＮｎŊŋ]",
                            o: "[oØøÖöÓóÒòÔôǑǒŐőŎŏȮȯỌọƟɵƠơỎỏŌōÕõǪǫȌȍՕօ]",
                            p: "[pṔṕṖṗⱣᵽƤƥᵱ]",
                            q: "[qꝖꝗʠɊɋꝘꝙq̃]",
                            r: "[rŔŕɌɍŘřŖŗṘṙȐȑȒȓṚṛⱤɽ]",
                            s: "[sŚśṠṡṢṣꞨꞩŜŝŠšŞşȘșS̈s̈]",
                            t: "[tŤťṪṫŢţṬṭƮʈȚțṰṱṮṯƬƭ]",
                            u: "[uŬŭɄʉỤụÜüÚúÙùÛûǓǔŰűŬŭƯưỦủŪūŨũŲųȔȕ∪]",
                            v: "[vṼṽṾṿƲʋꝞꝟⱱʋ]",
                            w: "[wẂẃẀẁŴŵẄẅẆẇẈẉ]",
                            x: "[xẌẍẊẋχ]",
                            y: "[yÝýỲỳŶŷŸÿỸỹẎẏỴỵɎɏƳƴ]",
                            z: "[zŹźẐẑŽžŻżẒẓẔẕƵƶ]",
                        },
                        l = (function () {
                            var t,
                                e,
                                i,
                                n,
                                o = "",
                                s = {};
                            for (i in a) if (a.hasOwnProperty(i)) for (o += n = a[i].substring(2, a[i].length - 1), t = 0, e = n.length; t < e; t++) s[n.charAt(t)] = i;
                            var r = new RegExp("[" + o + "]", "g");
                            return function (t) {
                                return t
                                    .replace(r, function (t) {
                                        return s[t];
                                    })
                                    .toLowerCase();
                            };
                        })();
                    return t;
                })
                    ? n.call(e, i, e, t)
                    : n) || (t.exports = o);
    },
    303: function (t, e, i) {
        var n, o;
        void 0 ===
            (o =
                "function" ==
                typeof (n = function () {
                    var t = {
                            mixin: function (t) {
                                (t.plugins = {}),
                                    (t.prototype.initializePlugins = function (t) {
                                        var i,
                                            n,
                                            o,
                                            s = [];
                                        if (((this.plugins = { names: [], settings: {}, requested: {}, loaded: {} }), e.isArray(t)))
                                            for (i = 0, n = t.length; i < n; i++) "string" == typeof t[i] ? s.push(t[i]) : ((this.plugins.settings[t[i].name] = t[i].options), s.push(t[i].name));
                                        else if (t) for (o in t) t.hasOwnProperty(o) && ((this.plugins.settings[o] = t[o]), s.push(o));
                                        for (; s.length; ) this.require(s.shift());
                                    }),
                                    (t.prototype.loadPlugin = function (e) {
                                        var i = this.plugins,
                                            n = t.plugins[e];
                                        if (!t.plugins.hasOwnProperty(e)) throw new Error('Unable to find "' + e + '" plugin');
                                        (i.requested[e] = !0), (i.loaded[e] = n.fn.apply(this, [this.plugins.settings[e] || {}])), i.names.push(e);
                                    }),
                                    (t.prototype.require = function (t) {
                                        var e = this.plugins;
                                        if (!this.plugins.loaded.hasOwnProperty(t)) {
                                            if (e.requested[t]) throw new Error('Plugin has circular dependency ("' + t + '")');
                                            this.loadPlugin(t);
                                        }
                                        return e.loaded[t];
                                    }),
                                    (t.define = function (e, i) {
                                        t.plugins[e] = { name: e, fn: i };
                                    });
                            },
                        },
                        e = {
                            isArray:
                                Array.isArray ||
                                function (t) {
                                    return "[object Array]" === Object.prototype.toString.call(t);
                                },
                        };
                    return t;
                })
                    ? n.call(e, i, e, t)
                    : n) || (t.exports = o);
    },
    304: function (t, e, i) {
        var n, o, s;
        (o = []),
            void 0 ===
                (s =
                    "function" ==
                    typeof (n = function () {
                        "use strict";
                        var t = "11.1.0";
                        function e(t) {
                            return null !== t && void 0 !== t;
                        }
                        function i(t) {
                            t.preventDefault();
                        }
                        function n(t) {
                            return "number" == typeof t && !isNaN(t) && isFinite(t);
                        }
                        function o(t, e, i) {
                            i > 0 &&
                                (l(t, e),
                                setTimeout(function () {
                                    c(t, e);
                                }, i));
                        }
                        function s(t) {
                            return Math.max(Math.min(t, 100), 0);
                        }
                        function r(t) {
                            return Array.isArray(t) ? t : [t];
                        }
                        function a(t) {
                            var e = (t = String(t)).split(".");
                            return e.length > 1 ? e[1].length : 0;
                        }
                        function l(t, e) {
                            t.classList ? t.classList.add(e) : (t.className += " " + e);
                        }
                        function c(t, e) {
                            t.classList ? t.classList.remove(e) : (t.className = t.className.replace(new RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "));
                        }
                        function u(t) {
                            var e = void 0 !== window.pageXOffset,
                                i = "CSS1Compat" === (t.compatMode || "");
                            return { x: e ? window.pageXOffset : i ? t.documentElement.scrollLeft : t.body.scrollLeft, y: e ? window.pageYOffset : i ? t.documentElement.scrollTop : t.body.scrollTop };
                        }
                        function d(t, e) {
                            return 100 / (e - t);
                        }
                        function p(t, e) {
                            return (100 * e) / (t[1] - t[0]);
                        }
                        function h(t, e) {
                            for (var i = 1; t >= e[i]; ) i += 1;
                            return i;
                        }
                        function f(t, e, i) {
                            if (i >= t.slice(-1)[0]) return 100;
                            var n = h(i, t),
                                o = t[n - 1],
                                s = t[n],
                                r = e[n - 1],
                                a = e[n];
                            return (
                                r +
                                (function (t, e) {
                                    return p(t, t[0] < 0 ? e + Math.abs(t[0]) : e - t[0]);
                                })([o, s], i) /
                                    d(r, a)
                            );
                        }
                        function g(t, e, i, n) {
                            if (100 === n) return n;
                            var o = h(n, t),
                                s = t[o - 1],
                                r = t[o];
                            return i
                                ? n - s > (r - s) / 2
                                    ? r
                                    : s
                                : e[o - 1]
                                ? t[o - 1] +
                                  (function (t, e) {
                                      return Math.round(t / e) * e;
                                  })(n - t[o - 1], e[o - 1])
                                : n;
                        }
                        function v(e, i, o) {
                            var s;
                            if (("number" == typeof i && (i = [i]), !Array.isArray(i))) throw new Error("noUiSlider (" + t + "): 'range' contains invalid value.");
                            if (!n((s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))) || !n(i[0])) throw new Error("noUiSlider (" + t + "): 'range' value isn't numeric.");
                            o.xPct.push(s), o.xVal.push(i[0]), s ? o.xSteps.push(!isNaN(i[1]) && i[1]) : isNaN(i[1]) || (o.xSteps[0] = i[1]), o.xHighestCompleteStep.push(0);
                        }
                        function m(t, e, i) {
                            if (!e) return !0;
                            i.xSteps[t] = p([i.xVal[t], i.xVal[t + 1]], e) / d(i.xPct[t], i.xPct[t + 1]);
                            var n = (i.xVal[t + 1] - i.xVal[t]) / i.xNumSteps[t],
                                o = Math.ceil(Number(n.toFixed(3)) - 1),
                                s = i.xVal[t] + i.xNumSteps[t] * o;
                            i.xHighestCompleteStep[t] = s;
                        }
                        function y(t, e, i) {
                            var n;
                            (this.xPct = []), (this.xVal = []), (this.xSteps = [i || !1]), (this.xNumSteps = [!1]), (this.xHighestCompleteStep = []), (this.snap = e);
                            var o = [];
                            for (n in t) t.hasOwnProperty(n) && o.push([t[n], n]);
                            for (
                                o.length && "object" == typeof o[0][0]
                                    ? o.sort(function (t, e) {
                                          return t[0][0] - e[0][0];
                                      })
                                    : o.sort(function (t, e) {
                                          return t[0] - e[0];
                                      }),
                                    n = 0;
                                n < o.length;
                                n++
                            )
                                v(o[n][1], o[n][0], this);
                            for (this.xNumSteps = this.xSteps.slice(0), n = 0; n < this.xNumSteps.length; n++) m(n, this.xNumSteps[n], this);
                        }
                        (y.prototype.getMargin = function (e) {
                            var i = this.xNumSteps[0];
                            if (i && (e / i) % 1 != 0) throw new Error("noUiSlider (" + t + "): 'limit', 'margin' and 'padding' must be divisible by step.");
                            return 2 === this.xPct.length && p(this.xVal, e);
                        }),
                            (y.prototype.toStepping = function (t) {
                                return (t = f(this.xVal, this.xPct, t));
                            }),
                            (y.prototype.fromStepping = function (t) {
                                return (function (t, e, i) {
                                    if (i >= 100) return t.slice(-1)[0];
                                    var n = h(i, e),
                                        o = t[n - 1],
                                        s = t[n],
                                        r = e[n - 1];
                                    return (function (t, e) {
                                        return (e * (t[1] - t[0])) / 100 + t[0];
                                    })([o, s], (i - r) * d(r, e[n]));
                                })(this.xVal, this.xPct, t);
                            }),
                            (y.prototype.getStep = function (t) {
                                return (t = g(this.xPct, this.xSteps, this.snap, t));
                            }),
                            (y.prototype.getNearbySteps = function (t) {
                                var e = h(t, this.xPct);
                                return {
                                    stepBefore: { startValue: this.xVal[e - 2], step: this.xNumSteps[e - 2], highestStep: this.xHighestCompleteStep[e - 2] },
                                    thisStep: { startValue: this.xVal[e - 1], step: this.xNumSteps[e - 1], highestStep: this.xHighestCompleteStep[e - 1] },
                                    stepAfter: { startValue: this.xVal[e - 0], step: this.xNumSteps[e - 0], highestStep: this.xHighestCompleteStep[e - 0] },
                                };
                            }),
                            (y.prototype.countStepDecimals = function () {
                                var t = this.xNumSteps.map(a);
                                return Math.max.apply(null, t);
                            }),
                            (y.prototype.convert = function (t) {
                                return this.getStep(this.toStepping(t));
                            });
                        var b = {
                            to: function (t) {
                                return void 0 !== t && t.toFixed(2);
                            },
                            from: Number,
                        };
                        function w(e) {
                            if (
                                (function (t) {
                                    return "object" == typeof t && "function" == typeof t.to && "function" == typeof t.from;
                                })(e)
                            )
                                return !0;
                            throw new Error("noUiSlider (" + t + "): 'format' requires 'to' and 'from' methods.");
                        }
                        function x(e, i) {
                            if (!n(i)) throw new Error("noUiSlider (" + t + "): 'step' is not numeric.");
                            e.singleStep = i;
                        }
                        function C(e, i) {
                            if ("object" != typeof i || Array.isArray(i)) throw new Error("noUiSlider (" + t + "): 'range' is not an object.");
                            if (void 0 === i.min || void 0 === i.max) throw new Error("noUiSlider (" + t + "): Missing 'min' or 'max' in 'range'.");
                            if (i.min === i.max) throw new Error("noUiSlider (" + t + "): 'range' 'min' and 'max' cannot be equal.");
                            e.spectrum = new y(i, e.snap, e.singleStep);
                        }
                        function k(e, i) {
                            if (((i = r(i)), !Array.isArray(i) || !i.length)) throw new Error("noUiSlider (" + t + "): 'start' option is incorrect.");
                            (e.handles = i.length), (e.start = i);
                        }
                        function S(e, i) {
                            if (((e.snap = i), "boolean" != typeof i)) throw new Error("noUiSlider (" + t + "): 'snap' option must be a boolean.");
                        }
                        function $(e, i) {
                            if (((e.animate = i), "boolean" != typeof i)) throw new Error("noUiSlider (" + t + "): 'animate' option must be a boolean.");
                        }
                        function T(e, i) {
                            if (((e.animationDuration = i), "number" != typeof i)) throw new Error("noUiSlider (" + t + "): 'animationDuration' option must be a number.");
                        }
                        function E(e, i) {
                            var n,
                                o = [!1];
                            if (("lower" === i ? (i = [!0, !1]) : "upper" === i && (i = [!1, !0]), !0 === i || !1 === i)) {
                                for (n = 1; n < e.handles; n++) o.push(i);
                                o.push(!1);
                            } else {
                                if (!Array.isArray(i) || !i.length || i.length !== e.handles + 1) throw new Error("noUiSlider (" + t + "): 'connect' option doesn't match handle count.");
                                o = i;
                            }
                            e.connect = o;
                        }
                        function O(e, i) {
                            switch (i) {
                                case "horizontal":
                                    e.ort = 0;
                                    break;
                                case "vertical":
                                    e.ort = 1;
                                    break;
                                default:
                                    throw new Error("noUiSlider (" + t + "): 'orientation' option is invalid.");
                            }
                        }
                        function A(e, i) {
                            if (!n(i)) throw new Error("noUiSlider (" + t + "): 'margin' option must be numeric.");
                            if (0 !== i && ((e.margin = e.spectrum.getMargin(i)), !e.margin)) throw new Error("noUiSlider (" + t + "): 'margin' option is only supported on linear sliders.");
                        }
                        function D(e, i) {
                            if (!n(i)) throw new Error("noUiSlider (" + t + "): 'limit' option must be numeric.");
                            if (((e.limit = e.spectrum.getMargin(i)), !e.limit || e.handles < 2)) throw new Error("noUiSlider (" + t + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
                        }
                        function I(e, i) {
                            if (!n(i) && !Array.isArray(i)) throw new Error("noUiSlider (" + t + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                            if (Array.isArray(i) && 2 !== i.length && !n(i[0]) && !n(i[1])) throw new Error("noUiSlider (" + t + "): 'padding' option must be numeric or array of exactly 2 numbers.");
                            if (0 !== i) {
                                if ((Array.isArray(i) || (i = [i, i]), (e.padding = [e.spectrum.getMargin(i[0]), e.spectrum.getMargin(i[1])]), !1 === e.padding[0] || !1 === e.padding[1]))
                                    throw new Error("noUiSlider (" + t + "): 'padding' option is only supported on linear sliders.");
                                if (e.padding[0] < 0 || e.padding[1] < 0) throw new Error("noUiSlider (" + t + "): 'padding' option must be a positive number(s).");
                                if (e.padding[0] + e.padding[1] >= 100) throw new Error("noUiSlider (" + t + "): 'padding' option must not exceed 100% of the range.");
                            }
                        }
                        function P(e, i) {
                            switch (i) {
                                case "ltr":
                                    e.dir = 0;
                                    break;
                                case "rtl":
                                    e.dir = 1;
                                    break;
                                default:
                                    throw new Error("noUiSlider (" + t + "): 'direction' option was not recognized.");
                            }
                        }
                        function N(e, i) {
                            if ("string" != typeof i) throw new Error("noUiSlider (" + t + "): 'behaviour' must be a string containing options.");
                            var n = i.indexOf("tap") >= 0,
                                o = i.indexOf("drag") >= 0,
                                s = i.indexOf("fixed") >= 0,
                                r = i.indexOf("snap") >= 0,
                                a = i.indexOf("hover") >= 0;
                            if (s) {
                                if (2 !== e.handles) throw new Error("noUiSlider (" + t + "): 'fixed' behaviour must be used with 2 handles");
                                A(e, e.start[1] - e.start[0]);
                            }
                            e.events = { tap: n || r, drag: o, fixed: s, snap: r, hover: a };
                        }
                        function L(e, i) {
                            if (!1 !== i)
                                if (!0 === i) {
                                    e.tooltips = [];
                                    for (var n = 0; n < e.handles; n++) e.tooltips.push(!0);
                                } else {
                                    if (((e.tooltips = r(i)), e.tooltips.length !== e.handles)) throw new Error("noUiSlider (" + t + "): must pass a formatter for all handles.");
                                    e.tooltips.forEach(function (e) {
                                        if ("boolean" != typeof e && ("object" != typeof e || "function" != typeof e.to)) throw new Error("noUiSlider (" + t + "): 'tooltips' must be passed a formatter or 'false'.");
                                    });
                                }
                        }
                        function j(t, e) {
                            (t.ariaFormat = e), w(e);
                        }
                        function H(t, e) {
                            (t.format = e), w(e);
                        }
                        function z(e, i) {
                            if ("string" != typeof i && !1 !== i) throw new Error("noUiSlider (" + t + "): 'cssPrefix' must be a string or `false`.");
                            e.cssPrefix = i;
                        }
                        function _(e, i) {
                            if ("object" != typeof i) throw new Error("noUiSlider (" + t + "): 'cssClasses' must be an object.");
                            if ("string" == typeof e.cssPrefix) for (var n in ((e.cssClasses = {}), i)) i.hasOwnProperty(n) && (e.cssClasses[n] = e.cssPrefix + i[n]);
                            else e.cssClasses = i;
                        }
                        function F(i) {
                            var n = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, ariaFormat: b, format: b },
                                o = {
                                    step: { r: !1, t: x },
                                    start: { r: !0, t: k },
                                    connect: { r: !0, t: E },
                                    direction: { r: !0, t: P },
                                    snap: { r: !1, t: S },
                                    animate: { r: !1, t: $ },
                                    animationDuration: { r: !1, t: T },
                                    range: { r: !0, t: C },
                                    orientation: { r: !1, t: O },
                                    margin: { r: !1, t: A },
                                    limit: { r: !1, t: D },
                                    padding: { r: !1, t: I },
                                    behaviour: { r: !0, t: N },
                                    ariaFormat: { r: !1, t: j },
                                    format: { r: !1, t: H },
                                    tooltips: { r: !1, t: L },
                                    cssPrefix: { r: !0, t: z },
                                    cssClasses: { r: !0, t: _ },
                                },
                                s = {
                                    connect: !1,
                                    direction: "ltr",
                                    behaviour: "tap",
                                    orientation: "horizontal",
                                    cssPrefix: "noUi-",
                                    cssClasses: {
                                        target: "target",
                                        base: "base",
                                        origin: "origin",
                                        handle: "handle",
                                        handleLower: "handle-lower",
                                        handleUpper: "handle-upper",
                                        horizontal: "horizontal",
                                        vertical: "vertical",
                                        background: "background",
                                        connect: "connect",
                                        connects: "connects",
                                        ltr: "ltr",
                                        rtl: "rtl",
                                        draggable: "draggable",
                                        drag: "state-drag",
                                        tap: "state-tap",
                                        active: "active",
                                        tooltip: "tooltip",
                                        pips: "pips",
                                        pipsHorizontal: "pips-horizontal",
                                        pipsVertical: "pips-vertical",
                                        marker: "marker",
                                        markerHorizontal: "marker-horizontal",
                                        markerVertical: "marker-vertical",
                                        markerNormal: "marker-normal",
                                        markerLarge: "marker-large",
                                        markerSub: "marker-sub",
                                        value: "value",
                                        valueHorizontal: "value-horizontal",
                                        valueVertical: "value-vertical",
                                        valueNormal: "value-normal",
                                        valueLarge: "value-large",
                                        valueSub: "value-sub",
                                    },
                                };
                            i.format && !i.ariaFormat && (i.ariaFormat = i.format),
                                Object.keys(o).forEach(function (r) {
                                    if (!e(i[r]) && void 0 === s[r]) {
                                        if (o[r].r) throw new Error("noUiSlider (" + t + "): '" + r + "' is required.");
                                        return !0;
                                    }
                                    o[r].t(n, e(i[r]) ? i[r] : s[r]);
                                }),
                                (n.pips = i.pips);
                            var r = document.createElement("div"),
                                a = void 0 !== r.style.msTransform,
                                l = void 0 !== r.style.transform;
                            n.transformRule = l ? "transform" : a ? "msTransform" : "webkitTransform";
                            return (
                                (n.style = [
                                    ["left", "top"],
                                    ["right", "bottom"],
                                ][n.dir][n.ort]),
                                n
                            );
                        }
                        function M(e, n, a) {
                            var d,
                                p,
                                h,
                                f,
                                g,
                                v,
                                m,
                                y,
                                b = window.navigator.pointerEnabled
                                    ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
                                    : window.navigator.msPointerEnabled
                                    ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" }
                                    : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" },
                                w =
                                    window.CSS &&
                                    CSS.supports &&
                                    CSS.supports("touch-action", "none") &&
                                    (function () {
                                        var t = !1;
                                        try {
                                            var e = Object.defineProperty({}, "passive", {
                                                get: function () {
                                                    t = !0;
                                                },
                                            });
                                            window.addEventListener("test", null, e);
                                        } catch (t) {}
                                        return t;
                                    })(),
                                x = e,
                                C = [],
                                k = [],
                                S = 0,
                                $ = n.spectrum,
                                T = [],
                                E = {},
                                O = e.ownerDocument,
                                A = O.documentElement,
                                D = O.body,
                                I = "rtl" === O.dir || 1 === n.ort ? 0 : 100;
                            function P(t, e) {
                                var i = O.createElement("div");
                                return e && l(i, e), t.appendChild(i), i;
                            }
                            function N(t, e) {
                                var i = P(t, n.cssClasses.origin),
                                    o = P(i, n.cssClasses.handle);
                                return (
                                    o.setAttribute("data-handle", e),
                                    o.setAttribute("tabindex", "0"),
                                    o.setAttribute("role", "slider"),
                                    o.setAttribute("aria-orientation", n.ort ? "vertical" : "horizontal"),
                                    0 === e ? l(o, n.cssClasses.handleLower) : e === n.handles - 1 && l(o, n.cssClasses.handleUpper),
                                    i
                                );
                            }
                            function L(t, e) {
                                return !!e && P(t, n.cssClasses.connect);
                            }
                            function j(t, e) {
                                return !!n.tooltips[e] && P(t.firstChild, n.cssClasses.tooltip);
                            }
                            function H(t, e, i) {
                                var o = O.createElement("div"),
                                    s = [n.cssClasses.valueNormal, n.cssClasses.valueLarge, n.cssClasses.valueSub],
                                    r = [n.cssClasses.markerNormal, n.cssClasses.markerLarge, n.cssClasses.markerSub],
                                    a = [n.cssClasses.valueHorizontal, n.cssClasses.valueVertical],
                                    c = [n.cssClasses.markerHorizontal, n.cssClasses.markerVertical];
                                function u(t, e) {
                                    var i = e === n.cssClasses.value,
                                        o = i ? s : r;
                                    return e + " " + (i ? a : c)[n.ort] + " " + o[t];
                                }
                                return (
                                    l(o, n.cssClasses.pips),
                                    l(o, 0 === n.ort ? n.cssClasses.pipsHorizontal : n.cssClasses.pipsVertical),
                                    Object.keys(t).forEach(function (s) {
                                        !(function (t, s) {
                                            s[1] = s[1] && e ? e(s[0], s[1]) : s[1];
                                            var r = P(o, !1);
                                            (r.className = u(s[1], n.cssClasses.marker)),
                                                (r.style[n.style] = t + "%"),
                                                s[1] && (((r = P(o, !1)).className = u(s[1], n.cssClasses.value)), r.setAttribute("data-value", s[0]), (r.style[n.style] = t + "%"), (r.innerText = i.to(s[0])));
                                        })(s, t[s]);
                                    }),
                                    o
                                );
                            }
                            function z() {
                                var t;
                                g && ((t = g).parentElement.removeChild(t), (g = null));
                            }
                            function _(e) {
                                z();
                                var i = e.mode,
                                    n = e.density || 1,
                                    o = e.filter || !1,
                                    s = (function (e, i, n) {
                                        if ("range" === e || "steps" === e) return $.xVal;
                                        if ("count" === e) {
                                            if (i < 2) throw new Error("noUiSlider (" + t + "): 'values' (>= 2) required for mode 'count'.");
                                            var o = i - 1,
                                                s = 100 / o;
                                            for (i = []; o--; ) i[o] = o * s;
                                            i.push(100), (e = "positions");
                                        }
                                        return "positions" === e
                                            ? i.map(function (t) {
                                                  return $.fromStepping(n ? $.getStep(t) : t);
                                              })
                                            : "values" === e
                                            ? n
                                                ? i.map(function (t) {
                                                      return $.fromStepping($.getStep($.toStepping(t)));
                                                  })
                                                : i
                                            : void 0;
                                    })(i, e.values || !1, e.stepped || !1),
                                    r = (function (t, e, i) {
                                        var n,
                                            o = {},
                                            s = $.xVal[0],
                                            r = $.xVal[$.xVal.length - 1],
                                            a = !1,
                                            l = !1,
                                            c = 0;
                                        return (
                                            (n = i.slice().sort(function (t, e) {
                                                return t - e;
                                            })),
                                            (i = n.filter(function (t) {
                                                return !this[t] && (this[t] = !0);
                                            }, {}))[0] !== s && (i.unshift(s), (a = !0)),
                                            i[i.length - 1] !== r && (i.push(r), (l = !0)),
                                            i.forEach(function (n, s) {
                                                var r,
                                                    u,
                                                    d,
                                                    p,
                                                    h,
                                                    f,
                                                    g,
                                                    v,
                                                    m,
                                                    y = n,
                                                    b = i[s + 1];
                                                if (("steps" === e && (r = $.xNumSteps[s]), r || (r = b - y), !1 !== y && void 0 !== b))
                                                    for (r = Math.max(r, 1e-7), u = y; u <= b; u = (u + r).toFixed(7) / 1) {
                                                        for (g = (h = (p = $.toStepping(u)) - c) / t, m = h / (v = Math.round(g)), d = 1; d <= v; d += 1) o[(c + d * m).toFixed(5)] = ["x", 0];
                                                        (f = i.indexOf(u) > -1 ? 1 : "steps" === e ? 2 : 0), !s && a && (f = 0), (u === b && l) || (o[p.toFixed(5)] = [u, f]), (c = p);
                                                    }
                                            }),
                                            o
                                        );
                                    })(n, i, s),
                                    a = e.format || { to: Math.round };
                                return (g = x.appendChild(H(r, o, a)));
                            }
                            function M() {
                                var t = d.getBoundingClientRect(),
                                    e = "offset" + ["Width", "Height"][n.ort];
                                return 0 === n.ort ? t.width || d[e] : t.height || d[e];
                            }
                            function R(t, e, i, o) {
                                var s = function (s) {
                                        return (
                                            !!(s = (function (t, e, i) {
                                                var n,
                                                    o,
                                                    s = 0 === t.type.indexOf("touch"),
                                                    r = 0 === t.type.indexOf("mouse"),
                                                    a = 0 === t.type.indexOf("pointer");
                                                0 === t.type.indexOf("MSPointer") && (a = !0);
                                                if (s) {
                                                    var l = function (t) {
                                                        return t.target === i || i.contains(t.target);
                                                    };
                                                    if ("touchstart" === t.type) {
                                                        var c = Array.prototype.filter.call(t.touches, l);
                                                        if (c.length > 1) return !1;
                                                        (n = c[0].pageX), (o = c[0].pageY);
                                                    } else {
                                                        var d = Array.prototype.find.call(t.changedTouches, l);
                                                        if (!d) return !1;
                                                        (n = d.pageX), (o = d.pageY);
                                                    }
                                                }
                                                (e = e || u(O)), (r || a) && ((n = t.clientX + e.x), (o = t.clientY + e.y));
                                                return (t.pageOffset = e), (t.points = [n, o]), (t.cursor = r || a), t;
                                            })(s, o.pageOffset, o.target || e)) &&
                                            !(x.hasAttribute("disabled") && !o.doNotReject) &&
                                            ((r = x),
                                            (a = n.cssClasses.tap),
                                            !((r.classList ? r.classList.contains(a) : new RegExp("\\b" + a + "\\b").test(r.className)) && !o.doNotReject) &&
                                                !(t === b.start && void 0 !== s.buttons && s.buttons > 1) &&
                                                (!o.hover || !s.buttons) &&
                                                (w || s.preventDefault(), (s.calcPoint = s.points[n.ort]), void i(s, o)))
                                        );
                                        var r, a;
                                    },
                                    r = [];
                                return (
                                    t.split(" ").forEach(function (t) {
                                        e.addEventListener(t, s, !!w && { passive: !0 }), r.push([t, s]);
                                    }),
                                    r
                                );
                            }
                            function q(t) {
                                var e,
                                    i,
                                    o,
                                    r,
                                    a,
                                    l,
                                    c =
                                        (100 *
                                            (t -
                                                ((e = d),
                                                (i = n.ort),
                                                (o = e.getBoundingClientRect()),
                                                (r = e.ownerDocument),
                                                (a = r.documentElement),
                                                (l = u(r)),
                                                /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (l.x = 0),
                                                i ? o.top + l.y - a.clientTop : o.left + l.x - a.clientLeft))) /
                                        M();
                                return (c = s(c)), n.dir ? 100 - c : c;
                            }
                            function B(t, e) {
                                "mouseout" === t.type && "HTML" === t.target.nodeName && null === t.relatedTarget && W(t, e);
                            }
                            function U(t, e) {
                                if (-1 === navigator.appVersion.indexOf("MSIE 9") && 0 === t.buttons && 0 !== e.buttonsProperty) return W(t, e);
                                var i = (n.dir ? -1 : 1) * (t.calcPoint - e.startCalcPoint);
                                tt(i > 0, (100 * i) / e.baseSize, e.locations, e.handleNumbers);
                            }
                            function W(t, e) {
                                e.handle && (c(e.handle, n.cssClasses.active), (S -= 1)),
                                    e.listeners.forEach(function (t) {
                                        A.removeEventListener(t[0], t[1]);
                                    }),
                                    0 === S && (c(x, n.cssClasses.drag), it(), t.cursor && ((D.style.cursor = ""), D.removeEventListener("selectstart", i))),
                                    e.handleNumbers.forEach(function (t) {
                                        K("change", t), K("set", t), K("end", t);
                                    });
                            }
                            function V(t, e) {
                                var o;
                                if (1 === e.handleNumbers.length) {
                                    var s = p[e.handleNumbers[0]];
                                    if (s.hasAttribute("disabled")) return !1;
                                    (o = s.children[0]), (S += 1), l(o, n.cssClasses.active);
                                }
                                t.stopPropagation();
                                var r = [],
                                    a = R(b.move, A, U, {
                                        target: t.target,
                                        handle: o,
                                        listeners: r,
                                        startCalcPoint: t.calcPoint,
                                        baseSize: M(),
                                        pageOffset: t.pageOffset,
                                        handleNumbers: e.handleNumbers,
                                        buttonsProperty: t.buttons,
                                        locations: C.slice(),
                                    }),
                                    c = R(b.end, A, W, { target: t.target, handle: o, listeners: r, doNotReject: !0, handleNumbers: e.handleNumbers }),
                                    u = R("mouseout", A, B, { target: t.target, handle: o, listeners: r, doNotReject: !0, handleNumbers: e.handleNumbers });
                                r.push.apply(r, a.concat(c, u)),
                                    t.cursor && ((D.style.cursor = getComputedStyle(t.target).cursor), p.length > 1 && l(x, n.cssClasses.drag), D.addEventListener("selectstart", i, !1)),
                                    e.handleNumbers.forEach(function (t) {
                                        K("start", t);
                                    });
                            }
                            function Q(t) {
                                t.stopPropagation();
                                var e = q(t.calcPoint),
                                    i = (function (t) {
                                        var e = 100,
                                            i = !1;
                                        return (
                                            p.forEach(function (n, o) {
                                                if (!n.hasAttribute("disabled")) {
                                                    var s = Math.abs(C[o] - t);
                                                    (s < e || (100 === s && 100 === e)) && ((i = o), (e = s));
                                                }
                                            }),
                                            i
                                        );
                                    })(e);
                                if (!1 === i) return !1;
                                n.events.snap || o(x, n.cssClasses.tap, n.animationDuration), nt(i, e, !0, !0), it(), K("slide", i, !0), K("update", i, !0), K("change", i, !0), K("set", i, !0), n.events.snap && V(t, { handleNumbers: [i] });
                            }
                            function X(t) {
                                var e = q(t.calcPoint),
                                    i = $.getStep(e),
                                    n = $.fromStepping(i);
                                Object.keys(E).forEach(function (t) {
                                    "hover" === t.split(".")[0] &&
                                        E[t].forEach(function (t) {
                                            t.call(f, n);
                                        });
                                });
                            }
                            function Y(t, e) {
                                (E[t] = E[t] || []),
                                    E[t].push(e),
                                    "update" === t.split(".")[0] &&
                                        p.forEach(function (t, e) {
                                            K("update", e);
                                        });
                            }
                            function K(t, e, i) {
                                Object.keys(E).forEach(function (o) {
                                    var s = o.split(".")[0];
                                    t === s &&
                                        E[o].forEach(function (t) {
                                            t.call(f, T.map(n.format.to), e, T.slice(), i || !1, C.slice());
                                        });
                                });
                            }
                            function G(t) {
                                return t + "%";
                            }
                            function J(t, e, i, o, r, a) {
                                return (
                                    p.length > 1 && (o && e > 0 && (i = Math.max(i, t[e - 1] + n.margin)), r && e < p.length - 1 && (i = Math.min(i, t[e + 1] - n.margin))),
                                    p.length > 1 && n.limit && (o && e > 0 && (i = Math.min(i, t[e - 1] + n.limit)), r && e < p.length - 1 && (i = Math.max(i, t[e + 1] - n.limit))),
                                    n.padding && (0 === e && (i = Math.max(i, n.padding[0])), e === p.length - 1 && (i = Math.min(i, 100 - n.padding[1]))),
                                    !((i = s((i = $.getStep(i)))) === t[e] && !a) && i
                                );
                            }
                            function Z(t, e) {
                                var i = n.ort;
                                return (i ? e : t) + ", " + (i ? t : e);
                            }
                            function tt(t, e, i, n) {
                                var o = i.slice(),
                                    s = [!t, t],
                                    r = [t, !t];
                                (n = n.slice()),
                                    t && n.reverse(),
                                    n.length > 1
                                        ? n.forEach(function (t, i) {
                                              var n = J(o, t, o[t] + e, s[i], r[i], !1);
                                              !1 === n ? (e = 0) : ((e = n - o[t]), (o[t] = n));
                                          })
                                        : (s = r = [!0]);
                                var a = !1;
                                n.forEach(function (t, n) {
                                    a = nt(t, i[t] + e, s[n], r[n]) || a;
                                }),
                                    a &&
                                        n.forEach(function (t) {
                                            K("update", t), K("slide", t);
                                        });
                            }
                            function et(t, e) {
                                return n.dir ? 100 - t - e : t;
                            }
                            function it() {
                                k.forEach(function (t) {
                                    var e = C[t] > 50 ? -1 : 1,
                                        i = 3 + (p.length + e * t);
                                    p[t].style.zIndex = i;
                                });
                            }
                            function nt(t, e, i, o) {
                                return (
                                    !1 !== (e = J(C, t, e, i, o, !1)) &&
                                    ((function (t, e) {
                                        (C[t] = e), (T[t] = $.fromStepping(e));
                                        var i = "translate(" + Z(G(et(e, 0) - I), "0") + ")";
                                        (p[t].style[n.transformRule] = i), ot(t), ot(t + 1);
                                    })(t, e),
                                    !0)
                                );
                            }
                            function ot(t) {
                                if (h[t]) {
                                    var e = 0,
                                        i = 100;
                                    0 !== t && (e = C[t - 1]), t !== h.length - 1 && (i = C[t]);
                                    var o = i - e,
                                        s = "translate(" + Z(G(et(e, o)), "0") + ")",
                                        r = "scale(" + Z(o / 100, "1") + ")";
                                    h[t].style[n.transformRule] = s + " " + r;
                                }
                            }
                            function st(t, e) {
                                var i = r(t),
                                    s = void 0 === C[0];
                                (e = void 0 === e || !!e),
                                    n.animate && !s && o(x, n.cssClasses.tap, n.animationDuration),
                                    k.forEach(function (t) {
                                        nt(
                                            t,
                                            (function (t, e) {
                                                return null === t || !1 === t || void 0 === t ? C[e] : ("number" == typeof t && (t = String(t)), (t = n.format.from(t)), !1 === (t = $.toStepping(t)) || isNaN(t) ? C[e] : t);
                                            })(i[t], t),
                                            !0,
                                            !1
                                        );
                                    }),
                                    k.forEach(function (t) {
                                        nt(t, C[t], !0, !0);
                                    }),
                                    it(),
                                    k.forEach(function (t) {
                                        K("update", t), null !== i[t] && e && K("set", t);
                                    });
                            }
                            function rt() {
                                var t = T.map(n.format.to);
                                return 1 === t.length ? t[0] : t;
                            }
                            return (
                                l((v = x), n.cssClasses.target),
                                0 === n.dir ? l(v, n.cssClasses.ltr) : l(v, n.cssClasses.rtl),
                                0 === n.ort ? l(v, n.cssClasses.horizontal) : l(v, n.cssClasses.vertical),
                                (d = P(v, n.cssClasses.base)),
                                (function (t, e) {
                                    var i = P(e, n.cssClasses.connects);
                                    (p = []), (h = []).push(L(i, t[0]));
                                    for (var o = 0; o < n.handles; o++) p.push(N(e, o)), (k[o] = o), h.push(L(i, t[o + 1]));
                                })(n.connect, d),
                                (m = n.events).fixed ||
                                    p.forEach(function (t, e) {
                                        R(b.start, t.children[0], V, { handleNumbers: [e] });
                                    }),
                                m.tap && R(b.start, d, Q, {}),
                                m.hover && R(b.move, d, X, { hover: !0 }),
                                m.drag &&
                                    h.forEach(function (t, e) {
                                        if (!1 !== t && 0 !== e && e !== h.length - 1) {
                                            var i = p[e - 1],
                                                o = p[e],
                                                s = [t];
                                            l(t, n.cssClasses.draggable),
                                                m.fixed && (s.push(i.children[0]), s.push(o.children[0])),
                                                s.forEach(function (t) {
                                                    R(b.start, t, V, { handles: [i, o], handleNumbers: [e - 1, e] });
                                                });
                                        }
                                    }),
                                st(n.start),
                                (f = {
                                    destroy: function () {
                                        for (var t in n.cssClasses) n.cssClasses.hasOwnProperty(t) && c(x, n.cssClasses[t]);
                                        for (; x.firstChild; ) x.removeChild(x.firstChild);
                                        delete x.noUiSlider;
                                    },
                                    steps: function () {
                                        return C.map(function (t, e) {
                                            var i = $.getNearbySteps(t),
                                                n = T[e],
                                                o = i.thisStep.step,
                                                s = null;
                                            !1 !== o && n + o > i.stepAfter.startValue && (o = i.stepAfter.startValue - n),
                                                (s = n > i.thisStep.startValue ? i.thisStep.step : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                                                100 === t ? (o = null) : 0 === t && (s = null);
                                            var r = $.countStepDecimals();
                                            return null !== o && !1 !== o && (o = Number(o.toFixed(r))), null !== s && !1 !== s && (s = Number(s.toFixed(r))), [s, o];
                                        });
                                    },
                                    on: Y,
                                    off: function (t) {
                                        var e = t && t.split(".")[0],
                                            i = e && t.substring(e.length);
                                        Object.keys(E).forEach(function (t) {
                                            var n = t.split(".")[0],
                                                o = t.substring(n.length);
                                            (e && e !== n) || (i && i !== o) || delete E[t];
                                        });
                                    },
                                    get: rt,
                                    set: st,
                                    reset: function (t) {
                                        st(n.start, t);
                                    },
                                    __moveHandles: function (t, e, i) {
                                        tt(t, e, C, i);
                                    },
                                    options: a,
                                    updateOptions: function (t, e) {
                                        var i = rt(),
                                            o = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];
                                        o.forEach(function (e) {
                                            void 0 !== t[e] && (a[e] = t[e]);
                                        });
                                        var s = F(a);
                                        o.forEach(function (e) {
                                            void 0 !== t[e] && (n[e] = s[e]);
                                        }),
                                            ($ = s.spectrum),
                                            (n.margin = s.margin),
                                            (n.limit = s.limit),
                                            (n.padding = s.padding),
                                            n.pips && _(n.pips),
                                            (C = []),
                                            st(t.start || i, e);
                                    },
                                    target: x,
                                    removePips: z,
                                    pips: _,
                                }),
                                n.pips && _(n.pips),
                                n.tooltips &&
                                    ((y = p.map(j)),
                                    Y("update", function (t, e, i) {
                                        if (y[e]) {
                                            var o = t[e];
                                            !0 !== n.tooltips[e] && (o = n.tooltips[e].to(i[e])), (y[e].innerHTML = o);
                                        }
                                    })),
                                Y("update", function (t, e, i, o, s) {
                                    k.forEach(function (t) {
                                        var e = p[t],
                                            o = J(C, t, 0, !0, !0, !0),
                                            r = J(C, t, 100, !0, !0, !0),
                                            a = s[t],
                                            l = n.ariaFormat.to(i[t]);
                                        e.children[0].setAttribute("aria-valuemin", o.toFixed(1)),
                                            e.children[0].setAttribute("aria-valuemax", r.toFixed(1)),
                                            e.children[0].setAttribute("aria-valuenow", a.toFixed(1)),
                                            e.children[0].setAttribute("aria-valuetext", l);
                                    });
                                }),
                                f
                            );
                        }
                        return {
                            version: t,
                            create: function (e, i) {
                                if (!e || !e.nodeName) throw new Error("noUiSlider (" + t + "): create requires a single element, got: " + e);
                                if (e.noUiSlider) throw new Error("noUiSlider (" + t + "): Slider was already initialized.");
                                var n = M(e, F(i), i);
                                return (e.noUiSlider = n), n;
                            },
                        };
                    })
                        ? n.apply(e, o)
                        : n) || (t.exports = s);
    },
});
$(".newsletter-close").on("click", function () {
    $.post(route("newsletter.removed"));
});

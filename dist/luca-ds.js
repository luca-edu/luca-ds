import { jsxs as _e, jsx as F, Fragment as Ar } from "react/jsx-runtime";
import * as g from "react";
import N, { isValidElement as am, version as im, useContext as ie, createContext as Zt, useRef as ve, useLayoutEffect as Ra, useEffect as Ke, useState as Qt, forwardRef as In, useMemo as je, Children as sm, memo as fr, startTransition as Ps } from "react";
import * as Rl from "react-dom";
import Ns, { createPortal as _l } from "react-dom";
function cm(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ta = { exports: {} };
var Ts;
function lm() {
  return Ts || (Ts = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (a = o(a, r(s)));
        }
        return a;
      }
      function r(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return n.apply(null, a);
        if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]"))
          return a.toString();
        var i = "";
        for (var s in a)
          t.call(a, s) && a[s] && (i = o(i, s));
        return i;
      }
      function o(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(ta)), ta.exports;
}
var um = lm();
const W = /* @__PURE__ */ cm(um);
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ue.apply(null, arguments);
}
function X(e) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, X(e);
}
var dm = Symbol.for("react.element"), fm = Symbol.for("react.transitional.element"), mm = Symbol.for("react.fragment");
function Ml(e) {
  return (
    // Base object type
    e && X(e) === "object" && // React Element type
    (e.$$typeof === dm || e.$$typeof === fm) && // React Fragment type
    e.type === mm
  );
}
function _a(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return N.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(_a(r)) : Ml(r) && r.props ? n = n.concat(_a(r.props.children, t)) : n.push(r));
  }), n;
}
var Ma = {}, Ri = [], gm = function(t) {
  Ri.push(t);
};
function Zn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ri.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function vm(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ri.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Il() {
  Ma = {};
}
function Al(e, t, n) {
  !t && !Ma[n] && (e(!1, n), Ma[n] = !0);
}
function $e(e, t) {
  Al(Zn, e, t);
}
function pm(e, t) {
  Al(vm, e, t);
}
$e.preMessage = gm;
$e.resetWarned = Il;
$e.noteOnce = pm;
function hm(e, t) {
  if (X(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (X(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Fl(e) {
  var t = hm(e, "string");
  return X(t) == "symbol" ? t : t + "";
}
function R(e, t, n) {
  return (t = Fl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Rs(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rs(Object(n), !0).forEach(function(r) {
      R(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rs(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function _s(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ym(e) {
  return e && X(e) === "object" && _s(e.nativeElement) ? e.nativeElement : _s(e) ? e : null;
}
function bm(e) {
  var t = ym(e);
  if (t)
    return t;
  if (e instanceof N.Component) {
    var n;
    return (n = Ns.findDOMNode) === null || n === void 0 ? void 0 : n.call(Ns, e);
  }
  return null;
}
var Fr = { exports: {} }, de = {};
var Ms;
function Cm() {
  if (Ms) return de;
  Ms = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var C = m.$$typeof;
      switch (C) {
        case e:
          switch (m = m.type, m) {
            case n:
            case o:
            case r:
            case l:
            case u:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case i:
                case c:
                case f:
                case d:
                case a:
                  return m;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return de.ContextConsumer = i, de.ContextProvider = a, de.Element = e, de.ForwardRef = c, de.Fragment = n, de.Lazy = f, de.Memo = d, de.Portal = t, de.Profiler = o, de.StrictMode = r, de.Suspense = l, de.SuspenseList = u, de.isAsyncMode = function() {
    return !1;
  }, de.isConcurrentMode = function() {
    return !1;
  }, de.isContextConsumer = function(m) {
    return h(m) === i;
  }, de.isContextProvider = function(m) {
    return h(m) === a;
  }, de.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, de.isForwardRef = function(m) {
    return h(m) === c;
  }, de.isFragment = function(m) {
    return h(m) === n;
  }, de.isLazy = function(m) {
    return h(m) === f;
  }, de.isMemo = function(m) {
    return h(m) === d;
  }, de.isPortal = function(m) {
    return h(m) === t;
  }, de.isProfiler = function(m) {
    return h(m) === o;
  }, de.isStrictMode = function(m) {
    return h(m) === r;
  }, de.isSuspense = function(m) {
    return h(m) === l;
  }, de.isSuspenseList = function(m) {
    return h(m) === u;
  }, de.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === u || m === p || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === a || m.$$typeof === i || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, de.typeOf = h, de;
}
var fe = {};
var Is;
function xm() {
  return Is || (Is = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, m = !1, C = !1, y = !1, x;
    x = Symbol.for("react.module.reference");
    function S(B) {
      return !!(typeof B == "string" || typeof B == "function" || B === n || B === o || y || B === r || B === l || B === u || C || B === p || v || h || m || typeof B == "object" && B !== null && (B.$$typeof === f || B.$$typeof === d || B.$$typeof === a || B.$$typeof === i || B.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      B.$$typeof === x || B.getModuleId !== void 0));
    }
    function b(B) {
      if (typeof B == "object" && B !== null) {
        var te = B.$$typeof;
        switch (te) {
          case e:
            var se = B.type;
            switch (se) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return se;
              default:
                var Qe = se && se.$$typeof;
                switch (Qe) {
                  case s:
                  case i:
                  case c:
                  case f:
                  case d:
                  case a:
                    return Qe;
                  default:
                    return te;
                }
            }
          case t:
            return te;
        }
      }
    }
    var w = i, E = a, $ = e, O = c, P = n, _ = f, I = d, A = t, M = o, j = r, k = l, L = u, G = !1, H = !1;
    function J(B) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ee(B) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(B) {
      return b(B) === i;
    }
    function Z(B) {
      return b(B) === a;
    }
    function Y(B) {
      return typeof B == "object" && B !== null && B.$$typeof === e;
    }
    function q(B) {
      return b(B) === c;
    }
    function U(B) {
      return b(B) === n;
    }
    function ae(B) {
      return b(B) === f;
    }
    function Pe(B) {
      return b(B) === d;
    }
    function Ce(B) {
      return b(B) === t;
    }
    function Se(B) {
      return b(B) === o;
    }
    function Ee(B) {
      return b(B) === r;
    }
    function V(B) {
      return b(B) === l;
    }
    function pe(B) {
      return b(B) === u;
    }
    fe.ContextConsumer = w, fe.ContextProvider = E, fe.Element = $, fe.ForwardRef = O, fe.Fragment = P, fe.Lazy = _, fe.Memo = I, fe.Portal = A, fe.Profiler = M, fe.StrictMode = j, fe.Suspense = k, fe.SuspenseList = L, fe.isAsyncMode = J, fe.isConcurrentMode = ee, fe.isContextConsumer = Q, fe.isContextProvider = Z, fe.isElement = Y, fe.isForwardRef = q, fe.isFragment = U, fe.isLazy = ae, fe.isMemo = Pe, fe.isPortal = Ce, fe.isProfiler = Se, fe.isStrictMode = Ee, fe.isSuspense = V, fe.isSuspenseList = pe, fe.isValidElementType = S, fe.typeOf = b;
  })()), fe;
}
var As;
function Sm() {
  return As || (As = 1, process.env.NODE_ENV === "production" ? Fr.exports = Cm() : Fr.exports = xm()), Fr.exports;
}
var na = Sm();
function Co(e, t, n) {
  var r = g.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var Em = Number(im.split(".")[0]), jl = function(t, n) {
  typeof t == "function" ? t(n) : X(t) === "object" && t && "current" in t && (t.current = n);
}, xo = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    n.forEach(function(i) {
      jl(i, a);
    });
  };
}, _i = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Co(function() {
    return xo.apply(void 0, n);
  }, n, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, Mi = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (kl(t) && Em >= 19)
    return !0;
  var o = na.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== na.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== na.ForwardRef);
};
function kl(e) {
  return /* @__PURE__ */ am(e) && !Ml(e);
}
var Ll = function(t) {
  if (t && kl(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function De(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Fs(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Fl(r.key), r);
  }
}
function Be(e, t, n) {
  return t && Fs(e.prototype, t), n && Fs(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Qn(e, t) {
  return Qn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Qn(e, t);
}
function tn(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Qn(e, t);
}
function Jn(e) {
  return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Jn(e);
}
function Ii() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ii = function() {
    return !!e;
  })();
}
function ne(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function wm(e, t) {
  if (t && (X(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return ne(e);
}
function nn(e) {
  var t = Ii();
  return function() {
    var n, r = Jn(e);
    if (t) {
      var o = Jn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return wm(this, n);
  };
}
function Ia(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function $m(e) {
  if (Array.isArray(e)) return Ia(e);
}
function Dl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Ai(e, t) {
  if (e) {
    if (typeof e == "string") return Ia(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ia(e, t) : void 0;
  }
}
function Om() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function z(e) {
  return $m(e) || Dl(e) || Ai(e) || Om();
}
var Bl = function(t) {
  return +setTimeout(t, 16);
}, Vl = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Bl = function(t) {
  return window.requestAnimationFrame(t);
}, Vl = function(t) {
  return window.cancelAnimationFrame(t);
});
var js = 0, So = /* @__PURE__ */ new Map();
function Hl(e) {
  So.delete(e);
}
var zt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  js += 1;
  var r = js;
  function o(a) {
    if (a === 0)
      Hl(r), t();
    else {
      var i = Bl(function() {
        o(a - 1);
      });
      So.set(r, i);
    }
  }
  return o(n), r;
};
zt.cancel = function(e) {
  var t = So.get(e);
  return Hl(e), Vl(t);
};
process.env.NODE_ENV !== "production" && (zt.ids = function() {
  return So;
});
function zl(e) {
  if (Array.isArray(e)) return e;
}
function Pm(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        c = !1;
      } else for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function Wl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D(e, t) {
  return zl(e) || Pm(e, t) || Ai(e, t) || Wl();
}
function er(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Je() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Aa(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var n = t; n; ) {
    if (n === e)
      return !0;
    n = n.parentNode;
  }
  return !1;
}
var ks = "data-rc-order", Ls = "data-rc-priority", Nm = "rc-util-key", Fa = /* @__PURE__ */ new Map();
function Gl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Nm;
}
function Eo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Tm(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Fi(e) {
  return Array.from((Fa.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function ql(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Je())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = Tm(r), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(ks, i), s && a && c.setAttribute(Ls, "".concat(a)), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
  var l = Eo(t), u = l.firstChild;
  if (r) {
    if (s) {
      var d = (t.styles || Fi(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(ks)))
          return !1;
        var p = Number(f.getAttribute(Ls) || 0);
        return a >= p;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Ul(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Eo(t);
  return (t.styles || Fi(n)).find(function(r) {
    return r.getAttribute(Gl(t)) === e;
  });
}
function tr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Ul(e, t);
  if (n) {
    var r = Eo(t);
    r.removeChild(n);
  }
}
function Rm(e, t) {
  var n = Fa.get(e);
  if (!n || !Aa(document, n)) {
    var r = ql("", t), o = r.parentNode;
    Fa.set(e, o), e.removeChild(r);
  }
}
function jt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Eo(n), o = Fi(r), a = T(T({}, n), {}, {
    styles: o
  });
  Rm(r, a);
  var i = Ul(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = ql(e, a);
  return u.setAttribute(Gl(a), t), u;
}
function _m(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function Ge(e, t) {
  if (e == null) return {};
  var n, r, o = _m(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function nr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(a, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = r.has(a);
    if ($e(!c, "Warning: There may be circular references"), c)
      return !1;
    if (a === i)
      return !0;
    if (n && s > 1)
      return !1;
    r.add(a);
    var l = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++)
        if (!o(a[u], i[u], l))
          return !1;
      return !0;
    }
    if (a && i && X(a) === "object" && X(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(f) {
        return o(a[f], i[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Mm = "%";
function ja(e) {
  return e.join(Mm);
}
var Im = /* @__PURE__ */ (function() {
  function e(t) {
    De(this, e), R(this, "instanceId", void 0), R(this, "cache", /* @__PURE__ */ new Map()), R(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Be(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(ja(n));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(n) {
      return this.cache.get(n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      return this.opUpdate(ja(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), a = r(o);
      a === null ? this.cache.delete(n) : this.cache.set(n, a);
    }
  }]), e;
})(), Am = ["children"], wn = "data-token-hash", yt = "data-css-hash", Fm = "data-cache-path", Bt = "__cssinjs_instance__";
function Xl() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(yt, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Bt] = o[Bt] || e, o[Bt] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(yt, "]"))).forEach(function(o) {
      var a = o.getAttribute(yt);
      if (r[a]) {
        if (o[Bt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[a] = !0;
    });
  }
  return new Im(e);
}
var Jt = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: Xl(),
  defaultCache: !0
}), jm = function(t) {
  var n = t.children, r = Ge(t, Am), o = g.useContext(Jt), a = Co(function() {
    var i = T({}, o);
    Object.keys(r).forEach(function(c) {
      var l = r[c];
      r[c] !== void 0 && (i[c] = l);
    });
    var s = r.cache;
    return i.cache = i.cache || Xl(), i.defaultCache = !s && o.defaultCache, i;
  }, [o, r], function(i, s) {
    return !nr(i[0], s[0], !0) || !nr(i[1], s[1], !0);
  });
  return /* @__PURE__ */ g.createElement(Jt.Provider, {
    value: a
  }, n);
};
function km(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var ji = /* @__PURE__ */ (function() {
  function e() {
    De(this, e), R(this, "cache", void 0), R(this, "keys", void 0), R(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Be(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return n.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var c;
          i = (c = i) === null || c === void 0 || (c = c.map) === null || c === void 0 ? void 0 : c.get(s);
        }
      }), (r = i) !== null && r !== void 0 && r.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var o = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(l, u) {
            var d = D(l, 2), f = d[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = D(a, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(n);
      }
      var c = this.cache;
      n.forEach(function(l, u) {
        if (u === n.length - 1)
          c.set(l, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var d = c.get(l);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : c.set(l, {
            map: /* @__PURE__ */ new Map()
          }), c = c.get(l).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var o = n.get(r[0]);
      if (r.length === 1) {
        var a;
        return o.map ? n.set(r[0], {
          map: o.map
        }) : n.delete(r[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, r.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && n.delete(r[0]), i;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !km(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
R(ji, "MAX_CACHE_SIZE", 20);
R(ji, "MAX_CACHE_OFFSET", 5);
var Ds = 0, Yl = /* @__PURE__ */ (function() {
  function e(t) {
    De(this, e), R(this, "derivatives", void 0), R(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Ds, t.length === 0 && Zn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Ds += 1;
  }
  return Be(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
})(), ra = new ji();
function so(e) {
  var t = Array.isArray(e) ? e : [e];
  return ra.has(t) || ra.set(t, new Yl(t)), ra.get(t);
}
var Lm = /* @__PURE__ */ new WeakMap(), oa = {};
function Dm(e, t) {
  for (var n = Lm, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(oa) || n.set(oa, e()), n.get(oa);
}
var Bs = /* @__PURE__ */ new WeakMap();
function Xn(e) {
  var t = Bs.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof Yl ? t += r.id : r && X(r) === "object" ? t += Xn(r) : t += r;
  }), t = er(t), Bs.set(e, t)), t;
}
function Vs(e, t) {
  return er("".concat(t, "_").concat(Xn(e)));
}
var ka = Je();
function re(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function co(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = T(T({}, r), {}, R(R({}, wn, t), yt, n)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Xr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Bm = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = D(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Kl = function(t, n, r) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = D(i, 2), u = l[0], d = l[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      a[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, p = Xr(u, r?.prefix);
      o[p] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), a[u] = "var(".concat(p, ")");
    }
  }), [a, Bm(o, n, {
    scope: r?.scope
  })];
}, Hs = process.env.NODE_ENV !== "test" && Je() ? g.useLayoutEffect : g.useEffect, $n = function(t, n) {
  var r = g.useRef(!0);
  Hs(function() {
    return t(r.current);
  }, n), Hs(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, zs = function(t, n) {
  $n(function(r) {
    if (!r)
      return t();
  }, n);
}, Vm = T({}, g), Ws = Vm.useInsertionEffect, Hm = function(t, n, r) {
  g.useMemo(t, r), $n(function() {
    return n(!0);
  }, r);
}, zm = Ws ? function(e, t, n) {
  return Ws(function() {
    return e(), t();
  }, n);
} : Hm, Wm = T({}, g), Gm = Wm.useInsertionEffect, qm = function(t) {
  var n = [], r = !1;
  function o(a) {
    if (r) {
      process.env.NODE_ENV !== "production" && Zn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(a);
  }
  return g.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, Um = function() {
  return function(t) {
    t();
  };
}, Xm = typeof Gm < "u" ? qm : Um;
function Ym() {
  return !1;
}
var La = !1;
function Km() {
  return La;
}
const Zm = process.env.NODE_ENV === "production" ? Ym : Km;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var jr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (jr && typeof jr.webpackHotUpdate == "function") {
    var Qm = jr.webpackHotUpdate;
    jr.webpackHotUpdate = function() {
      return La = !0, setTimeout(function() {
        La = !1;
      }, 0), Qm.apply(void 0, arguments);
    };
  }
}
function ki(e, t, n, r, o) {
  var a = g.useContext(Jt), i = a.cache, s = [e].concat(z(t)), c = ja(s), l = Xm([c]), u = Zm(), d = function(h) {
    i.opUpdate(c, function(m) {
      var C = m || [void 0, void 0], y = D(C, 2), x = y[0], S = x === void 0 ? 0 : x, b = y[1], w = b;
      process.env.NODE_ENV !== "production" && b && u && (r?.(w, u), w = null);
      var E = w || n(), $ = [S, E];
      return h ? h($) : $;
    });
  };
  g.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var f = i.opGet(c);
  process.env.NODE_ENV !== "production" && !f && (d(), f = i.opGet(c));
  var p = f[1];
  return zm(function() {
    o?.(p);
  }, function(v) {
    return d(function(h) {
      var m = D(h, 2), C = m[0], y = m[1];
      return v && C === 0 && o?.(p), [C + 1, y];
    }), function() {
      i.opUpdate(c, function(h) {
        var m = h || [], C = D(m, 2), y = C[0], x = y === void 0 ? 0 : y, S = C[1], b = x - 1;
        return b === 0 ? (l(function() {
          (v || !i.opGet(c)) && r?.(S, !1);
        }), null) : [x - 1, S];
      });
    };
  }, [c]), p;
}
var Jm = {}, eg = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qt = /* @__PURE__ */ new Map();
function tg(e) {
  qt.set(e, (qt.get(e) || 0) + 1);
}
function ng(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(wn, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Bt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var rg = 0;
function og(e, t) {
  qt.set(e, (qt.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  qt.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), qt.size - n.size > rg && n.forEach(function(r) {
    ng(r, t), qt.delete(r);
  });
}
var Zl = function(t, n, r, o) {
  var a = r.getDerivativeToken(t), i = T(T({}, a), n);
  return o && (i = o(i)), i;
}, Ql = "token";
function ag(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ie(Jt), o = r.cache.instanceId, a = r.container, i = n.salt, s = i === void 0 ? "" : i, c = n.override, l = c === void 0 ? Jm : c, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, p = Dm(function() {
    return Object.assign.apply(Object, [{}].concat(z(t)));
  }, t), v = Xn(p), h = Xn(l), m = f ? Xn(f) : "", C = ki(Ql, [s, e.id, v, h, m], function() {
    var y, x = d ? d(p, l, e) : Zl(p, l, e, u), S = T({}, x), b = "";
    if (f) {
      var w = Kl(x, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = D(w, 2);
      x = E[0], b = E[1];
    }
    var $ = Vs(x, s);
    x._tokenKey = $, S._tokenKey = Vs(S, s);
    var O = (y = f?.key) !== null && y !== void 0 ? y : $;
    x._themeKey = O, tg(O);
    var P = "".concat(eg, "-").concat(er($));
    return x._hashId = P, [x, P, S, b, f?.key || ""];
  }, function(y) {
    og(y[0]._themeKey, o);
  }, function(y) {
    var x = D(y, 4), S = x[0], b = x[3];
    if (f && b) {
      var w = jt(b, er("css-variables-".concat(S._themeKey)), {
        mark: yt,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      w[Bt] = o, w.setAttribute(wn, S._themeKey);
    }
  });
  return C;
}
var ig = function(t, n, r) {
  var o = D(t, 5), a = o[2], i = o[3], s = o[4], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, p = co(i, s, u, f, l);
  return [d, u, p];
}, sg = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Jl = "comm", eu = "rule", tu = "decl", cg = "@import", lg = "@namespace", ug = "@keyframes", dg = "@layer", nu = Math.abs, Li = String.fromCharCode;
function ru(e) {
  return e.trim();
}
function Yr(e, t, n) {
  return e.replace(t, n);
}
function fg(e, t, n) {
  return e.indexOf(t, n);
}
function bn(e, t) {
  return e.charCodeAt(t) | 0;
}
function On(e, t, n) {
  return e.slice(t, n);
}
function wt(e) {
  return e.length;
}
function mg(e) {
  return e.length;
}
function kr(e, t) {
  return t.push(e), e;
}
var wo = 1, Pn = 1, ou = 0, mt = 0, Ie = 0, An = "";
function Di(e, t, n, r, o, a, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: wo, column: Pn, length: i, return: "", siblings: s };
}
function gg() {
  return Ie;
}
function vg() {
  return Ie = mt > 0 ? bn(An, --mt) : 0, Pn--, Ie === 10 && (Pn = 1, wo--), Ie;
}
function bt() {
  return Ie = mt < ou ? bn(An, mt++) : 0, Pn++, Ie === 10 && (Pn = 1, wo++), Ie;
}
function Vt() {
  return bn(An, mt);
}
function Kr() {
  return mt;
}
function $o(e, t) {
  return On(An, e, t);
}
function rr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function pg(e) {
  return wo = Pn = 1, ou = wt(An = e), mt = 0, [];
}
function hg(e) {
  return An = "", e;
}
function aa(e) {
  return ru($o(mt - 1, Da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function yg(e) {
  for (; (Ie = Vt()) && Ie < 33; )
    bt();
  return rr(e) > 2 || rr(Ie) > 3 ? "" : " ";
}
function bg(e, t) {
  for (; --t && bt() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return $o(e, Kr() + (t < 6 && Vt() == 32 && bt() == 32));
}
function Da(e) {
  for (; bt(); )
    switch (Ie) {
      // ] ) " '
      case e:
        return mt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Da(Ie);
        break;
      // (
      case 40:
        e === 41 && Da(e);
        break;
      // \
      case 92:
        bt();
        break;
    }
  return mt;
}
function Cg(e, t) {
  for (; bt() && e + Ie !== 57; )
    if (e + Ie === 84 && Vt() === 47)
      break;
  return "/*" + $o(t, mt - 1) + "*" + Li(e === 47 ? e : bt());
}
function xg(e) {
  for (; !rr(Vt()); )
    bt();
  return $o(e, mt);
}
function Sg(e) {
  return hg(Zr("", null, null, null, [""], e = pg(e), 0, [0], e));
}
function Zr(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, f = 0, p = 0, v = 0, h = 1, m = 1, C = 1, y = 0, x = "", S = o, b = a, w = r, E = x; m; )
    switch (v = y, y = bt()) {
      // (
      case 40:
        if (v != 108 && bn(E, d - 1) == 58) {
          fg(E += Yr(aa(y), "&", "&\f"), "&\f", nu(l ? s[l - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += aa(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += yg(v);
        break;
      // \
      case 92:
        E += bg(Kr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Vt()) {
          case 42:
          case 47:
            kr(Eg(Cg(bt(), Kr()), t, n, c), c), (rr(v || 1) == 5 || rr(Vt() || 1) == 5) && wt(E) && On(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * h:
        s[l++] = wt(E) * C;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + u:
            C == -1 && (E = Yr(E, /\f/g, "")), p > 0 && (wt(E) - d || h === 0 && v === 47) && kr(p > 32 ? qs(E + ";", r, n, d - 1, c) : qs(Yr(E, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (kr(w = Gs(E, t, n, l, u, o, s, x, S = [], b = [], d, a), a), y === 123)
              if (u === 0)
                Zr(E, t, w, w, S, a, d, s, b);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (bn(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (bn(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Zr(e, w, w, r && kr(Gs(e, w, w, 0, 0, o, s, x, o, S = [], d, b), b), o, b, d, s, r ? S : b) : Zr(E, w, w, w, [""], b, 0, s, b);
              }
        }
        l = u = p = 0, h = C = 1, x = E = "", d = i;
        break;
      // :
      case 58:
        d = 1 + wt(E), p = v;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && vg() == 125)
            continue;
        }
        switch (E += Li(y), y * h) {
          // &
          case 38:
            C = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (wt(E) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Vt() === 45 && (E += aa(bt())), f = Vt(), u = d = wt(x = E += xg(Kr())), y++;
            break;
          // -
          case 45:
            v === 45 && wt(E) == 2 && (h = 0);
        }
    }
  return a;
}
function Gs(e, t, n, r, o, a, i, s, c, l, u, d) {
  for (var f = o - 1, p = o === 0 ? a : [""], v = mg(p), h = 0, m = 0, C = 0; h < r; ++h)
    for (var y = 0, x = On(e, f + 1, f = nu(m = i[h])), S = e; y < v; ++y)
      (S = ru(m > 0 ? p[y] + " " + x : Yr(x, /&\f/g, p[y]))) && (c[C++] = S);
  return Di(e, t, n, o === 0 ? eu : s, c, l, u, d);
}
function Eg(e, t, n, r) {
  return Di(e, t, n, Jl, Li(gg()), On(e, 2, -2), 0, r);
}
function qs(e, t, n, r, o) {
  return Di(e, t, n, tu, On(e, 0, r), On(e, r + 1, -1), r, o);
}
function Ba(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function wg(e, t, n, r) {
  switch (e.type) {
    case dg:
      if (e.children.length) break;
    case cg:
    case lg:
    case tu:
      return e.return = e.return || e.value;
    case Jl:
      return "";
    case ug:
      return e.return = e.value + "{" + Ba(e.children, r) + "}";
    case eu:
      if (!wt(e.value = e.props.join(","))) return "";
  }
  return wt(n = Ba(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function au(e, t) {
  var n = t.path, r = t.parentSelectors;
  $e(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var $g = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || a.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && au("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Og = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && au("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Us = "data-ant-cssinjs-cache-path", iu = "_FILE_STYLE__", Kt, su = !0;
function Pg() {
  if (!Kt && (Kt = {}, Je())) {
    var e = document.createElement("div");
    e.className = Us, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = D(a, 2), s = i[0], c = i[1];
      Kt[s] = c;
    });
    var n = document.querySelector("style[".concat(Us, "]"));
    if (n) {
      var r;
      su = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Ng(e) {
  return Pg(), !!Kt[e];
}
function Tg(e) {
  var t = Kt[e], n = null;
  if (t && Je())
    if (su)
      n = iu;
    else {
      var r = document.querySelector("style[".concat(yt, '="').concat(Kt[e], '"]'));
      r ? n = r.innerHTML : delete Kt[e];
    }
  return [n, t];
}
var cu = "_skip_check_", lu = "_multi_value_";
function Qr(e) {
  var t = Ba(Sg(e), wg);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Rg(e) {
  return X(e) === "object" && e && (cu in e || lu in e);
}
function Xs(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(z(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var _g = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, a = r.injectHash, i = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, p = n.linters, v = p === void 0 ? [] : p, h = "", m = {};
  function C(S) {
    var b = S.getName(s);
    if (!m[b]) {
      var w = e(S.style, n, {
        root: !1,
        parentSelectors: i
      }), E = D(w, 1), $ = E[0];
      m[b] = "@keyframes ".concat(S.getName(s)).concat($);
    }
  }
  function y(S) {
    var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach(function(w) {
      Array.isArray(w) ? y(w, b) : w && b.push(w);
    }), b;
  }
  var x = y(Array.isArray(t) ? t : [t]);
  return x.forEach(function(S) {
    var b = typeof S == "string" && !o ? {} : S;
    if (typeof b == "string")
      h += "".concat(b, `
`);
    else if (b._keyframe)
      C(b);
    else {
      var w = f.reduce(function(E, $) {
        var O;
        return ($ == null || (O = $.visit) === null || O === void 0 ? void 0 : O.call($, E)) || E;
      }, b);
      Object.keys(w).forEach(function(E) {
        var $ = w[E];
        if (X($) === "object" && $ && (E !== "animationName" || !$._keyframe) && !Rg($)) {
          var O = !1, P = E.trim(), _ = !1;
          (o || a) && s ? P.startsWith("@") ? O = !0 : P === "&" ? P = Xs("", s, u) : P = Xs(E, s, u) : o && !s && (P === "&" || P === "") && (P = "", _ = !0);
          var I = e($, n, {
            root: _,
            injectHash: O,
            parentSelectors: [].concat(z(i), [P])
          }), A = D(I, 2), M = A[0], j = A[1];
          m = T(T({}, m), j), h += "".concat(P).concat(M);
        } else {
          let G = function(H, J) {
            process.env.NODE_ENV !== "production" && (X($) !== "object" || !($ != null && $[cu])) && [$g, Og].concat(z(v)).forEach(function(Z) {
              return Z(H, J, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var ee = H.replace(/[A-Z]/g, function(Z) {
              return "-".concat(Z.toLowerCase());
            }), Q = J;
            !sg[H] && typeof Q == "number" && Q !== 0 && (Q = "".concat(Q, "px")), H === "animationName" && J !== null && J !== void 0 && J._keyframe && (C(J), Q = J.getName(s)), h += "".concat(ee, ":").concat(Q, ";");
          };
          var k, L = (k = $?.value) !== null && k !== void 0 ? k : $;
          X($) === "object" && $ !== null && $ !== void 0 && $[lu] && Array.isArray(L) ? L.forEach(function(H) {
            G(E, H);
          }) : G(E, L);
        }
      });
    }
  }), o ? c && (h && (h = "@layer ".concat(c.name, " {").concat(h, "}")), c.dependencies && (m["@layer ".concat(c.name)] = c.dependencies.map(function(S) {
    return "@layer ".concat(S, ", ").concat(c.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, m];
};
function uu(e, t) {
  return er("".concat(e.join("%")).concat(t));
}
function Mg() {
  return null;
}
var du = "style";
function Va(e, t) {
  var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = g.useContext(Jt), d = u.autoClear, f = u.mock, p = u.defaultCache, v = u.hashPriority, h = u.container, m = u.ssrInline, C = u.transformers, y = u.linters, x = u.cache, S = u.layer, b = n._tokenKey, w = [b];
  S && w.push("layer"), w.push.apply(w, z(r));
  var E = ka;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var $ = ki(
    du,
    w,
    // Create cache if needed
    function() {
      var A = w.join("|");
      if (Ng(A)) {
        var M = Tg(A), j = D(M, 2), k = j[0], L = j[1];
        if (k)
          return [k, b, L, {}, s, l];
      }
      var G = t(), H = _g(G, {
        hashId: o,
        hashPriority: v,
        layer: S ? a : void 0,
        path: r.join("-"),
        transformers: C,
        linters: y
      }), J = D(H, 2), ee = J[0], Q = J[1], Z = Qr(ee), Y = uu(w, Z);
      return [Z, b, Y, Q, s, l];
    },
    // Remove cache if no need
    function(A, M) {
      var j = D(A, 3), k = j[2];
      (M || d) && ka && tr(k, {
        mark: yt,
        attachTo: h
      });
    },
    // Effect: Inject style here
    function(A) {
      var M = D(A, 4), j = M[0];
      M[1];
      var k = M[2], L = M[3];
      if (E && j !== iu) {
        var G = {
          mark: yt,
          prepend: S ? !1 : "queue",
          attachTo: h,
          priority: l
        }, H = typeof i == "function" ? i() : i;
        H && (G.csp = {
          nonce: H
        });
        var J = [], ee = [];
        Object.keys(L).forEach(function(Z) {
          Z.startsWith("@layer") ? J.push(Z) : ee.push(Z);
        }), J.forEach(function(Z) {
          jt(Qr(L[Z]), "_layer-".concat(Z), T(T({}, G), {}, {
            prepend: !0
          }));
        });
        var Q = jt(j, k, G);
        Q[Bt] = x.instanceId, Q.setAttribute(wn, b), process.env.NODE_ENV !== "production" && Q.setAttribute(Fm, w.join("|")), ee.forEach(function(Z) {
          jt(Qr(L[Z]), "_effect-".concat(Z), G);
        });
      }
    }
  ), O = D($, 3), P = O[0], _ = O[1], I = O[2];
  return function(A) {
    var M;
    return !m || E || !p ? M = /* @__PURE__ */ g.createElement(Mg, null) : M = /* @__PURE__ */ g.createElement("style", ue({}, R(R({}, wn, _), yt, I), {
      dangerouslySetInnerHTML: {
        __html: P
      }
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, M, A);
  };
}
var Ig = function(t, n, r) {
  var o = D(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var p = a, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return p = co(a, i, s, v, f), c && Object.keys(c).forEach(function(h) {
    if (!n[h]) {
      n[h] = !0;
      var m = Qr(c[h]), C = co(m, i, "_effect-".concat(h), v, f);
      h.startsWith("@layer") ? p = C + p : p += C;
    }
  }), [u, s, p];
}, fu = "cssVar", Ag = function(t, n) {
  var r = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = ie(Jt), d = u.cache.instanceId, f = u.container, p = s._tokenKey, v = [].concat(z(t.path), [r, l, p]), h = ki(fu, v, function() {
    var m = n(), C = Kl(m, r, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), y = D(C, 2), x = y[0], S = y[1], b = uu(v, S);
    return [x, S, b, r];
  }, function(m) {
    var C = D(m, 3), y = C[2];
    ka && tr(y, {
      mark: yt,
      attachTo: f
    });
  }, function(m) {
    var C = D(m, 3), y = C[1], x = C[2];
    if (y) {
      var S = jt(y, x, {
        mark: yt,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      S[Bt] = d, S.setAttribute(wn, r);
    }
  });
  return h;
}, Fg = function(t, n, r) {
  var o = D(t, 4), a = o[1], i = o[2], s = o[3], c = r || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = co(a, s, i, d, l);
  return [u, i, f];
};
R(R(R({}, du, Ig), Ql, ig), fu, Fg);
var Ne = /* @__PURE__ */ (function() {
  function e(t, n) {
    De(this, e), R(this, "name", void 0), R(this, "style", void 0), R(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Be(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function dn(e) {
  return e.notSplit = !0, e;
}
dn(["borderTop", "borderBottom"]), dn(["borderTop"]), dn(["borderBottom"]), dn(["borderLeft", "borderRight"]), dn(["borderLeft"]), dn(["borderRight"]);
var Bi = /* @__PURE__ */ Zt({});
function jg(e) {
  return zl(e) || Dl(e) || Ai(e) || Wl();
}
function Pt(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function mu(e, t, n, r) {
  if (!t.length)
    return n;
  var o = jg(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = z(e) : s = T({}, e), r && n === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = mu(s[a], i, n, r), s;
}
function vt(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Pt(e, t.slice(0, -1)) ? e : mu(e, t, n, r);
}
function kg(e) {
  return X(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function Ys(e) {
  return Array.isArray(e) ? [] : {};
}
var Lg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function vn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = Ys(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = Pt(o, i), u = Array.isArray(l);
      if (u || kg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = Pt(r, i);
          u ? r = vt(r, i, []) : (!d || X(d) !== "object") && (r = vt(r, i, Ys(l))), Lg(l).forEach(function(f) {
            a([].concat(z(i), [f]), c);
          });
        }
      } else
        r = vt(r, i, l);
    }
    a([]);
  }), r;
}
function gu() {
}
let At = null;
function Dg() {
  At = null, Il();
}
let vu = gu;
process.env.NODE_ENV !== "production" && (vu = (e, t, n) => {
  $e(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Dg();
});
const Gt = vu, pu = /* @__PURE__ */ g.createContext({}), st = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(pu), n = (r, o, a) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = At;
        At || (At = {}), At[e] = At[e] || [], At[e].includes(a || "") || At[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", At);
      } else
        process.env.NODE_ENV !== "production" && Gt(r, e, a);
  };
  return n.deprecated = (r, o, a, i) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = gu, e;
}, Bg = /* @__PURE__ */ Zt(void 0);
var Vg = {
  // Options
  items_per_page: "/ page",
  jump_to: "Go to",
  jump_to_confirm: "confirm",
  page: "Page",
  // Pagination
  prev_page: "Previous Page",
  next_page: "Next Page",
  prev_5: "Previous 5 Pages",
  next_5: "Next 5 Pages",
  prev_3: "Previous 3 Pages",
  next_3: "Next 3 Pages",
  page_size: "Page Size"
}, Hg = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, zg = T(T({}, Hg), {}, {
  locale: "en_US",
  today: "Today",
  now: "Now",
  backToToday: "Back to today",
  ok: "OK",
  clear: "Clear",
  week: "Week",
  month: "Month",
  year: "Year",
  timeSelect: "select time",
  dateSelect: "select date",
  weekSelect: "Choose a week",
  monthSelect: "Choose a month",
  yearSelect: "Choose a year",
  decadeSelect: "Choose a decade",
  dateFormat: "M/D/YYYY",
  dateTimeFormat: "M/D/YYYY HH:mm:ss",
  previousMonth: "Previous month (PageUp)",
  nextMonth: "Next month (PageDown)",
  previousYear: "Last year (Control + left)",
  nextYear: "Next year (Control + right)",
  previousDecade: "Last decade",
  nextDecade: "Next decade",
  previousCentury: "Last century",
  nextCentury: "Next century"
});
const hu = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ks = {
  lang: Object.assign({
    placeholder: "Select date",
    yearPlaceholder: "Select year",
    quarterPlaceholder: "Select quarter",
    monthPlaceholder: "Select month",
    weekPlaceholder: "Select week",
    rangePlaceholder: ["Start date", "End date"],
    rangeYearPlaceholder: ["Start year", "End year"],
    rangeQuarterPlaceholder: ["Start quarter", "End quarter"],
    rangeMonthPlaceholder: ["Start month", "End month"],
    rangeWeekPlaceholder: ["Start week", "End week"]
  }, zg),
  timePickerLocale: Object.assign({}, hu)
}, rt = "${label} is not a valid ${type}", Wt = {
  locale: "en",
  Pagination: Vg,
  DatePicker: Ks,
  TimePicker: hu,
  Calendar: Ks,
  global: {
    placeholder: "Please select",
    close: "Close"
  },
  Table: {
    filterTitle: "Filter menu",
    filterConfirm: "OK",
    filterReset: "Reset",
    filterEmptyText: "No filters",
    filterCheckAll: "Select all items",
    filterSearchPlaceholder: "Search in filters",
    emptyText: "No data",
    selectAll: "Select current page",
    selectInvert: "Invert current page",
    selectNone: "Clear all data",
    selectionAll: "Select all data",
    sortTitle: "Sort",
    expand: "Expand row",
    collapse: "Collapse row",
    triggerDesc: "Click to sort descending",
    triggerAsc: "Click to sort ascending",
    cancelSort: "Click to cancel sorting"
  },
  Tour: {
    Next: "Next",
    Previous: "Previous",
    Finish: "Finish"
  },
  Modal: {
    okText: "OK",
    cancelText: "Cancel",
    justOkText: "OK"
  },
  Popconfirm: {
    okText: "OK",
    cancelText: "Cancel"
  },
  Transfer: {
    titles: ["", ""],
    searchPlaceholder: "Search here",
    itemUnit: "item",
    itemsUnit: "items",
    remove: "Remove",
    selectCurrent: "Select current page",
    removeCurrent: "Remove current page",
    selectAll: "Select all data",
    deselectAll: "Deselect all data",
    removeAll: "Remove all data",
    selectInvert: "Invert current page"
  },
  Upload: {
    uploading: "Uploading...",
    removeFile: "Remove file",
    uploadError: "Upload error",
    previewFile: "Preview file",
    downloadFile: "Download file"
  },
  Empty: {
    description: "No data"
  },
  Icon: {
    icon: "icon"
  },
  Text: {
    edit: "Edit",
    copy: "Copy",
    copied: "Copied",
    expand: "Expand",
    collapse: "Collapse"
  },
  Form: {
    optional: "(optional)",
    defaultValidateMessages: {
      default: "Field validation error for ${label}",
      required: "Please enter ${label}",
      enum: "${label} must be one of [${enum}]",
      whitespace: "${label} cannot be a blank character",
      date: {
        format: "${label} date format is invalid",
        parse: "${label} cannot be converted to a date",
        invalid: "${label} is an invalid date"
      },
      types: {
        string: rt,
        method: rt,
        array: rt,
        object: rt,
        number: rt,
        date: rt,
        boolean: rt,
        integer: rt,
        float: rt,
        regexp: rt,
        email: rt,
        url: rt,
        hex: rt
      },
      string: {
        len: "${label} must be ${len} characters",
        min: "${label} must be at least ${min} characters",
        max: "${label} must be up to ${max} characters",
        range: "${label} must be between ${min}-${max} characters"
      },
      number: {
        len: "${label} must be equal to ${len}",
        min: "${label} must be minimum ${min}",
        max: "${label} must be maximum ${max}",
        range: "${label} must be between ${min}-${max}"
      },
      array: {
        len: "Must be ${len} ${label}",
        min: "At least ${min} ${label}",
        max: "At most ${max} ${label}",
        range: "The amount of ${label} must be between ${min}-${max}"
      },
      pattern: {
        mismatch: "${label} does not match the pattern ${pattern}"
      }
    }
  },
  Image: {
    preview: "Preview"
  },
  QRCode: {
    expired: "QR code expired",
    refresh: "Refresh",
    scanned: "Scanned"
  },
  ColorPicker: {
    presetEmpty: "Empty",
    transparent: "Transparent",
    singleColor: "Single",
    gradientColor: "Gradient"
  }
};
let Jr = Object.assign({}, Wt.Modal), eo = [];
const Zs = () => eo.reduce((e, t) => Object.assign(Object.assign({}, e), t), Wt.Modal);
function Wg(e) {
  if (e) {
    const t = Object.assign({}, e);
    return eo.push(t), Jr = Zs(), () => {
      eo = eo.filter((n) => n !== t), Jr = Zs();
    };
  }
  Jr = Object.assign({}, Wt.Modal);
}
function yu() {
  return Jr;
}
const Vi = /* @__PURE__ */ Zt(void 0), Oo = (e, t) => {
  const n = g.useContext(Vi), r = g.useMemo(() => {
    var a;
    const i = t || Wt[e], s = (a = n?.[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), o = g.useMemo(() => {
    const a = n?.locale;
    return n?.exist && !a ? Wt.locale : a;
  }, [n]);
  return [r, o];
}, bu = "internalMark", Cu = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = st("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(r === bu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => Wg(t?.Modal), [t]);
  const o = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Vi.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Cu.displayName = "LocaleProvider");
const Hi = {
  blue: "#1677FF",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  /**
   * @deprecated Use magenta instead
   */
  pink: "#EB2F96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Nn = Object.assign(Object.assign({}, Hi), {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff4d4f",
  colorInfo: "#1677ff",
  colorLink: "",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
  fontFamilyCode: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseInQuint: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1,
  // Motion
  motion: !0
}), Le = Math.round;
function ia(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Qs = (e, t, n) => n === 0 ? e : e / 100;
function zn(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class xe {
  constructor(t) {
    R(this, "isValid", !0), R(this, "r", 0), R(this, "g", 0), R(this, "b", 0), R(this, "a", 1), R(this, "_h", void 0), R(this, "_s", void 0), R(this, "_l", void 0), R(this, "_v", void 0), R(this, "_max", void 0), R(this, "_min", void 0), R(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return r.startsWith(a);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof xe)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = zn(t.r), this.g = zn(t.g), this.b = zn(t.b), this.a = typeof t.a == "number" ? zn(t.a, 1) : 1;
    else if (n("hsl"))
      this.fromHsl(t);
    else if (n("hsv"))
      this.fromHsv(t);
    else
      throw new Error("@ant-design/fast-color: unsupported input " + JSON.stringify(t));
  }
  // ======================= Setter =======================
  setR(t) {
    return this._sc("r", t);
  }
  setG(t) {
    return this._sc("g", t);
  }
  setB(t) {
    return this._sc("b", t);
  }
  setA(t) {
    return this._sc("a", t, 1);
  }
  setHue(t) {
    const n = this.toHsv();
    return n.h = t, this._c(n);
  }
  // ======================= Getter =======================
  /**
   * Returns the perceived luminance of a color, from 0-1.
   * @see http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
   */
  getLuminance() {
    function t(a) {
      const i = a / 255;
      return i <= 0.03928 ? i / 12.92 : Math.pow((i + 0.055) / 1.055, 2.4);
    }
    const n = t(this.r), r = t(this.g), o = t(this.b);
    return 0.2126 * n + 0.7152 * r + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = Le(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
    }
    return this._h;
  }
  getSaturation() {
    if (typeof this._s > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._s = 0 : this._s = t / this.getMax();
    }
    return this._s;
  }
  getLightness() {
    return typeof this._l > "u" && (this._l = (this.getMax() + this.getMin()) / 510), this._l;
  }
  getValue() {
    return typeof this._v > "u" && (this._v = this.getMax() / 255), this._v;
  }
  /**
   * Returns the perceived brightness of the color, from 0-255.
   * Note: this is not the b of HSB
   * @see http://www.w3.org/TR/AERT#color-contrast
   */
  getBrightness() {
    return typeof this._brightness > "u" && (this._brightness = (this.r * 299 + this.g * 587 + this.b * 114) / 1e3), this._brightness;
  }
  // ======================== Func ========================
  darken(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const n = this.getHue(), r = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: n,
      s: r,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, n = 50) {
    const r = this._c(t), o = n / 100, a = (s) => (r[s] - this[s]) * o + this[s], i = {
      r: Le(a("r")),
      g: Le(a("g")),
      b: Le(a("b")),
      a: Le(a("a") * 100) / 100
    };
    return this._c(i);
  }
  /**
   * Mix the color with pure white, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return white.
   */
  tint(t = 10) {
    return this.mix({
      r: 255,
      g: 255,
      b: 255,
      a: 1
    }, t);
  }
  /**
   * Mix the color with pure black, from 0 to 100.
   * Providing 0 will do nothing, providing 100 will always return black.
   */
  shade(t = 10) {
    return this.mix({
      r: 0,
      g: 0,
      b: 0,
      a: 1
    }, t);
  }
  onBackground(t) {
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (a) => Le((this[a] * this.a + n[a] * n.a * (1 - this.a)) / r);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: r
    });
  }
  // ======================= Status =======================
  isDark() {
    return this.getBrightness() < 128;
  }
  isLight() {
    return this.getBrightness() >= 128;
  }
  // ======================== MISC ========================
  equals(t) {
    return this.r === t.r && this.g === t.g && this.b === t.b && this.a === t.a;
  }
  clone() {
    return this._c(this);
  }
  // ======================= Format =======================
  toHexString() {
    let t = "#";
    const n = (this.r || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const r = (this.g || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = Le(this.a * 255).toString(16);
      t += a.length === 2 ? a : "0" + a;
    }
    return t;
  }
  /** CSS support color pattern */
  toHsl() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      l: this.getLightness(),
      a: this.a
    };
  }
  /** CSS support color pattern */
  toHslString() {
    const t = this.getHue(), n = Le(this.getSaturation() * 100), r = Le(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${n}%,${r}%,${this.a})` : `hsl(${t},${n}%,${r}%)`;
  }
  /** Same as toHsb */
  toHsv() {
    return {
      h: this.getHue(),
      s: this.getSaturation(),
      v: this.getValue(),
      a: this.a
    };
  }
  toRgb() {
    return {
      r: this.r,
      g: this.g,
      b: this.b,
      a: this.a
    };
  }
  toRgbString() {
    return this.a !== 1 ? `rgba(${this.r},${this.g},${this.b},${this.a})` : `rgb(${this.r},${this.g},${this.b})`;
  }
  toString() {
    return this.toRgbString();
  }
  // ====================== Privates ======================
  /** Return a new FastColor object with one channel changed */
  _sc(t, n, r) {
    const o = this.clone();
    return o[t] = zn(n, r), o;
  }
  _c(t) {
    return new this.constructor(t);
  }
  getMax() {
    return typeof this._max > "u" && (this._max = Math.max(this.r, this.g, this.b)), this._max;
  }
  getMin() {
    return typeof this._min > "u" && (this._min = Math.min(this.r, this.g, this.b)), this._min;
  }
  fromHexString(t) {
    const n = t.replace("#", "");
    function r(o, a) {
      return parseInt(n[o] + n[a || o], 16);
    }
    n.length < 6 ? (this.r = r(0), this.g = r(1), this.b = r(2), this.a = n[3] ? r(3) / 255 : 1) : (this.r = r(0, 1), this.g = r(2, 3), this.b = r(4, 5), this.a = n[6] ? r(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: n,
    l: r,
    a: o
  }) {
    if (this._h = t % 360, this._s = n, this._l = r, this.a = typeof o == "number" ? o : 1, n <= 0) {
      const f = Le(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const d = r - l / 2;
    this.r = Le((a + d) * 255), this.g = Le((i + d) * 255), this.b = Le((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const a = Le(r * 255);
    if (this.r = a, this.g = a, this.b = a, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = Le(r * (1 - n) * 255), u = Le(r * (1 - n * c) * 255), d = Le(r * (1 - n * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = d;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = d, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = ia(t, Qs);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = ia(t, Qs);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = ia(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? Le(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var Lr = 2, Js = 0.16, Gg = 0.05, qg = 0.05, Ug = 0.15, xu = 5, Su = 4, Xg = [{
  index: 7,
  amount: 15
}, {
  index: 6,
  amount: 25
}, {
  index: 5,
  amount: 30
}, {
  index: 5,
  amount: 45
}, {
  index: 5,
  amount: 65
}, {
  index: 5,
  amount: 85
}, {
  index: 4,
  amount: 90
}, {
  index: 3,
  amount: 95
}, {
  index: 2,
  amount: 97
}, {
  index: 1,
  amount: 98
}];
function ec(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - Lr * t : Math.round(e.h) + Lr * t : r = n ? Math.round(e.h) + Lr * t : Math.round(e.h) - Lr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function tc(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Js * t : t === Su ? r = e.s + Js : r = e.s + Gg * t, r > 1 && (r = 1), n && t === xu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function nc(e, t, n) {
  var r;
  return n ? r = e.v + qg * t : r = e.v - Ug * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function en(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new xe(e), o = r.toHsv(), a = xu; a > 0; a -= 1) {
    var i = new xe({
      h: ec(o, a, !0),
      s: tc(o, a, !0),
      v: nc(o, a, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= Su; s += 1) {
    var c = new xe({
      h: ec(o, s),
      s: tc(o, s),
      v: nc(o, s)
    });
    n.push(c);
  }
  return t.theme === "dark" ? Xg.map(function(l) {
    var u = l.index, d = l.amount;
    return new xe(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var sa = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1677FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, Ha = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Ha.primary = Ha[5];
var za = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
za.primary = za[5];
var Wa = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Wa.primary = Wa[5];
var Ga = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ga.primary = Ga[5];
var qa = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
qa.primary = qa[5];
var Ua = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Ua.primary = Ua[5];
var Xa = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Xa.primary = Xa[5];
var Ya = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ya.primary = Ya[5];
var lo = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
lo.primary = lo[5];
var Ka = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ka.primary = Ka[5];
var Za = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Za.primary = Za[5];
var Qa = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Qa.primary = Qa[5];
var Ja = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ja.primary = Ja[5];
var ca = {
  red: Ha,
  volcano: za,
  orange: Wa,
  gold: Ga,
  yellow: qa,
  lime: Ua,
  green: Xa,
  cyan: Ya,
  blue: lo,
  geekblue: Ka,
  purple: Za,
  magenta: Qa,
  grey: Ja
};
function Eu(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: c,
    colorTextBase: l
  } = e, u = t(s), d = t(r), f = t(o), p = t(a), v = t(i), h = n(c, l), m = e.colorLink || e.colorInfo, C = t(m), y = new xe(p[1]).mix(new xe(p[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: u[1],
    colorPrimaryBgHover: u[2],
    colorPrimaryBorder: u[3],
    colorPrimaryBorderHover: u[4],
    colorPrimaryHover: u[5],
    colorPrimary: u[6],
    colorPrimaryActive: u[7],
    colorPrimaryTextHover: u[8],
    colorPrimaryText: u[9],
    colorPrimaryTextActive: u[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: p[1],
    colorErrorBgHover: p[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: p[3],
    colorErrorBorder: p[3],
    colorErrorBorderHover: p[4],
    colorErrorHover: p[5],
    colorError: p[6],
    colorErrorActive: p[7],
    colorErrorTextHover: p[8],
    colorErrorText: p[9],
    colorErrorTextActive: p[10],
    colorWarningBg: f[1],
    colorWarningBgHover: f[2],
    colorWarningBorder: f[3],
    colorWarningBorderHover: f[4],
    colorWarningHover: f[4],
    colorWarning: f[6],
    colorWarningActive: f[7],
    colorWarningTextHover: f[8],
    colorWarningText: f[9],
    colorWarningTextActive: f[10],
    colorInfoBg: v[1],
    colorInfoBgHover: v[2],
    colorInfoBorder: v[3],
    colorInfoBorderHover: v[4],
    colorInfoHover: v[4],
    colorInfo: v[6],
    colorInfoActive: v[7],
    colorInfoTextHover: v[8],
    colorInfoText: v[9],
    colorInfoTextActive: v[10],
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new xe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Yg = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Kg(e) {
  const {
    motionUnit: t,
    motionBase: n,
    borderRadius: r,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(n + t).toFixed(1)}s`,
    motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, Yg(r));
}
const wu = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function to(e) {
  return (e + 8) / e;
}
function Zg(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, a = e * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: to(n)
  }));
}
const $u = (e) => {
  const t = Zg(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], a = n[0], i = n[2], s = r[1], c = r[0], l = r[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: l,
    lineHeightSM: c,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(l * i),
    fontHeightSM: Math.round(c * a),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Qg(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
const lt = (e, t) => new xe(e).setA(t).toRgbString(), Wn = (e, t) => new xe(e).darken(t).toHexString(), Jg = (e) => {
  const t = en(e);
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[4],
    6: t[5],
    7: t[6],
    8: t[4],
    9: t[5],
    10: t[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, ev = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: lt(r, 0.88),
    colorTextSecondary: lt(r, 0.65),
    colorTextTertiary: lt(r, 0.45),
    colorTextQuaternary: lt(r, 0.25),
    colorFill: lt(r, 0.15),
    colorFillSecondary: lt(r, 0.06),
    colorFillTertiary: lt(r, 0.04),
    colorFillQuaternary: lt(r, 0.02),
    colorBgSolid: lt(r, 1),
    colorBgSolidHover: lt(r, 0.75),
    colorBgSolidActive: lt(r, 0.95),
    colorBgLayout: Wn(n, 4),
    colorBgContainer: Wn(n, 0),
    colorBgElevated: Wn(n, 0),
    colorBgSpotlight: lt(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Wn(n, 15),
    colorBorderSecondary: Wn(n, 6)
  };
};
function Po(e) {
  sa.pink = sa.magenta, ca.pink = ca.magenta;
  const t = Object.keys(Hi).map((n) => {
    const r = e[n] === sa[n] ? ca[n] : en(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o[`${n}${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Eu(e, {
    generateColorPalettes: Jg,
    generateNeutralColorPalettes: ev
  })), $u(e.fontSize)), Qg(e)), wu(e)), Kg(e));
}
const zi = so(Po), or = {
  token: Nn,
  override: {
    override: Nn
  },
  hashed: !0
}, Wi = /* @__PURE__ */ N.createContext(or), uo = "ant", No = "anticon", tv = (e, t) => t || (e ? `${uo}-${e}` : uo), be = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: tv,
  iconPrefixCls: No
}), {
  Consumer: mS
} = be, rc = {};
function Ou(e) {
  const t = g.useContext(be), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: rc,
    styles: rc
  }, a), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const nv = `-ant-${Date.now()}-${Math.random()}`;
function rv(e, t) {
  const n = {}, r = (i, s) => {
    let c = i.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, o = (i, s) => {
    const c = new xe(i), l = en(c.toRgbString());
    n[`${s}-color`] = r(c), n[`${s}-color-disabled`] = l[1], n[`${s}-color-hover`] = l[4], n[`${s}-color-active`] = l[6], n[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = l[0], n[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new xe(t.primaryColor), s = en(i.toRgbString());
    s.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(i, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (l) => l.setA(l.a * 0.12));
    const c = new xe(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function ov(e, t) {
  const n = rv(e, t);
  Je() ? jt(n, `${nv}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const fo = /* @__PURE__ */ g.createContext(!1), Pu = ({
  children: e,
  disabled: t
}) => {
  const n = g.useContext(fo);
  return /* @__PURE__ */ g.createElement(fo.Provider, {
    value: t ?? n
  }, e);
}, Tn = /* @__PURE__ */ g.createContext(void 0), av = ({
  children: e,
  size: t
}) => {
  const n = g.useContext(Tn);
  return /* @__PURE__ */ g.createElement(Tn.Provider, {
    value: t || n
  }, e);
};
function iv() {
  const e = ie(fo), t = ie(Tn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Nu = /* @__PURE__ */ Be(function e() {
  De(this, e);
}), Tu = "CALC_UNIT", sv = new RegExp(Tu, "g");
function la(e) {
  return typeof e == "number" ? "".concat(e).concat(Tu) : e;
}
var cv = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r, o) {
    var a;
    De(this, n), a = t.call(this), R(ne(a), "result", ""), R(ne(a), "unitlessCssVar", void 0), R(ne(a), "lowPriority", void 0);
    var i = X(r);
    return a.unitlessCssVar = o, r instanceof n ? a.result = "(".concat(r.result, ")") : i === "number" ? a.result = la(r) : i === "string" && (a.result = r), a;
  }
  return Be(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(la(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(la(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof n ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, s = i.unit, c = !0;
      return typeof s == "boolean" ? c = s : Array.from(this.unitlessCssVar).some(function(l) {
        return a.result.includes(l);
      }) && (c = !1), this.result = this.result.replace(sv, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(Nu), lv = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    var o;
    return De(this, n), o = t.call(this), R(ne(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Be(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof n ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof n ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), n;
})(Nu), uv = function(t, n) {
  var r = t === "css" ? cv : lv;
  return function(o) {
    return new r(o, n);
  };
}, oc = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Tt(e) {
  var t = g.useRef();
  t.current = e;
  var n = g.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function Rn(e) {
  var t = g.useRef(!1), n = g.useState(e), r = D(n, 2), o = r[0], a = r[1];
  g.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, c) {
    c && t.current || a(s);
  }
  return [o, i];
}
function ua(e) {
  return e !== void 0;
}
function dv(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = Rn(function() {
    return ua(o) ? o : ua(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = D(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, f = i ? i(d) : d, p = Tt(a), v = Rn([d]), h = D(v, 2), m = h[0], C = h[1];
  zs(function() {
    var x = m[0];
    l !== x && p(l, x);
  }, [m]), zs(function() {
    ua(o) || u(o);
  }, [o]);
  var y = Tt(function(x, S) {
    u(x, S), C([d], S);
  });
  return [f, y];
}
function ac(e, t, n, r) {
  var o = T({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var a = r.deprecatedTokens;
    a.forEach(function(s) {
      var c = D(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && $e(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var d;
        (d = o[u]) !== null && d !== void 0 || (o[u] = o?.[l]);
      }
    });
  }
  var i = T(T({}, n), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var Ru = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ei = !0;
function Ct() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Ru)
    return Object.assign.apply(Object, [{}].concat(t));
  ei = !1;
  var r = {};
  return t.forEach(function(o) {
    if (X(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(r, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), ei = !0, r;
}
var ic = {};
function fv() {
}
var mv = function(t) {
  var n, r = t, o = fv;
  return Ru && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (ei) {
        var c;
        (c = n) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    ic[i] = {
      global: Array.from(n),
      component: T(T({}, (c = ic[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function sc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(Ct(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function gv(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(a) {
        return re(a);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(a) {
        return re(a);
      }).join(","), ")");
    }
  };
}
var vv = 1e3 * 60 * 10, pv = /* @__PURE__ */ (function() {
  function e() {
    De(this, e), R(this, "map", /* @__PURE__ */ new Map()), R(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), R(this, "nextID", 0), R(this, "lastAccessBeat", /* @__PURE__ */ new Map()), R(this, "accessBeat", 0);
  }
  return Be(e, [{
    key: "set",
    value: function(n, r) {
      this.clear();
      var o = this.getCompositeKey(n);
      this.map.set(o, r), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(n) {
      var r = this.getCompositeKey(n), o = this.map.get(r);
      return this.lastAccessBeat.set(r, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(n) {
      var r = this, o = n.map(function(a) {
        return a && X(a) === "object" ? "obj_".concat(r.getObjectID(a)) : "".concat(X(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(n) {
      if (this.objectIDMap.has(n))
        return this.objectIDMap.get(n);
      var r = this.nextID;
      return this.objectIDMap.set(n, r), this.nextID += 1, r;
    }
  }, {
    key: "clear",
    value: function() {
      var n = this;
      if (this.accessBeat > 1e4) {
        var r = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          r - o > vv && (n.map.delete(a), n.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), cc = new pv();
function hv(e, t) {
  return N.useMemo(function() {
    var n = cc.get(t);
    if (n)
      return n;
    var r = e();
    return cc.set(t, r), r;
  }, t);
}
var yv = function() {
  return {};
};
function bv(e) {
  var t = e.useCSP, n = t === void 0 ? yv : t, r = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(f, p, v, h) {
    var m = Array.isArray(f) ? f[0] : f;
    function C($) {
      return "".concat(String(m)).concat($.slice(0, 1).toUpperCase()).concat($.slice(1));
    }
    var y = h?.unitless || {}, x = typeof s == "function" ? s(f) : {}, S = T(T({}, x), {}, R({}, C("zIndexPopup"), !0));
    Object.keys(y).forEach(function($) {
      S[C($)] = y[$];
    });
    var b = T(T({}, h), {}, {
      unitless: S,
      prefixToken: C
    }), w = u(f, p, v, b), E = l(m, v, b);
    return function($) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $, P = w($, O), _ = D(P, 2), I = _[1], A = E(O), M = D(A, 2), j = M[0], k = M[1];
      return [j, I, k];
    };
  }
  function l(f, p, v) {
    var h = v.unitless, m = v.injectStyle, C = m === void 0 ? !0 : m, y = v.prefixToken, x = v.ignore, S = function(E) {
      var $ = E.rootCls, O = E.cssVar, P = O === void 0 ? {} : O, _ = r(), I = _.realToken;
      return Ag({
        path: [f],
        prefix: P.prefix,
        key: P.key,
        unitless: h,
        ignore: x,
        token: I,
        scope: $
      }, function() {
        var A = sc(f, I, p), M = ac(f, I, A, {
          deprecatedTokens: v?.deprecatedTokens
        });
        return Object.keys(A).forEach(function(j) {
          M[y(j)] = M[j], delete M[j];
        }), M;
      }), null;
    }, b = function(E) {
      var $ = r(), O = $.cssVar;
      return [function(P) {
        return C && O ? /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(S, {
          rootCls: E,
          cssVar: O,
          component: f
        }), P) : P;
      }, O?.key];
    };
    return b;
  }
  function u(f, p, v) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(f) ? f : [f, f], C = D(m, 1), y = C[0], x = m.join("-"), S = e.layer || {
      name: "antd"
    };
    return function(b) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, E = r(), $ = E.theme, O = E.realToken, P = E.hashId, _ = E.token, I = E.cssVar, A = o(), M = A.rootPrefixCls, j = A.iconPrefixCls, k = n(), L = I ? "css" : "js", G = hv(function() {
        var Y = /* @__PURE__ */ new Set();
        return I && Object.keys(h.unitless || {}).forEach(function(q) {
          Y.add(Xr(q, I.prefix)), Y.add(Xr(q, oc(y, I.prefix)));
        }), uv(L, Y);
      }, [L, y, I?.prefix]), H = gv(L), J = H.max, ee = H.min, Q = {
        theme: $,
        token: _,
        hashId: P,
        nonce: function() {
          return k.nonce;
        },
        clientOnly: h.clientOnly,
        layer: S,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof a == "function" && Va(T(T({}, Q), {}, {
        clientOnly: !1,
        path: ["Shared", M]
      }), function() {
        return a(_, {
          prefix: {
            rootPrefixCls: M,
            iconPrefixCls: j
          },
          csp: k
        });
      });
      var Z = Va(T(T({}, Q), {}, {
        path: [x, b, j]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var Y = mv(_), q = Y.token, U = Y.flush, ae = sc(y, O, v), Pe = ".".concat(b), Ce = ac(y, O, ae, {
          deprecatedTokens: h.deprecatedTokens
        });
        I && ae && X(ae) === "object" && Object.keys(ae).forEach(function(pe) {
          ae[pe] = "var(".concat(Xr(pe, oc(y, I.prefix)), ")");
        });
        var Se = Ct(q, {
          componentCls: Pe,
          prefixCls: b,
          iconCls: ".".concat(j),
          antCls: ".".concat(M),
          calc: G,
          // @ts-ignore
          max: J,
          // @ts-ignore
          min: ee
        }, I ? ae : Ce), Ee = p(Se, {
          hashId: P,
          prefixCls: b,
          rootPrefixCls: M,
          iconPrefixCls: j
        });
        U(y, Ce);
        var V = typeof i == "function" ? i(Se, b, w, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : V, Ee];
      });
      return [Z, P];
    };
  }
  function d(f, p, v) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = u(f, p, v, T({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), C = function(x) {
      var S = x.prefixCls, b = x.rootCls, w = b === void 0 ? S : b;
      return m(S, w), null;
    };
    return process.env.NODE_ENV !== "production" && (C.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), C;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: d,
    genComponentStyleHook: u
  };
}
const Gi = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], Cv = "5.28.1";
function da(e) {
  return e >= 0 && e <= 255;
}
function qn(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new xe(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: c
  } = new xe(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - i * (1 - l)) / l), d = Math.round((r - s * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (da(u) && da(d) && da(f))
      return new xe({
        r: u,
        g: d,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new xe({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var xv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function qi(e) {
  const {
    override: t
  } = e, n = xv(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Nn).forEach((f) => {
    delete r[f];
  });
  const o = Object.assign(Object.assign({}, n), r), a = 480, i = 576, s = 768, c = 992, l = 1200, u = 1600;
  return o.motion === !1 && (o.motionDurationFast = "0s", o.motionDurationMid = "0s", o.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: qn(o.colorBorderSecondary, o.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: o.colorTextQuaternary,
    colorTextDisabled: o.colorTextQuaternary,
    colorTextHeading: o.colorText,
    colorTextLabel: o.colorTextSecondary,
    colorTextDescription: o.colorTextTertiary,
    colorTextLightSolid: o.colorWhite,
    colorHighlight: o.colorError,
    colorBgTextHover: o.colorFillSecondary,
    colorBgTextActive: o.colorFill,
    colorIcon: o.colorTextTertiary,
    colorIconHover: o.colorText,
    colorErrorOutline: qn(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: qn(o.colorWarningBg, o.colorBgContainer),
    // Font
    fontSizeIcon: o.fontSizeSM,
    // Line
    lineWidthFocus: o.lineWidth * 3,
    // Control
    lineWidth: o.lineWidth,
    controlOutlineWidth: o.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: o.controlHeight / 2,
    controlItemBgHover: o.colorFillTertiary,
    controlItemBgActive: o.colorPrimaryBg,
    controlItemBgActiveHover: o.colorPrimaryBgHover,
    controlItemBgActiveDisabled: o.colorFill,
    controlTmpOutline: o.colorFillQuaternary,
    controlOutline: qn(o.colorPrimaryBg, o.colorBgContainer),
    lineType: o.lineType,
    borderRadius: o.borderRadius,
    borderRadiusXS: o.borderRadiusXS,
    borderRadiusSM: o.borderRadiusSM,
    borderRadiusLG: o.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: o.sizeXXS,
    paddingXS: o.sizeXS,
    paddingSM: o.sizeSM,
    padding: o.size,
    paddingMD: o.sizeMD,
    paddingLG: o.sizeLG,
    paddingXL: o.sizeXL,
    paddingContentHorizontalLG: o.sizeLG,
    paddingContentVerticalLG: o.sizeMS,
    paddingContentHorizontal: o.sizeMS,
    paddingContentVertical: o.sizeSM,
    paddingContentHorizontalSM: o.size,
    paddingContentVerticalSM: o.sizeXS,
    marginXXS: o.sizeXXS,
    marginXS: o.sizeXS,
    marginSM: o.sizeSM,
    margin: o.size,
    marginMD: o.sizeMD,
    marginLG: o.sizeLG,
    marginXL: o.sizeXL,
    marginXXL: o.sizeXXL,
    boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: a,
    screenXSMin: a,
    screenXSMax: i - 1,
    screenSM: i,
    screenSMMin: i,
    screenSMMax: s - 1,
    screenMD: s,
    screenMDMin: s,
    screenMDMax: c - 1,
    screenLG: c,
    screenLGMin: c,
    screenLGMax: l - 1,
    screenXL: l,
    screenXLMin: l,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new xe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new xe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new xe("rgba(0, 0, 0, 0.09)").toRgbString()}
    `,
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }), r);
}
var lc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const _u = {
  lineHeight: !0,
  lineHeightSM: !0,
  lineHeightLG: !0,
  lineHeightHeading1: !0,
  lineHeightHeading2: !0,
  lineHeightHeading3: !0,
  lineHeightHeading4: !0,
  lineHeightHeading5: !0,
  opacityLoading: !0,
  fontWeightStrong: !0,
  zIndexPopupBase: !0,
  zIndexBase: !0,
  opacityImage: !0
}, Sv = {
  motionBase: !0,
  motionUnit: !0
}, Ev = {
  screenXS: !0,
  screenXSMin: !0,
  screenXSMax: !0,
  screenSM: !0,
  screenSMMin: !0,
  screenSMMax: !0,
  screenMD: !0,
  screenMDMin: !0,
  screenMDMax: !0,
  screenLG: !0,
  screenLGMin: !0,
  screenLGMax: !0,
  screenXL: !0,
  screenXLMin: !0,
  screenXLMax: !0,
  screenXXL: !0,
  screenXXLMin: !0
}, Mu = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, a = lc(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = qi(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = lc(c, ["theme"]);
    let d = u;
    l && (d = Mu(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = d;
  }), i;
};
function _t() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = N.useContext(Wi), a = `${Cv}-${t || ""}`, i = n || zi, [s, c, l] = ag(i, [Nn, e], {
    salt: a,
    override: r,
    getComputedToken: Mu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: qi,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: _u,
      ignore: Sv,
      preserve: Ev
    }
  });
  return [i, l, t ? c : "", s, o];
}
const Ui = (e, t = !1) => ({
  boxSizing: "border-box",
  margin: 0,
  padding: 0,
  color: e.colorText,
  fontSize: e.fontSize,
  // font-variant: @font-variant-base;
  lineHeight: e.lineHeight,
  listStyle: "none",
  // font-feature-settings: @font-feature-settings-base;
  fontFamily: t ? "inherit" : e.fontFamily
}), Iu = () => ({
  display: "inline-flex",
  alignItems: "center",
  color: "inherit",
  fontStyle: "normal",
  lineHeight: 0,
  textAlign: "center",
  textTransform: "none",
  // for SVG icon, see https://blog.prototypr.io/align-svg-icons-to-text-and-say-goodbye-to-font-icons-d44b3d7b26b4
  verticalAlign: "-0.125em",
  textRendering: "optimizeLegibility",
  "-webkit-font-smoothing": "antialiased",
  "-moz-osx-font-smoothing": "grayscale",
  "> *": {
    lineHeight: 1
  },
  svg: {
    display: "inline-block"
  }
}), wv = () => ({
  // https://github.com/ant-design/ant-design/issues/21301#issuecomment-583955229
  "&::before": {
    display: "table",
    content: '""'
  },
  "&::after": {
    // https://github.com/ant-design/ant-design/issues/21864
    display: "table",
    clear: "both",
    content: '""'
  }
}), $v = (e) => ({
  a: {
    color: e.colorLink,
    textDecoration: e.linkDecoration,
    backgroundColor: "transparent",
    // remove the gray background on active links in IE 10.
    outline: "none",
    cursor: "pointer",
    transition: `color ${e.motionDurationSlow}`,
    "-webkit-text-decoration-skip": "objects",
    // remove gaps in links underline in iOS 8+ and Safari 8+.
    "&:hover": {
      color: e.colorLinkHover
    },
    "&:active": {
      color: e.colorLinkActive
    },
    "&:active, &:hover": {
      textDecoration: e.linkHoverDecoration,
      outline: 0
    },
    // https://github.com/ant-design/ant-design/issues/22503
    "&:focus": {
      textDecoration: e.linkFocusDecoration,
      outline: 0
    },
    "&[disabled]": {
      color: e.colorTextDisabled,
      cursor: "not-allowed"
    }
  }
}), Ov = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = n ? `.${n}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return r !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [o]: i
    })
  };
}, Pv = (e, t) => ({
  outline: `${re(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Xi = (e, t) => ({
  "&:focus-visible": Pv(e, t)
}), Au = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Iu()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: rn,
  genComponentStyleHook: Nv,
  genSubStyleComponent: Yi
} = bv({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = ie(be);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = _t();
    return {
      theme: e,
      realToken: t,
      hashId: n,
      token: r,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = ie(be);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = $v(e);
    return [r, {
      "&": r
    }, Au((n = t?.prefix.iconPrefixCls) !== null && n !== void 0 ? n : No)];
  },
  getCommonStyle: Ov,
  getCompUnitless: () => _u
}), Tv = (e, t) => {
  const [n, r] = _t();
  return Va({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => Au(e));
}, Rv = Object.assign({}, g), {
  useId: uc
} = Rv, _v = () => "", Mv = typeof uc > "u" ? _v : uc;
function Iv(e, t, n) {
  var r, o;
  const a = st("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, or), {
    hashed: (r = t?.hashed) !== null && r !== void 0 ? r : or.hashed,
    cssVar: t?.cssVar
  }) : t, c = Mv();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && a(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Co(() => {
    var l, u;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((v) => {
      d[v] = Object.assign(Object.assign({}, d[v]), e.components[v]);
    });
    const f = `css-var-${c.replace(/:/g, "")}`, p = ((l = i.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n?.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: d,
      cssVar: p
    });
  }, [i, s], (l, u) => l.some((d, f) => {
    const p = u[f];
    return !nr(d, p, !0);
  }));
}
var Av = ["children"], Fu = /* @__PURE__ */ g.createContext({});
function Fv(e) {
  var t = e.children, n = Ge(e, Av);
  return /* @__PURE__ */ g.createElement(Fu.Provider, {
    value: n
  }, t);
}
var jv = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n() {
    return De(this, n), t.apply(this, arguments);
  }
  return Be(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(g.Component);
function kv(e) {
  var t = g.useReducer(function(s) {
    return s + 1;
  }, 0), n = D(t, 2), r = n[1], o = g.useRef(e), a = Tt(function() {
    return o.current;
  }), i = Tt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, r();
  });
  return [a, i];
}
var Dt = "none", Dr = "appear", Br = "enter", Vr = "leave", dc = "none", pt = "prepare", pn = "start", hn = "active", Ki = "end", ju = "prepared";
function fc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Lv(e, t) {
  var n = {
    animationend: fc("Animation", "AnimationEnd"),
    transitionend: fc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Dv = Lv(Je(), typeof window < "u" ? window : {}), ku = {};
if (Je()) {
  var Bv = document.createElement("div");
  ku = Bv.style;
}
var Hr = {};
function Lu(e) {
  if (Hr[e])
    return Hr[e];
  var t = Dv[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in ku)
        return Hr[e] = t[a], Hr[e];
    }
  return "";
}
var Du = Lu("animationend"), Bu = Lu("transitionend"), Vu = !!(Du && Bu), mc = Du || "animationend", gc = Bu || "transitionend";
function vc(e, t) {
  if (!e) return null;
  if (X(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Vv = (function(e) {
  var t = ve();
  function n(o) {
    o && (o.removeEventListener(gc, e), o.removeEventListener(mc, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(gc, e), o.addEventListener(mc, e), t.current = o);
  }
  return g.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var Hu = Je() ? Ra : Ke;
const Hv = (function() {
  var e = g.useRef(null);
  function t() {
    zt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = zt(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = a;
  }
  return g.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
});
var zv = [pt, pn, hn, Ki], Wv = [pt, ju], zu = !1, Gv = !0;
function Wu(e) {
  return e === hn || e === Ki;
}
const qv = (function(e, t, n) {
  var r = Rn(dc), o = D(r, 2), a = o[0], i = o[1], s = Hv(), c = D(s, 2), l = c[0], u = c[1];
  function d() {
    i(pt, !0);
  }
  var f = t ? Wv : zv;
  return Hu(function() {
    if (a !== dc && a !== Ki) {
      var p = f.indexOf(a), v = f[p + 1], h = n(a);
      h === zu ? i(v, !0) : v && l(function(m) {
        function C() {
          m.isCanceled() || i(v, !0);
        }
        h === !0 ? C() : Promise.resolve(h).then(C);
      });
    }
  }, [e, a]), g.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, a];
});
function Uv(e, t, n, r) {
  var o = r.motionEnter, a = o === void 0 ? !0 : o, i = r.motionAppear, s = i === void 0 ? !0 : i, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, p = r.onEnterPrepare, v = r.onLeavePrepare, h = r.onAppearStart, m = r.onEnterStart, C = r.onLeaveStart, y = r.onAppearActive, x = r.onEnterActive, S = r.onLeaveActive, b = r.onAppearEnd, w = r.onEnterEnd, E = r.onLeaveEnd, $ = r.onVisibleChanged, O = Rn(), P = D(O, 2), _ = P[0], I = P[1], A = kv(Dt), M = D(A, 2), j = M[0], k = M[1], L = Rn(null), G = D(L, 2), H = G[0], J = G[1], ee = j(), Q = ve(!1), Z = ve(null);
  function Y() {
    return n();
  }
  var q = ve(!1);
  function U() {
    k(Dt), J(null, !0);
  }
  var ae = Tt(function(we) {
    var Oe = j();
    if (Oe !== Dt) {
      var qe = Y();
      if (!(we && !we.deadline && we.target !== qe)) {
        var et = q.current, Ue;
        Oe === Dr && et ? Ue = b?.(qe, we) : Oe === Br && et ? Ue = w?.(qe, we) : Oe === Vr && et && (Ue = E?.(qe, we)), et && Ue !== !1 && U();
      }
    }
  }), Pe = Vv(ae), Ce = D(Pe, 1), Se = Ce[0], Ee = function(Oe) {
    switch (Oe) {
      case Dr:
        return R(R(R({}, pt, f), pn, h), hn, y);
      case Br:
        return R(R(R({}, pt, p), pn, m), hn, x);
      case Vr:
        return R(R(R({}, pt, v), pn, C), hn, S);
      default:
        return {};
    }
  }, V = g.useMemo(function() {
    return Ee(ee);
  }, [ee]), pe = qv(ee, !e, function(we) {
    if (we === pt) {
      var Oe = V[pt];
      return Oe ? Oe(Y()) : zu;
    }
    if (se in V) {
      var qe;
      J(((qe = V[se]) === null || qe === void 0 ? void 0 : qe.call(V, Y(), null)) || null);
    }
    return se === hn && ee !== Dt && (Se(Y()), u > 0 && (clearTimeout(Z.current), Z.current = setTimeout(function() {
      ae({
        deadline: !0
      });
    }, u))), se === ju && U(), Gv;
  }), B = D(pe, 2), te = B[0], se = B[1], Qe = Wu(se);
  q.current = Qe;
  var ye = ve(null);
  Hu(function() {
    if (!(Q.current && ye.current === t)) {
      I(t);
      var we = Q.current;
      Q.current = !0;
      var Oe;
      !we && t && s && (Oe = Dr), we && t && a && (Oe = Br), (we && !t && l || !we && d && !t && l) && (Oe = Vr);
      var qe = Ee(Oe);
      Oe && (e || qe[pt]) ? (k(Oe), te()) : k(Dt), ye.current = t;
    }
  }, [t]), Ke(function() {
    // Cancel appear
    (ee === Dr && !s || // Cancel enter
    ee === Br && !a || // Cancel leave
    ee === Vr && !l) && k(Dt);
  }, [s, a, l]), Ke(function() {
    return function() {
      Q.current = !1, clearTimeout(Z.current);
    };
  }, []);
  var Ve = g.useRef(!1);
  Ke(function() {
    _ && (Ve.current = !0), _ !== void 0 && ee === Dt && ((Ve.current || _) && $?.(_), Ve.current = !0);
  }, [_, ee]);
  var Fe = H;
  return V[pt] && se === pn && (Fe = T({
    transition: "none"
  }, Fe)), [ee, se, Fe, _ ?? t];
}
function Xv(e) {
  var t = e;
  X(e) === "object" && (t = e.transitionSupport);
  function n(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var r = /* @__PURE__ */ g.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, p = o.leavedClassName, v = o.eventProps, h = g.useContext(Fu), m = h.motion, C = n(o, m), y = ve(), x = ve();
    function S() {
      try {
        return y.current instanceof HTMLElement ? y.current : bm(x.current);
      } catch {
        return null;
      }
    }
    var b = Uv(C, s, S, o), w = D(b, 4), E = w[0], $ = w[1], O = w[2], P = w[3], _ = g.useRef(P);
    P && (_.current = !0);
    var I = g.useCallback(function(G) {
      y.current = G, jl(a, G);
    }, [a]), A, M = T(T({}, v), {}, {
      visible: s
    });
    if (!d)
      A = null;
    else if (E === Dt)
      P ? A = d(T({}, M), I) : !l && _.current && p ? A = d(T(T({}, M), {}, {
        className: p
      }), I) : u || !l && !p ? A = d(T(T({}, M), {}, {
        style: {
          display: "none"
        }
      }), I) : A = null;
    else {
      var j;
      $ === pt ? j = "prepare" : Wu($) ? j = "active" : $ === pn && (j = "start");
      var k = vc(f, "".concat(E, "-").concat(j));
      A = d(T(T({}, M), {}, {
        className: W(vc(f, E), R(R({}, k, k && j), f, typeof f == "string")),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ g.isValidElement(A) && Mi(A)) {
      var L = Ll(A);
      L || (A = /* @__PURE__ */ g.cloneElement(A, {
        ref: I
      }));
    }
    return /* @__PURE__ */ g.createElement(jv, {
      ref: x
    }, A);
  });
  return r.displayName = "CSSMotion", r;
}
const mr = Xv(Vu);
var ti = "add", ni = "keep", ri = "remove", fa = "removed";
function Yv(e) {
  var t;
  return e && X(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, T(T({}, t), {}, {
    key: String(t.key)
  });
}
function oi() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Yv);
}
function Kv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, a = oi(e), i = oi(t);
  a.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = i[d];
      if (f.key === l.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(p) {
          return T(T({}, p), {}, {
            status: ti
          });
        })), r = d), n.push(T(T({}, f), {}, {
          status: ni
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(T(T({}, l), {}, {
      status: ri
    }));
  }), r < o && (n = n.concat(i.slice(r).map(function(l) {
    return T(T({}, l), {}, {
      status: ti
    });
  })));
  var s = {};
  n.forEach(function(l) {
    var u = l.key;
    s[u] = (s[u] || 0) + 1;
  });
  var c = Object.keys(s).filter(function(l) {
    return s[l] > 1;
  });
  return c.forEach(function(l) {
    n = n.filter(function(u) {
      var d = u.key, f = u.status;
      return d !== l || f !== ri;
    }), n.forEach(function(u) {
      u.key === l && (u.status = ni);
    });
  }), n;
}
var Zv = ["component", "children", "onVisibleChanged", "onAllRemoved"], Qv = ["status"], Jv = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function ep(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mr, n = /* @__PURE__ */ (function(r) {
    tn(a, r);
    var o = nn(a);
    function a() {
      var i;
      De(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), R(ne(i), "state", {
        keyEntities: []
      }), R(ne(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(p) {
            return p.key !== u ? p : T(T({}, p), {}, {
              status: fa
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(p) {
            var v = p.status;
            return v !== fa;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Be(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var p = Ge(l, Zv), v = u || g.Fragment, h = {};
        return Jv.forEach(function(m) {
          h[m] = p[m], delete p[m];
        }), delete p.keys, /* @__PURE__ */ g.createElement(v, p, c.map(function(m, C) {
          var y = m.status, x = Ge(m, Qv), S = y === ti || y === ni;
          return /* @__PURE__ */ g.createElement(t, ue({}, h, {
            key: x.key,
            visible: S,
            eventProps: x,
            onVisibleChanged: function(w) {
              f?.(w, {
                key: x.key
              }), w || s.removeKey(x.key);
            }
          }), function(b, w) {
            return d(T(T({}, b), {}, {
              index: C
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, d = oi(l), f = Kv(u, d);
        return {
          keyEntities: f.filter(function(p) {
            var v = u.find(function(h) {
              var m = h.key;
              return p.key === m;
            });
            return !(v && v.status === fa && p.status === ri);
          })
        };
      }
    }]), a;
  })(g.Component);
  return R(n, "defaultProps", {
    component: "div"
  }), n;
}
const tp = ep(Vu), ai = /* @__PURE__ */ g.createContext(!0);
process.env.NODE_ENV !== "production" && (ai.displayName = "MotionCacheContext");
function np(e) {
  const t = g.useContext(ai), {
    children: n
  } = e, [, r] = _t(), {
    motion: o
  } = r, a = g.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ g.createElement(ai.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement(Fv, {
    motion: o
  }, n)) : n;
}
const Gu = /* @__PURE__ */ g.memo(({
  dropdownMatchSelectWidth: e
}) => (st("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Gu.displayName = "PropWarning");
const rp = process.env.NODE_ENV !== "production" ? Gu : () => null;
var op = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let ii = !1;
const Zi = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && Gt(!ii, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), ap = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let mo, qu, Uu, Xu;
function no() {
  return mo || uo;
}
function ip() {
  return qu || No;
}
function sp(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const cp = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (mo = t), n !== void 0 && (qu = n), "holderRender" in e && (Xu = o), r && (sp(r) ? (process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), ov(no(), r)) : Uu = r);
}, gr = () => ({
  getPrefixCls: (e, t) => t || (e ? `${no()}-${e}` : no()),
  getIconPrefixCls: ip,
  getRootPrefixCls: () => mo || no(),
  getTheme: () => Uu,
  holderRender: Xu
}), lp = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    form: i,
    locale: s,
    componentSize: c,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: v,
    popupOverflow: h,
    legacyLocale: m,
    parentContext: C,
    iconPrefixCls: y,
    theme: x,
    componentDisabled: S,
    segmented: b,
    statistic: w,
    spin: E,
    calendar: $,
    carousel: O,
    cascader: P,
    collapse: _,
    typography: I,
    checkbox: A,
    descriptions: M,
    divider: j,
    drawer: k,
    skeleton: L,
    steps: G,
    image: H,
    layout: J,
    list: ee,
    mentions: Q,
    modal: Z,
    progress: Y,
    result: q,
    slider: U,
    breadcrumb: ae,
    menu: Pe,
    pagination: Ce,
    input: Se,
    textArea: Ee,
    empty: V,
    badge: pe,
    radio: B,
    rate: te,
    switch: se,
    transfer: Qe,
    avatar: ye,
    message: Ve,
    tag: Fe,
    table: we,
    card: Oe,
    tabs: qe,
    timeline: et,
    timePicker: Ue,
    upload: cn,
    notification: Er,
    tree: Qo,
    colorPicker: Bn,
    datePicker: wr,
    rangePicker: $r,
    flex: Or,
    wave: Pr,
    dropdown: Nr,
    warning: Tr,
    tour: Vn,
    tooltip: Te,
    popover: gt,
    popconfirm: Hn,
    floatButton: Yf,
    floatButtonGroup: Kf,
    variant: Zf,
    inputNumber: Qf,
    treeSelect: Jf
  } = e, Ss = g.useCallback((Me, ze) => {
    const {
      prefixCls: St
    } = e;
    if (ze)
      return ze;
    const Et = St || C.getPrefixCls("");
    return Me ? `${Et}-${Me}` : Et;
  }, [C.getPrefixCls, e.prefixCls]), Rr = y || C.iconPrefixCls || No, _r = n || C.csp;
  Tv(Rr, _r);
  const Mr = Iv(x, C.theme, {
    prefixCls: Ss("")
  });
  process.env.NODE_ENV !== "production" && (ii = ii || !!Mr);
  const Jo = {
    csp: _r,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    locale: s || m,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: v ?? p,
    popupOverflow: h,
    getPrefixCls: Ss,
    iconPrefixCls: Rr,
    theme: Mr,
    segmented: b,
    statistic: w,
    spin: E,
    calendar: $,
    carousel: O,
    cascader: P,
    collapse: _,
    typography: I,
    checkbox: A,
    descriptions: M,
    divider: j,
    drawer: k,
    skeleton: L,
    steps: G,
    image: H,
    input: Se,
    textArea: Ee,
    layout: J,
    list: ee,
    mentions: Q,
    modal: Z,
    progress: Y,
    result: q,
    slider: U,
    breadcrumb: ae,
    menu: Pe,
    pagination: Ce,
    empty: V,
    badge: pe,
    radio: B,
    rate: te,
    switch: se,
    transfer: Qe,
    avatar: ye,
    message: Ve,
    tag: Fe,
    table: we,
    card: Oe,
    tabs: qe,
    timeline: et,
    timePicker: Ue,
    upload: cn,
    notification: Er,
    tree: Qo,
    colorPicker: Bn,
    datePicker: wr,
    rangePicker: $r,
    flex: Or,
    wave: Pr,
    dropdown: Nr,
    warning: Tr,
    tour: Vn,
    tooltip: Te,
    popover: gt,
    popconfirm: Hn,
    floatButton: Yf,
    floatButtonGroup: Kf,
    variant: Zf,
    inputNumber: Qf,
    treeSelect: Jf
  };
  process.env.NODE_ENV !== "production" && st("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ln = Object.assign({}, C);
  Object.keys(Jo).forEach((Me) => {
    Jo[Me] !== void 0 && (ln[Me] = Jo[Me]);
  }), ap.forEach((Me) => {
    const ze = e[Me];
    ze && (ln[Me] = ze);
  }), typeof r < "u" && (ln.button = Object.assign({
    autoInsertSpace: r
  }, ln.button));
  const un = Co(() => ln, ln, (Me, ze) => {
    const St = Object.keys(Me), Et = Object.keys(ze);
    return St.length !== Et.length || St.some((Ir) => Me[Ir] !== ze[Ir]);
  }), {
    layer: Es
  } = g.useContext(Jt), em = g.useMemo(() => ({
    prefixCls: Rr,
    csp: _r,
    layer: Es ? "antd" : void 0
  }), [Rr, _r, Es]);
  let He = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(rp, {
    dropdownMatchSelectWidth: p
  }), t);
  const ws = g.useMemo(() => {
    var Me, ze, St, Et;
    return vn(((Me = Wt.Form) === null || Me === void 0 ? void 0 : Me.defaultValidateMessages) || {}, ((St = (ze = un.locale) === null || ze === void 0 ? void 0 : ze.Form) === null || St === void 0 ? void 0 : St.defaultValidateMessages) || {}, ((Et = un.form) === null || Et === void 0 ? void 0 : Et.validateMessages) || {}, i?.validateMessages || {});
  }, [un, i?.validateMessages]);
  Object.keys(ws).length > 0 && (He = /* @__PURE__ */ g.createElement(Bg.Provider, {
    value: ws
  }, He)), s && (He = /* @__PURE__ */ g.createElement(Cu, {
    locale: s,
    _ANT_MARK__: bu
  }, He)), He = /* @__PURE__ */ g.createElement(Bi.Provider, {
    value: em
  }, He), c && (He = /* @__PURE__ */ g.createElement(av, {
    size: c
  }, He)), He = /* @__PURE__ */ g.createElement(np, null, He);
  const tm = g.useMemo(() => {
    const Me = Mr || {}, {
      algorithm: ze,
      token: St,
      components: Et,
      cssVar: Ir
    } = Me, nm = op(Me, ["algorithm", "token", "components", "cssVar"]), $s = ze && (!Array.isArray(ze) || ze.length > 0) ? so(ze) : zi, ea = {};
    Object.entries(Et || {}).forEach(([rm, om]) => {
      const It = Object.assign({}, om);
      "algorithm" in It && (It.algorithm === !0 ? It.theme = $s : (Array.isArray(It.algorithm) || typeof It.algorithm == "function") && (It.theme = so(It.algorithm)), delete It.algorithm), ea[rm] = It;
    });
    const Os = Object.assign(Object.assign({}, Nn), St);
    return Object.assign(Object.assign({}, nm), {
      theme: $s,
      token: Os,
      components: ea,
      override: Object.assign({
        override: Os
      }, ea),
      cssVar: Ir
    });
  }, [Mr]);
  return x && (He = /* @__PURE__ */ g.createElement(Wi.Provider, {
    value: tm
  }, He)), un.warning && (He = /* @__PURE__ */ g.createElement(pu.Provider, {
    value: un.warning
  }, He)), S !== void 0 && (He = /* @__PURE__ */ g.createElement(Pu, {
    disabled: S
  }, He)), /* @__PURE__ */ g.createElement(be.Provider, {
    value: un
  }, He);
}, nt = (e) => {
  const t = g.useContext(be), n = g.useContext(Vi);
  return /* @__PURE__ */ g.createElement(lp, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
nt.ConfigContext = be;
nt.SizeContext = Tn;
nt.config = cp;
nt.useConfig = iv;
Object.defineProperty(nt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Tn)
});
process.env.NODE_ENV !== "production" && (nt.displayName = "ConfigProvider");
var up = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Yu(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function dp(e) {
  return Yu(e) instanceof ShadowRoot;
}
function fp(e) {
  return dp(e) ? Yu(e) : null;
}
function mp(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function gp(e, t) {
  $e(e, "[@ant-design/icons] ".concat(t));
}
function pc(e) {
  return X(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (X(e.icon) === "object" || typeof e.icon == "function");
}
function hc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[mp(n)] = r;
    }
    return t;
  }, {});
}
function si(e, t, n) {
  return n ? /* @__PURE__ */ N.createElement(e.tag, T(T({
    key: t
  }, hc(e.attrs)), n), (e.children || []).map(function(r, o) {
    return si(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ N.createElement(e.tag, T({
    key: t
  }, hc(e.attrs)), (e.children || []).map(function(r, o) {
    return si(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Ku(e) {
  return en(e)[0];
}
function Zu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var vp = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`, pp = function(t) {
  var n = ie(Bi), r = n.csp, o = n.prefixCls, a = n.layer, i = vp;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Ke(function() {
    var s = t.current, c = fp(s);
    jt(i, "@ant-design-icons", {
      prepend: !a,
      csp: r,
      attachTo: c
    });
  }, []);
}, hp = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Yn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function yp(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Yn.primaryColor = t, Yn.secondaryColor = n || Ku(t), Yn.calculated = !!n;
}
function bp() {
  return T({}, Yn);
}
var Fn = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, c = Ge(t, hp), l = g.useRef(), u = Yn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || Ku(i)
  }), pp(l), gp(pc(n), "icon should be icon definiton, but got ".concat(n)), !pc(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = T(T({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), si(d.icon, "svg-".concat(d.name), T(T({
    className: r,
    onClick: o,
    style: a,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
Fn.displayName = "IconReact";
Fn.getTwoToneColors = bp;
Fn.setTwoToneColors = yp;
function Qu(e) {
  var t = Zu(e), n = D(t, 2), r = n[0], o = n[1];
  return Fn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function Cp() {
  var e = Fn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var xp = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Qu(lo.primary);
var xt = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = Ge(e, xp), u = g.useContext(Bi), d = u.prefixCls, f = d === void 0 ? "anticon" : d, p = u.rootClassName, v = W(p, f, R(R({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), h = i;
  h === void 0 && s && (h = -1);
  var m = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, C = Zu(c), y = D(C, 2), x = y[0], S = y[1];
  return /* @__PURE__ */ g.createElement("span", ue({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: h,
    onClick: s,
    className: v
  }), /* @__PURE__ */ g.createElement(Fn, {
    icon: r,
    primaryColor: x,
    secondaryColor: S,
    style: m
  }));
});
xt.displayName = "AntdIcon";
xt.getTwoToneColor = Cp;
xt.setTwoToneColor = Qu;
var Sp = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: up
  }));
}, To = /* @__PURE__ */ g.forwardRef(Sp);
process.env.NODE_ENV !== "production" && (To.displayName = "CheckCircleFilled");
var Ep = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, wp = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: Ep
  }));
}, Ro = /* @__PURE__ */ g.forwardRef(wp);
process.env.NODE_ENV !== "production" && (Ro.displayName = "CloseCircleFilled");
var $p = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Op = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: $p
  }));
}, on = /* @__PURE__ */ g.forwardRef(Op);
process.env.NODE_ENV !== "production" && (on.displayName = "CloseOutlined");
var Pp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Np = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: Pp
  }));
}, _o = /* @__PURE__ */ g.forwardRef(Np);
process.env.NODE_ENV !== "production" && (_o.displayName = "ExclamationCircleFilled");
var Tp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Rp = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: Tp
  }));
}, Mo = /* @__PURE__ */ g.forwardRef(Rp);
process.env.NODE_ENV !== "production" && (Mo.displayName = "InfoCircleFilled");
var _p = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`, Mp = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Ip = "".concat(_p, " ").concat(Mp).split(/[\s\n]+/), Ap = "aria-", Fp = "data-";
function yc(e, t) {
  return e.indexOf(t) === 0;
}
function Io(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = T({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || yc(o, Ap)) || // Data
    n.data && yc(o, Fp) || // Attr
    n.attr && Ip.includes(o)) && (r[o] = e[o]);
  }), r;
}
function jp(e) {
  return e && /* @__PURE__ */ N.isValidElement(e) && e.type === N.Fragment;
}
const kp = (e, t, n) => /* @__PURE__ */ N.isValidElement(e) ? /* @__PURE__ */ N.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Ju(e, t) {
  return kp(e, e, t);
}
const jn = (e) => {
  const [, , , , t] = _t();
  return t ? `${e}-css-var` : "";
};
var ci = {
  /**
   * TAB
   */
  TAB: 9,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * ESC
   */
  ESC: 27
}, Qi = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.className, a = e.duration, i = a === void 0 ? 4.5 : a, s = e.showProgress, c = e.pauseOnHover, l = c === void 0 ? !0 : c, u = e.eventKey, d = e.content, f = e.closable, p = e.closeIcon, v = p === void 0 ? "x" : p, h = e.props, m = e.onClick, C = e.onNoticeClose, y = e.times, x = e.hovering, S = g.useState(!1), b = D(S, 2), w = b[0], E = b[1], $ = g.useState(0), O = D($, 2), P = O[0], _ = O[1], I = g.useState(0), A = D(I, 2), M = A[0], j = A[1], k = x || w, L = i > 0 && s, G = function() {
    C(u);
  }, H = function(q) {
    (q.key === "Enter" || q.code === "Enter" || q.keyCode === ci.ENTER) && G();
  };
  g.useEffect(function() {
    if (!k && i > 0) {
      var Y = Date.now() - M, q = setTimeout(function() {
        G();
      }, i * 1e3 - M);
      return function() {
        l && clearTimeout(q), j(Date.now() - Y);
      };
    }
  }, [i, k, y]), g.useEffect(function() {
    if (!k && L && (l || M === 0)) {
      var Y = performance.now(), q, U = function ae() {
        cancelAnimationFrame(q), q = requestAnimationFrame(function(Pe) {
          var Ce = Pe + M - Y, Se = Math.min(Ce / (i * 1e3), 1);
          _(Se * 100), Se < 1 && ae();
        });
      };
      return U(), function() {
        l && cancelAnimationFrame(q);
      };
    }
  }, [i, M, k, L, y]);
  var J = g.useMemo(function() {
    return X(f) === "object" && f !== null ? f : f ? {
      closeIcon: v
    } : {};
  }, [f, v]), ee = Io(J, !0), Q = 100 - (!P || P < 0 ? 0 : P > 100 ? 100 : P), Z = "".concat(n, "-notice");
  return /* @__PURE__ */ g.createElement("div", ue({}, h, {
    ref: t,
    className: W(Z, o, R({}, "".concat(Z, "-closable"), f)),
    style: r,
    onMouseEnter: function(q) {
      var U;
      E(!0), h == null || (U = h.onMouseEnter) === null || U === void 0 || U.call(h, q);
    },
    onMouseLeave: function(q) {
      var U;
      E(!1), h == null || (U = h.onMouseLeave) === null || U === void 0 || U.call(h, q);
    },
    onClick: m
  }), /* @__PURE__ */ g.createElement("div", {
    className: "".concat(Z, "-content")
  }, d), f && /* @__PURE__ */ g.createElement("a", ue({
    tabIndex: 0,
    className: "".concat(Z, "-close"),
    onKeyDown: H,
    "aria-label": "Close"
  }, ee, {
    onClick: function(q) {
      q.preventDefault(), q.stopPropagation(), G();
    }
  }), J.closeIcon), L && /* @__PURE__ */ g.createElement("progress", {
    className: "".concat(Z, "-progress"),
    max: "100",
    value: Q
  }, Q + "%"));
}), ed = /* @__PURE__ */ N.createContext({}), td = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ N.createElement(ed.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, bc = 8, Cc = 3, xc = 16, Lp = function(t) {
  var n = {
    offset: bc,
    threshold: Cc,
    gap: xc
  };
  if (t && X(t) === "object") {
    var r, o, a;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : bc, n.threshold = (o = t.threshold) !== null && o !== void 0 ? o : Cc, n.gap = (a = t.gap) !== null && a !== void 0 ? a : xc;
  }
  return [!!t, n];
}, Dp = ["className", "style", "classNames", "styles"], nd = function(t) {
  var n = t.configList, r = t.placement, o = t.prefixCls, a = t.className, i = t.style, s = t.motion, c = t.onAllNoticeRemoved, l = t.onNoticeClose, u = t.stack, d = ie(ed), f = d.classNames, p = ve({}), v = Qt(null), h = D(v, 2), m = h[0], C = h[1], y = Qt([]), x = D(y, 2), S = x[0], b = x[1], w = n.map(function(k) {
    return {
      config: k,
      key: String(k.key)
    };
  }), E = Lp(u), $ = D(E, 2), O = $[0], P = $[1], _ = P.offset, I = P.threshold, A = P.gap, M = O && (S.length > 0 || w.length <= I), j = typeof s == "function" ? s(r) : s;
  return Ke(function() {
    O && S.length > 1 && b(function(k) {
      return k.filter(function(L) {
        return w.some(function(G) {
          var H = G.key;
          return L === H;
        });
      });
    });
  }, [S, w, O]), Ke(function() {
    var k;
    if (O && p.current[(k = w[w.length - 1]) === null || k === void 0 ? void 0 : k.key]) {
      var L;
      C(p.current[(L = w[w.length - 1]) === null || L === void 0 ? void 0 : L.key]);
    }
  }, [w, O]), /* @__PURE__ */ N.createElement(tp, ue({
    key: r,
    className: W(o, "".concat(o, "-").concat(r), f?.list, a, R(R({}, "".concat(o, "-stack"), !!O), "".concat(o, "-stack-expanded"), M)),
    style: i,
    keys: w,
    motionAppear: !0
  }, j, {
    onAllRemoved: function() {
      c(r);
    }
  }), function(k, L) {
    var G = k.config, H = k.className, J = k.style, ee = k.index, Q = G, Z = Q.key, Y = Q.times, q = String(Z), U = G, ae = U.className, Pe = U.style, Ce = U.classNames, Se = U.styles, Ee = Ge(U, Dp), V = w.findIndex(function(et) {
      return et.key === q;
    }), pe = {};
    if (O) {
      var B = w.length - 1 - (V > -1 ? V : ee - 1), te = r === "top" || r === "bottom" ? "-50%" : "0";
      if (B > 0) {
        var se, Qe, ye;
        pe.height = M ? (se = p.current[q]) === null || se === void 0 ? void 0 : se.offsetHeight : m?.offsetHeight;
        for (var Ve = 0, Fe = 0; Fe < B; Fe++) {
          var we;
          Ve += ((we = p.current[w[w.length - 1 - Fe].key]) === null || we === void 0 ? void 0 : we.offsetHeight) + A;
        }
        var Oe = (M ? Ve : B * _) * (r.startsWith("top") ? 1 : -1), qe = !M && m !== null && m !== void 0 && m.offsetWidth && (Qe = p.current[q]) !== null && Qe !== void 0 && Qe.offsetWidth ? (m?.offsetWidth - _ * 2 * (B < 3 ? B : 3)) / ((ye = p.current[q]) === null || ye === void 0 ? void 0 : ye.offsetWidth) : 1;
        pe.transform = "translate3d(".concat(te, ", ").concat(Oe, "px, 0) scaleX(").concat(qe, ")");
      } else
        pe.transform = "translate3d(".concat(te, ", 0, 0)");
    }
    return /* @__PURE__ */ N.createElement("div", {
      ref: L,
      className: W("".concat(o, "-notice-wrapper"), H, Ce?.wrapper),
      style: T(T(T({}, J), pe), Se?.wrapper),
      onMouseEnter: function() {
        return b(function(Ue) {
          return Ue.includes(q) ? Ue : [].concat(z(Ue), [q]);
        });
      },
      onMouseLeave: function() {
        return b(function(Ue) {
          return Ue.filter(function(cn) {
            return cn !== q;
          });
        });
      }
    }, /* @__PURE__ */ N.createElement(Qi, ue({}, Ee, {
      ref: function(Ue) {
        V > -1 ? p.current[q] = Ue : delete p.current[q];
      },
      prefixCls: o,
      classNames: Ce,
      styles: Se,
      className: W(ae, f?.notice),
      style: Pe,
      times: Y,
      key: Z,
      eventKey: Z,
      onNoticeClose: l,
      hovering: O && S.length > 0
    })));
  });
};
process.env.NODE_ENV !== "production" && (nd.displayName = "NoticeList");
var rd = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, o = e.container, a = e.motion, i = e.maxCount, s = e.className, c = e.style, l = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = g.useState([]), p = D(f, 2), v = p[0], h = p[1], m = function(O) {
    var P, _ = v.find(function(I) {
      return I.key === O;
    });
    _ == null || (P = _.onClose) === null || P === void 0 || P.call(_), h(function(I) {
      return I.filter(function(A) {
        return A.key !== O;
      });
    });
  };
  g.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        h(function(P) {
          var _ = z(P), I = _.findIndex(function(j) {
            return j.key === O.key;
          }), A = T({}, O);
          if (I >= 0) {
            var M;
            A.times = (((M = P[I]) === null || M === void 0 ? void 0 : M.times) || 0) + 1, _[I] = A;
          } else
            A.times = 0, _.push(A);
          return i > 0 && _.length > i && (_ = _.slice(-i)), _;
        });
      },
      close: function(O) {
        m(O);
      },
      destroy: function() {
        h([]);
      }
    };
  });
  var C = g.useState({}), y = D(C, 2), x = y[0], S = y[1];
  g.useEffect(function() {
    var $ = {};
    v.forEach(function(O) {
      var P = O.placement, _ = P === void 0 ? "topRight" : P;
      _ && ($[_] = $[_] || [], $[_].push(O));
    }), Object.keys(x).forEach(function(O) {
      $[O] = $[O] || [];
    }), S($);
  }, [v]);
  var b = function(O) {
    S(function(P) {
      var _ = T({}, P), I = _[O] || [];
      return I.length || delete _[O], _;
    });
  }, w = g.useRef(!1);
  if (g.useEffect(function() {
    Object.keys(x).length > 0 ? w.current = !0 : w.current && (l?.(), w.current = !1);
  }, [x]), !o)
    return null;
  var E = Object.keys(x);
  return /* @__PURE__ */ _l(/* @__PURE__ */ g.createElement(g.Fragment, null, E.map(function($) {
    var O = x[$], P = /* @__PURE__ */ g.createElement(nd, {
      key: $,
      configList: O,
      placement: $,
      prefixCls: r,
      className: s?.($),
      style: c?.($),
      motion: a,
      onNoticeClose: m,
      onAllNoticeRemoved: b,
      stack: u
    });
    return d ? d(P, {
      prefixCls: r,
      key: $
    }) : P;
  })), o);
});
process.env.NODE_ENV !== "production" && (rd.displayName = "Notifications");
var Bp = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], Vp = function() {
  return document.body;
}, Sc = 0;
function Hp() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(o) {
    o && Object.keys(o).forEach(function(a) {
      var i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function od() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? Vp : t, r = e.motion, o = e.prefixCls, a = e.maxCount, i = e.className, s = e.style, c = e.onAllRemoved, l = e.stack, u = e.renderNotifications, d = Ge(e, Bp), f = g.useState(), p = D(f, 2), v = p[0], h = p[1], m = g.useRef(), C = /* @__PURE__ */ g.createElement(rd, {
    container: v,
    ref: m,
    prefixCls: o,
    motion: r,
    maxCount: a,
    className: i,
    style: s,
    onAllRemoved: c,
    stack: l,
    renderNotifications: u
  }), y = g.useState([]), x = D(y, 2), S = x[0], b = x[1], w = Tt(function($) {
    var O = Hp(d, $);
    (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(Sc), Sc += 1), b(function(P) {
      return [].concat(z(P), [{
        type: "open",
        config: O
      }]);
    });
  }), E = g.useMemo(function() {
    return {
      open: w,
      close: function(O) {
        b(function(P) {
          return [].concat(z(P), [{
            type: "close",
            key: O
          }]);
        });
      },
      destroy: function() {
        b(function(O) {
          return [].concat(z(O), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return g.useEffect(function() {
    h(n());
  }), g.useEffect(function() {
    if (m.current && S.length) {
      S.forEach(function(P) {
        switch (P.type) {
          case "open":
            m.current.open(P.config);
            break;
          case "close":
            m.current.close(P.key);
            break;
          case "destroy":
            m.current.destroy();
            break;
        }
      });
      var $, O;
      b(function(P) {
        return ($ !== P || !O) && ($ = P, O = P.filter(function(_) {
          return !S.includes(_);
        })), O;
      });
    }
  }, [S]), [E, C];
}
var zp = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Wp = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: zp
  }));
}, Ji = /* @__PURE__ */ g.forwardRef(Wp);
process.env.NODE_ENV !== "production" && (Ji.displayName = "LoadingOutlined");
function Ec(...e) {
  const t = {};
  return e.forEach((n) => {
    n && Object.keys(n).forEach((r) => {
      n[r] !== void 0 && (t[r] = n[r]);
    });
  }), t;
}
function wc(e) {
  if (!e)
    return;
  const {
    closable: t,
    closeIcon: n
  } = e;
  return {
    closable: t,
    closeIcon: n
  };
}
function $c(e) {
  const {
    closable: t,
    closeIcon: n
  } = e || {};
  return N.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !t && (t === !1 || n === !1 || n === null)
    )
      return !1;
    if (t === void 0 && n === void 0)
      return null;
    let r = {
      closeIcon: typeof n != "boolean" && n !== null ? n : void 0
    };
    return t && typeof t == "object" && (r = Object.assign(Object.assign({}, r), t)), r;
  }, [t, n]);
}
const Gp = {}, qp = (e, t, n = Gp) => {
  const r = $c(e), o = $c(t), [a] = Oo("global", Wt.global), i = typeof r != "boolean" ? !!r?.disabled : !1, s = N.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ N.createElement(on, null)
  }, n), [n]), c = N.useMemo(() => r === !1 ? !1 : r ? Ec(s, o, r) : o === !1 ? !1 : o ? Ec(s, o) : s.closable ? s : !1, [r, o, s]);
  return N.useMemo(() => {
    var l, u;
    if (c === !1)
      return [!1, null, i, {}];
    const {
      closeIconRender: d
    } = s, {
      closeIcon: f
    } = c;
    let p = f;
    const v = Io(c, !0);
    return p != null && (d && (p = d(f)), p = /* @__PURE__ */ N.isValidElement(p) ? /* @__PURE__ */ N.cloneElement(p, Object.assign(Object.assign(Object.assign({}, p.props), {
      "aria-label": (u = (l = p.props) === null || l === void 0 ? void 0 : l["aria-label"]) !== null && u !== void 0 ? u : a.close
    }), v)) : /* @__PURE__ */ N.createElement("span", Object.assign({
      "aria-label": a.close
    }, v), p)), [!0, p, i, v];
  }, [i, a.close, c, s]);
}, Up = () => {
  const [e, t] = g.useState([]), n = g.useCallback((r) => (t((o) => [].concat(z(o), [r])), () => {
    t((o) => o.filter((a) => a !== r));
  }), []);
  return [e, n];
}, es = /* @__PURE__ */ N.createContext(void 0);
process.env.NODE_ENV !== "production" && (es.displayName = "zIndexContext");
const Ft = 100, Xp = 10, Ao = Ft * Xp, Yp = Ao + Ft, ad = {
  Modal: Ft,
  Drawer: Ft,
  Popover: Ft,
  Popconfirm: Ft,
  Tooltip: Ft,
  Tour: Ft,
  FloatButton: Ft
}, Kp = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Zp(e) {
  return e in ad;
}
const Qp = (e, t) => {
  const [, n] = _t(), r = N.useContext(es), o = Zp(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = r ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    ad[e] : i += Kp[e], a = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = st(e), s = n.zIndexPopupBase + Yp, c = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
}, Jp = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadow: r,
    colorText: o,
    colorSuccess: a,
    colorError: i,
    colorWarning: s,
    colorInfo: c,
    fontSizeLG: l,
    motionEaseInOutCirc: u,
    motionDurationSlow: d,
    marginXS: f,
    paddingXS: p,
    borderRadiusLG: v,
    zIndexPopup: h,
    // Custom token
    contentPadding: m,
    contentBg: C
  } = e, y = `${t}-notice`, x = new Ne("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: p,
      transform: "translateY(0)",
      opacity: 1
    }
  }), S = new Ne("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: p,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), b = {
    padding: p,
    textAlign: "center",
    [`${t}-custom-content`]: {
      display: "flex",
      alignItems: "center"
    },
    [`${t}-custom-content > ${n}`]: {
      marginInlineEnd: f,
      // affected by ltr or rtl
      fontSize: l
    },
    [`${y}-content`]: {
      display: "inline-block",
      padding: m,
      background: C,
      borderRadius: v,
      boxShadow: r,
      pointerEvents: "all"
    },
    [`${t}-success > ${n}`]: {
      color: a
    },
    [`${t}-error > ${n}`]: {
      color: i
    },
    [`${t}-warning > ${n}`]: {
      color: s
    },
    [`${t}-info > ${n},
      ${t}-loading > ${n}`]: {
      color: c
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, Ui(e)), {
        color: o,
        position: "fixed",
        top: f,
        width: "100%",
        pointerEvents: "none",
        zIndex: h,
        [`${t}-move-up`]: {
          animationFillMode: "forwards"
        },
        [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
          animationName: x,
          animationDuration: d,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: {
          animationPlayState: "running"
        },
        [`${t}-move-up-leave`]: {
          animationName: S,
          animationDuration: d,
          animationPlayState: "paused",
          animationTimingFunction: u
        },
        [`${t}-move-up-leave${t}-move-up-leave-active`]: {
          animationPlayState: "running"
        },
        "&-rtl": {
          direction: "rtl",
          span: {
            direction: "rtl"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [`${y}-wrapper`]: Object.assign({}, b)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, b), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, eh = (e) => ({
  zIndexPopup: e.zIndexPopupBase + Ao + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), id = rn("Message", (e) => {
  const t = Ct(e, {
    height: 150
  });
  return Jp(t);
}, eh);
var th = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const nh = {
  info: /* @__PURE__ */ g.createElement(Mo, null),
  success: /* @__PURE__ */ g.createElement(To, null),
  error: /* @__PURE__ */ g.createElement(Ro, null),
  warning: /* @__PURE__ */ g.createElement(_o, null),
  loading: /* @__PURE__ */ g.createElement(Ji, null)
}, sd = ({
  prefixCls: e,
  type: t,
  icon: n,
  children: r
}) => /* @__PURE__ */ g.createElement("div", {
  className: W(`${e}-custom-content`, `${e}-${t}`)
}, n || nh[t], /* @__PURE__ */ g.createElement("span", null, r)), rh = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: a
  } = e, i = th(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = g.useContext(be), c = t || s("message"), l = jn(c), [u, d, f] = id(c, l);
  return u(/* @__PURE__ */ g.createElement(Qi, Object.assign({}, i, {
    prefixCls: c,
    className: W(n, d, `${c}-notice-pure-panel`, f, l),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ g.createElement(sd, {
      prefixCls: c,
      type: r,
      icon: o
    }, a)
  })));
};
function oh(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function ts(e) {
  let t;
  const n = new Promise((o) => {
    t = e(() => {
      o(!0);
    });
  }), r = () => {
    t?.();
  };
  return r.then = (o, a) => n.then(o, a), r.promise = n, r;
}
var ah = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ih = 8, sh = 3, ch = ({
  children: e,
  prefixCls: t
}) => {
  const n = jn(t), [r, o, a] = id(t, n);
  return r(/* @__PURE__ */ g.createElement(td, {
    classNames: {
      list: W(o, a, n)
    }
  }, e));
}, lh = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ g.createElement(ch, {
  prefixCls: t,
  key: n
}, e), uh = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: a,
    duration: i = sh,
    rtl: s,
    transitionName: c,
    onAllRemoved: l
  } = e, {
    getPrefixCls: u,
    getPopupContainer: d,
    message: f,
    direction: p
  } = g.useContext(be), v = r || u("message"), h = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? ih
  }), m = () => W({
    [`${v}-rtl`]: s ?? p === "rtl"
  }), C = () => oh(v, c), y = /* @__PURE__ */ g.createElement("span", {
    className: `${v}-close-x`
  }, /* @__PURE__ */ g.createElement(on, {
    className: `${v}-close-icon`
  })), [x, S] = od({
    prefixCls: v,
    style: h,
    className: m,
    motion: C,
    closable: !1,
    closeIcon: y,
    duration: i,
    getContainer: () => o?.() || d?.() || document.body,
    maxCount: a,
    onAllRemoved: l,
    renderNotifications: lh
  });
  return g.useImperativeHandle(t, () => Object.assign(Object.assign({}, x), {
    prefixCls: v,
    message: f
  })), S;
});
let Oc = 0;
function cd(e) {
  const t = g.useRef(null), n = st("Message");
  return [g.useMemo(() => {
    const o = (l) => {
      var u;
      (u = t.current) === null || u === void 0 || u.close(l);
    }, a = (l) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const E = () => {
        };
        return E.then = () => {
        }, E;
      }
      const {
        open: u,
        prefixCls: d,
        message: f
      } = t.current, p = `${d}-notice`, {
        content: v,
        icon: h,
        type: m,
        key: C,
        className: y,
        style: x,
        onClose: S
      } = l, b = ah(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let w = C;
      return w == null && (Oc += 1, w = `antd-message-${Oc}`), ts((E) => (u(Object.assign(Object.assign({}, b), {
        key: w,
        content: /* @__PURE__ */ g.createElement(sd, {
          prefixCls: d,
          type: m,
          icon: h
        }, v),
        placement: "top",
        className: W(m && `${p}-${m}`, y, f?.className),
        style: Object.assign(Object.assign({}, f?.style), x),
        onClose: () => {
          S?.(), E();
        }
      })), () => {
        o(w);
      }));
    }, s = {
      open: a,
      destroy: (l) => {
        var u;
        l !== void 0 ? o(l) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((l) => {
      const u = (d, f, p) => {
        let v;
        d && typeof d == "object" && "content" in d ? v = d : v = {
          content: d
        };
        let h, m;
        typeof f == "function" ? m = f : (h = f, m = p);
        const C = Object.assign(Object.assign({
          onClose: m,
          duration: h
        }, v), {
          type: l
        });
        return a(C);
      };
      s[l] = u;
    }), s;
  }, []), /* @__PURE__ */ g.createElement(uh, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function dh(e) {
  return cd(e);
}
function ld(e, t) {
  this.v = e, this.k = t;
}
function Ye(e, t, n, r) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  Ye = function(i, s, c, l) {
    function u(d, f) {
      Ye(i, d, function(p) {
        return this._invoke(d, f, p);
      });
    }
    s ? o ? o(i, s, {
      value: c,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[s] = c : (u("next", 0), u("throw", 1), u("return", 2));
  }, Ye(e, t, n, r);
}
function ns() {
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", o = n.toStringTag || "@@toStringTag";
  function a(p, v, h, m) {
    var C = v && v.prototype instanceof s ? v : s, y = Object.create(C.prototype);
    return Ye(y, "_invoke", (function(x, S, b) {
      var w, E, $, O = 0, P = b || [], _ = !1, I = {
        p: 0,
        n: 0,
        v: e,
        a: A,
        f: A.bind(e, 4),
        d: function(j, k) {
          return w = j, E = 0, $ = e, I.n = k, i;
        }
      };
      function A(M, j) {
        for (E = M, $ = j, t = 0; !_ && O && !k && t < P.length; t++) {
          var k, L = P[t], G = I.p, H = L[2];
          M > 3 ? (k = H === j) && ($ = L[(E = L[4]) ? 5 : (E = 3, 3)], L[4] = L[5] = e) : L[0] <= G && ((k = M < 2 && G < L[1]) ? (E = 0, I.v = j, I.n = L[1]) : G < H && (k = M < 3 || L[0] > j || j > H) && (L[4] = M, L[5] = j, I.n = H, E = 0));
        }
        if (k || M > 1) return i;
        throw _ = !0, j;
      }
      return function(M, j, k) {
        if (O > 1) throw TypeError("Generator is already running");
        for (_ && j === 1 && A(j, k), E = j, $ = k; (t = E < 2 ? e : $) || !_; ) {
          w || (E ? E < 3 ? (E > 1 && (I.n = -1), A(E, $)) : I.n = $ : I.v = $);
          try {
            if (O = 2, w) {
              if (E || (M = "next"), t = w[M]) {
                if (!(t = t.call(w, $))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                $ = t.value, E < 2 && (E = 0);
              } else E === 1 && (t = w.return) && t.call(w), E < 2 && ($ = TypeError("The iterator does not provide a '" + M + "' method"), E = 1);
              w = e;
            } else if ((t = (_ = I.n < 0) ? $ : x.call(S, I)) !== i) break;
          } catch (L) {
            w = e, E = 1, $ = L;
          } finally {
            O = 1;
          }
        }
        return {
          value: t,
          done: _
        };
      };
    })(p, h, m), !0), y;
  }
  var i = {};
  function s() {
  }
  function c() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (Ye(t = {}, r, function() {
    return this;
  }), t), d = l.prototype = s.prototype = Object.create(u);
  function f(p) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(p, l) : (p.__proto__ = l, Ye(p, o, "GeneratorFunction")), p.prototype = Object.create(d), p;
  }
  return c.prototype = l, Ye(d, "constructor", l), Ye(l, "constructor", c), c.displayName = "GeneratorFunction", Ye(l, o, "GeneratorFunction"), Ye(d), Ye(d, o, "Generator"), Ye(d, r, function() {
    return this;
  }), Ye(d, "toString", function() {
    return "[object Generator]";
  }), (ns = function() {
    return {
      w: a,
      m: f
    };
  })();
}
function go(e, t) {
  function n(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof ld ? t.resolve(l.v).then(function(u) {
        n("next", u, i, s);
      }, function(u) {
        n("throw", u, i, s);
      }) : t.resolve(l).then(function(u) {
        c.value = u, i(c);
      }, function(u) {
        return n("throw", u, i, s);
      });
    } catch (u) {
      s(u);
    }
  }
  var r;
  this.next || (Ye(go.prototype), Ye(go.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Ye(this, "_invoke", function(o, a, i) {
    function s() {
      return new t(function(c, l) {
        n(o, i, c, l);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function ud(e, t, n, r, o) {
  return new go(ns().w(e, t, n, r), o || Promise);
}
function fh(e, t, n, r, o) {
  var a = ud(e, t, n, r, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function mh(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Pc(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], n = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && n >= e.length && (e = void 0), {
          value: e && e[n++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(X(e) + " is not iterable");
}
function Ze() {
  var e = ns(), t = e.m(Ze), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === n || (s.displayName || s.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var s, c;
    return function(l) {
      s || (s = {
        stop: function() {
          return c(l.a, 2);
        },
        catch: function() {
          return l.v;
        },
        abrupt: function(d, f) {
          return c(l.a, o[d], f);
        },
        delegateYield: function(d, f, p) {
          return s.resultName = f, c(l.d, Pc(d), p);
        },
        finish: function(d) {
          return c(l.f, d);
        }
      }, c = function(d, f, p) {
        l.p = s.prev, l.n = s.next;
        try {
          return d(f, p);
        } finally {
          s.next = l.n;
        }
      }), s.resultName && (s[s.resultName] = l.v, s.resultName = void 0), s.sent = l.v, s.next = l.n;
      try {
        return i.call(this, s);
      } finally {
        l.p = s.prev, l.n = s.next;
      }
    };
  }
  return (Ze = function() {
    return {
      wrap: function(c, l, u, d) {
        return e.w(a(c), l, u, d && d.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(c, l) {
        return new ld(c, l);
      },
      AsyncIterator: go,
      async: function(c, l, u, d, f) {
        return (r(l) ? ud : fh)(a(c), l, u, d, f);
      },
      keys: mh,
      values: Pc
    };
  })();
}
function Nc(e, t, n, r, o, a, i) {
  try {
    var s = e[a](i), c = s.value;
  } catch (l) {
    return void n(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, o);
}
function an(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var a = e.apply(t, n);
      function i(c) {
        Nc(a, r, o, i, s, "next", c);
      }
      function s(c) {
        Nc(a, r, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var vr = T({}, Rl), gh = vr.version, ma = vr.render, vh = vr.unmountComponentAtNode, Fo;
try {
  var ph = Number((gh || "").split(".")[0]);
  ph >= 18 && (Fo = vr.createRoot);
} catch {
}
function Tc(e) {
  var t = vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && X(t) === "object" && (t.usingClientEntryPoint = e);
}
var vo = "__rc_react_root__";
function hh(e, t) {
  Tc(!0);
  var n = t[vo] || Fo(t);
  Tc(!1), n.render(e), t[vo] = n;
}
function yh(e, t) {
  ma?.(e, t);
}
function bh(e, t) {
  if (Fo) {
    hh(e, t);
    return;
  }
  yh(e, t);
}
function Ch(e) {
  return li.apply(this, arguments);
}
function li() {
  return li = an(/* @__PURE__ */ Ze().mark(function e(t) {
    return Ze().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[vo]) === null || o === void 0 || o.unmount(), delete t[vo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), li.apply(this, arguments);
}
function xh(e) {
  vh(e);
}
function Sh(e) {
  return ui.apply(this, arguments);
}
function ui() {
  return ui = an(/* @__PURE__ */ Ze().mark(function e(t) {
    return Ze().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Fo === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", Ch(t));
        case 2:
          xh(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), ui.apply(this, arguments);
}
const Eh = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = Number.parseInt(g.version.split(".")[0], 10), r = Object.keys(Rl);
    process.env.NODE_ENV !== "production" && Gt(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return bh(e, t), () => Sh(t);
};
let wh = Eh;
function jo(e) {
  return wh;
}
const po = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function ko(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const $h = (function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), n = t.width, r = t.height;
      if (n || r)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}), Oh = (e) => {
  const {
    componentCls: t,
    colorPrimary: n
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${n})`,
      boxShadow: "0 0 0 0 currentcolor",
      opacity: 0.2,
      // =================== Motion ===================
      "&.wave-motion-appear": {
        transition: [`box-shadow 0.4s ${e.motionEaseOutCirc}`, `opacity 2s ${e.motionEaseOutCirc}`].join(","),
        "&-active": {
          boxShadow: "0 0 0 6px currentcolor",
          opacity: 0
        },
        "&.wave-quick": {
          transition: [`box-shadow ${e.motionDurationSlow} ${e.motionEaseInOut}`, `opacity ${e.motionDurationSlow} ${e.motionEaseInOut}`].join(",")
        }
      }
    }
  };
}, Ph = Nv("Wave", Oh), dd = `${uo}-wave-target`;
function Nh(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function Th(e) {
  var t;
  const {
    borderTopColor: n,
    borderColor: r,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [n, r, o].find(Nh)) !== null && t !== void 0 ? t : null;
}
function ga(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Rh = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, a = g.useRef(null), i = g.useRef(null);
  g.useEffect(() => {
    i.current = o();
  }, []);
  const [s, c] = g.useState(null), [l, u] = g.useState([]), [d, f] = g.useState(0), [p, v] = g.useState(0), [h, m] = g.useState(0), [C, y] = g.useState(0), [x, S] = g.useState(!1), b = {
    left: d,
    top: p,
    width: h,
    height: C,
    borderRadius: l.map(($) => `${$}px`).join(" ")
  };
  s && (b["--wave-color"] = s);
  function w() {
    const $ = getComputedStyle(n);
    c(Th(n));
    const O = $.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: _
    } = $;
    f(O ? n.offsetLeft : ga(-Number.parseFloat(P))), v(O ? n.offsetTop : ga(-Number.parseFloat(_))), m(n.offsetWidth), y(n.offsetHeight);
    const {
      borderTopLeftRadius: I,
      borderTopRightRadius: A,
      borderBottomLeftRadius: M,
      borderBottomRightRadius: j
    } = $;
    u([I, A, j, M].map((k) => ga(Number.parseFloat(k))));
  }
  if (g.useEffect(() => {
    if (n) {
      const $ = zt(() => {
        w(), S(!0);
      });
      let O;
      return typeof ResizeObserver < "u" && (O = new ResizeObserver(w), O.observe(n)), () => {
        zt.cancel($), O?.disconnect();
      };
    }
  }, [n]), !x)
    return null;
  const E = (r === "Checkbox" || r === "Radio") && n?.classList.contains(dd);
  return /* @__PURE__ */ g.createElement(mr, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: ($, O) => {
      var P, _;
      if (O.deadline || O.propertyName === "opacity") {
        const I = (P = a.current) === null || P === void 0 ? void 0 : P.parentElement;
        (_ = i.current) === null || _ === void 0 || _.call(i).then(() => {
          I?.remove();
        });
      }
      return !1;
    }
  }, ({
    className: $
  }, O) => /* @__PURE__ */ g.createElement("div", {
    ref: xo(a, O),
    className: W(t, $, {
      "wave-quick": E
    }),
    style: b
  }));
}, _h = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e?.insertBefore(o, e?.firstChild);
  const a = jo();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ g.createElement(Rh, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, Mh = (e, t, n) => {
  const {
    wave: r
  } = g.useContext(be), [, o, a] = _t(), i = Tt((l) => {
    const u = e.current;
    if (r?.disabled || !u)
      return;
    const d = u.querySelector(`.${dd}`) || u, {
      showEffect: f
    } = r || {};
    (f || _h)(d, {
      className: t,
      token: o,
      component: n,
      event: l,
      hashId: a
    });
  }), s = g.useRef(null);
  return (l) => {
    zt.cancel(s.current), s.current = zt(() => {
      i(l);
    });
  };
}, fd = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = ie(be), a = ve(null), i = o("wave"), [, s] = Ph(i), c = Mh(a, W(i, s), r);
  if (N.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || n)
      return;
    const d = (f) => {
      !$h(f.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || c(f);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [n]), !/* @__PURE__ */ N.isValidElement(t))
    return t ?? null;
  const l = Mi(t) ? xo(Ll(t), a) : a;
  return Ju(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (fd.displayName = "Wave");
const Ih = (e) => {
  const t = N.useContext(Tn);
  return N.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, md = /* @__PURE__ */ g.createContext(null), Ah = (e, t) => {
  const n = g.useContext(md), r = g.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = n, s = o === "vertical" ? "-vertical-" : "-";
    return W(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: a,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n?.compactSize,
    compactDirection: n?.compactDirection,
    compactItemClassnames: r
  };
}, Fh = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement(md.Provider, {
    value: null
  }, t);
};
var jh = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const gd = /* @__PURE__ */ g.createContext(void 0), kh = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = g.useContext(be), {
    prefixCls: r,
    size: o,
    className: a
  } = e, i = jh(e, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , c] = _t(), l = g.useMemo(() => {
    switch (o) {
      case "large":
        return "lg";
      case "small":
        return "sm";
      default:
        return "";
    }
  }, [o]);
  if (process.env.NODE_ENV !== "production") {
    const d = st("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = W(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: n === "rtl"
  }, a, c);
  return /* @__PURE__ */ g.createElement(gd.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, Rc = /^[\u4E00-\u9FA5]{2}$/, di = Rc.test.bind(Rc);
function vd(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
function _c(e) {
  return typeof e == "string";
}
function zr(e) {
  return e === "text" || e === "link";
}
function Lh(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && _c(e.type) && di(e.props.children) ? Ju(e, {
    children: e.props.children.split("").join(n)
  }) : _c(e) ? di(e) ? /* @__PURE__ */ N.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ N.createElement("span", null, e) : jp(e) ? /* @__PURE__ */ N.createElement("span", null, e) : e;
}
function Dh(e, t) {
  let n = !1;
  const r = [];
  return N.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (n && i) {
      const s = r.length - 1, c = r[s];
      r[s] = `${c}${o}`;
    } else
      r.push(o);
    n = i;
  }), N.Children.map(r, (o) => Lh(o, t));
}
["default", "primary", "danger"].concat(z(Gi));
const fi = /* @__PURE__ */ In((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: a
  } = e, i = W(`${a}-icon`, n);
  return /* @__PURE__ */ N.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, o);
}), Mc = /* @__PURE__ */ In((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: a
  } = e, i = W(`${n}-loading-icon`, r);
  return /* @__PURE__ */ N.createElement(fi, {
    prefixCls: n,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ N.createElement(Ji, {
    className: a
  }));
}), va = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), pa = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Bh = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: a,
    mount: i
  } = e, s = !!n;
  return r ? /* @__PURE__ */ N.createElement(Mc, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ N.createElement(mr, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: va,
    onAppearActive: pa,
    onEnterStart: va,
    onEnterActive: pa,
    onLeaveStart: pa,
    onLeaveActive: va
  }, ({
    className: c,
    style: l
  }, u) => {
    const d = Object.assign(Object.assign({}, a), l);
    return /* @__PURE__ */ N.createElement(Mc, {
      prefixCls: t,
      className: W(o, c),
      style: d,
      ref: u
    });
  });
}, Ic = (e, t) => ({
  // Border
  [`> span, > ${e}`]: {
    "&:not(:last-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineEndColor: t
        }
      }
    },
    "&:not(:first-child)": {
      [`&, & > ${e}`]: {
        "&:not(:disabled)": {
          borderInlineStartColor: t
        }
      }
    }
  }
}), Vh = (e) => {
  const {
    componentCls: t,
    fontSize: n,
    lineWidth: r,
    groupBorderColor: o,
    colorErrorHover: a
  } = e;
  return {
    [`${t}-group`]: [
      {
        position: "relative",
        display: "inline-flex",
        // Border
        [`> span, > ${t}`]: {
          "&:not(:last-child)": {
            [`&, & > ${t}`]: {
              borderStartEndRadius: 0,
              borderEndEndRadius: 0
            }
          },
          "&:not(:first-child)": {
            marginInlineStart: e.calc(r).mul(-1).equal(),
            [`&, & > ${t}`]: {
              borderStartStartRadius: 0,
              borderEndStartRadius: 0
            }
          }
        },
        [t]: {
          position: "relative",
          zIndex: 1,
          "&:hover, &:focus, &:active": {
            zIndex: 2
          },
          "&[disabled]": {
            zIndex: 0
          }
        },
        [`${t}-icon-only`]: {
          fontSize: n
        }
      },
      // Border Color
      Ic(`${t}-primary`, o),
      Ic(`${t}-danger`, a)
    ]
  };
};
var Hh = ["b"], zh = ["v"], ha = function(t) {
  return Math.round(Number(t || 0));
}, Wh = function(t) {
  if (t instanceof xe)
    return t;
  if (t && X(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = Ge(n, Hh);
    return T(T({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, kt = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    return De(this, n), t.call(this, Wh(r));
  }
  return Be(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = ha(o.s * 100), i = ha(o.b * 100), s = ha(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = Ge(o, zh);
      return T(T({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), n;
})(xe), Gh = "rc-color-picker", Cn = function(t) {
  return t instanceof kt ? t : new kt(t);
}, qh = Cn("#1677ff"), pd = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, p = d / 2, v = f / 2, h = (n.x + p) / c, m = 1 - (n.y + v) / l, C = a.toHsb(), y = h, x = (n.x + p) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return Cn(T(T({}, C), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return Cn(T(T({}, C), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return Cn({
    h: C.h,
    s: h <= 0 ? 0 : h,
    b: m >= 1 ? 1 : m,
    a: C.a
  });
}, hd = function(t, n) {
  var r = t.toHsb();
  switch (n) {
    case "hue":
      return {
        x: r.h / 360 * 100,
        y: 50
      };
    case "alpha":
      return {
        x: t.a * 100,
        y: 50
      };
    // Picker panel
    default:
      return {
        x: r.s * 100,
        y: (1 - r.b) * 100
      };
  }
}, Uh = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(r, "-color-block");
  return /* @__PURE__ */ N.createElement("div", {
    className: W(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ N.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: n
    }
  }));
};
function Xh(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function yd(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = Qt({
    x: 0,
    y: 0
  }), u = D(l, 2), d = u[0], f = u[1], p = ve(null), v = ve(null);
  Ke(function() {
    f(i());
  }, [s]), Ke(function() {
    return function() {
      document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", v.current), p.current = null, v.current = null;
    };
  }, []);
  var h = function(S) {
    var b = Xh(S), w = b.pageX, E = b.pageY, $ = n.current.getBoundingClientRect(), O = $.x, P = $.y, _ = $.width, I = $.height, A = t.current.getBoundingClientRect(), M = A.width, j = A.height, k = M / 2, L = j / 2, G = Math.max(0, Math.min(w - O, _)) - k, H = Math.max(0, Math.min(E - P, I)) - L, J = {
      x: G,
      y: r === "x" ? d.y : H
    };
    if (M === 0 && j === 0 || M !== j)
      return !1;
    o?.(J);
  }, m = function(S) {
    S.preventDefault(), h(S);
  }, C = function(S) {
    S.preventDefault(), document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", v.current), p.current = null, v.current = null, a?.();
  }, y = function(S) {
    document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), !c && (h(S), document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), document.addEventListener("touchmove", m), document.addEventListener("touchend", C), p.current = m, v.current = C);
  };
  return [d, y];
}
var bd = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ N.createElement("div", {
    className: W("".concat(a, "-handler"), R({}, "".concat(a, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, Cd = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ N.createElement("div", {
    className: "".concat(o, "-palette"),
    style: T({
      position: "relative"
    }, r)
  }, n);
}, xd = /* @__PURE__ */ In(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ N.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), Yh = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = ve(), c = ve(), l = ve(n), u = Tt(function(h) {
    var m = pd({
      offset: h,
      targetRef: c,
      containerRef: s,
      color: n
    });
    l.current = m, r(m);
  }), d = yd({
    color: n,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return hd(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a?.(l.current);
    },
    disabledDrag: i
  }), f = D(d, 2), p = f[0], v = f[1];
  return /* @__PURE__ */ N.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: v,
    onTouchStart: v
  }, /* @__PURE__ */ N.createElement(Cd, {
    prefixCls: o
  }, /* @__PURE__ */ N.createElement(xd, {
    x: p.x,
    y: p.y,
    ref: c
  }, /* @__PURE__ */ N.createElement(bd, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ N.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Kh = function(t, n) {
  var r = dv(t, {
    value: n
  }), o = D(r, 2), a = o[0], i = o[1], s = je(function() {
    return Cn(a);
  }, [a]);
  return [s, i];
}, Zh = function(t) {
  var n = t.colors, r = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = je(function() {
    return n.map(function(l, u) {
      var d = Cn(l);
      return i === "alpha" && u === n.length - 1 && (d = new kt(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ N.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(c, ")")
    }
  }, r);
}, Qh = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = ve(), u = ve(), d = ve(s), f = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, p = Tt(function(S) {
    var b = pd({
      offset: S,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    d.current = b, a(f(b));
  }), v = yd({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return hd(s, c);
    },
    onDragChange: p,
    onDragChangeComplete: function() {
      i(f(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), h = D(v, 2), m = h[0], C = h[1], y = N.useMemo(function() {
    if (c === "hue") {
      var S = s.toHsb();
      S.s = 1, S.b = 1, S.a = 1;
      var b = new kt(S);
      return b;
    }
    return s;
  }, [s, c]), x = N.useMemo(function() {
    return r.map(function(S) {
      return "".concat(S.color, " ").concat(S.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ N.createElement("div", {
    ref: l,
    className: W("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: C,
    onTouchStart: C
  }, /* @__PURE__ */ N.createElement(Cd, {
    prefixCls: n
  }, /* @__PURE__ */ N.createElement(xd, {
    x: m.x,
    y: m.y,
    ref: u
  }, /* @__PURE__ */ N.createElement(bd, {
    size: "small",
    color: y.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ N.createElement(Zh, {
    colors: x,
    type: c,
    prefixCls: n
  })));
};
function Jh(e) {
  return g.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || Qh];
  }, [e]);
}
var e0 = [{
  color: "rgb(255, 0, 0)",
  percent: 0
}, {
  color: "rgb(255, 255, 0)",
  percent: 17
}, {
  color: "rgb(0, 255, 0)",
  percent: 33
}, {
  color: "rgb(0, 255, 255)",
  percent: 50
}, {
  color: "rgb(0, 0, 255)",
  percent: 67
}, {
  color: "rgb(255, 0, 255)",
  percent: 83
}, {
  color: "rgb(255, 0, 0)",
  percent: 100
}], t0 = /* @__PURE__ */ In(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Gh : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, p = e.disabled, v = p === void 0 ? !1 : p, h = e.components, m = Jh(h), C = D(m, 1), y = C[0], x = Kh(r || qh, n), S = D(x, 2), b = S[0], w = S[1], E = je(function() {
    return b.setA(1).toRgbString();
  }, [b]), $ = function(H, J) {
    n || w(H), i?.(H, J);
  }, O = function(H) {
    return new kt(b.setHue(H));
  }, P = function(H) {
    return new kt(b.setA(H / 100));
  }, _ = function(H) {
    $(O(H), {
      type: "hue",
      value: H
    });
  }, I = function(H) {
    $(P(H), {
      type: "alpha",
      value: H
    });
  }, A = function(H) {
    s && s(O(H));
  }, M = function(H) {
    s && s(P(H));
  }, j = W("".concat(a, "-panel"), c, R({}, "".concat(a, "-panel-disabled"), v)), k = {
    prefixCls: a,
    disabled: v,
    color: b
  }, L = /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(Yh, ue({
    onChange: $
  }, k, {
    onChangeComplete: s
  })), /* @__PURE__ */ N.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ N.createElement("div", {
    className: W("".concat(a, "-slider-group"), R({}, "".concat(a, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ N.createElement(y, ue({}, k, {
    type: "hue",
    colors: e0,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: _,
    onChangeComplete: A
  })), !f && /* @__PURE__ */ N.createElement(y, ue({}, k, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: E
    }],
    min: 0,
    max: 100,
    value: b.a * 100,
    onChange: I,
    onChangeComplete: M
  }))), /* @__PURE__ */ N.createElement(Uh, {
    color: b.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ N.createElement("div", {
    className: j,
    style: l,
    ref: t
  }, typeof u == "function" ? u(L) : L);
});
process.env.NODE_ENV !== "production" && (t0.displayName = "ColorPicker");
const n0 = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", r0 = (e, t) => e ? n0(e, t) : "";
let o0 = /* @__PURE__ */ (function() {
  function e(t) {
    De(this, e);
    var n;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (n = t.colors) === null || n === void 0 ? void 0 : n.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const r = Array.isArray(t);
    r && t.length ? (this.colors = t.map(({
      color: o,
      percent: a
    }) => ({
      color: new e(o),
      percent: a
    })), this.metaColor = new kt(this.colors[0].color.metaColor)) : this.metaColor = new kt(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Be(e, [{
    key: "toHsb",
    value: function() {
      return this.metaColor.toHsb();
    }
  }, {
    key: "toHsbString",
    value: function() {
      return this.metaColor.toHsbString();
    }
  }, {
    key: "toHex",
    value: function() {
      return r0(this.toHexString(), this.metaColor.a < 1);
    }
  }, {
    key: "toHexString",
    value: function() {
      return this.metaColor.toHexString();
    }
  }, {
    key: "toRgb",
    value: function() {
      return this.metaColor.toRgb();
    }
  }, {
    key: "toRgbString",
    value: function() {
      return this.metaColor.toRgbString();
    }
  }, {
    key: "isGradient",
    value: function() {
      return !!this.colors && !this.cleared;
    }
  }, {
    key: "getColors",
    value: function() {
      return this.colors || [{
        color: this,
        percent: 0
      }];
    }
  }, {
    key: "toCssString",
    value: function() {
      const {
        colors: n
      } = this;
      return n ? `linear-gradient(90deg, ${n.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(n) {
      return !n || this.isGradient() !== n.isGradient() ? !1 : this.isGradient() ? this.colors.length === n.colors.length && this.colors.every((r, o) => {
        const a = n.colors[o];
        return r.percent === a.percent && r.color.equals(a.color);
      }) : this.toHexString() === n.toHexString();
    }
  }]);
})();
const a0 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), i0 = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Sd = (e, t, n, r, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, a0(r)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, i0(r)), {
      animationPlayState: "paused"
    }),
    [`
      ${a}${e}-enter${e}-enter-active,
      ${a}${e}-appear${e}-appear-active
    `]: {
      animationName: t,
      animationPlayState: "running"
    },
    [`${a}${e}-leave${e}-leave-active`]: {
      animationName: n,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, s0 = new Ne("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), c0 = new Ne("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), l0 = (e, t = !1) => {
  const {
    antCls: n
  } = e, r = `${n}-fade`, o = t ? "&" : "";
  return [Sd(r, s0, c0, e.motionDurationMid, t), {
    [`
        ${o}${r}-enter,
        ${o}${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${o}${r}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, u0 = new Ne("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), d0 = new Ne("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Ac = new Ne("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Fc = new Ne("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), f0 = new Ne("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), m0 = new Ne("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), g0 = new Ne("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), v0 = new Ne("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), p0 = new Ne("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), h0 = new Ne("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), y0 = new Ne("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), b0 = new Ne("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), C0 = {
  zoom: {
    inKeyframes: u0,
    outKeyframes: d0
  },
  "zoom-big": {
    inKeyframes: Ac,
    outKeyframes: Fc
  },
  "zoom-big-fast": {
    inKeyframes: Ac,
    outKeyframes: Fc
  },
  "zoom-left": {
    inKeyframes: g0,
    outKeyframes: v0
  },
  "zoom-right": {
    inKeyframes: p0,
    outKeyframes: h0
  },
  "zoom-up": {
    inKeyframes: f0,
    outKeyframes: m0
  },
  "zoom-down": {
    inKeyframes: y0,
    outKeyframes: b0
  }
}, x0 = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = C0[t];
  return [Sd(r, o, a, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, S0 = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = e.toRgb(), i = new kt(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, Ed = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return Ct(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, wd = (e) => {
  var t, n, r, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : to(s), d = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : to(c), f = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : to(l), p = S0(new o0(e.colorBgSolid), "#fff") ? "#000" : "#fff", v = Gi.reduce((h, m) => Object.assign(Object.assign({}, h), {
    [`${m}ShadowColor`]: `0 ${re(e.controlOutlineWidth)} 0 ${qn(e[`${m}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, v), {
    fontWeight: 400,
    iconGap: e.marginXS,
    defaultShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlTmpOutline}`,
    primaryShadow: `0 ${e.controlOutlineWidth}px 0 ${e.controlOutline}`,
    dangerShadow: `0 ${e.controlOutlineWidth}px 0 ${e.colorErrorOutline}`,
    primaryColor: e.colorTextLightSolid,
    dangerColor: e.colorTextLightSolid,
    borderColorDisabled: e.colorBorder,
    defaultGhostColor: e.colorBgContainer,
    ghostBg: "transparent",
    defaultGhostBorderColor: e.colorBgContainer,
    paddingInline: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineLG: e.paddingContentHorizontal - e.lineWidth,
    paddingInlineSM: 8 - e.lineWidth,
    onlyIconSize: "inherit",
    onlyIconSizeSM: "inherit",
    onlyIconSizeLG: "inherit",
    groupBorderColor: e.colorPrimaryHover,
    linkHoverBg: "transparent",
    textTextColor: e.colorText,
    textTextHoverColor: e.colorText,
    textTextActiveColor: e.colorText,
    textHoverBg: e.colorFillTertiary,
    defaultColor: e.colorText,
    defaultBg: e.colorBgContainer,
    defaultBorderColor: e.colorBorder,
    defaultBorderColorDisabled: e.colorBorder,
    defaultHoverBg: e.colorBgContainer,
    defaultHoverColor: e.colorPrimaryHover,
    defaultHoverBorderColor: e.colorPrimaryHover,
    defaultActiveBg: e.colorBgContainer,
    defaultActiveColor: e.colorPrimaryActive,
    defaultActiveBorderColor: e.colorPrimaryActive,
    solidTextColor: p,
    contentFontSize: s,
    contentFontSizeSM: c,
    contentFontSizeLG: l,
    contentLineHeight: u,
    contentLineHeightSM: d,
    contentLineHeightLG: f,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * f) / 2 - e.lineWidth, 0)
  });
}, E0 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    iconGap: s,
    calc: c
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: s,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${re(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Iu(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Xi(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${n})`]: {
        marginInlineEnd: "-0.34em",
        letterSpacing: "0.34em"
      },
      [`&${t}-icon-only`]: {
        paddingInline: 0,
        // make `btn-icon-only` not too narrow
        [`&${t}-compact-item`]: {
          flex: "none"
        }
      },
      // Loading
      [`&${t}-loading`]: {
        opacity: o,
        cursor: "default"
      },
      [`${t}-loading-icon`]: {
        transition: ["width", "opacity", "margin"].map((l) => `${l} ${a} ${i}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: c(s).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: c(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: c(s).mul(-1).equal()
          }
        }
      }
    }
  };
}, $d = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), w0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), $0 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Lo = (e, t, n, r, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, $d(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, s))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), O0 = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, $0(e))
}), P0 = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Do = (e, t, n, r) => {
  const a = r && ["link", "text"].includes(r) ? P0 : O0;
  return Object.assign(Object.assign({}, a(e)), $d(e.componentCls, t, n));
}, Bo = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, Do(e, r, o))
}), Vo = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, Do(e, r, o))
}), Ho = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), zo = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Do(e, n, r))
}), Rt = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Do(e, r, o, n))
}), N0 = (e) => {
  const {
    componentCls: t
  } = e;
  return Gi.reduce((n, r) => {
    const o = e[`${r}6`], a = e[`${r}1`], i = e[`${r}5`], s = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, Bo(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: l
      })), Vo(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Ho(e)), zo(e, a, {
        color: o,
        background: s
      }, {
        color: o,
        background: c
      })), Rt(e, o, "link", {
        color: i
      }, {
        color: l
      })), Rt(e, o, "text", {
        color: i,
        background: a
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, T0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, Bo(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Ho(e)), zo(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), Lo(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Rt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), R0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Vo(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Ho(e)), zo(e, e.colorPrimaryBg, {
  color: e.colorPrimary,
  background: e.colorPrimaryBgHover
}, {
  color: e.colorPrimary,
  background: e.colorPrimaryBorder
})), Rt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Rt(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Lo(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), _0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, Bo(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Vo(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Ho(e)), zo(e, e.colorErrorBg, {
  color: e.colorError,
  background: e.colorErrorBgFilledHover
}, {
  color: e.colorError,
  background: e.colorErrorBgActive
})), Rt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Rt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Lo(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), M0 = (e) => Object.assign(Object.assign({}, Rt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Lo(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), I0 = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: T0(e),
    [`${t}-color-primary`]: R0(e),
    [`${t}-color-dangerous`]: _0(e),
    [`${t}-color-link`]: M0(e)
  }, N0(e));
}, A0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Vo(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Rt(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), Bo(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Rt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), rs = (e, t = "") => {
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: s,
    buttonPaddingVertical: c,
    buttonIconOnlyFontSize: l
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: r,
        padding: `${re(c)} ${re(i)}`,
        borderRadius: a,
        [`&${n}-icon-only`]: {
          width: r,
          [s]: {
            fontSize: l
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: w0(e)
    },
    {
      [`${n}${n}-round${t}`]: {
        borderRadius: e.controlHeight,
        [`&:not(${n}-icon-only)`]: {
          paddingInline: e.buttonPaddingHorizontal
        }
      }
    }
  ];
}, F0 = (e) => {
  const t = Ct(e, {
    fontSize: e.contentFontSize
  });
  return rs(t, e.componentCls);
}, j0 = (e) => {
  const t = Ct(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return rs(t, `${e.componentCls}-sm`);
}, k0 = (e) => {
  const t = Ct(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return rs(t, `${e.componentCls}-lg`);
}, L0 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      [`&${t}-block`]: {
        width: "100%"
      }
    }
  };
}, D0 = rn("Button", (e) => {
  const t = Ed(e);
  return [
    // Shared
    E0(t),
    // Size
    F0(t),
    j0(t),
    k0(t),
    // Block
    L0(t),
    // Color
    I0(t),
    // https://github.com/ant-design/ant-design/issues/50969
    A0(t),
    // Button Group
    Vh(t)
  ];
}, wd, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function B0(e, t, n, r) {
  const {
    focusElCls: o,
    focus: a,
    borderElCls: i
  } = n, s = i ? "> *" : "", c = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((l) => `&:${l} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [c]: {
        zIndex: 3
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${s}`]: {
        zIndex: 0
      }
    })
  };
}
function V0(e, t, n) {
  const {
    borderElCls: r
  } = n, o = r ? `> ${r}` : "";
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item) ${o}`]: {
      borderRadius: 0
    },
    [`&-item:not(${t}-last-item)${t}-first-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`&-item:not(${t}-first-item)${t}-last-item`]: {
      [`& ${o}, &${e}-sm ${o}, &${e}-lg ${o}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    }
  };
}
function H0(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, B0(e, r, t, n)), V0(n, r, t))
  };
}
function z0(e, t, n) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${n}-status-success)`]: {
      zIndex: 2
    },
    "&-item": {
      "&:hover,&:focus,&:active": {
        zIndex: 3
      },
      "&[disabled]": {
        zIndex: 0
      }
    }
  };
}
function W0(e, t) {
  return {
    [`&-item:not(${t}-first-item):not(${t}-last-item)`]: {
      borderRadius: 0
    },
    [`&-item${t}-first-item:not(${t}-last-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderEndEndRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&-item${t}-last-item:not(${t}-first-item)`]: {
      [`&, &${e}-sm, &${e}-lg`]: {
        borderStartStartRadius: 0,
        borderStartEndRadius: 0
      }
    }
  };
}
function G0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, z0(e, t, e.componentCls)), W0(e.componentCls, t))
  };
}
const q0 = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: n,
    lineWidth: r,
    calc: o
  } = e, a = o(r).mul(-1).equal(), i = (s) => {
    const c = `${t}-compact${s ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${c} + ${c}::before`]: {
        position: "absolute",
        top: s ? a : 0,
        insetInlineStart: s ? 0 : a,
        backgroundColor: n,
        content: '""',
        width: s ? "100%" : r,
        height: s ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, U0 = Yi(["Button", "compact"], (e) => {
  const t = Ed(e);
  return [
    // Space Compact
    H0(t),
    G0(t),
    q0(t)
  ];
}, wd);
var X0 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Y0(e) {
  if (typeof e == "object" && e) {
    let t = e?.delay;
    return t = !Number.isNaN(t) && typeof t == "number" ? t : 0, {
      loading: t <= 0,
      delay: t
    };
  }
  return {
    loading: !!e,
    delay: 0
  };
}
const K0 = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, Z0 = /* @__PURE__ */ N.forwardRef((e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: s,
    type: c,
    danger: l = !1,
    shape: u,
    size: d,
    styles: f,
    disabled: p,
    className: v,
    rootClassName: h,
    children: m,
    icon: C,
    iconPosition: y = "start",
    ghost: x = !1,
    block: S = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: b = "button",
    classNames: w,
    style: E = {},
    autoInsertSpace: $,
    autoFocus: O
  } = e, P = X0(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), _ = c || "default", {
    button: I
  } = N.useContext(be), A = u || I?.shape || "default", [M, j] = je(() => {
    if (i && s)
      return [i, s];
    if (c || l) {
      const Te = K0[_] || [];
      return l ? ["danger", Te[1]] : Te;
    }
    return I?.color && I?.variant ? [I.color, I.variant] : ["default", "outlined"];
  }, [i, s, c, l, I?.color, I?.variant, _]), L = M === "danger" ? "dangerous" : M, {
    getPrefixCls: G,
    direction: H,
    autoInsertSpace: J,
    className: ee,
    style: Q,
    classNames: Z,
    styles: Y
  } = Ou("button"), q = (n = $ ?? J) !== null && n !== void 0 ? n : !0, U = G("btn", a), [ae, Pe, Ce] = D0(U), Se = ie(fo), Ee = p ?? Se, V = ie(gd), pe = je(() => Y0(o), [o]), [B, te] = Qt(pe.loading), [se, Qe] = Qt(!1), ye = ve(null), Ve = _i(t, ye), Fe = sm.count(m) === 1 && !C && !zr(j), we = ve(!0);
  N.useEffect(() => (we.current = !1, () => {
    we.current = !0;
  }), []), $n(() => {
    let Te = null;
    pe.delay > 0 ? Te = setTimeout(() => {
      Te = null, te(!0);
    }, pe.delay) : te(pe.loading);
    function gt() {
      Te && (clearTimeout(Te), Te = null);
    }
    return gt;
  }, [pe.delay, pe.loading]), Ke(() => {
    if (!ye.current || !q)
      return;
    const Te = ye.current.textContent || "";
    Fe && di(Te) ? se || Qe(!0) : se && Qe(!1);
  }), Ke(() => {
    O && ye.current && ye.current.focus();
  }, []);
  const Oe = N.useCallback((Te) => {
    var gt;
    if (B || Ee) {
      Te.preventDefault();
      return;
    }
    (gt = e.onClick) === null || gt === void 0 || gt.call(e, ("href" in e, Te));
  }, [e.onClick, B, Ee]);
  if (process.env.NODE_ENV !== "production") {
    const Te = st("Button");
    process.env.NODE_ENV !== "production" && Te(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Te(!(x && zr(j)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: qe,
    compactItemClassnames: et
  } = Ah(U, H), Ue = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, cn = Ih((Te) => {
    var gt, Hn;
    return (Hn = (gt = d ?? qe) !== null && gt !== void 0 ? gt : V) !== null && Hn !== void 0 ? Hn : Te;
  }), Er = cn && (r = Ue[cn]) !== null && r !== void 0 ? r : "", Qo = B ? "loading" : C, Bn = ko(P, ["navigate"]), wr = W(U, Pe, Ce, {
    [`${U}-${A}`]: A !== "default" && A,
    // Compatible with versions earlier than 5.21.0
    [`${U}-${_}`]: _,
    [`${U}-dangerous`]: l,
    [`${U}-color-${L}`]: L,
    [`${U}-variant-${j}`]: j,
    [`${U}-${Er}`]: Er,
    [`${U}-icon-only`]: !m && m !== 0 && !!Qo,
    [`${U}-background-ghost`]: x && !zr(j),
    [`${U}-loading`]: B,
    [`${U}-two-chinese-chars`]: se && q && !B,
    [`${U}-block`]: S,
    [`${U}-rtl`]: H === "rtl",
    [`${U}-icon-end`]: y === "end"
  }, et, v, h, ee), $r = Object.assign(Object.assign({}, Q), E), Or = W(w?.icon, Z.icon), Pr = Object.assign(Object.assign({}, f?.icon || {}), Y.icon || {}), Nr = C && !B ? /* @__PURE__ */ N.createElement(fi, {
    prefixCls: U,
    className: Or,
    style: Pr
  }, C) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ N.createElement(fi, {
    prefixCls: U,
    className: Or,
    style: Pr
  }, o.icon) : /* @__PURE__ */ N.createElement(Bh, {
    existIcon: !!C,
    prefixCls: U,
    loading: B,
    mount: we.current
  }), Tr = m || m === 0 ? Dh(m, Fe && q) : null;
  if (Bn.href !== void 0)
    return ae(/* @__PURE__ */ N.createElement("a", Object.assign({}, Bn, {
      className: W(wr, {
        [`${U}-disabled`]: Ee
      }),
      href: Ee ? void 0 : Bn.href,
      style: $r,
      onClick: Oe,
      ref: Ve,
      tabIndex: Ee ? -1 : 0,
      "aria-disabled": Ee
    }), Nr, Tr));
  let Vn = /* @__PURE__ */ N.createElement("button", Object.assign({}, P, {
    type: b,
    className: wr,
    style: $r,
    onClick: Oe,
    disabled: Ee,
    ref: Ve
  }), Nr, Tr, et && /* @__PURE__ */ N.createElement(U0, {
    prefixCls: U
  }));
  return zr(j) || (Vn = /* @__PURE__ */ N.createElement(fd, {
    component: "Button",
    disabled: B
  }, Vn)), ae(Vn);
}), kn = Z0;
kn.Group = kh;
kn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (kn.displayName = "Button");
const ya = (e) => typeof e?.then == "function", Od = (e) => {
  const {
    type: t,
    children: n,
    prefixCls: r,
    buttonProps: o,
    close: a,
    autoFocus: i,
    emitEvent: s,
    isSilent: c,
    quitOnNullishReturnValue: l,
    actionFn: u
  } = e, d = g.useRef(!1), f = g.useRef(null), [p, v] = Rn(!1), h = (...y) => {
    a?.apply(void 0, y);
  };
  g.useEffect(() => {
    let y = null;
    return i && (y = setTimeout(() => {
      var x;
      (x = f.current) === null || x === void 0 || x.focus({
        preventScroll: !0
      });
    })), () => {
      y && clearTimeout(y);
    };
  }, [i]);
  const m = (y) => {
    ya(y) && (v(!0), y.then((...x) => {
      v(!1, !0), h.apply(void 0, x), d.current = !1;
    }, (x) => {
      if (v(!1, !0), d.current = !1, !c?.())
        return Promise.reject(x);
    }));
  }, C = (y) => {
    if (d.current)
      return;
    if (d.current = !0, !u) {
      h();
      return;
    }
    let x;
    if (s) {
      if (x = u(y), l && !ya(x)) {
        d.current = !1, h(y);
        return;
      }
    } else if (u.length)
      x = u(a), d.current = !1;
    else if (x = u(), !ya(x)) {
      h();
      return;
    }
    m(x);
  };
  return /* @__PURE__ */ g.createElement(kn, Object.assign({}, vd(t), {
    onClick: C,
    loading: p,
    prefixCls: r
  }, o, {
    ref: f
  }), n);
}, pr = /* @__PURE__ */ N.createContext({}), {
  Provider: Pd
} = pr, jc = () => {
  const {
    autoFocusButton: e,
    cancelButtonProps: t,
    cancelTextLocale: n,
    isSilent: r,
    mergedOkCancel: o,
    rootPrefixCls: a,
    close: i,
    onCancel: s,
    onConfirm: c
  } = ie(pr);
  return o ? /* @__PURE__ */ N.createElement(Od, {
    isSilent: r,
    actionFn: s,
    close: (...l) => {
      i?.apply(void 0, l), c?.(!1);
    },
    autoFocus: e === "cancel",
    buttonProps: t,
    prefixCls: `${a}-btn`
  }, n) : null;
}, kc = () => {
  const {
    autoFocusButton: e,
    close: t,
    isSilent: n,
    okButtonProps: r,
    rootPrefixCls: o,
    okTextLocale: a,
    okType: i,
    onConfirm: s,
    onOk: c
  } = ie(pr);
  return /* @__PURE__ */ N.createElement(Od, {
    isSilent: n,
    type: i || "primary",
    actionFn: c,
    close: (...l) => {
      t?.apply(void 0, l), s?.(!0);
    },
    autoFocus: e === "ok",
    buttonProps: r,
    prefixCls: `${o}-btn`
  }, a);
};
var Nd = /* @__PURE__ */ g.createContext(null), Lc = [];
function Q0(e, t) {
  var n = g.useState(function() {
    if (!Je())
      return null;
    var v = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && v.setAttribute("data-debug", t), v;
  }), r = D(n, 1), o = r[0], a = g.useRef(!1), i = g.useContext(Nd), s = g.useState(Lc), c = D(s, 2), l = c[0], u = c[1], d = i || (a.current ? void 0 : function(v) {
    u(function(h) {
      var m = [v].concat(z(h));
      return m;
    });
  });
  function f() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function p() {
    var v;
    (v = o.parentElement) === null || v === void 0 || v.removeChild(o), a.current = !1;
  }
  return $n(function() {
    return e ? i ? i(f) : f() : p(), p;
  }, [e]), $n(function() {
    l.length && (l.forEach(function(v) {
      return v();
    }), u(Lc));
  }, [l]), [o, d];
}
function J0(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), c = parseInt(s.width, 10), l = parseInt(s.height, 10);
    try {
      var u = c ? "width: ".concat(s.width, ";") : "", d = l ? "height: ".concat(s.height, ";") : "";
      jt(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), t);
    } catch (v) {
      console.error(v), o = c, a = l;
    }
  }
  document.body.appendChild(n);
  var f = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, p = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), tr(t), {
    width: f,
    height: p
  };
}
function ey(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : J0(e);
}
function ty() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var ny = "rc-util-locker-".concat(Date.now()), Dc = 0;
function ry(e) {
  var t = !!e, n = g.useState(function() {
    return Dc += 1, "".concat(ny, "_").concat(Dc);
  }), r = D(n, 1), o = r[0];
  $n(function() {
    if (t) {
      var a = ey(document.body).width, i = ty();
      jt(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      tr(o);
    return function() {
      tr(o);
    };
  }, [t, o]);
}
var oy = !1;
function ay(e) {
  return oy;
}
var Bc = function(t) {
  return t === !1 ? !1 : !Je() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Td = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = g.useState(n), u = D(l, 2), d = u[0], f = u[1], p = d || n;
  process.env.NODE_ENV !== "production" && $e(Je() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), g.useEffect(function() {
    (s || n) && f(n);
  }, [n, s]);
  var v = g.useState(function() {
    return Bc(o);
  }), h = D(v, 2), m = h[0], C = h[1];
  g.useEffect(function() {
    var I = Bc(o);
    C(I ?? null);
  });
  var y = Q0(p && !m, a), x = D(y, 2), S = x[0], b = x[1], w = m ?? S;
  ry(r && n && Je() && (w === S || w === document.body));
  var E = null;
  if (c && Mi(c) && t) {
    var $ = c;
    E = $.ref;
  }
  var O = _i(E, t);
  if (!p || !Je() || m === void 0)
    return null;
  var P = w === !1 || ay(), _ = c;
  return t && (_ = /* @__PURE__ */ g.cloneElement(c, {
    ref: O
  })), /* @__PURE__ */ g.createElement(Nd.Provider, {
    value: b
  }, P ? _ : /* @__PURE__ */ _l(_, w));
});
process.env.NODE_ENV !== "production" && (Td.displayName = "Portal");
var Rd = /* @__PURE__ */ g.createContext({});
function iy() {
  var e = T({}, g);
  return e.useId;
}
var Vc = 0, Hc = iy();
const sy = Hc ? (
  // Use React `useId`
  function(t) {
    var n = Hc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = g.useState("ssr-id"), r = D(n, 2), o = r[0], a = r[1];
    return g.useEffect(function() {
      var i = Vc;
      Vc += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
function zc(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function Wc(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function cy(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, o = r.defaultView || r.parentWindow;
  return n.left += Wc(o), n.top += Wc(o, !0), n;
}
const ly = /* @__PURE__ */ g.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var uy = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, dy = {
  outline: "none"
}, os = /* @__PURE__ */ N.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, a = e.title, i = e.ariaId, s = e.footer, c = e.closable, l = e.closeIcon, u = e.onClose, d = e.children, f = e.bodyStyle, p = e.bodyProps, v = e.modalRender, h = e.onMouseDown, m = e.onMouseUp, C = e.holderRef, y = e.visible, x = e.forceRender, S = e.width, b = e.height, w = e.classNames, E = e.styles, $ = N.useContext(Rd), O = $.panel, P = _i(C, O), _ = ve(), I = ve();
  N.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var Q;
        (Q = _.current) === null || Q === void 0 || Q.focus({
          preventScroll: !0
        });
      },
      changeActive: function(Q) {
        var Z = document, Y = Z.activeElement;
        Q && Y === I.current ? _.current.focus({
          preventScroll: !0
        }) : !Q && Y === _.current && I.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var A = {};
  S !== void 0 && (A.width = S), b !== void 0 && (A.height = b);
  var M = s ? /* @__PURE__ */ N.createElement("div", {
    className: W("".concat(n, "-footer"), w?.footer),
    style: T({}, E?.footer)
  }, s) : null, j = a ? /* @__PURE__ */ N.createElement("div", {
    className: W("".concat(n, "-header"), w?.header),
    style: T({}, E?.header)
  }, /* @__PURE__ */ N.createElement("div", {
    className: "".concat(n, "-title"),
    id: i
  }, a)) : null, k = je(function() {
    return X(c) === "object" && c !== null ? c : c ? {
      closeIcon: l ?? /* @__PURE__ */ N.createElement("span", {
        className: "".concat(n, "-close-x")
      })
    } : {};
  }, [c, l, n]), L = Io(k, !0), G = X(c) === "object" && c.disabled, H = c ? /* @__PURE__ */ N.createElement("button", ue({
    type: "button",
    onClick: u,
    "aria-label": "Close"
  }, L, {
    className: "".concat(n, "-close"),
    disabled: G
  }), k.closeIcon) : null, J = /* @__PURE__ */ N.createElement("div", {
    className: W("".concat(n, "-content"), w?.content),
    style: E?.content
  }, H, j, /* @__PURE__ */ N.createElement("div", ue({
    className: W("".concat(n, "-body"), w?.body),
    style: T(T({}, f), E?.body)
  }, p), d), M);
  return /* @__PURE__ */ N.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": a ? i : null,
    "aria-modal": "true",
    ref: P,
    style: T(T({}, o), A),
    className: W(n, r),
    onMouseDown: h,
    onMouseUp: m
  }, /* @__PURE__ */ N.createElement("div", {
    ref: _,
    tabIndex: 0,
    style: dy
  }, /* @__PURE__ */ N.createElement(ly, {
    shouldUpdate: y || x
  }, v ? v(J) : J)), /* @__PURE__ */ N.createElement("div", {
    tabIndex: 0,
    ref: I,
    style: uy
  }));
});
process.env.NODE_ENV !== "production" && (os.displayName = "Panel");
var _d = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.title, o = e.style, a = e.className, i = e.visible, s = e.forceRender, c = e.destroyOnClose, l = e.motionName, u = e.ariaId, d = e.onVisibleChanged, f = e.mousePosition, p = ve(), v = g.useState(), h = D(v, 2), m = h[0], C = h[1], y = {};
  m && (y.transformOrigin = m);
  function x() {
    var S = cy(p.current);
    C(f && (f.x || f.y) ? "".concat(f.x - S.left, "px ").concat(f.y - S.top, "px") : "");
  }
  return /* @__PURE__ */ g.createElement(mr, {
    visible: i,
    onVisibleChanged: d,
    onAppearPrepare: x,
    onEnterPrepare: x,
    forceRender: s,
    motionName: l,
    removeOnLeave: c,
    ref: p
  }, function(S, b) {
    var w = S.className, E = S.style;
    return /* @__PURE__ */ g.createElement(os, ue({}, e, {
      ref: t,
      title: r,
      ariaId: u,
      prefixCls: n,
      holderRef: b,
      style: T(T(T({}, E), o), y),
      className: W(a, w)
    }));
  });
});
_d.displayName = "Content";
var fy = function(t) {
  var n = t.prefixCls, r = t.style, o = t.visible, a = t.maskProps, i = t.motionName, s = t.className;
  return /* @__PURE__ */ g.createElement(mr, {
    key: "mask",
    visible: o,
    motionName: i,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(c, l) {
    var u = c.className, d = c.style;
    return /* @__PURE__ */ g.createElement("div", ue({
      ref: l,
      style: T(T({}, d), r),
      className: W("".concat(n, "-mask"), u, s)
    }, a));
  });
}, my = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-dialog" : n, o = t.zIndex, a = t.visible, i = a === void 0 ? !1 : a, s = t.keyboard, c = s === void 0 ? !0 : s, l = t.focusTriggerAfterClose, u = l === void 0 ? !0 : l, d = t.wrapStyle, f = t.wrapClassName, p = t.wrapProps, v = t.onClose, h = t.afterOpenChange, m = t.afterClose, C = t.transitionName, y = t.animation, x = t.closable, S = x === void 0 ? !0 : x, b = t.mask, w = b === void 0 ? !0 : b, E = t.maskTransitionName, $ = t.maskAnimation, O = t.maskClosable, P = O === void 0 ? !0 : O, _ = t.maskStyle, I = t.maskProps, A = t.rootClassName, M = t.classNames, j = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(te) {
    Zn(!(te in t), "".concat(te, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && Zn(!1, "wrapClassName is deprecated, please use classNames instead."));
  var k = ve(), L = ve(), G = ve(), H = g.useState(i), J = D(H, 2), ee = J[0], Q = J[1], Z = sy();
  function Y() {
    Aa(L.current, document.activeElement) || (k.current = document.activeElement);
  }
  function q() {
    if (!Aa(L.current, document.activeElement)) {
      var te;
      (te = G.current) === null || te === void 0 || te.focus();
    }
  }
  function U(te) {
    if (te)
      q();
    else {
      if (Q(!1), w && k.current && u) {
        try {
          k.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        k.current = null;
      }
      ee && m?.();
    }
    h?.(te);
  }
  function ae(te) {
    v?.(te);
  }
  var Pe = ve(!1), Ce = ve(), Se = function() {
    clearTimeout(Ce.current), Pe.current = !0;
  }, Ee = function() {
    Ce.current = setTimeout(function() {
      Pe.current = !1;
    });
  }, V = null;
  P && (V = function(se) {
    Pe.current ? Pe.current = !1 : L.current === se.target && ae(se);
  });
  function pe(te) {
    if (c && te.keyCode === ci.ESC) {
      te.stopPropagation(), ae(te);
      return;
    }
    i && te.keyCode === ci.TAB && G.current.changeActive(!te.shiftKey);
  }
  Ke(function() {
    i && (Q(!0), Y());
  }, [i]), Ke(function() {
    return function() {
      clearTimeout(Ce.current);
    };
  }, []);
  var B = T(T(T({
    zIndex: o
  }, d), j?.wrapper), {}, {
    display: ee ? null : "none"
  });
  return /* @__PURE__ */ g.createElement("div", ue({
    className: W("".concat(r, "-root"), A)
  }, Io(t, {
    data: !0
  })), /* @__PURE__ */ g.createElement(fy, {
    prefixCls: r,
    visible: w && i,
    motionName: zc(r, E, $),
    style: T(T({
      zIndex: o
    }, _), j?.mask),
    maskProps: I,
    className: M?.mask
  }), /* @__PURE__ */ g.createElement("div", ue({
    tabIndex: -1,
    onKeyDown: pe,
    className: W("".concat(r, "-wrap"), f, M?.wrapper),
    ref: L,
    onClick: V,
    style: B
  }, p), /* @__PURE__ */ g.createElement(_d, ue({}, t, {
    onMouseDown: Se,
    onMouseUp: Ee,
    ref: G,
    closable: S,
    ariaId: Z,
    prefixCls: r,
    visible: i && ee,
    onClose: ae,
    onVisibleChanged: U,
    motionName: zc(r, C, y)
  }))));
}, Md = function(t) {
  var n = t.visible, r = t.getContainer, o = t.forceRender, a = t.destroyOnClose, i = a === void 0 ? !1 : a, s = t.afterClose, c = t.panelRef, l = g.useState(n), u = D(l, 2), d = u[0], f = u[1], p = g.useMemo(function() {
    return {
      panel: c
    };
  }, [c]);
  return g.useEffect(function() {
    n && f(!0);
  }, [n]), !o && i && !d ? null : /* @__PURE__ */ g.createElement(Rd.Provider, {
    value: p
  }, /* @__PURE__ */ g.createElement(Td, {
    open: n || o || d,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || d
  }, /* @__PURE__ */ g.createElement(my, ue({}, t, {
    destroyOnClose: i,
    afterClose: function() {
      s?.(), f(!1);
    }
  }))));
};
Md.displayName = "Dialog";
var Ut = "RC_FORM_INTERNAL_HOOKS", he = function() {
  $e(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, _n = /* @__PURE__ */ g.createContext({
  getFieldValue: he,
  getFieldsValue: he,
  getFieldError: he,
  getFieldWarning: he,
  getFieldsError: he,
  isFieldsTouched: he,
  isFieldTouched: he,
  isFieldValidating: he,
  isFieldsValidating: he,
  resetFields: he,
  setFields: he,
  setFieldValue: he,
  setFieldsValue: he,
  validateFields: he,
  submit: he,
  getInternalHooks: function() {
    return he(), {
      dispatch: he,
      initEntityValue: he,
      registerField: he,
      useSubscribe: he,
      setInitialValues: he,
      destroyForm: he,
      setCallbacks: he,
      registerWatch: he,
      getFields: he,
      setValidateMessages: he,
      setPreserve: he,
      getInitialValue: he
    };
  }
}), ho = /* @__PURE__ */ g.createContext(null);
function mi(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function gy(e) {
  return e && !!e._init;
}
function gi() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var vi = gi();
function vy(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function py(e, t, n) {
  if (Ii()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && Qn(o, n.prototype), o;
}
function pi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pi = function(r) {
    if (r === null || !vy(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return py(r, arguments, Jn(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Qn(o, r);
  }, pi(e);
}
var hy = /%[sdj%]/g, Id = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Id = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function hi(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function at(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(hy, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return i;
  }
  return e;
}
function yy(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function ke(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || yy(t) && typeof e == "string" && !e);
}
function by(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, z(s || [])), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Gc(e, t, n) {
  var r = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var s = r;
    r = r + 1, s < o ? t(e[s], a) : n([]);
  }
  a([]);
}
function Cy(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, z(e[n] || []));
  }), t;
}
var qc = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r, o) {
    var a;
    return De(this, n), a = t.call(this, "Async Validation Error"), R(ne(a), "errors", void 0), R(ne(a), "fields", void 0), a.errors = r, a.fields = o, a;
  }
  return Be(n);
})(/* @__PURE__ */ pi(Error));
function xy(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(f, p) {
      var v = function(C) {
        return r(C), C.length ? p(new qc(C, hi(C))) : f(o);
      }, h = Cy(e);
      Gc(h, n, v);
    });
    return a.catch(function(f) {
      return f;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(f, p) {
    var v = function(m) {
      if (u.push.apply(u, m), l++, l === c)
        return r(u), u.length ? p(new qc(u, hi(u))) : f(o);
    };
    s.length || (r(u), f(o)), s.forEach(function(h) {
      var m = e[h];
      i.indexOf(h) !== -1 ? Gc(m, n, v) : by(m, n, v);
    });
  });
  return d.catch(function(f) {
    return f;
  }), d;
}
function Sy(e) {
  return !!(e && e.message !== void 0);
}
function Ey(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Uc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = Ey(t, e.fullFields) : r = t[n.field || e.fullField], Sy(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Xc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        X(r) === "object" && X(e[n]) === "object" ? e[n] = T(T({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var fn = "enum", wy = function(t, n, r, o, a) {
  t[fn] = Array.isArray(t[fn]) ? t[fn] : [], t[fn].indexOf(n) === -1 && o.push(at(a.messages[fn], t.fullField, t[fn].join(", ")));
}, $y = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(at(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(at(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Oy = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, d = null, f = typeof n == "number", p = typeof n == "string", v = Array.isArray(n);
  if (f ? d = "number" : p ? d = "string" : v && (d = "array"), !d)
    return !1;
  v && (u = n.length), p && (u = n.replace(l, "_").length), i ? u !== t.len && o.push(at(a.messages[d].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(at(a.messages[d].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(at(a.messages[d].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(at(a.messages[d].range, t.fullField, t.min, t.max));
}, Ad = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || ke(n, i || t.type)) && o.push(at(a.messages.required, t.fullField));
}, Wr;
const Py = (function() {
  if (Wr)
    return Wr;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", r = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(r, ":){7}(?:").concat(r, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(r, ":){6}(?:").concat(n, "|:").concat(r, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(r, ":){5}(?::").concat(n, "|(?::").concat(r, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(r, ":){4}(?:(?::").concat(r, "){0,1}:").concat(n, "|(?::").concat(r, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(r, ":){3}(?:(?::").concat(r, "){0,2}:").concat(n, "|(?::").concat(r, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(r, ":){2}(?:(?::").concat(r, "){0,3}:").concat(n, "|(?::").concat(r, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(r, ":){1}(?:(?::").concat(r, "){0,4}:").concat(n, "|(?::").concat(r, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(r, "){0,5}:").concat(n, "|(?::").concat(r, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), c = new RegExp("^".concat(n, "$")), l = new RegExp("^".concat(i, "$")), u = function(w) {
    return w && w.exact ? s : new RegExp("(?:".concat(t(w)).concat(n).concat(t(w), ")|(?:").concat(t(w)).concat(i).concat(t(w), ")"), "g");
  };
  u.v4 = function(b) {
    return b && b.exact ? c : new RegExp("".concat(t(b)).concat(n).concat(t(b)), "g");
  }, u.v6 = function(b) {
    return b && b.exact ? l : new RegExp("".concat(t(b)).concat(i).concat(t(b)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", p = u.v4().source, v = u.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", C = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', S = "(?:".concat(d, "|www\\.)").concat(f, "(?:localhost|").concat(p, "|").concat(v, "|").concat(h).concat(m).concat(C, ")").concat(y).concat(x);
  return Wr = new RegExp("(?:^".concat(S, "$)"), "i"), Wr;
});
var Yc = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Un = {
  integer: function(t) {
    return Un.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Un.number(t) && !Un.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return X(t) === "object" && !Un.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Yc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Py());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Yc.hex);
  }
}, Ny = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Ad(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Un[s](n) || o.push(at(a.messages.types[s], t.fullField, t.type)) : s && X(n) !== t.type && o.push(at(a.messages.types[s], t.fullField, t.type));
}, Ty = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(at(a.messages.whitespace, t.fullField));
};
const oe = {
  required: Ad,
  whitespace: Ty,
  type: Ny,
  range: Oy,
  enum: wy,
  pattern: $y
};
var Ry = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a);
  }
  r(i);
}, _y = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    oe.required(t, n, o, i, a, "array"), n != null && (oe.type(t, n, o, i, a), oe.range(t, n, o, i, a));
  }
  r(i);
}, My = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && oe.type(t, n, o, i, a);
  }
  r(i);
}, Iy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n, "date") && !t.required)
      return r();
    if (oe.required(t, n, o, i, a), !ke(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), oe.type(t, c, o, i, a), c && oe.range(t, c.getTime(), o, i, a);
    }
  }
  r(i);
}, Ay = "enum", Fy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && oe[Ay](t, n, o, i, a);
  }
  r(i);
}, jy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && (oe.type(t, n, o, i, a), oe.range(t, n, o, i, a));
  }
  r(i);
}, ky = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && (oe.type(t, n, o, i, a), oe.range(t, n, o, i, a));
  }
  r(i);
}, Ly = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && oe.type(t, n, o, i, a);
  }
  r(i);
}, Dy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && (oe.type(t, n, o, i, a), oe.range(t, n, o, i, a));
  }
  r(i);
}, By = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), n !== void 0 && oe.type(t, n, o, i, a);
  }
  r(i);
}, Vy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n, "string") && !t.required)
      return r();
    oe.required(t, n, o, i, a), ke(n, "string") || oe.pattern(t, n, o, i, a);
  }
  r(i);
}, Hy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n) && !t.required)
      return r();
    oe.required(t, n, o, i, a), ke(n) || oe.type(t, n, o, i, a);
  }
  r(i);
}, zy = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : X(n);
  oe.required(t, n, o, i, a, s), r(i);
}, Wy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (ke(n, "string") && !t.required)
      return r();
    oe.required(t, n, o, i, a, "string"), ke(n, "string") || (oe.type(t, n, o, i, a), oe.range(t, n, o, i, a), oe.pattern(t, n, o, i, a), t.whitespace === !0 && oe.whitespace(t, n, o, i, a));
  }
  r(i);
}, ba = function(t, n, r, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (ke(n, i) && !t.required)
      return r();
    oe.required(t, n, o, s, a, i), ke(n, i) || oe.type(t, n, o, s, a);
  }
  r(s);
};
const Kn = {
  string: Wy,
  method: Ly,
  number: Dy,
  boolean: My,
  regexp: Hy,
  integer: ky,
  float: jy,
  array: _y,
  object: By,
  enum: Fy,
  pattern: Vy,
  date: Iy,
  url: ba,
  hex: ba,
  email: ba,
  required: zy,
  any: Ry
};
var hr = /* @__PURE__ */ (function() {
  function e(t) {
    De(this, e), R(this, "rules", null), R(this, "_messages", vi), this.define(t);
  }
  return Be(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (X(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(o) {
        var a = n[o];
        r.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = Xc(gi(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = o, c = a;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(v) {
        var h = [], m = {};
        function C(x) {
          if (Array.isArray(x)) {
            var S;
            h = (S = h).concat.apply(S, z(x));
          } else
            h.push(x);
        }
        for (var y = 0; y < v.length; y++)
          C(v[y]);
        h.length ? (m = hi(h), c(h, m)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === vi && (u = gi()), Xc(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, f = s.keys || Object.keys(this.rules);
      f.forEach(function(v) {
        var h = r.rules[v], m = i[v];
        h.forEach(function(C) {
          var y = C;
          typeof y.transform == "function" && (i === n && (i = T({}, i)), m = i[v] = y.transform(m), m != null && (y.type = y.type || (Array.isArray(m) ? "array" : X(m)))), typeof y == "function" ? y = {
            validator: y
          } : y = T({}, y), y.validator = r.getValidationMethod(y), y.validator && (y.field = v, y.fullField = y.fullField || v, y.type = r.getType(y), d[v] = d[v] || [], d[v].push({
            rule: y,
            value: m,
            source: i,
            field: v
          }));
        });
      });
      var p = {};
      return xy(d, s, function(v, h) {
        var m = v.rule, C = (m.type === "object" || m.type === "array") && (X(m.fields) === "object" || X(m.defaultField) === "object");
        C = C && (m.required || !m.required && v.value), m.field = v.field;
        function y(E, $) {
          return T(T({}, $), {}, {
            fullField: "".concat(m.fullField, ".").concat(E),
            fullFields: m.fullFields ? [].concat(z(m.fullFields), [E]) : [E]
          });
        }
        function x() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(E) ? E : [E];
          !s.suppressWarning && $.length && e.warning("async-validator:", $), $.length && m.message !== void 0 && ($ = [].concat(m.message));
          var O = $.map(Uc(m, i));
          if (s.first && O.length)
            return p[m.field] = 1, h(O);
          if (!C)
            h(O);
          else {
            if (m.required && !v.value)
              return m.message !== void 0 ? O = [].concat(m.message).map(Uc(m, i)) : s.error && (O = [s.error(m, at(s.messages.required, m.field))]), h(O);
            var P = {};
            m.defaultField && Object.keys(v.value).map(function(A) {
              P[A] = m.defaultField;
            }), P = T(T({}, P), v.rule.fields);
            var _ = {};
            Object.keys(P).forEach(function(A) {
              var M = P[A], j = Array.isArray(M) ? M : [M];
              _[A] = j.map(y.bind(null, A));
            });
            var I = new e(_);
            I.messages(s.messages), v.rule.options && (v.rule.options.messages = s.messages, v.rule.options.error = s.error), I.validate(v.value, v.rule.options || s, function(A) {
              var M = [];
              O && O.length && M.push.apply(M, z(O)), A && A.length && M.push.apply(M, z(A)), h(M.length ? M : null);
            });
          }
        }
        var S;
        if (m.asyncValidator)
          S = m.asyncValidator(m, v.value, x, v.source, s);
        else if (m.validator) {
          try {
            S = m.validator(m, v.value, x, v.source, s);
          } catch (E) {
            var b, w;
            (b = (w = console).error) === null || b === void 0 || b.call(w, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), x(E.message);
          }
          S === !0 ? x() : S === !1 ? x(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || "".concat(m.fullField || m.field, " fails")) : S instanceof Array ? x(S) : S instanceof Error && x(S.message);
        }
        S && S.then && S.then(function() {
          return x();
        }, function(E) {
          return x(E);
        });
      }, function(v) {
        l(v);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !Kn.hasOwnProperty(n.type))
        throw new Error(at("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), o = r.indexOf("message");
      return o !== -1 && r.splice(o, 1), r.length === 1 && r[0] === "required" ? Kn.required : Kn[this.getType(n)] || void 0;
    }
  }]), e;
})();
R(hr, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Kn[t] = n;
});
R(hr, "warning", Id);
R(hr, "messages", vi);
R(hr, "validators", Kn);
var ot = "'${name}' is not a valid ${type}", Fd = {
  default: "Validation error on field '${name}'",
  required: "'${name}' is required",
  enum: "'${name}' must be one of [${enum}]",
  whitespace: "'${name}' cannot be empty",
  date: {
    format: "'${name}' is invalid for format date",
    parse: "'${name}' could not be parsed as date",
    invalid: "'${name}' is invalid date"
  },
  types: {
    string: ot,
    method: ot,
    array: ot,
    object: ot,
    number: ot,
    date: ot,
    boolean: ot,
    integer: ot,
    float: ot,
    regexp: ot,
    email: ot,
    url: ot,
    hex: ot
  },
  string: {
    len: "'${name}' must be exactly ${len} characters",
    min: "'${name}' must be at least ${min} characters",
    max: "'${name}' cannot be longer than ${max} characters",
    range: "'${name}' must be between ${min} and ${max} characters"
  },
  number: {
    len: "'${name}' must equal ${len}",
    min: "'${name}' cannot be less than ${min}",
    max: "'${name}' cannot be greater than ${max}",
    range: "'${name}' must be between ${min} and ${max}"
  },
  array: {
    len: "'${name}' must be exactly ${len} in length",
    min: "'${name}' cannot be less than ${min} in length",
    max: "'${name}' cannot be greater than ${max} in length",
    range: "'${name}' must be between ${min} and ${max} in length"
  },
  pattern: {
    mismatch: "'${name}' does not match pattern ${pattern}"
  }
}, Kc = hr;
function Gy(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Zc = "CODE_LOGIC_ERROR";
function yi(e, t, n, r, o) {
  return bi.apply(this, arguments);
}
function bi() {
  return bi = an(/* @__PURE__ */ Ze().mark(function e(t, n, r, o, a) {
    var i, s, c, l, u, d, f, p, v;
    return Ze().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = T({}, r), delete i.ruleIndex, Kc.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (C) {
              return console.error(C), Promise.reject(Zc);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new Kc(R({}, t, [i])), u = vn(Fd, o.validateMessages), l.messages(u), d = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(R({}, t, n), T({}, o)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(C, y) {
            var x = C.message, S = x === Zc ? u.default : x;
            return /* @__PURE__ */ g.isValidElement(S) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ g.cloneElement(S, {
                key: "error_".concat(y)
              })
            ) : S;
          }));
        case 18:
          if (!(!d.length && c && Array.isArray(n) && n.length > 0)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(n.map(function(C, y) {
            return yi("".concat(t, ".").concat(y), C, c, o, a);
          }));
        case 21:
          return f = m.sent, m.abrupt("return", f.reduce(function(C, y) {
            return [].concat(z(C), z(y));
          }, []));
        case 23:
          return p = T(T({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, a), v = d.map(function(C) {
            return typeof C == "string" ? Gy(C, p) : C;
          }), m.abrupt("return", v);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), bi.apply(this, arguments);
}
function qy(e, t, n, r, o, a) {
  var i = e.join("."), s = n.map(function(u, d) {
    var f = u.validator, p = T(T({}, u), {}, {
      ruleIndex: d
    });
    return f && (p.validator = function(v, h, m) {
      var C = !1, y = function() {
        for (var b = arguments.length, w = new Array(b), E = 0; E < b; E++)
          w[E] = arguments[E];
        Promise.resolve().then(function() {
          $e(!C, "Your validator function has already return a promise. `callback` will be ignored."), C || m.apply(void 0, w);
        });
      }, x = f(v, h, y);
      C = x && typeof x.then == "function" && typeof x.catch == "function", $e(C, "`callback` is deprecated. Please return a promise instead."), C && x.then(function() {
        m();
      }).catch(function(S) {
        m(S || " ");
      });
    }), p;
  }).sort(function(u, d) {
    var f = u.warningOnly, p = u.ruleIndex, v = d.warningOnly, h = d.ruleIndex;
    return !!f == !!v ? p - h : f ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ (function() {
      var u = an(/* @__PURE__ */ Ze().mark(function d(f, p) {
        var v, h, m;
        return Ze().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              v = 0;
            case 1:
              if (!(v < s.length)) {
                y.next = 12;
                break;
              }
              return h = s[v], y.next = 5, yi(i, t, h, r, a);
            case 5:
              if (m = y.sent, !m.length) {
                y.next = 9;
                break;
              }
              return p([{
                errors: m,
                rule: h
              }]), y.abrupt("return");
            case 9:
              v += 1, y.next = 1;
              break;
            case 12:
              f([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, d);
      }));
      return function(d, f) {
        return u.apply(this, arguments);
      };
    })());
  else {
    var l = s.map(function(u) {
      return yi(i, t, u, r, a).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    c = (o ? Xy(l) : Uy(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function Uy(e) {
  return Ci.apply(this, arguments);
}
function Ci() {
  return Ci = an(/* @__PURE__ */ Ze().mark(function e(t) {
    return Ze().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, z(o));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Ci.apply(this, arguments);
}
function Xy(e) {
  return xi.apply(this, arguments);
}
function xi() {
  return xi = an(/* @__PURE__ */ Ze().mark(function e(t) {
    var n;
    return Ze().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return n = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && a([s]), n += 1, n === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), xi.apply(this, arguments);
}
function Re(e) {
  return mi(e);
}
function Qc(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = Pt(e, r);
    n = vt(n, r, o);
  }), n;
}
function xn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return jd(t, r, n);
  });
}
function jd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function Yy(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || X(e) !== "object" || X(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return z(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Ky(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && X(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Jc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], a = t - n;
  return a > 0 ? [].concat(z(e.slice(0, n)), [o], z(e.slice(n, t)), z(e.slice(t + 1, r))) : a < 0 ? [].concat(z(e.slice(0, t)), z(e.slice(t + 1, n + 1)), [o], z(e.slice(n + 1, r))) : e;
}
var Zy = ["name"], ut = [];
function Ca(e, t, n, r, o, a) {
  return typeof e == "function" ? e(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== o;
}
var as = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    var o;
    if (De(this, n), o = t.call(this, r), R(ne(o), "state", {
      resetCount: 0
    }), R(ne(o), "cancelRegisterFunc", null), R(ne(o), "mounted", !1), R(ne(o), "touched", !1), R(ne(o), "dirty", !1), R(ne(o), "validatePromise", void 0), R(ne(o), "prevValidating", void 0), R(ne(o), "errors", ut), R(ne(o), "warnings", ut), R(ne(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, Re(d)), o.cancelRegisterFunc = null;
    }), R(ne(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, d = u.prefixName, f = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(z(f), z(l)) : [];
    }), R(ne(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, d = c.fieldContext;
      return u.map(function(f) {
        return typeof f == "function" ? f(d) : f;
      });
    }), R(ne(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), R(ne(o), "metaCache", null), R(ne(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = T(T({}, o.getMeta()), {}, {
          destroy: c
        });
        nr(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), R(ne(o), "onStoreChange", function(c, l, u) {
      var d = o.props, f = d.shouldUpdate, p = d.dependencies, v = p === void 0 ? [] : p, h = d.onReset, m = u.store, C = o.getNamePath(), y = o.getValue(c), x = o.getValue(m), S = l && xn(l, C);
      switch (u.type === "valueUpdate" && u.source === "external" && !nr(y, x) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = ut, o.warnings = ut, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || S) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = ut, o.warnings = ut, o.triggerMetaEvent(), h?.(), o.refresh();
            return;
          }
          break;
        /**
         * In case field with `preserve = false` nest deps like:
         * - A = 1 => show B
         * - B = 1 => show C
         * - Reset A, need clean B, C
         */
        case "remove": {
          if (f && Ca(f, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var b = u.data;
          if (S) {
            "touched" in b && (o.touched = b.touched), "validating" in b && !("originRCField" in b) && (o.validatePromise = b.validating ? Promise.resolve([]) : null), "errors" in b && (o.errors = b.errors || ut), "warnings" in b && (o.warnings = b.warnings || ut), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in b && xn(l, C, !0)) {
            o.reRender();
            return;
          }
          if (f && !C.length && Ca(f, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var w = v.map(Re);
          if (w.some(function(E) {
            return xn(u.relatedFields, E);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (S || (!v.length || C.length || f) && Ca(f, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
      }
      f === !0 && o.reRender();
    }), R(ne(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), d = c || {}, f = d.triggerName, p = d.validateOnly, v = p === void 0 ? !1 : p, h = Promise.resolve().then(/* @__PURE__ */ an(/* @__PURE__ */ Ze().mark(function m() {
        var C, y, x, S, b, w, E;
        return Ze().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (o.mounted) {
                O.next = 2;
                break;
              }
              return O.abrupt("return", []);
            case 2:
              if (C = o.props, y = C.validateFirst, x = y === void 0 ? !1 : y, S = C.messageVariables, b = C.validateDebounce, w = o.getRules(), f && (w = w.filter(function(P) {
                return P;
              }).filter(function(P) {
                var _ = P.validateTrigger;
                if (!_)
                  return !0;
                var I = mi(_);
                return I.includes(f);
              })), !(b && f)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(P) {
                setTimeout(P, b);
              });
            case 8:
              if (o.validatePromise === h) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return E = qy(l, u, w, c, x, S), E.catch(function(P) {
                return P;
              }).then(function() {
                var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ut;
                if (o.validatePromise === h) {
                  var _;
                  o.validatePromise = null;
                  var I = [], A = [];
                  (_ = P.forEach) === null || _ === void 0 || _.call(P, function(M) {
                    var j = M.rule.warningOnly, k = M.errors, L = k === void 0 ? ut : k;
                    j ? A.push.apply(A, z(L)) : I.push.apply(I, z(L));
                  }), o.errors = I, o.warnings = A, o.triggerMetaEvent(), o.reRender();
                }
              }), O.abrupt("return", E);
            case 13:
            case "end":
              return O.stop();
          }
        }, m);
      })));
      return v || (o.validatePromise = h, o.dirty = !0, o.errors = ut, o.warnings = ut, o.triggerMetaEvent(), o.reRender()), h;
    }), R(ne(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), R(ne(o), "isFieldTouched", function() {
      return o.touched;
    }), R(ne(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Ut), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), R(ne(o), "getErrors", function() {
      return o.errors;
    }), R(ne(o), "getWarnings", function() {
      return o.warnings;
    }), R(ne(o), "isListField", function() {
      return o.props.isListField;
    }), R(ne(o), "isList", function() {
      return o.props.isList;
    }), R(ne(o), "isPreserve", function() {
      return o.props.preserve;
    }), R(ne(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var c = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return c;
    }), R(ne(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return T(T({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = _a(c);
      return u.length !== 1 || !/* @__PURE__ */ g.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), R(ne(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Pt(c || l(!0), u);
    }), R(ne(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, d = l.trigger, f = l.validateTrigger, p = l.getValueFromEvent, v = l.normalize, h = l.valuePropName, m = l.getValueProps, C = l.fieldContext, y = f !== void 0 ? f : C.validateTrigger, x = o.getNamePath(), S = C.getInternalHooks, b = C.getFieldsValue, w = S(Ut), E = w.dispatch, $ = o.getValue(), O = m || function(M) {
        return R({}, h, M);
      }, P = c[d], _ = u !== void 0 ? O($) : {};
      process.env.NODE_ENV !== "production" && _ && Object.keys(_).forEach(function(M) {
        $e(typeof _[M] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(M, ")"));
      });
      var I = T(T({}, c), _);
      I[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var M, j = arguments.length, k = new Array(j), L = 0; L < j; L++)
          k[L] = arguments[L];
        p ? M = p.apply(void 0, k) : M = Ky.apply(void 0, [h].concat(k)), v && (M = v(M, $, b(!0))), M !== $ && E({
          type: "updateValue",
          namePath: x,
          value: M
        }), P && P.apply(void 0, k);
      };
      var A = mi(y || []);
      return A.forEach(function(M) {
        var j = I[M];
        I[M] = function() {
          j && j.apply(void 0, arguments);
          var k = o.props.rules;
          k && k.length && E({
            type: "validateField",
            namePath: x,
            triggerName: M
          });
        };
      }), I;
    }), r.fieldContext) {
      var a = r.fieldContext.getInternalHooks, i = a(Ut), s = i.initEntityValue;
      s(ne(o));
    }
    return o;
  }
  return Be(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, c = s(Ut), l = c.registerField;
        this.cancelRegisterFunc = l(this);
      }
      a === !0 && this.reRender();
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.cancelRegister(), this.triggerMetaEvent(!0), this.mounted = !1;
    }
  }, {
    key: "reRender",
    value: function() {
      this.mounted && this.forceUpdate();
    }
  }, {
    key: "render",
    value: function() {
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), s = i.child, c = i.isFunction, l;
      return c ? l = s : /* @__PURE__ */ g.isValidElement(s) ? l = /* @__PURE__ */ g.cloneElement(s, this.getControlled(s.props)) : ($e(!s, "`children` of Field is not validate ReactElement."), l = s), /* @__PURE__ */ g.createElement(g.Fragment, {
        key: o
      }, l);
    }
  }]), n;
})(g.Component);
R(as, "contextType", _n);
R(as, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function kd(e) {
  var t, n = e.name, r = Ge(e, Zy), o = g.useContext(_n), a = g.useContext(ho), i = n !== void 0 ? Re(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && $e(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(as, ue({
    key: c,
    name: i,
    isListField: s
  }, r, {
    fieldContext: o
  }));
}
function Qy(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = g.useContext(_n), c = g.useContext(ho), l = g.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = g.useMemo(function() {
    var h = Re(s.prefixName) || [];
    return [].concat(z(h), z(Re(t)));
  }, [s.prefixName, t]), f = g.useMemo(function() {
    return T(T({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), p = g.useMemo(function() {
    return {
      getKey: function(m) {
        var C = d.length, y = m[C];
        return [u.keys[y], m.slice(C + 1)];
      }
    };
  }, [d]);
  if (typeof r != "function")
    return $e(!1, "Form.List only accepts function as children."), null;
  var v = function(m, C, y) {
    var x = y.source;
    return x === "internal" ? !1 : m !== C;
  };
  return /* @__PURE__ */ g.createElement(ho.Provider, {
    value: p
  }, /* @__PURE__ */ g.createElement(_n.Provider, {
    value: f
  }, /* @__PURE__ */ g.createElement(kd, {
    name: [],
    shouldUpdate: v,
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(h, m) {
    var C = h.value, y = C === void 0 ? [] : C, x = h.onChange, S = s.getFieldValue, b = function() {
      var O = S(d || []);
      return O || [];
    }, w = {
      add: function(O, P) {
        var _ = b();
        P >= 0 && P <= _.length ? (u.keys = [].concat(z(u.keys.slice(0, P)), [u.id], z(u.keys.slice(P))), x([].concat(z(_.slice(0, P)), [O], z(_.slice(P))))) : (process.env.NODE_ENV !== "production" && (P < 0 || P > _.length) && $e(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(z(u.keys), [u.id]), x([].concat(z(_), [O]))), u.id += 1;
      },
      remove: function(O) {
        var P = b(), _ = new Set(Array.isArray(O) ? O : [O]);
        _.size <= 0 || (u.keys = u.keys.filter(function(I, A) {
          return !_.has(A);
        }), x(P.filter(function(I, A) {
          return !_.has(A);
        })));
      },
      move: function(O, P) {
        if (O !== P) {
          var _ = b();
          O < 0 || O >= _.length || P < 0 || P >= _.length || (u.keys = Jc(u.keys, O, P), x(Jc(_, O, P)));
        }
      }
    }, E = y || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && $e(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), r(E.map(function($, O) {
      var P = u.keys[O];
      return P === void 0 && (u.keys[O] = u.id, P = u.keys[O], u.id += 1), {
        name: O,
        key: P,
        isListField: !0
      };
    }), w, m);
  })));
}
function Jy(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, s) {
      i.catch(function(c) {
        return t = !0, c;
      }).then(function(c) {
        n -= 1, r[s] = c, !(n > 0) && (t && a(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
var Ld = "__@field_split__";
function xa(e) {
  return e.map(function(t) {
    return "".concat(X(t), ":").concat(t);
  }).join(Ld);
}
var mn = /* @__PURE__ */ (function() {
  function e() {
    De(this, e), R(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Be(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(xa(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(xa(n));
    }
  }, {
    key: "update",
    value: function(n, r) {
      var o = this.get(n), a = r(o);
      a ? this.set(n, a) : this.delete(n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this.kvs.delete(xa(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return z(this.kvs.entries()).map(function(r) {
        var o = D(r, 2), a = o[0], i = o[1], s = a.split(Ld);
        return n({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = D(l, 3), d = u[1], f = u[2];
            return d === "number" ? Number(f) : f;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var n = {};
      return this.map(function(r) {
        var o = r.key, a = r.value;
        return n[o.join(".")] = a, null;
      }), n;
    }
  }]), e;
})(), eb = ["name"], tb = /* @__PURE__ */ Be(function e(t) {
  var n = this;
  De(this, e), R(this, "formHooked", !1), R(this, "forceRootUpdate", void 0), R(this, "subscribable", !0), R(this, "store", {}), R(this, "fieldEntities", []), R(this, "initialValues", {}), R(this, "callbacks", {}), R(this, "validateMessages", null), R(this, "preserve", null), R(this, "lastValidatePromise", null), R(this, "getForm", function() {
    return {
      getFieldValue: n.getFieldValue,
      getFieldsValue: n.getFieldsValue,
      getFieldError: n.getFieldError,
      getFieldWarning: n.getFieldWarning,
      getFieldsError: n.getFieldsError,
      isFieldsTouched: n.isFieldsTouched,
      isFieldTouched: n.isFieldTouched,
      isFieldValidating: n.isFieldValidating,
      isFieldsValidating: n.isFieldsValidating,
      resetFields: n.resetFields,
      setFields: n.setFields,
      setFieldValue: n.setFieldValue,
      setFieldsValue: n.setFieldsValue,
      validateFields: n.validateFields,
      submit: n.submit,
      _init: !0,
      getInternalHooks: n.getInternalHooks
    };
  }), R(this, "getInternalHooks", function(r) {
    return r === Ut ? (n.formHooked = !0, {
      dispatch: n.dispatch,
      initEntityValue: n.initEntityValue,
      registerField: n.registerField,
      useSubscribe: n.useSubscribe,
      setInitialValues: n.setInitialValues,
      destroyForm: n.destroyForm,
      setCallbacks: n.setCallbacks,
      setValidateMessages: n.setValidateMessages,
      getFields: n.getFields,
      setPreserve: n.setPreserve,
      getInitialValue: n.getInitialValue,
      registerWatch: n.registerWatch
    }) : ($e(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), R(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), R(this, "prevWithoutPreserves", null), R(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var a, i = vn(r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = vt(i, c, Pt(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), R(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new mn();
      n.getFieldEntities(!0).forEach(function(a) {
        n.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), R(this, "getInitialValue", function(r) {
    var o = Pt(n.initialValues, r);
    return r.length ? vn(o) : o;
  }), R(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), R(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), R(this, "setPreserve", function(r) {
    n.preserve = r;
  }), R(this, "watchList", []), R(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), R(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), a = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(o, a, r);
      });
    }
  }), R(this, "timeoutId", null), R(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || $e(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), R(this, "updateStore", function(r) {
    n.store = r;
  }), R(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), R(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new mn();
    return n.getFieldEntities(r).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), R(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(a) {
      var i = Re(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: Re(a)
      };
    });
  }), R(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var a, i, s;
    if (r === !0 || Array.isArray(r) ? (a = r, i = o) : r && X(r) === "object" && (s = r.strict, i = r.filter), a === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var d, f, p = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var v, h;
        if ((v = (h = u).isList) !== null && v !== void 0 && v.call(h))
          return;
      } else if (!a && (d = (f = u).isListField) !== null && d !== void 0 && d.call(f))
        return;
      if (!i)
        l.push(p);
      else {
        var m = "getMeta" in u ? u.getMeta() : null;
        i(m) && l.push(p);
      }
    }), Qc(n.store, l.map(Re));
  }), R(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = Re(r);
    return Pt(n.store, o);
  }), R(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntitiesForNamePathList(r);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: Re(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), R(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = Re(r), a = n.getFieldsError([o])[0];
    return a.errors;
  }), R(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = Re(r), a = n.getFieldsError([o])[0];
    return a.warnings;
  }), R(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(Re), l = !1) : (c = null, l = i) : (c = i.map(Re), l = s);
    var u = n.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(h) {
        return d(h) || h.isList();
      }) : u.some(d);
    var f = new mn();
    c.forEach(function(h) {
      f.set(h, []);
    }), u.forEach(function(h) {
      var m = h.getNamePath();
      c.forEach(function(C) {
        C.every(function(y, x) {
          return m[x] === y;
        }) && f.update(C, function(y) {
          return [].concat(z(y), [h]);
        });
      });
    });
    var p = function(m) {
      return m.some(d);
    }, v = f.map(function(h) {
      var m = h.value;
      return m;
    });
    return l ? v.every(p) : v.some(p);
  }), R(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), R(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = r.map(Re);
    return o.some(function(i) {
      var s = i.getNamePath();
      return xn(a, s) && i.isFieldValidating();
    });
  }), R(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), R(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new mn(), a = n.getFieldEntities(!0);
    a.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var d = o.get(u) || /* @__PURE__ */ new Set();
        d.add({
          entity: c,
          value: l
        }), o.set(u, d);
      }
    });
    var i = function(l) {
      l.forEach(function(u) {
        var d = u.props.initialValue;
        if (d !== void 0) {
          var f = u.getNamePath(), p = n.getInitialValue(f);
          if (p !== void 0)
            $e(!1, "Form already set 'initialValues' with path '".concat(f.join("."), "'. Field can not overwrite it."));
          else {
            var v = o.get(f);
            if (v && v.size > 1)
              $e(!1, "Multiple Field with path '".concat(f.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (v) {
              var h = n.getFieldValue(f), m = u.isListField();
              !m && (!r.skipExist || h === void 0) && n.updateStore(vt(n.store, f, z(v)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, z(z(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = a, i(s);
  }), R(this, "resetFields", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(vn(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var a = r.map(Re);
    a.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(vt(n.store, i, s));
    }), n.resetWithFieldInitialValue({
      namePathList: a
    }), n.notifyObservers(o, a, {
      type: "reset"
    }), n.notifyWatch(a);
  }), R(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, a = [];
    r.forEach(function(i) {
      var s = i.name, c = Ge(i, eb), l = Re(s);
      a.push(l), "value" in c && n.updateStore(vt(n.store, l, c.value)), n.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(a);
  }), R(this, "getFields", function() {
    var r = n.getFieldEntities(!0), o = r.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), c = T(T({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), R(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var a = r.getNamePath(), i = Pt(n.store, a);
      i === void 0 && n.updateStore(vt(n.store, a, o));
    }
  }), R(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), R(this, "registerField", function(r) {
    n.fieldEntities.push(r);
    var o = r.getNamePath();
    if (n.notifyWatch([o]), r.props.initialValue !== void 0) {
      var a = n.store;
      n.resetWithFieldInitialValue({
        entities: [r],
        skipExist: !0
      }), n.notifyObservers(a, [r.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(d) {
        return d !== r;
      }), !n.isMergedPreserve(s) && (!i || c.length > 1)) {
        var l = i ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== l && n.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !jd(d.getNamePath(), o)
          );
        })) {
          var u = n.store;
          n.updateStore(vt(u, o, l, !0)), n.notifyObservers(u, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, o);
        }
      }
      n.notifyWatch([o]);
    };
  }), R(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var o = r.namePath, a = r.value;
        n.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = r.namePath, s = r.triggerName;
        n.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), R(this, "notifyObservers", function(r, o, a) {
    if (n.subscribable) {
      var i = T(T({}, a), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, o, i);
      });
    } else
      n.forceRootUpdate();
  }), R(this, "triggerDependenciesUpdate", function(r, o) {
    var a = n.getDependencyChildrenFields(o);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(z(a))
    }), a;
  }), R(this, "updateValue", function(r, o) {
    var a = Re(r), i = n.store;
    n.updateStore(vt(n.store, a, o)), n.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var s = n.triggerDependenciesUpdate(i, a), c = n.callbacks.onValuesChange;
    if (c) {
      var l = Qc(n.store, [a]);
      c(l, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(z(s)));
  }), R(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var a = vn(n.store, r);
      n.updateStore(a);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), R(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), R(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new mn();
    n.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var d = Re(u);
        i.update(d, function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return f.add(c), f;
        });
      });
    });
    var s = function c(l) {
      var u = i.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var f = d.getNamePath();
          d.isFieldDirty() && f.length && (a.push(f), c(f));
        }
      });
    };
    return s(r), a;
  }), R(this, "triggerOnFieldsChange", function(r, o) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var i = n.getFields();
      if (o) {
        var s = new mn();
        o.forEach(function(l) {
          var u = l.name, d = l.errors;
          s.set(u, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = i.filter(function(l) {
        var u = l.name;
        return xn(r, u);
      });
      c.length && a(c, i);
    }
  }), R(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var a, i;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, i = o) : i = r;
    var s = !!a, c = s ? a.map(Re) : [], l = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), f = i || {}, p = f.recursive, v = f.dirty;
    n.getFieldEntities(!0).forEach(function(y) {
      if (s || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(v && !y.isFieldDirty())) {
        var x = y.getNamePath();
        if (d.add(x.join(u)), !s || xn(c, x, p)) {
          var S = y.validateRules(T({
            validateMessages: T(T({}, Fd), n.validateMessages)
          }, i));
          l.push(S.then(function() {
            return {
              name: x,
              errors: [],
              warnings: []
            };
          }).catch(function(b) {
            var w, E = [], $ = [];
            return (w = b.forEach) === null || w === void 0 || w.call(b, function(O) {
              var P = O.rule.warningOnly, _ = O.errors;
              P ? $.push.apply($, z(_)) : E.push.apply(E, z(_));
            }), E.length ? Promise.reject({
              name: x,
              errors: E,
              warnings: $
            }) : {
              name: x,
              errors: E,
              warnings: $
            };
          }));
        }
      }
    });
    var h = Jy(l);
    n.lastValidatePromise = h, h.catch(function(y) {
      return y;
    }).then(function(y) {
      var x = y.map(function(S) {
        var b = S.name;
        return b;
      });
      n.notifyObservers(n.store, x, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(x, y);
    });
    var m = h.then(function() {
      return n.lastValidatePromise === h ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(y) {
      var x = y.filter(function(S) {
        return S && S.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(c),
        errorFields: x,
        outOfDate: n.lastValidatePromise !== h
      });
    });
    m.catch(function(y) {
      return y;
    });
    var C = c.filter(function(y) {
      return d.has(y.join(u));
    });
    return n.triggerOnFieldsChange(C), m;
  }), R(this, "submit", function() {
    n.warningUnhooked(), n.validateFields().then(function(r) {
      var o = n.callbacks.onFinish;
      if (o)
        try {
          o(r);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(r) {
      var o = n.callbacks.onFinishFailed;
      o && o(r);
    });
  }), this.forceRootUpdate = t;
});
function Dd(e) {
  var t = g.useRef(), n = g.useState({}), r = D(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new tb(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var Si = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), nb = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, a = t.children, i = g.useContext(Si), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(Si.Provider, {
    value: T(T({}, i), {}, {
      validateMessages: T(T({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(l, u) {
        r && r(l, {
          changedFields: u,
          forms: s.current
        }), i.triggerFormChange(l, u);
      },
      triggerFormFinish: function(l, u) {
        o && o(l, {
          values: u,
          forms: s.current
        }), i.triggerFormFinish(l, u);
      },
      registerForm: function(l, u) {
        l && (s.current = T(T({}, s.current), {}, R({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = T({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, rb = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], ob = function(t, n) {
  var r = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, d = t.validateMessages, f = t.validateTrigger, p = f === void 0 ? "onChange" : f, v = t.onValuesChange, h = t.onFieldsChange, m = t.onFinish, C = t.onFinishFailed, y = t.clearOnDestroy, x = Ge(t, rb), S = g.useRef(null), b = g.useContext(Si), w = Dd(i), E = D(w, 1), $ = E[0], O = $.getInternalHooks(Ut), P = O.useSubscribe, _ = O.setInitialValues, I = O.setCallbacks, A = O.setValidateMessages, M = O.setPreserve, j = O.destroyForm;
  g.useImperativeHandle(n, function() {
    return T(T({}, $), {}, {
      nativeElement: S.current
    });
  }), g.useEffect(function() {
    return b.registerForm(r, $), function() {
      b.unregisterForm(r);
    };
  }, [b, $, r]), A(T(T({}, b.validateMessages), d)), I({
    onValuesChange: v,
    onFieldsChange: function(Y) {
      if (b.triggerFormChange(r, Y), h) {
        for (var q = arguments.length, U = new Array(q > 1 ? q - 1 : 0), ae = 1; ae < q; ae++)
          U[ae - 1] = arguments[ae];
        h.apply(void 0, [Y].concat(U));
      }
    },
    onFinish: function(Y) {
      b.triggerFormFinish(r, Y), m && m(Y);
    },
    onFinishFailed: C
  }), M(s);
  var k = g.useRef(null);
  _(o, !k.current), k.current || (k.current = !0), g.useEffect(
    function() {
      return function() {
        return j(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var L, G = typeof c == "function";
  if (G) {
    var H = $.getFieldsValue(!0);
    L = c(H, $);
  } else
    L = c;
  P(!G);
  var J = g.useRef();
  g.useEffect(function() {
    Yy(J.current || [], a || []) || $.setFields(a || []), J.current = a;
  }, [a, $]);
  var ee = g.useMemo(function() {
    return T(T({}, $), {}, {
      validateTrigger: p
    });
  }, [$, p]), Q = /* @__PURE__ */ g.createElement(ho.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(_n.Provider, {
    value: ee
  }, L));
  return u === !1 ? Q : /* @__PURE__ */ g.createElement(u, ue({}, x, {
    ref: S,
    onSubmit: function(Y) {
      Y.preventDefault(), Y.stopPropagation(), $.submit();
    },
    onReset: function(Y) {
      var q;
      Y.preventDefault(), $.resetFields(), (q = x.onReset) === null || q === void 0 || q.call(x, Y);
    }
  }), Q);
};
function el(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var ab = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = ve(t);
  $e(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function ib() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = o === void 0 ? {} : o, i = gy(a) ? {
    form: a
  } : a, s = i.form, c = Qt(), l = D(c, 2), u = l[0], d = l[1], f = je(function() {
    return el(u);
  }, [u]), p = ve(f);
  p.current = f;
  var v = ie(_n), h = s || v, m = h && h._init;
  process.env.NODE_ENV !== "production" && $e(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var C = Re(r), y = ve(C);
  return y.current = C, ab(C), Ke(
    function() {
      if (m) {
        var x = h.getFieldsValue, S = h.getInternalHooks, b = S(Ut), w = b.registerWatch, E = function(_, I) {
          var A = i.preserve ? I : _;
          return typeof r == "function" ? r(A) : Pt(A, y.current);
        }, $ = w(function(P, _) {
          var I = E(P, _), A = el(I);
          p.current !== A && (p.current = A, d(I));
        }), O = E(x(), x(!0));
        return u !== O && d(O), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), u;
}
var sb = /* @__PURE__ */ g.forwardRef(ob), yr = sb;
yr.FormProvider = nb;
yr.Field = kd;
yr.List = Qy;
yr.useForm = Dd;
yr.useWatch = ib;
const Ei = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Ei.displayName = "FormItemInputContext");
const cb = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = g.useContext(Ei), o = g.useMemo(() => {
    const a = Object.assign({}, r);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, r]);
  return /* @__PURE__ */ g.createElement(Ei.Provider, {
    value: o
  }, e);
}, lb = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ N.createElement(cb, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ N.createElement(Fh, null, o)), o;
}, ub = () => Je() && window.document.documentElement, Wo = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    size: o,
    shape: a
  } = e, i = W({
    [`${t}-lg`]: o === "large",
    [`${t}-sm`]: o === "small"
  }), s = W({
    [`${t}-circle`]: a === "circle",
    [`${t}-square`]: a === "square",
    [`${t}-round`]: a === "round"
  }), c = g.useMemo(() => typeof o == "number" ? {
    width: o,
    height: o,
    lineHeight: `${o}px`
  } : {}, [o]);
  return /* @__PURE__ */ g.createElement("span", {
    className: W(t, i, s, n),
    style: Object.assign(Object.assign({}, c), r)
  });
}, db = new Ne("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Go = (e) => ({
  height: e,
  lineHeight: re(e)
}), Sn = (e) => Object.assign({
  width: e
}, Go(e)), fb = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: db,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Sa = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Go(e)), mb = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: n,
    controlHeight: r,
    controlHeightLG: o,
    controlHeightSM: a
  } = e;
  return {
    [t]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: n
    }, Sn(r)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, Sn(o)),
    [`${t}${t}-sm`]: Object.assign({}, Sn(a))
  };
}, gb = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: n,
    skeletonInputCls: r,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: s
  } = e;
  return {
    [r]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: n
    }, Sa(t, s)),
    [`${r}-lg`]: Object.assign({}, Sa(o, s)),
    [`${r}-sm`]: Object.assign({}, Sa(a, s))
  };
}, tl = (e) => Object.assign({
  width: e
}, Go(e)), vb = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: n,
    gradientFromColor: r,
    borderRadiusSM: o,
    calc: a
  } = e;
  return {
    [t]: Object.assign(Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      background: r,
      borderRadius: o
    }, tl(a(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, tl(n)), {
        maxWidth: a(n).mul(4).equal(),
        maxHeight: a(n).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, Ea = (e, t, n) => {
  const {
    skeletonButtonCls: r
  } = e;
  return {
    [`${n}${r}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${n}${r}-round`]: {
      borderRadius: t
    }
  };
}, wa = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Go(e)), pb = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: n,
    controlHeight: r,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: s
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [n]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: s(r).mul(2).equal(),
      minWidth: s(r).mul(2).equal()
    }, wa(r, s))
  }, Ea(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, wa(o, s))
  }), Ea(e, o, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, wa(a, s))
  }), Ea(e, a, `${n}-sm`));
}, hb = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: n,
    skeletonTitleCls: r,
    skeletonParagraphCls: o,
    skeletonButtonCls: a,
    skeletonInputCls: i,
    skeletonImageCls: s,
    controlHeight: c,
    controlHeightLG: l,
    controlHeightSM: u,
    gradientFromColor: d,
    padding: f,
    marginSM: p,
    borderRadius: v,
    titleHeight: h,
    blockRadius: m,
    paragraphLiHeight: C,
    controlHeightXS: y,
    paragraphMarginTop: x
  } = e;
  return {
    [t]: {
      display: "table",
      width: "100%",
      [`${t}-header`]: {
        display: "table-cell",
        paddingInlineEnd: f,
        verticalAlign: "top",
        // Avatar
        [n]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: d
        }, Sn(c)),
        [`${n}-circle`]: {
          borderRadius: "50%"
        },
        [`${n}-lg`]: Object.assign({}, Sn(l)),
        [`${n}-sm`]: Object.assign({}, Sn(u))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [r]: {
          width: "100%",
          height: h,
          background: d,
          borderRadius: m,
          [`+ ${o}`]: {
            marginBlockStart: u
          }
        },
        // paragraph
        [o]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: C,
            listStyle: "none",
            background: d,
            borderRadius: m,
            "+ li": {
              marginBlockStart: y
            }
          }
        },
        [`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${r}, ${o} > li`]: {
          borderRadius: v
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [r]: {
        marginBlockStart: p,
        [`+ ${o}`]: {
          marginBlockStart: x
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, pb(e)), mb(e)), gb(e)), vb(e)),
    // Skeleton Block Button, Input
    [`${t}${t}-block`]: {
      width: "100%",
      [a]: {
        width: "100%"
      },
      [i]: {
        width: "100%"
      }
    },
    // With active animation
    [`${t}${t}-active`]: {
      [`
        ${r},
        ${o} > li,
        ${n},
        ${a},
        ${i},
        ${s}
      `]: Object.assign({}, fb(e))
    }
  };
}, yb = (e) => {
  const {
    colorFillContent: t,
    colorFill: n
  } = e, r = t, o = n;
  return {
    color: r,
    colorGradientEnd: o,
    gradientFromColor: r,
    gradientToColor: o,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, Ln = rn("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = Ct(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: n(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return hb(r);
}, yb, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), bb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    shape: a = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, d] = Ln(c), f = ko(e, ["prefixCls", "className"]), p = W(c, `${c}-element`, {
    [`${c}-active`]: o
  }, n, r, u, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: p
  }, /* @__PURE__ */ g.createElement(Wo, Object.assign({
    prefixCls: `${c}-avatar`,
    shape: a,
    size: i
  }, f))));
}, Cb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, d] = Ln(c), f = ko(e, ["prefixCls"]), p = W(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: p
  }, /* @__PURE__ */ g.createElement(Wo, Object.assign({
    prefixCls: `${c}-button`,
    size: i
  }, f))));
}, xb = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", Sb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a
  } = e, {
    getPrefixCls: i
  } = g.useContext(be), s = i("skeleton", t), [c, l, u] = Ln(s), d = W(s, `${s}-element`, {
    [`${s}-active`]: a
  }, n, r, l, u);
  return c(/* @__PURE__ */ g.createElement("div", {
    className: d
  }, /* @__PURE__ */ g.createElement("div", {
    className: W(`${s}-image`, n),
    style: o
  }, /* @__PURE__ */ g.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ g.createElement("title", null, "Image placeholder"), /* @__PURE__ */ g.createElement("path", {
    d: xb,
    className: `${s}-image-path`
  })))));
}, Eb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, d] = Ln(c), f = ko(e, ["prefixCls"]), p = W(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: p
  }, /* @__PURE__ */ g.createElement(Wo, Object.assign({
    prefixCls: `${c}-input`,
    size: i
  }, f))));
}, wb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a,
    children: i
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, d] = Ln(c), f = W(c, `${c}-element`, {
    [`${c}-active`]: a
  }, u, n, r, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: f
  }, /* @__PURE__ */ g.createElement("div", {
    className: W(`${c}-image`, n),
    style: o
  }, i)));
}, $b = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, Ob = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    rows: o = 0
  } = e, a = Array.from({
    length: o
  }).map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ g.createElement("li", {
      key: s,
      style: {
        width: $b(s, e)
      }
    })
  ));
  return /* @__PURE__ */ g.createElement("ul", {
    className: W(t, n),
    style: r
  }, a);
}, Pb = ({
  prefixCls: e,
  className: t,
  width: n,
  style: r
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ g.createElement("h3", {
    className: W(e, t),
    style: Object.assign({
      width: n
    }, r)
  })
);
function $a(e) {
  return e && typeof e == "object" ? e : {};
}
function Nb(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function Tb(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function Rb(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
const sn = (e) => {
  const {
    prefixCls: t,
    loading: n,
    className: r,
    rootClassName: o,
    style: a,
    children: i,
    avatar: s = !1,
    title: c = !0,
    paragraph: l = !0,
    active: u,
    round: d
  } = e, {
    getPrefixCls: f,
    direction: p,
    className: v,
    style: h
  } = Ou("skeleton"), m = f("skeleton", t), [C, y, x] = Ln(m);
  if (n || !("loading" in e)) {
    const S = !!s, b = !!c, w = !!l;
    let E;
    if (S) {
      const P = Object.assign(Object.assign({
        prefixCls: `${m}-avatar`
      }, Nb(b, w)), $a(s));
      E = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-header`
      }, /* @__PURE__ */ g.createElement(Wo, Object.assign({}, P)));
    }
    let $;
    if (b || w) {
      let P;
      if (b) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-title`
        }, Tb(S, w)), $a(c));
        P = /* @__PURE__ */ g.createElement(Pb, Object.assign({}, I));
      }
      let _;
      if (w) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-paragraph`
        }, Rb(S, b)), $a(l));
        _ = /* @__PURE__ */ g.createElement(Ob, Object.assign({}, I));
      }
      $ = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-content`
      }, P, _);
    }
    const O = W(m, {
      [`${m}-with-avatar`]: S,
      [`${m}-active`]: u,
      [`${m}-rtl`]: p === "rtl",
      [`${m}-round`]: d
    }, v, r, o, y, x);
    return C(/* @__PURE__ */ g.createElement("div", {
      className: O,
      style: Object.assign(Object.assign({}, h), a)
    }, E, $));
  }
  return i ?? null;
};
sn.Button = Cb;
sn.Avatar = bb;
sn.Input = Eb;
sn.Image = Sb;
sn.Node = wb;
process.env.NODE_ENV !== "production" && (sn.displayName = "Skeleton");
function nl() {
}
const _b = /* @__PURE__ */ g.createContext({
  add: nl,
  remove: nl
});
function Mb(e) {
  const t = g.useContext(_b), n = g.useRef(null);
  return Tt((o) => {
    if (o) {
      const a = e ? o.querySelector(e) : o;
      a && (t.add(a), n.current = a);
    } else
      t.remove(n.current);
  });
}
const rl = () => {
  const {
    cancelButtonProps: e,
    cancelTextLocale: t,
    onCancel: n
  } = ie(pr);
  return /* @__PURE__ */ N.createElement(kn, Object.assign({
    onClick: n
  }, e), t);
}, ol = () => {
  const {
    confirmLoading: e,
    okButtonProps: t,
    okType: n,
    okTextLocale: r,
    onOk: o
  } = ie(pr);
  return /* @__PURE__ */ N.createElement(kn, Object.assign({}, vd(n), {
    loading: e,
    onClick: o
  }, t), r);
};
function Bd(e, t) {
  return /* @__PURE__ */ N.createElement("span", {
    className: `${e}-close-x`
  }, t || /* @__PURE__ */ N.createElement(on, {
    className: `${e}-close-icon`
  }));
}
const Vd = (e) => {
  const {
    okText: t,
    okType: n = "primary",
    cancelText: r,
    confirmLoading: o,
    onOk: a,
    onCancel: i,
    okButtonProps: s,
    cancelButtonProps: c,
    footer: l
  } = e, [u] = Oo("Modal", yu()), d = t || u?.okText, f = r || u?.cancelText, p = N.useMemo(() => ({
    confirmLoading: o,
    okButtonProps: s,
    cancelButtonProps: c,
    okTextLocale: d,
    cancelTextLocale: f,
    okType: n,
    onOk: a,
    onCancel: i
  }), [o, s, c, d, f, n, a, i]);
  let v;
  return typeof l == "function" || typeof l > "u" ? (v = /* @__PURE__ */ N.createElement(N.Fragment, null, /* @__PURE__ */ N.createElement(rl, null), /* @__PURE__ */ N.createElement(ol, null)), typeof l == "function" && (v = l(v, {
    OkBtn: ol,
    CancelBtn: rl
  })), v = /* @__PURE__ */ N.createElement(Pd, {
    value: p
  }, v)) : v = l, /* @__PURE__ */ N.createElement(Pu, {
    disabled: !1
  }, v);
}, Ib = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      display: "flex",
      flexFlow: "row wrap",
      minWidth: 0,
      "&::before, &::after": {
        display: "flex"
      },
      "&-no-wrap": {
        flexWrap: "nowrap"
      },
      // The origin of the X-axis
      "&-start": {
        justifyContent: "flex-start"
      },
      // The center of the X-axis
      "&-center": {
        justifyContent: "center"
      },
      // The opposite of the X-axis
      "&-end": {
        justifyContent: "flex-end"
      },
      "&-space-between": {
        justifyContent: "space-between"
      },
      "&-space-around": {
        justifyContent: "space-around"
      },
      "&-space-evenly": {
        justifyContent: "space-evenly"
      },
      // Align at the top
      "&-top": {
        alignItems: "flex-start"
      },
      // Align at the center
      "&-middle": {
        alignItems: "center"
      },
      "&-bottom": {
        alignItems: "flex-end"
      }
    }
  };
}, Ab = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // Grid system
    [t]: {
      position: "relative",
      maxWidth: "100%",
      // Prevent columns from collapsing when empty
      minHeight: 1
    }
  };
}, Fb = (e, t) => {
  const {
    prefixCls: n,
    componentCls: r,
    gridColumns: o
  } = e, a = {};
  for (let i = o; i >= 0; i--)
    i === 0 ? (a[`${r}${t}-${i}`] = {
      display: "none"
    }, a[`${r}-push-${i}`] = {
      insetInlineStart: "auto"
    }, a[`${r}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, a[`${r}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, a[`${r}${t}-offset-${i}`] = {
      marginInlineStart: 0
    }, a[`${r}${t}-order-${i}`] = {
      order: 0
    }) : (a[`${r}${t}-${i}`] = [
      // https://github.com/ant-design/ant-design/issues/44456
      // Form set `display: flex` on Col which will override `display: block`.
      // Let's get it from css variable to support override.
      {
        "--ant-display": "block",
        // Fallback to display if variable not support
        display: "block"
      },
      {
        display: "var(--ant-display)",
        flex: `0 0 ${i / o * 100}%`,
        maxWidth: `${i / o * 100}%`
      }
    ], a[`${r}${t}-push-${i}`] = {
      insetInlineStart: `${i / o * 100}%`
    }, a[`${r}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / o * 100}%`
    }, a[`${r}${t}-offset-${i}`] = {
      marginInlineStart: `${i / o * 100}%`
    }, a[`${r}${t}-order-${i}`] = {
      order: i
    });
  return a[`${r}${t}-flex`] = {
    flex: `var(--${n}${t}-flex)`
  }, a;
}, wi = (e, t) => Fb(e, t), jb = (e, t, n) => ({
  [`@media (min-width: ${re(t)})`]: Object.assign({}, wi(e, n))
}), kb = () => ({}), Lb = () => ({});
rn("Grid", Ib, kb);
const Hd = (e) => ({
  xs: e.screenXSMin,
  sm: e.screenSMMin,
  md: e.screenMDMin,
  lg: e.screenLGMin,
  xl: e.screenXLMin,
  xxl: e.screenXXLMin
});
rn("Grid", (e) => {
  const t = Ct(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = Hd(t);
  return delete n.xs, [Ab(t), wi(t, ""), wi(t, "-xs"), Object.keys(n).map((r) => jb(t, n[r], `-${r}`)).reduce((r, o) => Object.assign(Object.assign({}, r), o), {})];
}, Lb);
function al(e) {
  return {
    position: e,
    inset: 0
  };
}
const Db = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${n}-zoom-enter, ${t}${n}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${t}${n}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: Object.assign(Object.assign({}, al("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, al("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: l0(e)
  }];
}, Bb = (e) => {
  const {
    componentCls: t
  } = e;
  return [
    // ======================== Root =========================
    {
      [`${t}-root`]: {
        [`${t}-wrap-rtl`]: {
          direction: "rtl"
        },
        [`${t}-centered`]: {
          textAlign: "center",
          "&::before": {
            display: "inline-block",
            width: 0,
            height: "100%",
            verticalAlign: "middle",
            content: '""'
          },
          [t]: {
            top: 0,
            display: "inline-block",
            paddingBottom: 0,
            textAlign: "start",
            verticalAlign: "middle"
          }
        },
        [`@media (max-width: ${e.screenSMMax}px)`]: {
          [t]: {
            maxWidth: "calc(100vw - 16px)",
            margin: `${re(e.marginXS)} auto`
          },
          [`${t}-centered`]: {
            [t]: {
              flex: 1
            }
          }
        }
      }
    },
    // ======================== Modal ========================
    {
      [t]: Object.assign(Object.assign({}, Ui(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${re(e.calc(e.margin).mul(2).equal())})`,
        margin: "0 auto",
        paddingBottom: e.paddingLG,
        [`${t}-title`]: {
          margin: 0,
          color: e.titleColor,
          fontWeight: e.fontWeightStrong,
          fontSize: e.titleFontSize,
          lineHeight: e.titleLineHeight,
          wordWrap: "break-word"
        },
        [`${t}-content`]: {
          position: "relative",
          backgroundColor: e.contentBg,
          backgroundClip: "padding-box",
          border: 0,
          borderRadius: e.borderRadiusLG,
          boxShadow: e.boxShadow,
          pointerEvents: "auto",
          padding: e.contentPadding
        },
        [`${t}-close`]: Object.assign({
          position: "absolute",
          top: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          insetInlineEnd: e.calc(e.modalHeaderHeight).sub(e.modalCloseBtnSize).div(2).equal(),
          zIndex: e.calc(e.zIndexPopupBase).add(10).equal(),
          padding: 0,
          color: e.modalCloseIconColor,
          fontWeight: e.fontWeightStrong,
          lineHeight: 1,
          textDecoration: "none",
          background: "transparent",
          borderRadius: e.borderRadiusSM,
          width: e.modalCloseBtnSize,
          height: e.modalCloseBtnSize,
          border: 0,
          outline: 0,
          cursor: "pointer",
          transition: `color ${e.motionDurationMid}, background-color ${e.motionDurationMid}`,
          "&-x": {
            display: "flex",
            fontSize: e.fontSizeLG,
            fontStyle: "normal",
            lineHeight: re(e.modalCloseBtnSize),
            justifyContent: "center",
            textTransform: "none",
            textRendering: "auto"
          },
          "&:disabled": {
            pointerEvents: "none"
          },
          "&:hover": {
            color: e.modalCloseIconHoverColor,
            backgroundColor: e.colorBgTextHover,
            textDecoration: "none"
          },
          "&:active": {
            backgroundColor: e.colorBgTextActive
          }
        }, Xi(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${re(e.borderRadiusLG)} ${re(e.borderRadiusLG)} 0 0`,
          marginBottom: e.headerMarginBottom,
          padding: e.headerPadding,
          borderBottom: e.headerBorderBottom
        },
        [`${t}-body`]: {
          fontSize: e.fontSize,
          lineHeight: e.lineHeight,
          wordWrap: "break-word",
          padding: e.bodyPadding,
          [`${t}-body-skeleton`]: {
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: `${re(e.margin)} auto`
          }
        },
        [`${t}-footer`]: {
          textAlign: "end",
          background: e.footerBg,
          marginTop: e.footerMarginTop,
          padding: e.footerPadding,
          borderTop: e.footerBorderTop,
          borderRadius: e.footerBorderRadius,
          [`> ${e.antCls}-btn + ${e.antCls}-btn`]: {
            marginInlineStart: e.marginXS
          }
        },
        [`${t}-open`]: {
          overflow: "hidden"
        }
      })
    },
    // ======================== Pure =========================
    {
      [`${t}-pure-panel`]: {
        top: "auto",
        padding: 0,
        display: "flex",
        flexDirection: "column",
        [`${t}-content,
          ${t}-body,
          ${t}-confirm-body-wrapper`]: {
          display: "flex",
          flexDirection: "column",
          flex: "auto"
        },
        [`${t}-confirm-body`]: {
          marginBottom: "auto"
        }
      }
    }
  ];
}, Vb = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-root`]: {
      [`${t}-wrap-rtl`]: {
        direction: "rtl",
        [`${t}-confirm-body`]: {
          direction: "rtl"
        }
      }
    }
  };
}, Hb = (e) => {
  const {
    componentCls: t
  } = e, n = Hd(e), r = Object.assign({}, n);
  delete r.xs;
  const o = `--${t.replace(".", "")}-`, a = Object.keys(r).map((i) => ({
    [`@media (min-width: ${re(r[i])})`]: {
      width: `var(${o}${i}-width)`
    }
  }));
  return {
    [`${t}-root`]: {
      [t]: [].concat(z(Object.keys(n).map((i, s) => {
        const c = Object.keys(n)[s - 1];
        return c ? {
          [`${o}${i}-width`]: `var(${o}${c}-width)`
        } : null;
      })), [{
        width: `var(${o}xs-width)`
      }], z(a))
    }
  };
}, zd = (e) => {
  const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5;
  return Ct(e, {
    modalHeaderHeight: e.calc(e.calc(r).mul(n).equal()).add(e.calc(t).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterBorderWidth: e.lineWidth,
    modalCloseIconColor: e.colorIcon,
    modalCloseIconHoverColor: e.colorIconHover,
    modalCloseBtnSize: e.controlHeight,
    modalConfirmIconSize: e.fontHeight,
    modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
  });
}, Wd = (e) => ({
  footerBg: "transparent",
  headerBg: e.colorBgElevated,
  titleLineHeight: e.lineHeightHeading5,
  titleFontSize: e.fontSizeHeading5,
  contentBg: e.colorBgElevated,
  titleColor: e.colorTextHeading,
  // internal
  contentPadding: e.wireframe ? 0 : `${re(e.paddingMD)} ${re(e.paddingContentHorizontalLG)}`,
  headerPadding: e.wireframe ? `${re(e.padding)} ${re(e.paddingLG)}` : 0,
  headerBorderBottom: e.wireframe ? `${re(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  headerMarginBottom: e.wireframe ? 0 : e.marginXS,
  bodyPadding: e.wireframe ? e.paddingLG : 0,
  footerPadding: e.wireframe ? `${re(e.paddingXS)} ${re(e.padding)}` : 0,
  footerBorderTop: e.wireframe ? `${re(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  footerBorderRadius: e.wireframe ? `0 0 ${re(e.borderRadiusLG)} ${re(e.borderRadiusLG)}` : 0,
  footerMarginTop: e.wireframe ? 0 : e.marginSM,
  confirmBodyPadding: e.wireframe ? `${re(e.padding * 2)} ${re(e.padding * 2)} ${re(e.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
  confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
}), Gd = rn("Modal", (e) => {
  const t = zd(e);
  return [Bb(t), Vb(t), Db(t), x0(t, "zoom"), Hb(t)];
}, Wd, {
  unitless: {
    titleLineHeight: !0
  }
});
var zb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let $i;
const Wb = (e) => {
  $i = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    $i = null;
  }, 100);
};
ub() && document.documentElement.addEventListener("click", Wb, !0);
const qd = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    open: o,
    wrapClassName: a,
    centered: i,
    getContainer: s,
    focusTriggerAfterClose: c = !0,
    style: l,
    // Deprecated
    visible: u,
    width: d = 520,
    footer: f,
    classNames: p,
    styles: v,
    children: h,
    loading: m,
    confirmLoading: C,
    zIndex: y,
    mousePosition: x,
    onOk: S,
    onCancel: b,
    destroyOnHidden: w,
    destroyOnClose: E,
    panelRef: $ = null,
    modalRender: O
  } = e, P = zb(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose", "panelRef", "modalRender"]), {
    getPopupContainer: _,
    getPrefixCls: I,
    direction: A,
    modal: M
  } = g.useContext(be), j = (ye) => {
    C || b?.(ye);
  }, k = (ye) => {
    S?.(ye);
  };
  if (process.env.NODE_ENV !== "production") {
    const ye = st("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"], ["destroyOnClose", "destroyOnHidden"]].forEach(([Ve, Fe]) => {
      ye.deprecated(!(Ve in e), Ve, Fe);
    });
  }
  const L = I("modal", t), G = I(), H = jn(L), [J, ee, Q] = Gd(L, H), Z = W(a, {
    [`${L}-centered`]: i ?? M?.centered,
    [`${L}-wrap-rtl`]: A === "rtl"
  }), Y = f !== null && !m ? /* @__PURE__ */ g.createElement(Vd, Object.assign({}, e, {
    onOk: k,
    onCancel: j
  })) : null, [q, U, ae, Pe] = qp(wc(e), wc(M), {
    closable: !0,
    closeIcon: /* @__PURE__ */ g.createElement(on, {
      className: `${L}-close-icon`
    }),
    closeIconRender: (ye) => Bd(L, ye)
  }), Ce = O ? (ye) => /* @__PURE__ */ g.createElement("div", {
    className: `${L}-render`
  }, O(ye)) : void 0, Se = `.${L}-${O ? "render" : "content"}`, Ee = Mb(Se), V = xo($, Ee), [pe, B] = Qp("Modal", y), [te, se] = g.useMemo(() => d && typeof d == "object" ? [void 0, d] : [d, void 0], [d]), Qe = g.useMemo(() => {
    const ye = {};
    return se && Object.keys(se).forEach((Ve) => {
      const Fe = se[Ve];
      Fe !== void 0 && (ye[`--${L}-${Ve}-width`] = typeof Fe == "number" ? `${Fe}px` : Fe);
    }), ye;
  }, [L, se]);
  return J(/* @__PURE__ */ g.createElement(lb, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ g.createElement(es.Provider, {
    value: B
  }, /* @__PURE__ */ g.createElement(Md, Object.assign({
    width: te
  }, P, {
    zIndex: pe,
    getContainer: s === void 0 ? _ : s,
    prefixCls: L,
    rootClassName: W(ee, r, Q, H),
    footer: Y,
    visible: o ?? u,
    mousePosition: x ?? $i,
    onClose: j,
    closable: q && Object.assign({
      disabled: ae,
      closeIcon: U
    }, Pe),
    closeIcon: U,
    focusTriggerAfterClose: c,
    transitionName: po(G, "zoom", e.transitionName),
    maskTransitionName: po(G, "fade", e.maskTransitionName),
    className: W(ee, n, M?.className),
    style: Object.assign(Object.assign(Object.assign({}, M?.style), l), Qe),
    classNames: Object.assign(Object.assign(Object.assign({}, M?.classNames), p), {
      wrapper: W(Z, p?.wrapper)
    }),
    styles: Object.assign(Object.assign({}, M?.styles), v),
    panelRef: V,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: w ?? E,
    modalRender: Ce
  }), m ? /* @__PURE__ */ g.createElement(sn, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 4
    },
    className: `${L}-body-skeleton`
  }) : h))));
}, Gb = (e) => {
  const {
    componentCls: t,
    titleFontSize: n,
    titleLineHeight: r,
    modalConfirmIconSize: o,
    fontSize: a,
    lineHeight: i,
    modalTitleHeight: s,
    fontHeight: c,
    confirmBodyPadding: l
  } = e, u = `${t}-confirm`;
  return {
    [u]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${u}-body-wrapper`]: Object.assign({}, wv()),
      [`&${t} ${t}-body`]: {
        padding: l
      },
      // ====================== Body ======================
      [`${u}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${e.iconCls}`]: {
          flex: "none",
          fontSize: o,
          marginInlineEnd: e.confirmIconMarginInlineEnd,
          marginTop: e.calc(e.calc(c).sub(o).equal()).div(2).equal()
        },
        [`&-has-title > ${e.iconCls}`]: {
          marginTop: e.calc(e.calc(s).sub(o).equal()).div(2).equal()
        }
      },
      [`${u}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: e.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${re(e.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${e.iconCls} + ${u}-paragraph`]: {
        maxWidth: `calc(100% - ${re(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`
      },
      [`${u}-title`]: {
        color: e.colorTextHeading,
        fontWeight: e.fontWeightStrong,
        fontSize: n,
        lineHeight: r
      },
      [`${u}-content`]: {
        color: e.colorText,
        fontSize: a,
        lineHeight: i
      },
      // ===================== Footer =====================
      [`${u}-btns`]: {
        textAlign: "end",
        marginTop: e.confirmBtnsMarginTop,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${u}-error ${u}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${u}-warning ${u}-body > ${e.iconCls},
        ${u}-confirm ${u}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${u}-info ${u}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${u}-success ${u}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    }
  };
}, qb = Yi(["Modal", "confirm"], (e) => {
  const t = zd(e);
  return Gb(t);
}, Wd, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var Ub = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ud = (e) => {
  const {
    prefixCls: t,
    icon: n,
    okText: r,
    cancelText: o,
    confirmPrefixCls: a,
    type: i,
    okCancel: s,
    footer: c,
    // Legacy for static function usage
    locale: l
  } = e, u = Ub(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const w = st("Modal");
    process.env.NODE_ENV !== "production" && w(!(typeof n == "string" && n.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${n}\` at https://ant.design/components/icon`);
  }
  let d = n;
  if (!n && n !== null)
    switch (i) {
      case "info":
        d = /* @__PURE__ */ g.createElement(Mo, null);
        break;
      case "success":
        d = /* @__PURE__ */ g.createElement(To, null);
        break;
      case "error":
        d = /* @__PURE__ */ g.createElement(Ro, null);
        break;
      default:
        d = /* @__PURE__ */ g.createElement(_o, null);
    }
  const f = s ?? i === "confirm", p = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", [v] = Oo("Modal"), h = l || v, m = r || (f ? h?.okText : h?.justOkText), C = o || h?.cancelText, y = g.useMemo(() => Object.assign({
    autoFocusButton: p,
    cancelTextLocale: C,
    okTextLocale: m,
    mergedOkCancel: f
  }, u), [p, C, m, f, u]), x = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(jc, null), /* @__PURE__ */ g.createElement(kc, null)), S = e.title !== void 0 && e.title !== null, b = `${a}-body`;
  return /* @__PURE__ */ g.createElement("div", {
    className: `${a}-body-wrapper`
  }, /* @__PURE__ */ g.createElement("div", {
    className: W(b, {
      [`${b}-has-title`]: S
    })
  }, d, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-paragraph`
  }, S && /* @__PURE__ */ g.createElement("span", {
    className: `${a}-title`
  }, e.title), /* @__PURE__ */ g.createElement("div", {
    className: `${a}-content`
  }, e.content))), c === void 0 || typeof c == "function" ? /* @__PURE__ */ g.createElement(Pd, {
    value: y
  }, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-btns`
  }, typeof c == "function" ? c(x, {
    OkBtn: kc,
    CancelBtn: jc
  }) : x)) : c, /* @__PURE__ */ g.createElement(qb, {
    prefixCls: t
  }));
}, Xd = (e) => {
  const {
    close: t,
    zIndex: n,
    maskStyle: r,
    direction: o,
    prefixCls: a,
    wrapClassName: i,
    rootPrefixCls: s,
    bodyStyle: c,
    closable: l = !1,
    onConfirm: u,
    styles: d,
    title: f
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const b = st("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach(([w, E]) => {
      b.deprecated(!(w in e), w, E);
    });
  }
  const p = `${a}-confirm`, v = e.width || 416, h = e.style || {}, m = e.mask === void 0 ? !0 : e.mask, C = e.maskClosable === void 0 ? !1 : e.maskClosable, y = W(p, `${p}-${e.type}`, {
    [`${p}-rtl`]: o === "rtl"
  }, e.className), [, x] = _t(), S = g.useMemo(() => n !== void 0 ? n : x.zIndexPopupBase + Ao, [n, x]);
  return /* @__PURE__ */ g.createElement(qd, Object.assign({}, e, {
    className: y,
    wrapClassName: W({
      [`${p}-centered`]: !!e.centered
    }, i),
    onCancel: () => {
      t?.({
        triggerCancel: !0
      }), u?.(!1);
    },
    title: f,
    footer: null,
    transitionName: po(s || "", "zoom", e.transitionName),
    maskTransitionName: po(s || "", "fade", e.maskTransitionName),
    mask: m,
    maskClosable: C,
    style: h,
    styles: Object.assign({
      body: c,
      mask: r
    }, d),
    width: v,
    zIndex: S,
    closable: l
  }), /* @__PURE__ */ g.createElement(Ud, Object.assign({}, e, {
    confirmPrefixCls: p
  })));
}, is = (e) => {
  const {
    rootPrefixCls: t,
    iconPrefixCls: n,
    direction: r,
    theme: o
  } = e;
  return /* @__PURE__ */ g.createElement(nt, {
    prefixCls: t,
    iconPrefixCls: n,
    direction: r,
    theme: o
  }, /* @__PURE__ */ g.createElement(Xd, Object.assign({}, e)));
};
process.env.NODE_ENV !== "production" && (Xd.displayName = "ConfirmDialog", is.displayName = "ConfirmDialogWrapper");
const Xt = [];
let Yd = "";
function Kd() {
  return Yd;
}
const Xb = (e) => {
  var t, n;
  const {
    prefixCls: r,
    getContainer: o,
    direction: a
  } = e, i = yu(), s = ie(be), c = Kd() || s.getPrefixCls(), l = r || `${c}-modal`;
  let u = o;
  return u === !1 && (u = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Gt(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ N.createElement(is, Object.assign({}, e, {
    rootPrefixCls: c,
    prefixCls: l,
    iconPrefixCls: s.iconPrefixCls,
    theme: s.theme,
    direction: a ?? s.direction,
    locale: (n = (t = s.locale) === null || t === void 0 ? void 0 : t.Modal) !== null && n !== void 0 ? n : i,
    getContainer: u
  }));
};
function br(e) {
  const t = gr();
  process.env.NODE_ENV !== "production" && !t.holderRender && Zi("Modal");
  const n = document.createDocumentFragment();
  let r = Object.assign(Object.assign({}, e), {
    close: c,
    open: !0
  }), o, a;
  function i(...u) {
    var d;
    if (u.some((v) => v?.triggerCancel)) {
      var p;
      (d = e.onCancel) === null || d === void 0 || (p = d).call.apply(p, [e, () => {
      }].concat(z(u.slice(1))));
    }
    for (let v = 0; v < Xt.length; v++)
      if (Xt[v] === c) {
        Xt.splice(v, 1);
        break;
      }
    a();
  }
  const s = (u) => {
    clearTimeout(o), o = setTimeout(() => {
      const d = t.getPrefixCls(void 0, Kd()), f = t.getIconPrefixCls(), p = t.getTheme(), v = /* @__PURE__ */ N.createElement(Xb, Object.assign({}, u));
      a = jo()(/* @__PURE__ */ N.createElement(nt, {
        prefixCls: d,
        iconPrefixCls: f,
        theme: p
      }, typeof t.holderRender == "function" ? t.holderRender(v) : v), n);
    });
  };
  function c(...u) {
    r = Object.assign(Object.assign({}, r), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), i.apply(this, u);
      }
    }), r.visible && delete r.visible, s(r);
  }
  function l(u) {
    typeof u == "function" ? r = u(r) : r = Object.assign(Object.assign({}, r), u), s(r);
  }
  return s(r), Xt.push(c), {
    destroy: c,
    update: l
  };
}
function Zd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  });
}
function Qd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  });
}
function Jd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  });
}
function ef(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  });
}
function tf(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  });
}
function Yb({
  rootPrefixCls: e
}) {
  process.env.NODE_ENV !== "production" && Gt(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), Yd = e;
}
var Kb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Zb = (e, t) => {
  var n, {
    afterClose: r,
    config: o
  } = e, a = Kb(e, ["afterClose", "config"]);
  const [i, s] = g.useState(!0), [c, l] = g.useState(o), {
    direction: u,
    getPrefixCls: d
  } = g.useContext(be), f = d("modal"), p = d(), v = () => {
    var y;
    r(), (y = c.afterClose) === null || y === void 0 || y.call(c);
  }, h = (...y) => {
    var x;
    if (s(!1), y.some((w) => w?.triggerCancel)) {
      var b;
      (x = c.onCancel) === null || x === void 0 || (b = x).call.apply(b, [c, () => {
      }].concat(z(y.slice(1))));
    }
  };
  g.useImperativeHandle(t, () => ({
    destroy: h,
    update: (y) => {
      l((x) => {
        const S = typeof y == "function" ? y(x) : y;
        return Object.assign(Object.assign({}, x), S);
      });
    }
  }));
  const m = (n = c.okCancel) !== null && n !== void 0 ? n : c.type === "confirm", [C] = Oo("Modal", Wt.Modal);
  return /* @__PURE__ */ g.createElement(is, Object.assign({
    prefixCls: f,
    rootPrefixCls: p
  }, c, {
    close: h,
    open: i,
    afterClose: v,
    okText: c.okText || (m ? C?.okText : C?.justOkText),
    direction: c.direction || u,
    cancelText: c.cancelText || C?.cancelText
  }, a));
}, Qb = /* @__PURE__ */ g.forwardRef(Zb);
let il = 0;
const Jb = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef((e, t) => {
  const [n, r] = Up();
  return g.useImperativeHandle(t, () => ({
    patchElement: r
  }), [r]), /* @__PURE__ */ g.createElement(g.Fragment, null, n);
}));
function eC() {
  const e = g.useRef(null), [t, n] = g.useState([]);
  g.useEffect(() => {
    t.length && (z(t).forEach((i) => {
      i();
    }), n([]));
  }, [t]);
  const r = g.useCallback((a) => function(s) {
    var c;
    il += 1;
    const l = /* @__PURE__ */ g.createRef();
    let u;
    const d = new Promise((m) => {
      u = m;
    });
    let f = !1, p;
    const v = /* @__PURE__ */ g.createElement(Qb, {
      key: `modal-${il}`,
      config: a(s),
      ref: l,
      afterClose: () => {
        p?.();
      },
      isSilent: () => f,
      onConfirm: (m) => {
        u(m);
      }
    });
    return p = (c = e.current) === null || c === void 0 ? void 0 : c.patchElement(v), p && Xt.push(p), {
      destroy: () => {
        function m() {
          var C;
          (C = l.current) === null || C === void 0 || C.destroy();
        }
        l.current ? m() : n((C) => [].concat(z(C), [m]));
      },
      update: (m) => {
        function C() {
          var y;
          (y = l.current) === null || y === void 0 || y.update(m);
        }
        l.current ? C() : n((y) => [].concat(z(y), [C]));
      },
      then: (m) => (f = !0, d.then(m))
    };
  }, []);
  return [g.useMemo(() => ({
    info: r(Qd),
    success: r(Jd),
    error: r(ef),
    warning: r(Zd),
    confirm: r(tf)
  }), [r]), /* @__PURE__ */ g.createElement(Jb, {
    key: "modal-holder",
    ref: e
  })];
}
const tC = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, o = `${t}-notice`, a = new Ne("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), i = new Ne("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), s = new Ne("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), c = new Ne("antNotificationLeftFadeIn", {
    "0%": {
      transform: "translate3d(-100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  });
  return {
    [t]: {
      [`&${t}-top, &${t}-bottom`]: {
        marginInline: 0,
        [o]: {
          marginInline: "auto auto"
        }
      },
      [`&${t}-top`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: i
        }
      },
      [`&${t}-bottom`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: s
        }
      },
      [`&${t}-topRight, &${t}-bottomRight`]: {
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: a
        }
      },
      [`&${t}-topLeft, &${t}-bottomLeft`]: {
        marginRight: {
          value: 0,
          _skip_check_: !0
        },
        marginLeft: {
          value: n,
          _skip_check_: !0
        },
        [o]: {
          marginInlineEnd: "auto",
          marginInlineStart: 0
        },
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationName: c
        }
      }
    }
  };
}, nC = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], rC = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, oC = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [rC[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, aC = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      overflow: "hidden",
      [`& > ${e.componentCls}-notice`]: {
        opacity: 0,
        transition: `opacity ${e.motionDurationMid}`
      }
    };
  return Object.assign({
    [`&:not(:nth-last-child(-n+${e.notificationStackLayer}))`]: {
      opacity: 0,
      overflow: "hidden",
      color: "transparent",
      pointerEvents: "none"
    }
  }, t);
}, iC = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, sC = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
        willChange: "transform, opacity",
        position: "absolute"
      }, aC(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, iC(e))
    },
    [`${t}-stack${t}-stack-expanded`]: {
      [`& > ${t}-notice-wrapper`]: {
        "&:not(:nth-last-child(-n + 1))": {
          opacity: 1,
          overflow: "unset",
          color: "inherit",
          pointerEvents: "auto",
          [`& > ${e.componentCls}-notice`]: {
            opacity: 1
          }
        },
        "&:after": {
          content: '""',
          position: "absolute",
          height: e.margin,
          width: "100%",
          insetInline: 0,
          bottom: e.calc(e.margin).mul(-1).equal(),
          background: "transparent",
          pointerEvents: "auto"
        }
      }
    }
  }, nC.map((n) => oC(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, nf = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadow: r,
    fontSizeLG: o,
    notificationMarginBottom: a,
    borderRadiusLG: i,
    colorSuccess: s,
    colorInfo: c,
    colorWarning: l,
    colorError: u,
    colorTextHeading: d,
    notificationBg: f,
    notificationPadding: p,
    notificationMarginEdge: v,
    notificationProgressBg: h,
    notificationProgressHeight: m,
    fontSize: C,
    lineHeight: y,
    width: x,
    notificationIconSize: S,
    colorText: b,
    colorSuccessBg: w,
    colorErrorBg: E,
    colorInfoBg: $,
    colorWarningBg: O
  } = e, P = `${n}-notice`;
  return {
    position: "relative",
    marginBottom: a,
    marginInlineStart: "auto",
    background: f,
    borderRadius: i,
    boxShadow: r,
    [P]: {
      padding: p,
      width: x,
      maxWidth: `calc(100vw - ${re(e.calc(v).mul(2).equal())})`,
      lineHeight: y,
      wordWrap: "break-word",
      borderRadius: i,
      overflow: "hidden",
      // Type-specific background colors
      "&-success": {
        background: w
      },
      "&-error": {
        background: E
      },
      "&-info": {
        background: $
      },
      "&-warning": {
        background: O
      }
    },
    [`${P}-message`]: {
      color: d,
      fontSize: o,
      lineHeight: e.lineHeightLG
    },
    [`${P}-description`]: {
      fontSize: C,
      color: b,
      marginTop: e.marginXS
    },
    [`${P}-closable ${P}-message`]: {
      paddingInlineEnd: e.paddingLG
    },
    [`${P}-with-icon ${P}-message`]: {
      marginInlineStart: e.calc(e.marginSM).add(S).equal(),
      fontSize: o
    },
    [`${P}-with-icon ${P}-description`]: {
      marginInlineStart: e.calc(e.marginSM).add(S).equal(),
      fontSize: C
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${P}-icon`]: {
      position: "absolute",
      fontSize: S,
      lineHeight: 1,
      // icon-font
      [`&-success${t}`]: {
        color: s
      },
      [`&-info${t}`]: {
        color: c
      },
      [`&-warning${t}`]: {
        color: l
      },
      [`&-error${t}`]: {
        color: u
      }
    },
    [`${P}-close`]: Object.assign({
      position: "absolute",
      top: e.notificationPaddingVertical,
      insetInlineEnd: e.notificationPaddingHorizontal,
      color: e.colorIcon,
      outline: "none",
      width: e.notificationCloseButtonSize,
      height: e.notificationCloseButtonSize,
      borderRadius: e.borderRadiusSM,
      transition: `background-color ${e.motionDurationMid}, color ${e.motionDurationMid}`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "none",
      border: "none",
      "&:hover": {
        color: e.colorIconHover,
        backgroundColor: e.colorBgTextHover
      },
      "&:active": {
        backgroundColor: e.colorBgTextActive
      }
    }, Xi(e)),
    [`${P}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      inlineSize: `calc(100% - ${re(i)} * 2)`,
      left: {
        _skip_check_: !0,
        value: i
      },
      right: {
        _skip_check_: !0,
        value: i
      },
      bottom: 0,
      blockSize: m,
      border: 0,
      "&, &::-webkit-progress-bar": {
        borderRadius: i,
        backgroundColor: "rgba(0, 0, 0, 0.04)"
      },
      "&::-moz-progress-bar": {
        background: h
      },
      "&::-webkit-progress-value": {
        borderRadius: i,
        background: h
      }
    },
    [`${P}-actions`]: {
      float: "right",
      marginTop: e.marginSM
    }
  };
}, cC = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: o,
    motionEaseInOut: a
  } = e, i = `${t}-notice`, s = new Ne("antNotificationFadeOut", {
    "0%": {
      maxHeight: e.animationMaxHeight,
      marginBottom: n
    },
    "100%": {
      maxHeight: 0,
      marginBottom: 0,
      paddingTop: 0,
      paddingBottom: 0,
      opacity: 0
    }
  });
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, Ui(e)), {
        position: "fixed",
        zIndex: e.zIndexPopup,
        marginRight: {
          value: r,
          _skip_check_: !0
        },
        [`${t}-hook-holder`]: {
          position: "relative"
        },
        //  animation
        [`${t}-fade-appear-prepare`]: {
          opacity: "0 !important"
        },
        [`${t}-fade-enter, ${t}-fade-appear`]: {
          animationDuration: e.motionDurationMid,
          animationTimingFunction: a,
          animationFillMode: "both",
          opacity: 0,
          animationPlayState: "paused"
        },
        [`${t}-fade-leave`]: {
          animationTimingFunction: a,
          animationFillMode: "both",
          animationDuration: o,
          animationPlayState: "paused"
        },
        [`${t}-fade-enter${t}-fade-enter-active, ${t}-fade-appear${t}-fade-appear-active`]: {
          animationPlayState: "running"
        },
        [`${t}-fade-leave${t}-fade-leave-active`]: {
          animationName: s,
          animationPlayState: "running"
        },
        // RTL
        "&-rtl": {
          direction: "rtl",
          [`${i}-actions`]: {
            float: "left"
          }
        }
      })
    },
    // ============================ Notice ============================
    {
      [t]: {
        [`${i}-wrapper`]: nf(e)
      }
    }
  ];
}, rf = (e) => ({
  zIndexPopup: e.zIndexPopupBase + Ao + 50,
  width: 384,
  colorSuccessBg: e.colorSuccessBg,
  colorErrorBg: e.colorErrorBg,
  colorInfoBg: e.colorInfoBg,
  colorWarningBg: e.colorWarningBg
}), of = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return Ct(e, {
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
    notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: e.margin,
    notificationPadding: `${re(e.paddingMD)} ${re(e.paddingContentHorizontalLG)}`,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
  });
}, af = rn("Notification", (e) => {
  const t = of(e);
  return [cC(t), tC(t), sC(t)];
}, rf), lC = Yi(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = of(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, nf(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${re(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, rf);
var uC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function ss(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ g.createElement(on, {
    className: `${e}-close-icon`
  });
}
const dC = {
  success: To,
  info: Mo,
  error: Ro,
  warning: _o
}, sf = (e) => {
  const {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: a,
    actions: i,
    role: s = "alert"
  } = e;
  let c = null;
  return n ? c = /* @__PURE__ */ g.createElement("span", {
    className: `${t}-icon`
  }, n) : r && (c = /* @__PURE__ */ g.createElement(dC[r] || null, {
    className: W(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ g.createElement("div", {
    className: W({
      [`${t}-with-icon`]: c
    }),
    role: s
  }, c, /* @__PURE__ */ g.createElement("div", {
    className: `${t}-message`
  }, o), a && /* @__PURE__ */ g.createElement("div", {
    className: `${t}-description`
  }, a), i && /* @__PURE__ */ g.createElement("div", {
    className: `${t}-actions`
  }, i));
}, fC = (e) => {
  const {
    prefixCls: t,
    className: n,
    icon: r,
    type: o,
    message: a,
    description: i,
    btn: s,
    actions: c,
    closable: l = !0,
    closeIcon: u,
    className: d
  } = e, f = uC(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "actions", "closable", "closeIcon", "className"]), {
    getPrefixCls: p
  } = g.useContext(be), v = c ?? s;
  process.env.NODE_ENV !== "production" && st("Notification").deprecated(!s, "btn", "actions");
  const h = t || p("notification"), m = `${h}-notice`, C = jn(h), [y, x, S] = af(h, C);
  return y(/* @__PURE__ */ g.createElement("div", {
    className: W(`${m}-pure-panel`, x, n, S, C)
  }, /* @__PURE__ */ g.createElement(lC, {
    prefixCls: h
  }), /* @__PURE__ */ g.createElement(Qi, Object.assign({}, f, {
    prefixCls: h,
    eventKey: "pure",
    duration: null,
    closable: l,
    className: W({
      notificationClassName: d
    }),
    closeIcon: ss(h, u),
    content: /* @__PURE__ */ g.createElement(sf, {
      prefixCls: m,
      icon: r,
      type: o,
      message: a,
      description: i,
      actions: v
    })
  }))));
};
function mC(e, t, n) {
  let r;
  switch (e) {
    case "top":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: t,
        bottom: "auto"
      };
      break;
    case "topLeft":
      r = {
        left: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "topRight":
      r = {
        right: 0,
        top: t,
        bottom: "auto"
      };
      break;
    case "bottom":
      r = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: n
      };
      break;
    case "bottomLeft":
      r = {
        left: 0,
        top: "auto",
        bottom: n
      };
      break;
    default:
      r = {
        right: 0,
        top: "auto",
        bottom: n
      };
      break;
  }
  return r;
}
function gC(e) {
  return {
    motionName: `${e}-fade`
  };
}
function vC(e, t, n) {
  return typeof e < "u" ? e : typeof t?.closeIcon < "u" ? t.closeIcon : n?.closeIcon;
}
var pC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const sl = 24, hC = 4.5, yC = "topRight", bC = ({
  children: e,
  prefixCls: t
}) => {
  const n = jn(t), [r, o, a] = af(t, n);
  return r(/* @__PURE__ */ N.createElement(td, {
    classNames: {
      list: W(o, a, n)
    }
  }, e));
}, CC = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ N.createElement(bC, {
  prefixCls: t,
  key: n
}, e), xC = /* @__PURE__ */ N.forwardRef((e, t) => {
  const {
    top: n,
    bottom: r,
    prefixCls: o,
    getContainer: a,
    maxCount: i,
    rtl: s,
    onAllRemoved: c,
    stack: l,
    duration: u,
    pauseOnHover: d = !0,
    showProgress: f
  } = e, {
    getPrefixCls: p,
    getPopupContainer: v,
    notification: h,
    direction: m
  } = ie(be), [, C] = _t(), y = o || p("notification"), x = ($) => mC($, n ?? sl, r ?? sl), S = () => W({
    [`${y}-rtl`]: s ?? m === "rtl"
  }), b = () => gC(y), [w, E] = od({
    prefixCls: y,
    style: x,
    className: S,
    motion: b,
    closable: !0,
    closeIcon: ss(y),
    duration: u ?? hC,
    getContainer: () => a?.() || v?.() || document.body,
    maxCount: i,
    pauseOnHover: d,
    showProgress: f,
    onAllRemoved: c,
    renderNotifications: CC,
    stack: l === !1 ? !1 : {
      threshold: typeof l == "object" ? l?.threshold : void 0,
      offset: 8,
      gap: C.margin
    }
  });
  return N.useImperativeHandle(t, () => Object.assign(Object.assign({}, w), {
    prefixCls: y,
    notification: h
  })), E;
});
function cf(e) {
  const t = N.useRef(null), n = st("Notification");
  return [N.useMemo(() => {
    const o = (c) => {
      var l;
      if (!t.current) {
        process.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        return;
      }
      const {
        open: u,
        prefixCls: d,
        notification: f
      } = t.current, p = `${d}-notice`, {
        message: v,
        description: h,
        icon: m,
        type: C,
        btn: y,
        actions: x,
        className: S,
        style: b,
        role: w = "alert",
        closeIcon: E,
        closable: $
      } = c, O = pC(c, ["message", "description", "icon", "type", "btn", "actions", "className", "style", "role", "closeIcon", "closable"]);
      process.env.NODE_ENV !== "production" && n.deprecated(!y, "btn", "actions");
      const P = x ?? y, _ = ss(p, vC(E, e, f));
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (l = e?.placement) !== null && l !== void 0 ? l : yC
      }, O), {
        content: /* @__PURE__ */ N.createElement(sf, {
          prefixCls: p,
          icon: m,
          type: C,
          message: v,
          description: h,
          actions: P,
          role: w
        }),
        className: W(C && `${p}-${C}`, S, f?.className),
        style: Object.assign(Object.assign({}, f?.style), b),
        closeIcon: _,
        closable: $ ?? !!_
      }));
    }, i = {
      open: o,
      destroy: (c) => {
        var l, u;
        c !== void 0 ? (l = t.current) === null || l === void 0 || l.close(c) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["success", "info", "warning", "error"].forEach((c) => {
      i[c] = (l) => o(Object.assign(Object.assign({}, l), {
        type: c
      }));
    }), i;
  }, []), /* @__PURE__ */ N.createElement(xC, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function SC(e) {
  return cf(e);
}
const lf = /* @__PURE__ */ N.createContext({});
function EC(e) {
  return (t) => /* @__PURE__ */ g.createElement(nt, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, t)));
}
var wC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, $C = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: wC
  }));
}, uf = /* @__PURE__ */ g.forwardRef($C);
process.env.NODE_ENV !== "production" && (uf.displayName = "SearchOutlined");
let ft = null, Yt = (e) => e(), ar = [], ir = {};
function cl() {
  const {
    getContainer: e,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  } = ir, a = e?.() || document.body;
  return {
    getContainer: () => a,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  };
}
const OC = /* @__PURE__ */ N.forwardRef((e, t) => {
  const {
    messageConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = ie(be), a = ir.prefixCls || o("message"), i = ie(lf), [s, c] = cd(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.message));
  return N.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...d) => (r(), s[u].apply(s, d));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), PC = /* @__PURE__ */ N.forwardRef((e, t) => {
  const [n, r] = N.useState(cl), o = () => {
    r(cl);
  };
  N.useEffect(o, []);
  const a = gr(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ N.createElement(OC, {
    ref: t,
    sync: o,
    messageConfig: n
  });
  return /* @__PURE__ */ N.createElement(nt, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
}), qo = () => {
  if (!ft) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    ft = t, Yt(() => {
      jo()(/* @__PURE__ */ N.createElement(PC, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, qo());
          });
        }
      }), e);
    });
    return;
  }
  ft.instance && (ar.forEach((e) => {
    const {
      type: t,
      skipped: n
    } = e;
    if (!n)
      switch (t) {
        case "open": {
          Yt(() => {
            const r = ft.instance.open(Object.assign(Object.assign({}, ir), e.config));
            r?.then(e.resolve), e.setCloseFn(r);
          });
          break;
        }
        case "destroy":
          Yt(() => {
            ft?.instance.destroy(e.key);
          });
          break;
        // Other type open
        default:
          Yt(() => {
            var r;
            const o = (r = ft.instance)[t].apply(r, z(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), ar = []);
};
function NC(e) {
  ir = Object.assign(Object.assign({}, ir), e), Yt(() => {
    var t;
    (t = ft?.sync) === null || t === void 0 || t.call(ft);
  });
}
function TC(e) {
  const t = ts((n) => {
    let r;
    const o = {
      type: "open",
      config: e,
      resolve: n,
      setCloseFn: (a) => {
        r = a;
      }
    };
    return ar.push(o), () => {
      r ? Yt(() => {
        r();
      }) : o.skipped = !0;
    };
  });
  return qo(), t;
}
function RC(e, t) {
  const n = gr();
  process.env.NODE_ENV !== "production" && !n.holderRender && Zi("message");
  const r = ts((o) => {
    let a;
    const i = {
      type: e,
      args: t,
      resolve: o,
      setCloseFn: (s) => {
        a = s;
      }
    };
    return ar.push(i), () => {
      a ? Yt(() => {
        a();
      }) : i.skipped = !0;
    };
  });
  return qo(), r;
}
const _C = (e) => {
  ar.push({
    type: "destroy",
    key: e
  }), qo();
}, MC = ["success", "info", "warning", "error", "loading"], IC = {
  open: TC,
  destroy: _C,
  config: NC,
  useMessage: dh,
  _InternalPanelDoNotUseOrYouWillBeFired: rh
}, df = IC;
MC.forEach((e) => {
  df[e] = (...t) => RC(e, t);
});
process.env.NODE_ENV;
process.env.NODE_ENV;
var AC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const FC = (e) => {
  const {
    prefixCls: t,
    className: n,
    closeIcon: r,
    closable: o,
    type: a,
    title: i,
    children: s,
    footer: c
  } = e, l = AC(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls: u
  } = g.useContext(be), d = u(), f = t || u("modal"), p = jn(d), [v, h, m] = Gd(f, p), C = `${f}-confirm`;
  let y = {};
  return a ? y = {
    closable: o ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ g.createElement(Ud, Object.assign({}, e, {
      prefixCls: f,
      confirmPrefixCls: C,
      rootPrefixCls: d,
      content: s
    }))
  } : y = {
    closable: o ?? !0,
    title: i,
    footer: c !== null && /* @__PURE__ */ g.createElement(Vd, Object.assign({}, e)),
    children: s
  }, v(/* @__PURE__ */ g.createElement(os, Object.assign({
    prefixCls: f,
    className: W(h, `${f}-pure-panel`, a && C, a && `${C}-${a}`, n, m, p)
  }, l, {
    closeIcon: Bd(f, r),
    closable: o
  }, y)));
}, jC = EC(FC);
function ff(e) {
  return br(Zd(e));
}
const ct = qd;
ct.useModal = eC;
ct.info = function(t) {
  return br(Qd(t));
};
ct.success = function(t) {
  return br(Jd(t));
};
ct.error = function(t) {
  return br(ef(t));
};
ct.warning = ff;
ct.warn = ff;
ct.confirm = function(t) {
  return br(tf(t));
};
ct.destroyAll = function() {
  for (; Xt.length; ) {
    const t = Xt.pop();
    t && t();
  }
};
ct.config = Yb;
ct._InternalPanelDoNotUseOrYouWillBeFired = jC;
process.env.NODE_ENV !== "production" && (ct.displayName = "Modal");
let ht = null, ro = (e) => e(), yo = [], sr = {};
function ll() {
  const {
    getContainer: e,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: o,
    showProgress: a,
    pauseOnHover: i
  } = sr, s = e?.() || document.body;
  return {
    getContainer: () => s,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: o,
    showProgress: a,
    pauseOnHover: i
  };
}
const kC = /* @__PURE__ */ N.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = ie(be), a = sr.prefixCls || o("notification"), i = ie(lf), [s, c] = cf(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.notification));
  return N.useEffect(r, []), N.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...d) => (r(), s[u].apply(s, d));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), LC = /* @__PURE__ */ N.forwardRef((e, t) => {
  const [n, r] = N.useState(ll), o = () => {
    r(ll);
  };
  N.useEffect(o, []);
  const a = gr(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ N.createElement(kC, {
    ref: t,
    sync: o,
    notificationConfig: n
  });
  return /* @__PURE__ */ N.createElement(nt, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
}), cs = () => {
  if (!ht) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    ht = t, ro(() => {
      jo()(/* @__PURE__ */ N.createElement(LC, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, cs());
          });
        }
      }), e);
    });
    return;
  }
  ht.instance && (yo.forEach((e) => {
    switch (e.type) {
      case "open": {
        ro(() => {
          ht.instance.open(Object.assign(Object.assign({}, sr), e.config));
        });
        break;
      }
      case "destroy":
        ro(() => {
          var t;
          (t = ht?.instance) === null || t === void 0 || t.destroy(e.key);
        });
        break;
    }
  }), yo = []);
};
function DC(e) {
  sr = Object.assign(Object.assign({}, sr), e), ro(() => {
    var t;
    (t = ht?.sync) === null || t === void 0 || t.call(ht);
  });
}
function mf(e) {
  const t = gr();
  process.env.NODE_ENV !== "production" && !t.holderRender && Zi("notification"), yo.push({
    type: "open",
    config: e
  }), cs();
}
const BC = (e) => {
  yo.push({
    type: "destroy",
    key: e
  }), cs();
}, VC = ["success", "info", "warning", "error"], HC = {
  open: mf,
  destroy: BC,
  config: DC,
  useNotification: SC,
  _InternalPanelDoNotUseOrYouWillBeFired: fC
}, gf = HC;
VC.forEach((e) => {
  gf[e] = (t) => mf(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const zC = (e) => {
  const t = e?.algorithm ? so(e.algorithm) : zi, n = Object.assign(Object.assign({}, Nn), e?.token);
  return Zl(n, {
    override: e?.token
  }, t, qi);
};
function WC(e) {
  const {
    sizeUnit: t,
    sizeStep: n
  } = e, r = n - 2;
  return {
    sizeXXL: t * (r + 10),
    sizeXL: t * (r + 6),
    sizeLG: t * (r + 2),
    sizeMD: t * (r + 2),
    sizeMS: t * (r + 1),
    size: t * r,
    sizeSM: t * r,
    sizeXS: t * (r - 1),
    sizeXXS: t * (r - 1)
  };
}
const GC = (e, t) => {
  const n = t ?? Po(e), r = n.fontSizeSM, o = n.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), WC(t ?? e)), $u(r)), {
    // controlHeight
    controlHeight: o
  }), wu(Object.assign(Object.assign({}, n), {
    controlHeight: o
  })));
}, dt = (e, t) => new xe(e).setA(t).toRgbString(), gn = (e, t) => new xe(e).lighten(t).toHexString(), qC = (e) => {
  const t = en(e, {
    theme: "dark"
  });
  return {
    1: t[0],
    2: t[1],
    3: t[2],
    4: t[3],
    5: t[6],
    6: t[5],
    7: t[4],
    8: t[6],
    9: t[5],
    10: t[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, UC = (e, t) => {
  const n = e || "#000", r = t || "#fff";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: dt(r, 0.85),
    colorTextSecondary: dt(r, 0.65),
    colorTextTertiary: dt(r, 0.45),
    colorTextQuaternary: dt(r, 0.25),
    colorFill: dt(r, 0.18),
    colorFillSecondary: dt(r, 0.12),
    colorFillTertiary: dt(r, 0.08),
    colorFillQuaternary: dt(r, 0.04),
    colorBgSolid: dt(r, 0.95),
    colorBgSolidHover: dt(r, 1),
    colorBgSolidActive: dt(r, 0.9),
    colorBgElevated: gn(n, 12),
    colorBgContainer: gn(n, 8),
    colorBgLayout: gn(n, 0),
    colorBgSpotlight: gn(n, 26),
    colorBgBlur: dt(r, 0.04),
    colorBorder: gn(n, 26),
    colorBorderSecondary: gn(n, 19)
  };
}, XC = (e, t) => {
  const n = Object.keys(Hi).map((a) => {
    const i = en(e[a], {
      theme: "dark"
    });
    return Array.from({
      length: 10
    }, () => 1).reduce((s, c, l) => (s[`${a}-${l + 1}`] = i[l], s[`${a}${l + 1}`] = i[l], s), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), r = t ?? Po(e), o = Eu(e, {
    generateColorPalettes: qC,
    generateNeutralColorPalettes: UC
  });
  return Object.assign(Object.assign(Object.assign(Object.assign({}, r), n), o), {
    // Customize selected item background color
    // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
    colorPrimaryBg: o.colorPrimaryBorder,
    colorPrimaryBgHover: o.colorPrimaryBorderHover
  });
};
function YC() {
  const [e, t, n] = _t();
  return {
    theme: e,
    token: t,
    hashId: n
  };
}
const Oi = {
  /** Default seedToken */
  defaultSeed: or.token,
  useToken: YC,
  defaultAlgorithm: Po,
  darkAlgorithm: XC,
  compactAlgorithm: GC,
  getDesignToken: zC,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  defaultConfig: or,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  _internalContext: Wi
};
function vf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = vf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function KC() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = vf(e)) && (r && (r += " "), r += t);
  return r;
}
function K(...e) {
  return KC(e);
}
const ZC = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, QC = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", JC = N.forwardRef(
  ({
    align: e = "center",
    interactive: t = !0,
    className: n,
    icon: r,
    iconSrc: o,
    iconAlt: a,
    iconSize: i = "lg",
    iconClassName: s,
    children: c,
    ...l
  }, u) => {
    const d = !!(r ?? o), f = () => d ? /* @__PURE__ */ F(
      pf,
      {
        size: i,
        className: s,
        children: r ?? (o ? /* @__PURE__ */ F(
          "img",
          {
            src: o,
            alt: a ?? "Card icon",
            className: "luca-h-full luca-w-full luca-object-contain"
          }
        ) : null)
      }
    ) : null;
    return /* @__PURE__ */ _e(
      "div",
      {
        ref: u,
        "data-card-align": e,
        className: K(
          "luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          t && QC,
          ZC[e],
          n
        ),
        ...l,
        children: [
          f(),
          c
        ]
      }
    );
  }
);
JC.displayName = "Card";
const e1 = N.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
    "div",
    {
      ref: r,
      className: K(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        e
      ),
      ...n,
      children: t
    }
  )
);
e1.displayName = "CardHeader";
const t1 = N.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
    "strong",
    {
      ref: r,
      className: K(
        "luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        e
      ),
      ...n,
      children: t
    }
  )
);
t1.displayName = "CardTitle";
const n1 = N.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
  "p",
  {
    ref: r,
    className: K(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line",
      e
    ),
    ...n,
    children: t
  }
));
n1.displayName = "CardDescription";
const r1 = N.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
    "div",
    {
      ref: r,
      className: K(
        "luca-w-full luca-text-sm",
        e
      ),
      ...n,
      children: t
    }
  )
);
r1.displayName = "CardContent";
const o1 = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, pf = N.forwardRef(
  ({ className: e, children: t, size: n = "lg", ...r }, o) => /* @__PURE__ */ F(
    "div",
    {
      ref: o,
      className: K(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        o1[n],
        e
      ),
      ...r,
      children: t
    }
  )
);
pf.displayName = "CardIcon";
const a1 = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap disabled:luca-cursor-not-allowed", i1 = {
  primary: {
    default: K(
      // Default state - amarillo
      "luca-bg-[#ffba31] luca-text-[#111827] luca-shadow-[0px_4px_0px_0px_#f58f00]",
      // Hover, Active, Focus - mismo diseño (naranja más oscuro)
      "hover:luca-bg-[#f58f00] hover:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "active:luca-bg-[#f58f00] active:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "focus-visible:luca-bg-[#f58f00] focus-visible:luca-shadow-[0px_4px_0px_0px_#d0780f] focus-visible:luca-outline-none",
      // Disabled state - gris
      "disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-shadow-[0px_4px_0px_0px_#adadad]"
    ),
    alert: K(
      // Alert default - borde rojo, fondo blanco
      "luca-bg-white luca-text-[#ef4444] luca-border luca-border-[#f87171]",
      // Alert hover/focus - fondo rojo muy claro
      "hover:luca-bg-[#fef2f2]",
      "focus-visible:luca-bg-[#fef2f2] focus-visible:luca-outline-none",
      "active:luca-bg-[#fef2f2]",
      // Disabled - gris
      "disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-border-[#adadad]"
    )
  },
  secondary: {
    default: K(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200 luca-shadow-[0px_3px_0px_0px_#adadad]",
      "hover:luca-border-[#c5daff] hover:luca-text-[#3843d0]",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: K(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  },
  tertiary: {
    default: K(
      "!luca-rounded-full luca-bg-white luca-text-[#4b5563] luca-border luca-border-[#e5e7eb]",
      "hover:luca-bg-[#edf5ff] hover:luca-border-[#3843d0] hover:luca-text-[#3843d0]",
      "active:luca-bg-[#3843d0] active:luca-border-white active:luca-text-white",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: K(
      "!luca-rounded-full luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  }
}, hf = N.forwardRef(
  ({
    variant: e = "primary",
    state: t = "default",
    leftIcon: n,
    rightIcon: r,
    className: o,
    children: a,
    disabled: i,
    type: s = "button",
    ...c
  }, l) => /* @__PURE__ */ _e(
    "button",
    {
      ref: l,
      type: s,
      disabled: i,
      className: K(
        a1,
        i1[e][t],
        o
      ),
      ...c,
      children: [
        n && /* @__PURE__ */ F("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: n }),
        /* @__PURE__ */ F("span", { className: "luca-leading-tight", children: a }),
        r && /* @__PURE__ */ F("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: r })
      ]
    }
  )
);
hf.displayName = "Button";
const ul = {
  state: {
    default: "luca-bg-white luca-border-[#e5e7eb] luca-text-[#3843d0]",
    hover: "luca-bg-[#edf5ff] luca-border-[#e5e7eb] luca-text-[#3843d0]",
    selected: "luca-bg-[#3843d0] luca-border-[#3843d0] luca-text-white",
    disabled: "luca-bg-[#f3f4f6] luca-border-[#e5e7eb] luca-text-[#9ca3af] luca-cursor-not-allowed"
  },
  outline: {
    default: "luca-rounded-lg",
    rounded: "luca-rounded-full"
  }
}, yf = N.forwardRef(
  ({
    state: e = "default",
    outline: t = "default",
    icon: n,
    className: r,
    disabled: o,
    ...a
  }, i) => {
    const s = e === "disabled" || o;
    return /* @__PURE__ */ F(
      "button",
      {
        ref: i,
        disabled: s,
        className: K(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          ul.state[e],
          ul.outline[t],
          // Hover styles solo si no está disabled
          !s && "hover:luca-bg-[#edf5ff] hover:luca-text-[#3843d0]",
          r
        ),
        ...a,
        children: /* @__PURE__ */ F("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: n })
      }
    );
  }
);
yf.displayName = "ButtonIcon";
const s1 = ({ className: e, color: t }) => /* @__PURE__ */ F(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ F(
      "path",
      {
        d: "M13.3337 4L6.00033 11.3333L2.66699 8",
        stroke: t,
        strokeWidth: "2",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), gS = ({
  variant: e = "fill",
  color: t = "primary",
  rounded: n = "semi",
  showIcon: r = !1,
  children: o,
  className: a,
  ...i
}) => {
  const s = "luca-inline-flex luca-items-center luca-justify-center luca-px-[10px] luca-py-[3px] luca-text-xs luca-leading-5 luca-font-normal", c = {
    semi: "luca-rounded",
    full: "luca-rounded-[30px]"
  }, l = r && n === "full" ? "luca-gap-1" : "", u = {
    fill: {
      primary: "luca-bg-primary-600 luca-text-white",
      secondary: "luca-bg-accent-600 luca-text-neutral-900",
      gray: "luca-bg-neutral-500 luca-text-white",
      light: "luca-bg-neutral-50 luca-text-neutral-900",
      warning: "luca-bg-warning-500 luca-text-white",
      danger: "luca-bg-danger-600 luca-text-white",
      success: "luca-bg-success-600 luca-text-white",
      info: "luca-bg-info-400 luca-text-white"
    },
    outline: {
      primary: "luca-border luca-border-primary-600 luca-text-primary-600",
      secondary: "luca-border luca-border-accent-600 luca-text-neutral-900",
      gray: "luca-border luca-border-neutral-500 luca-text-neutral-500",
      light: "luca-border luca-border-neutral-50 luca-text-neutral-900",
      warning: "luca-border luca-border-warning-500 luca-text-warning-500",
      danger: "luca-border luca-border-danger-600 luca-text-danger-600",
      success: "luca-border luca-border-success-600 luca-text-success-600",
      info: "luca-border luca-border-info-400 luca-text-info-400"
    },
    duotone: {
      primary: "luca-bg-primary-600/10 luca-text-primary-600",
      secondary: "luca-bg-accent-100 luca-text-neutral-900",
      gray: "luca-bg-neutral-500/10 luca-text-neutral-500",
      light: "luca-bg-neutral-200/50 luca-text-neutral-700",
      warning: "luca-bg-warning-50 luca-text-warning-600",
      danger: "luca-bg-danger-50 luca-text-danger-600",
      success: "luca-bg-success-50 luca-text-success-600",
      info: "luca-bg-info-50 luca-text-info-600"
    }
  }, d = {
    primary: "#3843D0",
    secondary: "#374151",
    gray: "#6b7280",
    light: "#374151",
    warning: "#d97706",
    danger: "#DC2626",
    success: "#16A34A",
    info: "#38BDF8"
  };
  return /* @__PURE__ */ _e(
    "span",
    {
      className: K(
        s,
        c[n],
        l,
        u[e][t],
        a
      ),
      ...i,
      children: [
        r && n === "full" && e === "duotone" && /* @__PURE__ */ F(
          s1,
          {
            className: "luca-shrink-0",
            color: d[t]
          }
        ),
        o
      ]
    }
  );
}, c1 = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", l1 = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", u1 = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", d1 = "hover:luca-text-[#3843d0] focus-visible:luca-outline-[#3843d0]", f1 = "luca-cursor-not-allowed luca-text-gray-400 hover:luca-text-gray-400 focus-visible:luca-outline-none luca-opacity-60", m1 = N.forwardRef(
  ({
    items: e,
    value: t,
    defaultValue: n,
    onValueChange: r,
    fullWidth: o = !1,
    ariaLabel: a,
    className: i,
    ...s
  }, c) => {
    const l = t !== void 0, u = N.useMemo(
      () => e.find((v) => !v.disabled)?.key,
      [e]
    ), [d, f] = N.useState(() => n !== void 0 ? n : u);
    N.useEffect(() => {
      if (l || n === void 0) return;
      const v = e.some(
        (h) => h.key === n && !h.disabled
      );
      f(v ? n : u);
    }, [n, u, l, e]), N.useEffect(() => {
      l || f((v) => v && e.some((h) => h.key === v && !h.disabled) ? v : u ?? v);
    }, [u, e, l]);
    const p = l ? t : d;
    return /* @__PURE__ */ F(
      "div",
      {
        ref: c,
        role: "tablist",
        "aria-label": a,
        className: K(c1, o && "luca-w-full", i),
        ...s,
        children: e.map((v) => {
          const h = v.key === p, m = !!v.disabled, C = h || !p && v.key === u ? 0 : -1;
          return /* @__PURE__ */ F(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": h,
              "aria-disabled": m,
              disabled: m,
              tabIndex: C,
              "data-selected": h || void 0,
              "data-disabled": m || void 0,
              "data-value": v.key,
              className: K(
                l1,
                o ? "luca-flex-1" : "luca-min-w-[88px]",
                h ? u1 : d1,
                m && f1
              ),
              onClick: () => {
                m || (l || f(v.key), r?.(v.key));
              },
              children: v.label
            },
            v.key
          );
        })
      }
    );
  }
);
m1.displayName = "TabList";
const bf = ({
  backgroundImage: e,
  title: t,
  subtitle: n,
  avatarImage: r,
  avatarAlt: o = "Layout avatar",
  heroClassName: a,
  heroStyle: i
}) => /* @__PURE__ */ _e(
  "div",
  {
    className: K(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      a
    ),
    style: { backgroundImage: `url(${e})`, ...i },
    children: [
      /* @__PURE__ */ F("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-Left", children: t }),
      /* @__PURE__ */ F("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ F(
        "img",
        {
          src: r,
          alt: o,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ F("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: n })
    ]
  }
);
bf.displayName = "LayoutHeader";
const Cf = ({ children: e, className: t, ...n }) => /* @__PURE__ */ F(
  "div",
  {
    className: K(
      "luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      t
    ),
    ...n,
    children: e
  }
);
Cf.displayName = "LayoutContent";
const ls = ({ className: e, style: t, children: n }) => /* @__PURE__ */ F("div", { className: K("luca-bg-[#F9FAFB]", e), style: t, children: n });
ls.displayName = "Layout";
ls.Header = bf;
ls.Content = Cf;
function g1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function v1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var p1 = /* @__PURE__ */ (function() {
  function e(n) {
    var r = this;
    this._insertTag = function(o) {
      var a;
      r.tags.length === 0 ? r.insertionPoint ? a = r.insertionPoint.nextSibling : r.prepend ? a = r.container.firstChild : a = r.before : a = r.tags[r.tags.length - 1].nextSibling, r.container.insertBefore(o, a), r.tags.push(o);
    }, this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy, this.tags = [], this.ctr = 0, this.nonce = n.nonce, this.key = n.key, this.container = n.container, this.prepend = n.prepend, this.insertionPoint = n.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(r) {
    r.forEach(this._insertTag);
  }, t.insert = function(r) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(v1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = g1(o);
      try {
        a.insertRule(r, a.cssRules.length);
      } catch {
      }
    } else
      o.appendChild(document.createTextNode(r));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(r) {
      var o;
      return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
    }), this.tags = [], this.ctr = 0;
  }, e;
})(), Xe = "-ms-", bo = "-moz-", ce = "-webkit-", xf = "comm", us = "rule", ds = "decl", h1 = "@import", Sf = "@keyframes", y1 = "@layer", b1 = Math.abs, Uo = String.fromCharCode, C1 = Object.assign;
function x1(e, t) {
  return We(e, 0) ^ 45 ? (((t << 2 ^ We(e, 0)) << 2 ^ We(e, 1)) << 2 ^ We(e, 2)) << 2 ^ We(e, 3) : 0;
}
function Ef(e) {
  return e.trim();
}
function S1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function le(e, t, n) {
  return e.replace(t, n);
}
function Pi(e, t) {
  return e.indexOf(t);
}
function We(e, t) {
  return e.charCodeAt(t) | 0;
}
function cr(e, t, n) {
  return e.slice(t, n);
}
function $t(e) {
  return e.length;
}
function fs(e) {
  return e.length;
}
function Gr(e, t) {
  return t.push(e), e;
}
function E1(e, t) {
  return e.map(t).join("");
}
var Xo = 1, Mn = 1, wf = 0, tt = 0, Ae = 0, Dn = "";
function Yo(e, t, n, r, o, a, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: Xo, column: Mn, length: i, return: "" };
}
function Gn(e, t) {
  return C1(Yo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function w1() {
  return Ae;
}
function $1() {
  return Ae = tt > 0 ? We(Dn, --tt) : 0, Mn--, Ae === 10 && (Mn = 1, Xo--), Ae;
}
function it() {
  return Ae = tt < wf ? We(Dn, tt++) : 0, Mn++, Ae === 10 && (Mn = 1, Xo++), Ae;
}
function Nt() {
  return We(Dn, tt);
}
function oo() {
  return tt;
}
function Cr(e, t) {
  return cr(Dn, e, t);
}
function lr(e) {
  switch (e) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function $f(e) {
  return Xo = Mn = 1, wf = $t(Dn = e), tt = 0, [];
}
function Of(e) {
  return Dn = "", e;
}
function ao(e) {
  return Ef(Cr(tt - 1, Ni(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function O1(e) {
  for (; (Ae = Nt()) && Ae < 33; )
    it();
  return lr(e) > 2 || lr(Ae) > 3 ? "" : " ";
}
function P1(e, t) {
  for (; --t && it() && !(Ae < 48 || Ae > 102 || Ae > 57 && Ae < 65 || Ae > 70 && Ae < 97); )
    ;
  return Cr(e, oo() + (t < 6 && Nt() == 32 && it() == 32));
}
function Ni(e) {
  for (; it(); )
    switch (Ae) {
      // ] ) " '
      case e:
        return tt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ni(Ae);
        break;
      // (
      case 40:
        e === 41 && Ni(e);
        break;
      // \
      case 92:
        it();
        break;
    }
  return tt;
}
function N1(e, t) {
  for (; it() && e + Ae !== 57; )
    if (e + Ae === 84 && Nt() === 47)
      break;
  return "/*" + Cr(t, tt - 1) + "*" + Uo(e === 47 ? e : it());
}
function T1(e) {
  for (; !lr(Nt()); )
    it();
  return Cr(e, tt);
}
function R1(e) {
  return Of(io("", null, null, null, [""], e = $f(e), 0, [0], e));
}
function io(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, f = 0, p = 0, v = 0, h = 1, m = 1, C = 1, y = 0, x = "", S = o, b = a, w = r, E = x; m; )
    switch (v = y, y = it()) {
      // (
      case 40:
        if (v != 108 && We(E, d - 1) == 58) {
          Pi(E += le(ao(y), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ao(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += O1(v);
        break;
      // \
      case 92:
        E += P1(oo() - 1, 7);
        continue;
      // /
      case 47:
        switch (Nt()) {
          case 42:
          case 47:
            Gr(_1(N1(it(), oo()), t, n), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * h:
        s[l++] = $t(E) * C;
      // } ; \0
      case 125 * h:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + u:
            C == -1 && (E = le(E, /\f/g, "")), p > 0 && $t(E) - d && Gr(p > 32 ? fl(E + ";", r, n, d - 1) : fl(le(E, " ", "") + ";", r, n, d - 2), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Gr(w = dl(E, t, n, l, u, o, s, x, S = [], b = [], d), a), y === 123)
              if (u === 0)
                io(E, t, w, w, S, a, d, s, b);
              else
                switch (f === 99 && We(E, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    io(e, w, w, r && Gr(dl(e, w, w, 0, 0, o, s, x, o, S = [], d), b), o, b, d, s, r ? S : b);
                    break;
                  default:
                    io(E, w, w, w, [""], b, 0, s, b);
                }
        }
        l = u = p = 0, h = C = 1, x = E = "", d = i;
        break;
      // :
      case 58:
        d = 1 + $t(E), p = v;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && $1() == 125)
            continue;
        }
        switch (E += Uo(y), y * h) {
          // &
          case 38:
            C = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = ($t(E) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Nt() === 45 && (E += ao(it())), f = Nt(), u = d = $t(x = E += T1(oo())), y++;
            break;
          // -
          case 45:
            v === 45 && $t(E) == 2 && (h = 0);
        }
    }
  return a;
}
function dl(e, t, n, r, o, a, i, s, c, l, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = fs(f), v = 0, h = 0, m = 0; v < r; ++v)
    for (var C = 0, y = cr(e, d + 1, d = b1(h = i[v])), x = e; C < p; ++C)
      (x = Ef(h > 0 ? f[C] + " " + y : le(y, /&\f/g, f[C]))) && (c[m++] = x);
  return Yo(e, t, n, o === 0 ? us : s, c, l, u);
}
function _1(e, t, n) {
  return Yo(e, t, n, xf, Uo(w1()), cr(e, 2, -2), 0);
}
function fl(e, t, n, r) {
  return Yo(e, t, n, ds, cr(e, 0, r), cr(e, r + 1, -1), r);
}
function En(e, t) {
  for (var n = "", r = fs(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function M1(e, t, n, r) {
  switch (e.type) {
    case y1:
      if (e.children.length) break;
    case h1:
    case ds:
      return e.return = e.return || e.value;
    case xf:
      return "";
    case Sf:
      return e.return = e.value + "{" + En(e.children, r) + "}";
    case us:
      e.value = e.props.join(",");
  }
  return $t(n = En(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function I1(e) {
  var t = fs(e);
  return function(n, r, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](n, r, o, a) || "";
    return i;
  };
}
function A1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ml = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function F1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var j1 = function(t, n, r) {
  for (var o = 0, a = 0; o = a, a = Nt(), o === 38 && a === 12 && (n[r] = 1), !lr(a); )
    it();
  return Cr(t, tt);
}, k1 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (lr(o)) {
      case 0:
        o === 38 && Nt() === 12 && (n[r] = 1), t[r] += j1(tt - 1, n, r);
        break;
      case 2:
        t[r] += ao(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Nt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Uo(o);
    }
  while (o = it());
  return t;
}, L1 = function(t, n) {
  return Of(k1($f(t), n));
}, gl = /* @__PURE__ */ new WeakMap(), D1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !gl.get(r)) && !o) {
      gl.set(t, !0);
      for (var a = [], i = L1(n, a), s = r.props, c = 0, l = 0; c < i.length; c++)
        for (var u = 0; u < s.length; u++, l++)
          t.props[l] = a[c] ? i[c].replace(/&\f/g, s[u]) : s[u] + " " + i[c];
    }
  }
}, B1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Pf(e, t) {
  switch (x1(e, t)) {
    // color-adjust
    case 5103:
      return ce + "print-" + e + e;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ce + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ce + e + bo + e + Xe + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ce + e + Xe + e + e;
    // order
    case 6165:
      return ce + e + Xe + "flex-" + e + e;
    // align-items
    case 5187:
      return ce + e + le(e, /(\w+).+(:[^]+)/, ce + "box-$1$2" + Xe + "flex-$1$2") + e;
    // align-self
    case 5443:
      return ce + e + Xe + "flex-item-" + le(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return ce + e + Xe + "flex-line-pack" + le(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return ce + e + Xe + le(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return ce + e + Xe + le(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return ce + "box-" + le(e, "-grow", "") + ce + e + Xe + le(e, "grow", "positive") + e;
    // transition
    case 4554:
      return ce + le(e, /([^-])(transform)/g, "$1" + ce + "$2") + e;
    // cursor
    case 6187:
      return le(le(le(e, /(zoom-|grab)/, ce + "$1"), /(image-set)/, ce + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return le(e, /(image-set\([^]*)/, ce + "$1$`$1");
    // justify-content
    case 4968:
      return le(le(e, /(.+:)(flex-)?(.*)/, ce + "box-pack:$3" + Xe + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ce + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return le(e, /(.+)-inline(.+)/, ce + "$1$2") + e;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6) switch (We(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (We(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return le(e, /(.+:)(.+)-([^]+)/, "$1" + ce + "$2-$3$1" + bo + (We(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Pi(e, "stretch") ? Pf(le(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (We(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (We(e, $t(e) - 3 - (~Pi(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return le(e, ":", ":" + ce) + e;
        // (inline-)?fl(e)x
        case 101:
          return le(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ce + (We(e, 14) === 45 ? "inline-" : "") + "box$3$1" + ce + "$2$3$1" + Xe + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (We(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return ce + e + Xe + le(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return ce + e + Xe + le(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return ce + e + Xe + le(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return ce + e + Xe + e + e;
  }
  return e;
}
var V1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ds:
      t.return = Pf(t.value, t.length);
      break;
    case Sf:
      return En([Gn(t, {
        value: le(t.value, "@", "@" + ce)
      })], o);
    case us:
      if (t.length) return E1(t.props, function(a) {
        switch (S1(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return En([Gn(t, {
              props: [le(a, /:(read-\w+)/, ":" + bo + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return En([Gn(t, {
              props: [le(a, /:(plac\w+)/, ":" + ce + "input-$1")]
            }), Gn(t, {
              props: [le(a, /:(plac\w+)/, ":" + bo + "$1")]
            }), Gn(t, {
              props: [le(a, /:(plac\w+)/, Xe + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, H1 = [V1], Nf = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(h) {
      var m = h.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || H1, a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(h) {
      for (var m = h.getAttribute("data-emotion").split(" "), C = 1; C < m.length; C++)
        a[m[C]] = !0;
      s.push(h);
    }
  );
  var c, l = [D1, B1];
  {
    var u, d = [M1, A1(function(h) {
      u.insert(h);
    })], f = I1(l.concat(o, d)), p = function(m) {
      return En(R1(m), f);
    };
    c = function(m, C, y, x) {
      u = y, p(m ? m + "{" + C.styles + "}" : C.styles), x && (v.inserted[C.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new p1({
      key: n,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: c
  };
  return v.sheet.hydrate(s), v;
};
function z1(e) {
  for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var W1 = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, G1 = /[A-Z]|^ms/g, q1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Tf = function(t) {
  return t.charCodeAt(1) === 45;
}, vl = function(t) {
  return t != null && typeof t != "boolean";
}, Oa = /* @__PURE__ */ F1(function(e) {
  return Tf(e) ? e : e.replace(G1, "-$&").toLowerCase();
}), pl = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(q1, function(r, o, a) {
          return Ot = {
            name: o,
            styles: a,
            next: Ot
          }, o;
        });
  }
  return W1[t] !== 1 && !Tf(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function ur(e, t, n) {
  if (n == null)
    return "";
  var r = n;
  if (r.__emotion_styles !== void 0)
    return r;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      var o = n;
      if (o.anim === 1)
        return Ot = {
          name: o.name,
          styles: o.styles,
          next: Ot
        }, o.name;
      var a = n;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Ot = {
              name: i.name,
              styles: i.styles,
              next: Ot
            }, i = i.next;
        var s = a.styles + ";";
        return s;
      }
      return U1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = Ot, l = n(e);
        return Ot = c, ur(e, t, l);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var d = t[u];
  return d !== void 0 ? d : u;
}
function U1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += ur(e, t, n[o]) + ";";
  else
    for (var a in n) {
      var i = n[a];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : vl(s) && (r += Oa(a) + ":" + pl(a, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++)
          vl(i[c]) && (r += Oa(a) + ":" + pl(a, i[c]) + ";");
      else {
        var l = ur(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            r += Oa(a) + ":" + l + ";";
            break;
          }
          default:
            r += a + "{" + l + "}";
        }
      }
    }
  return r;
}
var hl = /label:\s*([^\s;{]+)\s*(;|$)/g, Ot;
function Ht(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Ot = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, o += ur(n, t, a);
  else {
    var i = a;
    o += i[0];
  }
  for (var s = 1; s < e.length; s++)
    if (o += ur(n, t, e[s]), r) {
      var c = a;
      o += c[s];
    }
  hl.lastIndex = 0;
  for (var l = "", u; (u = hl.exec(o)) !== null; )
    l += "-" + u[1];
  var d = z1(o) + l;
  return {
    name: d,
    styles: o,
    next: Ot
  };
}
var X1 = !0;
function Ko(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ms = function(t, n, r) {
  var o = t.key + "-" + n.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (r === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  X1 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, gs = function(t, n, r) {
  ms(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function yl(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function bl(e, t, n) {
  var r = [], o = Ko(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var vs = function(t) {
  var n = Nf(t);
  n.sheet.speedy = function(s) {
    this.isSpeedy = s;
  }, n.compat = !0;
  var r = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var d = Ht(l, n.registered, void 0);
    return gs(n, d, !1), n.key + "-" + d.name;
  }, o = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var d = Ht(l, n.registered), f = "animation-" + d.name;
    return yl(n, {
      name: d.name,
      styles: "@keyframes " + f + "{" + d.styles + "}"
    }), f;
  }, a = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var d = Ht(l, n.registered);
    yl(n, d);
  }, i = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    return bl(n.registered, r, Y1(l));
  };
  return {
    css: r,
    cx: i,
    injectGlobal: a,
    keyframes: o,
    hydrate: function(c) {
      c.forEach(function(l) {
        n.inserted[l] = !0;
      });
    },
    flush: function() {
      n.registered = {}, n.inserted = {}, n.sheet.flush();
    },
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: Ko.bind(null, n.registered),
    merge: bl.bind(null, n.registered, r)
  };
}, Y1 = function e(t) {
  for (var n = "", r = 0; r < t.length; r++) {
    var o = t[r];
    if (o != null) {
      var a = void 0;
      switch (typeof o) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            a = e(o);
          else {
            a = "";
            for (var i in o)
              o[i] && i && (a && (a += " "), a += i);
          }
          break;
        }
        default:
          a = o;
      }
      a && (n && (n += " "), n += a);
    }
  }
  return n;
}, Mt = vs({
  key: "css"
});
Mt.flush;
Mt.hydrate;
Mt.cx;
Mt.merge;
Mt.getRegisteredStyles;
Mt.injectGlobal;
Mt.keyframes;
Mt.css;
Mt.sheet;
var K1 = Mt.cache, Z1 = /* @__PURE__ */ (function() {
  function e() {
    De(this, e), R(this, "_cacheList", [K1]);
  }
  return Be(e, [{
    key: "add",
    value: function(n) {
      var r = this.getCache(n.key);
      return r || (this._cacheList.push(n), n);
    }
  }, {
    key: "delete",
    value: function(n) {
      this._cacheList = this._cacheList.filter(function(r) {
        return r.key !== n.key;
      });
    }
  }, {
    key: "hasCache",
    value: function(n) {
      return this._cacheList.some(function(r) {
        return r.key === n.key;
      });
    }
  }, {
    key: "getCache",
    value: function(n) {
      return this._cacheList.find(function(r) {
        return r.key === n;
      });
    }
  }, {
    key: "getCacheList",
    value: function() {
      return this._cacheList;
    }
  }]), e;
})(), Cl = typeof document < "u", Rf = function(t, n) {
  return "".concat(t, "-").concat(n);
}, Q1 = function(t, n, r, o) {
  var a = o.hashPriority;
  ms(t, n, r);
  var i = ".".concat(Rf(t.key, n.name)), s = a === "low" ? ":where(".concat(i, ")") : i;
  if (t.inserted[n.name] === void 0) {
    var c = "", l = n;
    do {
      var u = t.insert(n === l ? s : "", l, t.sheet, !0);
      !Cl && u !== void 0 && (c += u), l = l.next;
    } while (l !== void 0);
    if (!Cl && c.length !== 0)
      return c;
  }
}, ps = function(t) {
  return X(t) === "object" && "styles" in t && "name" in t && "toString" in t;
}, J1 = function e(t) {
  for (var n = "", r = 0; r < t.length; r++) {
    var o = t[r];
    if (o !== null) {
      var a = void 0;
      switch (X(o)) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(o))
            a = e(o);
          else {
            a = "";
            for (var i in o)
              o[i] && i && (a && (a += " "), a += i);
          }
          break;
        }
        default:
          a = o;
      }
      a && (n && (n += " "), n += a);
    }
  }
  return n;
}, ex = function(t, n, r) {
  var o = [], a = Ko(t, o, r);
  return o.length < 2 ? r : a + n(o);
}, tx = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = Ht(o, t.registered, void 0);
    return Q1(t, i, !1, n), Rf(t.key, i.name);
  };
}, nx = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o.map(function(s) {
      return ps(s) ? n(s) : s;
    });
    return ex(t.registered, n, J1(i));
  };
}, _f = function(t, n) {
  var r = tx(t, {
    hashPriority: n.hashPriority || "high",
    label: n.label
  }), o = nx(t, r);
  return {
    css: r,
    cx: o
  };
}, xr = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return (
    // @ts-ignore
    Ht(n)
  );
}, rx = "acss", ox = function(t) {
  return /* @__PURE__ */ Zt(t);
}, qr = { exports: {} }, me = {};
var xl;
function ax() {
  if (xl) return me;
  xl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function x(b) {
    if (typeof b == "object" && b !== null) {
      var w = b.$$typeof;
      switch (w) {
        case t:
          switch (b = b.type, b) {
            case c:
            case l:
            case r:
            case a:
            case o:
            case d:
              return b;
            default:
              switch (b = b && b.$$typeof, b) {
                case s:
                case u:
                case v:
                case p:
                case i:
                  return b;
                default:
                  return w;
              }
          }
        case n:
          return w;
      }
    }
  }
  function S(b) {
    return x(b) === l;
  }
  return me.AsyncMode = c, me.ConcurrentMode = l, me.ContextConsumer = s, me.ContextProvider = i, me.Element = t, me.ForwardRef = u, me.Fragment = r, me.Lazy = v, me.Memo = p, me.Portal = n, me.Profiler = a, me.StrictMode = o, me.Suspense = d, me.isAsyncMode = function(b) {
    return S(b) || x(b) === c;
  }, me.isConcurrentMode = S, me.isContextConsumer = function(b) {
    return x(b) === s;
  }, me.isContextProvider = function(b) {
    return x(b) === i;
  }, me.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, me.isForwardRef = function(b) {
    return x(b) === u;
  }, me.isFragment = function(b) {
    return x(b) === r;
  }, me.isLazy = function(b) {
    return x(b) === v;
  }, me.isMemo = function(b) {
    return x(b) === p;
  }, me.isPortal = function(b) {
    return x(b) === n;
  }, me.isProfiler = function(b) {
    return x(b) === a;
  }, me.isStrictMode = function(b) {
    return x(b) === o;
  }, me.isSuspense = function(b) {
    return x(b) === d;
  }, me.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === l || b === a || b === o || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === p || b.$$typeof === i || b.$$typeof === s || b.$$typeof === u || b.$$typeof === m || b.$$typeof === C || b.$$typeof === y || b.$$typeof === h);
  }, me.typeOf = x, me;
}
var ge = {};
var Sl;
function ix() {
  return Sl || (Sl = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === l || V === a || V === o || V === d || V === f || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === p || V.$$typeof === i || V.$$typeof === s || V.$$typeof === u || V.$$typeof === m || V.$$typeof === C || V.$$typeof === y || V.$$typeof === h);
    }
    function S(V) {
      if (typeof V == "object" && V !== null) {
        var pe = V.$$typeof;
        switch (pe) {
          case t:
            var B = V.type;
            switch (B) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return B;
              default:
                var te = B && B.$$typeof;
                switch (te) {
                  case s:
                  case u:
                  case v:
                  case p:
                  case i:
                    return te;
                  default:
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var b = c, w = l, E = s, $ = i, O = t, P = u, _ = r, I = v, A = p, M = n, j = a, k = o, L = d, G = !1;
    function H(V) {
      return G || (G = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), J(V) || S(V) === c;
    }
    function J(V) {
      return S(V) === l;
    }
    function ee(V) {
      return S(V) === s;
    }
    function Q(V) {
      return S(V) === i;
    }
    function Z(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function Y(V) {
      return S(V) === u;
    }
    function q(V) {
      return S(V) === r;
    }
    function U(V) {
      return S(V) === v;
    }
    function ae(V) {
      return S(V) === p;
    }
    function Pe(V) {
      return S(V) === n;
    }
    function Ce(V) {
      return S(V) === a;
    }
    function Se(V) {
      return S(V) === o;
    }
    function Ee(V) {
      return S(V) === d;
    }
    ge.AsyncMode = b, ge.ConcurrentMode = w, ge.ContextConsumer = E, ge.ContextProvider = $, ge.Element = O, ge.ForwardRef = P, ge.Fragment = _, ge.Lazy = I, ge.Memo = A, ge.Portal = M, ge.Profiler = j, ge.StrictMode = k, ge.Suspense = L, ge.isAsyncMode = H, ge.isConcurrentMode = J, ge.isContextConsumer = ee, ge.isContextProvider = Q, ge.isElement = Z, ge.isForwardRef = Y, ge.isFragment = q, ge.isLazy = U, ge.isMemo = ae, ge.isPortal = Pe, ge.isProfiler = Ce, ge.isStrictMode = Se, ge.isSuspense = Ee, ge.isValidElementType = x, ge.typeOf = S;
  })()), ge;
}
var El;
function sx() {
  return El || (El = 1, process.env.NODE_ENV === "production" ? qr.exports = ax() : qr.exports = ix()), qr.exports;
}
var Pa, wl;
function cx() {
  if (wl) return Pa;
  wl = 1;
  var e = sx(), t = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, n = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, r = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, o = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, a = {};
  a[e.ForwardRef] = r, a[e.Memo] = o;
  function i(v) {
    return e.isMemo(v) ? o : a[v.$$typeof] || t;
  }
  var s = Object.defineProperty, c = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols, u = Object.getOwnPropertyDescriptor, d = Object.getPrototypeOf, f = Object.prototype;
  function p(v, h, m) {
    if (typeof h != "string") {
      if (f) {
        var C = d(h);
        C && C !== f && p(v, C, m);
      }
      var y = c(h);
      l && (y = y.concat(l(h)));
      for (var x = i(v), S = i(h), b = 0; b < y.length; ++b) {
        var w = y[b];
        if (!n[w] && !(m && m[w]) && !(S && S[w]) && !(x && x[w])) {
          var E = u(h, w);
          try {
            s(v, w, E);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return Pa = p, Pa;
}
cx();
var lx = function(t) {
  return t();
}, Mf = g.useInsertionEffect ? g.useInsertionEffect : !1, ux = Mf || lx, $l = Mf || g.useLayoutEffect, If = /* @__PURE__ */ g.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Nf({
    key: "css"
  }) : null
);
If.Provider;
var Af = function(t) {
  return /* @__PURE__ */ In(function(n, r) {
    var o = ie(If);
    return t(n, o, r);
  });
}, dr = /* @__PURE__ */ g.createContext({}), dx = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return ue({}, t, n);
}, fx = /* @__PURE__ */ ml(function(e) {
  return ml(function(t) {
    return dx(e, t);
  });
}), mx = function(t) {
  var n = g.useContext(dr);
  return t.theme !== n && (n = fx(n)(t.theme)), /* @__PURE__ */ g.createElement(dr.Provider, {
    value: n
  }, t.children);
}, hs = {}.hasOwnProperty, Ti = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gx = function(t, n) {
  var r = {};
  for (var o in n)
    hs.call(n, o) && (r[o] = n[o]);
  return r[Ti] = t, r;
}, vx = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ms(n, r, o), ux(function() {
    return gs(n, r, o);
  }), null;
}, px = /* @__PURE__ */ Af(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Ti], a = [r], i = "";
  typeof e.className == "string" ? i = Ko(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = Ht(a, void 0, g.useContext(dr));
  i += t.key + "-" + s.name;
  var c = {};
  for (var l in e)
    hs.call(e, l) && l !== "css" && l !== Ti && (c[l] = e[l]);
  return c.className = i, n && (c.ref = n), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(vx, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ g.createElement(o, c));
}), hx = px, Ol = function(t, n) {
  var r = arguments;
  if (n == null || !hs.call(n, "css"))
    return g.createElement.apply(void 0, r);
  var o = r.length, a = new Array(o);
  a[0] = hx, a[1] = gx(t, n);
  for (var i = 2; i < o; i++)
    a[i] = r[i];
  return g.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Ol || (Ol = {}));
var yx = /* @__PURE__ */ Af(function(e, t) {
  var n = e.styles, r = Ht([n], void 0, g.useContext(dr)), o = g.useRef();
  return $l(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), c !== null && (s = !0, c.setAttribute("data-emotion", a), i.hydrate([c])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), $l(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && gs(t, r.next, !0), i.tags.length) {
      var c = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = c, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), bx = function(t) {
  return function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return /* @__PURE__ */ fr(function(a) {
      var i = t();
      return /* @__PURE__ */ F(yx, {
        styles: Ht(r, void 0, T(T({}, a), {}, {
          theme: i
        }))
      });
    });
  };
}, Cx = function(t) {
  return function(n) {
    var r = t(n);
    return function(o) {
      var a = r(o), i = a.styles;
      return i;
    };
  };
}, xx = ["children", "prefix", "speedy", "getStyleManager", "container", "nonce", "insertionPoint", "stylisPlugins", "linters"], Sx = function(t) {
  return /* @__PURE__ */ fr(function(n) {
    var r = n.children, o = n.prefix, a = n.speedy, i = n.getStyleManager, s = n.container, c = n.nonce, l = n.insertionPoint, u = n.stylisPlugins, d = n.linters, f = Ge(n, xx), p = ie(t), v = o ?? p.sheet.key, h = s ?? p.sheet.container, m = a ?? p.sheet.isSpeedy, C = je(function() {
      var x = process.env.NODE_ENV === "development", S = vs({
        speedy: m ?? x,
        key: v,
        container: h,
        nonce: c,
        insertionPoint: l,
        stylisPlugins: u
      });
      if (typeof global < "u") {
        var b = global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__;
        b && (S.cache = b.add(S.cache));
      }
      return S;
    }, [v, m, h, c, l, u]);
    Ke(function() {
      i?.(C);
    }, [C]);
    var y = /* @__PURE__ */ F(t.Provider, {
      value: C,
      children: r
    });
    return Object.keys(f).length || h ? (
      // @ts-ignore
      /* @__PURE__ */ F(jm, T(T({
        linters: d,
        container: h
      }, f), {}, {
        children: y
      }))
    ) : y;
  });
}, Ex = function(t) {
  var n = t.css, r = t.token;
  return {
    buttonDefaultHover: n({
      backgroundColor: r.colorBgContainer,
      border: "1px solid ".concat(r.colorBorder),
      cursor: "pointer",
      ":hover": {
        color: r.colorPrimaryHover,
        borderColor: r.colorPrimaryHover
      },
      ":active": {
        color: r.colorPrimaryActive,
        borderColor: r.colorPrimaryActive
      }
    })
  };
}, wx = function(t) {
  return Object.fromEntries(Object.entries(t).map(function(n) {
    var r = D(n, 2), o = r[0], a = r[1];
    return [o, a.styles];
  }));
}, ys = function() {
  var t = Oi.useToken(), n = t.token;
  return n;
}, yn = function(t) {
  return typeof window < "u" ? matchMedia && matchMedia("(prefers-color-scheme: ".concat(t, ")")) : {
    matches: !1
  };
}, Na, Ff = /* @__PURE__ */ Zt({
  appearance: "light",
  setAppearance: function() {
  },
  isDarkMode: !1,
  themeMode: "light",
  setThemeMode: function() {
  },
  browserPrefers: (Na = yn("dark")) !== null && Na !== void 0 && Na.matches ? "dark" : "light"
}), Zo = function() {
  return ie(Ff);
}, $x = function() {
  var t = ys(), n = Zo(), r = n.appearance, o = n.isDarkMode;
  return je(function() {
    return wx(Ex({
      token: t,
      css: xr
    }));
  }, [t, r, o]);
}, jf = function() {
  var t = ys(), n = $x();
  return je(function() {
    return T(T({}, t), {}, {
      stylish: n
    });
  }, [t, n]);
}, Ox = function(t) {
  return T(T({}, t), {}, {
    mobile: t.xs,
    tablet: t.md,
    laptop: t.lg,
    desktop: t.xxl
  });
}, Px = function() {
  var t = ys(), n = {
    xs: "@media (max-width: ".concat(t.screenXSMax, "px)"),
    sm: "@media (max-width: ".concat(t.screenSMMax, "px)"),
    md: "@media (max-width: ".concat(t.screenMDMax, "px)"),
    lg: "@media (max-width: ".concat(t.screenLGMax, "px)"),
    xl: "@media (max-width: ".concat(t.screenXLMax, "px)"),
    xxl: "@media (min-width: ".concat(t.screenXXLMin, "px)")
  };
  return je(function() {
    return Ox(n);
  }, [t]);
}, Nx = function(t, n) {
  return Object.entries(t).map(function(r) {
    var o = D(r, 2), a = o[0], i = o[1], s = i;
    return ps(i) || (s = xr(i)), n[a] ? "".concat(n[a], " {").concat(s.styles, "}") : "";
  }).join("");
}, Tx = ["stylish", "appearance", "isDarkMode", "prefixCls", "iconPrefixCls"], Rx = ["prefixCls", "iconPrefixCls"], _x = function(t) {
  var n = t.hashPriority, r = t.useTheme, o = t.EmotionContext;
  return function(a, i) {
    var s = i?.__BABEL_FILE_NAME__, c = !!s;
    return function(l) {
      var u = r(), d = ie(o), f = d.cache, p = _f(f, {
        hashPriority: i?.hashPriority || n,
        label: i?.label
      }), v = p.cx, h = p.css, m = Px(), C = je(function() {
        var y;
        if (a instanceof Function) {
          var x = u.stylish, S = u.appearance, b = u.isDarkMode, w = u.prefixCls, E = u.iconPrefixCls, $ = Ge(u, Tx), O = function(_) {
            return Nx(_, m);
          };
          Object.assign(O, m), y = a({
            token: $,
            stylish: x,
            appearance: S,
            isDarkMode: b,
            prefixCls: w,
            iconPrefixCls: E,
            // 工具函数们
            cx: v,
            css: xr,
            responsive: O
          }, l);
        } else
          y = a;
        return X(y) === "object" && (ps(y) ? y = h(y) : y = Object.fromEntries(Object.entries(y).map(function(P) {
          var _ = D(P, 2), I = _[0], A = _[1], M = c ? "".concat(s, "-").concat(I) : void 0;
          return X(A) === "object" ? c ? [I, h(A, "label:".concat(M))] : [I, h(A)] : [I, A];
        }))), y;
      }, [l, u]);
      return je(function() {
        var y = u.prefixCls, x = u.iconPrefixCls, S = Ge(u, Rx);
        return {
          styles: C,
          cx: v,
          theme: S,
          prefixCls: y,
          iconPrefixCls: x
        };
      }, [C, u]);
    };
  };
}, Pl = function(t) {
  if (t.ThemeProvider) return t.ThemeProvider;
  var n = t.ThemeContext;
  return function(r) {
    return /* @__PURE__ */ F(n.Provider, {
      value: r.theme,
      children: r.children
    });
  };
}, Mx = mx, kf = dr, Lf = /* @__PURE__ */ fr(function(e) {
  var t = e.children, n = e.theme, r = e.prefixCls, o = e.getStaticInstance, a = e.staticInstanceConfig, i = Zo(), s = i.appearance, c = i.isDarkMode, l = df.useMessage(a?.message), u = D(l, 2), d = u[0], f = u[1], p = gf.useNotification(a?.notification), v = D(p, 2), h = v[0], m = v[1], C = ct.useModal(), y = D(C, 2), x = y[0], S = y[1];
  Ke(function() {
    o?.({
      message: d,
      modal: x,
      notification: h
    });
  }, []);
  var b = je(function() {
    var w = c ? Oi.darkAlgorithm : Oi.defaultAlgorithm, E = n;
    if (typeof n == "function" && (E = n(s)), !E)
      return {
        algorithm: w
      };
    var $ = E.algorithm ? E.algorithm instanceof Array ? E.algorithm : [E.algorithm] : [];
    return T(T({}, E), {}, {
      algorithm: E.algorithm ? [w].concat(z($)) : w
    });
  }, [n, c]);
  return /* @__PURE__ */ _e(nt, {
    prefixCls: r,
    theme: b,
    children: [f, m, S, t]
  });
});
Lf.displayName = "AntdProvider";
function Ix(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, s = [], c = !0, l = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(c = (r = a.call(n)).done) && (s.push(r.value), s.length !== t); c = !0) ;
    } catch (u) {
      l = !0, o = u;
    } finally {
      try {
        if (!c && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (l) throw o;
      }
    }
    return s;
  }
}
function Ax(e, t) {
  return Fx(e) || Ix(e, t) || jx(e, t) || kx();
}
function Fx(e) {
  if (Array.isArray(e)) return e;
}
function jx(e, t) {
  if (e) {
    if (typeof e == "string") return Nl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Nl(e, t);
  }
}
function Nl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function kx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Tl(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = N.useState(function() {
    return o !== void 0 ? o : r !== void 0 ? typeof r == "function" ? r() : r : e;
  }), c = Ax(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l;
  i && (d = i(d));
  function f(p) {
    u(p), d !== p && a && a(p, d);
  }
  return [d, f];
}
var Ta = function(t) {
  typeof Ps == "function" ? Ps(t) : t();
}, Lt, Lx = function(t) {
  var n = t.themeMode, r = t.setAppearance, o = t.setBrowserPrefers, a = function() {
    Ta(function() {
      yn("dark").matches ? r("dark") : r("light");
    });
  }, i = function() {
    Ta(function() {
      yn("dark").matches ? o("dark") : o("light");
    });
  };
  return Ra(function() {
    if (n !== "auto") {
      Ta(function() {
        r(n);
      });
      return;
    }
    return setTimeout(a, 1), Lt || (Lt = yn("dark")), Lt.addEventListener("change", a), function() {
      Lt.removeEventListener("change", a);
    };
  }, [n]), Ra(function() {
    return Lt || (Lt = yn("dark")), Lt.addEventListener("change", i), function() {
      Lt.removeEventListener("change", i);
    };
  }, []), null;
}, Df = /* @__PURE__ */ fr(function(e) {
  var t, n = e.children, r = e.appearance, o = e.defaultAppearance, a = e.onAppearanceChange, i = e.themeMode, s = e.defaultThemeMode, c = e.onThemeModeChange, l = e.useTheme, u = l(), d = u.appearance, f = u.themeMode, p = Tl("light", {
    value: i,
    defaultValue: s ?? f,
    onChange: function(P) {
      return c?.(P);
    }
  }), v = D(p, 2), h = v[0], m = v[1], C = Tl("light", {
    value: r,
    defaultValue: o ?? d,
    onChange: function(P) {
      return a?.(P);
    }
  }), y = D(C, 2), x = y[0], S = y[1], b = Qt((t = yn("dark")) !== null && t !== void 0 && t.matches ? "dark" : "light"), w = D(b, 2), E = w[0], $ = w[1];
  return /* @__PURE__ */ _e(Ff.Provider, {
    value: {
      themeMode: h,
      setThemeMode: m,
      appearance: x,
      setAppearance: S,
      isDarkMode: x === "dark",
      browserPrefers: E
    },
    children: [
      // Wait until after client-side hydration to show
      typeof window < "u" && /* @__PURE__ */ F(Lx, {
        themeMode: h,
        setAppearance: S,
        setBrowserPrefers: $
      }),
      n
    ]
  });
});
Df.displayName = "ThemeSwitcher";
var Dx = ["stylish"], Bx = function(t) {
  var n = t.children, r = t.customToken, o = t.defaultCustomToken, a = t.customStylish, i = t.prefixCls, s = t.StyledThemeProvider, c = Zo(), l = c.appearance, u = c.isDarkMode, d = jf(), f = d.stylish, p = Ge(d, Dx), v = je(function() {
    return o ? o instanceof Function ? o({
      token: p,
      appearance: l,
      isDarkMode: u
    }) : o : {};
  }, [o, p, l]), h = je(function() {
    return r instanceof Function ? T(T({}, v), r({
      token: p,
      appearance: l,
      isDarkMode: u
    })) : T(T({}, v), r);
  }, [v, r, p, l]), m = je(function() {
    return a ? a({
      token: T(T({}, p), h),
      stylish: f,
      appearance: l,
      isDarkMode: u,
      css: xr
    }) : {};
  }, [a, p, h, f, l]), C = je(function() {
    return T(T({}, m), f);
  }, [m, f]), y = T(T(T(T({}, p), h), {}, {
    stylish: C
  }, c), {}, {
    prefixCls: i
  });
  return /* @__PURE__ */ F(s, {
    theme: y,
    children: n
  });
}, Vx = function(t) {
  var n = t.styledConfig ? Pl(t.styledConfig) : void 0, r = t.StyleEngineContext;
  return /* @__PURE__ */ fr(function(o) {
    var a = o.children, i = o.customToken, s = o.customStylish, c = o.theme, l = o.getStaticInstance, u = o.prefixCls, d = o.staticInstanceConfig, f = o.appearance, p = o.defaultAppearance, v = o.onAppearanceChange, h = o.themeMode, m = o.defaultThemeMode, C = o.onThemeModeChange, y = o.styled, x = ie(r), S = x.prefixCls, b = x.StyledThemeContext, w = x.CustomThemeContext, E = ie(w), $ = y ? Pl(y) : n || Mx, O = u || S;
    return /* @__PURE__ */ F(r.Provider, {
      value: {
        prefixCls: O,
        StyledThemeContext: y?.ThemeContext || b || kf,
        CustomThemeContext: w
      },
      children: /* @__PURE__ */ F(Df, {
        themeMode: h,
        defaultThemeMode: m,
        onThemeModeChange: C,
        defaultAppearance: p,
        appearance: f,
        onAppearanceChange: v,
        useTheme: t.useTheme,
        children: /* @__PURE__ */ F(Lf, {
          prefixCls: O,
          staticInstanceConfig: d,
          theme: c,
          getStaticInstance: l,
          children: /* @__PURE__ */ F(Bx, {
            prefixCls: O,
            customToken: i,
            defaultCustomToken: E,
            customStylish: s,
            StyledThemeProvider: $,
            children: a
          })
        })
      })
    });
  });
}, Hx = function(t) {
  return function() {
    var n = t.StyleEngineContext, r = ie(n), o = r.StyledThemeContext, a = r.CustomThemeContext, i = r.prefixCls, s = jf(), c = Zo(), l = ie(a), u = ie(o ?? kf) || {}, d = ie(nt.ConfigContext), f = d.iconPrefixCls, p = d.getPrefixCls, v = p(), h = i && i !== "ant" ? i : v, m = je(function() {
      return T(T(T(T({}, s), c), l), {}, {
        prefixCls: h,
        iconPrefixCls: f
      });
    }, [s, c, l, h, f]);
    return !u || Object.keys(u).length === 0 ? m : T(T({}, u), {}, {
      prefixCls: h,
      iconPrefixCls: f
    });
  };
}, Bf = new Z1();
typeof global < "u" && (global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__ = Bf);
var zx = function(t) {
  var n, r, o, a = T(T({}, t), {}, {
    key: (n = t.key) !== null && n !== void 0 ? n : "zcss",
    // 新建的 instance key 如果不传，则设为 zcss- 使得该 key 和 acss 不一样
    speedy: (r = t.speedy) !== null && r !== void 0 ? r : !1
  }), i = vs({
    key: a.key,
    speedy: a.speedy,
    container: a.container
  }), s = ox(i), c = Sx(s);
  i.cache = Bf.add(i.cache);
  var l = /* @__PURE__ */ Zt(a.customToken ? a.customToken : {}), u = (o = a.styled) === null || o === void 0 ? void 0 : o.ThemeContext, d = /* @__PURE__ */ Zt({
    CustomThemeContext: l,
    StyledThemeContext: u,
    prefixCls: a?.prefixCls,
    iconPrefixCls: a?.iconPrefixCls
  }), f = Hx({
    StyleEngineContext: d
  }), p = _x({
    hashPriority: a.hashPriority,
    useTheme: f,
    EmotionContext: s
  }), v = bx(f), h = Cx(p), m = Vx({
    styledConfig: a.styled,
    StyleEngineContext: d,
    useTheme: f
  });
  m.displayName = "AntdStyleThemeProvider";
  var C = _f(i.cache, {
    hashPriority: a.hashPriority
  }), y = C.cx, x = i.injectGlobal, S = i.keyframes;
  return {
    // ******************** //
    // **** 样式生成相关 **** //
    // ******************** //
    createStyles: p,
    createGlobalStyle: v,
    createStylish: h,
    // ******************** //
    // **** 基础样式方法 **** //
    // ******************** //
    css: xr,
    cx: y,
    keyframes: S,
    injectGlobal: x,
    //******************** //
    //****  样式表管理  **** //
    //******************** //
    styleManager: i,
    // ******************** //
    // ***** 主题相关 ***** //
    // ******************** //
    useTheme: f,
    StyleProvider: c,
    ThemeProvider: m
  };
}, Wx = zx({
  key: rx,
  speedy: !1
}), Gx = Wx.createStyles;
const qx = Gx(() => ({
  content: {
    padding: "32px !important",
    borderRadius: "20px !important"
  }
})), Ux = In(
  ({
    isOpen: e,
    closable: t = !0,
    buttons: n,
    title: r,
    subtitle: o,
    description: a,
    closeOnOverlayClick: i = !0,
    closeOnEscape: s = !0,
    className: c,
    maxWidth: l,
    children: u
  }, d) => {
    const { styles: f } = qx(), p = {
      content: f.content
    };
    return /* @__PURE__ */ F(
      ct,
      {
        open: e || !1,
        title: /* @__PURE__ */ F("span", { className: "luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]", children: r }),
        closable: t,
        maskClosable: i,
        footer: null,
        keyboard: s,
        centered: !0,
        width: "100%",
        className: K("luca-modal", c),
        style: l ? {
          maxWidth: typeof l == "number" ? `${l}px` : l,
          width: "100%"
        } : void 0,
        modalRender: (v) => /* @__PURE__ */ F("div", { ref: d, className: "luca-modal-wrapper", children: v }),
        classNames: p,
        children: /* @__PURE__ */ _e("div", { className: "luca-flex luca-flex-col luca-mt-6", children: [
          o && /* @__PURE__ */ F("p", { className: "luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0", children: o }),
          a && /* @__PURE__ */ F("p", { className: "luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0 luca-mb-6", children: a }),
          u,
          n && /* @__PURE__ */ F("div", { className: "luca-flex luca-justify-end luca-gap-2", children: n.map((v) => /* @__PURE__ */ F(hf, { variant: v.variant, onClick: v.onClick, children: v.text })) })
        ] })
      }
    );
  }
);
Ux.displayName = "Modal";
var Xx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "arrow-left", theme: "outlined" }, Yx = function(t, n) {
  return /* @__PURE__ */ g.createElement(xt, ue({}, t, {
    ref: n,
    icon: Xx
  }));
}, Vf = /* @__PURE__ */ g.forwardRef(Yx);
process.env.NODE_ENV !== "production" && (Vf.displayName = "ArrowLeftOutlined");
const Kx = ({
  setSearchInput: e,
  searchInput: t,
  personalStyles: n,
  className: r,
  inputClassName: o
}) => {
  const a = (l) => {
    e?.(l.target.value);
  }, i = K(
    "luca-flex luca-w-full luca-items-center luca-justify-start",
    n === "reading" && "luca-h-[50px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    n === "examsGenerator" && "luca-h-10 luca-gap-2 luca-rounded-lg luca-border luca-border-[#e5e7eb] luca-bg-[#f9fafb] luca-px-4 luca-py-2",
    !n && "luca-min-h-[40px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    r
  ), s = K(
    "luca-w-full luca-border-none luca-bg-transparent luca-outline-none",
    n === "examsGenerator" ? "luca-flex-1 luca-text-sm luca-text-[#111827] placeholder:luca-text-[#9ca3af]" : "luca-pl-2.5 luca-text-base",
    o
  ), c = K(
    n === "reading" && "luca-h-[18px] luca-w-[18px]",
    n === "examsGenerator" && "luca-h-4 luca-w-4 luca-flex-shrink-0 luca-opacity-50",
    !n && "luca-h-5 luca-w-5"
  );
  return /* @__PURE__ */ _e("div", { className: i, children: [
    /* @__PURE__ */ F(
      "input",
      {
        type: "text",
        name: "searchbar",
        placeholder: n === "examsGenerator" ? "Buscar por nombre" : "Buscar",
        onChange: a,
        value: t ?? "",
        className: s
      }
    ),
    /* @__PURE__ */ F(uf, { className: c })
  ] });
};
Kx.displayName = "SearchBar";
const bs = N.forwardRef(
  ({ className: e, icon: t, ...n }, r) => /* @__PURE__ */ F(
    "button",
    {
      ref: r,
      type: "button",
      className: K(
        "luca-flex luca-h-8 luca-w-8 luca-items-center luca-justify-center luca-rounded-lg luca-border luca-border-gray-200 luca-bg-white luca-p-1 luca-text-[#3843D0] luca-transition-colors hover:luca-border-gray-300 hover:luca-bg-gray-50",
        e
      ),
      ...n,
      children: t || /* @__PURE__ */ F(Vf, {})
    }
  )
);
bs.displayName = "BreadcrumbBackButton";
const Hf = N.forwardRef(
  ({ className: e, children: t, href: n, isCurrentPage: r = !1, icon: o, ...a }, i) => {
    const s = /* @__PURE__ */ _e("div", { className: "luca-flex luca-h-6 luca-items-center luca-gap-1 luca-px-1", children: [
      o && /* @__PURE__ */ F("span", { className: "luca-text-gray-500", children: o }),
      /* @__PURE__ */ F(
        "span",
        {
          className: K(
            "luca-text-base luca-font-normal luca-leading-5",
            r ? "luca-text-gray-500" : "luca-text-[#3843D0] hover:luca-underline"
          ),
          children: t
        }
      )
    ] });
    return /* @__PURE__ */ F(
      "li",
      {
        ref: i,
        className: K(
          "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-md",
          e
        ),
        ...a,
        children: n && !r ? /* @__PURE__ */ F("a", { href: n, className: "luca-inline-flex", children: s }) : s
      }
    );
  }
);
Hf.displayName = "BreadcrumbItem";
const Cs = N.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ F(
  "li",
  {
    ref: r,
    className: K("luca-inline-flex luca-items-center", e),
    role: "presentation",
    "aria-hidden": "true",
    ...n,
    children: /* @__PURE__ */ F("span", { className: "luca-text-sm luca-font-medium luca-leading-5 luca-text-gray-500", children: t || "/" })
  }
));
Cs.displayName = "BreadcrumbSeparator";
const Sr = N.forwardRef(
  ({ className: e, children: t, separator: n = /* @__PURE__ */ F(Cs, {}), ...r }, o) => {
    const a = N.Children.toArray(t);
    return /* @__PURE__ */ F(
      "nav",
      {
        ref: o,
        "aria-label": "Breadcrumb",
        className: K("luca-flex luca-items-center luca-gap-1", e),
        ...r,
        children: /* @__PURE__ */ F("ol", { className: "luca-flex luca-items-center luca-gap-1", children: a.map((i, s) => {
          const c = s === a.length - 1, l = N.isValidElement(i) && i.type === bs, u = !c && !l;
          return /* @__PURE__ */ _e(N.Fragment, { children: [
            i,
            u && n
          ] }, s);
        }) })
      }
    );
  }
);
Sr.displayName = "Breadcrumb";
Sr.Item = Hf;
Sr.Separator = Cs;
Sr.BackButton = bs;
const vS = Sr, Zx = N.forwardRef(
  ({
    chips: e,
    onRemove: t,
    removable: n = !0,
    className: r,
    chipClassName: o,
    ...a
  }, i) => {
    const s = (c) => {
      t && t(c);
    };
    return !e || e.length === 0 ? null : /* @__PURE__ */ F(
      "div",
      {
        ref: i,
        className: K(
          "luca-flex luca-flex-row luca-flex-wrap luca-items-start luca-gap-3 luca-w-full luca-p-0",
          r
        ),
        ...a,
        children: e.map((c) => /* @__PURE__ */ _e(
          "div",
          {
            className: K(
              "luca-flex luca-flex-row luca-items-center luca-justify-center luca-gap-2 luca-px-3 luca-py-2 luca-bg-[#EDF5FF] luca-rounded-full luca-border luca-border-[#E5E7EB] luca-max-w-full",
              o
            ),
            children: [
              /* @__PURE__ */ F(
                "span",
                {
                  className: "luca-whitespace-nowrap luca-overflow-hidden luca-text-ellipsis luca-font-normal luca-text-sm luca-text-[#111827] luca-leading-[1.5]",
                  style: { fontFamily: "Poppins-Regular, sans-serif" },
                  children: c.title
                }
              ),
              n && t && /* @__PURE__ */ F(
                "button",
                {
                  type: "button",
                  className: K(
                    "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-4 luca-h-4 luca-bg-transparent luca-border-0 luca-cursor-pointer luca-p-0 luca-flex-shrink-0 luca-text-[#6b7280] luca-text-xs luca-transition-all luca-duration-200",
                    "hover:luca-text-[#111827] active:luca-scale-90"
                  ),
                  onClick: () => s(c.id),
                  "aria-label": `Eliminar ${c.title}`,
                  children: /* @__PURE__ */ F(on, {})
                }
              )
            ]
          },
          c.id
        ))
      }
    );
  }
);
Zx.displayName = "Chips";
const xs = {
  success: {
    iconBackground: "luca-bg-success-50",
    iconColor: "luca-text-success-600",
    titleColor: "luca-text-success-600",
    descriptionColor: "luca-text-neutral-500",
    primaryActionColor: "luca-text-success-600",
    secondaryActionColor: "luca-text-neutral-900",
    closeButtonColor: "luca-text-neutral-500",
    closeButtonHoverColor: "hover:luca-text-neutral-700",
    toastBackground: "luca-bg-success-50",
    toastTextColor: "luca-text-success-800"
  },
  danger: {
    iconBackground: "luca-bg-danger-50",
    iconColor: "luca-text-danger-600",
    titleColor: "luca-text-danger-600",
    descriptionColor: "luca-text-neutral-500",
    primaryActionColor: "luca-text-danger-600",
    secondaryActionColor: "luca-text-neutral-900",
    closeButtonColor: "luca-text-neutral-500",
    closeButtonHoverColor: "hover:luca-text-neutral-700",
    toastBackground: "luca-bg-danger-50",
    toastTextColor: "luca-text-danger-800"
  },
  warning: {
    iconBackground: "luca-bg-warning-50",
    iconColor: "luca-text-warning-600",
    titleColor: "luca-text-warning-600",
    descriptionColor: "luca-text-neutral-500",
    primaryActionColor: "luca-text-warning-600",
    secondaryActionColor: "luca-text-neutral-900",
    closeButtonColor: "luca-text-neutral-500",
    closeButtonHoverColor: "hover:luca-text-neutral-700",
    toastBackground: "luca-bg-warning-50",
    toastTextColor: "luca-text-warning-800"
  },
  info: {
    iconBackground: "luca-bg-info-50",
    iconColor: "luca-text-info-600",
    titleColor: "luca-text-info-600",
    descriptionColor: "luca-text-neutral-500",
    primaryActionColor: "luca-text-info-600",
    secondaryActionColor: "luca-text-neutral-900",
    closeButtonColor: "luca-text-neutral-500",
    closeButtonHoverColor: "hover:luca-text-neutral-700",
    toastBackground: "luca-bg-info-50",
    toastTextColor: "luca-text-info-800"
  }
}, Ur = (e, t = "0 0 24 24") => ({ className: n } = {}) => /* @__PURE__ */ F(
  "svg",
  {
    viewBox: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: K("luca-h-5 luca-w-5", n),
    children: e
  }
), zf = {
  success: Ur(
    /* @__PURE__ */ _e(Ar, { children: [
      /* @__PURE__ */ F(
        "path",
        {
          d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M9.25 12.2499L11.0833 14.0833L14.75 9.91659",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] })
  ),
  danger: Ur(
    /* @__PURE__ */ _e(Ar, { children: [
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M9.75781 10.7578L14.2421 15.2421",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M14.2422 10.7578L9.75789 15.2421",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      )
    ] })
  ),
  warning: Ur(
    /* @__PURE__ */ _e(Ar, { children: [
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12.0002 4.5L20.1248 18.5H3.87549L12.0002 4.5Z",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12 10V13.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12 16.25H12.01",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      )
    ] })
  ),
  info: Ur(
    /* @__PURE__ */ _e(Ar, { children: [
      /* @__PURE__ */ F(
        "path",
        {
          d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12 10V16",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12 8H12.01",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      )
    ] })
  )
}, Wf = ({ className: e } = {}) => /* @__PURE__ */ _e(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: K("luca-h-4 luca-w-4", e),
    children: [
      /* @__PURE__ */ F(
        "path",
        {
          d: "M4 4L12 12",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12 4L4 12",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      )
    ]
  }
), Gf = "luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)]", qf = N.createContext(null), Qx = () => {
  const e = N.useContext(qf);
  if (!e)
    throw new Error(
      "Los componentes compuestos de Notification deben usarse dentro de <Notification>."
    );
  return e;
}, Jx = N.forwardRef(
  ({
    variant: e = "success",
    title: t,
    description: n,
    actions: r,
    icon: o,
    dismissible: a = !0,
    onDismiss: i,
    children: s,
    hideIcon: c = !1,
    className: l,
    closeButtonAriaLabel: u = "Cerrar notificación",
    ...d
  }, f) => {
    const p = xs[e], v = zf[e], h = !c && !!(o ?? v());
    return /* @__PURE__ */ F(qf.Provider, { value: { variant: e }, children: /* @__PURE__ */ _e(
      "div",
      {
        ref: f,
        role: "alert",
        className: K(
          "luca-relative luca-flex luca-w-full luca-items-start luca-gap-4 luca-rounded-2xl luca-bg-white luca-p-4 luca-transition-colors luca-duration-200",
          Gf,
          l
        ),
        ...d,
        children: [
          h && /* @__PURE__ */ F(
            "span",
            {
              className: K(
                "luca-flex luca-h-[34px] luca-w-[34px] luca-shrink-0 luca-items-center luca-justify-center luca-rounded-lg",
                p.iconBackground,
                p.iconColor
              ),
              "aria-hidden": !0,
              children: o ?? /* @__PURE__ */ F(v, {})
            }
          ),
          /* @__PURE__ */ _e("div", { className: "luca-flex luca-min-w-0 luca-flex-1 luca-flex-col luca-gap-4", children: [
            (t || n || s) && /* @__PURE__ */ _e(
              "div",
              {
                className: K(
                  "luca-flex luca-flex-col luca-gap-1 luca-text-sm luca-leading-6",
                  p.descriptionColor
                ),
                children: [
                  t && /* @__PURE__ */ F("p", { className: K("luca-font-medium", p.titleColor), children: t }),
                  (n ?? s) && /* @__PURE__ */ F("p", { className: "luca-text-sm luca-leading-6 luca-text-inherit", children: n ?? s })
                ]
              }
            ),
            r && /* @__PURE__ */ F("div", { className: "luca-flex luca-flex-wrap luca-gap-5 luca-text-sm luca-leading-[22px]", children: r })
          ] }),
          a && /* @__PURE__ */ F(
            "button",
            {
              type: "button",
              onClick: i,
              "aria-label": u,
              className: K(
                "luca-absolute luca-right-4 luca-top-4 luca-inline-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-full luca-transition-colors luca-duration-200",
                p.closeButtonColor,
                p.closeButtonHoverColor,
                "focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200"
              ),
              children: /* @__PURE__ */ F(Wf, {})
            }
          )
        ]
      }
    ) });
  }
);
Jx.displayName = "Notification";
const eS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ F(
  "div",
  {
    ref: n,
    className: K(
      "luca-flex luca-flex-wrap luca-gap-5 luca-text-sm luca-leading-[22px]",
      e
    ),
    ...t
  }
));
eS.displayName = "NotificationActions";
const tS = N.forwardRef(
  ({
    actionVariant: e = "primary",
    className: t,
    type: n = "button",
    ...r
  }, o) => {
    const { variant: a } = Qx(), i = xs[a], s = e === "primary" ? i.primaryActionColor : i.secondaryActionColor;
    return /* @__PURE__ */ F(
      "button",
      {
        ref: o,
        type: n,
        className: K(
          "luca-inline-flex luca-items-center luca-gap-2 luca-rounded luca-border-none luca-bg-transparent luca-p-0 luca-text-sm luca-font-medium luca-leading-[22px] luca-transition-colors luca-duration-200",
          s,
          "hover:luca-underline focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200",
          t
        ),
        ...r
      }
    );
  }
);
tS.displayName = "NotificationAction";
const nS = N.forwardRef(
  ({
    variant: e = "success",
    message: t,
    icon: n,
    dismissible: r = !1,
    onDismiss: o,
    className: a,
    closeButtonAriaLabel: i = "Cerrar notificación",
    ...s
  }, c) => {
    const l = xs[e], u = zf[e], d = !!(n ?? u());
    return /* @__PURE__ */ _e(
      "div",
      {
        ref: c,
        role: "status",
        className: K(
          "luca-inline-flex luca-items-center luca-gap-3 luca-rounded-xl luca-px-[18px] luca-py-[15px]",
          l.toastBackground,
          l.toastTextColor,
          Gf,
          a
        ),
        ...s,
        children: [
          d && /* @__PURE__ */ F(
            "span",
            {
              className: K(
                "luca-flex luca-h-6 luca-w-6 luca-shrink-0 luca-items-center luca-justify-center luca-rounded-full",
                l.iconBackground,
                l.iconColor
              ),
              "aria-hidden": !0,
              children: n ?? /* @__PURE__ */ F(u, { className: "luca-h-4 luca-w-4" })
            }
          ),
          /* @__PURE__ */ F("span", { className: "luca-text-sm luca-font-medium luca-leading-6", children: t }),
          r && /* @__PURE__ */ F(
            "button",
            {
              type: "button",
              onClick: o,
              "aria-label": i,
              className: K(
                "luca-ml-auto luca-inline-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-full luca-transition-colors luca-duration-200",
                l.closeButtonColor,
                l.closeButtonHoverColor,
                "focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200"
              ),
              children: /* @__PURE__ */ F(Wf, {})
            }
          )
        ]
      }
    );
  }
);
nS.displayName = "Toast";
const rS = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ _e(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: K("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: [
      /* @__PURE__ */ F(
        "path",
        {
          d: "M8 3.33337V12.6667",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ F(
        "path",
        {
          d: "M12.6667 8H3.33337",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      )
    ]
  }
), oS = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ F(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: K("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: /* @__PURE__ */ F(
      "path",
      {
        d: "M21.6429 10.9822H2.35714C2.23928 10.9822 2.14285 11.0786 2.14285 11.1965V12.8036C2.14285 12.9215 2.23928 13.0179 2.35714 13.0179H21.6429C21.7607 13.0179 21.8571 12.9215 21.8571 12.8036V11.1965C21.8571 11.0786 21.7607 10.9822 21.6429 10.9822Z",
        fill: "currentColor"
      }
    )
  }
), Uf = N.createContext(null), Xf = () => {
  const e = N.useContext(Uf);
  if (!e)
    throw new Error(
      "Los componentes compuestos de Selector deben usarse dentro de <Selector>."
    );
  return e;
}, aS = "luca-group/selector luca-flex luca-w-full luca-items-center luca-gap-6 luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-px-6 luca-py-4 luca-transition-all luca-duration-200", iS = N.forwardRef(
  ({ className: e, children: t, disabled: n = !1, ...r }, o) => /* @__PURE__ */ F(Uf.Provider, { value: { disabled: n }, children: /* @__PURE__ */ F(
    "div",
    {
      ref: o,
      "data-disabled": n || void 0,
      className: K(
        aS,
        !n && "hover:luca-border-primary-100 hover:luca-bg-neutral-50 focus-within:luca-border-primary-100 focus-within:luca-bg-neutral-50",
        n && "luca-border-neutral-200 luca-bg-neutral-50 luca-opacity-70 luca-cursor-not-allowed",
        e
      ),
      ...r,
      children: t
    }
  ) })
);
iS.displayName = "Selector";
const sS = N.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ F(
  "span",
  {
    ref: n,
    className: K(
      "luca-text-sm luca-font-semibold luca-leading-6 luca-text-neutral-900",
      e
    ),
    ...t
  }
));
sS.displayName = "SelectorLabel";
const cS = N.forwardRef(({ as: e = "button", className: t, children: n, ...r }, o) => {
  const { disabled: a } = Xf();
  if (e === "span") {
    const s = r;
    return /* @__PURE__ */ F(
      "span",
      {
        ref: o,
        className: K(
          "luca-text-sm luca-leading-6 luca-text-primary-600",
          t
        ),
        ...s,
        children: n
      }
    );
  }
  const i = r;
  return /* @__PURE__ */ F(
    "button",
    {
      ref: o,
      type: "button",
      disabled: a,
      className: K(
        "luca-inline-flex luca-h-6 luca-items-center luca-rounded-full luca-border-none luca-bg-transparent luca-px-2 luca-text-sm luca-font-normal luca-leading-6 luca-text-primary-600 luca-transition-colors luca-duration-200",
        !a && "group-hover/selector:luca-underline hover:luca-underline focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200",
        a && "luca-text-neutral-400",
        t
      ),
      ...i,
      children: n
    }
  );
});
cS.displayName = "SelectorDetail";
const lS = N.forwardRef(({ className: e, iconVariant: t = "plus", icon: n, type: r = "button", ...o }, a) => {
  const { disabled: i } = Xf(), s = n ?? (t === "minus" ? /* @__PURE__ */ F(oS, { size: 16 }) : /* @__PURE__ */ F(rS, { size: 16 }));
  return /* @__PURE__ */ F(
    yf,
    {
      ref: a,
      type: r,
      state: i ? "disabled" : "default",
      outline: "rounded",
      className: K(
        "luca-size-8 luca-border-neutral-200 luca-bg-white luca-text-primary-600",
        !i && "hover:luca-border-primary-200 hover:luca-bg-[#edf5ff] hover:luca-text-primary-600 focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200",
        e
      ),
      icon: s,
      disabled: i,
      ...o
    }
  );
});
lS.displayName = "SelectorAction";
nt.config({
  theme: {
    token: {
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    }
  }
});
export {
  gS as Badge,
  vS as Breadcrumb,
  hf as Button,
  yf as ButtonIcon,
  JC as Card,
  r1 as CardContent,
  n1 as CardDescription,
  e1 as CardHeader,
  pf as CardIcon,
  t1 as CardTitle,
  Zx as Chips,
  ls as Layout,
  Cf as LayoutContent,
  bf as LayoutHeader,
  Ux as Modal,
  Jx as Notification,
  tS as NotificationAction,
  eS as NotificationActions,
  Kx as SearchBar,
  iS as Selector,
  lS as SelectorAction,
  cS as SelectorDetail,
  sS as SelectorLabel,
  m1 as TabList,
  nS as Toast,
  K as cn
};

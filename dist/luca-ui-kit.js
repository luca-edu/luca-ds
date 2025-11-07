import { jsxs as Wt, jsx as J } from "react/jsx-runtime";
import * as g from "react";
import R, { isValidElement as Wf, version as Gf, useContext as ae, createContext as Qt, useRef as me, useLayoutEffect as Pa, useEffect as Ye, useState as Zt, forwardRef as Mn, useMemo as Ae, Children as qf, memo as fr, startTransition as xs } from "react";
import * as wl from "react-dom";
import Ss, { createPortal as $l } from "react-dom";
function Uf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Zo = { exports: {} };
var Es;
function Xf() {
  return Es || (Es = 1, (function(e) {
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
  })(Zo)), Zo.exports;
}
var Yf = Xf();
const z = /* @__PURE__ */ Uf(Yf);
function ge() {
  return ge = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ge.apply(null, arguments);
}
function U(e) {
  "@babel/helpers - typeof";
  return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, U(e);
}
var Kf = Symbol.for("react.element"), Qf = Symbol.for("react.transitional.element"), Zf = Symbol.for("react.fragment");
function Ol(e) {
  return (
    // Base object type
    e && U(e) === "object" && // React Element type
    (e.$$typeof === Kf || e.$$typeof === Qf) && // React Fragment type
    e.type === Zf
  );
}
function Ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return R.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Ta(r)) : Ol(r) && r.props ? n = n.concat(Ta(r.props.children, t)) : n.push(r));
  }), n;
}
var Na = {}, Pi = [], Jf = function(t) {
  Pi.push(t);
};
function Qn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Pi.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function em(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Pi.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Pl() {
  Na = {};
}
function Tl(e, t, n) {
  !t && !Na[n] && (e(!1, n), Na[n] = !0);
}
function $e(e, t) {
  Tl(Qn, e, t);
}
function tm(e, t) {
  Tl(em, e, t);
}
$e.preMessage = Jf;
$e.resetWarned = Pl;
$e.noteOnce = tm;
function nm(e, t) {
  if (U(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (U(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Nl(e) {
  var t = nm(e, "string");
  return U(t) == "symbol" ? t : t + "";
}
function N(e, t, n) {
  return (t = Nl(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function ws(e, t) {
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
    t % 2 ? ws(Object(n), !0).forEach(function(r) {
      N(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ws(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function $s(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function rm(e) {
  return e && U(e) === "object" && $s(e.nativeElement) ? e.nativeElement : $s(e) ? e : null;
}
function om(e) {
  var t = rm(e);
  if (t)
    return t;
  if (e instanceof R.Component) {
    var n;
    return (n = Ss.findDOMNode) === null || n === void 0 ? void 0 : n.call(Ss, e);
  }
  return null;
}
var Ir = { exports: {} }, le = {};
var Os;
function am() {
  if (Os) return le;
  Os = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function p(m) {
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
  return le.ContextConsumer = i, le.ContextProvider = a, le.Element = e, le.ForwardRef = c, le.Fragment = n, le.Lazy = f, le.Memo = d, le.Portal = t, le.Profiler = o, le.StrictMode = r, le.Suspense = l, le.SuspenseList = u, le.isAsyncMode = function() {
    return !1;
  }, le.isConcurrentMode = function() {
    return !1;
  }, le.isContextConsumer = function(m) {
    return p(m) === i;
  }, le.isContextProvider = function(m) {
    return p(m) === a;
  }, le.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, le.isForwardRef = function(m) {
    return p(m) === c;
  }, le.isFragment = function(m) {
    return p(m) === n;
  }, le.isLazy = function(m) {
    return p(m) === f;
  }, le.isMemo = function(m) {
    return p(m) === d;
  }, le.isPortal = function(m) {
    return p(m) === t;
  }, le.isProfiler = function(m) {
    return p(m) === o;
  }, le.isStrictMode = function(m) {
    return p(m) === r;
  }, le.isSuspense = function(m) {
    return p(m) === l;
  }, le.isSuspenseList = function(m) {
    return p(m) === u;
  }, le.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === u || m === h || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === a || m.$$typeof === i || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, le.typeOf = p, le;
}
var ue = {};
var Ps;
function im() {
  return Ps || (Ps = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, p = !1, m = !1, C = !1, y = !1, x;
    x = Symbol.for("react.module.reference");
    function S(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === o || y || D === r || D === l || D === u || C || D === h || v || p || m || typeof D == "object" && D !== null && (D.$$typeof === f || D.$$typeof === d || D.$$typeof === a || D.$$typeof === i || D.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      D.$$typeof === x || D.getModuleId !== void 0));
    }
    function b(D) {
      if (typeof D == "object" && D !== null) {
        var ee = D.$$typeof;
        switch (ee) {
          case e:
            var ie = D.type;
            switch (ie) {
              case n:
              case o:
              case r:
              case l:
              case u:
                return ie;
              default:
                var Qe = ie && ie.$$typeof;
                switch (Qe) {
                  case s:
                  case i:
                  case c:
                  case f:
                  case d:
                  case a:
                    return Qe;
                  default:
                    return ee;
                }
            }
          case t:
            return ee;
        }
      }
    }
    var w = i, E = a, $ = e, O = c, P = n, _ = f, I = d, F = t, M = o, A = r, j = l, k = u, W = !1, H = !1;
    function Q(D) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Z(D) {
      return H || (H = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function K(D) {
      return b(D) === i;
    }
    function Y(D) {
      return b(D) === a;
    }
    function X(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function G(D) {
      return b(D) === c;
    }
    function q(D) {
      return b(D) === n;
    }
    function oe(D) {
      return b(D) === f;
    }
    function Pe(D) {
      return b(D) === d;
    }
    function be(D) {
      return b(D) === t;
    }
    function xe(D) {
      return b(D) === o;
    }
    function Se(D) {
      return b(D) === r;
    }
    function V(D) {
      return b(D) === l;
    }
    function ve(D) {
      return b(D) === u;
    }
    ue.ContextConsumer = w, ue.ContextProvider = E, ue.Element = $, ue.ForwardRef = O, ue.Fragment = P, ue.Lazy = _, ue.Memo = I, ue.Portal = F, ue.Profiler = M, ue.StrictMode = A, ue.Suspense = j, ue.SuspenseList = k, ue.isAsyncMode = Q, ue.isConcurrentMode = Z, ue.isContextConsumer = K, ue.isContextProvider = Y, ue.isElement = X, ue.isForwardRef = G, ue.isFragment = q, ue.isLazy = oe, ue.isMemo = Pe, ue.isPortal = be, ue.isProfiler = xe, ue.isStrictMode = Se, ue.isSuspense = V, ue.isSuspenseList = ve, ue.isValidElementType = S, ue.typeOf = b;
  })()), ue;
}
var Ts;
function sm() {
  return Ts || (Ts = 1, process.env.NODE_ENV === "production" ? Ir.exports = am() : Ir.exports = im()), Ir.exports;
}
var Jo = sm();
function ho(e, t, n) {
  var r = g.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var cm = Number(Gf.split(".")[0]), Rl = function(t, n) {
  typeof t == "function" ? t(n) : U(t) === "object" && t && "current" in t && (t.current = n);
}, yo = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    n.forEach(function(i) {
      Rl(i, a);
    });
  };
}, Ti = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return ho(function() {
    return yo.apply(void 0, n);
  }, n, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, Ni = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (_l(t) && cm >= 19)
    return !0;
  var o = Jo.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== Jo.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== Jo.ForwardRef);
};
function _l(e) {
  return /* @__PURE__ */ Wf(e) && !Ol(e);
}
var Ml = function(t) {
  if (t && _l(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function Le(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ns(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Nl(r.key), r);
  }
}
function De(e, t, n) {
  return t && Ns(e.prototype, t), n && Ns(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Zn(e, t) {
  return Zn = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, Zn(e, t);
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
  }), t && Zn(e, t);
}
function Jn(e) {
  return Jn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Jn(e);
}
function Ri() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Ri = function() {
    return !!e;
  })();
}
function te(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function lm(e, t) {
  if (t && (U(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return te(e);
}
function nn(e) {
  var t = Ri();
  return function() {
    var n, r = Jn(e);
    if (t) {
      var o = Jn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return lm(this, n);
  };
}
function Ra(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function um(e) {
  if (Array.isArray(e)) return Ra(e);
}
function Il(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function _i(e, t) {
  if (e) {
    if (typeof e == "string") return Ra(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Ra(e, t) : void 0;
  }
}
function dm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function B(e) {
  return um(e) || Il(e) || _i(e) || dm();
}
var Fl = function(t) {
  return +setTimeout(t, 16);
}, Al = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Fl = function(t) {
  return window.requestAnimationFrame(t);
}, Al = function(t) {
  return window.cancelAnimationFrame(t);
});
var Rs = 0, bo = /* @__PURE__ */ new Map();
function jl(e) {
  bo.delete(e);
}
var Bt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Rs += 1;
  var r = Rs;
  function o(a) {
    if (a === 0)
      jl(r), t();
    else {
      var i = Fl(function() {
        o(a - 1);
      });
      bo.set(r, i);
    }
  }
  return o(n), r;
};
Bt.cancel = function(e) {
  var t = bo.get(e);
  return jl(e), Al(t);
};
process.env.NODE_ENV !== "production" && (Bt.ids = function() {
  return bo;
});
function kl(e) {
  if (Array.isArray(e)) return e;
}
function fm(e, t) {
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
function Ll() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L(e, t) {
  return kl(e) || fm(e, t) || _i(e, t) || Ll();
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
function Ze() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function _a(e, t) {
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
var _s = "data-rc-order", Ms = "data-rc-priority", mm = "rc-util-key", Ma = /* @__PURE__ */ new Map();
function Dl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : mm;
}
function Co(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function gm(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Mi(e) {
  return Array.from((Ma.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Vl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ze())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = gm(r), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(_s, i), s && a && c.setAttribute(Ms, "".concat(a)), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
  var l = Co(t), u = l.firstChild;
  if (r) {
    if (s) {
      var d = (t.styles || Mi(l)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(_s)))
          return !1;
        var h = Number(f.getAttribute(Ms) || 0);
        return a >= h;
      });
      if (d.length)
        return l.insertBefore(c, d[d.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Hl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Co(t);
  return (t.styles || Mi(n)).find(function(r) {
    return r.getAttribute(Dl(t)) === e;
  });
}
function tr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Hl(e, t);
  if (n) {
    var r = Co(t);
    r.removeChild(n);
  }
}
function vm(e, t) {
  var n = Ma.get(e);
  if (!n || !_a(document, n)) {
    var r = Vl("", t), o = r.parentNode;
    Ma.set(e, o), e.removeChild(r);
  }
}
function At(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Co(n), o = Mi(r), a = T(T({}, n), {}, {
    styles: o
  });
  vm(r, a);
  var i = Hl(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = Vl(e, a);
  return u.setAttribute(Dl(a), t), u;
}
function pm(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function We(e, t) {
  if (e == null) return {};
  var n, r, o = pm(e, t);
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
    if (a && i && U(a) === "object" && U(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(f) {
        return o(a[f], i[f], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var hm = "%";
function Ia(e) {
  return e.join(hm);
}
var ym = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e), N(this, "instanceId", void 0), N(this, "cache", /* @__PURE__ */ new Map()), N(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return De(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Ia(n));
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
      return this.opUpdate(Ia(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), a = r(o);
      a === null ? this.cache.delete(n) : this.cache.set(n, a);
    }
  }]), e;
})(), bm = ["children"], En = "data-token-hash", ht = "data-css-hash", Cm = "data-cache-path", Dt = "__cssinjs_instance__";
function Bl() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ht, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Dt] = o[Dt] || e, o[Dt] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(ht, "]"))).forEach(function(o) {
      var a = o.getAttribute(ht);
      if (r[a]) {
        if (o[Dt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[a] = !0;
    });
  }
  return new ym(e);
}
var Jt = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: Bl(),
  defaultCache: !0
}), xm = function(t) {
  var n = t.children, r = We(t, bm), o = g.useContext(Jt), a = ho(function() {
    var i = T({}, o);
    Object.keys(r).forEach(function(c) {
      var l = r[c];
      r[c] !== void 0 && (i[c] = l);
    });
    var s = r.cache;
    return i.cache = i.cache || Bl(), i.defaultCache = !s && o.defaultCache, i;
  }, [o, r], function(i, s) {
    return !nr(i[0], s[0], !0) || !nr(i[1], s[1], !0);
  });
  return /* @__PURE__ */ g.createElement(Jt.Provider, {
    value: a
  }, n);
};
function Sm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Ii = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), N(this, "cache", void 0), N(this, "keys", void 0), N(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return De(e, [{
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
            var d = L(l, 2), f = d[1];
            return o.internalGet(u)[1] < f ? [u, o.internalGet(u)[1]] : l;
          }, [this.keys[0], this.cacheCallTimes]), i = L(a, 1), s = i[0];
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
          return !Sm(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
N(Ii, "MAX_CACHE_SIZE", 20);
N(Ii, "MAX_CACHE_OFFSET", 5);
var Is = 0, zl = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e), N(this, "derivatives", void 0), N(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Is, t.length === 0 && Qn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Is += 1;
  }
  return De(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
})(), ea = new Ii();
function oo(e) {
  var t = Array.isArray(e) ? e : [e];
  return ea.has(t) || ea.set(t, new zl(t)), ea.get(t);
}
var Em = /* @__PURE__ */ new WeakMap(), ta = {};
function wm(e, t) {
  for (var n = Em, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(ta) || n.set(ta, e()), n.get(ta);
}
var Fs = /* @__PURE__ */ new WeakMap();
function Xn(e) {
  var t = Fs.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof zl ? t += r.id : r && U(r) === "object" ? t += Xn(r) : t += r;
  }), t = er(t), Fs.set(e, t)), t;
}
function As(e, t) {
  return er("".concat(t, "_").concat(Xn(e)));
}
var Fa = Ze();
function ne(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function ao(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = T(T({}, r), {}, N(N({}, En, t), ht, n)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var Gr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, $m = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = L(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Wl = function(t, n, r) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = L(i, 2), u = l[0], d = l[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      a[u] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var f, h = Gr(u, r?.prefix);
      o[h] = typeof d == "number" && !(r != null && (f = r.unitless) !== null && f !== void 0 && f[u]) ? "".concat(d, "px") : String(d), a[u] = "var(".concat(h, ")");
    }
  }), [a, $m(o, n, {
    scope: r?.scope
  })];
}, js = process.env.NODE_ENV !== "test" && Ze() ? g.useLayoutEffect : g.useEffect, wn = function(t, n) {
  var r = g.useRef(!0);
  js(function() {
    return t(r.current);
  }, n), js(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, ks = function(t, n) {
  wn(function(r) {
    if (!r)
      return t();
  }, n);
}, Om = T({}, g), Ls = Om.useInsertionEffect, Pm = function(t, n, r) {
  g.useMemo(t, r), wn(function() {
    return n(!0);
  }, r);
}, Tm = Ls ? function(e, t, n) {
  return Ls(function() {
    return e(), t();
  }, n);
} : Pm, Nm = T({}, g), Rm = Nm.useInsertionEffect, _m = function(t) {
  var n = [], r = !1;
  function o(a) {
    if (r) {
      process.env.NODE_ENV !== "production" && Qn(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
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
}, Mm = function() {
  return function(t) {
    t();
  };
}, Im = typeof Rm < "u" ? _m : Mm;
function Fm() {
  return !1;
}
var Aa = !1;
function Am() {
  return Aa;
}
const jm = process.env.NODE_ENV === "production" ? Fm : Am;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Fr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Fr && typeof Fr.webpackHotUpdate == "function") {
    var km = Fr.webpackHotUpdate;
    Fr.webpackHotUpdate = function() {
      return Aa = !0, setTimeout(function() {
        Aa = !1;
      }, 0), km.apply(void 0, arguments);
    };
  }
}
function Fi(e, t, n, r, o) {
  var a = g.useContext(Jt), i = a.cache, s = [e].concat(B(t)), c = Ia(s), l = Im([c]), u = jm(), d = function(p) {
    i.opUpdate(c, function(m) {
      var C = m || [void 0, void 0], y = L(C, 2), x = y[0], S = x === void 0 ? 0 : x, b = y[1], w = b;
      process.env.NODE_ENV !== "production" && b && u && (r?.(w, u), w = null);
      var E = w || n(), $ = [S, E];
      return p ? p($) : $;
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
  var h = f[1];
  return Tm(function() {
    o?.(h);
  }, function(v) {
    return d(function(p) {
      var m = L(p, 2), C = m[0], y = m[1];
      return v && C === 0 && o?.(h), [C + 1, y];
    }), function() {
      i.opUpdate(c, function(p) {
        var m = p || [], C = L(m, 2), y = C[0], x = y === void 0 ? 0 : y, S = C[1], b = x - 1;
        return b === 0 ? (l(function() {
          (v || !i.opGet(c)) && r?.(S, !1);
        }), null) : [x - 1, S];
      });
    };
  }, [c]), h;
}
var Lm = {}, Dm = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qt = /* @__PURE__ */ new Map();
function Vm(e) {
  qt.set(e, (qt.get(e) || 0) + 1);
}
function Hm(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(En, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Dt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Bm = 0;
function zm(e, t) {
  qt.set(e, (qt.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  qt.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), qt.size - n.size > Bm && n.forEach(function(r) {
    Hm(r, t), qt.delete(r);
  });
}
var Gl = function(t, n, r, o) {
  var a = r.getDerivativeToken(t), i = T(T({}, a), n);
  return o && (i = o(i)), i;
}, ql = "token";
function Wm(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ae(Jt), o = r.cache.instanceId, a = r.container, i = n.salt, s = i === void 0 ? "" : i, c = n.override, l = c === void 0 ? Lm : c, u = n.formatToken, d = n.getComputedToken, f = n.cssVar, h = wm(function() {
    return Object.assign.apply(Object, [{}].concat(B(t)));
  }, t), v = Xn(h), p = Xn(l), m = f ? Xn(f) : "", C = Fi(ql, [s, e.id, v, p, m], function() {
    var y, x = d ? d(h, l, e) : Gl(h, l, e, u), S = T({}, x), b = "";
    if (f) {
      var w = Wl(x, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = L(w, 2);
      x = E[0], b = E[1];
    }
    var $ = As(x, s);
    x._tokenKey = $, S._tokenKey = As(S, s);
    var O = (y = f?.key) !== null && y !== void 0 ? y : $;
    x._themeKey = O, Vm(O);
    var P = "".concat(Dm, "-").concat(er($));
    return x._hashId = P, [x, P, S, b, f?.key || ""];
  }, function(y) {
    zm(y[0]._themeKey, o);
  }, function(y) {
    var x = L(y, 4), S = x[0], b = x[3];
    if (f && b) {
      var w = At(b, er("css-variables-".concat(S._themeKey)), {
        mark: ht,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      w[Dt] = o, w.setAttribute(En, S._themeKey);
    }
  });
  return C;
}
var Gm = function(t, n, r) {
  var o = L(t, 5), a = o[2], i = o[3], s = o[4], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, h = ao(i, s, u, f, l);
  return [d, u, h];
}, qm = {
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
}, Ul = "comm", Xl = "rule", Yl = "decl", Um = "@import", Xm = "@namespace", Ym = "@keyframes", Km = "@layer", Kl = Math.abs, Ai = String.fromCharCode;
function Ql(e) {
  return e.trim();
}
function qr(e, t, n) {
  return e.replace(t, n);
}
function Qm(e, t, n) {
  return e.indexOf(t, n);
}
function yn(e, t) {
  return e.charCodeAt(t) | 0;
}
function $n(e, t, n) {
  return e.slice(t, n);
}
function St(e) {
  return e.length;
}
function Zm(e) {
  return e.length;
}
function Ar(e, t) {
  return t.push(e), e;
}
var xo = 1, On = 1, Zl = 0, ft = 0, Me = 0, In = "";
function ji(e, t, n, r, o, a, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: xo, column: On, length: i, return: "", siblings: s };
}
function Jm() {
  return Me;
}
function eg() {
  return Me = ft > 0 ? yn(In, --ft) : 0, On--, Me === 10 && (On = 1, xo--), Me;
}
function yt() {
  return Me = ft < Zl ? yn(In, ft++) : 0, On++, Me === 10 && (On = 1, xo++), Me;
}
function Vt() {
  return yn(In, ft);
}
function Ur() {
  return ft;
}
function So(e, t) {
  return $n(In, e, t);
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
function tg(e) {
  return xo = On = 1, Zl = St(In = e), ft = 0, [];
}
function ng(e) {
  return In = "", e;
}
function na(e) {
  return Ql(So(ft - 1, ja(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function rg(e) {
  for (; (Me = Vt()) && Me < 33; )
    yt();
  return rr(e) > 2 || rr(Me) > 3 ? "" : " ";
}
function og(e, t) {
  for (; --t && yt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return So(e, Ur() + (t < 6 && Vt() == 32 && yt() == 32));
}
function ja(e) {
  for (; yt(); )
    switch (Me) {
      // ] ) " '
      case e:
        return ft;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ja(Me);
        break;
      // (
      case 40:
        e === 41 && ja(e);
        break;
      // \
      case 92:
        yt();
        break;
    }
  return ft;
}
function ag(e, t) {
  for (; yt() && e + Me !== 57; )
    if (e + Me === 84 && Vt() === 47)
      break;
  return "/*" + So(t, ft - 1) + "*" + Ai(e === 47 ? e : yt());
}
function ig(e) {
  for (; !rr(Vt()); )
    yt();
  return So(e, ft);
}
function sg(e) {
  return ng(Xr("", null, null, null, [""], e = tg(e), 0, [0], e));
}
function Xr(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, f = 0, h = 0, v = 0, p = 1, m = 1, C = 1, y = 0, x = "", S = o, b = a, w = r, E = x; m; )
    switch (v = y, y = yt()) {
      // (
      case 40:
        if (v != 108 && yn(E, d - 1) == 58) {
          Qm(E += qr(na(y), "&", "&\f"), "&\f", Kl(l ? s[l - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += na(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += rg(v);
        break;
      // \
      case 92:
        E += og(Ur() - 1, 7);
        continue;
      // /
      case 47:
        switch (Vt()) {
          case 42:
          case 47:
            Ar(cg(ag(yt(), Ur()), t, n, c), c), (rr(v || 1) == 5 || rr(Vt() || 1) == 5) && St(E) && $n(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * p:
        s[l++] = St(E) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + u:
            C == -1 && (E = qr(E, /\f/g, "")), h > 0 && (St(E) - d || p === 0 && v === 47) && Ar(h > 32 ? Vs(E + ";", r, n, d - 1, c) : Vs(qr(E, " ", "") + ";", r, n, d - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Ar(w = Ds(E, t, n, l, u, o, s, x, S = [], b = [], d, a), a), y === 123)
              if (u === 0)
                Xr(E, t, w, w, S, a, d, s, b);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (yn(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (yn(E, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? Xr(e, w, w, r && Ar(Ds(e, w, w, 0, 0, o, s, x, o, S = [], d, b), b), o, b, d, s, r ? S : b) : Xr(E, w, w, w, [""], b, 0, s, b);
              }
        }
        l = u = h = 0, p = C = 1, x = E = "", d = i;
        break;
      // :
      case 58:
        d = 1 + St(E), h = v;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && eg() == 125)
            continue;
        }
        switch (E += Ai(y), y * p) {
          // &
          case 38:
            C = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (St(E) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Vt() === 45 && (E += na(yt())), f = Vt(), u = d = St(x = E += ig(Ur())), y++;
            break;
          // -
          case 45:
            v === 45 && St(E) == 2 && (p = 0);
        }
    }
  return a;
}
function Ds(e, t, n, r, o, a, i, s, c, l, u, d) {
  for (var f = o - 1, h = o === 0 ? a : [""], v = Zm(h), p = 0, m = 0, C = 0; p < r; ++p)
    for (var y = 0, x = $n(e, f + 1, f = Kl(m = i[p])), S = e; y < v; ++y)
      (S = Ql(m > 0 ? h[y] + " " + x : qr(x, /&\f/g, h[y]))) && (c[C++] = S);
  return ji(e, t, n, o === 0 ? Xl : s, c, l, u, d);
}
function cg(e, t, n, r) {
  return ji(e, t, n, Ul, Ai(Jm()), $n(e, 2, -2), 0, r);
}
function Vs(e, t, n, r, o) {
  return ji(e, t, n, Yl, $n(e, 0, r), $n(e, r + 1, -1), r, o);
}
function ka(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function lg(e, t, n, r) {
  switch (e.type) {
    case Km:
      if (e.children.length) break;
    case Um:
    case Xm:
    case Yl:
      return e.return = e.return || e.value;
    case Ul:
      return "";
    case Ym:
      return e.return = e.value + "{" + ka(e.children, r) + "}";
    case Xl:
      if (!St(e.value = e.props.join(","))) return "";
  }
  return St(n = ka(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function Jl(e, t) {
  var n = t.path, r = t.parentSelectors;
  $e(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var ug = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || a.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && Jl("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, dg = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && Jl("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Hs = "data-ant-cssinjs-cache-path", eu = "_FILE_STYLE__", Kt, tu = !0;
function fg() {
  if (!Kt && (Kt = {}, Ze())) {
    var e = document.createElement("div");
    e.className = Hs, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = L(a, 2), s = i[0], c = i[1];
      Kt[s] = c;
    });
    var n = document.querySelector("style[".concat(Hs, "]"));
    if (n) {
      var r;
      tu = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function mg(e) {
  return fg(), !!Kt[e];
}
function gg(e) {
  var t = Kt[e], n = null;
  if (t && Ze())
    if (tu)
      n = eu;
    else {
      var r = document.querySelector("style[".concat(ht, '="').concat(Kt[e], '"]'));
      r ? n = r.innerHTML : delete Kt[e];
    }
  return [n, t];
}
var nu = "_skip_check_", ru = "_multi_value_";
function Yr(e) {
  var t = ka(sg(e), lg);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function vg(e) {
  return U(e) === "object" && e && (nu in e || ru in e);
}
function Bs(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(B(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var pg = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, a = r.injectHash, i = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, d = n.transformers, f = d === void 0 ? [] : d, h = n.linters, v = h === void 0 ? [] : h, p = "", m = {};
  function C(S) {
    var b = S.getName(s);
    if (!m[b]) {
      var w = e(S.style, n, {
        root: !1,
        parentSelectors: i
      }), E = L(w, 1), $ = E[0];
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
      p += "".concat(b, `
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
        if (U($) === "object" && $ && (E !== "animationName" || !$._keyframe) && !vg($)) {
          var O = !1, P = E.trim(), _ = !1;
          (o || a) && s ? P.startsWith("@") ? O = !0 : P === "&" ? P = Bs("", s, u) : P = Bs(E, s, u) : o && !s && (P === "&" || P === "") && (P = "", _ = !0);
          var I = e($, n, {
            root: _,
            injectHash: O,
            parentSelectors: [].concat(B(i), [P])
          }), F = L(I, 2), M = F[0], A = F[1];
          m = T(T({}, m), A), p += "".concat(P).concat(M);
        } else {
          let W = function(H, Q) {
            process.env.NODE_ENV !== "production" && (U($) !== "object" || !($ != null && $[nu])) && [ug, dg].concat(B(v)).forEach(function(Y) {
              return Y(H, Q, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var Z = H.replace(/[A-Z]/g, function(Y) {
              return "-".concat(Y.toLowerCase());
            }), K = Q;
            !qm[H] && typeof K == "number" && K !== 0 && (K = "".concat(K, "px")), H === "animationName" && Q !== null && Q !== void 0 && Q._keyframe && (C(Q), K = Q.getName(s)), p += "".concat(Z, ":").concat(K, ";");
          };
          var j, k = (j = $?.value) !== null && j !== void 0 ? j : $;
          U($) === "object" && $ !== null && $ !== void 0 && $[ru] && Array.isArray(k) ? k.forEach(function(H) {
            W(E, H);
          }) : W(E, k);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (m["@layer ".concat(c.name)] = c.dependencies.map(function(S) {
    return "@layer ".concat(S, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, m];
};
function ou(e, t) {
  return er("".concat(e.join("%")).concat(t));
}
function hg() {
  return null;
}
var au = "style";
function La(e, t) {
  var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = g.useContext(Jt), d = u.autoClear, f = u.mock, h = u.defaultCache, v = u.hashPriority, p = u.container, m = u.ssrInline, C = u.transformers, y = u.linters, x = u.cache, S = u.layer, b = n._tokenKey, w = [b];
  S && w.push("layer"), w.push.apply(w, B(r));
  var E = Fa;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var $ = Fi(
    au,
    w,
    // Create cache if needed
    function() {
      var F = w.join("|");
      if (mg(F)) {
        var M = gg(F), A = L(M, 2), j = A[0], k = A[1];
        if (j)
          return [j, b, k, {}, s, l];
      }
      var W = t(), H = pg(W, {
        hashId: o,
        hashPriority: v,
        layer: S ? a : void 0,
        path: r.join("-"),
        transformers: C,
        linters: y
      }), Q = L(H, 2), Z = Q[0], K = Q[1], Y = Yr(Z), X = ou(w, Y);
      return [Y, b, X, K, s, l];
    },
    // Remove cache if no need
    function(F, M) {
      var A = L(F, 3), j = A[2];
      (M || d) && Fa && tr(j, {
        mark: ht,
        attachTo: p
      });
    },
    // Effect: Inject style here
    function(F) {
      var M = L(F, 4), A = M[0];
      M[1];
      var j = M[2], k = M[3];
      if (E && A !== eu) {
        var W = {
          mark: ht,
          prepend: S ? !1 : "queue",
          attachTo: p,
          priority: l
        }, H = typeof i == "function" ? i() : i;
        H && (W.csp = {
          nonce: H
        });
        var Q = [], Z = [];
        Object.keys(k).forEach(function(Y) {
          Y.startsWith("@layer") ? Q.push(Y) : Z.push(Y);
        }), Q.forEach(function(Y) {
          At(Yr(k[Y]), "_layer-".concat(Y), T(T({}, W), {}, {
            prepend: !0
          }));
        });
        var K = At(A, j, W);
        K[Dt] = x.instanceId, K.setAttribute(En, b), process.env.NODE_ENV !== "production" && K.setAttribute(Cm, w.join("|")), Z.forEach(function(Y) {
          At(Yr(k[Y]), "_effect-".concat(Y), W);
        });
      }
    }
  ), O = L($, 3), P = O[0], _ = O[1], I = O[2];
  return function(F) {
    var M;
    return !m || E || !h ? M = /* @__PURE__ */ g.createElement(hg, null) : M = /* @__PURE__ */ g.createElement("style", ge({}, N(N({}, En, _), ht, I), {
      dangerouslySetInnerHTML: {
        __html: P
      }
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, M, F);
  };
}
var yg = function(t, n, r) {
  var o = L(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], d = r || {}, f = d.plain;
  if (l)
    return null;
  var h = a, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return h = ao(a, i, s, v, f), c && Object.keys(c).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var m = Yr(c[p]), C = ao(m, i, "_effect-".concat(p), v, f);
      p.startsWith("@layer") ? h = C + h : h += C;
    }
  }), [u, s, h];
}, iu = "cssVar", bg = function(t, n) {
  var r = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = ae(Jt), d = u.cache.instanceId, f = u.container, h = s._tokenKey, v = [].concat(B(t.path), [r, l, h]), p = Fi(iu, v, function() {
    var m = n(), C = Wl(m, r, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), y = L(C, 2), x = y[0], S = y[1], b = ou(v, S);
    return [x, S, b, r];
  }, function(m) {
    var C = L(m, 3), y = C[2];
    Fa && tr(y, {
      mark: ht,
      attachTo: f
    });
  }, function(m) {
    var C = L(m, 3), y = C[1], x = C[2];
    if (y) {
      var S = At(y, x, {
        mark: ht,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      S[Dt] = d, S.setAttribute(En, r);
    }
  });
  return p;
}, Cg = function(t, n, r) {
  var o = L(t, 4), a = o[1], i = o[2], s = o[3], c = r || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, f = ao(a, s, i, d, l);
  return [u, i, f];
};
N(N(N({}, au, yg), ql, Gm), iu, Cg);
var Te = /* @__PURE__ */ (function() {
  function e(t, n) {
    Le(this, e), N(this, "name", void 0), N(this, "style", void 0), N(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return De(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function un(e) {
  return e.notSplit = !0, e;
}
un(["borderTop", "borderBottom"]), un(["borderTop"]), un(["borderBottom"]), un(["borderLeft", "borderRight"]), un(["borderLeft"]), un(["borderRight"]);
var ki = /* @__PURE__ */ Qt({});
function xg(e) {
  return kl(e) || Il(e) || _i(e) || Ll();
}
function $t(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function su(e, t, n, r) {
  if (!t.length)
    return n;
  var o = xg(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = B(e) : s = T({}, e), r && n === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = su(s[a], i, n, r), s;
}
function gt(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !$t(e, t.slice(0, -1)) ? e : su(e, t, n, r);
}
function Sg(e) {
  return U(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function zs(e) {
  return Array.isArray(e) ? [] : {};
}
var Eg = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function gn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = zs(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = $t(o, i), u = Array.isArray(l);
      if (u || Sg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var d = $t(r, i);
          u ? r = gt(r, i, []) : (!d || U(d) !== "object") && (r = gt(r, i, zs(l))), Eg(l).forEach(function(f) {
            a([].concat(B(i), [f]), c);
          });
        }
      } else
        r = gt(r, i, l);
    }
    a([]);
  }), r;
}
function cu() {
}
let It = null;
function wg() {
  It = null, Pl();
}
let lu = cu;
process.env.NODE_ENV !== "production" && (lu = (e, t, n) => {
  $e(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && wg();
});
const Gt = lu, uu = /* @__PURE__ */ g.createContext({}), it = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(uu), n = (r, o, a) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = It;
        It || (It = {}), It[e] = It[e] || [], It[e].includes(a || "") || It[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", It);
      } else
        process.env.NODE_ENV !== "production" && Gt(r, e, a);
  };
  return n.deprecated = (r, o, a, i) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = cu, e;
}, $g = /* @__PURE__ */ Qt(void 0);
var Og = {
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
}, Pg = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Tg = T(T({}, Pg), {}, {
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
const du = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Ws = {
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
  }, Tg),
  timePickerLocale: Object.assign({}, du)
}, nt = "${label} is not a valid ${type}", zt = {
  locale: "en",
  Pagination: Og,
  DatePicker: Ws,
  TimePicker: du,
  Calendar: Ws,
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
        string: nt,
        method: nt,
        array: nt,
        object: nt,
        number: nt,
        date: nt,
        boolean: nt,
        integer: nt,
        float: nt,
        regexp: nt,
        email: nt,
        url: nt,
        hex: nt
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
let Kr = Object.assign({}, zt.Modal), Qr = [];
const Gs = () => Qr.reduce((e, t) => Object.assign(Object.assign({}, e), t), zt.Modal);
function Ng(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Qr.push(t), Kr = Gs(), () => {
      Qr = Qr.filter((n) => n !== t), Kr = Gs();
    };
  }
  Kr = Object.assign({}, zt.Modal);
}
function fu() {
  return Kr;
}
const Li = /* @__PURE__ */ Qt(void 0), Eo = (e, t) => {
  const n = g.useContext(Li), r = g.useMemo(() => {
    var a;
    const i = t || zt[e], s = (a = n?.[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), o = g.useMemo(() => {
    const a = n?.locale;
    return n?.exist && !a ? zt.locale : a;
  }, [n]);
  return [r, o];
}, mu = "internalMark", gu = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = it("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(r === mu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => Ng(t?.Modal), [t]);
  const o = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Li.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (gu.displayName = "LocaleProvider");
const Di = {
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
}, Pn = Object.assign(Object.assign({}, Di), {
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
}), ke = Math.round;
function ra(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const qs = (e, t, n) => n === 0 ? e : e / 100;
function zn(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class Ce {
  constructor(t) {
    N(this, "isValid", !0), N(this, "r", 0), N(this, "g", 0), N(this, "b", 0), N(this, "a", 1), N(this, "_h", void 0), N(this, "_s", void 0), N(this, "_l", void 0), N(this, "_v", void 0), N(this, "_max", void 0), N(this, "_min", void 0), N(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return r.startsWith(a);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof Ce)
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
      t === 0 ? this._h = 0 : this._h = ke(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
      r: ke(a("r")),
      g: ke(a("g")),
      b: ke(a("b")),
      a: ke(a("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (a) => ke((this[a] * this.a + n[a] * n.a * (1 - this.a)) / r);
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
      const a = ke(this.a * 255).toString(16);
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
    const t = this.getHue(), n = ke(this.getSaturation() * 100), r = ke(this.getLightness() * 100);
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
      const f = ke(r * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const d = r - l / 2;
    this.r = ke((a + d) * 255), this.g = ke((i + d) * 255), this.b = ke((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const a = ke(r * 255);
    if (this.r = a, this.g = a, this.b = a, n <= 0)
      return;
    const i = t / 60, s = Math.floor(i), c = i - s, l = ke(r * (1 - n) * 255), u = ke(r * (1 - n * c) * 255), d = ke(r * (1 - n * (1 - c)) * 255);
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
    const n = ra(t, qs);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = ra(t, qs);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = ra(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ke(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var jr = 2, Us = 0.16, Rg = 0.05, _g = 0.05, Mg = 0.15, vu = 5, pu = 4, Ig = [{
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
function Xs(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - jr * t : Math.round(e.h) + jr * t : r = n ? Math.round(e.h) + jr * t : Math.round(e.h) - jr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Ys(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Us * t : t === pu ? r = e.s + Us : r = e.s + Rg * t, r > 1 && (r = 1), n && t === vu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Ks(e, t, n) {
  var r;
  return n ? r = e.v + _g * t : r = e.v - Mg * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function en(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new Ce(e), o = r.toHsv(), a = vu; a > 0; a -= 1) {
    var i = new Ce({
      h: Xs(o, a, !0),
      s: Ys(o, a, !0),
      v: Ks(o, a, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= pu; s += 1) {
    var c = new Ce({
      h: Xs(o, s),
      s: Ys(o, s),
      v: Ks(o, s)
    });
    n.push(c);
  }
  return t.theme === "dark" ? Ig.map(function(l) {
    var u = l.index, d = l.amount;
    return new Ce(t.backgroundColor || "#141414").mix(n[u], d).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var oa = {
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
}, Da = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Da.primary = Da[5];
var Va = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Va.primary = Va[5];
var Ha = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ha.primary = Ha[5];
var Ba = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ba.primary = Ba[5];
var za = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
za.primary = za[5];
var Wa = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Wa.primary = Wa[5];
var Ga = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ga.primary = Ga[5];
var qa = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
qa.primary = qa[5];
var io = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
io.primary = io[5];
var Ua = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ua.primary = Ua[5];
var Xa = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Xa.primary = Xa[5];
var Ya = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ya.primary = Ya[5];
var Ka = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Ka.primary = Ka[5];
var aa = {
  red: Da,
  volcano: Va,
  orange: Ha,
  gold: Ba,
  yellow: za,
  lime: Wa,
  green: Ga,
  cyan: qa,
  blue: io,
  geekblue: Ua,
  purple: Xa,
  magenta: Ya,
  grey: Ka
};
function hu(e, {
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
  } = e, u = t(s), d = t(r), f = t(o), h = t(a), v = t(i), p = n(c, l), m = e.colorLink || e.colorInfo, C = t(m), y = new Ce(h[1]).mix(new Ce(h[3]), 50).toHexString();
  return Object.assign(Object.assign({}, p), {
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
    colorErrorBg: h[1],
    colorErrorBgHover: h[2],
    colorErrorBgFilledHover: y,
    colorErrorBgActive: h[3],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
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
    colorBgMask: new Ce("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const Fg = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Ag(e) {
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
  }, Fg(r));
}
const yu = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Zr(e) {
  return (e + 8) / e;
}
function jg(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, a = e * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Zr(n)
  }));
}
const bu = (e) => {
  const t = jg(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], a = n[0], i = n[2], s = r[1], c = r[0], l = r[2];
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
function kg(e) {
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
const ct = (e, t) => new Ce(e).setA(t).toRgbString(), Wn = (e, t) => new Ce(e).darken(t).toHexString(), Lg = (e) => {
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
}, Dg = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ct(r, 0.88),
    colorTextSecondary: ct(r, 0.65),
    colorTextTertiary: ct(r, 0.45),
    colorTextQuaternary: ct(r, 0.25),
    colorFill: ct(r, 0.15),
    colorFillSecondary: ct(r, 0.06),
    colorFillTertiary: ct(r, 0.04),
    colorFillQuaternary: ct(r, 0.02),
    colorBgSolid: ct(r, 1),
    colorBgSolidHover: ct(r, 0.75),
    colorBgSolidActive: ct(r, 0.95),
    colorBgLayout: Wn(n, 4),
    colorBgContainer: Wn(n, 0),
    colorBgElevated: Wn(n, 0),
    colorBgSpotlight: ct(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Wn(n, 15),
    colorBorderSecondary: Wn(n, 6)
  };
};
function wo(e) {
  oa.pink = oa.magenta, aa.pink = aa.magenta;
  const t = Object.keys(Di).map((n) => {
    const r = e[n] === oa[n] ? aa[n] : en(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o[`${n}${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), hu(e, {
    generateColorPalettes: Lg,
    generateNeutralColorPalettes: Dg
  })), bu(e.fontSize)), kg(e)), yu(e)), Ag(e));
}
const Vi = oo(wo), or = {
  token: Pn,
  override: {
    override: Pn
  },
  hashed: !0
}, Hi = /* @__PURE__ */ R.createContext(or), so = "ant", $o = "anticon", Vg = (e, t) => t || (e ? `${so}-${e}` : so), ye = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Vg,
  iconPrefixCls: $o
}), {
  Consumer: L1
} = ye, Qs = {};
function Cu(e) {
  const t = g.useContext(ye), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: Qs,
    styles: Qs
  }, a), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const Hg = `-ant-${Date.now()}-${Math.random()}`;
function Bg(e, t) {
  const n = {}, r = (i, s) => {
    let c = i.clone();
    return c = s?.(c) || c, c.toRgbString();
  }, o = (i, s) => {
    const c = new Ce(i), l = en(c.toRgbString());
    n[`${s}-color`] = r(c), n[`${s}-color-disabled`] = l[1], n[`${s}-color-hover`] = l[4], n[`${s}-color-active`] = l[6], n[`${s}-color-outline`] = c.clone().setA(0.2).toRgbString(), n[`${s}-color-deprecated-bg`] = l[0], n[`${s}-color-deprecated-border`] = l[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new Ce(t.primaryColor), s = en(i.toRgbString());
    s.forEach((l, u) => {
      n[`primary-${u + 1}`] = l;
    }), n["primary-color-deprecated-l-35"] = r(i, (l) => l.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (l) => l.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (l) => l.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (l) => l.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (l) => l.setA(l.a * 0.12));
    const c = new Ce(s[0]);
    n["primary-color-active-deprecated-f-30"] = r(c, (l) => l.setA(l.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(c, (l) => l.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function zg(e, t) {
  const n = Bg(e, t);
  Ze() ? At(n, `${Hg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const co = /* @__PURE__ */ g.createContext(!1), xu = ({
  children: e,
  disabled: t
}) => {
  const n = g.useContext(co);
  return /* @__PURE__ */ g.createElement(co.Provider, {
    value: t ?? n
  }, e);
}, Tn = /* @__PURE__ */ g.createContext(void 0), Wg = ({
  children: e,
  size: t
}) => {
  const n = g.useContext(Tn);
  return /* @__PURE__ */ g.createElement(Tn.Provider, {
    value: t || n
  }, e);
};
function Gg() {
  const e = ae(co), t = ae(Tn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Su = /* @__PURE__ */ De(function e() {
  Le(this, e);
}), Eu = "CALC_UNIT", qg = new RegExp(Eu, "g");
function ia(e) {
  return typeof e == "number" ? "".concat(e).concat(Eu) : e;
}
var Ug = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r, o) {
    var a;
    Le(this, n), a = t.call(this), N(te(a), "result", ""), N(te(a), "unitlessCssVar", void 0), N(te(a), "lowPriority", void 0);
    var i = U(r);
    return a.unitlessCssVar = o, r instanceof n ? a.result = "(".concat(r.result, ")") : i === "number" ? a.result = ia(r) : i === "string" && (a.result = r), a;
  }
  return De(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(ia(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(ia(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(qg, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(Su), Xg = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    var o;
    return Le(this, n), o = t.call(this), N(te(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return De(n, [{
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
})(Su), Yg = function(t, n) {
  var r = t === "css" ? Ug : Xg;
  return function(o) {
    return new r(o, n);
  };
}, Zs = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Pt(e) {
  var t = g.useRef();
  t.current = e;
  var n = g.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function Nn(e) {
  var t = g.useRef(!1), n = g.useState(e), r = L(n, 2), o = r[0], a = r[1];
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
function sa(e) {
  return e !== void 0;
}
function Kg(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = Nn(function() {
    return sa(o) ? o : sa(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = L(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l, f = i ? i(d) : d, h = Pt(a), v = Nn([d]), p = L(v, 2), m = p[0], C = p[1];
  ks(function() {
    var x = m[0];
    l !== x && h(l, x);
  }, [m]), ks(function() {
    sa(o) || u(o);
  }, [o]);
  var y = Pt(function(x, S) {
    u(x, S), C([d], S);
  });
  return [f, y];
}
function Js(e, t, n, r) {
  var o = T({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var a = r.deprecatedTokens;
    a.forEach(function(s) {
      var c = L(s, 2), l = c[0], u = c[1];
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
var wu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Qa = !0;
function bt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!wu)
    return Object.assign.apply(Object, [{}].concat(t));
  Qa = !1;
  var r = {};
  return t.forEach(function(o) {
    if (U(o) === "object") {
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
  }), Qa = !0, r;
}
var ec = {};
function Qg() {
}
var Zg = function(t) {
  var n, r = t, o = Qg;
  return wu && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (Qa) {
        var c;
        (c = n) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    ec[i] = {
      global: Array.from(n),
      component: T(T({}, (c = ec[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function tc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(bt(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Jg(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(a) {
        return ne(a);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(a) {
        return ne(a);
      }).join(","), ")");
    }
  };
}
var ev = 1e3 * 60 * 10, tv = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), N(this, "map", /* @__PURE__ */ new Map()), N(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), N(this, "nextID", 0), N(this, "lastAccessBeat", /* @__PURE__ */ new Map()), N(this, "accessBeat", 0);
  }
  return De(e, [{
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
        return a && U(a) === "object" ? "obj_".concat(r.getObjectID(a)) : "".concat(U(a), "_").concat(a);
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
          r - o > ev && (n.map.delete(a), n.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), nc = new tv();
function nv(e, t) {
  return R.useMemo(function() {
    var n = nc.get(t);
    if (n)
      return n;
    var r = e();
    return nc.set(t, r), r;
  }, t);
}
var rv = function() {
  return {};
};
function ov(e) {
  var t = e.useCSP, n = t === void 0 ? rv : t, r = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(f, h, v, p) {
    var m = Array.isArray(f) ? f[0] : f;
    function C($) {
      return "".concat(String(m)).concat($.slice(0, 1).toUpperCase()).concat($.slice(1));
    }
    var y = p?.unitless || {}, x = typeof s == "function" ? s(f) : {}, S = T(T({}, x), {}, N({}, C("zIndexPopup"), !0));
    Object.keys(y).forEach(function($) {
      S[C($)] = y[$];
    });
    var b = T(T({}, p), {}, {
      unitless: S,
      prefixToken: C
    }), w = u(f, h, v, b), E = l(m, v, b);
    return function($) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $, P = w($, O), _ = L(P, 2), I = _[1], F = E(O), M = L(F, 2), A = M[0], j = M[1];
      return [A, I, j];
    };
  }
  function l(f, h, v) {
    var p = v.unitless, m = v.injectStyle, C = m === void 0 ? !0 : m, y = v.prefixToken, x = v.ignore, S = function(E) {
      var $ = E.rootCls, O = E.cssVar, P = O === void 0 ? {} : O, _ = r(), I = _.realToken;
      return bg({
        path: [f],
        prefix: P.prefix,
        key: P.key,
        unitless: p,
        ignore: x,
        token: I,
        scope: $
      }, function() {
        var F = tc(f, I, h), M = Js(f, I, F, {
          deprecatedTokens: v?.deprecatedTokens
        });
        return Object.keys(F).forEach(function(A) {
          M[y(A)] = M[A], delete M[A];
        }), M;
      }), null;
    }, b = function(E) {
      var $ = r(), O = $.cssVar;
      return [function(P) {
        return C && O ? /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(S, {
          rootCls: E,
          cssVar: O,
          component: f
        }), P) : P;
      }, O?.key];
    };
    return b;
  }
  function u(f, h, v) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(f) ? f : [f, f], C = L(m, 1), y = C[0], x = m.join("-"), S = e.layer || {
      name: "antd"
    };
    return function(b) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, E = r(), $ = E.theme, O = E.realToken, P = E.hashId, _ = E.token, I = E.cssVar, F = o(), M = F.rootPrefixCls, A = F.iconPrefixCls, j = n(), k = I ? "css" : "js", W = nv(function() {
        var X = /* @__PURE__ */ new Set();
        return I && Object.keys(p.unitless || {}).forEach(function(G) {
          X.add(Gr(G, I.prefix)), X.add(Gr(G, Zs(y, I.prefix)));
        }), Yg(k, X);
      }, [k, y, I?.prefix]), H = Jg(k), Q = H.max, Z = H.min, K = {
        theme: $,
        token: _,
        hashId: P,
        nonce: function() {
          return j.nonce;
        },
        clientOnly: p.clientOnly,
        layer: S,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof a == "function" && La(T(T({}, K), {}, {
        clientOnly: !1,
        path: ["Shared", M]
      }), function() {
        return a(_, {
          prefix: {
            rootPrefixCls: M,
            iconPrefixCls: A
          },
          csp: j
        });
      });
      var Y = La(T(T({}, K), {}, {
        path: [x, b, A]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var X = Zg(_), G = X.token, q = X.flush, oe = tc(y, O, v), Pe = ".".concat(b), be = Js(y, O, oe, {
          deprecatedTokens: p.deprecatedTokens
        });
        I && oe && U(oe) === "object" && Object.keys(oe).forEach(function(ve) {
          oe[ve] = "var(".concat(Gr(ve, Zs(y, I.prefix)), ")");
        });
        var xe = bt(G, {
          componentCls: Pe,
          prefixCls: b,
          iconCls: ".".concat(A),
          antCls: ".".concat(M),
          calc: W,
          // @ts-ignore
          max: Q,
          // @ts-ignore
          min: Z
        }, I ? oe : be), Se = h(xe, {
          hashId: P,
          prefixCls: b,
          rootPrefixCls: M,
          iconPrefixCls: A
        });
        q(y, be);
        var V = typeof i == "function" ? i(xe, b, w, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : V, Se];
      });
      return [Y, P];
    };
  }
  function d(f, h, v) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = u(f, h, v, T({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), C = function(x) {
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
const Bi = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], av = "5.28.0";
function ca(e) {
  return e >= 0 && e <= 255;
}
function qn(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new Ce(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: c
  } = new Ce(t).toRgb();
  for (let l = 0.01; l <= 1; l += 0.01) {
    const u = Math.round((n - i * (1 - l)) / l), d = Math.round((r - s * (1 - l)) / l), f = Math.round((o - c * (1 - l)) / l);
    if (ca(u) && ca(d) && ca(f))
      return new Ce({
        r: u,
        g: d,
        b: f,
        a: Math.round(l * 100) / 100
      }).toRgbString();
  }
  return new Ce({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var iv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function zi(e) {
  const {
    override: t
  } = e, n = iv(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Pn).forEach((f) => {
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
      0 1px 2px -2px ${new Ce("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new Ce("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new Ce("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var rc = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const $u = {
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
}, sv = {
  motionBase: !0,
  motionUnit: !0
}, cv = {
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
}, Ou = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, a = rc(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = zi(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = rc(c, ["theme"]);
    let d = u;
    l && (d = Ou(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = d;
  }), i;
};
function Nt() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = R.useContext(Hi), a = `${av}-${t || ""}`, i = n || Vi, [s, c, l] = Wm(i, [Pn, e], {
    salt: a,
    override: r,
    getComputedToken: Ou,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: zi,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: $u,
      ignore: sv,
      preserve: cv
    }
  });
  return [i, l, t ? c : "", s, o];
}
const Wi = (e, t = !1) => ({
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
}), Pu = () => ({
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
}), lv = () => ({
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
}), uv = (e) => ({
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
}), dv = (e, t, n, r) => {
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
}, fv = (e, t) => ({
  outline: `${ne(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Gi = (e, t) => ({
  "&:focus-visible": fv(e, t)
}), Tu = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Pu()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: rn,
  genComponentStyleHook: mv,
  genSubStyleComponent: qi
} = ov({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = ae(ye);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = Nt();
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
    } = ae(ye);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = uv(e);
    return [r, {
      "&": r
    }, Tu((n = t?.prefix.iconPrefixCls) !== null && n !== void 0 ? n : $o)];
  },
  getCommonStyle: dv,
  getCompUnitless: () => $u
}), gv = (e, t) => {
  const [n, r] = Nt();
  return La({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => Tu(e));
}, vv = Object.assign({}, g), {
  useId: oc
} = vv, pv = () => "", hv = typeof oc > "u" ? pv : oc;
function yv(e, t, n) {
  var r, o;
  const a = it("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, or), {
    hashed: (r = t?.hashed) !== null && r !== void 0 ? r : or.hashed,
    cssVar: t?.cssVar
  }) : t, c = hv();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && a(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ho(() => {
    var l, u;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((v) => {
      d[v] = Object.assign(Object.assign({}, d[v]), e.components[v]);
    });
    const f = `css-var-${c.replace(/:/g, "")}`, h = ((l = i.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n?.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: d,
      cssVar: h
    });
  }, [i, s], (l, u) => l.some((d, f) => {
    const h = u[f];
    return !nr(d, h, !0);
  }));
}
var bv = ["children"], Nu = /* @__PURE__ */ g.createContext({});
function Cv(e) {
  var t = e.children, n = We(e, bv);
  return /* @__PURE__ */ g.createElement(Nu.Provider, {
    value: n
  }, t);
}
var xv = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n() {
    return Le(this, n), t.apply(this, arguments);
  }
  return De(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(g.Component);
function Sv(e) {
  var t = g.useReducer(function(s) {
    return s + 1;
  }, 0), n = L(t, 2), r = n[1], o = g.useRef(e), a = Pt(function() {
    return o.current;
  }), i = Pt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, r();
  });
  return [a, i];
}
var Lt = "none", kr = "appear", Lr = "enter", Dr = "leave", ac = "none", vt = "prepare", vn = "start", pn = "active", Ui = "end", Ru = "prepared";
function ic(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Ev(e, t) {
  var n = {
    animationend: ic("Animation", "AnimationEnd"),
    transitionend: ic("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var wv = Ev(Ze(), typeof window < "u" ? window : {}), _u = {};
if (Ze()) {
  var $v = document.createElement("div");
  _u = $v.style;
}
var Vr = {};
function Mu(e) {
  if (Vr[e])
    return Vr[e];
  var t = wv[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in _u)
        return Vr[e] = t[a], Vr[e];
    }
  return "";
}
var Iu = Mu("animationend"), Fu = Mu("transitionend"), Au = !!(Iu && Fu), sc = Iu || "animationend", cc = Fu || "transitionend";
function lc(e, t) {
  if (!e) return null;
  if (U(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const Ov = (function(e) {
  var t = me();
  function n(o) {
    o && (o.removeEventListener(cc, e), o.removeEventListener(sc, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(cc, e), o.addEventListener(sc, e), t.current = o);
  }
  return g.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var ju = Ze() ? Pa : Ye;
const Pv = (function() {
  var e = g.useRef(null);
  function t() {
    Bt.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = Bt(function() {
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
var Tv = [vt, vn, pn, Ui], Nv = [vt, Ru], ku = !1, Rv = !0;
function Lu(e) {
  return e === pn || e === Ui;
}
const _v = (function(e, t, n) {
  var r = Nn(ac), o = L(r, 2), a = o[0], i = o[1], s = Pv(), c = L(s, 2), l = c[0], u = c[1];
  function d() {
    i(vt, !0);
  }
  var f = t ? Nv : Tv;
  return ju(function() {
    if (a !== ac && a !== Ui) {
      var h = f.indexOf(a), v = f[h + 1], p = n(a);
      p === ku ? i(v, !0) : v && l(function(m) {
        function C() {
          m.isCanceled() || i(v, !0);
        }
        p === !0 ? C() : Promise.resolve(p).then(C);
      });
    }
  }, [e, a]), g.useEffect(function() {
    return function() {
      u();
    };
  }, []), [d, a];
});
function Mv(e, t, n, r) {
  var o = r.motionEnter, a = o === void 0 ? !0 : o, i = r.motionAppear, s = i === void 0 ? !0 : i, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, d = r.motionLeaveImmediately, f = r.onAppearPrepare, h = r.onEnterPrepare, v = r.onLeavePrepare, p = r.onAppearStart, m = r.onEnterStart, C = r.onLeaveStart, y = r.onAppearActive, x = r.onEnterActive, S = r.onLeaveActive, b = r.onAppearEnd, w = r.onEnterEnd, E = r.onLeaveEnd, $ = r.onVisibleChanged, O = Nn(), P = L(O, 2), _ = P[0], I = P[1], F = Sv(Lt), M = L(F, 2), A = M[0], j = M[1], k = Nn(null), W = L(k, 2), H = W[0], Q = W[1], Z = A(), K = me(!1), Y = me(null);
  function X() {
    return n();
  }
  var G = me(!1);
  function q() {
    j(Lt), Q(null, !0);
  }
  var oe = Pt(function(Ee) {
    var Oe = A();
    if (Oe !== Lt) {
      var Ge = X();
      if (!(Ee && !Ee.deadline && Ee.target !== Ge)) {
        var Je = G.current, qe;
        Oe === kr && Je ? qe = b?.(Ge, Ee) : Oe === Lr && Je ? qe = w?.(Ge, Ee) : Oe === Dr && Je && (qe = E?.(Ge, Ee)), Je && qe !== !1 && q();
      }
    }
  }), Pe = Ov(oe), be = L(Pe, 1), xe = be[0], Se = function(Oe) {
    switch (Oe) {
      case kr:
        return N(N(N({}, vt, f), vn, p), pn, y);
      case Lr:
        return N(N(N({}, vt, h), vn, m), pn, x);
      case Dr:
        return N(N(N({}, vt, v), vn, C), pn, S);
      default:
        return {};
    }
  }, V = g.useMemo(function() {
    return Se(Z);
  }, [Z]), ve = _v(Z, !e, function(Ee) {
    if (Ee === vt) {
      var Oe = V[vt];
      return Oe ? Oe(X()) : ku;
    }
    if (ie in V) {
      var Ge;
      Q(((Ge = V[ie]) === null || Ge === void 0 ? void 0 : Ge.call(V, X(), null)) || null);
    }
    return ie === pn && Z !== Lt && (xe(X()), u > 0 && (clearTimeout(Y.current), Y.current = setTimeout(function() {
      oe({
        deadline: !0
      });
    }, u))), ie === Ru && q(), Rv;
  }), D = L(ve, 2), ee = D[0], ie = D[1], Qe = Lu(ie);
  G.current = Qe;
  var he = me(null);
  ju(function() {
    if (!(K.current && he.current === t)) {
      I(t);
      var Ee = K.current;
      K.current = !0;
      var Oe;
      !Ee && t && s && (Oe = kr), Ee && t && a && (Oe = Lr), (Ee && !t && l || !Ee && d && !t && l) && (Oe = Dr);
      var Ge = Se(Oe);
      Oe && (e || Ge[vt]) ? (j(Oe), ee()) : j(Lt), he.current = t;
    }
  }, [t]), Ye(function() {
    // Cancel appear
    (Z === kr && !s || // Cancel enter
    Z === Lr && !a || // Cancel leave
    Z === Dr && !l) && j(Lt);
  }, [s, a, l]), Ye(function() {
    return function() {
      K.current = !1, clearTimeout(Y.current);
    };
  }, []);
  var Ve = g.useRef(!1);
  Ye(function() {
    _ && (Ve.current = !0), _ !== void 0 && Z === Lt && ((Ve.current || _) && $?.(_), Ve.current = !0);
  }, [_, Z]);
  var Fe = H;
  return V[vt] && ie === vn && (Fe = T({
    transition: "none"
  }, Fe)), [Z, ie, Fe, _ ?? t];
}
function Iv(e) {
  var t = e;
  U(e) === "object" && (t = e.transitionSupport);
  function n(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var r = /* @__PURE__ */ g.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, d = o.children, f = o.motionName, h = o.leavedClassName, v = o.eventProps, p = g.useContext(Nu), m = p.motion, C = n(o, m), y = me(), x = me();
    function S() {
      try {
        return y.current instanceof HTMLElement ? y.current : om(x.current);
      } catch {
        return null;
      }
    }
    var b = Mv(C, s, S, o), w = L(b, 4), E = w[0], $ = w[1], O = w[2], P = w[3], _ = g.useRef(P);
    P && (_.current = !0);
    var I = g.useCallback(function(W) {
      y.current = W, Rl(a, W);
    }, [a]), F, M = T(T({}, v), {}, {
      visible: s
    });
    if (!d)
      F = null;
    else if (E === Lt)
      P ? F = d(T({}, M), I) : !l && _.current && h ? F = d(T(T({}, M), {}, {
        className: h
      }), I) : u || !l && !h ? F = d(T(T({}, M), {}, {
        style: {
          display: "none"
        }
      }), I) : F = null;
    else {
      var A;
      $ === vt ? A = "prepare" : Lu($) ? A = "active" : $ === vn && (A = "start");
      var j = lc(f, "".concat(E, "-").concat(A));
      F = d(T(T({}, M), {}, {
        className: z(lc(f, E), N(N({}, j, j && A), f, typeof f == "string")),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ g.isValidElement(F) && Ni(F)) {
      var k = Ml(F);
      k || (F = /* @__PURE__ */ g.cloneElement(F, {
        ref: I
      }));
    }
    return /* @__PURE__ */ g.createElement(xv, {
      ref: x
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const mr = Iv(Au);
var Za = "add", Ja = "keep", ei = "remove", la = "removed";
function Fv(e) {
  var t;
  return e && U(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, T(T({}, t), {}, {
    key: String(t.key)
  });
}
function ti() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Fv);
}
function Av() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, a = ti(e), i = ti(t);
  a.forEach(function(l) {
    for (var u = !1, d = r; d < o; d += 1) {
      var f = i[d];
      if (f.key === l.key) {
        r < d && (n = n.concat(i.slice(r, d).map(function(h) {
          return T(T({}, h), {}, {
            status: Za
          });
        })), r = d), n.push(T(T({}, f), {}, {
          status: Ja
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(T(T({}, l), {}, {
      status: ei
    }));
  }), r < o && (n = n.concat(i.slice(r).map(function(l) {
    return T(T({}, l), {}, {
      status: Za
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
      return d !== l || f !== ei;
    }), n.forEach(function(u) {
      u.key === l && (u.status = Ja);
    });
  }), n;
}
var jv = ["component", "children", "onVisibleChanged", "onAllRemoved"], kv = ["status"], Lv = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Dv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mr, n = /* @__PURE__ */ (function(r) {
    tn(a, r);
    var o = nn(a);
    function a() {
      var i;
      Le(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), N(te(i), "state", {
        keyEntities: []
      }), N(te(i), "removeKey", function(u) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(h) {
            return h.key !== u ? h : T(T({}, h), {}, {
              status: la
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(h) {
            var v = h.status;
            return v !== la;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return De(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, d = l.children, f = l.onVisibleChanged;
        l.onAllRemoved;
        var h = We(l, jv), v = u || g.Fragment, p = {};
        return Lv.forEach(function(m) {
          p[m] = h[m], delete h[m];
        }), delete h.keys, /* @__PURE__ */ g.createElement(v, h, c.map(function(m, C) {
          var y = m.status, x = We(m, kv), S = y === Za || y === Ja;
          return /* @__PURE__ */ g.createElement(t, ge({}, p, {
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
        var l = s.keys, u = c.keyEntities, d = ti(l), f = Av(u, d);
        return {
          keyEntities: f.filter(function(h) {
            var v = u.find(function(p) {
              var m = p.key;
              return h.key === m;
            });
            return !(v && v.status === la && h.status === ei);
          })
        };
      }
    }]), a;
  })(g.Component);
  return N(n, "defaultProps", {
    component: "div"
  }), n;
}
const Vv = Dv(Au), ni = /* @__PURE__ */ g.createContext(!0);
process.env.NODE_ENV !== "production" && (ni.displayName = "MotionCacheContext");
function Hv(e) {
  const t = g.useContext(ni), {
    children: n
  } = e, [, r] = Nt(), {
    motion: o
  } = r, a = g.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ g.createElement(ni.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement(Cv, {
    motion: o
  }, n)) : n;
}
const Du = /* @__PURE__ */ g.memo(({
  dropdownMatchSelectWidth: e
}) => (it("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Du.displayName = "PropWarning");
const Bv = process.env.NODE_ENV !== "production" ? Du : () => null;
var zv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let ri = !1;
const Xi = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && Gt(!ri, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Wv = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let lo, Vu, Hu, Bu;
function Jr() {
  return lo || so;
}
function Gv() {
  return Vu || $o;
}
function qv(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Uv = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (lo = t), n !== void 0 && (Vu = n), "holderRender" in e && (Bu = o), r && (qv(r) ? (process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), zg(Jr(), r)) : Hu = r);
}, gr = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Jr()}-${e}` : Jr()),
  getIconPrefixCls: Gv,
  getRootPrefixCls: () => lo || Jr(),
  getTheme: () => Hu,
  holderRender: Bu
}), Xv = (e) => {
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
    dropdownMatchSelectWidth: h,
    popupMatchSelectWidth: v,
    popupOverflow: p,
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
    checkbox: F,
    descriptions: M,
    divider: A,
    drawer: j,
    skeleton: k,
    steps: W,
    image: H,
    layout: Q,
    list: Z,
    mentions: K,
    modal: Y,
    progress: X,
    result: G,
    slider: q,
    breadcrumb: oe,
    menu: Pe,
    pagination: be,
    input: xe,
    textArea: Se,
    empty: V,
    badge: ve,
    radio: D,
    rate: ee,
    switch: ie,
    transfer: Qe,
    avatar: he,
    message: Ve,
    tag: Fe,
    table: Ee,
    card: Oe,
    tabs: Ge,
    timeline: Je,
    timePicker: qe,
    upload: sn,
    notification: Sr,
    tree: Yo,
    colorPicker: Vn,
    datePicker: Er,
    rangePicker: wr,
    flex: $r,
    wave: Or,
    dropdown: Pr,
    warning: Tr,
    tour: Hn,
    tooltip: Ne,
    popover: mt,
    popconfirm: Bn,
    floatButton: Ff,
    floatButtonGroup: Af,
    variant: jf,
    inputNumber: kf,
    treeSelect: Lf
  } = e, ps = g.useCallback((_e, Be) => {
    const {
      prefixCls: Ct
    } = e;
    if (Be)
      return Be;
    const xt = Ct || C.getPrefixCls("");
    return _e ? `${xt}-${_e}` : xt;
  }, [C.getPrefixCls, e.prefixCls]), Nr = y || C.iconPrefixCls || $o, Rr = n || C.csp;
  gv(Nr, Rr);
  const _r = yv(x, C.theme, {
    prefixCls: ps("")
  });
  process.env.NODE_ENV !== "production" && (ri = ri || !!_r);
  const Ko = {
    csp: Rr,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    locale: s || m,
    direction: l,
    space: u,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: v ?? h,
    popupOverflow: p,
    getPrefixCls: ps,
    iconPrefixCls: Nr,
    theme: _r,
    segmented: b,
    statistic: w,
    spin: E,
    calendar: $,
    carousel: O,
    cascader: P,
    collapse: _,
    typography: I,
    checkbox: F,
    descriptions: M,
    divider: A,
    drawer: j,
    skeleton: k,
    steps: W,
    image: H,
    input: xe,
    textArea: Se,
    layout: Q,
    list: Z,
    mentions: K,
    modal: Y,
    progress: X,
    result: G,
    slider: q,
    breadcrumb: oe,
    menu: Pe,
    pagination: be,
    empty: V,
    badge: ve,
    radio: D,
    rate: ee,
    switch: ie,
    transfer: Qe,
    avatar: he,
    message: Ve,
    tag: Fe,
    table: Ee,
    card: Oe,
    tabs: Ge,
    timeline: Je,
    timePicker: qe,
    upload: sn,
    notification: Sr,
    tree: Yo,
    colorPicker: Vn,
    datePicker: Er,
    rangePicker: wr,
    flex: $r,
    wave: Or,
    dropdown: Pr,
    warning: Tr,
    tour: Hn,
    tooltip: Ne,
    popover: mt,
    popconfirm: Bn,
    floatButton: Ff,
    floatButtonGroup: Af,
    variant: jf,
    inputNumber: kf,
    treeSelect: Lf
  };
  process.env.NODE_ENV !== "production" && it("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const cn = Object.assign({}, C);
  Object.keys(Ko).forEach((_e) => {
    Ko[_e] !== void 0 && (cn[_e] = Ko[_e]);
  }), Wv.forEach((_e) => {
    const Be = e[_e];
    Be && (cn[_e] = Be);
  }), typeof r < "u" && (cn.button = Object.assign({
    autoInsertSpace: r
  }, cn.button));
  const ln = ho(() => cn, cn, (_e, Be) => {
    const Ct = Object.keys(_e), xt = Object.keys(Be);
    return Ct.length !== xt.length || Ct.some((Mr) => _e[Mr] !== Be[Mr]);
  }), {
    layer: hs
  } = g.useContext(Jt), Df = g.useMemo(() => ({
    prefixCls: Nr,
    csp: Rr,
    layer: hs ? "antd" : void 0
  }), [Nr, Rr, hs]);
  let He = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Bv, {
    dropdownMatchSelectWidth: h
  }), t);
  const ys = g.useMemo(() => {
    var _e, Be, Ct, xt;
    return gn(((_e = zt.Form) === null || _e === void 0 ? void 0 : _e.defaultValidateMessages) || {}, ((Ct = (Be = ln.locale) === null || Be === void 0 ? void 0 : Be.Form) === null || Ct === void 0 ? void 0 : Ct.defaultValidateMessages) || {}, ((xt = ln.form) === null || xt === void 0 ? void 0 : xt.validateMessages) || {}, i?.validateMessages || {});
  }, [ln, i?.validateMessages]);
  Object.keys(ys).length > 0 && (He = /* @__PURE__ */ g.createElement($g.Provider, {
    value: ys
  }, He)), s && (He = /* @__PURE__ */ g.createElement(gu, {
    locale: s,
    _ANT_MARK__: mu
  }, He)), He = /* @__PURE__ */ g.createElement(ki.Provider, {
    value: Df
  }, He), c && (He = /* @__PURE__ */ g.createElement(Wg, {
    size: c
  }, He)), He = /* @__PURE__ */ g.createElement(Hv, null, He);
  const Vf = g.useMemo(() => {
    const _e = _r || {}, {
      algorithm: Be,
      token: Ct,
      components: xt,
      cssVar: Mr
    } = _e, Hf = zv(_e, ["algorithm", "token", "components", "cssVar"]), bs = Be && (!Array.isArray(Be) || Be.length > 0) ? oo(Be) : Vi, Qo = {};
    Object.entries(xt || {}).forEach(([Bf, zf]) => {
      const Mt = Object.assign({}, zf);
      "algorithm" in Mt && (Mt.algorithm === !0 ? Mt.theme = bs : (Array.isArray(Mt.algorithm) || typeof Mt.algorithm == "function") && (Mt.theme = oo(Mt.algorithm)), delete Mt.algorithm), Qo[Bf] = Mt;
    });
    const Cs = Object.assign(Object.assign({}, Pn), Ct);
    return Object.assign(Object.assign({}, Hf), {
      theme: bs,
      token: Cs,
      components: Qo,
      override: Object.assign({
        override: Cs
      }, Qo),
      cssVar: Mr
    });
  }, [_r]);
  return x && (He = /* @__PURE__ */ g.createElement(Hi.Provider, {
    value: Vf
  }, He)), ln.warning && (He = /* @__PURE__ */ g.createElement(uu.Provider, {
    value: ln.warning
  }, He)), S !== void 0 && (He = /* @__PURE__ */ g.createElement(xu, {
    disabled: S
  }, He)), /* @__PURE__ */ g.createElement(ye.Provider, {
    value: ln
  }, He);
}, tt = (e) => {
  const t = g.useContext(ye), n = g.useContext(Li);
  return /* @__PURE__ */ g.createElement(Xv, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
tt.ConfigContext = ye;
tt.SizeContext = Tn;
tt.config = Uv;
tt.useConfig = Gg;
Object.defineProperty(tt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Tn)
});
process.env.NODE_ENV !== "production" && (tt.displayName = "ConfigProvider");
var Yv = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function zu(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Kv(e) {
  return zu(e) instanceof ShadowRoot;
}
function Qv(e) {
  return Kv(e) ? zu(e) : null;
}
function Zv(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function Jv(e, t) {
  $e(e, "[@ant-design/icons] ".concat(t));
}
function uc(e) {
  return U(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (U(e.icon) === "object" || typeof e.icon == "function");
}
function dc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[Zv(n)] = r;
    }
    return t;
  }, {});
}
function oi(e, t, n) {
  return n ? /* @__PURE__ */ R.createElement(e.tag, T(T({
    key: t
  }, dc(e.attrs)), n), (e.children || []).map(function(r, o) {
    return oi(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ R.createElement(e.tag, T({
    key: t
  }, dc(e.attrs)), (e.children || []).map(function(r, o) {
    return oi(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Wu(e) {
  return en(e)[0];
}
function Gu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var ep = `
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
`, tp = function(t) {
  var n = ae(ki), r = n.csp, o = n.prefixCls, a = n.layer, i = ep;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Ye(function() {
    var s = t.current, c = Qv(s);
    At(i, "@ant-design-icons", {
      prepend: !a,
      csp: r,
      attachTo: c
    });
  }, []);
}, np = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Yn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function rp(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Yn.primaryColor = t, Yn.secondaryColor = n || Wu(t), Yn.calculated = !!n;
}
function op() {
  return T({}, Yn);
}
var Fn = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, c = We(t, np), l = g.useRef(), u = Yn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || Wu(i)
  }), tp(l), Jv(uc(n), "icon should be icon definiton, but got ".concat(n)), !uc(n))
    return null;
  var d = n;
  return d && typeof d.icon == "function" && (d = T(T({}, d), {}, {
    icon: d.icon(u.primaryColor, u.secondaryColor)
  })), oi(d.icon, "svg-".concat(d.name), T(T({
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
Fn.getTwoToneColors = op;
Fn.setTwoToneColors = rp;
function qu(e) {
  var t = Gu(e), n = L(t, 2), r = n[0], o = n[1];
  return Fn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function ap() {
  var e = Fn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var ip = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
qu(io.primary);
var Rt = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = We(e, ip), u = g.useContext(ki), d = u.prefixCls, f = d === void 0 ? "anticon" : d, h = u.rootClassName, v = z(h, f, N(N({}, "".concat(f, "-").concat(r.name), !!r.name), "".concat(f, "-spin"), !!o || r.name === "loading"), n), p = i;
  p === void 0 && s && (p = -1);
  var m = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, C = Gu(c), y = L(C, 2), x = y[0], S = y[1];
  return /* @__PURE__ */ g.createElement("span", ge({
    role: "img",
    "aria-label": r.name
  }, l, {
    ref: t,
    tabIndex: p,
    onClick: s,
    className: v
  }), /* @__PURE__ */ g.createElement(Fn, {
    icon: r,
    primaryColor: x,
    secondaryColor: S,
    style: m
  }));
});
Rt.displayName = "AntdIcon";
Rt.getTwoToneColor = ap;
Rt.setTwoToneColor = qu;
var sp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: Yv
  }));
}, Oo = /* @__PURE__ */ g.forwardRef(sp);
process.env.NODE_ENV !== "production" && (Oo.displayName = "CheckCircleFilled");
var cp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, lp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: cp
  }));
}, Po = /* @__PURE__ */ g.forwardRef(lp);
process.env.NODE_ENV !== "production" && (Po.displayName = "CloseCircleFilled");
var up = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, dp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: up
  }));
}, An = /* @__PURE__ */ g.forwardRef(dp);
process.env.NODE_ENV !== "production" && (An.displayName = "CloseOutlined");
var fp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, mp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: fp
  }));
}, To = /* @__PURE__ */ g.forwardRef(mp);
process.env.NODE_ENV !== "production" && (To.displayName = "ExclamationCircleFilled");
var gp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, vp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: gp
  }));
}, No = /* @__PURE__ */ g.forwardRef(vp);
process.env.NODE_ENV !== "production" && (No.displayName = "InfoCircleFilled");
var pp = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, hp = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, yp = "".concat(pp, " ").concat(hp).split(/[\s\n]+/), bp = "aria-", Cp = "data-";
function fc(e, t) {
  return e.indexOf(t) === 0;
}
function Ro(e) {
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
    (n.aria && (o === "role" || fc(o, bp)) || // Data
    n.data && fc(o, Cp) || // Attr
    n.attr && yp.includes(o)) && (r[o] = e[o]);
  }), r;
}
function xp(e) {
  return e && /* @__PURE__ */ R.isValidElement(e) && e.type === R.Fragment;
}
const Sp = (e, t, n) => /* @__PURE__ */ R.isValidElement(e) ? /* @__PURE__ */ R.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Uu(e, t) {
  return Sp(e, e, t);
}
const jn = (e) => {
  const [, , , , t] = Nt();
  return t ? `${e}-css-var` : "";
};
var ai = {
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
}, Yi = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.className, a = e.duration, i = a === void 0 ? 4.5 : a, s = e.showProgress, c = e.pauseOnHover, l = c === void 0 ? !0 : c, u = e.eventKey, d = e.content, f = e.closable, h = e.closeIcon, v = h === void 0 ? "x" : h, p = e.props, m = e.onClick, C = e.onNoticeClose, y = e.times, x = e.hovering, S = g.useState(!1), b = L(S, 2), w = b[0], E = b[1], $ = g.useState(0), O = L($, 2), P = O[0], _ = O[1], I = g.useState(0), F = L(I, 2), M = F[0], A = F[1], j = x || w, k = i > 0 && s, W = function() {
    C(u);
  }, H = function(G) {
    (G.key === "Enter" || G.code === "Enter" || G.keyCode === ai.ENTER) && W();
  };
  g.useEffect(function() {
    if (!j && i > 0) {
      var X = Date.now() - M, G = setTimeout(function() {
        W();
      }, i * 1e3 - M);
      return function() {
        l && clearTimeout(G), A(Date.now() - X);
      };
    }
  }, [i, j, y]), g.useEffect(function() {
    if (!j && k && (l || M === 0)) {
      var X = performance.now(), G, q = function oe() {
        cancelAnimationFrame(G), G = requestAnimationFrame(function(Pe) {
          var be = Pe + M - X, xe = Math.min(be / (i * 1e3), 1);
          _(xe * 100), xe < 1 && oe();
        });
      };
      return q(), function() {
        l && cancelAnimationFrame(G);
      };
    }
  }, [i, M, j, k, y]);
  var Q = g.useMemo(function() {
    return U(f) === "object" && f !== null ? f : f ? {
      closeIcon: v
    } : {};
  }, [f, v]), Z = Ro(Q, !0), K = 100 - (!P || P < 0 ? 0 : P > 100 ? 100 : P), Y = "".concat(n, "-notice");
  return /* @__PURE__ */ g.createElement("div", ge({}, p, {
    ref: t,
    className: z(Y, o, N({}, "".concat(Y, "-closable"), f)),
    style: r,
    onMouseEnter: function(G) {
      var q;
      E(!0), p == null || (q = p.onMouseEnter) === null || q === void 0 || q.call(p, G);
    },
    onMouseLeave: function(G) {
      var q;
      E(!1), p == null || (q = p.onMouseLeave) === null || q === void 0 || q.call(p, G);
    },
    onClick: m
  }), /* @__PURE__ */ g.createElement("div", {
    className: "".concat(Y, "-content")
  }, d), f && /* @__PURE__ */ g.createElement("a", ge({
    tabIndex: 0,
    className: "".concat(Y, "-close"),
    onKeyDown: H,
    "aria-label": "Close"
  }, Z, {
    onClick: function(G) {
      G.preventDefault(), G.stopPropagation(), W();
    }
  }), Q.closeIcon), k && /* @__PURE__ */ g.createElement("progress", {
    className: "".concat(Y, "-progress"),
    max: "100",
    value: K
  }, K + "%"));
}), Xu = /* @__PURE__ */ R.createContext({}), Yu = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ R.createElement(Xu.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, mc = 8, gc = 3, vc = 16, Ep = function(t) {
  var n = {
    offset: mc,
    threshold: gc,
    gap: vc
  };
  if (t && U(t) === "object") {
    var r, o, a;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : mc, n.threshold = (o = t.threshold) !== null && o !== void 0 ? o : gc, n.gap = (a = t.gap) !== null && a !== void 0 ? a : vc;
  }
  return [!!t, n];
}, wp = ["className", "style", "classNames", "styles"], Ku = function(t) {
  var n = t.configList, r = t.placement, o = t.prefixCls, a = t.className, i = t.style, s = t.motion, c = t.onAllNoticeRemoved, l = t.onNoticeClose, u = t.stack, d = ae(Xu), f = d.classNames, h = me({}), v = Zt(null), p = L(v, 2), m = p[0], C = p[1], y = Zt([]), x = L(y, 2), S = x[0], b = x[1], w = n.map(function(j) {
    return {
      config: j,
      key: String(j.key)
    };
  }), E = Ep(u), $ = L(E, 2), O = $[0], P = $[1], _ = P.offset, I = P.threshold, F = P.gap, M = O && (S.length > 0 || w.length <= I), A = typeof s == "function" ? s(r) : s;
  return Ye(function() {
    O && S.length > 1 && b(function(j) {
      return j.filter(function(k) {
        return w.some(function(W) {
          var H = W.key;
          return k === H;
        });
      });
    });
  }, [S, w, O]), Ye(function() {
    var j;
    if (O && h.current[(j = w[w.length - 1]) === null || j === void 0 ? void 0 : j.key]) {
      var k;
      C(h.current[(k = w[w.length - 1]) === null || k === void 0 ? void 0 : k.key]);
    }
  }, [w, O]), /* @__PURE__ */ R.createElement(Vv, ge({
    key: r,
    className: z(o, "".concat(o, "-").concat(r), f?.list, a, N(N({}, "".concat(o, "-stack"), !!O), "".concat(o, "-stack-expanded"), M)),
    style: i,
    keys: w,
    motionAppear: !0
  }, A, {
    onAllRemoved: function() {
      c(r);
    }
  }), function(j, k) {
    var W = j.config, H = j.className, Q = j.style, Z = j.index, K = W, Y = K.key, X = K.times, G = String(Y), q = W, oe = q.className, Pe = q.style, be = q.classNames, xe = q.styles, Se = We(q, wp), V = w.findIndex(function(Je) {
      return Je.key === G;
    }), ve = {};
    if (O) {
      var D = w.length - 1 - (V > -1 ? V : Z - 1), ee = r === "top" || r === "bottom" ? "-50%" : "0";
      if (D > 0) {
        var ie, Qe, he;
        ve.height = M ? (ie = h.current[G]) === null || ie === void 0 ? void 0 : ie.offsetHeight : m?.offsetHeight;
        for (var Ve = 0, Fe = 0; Fe < D; Fe++) {
          var Ee;
          Ve += ((Ee = h.current[w[w.length - 1 - Fe].key]) === null || Ee === void 0 ? void 0 : Ee.offsetHeight) + F;
        }
        var Oe = (M ? Ve : D * _) * (r.startsWith("top") ? 1 : -1), Ge = !M && m !== null && m !== void 0 && m.offsetWidth && (Qe = h.current[G]) !== null && Qe !== void 0 && Qe.offsetWidth ? (m?.offsetWidth - _ * 2 * (D < 3 ? D : 3)) / ((he = h.current[G]) === null || he === void 0 ? void 0 : he.offsetWidth) : 1;
        ve.transform = "translate3d(".concat(ee, ", ").concat(Oe, "px, 0) scaleX(").concat(Ge, ")");
      } else
        ve.transform = "translate3d(".concat(ee, ", 0, 0)");
    }
    return /* @__PURE__ */ R.createElement("div", {
      ref: k,
      className: z("".concat(o, "-notice-wrapper"), H, be?.wrapper),
      style: T(T(T({}, Q), ve), xe?.wrapper),
      onMouseEnter: function() {
        return b(function(qe) {
          return qe.includes(G) ? qe : [].concat(B(qe), [G]);
        });
      },
      onMouseLeave: function() {
        return b(function(qe) {
          return qe.filter(function(sn) {
            return sn !== G;
          });
        });
      }
    }, /* @__PURE__ */ R.createElement(Yi, ge({}, Se, {
      ref: function(qe) {
        V > -1 ? h.current[G] = qe : delete h.current[G];
      },
      prefixCls: o,
      classNames: be,
      styles: xe,
      className: z(oe, f?.notice),
      style: Pe,
      times: X,
      key: Y,
      eventKey: Y,
      onNoticeClose: l,
      hovering: O && S.length > 0
    })));
  });
};
process.env.NODE_ENV !== "production" && (Ku.displayName = "NoticeList");
var Qu = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, o = e.container, a = e.motion, i = e.maxCount, s = e.className, c = e.style, l = e.onAllRemoved, u = e.stack, d = e.renderNotifications, f = g.useState([]), h = L(f, 2), v = h[0], p = h[1], m = function(O) {
    var P, _ = v.find(function(I) {
      return I.key === O;
    });
    _ == null || (P = _.onClose) === null || P === void 0 || P.call(_), p(function(I) {
      return I.filter(function(F) {
        return F.key !== O;
      });
    });
  };
  g.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        p(function(P) {
          var _ = B(P), I = _.findIndex(function(A) {
            return A.key === O.key;
          }), F = T({}, O);
          if (I >= 0) {
            var M;
            F.times = (((M = P[I]) === null || M === void 0 ? void 0 : M.times) || 0) + 1, _[I] = F;
          } else
            F.times = 0, _.push(F);
          return i > 0 && _.length > i && (_ = _.slice(-i)), _;
        });
      },
      close: function(O) {
        m(O);
      },
      destroy: function() {
        p([]);
      }
    };
  });
  var C = g.useState({}), y = L(C, 2), x = y[0], S = y[1];
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
  return /* @__PURE__ */ $l(/* @__PURE__ */ g.createElement(g.Fragment, null, E.map(function($) {
    var O = x[$], P = /* @__PURE__ */ g.createElement(Ku, {
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
process.env.NODE_ENV !== "production" && (Qu.displayName = "Notifications");
var $p = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], Op = function() {
  return document.body;
}, pc = 0;
function Pp() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(o) {
    o && Object.keys(o).forEach(function(a) {
      var i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function Zu() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? Op : t, r = e.motion, o = e.prefixCls, a = e.maxCount, i = e.className, s = e.style, c = e.onAllRemoved, l = e.stack, u = e.renderNotifications, d = We(e, $p), f = g.useState(), h = L(f, 2), v = h[0], p = h[1], m = g.useRef(), C = /* @__PURE__ */ g.createElement(Qu, {
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
  }), y = g.useState([]), x = L(y, 2), S = x[0], b = x[1], w = Pt(function($) {
    var O = Pp(d, $);
    (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(pc), pc += 1), b(function(P) {
      return [].concat(B(P), [{
        type: "open",
        config: O
      }]);
    });
  }), E = g.useMemo(function() {
    return {
      open: w,
      close: function(O) {
        b(function(P) {
          return [].concat(B(P), [{
            type: "close",
            key: O
          }]);
        });
      },
      destroy: function() {
        b(function(O) {
          return [].concat(B(O), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return g.useEffect(function() {
    p(n());
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
var Tp = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Np = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: Tp
  }));
}, Ki = /* @__PURE__ */ g.forwardRef(Np);
process.env.NODE_ENV !== "production" && (Ki.displayName = "LoadingOutlined");
function hc(...e) {
  const t = {};
  return e.forEach((n) => {
    n && Object.keys(n).forEach((r) => {
      n[r] !== void 0 && (t[r] = n[r]);
    });
  }), t;
}
function yc(e) {
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
function bc(e) {
  const {
    closable: t,
    closeIcon: n
  } = e || {};
  return R.useMemo(() => {
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
const Rp = {}, _p = (e, t, n = Rp) => {
  const r = bc(e), o = bc(t), [a] = Eo("global", zt.global), i = typeof r != "boolean" ? !!r?.disabled : !1, s = R.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ R.createElement(An, null)
  }, n), [n]), c = R.useMemo(() => r === !1 ? !1 : r ? hc(s, o, r) : o === !1 ? !1 : o ? hc(s, o) : s.closable ? s : !1, [r, o, s]);
  return R.useMemo(() => {
    var l, u;
    if (c === !1)
      return [!1, null, i, {}];
    const {
      closeIconRender: d
    } = s, {
      closeIcon: f
    } = c;
    let h = f;
    const v = Ro(c, !0);
    return h != null && (d && (h = d(f)), h = /* @__PURE__ */ R.isValidElement(h) ? /* @__PURE__ */ R.cloneElement(h, Object.assign(Object.assign(Object.assign({}, h.props), {
      "aria-label": (u = (l = h.props) === null || l === void 0 ? void 0 : l["aria-label"]) !== null && u !== void 0 ? u : a.close
    }), v)) : /* @__PURE__ */ R.createElement("span", Object.assign({
      "aria-label": a.close
    }, v), h)), [!0, h, i, v];
  }, [i, a.close, c, s]);
}, Mp = () => {
  const [e, t] = g.useState([]), n = g.useCallback((r) => (t((o) => [].concat(B(o), [r])), () => {
    t((o) => o.filter((a) => a !== r));
  }), []);
  return [e, n];
}, Qi = /* @__PURE__ */ R.createContext(void 0);
process.env.NODE_ENV !== "production" && (Qi.displayName = "zIndexContext");
const Ft = 100, Ip = 10, _o = Ft * Ip, Fp = _o + Ft, Ju = {
  Modal: Ft,
  Drawer: Ft,
  Popover: Ft,
  Popconfirm: Ft,
  Tooltip: Ft,
  Tour: Ft,
  FloatButton: Ft
}, Ap = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function jp(e) {
  return e in Ju;
}
const kp = (e, t) => {
  const [, n] = Nt(), r = R.useContext(Qi), o = jp(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = r ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    Ju[e] : i += Ap[e], a = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = it(e), s = n.zIndexPopupBase + Fp, c = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
}, Lp = (e) => {
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
    paddingXS: h,
    borderRadiusLG: v,
    zIndexPopup: p,
    // Custom token
    contentPadding: m,
    contentBg: C
  } = e, y = `${t}-notice`, x = new Te("MessageMoveIn", {
    "0%": {
      padding: 0,
      transform: "translateY(-100%)",
      opacity: 0
    },
    "100%": {
      padding: h,
      transform: "translateY(0)",
      opacity: 1
    }
  }), S = new Te("MessageMoveOut", {
    "0%": {
      maxHeight: e.height,
      padding: h,
      opacity: 1
    },
    "100%": {
      maxHeight: 0,
      padding: 0,
      opacity: 0
    }
  }), b = {
    padding: h,
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
      [t]: Object.assign(Object.assign({}, Wi(e)), {
        color: o,
        position: "fixed",
        top: f,
        width: "100%",
        pointerEvents: "none",
        zIndex: p,
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
}, Dp = (e) => ({
  zIndexPopup: e.zIndexPopupBase + _o + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), ed = rn("Message", (e) => {
  const t = bt(e, {
    height: 150
  });
  return Lp(t);
}, Dp);
var Vp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Hp = {
  info: /* @__PURE__ */ g.createElement(No, null),
  success: /* @__PURE__ */ g.createElement(Oo, null),
  error: /* @__PURE__ */ g.createElement(Po, null),
  warning: /* @__PURE__ */ g.createElement(To, null),
  loading: /* @__PURE__ */ g.createElement(Ki, null)
}, td = ({
  prefixCls: e,
  type: t,
  icon: n,
  children: r
}) => /* @__PURE__ */ g.createElement("div", {
  className: z(`${e}-custom-content`, `${e}-${t}`)
}, n || Hp[t], /* @__PURE__ */ g.createElement("span", null, r)), Bp = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: a
  } = e, i = Vp(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = g.useContext(ye), c = t || s("message"), l = jn(c), [u, d, f] = ed(c, l);
  return u(/* @__PURE__ */ g.createElement(Yi, Object.assign({}, i, {
    prefixCls: c,
    className: z(n, d, `${c}-notice-pure-panel`, f, l),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ g.createElement(td, {
      prefixCls: c,
      type: r,
      icon: o
    }, a)
  })));
};
function zp(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Zi(e) {
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
var Wp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Gp = 8, qp = 3, Up = ({
  children: e,
  prefixCls: t
}) => {
  const n = jn(t), [r, o, a] = ed(t, n);
  return r(/* @__PURE__ */ g.createElement(Yu, {
    classNames: {
      list: z(o, a, n)
    }
  }, e));
}, Xp = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ g.createElement(Up, {
  prefixCls: t,
  key: n
}, e), Yp = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: a,
    duration: i = qp,
    rtl: s,
    transitionName: c,
    onAllRemoved: l
  } = e, {
    getPrefixCls: u,
    getPopupContainer: d,
    message: f,
    direction: h
  } = g.useContext(ye), v = r || u("message"), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? Gp
  }), m = () => z({
    [`${v}-rtl`]: s ?? h === "rtl"
  }), C = () => zp(v, c), y = /* @__PURE__ */ g.createElement("span", {
    className: `${v}-close-x`
  }, /* @__PURE__ */ g.createElement(An, {
    className: `${v}-close-icon`
  })), [x, S] = Zu({
    prefixCls: v,
    style: p,
    className: m,
    motion: C,
    closable: !1,
    closeIcon: y,
    duration: i,
    getContainer: () => o?.() || d?.() || document.body,
    maxCount: a,
    onAllRemoved: l,
    renderNotifications: Xp
  });
  return g.useImperativeHandle(t, () => Object.assign(Object.assign({}, x), {
    prefixCls: v,
    message: f
  })), S;
});
let Cc = 0;
function nd(e) {
  const t = g.useRef(null), n = it("Message");
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
      } = t.current, h = `${d}-notice`, {
        content: v,
        icon: p,
        type: m,
        key: C,
        className: y,
        style: x,
        onClose: S
      } = l, b = Wp(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let w = C;
      return w == null && (Cc += 1, w = `antd-message-${Cc}`), Zi((E) => (u(Object.assign(Object.assign({}, b), {
        key: w,
        content: /* @__PURE__ */ g.createElement(td, {
          prefixCls: d,
          type: m,
          icon: p
        }, v),
        placement: "top",
        className: z(m && `${h}-${m}`, y, f?.className),
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
      const u = (d, f, h) => {
        let v;
        d && typeof d == "object" && "content" in d ? v = d : v = {
          content: d
        };
        let p, m;
        typeof f == "function" ? m = f : (p = f, m = h);
        const C = Object.assign(Object.assign({
          onClose: m,
          duration: p
        }, v), {
          type: l
        });
        return a(C);
      };
      s[l] = u;
    }), s;
  }, []), /* @__PURE__ */ g.createElement(Yp, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function Kp(e) {
  return nd(e);
}
function rd(e, t) {
  this.v = e, this.k = t;
}
function Xe(e, t, n, r) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  Xe = function(i, s, c, l) {
    function u(d, f) {
      Xe(i, d, function(h) {
        return this._invoke(d, f, h);
      });
    }
    s ? o ? o(i, s, {
      value: c,
      enumerable: !l,
      configurable: !l,
      writable: !l
    }) : i[s] = c : (u("next", 0), u("throw", 1), u("return", 2));
  }, Xe(e, t, n, r);
}
function Ji() {
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", o = n.toStringTag || "@@toStringTag";
  function a(h, v, p, m) {
    var C = v && v.prototype instanceof s ? v : s, y = Object.create(C.prototype);
    return Xe(y, "_invoke", (function(x, S, b) {
      var w, E, $, O = 0, P = b || [], _ = !1, I = {
        p: 0,
        n: 0,
        v: e,
        a: F,
        f: F.bind(e, 4),
        d: function(A, j) {
          return w = A, E = 0, $ = e, I.n = j, i;
        }
      };
      function F(M, A) {
        for (E = M, $ = A, t = 0; !_ && O && !j && t < P.length; t++) {
          var j, k = P[t], W = I.p, H = k[2];
          M > 3 ? (j = H === A) && ($ = k[(E = k[4]) ? 5 : (E = 3, 3)], k[4] = k[5] = e) : k[0] <= W && ((j = M < 2 && W < k[1]) ? (E = 0, I.v = A, I.n = k[1]) : W < H && (j = M < 3 || k[0] > A || A > H) && (k[4] = M, k[5] = A, I.n = H, E = 0));
        }
        if (j || M > 1) return i;
        throw _ = !0, A;
      }
      return function(M, A, j) {
        if (O > 1) throw TypeError("Generator is already running");
        for (_ && A === 1 && F(A, j), E = A, $ = j; (t = E < 2 ? e : $) || !_; ) {
          w || (E ? E < 3 ? (E > 1 && (I.n = -1), F(E, $)) : I.n = $ : I.v = $);
          try {
            if (O = 2, w) {
              if (E || (M = "next"), t = w[M]) {
                if (!(t = t.call(w, $))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                $ = t.value, E < 2 && (E = 0);
              } else E === 1 && (t = w.return) && t.call(w), E < 2 && ($ = TypeError("The iterator does not provide a '" + M + "' method"), E = 1);
              w = e;
            } else if ((t = (_ = I.n < 0) ? $ : x.call(S, I)) !== i) break;
          } catch (k) {
            w = e, E = 1, $ = k;
          } finally {
            O = 1;
          }
        }
        return {
          value: t,
          done: _
        };
      };
    })(h, p, m), !0), y;
  }
  var i = {};
  function s() {
  }
  function c() {
  }
  function l() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (Xe(t = {}, r, function() {
    return this;
  }), t), d = l.prototype = s.prototype = Object.create(u);
  function f(h) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(h, l) : (h.__proto__ = l, Xe(h, o, "GeneratorFunction")), h.prototype = Object.create(d), h;
  }
  return c.prototype = l, Xe(d, "constructor", l), Xe(l, "constructor", c), c.displayName = "GeneratorFunction", Xe(l, o, "GeneratorFunction"), Xe(d), Xe(d, o, "Generator"), Xe(d, r, function() {
    return this;
  }), Xe(d, "toString", function() {
    return "[object Generator]";
  }), (Ji = function() {
    return {
      w: a,
      m: f
    };
  })();
}
function uo(e, t) {
  function n(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof rd ? t.resolve(l.v).then(function(u) {
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
  this.next || (Xe(uo.prototype), Xe(uo.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Xe(this, "_invoke", function(o, a, i) {
    function s() {
      return new t(function(c, l) {
        n(o, i, c, l);
      });
    }
    return r = r ? r.then(s, s) : s();
  }, !0);
}
function od(e, t, n, r, o) {
  return new uo(Ji().w(e, t, n, r), o || Promise);
}
function Qp(e, t, n, r, o) {
  var a = od(e, t, n, r, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function Zp(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function xc(e) {
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
  throw new TypeError(U(e) + " is not iterable");
}
function Ke() {
  var e = Ji(), t = e.m(Ke), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
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
        delegateYield: function(d, f, h) {
          return s.resultName = f, c(l.d, xc(d), h);
        },
        finish: function(d) {
          return c(l.f, d);
        }
      }, c = function(d, f, h) {
        l.p = s.prev, l.n = s.next;
        try {
          return d(f, h);
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
  return (Ke = function() {
    return {
      wrap: function(c, l, u, d) {
        return e.w(a(c), l, u, d && d.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(c, l) {
        return new rd(c, l);
      },
      AsyncIterator: uo,
      async: function(c, l, u, d, f) {
        return (r(l) ? od : Qp)(a(c), l, u, d, f);
      },
      keys: Zp,
      values: xc
    };
  })();
}
function Sc(e, t, n, r, o, a, i) {
  try {
    var s = e[a](i), c = s.value;
  } catch (l) {
    return void n(l);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, o);
}
function on(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var a = e.apply(t, n);
      function i(c) {
        Sc(a, r, o, i, s, "next", c);
      }
      function s(c) {
        Sc(a, r, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var vr = T({}, wl), Jp = vr.version, ua = vr.render, eh = vr.unmountComponentAtNode, Mo;
try {
  var th = Number((Jp || "").split(".")[0]);
  th >= 18 && (Mo = vr.createRoot);
} catch {
}
function Ec(e) {
  var t = vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && U(t) === "object" && (t.usingClientEntryPoint = e);
}
var fo = "__rc_react_root__";
function nh(e, t) {
  Ec(!0);
  var n = t[fo] || Mo(t);
  Ec(!1), n.render(e), t[fo] = n;
}
function rh(e, t) {
  ua?.(e, t);
}
function oh(e, t) {
  if (Mo) {
    nh(e, t);
    return;
  }
  rh(e, t);
}
function ah(e) {
  return ii.apply(this, arguments);
}
function ii() {
  return ii = on(/* @__PURE__ */ Ke().mark(function e(t) {
    return Ke().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[fo]) === null || o === void 0 || o.unmount(), delete t[fo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), ii.apply(this, arguments);
}
function ih(e) {
  eh(e);
}
function sh(e) {
  return si.apply(this, arguments);
}
function si() {
  return si = on(/* @__PURE__ */ Ke().mark(function e(t) {
    return Ke().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Mo === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", ah(t));
        case 2:
          ih(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), si.apply(this, arguments);
}
const ch = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = Number.parseInt(g.version.split(".")[0], 10), r = Object.keys(wl);
    process.env.NODE_ENV !== "production" && Gt(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return oh(e, t), () => sh(t);
};
let lh = ch;
function Io(e) {
  return lh;
}
const mo = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function Fo(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const uh = (function(e) {
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
}), dh = (e) => {
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
}, fh = mv("Wave", dh), ad = `${so}-wave-target`;
function mh(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function gh(e) {
  var t;
  const {
    borderTopColor: n,
    borderColor: r,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [n, r, o].find(mh)) !== null && t !== void 0 ? t : null;
}
function da(e) {
  return Number.isNaN(e) ? 0 : e;
}
const vh = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, a = g.useRef(null), i = g.useRef(null);
  g.useEffect(() => {
    i.current = o();
  }, []);
  const [s, c] = g.useState(null), [l, u] = g.useState([]), [d, f] = g.useState(0), [h, v] = g.useState(0), [p, m] = g.useState(0), [C, y] = g.useState(0), [x, S] = g.useState(!1), b = {
    left: d,
    top: h,
    width: p,
    height: C,
    borderRadius: l.map(($) => `${$}px`).join(" ")
  };
  s && (b["--wave-color"] = s);
  function w() {
    const $ = getComputedStyle(n);
    c(gh(n));
    const O = $.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: _
    } = $;
    f(O ? n.offsetLeft : da(-Number.parseFloat(P))), v(O ? n.offsetTop : da(-Number.parseFloat(_))), m(n.offsetWidth), y(n.offsetHeight);
    const {
      borderTopLeftRadius: I,
      borderTopRightRadius: F,
      borderBottomLeftRadius: M,
      borderBottomRightRadius: A
    } = $;
    u([I, F, A, M].map((j) => da(Number.parseFloat(j))));
  }
  if (g.useEffect(() => {
    if (n) {
      const $ = Bt(() => {
        w(), S(!0);
      });
      let O;
      return typeof ResizeObserver < "u" && (O = new ResizeObserver(w), O.observe(n)), () => {
        Bt.cancel($), O?.disconnect();
      };
    }
  }, [n]), !x)
    return null;
  const E = (r === "Checkbox" || r === "Radio") && n?.classList.contains(ad);
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
    ref: yo(a, O),
    className: z(t, $, {
      "wave-quick": E
    }),
    style: b
  }));
}, ph = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e?.insertBefore(o, e?.firstChild);
  const a = Io();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ g.createElement(vh, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, hh = (e, t, n) => {
  const {
    wave: r
  } = g.useContext(ye), [, o, a] = Nt(), i = Pt((l) => {
    const u = e.current;
    if (r?.disabled || !u)
      return;
    const d = u.querySelector(`.${ad}`) || u, {
      showEffect: f
    } = r || {};
    (f || ph)(d, {
      className: t,
      token: o,
      component: n,
      event: l,
      hashId: a
    });
  }), s = g.useRef(null);
  return (l) => {
    Bt.cancel(s.current), s.current = Bt(() => {
      i(l);
    });
  };
}, id = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = ae(ye), a = me(null), i = o("wave"), [, s] = fh(i), c = hh(a, z(i, s), r);
  if (R.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || n)
      return;
    const d = (f) => {
      !uh(f.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || c(f);
    };
    return u.addEventListener("click", d, !0), () => {
      u.removeEventListener("click", d, !0);
    };
  }, [n]), !/* @__PURE__ */ R.isValidElement(t))
    return t ?? null;
  const l = Ni(t) ? yo(Ml(t), a) : a;
  return Uu(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (id.displayName = "Wave");
const yh = (e) => {
  const t = R.useContext(Tn);
  return R.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, sd = /* @__PURE__ */ g.createContext(null), bh = (e, t) => {
  const n = g.useContext(sd), r = g.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = n, s = o === "vertical" ? "-vertical-" : "-";
    return z(`${e}-compact${s}item`, {
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
}, Ch = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement(sd.Provider, {
    value: null
  }, t);
};
var xh = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const cd = /* @__PURE__ */ g.createContext(void 0), Sh = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = g.useContext(ye), {
    prefixCls: r,
    size: o,
    className: a
  } = e, i = xh(e, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , c] = Nt(), l = g.useMemo(() => {
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
    const d = it("Button.Group");
    d.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && d(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = z(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: n === "rtl"
  }, a, c);
  return /* @__PURE__ */ g.createElement(cd.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, wc = /^[\u4E00-\u9FA5]{2}$/, ci = wc.test.bind(wc);
function ld(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
function $c(e) {
  return typeof e == "string";
}
function Hr(e) {
  return e === "text" || e === "link";
}
function Eh(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && $c(e.type) && ci(e.props.children) ? Uu(e, {
    children: e.props.children.split("").join(n)
  }) : $c(e) ? ci(e) ? /* @__PURE__ */ R.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ R.createElement("span", null, e) : xp(e) ? /* @__PURE__ */ R.createElement("span", null, e) : e;
}
function wh(e, t) {
  let n = !1;
  const r = [];
  return R.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (n && i) {
      const s = r.length - 1, c = r[s];
      r[s] = `${c}${o}`;
    } else
      r.push(o);
    n = i;
  }), R.Children.map(r, (o) => Eh(o, t));
}
["default", "primary", "danger"].concat(B(Bi));
const li = /* @__PURE__ */ Mn((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: a
  } = e, i = z(`${a}-icon`, n);
  return /* @__PURE__ */ R.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, o);
}), Oc = /* @__PURE__ */ Mn((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: a
  } = e, i = z(`${n}-loading-icon`, r);
  return /* @__PURE__ */ R.createElement(li, {
    prefixCls: n,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ R.createElement(Ki, {
    className: a
  }));
}), fa = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ma = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), $h = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: a,
    mount: i
  } = e, s = !!n;
  return r ? /* @__PURE__ */ R.createElement(Oc, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ R.createElement(mr, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: fa,
    onAppearActive: ma,
    onEnterStart: fa,
    onEnterActive: ma,
    onLeaveStart: ma,
    onLeaveActive: fa
  }, ({
    className: c,
    style: l
  }, u) => {
    const d = Object.assign(Object.assign({}, a), l);
    return /* @__PURE__ */ R.createElement(Oc, {
      prefixCls: t,
      className: z(o, c),
      style: d,
      ref: u
    });
  });
}, Pc = (e, t) => ({
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
}), Oh = (e) => {
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
      Pc(`${t}-primary`, o),
      Pc(`${t}-danger`, a)
    ]
  };
};
var Ph = ["b"], Th = ["v"], ga = function(t) {
  return Math.round(Number(t || 0));
}, Nh = function(t) {
  if (t instanceof Ce)
    return t;
  if (t && U(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = We(n, Ph);
    return T(T({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, jt = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    return Le(this, n), t.call(this, Nh(r));
  }
  return De(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = ga(o.s * 100), i = ga(o.b * 100), s = ga(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = We(o, Th);
      return T(T({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), n;
})(Ce), Rh = "rc-color-picker", bn = function(t) {
  return t instanceof jt ? t : new jt(t);
}, _h = bn("#1677ff"), ud = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = r.current.getBoundingClientRect(), d = u.width, f = u.height, h = d / 2, v = f / 2, p = (n.x + h) / c, m = 1 - (n.y + v) / l, C = a.toHsb(), y = p, x = (n.x + h) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return bn(T(T({}, C), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return bn(T(T({}, C), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return bn({
    h: C.h,
    s: p <= 0 ? 0 : p,
    b: m >= 1 ? 1 : m,
    a: C.a
  });
}, dd = function(t, n) {
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
}, Mh = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(r, "-color-block");
  return /* @__PURE__ */ R.createElement("div", {
    className: z(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ R.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: n
    }
  }));
};
function Ih(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function fd(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = Zt({
    x: 0,
    y: 0
  }), u = L(l, 2), d = u[0], f = u[1], h = me(null), v = me(null);
  Ye(function() {
    f(i());
  }, [s]), Ye(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", v.current), h.current = null, v.current = null;
    };
  }, []);
  var p = function(S) {
    var b = Ih(S), w = b.pageX, E = b.pageY, $ = n.current.getBoundingClientRect(), O = $.x, P = $.y, _ = $.width, I = $.height, F = t.current.getBoundingClientRect(), M = F.width, A = F.height, j = M / 2, k = A / 2, W = Math.max(0, Math.min(w - O, _)) - j, H = Math.max(0, Math.min(E - P, I)) - k, Q = {
      x: W,
      y: r === "x" ? d.y : H
    };
    if (M === 0 && A === 0 || M !== A)
      return !1;
    o?.(Q);
  }, m = function(S) {
    S.preventDefault(), p(S);
  }, C = function(S) {
    S.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", v.current), h.current = null, v.current = null, a?.();
  }, y = function(S) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), !c && (p(S), document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), document.addEventListener("touchmove", m), document.addEventListener("touchend", C), h.current = m, v.current = C);
  };
  return [d, y];
}
var md = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(a, "-handler"), N({}, "".concat(a, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, gd = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ R.createElement("div", {
    className: "".concat(o, "-palette"),
    style: T({
      position: "relative"
    }, r)
  }, n);
}, vd = /* @__PURE__ */ Mn(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ R.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), Fh = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = me(), c = me(), l = me(n), u = Pt(function(p) {
    var m = ud({
      offset: p,
      targetRef: c,
      containerRef: s,
      color: n
    });
    l.current = m, r(m);
  }), d = fd({
    color: n,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return dd(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a?.(l.current);
    },
    disabledDrag: i
  }), f = L(d, 2), h = f[0], v = f[1];
  return /* @__PURE__ */ R.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: v,
    onTouchStart: v
  }, /* @__PURE__ */ R.createElement(gd, {
    prefixCls: o
  }, /* @__PURE__ */ R.createElement(vd, {
    x: h.x,
    y: h.y,
    ref: c
  }, /* @__PURE__ */ R.createElement(md, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ R.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Ah = function(t, n) {
  var r = Kg(t, {
    value: n
  }), o = L(r, 2), a = o[0], i = o[1], s = Ae(function() {
    return bn(a);
  }, [a]);
  return [s, i];
}, jh = function(t) {
  var n = t.colors, r = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = Ae(function() {
    return n.map(function(l, u) {
      var d = bn(l);
      return i === "alpha" && u === n.length - 1 && (d = new jt(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ R.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(c, ")")
    }
  }, r);
}, kh = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = me(), u = me(), d = me(s), f = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, h = Pt(function(S) {
    var b = ud({
      offset: S,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    d.current = b, a(f(b));
  }), v = fd({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return dd(s, c);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      i(f(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), p = L(v, 2), m = p[0], C = p[1], y = R.useMemo(function() {
    if (c === "hue") {
      var S = s.toHsb();
      S.s = 1, S.b = 1, S.a = 1;
      var b = new jt(S);
      return b;
    }
    return s;
  }, [s, c]), x = R.useMemo(function() {
    return r.map(function(S) {
      return "".concat(S.color, " ").concat(S.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ R.createElement("div", {
    ref: l,
    className: z("".concat(n, "-slider"), "".concat(n, "-slider-").concat(c)),
    onMouseDown: C,
    onTouchStart: C
  }, /* @__PURE__ */ R.createElement(gd, {
    prefixCls: n
  }, /* @__PURE__ */ R.createElement(vd, {
    x: m.x,
    y: m.y,
    ref: u
  }, /* @__PURE__ */ R.createElement(md, {
    size: "small",
    color: y.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ R.createElement(jh, {
    colors: x,
    type: c,
    prefixCls: n
  })));
};
function Lh(e) {
  return g.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || kh];
  }, [e]);
}
var Dh = [{
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
}], Vh = /* @__PURE__ */ Mn(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Rh : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, h = e.disabled, v = h === void 0 ? !1 : h, p = e.components, m = Lh(p), C = L(m, 1), y = C[0], x = Ah(r || _h, n), S = L(x, 2), b = S[0], w = S[1], E = Ae(function() {
    return b.setA(1).toRgbString();
  }, [b]), $ = function(H, Q) {
    n || w(H), i?.(H, Q);
  }, O = function(H) {
    return new jt(b.setHue(H));
  }, P = function(H) {
    return new jt(b.setA(H / 100));
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
  }, F = function(H) {
    s && s(O(H));
  }, M = function(H) {
    s && s(P(H));
  }, A = z("".concat(a, "-panel"), c, N({}, "".concat(a, "-panel-disabled"), v)), j = {
    prefixCls: a,
    disabled: v,
    color: b
  }, k = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Fh, ge({
    onChange: $
  }, j, {
    onChangeComplete: s
  })), /* @__PURE__ */ R.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(a, "-slider-group"), N({}, "".concat(a, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ R.createElement(y, ge({}, j, {
    type: "hue",
    colors: Dh,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: _,
    onChangeComplete: F
  })), !f && /* @__PURE__ */ R.createElement(y, ge({}, j, {
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
  }))), /* @__PURE__ */ R.createElement(Mh, {
    color: b.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ R.createElement("div", {
    className: A,
    style: l,
    ref: t
  }, typeof u == "function" ? u(k) : k);
});
process.env.NODE_ENV !== "production" && (Vh.displayName = "ColorPicker");
const Hh = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", Bh = (e, t) => e ? Hh(e, t) : "";
let zh = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e);
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
    })), this.metaColor = new jt(this.colors[0].color.metaColor)) : this.metaColor = new jt(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return De(e, [{
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
      return Bh(this.toHexString(), this.metaColor.a < 1);
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
const Wh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Gh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), pd = (e, t, n, r, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, Wh(r)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, Gh(r)), {
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
}, qh = new Te("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Uh = new Te("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), Xh = (e, t = !1) => {
  const {
    antCls: n
  } = e, r = `${n}-fade`, o = t ? "&" : "";
  return [pd(r, qh, Uh, e.motionDurationMid, t), {
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
}, Yh = new Te("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Kh = new Te("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), Tc = new Te("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Nc = new Te("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), Qh = new Te("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Zh = new Te("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), Jh = new Te("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), e0 = new Te("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), t0 = new Te("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), n0 = new Te("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), r0 = new Te("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), o0 = new Te("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), a0 = {
  zoom: {
    inKeyframes: Yh,
    outKeyframes: Kh
  },
  "zoom-big": {
    inKeyframes: Tc,
    outKeyframes: Nc
  },
  "zoom-big-fast": {
    inKeyframes: Tc,
    outKeyframes: Nc
  },
  "zoom-left": {
    inKeyframes: Jh,
    outKeyframes: e0
  },
  "zoom-right": {
    inKeyframes: t0,
    outKeyframes: n0
  },
  "zoom-up": {
    inKeyframes: Qh,
    outKeyframes: Zh
  },
  "zoom-down": {
    inKeyframes: r0,
    outKeyframes: o0
  }
}, i0 = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = a0[t];
  return [pd(r, o, a, e.motionDurationMid), {
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
}, s0 = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = e.toRgb(), i = new jt(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, hd = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return bt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, yd = (e) => {
  var t, n, r, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Zr(s), d = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Zr(c), f = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Zr(l), h = s0(new zh(e.colorBgSolid), "#fff") ? "#000" : "#fff", v = Bi.reduce((p, m) => Object.assign(Object.assign({}, p), {
    [`${m}ShadowColor`]: `0 ${ne(e.controlOutlineWidth)} 0 ${qn(e[`${m}1`], e.colorBgContainer)}`
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
    solidTextColor: h,
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
}, c0 = (e) => {
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
      border: `${ne(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: Pu(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Gi(e),
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
}, bd = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), l0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), u0 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Ao = (e, t, n, r, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, bd(e, Object.assign({
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
}), d0 = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, u0(e))
}), f0 = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), jo = (e, t, n, r) => {
  const a = r && ["link", "text"].includes(r) ? f0 : d0;
  return Object.assign(Object.assign({}, a(e)), bd(e.componentCls, t, n));
}, ko = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, jo(e, r, o))
}), Lo = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, jo(e, r, o))
}), Do = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Vo = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, jo(e, n, r))
}), Tt = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, jo(e, r, o, n))
}), m0 = (e) => {
  const {
    componentCls: t
  } = e;
  return Bi.reduce((n, r) => {
    const o = e[`${r}6`], a = e[`${r}1`], i = e[`${r}5`], s = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, ko(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: l
      })), Lo(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Do(e)), Vo(e, a, {
        color: o,
        background: s
      }, {
        color: o,
        background: c
      })), Tt(e, o, "link", {
        color: i
      }, {
        color: l
      })), Tt(e, o, "text", {
        color: i,
        background: a
      }, {
        color: l,
        background: c
      }))
    });
  }, {});
}, g0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, ko(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Do(e)), Vo(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), Ao(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Tt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), v0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Lo(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Do(e)), Vo(e, e.colorPrimaryBg, {
  color: e.colorPrimary,
  background: e.colorPrimaryBgHover
}, {
  color: e.colorPrimary,
  background: e.colorPrimaryBorder
})), Tt(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Tt(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Ao(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), p0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, ko(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Lo(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Do(e)), Vo(e, e.colorErrorBg, {
  color: e.colorError,
  background: e.colorErrorBgFilledHover
}, {
  color: e.colorError,
  background: e.colorErrorBgActive
})), Tt(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Tt(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Ao(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), h0 = (e) => Object.assign(Object.assign({}, Tt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Ao(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), y0 = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: g0(e),
    [`${t}-color-primary`]: v0(e),
    [`${t}-color-dangerous`]: p0(e),
    [`${t}-color-link`]: h0(e)
  }, m0(e));
}, b0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Lo(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Tt(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), ko(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Tt(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), es = (e, t = "") => {
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
        padding: `${ne(c)} ${ne(i)}`,
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
      [`${n}${n}-circle${t}`]: l0(e)
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
}, C0 = (e) => {
  const t = bt(e, {
    fontSize: e.contentFontSize
  });
  return es(t, e.componentCls);
}, x0 = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return es(t, `${e.componentCls}-sm`);
}, S0 = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return es(t, `${e.componentCls}-lg`);
}, E0 = (e) => {
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
}, w0 = rn("Button", (e) => {
  const t = hd(e);
  return [
    // Shared
    c0(t),
    // Size
    C0(t),
    x0(t),
    S0(t),
    // Block
    E0(t),
    // Color
    y0(t),
    // https://github.com/ant-design/ant-design/issues/50969
    b0(t),
    // Button Group
    Oh(t)
  ];
}, yd, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function $0(e, t, n, r) {
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
function O0(e, t, n) {
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
function P0(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, $0(e, r, t, n)), O0(n, r, t))
  };
}
function T0(e, t, n) {
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
function N0(e, t) {
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
function R0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, T0(e, t, e.componentCls)), N0(e.componentCls, t))
  };
}
const _0 = (e) => {
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
}, M0 = qi(["Button", "compact"], (e) => {
  const t = hd(e);
  return [
    // Space Compact
    P0(t),
    R0(t),
    _0(t)
  ];
}, yd);
var I0 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function F0(e) {
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
const A0 = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, j0 = /* @__PURE__ */ R.forwardRef((e, t) => {
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
    disabled: h,
    className: v,
    rootClassName: p,
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
  } = e, P = I0(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), _ = c || "default", {
    button: I
  } = R.useContext(ye), F = u || I?.shape || "default", [M, A] = Ae(() => {
    if (i && s)
      return [i, s];
    if (c || l) {
      const Ne = A0[_] || [];
      return l ? ["danger", Ne[1]] : Ne;
    }
    return I?.color && I?.variant ? [I.color, I.variant] : ["default", "outlined"];
  }, [i, s, c, l, I?.color, I?.variant, _]), k = M === "danger" ? "dangerous" : M, {
    getPrefixCls: W,
    direction: H,
    autoInsertSpace: Q,
    className: Z,
    style: K,
    classNames: Y,
    styles: X
  } = Cu("button"), G = (n = $ ?? Q) !== null && n !== void 0 ? n : !0, q = W("btn", a), [oe, Pe, be] = w0(q), xe = ae(co), Se = h ?? xe, V = ae(cd), ve = Ae(() => F0(o), [o]), [D, ee] = Zt(ve.loading), [ie, Qe] = Zt(!1), he = me(null), Ve = Ti(t, he), Fe = qf.count(m) === 1 && !C && !Hr(A), Ee = me(!0);
  R.useEffect(() => (Ee.current = !1, () => {
    Ee.current = !0;
  }), []), wn(() => {
    let Ne = null;
    ve.delay > 0 ? Ne = setTimeout(() => {
      Ne = null, ee(!0);
    }, ve.delay) : ee(ve.loading);
    function mt() {
      Ne && (clearTimeout(Ne), Ne = null);
    }
    return mt;
  }, [ve.delay, ve.loading]), Ye(() => {
    if (!he.current || !G)
      return;
    const Ne = he.current.textContent || "";
    Fe && ci(Ne) ? ie || Qe(!0) : ie && Qe(!1);
  }), Ye(() => {
    O && he.current && he.current.focus();
  }, []);
  const Oe = R.useCallback((Ne) => {
    var mt;
    if (D || Se) {
      Ne.preventDefault();
      return;
    }
    (mt = e.onClick) === null || mt === void 0 || mt.call(e, ("href" in e, Ne));
  }, [e.onClick, D, Se]);
  if (process.env.NODE_ENV !== "production") {
    const Ne = it("Button");
    process.env.NODE_ENV !== "production" && Ne(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Ne(!(x && Hr(A)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Ge,
    compactItemClassnames: Je
  } = bh(q, H), qe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, sn = yh((Ne) => {
    var mt, Bn;
    return (Bn = (mt = d ?? Ge) !== null && mt !== void 0 ? mt : V) !== null && Bn !== void 0 ? Bn : Ne;
  }), Sr = sn && (r = qe[sn]) !== null && r !== void 0 ? r : "", Yo = D ? "loading" : C, Vn = Fo(P, ["navigate"]), Er = z(q, Pe, be, {
    [`${q}-${F}`]: F !== "default" && F,
    // Compatible with versions earlier than 5.21.0
    [`${q}-${_}`]: _,
    [`${q}-dangerous`]: l,
    [`${q}-color-${k}`]: k,
    [`${q}-variant-${A}`]: A,
    [`${q}-${Sr}`]: Sr,
    [`${q}-icon-only`]: !m && m !== 0 && !!Yo,
    [`${q}-background-ghost`]: x && !Hr(A),
    [`${q}-loading`]: D,
    [`${q}-two-chinese-chars`]: ie && G && !D,
    [`${q}-block`]: S,
    [`${q}-rtl`]: H === "rtl",
    [`${q}-icon-end`]: y === "end"
  }, Je, v, p, Z), wr = Object.assign(Object.assign({}, K), E), $r = z(w?.icon, Y.icon), Or = Object.assign(Object.assign({}, f?.icon || {}), X.icon || {}), Pr = C && !D ? /* @__PURE__ */ R.createElement(li, {
    prefixCls: q,
    className: $r,
    style: Or
  }, C) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ R.createElement(li, {
    prefixCls: q,
    className: $r,
    style: Or
  }, o.icon) : /* @__PURE__ */ R.createElement($h, {
    existIcon: !!C,
    prefixCls: q,
    loading: D,
    mount: Ee.current
  }), Tr = m || m === 0 ? wh(m, Fe && G) : null;
  if (Vn.href !== void 0)
    return oe(/* @__PURE__ */ R.createElement("a", Object.assign({}, Vn, {
      className: z(Er, {
        [`${q}-disabled`]: Se
      }),
      href: Se ? void 0 : Vn.href,
      style: wr,
      onClick: Oe,
      ref: Ve,
      tabIndex: Se ? -1 : 0,
      "aria-disabled": Se
    }), Pr, Tr));
  let Hn = /* @__PURE__ */ R.createElement("button", Object.assign({}, P, {
    type: b,
    className: Er,
    style: wr,
    onClick: Oe,
    disabled: Se,
    ref: Ve
  }), Pr, Tr, Je && /* @__PURE__ */ R.createElement(M0, {
    prefixCls: q
  }));
  return Hr(A) || (Hn = /* @__PURE__ */ R.createElement(id, {
    component: "Button",
    disabled: D
  }, Hn)), oe(Hn);
}), kn = j0;
kn.Group = Sh;
kn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (kn.displayName = "Button");
const va = (e) => typeof e?.then == "function", Cd = (e) => {
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
  } = e, d = g.useRef(!1), f = g.useRef(null), [h, v] = Nn(!1), p = (...y) => {
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
    va(y) && (v(!0), y.then((...x) => {
      v(!1, !0), p.apply(void 0, x), d.current = !1;
    }, (x) => {
      if (v(!1, !0), d.current = !1, !c?.())
        return Promise.reject(x);
    }));
  }, C = (y) => {
    if (d.current)
      return;
    if (d.current = !0, !u) {
      p();
      return;
    }
    let x;
    if (s) {
      if (x = u(y), l && !va(x)) {
        d.current = !1, p(y);
        return;
      }
    } else if (u.length)
      x = u(a), d.current = !1;
    else if (x = u(), !va(x)) {
      p();
      return;
    }
    m(x);
  };
  return /* @__PURE__ */ g.createElement(kn, Object.assign({}, ld(t), {
    onClick: C,
    loading: h,
    prefixCls: r
  }, o, {
    ref: f
  }), n);
}, pr = /* @__PURE__ */ R.createContext({}), {
  Provider: xd
} = pr, Rc = () => {
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
  } = ae(pr);
  return o ? /* @__PURE__ */ R.createElement(Cd, {
    isSilent: r,
    actionFn: s,
    close: (...l) => {
      i?.apply(void 0, l), c?.(!1);
    },
    autoFocus: e === "cancel",
    buttonProps: t,
    prefixCls: `${a}-btn`
  }, n) : null;
}, _c = () => {
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
  } = ae(pr);
  return /* @__PURE__ */ R.createElement(Cd, {
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
var Sd = /* @__PURE__ */ g.createContext(null), Mc = [];
function k0(e, t) {
  var n = g.useState(function() {
    if (!Ze())
      return null;
    var v = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && v.setAttribute("data-debug", t), v;
  }), r = L(n, 1), o = r[0], a = g.useRef(!1), i = g.useContext(Sd), s = g.useState(Mc), c = L(s, 2), l = c[0], u = c[1], d = i || (a.current ? void 0 : function(v) {
    u(function(p) {
      var m = [v].concat(B(p));
      return m;
    });
  });
  function f() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function h() {
    var v;
    (v = o.parentElement) === null || v === void 0 || v.removeChild(o), a.current = !1;
  }
  return wn(function() {
    return e ? i ? i(f) : f() : h(), h;
  }, [e]), wn(function() {
    l.length && (l.forEach(function(v) {
      return v();
    }), u(Mc));
  }, [l]), [o, d];
}
function L0(e) {
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
      At(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(d, `
}`), t);
    } catch (v) {
      console.error(v), o = c, a = l;
    }
  }
  document.body.appendChild(n);
  var f = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, h = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), tr(t), {
    width: f,
    height: h
  };
}
function D0(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : L0(e);
}
function V0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var H0 = "rc-util-locker-".concat(Date.now()), Ic = 0;
function B0(e) {
  var t = !!e, n = g.useState(function() {
    return Ic += 1, "".concat(H0, "_").concat(Ic);
  }), r = L(n, 1), o = r[0];
  wn(function() {
    if (t) {
      var a = D0(document.body).width, i = V0();
      At(`
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
var z0 = !1;
function W0(e) {
  return z0;
}
var Fc = function(t) {
  return t === !1 ? !1 : !Ze() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Ed = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = g.useState(n), u = L(l, 2), d = u[0], f = u[1], h = d || n;
  process.env.NODE_ENV !== "production" && $e(Ze() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), g.useEffect(function() {
    (s || n) && f(n);
  }, [n, s]);
  var v = g.useState(function() {
    return Fc(o);
  }), p = L(v, 2), m = p[0], C = p[1];
  g.useEffect(function() {
    var I = Fc(o);
    C(I ?? null);
  });
  var y = k0(h && !m, a), x = L(y, 2), S = x[0], b = x[1], w = m ?? S;
  B0(r && n && Ze() && (w === S || w === document.body));
  var E = null;
  if (c && Ni(c) && t) {
    var $ = c;
    E = $.ref;
  }
  var O = Ti(E, t);
  if (!h || !Ze() || m === void 0)
    return null;
  var P = w === !1 || W0(), _ = c;
  return t && (_ = /* @__PURE__ */ g.cloneElement(c, {
    ref: O
  })), /* @__PURE__ */ g.createElement(Sd.Provider, {
    value: b
  }, P ? _ : /* @__PURE__ */ $l(_, w));
});
process.env.NODE_ENV !== "production" && (Ed.displayName = "Portal");
var wd = /* @__PURE__ */ g.createContext({});
function G0() {
  var e = T({}, g);
  return e.useId;
}
var Ac = 0, jc = G0();
const q0 = jc ? (
  // Use React `useId`
  function(t) {
    var n = jc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = g.useState("ssr-id"), r = L(n, 2), o = r[0], a = r[1];
    return g.useEffect(function() {
      var i = Ac;
      Ac += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
function kc(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function Lc(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function U0(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, o = r.defaultView || r.parentWindow;
  return n.left += Lc(o), n.top += Lc(o, !0), n;
}
const X0 = /* @__PURE__ */ g.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var Y0 = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, K0 = {
  outline: "none"
}, ts = /* @__PURE__ */ R.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, a = e.title, i = e.ariaId, s = e.footer, c = e.closable, l = e.closeIcon, u = e.onClose, d = e.children, f = e.bodyStyle, h = e.bodyProps, v = e.modalRender, p = e.onMouseDown, m = e.onMouseUp, C = e.holderRef, y = e.visible, x = e.forceRender, S = e.width, b = e.height, w = e.classNames, E = e.styles, $ = R.useContext(wd), O = $.panel, P = Ti(C, O), _ = me(), I = me();
  R.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var K;
        (K = _.current) === null || K === void 0 || K.focus({
          preventScroll: !0
        });
      },
      changeActive: function(K) {
        var Y = document, X = Y.activeElement;
        K && X === I.current ? _.current.focus({
          preventScroll: !0
        }) : !K && X === _.current && I.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var F = {};
  S !== void 0 && (F.width = S), b !== void 0 && (F.height = b);
  var M = s ? /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(n, "-footer"), w?.footer),
    style: T({}, E?.footer)
  }, s) : null, A = a ? /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(n, "-header"), w?.header),
    style: T({}, E?.header)
  }, /* @__PURE__ */ R.createElement("div", {
    className: "".concat(n, "-title"),
    id: i
  }, a)) : null, j = Ae(function() {
    return U(c) === "object" && c !== null ? c : c ? {
      closeIcon: l ?? /* @__PURE__ */ R.createElement("span", {
        className: "".concat(n, "-close-x")
      })
    } : {};
  }, [c, l, n]), k = Ro(j, !0), W = U(c) === "object" && c.disabled, H = c ? /* @__PURE__ */ R.createElement("button", ge({
    type: "button",
    onClick: u,
    "aria-label": "Close"
  }, k, {
    className: "".concat(n, "-close"),
    disabled: W
  }), j.closeIcon) : null, Q = /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(n, "-content"), w?.content),
    style: E?.content
  }, H, A, /* @__PURE__ */ R.createElement("div", ge({
    className: z("".concat(n, "-body"), w?.body),
    style: T(T({}, f), E?.body)
  }, h), d), M);
  return /* @__PURE__ */ R.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": a ? i : null,
    "aria-modal": "true",
    ref: P,
    style: T(T({}, o), F),
    className: z(n, r),
    onMouseDown: p,
    onMouseUp: m
  }, /* @__PURE__ */ R.createElement("div", {
    ref: _,
    tabIndex: 0,
    style: K0
  }, /* @__PURE__ */ R.createElement(X0, {
    shouldUpdate: y || x
  }, v ? v(Q) : Q)), /* @__PURE__ */ R.createElement("div", {
    tabIndex: 0,
    ref: I,
    style: Y0
  }));
});
process.env.NODE_ENV !== "production" && (ts.displayName = "Panel");
var $d = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.title, o = e.style, a = e.className, i = e.visible, s = e.forceRender, c = e.destroyOnClose, l = e.motionName, u = e.ariaId, d = e.onVisibleChanged, f = e.mousePosition, h = me(), v = g.useState(), p = L(v, 2), m = p[0], C = p[1], y = {};
  m && (y.transformOrigin = m);
  function x() {
    var S = U0(h.current);
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
    ref: h
  }, function(S, b) {
    var w = S.className, E = S.style;
    return /* @__PURE__ */ g.createElement(ts, ge({}, e, {
      ref: t,
      title: r,
      ariaId: u,
      prefixCls: n,
      holderRef: b,
      style: T(T(T({}, E), o), y),
      className: z(a, w)
    }));
  });
});
$d.displayName = "Content";
var Q0 = function(t) {
  var n = t.prefixCls, r = t.style, o = t.visible, a = t.maskProps, i = t.motionName, s = t.className;
  return /* @__PURE__ */ g.createElement(mr, {
    key: "mask",
    visible: o,
    motionName: i,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(c, l) {
    var u = c.className, d = c.style;
    return /* @__PURE__ */ g.createElement("div", ge({
      ref: l,
      style: T(T({}, d), r),
      className: z("".concat(n, "-mask"), u, s)
    }, a));
  });
}, Z0 = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-dialog" : n, o = t.zIndex, a = t.visible, i = a === void 0 ? !1 : a, s = t.keyboard, c = s === void 0 ? !0 : s, l = t.focusTriggerAfterClose, u = l === void 0 ? !0 : l, d = t.wrapStyle, f = t.wrapClassName, h = t.wrapProps, v = t.onClose, p = t.afterOpenChange, m = t.afterClose, C = t.transitionName, y = t.animation, x = t.closable, S = x === void 0 ? !0 : x, b = t.mask, w = b === void 0 ? !0 : b, E = t.maskTransitionName, $ = t.maskAnimation, O = t.maskClosable, P = O === void 0 ? !0 : O, _ = t.maskStyle, I = t.maskProps, F = t.rootClassName, M = t.classNames, A = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(ee) {
    Qn(!(ee in t), "".concat(ee, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && Qn(!1, "wrapClassName is deprecated, please use classNames instead."));
  var j = me(), k = me(), W = me(), H = g.useState(i), Q = L(H, 2), Z = Q[0], K = Q[1], Y = q0();
  function X() {
    _a(k.current, document.activeElement) || (j.current = document.activeElement);
  }
  function G() {
    if (!_a(k.current, document.activeElement)) {
      var ee;
      (ee = W.current) === null || ee === void 0 || ee.focus();
    }
  }
  function q(ee) {
    if (ee)
      G();
    else {
      if (K(!1), w && j.current && u) {
        try {
          j.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        j.current = null;
      }
      Z && m?.();
    }
    p?.(ee);
  }
  function oe(ee) {
    v?.(ee);
  }
  var Pe = me(!1), be = me(), xe = function() {
    clearTimeout(be.current), Pe.current = !0;
  }, Se = function() {
    be.current = setTimeout(function() {
      Pe.current = !1;
    });
  }, V = null;
  P && (V = function(ie) {
    Pe.current ? Pe.current = !1 : k.current === ie.target && oe(ie);
  });
  function ve(ee) {
    if (c && ee.keyCode === ai.ESC) {
      ee.stopPropagation(), oe(ee);
      return;
    }
    i && ee.keyCode === ai.TAB && W.current.changeActive(!ee.shiftKey);
  }
  Ye(function() {
    i && (K(!0), X());
  }, [i]), Ye(function() {
    return function() {
      clearTimeout(be.current);
    };
  }, []);
  var D = T(T(T({
    zIndex: o
  }, d), A?.wrapper), {}, {
    display: Z ? null : "none"
  });
  return /* @__PURE__ */ g.createElement("div", ge({
    className: z("".concat(r, "-root"), F)
  }, Ro(t, {
    data: !0
  })), /* @__PURE__ */ g.createElement(Q0, {
    prefixCls: r,
    visible: w && i,
    motionName: kc(r, E, $),
    style: T(T({
      zIndex: o
    }, _), A?.mask),
    maskProps: I,
    className: M?.mask
  }), /* @__PURE__ */ g.createElement("div", ge({
    tabIndex: -1,
    onKeyDown: ve,
    className: z("".concat(r, "-wrap"), f, M?.wrapper),
    ref: k,
    onClick: V,
    style: D
  }, h), /* @__PURE__ */ g.createElement($d, ge({}, t, {
    onMouseDown: xe,
    onMouseUp: Se,
    ref: W,
    closable: S,
    ariaId: Y,
    prefixCls: r,
    visible: i && Z,
    onClose: oe,
    onVisibleChanged: q,
    motionName: kc(r, C, y)
  }))));
}, Od = function(t) {
  var n = t.visible, r = t.getContainer, o = t.forceRender, a = t.destroyOnClose, i = a === void 0 ? !1 : a, s = t.afterClose, c = t.panelRef, l = g.useState(n), u = L(l, 2), d = u[0], f = u[1], h = g.useMemo(function() {
    return {
      panel: c
    };
  }, [c]);
  return g.useEffect(function() {
    n && f(!0);
  }, [n]), !o && i && !d ? null : /* @__PURE__ */ g.createElement(wd.Provider, {
    value: h
  }, /* @__PURE__ */ g.createElement(Ed, {
    open: n || o || d,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || d
  }, /* @__PURE__ */ g.createElement(Z0, ge({}, t, {
    destroyOnClose: i,
    afterClose: function() {
      s?.(), f(!1);
    }
  }))));
};
Od.displayName = "Dialog";
var Ut = "RC_FORM_INTERNAL_HOOKS", pe = function() {
  $e(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Rn = /* @__PURE__ */ g.createContext({
  getFieldValue: pe,
  getFieldsValue: pe,
  getFieldError: pe,
  getFieldWarning: pe,
  getFieldsError: pe,
  isFieldsTouched: pe,
  isFieldTouched: pe,
  isFieldValidating: pe,
  isFieldsValidating: pe,
  resetFields: pe,
  setFields: pe,
  setFieldValue: pe,
  setFieldsValue: pe,
  validateFields: pe,
  submit: pe,
  getInternalHooks: function() {
    return pe(), {
      dispatch: pe,
      initEntityValue: pe,
      registerField: pe,
      useSubscribe: pe,
      setInitialValues: pe,
      destroyForm: pe,
      setCallbacks: pe,
      registerWatch: pe,
      getFields: pe,
      setValidateMessages: pe,
      setPreserve: pe,
      getInitialValue: pe
    };
  }
}), go = /* @__PURE__ */ g.createContext(null);
function ui(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function J0(e) {
  return e && !!e._init;
}
function di() {
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
var fi = di();
function ey(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function ty(e, t, n) {
  if (Ri()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && Zn(o, n.prototype), o;
}
function mi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return mi = function(r) {
    if (r === null || !ey(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return ty(r, arguments, Jn(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Zn(o, r);
  }, mi(e);
}
var ny = /%[sdj%]/g, Pd = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Pd = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function gi(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function ot(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(ny, function(s) {
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
function ry(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function je(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || ry(t) && typeof e == "string" && !e);
}
function oy(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, B(s || [])), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Dc(e, t, n) {
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
function ay(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, B(e[n] || []));
  }), t;
}
var Vc = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r, o) {
    var a;
    return Le(this, n), a = t.call(this, "Async Validation Error"), N(te(a), "errors", void 0), N(te(a), "fields", void 0), a.errors = r, a.fields = o, a;
  }
  return De(n);
})(/* @__PURE__ */ mi(Error));
function iy(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(f, h) {
      var v = function(C) {
        return r(C), C.length ? h(new Vc(C, gi(C))) : f(o);
      }, p = ay(e);
      Dc(p, n, v);
    });
    return a.catch(function(f) {
      return f;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], d = new Promise(function(f, h) {
    var v = function(m) {
      if (u.push.apply(u, m), l++, l === c)
        return r(u), u.length ? h(new Vc(u, gi(u))) : f(o);
    };
    s.length || (r(u), f(o)), s.forEach(function(p) {
      var m = e[p];
      i.indexOf(p) !== -1 ? Dc(m, n, v) : oy(m, n, v);
    });
  });
  return d.catch(function(f) {
    return f;
  }), d;
}
function sy(e) {
  return !!(e && e.message !== void 0);
}
function cy(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Hc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = cy(t, e.fullFields) : r = t[n.field || e.fullField], sy(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Bc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        U(r) === "object" && U(e[n]) === "object" ? e[n] = T(T({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var dn = "enum", ly = function(t, n, r, o, a) {
  t[dn] = Array.isArray(t[dn]) ? t[dn] : [], t[dn].indexOf(n) === -1 && o.push(ot(a.messages[dn], t.fullField, t[dn].join(", ")));
}, uy = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(ot(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(ot(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, dy = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, d = null, f = typeof n == "number", h = typeof n == "string", v = Array.isArray(n);
  if (f ? d = "number" : h ? d = "string" : v && (d = "array"), !d)
    return !1;
  v && (u = n.length), h && (u = n.replace(l, "_").length), i ? u !== t.len && o.push(ot(a.messages[d].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(ot(a.messages[d].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(ot(a.messages[d].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(ot(a.messages[d].range, t.fullField, t.min, t.max));
}, Td = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || je(n, i || t.type)) && o.push(ot(a.messages.required, t.fullField));
}, Br;
const fy = (function() {
  if (Br)
    return Br;
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
  var d = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", h = u.v4().source, v = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", C = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', S = "(?:".concat(d, "|www\\.)").concat(f, "(?:localhost|").concat(h, "|").concat(v, "|").concat(p).concat(m).concat(C, ")").concat(y).concat(x);
  return Br = new RegExp("(?:^".concat(S, "$)"), "i"), Br;
});
var zc = {
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
    return U(t) === "object" && !Un.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(zc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(fy());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(zc.hex);
  }
}, my = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Td(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Un[s](n) || o.push(ot(a.messages.types[s], t.fullField, t.type)) : s && U(n) !== t.type && o.push(ot(a.messages.types[s], t.fullField, t.type));
}, gy = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(ot(a.messages.whitespace, t.fullField));
};
const re = {
  required: Td,
  whitespace: gy,
  type: my,
  range: dy,
  enum: ly,
  pattern: uy
};
var vy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a);
  }
  r(i);
}, py = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    re.required(t, n, o, i, a, "array"), n != null && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, hy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re.type(t, n, o, i, a);
  }
  r(i);
}, yy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n, "date") && !t.required)
      return r();
    if (re.required(t, n, o, i, a), !je(n, "date")) {
      var c;
      n instanceof Date ? c = n : c = new Date(n), re.type(t, c, o, i, a), c && re.range(t, c.getTime(), o, i, a);
    }
  }
  r(i);
}, by = "enum", Cy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re[by](t, n, o, i, a);
  }
  r(i);
}, xy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, Sy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, Ey = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re.type(t, n, o, i, a);
  }
  r(i);
}, wy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, $y = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re.type(t, n, o, i, a);
  }
  r(i);
}, Oy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n, "string") && !t.required)
      return r();
    re.required(t, n, o, i, a), je(n, "string") || re.pattern(t, n, o, i, a);
  }
  r(i);
}, Py = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), je(n) || re.type(t, n, o, i, a);
  }
  r(i);
}, Ty = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : U(n);
  re.required(t, n, o, i, a, s), r(i);
}, Ny = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n, "string") && !t.required)
      return r();
    re.required(t, n, o, i, a, "string"), je(n, "string") || (re.type(t, n, o, i, a), re.range(t, n, o, i, a), re.pattern(t, n, o, i, a), t.whitespace === !0 && re.whitespace(t, n, o, i, a));
  }
  r(i);
}, pa = function(t, n, r, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (je(n, i) && !t.required)
      return r();
    re.required(t, n, o, s, a, i), je(n, i) || re.type(t, n, o, s, a);
  }
  r(s);
};
const Kn = {
  string: Ny,
  method: Ey,
  number: wy,
  boolean: hy,
  regexp: Py,
  integer: Sy,
  float: xy,
  array: py,
  object: $y,
  enum: Cy,
  pattern: Oy,
  date: yy,
  url: pa,
  hex: pa,
  email: pa,
  required: Ty,
  any: vy
};
var hr = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e), N(this, "rules", null), N(this, "_messages", fi), this.define(t);
  }
  return De(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (U(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(o) {
        var a = n[o];
        r.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = Bc(di(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, s = o, c = a;
      if (typeof s == "function" && (c = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return c && c(null, i), Promise.resolve(i);
      function l(v) {
        var p = [], m = {};
        function C(x) {
          if (Array.isArray(x)) {
            var S;
            p = (S = p).concat.apply(S, B(x));
          } else
            p.push(x);
        }
        for (var y = 0; y < v.length; y++)
          C(v[y]);
        p.length ? (m = gi(p), c(p, m)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === fi && (u = di()), Bc(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var d = {}, f = s.keys || Object.keys(this.rules);
      f.forEach(function(v) {
        var p = r.rules[v], m = i[v];
        p.forEach(function(C) {
          var y = C;
          typeof y.transform == "function" && (i === n && (i = T({}, i)), m = i[v] = y.transform(m), m != null && (y.type = y.type || (Array.isArray(m) ? "array" : U(m)))), typeof y == "function" ? y = {
            validator: y
          } : y = T({}, y), y.validator = r.getValidationMethod(y), y.validator && (y.field = v, y.fullField = y.fullField || v, y.type = r.getType(y), d[v] = d[v] || [], d[v].push({
            rule: y,
            value: m,
            source: i,
            field: v
          }));
        });
      });
      var h = {};
      return iy(d, s, function(v, p) {
        var m = v.rule, C = (m.type === "object" || m.type === "array") && (U(m.fields) === "object" || U(m.defaultField) === "object");
        C = C && (m.required || !m.required && v.value), m.field = v.field;
        function y(E, $) {
          return T(T({}, $), {}, {
            fullField: "".concat(m.fullField, ".").concat(E),
            fullFields: m.fullFields ? [].concat(B(m.fullFields), [E]) : [E]
          });
        }
        function x() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(E) ? E : [E];
          !s.suppressWarning && $.length && e.warning("async-validator:", $), $.length && m.message !== void 0 && ($ = [].concat(m.message));
          var O = $.map(Hc(m, i));
          if (s.first && O.length)
            return h[m.field] = 1, p(O);
          if (!C)
            p(O);
          else {
            if (m.required && !v.value)
              return m.message !== void 0 ? O = [].concat(m.message).map(Hc(m, i)) : s.error && (O = [s.error(m, ot(s.messages.required, m.field))]), p(O);
            var P = {};
            m.defaultField && Object.keys(v.value).map(function(F) {
              P[F] = m.defaultField;
            }), P = T(T({}, P), v.rule.fields);
            var _ = {};
            Object.keys(P).forEach(function(F) {
              var M = P[F], A = Array.isArray(M) ? M : [M];
              _[F] = A.map(y.bind(null, F));
            });
            var I = new e(_);
            I.messages(s.messages), v.rule.options && (v.rule.options.messages = s.messages, v.rule.options.error = s.error), I.validate(v.value, v.rule.options || s, function(F) {
              var M = [];
              O && O.length && M.push.apply(M, B(O)), F && F.length && M.push.apply(M, B(F)), p(M.length ? M : null);
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
        throw new Error(ot("Unknown rule type %s", n.type));
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
N(hr, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Kn[t] = n;
});
N(hr, "warning", Pd);
N(hr, "messages", fi);
N(hr, "validators", Kn);
var rt = "'${name}' is not a valid ${type}", Nd = {
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
}, Wc = hr;
function Ry(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Gc = "CODE_LOGIC_ERROR";
function vi(e, t, n, r, o) {
  return pi.apply(this, arguments);
}
function pi() {
  return pi = on(/* @__PURE__ */ Ke().mark(function e(t, n, r, o, a) {
    var i, s, c, l, u, d, f, h, v;
    return Ke().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = T({}, r), delete i.ruleIndex, Wc.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (C) {
              return console.error(C), Promise.reject(Gc);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new Wc(N({}, t, [i])), u = gn(Nd, o.validateMessages), l.messages(u), d = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(N({}, t, n), T({}, o)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(C, y) {
            var x = C.message, S = x === Gc ? u.default : x;
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
            return vi("".concat(t, ".").concat(y), C, c, o, a);
          }));
        case 21:
          return f = m.sent, m.abrupt("return", f.reduce(function(C, y) {
            return [].concat(B(C), B(y));
          }, []));
        case 23:
          return h = T(T({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, a), v = d.map(function(C) {
            return typeof C == "string" ? Ry(C, h) : C;
          }), m.abrupt("return", v);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), pi.apply(this, arguments);
}
function _y(e, t, n, r, o, a) {
  var i = e.join("."), s = n.map(function(u, d) {
    var f = u.validator, h = T(T({}, u), {}, {
      ruleIndex: d
    });
    return f && (h.validator = function(v, p, m) {
      var C = !1, y = function() {
        for (var b = arguments.length, w = new Array(b), E = 0; E < b; E++)
          w[E] = arguments[E];
        Promise.resolve().then(function() {
          $e(!C, "Your validator function has already return a promise. `callback` will be ignored."), C || m.apply(void 0, w);
        });
      }, x = f(v, p, y);
      C = x && typeof x.then == "function" && typeof x.catch == "function", $e(C, "`callback` is deprecated. Please return a promise instead."), C && x.then(function() {
        m();
      }).catch(function(S) {
        m(S || " ");
      });
    }), h;
  }).sort(function(u, d) {
    var f = u.warningOnly, h = u.ruleIndex, v = d.warningOnly, p = d.ruleIndex;
    return !!f == !!v ? h - p : f ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ (function() {
      var u = on(/* @__PURE__ */ Ke().mark(function d(f, h) {
        var v, p, m;
        return Ke().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              v = 0;
            case 1:
              if (!(v < s.length)) {
                y.next = 12;
                break;
              }
              return p = s[v], y.next = 5, vi(i, t, p, r, a);
            case 5:
              if (m = y.sent, !m.length) {
                y.next = 9;
                break;
              }
              return h([{
                errors: m,
                rule: p
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
      return vi(i, t, u, r, a).then(function(d) {
        return {
          errors: d,
          rule: u
        };
      });
    });
    c = (o ? Iy(l) : My(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function My(e) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = on(/* @__PURE__ */ Ke().mark(function e(t) {
    return Ke().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, B(o));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), hi.apply(this, arguments);
}
function Iy(e) {
  return yi.apply(this, arguments);
}
function yi() {
  return yi = on(/* @__PURE__ */ Ke().mark(function e(t) {
    var n;
    return Ke().wrap(function(o) {
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
  })), yi.apply(this, arguments);
}
function Re(e) {
  return ui(e);
}
function qc(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = $t(e, r);
    n = gt(n, r, o);
  }), n;
}
function Cn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return Rd(t, r, n);
  });
}
function Rd(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function Fy(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || U(e) !== "object" || U(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return B(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Ay(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && U(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Uc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], a = t - n;
  return a > 0 ? [].concat(B(e.slice(0, n)), [o], B(e.slice(n, t)), B(e.slice(t + 1, r))) : a < 0 ? [].concat(B(e.slice(0, t)), B(e.slice(t + 1, n + 1)), [o], B(e.slice(n + 1, r))) : e;
}
var jy = ["name"], lt = [];
function ha(e, t, n, r, o, a) {
  return typeof e == "function" ? e(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== o;
}
var ns = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    var o;
    if (Le(this, n), o = t.call(this, r), N(te(o), "state", {
      resetCount: 0
    }), N(te(o), "cancelRegisterFunc", null), N(te(o), "mounted", !1), N(te(o), "touched", !1), N(te(o), "dirty", !1), N(te(o), "validatePromise", void 0), N(te(o), "prevValidating", void 0), N(te(o), "errors", lt), N(te(o), "warnings", lt), N(te(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, d = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, Re(d)), o.cancelRegisterFunc = null;
    }), N(te(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, d = u.prefixName, f = d === void 0 ? [] : d;
      return l !== void 0 ? [].concat(B(f), B(l)) : [];
    }), N(te(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, d = c.fieldContext;
      return u.map(function(f) {
        return typeof f == "function" ? f(d) : f;
      });
    }), N(te(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), N(te(o), "metaCache", null), N(te(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = T(T({}, o.getMeta()), {}, {
          destroy: c
        });
        nr(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), N(te(o), "onStoreChange", function(c, l, u) {
      var d = o.props, f = d.shouldUpdate, h = d.dependencies, v = h === void 0 ? [] : h, p = d.onReset, m = u.store, C = o.getNamePath(), y = o.getValue(c), x = o.getValue(m), S = l && Cn(l, C);
      switch (u.type === "valueUpdate" && u.source === "external" && !nr(y, x) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = lt, o.warnings = lt, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!l || S) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = lt, o.warnings = lt, o.triggerMetaEvent(), p?.(), o.refresh();
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
          if (f && ha(f, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var b = u.data;
          if (S) {
            "touched" in b && (o.touched = b.touched), "validating" in b && !("originRCField" in b) && (o.validatePromise = b.validating ? Promise.resolve([]) : null), "errors" in b && (o.errors = b.errors || lt), "warnings" in b && (o.warnings = b.warnings || lt), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in b && Cn(l, C, !0)) {
            o.reRender();
            return;
          }
          if (f && !C.length && ha(f, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var w = v.map(Re);
          if (w.some(function(E) {
            return Cn(u.relatedFields, E);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (S || (!v.length || C.length || f) && ha(f, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
      }
      f === !0 && o.reRender();
    }), N(te(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), d = c || {}, f = d.triggerName, h = d.validateOnly, v = h === void 0 ? !1 : h, p = Promise.resolve().then(/* @__PURE__ */ on(/* @__PURE__ */ Ke().mark(function m() {
        var C, y, x, S, b, w, E;
        return Ke().wrap(function(O) {
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
                var I = ui(_);
                return I.includes(f);
              })), !(b && f)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(P) {
                setTimeout(P, b);
              });
            case 8:
              if (o.validatePromise === p) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return E = _y(l, u, w, c, x, S), E.catch(function(P) {
                return P;
              }).then(function() {
                var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lt;
                if (o.validatePromise === p) {
                  var _;
                  o.validatePromise = null;
                  var I = [], F = [];
                  (_ = P.forEach) === null || _ === void 0 || _.call(P, function(M) {
                    var A = M.rule.warningOnly, j = M.errors, k = j === void 0 ? lt : j;
                    A ? F.push.apply(F, B(k)) : I.push.apply(I, B(k));
                  }), o.errors = I, o.warnings = F, o.triggerMetaEvent(), o.reRender();
                }
              }), O.abrupt("return", E);
            case 13:
            case "end":
              return O.stop();
          }
        }, m);
      })));
      return v || (o.validatePromise = p, o.dirty = !0, o.errors = lt, o.warnings = lt, o.triggerMetaEvent(), o.reRender()), p;
    }), N(te(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), N(te(o), "isFieldTouched", function() {
      return o.touched;
    }), N(te(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Ut), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), N(te(o), "getErrors", function() {
      return o.errors;
    }), N(te(o), "getWarnings", function() {
      return o.warnings;
    }), N(te(o), "isListField", function() {
      return o.props.isListField;
    }), N(te(o), "isList", function() {
      return o.props.isList;
    }), N(te(o), "isPreserve", function() {
      return o.props.preserve;
    }), N(te(o), "getMeta", function() {
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
    }), N(te(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return T(T({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Ta(c);
      return u.length !== 1 || !/* @__PURE__ */ g.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), N(te(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return $t(c || l(!0), u);
    }), N(te(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, d = l.trigger, f = l.validateTrigger, h = l.getValueFromEvent, v = l.normalize, p = l.valuePropName, m = l.getValueProps, C = l.fieldContext, y = f !== void 0 ? f : C.validateTrigger, x = o.getNamePath(), S = C.getInternalHooks, b = C.getFieldsValue, w = S(Ut), E = w.dispatch, $ = o.getValue(), O = m || function(M) {
        return N({}, p, M);
      }, P = c[d], _ = u !== void 0 ? O($) : {};
      process.env.NODE_ENV !== "production" && _ && Object.keys(_).forEach(function(M) {
        $e(typeof _[M] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(M, ")"));
      });
      var I = T(T({}, c), _);
      I[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var M, A = arguments.length, j = new Array(A), k = 0; k < A; k++)
          j[k] = arguments[k];
        h ? M = h.apply(void 0, j) : M = Ay.apply(void 0, [p].concat(j)), v && (M = v(M, $, b(!0))), M !== $ && E({
          type: "updateValue",
          namePath: x,
          value: M
        }), P && P.apply(void 0, j);
      };
      var F = ui(y || []);
      return F.forEach(function(M) {
        var A = I[M];
        I[M] = function() {
          A && A.apply(void 0, arguments);
          var j = o.props.rules;
          j && j.length && E({
            type: "validateField",
            namePath: x,
            triggerName: M
          });
        };
      }), I;
    }), r.fieldContext) {
      var a = r.fieldContext.getInternalHooks, i = a(Ut), s = i.initEntityValue;
      s(te(o));
    }
    return o;
  }
  return De(n, [{
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
N(ns, "contextType", Rn);
N(ns, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function _d(e) {
  var t, n = e.name, r = We(e, jy), o = g.useContext(Rn), a = g.useContext(go), i = n !== void 0 ? Re(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && $e(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(ns, ge({
    key: c,
    name: i,
    isListField: s
  }, r, {
    fieldContext: o
  }));
}
function ky(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = g.useContext(Rn), c = g.useContext(go), l = g.useRef({
    keys: [],
    id: 0
  }), u = l.current, d = g.useMemo(function() {
    var p = Re(s.prefixName) || [];
    return [].concat(B(p), B(Re(t)));
  }, [s.prefixName, t]), f = g.useMemo(function() {
    return T(T({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), h = g.useMemo(function() {
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
  return /* @__PURE__ */ g.createElement(go.Provider, {
    value: h
  }, /* @__PURE__ */ g.createElement(Rn.Provider, {
    value: f
  }, /* @__PURE__ */ g.createElement(_d, {
    name: [],
    shouldUpdate: v,
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(p, m) {
    var C = p.value, y = C === void 0 ? [] : C, x = p.onChange, S = s.getFieldValue, b = function() {
      var O = S(d || []);
      return O || [];
    }, w = {
      add: function(O, P) {
        var _ = b();
        P >= 0 && P <= _.length ? (u.keys = [].concat(B(u.keys.slice(0, P)), [u.id], B(u.keys.slice(P))), x([].concat(B(_.slice(0, P)), [O], B(_.slice(P))))) : (process.env.NODE_ENV !== "production" && (P < 0 || P > _.length) && $e(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(B(u.keys), [u.id]), x([].concat(B(_), [O]))), u.id += 1;
      },
      remove: function(O) {
        var P = b(), _ = new Set(Array.isArray(O) ? O : [O]);
        _.size <= 0 || (u.keys = u.keys.filter(function(I, F) {
          return !_.has(F);
        }), x(P.filter(function(I, F) {
          return !_.has(F);
        })));
      },
      move: function(O, P) {
        if (O !== P) {
          var _ = b();
          O < 0 || O >= _.length || P < 0 || P >= _.length || (u.keys = Uc(u.keys, O, P), x(Uc(_, O, P)));
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
function Ly(e) {
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
var Md = "__@field_split__";
function ya(e) {
  return e.map(function(t) {
    return "".concat(U(t), ":").concat(t);
  }).join(Md);
}
var fn = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), N(this, "kvs", /* @__PURE__ */ new Map());
  }
  return De(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(ya(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(ya(n));
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
      this.kvs.delete(ya(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return B(this.kvs.entries()).map(function(r) {
        var o = L(r, 2), a = o[0], i = o[1], s = a.split(Md);
        return n({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = L(l, 3), d = u[1], f = u[2];
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
})(), Dy = ["name"], Vy = /* @__PURE__ */ De(function e(t) {
  var n = this;
  Le(this, e), N(this, "formHooked", !1), N(this, "forceRootUpdate", void 0), N(this, "subscribable", !0), N(this, "store", {}), N(this, "fieldEntities", []), N(this, "initialValues", {}), N(this, "callbacks", {}), N(this, "validateMessages", null), N(this, "preserve", null), N(this, "lastValidatePromise", null), N(this, "getForm", function() {
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
  }), N(this, "getInternalHooks", function(r) {
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
  }), N(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), N(this, "prevWithoutPreserves", null), N(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var a, i = gn(r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = gt(i, c, $t(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), N(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new fn();
      n.getFieldEntities(!0).forEach(function(a) {
        n.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), N(this, "getInitialValue", function(r) {
    var o = $t(n.initialValues, r);
    return r.length ? gn(o) : o;
  }), N(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), N(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), N(this, "setPreserve", function(r) {
    n.preserve = r;
  }), N(this, "watchList", []), N(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), N(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), a = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(o, a, r);
      });
    }
  }), N(this, "timeoutId", null), N(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || $e(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), N(this, "updateStore", function(r) {
    n.store = r;
  }), N(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), N(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new fn();
    return n.getFieldEntities(r).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), N(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(a) {
      var i = Re(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: Re(a)
      };
    });
  }), N(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var a, i, s;
    if (r === !0 || Array.isArray(r) ? (a = r, i = o) : r && U(r) === "object" && (s = r.strict, i = r.filter), a === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var d, f, h = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var v, p;
        if ((v = (p = u).isList) !== null && v !== void 0 && v.call(p))
          return;
      } else if (!a && (d = (f = u).isListField) !== null && d !== void 0 && d.call(f))
        return;
      if (!i)
        l.push(h);
      else {
        var m = "getMeta" in u ? u.getMeta() : null;
        i(m) && l.push(h);
      }
    }), qc(n.store, l.map(Re));
  }), N(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = Re(r);
    return $t(n.store, o);
  }), N(this, "getFieldsError", function(r) {
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
  }), N(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = Re(r), a = n.getFieldsError([o])[0];
    return a.errors;
  }), N(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = Re(r), a = n.getFieldsError([o])[0];
    return a.warnings;
  }), N(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(Re), l = !1) : (c = null, l = i) : (c = i.map(Re), l = s);
    var u = n.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(p) {
        return d(p) || p.isList();
      }) : u.some(d);
    var f = new fn();
    c.forEach(function(p) {
      f.set(p, []);
    }), u.forEach(function(p) {
      var m = p.getNamePath();
      c.forEach(function(C) {
        C.every(function(y, x) {
          return m[x] === y;
        }) && f.update(C, function(y) {
          return [].concat(B(y), [p]);
        });
      });
    });
    var h = function(m) {
      return m.some(d);
    }, v = f.map(function(p) {
      var m = p.value;
      return m;
    });
    return l ? v.every(h) : v.some(h);
  }), N(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), N(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = r.map(Re);
    return o.some(function(i) {
      var s = i.getNamePath();
      return Cn(a, s) && i.isFieldValidating();
    });
  }), N(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), N(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new fn(), a = n.getFieldEntities(!0);
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
          var f = u.getNamePath(), h = n.getInitialValue(f);
          if (h !== void 0)
            $e(!1, "Form already set 'initialValues' with path '".concat(f.join("."), "'. Field can not overwrite it."));
          else {
            var v = o.get(f);
            if (v && v.size > 1)
              $e(!1, "Multiple Field with path '".concat(f.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (v) {
              var p = n.getFieldValue(f), m = u.isListField();
              !m && (!r.skipExist || p === void 0) && n.updateStore(gt(n.store, f, B(v)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, B(B(l).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = a, i(s);
  }), N(this, "resetFields", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(gn(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var a = r.map(Re);
    a.forEach(function(i) {
      var s = n.getInitialValue(i);
      n.updateStore(gt(n.store, i, s));
    }), n.resetWithFieldInitialValue({
      namePathList: a
    }), n.notifyObservers(o, a, {
      type: "reset"
    }), n.notifyWatch(a);
  }), N(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, a = [];
    r.forEach(function(i) {
      var s = i.name, c = We(i, Dy), l = Re(s);
      a.push(l), "value" in c && n.updateStore(gt(n.store, l, c.value)), n.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(a);
  }), N(this, "getFields", function() {
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
  }), N(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var a = r.getNamePath(), i = $t(n.store, a);
      i === void 0 && n.updateStore(gt(n.store, a, o));
    }
  }), N(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), N(this, "registerField", function(r) {
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
            !Rd(d.getNamePath(), o)
          );
        })) {
          var u = n.store;
          n.updateStore(gt(u, o, l, !0)), n.notifyObservers(u, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, o);
        }
      }
      n.notifyWatch([o]);
    };
  }), N(this, "dispatch", function(r) {
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
  }), N(this, "notifyObservers", function(r, o, a) {
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
  }), N(this, "triggerDependenciesUpdate", function(r, o) {
    var a = n.getDependencyChildrenFields(o);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(B(a))
    }), a;
  }), N(this, "updateValue", function(r, o) {
    var a = Re(r), i = n.store;
    n.updateStore(gt(n.store, a, o)), n.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var s = n.triggerDependenciesUpdate(i, a), c = n.callbacks.onValuesChange;
    if (c) {
      var l = qc(n.store, [a]);
      c(l, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(B(s)));
  }), N(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var a = gn(n.store, r);
      n.updateStore(a);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), N(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), N(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new fn();
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
  }), N(this, "triggerOnFieldsChange", function(r, o) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var i = n.getFields();
      if (o) {
        var s = new fn();
        o.forEach(function(l) {
          var u = l.name, d = l.errors;
          s.set(u, d);
        }), i.forEach(function(l) {
          l.errors = s.get(l.name) || l.errors;
        });
      }
      var c = i.filter(function(l) {
        var u = l.name;
        return Cn(r, u);
      });
      c.length && a(c, i);
    }
  }), N(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var a, i;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, i = o) : i = r;
    var s = !!a, c = s ? a.map(Re) : [], l = [], u = String(Date.now()), d = /* @__PURE__ */ new Set(), f = i || {}, h = f.recursive, v = f.dirty;
    n.getFieldEntities(!0).forEach(function(y) {
      if (s || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(v && !y.isFieldDirty())) {
        var x = y.getNamePath();
        if (d.add(x.join(u)), !s || Cn(c, x, h)) {
          var S = y.validateRules(T({
            validateMessages: T(T({}, Nd), n.validateMessages)
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
              P ? $.push.apply($, B(_)) : E.push.apply(E, B(_));
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
    var p = Ly(l);
    n.lastValidatePromise = p, p.catch(function(y) {
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
    var m = p.then(function() {
      return n.lastValidatePromise === p ? Promise.resolve(n.getFieldsValue(c)) : Promise.reject([]);
    }).catch(function(y) {
      var x = y.filter(function(S) {
        return S && S.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(c),
        errorFields: x,
        outOfDate: n.lastValidatePromise !== p
      });
    });
    m.catch(function(y) {
      return y;
    });
    var C = c.filter(function(y) {
      return d.has(y.join(u));
    });
    return n.triggerOnFieldsChange(C), m;
  }), N(this, "submit", function() {
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
function Id(e) {
  var t = g.useRef(), n = g.useState({}), r = L(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new Vy(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var bi = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Hy = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, a = t.children, i = g.useContext(bi), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(bi.Provider, {
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
        l && (s.current = T(T({}, s.current), {}, N({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = T({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, By = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], zy = function(t, n) {
  var r = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, d = t.validateMessages, f = t.validateTrigger, h = f === void 0 ? "onChange" : f, v = t.onValuesChange, p = t.onFieldsChange, m = t.onFinish, C = t.onFinishFailed, y = t.clearOnDestroy, x = We(t, By), S = g.useRef(null), b = g.useContext(bi), w = Id(i), E = L(w, 1), $ = E[0], O = $.getInternalHooks(Ut), P = O.useSubscribe, _ = O.setInitialValues, I = O.setCallbacks, F = O.setValidateMessages, M = O.setPreserve, A = O.destroyForm;
  g.useImperativeHandle(n, function() {
    return T(T({}, $), {}, {
      nativeElement: S.current
    });
  }), g.useEffect(function() {
    return b.registerForm(r, $), function() {
      b.unregisterForm(r);
    };
  }, [b, $, r]), F(T(T({}, b.validateMessages), d)), I({
    onValuesChange: v,
    onFieldsChange: function(X) {
      if (b.triggerFormChange(r, X), p) {
        for (var G = arguments.length, q = new Array(G > 1 ? G - 1 : 0), oe = 1; oe < G; oe++)
          q[oe - 1] = arguments[oe];
        p.apply(void 0, [X].concat(q));
      }
    },
    onFinish: function(X) {
      b.triggerFormFinish(r, X), m && m(X);
    },
    onFinishFailed: C
  }), M(s);
  var j = g.useRef(null);
  _(o, !j.current), j.current || (j.current = !0), g.useEffect(
    function() {
      return function() {
        return A(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var k, W = typeof c == "function";
  if (W) {
    var H = $.getFieldsValue(!0);
    k = c(H, $);
  } else
    k = c;
  P(!W);
  var Q = g.useRef();
  g.useEffect(function() {
    Fy(Q.current || [], a || []) || $.setFields(a || []), Q.current = a;
  }, [a, $]);
  var Z = g.useMemo(function() {
    return T(T({}, $), {}, {
      validateTrigger: h
    });
  }, [$, h]), K = /* @__PURE__ */ g.createElement(go.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Rn.Provider, {
    value: Z
  }, k));
  return u === !1 ? K : /* @__PURE__ */ g.createElement(u, ge({}, x, {
    ref: S,
    onSubmit: function(X) {
      X.preventDefault(), X.stopPropagation(), $.submit();
    },
    onReset: function(X) {
      var G;
      X.preventDefault(), $.resetFields(), (G = x.onReset) === null || G === void 0 || G.call(x, X);
    }
  }), K);
};
function Xc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Wy = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = me(t);
  $e(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Gy() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = o === void 0 ? {} : o, i = J0(a) ? {
    form: a
  } : a, s = i.form, c = Zt(), l = L(c, 2), u = l[0], d = l[1], f = Ae(function() {
    return Xc(u);
  }, [u]), h = me(f);
  h.current = f;
  var v = ae(Rn), p = s || v, m = p && p._init;
  process.env.NODE_ENV !== "production" && $e(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var C = Re(r), y = me(C);
  return y.current = C, Wy(C), Ye(
    function() {
      if (m) {
        var x = p.getFieldsValue, S = p.getInternalHooks, b = S(Ut), w = b.registerWatch, E = function(_, I) {
          var F = i.preserve ? I : _;
          return typeof r == "function" ? r(F) : $t(F, y.current);
        }, $ = w(function(P, _) {
          var I = E(P, _), F = Xc(I);
          h.current !== F && (h.current = F, d(I));
        }), O = E(x(), x(!0));
        return u !== O && d(O), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), u;
}
var qy = /* @__PURE__ */ g.forwardRef(zy), yr = qy;
yr.FormProvider = Hy;
yr.Field = _d;
yr.List = ky;
yr.useForm = Id;
yr.useWatch = Gy;
const Ci = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (Ci.displayName = "FormItemInputContext");
const Uy = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = g.useContext(Ci), o = g.useMemo(() => {
    const a = Object.assign({}, r);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, r]);
  return /* @__PURE__ */ g.createElement(Ci.Provider, {
    value: o
  }, e);
}, Xy = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ R.createElement(Uy, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ R.createElement(Ch, null, o)), o;
}, Yy = () => Ze() && window.document.documentElement, Ho = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    size: o,
    shape: a
  } = e, i = z({
    [`${t}-lg`]: o === "large",
    [`${t}-sm`]: o === "small"
  }), s = z({
    [`${t}-circle`]: a === "circle",
    [`${t}-square`]: a === "square",
    [`${t}-round`]: a === "round"
  }), c = g.useMemo(() => typeof o == "number" ? {
    width: o,
    height: o,
    lineHeight: `${o}px`
  } : {}, [o]);
  return /* @__PURE__ */ g.createElement("span", {
    className: z(t, i, s, n),
    style: Object.assign(Object.assign({}, c), r)
  });
}, Ky = new Te("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Bo = (e) => ({
  height: e,
  lineHeight: ne(e)
}), xn = (e) => Object.assign({
  width: e
}, Bo(e)), Qy = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: Ky,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), ba = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Bo(e)), Zy = (e) => {
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
    }, xn(r)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, xn(o)),
    [`${t}${t}-sm`]: Object.assign({}, xn(a))
  };
}, Jy = (e) => {
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
    }, ba(t, s)),
    [`${r}-lg`]: Object.assign({}, ba(o, s)),
    [`${r}-sm`]: Object.assign({}, ba(a, s))
  };
}, Yc = (e) => Object.assign({
  width: e
}, Bo(e)), eb = (e) => {
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
    }, Yc(a(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, Yc(n)), {
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
}, Ca = (e, t, n) => {
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
}, xa = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Bo(e)), tb = (e) => {
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
    }, xa(r, s))
  }, Ca(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, xa(o, s))
  }), Ca(e, o, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, xa(a, s))
  }), Ca(e, a, `${n}-sm`));
}, nb = (e) => {
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
    marginSM: h,
    borderRadius: v,
    titleHeight: p,
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
        }, xn(c)),
        [`${n}-circle`]: {
          borderRadius: "50%"
        },
        [`${n}-lg`]: Object.assign({}, xn(l)),
        [`${n}-sm`]: Object.assign({}, xn(u))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [r]: {
          width: "100%",
          height: p,
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
        marginBlockStart: h,
        [`+ ${o}`]: {
          marginBlockStart: x
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, tb(e)), Zy(e)), Jy(e)), eb(e)),
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
      `]: Object.assign({}, Qy(e))
    }
  };
}, rb = (e) => {
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
  } = e, r = bt(e, {
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
  return nb(r);
}, rb, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), ob = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    shape: a = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(ye), c = s("skeleton", t), [l, u, d] = Ln(c), f = Fo(e, ["prefixCls", "className"]), h = z(c, `${c}-element`, {
    [`${c}-active`]: o
  }, n, r, u, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: h
  }, /* @__PURE__ */ g.createElement(Ho, Object.assign({
    prefixCls: `${c}-avatar`,
    shape: a,
    size: i
  }, f))));
}, ab = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(ye), c = s("skeleton", t), [l, u, d] = Ln(c), f = Fo(e, ["prefixCls"]), h = z(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: h
  }, /* @__PURE__ */ g.createElement(Ho, Object.assign({
    prefixCls: `${c}-button`,
    size: i
  }, f))));
}, ib = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", sb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a
  } = e, {
    getPrefixCls: i
  } = g.useContext(ye), s = i("skeleton", t), [c, l, u] = Ln(s), d = z(s, `${s}-element`, {
    [`${s}-active`]: a
  }, n, r, l, u);
  return c(/* @__PURE__ */ g.createElement("div", {
    className: d
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(`${s}-image`, n),
    style: o
  }, /* @__PURE__ */ g.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ g.createElement("title", null, "Image placeholder"), /* @__PURE__ */ g.createElement("path", {
    d: ib,
    className: `${s}-image-path`
  })))));
}, cb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(ye), c = s("skeleton", t), [l, u, d] = Ln(c), f = Fo(e, ["prefixCls"]), h = z(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: h
  }, /* @__PURE__ */ g.createElement(Ho, Object.assign({
    prefixCls: `${c}-input`,
    size: i
  }, f))));
}, lb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a,
    children: i
  } = e, {
    getPrefixCls: s
  } = g.useContext(ye), c = s("skeleton", t), [l, u, d] = Ln(c), f = z(c, `${c}-element`, {
    [`${c}-active`]: a
  }, u, n, r, d);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: f
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(`${c}-image`, n),
    style: o
  }, i)));
}, ub = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, db = (e) => {
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
        width: ub(s, e)
      }
    })
  ));
  return /* @__PURE__ */ g.createElement("ul", {
    className: z(t, n),
    style: r
  }, a);
}, fb = ({
  prefixCls: e,
  className: t,
  width: n,
  style: r
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ g.createElement("h3", {
    className: z(e, t),
    style: Object.assign({
      width: n
    }, r)
  })
);
function Sa(e) {
  return e && typeof e == "object" ? e : {};
}
function mb(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function gb(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function vb(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
const an = (e) => {
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
    direction: h,
    className: v,
    style: p
  } = Cu("skeleton"), m = f("skeleton", t), [C, y, x] = Ln(m);
  if (n || !("loading" in e)) {
    const S = !!s, b = !!c, w = !!l;
    let E;
    if (S) {
      const P = Object.assign(Object.assign({
        prefixCls: `${m}-avatar`
      }, mb(b, w)), Sa(s));
      E = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-header`
      }, /* @__PURE__ */ g.createElement(Ho, Object.assign({}, P)));
    }
    let $;
    if (b || w) {
      let P;
      if (b) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-title`
        }, gb(S, w)), Sa(c));
        P = /* @__PURE__ */ g.createElement(fb, Object.assign({}, I));
      }
      let _;
      if (w) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-paragraph`
        }, vb(S, b)), Sa(l));
        _ = /* @__PURE__ */ g.createElement(db, Object.assign({}, I));
      }
      $ = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-content`
      }, P, _);
    }
    const O = z(m, {
      [`${m}-with-avatar`]: S,
      [`${m}-active`]: u,
      [`${m}-rtl`]: h === "rtl",
      [`${m}-round`]: d
    }, v, r, o, y, x);
    return C(/* @__PURE__ */ g.createElement("div", {
      className: O,
      style: Object.assign(Object.assign({}, p), a)
    }, E, $));
  }
  return i ?? null;
};
an.Button = ab;
an.Avatar = ob;
an.Input = cb;
an.Image = sb;
an.Node = lb;
process.env.NODE_ENV !== "production" && (an.displayName = "Skeleton");
function Kc() {
}
const pb = /* @__PURE__ */ g.createContext({
  add: Kc,
  remove: Kc
});
function hb(e) {
  const t = g.useContext(pb), n = g.useRef(null);
  return Pt((o) => {
    if (o) {
      const a = e ? o.querySelector(e) : o;
      a && (t.add(a), n.current = a);
    } else
      t.remove(n.current);
  });
}
const Qc = () => {
  const {
    cancelButtonProps: e,
    cancelTextLocale: t,
    onCancel: n
  } = ae(pr);
  return /* @__PURE__ */ R.createElement(kn, Object.assign({
    onClick: n
  }, e), t);
}, Zc = () => {
  const {
    confirmLoading: e,
    okButtonProps: t,
    okType: n,
    okTextLocale: r,
    onOk: o
  } = ae(pr);
  return /* @__PURE__ */ R.createElement(kn, Object.assign({}, ld(n), {
    loading: e,
    onClick: o
  }, t), r);
};
function Fd(e, t) {
  return /* @__PURE__ */ R.createElement("span", {
    className: `${e}-close-x`
  }, t || /* @__PURE__ */ R.createElement(An, {
    className: `${e}-close-icon`
  }));
}
const Ad = (e) => {
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
  } = e, [u] = Eo("Modal", fu()), d = t || u?.okText, f = r || u?.cancelText, h = R.useMemo(() => ({
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
  return typeof l == "function" || typeof l > "u" ? (v = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Qc, null), /* @__PURE__ */ R.createElement(Zc, null)), typeof l == "function" && (v = l(v, {
    OkBtn: Zc,
    CancelBtn: Qc
  })), v = /* @__PURE__ */ R.createElement(xd, {
    value: h
  }, v)) : v = l, /* @__PURE__ */ R.createElement(xu, {
    disabled: !1
  }, v);
}, yb = (e) => {
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
}, bb = (e) => {
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
}, Cb = (e, t) => {
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
}, xi = (e, t) => Cb(e, t), xb = (e, t, n) => ({
  [`@media (min-width: ${ne(t)})`]: Object.assign({}, xi(e, n))
}), Sb = () => ({}), Eb = () => ({});
rn("Grid", yb, Sb);
const jd = (e) => ({
  xs: e.screenXSMin,
  sm: e.screenSMMin,
  md: e.screenMDMin,
  lg: e.screenLGMin,
  xl: e.screenXLMin,
  xxl: e.screenXXLMin
});
rn("Grid", (e) => {
  const t = bt(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = jd(t);
  return delete n.xs, [bb(t), xi(t, ""), xi(t, "-xs"), Object.keys(n).map((r) => xb(t, n[r], `-${r}`)).reduce((r, o) => Object.assign(Object.assign({}, r), o), {})];
}, Eb);
function Jc(e) {
  return {
    position: e,
    inset: 0
  };
}
const wb = (e) => {
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
      [`${t}-mask`]: Object.assign(Object.assign({}, Jc("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, Jc("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: Xh(e)
  }];
}, $b = (e) => {
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
            margin: `${ne(e.marginXS)} auto`
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
      [t]: Object.assign(Object.assign({}, Wi(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${ne(e.calc(e.margin).mul(2).equal())})`,
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
            lineHeight: ne(e.modalCloseBtnSize),
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
        }, Gi(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${ne(e.borderRadiusLG)} ${ne(e.borderRadiusLG)} 0 0`,
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
            margin: `${ne(e.margin)} auto`
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
}, Ob = (e) => {
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
}, Pb = (e) => {
  const {
    componentCls: t
  } = e, n = jd(e), r = Object.assign({}, n);
  delete r.xs;
  const o = `--${t.replace(".", "")}-`, a = Object.keys(r).map((i) => ({
    [`@media (min-width: ${ne(r[i])})`]: {
      width: `var(${o}${i}-width)`
    }
  }));
  return {
    [`${t}-root`]: {
      [t]: [].concat(B(Object.keys(n).map((i, s) => {
        const c = Object.keys(n)[s - 1];
        return c ? {
          [`${o}${i}-width`]: `var(${o}${c}-width)`
        } : null;
      })), [{
        width: `var(${o}xs-width)`
      }], B(a))
    }
  };
}, kd = (e) => {
  const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5;
  return bt(e, {
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
}, Ld = (e) => ({
  footerBg: "transparent",
  headerBg: e.colorBgElevated,
  titleLineHeight: e.lineHeightHeading5,
  titleFontSize: e.fontSizeHeading5,
  contentBg: e.colorBgElevated,
  titleColor: e.colorTextHeading,
  // internal
  contentPadding: e.wireframe ? 0 : `${ne(e.paddingMD)} ${ne(e.paddingContentHorizontalLG)}`,
  headerPadding: e.wireframe ? `${ne(e.padding)} ${ne(e.paddingLG)}` : 0,
  headerBorderBottom: e.wireframe ? `${ne(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  headerMarginBottom: e.wireframe ? 0 : e.marginXS,
  bodyPadding: e.wireframe ? e.paddingLG : 0,
  footerPadding: e.wireframe ? `${ne(e.paddingXS)} ${ne(e.padding)}` : 0,
  footerBorderTop: e.wireframe ? `${ne(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  footerBorderRadius: e.wireframe ? `0 0 ${ne(e.borderRadiusLG)} ${ne(e.borderRadiusLG)}` : 0,
  footerMarginTop: e.wireframe ? 0 : e.marginSM,
  confirmBodyPadding: e.wireframe ? `${ne(e.padding * 2)} ${ne(e.padding * 2)} ${ne(e.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
  confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
}), Dd = rn("Modal", (e) => {
  const t = kd(e);
  return [$b(t), Ob(t), wb(t), i0(t, "zoom"), Pb(t)];
}, Ld, {
  unitless: {
    titleLineHeight: !0
  }
});
var Tb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Si;
const Nb = (e) => {
  Si = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    Si = null;
  }, 100);
};
Yy() && document.documentElement.addEventListener("click", Nb, !0);
const Vd = (e) => {
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
    classNames: h,
    styles: v,
    children: p,
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
  } = e, P = Tb(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose", "panelRef", "modalRender"]), {
    getPopupContainer: _,
    getPrefixCls: I,
    direction: F,
    modal: M
  } = g.useContext(ye), A = (he) => {
    C || b?.(he);
  }, j = (he) => {
    S?.(he);
  };
  if (process.env.NODE_ENV !== "production") {
    const he = it("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"], ["destroyOnClose", "destroyOnHidden"]].forEach(([Ve, Fe]) => {
      he.deprecated(!(Ve in e), Ve, Fe);
    });
  }
  const k = I("modal", t), W = I(), H = jn(k), [Q, Z, K] = Dd(k, H), Y = z(a, {
    [`${k}-centered`]: i ?? M?.centered,
    [`${k}-wrap-rtl`]: F === "rtl"
  }), X = f !== null && !m ? /* @__PURE__ */ g.createElement(Ad, Object.assign({}, e, {
    onOk: j,
    onCancel: A
  })) : null, [G, q, oe, Pe] = _p(yc(e), yc(M), {
    closable: !0,
    closeIcon: /* @__PURE__ */ g.createElement(An, {
      className: `${k}-close-icon`
    }),
    closeIconRender: (he) => Fd(k, he)
  }), be = O ? (he) => /* @__PURE__ */ g.createElement("div", {
    className: `${k}-render`
  }, O(he)) : void 0, xe = `.${k}-${O ? "render" : "content"}`, Se = hb(xe), V = yo($, Se), [ve, D] = kp("Modal", y), [ee, ie] = g.useMemo(() => d && typeof d == "object" ? [void 0, d] : [d, void 0], [d]), Qe = g.useMemo(() => {
    const he = {};
    return ie && Object.keys(ie).forEach((Ve) => {
      const Fe = ie[Ve];
      Fe !== void 0 && (he[`--${k}-${Ve}-width`] = typeof Fe == "number" ? `${Fe}px` : Fe);
    }), he;
  }, [k, ie]);
  return Q(/* @__PURE__ */ g.createElement(Xy, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ g.createElement(Qi.Provider, {
    value: D
  }, /* @__PURE__ */ g.createElement(Od, Object.assign({
    width: ee
  }, P, {
    zIndex: ve,
    getContainer: s === void 0 ? _ : s,
    prefixCls: k,
    rootClassName: z(Z, r, K, H),
    footer: X,
    visible: o ?? u,
    mousePosition: x ?? Si,
    onClose: A,
    closable: G && Object.assign({
      disabled: oe,
      closeIcon: q
    }, Pe),
    closeIcon: q,
    focusTriggerAfterClose: c,
    transitionName: mo(W, "zoom", e.transitionName),
    maskTransitionName: mo(W, "fade", e.maskTransitionName),
    className: z(Z, n, M?.className),
    style: Object.assign(Object.assign(Object.assign({}, M?.style), l), Qe),
    classNames: Object.assign(Object.assign(Object.assign({}, M?.classNames), h), {
      wrapper: z(Y, h?.wrapper)
    }),
    styles: Object.assign(Object.assign({}, M?.styles), v),
    panelRef: V,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: w ?? E,
    modalRender: be
  }), m ? /* @__PURE__ */ g.createElement(an, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 4
    },
    className: `${k}-body-skeleton`
  }) : p))));
}, Rb = (e) => {
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
      [`${u}-body-wrapper`]: Object.assign({}, lv()),
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
        maxWidth: `calc(100% - ${ne(e.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${e.iconCls} + ${u}-paragraph`]: {
        maxWidth: `calc(100% - ${ne(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`
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
}, _b = qi(["Modal", "confirm"], (e) => {
  const t = kd(e);
  return Rb(t);
}, Ld, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var Mb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Hd = (e) => {
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
  } = e, u = Mb(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const w = it("Modal");
    process.env.NODE_ENV !== "production" && w(!(typeof n == "string" && n.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${n}\` at https://ant.design/components/icon`);
  }
  let d = n;
  if (!n && n !== null)
    switch (i) {
      case "info":
        d = /* @__PURE__ */ g.createElement(No, null);
        break;
      case "success":
        d = /* @__PURE__ */ g.createElement(Oo, null);
        break;
      case "error":
        d = /* @__PURE__ */ g.createElement(Po, null);
        break;
      default:
        d = /* @__PURE__ */ g.createElement(To, null);
    }
  const f = s ?? i === "confirm", h = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", [v] = Eo("Modal"), p = l || v, m = r || (f ? p?.okText : p?.justOkText), C = o || p?.cancelText, y = g.useMemo(() => Object.assign({
    autoFocusButton: h,
    cancelTextLocale: C,
    okTextLocale: m,
    mergedOkCancel: f
  }, u), [h, C, m, f, u]), x = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Rc, null), /* @__PURE__ */ g.createElement(_c, null)), S = e.title !== void 0 && e.title !== null, b = `${a}-body`;
  return /* @__PURE__ */ g.createElement("div", {
    className: `${a}-body-wrapper`
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(b, {
      [`${b}-has-title`]: S
    })
  }, d, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-paragraph`
  }, S && /* @__PURE__ */ g.createElement("span", {
    className: `${a}-title`
  }, e.title), /* @__PURE__ */ g.createElement("div", {
    className: `${a}-content`
  }, e.content))), c === void 0 || typeof c == "function" ? /* @__PURE__ */ g.createElement(xd, {
    value: y
  }, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-btns`
  }, typeof c == "function" ? c(x, {
    OkBtn: _c,
    CancelBtn: Rc
  }) : x)) : c, /* @__PURE__ */ g.createElement(_b, {
    prefixCls: t
  }));
}, Bd = (e) => {
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
    const b = it("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach(([w, E]) => {
      b.deprecated(!(w in e), w, E);
    });
  }
  const h = `${a}-confirm`, v = e.width || 416, p = e.style || {}, m = e.mask === void 0 ? !0 : e.mask, C = e.maskClosable === void 0 ? !1 : e.maskClosable, y = z(h, `${h}-${e.type}`, {
    [`${h}-rtl`]: o === "rtl"
  }, e.className), [, x] = Nt(), S = g.useMemo(() => n !== void 0 ? n : x.zIndexPopupBase + _o, [n, x]);
  return /* @__PURE__ */ g.createElement(Vd, Object.assign({}, e, {
    className: y,
    wrapClassName: z({
      [`${h}-centered`]: !!e.centered
    }, i),
    onCancel: () => {
      t?.({
        triggerCancel: !0
      }), u?.(!1);
    },
    title: f,
    footer: null,
    transitionName: mo(s || "", "zoom", e.transitionName),
    maskTransitionName: mo(s || "", "fade", e.maskTransitionName),
    mask: m,
    maskClosable: C,
    style: p,
    styles: Object.assign({
      body: c,
      mask: r
    }, d),
    width: v,
    zIndex: S,
    closable: l
  }), /* @__PURE__ */ g.createElement(Hd, Object.assign({}, e, {
    confirmPrefixCls: h
  })));
}, rs = (e) => {
  const {
    rootPrefixCls: t,
    iconPrefixCls: n,
    direction: r,
    theme: o
  } = e;
  return /* @__PURE__ */ g.createElement(tt, {
    prefixCls: t,
    iconPrefixCls: n,
    direction: r,
    theme: o
  }, /* @__PURE__ */ g.createElement(Bd, Object.assign({}, e)));
};
process.env.NODE_ENV !== "production" && (Bd.displayName = "ConfirmDialog", rs.displayName = "ConfirmDialogWrapper");
const Xt = [];
let zd = "";
function Wd() {
  return zd;
}
const Ib = (e) => {
  var t, n;
  const {
    prefixCls: r,
    getContainer: o,
    direction: a
  } = e, i = fu(), s = ae(ye), c = Wd() || s.getPrefixCls(), l = r || `${c}-modal`;
  let u = o;
  return u === !1 && (u = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Gt(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ R.createElement(rs, Object.assign({}, e, {
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
  process.env.NODE_ENV !== "production" && !t.holderRender && Xi("Modal");
  const n = document.createDocumentFragment();
  let r = Object.assign(Object.assign({}, e), {
    close: c,
    open: !0
  }), o, a;
  function i(...u) {
    var d;
    if (u.some((v) => v?.triggerCancel)) {
      var h;
      (d = e.onCancel) === null || d === void 0 || (h = d).call.apply(h, [e, () => {
      }].concat(B(u.slice(1))));
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
      const d = t.getPrefixCls(void 0, Wd()), f = t.getIconPrefixCls(), h = t.getTheme(), v = /* @__PURE__ */ R.createElement(Ib, Object.assign({}, u));
      a = Io()(/* @__PURE__ */ R.createElement(tt, {
        prefixCls: d,
        iconPrefixCls: f,
        theme: h
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
function Gd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  });
}
function qd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  });
}
function Ud(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  });
}
function Xd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  });
}
function Yd(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  });
}
function Fb({
  rootPrefixCls: e
}) {
  process.env.NODE_ENV !== "production" && Gt(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), zd = e;
}
var Ab = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const jb = (e, t) => {
  var n, {
    afterClose: r,
    config: o
  } = e, a = Ab(e, ["afterClose", "config"]);
  const [i, s] = g.useState(!0), [c, l] = g.useState(o), {
    direction: u,
    getPrefixCls: d
  } = g.useContext(ye), f = d("modal"), h = d(), v = () => {
    var y;
    r(), (y = c.afterClose) === null || y === void 0 || y.call(c);
  }, p = (...y) => {
    var x;
    if (s(!1), y.some((w) => w?.triggerCancel)) {
      var b;
      (x = c.onCancel) === null || x === void 0 || (b = x).call.apply(b, [c, () => {
      }].concat(B(y.slice(1))));
    }
  };
  g.useImperativeHandle(t, () => ({
    destroy: p,
    update: (y) => {
      l((x) => {
        const S = typeof y == "function" ? y(x) : y;
        return Object.assign(Object.assign({}, x), S);
      });
    }
  }));
  const m = (n = c.okCancel) !== null && n !== void 0 ? n : c.type === "confirm", [C] = Eo("Modal", zt.Modal);
  return /* @__PURE__ */ g.createElement(rs, Object.assign({
    prefixCls: f,
    rootPrefixCls: h
  }, c, {
    close: p,
    open: i,
    afterClose: v,
    okText: c.okText || (m ? C?.okText : C?.justOkText),
    direction: c.direction || u,
    cancelText: c.cancelText || C?.cancelText
  }, a));
}, kb = /* @__PURE__ */ g.forwardRef(jb);
let el = 0;
const Lb = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef((e, t) => {
  const [n, r] = Mp();
  return g.useImperativeHandle(t, () => ({
    patchElement: r
  }), [r]), /* @__PURE__ */ g.createElement(g.Fragment, null, n);
}));
function Db() {
  const e = g.useRef(null), [t, n] = g.useState([]);
  g.useEffect(() => {
    t.length && (B(t).forEach((i) => {
      i();
    }), n([]));
  }, [t]);
  const r = g.useCallback((a) => function(s) {
    var c;
    el += 1;
    const l = /* @__PURE__ */ g.createRef();
    let u;
    const d = new Promise((m) => {
      u = m;
    });
    let f = !1, h;
    const v = /* @__PURE__ */ g.createElement(kb, {
      key: `modal-${el}`,
      config: a(s),
      ref: l,
      afterClose: () => {
        h?.();
      },
      isSilent: () => f,
      onConfirm: (m) => {
        u(m);
      }
    });
    return h = (c = e.current) === null || c === void 0 ? void 0 : c.patchElement(v), h && Xt.push(h), {
      destroy: () => {
        function m() {
          var C;
          (C = l.current) === null || C === void 0 || C.destroy();
        }
        l.current ? m() : n((C) => [].concat(B(C), [m]));
      },
      update: (m) => {
        function C() {
          var y;
          (y = l.current) === null || y === void 0 || y.update(m);
        }
        l.current ? C() : n((y) => [].concat(B(y), [C]));
      },
      then: (m) => (f = !0, d.then(m))
    };
  }, []);
  return [g.useMemo(() => ({
    info: r(qd),
    success: r(Ud),
    error: r(Xd),
    warning: r(Gd),
    confirm: r(Yd)
  }), [r]), /* @__PURE__ */ g.createElement(Lb, {
    key: "modal-holder",
    ref: e
  })];
}
const Vb = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, o = `${t}-notice`, a = new Te("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), i = new Te("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), s = new Te("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), c = new Te("antNotificationLeftFadeIn", {
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
}, Hb = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], Bb = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, zb = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [Bb[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, Wb = (e) => {
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
}, Gb = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, qb = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
        willChange: "transform, opacity",
        position: "absolute"
      }, Wb(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, Gb(e))
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
  }, Hb.map((n) => zb(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, Kd = (e) => {
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
    notificationPadding: h,
    notificationMarginEdge: v,
    notificationProgressBg: p,
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
      padding: h,
      width: x,
      maxWidth: `calc(100vw - ${ne(e.calc(v).mul(2).equal())})`,
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
    }, Gi(e)),
    [`${P}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      inlineSize: `calc(100% - ${ne(i)} * 2)`,
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
        background: p
      },
      "&::-webkit-progress-value": {
        borderRadius: i,
        background: p
      }
    },
    [`${P}-actions`]: {
      float: "right",
      marginTop: e.marginSM
    }
  };
}, Ub = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: o,
    motionEaseInOut: a
  } = e, i = `${t}-notice`, s = new Te("antNotificationFadeOut", {
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
      [t]: Object.assign(Object.assign({}, Wi(e)), {
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
        [`${i}-wrapper`]: Kd(e)
      }
    }
  ];
}, Qd = (e) => ({
  zIndexPopup: e.zIndexPopupBase + _o + 50,
  width: 384,
  colorSuccessBg: e.colorSuccessBg,
  colorErrorBg: e.colorErrorBg,
  colorInfoBg: e.colorInfoBg,
  colorWarningBg: e.colorWarningBg
}), Zd = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return bt(e, {
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
    notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: e.margin,
    notificationPadding: `${ne(e.paddingMD)} ${ne(e.paddingContentHorizontalLG)}`,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
  });
}, Jd = rn("Notification", (e) => {
  const t = Zd(e);
  return [Ub(t), Vb(t), qb(t)];
}, Qd), Xb = qi(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = Zd(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, Kd(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${ne(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, Qd);
var Yb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function os(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ g.createElement(An, {
    className: `${e}-close-icon`
  });
}
const Kb = {
  success: Oo,
  info: No,
  error: Po,
  warning: To
}, ef = (e) => {
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
  }, n) : r && (c = /* @__PURE__ */ g.createElement(Kb[r] || null, {
    className: z(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ g.createElement("div", {
    className: z({
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
}, Qb = (e) => {
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
  } = e, f = Yb(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "actions", "closable", "closeIcon", "className"]), {
    getPrefixCls: h
  } = g.useContext(ye), v = c ?? s;
  process.env.NODE_ENV !== "production" && it("Notification").deprecated(!s, "btn", "actions");
  const p = t || h("notification"), m = `${p}-notice`, C = jn(p), [y, x, S] = Jd(p, C);
  return y(/* @__PURE__ */ g.createElement("div", {
    className: z(`${m}-pure-panel`, x, n, S, C)
  }, /* @__PURE__ */ g.createElement(Xb, {
    prefixCls: p
  }), /* @__PURE__ */ g.createElement(Yi, Object.assign({}, f, {
    prefixCls: p,
    eventKey: "pure",
    duration: null,
    closable: l,
    className: z({
      notificationClassName: d
    }),
    closeIcon: os(p, u),
    content: /* @__PURE__ */ g.createElement(ef, {
      prefixCls: m,
      icon: r,
      type: o,
      message: a,
      description: i,
      actions: v
    })
  }))));
};
function Zb(e, t, n) {
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
function Jb(e) {
  return {
    motionName: `${e}-fade`
  };
}
function eC(e, t, n) {
  return typeof e < "u" ? e : typeof t?.closeIcon < "u" ? t.closeIcon : n?.closeIcon;
}
var tC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const tl = 24, nC = 4.5, rC = "topRight", oC = ({
  children: e,
  prefixCls: t
}) => {
  const n = jn(t), [r, o, a] = Jd(t, n);
  return r(/* @__PURE__ */ R.createElement(Yu, {
    classNames: {
      list: z(o, a, n)
    }
  }, e));
}, aC = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ R.createElement(oC, {
  prefixCls: t,
  key: n
}, e), iC = /* @__PURE__ */ R.forwardRef((e, t) => {
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
    getPrefixCls: h,
    getPopupContainer: v,
    notification: p,
    direction: m
  } = ae(ye), [, C] = Nt(), y = o || h("notification"), x = ($) => Zb($, n ?? tl, r ?? tl), S = () => z({
    [`${y}-rtl`]: s ?? m === "rtl"
  }), b = () => Jb(y), [w, E] = Zu({
    prefixCls: y,
    style: x,
    className: S,
    motion: b,
    closable: !0,
    closeIcon: os(y),
    duration: u ?? nC,
    getContainer: () => a?.() || v?.() || document.body,
    maxCount: i,
    pauseOnHover: d,
    showProgress: f,
    onAllRemoved: c,
    renderNotifications: aC,
    stack: l === !1 ? !1 : {
      threshold: typeof l == "object" ? l?.threshold : void 0,
      offset: 8,
      gap: C.margin
    }
  });
  return R.useImperativeHandle(t, () => Object.assign(Object.assign({}, w), {
    prefixCls: y,
    notification: p
  })), E;
});
function tf(e) {
  const t = R.useRef(null), n = it("Notification");
  return [R.useMemo(() => {
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
      } = t.current, h = `${d}-notice`, {
        message: v,
        description: p,
        icon: m,
        type: C,
        btn: y,
        actions: x,
        className: S,
        style: b,
        role: w = "alert",
        closeIcon: E,
        closable: $
      } = c, O = tC(c, ["message", "description", "icon", "type", "btn", "actions", "className", "style", "role", "closeIcon", "closable"]);
      process.env.NODE_ENV !== "production" && n.deprecated(!y, "btn", "actions");
      const P = x ?? y, _ = os(h, eC(E, e, f));
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (l = e?.placement) !== null && l !== void 0 ? l : rC
      }, O), {
        content: /* @__PURE__ */ R.createElement(ef, {
          prefixCls: h,
          icon: m,
          type: C,
          message: v,
          description: p,
          actions: P,
          role: w
        }),
        className: z(C && `${h}-${C}`, S, f?.className),
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
  }, []), /* @__PURE__ */ R.createElement(iC, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function sC(e) {
  return tf(e);
}
const nf = /* @__PURE__ */ R.createContext({});
function cC(e) {
  return (t) => /* @__PURE__ */ g.createElement(tt, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, t)));
}
var lC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, uC = function(t, n) {
  return /* @__PURE__ */ g.createElement(Rt, ge({}, t, {
    ref: n,
    icon: lC
  }));
}, rf = /* @__PURE__ */ g.forwardRef(uC);
process.env.NODE_ENV !== "production" && (rf.displayName = "SearchOutlined");
let dt = null, Yt = (e) => e(), ar = [], ir = {};
function nl() {
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
const dC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const {
    messageConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = ae(ye), a = ir.prefixCls || o("message"), i = ae(nf), [s, c] = nd(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.message));
  return R.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...d) => (r(), s[u].apply(s, d));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), fC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const [n, r] = R.useState(nl), o = () => {
    r(nl);
  };
  R.useEffect(o, []);
  const a = gr(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ R.createElement(dC, {
    ref: t,
    sync: o,
    messageConfig: n
  });
  return /* @__PURE__ */ R.createElement(tt, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
}), zo = () => {
  if (!dt) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    dt = t, Yt(() => {
      Io()(/* @__PURE__ */ R.createElement(fC, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, zo());
          });
        }
      }), e);
    });
    return;
  }
  dt.instance && (ar.forEach((e) => {
    const {
      type: t,
      skipped: n
    } = e;
    if (!n)
      switch (t) {
        case "open": {
          Yt(() => {
            const r = dt.instance.open(Object.assign(Object.assign({}, ir), e.config));
            r?.then(e.resolve), e.setCloseFn(r);
          });
          break;
        }
        case "destroy":
          Yt(() => {
            dt?.instance.destroy(e.key);
          });
          break;
        // Other type open
        default:
          Yt(() => {
            var r;
            const o = (r = dt.instance)[t].apply(r, B(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), ar = []);
};
function mC(e) {
  ir = Object.assign(Object.assign({}, ir), e), Yt(() => {
    var t;
    (t = dt?.sync) === null || t === void 0 || t.call(dt);
  });
}
function gC(e) {
  const t = Zi((n) => {
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
  return zo(), t;
}
function vC(e, t) {
  const n = gr();
  process.env.NODE_ENV !== "production" && !n.holderRender && Xi("message");
  const r = Zi((o) => {
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
  return zo(), r;
}
const pC = (e) => {
  ar.push({
    type: "destroy",
    key: e
  }), zo();
}, hC = ["success", "info", "warning", "error", "loading"], yC = {
  open: gC,
  destroy: pC,
  config: mC,
  useMessage: Kp,
  _InternalPanelDoNotUseOrYouWillBeFired: Bp
}, of = yC;
hC.forEach((e) => {
  of[e] = (...t) => vC(e, t);
});
process.env.NODE_ENV;
process.env.NODE_ENV;
var bC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const CC = (e) => {
  const {
    prefixCls: t,
    className: n,
    closeIcon: r,
    closable: o,
    type: a,
    title: i,
    children: s,
    footer: c
  } = e, l = bC(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls: u
  } = g.useContext(ye), d = u(), f = t || u("modal"), h = jn(d), [v, p, m] = Dd(f, h), C = `${f}-confirm`;
  let y = {};
  return a ? y = {
    closable: o ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ g.createElement(Hd, Object.assign({}, e, {
      prefixCls: f,
      confirmPrefixCls: C,
      rootPrefixCls: d,
      content: s
    }))
  } : y = {
    closable: o ?? !0,
    title: i,
    footer: c !== null && /* @__PURE__ */ g.createElement(Ad, Object.assign({}, e)),
    children: s
  }, v(/* @__PURE__ */ g.createElement(ts, Object.assign({
    prefixCls: f,
    className: z(p, `${f}-pure-panel`, a && C, a && `${C}-${a}`, n, m, h)
  }, l, {
    closeIcon: Fd(f, r),
    closable: o
  }, y)));
}, xC = cC(CC);
function af(e) {
  return br(Gd(e));
}
const st = Vd;
st.useModal = Db;
st.info = function(t) {
  return br(qd(t));
};
st.success = function(t) {
  return br(Ud(t));
};
st.error = function(t) {
  return br(Xd(t));
};
st.warning = af;
st.warn = af;
st.confirm = function(t) {
  return br(Yd(t));
};
st.destroyAll = function() {
  for (; Xt.length; ) {
    const t = Xt.pop();
    t && t();
  }
};
st.config = Fb;
st._InternalPanelDoNotUseOrYouWillBeFired = xC;
process.env.NODE_ENV !== "production" && (st.displayName = "Modal");
let pt = null, eo = (e) => e(), vo = [], sr = {};
function rl() {
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
const SC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = ae(ye), a = sr.prefixCls || o("notification"), i = ae(nf), [s, c] = tf(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.notification));
  return R.useEffect(r, []), R.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...d) => (r(), s[u].apply(s, d));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), EC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const [n, r] = R.useState(rl), o = () => {
    r(rl);
  };
  R.useEffect(o, []);
  const a = gr(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ R.createElement(SC, {
    ref: t,
    sync: o,
    notificationConfig: n
  });
  return /* @__PURE__ */ R.createElement(tt, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
}), as = () => {
  if (!pt) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    pt = t, eo(() => {
      Io()(/* @__PURE__ */ R.createElement(EC, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, as());
          });
        }
      }), e);
    });
    return;
  }
  pt.instance && (vo.forEach((e) => {
    switch (e.type) {
      case "open": {
        eo(() => {
          pt.instance.open(Object.assign(Object.assign({}, sr), e.config));
        });
        break;
      }
      case "destroy":
        eo(() => {
          var t;
          (t = pt?.instance) === null || t === void 0 || t.destroy(e.key);
        });
        break;
    }
  }), vo = []);
};
function wC(e) {
  sr = Object.assign(Object.assign({}, sr), e), eo(() => {
    var t;
    (t = pt?.sync) === null || t === void 0 || t.call(pt);
  });
}
function sf(e) {
  const t = gr();
  process.env.NODE_ENV !== "production" && !t.holderRender && Xi("notification"), vo.push({
    type: "open",
    config: e
  }), as();
}
const $C = (e) => {
  vo.push({
    type: "destroy",
    key: e
  }), as();
}, OC = ["success", "info", "warning", "error"], PC = {
  open: sf,
  destroy: $C,
  config: wC,
  useNotification: sC,
  _InternalPanelDoNotUseOrYouWillBeFired: Qb
}, cf = PC;
OC.forEach((e) => {
  cf[e] = (t) => sf(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const TC = (e) => {
  const t = e?.algorithm ? oo(e.algorithm) : Vi, n = Object.assign(Object.assign({}, Pn), e?.token);
  return Gl(n, {
    override: e?.token
  }, t, zi);
};
function NC(e) {
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
const RC = (e, t) => {
  const n = t ?? wo(e), r = n.fontSizeSM, o = n.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), NC(t ?? e)), bu(r)), {
    // controlHeight
    controlHeight: o
  }), yu(Object.assign(Object.assign({}, n), {
    controlHeight: o
  })));
}, ut = (e, t) => new Ce(e).setA(t).toRgbString(), mn = (e, t) => new Ce(e).lighten(t).toHexString(), _C = (e) => {
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
}, MC = (e, t) => {
  const n = e || "#000", r = t || "#fff";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: ut(r, 0.85),
    colorTextSecondary: ut(r, 0.65),
    colorTextTertiary: ut(r, 0.45),
    colorTextQuaternary: ut(r, 0.25),
    colorFill: ut(r, 0.18),
    colorFillSecondary: ut(r, 0.12),
    colorFillTertiary: ut(r, 0.08),
    colorFillQuaternary: ut(r, 0.04),
    colorBgSolid: ut(r, 0.95),
    colorBgSolidHover: ut(r, 1),
    colorBgSolidActive: ut(r, 0.9),
    colorBgElevated: mn(n, 12),
    colorBgContainer: mn(n, 8),
    colorBgLayout: mn(n, 0),
    colorBgSpotlight: mn(n, 26),
    colorBgBlur: ut(r, 0.04),
    colorBorder: mn(n, 26),
    colorBorderSecondary: mn(n, 19)
  };
}, IC = (e, t) => {
  const n = Object.keys(Di).map((a) => {
    const i = en(e[a], {
      theme: "dark"
    });
    return Array.from({
      length: 10
    }, () => 1).reduce((s, c, l) => (s[`${a}-${l + 1}`] = i[l], s[`${a}${l + 1}`] = i[l], s), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), r = t ?? wo(e), o = hu(e, {
    generateColorPalettes: _C,
    generateNeutralColorPalettes: MC
  });
  return Object.assign(Object.assign(Object.assign(Object.assign({}, r), n), o), {
    // Customize selected item background color
    // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
    colorPrimaryBg: o.colorPrimaryBorder,
    colorPrimaryBgHover: o.colorPrimaryBorderHover
  });
};
function FC() {
  const [e, t, n] = Nt();
  return {
    theme: e,
    token: t,
    hashId: n
  };
}
const Ei = {
  /** Default seedToken */
  defaultSeed: or.token,
  useToken: FC,
  defaultAlgorithm: wo,
  darkAlgorithm: IC,
  compactAlgorithm: RC,
  getDesignToken: TC,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  defaultConfig: or,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  _internalContext: Hi
};
function lf(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = lf(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function AC() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = lf(e)) && (r && (r += " "), r += t);
  return r;
}
function we(...e) {
  return AC(e);
}
const jC = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, kC = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", LC = R.forwardRef(
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
    const d = !!(r ?? o), f = () => d ? /* @__PURE__ */ J(
      uf,
      {
        size: i,
        className: s,
        children: r ?? (o ? /* @__PURE__ */ J(
          "img",
          {
            src: o,
            alt: a ?? "Card icon",
            className: "luca-h-full luca-w-full luca-object-contain"
          }
        ) : null)
      }
    ) : null;
    return /* @__PURE__ */ Wt(
      "div",
      {
        ref: u,
        "data-card-align": e,
        className: we(
          "luca-group/card luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          t && kC,
          jC[e],
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
LC.displayName = "Card";
const DC = R.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ J(
    "div",
    {
      ref: r,
      className: we(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        "luca-items-center luca-text-center",
        "group-data-[card-align=start]/card:luca-items-start group-data-[card-align=start]/card:luca-text-left",
        e
      ),
      ...n,
      children: t
    }
  )
);
DC.displayName = "CardHeader";
const VC = R.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ J(
    "strong",
    {
      ref: r,
      className: we(
        "luca-text-[#111827] luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        "group-hover/card:luca-text-[#3843d0]",
        e
      ),
      ...n,
      children: t
    }
  )
);
VC.displayName = "CardTitle";
const HC = R.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ J(
  "p",
  {
    ref: r,
    className: we(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line luca-text-[#6B7280]",
      "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
      "group-hover/card:luca-text-[#3843d0]",
      e
    ),
    ...n,
    children: t
  }
));
HC.displayName = "CardDescription";
const BC = R.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ J(
    "div",
    {
      ref: r,
      className: we(
        "luca-w-full luca-text-sm",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        "group-hover/card:luca-text-[#3843d0]",
        e
      ),
      ...n,
      children: t
    }
  )
);
BC.displayName = "CardContent";
const zC = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, uf = R.forwardRef(
  ({ className: e, children: t, size: n = "lg", ...r }, o) => /* @__PURE__ */ J(
    "div",
    {
      ref: o,
      className: we(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        zC[n],
        "group-hover/card:luca-scale-[1.02]",
        e
      ),
      ...r,
      children: t
    }
  )
);
uf.displayName = "CardIcon";
const WC = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap disabled:luca-cursor-not-allowed", GC = {
  primary: {
    default: we(
      // Default state - amarillo
      "luca-bg-[#ffba31] luca-text-[#111827] luca-shadow-[0px_4px_0px_0px_#f58f00]",
      // Hover, Active, Focus - mismo diseño (naranja más oscuro)
      "hover:luca-bg-[#f58f00] hover:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "active:luca-bg-[#f58f00] active:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "focus-visible:luca-bg-[#f58f00] focus-visible:luca-shadow-[0px_4px_0px_0px_#d0780f] focus-visible:luca-outline-none",
      // Disabled state - gris
      "disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-shadow-[0px_4px_0px_0px_#adadad]"
    ),
    alert: we(
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
    default: we(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200 luca-shadow-[0px_3px_0px_0px_#adadad]",
      "hover:luca-border-[#c5daff] hover:luca-text-[#3843d0]",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: we(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  },
  tertiary: {
    default: we(
      "!luca-rounded-full luca-bg-white luca-text-[#4b5563] luca-border luca-border-[#e5e7eb]",
      "hover:luca-bg-[#edf5ff] hover:luca-border-[#3843d0] hover:luca-text-[#3843d0]",
      "active:luca-bg-[#3843d0] active:luca-border-white active:luca-text-white",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: we(
      "!luca-rounded-full luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  }
}, df = R.forwardRef(
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
  }, l) => /* @__PURE__ */ Wt(
    "button",
    {
      ref: l,
      type: s,
      disabled: i,
      className: we(
        WC,
        GC[e][t],
        o
      ),
      ...c,
      children: [
        n && /* @__PURE__ */ J("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: n }),
        /* @__PURE__ */ J("span", { className: "luca-leading-tight", children: a }),
        r && /* @__PURE__ */ J("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: r })
      ]
    }
  )
);
df.displayName = "Button";
const ol = {
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
}, qC = R.forwardRef(
  ({
    state: e = "default",
    outline: t = "default",
    icon: n,
    className: r,
    disabled: o,
    ...a
  }, i) => {
    const s = e === "disabled" || o;
    return /* @__PURE__ */ J(
      "button",
      {
        ref: i,
        disabled: s,
        className: we(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          ol.state[e],
          ol.outline[t],
          // Hover styles solo si no está disabled
          !s && "hover:luca-bg-[#edf5ff] hover:luca-text-[#3843d0]",
          r
        ),
        ...a,
        children: /* @__PURE__ */ J("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: n })
      }
    );
  }
);
qC.displayName = "ButtonIcon";
const UC = ({ className: e, color: t }) => /* @__PURE__ */ J(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ J(
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
), D1 = ({
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
  return /* @__PURE__ */ Wt(
    "span",
    {
      className: we(
        s,
        c[n],
        l,
        u[e][t],
        a
      ),
      ...i,
      children: [
        r && n === "full" && e === "duotone" && /* @__PURE__ */ J(
          UC,
          {
            className: "luca-shrink-0",
            color: d[t]
          }
        ),
        o
      ]
    }
  );
}, XC = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", YC = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", KC = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", QC = "hover:luca-text-[#3843d0] focus-visible:luca-outline-[#3843d0]", ZC = "luca-cursor-not-allowed luca-text-gray-400 hover:luca-text-gray-400 focus-visible:luca-outline-none luca-opacity-60", JC = R.forwardRef(
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
    const l = t !== void 0, u = R.useMemo(
      () => e.find((v) => !v.disabled)?.key,
      [e]
    ), [d, f] = R.useState(() => n !== void 0 ? n : u);
    R.useEffect(() => {
      if (l || n === void 0) return;
      const v = e.some(
        (p) => p.key === n && !p.disabled
      );
      f(v ? n : u);
    }, [n, u, l, e]), R.useEffect(() => {
      l || f((v) => v && e.some((p) => p.key === v && !p.disabled) ? v : u ?? v);
    }, [u, e, l]);
    const h = l ? t : d;
    return /* @__PURE__ */ J(
      "div",
      {
        ref: c,
        role: "tablist",
        "aria-label": a,
        className: we(XC, o && "luca-w-full", i),
        ...s,
        children: e.map((v) => {
          const p = v.key === h, m = !!v.disabled, C = p || !h && v.key === u ? 0 : -1;
          return /* @__PURE__ */ J(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": p,
              "aria-disabled": m,
              disabled: m,
              tabIndex: C,
              "data-selected": p || void 0,
              "data-disabled": m || void 0,
              "data-value": v.key,
              className: we(
                YC,
                o ? "luca-flex-1" : "luca-min-w-[88px]",
                p ? KC : QC,
                m && ZC
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
JC.displayName = "TabList";
const ff = ({
  backgroundImage: e,
  title: t,
  subtitle: n,
  avatarImage: r,
  avatarAlt: o = "Layout avatar",
  heroClassName: a,
  heroStyle: i
}) => /* @__PURE__ */ Wt(
  "div",
  {
    className: we(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      a
    ),
    style: { backgroundImage: `url(${e})`, ...i },
    children: [
      /* @__PURE__ */ J("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-Left", children: t }),
      /* @__PURE__ */ J("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ J(
        "img",
        {
          src: r,
          alt: o,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ J("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: n })
    ]
  }
);
ff.displayName = "LayoutHeader";
const mf = ({ children: e, className: t, ...n }) => /* @__PURE__ */ J(
  "div",
  {
    className: we(
      "luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      t
    ),
    ...n,
    children: e
  }
);
mf.displayName = "LayoutContent";
const is = ({ className: e, style: t, children: n }) => /* @__PURE__ */ J("div", { className: we("luca-bg-[#F9FAFB]", e), style: t, children: n });
is.displayName = "Layout";
is.Header = ff;
is.Content = mf;
function ex(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function tx(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var nx = /* @__PURE__ */ (function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(tx(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = ex(o);
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
})(), Ue = "-ms-", po = "-moz-", se = "-webkit-", gf = "comm", ss = "rule", cs = "decl", rx = "@import", vf = "@keyframes", ox = "@layer", ax = Math.abs, Wo = String.fromCharCode, ix = Object.assign;
function sx(e, t) {
  return ze(e, 0) ^ 45 ? (((t << 2 ^ ze(e, 0)) << 2 ^ ze(e, 1)) << 2 ^ ze(e, 2)) << 2 ^ ze(e, 3) : 0;
}
function pf(e) {
  return e.trim();
}
function cx(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, n) {
  return e.replace(t, n);
}
function wi(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function cr(e, t, n) {
  return e.slice(t, n);
}
function Et(e) {
  return e.length;
}
function ls(e) {
  return e.length;
}
function zr(e, t) {
  return t.push(e), e;
}
function lx(e, t) {
  return e.map(t).join("");
}
var Go = 1, _n = 1, hf = 0, et = 0, Ie = 0, Dn = "";
function qo(e, t, n, r, o, a, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: Go, column: _n, length: i, return: "" };
}
function Gn(e, t) {
  return ix(qo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ux() {
  return Ie;
}
function dx() {
  return Ie = et > 0 ? ze(Dn, --et) : 0, _n--, Ie === 10 && (_n = 1, Go--), Ie;
}
function at() {
  return Ie = et < hf ? ze(Dn, et++) : 0, _n++, Ie === 10 && (_n = 1, Go++), Ie;
}
function Ot() {
  return ze(Dn, et);
}
function to() {
  return et;
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
function yf(e) {
  return Go = _n = 1, hf = Et(Dn = e), et = 0, [];
}
function bf(e) {
  return Dn = "", e;
}
function no(e) {
  return pf(Cr(et - 1, $i(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function fx(e) {
  for (; (Ie = Ot()) && Ie < 33; )
    at();
  return lr(e) > 2 || lr(Ie) > 3 ? "" : " ";
}
function mx(e, t) {
  for (; --t && at() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return Cr(e, to() + (t < 6 && Ot() == 32 && at() == 32));
}
function $i(e) {
  for (; at(); )
    switch (Ie) {
      // ] ) " '
      case e:
        return et;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && $i(Ie);
        break;
      // (
      case 40:
        e === 41 && $i(e);
        break;
      // \
      case 92:
        at();
        break;
    }
  return et;
}
function gx(e, t) {
  for (; at() && e + Ie !== 57; )
    if (e + Ie === 84 && Ot() === 47)
      break;
  return "/*" + Cr(t, et - 1) + "*" + Wo(e === 47 ? e : at());
}
function vx(e) {
  for (; !lr(Ot()); )
    at();
  return Cr(e, et);
}
function px(e) {
  return bf(ro("", null, null, null, [""], e = yf(e), 0, [0], e));
}
function ro(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, d = i, f = 0, h = 0, v = 0, p = 1, m = 1, C = 1, y = 0, x = "", S = o, b = a, w = r, E = x; m; )
    switch (v = y, y = at()) {
      // (
      case 40:
        if (v != 108 && ze(E, d - 1) == 58) {
          wi(E += ce(no(y), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += no(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += fx(v);
        break;
      // \
      case 92:
        E += mx(to() - 1, 7);
        continue;
      // /
      case 47:
        switch (Ot()) {
          case 42:
          case 47:
            zr(hx(gx(at(), to()), t, n), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * p:
        s[l++] = Et(E) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (y) {
          // \0 }
          case 0:
          case 125:
            m = 0;
          // ;
          case 59 + u:
            C == -1 && (E = ce(E, /\f/g, "")), h > 0 && Et(E) - d && zr(h > 32 ? il(E + ";", r, n, d - 1) : il(ce(E, " ", "") + ";", r, n, d - 2), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (zr(w = al(E, t, n, l, u, o, s, x, S = [], b = [], d), a), y === 123)
              if (u === 0)
                ro(E, t, w, w, S, a, d, s, b);
              else
                switch (f === 99 && ze(E, 3) === 110 ? 100 : f) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ro(e, w, w, r && zr(al(e, w, w, 0, 0, o, s, x, o, S = [], d), b), o, b, d, s, r ? S : b);
                    break;
                  default:
                    ro(E, w, w, w, [""], b, 0, s, b);
                }
        }
        l = u = h = 0, p = C = 1, x = E = "", d = i;
        break;
      // :
      case 58:
        d = 1 + Et(E), h = v;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && dx() == 125)
            continue;
        }
        switch (E += Wo(y), y * p) {
          // &
          case 38:
            C = u > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            s[l++] = (Et(E) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Ot() === 45 && (E += no(at())), f = Ot(), u = d = Et(x = E += vx(to())), y++;
            break;
          // -
          case 45:
            v === 45 && Et(E) == 2 && (p = 0);
        }
    }
  return a;
}
function al(e, t, n, r, o, a, i, s, c, l, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], h = ls(f), v = 0, p = 0, m = 0; v < r; ++v)
    for (var C = 0, y = cr(e, d + 1, d = ax(p = i[v])), x = e; C < h; ++C)
      (x = pf(p > 0 ? f[C] + " " + y : ce(y, /&\f/g, f[C]))) && (c[m++] = x);
  return qo(e, t, n, o === 0 ? ss : s, c, l, u);
}
function hx(e, t, n) {
  return qo(e, t, n, gf, Wo(ux()), cr(e, 2, -2), 0);
}
function il(e, t, n, r) {
  return qo(e, t, n, cs, cr(e, 0, r), cr(e, r + 1, -1), r);
}
function Sn(e, t) {
  for (var n = "", r = ls(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function yx(e, t, n, r) {
  switch (e.type) {
    case ox:
      if (e.children.length) break;
    case rx:
    case cs:
      return e.return = e.return || e.value;
    case gf:
      return "";
    case vf:
      return e.return = e.value + "{" + Sn(e.children, r) + "}";
    case ss:
      e.value = e.props.join(",");
  }
  return Et(n = Sn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function bx(e) {
  var t = ls(e);
  return function(n, r, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](n, r, o, a) || "";
    return i;
  };
}
function Cx(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var sl = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function xx(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var Sx = function(t, n, r) {
  for (var o = 0, a = 0; o = a, a = Ot(), o === 38 && a === 12 && (n[r] = 1), !lr(a); )
    at();
  return Cr(t, et);
}, Ex = function(t, n) {
  var r = -1, o = 44;
  do
    switch (lr(o)) {
      case 0:
        o === 38 && Ot() === 12 && (n[r] = 1), t[r] += Sx(et - 1, n, r);
        break;
      case 2:
        t[r] += no(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Ot() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Wo(o);
    }
  while (o = at());
  return t;
}, wx = function(t, n) {
  return bf(Ex(yf(t), n));
}, cl = /* @__PURE__ */ new WeakMap(), $x = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !cl.get(r)) && !o) {
      cl.set(t, !0);
      for (var a = [], i = wx(n, a), s = r.props, c = 0, l = 0; c < i.length; c++)
        for (var u = 0; u < s.length; u++, l++)
          t.props[l] = a[c] ? i[c].replace(/&\f/g, s[u]) : s[u] + " " + i[c];
    }
  }
}, Ox = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Cf(e, t) {
  switch (sx(e, t)) {
    // color-adjust
    case 5103:
      return se + "print-" + e + e;
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
      return se + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return se + e + po + e + Ue + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return se + e + Ue + e + e;
    // order
    case 6165:
      return se + e + Ue + "flex-" + e + e;
    // align-items
    case 5187:
      return se + e + ce(e, /(\w+).+(:[^]+)/, se + "box-$1$2" + Ue + "flex-$1$2") + e;
    // align-self
    case 5443:
      return se + e + Ue + "flex-item-" + ce(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return se + e + Ue + "flex-line-pack" + ce(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return se + e + Ue + ce(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return se + e + Ue + ce(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return se + "box-" + ce(e, "-grow", "") + se + e + Ue + ce(e, "grow", "positive") + e;
    // transition
    case 4554:
      return se + ce(e, /([^-])(transform)/g, "$1" + se + "$2") + e;
    // cursor
    case 6187:
      return ce(ce(ce(e, /(zoom-|grab)/, se + "$1"), /(image-set)/, se + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return ce(e, /(image-set\([^]*)/, se + "$1$`$1");
    // justify-content
    case 4968:
      return ce(ce(e, /(.+:)(flex-)?(.*)/, se + "box-pack:$3" + Ue + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + se + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ce(e, /(.+)-inline(.+)/, se + "$1$2") + e;
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
      if (Et(e) - 1 - t > 6) switch (ze(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ze(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + po + (ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~wi(e, "stretch") ? Cf(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ze(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ze(e, Et(e) - 3 - (~wi(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ce(e, ":", ":" + se) + e;
        // (inline-)?fl(e)x
        case 101:
          return ce(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + se + (ze(e, 14) === 45 ? "inline-" : "") + "box$3$1" + se + "$2$3$1" + Ue + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (ze(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return se + e + Ue + ce(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return se + e + Ue + ce(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return se + e + Ue + ce(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return se + e + Ue + e + e;
  }
  return e;
}
var Px = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case cs:
      t.return = Cf(t.value, t.length);
      break;
    case vf:
      return Sn([Gn(t, {
        value: ce(t.value, "@", "@" + se)
      })], o);
    case ss:
      if (t.length) return lx(t.props, function(a) {
        switch (cx(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Sn([Gn(t, {
              props: [ce(a, /:(read-\w+)/, ":" + po + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Sn([Gn(t, {
              props: [ce(a, /:(plac\w+)/, ":" + se + "input-$1")]
            }), Gn(t, {
              props: [ce(a, /:(plac\w+)/, ":" + po + "$1")]
            }), Gn(t, {
              props: [ce(a, /:(plac\w+)/, Ue + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Tx = [Px], xf = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || Tx, a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var m = p.getAttribute("data-emotion").split(" "), C = 1; C < m.length; C++)
        a[m[C]] = !0;
      s.push(p);
    }
  );
  var c, l = [$x, Ox];
  {
    var u, d = [yx, Cx(function(p) {
      u.insert(p);
    })], f = bx(l.concat(o, d)), h = function(m) {
      return Sn(px(m), f);
    };
    c = function(m, C, y, x) {
      u = y, h(m ? m + "{" + C.styles + "}" : C.styles), x && (v.inserted[C.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new nx({
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
function Nx(e) {
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
var Rx = {
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
}, _x = /[A-Z]|^ms/g, Mx = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Sf = function(t) {
  return t.charCodeAt(1) === 45;
}, ll = function(t) {
  return t != null && typeof t != "boolean";
}, Ea = /* @__PURE__ */ xx(function(e) {
  return Sf(e) ? e : e.replace(_x, "-$&").toLowerCase();
}), ul = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(Mx, function(r, o, a) {
          return wt = {
            name: o,
            styles: a,
            next: wt
          }, o;
        });
  }
  return Rx[t] !== 1 && !Sf(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
        return wt = {
          name: o.name,
          styles: o.styles,
          next: wt
        }, o.name;
      var a = n;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            wt = {
              name: i.name,
              styles: i.styles,
              next: wt
            }, i = i.next;
        var s = a.styles + ";";
        return s;
      }
      return Ix(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = wt, l = n(e);
        return wt = c, ur(e, t, l);
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
function Ix(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += ur(e, t, n[o]) + ";";
  else
    for (var a in n) {
      var i = n[a];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : ll(s) && (r += Ea(a) + ":" + ul(a, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++)
          ll(i[c]) && (r += Ea(a) + ":" + ul(a, i[c]) + ";");
      else {
        var l = ur(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            r += Ea(a) + ":" + l + ";";
            break;
          }
          default:
            r += a + "{" + l + "}";
        }
      }
    }
  return r;
}
var dl = /label:\s*([^\s;{]+)\s*(;|$)/g, wt;
function Ht(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  wt = void 0;
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
  dl.lastIndex = 0;
  for (var l = "", u; (u = dl.exec(o)) !== null; )
    l += "-" + u[1];
  var d = Nx(o) + l;
  return {
    name: d,
    styles: o,
    next: wt
  };
}
var Fx = !0;
function Uo(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var us = function(t, n, r) {
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
  Fx === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ds = function(t, n, r) {
  us(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function fl(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function ml(e, t, n) {
  var r = [], o = Uo(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var fs = function(t) {
  var n = xf(t);
  n.sheet.speedy = function(s) {
    this.isSpeedy = s;
  }, n.compat = !0;
  var r = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var d = Ht(l, n.registered, void 0);
    return ds(n, d, !1), n.key + "-" + d.name;
  }, o = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var d = Ht(l, n.registered), f = "animation-" + d.name;
    return fl(n, {
      name: d.name,
      styles: "@keyframes " + f + "{" + d.styles + "}"
    }), f;
  }, a = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var d = Ht(l, n.registered);
    fl(n, d);
  }, i = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    return ml(n.registered, r, Ax(l));
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
    getRegisteredStyles: Uo.bind(null, n.registered),
    merge: ml.bind(null, n.registered, r)
  };
}, Ax = function e(t) {
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
}, _t = fs({
  key: "css"
});
_t.flush;
_t.hydrate;
_t.cx;
_t.merge;
_t.getRegisteredStyles;
_t.injectGlobal;
_t.keyframes;
_t.css;
_t.sheet;
var jx = _t.cache, kx = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), N(this, "_cacheList", [jx]);
  }
  return De(e, [{
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
})(), gl = typeof document < "u", Ef = function(t, n) {
  return "".concat(t, "-").concat(n);
}, Lx = function(t, n, r, o) {
  var a = o.hashPriority;
  us(t, n, r);
  var i = ".".concat(Ef(t.key, n.name)), s = a === "low" ? ":where(".concat(i, ")") : i;
  if (t.inserted[n.name] === void 0) {
    var c = "", l = n;
    do {
      var u = t.insert(n === l ? s : "", l, t.sheet, !0);
      !gl && u !== void 0 && (c += u), l = l.next;
    } while (l !== void 0);
    if (!gl && c.length !== 0)
      return c;
  }
}, ms = function(t) {
  return U(t) === "object" && "styles" in t && "name" in t && "toString" in t;
}, Dx = function e(t) {
  for (var n = "", r = 0; r < t.length; r++) {
    var o = t[r];
    if (o !== null) {
      var a = void 0;
      switch (U(o)) {
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
}, Vx = function(t, n, r) {
  var o = [], a = Uo(t, o, r);
  return o.length < 2 ? r : a + n(o);
}, Hx = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = Ht(o, t.registered, void 0);
    return Lx(t, i, !1, n), Ef(t.key, i.name);
  };
}, Bx = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o.map(function(s) {
      return ms(s) ? n(s) : s;
    });
    return Vx(t.registered, n, Dx(i));
  };
}, wf = function(t, n) {
  var r = Hx(t, {
    hashPriority: n.hashPriority || "high",
    label: n.label
  }), o = Bx(t, r);
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
}, zx = "acss", Wx = function(t) {
  return /* @__PURE__ */ Qt(t);
}, Wr = { exports: {} }, de = {};
var vl;
function Gx() {
  if (vl) return de;
  vl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
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
                case h:
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
  return de.AsyncMode = c, de.ConcurrentMode = l, de.ContextConsumer = s, de.ContextProvider = i, de.Element = t, de.ForwardRef = u, de.Fragment = r, de.Lazy = v, de.Memo = h, de.Portal = n, de.Profiler = a, de.StrictMode = o, de.Suspense = d, de.isAsyncMode = function(b) {
    return S(b) || x(b) === c;
  }, de.isConcurrentMode = S, de.isContextConsumer = function(b) {
    return x(b) === s;
  }, de.isContextProvider = function(b) {
    return x(b) === i;
  }, de.isElement = function(b) {
    return typeof b == "object" && b !== null && b.$$typeof === t;
  }, de.isForwardRef = function(b) {
    return x(b) === u;
  }, de.isFragment = function(b) {
    return x(b) === r;
  }, de.isLazy = function(b) {
    return x(b) === v;
  }, de.isMemo = function(b) {
    return x(b) === h;
  }, de.isPortal = function(b) {
    return x(b) === n;
  }, de.isProfiler = function(b) {
    return x(b) === a;
  }, de.isStrictMode = function(b) {
    return x(b) === o;
  }, de.isSuspense = function(b) {
    return x(b) === d;
  }, de.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === l || b === a || b === o || b === d || b === f || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === h || b.$$typeof === i || b.$$typeof === s || b.$$typeof === u || b.$$typeof === m || b.$$typeof === C || b.$$typeof === y || b.$$typeof === p);
  }, de.typeOf = x, de;
}
var fe = {};
var pl;
function qx() {
  return pl || (pl = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === l || V === a || V === o || V === d || V === f || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === h || V.$$typeof === i || V.$$typeof === s || V.$$typeof === u || V.$$typeof === m || V.$$typeof === C || V.$$typeof === y || V.$$typeof === p);
    }
    function S(V) {
      if (typeof V == "object" && V !== null) {
        var ve = V.$$typeof;
        switch (ve) {
          case t:
            var D = V.type;
            switch (D) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case d:
                return D;
              default:
                var ee = D && D.$$typeof;
                switch (ee) {
                  case s:
                  case u:
                  case v:
                  case h:
                  case i:
                    return ee;
                  default:
                    return ve;
                }
            }
          case n:
            return ve;
        }
      }
    }
    var b = c, w = l, E = s, $ = i, O = t, P = u, _ = r, I = v, F = h, M = n, A = a, j = o, k = d, W = !1;
    function H(V) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Q(V) || S(V) === c;
    }
    function Q(V) {
      return S(V) === l;
    }
    function Z(V) {
      return S(V) === s;
    }
    function K(V) {
      return S(V) === i;
    }
    function Y(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function X(V) {
      return S(V) === u;
    }
    function G(V) {
      return S(V) === r;
    }
    function q(V) {
      return S(V) === v;
    }
    function oe(V) {
      return S(V) === h;
    }
    function Pe(V) {
      return S(V) === n;
    }
    function be(V) {
      return S(V) === a;
    }
    function xe(V) {
      return S(V) === o;
    }
    function Se(V) {
      return S(V) === d;
    }
    fe.AsyncMode = b, fe.ConcurrentMode = w, fe.ContextConsumer = E, fe.ContextProvider = $, fe.Element = O, fe.ForwardRef = P, fe.Fragment = _, fe.Lazy = I, fe.Memo = F, fe.Portal = M, fe.Profiler = A, fe.StrictMode = j, fe.Suspense = k, fe.isAsyncMode = H, fe.isConcurrentMode = Q, fe.isContextConsumer = Z, fe.isContextProvider = K, fe.isElement = Y, fe.isForwardRef = X, fe.isFragment = G, fe.isLazy = q, fe.isMemo = oe, fe.isPortal = Pe, fe.isProfiler = be, fe.isStrictMode = xe, fe.isSuspense = Se, fe.isValidElementType = x, fe.typeOf = S;
  })()), fe;
}
var hl;
function Ux() {
  return hl || (hl = 1, process.env.NODE_ENV === "production" ? Wr.exports = Gx() : Wr.exports = qx()), Wr.exports;
}
var wa, yl;
function Xx() {
  if (yl) return wa;
  yl = 1;
  var e = Ux(), t = {
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
  function h(v, p, m) {
    if (typeof p != "string") {
      if (f) {
        var C = d(p);
        C && C !== f && h(v, C, m);
      }
      var y = c(p);
      l && (y = y.concat(l(p)));
      for (var x = i(v), S = i(p), b = 0; b < y.length; ++b) {
        var w = y[b];
        if (!n[w] && !(m && m[w]) && !(S && S[w]) && !(x && x[w])) {
          var E = u(p, w);
          try {
            s(v, w, E);
          } catch {
          }
        }
      }
    }
    return v;
  }
  return wa = h, wa;
}
Xx();
var Yx = function(t) {
  return t();
}, $f = g.useInsertionEffect ? g.useInsertionEffect : !1, Kx = $f || Yx, bl = $f || g.useLayoutEffect, Of = /* @__PURE__ */ g.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ xf({
    key: "css"
  }) : null
);
Of.Provider;
var Pf = function(t) {
  return /* @__PURE__ */ Mn(function(n, r) {
    var o = ae(Of);
    return t(n, o, r);
  });
}, dr = /* @__PURE__ */ g.createContext({}), Qx = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return ge({}, t, n);
}, Zx = /* @__PURE__ */ sl(function(e) {
  return sl(function(t) {
    return Qx(e, t);
  });
}), Jx = function(t) {
  var n = g.useContext(dr);
  return t.theme !== n && (n = Zx(n)(t.theme)), /* @__PURE__ */ g.createElement(dr.Provider, {
    value: n
  }, t.children);
}, gs = {}.hasOwnProperty, Oi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", e1 = function(t, n) {
  var r = {};
  for (var o in n)
    gs.call(n, o) && (r[o] = n[o]);
  return r[Oi] = t, r;
}, t1 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return us(n, r, o), Kx(function() {
    return ds(n, r, o);
  }), null;
}, n1 = /* @__PURE__ */ Pf(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Oi], a = [r], i = "";
  typeof e.className == "string" ? i = Uo(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = Ht(a, void 0, g.useContext(dr));
  i += t.key + "-" + s.name;
  var c = {};
  for (var l in e)
    gs.call(e, l) && l !== "css" && l !== Oi && (c[l] = e[l]);
  return c.className = i, n && (c.ref = n), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(t1, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ g.createElement(o, c));
}), r1 = n1, Cl = function(t, n) {
  var r = arguments;
  if (n == null || !gs.call(n, "css"))
    return g.createElement.apply(void 0, r);
  var o = r.length, a = new Array(o);
  a[0] = r1, a[1] = e1(t, n);
  for (var i = 2; i < o; i++)
    a[i] = r[i];
  return g.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Cl || (Cl = {}));
var o1 = /* @__PURE__ */ Pf(function(e, t) {
  var n = e.styles, r = Ht([n], void 0, g.useContext(dr)), o = g.useRef();
  return bl(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), c !== null && (s = !0, c.setAttribute("data-emotion", a), i.hydrate([c])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), bl(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && ds(t, r.next, !0), i.tags.length) {
      var c = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = c, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), a1 = function(t) {
  return function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return /* @__PURE__ */ fr(function(a) {
      var i = t();
      return /* @__PURE__ */ J(o1, {
        styles: Ht(r, void 0, T(T({}, a), {}, {
          theme: i
        }))
      });
    });
  };
}, i1 = function(t) {
  return function(n) {
    var r = t(n);
    return function(o) {
      var a = r(o), i = a.styles;
      return i;
    };
  };
}, s1 = ["children", "prefix", "speedy", "getStyleManager", "container", "nonce", "insertionPoint", "stylisPlugins", "linters"], c1 = function(t) {
  return /* @__PURE__ */ fr(function(n) {
    var r = n.children, o = n.prefix, a = n.speedy, i = n.getStyleManager, s = n.container, c = n.nonce, l = n.insertionPoint, u = n.stylisPlugins, d = n.linters, f = We(n, s1), h = ae(t), v = o ?? h.sheet.key, p = s ?? h.sheet.container, m = a ?? h.sheet.isSpeedy, C = Ae(function() {
      var x = process.env.NODE_ENV === "development", S = fs({
        speedy: m ?? x,
        key: v,
        container: p,
        nonce: c,
        insertionPoint: l,
        stylisPlugins: u
      });
      if (typeof global < "u") {
        var b = global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__;
        b && (S.cache = b.add(S.cache));
      }
      return S;
    }, [v, m, p, c, l, u]);
    Ye(function() {
      i?.(C);
    }, [C]);
    var y = /* @__PURE__ */ J(t.Provider, {
      value: C,
      children: r
    });
    return Object.keys(f).length || p ? (
      // @ts-ignore
      /* @__PURE__ */ J(xm, T(T({
        linters: d,
        container: p
      }, f), {}, {
        children: y
      }))
    ) : y;
  });
}, l1 = function(t) {
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
}, u1 = function(t) {
  return Object.fromEntries(Object.entries(t).map(function(n) {
    var r = L(n, 2), o = r[0], a = r[1];
    return [o, a.styles];
  }));
}, vs = function() {
  var t = Ei.useToken(), n = t.token;
  return n;
}, hn = function(t) {
  return typeof window < "u" ? matchMedia && matchMedia("(prefers-color-scheme: ".concat(t, ")")) : {
    matches: !1
  };
}, $a, Tf = /* @__PURE__ */ Qt({
  appearance: "light",
  setAppearance: function() {
  },
  isDarkMode: !1,
  themeMode: "light",
  setThemeMode: function() {
  },
  browserPrefers: ($a = hn("dark")) !== null && $a !== void 0 && $a.matches ? "dark" : "light"
}), Xo = function() {
  return ae(Tf);
}, d1 = function() {
  var t = vs(), n = Xo(), r = n.appearance, o = n.isDarkMode;
  return Ae(function() {
    return u1(l1({
      token: t,
      css: xr
    }));
  }, [t, r, o]);
}, Nf = function() {
  var t = vs(), n = d1();
  return Ae(function() {
    return T(T({}, t), {}, {
      stylish: n
    });
  }, [t, n]);
}, f1 = function(t) {
  return T(T({}, t), {}, {
    mobile: t.xs,
    tablet: t.md,
    laptop: t.lg,
    desktop: t.xxl
  });
}, m1 = function() {
  var t = vs(), n = {
    xs: "@media (max-width: ".concat(t.screenXSMax, "px)"),
    sm: "@media (max-width: ".concat(t.screenSMMax, "px)"),
    md: "@media (max-width: ".concat(t.screenMDMax, "px)"),
    lg: "@media (max-width: ".concat(t.screenLGMax, "px)"),
    xl: "@media (max-width: ".concat(t.screenXLMax, "px)"),
    xxl: "@media (min-width: ".concat(t.screenXXLMin, "px)")
  };
  return Ae(function() {
    return f1(n);
  }, [t]);
}, g1 = function(t, n) {
  return Object.entries(t).map(function(r) {
    var o = L(r, 2), a = o[0], i = o[1], s = i;
    return ms(i) || (s = xr(i)), n[a] ? "".concat(n[a], " {").concat(s.styles, "}") : "";
  }).join("");
}, v1 = ["stylish", "appearance", "isDarkMode", "prefixCls", "iconPrefixCls"], p1 = ["prefixCls", "iconPrefixCls"], h1 = function(t) {
  var n = t.hashPriority, r = t.useTheme, o = t.EmotionContext;
  return function(a, i) {
    var s = i?.__BABEL_FILE_NAME__, c = !!s;
    return function(l) {
      var u = r(), d = ae(o), f = d.cache, h = wf(f, {
        hashPriority: i?.hashPriority || n,
        label: i?.label
      }), v = h.cx, p = h.css, m = m1(), C = Ae(function() {
        var y;
        if (a instanceof Function) {
          var x = u.stylish, S = u.appearance, b = u.isDarkMode, w = u.prefixCls, E = u.iconPrefixCls, $ = We(u, v1), O = function(_) {
            return g1(_, m);
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
        return U(y) === "object" && (ms(y) ? y = p(y) : y = Object.fromEntries(Object.entries(y).map(function(P) {
          var _ = L(P, 2), I = _[0], F = _[1], M = c ? "".concat(s, "-").concat(I) : void 0;
          return U(F) === "object" ? c ? [I, p(F, "label:".concat(M))] : [I, p(F)] : [I, F];
        }))), y;
      }, [l, u]);
      return Ae(function() {
        var y = u.prefixCls, x = u.iconPrefixCls, S = We(u, p1);
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
}, xl = function(t) {
  if (t.ThemeProvider) return t.ThemeProvider;
  var n = t.ThemeContext;
  return function(r) {
    return /* @__PURE__ */ J(n.Provider, {
      value: r.theme,
      children: r.children
    });
  };
}, y1 = Jx, Rf = dr, _f = /* @__PURE__ */ fr(function(e) {
  var t = e.children, n = e.theme, r = e.prefixCls, o = e.getStaticInstance, a = e.staticInstanceConfig, i = Xo(), s = i.appearance, c = i.isDarkMode, l = of.useMessage(a?.message), u = L(l, 2), d = u[0], f = u[1], h = cf.useNotification(a?.notification), v = L(h, 2), p = v[0], m = v[1], C = st.useModal(), y = L(C, 2), x = y[0], S = y[1];
  Ye(function() {
    o?.({
      message: d,
      modal: x,
      notification: p
    });
  }, []);
  var b = Ae(function() {
    var w = c ? Ei.darkAlgorithm : Ei.defaultAlgorithm, E = n;
    if (typeof n == "function" && (E = n(s)), !E)
      return {
        algorithm: w
      };
    var $ = E.algorithm ? E.algorithm instanceof Array ? E.algorithm : [E.algorithm] : [];
    return T(T({}, E), {}, {
      algorithm: E.algorithm ? [w].concat(B($)) : w
    });
  }, [n, c]);
  return /* @__PURE__ */ Wt(tt, {
    prefixCls: r,
    theme: b,
    children: [f, m, S, t]
  });
});
_f.displayName = "AntdProvider";
function b1(e, t) {
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
function C1(e, t) {
  return x1(e) || b1(e, t) || S1(e, t) || E1();
}
function x1(e) {
  if (Array.isArray(e)) return e;
}
function S1(e, t) {
  if (e) {
    if (typeof e == "string") return Sl(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Sl(e, t);
  }
}
function Sl(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function E1() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function El(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = R.useState(function() {
    return o !== void 0 ? o : r !== void 0 ? typeof r == "function" ? r() : r : e;
  }), c = C1(s, 2), l = c[0], u = c[1], d = o !== void 0 ? o : l;
  i && (d = i(d));
  function f(h) {
    u(h), d !== h && a && a(h, d);
  }
  return [d, f];
}
var Oa = function(t) {
  typeof xs == "function" ? xs(t) : t();
}, kt, w1 = function(t) {
  var n = t.themeMode, r = t.setAppearance, o = t.setBrowserPrefers, a = function() {
    Oa(function() {
      hn("dark").matches ? r("dark") : r("light");
    });
  }, i = function() {
    Oa(function() {
      hn("dark").matches ? o("dark") : o("light");
    });
  };
  return Pa(function() {
    if (n !== "auto") {
      Oa(function() {
        r(n);
      });
      return;
    }
    return setTimeout(a, 1), kt || (kt = hn("dark")), kt.addEventListener("change", a), function() {
      kt.removeEventListener("change", a);
    };
  }, [n]), Pa(function() {
    return kt || (kt = hn("dark")), kt.addEventListener("change", i), function() {
      kt.removeEventListener("change", i);
    };
  }, []), null;
}, Mf = /* @__PURE__ */ fr(function(e) {
  var t, n = e.children, r = e.appearance, o = e.defaultAppearance, a = e.onAppearanceChange, i = e.themeMode, s = e.defaultThemeMode, c = e.onThemeModeChange, l = e.useTheme, u = l(), d = u.appearance, f = u.themeMode, h = El("light", {
    value: i,
    defaultValue: s ?? f,
    onChange: function(P) {
      return c?.(P);
    }
  }), v = L(h, 2), p = v[0], m = v[1], C = El("light", {
    value: r,
    defaultValue: o ?? d,
    onChange: function(P) {
      return a?.(P);
    }
  }), y = L(C, 2), x = y[0], S = y[1], b = Zt((t = hn("dark")) !== null && t !== void 0 && t.matches ? "dark" : "light"), w = L(b, 2), E = w[0], $ = w[1];
  return /* @__PURE__ */ Wt(Tf.Provider, {
    value: {
      themeMode: p,
      setThemeMode: m,
      appearance: x,
      setAppearance: S,
      isDarkMode: x === "dark",
      browserPrefers: E
    },
    children: [
      // Wait until after client-side hydration to show
      typeof window < "u" && /* @__PURE__ */ J(w1, {
        themeMode: p,
        setAppearance: S,
        setBrowserPrefers: $
      }),
      n
    ]
  });
});
Mf.displayName = "ThemeSwitcher";
var $1 = ["stylish"], O1 = function(t) {
  var n = t.children, r = t.customToken, o = t.defaultCustomToken, a = t.customStylish, i = t.prefixCls, s = t.StyledThemeProvider, c = Xo(), l = c.appearance, u = c.isDarkMode, d = Nf(), f = d.stylish, h = We(d, $1), v = Ae(function() {
    return o ? o instanceof Function ? o({
      token: h,
      appearance: l,
      isDarkMode: u
    }) : o : {};
  }, [o, h, l]), p = Ae(function() {
    return r instanceof Function ? T(T({}, v), r({
      token: h,
      appearance: l,
      isDarkMode: u
    })) : T(T({}, v), r);
  }, [v, r, h, l]), m = Ae(function() {
    return a ? a({
      token: T(T({}, h), p),
      stylish: f,
      appearance: l,
      isDarkMode: u,
      css: xr
    }) : {};
  }, [a, h, p, f, l]), C = Ae(function() {
    return T(T({}, m), f);
  }, [m, f]), y = T(T(T(T({}, h), p), {}, {
    stylish: C
  }, c), {}, {
    prefixCls: i
  });
  return /* @__PURE__ */ J(s, {
    theme: y,
    children: n
  });
}, P1 = function(t) {
  var n = t.styledConfig ? xl(t.styledConfig) : void 0, r = t.StyleEngineContext;
  return /* @__PURE__ */ fr(function(o) {
    var a = o.children, i = o.customToken, s = o.customStylish, c = o.theme, l = o.getStaticInstance, u = o.prefixCls, d = o.staticInstanceConfig, f = o.appearance, h = o.defaultAppearance, v = o.onAppearanceChange, p = o.themeMode, m = o.defaultThemeMode, C = o.onThemeModeChange, y = o.styled, x = ae(r), S = x.prefixCls, b = x.StyledThemeContext, w = x.CustomThemeContext, E = ae(w), $ = y ? xl(y) : n || y1, O = u || S;
    return /* @__PURE__ */ J(r.Provider, {
      value: {
        prefixCls: O,
        StyledThemeContext: y?.ThemeContext || b || Rf,
        CustomThemeContext: w
      },
      children: /* @__PURE__ */ J(Mf, {
        themeMode: p,
        defaultThemeMode: m,
        onThemeModeChange: C,
        defaultAppearance: h,
        appearance: f,
        onAppearanceChange: v,
        useTheme: t.useTheme,
        children: /* @__PURE__ */ J(_f, {
          prefixCls: O,
          staticInstanceConfig: d,
          theme: c,
          getStaticInstance: l,
          children: /* @__PURE__ */ J(O1, {
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
}, T1 = function(t) {
  return function() {
    var n = t.StyleEngineContext, r = ae(n), o = r.StyledThemeContext, a = r.CustomThemeContext, i = r.prefixCls, s = Nf(), c = Xo(), l = ae(a), u = ae(o ?? Rf) || {}, d = ae(tt.ConfigContext), f = d.iconPrefixCls, h = d.getPrefixCls, v = h(), p = i && i !== "ant" ? i : v, m = Ae(function() {
      return T(T(T(T({}, s), c), l), {}, {
        prefixCls: p,
        iconPrefixCls: f
      });
    }, [s, c, l, p, f]);
    return !u || Object.keys(u).length === 0 ? m : T(T({}, u), {}, {
      prefixCls: p,
      iconPrefixCls: f
    });
  };
}, If = new kx();
typeof global < "u" && (global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__ = If);
var N1 = function(t) {
  var n, r, o, a = T(T({}, t), {}, {
    key: (n = t.key) !== null && n !== void 0 ? n : "zcss",
    // 新建的 instance key 如果不传，则设为 zcss- 使得该 key 和 acss 不一样
    speedy: (r = t.speedy) !== null && r !== void 0 ? r : !1
  }), i = fs({
    key: a.key,
    speedy: a.speedy,
    container: a.container
  }), s = Wx(i), c = c1(s);
  i.cache = If.add(i.cache);
  var l = /* @__PURE__ */ Qt(a.customToken ? a.customToken : {}), u = (o = a.styled) === null || o === void 0 ? void 0 : o.ThemeContext, d = /* @__PURE__ */ Qt({
    CustomThemeContext: l,
    StyledThemeContext: u,
    prefixCls: a?.prefixCls,
    iconPrefixCls: a?.iconPrefixCls
  }), f = T1({
    StyleEngineContext: d
  }), h = h1({
    hashPriority: a.hashPriority,
    useTheme: f,
    EmotionContext: s
  }), v = a1(f), p = i1(h), m = P1({
    styledConfig: a.styled,
    StyleEngineContext: d,
    useTheme: f
  });
  m.displayName = "AntdStyleThemeProvider";
  var C = wf(i.cache, {
    hashPriority: a.hashPriority
  }), y = C.cx, x = i.injectGlobal, S = i.keyframes;
  return {
    // ******************** //
    // **** 样式生成相关 **** //
    // ******************** //
    createStyles: h,
    createGlobalStyle: v,
    createStylish: p,
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
}, R1 = N1({
  key: zx,
  speedy: !1
}), _1 = R1.createStyles;
const M1 = _1(() => ({
  content: {
    padding: "32px !important",
    borderRadius: "20px !important"
  }
})), I1 = Mn(
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
    const { styles: f } = M1(), h = {
      content: f.content
    };
    return /* @__PURE__ */ J(
      st,
      {
        open: e || !1,
        title: /* @__PURE__ */ J("span", { className: "luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]", children: r }),
        closable: t,
        maskClosable: i,
        footer: null,
        keyboard: s,
        centered: !0,
        width: "100%",
        className: we("luca-modal", c),
        style: l ? {
          maxWidth: typeof l == "number" ? `${l}px` : l,
          width: "100%"
        } : void 0,
        modalRender: (v) => /* @__PURE__ */ J("div", { ref: d, className: "luca-modal-wrapper", children: v }),
        classNames: h,
        children: /* @__PURE__ */ Wt("div", { className: "luca-flex luca-flex-col luca-mt-6", children: [
          o && /* @__PURE__ */ J("p", { className: "luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0", children: o }),
          a && /* @__PURE__ */ J("p", { className: "luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0 luca-mb-6", children: a }),
          u,
          n && /* @__PURE__ */ J("div", { className: "luca-flex luca-justify-end luca-gap-2", children: n.map((v) => /* @__PURE__ */ J(df, { variant: v.variant, onClick: v.onClick, children: v.text })) })
        ] })
      }
    );
  }
);
I1.displayName = "Modal";
const F1 = ({
  setSearchInput: e,
  searchInput: t,
  personalStyles: n,
  className: r,
  inputClassName: o
}) => {
  const a = (l) => {
    e?.(l.target.value);
  }, i = we(
    "luca-flex luca-w-full luca-items-center luca-justify-start",
    n === "reading" && "luca-h-[50px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    n === "examsGenerator" && "luca-h-10 luca-gap-2 luca-rounded-lg luca-border luca-border-[#e5e7eb] luca-bg-[#f9fafb] luca-px-4 luca-py-2",
    !n && "luca-min-h-[40px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    r
  ), s = we(
    "luca-w-full luca-border-none luca-bg-transparent luca-outline-none",
    n === "examsGenerator" ? "luca-flex-1 luca-text-sm luca-text-[#111827] placeholder:luca-text-[#9ca3af]" : "luca-pl-2.5 luca-text-base",
    o
  ), c = we(
    n === "reading" && "luca-h-[18px] luca-w-[18px]",
    n === "examsGenerator" && "luca-h-4 luca-w-4 luca-flex-shrink-0 luca-opacity-50",
    !n && "luca-h-5 luca-w-5"
  );
  return /* @__PURE__ */ Wt("div", { className: i, children: [
    /* @__PURE__ */ J(
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
    /* @__PURE__ */ J(rf, { className: c })
  ] });
};
F1.displayName = "SearchBar";
tt.config({
  theme: {
    token: {
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    }
  }
});
export {
  D1 as Badge,
  df as Button,
  qC as ButtonIcon,
  LC as Card,
  BC as CardContent,
  HC as CardDescription,
  DC as CardHeader,
  uf as CardIcon,
  VC as CardTitle,
  is as Layout,
  mf as LayoutContent,
  ff as LayoutHeader,
  I1 as Modal,
  F1 as SearchBar,
  JC as TabList,
  we as cn
};

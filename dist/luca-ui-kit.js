import { jsxs as Rt, jsx as U } from "react/jsx-runtime";
import * as g from "react";
import R, { isValidElement as Yd, version as Kd, useContext as ae, createContext as Qt, useRef as ge, useLayoutEffect as Na, useEffect as Ye, useState as Zt, forwardRef as Mn, useMemo as Ae, Children as Qd, memo as dr, startTransition as ws } from "react";
import * as Pl from "react-dom";
import $s, { createPortal as Nl } from "react-dom";
function Zd(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Jo = { exports: {} };
var Os;
function Jd() {
  return Os || (Os = 1, (function(e) {
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
  })(Jo)), Jo.exports;
}
var em = Jd();
const z = /* @__PURE__ */ Zd(em);
function le() {
  return le = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, le.apply(null, arguments);
}
function X(e) {
  "@babel/helpers - typeof";
  return X = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, X(e);
}
var tm = Symbol.for("react.element"), nm = Symbol.for("react.transitional.element"), rm = Symbol.for("react.fragment");
function Tl(e) {
  return (
    // Base object type
    e && X(e) === "object" && // React Element type
    (e.$$typeof === tm || e.$$typeof === nm) && // React Fragment type
    e.type === rm
  );
}
function Ta(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return R.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Ta(r)) : Tl(r) && r.props ? n = n.concat(Ta(r.props.children, t)) : n.push(r));
  }), n;
}
var Ra = {}, Ni = [], om = function(t) {
  Ni.push(t);
};
function Qn(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ni.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function am(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Ni.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Rl() {
  Ra = {};
}
function _l(e, t, n) {
  !t && !Ra[n] && (e(!1, n), Ra[n] = !0);
}
function $e(e, t) {
  _l(Qn, e, t);
}
function im(e, t) {
  _l(am, e, t);
}
$e.preMessage = om;
$e.resetWarned = Rl;
$e.noteOnce = im;
function sm(e, t) {
  if (X(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (X(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Ml(e) {
  var t = sm(e, "string");
  return X(t) == "symbol" ? t : t + "";
}
function T(e, t, n) {
  return (t = Ml(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Ps(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Ps(Object(n), !0).forEach(function(r) {
      T(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ps(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ns(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function cm(e) {
  return e && X(e) === "object" && Ns(e.nativeElement) ? e.nativeElement : Ns(e) ? e : null;
}
function lm(e) {
  var t = cm(e);
  if (t)
    return t;
  if (e instanceof R.Component) {
    var n;
    return (n = $s.findDOMNode) === null || n === void 0 ? void 0 : n.call($s, e);
  }
  return null;
}
var Fr = { exports: {} }, ue = {};
var Ts;
function um() {
  if (Ts) return ue;
  Ts = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v;
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
                case d:
                case f:
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
  return ue.ContextConsumer = i, ue.ContextProvider = a, ue.Element = e, ue.ForwardRef = c, ue.Fragment = n, ue.Lazy = d, ue.Memo = f, ue.Portal = t, ue.Profiler = o, ue.StrictMode = r, ue.Suspense = l, ue.SuspenseList = u, ue.isAsyncMode = function() {
    return !1;
  }, ue.isConcurrentMode = function() {
    return !1;
  }, ue.isContextConsumer = function(m) {
    return p(m) === i;
  }, ue.isContextProvider = function(m) {
    return p(m) === a;
  }, ue.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, ue.isForwardRef = function(m) {
    return p(m) === c;
  }, ue.isFragment = function(m) {
    return p(m) === n;
  }, ue.isLazy = function(m) {
    return p(m) === d;
  }, ue.isMemo = function(m) {
    return p(m) === f;
  }, ue.isPortal = function(m) {
    return p(m) === t;
  }, ue.isProfiler = function(m) {
    return p(m) === o;
  }, ue.isStrictMode = function(m) {
    return p(m) === r;
  }, ue.isSuspense = function(m) {
    return p(m) === l;
  }, ue.isSuspenseList = function(m) {
    return p(m) === u;
  }, ue.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === o || m === r || m === l || m === u || m === h || typeof m == "object" && m !== null && (m.$$typeof === d || m.$$typeof === f || m.$$typeof === a || m.$$typeof === i || m.$$typeof === c || m.$$typeof === v || m.getModuleId !== void 0);
  }, ue.typeOf = p, ue;
}
var fe = {};
var Rs;
function fm() {
  return Rs || (Rs = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), v = !1, p = !1, m = !1, C = !1, y = !1, x;
    x = Symbol.for("react.module.reference");
    function S(D) {
      return !!(typeof D == "string" || typeof D == "function" || D === n || D === o || y || D === r || D === l || D === u || C || D === h || v || p || m || typeof D == "object" && D !== null && (D.$$typeof === d || D.$$typeof === f || D.$$typeof === a || D.$$typeof === i || D.$$typeof === c || // This needs to include all possible module reference object
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
                  case d:
                  case f:
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
    var w = i, E = a, $ = e, O = c, P = n, _ = d, I = f, F = t, M = o, A = r, j = l, k = u, W = !1, B = !1;
    function Z(D) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function J(D) {
      return B || (B = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(D) {
      return b(D) === i;
    }
    function K(D) {
      return b(D) === a;
    }
    function Y(D) {
      return typeof D == "object" && D !== null && D.$$typeof === e;
    }
    function G(D) {
      return b(D) === c;
    }
    function q(D) {
      return b(D) === n;
    }
    function oe(D) {
      return b(D) === d;
    }
    function Pe(D) {
      return b(D) === f;
    }
    function Ce(D) {
      return b(D) === t;
    }
    function Se(D) {
      return b(D) === o;
    }
    function Ee(D) {
      return b(D) === r;
    }
    function V(D) {
      return b(D) === l;
    }
    function pe(D) {
      return b(D) === u;
    }
    fe.ContextConsumer = w, fe.ContextProvider = E, fe.Element = $, fe.ForwardRef = O, fe.Fragment = P, fe.Lazy = _, fe.Memo = I, fe.Portal = F, fe.Profiler = M, fe.StrictMode = A, fe.Suspense = j, fe.SuspenseList = k, fe.isAsyncMode = Z, fe.isConcurrentMode = J, fe.isContextConsumer = Q, fe.isContextProvider = K, fe.isElement = Y, fe.isForwardRef = G, fe.isFragment = q, fe.isLazy = oe, fe.isMemo = Pe, fe.isPortal = Ce, fe.isProfiler = Se, fe.isStrictMode = Ee, fe.isSuspense = V, fe.isSuspenseList = pe, fe.isValidElementType = S, fe.typeOf = b;
  })()), fe;
}
var _s;
function dm() {
  return _s || (_s = 1, process.env.NODE_ENV === "production" ? Fr.exports = um() : Fr.exports = fm()), Fr.exports;
}
var ea = dm();
function yo(e, t, n) {
  var r = g.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var mm = Number(Kd.split(".")[0]), Il = function(t, n) {
  typeof t == "function" ? t(n) : X(t) === "object" && t && "current" in t && (t.current = n);
}, bo = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    n.forEach(function(i) {
      Il(i, a);
    });
  };
}, Ti = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return yo(function() {
    return bo.apply(void 0, n);
  }, n, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, Ri = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Fl(t) && mm >= 19)
    return !0;
  var o = ea.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ea.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ea.ForwardRef);
};
function Fl(e) {
  return /* @__PURE__ */ Yd(e) && !Tl(e);
}
var Al = function(t) {
  if (t && Fl(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
};
function Le(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Ms(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Ml(r.key), r);
  }
}
function De(e, t, n) {
  return t && Ms(e.prototype, t), n && Ms(e, n), Object.defineProperty(e, "prototype", {
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
function _i() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (_i = function() {
    return !!e;
  })();
}
function te(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function gm(e, t) {
  if (t && (X(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return te(e);
}
function nn(e) {
  var t = _i();
  return function() {
    var n, r = Jn(e);
    if (t) {
      var o = Jn(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return gm(this, n);
  };
}
function _a(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function vm(e) {
  if (Array.isArray(e)) return _a(e);
}
function jl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Mi(e, t) {
  if (e) {
    if (typeof e == "string") return _a(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _a(e, t) : void 0;
  }
}
function pm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e) {
  return vm(e) || jl(e) || Mi(e) || pm();
}
var kl = function(t) {
  return +setTimeout(t, 16);
}, Ll = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (kl = function(t) {
  return window.requestAnimationFrame(t);
}, Ll = function(t) {
  return window.cancelAnimationFrame(t);
});
var Is = 0, Co = /* @__PURE__ */ new Map();
function Dl(e) {
  Co.delete(e);
}
var zt = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Is += 1;
  var r = Is;
  function o(a) {
    if (a === 0)
      Dl(r), t();
    else {
      var i = kl(function() {
        o(a - 1);
      });
      Co.set(r, i);
    }
  }
  return o(n), r;
};
zt.cancel = function(e) {
  var t = Co.get(e);
  return Dl(e), Ll(t);
};
process.env.NODE_ENV !== "production" && (zt.ids = function() {
  return Co;
});
function Vl(e) {
  if (Array.isArray(e)) return e;
}
function hm(e, t) {
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
function Bl() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function L(e, t) {
  return Vl(e) || hm(e, t) || Mi(e, t) || Bl();
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
function Ma(e, t) {
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
var Fs = "data-rc-order", As = "data-rc-priority", ym = "rc-util-key", Ia = /* @__PURE__ */ new Map();
function Hl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ym;
}
function xo(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function bm(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Ii(e) {
  return Array.from((Ia.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function zl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ze())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = bm(r), s = i === "prependQueue", c = document.createElement("style");
  c.setAttribute(Fs, i), s && a && c.setAttribute(As, "".concat(a)), n != null && n.nonce && (c.nonce = n?.nonce), c.innerHTML = e;
  var l = xo(t), u = l.firstChild;
  if (r) {
    if (s) {
      var f = (t.styles || Ii(l)).filter(function(d) {
        if (!["prepend", "prependQueue"].includes(d.getAttribute(Fs)))
          return !1;
        var h = Number(d.getAttribute(As) || 0);
        return a >= h;
      });
      if (f.length)
        return l.insertBefore(c, f[f.length - 1].nextSibling), c;
    }
    l.insertBefore(c, u);
  } else
    l.appendChild(c);
  return c;
}
function Wl(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = xo(t);
  return (t.styles || Ii(n)).find(function(r) {
    return r.getAttribute(Hl(t)) === e;
  });
}
function tr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Wl(e, t);
  if (n) {
    var r = xo(t);
    r.removeChild(n);
  }
}
function Cm(e, t) {
  var n = Ia.get(e);
  if (!n || !Ma(document, n)) {
    var r = zl("", t), o = r.parentNode;
    Ia.set(e, o), e.removeChild(r);
  }
}
function jt(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = xo(n), o = Ii(r), a = N(N({}, n), {}, {
    styles: o
  });
  Cm(r, a);
  var i = Wl(t, a);
  if (i) {
    var s, c;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((c = a.csp) === null || c === void 0 ? void 0 : c.nonce)) {
      var l;
      i.nonce = (l = a.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = zl(e, a);
  return u.setAttribute(Hl(a), t), u;
}
function xm(e, t) {
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
  var n, r, o = xm(e, t);
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
      var f = Object.keys(a);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(d) {
        return o(a[d], i[d], l);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Sm = "%";
function Fa(e) {
  return e.join(Sm);
}
var Em = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e), T(this, "instanceId", void 0), T(this, "cache", /* @__PURE__ */ new Map()), T(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return De(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Fa(n));
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
      return this.opUpdate(Fa(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), a = r(o);
      a === null ? this.cache.delete(n) : this.cache.set(n, a);
    }
  }]), e;
})(), wm = ["children"], En = "data-token-hash", ht = "data-css-hash", $m = "data-cache-path", Vt = "__cssinjs_instance__";
function Gl() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(ht, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Vt] = o[Vt] || e, o[Vt] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(ht, "]"))).forEach(function(o) {
      var a = o.getAttribute(ht);
      if (r[a]) {
        if (o[Vt] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[a] = !0;
    });
  }
  return new Em(e);
}
var Jt = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: Gl(),
  defaultCache: !0
}), Om = function(t) {
  var n = t.children, r = We(t, wm), o = g.useContext(Jt), a = yo(function() {
    var i = N({}, o);
    Object.keys(r).forEach(function(c) {
      var l = r[c];
      r[c] !== void 0 && (i[c] = l);
    });
    var s = r.cache;
    return i.cache = i.cache || Gl(), i.defaultCache = !s && o.defaultCache, i;
  }, [o, r], function(i, s) {
    return !nr(i[0], s[0], !0) || !nr(i[1], s[1], !0);
  });
  return /* @__PURE__ */ g.createElement(Jt.Provider, {
    value: a
  }, n);
};
function Pm(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var Fi = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), T(this, "cache", void 0), T(this, "keys", void 0), T(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
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
            var f = L(l, 2), d = f[1];
            return o.internalGet(u)[1] < d ? [u, o.internalGet(u)[1]] : l;
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
          var f = c.get(l);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : c.set(l, {
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
          return !Pm(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
T(Fi, "MAX_CACHE_SIZE", 20);
T(Fi, "MAX_CACHE_OFFSET", 5);
var js = 0, ql = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e), T(this, "derivatives", void 0), T(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = js, t.length === 0 && Qn(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), js += 1;
  }
  return De(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
})(), ta = new Fi();
function ao(e) {
  var t = Array.isArray(e) ? e : [e];
  return ta.has(t) || ta.set(t, new ql(t)), ta.get(t);
}
var Nm = /* @__PURE__ */ new WeakMap(), na = {};
function Tm(e, t) {
  for (var n = Nm, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(na) || n.set(na, e()), n.get(na);
}
var ks = /* @__PURE__ */ new WeakMap();
function Xn(e) {
  var t = ks.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof ql ? t += r.id : r && X(r) === "object" ? t += Xn(r) : t += r;
  }), t = er(t), ks.set(e, t)), t;
}
function Ls(e, t) {
  return er("".concat(t, "_").concat(Xn(e)));
}
var Aa = Ze();
function ne(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function io(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = N(N({}, r), {}, T(T({}, En, t), ht, n)), i = Object.keys(a).map(function(s) {
    var c = a[s];
    return c ? "".concat(s, '="').concat(c, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var qr = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Rm = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = L(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Ul = function(t, n, r) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, c, l = L(i, 2), u = l[0], f = l[1];
    if (r != null && (s = r.preserve) !== null && s !== void 0 && s[u])
      a[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (c = r.ignore) !== null && c !== void 0 && c[u])) {
      var d, h = qr(u, r?.prefix);
      o[h] = typeof f == "number" && !(r != null && (d = r.unitless) !== null && d !== void 0 && d[u]) ? "".concat(f, "px") : String(f), a[u] = "var(".concat(h, ")");
    }
  }), [a, Rm(o, n, {
    scope: r?.scope
  })];
}, Ds = process.env.NODE_ENV !== "test" && Ze() ? g.useLayoutEffect : g.useEffect, wn = function(t, n) {
  var r = g.useRef(!0);
  Ds(function() {
    return t(r.current);
  }, n), Ds(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, Vs = function(t, n) {
  wn(function(r) {
    if (!r)
      return t();
  }, n);
}, _m = N({}, g), Bs = _m.useInsertionEffect, Mm = function(t, n, r) {
  g.useMemo(t, r), wn(function() {
    return n(!0);
  }, r);
}, Im = Bs ? function(e, t, n) {
  return Bs(function() {
    return e(), t();
  }, n);
} : Mm, Fm = N({}, g), Am = Fm.useInsertionEffect, jm = function(t) {
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
}, km = function() {
  return function(t) {
    t();
  };
}, Lm = typeof Am < "u" ? jm : km;
function Dm() {
  return !1;
}
var ja = !1;
function Vm() {
  return ja;
}
const Bm = process.env.NODE_ENV === "production" ? Dm : Vm;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var Ar = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (Ar && typeof Ar.webpackHotUpdate == "function") {
    var Hm = Ar.webpackHotUpdate;
    Ar.webpackHotUpdate = function() {
      return ja = !0, setTimeout(function() {
        ja = !1;
      }, 0), Hm.apply(void 0, arguments);
    };
  }
}
function Ai(e, t, n, r, o) {
  var a = g.useContext(Jt), i = a.cache, s = [e].concat(H(t)), c = Fa(s), l = Lm([c]), u = Bm(), f = function(p) {
    i.opUpdate(c, function(m) {
      var C = m || [void 0, void 0], y = L(C, 2), x = y[0], S = x === void 0 ? 0 : x, b = y[1], w = b;
      process.env.NODE_ENV !== "production" && b && u && (r?.(w, u), w = null);
      var E = w || n(), $ = [S, E];
      return p ? p($) : $;
    });
  };
  g.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [c]
    /* eslint-enable */
  );
  var d = i.opGet(c);
  process.env.NODE_ENV !== "production" && !d && (f(), d = i.opGet(c));
  var h = d[1];
  return Im(function() {
    o?.(h);
  }, function(v) {
    return f(function(p) {
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
var zm = {}, Wm = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", qt = /* @__PURE__ */ new Map();
function Gm(e) {
  qt.set(e, (qt.get(e) || 0) + 1);
}
function qm(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(En, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Vt] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Um = 0;
function Xm(e, t) {
  qt.set(e, (qt.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  qt.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), qt.size - n.size > Um && n.forEach(function(r) {
    qm(r, t), qt.delete(r);
  });
}
var Xl = function(t, n, r, o) {
  var a = r.getDerivativeToken(t), i = N(N({}, a), n);
  return o && (i = o(i)), i;
}, Yl = "token";
function Ym(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = ae(Jt), o = r.cache.instanceId, a = r.container, i = n.salt, s = i === void 0 ? "" : i, c = n.override, l = c === void 0 ? zm : c, u = n.formatToken, f = n.getComputedToken, d = n.cssVar, h = Tm(function() {
    return Object.assign.apply(Object, [{}].concat(H(t)));
  }, t), v = Xn(h), p = Xn(l), m = d ? Xn(d) : "", C = Ai(Yl, [s, e.id, v, p, m], function() {
    var y, x = f ? f(h, l, e) : Xl(h, l, e, u), S = N({}, x), b = "";
    if (d) {
      var w = Ul(x, d.key, {
        prefix: d.prefix,
        ignore: d.ignore,
        unitless: d.unitless,
        preserve: d.preserve
      }), E = L(w, 2);
      x = E[0], b = E[1];
    }
    var $ = Ls(x, s);
    x._tokenKey = $, S._tokenKey = Ls(S, s);
    var O = (y = d?.key) !== null && y !== void 0 ? y : $;
    x._themeKey = O, Gm(O);
    var P = "".concat(Wm, "-").concat(er($));
    return x._hashId = P, [x, P, S, b, d?.key || ""];
  }, function(y) {
    Xm(y[0]._themeKey, o);
  }, function(y) {
    var x = L(y, 4), S = x[0], b = x[3];
    if (d && b) {
      var w = jt(b, er("css-variables-".concat(S._themeKey)), {
        mark: ht,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      w[Vt] = o, w.setAttribute(En, S._themeKey);
    }
  });
  return C;
}
var Km = function(t, n, r) {
  var o = L(t, 5), a = o[2], i = o[3], s = o[4], c = r || {}, l = c.plain;
  if (!i)
    return null;
  var u = a._tokenKey, f = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, h = io(i, s, u, d, l);
  return [f, u, h];
}, Qm = {
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
}, Kl = "comm", Ql = "rule", Zl = "decl", Zm = "@import", Jm = "@namespace", eg = "@keyframes", tg = "@layer", Jl = Math.abs, ji = String.fromCharCode;
function eu(e) {
  return e.trim();
}
function Ur(e, t, n) {
  return e.replace(t, n);
}
function ng(e, t, n) {
  return e.indexOf(t, n);
}
function yn(e, t) {
  return e.charCodeAt(t) | 0;
}
function $n(e, t, n) {
  return e.slice(t, n);
}
function Et(e) {
  return e.length;
}
function rg(e) {
  return e.length;
}
function jr(e, t) {
  return t.push(e), e;
}
var So = 1, On = 1, tu = 0, dt = 0, Me = 0, In = "";
function ki(e, t, n, r, o, a, i, s) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: So, column: On, length: i, return: "", siblings: s };
}
function og() {
  return Me;
}
function ag() {
  return Me = dt > 0 ? yn(In, --dt) : 0, On--, Me === 10 && (On = 1, So--), Me;
}
function yt() {
  return Me = dt < tu ? yn(In, dt++) : 0, On++, Me === 10 && (On = 1, So++), Me;
}
function Bt() {
  return yn(In, dt);
}
function Xr() {
  return dt;
}
function Eo(e, t) {
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
function ig(e) {
  return So = On = 1, tu = Et(In = e), dt = 0, [];
}
function sg(e) {
  return In = "", e;
}
function ra(e) {
  return eu(Eo(dt - 1, ka(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function cg(e) {
  for (; (Me = Bt()) && Me < 33; )
    yt();
  return rr(e) > 2 || rr(Me) > 3 ? "" : " ";
}
function lg(e, t) {
  for (; --t && yt() && !(Me < 48 || Me > 102 || Me > 57 && Me < 65 || Me > 70 && Me < 97); )
    ;
  return Eo(e, Xr() + (t < 6 && Bt() == 32 && yt() == 32));
}
function ka(e) {
  for (; yt(); )
    switch (Me) {
      // ] ) " '
      case e:
        return dt;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && ka(Me);
        break;
      // (
      case 40:
        e === 41 && ka(e);
        break;
      // \
      case 92:
        yt();
        break;
    }
  return dt;
}
function ug(e, t) {
  for (; yt() && e + Me !== 57; )
    if (e + Me === 84 && Bt() === 47)
      break;
  return "/*" + Eo(t, dt - 1) + "*" + ji(e === 47 ? e : yt());
}
function fg(e) {
  for (; !rr(Bt()); )
    yt();
  return Eo(e, dt);
}
function dg(e) {
  return sg(Yr("", null, null, null, [""], e = ig(e), 0, [0], e));
}
function Yr(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, f = i, d = 0, h = 0, v = 0, p = 1, m = 1, C = 1, y = 0, x = "", S = o, b = a, w = r, E = x; m; )
    switch (v = y, y = yt()) {
      // (
      case 40:
        if (v != 108 && yn(E, f - 1) == 58) {
          ng(E += Ur(ra(y), "&", "&\f"), "&\f", Jl(l ? s[l - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ra(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += cg(v);
        break;
      // \
      case 92:
        E += lg(Xr() - 1, 7);
        continue;
      // /
      case 47:
        switch (Bt()) {
          case 42:
          case 47:
            jr(mg(ug(yt(), Xr()), t, n, c), c), (rr(v || 1) == 5 || rr(Bt() || 1) == 5) && Et(E) && $n(E, -1, void 0) !== " " && (E += " ");
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
            C == -1 && (E = Ur(E, /\f/g, "")), h > 0 && (Et(E) - f || p === 0 && v === 47) && jr(h > 32 ? zs(E + ";", r, n, f - 1, c) : zs(Ur(E, " ", "") + ";", r, n, f - 2, c), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (jr(w = Hs(E, t, n, l, u, o, s, x, S = [], b = [], f, a), a), y === 123)
              if (u === 0)
                Yr(E, t, w, w, S, a, f, s, b);
              else {
                switch (d) {
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
                u ? Yr(e, w, w, r && jr(Hs(e, w, w, 0, 0, o, s, x, o, S = [], f, b), b), o, b, f, s, r ? S : b) : Yr(E, w, w, w, [""], b, 0, s, b);
              }
        }
        l = u = h = 0, p = C = 1, x = E = "", f = i;
        break;
      // :
      case 58:
        f = 1 + Et(E), h = v;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && ag() == 125)
            continue;
        }
        switch (E += ji(y), y * p) {
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
            Bt() === 45 && (E += ra(yt())), d = Bt(), u = f = Et(x = E += fg(Xr())), y++;
            break;
          // -
          case 45:
            v === 45 && Et(E) == 2 && (p = 0);
        }
    }
  return a;
}
function Hs(e, t, n, r, o, a, i, s, c, l, u, f) {
  for (var d = o - 1, h = o === 0 ? a : [""], v = rg(h), p = 0, m = 0, C = 0; p < r; ++p)
    for (var y = 0, x = $n(e, d + 1, d = Jl(m = i[p])), S = e; y < v; ++y)
      (S = eu(m > 0 ? h[y] + " " + x : Ur(x, /&\f/g, h[y]))) && (c[C++] = S);
  return ki(e, t, n, o === 0 ? Ql : s, c, l, u, f);
}
function mg(e, t, n, r) {
  return ki(e, t, n, Kl, ji(og()), $n(e, 2, -2), 0, r);
}
function zs(e, t, n, r, o) {
  return ki(e, t, n, Zl, $n(e, 0, r), $n(e, r + 1, -1), r, o);
}
function La(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function gg(e, t, n, r) {
  switch (e.type) {
    case tg:
      if (e.children.length) break;
    case Zm:
    case Jm:
    case Zl:
      return e.return = e.return || e.value;
    case Kl:
      return "";
    case eg:
      return e.return = e.value + "{" + La(e.children, r) + "}";
    case Ql:
      if (!Et(e.value = e.props.join(","))) return "";
  }
  return Et(n = La(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function nu(e, t) {
  var n = t.path, r = t.parentSelectors;
  $e(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var vg = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || a.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && nu("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, pg = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && nu("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, Ws = "data-ant-cssinjs-cache-path", ru = "_FILE_STYLE__", Kt, ou = !0;
function hg() {
  if (!Kt && (Kt = {}, Ze())) {
    var e = document.createElement("div");
    e.className = Ws, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = L(a, 2), s = i[0], c = i[1];
      Kt[s] = c;
    });
    var n = document.querySelector("style[".concat(Ws, "]"));
    if (n) {
      var r;
      ou = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function yg(e) {
  return hg(), !!Kt[e];
}
function bg(e) {
  var t = Kt[e], n = null;
  if (t && Ze())
    if (ou)
      n = ru;
    else {
      var r = document.querySelector("style[".concat(ht, '="').concat(Kt[e], '"]'));
      r ? n = r.innerHTML : delete Kt[e];
    }
  return [n, t];
}
var au = "_skip_check_", iu = "_multi_value_";
function Kr(e) {
  var t = La(dg(e), gg);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Cg(e) {
  return X(e) === "object" && e && (au in e || iu in e);
}
function Gs(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, a = e.split(",").map(function(i) {
    var s, c = i.trim().split(/\s+/), l = c[0] || "", u = ((s = l.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return l = "".concat(u).concat(o).concat(l.slice(u.length)), [l].concat(H(c.slice(1))).join(" ");
  });
  return a.join(",");
}
var xg = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, a = r.injectHash, i = r.parentSelectors, s = n.hashId, c = n.layer, l = n.path, u = n.hashPriority, f = n.transformers, d = f === void 0 ? [] : f, h = n.linters, v = h === void 0 ? [] : h, p = "", m = {};
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
      var w = d.reduce(function(E, $) {
        var O;
        return ($ == null || (O = $.visit) === null || O === void 0 ? void 0 : O.call($, E)) || E;
      }, b);
      Object.keys(w).forEach(function(E) {
        var $ = w[E];
        if (X($) === "object" && $ && (E !== "animationName" || !$._keyframe) && !Cg($)) {
          var O = !1, P = E.trim(), _ = !1;
          (o || a) && s ? P.startsWith("@") ? O = !0 : P === "&" ? P = Gs("", s, u) : P = Gs(E, s, u) : o && !s && (P === "&" || P === "") && (P = "", _ = !0);
          var I = e($, n, {
            root: _,
            injectHash: O,
            parentSelectors: [].concat(H(i), [P])
          }), F = L(I, 2), M = F[0], A = F[1];
          m = N(N({}, m), A), p += "".concat(P).concat(M);
        } else {
          let W = function(B, Z) {
            process.env.NODE_ENV !== "production" && (X($) !== "object" || !($ != null && $[au])) && [vg, pg].concat(H(v)).forEach(function(K) {
              return K(B, Z, {
                path: l,
                hashId: s,
                parentSelectors: i
              });
            });
            var J = B.replace(/[A-Z]/g, function(K) {
              return "-".concat(K.toLowerCase());
            }), Q = Z;
            !Qm[B] && typeof Q == "number" && Q !== 0 && (Q = "".concat(Q, "px")), B === "animationName" && Z !== null && Z !== void 0 && Z._keyframe && (C(Z), Q = Z.getName(s)), p += "".concat(J, ":").concat(Q, ";");
          };
          var j, k = (j = $?.value) !== null && j !== void 0 ? j : $;
          X($) === "object" && $ !== null && $ !== void 0 && $[iu] && Array.isArray(k) ? k.forEach(function(B) {
            W(E, B);
          }) : W(E, k);
        }
      });
    }
  }), o ? c && (p && (p = "@layer ".concat(c.name, " {").concat(p, "}")), c.dependencies && (m["@layer ".concat(c.name)] = c.dependencies.map(function(S) {
    return "@layer ".concat(S, ", ").concat(c.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, m];
};
function su(e, t) {
  return er("".concat(e.join("%")).concat(t));
}
function Sg() {
  return null;
}
var cu = "style";
function Da(e, t) {
  var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, c = e.order, l = c === void 0 ? 0 : c, u = g.useContext(Jt), f = u.autoClear, d = u.mock, h = u.defaultCache, v = u.hashPriority, p = u.container, m = u.ssrInline, C = u.transformers, y = u.linters, x = u.cache, S = u.layer, b = n._tokenKey, w = [b];
  S && w.push("layer"), w.push.apply(w, H(r));
  var E = Aa;
  process.env.NODE_ENV !== "production" && d !== void 0 && (E = d === "client");
  var $ = Ai(
    cu,
    w,
    // Create cache if needed
    function() {
      var F = w.join("|");
      if (yg(F)) {
        var M = bg(F), A = L(M, 2), j = A[0], k = A[1];
        if (j)
          return [j, b, k, {}, s, l];
      }
      var W = t(), B = xg(W, {
        hashId: o,
        hashPriority: v,
        layer: S ? a : void 0,
        path: r.join("-"),
        transformers: C,
        linters: y
      }), Z = L(B, 2), J = Z[0], Q = Z[1], K = Kr(J), Y = su(w, K);
      return [K, b, Y, Q, s, l];
    },
    // Remove cache if no need
    function(F, M) {
      var A = L(F, 3), j = A[2];
      (M || f) && Aa && tr(j, {
        mark: ht,
        attachTo: p
      });
    },
    // Effect: Inject style here
    function(F) {
      var M = L(F, 4), A = M[0];
      M[1];
      var j = M[2], k = M[3];
      if (E && A !== ru) {
        var W = {
          mark: ht,
          prepend: S ? !1 : "queue",
          attachTo: p,
          priority: l
        }, B = typeof i == "function" ? i() : i;
        B && (W.csp = {
          nonce: B
        });
        var Z = [], J = [];
        Object.keys(k).forEach(function(K) {
          K.startsWith("@layer") ? Z.push(K) : J.push(K);
        }), Z.forEach(function(K) {
          jt(Kr(k[K]), "_layer-".concat(K), N(N({}, W), {}, {
            prepend: !0
          }));
        });
        var Q = jt(A, j, W);
        Q[Vt] = x.instanceId, Q.setAttribute(En, b), process.env.NODE_ENV !== "production" && Q.setAttribute($m, w.join("|")), J.forEach(function(K) {
          jt(Kr(k[K]), "_effect-".concat(K), W);
        });
      }
    }
  ), O = L($, 3), P = O[0], _ = O[1], I = O[2];
  return function(F) {
    var M;
    return !m || E || !h ? M = /* @__PURE__ */ g.createElement(Sg, null) : M = /* @__PURE__ */ g.createElement("style", le({}, T(T({}, En, _), ht, I), {
      dangerouslySetInnerHTML: {
        __html: P
      }
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, M, F);
  };
}
var Eg = function(t, n, r) {
  var o = L(t, 6), a = o[0], i = o[1], s = o[2], c = o[3], l = o[4], u = o[5], f = r || {}, d = f.plain;
  if (l)
    return null;
  var h = a, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return h = io(a, i, s, v, d), c && Object.keys(c).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var m = Kr(c[p]), C = io(m, i, "_effect-".concat(p), v, d);
      p.startsWith("@layer") ? h = C + h : h += C;
    }
  }), [u, s, h];
}, lu = "cssVar", wg = function(t, n) {
  var r = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, c = t.scope, l = c === void 0 ? "" : c, u = ae(Jt), f = u.cache.instanceId, d = u.container, h = s._tokenKey, v = [].concat(H(t.path), [r, l, h]), p = Ai(lu, v, function() {
    var m = n(), C = Ul(m, r, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: l
    }), y = L(C, 2), x = y[0], S = y[1], b = su(v, S);
    return [x, S, b, r];
  }, function(m) {
    var C = L(m, 3), y = C[2];
    Aa && tr(y, {
      mark: ht,
      attachTo: d
    });
  }, function(m) {
    var C = L(m, 3), y = C[1], x = C[2];
    if (y) {
      var S = jt(y, x, {
        mark: ht,
        prepend: "queue",
        attachTo: d,
        priority: -999
      });
      S[Vt] = f, S.setAttribute(En, r);
    }
  });
  return p;
}, $g = function(t, n, r) {
  var o = L(t, 4), a = o[1], i = o[2], s = o[3], c = r || {}, l = c.plain;
  if (!a)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, d = io(a, s, i, f, l);
  return [u, i, d];
};
T(T(T({}, cu, Eg), Yl, Km), lu, $g);
var Ne = /* @__PURE__ */ (function() {
  function e(t, n) {
    Le(this, e), T(this, "name", void 0), T(this, "style", void 0), T(this, "_keyframe", !0), this.name = t, this.style = n;
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
var Li = /* @__PURE__ */ Qt({});
function Og(e) {
  return Vl(e) || jl(e) || Mi(e) || Bl();
}
function Ot(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function uu(e, t, n, r) {
  if (!t.length)
    return n;
  var o = Og(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = H(e) : s = N({}, e), r && n === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = uu(s[a], i, n, r), s;
}
function gt(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Ot(e, t.slice(0, -1)) ? e : uu(e, t, n, r);
}
function Pg(e) {
  return X(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function qs(e) {
  return Array.isArray(e) ? [] : {};
}
var Ng = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function gn() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = qs(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var c = new Set(s), l = Ot(o, i), u = Array.isArray(l);
      if (u || Pg(l)) {
        if (!c.has(l)) {
          c.add(l);
          var f = Ot(r, i);
          u ? r = gt(r, i, []) : (!f || X(f) !== "object") && (r = gt(r, i, qs(l))), Ng(l).forEach(function(d) {
            a([].concat(H(i), [d]), c);
          });
        }
      } else
        r = gt(r, i, l);
    }
    a([]);
  }), r;
}
function fu() {
}
let Ft = null;
function Tg() {
  Ft = null, Rl();
}
let du = fu;
process.env.NODE_ENV !== "production" && (du = (e, t, n) => {
  $e(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && Tg();
});
const Gt = du, mu = /* @__PURE__ */ g.createContext({}), it = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(mu), n = (r, o, a) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = Ft;
        Ft || (Ft = {}), Ft[e] = Ft[e] || [], Ft[e].includes(a || "") || Ft[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", Ft);
      } else
        process.env.NODE_ENV !== "production" && Gt(r, e, a);
  };
  return n.deprecated = (r, o, a, i) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = fu, e;
}, Rg = /* @__PURE__ */ Qt(void 0);
var _g = {
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
}, Mg = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Ig = N(N({}, Mg), {}, {
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
const gu = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, Us = {
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
  }, Ig),
  timePickerLocale: Object.assign({}, gu)
}, nt = "${label} is not a valid ${type}", Wt = {
  locale: "en",
  Pagination: _g,
  DatePicker: Us,
  TimePicker: gu,
  Calendar: Us,
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
let Qr = Object.assign({}, Wt.Modal), Zr = [];
const Xs = () => Zr.reduce((e, t) => Object.assign(Object.assign({}, e), t), Wt.Modal);
function Fg(e) {
  if (e) {
    const t = Object.assign({}, e);
    return Zr.push(t), Qr = Xs(), () => {
      Zr = Zr.filter((n) => n !== t), Qr = Xs();
    };
  }
  Qr = Object.assign({}, Wt.Modal);
}
function vu() {
  return Qr;
}
const Di = /* @__PURE__ */ Qt(void 0), wo = (e, t) => {
  const n = g.useContext(Di), r = g.useMemo(() => {
    var a;
    const i = t || Wt[e], s = (a = n?.[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, n]), o = g.useMemo(() => {
    const a = n?.locale;
    return n?.exist && !a ? Wt.locale : a;
  }, [n]);
  return [r, o];
}, pu = "internalMark", hu = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = it("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(r === pu, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => Fg(t?.Modal), [t]);
  const o = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Di.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (hu.displayName = "LocaleProvider");
const Vi = {
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
}, Pn = Object.assign(Object.assign({}, Vi), {
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
function oa(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Ys = (e, t, n) => n === 0 ? e : e / 100;
function zn(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class xe {
  constructor(t) {
    T(this, "isValid", !0), T(this, "r", 0), T(this, "g", 0), T(this, "b", 0), T(this, "a", 1), T(this, "_h", void 0), T(this, "_s", void 0), T(this, "_l", void 0), T(this, "_v", void 0), T(this, "_max", void 0), T(this, "_min", void 0), T(this, "_brightness", void 0);
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
      const d = ke(r * 255);
      this.r = d, this.g = d, this.b = d;
    }
    let a = 0, i = 0, s = 0;
    const c = t / 60, l = (1 - Math.abs(2 * r - 1)) * n, u = l * (1 - Math.abs(c % 2 - 1));
    c >= 0 && c < 1 ? (a = l, i = u) : c >= 1 && c < 2 ? (a = u, i = l) : c >= 2 && c < 3 ? (i = l, s = u) : c >= 3 && c < 4 ? (i = u, s = l) : c >= 4 && c < 5 ? (a = u, s = l) : c >= 5 && c < 6 && (a = l, s = u);
    const f = r - l / 2;
    this.r = ke((a + f) * 255), this.g = ke((i + f) * 255), this.b = ke((s + f) * 255);
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
    const i = t / 60, s = Math.floor(i), c = i - s, l = ke(r * (1 - n) * 255), u = ke(r * (1 - n * c) * 255), f = ke(r * (1 - n * (1 - c)) * 255);
    switch (s) {
      case 0:
        this.g = f, this.b = l;
        break;
      case 1:
        this.r = u, this.b = l;
        break;
      case 2:
        this.r = l, this.b = f;
        break;
      case 3:
        this.r = l, this.g = u;
        break;
      case 4:
        this.r = f, this.g = l;
        break;
      case 5:
      default:
        this.g = l, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = oa(t, Ys);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = oa(t, Ys);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = oa(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? ke(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var kr = 2, Ks = 0.16, Ag = 0.05, jg = 0.05, kg = 0.15, yu = 5, bu = 4, Lg = [{
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
function Qs(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - kr * t : Math.round(e.h) + kr * t : r = n ? Math.round(e.h) + kr * t : Math.round(e.h) - kr * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function Zs(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - Ks * t : t === bu ? r = e.s + Ks : r = e.s + Ag * t, r > 1 && (r = 1), n && t === yu && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function Js(e, t, n) {
  var r;
  return n ? r = e.v + jg * t : r = e.v - kg * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function en(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new xe(e), o = r.toHsv(), a = yu; a > 0; a -= 1) {
    var i = new xe({
      h: Qs(o, a, !0),
      s: Zs(o, a, !0),
      v: Js(o, a, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var s = 1; s <= bu; s += 1) {
    var c = new xe({
      h: Qs(o, s),
      s: Zs(o, s),
      v: Js(o, s)
    });
    n.push(c);
  }
  return t.theme === "dark" ? Lg.map(function(l) {
    var u = l.index, f = l.amount;
    return new xe(t.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(l) {
    return l.toHexString();
  });
}
var aa = {
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
}, Va = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Va.primary = Va[5];
var Ba = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Ba.primary = Ba[5];
var Ha = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ha.primary = Ha[5];
var za = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
za.primary = za[5];
var Wa = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
Wa.primary = Wa[5];
var Ga = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Ga.primary = Ga[5];
var qa = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
qa.primary = qa[5];
var Ua = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Ua.primary = Ua[5];
var so = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
so.primary = so[5];
var Xa = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Xa.primary = Xa[5];
var Ya = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ya.primary = Ya[5];
var Ka = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Ka.primary = Ka[5];
var Qa = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Qa.primary = Qa[5];
var ia = {
  red: Va,
  volcano: Ba,
  orange: Ha,
  gold: za,
  yellow: Wa,
  lime: Ga,
  green: qa,
  cyan: Ua,
  blue: so,
  geekblue: Xa,
  purple: Ya,
  magenta: Ka,
  grey: Qa
};
function Cu(e, {
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
  } = e, u = t(s), f = t(r), d = t(o), h = t(a), v = t(i), p = n(c, l), m = e.colorLink || e.colorInfo, C = t(m), y = new xe(h[1]).mix(new xe(h[3]), 50).toHexString();
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
    colorSuccessBg: f[1],
    colorSuccessBgHover: f[2],
    colorSuccessBorder: f[3],
    colorSuccessBorderHover: f[4],
    colorSuccessHover: f[4],
    colorSuccess: f[6],
    colorSuccessActive: f[7],
    colorSuccessTextHover: f[8],
    colorSuccessText: f[9],
    colorSuccessTextActive: f[10],
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
    colorWarningBg: d[1],
    colorWarningBgHover: d[2],
    colorWarningBorder: d[3],
    colorWarningBorderHover: d[4],
    colorWarningHover: d[4],
    colorWarning: d[6],
    colorWarningActive: d[7],
    colorWarningTextHover: d[8],
    colorWarningText: d[9],
    colorWarningTextActive: d[10],
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
const Dg = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Vg(e) {
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
  }, Dg(r));
}
const xu = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Jr(e) {
  return (e + 8) / e;
}
function Bg(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, a = e * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Jr(n)
  }));
}
const Su = (e) => {
  const t = Bg(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], a = n[0], i = n[2], s = r[1], c = r[0], l = r[2];
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
function Hg(e) {
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
const ct = (e, t) => new xe(e).setA(t).toRgbString(), Wn = (e, t) => new xe(e).darken(t).toHexString(), zg = (e) => {
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
}, Wg = (e, t) => {
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
function $o(e) {
  aa.pink = aa.magenta, ia.pink = ia.magenta;
  const t = Object.keys(Vi).map((n) => {
    const r = e[n] === aa[n] ? ia[n] : en(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o[`${n}${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Cu(e, {
    generateColorPalettes: zg,
    generateNeutralColorPalettes: Wg
  })), Su(e.fontSize)), Hg(e)), xu(e)), Vg(e));
}
const Bi = ao($o), or = {
  token: Pn,
  override: {
    override: Pn
  },
  hashed: !0
}, Hi = /* @__PURE__ */ R.createContext(or), co = "ant", Oo = "anticon", Gg = (e, t) => t || (e ? `${co}-${e}` : co), be = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: Gg,
  iconPrefixCls: Oo
}), {
  Consumer: Gx
} = be, ec = {};
function Eu(e) {
  const t = g.useContext(be), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: ec,
    styles: ec
  }, a), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const qg = `-ant-${Date.now()}-${Math.random()}`;
function Ug(e, t) {
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
function Xg(e, t) {
  const n = Ug(e, t);
  Ze() ? jt(n, `${qg}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const lo = /* @__PURE__ */ g.createContext(!1), wu = ({
  children: e,
  disabled: t
}) => {
  const n = g.useContext(lo);
  return /* @__PURE__ */ g.createElement(lo.Provider, {
    value: t ?? n
  }, e);
}, Nn = /* @__PURE__ */ g.createContext(void 0), Yg = ({
  children: e,
  size: t
}) => {
  const n = g.useContext(Nn);
  return /* @__PURE__ */ g.createElement(Nn.Provider, {
    value: t || n
  }, e);
};
function Kg() {
  const e = ae(lo), t = ae(Nn);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var $u = /* @__PURE__ */ De(function e() {
  Le(this, e);
}), Ou = "CALC_UNIT", Qg = new RegExp(Ou, "g");
function sa(e) {
  return typeof e == "number" ? "".concat(e).concat(Ou) : e;
}
var Zg = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r, o) {
    var a;
    Le(this, n), a = t.call(this), T(te(a), "result", ""), T(te(a), "unitlessCssVar", void 0), T(te(a), "lowPriority", void 0);
    var i = X(r);
    return a.unitlessCssVar = o, r instanceof n ? a.result = "(".concat(r.result, ")") : i === "number" ? a.result = sa(r) : i === "string" && (a.result = r), a;
  }
  return De(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(sa(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(sa(o))), this.lowPriority = !0, this;
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
      }) && (c = !1), this.result = this.result.replace(Qg, c ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})($u), Jg = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    var o;
    return Le(this, n), o = t.call(this), T(te(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
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
})($u), ev = function(t, n) {
  var r = t === "css" ? Zg : Jg;
  return function(o) {
    return new r(o, n);
  };
}, tc = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function Nt(e) {
  var t = g.useRef();
  t.current = e;
  var n = g.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function Tn(e) {
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
function ca(e) {
  return e !== void 0;
}
function tv(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = Tn(function() {
    return ca(o) ? o : ca(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), c = L(s, 2), l = c[0], u = c[1], f = o !== void 0 ? o : l, d = i ? i(f) : f, h = Nt(a), v = Tn([f]), p = L(v, 2), m = p[0], C = p[1];
  Vs(function() {
    var x = m[0];
    l !== x && h(l, x);
  }, [m]), Vs(function() {
    ca(o) || u(o);
  }, [o]);
  var y = Nt(function(x, S) {
    u(x, S), C([f], S);
  });
  return [d, y];
}
function nc(e, t, n, r) {
  var o = N({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var a = r.deprecatedTokens;
    a.forEach(function(s) {
      var c = L(s, 2), l = c[0], u = c[1];
      if (process.env.NODE_ENV !== "production" && $e(!(o != null && o[l]), "Component Token `".concat(String(l), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[l] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o?.[l]);
      }
    });
  }
  var i = N(N({}, n), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var Pu = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", Za = !0;
function bt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!Pu)
    return Object.assign.apply(Object, [{}].concat(t));
  Za = !1;
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
  }), Za = !0, r;
}
var rc = {};
function nv() {
}
var rv = function(t) {
  var n, r = t, o = nv;
  return Pu && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, s) {
      if (Za) {
        var c;
        (c = n) === null || c === void 0 || c.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var c;
    rc[i] = {
      global: Array.from(n),
      component: N(N({}, (c = rc[i]) === null || c === void 0 ? void 0 : c.component), s)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function oc(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n(bt(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function ov(e) {
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
var av = 1e3 * 60 * 10, iv = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), T(this, "map", /* @__PURE__ */ new Map()), T(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), T(this, "nextID", 0), T(this, "lastAccessBeat", /* @__PURE__ */ new Map()), T(this, "accessBeat", 0);
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
          r - o > av && (n.map.delete(a), n.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), ac = new iv();
function sv(e, t) {
  return R.useMemo(function() {
    var n = ac.get(t);
    if (n)
      return n;
    var r = e();
    return ac.set(t, r), r;
  }, t);
}
var cv = function() {
  return {};
};
function lv(e) {
  var t = e.useCSP, n = t === void 0 ? cv : t, r = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function c(d, h, v, p) {
    var m = Array.isArray(d) ? d[0] : d;
    function C($) {
      return "".concat(String(m)).concat($.slice(0, 1).toUpperCase()).concat($.slice(1));
    }
    var y = p?.unitless || {}, x = typeof s == "function" ? s(d) : {}, S = N(N({}, x), {}, T({}, C("zIndexPopup"), !0));
    Object.keys(y).forEach(function($) {
      S[C($)] = y[$];
    });
    var b = N(N({}, p), {}, {
      unitless: S,
      prefixToken: C
    }), w = u(d, h, v, b), E = l(m, v, b);
    return function($) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $, P = w($, O), _ = L(P, 2), I = _[1], F = E(O), M = L(F, 2), A = M[0], j = M[1];
      return [A, I, j];
    };
  }
  function l(d, h, v) {
    var p = v.unitless, m = v.injectStyle, C = m === void 0 ? !0 : m, y = v.prefixToken, x = v.ignore, S = function(E) {
      var $ = E.rootCls, O = E.cssVar, P = O === void 0 ? {} : O, _ = r(), I = _.realToken;
      return wg({
        path: [d],
        prefix: P.prefix,
        key: P.key,
        unitless: p,
        ignore: x,
        token: I,
        scope: $
      }, function() {
        var F = oc(d, I, h), M = nc(d, I, F, {
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
          component: d
        }), P) : P;
      }, O?.key];
    };
    return b;
  }
  function u(d, h, v) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(d) ? d : [d, d], C = L(m, 1), y = C[0], x = m.join("-"), S = e.layer || {
      name: "antd"
    };
    return function(b) {
      var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b, E = r(), $ = E.theme, O = E.realToken, P = E.hashId, _ = E.token, I = E.cssVar, F = o(), M = F.rootPrefixCls, A = F.iconPrefixCls, j = n(), k = I ? "css" : "js", W = sv(function() {
        var Y = /* @__PURE__ */ new Set();
        return I && Object.keys(p.unitless || {}).forEach(function(G) {
          Y.add(qr(G, I.prefix)), Y.add(qr(G, tc(y, I.prefix)));
        }), ev(k, Y);
      }, [k, y, I?.prefix]), B = ov(k), Z = B.max, J = B.min, Q = {
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
      typeof a == "function" && Da(N(N({}, Q), {}, {
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
      var K = Da(N(N({}, Q), {}, {
        path: [x, b, A]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var Y = rv(_), G = Y.token, q = Y.flush, oe = oc(y, O, v), Pe = ".".concat(b), Ce = nc(y, O, oe, {
          deprecatedTokens: p.deprecatedTokens
        });
        I && oe && X(oe) === "object" && Object.keys(oe).forEach(function(pe) {
          oe[pe] = "var(".concat(qr(pe, tc(y, I.prefix)), ")");
        });
        var Se = bt(G, {
          componentCls: Pe,
          prefixCls: b,
          iconCls: ".".concat(A),
          antCls: ".".concat(M),
          calc: W,
          // @ts-ignore
          max: Z,
          // @ts-ignore
          min: J
        }, I ? oe : Ce), Ee = h(Se, {
          hashId: P,
          prefixCls: b,
          rootPrefixCls: M,
          iconPrefixCls: A
        });
        q(y, Ce);
        var V = typeof i == "function" ? i(Se, b, w, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : V, Ee];
      });
      return [K, P];
    };
  }
  function f(d, h, v) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = u(d, h, v, N({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), C = function(x) {
      var S = x.prefixCls, b = x.rootCls, w = b === void 0 ? S : b;
      return m(S, w), null;
    };
    return process.env.NODE_ENV !== "production" && (C.displayName = "SubStyle_".concat(String(Array.isArray(d) ? d.join(".") : d))), C;
  }
  return {
    genStyleHooks: c,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const zi = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], uv = "5.28.0";
function la(e) {
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
    const u = Math.round((n - i * (1 - l)) / l), f = Math.round((r - s * (1 - l)) / l), d = Math.round((o - c * (1 - l)) / l);
    if (la(u) && la(f) && la(d))
      return new xe({
        r: u,
        g: f,
        b: d,
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
var fv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function Wi(e) {
  const {
    override: t
  } = e, n = fv(e, ["override"]), r = Object.assign({}, t);
  Object.keys(Pn).forEach((d) => {
    delete r[d];
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
var ic = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Nu = {
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
}, dv = {
  motionBase: !0,
  motionUnit: !0
}, mv = {
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
}, Tu = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, a = ic(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = Wi(i), a && Object.entries(a).forEach(([s, c]) => {
    const {
      theme: l
    } = c, u = ic(c, ["theme"]);
    let f = u;
    l && (f = Tu(Object.assign(Object.assign({}, i), u), {
      override: u
    }, l)), i[s] = f;
  }), i;
};
function _t() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = R.useContext(Hi), a = `${uv}-${t || ""}`, i = n || Bi, [s, c, l] = Ym(i, [Pn, e], {
    salt: a,
    override: r,
    getComputedToken: Tu,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: Wi,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Nu,
      ignore: dv,
      preserve: mv
    }
  });
  return [i, l, t ? c : "", s, o];
}
const Gi = (e, t = !1) => ({
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
}), Ru = () => ({
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
}), gv = () => ({
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
}), vv = (e) => ({
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
}), pv = (e, t, n, r) => {
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
}, hv = (e, t) => ({
  outline: `${ne(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), qi = (e, t) => ({
  "&:focus-visible": hv(e, t)
}), _u = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, Ru()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: rn,
  genComponentStyleHook: yv,
  genSubStyleComponent: Ui
} = lv({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = ae(be);
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
    } = ae(be);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = vv(e);
    return [r, {
      "&": r
    }, _u((n = t?.prefix.iconPrefixCls) !== null && n !== void 0 ? n : Oo)];
  },
  getCommonStyle: pv,
  getCompUnitless: () => Nu
}), bv = (e, t) => {
  const [n, r] = _t();
  return Da({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => _u(e));
}, Cv = Object.assign({}, g), {
  useId: sc
} = Cv, xv = () => "", Sv = typeof sc > "u" ? xv : sc;
function Ev(e, t, n) {
  var r, o;
  const a = it("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, or), {
    hashed: (r = t?.hashed) !== null && r !== void 0 ? r : or.hashed,
    cssVar: t?.cssVar
  }) : t, c = Sv();
  if (process.env.NODE_ENV !== "production") {
    const l = i.cssVar || s.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || c);
    process.env.NODE_ENV !== "production" && a(!l || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return yo(() => {
    var l, u;
    if (!e)
      return t;
    const f = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((v) => {
      f[v] = Object.assign(Object.assign({}, f[v]), e.components[v]);
    });
    const d = `css-var-${c.replace(/:/g, "")}`, h = ((l = i.cssVar) !== null && l !== void 0 ? l : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n?.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || d
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: f,
      cssVar: h
    });
  }, [i, s], (l, u) => l.some((f, d) => {
    const h = u[d];
    return !nr(f, h, !0);
  }));
}
var wv = ["children"], Mu = /* @__PURE__ */ g.createContext({});
function $v(e) {
  var t = e.children, n = We(e, wv);
  return /* @__PURE__ */ g.createElement(Mu.Provider, {
    value: n
  }, t);
}
var Ov = /* @__PURE__ */ (function(e) {
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
function Pv(e) {
  var t = g.useReducer(function(s) {
    return s + 1;
  }, 0), n = L(t, 2), r = n[1], o = g.useRef(e), a = Nt(function() {
    return o.current;
  }), i = Nt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, r();
  });
  return [a, i];
}
var Dt = "none", Lr = "appear", Dr = "enter", Vr = "leave", cc = "none", vt = "prepare", vn = "start", pn = "active", Xi = "end", Iu = "prepared";
function lc(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function Nv(e, t) {
  var n = {
    animationend: lc("Animation", "AnimationEnd"),
    transitionend: lc("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var Tv = Nv(Ze(), typeof window < "u" ? window : {}), Fu = {};
if (Ze()) {
  var Rv = document.createElement("div");
  Fu = Rv.style;
}
var Br = {};
function Au(e) {
  if (Br[e])
    return Br[e];
  var t = Tv[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in Fu)
        return Br[e] = t[a], Br[e];
    }
  return "";
}
var ju = Au("animationend"), ku = Au("transitionend"), Lu = !!(ju && ku), uc = ju || "animationend", fc = ku || "transitionend";
function dc(e, t) {
  if (!e) return null;
  if (X(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const _v = (function(e) {
  var t = ge();
  function n(o) {
    o && (o.removeEventListener(fc, e), o.removeEventListener(uc, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(fc, e), o.addEventListener(uc, e), t.current = o);
  }
  return g.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var Du = Ze() ? Na : Ye;
const Mv = (function() {
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
var Iv = [vt, vn, pn, Xi], Fv = [vt, Iu], Vu = !1, Av = !0;
function Bu(e) {
  return e === pn || e === Xi;
}
const jv = (function(e, t, n) {
  var r = Tn(cc), o = L(r, 2), a = o[0], i = o[1], s = Mv(), c = L(s, 2), l = c[0], u = c[1];
  function f() {
    i(vt, !0);
  }
  var d = t ? Fv : Iv;
  return Du(function() {
    if (a !== cc && a !== Xi) {
      var h = d.indexOf(a), v = d[h + 1], p = n(a);
      p === Vu ? i(v, !0) : v && l(function(m) {
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
  }, []), [f, a];
});
function kv(e, t, n, r) {
  var o = r.motionEnter, a = o === void 0 ? !0 : o, i = r.motionAppear, s = i === void 0 ? !0 : i, c = r.motionLeave, l = c === void 0 ? !0 : c, u = r.motionDeadline, f = r.motionLeaveImmediately, d = r.onAppearPrepare, h = r.onEnterPrepare, v = r.onLeavePrepare, p = r.onAppearStart, m = r.onEnterStart, C = r.onLeaveStart, y = r.onAppearActive, x = r.onEnterActive, S = r.onLeaveActive, b = r.onAppearEnd, w = r.onEnterEnd, E = r.onLeaveEnd, $ = r.onVisibleChanged, O = Tn(), P = L(O, 2), _ = P[0], I = P[1], F = Pv(Dt), M = L(F, 2), A = M[0], j = M[1], k = Tn(null), W = L(k, 2), B = W[0], Z = W[1], J = A(), Q = ge(!1), K = ge(null);
  function Y() {
    return n();
  }
  var G = ge(!1);
  function q() {
    j(Dt), Z(null, !0);
  }
  var oe = Nt(function(we) {
    var Oe = A();
    if (Oe !== Dt) {
      var Ge = Y();
      if (!(we && !we.deadline && we.target !== Ge)) {
        var Je = G.current, qe;
        Oe === Lr && Je ? qe = b?.(Ge, we) : Oe === Dr && Je ? qe = w?.(Ge, we) : Oe === Vr && Je && (qe = E?.(Ge, we)), Je && qe !== !1 && q();
      }
    }
  }), Pe = _v(oe), Ce = L(Pe, 1), Se = Ce[0], Ee = function(Oe) {
    switch (Oe) {
      case Lr:
        return T(T(T({}, vt, d), vn, p), pn, y);
      case Dr:
        return T(T(T({}, vt, h), vn, m), pn, x);
      case Vr:
        return T(T(T({}, vt, v), vn, C), pn, S);
      default:
        return {};
    }
  }, V = g.useMemo(function() {
    return Ee(J);
  }, [J]), pe = jv(J, !e, function(we) {
    if (we === vt) {
      var Oe = V[vt];
      return Oe ? Oe(Y()) : Vu;
    }
    if (ie in V) {
      var Ge;
      Z(((Ge = V[ie]) === null || Ge === void 0 ? void 0 : Ge.call(V, Y(), null)) || null);
    }
    return ie === pn && J !== Dt && (Se(Y()), u > 0 && (clearTimeout(K.current), K.current = setTimeout(function() {
      oe({
        deadline: !0
      });
    }, u))), ie === Iu && q(), Av;
  }), D = L(pe, 2), ee = D[0], ie = D[1], Qe = Bu(ie);
  G.current = Qe;
  var ye = ge(null);
  Du(function() {
    if (!(Q.current && ye.current === t)) {
      I(t);
      var we = Q.current;
      Q.current = !0;
      var Oe;
      !we && t && s && (Oe = Lr), we && t && a && (Oe = Dr), (we && !t && l || !we && f && !t && l) && (Oe = Vr);
      var Ge = Ee(Oe);
      Oe && (e || Ge[vt]) ? (j(Oe), ee()) : j(Dt), ye.current = t;
    }
  }, [t]), Ye(function() {
    // Cancel appear
    (J === Lr && !s || // Cancel enter
    J === Dr && !a || // Cancel leave
    J === Vr && !l) && j(Dt);
  }, [s, a, l]), Ye(function() {
    return function() {
      Q.current = !1, clearTimeout(K.current);
    };
  }, []);
  var Ve = g.useRef(!1);
  Ye(function() {
    _ && (Ve.current = !0), _ !== void 0 && J === Dt && ((Ve.current || _) && $?.(_), Ve.current = !0);
  }, [_, J]);
  var Fe = B;
  return V[vt] && ie === vn && (Fe = N({
    transition: "none"
  }, Fe)), [J, ie, Fe, _ ?? t];
}
function Lv(e) {
  var t = e;
  X(e) === "object" && (t = e.transitionSupport);
  function n(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var r = /* @__PURE__ */ g.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, c = o.removeOnLeave, l = c === void 0 ? !0 : c, u = o.forceRender, f = o.children, d = o.motionName, h = o.leavedClassName, v = o.eventProps, p = g.useContext(Mu), m = p.motion, C = n(o, m), y = ge(), x = ge();
    function S() {
      try {
        return y.current instanceof HTMLElement ? y.current : lm(x.current);
      } catch {
        return null;
      }
    }
    var b = kv(C, s, S, o), w = L(b, 4), E = w[0], $ = w[1], O = w[2], P = w[3], _ = g.useRef(P);
    P && (_.current = !0);
    var I = g.useCallback(function(W) {
      y.current = W, Il(a, W);
    }, [a]), F, M = N(N({}, v), {}, {
      visible: s
    });
    if (!f)
      F = null;
    else if (E === Dt)
      P ? F = f(N({}, M), I) : !l && _.current && h ? F = f(N(N({}, M), {}, {
        className: h
      }), I) : u || !l && !h ? F = f(N(N({}, M), {}, {
        style: {
          display: "none"
        }
      }), I) : F = null;
    else {
      var A;
      $ === vt ? A = "prepare" : Bu($) ? A = "active" : $ === vn && (A = "start");
      var j = dc(d, "".concat(E, "-").concat(A));
      F = f(N(N({}, M), {}, {
        className: z(dc(d, E), T(T({}, j, j && A), d, typeof d == "string")),
        style: O
      }), I);
    }
    if (/* @__PURE__ */ g.isValidElement(F) && Ri(F)) {
      var k = Al(F);
      k || (F = /* @__PURE__ */ g.cloneElement(F, {
        ref: I
      }));
    }
    return /* @__PURE__ */ g.createElement(Ov, {
      ref: x
    }, F);
  });
  return r.displayName = "CSSMotion", r;
}
const mr = Lv(Lu);
var Ja = "add", ei = "keep", ti = "remove", ua = "removed";
function Dv(e) {
  var t;
  return e && X(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, N(N({}, t), {}, {
    key: String(t.key)
  });
}
function ni() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Dv);
}
function Vv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, a = ni(e), i = ni(t);
  a.forEach(function(l) {
    for (var u = !1, f = r; f < o; f += 1) {
      var d = i[f];
      if (d.key === l.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(h) {
          return N(N({}, h), {}, {
            status: Ja
          });
        })), r = f), n.push(N(N({}, d), {}, {
          status: ei
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(N(N({}, l), {}, {
      status: ti
    }));
  }), r < o && (n = n.concat(i.slice(r).map(function(l) {
    return N(N({}, l), {}, {
      status: Ja
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
      var f = u.key, d = u.status;
      return f !== l || d !== ti;
    }), n.forEach(function(u) {
      u.key === l && (u.status = ei);
    });
  }), n;
}
var Bv = ["component", "children", "onVisibleChanged", "onAllRemoved"], Hv = ["status"], zv = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Wv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mr, n = /* @__PURE__ */ (function(r) {
    tn(a, r);
    var o = nn(a);
    function a() {
      var i;
      Le(this, a);
      for (var s = arguments.length, c = new Array(s), l = 0; l < s; l++)
        c[l] = arguments[l];
      return i = o.call.apply(o, [this].concat(c)), T(te(i), "state", {
        keyEntities: []
      }), T(te(i), "removeKey", function(u) {
        i.setState(function(f) {
          var d = f.keyEntities.map(function(h) {
            return h.key !== u ? h : N(N({}, h), {}, {
              status: ua
            });
          });
          return {
            keyEntities: d
          };
        }, function() {
          var f = i.state.keyEntities, d = f.filter(function(h) {
            var v = h.status;
            return v !== ua;
          }).length;
          d === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return De(a, [{
      key: "render",
      value: function() {
        var s = this, c = this.state.keyEntities, l = this.props, u = l.component, f = l.children, d = l.onVisibleChanged;
        l.onAllRemoved;
        var h = We(l, Bv), v = u || g.Fragment, p = {};
        return zv.forEach(function(m) {
          p[m] = h[m], delete h[m];
        }), delete h.keys, /* @__PURE__ */ g.createElement(v, h, c.map(function(m, C) {
          var y = m.status, x = We(m, Hv), S = y === Ja || y === ei;
          return /* @__PURE__ */ g.createElement(t, le({}, p, {
            key: x.key,
            visible: S,
            eventProps: x,
            onVisibleChanged: function(w) {
              d?.(w, {
                key: x.key
              }), w || s.removeKey(x.key);
            }
          }), function(b, w) {
            return f(N(N({}, b), {}, {
              index: C
            }), w);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, c) {
        var l = s.keys, u = c.keyEntities, f = ni(l), d = Vv(u, f);
        return {
          keyEntities: d.filter(function(h) {
            var v = u.find(function(p) {
              var m = p.key;
              return h.key === m;
            });
            return !(v && v.status === ua && h.status === ti);
          })
        };
      }
    }]), a;
  })(g.Component);
  return T(n, "defaultProps", {
    component: "div"
  }), n;
}
const Gv = Wv(Lu), ri = /* @__PURE__ */ g.createContext(!0);
process.env.NODE_ENV !== "production" && (ri.displayName = "MotionCacheContext");
function qv(e) {
  const t = g.useContext(ri), {
    children: n
  } = e, [, r] = _t(), {
    motion: o
  } = r, a = g.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ g.createElement(ri.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement($v, {
    motion: o
  }, n)) : n;
}
const Hu = /* @__PURE__ */ g.memo(({
  dropdownMatchSelectWidth: e
}) => (it("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (Hu.displayName = "PropWarning");
const Uv = process.env.NODE_ENV !== "production" ? Hu : () => null;
var Xv = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let oi = !1;
const Yi = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && Gt(!oi, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Yv = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let uo, zu, Wu, Gu;
function eo() {
  return uo || co;
}
function Kv() {
  return zu || Oo;
}
function Qv(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Zv = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (uo = t), n !== void 0 && (zu = n), "holderRender" in e && (Gu = o), r && (Qv(r) ? (process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Xg(eo(), r)) : Wu = r);
}, gr = () => ({
  getPrefixCls: (e, t) => t || (e ? `${eo()}-${e}` : eo()),
  getIconPrefixCls: Kv,
  getRootPrefixCls: () => uo || eo(),
  getTheme: () => Wu,
  holderRender: Gu
}), Jv = (e) => {
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
    splitter: f,
    virtual: d,
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
    image: B,
    layout: Z,
    list: J,
    mentions: Q,
    modal: K,
    progress: Y,
    result: G,
    slider: q,
    breadcrumb: oe,
    menu: Pe,
    pagination: Ce,
    input: Se,
    textArea: Ee,
    empty: V,
    badge: pe,
    radio: D,
    rate: ee,
    switch: ie,
    transfer: Qe,
    avatar: ye,
    message: Ve,
    tag: Fe,
    table: we,
    card: Oe,
    tabs: Ge,
    timeline: Je,
    timePicker: qe,
    upload: sn,
    notification: Er,
    tree: Ko,
    colorPicker: Vn,
    datePicker: wr,
    rangePicker: $r,
    flex: Or,
    wave: Pr,
    dropdown: Nr,
    warning: Tr,
    tour: Bn,
    tooltip: Te,
    popover: mt,
    popconfirm: Hn,
    floatButton: Dd,
    floatButtonGroup: Vd,
    variant: Bd,
    inputNumber: Hd,
    treeSelect: zd
  } = e, bs = g.useCallback((_e, He) => {
    const {
      prefixCls: xt
    } = e;
    if (He)
      return He;
    const St = xt || C.getPrefixCls("");
    return _e ? `${St}-${_e}` : St;
  }, [C.getPrefixCls, e.prefixCls]), Rr = y || C.iconPrefixCls || Oo, _r = n || C.csp;
  bv(Rr, _r);
  const Mr = Ev(x, C.theme, {
    prefixCls: bs("")
  });
  process.env.NODE_ENV !== "production" && (oi = oi || !!Mr);
  const Qo = {
    csp: _r,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    locale: s || m,
    direction: l,
    space: u,
    splitter: f,
    virtual: d,
    popupMatchSelectWidth: v ?? h,
    popupOverflow: p,
    getPrefixCls: bs,
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
    checkbox: F,
    descriptions: M,
    divider: A,
    drawer: j,
    skeleton: k,
    steps: W,
    image: B,
    input: Se,
    textArea: Ee,
    layout: Z,
    list: J,
    mentions: Q,
    modal: K,
    progress: Y,
    result: G,
    slider: q,
    breadcrumb: oe,
    menu: Pe,
    pagination: Ce,
    empty: V,
    badge: pe,
    radio: D,
    rate: ee,
    switch: ie,
    transfer: Qe,
    avatar: ye,
    message: Ve,
    tag: Fe,
    table: we,
    card: Oe,
    tabs: Ge,
    timeline: Je,
    timePicker: qe,
    upload: sn,
    notification: Er,
    tree: Ko,
    colorPicker: Vn,
    datePicker: wr,
    rangePicker: $r,
    flex: Or,
    wave: Pr,
    dropdown: Nr,
    warning: Tr,
    tour: Bn,
    tooltip: Te,
    popover: mt,
    popconfirm: Hn,
    floatButton: Dd,
    floatButtonGroup: Vd,
    variant: Bd,
    inputNumber: Hd,
    treeSelect: zd
  };
  process.env.NODE_ENV !== "production" && it("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const cn = Object.assign({}, C);
  Object.keys(Qo).forEach((_e) => {
    Qo[_e] !== void 0 && (cn[_e] = Qo[_e]);
  }), Yv.forEach((_e) => {
    const He = e[_e];
    He && (cn[_e] = He);
  }), typeof r < "u" && (cn.button = Object.assign({
    autoInsertSpace: r
  }, cn.button));
  const ln = yo(() => cn, cn, (_e, He) => {
    const xt = Object.keys(_e), St = Object.keys(He);
    return xt.length !== St.length || xt.some((Ir) => _e[Ir] !== He[Ir]);
  }), {
    layer: Cs
  } = g.useContext(Jt), Wd = g.useMemo(() => ({
    prefixCls: Rr,
    csp: _r,
    layer: Cs ? "antd" : void 0
  }), [Rr, _r, Cs]);
  let Be = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Uv, {
    dropdownMatchSelectWidth: h
  }), t);
  const xs = g.useMemo(() => {
    var _e, He, xt, St;
    return gn(((_e = Wt.Form) === null || _e === void 0 ? void 0 : _e.defaultValidateMessages) || {}, ((xt = (He = ln.locale) === null || He === void 0 ? void 0 : He.Form) === null || xt === void 0 ? void 0 : xt.defaultValidateMessages) || {}, ((St = ln.form) === null || St === void 0 ? void 0 : St.validateMessages) || {}, i?.validateMessages || {});
  }, [ln, i?.validateMessages]);
  Object.keys(xs).length > 0 && (Be = /* @__PURE__ */ g.createElement(Rg.Provider, {
    value: xs
  }, Be)), s && (Be = /* @__PURE__ */ g.createElement(hu, {
    locale: s,
    _ANT_MARK__: pu
  }, Be)), Be = /* @__PURE__ */ g.createElement(Li.Provider, {
    value: Wd
  }, Be), c && (Be = /* @__PURE__ */ g.createElement(Yg, {
    size: c
  }, Be)), Be = /* @__PURE__ */ g.createElement(qv, null, Be);
  const Gd = g.useMemo(() => {
    const _e = Mr || {}, {
      algorithm: He,
      token: xt,
      components: St,
      cssVar: Ir
    } = _e, qd = Xv(_e, ["algorithm", "token", "components", "cssVar"]), Ss = He && (!Array.isArray(He) || He.length > 0) ? ao(He) : Bi, Zo = {};
    Object.entries(St || {}).forEach(([Ud, Xd]) => {
      const It = Object.assign({}, Xd);
      "algorithm" in It && (It.algorithm === !0 ? It.theme = Ss : (Array.isArray(It.algorithm) || typeof It.algorithm == "function") && (It.theme = ao(It.algorithm)), delete It.algorithm), Zo[Ud] = It;
    });
    const Es = Object.assign(Object.assign({}, Pn), xt);
    return Object.assign(Object.assign({}, qd), {
      theme: Ss,
      token: Es,
      components: Zo,
      override: Object.assign({
        override: Es
      }, Zo),
      cssVar: Ir
    });
  }, [Mr]);
  return x && (Be = /* @__PURE__ */ g.createElement(Hi.Provider, {
    value: Gd
  }, Be)), ln.warning && (Be = /* @__PURE__ */ g.createElement(mu.Provider, {
    value: ln.warning
  }, Be)), S !== void 0 && (Be = /* @__PURE__ */ g.createElement(wu, {
    disabled: S
  }, Be)), /* @__PURE__ */ g.createElement(be.Provider, {
    value: ln
  }, Be);
}, tt = (e) => {
  const t = g.useContext(be), n = g.useContext(Di);
  return /* @__PURE__ */ g.createElement(Jv, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
tt.ConfigContext = be;
tt.SizeContext = Nn;
tt.config = Zv;
tt.useConfig = Kg;
Object.defineProperty(tt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Gt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Nn)
});
process.env.NODE_ENV !== "production" && (tt.displayName = "ConfigProvider");
var ep = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function qu(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function tp(e) {
  return qu(e) instanceof ShadowRoot;
}
function np(e) {
  return tp(e) ? qu(e) : null;
}
function rp(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function op(e, t) {
  $e(e, "[@ant-design/icons] ".concat(t));
}
function mc(e) {
  return X(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (X(e.icon) === "object" || typeof e.icon == "function");
}
function gc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[rp(n)] = r;
    }
    return t;
  }, {});
}
function ai(e, t, n) {
  return n ? /* @__PURE__ */ R.createElement(e.tag, N(N({
    key: t
  }, gc(e.attrs)), n), (e.children || []).map(function(r, o) {
    return ai(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ R.createElement(e.tag, N({
    key: t
  }, gc(e.attrs)), (e.children || []).map(function(r, o) {
    return ai(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function Uu(e) {
  return en(e)[0];
}
function Xu(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var ap = `
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
`, ip = function(t) {
  var n = ae(Li), r = n.csp, o = n.prefixCls, a = n.layer, i = ap;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Ye(function() {
    var s = t.current, c = np(s);
    jt(i, "@ant-design-icons", {
      prepend: !a,
      csp: r,
      attachTo: c
    });
  }, []);
}, sp = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], Yn = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function cp(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  Yn.primaryColor = t, Yn.secondaryColor = n || Uu(t), Yn.calculated = !!n;
}
function lp() {
  return N({}, Yn);
}
var Fn = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, c = We(t, sp), l = g.useRef(), u = Yn;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: s || Uu(i)
  }), ip(l), op(mc(n), "icon should be icon definiton, but got ".concat(n)), !mc(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = N(N({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), ai(f.icon, "svg-".concat(f.name), N(N({
    className: r,
    onClick: o,
    style: a,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, c), {}, {
    ref: l
  }));
};
Fn.displayName = "IconReact";
Fn.getTwoToneColors = lp;
Fn.setTwoToneColors = cp;
function Yu(e) {
  var t = Xu(e), n = L(t, 2), r = n[0], o = n[1];
  return Fn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function up() {
  var e = Fn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var fp = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Yu(so.primary);
var Ct = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, c = e.twoToneColor, l = We(e, fp), u = g.useContext(Li), f = u.prefixCls, d = f === void 0 ? "anticon" : f, h = u.rootClassName, v = z(h, d, T(T({}, "".concat(d, "-").concat(r.name), !!r.name), "".concat(d, "-spin"), !!o || r.name === "loading"), n), p = i;
  p === void 0 && s && (p = -1);
  var m = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, C = Xu(c), y = L(C, 2), x = y[0], S = y[1];
  return /* @__PURE__ */ g.createElement("span", le({
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
Ct.displayName = "AntdIcon";
Ct.getTwoToneColor = up;
Ct.setTwoToneColor = Yu;
var dp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: ep
  }));
}, Po = /* @__PURE__ */ g.forwardRef(dp);
process.env.NODE_ENV !== "production" && (Po.displayName = "CheckCircleFilled");
var mp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, gp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: mp
  }));
}, No = /* @__PURE__ */ g.forwardRef(gp);
process.env.NODE_ENV !== "production" && (No.displayName = "CloseCircleFilled");
var vp = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, pp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: vp
  }));
}, An = /* @__PURE__ */ g.forwardRef(pp);
process.env.NODE_ENV !== "production" && (An.displayName = "CloseOutlined");
var hp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, yp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: hp
  }));
}, To = /* @__PURE__ */ g.forwardRef(yp);
process.env.NODE_ENV !== "production" && (To.displayName = "ExclamationCircleFilled");
var bp = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, Cp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: bp
  }));
}, Ro = /* @__PURE__ */ g.forwardRef(Cp);
process.env.NODE_ENV !== "production" && (Ro.displayName = "InfoCircleFilled");
var xp = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, Sp = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, Ep = "".concat(xp, " ").concat(Sp).split(/[\s\n]+/), wp = "aria-", $p = "data-";
function vc(e, t) {
  return e.indexOf(t) === 0;
}
function _o(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n;
  t === !1 ? n = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? n = {
    aria: !0
  } : n = N({}, t);
  var r = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (n.aria && (o === "role" || vc(o, wp)) || // Data
    n.data && vc(o, $p) || // Attr
    n.attr && Ep.includes(o)) && (r[o] = e[o]);
  }), r;
}
function Op(e) {
  return e && /* @__PURE__ */ R.isValidElement(e) && e.type === R.Fragment;
}
const Pp = (e, t, n) => /* @__PURE__ */ R.isValidElement(e) ? /* @__PURE__ */ R.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function Ku(e, t) {
  return Pp(e, e, t);
}
const jn = (e) => {
  const [, , , , t] = _t();
  return t ? `${e}-css-var` : "";
};
var ii = {
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
}, Ki = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.className, a = e.duration, i = a === void 0 ? 4.5 : a, s = e.showProgress, c = e.pauseOnHover, l = c === void 0 ? !0 : c, u = e.eventKey, f = e.content, d = e.closable, h = e.closeIcon, v = h === void 0 ? "x" : h, p = e.props, m = e.onClick, C = e.onNoticeClose, y = e.times, x = e.hovering, S = g.useState(!1), b = L(S, 2), w = b[0], E = b[1], $ = g.useState(0), O = L($, 2), P = O[0], _ = O[1], I = g.useState(0), F = L(I, 2), M = F[0], A = F[1], j = x || w, k = i > 0 && s, W = function() {
    C(u);
  }, B = function(G) {
    (G.key === "Enter" || G.code === "Enter" || G.keyCode === ii.ENTER) && W();
  };
  g.useEffect(function() {
    if (!j && i > 0) {
      var Y = Date.now() - M, G = setTimeout(function() {
        W();
      }, i * 1e3 - M);
      return function() {
        l && clearTimeout(G), A(Date.now() - Y);
      };
    }
  }, [i, j, y]), g.useEffect(function() {
    if (!j && k && (l || M === 0)) {
      var Y = performance.now(), G, q = function oe() {
        cancelAnimationFrame(G), G = requestAnimationFrame(function(Pe) {
          var Ce = Pe + M - Y, Se = Math.min(Ce / (i * 1e3), 1);
          _(Se * 100), Se < 1 && oe();
        });
      };
      return q(), function() {
        l && cancelAnimationFrame(G);
      };
    }
  }, [i, M, j, k, y]);
  var Z = g.useMemo(function() {
    return X(d) === "object" && d !== null ? d : d ? {
      closeIcon: v
    } : {};
  }, [d, v]), J = _o(Z, !0), Q = 100 - (!P || P < 0 ? 0 : P > 100 ? 100 : P), K = "".concat(n, "-notice");
  return /* @__PURE__ */ g.createElement("div", le({}, p, {
    ref: t,
    className: z(K, o, T({}, "".concat(K, "-closable"), d)),
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
    className: "".concat(K, "-content")
  }, f), d && /* @__PURE__ */ g.createElement("a", le({
    tabIndex: 0,
    className: "".concat(K, "-close"),
    onKeyDown: B,
    "aria-label": "Close"
  }, J, {
    onClick: function(G) {
      G.preventDefault(), G.stopPropagation(), W();
    }
  }), Z.closeIcon), k && /* @__PURE__ */ g.createElement("progress", {
    className: "".concat(K, "-progress"),
    max: "100",
    value: Q
  }, Q + "%"));
}), Qu = /* @__PURE__ */ R.createContext({}), Zu = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ R.createElement(Qu.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, pc = 8, hc = 3, yc = 16, Np = function(t) {
  var n = {
    offset: pc,
    threshold: hc,
    gap: yc
  };
  if (t && X(t) === "object") {
    var r, o, a;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : pc, n.threshold = (o = t.threshold) !== null && o !== void 0 ? o : hc, n.gap = (a = t.gap) !== null && a !== void 0 ? a : yc;
  }
  return [!!t, n];
}, Tp = ["className", "style", "classNames", "styles"], Ju = function(t) {
  var n = t.configList, r = t.placement, o = t.prefixCls, a = t.className, i = t.style, s = t.motion, c = t.onAllNoticeRemoved, l = t.onNoticeClose, u = t.stack, f = ae(Qu), d = f.classNames, h = ge({}), v = Zt(null), p = L(v, 2), m = p[0], C = p[1], y = Zt([]), x = L(y, 2), S = x[0], b = x[1], w = n.map(function(j) {
    return {
      config: j,
      key: String(j.key)
    };
  }), E = Np(u), $ = L(E, 2), O = $[0], P = $[1], _ = P.offset, I = P.threshold, F = P.gap, M = O && (S.length > 0 || w.length <= I), A = typeof s == "function" ? s(r) : s;
  return Ye(function() {
    O && S.length > 1 && b(function(j) {
      return j.filter(function(k) {
        return w.some(function(W) {
          var B = W.key;
          return k === B;
        });
      });
    });
  }, [S, w, O]), Ye(function() {
    var j;
    if (O && h.current[(j = w[w.length - 1]) === null || j === void 0 ? void 0 : j.key]) {
      var k;
      C(h.current[(k = w[w.length - 1]) === null || k === void 0 ? void 0 : k.key]);
    }
  }, [w, O]), /* @__PURE__ */ R.createElement(Gv, le({
    key: r,
    className: z(o, "".concat(o, "-").concat(r), d?.list, a, T(T({}, "".concat(o, "-stack"), !!O), "".concat(o, "-stack-expanded"), M)),
    style: i,
    keys: w,
    motionAppear: !0
  }, A, {
    onAllRemoved: function() {
      c(r);
    }
  }), function(j, k) {
    var W = j.config, B = j.className, Z = j.style, J = j.index, Q = W, K = Q.key, Y = Q.times, G = String(K), q = W, oe = q.className, Pe = q.style, Ce = q.classNames, Se = q.styles, Ee = We(q, Tp), V = w.findIndex(function(Je) {
      return Je.key === G;
    }), pe = {};
    if (O) {
      var D = w.length - 1 - (V > -1 ? V : J - 1), ee = r === "top" || r === "bottom" ? "-50%" : "0";
      if (D > 0) {
        var ie, Qe, ye;
        pe.height = M ? (ie = h.current[G]) === null || ie === void 0 ? void 0 : ie.offsetHeight : m?.offsetHeight;
        for (var Ve = 0, Fe = 0; Fe < D; Fe++) {
          var we;
          Ve += ((we = h.current[w[w.length - 1 - Fe].key]) === null || we === void 0 ? void 0 : we.offsetHeight) + F;
        }
        var Oe = (M ? Ve : D * _) * (r.startsWith("top") ? 1 : -1), Ge = !M && m !== null && m !== void 0 && m.offsetWidth && (Qe = h.current[G]) !== null && Qe !== void 0 && Qe.offsetWidth ? (m?.offsetWidth - _ * 2 * (D < 3 ? D : 3)) / ((ye = h.current[G]) === null || ye === void 0 ? void 0 : ye.offsetWidth) : 1;
        pe.transform = "translate3d(".concat(ee, ", ").concat(Oe, "px, 0) scaleX(").concat(Ge, ")");
      } else
        pe.transform = "translate3d(".concat(ee, ", 0, 0)");
    }
    return /* @__PURE__ */ R.createElement("div", {
      ref: k,
      className: z("".concat(o, "-notice-wrapper"), B, Ce?.wrapper),
      style: N(N(N({}, Z), pe), Se?.wrapper),
      onMouseEnter: function() {
        return b(function(qe) {
          return qe.includes(G) ? qe : [].concat(H(qe), [G]);
        });
      },
      onMouseLeave: function() {
        return b(function(qe) {
          return qe.filter(function(sn) {
            return sn !== G;
          });
        });
      }
    }, /* @__PURE__ */ R.createElement(Ki, le({}, Ee, {
      ref: function(qe) {
        V > -1 ? h.current[G] = qe : delete h.current[G];
      },
      prefixCls: o,
      classNames: Ce,
      styles: Se,
      className: z(oe, d?.notice),
      style: Pe,
      times: Y,
      key: K,
      eventKey: K,
      onNoticeClose: l,
      hovering: O && S.length > 0
    })));
  });
};
process.env.NODE_ENV !== "production" && (Ju.displayName = "NoticeList");
var ef = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, o = e.container, a = e.motion, i = e.maxCount, s = e.className, c = e.style, l = e.onAllRemoved, u = e.stack, f = e.renderNotifications, d = g.useState([]), h = L(d, 2), v = h[0], p = h[1], m = function(O) {
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
          var _ = H(P), I = _.findIndex(function(A) {
            return A.key === O.key;
          }), F = N({}, O);
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
      var _ = N({}, P), I = _[O] || [];
      return I.length || delete _[O], _;
    });
  }, w = g.useRef(!1);
  if (g.useEffect(function() {
    Object.keys(x).length > 0 ? w.current = !0 : w.current && (l?.(), w.current = !1);
  }, [x]), !o)
    return null;
  var E = Object.keys(x);
  return /* @__PURE__ */ Nl(/* @__PURE__ */ g.createElement(g.Fragment, null, E.map(function($) {
    var O = x[$], P = /* @__PURE__ */ g.createElement(Ju, {
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
    return f ? f(P, {
      prefixCls: r,
      key: $
    }) : P;
  })), o);
});
process.env.NODE_ENV !== "production" && (ef.displayName = "Notifications");
var Rp = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], _p = function() {
  return document.body;
}, bc = 0;
function Mp() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(o) {
    o && Object.keys(o).forEach(function(a) {
      var i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function tf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? _p : t, r = e.motion, o = e.prefixCls, a = e.maxCount, i = e.className, s = e.style, c = e.onAllRemoved, l = e.stack, u = e.renderNotifications, f = We(e, Rp), d = g.useState(), h = L(d, 2), v = h[0], p = h[1], m = g.useRef(), C = /* @__PURE__ */ g.createElement(ef, {
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
  }), y = g.useState([]), x = L(y, 2), S = x[0], b = x[1], w = Nt(function($) {
    var O = Mp(f, $);
    (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(bc), bc += 1), b(function(P) {
      return [].concat(H(P), [{
        type: "open",
        config: O
      }]);
    });
  }), E = g.useMemo(function() {
    return {
      open: w,
      close: function(O) {
        b(function(P) {
          return [].concat(H(P), [{
            type: "close",
            key: O
          }]);
        });
      },
      destroy: function() {
        b(function(O) {
          return [].concat(H(O), [{
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
var Ip = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, Fp = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: Ip
  }));
}, Qi = /* @__PURE__ */ g.forwardRef(Fp);
process.env.NODE_ENV !== "production" && (Qi.displayName = "LoadingOutlined");
function Cc(...e) {
  const t = {};
  return e.forEach((n) => {
    n && Object.keys(n).forEach((r) => {
      n[r] !== void 0 && (t[r] = n[r]);
    });
  }), t;
}
function xc(e) {
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
function Sc(e) {
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
const Ap = {}, jp = (e, t, n = Ap) => {
  const r = Sc(e), o = Sc(t), [a] = wo("global", Wt.global), i = typeof r != "boolean" ? !!r?.disabled : !1, s = R.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ R.createElement(An, null)
  }, n), [n]), c = R.useMemo(() => r === !1 ? !1 : r ? Cc(s, o, r) : o === !1 ? !1 : o ? Cc(s, o) : s.closable ? s : !1, [r, o, s]);
  return R.useMemo(() => {
    var l, u;
    if (c === !1)
      return [!1, null, i, {}];
    const {
      closeIconRender: f
    } = s, {
      closeIcon: d
    } = c;
    let h = d;
    const v = _o(c, !0);
    return h != null && (f && (h = f(d)), h = /* @__PURE__ */ R.isValidElement(h) ? /* @__PURE__ */ R.cloneElement(h, Object.assign(Object.assign(Object.assign({}, h.props), {
      "aria-label": (u = (l = h.props) === null || l === void 0 ? void 0 : l["aria-label"]) !== null && u !== void 0 ? u : a.close
    }), v)) : /* @__PURE__ */ R.createElement("span", Object.assign({
      "aria-label": a.close
    }, v), h)), [!0, h, i, v];
  }, [i, a.close, c, s]);
}, kp = () => {
  const [e, t] = g.useState([]), n = g.useCallback((r) => (t((o) => [].concat(H(o), [r])), () => {
    t((o) => o.filter((a) => a !== r));
  }), []);
  return [e, n];
}, Zi = /* @__PURE__ */ R.createContext(void 0);
process.env.NODE_ENV !== "production" && (Zi.displayName = "zIndexContext");
const At = 100, Lp = 10, Mo = At * Lp, Dp = Mo + At, nf = {
  Modal: At,
  Drawer: At,
  Popover: At,
  Popconfirm: At,
  Tooltip: At,
  Tour: At,
  FloatButton: At
}, Vp = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function Bp(e) {
  return e in nf;
}
const Hp = (e, t) => {
  const [, n] = _t(), r = R.useContext(Zi), o = Bp(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = r ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    nf[e] : i += Vp[e], a = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = it(e), s = n.zIndexPopupBase + Dp, c = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || c <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
}, zp = (e) => {
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
    motionDurationSlow: f,
    marginXS: d,
    paddingXS: h,
    borderRadiusLG: v,
    zIndexPopup: p,
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
      padding: h,
      transform: "translateY(0)",
      opacity: 1
    }
  }), S = new Ne("MessageMoveOut", {
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
      marginInlineEnd: d,
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
      [t]: Object.assign(Object.assign({}, Gi(e)), {
        color: o,
        position: "fixed",
        top: d,
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
          animationDuration: f,
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
          animationDuration: f,
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
}, Wp = (e) => ({
  zIndexPopup: e.zIndexPopupBase + Mo + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), rf = rn("Message", (e) => {
  const t = bt(e, {
    height: 150
  });
  return zp(t);
}, Wp);
var Gp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const qp = {
  info: /* @__PURE__ */ g.createElement(Ro, null),
  success: /* @__PURE__ */ g.createElement(Po, null),
  error: /* @__PURE__ */ g.createElement(No, null),
  warning: /* @__PURE__ */ g.createElement(To, null),
  loading: /* @__PURE__ */ g.createElement(Qi, null)
}, of = ({
  prefixCls: e,
  type: t,
  icon: n,
  children: r
}) => /* @__PURE__ */ g.createElement("div", {
  className: z(`${e}-custom-content`, `${e}-${t}`)
}, n || qp[t], /* @__PURE__ */ g.createElement("span", null, r)), Up = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: a
  } = e, i = Gp(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: s
  } = g.useContext(be), c = t || s("message"), l = jn(c), [u, f, d] = rf(c, l);
  return u(/* @__PURE__ */ g.createElement(Ki, Object.assign({}, i, {
    prefixCls: c,
    className: z(n, f, `${c}-notice-pure-panel`, d, l),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ g.createElement(of, {
      prefixCls: c,
      type: r,
      icon: o
    }, a)
  })));
};
function Xp(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function Ji(e) {
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
var Yp = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Kp = 8, Qp = 3, Zp = ({
  children: e,
  prefixCls: t
}) => {
  const n = jn(t), [r, o, a] = rf(t, n);
  return r(/* @__PURE__ */ g.createElement(Zu, {
    classNames: {
      list: z(o, a, n)
    }
  }, e));
}, Jp = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ g.createElement(Zp, {
  prefixCls: t,
  key: n
}, e), eh = /* @__PURE__ */ g.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: a,
    duration: i = Qp,
    rtl: s,
    transitionName: c,
    onAllRemoved: l
  } = e, {
    getPrefixCls: u,
    getPopupContainer: f,
    message: d,
    direction: h
  } = g.useContext(be), v = r || u("message"), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? Kp
  }), m = () => z({
    [`${v}-rtl`]: s ?? h === "rtl"
  }), C = () => Xp(v, c), y = /* @__PURE__ */ g.createElement("span", {
    className: `${v}-close-x`
  }, /* @__PURE__ */ g.createElement(An, {
    className: `${v}-close-icon`
  })), [x, S] = tf({
    prefixCls: v,
    style: p,
    className: m,
    motion: C,
    closable: !1,
    closeIcon: y,
    duration: i,
    getContainer: () => o?.() || f?.() || document.body,
    maxCount: a,
    onAllRemoved: l,
    renderNotifications: Jp
  });
  return g.useImperativeHandle(t, () => Object.assign(Object.assign({}, x), {
    prefixCls: v,
    message: d
  })), S;
});
let Ec = 0;
function af(e) {
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
        prefixCls: f,
        message: d
      } = t.current, h = `${f}-notice`, {
        content: v,
        icon: p,
        type: m,
        key: C,
        className: y,
        style: x,
        onClose: S
      } = l, b = Yp(l, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let w = C;
      return w == null && (Ec += 1, w = `antd-message-${Ec}`), Ji((E) => (u(Object.assign(Object.assign({}, b), {
        key: w,
        content: /* @__PURE__ */ g.createElement(of, {
          prefixCls: f,
          type: m,
          icon: p
        }, v),
        placement: "top",
        className: z(m && `${h}-${m}`, y, d?.className),
        style: Object.assign(Object.assign({}, d?.style), x),
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
      const u = (f, d, h) => {
        let v;
        f && typeof f == "object" && "content" in f ? v = f : v = {
          content: f
        };
        let p, m;
        typeof d == "function" ? m = d : (p = d, m = h);
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
  }, []), /* @__PURE__ */ g.createElement(eh, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function th(e) {
  return af(e);
}
function sf(e, t) {
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
    function u(f, d) {
      Xe(i, f, function(h) {
        return this._invoke(f, d, h);
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
function es() {
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
          var j, k = P[t], W = I.p, B = k[2];
          M > 3 ? (j = B === A) && ($ = k[(E = k[4]) ? 5 : (E = 3, 3)], k[4] = k[5] = e) : k[0] <= W && ((j = M < 2 && W < k[1]) ? (E = 0, I.v = A, I.n = k[1]) : W < B && (j = M < 3 || k[0] > A || A > B) && (k[4] = M, k[5] = A, I.n = B, E = 0));
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
  }), t), f = l.prototype = s.prototype = Object.create(u);
  function d(h) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(h, l) : (h.__proto__ = l, Xe(h, o, "GeneratorFunction")), h.prototype = Object.create(f), h;
  }
  return c.prototype = l, Xe(f, "constructor", l), Xe(l, "constructor", c), c.displayName = "GeneratorFunction", Xe(l, o, "GeneratorFunction"), Xe(f), Xe(f, o, "Generator"), Xe(f, r, function() {
    return this;
  }), Xe(f, "toString", function() {
    return "[object Generator]";
  }), (es = function() {
    return {
      w: a,
      m: d
    };
  })();
}
function fo(e, t) {
  function n(o, a, i, s) {
    try {
      var c = e[o](a), l = c.value;
      return l instanceof sf ? t.resolve(l.v).then(function(u) {
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
  this.next || (Xe(fo.prototype), Xe(fo.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
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
function cf(e, t, n, r, o) {
  return new fo(es().w(e, t, n, r), o || Promise);
}
function nh(e, t, n, r, o) {
  var a = cf(e, t, n, r, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function rh(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function wc(e) {
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
function Ke() {
  var e = es(), t = e.m(Ke), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
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
        abrupt: function(f, d) {
          return c(l.a, o[f], d);
        },
        delegateYield: function(f, d, h) {
          return s.resultName = d, c(l.d, wc(f), h);
        },
        finish: function(f) {
          return c(l.f, f);
        }
      }, c = function(f, d, h) {
        l.p = s.prev, l.n = s.next;
        try {
          return f(d, h);
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
      wrap: function(c, l, u, f) {
        return e.w(a(c), l, u, f && f.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(c, l) {
        return new sf(c, l);
      },
      AsyncIterator: fo,
      async: function(c, l, u, f, d) {
        return (r(l) ? cf : nh)(a(c), l, u, f, d);
      },
      keys: rh,
      values: wc
    };
  })();
}
function $c(e, t, n, r, o, a, i) {
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
        $c(a, r, o, i, s, "next", c);
      }
      function s(c) {
        $c(a, r, o, i, s, "throw", c);
      }
      i(void 0);
    });
  };
}
var vr = N({}, Pl), oh = vr.version, fa = vr.render, ah = vr.unmountComponentAtNode, Io;
try {
  var ih = Number((oh || "").split(".")[0]);
  ih >= 18 && (Io = vr.createRoot);
} catch {
}
function Oc(e) {
  var t = vr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && X(t) === "object" && (t.usingClientEntryPoint = e);
}
var mo = "__rc_react_root__";
function sh(e, t) {
  Oc(!0);
  var n = t[mo] || Io(t);
  Oc(!1), n.render(e), t[mo] = n;
}
function ch(e, t) {
  fa?.(e, t);
}
function lh(e, t) {
  if (Io) {
    sh(e, t);
    return;
  }
  ch(e, t);
}
function uh(e) {
  return si.apply(this, arguments);
}
function si() {
  return si = on(/* @__PURE__ */ Ke().mark(function e(t) {
    return Ke().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[mo]) === null || o === void 0 || o.unmount(), delete t[mo];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), si.apply(this, arguments);
}
function fh(e) {
  ah(e);
}
function dh(e) {
  return ci.apply(this, arguments);
}
function ci() {
  return ci = on(/* @__PURE__ */ Ke().mark(function e(t) {
    return Ke().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (Io === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", uh(t));
        case 2:
          fh(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), ci.apply(this, arguments);
}
const mh = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = Number.parseInt(g.version.split(".")[0], 10), r = Object.keys(Pl);
    process.env.NODE_ENV !== "production" && Gt(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return lh(e, t), () => dh(t);
};
let gh = mh;
function Fo(e) {
  return gh;
}
const go = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function Ao(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const vh = (function(e) {
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
}), ph = (e) => {
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
}, hh = yv("Wave", ph), lf = `${co}-wave-target`;
function yh(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function bh(e) {
  var t;
  const {
    borderTopColor: n,
    borderColor: r,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [n, r, o].find(yh)) !== null && t !== void 0 ? t : null;
}
function da(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Ch = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, a = g.useRef(null), i = g.useRef(null);
  g.useEffect(() => {
    i.current = o();
  }, []);
  const [s, c] = g.useState(null), [l, u] = g.useState([]), [f, d] = g.useState(0), [h, v] = g.useState(0), [p, m] = g.useState(0), [C, y] = g.useState(0), [x, S] = g.useState(!1), b = {
    left: f,
    top: h,
    width: p,
    height: C,
    borderRadius: l.map(($) => `${$}px`).join(" ")
  };
  s && (b["--wave-color"] = s);
  function w() {
    const $ = getComputedStyle(n);
    c(bh(n));
    const O = $.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: _
    } = $;
    d(O ? n.offsetLeft : da(-Number.parseFloat(P))), v(O ? n.offsetTop : da(-Number.parseFloat(_))), m(n.offsetWidth), y(n.offsetHeight);
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
  const E = (r === "Checkbox" || r === "Radio") && n?.classList.contains(lf);
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
    ref: bo(a, O),
    className: z(t, $, {
      "wave-quick": E
    }),
    style: b
  }));
}, xh = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e?.insertBefore(o, e?.firstChild);
  const a = Fo();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ g.createElement(Ch, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, Sh = (e, t, n) => {
  const {
    wave: r
  } = g.useContext(be), [, o, a] = _t(), i = Nt((l) => {
    const u = e.current;
    if (r?.disabled || !u)
      return;
    const f = u.querySelector(`.${lf}`) || u, {
      showEffect: d
    } = r || {};
    (d || xh)(f, {
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
}, uf = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = ae(be), a = ge(null), i = o("wave"), [, s] = hh(i), c = Sh(a, z(i, s), r);
  if (R.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || n)
      return;
    const f = (d) => {
      !vh(d.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || c(d);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ R.isValidElement(t))
    return t ?? null;
  const l = Ri(t) ? bo(Al(t), a) : a;
  return Ku(t, {
    ref: l
  });
};
process.env.NODE_ENV !== "production" && (uf.displayName = "Wave");
const Eh = (e) => {
  const t = R.useContext(Nn);
  return R.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, ff = /* @__PURE__ */ g.createContext(null), wh = (e, t) => {
  const n = g.useContext(ff), r = g.useMemo(() => {
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
}, $h = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement(ff.Provider, {
    value: null
  }, t);
};
var Oh = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const df = /* @__PURE__ */ g.createContext(void 0), Ph = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = g.useContext(be), {
    prefixCls: r,
    size: o,
    className: a
  } = e, i = Oh(e, ["prefixCls", "size", "className"]), s = t("btn-group", r), [, , c] = _t(), l = g.useMemo(() => {
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
    const f = it("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = z(s, {
    [`${s}-${l}`]: l,
    [`${s}-rtl`]: n === "rtl"
  }, a, c);
  return /* @__PURE__ */ g.createElement(df.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, Pc = /^[\u4E00-\u9FA5]{2}$/, li = Pc.test.bind(Pc);
function mf(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
function Nc(e) {
  return typeof e == "string";
}
function Hr(e) {
  return e === "text" || e === "link";
}
function Nh(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Nc(e.type) && li(e.props.children) ? Ku(e, {
    children: e.props.children.split("").join(n)
  }) : Nc(e) ? li(e) ? /* @__PURE__ */ R.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ R.createElement("span", null, e) : Op(e) ? /* @__PURE__ */ R.createElement("span", null, e) : e;
}
function Th(e, t) {
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
  }), R.Children.map(r, (o) => Nh(o, t));
}
["default", "primary", "danger"].concat(H(zi));
const ui = /* @__PURE__ */ Mn((e, t) => {
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
}), Tc = /* @__PURE__ */ Mn((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: a
  } = e, i = z(`${n}-loading-icon`, r);
  return /* @__PURE__ */ R.createElement(ui, {
    prefixCls: n,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ R.createElement(Qi, {
    className: a
  }));
}), ma = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ga = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Rh = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: a,
    mount: i
  } = e, s = !!n;
  return r ? /* @__PURE__ */ R.createElement(Tc, {
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
    onAppearStart: ma,
    onAppearActive: ga,
    onEnterStart: ma,
    onEnterActive: ga,
    onLeaveStart: ga,
    onLeaveActive: ma
  }, ({
    className: c,
    style: l
  }, u) => {
    const f = Object.assign(Object.assign({}, a), l);
    return /* @__PURE__ */ R.createElement(Tc, {
      prefixCls: t,
      className: z(o, c),
      style: f,
      ref: u
    });
  });
}, Rc = (e, t) => ({
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
}), _h = (e) => {
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
      Rc(`${t}-primary`, o),
      Rc(`${t}-danger`, a)
    ]
  };
};
var Mh = ["b"], Ih = ["v"], va = function(t) {
  return Math.round(Number(t || 0));
}, Fh = function(t) {
  if (t instanceof xe)
    return t;
  if (t && X(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = We(n, Mh);
    return N(N({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, kt = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    return Le(this, n), t.call(this, Fh(r));
  }
  return De(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = va(o.s * 100), i = va(o.b * 100), s = va(o.h), c = o.a, l = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(c.toFixed(c === 0 ? 0 : 2), ")");
      return c === 1 ? l : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = We(o, Ih);
      return N(N({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), n;
})(xe), Ah = "rc-color-picker", bn = function(t) {
  return t instanceof kt ? t : new kt(t);
}, jh = bn("#1677ff"), gf = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), c = s.width, l = s.height, u = r.current.getBoundingClientRect(), f = u.width, d = u.height, h = f / 2, v = d / 2, p = (n.x + h) / c, m = 1 - (n.y + v) / l, C = a.toHsb(), y = p, x = (n.x + h) / c * 360;
  if (i)
    switch (i) {
      case "hue":
        return bn(N(N({}, C), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return bn(N(N({}, C), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return bn({
    h: C.h,
    s: p <= 0 ? 0 : p,
    b: m >= 1 ? 1 : m,
    a: C.a
  });
}, vf = function(t, n) {
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
}, kh = function(t) {
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
function Lh(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function pf(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, c = e.disabledDrag, l = Zt({
    x: 0,
    y: 0
  }), u = L(l, 2), f = u[0], d = u[1], h = ge(null), v = ge(null);
  Ye(function() {
    d(i());
  }, [s]), Ye(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", v.current), h.current = null, v.current = null;
    };
  }, []);
  var p = function(S) {
    var b = Lh(S), w = b.pageX, E = b.pageY, $ = n.current.getBoundingClientRect(), O = $.x, P = $.y, _ = $.width, I = $.height, F = t.current.getBoundingClientRect(), M = F.width, A = F.height, j = M / 2, k = A / 2, W = Math.max(0, Math.min(w - O, _)) - j, B = Math.max(0, Math.min(E - P, I)) - k, Z = {
      x: W,
      y: r === "x" ? f.y : B
    };
    if (M === 0 && A === 0 || M !== A)
      return !1;
    o?.(Z);
  }, m = function(S) {
    S.preventDefault(), p(S);
  }, C = function(S) {
    S.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", v.current), h.current = null, v.current = null, a?.();
  }, y = function(S) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", v.current), !c && (p(S), document.addEventListener("mousemove", m), document.addEventListener("mouseup", C), document.addEventListener("touchmove", m), document.addEventListener("touchend", C), h.current = m, v.current = C);
  };
  return [f, y];
}
var hf = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(a, "-handler"), T({}, "".concat(a, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, yf = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ R.createElement("div", {
    className: "".concat(o, "-palette"),
    style: N({
      position: "relative"
    }, r)
  }, n);
}, bf = /* @__PURE__ */ Mn(function(e, t) {
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
}), Dh = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = ge(), c = ge(), l = ge(n), u = Nt(function(p) {
    var m = gf({
      offset: p,
      targetRef: c,
      containerRef: s,
      color: n
    });
    l.current = m, r(m);
  }), f = pf({
    color: n,
    containerRef: s,
    targetRef: c,
    calculate: function() {
      return vf(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a?.(l.current);
    },
    disabledDrag: i
  }), d = L(f, 2), h = d[0], v = d[1];
  return /* @__PURE__ */ R.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: v,
    onTouchStart: v
  }, /* @__PURE__ */ R.createElement(yf, {
    prefixCls: o
  }, /* @__PURE__ */ R.createElement(bf, {
    x: h.x,
    y: h.y,
    ref: c
  }, /* @__PURE__ */ R.createElement(hf, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ R.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Vh = function(t, n) {
  var r = tv(t, {
    value: n
  }), o = L(r, 2), a = o[0], i = o[1], s = Ae(function() {
    return bn(a);
  }, [a]);
  return [s, i];
}, Bh = function(t) {
  var n = t.colors, r = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, c = Ae(function() {
    return n.map(function(l, u) {
      var f = bn(l);
      return i === "alpha" && u === n.length - 1 && (f = new kt(f.setA(1))), f.toRgbString();
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
}, Hh = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, c = t.type, l = ge(), u = ge(), f = ge(s), d = function(b) {
    return c === "hue" ? b.getHue() : b.a * 100;
  }, h = Nt(function(S) {
    var b = gf({
      offset: S,
      targetRef: u,
      containerRef: l,
      color: s,
      type: c
    });
    f.current = b, a(d(b));
  }), v = pf({
    color: s,
    targetRef: u,
    containerRef: l,
    calculate: function() {
      return vf(s, c);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      i(d(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), p = L(v, 2), m = p[0], C = p[1], y = R.useMemo(function() {
    if (c === "hue") {
      var S = s.toHsb();
      S.s = 1, S.b = 1, S.a = 1;
      var b = new kt(S);
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
  }, /* @__PURE__ */ R.createElement(yf, {
    prefixCls: n
  }, /* @__PURE__ */ R.createElement(bf, {
    x: m.x,
    y: m.y,
    ref: u
  }, /* @__PURE__ */ R.createElement(hf, {
    size: "small",
    color: y.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ R.createElement(Bh, {
    colors: x,
    type: c,
    prefixCls: n
  })));
};
function zh(e) {
  return g.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || Hh];
  }, [e]);
}
var Wh = [{
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
}], Gh = /* @__PURE__ */ Mn(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Ah : o, i = e.onChange, s = e.onChangeComplete, c = e.className, l = e.style, u = e.panelRender, f = e.disabledAlpha, d = f === void 0 ? !1 : f, h = e.disabled, v = h === void 0 ? !1 : h, p = e.components, m = zh(p), C = L(m, 1), y = C[0], x = Vh(r || jh, n), S = L(x, 2), b = S[0], w = S[1], E = Ae(function() {
    return b.setA(1).toRgbString();
  }, [b]), $ = function(B, Z) {
    n || w(B), i?.(B, Z);
  }, O = function(B) {
    return new kt(b.setHue(B));
  }, P = function(B) {
    return new kt(b.setA(B / 100));
  }, _ = function(B) {
    $(O(B), {
      type: "hue",
      value: B
    });
  }, I = function(B) {
    $(P(B), {
      type: "alpha",
      value: B
    });
  }, F = function(B) {
    s && s(O(B));
  }, M = function(B) {
    s && s(P(B));
  }, A = z("".concat(a, "-panel"), c, T({}, "".concat(a, "-panel-disabled"), v)), j = {
    prefixCls: a,
    disabled: v,
    color: b
  }, k = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(Dh, le({
    onChange: $
  }, j, {
    onChangeComplete: s
  })), /* @__PURE__ */ R.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(a, "-slider-group"), T({}, "".concat(a, "-slider-group-disabled-alpha"), d))
  }, /* @__PURE__ */ R.createElement(y, le({}, j, {
    type: "hue",
    colors: Wh,
    min: 0,
    max: 359,
    value: b.getHue(),
    onChange: _,
    onChangeComplete: F
  })), !d && /* @__PURE__ */ R.createElement(y, le({}, j, {
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
  }))), /* @__PURE__ */ R.createElement(kh, {
    color: b.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ R.createElement("div", {
    className: A,
    style: l,
    ref: t
  }, typeof u == "function" ? u(k) : k);
});
process.env.NODE_ENV !== "production" && (Gh.displayName = "ColorPicker");
const qh = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", Uh = (e, t) => e ? qh(e, t) : "";
let Xh = /* @__PURE__ */ (function() {
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
    })), this.metaColor = new kt(this.colors[0].color.metaColor)) : this.metaColor = new kt(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
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
      return Uh(this.toHexString(), this.metaColor.a < 1);
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
const Yh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Kh = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Cf = (e, t, n, r, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, Yh(r)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, Kh(r)), {
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
}, Qh = new Ne("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Zh = new Ne("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), Jh = (e, t = !1) => {
  const {
    antCls: n
  } = e, r = `${n}-fade`, o = t ? "&" : "";
  return [Cf(r, Qh, Zh, e.motionDurationMid, t), {
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
}, e0 = new Ne("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), t0 = new Ne("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), _c = new Ne("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Mc = new Ne("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), n0 = new Ne("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), r0 = new Ne("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), o0 = new Ne("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), a0 = new Ne("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), i0 = new Ne("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), s0 = new Ne("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), c0 = new Ne("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), l0 = new Ne("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), u0 = {
  zoom: {
    inKeyframes: e0,
    outKeyframes: t0
  },
  "zoom-big": {
    inKeyframes: _c,
    outKeyframes: Mc
  },
  "zoom-big-fast": {
    inKeyframes: _c,
    outKeyframes: Mc
  },
  "zoom-left": {
    inKeyframes: o0,
    outKeyframes: a0
  },
  "zoom-right": {
    inKeyframes: i0,
    outKeyframes: s0
  },
  "zoom-up": {
    inKeyframes: n0,
    outKeyframes: r0
  },
  "zoom-down": {
    inKeyframes: c0,
    outKeyframes: l0
  }
}, f0 = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = u0[t];
  return [Cf(r, o, a, e.motionDurationMid), {
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
}, d0 = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = e.toRgb(), i = new kt(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, xf = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return bt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, Sf = (e) => {
  var t, n, r, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, c = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, l = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Jr(s), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Jr(c), d = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Jr(l), h = d0(new Xh(e.colorBgSolid), "#fff") ? "#000" : "#fff", v = zi.reduce((p, m) => Object.assign(Object.assign({}, p), {
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
    contentLineHeightSM: f,
    contentLineHeightLG: d,
    paddingBlock: Math.max((e.controlHeight - s * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - c * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - l * d) / 2 - e.lineWidth, 0)
  });
}, m0 = (e) => {
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
      [`${t}-icon > svg`]: Ru(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": qi(e),
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
}, Ef = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), g0 = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), v0 = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), jo = (e, t, n, r, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, Ef(e, Object.assign({
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
}), p0 = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, v0(e))
}), h0 = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), ko = (e, t, n, r) => {
  const a = r && ["link", "text"].includes(r) ? h0 : p0;
  return Object.assign(Object.assign({}, a(e)), Ef(e.componentCls, t, n));
}, Lo = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, ko(e, r, o))
}), Do = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, ko(e, r, o))
}), Vo = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), Bo = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, ko(e, n, r))
}), Tt = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, ko(e, r, o, n))
}), y0 = (e) => {
  const {
    componentCls: t
  } = e;
  return zi.reduce((n, r) => {
    const o = e[`${r}6`], a = e[`${r}1`], i = e[`${r}5`], s = e[`${r}2`], c = e[`${r}3`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, Lo(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: l
      })), Do(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: l,
        borderColor: l,
        background: e.colorBgContainer
      })), Vo(e)), Bo(e, a, {
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
}, b0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, Lo(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Vo(e)), Bo(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), jo(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Tt(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), C0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Do(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Vo(e)), Bo(e, e.colorPrimaryBg, {
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
})), jo(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), x0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, Lo(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Do(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Vo(e)), Bo(e, e.colorErrorBg, {
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
})), jo(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), S0 = (e) => Object.assign(Object.assign({}, Tt(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), jo(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), E0 = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: b0(e),
    [`${t}-color-primary`]: C0(e),
    [`${t}-color-dangerous`]: x0(e),
    [`${t}-color-link`]: S0(e)
  }, y0(e));
}, w0 = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Do(e, e.defaultBorderColor, e.defaultBg, {
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
})), Lo(e, e.primaryColor, e.colorPrimary, {
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
})), ts = (e, t = "") => {
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
      [`${n}${n}-circle${t}`]: g0(e)
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
}, $0 = (e) => {
  const t = bt(e, {
    fontSize: e.contentFontSize
  });
  return ts(t, e.componentCls);
}, O0 = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return ts(t, `${e.componentCls}-sm`);
}, P0 = (e) => {
  const t = bt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return ts(t, `${e.componentCls}-lg`);
}, N0 = (e) => {
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
}, T0 = rn("Button", (e) => {
  const t = xf(e);
  return [
    // Shared
    m0(t),
    // Size
    $0(t),
    O0(t),
    P0(t),
    // Block
    N0(t),
    // Color
    E0(t),
    // https://github.com/ant-design/ant-design/issues/50969
    w0(t),
    // Button Group
    _h(t)
  ];
}, Sf, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function R0(e, t, n, r) {
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
function _0(e, t, n) {
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
function M0(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, R0(e, r, t, n)), _0(n, r, t))
  };
}
function I0(e, t, n) {
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
function F0(e, t) {
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
function A0(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, I0(e, t, e.componentCls)), F0(e.componentCls, t))
  };
}
const j0 = (e) => {
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
}, k0 = Ui(["Button", "compact"], (e) => {
  const t = xf(e);
  return [
    // Space Compact
    M0(t),
    A0(t),
    j0(t)
  ];
}, Sf);
var L0 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function D0(e) {
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
const V0 = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, B0 = /* @__PURE__ */ R.forwardRef((e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: s,
    type: c,
    danger: l = !1,
    shape: u,
    size: f,
    styles: d,
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
  } = e, P = L0(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), _ = c || "default", {
    button: I
  } = R.useContext(be), F = u || I?.shape || "default", [M, A] = Ae(() => {
    if (i && s)
      return [i, s];
    if (c || l) {
      const Te = V0[_] || [];
      return l ? ["danger", Te[1]] : Te;
    }
    return I?.color && I?.variant ? [I.color, I.variant] : ["default", "outlined"];
  }, [i, s, c, l, I?.color, I?.variant, _]), k = M === "danger" ? "dangerous" : M, {
    getPrefixCls: W,
    direction: B,
    autoInsertSpace: Z,
    className: J,
    style: Q,
    classNames: K,
    styles: Y
  } = Eu("button"), G = (n = $ ?? Z) !== null && n !== void 0 ? n : !0, q = W("btn", a), [oe, Pe, Ce] = T0(q), Se = ae(lo), Ee = h ?? Se, V = ae(df), pe = Ae(() => D0(o), [o]), [D, ee] = Zt(pe.loading), [ie, Qe] = Zt(!1), ye = ge(null), Ve = Ti(t, ye), Fe = Qd.count(m) === 1 && !C && !Hr(A), we = ge(!0);
  R.useEffect(() => (we.current = !1, () => {
    we.current = !0;
  }), []), wn(() => {
    let Te = null;
    pe.delay > 0 ? Te = setTimeout(() => {
      Te = null, ee(!0);
    }, pe.delay) : ee(pe.loading);
    function mt() {
      Te && (clearTimeout(Te), Te = null);
    }
    return mt;
  }, [pe.delay, pe.loading]), Ye(() => {
    if (!ye.current || !G)
      return;
    const Te = ye.current.textContent || "";
    Fe && li(Te) ? ie || Qe(!0) : ie && Qe(!1);
  }), Ye(() => {
    O && ye.current && ye.current.focus();
  }, []);
  const Oe = R.useCallback((Te) => {
    var mt;
    if (D || Ee) {
      Te.preventDefault();
      return;
    }
    (mt = e.onClick) === null || mt === void 0 || mt.call(e, ("href" in e, Te));
  }, [e.onClick, D, Ee]);
  if (process.env.NODE_ENV !== "production") {
    const Te = it("Button");
    process.env.NODE_ENV !== "production" && Te(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Te(!(x && Hr(A)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: Ge,
    compactItemClassnames: Je
  } = wh(q, B), qe = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, sn = Eh((Te) => {
    var mt, Hn;
    return (Hn = (mt = f ?? Ge) !== null && mt !== void 0 ? mt : V) !== null && Hn !== void 0 ? Hn : Te;
  }), Er = sn && (r = qe[sn]) !== null && r !== void 0 ? r : "", Ko = D ? "loading" : C, Vn = Ao(P, ["navigate"]), wr = z(q, Pe, Ce, {
    [`${q}-${F}`]: F !== "default" && F,
    // Compatible with versions earlier than 5.21.0
    [`${q}-${_}`]: _,
    [`${q}-dangerous`]: l,
    [`${q}-color-${k}`]: k,
    [`${q}-variant-${A}`]: A,
    [`${q}-${Er}`]: Er,
    [`${q}-icon-only`]: !m && m !== 0 && !!Ko,
    [`${q}-background-ghost`]: x && !Hr(A),
    [`${q}-loading`]: D,
    [`${q}-two-chinese-chars`]: ie && G && !D,
    [`${q}-block`]: S,
    [`${q}-rtl`]: B === "rtl",
    [`${q}-icon-end`]: y === "end"
  }, Je, v, p, J), $r = Object.assign(Object.assign({}, Q), E), Or = z(w?.icon, K.icon), Pr = Object.assign(Object.assign({}, d?.icon || {}), Y.icon || {}), Nr = C && !D ? /* @__PURE__ */ R.createElement(ui, {
    prefixCls: q,
    className: Or,
    style: Pr
  }, C) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ R.createElement(ui, {
    prefixCls: q,
    className: Or,
    style: Pr
  }, o.icon) : /* @__PURE__ */ R.createElement(Rh, {
    existIcon: !!C,
    prefixCls: q,
    loading: D,
    mount: we.current
  }), Tr = m || m === 0 ? Th(m, Fe && G) : null;
  if (Vn.href !== void 0)
    return oe(/* @__PURE__ */ R.createElement("a", Object.assign({}, Vn, {
      className: z(wr, {
        [`${q}-disabled`]: Ee
      }),
      href: Ee ? void 0 : Vn.href,
      style: $r,
      onClick: Oe,
      ref: Ve,
      tabIndex: Ee ? -1 : 0,
      "aria-disabled": Ee
    }), Nr, Tr));
  let Bn = /* @__PURE__ */ R.createElement("button", Object.assign({}, P, {
    type: b,
    className: wr,
    style: $r,
    onClick: Oe,
    disabled: Ee,
    ref: Ve
  }), Nr, Tr, Je && /* @__PURE__ */ R.createElement(k0, {
    prefixCls: q
  }));
  return Hr(A) || (Bn = /* @__PURE__ */ R.createElement(uf, {
    component: "Button",
    disabled: D
  }, Bn)), oe(Bn);
}), kn = B0;
kn.Group = Ph;
kn.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (kn.displayName = "Button");
const pa = (e) => typeof e?.then == "function", wf = (e) => {
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
  } = e, f = g.useRef(!1), d = g.useRef(null), [h, v] = Tn(!1), p = (...y) => {
    a?.apply(void 0, y);
  };
  g.useEffect(() => {
    let y = null;
    return i && (y = setTimeout(() => {
      var x;
      (x = d.current) === null || x === void 0 || x.focus({
        preventScroll: !0
      });
    })), () => {
      y && clearTimeout(y);
    };
  }, [i]);
  const m = (y) => {
    pa(y) && (v(!0), y.then((...x) => {
      v(!1, !0), p.apply(void 0, x), f.current = !1;
    }, (x) => {
      if (v(!1, !0), f.current = !1, !c?.())
        return Promise.reject(x);
    }));
  }, C = (y) => {
    if (f.current)
      return;
    if (f.current = !0, !u) {
      p();
      return;
    }
    let x;
    if (s) {
      if (x = u(y), l && !pa(x)) {
        f.current = !1, p(y);
        return;
      }
    } else if (u.length)
      x = u(a), f.current = !1;
    else if (x = u(), !pa(x)) {
      p();
      return;
    }
    m(x);
  };
  return /* @__PURE__ */ g.createElement(kn, Object.assign({}, mf(t), {
    onClick: C,
    loading: h,
    prefixCls: r
  }, o, {
    ref: d
  }), n);
}, pr = /* @__PURE__ */ R.createContext({}), {
  Provider: $f
} = pr, Ic = () => {
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
  return o ? /* @__PURE__ */ R.createElement(wf, {
    isSilent: r,
    actionFn: s,
    close: (...l) => {
      i?.apply(void 0, l), c?.(!1);
    },
    autoFocus: e === "cancel",
    buttonProps: t,
    prefixCls: `${a}-btn`
  }, n) : null;
}, Fc = () => {
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
  return /* @__PURE__ */ R.createElement(wf, {
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
var Of = /* @__PURE__ */ g.createContext(null), Ac = [];
function H0(e, t) {
  var n = g.useState(function() {
    if (!Ze())
      return null;
    var v = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && v.setAttribute("data-debug", t), v;
  }), r = L(n, 1), o = r[0], a = g.useRef(!1), i = g.useContext(Of), s = g.useState(Ac), c = L(s, 2), l = c[0], u = c[1], f = i || (a.current ? void 0 : function(v) {
    u(function(p) {
      var m = [v].concat(H(p));
      return m;
    });
  });
  function d() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function h() {
    var v;
    (v = o.parentElement) === null || v === void 0 || v.removeChild(o), a.current = !1;
  }
  return wn(function() {
    return e ? i ? i(d) : d() : h(), h;
  }, [e]), wn(function() {
    l.length && (l.forEach(function(v) {
      return v();
    }), u(Ac));
  }, [l]), [o, f];
}
function z0(e) {
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
      var u = c ? "width: ".concat(s.width, ";") : "", f = l ? "height: ".concat(s.height, ";") : "";
      jt(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(f, `
}`), t);
    } catch (v) {
      console.error(v), o = c, a = l;
    }
  }
  document.body.appendChild(n);
  var d = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, h = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), tr(t), {
    width: d,
    height: h
  };
}
function W0(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : z0(e);
}
function G0() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var q0 = "rc-util-locker-".concat(Date.now()), jc = 0;
function U0(e) {
  var t = !!e, n = g.useState(function() {
    return jc += 1, "".concat(q0, "_").concat(jc);
  }), r = L(n, 1), o = r[0];
  wn(function() {
    if (t) {
      var a = W0(document.body).width, i = G0();
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
var X0 = !1;
function Y0(e) {
  return X0;
}
var kc = function(t) {
  return t === !1 ? !1 : !Ze() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, Pf = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, c = e.children, l = g.useState(n), u = L(l, 2), f = u[0], d = u[1], h = f || n;
  process.env.NODE_ENV !== "production" && $e(Ze() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), g.useEffect(function() {
    (s || n) && d(n);
  }, [n, s]);
  var v = g.useState(function() {
    return kc(o);
  }), p = L(v, 2), m = p[0], C = p[1];
  g.useEffect(function() {
    var I = kc(o);
    C(I ?? null);
  });
  var y = H0(h && !m, a), x = L(y, 2), S = x[0], b = x[1], w = m ?? S;
  U0(r && n && Ze() && (w === S || w === document.body));
  var E = null;
  if (c && Ri(c) && t) {
    var $ = c;
    E = $.ref;
  }
  var O = Ti(E, t);
  if (!h || !Ze() || m === void 0)
    return null;
  var P = w === !1 || Y0(), _ = c;
  return t && (_ = /* @__PURE__ */ g.cloneElement(c, {
    ref: O
  })), /* @__PURE__ */ g.createElement(Of.Provider, {
    value: b
  }, P ? _ : /* @__PURE__ */ Nl(_, w));
});
process.env.NODE_ENV !== "production" && (Pf.displayName = "Portal");
var Nf = /* @__PURE__ */ g.createContext({});
function K0() {
  var e = N({}, g);
  return e.useId;
}
var Lc = 0, Dc = K0();
const Q0 = Dc ? (
  // Use React `useId`
  function(t) {
    var n = Dc();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = g.useState("ssr-id"), r = L(n, 2), o = r[0], a = r[1];
    return g.useEffect(function() {
      var i = Lc;
      Lc += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
function Vc(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function Bc(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function Z0(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, o = r.defaultView || r.parentWindow;
  return n.left += Bc(o), n.top += Bc(o, !0), n;
}
const J0 = /* @__PURE__ */ g.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var ey = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, ty = {
  outline: "none"
}, ns = /* @__PURE__ */ R.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, a = e.title, i = e.ariaId, s = e.footer, c = e.closable, l = e.closeIcon, u = e.onClose, f = e.children, d = e.bodyStyle, h = e.bodyProps, v = e.modalRender, p = e.onMouseDown, m = e.onMouseUp, C = e.holderRef, y = e.visible, x = e.forceRender, S = e.width, b = e.height, w = e.classNames, E = e.styles, $ = R.useContext(Nf), O = $.panel, P = Ti(C, O), _ = ge(), I = ge();
  R.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var Q;
        (Q = _.current) === null || Q === void 0 || Q.focus({
          preventScroll: !0
        });
      },
      changeActive: function(Q) {
        var K = document, Y = K.activeElement;
        Q && Y === I.current ? _.current.focus({
          preventScroll: !0
        }) : !Q && Y === _.current && I.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var F = {};
  S !== void 0 && (F.width = S), b !== void 0 && (F.height = b);
  var M = s ? /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(n, "-footer"), w?.footer),
    style: N({}, E?.footer)
  }, s) : null, A = a ? /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(n, "-header"), w?.header),
    style: N({}, E?.header)
  }, /* @__PURE__ */ R.createElement("div", {
    className: "".concat(n, "-title"),
    id: i
  }, a)) : null, j = Ae(function() {
    return X(c) === "object" && c !== null ? c : c ? {
      closeIcon: l ?? /* @__PURE__ */ R.createElement("span", {
        className: "".concat(n, "-close-x")
      })
    } : {};
  }, [c, l, n]), k = _o(j, !0), W = X(c) === "object" && c.disabled, B = c ? /* @__PURE__ */ R.createElement("button", le({
    type: "button",
    onClick: u,
    "aria-label": "Close"
  }, k, {
    className: "".concat(n, "-close"),
    disabled: W
  }), j.closeIcon) : null, Z = /* @__PURE__ */ R.createElement("div", {
    className: z("".concat(n, "-content"), w?.content),
    style: E?.content
  }, B, A, /* @__PURE__ */ R.createElement("div", le({
    className: z("".concat(n, "-body"), w?.body),
    style: N(N({}, d), E?.body)
  }, h), f), M);
  return /* @__PURE__ */ R.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": a ? i : null,
    "aria-modal": "true",
    ref: P,
    style: N(N({}, o), F),
    className: z(n, r),
    onMouseDown: p,
    onMouseUp: m
  }, /* @__PURE__ */ R.createElement("div", {
    ref: _,
    tabIndex: 0,
    style: ty
  }, /* @__PURE__ */ R.createElement(J0, {
    shouldUpdate: y || x
  }, v ? v(Z) : Z)), /* @__PURE__ */ R.createElement("div", {
    tabIndex: 0,
    ref: I,
    style: ey
  }));
});
process.env.NODE_ENV !== "production" && (ns.displayName = "Panel");
var Tf = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.title, o = e.style, a = e.className, i = e.visible, s = e.forceRender, c = e.destroyOnClose, l = e.motionName, u = e.ariaId, f = e.onVisibleChanged, d = e.mousePosition, h = ge(), v = g.useState(), p = L(v, 2), m = p[0], C = p[1], y = {};
  m && (y.transformOrigin = m);
  function x() {
    var S = Z0(h.current);
    C(d && (d.x || d.y) ? "".concat(d.x - S.left, "px ").concat(d.y - S.top, "px") : "");
  }
  return /* @__PURE__ */ g.createElement(mr, {
    visible: i,
    onVisibleChanged: f,
    onAppearPrepare: x,
    onEnterPrepare: x,
    forceRender: s,
    motionName: l,
    removeOnLeave: c,
    ref: h
  }, function(S, b) {
    var w = S.className, E = S.style;
    return /* @__PURE__ */ g.createElement(ns, le({}, e, {
      ref: t,
      title: r,
      ariaId: u,
      prefixCls: n,
      holderRef: b,
      style: N(N(N({}, E), o), y),
      className: z(a, w)
    }));
  });
});
Tf.displayName = "Content";
var ny = function(t) {
  var n = t.prefixCls, r = t.style, o = t.visible, a = t.maskProps, i = t.motionName, s = t.className;
  return /* @__PURE__ */ g.createElement(mr, {
    key: "mask",
    visible: o,
    motionName: i,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(c, l) {
    var u = c.className, f = c.style;
    return /* @__PURE__ */ g.createElement("div", le({
      ref: l,
      style: N(N({}, f), r),
      className: z("".concat(n, "-mask"), u, s)
    }, a));
  });
}, ry = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-dialog" : n, o = t.zIndex, a = t.visible, i = a === void 0 ? !1 : a, s = t.keyboard, c = s === void 0 ? !0 : s, l = t.focusTriggerAfterClose, u = l === void 0 ? !0 : l, f = t.wrapStyle, d = t.wrapClassName, h = t.wrapProps, v = t.onClose, p = t.afterOpenChange, m = t.afterClose, C = t.transitionName, y = t.animation, x = t.closable, S = x === void 0 ? !0 : x, b = t.mask, w = b === void 0 ? !0 : b, E = t.maskTransitionName, $ = t.maskAnimation, O = t.maskClosable, P = O === void 0 ? !0 : O, _ = t.maskStyle, I = t.maskProps, F = t.rootClassName, M = t.classNames, A = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(ee) {
    Qn(!(ee in t), "".concat(ee, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && Qn(!1, "wrapClassName is deprecated, please use classNames instead."));
  var j = ge(), k = ge(), W = ge(), B = g.useState(i), Z = L(B, 2), J = Z[0], Q = Z[1], K = Q0();
  function Y() {
    Ma(k.current, document.activeElement) || (j.current = document.activeElement);
  }
  function G() {
    if (!Ma(k.current, document.activeElement)) {
      var ee;
      (ee = W.current) === null || ee === void 0 || ee.focus();
    }
  }
  function q(ee) {
    if (ee)
      G();
    else {
      if (Q(!1), w && j.current && u) {
        try {
          j.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        j.current = null;
      }
      J && m?.();
    }
    p?.(ee);
  }
  function oe(ee) {
    v?.(ee);
  }
  var Pe = ge(!1), Ce = ge(), Se = function() {
    clearTimeout(Ce.current), Pe.current = !0;
  }, Ee = function() {
    Ce.current = setTimeout(function() {
      Pe.current = !1;
    });
  }, V = null;
  P && (V = function(ie) {
    Pe.current ? Pe.current = !1 : k.current === ie.target && oe(ie);
  });
  function pe(ee) {
    if (c && ee.keyCode === ii.ESC) {
      ee.stopPropagation(), oe(ee);
      return;
    }
    i && ee.keyCode === ii.TAB && W.current.changeActive(!ee.shiftKey);
  }
  Ye(function() {
    i && (Q(!0), Y());
  }, [i]), Ye(function() {
    return function() {
      clearTimeout(Ce.current);
    };
  }, []);
  var D = N(N(N({
    zIndex: o
  }, f), A?.wrapper), {}, {
    display: J ? null : "none"
  });
  return /* @__PURE__ */ g.createElement("div", le({
    className: z("".concat(r, "-root"), F)
  }, _o(t, {
    data: !0
  })), /* @__PURE__ */ g.createElement(ny, {
    prefixCls: r,
    visible: w && i,
    motionName: Vc(r, E, $),
    style: N(N({
      zIndex: o
    }, _), A?.mask),
    maskProps: I,
    className: M?.mask
  }), /* @__PURE__ */ g.createElement("div", le({
    tabIndex: -1,
    onKeyDown: pe,
    className: z("".concat(r, "-wrap"), d, M?.wrapper),
    ref: k,
    onClick: V,
    style: D
  }, h), /* @__PURE__ */ g.createElement(Tf, le({}, t, {
    onMouseDown: Se,
    onMouseUp: Ee,
    ref: W,
    closable: S,
    ariaId: K,
    prefixCls: r,
    visible: i && J,
    onClose: oe,
    onVisibleChanged: q,
    motionName: Vc(r, C, y)
  }))));
}, Rf = function(t) {
  var n = t.visible, r = t.getContainer, o = t.forceRender, a = t.destroyOnClose, i = a === void 0 ? !1 : a, s = t.afterClose, c = t.panelRef, l = g.useState(n), u = L(l, 2), f = u[0], d = u[1], h = g.useMemo(function() {
    return {
      panel: c
    };
  }, [c]);
  return g.useEffect(function() {
    n && d(!0);
  }, [n]), !o && i && !f ? null : /* @__PURE__ */ g.createElement(Nf.Provider, {
    value: h
  }, /* @__PURE__ */ g.createElement(Pf, {
    open: n || o || f,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || f
  }, /* @__PURE__ */ g.createElement(ry, le({}, t, {
    destroyOnClose: i,
    afterClose: function() {
      s?.(), d(!1);
    }
  }))));
};
Rf.displayName = "Dialog";
var Ut = "RC_FORM_INTERNAL_HOOKS", he = function() {
  $e(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Rn = /* @__PURE__ */ g.createContext({
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
}), vo = /* @__PURE__ */ g.createContext(null);
function fi(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function oy(e) {
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
var mi = di();
function ay(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function iy(e, t, n) {
  if (_i()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && Zn(o, n.prototype), o;
}
function gi(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return gi = function(r) {
    if (r === null || !ay(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return iy(r, arguments, Jn(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Zn(o, r);
  }, gi(e);
}
var sy = /%[sdj%]/g, _f = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (_f = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function vi(e) {
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
    var i = e.replace(sy, function(s) {
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
function cy(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function je(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || cy(t) && typeof e == "string" && !e);
}
function ly(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(s) {
    r.push.apply(r, H(s || [])), o++, o === a && n(r);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function Hc(e, t, n) {
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
function uy(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, H(e[n] || []));
  }), t;
}
var zc = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r, o) {
    var a;
    return Le(this, n), a = t.call(this, "Async Validation Error"), T(te(a), "errors", void 0), T(te(a), "fields", void 0), a.errors = r, a.fields = o, a;
  }
  return De(n);
})(/* @__PURE__ */ gi(Error));
function fy(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(d, h) {
      var v = function(C) {
        return r(C), C.length ? h(new zc(C, vi(C))) : d(o);
      }, p = uy(e);
      Hc(p, n, v);
    });
    return a.catch(function(d) {
      return d;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), c = s.length, l = 0, u = [], f = new Promise(function(d, h) {
    var v = function(m) {
      if (u.push.apply(u, m), l++, l === c)
        return r(u), u.length ? h(new zc(u, vi(u))) : d(o);
    };
    s.length || (r(u), d(o)), s.forEach(function(p) {
      var m = e[p];
      i.indexOf(p) !== -1 ? Hc(m, n, v) : ly(m, n, v);
    });
  });
  return f.catch(function(d) {
    return d;
  }), f;
}
function dy(e) {
  return !!(e && e.message !== void 0);
}
function my(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function Wc(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = my(t, e.fullFields) : r = t[n.field || e.fullField], dy(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function Gc(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        X(r) === "object" && X(e[n]) === "object" ? e[n] = N(N({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var fn = "enum", gy = function(t, n, r, o, a) {
  t[fn] = Array.isArray(t[fn]) ? t[fn] : [], t[fn].indexOf(n) === -1 && o.push(ot(a.messages[fn], t.fullField, t[fn].join(", ")));
}, vy = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(ot(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(ot(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, py = function(t, n, r, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", c = typeof t.max == "number", l = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, f = null, d = typeof n == "number", h = typeof n == "string", v = Array.isArray(n);
  if (d ? f = "number" : h ? f = "string" : v && (f = "array"), !f)
    return !1;
  v && (u = n.length), h && (u = n.replace(l, "_").length), i ? u !== t.len && o.push(ot(a.messages[f].len, t.fullField, t.len)) : s && !c && u < t.min ? o.push(ot(a.messages[f].min, t.fullField, t.min)) : c && !s && u > t.max ? o.push(ot(a.messages[f].max, t.fullField, t.max)) : s && c && (u < t.min || u > t.max) && o.push(ot(a.messages[f].range, t.fullField, t.min, t.max));
}, Mf = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || je(n, i || t.type)) && o.push(ot(a.messages.required, t.fullField));
}, zr;
const hy = (function() {
  if (zr)
    return zr;
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
  var f = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", h = u.v4().source, v = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", C = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', S = "(?:".concat(f, "|www\\.)").concat(d, "(?:localhost|").concat(h, "|").concat(v, "|").concat(p).concat(m).concat(C, ")").concat(y).concat(x);
  return zr = new RegExp("(?:^".concat(S, "$)"), "i"), zr;
});
var qc = {
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
    return typeof t == "string" && t.length <= 320 && !!t.match(qc.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(hy());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(qc.hex);
  }
}, yy = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Mf(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? Un[s](n) || o.push(ot(a.messages.types[s], t.fullField, t.type)) : s && X(n) !== t.type && o.push(ot(a.messages.types[s], t.fullField, t.type));
}, by = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(ot(a.messages.whitespace, t.fullField));
};
const re = {
  required: Mf,
  whitespace: by,
  type: yy,
  range: py,
  enum: gy,
  pattern: vy
};
var Cy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a);
  }
  r(i);
}, xy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n == null && !t.required)
      return r();
    re.required(t, n, o, i, a, "array"), n != null && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, Sy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re.type(t, n, o, i, a);
  }
  r(i);
}, Ey = function(t, n, r, o, a) {
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
}, wy = "enum", $y = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re[wy](t, n, o, i, a);
  }
  r(i);
}, Oy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, Py = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, Ny = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re.type(t, n, o, i, a);
  }
  r(i);
}, Ty = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (n === "" && (n = void 0), je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && (re.type(t, n, o, i, a), re.range(t, n, o, i, a));
  }
  r(i);
}, Ry = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), n !== void 0 && re.type(t, n, o, i, a);
  }
  r(i);
}, _y = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n, "string") && !t.required)
      return r();
    re.required(t, n, o, i, a), je(n, "string") || re.pattern(t, n, o, i, a);
  }
  r(i);
}, My = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n) && !t.required)
      return r();
    re.required(t, n, o, i, a), je(n) || re.type(t, n, o, i, a);
  }
  r(i);
}, Iy = function(t, n, r, o, a) {
  var i = [], s = Array.isArray(n) ? "array" : X(n);
  re.required(t, n, o, i, a, s), r(i);
}, Fy = function(t, n, r, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (je(n, "string") && !t.required)
      return r();
    re.required(t, n, o, i, a, "string"), je(n, "string") || (re.type(t, n, o, i, a), re.range(t, n, o, i, a), re.pattern(t, n, o, i, a), t.whitespace === !0 && re.whitespace(t, n, o, i, a));
  }
  r(i);
}, ha = function(t, n, r, o, a) {
  var i = t.type, s = [], c = t.required || !t.required && o.hasOwnProperty(t.field);
  if (c) {
    if (je(n, i) && !t.required)
      return r();
    re.required(t, n, o, s, a, i), je(n, i) || re.type(t, n, o, s, a);
  }
  r(s);
};
const Kn = {
  string: Fy,
  method: Ny,
  number: Ty,
  boolean: Sy,
  regexp: My,
  integer: Py,
  float: Oy,
  array: xy,
  object: Ry,
  enum: $y,
  pattern: _y,
  date: Ey,
  url: ha,
  hex: ha,
  email: ha,
  required: Iy,
  any: Cy
};
var hr = /* @__PURE__ */ (function() {
  function e(t) {
    Le(this, e), T(this, "rules", null), T(this, "_messages", mi), this.define(t);
  }
  return De(e, [{
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
      return n && (this._messages = Gc(di(), n)), this._messages;
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
            p = (S = p).concat.apply(S, H(x));
          } else
            p.push(x);
        }
        for (var y = 0; y < v.length; y++)
          C(v[y]);
        p.length ? (m = vi(p), c(p, m)) : c(null, i);
      }
      if (s.messages) {
        var u = this.messages();
        u === mi && (u = di()), Gc(u, s.messages), s.messages = u;
      } else
        s.messages = this.messages();
      var f = {}, d = s.keys || Object.keys(this.rules);
      d.forEach(function(v) {
        var p = r.rules[v], m = i[v];
        p.forEach(function(C) {
          var y = C;
          typeof y.transform == "function" && (i === n && (i = N({}, i)), m = i[v] = y.transform(m), m != null && (y.type = y.type || (Array.isArray(m) ? "array" : X(m)))), typeof y == "function" ? y = {
            validator: y
          } : y = N({}, y), y.validator = r.getValidationMethod(y), y.validator && (y.field = v, y.fullField = y.fullField || v, y.type = r.getType(y), f[v] = f[v] || [], f[v].push({
            rule: y,
            value: m,
            source: i,
            field: v
          }));
        });
      });
      var h = {};
      return fy(f, s, function(v, p) {
        var m = v.rule, C = (m.type === "object" || m.type === "array") && (X(m.fields) === "object" || X(m.defaultField) === "object");
        C = C && (m.required || !m.required && v.value), m.field = v.field;
        function y(E, $) {
          return N(N({}, $), {}, {
            fullField: "".concat(m.fullField, ".").concat(E),
            fullFields: m.fullFields ? [].concat(H(m.fullFields), [E]) : [E]
          });
        }
        function x() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(E) ? E : [E];
          !s.suppressWarning && $.length && e.warning("async-validator:", $), $.length && m.message !== void 0 && ($ = [].concat(m.message));
          var O = $.map(Wc(m, i));
          if (s.first && O.length)
            return h[m.field] = 1, p(O);
          if (!C)
            p(O);
          else {
            if (m.required && !v.value)
              return m.message !== void 0 ? O = [].concat(m.message).map(Wc(m, i)) : s.error && (O = [s.error(m, ot(s.messages.required, m.field))]), p(O);
            var P = {};
            m.defaultField && Object.keys(v.value).map(function(F) {
              P[F] = m.defaultField;
            }), P = N(N({}, P), v.rule.fields);
            var _ = {};
            Object.keys(P).forEach(function(F) {
              var M = P[F], A = Array.isArray(M) ? M : [M];
              _[F] = A.map(y.bind(null, F));
            });
            var I = new e(_);
            I.messages(s.messages), v.rule.options && (v.rule.options.messages = s.messages, v.rule.options.error = s.error), I.validate(v.value, v.rule.options || s, function(F) {
              var M = [];
              O && O.length && M.push.apply(M, H(O)), F && F.length && M.push.apply(M, H(F)), p(M.length ? M : null);
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
T(hr, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Kn[t] = n;
});
T(hr, "warning", _f);
T(hr, "messages", mi);
T(hr, "validators", Kn);
var rt = "'${name}' is not a valid ${type}", If = {
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
}, Uc = hr;
function Ay(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var Xc = "CODE_LOGIC_ERROR";
function pi(e, t, n, r, o) {
  return hi.apply(this, arguments);
}
function hi() {
  return hi = on(/* @__PURE__ */ Ke().mark(function e(t, n, r, o, a) {
    var i, s, c, l, u, f, d, h, v;
    return Ke().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = N({}, r), delete i.ruleIndex, Uc.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (C) {
              return console.error(C), Promise.reject(Xc);
            }
          }), c = null, i && i.type === "array" && i.defaultField && (c = i.defaultField, delete i.defaultField), l = new Uc(T({}, t, [i])), u = gn(If, o.validateMessages), l.messages(u), f = [], m.prev = 10, m.next = 13, Promise.resolve(l.validate(T({}, t, n), N({}, o)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (f = m.t0.errors.map(function(C, y) {
            var x = C.message, S = x === Xc ? u.default : x;
            return /* @__PURE__ */ g.isValidElement(S) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ g.cloneElement(S, {
                key: "error_".concat(y)
              })
            ) : S;
          }));
        case 18:
          if (!(!f.length && c && Array.isArray(n) && n.length > 0)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(n.map(function(C, y) {
            return pi("".concat(t, ".").concat(y), C, c, o, a);
          }));
        case 21:
          return d = m.sent, m.abrupt("return", d.reduce(function(C, y) {
            return [].concat(H(C), H(y));
          }, []));
        case 23:
          return h = N(N({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, a), v = f.map(function(C) {
            return typeof C == "string" ? Ay(C, h) : C;
          }), m.abrupt("return", v);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), hi.apply(this, arguments);
}
function jy(e, t, n, r, o, a) {
  var i = e.join("."), s = n.map(function(u, f) {
    var d = u.validator, h = N(N({}, u), {}, {
      ruleIndex: f
    });
    return d && (h.validator = function(v, p, m) {
      var C = !1, y = function() {
        for (var b = arguments.length, w = new Array(b), E = 0; E < b; E++)
          w[E] = arguments[E];
        Promise.resolve().then(function() {
          $e(!C, "Your validator function has already return a promise. `callback` will be ignored."), C || m.apply(void 0, w);
        });
      }, x = d(v, p, y);
      C = x && typeof x.then == "function" && typeof x.catch == "function", $e(C, "`callback` is deprecated. Please return a promise instead."), C && x.then(function() {
        m();
      }).catch(function(S) {
        m(S || " ");
      });
    }), h;
  }).sort(function(u, f) {
    var d = u.warningOnly, h = u.ruleIndex, v = f.warningOnly, p = f.ruleIndex;
    return !!d == !!v ? h - p : d ? 1 : -1;
  }), c;
  if (o === !0)
    c = new Promise(/* @__PURE__ */ (function() {
      var u = on(/* @__PURE__ */ Ke().mark(function f(d, h) {
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
              return p = s[v], y.next = 5, pi(i, t, p, r, a);
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
              d([]);
            case 13:
            case "end":
              return y.stop();
          }
        }, f);
      }));
      return function(f, d) {
        return u.apply(this, arguments);
      };
    })());
  else {
    var l = s.map(function(u) {
      return pi(i, t, u, r, a).then(function(f) {
        return {
          errors: f,
          rule: u
        };
      });
    });
    c = (o ? Ly(l) : ky(l)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return c.catch(function(u) {
    return u;
  }), c;
}
function ky(e) {
  return yi.apply(this, arguments);
}
function yi() {
  return yi = on(/* @__PURE__ */ Ke().mark(function e(t) {
    return Ke().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, H(o));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), yi.apply(this, arguments);
}
function Ly(e) {
  return bi.apply(this, arguments);
}
function bi() {
  return bi = on(/* @__PURE__ */ Ke().mark(function e(t) {
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
  })), bi.apply(this, arguments);
}
function Re(e) {
  return fi(e);
}
function Yc(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = Ot(e, r);
    n = gt(n, r, o);
  }), n;
}
function Cn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return Ff(t, r, n);
  });
}
function Ff(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function Dy(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || X(e) !== "object" || X(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return H(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function Vy(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && X(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function Kc(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], a = t - n;
  return a > 0 ? [].concat(H(e.slice(0, n)), [o], H(e.slice(n, t)), H(e.slice(t + 1, r))) : a < 0 ? [].concat(H(e.slice(0, t)), H(e.slice(t + 1, n + 1)), [o], H(e.slice(n + 1, r))) : e;
}
var By = ["name"], lt = [];
function ya(e, t, n, r, o, a) {
  return typeof e == "function" ? e(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== o;
}
var rs = /* @__PURE__ */ (function(e) {
  tn(n, e);
  var t = nn(n);
  function n(r) {
    var o;
    if (Le(this, n), o = t.call(this, r), T(te(o), "state", {
      resetCount: 0
    }), T(te(o), "cancelRegisterFunc", null), T(te(o), "mounted", !1), T(te(o), "touched", !1), T(te(o), "dirty", !1), T(te(o), "validatePromise", void 0), T(te(o), "prevValidating", void 0), T(te(o), "errors", lt), T(te(o), "warnings", lt), T(te(o), "cancelRegister", function() {
      var c = o.props, l = c.preserve, u = c.isListField, f = c.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, l, Re(f)), o.cancelRegisterFunc = null;
    }), T(te(o), "getNamePath", function() {
      var c = o.props, l = c.name, u = c.fieldContext, f = u.prefixName, d = f === void 0 ? [] : f;
      return l !== void 0 ? [].concat(H(d), H(l)) : [];
    }), T(te(o), "getRules", function() {
      var c = o.props, l = c.rules, u = l === void 0 ? [] : l, f = c.fieldContext;
      return u.map(function(d) {
        return typeof d == "function" ? d(f) : d;
      });
    }), T(te(o), "refresh", function() {
      o.mounted && o.setState(function(c) {
        var l = c.resetCount;
        return {
          resetCount: l + 1
        };
      });
    }), T(te(o), "metaCache", null), T(te(o), "triggerMetaEvent", function(c) {
      var l = o.props.onMetaChange;
      if (l) {
        var u = N(N({}, o.getMeta()), {}, {
          destroy: c
        });
        nr(o.metaCache, u) || l(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), T(te(o), "onStoreChange", function(c, l, u) {
      var f = o.props, d = f.shouldUpdate, h = f.dependencies, v = h === void 0 ? [] : h, p = f.onReset, m = u.store, C = o.getNamePath(), y = o.getValue(c), x = o.getValue(m), S = l && Cn(l, C);
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
          if (d && ya(d, c, m, y, x, u)) {
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
          if (d && !C.length && ya(d, c, m, y, x, u)) {
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
          if (S || (!v.length || C.length || d) && ya(d, c, m, y, x, u)) {
            o.reRender();
            return;
          }
          break;
      }
      d === !0 && o.reRender();
    }), T(te(o), "validateRules", function(c) {
      var l = o.getNamePath(), u = o.getValue(), f = c || {}, d = f.triggerName, h = f.validateOnly, v = h === void 0 ? !1 : h, p = Promise.resolve().then(/* @__PURE__ */ on(/* @__PURE__ */ Ke().mark(function m() {
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
              if (C = o.props, y = C.validateFirst, x = y === void 0 ? !1 : y, S = C.messageVariables, b = C.validateDebounce, w = o.getRules(), d && (w = w.filter(function(P) {
                return P;
              }).filter(function(P) {
                var _ = P.validateTrigger;
                if (!_)
                  return !0;
                var I = fi(_);
                return I.includes(d);
              })), !(b && d)) {
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
              return E = jy(l, u, w, c, x, S), E.catch(function(P) {
                return P;
              }).then(function() {
                var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : lt;
                if (o.validatePromise === p) {
                  var _;
                  o.validatePromise = null;
                  var I = [], F = [];
                  (_ = P.forEach) === null || _ === void 0 || _.call(P, function(M) {
                    var A = M.rule.warningOnly, j = M.errors, k = j === void 0 ? lt : j;
                    A ? F.push.apply(F, H(k)) : I.push.apply(I, H(k));
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
    }), T(te(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), T(te(o), "isFieldTouched", function() {
      return o.touched;
    }), T(te(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var c = o.props.fieldContext, l = c.getInternalHooks(Ut), u = l.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), T(te(o), "getErrors", function() {
      return o.errors;
    }), T(te(o), "getWarnings", function() {
      return o.warnings;
    }), T(te(o), "isListField", function() {
      return o.props.isListField;
    }), T(te(o), "isList", function() {
      return o.props.isList;
    }), T(te(o), "isPreserve", function() {
      return o.props.preserve;
    }), T(te(o), "getMeta", function() {
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
    }), T(te(o), "getOnlyChild", function(c) {
      if (typeof c == "function") {
        var l = o.getMeta();
        return N(N({}, o.getOnlyChild(c(o.getControlled(), l, o.props.fieldContext))), {}, {
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
    }), T(te(o), "getValue", function(c) {
      var l = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Ot(c || l(!0), u);
    }), T(te(o), "getControlled", function() {
      var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, l = o.props, u = l.name, f = l.trigger, d = l.validateTrigger, h = l.getValueFromEvent, v = l.normalize, p = l.valuePropName, m = l.getValueProps, C = l.fieldContext, y = d !== void 0 ? d : C.validateTrigger, x = o.getNamePath(), S = C.getInternalHooks, b = C.getFieldsValue, w = S(Ut), E = w.dispatch, $ = o.getValue(), O = m || function(M) {
        return T({}, p, M);
      }, P = c[f], _ = u !== void 0 ? O($) : {};
      process.env.NODE_ENV !== "production" && _ && Object.keys(_).forEach(function(M) {
        $e(typeof _[M] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(M, ")"));
      });
      var I = N(N({}, c), _);
      I[f] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var M, A = arguments.length, j = new Array(A), k = 0; k < A; k++)
          j[k] = arguments[k];
        h ? M = h.apply(void 0, j) : M = Vy.apply(void 0, [p].concat(j)), v && (M = v(M, $, b(!0))), M !== $ && E({
          type: "updateValue",
          namePath: x,
          value: M
        }), P && P.apply(void 0, j);
      };
      var F = fi(y || []);
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
T(rs, "contextType", Rn);
T(rs, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Af(e) {
  var t, n = e.name, r = We(e, By), o = g.useContext(Rn), a = g.useContext(vo), i = n !== void 0 ? Re(n) : void 0, s = (t = r.isListField) !== null && t !== void 0 ? t : !!a, c = "keep";
  return s || (c = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && s && i.length <= 1 && $e(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(rs, le({
    key: c,
    name: i,
    isListField: s
  }, r, {
    fieldContext: o
  }));
}
function Hy(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = g.useContext(Rn), c = g.useContext(vo), l = g.useRef({
    keys: [],
    id: 0
  }), u = l.current, f = g.useMemo(function() {
    var p = Re(s.prefixName) || [];
    return [].concat(H(p), H(Re(t)));
  }, [s.prefixName, t]), d = g.useMemo(function() {
    return N(N({}, s), {}, {
      prefixName: f
    });
  }, [s, f]), h = g.useMemo(function() {
    return {
      getKey: function(m) {
        var C = f.length, y = m[C];
        return [u.keys[y], m.slice(C + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return $e(!1, "Form.List only accepts function as children."), null;
  var v = function(m, C, y) {
    var x = y.source;
    return x === "internal" ? !1 : m !== C;
  };
  return /* @__PURE__ */ g.createElement(vo.Provider, {
    value: h
  }, /* @__PURE__ */ g.createElement(Rn.Provider, {
    value: d
  }, /* @__PURE__ */ g.createElement(Af, {
    name: [],
    shouldUpdate: v,
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!c
  }, function(p, m) {
    var C = p.value, y = C === void 0 ? [] : C, x = p.onChange, S = s.getFieldValue, b = function() {
      var O = S(f || []);
      return O || [];
    }, w = {
      add: function(O, P) {
        var _ = b();
        P >= 0 && P <= _.length ? (u.keys = [].concat(H(u.keys.slice(0, P)), [u.id], H(u.keys.slice(P))), x([].concat(H(_.slice(0, P)), [O], H(_.slice(P))))) : (process.env.NODE_ENV !== "production" && (P < 0 || P > _.length) && $e(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(H(u.keys), [u.id]), x([].concat(H(_), [O]))), u.id += 1;
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
          O < 0 || O >= _.length || P < 0 || P >= _.length || (u.keys = Kc(u.keys, O, P), x(Kc(_, O, P)));
        }
      }
    }, E = y || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && $e(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(E.map(function($, O) {
      var P = u.keys[O];
      return P === void 0 && (u.keys[O] = u.id, P = u.keys[O], u.id += 1), {
        name: O,
        key: P,
        isListField: !0
      };
    }), w, m);
  })));
}
function zy(e) {
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
var jf = "__@field_split__";
function ba(e) {
  return e.map(function(t) {
    return "".concat(X(t), ":").concat(t);
  }).join(jf);
}
var dn = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), T(this, "kvs", /* @__PURE__ */ new Map());
  }
  return De(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(ba(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(ba(n));
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
      this.kvs.delete(ba(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return H(this.kvs.entries()).map(function(r) {
        var o = L(r, 2), a = o[0], i = o[1], s = a.split(jf);
        return n({
          key: s.map(function(c) {
            var l = c.match(/^([^:]*):(.*)$/), u = L(l, 3), f = u[1], d = u[2];
            return f === "number" ? Number(d) : d;
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
})(), Wy = ["name"], Gy = /* @__PURE__ */ De(function e(t) {
  var n = this;
  Le(this, e), T(this, "formHooked", !1), T(this, "forceRootUpdate", void 0), T(this, "subscribable", !0), T(this, "store", {}), T(this, "fieldEntities", []), T(this, "initialValues", {}), T(this, "callbacks", {}), T(this, "validateMessages", null), T(this, "preserve", null), T(this, "lastValidatePromise", null), T(this, "getForm", function() {
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
  }), T(this, "getInternalHooks", function(r) {
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
  }), T(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), T(this, "prevWithoutPreserves", null), T(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var a, i = gn(r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var c = s.key;
        i = gt(i, c, Ot(r, c));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), T(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new dn();
      n.getFieldEntities(!0).forEach(function(a) {
        n.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), T(this, "getInitialValue", function(r) {
    var o = Ot(n.initialValues, r);
    return r.length ? gn(o) : o;
  }), T(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), T(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), T(this, "setPreserve", function(r) {
    n.preserve = r;
  }), T(this, "watchList", []), T(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), T(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), a = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(o, a, r);
      });
    }
  }), T(this, "timeoutId", null), T(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || $e(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), T(this, "updateStore", function(r) {
    n.store = r;
  }), T(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), T(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new dn();
    return n.getFieldEntities(r).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), T(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(a) {
      var i = Re(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: Re(a)
      };
    });
  }), T(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var a, i, s;
    if (r === !0 || Array.isArray(r) ? (a = r, i = o) : r && X(r) === "object" && (s = r.strict, i = r.filter), a === !0 && !i)
      return n.store;
    var c = n.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), l = [];
    return c.forEach(function(u) {
      var f, d, h = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (s) {
        var v, p;
        if ((v = (p = u).isList) !== null && v !== void 0 && v.call(p))
          return;
      } else if (!a && (f = (d = u).isListField) !== null && f !== void 0 && f.call(d))
        return;
      if (!i)
        l.push(h);
      else {
        var m = "getMeta" in u ? u.getMeta() : null;
        i(m) && l.push(h);
      }
    }), Yc(n.store, l.map(Re));
  }), T(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = Re(r);
    return Ot(n.store, o);
  }), T(this, "getFieldsError", function(r) {
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
  }), T(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = Re(r), a = n.getFieldsError([o])[0];
    return a.errors;
  }), T(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = Re(r), a = n.getFieldsError([o])[0];
    return a.warnings;
  }), T(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], c, l = !1;
    o.length === 0 ? c = null : o.length === 1 ? Array.isArray(i) ? (c = i.map(Re), l = !1) : (c = null, l = i) : (c = i.map(Re), l = s);
    var u = n.getFieldEntities(!0), f = function(m) {
      return m.isFieldTouched();
    };
    if (!c)
      return l ? u.every(function(p) {
        return f(p) || p.isList();
      }) : u.some(f);
    var d = new dn();
    c.forEach(function(p) {
      d.set(p, []);
    }), u.forEach(function(p) {
      var m = p.getNamePath();
      c.forEach(function(C) {
        C.every(function(y, x) {
          return m[x] === y;
        }) && d.update(C, function(y) {
          return [].concat(H(y), [p]);
        });
      });
    });
    var h = function(m) {
      return m.some(f);
    }, v = d.map(function(p) {
      var m = p.value;
      return m;
    });
    return l ? v.every(h) : v.some(h);
  }), T(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), T(this, "isFieldsValidating", function(r) {
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
  }), T(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), T(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new dn(), a = n.getFieldEntities(!0);
    a.forEach(function(c) {
      var l = c.props.initialValue, u = c.getNamePath();
      if (l !== void 0) {
        var f = o.get(u) || /* @__PURE__ */ new Set();
        f.add({
          entity: c,
          value: l
        }), o.set(u, f);
      }
    });
    var i = function(l) {
      l.forEach(function(u) {
        var f = u.props.initialValue;
        if (f !== void 0) {
          var d = u.getNamePath(), h = n.getInitialValue(d);
          if (h !== void 0)
            $e(!1, "Form already set 'initialValues' with path '".concat(d.join("."), "'. Field can not overwrite it."));
          else {
            var v = o.get(d);
            if (v && v.size > 1)
              $e(!1, "Multiple Field with path '".concat(d.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (v) {
              var p = n.getFieldValue(d), m = u.isListField();
              !m && (!r.skipExist || p === void 0) && n.updateStore(gt(n.store, d, H(v)[0].value));
            }
          }
        }
      });
    }, s;
    r.entities ? s = r.entities : r.namePathList ? (s = [], r.namePathList.forEach(function(c) {
      var l = o.get(c);
      if (l) {
        var u;
        (u = s).push.apply(u, H(H(l).map(function(f) {
          return f.entity;
        })));
      }
    })) : s = a, i(s);
  }), T(this, "resetFields", function(r) {
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
  }), T(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, a = [];
    r.forEach(function(i) {
      var s = i.name, c = We(i, Wy), l = Re(s);
      a.push(l), "value" in c && n.updateStore(gt(n.store, l, c.value)), n.notifyObservers(o, [l], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(a);
  }), T(this, "getFields", function() {
    var r = n.getFieldEntities(!0), o = r.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), c = N(N({}, s), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(c, "originRCField", {
        value: !0
      }), c;
    });
    return o;
  }), T(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var a = r.getNamePath(), i = Ot(n.store, a);
      i === void 0 && n.updateStore(gt(n.store, a, o));
    }
  }), T(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), T(this, "registerField", function(r) {
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
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(s) && (!i || c.length > 1)) {
        var l = i ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== l && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !Ff(f.getNamePath(), o)
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
  }), T(this, "dispatch", function(r) {
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
  }), T(this, "notifyObservers", function(r, o, a) {
    if (n.subscribable) {
      var i = N(N({}, a), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(s) {
        var c = s.onStoreChange;
        c(r, o, i);
      });
    } else
      n.forceRootUpdate();
  }), T(this, "triggerDependenciesUpdate", function(r, o) {
    var a = n.getDependencyChildrenFields(o);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(H(a))
    }), a;
  }), T(this, "updateValue", function(r, o) {
    var a = Re(r), i = n.store;
    n.updateStore(gt(n.store, a, o)), n.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var s = n.triggerDependenciesUpdate(i, a), c = n.callbacks.onValuesChange;
    if (c) {
      var l = Yc(n.store, [a]);
      c(l, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(H(s)));
  }), T(this, "setFieldsValue", function(r) {
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
  }), T(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), T(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new dn();
    n.getFieldEntities().forEach(function(c) {
      var l = c.props.dependencies;
      (l || []).forEach(function(u) {
        var f = Re(u);
        i.update(f, function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return d.add(c), d;
        });
      });
    });
    var s = function c(l) {
      var u = i.get(l) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        if (!o.has(f)) {
          o.add(f);
          var d = f.getNamePath();
          f.isFieldDirty() && d.length && (a.push(d), c(d));
        }
      });
    };
    return s(r), a;
  }), T(this, "triggerOnFieldsChange", function(r, o) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var i = n.getFields();
      if (o) {
        var s = new dn();
        o.forEach(function(l) {
          var u = l.name, f = l.errors;
          s.set(u, f);
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
  }), T(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var a, i;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, i = o) : i = r;
    var s = !!a, c = s ? a.map(Re) : [], l = [], u = String(Date.now()), f = /* @__PURE__ */ new Set(), d = i || {}, h = d.recursive, v = d.dirty;
    n.getFieldEntities(!0).forEach(function(y) {
      if (s || c.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(v && !y.isFieldDirty())) {
        var x = y.getNamePath();
        if (f.add(x.join(u)), !s || Cn(c, x, h)) {
          var S = y.validateRules(N({
            validateMessages: N(N({}, If), n.validateMessages)
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
              P ? $.push.apply($, H(_)) : E.push.apply(E, H(_));
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
    var p = zy(l);
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
      return f.has(y.join(u));
    });
    return n.triggerOnFieldsChange(C), m;
  }), T(this, "submit", function() {
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
function kf(e) {
  var t = g.useRef(), n = g.useState({}), r = L(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new Gy(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var Ci = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), qy = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, a = t.children, i = g.useContext(Ci), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(Ci.Provider, {
    value: N(N({}, i), {}, {
      validateMessages: N(N({}, i.validateMessages), n),
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
        l && (s.current = N(N({}, s.current), {}, T({}, l, u))), i.registerForm(l, u);
      },
      unregisterForm: function(l) {
        var u = N({}, s.current);
        delete u[l], s.current = u, i.unregisterForm(l);
      }
    })
  }, a);
}, Uy = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Xy = function(t, n) {
  var r = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, c = t.children, l = t.component, u = l === void 0 ? "form" : l, f = t.validateMessages, d = t.validateTrigger, h = d === void 0 ? "onChange" : d, v = t.onValuesChange, p = t.onFieldsChange, m = t.onFinish, C = t.onFinishFailed, y = t.clearOnDestroy, x = We(t, Uy), S = g.useRef(null), b = g.useContext(Ci), w = kf(i), E = L(w, 1), $ = E[0], O = $.getInternalHooks(Ut), P = O.useSubscribe, _ = O.setInitialValues, I = O.setCallbacks, F = O.setValidateMessages, M = O.setPreserve, A = O.destroyForm;
  g.useImperativeHandle(n, function() {
    return N(N({}, $), {}, {
      nativeElement: S.current
    });
  }), g.useEffect(function() {
    return b.registerForm(r, $), function() {
      b.unregisterForm(r);
    };
  }, [b, $, r]), F(N(N({}, b.validateMessages), f)), I({
    onValuesChange: v,
    onFieldsChange: function(Y) {
      if (b.triggerFormChange(r, Y), p) {
        for (var G = arguments.length, q = new Array(G > 1 ? G - 1 : 0), oe = 1; oe < G; oe++)
          q[oe - 1] = arguments[oe];
        p.apply(void 0, [Y].concat(q));
      }
    },
    onFinish: function(Y) {
      b.triggerFormFinish(r, Y), m && m(Y);
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
    var B = $.getFieldsValue(!0);
    k = c(B, $);
  } else
    k = c;
  P(!W);
  var Z = g.useRef();
  g.useEffect(function() {
    Dy(Z.current || [], a || []) || $.setFields(a || []), Z.current = a;
  }, [a, $]);
  var J = g.useMemo(function() {
    return N(N({}, $), {}, {
      validateTrigger: h
    });
  }, [$, h]), Q = /* @__PURE__ */ g.createElement(vo.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Rn.Provider, {
    value: J
  }, k));
  return u === !1 ? Q : /* @__PURE__ */ g.createElement(u, le({}, x, {
    ref: S,
    onSubmit: function(Y) {
      Y.preventDefault(), Y.stopPropagation(), $.submit();
    },
    onReset: function(Y) {
      var G;
      Y.preventDefault(), $.resetFields(), (G = x.onReset) === null || G === void 0 || G.call(x, Y);
    }
  }), Q);
};
function Qc(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Yy = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = ge(t);
  $e(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function Ky() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = o === void 0 ? {} : o, i = oy(a) ? {
    form: a
  } : a, s = i.form, c = Zt(), l = L(c, 2), u = l[0], f = l[1], d = Ae(function() {
    return Qc(u);
  }, [u]), h = ge(d);
  h.current = d;
  var v = ae(Rn), p = s || v, m = p && p._init;
  process.env.NODE_ENV !== "production" && $e(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var C = Re(r), y = ge(C);
  return y.current = C, Yy(C), Ye(
    function() {
      if (m) {
        var x = p.getFieldsValue, S = p.getInternalHooks, b = S(Ut), w = b.registerWatch, E = function(_, I) {
          var F = i.preserve ? I : _;
          return typeof r == "function" ? r(F) : Ot(F, y.current);
        }, $ = w(function(P, _) {
          var I = E(P, _), F = Qc(I);
          h.current !== F && (h.current = F, f(I));
        }), O = E(x(), x(!0));
        return u !== O && f(O), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), u;
}
var Qy = /* @__PURE__ */ g.forwardRef(Xy), yr = Qy;
yr.FormProvider = qy;
yr.Field = Af;
yr.List = Hy;
yr.useForm = kf;
yr.useWatch = Ky;
const xi = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (xi.displayName = "FormItemInputContext");
const Zy = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = g.useContext(xi), o = g.useMemo(() => {
    const a = Object.assign({}, r);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, r]);
  return /* @__PURE__ */ g.createElement(xi.Provider, {
    value: o
  }, e);
}, Jy = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ R.createElement(Zy, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ R.createElement($h, null, o)), o;
}, eb = () => Ze() && window.document.documentElement, Ho = (e) => {
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
}, tb = new Ne("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), zo = (e) => ({
  height: e,
  lineHeight: ne(e)
}), xn = (e) => Object.assign({
  width: e
}, zo(e)), nb = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: tb,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), Ca = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, zo(e)), rb = (e) => {
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
}, ob = (e) => {
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
    }, Ca(t, s)),
    [`${r}-lg`]: Object.assign({}, Ca(o, s)),
    [`${r}-sm`]: Object.assign({}, Ca(a, s))
  };
}, Zc = (e) => Object.assign({
  width: e
}, zo(e)), ab = (e) => {
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
    }, Zc(a(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, Zc(n)), {
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
}, xa = (e, t, n) => {
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
}, Sa = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, zo(e)), ib = (e) => {
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
    }, Sa(r, s))
  }, xa(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, Sa(o, s))
  }), xa(e, o, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, Sa(a, s))
  }), xa(e, a, `${n}-sm`));
}, sb = (e) => {
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
    gradientFromColor: f,
    padding: d,
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
        paddingInlineEnd: d,
        verticalAlign: "top",
        // Avatar
        [n]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: f
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
          background: f,
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
            background: f,
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
    }, ib(e)), rb(e)), ob(e)), ab(e)),
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
      `]: Object.assign({}, nb(e))
    }
  };
}, cb = (e) => {
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
  return sb(r);
}, cb, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), lb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    shape: a = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, f] = Ln(c), d = Ao(e, ["prefixCls", "className"]), h = z(c, `${c}-element`, {
    [`${c}-active`]: o
  }, n, r, u, f);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: h
  }, /* @__PURE__ */ g.createElement(Ho, Object.assign({
    prefixCls: `${c}-avatar`,
    shape: a,
    size: i
  }, d))));
}, ub = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, f] = Ln(c), d = Ao(e, ["prefixCls"]), h = z(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, f);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: h
  }, /* @__PURE__ */ g.createElement(Ho, Object.assign({
    prefixCls: `${c}-button`,
    size: i
  }, d))));
}, fb = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", db = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a
  } = e, {
    getPrefixCls: i
  } = g.useContext(be), s = i("skeleton", t), [c, l, u] = Ln(s), f = z(s, `${s}-element`, {
    [`${s}-active`]: a
  }, n, r, l, u);
  return c(/* @__PURE__ */ g.createElement("div", {
    className: f
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(`${s}-image`, n),
    style: o
  }, /* @__PURE__ */ g.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ g.createElement("title", null, "Image placeholder"), /* @__PURE__ */ g.createElement("path", {
    d: fb,
    className: `${s}-image-path`
  })))));
}, mb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, f] = Ln(c), d = Ao(e, ["prefixCls"]), h = z(c, `${c}-element`, {
    [`${c}-active`]: o,
    [`${c}-block`]: a
  }, n, r, u, f);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: h
  }, /* @__PURE__ */ g.createElement(Ho, Object.assign({
    prefixCls: `${c}-input`,
    size: i
  }, d))));
}, gb = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a,
    children: i
  } = e, {
    getPrefixCls: s
  } = g.useContext(be), c = s("skeleton", t), [l, u, f] = Ln(c), d = z(c, `${c}-element`, {
    [`${c}-active`]: a
  }, u, n, r, f);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: d
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(`${c}-image`, n),
    style: o
  }, i)));
}, vb = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, pb = (e) => {
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
        width: vb(s, e)
      }
    })
  ));
  return /* @__PURE__ */ g.createElement("ul", {
    className: z(t, n),
    style: r
  }, a);
}, hb = ({
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
function Ea(e) {
  return e && typeof e == "object" ? e : {};
}
function yb(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function bb(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function Cb(e, t) {
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
    round: f
  } = e, {
    getPrefixCls: d,
    direction: h,
    className: v,
    style: p
  } = Eu("skeleton"), m = d("skeleton", t), [C, y, x] = Ln(m);
  if (n || !("loading" in e)) {
    const S = !!s, b = !!c, w = !!l;
    let E;
    if (S) {
      const P = Object.assign(Object.assign({
        prefixCls: `${m}-avatar`
      }, yb(b, w)), Ea(s));
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
        }, bb(S, w)), Ea(c));
        P = /* @__PURE__ */ g.createElement(hb, Object.assign({}, I));
      }
      let _;
      if (w) {
        const I = Object.assign(Object.assign({
          prefixCls: `${m}-paragraph`
        }, Cb(S, b)), Ea(l));
        _ = /* @__PURE__ */ g.createElement(pb, Object.assign({}, I));
      }
      $ = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-content`
      }, P, _);
    }
    const O = z(m, {
      [`${m}-with-avatar`]: S,
      [`${m}-active`]: u,
      [`${m}-rtl`]: h === "rtl",
      [`${m}-round`]: f
    }, v, r, o, y, x);
    return C(/* @__PURE__ */ g.createElement("div", {
      className: O,
      style: Object.assign(Object.assign({}, p), a)
    }, E, $));
  }
  return i ?? null;
};
an.Button = ub;
an.Avatar = lb;
an.Input = mb;
an.Image = db;
an.Node = gb;
process.env.NODE_ENV !== "production" && (an.displayName = "Skeleton");
function Jc() {
}
const xb = /* @__PURE__ */ g.createContext({
  add: Jc,
  remove: Jc
});
function Sb(e) {
  const t = g.useContext(xb), n = g.useRef(null);
  return Nt((o) => {
    if (o) {
      const a = e ? o.querySelector(e) : o;
      a && (t.add(a), n.current = a);
    } else
      t.remove(n.current);
  });
}
const el = () => {
  const {
    cancelButtonProps: e,
    cancelTextLocale: t,
    onCancel: n
  } = ae(pr);
  return /* @__PURE__ */ R.createElement(kn, Object.assign({
    onClick: n
  }, e), t);
}, tl = () => {
  const {
    confirmLoading: e,
    okButtonProps: t,
    okType: n,
    okTextLocale: r,
    onOk: o
  } = ae(pr);
  return /* @__PURE__ */ R.createElement(kn, Object.assign({}, mf(n), {
    loading: e,
    onClick: o
  }, t), r);
};
function Lf(e, t) {
  return /* @__PURE__ */ R.createElement("span", {
    className: `${e}-close-x`
  }, t || /* @__PURE__ */ R.createElement(An, {
    className: `${e}-close-icon`
  }));
}
const Df = (e) => {
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
  } = e, [u] = wo("Modal", vu()), f = t || u?.okText, d = r || u?.cancelText, h = R.useMemo(() => ({
    confirmLoading: o,
    okButtonProps: s,
    cancelButtonProps: c,
    okTextLocale: f,
    cancelTextLocale: d,
    okType: n,
    onOk: a,
    onCancel: i
  }), [o, s, c, f, d, n, a, i]);
  let v;
  return typeof l == "function" || typeof l > "u" ? (v = /* @__PURE__ */ R.createElement(R.Fragment, null, /* @__PURE__ */ R.createElement(el, null), /* @__PURE__ */ R.createElement(tl, null)), typeof l == "function" && (v = l(v, {
    OkBtn: tl,
    CancelBtn: el
  })), v = /* @__PURE__ */ R.createElement($f, {
    value: h
  }, v)) : v = l, /* @__PURE__ */ R.createElement(wu, {
    disabled: !1
  }, v);
}, Eb = (e) => {
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
}, wb = (e) => {
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
}, $b = (e, t) => {
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
}, Si = (e, t) => $b(e, t), Ob = (e, t, n) => ({
  [`@media (min-width: ${ne(t)})`]: Object.assign({}, Si(e, n))
}), Pb = () => ({}), Nb = () => ({});
rn("Grid", Eb, Pb);
const Vf = (e) => ({
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
  }), n = Vf(t);
  return delete n.xs, [wb(t), Si(t, ""), Si(t, "-xs"), Object.keys(n).map((r) => Ob(t, n[r], `-${r}`)).reduce((r, o) => Object.assign(Object.assign({}, r), o), {})];
}, Nb);
function nl(e) {
  return {
    position: e,
    inset: 0
  };
}
const Tb = (e) => {
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
      [`${t}-mask`]: Object.assign(Object.assign({}, nl("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, nl("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: Jh(e)
  }];
}, Rb = (e) => {
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
      [t]: Object.assign(Object.assign({}, Gi(e)), {
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
        }, qi(e)),
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
}, _b = (e) => {
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
}, Mb = (e) => {
  const {
    componentCls: t
  } = e, n = Vf(e), r = Object.assign({}, n);
  delete r.xs;
  const o = `--${t.replace(".", "")}-`, a = Object.keys(r).map((i) => ({
    [`@media (min-width: ${ne(r[i])})`]: {
      width: `var(${o}${i}-width)`
    }
  }));
  return {
    [`${t}-root`]: {
      [t]: [].concat(H(Object.keys(n).map((i, s) => {
        const c = Object.keys(n)[s - 1];
        return c ? {
          [`${o}${i}-width`]: `var(${o}${c}-width)`
        } : null;
      })), [{
        width: `var(${o}xs-width)`
      }], H(a))
    }
  };
}, Bf = (e) => {
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
}, Hf = (e) => ({
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
}), zf = rn("Modal", (e) => {
  const t = Bf(e);
  return [Rb(t), _b(t), Tb(t), f0(t, "zoom"), Mb(t)];
}, Hf, {
  unitless: {
    titleLineHeight: !0
  }
});
var Ib = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let Ei;
const Fb = (e) => {
  Ei = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    Ei = null;
  }, 100);
};
eb() && document.documentElement.addEventListener("click", Fb, !0);
const Wf = (e) => {
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
    width: f = 520,
    footer: d,
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
  } = e, P = Ib(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose", "panelRef", "modalRender"]), {
    getPopupContainer: _,
    getPrefixCls: I,
    direction: F,
    modal: M
  } = g.useContext(be), A = (ye) => {
    C || b?.(ye);
  }, j = (ye) => {
    S?.(ye);
  };
  if (process.env.NODE_ENV !== "production") {
    const ye = it("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"], ["destroyOnClose", "destroyOnHidden"]].forEach(([Ve, Fe]) => {
      ye.deprecated(!(Ve in e), Ve, Fe);
    });
  }
  const k = I("modal", t), W = I(), B = jn(k), [Z, J, Q] = zf(k, B), K = z(a, {
    [`${k}-centered`]: i ?? M?.centered,
    [`${k}-wrap-rtl`]: F === "rtl"
  }), Y = d !== null && !m ? /* @__PURE__ */ g.createElement(Df, Object.assign({}, e, {
    onOk: j,
    onCancel: A
  })) : null, [G, q, oe, Pe] = jp(xc(e), xc(M), {
    closable: !0,
    closeIcon: /* @__PURE__ */ g.createElement(An, {
      className: `${k}-close-icon`
    }),
    closeIconRender: (ye) => Lf(k, ye)
  }), Ce = O ? (ye) => /* @__PURE__ */ g.createElement("div", {
    className: `${k}-render`
  }, O(ye)) : void 0, Se = `.${k}-${O ? "render" : "content"}`, Ee = Sb(Se), V = bo($, Ee), [pe, D] = Hp("Modal", y), [ee, ie] = g.useMemo(() => f && typeof f == "object" ? [void 0, f] : [f, void 0], [f]), Qe = g.useMemo(() => {
    const ye = {};
    return ie && Object.keys(ie).forEach((Ve) => {
      const Fe = ie[Ve];
      Fe !== void 0 && (ye[`--${k}-${Ve}-width`] = typeof Fe == "number" ? `${Fe}px` : Fe);
    }), ye;
  }, [k, ie]);
  return Z(/* @__PURE__ */ g.createElement(Jy, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ g.createElement(Zi.Provider, {
    value: D
  }, /* @__PURE__ */ g.createElement(Rf, Object.assign({
    width: ee
  }, P, {
    zIndex: pe,
    getContainer: s === void 0 ? _ : s,
    prefixCls: k,
    rootClassName: z(J, r, Q, B),
    footer: Y,
    visible: o ?? u,
    mousePosition: x ?? Ei,
    onClose: A,
    closable: G && Object.assign({
      disabled: oe,
      closeIcon: q
    }, Pe),
    closeIcon: q,
    focusTriggerAfterClose: c,
    transitionName: go(W, "zoom", e.transitionName),
    maskTransitionName: go(W, "fade", e.maskTransitionName),
    className: z(J, n, M?.className),
    style: Object.assign(Object.assign(Object.assign({}, M?.style), l), Qe),
    classNames: Object.assign(Object.assign(Object.assign({}, M?.classNames), h), {
      wrapper: z(K, h?.wrapper)
    }),
    styles: Object.assign(Object.assign({}, M?.styles), v),
    panelRef: V,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: w ?? E,
    modalRender: Ce
  }), m ? /* @__PURE__ */ g.createElement(an, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 4
    },
    className: `${k}-body-skeleton`
  }) : p))));
}, Ab = (e) => {
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
      [`${u}-body-wrapper`]: Object.assign({}, gv()),
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
}, jb = Ui(["Modal", "confirm"], (e) => {
  const t = Bf(e);
  return Ab(t);
}, Hf, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var kb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Gf = (e) => {
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
  } = e, u = kb(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const w = it("Modal");
    process.env.NODE_ENV !== "production" && w(!(typeof n == "string" && n.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${n}\` at https://ant.design/components/icon`);
  }
  let f = n;
  if (!n && n !== null)
    switch (i) {
      case "info":
        f = /* @__PURE__ */ g.createElement(Ro, null);
        break;
      case "success":
        f = /* @__PURE__ */ g.createElement(Po, null);
        break;
      case "error":
        f = /* @__PURE__ */ g.createElement(No, null);
        break;
      default:
        f = /* @__PURE__ */ g.createElement(To, null);
    }
  const d = s ?? i === "confirm", h = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", [v] = wo("Modal"), p = l || v, m = r || (d ? p?.okText : p?.justOkText), C = o || p?.cancelText, y = g.useMemo(() => Object.assign({
    autoFocusButton: h,
    cancelTextLocale: C,
    okTextLocale: m,
    mergedOkCancel: d
  }, u), [h, C, m, d, u]), x = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(Ic, null), /* @__PURE__ */ g.createElement(Fc, null)), S = e.title !== void 0 && e.title !== null, b = `${a}-body`;
  return /* @__PURE__ */ g.createElement("div", {
    className: `${a}-body-wrapper`
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(b, {
      [`${b}-has-title`]: S
    })
  }, f, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-paragraph`
  }, S && /* @__PURE__ */ g.createElement("span", {
    className: `${a}-title`
  }, e.title), /* @__PURE__ */ g.createElement("div", {
    className: `${a}-content`
  }, e.content))), c === void 0 || typeof c == "function" ? /* @__PURE__ */ g.createElement($f, {
    value: y
  }, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-btns`
  }, typeof c == "function" ? c(x, {
    OkBtn: Fc,
    CancelBtn: Ic
  }) : x)) : c, /* @__PURE__ */ g.createElement(jb, {
    prefixCls: t
  }));
}, qf = (e) => {
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
    styles: f,
    title: d
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const b = it("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach(([w, E]) => {
      b.deprecated(!(w in e), w, E);
    });
  }
  const h = `${a}-confirm`, v = e.width || 416, p = e.style || {}, m = e.mask === void 0 ? !0 : e.mask, C = e.maskClosable === void 0 ? !1 : e.maskClosable, y = z(h, `${h}-${e.type}`, {
    [`${h}-rtl`]: o === "rtl"
  }, e.className), [, x] = _t(), S = g.useMemo(() => n !== void 0 ? n : x.zIndexPopupBase + Mo, [n, x]);
  return /* @__PURE__ */ g.createElement(Wf, Object.assign({}, e, {
    className: y,
    wrapClassName: z({
      [`${h}-centered`]: !!e.centered
    }, i),
    onCancel: () => {
      t?.({
        triggerCancel: !0
      }), u?.(!1);
    },
    title: d,
    footer: null,
    transitionName: go(s || "", "zoom", e.transitionName),
    maskTransitionName: go(s || "", "fade", e.maskTransitionName),
    mask: m,
    maskClosable: C,
    style: p,
    styles: Object.assign({
      body: c,
      mask: r
    }, f),
    width: v,
    zIndex: S,
    closable: l
  }), /* @__PURE__ */ g.createElement(Gf, Object.assign({}, e, {
    confirmPrefixCls: h
  })));
}, os = (e) => {
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
  }, /* @__PURE__ */ g.createElement(qf, Object.assign({}, e)));
};
process.env.NODE_ENV !== "production" && (qf.displayName = "ConfirmDialog", os.displayName = "ConfirmDialogWrapper");
const Xt = [];
let Uf = "";
function Xf() {
  return Uf;
}
const Lb = (e) => {
  var t, n;
  const {
    prefixCls: r,
    getContainer: o,
    direction: a
  } = e, i = vu(), s = ae(be), c = Xf() || s.getPrefixCls(), l = r || `${c}-modal`;
  let u = o;
  return u === !1 && (u = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Gt(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ R.createElement(os, Object.assign({}, e, {
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
  process.env.NODE_ENV !== "production" && !t.holderRender && Yi("Modal");
  const n = document.createDocumentFragment();
  let r = Object.assign(Object.assign({}, e), {
    close: c,
    open: !0
  }), o, a;
  function i(...u) {
    var f;
    if (u.some((v) => v?.triggerCancel)) {
      var h;
      (f = e.onCancel) === null || f === void 0 || (h = f).call.apply(h, [e, () => {
      }].concat(H(u.slice(1))));
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
      const f = t.getPrefixCls(void 0, Xf()), d = t.getIconPrefixCls(), h = t.getTheme(), v = /* @__PURE__ */ R.createElement(Lb, Object.assign({}, u));
      a = Fo()(/* @__PURE__ */ R.createElement(tt, {
        prefixCls: f,
        iconPrefixCls: d,
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
function Yf(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  });
}
function Kf(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  });
}
function Qf(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  });
}
function Zf(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  });
}
function Jf(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  });
}
function Db({
  rootPrefixCls: e
}) {
  process.env.NODE_ENV !== "production" && Gt(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), Uf = e;
}
var Vb = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Bb = (e, t) => {
  var n, {
    afterClose: r,
    config: o
  } = e, a = Vb(e, ["afterClose", "config"]);
  const [i, s] = g.useState(!0), [c, l] = g.useState(o), {
    direction: u,
    getPrefixCls: f
  } = g.useContext(be), d = f("modal"), h = f(), v = () => {
    var y;
    r(), (y = c.afterClose) === null || y === void 0 || y.call(c);
  }, p = (...y) => {
    var x;
    if (s(!1), y.some((w) => w?.triggerCancel)) {
      var b;
      (x = c.onCancel) === null || x === void 0 || (b = x).call.apply(b, [c, () => {
      }].concat(H(y.slice(1))));
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
  const m = (n = c.okCancel) !== null && n !== void 0 ? n : c.type === "confirm", [C] = wo("Modal", Wt.Modal);
  return /* @__PURE__ */ g.createElement(os, Object.assign({
    prefixCls: d,
    rootPrefixCls: h
  }, c, {
    close: p,
    open: i,
    afterClose: v,
    okText: c.okText || (m ? C?.okText : C?.justOkText),
    direction: c.direction || u,
    cancelText: c.cancelText || C?.cancelText
  }, a));
}, Hb = /* @__PURE__ */ g.forwardRef(Bb);
let rl = 0;
const zb = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef((e, t) => {
  const [n, r] = kp();
  return g.useImperativeHandle(t, () => ({
    patchElement: r
  }), [r]), /* @__PURE__ */ g.createElement(g.Fragment, null, n);
}));
function Wb() {
  const e = g.useRef(null), [t, n] = g.useState([]);
  g.useEffect(() => {
    t.length && (H(t).forEach((i) => {
      i();
    }), n([]));
  }, [t]);
  const r = g.useCallback((a) => function(s) {
    var c;
    rl += 1;
    const l = /* @__PURE__ */ g.createRef();
    let u;
    const f = new Promise((m) => {
      u = m;
    });
    let d = !1, h;
    const v = /* @__PURE__ */ g.createElement(Hb, {
      key: `modal-${rl}`,
      config: a(s),
      ref: l,
      afterClose: () => {
        h?.();
      },
      isSilent: () => d,
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
        l.current ? m() : n((C) => [].concat(H(C), [m]));
      },
      update: (m) => {
        function C() {
          var y;
          (y = l.current) === null || y === void 0 || y.update(m);
        }
        l.current ? C() : n((y) => [].concat(H(y), [C]));
      },
      then: (m) => (d = !0, f.then(m))
    };
  }, []);
  return [g.useMemo(() => ({
    info: r(Kf),
    success: r(Qf),
    error: r(Zf),
    warning: r(Yf),
    confirm: r(Jf)
  }), [r]), /* @__PURE__ */ g.createElement(zb, {
    key: "modal-holder",
    ref: e
  })];
}
const Gb = (e) => {
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
}, qb = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], Ub = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, Xb = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [Ub[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, Yb = (e) => {
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
}, Kb = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, Qb = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
        willChange: "transform, opacity",
        position: "absolute"
      }, Yb(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, Kb(e))
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
  }, qb.map((n) => Xb(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, ed = (e) => {
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
    colorTextHeading: f,
    notificationBg: d,
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
    background: d,
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
      color: f,
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
    }, qi(e)),
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
}, Zb = (e) => {
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
      [t]: Object.assign(Object.assign({}, Gi(e)), {
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
        [`${i}-wrapper`]: ed(e)
      }
    }
  ];
}, td = (e) => ({
  zIndexPopup: e.zIndexPopupBase + Mo + 50,
  width: 384,
  colorSuccessBg: e.colorSuccessBg,
  colorErrorBg: e.colorErrorBg,
  colorInfoBg: e.colorInfoBg,
  colorWarningBg: e.colorWarningBg
}), nd = (e) => {
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
}, rd = rn("Notification", (e) => {
  const t = nd(e);
  return [Zb(t), Gb(t), Qb(t)];
}, td), Jb = Ui(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = nd(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, ed(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${ne(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, td);
var eC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function as(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ g.createElement(An, {
    className: `${e}-close-icon`
  });
}
const tC = {
  success: Po,
  info: Ro,
  error: No,
  warning: To
}, od = (e) => {
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
  }, n) : r && (c = /* @__PURE__ */ g.createElement(tC[r] || null, {
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
}, nC = (e) => {
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
    className: f
  } = e, d = eC(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "actions", "closable", "closeIcon", "className"]), {
    getPrefixCls: h
  } = g.useContext(be), v = c ?? s;
  process.env.NODE_ENV !== "production" && it("Notification").deprecated(!s, "btn", "actions");
  const p = t || h("notification"), m = `${p}-notice`, C = jn(p), [y, x, S] = rd(p, C);
  return y(/* @__PURE__ */ g.createElement("div", {
    className: z(`${m}-pure-panel`, x, n, S, C)
  }, /* @__PURE__ */ g.createElement(Jb, {
    prefixCls: p
  }), /* @__PURE__ */ g.createElement(Ki, Object.assign({}, d, {
    prefixCls: p,
    eventKey: "pure",
    duration: null,
    closable: l,
    className: z({
      notificationClassName: f
    }),
    closeIcon: as(p, u),
    content: /* @__PURE__ */ g.createElement(od, {
      prefixCls: m,
      icon: r,
      type: o,
      message: a,
      description: i,
      actions: v
    })
  }))));
};
function rC(e, t, n) {
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
function oC(e) {
  return {
    motionName: `${e}-fade`
  };
}
function aC(e, t, n) {
  return typeof e < "u" ? e : typeof t?.closeIcon < "u" ? t.closeIcon : n?.closeIcon;
}
var iC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const ol = 24, sC = 4.5, cC = "topRight", lC = ({
  children: e,
  prefixCls: t
}) => {
  const n = jn(t), [r, o, a] = rd(t, n);
  return r(/* @__PURE__ */ R.createElement(Zu, {
    classNames: {
      list: z(o, a, n)
    }
  }, e));
}, uC = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ R.createElement(lC, {
  prefixCls: t,
  key: n
}, e), fC = /* @__PURE__ */ R.forwardRef((e, t) => {
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
    pauseOnHover: f = !0,
    showProgress: d
  } = e, {
    getPrefixCls: h,
    getPopupContainer: v,
    notification: p,
    direction: m
  } = ae(be), [, C] = _t(), y = o || h("notification"), x = ($) => rC($, n ?? ol, r ?? ol), S = () => z({
    [`${y}-rtl`]: s ?? m === "rtl"
  }), b = () => oC(y), [w, E] = tf({
    prefixCls: y,
    style: x,
    className: S,
    motion: b,
    closable: !0,
    closeIcon: as(y),
    duration: u ?? sC,
    getContainer: () => a?.() || v?.() || document.body,
    maxCount: i,
    pauseOnHover: f,
    showProgress: d,
    onAllRemoved: c,
    renderNotifications: uC,
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
function ad(e) {
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
        prefixCls: f,
        notification: d
      } = t.current, h = `${f}-notice`, {
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
      } = c, O = iC(c, ["message", "description", "icon", "type", "btn", "actions", "className", "style", "role", "closeIcon", "closable"]);
      process.env.NODE_ENV !== "production" && n.deprecated(!y, "btn", "actions");
      const P = x ?? y, _ = as(h, aC(E, e, d));
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (l = e?.placement) !== null && l !== void 0 ? l : cC
      }, O), {
        content: /* @__PURE__ */ R.createElement(od, {
          prefixCls: h,
          icon: m,
          type: C,
          message: v,
          description: p,
          actions: P,
          role: w
        }),
        className: z(C && `${h}-${C}`, S, d?.className),
        style: Object.assign(Object.assign({}, d?.style), b),
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
  }, []), /* @__PURE__ */ R.createElement(fC, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function dC(e) {
  return ad(e);
}
const id = /* @__PURE__ */ R.createContext({});
function mC(e) {
  return (t) => /* @__PURE__ */ g.createElement(tt, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, t)));
}
var gC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, vC = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: gC
  }));
}, sd = /* @__PURE__ */ g.forwardRef(vC);
process.env.NODE_ENV !== "production" && (sd.displayName = "SearchOutlined");
let ft = null, Yt = (e) => e(), ar = [], ir = {};
function al() {
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
const pC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const {
    messageConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = ae(be), a = ir.prefixCls || o("message"), i = ae(id), [s, c] = af(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.message));
  return R.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...f) => (r(), s[u].apply(s, f));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), hC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const [n, r] = R.useState(al), o = () => {
    r(al);
  };
  R.useEffect(o, []);
  const a = gr(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ R.createElement(pC, {
    ref: t,
    sync: o,
    messageConfig: n
  });
  return /* @__PURE__ */ R.createElement(tt, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
}), Wo = () => {
  if (!ft) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    ft = t, Yt(() => {
      Fo()(/* @__PURE__ */ R.createElement(hC, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, Wo());
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
            const o = (r = ft.instance)[t].apply(r, H(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), ar = []);
};
function yC(e) {
  ir = Object.assign(Object.assign({}, ir), e), Yt(() => {
    var t;
    (t = ft?.sync) === null || t === void 0 || t.call(ft);
  });
}
function bC(e) {
  const t = Ji((n) => {
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
  return Wo(), t;
}
function CC(e, t) {
  const n = gr();
  process.env.NODE_ENV !== "production" && !n.holderRender && Yi("message");
  const r = Ji((o) => {
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
  return Wo(), r;
}
const xC = (e) => {
  ar.push({
    type: "destroy",
    key: e
  }), Wo();
}, SC = ["success", "info", "warning", "error", "loading"], EC = {
  open: bC,
  destroy: xC,
  config: yC,
  useMessage: th,
  _InternalPanelDoNotUseOrYouWillBeFired: Up
}, cd = EC;
SC.forEach((e) => {
  cd[e] = (...t) => CC(e, t);
});
process.env.NODE_ENV;
process.env.NODE_ENV;
var wC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const $C = (e) => {
  const {
    prefixCls: t,
    className: n,
    closeIcon: r,
    closable: o,
    type: a,
    title: i,
    children: s,
    footer: c
  } = e, l = wC(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls: u
  } = g.useContext(be), f = u(), d = t || u("modal"), h = jn(f), [v, p, m] = zf(d, h), C = `${d}-confirm`;
  let y = {};
  return a ? y = {
    closable: o ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ g.createElement(Gf, Object.assign({}, e, {
      prefixCls: d,
      confirmPrefixCls: C,
      rootPrefixCls: f,
      content: s
    }))
  } : y = {
    closable: o ?? !0,
    title: i,
    footer: c !== null && /* @__PURE__ */ g.createElement(Df, Object.assign({}, e)),
    children: s
  }, v(/* @__PURE__ */ g.createElement(ns, Object.assign({
    prefixCls: d,
    className: z(p, `${d}-pure-panel`, a && C, a && `${C}-${a}`, n, m, h)
  }, l, {
    closeIcon: Lf(d, r),
    closable: o
  }, y)));
}, OC = mC($C);
function ld(e) {
  return br(Yf(e));
}
const st = Wf;
st.useModal = Wb;
st.info = function(t) {
  return br(Kf(t));
};
st.success = function(t) {
  return br(Qf(t));
};
st.error = function(t) {
  return br(Zf(t));
};
st.warning = ld;
st.warn = ld;
st.confirm = function(t) {
  return br(Jf(t));
};
st.destroyAll = function() {
  for (; Xt.length; ) {
    const t = Xt.pop();
    t && t();
  }
};
st.config = Db;
st._InternalPanelDoNotUseOrYouWillBeFired = OC;
process.env.NODE_ENV !== "production" && (st.displayName = "Modal");
let pt = null, to = (e) => e(), po = [], sr = {};
function il() {
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
const PC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = ae(be), a = sr.prefixCls || o("notification"), i = ae(id), [s, c] = ad(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.notification));
  return R.useEffect(r, []), R.useImperativeHandle(t, () => {
    const l = Object.assign({}, s);
    return Object.keys(l).forEach((u) => {
      l[u] = (...f) => (r(), s[u].apply(s, f));
    }), {
      instance: l,
      sync: r
    };
  }), c;
}), NC = /* @__PURE__ */ R.forwardRef((e, t) => {
  const [n, r] = R.useState(il), o = () => {
    r(il);
  };
  R.useEffect(o, []);
  const a = gr(), i = a.getRootPrefixCls(), s = a.getIconPrefixCls(), c = a.getTheme(), l = /* @__PURE__ */ R.createElement(PC, {
    ref: t,
    sync: o,
    notificationConfig: n
  });
  return /* @__PURE__ */ R.createElement(tt, {
    prefixCls: i,
    iconPrefixCls: s,
    theme: c
  }, a.holderRender ? a.holderRender(l) : l);
}), is = () => {
  if (!pt) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    pt = t, to(() => {
      Fo()(/* @__PURE__ */ R.createElement(NC, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, is());
          });
        }
      }), e);
    });
    return;
  }
  pt.instance && (po.forEach((e) => {
    switch (e.type) {
      case "open": {
        to(() => {
          pt.instance.open(Object.assign(Object.assign({}, sr), e.config));
        });
        break;
      }
      case "destroy":
        to(() => {
          var t;
          (t = pt?.instance) === null || t === void 0 || t.destroy(e.key);
        });
        break;
    }
  }), po = []);
};
function TC(e) {
  sr = Object.assign(Object.assign({}, sr), e), to(() => {
    var t;
    (t = pt?.sync) === null || t === void 0 || t.call(pt);
  });
}
function ud(e) {
  const t = gr();
  process.env.NODE_ENV !== "production" && !t.holderRender && Yi("notification"), po.push({
    type: "open",
    config: e
  }), is();
}
const RC = (e) => {
  po.push({
    type: "destroy",
    key: e
  }), is();
}, _C = ["success", "info", "warning", "error"], MC = {
  open: ud,
  destroy: RC,
  config: TC,
  useNotification: dC,
  _InternalPanelDoNotUseOrYouWillBeFired: nC
}, fd = MC;
_C.forEach((e) => {
  fd[e] = (t) => ud(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const IC = (e) => {
  const t = e?.algorithm ? ao(e.algorithm) : Bi, n = Object.assign(Object.assign({}, Pn), e?.token);
  return Xl(n, {
    override: e?.token
  }, t, Wi);
};
function FC(e) {
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
const AC = (e, t) => {
  const n = t ?? $o(e), r = n.fontSizeSM, o = n.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), FC(t ?? e)), Su(r)), {
    // controlHeight
    controlHeight: o
  }), xu(Object.assign(Object.assign({}, n), {
    controlHeight: o
  })));
}, ut = (e, t) => new xe(e).setA(t).toRgbString(), mn = (e, t) => new xe(e).lighten(t).toHexString(), jC = (e) => {
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
}, kC = (e, t) => {
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
}, LC = (e, t) => {
  const n = Object.keys(Vi).map((a) => {
    const i = en(e[a], {
      theme: "dark"
    });
    return Array.from({
      length: 10
    }, () => 1).reduce((s, c, l) => (s[`${a}-${l + 1}`] = i[l], s[`${a}${l + 1}`] = i[l], s), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), r = t ?? $o(e), o = Cu(e, {
    generateColorPalettes: jC,
    generateNeutralColorPalettes: kC
  });
  return Object.assign(Object.assign(Object.assign(Object.assign({}, r), n), o), {
    // Customize selected item background color
    // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
    colorPrimaryBg: o.colorPrimaryBorder,
    colorPrimaryBgHover: o.colorPrimaryBorderHover
  });
};
function DC() {
  const [e, t, n] = _t();
  return {
    theme: e,
    token: t,
    hashId: n
  };
}
const wi = {
  /** Default seedToken */
  defaultSeed: or.token,
  useToken: DC,
  defaultAlgorithm: $o,
  darkAlgorithm: LC,
  compactAlgorithm: AC,
  getDesignToken: IC,
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
function dd(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = dd(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function VC() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = dd(e)) && (r && (r += " "), r += t);
  return r;
}
function ve(...e) {
  return VC(e);
}
const BC = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, HC = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", zC = R.forwardRef(
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
    const f = !!(r ?? o), d = () => f ? /* @__PURE__ */ U(
      md,
      {
        size: i,
        className: s,
        children: r ?? (o ? /* @__PURE__ */ U(
          "img",
          {
            src: o,
            alt: a ?? "Card icon",
            className: "luca-h-full luca-w-full luca-object-contain"
          }
        ) : null)
      }
    ) : null;
    return /* @__PURE__ */ Rt(
      "div",
      {
        ref: u,
        "data-card-align": e,
        className: ve(
          "luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          t && HC,
          BC[e],
          n
        ),
        ...l,
        children: [
          d(),
          c
        ]
      }
    );
  }
);
zC.displayName = "Card";
const WC = R.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ U(
    "div",
    {
      ref: r,
      className: ve(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        e
      ),
      ...n,
      children: t
    }
  )
);
WC.displayName = "CardHeader";
const GC = R.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ U(
    "strong",
    {
      ref: r,
      className: ve(
        "luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        e
      ),
      ...n,
      children: t
    }
  )
);
GC.displayName = "CardTitle";
const qC = R.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ U(
  "p",
  {
    ref: r,
    className: ve(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line",
      e
    ),
    ...n,
    children: t
  }
));
qC.displayName = "CardDescription";
const UC = R.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ U(
    "div",
    {
      ref: r,
      className: ve(
        "luca-w-full luca-text-sm",
        e
      ),
      ...n,
      children: t
    }
  )
);
UC.displayName = "CardContent";
const XC = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, md = R.forwardRef(
  ({ className: e, children: t, size: n = "lg", ...r }, o) => /* @__PURE__ */ U(
    "div",
    {
      ref: o,
      className: ve(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        XC[n],
        e
      ),
      ...r,
      children: t
    }
  )
);
md.displayName = "CardIcon";
const YC = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap disabled:luca-cursor-not-allowed", KC = {
  primary: {
    default: ve(
      // Default state - amarillo
      "luca-bg-[#ffba31] luca-text-[#111827] luca-shadow-[0px_4px_0px_0px_#f58f00]",
      // Hover, Active, Focus - mismo diseño (naranja más oscuro)
      "hover:luca-bg-[#f58f00] hover:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "active:luca-bg-[#f58f00] active:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "focus-visible:luca-bg-[#f58f00] focus-visible:luca-shadow-[0px_4px_0px_0px_#d0780f] focus-visible:luca-outline-none",
      // Disabled state - gris
      "disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-shadow-[0px_4px_0px_0px_#adadad]"
    ),
    alert: ve(
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
    default: ve(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200 luca-shadow-[0px_3px_0px_0px_#adadad]",
      "hover:luca-border-[#c5daff] hover:luca-text-[#3843d0]",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: ve(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  },
  tertiary: {
    default: ve(
      "!luca-rounded-full luca-bg-white luca-text-[#4b5563] luca-border luca-border-[#e5e7eb]",
      "hover:luca-bg-[#edf5ff] hover:luca-border-[#3843d0] hover:luca-text-[#3843d0]",
      "active:luca-bg-[#3843d0] active:luca-border-white active:luca-text-white",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: ve(
      "!luca-rounded-full luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  }
}, gd = R.forwardRef(
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
  }, l) => /* @__PURE__ */ Rt(
    "button",
    {
      ref: l,
      type: s,
      disabled: i,
      className: ve(
        YC,
        KC[e][t],
        o
      ),
      ...c,
      children: [
        n && /* @__PURE__ */ U("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: n }),
        /* @__PURE__ */ U("span", { className: "luca-leading-tight", children: a }),
        r && /* @__PURE__ */ U("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: r })
      ]
    }
  )
);
gd.displayName = "Button";
const sl = {
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
}, QC = R.forwardRef(
  ({
    state: e = "default",
    outline: t = "default",
    icon: n,
    className: r,
    disabled: o,
    ...a
  }, i) => {
    const s = e === "disabled" || o;
    return /* @__PURE__ */ U(
      "button",
      {
        ref: i,
        disabled: s,
        className: ve(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          sl.state[e],
          sl.outline[t],
          // Hover styles solo si no está disabled
          !s && "hover:luca-bg-[#edf5ff] hover:luca-text-[#3843d0]",
          r
        ),
        ...a,
        children: /* @__PURE__ */ U("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: n })
      }
    );
  }
);
QC.displayName = "ButtonIcon";
const ZC = ({ className: e, color: t }) => /* @__PURE__ */ U(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ U(
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
), qx = ({
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
  }, f = {
    primary: "#3843D0",
    secondary: "#374151",
    gray: "#6b7280",
    light: "#374151",
    warning: "#d97706",
    danger: "#DC2626",
    success: "#16A34A",
    info: "#38BDF8"
  };
  return /* @__PURE__ */ Rt(
    "span",
    {
      className: ve(
        s,
        c[n],
        l,
        u[e][t],
        a
      ),
      ...i,
      children: [
        r && n === "full" && e === "duotone" && /* @__PURE__ */ U(
          ZC,
          {
            className: "luca-shrink-0",
            color: f[t]
          }
        ),
        o
      ]
    }
  );
}, JC = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", e1 = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", t1 = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", n1 = "hover:luca-text-[#3843d0] focus-visible:luca-outline-[#3843d0]", r1 = "luca-cursor-not-allowed luca-text-gray-400 hover:luca-text-gray-400 focus-visible:luca-outline-none luca-opacity-60", o1 = R.forwardRef(
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
    ), [f, d] = R.useState(() => n !== void 0 ? n : u);
    R.useEffect(() => {
      if (l || n === void 0) return;
      const v = e.some(
        (p) => p.key === n && !p.disabled
      );
      d(v ? n : u);
    }, [n, u, l, e]), R.useEffect(() => {
      l || d((v) => v && e.some((p) => p.key === v && !p.disabled) ? v : u ?? v);
    }, [u, e, l]);
    const h = l ? t : f;
    return /* @__PURE__ */ U(
      "div",
      {
        ref: c,
        role: "tablist",
        "aria-label": a,
        className: ve(JC, o && "luca-w-full", i),
        ...s,
        children: e.map((v) => {
          const p = v.key === h, m = !!v.disabled, C = p || !h && v.key === u ? 0 : -1;
          return /* @__PURE__ */ U(
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
              className: ve(
                e1,
                o ? "luca-flex-1" : "luca-min-w-[88px]",
                p ? t1 : n1,
                m && r1
              ),
              onClick: () => {
                m || (l || d(v.key), r?.(v.key));
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
o1.displayName = "TabList";
const vd = ({
  backgroundImage: e,
  title: t,
  subtitle: n,
  avatarImage: r,
  avatarAlt: o = "Layout avatar",
  heroClassName: a,
  heroStyle: i
}) => /* @__PURE__ */ Rt(
  "div",
  {
    className: ve(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      a
    ),
    style: { backgroundImage: `url(${e})`, ...i },
    children: [
      /* @__PURE__ */ U("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-Left", children: t }),
      /* @__PURE__ */ U("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ U(
        "img",
        {
          src: r,
          alt: o,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ U("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: n })
    ]
  }
);
vd.displayName = "LayoutHeader";
const pd = ({ children: e, className: t, ...n }) => /* @__PURE__ */ U(
  "div",
  {
    className: ve(
      "luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      t
    ),
    ...n,
    children: e
  }
);
pd.displayName = "LayoutContent";
const ss = ({ className: e, style: t, children: n }) => /* @__PURE__ */ U("div", { className: ve("luca-bg-[#F9FAFB]", e), style: t, children: n });
ss.displayName = "Layout";
ss.Header = vd;
ss.Content = pd;
function a1(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function i1(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var s1 = /* @__PURE__ */ (function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(i1(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = a1(o);
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
})(), Ue = "-ms-", ho = "-moz-", se = "-webkit-", hd = "comm", cs = "rule", ls = "decl", c1 = "@import", yd = "@keyframes", l1 = "@layer", u1 = Math.abs, Go = String.fromCharCode, f1 = Object.assign;
function d1(e, t) {
  return ze(e, 0) ^ 45 ? (((t << 2 ^ ze(e, 0)) << 2 ^ ze(e, 1)) << 2 ^ ze(e, 2)) << 2 ^ ze(e, 3) : 0;
}
function bd(e) {
  return e.trim();
}
function m1(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function ce(e, t, n) {
  return e.replace(t, n);
}
function $i(e, t) {
  return e.indexOf(t);
}
function ze(e, t) {
  return e.charCodeAt(t) | 0;
}
function cr(e, t, n) {
  return e.slice(t, n);
}
function wt(e) {
  return e.length;
}
function us(e) {
  return e.length;
}
function Wr(e, t) {
  return t.push(e), e;
}
function g1(e, t) {
  return e.map(t).join("");
}
var qo = 1, _n = 1, Cd = 0, et = 0, Ie = 0, Dn = "";
function Uo(e, t, n, r, o, a, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: qo, column: _n, length: i, return: "" };
}
function Gn(e, t) {
  return f1(Uo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function v1() {
  return Ie;
}
function p1() {
  return Ie = et > 0 ? ze(Dn, --et) : 0, _n--, Ie === 10 && (_n = 1, qo--), Ie;
}
function at() {
  return Ie = et < Cd ? ze(Dn, et++) : 0, _n++, Ie === 10 && (_n = 1, qo++), Ie;
}
function Pt() {
  return ze(Dn, et);
}
function no() {
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
function xd(e) {
  return qo = _n = 1, Cd = wt(Dn = e), et = 0, [];
}
function Sd(e) {
  return Dn = "", e;
}
function ro(e) {
  return bd(Cr(et - 1, Oi(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function h1(e) {
  for (; (Ie = Pt()) && Ie < 33; )
    at();
  return lr(e) > 2 || lr(Ie) > 3 ? "" : " ";
}
function y1(e, t) {
  for (; --t && at() && !(Ie < 48 || Ie > 102 || Ie > 57 && Ie < 65 || Ie > 70 && Ie < 97); )
    ;
  return Cr(e, no() + (t < 6 && Pt() == 32 && at() == 32));
}
function Oi(e) {
  for (; at(); )
    switch (Ie) {
      // ] ) " '
      case e:
        return et;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Oi(Ie);
        break;
      // (
      case 40:
        e === 41 && Oi(e);
        break;
      // \
      case 92:
        at();
        break;
    }
  return et;
}
function b1(e, t) {
  for (; at() && e + Ie !== 57; )
    if (e + Ie === 84 && Pt() === 47)
      break;
  return "/*" + Cr(t, et - 1) + "*" + Go(e === 47 ? e : at());
}
function C1(e) {
  for (; !lr(Pt()); )
    at();
  return Cr(e, et);
}
function x1(e) {
  return Sd(oo("", null, null, null, [""], e = xd(e), 0, [0], e));
}
function oo(e, t, n, r, o, a, i, s, c) {
  for (var l = 0, u = 0, f = i, d = 0, h = 0, v = 0, p = 1, m = 1, C = 1, y = 0, x = "", S = o, b = a, w = r, E = x; m; )
    switch (v = y, y = at()) {
      // (
      case 40:
        if (v != 108 && ze(E, f - 1) == 58) {
          $i(E += ce(ro(y), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += ro(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += h1(v);
        break;
      // \
      case 92:
        E += y1(no() - 1, 7);
        continue;
      // /
      case 47:
        switch (Pt()) {
          case 42:
          case 47:
            Wr(S1(b1(at(), no()), t, n), c);
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * p:
        s[l++] = wt(E) * C;
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
            C == -1 && (E = ce(E, /\f/g, "")), h > 0 && wt(E) - f && Wr(h > 32 ? ll(E + ";", r, n, f - 1) : ll(ce(E, " ", "") + ";", r, n, f - 2), c);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Wr(w = cl(E, t, n, l, u, o, s, x, S = [], b = [], f), a), y === 123)
              if (u === 0)
                oo(E, t, w, w, S, a, f, s, b);
              else
                switch (d === 99 && ze(E, 3) === 110 ? 100 : d) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    oo(e, w, w, r && Wr(cl(e, w, w, 0, 0, o, s, x, o, S = [], f), b), o, b, f, s, r ? S : b);
                    break;
                  default:
                    oo(E, w, w, w, [""], b, 0, s, b);
                }
        }
        l = u = h = 0, p = C = 1, x = E = "", f = i;
        break;
      // :
      case 58:
        f = 1 + wt(E), h = v;
      default:
        if (p < 1) {
          if (y == 123)
            --p;
          else if (y == 125 && p++ == 0 && p1() == 125)
            continue;
        }
        switch (E += Go(y), y * p) {
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
            Pt() === 45 && (E += ro(at())), d = Pt(), u = f = wt(x = E += C1(no())), y++;
            break;
          // -
          case 45:
            v === 45 && wt(E) == 2 && (p = 0);
        }
    }
  return a;
}
function cl(e, t, n, r, o, a, i, s, c, l, u) {
  for (var f = o - 1, d = o === 0 ? a : [""], h = us(d), v = 0, p = 0, m = 0; v < r; ++v)
    for (var C = 0, y = cr(e, f + 1, f = u1(p = i[v])), x = e; C < h; ++C)
      (x = bd(p > 0 ? d[C] + " " + y : ce(y, /&\f/g, d[C]))) && (c[m++] = x);
  return Uo(e, t, n, o === 0 ? cs : s, c, l, u);
}
function S1(e, t, n) {
  return Uo(e, t, n, hd, Go(v1()), cr(e, 2, -2), 0);
}
function ll(e, t, n, r) {
  return Uo(e, t, n, ls, cr(e, 0, r), cr(e, r + 1, -1), r);
}
function Sn(e, t) {
  for (var n = "", r = us(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function E1(e, t, n, r) {
  switch (e.type) {
    case l1:
      if (e.children.length) break;
    case c1:
    case ls:
      return e.return = e.return || e.value;
    case hd:
      return "";
    case yd:
      return e.return = e.value + "{" + Sn(e.children, r) + "}";
    case cs:
      e.value = e.props.join(",");
  }
  return wt(n = Sn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function w1(e) {
  var t = us(e);
  return function(n, r, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](n, r, o, a) || "";
    return i;
  };
}
function $1(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var ul = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function O1(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var P1 = function(t, n, r) {
  for (var o = 0, a = 0; o = a, a = Pt(), o === 38 && a === 12 && (n[r] = 1), !lr(a); )
    at();
  return Cr(t, et);
}, N1 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (lr(o)) {
      case 0:
        o === 38 && Pt() === 12 && (n[r] = 1), t[r] += P1(et - 1, n, r);
        break;
      case 2:
        t[r] += ro(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Pt() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += Go(o);
    }
  while (o = at());
  return t;
}, T1 = function(t, n) {
  return Sd(N1(xd(t), n));
}, fl = /* @__PURE__ */ new WeakMap(), R1 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !fl.get(r)) && !o) {
      fl.set(t, !0);
      for (var a = [], i = T1(n, a), s = r.props, c = 0, l = 0; c < i.length; c++)
        for (var u = 0; u < s.length; u++, l++)
          t.props[l] = a[c] ? i[c].replace(/&\f/g, s[u]) : s[u] + " " + i[c];
    }
  }
}, _1 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Ed(e, t) {
  switch (d1(e, t)) {
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
      return se + e + ho + e + Ue + e + e;
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
      if (wt(e) - 1 - t > 6) switch (ze(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (ze(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ce(e, /(.+:)(.+)-([^]+)/, "$1" + se + "$2-$3$1" + ho + (ze(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~$i(e, "stretch") ? Ed(ce(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (ze(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (ze(e, wt(e) - 3 - (~$i(e, "!important") && 10))) {
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
var M1 = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case ls:
      t.return = Ed(t.value, t.length);
      break;
    case yd:
      return Sn([Gn(t, {
        value: ce(t.value, "@", "@" + se)
      })], o);
    case cs:
      if (t.length) return g1(t.props, function(a) {
        switch (m1(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Sn([Gn(t, {
              props: [ce(a, /:(read-\w+)/, ":" + ho + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Sn([Gn(t, {
              props: [ce(a, /:(plac\w+)/, ":" + se + "input-$1")]
            }), Gn(t, {
              props: [ce(a, /:(plac\w+)/, ":" + ho + "$1")]
            }), Gn(t, {
              props: [ce(a, /:(plac\w+)/, Ue + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, I1 = [M1], wd = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var m = p.getAttribute("data-emotion");
      m.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || I1, a = {}, i, s = [];
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
  var c, l = [R1, _1];
  {
    var u, f = [E1, $1(function(p) {
      u.insert(p);
    })], d = w1(l.concat(o, f)), h = function(m) {
      return Sn(x1(m), d);
    };
    c = function(m, C, y, x) {
      u = y, h(m ? m + "{" + C.styles + "}" : C.styles), x && (v.inserted[C.name] = !0);
    };
  }
  var v = {
    key: n,
    sheet: new s1({
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
function F1(e) {
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
var A1 = {
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
}, j1 = /[A-Z]|^ms/g, k1 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, $d = function(t) {
  return t.charCodeAt(1) === 45;
}, dl = function(t) {
  return t != null && typeof t != "boolean";
}, wa = /* @__PURE__ */ O1(function(e) {
  return $d(e) ? e : e.replace(j1, "-$&").toLowerCase();
}), ml = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(k1, function(r, o, a) {
          return $t = {
            name: o,
            styles: a,
            next: $t
          }, o;
        });
  }
  return A1[t] !== 1 && !$d(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
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
        return $t = {
          name: o.name,
          styles: o.styles,
          next: $t
        }, o.name;
      var a = n;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            $t = {
              name: i.name,
              styles: i.styles,
              next: $t
            }, i = i.next;
        var s = a.styles + ";";
        return s;
      }
      return L1(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var c = $t, l = n(e);
        return $t = c, ur(e, t, l);
      }
      break;
    }
  }
  var u = n;
  if (t == null)
    return u;
  var f = t[u];
  return f !== void 0 ? f : u;
}
function L1(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += ur(e, t, n[o]) + ";";
  else
    for (var a in n) {
      var i = n[a];
      if (typeof i != "object") {
        var s = i;
        t != null && t[s] !== void 0 ? r += a + "{" + t[s] + "}" : dl(s) && (r += wa(a) + ":" + ml(a, s) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var c = 0; c < i.length; c++)
          dl(i[c]) && (r += wa(a) + ":" + ml(a, i[c]) + ";");
      else {
        var l = ur(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            r += wa(a) + ":" + l + ";";
            break;
          }
          default:
            r += a + "{" + l + "}";
        }
      }
    }
  return r;
}
var gl = /label:\s*([^\s;{]+)\s*(;|$)/g, $t;
function Ht(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  $t = void 0;
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
  gl.lastIndex = 0;
  for (var l = "", u; (u = gl.exec(o)) !== null; )
    l += "-" + u[1];
  var f = F1(o) + l;
  return {
    name: f,
    styles: o,
    next: $t
  };
}
var D1 = !0;
function Xo(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var fs = function(t, n, r) {
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
  D1 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, ds = function(t, n, r) {
  fs(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function vl(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function pl(e, t, n) {
  var r = [], o = Xo(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var ms = function(t) {
  var n = wd(t);
  n.sheet.speedy = function(s) {
    this.isSpeedy = s;
  }, n.compat = !0;
  var r = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var f = Ht(l, n.registered, void 0);
    return ds(n, f, !1), n.key + "-" + f.name;
  }, o = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var f = Ht(l, n.registered), d = "animation-" + f.name;
    return vl(n, {
      name: f.name,
      styles: "@keyframes " + d + "{" + f.styles + "}"
    }), d;
  }, a = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    var f = Ht(l, n.registered);
    vl(n, f);
  }, i = function() {
    for (var c = arguments.length, l = new Array(c), u = 0; u < c; u++)
      l[u] = arguments[u];
    return pl(n.registered, r, V1(l));
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
    getRegisteredStyles: Xo.bind(null, n.registered),
    merge: pl.bind(null, n.registered, r)
  };
}, V1 = function e(t) {
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
}, Mt = ms({
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
var B1 = Mt.cache, H1 = /* @__PURE__ */ (function() {
  function e() {
    Le(this, e), T(this, "_cacheList", [B1]);
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
})(), hl = typeof document < "u", Od = function(t, n) {
  return "".concat(t, "-").concat(n);
}, z1 = function(t, n, r, o) {
  var a = o.hashPriority;
  fs(t, n, r);
  var i = ".".concat(Od(t.key, n.name)), s = a === "low" ? ":where(".concat(i, ")") : i;
  if (t.inserted[n.name] === void 0) {
    var c = "", l = n;
    do {
      var u = t.insert(n === l ? s : "", l, t.sheet, !0);
      !hl && u !== void 0 && (c += u), l = l.next;
    } while (l !== void 0);
    if (!hl && c.length !== 0)
      return c;
  }
}, gs = function(t) {
  return X(t) === "object" && "styles" in t && "name" in t && "toString" in t;
}, W1 = function e(t) {
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
}, G1 = function(t, n, r) {
  var o = [], a = Xo(t, o, r);
  return o.length < 2 ? r : a + n(o);
}, q1 = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = Ht(o, t.registered, void 0);
    return z1(t, i, !1, n), Od(t.key, i.name);
  };
}, U1 = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o.map(function(s) {
      return gs(s) ? n(s) : s;
    });
    return G1(t.registered, n, W1(i));
  };
}, Pd = function(t, n) {
  var r = q1(t, {
    hashPriority: n.hashPriority || "high",
    label: n.label
  }), o = U1(t, r);
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
}, X1 = "acss", Y1 = function(t) {
  return /* @__PURE__ */ Qt(t);
}, Gr = { exports: {} }, de = {};
var yl;
function K1() {
  if (yl) return de;
  yl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
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
            case f:
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
  return de.AsyncMode = c, de.ConcurrentMode = l, de.ContextConsumer = s, de.ContextProvider = i, de.Element = t, de.ForwardRef = u, de.Fragment = r, de.Lazy = v, de.Memo = h, de.Portal = n, de.Profiler = a, de.StrictMode = o, de.Suspense = f, de.isAsyncMode = function(b) {
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
    return x(b) === f;
  }, de.isValidElementType = function(b) {
    return typeof b == "string" || typeof b == "function" || b === r || b === l || b === a || b === o || b === f || b === d || typeof b == "object" && b !== null && (b.$$typeof === v || b.$$typeof === h || b.$$typeof === i || b.$$typeof === s || b.$$typeof === u || b.$$typeof === m || b.$$typeof === C || b.$$typeof === y || b.$$typeof === p);
  }, de.typeOf = x, de;
}
var me = {};
var bl;
function Q1() {
  return bl || (bl = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, d = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, m = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(V) {
      return typeof V == "string" || typeof V == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      V === r || V === l || V === a || V === o || V === f || V === d || typeof V == "object" && V !== null && (V.$$typeof === v || V.$$typeof === h || V.$$typeof === i || V.$$typeof === s || V.$$typeof === u || V.$$typeof === m || V.$$typeof === C || V.$$typeof === y || V.$$typeof === p);
    }
    function S(V) {
      if (typeof V == "object" && V !== null) {
        var pe = V.$$typeof;
        switch (pe) {
          case t:
            var D = V.type;
            switch (D) {
              case c:
              case l:
              case r:
              case a:
              case o:
              case f:
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
                    return pe;
                }
            }
          case n:
            return pe;
        }
      }
    }
    var b = c, w = l, E = s, $ = i, O = t, P = u, _ = r, I = v, F = h, M = n, A = a, j = o, k = f, W = !1;
    function B(V) {
      return W || (W = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), Z(V) || S(V) === c;
    }
    function Z(V) {
      return S(V) === l;
    }
    function J(V) {
      return S(V) === s;
    }
    function Q(V) {
      return S(V) === i;
    }
    function K(V) {
      return typeof V == "object" && V !== null && V.$$typeof === t;
    }
    function Y(V) {
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
    function Ce(V) {
      return S(V) === a;
    }
    function Se(V) {
      return S(V) === o;
    }
    function Ee(V) {
      return S(V) === f;
    }
    me.AsyncMode = b, me.ConcurrentMode = w, me.ContextConsumer = E, me.ContextProvider = $, me.Element = O, me.ForwardRef = P, me.Fragment = _, me.Lazy = I, me.Memo = F, me.Portal = M, me.Profiler = A, me.StrictMode = j, me.Suspense = k, me.isAsyncMode = B, me.isConcurrentMode = Z, me.isContextConsumer = J, me.isContextProvider = Q, me.isElement = K, me.isForwardRef = Y, me.isFragment = G, me.isLazy = q, me.isMemo = oe, me.isPortal = Pe, me.isProfiler = Ce, me.isStrictMode = Se, me.isSuspense = Ee, me.isValidElementType = x, me.typeOf = S;
  })()), me;
}
var Cl;
function Z1() {
  return Cl || (Cl = 1, process.env.NODE_ENV === "production" ? Gr.exports = K1() : Gr.exports = Q1()), Gr.exports;
}
var $a, xl;
function J1() {
  if (xl) return $a;
  xl = 1;
  var e = Z1(), t = {
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
  var s = Object.defineProperty, c = Object.getOwnPropertyNames, l = Object.getOwnPropertySymbols, u = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, d = Object.prototype;
  function h(v, p, m) {
    if (typeof p != "string") {
      if (d) {
        var C = f(p);
        C && C !== d && h(v, C, m);
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
  return $a = h, $a;
}
J1();
var ex = function(t) {
  return t();
}, Nd = g.useInsertionEffect ? g.useInsertionEffect : !1, tx = Nd || ex, Sl = Nd || g.useLayoutEffect, Td = /* @__PURE__ */ g.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ wd({
    key: "css"
  }) : null
);
Td.Provider;
var Rd = function(t) {
  return /* @__PURE__ */ Mn(function(n, r) {
    var o = ae(Td);
    return t(n, o, r);
  });
}, fr = /* @__PURE__ */ g.createContext({}), nx = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return le({}, t, n);
}, rx = /* @__PURE__ */ ul(function(e) {
  return ul(function(t) {
    return nx(e, t);
  });
}), ox = function(t) {
  var n = g.useContext(fr);
  return t.theme !== n && (n = rx(n)(t.theme)), /* @__PURE__ */ g.createElement(fr.Provider, {
    value: n
  }, t.children);
}, vs = {}.hasOwnProperty, Pi = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ax = function(t, n) {
  var r = {};
  for (var o in n)
    vs.call(n, o) && (r[o] = n[o]);
  return r[Pi] = t, r;
}, ix = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return fs(n, r, o), tx(function() {
    return ds(n, r, o);
  }), null;
}, sx = /* @__PURE__ */ Rd(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[Pi], a = [r], i = "";
  typeof e.className == "string" ? i = Xo(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = Ht(a, void 0, g.useContext(fr));
  i += t.key + "-" + s.name;
  var c = {};
  for (var l in e)
    vs.call(e, l) && l !== "css" && l !== Pi && (c[l] = e[l]);
  return c.className = i, n && (c.ref = n), /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(ix, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ g.createElement(o, c));
}), cx = sx, El = function(t, n) {
  var r = arguments;
  if (n == null || !vs.call(n, "css"))
    return g.createElement.apply(void 0, r);
  var o = r.length, a = new Array(o);
  a[0] = cx, a[1] = ax(t, n);
  for (var i = 2; i < o; i++)
    a[i] = r[i];
  return g.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(El || (El = {}));
var lx = /* @__PURE__ */ Rd(function(e, t) {
  var n = e.styles, r = Ht([n], void 0, g.useContext(fr)), o = g.useRef();
  return Sl(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, c = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), c !== null && (s = !0, c.setAttribute("data-emotion", a), i.hydrate([c])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), Sl(function() {
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
}), ux = function(t) {
  return function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return /* @__PURE__ */ dr(function(a) {
      var i = t();
      return /* @__PURE__ */ U(lx, {
        styles: Ht(r, void 0, N(N({}, a), {}, {
          theme: i
        }))
      });
    });
  };
}, fx = function(t) {
  return function(n) {
    var r = t(n);
    return function(o) {
      var a = r(o), i = a.styles;
      return i;
    };
  };
}, dx = ["children", "prefix", "speedy", "getStyleManager", "container", "nonce", "insertionPoint", "stylisPlugins", "linters"], mx = function(t) {
  return /* @__PURE__ */ dr(function(n) {
    var r = n.children, o = n.prefix, a = n.speedy, i = n.getStyleManager, s = n.container, c = n.nonce, l = n.insertionPoint, u = n.stylisPlugins, f = n.linters, d = We(n, dx), h = ae(t), v = o ?? h.sheet.key, p = s ?? h.sheet.container, m = a ?? h.sheet.isSpeedy, C = Ae(function() {
      var x = process.env.NODE_ENV === "development", S = ms({
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
    var y = /* @__PURE__ */ U(t.Provider, {
      value: C,
      children: r
    });
    return Object.keys(d).length || p ? (
      // @ts-ignore
      /* @__PURE__ */ U(Om, N(N({
        linters: f,
        container: p
      }, d), {}, {
        children: y
      }))
    ) : y;
  });
}, gx = function(t) {
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
}, vx = function(t) {
  return Object.fromEntries(Object.entries(t).map(function(n) {
    var r = L(n, 2), o = r[0], a = r[1];
    return [o, a.styles];
  }));
}, ps = function() {
  var t = wi.useToken(), n = t.token;
  return n;
}, hn = function(t) {
  return typeof window < "u" ? matchMedia && matchMedia("(prefers-color-scheme: ".concat(t, ")")) : {
    matches: !1
  };
}, Oa, _d = /* @__PURE__ */ Qt({
  appearance: "light",
  setAppearance: function() {
  },
  isDarkMode: !1,
  themeMode: "light",
  setThemeMode: function() {
  },
  browserPrefers: (Oa = hn("dark")) !== null && Oa !== void 0 && Oa.matches ? "dark" : "light"
}), Yo = function() {
  return ae(_d);
}, px = function() {
  var t = ps(), n = Yo(), r = n.appearance, o = n.isDarkMode;
  return Ae(function() {
    return vx(gx({
      token: t,
      css: xr
    }));
  }, [t, r, o]);
}, Md = function() {
  var t = ps(), n = px();
  return Ae(function() {
    return N(N({}, t), {}, {
      stylish: n
    });
  }, [t, n]);
}, hx = function(t) {
  return N(N({}, t), {}, {
    mobile: t.xs,
    tablet: t.md,
    laptop: t.lg,
    desktop: t.xxl
  });
}, yx = function() {
  var t = ps(), n = {
    xs: "@media (max-width: ".concat(t.screenXSMax, "px)"),
    sm: "@media (max-width: ".concat(t.screenSMMax, "px)"),
    md: "@media (max-width: ".concat(t.screenMDMax, "px)"),
    lg: "@media (max-width: ".concat(t.screenLGMax, "px)"),
    xl: "@media (max-width: ".concat(t.screenXLMax, "px)"),
    xxl: "@media (min-width: ".concat(t.screenXXLMin, "px)")
  };
  return Ae(function() {
    return hx(n);
  }, [t]);
}, bx = function(t, n) {
  return Object.entries(t).map(function(r) {
    var o = L(r, 2), a = o[0], i = o[1], s = i;
    return gs(i) || (s = xr(i)), n[a] ? "".concat(n[a], " {").concat(s.styles, "}") : "";
  }).join("");
}, Cx = ["stylish", "appearance", "isDarkMode", "prefixCls", "iconPrefixCls"], xx = ["prefixCls", "iconPrefixCls"], Sx = function(t) {
  var n = t.hashPriority, r = t.useTheme, o = t.EmotionContext;
  return function(a, i) {
    var s = i?.__BABEL_FILE_NAME__, c = !!s;
    return function(l) {
      var u = r(), f = ae(o), d = f.cache, h = Pd(d, {
        hashPriority: i?.hashPriority || n,
        label: i?.label
      }), v = h.cx, p = h.css, m = yx(), C = Ae(function() {
        var y;
        if (a instanceof Function) {
          var x = u.stylish, S = u.appearance, b = u.isDarkMode, w = u.prefixCls, E = u.iconPrefixCls, $ = We(u, Cx), O = function(_) {
            return bx(_, m);
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
        return X(y) === "object" && (gs(y) ? y = p(y) : y = Object.fromEntries(Object.entries(y).map(function(P) {
          var _ = L(P, 2), I = _[0], F = _[1], M = c ? "".concat(s, "-").concat(I) : void 0;
          return X(F) === "object" ? c ? [I, p(F, "label:".concat(M))] : [I, p(F)] : [I, F];
        }))), y;
      }, [l, u]);
      return Ae(function() {
        var y = u.prefixCls, x = u.iconPrefixCls, S = We(u, xx);
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
}, wl = function(t) {
  if (t.ThemeProvider) return t.ThemeProvider;
  var n = t.ThemeContext;
  return function(r) {
    return /* @__PURE__ */ U(n.Provider, {
      value: r.theme,
      children: r.children
    });
  };
}, Ex = ox, Id = fr, Fd = /* @__PURE__ */ dr(function(e) {
  var t = e.children, n = e.theme, r = e.prefixCls, o = e.getStaticInstance, a = e.staticInstanceConfig, i = Yo(), s = i.appearance, c = i.isDarkMode, l = cd.useMessage(a?.message), u = L(l, 2), f = u[0], d = u[1], h = fd.useNotification(a?.notification), v = L(h, 2), p = v[0], m = v[1], C = st.useModal(), y = L(C, 2), x = y[0], S = y[1];
  Ye(function() {
    o?.({
      message: f,
      modal: x,
      notification: p
    });
  }, []);
  var b = Ae(function() {
    var w = c ? wi.darkAlgorithm : wi.defaultAlgorithm, E = n;
    if (typeof n == "function" && (E = n(s)), !E)
      return {
        algorithm: w
      };
    var $ = E.algorithm ? E.algorithm instanceof Array ? E.algorithm : [E.algorithm] : [];
    return N(N({}, E), {}, {
      algorithm: E.algorithm ? [w].concat(H($)) : w
    });
  }, [n, c]);
  return /* @__PURE__ */ Rt(tt, {
    prefixCls: r,
    theme: b,
    children: [d, m, S, t]
  });
});
Fd.displayName = "AntdProvider";
function wx(e, t) {
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
function $x(e, t) {
  return Ox(e) || wx(e, t) || Px(e, t) || Nx();
}
function Ox(e) {
  if (Array.isArray(e)) return e;
}
function Px(e, t) {
  if (e) {
    if (typeof e == "string") return $l(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $l(e, t);
  }
}
function $l(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Nx() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ol(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, s = R.useState(function() {
    return o !== void 0 ? o : r !== void 0 ? typeof r == "function" ? r() : r : e;
  }), c = $x(s, 2), l = c[0], u = c[1], f = o !== void 0 ? o : l;
  i && (f = i(f));
  function d(h) {
    u(h), f !== h && a && a(h, f);
  }
  return [f, d];
}
var Pa = function(t) {
  typeof ws == "function" ? ws(t) : t();
}, Lt, Tx = function(t) {
  var n = t.themeMode, r = t.setAppearance, o = t.setBrowserPrefers, a = function() {
    Pa(function() {
      hn("dark").matches ? r("dark") : r("light");
    });
  }, i = function() {
    Pa(function() {
      hn("dark").matches ? o("dark") : o("light");
    });
  };
  return Na(function() {
    if (n !== "auto") {
      Pa(function() {
        r(n);
      });
      return;
    }
    return setTimeout(a, 1), Lt || (Lt = hn("dark")), Lt.addEventListener("change", a), function() {
      Lt.removeEventListener("change", a);
    };
  }, [n]), Na(function() {
    return Lt || (Lt = hn("dark")), Lt.addEventListener("change", i), function() {
      Lt.removeEventListener("change", i);
    };
  }, []), null;
}, Ad = /* @__PURE__ */ dr(function(e) {
  var t, n = e.children, r = e.appearance, o = e.defaultAppearance, a = e.onAppearanceChange, i = e.themeMode, s = e.defaultThemeMode, c = e.onThemeModeChange, l = e.useTheme, u = l(), f = u.appearance, d = u.themeMode, h = Ol("light", {
    value: i,
    defaultValue: s ?? d,
    onChange: function(P) {
      return c?.(P);
    }
  }), v = L(h, 2), p = v[0], m = v[1], C = Ol("light", {
    value: r,
    defaultValue: o ?? f,
    onChange: function(P) {
      return a?.(P);
    }
  }), y = L(C, 2), x = y[0], S = y[1], b = Zt((t = hn("dark")) !== null && t !== void 0 && t.matches ? "dark" : "light"), w = L(b, 2), E = w[0], $ = w[1];
  return /* @__PURE__ */ Rt(_d.Provider, {
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
      typeof window < "u" && /* @__PURE__ */ U(Tx, {
        themeMode: p,
        setAppearance: S,
        setBrowserPrefers: $
      }),
      n
    ]
  });
});
Ad.displayName = "ThemeSwitcher";
var Rx = ["stylish"], _x = function(t) {
  var n = t.children, r = t.customToken, o = t.defaultCustomToken, a = t.customStylish, i = t.prefixCls, s = t.StyledThemeProvider, c = Yo(), l = c.appearance, u = c.isDarkMode, f = Md(), d = f.stylish, h = We(f, Rx), v = Ae(function() {
    return o ? o instanceof Function ? o({
      token: h,
      appearance: l,
      isDarkMode: u
    }) : o : {};
  }, [o, h, l]), p = Ae(function() {
    return r instanceof Function ? N(N({}, v), r({
      token: h,
      appearance: l,
      isDarkMode: u
    })) : N(N({}, v), r);
  }, [v, r, h, l]), m = Ae(function() {
    return a ? a({
      token: N(N({}, h), p),
      stylish: d,
      appearance: l,
      isDarkMode: u,
      css: xr
    }) : {};
  }, [a, h, p, d, l]), C = Ae(function() {
    return N(N({}, m), d);
  }, [m, d]), y = N(N(N(N({}, h), p), {}, {
    stylish: C
  }, c), {}, {
    prefixCls: i
  });
  return /* @__PURE__ */ U(s, {
    theme: y,
    children: n
  });
}, Mx = function(t) {
  var n = t.styledConfig ? wl(t.styledConfig) : void 0, r = t.StyleEngineContext;
  return /* @__PURE__ */ dr(function(o) {
    var a = o.children, i = o.customToken, s = o.customStylish, c = o.theme, l = o.getStaticInstance, u = o.prefixCls, f = o.staticInstanceConfig, d = o.appearance, h = o.defaultAppearance, v = o.onAppearanceChange, p = o.themeMode, m = o.defaultThemeMode, C = o.onThemeModeChange, y = o.styled, x = ae(r), S = x.prefixCls, b = x.StyledThemeContext, w = x.CustomThemeContext, E = ae(w), $ = y ? wl(y) : n || Ex, O = u || S;
    return /* @__PURE__ */ U(r.Provider, {
      value: {
        prefixCls: O,
        StyledThemeContext: y?.ThemeContext || b || Id,
        CustomThemeContext: w
      },
      children: /* @__PURE__ */ U(Ad, {
        themeMode: p,
        defaultThemeMode: m,
        onThemeModeChange: C,
        defaultAppearance: h,
        appearance: d,
        onAppearanceChange: v,
        useTheme: t.useTheme,
        children: /* @__PURE__ */ U(Fd, {
          prefixCls: O,
          staticInstanceConfig: f,
          theme: c,
          getStaticInstance: l,
          children: /* @__PURE__ */ U(_x, {
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
}, Ix = function(t) {
  return function() {
    var n = t.StyleEngineContext, r = ae(n), o = r.StyledThemeContext, a = r.CustomThemeContext, i = r.prefixCls, s = Md(), c = Yo(), l = ae(a), u = ae(o ?? Id) || {}, f = ae(tt.ConfigContext), d = f.iconPrefixCls, h = f.getPrefixCls, v = h(), p = i && i !== "ant" ? i : v, m = Ae(function() {
      return N(N(N(N({}, s), c), l), {}, {
        prefixCls: p,
        iconPrefixCls: d
      });
    }, [s, c, l, p, d]);
    return !u || Object.keys(u).length === 0 ? m : N(N({}, u), {}, {
      prefixCls: p,
      iconPrefixCls: d
    });
  };
}, jd = new H1();
typeof global < "u" && (global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__ = jd);
var Fx = function(t) {
  var n, r, o, a = N(N({}, t), {}, {
    key: (n = t.key) !== null && n !== void 0 ? n : "zcss",
    // 新建的 instance key 如果不传，则设为 zcss- 使得该 key 和 acss 不一样
    speedy: (r = t.speedy) !== null && r !== void 0 ? r : !1
  }), i = ms({
    key: a.key,
    speedy: a.speedy,
    container: a.container
  }), s = Y1(i), c = mx(s);
  i.cache = jd.add(i.cache);
  var l = /* @__PURE__ */ Qt(a.customToken ? a.customToken : {}), u = (o = a.styled) === null || o === void 0 ? void 0 : o.ThemeContext, f = /* @__PURE__ */ Qt({
    CustomThemeContext: l,
    StyledThemeContext: u,
    prefixCls: a?.prefixCls,
    iconPrefixCls: a?.iconPrefixCls
  }), d = Ix({
    StyleEngineContext: f
  }), h = Sx({
    hashPriority: a.hashPriority,
    useTheme: d,
    EmotionContext: s
  }), v = ux(d), p = fx(h), m = Mx({
    styledConfig: a.styled,
    StyleEngineContext: f,
    useTheme: d
  });
  m.displayName = "AntdStyleThemeProvider";
  var C = Pd(i.cache, {
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
    useTheme: d,
    StyleProvider: c,
    ThemeProvider: m
  };
}, Ax = Fx({
  key: X1,
  speedy: !1
}), jx = Ax.createStyles;
const kx = jx(() => ({
  content: {
    padding: "32px !important",
    borderRadius: "20px !important"
  }
})), Lx = Mn(
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
  }, f) => {
    const { styles: d } = kx(), h = {
      content: d.content
    };
    return /* @__PURE__ */ U(
      st,
      {
        open: e || !1,
        title: /* @__PURE__ */ U("span", { className: "luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]", children: r }),
        closable: t,
        maskClosable: i,
        footer: null,
        keyboard: s,
        centered: !0,
        width: "100%",
        className: ve("luca-modal", c),
        style: l ? {
          maxWidth: typeof l == "number" ? `${l}px` : l,
          width: "100%"
        } : void 0,
        modalRender: (v) => /* @__PURE__ */ U("div", { ref: f, className: "luca-modal-wrapper", children: v }),
        classNames: h,
        children: /* @__PURE__ */ Rt("div", { className: "luca-flex luca-flex-col luca-mt-6", children: [
          o && /* @__PURE__ */ U("p", { className: "luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0", children: o }),
          a && /* @__PURE__ */ U("p", { className: "luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0 luca-mb-6", children: a }),
          u,
          n && /* @__PURE__ */ U("div", { className: "luca-flex luca-justify-end luca-gap-2", children: n.map((v) => /* @__PURE__ */ U(gd, { variant: v.variant, onClick: v.onClick, children: v.text })) })
        ] })
      }
    );
  }
);
Lx.displayName = "Modal";
var Dx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "arrow-left", theme: "outlined" }, Vx = function(t, n) {
  return /* @__PURE__ */ g.createElement(Ct, le({}, t, {
    ref: n,
    icon: Dx
  }));
}, kd = /* @__PURE__ */ g.forwardRef(Vx);
process.env.NODE_ENV !== "production" && (kd.displayName = "ArrowLeftOutlined");
const Bx = ({
  setSearchInput: e,
  searchInput: t,
  personalStyles: n,
  className: r,
  inputClassName: o
}) => {
  const a = (l) => {
    e?.(l.target.value);
  }, i = ve(
    "luca-flex luca-w-full luca-items-center luca-justify-start",
    n === "reading" && "luca-h-[50px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    n === "examsGenerator" && "luca-h-10 luca-gap-2 luca-rounded-lg luca-border luca-border-[#e5e7eb] luca-bg-[#f9fafb] luca-px-4 luca-py-2",
    !n && "luca-min-h-[40px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    r
  ), s = ve(
    "luca-w-full luca-border-none luca-bg-transparent luca-outline-none",
    n === "examsGenerator" ? "luca-flex-1 luca-text-sm luca-text-[#111827] placeholder:luca-text-[#9ca3af]" : "luca-pl-2.5 luca-text-base",
    o
  ), c = ve(
    n === "reading" && "luca-h-[18px] luca-w-[18px]",
    n === "examsGenerator" && "luca-h-4 luca-w-4 luca-flex-shrink-0 luca-opacity-50",
    !n && "luca-h-5 luca-w-5"
  );
  return /* @__PURE__ */ Rt("div", { className: i, children: [
    /* @__PURE__ */ U(
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
    /* @__PURE__ */ U(sd, { className: c })
  ] });
};
Bx.displayName = "SearchBar";
const hs = R.forwardRef(
  ({ className: e, icon: t, ...n }, r) => /* @__PURE__ */ U(
    "button",
    {
      ref: r,
      type: "button",
      className: ve(
        "luca-flex luca-h-8 luca-w-8 luca-items-center luca-justify-center luca-rounded-lg luca-border luca-border-gray-200 luca-bg-white luca-p-1 luca-text-[#3843D0] luca-transition-colors hover:luca-border-gray-300 hover:luca-bg-gray-50",
        e
      ),
      ...n,
      children: t || /* @__PURE__ */ U(kd, {})
    }
  )
);
hs.displayName = "BreadcrumbBackButton";
const Ld = R.forwardRef(
  ({ className: e, children: t, href: n, isCurrentPage: r = !1, icon: o, ...a }, i) => {
    const s = /* @__PURE__ */ Rt("div", { className: "luca-flex luca-h-6 luca-items-center luca-gap-1 luca-px-1", children: [
      o && /* @__PURE__ */ U("span", { className: "luca-text-gray-500", children: o }),
      /* @__PURE__ */ U(
        "span",
        {
          className: ve(
            "luca-text-base luca-font-normal luca-leading-5",
            r ? "luca-text-gray-500" : "luca-text-[#3843D0] hover:luca-underline"
          ),
          children: t
        }
      )
    ] });
    return /* @__PURE__ */ U(
      "li",
      {
        ref: i,
        className: ve(
          "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-md",
          e
        ),
        ...a,
        children: n && !r ? /* @__PURE__ */ U("a", { href: n, className: "luca-inline-flex", children: s }) : s
      }
    );
  }
);
Ld.displayName = "BreadcrumbItem";
const ys = R.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ U(
  "li",
  {
    ref: r,
    className: ve("luca-inline-flex luca-items-center", e),
    role: "presentation",
    "aria-hidden": "true",
    ...n,
    children: /* @__PURE__ */ U("span", { className: "luca-text-sm luca-font-medium luca-leading-5 luca-text-gray-500", children: t || "/" })
  }
));
ys.displayName = "BreadcrumbSeparator";
const Sr = R.forwardRef(
  ({ className: e, children: t, separator: n = /* @__PURE__ */ U(ys, {}), ...r }, o) => {
    const a = R.Children.toArray(t);
    return /* @__PURE__ */ U(
      "nav",
      {
        ref: o,
        "aria-label": "Breadcrumb",
        className: ve("luca-flex luca-items-center luca-gap-1", e),
        ...r,
        children: /* @__PURE__ */ U("ol", { className: "luca-flex luca-items-center luca-gap-1", children: a.map((i, s) => {
          const c = s === a.length - 1, l = R.isValidElement(i) && i.type === hs, u = !c && !l;
          return /* @__PURE__ */ Rt(R.Fragment, { children: [
            i,
            u && n
          ] }, s);
        }) })
      }
    );
  }
);
Sr.displayName = "Breadcrumb";
Sr.Item = Ld;
Sr.Separator = ys;
Sr.BackButton = hs;
const Ux = Sr;
tt.config({
  theme: {
    token: {
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    }
  }
});
export {
  qx as Badge,
  Ux as Breadcrumb,
  gd as Button,
  QC as ButtonIcon,
  zC as Card,
  UC as CardContent,
  qC as CardDescription,
  WC as CardHeader,
  md as CardIcon,
  GC as CardTitle,
  ss as Layout,
  pd as LayoutContent,
  vd as LayoutHeader,
  Lx as Modal,
  Bx as SearchBar,
  o1 as TabList,
  ve as cn
};

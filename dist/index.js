import { jsxs as je, jsx as B, Fragment as ra } from "react/jsx-runtime";
import * as d from "react";
import M, { version as v0, isValidElement as g0, useContext as Ge, createContext as Rr, useRef as fe, useLayoutEffect as Ns, useEffect as yt, useState as Ht, forwardRef as xn, useMemo as Ot, Children as p0, useCallback as Er, useImperativeHandle as Ia, cloneElement as h0, memo as Ma, startTransition as Xu } from "react";
import * as Am from "react-dom";
import Yu, { createPortal as jm, unstable_batchedUpdates as b0, flushSync as Rs } from "react-dom";
function y0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gl = { exports: {} };
var Zu;
function C0() {
  return Zu || (Zu = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function n() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var l = arguments[i];
          l && (a = o(a, r(l)));
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
        for (var l in a)
          t.call(a, l) && a[l] && (i = o(i, l));
        return i;
      }
      function o(a, i) {
        return i ? a ? a + " " + i : a + i : a;
      }
      e.exports ? (n.default = n, e.exports = n) : window.classNames = n;
    })();
  })(Gl)), Gl.exports;
}
var x0 = C0();
const U = /* @__PURE__ */ y0(x0);
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
    }
    return e;
  }, ve.apply(null, arguments);
}
function Se(e) {
  "@babel/helpers - typeof";
  return Se = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Se(e);
}
var S0 = Symbol.for("react.element"), w0 = Symbol.for("react.transitional.element"), $0 = Symbol.for("react.fragment");
function Fm(e) {
  return (
    // Base object type
    e && Se(e) === "object" && // React Element type
    (e.$$typeof === S0 || e.$$typeof === w0) && // React Fragment type
    e.type === $0
  );
}
function Ir(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [];
  return M.Children.forEach(e, function(r) {
    r == null && !t.keepEmpty || (Array.isArray(r) ? n = n.concat(Ir(r)) : Fm(r) && r.props ? n = n.concat(Ir(r.props.children, t)) : n.push(r));
  }), n;
}
var Is = {}, Lc = [], E0 = function(t) {
  Lc.push(t);
};
function Mr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Lc.reduce(function(r, o) {
      return o(r ?? "", "warning");
    }, t);
    n && console.error("Warning: ".concat(n));
  }
}
function O0(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var n = Lc.reduce(function(r, o) {
      return o(r ?? "", "note");
    }, t);
    n && console.warn("Note: ".concat(n));
  }
}
function Bm() {
  Is = {};
}
function km(e, t, n) {
  !t && !Is[n] && (e(!1, n), Is[n] = !0);
}
function rt(e, t) {
  km(Mr, e, t);
}
function P0(e, t) {
  km(O0, e, t);
}
rt.preMessage = E0;
rt.resetWarned = Bm;
rt.noteOnce = P0;
function N0(e, t) {
  if (Se(e) != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (Se(r) != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Dm(e) {
  var t = N0(e, "string");
  return Se(t) == "symbol" ? t : t + "";
}
function j(e, t, n) {
  return (t = Dm(t)) in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function Qu(e, t) {
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
    t % 2 ? Qu(Object(n), !0).forEach(function(r) {
      j(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qu(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ua(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function R0(e) {
  return e && Se(e) === "object" && ua(e.nativeElement) ? e.nativeElement : ua(e) ? e : null;
}
function hi(e) {
  var t = R0(e);
  if (t)
    return t;
  if (e instanceof M.Component) {
    var n;
    return (n = Yu.findDOMNode) === null || n === void 0 ? void 0 : n.call(Yu, e);
  }
  return null;
}
var ti = { exports: {} }, at = {};
var Ju;
function I0() {
  if (Ju) return at;
  Ju = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function p(v) {
    if (typeof v == "object" && v !== null) {
      var C = v.$$typeof;
      switch (C) {
        case e:
          switch (v = v.type, v) {
            case n:
            case o:
            case r:
            case c:
            case u:
              return v;
            default:
              switch (v = v && v.$$typeof, v) {
                case l:
                case i:
                case s:
                case m:
                case f:
                case a:
                  return v;
                default:
                  return C;
              }
          }
        case t:
          return C;
      }
    }
  }
  return at.ContextConsumer = i, at.ContextProvider = a, at.Element = e, at.ForwardRef = s, at.Fragment = n, at.Lazy = m, at.Memo = f, at.Portal = t, at.Profiler = o, at.StrictMode = r, at.Suspense = c, at.SuspenseList = u, at.isAsyncMode = function() {
    return !1;
  }, at.isConcurrentMode = function() {
    return !1;
  }, at.isContextConsumer = function(v) {
    return p(v) === i;
  }, at.isContextProvider = function(v) {
    return p(v) === a;
  }, at.isElement = function(v) {
    return typeof v == "object" && v !== null && v.$$typeof === e;
  }, at.isForwardRef = function(v) {
    return p(v) === s;
  }, at.isFragment = function(v) {
    return p(v) === n;
  }, at.isLazy = function(v) {
    return p(v) === m;
  }, at.isMemo = function(v) {
    return p(v) === f;
  }, at.isPortal = function(v) {
    return p(v) === t;
  }, at.isProfiler = function(v) {
    return p(v) === o;
  }, at.isStrictMode = function(v) {
    return p(v) === r;
  }, at.isSuspense = function(v) {
    return p(v) === c;
  }, at.isSuspenseList = function(v) {
    return p(v) === u;
  }, at.isValidElementType = function(v) {
    return typeof v == "string" || typeof v == "function" || v === n || v === o || v === r || v === c || v === u || v === h || typeof v == "object" && v !== null && (v.$$typeof === m || v.$$typeof === f || v.$$typeof === a || v.$$typeof === i || v.$$typeof === s || v.$$typeof === g || v.getModuleId !== void 0);
  }, at.typeOf = p, at;
}
var it = {};
var ed;
function M0() {
  return ed || (ed = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), r = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.server_context"), s = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), f = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), g = !1, p = !1, v = !1, C = !1, b = !1, x;
    x = Symbol.for("react.module.reference");
    function $(Z) {
      return !!(typeof Z == "string" || typeof Z == "function" || Z === n || Z === o || b || Z === r || Z === c || Z === u || C || Z === h || g || p || v || typeof Z == "object" && Z !== null && (Z.$$typeof === m || Z.$$typeof === f || Z.$$typeof === a || Z.$$typeof === i || Z.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      Z.$$typeof === x || Z.getModuleId !== void 0));
    }
    function y(Z) {
      if (typeof Z == "object" && Z !== null) {
        var oe = Z.$$typeof;
        switch (oe) {
          case e:
            var ne = Z.type;
            switch (ne) {
              case n:
              case o:
              case r:
              case c:
              case u:
                return ne;
              default:
                var me = ne && ne.$$typeof;
                switch (me) {
                  case l:
                  case i:
                  case s:
                  case m:
                  case f:
                  case a:
                    return me;
                  default:
                    return oe;
                }
            }
          case t:
            return oe;
        }
      }
    }
    var S = i, w = a, E = e, O = s, P = n, N = m, R = f, _ = t, I = o, k = r, A = c, D = u, F = !1, q = !1;
    function K(Z) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(Z) {
      return q || (q = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function W(Z) {
      return y(Z) === i;
    }
    function L(Z) {
      return y(Z) === a;
    }
    function z(Z) {
      return typeof Z == "object" && Z !== null && Z.$$typeof === e;
    }
    function H(Z) {
      return y(Z) === s;
    }
    function V(Z) {
      return y(Z) === n;
    }
    function te(Z) {
      return y(Z) === m;
    }
    function Y(Z) {
      return y(Z) === f;
    }
    function J(Z) {
      return y(Z) === t;
    }
    function ae(Z) {
      return y(Z) === o;
    }
    function le(Z) {
      return y(Z) === r;
    }
    function X(Z) {
      return y(Z) === c;
    }
    function se(Z) {
      return y(Z) === u;
    }
    it.ContextConsumer = S, it.ContextProvider = w, it.Element = E, it.ForwardRef = O, it.Fragment = P, it.Lazy = N, it.Memo = R, it.Portal = _, it.Profiler = I, it.StrictMode = k, it.Suspense = A, it.SuspenseList = D, it.isAsyncMode = K, it.isConcurrentMode = Q, it.isContextConsumer = W, it.isContextProvider = L, it.isElement = z, it.isForwardRef = H, it.isFragment = V, it.isLazy = te, it.isMemo = Y, it.isPortal = J, it.isProfiler = ae, it.isStrictMode = le, it.isSuspense = X, it.isSuspenseList = se, it.isValidElementType = $, it.typeOf = y;
  })()), it;
}
var td;
function T0() {
  return td || (td = 1, process.env.NODE_ENV === "production" ? ti.exports = I0() : ti.exports = M0()), ti.exports;
}
var ql = T0();
function Ta(e, t, n) {
  var r = d.useRef({});
  return (!("value" in r.current) || n(r.current.condition, t)) && (r.current.value = e(), r.current.condition = t), r.current.value;
}
var _0 = Number(v0.split(".")[0]), zc = function(t, n) {
  typeof t == "function" ? t(n) : Se(t) === "object" && t && "current" in t && (t.current = n);
}, Jn = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  var o = n.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    n.forEach(function(i) {
      zc(i, a);
    });
  };
}, Qr = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return Ta(function() {
    return Jn.apply(void 0, n);
  }, n, function(o, a) {
    return o.length !== a.length || o.every(function(i, l) {
      return i !== a[l];
    });
  });
}, _r = function(t) {
  var n, r;
  if (!t)
    return !1;
  if (Hc(t) && _0 >= 19)
    return !0;
  var o = ql.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((n = o.prototype) !== null && n !== void 0 && n.render) && o.$$typeof !== ql.ForwardRef || typeof t == "function" && !((r = t.prototype) !== null && r !== void 0 && r.render) && t.$$typeof !== ql.ForwardRef);
};
function Hc(e) {
  return /* @__PURE__ */ g0(e) && !Fm(e);
}
var A0 = function(t) {
  return Hc(t) && _r(t);
}, Jr = function(t) {
  if (t && Hc(t)) {
    var n = t;
    return n.props.propertyIsEnumerable("ref") ? n.props.ref : n.ref;
  }
  return null;
}, Ms = /* @__PURE__ */ d.createContext(null);
function j0(e) {
  var t = e.children, n = e.onBatchResize, r = d.useRef(0), o = d.useRef([]), a = d.useContext(Ms), i = d.useCallback(function(l, s, c) {
    r.current += 1;
    var u = r.current;
    o.current.push({
      size: l,
      element: s,
      data: c
    }), Promise.resolve().then(function() {
      u === r.current && (n?.(o.current), o.current = []);
    }), a?.(l, s, c);
  }, [n, a]);
  return /* @__PURE__ */ d.createElement(Ms.Provider, {
    value: i
  }, t);
}
var Lm = (function() {
  if (typeof Map < "u")
    return Map;
  function e(t, n) {
    var r = -1;
    return t.some(function(o, a) {
      return o[0] === n ? (r = a, !0) : !1;
    }), r;
  }
  return (
    /** @class */
    (function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(n) {
        var r = e(this.__entries__, n), o = this.__entries__[r];
        return o && o[1];
      }, t.prototype.set = function(n, r) {
        var o = e(this.__entries__, n);
        ~o ? this.__entries__[o][1] = r : this.__entries__.push([n, r]);
      }, t.prototype.delete = function(n) {
        var r = this.__entries__, o = e(r, n);
        ~o && r.splice(o, 1);
      }, t.prototype.has = function(n) {
        return !!~e(this.__entries__, n);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(n, r) {
        r === void 0 && (r = null);
        for (var o = 0, a = this.__entries__; o < a.length; o++) {
          var i = a[o];
          n.call(r, i[1], i[0]);
        }
      }, t;
    })()
  );
})(), Ts = typeof window < "u" && typeof document < "u" && window.document === document, _i = (function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
})(), F0 = (function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(_i) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
})(), B0 = 2;
function k0(e, t) {
  var n = !1, r = !1, o = 0;
  function a() {
    n && (n = !1, e()), r && l();
  }
  function i() {
    F0(a);
  }
  function l() {
    var s = Date.now();
    if (n) {
      if (s - o < B0)
        return;
      r = !0;
    } else
      n = !0, r = !1, setTimeout(i, t);
    o = s;
  }
  return l;
}
var D0 = 20, L0 = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], z0 = typeof MutationObserver < "u", H0 = (
  /** @class */
  (function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = k0(this.refresh.bind(this), D0);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var n = this.observers_, r = n.indexOf(t);
      ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(n) {
        return n.gatherActive(), n.hasActive();
      });
      return t.forEach(function(n) {
        return n.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !Ts || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), z0 ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !Ts || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var n = t.propertyName, r = n === void 0 ? "" : n, o = L0.some(function(a) {
        return !!~r.indexOf(a);
      });
      o && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  })()
), zm = (function(e, t) {
  for (var n = 0, r = Object.keys(t); n < r.length; n++) {
    var o = r[n];
    Object.defineProperty(e, o, {
      value: t[o],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}), Mo = (function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || _i;
}), Hm = tl(0, 0, 0, 0);
function Ai(e) {
  return parseFloat(e) || 0;
}
function nd(e) {
  for (var t = [], n = 1; n < arguments.length; n++)
    t[n - 1] = arguments[n];
  return t.reduce(function(r, o) {
    var a = e["border-" + o + "-width"];
    return r + Ai(a);
  }, 0);
}
function V0(e) {
  for (var t = ["top", "right", "bottom", "left"], n = {}, r = 0, o = t; r < o.length; r++) {
    var a = o[r], i = e["padding-" + a];
    n[a] = Ai(i);
  }
  return n;
}
function W0(e) {
  var t = e.getBBox();
  return tl(0, 0, t.width, t.height);
}
function G0(e) {
  var t = e.clientWidth, n = e.clientHeight;
  if (!t && !n)
    return Hm;
  var r = Mo(e).getComputedStyle(e), o = V0(r), a = o.left + o.right, i = o.top + o.bottom, l = Ai(r.width), s = Ai(r.height);
  if (r.boxSizing === "border-box" && (Math.round(l + a) !== t && (l -= nd(r, "left", "right") + a), Math.round(s + i) !== n && (s -= nd(r, "top", "bottom") + i)), !U0(e)) {
    var c = Math.round(l + a) - t, u = Math.round(s + i) - n;
    Math.abs(c) !== 1 && (l -= c), Math.abs(u) !== 1 && (s -= u);
  }
  return tl(o.left, o.top, l, s);
}
var q0 = /* @__PURE__ */ (function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Mo(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Mo(e).SVGElement && typeof e.getBBox == "function";
  };
})();
function U0(e) {
  return e === Mo(e).document.documentElement;
}
function K0(e) {
  return Ts ? q0(e) ? W0(e) : G0(e) : Hm;
}
function X0(e) {
  var t = e.x, n = e.y, r = e.width, o = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, i = Object.create(a.prototype);
  return zm(i, {
    x: t,
    y: n,
    width: r,
    height: o,
    top: n,
    right: t + r,
    bottom: o + n,
    left: t
  }), i;
}
function tl(e, t, n, r) {
  return { x: e, y: t, width: n, height: r };
}
var Y0 = (
  /** @class */
  (function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = tl(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = K0(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  })()
), Z0 = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t, n) {
      var r = X0(n);
      zm(this, { target: t, contentRect: r });
    }
    return e;
  })()
), Q0 = (
  /** @class */
  (function() {
    function e(t, n, r) {
      if (this.activeObservations_ = [], this.observations_ = new Lm(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = n, this.callbackCtx_ = r;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Mo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) || (n.set(t, new Y0(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Mo(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var n = this.observations_;
        n.has(t) && (n.delete(t), n.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(n) {
        n.isActive() && t.activeObservations_.push(n);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, n = this.activeObservations_.map(function(r) {
          return new Z0(r.target, r.broadcastRect());
        });
        this.callback_.call(t, n, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  })()
), Vm = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new Lm(), Wm = (
  /** @class */
  /* @__PURE__ */ (function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var n = H0.getInstance(), r = new Q0(t, n, this);
      Vm.set(this, r);
    }
    return e;
  })()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  Wm.prototype[e] = function() {
    var t;
    return (t = Vm.get(this))[e].apply(t, arguments);
  };
});
var J0 = (function() {
  return typeof _i.ResizeObserver < "u" ? _i.ResizeObserver : Wm;
})(), ir = /* @__PURE__ */ new Map();
function Gm(e) {
  e.forEach(function(t) {
    var n, r = t.target;
    (n = ir.get(r)) === null || n === void 0 || n.forEach(function(o) {
      return o(r);
    });
  });
}
var qm = new J0(Gm);
process.env.NODE_ENV;
process.env.NODE_ENV;
function eb(e, t) {
  ir.has(e) || (ir.set(e, /* @__PURE__ */ new Set()), qm.observe(e)), ir.get(e).add(t);
}
function tb(e, t) {
  ir.has(e) && (ir.get(e).delete(t), ir.get(e).size || (qm.unobserve(e), ir.delete(e)));
}
function Mt(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function rd(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, Dm(r.key), r);
  }
}
function Tt(e, t, n) {
  return t && rd(e.prototype, t), n && rd(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function da(e, t) {
  return da = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, r) {
    return n.__proto__ = r, n;
  }, da(e, t);
}
function mr(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && da(e, t);
}
function fa(e) {
  return fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, fa(e);
}
function Vc() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (Vc = function() {
    return !!e;
  })();
}
function He(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function nb(e, t) {
  if (t && (Se(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return He(e);
}
function vr(e) {
  var t = Vc();
  return function() {
    var n, r = fa(e);
    if (t) {
      var o = fa(this).constructor;
      n = Reflect.construct(r, arguments, o);
    } else n = r.apply(this, arguments);
    return nb(this, n);
  };
}
var rb = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n() {
    return Mt(this, n), t.apply(this, arguments);
  }
  return Tt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(d.Component);
function ob(e, t) {
  var n = e.children, r = e.disabled, o = d.useRef(null), a = d.useRef(null), i = d.useContext(Ms), l = typeof n == "function", s = l ? n(o) : n, c = d.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), u = !l && /* @__PURE__ */ d.isValidElement(s) && _r(s), f = u ? Jr(s) : null, m = Qr(f, o), h = function() {
    var C;
    return hi(o.current) || // Support `nativeElement` format
    (o.current && Se(o.current) === "object" ? hi((C = o.current) === null || C === void 0 ? void 0 : C.nativeElement) : null) || hi(a.current);
  };
  d.useImperativeHandle(t, function() {
    return h();
  });
  var g = d.useRef(e);
  g.current = e;
  var p = d.useCallback(function(v) {
    var C = g.current, b = C.onResize, x = C.data, $ = v.getBoundingClientRect(), y = $.width, S = $.height, w = v.offsetWidth, E = v.offsetHeight, O = Math.floor(y), P = Math.floor(S);
    if (c.current.width !== O || c.current.height !== P || c.current.offsetWidth !== w || c.current.offsetHeight !== E) {
      var N = {
        width: O,
        height: P,
        offsetWidth: w,
        offsetHeight: E
      };
      c.current = N;
      var R = w === Math.round(y) ? y : w, _ = E === Math.round(S) ? S : E, I = T(T({}, N), {}, {
        offsetWidth: R,
        offsetHeight: _
      });
      i?.(I, v, x), b && Promise.resolve().then(function() {
        b(I, v);
      });
    }
  }, []);
  return d.useEffect(function() {
    var v = h();
    return v && !r && eb(v, p), function() {
      return tb(v, p);
    };
  }, [o.current, r]), /* @__PURE__ */ d.createElement(rb, {
    ref: a
  }, u ? /* @__PURE__ */ d.cloneElement(s, {
    ref: m
  }) : s);
}
var Um = /* @__PURE__ */ d.forwardRef(ob);
process.env.NODE_ENV !== "production" && (Um.displayName = "SingleObserver");
var ab = "rc-observer-key";
function ib(e, t) {
  var n = e.children, r = typeof n == "function" ? [n] : Ir(n);
  return process.env.NODE_ENV !== "production" && (r.length > 1 ? Mr(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : r.length === 0 && Mr(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), r.map(function(o, a) {
    var i = o?.key || "".concat(ab, "-").concat(a);
    return /* @__PURE__ */ d.createElement(Um, ve({}, e, {
      key: i,
      ref: a === 0 ? t : void 0
    }), o);
  });
}
var gr = /* @__PURE__ */ d.forwardRef(ib);
process.env.NODE_ENV !== "production" && (gr.displayName = "ResizeObserver");
gr.Collection = j0;
function _s(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function lb(e) {
  if (Array.isArray(e)) return _s(e);
}
function Km(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function Wc(e, t) {
  if (e) {
    if (typeof e == "string") return _s(e, t);
    var n = {}.toString.call(e).slice(8, -1);
    return n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set" ? Array.from(e) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _s(e, t) : void 0;
  }
}
function sb() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function de(e) {
  return lb(e) || Km(e) || Wc(e) || sb();
}
var Xm = function(t) {
  return +setTimeout(t, 16);
}, Ym = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Xm = function(t) {
  return window.requestAnimationFrame(t);
}, Ym = function(t) {
  return window.cancelAnimationFrame(t);
});
var od = 0, nl = /* @__PURE__ */ new Map();
function Zm(e) {
  nl.delete(e);
}
var ft = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  od += 1;
  var r = od;
  function o(a) {
    if (a === 0)
      Zm(r), t();
    else {
      var i = Xm(function() {
        o(a - 1);
      });
      nl.set(r, i);
    }
  }
  return o(n), r;
};
ft.cancel = function(e) {
  var t = nl.get(e);
  return Zm(e), Ym(t);
};
process.env.NODE_ENV !== "production" && (ft.ids = function() {
  return nl;
});
function Qm(e) {
  if (Array.isArray(e)) return e;
}
function cb(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n) return;
        s = !1;
      } else for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!s && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function Jm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function G(e, t) {
  return Qm(e) || cb(e, t) || Wc(e, t) || Jm();
}
function ma(e) {
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
function on() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function As(e, t) {
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
var ad = "data-rc-order", id = "data-rc-priority", ub = "rc-util-key", js = /* @__PURE__ */ new Map();
function ev() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : ub;
}
function rl(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function db(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Gc(e) {
  return Array.from((js.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function tv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!on())
    return null;
  var n = t.csp, r = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = db(r), l = i === "prependQueue", s = document.createElement("style");
  s.setAttribute(ad, i), l && a && s.setAttribute(id, "".concat(a)), n != null && n.nonce && (s.nonce = n?.nonce), s.innerHTML = e;
  var c = rl(t), u = c.firstChild;
  if (r) {
    if (l) {
      var f = (t.styles || Gc(c)).filter(function(m) {
        if (!["prepend", "prependQueue"].includes(m.getAttribute(ad)))
          return !1;
        var h = Number(m.getAttribute(id) || 0);
        return a >= h;
      });
      if (f.length)
        return c.insertBefore(s, f[f.length - 1].nextSibling), s;
    }
    c.insertBefore(s, u);
  } else
    c.appendChild(s);
  return s;
}
function nv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = rl(t);
  return (t.styles || Gc(n)).find(function(r) {
    return r.getAttribute(ev(t)) === e;
  });
}
function va(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = nv(e, t);
  if (n) {
    var r = rl(t);
    r.removeChild(n);
  }
}
function fb(e, t) {
  var n = js.get(e);
  if (!n || !As(document, n)) {
    var r = tv("", t), o = r.parentNode;
    js.set(e, o), e.removeChild(r);
  }
}
function lr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = rl(n), o = Gc(r), a = T(T({}, n), {}, {
    styles: o
  });
  fb(r, a);
  var i = nv(t, a);
  if (i) {
    var l, s;
    if ((l = a.csp) !== null && l !== void 0 && l.nonce && i.nonce !== ((s = a.csp) === null || s === void 0 ? void 0 : s.nonce)) {
      var c;
      i.nonce = (c = a.csp) === null || c === void 0 ? void 0 : c.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var u = tv(e, a);
  return u.setAttribute(ev(a), t), u;
}
function mb(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e) if ({}.hasOwnProperty.call(e, r)) {
    if (t.indexOf(r) !== -1) continue;
    n[r] = e[r];
  }
  return n;
}
function De(e, t) {
  if (e == null) return {};
  var n, r, o = mb(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) === -1 && {}.propertyIsEnumerable.call(e, n) && (o[n] = e[n]);
  }
  return o;
}
function Ur(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, r = /* @__PURE__ */ new Set();
  function o(a, i) {
    var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = r.has(a);
    if (rt(!s, "Warning: There may be circular references"), s)
      return !1;
    if (a === i)
      return !0;
    if (n && l > 1)
      return !1;
    r.add(a);
    var c = l + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++)
        if (!o(a[u], i[u], c))
          return !1;
      return !0;
    }
    if (a && i && Se(a) === "object" && Se(i) === "object") {
      var f = Object.keys(a);
      return f.length !== Object.keys(i).length ? !1 : f.every(function(m) {
        return o(a[m], i[m], c);
      });
    }
    return !1;
  }
  return o(e, t);
}
var vb = "%";
function Fs(e) {
  return e.join(vb);
}
var gb = /* @__PURE__ */ (function() {
  function e(t) {
    Mt(this, e), j(this, "instanceId", void 0), j(this, "cache", /* @__PURE__ */ new Map()), j(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Tt(e, [{
    key: "get",
    value: function(n) {
      return this.opGet(Fs(n));
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
      return this.opUpdate(Fs(n), r);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(n, r) {
      var o = this.cache.get(n), a = r(o);
      a === null ? this.cache.delete(n) : this.cache.set(n, a);
    }
  }]), e;
})(), pb = ["children"], To = "data-token-hash", zn = "data-css-hash", hb = "data-cache-path", Or = "__cssinjs_instance__";
function rv() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(zn, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Or] = o[Or] || e, o[Or] === e && document.head.insertBefore(o, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat(zn, "]"))).forEach(function(o) {
      var a = o.getAttribute(zn);
      if (r[a]) {
        if (o[Or] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        r[a] = !0;
    });
  }
  return new gb(e);
}
var Kr = /* @__PURE__ */ d.createContext({
  hashPriority: "low",
  cache: rv(),
  defaultCache: !0
}), bb = function(t) {
  var n = t.children, r = De(t, pb), o = d.useContext(Kr), a = Ta(function() {
    var i = T({}, o);
    Object.keys(r).forEach(function(s) {
      var c = r[s];
      r[s] !== void 0 && (i[s] = c);
    });
    var l = r.cache;
    return i.cache = i.cache || rv(), i.defaultCache = !l && o.defaultCache, i;
  }, [o, r], function(i, l) {
    return !Ur(i[0], l[0], !0) || !Ur(i[1], l[1], !0);
  });
  return /* @__PURE__ */ d.createElement(Kr.Provider, {
    value: a
  }, n);
};
function yb(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var qc = /* @__PURE__ */ (function() {
  function e() {
    Mt(this, e), j(this, "cache", void 0), j(this, "keys", void 0), j(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Tt(e, [{
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
      return n.forEach(function(l) {
        if (!i)
          i = void 0;
        else {
          var s;
          i = (s = i) === null || s === void 0 || (s = s.map) === null || s === void 0 ? void 0 : s.get(l);
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
          var a = this.keys.reduce(function(c, u) {
            var f = G(c, 2), m = f[1];
            return o.internalGet(u)[1] < m ? [u, o.internalGet(u)[1]] : c;
          }, [this.keys[0], this.cacheCallTimes]), i = G(a, 1), l = i[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var s = this.cache;
      n.forEach(function(c, u) {
        if (u === n.length - 1)
          s.set(c, {
            value: [r, o.cacheCallTimes++]
          });
        else {
          var f = s.get(c);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : s.set(c, {
            map: /* @__PURE__ */ new Map()
          }), s = s.get(c).map;
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
          return !yb(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
})();
j(qc, "MAX_CACHE_SIZE", 20);
j(qc, "MAX_CACHE_OFFSET", 5);
var ld = 0, ov = /* @__PURE__ */ (function() {
  function e(t) {
    Mt(this, e), j(this, "derivatives", void 0), j(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = ld, t.length === 0 && Mr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), ld += 1;
  }
  return Tt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, o) {
        return o(n, r);
      }, void 0);
    }
  }]), e;
})(), Ul = new qc();
function ji(e) {
  var t = Array.isArray(e) ? e : [e];
  return Ul.has(t) || Ul.set(t, new ov(t)), Ul.get(t);
}
var Cb = /* @__PURE__ */ new WeakMap(), Kl = {};
function xb(e, t) {
  for (var n = Cb, r = 0; r < t.length; r += 1) {
    var o = t[r];
    n.has(o) || n.set(o, /* @__PURE__ */ new WeakMap()), n = n.get(o);
  }
  return n.has(Kl) || n.set(Kl, e()), n.get(Kl);
}
var sd = /* @__PURE__ */ new WeakMap();
function la(e) {
  var t = sd.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof ov ? t += r.id : r && Se(r) === "object" ? t += la(r) : t += r;
  }), t = ma(t), sd.set(e, t)), t;
}
function cd(e, t) {
  return ma("".concat(t, "_").concat(la(e)));
}
var Bs = on();
function ee(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function Fi(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = T(T({}, r), {}, j(j({}, To, t), zn, n)), i = Object.keys(a).map(function(l) {
    var s = a[l];
    return s ? "".concat(l, '="').concat(s, '"') : null;
  }).filter(function(l) {
    return l;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var bi = function(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(n ? "".concat(n, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, Sb = function(t, n, r) {
  return Object.keys(t).length ? ".".concat(n).concat(r != null && r.scope ? ".".concat(r.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = G(o, 2), i = a[0], l = a[1];
    return "".concat(i, ":").concat(l, ";");
  }).join(""), "}") : "";
}, av = function(t, n, r) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var l, s, c = G(i, 2), u = c[0], f = c[1];
    if (r != null && (l = r.preserve) !== null && l !== void 0 && l[u])
      a[u] = f;
    else if ((typeof f == "string" || typeof f == "number") && !(r != null && (s = r.ignore) !== null && s !== void 0 && s[u])) {
      var m, h = bi(u, r?.prefix);
      o[h] = typeof f == "number" && !(r != null && (m = r.unitless) !== null && m !== void 0 && m[u]) ? "".concat(f, "px") : String(f), a[u] = "var(".concat(h, ")");
    }
  }), [a, Sb(o, n, {
    scope: r?.scope
  })];
}, ud = process.env.NODE_ENV !== "test" && on() ? d.useLayoutEffect : d.useEffect, wt = function(t, n) {
  var r = d.useRef(!0);
  ud(function() {
    return t(r.current);
  }, n), ud(function() {
    return r.current = !1, function() {
      r.current = !0;
    };
  }, []);
}, dd = function(t, n) {
  wt(function(r) {
    if (!r)
      return t();
  }, n);
}, wb = T({}, d), fd = wb.useInsertionEffect, $b = function(t, n, r) {
  d.useMemo(t, r), wt(function() {
    return n(!0);
  }, r);
}, Eb = fd ? function(e, t, n) {
  return fd(function() {
    return e(), t();
  }, n);
} : $b, Ob = T({}, d), Pb = Ob.useInsertionEffect, Nb = function(t) {
  var n = [], r = !1;
  function o(a) {
    if (r) {
      process.env.NODE_ENV !== "production" && Mr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    n.push(a);
  }
  return d.useEffect(function() {
    return r = !1, function() {
      r = !0, n.length && n.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, Rb = function() {
  return function(t) {
    t();
  };
}, Ib = typeof Pb < "u" ? Nb : Rb;
function Mb() {
  return !1;
}
var ks = !1;
function Tb() {
  return ks;
}
const _b = process.env.NODE_ENV === "production" ? Mb : Tb;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var ni = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (ni && typeof ni.webpackHotUpdate == "function") {
    var Ab = ni.webpackHotUpdate;
    ni.webpackHotUpdate = function() {
      return ks = !0, setTimeout(function() {
        ks = !1;
      }, 0), Ab.apply(void 0, arguments);
    };
  }
}
function Uc(e, t, n, r, o) {
  var a = d.useContext(Kr), i = a.cache, l = [e].concat(de(t)), s = Fs(l), c = Ib([s]), u = _b(), f = function(p) {
    i.opUpdate(s, function(v) {
      var C = v || [void 0, void 0], b = G(C, 2), x = b[0], $ = x === void 0 ? 0 : x, y = b[1], S = y;
      process.env.NODE_ENV !== "production" && y && u && (r?.(S, u), S = null);
      var w = S || n(), E = [$, w];
      return p ? p(E) : E;
    });
  };
  d.useMemo(
    function() {
      f();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [s]
    /* eslint-enable */
  );
  var m = i.opGet(s);
  process.env.NODE_ENV !== "production" && !m && (f(), m = i.opGet(s));
  var h = m[1];
  return Eb(function() {
    o?.(h);
  }, function(g) {
    return f(function(p) {
      var v = G(p, 2), C = v[0], b = v[1];
      return g && C === 0 && o?.(h), [C + 1, b];
    }), function() {
      i.opUpdate(s, function(p) {
        var v = p || [], C = G(v, 2), b = C[0], x = b === void 0 ? 0 : b, $ = C[1], y = x - 1;
        return y === 0 ? (c(function() {
          (g || !i.opGet(s)) && r?.($, !1);
        }), null) : [x - 1, $];
      });
    };
  }, [s]), h;
}
var jb = {}, Fb = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Hr = /* @__PURE__ */ new Map();
function Bb(e) {
  Hr.set(e, (Hr.get(e) || 0) + 1);
}
function kb(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(To, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[Or] === t) {
        var o;
        (o = r.parentNode) === null || o === void 0 || o.removeChild(r);
      }
    });
  }
}
var Db = 0;
function Lb(e, t) {
  Hr.set(e, (Hr.get(e) || 0) - 1);
  var n = /* @__PURE__ */ new Set();
  Hr.forEach(function(r, o) {
    r <= 0 && n.add(o);
  }), Hr.size - n.size > Db && n.forEach(function(r) {
    kb(r, t), Hr.delete(r);
  });
}
var iv = function(t, n, r, o) {
  var a = r.getDerivativeToken(t), i = T(T({}, a), n);
  return o && (i = o(i)), i;
}, lv = "token";
function zb(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Ge(Kr), o = r.cache.instanceId, a = r.container, i = n.salt, l = i === void 0 ? "" : i, s = n.override, c = s === void 0 ? jb : s, u = n.formatToken, f = n.getComputedToken, m = n.cssVar, h = xb(function() {
    return Object.assign.apply(Object, [{}].concat(de(t)));
  }, t), g = la(h), p = la(c), v = m ? la(m) : "", C = Uc(lv, [l, e.id, g, p, v], function() {
    var b, x = f ? f(h, c, e) : iv(h, c, e, u), $ = T({}, x), y = "";
    if (m) {
      var S = av(x, m.key, {
        prefix: m.prefix,
        ignore: m.ignore,
        unitless: m.unitless,
        preserve: m.preserve
      }), w = G(S, 2);
      x = w[0], y = w[1];
    }
    var E = cd(x, l);
    x._tokenKey = E, $._tokenKey = cd($, l);
    var O = (b = m?.key) !== null && b !== void 0 ? b : E;
    x._themeKey = O, Bb(O);
    var P = "".concat(Fb, "-").concat(ma(E));
    return x._hashId = P, [x, P, $, y, m?.key || ""];
  }, function(b) {
    Lb(b[0]._themeKey, o);
  }, function(b) {
    var x = G(b, 4), $ = x[0], y = x[3];
    if (m && y) {
      var S = lr(y, ma("css-variables-".concat($._themeKey)), {
        mark: zn,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      S[Or] = o, S.setAttribute(To, $._themeKey);
    }
  });
  return C;
}
var Hb = function(t, n, r) {
  var o = G(t, 5), a = o[2], i = o[3], l = o[4], s = r || {}, c = s.plain;
  if (!i)
    return null;
  var u = a._tokenKey, f = -999, m = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(f)
  }, h = Fi(i, l, u, m, c);
  return [f, u, h];
}, Vb = {
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
}, sv = "comm", cv = "rule", uv = "decl", Wb = "@import", Gb = "@namespace", qb = "@keyframes", Ub = "@layer", dv = Math.abs, Kc = String.fromCharCode;
function fv(e) {
  return e.trim();
}
function yi(e, t, n) {
  return e.replace(t, n);
}
function Kb(e, t, n) {
  return e.indexOf(t, n);
}
function Oo(e, t) {
  return e.charCodeAt(t) | 0;
}
function _o(e, t, n) {
  return e.slice(t, n);
}
function Un(e) {
  return e.length;
}
function Xb(e) {
  return e.length;
}
function ri(e, t) {
  return t.push(e), e;
}
var ol = 1, Ao = 1, mv = 0, An = 0, jt = 0, Lo = "";
function Xc(e, t, n, r, o, a, i, l) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: ol, column: Ao, length: i, return: "", siblings: l };
}
function Yb() {
  return jt;
}
function Zb() {
  return jt = An > 0 ? Oo(Lo, --An) : 0, Ao--, jt === 10 && (Ao = 1, ol--), jt;
}
function Hn() {
  return jt = An < mv ? Oo(Lo, An++) : 0, Ao++, jt === 10 && (Ao = 1, ol++), jt;
}
function Pr() {
  return Oo(Lo, An);
}
function Ci() {
  return An;
}
function al(e, t) {
  return _o(Lo, e, t);
}
function ga(e) {
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
function Qb(e) {
  return ol = Ao = 1, mv = Un(Lo = e), An = 0, [];
}
function Jb(e) {
  return Lo = "", e;
}
function Xl(e) {
  return fv(al(An - 1, Ds(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ey(e) {
  for (; (jt = Pr()) && jt < 33; )
    Hn();
  return ga(e) > 2 || ga(jt) > 3 ? "" : " ";
}
function ty(e, t) {
  for (; --t && Hn() && !(jt < 48 || jt > 102 || jt > 57 && jt < 65 || jt > 70 && jt < 97); )
    ;
  return al(e, Ci() + (t < 6 && Pr() == 32 && Hn() == 32));
}
function Ds(e) {
  for (; Hn(); )
    switch (jt) {
      // ] ) " '
      case e:
        return An;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Ds(jt);
        break;
      // (
      case 40:
        e === 41 && Ds(e);
        break;
      // \
      case 92:
        Hn();
        break;
    }
  return An;
}
function ny(e, t) {
  for (; Hn() && e + jt !== 57; )
    if (e + jt === 84 && Pr() === 47)
      break;
  return "/*" + al(t, An - 1) + "*" + Kc(e === 47 ? e : Hn());
}
function ry(e) {
  for (; !ga(Pr()); )
    Hn();
  return al(e, An);
}
function oy(e) {
  return Jb(xi("", null, null, null, [""], e = Qb(e), 0, [0], e));
}
function xi(e, t, n, r, o, a, i, l, s) {
  for (var c = 0, u = 0, f = i, m = 0, h = 0, g = 0, p = 1, v = 1, C = 1, b = 0, x = "", $ = o, y = a, S = r, w = x; v; )
    switch (g = b, b = Hn()) {
      // (
      case 40:
        if (g != 108 && Oo(w, f - 1) == 58) {
          Kb(w += yi(Xl(b), "&", "&\f"), "&\f", dv(c ? l[c - 1] : 0)) != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        w += Xl(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        w += ey(g);
        break;
      // \
      case 92:
        w += ty(Ci() - 1, 7);
        continue;
      // /
      case 47:
        switch (Pr()) {
          case 42:
          case 47:
            ri(ay(ny(Hn(), Ci()), t, n, s), s), (ga(g || 1) == 5 || ga(Pr() || 1) == 5) && Un(w) && _o(w, -1, void 0) !== " " && (w += " ");
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * p:
        l[c++] = Un(w) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + u:
            C == -1 && (w = yi(w, /\f/g, "")), h > 0 && (Un(w) - f || p === 0 && g === 47) && ri(h > 32 ? vd(w + ";", r, n, f - 1, s) : vd(yi(w, " ", "") + ";", r, n, f - 2, s), s);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (ri(S = md(w, t, n, c, u, o, l, x, $ = [], y = [], f, a), a), b === 123)
              if (u === 0)
                xi(w, t, S, S, $, a, f, l, y);
              else {
                switch (m) {
                  // c(ontainer)
                  case 99:
                    if (Oo(w, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (Oo(w, 2) === 97) break;
                  default:
                    u = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                u ? xi(e, S, S, r && ri(md(e, S, S, 0, 0, o, l, x, o, $ = [], f, y), y), o, y, f, l, r ? $ : y) : xi(w, S, S, S, [""], y, 0, l, y);
              }
        }
        c = u = h = 0, p = C = 1, x = w = "", f = i;
        break;
      // :
      case 58:
        f = 1 + Un(w), h = g;
      default:
        if (p < 1) {
          if (b == 123)
            --p;
          else if (b == 125 && p++ == 0 && Zb() == 125)
            continue;
        }
        switch (w += Kc(b), b * p) {
          // &
          case 38:
            C = u > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            l[c++] = (Un(w) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Pr() === 45 && (w += Xl(Hn())), m = Pr(), u = f = Un(x = w += ry(Ci())), b++;
            break;
          // -
          case 45:
            g === 45 && Un(w) == 2 && (p = 0);
        }
    }
  return a;
}
function md(e, t, n, r, o, a, i, l, s, c, u, f) {
  for (var m = o - 1, h = o === 0 ? a : [""], g = Xb(h), p = 0, v = 0, C = 0; p < r; ++p)
    for (var b = 0, x = _o(e, m + 1, m = dv(v = i[p])), $ = e; b < g; ++b)
      ($ = fv(v > 0 ? h[b] + " " + x : yi(x, /&\f/g, h[b]))) && (s[C++] = $);
  return Xc(e, t, n, o === 0 ? cv : l, s, c, u, f);
}
function ay(e, t, n, r) {
  return Xc(e, t, n, sv, Kc(Yb()), _o(e, 2, -2), 0, r);
}
function vd(e, t, n, r, o) {
  return Xc(e, t, n, uv, _o(e, 0, r), _o(e, r + 1, -1), r, o);
}
function Ls(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function iy(e, t, n, r) {
  switch (e.type) {
    case Ub:
      if (e.children.length) break;
    case Wb:
    case Gb:
    case uv:
      return e.return = e.return || e.value;
    case sv:
      return "";
    case qb:
      return e.return = e.value + "{" + Ls(e.children, r) + "}";
    case cv:
      if (!Un(e.value = e.props.join(","))) return "";
  }
  return Un(n = Ls(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function vv(e, t) {
  var n = t.path, r = t.parentSelectors;
  rt(!1, "[Ant Design CSS-in-JS] ".concat(n ? "Error in ".concat(n, ": ") : "").concat(e).concat(r.length ? " Selector: ".concat(r.join(" | ")) : ""));
}
var ly = function(t, n, r) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || a.indexOf(n) === -1 && !o.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && vv("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, sy = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && vv("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, gd = "data-ant-cssinjs-cache-path", gv = "_FILE_STYLE__", qr, pv = !0;
function cy() {
  if (!qr && (qr = {}, on())) {
    var e = document.createElement("div");
    e.className = gd, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = G(a, 2), l = i[0], s = i[1];
      qr[l] = s;
    });
    var n = document.querySelector("style[".concat(gd, "]"));
    if (n) {
      var r;
      pv = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function uy(e) {
  return cy(), !!qr[e];
}
function dy(e) {
  var t = qr[e], n = null;
  if (t && on())
    if (pv)
      n = gv;
    else {
      var r = document.querySelector("style[".concat(zn, '="').concat(qr[e], '"]'));
      r ? n = r.innerHTML : delete qr[e];
    }
  return [n, t];
}
var hv = "_skip_check_", bv = "_multi_value_";
function Si(e) {
  var t = Ls(oy(e), iy);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function fy(e) {
  return Se(e) === "object" && e && (hv in e || bv in e);
}
function pd(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), o = n === "low" ? ":where(".concat(r, ")") : r, a = e.split(",").map(function(i) {
    var l, s = i.trim().split(/\s+/), c = s[0] || "", u = ((l = c.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return c = "".concat(u).concat(o).concat(c.slice(u.length)), [c].concat(de(s.slice(1))).join(" ");
  });
  return a.join(",");
}
var my = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = r.root, a = r.injectHash, i = r.parentSelectors, l = n.hashId, s = n.layer, c = n.path, u = n.hashPriority, f = n.transformers, m = f === void 0 ? [] : f, h = n.linters, g = h === void 0 ? [] : h, p = "", v = {};
  function C($) {
    var y = $.getName(l);
    if (!v[y]) {
      var S = e($.style, n, {
        root: !1,
        parentSelectors: i
      }), w = G(S, 1), E = w[0];
      v[y] = "@keyframes ".concat($.getName(l)).concat(E);
    }
  }
  function b($) {
    var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return $.forEach(function(S) {
      Array.isArray(S) ? b(S, y) : S && y.push(S);
    }), y;
  }
  var x = b(Array.isArray(t) ? t : [t]);
  return x.forEach(function($) {
    var y = typeof $ == "string" && !o ? {} : $;
    if (typeof y == "string")
      p += "".concat(y, `
`);
    else if (y._keyframe)
      C(y);
    else {
      var S = m.reduce(function(w, E) {
        var O;
        return (E == null || (O = E.visit) === null || O === void 0 ? void 0 : O.call(E, w)) || w;
      }, y);
      Object.keys(S).forEach(function(w) {
        var E = S[w];
        if (Se(E) === "object" && E && (w !== "animationName" || !E._keyframe) && !fy(E)) {
          var O = !1, P = w.trim(), N = !1;
          (o || a) && l ? P.startsWith("@") ? O = !0 : P === "&" ? P = pd("", l, u) : P = pd(w, l, u) : o && !l && (P === "&" || P === "") && (P = "", N = !0);
          var R = e(E, n, {
            root: N,
            injectHash: O,
            parentSelectors: [].concat(de(i), [P])
          }), _ = G(R, 2), I = _[0], k = _[1];
          v = T(T({}, v), k), p += "".concat(P).concat(I);
        } else {
          let F = function(q, K) {
            process.env.NODE_ENV !== "production" && (Se(E) !== "object" || !(E != null && E[hv])) && [ly, sy].concat(de(g)).forEach(function(L) {
              return L(q, K, {
                path: c,
                hashId: l,
                parentSelectors: i
              });
            });
            var Q = q.replace(/[A-Z]/g, function(L) {
              return "-".concat(L.toLowerCase());
            }), W = K;
            !Vb[q] && typeof W == "number" && W !== 0 && (W = "".concat(W, "px")), q === "animationName" && K !== null && K !== void 0 && K._keyframe && (C(K), W = K.getName(l)), p += "".concat(Q, ":").concat(W, ";");
          };
          var A, D = (A = E?.value) !== null && A !== void 0 ? A : E;
          Se(E) === "object" && E !== null && E !== void 0 && E[bv] && Array.isArray(D) ? D.forEach(function(q) {
            F(w, q);
          }) : F(w, D);
        }
      });
    }
  }), o ? s && (p && (p = "@layer ".concat(s.name, " {").concat(p, "}")), s.dependencies && (v["@layer ".concat(s.name)] = s.dependencies.map(function($) {
    return "@layer ".concat($, ", ").concat(s.name, ";");
  }).join(`
`))) : p = "{".concat(p, "}"), [p, v];
};
function yv(e, t) {
  return ma("".concat(e.join("%")).concat(t));
}
function vy() {
  return null;
}
var Cv = "style";
function zs(e, t) {
  var n = e.token, r = e.path, o = e.hashId, a = e.layer, i = e.nonce, l = e.clientOnly, s = e.order, c = s === void 0 ? 0 : s, u = d.useContext(Kr), f = u.autoClear, m = u.mock, h = u.defaultCache, g = u.hashPriority, p = u.container, v = u.ssrInline, C = u.transformers, b = u.linters, x = u.cache, $ = u.layer, y = n._tokenKey, S = [y];
  $ && S.push("layer"), S.push.apply(S, de(r));
  var w = Bs;
  process.env.NODE_ENV !== "production" && m !== void 0 && (w = m === "client");
  var E = Uc(
    Cv,
    S,
    // Create cache if needed
    function() {
      var _ = S.join("|");
      if (uy(_)) {
        var I = dy(_), k = G(I, 2), A = k[0], D = k[1];
        if (A)
          return [A, y, D, {}, l, c];
      }
      var F = t(), q = my(F, {
        hashId: o,
        hashPriority: g,
        layer: $ ? a : void 0,
        path: r.join("-"),
        transformers: C,
        linters: b
      }), K = G(q, 2), Q = K[0], W = K[1], L = Si(Q), z = yv(S, L);
      return [L, y, z, W, l, c];
    },
    // Remove cache if no need
    function(_, I) {
      var k = G(_, 3), A = k[2];
      (I || f) && Bs && va(A, {
        mark: zn,
        attachTo: p
      });
    },
    // Effect: Inject style here
    function(_) {
      var I = G(_, 4), k = I[0];
      I[1];
      var A = I[2], D = I[3];
      if (w && k !== gv) {
        var F = {
          mark: zn,
          prepend: $ ? !1 : "queue",
          attachTo: p,
          priority: c
        }, q = typeof i == "function" ? i() : i;
        q && (F.csp = {
          nonce: q
        });
        var K = [], Q = [];
        Object.keys(D).forEach(function(L) {
          L.startsWith("@layer") ? K.push(L) : Q.push(L);
        }), K.forEach(function(L) {
          lr(Si(D[L]), "_layer-".concat(L), T(T({}, F), {}, {
            prepend: !0
          }));
        });
        var W = lr(k, A, F);
        W[Or] = x.instanceId, W.setAttribute(To, y), process.env.NODE_ENV !== "production" && W.setAttribute(hb, S.join("|")), Q.forEach(function(L) {
          lr(Si(D[L]), "_effect-".concat(L), F);
        });
      }
    }
  ), O = G(E, 3), P = O[0], N = O[1], R = O[2];
  return function(_) {
    var I;
    return !v || w || !h ? I = /* @__PURE__ */ d.createElement(vy, null) : I = /* @__PURE__ */ d.createElement("style", ve({}, j(j({}, To, N), zn, R), {
      dangerouslySetInnerHTML: {
        __html: P
      }
    })), /* @__PURE__ */ d.createElement(d.Fragment, null, I, _);
  };
}
var gy = function(t, n, r) {
  var o = G(t, 6), a = o[0], i = o[1], l = o[2], s = o[3], c = o[4], u = o[5], f = r || {}, m = f.plain;
  if (c)
    return null;
  var h = a, g = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  };
  return h = Fi(a, i, l, g, m), s && Object.keys(s).forEach(function(p) {
    if (!n[p]) {
      n[p] = !0;
      var v = Si(s[p]), C = Fi(v, i, "_effect-".concat(p), g, m);
      p.startsWith("@layer") ? h = C + h : h += C;
    }
  }), [u, l, h];
}, xv = "cssVar", py = function(t, n) {
  var r = t.key, o = t.prefix, a = t.unitless, i = t.ignore, l = t.token, s = t.scope, c = s === void 0 ? "" : s, u = Ge(Kr), f = u.cache.instanceId, m = u.container, h = l._tokenKey, g = [].concat(de(t.path), [r, c, h]), p = Uc(xv, g, function() {
    var v = n(), C = av(v, r, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: c
    }), b = G(C, 2), x = b[0], $ = b[1], y = yv(g, $);
    return [x, $, y, r];
  }, function(v) {
    var C = G(v, 3), b = C[2];
    Bs && va(b, {
      mark: zn,
      attachTo: m
    });
  }, function(v) {
    var C = G(v, 3), b = C[1], x = C[2];
    if (b) {
      var $ = lr(b, x, {
        mark: zn,
        prepend: "queue",
        attachTo: m,
        priority: -999
      });
      $[Or] = f, $.setAttribute(To, r);
    }
  });
  return p;
}, hy = function(t, n, r) {
  var o = G(t, 4), a = o[1], i = o[2], l = o[3], s = r || {}, c = s.plain;
  if (!a)
    return null;
  var u = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(u)
  }, m = Fi(a, l, i, f, c);
  return [u, i, m];
};
j(j(j({}, Cv, gy), lv, Hb), xv, hy);
var We = /* @__PURE__ */ (function() {
  function e(t, n) {
    Mt(this, e), j(this, "name", void 0), j(this, "style", void 0), j(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return Tt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function so(e) {
  return e.notSplit = !0, e;
}
so(["borderTop", "borderBottom"]), so(["borderTop"]), so(["borderBottom"]), so(["borderLeft", "borderRight"]), so(["borderLeft"]), so(["borderRight"]);
var Yc = /* @__PURE__ */ Rr({});
function by(e) {
  return Qm(e) || Km(e) || Wc(e) || Jm();
}
function Yn(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null)
      return;
    n = n[t[r]];
  }
  return n;
}
function Sv(e, t, n, r) {
  if (!t.length)
    return n;
  var o = by(t), a = o[0], i = o.slice(1), l;
  return !e && typeof a == "number" ? l = [] : Array.isArray(e) ? l = de(e) : l = T({}, e), r && n === void 0 && i.length === 1 ? delete l[a][i[0]] : l[a] = Sv(l[a], i, n, r), l;
}
function kn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && r && n === void 0 && !Yn(e, t.slice(0, -1)) ? e : Sv(e, t, n, r);
}
function yy(e) {
  return Se(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function hd(e) {
  return Array.isArray(e) ? [] : {};
}
var Cy = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function Co() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = hd(t[0]);
  return t.forEach(function(o) {
    function a(i, l) {
      var s = new Set(l), c = Yn(o, i), u = Array.isArray(c);
      if (u || yy(c)) {
        if (!s.has(c)) {
          s.add(c);
          var f = Yn(r, i);
          u ? r = kn(r, i, []) : (!f || Se(f) !== "object") && (r = kn(r, i, hd(c))), Cy(c).forEach(function(m) {
            a([].concat(de(i), [m]), s);
          });
        }
      } else
        r = kn(r, i, c);
    }
    a([]);
  }), r;
}
function wv() {
}
let or = null;
function xy() {
  or = null, Bm();
}
let $v = wv;
process.env.NODE_ENV !== "production" && ($v = (e, t, n) => {
  rt(e, `[antd: ${t}] ${n}`), process.env.NODE_ENV === "test" && xy();
});
const Ar = $v, Ev = /* @__PURE__ */ d.createContext({}), Rt = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = d.useContext(Ev), n = (r, o, a) => {
    if (!r)
      if (t === !1 && o === "deprecated") {
        const i = or;
        or || (or = {}), or[e] = or[e] || [], or[e].includes(a || "") || or[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", or);
      } else
        process.env.NODE_ENV !== "production" && Ar(r, e, a);
  };
  return n.deprecated = (r, o, a, i) => {
    n(r, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, n;
} : () => {
  const e = () => {
  };
  return e.deprecated = wv, e;
}, Sy = /* @__PURE__ */ Rr(void 0);
var wy = {
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
}, $y = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, Ey = T(T({}, $y), {}, {
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
const Ov = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, bd = {
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
  }, Ey),
  timePickerLocale: Object.assign({}, Ov)
}, pn = "${label} is not a valid ${type}", Tr = {
  locale: "en",
  Pagination: wy,
  DatePicker: bd,
  TimePicker: Ov,
  Calendar: bd,
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
        string: pn,
        method: pn,
        array: pn,
        object: pn,
        number: pn,
        date: pn,
        boolean: pn,
        integer: pn,
        float: pn,
        regexp: pn,
        email: pn,
        url: pn,
        hex: pn
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
let wi = Object.assign({}, Tr.Modal), $i = [];
const yd = () => $i.reduce((e, t) => Object.assign(Object.assign({}, e), t), Tr.Modal);
function Oy(e) {
  if (e) {
    const t = Object.assign({}, e);
    return $i.push(t), wi = yd(), () => {
      $i = $i.filter((n) => n !== t), wi = yd();
    };
  }
  wi = Object.assign({}, Tr.Modal);
}
function Pv() {
  return wi;
}
const Zc = /* @__PURE__ */ Rr(void 0), il = (e, t) => {
  const n = d.useContext(Zc), r = d.useMemo(() => {
    var a;
    const i = t || Tr[e], l = (a = n?.[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), l || {});
  }, [e, t, n]), o = d.useMemo(() => {
    const a = n?.locale;
    return n?.exist && !a ? Tr.locale : a;
  }, [n]);
  return [r, o];
}, Nv = "internalMark", Rv = (e) => {
  const {
    locale: t = {},
    children: n,
    _ANT_MARK__: r
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = Rt("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(r === Nv, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  d.useEffect(() => Oy(t?.Modal), [t]);
  const o = d.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ d.createElement(Zc.Provider, {
    value: o
  }, n);
};
process.env.NODE_ENV !== "production" && (Rv.displayName = "LocaleProvider");
const Qc = {
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
}, jo = Object.assign(Object.assign({}, Qc), {
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
}), zt = Math.round;
function Yl(e, t) {
  const n = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], r = n.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    r[o] = t(r[o] || 0, n[o] || "", o);
  return n[3] ? r[3] = n[3].includes("%") ? r[3] / 100 : r[3] : r[3] = 1, r;
}
const Cd = (e, t, n) => n === 0 ? e : e / 100;
function Zo(e, t) {
  const n = t || 255;
  return e > n ? n : e < 0 ? 0 : e;
}
class mt {
  constructor(t) {
    j(this, "isValid", !0), j(this, "r", 0), j(this, "g", 0), j(this, "b", 0), j(this, "a", 1), j(this, "_h", void 0), j(this, "_s", void 0), j(this, "_l", void 0), j(this, "_v", void 0), j(this, "_max", void 0), j(this, "_min", void 0), j(this, "_brightness", void 0);
    function n(r) {
      return r[0] in t && r[1] in t && r[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return r.startsWith(a);
      };
      const r = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(r) ? this.fromHexString(r) : o("rgb") ? this.fromRgbString(r) : o("hsl") ? this.fromHslString(r) : (o("hsv") || o("hsb")) && this.fromHsvString(r);
    } else if (t instanceof mt)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (n("rgb"))
      this.r = Zo(t.r), this.g = Zo(t.g), this.b = Zo(t.b), this.a = typeof t.a == "number" ? Zo(t.a, 1) : 1;
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
      t === 0 ? this._h = 0 : this._h = zt(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this._c(t), o = n / 100, a = (l) => (r[l] - this[l]) * o + this[l], i = {
      r: zt(a("r")),
      g: zt(a("g")),
      b: zt(a("b")),
      a: zt(a("a") * 100) / 100
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
    const n = this._c(t), r = this.a + n.a * (1 - this.a), o = (a) => zt((this[a] * this.a + n[a] * n.a * (1 - this.a)) / r);
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
      const a = zt(this.a * 255).toString(16);
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
    const t = this.getHue(), n = zt(this.getSaturation() * 100), r = zt(this.getLightness() * 100);
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
    return o[t] = Zo(n, r), o;
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
      const m = zt(r * 255);
      this.r = m, this.g = m, this.b = m;
    }
    let a = 0, i = 0, l = 0;
    const s = t / 60, c = (1 - Math.abs(2 * r - 1)) * n, u = c * (1 - Math.abs(s % 2 - 1));
    s >= 0 && s < 1 ? (a = c, i = u) : s >= 1 && s < 2 ? (a = u, i = c) : s >= 2 && s < 3 ? (i = c, l = u) : s >= 3 && s < 4 ? (i = u, l = c) : s >= 4 && s < 5 ? (a = u, l = c) : s >= 5 && s < 6 && (a = c, l = u);
    const f = r - c / 2;
    this.r = zt((a + f) * 255), this.g = zt((i + f) * 255), this.b = zt((l + f) * 255);
  }
  fromHsv({
    h: t,
    s: n,
    v: r,
    a: o
  }) {
    this._h = t % 360, this._s = n, this._v = r, this.a = typeof o == "number" ? o : 1;
    const a = zt(r * 255);
    if (this.r = a, this.g = a, this.b = a, n <= 0)
      return;
    const i = t / 60, l = Math.floor(i), s = i - l, c = zt(r * (1 - n) * 255), u = zt(r * (1 - n * s) * 255), f = zt(r * (1 - n * (1 - s)) * 255);
    switch (l) {
      case 0:
        this.g = f, this.b = c;
        break;
      case 1:
        this.r = u, this.b = c;
        break;
      case 2:
        this.r = c, this.b = f;
        break;
      case 3:
        this.r = c, this.g = u;
        break;
      case 4:
        this.r = f, this.g = c;
        break;
      case 5:
      default:
        this.g = c, this.b = u;
        break;
    }
  }
  fromHsvString(t) {
    const n = Yl(t, Cd);
    this.fromHsv({
      h: n[0],
      s: n[1],
      v: n[2],
      a: n[3]
    });
  }
  fromHslString(t) {
    const n = Yl(t, Cd);
    this.fromHsl({
      h: n[0],
      s: n[1],
      l: n[2],
      a: n[3]
    });
  }
  fromRgbString(t) {
    const n = Yl(t, (r, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? zt(r / 100 * 255) : r
    ));
    this.r = n[0], this.g = n[1], this.b = n[2], this.a = n[3];
  }
}
var oi = 2, xd = 0.16, Py = 0.05, Ny = 0.05, Ry = 0.15, Iv = 5, Mv = 4, Iy = [{
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
function Sd(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - oi * t : Math.round(e.h) + oi * t : r = n ? Math.round(e.h) + oi * t : Math.round(e.h) - oi * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function wd(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - xd * t : t === Mv ? r = e.s + xd : r = e.s + Py * t, r > 1 && (r = 1), n && t === Iv && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Math.round(r * 100) / 100;
}
function $d(e, t, n) {
  var r;
  return n ? r = e.v + Ny * t : r = e.v - Ry * t, r = Math.max(0, Math.min(1, r)), Math.round(r * 100) / 100;
}
function Xr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = new mt(e), o = r.toHsv(), a = Iv; a > 0; a -= 1) {
    var i = new mt({
      h: Sd(o, a, !0),
      s: wd(o, a, !0),
      v: $d(o, a, !0)
    });
    n.push(i);
  }
  n.push(r);
  for (var l = 1; l <= Mv; l += 1) {
    var s = new mt({
      h: Sd(o, l),
      s: wd(o, l),
      v: $d(o, l)
    });
    n.push(s);
  }
  return t.theme === "dark" ? Iy.map(function(c) {
    var u = c.index, f = c.amount;
    return new mt(t.backgroundColor || "#141414").mix(n[u], f).toHexString();
  }) : n.map(function(c) {
    return c.toHexString();
  });
}
var Zl = {
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
}, Hs = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Hs.primary = Hs[5];
var Vs = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
Vs.primary = Vs[5];
var Ws = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
Ws.primary = Ws[5];
var Gs = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Gs.primary = Gs[5];
var qs = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
qs.primary = qs[5];
var Us = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Us.primary = Us[5];
var Ks = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Ks.primary = Ks[5];
var Xs = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Xs.primary = Xs[5];
var Bi = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
Bi.primary = Bi[5];
var Ys = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
Ys.primary = Ys[5];
var Zs = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Zs.primary = Zs[5];
var Qs = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Qs.primary = Qs[5];
var Js = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Js.primary = Js[5];
var Ql = {
  red: Hs,
  volcano: Vs,
  orange: Ws,
  gold: Gs,
  yellow: qs,
  lime: Us,
  green: Ks,
  cyan: Xs,
  blue: Bi,
  geekblue: Ys,
  purple: Zs,
  magenta: Qs,
  grey: Js
};
function Tv(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: n
}) {
  const {
    colorSuccess: r,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: l,
    colorBgBase: s,
    colorTextBase: c
  } = e, u = t(l), f = t(r), m = t(o), h = t(a), g = t(i), p = n(s, c), v = e.colorLink || e.colorInfo, C = t(v), b = new mt(h[1]).mix(new mt(h[3]), 50).toHexString();
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
    colorErrorBgFilledHover: b,
    colorErrorBgActive: h[3],
    colorErrorBorder: h[3],
    colorErrorBorderHover: h[4],
    colorErrorHover: h[5],
    colorError: h[6],
    colorErrorActive: h[7],
    colorErrorTextHover: h[8],
    colorErrorText: h[9],
    colorErrorTextActive: h[10],
    colorWarningBg: m[1],
    colorWarningBgHover: m[2],
    colorWarningBorder: m[3],
    colorWarningBorderHover: m[4],
    colorWarningHover: m[4],
    colorWarning: m[6],
    colorWarningActive: m[7],
    colorWarningTextHover: m[8],
    colorWarningText: m[9],
    colorWarningTextActive: m[10],
    colorInfoBg: g[1],
    colorInfoBgHover: g[2],
    colorInfoBorder: g[3],
    colorInfoBorderHover: g[4],
    colorInfoHover: g[4],
    colorInfo: g[6],
    colorInfoActive: g[7],
    colorInfoTextHover: g[8],
    colorInfoText: g[9],
    colorInfoTextActive: g[10],
    colorLinkHover: C[4],
    colorLink: C[6],
    colorLinkActive: C[7],
    colorBgMask: new mt("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const My = (e) => {
  let t = e, n = e, r = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? n = 4 : e < 8 && e >= 7 ? n = 5 : e < 14 && e >= 8 ? n = 6 : e < 16 && e >= 14 ? n = 7 : e >= 16 && (n = 8), e < 6 && e >= 2 ? r = 1 : e >= 6 && (r = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: r,
    borderRadiusSM: n,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function Ty(e) {
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
  }, My(r));
}
const _v = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function Ei(e) {
  return (e + 8) / e;
}
function _y(e) {
  const t = Array.from({
    length: 10
  }).map((n, r) => {
    const o = r - 1, a = e * Math.pow(Math.E, o / 5), i = r > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((n) => ({
    size: n,
    lineHeight: Ei(n)
  }));
}
const Av = (e) => {
  const t = _y(e), n = t.map((u) => u.size), r = t.map((u) => u.lineHeight), o = n[1], a = n[0], i = n[2], l = r[1], s = r[0], c = r[2];
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
    lineHeight: l,
    lineHeightLG: c,
    lineHeightSM: s,
    fontHeight: Math.round(l * o),
    fontHeightLG: Math.round(c * i),
    fontHeightSM: Math.round(s * a),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2]
  };
};
function Ay(e) {
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
const Rn = (e, t) => new mt(e).setA(t).toRgbString(), Qo = (e, t) => new mt(e).darken(t).toHexString(), jy = (e) => {
  const t = Xr(e);
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
}, Fy = (e, t) => {
  const n = e || "#fff", r = t || "#000";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Rn(r, 0.88),
    colorTextSecondary: Rn(r, 0.65),
    colorTextTertiary: Rn(r, 0.45),
    colorTextQuaternary: Rn(r, 0.25),
    colorFill: Rn(r, 0.15),
    colorFillSecondary: Rn(r, 0.06),
    colorFillTertiary: Rn(r, 0.04),
    colorFillQuaternary: Rn(r, 0.02),
    colorBgSolid: Rn(r, 1),
    colorBgSolidHover: Rn(r, 0.75),
    colorBgSolidActive: Rn(r, 0.95),
    colorBgLayout: Qo(n, 4),
    colorBgContainer: Qo(n, 0),
    colorBgElevated: Qo(n, 0),
    colorBgSpotlight: Rn(r, 0.85),
    colorBgBlur: "transparent",
    colorBorder: Qo(n, 15),
    colorBorderSecondary: Qo(n, 6)
  };
};
function ll(e) {
  Zl.pink = Zl.magenta, Ql.pink = Ql.magenta;
  const t = Object.keys(Qc).map((n) => {
    const r = e[n] === Zl[n] ? Ql[n] : Xr(e[n]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${n}-${i + 1}`] = r[i], o[`${n}${i + 1}`] = r[i], o), {});
  }).reduce((n, r) => (n = Object.assign(Object.assign({}, n), r), n), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), Tv(e, {
    generateColorPalettes: jy,
    generateNeutralColorPalettes: Fy
  })), Av(e.fontSize)), Ay(e)), _v(e)), Ty(e));
}
const Jc = ji(ll), pa = {
  token: jo,
  override: {
    override: jo
  },
  hashed: !0
}, eu = /* @__PURE__ */ M.createContext(pa), ha = "ant", sl = "anticon", By = ["outlined", "borderless", "filled", "underlined"], ky = (e, t) => t || (e ? `${ha}-${e}` : ha), Be = /* @__PURE__ */ d.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: ky,
  iconPrefixCls: sl
}), {
  Consumer: X3
} = Be, Ed = {};
function zo(e) {
  const t = d.useContext(Be), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: Ed,
    styles: Ed
  }, a), {
    getPrefixCls: n,
    direction: r,
    getPopupContainer: o
  });
}
const Dy = `-ant-${Date.now()}-${Math.random()}`;
function Ly(e, t) {
  const n = {}, r = (i, l) => {
    let s = i.clone();
    return s = l?.(s) || s, s.toRgbString();
  }, o = (i, l) => {
    const s = new mt(i), c = Xr(s.toRgbString());
    n[`${l}-color`] = r(s), n[`${l}-color-disabled`] = c[1], n[`${l}-color-hover`] = c[4], n[`${l}-color-active`] = c[6], n[`${l}-color-outline`] = s.clone().setA(0.2).toRgbString(), n[`${l}-color-deprecated-bg`] = c[0], n[`${l}-color-deprecated-border`] = c[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new mt(t.primaryColor), l = Xr(i.toRgbString());
    l.forEach((c, u) => {
      n[`primary-${u + 1}`] = c;
    }), n["primary-color-deprecated-l-35"] = r(i, (c) => c.lighten(35)), n["primary-color-deprecated-l-20"] = r(i, (c) => c.lighten(20)), n["primary-color-deprecated-t-20"] = r(i, (c) => c.tint(20)), n["primary-color-deprecated-t-50"] = r(i, (c) => c.tint(50)), n["primary-color-deprecated-f-12"] = r(i, (c) => c.setA(c.a * 0.12));
    const s = new mt(l[0]);
    n["primary-color-active-deprecated-f-30"] = r(s, (c) => c.setA(c.a * 0.3)), n["primary-color-active-deprecated-d-02"] = r(s, (c) => c.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(n).map((i) => `--${e}-${i}: ${n[i]};`).join(`
`)}
  }
  `.trim();
}
function zy(e, t) {
  const n = Ly(e, t);
  on() ? lr(n, `${Dy}-dynamic-theme`) : process.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const Yr = /* @__PURE__ */ d.createContext(!1), jv = ({
  children: e,
  disabled: t
}) => {
  const n = d.useContext(Yr);
  return /* @__PURE__ */ d.createElement(Yr.Provider, {
    value: t ?? n
  }, e);
}, Fo = /* @__PURE__ */ d.createContext(void 0), Hy = ({
  children: e,
  size: t
}) => {
  const n = d.useContext(Fo);
  return /* @__PURE__ */ d.createElement(Fo.Provider, {
    value: t || n
  }, e);
};
function Vy() {
  const e = Ge(Yr), t = Ge(Fo);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var Fv = /* @__PURE__ */ Tt(function e() {
  Mt(this, e);
}), Bv = "CALC_UNIT", Wy = new RegExp(Bv, "g");
function Jl(e) {
  return typeof e == "number" ? "".concat(e).concat(Bv) : e;
}
var Gy = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n(r, o) {
    var a;
    Mt(this, n), a = t.call(this), j(He(a), "result", ""), j(He(a), "unitlessCssVar", void 0), j(He(a), "lowPriority", void 0);
    var i = Se(r);
    return a.unitlessCssVar = o, r instanceof n ? a.result = "(".concat(r.result, ")") : i === "number" ? a.result = Jl(r) : i === "string" && (a.result = r), a;
  }
  return Tt(n, [{
    key: "add",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Jl(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof n ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Jl(o))), this.lowPriority = !0, this;
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
      var a = this, i = o || {}, l = i.unit, s = !0;
      return typeof l == "boolean" ? s = l : Array.from(this.unitlessCssVar).some(function(c) {
        return a.result.includes(c);
      }) && (s = !1), this.result = this.result.replace(Wy, s ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), n;
})(Fv), qy = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n(r) {
    var o;
    return Mt(this, n), o = t.call(this), j(He(o), "result", 0), r instanceof n ? o.result = r.result : typeof r == "number" && (o.result = r), o;
  }
  return Tt(n, [{
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
})(Fv), Uy = function(t, n) {
  var r = t === "css" ? Gy : qy;
  return function(o) {
    return new r(o, n);
  };
}, Od = function(t, n) {
  return "".concat([n, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function bt(e) {
  var t = d.useRef();
  t.current = e;
  var n = d.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return n;
}
function Bo(e) {
  var t = d.useRef(!1), n = d.useState(e), r = G(n, 2), o = r[0], a = r[1];
  d.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(l, s) {
    s && t.current || a(l);
  }
  return [o, i];
}
function es(e) {
  return e !== void 0;
}
function Vn(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, l = Bo(function() {
    return es(o) ? o : es(r) ? typeof r == "function" ? r() : r : typeof e == "function" ? e() : e;
  }), s = G(l, 2), c = s[0], u = s[1], f = o !== void 0 ? o : c, m = i ? i(f) : f, h = bt(a), g = Bo([f]), p = G(g, 2), v = p[0], C = p[1];
  dd(function() {
    var x = v[0];
    c !== x && h(c, x);
  }, [v]), dd(function() {
    es(o) || u(o);
  }, [o]);
  var b = bt(function(x, $) {
    u(x, $), C([f], $);
  });
  return [m, b];
}
function Pd(e, t, n, r) {
  var o = T({}, t[e]);
  if (r != null && r.deprecatedTokens) {
    var a = r.deprecatedTokens;
    a.forEach(function(l) {
      var s = G(l, 2), c = s[0], u = s[1];
      if (process.env.NODE_ENV !== "production" && rt(!(o != null && o[c]), "Component Token `".concat(String(c), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(u), "` instead.")), o != null && o[c] || o != null && o[u]) {
        var f;
        (f = o[u]) !== null && f !== void 0 || (o[u] = o?.[c]);
      }
    });
  }
  var i = T(T({}, n), o);
  return Object.keys(i).forEach(function(l) {
    i[l] === t[l] && delete i[l];
  }), i;
}
var kv = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ec = !0;
function $t() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  if (!kv)
    return Object.assign.apply(Object, [{}].concat(t));
  ec = !1;
  var r = {};
  return t.forEach(function(o) {
    if (Se(o) === "object") {
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
  }), ec = !0, r;
}
var Nd = {};
function Ky() {
}
var Xy = function(t) {
  var n, r = t, o = Ky;
  return kv && typeof Proxy < "u" && (n = /* @__PURE__ */ new Set(), r = new Proxy(t, {
    get: function(i, l) {
      if (ec) {
        var s;
        (s = n) === null || s === void 0 || s.add(l);
      }
      return i[l];
    }
  }), o = function(i, l) {
    var s;
    Nd[i] = {
      global: Array.from(n),
      component: T(T({}, (s = Nd[i]) === null || s === void 0 ? void 0 : s.component), l)
    };
  }), {
    token: r,
    keys: n,
    flush: o
  };
};
function Rd(e, t, n) {
  if (typeof n == "function") {
    var r;
    return n($t(t, (r = t[e]) !== null && r !== void 0 ? r : {}));
  }
  return n ?? {};
}
function Yy(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "max(".concat(r.map(function(a) {
        return ee(a);
      }).join(","), ")");
    },
    min: function() {
      for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
        r[o] = arguments[o];
      return "min(".concat(r.map(function(a) {
        return ee(a);
      }).join(","), ")");
    }
  };
}
var Zy = 1e3 * 60 * 10, Qy = /* @__PURE__ */ (function() {
  function e() {
    Mt(this, e), j(this, "map", /* @__PURE__ */ new Map()), j(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), j(this, "nextID", 0), j(this, "lastAccessBeat", /* @__PURE__ */ new Map()), j(this, "accessBeat", 0);
  }
  return Tt(e, [{
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
        return a && Se(a) === "object" ? "obj_".concat(r.getObjectID(a)) : "".concat(Se(a), "_").concat(a);
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
          r - o > Zy && (n.map.delete(a), n.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), Id = new Qy();
function Jy(e, t) {
  return M.useMemo(function() {
    var n = Id.get(t);
    if (n)
      return n;
    var r = e();
    return Id.set(t, r), r;
  }, t);
}
var e1 = function() {
  return {};
};
function t1(e) {
  var t = e.useCSP, n = t === void 0 ? e1 : t, r = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, l = e.getCompUnitless;
  function s(m, h, g, p) {
    var v = Array.isArray(m) ? m[0] : m;
    function C(E) {
      return "".concat(String(v)).concat(E.slice(0, 1).toUpperCase()).concat(E.slice(1));
    }
    var b = p?.unitless || {}, x = typeof l == "function" ? l(m) : {}, $ = T(T({}, x), {}, j({}, C("zIndexPopup"), !0));
    Object.keys(b).forEach(function(E) {
      $[C(E)] = b[E];
    });
    var y = T(T({}, p), {}, {
      unitless: $,
      prefixToken: C
    }), S = u(m, h, g, y), w = c(v, g, y);
    return function(E) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : E, P = S(E, O), N = G(P, 2), R = N[1], _ = w(O), I = G(_, 2), k = I[0], A = I[1];
      return [k, R, A];
    };
  }
  function c(m, h, g) {
    var p = g.unitless, v = g.injectStyle, C = v === void 0 ? !0 : v, b = g.prefixToken, x = g.ignore, $ = function(w) {
      var E = w.rootCls, O = w.cssVar, P = O === void 0 ? {} : O, N = r(), R = N.realToken;
      return py({
        path: [m],
        prefix: P.prefix,
        key: P.key,
        unitless: p,
        ignore: x,
        token: R,
        scope: E
      }, function() {
        var _ = Rd(m, R, h), I = Pd(m, R, _, {
          deprecatedTokens: g?.deprecatedTokens
        });
        return Object.keys(_).forEach(function(k) {
          I[b(k)] = I[k], delete I[k];
        }), I;
      }), null;
    }, y = function(w) {
      var E = r(), O = E.cssVar;
      return [function(P) {
        return C && O ? /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement($, {
          rootCls: w,
          cssVar: O,
          component: m
        }), P) : P;
      }, O?.key];
    };
    return y;
  }
  function u(m, h, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = Array.isArray(m) ? m : [m, m], C = G(v, 1), b = C[0], x = v.join("-"), $ = e.layer || {
      name: "antd"
    };
    return function(y) {
      var S = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : y, w = r(), E = w.theme, O = w.realToken, P = w.hashId, N = w.token, R = w.cssVar, _ = o(), I = _.rootPrefixCls, k = _.iconPrefixCls, A = n(), D = R ? "css" : "js", F = Jy(function() {
        var z = /* @__PURE__ */ new Set();
        return R && Object.keys(p.unitless || {}).forEach(function(H) {
          z.add(bi(H, R.prefix)), z.add(bi(H, Od(b, R.prefix)));
        }), Uy(D, z);
      }, [D, b, R?.prefix]), q = Yy(D), K = q.max, Q = q.min, W = {
        theme: E,
        token: N,
        hashId: P,
        nonce: function() {
          return A.nonce;
        },
        clientOnly: p.clientOnly,
        layer: $,
        // antd is always at top of styles
        order: p.order || -999
      };
      typeof a == "function" && zs(T(T({}, W), {}, {
        clientOnly: !1,
        path: ["Shared", I]
      }), function() {
        return a(N, {
          prefix: {
            rootPrefixCls: I,
            iconPrefixCls: k
          },
          csp: A
        });
      });
      var L = zs(T(T({}, W), {}, {
        path: [x, y, k]
      }), function() {
        if (p.injectStyle === !1)
          return [];
        var z = Xy(N), H = z.token, V = z.flush, te = Rd(b, O, g), Y = ".".concat(y), J = Pd(b, O, te, {
          deprecatedTokens: p.deprecatedTokens
        });
        R && te && Se(te) === "object" && Object.keys(te).forEach(function(se) {
          te[se] = "var(".concat(bi(se, Od(b, R.prefix)), ")");
        });
        var ae = $t(H, {
          componentCls: Y,
          prefixCls: y,
          iconCls: ".".concat(k),
          antCls: ".".concat(I),
          calc: F,
          // @ts-ignore
          max: K,
          // @ts-ignore
          min: Q
        }, R ? te : J), le = h(ae, {
          hashId: P,
          prefixCls: y,
          rootPrefixCls: I,
          iconPrefixCls: k
        });
        V(b, J);
        var X = typeof i == "function" ? i(ae, y, S, p.resetFont) : null;
        return [p.resetStyle === !1 ? null : X, le];
      });
      return [L, P];
    };
  }
  function f(m, h, g) {
    var p = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, v = u(m, h, g, T({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, p)), C = function(x) {
      var $ = x.prefixCls, y = x.rootCls, S = y === void 0 ? $ : y;
      return v($, S), null;
    };
    return process.env.NODE_ENV !== "production" && (C.displayName = "SubStyle_".concat(String(Array.isArray(m) ? m.join(".") : m))), C;
  }
  return {
    genStyleHooks: s,
    genSubStyleComponent: f,
    genComponentStyleHook: u
  };
}
const Zr = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], n1 = "5.28.1";
function ts(e) {
  return e >= 0 && e <= 255;
}
function oa(e, t) {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = new mt(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: l,
    b: s
  } = new mt(t).toRgb();
  for (let c = 0.01; c <= 1; c += 0.01) {
    const u = Math.round((n - i * (1 - c)) / c), f = Math.round((r - l * (1 - c)) / c), m = Math.round((o - s * (1 - c)) / c);
    if (ts(u) && ts(f) && ts(m))
      return new mt({
        r: u,
        g: f,
        b: m,
        a: Math.round(c * 100) / 100
      }).toRgbString();
  }
  return new mt({
    r: n,
    g: r,
    b: o,
    a: 1
  }).toRgbString();
}
var r1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function tu(e) {
  const {
    override: t
  } = e, n = r1(e, ["override"]), r = Object.assign({}, t);
  Object.keys(jo).forEach((m) => {
    delete r[m];
  });
  const o = Object.assign(Object.assign({}, n), r), a = 480, i = 576, l = 768, s = 992, c = 1200, u = 1600;
  return o.motion === !1 && (o.motionDurationFast = "0s", o.motionDurationMid = "0s", o.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: oa(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: oa(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: oa(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: oa(o.colorPrimaryBg, o.colorBgContainer),
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
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: s - 1,
    screenLG: s,
    screenLGMin: s,
    screenLGMax: c - 1,
    screenXL: c,
    screenXLMin: c,
    screenXLMax: u - 1,
    screenXXL: u,
    screenXXLMin: u,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new mt("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new mt("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new mt("rgba(0, 0, 0, 0.09)").toRgbString()}
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
var Md = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Dv = {
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
}, o1 = {
  motionBase: !0,
  motionUnit: !0
}, a1 = {
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
}, Lv = (e, t, n) => {
  const r = n.getDerivativeToken(e), {
    override: o
  } = t, a = Md(t, ["override"]);
  let i = Object.assign(Object.assign({}, r), {
    override: o
  });
  return i = tu(i), a && Object.entries(a).forEach(([l, s]) => {
    const {
      theme: c
    } = s, u = Md(s, ["theme"]);
    let f = u;
    c && (f = Lv(Object.assign(Object.assign({}, i), u), {
      override: u
    }, c)), i[l] = f;
  }), i;
};
function jn() {
  const {
    token: e,
    hashed: t,
    theme: n,
    override: r,
    cssVar: o
  } = M.useContext(eu), a = `${n1}-${t || ""}`, i = n || Jc, [l, s, c] = zb(i, [jo, e], {
    salt: a,
    override: r,
    getComputedToken: Lv,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: tu,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: Dv,
      ignore: o1,
      preserve: a1
    }
  });
  return [i, c, t ? s : "", l, o];
}
const i1 = {
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis"
}, pr = (e, t = !1) => ({
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
}), nu = () => ({
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
}), ki = () => ({
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
}), l1 = (e) => ({
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
}), s1 = (e, t, n, r) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = n ? `.${n}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let l = {};
  return r !== !1 && (l = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, l), i), {
      [o]: i
    })
  };
}, zv = (e, t) => ({
  outline: `${ee(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), ba = (e, t) => ({
  "&:focus-visible": zv(e, t)
}), Hv = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, nu()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Vt,
  genComponentStyleHook: c1,
  genSubStyleComponent: _a
} = t1({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Ge(Be);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, n, r, o] = jn();
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
    } = Ge(Be);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var n;
    const r = l1(e);
    return [r, {
      "&": r
    }, Hv((n = t?.prefix.iconPrefixCls) !== null && n !== void 0 ? n : sl)];
  },
  getCommonStyle: s1,
  getCompUnitless: () => Dv
});
function Vv(e, t) {
  return Zr.reduce((n, r) => {
    const o = e[`${r}1`], a = e[`${r}3`], i = e[`${r}6`], l = e[`${r}7`];
    return Object.assign(Object.assign({}, n), t(r, {
      lightColor: o,
      lightBorderColor: a,
      darkColor: i,
      textColor: l
    }));
  }, {});
}
const u1 = (e, t) => {
  const [n, r] = jn();
  return zs({
    token: r,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => Hv(e));
}, d1 = Object.assign({}, d), {
  useId: Td
} = d1, f1 = () => "", m1 = typeof Td > "u" ? f1 : Td;
function v1(e, t, n) {
  var r, o;
  const a = Rt("ConfigProvider"), i = e || {}, l = i.inherit === !1 || !t ? Object.assign(Object.assign({}, pa), {
    hashed: (r = t?.hashed) !== null && r !== void 0 ? r : pa.hashed,
    cssVar: t?.cssVar
  }) : t, s = m1();
  if (process.env.NODE_ENV !== "production") {
    const c = i.cssVar || l.cssVar, u = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || s);
    process.env.NODE_ENV !== "production" && a(!c || u, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return Ta(() => {
    var c, u;
    if (!e)
      return t;
    const f = Object.assign({}, l.components);
    Object.keys(e.components || {}).forEach((g) => {
      f[g] = Object.assign(Object.assign({}, f[g]), e.components[g]);
    });
    const m = `css-var-${s.replace(/:/g, "")}`, h = ((c = i.cssVar) !== null && c !== void 0 ? c : l.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: n?.prefixCls
    }, typeof l.cssVar == "object" ? l.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((u = i.cssVar) === null || u === void 0 ? void 0 : u.key) || m
    });
    return Object.assign(Object.assign(Object.assign({}, l), i), {
      token: Object.assign(Object.assign({}, l.token), i.token),
      components: f,
      cssVar: h
    });
  }, [i, l], (c, u) => c.some((f, m) => {
    const h = u[m];
    return !Ur(f, h, !0);
  }));
}
var g1 = ["children"], Wv = /* @__PURE__ */ d.createContext({});
function p1(e) {
  var t = e.children, n = De(e, g1);
  return /* @__PURE__ */ d.createElement(Wv.Provider, {
    value: n
  }, t);
}
var h1 = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n() {
    return Mt(this, n), t.apply(this, arguments);
  }
  return Tt(n, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), n;
})(d.Component);
function b1(e) {
  var t = d.useReducer(function(l) {
    return l + 1;
  }, 0), n = G(t, 2), r = n[1], o = d.useRef(e), a = bt(function() {
    return o.current;
  }), i = bt(function(l) {
    o.current = typeof l == "function" ? l(o.current) : l, r();
  });
  return [a, i];
}
var $r = "none", ai = "appear", ii = "enter", li = "leave", _d = "none", Dn = "prepare", xo = "start", So = "active", ru = "end", Gv = "prepared";
function Ad(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit".concat(e)] = "webkit".concat(t), n["Moz".concat(e)] = "moz".concat(t), n["ms".concat(e)] = "MS".concat(t), n["O".concat(e)] = "o".concat(t.toLowerCase()), n;
}
function y1(e, t) {
  var n = {
    animationend: Ad("Animation", "AnimationEnd"),
    transitionend: Ad("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete n.animationend.animation, "TransitionEvent" in t || delete n.transitionend.transition), n;
}
var C1 = y1(on(), typeof window < "u" ? window : {}), qv = {};
if (on()) {
  var x1 = document.createElement("div");
  qv = x1.style;
}
var si = {};
function Uv(e) {
  if (si[e])
    return si[e];
  var t = C1[e];
  if (t)
    for (var n = Object.keys(t), r = n.length, o = 0; o < r; o += 1) {
      var a = n[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in qv)
        return si[e] = t[a], si[e];
    }
  return "";
}
var Kv = Uv("animationend"), Xv = Uv("transitionend"), Yv = !!(Kv && Xv), jd = Kv || "animationend", Fd = Xv || "transitionend";
function Bd(e, t) {
  if (!e) return null;
  if (Se(e) === "object") {
    var n = t.replace(/-\w/g, function(r) {
      return r[1].toUpperCase();
    });
    return e[n];
  }
  return "".concat(e, "-").concat(t);
}
const S1 = (function(e) {
  var t = fe();
  function n(o) {
    o && (o.removeEventListener(Fd, e), o.removeEventListener(jd, e));
  }
  function r(o) {
    t.current && t.current !== o && n(t.current), o && o !== t.current && (o.addEventListener(Fd, e), o.addEventListener(jd, e), t.current = o);
  }
  return d.useEffect(function() {
    return function() {
      n(t.current);
    };
  }, []), [r, n];
});
var Zv = on() ? Ns : yt;
const w1 = (function() {
  var e = d.useRef(null);
  function t() {
    ft.cancel(e.current);
  }
  function n(r) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = ft(function() {
      o <= 1 ? r({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : n(r, o - 1);
    });
    e.current = a;
  }
  return d.useEffect(function() {
    return function() {
      t();
    };
  }, []), [n, t];
});
var $1 = [Dn, xo, So, ru], E1 = [Dn, Gv], Qv = !1, O1 = !0;
function Jv(e) {
  return e === So || e === ru;
}
const P1 = (function(e, t, n) {
  var r = Bo(_d), o = G(r, 2), a = o[0], i = o[1], l = w1(), s = G(l, 2), c = s[0], u = s[1];
  function f() {
    i(Dn, !0);
  }
  var m = t ? E1 : $1;
  return Zv(function() {
    if (a !== _d && a !== ru) {
      var h = m.indexOf(a), g = m[h + 1], p = n(a);
      p === Qv ? i(g, !0) : g && c(function(v) {
        function C() {
          v.isCanceled() || i(g, !0);
        }
        p === !0 ? C() : Promise.resolve(p).then(C);
      });
    }
  }, [e, a]), d.useEffect(function() {
    return function() {
      u();
    };
  }, []), [f, a];
});
function N1(e, t, n, r) {
  var o = r.motionEnter, a = o === void 0 ? !0 : o, i = r.motionAppear, l = i === void 0 ? !0 : i, s = r.motionLeave, c = s === void 0 ? !0 : s, u = r.motionDeadline, f = r.motionLeaveImmediately, m = r.onAppearPrepare, h = r.onEnterPrepare, g = r.onLeavePrepare, p = r.onAppearStart, v = r.onEnterStart, C = r.onLeaveStart, b = r.onAppearActive, x = r.onEnterActive, $ = r.onLeaveActive, y = r.onAppearEnd, S = r.onEnterEnd, w = r.onLeaveEnd, E = r.onVisibleChanged, O = Bo(), P = G(O, 2), N = P[0], R = P[1], _ = b1($r), I = G(_, 2), k = I[0], A = I[1], D = Bo(null), F = G(D, 2), q = F[0], K = F[1], Q = k(), W = fe(!1), L = fe(null);
  function z() {
    return n();
  }
  var H = fe(!1);
  function V() {
    A($r), K(null, !0);
  }
  var te = bt(function(xe) {
    var Pe = k();
    if (Pe !== $r) {
      var he = z();
      if (!(xe && !xe.deadline && xe.target !== he)) {
        var re = H.current, Ce;
        Pe === ai && re ? Ce = y?.(he, xe) : Pe === ii && re ? Ce = S?.(he, xe) : Pe === li && re && (Ce = w?.(he, xe)), re && Ce !== !1 && V();
      }
    }
  }), Y = S1(te), J = G(Y, 1), ae = J[0], le = function(Pe) {
    switch (Pe) {
      case ai:
        return j(j(j({}, Dn, m), xo, p), So, b);
      case ii:
        return j(j(j({}, Dn, h), xo, v), So, x);
      case li:
        return j(j(j({}, Dn, g), xo, C), So, $);
      default:
        return {};
    }
  }, X = d.useMemo(function() {
    return le(Q);
  }, [Q]), se = P1(Q, !e, function(xe) {
    if (xe === Dn) {
      var Pe = X[Dn];
      return Pe ? Pe(z()) : Qv;
    }
    if (ne in X) {
      var he;
      K(((he = X[ne]) === null || he === void 0 ? void 0 : he.call(X, z(), null)) || null);
    }
    return ne === So && Q !== $r && (ae(z()), u > 0 && (clearTimeout(L.current), L.current = setTimeout(function() {
      te({
        deadline: !0
      });
    }, u))), ne === Gv && V(), O1;
  }), Z = G(se, 2), oe = Z[0], ne = Z[1], me = Jv(ne);
  H.current = me;
  var ie = fe(null);
  Zv(function() {
    if (!(W.current && ie.current === t)) {
      R(t);
      var xe = W.current;
      W.current = !0;
      var Pe;
      !xe && t && l && (Pe = ai), xe && t && a && (Pe = ii), (xe && !t && c || !xe && f && !t && c) && (Pe = li);
      var he = le(Pe);
      Pe && (e || he[Dn]) ? (A(Pe), oe()) : A($r), ie.current = t;
    }
  }, [t]), yt(function() {
    // Cancel appear
    (Q === ai && !l || // Cancel enter
    Q === ii && !a || // Cancel leave
    Q === li && !c) && A($r);
  }, [l, a, c]), yt(function() {
    return function() {
      W.current = !1, clearTimeout(L.current);
    };
  }, []);
  var ce = d.useRef(!1);
  yt(function() {
    N && (ce.current = !0), N !== void 0 && Q === $r && ((ce.current || N) && E?.(N), ce.current = !0);
  }, [N, Q]);
  var we = q;
  return X[Dn] && ne === xo && (we = T({
    transition: "none"
  }, we)), [Q, ne, we, N ?? t];
}
function R1(e) {
  var t = e;
  Se(e) === "object" && (t = e.transitionSupport);
  function n(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var r = /* @__PURE__ */ d.forwardRef(function(o, a) {
    var i = o.visible, l = i === void 0 ? !0 : i, s = o.removeOnLeave, c = s === void 0 ? !0 : s, u = o.forceRender, f = o.children, m = o.motionName, h = o.leavedClassName, g = o.eventProps, p = d.useContext(Wv), v = p.motion, C = n(o, v), b = fe(), x = fe();
    function $() {
      try {
        return b.current instanceof HTMLElement ? b.current : hi(x.current);
      } catch {
        return null;
      }
    }
    var y = N1(C, l, $, o), S = G(y, 4), w = S[0], E = S[1], O = S[2], P = S[3], N = d.useRef(P);
    P && (N.current = !0);
    var R = d.useCallback(function(F) {
      b.current = F, zc(a, F);
    }, [a]), _, I = T(T({}, g), {}, {
      visible: l
    });
    if (!f)
      _ = null;
    else if (w === $r)
      P ? _ = f(T({}, I), R) : !c && N.current && h ? _ = f(T(T({}, I), {}, {
        className: h
      }), R) : u || !c && !h ? _ = f(T(T({}, I), {}, {
        style: {
          display: "none"
        }
      }), R) : _ = null;
    else {
      var k;
      E === Dn ? k = "prepare" : Jv(E) ? k = "active" : E === xo && (k = "start");
      var A = Bd(m, "".concat(w, "-").concat(k));
      _ = f(T(T({}, I), {}, {
        className: U(Bd(m, w), j(j({}, A, A && k), m, typeof m == "string")),
        style: O
      }), R);
    }
    if (/* @__PURE__ */ d.isValidElement(_) && _r(_)) {
      var D = Jr(_);
      D || (_ = /* @__PURE__ */ d.cloneElement(_, {
        ref: R
      }));
    }
    return /* @__PURE__ */ d.createElement(h1, {
      ref: x
    }, _);
  });
  return r.displayName = "CSSMotion", r;
}
const jr = R1(Yv);
var tc = "add", nc = "keep", rc = "remove", ns = "removed";
function I1(e) {
  var t;
  return e && Se(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, T(T({}, t), {}, {
    key: String(t.key)
  });
}
function oc() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(I1);
}
function M1() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = [], r = 0, o = t.length, a = oc(e), i = oc(t);
  a.forEach(function(c) {
    for (var u = !1, f = r; f < o; f += 1) {
      var m = i[f];
      if (m.key === c.key) {
        r < f && (n = n.concat(i.slice(r, f).map(function(h) {
          return T(T({}, h), {}, {
            status: tc
          });
        })), r = f), n.push(T(T({}, m), {}, {
          status: nc
        })), r += 1, u = !0;
        break;
      }
    }
    u || n.push(T(T({}, c), {}, {
      status: rc
    }));
  }), r < o && (n = n.concat(i.slice(r).map(function(c) {
    return T(T({}, c), {}, {
      status: tc
    });
  })));
  var l = {};
  n.forEach(function(c) {
    var u = c.key;
    l[u] = (l[u] || 0) + 1;
  });
  var s = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return s.forEach(function(c) {
    n = n.filter(function(u) {
      var f = u.key, m = u.status;
      return f !== c || m !== rc;
    }), n.forEach(function(u) {
      u.key === c && (u.status = nc);
    });
  }), n;
}
var T1 = ["component", "children", "onVisibleChanged", "onAllRemoved"], _1 = ["status"], A1 = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function j1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : jr, n = /* @__PURE__ */ (function(r) {
    mr(a, r);
    var o = vr(a);
    function a() {
      var i;
      Mt(this, a);
      for (var l = arguments.length, s = new Array(l), c = 0; c < l; c++)
        s[c] = arguments[c];
      return i = o.call.apply(o, [this].concat(s)), j(He(i), "state", {
        keyEntities: []
      }), j(He(i), "removeKey", function(u) {
        i.setState(function(f) {
          var m = f.keyEntities.map(function(h) {
            return h.key !== u ? h : T(T({}, h), {}, {
              status: ns
            });
          });
          return {
            keyEntities: m
          };
        }, function() {
          var f = i.state.keyEntities, m = f.filter(function(h) {
            var g = h.status;
            return g !== ns;
          }).length;
          m === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Tt(a, [{
      key: "render",
      value: function() {
        var l = this, s = this.state.keyEntities, c = this.props, u = c.component, f = c.children, m = c.onVisibleChanged;
        c.onAllRemoved;
        var h = De(c, T1), g = u || d.Fragment, p = {};
        return A1.forEach(function(v) {
          p[v] = h[v], delete h[v];
        }), delete h.keys, /* @__PURE__ */ d.createElement(g, h, s.map(function(v, C) {
          var b = v.status, x = De(v, _1), $ = b === tc || b === nc;
          return /* @__PURE__ */ d.createElement(t, ve({}, p, {
            key: x.key,
            visible: $,
            eventProps: x,
            onVisibleChanged: function(S) {
              m?.(S, {
                key: x.key
              }), S || l.removeKey(x.key);
            }
          }), function(y, S) {
            return f(T(T({}, y), {}, {
              index: C
            }), S);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, s) {
        var c = l.keys, u = s.keyEntities, f = oc(c), m = M1(u, f);
        return {
          keyEntities: m.filter(function(h) {
            var g = u.find(function(p) {
              var v = p.key;
              return h.key === v;
            });
            return !(g && g.status === ns && h.status === rc);
          })
        };
      }
    }]), a;
  })(d.Component);
  return j(n, "defaultProps", {
    component: "div"
  }), n;
}
const F1 = j1(Yv), ac = /* @__PURE__ */ d.createContext(!0);
process.env.NODE_ENV !== "production" && (ac.displayName = "MotionCacheContext");
function B1(e) {
  const t = d.useContext(ac), {
    children: n
  } = e, [, r] = jn(), {
    motion: o
  } = r, a = d.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ d.createElement(ac.Provider, {
    value: o
  }, /* @__PURE__ */ d.createElement(p1, {
    motion: o
  }, n)) : n;
}
const eg = /* @__PURE__ */ d.memo(({
  dropdownMatchSelectWidth: e
}) => (Rt("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (eg.displayName = "PropWarning");
const k1 = process.env.NODE_ENV !== "production" ? eg : () => null;
var D1 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let ic = !1;
const ou = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && Ar(!ic, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), L1 = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let Di, tg, ng, rg;
function Oi() {
  return Di || ha;
}
function z1() {
  return tg || sl;
}
function H1(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const V1 = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: n,
    theme: r,
    holderRender: o
  } = e;
  t !== void 0 && (Di = t), n !== void 0 && (tg = n), "holderRender" in e && (rg = o), r && (H1(r) ? (process.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), zy(Oi(), r)) : ng = r);
}, Aa = () => ({
  getPrefixCls: (e, t) => t || (e ? `${Oi()}-${e}` : Oi()),
  getIconPrefixCls: z1,
  getRootPrefixCls: () => Di || Oi(),
  getTheme: () => ng,
  holderRender: rg
}), W1 = (e) => {
  const {
    children: t,
    csp: n,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    form: i,
    locale: l,
    componentSize: s,
    direction: c,
    space: u,
    splitter: f,
    virtual: m,
    dropdownMatchSelectWidth: h,
    popupMatchSelectWidth: g,
    popupOverflow: p,
    legacyLocale: v,
    parentContext: C,
    iconPrefixCls: b,
    theme: x,
    componentDisabled: $,
    segmented: y,
    statistic: S,
    spin: w,
    calendar: E,
    carousel: O,
    cascader: P,
    collapse: N,
    typography: R,
    checkbox: _,
    descriptions: I,
    divider: k,
    drawer: A,
    skeleton: D,
    steps: F,
    image: q,
    layout: K,
    list: Q,
    mentions: W,
    modal: L,
    progress: z,
    result: H,
    slider: V,
    breadcrumb: te,
    menu: Y,
    pagination: J,
    input: ae,
    textArea: le,
    empty: X,
    badge: se,
    radio: Z,
    rate: oe,
    switch: ne,
    transfer: me,
    avatar: ie,
    message: ce,
    tag: we,
    table: xe,
    card: Pe,
    tabs: he,
    timeline: re,
    timePicker: Ce,
    upload: _e,
    notification: Ke,
    tree: Le,
    colorPicker: ze,
    datePicker: Xe,
    rangePicker: Oe,
    flex: Te,
    wave: Re,
    dropdown: ye,
    warning: Me,
    tour: Fe,
    tooltip: Ne,
    popover: et,
    popconfirm: Zt,
    floatButton: fn,
    floatButtonGroup: wn,
    variant: mn,
    inputNumber: Qt,
    treeSelect: Bt
  } = e, ct = d.useCallback((Ve, vt) => {
    const {
      prefixCls: xt
    } = e;
    if (vt)
      return vt;
    const Pt = xt || C.getPrefixCls("");
    return Ve ? `${Pt}-${Ve}` : Pt;
  }, [C.getPrefixCls, e.prefixCls]), Ye = b || C.iconPrefixCls || sl, Et = n || C.csp;
  u1(Ye, Et);
  const ht = v1(x, C.theme, {
    prefixCls: ct("")
  });
  process.env.NODE_ENV !== "production" && (ic = ic || !!ht);
  const qe = {
    csp: Et,
    autoInsertSpaceInButton: r,
    alert: o,
    anchor: a,
    locale: l || v,
    direction: c,
    space: u,
    splitter: f,
    virtual: m,
    popupMatchSelectWidth: g ?? h,
    popupOverflow: p,
    getPrefixCls: ct,
    iconPrefixCls: Ye,
    theme: ht,
    segmented: y,
    statistic: S,
    spin: w,
    calendar: E,
    carousel: O,
    cascader: P,
    collapse: N,
    typography: R,
    checkbox: _,
    descriptions: I,
    divider: k,
    drawer: A,
    skeleton: D,
    steps: F,
    image: q,
    input: ae,
    textArea: le,
    layout: K,
    list: Q,
    mentions: W,
    modal: L,
    progress: z,
    result: H,
    slider: V,
    breadcrumb: te,
    menu: Y,
    pagination: J,
    empty: X,
    badge: se,
    radio: Z,
    rate: oe,
    switch: ne,
    transfer: me,
    avatar: ie,
    message: ce,
    tag: we,
    table: xe,
    card: Pe,
    tabs: he,
    timeline: re,
    timePicker: Ce,
    upload: _e,
    notification: Ke,
    tree: Le,
    colorPicker: ze,
    datePicker: Xe,
    rangePicker: Oe,
    flex: Te,
    wave: Re,
    dropdown: ye,
    warning: Me,
    tour: Fe,
    tooltip: Ne,
    popover: et,
    popconfirm: Zt,
    floatButton: fn,
    floatButtonGroup: wn,
    variant: mn,
    inputNumber: Qt,
    treeSelect: Bt
  };
  process.env.NODE_ENV !== "production" && Rt("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const ke = Object.assign({}, C);
  Object.keys(qe).forEach((Ve) => {
    qe[Ve] !== void 0 && (ke[Ve] = qe[Ve]);
  }), L1.forEach((Ve) => {
    const vt = e[Ve];
    vt && (ke[Ve] = vt);
  }), typeof r < "u" && (ke.button = Object.assign({
    autoInsertSpace: r
  }, ke.button));
  const Ze = Ta(() => ke, ke, (Ve, vt) => {
    const xt = Object.keys(Ve), Pt = Object.keys(vt);
    return xt.length !== Pt.length || xt.some((Wt) => Ve[Wt] !== vt[Wt]);
  }), {
    layer: _t
  } = d.useContext(Kr), $e = d.useMemo(() => ({
    prefixCls: Ye,
    csp: Et,
    layer: _t ? "antd" : void 0
  }), [Ye, Et, _t]);
  let Ee = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(k1, {
    dropdownMatchSelectWidth: h
  }), t);
  const Qe = d.useMemo(() => {
    var Ve, vt, xt, Pt;
    return Co(((Ve = Tr.Form) === null || Ve === void 0 ? void 0 : Ve.defaultValidateMessages) || {}, ((xt = (vt = Ze.locale) === null || vt === void 0 ? void 0 : vt.Form) === null || xt === void 0 ? void 0 : xt.defaultValidateMessages) || {}, ((Pt = Ze.form) === null || Pt === void 0 ? void 0 : Pt.validateMessages) || {}, i?.validateMessages || {});
  }, [Ze, i?.validateMessages]);
  Object.keys(Qe).length > 0 && (Ee = /* @__PURE__ */ d.createElement(Sy.Provider, {
    value: Qe
  }, Ee)), l && (Ee = /* @__PURE__ */ d.createElement(Rv, {
    locale: l,
    _ANT_MARK__: Nv
  }, Ee)), Ee = /* @__PURE__ */ d.createElement(Yc.Provider, {
    value: $e
  }, Ee), s && (Ee = /* @__PURE__ */ d.createElement(Hy, {
    size: s
  }, Ee)), Ee = /* @__PURE__ */ d.createElement(B1, null, Ee);
  const Ct = d.useMemo(() => {
    const Ve = ht || {}, {
      algorithm: vt,
      token: xt,
      components: Pt,
      cssVar: Wt
    } = Ve, Gt = D1(Ve, ["algorithm", "token", "components", "cssVar"]), Jt = vt && (!Array.isArray(vt) || vt.length > 0) ? ji(vt) : Jc, qt = {};
    Object.entries(Pt || {}).forEach(([At, Fn]) => {
      const ue = Object.assign({}, Fn);
      "algorithm" in ue && (ue.algorithm === !0 ? ue.theme = Jt : (Array.isArray(ue.algorithm) || typeof ue.algorithm == "function") && (ue.theme = ji(ue.algorithm)), delete ue.algorithm), qt[At] = ue;
    });
    const ln = Object.assign(Object.assign({}, jo), xt);
    return Object.assign(Object.assign({}, Gt), {
      theme: Jt,
      token: ln,
      components: qt,
      override: Object.assign({
        override: ln
      }, qt),
      cssVar: Wt
    });
  }, [ht]);
  return x && (Ee = /* @__PURE__ */ d.createElement(eu.Provider, {
    value: Ct
  }, Ee)), Ze.warning && (Ee = /* @__PURE__ */ d.createElement(Ev.Provider, {
    value: Ze.warning
  }, Ee)), $ !== void 0 && (Ee = /* @__PURE__ */ d.createElement(jv, {
    disabled: $
  }, Ee)), /* @__PURE__ */ d.createElement(Be.Provider, {
    value: Ze
  }, Ee);
}, dn = (e) => {
  const t = d.useContext(Be), n = d.useContext(Zc);
  return /* @__PURE__ */ d.createElement(W1, Object.assign({
    parentContext: t,
    legacyLocale: n
  }, e));
};
dn.ConfigContext = Be;
dn.SizeContext = Fo;
dn.config = V1;
dn.useConfig = Vy;
Object.defineProperty(dn, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && Ar(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Fo)
});
process.env.NODE_ENV !== "production" && (dn.displayName = "ConfigProvider");
var G1 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function og(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function q1(e) {
  return og(e) instanceof ShadowRoot;
}
function Li(e) {
  return q1(e) ? og(e) : null;
}
function U1(e) {
  return e.replace(/-(.)/g, function(t, n) {
    return n.toUpperCase();
  });
}
function K1(e, t) {
  rt(e, "[@ant-design/icons] ".concat(t));
}
function kd(e) {
  return Se(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (Se(e.icon) === "object" || typeof e.icon == "function");
}
function Dd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, n) {
    var r = e[n];
    switch (n) {
      case "class":
        t.className = r, delete t.class;
        break;
      default:
        delete t[n], t[U1(n)] = r;
    }
    return t;
  }, {});
}
function lc(e, t, n) {
  return n ? /* @__PURE__ */ M.createElement(e.tag, T(T({
    key: t
  }, Dd(e.attrs)), n), (e.children || []).map(function(r, o) {
    return lc(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ M.createElement(e.tag, T({
    key: t
  }, Dd(e.attrs)), (e.children || []).map(function(r, o) {
    return lc(r, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function ag(e) {
  return Xr(e)[0];
}
function ig(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var X1 = `
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
`, Y1 = function(t) {
  var n = Ge(Yc), r = n.csp, o = n.prefixCls, a = n.layer, i = X1;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), yt(function() {
    var l = t.current, s = Li(l);
    lr(i, "@ant-design-icons", {
      prepend: !a,
      csp: r,
      attachTo: s
    });
  }, []);
}, Z1 = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], sa = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function Q1(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  sa.primaryColor = t, sa.secondaryColor = n || ag(t), sa.calculated = !!n;
}
function J1() {
  return T({}, sa);
}
var Ho = function(t) {
  var n = t.icon, r = t.className, o = t.onClick, a = t.style, i = t.primaryColor, l = t.secondaryColor, s = De(t, Z1), c = d.useRef(), u = sa;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: l || ag(i)
  }), Y1(c), K1(kd(n), "icon should be icon definiton, but got ".concat(n)), !kd(n))
    return null;
  var f = n;
  return f && typeof f.icon == "function" && (f = T(T({}, f), {}, {
    icon: f.icon(u.primaryColor, u.secondaryColor)
  })), lc(f.icon, "svg-".concat(f.name), T(T({
    className: r,
    onClick: o,
    style: a,
    "data-icon": f.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, s), {}, {
    ref: c
  }));
};
Ho.displayName = "IconReact";
Ho.getTwoToneColors = J1;
Ho.setTwoToneColors = Q1;
function lg(e) {
  var t = ig(e), n = G(t, 2), r = n[0], o = n[1];
  return Ho.setTwoToneColors({
    primaryColor: r,
    secondaryColor: o
  });
}
function eC() {
  var e = Ho.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var tC = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
lg(Bi.primary);
var Yt = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.className, r = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, l = e.onClick, s = e.twoToneColor, c = De(e, tC), u = d.useContext(Yc), f = u.prefixCls, m = f === void 0 ? "anticon" : f, h = u.rootClassName, g = U(h, m, j(j({}, "".concat(m, "-").concat(r.name), !!r.name), "".concat(m, "-spin"), !!o || r.name === "loading"), n), p = i;
  p === void 0 && l && (p = -1);
  var v = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, C = ig(s), b = G(C, 2), x = b[0], $ = b[1];
  return /* @__PURE__ */ d.createElement("span", ve({
    role: "img",
    "aria-label": r.name
  }, c, {
    ref: t,
    tabIndex: p,
    onClick: l,
    className: g
  }), /* @__PURE__ */ d.createElement(Ho, {
    icon: r,
    primaryColor: x,
    secondaryColor: $,
    style: v
  }));
});
Yt.displayName = "AntdIcon";
Yt.getTwoToneColor = eC;
Yt.setTwoToneColor = lg;
var nC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: G1
  }));
}, cl = /* @__PURE__ */ d.forwardRef(nC);
process.env.NODE_ENV !== "production" && (cl.displayName = "CheckCircleFilled");
var rC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, oC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: rC
  }));
}, ja = /* @__PURE__ */ d.forwardRef(oC);
process.env.NODE_ENV !== "production" && (ja.displayName = "CloseCircleFilled");
var aC = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, iC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: aC
  }));
}, eo = /* @__PURE__ */ d.forwardRef(iC);
process.env.NODE_ENV !== "production" && (eo.displayName = "CloseOutlined");
var lC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, sC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: lC
  }));
}, ul = /* @__PURE__ */ d.forwardRef(sC);
process.env.NODE_ENV !== "production" && (ul.displayName = "ExclamationCircleFilled");
var cC = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, uC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: cC
  }));
}, dl = /* @__PURE__ */ d.forwardRef(uC);
process.env.NODE_ENV !== "production" && (dl.displayName = "InfoCircleFilled");
var dC = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, fC = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, mC = "".concat(dC, " ").concat(fC).split(/[\s\n]+/), vC = "aria-", gC = "data-";
function Ld(e, t) {
  return e.indexOf(t) === 0;
}
function Fa(e) {
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
    (n.aria && (o === "role" || Ld(o, vC)) || // Data
    n.data && Ld(o, gC) || // Attr
    n.attr && mC.includes(o)) && (r[o] = e[o]);
  }), r;
}
function sg(e) {
  return e && /* @__PURE__ */ M.isValidElement(e) && e.type === M.Fragment;
}
const cg = (e, t, n) => /* @__PURE__ */ M.isValidElement(e) ? /* @__PURE__ */ M.cloneElement(e, typeof n == "function" ? n(e.props || {}) : n) : t;
function cr(e, t) {
  return cg(e, e, t);
}
const er = (e) => {
  const [, , , , t] = jn();
  return t ? `${e}-css-var` : "";
};
var cn = {
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
  ESC: 27,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40
}, au = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.style, o = e.className, a = e.duration, i = a === void 0 ? 4.5 : a, l = e.showProgress, s = e.pauseOnHover, c = s === void 0 ? !0 : s, u = e.eventKey, f = e.content, m = e.closable, h = e.closeIcon, g = h === void 0 ? "x" : h, p = e.props, v = e.onClick, C = e.onNoticeClose, b = e.times, x = e.hovering, $ = d.useState(!1), y = G($, 2), S = y[0], w = y[1], E = d.useState(0), O = G(E, 2), P = O[0], N = O[1], R = d.useState(0), _ = G(R, 2), I = _[0], k = _[1], A = x || S, D = i > 0 && l, F = function() {
    C(u);
  }, q = function(H) {
    (H.key === "Enter" || H.code === "Enter" || H.keyCode === cn.ENTER) && F();
  };
  d.useEffect(function() {
    if (!A && i > 0) {
      var z = Date.now() - I, H = setTimeout(function() {
        F();
      }, i * 1e3 - I);
      return function() {
        c && clearTimeout(H), k(Date.now() - z);
      };
    }
  }, [i, A, b]), d.useEffect(function() {
    if (!A && D && (c || I === 0)) {
      var z = performance.now(), H, V = function te() {
        cancelAnimationFrame(H), H = requestAnimationFrame(function(Y) {
          var J = Y + I - z, ae = Math.min(J / (i * 1e3), 1);
          N(ae * 100), ae < 1 && te();
        });
      };
      return V(), function() {
        c && cancelAnimationFrame(H);
      };
    }
  }, [i, I, A, D, b]);
  var K = d.useMemo(function() {
    return Se(m) === "object" && m !== null ? m : m ? {
      closeIcon: g
    } : {};
  }, [m, g]), Q = Fa(K, !0), W = 100 - (!P || P < 0 ? 0 : P > 100 ? 100 : P), L = "".concat(n, "-notice");
  return /* @__PURE__ */ d.createElement("div", ve({}, p, {
    ref: t,
    className: U(L, o, j({}, "".concat(L, "-closable"), m)),
    style: r,
    onMouseEnter: function(H) {
      var V;
      w(!0), p == null || (V = p.onMouseEnter) === null || V === void 0 || V.call(p, H);
    },
    onMouseLeave: function(H) {
      var V;
      w(!1), p == null || (V = p.onMouseLeave) === null || V === void 0 || V.call(p, H);
    },
    onClick: v
  }), /* @__PURE__ */ d.createElement("div", {
    className: "".concat(L, "-content")
  }, f), m && /* @__PURE__ */ d.createElement("a", ve({
    tabIndex: 0,
    className: "".concat(L, "-close"),
    onKeyDown: q,
    "aria-label": "Close"
  }, Q, {
    onClick: function(H) {
      H.preventDefault(), H.stopPropagation(), F();
    }
  }), K.closeIcon), D && /* @__PURE__ */ d.createElement("progress", {
    className: "".concat(L, "-progress"),
    max: "100",
    value: W
  }, W + "%"));
}), ug = /* @__PURE__ */ M.createContext({}), dg = function(t) {
  var n = t.children, r = t.classNames;
  return /* @__PURE__ */ M.createElement(ug.Provider, {
    value: {
      classNames: r
    }
  }, n);
}, zd = 8, Hd = 3, Vd = 16, pC = function(t) {
  var n = {
    offset: zd,
    threshold: Hd,
    gap: Vd
  };
  if (t && Se(t) === "object") {
    var r, o, a;
    n.offset = (r = t.offset) !== null && r !== void 0 ? r : zd, n.threshold = (o = t.threshold) !== null && o !== void 0 ? o : Hd, n.gap = (a = t.gap) !== null && a !== void 0 ? a : Vd;
  }
  return [!!t, n];
}, hC = ["className", "style", "classNames", "styles"], fg = function(t) {
  var n = t.configList, r = t.placement, o = t.prefixCls, a = t.className, i = t.style, l = t.motion, s = t.onAllNoticeRemoved, c = t.onNoticeClose, u = t.stack, f = Ge(ug), m = f.classNames, h = fe({}), g = Ht(null), p = G(g, 2), v = p[0], C = p[1], b = Ht([]), x = G(b, 2), $ = x[0], y = x[1], S = n.map(function(A) {
    return {
      config: A,
      key: String(A.key)
    };
  }), w = pC(u), E = G(w, 2), O = E[0], P = E[1], N = P.offset, R = P.threshold, _ = P.gap, I = O && ($.length > 0 || S.length <= R), k = typeof l == "function" ? l(r) : l;
  return yt(function() {
    O && $.length > 1 && y(function(A) {
      return A.filter(function(D) {
        return S.some(function(F) {
          var q = F.key;
          return D === q;
        });
      });
    });
  }, [$, S, O]), yt(function() {
    var A;
    if (O && h.current[(A = S[S.length - 1]) === null || A === void 0 ? void 0 : A.key]) {
      var D;
      C(h.current[(D = S[S.length - 1]) === null || D === void 0 ? void 0 : D.key]);
    }
  }, [S, O]), /* @__PURE__ */ M.createElement(F1, ve({
    key: r,
    className: U(o, "".concat(o, "-").concat(r), m?.list, a, j(j({}, "".concat(o, "-stack"), !!O), "".concat(o, "-stack-expanded"), I)),
    style: i,
    keys: S,
    motionAppear: !0
  }, k, {
    onAllRemoved: function() {
      s(r);
    }
  }), function(A, D) {
    var F = A.config, q = A.className, K = A.style, Q = A.index, W = F, L = W.key, z = W.times, H = String(L), V = F, te = V.className, Y = V.style, J = V.classNames, ae = V.styles, le = De(V, hC), X = S.findIndex(function(re) {
      return re.key === H;
    }), se = {};
    if (O) {
      var Z = S.length - 1 - (X > -1 ? X : Q - 1), oe = r === "top" || r === "bottom" ? "-50%" : "0";
      if (Z > 0) {
        var ne, me, ie;
        se.height = I ? (ne = h.current[H]) === null || ne === void 0 ? void 0 : ne.offsetHeight : v?.offsetHeight;
        for (var ce = 0, we = 0; we < Z; we++) {
          var xe;
          ce += ((xe = h.current[S[S.length - 1 - we].key]) === null || xe === void 0 ? void 0 : xe.offsetHeight) + _;
        }
        var Pe = (I ? ce : Z * N) * (r.startsWith("top") ? 1 : -1), he = !I && v !== null && v !== void 0 && v.offsetWidth && (me = h.current[H]) !== null && me !== void 0 && me.offsetWidth ? (v?.offsetWidth - N * 2 * (Z < 3 ? Z : 3)) / ((ie = h.current[H]) === null || ie === void 0 ? void 0 : ie.offsetWidth) : 1;
        se.transform = "translate3d(".concat(oe, ", ").concat(Pe, "px, 0) scaleX(").concat(he, ")");
      } else
        se.transform = "translate3d(".concat(oe, ", 0, 0)");
    }
    return /* @__PURE__ */ M.createElement("div", {
      ref: D,
      className: U("".concat(o, "-notice-wrapper"), q, J?.wrapper),
      style: T(T(T({}, K), se), ae?.wrapper),
      onMouseEnter: function() {
        return y(function(Ce) {
          return Ce.includes(H) ? Ce : [].concat(de(Ce), [H]);
        });
      },
      onMouseLeave: function() {
        return y(function(Ce) {
          return Ce.filter(function(_e) {
            return _e !== H;
          });
        });
      }
    }, /* @__PURE__ */ M.createElement(au, ve({}, le, {
      ref: function(Ce) {
        X > -1 ? h.current[H] = Ce : delete h.current[H];
      },
      prefixCls: o,
      classNames: J,
      styles: ae,
      className: U(te, m?.notice),
      style: Y,
      times: z,
      key: L,
      eventKey: L,
      onNoticeClose: c,
      hovering: O && $.length > 0
    })));
  });
};
process.env.NODE_ENV !== "production" && (fg.displayName = "NoticeList");
var mg = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-notification" : n, o = e.container, a = e.motion, i = e.maxCount, l = e.className, s = e.style, c = e.onAllRemoved, u = e.stack, f = e.renderNotifications, m = d.useState([]), h = G(m, 2), g = h[0], p = h[1], v = function(O) {
    var P, N = g.find(function(R) {
      return R.key === O;
    });
    N == null || (P = N.onClose) === null || P === void 0 || P.call(N), p(function(R) {
      return R.filter(function(_) {
        return _.key !== O;
      });
    });
  };
  d.useImperativeHandle(t, function() {
    return {
      open: function(O) {
        p(function(P) {
          var N = de(P), R = N.findIndex(function(k) {
            return k.key === O.key;
          }), _ = T({}, O);
          if (R >= 0) {
            var I;
            _.times = (((I = P[R]) === null || I === void 0 ? void 0 : I.times) || 0) + 1, N[R] = _;
          } else
            _.times = 0, N.push(_);
          return i > 0 && N.length > i && (N = N.slice(-i)), N;
        });
      },
      close: function(O) {
        v(O);
      },
      destroy: function() {
        p([]);
      }
    };
  });
  var C = d.useState({}), b = G(C, 2), x = b[0], $ = b[1];
  d.useEffect(function() {
    var E = {};
    g.forEach(function(O) {
      var P = O.placement, N = P === void 0 ? "topRight" : P;
      N && (E[N] = E[N] || [], E[N].push(O));
    }), Object.keys(x).forEach(function(O) {
      E[O] = E[O] || [];
    }), $(E);
  }, [g]);
  var y = function(O) {
    $(function(P) {
      var N = T({}, P), R = N[O] || [];
      return R.length || delete N[O], N;
    });
  }, S = d.useRef(!1);
  if (d.useEffect(function() {
    Object.keys(x).length > 0 ? S.current = !0 : S.current && (c?.(), S.current = !1);
  }, [x]), !o)
    return null;
  var w = Object.keys(x);
  return /* @__PURE__ */ jm(/* @__PURE__ */ d.createElement(d.Fragment, null, w.map(function(E) {
    var O = x[E], P = /* @__PURE__ */ d.createElement(fg, {
      key: E,
      configList: O,
      placement: E,
      prefixCls: r,
      className: l?.(E),
      style: s?.(E),
      motion: a,
      onNoticeClose: v,
      onAllNoticeRemoved: y,
      stack: u
    });
    return f ? f(P, {
      prefixCls: r,
      key: E
    }) : P;
  })), o);
});
process.env.NODE_ENV !== "production" && (mg.displayName = "Notifications");
var bC = ["getContainer", "motion", "prefixCls", "maxCount", "className", "style", "onAllRemoved", "stack", "renderNotifications"], yC = function() {
  return document.body;
}, Wd = 0;
function CC() {
  for (var e = {}, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return n.forEach(function(o) {
    o && Object.keys(o).forEach(function(a) {
      var i = o[a];
      i !== void 0 && (e[a] = i);
    });
  }), e;
}
function vg() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.getContainer, n = t === void 0 ? yC : t, r = e.motion, o = e.prefixCls, a = e.maxCount, i = e.className, l = e.style, s = e.onAllRemoved, c = e.stack, u = e.renderNotifications, f = De(e, bC), m = d.useState(), h = G(m, 2), g = h[0], p = h[1], v = d.useRef(), C = /* @__PURE__ */ d.createElement(mg, {
    container: g,
    ref: v,
    prefixCls: o,
    motion: r,
    maxCount: a,
    className: i,
    style: l,
    onAllRemoved: s,
    stack: c,
    renderNotifications: u
  }), b = d.useState([]), x = G(b, 2), $ = x[0], y = x[1], S = bt(function(E) {
    var O = CC(f, E);
    (O.key === null || O.key === void 0) && (O.key = "rc-notification-".concat(Wd), Wd += 1), y(function(P) {
      return [].concat(de(P), [{
        type: "open",
        config: O
      }]);
    });
  }), w = d.useMemo(function() {
    return {
      open: S,
      close: function(O) {
        y(function(P) {
          return [].concat(de(P), [{
            type: "close",
            key: O
          }]);
        });
      },
      destroy: function() {
        y(function(O) {
          return [].concat(de(O), [{
            type: "destroy"
          }]);
        });
      }
    };
  }, []);
  return d.useEffect(function() {
    p(n());
  }), d.useEffect(function() {
    if (v.current && $.length) {
      $.forEach(function(P) {
        switch (P.type) {
          case "open":
            v.current.open(P.config);
            break;
          case "close":
            v.current.close(P.key);
            break;
          case "destroy":
            v.current.destroy();
            break;
        }
      });
      var E, O;
      y(function(P) {
        return (E !== P || !O) && (E = P, O = P.filter(function(N) {
          return !$.includes(N);
        })), O;
      });
    }
  }, [$]), [w, C];
}
var xC = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, SC = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: xC
  }));
}, iu = /* @__PURE__ */ d.forwardRef(SC);
process.env.NODE_ENV !== "production" && (iu.displayName = "LoadingOutlined");
function Gd(...e) {
  const t = {};
  return e.forEach((n) => {
    n && Object.keys(n).forEach((r) => {
      n[r] !== void 0 && (t[r] = n[r]);
    });
  }), t;
}
function zi(e) {
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
function qd(e) {
  const {
    closable: t,
    closeIcon: n
  } = e || {};
  return M.useMemo(() => {
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
const wC = {}, gg = (e, t, n = wC) => {
  const r = qd(e), o = qd(t), [a] = il("global", Tr.global), i = typeof r != "boolean" ? !!r?.disabled : !1, l = M.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ M.createElement(eo, null)
  }, n), [n]), s = M.useMemo(() => r === !1 ? !1 : r ? Gd(l, o, r) : o === !1 ? !1 : o ? Gd(l, o) : l.closable ? l : !1, [r, o, l]);
  return M.useMemo(() => {
    var c, u;
    if (s === !1)
      return [!1, null, i, {}];
    const {
      closeIconRender: f
    } = l, {
      closeIcon: m
    } = s;
    let h = m;
    const g = Fa(s, !0);
    return h != null && (f && (h = f(m)), h = /* @__PURE__ */ M.isValidElement(h) ? /* @__PURE__ */ M.cloneElement(h, Object.assign(Object.assign(Object.assign({}, h.props), {
      "aria-label": (u = (c = h.props) === null || c === void 0 ? void 0 : c["aria-label"]) !== null && u !== void 0 ? u : a.close
    }), g)) : /* @__PURE__ */ M.createElement("span", Object.assign({
      "aria-label": a.close
    }, g), h)), [!0, h, i, g];
  }, [i, a.close, s, l]);
}, $C = () => {
  const [e, t] = d.useState([]), n = d.useCallback((r) => (t((o) => [].concat(de(o), [r])), () => {
    t((o) => o.filter((a) => a !== r));
  }), []);
  return [e, n];
}, Ba = /* @__PURE__ */ M.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ba.displayName = "zIndexContext");
const ar = 100, EC = 10, fl = ar * EC, OC = fl + ar, pg = {
  Modal: ar,
  Drawer: ar,
  Popover: ar,
  Popconfirm: ar,
  Tooltip: ar,
  Tour: ar,
  FloatButton: ar
}, PC = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function NC(e) {
  return e in pg;
}
const ml = (e, t) => {
  const [, n] = jn(), r = M.useContext(Ba), o = NC(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = r ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (r ? 0 : n.zIndexPopupBase) + // Container offset
    pg[e] : i += PC[e], a = [r === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = Rt(e), l = n.zIndexPopupBase + OC, s = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || s <= l, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
}, RC = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    boxShadow: r,
    colorText: o,
    colorSuccess: a,
    colorError: i,
    colorWarning: l,
    colorInfo: s,
    fontSizeLG: c,
    motionEaseInOutCirc: u,
    motionDurationSlow: f,
    marginXS: m,
    paddingXS: h,
    borderRadiusLG: g,
    zIndexPopup: p,
    // Custom token
    contentPadding: v,
    contentBg: C
  } = e, b = `${t}-notice`, x = new We("MessageMoveIn", {
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
  }), $ = new We("MessageMoveOut", {
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
  }), y = {
    padding: h,
    textAlign: "center",
    [`${t}-custom-content`]: {
      display: "flex",
      alignItems: "center"
    },
    [`${t}-custom-content > ${n}`]: {
      marginInlineEnd: m,
      // affected by ltr or rtl
      fontSize: c
    },
    [`${b}-content`]: {
      display: "inline-block",
      padding: v,
      background: C,
      borderRadius: g,
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
      color: l
    },
    [`${t}-info > ${n},
      ${t}-loading > ${n}`]: {
      color: s
    }
  };
  return [
    // ============================ Holder ============================
    {
      [t]: Object.assign(Object.assign({}, pr(e)), {
        color: o,
        position: "fixed",
        top: m,
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
          animationName: $,
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
        [`${b}-wrapper`]: Object.assign({}, y)
      }
    },
    // ============================= Pure =============================
    {
      [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, y), {
        padding: 0,
        textAlign: "start"
      })
    }
  ];
}, IC = (e) => ({
  zIndexPopup: e.zIndexPopupBase + fl + 10,
  contentBg: e.colorBgElevated,
  contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`
}), hg = Vt("Message", (e) => {
  const t = $t(e, {
    height: 150
  });
  return RC(t);
}, IC);
var MC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const TC = {
  info: /* @__PURE__ */ d.createElement(dl, null),
  success: /* @__PURE__ */ d.createElement(cl, null),
  error: /* @__PURE__ */ d.createElement(ja, null),
  warning: /* @__PURE__ */ d.createElement(ul, null),
  loading: /* @__PURE__ */ d.createElement(iu, null)
}, bg = ({
  prefixCls: e,
  type: t,
  icon: n,
  children: r
}) => /* @__PURE__ */ d.createElement("div", {
  className: U(`${e}-custom-content`, `${e}-${t}`)
}, n || TC[t], /* @__PURE__ */ d.createElement("span", null, r)), _C = (e) => {
  const {
    prefixCls: t,
    className: n,
    type: r,
    icon: o,
    content: a
  } = e, i = MC(e, ["prefixCls", "className", "type", "icon", "content"]), {
    getPrefixCls: l
  } = d.useContext(Be), s = t || l("message"), c = er(s), [u, f, m] = hg(s, c);
  return u(/* @__PURE__ */ d.createElement(au, Object.assign({}, i, {
    prefixCls: s,
    className: U(n, f, `${s}-notice-pure-panel`, m, c),
    eventKey: "pure",
    duration: null,
    content: /* @__PURE__ */ d.createElement(bg, {
      prefixCls: s,
      type: r,
      icon: o
    }, a)
  })));
};
function AC(e, t) {
  return {
    motionName: t ?? `${e}-move-up`
  };
}
function lu(e) {
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
var jC = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const FC = 8, BC = 3, kC = ({
  children: e,
  prefixCls: t
}) => {
  const n = er(t), [r, o, a] = hg(t, n);
  return r(/* @__PURE__ */ d.createElement(dg, {
    classNames: {
      list: U(o, a, n)
    }
  }, e));
}, DC = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ d.createElement(kC, {
  prefixCls: t,
  key: n
}, e), LC = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    top: n,
    prefixCls: r,
    getContainer: o,
    maxCount: a,
    duration: i = BC,
    rtl: l,
    transitionName: s,
    onAllRemoved: c
  } = e, {
    getPrefixCls: u,
    getPopupContainer: f,
    message: m,
    direction: h
  } = d.useContext(Be), g = r || u("message"), p = () => ({
    left: "50%",
    transform: "translateX(-50%)",
    top: n ?? FC
  }), v = () => U({
    [`${g}-rtl`]: l ?? h === "rtl"
  }), C = () => AC(g, s), b = /* @__PURE__ */ d.createElement("span", {
    className: `${g}-close-x`
  }, /* @__PURE__ */ d.createElement(eo, {
    className: `${g}-close-icon`
  })), [x, $] = vg({
    prefixCls: g,
    style: p,
    className: v,
    motion: C,
    closable: !1,
    closeIcon: b,
    duration: i,
    getContainer: () => o?.() || f?.() || document.body,
    maxCount: a,
    onAllRemoved: c,
    renderNotifications: DC
  });
  return d.useImperativeHandle(t, () => Object.assign(Object.assign({}, x), {
    prefixCls: g,
    message: m
  })), $;
});
let Ud = 0;
function yg(e) {
  const t = d.useRef(null), n = Rt("Message");
  return [d.useMemo(() => {
    const o = (c) => {
      var u;
      (u = t.current) === null || u === void 0 || u.close(c);
    }, a = (c) => {
      if (!t.current) {
        process.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        const w = () => {
        };
        return w.then = () => {
        }, w;
      }
      const {
        open: u,
        prefixCls: f,
        message: m
      } = t.current, h = `${f}-notice`, {
        content: g,
        icon: p,
        type: v,
        key: C,
        className: b,
        style: x,
        onClose: $
      } = c, y = jC(c, ["content", "icon", "type", "key", "className", "style", "onClose"]);
      let S = C;
      return S == null && (Ud += 1, S = `antd-message-${Ud}`), lu((w) => (u(Object.assign(Object.assign({}, y), {
        key: S,
        content: /* @__PURE__ */ d.createElement(bg, {
          prefixCls: f,
          type: v,
          icon: p
        }, g),
        placement: "top",
        className: U(v && `${h}-${v}`, b, m?.className),
        style: Object.assign(Object.assign({}, m?.style), x),
        onClose: () => {
          $?.(), w();
        }
      })), () => {
        o(S);
      }));
    }, l = {
      open: a,
      destroy: (c) => {
        var u;
        c !== void 0 ? o(c) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["info", "success", "warning", "error", "loading"].forEach((c) => {
      const u = (f, m, h) => {
        let g;
        f && typeof f == "object" && "content" in f ? g = f : g = {
          content: f
        };
        let p, v;
        typeof m == "function" ? v = m : (p = m, v = h);
        const C = Object.assign(Object.assign({
          onClose: v,
          duration: p
        }, g), {
          type: c
        });
        return a(C);
      };
      l[c] = u;
    }), l;
  }, []), /* @__PURE__ */ d.createElement(LC, Object.assign({
    key: "message-holder"
  }, e, {
    ref: t
  }))];
}
function zC(e) {
  return yg(e);
}
function Cg(e, t) {
  this.v = e, this.k = t;
}
function tn(e, t, n, r) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  tn = function(i, l, s, c) {
    function u(f, m) {
      tn(i, f, function(h) {
        return this._invoke(f, m, h);
      });
    }
    l ? o ? o(i, l, {
      value: s,
      enumerable: !c,
      configurable: !c,
      writable: !c
    }) : i[l] = s : (u("next", 0), u("throw", 1), u("return", 2));
  }, tn(e, t, n, r);
}
function su() {
  var e, t, n = typeof Symbol == "function" ? Symbol : {}, r = n.iterator || "@@iterator", o = n.toStringTag || "@@toStringTag";
  function a(h, g, p, v) {
    var C = g && g.prototype instanceof l ? g : l, b = Object.create(C.prototype);
    return tn(b, "_invoke", (function(x, $, y) {
      var S, w, E, O = 0, P = y || [], N = !1, R = {
        p: 0,
        n: 0,
        v: e,
        a: _,
        f: _.bind(e, 4),
        d: function(k, A) {
          return S = k, w = 0, E = e, R.n = A, i;
        }
      };
      function _(I, k) {
        for (w = I, E = k, t = 0; !N && O && !A && t < P.length; t++) {
          var A, D = P[t], F = R.p, q = D[2];
          I > 3 ? (A = q === k) && (E = D[(w = D[4]) ? 5 : (w = 3, 3)], D[4] = D[5] = e) : D[0] <= F && ((A = I < 2 && F < D[1]) ? (w = 0, R.v = k, R.n = D[1]) : F < q && (A = I < 3 || D[0] > k || k > q) && (D[4] = I, D[5] = k, R.n = q, w = 0));
        }
        if (A || I > 1) return i;
        throw N = !0, k;
      }
      return function(I, k, A) {
        if (O > 1) throw TypeError("Generator is already running");
        for (N && k === 1 && _(k, A), w = k, E = A; (t = w < 2 ? e : E) || !N; ) {
          S || (w ? w < 3 ? (w > 1 && (R.n = -1), _(w, E)) : R.n = E : R.v = E);
          try {
            if (O = 2, S) {
              if (w || (I = "next"), t = S[I]) {
                if (!(t = t.call(S, E))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                E = t.value, w < 2 && (w = 0);
              } else w === 1 && (t = S.return) && t.call(S), w < 2 && (E = TypeError("The iterator does not provide a '" + I + "' method"), w = 1);
              S = e;
            } else if ((t = (N = R.n < 0) ? E : x.call($, R)) !== i) break;
          } catch (D) {
            S = e, w = 1, E = D;
          } finally {
            O = 1;
          }
        }
        return {
          value: t,
          done: N
        };
      };
    })(h, p, v), !0), b;
  }
  var i = {};
  function l() {
  }
  function s() {
  }
  function c() {
  }
  t = Object.getPrototypeOf;
  var u = [][r] ? t(t([][r]())) : (tn(t = {}, r, function() {
    return this;
  }), t), f = c.prototype = l.prototype = Object.create(u);
  function m(h) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(h, c) : (h.__proto__ = c, tn(h, o, "GeneratorFunction")), h.prototype = Object.create(f), h;
  }
  return s.prototype = c, tn(f, "constructor", c), tn(c, "constructor", s), s.displayName = "GeneratorFunction", tn(c, o, "GeneratorFunction"), tn(f), tn(f, o, "Generator"), tn(f, r, function() {
    return this;
  }), tn(f, "toString", function() {
    return "[object Generator]";
  }), (su = function() {
    return {
      w: a,
      m
    };
  })();
}
function Hi(e, t) {
  function n(o, a, i, l) {
    try {
      var s = e[o](a), c = s.value;
      return c instanceof Cg ? t.resolve(c.v).then(function(u) {
        n("next", u, i, l);
      }, function(u) {
        n("throw", u, i, l);
      }) : t.resolve(c).then(function(u) {
        s.value = u, i(s);
      }, function(u) {
        return n("throw", u, i, l);
      });
    } catch (u) {
      l(u);
    }
  }
  var r;
  this.next || (tn(Hi.prototype), tn(Hi.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), tn(this, "_invoke", function(o, a, i) {
    function l() {
      return new t(function(s, c) {
        n(o, i, s, c);
      });
    }
    return r = r ? r.then(l, l) : l();
  }, !0);
}
function xg(e, t, n, r, o) {
  return new Hi(su().w(e, t, n, r), o || Promise);
}
function HC(e, t, n, r, o) {
  var a = xg(e, t, n, r, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function VC(e) {
  var t = Object(e), n = [];
  for (var r in t) n.unshift(r);
  return function o() {
    for (; n.length; ) if ((r = n.pop()) in t) return o.value = r, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Kd(e) {
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
  throw new TypeError(Se(e) + " is not iterable");
}
function rn() {
  var e = su(), t = e.m(rn), n = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function r(i) {
    var l = typeof i == "function" && i.constructor;
    return !!l && (l === n || (l.displayName || l.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var l, s;
    return function(c) {
      l || (l = {
        stop: function() {
          return s(c.a, 2);
        },
        catch: function() {
          return c.v;
        },
        abrupt: function(f, m) {
          return s(c.a, o[f], m);
        },
        delegateYield: function(f, m, h) {
          return l.resultName = m, s(c.d, Kd(f), h);
        },
        finish: function(f) {
          return s(c.f, f);
        }
      }, s = function(f, m, h) {
        c.p = l.prev, c.n = l.next;
        try {
          return f(m, h);
        } finally {
          l.next = c.n;
        }
      }), l.resultName && (l[l.resultName] = c.v, l.resultName = void 0), l.sent = c.v, l.next = c.n;
      try {
        return i.call(this, l);
      } finally {
        c.p = l.prev, c.n = l.next;
      }
    };
  }
  return (rn = function() {
    return {
      wrap: function(s, c, u, f) {
        return e.w(a(s), c, u, f && f.reverse());
      },
      isGeneratorFunction: r,
      mark: e.m,
      awrap: function(s, c) {
        return new Cg(s, c);
      },
      AsyncIterator: Hi,
      async: function(s, c, u, f, m) {
        return (r(c) ? xg : HC)(a(s), c, u, f, m);
      },
      keys: VC,
      values: Kd
    };
  })();
}
function Xd(e, t, n, r, o, a, i) {
  try {
    var l = e[a](i), s = l.value;
  } catch (c) {
    return void n(c);
  }
  l.done ? t(s) : Promise.resolve(s).then(r, o);
}
function to(e) {
  return function() {
    var t = this, n = arguments;
    return new Promise(function(r, o) {
      var a = e.apply(t, n);
      function i(s) {
        Xd(a, r, o, i, l, "next", s);
      }
      function l(s) {
        Xd(a, r, o, i, l, "throw", s);
      }
      i(void 0);
    });
  };
}
var ka = T({}, Am), WC = ka.version, rs = ka.render, GC = ka.unmountComponentAtNode, vl;
try {
  var qC = Number((WC || "").split(".")[0]);
  qC >= 18 && (vl = ka.createRoot);
} catch {
}
function Yd(e) {
  var t = ka.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && Se(t) === "object" && (t.usingClientEntryPoint = e);
}
var Vi = "__rc_react_root__";
function UC(e, t) {
  Yd(!0);
  var n = t[Vi] || vl(t);
  Yd(!1), n.render(e), t[Vi] = n;
}
function KC(e, t) {
  rs?.(e, t);
}
function XC(e, t) {
  if (vl) {
    UC(e, t);
    return;
  }
  KC(e, t);
}
function YC(e) {
  return sc.apply(this, arguments);
}
function sc() {
  return sc = to(/* @__PURE__ */ rn().mark(function e(t) {
    return rn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[Vi]) === null || o === void 0 || o.unmount(), delete t[Vi];
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), sc.apply(this, arguments);
}
function ZC(e) {
  GC(e);
}
function QC(e) {
  return cc.apply(this, arguments);
}
function cc() {
  return cc = to(/* @__PURE__ */ rn().mark(function e(t) {
    return rn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          if (vl === void 0) {
            r.next = 2;
            break;
          }
          return r.abrupt("return", YC(t));
        case 2:
          ZC(t);
        case 3:
        case "end":
          return r.stop();
      }
    }, e);
  })), cc.apply(this, arguments);
}
const JC = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const n = Number.parseInt(d.version.split(".")[0], 10), r = Object.keys(Am);
    process.env.NODE_ENV !== "production" && Ar(n < 19 || r.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return XC(e, t), () => QC(t);
};
let ex = JC;
function gl(e) {
  return ex;
}
const os = () => ({
  height: 0,
  opacity: 0
}), Zd = (e) => {
  const {
    scrollHeight: t
  } = e;
  return {
    height: t,
    opacity: 1
  };
}, tx = (e) => ({
  height: e ? e.offsetHeight : 0
}), as = (e, t) => t?.deadline === !0 || t.propertyName === "height", nx = (e = ha) => ({
  motionName: `${e}-motion-collapse`,
  onAppearStart: os,
  onEnterStart: os,
  onAppearActive: Zd,
  onEnterActive: Zd,
  onLeaveStart: tx,
  onLeaveActive: os,
  onAppearEnd: as,
  onEnterEnd: as,
  onLeaveEnd: as,
  motionDeadline: 500
}), ya = (e, t, n) => n !== void 0 ? n : `${e}-${t}`;
function an(e, t) {
  var n = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(r) {
    delete n[r];
  }), n;
}
const cu = (function(e) {
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
}), rx = (e) => {
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
}, ox = c1("Wave", rx), Sg = `${ha}-wave-target`;
function ax(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function ix(e) {
  var t;
  const {
    borderTopColor: n,
    borderColor: r,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [n, r, o].find(ax)) !== null && t !== void 0 ? t : null;
}
function is(e) {
  return Number.isNaN(e) ? 0 : e;
}
const lx = (e) => {
  const {
    className: t,
    target: n,
    component: r,
    registerUnmount: o
  } = e, a = d.useRef(null), i = d.useRef(null);
  d.useEffect(() => {
    i.current = o();
  }, []);
  const [l, s] = d.useState(null), [c, u] = d.useState([]), [f, m] = d.useState(0), [h, g] = d.useState(0), [p, v] = d.useState(0), [C, b] = d.useState(0), [x, $] = d.useState(!1), y = {
    left: f,
    top: h,
    width: p,
    height: C,
    borderRadius: c.map((E) => `${E}px`).join(" ")
  };
  l && (y["--wave-color"] = l);
  function S() {
    const E = getComputedStyle(n);
    s(ix(n));
    const O = E.position === "static", {
      borderLeftWidth: P,
      borderTopWidth: N
    } = E;
    m(O ? n.offsetLeft : is(-Number.parseFloat(P))), g(O ? n.offsetTop : is(-Number.parseFloat(N))), v(n.offsetWidth), b(n.offsetHeight);
    const {
      borderTopLeftRadius: R,
      borderTopRightRadius: _,
      borderBottomLeftRadius: I,
      borderBottomRightRadius: k
    } = E;
    u([R, _, k, I].map((A) => is(Number.parseFloat(A))));
  }
  if (d.useEffect(() => {
    if (n) {
      const E = ft(() => {
        S(), $(!0);
      });
      let O;
      return typeof ResizeObserver < "u" && (O = new ResizeObserver(S), O.observe(n)), () => {
        ft.cancel(E), O?.disconnect();
      };
    }
  }, [n]), !x)
    return null;
  const w = (r === "Checkbox" || r === "Radio") && n?.classList.contains(Sg);
  return /* @__PURE__ */ d.createElement(jr, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: (E, O) => {
      var P, N;
      if (O.deadline || O.propertyName === "opacity") {
        const R = (P = a.current) === null || P === void 0 ? void 0 : P.parentElement;
        (N = i.current) === null || N === void 0 || N.call(i).then(() => {
          R?.remove();
        });
      }
      return !1;
    }
  }, ({
    className: E
  }, O) => /* @__PURE__ */ d.createElement("div", {
    ref: Jn(a, O),
    className: U(t, E, {
      "wave-quick": w
    }),
    style: y
  }));
}, sx = (e, t) => {
  var n;
  const {
    component: r
  } = t;
  if (r === "Checkbox" && !(!((n = e.querySelector("input")) === null || n === void 0) && n.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e?.insertBefore(o, e?.firstChild);
  const a = gl();
  let i = null;
  function l() {
    return i;
  }
  i = a(/* @__PURE__ */ d.createElement(lx, Object.assign({}, t, {
    target: e,
    registerUnmount: l
  })), o);
}, cx = (e, t, n) => {
  const {
    wave: r
  } = d.useContext(Be), [, o, a] = jn(), i = bt((c) => {
    const u = e.current;
    if (r?.disabled || !u)
      return;
    const f = u.querySelector(`.${Sg}`) || u, {
      showEffect: m
    } = r || {};
    (m || sx)(f, {
      className: t,
      token: o,
      component: n,
      event: c,
      hashId: a
    });
  }), l = d.useRef(null);
  return (c) => {
    ft.cancel(l.current), l.current = ft(() => {
      i(c);
    });
  };
}, uu = (e) => {
  const {
    children: t,
    disabled: n,
    component: r
  } = e, {
    getPrefixCls: o
  } = Ge(Be), a = fe(null), i = o("wave"), [, l] = ox(i), s = cx(a, U(i, l), r);
  if (M.useEffect(() => {
    const u = a.current;
    if (!u || u.nodeType !== window.Node.ELEMENT_NODE || n)
      return;
    const f = (m) => {
      !cu(m.target) || // No need wave
      !u.getAttribute || u.getAttribute("disabled") || u.disabled || u.className.includes("disabled") && !u.className.includes("disabled:") || u.getAttribute("aria-disabled") === "true" || u.className.includes("-leave") || s(m);
    };
    return u.addEventListener("click", f, !0), () => {
      u.removeEventListener("click", f, !0);
    };
  }, [n]), !/* @__PURE__ */ M.isValidElement(t))
    return t ?? null;
  const c = _r(t) ? Jn(Jr(t), a) : a;
  return cr(t, {
    ref: c
  });
};
process.env.NODE_ENV !== "production" && (uu.displayName = "Wave");
const Vo = (e) => {
  const t = M.useContext(Fo);
  return M.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, ux = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-block": {
        display: "flex",
        width: "100%"
      },
      "&-vertical": {
        flexDirection: "column"
      }
    }
  };
}, dx = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      "&-rtl": {
        direction: "rtl"
      },
      "&-vertical": {
        flexDirection: "column"
      },
      "&-align": {
        flexDirection: "column",
        "&-center": {
          alignItems: "center"
        },
        "&-start": {
          alignItems: "flex-start"
        },
        "&-end": {
          alignItems: "flex-end"
        },
        "&-baseline": {
          alignItems: "baseline"
        }
      },
      [`${t}-item:empty`]: {
        display: "none"
      },
      // https://github.com/ant-design/ant-design/issues/47875
      [`${t}-item > ${n}-badge-not-a-wrapper:only-child`]: {
        display: "block"
      }
    }
  };
}, fx = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [t]: {
      "&-gap-row-small": {
        rowGap: e.spaceGapSmallSize
      },
      "&-gap-row-middle": {
        rowGap: e.spaceGapMiddleSize
      },
      "&-gap-row-large": {
        rowGap: e.spaceGapLargeSize
      },
      "&-gap-col-small": {
        columnGap: e.spaceGapSmallSize
      },
      "&-gap-col-middle": {
        columnGap: e.spaceGapMiddleSize
      },
      "&-gap-col-large": {
        columnGap: e.spaceGapLargeSize
      }
    }
  };
}, wg = Vt("Space", (e) => {
  const t = $t(e, {
    spaceGapSmallSize: e.paddingXS,
    spaceGapMiddleSize: e.padding,
    spaceGapLargeSize: e.paddingLG
  });
  return [dx(t), fx(t), ux(t)];
}, () => ({}), {
  // Space component don't apply extra font style
  // https://github.com/ant-design/ant-design/issues/40315
  resetStyle: !1
});
var $g = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const pl = /* @__PURE__ */ d.createContext(null), Da = (e, t) => {
  const n = d.useContext(pl), r = d.useMemo(() => {
    if (!n)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = n, l = o === "vertical" ? "-vertical-" : "-";
    return U(`${e}-compact${l}item`, {
      [`${e}-compact${l}first-item`]: a,
      [`${e}-compact${l}last-item`]: i,
      [`${e}-compact${l}item-rtl`]: t === "rtl"
    });
  }, [e, t, n]);
  return {
    compactSize: n?.compactSize,
    compactDirection: n?.compactDirection,
    compactItemClassnames: r
  };
}, mx = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ d.createElement(pl.Provider, {
    value: null
  }, t);
}, vx = (e) => {
  const {
    children: t
  } = e, n = $g(e, ["children"]);
  return /* @__PURE__ */ d.createElement(pl.Provider, {
    value: d.useMemo(() => n, [n])
  }, t);
}, gx = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = d.useContext(Be), {
    size: r,
    direction: o,
    block: a,
    prefixCls: i,
    className: l,
    rootClassName: s,
    children: c
  } = e, u = $g(e, ["size", "direction", "block", "prefixCls", "className", "rootClassName", "children"]), f = Vo((x) => r ?? x), m = t("space-compact", i), [h, g] = wg(m), p = U(m, g, {
    [`${m}-rtl`]: n === "rtl",
    [`${m}-block`]: a,
    [`${m}-vertical`]: o === "vertical"
  }, l, s), v = d.useContext(pl), C = Ir(c), b = d.useMemo(() => C.map((x, $) => {
    const y = x?.key || `${m}-item-${$}`;
    return /* @__PURE__ */ d.createElement(vx, {
      key: y,
      compactSize: f,
      compactDirection: o,
      isFirstItem: $ === 0 && (!v || v?.isFirstItem),
      isLastItem: $ === C.length - 1 && (!v || v?.isLastItem)
    }, x);
  }), [C, v, o, f, m]);
  return C.length === 0 ? null : h(/* @__PURE__ */ d.createElement("div", Object.assign({
    className: p
  }, u), b));
};
var px = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Eg = /* @__PURE__ */ d.createContext(void 0), hx = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = d.useContext(Be), {
    prefixCls: r,
    size: o,
    className: a
  } = e, i = px(e, ["prefixCls", "size", "className"]), l = t("btn-group", r), [, , s] = jn(), c = d.useMemo(() => {
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
    const f = Rt("Button.Group");
    f.deprecated(!1, "Button.Group", "Space.Compact"), process.env.NODE_ENV !== "production" && f(!o || ["large", "small", "middle"].includes(o), "usage", "Invalid prop `size`.");
  }
  const u = U(l, {
    [`${l}-${c}`]: c,
    [`${l}-rtl`]: n === "rtl"
  }, a, s);
  return /* @__PURE__ */ d.createElement(Eg.Provider, {
    value: o
  }, /* @__PURE__ */ d.createElement("div", Object.assign({}, i, {
    className: u
  })));
}, Qd = /^[\u4E00-\u9FA5]{2}$/, uc = Qd.test.bind(Qd);
function Og(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
function Jd(e) {
  return typeof e == "string";
}
function ci(e) {
  return e === "text" || e === "link";
}
function bx(e, t) {
  if (e == null)
    return;
  const n = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && Jd(e.type) && uc(e.props.children) ? cr(e, {
    children: e.props.children.split("").join(n)
  }) : Jd(e) ? uc(e) ? /* @__PURE__ */ M.createElement("span", null, e.split("").join(n)) : /* @__PURE__ */ M.createElement("span", null, e) : sg(e) ? /* @__PURE__ */ M.createElement("span", null, e) : e;
}
function yx(e, t) {
  let n = !1;
  const r = [];
  return M.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (n && i) {
      const l = r.length - 1, s = r[l];
      r[l] = `${s}${o}`;
    } else
      r.push(o);
    n = i;
  }), M.Children.map(r, (o) => bx(o, t));
}
["default", "primary", "danger"].concat(de(Zr));
const dc = /* @__PURE__ */ xn((e, t) => {
  const {
    className: n,
    style: r,
    children: o,
    prefixCls: a
  } = e, i = U(`${a}-icon`, n);
  return /* @__PURE__ */ M.createElement("span", {
    ref: t,
    className: i,
    style: r
  }, o);
}), ef = /* @__PURE__ */ xn((e, t) => {
  const {
    prefixCls: n,
    className: r,
    style: o,
    iconClassName: a
  } = e, i = U(`${n}-loading-icon`, r);
  return /* @__PURE__ */ M.createElement(dc, {
    prefixCls: n,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ M.createElement(iu, {
    className: a
  }));
}), ls = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ss = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Cx = (e) => {
  const {
    prefixCls: t,
    loading: n,
    existIcon: r,
    className: o,
    style: a,
    mount: i
  } = e, l = !!n;
  return r ? /* @__PURE__ */ M.createElement(ef, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ M.createElement(jr, {
    visible: l,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: ls,
    onAppearActive: ss,
    onEnterStart: ls,
    onEnterActive: ss,
    onLeaveStart: ss,
    onLeaveActive: ls
  }, ({
    className: s,
    style: c
  }, u) => {
    const f = Object.assign(Object.assign({}, a), c);
    return /* @__PURE__ */ M.createElement(ef, {
      prefixCls: t,
      className: U(o, s),
      style: f,
      ref: u
    });
  });
}, tf = (e, t) => ({
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
}), xx = (e) => {
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
      tf(`${t}-primary`, o),
      tf(`${t}-danger`, a)
    ]
  };
};
var Sx = ["b"], wx = ["v"], cs = function(t) {
  return Math.round(Number(t || 0));
}, $x = function(t) {
  if (t instanceof mt)
    return t;
  if (t && Se(t) === "object" && "h" in t && "b" in t) {
    var n = t, r = n.b, o = De(n, Sx);
    return T(T({}, o), {}, {
      v: r
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, ur = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n(r) {
    return Mt(this, n), t.call(this, $x(r));
  }
  return Tt(n, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = cs(o.s * 100), i = cs(o.b * 100), l = cs(o.h), s = o.a, c = "hsb(".concat(l, ", ").concat(a, "%, ").concat(i, "%)"), u = "hsba(".concat(l, ", ").concat(a, "%, ").concat(i, "%, ").concat(s.toFixed(s === 0 ? 0 : 2), ")");
      return s === 1 ? c : u;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = De(o, wx);
      return T(T({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), n;
})(mt), Ex = "rc-color-picker", Po = function(t) {
  return t instanceof ur ? t : new ur(t);
}, Ox = Po("#1677ff"), Pg = function(t) {
  var n = t.offset, r = t.targetRef, o = t.containerRef, a = t.color, i = t.type, l = o.current.getBoundingClientRect(), s = l.width, c = l.height, u = r.current.getBoundingClientRect(), f = u.width, m = u.height, h = f / 2, g = m / 2, p = (n.x + h) / s, v = 1 - (n.y + g) / c, C = a.toHsb(), b = p, x = (n.x + h) / s * 360;
  if (i)
    switch (i) {
      case "hue":
        return Po(T(T({}, C), {}, {
          h: x <= 0 ? 0 : x
        }));
      case "alpha":
        return Po(T(T({}, C), {}, {
          a: b <= 0 ? 0 : b
        }));
    }
  return Po({
    h: C.h,
    s: p <= 0 ? 0 : p,
    b: v >= 1 ? 1 : v,
    a: C.a
  });
}, Ng = function(t, n) {
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
}, Px = function(t) {
  var n = t.color, r = t.prefixCls, o = t.className, a = t.style, i = t.onClick, l = "".concat(r, "-color-block");
  return /* @__PURE__ */ M.createElement("div", {
    className: U(l, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ M.createElement("div", {
    className: "".concat(l, "-inner"),
    style: {
      background: n
    }
  }));
};
function Nx(e) {
  var t = "touches" in e ? e.touches[0] : e, n = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, r = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - n,
    pageY: t.pageY - r
  };
}
function Rg(e) {
  var t = e.targetRef, n = e.containerRef, r = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, l = e.color, s = e.disabledDrag, c = Ht({
    x: 0,
    y: 0
  }), u = G(c, 2), f = u[0], m = u[1], h = fe(null), g = fe(null);
  yt(function() {
    m(i());
  }, [l]), yt(function() {
    return function() {
      document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", g.current), h.current = null, g.current = null;
    };
  }, []);
  var p = function($) {
    var y = Nx($), S = y.pageX, w = y.pageY, E = n.current.getBoundingClientRect(), O = E.x, P = E.y, N = E.width, R = E.height, _ = t.current.getBoundingClientRect(), I = _.width, k = _.height, A = I / 2, D = k / 2, F = Math.max(0, Math.min(S - O, N)) - A, q = Math.max(0, Math.min(w - P, R)) - D, K = {
      x: F,
      y: r === "x" ? f.y : q
    };
    if (I === 0 && k === 0 || I !== k)
      return !1;
    o?.(K);
  }, v = function($) {
    $.preventDefault(), p($);
  }, C = function($) {
    $.preventDefault(), document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), document.removeEventListener("touchmove", h.current), document.removeEventListener("touchend", g.current), h.current = null, g.current = null, a?.();
  }, b = function($) {
    document.removeEventListener("mousemove", h.current), document.removeEventListener("mouseup", g.current), !s && (p($), document.addEventListener("mousemove", v), document.addEventListener("mouseup", C), document.addEventListener("touchmove", v), document.addEventListener("touchend", C), h.current = v, g.current = C);
  };
  return [f, b];
}
var Ig = function(t) {
  var n = t.size, r = n === void 0 ? "default" : n, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ M.createElement("div", {
    className: U("".concat(a, "-handler"), j({}, "".concat(a, "-handler-sm"), r === "small")),
    style: {
      backgroundColor: o
    }
  });
}, Mg = function(t) {
  var n = t.children, r = t.style, o = t.prefixCls;
  return /* @__PURE__ */ M.createElement("div", {
    className: "".concat(o, "-palette"),
    style: T({
      position: "relative"
    }, r)
  }, n);
}, Tg = /* @__PURE__ */ xn(function(e, t) {
  var n = e.children, r = e.x, o = e.y;
  return /* @__PURE__ */ M.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(r, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, n);
}), Rx = function(t) {
  var n = t.color, r = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, l = fe(), s = fe(), c = fe(n), u = bt(function(p) {
    var v = Pg({
      offset: p,
      targetRef: s,
      containerRef: l,
      color: n
    });
    c.current = v, r(v);
  }), f = Rg({
    color: n,
    containerRef: l,
    targetRef: s,
    calculate: function() {
      return Ng(n);
    },
    onDragChange: u,
    onDragChangeComplete: function() {
      return a?.(c.current);
    },
    disabledDrag: i
  }), m = G(f, 2), h = m[0], g = m[1];
  return /* @__PURE__ */ M.createElement("div", {
    ref: l,
    className: "".concat(o, "-select"),
    onMouseDown: g,
    onTouchStart: g
  }, /* @__PURE__ */ M.createElement(Mg, {
    prefixCls: o
  }, /* @__PURE__ */ M.createElement(Tg, {
    x: h.x,
    y: h.y,
    ref: s
  }, /* @__PURE__ */ M.createElement(Ig, {
    color: n.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ M.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(n.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, Ix = function(t, n) {
  var r = Vn(t, {
    value: n
  }), o = G(r, 2), a = o[0], i = o[1], l = Ot(function() {
    return Po(a);
  }, [a]);
  return [l, i];
}, Mx = function(t) {
  var n = t.colors, r = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, l = t.prefixCls, s = Ot(function() {
    return n.map(function(c, u) {
      var f = Po(c);
      return i === "alpha" && u === n.length - 1 && (f = new ur(f.setA(1))), f.toRgbString();
    }).join(",");
  }, [n, i]);
  return /* @__PURE__ */ M.createElement("div", {
    className: "".concat(l, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(s, ")")
    }
  }, r);
}, Tx = function(t) {
  var n = t.prefixCls, r = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, l = t.color, s = t.type, c = fe(), u = fe(), f = fe(l), m = function(y) {
    return s === "hue" ? y.getHue() : y.a * 100;
  }, h = bt(function($) {
    var y = Pg({
      offset: $,
      targetRef: u,
      containerRef: c,
      color: l,
      type: s
    });
    f.current = y, a(m(y));
  }), g = Rg({
    color: l,
    targetRef: u,
    containerRef: c,
    calculate: function() {
      return Ng(l, s);
    },
    onDragChange: h,
    onDragChangeComplete: function() {
      i(m(f.current));
    },
    direction: "x",
    disabledDrag: o
  }), p = G(g, 2), v = p[0], C = p[1], b = M.useMemo(function() {
    if (s === "hue") {
      var $ = l.toHsb();
      $.s = 1, $.b = 1, $.a = 1;
      var y = new ur($);
      return y;
    }
    return l;
  }, [l, s]), x = M.useMemo(function() {
    return r.map(function($) {
      return "".concat($.color, " ").concat($.percent, "%");
    });
  }, [r]);
  return /* @__PURE__ */ M.createElement("div", {
    ref: c,
    className: U("".concat(n, "-slider"), "".concat(n, "-slider-").concat(s)),
    onMouseDown: C,
    onTouchStart: C
  }, /* @__PURE__ */ M.createElement(Mg, {
    prefixCls: n
  }, /* @__PURE__ */ M.createElement(Tg, {
    x: v.x,
    y: v.y,
    ref: u
  }, /* @__PURE__ */ M.createElement(Ig, {
    size: "small",
    color: b.toHexString(),
    prefixCls: n
  })), /* @__PURE__ */ M.createElement(Mx, {
    colors: x,
    type: s,
    prefixCls: n
  })));
};
function _x(e) {
  return d.useMemo(function() {
    var t = e || {}, n = t.slider;
    return [n || Tx];
  }, [e]);
}
var Ax = [{
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
}], jx = /* @__PURE__ */ xn(function(e, t) {
  var n = e.value, r = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Ex : o, i = e.onChange, l = e.onChangeComplete, s = e.className, c = e.style, u = e.panelRender, f = e.disabledAlpha, m = f === void 0 ? !1 : f, h = e.disabled, g = h === void 0 ? !1 : h, p = e.components, v = _x(p), C = G(v, 1), b = C[0], x = Ix(r || Ox, n), $ = G(x, 2), y = $[0], S = $[1], w = Ot(function() {
    return y.setA(1).toRgbString();
  }, [y]), E = function(q, K) {
    n || S(q), i?.(q, K);
  }, O = function(q) {
    return new ur(y.setHue(q));
  }, P = function(q) {
    return new ur(y.setA(q / 100));
  }, N = function(q) {
    E(O(q), {
      type: "hue",
      value: q
    });
  }, R = function(q) {
    E(P(q), {
      type: "alpha",
      value: q
    });
  }, _ = function(q) {
    l && l(O(q));
  }, I = function(q) {
    l && l(P(q));
  }, k = U("".concat(a, "-panel"), s, j({}, "".concat(a, "-panel-disabled"), g)), A = {
    prefixCls: a,
    disabled: g,
    color: y
  }, D = /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Rx, ve({
    onChange: E
  }, A, {
    onChangeComplete: l
  })), /* @__PURE__ */ M.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ M.createElement("div", {
    className: U("".concat(a, "-slider-group"), j({}, "".concat(a, "-slider-group-disabled-alpha"), m))
  }, /* @__PURE__ */ M.createElement(b, ve({}, A, {
    type: "hue",
    colors: Ax,
    min: 0,
    max: 359,
    value: y.getHue(),
    onChange: N,
    onChangeComplete: _
  })), !m && /* @__PURE__ */ M.createElement(b, ve({}, A, {
    type: "alpha",
    colors: [{
      percent: 0,
      color: "rgba(255, 0, 4, 0)"
    }, {
      percent: 100,
      color: w
    }],
    min: 0,
    max: 100,
    value: y.a * 100,
    onChange: R,
    onChangeComplete: I
  }))), /* @__PURE__ */ M.createElement(Px, {
    color: y.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ M.createElement("div", {
    className: k,
    style: c,
    ref: t
  }, typeof u == "function" ? u(D) : D);
});
process.env.NODE_ENV !== "production" && (jx.displayName = "ColorPicker");
const Fx = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", Bx = (e, t) => e ? Fx(e, t) : "";
let fc = /* @__PURE__ */ (function() {
  function e(t) {
    Mt(this, e);
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
    })), this.metaColor = new ur(this.colors[0].color.metaColor)) : this.metaColor = new ur(r ? "" : t), (!t || r && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Tt(e, [{
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
      return Bx(this.toHexString(), this.metaColor.a < 1);
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
var kx = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z" } }] }, name: "right", theme: "outlined" }, Dx = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: kx
  }));
}, Wi = /* @__PURE__ */ d.forwardRef(Dx);
process.env.NODE_ENV !== "production" && (Wi.displayName = "RightOutlined");
const Lx = (e) => ({
  [e.componentCls]: {
    // For common/openAnimation
    [`${e.antCls}-motion-collapse-legacy`]: {
      overflow: "hidden",
      "&-active": {
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
      }
    },
    [`${e.antCls}-motion-collapse`]: {
      overflow: "hidden",
      transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`
    }
  }
}), zx = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), Hx = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), hl = (e, t, n, r, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, zx(r)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, Hx(r)), {
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
}, Vx = new We("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), Wx = new We("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), Gx = (e, t = !1) => {
  const {
    antCls: n
  } = e, r = `${n}-fade`, o = t ? "&" : "";
  return [hl(r, Vx, Wx, e.motionDurationMid, t), {
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
}, qx = new We("antMoveDownIn", {
  "0%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Ux = new We("antMoveDownOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, 100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Kx = new We("antMoveLeftIn", {
  "0%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Xx = new We("antMoveLeftOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(-100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Yx = new We("antMoveRightIn", {
  "0%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Zx = new We("antMoveRightOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(100%, 0, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), Qx = new We("antMoveUpIn", {
  "0%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  },
  "100%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  }
}), Jx = new We("antMoveUpOut", {
  "0%": {
    transform: "translate3d(0, 0, 0)",
    transformOrigin: "0 0",
    opacity: 1
  },
  "100%": {
    transform: "translate3d(0, -100%, 0)",
    transformOrigin: "0 0",
    opacity: 0
  }
}), eS = {
  "move-up": {
    inKeyframes: Qx,
    outKeyframes: Jx
  },
  "move-down": {
    inKeyframes: qx,
    outKeyframes: Ux
  },
  "move-left": {
    inKeyframes: Kx,
    outKeyframes: Xx
  },
  "move-right": {
    inKeyframes: Yx,
    outKeyframes: Zx
  }
}, nf = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = eS[t];
  return [hl(r, o, a, e.motionDurationMid), {
    [`
        ${r}-enter,
        ${r}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, _g = new We("antSlideUpIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), Ag = new We("antSlideUpOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), jg = new We("antSlideDownIn", {
  "0%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  }
}), Fg = new We("antSlideDownOut", {
  "0%": {
    transform: "scaleY(1)",
    transformOrigin: "100% 100%",
    opacity: 1
  },
  "100%": {
    transform: "scaleY(0.8)",
    transformOrigin: "100% 100%",
    opacity: 0
  }
}), tS = new We("antSlideLeftIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  }
}), nS = new We("antSlideLeftOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "0% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "0% 0%",
    opacity: 0
  }
}), rS = new We("antSlideRightIn", {
  "0%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  }
}), oS = new We("antSlideRightOut", {
  "0%": {
    transform: "scaleX(1)",
    transformOrigin: "100% 0%",
    opacity: 1
  },
  "100%": {
    transform: "scaleX(0.8)",
    transformOrigin: "100% 0%",
    opacity: 0
  }
}), aS = {
  "slide-up": {
    inKeyframes: _g,
    outKeyframes: Ag
  },
  "slide-down": {
    inKeyframes: jg,
    outKeyframes: Fg
  },
  "slide-left": {
    inKeyframes: tS,
    outKeyframes: nS
  },
  "slide-right": {
    inKeyframes: rS,
    outKeyframes: oS
  }
}, Gi = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = aS[t];
  return [hl(r, o, a, e.motionDurationMid), {
    [`
      ${r}-enter,
      ${r}-appear
    `]: {
      transform: "scale(0)",
      transformOrigin: "0% 0%",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutQuint,
      "&-prepare": {
        transform: "scale(1)"
      }
    },
    [`${r}-leave`]: {
      animationTimingFunction: e.motionEaseInQuint
    }
  }];
}, iS = new We("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), lS = new We("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), rf = new We("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), of = new We("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), sS = new We("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), cS = new We("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), uS = new We("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), dS = new We("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), fS = new We("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), mS = new We("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), vS = new We("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), gS = new We("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), pS = {
  zoom: {
    inKeyframes: iS,
    outKeyframes: lS
  },
  "zoom-big": {
    inKeyframes: rf,
    outKeyframes: of
  },
  "zoom-big-fast": {
    inKeyframes: rf,
    outKeyframes: of
  },
  "zoom-left": {
    inKeyframes: uS,
    outKeyframes: dS
  },
  "zoom-right": {
    inKeyframes: fS,
    outKeyframes: mS
  },
  "zoom-up": {
    inKeyframes: sS,
    outKeyframes: cS
  },
  "zoom-down": {
    inKeyframes: vS,
    outKeyframes: gS
  }
}, bl = (e, t) => {
  const {
    antCls: n
  } = e, r = `${n}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = pS[t];
  return [hl(r, o, a, t === "zoom-big-fast" ? e.motionDurationFast : e.motionDurationMid), {
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
}, hS = (e) => e instanceof fc ? e : new fc(e), bS = (e, t) => {
  const {
    r: n,
    g: r,
    b: o,
    a
  } = e.toRgb(), i = new ur(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : n * 0.299 + r * 0.587 + o * 0.114 > 192;
}, Bg = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: n
  } = e;
  return $t(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: n
  });
}, kg = (e) => {
  var t, n, r, o, a, i;
  const l = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, s = (n = e.contentFontSizeSM) !== null && n !== void 0 ? n : e.fontSize, c = (r = e.contentFontSizeLG) !== null && r !== void 0 ? r : e.fontSizeLG, u = (o = e.contentLineHeight) !== null && o !== void 0 ? o : Ei(l), f = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : Ei(s), m = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : Ei(c), h = bS(new fc(e.colorBgSolid), "#fff") ? "#000" : "#fff", g = Zr.reduce((p, v) => Object.assign(Object.assign({}, p), {
    [`${v}ShadowColor`]: `0 ${ee(e.controlOutlineWidth)} 0 ${oa(e[`${v}1`], e.colorBgContainer)}`
  }), {});
  return Object.assign(Object.assign({}, g), {
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
    contentFontSize: l,
    contentFontSizeSM: s,
    contentFontSizeLG: c,
    contentLineHeight: u,
    contentLineHeightSM: f,
    contentLineHeightLG: m,
    paddingBlock: Math.max((e.controlHeight - l * u) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - s * f) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - c * m) / 2 - e.lineWidth, 0)
  });
}, yS = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    fontWeight: r,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    iconGap: l,
    calc: s
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: l,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: r,
      whiteSpace: "nowrap",
      textAlign: "center",
      backgroundImage: "none",
      background: "transparent",
      border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
      cursor: "pointer",
      transition: `all ${e.motionDurationMid} ${e.motionEaseInOut}`,
      userSelect: "none",
      touchAction: "manipulation",
      color: e.colorText,
      "&:disabled > *": {
        pointerEvents: "none"
      },
      // https://github.com/ant-design/ant-design/issues/51380
      [`${t}-icon > svg`]: nu(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": ba(e),
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
        transition: ["width", "opacity", "margin"].map((c) => `${c} ${a} ${i}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: s(l).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: s(l).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: s(l).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: s(l).mul(-1).equal()
          }
        }
      }
    }
  };
}, Dg = (e, t, n) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": n
  }
}), CS = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), xS = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), yl = (e, t, n, r, o, a, i, l) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: n || void 0,
    background: t,
    borderColor: r || void 0,
    boxShadow: "none"
  }, Dg(e, Object.assign({
    background: t
  }, i), Object.assign({
    background: t
  }, l))), {
    "&:disabled": {
      cursor: "not-allowed",
      color: o || void 0,
      borderColor: a || void 0
    }
  })
}), SS = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, xS(e))
}), wS = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), Cl = (e, t, n, r) => {
  const a = r && ["link", "text"].includes(r) ? wS : SS;
  return Object.assign(Object.assign({}, a(e)), Dg(e.componentCls, t, n));
}, xl = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: n
  }, Cl(e, r, o))
}), Sl = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: n
  }, Cl(e, r, o))
}), wl = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), $l = (e, t, n, r) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, Cl(e, n, r))
}), Qn = (e, t, n, r, o) => ({
  [`&${e.componentCls}-variant-${n}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, Cl(e, r, o, n))
}), $S = (e) => {
  const {
    componentCls: t
  } = e;
  return Zr.reduce((n, r) => {
    const o = e[`${r}6`], a = e[`${r}1`], i = e[`${r}5`], l = e[`${r}2`], s = e[`${r}3`], c = e[`${r}7`];
    return Object.assign(Object.assign({}, n), {
      [`&${t}-color-${r}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${r}ShadowColor`]
      }, xl(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: c
      })), Sl(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: c,
        borderColor: c,
        background: e.colorBgContainer
      })), wl(e)), $l(e, a, {
        color: o,
        background: l
      }, {
        color: o,
        background: s
      })), Qn(e, o, "link", {
        color: i
      }, {
        color: c
      })), Qn(e, o, "text", {
        color: i,
        background: a
      }, {
        color: c,
        background: s
      }))
    });
  }, {});
}, ES = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, xl(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), wl(e)), $l(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), yl(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), Qn(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), OS = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, Sl(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), wl(e)), $l(e, e.colorPrimaryBg, {
  color: e.colorPrimary,
  background: e.colorPrimaryBgHover
}, {
  color: e.colorPrimary,
  background: e.colorPrimaryBorder
})), Qn(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), Qn(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), yl(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), PS = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, xl(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), Sl(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), wl(e)), $l(e, e.colorErrorBg, {
  color: e.colorError,
  background: e.colorErrorBgFilledHover
}, {
  color: e.colorError,
  background: e.colorErrorBgActive
})), Qn(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), Qn(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), yl(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), NS = (e) => Object.assign(Object.assign({}, Qn(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), yl(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), RS = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: ES(e),
    [`${t}-color-primary`]: OS(e),
    [`${t}-color-dangerous`]: PS(e),
    [`${t}-color-link`]: NS(e)
  }, $S(e));
}, IS = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, Sl(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), Qn(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), xl(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), Qn(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), du = (e, t = "") => {
  const {
    componentCls: n,
    controlHeight: r,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: l,
    buttonPaddingVertical: s,
    buttonIconOnlyFontSize: c
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: r,
        padding: `${ee(s)} ${ee(i)}`,
        borderRadius: a,
        [`&${n}-icon-only`]: {
          width: r,
          [l]: {
            fontSize: c
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${n}${n}-circle${t}`]: CS(e)
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
}, MS = (e) => {
  const t = $t(e, {
    fontSize: e.contentFontSize
  });
  return du(t, e.componentCls);
}, TS = (e) => {
  const t = $t(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return du(t, `${e.componentCls}-sm`);
}, _S = (e) => {
  const t = $t(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return du(t, `${e.componentCls}-lg`);
}, AS = (e) => {
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
}, jS = Vt("Button", (e) => {
  const t = Bg(e);
  return [
    // Shared
    yS(t),
    // Size
    MS(t),
    TS(t),
    _S(t),
    // Block
    AS(t),
    // Color
    RS(t),
    // https://github.com/ant-design/ant-design/issues/50969
    IS(t),
    // Button Group
    xx(t)
  ];
}, kg, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function FS(e, t, n, r) {
  const {
    focusElCls: o,
    focus: a,
    borderElCls: i
  } = n, l = i ? "> *" : "", s = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((c) => `&:${c} ${l}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [s]: {
        zIndex: 3
      }
    }, o ? {
      [`&${o}`]: {
        zIndex: 3
      }
    } : {}), {
      [`&[disabled] ${l}`]: {
        zIndex: 0
      }
    })
  };
}
function BS(e, t, n) {
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
function Lg(e, t = {
  focus: !0
}) {
  const {
    componentCls: n
  } = e, r = `${n}-compact`;
  return {
    [r]: Object.assign(Object.assign({}, FS(e, r, t, n)), BS(n, r, t))
  };
}
function kS(e, t, n) {
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
function DS(e, t) {
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
function LS(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, kS(e, t, e.componentCls)), DS(e.componentCls, t))
  };
}
const zS = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: n,
    lineWidth: r,
    calc: o
  } = e, a = o(r).mul(-1).equal(), i = (l) => {
    const s = `${t}-compact${l ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${s} + ${s}::before`]: {
        position: "absolute",
        top: l ? a : 0,
        insetInlineStart: l ? 0 : a,
        backgroundColor: n,
        content: '""',
        width: l ? "100%" : r,
        height: l ? r : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, HS = _a(["Button", "compact"], (e) => {
  const t = Bg(e);
  return [
    // Space Compact
    Lg(t),
    LS(t),
    zS(t)
  ];
}, kg);
var VS = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function WS(e) {
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
const GS = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, qS = /* @__PURE__ */ M.forwardRef((e, t) => {
  var n, r;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: l,
    type: s,
    danger: c = !1,
    shape: u,
    size: f,
    styles: m,
    disabled: h,
    className: g,
    rootClassName: p,
    children: v,
    icon: C,
    iconPosition: b = "start",
    ghost: x = !1,
    block: $ = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: y = "button",
    classNames: S,
    style: w = {},
    autoInsertSpace: E,
    autoFocus: O
  } = e, P = VS(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), N = s || "default", {
    button: R
  } = M.useContext(Be), _ = u || R?.shape || "default", [I, k] = Ot(() => {
    if (i && l)
      return [i, l];
    if (s || c) {
      const Ne = GS[N] || [];
      return c ? ["danger", Ne[1]] : Ne;
    }
    return R?.color && R?.variant ? [R.color, R.variant] : ["default", "outlined"];
  }, [i, l, s, c, R?.color, R?.variant, N]), D = I === "danger" ? "dangerous" : I, {
    getPrefixCls: F,
    direction: q,
    autoInsertSpace: K,
    className: Q,
    style: W,
    classNames: L,
    styles: z
  } = zo("button"), H = (n = E ?? K) !== null && n !== void 0 ? n : !0, V = F("btn", a), [te, Y, J] = jS(V), ae = Ge(Yr), le = h ?? ae, X = Ge(Eg), se = Ot(() => WS(o), [o]), [Z, oe] = Ht(se.loading), [ne, me] = Ht(!1), ie = fe(null), ce = Qr(t, ie), we = p0.count(v) === 1 && !C && !ci(k), xe = fe(!0);
  M.useEffect(() => (xe.current = !1, () => {
    xe.current = !0;
  }), []), wt(() => {
    let Ne = null;
    se.delay > 0 ? Ne = setTimeout(() => {
      Ne = null, oe(!0);
    }, se.delay) : oe(se.loading);
    function et() {
      Ne && (clearTimeout(Ne), Ne = null);
    }
    return et;
  }, [se.delay, se.loading]), yt(() => {
    if (!ie.current || !H)
      return;
    const Ne = ie.current.textContent || "";
    we && uc(Ne) ? ne || me(!0) : ne && me(!1);
  }), yt(() => {
    O && ie.current && ie.current.focus();
  }, []);
  const Pe = M.useCallback((Ne) => {
    var et;
    if (Z || le) {
      Ne.preventDefault();
      return;
    }
    (et = e.onClick) === null || et === void 0 || et.call(e, ("href" in e, Ne));
  }, [e.onClick, Z, le]);
  if (process.env.NODE_ENV !== "production") {
    const Ne = Rt("Button");
    process.env.NODE_ENV !== "production" && Ne(!(typeof C == "string" && C.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${C}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && Ne(!(x && ci(k)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: he,
    compactItemClassnames: re
  } = Da(V, q), Ce = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, _e = Vo((Ne) => {
    var et, Zt;
    return (Zt = (et = f ?? he) !== null && et !== void 0 ? et : X) !== null && Zt !== void 0 ? Zt : Ne;
  }), Ke = _e && (r = Ce[_e]) !== null && r !== void 0 ? r : "", Le = Z ? "loading" : C, ze = an(P, ["navigate"]), Xe = U(V, Y, J, {
    [`${V}-${_}`]: _ !== "default" && _,
    // Compatible with versions earlier than 5.21.0
    [`${V}-${N}`]: N,
    [`${V}-dangerous`]: c,
    [`${V}-color-${D}`]: D,
    [`${V}-variant-${k}`]: k,
    [`${V}-${Ke}`]: Ke,
    [`${V}-icon-only`]: !v && v !== 0 && !!Le,
    [`${V}-background-ghost`]: x && !ci(k),
    [`${V}-loading`]: Z,
    [`${V}-two-chinese-chars`]: ne && H && !Z,
    [`${V}-block`]: $,
    [`${V}-rtl`]: q === "rtl",
    [`${V}-icon-end`]: b === "end"
  }, re, g, p, Q), Oe = Object.assign(Object.assign({}, W), w), Te = U(S?.icon, L.icon), Re = Object.assign(Object.assign({}, m?.icon || {}), z.icon || {}), ye = C && !Z ? /* @__PURE__ */ M.createElement(dc, {
    prefixCls: V,
    className: Te,
    style: Re
  }, C) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ M.createElement(dc, {
    prefixCls: V,
    className: Te,
    style: Re
  }, o.icon) : /* @__PURE__ */ M.createElement(Cx, {
    existIcon: !!C,
    prefixCls: V,
    loading: Z,
    mount: xe.current
  }), Me = v || v === 0 ? yx(v, we && H) : null;
  if (ze.href !== void 0)
    return te(/* @__PURE__ */ M.createElement("a", Object.assign({}, ze, {
      className: U(Xe, {
        [`${V}-disabled`]: le
      }),
      href: le ? void 0 : ze.href,
      style: Oe,
      onClick: Pe,
      ref: ce,
      tabIndex: le ? -1 : 0,
      "aria-disabled": le
    }), ye, Me));
  let Fe = /* @__PURE__ */ M.createElement("button", Object.assign({}, P, {
    type: y,
    className: Xe,
    style: Oe,
    onClick: Pe,
    disabled: le,
    ref: ce
  }), ye, Me, re && /* @__PURE__ */ M.createElement(HS, {
    prefixCls: V
  }));
  return ci(k) || (Fe = /* @__PURE__ */ M.createElement(uu, {
    component: "Button",
    disabled: Z
  }, Fe)), te(Fe);
}), dr = qS;
dr.Group = hx;
dr.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (dr.displayName = "Button");
const us = (e) => typeof e?.then == "function", zg = (e) => {
  const {
    type: t,
    children: n,
    prefixCls: r,
    buttonProps: o,
    close: a,
    autoFocus: i,
    emitEvent: l,
    isSilent: s,
    quitOnNullishReturnValue: c,
    actionFn: u
  } = e, f = d.useRef(!1), m = d.useRef(null), [h, g] = Bo(!1), p = (...b) => {
    a?.apply(void 0, b);
  };
  d.useEffect(() => {
    let b = null;
    return i && (b = setTimeout(() => {
      var x;
      (x = m.current) === null || x === void 0 || x.focus({
        preventScroll: !0
      });
    })), () => {
      b && clearTimeout(b);
    };
  }, [i]);
  const v = (b) => {
    us(b) && (g(!0), b.then((...x) => {
      g(!1, !0), p.apply(void 0, x), f.current = !1;
    }, (x) => {
      if (g(!1, !0), f.current = !1, !s?.())
        return Promise.reject(x);
    }));
  }, C = (b) => {
    if (f.current)
      return;
    if (f.current = !0, !u) {
      p();
      return;
    }
    let x;
    if (l) {
      if (x = u(b), c && !us(x)) {
        f.current = !1, p(b);
        return;
      }
    } else if (u.length)
      x = u(a), f.current = !1;
    else if (x = u(), !us(x)) {
      p();
      return;
    }
    v(x);
  };
  return /* @__PURE__ */ d.createElement(dr, Object.assign({}, Og(t), {
    onClick: C,
    loading: h,
    prefixCls: r
  }, o, {
    ref: m
  }), n);
}, La = /* @__PURE__ */ M.createContext({}), {
  Provider: Hg
} = La, af = () => {
  const {
    autoFocusButton: e,
    cancelButtonProps: t,
    cancelTextLocale: n,
    isSilent: r,
    mergedOkCancel: o,
    rootPrefixCls: a,
    close: i,
    onCancel: l,
    onConfirm: s
  } = Ge(La);
  return o ? /* @__PURE__ */ M.createElement(zg, {
    isSilent: r,
    actionFn: l,
    close: (...c) => {
      i?.apply(void 0, c), s?.(!1);
    },
    autoFocus: e === "cancel",
    buttonProps: t,
    prefixCls: `${a}-btn`
  }, n) : null;
}, lf = () => {
  const {
    autoFocusButton: e,
    close: t,
    isSilent: n,
    okButtonProps: r,
    rootPrefixCls: o,
    okTextLocale: a,
    okType: i,
    onConfirm: l,
    onOk: s
  } = Ge(La);
  return /* @__PURE__ */ M.createElement(zg, {
    isSilent: n,
    type: i || "primary",
    actionFn: s,
    close: (...c) => {
      t?.apply(void 0, c), l?.(!0);
    },
    autoFocus: e === "ok",
    buttonProps: r,
    prefixCls: `${o}-btn`
  }, a);
};
var Vg = /* @__PURE__ */ d.createContext(null), sf = [];
function US(e, t) {
  var n = d.useState(function() {
    if (!on())
      return null;
    var g = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && g.setAttribute("data-debug", t), g;
  }), r = G(n, 1), o = r[0], a = d.useRef(!1), i = d.useContext(Vg), l = d.useState(sf), s = G(l, 2), c = s[0], u = s[1], f = i || (a.current ? void 0 : function(g) {
    u(function(p) {
      var v = [g].concat(de(p));
      return v;
    });
  });
  function m() {
    o.parentElement || document.body.appendChild(o), a.current = !0;
  }
  function h() {
    var g;
    (g = o.parentElement) === null || g === void 0 || g.removeChild(o), a.current = !1;
  }
  return wt(function() {
    return e ? i ? i(m) : m() : h(), h;
  }, [e]), wt(function() {
    c.length && (c.forEach(function(g) {
      return g();
    }), u(sf));
  }, [c]), [o, f];
}
function KS(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), n = document.createElement("div");
  n.id = t;
  var r = n.style;
  r.position = "absolute", r.left = "0", r.top = "0", r.width = "100px", r.height = "100px", r.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    r.scrollbarColor = i.scrollbarColor, r.scrollbarWidth = i.scrollbarWidth;
    var l = getComputedStyle(e, "::-webkit-scrollbar"), s = parseInt(l.width, 10), c = parseInt(l.height, 10);
    try {
      var u = s ? "width: ".concat(l.width, ";") : "", f = c ? "height: ".concat(l.height, ";") : "";
      lr(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(u, `
`).concat(f, `
}`), t);
    } catch (g) {
      console.error(g), o = s, a = c;
    }
  }
  document.body.appendChild(n);
  var m = e && o && !isNaN(o) ? o : n.offsetWidth - n.clientWidth, h = e && a && !isNaN(a) ? a : n.offsetHeight - n.clientHeight;
  return document.body.removeChild(n), va(t), {
    width: m,
    height: h
  };
}
function XS(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : KS(e);
}
function YS() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var ZS = "rc-util-locker-".concat(Date.now()), cf = 0;
function QS(e) {
  var t = !!e, n = d.useState(function() {
    return cf += 1, "".concat(ZS, "_").concat(cf);
  }), r = G(n, 1), o = r[0];
  wt(function() {
    if (t) {
      var a = XS(document.body).width, i = YS();
      lr(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      va(o);
    return function() {
      va(o);
    };
  }, [t, o]);
}
var JS = !1;
function ew(e) {
  return JS;
}
var uf = function(t) {
  return t === !1 ? !1 : !on() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, El = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.open, r = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, l = i === void 0 ? !0 : i, s = e.children, c = d.useState(n), u = G(c, 2), f = u[0], m = u[1], h = f || n;
  process.env.NODE_ENV !== "production" && rt(on() || !n, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), d.useEffect(function() {
    (l || n) && m(n);
  }, [n, l]);
  var g = d.useState(function() {
    return uf(o);
  }), p = G(g, 2), v = p[0], C = p[1];
  d.useEffect(function() {
    var R = uf(o);
    C(R ?? null);
  });
  var b = US(h && !v, a), x = G(b, 2), $ = x[0], y = x[1], S = v ?? $;
  QS(r && n && on() && (S === $ || S === document.body));
  var w = null;
  if (s && _r(s) && t) {
    var E = s;
    w = E.ref;
  }
  var O = Qr(w, t);
  if (!h || !on() || v === void 0)
    return null;
  var P = S === !1 || ew(), N = s;
  return t && (N = /* @__PURE__ */ d.cloneElement(s, {
    ref: O
  })), /* @__PURE__ */ d.createElement(Vg.Provider, {
    value: y
  }, P ? N : /* @__PURE__ */ jm(N, S));
});
process.env.NODE_ENV !== "production" && (El.displayName = "Portal");
var Wg = /* @__PURE__ */ d.createContext({});
function tw() {
  var e = T({}, d);
  return e.useId;
}
var df = 0, ff = tw();
const fu = ff ? (
  // Use React `useId`
  function(t) {
    var n = ff();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : n);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var n = d.useState("ssr-id"), r = G(n, 2), o = r[0], a = r[1];
    return d.useEffect(function() {
      var i = df;
      df += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
function mf(e, t, n) {
  var r = t;
  return !r && n && (r = "".concat(e, "-").concat(n)), r;
}
function vf(e, t) {
  var n = e["page".concat(t ? "Y" : "X", "Offset")], r = "scroll".concat(t ? "Top" : "Left");
  if (typeof n != "number") {
    var o = e.document;
    n = o.documentElement[r], typeof n != "number" && (n = o.body[r]);
  }
  return n;
}
function nw(e) {
  var t = e.getBoundingClientRect(), n = {
    left: t.left,
    top: t.top
  }, r = e.ownerDocument, o = r.defaultView || r.parentWindow;
  return n.left += vf(o), n.top += vf(o, !0), n;
}
const rw = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var n = t.shouldUpdate;
  return !n;
});
var ow = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, aw = {
  outline: "none"
}, mu = /* @__PURE__ */ M.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.className, o = e.style, a = e.title, i = e.ariaId, l = e.footer, s = e.closable, c = e.closeIcon, u = e.onClose, f = e.children, m = e.bodyStyle, h = e.bodyProps, g = e.modalRender, p = e.onMouseDown, v = e.onMouseUp, C = e.holderRef, b = e.visible, x = e.forceRender, $ = e.width, y = e.height, S = e.classNames, w = e.styles, E = M.useContext(Wg), O = E.panel, P = Qr(C, O), N = fe(), R = fe();
  M.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var W;
        (W = N.current) === null || W === void 0 || W.focus({
          preventScroll: !0
        });
      },
      changeActive: function(W) {
        var L = document, z = L.activeElement;
        W && z === R.current ? N.current.focus({
          preventScroll: !0
        }) : !W && z === N.current && R.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var _ = {};
  $ !== void 0 && (_.width = $), y !== void 0 && (_.height = y);
  var I = l ? /* @__PURE__ */ M.createElement("div", {
    className: U("".concat(n, "-footer"), S?.footer),
    style: T({}, w?.footer)
  }, l) : null, k = a ? /* @__PURE__ */ M.createElement("div", {
    className: U("".concat(n, "-header"), S?.header),
    style: T({}, w?.header)
  }, /* @__PURE__ */ M.createElement("div", {
    className: "".concat(n, "-title"),
    id: i
  }, a)) : null, A = Ot(function() {
    return Se(s) === "object" && s !== null ? s : s ? {
      closeIcon: c ?? /* @__PURE__ */ M.createElement("span", {
        className: "".concat(n, "-close-x")
      })
    } : {};
  }, [s, c, n]), D = Fa(A, !0), F = Se(s) === "object" && s.disabled, q = s ? /* @__PURE__ */ M.createElement("button", ve({
    type: "button",
    onClick: u,
    "aria-label": "Close"
  }, D, {
    className: "".concat(n, "-close"),
    disabled: F
  }), A.closeIcon) : null, K = /* @__PURE__ */ M.createElement("div", {
    className: U("".concat(n, "-content"), S?.content),
    style: w?.content
  }, q, k, /* @__PURE__ */ M.createElement("div", ve({
    className: U("".concat(n, "-body"), S?.body),
    style: T(T({}, m), w?.body)
  }, h), f), I);
  return /* @__PURE__ */ M.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": a ? i : null,
    "aria-modal": "true",
    ref: P,
    style: T(T({}, o), _),
    className: U(n, r),
    onMouseDown: p,
    onMouseUp: v
  }, /* @__PURE__ */ M.createElement("div", {
    ref: N,
    tabIndex: 0,
    style: aw
  }, /* @__PURE__ */ M.createElement(rw, {
    shouldUpdate: b || x
  }, g ? g(K) : K)), /* @__PURE__ */ M.createElement("div", {
    tabIndex: 0,
    ref: R,
    style: ow
  }));
});
process.env.NODE_ENV !== "production" && (mu.displayName = "Panel");
var Gg = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.title, o = e.style, a = e.className, i = e.visible, l = e.forceRender, s = e.destroyOnClose, c = e.motionName, u = e.ariaId, f = e.onVisibleChanged, m = e.mousePosition, h = fe(), g = d.useState(), p = G(g, 2), v = p[0], C = p[1], b = {};
  v && (b.transformOrigin = v);
  function x() {
    var $ = nw(h.current);
    C(m && (m.x || m.y) ? "".concat(m.x - $.left, "px ").concat(m.y - $.top, "px") : "");
  }
  return /* @__PURE__ */ d.createElement(jr, {
    visible: i,
    onVisibleChanged: f,
    onAppearPrepare: x,
    onEnterPrepare: x,
    forceRender: l,
    motionName: c,
    removeOnLeave: s,
    ref: h
  }, function($, y) {
    var S = $.className, w = $.style;
    return /* @__PURE__ */ d.createElement(mu, ve({}, e, {
      ref: t,
      title: r,
      ariaId: u,
      prefixCls: n,
      holderRef: y,
      style: T(T(T({}, w), o), b),
      className: U(a, S)
    }));
  });
});
Gg.displayName = "Content";
var iw = function(t) {
  var n = t.prefixCls, r = t.style, o = t.visible, a = t.maskProps, i = t.motionName, l = t.className;
  return /* @__PURE__ */ d.createElement(jr, {
    key: "mask",
    visible: o,
    motionName: i,
    leavedClassName: "".concat(n, "-mask-hidden")
  }, function(s, c) {
    var u = s.className, f = s.style;
    return /* @__PURE__ */ d.createElement("div", ve({
      ref: c,
      style: T(T({}, f), r),
      className: U("".concat(n, "-mask"), u, l)
    }, a));
  });
}, lw = function(t) {
  var n = t.prefixCls, r = n === void 0 ? "rc-dialog" : n, o = t.zIndex, a = t.visible, i = a === void 0 ? !1 : a, l = t.keyboard, s = l === void 0 ? !0 : l, c = t.focusTriggerAfterClose, u = c === void 0 ? !0 : c, f = t.wrapStyle, m = t.wrapClassName, h = t.wrapProps, g = t.onClose, p = t.afterOpenChange, v = t.afterClose, C = t.transitionName, b = t.animation, x = t.closable, $ = x === void 0 ? !0 : x, y = t.mask, S = y === void 0 ? !0 : y, w = t.maskTransitionName, E = t.maskAnimation, O = t.maskClosable, P = O === void 0 ? !0 : O, N = t.maskStyle, R = t.maskProps, _ = t.rootClassName, I = t.classNames, k = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(oe) {
    Mr(!(oe in t), "".concat(oe, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && Mr(!1, "wrapClassName is deprecated, please use classNames instead."));
  var A = fe(), D = fe(), F = fe(), q = d.useState(i), K = G(q, 2), Q = K[0], W = K[1], L = fu();
  function z() {
    As(D.current, document.activeElement) || (A.current = document.activeElement);
  }
  function H() {
    if (!As(D.current, document.activeElement)) {
      var oe;
      (oe = F.current) === null || oe === void 0 || oe.focus();
    }
  }
  function V(oe) {
    if (oe)
      H();
    else {
      if (W(!1), S && A.current && u) {
        try {
          A.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        A.current = null;
      }
      Q && v?.();
    }
    p?.(oe);
  }
  function te(oe) {
    g?.(oe);
  }
  var Y = fe(!1), J = fe(), ae = function() {
    clearTimeout(J.current), Y.current = !0;
  }, le = function() {
    J.current = setTimeout(function() {
      Y.current = !1;
    });
  }, X = null;
  P && (X = function(ne) {
    Y.current ? Y.current = !1 : D.current === ne.target && te(ne);
  });
  function se(oe) {
    if (s && oe.keyCode === cn.ESC) {
      oe.stopPropagation(), te(oe);
      return;
    }
    i && oe.keyCode === cn.TAB && F.current.changeActive(!oe.shiftKey);
  }
  yt(function() {
    i && (W(!0), z());
  }, [i]), yt(function() {
    return function() {
      clearTimeout(J.current);
    };
  }, []);
  var Z = T(T(T({
    zIndex: o
  }, f), k?.wrapper), {}, {
    display: Q ? null : "none"
  });
  return /* @__PURE__ */ d.createElement("div", ve({
    className: U("".concat(r, "-root"), _)
  }, Fa(t, {
    data: !0
  })), /* @__PURE__ */ d.createElement(iw, {
    prefixCls: r,
    visible: S && i,
    motionName: mf(r, w, E),
    style: T(T({
      zIndex: o
    }, N), k?.mask),
    maskProps: R,
    className: I?.mask
  }), /* @__PURE__ */ d.createElement("div", ve({
    tabIndex: -1,
    onKeyDown: se,
    className: U("".concat(r, "-wrap"), m, I?.wrapper),
    ref: D,
    onClick: X,
    style: Z
  }, h), /* @__PURE__ */ d.createElement(Gg, ve({}, t, {
    onMouseDown: ae,
    onMouseUp: le,
    ref: F,
    closable: $,
    ariaId: L,
    prefixCls: r,
    visible: i && Q,
    onClose: te,
    onVisibleChanged: V,
    motionName: mf(r, C, b)
  }))));
}, qg = function(t) {
  var n = t.visible, r = t.getContainer, o = t.forceRender, a = t.destroyOnClose, i = a === void 0 ? !1 : a, l = t.afterClose, s = t.panelRef, c = d.useState(n), u = G(c, 2), f = u[0], m = u[1], h = d.useMemo(function() {
    return {
      panel: s
    };
  }, [s]);
  return d.useEffect(function() {
    n && m(!0);
  }, [n]), !o && i && !f ? null : /* @__PURE__ */ d.createElement(Wg.Provider, {
    value: h
  }, /* @__PURE__ */ d.createElement(El, {
    open: n || o || f,
    autoDestroy: !1,
    getContainer: r,
    autoLock: n || f
  }, /* @__PURE__ */ d.createElement(lw, ve({}, t, {
    destroyOnClose: i,
    afterClose: function() {
      l?.(), m(!1);
    }
  }))));
};
qg.displayName = "Dialog";
var Vr = "RC_FORM_INTERNAL_HOOKS", dt = function() {
  rt(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, ko = /* @__PURE__ */ d.createContext({
  getFieldValue: dt,
  getFieldsValue: dt,
  getFieldError: dt,
  getFieldWarning: dt,
  getFieldsError: dt,
  isFieldsTouched: dt,
  isFieldTouched: dt,
  isFieldValidating: dt,
  isFieldsValidating: dt,
  resetFields: dt,
  setFields: dt,
  setFieldValue: dt,
  setFieldsValue: dt,
  validateFields: dt,
  submit: dt,
  getInternalHooks: function() {
    return dt(), {
      dispatch: dt,
      initEntityValue: dt,
      registerField: dt,
      useSubscribe: dt,
      setInitialValues: dt,
      destroyForm: dt,
      setCallbacks: dt,
      registerWatch: dt,
      getFields: dt,
      setValidateMessages: dt,
      setPreserve: dt,
      getInitialValue: dt
    };
  }
}), qi = /* @__PURE__ */ d.createContext(null);
function mc(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function sw(e) {
  return e && !!e._init;
}
function vc() {
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
var gc = vc();
function cw(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function uw(e, t, n) {
  if (Vc()) return Reflect.construct.apply(null, arguments);
  var r = [null];
  r.push.apply(r, t);
  var o = new (e.bind.apply(e, r))();
  return n && da(o, n.prototype), o;
}
function pc(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return pc = function(r) {
    if (r === null || !cw(r)) return r;
    if (typeof r != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(r)) return t.get(r);
      t.set(r, o);
    }
    function o() {
      return uw(r, arguments, fa(this).constructor);
    }
    return o.prototype = Object.create(r.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), da(o, r);
  }, pc(e);
}
var dw = /%[sdj%]/g, Ug = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ug = function(t, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(r) {
    return typeof r == "string";
  }) && console.warn(t, n);
});
function hc(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(n) {
    var r = n.field;
    t[r] = t[r] || [], t[r].push(n);
  }), t;
}
function yn(e) {
  for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++)
    n[r - 1] = arguments[r];
  var o = 0, a = n.length;
  if (typeof e == "function")
    return e.apply(null, n);
  if (typeof e == "string") {
    var i = e.replace(dw, function(l) {
      if (l === "%%")
        return "%";
      if (o >= a)
        return l;
      switch (l) {
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
          return l;
      }
    });
    return i;
  }
  return e;
}
function fw(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Dt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || fw(t) && typeof e == "string" && !e);
}
function mw(e, t, n) {
  var r = [], o = 0, a = e.length;
  function i(l) {
    r.push.apply(r, de(l || [])), o++, o === a && n(r);
  }
  e.forEach(function(l) {
    t(l, i);
  });
}
function gf(e, t, n) {
  var r = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      n(i);
      return;
    }
    var l = r;
    r = r + 1, l < o ? t(e[l], a) : n([]);
  }
  a([]);
}
function vw(e) {
  var t = [];
  return Object.keys(e).forEach(function(n) {
    t.push.apply(t, de(e[n] || []));
  }), t;
}
var pf = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n(r, o) {
    var a;
    return Mt(this, n), a = t.call(this, "Async Validation Error"), j(He(a), "errors", void 0), j(He(a), "fields", void 0), a.errors = r, a.fields = o, a;
  }
  return Tt(n);
})(/* @__PURE__ */ pc(Error));
function gw(e, t, n, r, o) {
  if (t.first) {
    var a = new Promise(function(m, h) {
      var g = function(C) {
        return r(C), C.length ? h(new pf(C, hc(C))) : m(o);
      }, p = vw(e);
      gf(p, n, g);
    });
    return a.catch(function(m) {
      return m;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), s = l.length, c = 0, u = [], f = new Promise(function(m, h) {
    var g = function(v) {
      if (u.push.apply(u, v), c++, c === s)
        return r(u), u.length ? h(new pf(u, hc(u))) : m(o);
    };
    l.length || (r(u), m(o)), l.forEach(function(p) {
      var v = e[p];
      i.indexOf(p) !== -1 ? gf(v, n, g) : mw(v, n, g);
    });
  });
  return f.catch(function(m) {
    return m;
  }), f;
}
function pw(e) {
  return !!(e && e.message !== void 0);
}
function hw(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null)
      return n;
    n = n[t[r]];
  }
  return n;
}
function hf(e, t) {
  return function(n) {
    var r;
    return e.fullFields ? r = hw(t, e.fullFields) : r = t[n.field || e.fullField], pw(n) ? (n.field = n.field || e.fullField, n.fieldValue = r, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: r,
      field: n.field || e.fullField
    };
  };
}
function bf(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n];
        Se(r) === "object" && Se(e[n]) === "object" ? e[n] = T(T({}, e[n]), r) : e[n] = r;
      }
  }
  return e;
}
var co = "enum", bw = function(t, n, r, o, a) {
  t[co] = Array.isArray(t[co]) ? t[co] : [], t[co].indexOf(n) === -1 && o.push(yn(a.messages[co], t.fullField, t[co].join(", ")));
}, yw = function(t, n, r, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(n) || o.push(yn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(n) || o.push(yn(a.messages.pattern.mismatch, t.fullField, n, t.pattern));
    }
  }
}, Cw = function(t, n, r, o, a) {
  var i = typeof t.len == "number", l = typeof t.min == "number", s = typeof t.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, u = n, f = null, m = typeof n == "number", h = typeof n == "string", g = Array.isArray(n);
  if (m ? f = "number" : h ? f = "string" : g && (f = "array"), !f)
    return !1;
  g && (u = n.length), h && (u = n.replace(c, "_").length), i ? u !== t.len && o.push(yn(a.messages[f].len, t.fullField, t.len)) : l && !s && u < t.min ? o.push(yn(a.messages[f].min, t.fullField, t.min)) : s && !l && u > t.max ? o.push(yn(a.messages[f].max, t.fullField, t.max)) : l && s && (u < t.min || u > t.max) && o.push(yn(a.messages[f].range, t.fullField, t.min, t.max));
}, Kg = function(t, n, r, o, a, i) {
  t.required && (!r.hasOwnProperty(t.field) || Dt(n, i || t.type)) && o.push(yn(a.messages.required, t.fullField));
}, ui;
const xw = (function() {
  if (ui)
    return ui;
  var e = "[a-fA-F\\d:]", t = function(S) {
    return S && S.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
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
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), l = new RegExp("(?:^".concat(n, "$)|(?:^").concat(i, "$)")), s = new RegExp("^".concat(n, "$")), c = new RegExp("^".concat(i, "$")), u = function(S) {
    return S && S.exact ? l : new RegExp("(?:".concat(t(S)).concat(n).concat(t(S), ")|(?:").concat(t(S)).concat(i).concat(t(S), ")"), "g");
  };
  u.v4 = function(y) {
    return y && y.exact ? s : new RegExp("".concat(t(y)).concat(n).concat(t(y)), "g");
  }, u.v6 = function(y) {
    return y && y.exact ? c : new RegExp("".concat(t(y)).concat(i).concat(t(y)), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", m = "(?:\\S+(?::\\S*)?@)?", h = u.v4().source, g = u.v6().source, p = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", C = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', $ = "(?:".concat(f, "|www\\.)").concat(m, "(?:localhost|").concat(h, "|").concat(g, "|").concat(p).concat(v).concat(C, ")").concat(b).concat(x);
  return ui = new RegExp("(?:^".concat($, "$)"), "i"), ui;
});
var yf = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, aa = {
  integer: function(t) {
    return aa.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return aa.number(t) && !aa.integer(t);
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
    return Se(t) === "object" && !aa.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(yf.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(xw());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(yf.hex);
  }
}, Sw = function(t, n, r, o, a) {
  if (t.required && n === void 0) {
    Kg(t, n, r, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  i.indexOf(l) > -1 ? aa[l](n) || o.push(yn(a.messages.types[l], t.fullField, t.type)) : l && Se(n) !== t.type && o.push(yn(a.messages.types[l], t.fullField, t.type));
}, ww = function(t, n, r, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(yn(a.messages.whitespace, t.fullField));
};
const Ue = {
  required: Kg,
  whitespace: ww,
  type: Sw,
  range: Cw,
  enum: bw,
  pattern: yw
};
var $w = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a);
  }
  r(i);
}, Ew = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n == null && !t.required)
      return r();
    Ue.required(t, n, o, i, a, "array"), n != null && (Ue.type(t, n, o, i, a), Ue.range(t, n, o, i, a));
  }
  r(i);
}, Ow = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && Ue.type(t, n, o, i, a);
  }
  r(i);
}, Pw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n, "date") && !t.required)
      return r();
    if (Ue.required(t, n, o, i, a), !Dt(n, "date")) {
      var s;
      n instanceof Date ? s = n : s = new Date(n), Ue.type(t, s, o, i, a), s && Ue.range(t, s.getTime(), o, i, a);
    }
  }
  r(i);
}, Nw = "enum", Rw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && Ue[Nw](t, n, o, i, a);
  }
  r(i);
}, Iw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && (Ue.type(t, n, o, i, a), Ue.range(t, n, o, i, a));
  }
  r(i);
}, Mw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && (Ue.type(t, n, o, i, a), Ue.range(t, n, o, i, a));
  }
  r(i);
}, Tw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && Ue.type(t, n, o, i, a);
  }
  r(i);
}, _w = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (n === "" && (n = void 0), Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && (Ue.type(t, n, o, i, a), Ue.range(t, n, o, i, a));
  }
  r(i);
}, Aw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), n !== void 0 && Ue.type(t, n, o, i, a);
  }
  r(i);
}, jw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n, "string") && !t.required)
      return r();
    Ue.required(t, n, o, i, a), Dt(n, "string") || Ue.pattern(t, n, o, i, a);
  }
  r(i);
}, Fw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n) && !t.required)
      return r();
    Ue.required(t, n, o, i, a), Dt(n) || Ue.type(t, n, o, i, a);
  }
  r(i);
}, Bw = function(t, n, r, o, a) {
  var i = [], l = Array.isArray(n) ? "array" : Se(n);
  Ue.required(t, n, o, i, a, l), r(i);
}, kw = function(t, n, r, o, a) {
  var i = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Dt(n, "string") && !t.required)
      return r();
    Ue.required(t, n, o, i, a, "string"), Dt(n, "string") || (Ue.type(t, n, o, i, a), Ue.range(t, n, o, i, a), Ue.pattern(t, n, o, i, a), t.whitespace === !0 && Ue.whitespace(t, n, o, i, a));
  }
  r(i);
}, ds = function(t, n, r, o, a) {
  var i = t.type, l = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Dt(n, i) && !t.required)
      return r();
    Ue.required(t, n, o, l, a, i), Dt(n, i) || Ue.type(t, n, o, l, a);
  }
  r(l);
};
const ca = {
  string: kw,
  method: Tw,
  number: _w,
  boolean: Ow,
  regexp: Fw,
  integer: Mw,
  float: Iw,
  array: Ew,
  object: Aw,
  enum: Rw,
  pattern: jw,
  date: Pw,
  url: ds,
  hex: ds,
  email: ds,
  required: Bw,
  any: $w
};
var za = /* @__PURE__ */ (function() {
  function e(t) {
    Mt(this, e), j(this, "rules", null), j(this, "_messages", gc), this.define(t);
  }
  return Tt(e, [{
    key: "define",
    value: function(n) {
      var r = this;
      if (!n)
        throw new Error("Cannot configure a schema with no rules");
      if (Se(n) !== "object" || Array.isArray(n))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(n).forEach(function(o) {
        var a = n[o];
        r.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(n) {
      return n && (this._messages = bf(vc(), n)), this._messages;
    }
  }, {
    key: "validate",
    value: function(n) {
      var r = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = n, l = o, s = a;
      if (typeof l == "function" && (s = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
        return s && s(null, i), Promise.resolve(i);
      function c(g) {
        var p = [], v = {};
        function C(x) {
          if (Array.isArray(x)) {
            var $;
            p = ($ = p).concat.apply($, de(x));
          } else
            p.push(x);
        }
        for (var b = 0; b < g.length; b++)
          C(g[b]);
        p.length ? (v = hc(p), s(p, v)) : s(null, i);
      }
      if (l.messages) {
        var u = this.messages();
        u === gc && (u = vc()), bf(u, l.messages), l.messages = u;
      } else
        l.messages = this.messages();
      var f = {}, m = l.keys || Object.keys(this.rules);
      m.forEach(function(g) {
        var p = r.rules[g], v = i[g];
        p.forEach(function(C) {
          var b = C;
          typeof b.transform == "function" && (i === n && (i = T({}, i)), v = i[g] = b.transform(v), v != null && (b.type = b.type || (Array.isArray(v) ? "array" : Se(v)))), typeof b == "function" ? b = {
            validator: b
          } : b = T({}, b), b.validator = r.getValidationMethod(b), b.validator && (b.field = g, b.fullField = b.fullField || g, b.type = r.getType(b), f[g] = f[g] || [], f[g].push({
            rule: b,
            value: v,
            source: i,
            field: g
          }));
        });
      });
      var h = {};
      return gw(f, l, function(g, p) {
        var v = g.rule, C = (v.type === "object" || v.type === "array") && (Se(v.fields) === "object" || Se(v.defaultField) === "object");
        C = C && (v.required || !v.required && g.value), v.field = g.field;
        function b(w, E) {
          return T(T({}, E), {}, {
            fullField: "".concat(v.fullField, ".").concat(w),
            fullFields: v.fullFields ? [].concat(de(v.fullFields), [w]) : [w]
          });
        }
        function x() {
          var w = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], E = Array.isArray(w) ? w : [w];
          !l.suppressWarning && E.length && e.warning("async-validator:", E), E.length && v.message !== void 0 && (E = [].concat(v.message));
          var O = E.map(hf(v, i));
          if (l.first && O.length)
            return h[v.field] = 1, p(O);
          if (!C)
            p(O);
          else {
            if (v.required && !g.value)
              return v.message !== void 0 ? O = [].concat(v.message).map(hf(v, i)) : l.error && (O = [l.error(v, yn(l.messages.required, v.field))]), p(O);
            var P = {};
            v.defaultField && Object.keys(g.value).map(function(_) {
              P[_] = v.defaultField;
            }), P = T(T({}, P), g.rule.fields);
            var N = {};
            Object.keys(P).forEach(function(_) {
              var I = P[_], k = Array.isArray(I) ? I : [I];
              N[_] = k.map(b.bind(null, _));
            });
            var R = new e(N);
            R.messages(l.messages), g.rule.options && (g.rule.options.messages = l.messages, g.rule.options.error = l.error), R.validate(g.value, g.rule.options || l, function(_) {
              var I = [];
              O && O.length && I.push.apply(I, de(O)), _ && _.length && I.push.apply(I, de(_)), p(I.length ? I : null);
            });
          }
        }
        var $;
        if (v.asyncValidator)
          $ = v.asyncValidator(v, g.value, x, g.source, l);
        else if (v.validator) {
          try {
            $ = v.validator(v, g.value, x, g.source, l);
          } catch (w) {
            var y, S;
            (y = (S = console).error) === null || y === void 0 || y.call(S, w), l.suppressValidatorError || setTimeout(function() {
              throw w;
            }, 0), x(w.message);
          }
          $ === !0 ? x() : $ === !1 ? x(typeof v.message == "function" ? v.message(v.fullField || v.field) : v.message || "".concat(v.fullField || v.field, " fails")) : $ instanceof Array ? x($) : $ instanceof Error && x($.message);
        }
        $ && $.then && $.then(function() {
          return x();
        }, function(w) {
          return x(w);
        });
      }, function(g) {
        c(g);
      }, i);
    }
  }, {
    key: "getType",
    value: function(n) {
      if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !ca.hasOwnProperty(n.type))
        throw new Error(yn("Unknown rule type %s", n.type));
      return n.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(n) {
      if (typeof n.validator == "function")
        return n.validator;
      var r = Object.keys(n), o = r.indexOf("message");
      return o !== -1 && r.splice(o, 1), r.length === 1 && r[0] === "required" ? ca.required : ca[this.getType(n)] || void 0;
    }
  }]), e;
})();
j(za, "register", function(t, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ca[t] = n;
});
j(za, "warning", Ug);
j(za, "messages", gc);
j(za, "validators", ca);
var hn = "'${name}' is not a valid ${type}", Xg = {
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
    string: hn,
    method: hn,
    array: hn,
    object: hn,
    number: hn,
    date: hn,
    boolean: hn,
    integer: hn,
    float: hn,
    regexp: hn,
    email: hn,
    url: hn,
    hex: hn
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
}, Cf = za;
function Dw(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(n) {
    if (n.startsWith("\\"))
      return n.slice(1);
    var r = n.slice(2, -1);
    return t[r];
  });
}
var xf = "CODE_LOGIC_ERROR";
function bc(e, t, n, r, o) {
  return yc.apply(this, arguments);
}
function yc() {
  return yc = to(/* @__PURE__ */ rn().mark(function e(t, n, r, o, a) {
    var i, l, s, c, u, f, m, h, g;
    return rn().wrap(function(v) {
      for (; ; ) switch (v.prev = v.next) {
        case 0:
          return i = T({}, r), delete i.ruleIndex, Cf.warning = function() {
          }, i.validator && (l = i.validator, i.validator = function() {
            try {
              return l.apply(void 0, arguments);
            } catch (C) {
              return console.error(C), Promise.reject(xf);
            }
          }), s = null, i && i.type === "array" && i.defaultField && (s = i.defaultField, delete i.defaultField), c = new Cf(j({}, t, [i])), u = Co(Xg, o.validateMessages), c.messages(u), f = [], v.prev = 10, v.next = 13, Promise.resolve(c.validate(j({}, t, n), T({}, o)));
        case 13:
          v.next = 18;
          break;
        case 15:
          v.prev = 15, v.t0 = v.catch(10), v.t0.errors && (f = v.t0.errors.map(function(C, b) {
            var x = C.message, $ = x === xf ? u.default : x;
            return /* @__PURE__ */ d.isValidElement($) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ d.cloneElement($, {
                key: "error_".concat(b)
              })
            ) : $;
          }));
        case 18:
          if (!(!f.length && s && Array.isArray(n) && n.length > 0)) {
            v.next = 23;
            break;
          }
          return v.next = 21, Promise.all(n.map(function(C, b) {
            return bc("".concat(t, ".").concat(b), C, s, o, a);
          }));
        case 21:
          return m = v.sent, v.abrupt("return", m.reduce(function(C, b) {
            return [].concat(de(C), de(b));
          }, []));
        case 23:
          return h = T(T({}, r), {}, {
            name: t,
            enum: (r.enum || []).join(", ")
          }, a), g = f.map(function(C) {
            return typeof C == "string" ? Dw(C, h) : C;
          }), v.abrupt("return", g);
        case 26:
        case "end":
          return v.stop();
      }
    }, e, null, [[10, 15]]);
  })), yc.apply(this, arguments);
}
function Lw(e, t, n, r, o, a) {
  var i = e.join("."), l = n.map(function(u, f) {
    var m = u.validator, h = T(T({}, u), {}, {
      ruleIndex: f
    });
    return m && (h.validator = function(g, p, v) {
      var C = !1, b = function() {
        for (var y = arguments.length, S = new Array(y), w = 0; w < y; w++)
          S[w] = arguments[w];
        Promise.resolve().then(function() {
          rt(!C, "Your validator function has already return a promise. `callback` will be ignored."), C || v.apply(void 0, S);
        });
      }, x = m(g, p, b);
      C = x && typeof x.then == "function" && typeof x.catch == "function", rt(C, "`callback` is deprecated. Please return a promise instead."), C && x.then(function() {
        v();
      }).catch(function($) {
        v($ || " ");
      });
    }), h;
  }).sort(function(u, f) {
    var m = u.warningOnly, h = u.ruleIndex, g = f.warningOnly, p = f.ruleIndex;
    return !!m == !!g ? h - p : m ? 1 : -1;
  }), s;
  if (o === !0)
    s = new Promise(/* @__PURE__ */ (function() {
      var u = to(/* @__PURE__ */ rn().mark(function f(m, h) {
        var g, p, v;
        return rn().wrap(function(b) {
          for (; ; ) switch (b.prev = b.next) {
            case 0:
              g = 0;
            case 1:
              if (!(g < l.length)) {
                b.next = 12;
                break;
              }
              return p = l[g], b.next = 5, bc(i, t, p, r, a);
            case 5:
              if (v = b.sent, !v.length) {
                b.next = 9;
                break;
              }
              return h([{
                errors: v,
                rule: p
              }]), b.abrupt("return");
            case 9:
              g += 1, b.next = 1;
              break;
            case 12:
              m([]);
            case 13:
            case "end":
              return b.stop();
          }
        }, f);
      }));
      return function(f, m) {
        return u.apply(this, arguments);
      };
    })());
  else {
    var c = l.map(function(u) {
      return bc(i, t, u, r, a).then(function(f) {
        return {
          errors: f,
          rule: u
        };
      });
    });
    s = (o ? Hw(c) : zw(c)).then(function(u) {
      return Promise.reject(u);
    });
  }
  return s.catch(function(u) {
    return u;
  }), s;
}
function zw(e) {
  return Cc.apply(this, arguments);
}
function Cc() {
  return Cc = to(/* @__PURE__ */ rn().mark(function e(t) {
    return rn().wrap(function(r) {
      for (; ; ) switch (r.prev = r.next) {
        case 0:
          return r.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, de(o));
            return i;
          }));
        case 1:
        case "end":
          return r.stop();
      }
    }, e);
  })), Cc.apply(this, arguments);
}
function Hw(e) {
  return xc.apply(this, arguments);
}
function xc() {
  return xc = to(/* @__PURE__ */ rn().mark(function e(t) {
    var n;
    return rn().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return n = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(l) {
                l.errors.length && a([l]), n += 1, n === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), xc.apply(this, arguments);
}
function It(e) {
  return mc(e);
}
function Sf(e, t) {
  var n = {};
  return t.forEach(function(r) {
    var o = Yn(e, r);
    n = kn(n, r, o);
  }), n;
}
function No(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(r) {
    return Yg(t, r, n);
  });
}
function Yg(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !n && e.length !== t.length ? !1 : t.every(function(r, o) {
    return e[o] === r;
  });
}
function Vw(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || Se(e) !== "object" || Se(t) !== "object")
    return !1;
  var n = Object.keys(e), r = Object.keys(t), o = new Set([].concat(n, r));
  return de(o).every(function(a) {
    var i = e[a], l = t[a];
    return typeof i == "function" && typeof l == "function" ? !0 : i === l;
  });
}
function Ww(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && Se(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function wf(e, t, n) {
  var r = e.length;
  if (t < 0 || t >= r || n < 0 || n >= r)
    return e;
  var o = e[t], a = t - n;
  return a > 0 ? [].concat(de(e.slice(0, n)), [o], de(e.slice(n, t)), de(e.slice(t + 1, r))) : a < 0 ? [].concat(de(e.slice(0, t)), de(e.slice(t + 1, n + 1)), [o], de(e.slice(n + 1, r))) : e;
}
var Gw = ["name"], In = [];
function fs(e, t, n, r, o, a) {
  return typeof e == "function" ? e(t, n, "source" in a ? {
    source: a.source
  } : {}) : r !== o;
}
var vu = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n(r) {
    var o;
    if (Mt(this, n), o = t.call(this, r), j(He(o), "state", {
      resetCount: 0
    }), j(He(o), "cancelRegisterFunc", null), j(He(o), "mounted", !1), j(He(o), "touched", !1), j(He(o), "dirty", !1), j(He(o), "validatePromise", void 0), j(He(o), "prevValidating", void 0), j(He(o), "errors", In), j(He(o), "warnings", In), j(He(o), "cancelRegister", function() {
      var s = o.props, c = s.preserve, u = s.isListField, f = s.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(u, c, It(f)), o.cancelRegisterFunc = null;
    }), j(He(o), "getNamePath", function() {
      var s = o.props, c = s.name, u = s.fieldContext, f = u.prefixName, m = f === void 0 ? [] : f;
      return c !== void 0 ? [].concat(de(m), de(c)) : [];
    }), j(He(o), "getRules", function() {
      var s = o.props, c = s.rules, u = c === void 0 ? [] : c, f = s.fieldContext;
      return u.map(function(m) {
        return typeof m == "function" ? m(f) : m;
      });
    }), j(He(o), "refresh", function() {
      o.mounted && o.setState(function(s) {
        var c = s.resetCount;
        return {
          resetCount: c + 1
        };
      });
    }), j(He(o), "metaCache", null), j(He(o), "triggerMetaEvent", function(s) {
      var c = o.props.onMetaChange;
      if (c) {
        var u = T(T({}, o.getMeta()), {}, {
          destroy: s
        });
        Ur(o.metaCache, u) || c(u), o.metaCache = u;
      } else
        o.metaCache = null;
    }), j(He(o), "onStoreChange", function(s, c, u) {
      var f = o.props, m = f.shouldUpdate, h = f.dependencies, g = h === void 0 ? [] : h, p = f.onReset, v = u.store, C = o.getNamePath(), b = o.getValue(s), x = o.getValue(v), $ = c && No(c, C);
      switch (u.type === "valueUpdate" && u.source === "external" && !Ur(b, x) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = In, o.warnings = In, o.triggerMetaEvent()), u.type) {
        case "reset":
          if (!c || $) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = In, o.warnings = In, o.triggerMetaEvent(), p?.(), o.refresh();
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
          if (m && fs(m, s, v, b, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var y = u.data;
          if ($) {
            "touched" in y && (o.touched = y.touched), "validating" in y && !("originRCField" in y) && (o.validatePromise = y.validating ? Promise.resolve([]) : null), "errors" in y && (o.errors = y.errors || In), "warnings" in y && (o.warnings = y.warnings || In), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in y && No(c, C, !0)) {
            o.reRender();
            return;
          }
          if (m && !C.length && fs(m, s, v, b, x, u)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var S = g.map(It);
          if (S.some(function(w) {
            return No(u.relatedFields, w);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if ($ || (!g.length || C.length || m) && fs(m, s, v, b, x, u)) {
            o.reRender();
            return;
          }
          break;
      }
      m === !0 && o.reRender();
    }), j(He(o), "validateRules", function(s) {
      var c = o.getNamePath(), u = o.getValue(), f = s || {}, m = f.triggerName, h = f.validateOnly, g = h === void 0 ? !1 : h, p = Promise.resolve().then(/* @__PURE__ */ to(/* @__PURE__ */ rn().mark(function v() {
        var C, b, x, $, y, S, w;
        return rn().wrap(function(O) {
          for (; ; ) switch (O.prev = O.next) {
            case 0:
              if (o.mounted) {
                O.next = 2;
                break;
              }
              return O.abrupt("return", []);
            case 2:
              if (C = o.props, b = C.validateFirst, x = b === void 0 ? !1 : b, $ = C.messageVariables, y = C.validateDebounce, S = o.getRules(), m && (S = S.filter(function(P) {
                return P;
              }).filter(function(P) {
                var N = P.validateTrigger;
                if (!N)
                  return !0;
                var R = mc(N);
                return R.includes(m);
              })), !(y && m)) {
                O.next = 10;
                break;
              }
              return O.next = 8, new Promise(function(P) {
                setTimeout(P, y);
              });
            case 8:
              if (o.validatePromise === p) {
                O.next = 10;
                break;
              }
              return O.abrupt("return", []);
            case 10:
              return w = Lw(c, u, S, s, x, $), w.catch(function(P) {
                return P;
              }).then(function() {
                var P = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : In;
                if (o.validatePromise === p) {
                  var N;
                  o.validatePromise = null;
                  var R = [], _ = [];
                  (N = P.forEach) === null || N === void 0 || N.call(P, function(I) {
                    var k = I.rule.warningOnly, A = I.errors, D = A === void 0 ? In : A;
                    k ? _.push.apply(_, de(D)) : R.push.apply(R, de(D));
                  }), o.errors = R, o.warnings = _, o.triggerMetaEvent(), o.reRender();
                }
              }), O.abrupt("return", w);
            case 13:
            case "end":
              return O.stop();
          }
        }, v);
      })));
      return g || (o.validatePromise = p, o.dirty = !0, o.errors = In, o.warnings = In, o.triggerMetaEvent(), o.reRender()), p;
    }), j(He(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), j(He(o), "isFieldTouched", function() {
      return o.touched;
    }), j(He(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var s = o.props.fieldContext, c = s.getInternalHooks(Vr), u = c.getInitialValue;
      return u(o.getNamePath()) !== void 0;
    }), j(He(o), "getErrors", function() {
      return o.errors;
    }), j(He(o), "getWarnings", function() {
      return o.warnings;
    }), j(He(o), "isListField", function() {
      return o.props.isListField;
    }), j(He(o), "isList", function() {
      return o.props.isList;
    }), j(He(o), "isPreserve", function() {
      return o.props.preserve;
    }), j(He(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var s = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return s;
    }), j(He(o), "getOnlyChild", function(s) {
      if (typeof s == "function") {
        var c = o.getMeta();
        return T(T({}, o.getOnlyChild(s(o.getControlled(), c, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var u = Ir(s);
      return u.length !== 1 || !/* @__PURE__ */ d.isValidElement(u[0]) ? {
        child: u,
        isFunction: !1
      } : {
        child: u[0],
        isFunction: !1
      };
    }), j(He(o), "getValue", function(s) {
      var c = o.props.fieldContext.getFieldsValue, u = o.getNamePath();
      return Yn(s || c(!0), u);
    }), j(He(o), "getControlled", function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = o.props, u = c.name, f = c.trigger, m = c.validateTrigger, h = c.getValueFromEvent, g = c.normalize, p = c.valuePropName, v = c.getValueProps, C = c.fieldContext, b = m !== void 0 ? m : C.validateTrigger, x = o.getNamePath(), $ = C.getInternalHooks, y = C.getFieldsValue, S = $(Vr), w = S.dispatch, E = o.getValue(), O = v || function(I) {
        return j({}, p, I);
      }, P = s[f], N = u !== void 0 ? O(E) : {};
      process.env.NODE_ENV !== "production" && N && Object.keys(N).forEach(function(I) {
        rt(typeof N[I] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(I, ")"));
      });
      var R = T(T({}, s), N);
      R[f] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var I, k = arguments.length, A = new Array(k), D = 0; D < k; D++)
          A[D] = arguments[D];
        h ? I = h.apply(void 0, A) : I = Ww.apply(void 0, [p].concat(A)), g && (I = g(I, E, y(!0))), I !== E && w({
          type: "updateValue",
          namePath: x,
          value: I
        }), P && P.apply(void 0, A);
      };
      var _ = mc(b || []);
      return _.forEach(function(I) {
        var k = R[I];
        R[I] = function() {
          k && k.apply(void 0, arguments);
          var A = o.props.rules;
          A && A.length && w({
            type: "validateField",
            namePath: x,
            triggerName: I
          });
        };
      }), R;
    }), r.fieldContext) {
      var a = r.fieldContext.getInternalHooks, i = a(Vr), l = i.initEntityValue;
      l(He(o));
    }
    return o;
  }
  return Tt(n, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var l = i.getInternalHooks, s = l(Vr), c = s.registerField;
        this.cancelRegisterFunc = c(this);
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
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), l = i.child, s = i.isFunction, c;
      return s ? c = l : /* @__PURE__ */ d.isValidElement(l) ? c = /* @__PURE__ */ d.cloneElement(l, this.getControlled(l.props)) : (rt(!l, "`children` of Field is not validate ReactElement."), c = l), /* @__PURE__ */ d.createElement(d.Fragment, {
        key: o
      }, c);
    }
  }]), n;
})(d.Component);
j(vu, "contextType", ko);
j(vu, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Zg(e) {
  var t, n = e.name, r = De(e, Gw), o = d.useContext(ko), a = d.useContext(qi), i = n !== void 0 ? It(n) : void 0, l = (t = r.isListField) !== null && t !== void 0 ? t : !!a, s = "keep";
  return l || (s = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && r.preserve === !1 && l && i.length <= 1 && rt(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ d.createElement(vu, ve({
    key: s,
    name: i,
    isListField: l
  }, r, {
    fieldContext: o
  }));
}
function qw(e) {
  var t = e.name, n = e.initialValue, r = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, l = d.useContext(ko), s = d.useContext(qi), c = d.useRef({
    keys: [],
    id: 0
  }), u = c.current, f = d.useMemo(function() {
    var p = It(l.prefixName) || [];
    return [].concat(de(p), de(It(t)));
  }, [l.prefixName, t]), m = d.useMemo(function() {
    return T(T({}, l), {}, {
      prefixName: f
    });
  }, [l, f]), h = d.useMemo(function() {
    return {
      getKey: function(v) {
        var C = f.length, b = v[C];
        return [u.keys[b], v.slice(C + 1)];
      }
    };
  }, [f]);
  if (typeof r != "function")
    return rt(!1, "Form.List only accepts function as children."), null;
  var g = function(v, C, b) {
    var x = b.source;
    return x === "internal" ? !1 : v !== C;
  };
  return /* @__PURE__ */ d.createElement(qi.Provider, {
    value: h
  }, /* @__PURE__ */ d.createElement(ko.Provider, {
    value: m
  }, /* @__PURE__ */ d.createElement(Zg, {
    name: [],
    shouldUpdate: g,
    rules: o,
    validateTrigger: a,
    initialValue: n,
    isList: !0,
    isListField: i ?? !!s
  }, function(p, v) {
    var C = p.value, b = C === void 0 ? [] : C, x = p.onChange, $ = l.getFieldValue, y = function() {
      var O = $(f || []);
      return O || [];
    }, S = {
      add: function(O, P) {
        var N = y();
        P >= 0 && P <= N.length ? (u.keys = [].concat(de(u.keys.slice(0, P)), [u.id], de(u.keys.slice(P))), x([].concat(de(N.slice(0, P)), [O], de(N.slice(P))))) : (process.env.NODE_ENV !== "production" && (P < 0 || P > N.length) && rt(!1, "The second parameter of the add function should be a valid positive number."), u.keys = [].concat(de(u.keys), [u.id]), x([].concat(de(N), [O]))), u.id += 1;
      },
      remove: function(O) {
        var P = y(), N = new Set(Array.isArray(O) ? O : [O]);
        N.size <= 0 || (u.keys = u.keys.filter(function(R, _) {
          return !N.has(_);
        }), x(P.filter(function(R, _) {
          return !N.has(_);
        })));
      },
      move: function(O, P) {
        if (O !== P) {
          var N = y();
          O < 0 || O >= N.length || P < 0 || P >= N.length || (u.keys = wf(u.keys, O, P), x(wf(N, O, P)));
        }
      }
    }, w = b || [];
    return Array.isArray(w) || (w = [], process.env.NODE_ENV !== "production" && rt(!1, "Current value of '".concat(f.join(" > "), "' is not an array type."))), r(w.map(function(E, O) {
      var P = u.keys[O];
      return P === void 0 && (u.keys[O] = u.id, P = u.keys[O], u.id += 1), {
        name: O,
        key: P,
        isListField: !0
      };
    }), S, v);
  })));
}
function Uw(e) {
  var t = !1, n = e.length, r = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, l) {
      i.catch(function(s) {
        return t = !0, s;
      }).then(function(s) {
        n -= 1, r[l] = s, !(n > 0) && (t && a(r), o(r));
      });
    });
  }) : Promise.resolve([]);
}
var Qg = "__@field_split__";
function ms(e) {
  return e.map(function(t) {
    return "".concat(Se(t), ":").concat(t);
  }).join(Qg);
}
var uo = /* @__PURE__ */ (function() {
  function e() {
    Mt(this, e), j(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Tt(e, [{
    key: "set",
    value: function(n, r) {
      this.kvs.set(ms(n), r);
    }
  }, {
    key: "get",
    value: function(n) {
      return this.kvs.get(ms(n));
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
      this.kvs.delete(ms(n));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(n) {
      return de(this.kvs.entries()).map(function(r) {
        var o = G(r, 2), a = o[0], i = o[1], l = a.split(Qg);
        return n({
          key: l.map(function(s) {
            var c = s.match(/^([^:]*):(.*)$/), u = G(c, 3), f = u[1], m = u[2];
            return f === "number" ? Number(m) : m;
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
})(), Kw = ["name"], Xw = /* @__PURE__ */ Tt(function e(t) {
  var n = this;
  Mt(this, e), j(this, "formHooked", !1), j(this, "forceRootUpdate", void 0), j(this, "subscribable", !0), j(this, "store", {}), j(this, "fieldEntities", []), j(this, "initialValues", {}), j(this, "callbacks", {}), j(this, "validateMessages", null), j(this, "preserve", null), j(this, "lastValidatePromise", null), j(this, "getForm", function() {
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
  }), j(this, "getInternalHooks", function(r) {
    return r === Vr ? (n.formHooked = !0, {
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
    }) : (rt(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), j(this, "useSubscribe", function(r) {
    n.subscribable = r;
  }), j(this, "prevWithoutPreserves", null), j(this, "setInitialValues", function(r, o) {
    if (n.initialValues = r || {}, o) {
      var a, i = Co(r, n.store);
      (a = n.prevWithoutPreserves) === null || a === void 0 || a.map(function(l) {
        var s = l.key;
        i = kn(i, s, Yn(r, s));
      }), n.prevWithoutPreserves = null, n.updateStore(i);
    }
  }), j(this, "destroyForm", function(r) {
    if (r)
      n.updateStore({});
    else {
      var o = new uo();
      n.getFieldEntities(!0).forEach(function(a) {
        n.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), n.prevWithoutPreserves = o;
    }
  }), j(this, "getInitialValue", function(r) {
    var o = Yn(n.initialValues, r);
    return r.length ? Co(o) : o;
  }), j(this, "setCallbacks", function(r) {
    n.callbacks = r;
  }), j(this, "setValidateMessages", function(r) {
    n.validateMessages = r;
  }), j(this, "setPreserve", function(r) {
    n.preserve = r;
  }), j(this, "watchList", []), j(this, "registerWatch", function(r) {
    return n.watchList.push(r), function() {
      n.watchList = n.watchList.filter(function(o) {
        return o !== r;
      });
    };
  }), j(this, "notifyWatch", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (n.watchList.length) {
      var o = n.getFieldsValue(), a = n.getFieldsValue(!0);
      n.watchList.forEach(function(i) {
        i(o, a, r);
      });
    }
  }), j(this, "timeoutId", null), j(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !n.timeoutId && typeof window < "u" && (n.timeoutId = setTimeout(function() {
      n.timeoutId = null, n.formHooked || rt(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), j(this, "updateStore", function(r) {
    n.store = r;
  }), j(this, "getFieldEntities", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return r ? n.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : n.fieldEntities;
  }), j(this, "getFieldsMap", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new uo();
    return n.getFieldEntities(r).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), j(this, "getFieldEntitiesForNamePathList", function(r) {
    if (!r)
      return n.getFieldEntities(!0);
    var o = n.getFieldsMap(!0);
    return r.map(function(a) {
      var i = It(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: It(a)
      };
    });
  }), j(this, "getFieldsValue", function(r, o) {
    n.warningUnhooked();
    var a, i, l;
    if (r === !0 || Array.isArray(r) ? (a = r, i = o) : r && Se(r) === "object" && (l = r.strict, i = r.filter), a === !0 && !i)
      return n.store;
    var s = n.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), c = [];
    return s.forEach(function(u) {
      var f, m, h = "INVALIDATE_NAME_PATH" in u ? u.INVALIDATE_NAME_PATH : u.getNamePath();
      if (l) {
        var g, p;
        if ((g = (p = u).isList) !== null && g !== void 0 && g.call(p))
          return;
      } else if (!a && (f = (m = u).isListField) !== null && f !== void 0 && f.call(m))
        return;
      if (!i)
        c.push(h);
      else {
        var v = "getMeta" in u ? u.getMeta() : null;
        i(v) && c.push(h);
      }
    }), Sf(n.store, c.map(It));
  }), j(this, "getFieldValue", function(r) {
    n.warningUnhooked();
    var o = It(r);
    return Yn(n.store, o);
  }), j(this, "getFieldsError", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntitiesForNamePathList(r);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: It(r[i]),
        errors: [],
        warnings: []
      };
    });
  }), j(this, "getFieldError", function(r) {
    n.warningUnhooked();
    var o = It(r), a = n.getFieldsError([o])[0];
    return a.errors;
  }), j(this, "getFieldWarning", function(r) {
    n.warningUnhooked();
    var o = It(r), a = n.getFieldsError([o])[0];
    return a.warnings;
  }), j(this, "isFieldsTouched", function() {
    n.warningUnhooked();
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o[0], l = o[1], s, c = !1;
    o.length === 0 ? s = null : o.length === 1 ? Array.isArray(i) ? (s = i.map(It), c = !1) : (s = null, c = i) : (s = i.map(It), c = l);
    var u = n.getFieldEntities(!0), f = function(v) {
      return v.isFieldTouched();
    };
    if (!s)
      return c ? u.every(function(p) {
        return f(p) || p.isList();
      }) : u.some(f);
    var m = new uo();
    s.forEach(function(p) {
      m.set(p, []);
    }), u.forEach(function(p) {
      var v = p.getNamePath();
      s.forEach(function(C) {
        C.every(function(b, x) {
          return v[x] === b;
        }) && m.update(C, function(b) {
          return [].concat(de(b), [p]);
        });
      });
    });
    var h = function(v) {
      return v.some(f);
    }, g = m.map(function(p) {
      var v = p.value;
      return v;
    });
    return c ? g.every(h) : g.some(h);
  }), j(this, "isFieldTouched", function(r) {
    return n.warningUnhooked(), n.isFieldsTouched([r]);
  }), j(this, "isFieldsValidating", function(r) {
    n.warningUnhooked();
    var o = n.getFieldEntities();
    if (!r)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = r.map(It);
    return o.some(function(i) {
      var l = i.getNamePath();
      return No(a, l) && i.isFieldValidating();
    });
  }), j(this, "isFieldValidating", function(r) {
    return n.warningUnhooked(), n.isFieldsValidating([r]);
  }), j(this, "resetWithFieldInitialValue", function() {
    var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new uo(), a = n.getFieldEntities(!0);
    a.forEach(function(s) {
      var c = s.props.initialValue, u = s.getNamePath();
      if (c !== void 0) {
        var f = o.get(u) || /* @__PURE__ */ new Set();
        f.add({
          entity: s,
          value: c
        }), o.set(u, f);
      }
    });
    var i = function(c) {
      c.forEach(function(u) {
        var f = u.props.initialValue;
        if (f !== void 0) {
          var m = u.getNamePath(), h = n.getInitialValue(m);
          if (h !== void 0)
            rt(!1, "Form already set 'initialValues' with path '".concat(m.join("."), "'. Field can not overwrite it."));
          else {
            var g = o.get(m);
            if (g && g.size > 1)
              rt(!1, "Multiple Field with path '".concat(m.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (g) {
              var p = n.getFieldValue(m), v = u.isListField();
              !v && (!r.skipExist || p === void 0) && n.updateStore(kn(n.store, m, de(g)[0].value));
            }
          }
        }
      });
    }, l;
    r.entities ? l = r.entities : r.namePathList ? (l = [], r.namePathList.forEach(function(s) {
      var c = o.get(s);
      if (c) {
        var u;
        (u = l).push.apply(u, de(de(c).map(function(f) {
          return f.entity;
        })));
      }
    })) : l = a, i(l);
  }), j(this, "resetFields", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (!r) {
      n.updateStore(Co(n.initialValues)), n.resetWithFieldInitialValue(), n.notifyObservers(o, null, {
        type: "reset"
      }), n.notifyWatch();
      return;
    }
    var a = r.map(It);
    a.forEach(function(i) {
      var l = n.getInitialValue(i);
      n.updateStore(kn(n.store, i, l));
    }), n.resetWithFieldInitialValue({
      namePathList: a
    }), n.notifyObservers(o, a, {
      type: "reset"
    }), n.notifyWatch(a);
  }), j(this, "setFields", function(r) {
    n.warningUnhooked();
    var o = n.store, a = [];
    r.forEach(function(i) {
      var l = i.name, s = De(i, Kw), c = It(l);
      a.push(c), "value" in s && n.updateStore(kn(n.store, c, s.value)), n.notifyObservers(o, [c], {
        type: "setField",
        data: i
      });
    }), n.notifyWatch(a);
  }), j(this, "getFields", function() {
    var r = n.getFieldEntities(!0), o = r.map(function(a) {
      var i = a.getNamePath(), l = a.getMeta(), s = T(T({}, l), {}, {
        name: i,
        value: n.getFieldValue(i)
      });
      return Object.defineProperty(s, "originRCField", {
        value: !0
      }), s;
    });
    return o;
  }), j(this, "initEntityValue", function(r) {
    var o = r.props.initialValue;
    if (o !== void 0) {
      var a = r.getNamePath(), i = Yn(n.store, a);
      i === void 0 && n.updateStore(kn(n.store, a, o));
    }
  }), j(this, "isMergedPreserve", function(r) {
    var o = r !== void 0 ? r : n.preserve;
    return o ?? !0;
  }), j(this, "registerField", function(r) {
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
    return function(i, l) {
      var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (n.fieldEntities = n.fieldEntities.filter(function(f) {
        return f !== r;
      }), !n.isMergedPreserve(l) && (!i || s.length > 1)) {
        var c = i ? void 0 : n.getInitialValue(o);
        if (o.length && n.getFieldValue(o) !== c && n.fieldEntities.every(function(f) {
          return (
            // Only reset when no namePath exist
            !Yg(f.getNamePath(), o)
          );
        })) {
          var u = n.store;
          n.updateStore(kn(u, o, c, !0)), n.notifyObservers(u, [o], {
            type: "remove"
          }), n.triggerDependenciesUpdate(u, o);
        }
      }
      n.notifyWatch([o]);
    };
  }), j(this, "dispatch", function(r) {
    switch (r.type) {
      case "updateValue": {
        var o = r.namePath, a = r.value;
        n.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = r.namePath, l = r.triggerName;
        n.validateFields([i], {
          triggerName: l
        });
        break;
      }
    }
  }), j(this, "notifyObservers", function(r, o, a) {
    if (n.subscribable) {
      var i = T(T({}, a), {}, {
        store: n.getFieldsValue(!0)
      });
      n.getFieldEntities().forEach(function(l) {
        var s = l.onStoreChange;
        s(r, o, i);
      });
    } else
      n.forceRootUpdate();
  }), j(this, "triggerDependenciesUpdate", function(r, o) {
    var a = n.getDependencyChildrenFields(o);
    return a.length && n.validateFields(a), n.notifyObservers(r, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(de(a))
    }), a;
  }), j(this, "updateValue", function(r, o) {
    var a = It(r), i = n.store;
    n.updateStore(kn(n.store, a, o)), n.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), n.notifyWatch([a]);
    var l = n.triggerDependenciesUpdate(i, a), s = n.callbacks.onValuesChange;
    if (s) {
      var c = Sf(n.store, [a]);
      s(c, n.getFieldsValue());
    }
    n.triggerOnFieldsChange([a].concat(de(l)));
  }), j(this, "setFieldsValue", function(r) {
    n.warningUnhooked();
    var o = n.store;
    if (r) {
      var a = Co(n.store, r);
      n.updateStore(a);
    }
    n.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), n.notifyWatch();
  }), j(this, "setFieldValue", function(r, o) {
    n.setFields([{
      name: r,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), j(this, "getDependencyChildrenFields", function(r) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new uo();
    n.getFieldEntities().forEach(function(s) {
      var c = s.props.dependencies;
      (c || []).forEach(function(u) {
        var f = It(u);
        i.update(f, function() {
          var m = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return m.add(s), m;
        });
      });
    });
    var l = function s(c) {
      var u = i.get(c) || /* @__PURE__ */ new Set();
      u.forEach(function(f) {
        if (!o.has(f)) {
          o.add(f);
          var m = f.getNamePath();
          f.isFieldDirty() && m.length && (a.push(m), s(m));
        }
      });
    };
    return l(r), a;
  }), j(this, "triggerOnFieldsChange", function(r, o) {
    var a = n.callbacks.onFieldsChange;
    if (a) {
      var i = n.getFields();
      if (o) {
        var l = new uo();
        o.forEach(function(c) {
          var u = c.name, f = c.errors;
          l.set(u, f);
        }), i.forEach(function(c) {
          c.errors = l.get(c.name) || c.errors;
        });
      }
      var s = i.filter(function(c) {
        var u = c.name;
        return No(r, u);
      });
      s.length && a(s, i);
    }
  }), j(this, "validateFields", function(r, o) {
    n.warningUnhooked();
    var a, i;
    Array.isArray(r) || typeof r == "string" || typeof o == "string" ? (a = r, i = o) : i = r;
    var l = !!a, s = l ? a.map(It) : [], c = [], u = String(Date.now()), f = /* @__PURE__ */ new Set(), m = i || {}, h = m.recursive, g = m.dirty;
    n.getFieldEntities(!0).forEach(function(b) {
      if (l || s.push(b.getNamePath()), !(!b.props.rules || !b.props.rules.length) && !(g && !b.isFieldDirty())) {
        var x = b.getNamePath();
        if (f.add(x.join(u)), !l || No(s, x, h)) {
          var $ = b.validateRules(T({
            validateMessages: T(T({}, Xg), n.validateMessages)
          }, i));
          c.push($.then(function() {
            return {
              name: x,
              errors: [],
              warnings: []
            };
          }).catch(function(y) {
            var S, w = [], E = [];
            return (S = y.forEach) === null || S === void 0 || S.call(y, function(O) {
              var P = O.rule.warningOnly, N = O.errors;
              P ? E.push.apply(E, de(N)) : w.push.apply(w, de(N));
            }), w.length ? Promise.reject({
              name: x,
              errors: w,
              warnings: E
            }) : {
              name: x,
              errors: w,
              warnings: E
            };
          }));
        }
      }
    });
    var p = Uw(c);
    n.lastValidatePromise = p, p.catch(function(b) {
      return b;
    }).then(function(b) {
      var x = b.map(function($) {
        var y = $.name;
        return y;
      });
      n.notifyObservers(n.store, x, {
        type: "validateFinish"
      }), n.triggerOnFieldsChange(x, b);
    });
    var v = p.then(function() {
      return n.lastValidatePromise === p ? Promise.resolve(n.getFieldsValue(s)) : Promise.reject([]);
    }).catch(function(b) {
      var x = b.filter(function($) {
        return $ && $.errors.length;
      });
      return Promise.reject({
        values: n.getFieldsValue(s),
        errorFields: x,
        outOfDate: n.lastValidatePromise !== p
      });
    });
    v.catch(function(b) {
      return b;
    });
    var C = s.filter(function(b) {
      return f.has(b.join(u));
    });
    return n.triggerOnFieldsChange(C), v;
  }), j(this, "submit", function() {
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
function Jg(e) {
  var t = d.useRef(), n = d.useState({}), r = G(n, 2), o = r[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new Xw(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var Sc = /* @__PURE__ */ d.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), Yw = function(t) {
  var n = t.validateMessages, r = t.onFormChange, o = t.onFormFinish, a = t.children, i = d.useContext(Sc), l = d.useRef({});
  return /* @__PURE__ */ d.createElement(Sc.Provider, {
    value: T(T({}, i), {}, {
      validateMessages: T(T({}, i.validateMessages), n),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(c, u) {
        r && r(c, {
          changedFields: u,
          forms: l.current
        }), i.triggerFormChange(c, u);
      },
      triggerFormFinish: function(c, u) {
        o && o(c, {
          values: u,
          forms: l.current
        }), i.triggerFormFinish(c, u);
      },
      registerForm: function(c, u) {
        c && (l.current = T(T({}, l.current), {}, j({}, c, u))), i.registerForm(c, u);
      },
      unregisterForm: function(c) {
        var u = T({}, l.current);
        delete u[c], l.current = u, i.unregisterForm(c);
      }
    })
  }, a);
}, Zw = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], Qw = function(t, n) {
  var r = t.name, o = t.initialValues, a = t.fields, i = t.form, l = t.preserve, s = t.children, c = t.component, u = c === void 0 ? "form" : c, f = t.validateMessages, m = t.validateTrigger, h = m === void 0 ? "onChange" : m, g = t.onValuesChange, p = t.onFieldsChange, v = t.onFinish, C = t.onFinishFailed, b = t.clearOnDestroy, x = De(t, Zw), $ = d.useRef(null), y = d.useContext(Sc), S = Jg(i), w = G(S, 1), E = w[0], O = E.getInternalHooks(Vr), P = O.useSubscribe, N = O.setInitialValues, R = O.setCallbacks, _ = O.setValidateMessages, I = O.setPreserve, k = O.destroyForm;
  d.useImperativeHandle(n, function() {
    return T(T({}, E), {}, {
      nativeElement: $.current
    });
  }), d.useEffect(function() {
    return y.registerForm(r, E), function() {
      y.unregisterForm(r);
    };
  }, [y, E, r]), _(T(T({}, y.validateMessages), f)), R({
    onValuesChange: g,
    onFieldsChange: function(z) {
      if (y.triggerFormChange(r, z), p) {
        for (var H = arguments.length, V = new Array(H > 1 ? H - 1 : 0), te = 1; te < H; te++)
          V[te - 1] = arguments[te];
        p.apply(void 0, [z].concat(V));
      }
    },
    onFinish: function(z) {
      y.triggerFormFinish(r, z), v && v(z);
    },
    onFinishFailed: C
  }), I(l);
  var A = d.useRef(null);
  N(o, !A.current), A.current || (A.current = !0), d.useEffect(
    function() {
      return function() {
        return k(b);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var D, F = typeof s == "function";
  if (F) {
    var q = E.getFieldsValue(!0);
    D = s(q, E);
  } else
    D = s;
  P(!F);
  var K = d.useRef();
  d.useEffect(function() {
    Vw(K.current || [], a || []) || E.setFields(a || []), K.current = a;
  }, [a, E]);
  var Q = d.useMemo(function() {
    return T(T({}, E), {}, {
      validateTrigger: h
    });
  }, [E, h]), W = /* @__PURE__ */ d.createElement(qi.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(ko.Provider, {
    value: Q
  }, D));
  return u === !1 ? W : /* @__PURE__ */ d.createElement(u, ve({}, x, {
    ref: $,
    onSubmit: function(z) {
      z.preventDefault(), z.stopPropagation(), E.submit();
    },
    onReset: function(z) {
      var H;
      z.preventDefault(), E.resetFields(), (H = x.onReset) === null || H === void 0 || H.call(x, z);
    }
  }), W);
};
function $f(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var Jw = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), n = fe(t);
  rt(n.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function e2() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  var r = t[0], o = t[1], a = o === void 0 ? {} : o, i = sw(a) ? {
    form: a
  } : a, l = i.form, s = Ht(), c = G(s, 2), u = c[0], f = c[1], m = Ot(function() {
    return $f(u);
  }, [u]), h = fe(m);
  h.current = m;
  var g = Ge(ko), p = l || g, v = p && p._init;
  process.env.NODE_ENV !== "production" && rt(t.length === 2 ? l ? v : !0 : v, "useWatch requires a form instance since it can not auto detect from context.");
  var C = It(r), b = fe(C);
  return b.current = C, Jw(C), yt(
    function() {
      if (v) {
        var x = p.getFieldsValue, $ = p.getInternalHooks, y = $(Vr), S = y.registerWatch, w = function(N, R) {
          var _ = i.preserve ? R : N;
          return typeof r == "function" ? r(_) : Yn(_, b.current);
        }, E = S(function(P, N) {
          var R = w(P, N), _ = $f(R);
          h.current !== _ && (h.current = _, f(R));
        }), O = w(x(), x(!0));
        return u !== O && f(O), E;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [v]
  ), u;
}
var t2 = /* @__PURE__ */ d.forwardRef(Qw), Ha = t2;
Ha.FormProvider = Yw;
Ha.Field = Zg;
Ha.List = qw;
Ha.useForm = Jg;
Ha.useWatch = e2;
const fr = /* @__PURE__ */ d.createContext({});
process.env.NODE_ENV !== "production" && (fr.displayName = "FormItemInputContext");
const n2 = ({
  children: e,
  status: t,
  override: n
}) => {
  const r = d.useContext(fr), o = d.useMemo(() => {
    const a = Object.assign({}, r);
    return n && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, n, r]);
  return /* @__PURE__ */ d.createElement(fr.Provider, {
    value: o
  }, e);
}, r2 = /* @__PURE__ */ d.createContext(void 0), Ca = (e) => {
  const {
    space: t,
    form: n,
    children: r
  } = e;
  if (r == null)
    return null;
  let o = r;
  return n && (o = /* @__PURE__ */ M.createElement(n2, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ M.createElement(mx, null, o)), o;
}, o2 = () => on() && window.document.documentElement, Ol = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    size: o,
    shape: a
  } = e, i = U({
    [`${t}-lg`]: o === "large",
    [`${t}-sm`]: o === "small"
  }), l = U({
    [`${t}-circle`]: a === "circle",
    [`${t}-square`]: a === "square",
    [`${t}-round`]: a === "round"
  }), s = d.useMemo(() => typeof o == "number" ? {
    width: o,
    height: o,
    lineHeight: `${o}px`
  } : {}, [o]);
  return /* @__PURE__ */ d.createElement("span", {
    className: U(t, i, l, n),
    style: Object.assign(Object.assign({}, s), r)
  });
}, a2 = new We("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Pl = (e) => ({
  height: e,
  lineHeight: ee(e)
}), Ro = (e) => Object.assign({
  width: e
}, Pl(e)), i2 = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: a2,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), vs = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Pl(e)), l2 = (e) => {
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
    }, Ro(r)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, Ro(o)),
    [`${t}${t}-sm`]: Object.assign({}, Ro(a))
  };
}, s2 = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: n,
    skeletonInputCls: r,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: l
  } = e;
  return {
    [r]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: n
    }, vs(t, l)),
    [`${r}-lg`]: Object.assign({}, vs(o, l)),
    [`${r}-sm`]: Object.assign({}, vs(a, l))
  };
}, Ef = (e) => Object.assign({
  width: e
}, Pl(e)), c2 = (e) => {
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
    }, Ef(a(n).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, Ef(n)), {
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
}, gs = (e, t, n) => {
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
}, ps = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Pl(e)), u2 = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: n,
    controlHeight: r,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: l
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [n]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: l(r).mul(2).equal(),
      minWidth: l(r).mul(2).equal()
    }, ps(r, l))
  }, gs(e, r, n)), {
    [`${n}-lg`]: Object.assign({}, ps(o, l))
  }), gs(e, o, `${n}-lg`)), {
    [`${n}-sm`]: Object.assign({}, ps(a, l))
  }), gs(e, a, `${n}-sm`));
}, d2 = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: n,
    skeletonTitleCls: r,
    skeletonParagraphCls: o,
    skeletonButtonCls: a,
    skeletonInputCls: i,
    skeletonImageCls: l,
    controlHeight: s,
    controlHeightLG: c,
    controlHeightSM: u,
    gradientFromColor: f,
    padding: m,
    marginSM: h,
    borderRadius: g,
    titleHeight: p,
    blockRadius: v,
    paragraphLiHeight: C,
    controlHeightXS: b,
    paragraphMarginTop: x
  } = e;
  return {
    [t]: {
      display: "table",
      width: "100%",
      [`${t}-header`]: {
        display: "table-cell",
        paddingInlineEnd: m,
        verticalAlign: "top",
        // Avatar
        [n]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: f
        }, Ro(s)),
        [`${n}-circle`]: {
          borderRadius: "50%"
        },
        [`${n}-lg`]: Object.assign({}, Ro(c)),
        [`${n}-sm`]: Object.assign({}, Ro(u))
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
          borderRadius: v,
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
            borderRadius: v,
            "+ li": {
              marginBlockStart: b
            }
          }
        },
        [`${o}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
          width: "61%"
        }
      },
      [`&-round ${t}-content`]: {
        [`${r}, ${o} > li`]: {
          borderRadius: g
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
    }, u2(e)), l2(e)), s2(e)), c2(e)),
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
        ${l}
      `]: Object.assign({}, i2(e))
    }
  };
}, f2 = (e) => {
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
}, Wo = Vt("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: n
  } = e, r = $t(e, {
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
  return d2(r);
}, f2, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), m2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    shape: a = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: l
  } = d.useContext(Be), s = l("skeleton", t), [c, u, f] = Wo(s), m = an(e, ["prefixCls", "className"]), h = U(s, `${s}-element`, {
    [`${s}-active`]: o
  }, n, r, u, f);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: h
  }, /* @__PURE__ */ d.createElement(Ol, Object.assign({
    prefixCls: `${s}-avatar`,
    shape: a,
    size: i
  }, m))));
}, v2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: l
  } = d.useContext(Be), s = l("skeleton", t), [c, u, f] = Wo(s), m = an(e, ["prefixCls"]), h = U(s, `${s}-element`, {
    [`${s}-active`]: o,
    [`${s}-block`]: a
  }, n, r, u, f);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: h
  }, /* @__PURE__ */ d.createElement(Ol, Object.assign({
    prefixCls: `${s}-button`,
    size: i
  }, m))));
}, g2 = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", p2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a
  } = e, {
    getPrefixCls: i
  } = d.useContext(Be), l = i("skeleton", t), [s, c, u] = Wo(l), f = U(l, `${l}-element`, {
    [`${l}-active`]: a
  }, n, r, c, u);
  return s(/* @__PURE__ */ d.createElement("div", {
    className: f
  }, /* @__PURE__ */ d.createElement("div", {
    className: U(`${l}-image`, n),
    style: o
  }, /* @__PURE__ */ d.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${l}-image-svg`
  }, /* @__PURE__ */ d.createElement("title", null, "Image placeholder"), /* @__PURE__ */ d.createElement("path", {
    d: g2,
    className: `${l}-image-path`
  })))));
}, h2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    active: o,
    block: a,
    size: i = "default"
  } = e, {
    getPrefixCls: l
  } = d.useContext(Be), s = l("skeleton", t), [c, u, f] = Wo(s), m = an(e, ["prefixCls"]), h = U(s, `${s}-element`, {
    [`${s}-active`]: o,
    [`${s}-block`]: a
  }, n, r, u, f);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: h
  }, /* @__PURE__ */ d.createElement(Ol, Object.assign({
    prefixCls: `${s}-input`,
    size: i
  }, m))));
}, b2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    style: o,
    active: a,
    children: i
  } = e, {
    getPrefixCls: l
  } = d.useContext(Be), s = l("skeleton", t), [c, u, f] = Wo(s), m = U(s, `${s}-element`, {
    [`${s}-active`]: a
  }, u, n, r, f);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: m
  }, /* @__PURE__ */ d.createElement("div", {
    className: U(`${s}-image`, n),
    style: o
  }, i)));
}, y2 = (e, t) => {
  const {
    width: n,
    rows: r = 2
  } = t;
  if (Array.isArray(n))
    return n[e];
  if (r - 1 === e)
    return n;
}, C2 = (e) => {
  const {
    prefixCls: t,
    className: n,
    style: r,
    rows: o = 0
  } = e, a = Array.from({
    length: o
  }).map((i, l) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ d.createElement("li", {
      key: l,
      style: {
        width: y2(l, e)
      }
    })
  ));
  return /* @__PURE__ */ d.createElement("ul", {
    className: U(t, n),
    style: r
  }, a);
}, x2 = ({
  prefixCls: e,
  className: t,
  width: n,
  style: r
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ d.createElement("h3", {
    className: U(e, t),
    style: Object.assign({
      width: n
    }, r)
  })
);
function hs(e) {
  return e && typeof e == "object" ? e : {};
}
function S2(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function w2(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function $2(e, t) {
  const n = {};
  return (!e || !t) && (n.width = "61%"), !e && t ? n.rows = 3 : n.rows = 2, n;
}
const no = (e) => {
  const {
    prefixCls: t,
    loading: n,
    className: r,
    rootClassName: o,
    style: a,
    children: i,
    avatar: l = !1,
    title: s = !0,
    paragraph: c = !0,
    active: u,
    round: f
  } = e, {
    getPrefixCls: m,
    direction: h,
    className: g,
    style: p
  } = zo("skeleton"), v = m("skeleton", t), [C, b, x] = Wo(v);
  if (n || !("loading" in e)) {
    const $ = !!l, y = !!s, S = !!c;
    let w;
    if ($) {
      const P = Object.assign(Object.assign({
        prefixCls: `${v}-avatar`
      }, S2(y, S)), hs(l));
      w = /* @__PURE__ */ d.createElement("div", {
        className: `${v}-header`
      }, /* @__PURE__ */ d.createElement(Ol, Object.assign({}, P)));
    }
    let E;
    if (y || S) {
      let P;
      if (y) {
        const R = Object.assign(Object.assign({
          prefixCls: `${v}-title`
        }, w2($, S)), hs(s));
        P = /* @__PURE__ */ d.createElement(x2, Object.assign({}, R));
      }
      let N;
      if (S) {
        const R = Object.assign(Object.assign({
          prefixCls: `${v}-paragraph`
        }, $2($, y)), hs(c));
        N = /* @__PURE__ */ d.createElement(C2, Object.assign({}, R));
      }
      E = /* @__PURE__ */ d.createElement("div", {
        className: `${v}-content`
      }, P, N);
    }
    const O = U(v, {
      [`${v}-with-avatar`]: $,
      [`${v}-active`]: u,
      [`${v}-rtl`]: h === "rtl",
      [`${v}-round`]: f
    }, g, r, o, b, x);
    return C(/* @__PURE__ */ d.createElement("div", {
      className: O,
      style: Object.assign(Object.assign({}, p), a)
    }, w, E));
  }
  return i ?? null;
};
no.Button = v2;
no.Avatar = m2;
no.Input = h2;
no.Image = p2;
no.Node = b2;
process.env.NODE_ENV !== "production" && (no.displayName = "Skeleton");
function Of() {
}
const E2 = /* @__PURE__ */ d.createContext({
  add: Of,
  remove: Of
});
function O2(e) {
  const t = d.useContext(E2), n = d.useRef(null);
  return bt((o) => {
    if (o) {
      const a = e ? o.querySelector(e) : o;
      a && (t.add(a), n.current = a);
    } else
      t.remove(n.current);
  });
}
const Pf = () => {
  const {
    cancelButtonProps: e,
    cancelTextLocale: t,
    onCancel: n
  } = Ge(La);
  return /* @__PURE__ */ M.createElement(dr, Object.assign({
    onClick: n
  }, e), t);
}, Nf = () => {
  const {
    confirmLoading: e,
    okButtonProps: t,
    okType: n,
    okTextLocale: r,
    onOk: o
  } = Ge(La);
  return /* @__PURE__ */ M.createElement(dr, Object.assign({}, Og(n), {
    loading: e,
    onClick: o
  }, t), r);
};
function ep(e, t) {
  return /* @__PURE__ */ M.createElement("span", {
    className: `${e}-close-x`
  }, t || /* @__PURE__ */ M.createElement(eo, {
    className: `${e}-close-icon`
  }));
}
const tp = (e) => {
  const {
    okText: t,
    okType: n = "primary",
    cancelText: r,
    confirmLoading: o,
    onOk: a,
    onCancel: i,
    okButtonProps: l,
    cancelButtonProps: s,
    footer: c
  } = e, [u] = il("Modal", Pv()), f = t || u?.okText, m = r || u?.cancelText, h = M.useMemo(() => ({
    confirmLoading: o,
    okButtonProps: l,
    cancelButtonProps: s,
    okTextLocale: f,
    cancelTextLocale: m,
    okType: n,
    onOk: a,
    onCancel: i
  }), [o, l, s, f, m, n, a, i]);
  let g;
  return typeof c == "function" || typeof c > "u" ? (g = /* @__PURE__ */ M.createElement(M.Fragment, null, /* @__PURE__ */ M.createElement(Pf, null), /* @__PURE__ */ M.createElement(Nf, null)), typeof c == "function" && (g = c(g, {
    OkBtn: Nf,
    CancelBtn: Pf
  })), g = /* @__PURE__ */ M.createElement(Hg, {
    value: h
  }, g)) : g = c, /* @__PURE__ */ M.createElement(jv, {
    disabled: !1
  }, g);
}, P2 = (e) => {
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
}, N2 = (e) => {
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
}, R2 = (e, t) => {
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
}, wc = (e, t) => R2(e, t), I2 = (e, t, n) => ({
  [`@media (min-width: ${ee(t)})`]: Object.assign({}, wc(e, n))
}), M2 = () => ({}), T2 = () => ({});
Vt("Grid", P2, M2);
const np = (e) => ({
  xs: e.screenXSMin,
  sm: e.screenSMMin,
  md: e.screenMDMin,
  lg: e.screenLGMin,
  xl: e.screenXLMin,
  xxl: e.screenXXLMin
});
Vt("Grid", (e) => {
  const t = $t(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), n = np(t);
  return delete n.xs, [N2(t), wc(t, ""), wc(t, "-xs"), Object.keys(n).map((r) => I2(t, n[r], `-${r}`)).reduce((r, o) => Object.assign(Object.assign({}, r), o), {})];
}, T2);
function Rf(e) {
  return {
    position: e,
    inset: 0
  };
}
const _2 = (e) => {
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
      [`${t}-mask`]: Object.assign(Object.assign({}, Rf("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, Rf("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: Gx(e)
  }];
}, A2 = (e) => {
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
            margin: `${ee(e.marginXS)} auto`
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
      [t]: Object.assign(Object.assign({}, pr(e)), {
        pointerEvents: "none",
        position: "relative",
        top: 100,
        width: "auto",
        maxWidth: `calc(100vw - ${ee(e.calc(e.margin).mul(2).equal())})`,
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
            lineHeight: ee(e.modalCloseBtnSize),
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
        }, ba(e)),
        [`${t}-header`]: {
          color: e.colorText,
          background: e.headerBg,
          borderRadius: `${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)} 0 0`,
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
            margin: `${ee(e.margin)} auto`
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
}, j2 = (e) => {
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
}, F2 = (e) => {
  const {
    componentCls: t
  } = e, n = np(e), r = Object.assign({}, n);
  delete r.xs;
  const o = `--${t.replace(".", "")}-`, a = Object.keys(r).map((i) => ({
    [`@media (min-width: ${ee(r[i])})`]: {
      width: `var(${o}${i}-width)`
    }
  }));
  return {
    [`${t}-root`]: {
      [t]: [].concat(de(Object.keys(n).map((i, l) => {
        const s = Object.keys(n)[l - 1];
        return s ? {
          [`${o}${i}-width`]: `var(${o}${s}-width)`
        } : null;
      })), [{
        width: `var(${o}xs-width)`
      }], de(a))
    }
  };
}, rp = (e) => {
  const t = e.padding, n = e.fontSizeHeading5, r = e.lineHeightHeading5;
  return $t(e, {
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
}, op = (e) => ({
  footerBg: "transparent",
  headerBg: e.colorBgElevated,
  titleLineHeight: e.lineHeightHeading5,
  titleFontSize: e.fontSizeHeading5,
  contentBg: e.colorBgElevated,
  titleColor: e.colorTextHeading,
  // internal
  contentPadding: e.wireframe ? 0 : `${ee(e.paddingMD)} ${ee(e.paddingContentHorizontalLG)}`,
  headerPadding: e.wireframe ? `${ee(e.padding)} ${ee(e.paddingLG)}` : 0,
  headerBorderBottom: e.wireframe ? `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  headerMarginBottom: e.wireframe ? 0 : e.marginXS,
  bodyPadding: e.wireframe ? e.paddingLG : 0,
  footerPadding: e.wireframe ? `${ee(e.paddingXS)} ${ee(e.padding)}` : 0,
  footerBorderTop: e.wireframe ? `${ee(e.lineWidth)} ${e.lineType} ${e.colorSplit}` : "none",
  footerBorderRadius: e.wireframe ? `0 0 ${ee(e.borderRadiusLG)} ${ee(e.borderRadiusLG)}` : 0,
  footerMarginTop: e.wireframe ? 0 : e.marginSM,
  confirmBodyPadding: e.wireframe ? `${ee(e.padding * 2)} ${ee(e.padding * 2)} ${ee(e.paddingLG)}` : 0,
  confirmIconMarginInlineEnd: e.wireframe ? e.margin : e.marginSM,
  confirmBtnsMarginTop: e.wireframe ? e.marginLG : e.marginSM
}), ap = Vt("Modal", (e) => {
  const t = rp(e);
  return [A2(t), j2(t), _2(t), bl(t, "zoom"), F2(t)];
}, op, {
  unitless: {
    titleLineHeight: !0
  }
});
var B2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
let $c;
const k2 = (e) => {
  $c = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    $c = null;
  }, 100);
};
o2() && document.documentElement.addEventListener("click", k2, !0);
const ip = (e) => {
  const {
    prefixCls: t,
    className: n,
    rootClassName: r,
    open: o,
    wrapClassName: a,
    centered: i,
    getContainer: l,
    focusTriggerAfterClose: s = !0,
    style: c,
    // Deprecated
    visible: u,
    width: f = 520,
    footer: m,
    classNames: h,
    styles: g,
    children: p,
    loading: v,
    confirmLoading: C,
    zIndex: b,
    mousePosition: x,
    onOk: $,
    onCancel: y,
    destroyOnHidden: S,
    destroyOnClose: w,
    panelRef: E = null,
    modalRender: O
  } = e, P = B2(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose", "panelRef", "modalRender"]), {
    getPopupContainer: N,
    getPrefixCls: R,
    direction: _,
    modal: I
  } = d.useContext(Be), k = (ie) => {
    C || y?.(ie);
  }, A = (ie) => {
    $?.(ie);
  };
  if (process.env.NODE_ENV !== "production") {
    const ie = Rt("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"], ["destroyOnClose", "destroyOnHidden"]].forEach(([ce, we]) => {
      ie.deprecated(!(ce in e), ce, we);
    });
  }
  const D = R("modal", t), F = R(), q = er(D), [K, Q, W] = ap(D, q), L = U(a, {
    [`${D}-centered`]: i ?? I?.centered,
    [`${D}-wrap-rtl`]: _ === "rtl"
  }), z = m !== null && !v ? /* @__PURE__ */ d.createElement(tp, Object.assign({}, e, {
    onOk: A,
    onCancel: k
  })) : null, [H, V, te, Y] = gg(zi(e), zi(I), {
    closable: !0,
    closeIcon: /* @__PURE__ */ d.createElement(eo, {
      className: `${D}-close-icon`
    }),
    closeIconRender: (ie) => ep(D, ie)
  }), J = O ? (ie) => /* @__PURE__ */ d.createElement("div", {
    className: `${D}-render`
  }, O(ie)) : void 0, ae = `.${D}-${O ? "render" : "content"}`, le = O2(ae), X = Jn(E, le), [se, Z] = ml("Modal", b), [oe, ne] = d.useMemo(() => f && typeof f == "object" ? [void 0, f] : [f, void 0], [f]), me = d.useMemo(() => {
    const ie = {};
    return ne && Object.keys(ne).forEach((ce) => {
      const we = ne[ce];
      we !== void 0 && (ie[`--${D}-${ce}-width`] = typeof we == "number" ? `${we}px` : we);
    }), ie;
  }, [D, ne]);
  return K(/* @__PURE__ */ d.createElement(Ca, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ d.createElement(Ba.Provider, {
    value: Z
  }, /* @__PURE__ */ d.createElement(qg, Object.assign({
    width: oe
  }, P, {
    zIndex: se,
    getContainer: l === void 0 ? N : l,
    prefixCls: D,
    rootClassName: U(Q, r, W, q),
    footer: z,
    visible: o ?? u,
    mousePosition: x ?? $c,
    onClose: k,
    closable: H && Object.assign({
      disabled: te,
      closeIcon: V
    }, Y),
    closeIcon: V,
    focusTriggerAfterClose: s,
    transitionName: ya(F, "zoom", e.transitionName),
    maskTransitionName: ya(F, "fade", e.maskTransitionName),
    className: U(Q, n, I?.className),
    style: Object.assign(Object.assign(Object.assign({}, I?.style), c), me),
    classNames: Object.assign(Object.assign(Object.assign({}, I?.classNames), h), {
      wrapper: U(L, h?.wrapper)
    }),
    styles: Object.assign(Object.assign({}, I?.styles), g),
    panelRef: X,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: S ?? w,
    modalRender: J
  }), v ? /* @__PURE__ */ d.createElement(no, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 4
    },
    className: `${D}-body-skeleton`
  }) : p))));
}, D2 = (e) => {
  const {
    componentCls: t,
    titleFontSize: n,
    titleLineHeight: r,
    modalConfirmIconSize: o,
    fontSize: a,
    lineHeight: i,
    modalTitleHeight: l,
    fontHeight: s,
    confirmBodyPadding: c
  } = e, u = `${t}-confirm`;
  return {
    [u]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${u}-body-wrapper`]: Object.assign({}, ki()),
      [`&${t} ${t}-body`]: {
        padding: c
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
          marginTop: e.calc(e.calc(s).sub(o).equal()).div(2).equal()
        },
        [`&-has-title > ${e.iconCls}`]: {
          marginTop: e.calc(e.calc(l).sub(o).equal()).div(2).equal()
        }
      },
      [`${u}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: e.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${ee(e.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${e.iconCls} + ${u}-paragraph`]: {
        maxWidth: `calc(100% - ${ee(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`
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
}, L2 = _a(["Modal", "confirm"], (e) => {
  const t = rp(e);
  return D2(t);
}, op, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var z2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const lp = (e) => {
  const {
    prefixCls: t,
    icon: n,
    okText: r,
    cancelText: o,
    confirmPrefixCls: a,
    type: i,
    okCancel: l,
    footer: s,
    // Legacy for static function usage
    locale: c
  } = e, u = z2(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const S = Rt("Modal");
    process.env.NODE_ENV !== "production" && S(!(typeof n == "string" && n.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${n}\` at https://ant.design/components/icon`);
  }
  let f = n;
  if (!n && n !== null)
    switch (i) {
      case "info":
        f = /* @__PURE__ */ d.createElement(dl, null);
        break;
      case "success":
        f = /* @__PURE__ */ d.createElement(cl, null);
        break;
      case "error":
        f = /* @__PURE__ */ d.createElement(ja, null);
        break;
      default:
        f = /* @__PURE__ */ d.createElement(ul, null);
    }
  const m = l ?? i === "confirm", h = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", [g] = il("Modal"), p = c || g, v = r || (m ? p?.okText : p?.justOkText), C = o || p?.cancelText, b = d.useMemo(() => Object.assign({
    autoFocusButton: h,
    cancelTextLocale: C,
    okTextLocale: v,
    mergedOkCancel: m
  }, u), [h, C, v, m, u]), x = /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(af, null), /* @__PURE__ */ d.createElement(lf, null)), $ = e.title !== void 0 && e.title !== null, y = `${a}-body`;
  return /* @__PURE__ */ d.createElement("div", {
    className: `${a}-body-wrapper`
  }, /* @__PURE__ */ d.createElement("div", {
    className: U(y, {
      [`${y}-has-title`]: $
    })
  }, f, /* @__PURE__ */ d.createElement("div", {
    className: `${a}-paragraph`
  }, $ && /* @__PURE__ */ d.createElement("span", {
    className: `${a}-title`
  }, e.title), /* @__PURE__ */ d.createElement("div", {
    className: `${a}-content`
  }, e.content))), s === void 0 || typeof s == "function" ? /* @__PURE__ */ d.createElement(Hg, {
    value: b
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${a}-btns`
  }, typeof s == "function" ? s(x, {
    OkBtn: lf,
    CancelBtn: af
  }) : x)) : s, /* @__PURE__ */ d.createElement(L2, {
    prefixCls: t
  }));
}, sp = (e) => {
  const {
    close: t,
    zIndex: n,
    maskStyle: r,
    direction: o,
    prefixCls: a,
    wrapClassName: i,
    rootPrefixCls: l,
    bodyStyle: s,
    closable: c = !1,
    onConfirm: u,
    styles: f,
    title: m
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const y = Rt("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach(([S, w]) => {
      y.deprecated(!(S in e), S, w);
    });
  }
  const h = `${a}-confirm`, g = e.width || 416, p = e.style || {}, v = e.mask === void 0 ? !0 : e.mask, C = e.maskClosable === void 0 ? !1 : e.maskClosable, b = U(h, `${h}-${e.type}`, {
    [`${h}-rtl`]: o === "rtl"
  }, e.className), [, x] = jn(), $ = d.useMemo(() => n !== void 0 ? n : x.zIndexPopupBase + fl, [n, x]);
  return /* @__PURE__ */ d.createElement(ip, Object.assign({}, e, {
    className: b,
    wrapClassName: U({
      [`${h}-centered`]: !!e.centered
    }, i),
    onCancel: () => {
      t?.({
        triggerCancel: !0
      }), u?.(!1);
    },
    title: m,
    footer: null,
    transitionName: ya(l || "", "zoom", e.transitionName),
    maskTransitionName: ya(l || "", "fade", e.maskTransitionName),
    mask: v,
    maskClosable: C,
    style: p,
    styles: Object.assign({
      body: s,
      mask: r
    }, f),
    width: g,
    zIndex: $,
    closable: c
  }), /* @__PURE__ */ d.createElement(lp, Object.assign({}, e, {
    confirmPrefixCls: h
  })));
}, gu = (e) => {
  const {
    rootPrefixCls: t,
    iconPrefixCls: n,
    direction: r,
    theme: o
  } = e;
  return /* @__PURE__ */ d.createElement(dn, {
    prefixCls: t,
    iconPrefixCls: n,
    direction: r,
    theme: o
  }, /* @__PURE__ */ d.createElement(sp, Object.assign({}, e)));
};
process.env.NODE_ENV !== "production" && (sp.displayName = "ConfirmDialog", gu.displayName = "ConfirmDialogWrapper");
const Wr = [];
let cp = "";
function up() {
  return cp;
}
const H2 = (e) => {
  var t, n;
  const {
    prefixCls: r,
    getContainer: o,
    direction: a
  } = e, i = Pv(), l = Ge(Be), s = up() || l.getPrefixCls(), c = r || `${s}-modal`;
  let u = o;
  return u === !1 && (u = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && Ar(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ M.createElement(gu, Object.assign({}, e, {
    rootPrefixCls: s,
    prefixCls: c,
    iconPrefixCls: l.iconPrefixCls,
    theme: l.theme,
    direction: a ?? l.direction,
    locale: (n = (t = l.locale) === null || t === void 0 ? void 0 : t.Modal) !== null && n !== void 0 ? n : i,
    getContainer: u
  }));
};
function Va(e) {
  const t = Aa();
  process.env.NODE_ENV !== "production" && !t.holderRender && ou("Modal");
  const n = document.createDocumentFragment();
  let r = Object.assign(Object.assign({}, e), {
    close: s,
    open: !0
  }), o, a;
  function i(...u) {
    var f;
    if (u.some((g) => g?.triggerCancel)) {
      var h;
      (f = e.onCancel) === null || f === void 0 || (h = f).call.apply(h, [e, () => {
      }].concat(de(u.slice(1))));
    }
    for (let g = 0; g < Wr.length; g++)
      if (Wr[g] === s) {
        Wr.splice(g, 1);
        break;
      }
    a();
  }
  const l = (u) => {
    clearTimeout(o), o = setTimeout(() => {
      const f = t.getPrefixCls(void 0, up()), m = t.getIconPrefixCls(), h = t.getTheme(), g = /* @__PURE__ */ M.createElement(H2, Object.assign({}, u));
      a = gl()(/* @__PURE__ */ M.createElement(dn, {
        prefixCls: f,
        iconPrefixCls: m,
        theme: h
      }, typeof t.holderRender == "function" ? t.holderRender(g) : g), n);
    });
  };
  function s(...u) {
    r = Object.assign(Object.assign({}, r), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), i.apply(this, u);
      }
    }), r.visible && delete r.visible, l(r);
  }
  function c(u) {
    typeof u == "function" ? r = u(r) : r = Object.assign(Object.assign({}, r), u), l(r);
  }
  return l(r), Wr.push(s), {
    destroy: s,
    update: c
  };
}
function dp(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  });
}
function fp(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  });
}
function mp(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  });
}
function vp(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  });
}
function gp(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  });
}
function V2({
  rootPrefixCls: e
}) {
  process.env.NODE_ENV !== "production" && Ar(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), cp = e;
}
var W2 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const G2 = (e, t) => {
  var n, {
    afterClose: r,
    config: o
  } = e, a = W2(e, ["afterClose", "config"]);
  const [i, l] = d.useState(!0), [s, c] = d.useState(o), {
    direction: u,
    getPrefixCls: f
  } = d.useContext(Be), m = f("modal"), h = f(), g = () => {
    var b;
    r(), (b = s.afterClose) === null || b === void 0 || b.call(s);
  }, p = (...b) => {
    var x;
    if (l(!1), b.some((S) => S?.triggerCancel)) {
      var y;
      (x = s.onCancel) === null || x === void 0 || (y = x).call.apply(y, [s, () => {
      }].concat(de(b.slice(1))));
    }
  };
  d.useImperativeHandle(t, () => ({
    destroy: p,
    update: (b) => {
      c((x) => {
        const $ = typeof b == "function" ? b(x) : b;
        return Object.assign(Object.assign({}, x), $);
      });
    }
  }));
  const v = (n = s.okCancel) !== null && n !== void 0 ? n : s.type === "confirm", [C] = il("Modal", Tr.Modal);
  return /* @__PURE__ */ d.createElement(gu, Object.assign({
    prefixCls: m,
    rootPrefixCls: h
  }, s, {
    close: p,
    open: i,
    afterClose: g,
    okText: s.okText || (v ? C?.okText : C?.justOkText),
    direction: s.direction || u,
    cancelText: s.cancelText || C?.cancelText
  }, a));
}, q2 = /* @__PURE__ */ d.forwardRef(G2);
let If = 0;
const U2 = /* @__PURE__ */ d.memo(/* @__PURE__ */ d.forwardRef((e, t) => {
  const [n, r] = $C();
  return d.useImperativeHandle(t, () => ({
    patchElement: r
  }), [r]), /* @__PURE__ */ d.createElement(d.Fragment, null, n);
}));
function K2() {
  const e = d.useRef(null), [t, n] = d.useState([]);
  d.useEffect(() => {
    t.length && (de(t).forEach((i) => {
      i();
    }), n([]));
  }, [t]);
  const r = d.useCallback((a) => function(l) {
    var s;
    If += 1;
    const c = /* @__PURE__ */ d.createRef();
    let u;
    const f = new Promise((v) => {
      u = v;
    });
    let m = !1, h;
    const g = /* @__PURE__ */ d.createElement(q2, {
      key: `modal-${If}`,
      config: a(l),
      ref: c,
      afterClose: () => {
        h?.();
      },
      isSilent: () => m,
      onConfirm: (v) => {
        u(v);
      }
    });
    return h = (s = e.current) === null || s === void 0 ? void 0 : s.patchElement(g), h && Wr.push(h), {
      destroy: () => {
        function v() {
          var C;
          (C = c.current) === null || C === void 0 || C.destroy();
        }
        c.current ? v() : n((C) => [].concat(de(C), [v]));
      },
      update: (v) => {
        function C() {
          var b;
          (b = c.current) === null || b === void 0 || b.update(v);
        }
        c.current ? C() : n((b) => [].concat(de(b), [C]));
      },
      then: (v) => (m = !0, f.then(v))
    };
  }, []);
  return [d.useMemo(() => ({
    info: r(fp),
    success: r(mp),
    error: r(vp),
    warning: r(dp),
    confirm: r(gp)
  }), [r]), /* @__PURE__ */ d.createElement(U2, {
    key: "modal-holder",
    ref: e
  })];
}
const X2 = (e) => {
  const {
    componentCls: t,
    notificationMarginEdge: n,
    animationMaxHeight: r
  } = e, o = `${t}-notice`, a = new We("antNotificationFadeIn", {
    "0%": {
      transform: "translate3d(100%, 0, 0)",
      opacity: 0
    },
    "100%": {
      transform: "translate3d(0, 0, 0)",
      opacity: 1
    }
  }), i = new We("antNotificationTopFadeIn", {
    "0%": {
      top: -r,
      opacity: 0
    },
    "100%": {
      top: 0,
      opacity: 1
    }
  }), l = new We("antNotificationBottomFadeIn", {
    "0%": {
      bottom: e.calc(r).mul(-1).equal(),
      opacity: 0
    },
    "100%": {
      bottom: 0,
      opacity: 1
    }
  }), s = new We("antNotificationLeftFadeIn", {
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
          animationName: l
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
          animationName: s
        }
      }
    }
  };
}, Y2 = ["top", "topLeft", "topRight", "bottom", "bottomLeft", "bottomRight"], Z2 = {
  topLeft: "left",
  topRight: "right",
  bottomLeft: "left",
  bottomRight: "right",
  top: "left",
  bottom: "left"
}, Q2 = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    [`${n}-${t}`]: {
      [`&${n}-stack > ${n}-notice-wrapper`]: {
        [t.startsWith("top") ? "top" : "bottom"]: 0,
        [Z2[t]]: {
          value: 0,
          _skip_check_: !0
        }
      }
    }
  };
}, J2 = (e) => {
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
}, e$ = (e) => {
  const t = {};
  for (let n = 1; n < e.notificationStackLayer; n++)
    t[`&:nth-last-child(${n + 1})`] = {
      background: e.colorBgBlur,
      backdropFilter: "blur(10px)",
      "-webkit-backdrop-filter": "blur(10px)"
    };
  return Object.assign({}, t);
}, t$ = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-stack`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({
        transition: `transform ${e.motionDurationSlow}, backdrop-filter 0s`,
        willChange: "transform, opacity",
        position: "absolute"
      }, J2(e))
    },
    [`${t}-stack:not(${t}-stack-expanded)`]: {
      [`& > ${t}-notice-wrapper`]: Object.assign({}, e$(e))
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
  }, Y2.map((n) => Q2(e, n)).reduce((n, r) => Object.assign(Object.assign({}, n), r), {}));
}, pp = (e) => {
  const {
    iconCls: t,
    componentCls: n,
    // .ant-notification
    boxShadow: r,
    fontSizeLG: o,
    notificationMarginBottom: a,
    borderRadiusLG: i,
    colorSuccess: l,
    colorInfo: s,
    colorWarning: c,
    colorError: u,
    colorTextHeading: f,
    notificationBg: m,
    notificationPadding: h,
    notificationMarginEdge: g,
    notificationProgressBg: p,
    notificationProgressHeight: v,
    fontSize: C,
    lineHeight: b,
    width: x,
    notificationIconSize: $,
    colorText: y,
    colorSuccessBg: S,
    colorErrorBg: w,
    colorInfoBg: E,
    colorWarningBg: O
  } = e, P = `${n}-notice`;
  return {
    position: "relative",
    marginBottom: a,
    marginInlineStart: "auto",
    background: m,
    borderRadius: i,
    boxShadow: r,
    [P]: {
      padding: h,
      width: x,
      maxWidth: `calc(100vw - ${ee(e.calc(g).mul(2).equal())})`,
      lineHeight: b,
      wordWrap: "break-word",
      borderRadius: i,
      overflow: "hidden",
      // Type-specific background colors
      "&-success": {
        background: S
      },
      "&-error": {
        background: w
      },
      "&-info": {
        background: E
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
      color: y,
      marginTop: e.marginXS
    },
    [`${P}-closable ${P}-message`]: {
      paddingInlineEnd: e.paddingLG
    },
    [`${P}-with-icon ${P}-message`]: {
      marginInlineStart: e.calc(e.marginSM).add($).equal(),
      fontSize: o
    },
    [`${P}-with-icon ${P}-description`]: {
      marginInlineStart: e.calc(e.marginSM).add($).equal(),
      fontSize: C
    },
    // Icon & color style in different selector level
    // https://github.com/ant-design/ant-design/issues/16503
    // https://github.com/ant-design/ant-design/issues/15512
    [`${P}-icon`]: {
      position: "absolute",
      fontSize: $,
      lineHeight: 1,
      // icon-font
      [`&-success${t}`]: {
        color: l
      },
      [`&-info${t}`]: {
        color: s
      },
      [`&-warning${t}`]: {
        color: c
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
    }, ba(e)),
    [`${P}-progress`]: {
      position: "absolute",
      display: "block",
      appearance: "none",
      inlineSize: `calc(100% - ${ee(i)} * 2)`,
      left: {
        _skip_check_: !0,
        value: i
      },
      right: {
        _skip_check_: !0,
        value: i
      },
      bottom: 0,
      blockSize: v,
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
}, n$ = (e) => {
  const {
    componentCls: t,
    // .ant-notification
    notificationMarginBottom: n,
    notificationMarginEdge: r,
    motionDurationMid: o,
    motionEaseInOut: a
  } = e, i = `${t}-notice`, l = new We("antNotificationFadeOut", {
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
      [t]: Object.assign(Object.assign({}, pr(e)), {
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
          animationName: l,
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
        [`${i}-wrapper`]: pp(e)
      }
    }
  ];
}, hp = (e) => ({
  zIndexPopup: e.zIndexPopupBase + fl + 50,
  width: 384,
  colorSuccessBg: e.colorSuccessBg,
  colorErrorBg: e.colorErrorBg,
  colorInfoBg: e.colorInfoBg,
  colorWarningBg: e.colorWarningBg
}), bp = (e) => {
  const t = e.paddingMD, n = e.paddingLG;
  return $t(e, {
    notificationBg: e.colorBgElevated,
    notificationPaddingVertical: t,
    notificationPaddingHorizontal: n,
    notificationIconSize: e.calc(e.fontSizeLG).mul(e.lineHeightLG).equal(),
    notificationCloseButtonSize: e.calc(e.controlHeightLG).mul(0.55).equal(),
    notificationMarginBottom: e.margin,
    notificationPadding: `${ee(e.paddingMD)} ${ee(e.paddingContentHorizontalLG)}`,
    notificationMarginEdge: e.marginLG,
    animationMaxHeight: 150,
    notificationStackLayer: 3,
    notificationProgressHeight: 2,
    notificationProgressBg: `linear-gradient(90deg, ${e.colorPrimaryBorderHover}, ${e.colorPrimary})`
  });
}, yp = Vt("Notification", (e) => {
  const t = bp(e);
  return [n$(t), X2(t), t$(t)];
}, hp), r$ = _a(["Notification", "PurePanel"], (e) => {
  const t = `${e.componentCls}-notice`, n = bp(e);
  return {
    [`${t}-pure-panel`]: Object.assign(Object.assign({}, pp(n)), {
      width: n.width,
      maxWidth: `calc(100vw - ${ee(e.calc(n.notificationMarginEdge).mul(2).equal())})`,
      margin: 0
    })
  };
}, hp);
var o$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function pu(e, t) {
  return t === null || t === !1 ? null : t || /* @__PURE__ */ d.createElement(eo, {
    className: `${e}-close-icon`
  });
}
const a$ = {
  success: cl,
  info: dl,
  error: ja,
  warning: ul
}, Cp = (e) => {
  const {
    prefixCls: t,
    icon: n,
    type: r,
    message: o,
    description: a,
    actions: i,
    role: l = "alert"
  } = e;
  let s = null;
  return n ? s = /* @__PURE__ */ d.createElement("span", {
    className: `${t}-icon`
  }, n) : r && (s = /* @__PURE__ */ d.createElement(a$[r] || null, {
    className: U(`${t}-icon`, `${t}-icon-${r}`)
  })), /* @__PURE__ */ d.createElement("div", {
    className: U({
      [`${t}-with-icon`]: s
    }),
    role: l
  }, s, /* @__PURE__ */ d.createElement("div", {
    className: `${t}-message`
  }, o), a && /* @__PURE__ */ d.createElement("div", {
    className: `${t}-description`
  }, a), i && /* @__PURE__ */ d.createElement("div", {
    className: `${t}-actions`
  }, i));
}, i$ = (e) => {
  const {
    prefixCls: t,
    className: n,
    icon: r,
    type: o,
    message: a,
    description: i,
    btn: l,
    actions: s,
    closable: c = !0,
    closeIcon: u,
    className: f
  } = e, m = o$(e, ["prefixCls", "className", "icon", "type", "message", "description", "btn", "actions", "closable", "closeIcon", "className"]), {
    getPrefixCls: h
  } = d.useContext(Be), g = s ?? l;
  process.env.NODE_ENV !== "production" && Rt("Notification").deprecated(!l, "btn", "actions");
  const p = t || h("notification"), v = `${p}-notice`, C = er(p), [b, x, $] = yp(p, C);
  return b(/* @__PURE__ */ d.createElement("div", {
    className: U(`${v}-pure-panel`, x, n, $, C)
  }, /* @__PURE__ */ d.createElement(r$, {
    prefixCls: p
  }), /* @__PURE__ */ d.createElement(au, Object.assign({}, m, {
    prefixCls: p,
    eventKey: "pure",
    duration: null,
    closable: c,
    className: U({
      notificationClassName: f
    }),
    closeIcon: pu(p, u),
    content: /* @__PURE__ */ d.createElement(Cp, {
      prefixCls: v,
      icon: r,
      type: o,
      message: a,
      description: i,
      actions: g
    })
  }))));
};
function l$(e, t, n) {
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
function s$(e) {
  return {
    motionName: `${e}-fade`
  };
}
function c$(e, t, n) {
  return typeof e < "u" ? e : typeof t?.closeIcon < "u" ? t.closeIcon : n?.closeIcon;
}
var u$ = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Mf = 24, d$ = 4.5, f$ = "topRight", m$ = ({
  children: e,
  prefixCls: t
}) => {
  const n = er(t), [r, o, a] = yp(t, n);
  return r(/* @__PURE__ */ M.createElement(dg, {
    classNames: {
      list: U(o, a, n)
    }
  }, e));
}, v$ = (e, {
  prefixCls: t,
  key: n
}) => /* @__PURE__ */ M.createElement(m$, {
  prefixCls: t,
  key: n
}, e), g$ = /* @__PURE__ */ M.forwardRef((e, t) => {
  const {
    top: n,
    bottom: r,
    prefixCls: o,
    getContainer: a,
    maxCount: i,
    rtl: l,
    onAllRemoved: s,
    stack: c,
    duration: u,
    pauseOnHover: f = !0,
    showProgress: m
  } = e, {
    getPrefixCls: h,
    getPopupContainer: g,
    notification: p,
    direction: v
  } = Ge(Be), [, C] = jn(), b = o || h("notification"), x = (E) => l$(E, n ?? Mf, r ?? Mf), $ = () => U({
    [`${b}-rtl`]: l ?? v === "rtl"
  }), y = () => s$(b), [S, w] = vg({
    prefixCls: b,
    style: x,
    className: $,
    motion: y,
    closable: !0,
    closeIcon: pu(b),
    duration: u ?? d$,
    getContainer: () => a?.() || g?.() || document.body,
    maxCount: i,
    pauseOnHover: f,
    showProgress: m,
    onAllRemoved: s,
    renderNotifications: v$,
    stack: c === !1 ? !1 : {
      threshold: typeof c == "object" ? c?.threshold : void 0,
      offset: 8,
      gap: C.margin
    }
  });
  return M.useImperativeHandle(t, () => Object.assign(Object.assign({}, S), {
    prefixCls: b,
    notification: p
  })), w;
});
function xp(e) {
  const t = M.useRef(null), n = Rt("Notification");
  return [M.useMemo(() => {
    const o = (s) => {
      var c;
      if (!t.current) {
        process.env.NODE_ENV !== "production" && n(!1, "usage", "You are calling notice in render which will break in React 18 concurrent mode. Please trigger in effect instead.");
        return;
      }
      const {
        open: u,
        prefixCls: f,
        notification: m
      } = t.current, h = `${f}-notice`, {
        message: g,
        description: p,
        icon: v,
        type: C,
        btn: b,
        actions: x,
        className: $,
        style: y,
        role: S = "alert",
        closeIcon: w,
        closable: E
      } = s, O = u$(s, ["message", "description", "icon", "type", "btn", "actions", "className", "style", "role", "closeIcon", "closable"]);
      process.env.NODE_ENV !== "production" && n.deprecated(!b, "btn", "actions");
      const P = x ?? b, N = pu(h, c$(w, e, m));
      return u(Object.assign(Object.assign({
        // use placement from props instead of hard-coding "topRight"
        placement: (c = e?.placement) !== null && c !== void 0 ? c : f$
      }, O), {
        content: /* @__PURE__ */ M.createElement(Cp, {
          prefixCls: h,
          icon: v,
          type: C,
          message: g,
          description: p,
          actions: P,
          role: S
        }),
        className: U(C && `${h}-${C}`, $, m?.className),
        style: Object.assign(Object.assign({}, m?.style), y),
        closeIcon: N,
        closable: E ?? !!N
      }));
    }, i = {
      open: o,
      destroy: (s) => {
        var c, u;
        s !== void 0 ? (c = t.current) === null || c === void 0 || c.close(s) : (u = t.current) === null || u === void 0 || u.destroy();
      }
    };
    return ["success", "info", "warning", "error"].forEach((s) => {
      i[s] = (c) => o(Object.assign(Object.assign({}, c), {
        type: s
      }));
    }), i;
  }, []), /* @__PURE__ */ M.createElement(g$, Object.assign({
    key: "notification-holder"
  }, e, {
    ref: t
  }))];
}
function p$(e) {
  return xp(e);
}
const Sp = /* @__PURE__ */ M.createContext({});
function wp(e) {
  return (t) => /* @__PURE__ */ d.createElement(dn, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ d.createElement(e, Object.assign({}, t)));
}
const h$ = (e, t, n, r, o) => wp((i) => {
  const {
    prefixCls: l,
    style: s
  } = i, c = d.useRef(null), [u, f] = d.useState(0), [m, h] = d.useState(0), [g, p] = Vn(!1, {
    value: i.open
  }), {
    getPrefixCls: v
  } = d.useContext(Be), C = v(r, l);
  d.useEffect(() => {
    if (p(!0), typeof ResizeObserver < "u") {
      const $ = new ResizeObserver((S) => {
        const w = S[0].target;
        f(w.offsetHeight + 8), h(w.offsetWidth);
      }), y = setInterval(() => {
        var S;
        const w = o ? `.${o(C)}` : `.${C}-dropdown`, E = (S = c.current) === null || S === void 0 ? void 0 : S.querySelector(w);
        E && (clearInterval(y), $.observe(E));
      }, 10);
      return () => {
        clearInterval(y), $.disconnect();
      };
    }
  }, [C]);
  let b = Object.assign(Object.assign({}, i), {
    style: Object.assign(Object.assign({}, s), {
      margin: 0
    }),
    open: g,
    visible: g,
    getPopupContainer: () => c.current
  });
  Object.assign(b, {
    [t]: {
      overflow: {
        adjustX: !1,
        adjustY: !1
      }
    }
  });
  const x = {
    paddingBottom: u,
    position: "relative",
    minWidth: m
  };
  return /* @__PURE__ */ d.createElement("div", {
    ref: c,
    style: x
  }, /* @__PURE__ */ d.createElement(e, Object.assign({}, b)));
}), b$ = (function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e?.substr(0, 4));
});
var y$ = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], fo = void 0;
function C$(e, t) {
  var n = e.prefixCls, r = e.invalidate, o = e.item, a = e.renderItem, i = e.responsive, l = e.responsiveDisabled, s = e.registerSize, c = e.itemKey, u = e.className, f = e.style, m = e.children, h = e.display, g = e.order, p = e.component, v = p === void 0 ? "div" : p, C = De(e, y$), b = i && !h;
  function x(E) {
    s(c, E);
  }
  d.useEffect(function() {
    return function() {
      x(null);
    };
  }, []);
  var $ = a && o !== fo ? a(o, {
    index: g
  }) : m, y;
  r || (y = {
    opacity: b ? 0 : 1,
    height: b ? 0 : fo,
    overflowY: b ? "hidden" : fo,
    order: i ? g : fo,
    pointerEvents: b ? "none" : fo,
    position: b ? "absolute" : fo
  });
  var S = {};
  b && (S["aria-hidden"] = !0);
  var w = /* @__PURE__ */ d.createElement(v, ve({
    className: U(!r && n, u),
    style: T(T({}, y), f)
  }, S, C, {
    ref: t
  }), $);
  return i && (w = /* @__PURE__ */ d.createElement(gr, {
    onResize: function(O) {
      var P = O.offsetWidth;
      x(P);
    },
    disabled: l
  }, w)), w;
}
var wo = /* @__PURE__ */ d.forwardRef(C$);
wo.displayName = "Item";
function x$(e) {
  if (typeof MessageChannel > "u")
    ft(e);
  else {
    var t = new MessageChannel();
    t.port1.onmessage = function() {
      return e();
    }, t.port2.postMessage(void 0);
  }
}
function S$() {
  var e = d.useRef(null), t = function(r) {
    e.current || (e.current = [], x$(function() {
      b0(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(r);
  };
  return t;
}
function mo(e, t) {
  var n = d.useState(t), r = G(n, 2), o = r[0], a = r[1], i = bt(function(l) {
    e(function() {
      a(l);
    });
  });
  return [o, i];
}
var Ui = /* @__PURE__ */ M.createContext(null), w$ = ["component"], $$ = ["className"], E$ = ["className"], O$ = function(t, n) {
  var r = d.useContext(Ui);
  if (!r) {
    var o = t.component, a = o === void 0 ? "div" : o, i = De(t, w$);
    return /* @__PURE__ */ d.createElement(a, ve({}, i, {
      ref: n
    }));
  }
  var l = r.className, s = De(r, $$), c = t.className, u = De(t, E$);
  return /* @__PURE__ */ d.createElement(Ui.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(wo, ve({
    ref: n,
    className: U(l, c)
  }, s, u)));
}, $p = /* @__PURE__ */ d.forwardRef(O$);
$p.displayName = "RawItem";
var P$ = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "prefix", "suffix", "component", "itemComponent", "onVisibleChange"], Ep = "responsive", Op = "invalidate";
function N$(e) {
  return "+ ".concat(e.length, " ...");
}
function R$(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-overflow" : n, o = e.data, a = o === void 0 ? [] : o, i = e.renderItem, l = e.renderRawItem, s = e.itemKey, c = e.itemWidth, u = c === void 0 ? 10 : c, f = e.ssr, m = e.style, h = e.className, g = e.maxCount, p = e.renderRest, v = e.renderRawRest, C = e.prefix, b = e.suffix, x = e.component, $ = x === void 0 ? "div" : x, y = e.itemComponent, S = e.onVisibleChange, w = De(e, P$), E = f === "full", O = S$(), P = mo(O, null), N = G(P, 2), R = N[0], _ = N[1], I = R || 0, k = mo(O, /* @__PURE__ */ new Map()), A = G(k, 2), D = A[0], F = A[1], q = mo(O, 0), K = G(q, 2), Q = K[0], W = K[1], L = mo(O, 0), z = G(L, 2), H = z[0], V = z[1], te = mo(O, 0), Y = G(te, 2), J = Y[0], ae = Y[1], le = mo(O, 0), X = G(le, 2), se = X[0], Z = X[1], oe = Ht(null), ne = G(oe, 2), me = ne[0], ie = ne[1], ce = Ht(null), we = G(ce, 2), xe = we[0], Pe = we[1], he = d.useMemo(function() {
    return xe === null && E ? Number.MAX_SAFE_INTEGER : xe || 0;
  }, [xe, R]), re = Ht(!1), Ce = G(re, 2), _e = Ce[0], Ke = Ce[1], Le = "".concat(r, "-item"), ze = Math.max(Q, H), Xe = g === Ep, Oe = a.length && Xe, Te = g === Op, Re = Oe || typeof g == "number" && a.length > g, ye = Ot(function() {
    var $e = a;
    return Oe ? R === null && E ? $e = a : $e = a.slice(0, Math.min(a.length, I / u)) : typeof g == "number" && ($e = a.slice(0, g)), $e;
  }, [a, u, R, g, Oe]), Me = Ot(function() {
    return Oe ? a.slice(he + 1) : a.slice(ye.length);
  }, [a, ye, Oe, he]), Fe = Er(function($e, Ee) {
    var Qe;
    return typeof s == "function" ? s($e) : (Qe = s && $e?.[s]) !== null && Qe !== void 0 ? Qe : Ee;
  }, [s]), Ne = Er(i || function($e) {
    return $e;
  }, [i]);
  function et($e, Ee, Qe) {
    xe === $e && (Ee === void 0 || Ee === me) || (Pe($e), Qe || (Ke($e < a.length - 1), S?.($e)), Ee !== void 0 && ie(Ee));
  }
  function Zt($e, Ee) {
    _(Ee.clientWidth);
  }
  function fn($e, Ee) {
    F(function(Qe) {
      var Ct = new Map(Qe);
      return Ee === null ? Ct.delete($e) : Ct.set($e, Ee), Ct;
    });
  }
  function wn($e, Ee) {
    V(Ee), W(H);
  }
  function mn($e, Ee) {
    ae(Ee);
  }
  function Qt($e, Ee) {
    Z(Ee);
  }
  function Bt($e) {
    return D.get(Fe(ye[$e], $e));
  }
  wt(function() {
    if (I && typeof ze == "number" && ye) {
      var $e = J + se, Ee = ye.length, Qe = Ee - 1;
      if (!Ee) {
        et(0, null);
        return;
      }
      for (var Ct = 0; Ct < Ee; Ct += 1) {
        var Ve = Bt(Ct);
        if (E && (Ve = Ve || 0), Ve === void 0) {
          et(Ct - 1, void 0, !0);
          break;
        }
        if ($e += Ve, // Only one means `totalWidth` is the final width
        Qe === 0 && $e <= I || // Last two width will be the final width
        Ct === Qe - 1 && $e + Bt(Qe) <= I) {
          et(Qe, null);
          break;
        } else if ($e + ze > I) {
          et(Ct - 1, $e - Ve - se + H);
          break;
        }
      }
      b && Bt(0) + se > I && ie(null);
    }
  }, [I, D, H, J, se, Fe, ye]);
  var ct = _e && !!Me.length, Ye = {};
  me !== null && Oe && (Ye = {
    position: "absolute",
    left: me,
    top: 0
  });
  var Et = {
    prefixCls: Le,
    responsive: Oe,
    component: y,
    invalidate: Te
  }, ht = l ? function($e, Ee) {
    var Qe = Fe($e, Ee);
    return /* @__PURE__ */ d.createElement(Ui.Provider, {
      key: Qe,
      value: T(T({}, Et), {}, {
        order: Ee,
        item: $e,
        itemKey: Qe,
        registerSize: fn,
        display: Ee <= he
      })
    }, l($e, Ee));
  } : function($e, Ee) {
    var Qe = Fe($e, Ee);
    return /* @__PURE__ */ d.createElement(wo, ve({}, Et, {
      order: Ee,
      key: Qe,
      item: $e,
      renderItem: Ne,
      itemKey: Qe,
      registerSize: fn,
      display: Ee <= he
    }));
  }, qe = {
    order: ct ? he : Number.MAX_SAFE_INTEGER,
    className: "".concat(Le, "-rest"),
    registerSize: wn,
    display: ct
  }, ke = p || N$, Ze = v ? /* @__PURE__ */ d.createElement(Ui.Provider, {
    value: T(T({}, Et), qe)
  }, v(Me)) : /* @__PURE__ */ d.createElement(wo, ve({}, Et, qe), typeof ke == "function" ? ke(Me) : ke), _t = /* @__PURE__ */ d.createElement($, ve({
    className: U(!Te && r, h),
    style: m,
    ref: t
  }, w), C && /* @__PURE__ */ d.createElement(wo, ve({}, Et, {
    responsive: Xe,
    responsiveDisabled: !Oe,
    order: -1,
    className: "".concat(Le, "-prefix"),
    registerSize: mn,
    display: !0
  }), C), ye.map(ht), Re ? Ze : null, b && /* @__PURE__ */ d.createElement(wo, ve({}, Et, {
    responsive: Xe,
    responsiveDisabled: !Oe,
    order: he,
    className: "".concat(Le, "-suffix"),
    registerSize: Qt,
    display: !0,
    style: Ye
  }), b));
  return Xe ? /* @__PURE__ */ d.createElement(gr, {
    onResize: Zt,
    disabled: !Oe
  }, _t) : _t;
}
var sr = /* @__PURE__ */ d.forwardRef(R$);
sr.displayName = "Overflow";
sr.Item = $p;
sr.RESPONSIVE = Ep;
sr.INVALIDATE = Op;
function I$(e) {
  var t = e.prefixCls, n = e.align, r = e.arrow, o = e.arrowPos, a = r || {}, i = a.className, l = a.content, s = o.x, c = s === void 0 ? 0 : s, u = o.y, f = u === void 0 ? 0 : u, m = d.useRef();
  if (!n || !n.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (n.autoArrow !== !1) {
    var g = n.points[0], p = n.points[1], v = g[0], C = g[1], b = p[0], x = p[1];
    v === b || !["t", "b"].includes(v) ? h.top = f : v === "t" ? h.top = 0 : h.bottom = 0, C === x || !["l", "r"].includes(C) ? h.left = c : C === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ d.createElement("div", {
    ref: m,
    className: U("".concat(t, "-arrow"), i),
    style: h
  }, l);
}
function M$(e) {
  var t = e.prefixCls, n = e.open, r = e.zIndex, o = e.mask, a = e.motion;
  return o ? /* @__PURE__ */ d.createElement(jr, ve({}, a, {
    motionAppear: !0,
    visible: n,
    removeOnLeave: !0
  }), function(i) {
    var l = i.className;
    return /* @__PURE__ */ d.createElement("div", {
      style: {
        zIndex: r
      },
      className: U("".concat(t, "-mask"), l)
    });
  }) : null;
}
var Pp = /* @__PURE__ */ d.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (Pp.displayName = "PopupContent");
var Np = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.popup, r = e.className, o = e.prefixCls, a = e.style, i = e.target, l = e.onVisibleChanged, s = e.open, c = e.keepDom, u = e.fresh, f = e.onClick, m = e.mask, h = e.arrow, g = e.arrowPos, p = e.align, v = e.motion, C = e.maskMotion, b = e.forceRender, x = e.getPopupContainer, $ = e.autoDestroy, y = e.portal, S = e.zIndex, w = e.onMouseEnter, E = e.onMouseLeave, O = e.onPointerEnter, P = e.onPointerDownCapture, N = e.ready, R = e.offsetX, _ = e.offsetY, I = e.offsetR, k = e.offsetB, A = e.onAlign, D = e.onPrepare, F = e.stretch, q = e.targetWidth, K = e.targetHeight, Q = typeof n == "function" ? n() : n, W = s || c, L = x?.length > 0, z = d.useState(!x || !L), H = G(z, 2), V = H[0], te = H[1];
  if (wt(function() {
    !V && L && i && te(!0);
  }, [V, L, i]), !V)
    return null;
  var Y = "auto", J = {
    left: "-1000vw",
    top: "-1000vh",
    right: Y,
    bottom: Y
  };
  if (N || !s) {
    var ae, le = p.points, X = p.dynamicInset || ((ae = p._experimental) === null || ae === void 0 ? void 0 : ae.dynamicInset), se = X && le[0][1] === "r", Z = X && le[0][0] === "b";
    se ? (J.right = I, J.left = Y) : (J.left = R, J.right = Y), Z ? (J.bottom = k, J.top = Y) : (J.top = _, J.bottom = Y);
  }
  var oe = {};
  return F && (F.includes("height") && K ? oe.height = K : F.includes("minHeight") && K && (oe.minHeight = K), F.includes("width") && q ? oe.width = q : F.includes("minWidth") && q && (oe.minWidth = q)), s || (oe.pointerEvents = "none"), /* @__PURE__ */ d.createElement(y, {
    open: b || W,
    getContainer: x && function() {
      return x(i);
    },
    autoDestroy: $
  }, /* @__PURE__ */ d.createElement(M$, {
    prefixCls: o,
    open: s,
    zIndex: S,
    mask: m,
    motion: C
  }), /* @__PURE__ */ d.createElement(gr, {
    onResize: A,
    disabled: !s
  }, function(ne) {
    return /* @__PURE__ */ d.createElement(jr, ve({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: b,
      leavedClassName: "".concat(o, "-hidden")
    }, v, {
      onAppearPrepare: D,
      onEnterPrepare: D,
      visible: s,
      onVisibleChanged: function(ie) {
        var ce;
        v == null || (ce = v.onVisibleChanged) === null || ce === void 0 || ce.call(v, ie), l(ie);
      }
    }), function(me, ie) {
      var ce = me.className, we = me.style, xe = U(o, ce, r);
      return /* @__PURE__ */ d.createElement("div", {
        ref: Jn(ne, t, ie),
        className: xe,
        style: T(T(T(T({
          "--arrow-x": "".concat(g.x || 0, "px"),
          "--arrow-y": "".concat(g.y || 0, "px")
        }, J), oe), we), {}, {
          boxSizing: "border-box",
          zIndex: S
        }, a),
        onMouseEnter: w,
        onMouseLeave: E,
        onPointerEnter: O,
        onClick: f,
        onPointerDownCapture: P
      }, h && /* @__PURE__ */ d.createElement(I$, {
        prefixCls: o,
        arrow: h,
        arrowPos: g,
        align: p
      }), /* @__PURE__ */ d.createElement(Pp, {
        cache: !s && !u
      }, Q));
    });
  }));
});
process.env.NODE_ENV !== "production" && (Np.displayName = "Popup");
var Rp = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.children, r = e.getTriggerDOMNode, o = _r(n), a = d.useCallback(function(l) {
    zc(t, r ? r(l) : l);
  }, [r]), i = Qr(a, Jr(n));
  return o ? /* @__PURE__ */ d.cloneElement(n, {
    ref: i
  }) : n;
});
process.env.NODE_ENV !== "production" && (Rp.displayName = "TriggerWrapper");
var Tf = /* @__PURE__ */ d.createContext(null);
function _f(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function T$(e, t, n, r) {
  return d.useMemo(function() {
    var o = _f(n ?? t), a = _f(r ?? t), i = new Set(o), l = new Set(a);
    return e && (i.has("hover") && (i.delete("hover"), i.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [i, l];
  }, [e, t, n, r]);
}
function _$() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], n = arguments.length > 2 ? arguments[2] : void 0;
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function A$(e, t, n, r) {
  for (var o = n.points, a = Object.keys(e), i = 0; i < a.length; i += 1) {
    var l, s = a[i];
    if (_$((l = e[s]) === null || l === void 0 ? void 0 : l.points, o, r))
      return "".concat(t, "-placement-").concat(s);
  }
  return "";
}
function Af(e, t, n, r) {
  return t || (n ? {
    motionName: "".concat(e, "-").concat(n)
  } : r ? {
    motionName: r
  } : null);
}
function Wa(e) {
  return e.ownerDocument.defaultView;
}
function Ec(e) {
  for (var t = [], n = e?.parentElement, r = ["hidden", "scroll", "clip", "auto"]; n; ) {
    var o = Wa(n).getComputedStyle(n), a = o.overflowX, i = o.overflowY, l = o.overflow;
    [a, i, l].some(function(s) {
      return r.includes(s);
    }) && t.push(n), n = n.parentElement;
  }
  return t;
}
function xa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Jo(e) {
  return xa(parseFloat(e), 0);
}
function jf(e, t) {
  var n = T({}, e);
  return (t || []).forEach(function(r) {
    if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
      var o = Wa(r).getComputedStyle(r), a = o.overflow, i = o.overflowClipMargin, l = o.borderTopWidth, s = o.borderBottomWidth, c = o.borderLeftWidth, u = o.borderRightWidth, f = r.getBoundingClientRect(), m = r.offsetHeight, h = r.clientHeight, g = r.offsetWidth, p = r.clientWidth, v = Jo(l), C = Jo(s), b = Jo(c), x = Jo(u), $ = xa(Math.round(f.width / g * 1e3) / 1e3), y = xa(Math.round(f.height / m * 1e3) / 1e3), S = (g - p - b - x) * $, w = (m - h - v - C) * y, E = v * y, O = C * y, P = b * $, N = x * $, R = 0, _ = 0;
      if (a === "clip") {
        var I = Jo(i);
        R = I * $, _ = I * y;
      }
      var k = f.x + P - R, A = f.y + E - _, D = k + f.width + 2 * R - P - N - S, F = A + f.height + 2 * _ - E - O - w;
      n.left = Math.max(n.left, k), n.top = Math.max(n.top, A), n.right = Math.min(n.right, D), n.bottom = Math.min(n.bottom, F);
    }
  }), n;
}
function Ff(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = "".concat(t), r = n.match(/^(.*)\%$/);
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n);
}
function Bf(e, t) {
  var n = t || [], r = G(n, 2), o = r[0], a = r[1];
  return [Ff(e.width, o), Ff(e.height, a)];
}
function kf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function vo(e, t) {
  var n = t[0], r = t[1], o, a;
  return n === "t" ? a = e.y : n === "b" ? a = e.y + e.height : a = e.y + e.height / 2, r === "l" ? o = e.x : r === "r" ? o = e.x + e.width : o = e.x + e.width / 2, {
    x: o,
    y: a
  };
}
function Sr(e, t) {
  var n = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(r, o) {
    return o === t ? n[r] || "c" : r;
  }).join("");
}
function j$(e, t, n, r, o, a, i) {
  var l = d.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: o[r] || {}
  }), s = G(l, 2), c = s[0], u = s[1], f = d.useRef(0), m = d.useMemo(function() {
    return t ? Ec(t) : [];
  }, [t]), h = d.useRef({}), g = function() {
    h.current = {};
  };
  e || g();
  var p = bt(function() {
    if (t && n && e) {
      let Nn = function(Xo, rr) {
        var xr = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Ce, Yo = W.x + Xo, Qa = W.y + rr, zl = Yo + Z, Hl = Qa + se, Vl = Math.max(Yo, xr.left), be = Math.max(Qa, xr.top), Ie = Math.min(zl, xr.right), St = Math.min(Hl, xr.bottom);
        return Math.max(0, (Ie - Vl) * (St - be));
      }, lo = function() {
        Jt = W.y + ke, qt = Jt + se, ln = W.x + qe, At = ln + Z;
      };
      var b, x, $, y, S = t, w = S.ownerDocument, E = Wa(S), O = E.getComputedStyle(S), P = O.position, N = S.style.left, R = S.style.top, _ = S.style.right, I = S.style.bottom, k = S.style.overflow, A = T(T({}, o[r]), a), D = w.createElement("div");
      (b = S.parentElement) === null || b === void 0 || b.appendChild(D), D.style.left = "".concat(S.offsetLeft, "px"), D.style.top = "".concat(S.offsetTop, "px"), D.style.position = P, D.style.height = "".concat(S.offsetHeight, "px"), D.style.width = "".concat(S.offsetWidth, "px"), S.style.left = "0", S.style.top = "0", S.style.right = "auto", S.style.bottom = "auto", S.style.overflow = "hidden";
      var F;
      if (Array.isArray(n))
        F = {
          x: n[0],
          y: n[1],
          width: 0,
          height: 0
        };
      else {
        var q, K, Q = n.getBoundingClientRect();
        Q.x = (q = Q.x) !== null && q !== void 0 ? q : Q.left, Q.y = (K = Q.y) !== null && K !== void 0 ? K : Q.top, F = {
          x: Q.x,
          y: Q.y,
          width: Q.width,
          height: Q.height
        };
      }
      var W = S.getBoundingClientRect(), L = E.getComputedStyle(S), z = L.height, H = L.width;
      W.x = (x = W.x) !== null && x !== void 0 ? x : W.left, W.y = ($ = W.y) !== null && $ !== void 0 ? $ : W.top;
      var V = w.documentElement, te = V.clientWidth, Y = V.clientHeight, J = V.scrollWidth, ae = V.scrollHeight, le = V.scrollTop, X = V.scrollLeft, se = W.height, Z = W.width, oe = F.height, ne = F.width, me = {
        left: 0,
        top: 0,
        right: te,
        bottom: Y
      }, ie = {
        left: -X,
        top: -le,
        right: J - X,
        bottom: ae - le
      }, ce = A.htmlRegion, we = "visible", xe = "visibleFirst";
      ce !== "scroll" && ce !== xe && (ce = we);
      var Pe = ce === xe, he = jf(ie, m), re = jf(me, m), Ce = ce === we ? re : he, _e = Pe ? re : Ce;
      S.style.left = "auto", S.style.top = "auto", S.style.right = "0", S.style.bottom = "0";
      var Ke = S.getBoundingClientRect();
      S.style.left = N, S.style.top = R, S.style.right = _, S.style.bottom = I, S.style.overflow = k, (y = S.parentElement) === null || y === void 0 || y.removeChild(D);
      var Le = xa(Math.round(Z / parseFloat(H) * 1e3) / 1e3), ze = xa(Math.round(se / parseFloat(z) * 1e3) / 1e3);
      if (Le === 0 || ze === 0 || ua(n) && !cu(n))
        return;
      var Xe = A.offset, Oe = A.targetOffset, Te = Bf(W, Xe), Re = G(Te, 2), ye = Re[0], Me = Re[1], Fe = Bf(F, Oe), Ne = G(Fe, 2), et = Ne[0], Zt = Ne[1];
      F.x -= et, F.y -= Zt;
      var fn = A.points || [], wn = G(fn, 2), mn = wn[0], Qt = wn[1], Bt = kf(Qt), ct = kf(mn), Ye = vo(F, Bt), Et = vo(W, ct), ht = T({}, A), qe = Ye.x - Et.x + ye, ke = Ye.y - Et.y + Me, Ze = Nn(qe, ke), _t = Nn(qe, ke, re), $e = vo(F, ["t", "l"]), Ee = vo(W, ["t", "l"]), Qe = vo(F, ["b", "r"]), Ct = vo(W, ["b", "r"]), Ve = A.overflow || {}, vt = Ve.adjustX, xt = Ve.adjustY, Pt = Ve.shiftX, Wt = Ve.shiftY, Gt = function(rr) {
        return typeof rr == "boolean" ? rr : rr >= 0;
      }, Jt, qt, ln, At;
      lo();
      var Fn = Gt(xt), ue = ct[0] === Bt[0];
      if (Fn && ct[0] === "t" && (qt > _e.bottom || h.current.bt)) {
        var ge = ke;
        ue ? ge -= se - oe : ge = $e.y - Ct.y - Me;
        var Ae = Nn(qe, ge), ot = Nn(qe, ge, re);
        // Of course use larger one
        Ae > Ze || Ae === Ze && (!Pe || // Choose recommend one
        ot >= _t) ? (h.current.bt = !0, ke = ge, Me = -Me, ht.points = [Sr(ct, 0), Sr(Bt, 0)]) : h.current.bt = !1;
      }
      if (Fn && ct[0] === "b" && (Jt < _e.top || h.current.tb)) {
        var gt = ke;
        ue ? gt += se - oe : gt = Qe.y - Ee.y - Me;
        var $n = Nn(qe, gt), Ut = Nn(qe, gt, re);
        // Of course use larger one
        $n > Ze || $n === Ze && (!Pe || // Choose recommend one
        Ut >= _t) ? (h.current.tb = !0, ke = gt, Me = -Me, ht.points = [Sr(ct, 0), Sr(Bt, 0)]) : h.current.tb = !1;
      }
      var En = Gt(vt), hr = ct[1] === Bt[1];
      if (En && ct[1] === "l" && (At > _e.right || h.current.rl)) {
        var On = qe;
        hr ? On -= Z - ne : On = $e.x - Ct.x - ye;
        var vn = Nn(On, ke), br = Nn(On, ke, re);
        // Of course use larger one
        vn > Ze || vn === Ze && (!Pe || // Choose recommend one
        br >= _t) ? (h.current.rl = !0, qe = On, ye = -ye, ht.points = [Sr(ct, 1), Sr(Bt, 1)]) : h.current.rl = !1;
      }
      if (En && ct[1] === "r" && (ln < _e.left || h.current.lr)) {
        var Pn = qe;
        hr ? Pn += Z - ne : Pn = Qe.x - Ee.x - ye;
        var Br = Nn(Pn, ke), yr = Nn(Pn, ke, re);
        // Of course use larger one
        Br > Ze || Br === Ze && (!Pe || // Choose recommend one
        yr >= _t) ? (h.current.lr = !0, qe = Pn, ye = -ye, ht.points = [Sr(ct, 1), Sr(Bt, 1)]) : h.current.lr = !1;
      }
      lo();
      var gn = Pt === !0 ? 0 : Pt;
      typeof gn == "number" && (ln < re.left && (qe -= ln - re.left - ye, F.x + ne < re.left + gn && (qe += F.x - re.left + ne - gn)), At > re.right && (qe -= At - re.right - ye, F.x > re.right - gn && (qe += F.x - re.right + gn)));
      var Bn = Wt === !0 ? 0 : Wt;
      typeof Bn == "number" && (Jt < re.top && (ke -= Jt - re.top - Me, F.y + oe < re.top + Bn && (ke += F.y - re.top + oe - Bn)), qt > re.bottom && (ke -= qt - re.bottom - Me, F.y > re.bottom - Bn && (ke += F.y - re.bottom + Bn)));
      var Gn = W.x + qe, qn = Gn + Z, kr = W.y + ke, Ko = kr + se, ro = F.x, pt = ro + ne, Je = F.y, ut = Je + oe, Kt = Math.max(Gn, ro), Lt = Math.min(qn, pt), Cr = (Kt + Lt) / 2, Dr = Cr - Gn, oo = Math.max(kr, Je), ao = Math.min(Ko, ut), io = (oo + ao) / 2, nr = io - kr;
      i?.(t, ht);
      var sn = Ke.right - W.x - (qe + W.width), Lr = Ke.bottom - W.y - (ke + W.height);
      Le === 1 && (qe = Math.round(qe), sn = Math.round(sn)), ze === 1 && (ke = Math.round(ke), Lr = Math.round(Lr));
      var Ll = {
        ready: !0,
        offsetX: qe / Le,
        offsetY: ke / ze,
        offsetR: sn / Le,
        offsetB: Lr / ze,
        arrowX: Dr / Le,
        arrowY: nr / ze,
        scaleX: Le,
        scaleY: ze,
        align: ht
      };
      u(Ll);
    }
  }), v = function() {
    f.current += 1;
    var x = f.current;
    Promise.resolve().then(function() {
      f.current === x && p();
    });
  }, C = function() {
    u(function(x) {
      return T(T({}, x), {}, {
        ready: !1
      });
    });
  };
  return wt(C, [r]), wt(function() {
    e || C();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, v];
}
function F$(e, t, n, r, o) {
  wt(function() {
    if (e && t && n) {
      let f = function() {
        r(), o();
      };
      var a = t, i = n, l = Ec(a), s = Ec(i), c = Wa(i), u = new Set([c].concat(de(l), de(s)));
      return u.forEach(function(m) {
        m.addEventListener("scroll", f, {
          passive: !0
        });
      }), c.addEventListener("resize", f, {
        passive: !0
      }), r(), function() {
        u.forEach(function(m) {
          m.removeEventListener("scroll", f), c.removeEventListener("resize", f);
        });
      };
    }
  }, [e, t, n]);
}
function B$(e, t, n, r, o, a, i, l) {
  var s = d.useRef(e);
  s.current = e;
  var c = d.useRef(!1);
  d.useEffect(function() {
    if (t && r && (!o || a)) {
      var f = function() {
        c.current = !1;
      }, m = function($) {
        var y;
        s.current && !i(((y = $.composedPath) === null || y === void 0 || (y = y.call($)) === null || y === void 0 ? void 0 : y[0]) || $.target) && !c.current && l(!1);
      }, h = Wa(r);
      h.addEventListener("pointerdown", f, !0), h.addEventListener("mousedown", m, !0), h.addEventListener("contextmenu", m, !0);
      var g = Li(n);
      if (g && (g.addEventListener("mousedown", m, !0), g.addEventListener("contextmenu", m, !0)), process.env.NODE_ENV !== "production") {
        var p, v, C = n == null || (p = n.getRootNode) === null || p === void 0 ? void 0 : p.call(n), b = (v = r.getRootNode) === null || v === void 0 ? void 0 : v.call(r);
        Mr(C === b, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        h.removeEventListener("pointerdown", f, !0), h.removeEventListener("mousedown", m, !0), h.removeEventListener("contextmenu", m, !0), g && (g.removeEventListener("mousedown", m, !0), g.removeEventListener("contextmenu", m, !0));
      };
    }
  }, [t, n, r, o, a]);
  function u() {
    c.current = !0;
  }
  return u;
}
var k$ = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function D$() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : El, t = /* @__PURE__ */ d.forwardRef(function(n, r) {
    var o = n.prefixCls, a = o === void 0 ? "rc-trigger-popup" : o, i = n.children, l = n.action, s = l === void 0 ? "hover" : l, c = n.showAction, u = n.hideAction, f = n.popupVisible, m = n.defaultPopupVisible, h = n.onPopupVisibleChange, g = n.afterPopupVisibleChange, p = n.mouseEnterDelay, v = n.mouseLeaveDelay, C = v === void 0 ? 0.1 : v, b = n.focusDelay, x = n.blurDelay, $ = n.mask, y = n.maskClosable, S = y === void 0 ? !0 : y, w = n.getPopupContainer, E = n.forceRender, O = n.autoDestroy, P = n.destroyPopupOnHide, N = n.popup, R = n.popupClassName, _ = n.popupStyle, I = n.popupPlacement, k = n.builtinPlacements, A = k === void 0 ? {} : k, D = n.popupAlign, F = n.zIndex, q = n.stretch, K = n.getPopupClassNameFromAlign, Q = n.fresh, W = n.alignPoint, L = n.onPopupClick, z = n.onPopupAlign, H = n.arrow, V = n.popupMotion, te = n.maskMotion, Y = n.popupTransitionName, J = n.popupAnimation, ae = n.maskTransitionName, le = n.maskAnimation, X = n.className, se = n.getTriggerDOMNode, Z = De(n, k$), oe = O || P || !1, ne = d.useState(!1), me = G(ne, 2), ie = me[0], ce = me[1];
    wt(function() {
      ce(b$());
    }, []);
    var we = d.useRef({}), xe = d.useContext(Tf), Pe = d.useMemo(function() {
      return {
        registerSubPopup: function(Ie, St) {
          we.current[Ie] = St, xe?.registerSubPopup(Ie, St);
        }
      };
    }, [xe]), he = fu(), re = d.useState(null), Ce = G(re, 2), _e = Ce[0], Ke = Ce[1], Le = d.useRef(null), ze = bt(function(be) {
      Le.current = be, ua(be) && _e !== be && Ke(be), xe?.registerSubPopup(he, be);
    }), Xe = d.useState(null), Oe = G(Xe, 2), Te = Oe[0], Re = Oe[1], ye = d.useRef(null), Me = bt(function(be) {
      ua(be) && Te !== be && (Re(be), ye.current = be);
    }), Fe = d.Children.only(i), Ne = Fe?.props || {}, et = {}, Zt = bt(function(be) {
      var Ie, St, kt = Te;
      return kt?.contains(be) || ((Ie = Li(kt)) === null || Ie === void 0 ? void 0 : Ie.host) === be || be === kt || _e?.contains(be) || ((St = Li(_e)) === null || St === void 0 ? void 0 : St.host) === be || be === _e || Object.values(we.current).some(function(Nt) {
        return Nt?.contains(be) || be === Nt;
      });
    }), fn = Af(a, V, J, Y), wn = Af(a, te, le, ae), mn = d.useState(m || !1), Qt = G(mn, 2), Bt = Qt[0], ct = Qt[1], Ye = f ?? Bt, Et = bt(function(be) {
      f === void 0 && ct(be);
    });
    wt(function() {
      ct(f || !1);
    }, [f]);
    var ht = d.useRef(Ye);
    ht.current = Ye;
    var qe = d.useRef([]);
    qe.current = [];
    var ke = bt(function(be) {
      var Ie;
      Et(be), ((Ie = qe.current[qe.current.length - 1]) !== null && Ie !== void 0 ? Ie : Ye) !== be && (qe.current.push(be), h?.(be));
    }), Ze = d.useRef(), _t = function() {
      clearTimeout(Ze.current);
    }, $e = function(Ie) {
      var St = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      _t(), St === 0 ? ke(Ie) : Ze.current = setTimeout(function() {
        ke(Ie);
      }, St * 1e3);
    };
    d.useEffect(function() {
      return _t;
    }, []);
    var Ee = d.useState(!1), Qe = G(Ee, 2), Ct = Qe[0], Ve = Qe[1];
    wt(function(be) {
      (!be || Ye) && Ve(!0);
    }, [Ye]);
    var vt = d.useState(null), xt = G(vt, 2), Pt = xt[0], Wt = xt[1], Gt = d.useState(null), Jt = G(Gt, 2), qt = Jt[0], ln = Jt[1], At = function(Ie) {
      ln([Ie.clientX, Ie.clientY]);
    }, Fn = j$(Ye, _e, W && qt !== null ? qt : Te, I, A, D, z), ue = G(Fn, 11), ge = ue[0], Ae = ue[1], ot = ue[2], gt = ue[3], $n = ue[4], Ut = ue[5], En = ue[6], hr = ue[7], On = ue[8], vn = ue[9], br = ue[10], Pn = T$(ie, s, c, u), Br = G(Pn, 2), yr = Br[0], gn = Br[1], Bn = yr.has("click"), Gn = gn.has("click") || gn.has("contextMenu"), qn = bt(function() {
      Ct || br();
    }), kr = function() {
      ht.current && W && Gn && $e(!1);
    };
    F$(Ye, Te, _e, qn, kr), wt(function() {
      qn();
    }, [qt, I]), wt(function() {
      Ye && !(A != null && A[I]) && qn();
    }, [JSON.stringify(D)]);
    var Ko = d.useMemo(function() {
      var be = A$(A, a, vn, W);
      return U(be, K?.(vn));
    }, [vn, K, A, a, W]);
    d.useImperativeHandle(r, function() {
      return {
        nativeElement: ye.current,
        popupElement: Le.current,
        forceAlign: qn
      };
    });
    var ro = d.useState(0), pt = G(ro, 2), Je = pt[0], ut = pt[1], Kt = d.useState(0), Lt = G(Kt, 2), Cr = Lt[0], Dr = Lt[1], oo = function() {
      if (q && Te) {
        var Ie = Te.getBoundingClientRect();
        ut(Ie.width), Dr(Ie.height);
      }
    }, ao = function() {
      oo(), qn();
    }, io = function(Ie) {
      Ve(!1), br(), g?.(Ie);
    }, nr = function() {
      return new Promise(function(Ie) {
        oo(), Wt(function() {
          return Ie;
        });
      });
    };
    wt(function() {
      Pt && (br(), Pt(), Wt(null));
    }, [Pt]);
    function sn(be, Ie, St, kt) {
      et[be] = function(Nt) {
        var Ja;
        kt?.(Nt), $e(Ie, St);
        for (var Wl = arguments.length, Ku = new Array(Wl > 1 ? Wl - 1 : 0), ei = 1; ei < Wl; ei++)
          Ku[ei - 1] = arguments[ei];
        (Ja = Ne[be]) === null || Ja === void 0 || Ja.call.apply(Ja, [Ne, Nt].concat(Ku));
      };
    }
    (Bn || Gn) && (et.onClick = function(be) {
      var Ie;
      ht.current && Gn ? $e(!1) : !ht.current && Bn && (At(be), $e(!0));
      for (var St = arguments.length, kt = new Array(St > 1 ? St - 1 : 0), Nt = 1; Nt < St; Nt++)
        kt[Nt - 1] = arguments[Nt];
      (Ie = Ne.onClick) === null || Ie === void 0 || Ie.call.apply(Ie, [Ne, be].concat(kt));
    });
    var Lr = B$(Ye, Gn, Te, _e, $, S, Zt, $e), Ll = yr.has("hover"), Nn = gn.has("hover"), lo, Xo;
    Ll && (sn("onMouseEnter", !0, p, function(be) {
      At(be);
    }), sn("onPointerEnter", !0, p, function(be) {
      At(be);
    }), lo = function(Ie) {
      (Ye || Ct) && _e !== null && _e !== void 0 && _e.contains(Ie.target) && $e(!0, p);
    }, W && (et.onMouseMove = function(be) {
      var Ie;
      (Ie = Ne.onMouseMove) === null || Ie === void 0 || Ie.call(Ne, be);
    })), Nn && (sn("onMouseLeave", !1, C), sn("onPointerLeave", !1, C), Xo = function() {
      $e(!1, C);
    }), yr.has("focus") && sn("onFocus", !0, b), gn.has("focus") && sn("onBlur", !1, x), yr.has("contextMenu") && (et.onContextMenu = function(be) {
      var Ie;
      ht.current && gn.has("contextMenu") ? $e(!1) : (At(be), $e(!0)), be.preventDefault();
      for (var St = arguments.length, kt = new Array(St > 1 ? St - 1 : 0), Nt = 1; Nt < St; Nt++)
        kt[Nt - 1] = arguments[Nt];
      (Ie = Ne.onContextMenu) === null || Ie === void 0 || Ie.call.apply(Ie, [Ne, be].concat(kt));
    }), X && (et.className = U(Ne.className, X));
    var rr = d.useRef(!1);
    rr.current || (rr.current = E || Ye || Ct);
    var xr = T(T({}, Ne), et), Yo = {}, Qa = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Qa.forEach(function(be) {
      Z[be] && (Yo[be] = function() {
        for (var Ie, St = arguments.length, kt = new Array(St), Nt = 0; Nt < St; Nt++)
          kt[Nt] = arguments[Nt];
        (Ie = xr[be]) === null || Ie === void 0 || Ie.call.apply(Ie, [xr].concat(kt)), Z[be].apply(Z, kt);
      });
    });
    var zl = /* @__PURE__ */ d.cloneElement(Fe, T(T({}, xr), Yo)), Hl = {
      x: Ut,
      y: En
    }, Vl = H ? T({}, H !== !0 ? H : {}) : null;
    return /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(gr, {
      disabled: !Ye,
      ref: Me,
      onResize: ao
    }, /* @__PURE__ */ d.createElement(Rp, {
      getTriggerDOMNode: se
    }, zl)), rr.current && /* @__PURE__ */ d.createElement(Tf.Provider, {
      value: Pe
    }, /* @__PURE__ */ d.createElement(Np, {
      portal: e,
      ref: ze,
      prefixCls: a,
      popup: N,
      className: U(R, Ko),
      style: _,
      target: Te,
      onMouseEnter: lo,
      onMouseLeave: Xo,
      onPointerEnter: lo,
      zIndex: F,
      open: Ye,
      keepDom: Ct,
      fresh: Q,
      onClick: L,
      onPointerDownCapture: Lr,
      mask: $,
      motion: fn,
      maskMotion: wn,
      onVisibleChanged: io,
      onPrepare: nr,
      forceRender: E,
      autoDestroy: oe,
      getPopupContainer: w,
      align: vn,
      arrow: Vl,
      arrowPos: Hl,
      ready: ge,
      offsetX: Ae,
      offsetY: ot,
      offsetR: gt,
      offsetB: $n,
      onAlign: qn,
      stretch: q,
      targetWidth: Je / hr,
      targetHeight: Cr / On
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const hu = D$(El);
var Ip = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.height, r = e.offsetY, o = e.offsetX, a = e.children, i = e.prefixCls, l = e.onInnerResize, s = e.innerProps, c = e.rtl, u = e.extra, f = {}, m = {
    display: "flex",
    flexDirection: "column"
  };
  return r !== void 0 && (f = {
    height: n,
    position: "relative",
    overflow: "hidden"
  }, m = T(T({}, m), {}, j(j(j(j(j({
    transform: "translateY(".concat(r, "px)")
  }, c ? "marginRight" : "marginLeft", -o), "position", "absolute"), "left", 0), "right", 0), "top", 0))), /* @__PURE__ */ d.createElement("div", {
    style: f
  }, /* @__PURE__ */ d.createElement(gr, {
    onResize: function(g) {
      var p = g.offsetHeight;
      p && l && l();
    }
  }, /* @__PURE__ */ d.createElement("div", ve({
    style: m,
    className: U(j({}, "".concat(i, "-holder-inner"), i)),
    ref: t
  }, s), a, u)));
});
Ip.displayName = "Filler";
function L$(e) {
  var t = e.children, n = e.setRef, r = d.useCallback(function(o) {
    n(o);
  }, []);
  return /* @__PURE__ */ d.cloneElement(t, {
    ref: r
  });
}
function z$(e, t, n, r, o, a, i, l) {
  var s = l.getKey;
  return e.slice(t, n + 1).map(function(c, u) {
    var f = t + u, m = i(c, f, {
      style: {
        width: r
      },
      offsetX: o
    }), h = s(c);
    return /* @__PURE__ */ d.createElement(L$, {
      key: h,
      setRef: function(p) {
        return a(c, p);
      }
    }, m);
  });
}
function H$(e, t, n) {
  var r = e.length, o = t.length, a, i;
  if (r === 0 && o === 0)
    return null;
  r < o ? (a = e, i = t) : (a = t, i = e);
  var l = {
    __EMPTY_ITEM__: !0
  };
  function s(g) {
    return g !== void 0 ? n(g) : l;
  }
  for (var c = null, u = Math.abs(r - o) !== 1, f = 0; f < i.length; f += 1) {
    var m = s(a[f]), h = s(i[f]);
    if (m !== h) {
      c = f, u = u || m !== s(i[f + 1]);
      break;
    }
  }
  return c === null ? null : {
    index: c,
    multiple: u
  };
}
function V$(e, t, n) {
  var r = d.useState(e), o = G(r, 2), a = o[0], i = o[1], l = d.useState(null), s = G(l, 2), c = s[0], u = s[1];
  return d.useEffect(function() {
    var f = H$(a || [], e || [], t);
    f?.index !== void 0 && u(e[f.index]), i(e);
  }, [e]), [c];
}
var Df = (typeof navigator > "u" ? "undefined" : Se(navigator)) === "object" && /Firefox/i.test(navigator.userAgent);
const Mp = (function(e, t, n, r) {
  var o = fe(!1), a = fe(null);
  function i() {
    clearTimeout(a.current), o.current = !0, a.current = setTimeout(function() {
      o.current = !1;
    }, 50);
  }
  var l = fe({
    top: e,
    bottom: t,
    left: n,
    right: r
  });
  return l.current.top = e, l.current.bottom = t, l.current.left = n, l.current.right = r, function(s, c) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, f = s ? (
      // Pass origin wheel when on the left
      c < 0 && l.current.left || // Pass origin wheel when on the right
      c > 0 && l.current.right
    ) : c < 0 && l.current.top || // Pass origin wheel when on the bottom
    c > 0 && l.current.bottom;
    return u && f ? (clearTimeout(a.current), o.current = !1) : (!f || o.current) && i(), !o.current && f;
  };
});
function W$(e, t, n, r, o, a, i) {
  var l = fe(0), s = fe(null), c = fe(null), u = fe(!1), f = Mp(t, n, r, o);
  function m(b, x) {
    if (ft.cancel(s.current), !f(!1, x)) {
      var $ = b;
      if (!$._virtualHandled)
        $._virtualHandled = !0;
      else
        return;
      l.current += x, c.current = x, Df || $.preventDefault(), s.current = ft(function() {
        var y = u.current ? 10 : 1;
        i(l.current * y, !1), l.current = 0;
      });
    }
  }
  function h(b, x) {
    i(x, !0), Df || b.preventDefault();
  }
  var g = fe(null), p = fe(null);
  function v(b) {
    if (e) {
      ft.cancel(p.current), p.current = ft(function() {
        g.current = null;
      }, 2);
      var x = b.deltaX, $ = b.deltaY, y = b.shiftKey, S = x, w = $;
      (g.current === "sx" || !g.current && y && $ && !x) && (S = $, w = 0, g.current = "sx");
      var E = Math.abs(S), O = Math.abs(w);
      g.current === null && (g.current = a && E > O ? "x" : "y"), g.current === "y" ? m(b, w) : h(b, S);
    }
  }
  function C(b) {
    e && (u.current = b.detail === c.current);
  }
  return [v, C];
}
function G$(e, t, n, r) {
  var o = d.useMemo(function() {
    return [/* @__PURE__ */ new Map(), []];
  }, [e, n.id, r]), a = G(o, 2), i = a[0], l = a[1], s = function(u) {
    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : u, m = i.get(u), h = i.get(f);
    if (m === void 0 || h === void 0)
      for (var g = e.length, p = l.length; p < g; p += 1) {
        var v, C = e[p], b = t(C);
        i.set(b, p);
        var x = (v = n.get(b)) !== null && v !== void 0 ? v : r;
        if (l[p] = (l[p - 1] || 0) + x, b === u && (m = p), b === f && (h = p), m !== void 0 && h !== void 0)
          break;
      }
    return {
      top: l[m - 1] || 0,
      bottom: l[h]
    };
  };
  return s;
}
var q$ = /* @__PURE__ */ (function() {
  function e() {
    Mt(this, e), j(this, "maps", void 0), j(this, "id", 0), j(this, "diffRecords", /* @__PURE__ */ new Map()), this.maps = /* @__PURE__ */ Object.create(null);
  }
  return Tt(e, [{
    key: "set",
    value: function(n, r) {
      this.diffRecords.set(n, this.maps[n]), this.maps[n] = r, this.id += 1;
    }
  }, {
    key: "get",
    value: function(n) {
      return this.maps[n];
    }
    /**
     * CacheMap will record the key changed.
     * To help to know what's update in the next render.
     */
  }, {
    key: "resetRecord",
    value: function() {
      this.diffRecords.clear();
    }
  }, {
    key: "getRecord",
    value: function() {
      return this.diffRecords;
    }
  }]), e;
})();
function Lf(e) {
  var t = parseFloat(e);
  return isNaN(t) ? 0 : t;
}
function U$(e, t, n) {
  var r = d.useState(0), o = G(r, 2), a = o[0], i = o[1], l = fe(/* @__PURE__ */ new Map()), s = fe(new q$()), c = fe(0);
  function u() {
    c.current += 1;
  }
  function f() {
    var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    u();
    var g = function() {
      var C = !1;
      l.current.forEach(function(b, x) {
        if (b && b.offsetParent) {
          var $ = b.offsetHeight, y = getComputedStyle(b), S = y.marginTop, w = y.marginBottom, E = Lf(S), O = Lf(w), P = $ + E + O;
          s.current.get(x) !== P && (s.current.set(x, P), C = !0);
        }
      }), C && i(function(b) {
        return b + 1;
      });
    };
    if (h)
      g();
    else {
      c.current += 1;
      var p = c.current;
      Promise.resolve().then(function() {
        p === c.current && g();
      });
    }
  }
  function m(h, g) {
    var p = e(h);
    l.current.get(p), g ? (l.current.set(p, g), f()) : l.current.delete(p);
  }
  return yt(function() {
    return u;
  }, []), [m, f, s.current, a];
}
var zf = 14 / 15;
function K$(e, t, n) {
  var r = fe(!1), o = fe(0), a = fe(0), i = fe(null), l = fe(null), s, c = function(h) {
    if (r.current) {
      var g = Math.ceil(h.touches[0].pageX), p = Math.ceil(h.touches[0].pageY), v = o.current - g, C = a.current - p, b = Math.abs(v) > Math.abs(C);
      b ? o.current = g : a.current = p;
      var x = n(b, b ? v : C, !1, h);
      x && h.preventDefault(), clearInterval(l.current), x && (l.current = setInterval(function() {
        b ? v *= zf : C *= zf;
        var $ = Math.floor(b ? v : C);
        (!n(b, $, !0) || Math.abs($) <= 0.1) && clearInterval(l.current);
      }, 16));
    }
  }, u = function() {
    r.current = !1, s();
  }, f = function(h) {
    s(), h.touches.length === 1 && !r.current && (r.current = !0, o.current = Math.ceil(h.touches[0].pageX), a.current = Math.ceil(h.touches[0].pageY), i.current = h.target, i.current.addEventListener("touchmove", c, {
      passive: !1
    }), i.current.addEventListener("touchend", u, {
      passive: !0
    }));
  };
  s = function() {
    i.current && (i.current.removeEventListener("touchmove", c), i.current.removeEventListener("touchend", u));
  }, wt(function() {
    return e && t.current.addEventListener("touchstart", f, {
      passive: !0
    }), function() {
      var m;
      (m = t.current) === null || m === void 0 || m.removeEventListener("touchstart", f), s(), clearInterval(l.current);
    };
  }, [e]);
}
function Hf(e) {
  return Math.floor(Math.pow(e, 0.5));
}
function Oc(e, t) {
  var n = "touches" in e ? e.touches[0] : e;
  return n[t ? "pageX" : "pageY"] - window[t ? "scrollX" : "scrollY"];
}
function X$(e, t, n) {
  d.useEffect(function() {
    var r = t.current;
    if (e && r) {
      var o = !1, a, i, l = function() {
        ft.cancel(a);
      }, s = function m() {
        l(), a = ft(function() {
          n(i), m();
        });
      }, c = function() {
        o = !1, l();
      }, u = function(h) {
        if (!(h.target.draggable || h.button !== 0)) {
          var g = h;
          g._virtualHandled || (g._virtualHandled = !0, o = !0);
        }
      }, f = function(h) {
        if (o) {
          var g = Oc(h, !1), p = r.getBoundingClientRect(), v = p.top, C = p.bottom;
          if (g <= v) {
            var b = v - g;
            i = -Hf(b), s();
          } else if (g >= C) {
            var x = g - C;
            i = Hf(x), s();
          } else
            l();
        }
      };
      return r.addEventListener("mousedown", u), r.ownerDocument.addEventListener("mouseup", c), r.ownerDocument.addEventListener("mousemove", f), r.ownerDocument.addEventListener("dragend", c), function() {
        r.removeEventListener("mousedown", u), r.ownerDocument.removeEventListener("mouseup", c), r.ownerDocument.removeEventListener("mousemove", f), r.ownerDocument.removeEventListener("dragend", c), l();
      };
    }
  }, [e]);
}
var Vf = 10;
function Y$(e, t, n, r, o, a, i, l) {
  var s = d.useRef(), c = d.useState(null), u = G(c, 2), f = u[0], m = u[1];
  return wt(function() {
    if (f && f.times < Vf) {
      if (!e.current) {
        m(function(q) {
          return T({}, q);
        });
        return;
      }
      a();
      var h = f.targetAlign, g = f.originAlign, p = f.index, v = f.offset, C = e.current.clientHeight, b = !1, x = h, $ = null;
      if (C) {
        for (var y = h || g, S = 0, w = 0, E = 0, O = Math.min(t.length - 1, p), P = 0; P <= O; P += 1) {
          var N = o(t[P]);
          w = S;
          var R = n.get(N);
          E = w + (R === void 0 ? r : R), S = E;
        }
        for (var _ = y === "top" ? v : C - v, I = O; I >= 0; I -= 1) {
          var k = o(t[I]), A = n.get(k);
          if (A === void 0) {
            b = !0;
            break;
          }
          if (_ -= A, _ <= 0)
            break;
        }
        switch (y) {
          case "top":
            $ = w - v;
            break;
          case "bottom":
            $ = E - C + v;
            break;
          default: {
            var D = e.current.scrollTop, F = D + C;
            w < D ? x = "top" : E > F && (x = "bottom");
          }
        }
        $ !== null && i($), $ !== f.lastTop && (b = !0);
      }
      b && m(T(T({}, f), {}, {
        times: f.times + 1,
        targetAlign: x,
        lastTop: $
      }));
    } else process.env.NODE_ENV !== "production" && f?.times === Vf && rt(!1, "Seems `scrollTo` with `rc-virtual-list` reach the max limitation. Please fire issue for us. Thanks.");
  }, [f, e.current]), function(h) {
    if (h == null) {
      l();
      return;
    }
    if (ft.cancel(s.current), typeof h == "number")
      i(h);
    else if (h && Se(h) === "object") {
      var g, p = h.align;
      "index" in h ? g = h.index : g = t.findIndex(function(b) {
        return o(b) === h.key;
      });
      var v = h.offset, C = v === void 0 ? 0 : v;
      m({
        times: 0,
        index: g,
        offset: C,
        originAlign: p
      });
    }
  };
}
var Pc = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.prefixCls, r = e.rtl, o = e.scrollOffset, a = e.scrollRange, i = e.onStartMove, l = e.onStopMove, s = e.onScroll, c = e.horizontal, u = e.spinSize, f = e.containerSize, m = e.style, h = e.thumbStyle, g = e.showScrollBar, p = d.useState(!1), v = G(p, 2), C = v[0], b = v[1], x = d.useState(null), $ = G(x, 2), y = $[0], S = $[1], w = d.useState(null), E = G(w, 2), O = E[0], P = E[1], N = !r, R = d.useRef(), _ = d.useRef(), I = d.useState(g), k = G(I, 2), A = k[0], D = k[1], F = d.useRef(), q = function() {
    g === !0 || g === !1 || (clearTimeout(F.current), D(!0), F.current = setTimeout(function() {
      D(!1);
    }, 3e3));
  }, K = a - f || 0, Q = f - u || 0, W = d.useMemo(function() {
    if (o === 0 || K === 0)
      return 0;
    var le = o / K;
    return le * Q;
  }, [o, K, Q]), L = function(X) {
    X.stopPropagation(), X.preventDefault();
  }, z = d.useRef({
    top: W,
    dragging: C,
    pageY: y,
    startTop: O
  });
  z.current = {
    top: W,
    dragging: C,
    pageY: y,
    startTop: O
  };
  var H = function(X) {
    b(!0), S(Oc(X, c)), P(z.current.top), i(), X.stopPropagation(), X.preventDefault();
  };
  d.useEffect(function() {
    var le = function(oe) {
      oe.preventDefault();
    }, X = R.current, se = _.current;
    return X.addEventListener("touchstart", le, {
      passive: !1
    }), se.addEventListener("touchstart", H, {
      passive: !1
    }), function() {
      X.removeEventListener("touchstart", le), se.removeEventListener("touchstart", H);
    };
  }, []);
  var V = d.useRef();
  V.current = K;
  var te = d.useRef();
  te.current = Q, d.useEffect(function() {
    if (C) {
      var le, X = function(oe) {
        var ne = z.current, me = ne.dragging, ie = ne.pageY, ce = ne.startTop;
        ft.cancel(le);
        var we = R.current.getBoundingClientRect(), xe = f / (c ? we.width : we.height);
        if (me) {
          var Pe = (Oc(oe, c) - ie) * xe, he = ce;
          !N && c ? he -= Pe : he += Pe;
          var re = V.current, Ce = te.current, _e = Ce ? he / Ce : 0, Ke = Math.ceil(_e * re);
          Ke = Math.max(Ke, 0), Ke = Math.min(Ke, re), le = ft(function() {
            s(Ke, c);
          });
        }
      }, se = function() {
        b(!1), l();
      };
      return window.addEventListener("mousemove", X, {
        passive: !0
      }), window.addEventListener("touchmove", X, {
        passive: !0
      }), window.addEventListener("mouseup", se, {
        passive: !0
      }), window.addEventListener("touchend", se, {
        passive: !0
      }), function() {
        window.removeEventListener("mousemove", X), window.removeEventListener("touchmove", X), window.removeEventListener("mouseup", se), window.removeEventListener("touchend", se), ft.cancel(le);
      };
    }
  }, [C]), d.useEffect(function() {
    return q(), function() {
      clearTimeout(F.current);
    };
  }, [o]), d.useImperativeHandle(t, function() {
    return {
      delayHidden: q
    };
  });
  var Y = "".concat(n, "-scrollbar"), J = {
    position: "absolute",
    visibility: A ? null : "hidden"
  }, ae = {
    position: "absolute",
    borderRadius: 99,
    background: "var(--rc-virtual-list-scrollbar-bg, rgba(0, 0, 0, 0.5))",
    cursor: "pointer",
    userSelect: "none"
  };
  return c ? (Object.assign(J, {
    height: 8,
    left: 0,
    right: 0,
    bottom: 0
  }), Object.assign(ae, j({
    height: "100%",
    width: u
  }, N ? "left" : "right", W))) : (Object.assign(J, j({
    width: 8,
    top: 0,
    bottom: 0
  }, N ? "right" : "left", 0)), Object.assign(ae, {
    width: "100%",
    height: u,
    top: W
  })), /* @__PURE__ */ d.createElement("div", {
    ref: R,
    className: U(Y, j(j(j({}, "".concat(Y, "-horizontal"), c), "".concat(Y, "-vertical"), !c), "".concat(Y, "-visible"), A)),
    style: T(T({}, J), m),
    onMouseDown: L,
    onMouseMove: q
  }, /* @__PURE__ */ d.createElement("div", {
    ref: _,
    className: U("".concat(Y, "-thumb"), j({}, "".concat(Y, "-thumb-moving"), C)),
    style: T(T({}, ae), h),
    onMouseDown: H
  }));
});
process.env.NODE_ENV !== "production" && (Pc.displayName = "ScrollBar");
var Z$ = 20;
function Wf() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e / t * e;
  return isNaN(n) && (n = 0), n = Math.max(n, Z$), Math.floor(n);
}
var Q$ = ["prefixCls", "className", "height", "itemHeight", "fullHeight", "style", "data", "children", "itemKey", "virtual", "direction", "scrollWidth", "component", "onScroll", "onVirtualScroll", "onVisibleChange", "innerProps", "extraRender", "styles", "showScrollBar"], J$ = [], eE = {
  overflowY: "auto",
  overflowAnchor: "none"
};
function tE(e, t) {
  var n = e.prefixCls, r = n === void 0 ? "rc-virtual-list" : n, o = e.className, a = e.height, i = e.itemHeight, l = e.fullHeight, s = l === void 0 ? !0 : l, c = e.style, u = e.data, f = e.children, m = e.itemKey, h = e.virtual, g = e.direction, p = e.scrollWidth, v = e.component, C = v === void 0 ? "div" : v, b = e.onScroll, x = e.onVirtualScroll, $ = e.onVisibleChange, y = e.innerProps, S = e.extraRender, w = e.styles, E = e.showScrollBar, O = E === void 0 ? "optional" : E, P = De(e, Q$), N = d.useCallback(function(ue) {
    return typeof m == "function" ? m(ue) : ue?.[m];
  }, [m]), R = U$(N), _ = G(R, 4), I = _[0], k = _[1], A = _[2], D = _[3], F = !!(h !== !1 && a && i), q = d.useMemo(function() {
    return Object.values(A.maps).reduce(function(ue, ge) {
      return ue + ge;
    }, 0);
  }, [A.id, A.maps]), K = F && u && (Math.max(i * u.length, q) > a || !!p), Q = g === "rtl", W = U(r, j({}, "".concat(r, "-rtl"), Q), o), L = u || J$, z = fe(), H = fe(), V = fe(), te = Ht(0), Y = G(te, 2), J = Y[0], ae = Y[1], le = Ht(0), X = G(le, 2), se = X[0], Z = X[1], oe = Ht(!1), ne = G(oe, 2), me = ne[0], ie = ne[1], ce = function() {
    ie(!0);
  }, we = function() {
    ie(!1);
  }, xe = {
    getKey: N
  };
  function Pe(ue) {
    ae(function(ge) {
      var Ae;
      typeof ue == "function" ? Ae = ue(ge) : Ae = ue;
      var ot = Bt(Ae);
      return z.current.scrollTop = ot, ot;
    });
  }
  var he = fe({
    start: 0,
    end: L.length
  }), re = fe(), Ce = V$(L, N), _e = G(Ce, 1), Ke = _e[0];
  re.current = Ke;
  var Le = d.useMemo(function() {
    if (!F)
      return {
        scrollHeight: void 0,
        start: 0,
        end: L.length - 1,
        offset: void 0
      };
    if (!K) {
      var ue;
      return {
        scrollHeight: ((ue = H.current) === null || ue === void 0 ? void 0 : ue.offsetHeight) || 0,
        start: 0,
        end: L.length - 1,
        offset: void 0
      };
    }
    for (var ge = 0, Ae, ot, gt, $n = L.length, Ut = 0; Ut < $n; Ut += 1) {
      var En = L[Ut], hr = N(En), On = A.get(hr), vn = ge + (On === void 0 ? i : On);
      vn >= J && Ae === void 0 && (Ae = Ut, ot = ge), vn > J + a && gt === void 0 && (gt = Ut), ge = vn;
    }
    return Ae === void 0 && (Ae = 0, ot = 0, gt = Math.ceil(a / i)), gt === void 0 && (gt = L.length - 1), gt = Math.min(gt + 1, L.length - 1), {
      scrollHeight: ge,
      start: Ae,
      end: gt,
      offset: ot
    };
  }, [K, F, J, L, D, a]), ze = Le.scrollHeight, Xe = Le.start, Oe = Le.end, Te = Le.offset;
  he.current.start = Xe, he.current.end = Oe, d.useLayoutEffect(function() {
    var ue = A.getRecord();
    if (ue.size === 1) {
      var ge = Array.from(ue.keys())[0], Ae = ue.get(ge), ot = L[Xe];
      if (ot && Ae === void 0) {
        var gt = N(ot);
        if (gt === ge) {
          var $n = A.get(ge), Ut = $n - i;
          Pe(function(En) {
            return En + Ut;
          });
        }
      }
    }
    A.resetRecord();
  }, [ze]);
  var Re = d.useState({
    width: 0,
    height: a
  }), ye = G(Re, 2), Me = ye[0], Fe = ye[1], Ne = function(ge) {
    Fe({
      width: ge.offsetWidth,
      height: ge.offsetHeight
    });
  }, et = fe(), Zt = fe(), fn = d.useMemo(function() {
    return Wf(Me.width, p);
  }, [Me.width, p]), wn = d.useMemo(function() {
    return Wf(Me.height, ze);
  }, [Me.height, ze]), mn = ze - a, Qt = fe(mn);
  Qt.current = mn;
  function Bt(ue) {
    var ge = ue;
    return Number.isNaN(Qt.current) || (ge = Math.min(ge, Qt.current)), ge = Math.max(ge, 0), ge;
  }
  var ct = J <= 0, Ye = J >= mn, Et = se <= 0, ht = se >= p, qe = Mp(ct, Ye, Et, ht), ke = function() {
    return {
      x: Q ? -se : se,
      y: J
    };
  }, Ze = fe(ke()), _t = bt(function(ue) {
    if (x) {
      var ge = T(T({}, ke()), ue);
      (Ze.current.x !== ge.x || Ze.current.y !== ge.y) && (x(ge), Ze.current = ge);
    }
  });
  function $e(ue, ge) {
    var Ae = ue;
    ge ? (Rs(function() {
      Z(Ae);
    }), _t()) : Pe(Ae);
  }
  function Ee(ue) {
    var ge = ue.currentTarget.scrollTop;
    ge !== J && Pe(ge), b?.(ue), _t();
  }
  var Qe = function(ge) {
    var Ae = ge, ot = p ? p - Me.width : 0;
    return Ae = Math.max(Ae, 0), Ae = Math.min(Ae, ot), Ae;
  }, Ct = bt(function(ue, ge) {
    ge ? (Rs(function() {
      Z(function(Ae) {
        var ot = Ae + (Q ? -ue : ue);
        return Qe(ot);
      });
    }), _t()) : Pe(function(Ae) {
      var ot = Ae + ue;
      return ot;
    });
  }), Ve = W$(F, ct, Ye, Et, ht, !!p, Ct), vt = G(Ve, 2), xt = vt[0], Pt = vt[1];
  K$(F, z, function(ue, ge, Ae, ot) {
    var gt = ot;
    return qe(ue, ge, Ae) ? !1 : !gt || !gt._virtualHandled ? (gt && (gt._virtualHandled = !0), xt({
      preventDefault: function() {
      },
      deltaX: ue ? ge : 0,
      deltaY: ue ? 0 : ge
    }), !0) : !1;
  }), X$(K, z, function(ue) {
    Pe(function(ge) {
      return ge + ue;
    });
  }), wt(function() {
    function ue(Ae) {
      var ot = ct && Ae.detail < 0, gt = Ye && Ae.detail > 0;
      F && !ot && !gt && Ae.preventDefault();
    }
    var ge = z.current;
    return ge.addEventListener("wheel", xt, {
      passive: !1
    }), ge.addEventListener("DOMMouseScroll", Pt, {
      passive: !0
    }), ge.addEventListener("MozMousePixelScroll", ue, {
      passive: !1
    }), function() {
      ge.removeEventListener("wheel", xt), ge.removeEventListener("DOMMouseScroll", Pt), ge.removeEventListener("MozMousePixelScroll", ue);
    };
  }, [F, ct, Ye]), wt(function() {
    if (p) {
      var ue = Qe(se);
      Z(ue), _t({
        x: ue
      });
    }
  }, [Me.width, p]);
  var Wt = function() {
    var ge, Ae;
    (ge = et.current) === null || ge === void 0 || ge.delayHidden(), (Ae = Zt.current) === null || Ae === void 0 || Ae.delayHidden();
  }, Gt = Y$(z, L, A, i, N, function() {
    return k(!0);
  }, Pe, Wt);
  d.useImperativeHandle(t, function() {
    return {
      nativeElement: V.current,
      getScrollInfo: ke,
      scrollTo: function(ge) {
        function Ae(ot) {
          return ot && Se(ot) === "object" && ("left" in ot || "top" in ot);
        }
        Ae(ge) ? (ge.left !== void 0 && Z(Qe(ge.left)), Gt(ge.top)) : Gt(ge);
      }
    };
  }), wt(function() {
    if ($) {
      var ue = L.slice(Xe, Oe + 1);
      $(ue, L);
    }
  }, [Xe, Oe, L]);
  var Jt = G$(L, N, A, i), qt = S?.({
    start: Xe,
    end: Oe,
    virtual: K,
    offsetX: se,
    offsetY: Te,
    rtl: Q,
    getSize: Jt
  }), ln = z$(L, Xe, Oe, p, se, I, f, xe), At = null;
  a && (At = T(j({}, s ? "height" : "maxHeight", a), eE), F && (At.overflowY = "hidden", p && (At.overflowX = "hidden"), me && (At.pointerEvents = "none")));
  var Fn = {};
  return Q && (Fn.dir = "rtl"), /* @__PURE__ */ d.createElement("div", ve({
    ref: V,
    style: T(T({}, c), {}, {
      position: "relative"
    }),
    className: W
  }, Fn, P), /* @__PURE__ */ d.createElement(gr, {
    onResize: Ne
  }, /* @__PURE__ */ d.createElement(C, {
    className: "".concat(r, "-holder"),
    style: At,
    ref: z,
    onScroll: Ee,
    onMouseEnter: Wt
  }, /* @__PURE__ */ d.createElement(Ip, {
    prefixCls: r,
    height: ze,
    offsetX: se,
    offsetY: Te,
    scrollWidth: p,
    onInnerResize: k,
    ref: H,
    innerProps: y,
    rtl: Q,
    extra: qt
  }, ln))), K && ze > a && /* @__PURE__ */ d.createElement(Pc, {
    ref: et,
    prefixCls: r,
    scrollOffset: J,
    scrollRange: ze,
    rtl: Q,
    onScroll: $e,
    onStartMove: ce,
    onStopMove: we,
    spinSize: wn,
    containerSize: Me.height,
    style: w?.verticalScrollBar,
    thumbStyle: w?.verticalScrollBarThumb,
    showScrollBar: O
  }), K && p > Me.width && /* @__PURE__ */ d.createElement(Pc, {
    ref: Zt,
    prefixCls: r,
    scrollOffset: se,
    scrollRange: p,
    rtl: Q,
    onScroll: $e,
    onStartMove: ce,
    onStopMove: we,
    spinSize: fn,
    containerSize: Me.width,
    horizontal: !0,
    style: w?.horizontalScrollBar,
    thumbStyle: w?.horizontalScrollBarThumb,
    showScrollBar: O
  }));
}
var Tp = /* @__PURE__ */ d.forwardRef(tE);
Tp.displayName = "List";
function Nc(e, t, n) {
  return U({
    [`${e}-status-success`]: t === "success",
    [`${e}-status-warning`]: t === "warning",
    [`${e}-status-error`]: t === "error",
    [`${e}-status-validating`]: t === "validating",
    [`${e}-has-feedback`]: n
  });
}
const bu = (e, t) => t || e, _p = (e, t, n) => {
  var r, o;
  const {
    variant: a,
    [e]: i
  } = d.useContext(Be), l = d.useContext(r2), s = i?.variant;
  let c;
  typeof t < "u" ? c = t : n === !1 ? c = "borderless" : c = (o = (r = l ?? s) !== null && r !== void 0 ? r : a) !== null && o !== void 0 ? o : "outlined";
  const u = By.includes(c);
  return [c, u];
};
var nE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, name: "search", theme: "outlined" }, rE = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: nE
  }));
}, yu = /* @__PURE__ */ d.forwardRef(rE);
process.env.NODE_ENV !== "production" && (yu.displayName = "SearchOutlined");
const oE = (e, t) => {
  typeof e?.addEventListener < "u" ? e.addEventListener("change", t) : typeof e?.addListener < "u" && e.addListener(t);
}, aE = (e, t) => {
  typeof e?.removeEventListener < "u" ? e.removeEventListener("change", t) : typeof e?.removeListener < "u" && e.removeListener(t);
};
function Ap(e) {
  var t = e.children, n = e.prefixCls, r = e.id, o = e.overlayInnerStyle, a = e.bodyClassName, i = e.className, l = e.style;
  return /* @__PURE__ */ d.createElement("div", {
    className: U("".concat(n, "-content"), i),
    style: l
  }, /* @__PURE__ */ d.createElement("div", {
    className: U("".concat(n, "-inner"), a),
    id: r,
    role: "tooltip",
    style: o
  }, typeof t == "function" ? t() : t));
}
var go = {
  shiftX: 64,
  adjustY: 1
}, po = {
  adjustX: 1,
  shiftY: !0
}, Mn = [0, 0], iE = {
  left: {
    points: ["cr", "cl"],
    overflow: po,
    offset: [-4, 0],
    targetOffset: Mn
  },
  right: {
    points: ["cl", "cr"],
    overflow: po,
    offset: [4, 0],
    targetOffset: Mn
  },
  top: {
    points: ["bc", "tc"],
    overflow: go,
    offset: [0, -4],
    targetOffset: Mn
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: go,
    offset: [0, 4],
    targetOffset: Mn
  },
  topLeft: {
    points: ["bl", "tl"],
    overflow: go,
    offset: [0, -4],
    targetOffset: Mn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: po,
    offset: [-4, 0],
    targetOffset: Mn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: go,
    offset: [0, -4],
    targetOffset: Mn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: po,
    offset: [4, 0],
    targetOffset: Mn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: go,
    offset: [0, 4],
    targetOffset: Mn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: po,
    offset: [4, 0],
    targetOffset: Mn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: go,
    offset: [0, 4],
    targetOffset: Mn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: po,
    offset: [-4, 0],
    targetOffset: Mn
  }
}, lE = ["overlayClassName", "trigger", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "prefixCls", "children", "onVisibleChange", "afterVisibleChange", "transitionName", "animation", "motion", "placement", "align", "destroyTooltipOnHide", "defaultVisible", "getTooltipContainer", "overlayInnerStyle", "arrowContent", "overlay", "id", "showArrow", "classNames", "styles"], sE = function(t, n) {
  var r = t.overlayClassName, o = t.trigger, a = o === void 0 ? ["hover"] : o, i = t.mouseEnterDelay, l = i === void 0 ? 0 : i, s = t.mouseLeaveDelay, c = s === void 0 ? 0.1 : s, u = t.overlayStyle, f = t.prefixCls, m = f === void 0 ? "rc-tooltip" : f, h = t.children, g = t.onVisibleChange, p = t.afterVisibleChange, v = t.transitionName, C = t.animation, b = t.motion, x = t.placement, $ = x === void 0 ? "right" : x, y = t.align, S = y === void 0 ? {} : y, w = t.destroyTooltipOnHide, E = w === void 0 ? !1 : w, O = t.defaultVisible, P = t.getTooltipContainer, N = t.overlayInnerStyle;
  t.arrowContent;
  var R = t.overlay, _ = t.id, I = t.showArrow, k = I === void 0 ? !0 : I, A = t.classNames, D = t.styles, F = De(t, lE), q = fu(_), K = fe(null);
  Ia(n, function() {
    return K.current;
  });
  var Q = T({}, F);
  "visible" in t && (Q.popupVisible = t.visible);
  var W = function() {
    return /* @__PURE__ */ d.createElement(Ap, {
      key: "content",
      prefixCls: m,
      id: q,
      bodyClassName: A?.body,
      overlayInnerStyle: T(T({}, N), D?.body)
    }, R);
  }, L = function() {
    var H = d.Children.only(h), V = H?.props || {}, te = T(T({}, V), {}, {
      "aria-describedby": R ? q : null
    });
    return /* @__PURE__ */ d.cloneElement(h, te);
  };
  return /* @__PURE__ */ d.createElement(hu, ve({
    popupClassName: U(r, A?.root),
    prefixCls: m,
    popup: W,
    action: a,
    builtinPlacements: iE,
    popupPlacement: $,
    ref: K,
    popupAlign: S,
    getPopupContainer: P,
    onPopupVisibleChange: g,
    afterPopupVisibleChange: p,
    popupTransitionName: v,
    popupAnimation: C,
    popupMotion: b,
    defaultPopupVisible: O,
    autoDestroy: E,
    mouseLeaveDelay: c,
    popupStyle: T(T({}, u), D?.root),
    mouseEnterDelay: l,
    arrow: k
  }, Q), L());
};
const cE = /* @__PURE__ */ xn(sE);
function jp(e) {
  const {
    sizePopupArrow: t,
    borderRadiusXS: n,
    borderRadiusOuter: r
  } = e, o = t / 2, a = 0, i = o, l = r * 1 / Math.sqrt(2), s = o - r * (1 - 1 / Math.sqrt(2)), c = o - n * (1 / Math.sqrt(2)), u = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)), f = 2 * o - c, m = u, h = 2 * o - l, g = s, p = 2 * o - a, v = i, C = o * Math.sqrt(2) + r * (Math.sqrt(2) - 2), b = r * (Math.sqrt(2) - 1), x = `polygon(${b}px 100%, 50% ${b}px, ${2 * o - b}px 100%, ${b}px 100%)`, $ = `path('M ${a} ${i} A ${r} ${r} 0 0 0 ${l} ${s} L ${c} ${u} A ${n} ${n} 0 0 1 ${f} ${m} L ${h} ${g} A ${r} ${r} 0 0 0 ${p} ${v} Z')`;
  return {
    arrowShadowWidth: C,
    arrowPath: $,
    arrowPolygon: x
  };
}
const uE = (e, t, n) => {
  const {
    sizePopupArrow: r,
    arrowPolygon: o,
    arrowPath: a,
    arrowShadowWidth: i,
    borderRadiusXS: l,
    calc: s
  } = e;
  return {
    pointerEvents: "none",
    width: r,
    height: r,
    overflow: "hidden",
    "&::before": {
      position: "absolute",
      bottom: 0,
      insetInlineStart: 0,
      width: r,
      height: s(r).div(2).equal(),
      background: t,
      clipPath: {
        _multi_value_: !0,
        value: [o, a]
      },
      content: '""'
    },
    "&::after": {
      content: '""',
      position: "absolute",
      width: i,
      height: i,
      bottom: 0,
      insetInline: 0,
      margin: "auto",
      borderRadius: {
        _skip_check_: !0,
        value: `0 0 ${ee(l)} 0`
      },
      transform: "translateY(50%) rotate(-135deg)",
      boxShadow: n,
      zIndex: 0,
      background: "transparent"
    }
  };
}, Fp = 8;
function Cu(e) {
  const {
    contentRadius: t,
    limitVerticalRadius: n
  } = e, r = t > 12 ? t + 2 : 12;
  return {
    arrowOffsetHorizontal: r,
    arrowOffsetVertical: n ? Fp : r
  };
}
function di(e, t) {
  return e ? t : {};
}
function Bp(e, t, n) {
  const {
    componentCls: r,
    boxShadowPopoverArrow: o,
    arrowOffsetVertical: a,
    arrowOffsetHorizontal: i
  } = e, {
    arrowDistance: l = 0,
    arrowPlacement: s = {
      left: !0,
      right: !0,
      top: !0,
      bottom: !0
    }
  } = n || {};
  return {
    [r]: Object.assign(Object.assign(Object.assign(Object.assign({
      // ============================ Basic ============================
      [`${r}-arrow`]: [Object.assign(Object.assign({
        position: "absolute",
        zIndex: 1,
        display: "block"
      }, uE(e, t, o)), {
        "&:before": {
          background: t
        }
      })]
    }, di(!!s.top, {
      [[`&-placement-top > ${r}-arrow`, `&-placement-topLeft > ${r}-arrow`, `&-placement-topRight > ${r}-arrow`].join(",")]: {
        bottom: l,
        transform: "translateY(100%) rotate(180deg)"
      },
      [`&-placement-top > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(100%) rotate(180deg)"
      },
      "&-placement-topLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-topRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ee(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), di(!!s.bottom, {
      [[`&-placement-bottom > ${r}-arrow`, `&-placement-bottomLeft > ${r}-arrow`, `&-placement-bottomRight > ${r}-arrow`].join(",")]: {
        top: l,
        transform: "translateY(-100%)"
      },
      [`&-placement-bottom > ${r}-arrow`]: {
        left: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateX(-50%) translateY(-100%)"
      },
      "&-placement-bottomLeft": {
        "--arrow-offset-horizontal": i,
        [`> ${r}-arrow`]: {
          left: {
            _skip_check_: !0,
            value: i
          }
        }
      },
      "&-placement-bottomRight": {
        "--arrow-offset-horizontal": `calc(100% - ${ee(i)})`,
        [`> ${r}-arrow`]: {
          right: {
            _skip_check_: !0,
            value: i
          }
        }
      }
    })), di(!!s.left, {
      [[`&-placement-left > ${r}-arrow`, `&-placement-leftTop > ${r}-arrow`, `&-placement-leftBottom > ${r}-arrow`].join(",")]: {
        right: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(100%) rotate(90deg)"
      },
      [`&-placement-left > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(100%) rotate(90deg)"
      },
      [`&-placement-leftTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-leftBottom > ${r}-arrow`]: {
        bottom: a
      }
    })), di(!!s.right, {
      [[`&-placement-right > ${r}-arrow`, `&-placement-rightTop > ${r}-arrow`, `&-placement-rightBottom > ${r}-arrow`].join(",")]: {
        left: {
          _skip_check_: !0,
          value: l
        },
        transform: "translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-right > ${r}-arrow`]: {
        top: {
          _skip_check_: !0,
          value: "50%"
        },
        transform: "translateY(-50%) translateX(-100%) rotate(-90deg)"
      },
      [`&-placement-rightTop > ${r}-arrow`]: {
        top: a
      },
      [`&-placement-rightBottom > ${r}-arrow`]: {
        bottom: a
      }
    }))
  };
}
function dE(e, t, n, r) {
  if (r === !1)
    return {
      adjustX: !1,
      adjustY: !1
    };
  const o = r && typeof r == "object" ? r : {}, a = {};
  switch (e) {
    case "top":
    case "bottom":
      a.shiftX = t.arrowOffsetHorizontal * 2 + n, a.shiftY = !0, a.adjustY = !0;
      break;
    case "left":
    case "right":
      a.shiftY = t.arrowOffsetVertical * 2 + n, a.shiftX = !0, a.adjustX = !0;
      break;
  }
  const i = Object.assign(Object.assign({}, a), o);
  return i.shiftX || (i.adjustX = !0), i.shiftY || (i.adjustY = !0), i;
}
const Gf = {
  left: {
    points: ["cr", "cl"]
  },
  right: {
    points: ["cl", "cr"]
  },
  top: {
    points: ["bc", "tc"]
  },
  bottom: {
    points: ["tc", "bc"]
  },
  topLeft: {
    points: ["bl", "tl"]
  },
  leftTop: {
    points: ["tr", "tl"]
  },
  topRight: {
    points: ["br", "tr"]
  },
  rightTop: {
    points: ["tl", "tr"]
  },
  bottomRight: {
    points: ["tr", "br"]
  },
  rightBottom: {
    points: ["bl", "br"]
  },
  bottomLeft: {
    points: ["tl", "bl"]
  },
  leftBottom: {
    points: ["br", "bl"]
  }
}, fE = {
  topLeft: {
    points: ["bl", "tc"]
  },
  leftTop: {
    points: ["tr", "cl"]
  },
  topRight: {
    points: ["br", "tc"]
  },
  rightTop: {
    points: ["tl", "cr"]
  },
  bottomRight: {
    points: ["tr", "bc"]
  },
  rightBottom: {
    points: ["bl", "cr"]
  },
  bottomLeft: {
    points: ["tl", "bc"]
  },
  leftBottom: {
    points: ["br", "cl"]
  }
}, mE = /* @__PURE__ */ new Set(["topLeft", "topRight", "bottomLeft", "bottomRight", "leftTop", "leftBottom", "rightTop", "rightBottom"]);
function kp(e) {
  const {
    arrowWidth: t,
    autoAdjustOverflow: n,
    arrowPointAtCenter: r,
    offset: o,
    borderRadius: a,
    visibleFirst: i
  } = e, l = t / 2, s = {}, c = Cu({
    contentRadius: a,
    limitVerticalRadius: !0
  });
  return Object.keys(Gf).forEach((u) => {
    const f = r && fE[u] || Gf[u], m = Object.assign(Object.assign({}, f), {
      offset: [0, 0],
      dynamicInset: !0
    });
    switch (s[u] = m, mE.has(u) && (m.autoArrow = !1), u) {
      case "top":
      case "topLeft":
      case "topRight":
        m.offset[1] = -l - o;
        break;
      case "bottom":
      case "bottomLeft":
      case "bottomRight":
        m.offset[1] = l + o;
        break;
      case "left":
      case "leftTop":
      case "leftBottom":
        m.offset[0] = -l - o;
        break;
      case "right":
      case "rightTop":
      case "rightBottom":
        m.offset[0] = l + o;
        break;
    }
    if (r)
      switch (u) {
        case "topLeft":
        case "bottomLeft":
          m.offset[0] = -c.arrowOffsetHorizontal - l;
          break;
        case "topRight":
        case "bottomRight":
          m.offset[0] = c.arrowOffsetHorizontal + l;
          break;
        case "leftTop":
        case "rightTop":
          m.offset[1] = -c.arrowOffsetHorizontal * 2 + l;
          break;
        case "leftBottom":
        case "rightBottom":
          m.offset[1] = c.arrowOffsetHorizontal * 2 - l;
          break;
      }
    m.overflow = dE(u, c, t, n), i && (m.htmlRegion = "visibleFirst");
  }), s;
}
const vE = (e) => {
  const {
    calc: t,
    componentCls: n,
    // ant-tooltip
    tooltipMaxWidth: r,
    tooltipColor: o,
    tooltipBg: a,
    tooltipBorderRadius: i,
    zIndexPopup: l,
    controlHeight: s,
    boxShadowSecondary: c,
    paddingSM: u,
    paddingXS: f,
    arrowOffsetHorizontal: m,
    sizePopupArrow: h
  } = e, g = t(i).add(h).add(m).equal(), p = t(i).mul(2).add(h).equal();
  return [
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign({}, pr(e)), {
        position: "absolute",
        zIndex: l,
        display: "block",
        width: "max-content",
        maxWidth: r,
        visibility: "visible",
        // When use `autoArrow`, origin will follow the arrow position
        "--valid-offset-x": "var(--arrow-offset-horizontal, var(--arrow-x))",
        transformOrigin: ["var(--valid-offset-x, 50%)", "var(--arrow-y, 50%)"].join(" "),
        "&-hidden": {
          display: "none"
        },
        "--antd-arrow-background-color": a,
        // Wrapper for the tooltip content
        [`${n}-inner`]: {
          minWidth: p,
          minHeight: s,
          padding: `${ee(e.calc(u).div(2).equal())} ${ee(f)}`,
          color: `var(--ant-tooltip-color, ${o})`,
          textAlign: "start",
          textDecoration: "none",
          wordWrap: "break-word",
          backgroundColor: a,
          borderRadius: i,
          boxShadow: c,
          boxSizing: "border-box"
        },
        // Align placement should have another min width
        [["&-placement-topLeft", "&-placement-topRight", "&-placement-bottomLeft", "&-placement-bottomRight"].join(",")]: {
          minWidth: g
        },
        // Limit left and right placement radius
        [["&-placement-left", "&-placement-leftTop", "&-placement-leftBottom", "&-placement-right", "&-placement-rightTop", "&-placement-rightBottom"].join(",")]: {
          [`${n}-inner`]: {
            borderRadius: e.min(i, Fp)
          }
        },
        [`${n}-content`]: {
          position: "relative"
        }
      }), Vv(e, (v, {
        darkColor: C
      }) => ({
        [`&${n}-${v}`]: {
          [`${n}-inner`]: {
            backgroundColor: C
          },
          [`${n}-arrow`]: {
            "--antd-arrow-background-color": C
          }
        }
      }))), {
        // RTL
        "&-rtl": {
          direction: "rtl"
        }
      })
    },
    // Arrow Style
    Bp(e, "var(--antd-arrow-background-color)"),
    // Pure Render
    {
      [`${n}-pure`]: {
        position: "relative",
        maxWidth: "none",
        margin: e.sizePopupArrow
      }
    }
  ];
}, gE = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 70
}, Cu({
  contentRadius: e.borderRadius,
  limitVerticalRadius: !0
})), jp($t(e, {
  borderRadiusOuter: Math.min(e.borderRadiusOuter, 4)
}))), Dp = (e, t = !0) => Vt("Tooltip", (r) => {
  const {
    borderRadius: o,
    colorTextLightSolid: a,
    colorBgSpotlight: i
  } = r, l = $t(r, {
    // default variables
    tooltipMaxWidth: 250,
    tooltipColor: a,
    tooltipBorderRadius: o,
    tooltipBg: i
  });
  return [vE(l), bl(r, "zoom-big-fast")];
}, gE, {
  resetStyle: !1,
  // Popover use Tooltip as internal component. We do not need to handle this.
  injectStyle: t
})(e), pE = Zr.map((e) => `${e}-inverse`), hE = ["success", "processing", "error", "default", "warning"];
function Lp(e, t = !0) {
  return t ? [].concat(de(pE), de(Zr)).includes(e) : Zr.includes(e);
}
function bE(e) {
  return hE.includes(e);
}
function zp(e, t) {
  const n = Lp(t), r = U({
    [`${e}-${t}`]: t && n
  }), o = {}, a = {}, i = hS(t).toRgb(), s = (0.299 * i.r + 0.587 * i.g + 0.114 * i.b) / 255 < 0.5 ? "#FFF" : "#000";
  return t && !n && (o.background = t, o["--ant-tooltip-color"] = s, a["--antd-arrow-background-color"] = t), {
    className: r,
    overlayStyle: o,
    arrowStyle: a
  };
}
const yE = (e) => {
  const {
    prefixCls: t,
    className: n,
    placement: r = "top",
    title: o,
    color: a,
    overlayInnerStyle: i
  } = e, {
    getPrefixCls: l
  } = d.useContext(Be), s = l("tooltip", t), [c, u, f] = Dp(s), m = zp(s, a), h = m.arrowStyle, g = Object.assign(Object.assign({}, i), m.overlayStyle), p = U(u, f, s, `${s}-pure`, `${s}-placement-${r}`, n, m.className);
  return c(/* @__PURE__ */ d.createElement("div", {
    className: p,
    style: h
  }, /* @__PURE__ */ d.createElement("div", {
    className: `${s}-arrow`
  }), /* @__PURE__ */ d.createElement(Ap, Object.assign({}, e, {
    className: u,
    prefixCls: s,
    overlayInnerStyle: g
  }), o)));
};
var CE = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const xE = /* @__PURE__ */ d.forwardRef((e, t) => {
  var n, r;
  const {
    prefixCls: o,
    openClassName: a,
    getTooltipContainer: i,
    color: l,
    overlayInnerStyle: s,
    children: c,
    afterOpenChange: u,
    afterVisibleChange: f,
    destroyTooltipOnHide: m,
    destroyOnHidden: h,
    arrow: g = !0,
    title: p,
    overlay: v,
    builtinPlacements: C,
    arrowPointAtCenter: b = !1,
    autoAdjustOverflow: x = !0,
    motion: $,
    getPopupContainer: y,
    placement: S = "top",
    mouseEnterDelay: w = 0.1,
    mouseLeaveDelay: E = 0.1,
    overlayStyle: O,
    rootClassName: P,
    overlayClassName: N,
    styles: R,
    classNames: _
  } = e, I = CE(e, ["prefixCls", "openClassName", "getTooltipContainer", "color", "overlayInnerStyle", "children", "afterOpenChange", "afterVisibleChange", "destroyTooltipOnHide", "destroyOnHidden", "arrow", "title", "overlay", "builtinPlacements", "arrowPointAtCenter", "autoAdjustOverflow", "motion", "getPopupContainer", "placement", "mouseEnterDelay", "mouseLeaveDelay", "overlayStyle", "rootClassName", "overlayClassName", "styles", "classNames"]), k = !!g, [, A] = jn(), {
    getPopupContainer: D,
    getPrefixCls: F,
    direction: q,
    className: K,
    style: Q,
    classNames: W,
    styles: L
  } = zo("tooltip"), z = Rt("Tooltip"), H = d.useRef(null), V = () => {
    var Oe;
    (Oe = H.current) === null || Oe === void 0 || Oe.forceAlign();
  };
  d.useImperativeHandle(t, () => {
    var Oe, Te;
    return {
      forceAlign: V,
      forcePopupAlign: () => {
        z.deprecated(!1, "forcePopupAlign", "forceAlign"), V();
      },
      nativeElement: (Oe = H.current) === null || Oe === void 0 ? void 0 : Oe.nativeElement,
      popupElement: (Te = H.current) === null || Te === void 0 ? void 0 : Te.popupElement
    };
  }), process.env.NODE_ENV !== "production" && ([["visible", "open"], ["defaultVisible", "defaultOpen"], ["onVisibleChange", "onOpenChange"], ["afterVisibleChange", "afterOpenChange"], ["destroyTooltipOnHide", "destroyOnHidden"], ["arrowPointAtCenter", "arrow={{ pointAtCenter: true }}"], ["overlayStyle", "styles={{ root: {} }}"], ["overlayInnerStyle", "styles={{ body: {} }}"], ["overlayClassName", 'classNames={{ root: "" }}']].forEach(([Oe, Te]) => {
    z.deprecated(!(Oe in e), Oe, Te);
  }), process.env.NODE_ENV !== "production" && z(!m || typeof m == "boolean", "usage", "`destroyTooltipOnHide` no need config `keepParent` anymore. Please use `boolean` value directly."), process.env.NODE_ENV !== "production" && z(!g || typeof g == "boolean" || !("arrowPointAtCenter" in g), "deprecated", "`arrowPointAtCenter` in `arrow` is deprecated. Please use `pointAtCenter` instead."));
  const [te, Y] = Vn(!1, {
    value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
    defaultValue: (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible
  }), J = !p && !v && p !== 0, ae = (Oe) => {
    var Te, Re;
    Y(J ? !1 : Oe), J || ((Te = e.onOpenChange) === null || Te === void 0 || Te.call(e, Oe), (Re = e.onVisibleChange) === null || Re === void 0 || Re.call(e, Oe));
  }, le = d.useMemo(() => {
    var Oe, Te;
    let Re = b;
    return typeof g == "object" && (Re = (Te = (Oe = g.pointAtCenter) !== null && Oe !== void 0 ? Oe : g.arrowPointAtCenter) !== null && Te !== void 0 ? Te : b), C || kp({
      arrowPointAtCenter: Re,
      autoAdjustOverflow: x,
      arrowWidth: k ? A.sizePopupArrow : 0,
      borderRadius: A.borderRadius,
      offset: A.marginXXS,
      visibleFirst: !0
    });
  }, [b, g, C, A]), X = d.useMemo(() => p === 0 ? p : v || p || "", [v, p]), se = /* @__PURE__ */ d.createElement(Ca, {
    space: !0
  }, typeof X == "function" ? X() : X), Z = F("tooltip", o), oe = F(), ne = e["data-popover-inject"];
  let me = te;
  !("open" in e) && !("visible" in e) && J && (me = !1);
  const ie = /* @__PURE__ */ d.isValidElement(c) && !sg(c) ? c : /* @__PURE__ */ d.createElement("span", null, c), ce = ie.props, we = !ce.className || typeof ce.className == "string" ? U(ce.className, a || `${Z}-open`) : ce.className, [xe, Pe, he] = Dp(Z, !ne), re = zp(Z, l), Ce = re.arrowStyle, _e = U(N, {
    [`${Z}-rtl`]: q === "rtl"
  }, re.className, P, Pe, he, K, W.root, _?.root), Ke = U(W.body, _?.body), [Le, ze] = ml("Tooltip", I.zIndex), Xe = /* @__PURE__ */ d.createElement(cE, Object.assign({}, I, {
    zIndex: Le,
    showArrow: k,
    placement: S,
    mouseEnterDelay: w,
    mouseLeaveDelay: E,
    prefixCls: Z,
    classNames: {
      root: _e,
      body: Ke
    },
    styles: {
      root: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, Ce), L.root), Q), O), R?.root),
      body: Object.assign(Object.assign(Object.assign(Object.assign({}, L.body), s), R?.body), re.overlayStyle)
    },
    getTooltipContainer: y || i || D,
    ref: H,
    builtinPlacements: le,
    overlay: se,
    visible: me,
    onVisibleChange: ae,
    afterVisibleChange: u ?? f,
    arrowContent: /* @__PURE__ */ d.createElement("span", {
      className: `${Z}-arrow-content`
    }),
    motion: {
      motionName: ya(oe, "zoom-big-fast", e.transitionName),
      motionDeadline: 1e3
    },
    // TODO: In the future, destroyTooltipOnHide in rc-tooltip needs to be upgrade to destroyOnHidden
    destroyTooltipOnHide: h ?? !!m
  }), me ? cr(ie, {
    className: we
  }) : ie);
  return xe(/* @__PURE__ */ d.createElement(Ba.Provider, {
    value: ze
  }, Xe));
}), Nl = xE;
process.env.NODE_ENV !== "production" && (Nl.displayName = "Tooltip");
Nl._InternalPanelDoNotUseOrYouWillBeFired = yE;
var SE = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z" } }] }, name: "left", theme: "outlined" }, wE = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: SE
  }));
}, Ki = /* @__PURE__ */ d.forwardRef(wE);
process.env.NODE_ENV !== "production" && (Ki.displayName = "LeftOutlined");
var $E = cn.ESC, EE = cn.TAB;
function OE(e) {
  var t = e.visible, n = e.triggerRef, r = e.onVisibleChange, o = e.autoFocus, a = e.overlayRef, i = d.useRef(!1), l = function() {
    if (t) {
      var f, m;
      (f = n.current) === null || f === void 0 || (m = f.focus) === null || m === void 0 || m.call(f), r?.(!1);
    }
  }, s = function() {
    var f;
    return (f = a.current) !== null && f !== void 0 && f.focus ? (a.current.focus(), i.current = !0, !0) : !1;
  }, c = function(f) {
    switch (f.keyCode) {
      case $E:
        l();
        break;
      case EE: {
        var m = !1;
        i.current || (m = s()), m ? f.preventDefault() : l();
        break;
      }
    }
  };
  d.useEffect(function() {
    return t ? (window.addEventListener("keydown", c), o && ft(s, 3), function() {
      window.removeEventListener("keydown", c), i.current = !1;
    }) : function() {
      i.current = !1;
    };
  }, [t]);
}
var PE = /* @__PURE__ */ xn(function(e, t) {
  var n = e.overlay, r = e.arrow, o = e.prefixCls, a = Ot(function() {
    var l;
    return typeof n == "function" ? l = n() : l = n, l;
  }, [n]), i = Jn(t, Jr(a));
  return /* @__PURE__ */ M.createElement(M.Fragment, null, r && /* @__PURE__ */ M.createElement("div", {
    className: "".concat(o, "-arrow")
  }), /* @__PURE__ */ M.cloneElement(a, {
    ref: _r(a) ? i : void 0
  }));
}), ho = {
  adjustX: 1,
  adjustY: 1
}, bo = [0, 0], NE = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: ho,
    offset: [0, -4],
    targetOffset: bo
  },
  top: {
    points: ["bc", "tc"],
    overflow: ho,
    offset: [0, -4],
    targetOffset: bo
  },
  topRight: {
    points: ["br", "tr"],
    overflow: ho,
    offset: [0, -4],
    targetOffset: bo
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: ho,
    offset: [0, 4],
    targetOffset: bo
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: ho,
    offset: [0, 4],
    targetOffset: bo
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: ho,
    offset: [0, 4],
    targetOffset: bo
  }
}, RE = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function IE(e, t) {
  var n, r = e.arrow, o = r === void 0 ? !1 : r, a = e.prefixCls, i = a === void 0 ? "rc-dropdown" : a, l = e.transitionName, s = e.animation, c = e.align, u = e.placement, f = u === void 0 ? "bottomLeft" : u, m = e.placements, h = m === void 0 ? NE : m, g = e.getPopupContainer, p = e.showAction, v = e.hideAction, C = e.overlayClassName, b = e.overlayStyle, x = e.visible, $ = e.trigger, y = $ === void 0 ? ["hover"] : $, S = e.autoFocus, w = e.overlay, E = e.children, O = e.onVisibleChange, P = De(e, RE), N = M.useState(), R = G(N, 2), _ = R[0], I = R[1], k = "visible" in e ? x : _, A = M.useRef(null), D = M.useRef(null), F = M.useRef(null);
  M.useImperativeHandle(t, function() {
    return A.current;
  });
  var q = function(Y) {
    I(Y), O?.(Y);
  };
  OE({
    visible: k,
    triggerRef: F,
    onVisibleChange: q,
    autoFocus: S,
    overlayRef: D
  });
  var K = function(Y) {
    var J = e.onOverlayClick;
    I(!1), J && J(Y);
  }, Q = function() {
    return /* @__PURE__ */ M.createElement(PE, {
      ref: D,
      overlay: w,
      prefixCls: i,
      arrow: o
    });
  }, W = function() {
    return typeof w == "function" ? Q : Q();
  }, L = function() {
    var Y = e.minOverlayWidthMatchTrigger, J = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? Y : !J;
  }, z = function() {
    var Y = e.openClassName;
    return Y !== void 0 ? Y : "".concat(i, "-open");
  }, H = /* @__PURE__ */ M.cloneElement(E, {
    className: U((n = E.props) === null || n === void 0 ? void 0 : n.className, k && z()),
    ref: _r(E) ? Jn(F, Jr(E)) : void 0
  }), V = v;
  return !V && y.indexOf("contextMenu") !== -1 && (V = ["click"]), /* @__PURE__ */ M.createElement(hu, ve({
    builtinPlacements: h
  }, P, {
    prefixCls: i,
    ref: A,
    popupClassName: U(C, j({}, "".concat(i, "-show-arrow"), o)),
    popupStyle: b,
    action: y,
    showAction: p,
    hideAction: V,
    popupPlacement: f,
    popupAlign: c,
    popupTransitionName: l,
    popupAnimation: s,
    popupVisible: k,
    stretch: L() ? "minWidth" : "",
    popup: W(),
    onPopupVisibleChange: q,
    onPopupClick: K,
    getPopupContainer: g
  }), H);
}
const ME = /* @__PURE__ */ M.forwardRef(IE), TE = (e) => typeof e != "object" && typeof e != "function" || e === null;
var Hp = /* @__PURE__ */ d.createContext(null);
function Vp(e, t) {
  return e === void 0 ? null : "".concat(e, "-").concat(t);
}
function Wp(e) {
  var t = d.useContext(Hp);
  return Vp(t, e);
}
var _E = ["children", "locked"], Wn = /* @__PURE__ */ d.createContext(null);
function AE(e, t) {
  var n = T({}, e);
  return Object.keys(t).forEach(function(r) {
    var o = t[r];
    o !== void 0 && (n[r] = o);
  }), n;
}
function Sa(e) {
  var t = e.children, n = e.locked, r = De(e, _E), o = d.useContext(Wn), a = Ta(function() {
    return AE(o, r);
  }, [o, r], function(i, l) {
    return !n && (i[0] !== l[0] || !Ur(i[1], l[1], !0));
  });
  return /* @__PURE__ */ d.createElement(Wn.Provider, {
    value: a
  }, t);
}
var jE = [], Gp = /* @__PURE__ */ d.createContext(null);
function Rl() {
  return d.useContext(Gp);
}
var qp = /* @__PURE__ */ d.createContext(jE);
function Go(e) {
  var t = d.useContext(qp);
  return d.useMemo(function() {
    return e !== void 0 ? [].concat(de(t), [e]) : t;
  }, [t, e]);
}
var Up = /* @__PURE__ */ d.createContext(null), xu = /* @__PURE__ */ d.createContext({});
function qf(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (cu(e)) {
    var n = e.nodeName.toLowerCase(), r = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(n) || // Editable element
      e.isContentEditable || // Anchor with href element
      n === "a" && !!e.getAttribute("href")
    ), o = e.getAttribute("tabindex"), a = Number(o), i = null;
    return o && !Number.isNaN(a) ? i = a : r && i === null && (i = 0), r && e.disabled && (i = null), i !== null && (i >= 0 || t && i < 0);
  }
  return !1;
}
function FE(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = de(e.querySelectorAll("*")).filter(function(r) {
    return qf(r, t);
  });
  return qf(e, t) && n.unshift(e), n;
}
var Rc = cn.LEFT, Ic = cn.RIGHT, Mc = cn.UP, Pi = cn.DOWN, Ni = cn.ENTER, Kp = cn.ESC, ea = cn.HOME, ta = cn.END, Uf = [Mc, Pi, Rc, Ic];
function BE(e, t, n, r) {
  var o, a = "prev", i = "next", l = "children", s = "parent";
  if (e === "inline" && r === Ni)
    return {
      inlineTrigger: !0
    };
  var c = j(j({}, Mc, a), Pi, i), u = j(j(j(j({}, Rc, n ? i : a), Ic, n ? a : i), Pi, l), Ni, l), f = j(j(j(j(j(j({}, Mc, a), Pi, i), Ni, l), Kp, s), Rc, n ? l : s), Ic, n ? s : l), m = {
    inline: c,
    horizontal: u,
    vertical: f,
    inlineSub: c,
    horizontalSub: f,
    verticalSub: f
  }, h = (o = m["".concat(e).concat(t ? "" : "Sub")]) === null || o === void 0 ? void 0 : o[r];
  switch (h) {
    case a:
      return {
        offset: -1,
        sibling: !0
      };
    case i:
      return {
        offset: 1,
        sibling: !0
      };
    case s:
      return {
        offset: -1,
        sibling: !1
      };
    case l:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function kE(e) {
  for (var t = e; t; ) {
    if (t.getAttribute("data-menu-list"))
      return t;
    t = t.parentElement;
  }
  return null;
}
function DE(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Su(e, t) {
  var n = FE(e, !0);
  return n.filter(function(r) {
    return t.has(r);
  });
}
function Kf(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var o = Su(e, t), a = o.length, i = o.findIndex(function(l) {
    return n === l;
  });
  return r < 0 ? i === -1 ? i = a - 1 : i -= 1 : r > 0 && (i += 1), i = (i + a) % a, o[i];
}
var Tc = function(t, n) {
  var r = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  return t.forEach(function(i) {
    var l = document.querySelector("[data-menu-id='".concat(Vp(n, i), "']"));
    l && (r.add(l), a.set(l, i), o.set(i, l));
  }), {
    elements: r,
    key2element: o,
    element2key: a
  };
};
function LE(e, t, n, r, o, a, i, l, s, c) {
  var u = d.useRef(), f = d.useRef();
  f.current = t;
  var m = function() {
    ft.cancel(u.current);
  };
  return d.useEffect(function() {
    return function() {
      m();
    };
  }, []), function(h) {
    var g = h.which;
    if ([].concat(Uf, [Ni, Kp, ea, ta]).includes(g)) {
      var p = a(), v = Tc(p, r), C = v, b = C.elements, x = C.key2element, $ = C.element2key, y = x.get(t), S = DE(y, b), w = $.get(S), E = BE(e, i(w, !0).length === 1, n, g);
      if (!E && g !== ea && g !== ta)
        return;
      (Uf.includes(g) || [ea, ta].includes(g)) && h.preventDefault();
      var O = function(D) {
        if (D) {
          var F = D, q = D.querySelector("a");
          q != null && q.getAttribute("href") && (F = q);
          var K = $.get(D);
          l(K), m(), u.current = ft(function() {
            f.current === K && F.focus();
          });
        }
      };
      if ([ea, ta].includes(g) || E.sibling || !S) {
        var P;
        !S || e === "inline" ? P = o.current : P = kE(S);
        var N, R = Su(P, b);
        g === ea ? N = R[0] : g === ta ? N = R[R.length - 1] : N = Kf(P, b, S, E.offset), O(N);
      } else if (E.inlineTrigger)
        s(w);
      else if (E.offset > 0)
        s(w, !0), m(), u.current = ft(function() {
          v = Tc(p, r);
          var A = S.getAttribute("aria-controls"), D = document.getElementById(A), F = Kf(D, v.elements);
          O(F);
        }, 5);
      else if (E.offset < 0) {
        var _ = i(w, !0), I = _[_.length - 2], k = x.get(I);
        s(I, !1), O(k);
      }
    }
    c?.(h);
  };
}
function zE(e) {
  Promise.resolve().then(e);
}
var wu = "__RC_UTIL_PATH_SPLIT__", Xf = function(t) {
  return t.join(wu);
}, HE = function(t) {
  return t.split(wu);
}, _c = "rc-menu-more";
function VE() {
  var e = d.useState({}), t = G(e, 2), n = t[1], r = fe(/* @__PURE__ */ new Map()), o = fe(/* @__PURE__ */ new Map()), a = d.useState([]), i = G(a, 2), l = i[0], s = i[1], c = fe(0), u = fe(!1), f = function() {
    u.current || n({});
  }, m = Er(function(x, $) {
    process.env.NODE_ENV !== "production" && rt(!r.current.has(x), "Duplicated key '".concat(x, "' used in Menu by path [").concat($.join(" > "), "]"));
    var y = Xf($);
    o.current.set(y, x), r.current.set(x, y), c.current += 1;
    var S = c.current;
    zE(function() {
      S === c.current && f();
    });
  }, []), h = Er(function(x, $) {
    var y = Xf($);
    o.current.delete(y), r.current.delete(x);
  }, []), g = Er(function(x) {
    s(x);
  }, []), p = Er(function(x, $) {
    var y = r.current.get(x) || "", S = HE(y);
    return $ && l.includes(S[0]) && S.unshift(_c), S;
  }, [l]), v = Er(function(x, $) {
    return x.filter(function(y) {
      return y !== void 0;
    }).some(function(y) {
      var S = p(y, !0);
      return S.includes($);
    });
  }, [p]), C = function() {
    var $ = de(r.current.keys());
    return l.length && $.push(_c), $;
  }, b = Er(function(x) {
    var $ = "".concat(r.current.get(x)).concat(wu), y = /* @__PURE__ */ new Set();
    return de(o.current.keys()).forEach(function(S) {
      S.startsWith($) && y.add(o.current.get(S));
    }), y;
  }, []);
  return d.useEffect(function() {
    return function() {
      u.current = !0;
    };
  }, []), {
    // Register
    registerPath: m,
    unregisterPath: h,
    refreshOverflowKeys: g,
    // Util
    isSubPathKey: v,
    getKeyPath: p,
    getKeys: C,
    getSubPathKeys: b
  };
}
function ia(e) {
  var t = d.useRef(e);
  t.current = e;
  var n = d.useCallback(function() {
    for (var r, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (r = t.current) === null || r === void 0 ? void 0 : r.call.apply(r, [t].concat(a));
  }, []);
  return e ? n : void 0;
}
var WE = Math.random().toFixed(5).toString().slice(2), Yf = 0;
function GE(e) {
  var t = Vn(e, {
    value: e
  }), n = G(t, 2), r = n[0], o = n[1];
  return d.useEffect(function() {
    Yf += 1;
    var a = process.env.NODE_ENV === "test" ? "test" : "".concat(WE, "-").concat(Yf);
    o("rc-menu-uuid-".concat(a));
  }, []), r;
}
function Xp(e, t, n, r) {
  var o = d.useContext(Wn), a = o.activeKey, i = o.onActive, l = o.onInactive, s = {
    active: a === e
  };
  return t || (s.onMouseEnter = function(c) {
    n?.({
      key: e,
      domEvent: c
    }), i(e);
  }, s.onMouseLeave = function(c) {
    r?.({
      key: e,
      domEvent: c
    }), l(e);
  }), s;
}
function Yp(e) {
  var t = d.useContext(Wn), n = t.mode, r = t.rtl, o = t.inlineIndent;
  if (n !== "inline")
    return null;
  var a = e;
  return r ? {
    paddingRight: a * o
  } : {
    paddingLeft: a * o
  };
}
function Zp(e) {
  var t = e.icon, n = e.props, r = e.children, o;
  return t === null || t === !1 ? null : (typeof t == "function" ? o = /* @__PURE__ */ d.createElement(t, T({}, n)) : typeof t != "boolean" && (o = t), o || r || null);
}
var qE = ["item"];
function Xi(e) {
  var t = e.item, n = De(e, qE);
  return Object.defineProperty(n, "item", {
    get: function() {
      return rt(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), t;
    }
  }), n;
}
var UE = ["title", "attribute", "elementRef"], KE = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], XE = ["active"], YE = /* @__PURE__ */ (function(e) {
  mr(n, e);
  var t = vr(n);
  function n() {
    return Mt(this, n), t.apply(this, arguments);
  }
  return Tt(n, [{
    key: "render",
    value: function() {
      var o = this.props, a = o.title, i = o.attribute, l = o.elementRef, s = De(o, UE), c = an(s, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return rt(!i, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ d.createElement(sr.Item, ve({}, i, {
        title: typeof a == "string" ? a : void 0
      }, c, {
        ref: l
      }));
    }
  }]), n;
})(d.Component), ZE = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.style, r = e.className, o = e.eventKey, a = e.warnKey, i = e.disabled, l = e.itemIcon, s = e.children, c = e.role, u = e.onMouseEnter, f = e.onMouseLeave, m = e.onClick, h = e.onKeyDown, g = e.onFocus, p = De(e, KE), v = Wp(o), C = d.useContext(Wn), b = C.prefixCls, x = C.onItemClick, $ = C.disabled, y = C.overflowDisabled, S = C.itemIcon, w = C.selectedKeys, E = C.onActive, O = d.useContext(xu), P = O._internalRenderMenuItem, N = "".concat(b, "-item"), R = d.useRef(), _ = d.useRef(), I = $ || i, k = Qr(t, _), A = Go(o);
  process.env.NODE_ENV !== "production" && a && rt(!1, "MenuItem should not leave undefined `key`.");
  var D = function(ae) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: de(A).reverse(),
      item: R.current,
      domEvent: ae
    };
  }, F = l || S, q = Xp(o, I, u, f), K = q.active, Q = De(q, XE), W = w.includes(o), L = Yp(A.length), z = function(ae) {
    if (!I) {
      var le = D(ae);
      m?.(Xi(le)), x(le);
    }
  }, H = function(ae) {
    if (h?.(ae), ae.which === cn.ENTER) {
      var le = D(ae);
      m?.(Xi(le)), x(le);
    }
  }, V = function(ae) {
    E(o), g?.(ae);
  }, te = {};
  e.role === "option" && (te["aria-selected"] = W);
  var Y = /* @__PURE__ */ d.createElement(YE, ve({
    ref: R,
    elementRef: k,
    role: c === null ? "none" : c || "menuitem",
    tabIndex: i ? null : -1,
    "data-menu-id": y && v ? null : v
  }, an(p, ["extra"]), Q, te, {
    component: "li",
    "aria-disabled": i,
    style: T(T({}, L), n),
    className: U(N, j(j(j({}, "".concat(N, "-active"), K), "".concat(N, "-selected"), W), "".concat(N, "-disabled"), I), r),
    onClick: z,
    onKeyDown: H,
    onFocus: V
  }), s, /* @__PURE__ */ d.createElement(Zp, {
    props: T(T({}, e), {}, {
      isSelected: W
    }),
    icon: F
  }));
  return P && (Y = P(Y, e, {
    selected: W
  })), Y;
});
function QE(e, t) {
  var n = e.eventKey, r = Rl(), o = Go(n);
  return d.useEffect(function() {
    if (r)
      return r.registerPath(n, o), function() {
        r.unregisterPath(n, o);
      };
  }, [o]), r ? null : /* @__PURE__ */ d.createElement(ZE, ve({}, e, {
    ref: t
  }));
}
const Il = /* @__PURE__ */ d.forwardRef(QE);
var JE = ["className", "children"], e5 = function(t, n) {
  var r = t.className, o = t.children, a = De(t, JE), i = d.useContext(Wn), l = i.prefixCls, s = i.mode, c = i.rtl;
  return /* @__PURE__ */ d.createElement("ul", ve({
    className: U(l, c && "".concat(l, "-rtl"), "".concat(l, "-sub"), "".concat(l, "-").concat(s === "inline" ? "inline" : "vertical"), r),
    role: "menu"
  }, a, {
    "data-menu-list": !0,
    ref: n
  }), o);
}, $u = /* @__PURE__ */ d.forwardRef(e5);
$u.displayName = "SubMenuList";
function Eu(e, t) {
  return Ir(e).map(function(n, r) {
    if (/* @__PURE__ */ d.isValidElement(n)) {
      var o, a, i = n.key, l = (o = (a = n.props) === null || a === void 0 ? void 0 : a.eventKey) !== null && o !== void 0 ? o : i, s = l == null;
      s && (l = "tmp_key-".concat([].concat(de(t), [r]).join("-")));
      var c = {
        key: l,
        eventKey: l
      };
      return process.env.NODE_ENV !== "production" && s && (c.warnKey = !0), /* @__PURE__ */ d.cloneElement(n, c);
    }
    return n;
  });
}
var nn = {
  adjustX: 1,
  adjustY: 1
}, t5 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: nn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: nn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: nn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: nn
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: nn
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: nn
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: nn
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: nn
  }
}, n5 = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: nn
  },
  topRight: {
    points: ["br", "tr"],
    overflow: nn
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: nn
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: nn
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: nn
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: nn
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: nn
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: nn
  }
};
function Qp(e, t, n) {
  if (t)
    return t;
  if (n)
    return n[e] || n.other;
}
var r5 = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function o5(e) {
  var t = e.prefixCls, n = e.visible, r = e.children, o = e.popup, a = e.popupStyle, i = e.popupClassName, l = e.popupOffset, s = e.disabled, c = e.mode, u = e.onVisibleChange, f = d.useContext(Wn), m = f.getPopupContainer, h = f.rtl, g = f.subMenuOpenDelay, p = f.subMenuCloseDelay, v = f.builtinPlacements, C = f.triggerSubMenuAction, b = f.forceSubMenuRender, x = f.rootClassName, $ = f.motion, y = f.defaultMotions, S = d.useState(!1), w = G(S, 2), E = w[0], O = w[1], P = T(h ? T({}, n5) : T({}, t5), v), N = r5[c], R = Qp(c, $, y), _ = d.useRef(R);
  c !== "inline" && (_.current = R);
  var I = T(T({}, _.current), {}, {
    leavedClassName: "".concat(t, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), k = d.useRef();
  return d.useEffect(function() {
    return k.current = ft(function() {
      O(n);
    }), function() {
      ft.cancel(k.current);
    };
  }, [n]), /* @__PURE__ */ d.createElement(hu, {
    prefixCls: t,
    popupClassName: U("".concat(t, "-popup"), j({}, "".concat(t, "-rtl"), h), i, x),
    stretch: c === "horizontal" ? "minWidth" : null,
    getPopupContainer: m,
    builtinPlacements: P,
    popupPlacement: N,
    popupVisible: E,
    popup: o,
    popupStyle: a,
    popupAlign: l && {
      offset: l
    },
    action: s ? [] : [C],
    mouseEnterDelay: g,
    mouseLeaveDelay: p,
    onPopupVisibleChange: u,
    forceRender: b,
    popupMotion: I,
    fresh: !0
  }, r);
}
function a5(e) {
  var t = e.id, n = e.open, r = e.keyPath, o = e.children, a = "inline", i = d.useContext(Wn), l = i.prefixCls, s = i.forceSubMenuRender, c = i.motion, u = i.defaultMotions, f = i.mode, m = d.useRef(!1);
  m.current = f === a;
  var h = d.useState(!m.current), g = G(h, 2), p = g[0], v = g[1], C = m.current ? n : !1;
  d.useEffect(function() {
    m.current && v(!1);
  }, [f]);
  var b = T({}, Qp(a, c, u));
  r.length > 1 && (b.motionAppear = !1);
  var x = b.onVisibleChanged;
  return b.onVisibleChanged = function($) {
    return !m.current && !$ && v(!0), x?.($);
  }, p ? null : /* @__PURE__ */ d.createElement(Sa, {
    mode: a,
    locked: !m.current
  }, /* @__PURE__ */ d.createElement(jr, ve({
    visible: C
  }, b, {
    forceRender: s,
    removeOnLeave: !1,
    leavedClassName: "".concat(l, "-hidden")
  }), function($) {
    var y = $.className, S = $.style;
    return /* @__PURE__ */ d.createElement($u, {
      id: t,
      className: y,
      style: S
    }, o);
  }));
}
var i5 = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], l5 = ["active"], s5 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.style, r = e.className, o = e.title, a = e.eventKey, i = e.warnKey, l = e.disabled, s = e.internalPopupClose, c = e.children, u = e.itemIcon, f = e.expandIcon, m = e.popupClassName, h = e.popupOffset, g = e.popupStyle, p = e.onClick, v = e.onMouseEnter, C = e.onMouseLeave, b = e.onTitleClick, x = e.onTitleMouseEnter, $ = e.onTitleMouseLeave, y = De(e, i5), S = Wp(a), w = d.useContext(Wn), E = w.prefixCls, O = w.mode, P = w.openKeys, N = w.disabled, R = w.overflowDisabled, _ = w.activeKey, I = w.selectedKeys, k = w.itemIcon, A = w.expandIcon, D = w.onItemClick, F = w.onOpenChange, q = w.onActive, K = d.useContext(xu), Q = K._internalRenderSubMenuItem, W = d.useContext(Up), L = W.isSubPathKey, z = Go(), H = "".concat(E, "-submenu"), V = N || l, te = d.useRef(), Y = d.useRef();
  process.env.NODE_ENV !== "production" && i && rt(!1, "SubMenu should not leave undefined `key`.");
  var J = u ?? k, ae = f ?? A, le = P.includes(a), X = !R && le, se = L(I, a), Z = Xp(a, V, x, $), oe = Z.active, ne = De(Z, l5), me = d.useState(!1), ie = G(me, 2), ce = ie[0], we = ie[1], xe = function(Ne) {
    V || we(Ne);
  }, Pe = function(Ne) {
    xe(!0), v?.({
      key: a,
      domEvent: Ne
    });
  }, he = function(Ne) {
    xe(!1), C?.({
      key: a,
      domEvent: Ne
    });
  }, re = d.useMemo(function() {
    return oe || (O !== "inline" ? ce || L([_], a) : !1);
  }, [O, oe, _, ce, a, L]), Ce = Yp(z.length), _e = function(Ne) {
    V || (b?.({
      key: a,
      domEvent: Ne
    }), O === "inline" && F(a, !le));
  }, Ke = ia(function(Fe) {
    p?.(Xi(Fe)), D(Fe);
  }), Le = function(Ne) {
    O !== "inline" && F(a, Ne);
  }, ze = function() {
    q(a);
  }, Xe = S && "".concat(S, "-popup"), Oe = d.useMemo(function() {
    return /* @__PURE__ */ d.createElement(Zp, {
      icon: O !== "horizontal" ? ae : void 0,
      props: T(T({}, e), {}, {
        isOpen: X,
        // [Legacy] Not sure why need this mark
        isSubMenu: !0
      })
    }, /* @__PURE__ */ d.createElement("i", {
      className: "".concat(H, "-arrow")
    }));
  }, [O, ae, e, X, H]), Te = /* @__PURE__ */ d.createElement("div", ve({
    role: "menuitem",
    style: Ce,
    className: "".concat(H, "-title"),
    tabIndex: V ? null : -1,
    ref: te,
    title: typeof o == "string" ? o : null,
    "data-menu-id": R && S ? null : S,
    "aria-expanded": X,
    "aria-haspopup": !0,
    "aria-controls": Xe,
    "aria-disabled": V,
    onClick: _e,
    onFocus: ze
  }, ne), o, Oe), Re = d.useRef(O);
  if (O !== "inline" && z.length > 1 ? Re.current = "vertical" : Re.current = O, !R) {
    var ye = Re.current;
    Te = /* @__PURE__ */ d.createElement(o5, {
      mode: ye,
      prefixCls: H,
      visible: !s && X && O !== "inline",
      popupClassName: m,
      popupOffset: h,
      popupStyle: g,
      popup: /* @__PURE__ */ d.createElement(
        Sa,
        {
          mode: ye === "horizontal" ? "vertical" : ye
        },
        /* @__PURE__ */ d.createElement($u, {
          id: Xe,
          ref: Y
        }, c)
      ),
      disabled: V,
      onVisibleChange: Le
    }, Te);
  }
  var Me = /* @__PURE__ */ d.createElement(sr.Item, ve({
    ref: t,
    role: "none"
  }, y, {
    component: "li",
    style: n,
    className: U(H, "".concat(H, "-").concat(O), r, j(j(j(j({}, "".concat(H, "-open"), X), "".concat(H, "-active"), re), "".concat(H, "-selected"), se), "".concat(H, "-disabled"), V)),
    onMouseEnter: Pe,
    onMouseLeave: he
  }), Te, !R && /* @__PURE__ */ d.createElement(a5, {
    id: Xe,
    open: X,
    keyPath: z
  }, c));
  return Q && (Me = Q(Me, e, {
    selected: se,
    active: re,
    open: X,
    disabled: V
  })), /* @__PURE__ */ d.createElement(Sa, {
    onItemClick: Ke,
    mode: O === "horizontal" ? "vertical" : O,
    itemIcon: J,
    expandIcon: ae
  }, Me);
}), Ga = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, o = Go(n), a = Eu(r, o), i = Rl();
  d.useEffect(function() {
    if (i)
      return i.registerPath(n, o), function() {
        i.unregisterPath(n, o);
      };
  }, [o]);
  var l;
  return i ? l = a : l = /* @__PURE__ */ d.createElement(s5, ve({
    ref: t
  }, e), a), /* @__PURE__ */ d.createElement(qp.Provider, {
    value: o
  }, l);
});
process.env.NODE_ENV !== "production" && (Ga.displayName = "SubMenu");
function Ou(e) {
  var t = e.className, n = e.style, r = d.useContext(Wn), o = r.prefixCls, a = Rl();
  return a ? null : /* @__PURE__ */ d.createElement("li", {
    role: "separator",
    className: U("".concat(o, "-item-divider"), t),
    style: n
  });
}
var c5 = ["className", "title", "eventKey", "children"], u5 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.className, r = e.title;
  e.eventKey;
  var o = e.children, a = De(e, c5), i = d.useContext(Wn), l = i.prefixCls, s = "".concat(l, "-item-group");
  return /* @__PURE__ */ d.createElement("li", ve({
    ref: t,
    role: "presentation"
  }, a, {
    onClick: function(u) {
      return u.stopPropagation();
    },
    className: U(s, n)
  }), /* @__PURE__ */ d.createElement("div", {
    role: "presentation",
    className: "".concat(s, "-title"),
    title: typeof r == "string" ? r : void 0
  }, r), /* @__PURE__ */ d.createElement("ul", {
    role: "group",
    className: "".concat(s, "-list")
  }, o));
}), Ml = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e.eventKey, r = e.children, o = Go(n), a = Eu(r, o), i = Rl();
  return i ? a : /* @__PURE__ */ d.createElement(u5, ve({
    ref: t
  }, an(e, ["warnKey"])), a);
});
process.env.NODE_ENV !== "production" && (Ml.displayName = "MenuItemGroup");
var d5 = ["label", "children", "key", "type", "extra"];
function Ac(e, t, n) {
  var r = t.item, o = t.group, a = t.submenu, i = t.divider;
  return (e || []).map(function(l, s) {
    if (l && Se(l) === "object") {
      var c = l, u = c.label, f = c.children, m = c.key, h = c.type, g = c.extra, p = De(c, d5), v = m ?? "tmp-".concat(s);
      return f || h === "group" ? h === "group" ? /* @__PURE__ */ d.createElement(o, ve({
        key: v
      }, p, {
        title: u
      }), Ac(f, t, n)) : /* @__PURE__ */ d.createElement(a, ve({
        key: v
      }, p, {
        title: u
      }), Ac(f, t, n)) : h === "divider" ? /* @__PURE__ */ d.createElement(i, ve({
        key: v
      }, p)) : /* @__PURE__ */ d.createElement(r, ve({
        key: v
      }, p, {
        extra: g
      }), u, (!!g || g === 0) && /* @__PURE__ */ d.createElement("span", {
        className: "".concat(n, "-item-extra")
      }, g));
    }
    return null;
  }).filter(function(l) {
    return l;
  });
}
function Zf(e, t, n, r, o) {
  var a = e, i = T({
    divider: Ou,
    item: Il,
    group: Ml,
    submenu: Ga
  }, r);
  return t && (a = Ac(t, i, o)), Eu(a, n);
}
var f5 = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem", "_internalComponents"], zr = [], m5 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n, r = e, o = r.prefixCls, a = o === void 0 ? "rc-menu" : o, i = r.rootClassName, l = r.style, s = r.className, c = r.tabIndex, u = c === void 0 ? 0 : c, f = r.items, m = r.children, h = r.direction, g = r.id, p = r.mode, v = p === void 0 ? "vertical" : p, C = r.inlineCollapsed, b = r.disabled, x = r.disabledOverflow, $ = r.subMenuOpenDelay, y = $ === void 0 ? 0.1 : $, S = r.subMenuCloseDelay, w = S === void 0 ? 0.1 : S, E = r.forceSubMenuRender, O = r.defaultOpenKeys, P = r.openKeys, N = r.activeKey, R = r.defaultActiveFirst, _ = r.selectable, I = _ === void 0 ? !0 : _, k = r.multiple, A = k === void 0 ? !1 : k, D = r.defaultSelectedKeys, F = r.selectedKeys, q = r.onSelect, K = r.onDeselect, Q = r.inlineIndent, W = Q === void 0 ? 24 : Q, L = r.motion, z = r.defaultMotions, H = r.triggerSubMenuAction, V = H === void 0 ? "hover" : H, te = r.builtinPlacements, Y = r.itemIcon, J = r.expandIcon, ae = r.overflowedIndicator, le = ae === void 0 ? "..." : ae, X = r.overflowedIndicatorPopupClassName, se = r.getPopupContainer, Z = r.onClick, oe = r.onOpenChange, ne = r.onKeyDown, me = r.openAnimation, ie = r.openTransitionName, ce = r._internalRenderMenuItem, we = r._internalRenderSubMenuItem, xe = r._internalComponents, Pe = De(r, f5), he = d.useMemo(function() {
    return [Zf(m, f, zr, xe, a), Zf(m, f, zr, {}, a)];
  }, [m, f, xe]), re = G(he, 2), Ce = re[0], _e = re[1], Ke = d.useState(!1), Le = G(Ke, 2), ze = Le[0], Xe = Le[1], Oe = d.useRef(), Te = GE(g), Re = h === "rtl";
  process.env.NODE_ENV !== "production" && rt(!me && !ie, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var ye = Vn(O, {
    value: P,
    postState: function(Je) {
      return Je || zr;
    }
  }), Me = G(ye, 2), Fe = Me[0], Ne = Me[1], et = function(Je) {
    var ut = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function Kt() {
      Ne(Je), oe?.(Je);
    }
    ut ? Rs(Kt) : Kt();
  }, Zt = d.useState(Fe), fn = G(Zt, 2), wn = fn[0], mn = fn[1], Qt = d.useRef(!1), Bt = d.useMemo(function() {
    return (v === "inline" || v === "vertical") && C ? ["vertical", C] : [v, !1];
  }, [v, C]), ct = G(Bt, 2), Ye = ct[0], Et = ct[1], ht = Ye === "inline", qe = d.useState(Ye), ke = G(qe, 2), Ze = ke[0], _t = ke[1], $e = d.useState(Et), Ee = G($e, 2), Qe = Ee[0], Ct = Ee[1];
  d.useEffect(function() {
    _t(Ye), Ct(Et), Qt.current && (ht ? Ne(wn) : et(zr));
  }, [Ye, Et]);
  var Ve = d.useState(0), vt = G(Ve, 2), xt = vt[0], Pt = vt[1], Wt = xt >= Ce.length - 1 || Ze !== "horizontal" || x;
  d.useEffect(function() {
    ht && mn(Fe);
  }, [Fe]), d.useEffect(function() {
    return Qt.current = !0, function() {
      Qt.current = !1;
    };
  }, []);
  var Gt = VE(), Jt = Gt.registerPath, qt = Gt.unregisterPath, ln = Gt.refreshOverflowKeys, At = Gt.isSubPathKey, Fn = Gt.getKeyPath, ue = Gt.getKeys, ge = Gt.getSubPathKeys, Ae = d.useMemo(function() {
    return {
      registerPath: Jt,
      unregisterPath: qt
    };
  }, [Jt, qt]), ot = d.useMemo(function() {
    return {
      isSubPathKey: At
    };
  }, [At]);
  d.useEffect(function() {
    ln(Wt ? zr : Ce.slice(xt + 1).map(function(pt) {
      return pt.key;
    }));
  }, [xt, Wt]);
  var gt = Vn(N || R && ((n = Ce[0]) === null || n === void 0 ? void 0 : n.key), {
    value: N
  }), $n = G(gt, 2), Ut = $n[0], En = $n[1], hr = ia(function(pt) {
    En(pt);
  }), On = ia(function() {
    En(void 0);
  });
  Ia(t, function() {
    return {
      list: Oe.current,
      focus: function(Je) {
        var ut, Kt = ue(), Lt = Tc(Kt, Te), Cr = Lt.elements, Dr = Lt.key2element, oo = Lt.element2key, ao = Su(Oe.current, Cr), io = Ut ?? (ao[0] ? oo.get(ao[0]) : (ut = Ce.find(function(Lr) {
          return !Lr.props.disabled;
        })) === null || ut === void 0 ? void 0 : ut.key), nr = Dr.get(io);
        if (io && nr) {
          var sn;
          nr == null || (sn = nr.focus) === null || sn === void 0 || sn.call(nr, Je);
        }
      }
    };
  });
  var vn = Vn(D || [], {
    value: F,
    // Legacy convert key to array
    postState: function(Je) {
      return Array.isArray(Je) ? Je : Je == null ? zr : [Je];
    }
  }), br = G(vn, 2), Pn = br[0], Br = br[1], yr = function(Je) {
    if (I) {
      var ut = Je.key, Kt = Pn.includes(ut), Lt;
      A ? Kt ? Lt = Pn.filter(function(Dr) {
        return Dr !== ut;
      }) : Lt = [].concat(de(Pn), [ut]) : Lt = [ut], Br(Lt);
      var Cr = T(T({}, Je), {}, {
        selectedKeys: Lt
      });
      Kt ? K?.(Cr) : q?.(Cr);
    }
    !A && Fe.length && Ze !== "inline" && et(zr);
  }, gn = ia(function(pt) {
    Z?.(Xi(pt)), yr(pt);
  }), Bn = ia(function(pt, Je) {
    var ut = Fe.filter(function(Lt) {
      return Lt !== pt;
    });
    if (Je)
      ut.push(pt);
    else if (Ze !== "inline") {
      var Kt = ge(pt);
      ut = ut.filter(function(Lt) {
        return !Kt.has(Lt);
      });
    }
    Ur(Fe, ut, !0) || et(ut, !0);
  }), Gn = function(Je, ut) {
    var Kt = ut ?? !Fe.includes(Je);
    Bn(Je, Kt);
  }, qn = LE(Ze, Ut, Re, Te, Oe, ue, Fn, En, Gn, ne);
  d.useEffect(function() {
    Xe(!0);
  }, []);
  var kr = d.useMemo(function() {
    return {
      _internalRenderMenuItem: ce,
      _internalRenderSubMenuItem: we
    };
  }, [ce, we]), Ko = Ze !== "horizontal" || x ? Ce : (
    // Need wrap for overflow dropdown that do not response for open
    Ce.map(function(pt, Je) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ d.createElement(Sa, {
          key: pt.key,
          overflowDisabled: Je > xt
        }, pt)
      );
    })
  ), ro = /* @__PURE__ */ d.createElement(sr, ve({
    id: g,
    ref: Oe,
    prefixCls: "".concat(a, "-overflow"),
    component: "ul",
    itemComponent: Il,
    className: U(a, "".concat(a, "-root"), "".concat(a, "-").concat(Ze), s, j(j({}, "".concat(a, "-inline-collapsed"), Qe), "".concat(a, "-rtl"), Re), i),
    dir: h,
    style: l,
    role: "menu",
    tabIndex: u,
    data: Ko,
    renderRawItem: function(Je) {
      return Je;
    },
    renderRawRest: function(Je) {
      var ut = Je.length, Kt = ut ? Ce.slice(-ut) : null;
      return /* @__PURE__ */ d.createElement(Ga, {
        eventKey: _c,
        title: le,
        disabled: Wt,
        internalPopupClose: ut === 0,
        popupClassName: X
      }, Kt);
    },
    maxCount: Ze !== "horizontal" || x ? sr.INVALIDATE : sr.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(Je) {
      Pt(Je);
    },
    onKeyDown: qn
  }, Pe));
  return /* @__PURE__ */ d.createElement(xu.Provider, {
    value: kr
  }, /* @__PURE__ */ d.createElement(Hp.Provider, {
    value: Te
  }, /* @__PURE__ */ d.createElement(Sa, {
    prefixCls: a,
    rootClassName: i,
    mode: Ze,
    openKeys: Fe,
    rtl: Re,
    disabled: b,
    motion: ze ? L : null,
    defaultMotions: ze ? z : null,
    activeKey: Ut,
    onActive: hr,
    onInactive: On,
    selectedKeys: Pn,
    inlineIndent: W,
    subMenuOpenDelay: y,
    subMenuCloseDelay: w,
    forceSubMenuRender: E,
    builtinPlacements: te,
    triggerSubMenuAction: V,
    getPopupContainer: se,
    itemIcon: Y,
    expandIcon: J,
    onItemClick: gn,
    onOpenChange: Bn
  }, /* @__PURE__ */ d.createElement(Up.Provider, {
    value: ot
  }, ro), /* @__PURE__ */ d.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ d.createElement(Gp.Provider, {
    value: Ae
  }, _e)))));
}), qa = m5;
qa.Item = Il;
qa.SubMenu = Ga;
qa.ItemGroup = Ml;
qa.Divider = Ou;
var v5 = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "bars", theme: "outlined" }, g5 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: v5
  }));
}, Jp = /* @__PURE__ */ d.forwardRef(g5);
process.env.NODE_ENV !== "production" && (Jp.displayName = "BarsOutlined");
const p5 = /* @__PURE__ */ d.createContext({
  siderHook: {
    addSider: () => null,
    removeSider: () => null
  }
}), h5 = (e) => {
  const {
    antCls: t,
    // .ant
    componentCls: n,
    // .ant-layout
    colorText: r,
    footerBg: o,
    headerHeight: a,
    headerPadding: i,
    headerColor: l,
    footerPadding: s,
    fontSize: c,
    bodyBg: u,
    headerBg: f
  } = e;
  return {
    [n]: {
      display: "flex",
      flex: "auto",
      flexDirection: "column",
      /* fix firefox can't set height smaller than content on flex item */
      minHeight: 0,
      background: u,
      "&, *": {
        boxSizing: "border-box"
      },
      [`&${n}-has-sider`]: {
        flexDirection: "row",
        [`> ${n}, > ${n}-content`]: {
          // https://segmentfault.com/a/1190000019498300
          width: 0
        }
      },
      [`${n}-header, &${n}-footer`]: {
        flex: "0 0 auto"
      },
      // RTL
      "&-rtl": {
        direction: "rtl"
      }
    },
    // ==================== Header ====================
    [`${n}-header`]: {
      height: a,
      padding: i,
      color: l,
      lineHeight: ee(a),
      background: f,
      // Other components/menu/style/index.less line:686
      // Integration with header element so menu items have the same height
      [`${t}-menu`]: {
        lineHeight: "inherit"
      }
    },
    // ==================== Footer ====================
    [`${n}-footer`]: {
      padding: s,
      color: r,
      fontSize: c,
      background: o
    },
    // =================== Content ====================
    [`${n}-content`]: {
      flex: "auto",
      color: r,
      // fix firefox can't set height smaller than content on flex item
      minHeight: 0
    }
  };
}, eh = (e) => {
  const {
    colorBgLayout: t,
    controlHeight: n,
    controlHeightLG: r,
    colorText: o,
    controlHeightSM: a,
    marginXXS: i,
    colorTextLightSolid: l,
    colorBgContainer: s
  } = e, c = r * 1.25;
  return {
    // Deprecated
    colorBgHeader: "#001529",
    colorBgBody: t,
    colorBgTrigger: "#002140",
    bodyBg: t,
    headerBg: "#001529",
    headerHeight: n * 2,
    headerPadding: `0 ${c}px`,
    headerColor: o,
    footerPadding: `${a}px ${c}px`,
    footerBg: t,
    siderBg: "#001529",
    triggerHeight: r + i * 2,
    triggerBg: "#002140",
    triggerColor: l,
    zeroTriggerWidth: r,
    zeroTriggerHeight: r,
    lightSiderBg: s,
    lightTriggerBg: s,
    lightTriggerColor: o
  };
}, th = [["colorBgBody", "bodyBg"], ["colorBgHeader", "headerBg"], ["colorBgTrigger", "triggerBg"]];
Vt("Layout", h5, eh, {
  deprecatedTokens: th
});
const b5 = (e) => {
  const {
    componentCls: t,
    siderBg: n,
    motionDurationMid: r,
    motionDurationSlow: o,
    antCls: a,
    triggerHeight: i,
    triggerColor: l,
    triggerBg: s,
    headerHeight: c,
    zeroTriggerWidth: u,
    zeroTriggerHeight: f,
    borderRadiusLG: m,
    lightSiderBg: h,
    lightTriggerColor: g,
    lightTriggerBg: p,
    bodyBg: v
  } = e;
  return {
    [t]: {
      position: "relative",
      // fix firefox can't set width smaller than content on flex item
      minWidth: 0,
      background: n,
      transition: `all ${r}, background 0s`,
      "&-has-trigger": {
        paddingBottom: i
      },
      "&-right": {
        order: 1
      },
      [`${t}-children`]: {
        height: "100%",
        // Hack for fixing margin collapse bug
        // https://github.com/ant-design/ant-design/issues/7967
        // solution from https://stackoverflow.com/a/33132624/3040605
        marginTop: -0.1,
        paddingTop: 0.1,
        [`${a}-menu${a}-menu-inline-collapsed`]: {
          width: "auto"
        }
      },
      [`&-zero-width ${t}-children`]: {
        overflow: "hidden"
      },
      [`${t}-trigger`]: {
        position: "fixed",
        bottom: 0,
        zIndex: 1,
        height: i,
        color: l,
        lineHeight: ee(i),
        textAlign: "center",
        background: s,
        cursor: "pointer",
        transition: `all ${r}`
      },
      [`${t}-zero-width-trigger`]: {
        position: "absolute",
        top: c,
        insetInlineEnd: e.calc(u).mul(-1).equal(),
        zIndex: 1,
        width: u,
        height: f,
        color: l,
        fontSize: e.fontSizeXL,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: n,
        borderRadius: `0 ${ee(m)} ${ee(m)} 0`,
        cursor: "pointer",
        transition: `background ${o} ease`,
        "&::after": {
          position: "absolute",
          inset: 0,
          background: "transparent",
          transition: `all ${o}`,
          content: '""'
        },
        "&:hover::after": {
          background: "rgba(255, 255, 255, 0.2)"
        },
        "&-right": {
          insetInlineStart: e.calc(u).mul(-1).equal(),
          borderRadius: `${ee(m)} 0 0 ${ee(m)}`
        }
      },
      // Light
      "&-light": {
        background: h,
        [`${t}-trigger`]: {
          color: g,
          background: p
        },
        [`${t}-zero-width-trigger`]: {
          color: g,
          background: p,
          border: `1px solid ${v}`,
          // Safe to modify to any other color
          borderInlineStart: 0
        }
      }
    }
  };
}, y5 = Vt(["Layout", "Sider"], b5, eh, {
  deprecatedTokens: th
});
var C5 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Qf = {
  xs: "479.98px",
  sm: "575.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1599.98px"
}, x5 = (e) => !Number.isNaN(Number.parseFloat(e)) && Number.isFinite(Number(e)), Pu = /* @__PURE__ */ d.createContext({}), S5 = /* @__PURE__ */ (() => {
  let e = 0;
  return (t = "") => (e += 1, `${t}${e}`);
})(), w5 = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    trigger: o,
    children: a,
    defaultCollapsed: i = !1,
    theme: l = "dark",
    style: s = {},
    collapsible: c = !1,
    reverseArrow: u = !1,
    width: f = 200,
    collapsedWidth: m = 80,
    zeroWidthTriggerStyle: h,
    breakpoint: g,
    onCollapse: p,
    onBreakpoint: v
  } = e, C = C5(e, ["prefixCls", "className", "trigger", "children", "defaultCollapsed", "theme", "style", "collapsible", "reverseArrow", "width", "collapsedWidth", "zeroWidthTriggerStyle", "breakpoint", "onCollapse", "onBreakpoint"]), {
    siderHook: b
  } = Ge(p5), [x, $] = Ht("collapsed" in e ? e.collapsed : i), [y, S] = Ht(!1);
  yt(() => {
    "collapsed" in e && $(e.collapsed);
  }, [e.collapsed]);
  const w = (Y, J) => {
    "collapsed" in e || $(Y), p?.(Y, J);
  }, {
    getPrefixCls: E,
    direction: O
  } = Ge(Be), P = E("layout-sider", n), [N, R, _] = y5(P), I = fe(null);
  I.current = (Y) => {
    S(Y.matches), v?.(Y.matches), x !== Y.matches && w(Y.matches, "responsive");
  }, yt(() => {
    function Y(ae) {
      var le;
      return (le = I.current) === null || le === void 0 ? void 0 : le.call(I, ae);
    }
    let J;
    return typeof window?.matchMedia < "u" && g && g in Qf && (J = window.matchMedia(`screen and (max-width: ${Qf[g]})`), oE(J, Y), Y(J)), () => {
      aE(J, Y);
    };
  }, [g]), yt(() => {
    const Y = S5("ant-sider-");
    return b.addSider(Y), () => b.removeSider(Y);
  }, []);
  const k = () => {
    w(!x, "clickTrigger");
  }, A = an(C, ["collapsed"]), D = x ? m : f, F = x5(D) ? `${D}px` : String(D), q = Number.parseFloat(String(m || 0)) === 0 ? /* @__PURE__ */ d.createElement("span", {
    onClick: k,
    className: U(`${P}-zero-width-trigger`, `${P}-zero-width-trigger-${u ? "right" : "left"}`),
    style: h
  }, o || /* @__PURE__ */ d.createElement(Jp, null)) : null, K = O === "rtl" == !u, L = {
    expanded: K ? /* @__PURE__ */ d.createElement(Wi, null) : /* @__PURE__ */ d.createElement(Ki, null),
    collapsed: K ? /* @__PURE__ */ d.createElement(Ki, null) : /* @__PURE__ */ d.createElement(Wi, null)
  }[x ? "collapsed" : "expanded"], z = o !== null ? q || /* @__PURE__ */ d.createElement("div", {
    className: `${P}-trigger`,
    onClick: k,
    style: {
      width: F
    }
  }, o || L) : null, H = Object.assign(Object.assign({}, s), {
    flex: `0 0 ${F}`,
    maxWidth: F,
    minWidth: F,
    width: F
  }), V = U(P, `${P}-${l}`, {
    [`${P}-collapsed`]: !!x,
    [`${P}-has-trigger`]: c && o !== null && !q,
    [`${P}-below`]: !!y,
    [`${P}-zero-width`]: Number.parseFloat(F) === 0
  }, r, R, _), te = d.useMemo(() => ({
    siderCollapsed: x
  }), [x]);
  return N(/* @__PURE__ */ d.createElement(Pu.Provider, {
    value: te
  }, /* @__PURE__ */ d.createElement("aside", Object.assign({
    className: V
  }, A, {
    style: H,
    ref: t
  }), /* @__PURE__ */ d.createElement("div", {
    className: `${P}-children`
  }, a), c || y && q ? z : null)));
});
process.env.NODE_ENV !== "production" && (w5.displayName = "Sider");
var $5 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z" } }] }, name: "ellipsis", theme: "outlined" }, E5 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: $5
  }));
}, Nu = /* @__PURE__ */ d.forwardRef(E5);
process.env.NODE_ENV !== "production" && (Nu.displayName = "EllipsisOutlined");
const Yi = /* @__PURE__ */ Rr({
  prefixCls: "",
  firstLevel: !0,
  inlineCollapsed: !1
});
var O5 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const nh = (e) => {
  const {
    prefixCls: t,
    className: n,
    dashed: r
  } = e, o = O5(e, ["prefixCls", "className", "dashed"]), {
    getPrefixCls: a
  } = d.useContext(Be), i = a("menu", t), l = U({
    [`${i}-item-divider-dashed`]: !!r
  }, n);
  return /* @__PURE__ */ d.createElement(Ou, Object.assign({
    className: l
  }, o));
}, rh = (e) => {
  var t;
  const {
    className: n,
    children: r,
    icon: o,
    title: a,
    danger: i,
    extra: l
  } = e, {
    prefixCls: s,
    firstLevel: c,
    direction: u,
    disableMenuItemTitleTooltip: f,
    inlineCollapsed: m
  } = d.useContext(Yi), h = (x) => {
    const $ = r?.[0], y = /* @__PURE__ */ d.createElement("span", {
      className: U(`${s}-title-content`, {
        [`${s}-title-content-with-extra`]: !!l || l === 0
      })
    }, r);
    return (!o || /* @__PURE__ */ d.isValidElement(r) && r.type === "span") && r && x && c && typeof $ == "string" ? /* @__PURE__ */ d.createElement("div", {
      className: `${s}-inline-collapsed-noicon`
    }, $.charAt(0)) : y;
  }, {
    siderCollapsed: g
  } = d.useContext(Pu);
  let p = a;
  typeof a > "u" ? p = c ? r : "" : a === !1 && (p = "");
  const v = {
    title: p
  };
  !g && !m && (v.title = null, v.open = !1);
  const C = Ir(r).length;
  let b = /* @__PURE__ */ d.createElement(Il, Object.assign({}, an(e, ["title", "icon", "danger"]), {
    className: U({
      [`${s}-item-danger`]: i,
      [`${s}-item-only-child`]: (o ? C + 1 : C) === 1
    }, n),
    title: typeof a == "string" ? a : void 0
  }), cr(o, {
    className: U(/* @__PURE__ */ d.isValidElement(o) ? (t = o.props) === null || t === void 0 ? void 0 : t.className : void 0, `${s}-item-icon`)
  }), h(m));
  return f || (b = /* @__PURE__ */ d.createElement(Nl, Object.assign({}, v, {
    placement: u === "rtl" ? "left" : "right",
    classNames: {
      root: `${s}-inline-collapsed-tooltip`
    }
  }), b)), b;
};
var P5 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Zi = /* @__PURE__ */ d.createContext(null), N5 = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    children: n
  } = e, r = P5(e, ["children"]), o = d.useContext(Zi), a = d.useMemo(() => Object.assign(Object.assign({}, o), r), [
    o,
    r.prefixCls,
    // restProps.expandIcon, Not mark as deps since this is a ReactNode
    r.mode,
    r.selectable,
    r.rootClassName
    // restProps.validator, Not mark as deps since this is a function
  ]), i = A0(n), l = Qr(t, i ? Jr(n) : null);
  return /* @__PURE__ */ d.createElement(Zi.Provider, {
    value: a
  }, /* @__PURE__ */ d.createElement(Ca, {
    space: !0
  }, i ? /* @__PURE__ */ d.cloneElement(n, {
    ref: l
  }) : n));
}), R5 = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    horizontalLineHeight: r,
    colorSplit: o,
    lineWidth: a,
    lineType: i,
    itemPaddingInline: l
  } = e;
  return {
    [`${t}-horizontal`]: {
      lineHeight: r,
      border: 0,
      borderBottom: `${ee(a)} ${i} ${o}`,
      boxShadow: "none",
      "&::after": {
        display: "block",
        clear: "both",
        height: 0,
        content: '"\\20"'
      },
      // ======================= Item =======================
      [`${t}-item, ${t}-submenu`]: {
        position: "relative",
        display: "inline-block",
        verticalAlign: "bottom",
        paddingInline: l
      },
      [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
        backgroundColor: "transparent"
      },
      [`${t}-item, ${t}-submenu-title`]: {
        transition: [`border-color ${n}`, `background ${n}`].join(",")
      },
      // ===================== Sub Menu =====================
      [`${t}-submenu-arrow`]: {
        display: "none"
      }
    }
  };
}, I5 = ({
  componentCls: e,
  menuArrowOffset: t,
  calc: n
}) => ({
  [`${e}-rtl`]: {
    direction: "rtl"
  },
  [`${e}-submenu-rtl`]: {
    transformOrigin: "100% 0"
  },
  // Vertical Arrow
  [`${e}-rtl${e}-vertical,
    ${e}-submenu-rtl ${e}-vertical`]: {
    [`${e}-submenu-arrow`]: {
      "&::before": {
        transform: `rotate(-45deg) translateY(${ee(n(t).mul(-1).equal())})`
      },
      "&::after": {
        transform: `rotate(45deg) translateY(${ee(t)})`
      }
    }
  }
}), Jf = (e) => zv(e), em = (e, t) => {
  const {
    componentCls: n,
    itemColor: r,
    itemSelectedColor: o,
    subMenuItemSelectedColor: a,
    groupTitleColor: i,
    itemBg: l,
    subMenuItemBg: s,
    itemSelectedBg: c,
    activeBarHeight: u,
    activeBarWidth: f,
    activeBarBorderWidth: m,
    motionDurationSlow: h,
    motionEaseInOut: g,
    motionEaseOut: p,
    itemPaddingInline: v,
    motionDurationMid: C,
    itemHoverColor: b,
    lineType: x,
    colorSplit: $,
    // Disabled
    itemDisabledColor: y,
    // Danger
    dangerItemColor: S,
    dangerItemHoverColor: w,
    dangerItemSelectedColor: E,
    dangerItemActiveBg: O,
    dangerItemSelectedBg: P,
    // Bg
    popupBg: N,
    itemHoverBg: R,
    itemActiveBg: _,
    menuSubMenuBg: I,
    // Horizontal
    horizontalItemSelectedColor: k,
    horizontalItemSelectedBg: A,
    horizontalItemBorderRadius: D,
    horizontalItemHoverBg: F
  } = e;
  return {
    [`${n}-${t}, ${n}-${t} > ${n}`]: {
      color: r,
      background: l,
      [`&${n}-root:focus-visible`]: Object.assign({}, Jf(e)),
      // ======================== Item ========================
      [`${n}-item`]: {
        "&-group-title, &-extra": {
          color: i
        }
      },
      [`${n}-submenu-selected > ${n}-submenu-title`]: {
        color: a
      },
      [`${n}-item, ${n}-submenu-title`]: {
        color: r,
        [`&:not(${n}-item-disabled):focus-visible`]: Object.assign({}, Jf(e))
      },
      // Disabled
      [`${n}-item-disabled, ${n}-submenu-disabled`]: {
        color: `${y} !important`
      },
      // Hover
      [`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
        [`&:hover, > ${n}-submenu-title:hover`]: {
          color: b
        }
      },
      [`&:not(${n}-horizontal)`]: {
        [`${n}-item:not(${n}-item-selected)`]: {
          "&:hover": {
            backgroundColor: R
          },
          "&:active": {
            backgroundColor: _
          }
        },
        [`${n}-submenu-title`]: {
          "&:hover": {
            backgroundColor: R
          },
          "&:active": {
            backgroundColor: _
          }
        }
      },
      // Danger - only Item has
      [`${n}-item-danger`]: {
        color: S,
        [`&${n}-item:hover`]: {
          [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
            color: w
          }
        },
        [`&${n}-item:active`]: {
          background: O
        }
      },
      [`${n}-item a`]: {
        "&, &:hover": {
          color: "inherit"
        }
      },
      [`${n}-item-selected`]: {
        color: o,
        // Danger
        [`&${n}-item-danger`]: {
          color: E
        },
        "a, a:hover": {
          color: "inherit"
        }
      },
      [`& ${n}-item-selected`]: {
        backgroundColor: c,
        // Danger
        [`&${n}-item-danger`]: {
          backgroundColor: P
        }
      },
      [`&${n}-submenu > ${n}`]: {
        backgroundColor: I
      },
      // ===== 设置浮层的颜色 =======
      // ！dark 模式会被popupBg 会被rest 为 darkPopupBg
      [`&${n}-popup > ${n}`]: {
        backgroundColor: N
      },
      [`&${n}-submenu-popup > ${n}`]: {
        backgroundColor: N
      },
      // ===== 设置浮层的颜色 end =======
      // ====================== Horizontal ======================
      [`&${n}-horizontal`]: Object.assign(Object.assign({}, t === "dark" ? {
        borderBottom: 0
      } : {}), {
        [`> ${n}-item, > ${n}-submenu`]: {
          top: m,
          marginTop: e.calc(m).mul(-1).equal(),
          marginBottom: 0,
          borderRadius: D,
          "&::after": {
            position: "absolute",
            insetInline: v,
            bottom: 0,
            borderBottom: `${ee(u)} solid transparent`,
            transition: `border-color ${h} ${g}`,
            content: '""'
          },
          "&:hover, &-active, &-open": {
            background: F,
            "&::after": {
              borderBottomWidth: u,
              borderBottomColor: k
            }
          },
          "&-selected": {
            color: k,
            backgroundColor: A,
            "&:hover": {
              backgroundColor: A
            },
            "&::after": {
              borderBottomWidth: u,
              borderBottomColor: k
            }
          }
        }
      }),
      // ================== Inline & Vertical ===================
      //
      [`&${n}-root`]: {
        [`&${n}-inline, &${n}-vertical`]: {
          borderInlineEnd: `${ee(m)} ${x} ${$}`
        }
      },
      // ======================== Inline ========================
      [`&${n}-inline`]: {
        // Sub
        [`${n}-sub${n}-inline`]: {
          background: s
        },
        [`${n}-item`]: {
          position: "relative",
          "&::after": {
            position: "absolute",
            insetBlock: 0,
            insetInlineEnd: 0,
            borderInlineEnd: `${ee(f)} solid ${o}`,
            transform: "scaleY(0.0001)",
            opacity: 0,
            transition: [`transform ${C} ${p}`, `opacity ${C} ${p}`].join(","),
            content: '""'
          },
          // Danger
          [`&${n}-item-danger`]: {
            "&::after": {
              borderInlineEndColor: E
            }
          }
        },
        [`${n}-selected, ${n}-item-selected`]: {
          "&::after": {
            transform: "scaleY(1)",
            opacity: 1,
            transition: [`transform ${C} ${g}`, `opacity ${C} ${g}`].join(",")
          }
        }
      }
    }
  };
}, tm = (e) => {
  const {
    componentCls: t,
    itemHeight: n,
    itemMarginInline: r,
    padding: o,
    menuArrowSize: a,
    marginXS: i,
    itemMarginBlock: l,
    itemWidth: s,
    itemPaddingInline: c
  } = e, u = e.calc(a).add(o).add(i).equal();
  return {
    [`${t}-item`]: {
      position: "relative",
      overflow: "hidden"
    },
    [`${t}-item, ${t}-submenu-title`]: {
      height: n,
      lineHeight: ee(n),
      paddingInline: c,
      overflow: "hidden",
      textOverflow: "ellipsis",
      marginInline: r,
      marginBlock: l,
      width: s
    },
    [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
      height: n,
      lineHeight: ee(n)
    },
    [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: {
      paddingInlineEnd: u
    }
  };
}, M5 = (e) => {
  const {
    componentCls: t,
    iconCls: n,
    itemHeight: r,
    colorTextLightSolid: o,
    dropdownWidth: a,
    controlHeightLG: i,
    motionEaseOut: l,
    paddingXL: s,
    itemMarginInline: c,
    fontSizeLG: u,
    motionDurationFast: f,
    motionDurationSlow: m,
    paddingXS: h,
    boxShadowSecondary: g,
    collapsedWidth: p,
    collapsedIconSize: v
  } = e, C = {
    height: r,
    lineHeight: ee(r),
    listStylePosition: "inside",
    listStyleType: "disc"
  };
  return [
    {
      [t]: {
        "&-inline, &-vertical": Object.assign({
          [`&${t}-root`]: {
            boxShadow: "none"
          }
        }, tm(e))
      },
      [`${t}-submenu-popup`]: {
        [`${t}-vertical`]: Object.assign(Object.assign({}, tm(e)), {
          boxShadow: g
        })
      }
    },
    // Vertical only
    {
      [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
        minWidth: a,
        maxHeight: `calc(100vh - ${ee(e.calc(i).mul(2.5).equal())})`,
        padding: "0",
        overflow: "hidden",
        borderInlineEnd: 0,
        // https://github.com/ant-design/ant-design/issues/22244
        // https://github.com/ant-design/ant-design/issues/26812
        "&:not([class*='-active'])": {
          overflowX: "hidden",
          overflowY: "auto"
        }
      }
    },
    // Inline Only
    {
      [`${t}-inline`]: {
        width: "100%",
        // Motion enhance for first level
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu-title`]: {
            display: "flex",
            alignItems: "center",
            transition: [`border-color ${m}`, `background ${m}`, `padding ${f} ${l}`].join(","),
            [`> ${t}-title-content`]: {
              flex: "auto",
              minWidth: 0,
              overflow: "hidden",
              textOverflow: "ellipsis"
            },
            "> *": {
              flex: "none"
            }
          }
        },
        // >>>>> Sub
        [`${t}-sub${t}-inline`]: {
          padding: 0,
          border: 0,
          borderRadius: 0,
          boxShadow: "none",
          [`& > ${t}-submenu > ${t}-submenu-title`]: C,
          [`& ${t}-item-group-title`]: {
            paddingInlineStart: s
          }
        },
        // >>>>> Item
        [`${t}-item`]: C
      }
    },
    // Inline Collapse Only
    {
      [`${t}-inline-collapsed`]: {
        width: p,
        [`&${t}-root`]: {
          [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
            [`> ${t}-inline-collapsed-noicon`]: {
              fontSize: u,
              textAlign: "center"
            }
          }
        },
        [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
          insetInlineStart: 0,
          paddingInline: `calc(50% - ${ee(e.calc(v).div(2).equal())} - ${ee(c)})`,
          textOverflow: "clip",
          [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: {
            opacity: 0
          },
          [`${t}-item-icon, ${n}`]: {
            margin: 0,
            fontSize: v,
            lineHeight: ee(r),
            "+ span": {
              display: "inline-block",
              opacity: 0
            }
          }
        },
        [`${t}-item-icon, ${n}`]: {
          display: "inline-block"
        },
        "&-tooltip": {
          pointerEvents: "none",
          [`${t}-item-icon, ${n}`]: {
            display: "none"
          },
          "a, a:hover": {
            color: o
          }
        },
        [`${t}-item-group-title`]: Object.assign(Object.assign({}, i1), {
          paddingInline: h
        })
      }
    }
  ];
}, nm = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    motionDurationMid: r,
    motionEaseInOut: o,
    motionEaseOut: a,
    iconCls: i,
    iconSize: l,
    iconMarginInlineEnd: s
  } = e;
  return {
    // >>>>> Item
    [`${t}-item, ${t}-submenu-title`]: {
      position: "relative",
      display: "block",
      margin: 0,
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: [`border-color ${n}`, `background ${n}`, `padding calc(${n} + 0.1s) ${o}`].join(","),
      [`${t}-item-icon, ${i}`]: {
        minWidth: l,
        fontSize: l,
        transition: [`font-size ${r} ${a}`, `margin ${n} ${o}`, `color ${n}`].join(","),
        "+ span": {
          marginInlineStart: s,
          opacity: 1,
          transition: [`opacity ${n} ${o}`, `margin ${n}`, `color ${n}`].join(",")
        }
      },
      [`${t}-item-icon`]: Object.assign({}, nu()),
      [`&${t}-item-only-child`]: {
        [`> ${i}, > ${t}-item-icon`]: {
          marginInlineEnd: 0
        }
      }
    },
    // Disabled state sets text to gray and nukes hover/tab effects
    [`${t}-item-disabled, ${t}-submenu-disabled`]: {
      background: "none !important",
      cursor: "not-allowed",
      "&::after": {
        borderColor: "transparent !important"
      },
      a: {
        color: "inherit !important",
        cursor: "not-allowed",
        pointerEvents: "none"
      },
      [`> ${t}-submenu-title`]: {
        color: "inherit !important",
        cursor: "not-allowed"
      }
    }
  };
}, rm = (e) => {
  const {
    componentCls: t,
    motionDurationSlow: n,
    motionEaseInOut: r,
    borderRadius: o,
    menuArrowSize: a,
    menuArrowOffset: i
  } = e;
  return {
    [`${t}-submenu`]: {
      "&-expand-icon, &-arrow": {
        position: "absolute",
        top: "50%",
        insetInlineEnd: e.margin,
        width: a,
        color: "currentcolor",
        transform: "translateY(-50%)",
        transition: `transform ${n} ${r}, opacity ${n}`
      },
      "&-arrow": {
        // →
        "&::before, &::after": {
          position: "absolute",
          width: e.calc(a).mul(0.6).equal(),
          height: e.calc(a).mul(0.15).equal(),
          backgroundColor: "currentcolor",
          borderRadius: o,
          transition: [`background ${n} ${r}`, `transform ${n} ${r}`, `top ${n} ${r}`, `color ${n} ${r}`].join(","),
          content: '""'
        },
        "&::before": {
          transform: `rotate(45deg) translateY(${ee(e.calc(i).mul(-1).equal())})`
        },
        "&::after": {
          transform: `rotate(-45deg) translateY(${ee(i)})`
        }
      }
    }
  };
}, T5 = (e) => {
  const {
    antCls: t,
    componentCls: n,
    fontSize: r,
    motionDurationSlow: o,
    motionDurationMid: a,
    motionEaseInOut: i,
    paddingXS: l,
    padding: s,
    colorSplit: c,
    lineWidth: u,
    zIndexPopup: f,
    borderRadiusLG: m,
    subMenuItemBorderRadius: h,
    menuArrowSize: g,
    menuArrowOffset: p,
    lineType: v,
    groupTitleLineHeight: C,
    groupTitleFontSize: b
  } = e;
  return [
    // Misc
    {
      "": {
        [n]: Object.assign(Object.assign({}, ki()), {
          // Hidden
          "&-hidden": {
            display: "none"
          }
        })
      },
      [`${n}-submenu-hidden`]: {
        display: "none"
      }
    },
    {
      [n]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pr(e)), ki()), {
        marginBottom: 0,
        paddingInlineStart: 0,
        // Override default ul/ol
        fontSize: r,
        lineHeight: 0,
        listStyle: "none",
        outline: "none",
        // Magic cubic here but smooth transition
        transition: `width ${o} cubic-bezier(0.2, 0, 0, 1) 0s`,
        "ul, ol": {
          margin: 0,
          padding: 0,
          listStyle: "none"
        },
        // Overflow ellipsis
        "&-overflow": {
          display: "flex",
          [`${n}-item`]: {
            flex: "none"
          }
        },
        [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
          borderRadius: e.itemBorderRadius
        },
        [`${n}-item-group-title`]: {
          padding: `${ee(l)} ${ee(s)}`,
          fontSize: b,
          lineHeight: C,
          transition: `all ${o}`
        },
        [`&-horizontal ${n}-submenu`]: {
          transition: [`border-color ${o} ${i}`, `background ${o} ${i}`].join(",")
        },
        [`${n}-submenu, ${n}-submenu-inline`]: {
          transition: [`border-color ${o} ${i}`, `background ${o} ${i}`, `padding ${a} ${i}`].join(",")
        },
        [`${n}-submenu ${n}-sub`]: {
          cursor: "initial",
          transition: [`background ${o} ${i}`, `padding ${o} ${i}`].join(",")
        },
        [`${n}-title-content`]: {
          transition: `color ${o}`,
          "&-with-extra": {
            display: "inline-flex",
            alignItems: "center",
            width: "100%"
          },
          // https://github.com/ant-design/ant-design/issues/41143
          [`> ${t}-typography-ellipsis-single-line`]: {
            display: "inline",
            verticalAlign: "unset"
          },
          [`${n}-item-extra`]: {
            marginInlineStart: "auto",
            paddingInlineStart: e.padding
          }
        },
        [`${n}-item a`]: {
          "&::before": {
            position: "absolute",
            inset: 0,
            backgroundColor: "transparent",
            content: '""'
          }
        },
        // Removed a Badge related style seems it's safe
        // https://github.com/ant-design/ant-design/issues/19809
        // >>>>> Divider
        [`${n}-item-divider`]: {
          overflow: "hidden",
          lineHeight: 0,
          borderColor: c,
          borderStyle: v,
          borderWidth: 0,
          borderTopWidth: u,
          marginBlock: u,
          padding: 0,
          "&-dashed": {
            borderStyle: "dashed"
          }
        }
      }), nm(e)), {
        [`${n}-item-group`]: {
          [`${n}-item-group-list`]: {
            margin: 0,
            padding: 0,
            [`${n}-item, ${n}-submenu-title`]: {
              paddingInline: `${ee(e.calc(r).mul(2).equal())} ${ee(s)}`
            }
          }
        },
        // ======================= Sub Menu =======================
        "&-submenu": {
          "&-popup": {
            position: "absolute",
            zIndex: f,
            borderRadius: m,
            boxShadow: "none",
            transformOrigin: "0 0",
            [`&${n}-submenu`]: {
              background: "transparent"
            },
            // https://github.com/ant-design/ant-design/issues/13955
            "&::before": {
              position: "absolute",
              inset: 0,
              zIndex: -1,
              width: "100%",
              height: "100%",
              opacity: 0,
              content: '""'
            },
            [`> ${n}`]: Object.assign(Object.assign(Object.assign({
              borderRadius: m
            }, nm(e)), rm(e)), {
              [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                borderRadius: h
              },
              [`${n}-submenu-title::after`]: {
                transition: `transform ${o} ${i}`
              }
            })
          },
          "\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ": {
            transformOrigin: "100% 0"
          },
          "\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ": {
            transformOrigin: "100% 100%"
          },
          "\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ": {
            transformOrigin: "0 100%"
          },
          "\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ": {
            transformOrigin: "0 0"
          },
          "\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ": {
            paddingInlineEnd: e.paddingXS
          },
          "\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ": {
            paddingInlineStart: e.paddingXS
          },
          "\n          &-placement-topRight,\n          &-placement-topLeft\n          ": {
            paddingBottom: e.paddingXS
          },
          "\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ": {
            paddingTop: e.paddingXS
          }
        }
      }), rm(e)), {
        [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
          // ↓
          "&::before": {
            transform: `rotate(-45deg) translateX(${ee(p)})`
          },
          "&::after": {
            transform: `rotate(45deg) translateX(${ee(e.calc(p).mul(-1).equal())})`
          }
        },
        [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]: {
          // ↑
          transform: `translateY(${ee(e.calc(g).mul(0.2).mul(-1).equal())})`,
          "&::after": {
            transform: `rotate(-45deg) translateX(${ee(e.calc(p).mul(-1).equal())})`
          },
          "&::before": {
            transform: `rotate(45deg) translateX(${ee(p)})`
          }
        }
      })
    },
    // Integration with header element so menu items have the same height
    {
      [`${t}-layout-header`]: {
        [n]: {
          lineHeight: "inherit"
        }
      }
    }
  ];
}, _5 = (e) => {
  var t, n, r;
  const {
    colorPrimary: o,
    colorError: a,
    colorTextDisabled: i,
    colorErrorBg: l,
    colorText: s,
    colorTextDescription: c,
    colorBgContainer: u,
    colorFillAlter: f,
    colorFillContent: m,
    lineWidth: h,
    lineWidthBold: g,
    controlItemBgActive: p,
    colorBgTextHover: v,
    controlHeightLG: C,
    lineHeight: b,
    colorBgElevated: x,
    marginXXS: $,
    padding: y,
    fontSize: S,
    controlHeightSM: w,
    fontSizeLG: E,
    colorTextLightSolid: O,
    colorErrorHover: P
  } = e, N = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0, R = (n = e.activeBarBorderWidth) !== null && n !== void 0 ? n : h, _ = (r = e.itemMarginInline) !== null && r !== void 0 ? r : e.marginXXS, I = new mt(O).setA(0.65).toRgbString();
  return {
    dropdownWidth: 160,
    zIndexPopup: e.zIndexPopupBase + 50,
    radiusItem: e.borderRadiusLG,
    itemBorderRadius: e.borderRadiusLG,
    radiusSubMenuItem: e.borderRadiusSM,
    subMenuItemBorderRadius: e.borderRadiusSM,
    colorItemText: s,
    itemColor: s,
    colorItemTextHover: s,
    itemHoverColor: s,
    colorItemTextHoverHorizontal: o,
    horizontalItemHoverColor: o,
    colorGroupTitle: c,
    groupTitleColor: c,
    colorItemTextSelected: o,
    itemSelectedColor: o,
    subMenuItemSelectedColor: o,
    colorItemTextSelectedHorizontal: o,
    horizontalItemSelectedColor: o,
    colorItemBg: u,
    itemBg: u,
    colorItemBgHover: v,
    itemHoverBg: v,
    colorItemBgActive: m,
    itemActiveBg: p,
    colorSubItemBg: f,
    subMenuItemBg: f,
    colorItemBgSelected: p,
    itemSelectedBg: p,
    colorItemBgSelectedHorizontal: "transparent",
    horizontalItemSelectedBg: "transparent",
    colorActiveBarWidth: 0,
    activeBarWidth: N,
    colorActiveBarHeight: g,
    activeBarHeight: g,
    colorActiveBarBorderSize: h,
    activeBarBorderWidth: R,
    // Disabled
    colorItemTextDisabled: i,
    itemDisabledColor: i,
    // Danger
    colorDangerItemText: a,
    dangerItemColor: a,
    colorDangerItemTextHover: a,
    dangerItemHoverColor: a,
    colorDangerItemTextSelected: a,
    dangerItemSelectedColor: a,
    colorDangerItemBgActive: l,
    dangerItemActiveBg: l,
    colorDangerItemBgSelected: l,
    dangerItemSelectedBg: l,
    itemMarginInline: _,
    horizontalItemBorderRadius: 0,
    horizontalItemHoverBg: "transparent",
    itemHeight: C,
    groupTitleLineHeight: b,
    collapsedWidth: C * 2,
    popupBg: x,
    itemMarginBlock: $,
    itemPaddingInline: y,
    horizontalLineHeight: `${C * 1.15}px`,
    iconSize: S,
    iconMarginInlineEnd: w - S,
    collapsedIconSize: E,
    groupTitleFontSize: S,
    // Disabled
    darkItemDisabledColor: new mt(O).setA(0.25).toRgbString(),
    // Dark
    darkItemColor: I,
    darkDangerItemColor: a,
    darkItemBg: "#001529",
    darkPopupBg: "#001529",
    darkSubMenuItemBg: "#000c17",
    darkItemSelectedColor: O,
    darkItemSelectedBg: o,
    darkDangerItemSelectedBg: a,
    darkItemHoverBg: "transparent",
    darkGroupTitleColor: I,
    darkItemHoverColor: O,
    darkDangerItemHoverColor: P,
    darkDangerItemSelectedColor: O,
    darkDangerItemActiveBg: a,
    // internal
    itemWidth: N ? `calc(100% + ${R}px)` : `calc(100% - ${_ * 2}px)`
  };
}, A5 = (e, t = e, n = !0) => Vt("Menu", (o) => {
  const {
    colorBgElevated: a,
    controlHeightLG: i,
    fontSize: l,
    darkItemColor: s,
    darkDangerItemColor: c,
    darkItemBg: u,
    darkSubMenuItemBg: f,
    darkItemSelectedColor: m,
    darkItemSelectedBg: h,
    darkDangerItemSelectedBg: g,
    darkItemHoverBg: p,
    darkGroupTitleColor: v,
    darkItemHoverColor: C,
    darkItemDisabledColor: b,
    darkDangerItemHoverColor: x,
    darkDangerItemSelectedColor: $,
    darkDangerItemActiveBg: y,
    popupBg: S,
    darkPopupBg: w
  } = o, E = o.calc(l).div(7).mul(5).equal(), O = $t(o, {
    menuArrowSize: E,
    menuHorizontalHeight: o.calc(i).mul(1.15).equal(),
    menuArrowOffset: o.calc(E).mul(0.25).equal(),
    menuSubMenuBg: a,
    calc: o.calc,
    popupBg: S
  }), P = $t(O, {
    itemColor: s,
    itemHoverColor: C,
    groupTitleColor: v,
    itemSelectedColor: m,
    subMenuItemSelectedColor: m,
    itemBg: u,
    popupBg: w,
    subMenuItemBg: f,
    itemActiveBg: "transparent",
    itemSelectedBg: h,
    activeBarHeight: 0,
    activeBarBorderWidth: 0,
    itemHoverBg: p,
    // Disabled
    itemDisabledColor: b,
    // Danger
    dangerItemColor: c,
    dangerItemHoverColor: x,
    dangerItemSelectedColor: $,
    dangerItemActiveBg: y,
    dangerItemSelectedBg: g,
    menuSubMenuBg: f,
    // Horizontal
    horizontalItemSelectedColor: m,
    horizontalItemSelectedBg: h
  });
  return [
    // Basic
    T5(O),
    // Horizontal
    R5(O),
    // Hard code for some light style
    // Vertical
    M5(O),
    // Hard code for some light style
    // Theme
    em(O, "light"),
    em(P, "dark"),
    // RTL
    I5(O),
    // Motion
    Lx(O),
    Gi(O, "slide-up"),
    Gi(O, "slide-down"),
    bl(O, "zoom-big")
  ];
}, _5, {
  deprecatedTokens: [["colorGroupTitle", "groupTitleColor"], ["radiusItem", "itemBorderRadius"], ["radiusSubMenuItem", "subMenuItemBorderRadius"], ["colorItemText", "itemColor"], ["colorItemTextHover", "itemHoverColor"], ["colorItemTextHoverHorizontal", "horizontalItemHoverColor"], ["colorItemTextSelected", "itemSelectedColor"], ["colorItemTextSelectedHorizontal", "horizontalItemSelectedColor"], ["colorItemTextDisabled", "itemDisabledColor"], ["colorDangerItemText", "dangerItemColor"], ["colorDangerItemTextHover", "dangerItemHoverColor"], ["colorDangerItemTextSelected", "dangerItemSelectedColor"], ["colorDangerItemBgActive", "dangerItemActiveBg"], ["colorDangerItemBgSelected", "dangerItemSelectedBg"], ["colorItemBg", "itemBg"], ["colorItemBgHover", "itemHoverBg"], ["colorSubItemBg", "subMenuItemBg"], ["colorItemBgActive", "itemActiveBg"], ["colorItemBgSelectedHorizontal", "horizontalItemSelectedBg"], ["colorActiveBarWidth", "activeBarWidth"], ["colorActiveBarHeight", "activeBarHeight"], ["colorActiveBarBorderSize", "activeBarBorderWidth"], ["colorItemBgSelected", "itemSelectedBg"]],
  // Dropdown will handle menu style self. We do not need to handle this.
  injectStyle: n,
  unitless: {
    groupTitleLineHeight: !0
  }
})(e, t), oh = (e) => {
  var t;
  const {
    popupClassName: n,
    icon: r,
    title: o,
    theme: a
  } = e, i = d.useContext(Yi), {
    prefixCls: l,
    inlineCollapsed: s,
    theme: c
  } = i, u = Go();
  let f;
  if (!r)
    f = s && !u.length && o && typeof o == "string" ? /* @__PURE__ */ d.createElement("div", {
      className: `${l}-inline-collapsed-noicon`
    }, o.charAt(0)) : /* @__PURE__ */ d.createElement("span", {
      className: `${l}-title-content`
    }, o);
  else {
    const g = /* @__PURE__ */ d.isValidElement(o) && o.type === "span";
    f = /* @__PURE__ */ d.createElement(d.Fragment, null, cr(r, {
      className: U(/* @__PURE__ */ d.isValidElement(r) ? (t = r.props) === null || t === void 0 ? void 0 : t.className : void 0, `${l}-item-icon`)
    }), g ? o : /* @__PURE__ */ d.createElement("span", {
      className: `${l}-title-content`
    }, o));
  }
  const m = d.useMemo(() => Object.assign(Object.assign({}, i), {
    firstLevel: !1
  }), [i]), [h] = ml("Menu");
  return /* @__PURE__ */ d.createElement(Yi.Provider, {
    value: m
  }, /* @__PURE__ */ d.createElement(Ga, Object.assign({}, an(e, ["icon"]), {
    title: f,
    popupClassName: U(l, n, `${l}-${a || c}`),
    popupStyle: Object.assign({
      zIndex: h
    }, e.popupStyle)
  })));
};
var j5 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function bs(e) {
  return e === null || e === !1;
}
const F5 = {
  item: rh,
  submenu: oh,
  divider: nh
}, B5 = /* @__PURE__ */ xn((e, t) => {
  var n;
  const r = d.useContext(Zi), o = r || {}, {
    getPrefixCls: a,
    getPopupContainer: i,
    direction: l,
    menu: s
  } = d.useContext(Be), c = a(), {
    prefixCls: u,
    className: f,
    style: m,
    theme: h = "light",
    expandIcon: g,
    _internalDisableMenuItemTitleTooltip: p,
    inlineCollapsed: v,
    siderCollapsed: C,
    rootClassName: b,
    mode: x,
    selectable: $,
    onClick: y,
    overflowedIndicatorPopupClassName: S
  } = e, w = j5(e, ["prefixCls", "className", "style", "theme", "expandIcon", "_internalDisableMenuItemTitleTooltip", "inlineCollapsed", "siderCollapsed", "rootClassName", "mode", "selectable", "onClick", "overflowedIndicatorPopupClassName"]), E = an(w, ["collapsedWidth"]);
  if (process.env.NODE_ENV !== "production") {
    const W = Rt("Menu");
    process.env.NODE_ENV !== "production" && W(!("inlineCollapsed" in e && x !== "inline"), "usage", "`inlineCollapsed` should only be used when `mode` is inline."), W.deprecated("items" in e && !e.children, "children", "items");
  }
  (n = o.validator) === null || n === void 0 || n.call(o, {
    mode: x
  });
  const O = bt((...W) => {
    var L;
    y?.apply(void 0, W), (L = o.onClick) === null || L === void 0 || L.call(o);
  }), P = o.mode || x, N = $ ?? o.selectable, R = v ?? C, _ = {
    horizontal: {
      motionName: `${c}-slide-up`
    },
    inline: nx(c),
    other: {
      motionName: `${c}-zoom-big`
    }
  }, I = a("menu", u || o.prefixCls), k = er(I), [A, D, F] = A5(I, k, !r), q = U(`${I}-${h}`, s?.className, f), K = d.useMemo(() => {
    var W, L;
    if (typeof g == "function" || bs(g))
      return g || null;
    if (typeof o.expandIcon == "function" || bs(o.expandIcon))
      return o.expandIcon || null;
    if (typeof s?.expandIcon == "function" || bs(s?.expandIcon))
      return s?.expandIcon || null;
    const z = (W = g ?? o?.expandIcon) !== null && W !== void 0 ? W : s?.expandIcon;
    return cr(z, {
      className: U(`${I}-submenu-expand-icon`, /* @__PURE__ */ d.isValidElement(z) ? (L = z.props) === null || L === void 0 ? void 0 : L.className : void 0)
    });
  }, [g, o?.expandIcon, s?.expandIcon, I]), Q = d.useMemo(() => ({
    prefixCls: I,
    inlineCollapsed: R || !1,
    direction: l,
    firstLevel: !0,
    theme: h,
    mode: P,
    disableMenuItemTitleTooltip: p
  }), [I, R, l, p, h]);
  return A(/* @__PURE__ */ d.createElement(Zi.Provider, {
    value: null
  }, /* @__PURE__ */ d.createElement(Yi.Provider, {
    value: Q
  }, /* @__PURE__ */ d.createElement(qa, Object.assign({
    getPopupContainer: i,
    overflowedIndicator: /* @__PURE__ */ d.createElement(Nu, null),
    overflowedIndicatorPopupClassName: U(I, `${I}-${h}`, S),
    mode: P,
    selectable: N,
    onClick: O
  }, E, {
    inlineCollapsed: R,
    style: Object.assign(Object.assign({}, s?.style), m),
    className: q,
    prefixCls: I,
    direction: l,
    defaultMotions: _,
    expandIcon: K,
    ref: t,
    rootClassName: U(b, D, o.rootClassName, F, k),
    _internalComponents: F5
  })))));
}), qo = /* @__PURE__ */ xn((e, t) => {
  const n = fe(null), r = d.useContext(Pu);
  return Ia(t, () => ({
    menu: n.current,
    focus: (o) => {
      var a;
      (a = n.current) === null || a === void 0 || a.focus(o);
    }
  })), /* @__PURE__ */ d.createElement(B5, Object.assign({
    ref: n
  }, e, r));
});
qo.Item = rh;
qo.SubMenu = oh;
qo.Divider = nh;
qo.ItemGroup = Ml;
process.env.NODE_ENV !== "production" && (qo.displayName = "Menu");
const k5 = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    colorError: r,
    colorTextLightSolid: o
  } = e, a = `${n}-item`;
  return {
    [`${t}, ${t}-menu-submenu`]: {
      [`${n} ${a}`]: {
        [`&${a}-danger:not(${a}-disabled)`]: {
          color: r,
          "&:hover": {
            color: o,
            backgroundColor: r
          }
        }
      }
    }
  };
}, D5 = (e) => {
  const {
    componentCls: t,
    menuCls: n,
    zIndexPopup: r,
    dropdownArrowDistance: o,
    sizePopupArrow: a,
    antCls: i,
    iconCls: l,
    motionDurationMid: s,
    paddingBlock: c,
    fontSize: u,
    dropdownEdgeChildPadding: f,
    colorTextDisabled: m,
    fontSizeIcon: h,
    controlPaddingHorizontal: g,
    colorBgElevated: p
  } = e;
  return [
    {
      [t]: {
        position: "absolute",
        top: -9999,
        left: {
          _skip_check_: !0,
          value: -9999
        },
        zIndex: r,
        display: "block",
        // A placeholder out of dropdown visible range to avoid close when user moving
        "&::before": {
          position: "absolute",
          insetBlock: e.calc(a).div(2).sub(o).equal(),
          // insetInlineStart: -7, // FIXME: Seems not work for hidden element
          zIndex: -9999,
          opacity: 1e-4,
          content: '""'
        },
        // Makes vertical dropdowns have a scrollbar once they become taller than the viewport.
        "&-menu-vertical": {
          maxHeight: "100vh",
          overflowY: "auto"
        },
        [`&-trigger${i}-btn`]: {
          [`& > ${l}-down, & > ${i}-btn-icon > ${l}-down`]: {
            fontSize: h
          }
        },
        [`${t}-wrap`]: {
          position: "relative",
          [`${i}-btn > ${l}-down`]: {
            fontSize: h
          },
          [`${l}-down::before`]: {
            transition: `transform ${s}`
          }
        },
        [`${t}-wrap-open`]: {
          [`${l}-down::before`]: {
            transform: "rotate(180deg)"
          }
        },
        "\n        &-hidden,\n        &-menu-hidden,\n        &-menu-submenu-hidden\n      ": {
          display: "none"
        },
        // =============================================================
        // ==                         Motion                          ==
        // =============================================================
        // When position is not enough for dropdown, the placement will revert.
        // We will handle this with revert motion name.
        [`&${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomLeft,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomLeft,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottom,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottom,
          &${i}-slide-down-enter${i}-slide-down-enter-active${t}-placement-bottomRight,
          &${i}-slide-down-appear${i}-slide-down-appear-active${t}-placement-bottomRight`]: {
          animationName: _g
        },
        [`&${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topLeft,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topLeft,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-top,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-top,
          &${i}-slide-up-enter${i}-slide-up-enter-active${t}-placement-topRight,
          &${i}-slide-up-appear${i}-slide-up-appear-active${t}-placement-topRight`]: {
          animationName: jg
        },
        [`&${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomLeft,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottom,
          &${i}-slide-down-leave${i}-slide-down-leave-active${t}-placement-bottomRight`]: {
          animationName: Ag
        },
        [`&${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topLeft,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-top,
          &${i}-slide-up-leave${i}-slide-up-leave-active${t}-placement-topRight`]: {
          animationName: Fg
        }
      }
    },
    // =============================================================
    // ==                        Arrow style                      ==
    // =============================================================
    Bp(e, p, {
      arrowPlacement: {
        top: !0,
        bottom: !0
      }
    }),
    {
      // =============================================================
      // ==                          Menu                           ==
      // =============================================================
      [`${t} ${n}`]: {
        position: "relative",
        margin: 0
      },
      [`${n}-submenu-popup`]: {
        position: "absolute",
        zIndex: r,
        background: "transparent",
        boxShadow: "none",
        transformOrigin: "0 0",
        "ul, li": {
          listStyle: "none",
          margin: 0
        }
      },
      [`${t}, ${t}-menu-submenu`]: Object.assign(Object.assign({}, pr(e)), {
        [n]: Object.assign(Object.assign({
          padding: f,
          listStyleType: "none",
          backgroundColor: p,
          backgroundClip: "padding-box",
          borderRadius: e.borderRadiusLG,
          outline: "none",
          boxShadow: e.boxShadowSecondary
        }, ba(e)), {
          "&:empty": {
            padding: 0,
            boxShadow: "none"
          },
          [`${n}-item-group-title`]: {
            padding: `${ee(c)} ${ee(g)}`,
            color: e.colorTextDescription,
            transition: `all ${s}`
          },
          // ======================= Item Content =======================
          [`${n}-item`]: {
            position: "relative",
            display: "flex",
            alignItems: "center"
          },
          [`${n}-item-icon`]: {
            minWidth: u,
            marginInlineEnd: e.marginXS,
            fontSize: e.fontSizeSM
          },
          [`${n}-title-content`]: {
            flex: "auto",
            "&-with-extra": {
              display: "inline-flex",
              alignItems: "center",
              width: "100%"
            },
            "> a": {
              color: "inherit",
              transition: `all ${s}`,
              "&:hover": {
                color: "inherit"
              },
              "&::after": {
                position: "absolute",
                inset: 0,
                content: '""'
              }
            },
            [`${n}-item-extra`]: {
              paddingInlineStart: e.padding,
              marginInlineStart: "auto",
              fontSize: e.fontSizeSM,
              color: e.colorTextDescription
            }
          },
          // =========================== Item ===========================
          [`${n}-item, ${n}-submenu-title`]: Object.assign(Object.assign({
            display: "flex",
            margin: 0,
            padding: `${ee(c)} ${ee(g)}`,
            color: e.colorText,
            fontWeight: "normal",
            fontSize: u,
            lineHeight: e.lineHeight,
            cursor: "pointer",
            transition: `all ${s}`,
            borderRadius: e.borderRadiusSM,
            "&:hover, &-active": {
              backgroundColor: e.controlItemBgHover
            }
          }, ba(e)), {
            "&-selected": {
              color: e.colorPrimary,
              backgroundColor: e.controlItemBgActive,
              "&:hover, &-active": {
                backgroundColor: e.controlItemBgActiveHover
              }
            },
            "&-disabled": {
              color: m,
              cursor: "not-allowed",
              "&:hover": {
                color: m,
                backgroundColor: p,
                cursor: "not-allowed"
              },
              a: {
                pointerEvents: "none"
              }
            },
            "&-divider": {
              height: 1,
              // By design
              margin: `${ee(e.marginXXS)} 0`,
              overflow: "hidden",
              lineHeight: 0,
              backgroundColor: e.colorSplit
            },
            [`${t}-menu-submenu-expand-icon`]: {
              position: "absolute",
              insetInlineEnd: e.paddingXS,
              [`${t}-menu-submenu-arrow-icon`]: {
                marginInlineEnd: "0 !important",
                color: e.colorIcon,
                fontSize: h,
                fontStyle: "normal"
              }
            }
          }),
          [`${n}-item-group-list`]: {
            margin: `0 ${ee(e.marginXS)}`,
            padding: 0,
            listStyle: "none"
          },
          [`${n}-submenu-title`]: {
            paddingInlineEnd: e.calc(g).add(e.fontSizeSM).equal()
          },
          [`${n}-submenu-vertical`]: {
            position: "relative"
          },
          [`${n}-submenu${n}-submenu-disabled ${t}-menu-submenu-title`]: {
            [`&, ${t}-menu-submenu-arrow-icon`]: {
              color: m,
              backgroundColor: p,
              cursor: "not-allowed"
            }
          },
          // https://github.com/ant-design/ant-design/issues/19264
          [`${n}-submenu-selected ${t}-menu-submenu-title`]: {
            color: e.colorPrimary
          }
        })
      })
    },
    // Follow code may reuse in other components
    [Gi(e, "slide-up"), Gi(e, "slide-down"), nf(e, "move-up"), nf(e, "move-down"), bl(e, "zoom-big")]
  ];
}, L5 = (e) => Object.assign(Object.assign({
  zIndexPopup: e.zIndexPopupBase + 50,
  paddingBlock: (e.controlHeight - e.fontSize * e.lineHeight) / 2
}, Cu({
  contentRadius: e.borderRadiusLG,
  limitVerticalRadius: !0
})), jp(e)), z5 = Vt("Dropdown", (e) => {
  const {
    marginXXS: t,
    sizePopupArrow: n,
    paddingXXS: r,
    componentCls: o
  } = e, a = $t(e, {
    menuCls: `${o}-menu`,
    dropdownArrowDistance: e.calc(n).div(2).add(t).equal(),
    dropdownEdgeChildPadding: r
  });
  return [D5(a), k5(a)];
}, L5, {
  resetStyle: !1
}), Ua = (e) => {
  var t;
  const {
    menu: n,
    arrow: r,
    prefixCls: o,
    children: a,
    trigger: i,
    disabled: l,
    dropdownRender: s,
    popupRender: c,
    getPopupContainer: u,
    overlayClassName: f,
    rootClassName: m,
    overlayStyle: h,
    open: g,
    onOpenChange: p,
    // Deprecated
    visible: v,
    onVisibleChange: C,
    mouseEnterDelay: b = 0.15,
    mouseLeaveDelay: x = 0.1,
    autoAdjustOverflow: $ = !0,
    placement: y = "",
    overlay: S,
    transitionName: w,
    destroyOnHidden: E,
    destroyPopupOnHide: O
  } = e, {
    getPopupContainer: P,
    getPrefixCls: N,
    direction: R,
    dropdown: _
  } = d.useContext(Be), I = c || s, k = Rt("Dropdown");
  process.env.NODE_ENV !== "production" && (Object.entries({
    visible: "open",
    onVisibleChange: "onOpenChange",
    overlay: "menu",
    dropdownRender: "popupRender",
    destroyPopupOnHide: "destroyOnHidden"
  }).forEach(([ce, we]) => {
    k.deprecated(!(ce in e), ce, we);
  }), y.includes("Center") && k.deprecated(!y.includes("Center"), `placement: ${y}`, `placement: ${y.slice(0, y.indexOf("Center"))}`));
  const A = d.useMemo(() => {
    const ie = N();
    return w !== void 0 ? w : y.includes("top") ? `${ie}-slide-down` : `${ie}-slide-up`;
  }, [N, y, w]), D = d.useMemo(() => y ? y.includes("Center") ? y.slice(0, y.indexOf("Center")) : y : R === "rtl" ? "bottomRight" : "bottomLeft", [y, R]), F = N("dropdown", o), q = er(F), [K, Q, W] = z5(F, q), [, L] = jn(), z = d.Children.only(TE(a) ? /* @__PURE__ */ d.createElement("span", null, a) : a), H = cr(z, {
    className: U(`${F}-trigger`, {
      [`${F}-rtl`]: R === "rtl"
    }, z.props.className),
    disabled: (t = z.props.disabled) !== null && t !== void 0 ? t : l
  }), V = l ? [] : i, te = !!V?.includes("contextMenu"), [Y, J] = Vn(!1, {
    value: g ?? v
  }), ae = bt((ie) => {
    p?.(ie, {
      source: "trigger"
    }), C?.(ie), J(ie);
  }), le = U(f, m, Q, W, q, _?.className, {
    [`${F}-rtl`]: R === "rtl"
  }), X = kp({
    arrowPointAtCenter: typeof r == "object" && r.pointAtCenter,
    autoAdjustOverflow: $,
    offset: L.marginXXS,
    arrowWidth: r ? L.sizePopupArrow : 0,
    borderRadius: L.borderRadius
  }), se = bt(() => {
    n?.selectable && n?.multiple || (p?.(!1, {
      source: "menu"
    }), J(!1));
  }), Z = () => {
    let ie;
    return n?.items ? ie = /* @__PURE__ */ d.createElement(qo, Object.assign({}, n)) : typeof S == "function" ? ie = S() : ie = S, I && (ie = I(ie)), ie = d.Children.only(typeof ie == "string" ? /* @__PURE__ */ d.createElement("span", null, ie) : ie), /* @__PURE__ */ d.createElement(N5, {
      prefixCls: `${F}-menu`,
      rootClassName: U(W, q),
      expandIcon: /* @__PURE__ */ d.createElement("span", {
        className: `${F}-menu-submenu-arrow`
      }, R === "rtl" ? /* @__PURE__ */ d.createElement(Ki, {
        className: `${F}-menu-submenu-arrow-icon`
      }) : /* @__PURE__ */ d.createElement(Wi, {
        className: `${F}-menu-submenu-arrow-icon`
      })),
      mode: "vertical",
      selectable: !1,
      onClick: se,
      validator: ({
        mode: ce
      }) => {
        process.env.NODE_ENV !== "production" && k(!ce || ce === "vertical", "usage", `mode="${ce}" is not supported for Dropdown's Menu.`);
      }
    }, ie);
  }, [oe, ne] = ml("Dropdown", h?.zIndex);
  let me = /* @__PURE__ */ d.createElement(ME, Object.assign({
    alignPoint: te
  }, an(e, ["rootClassName"]), {
    mouseEnterDelay: b,
    mouseLeaveDelay: x,
    visible: Y,
    builtinPlacements: X,
    arrow: !!r,
    overlayClassName: le,
    prefixCls: F,
    getPopupContainer: u || P,
    transitionName: A,
    trigger: V,
    overlay: Z,
    placement: D,
    onVisibleChange: ae,
    overlayStyle: Object.assign(Object.assign(Object.assign({}, _?.style), h), {
      zIndex: oe
    }),
    autoDestroy: E ?? O
  }), H);
  return oe && (me = /* @__PURE__ */ d.createElement(Ba.Provider, {
    value: ne
  }, me)), K(me);
}, H5 = h$(Ua, "align", void 0, "dropdown", (e) => e), V5 = (e) => /* @__PURE__ */ d.createElement(H5, Object.assign({}, e), /* @__PURE__ */ d.createElement("span", null));
Ua._InternalPanelDoNotUseOrYouWillBeFired = V5;
process.env.NODE_ENV !== "production" && (Ua.displayName = "Dropdown");
function Tl(e) {
  return $t(e, {
    inputAffixPadding: e.paddingXXS
  });
}
const _l = (e) => {
  const {
    controlHeight: t,
    fontSize: n,
    lineHeight: r,
    lineWidth: o,
    controlHeightSM: a,
    controlHeightLG: i,
    fontSizeLG: l,
    lineHeightLG: s,
    paddingSM: c,
    controlPaddingHorizontalSM: u,
    controlPaddingHorizontal: f,
    colorFillAlter: m,
    colorPrimaryHover: h,
    colorPrimary: g,
    controlOutlineWidth: p,
    controlOutline: v,
    colorErrorOutline: C,
    colorWarningOutline: b,
    colorBgContainer: x,
    inputFontSize: $,
    inputFontSizeLG: y,
    inputFontSizeSM: S
  } = e, w = $ || n, E = S || w, O = y || l, P = Math.round((t - w * r) / 2 * 10) / 10 - o, N = Math.round((a - E * r) / 2 * 10) / 10 - o, R = Math.ceil((i - O * s) / 2 * 10) / 10 - o;
  return {
    paddingBlock: Math.max(P, 0),
    paddingBlockSM: Math.max(N, 0),
    paddingBlockLG: Math.max(R, 0),
    paddingInline: c - o,
    paddingInlineSM: u - o,
    paddingInlineLG: f - o,
    addonBg: m,
    activeBorderColor: g,
    hoverBorderColor: h,
    activeShadow: `0 0 0 ${p}px ${v}`,
    errorActiveShadow: `0 0 0 ${p}px ${C}`,
    warningActiveShadow: `0 0 0 ${p}px ${b}`,
    hoverBg: x,
    activeBg: x,
    inputFontSize: w,
    inputFontSizeLG: O,
    inputFontSizeSM: E
  };
}, W5 = (e) => ({
  borderColor: e.hoverBorderColor,
  backgroundColor: e.hoverBg
}), Ru = (e) => ({
  color: e.colorTextDisabled,
  backgroundColor: e.colorBgContainerDisabled,
  borderColor: e.colorBorder,
  boxShadow: "none",
  cursor: "not-allowed",
  opacity: 1,
  "input[disabled], textarea[disabled]": {
    cursor: "not-allowed"
  },
  "&:hover:not([disabled])": Object.assign({}, W5($t(e, {
    hoverBorderColor: e.colorBorder,
    hoverBg: e.colorBgContainerDisabled
  })))
}), ah = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: e.lineWidth,
  borderStyle: e.lineType,
  borderColor: t.borderColor,
  "&:hover": {
    borderColor: t.hoverBorderColor,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: t.activeBorderColor,
    boxShadow: t.activeShadow,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), om = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, ah(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: t.borderColor
  }
}), G5 = (e, t) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ah(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ru(e))
  }), om(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), om(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), am = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      borderColor: t.addonBorderColor,
      color: t.addonColor
    }
  }
}), q5 = (e) => ({
  "&-outlined": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group`]: {
      "&-addon": {
        background: e.addonBg,
        border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
      },
      "&-addon:first-child": {
        borderInlineEnd: 0
      },
      "&-addon:last-child": {
        borderInlineStart: 0
      }
    }
  }, am(e, {
    status: "error",
    addonBorderColor: e.colorError,
    addonColor: e.colorErrorText
  })), am(e, {
    status: "warning",
    addonBorderColor: e.colorWarning,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group-addon`]: Object.assign({}, Ru(e))
    }
  })
}), U5 = (e, t) => {
  const {
    componentCls: n
  } = e;
  return {
    "&-borderless": Object.assign({
      background: "transparent",
      border: "none",
      "&:focus, &:focus-within": {
        outline: "none"
      },
      // >>>>> Disabled
      [`&${n}-disabled, &[disabled]`]: {
        color: e.colorTextDisabled,
        cursor: "not-allowed"
      },
      // >>>>> Status
      [`&${n}-status-error`]: {
        "&, & input, & textarea": {
          color: e.colorError
        }
      },
      [`&${n}-status-warning`]: {
        "&, & input, & textarea": {
          color: e.colorWarning
        }
      }
    }, t)
  };
}, ih = (e, t) => {
  var n;
  return {
    background: t.bg,
    borderWidth: e.lineWidth,
    borderStyle: e.lineType,
    borderColor: "transparent",
    "input&, & input, textarea&, & textarea": {
      color: (n = t?.inputColor) !== null && n !== void 0 ? n : "unset"
    },
    "&:hover": {
      background: t.hoverBg
    },
    "&:focus, &:focus-within": {
      outline: 0,
      borderColor: t.activeBorderColor,
      backgroundColor: e.activeBg
    }
  };
}, im = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, ih(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  })
}), K5 = (e, t) => ({
  "&-filled": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, ih(e, {
    bg: e.colorFillTertiary,
    hoverBg: e.colorFillSecondary,
    activeBorderColor: e.activeBorderColor
  })), {
    [`&${e.componentCls}-disabled, &[disabled]`]: Object.assign({}, Ru(e))
  }), im(e, {
    status: "error",
    bg: e.colorErrorBg,
    hoverBg: e.colorErrorBgHover,
    activeBorderColor: e.colorError,
    inputColor: e.colorErrorText,
    affixColor: e.colorError
  })), im(e, {
    status: "warning",
    bg: e.colorWarningBg,
    hoverBg: e.colorWarningBgHover,
    activeBorderColor: e.colorWarning,
    inputColor: e.colorWarningText,
    affixColor: e.colorWarning
  })), t)
}), lm = (e, t) => ({
  [`&${e.componentCls}-group-wrapper-status-${t.status}`]: {
    [`${e.componentCls}-group-addon`]: {
      background: t.addonBg,
      color: t.addonColor
    }
  }
}), X5 = (e) => ({
  "&-filled": Object.assign(Object.assign(Object.assign({
    [`${e.componentCls}-group-addon`]: {
      background: e.colorFillTertiary,
      "&:last-child": {
        position: "static"
      }
    }
  }, lm(e, {
    status: "error",
    addonBg: e.colorErrorBg,
    addonColor: e.colorErrorText
  })), lm(e, {
    status: "warning",
    addonBg: e.colorWarningBg,
    addonColor: e.colorWarningText
  })), {
    [`&${e.componentCls}-group-wrapper-disabled`]: {
      [`${e.componentCls}-group`]: {
        "&-addon": {
          background: e.colorFillTertiary,
          color: e.colorTextDisabled
        },
        "&-addon:first-child": {
          borderInlineStart: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        },
        "&-addon:last-child": {
          borderInlineEnd: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderTop: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderBottom: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`
        }
      }
    }
  })
}), lh = (e, t) => ({
  background: e.colorBgContainer,
  borderWidth: `${ee(e.lineWidth)} 0`,
  borderStyle: `${e.lineType} none`,
  borderColor: `transparent transparent ${t.borderColor} transparent`,
  borderRadius: 0,
  "&:hover": {
    borderColor: `transparent transparent ${t.hoverBorderColor} transparent`,
    backgroundColor: e.hoverBg
  },
  "&:focus, &:focus-within": {
    borderColor: `transparent transparent ${t.activeBorderColor} transparent`,
    outline: 0,
    backgroundColor: e.activeBg
  }
}), sm = (e, t) => ({
  [`&${e.componentCls}-status-${t.status}:not(${e.componentCls}-disabled)`]: Object.assign(Object.assign({}, lh(e, t)), {
    [`${e.componentCls}-prefix, ${e.componentCls}-suffix`]: {
      color: t.affixColor
    }
  }),
  [`&${e.componentCls}-status-${t.status}${e.componentCls}-disabled`]: {
    borderColor: `transparent transparent ${t.borderColor} transparent`
  }
}), Y5 = (e, t) => ({
  "&-underlined": Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, lh(e, {
    borderColor: e.colorBorder,
    hoverBorderColor: e.hoverBorderColor,
    activeBorderColor: e.activeBorderColor,
    activeShadow: e.activeShadow
  })), {
    // >>>>> Disabled
    [`&${e.componentCls}-disabled, &[disabled]`]: {
      color: e.colorTextDisabled,
      boxShadow: "none",
      cursor: "not-allowed",
      "&:hover": {
        borderColor: `transparent transparent ${e.colorBorder} transparent`
      }
    },
    "input[disabled], textarea[disabled]": {
      cursor: "not-allowed"
    }
  }), sm(e, {
    status: "error",
    borderColor: e.colorError,
    hoverBorderColor: e.colorErrorBorderHover,
    activeBorderColor: e.colorError,
    activeShadow: e.errorActiveShadow,
    affixColor: e.colorError
  })), sm(e, {
    status: "warning",
    borderColor: e.colorWarning,
    hoverBorderColor: e.colorWarningBorderHover,
    activeBorderColor: e.colorWarning,
    activeShadow: e.warningActiveShadow,
    affixColor: e.colorWarning
  })), t)
}), Z5 = (e) => ({
  // Firefox
  "&::-moz-placeholder": {
    opacity: 1
  },
  "&::placeholder": {
    color: e,
    userSelect: "none"
    // https://github.com/ant-design/ant-design/pull/32639
  },
  "&:placeholder-shown": {
    textOverflow: "ellipsis"
  }
}), sh = (e) => {
  const {
    paddingBlockLG: t,
    lineHeightLG: n,
    borderRadiusLG: r,
    paddingInlineLG: o
  } = e;
  return {
    padding: `${ee(t)} ${ee(o)}`,
    fontSize: e.inputFontSizeLG,
    lineHeight: n,
    borderRadius: r
  };
}, ch = (e) => ({
  padding: `${ee(e.paddingBlockSM)} ${ee(e.paddingInlineSM)}`,
  fontSize: e.inputFontSizeSM,
  borderRadius: e.borderRadiusSM
}), uh = (e) => Object.assign(Object.assign({
  position: "relative",
  display: "inline-block",
  width: "100%",
  minWidth: 0,
  padding: `${ee(e.paddingBlock)} ${ee(e.paddingInline)}`,
  color: e.colorText,
  fontSize: e.inputFontSize,
  lineHeight: e.lineHeight,
  borderRadius: e.borderRadius,
  transition: `all ${e.motionDurationMid}`
}, Z5(e.colorTextPlaceholder)), {
  // Size
  "&-lg": Object.assign({}, sh(e)),
  "&-sm": Object.assign({}, ch(e)),
  // RTL
  "&-rtl, &-textarea-rtl": {
    direction: "rtl"
  }
}), Q5 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e;
  return {
    position: "relative",
    display: "table",
    width: "100%",
    borderCollapse: "separate",
    borderSpacing: 0,
    // Undo padding and float of grid classes
    "&[class*='col-']": {
      paddingInlineEnd: e.paddingXS,
      "&:last-child": {
        paddingInlineEnd: 0
      }
    },
    // Sizing options
    [`&-lg ${t}, &-lg > ${t}-group-addon`]: Object.assign({}, sh(e)),
    [`&-sm ${t}, &-sm > ${t}-group-addon`]: Object.assign({}, ch(e)),
    // Fix https://github.com/ant-design/ant-design/issues/5754
    [`&-lg ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightLG
    },
    [`&-sm ${n}-select-single ${n}-select-selector`]: {
      height: e.controlHeightSM
    },
    [`> ${t}`]: {
      display: "table-cell",
      "&:not(:first-child):not(:last-child)": {
        borderRadius: 0
      }
    },
    [`${t}-group`]: {
      "&-addon, &-wrap": {
        display: "table-cell",
        width: 1,
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        "&:not(:first-child):not(:last-child)": {
          borderRadius: 0
        }
      },
      "&-wrap > *": {
        display: "block !important"
      },
      "&-addon": {
        position: "relative",
        padding: `0 ${ee(e.paddingInline)}`,
        color: e.colorText,
        fontWeight: "normal",
        fontSize: e.inputFontSize,
        textAlign: "center",
        borderRadius: e.borderRadius,
        transition: `all ${e.motionDurationSlow}`,
        lineHeight: 1,
        // Reset Select's style in addon
        [`${n}-select`]: {
          margin: `${ee(e.calc(e.paddingBlock).add(1).mul(-1).equal())} ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
          [`&${n}-select-single:not(${n}-select-customize-input):not(${n}-pagination-size-changer)`]: {
            [`${n}-select-selector`]: {
              backgroundColor: "inherit",
              border: `${ee(e.lineWidth)} ${e.lineType} transparent`,
              boxShadow: "none"
            }
          }
        },
        // https://github.com/ant-design/ant-design/issues/31333
        [`${n}-cascader-picker`]: {
          margin: `-9px ${ee(e.calc(e.paddingInline).mul(-1).equal())}`,
          backgroundColor: "transparent",
          [`${n}-cascader-input`]: {
            textAlign: "start",
            border: 0,
            boxShadow: "none"
          }
        }
      }
    },
    [t]: {
      width: "100%",
      marginBottom: 0,
      textAlign: "inherit",
      "&:focus": {
        zIndex: 1,
        // Fix https://gw.alipayobjects.com/zos/rmsportal/DHNpoqfMXSfrSnlZvhsJ.png
        borderInlineEndWidth: 1
      },
      "&:hover": {
        zIndex: 1,
        borderInlineEndWidth: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      }
    },
    // Reset rounded corners
    [`> ${t}:first-child, ${t}-group-addon:first-child`]: {
      borderStartEndRadius: 0,
      borderEndEndRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}-affix-wrapper`]: {
      [`&:not(:first-child) ${t}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      },
      [`&:not(:last-child) ${t}`]: {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0
      }
    },
    [`> ${t}:last-child, ${t}-group-addon:last-child`]: {
      borderStartStartRadius: 0,
      borderEndStartRadius: 0,
      // Reset Select's style in addon
      [`${n}-select ${n}-select-selector`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`${t}-affix-wrapper`]: {
      "&:not(:last-child)": {
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
        [`${t}-search &`]: {
          borderStartStartRadius: e.borderRadius,
          borderEndStartRadius: e.borderRadius
        }
      },
      [`&:not(:first-child), ${t}-search &:not(:first-child)`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0
      }
    },
    [`&${t}-group-compact`]: Object.assign(Object.assign({
      display: "block"
    }, ki()), {
      [`${t}-group-addon, ${t}-group-wrap, > ${t}`]: {
        "&:not(:first-child):not(:last-child)": {
          borderInlineEndWidth: e.lineWidth,
          "&:hover, &:focus": {
            zIndex: 1
          }
        }
      },
      "& > *": {
        display: "inline-flex",
        float: "none",
        verticalAlign: "top",
        // https://github.com/ant-design/ant-design-pro/issues/139
        borderRadius: 0
      },
      [`
        & > ${t}-affix-wrapper,
        & > ${t}-number-affix-wrapper,
        & > ${n}-picker-range
      `]: {
        display: "inline-flex"
      },
      "& > *:not(:last-child)": {
        marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
        borderInlineEndWidth: e.lineWidth
      },
      // Undo float for .ant-input-group .ant-input
      [t]: {
        float: "none"
      },
      // reset border for Select, DatePicker, AutoComplete, Cascader, Mention, TimePicker, Input
      [`& > ${n}-select > ${n}-select-selector,
      & > ${n}-select-auto-complete ${t},
      & > ${n}-cascader-picker ${t},
      & > ${t}-group-wrapper ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderRadius: 0,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      [`& > ${n}-select-focused`]: {
        zIndex: 1
      },
      // update z-index for arrow icon
      [`& > ${n}-select > ${n}-select-arrow`]: {
        zIndex: 1
        // https://github.com/ant-design/ant-design/issues/20371
      },
      [`& > *:first-child,
      & > ${n}-select:first-child > ${n}-select-selector,
      & > ${n}-select-auto-complete:first-child ${t},
      & > ${n}-cascader-picker:first-child ${t}`]: {
        borderStartStartRadius: e.borderRadius,
        borderEndStartRadius: e.borderRadius
      },
      [`& > *:last-child,
      & > ${n}-select:last-child > ${n}-select-selector,
      & > ${n}-cascader-picker:last-child ${t},
      & > ${n}-cascader-picker-focused:last-child ${t}`]: {
        borderInlineEndWidth: e.lineWidth,
        borderStartEndRadius: e.borderRadius,
        borderEndEndRadius: e.borderRadius
      },
      // https://github.com/ant-design/ant-design/issues/12493
      [`& > ${n}-select-auto-complete ${t}`]: {
        verticalAlign: "top"
      },
      [`${t}-group-wrapper + ${t}-group-wrapper`]: {
        marginInlineStart: e.calc(e.lineWidth).mul(-1).equal(),
        [`${t}-affix-wrapper`]: {
          borderRadius: 0
        }
      },
      [`${t}-group-wrapper:not(:last-child)`]: {
        [`&${t}-search > ${t}-group`]: {
          [`& > ${t}-group-addon > ${t}-search-button`]: {
            borderRadius: 0
          },
          [`& > ${t}`]: {
            borderStartStartRadius: e.borderRadius,
            borderStartEndRadius: 0,
            borderEndEndRadius: 0,
            borderEndStartRadius: e.borderRadius
          }
        }
      }
    })
  };
}, J5 = (e) => {
  const {
    componentCls: t,
    controlHeightSM: n,
    lineWidth: r,
    calc: o
  } = e, i = o(n).sub(o(r).mul(2)).sub(16).div(2).equal();
  return {
    [t]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, pr(e)), uh(e)), G5(e)), K5(e)), U5(e)), Y5(e)), {
      '&[type="color"]': {
        height: e.controlHeight,
        [`&${t}-lg`]: {
          height: e.controlHeightLG
        },
        [`&${t}-sm`]: {
          height: n,
          paddingTop: i,
          paddingBottom: i
        }
      },
      '&[type="search"]::-webkit-search-cancel-button, &[type="search"]::-webkit-search-decoration': {
        appearance: "none"
      }
    })
  };
}, e6 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    // ========================= Input =========================
    [`${t}-clear-icon`]: {
      margin: 0,
      padding: 0,
      lineHeight: 0,
      color: e.colorTextQuaternary,
      fontSize: e.fontSizeIcon,
      verticalAlign: -1,
      // https://github.com/ant-design/ant-design/pull/18151
      // https://codesandbox.io/s/wizardly-sun-u10br
      cursor: "pointer",
      transition: `color ${e.motionDurationSlow}`,
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      "&:hover": {
        color: e.colorIcon
      },
      "&:active": {
        color: e.colorText
      },
      "&-hidden": {
        visibility: "hidden"
      },
      "&-has-suffix": {
        margin: `0 ${ee(e.inputAffixPadding)}`
      }
    }
  };
}, t6 = (e) => {
  const {
    componentCls: t,
    inputAffixPadding: n,
    colorTextDescription: r,
    motionDurationSlow: o,
    colorIcon: a,
    colorIconHover: i,
    iconCls: l
  } = e, s = `${t}-affix-wrapper`, c = `${t}-affix-wrapper-disabled`;
  return {
    [s]: Object.assign(Object.assign(Object.assign(Object.assign({}, uh(e)), {
      display: "inline-flex",
      [`&:not(${t}-disabled):hover`]: {
        zIndex: 1,
        [`${t}-search-with-button &`]: {
          zIndex: 0
        }
      },
      "&-focused, &:focus": {
        zIndex: 1
      },
      [`> input${t}`]: {
        padding: 0
      },
      [`> input${t}, > textarea${t}`]: {
        fontSize: "inherit",
        border: "none",
        borderRadius: 0,
        outline: "none",
        background: "transparent",
        color: "inherit",
        "&::-ms-reveal": {
          display: "none"
        },
        "&:focus": {
          boxShadow: "none !important"
        }
      },
      "&::before": {
        display: "inline-block",
        width: 0,
        visibility: "hidden",
        content: '"\\a0"'
      },
      [t]: {
        "&-prefix, &-suffix": {
          display: "flex",
          flex: "none",
          alignItems: "center",
          "> *:not(:last-child)": {
            marginInlineEnd: e.paddingXS
          }
        },
        "&-show-count-suffix": {
          color: r,
          direction: "ltr"
        },
        "&-show-count-has-suffix": {
          marginInlineEnd: e.paddingXXS
        },
        "&-prefix": {
          marginInlineEnd: n
        },
        "&-suffix": {
          marginInlineStart: n
        }
      }
    }), e6(e)), {
      // password
      [`${l}${t}-password-icon`]: {
        color: a,
        cursor: "pointer",
        transition: `all ${o}`,
        "&:hover": {
          color: i
        }
      }
    }),
    // 覆盖 affix-wrapper borderRadius！
    [`${t}-underlined`]: {
      borderRadius: 0
    },
    [c]: {
      // password disabled
      [`${l}${t}-password-icon`]: {
        color: a,
        cursor: "not-allowed",
        "&:hover": {
          color: a
        }
      }
    }
  };
}, n6 = (e) => {
  const {
    componentCls: t,
    borderRadiusLG: n,
    borderRadiusSM: r
  } = e;
  return {
    [`${t}-group`]: Object.assign(Object.assign(Object.assign({}, pr(e)), Q5(e)), {
      "&-rtl": {
        direction: "rtl"
      },
      "&-wrapper": Object.assign(Object.assign(Object.assign({
        display: "inline-block",
        width: "100%",
        textAlign: "start",
        verticalAlign: "top",
        "&-rtl": {
          direction: "rtl"
        },
        // Size
        "&-lg": {
          [`${t}-group-addon`]: {
            borderRadius: n,
            fontSize: e.inputFontSizeLG
          }
        },
        "&-sm": {
          [`${t}-group-addon`]: {
            borderRadius: r
          }
        }
      }, q5(e)), X5(e)), {
        // '&-disabled': {
        //   [`${componentCls}-group-addon`]: {
        //     ...genDisabledStyle(token),
        //   },
        // },
        // Fix the issue of using icons in Space Compact mode
        // https://github.com/ant-design/ant-design/issues/42122
        [`&:not(${t}-compact-first-item):not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderRadius: 0
          }
        },
        [`&:not(${t}-compact-last-item)${t}-compact-first-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        [`&:not(${t}-compact-first-item)${t}-compact-last-item`]: {
          [`${t}, ${t}-group-addon`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        },
        // Fix the issue of input use show-count param in space compact mode
        // https://github.com/ant-design/ant-design/issues/46872
        [`&:not(${t}-compact-last-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartEndRadius: 0,
            borderEndEndRadius: 0
          }
        },
        // Fix the issue of input use `addonAfter` param in space compact mode
        // https://github.com/ant-design/ant-design/issues/52483
        [`&:not(${t}-compact-first-item)${t}-compact-item`]: {
          [`${t}-affix-wrapper`]: {
            borderStartStartRadius: 0,
            borderEndStartRadius: 0
          }
        }
      })
    })
  };
}, r6 = (e) => {
  const {
    componentCls: t,
    antCls: n
  } = e, r = `${t}-search`;
  return {
    [r]: {
      [t]: {
        "&:not([disabled]):hover, &:not([disabled]):focus": {
          [`+ ${t}-group-addon ${r}-button:not(${n}-btn-color-primary):not(${n}-btn-variant-text)`]: {
            borderInlineStartColor: e.colorPrimaryHover
          }
        }
      },
      [`${t}-affix-wrapper`]: {
        height: e.controlHeight,
        borderRadius: 0
      },
      // fix slight height diff in Firefox:
      // https://ant.design/components/auto-complete-cn/#auto-complete-demo-certain-category
      [`${t}-lg`]: {
        lineHeight: e.calc(e.lineHeightLG).sub(2e-4).equal()
      },
      [`> ${t}-group`]: {
        [`> ${t}-group-addon:last-child`]: {
          insetInlineStart: -1,
          padding: 0,
          border: 0,
          [`${r}-button`]: {
            // Fix https://github.com/ant-design/ant-design/issues/47150
            marginInlineEnd: -1,
            borderStartStartRadius: 0,
            borderEndStartRadius: 0,
            boxShadow: "none"
          },
          [`${r}-button:not(${n}-btn-color-primary)`]: {
            color: e.colorTextDescription,
            "&:not([disabled]):hover": {
              color: e.colorPrimaryHover
            },
            "&:active": {
              color: e.colorPrimaryActive
            },
            [`&${n}-btn-loading::before`]: {
              inset: 0
            }
          }
        }
      },
      [`${r}-button`]: {
        height: e.controlHeight,
        "&:hover, &:focus": {
          zIndex: 1
        }
      },
      "&-large": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightLG
        }
      },
      "&-small": {
        [`${t}-affix-wrapper, ${r}-button`]: {
          height: e.controlHeightSM
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      // ===================== Compact Item Customized Styles =====================
      [`&${t}-compact-item`]: {
        [`&:not(${t}-compact-last-item)`]: {
          [`${t}-group-addon`]: {
            [`${t}-search-button`]: {
              marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal(),
              borderRadius: 0
            }
          }
        },
        [`&:not(${t}-compact-first-item)`]: {
          [`${t},${t}-affix-wrapper`]: {
            borderRadius: 0
          }
        },
        [`> ${t}-group-addon ${t}-search-button,
        > ${t},
        ${t}-affix-wrapper`]: {
          "&:hover, &:focus, &:active": {
            zIndex: 2
          }
        },
        [`> ${t}-affix-wrapper-focused`]: {
          zIndex: 2
        }
      }
    }
  };
}, o6 = (e) => {
  const {
    componentCls: t
  } = e;
  return {
    [`${t}-out-of-range`]: {
      [`&, & input, & textarea, ${t}-show-count-suffix, ${t}-data-count`]: {
        color: e.colorError
      }
    }
  };
}, dh = Vt(["Input", "Shared"], (e) => {
  const t = $t(e, Tl(e));
  return [J5(t), t6(t)];
}, _l, {
  resetFont: !1
}), fh = Vt(["Input", "Component"], (e) => {
  const t = $t(e, Tl(e));
  return [
    n6(t),
    r6(t),
    o6(t),
    // =====================================================
    // ==             Space Compact                       ==
    // =====================================================
    Lg(t)
  ];
}, _l, {
  resetFont: !1
});
function a6(e) {
  return !!(e.addonBefore || e.addonAfter);
}
function i6(e) {
  return !!(e.prefix || e.suffix || e.allowClear);
}
function cm(e, t, n) {
  var r = t.cloneNode(!0), o = Object.create(e, {
    target: {
      value: r
    },
    currentTarget: {
      value: r
    }
  });
  return r.value = n, typeof t.selectionStart == "number" && typeof t.selectionEnd == "number" && (r.selectionStart = t.selectionStart, r.selectionEnd = t.selectionEnd), r.setSelectionRange = function() {
    t.setSelectionRange.apply(t, arguments);
  }, o;
}
function Qi(e, t, n, r) {
  if (n) {
    var o = t;
    if (t.type === "click") {
      o = cm(t, e, ""), n(o);
      return;
    }
    if (e.type !== "file" && r !== void 0) {
      o = cm(t, e, r), n(o);
      return;
    }
    n(o);
  }
}
function mh(e, t) {
  if (e) {
    e.focus(t);
    var n = t || {}, r = n.cursor;
    if (r) {
      var o = e.value.length;
      switch (r) {
        case "start":
          e.setSelectionRange(0, 0);
          break;
        case "end":
          e.setSelectionRange(o, o);
          break;
        default:
          e.setSelectionRange(0, o);
      }
    }
  }
}
var vh = /* @__PURE__ */ M.forwardRef(function(e, t) {
  var n, r, o, a = e.inputElement, i = e.children, l = e.prefixCls, s = e.prefix, c = e.suffix, u = e.addonBefore, f = e.addonAfter, m = e.className, h = e.style, g = e.disabled, p = e.readOnly, v = e.focused, C = e.triggerFocus, b = e.allowClear, x = e.value, $ = e.handleReset, y = e.hidden, S = e.classes, w = e.classNames, E = e.dataAttrs, O = e.styles, P = e.components, N = e.onClear, R = i ?? a, _ = P?.affixWrapper || "span", I = P?.groupWrapper || "span", k = P?.wrapper || "span", A = P?.groupAddon || "span", D = fe(null), F = function(oe) {
    var ne;
    (ne = D.current) !== null && ne !== void 0 && ne.contains(oe.target) && C?.();
  }, q = i6(e), K = /* @__PURE__ */ h0(R, {
    value: x,
    className: U((n = R.props) === null || n === void 0 ? void 0 : n.className, !q && w?.variant) || null
  }), Q = fe(null);
  if (M.useImperativeHandle(t, function() {
    return {
      nativeElement: Q.current || D.current
    };
  }), q) {
    var W = null;
    if (b) {
      var L = !g && !p && x, z = "".concat(l, "-clear-icon"), H = Se(b) === "object" && b !== null && b !== void 0 && b.clearIcon ? b.clearIcon : "✖";
      W = /* @__PURE__ */ M.createElement("button", {
        type: "button",
        tabIndex: -1,
        onClick: function(oe) {
          $?.(oe), N?.();
        },
        onMouseDown: function(oe) {
          return oe.preventDefault();
        },
        className: U(z, j(j({}, "".concat(z, "-hidden"), !L), "".concat(z, "-has-suffix"), !!c))
      }, H);
    }
    var V = "".concat(l, "-affix-wrapper"), te = U(V, j(j(j(j(j({}, "".concat(l, "-disabled"), g), "".concat(V, "-disabled"), g), "".concat(V, "-focused"), v), "".concat(V, "-readonly"), p), "".concat(V, "-input-with-clear-btn"), c && b && x), S?.affixWrapper, w?.affixWrapper, w?.variant), Y = (c || b) && /* @__PURE__ */ M.createElement("span", {
      className: U("".concat(l, "-suffix"), w?.suffix),
      style: O?.suffix
    }, W, c);
    K = /* @__PURE__ */ M.createElement(_, ve({
      className: te,
      style: O?.affixWrapper,
      onClick: F
    }, E?.affixWrapper, {
      ref: D
    }), s && /* @__PURE__ */ M.createElement("span", {
      className: U("".concat(l, "-prefix"), w?.prefix),
      style: O?.prefix
    }, s), K, Y);
  }
  if (a6(e)) {
    var J = "".concat(l, "-group"), ae = "".concat(J, "-addon"), le = "".concat(J, "-wrapper"), X = U("".concat(l, "-wrapper"), J, S?.wrapper, w?.wrapper), se = U(le, j({}, "".concat(le, "-disabled"), g), S?.group, w?.groupWrapper);
    K = /* @__PURE__ */ M.createElement(I, {
      className: se,
      ref: Q
    }, /* @__PURE__ */ M.createElement(k, {
      className: X
    }, u && /* @__PURE__ */ M.createElement(A, {
      className: ae
    }, u), K, f && /* @__PURE__ */ M.createElement(A, {
      className: ae
    }, f)));
  }
  return /* @__PURE__ */ M.cloneElement(K, {
    className: U((r = K.props) === null || r === void 0 ? void 0 : r.className, m) || null,
    style: T(T({}, (o = K.props) === null || o === void 0 ? void 0 : o.style), h),
    hidden: y
  });
}), l6 = ["show"];
function gh(e, t) {
  return d.useMemo(function() {
    var n = {};
    t && (n.show = Se(t) === "object" && t.formatter ? t.formatter : !!t), n = T(T({}, n), e);
    var r = n, o = r.show, a = De(r, l6);
    return T(T({}, a), {}, {
      show: !!o,
      showFormatter: typeof o == "function" ? o : void 0,
      strategy: a.strategy || function(i) {
        return i.length;
      }
    });
  }, [e, t]);
}
var s6 = ["autoComplete", "onChange", "onFocus", "onBlur", "onPressEnter", "onKeyDown", "onKeyUp", "prefixCls", "disabled", "htmlSize", "className", "maxLength", "suffix", "showCount", "count", "type", "classes", "classNames", "styles", "onCompositionStart", "onCompositionEnd"], c6 = /* @__PURE__ */ xn(function(e, t) {
  var n = e.autoComplete, r = e.onChange, o = e.onFocus, a = e.onBlur, i = e.onPressEnter, l = e.onKeyDown, s = e.onKeyUp, c = e.prefixCls, u = c === void 0 ? "rc-input" : c, f = e.disabled, m = e.htmlSize, h = e.className, g = e.maxLength, p = e.suffix, v = e.showCount, C = e.count, b = e.type, x = b === void 0 ? "text" : b, $ = e.classes, y = e.classNames, S = e.styles, w = e.onCompositionStart, E = e.onCompositionEnd, O = De(e, s6), P = Ht(!1), N = G(P, 2), R = N[0], _ = N[1], I = fe(!1), k = fe(!1), A = fe(null), D = fe(null), F = function(re) {
    A.current && mh(A.current, re);
  }, q = Vn(e.defaultValue, {
    value: e.value
  }), K = G(q, 2), Q = K[0], W = K[1], L = Q == null ? "" : String(Q), z = Ht(null), H = G(z, 2), V = H[0], te = H[1], Y = gh(C, v), J = Y.max || g, ae = Y.strategy(L), le = !!J && ae > J;
  Ia(t, function() {
    var he;
    return {
      focus: F,
      blur: function() {
        var Ce;
        (Ce = A.current) === null || Ce === void 0 || Ce.blur();
      },
      setSelectionRange: function(Ce, _e, Ke) {
        var Le;
        (Le = A.current) === null || Le === void 0 || Le.setSelectionRange(Ce, _e, Ke);
      },
      select: function() {
        var Ce;
        (Ce = A.current) === null || Ce === void 0 || Ce.select();
      },
      input: A.current,
      nativeElement: ((he = D.current) === null || he === void 0 ? void 0 : he.nativeElement) || A.current
    };
  }), yt(function() {
    k.current && (k.current = !1), _(function(he) {
      return he && f ? !1 : he;
    });
  }, [f]);
  var X = function(re, Ce, _e) {
    var Ke = Ce;
    if (!I.current && Y.exceedFormatter && Y.max && Y.strategy(Ce) > Y.max) {
      if (Ke = Y.exceedFormatter(Ce, {
        max: Y.max
      }), Ce !== Ke) {
        var Le, ze;
        te([((Le = A.current) === null || Le === void 0 ? void 0 : Le.selectionStart) || 0, ((ze = A.current) === null || ze === void 0 ? void 0 : ze.selectionEnd) || 0]);
      }
    } else if (_e.source === "compositionEnd")
      return;
    W(Ke), A.current && Qi(A.current, re, r, Ke);
  };
  yt(function() {
    if (V) {
      var he;
      (he = A.current) === null || he === void 0 || he.setSelectionRange.apply(he, de(V));
    }
  }, [V]);
  var se = function(re) {
    X(re, re.target.value, {
      source: "change"
    });
  }, Z = function(re) {
    I.current = !1, X(re, re.currentTarget.value, {
      source: "compositionEnd"
    }), E?.(re);
  }, oe = function(re) {
    i && re.key === "Enter" && !k.current && (k.current = !0, i(re)), l?.(re);
  }, ne = function(re) {
    re.key === "Enter" && (k.current = !1), s?.(re);
  }, me = function(re) {
    _(!0), o?.(re);
  }, ie = function(re) {
    k.current && (k.current = !1), _(!1), a?.(re);
  }, ce = function(re) {
    W(""), F(), A.current && Qi(A.current, re, r);
  }, we = le && "".concat(u, "-out-of-range"), xe = function() {
    var re = an(e, [
      "prefixCls",
      "onPressEnter",
      "addonBefore",
      "addonAfter",
      "prefix",
      "suffix",
      "allowClear",
      // Input elements must be either controlled or uncontrolled,
      // specify either the value prop, or the defaultValue prop, but not both.
      "defaultValue",
      "showCount",
      "count",
      "classes",
      "htmlSize",
      "styles",
      "classNames",
      "onClear"
    ]);
    return /* @__PURE__ */ M.createElement("input", ve({
      autoComplete: n
    }, re, {
      onChange: se,
      onFocus: me,
      onBlur: ie,
      onKeyDown: oe,
      onKeyUp: ne,
      className: U(u, j({}, "".concat(u, "-disabled"), f), y?.input),
      style: S?.input,
      ref: A,
      size: m,
      type: x,
      onCompositionStart: function(_e) {
        I.current = !0, w?.(_e);
      },
      onCompositionEnd: Z
    }));
  }, Pe = function() {
    var re = Number(J) > 0;
    if (p || Y.show) {
      var Ce = Y.showFormatter ? Y.showFormatter({
        value: L,
        count: ae,
        maxLength: J
      }) : "".concat(ae).concat(re ? " / ".concat(J) : "");
      return /* @__PURE__ */ M.createElement(M.Fragment, null, Y.show && /* @__PURE__ */ M.createElement("span", {
        className: U("".concat(u, "-show-count-suffix"), j({}, "".concat(u, "-show-count-has-suffix"), !!p), y?.count),
        style: T({}, S?.count)
      }, Ce), p);
    }
    return null;
  };
  return /* @__PURE__ */ M.createElement(vh, ve({}, O, {
    prefixCls: u,
    className: U(h, we),
    handleReset: ce,
    value: L,
    focused: R,
    triggerFocus: F,
    suffix: Pe(),
    disabled: f,
    classes: $,
    classNames: y,
    styles: S,
    ref: D
  }), xe());
});
const ph = (e) => {
  let t;
  return typeof e == "object" && e?.clearIcon ? t = e : e && (t = {
    clearIcon: /* @__PURE__ */ M.createElement(ja, null)
  }), t;
};
function hh(e, t) {
  const n = fe([]), r = () => {
    n.current.push(setTimeout(() => {
      var o, a, i, l;
      !((o = e.current) === null || o === void 0) && o.input && ((a = e.current) === null || a === void 0 ? void 0 : a.input.getAttribute("type")) === "password" && (!((i = e.current) === null || i === void 0) && i.input.hasAttribute("value")) && ((l = e.current) === null || l === void 0 || l.input.removeAttribute("value"));
    }));
  };
  return yt(() => (t && r(), () => n.current.forEach((o) => {
    o && clearTimeout(o);
  })), []), r;
}
function u6(e) {
  return !!(e.prefix || e.suffix || e.allowClear || e.showCount);
}
var d6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const Ka = /* @__PURE__ */ xn((e, t) => {
  const {
    prefixCls: n,
    bordered: r = !0,
    status: o,
    size: a,
    disabled: i,
    onBlur: l,
    onFocus: s,
    suffix: c,
    allowClear: u,
    addonAfter: f,
    addonBefore: m,
    className: h,
    style: g,
    styles: p,
    rootClassName: v,
    onChange: C,
    classNames: b,
    variant: x
  } = e, $ = d6(e, ["prefixCls", "bordered", "status", "size", "disabled", "onBlur", "onFocus", "suffix", "allowClear", "addonAfter", "addonBefore", "className", "style", "styles", "rootClassName", "onChange", "classNames", "variant"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ce
    } = Rt("Input");
    [["bordered", "variant"], ["addonAfter", "Space.Compact"], ["addonBefore", "Space.Compact"]].forEach(([we, xe]) => {
      ce(!(we in e), we, xe);
    });
  }
  const {
    getPrefixCls: y,
    direction: S,
    allowClear: w,
    autoComplete: E,
    className: O,
    style: P,
    classNames: N,
    styles: R
  } = zo("input"), _ = y("input", n), I = fe(null), k = er(_), [A, D, F] = dh(_, v), [q] = fh(_, k), {
    compactSize: K,
    compactItemClassnames: Q
  } = Da(_, S), W = Vo((ce) => {
    var we;
    return (we = a ?? K) !== null && we !== void 0 ? we : ce;
  }), L = M.useContext(Yr), z = i ?? L, {
    status: H,
    hasFeedback: V,
    feedbackIcon: te
  } = Ge(fr), Y = bu(H, o), J = u6(e) || !!V, ae = fe(J);
  if (process.env.NODE_ENV !== "production") {
    const ce = Rt("Input");
    yt(() => {
      var we;
      J && !ae.current && process.env.NODE_ENV !== "production" && ce(document.activeElement === ((we = I.current) === null || we === void 0 ? void 0 : we.input), "usage", "When Input is focused, dynamic add or remove prefix / suffix will make it lose focus caused by dom structure change. Read more: https://ant.design/components/input/#FAQ"), ae.current = J;
    }, [J]);
  }
  const le = hh(I, !0), X = (ce) => {
    le(), l?.(ce);
  }, se = (ce) => {
    le(), s?.(ce);
  }, Z = (ce) => {
    le(), C?.(ce);
  }, oe = (V || c) && /* @__PURE__ */ M.createElement(M.Fragment, null, c, V && te), ne = ph(u ?? w), [me, ie] = _p("input", x, r);
  return A(q(/* @__PURE__ */ M.createElement(c6, Object.assign({
    ref: Jn(t, I),
    prefixCls: _,
    autoComplete: E
  }, $, {
    disabled: z,
    onBlur: X,
    onFocus: se,
    style: Object.assign(Object.assign({}, P), g),
    styles: Object.assign(Object.assign({}, R), p),
    suffix: oe,
    allowClear: ne,
    className: U(h, v, F, k, Q, O),
    onChange: Z,
    addonBefore: m && /* @__PURE__ */ M.createElement(Ca, {
      form: !0,
      space: !0
    }, m),
    addonAfter: f && /* @__PURE__ */ M.createElement(Ca, {
      form: !0,
      space: !0
    }, f),
    classNames: Object.assign(Object.assign(Object.assign({}, b), N), {
      input: U({
        [`${_}-sm`]: W === "small",
        [`${_}-lg`]: W === "large",
        [`${_}-rtl`]: S === "rtl"
      }, b?.input, N.input, D),
      variant: U({
        [`${_}-${me}`]: ie
      }, Nc(_, Y)),
      affixWrapper: U({
        [`${_}-affix-wrapper-sm`]: W === "small",
        [`${_}-affix-wrapper-lg`]: W === "large",
        [`${_}-affix-wrapper-rtl`]: S === "rtl"
      }, D),
      wrapper: U({
        [`${_}-group-rtl`]: S === "rtl"
      }, D),
      groupWrapper: U({
        [`${_}-group-wrapper-sm`]: W === "small",
        [`${_}-group-wrapper-lg`]: W === "large",
        [`${_}-group-wrapper-rtl`]: S === "rtl",
        [`${_}-group-wrapper-${me}`]: ie
      }, Nc(`${_}-group-wrapper`, Y, V), D)
    })
  }))));
});
process.env.NODE_ENV !== "production" && (Ka.displayName = "Input");
function um(e) {
  return ["small", "middle", "large"].includes(e);
}
function dm(e) {
  return e ? typeof e == "number" && !Number.isNaN(e) : !1;
}
const bh = /* @__PURE__ */ M.createContext({
  latestIndex: 0
}), f6 = bh.Provider, m6 = ({
  className: e,
  index: t,
  children: n,
  split: r,
  style: o
}) => {
  const {
    latestIndex: a
  } = d.useContext(bh);
  return n == null ? null : /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement("div", {
    className: e,
    style: o
  }, n), t < a && r && /* @__PURE__ */ d.createElement("span", {
    className: `${e}-split`
  }, r));
};
var v6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const g6 = /* @__PURE__ */ d.forwardRef((e, t) => {
  var n;
  const {
    getPrefixCls: r,
    direction: o,
    size: a,
    className: i,
    style: l,
    classNames: s,
    styles: c
  } = zo("space"), {
    size: u = a ?? "small",
    align: f,
    className: m,
    rootClassName: h,
    children: g,
    direction: p = "horizontal",
    prefixCls: v,
    split: C,
    style: b,
    wrap: x = !1,
    classNames: $,
    styles: y
  } = e, S = v6(e, ["size", "align", "className", "rootClassName", "children", "direction", "prefixCls", "split", "style", "wrap", "classNames", "styles"]), [w, E] = Array.isArray(u) ? u : [u, u], O = um(E), P = um(w), N = dm(E), R = dm(w), _ = Ir(g, {
    keepEmpty: !0
  }), I = f === void 0 && p === "horizontal" ? "center" : f, k = r("space", v), [A, D, F] = wg(k), q = U(k, i, D, `${k}-${p}`, {
    [`${k}-rtl`]: o === "rtl",
    [`${k}-align-${I}`]: I,
    [`${k}-gap-row-${E}`]: O,
    [`${k}-gap-col-${w}`]: P
  }, m, h, F), K = U(`${k}-item`, (n = $?.item) !== null && n !== void 0 ? n : s.item), Q = Object.assign(Object.assign({}, c.item), y?.item), W = _.map((H, V) => {
    const te = H?.key || `${K}-${V}`;
    return /* @__PURE__ */ d.createElement(m6, {
      className: K,
      key: te,
      index: V,
      split: C,
      style: Q
    }, H);
  }), L = d.useMemo(() => ({
    latestIndex: _.reduce((V, te, Y) => te != null ? Y : V, 0)
  }), [_]);
  if (_.length === 0)
    return null;
  const z = {};
  return x && (z.flexWrap = "wrap"), !P && R && (z.columnGap = w), !O && N && (z.rowGap = E), A(/* @__PURE__ */ d.createElement("div", Object.assign({
    ref: t,
    className: q,
    style: Object.assign(Object.assign(Object.assign({}, z), l), b)
  }, S), /* @__PURE__ */ d.createElement(f6, {
    value: L
  }, W)));
}), Iu = g6;
Iu.Compact = gx;
process.env.NODE_ENV !== "production" && (Iu.displayName = "Space");
var p6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const yh = (e) => {
  const {
    getPopupContainer: t,
    getPrefixCls: n,
    direction: r
  } = d.useContext(Be), {
    prefixCls: o,
    type: a = "default",
    danger: i,
    disabled: l,
    loading: s,
    onClick: c,
    htmlType: u,
    children: f,
    className: m,
    menu: h,
    arrow: g,
    autoFocus: p,
    overlay: v,
    trigger: C,
    align: b,
    open: x,
    onOpenChange: $,
    placement: y,
    getPopupContainer: S,
    href: w,
    icon: E = /* @__PURE__ */ d.createElement(Nu, null),
    title: O,
    buttonsRender: P = (le) => le,
    mouseEnterDelay: N,
    mouseLeaveDelay: R,
    overlayClassName: _,
    overlayStyle: I,
    destroyOnHidden: k,
    destroyPopupOnHide: A,
    dropdownRender: D,
    popupRender: F
  } = e, q = p6(e, ["prefixCls", "type", "danger", "disabled", "loading", "onClick", "htmlType", "children", "className", "menu", "arrow", "autoFocus", "overlay", "trigger", "align", "open", "onOpenChange", "placement", "getPopupContainer", "href", "icon", "title", "buttonsRender", "mouseEnterDelay", "mouseLeaveDelay", "overlayClassName", "overlayStyle", "destroyOnHidden", "destroyPopupOnHide", "dropdownRender", "popupRender"]), K = n("dropdown", o), Q = `${K}-button`, L = {
    menu: h,
    arrow: g,
    autoFocus: p,
    align: b,
    disabled: l,
    trigger: l ? [] : C,
    onOpenChange: $,
    getPopupContainer: S || t,
    mouseEnterDelay: N,
    mouseLeaveDelay: R,
    overlayClassName: _,
    overlayStyle: I,
    destroyOnHidden: k,
    popupRender: F || D
  }, {
    compactSize: z,
    compactItemClassnames: H
  } = Da(K, r), V = U(Q, H, m);
  "destroyPopupOnHide" in e && (L.destroyPopupOnHide = A), "overlay" in e && (L.overlay = v), "open" in e && (L.open = x), "placement" in e ? L.placement = y : L.placement = r === "rtl" ? "bottomLeft" : "bottomRight";
  const te = /* @__PURE__ */ d.createElement(dr, {
    type: a,
    danger: i,
    disabled: l,
    loading: s,
    onClick: c,
    htmlType: u,
    href: w,
    title: O
  }, f), Y = /* @__PURE__ */ d.createElement(dr, {
    type: a,
    danger: i,
    icon: E
  }), [J, ae] = P([te, Y]);
  return /* @__PURE__ */ d.createElement(Iu.Compact, Object.assign({
    className: V,
    size: z,
    block: !0
  }, q), J, /* @__PURE__ */ d.createElement(Ua, Object.assign({}, L), ae));
};
yh.__ANT_BUTTON = !0;
const Ch = Ua;
Ch.Button = yh;
var h6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z" } }] }, name: "eye", theme: "outlined" }, b6 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: h6
  }));
}, xh = /* @__PURE__ */ d.forwardRef(b6);
process.env.NODE_ENV !== "production" && (xh.displayName = "EyeOutlined");
const y6 = (e) => {
  const {
    getPrefixCls: t,
    direction: n
  } = Ge(Be), {
    prefixCls: r,
    className: o
  } = e, a = t("input-group", r), i = t("input"), [l, s, c] = fh(i), u = U(a, c, {
    [`${a}-lg`]: e.size === "large",
    [`${a}-sm`]: e.size === "small",
    [`${a}-compact`]: e.compact,
    [`${a}-rtl`]: n === "rtl"
  }, s, o), f = Ge(fr), m = Ot(() => Object.assign(Object.assign({}, f), {
    isFormItemInput: !1
  }), [f]);
  return process.env.NODE_ENV !== "production" && Rt("Input.Group").deprecated(!1, "Input.Group", "Space.Compact"), l(/* @__PURE__ */ d.createElement("span", {
    className: u,
    style: e.style,
    onMouseEnter: e.onMouseEnter,
    onMouseLeave: e.onMouseLeave,
    onFocus: e.onFocus,
    onBlur: e.onBlur
  }, /* @__PURE__ */ d.createElement(fr.Provider, {
    value: m
  }, e.children)));
}, C6 = (e) => {
  const {
    componentCls: t,
    paddingXS: n
  } = e;
  return {
    [t]: {
      display: "inline-flex",
      alignItems: "center",
      flexWrap: "nowrap",
      columnGap: n,
      [`${t}-input-wrapper`]: {
        position: "relative",
        [`${t}-mask-icon`]: {
          position: "absolute",
          zIndex: "1",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
          pointerEvents: "none"
        },
        [`${t}-mask-input`]: {
          color: "transparent",
          caretColor: e.colorText
        },
        [`${t}-mask-input[type=number]::-webkit-inner-spin-button`]: {
          "-webkit-appearance": "none",
          margin: 0
        },
        [`${t}-mask-input[type=number]`]: {
          "-moz-appearance": "textfield"
        }
      },
      "&-rtl": {
        direction: "rtl"
      },
      [`${t}-input`]: {
        textAlign: "center",
        paddingInline: e.paddingXXS
      },
      // ================= Size =================
      [`&${t}-sm ${t}-input`]: {
        paddingInline: e.calc(e.paddingXXS).div(2).equal()
      },
      [`&${t}-lg ${t}-input`]: {
        paddingInline: e.paddingXS
      }
    }
  };
}, x6 = Vt(["Input", "OTP"], (e) => {
  const t = $t(e, Tl(e));
  return C6(t);
}, _l);
var S6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const w6 = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    className: n,
    value: r,
    onChange: o,
    onActiveChange: a,
    index: i,
    mask: l
  } = e, s = S6(e, ["className", "value", "onChange", "onActiveChange", "index", "mask"]), {
    getPrefixCls: c
  } = d.useContext(Be), u = c("otp"), f = typeof l == "string" ? l : r, m = d.useRef(null);
  d.useImperativeHandle(t, () => m.current);
  const h = (v) => {
    o(i, v.target.value);
  }, g = () => {
    ft(() => {
      var v;
      const C = (v = m.current) === null || v === void 0 ? void 0 : v.input;
      document.activeElement === C && C && C.select();
    });
  }, p = (v) => {
    const {
      key: C,
      ctrlKey: b,
      metaKey: x
    } = v;
    C === "ArrowLeft" ? a(i - 1) : C === "ArrowRight" ? a(i + 1) : C === "z" && (b || x) ? v.preventDefault() : C === "Backspace" && !r && a(i - 1), g();
  };
  return /* @__PURE__ */ d.createElement("span", {
    className: `${u}-input-wrapper`,
    role: "presentation"
  }, l && r !== "" && r !== void 0 && /* @__PURE__ */ d.createElement("span", {
    className: `${u}-mask-icon`,
    "aria-hidden": "true"
  }, f), /* @__PURE__ */ d.createElement(Ka, Object.assign({
    "aria-label": `OTP Input ${i + 1}`,
    type: l === !0 ? "password" : "text"
  }, s, {
    ref: m,
    value: r,
    onInput: h,
    onFocus: g,
    onKeyDown: p,
    onMouseDown: g,
    onMouseUp: g,
    className: U(n, {
      [`${u}-mask-input`]: l
    })
  })));
});
var $6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
function fi(e) {
  return (e || "").split("");
}
const E6 = (e) => {
  const {
    index: t,
    prefixCls: n,
    separator: r
  } = e, o = typeof r == "function" ? r(t) : r;
  return o ? /* @__PURE__ */ d.createElement("span", {
    className: `${n}-separator`
  }, o) : null;
}, O6 = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    length: r = 6,
    size: o,
    defaultValue: a,
    value: i,
    onChange: l,
    formatter: s,
    separator: c,
    variant: u,
    disabled: f,
    status: m,
    autoFocus: h,
    mask: g,
    type: p,
    onInput: v,
    inputMode: C
  } = e, b = $6(e, ["prefixCls", "length", "size", "defaultValue", "value", "onChange", "formatter", "separator", "variant", "disabled", "status", "autoFocus", "mask", "type", "onInput", "inputMode"]);
  if (process.env.NODE_ENV !== "production") {
    const z = Rt("Input.OTP");
    process.env.NODE_ENV !== "production" && z(!(typeof g == "string" && g.length > 1), "usage", "`mask` prop should be a single character.");
  }
  const {
    getPrefixCls: x,
    direction: $
  } = d.useContext(Be), y = x("otp", n), S = Fa(b, {
    aria: !0,
    data: !0,
    attr: !0
  }), [w, E, O] = x6(y), P = Vo((z) => o ?? z), N = d.useContext(fr), R = bu(N.status, m), _ = d.useMemo(() => Object.assign(Object.assign({}, N), {
    status: R,
    hasFeedback: !1,
    feedbackIcon: null
  }), [N, R]), I = d.useRef(null), k = d.useRef({});
  d.useImperativeHandle(t, () => ({
    focus: () => {
      var z;
      (z = k.current[0]) === null || z === void 0 || z.focus();
    },
    blur: () => {
      var z;
      for (let H = 0; H < r; H += 1)
        (z = k.current[H]) === null || z === void 0 || z.blur();
    },
    nativeElement: I.current
  }));
  const A = (z) => s ? s(z) : z, [D, F] = d.useState(() => fi(A(a || "")));
  d.useEffect(() => {
    i !== void 0 && F(fi(i));
  }, [i]);
  const q = bt((z) => {
    F(z), v && v(z), l && z.length === r && z.every((H) => H) && z.some((H, V) => D[V] !== H) && l(z.join(""));
  }), K = bt((z, H) => {
    let V = de(D);
    for (let Y = 0; Y < z; Y += 1)
      V[Y] || (V[Y] = "");
    H.length <= 1 ? V[z] = H : V = V.slice(0, z).concat(fi(H)), V = V.slice(0, r);
    for (let Y = V.length - 1; Y >= 0 && !V[Y]; Y -= 1)
      V.pop();
    const te = A(V.map((Y) => Y || " ").join(""));
    return V = fi(te).map((Y, J) => Y === " " && !V[J] ? V[J] : Y), V;
  }), Q = (z, H) => {
    var V;
    const te = K(z, H), Y = Math.min(z + H.length, r - 1);
    Y !== z && te[z] !== void 0 && ((V = k.current[Y]) === null || V === void 0 || V.focus()), q(te);
  }, W = (z) => {
    var H;
    (H = k.current[z]) === null || H === void 0 || H.focus();
  }, L = {
    variant: u,
    disabled: f,
    status: R,
    mask: g,
    type: p,
    inputMode: C
  };
  return w(/* @__PURE__ */ d.createElement("div", Object.assign({}, S, {
    ref: I,
    className: U(y, {
      [`${y}-sm`]: P === "small",
      [`${y}-lg`]: P === "large",
      [`${y}-rtl`]: $ === "rtl"
    }, O, E),
    role: "group"
  }), /* @__PURE__ */ d.createElement(fr.Provider, {
    value: _
  }, Array.from({
    length: r
  }).map((z, H) => {
    const V = `otp-${H}`, te = D[H] || "";
    return /* @__PURE__ */ d.createElement(d.Fragment, {
      key: V
    }, /* @__PURE__ */ d.createElement(w6, Object.assign({
      ref: (Y) => {
        k.current[H] = Y;
      },
      index: H,
      size: P,
      htmlSize: 1,
      className: `${y}-input`,
      onChange: Q,
      value: te,
      onActiveChange: W,
      autoFocus: H === 0 && h
    }, L)), H < r - 1 && /* @__PURE__ */ d.createElement(E6, {
      separator: c,
      index: H,
      prefixCls: y
    }));
  }))));
});
var P6 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z" } }, { tag: "path", attrs: { d: "M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z" } }] }, name: "eye-invisible", theme: "outlined" }, N6 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: P6
  }));
}, Sh = /* @__PURE__ */ d.forwardRef(N6);
process.env.NODE_ENV !== "production" && (Sh.displayName = "EyeInvisibleOutlined");
var R6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const I6 = (e) => e ? /* @__PURE__ */ d.createElement(xh, null) : /* @__PURE__ */ d.createElement(Sh, null), M6 = {
  click: "onClick",
  hover: "onMouseOver"
}, wh = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    disabled: n,
    action: r = "click",
    visibilityToggle: o = !0,
    iconRender: a = I6,
    suffix: i
  } = e, l = d.useContext(Yr), s = n ?? l, c = typeof o == "object" && o.visible !== void 0, [u, f] = Ht(() => c ? o.visible : !1), m = fe(null);
  d.useEffect(() => {
    c && f(o.visible);
  }, [c, o]);
  const h = hh(m), g = () => {
    var N;
    if (s)
      return;
    u && h();
    const R = !u;
    f(R), typeof o == "object" && ((N = o.onVisibleChange) === null || N === void 0 || N.call(o, R));
  }, p = (N) => {
    const R = M6[r] || "", _ = a(u), I = {
      [R]: g,
      className: `${N}-icon`,
      key: "passwordIcon",
      onMouseDown: (k) => {
        k.preventDefault();
      },
      onMouseUp: (k) => {
        k.preventDefault();
      }
    };
    return /* @__PURE__ */ d.cloneElement(/* @__PURE__ */ d.isValidElement(_) ? _ : /* @__PURE__ */ d.createElement("span", null, _), I);
  }, {
    className: v,
    prefixCls: C,
    inputPrefixCls: b,
    size: x
  } = e, $ = R6(e, ["className", "prefixCls", "inputPrefixCls", "size"]), {
    getPrefixCls: y
  } = d.useContext(Be), S = y("input", b), w = y("input-password", C), E = o && p(w), O = U(w, v, {
    [`${w}-${x}`]: !!x
  }), P = Object.assign(Object.assign({}, an($, ["suffix", "iconRender", "visibilityToggle"])), {
    type: u ? "text" : "password",
    className: O,
    prefixCls: S,
    suffix: /* @__PURE__ */ d.createElement(d.Fragment, null, E, i)
  });
  return x && (P.size = x), /* @__PURE__ */ d.createElement(Ka, Object.assign({
    ref: Jn(t, m)
  }, P));
});
process.env.NODE_ENV !== "production" && (wh.displayName = "Input.Password");
var T6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const $h = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    inputPrefixCls: r,
    className: o,
    size: a,
    suffix: i,
    enterButton: l = !1,
    addonAfter: s,
    loading: c,
    disabled: u,
    onSearch: f,
    onChange: m,
    onCompositionStart: h,
    onCompositionEnd: g,
    variant: p,
    onPressEnter: v
  } = e, C = T6(e, ["prefixCls", "inputPrefixCls", "className", "size", "suffix", "enterButton", "addonAfter", "loading", "disabled", "onSearch", "onChange", "onCompositionStart", "onCompositionEnd", "variant", "onPressEnter"]), {
    getPrefixCls: b,
    direction: x
  } = d.useContext(Be), $ = d.useRef(!1), y = b("input-search", n), S = b("input", r), {
    compactSize: w
  } = Da(y, x), E = Vo((L) => {
    var z;
    return (z = a ?? w) !== null && z !== void 0 ? z : L;
  }), O = d.useRef(null), P = (L) => {
    L?.target && L.type === "click" && f && f(L.target.value, L, {
      source: "clear"
    }), m?.(L);
  }, N = (L) => {
    var z;
    document.activeElement === ((z = O.current) === null || z === void 0 ? void 0 : z.input) && L.preventDefault();
  }, R = (L) => {
    var z, H;
    f && f((H = (z = O.current) === null || z === void 0 ? void 0 : z.input) === null || H === void 0 ? void 0 : H.value, L, {
      source: "input"
    });
  }, _ = (L) => {
    $.current || c || (v?.(L), R(L));
  }, I = typeof l == "boolean" ? /* @__PURE__ */ d.createElement(yu, null) : null, k = `${y}-button`;
  let A;
  const D = l || {}, F = D.type && D.type.__ANT_BUTTON === !0;
  F || D.type === "button" ? A = cr(D, Object.assign({
    onMouseDown: N,
    onClick: (L) => {
      var z, H;
      (H = (z = D?.props) === null || z === void 0 ? void 0 : z.onClick) === null || H === void 0 || H.call(z, L), R(L);
    },
    key: "enterButton"
  }, F ? {
    className: k,
    size: E
  } : {})) : A = /* @__PURE__ */ d.createElement(dr, {
    className: k,
    color: l ? "primary" : "default",
    size: E,
    disabled: u,
    key: "enterButton",
    onMouseDown: N,
    onClick: R,
    loading: c,
    icon: I,
    variant: p === "borderless" || p === "filled" || p === "underlined" ? "text" : l ? "solid" : void 0
  }, l), s && (A = [A, cr(s, {
    key: "addonAfter"
  })]);
  const q = U(y, {
    [`${y}-rtl`]: x === "rtl",
    [`${y}-${E}`]: !!E,
    [`${y}-with-button`]: !!l
  }, o), K = (L) => {
    $.current = !0, h?.(L);
  }, Q = (L) => {
    $.current = !1, g?.(L);
  }, W = Object.assign(Object.assign({}, C), {
    className: q,
    prefixCls: S,
    type: "search",
    size: E,
    variant: p,
    onPressEnter: _,
    onCompositionStart: K,
    onCompositionEnd: Q,
    addonAfter: A,
    suffix: i,
    onChange: P,
    disabled: u
  });
  return /* @__PURE__ */ d.createElement(Ka, Object.assign({
    ref: Jn(O, t)
  }, W));
});
process.env.NODE_ENV !== "production" && ($h.displayName = "Search");
var _6 = `
  min-height:0 !important;
  max-height:none !important;
  height:0 !important;
  visibility:hidden !important;
  overflow:hidden !important;
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
  pointer-events: none !important;
`, A6 = ["letter-spacing", "line-height", "padding-top", "padding-bottom", "font-family", "font-weight", "font-size", "font-variant", "text-rendering", "text-transform", "width", "text-indent", "padding-left", "padding-right", "border-width", "box-sizing", "word-break", "white-space"], ys = {}, bn;
function j6(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = e.getAttribute("id") || e.getAttribute("data-reactid") || e.getAttribute("name");
  if (t && ys[n])
    return ys[n];
  var r = window.getComputedStyle(e), o = r.getPropertyValue("box-sizing") || r.getPropertyValue("-moz-box-sizing") || r.getPropertyValue("-webkit-box-sizing"), a = parseFloat(r.getPropertyValue("padding-bottom")) + parseFloat(r.getPropertyValue("padding-top")), i = parseFloat(r.getPropertyValue("border-bottom-width")) + parseFloat(r.getPropertyValue("border-top-width")), l = A6.map(function(c) {
    return "".concat(c, ":").concat(r.getPropertyValue(c));
  }).join(";"), s = {
    sizingStyle: l,
    paddingSize: a,
    borderSize: i,
    boxSizing: o
  };
  return t && n && (ys[n] = s), s;
}
function F6(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  bn || (bn = document.createElement("textarea"), bn.setAttribute("tab-index", "-1"), bn.setAttribute("aria-hidden", "true"), bn.setAttribute("name", "hiddenTextarea"), document.body.appendChild(bn)), e.getAttribute("wrap") ? bn.setAttribute("wrap", e.getAttribute("wrap")) : bn.removeAttribute("wrap");
  var o = j6(e, t), a = o.paddingSize, i = o.borderSize, l = o.boxSizing, s = o.sizingStyle;
  bn.setAttribute("style", "".concat(s, ";").concat(_6)), bn.value = e.value || e.placeholder || "";
  var c = void 0, u = void 0, f, m = bn.scrollHeight;
  if (l === "border-box" ? m += i : l === "content-box" && (m -= a), n !== null || r !== null) {
    bn.value = " ";
    var h = bn.scrollHeight - a;
    n !== null && (c = h * n, l === "border-box" && (c = c + a + i), m = Math.max(c, m)), r !== null && (u = h * r, l === "border-box" && (u = u + a + i), f = m > u ? "" : "hidden", m = Math.min(u, m));
  }
  var g = {
    height: m,
    overflowY: f,
    resize: "none"
  };
  return c && (g.minHeight = c), u && (g.maxHeight = u), g;
}
var B6 = ["prefixCls", "defaultValue", "value", "autoSize", "onResize", "className", "style", "disabled", "onChange", "onInternalAutoSize"], Cs = 0, xs = 1, Ss = 2, k6 = /* @__PURE__ */ d.forwardRef(function(e, t) {
  var n = e, r = n.prefixCls, o = n.defaultValue, a = n.value, i = n.autoSize, l = n.onResize, s = n.className, c = n.style, u = n.disabled, f = n.onChange, m = n.onInternalAutoSize, h = De(n, B6), g = Vn(o, {
    value: a,
    postState: function(z) {
      return z ?? "";
    }
  }), p = G(g, 2), v = p[0], C = p[1], b = function(z) {
    C(z.target.value), f?.(z);
  }, x = d.useRef();
  d.useImperativeHandle(t, function() {
    return {
      textArea: x.current
    };
  });
  var $ = d.useMemo(function() {
    return i && Se(i) === "object" ? [i.minRows, i.maxRows] : [];
  }, [i]), y = G($, 2), S = y[0], w = y[1], E = !!i, O = d.useState(Ss), P = G(O, 2), N = P[0], R = P[1], _ = d.useState(), I = G(_, 2), k = I[0], A = I[1], D = function() {
    R(Cs), process.env.NODE_ENV === "test" && m?.();
  };
  wt(function() {
    E && D();
  }, [a, S, w, E]), wt(function() {
    if (N === Cs)
      R(xs);
    else if (N === xs) {
      var L = F6(x.current, !1, S, w);
      R(Ss), A(L);
    }
  }, [N]);
  var F = d.useRef(), q = function() {
    ft.cancel(F.current);
  }, K = function(z) {
    N === Ss && (l?.(z), i && (q(), F.current = ft(function() {
      D();
    })));
  };
  d.useEffect(function() {
    return q;
  }, []);
  var Q = E ? k : null, W = T(T({}, c), Q);
  return (N === Cs || N === xs) && (W.overflowY = "hidden", W.overflowX = "hidden"), /* @__PURE__ */ d.createElement(gr, {
    onResize: K,
    disabled: !(i || l)
  }, /* @__PURE__ */ d.createElement("textarea", ve({}, h, {
    ref: x,
    style: W,
    className: U(r, s, j({}, "".concat(r, "-disabled"), u)),
    disabled: u,
    value: v,
    onChange: b
  })));
}), D6 = ["defaultValue", "value", "onFocus", "onBlur", "onChange", "allowClear", "maxLength", "onCompositionStart", "onCompositionEnd", "suffix", "prefixCls", "showCount", "count", "className", "style", "disabled", "hidden", "classNames", "styles", "onResize", "onClear", "onPressEnter", "readOnly", "autoSize", "onKeyDown"], L6 = /* @__PURE__ */ M.forwardRef(function(e, t) {
  var n, r = e.defaultValue, o = e.value, a = e.onFocus, i = e.onBlur, l = e.onChange, s = e.allowClear, c = e.maxLength, u = e.onCompositionStart, f = e.onCompositionEnd, m = e.suffix, h = e.prefixCls, g = h === void 0 ? "rc-textarea" : h, p = e.showCount, v = e.count, C = e.className, b = e.style, x = e.disabled, $ = e.hidden, y = e.classNames, S = e.styles, w = e.onResize, E = e.onClear, O = e.onPressEnter, P = e.readOnly, N = e.autoSize, R = e.onKeyDown, _ = De(e, D6), I = Vn(r, {
    value: o,
    defaultValue: r
  }), k = G(I, 2), A = k[0], D = k[1], F = A == null ? "" : String(A), q = M.useState(!1), K = G(q, 2), Q = K[0], W = K[1], L = M.useRef(!1), z = M.useState(null), H = G(z, 2), V = H[0], te = H[1], Y = fe(null), J = fe(null), ae = function() {
    var ye;
    return (ye = J.current) === null || ye === void 0 ? void 0 : ye.textArea;
  }, le = function() {
    ae().focus();
  };
  Ia(t, function() {
    var Re;
    return {
      resizableTextArea: J.current,
      focus: le,
      blur: function() {
        ae().blur();
      },
      nativeElement: ((Re = Y.current) === null || Re === void 0 ? void 0 : Re.nativeElement) || ae()
    };
  }), yt(function() {
    W(function(Re) {
      return !x && Re;
    });
  }, [x]);
  var X = M.useState(null), se = G(X, 2), Z = se[0], oe = se[1];
  M.useEffect(function() {
    if (Z) {
      var Re;
      (Re = ae()).setSelectionRange.apply(Re, de(Z));
    }
  }, [Z]);
  var ne = gh(v, p), me = (n = ne.max) !== null && n !== void 0 ? n : c, ie = Number(me) > 0, ce = ne.strategy(F), we = !!me && ce > me, xe = function(ye, Me) {
    var Fe = Me;
    !L.current && ne.exceedFormatter && ne.max && ne.strategy(Me) > ne.max && (Fe = ne.exceedFormatter(Me, {
      max: ne.max
    }), Me !== Fe && oe([ae().selectionStart || 0, ae().selectionEnd || 0])), D(Fe), Qi(ye.currentTarget, ye, l, Fe);
  }, Pe = function(ye) {
    L.current = !0, u?.(ye);
  }, he = function(ye) {
    L.current = !1, xe(ye, ye.currentTarget.value), f?.(ye);
  }, re = function(ye) {
    xe(ye, ye.target.value);
  }, Ce = function(ye) {
    ye.key === "Enter" && O && O(ye), R?.(ye);
  }, _e = function(ye) {
    W(!0), a?.(ye);
  }, Ke = function(ye) {
    W(!1), i?.(ye);
  }, Le = function(ye) {
    D(""), le(), Qi(ae(), ye, l);
  }, ze = m, Xe;
  ne.show && (ne.showFormatter ? Xe = ne.showFormatter({
    value: F,
    count: ce,
    maxLength: me
  }) : Xe = "".concat(ce).concat(ie ? " / ".concat(me) : ""), ze = /* @__PURE__ */ M.createElement(M.Fragment, null, ze, /* @__PURE__ */ M.createElement("span", {
    className: U("".concat(g, "-data-count"), y?.count),
    style: S?.count
  }, Xe)));
  var Oe = function(ye) {
    var Me;
    w?.(ye), (Me = ae()) !== null && Me !== void 0 && Me.style.height && te(!0);
  }, Te = !N && !p && !s;
  return /* @__PURE__ */ M.createElement(vh, {
    ref: Y,
    value: F,
    allowClear: s,
    handleReset: Le,
    suffix: ze,
    prefixCls: g,
    classNames: T(T({}, y), {}, {
      affixWrapper: U(y?.affixWrapper, j(j({}, "".concat(g, "-show-count"), p), "".concat(g, "-textarea-allow-clear"), s))
    }),
    disabled: x,
    focused: Q,
    className: U(C, we && "".concat(g, "-out-of-range")),
    style: T(T({}, b), V && !Te ? {
      height: "auto"
    } : {}),
    dataAttrs: {
      affixWrapper: {
        "data-count": typeof Xe == "string" ? Xe : void 0
      }
    },
    hidden: $,
    readOnly: P,
    onClear: E
  }, /* @__PURE__ */ M.createElement(k6, ve({}, _, {
    autoSize: N,
    maxLength: c,
    onKeyDown: Ce,
    onChange: re,
    onFocus: _e,
    onBlur: Ke,
    onCompositionStart: Pe,
    onCompositionEnd: he,
    className: U(y?.textarea),
    style: T(T({}, S?.textarea), {}, {
      resize: b?.resize
    }),
    disabled: x,
    prefixCls: g,
    onResize: Oe,
    ref: J,
    readOnly: P
  })));
});
const z6 = (e) => {
  const {
    componentCls: t,
    paddingLG: n
  } = e, r = `${t}-textarea`;
  return {
    // Raw Textarea
    [`textarea${t}`]: {
      maxWidth: "100%",
      // prevent textarea resize from coming out of its container
      height: "auto",
      minHeight: e.controlHeight,
      lineHeight: e.lineHeight,
      verticalAlign: "bottom",
      transition: `all ${e.motionDurationSlow}`,
      resize: "vertical",
      [`&${t}-mouse-active`]: {
        transition: `all ${e.motionDurationSlow}, height 0s, width 0s`
      }
    },
    // Wrapper for resize
    [`${t}-textarea-affix-wrapper-resize-dirty`]: {
      width: "auto"
    },
    [r]: {
      position: "relative",
      "&-show-count": {
        [`${t}-data-count`]: {
          position: "absolute",
          bottom: e.calc(e.fontSize).mul(e.lineHeight).mul(-1).equal(),
          insetInlineEnd: 0,
          color: e.colorTextDescription,
          whiteSpace: "nowrap",
          pointerEvents: "none"
        }
      },
      [`
        &-allow-clear > ${t},
        &-affix-wrapper${r}-has-feedback ${t}
      `]: {
        paddingInlineEnd: n
      },
      [`&-affix-wrapper${t}-affix-wrapper`]: {
        padding: 0,
        [`> textarea${t}`]: {
          fontSize: "inherit",
          border: "none",
          outline: "none",
          background: "transparent",
          minHeight: e.calc(e.controlHeight).sub(e.calc(e.lineWidth).mul(2)).equal(),
          "&:focus": {
            boxShadow: "none !important"
          }
        },
        [`${t}-suffix`]: {
          margin: 0,
          "> *:not(:last-child)": {
            marginInline: 0
          },
          // Clear Icon
          [`${t}-clear-icon`]: {
            position: "absolute",
            insetInlineEnd: e.paddingInline,
            insetBlockStart: e.paddingXS
          },
          // Feedback Icon
          [`${r}-suffix`]: {
            position: "absolute",
            top: 0,
            insetInlineEnd: e.paddingInline,
            bottom: 0,
            zIndex: 1,
            display: "inline-flex",
            alignItems: "center",
            margin: "auto",
            pointerEvents: "none"
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-rtl`]: {
        [`${t}-suffix`]: {
          [`${t}-data-count`]: {
            direction: "ltr",
            insetInlineStart: 0
          }
        }
      },
      [`&-affix-wrapper${t}-affix-wrapper-sm`]: {
        [`${t}-suffix`]: {
          [`${t}-clear-icon`]: {
            insetInlineEnd: e.paddingInlineSM
          }
        }
      }
    }
  };
}, H6 = Vt(["Input", "TextArea"], (e) => {
  const t = $t(e, Tl(e));
  return z6(t);
}, _l, {
  resetFont: !1
});
var V6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const W6 = /* @__PURE__ */ xn((e, t) => {
  var n;
  const {
    prefixCls: r,
    bordered: o = !0,
    size: a,
    disabled: i,
    status: l,
    allowClear: s,
    classNames: c,
    rootClassName: u,
    className: f,
    style: m,
    styles: h,
    variant: g,
    showCount: p,
    onMouseDown: v,
    onResize: C
  } = e, b = V6(e, ["prefixCls", "bordered", "size", "disabled", "status", "allowClear", "classNames", "rootClassName", "className", "style", "styles", "variant", "showCount", "onMouseDown", "onResize"]);
  if (process.env.NODE_ENV !== "production") {
    const {
      deprecated: ne
    } = Rt("TextArea");
    ne(!("bordered" in e), "bordered", "variant");
  }
  const {
    getPrefixCls: x,
    direction: $,
    allowClear: y,
    autoComplete: S,
    className: w,
    style: E,
    classNames: O,
    styles: P
  } = zo("textArea"), N = d.useContext(Yr), R = i ?? N, {
    status: _,
    hasFeedback: I,
    feedbackIcon: k
  } = d.useContext(fr), A = bu(_, l), D = d.useRef(null);
  d.useImperativeHandle(t, () => {
    var ne;
    return {
      resizableTextArea: (ne = D.current) === null || ne === void 0 ? void 0 : ne.resizableTextArea,
      focus: (me) => {
        var ie, ce;
        mh((ce = (ie = D.current) === null || ie === void 0 ? void 0 : ie.resizableTextArea) === null || ce === void 0 ? void 0 : ce.textArea, me);
      },
      blur: () => {
        var me;
        return (me = D.current) === null || me === void 0 ? void 0 : me.blur();
      }
    };
  });
  const F = x("input", r), q = er(F), [K, Q, W] = dh(F, u), [L] = H6(F, q), {
    compactSize: z,
    compactItemClassnames: H
  } = Da(F, $), V = Vo((ne) => {
    var me;
    return (me = a ?? z) !== null && me !== void 0 ? me : ne;
  }), [te, Y] = _p("textArea", g, o), J = ph(s ?? y), [ae, le] = d.useState(!1), [X, se] = d.useState(!1), Z = (ne) => {
    le(!0), v?.(ne);
    const me = () => {
      le(!1), document.removeEventListener("mouseup", me);
    };
    document.addEventListener("mouseup", me);
  }, oe = (ne) => {
    var me, ie;
    if (C?.(ne), ae && typeof getComputedStyle == "function") {
      const ce = (ie = (me = D.current) === null || me === void 0 ? void 0 : me.nativeElement) === null || ie === void 0 ? void 0 : ie.querySelector("textarea");
      ce && getComputedStyle(ce).resize === "both" && se(!0);
    }
  };
  return K(L(/* @__PURE__ */ d.createElement(L6, Object.assign({
    autoComplete: S
  }, b, {
    style: Object.assign(Object.assign({}, E), m),
    styles: Object.assign(Object.assign({}, P), h),
    disabled: R,
    allowClear: J,
    className: U(
      W,
      q,
      f,
      u,
      H,
      w,
      // Only for wrapper
      X && `${F}-textarea-affix-wrapper-resize-dirty`
    ),
    classNames: Object.assign(Object.assign(Object.assign({}, c), O), {
      textarea: U({
        [`${F}-sm`]: V === "small",
        [`${F}-lg`]: V === "large"
      }, Q, c?.textarea, O.textarea, ae && `${F}-mouse-active`),
      variant: U({
        [`${F}-${te}`]: Y
      }, Nc(F, A)),
      affixWrapper: U(`${F}-textarea-affix-wrapper`, {
        [`${F}-affix-wrapper-rtl`]: $ === "rtl",
        [`${F}-affix-wrapper-sm`]: V === "small",
        [`${F}-affix-wrapper-lg`]: V === "large",
        [`${F}-textarea-show-count`]: p || ((n = e.count) === null || n === void 0 ? void 0 : n.show)
      }, Q)
    }),
    prefixCls: F,
    suffix: I && /* @__PURE__ */ d.createElement("span", {
      className: `${F}-textarea-suffix`
    }, k),
    showCount: p,
    ref: D,
    onResize: oe,
    onMouseDown: Z
  }))));
}), Fr = Ka;
Fr.Group = y6;
Fr.Search = $h;
Fr.TextArea = W6;
Fr.Password = wh;
Fr.OTP = O6;
let _n = null, Gr = (e) => e(), wa = [], $a = {};
function fm() {
  const {
    getContainer: e,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  } = $a, a = e?.() || document.body;
  return {
    getContainer: () => a,
    duration: t,
    rtl: n,
    maxCount: r,
    top: o
  };
}
const G6 = /* @__PURE__ */ M.forwardRef((e, t) => {
  const {
    messageConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = Ge(Be), a = $a.prefixCls || o("message"), i = Ge(Sp), [l, s] = yg(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.message));
  return M.useImperativeHandle(t, () => {
    const c = Object.assign({}, l);
    return Object.keys(c).forEach((u) => {
      c[u] = (...f) => (r(), l[u].apply(l, f));
    }), {
      instance: c,
      sync: r
    };
  }), s;
}), q6 = /* @__PURE__ */ M.forwardRef((e, t) => {
  const [n, r] = M.useState(fm), o = () => {
    r(fm);
  };
  M.useEffect(o, []);
  const a = Aa(), i = a.getRootPrefixCls(), l = a.getIconPrefixCls(), s = a.getTheme(), c = /* @__PURE__ */ M.createElement(G6, {
    ref: t,
    sync: o,
    messageConfig: n
  });
  return /* @__PURE__ */ M.createElement(dn, {
    prefixCls: i,
    iconPrefixCls: l,
    theme: s
  }, a.holderRender ? a.holderRender(c) : c);
}), Al = () => {
  if (!_n) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    _n = t, Gr(() => {
      gl()(/* @__PURE__ */ M.createElement(q6, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, Al());
          });
        }
      }), e);
    });
    return;
  }
  _n.instance && (wa.forEach((e) => {
    const {
      type: t,
      skipped: n
    } = e;
    if (!n)
      switch (t) {
        case "open": {
          Gr(() => {
            const r = _n.instance.open(Object.assign(Object.assign({}, $a), e.config));
            r?.then(e.resolve), e.setCloseFn(r);
          });
          break;
        }
        case "destroy":
          Gr(() => {
            _n?.instance.destroy(e.key);
          });
          break;
        // Other type open
        default:
          Gr(() => {
            var r;
            const o = (r = _n.instance)[t].apply(r, de(e.args));
            o?.then(e.resolve), e.setCloseFn(o);
          });
      }
  }), wa = []);
};
function U6(e) {
  $a = Object.assign(Object.assign({}, $a), e), Gr(() => {
    var t;
    (t = _n?.sync) === null || t === void 0 || t.call(_n);
  });
}
function K6(e) {
  const t = lu((n) => {
    let r;
    const o = {
      type: "open",
      config: e,
      resolve: n,
      setCloseFn: (a) => {
        r = a;
      }
    };
    return wa.push(o), () => {
      r ? Gr(() => {
        r();
      }) : o.skipped = !0;
    };
  });
  return Al(), t;
}
function X6(e, t) {
  const n = Aa();
  process.env.NODE_ENV !== "production" && !n.holderRender && ou("message");
  const r = lu((o) => {
    let a;
    const i = {
      type: e,
      args: t,
      resolve: o,
      setCloseFn: (l) => {
        a = l;
      }
    };
    return wa.push(i), () => {
      a ? Gr(() => {
        a();
      }) : i.skipped = !0;
    };
  });
  return Al(), r;
}
const Y6 = (e) => {
  wa.push({
    type: "destroy",
    key: e
  }), Al();
}, Z6 = ["success", "info", "warning", "error", "loading"], Q6 = {
  open: K6,
  destroy: Y6,
  config: U6,
  useMessage: zC,
  _InternalPanelDoNotUseOrYouWillBeFired: _C
}, Eh = Q6;
Z6.forEach((e) => {
  Eh[e] = (...t) => X6(e, t);
});
process.env.NODE_ENV;
process.env.NODE_ENV;
var J6 = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const eO = (e) => {
  const {
    prefixCls: t,
    className: n,
    closeIcon: r,
    closable: o,
    type: a,
    title: i,
    children: l,
    footer: s
  } = e, c = J6(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls: u
  } = d.useContext(Be), f = u(), m = t || u("modal"), h = er(f), [g, p, v] = ap(m, h), C = `${m}-confirm`;
  let b = {};
  return a ? b = {
    closable: o ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ d.createElement(lp, Object.assign({}, e, {
      prefixCls: m,
      confirmPrefixCls: C,
      rootPrefixCls: f,
      content: l
    }))
  } : b = {
    closable: o ?? !0,
    title: i,
    footer: s !== null && /* @__PURE__ */ d.createElement(tp, Object.assign({}, e)),
    children: l
  }, g(/* @__PURE__ */ d.createElement(mu, Object.assign({
    prefixCls: m,
    className: U(p, `${m}-pure-panel`, a && C, a && `${C}-${a}`, n, v, h)
  }, c, {
    closeIcon: ep(m, r),
    closable: o
  }, b)));
}, tO = wp(eO);
function Oh(e) {
  return Va(dp(e));
}
const Sn = ip;
Sn.useModal = K2;
Sn.info = function(t) {
  return Va(fp(t));
};
Sn.success = function(t) {
  return Va(mp(t));
};
Sn.error = function(t) {
  return Va(vp(t));
};
Sn.warning = Oh;
Sn.warn = Oh;
Sn.confirm = function(t) {
  return Va(gp(t));
};
Sn.destroyAll = function() {
  for (; Wr.length; ) {
    const t = Wr.pop();
    t && t();
  }
};
Sn.config = V2;
Sn._InternalPanelDoNotUseOrYouWillBeFired = tO;
process.env.NODE_ENV !== "production" && (Sn.displayName = "Modal");
let Ln = null, Ri = (e) => e(), Ji = [], Ea = {};
function mm() {
  const {
    getContainer: e,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: o,
    showProgress: a,
    pauseOnHover: i
  } = Ea, l = e?.() || document.body;
  return {
    getContainer: () => l,
    rtl: t,
    maxCount: n,
    top: r,
    bottom: o,
    showProgress: a,
    pauseOnHover: i
  };
}
const nO = /* @__PURE__ */ M.forwardRef((e, t) => {
  const {
    notificationConfig: n,
    sync: r
  } = e, {
    getPrefixCls: o
  } = Ge(Be), a = Ea.prefixCls || o("notification"), i = Ge(Sp), [l, s] = xp(Object.assign(Object.assign(Object.assign({}, n), {
    prefixCls: a
  }), i.notification));
  return M.useEffect(r, []), M.useImperativeHandle(t, () => {
    const c = Object.assign({}, l);
    return Object.keys(c).forEach((u) => {
      c[u] = (...f) => (r(), l[u].apply(l, f));
    }), {
      instance: c,
      sync: r
    };
  }), s;
}), rO = /* @__PURE__ */ M.forwardRef((e, t) => {
  const [n, r] = M.useState(mm), o = () => {
    r(mm);
  };
  M.useEffect(o, []);
  const a = Aa(), i = a.getRootPrefixCls(), l = a.getIconPrefixCls(), s = a.getTheme(), c = /* @__PURE__ */ M.createElement(nO, {
    ref: t,
    sync: o,
    notificationConfig: n
  });
  return /* @__PURE__ */ M.createElement(dn, {
    prefixCls: i,
    iconPrefixCls: l,
    theme: s
  }, a.holderRender ? a.holderRender(c) : c);
}), Mu = () => {
  if (!Ln) {
    const e = document.createDocumentFragment(), t = {
      fragment: e
    };
    Ln = t, Ri(() => {
      gl()(/* @__PURE__ */ M.createElement(rO, {
        ref: (r) => {
          const {
            instance: o,
            sync: a
          } = r || {};
          Promise.resolve().then(() => {
            !t.instance && o && (t.instance = o, t.sync = a, Mu());
          });
        }
      }), e);
    });
    return;
  }
  Ln.instance && (Ji.forEach((e) => {
    switch (e.type) {
      case "open": {
        Ri(() => {
          Ln.instance.open(Object.assign(Object.assign({}, Ea), e.config));
        });
        break;
      }
      case "destroy":
        Ri(() => {
          var t;
          (t = Ln?.instance) === null || t === void 0 || t.destroy(e.key);
        });
        break;
    }
  }), Ji = []);
};
function oO(e) {
  Ea = Object.assign(Object.assign({}, Ea), e), Ri(() => {
    var t;
    (t = Ln?.sync) === null || t === void 0 || t.call(Ln);
  });
}
function Ph(e) {
  const t = Aa();
  process.env.NODE_ENV !== "production" && !t.holderRender && ou("notification"), Ji.push({
    type: "open",
    config: e
  }), Mu();
}
const aO = (e) => {
  Ji.push({
    type: "destroy",
    key: e
  }), Mu();
}, iO = ["success", "info", "warning", "error"], lO = {
  open: Ph,
  destroy: aO,
  config: oO,
  useNotification: p$,
  _InternalPanelDoNotUseOrYouWillBeFired: i$
}, Nh = lO;
iO.forEach((e) => {
  Nh[e] = (t) => Ph(Object.assign(Object.assign({}, t), {
    type: e
  }));
});
process.env.NODE_ENV;
process.env.NODE_ENV;
const sO = (e) => {
  const {
    paddingXXS: t,
    lineWidth: n,
    tagPaddingHorizontal: r,
    componentCls: o,
    calc: a
  } = e, i = a(r).sub(n).equal(), l = a(t).sub(n).equal();
  return {
    // Result
    [o]: Object.assign(Object.assign({}, pr(e)), {
      display: "inline-block",
      height: "auto",
      // https://github.com/ant-design/ant-design/pull/47504
      marginInlineEnd: e.marginXS,
      paddingInline: i,
      fontSize: e.tagFontSize,
      lineHeight: e.tagLineHeight,
      whiteSpace: "nowrap",
      background: e.defaultBg,
      border: `${ee(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
      borderRadius: e.borderRadiusSM,
      opacity: 1,
      transition: `all ${e.motionDurationMid}`,
      textAlign: "start",
      position: "relative",
      // RTL
      [`&${o}-rtl`]: {
        direction: "rtl"
      },
      "&, a, a:hover": {
        color: e.defaultColor
      },
      [`${o}-close-icon`]: {
        marginInlineStart: l,
        fontSize: e.tagIconSize,
        color: e.colorIcon,
        cursor: "pointer",
        transition: `all ${e.motionDurationMid}`,
        "&:hover": {
          color: e.colorTextHeading
        }
      },
      [`&${o}-has-color`]: {
        borderColor: "transparent",
        [`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]: {
          color: e.colorTextLightSolid
        }
      },
      "&-checkable": {
        backgroundColor: "transparent",
        borderColor: "transparent",
        cursor: "pointer",
        [`&:not(${o}-checkable-checked):hover`]: {
          color: e.colorPrimary,
          backgroundColor: e.colorFillSecondary
        },
        "&:active, &-checked": {
          color: e.colorTextLightSolid
        },
        "&-checked": {
          backgroundColor: e.colorPrimary,
          "&:hover": {
            backgroundColor: e.colorPrimaryHover
          }
        },
        "&:active": {
          backgroundColor: e.colorPrimaryActive
        }
      },
      "&-hidden": {
        display: "none"
      },
      // To ensure that a space will be placed between character and `Icon`.
      [`> ${e.iconCls} + span, > span + ${e.iconCls}`]: {
        marginInlineStart: i
      }
    }),
    [`${o}-borderless`]: {
      borderColor: "transparent",
      background: e.tagBorderlessBg
    }
  };
}, Tu = (e) => {
  const {
    lineWidth: t,
    fontSizeIcon: n,
    calc: r
  } = e, o = e.fontSizeSM;
  return $t(e, {
    tagFontSize: o,
    tagLineHeight: ee(r(e.lineHeightSM).mul(o).equal()),
    tagIconSize: r(n).sub(r(t).mul(2)).equal(),
    // Tag icon is much smaller
    tagPaddingHorizontal: 8,
    // Fixed padding.
    tagBorderlessBg: e.defaultBg
  });
}, _u = (e) => ({
  defaultBg: new mt(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),
  defaultColor: e.colorText
}), Rh = Vt("Tag", (e) => {
  const t = Tu(e);
  return sO(t);
}, _u);
var cO = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const uO = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    style: r,
    className: o,
    checked: a,
    children: i,
    icon: l,
    onChange: s,
    onClick: c
  } = e, u = cO(e, ["prefixCls", "style", "className", "checked", "children", "icon", "onChange", "onClick"]), {
    getPrefixCls: f,
    tag: m
  } = d.useContext(Be), h = (x) => {
    s?.(!a), c?.(x);
  }, g = f("tag", n), [p, v, C] = Rh(g), b = U(g, `${g}-checkable`, {
    [`${g}-checkable-checked`]: a
  }, m?.className, o, v, C);
  return p(/* @__PURE__ */ d.createElement("span", Object.assign({}, u, {
    ref: t,
    style: Object.assign(Object.assign({}, r), m?.style),
    className: b,
    onClick: h
  }), l, /* @__PURE__ */ d.createElement("span", null, i)));
}), dO = (e) => Vv(e, (t, {
  textColor: n,
  lightBorderColor: r,
  lightColor: o,
  darkColor: a
}) => ({
  [`${e.componentCls}${e.componentCls}-${t}`]: {
    color: n,
    background: o,
    borderColor: r,
    // Inverse color
    "&-inverse": {
      color: e.colorTextLightSolid,
      background: a,
      borderColor: a
    },
    [`&${e.componentCls}-borderless`]: {
      borderColor: "transparent"
    }
  }
})), fO = _a(["Tag", "preset"], (e) => {
  const t = Tu(e);
  return dO(t);
}, _u);
function mO(e) {
  return typeof e != "string" ? e : e.charAt(0).toUpperCase() + e.slice(1);
}
const mi = (e, t, n) => {
  const r = mO(n);
  return {
    [`${e.componentCls}${e.componentCls}-${t}`]: {
      color: e[`color${n}`],
      background: e[`color${r}Bg`],
      borderColor: e[`color${r}Border`],
      [`&${e.componentCls}-borderless`]: {
        borderColor: "transparent"
      }
    }
  };
}, vO = _a(["Tag", "status"], (e) => {
  const t = Tu(e);
  return [mi(t, "success", "Success"), mi(t, "processing", "Info"), mi(t, "error", "Error"), mi(t, "warning", "Warning")];
}, _u);
var gO = function(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
    t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
};
const pO = /* @__PURE__ */ d.forwardRef((e, t) => {
  const {
    prefixCls: n,
    className: r,
    rootClassName: o,
    style: a,
    children: i,
    icon: l,
    color: s,
    onClose: c,
    bordered: u = !0,
    visible: f
  } = e, m = gO(e, ["prefixCls", "className", "rootClassName", "style", "children", "icon", "color", "onClose", "bordered", "visible"]), {
    getPrefixCls: h,
    direction: g,
    tag: p
  } = d.useContext(Be), [v, C] = d.useState(!0), b = an(m, ["closeIcon", "closable"]);
  process.env.NODE_ENV !== "production" && Rt("Tag").deprecated(!("visible" in e), "visible", "visible && <Tag />"), d.useEffect(() => {
    f !== void 0 && C(f);
  }, [f]);
  const x = Lp(s), $ = bE(s), y = x || $, S = Object.assign(Object.assign({
    backgroundColor: s && !y ? s : void 0
  }, p?.style), a), w = h("tag", n), [E, O, P] = Rh(w), N = U(w, p?.className, {
    [`${w}-${s}`]: y,
    [`${w}-has-color`]: s && !y,
    [`${w}-hidden`]: !v,
    [`${w}-rtl`]: g === "rtl",
    [`${w}-borderless`]: !u
  }, r, o, O, P), R = (F) => {
    F.stopPropagation(), c?.(F), !F.defaultPrevented && C(!1);
  }, [, _] = gg(zi(e), zi(p), {
    closable: !1,
    closeIconRender: (F) => {
      const q = /* @__PURE__ */ d.createElement("span", {
        className: `${w}-close-icon`,
        onClick: R
      }, F);
      return cg(F, q, (K) => ({
        onClick: (Q) => {
          var W;
          (W = K?.onClick) === null || W === void 0 || W.call(K, Q), R(Q);
        },
        className: U(K?.className, `${w}-close-icon`)
      }));
    }
  }), I = typeof m.onClick == "function" || i && i.type === "a", k = l || null, A = k ? /* @__PURE__ */ d.createElement(d.Fragment, null, k, i && /* @__PURE__ */ d.createElement("span", null, i)) : i, D = /* @__PURE__ */ d.createElement("span", Object.assign({}, b, {
    ref: t,
    className: N,
    style: S
  }), A, _, x && /* @__PURE__ */ d.createElement(fO, {
    key: "preset",
    prefixCls: w
  }), $ && /* @__PURE__ */ d.createElement(vO, {
    key: "status",
    prefixCls: w
  }));
  return E(I ? /* @__PURE__ */ d.createElement(uu, {
    component: "Tag"
  }, D) : D);
}), $o = pO;
process.env.NODE_ENV !== "production" && ($o.displayName = "Tag");
$o.CheckableTag = uO;
const hO = (e) => {
  const t = e?.algorithm ? ji(e.algorithm) : Jc, n = Object.assign(Object.assign({}, jo), e?.token);
  return iv(n, {
    override: e?.token
  }, t, tu);
};
function bO(e) {
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
const yO = (e, t) => {
  const n = t ?? ll(e), r = n.fontSizeSM, o = n.controlHeight - 4;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, n), bO(t ?? e)), Av(r)), {
    // controlHeight
    controlHeight: o
  }), _v(Object.assign(Object.assign({}, n), {
    controlHeight: o
  })));
}, Tn = (e, t) => new mt(e).setA(t).toRgbString(), yo = (e, t) => new mt(e).lighten(t).toHexString(), CO = (e) => {
  const t = Xr(e, {
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
}, xO = (e, t) => {
  const n = e || "#000", r = t || "#fff";
  return {
    colorBgBase: n,
    colorTextBase: r,
    colorText: Tn(r, 0.85),
    colorTextSecondary: Tn(r, 0.65),
    colorTextTertiary: Tn(r, 0.45),
    colorTextQuaternary: Tn(r, 0.25),
    colorFill: Tn(r, 0.18),
    colorFillSecondary: Tn(r, 0.12),
    colorFillTertiary: Tn(r, 0.08),
    colorFillQuaternary: Tn(r, 0.04),
    colorBgSolid: Tn(r, 0.95),
    colorBgSolidHover: Tn(r, 1),
    colorBgSolidActive: Tn(r, 0.9),
    colorBgElevated: yo(n, 12),
    colorBgContainer: yo(n, 8),
    colorBgLayout: yo(n, 0),
    colorBgSpotlight: yo(n, 26),
    colorBgBlur: Tn(r, 0.04),
    colorBorder: yo(n, 26),
    colorBorderSecondary: yo(n, 19)
  };
}, SO = (e, t) => {
  const n = Object.keys(Qc).map((a) => {
    const i = Xr(e[a], {
      theme: "dark"
    });
    return Array.from({
      length: 10
    }, () => 1).reduce((l, s, c) => (l[`${a}-${c + 1}`] = i[c], l[`${a}${c + 1}`] = i[c], l), {});
  }).reduce((a, i) => (a = Object.assign(Object.assign({}, a), i), a), {}), r = t ?? ll(e), o = Tv(e, {
    generateColorPalettes: CO,
    generateNeutralColorPalettes: xO
  });
  return Object.assign(Object.assign(Object.assign(Object.assign({}, r), n), o), {
    // Customize selected item background color
    // https://github.com/ant-design/ant-design/issues/30524#issuecomment-871961867
    colorPrimaryBg: o.colorPrimaryBorder,
    colorPrimaryBgHover: o.colorPrimaryBorderHover
  });
};
function wO() {
  const [e, t, n] = jn();
  return {
    theme: e,
    token: t,
    hashId: n
  };
}
const jc = {
  /** Default seedToken */
  defaultSeed: pa.token,
  useToken: wO,
  defaultAlgorithm: ll,
  darkAlgorithm: SO,
  compactAlgorithm: yO,
  getDesignToken: hO,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  defaultConfig: pa,
  /**
   * @private Private variable
   * @warring 🔥 Do not use in production. 🔥
   */
  _internalContext: eu
};
function Ih(e) {
  var t, n, r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (n = Ih(e[t])) && (r && (r += " "), r += n);
  } else for (n in e) e[n] && (r && (r += " "), r += n);
  return r;
}
function $O() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++) (e = arguments[n]) && (t = Ih(e)) && (r && (r += " "), r += t);
  return r;
}
function pe(...e) {
  return $O(e);
}
const EO = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, OO = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", Mh = M.forwardRef(
  ({
    align: e = "center",
    interactive: t = !0,
    className: n,
    icon: r,
    iconSrc: o,
    iconAlt: a,
    iconSize: i = "lg",
    iconClassName: l,
    children: s,
    ...c
  }, u) => {
    const f = !!(r ?? o), m = () => f ? /* @__PURE__ */ B(
      Th,
      {
        size: i,
        className: l,
        children: r ?? (o ? /* @__PURE__ */ B(
          "img",
          {
            src: o,
            alt: a ?? "Card icon",
            className: "luca-h-full luca-w-full luca-object-contain"
          }
        ) : null)
      }
    ) : null;
    return /* @__PURE__ */ je(
      "div",
      {
        ref: u,
        "data-card-align": e,
        className: pe(
          "luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          t && OO,
          EO[e],
          n
        ),
        ...c,
        children: [
          m(),
          s
        ]
      }
    );
  }
);
Mh.displayName = "Card";
const PO = M.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ B(
    "div",
    {
      ref: r,
      className: pe(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        e
      ),
      ...n,
      children: t
    }
  )
);
PO.displayName = "CardHeader";
const NO = M.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ B(
    "strong",
    {
      ref: r,
      className: pe(
        "luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        e
      ),
      ...n,
      children: t
    }
  )
);
NO.displayName = "CardTitle";
const RO = M.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ B(
  "p",
  {
    ref: r,
    className: pe(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line",
      e
    ),
    ...n,
    children: t
  }
));
RO.displayName = "CardDescription";
const IO = M.forwardRef(
  ({ className: e, children: t, ...n }, r) => /* @__PURE__ */ B(
    "div",
    {
      ref: r,
      className: pe(
        "luca-w-full luca-text-sm",
        e
      ),
      ...n,
      children: t
    }
  )
);
IO.displayName = "CardContent";
const MO = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, Th = M.forwardRef(
  ({ className: e, children: t, size: n = "lg", ...r }, o) => /* @__PURE__ */ B(
    "div",
    {
      ref: o,
      className: pe(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        MO[n],
        e
      ),
      ...r,
      children: t
    }
  )
);
Th.displayName = "CardIcon";
const TO = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap disabled:luca-cursor-not-allowed", _O = {
  primary: {
    default: pe(
      // Default state - amarillo
      "luca-bg-[#ffba31] luca-text-[#111827] luca-shadow-[0px_4px_0px_0px_#f58f00]",
      // Hover, Active, Focus - mismo diseño (naranja más oscuro)
      "hover:luca-bg-[#f58f00] hover:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "active:luca-bg-[#f58f00] active:luca-shadow-[0px_4px_0px_0px_#d0780f]",
      "focus-visible:luca-bg-[#f58f00] focus-visible:luca-shadow-[0px_4px_0px_0px_#d0780f] focus-visible:luca-outline-none",
      // Disabled state - gris
      "disabled:luca-bg-[#f3f4f6] disabled:luca-text-[#9ca3af] disabled:luca-shadow-[0px_4px_0px_0px_#adadad]"
    ),
    alert: pe(
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
    default: pe(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200 luca-shadow-[0px_3px_0px_0px_#adadad]",
      "hover:luca-border-[#c5daff] hover:luca-text-[#3843d0]",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: pe(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  },
  tertiary: {
    default: pe(
      "!luca-rounded-full luca-bg-white luca-text-[#4b5563] luca-border luca-border-[#e5e7eb]",
      "hover:luca-bg-[#edf5ff] hover:luca-border-[#3843d0] hover:luca-text-[#3843d0]",
      "active:luca-bg-[#3843d0] active:luca-border-white active:luca-text-white",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-[#3843d0]"
    ),
    alert: pe(
      "!luca-rounded-full luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "hover:luca-bg-red-50",
      "disabled:luca-bg-gray-100 disabled:luca-text-gray-400 disabled:luca-border-gray-300",
      "focus-visible:luca-outline-red-500"
    )
  }
}, _h = M.forwardRef(
  ({
    variant: e = "primary",
    state: t = "default",
    leftIcon: n,
    rightIcon: r,
    className: o,
    children: a,
    disabled: i,
    type: l = "button",
    ...s
  }, c) => /* @__PURE__ */ je(
    "button",
    {
      ref: c,
      type: l,
      disabled: i,
      className: pe(
        TO,
        _O[e][t],
        o
      ),
      ...s,
      children: [
        n && /* @__PURE__ */ B("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: n }),
        /* @__PURE__ */ B("span", { className: "luca-leading-tight", children: a }),
        r && /* @__PURE__ */ B("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: r })
      ]
    }
  )
);
_h.displayName = "Button";
const vm = {
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
}, Ah = M.forwardRef(
  ({
    state: e = "default",
    outline: t = "default",
    icon: n,
    className: r,
    disabled: o,
    ...a
  }, i) => {
    const l = e === "disabled" || o;
    return /* @__PURE__ */ B(
      "button",
      {
        ref: i,
        disabled: l,
        className: pe(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          vm.state[e],
          vm.outline[t],
          // Hover styles solo si no está disabled
          !l && "hover:luca-bg-[#edf5ff] hover:luca-text-[#3843d0]",
          r
        ),
        ...a,
        children: /* @__PURE__ */ B("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: n })
      }
    );
  }
);
Ah.displayName = "ButtonIcon";
const AO = ({ className: e, color: t }) => /* @__PURE__ */ B(
  "svg",
  {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: e,
    children: /* @__PURE__ */ B(
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
), Y3 = ({
  variant: e = "fill",
  color: t = "primary",
  rounded: n = "semi",
  showIcon: r = !1,
  children: o,
  className: a,
  ...i
}) => {
  const l = "luca-inline-flex luca-items-center luca-justify-center luca-px-[10px] luca-py-[3px] luca-text-xs luca-leading-5 luca-font-normal", s = {
    semi: "luca-rounded",
    full: "luca-rounded-[30px]"
  }, c = r && n === "full" ? "luca-gap-1" : "", u = {
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
  return /* @__PURE__ */ je(
    "span",
    {
      className: pe(
        l,
        s[n],
        c,
        u[e][t],
        a
      ),
      ...i,
      children: [
        r && n === "full" && e === "duotone" && /* @__PURE__ */ B(
          AO,
          {
            className: "luca-shrink-0",
            color: f[t]
          }
        ),
        o
      ]
    }
  );
}, jO = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", FO = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 focus-visible:luca-outline focus-visible:luca-outline-2 focus-visible:luca-outline-offset-2 focus-visible:luca-outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", BO = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", kO = "hover:luca-text-[#3843d0] focus-visible:luca-outline-[#3843d0]", DO = "luca-cursor-not-allowed luca-text-gray-400 hover:luca-text-gray-400 focus-visible:luca-outline-none luca-opacity-60", LO = M.forwardRef(
  ({
    items: e,
    value: t,
    defaultValue: n,
    onValueChange: r,
    fullWidth: o = !1,
    ariaLabel: a,
    className: i,
    ...l
  }, s) => {
    const c = t !== void 0, u = M.useMemo(
      () => e.find((g) => !g.disabled)?.key,
      [e]
    ), [f, m] = M.useState(() => n !== void 0 ? n : u);
    M.useEffect(() => {
      if (c || n === void 0) return;
      const g = e.some(
        (p) => p.key === n && !p.disabled
      );
      m(g ? n : u);
    }, [n, u, c, e]), M.useEffect(() => {
      c || m((g) => g && e.some((p) => p.key === g && !p.disabled) ? g : u ?? g);
    }, [u, e, c]);
    const h = c ? t : f;
    return /* @__PURE__ */ B(
      "div",
      {
        ref: s,
        role: "tablist",
        "aria-label": a,
        className: pe(jO, o && "luca-w-full", i),
        ...l,
        children: e.map((g) => {
          const p = g.key === h, v = !!g.disabled, C = p || !h && g.key === u ? 0 : -1;
          return /* @__PURE__ */ B(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": p,
              "aria-disabled": v,
              disabled: v,
              tabIndex: C,
              "data-selected": p || void 0,
              "data-disabled": v || void 0,
              "data-value": g.key,
              className: pe(
                FO,
                o ? "luca-flex-1" : "luca-min-w-[88px]",
                p ? BO : kO,
                v && DO
              ),
              onClick: () => {
                v || (c || m(g.key), r?.(g.key));
              },
              children: g.label
            },
            g.key
          );
        })
      }
    );
  }
);
LO.displayName = "TabList";
const jh = ({
  backgroundImage: e,
  title: t,
  subtitle: n,
  avatarImage: r,
  avatarAlt: o = "Layout avatar",
  heroClassName: a,
  heroStyle: i
}) => /* @__PURE__ */ je(
  "div",
  {
    className: pe(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      a
    ),
    style: { backgroundImage: `url(${e})`, ...i },
    children: [
      /* @__PURE__ */ B("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-Left", children: t }),
      /* @__PURE__ */ B("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ B(
        "img",
        {
          src: r,
          alt: o,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ B("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: n })
    ]
  }
);
jh.displayName = "LayoutHeader";
const Fh = ({ children: e, className: t, ...n }) => /* @__PURE__ */ B(
  "div",
  {
    className: pe(
      "luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      t
    ),
    ...n,
    children: e
  }
);
Fh.displayName = "LayoutContent";
const Au = ({ className: e, style: t, children: n }) => /* @__PURE__ */ B("div", { className: pe("luca-bg-[#F9FAFB]", e), style: t, children: n });
Au.displayName = "Layout";
Au.Header = jh;
Au.Content = Fh;
function zO(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function HO(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var VO = /* @__PURE__ */ (function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(HO(this));
    var o = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var a = zO(o);
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
})(), en = "-ms-", el = "-moz-", tt = "-webkit-", Bh = "comm", ju = "rule", Fu = "decl", WO = "@import", kh = "@keyframes", GO = "@layer", qO = Math.abs, jl = String.fromCharCode, UO = Object.assign;
function KO(e, t) {
  return Xt(e, 0) ^ 45 ? (((t << 2 ^ Xt(e, 0)) << 2 ^ Xt(e, 1)) << 2 ^ Xt(e, 2)) << 2 ^ Xt(e, 3) : 0;
}
function Dh(e) {
  return e.trim();
}
function XO(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function nt(e, t, n) {
  return e.replace(t, n);
}
function Fc(e, t) {
  return e.indexOf(t);
}
function Xt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Oa(e, t, n) {
  return e.slice(t, n);
}
function Kn(e) {
  return e.length;
}
function Bu(e) {
  return e.length;
}
function vi(e, t) {
  return t.push(e), e;
}
function YO(e, t) {
  return e.map(t).join("");
}
var Fl = 1, Do = 1, Lh = 0, un = 0, Ft = 0, Uo = "";
function Bl(e, t, n, r, o, a, i) {
  return { value: e, root: t, parent: n, type: r, props: o, children: a, line: Fl, column: Do, length: i, return: "" };
}
function na(e, t) {
  return UO(Bl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function ZO() {
  return Ft;
}
function QO() {
  return Ft = un > 0 ? Xt(Uo, --un) : 0, Do--, Ft === 10 && (Do = 1, Fl--), Ft;
}
function Cn() {
  return Ft = un < Lh ? Xt(Uo, un++) : 0, Do++, Ft === 10 && (Do = 1, Fl++), Ft;
}
function Zn() {
  return Xt(Uo, un);
}
function Ii() {
  return un;
}
function Xa(e, t) {
  return Oa(Uo, e, t);
}
function Pa(e) {
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
function zh(e) {
  return Fl = Do = 1, Lh = Kn(Uo = e), un = 0, [];
}
function Hh(e) {
  return Uo = "", e;
}
function Mi(e) {
  return Dh(Xa(un - 1, Bc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function JO(e) {
  for (; (Ft = Zn()) && Ft < 33; )
    Cn();
  return Pa(e) > 2 || Pa(Ft) > 3 ? "" : " ";
}
function e4(e, t) {
  for (; --t && Cn() && !(Ft < 48 || Ft > 102 || Ft > 57 && Ft < 65 || Ft > 70 && Ft < 97); )
    ;
  return Xa(e, Ii() + (t < 6 && Zn() == 32 && Cn() == 32));
}
function Bc(e) {
  for (; Cn(); )
    switch (Ft) {
      // ] ) " '
      case e:
        return un;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && Bc(Ft);
        break;
      // (
      case 40:
        e === 41 && Bc(e);
        break;
      // \
      case 92:
        Cn();
        break;
    }
  return un;
}
function t4(e, t) {
  for (; Cn() && e + Ft !== 57; )
    if (e + Ft === 84 && Zn() === 47)
      break;
  return "/*" + Xa(t, un - 1) + "*" + jl(e === 47 ? e : Cn());
}
function n4(e) {
  for (; !Pa(Zn()); )
    Cn();
  return Xa(e, un);
}
function r4(e) {
  return Hh(Ti("", null, null, null, [""], e = zh(e), 0, [0], e));
}
function Ti(e, t, n, r, o, a, i, l, s) {
  for (var c = 0, u = 0, f = i, m = 0, h = 0, g = 0, p = 1, v = 1, C = 1, b = 0, x = "", $ = o, y = a, S = r, w = x; v; )
    switch (g = b, b = Cn()) {
      // (
      case 40:
        if (g != 108 && Xt(w, f - 1) == 58) {
          Fc(w += nt(Mi(b), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        w += Mi(b);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        w += JO(g);
        break;
      // \
      case 92:
        w += e4(Ii() - 1, 7);
        continue;
      // /
      case 47:
        switch (Zn()) {
          case 42:
          case 47:
            vi(o4(t4(Cn(), Ii()), t, n), s);
            break;
          default:
            w += "/";
        }
        break;
      // {
      case 123 * p:
        l[c++] = Kn(w) * C;
      // } ; \0
      case 125 * p:
      case 59:
      case 0:
        switch (b) {
          // \0 }
          case 0:
          case 125:
            v = 0;
          // ;
          case 59 + u:
            C == -1 && (w = nt(w, /\f/g, "")), h > 0 && Kn(w) - f && vi(h > 32 ? pm(w + ";", r, n, f - 1) : pm(nt(w, " ", "") + ";", r, n, f - 2), s);
            break;
          // @ ;
          case 59:
            w += ";";
          // { rule/at-rule
          default:
            if (vi(S = gm(w, t, n, c, u, o, l, x, $ = [], y = [], f), a), b === 123)
              if (u === 0)
                Ti(w, t, S, S, $, a, f, l, y);
              else
                switch (m === 99 && Xt(w, 3) === 110 ? 100 : m) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Ti(e, S, S, r && vi(gm(e, S, S, 0, 0, o, l, x, o, $ = [], f), y), o, y, f, l, r ? $ : y);
                    break;
                  default:
                    Ti(w, S, S, S, [""], y, 0, l, y);
                }
        }
        c = u = h = 0, p = C = 1, x = w = "", f = i;
        break;
      // :
      case 58:
        f = 1 + Kn(w), h = g;
      default:
        if (p < 1) {
          if (b == 123)
            --p;
          else if (b == 125 && p++ == 0 && QO() == 125)
            continue;
        }
        switch (w += jl(b), b * p) {
          // &
          case 38:
            C = u > 0 ? 1 : (w += "\f", -1);
            break;
          // ,
          case 44:
            l[c++] = (Kn(w) - 1) * C, C = 1;
            break;
          // @
          case 64:
            Zn() === 45 && (w += Mi(Cn())), m = Zn(), u = f = Kn(x = w += n4(Ii())), b++;
            break;
          // -
          case 45:
            g === 45 && Kn(w) == 2 && (p = 0);
        }
    }
  return a;
}
function gm(e, t, n, r, o, a, i, l, s, c, u) {
  for (var f = o - 1, m = o === 0 ? a : [""], h = Bu(m), g = 0, p = 0, v = 0; g < r; ++g)
    for (var C = 0, b = Oa(e, f + 1, f = qO(p = i[g])), x = e; C < h; ++C)
      (x = Dh(p > 0 ? m[C] + " " + b : nt(b, /&\f/g, m[C]))) && (s[v++] = x);
  return Bl(e, t, n, o === 0 ? ju : l, s, c, u);
}
function o4(e, t, n) {
  return Bl(e, t, n, Bh, jl(ZO()), Oa(e, 2, -2), 0);
}
function pm(e, t, n, r) {
  return Bl(e, t, n, Fu, Oa(e, 0, r), Oa(e, r + 1, -1), r);
}
function Io(e, t) {
  for (var n = "", r = Bu(e), o = 0; o < r; o++)
    n += t(e[o], o, e, t) || "";
  return n;
}
function a4(e, t, n, r) {
  switch (e.type) {
    case GO:
      if (e.children.length) break;
    case WO:
    case Fu:
      return e.return = e.return || e.value;
    case Bh:
      return "";
    case kh:
      return e.return = e.value + "{" + Io(e.children, r) + "}";
    case ju:
      e.value = e.props.join(",");
  }
  return Kn(n = Io(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function i4(e) {
  var t = Bu(e);
  return function(n, r, o, a) {
    for (var i = "", l = 0; l < t; l++)
      i += e[l](n, r, o, a) || "";
    return i;
  };
}
function l4(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var hm = function(t) {
  var n = /* @__PURE__ */ new WeakMap();
  return function(r) {
    if (n.has(r))
      return n.get(r);
    var o = t(r);
    return n.set(r, o), o;
  };
};
function s4(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var c4 = function(t, n, r) {
  for (var o = 0, a = 0; o = a, a = Zn(), o === 38 && a === 12 && (n[r] = 1), !Pa(a); )
    Cn();
  return Xa(t, un);
}, u4 = function(t, n) {
  var r = -1, o = 44;
  do
    switch (Pa(o)) {
      case 0:
        o === 38 && Zn() === 12 && (n[r] = 1), t[r] += c4(un - 1, n, r);
        break;
      case 2:
        t[r] += Mi(o);
        break;
      case 4:
        if (o === 44) {
          t[++r] = Zn() === 58 ? "&\f" : "", n[r] = t[r].length;
          break;
        }
      // fallthrough
      default:
        t[r] += jl(o);
    }
  while (o = Cn());
  return t;
}, d4 = function(t, n) {
  return Hh(u4(zh(t), n));
}, bm = /* @__PURE__ */ new WeakMap(), f4 = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var n = t.value, r = t.parent, o = t.column === r.column && t.line === r.line; r.type !== "rule"; )
      if (r = r.parent, !r) return;
    if (!(t.props.length === 1 && n.charCodeAt(0) !== 58 && !bm.get(r)) && !o) {
      bm.set(t, !0);
      for (var a = [], i = d4(n, a), l = r.props, s = 0, c = 0; s < i.length; s++)
        for (var u = 0; u < l.length; u++, c++)
          t.props[c] = a[s] ? i[s].replace(/&\f/g, l[u]) : l[u] + " " + i[s];
    }
  }
}, m4 = function(t) {
  if (t.type === "decl") {
    var n = t.value;
    // charcode for l
    n.charCodeAt(0) === 108 && // charcode for b
    n.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
};
function Vh(e, t) {
  switch (KO(e, t)) {
    // color-adjust
    case 5103:
      return tt + "print-" + e + e;
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
      return tt + e + e;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return tt + e + el + e + en + e + e;
    // flex, flex-direction
    case 6828:
    case 4268:
      return tt + e + en + e + e;
    // order
    case 6165:
      return tt + e + en + "flex-" + e + e;
    // align-items
    case 5187:
      return tt + e + nt(e, /(\w+).+(:[^]+)/, tt + "box-$1$2" + en + "flex-$1$2") + e;
    // align-self
    case 5443:
      return tt + e + en + "flex-item-" + nt(e, /flex-|-self/, "") + e;
    // align-content
    case 4675:
      return tt + e + en + "flex-line-pack" + nt(e, /align-content|flex-|-self/, "") + e;
    // flex-shrink
    case 5548:
      return tt + e + en + nt(e, "shrink", "negative") + e;
    // flex-basis
    case 5292:
      return tt + e + en + nt(e, "basis", "preferred-size") + e;
    // flex-grow
    case 6060:
      return tt + "box-" + nt(e, "-grow", "") + tt + e + en + nt(e, "grow", "positive") + e;
    // transition
    case 4554:
      return tt + nt(e, /([^-])(transform)/g, "$1" + tt + "$2") + e;
    // cursor
    case 6187:
      return nt(nt(nt(e, /(zoom-|grab)/, tt + "$1"), /(image-set)/, tt + "$1"), e, "") + e;
    // background, background-image
    case 5495:
    case 3959:
      return nt(e, /(image-set\([^]*)/, tt + "$1$`$1");
    // justify-content
    case 4968:
      return nt(nt(e, /(.+:)(flex-)?(.*)/, tt + "box-pack:$3" + en + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + tt + e + e;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return nt(e, /(.+)-inline(.+)/, tt + "$1$2") + e;
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
      if (Kn(e) - 1 - t > 6) switch (Xt(e, t + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (Xt(e, t + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return nt(e, /(.+:)(.+)-([^]+)/, "$1" + tt + "$2-$3$1" + el + (Xt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
        // (s)tretch
        case 115:
          return ~Fc(e, "stretch") ? Vh(nt(e, "stretch", "fill-available"), t) + e : e;
      }
      break;
    // position: sticky
    case 4949:
      if (Xt(e, t + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (Xt(e, Kn(e) - 3 - (~Fc(e, "!important") && 10))) {
        // stic(k)y
        case 107:
          return nt(e, ":", ":" + tt) + e;
        // (inline-)?fl(e)x
        case 101:
          return nt(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + tt + (Xt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + tt + "$2$3$1" + en + "$2box$3") + e;
      }
      break;
    // writing-mode
    case 5936:
      switch (Xt(e, t + 11)) {
        // vertical-l(r)
        case 114:
          return tt + e + en + nt(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        // vertical-r(l)
        case 108:
          return tt + e + en + nt(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        // horizontal(-)tb
        case 45:
          return tt + e + en + nt(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return tt + e + en + e + e;
  }
  return e;
}
var v4 = function(t, n, r, o) {
  if (t.length > -1 && !t.return) switch (t.type) {
    case Fu:
      t.return = Vh(t.value, t.length);
      break;
    case kh:
      return Io([na(t, {
        value: nt(t.value, "@", "@" + tt)
      })], o);
    case ju:
      if (t.length) return YO(t.props, function(a) {
        switch (XO(a, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return Io([na(t, {
              props: [nt(a, /:(read-\w+)/, ":" + el + "$1")]
            })], o);
          // :placeholder
          case "::placeholder":
            return Io([na(t, {
              props: [nt(a, /:(plac\w+)/, ":" + tt + "input-$1")]
            }), na(t, {
              props: [nt(a, /:(plac\w+)/, ":" + el + "$1")]
            }), na(t, {
              props: [nt(a, /:(plac\w+)/, en + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, g4 = [v4], Wh = function(t) {
  var n = t.key;
  if (n === "css") {
    var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(r, function(p) {
      var v = p.getAttribute("data-emotion");
      v.indexOf(" ") !== -1 && (document.head.appendChild(p), p.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || g4, a = {}, i, l = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
    function(p) {
      for (var v = p.getAttribute("data-emotion").split(" "), C = 1; C < v.length; C++)
        a[v[C]] = !0;
      l.push(p);
    }
  );
  var s, c = [f4, m4];
  {
    var u, f = [a4, l4(function(p) {
      u.insert(p);
    })], m = i4(c.concat(o, f)), h = function(v) {
      return Io(r4(v), m);
    };
    s = function(v, C, b, x) {
      u = b, h(v ? v + "{" + C.styles + "}" : C.styles), x && (g.inserted[C.name] = !0);
    };
  }
  var g = {
    key: n,
    sheet: new VO({
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
    insert: s
  };
  return g.sheet.hydrate(l), g;
};
function p4(e) {
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
var h4 = {
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
}, b4 = /[A-Z]|^ms/g, y4 = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Gh = function(t) {
  return t.charCodeAt(1) === 45;
}, ym = function(t) {
  return t != null && typeof t != "boolean";
}, ws = /* @__PURE__ */ s4(function(e) {
  return Gh(e) ? e : e.replace(b4, "-$&").toLowerCase();
}), Cm = function(t, n) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof n == "string")
        return n.replace(y4, function(r, o, a) {
          return Xn = {
            name: o,
            styles: a,
            next: Xn
          }, o;
        });
  }
  return h4[t] !== 1 && !Gh(t) && typeof n == "number" && n !== 0 ? n + "px" : n;
};
function Na(e, t, n) {
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
        return Xn = {
          name: o.name,
          styles: o.styles,
          next: Xn
        }, o.name;
      var a = n;
      if (a.styles !== void 0) {
        var i = a.next;
        if (i !== void 0)
          for (; i !== void 0; )
            Xn = {
              name: i.name,
              styles: i.styles,
              next: Xn
            }, i = i.next;
        var l = a.styles + ";";
        return l;
      }
      return C4(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var s = Xn, c = n(e);
        return Xn = s, Na(e, t, c);
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
function C4(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var o = 0; o < n.length; o++)
      r += Na(e, t, n[o]) + ";";
  else
    for (var a in n) {
      var i = n[a];
      if (typeof i != "object") {
        var l = i;
        t != null && t[l] !== void 0 ? r += a + "{" + t[l] + "}" : ym(l) && (r += ws(a) + ":" + Cm(a, l) + ";");
      } else if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
        for (var s = 0; s < i.length; s++)
          ym(i[s]) && (r += ws(a) + ":" + Cm(a, i[s]) + ";");
      else {
        var c = Na(e, t, i);
        switch (a) {
          case "animation":
          case "animationName": {
            r += ws(a) + ":" + c + ";";
            break;
          }
          default:
            r += a + "{" + c + "}";
        }
      }
    }
  return r;
}
var xm = /label:\s*([^\s;{]+)\s*(;|$)/g, Xn;
function Nr(e, t, n) {
  if (e.length === 1 && typeof e[0] == "object" && e[0] !== null && e[0].styles !== void 0)
    return e[0];
  var r = !0, o = "";
  Xn = void 0;
  var a = e[0];
  if (a == null || a.raw === void 0)
    r = !1, o += Na(n, t, a);
  else {
    var i = a;
    o += i[0];
  }
  for (var l = 1; l < e.length; l++)
    if (o += Na(n, t, e[l]), r) {
      var s = a;
      o += s[l];
    }
  xm.lastIndex = 0;
  for (var c = "", u; (u = xm.exec(o)) !== null; )
    c += "-" + u[1];
  var f = p4(o) + c;
  return {
    name: f,
    styles: o,
    next: Xn
  };
}
var x4 = !0;
function kl(e, t, n) {
  var r = "";
  return n.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : o && (r += o + " ");
  }), r;
}
var ku = function(t, n, r) {
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
  x4 === !1) && t.registered[o] === void 0 && (t.registered[o] = n.styles);
}, Du = function(t, n, r) {
  ku(t, n, r);
  var o = t.key + "-" + n.name;
  if (t.inserted[n.name] === void 0) {
    var a = n;
    do
      t.insert(n === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function Sm(e, t) {
  if (e.inserted[t.name] === void 0)
    return e.insert("", t, e.sheet, !0);
}
function wm(e, t, n) {
  var r = [], o = kl(e, r, n);
  return r.length < 2 ? n : o + t(r);
}
var Lu = function(t) {
  var n = Wh(t);
  n.sheet.speedy = function(l) {
    this.isSpeedy = l;
  }, n.compat = !0;
  var r = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    var f = Nr(c, n.registered, void 0);
    return Du(n, f, !1), n.key + "-" + f.name;
  }, o = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    var f = Nr(c, n.registered), m = "animation-" + f.name;
    return Sm(n, {
      name: f.name,
      styles: "@keyframes " + m + "{" + f.styles + "}"
    }), m;
  }, a = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    var f = Nr(c, n.registered);
    Sm(n, f);
  }, i = function() {
    for (var s = arguments.length, c = new Array(s), u = 0; u < s; u++)
      c[u] = arguments[u];
    return wm(n.registered, r, S4(c));
  };
  return {
    css: r,
    cx: i,
    injectGlobal: a,
    keyframes: o,
    hydrate: function(s) {
      s.forEach(function(c) {
        n.inserted[c] = !0;
      });
    },
    flush: function() {
      n.registered = {}, n.inserted = {}, n.sheet.flush();
    },
    sheet: n.sheet,
    cache: n,
    getRegisteredStyles: kl.bind(null, n.registered),
    merge: wm.bind(null, n.registered, r)
  };
}, S4 = function e(t) {
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
}, tr = Lu({
  key: "css"
});
tr.flush;
tr.hydrate;
tr.cx;
tr.merge;
tr.getRegisteredStyles;
tr.injectGlobal;
tr.keyframes;
tr.css;
tr.sheet;
var w4 = tr.cache, $4 = /* @__PURE__ */ (function() {
  function e() {
    Mt(this, e), j(this, "_cacheList", [w4]);
  }
  return Tt(e, [{
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
})(), $m = typeof document < "u", qh = function(t, n) {
  return "".concat(t, "-").concat(n);
}, E4 = function(t, n, r, o) {
  var a = o.hashPriority;
  ku(t, n, r);
  var i = ".".concat(qh(t.key, n.name)), l = a === "low" ? ":where(".concat(i, ")") : i;
  if (t.inserted[n.name] === void 0) {
    var s = "", c = n;
    do {
      var u = t.insert(n === c ? l : "", c, t.sheet, !0);
      !$m && u !== void 0 && (s += u), c = c.next;
    } while (c !== void 0);
    if (!$m && s.length !== 0)
      return s;
  }
}, zu = function(t) {
  return Se(t) === "object" && "styles" in t && "name" in t && "toString" in t;
}, O4 = function e(t) {
  for (var n = "", r = 0; r < t.length; r++) {
    var o = t[r];
    if (o !== null) {
      var a = void 0;
      switch (Se(o)) {
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
}, P4 = function(t, n, r) {
  var o = [], a = kl(t, o, r);
  return o.length < 2 ? r : a + n(o);
}, N4 = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = Nr(o, t.registered, void 0);
    return E4(t, i, !1, n), qh(t.key, i.name);
  };
}, R4 = function(t, n) {
  return function() {
    for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
      o[a] = arguments[a];
    var i = o.map(function(l) {
      return zu(l) ? n(l) : l;
    });
    return P4(t.registered, n, O4(i));
  };
}, Uh = function(t, n) {
  var r = N4(t, {
    hashPriority: n.hashPriority || "high",
    label: n.label
  }), o = R4(t, r);
  return {
    css: r,
    cx: o
  };
}, Ya = function() {
  for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
    n[r] = arguments[r];
  return (
    // @ts-ignore
    Nr(n)
  );
}, I4 = "acss", M4 = function(t) {
  return /* @__PURE__ */ Rr(t);
}, gi = { exports: {} }, lt = {};
var Em;
function T4() {
  if (Em) return lt;
  Em = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
  function x(y) {
    if (typeof y == "object" && y !== null) {
      var S = y.$$typeof;
      switch (S) {
        case t:
          switch (y = y.type, y) {
            case s:
            case c:
            case r:
            case a:
            case o:
            case f:
              return y;
            default:
              switch (y = y && y.$$typeof, y) {
                case l:
                case u:
                case g:
                case h:
                case i:
                  return y;
                default:
                  return S;
              }
          }
        case n:
          return S;
      }
    }
  }
  function $(y) {
    return x(y) === c;
  }
  return lt.AsyncMode = s, lt.ConcurrentMode = c, lt.ContextConsumer = l, lt.ContextProvider = i, lt.Element = t, lt.ForwardRef = u, lt.Fragment = r, lt.Lazy = g, lt.Memo = h, lt.Portal = n, lt.Profiler = a, lt.StrictMode = o, lt.Suspense = f, lt.isAsyncMode = function(y) {
    return $(y) || x(y) === s;
  }, lt.isConcurrentMode = $, lt.isContextConsumer = function(y) {
    return x(y) === l;
  }, lt.isContextProvider = function(y) {
    return x(y) === i;
  }, lt.isElement = function(y) {
    return typeof y == "object" && y !== null && y.$$typeof === t;
  }, lt.isForwardRef = function(y) {
    return x(y) === u;
  }, lt.isFragment = function(y) {
    return x(y) === r;
  }, lt.isLazy = function(y) {
    return x(y) === g;
  }, lt.isMemo = function(y) {
    return x(y) === h;
  }, lt.isPortal = function(y) {
    return x(y) === n;
  }, lt.isProfiler = function(y) {
    return x(y) === a;
  }, lt.isStrictMode = function(y) {
    return x(y) === o;
  }, lt.isSuspense = function(y) {
    return x(y) === f;
  }, lt.isValidElementType = function(y) {
    return typeof y == "string" || typeof y == "function" || y === r || y === c || y === a || y === o || y === f || y === m || typeof y == "object" && y !== null && (y.$$typeof === g || y.$$typeof === h || y.$$typeof === i || y.$$typeof === l || y.$$typeof === u || y.$$typeof === v || y.$$typeof === C || y.$$typeof === b || y.$$typeof === p);
  }, lt.typeOf = x, lt;
}
var st = {};
var Om;
function _4() {
  return Om || (Om = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, r = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, l = e ? Symbol.for("react.context") : 60110, s = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, f = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, h = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, C = e ? Symbol.for("react.responder") : 60118, b = e ? Symbol.for("react.scope") : 60119;
    function x(X) {
      return typeof X == "string" || typeof X == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      X === r || X === c || X === a || X === o || X === f || X === m || typeof X == "object" && X !== null && (X.$$typeof === g || X.$$typeof === h || X.$$typeof === i || X.$$typeof === l || X.$$typeof === u || X.$$typeof === v || X.$$typeof === C || X.$$typeof === b || X.$$typeof === p);
    }
    function $(X) {
      if (typeof X == "object" && X !== null) {
        var se = X.$$typeof;
        switch (se) {
          case t:
            var Z = X.type;
            switch (Z) {
              case s:
              case c:
              case r:
              case a:
              case o:
              case f:
                return Z;
              default:
                var oe = Z && Z.$$typeof;
                switch (oe) {
                  case l:
                  case u:
                  case g:
                  case h:
                  case i:
                    return oe;
                  default:
                    return se;
                }
            }
          case n:
            return se;
        }
      }
    }
    var y = s, S = c, w = l, E = i, O = t, P = u, N = r, R = g, _ = h, I = n, k = a, A = o, D = f, F = !1;
    function q(X) {
      return F || (F = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), K(X) || $(X) === s;
    }
    function K(X) {
      return $(X) === c;
    }
    function Q(X) {
      return $(X) === l;
    }
    function W(X) {
      return $(X) === i;
    }
    function L(X) {
      return typeof X == "object" && X !== null && X.$$typeof === t;
    }
    function z(X) {
      return $(X) === u;
    }
    function H(X) {
      return $(X) === r;
    }
    function V(X) {
      return $(X) === g;
    }
    function te(X) {
      return $(X) === h;
    }
    function Y(X) {
      return $(X) === n;
    }
    function J(X) {
      return $(X) === a;
    }
    function ae(X) {
      return $(X) === o;
    }
    function le(X) {
      return $(X) === f;
    }
    st.AsyncMode = y, st.ConcurrentMode = S, st.ContextConsumer = w, st.ContextProvider = E, st.Element = O, st.ForwardRef = P, st.Fragment = N, st.Lazy = R, st.Memo = _, st.Portal = I, st.Profiler = k, st.StrictMode = A, st.Suspense = D, st.isAsyncMode = q, st.isConcurrentMode = K, st.isContextConsumer = Q, st.isContextProvider = W, st.isElement = L, st.isForwardRef = z, st.isFragment = H, st.isLazy = V, st.isMemo = te, st.isPortal = Y, st.isProfiler = J, st.isStrictMode = ae, st.isSuspense = le, st.isValidElementType = x, st.typeOf = $;
  })()), st;
}
var Pm;
function A4() {
  return Pm || (Pm = 1, process.env.NODE_ENV === "production" ? gi.exports = T4() : gi.exports = _4()), gi.exports;
}
var $s, Nm;
function j4() {
  if (Nm) return $s;
  Nm = 1;
  var e = A4(), t = {
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
  function i(g) {
    return e.isMemo(g) ? o : a[g.$$typeof] || t;
  }
  var l = Object.defineProperty, s = Object.getOwnPropertyNames, c = Object.getOwnPropertySymbols, u = Object.getOwnPropertyDescriptor, f = Object.getPrototypeOf, m = Object.prototype;
  function h(g, p, v) {
    if (typeof p != "string") {
      if (m) {
        var C = f(p);
        C && C !== m && h(g, C, v);
      }
      var b = s(p);
      c && (b = b.concat(c(p)));
      for (var x = i(g), $ = i(p), y = 0; y < b.length; ++y) {
        var S = b[y];
        if (!n[S] && !(v && v[S]) && !($ && $[S]) && !(x && x[S])) {
          var w = u(p, S);
          try {
            l(g, S, w);
          } catch {
          }
        }
      }
    }
    return g;
  }
  return $s = h, $s;
}
j4();
var F4 = function(t) {
  return t();
}, Kh = d.useInsertionEffect ? d.useInsertionEffect : !1, B4 = Kh || F4, Rm = Kh || d.useLayoutEffect, Xh = /* @__PURE__ */ d.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Wh({
    key: "css"
  }) : null
);
Xh.Provider;
var Yh = function(t) {
  return /* @__PURE__ */ xn(function(n, r) {
    var o = Ge(Xh);
    return t(n, o, r);
  });
}, Ra = /* @__PURE__ */ d.createContext({}), k4 = function(t, n) {
  if (typeof n == "function") {
    var r = n(t);
    return r;
  }
  return ve({}, t, n);
}, D4 = /* @__PURE__ */ hm(function(e) {
  return hm(function(t) {
    return k4(e, t);
  });
}), L4 = function(t) {
  var n = d.useContext(Ra);
  return t.theme !== n && (n = D4(n)(t.theme)), /* @__PURE__ */ d.createElement(Ra.Provider, {
    value: n
  }, t.children);
}, Hu = {}.hasOwnProperty, kc = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", z4 = function(t, n) {
  var r = {};
  for (var o in n)
    Hu.call(n, o) && (r[o] = n[o]);
  return r[kc] = t, r;
}, H4 = function(t) {
  var n = t.cache, r = t.serialized, o = t.isStringTag;
  return ku(n, r, o), B4(function() {
    return Du(n, r, o);
  }), null;
}, V4 = /* @__PURE__ */ Yh(function(e, t, n) {
  var r = e.css;
  typeof r == "string" && t.registered[r] !== void 0 && (r = t.registered[r]);
  var o = e[kc], a = [r], i = "";
  typeof e.className == "string" ? i = kl(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var l = Nr(a, void 0, d.useContext(Ra));
  i += t.key + "-" + l.name;
  var s = {};
  for (var c in e)
    Hu.call(e, c) && c !== "css" && c !== kc && (s[c] = e[c]);
  return s.className = i, n && (s.ref = n), /* @__PURE__ */ d.createElement(d.Fragment, null, /* @__PURE__ */ d.createElement(H4, {
    cache: t,
    serialized: l,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ d.createElement(o, s));
}), W4 = V4, Im = function(t, n) {
  var r = arguments;
  if (n == null || !Hu.call(n, "css"))
    return d.createElement.apply(void 0, r);
  var o = r.length, a = new Array(o);
  a[0] = W4, a[1] = z4(t, n);
  for (var i = 2; i < o; i++)
    a[i] = r[i];
  return d.createElement.apply(null, a);
};
(function(e) {
  var t;
  t || (t = e.JSX || (e.JSX = {}));
})(Im || (Im = {}));
var G4 = /* @__PURE__ */ Yh(function(e, t) {
  var n = e.styles, r = Nr([n], void 0, d.useContext(Ra)), o = d.useRef();
  return Rm(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), l = !1, s = document.querySelector('style[data-emotion="' + a + " " + r.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), s !== null && (l = !0, s.setAttribute("data-emotion", a), i.hydrate([s])), o.current = [i, l], function() {
      i.flush();
    };
  }, [t]), Rm(function() {
    var a = o.current, i = a[0], l = a[1];
    if (l) {
      a[1] = !1;
      return;
    }
    if (r.next !== void 0 && Du(t, r.next, !0), i.tags.length) {
      var s = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = s, i.flush();
    }
    t.insert("", r, i, !1);
  }, [t, r.name]), null;
}), q4 = function(t) {
  return function() {
    for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
      r[o] = arguments[o];
    return /* @__PURE__ */ Ma(function(a) {
      var i = t();
      return /* @__PURE__ */ B(G4, {
        styles: Nr(r, void 0, T(T({}, a), {}, {
          theme: i
        }))
      });
    });
  };
}, U4 = function(t) {
  return function(n) {
    var r = t(n);
    return function(o) {
      var a = r(o), i = a.styles;
      return i;
    };
  };
}, K4 = ["children", "prefix", "speedy", "getStyleManager", "container", "nonce", "insertionPoint", "stylisPlugins", "linters"], X4 = function(t) {
  return /* @__PURE__ */ Ma(function(n) {
    var r = n.children, o = n.prefix, a = n.speedy, i = n.getStyleManager, l = n.container, s = n.nonce, c = n.insertionPoint, u = n.stylisPlugins, f = n.linters, m = De(n, K4), h = Ge(t), g = o ?? h.sheet.key, p = l ?? h.sheet.container, v = a ?? h.sheet.isSpeedy, C = Ot(function() {
      var x = process.env.NODE_ENV === "development", $ = Lu({
        speedy: v ?? x,
        key: g,
        container: p,
        nonce: s,
        insertionPoint: c,
        stylisPlugins: u
      });
      if (typeof global < "u") {
        var y = global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__;
        y && ($.cache = y.add($.cache));
      }
      return $;
    }, [g, v, p, s, c, u]);
    yt(function() {
      i?.(C);
    }, [C]);
    var b = /* @__PURE__ */ B(t.Provider, {
      value: C,
      children: r
    });
    return Object.keys(m).length || p ? (
      // @ts-ignore
      /* @__PURE__ */ B(bb, T(T({
        linters: f,
        container: p
      }, m), {}, {
        children: b
      }))
    ) : b;
  });
}, Y4 = function(t) {
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
}, Z4 = function(t) {
  return Object.fromEntries(Object.entries(t).map(function(n) {
    var r = G(n, 2), o = r[0], a = r[1];
    return [o, a.styles];
  }));
}, Vu = function() {
  var t = jc.useToken(), n = t.token;
  return n;
}, Eo = function(t) {
  return typeof window < "u" ? matchMedia && matchMedia("(prefers-color-scheme: ".concat(t, ")")) : {
    matches: !1
  };
}, Es, Zh = /* @__PURE__ */ Rr({
  appearance: "light",
  setAppearance: function() {
  },
  isDarkMode: !1,
  themeMode: "light",
  setThemeMode: function() {
  },
  browserPrefers: (Es = Eo("dark")) !== null && Es !== void 0 && Es.matches ? "dark" : "light"
}), Dl = function() {
  return Ge(Zh);
}, Q4 = function() {
  var t = Vu(), n = Dl(), r = n.appearance, o = n.isDarkMode;
  return Ot(function() {
    return Z4(Y4({
      token: t,
      css: Ya
    }));
  }, [t, r, o]);
}, Qh = function() {
  var t = Vu(), n = Q4();
  return Ot(function() {
    return T(T({}, t), {}, {
      stylish: n
    });
  }, [t, n]);
}, J4 = function(t) {
  return T(T({}, t), {}, {
    mobile: t.xs,
    tablet: t.md,
    laptop: t.lg,
    desktop: t.xxl
  });
}, e3 = function() {
  var t = Vu(), n = {
    xs: "@media (max-width: ".concat(t.screenXSMax, "px)"),
    sm: "@media (max-width: ".concat(t.screenSMMax, "px)"),
    md: "@media (max-width: ".concat(t.screenMDMax, "px)"),
    lg: "@media (max-width: ".concat(t.screenLGMax, "px)"),
    xl: "@media (max-width: ".concat(t.screenXLMax, "px)"),
    xxl: "@media (min-width: ".concat(t.screenXXLMin, "px)")
  };
  return Ot(function() {
    return J4(n);
  }, [t]);
}, t3 = function(t, n) {
  return Object.entries(t).map(function(r) {
    var o = G(r, 2), a = o[0], i = o[1], l = i;
    return zu(i) || (l = Ya(i)), n[a] ? "".concat(n[a], " {").concat(l.styles, "}") : "";
  }).join("");
}, n3 = ["stylish", "appearance", "isDarkMode", "prefixCls", "iconPrefixCls"], r3 = ["prefixCls", "iconPrefixCls"], o3 = function(t) {
  var n = t.hashPriority, r = t.useTheme, o = t.EmotionContext;
  return function(a, i) {
    var l = i?.__BABEL_FILE_NAME__, s = !!l;
    return function(c) {
      var u = r(), f = Ge(o), m = f.cache, h = Uh(m, {
        hashPriority: i?.hashPriority || n,
        label: i?.label
      }), g = h.cx, p = h.css, v = e3(), C = Ot(function() {
        var b;
        if (a instanceof Function) {
          var x = u.stylish, $ = u.appearance, y = u.isDarkMode, S = u.prefixCls, w = u.iconPrefixCls, E = De(u, n3), O = function(N) {
            return t3(N, v);
          };
          Object.assign(O, v), b = a({
            token: E,
            stylish: x,
            appearance: $,
            isDarkMode: y,
            prefixCls: S,
            iconPrefixCls: w,
            // 工具函数们
            cx: g,
            css: Ya,
            responsive: O
          }, c);
        } else
          b = a;
        return Se(b) === "object" && (zu(b) ? b = p(b) : b = Object.fromEntries(Object.entries(b).map(function(P) {
          var N = G(P, 2), R = N[0], _ = N[1], I = s ? "".concat(l, "-").concat(R) : void 0;
          return Se(_) === "object" ? s ? [R, p(_, "label:".concat(I))] : [R, p(_)] : [R, _];
        }))), b;
      }, [c, u]);
      return Ot(function() {
        var b = u.prefixCls, x = u.iconPrefixCls, $ = De(u, r3);
        return {
          styles: C,
          cx: g,
          theme: $,
          prefixCls: b,
          iconPrefixCls: x
        };
      }, [C, u]);
    };
  };
}, Mm = function(t) {
  if (t.ThemeProvider) return t.ThemeProvider;
  var n = t.ThemeContext;
  return function(r) {
    return /* @__PURE__ */ B(n.Provider, {
      value: r.theme,
      children: r.children
    });
  };
}, a3 = L4, Jh = Ra, e0 = /* @__PURE__ */ Ma(function(e) {
  var t = e.children, n = e.theme, r = e.prefixCls, o = e.getStaticInstance, a = e.staticInstanceConfig, i = Dl(), l = i.appearance, s = i.isDarkMode, c = Eh.useMessage(a?.message), u = G(c, 2), f = u[0], m = u[1], h = Nh.useNotification(a?.notification), g = G(h, 2), p = g[0], v = g[1], C = Sn.useModal(), b = G(C, 2), x = b[0], $ = b[1];
  yt(function() {
    o?.({
      message: f,
      modal: x,
      notification: p
    });
  }, []);
  var y = Ot(function() {
    var S = s ? jc.darkAlgorithm : jc.defaultAlgorithm, w = n;
    if (typeof n == "function" && (w = n(l)), !w)
      return {
        algorithm: S
      };
    var E = w.algorithm ? w.algorithm instanceof Array ? w.algorithm : [w.algorithm] : [];
    return T(T({}, w), {}, {
      algorithm: w.algorithm ? [S].concat(de(E)) : S
    });
  }, [n, s]);
  return /* @__PURE__ */ je(dn, {
    prefixCls: r,
    theme: y,
    children: [m, v, $, t]
  });
});
e0.displayName = "AntdProvider";
function i3(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, o, a, i, l = [], s = !0, c = !1;
    try {
      if (a = (n = n.call(e)).next, t !== 0) for (; !(s = (r = a.call(n)).done) && (l.push(r.value), l.length !== t); s = !0) ;
    } catch (u) {
      c = !0, o = u;
    } finally {
      try {
        if (!s && n.return != null && (i = n.return(), Object(i) !== i)) return;
      } finally {
        if (c) throw o;
      }
    }
    return l;
  }
}
function l3(e, t) {
  return s3(e) || i3(e, t) || c3(e, t) || u3();
}
function s3(e) {
  if (Array.isArray(e)) return e;
}
function c3(e, t) {
  if (e) {
    if (typeof e == "string") return Tm(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set") return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Tm(e, t);
  }
}
function Tm(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function u3() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function _m(e, t) {
  var n = t || {}, r = n.defaultValue, o = n.value, a = n.onChange, i = n.postState, l = M.useState(function() {
    return o !== void 0 ? o : r !== void 0 ? typeof r == "function" ? r() : r : e;
  }), s = l3(l, 2), c = s[0], u = s[1], f = o !== void 0 ? o : c;
  i && (f = i(f));
  function m(h) {
    u(h), f !== h && a && a(h, f);
  }
  return [f, m];
}
var Os = function(t) {
  typeof Xu == "function" ? Xu(t) : t();
}, wr, d3 = function(t) {
  var n = t.themeMode, r = t.setAppearance, o = t.setBrowserPrefers, a = function() {
    Os(function() {
      Eo("dark").matches ? r("dark") : r("light");
    });
  }, i = function() {
    Os(function() {
      Eo("dark").matches ? o("dark") : o("light");
    });
  };
  return Ns(function() {
    if (n !== "auto") {
      Os(function() {
        r(n);
      });
      return;
    }
    return setTimeout(a, 1), wr || (wr = Eo("dark")), wr.addEventListener("change", a), function() {
      wr.removeEventListener("change", a);
    };
  }, [n]), Ns(function() {
    return wr || (wr = Eo("dark")), wr.addEventListener("change", i), function() {
      wr.removeEventListener("change", i);
    };
  }, []), null;
}, t0 = /* @__PURE__ */ Ma(function(e) {
  var t, n = e.children, r = e.appearance, o = e.defaultAppearance, a = e.onAppearanceChange, i = e.themeMode, l = e.defaultThemeMode, s = e.onThemeModeChange, c = e.useTheme, u = c(), f = u.appearance, m = u.themeMode, h = _m("light", {
    value: i,
    defaultValue: l ?? m,
    onChange: function(P) {
      return s?.(P);
    }
  }), g = G(h, 2), p = g[0], v = g[1], C = _m("light", {
    value: r,
    defaultValue: o ?? f,
    onChange: function(P) {
      return a?.(P);
    }
  }), b = G(C, 2), x = b[0], $ = b[1], y = Ht((t = Eo("dark")) !== null && t !== void 0 && t.matches ? "dark" : "light"), S = G(y, 2), w = S[0], E = S[1];
  return /* @__PURE__ */ je(Zh.Provider, {
    value: {
      themeMode: p,
      setThemeMode: v,
      appearance: x,
      setAppearance: $,
      isDarkMode: x === "dark",
      browserPrefers: w
    },
    children: [
      // Wait until after client-side hydration to show
      typeof window < "u" && /* @__PURE__ */ B(d3, {
        themeMode: p,
        setAppearance: $,
        setBrowserPrefers: E
      }),
      n
    ]
  });
});
t0.displayName = "ThemeSwitcher";
var f3 = ["stylish"], m3 = function(t) {
  var n = t.children, r = t.customToken, o = t.defaultCustomToken, a = t.customStylish, i = t.prefixCls, l = t.StyledThemeProvider, s = Dl(), c = s.appearance, u = s.isDarkMode, f = Qh(), m = f.stylish, h = De(f, f3), g = Ot(function() {
    return o ? o instanceof Function ? o({
      token: h,
      appearance: c,
      isDarkMode: u
    }) : o : {};
  }, [o, h, c]), p = Ot(function() {
    return r instanceof Function ? T(T({}, g), r({
      token: h,
      appearance: c,
      isDarkMode: u
    })) : T(T({}, g), r);
  }, [g, r, h, c]), v = Ot(function() {
    return a ? a({
      token: T(T({}, h), p),
      stylish: m,
      appearance: c,
      isDarkMode: u,
      css: Ya
    }) : {};
  }, [a, h, p, m, c]), C = Ot(function() {
    return T(T({}, v), m);
  }, [v, m]), b = T(T(T(T({}, h), p), {}, {
    stylish: C
  }, s), {}, {
    prefixCls: i
  });
  return /* @__PURE__ */ B(l, {
    theme: b,
    children: n
  });
}, v3 = function(t) {
  var n = t.styledConfig ? Mm(t.styledConfig) : void 0, r = t.StyleEngineContext;
  return /* @__PURE__ */ Ma(function(o) {
    var a = o.children, i = o.customToken, l = o.customStylish, s = o.theme, c = o.getStaticInstance, u = o.prefixCls, f = o.staticInstanceConfig, m = o.appearance, h = o.defaultAppearance, g = o.onAppearanceChange, p = o.themeMode, v = o.defaultThemeMode, C = o.onThemeModeChange, b = o.styled, x = Ge(r), $ = x.prefixCls, y = x.StyledThemeContext, S = x.CustomThemeContext, w = Ge(S), E = b ? Mm(b) : n || a3, O = u || $;
    return /* @__PURE__ */ B(r.Provider, {
      value: {
        prefixCls: O,
        StyledThemeContext: b?.ThemeContext || y || Jh,
        CustomThemeContext: S
      },
      children: /* @__PURE__ */ B(t0, {
        themeMode: p,
        defaultThemeMode: v,
        onThemeModeChange: C,
        defaultAppearance: h,
        appearance: m,
        onAppearanceChange: g,
        useTheme: t.useTheme,
        children: /* @__PURE__ */ B(e0, {
          prefixCls: O,
          staticInstanceConfig: f,
          theme: s,
          getStaticInstance: c,
          children: /* @__PURE__ */ B(m3, {
            prefixCls: O,
            customToken: i,
            defaultCustomToken: w,
            customStylish: l,
            StyledThemeProvider: E,
            children: a
          })
        })
      })
    });
  });
}, g3 = function(t) {
  return function() {
    var n = t.StyleEngineContext, r = Ge(n), o = r.StyledThemeContext, a = r.CustomThemeContext, i = r.prefixCls, l = Qh(), s = Dl(), c = Ge(a), u = Ge(o ?? Jh) || {}, f = Ge(dn.ConfigContext), m = f.iconPrefixCls, h = f.getPrefixCls, g = h(), p = i && i !== "ant" ? i : g, v = Ot(function() {
      return T(T(T(T({}, l), s), c), {}, {
        prefixCls: p,
        iconPrefixCls: m
      });
    }, [l, s, c, p, m]);
    return !u || Object.keys(u).length === 0 ? v : T(T({}, u), {}, {
      prefixCls: p,
      iconPrefixCls: m
    });
  };
}, n0 = new $4();
typeof global < "u" && (global.__ANTD_STYLE_CACHE_MANAGER_FOR_SSR__ = n0);
var p3 = function(t) {
  var n, r, o, a = T(T({}, t), {}, {
    key: (n = t.key) !== null && n !== void 0 ? n : "zcss",
    // 新建的 instance key 如果不传，则设为 zcss- 使得该 key 和 acss 不一样
    speedy: (r = t.speedy) !== null && r !== void 0 ? r : !1
  }), i = Lu({
    key: a.key,
    speedy: a.speedy,
    container: a.container
  }), l = M4(i), s = X4(l);
  i.cache = n0.add(i.cache);
  var c = /* @__PURE__ */ Rr(a.customToken ? a.customToken : {}), u = (o = a.styled) === null || o === void 0 ? void 0 : o.ThemeContext, f = /* @__PURE__ */ Rr({
    CustomThemeContext: c,
    StyledThemeContext: u,
    prefixCls: a?.prefixCls,
    iconPrefixCls: a?.iconPrefixCls
  }), m = g3({
    StyleEngineContext: f
  }), h = o3({
    hashPriority: a.hashPriority,
    useTheme: m,
    EmotionContext: l
  }), g = q4(m), p = U4(h), v = v3({
    styledConfig: a.styled,
    StyleEngineContext: f,
    useTheme: m
  });
  v.displayName = "AntdStyleThemeProvider";
  var C = Uh(i.cache, {
    hashPriority: a.hashPriority
  }), b = C.cx, x = i.injectGlobal, $ = i.keyframes;
  return {
    // ******************** //
    // **** 样式生成相关 **** //
    // ******************** //
    createStyles: h,
    createGlobalStyle: g,
    createStylish: p,
    // ******************** //
    // **** 基础样式方法 **** //
    // ******************** //
    css: Ya,
    cx: b,
    keyframes: $,
    injectGlobal: x,
    //******************** //
    //****  样式表管理  **** //
    //******************** //
    styleManager: i,
    // ******************** //
    // ***** 主题相关 ***** //
    // ******************** //
    useTheme: m,
    StyleProvider: s,
    ThemeProvider: v
  };
}, h3 = p3({
  key: I4,
  speedy: !1
}), b3 = h3.createStyles;
const y3 = b3(() => ({
  content: {
    padding: "32px !important",
    borderRadius: "20px !important"
  }
})), C3 = xn(
  ({
    isOpen: e,
    closable: t = !0,
    buttons: n,
    title: r,
    subtitle: o,
    description: a,
    closeOnOverlayClick: i = !0,
    closeOnEscape: l = !0,
    className: s,
    maxWidth: c,
    children: u
  }, f) => {
    const { styles: m } = y3(), h = {
      content: m.content
    };
    return /* @__PURE__ */ B(
      Sn,
      {
        open: e || !1,
        title: /* @__PURE__ */ B("span", { className: "luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]", children: r }),
        closable: t,
        maskClosable: i,
        footer: null,
        keyboard: l,
        centered: !0,
        width: "100%",
        className: pe("luca-modal", s),
        style: c ? {
          maxWidth: typeof c == "number" ? `${c}px` : c,
          width: "100%"
        } : void 0,
        modalRender: (g) => /* @__PURE__ */ B("div", { ref: f, className: "luca-modal-wrapper", children: g }),
        classNames: h,
        children: /* @__PURE__ */ je("div", { className: "luca-flex luca-flex-col luca-mt-6", children: [
          o && /* @__PURE__ */ B("p", { className: "luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0", children: o }),
          a && /* @__PURE__ */ B("p", { className: "luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0 luca-mb-6", children: a }),
          u,
          n && /* @__PURE__ */ B("div", { className: "luca-flex luca-justify-end luca-gap-2", children: n.map((g) => /* @__PURE__ */ B(_h, { variant: g.variant, onClick: g.onClick, children: g.text })) })
        ] })
      }
    );
  }
);
C3.displayName = "Modal";
var x3 = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "arrow-left", theme: "outlined" }, S3 = function(t, n) {
  return /* @__PURE__ */ d.createElement(Yt, ve({}, t, {
    ref: n,
    icon: x3
  }));
}, r0 = /* @__PURE__ */ d.forwardRef(S3);
process.env.NODE_ENV !== "production" && (r0.displayName = "ArrowLeftOutlined");
const w3 = ({
  setSearchInput: e,
  searchInput: t,
  personalStyles: n,
  className: r,
  inputClassName: o
}) => {
  const a = (c) => {
    e?.(c.target.value);
  }, i = pe(
    "luca-flex luca-w-full luca-items-center luca-justify-start",
    n === "reading" && "luca-h-[50px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    n === "examsGenerator" && "luca-h-10 luca-gap-2 luca-rounded-lg luca-border luca-border-[#e5e7eb] luca-bg-[#f9fafb] luca-px-4 luca-py-2",
    !n && "luca-min-h-[40px] luca-rounded-[10px] luca-bg-[#e6e7ef] luca-px-5 luca-py-[10px]",
    r
  ), l = pe(
    "luca-w-full luca-border-none luca-bg-transparent luca-outline-none",
    n === "examsGenerator" ? "luca-flex-1 luca-text-sm luca-text-[#111827] placeholder:luca-text-[#9ca3af]" : "luca-pl-2.5 luca-text-base",
    o
  ), s = pe(
    n === "reading" && "luca-h-[18px] luca-w-[18px]",
    n === "examsGenerator" && "luca-h-4 luca-w-4 luca-flex-shrink-0 luca-opacity-50",
    !n && "luca-h-5 luca-w-5"
  );
  return /* @__PURE__ */ je("div", { className: i, children: [
    /* @__PURE__ */ B(
      "input",
      {
        type: "text",
        name: "searchbar",
        placeholder: n === "examsGenerator" ? "Buscar por nombre" : "Buscar",
        onChange: a,
        value: t ?? "",
        className: l
      }
    ),
    /* @__PURE__ */ B(yu, { className: s })
  ] });
};
w3.displayName = "SearchBar";
const Wu = M.forwardRef(
  ({ className: e, icon: t, ...n }, r) => /* @__PURE__ */ B(
    "button",
    {
      ref: r,
      type: "button",
      className: pe(
        "luca-flex luca-h-8 luca-w-8 luca-items-center luca-justify-center luca-rounded-lg luca-border luca-border-gray-200 luca-bg-white luca-p-1 luca-text-[#3843D0] luca-transition-colors hover:luca-border-gray-300 hover:luca-bg-gray-50",
        e
      ),
      ...n,
      children: t || /* @__PURE__ */ B(r0, {})
    }
  )
);
Wu.displayName = "BreadcrumbBackButton";
const o0 = M.forwardRef(
  ({ className: e, children: t, href: n, isCurrentPage: r = !1, icon: o, ...a }, i) => {
    const l = /* @__PURE__ */ je("div", { className: "luca-flex luca-h-6 luca-items-center luca-gap-1 luca-px-1", children: [
      o && /* @__PURE__ */ B("span", { className: "luca-text-gray-500", children: o }),
      /* @__PURE__ */ B(
        "span",
        {
          className: pe(
            "luca-text-base luca-font-normal luca-leading-5",
            r ? "luca-text-gray-500" : "luca-text-[#3843D0] hover:luca-underline"
          ),
          children: t
        }
      )
    ] });
    return /* @__PURE__ */ B(
      "li",
      {
        ref: i,
        className: pe(
          "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-md",
          e
        ),
        ...a,
        children: n && !r ? /* @__PURE__ */ B("a", { href: n, className: "luca-inline-flex", children: l }) : l
      }
    );
  }
);
o0.displayName = "BreadcrumbItem";
const Gu = M.forwardRef(({ className: e, children: t, ...n }, r) => /* @__PURE__ */ B(
  "li",
  {
    ref: r,
    className: pe("luca-inline-flex luca-items-center", e),
    role: "presentation",
    "aria-hidden": "true",
    ...n,
    children: /* @__PURE__ */ B("span", { className: "luca-text-sm luca-font-medium luca-leading-5 luca-text-gray-500", children: t || "/" })
  }
));
Gu.displayName = "BreadcrumbSeparator";
const Za = M.forwardRef(
  ({ className: e, children: t, separator: n = /* @__PURE__ */ B(Gu, {}), ...r }, o) => {
    const a = M.Children.toArray(t);
    return /* @__PURE__ */ B(
      "nav",
      {
        ref: o,
        "aria-label": "Breadcrumb",
        className: pe("luca-flex luca-items-center luca-gap-1", e),
        ...r,
        children: /* @__PURE__ */ B("ol", { className: "luca-flex luca-items-center luca-gap-1", children: a.map((i, l) => {
          const s = l === a.length - 1, c = M.isValidElement(i) && i.type === Wu, u = !s && !c;
          return /* @__PURE__ */ je(M.Fragment, { children: [
            i,
            u && n
          ] }, l);
        }) })
      }
    );
  }
);
Za.displayName = "Breadcrumb";
Za.Item = o0;
Za.Separator = Gu;
Za.BackButton = Wu;
const Z3 = Za, $3 = M.forwardRef(
  ({
    chips: e,
    onRemove: t,
    removable: n = !0,
    className: r,
    chipClassName: o,
    ...a
  }, i) => {
    const l = (s) => {
      t && t(s);
    };
    return !e || e.length === 0 ? null : /* @__PURE__ */ B(
      "div",
      {
        ref: i,
        className: pe(
          "luca-flex luca-flex-row luca-flex-wrap luca-items-start luca-gap-3 luca-w-full luca-p-0",
          r
        ),
        ...a,
        children: e.map((s) => /* @__PURE__ */ je(
          "div",
          {
            className: pe(
              "luca-flex luca-flex-row luca-items-center luca-justify-center luca-gap-2 luca-px-3 luca-py-2 luca-bg-[#EDF5FF] luca-rounded-full luca-border luca-border-[#E5E7EB] luca-max-w-full",
              o
            ),
            children: [
              /* @__PURE__ */ B(
                "span",
                {
                  className: "luca-whitespace-nowrap luca-overflow-hidden luca-text-ellipsis luca-font-normal luca-text-sm luca-text-[#111827] luca-leading-[1.5]",
                  style: { fontFamily: "Poppins-Regular, sans-serif" },
                  children: s.title
                }
              ),
              n && t && /* @__PURE__ */ B(
                "button",
                {
                  type: "button",
                  className: pe(
                    "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-4 luca-h-4 luca-bg-transparent luca-border-0 luca-cursor-pointer luca-p-0 luca-flex-shrink-0 luca-text-[#6b7280] luca-text-xs luca-transition-all luca-duration-200",
                    "hover:luca-text-[#111827] active:luca-scale-90"
                  ),
                  onClick: () => l(s.id),
                  "aria-label": `Eliminar ${s.title}`,
                  children: /* @__PURE__ */ B(eo, {})
                }
              )
            ]
          },
          s.id
        ))
      }
    );
  }
);
$3.displayName = "Chips";
const qu = {
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
}, pi = (e, t = "0 0 24 24") => ({ className: n } = {}) => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: t,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-h-5 luca-w-5", n),
    children: e
  }
), a0 = {
  success: pi(
    /* @__PURE__ */ je(ra, { children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ B(
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
  danger: pi(
    /* @__PURE__ */ je(ra, { children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M12 21C16.4183 21 20 17.4183 20 13C20 8.58172 16.4183 5 12 5C7.58172 5 4 8.58172 4 13C4 17.4183 7.58172 21 12 21Z",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M9.75781 10.7578L14.2421 15.2421",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ B(
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
  warning: pi(
    /* @__PURE__ */ je(ra, { children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M12.0002 4.5L20.1248 18.5H3.87549L12.0002 4.5Z",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M12 10V13.5",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ B(
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
  info: pi(
    /* @__PURE__ */ je(ra, { children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z",
          stroke: "currentColor",
          strokeWidth: "1.8"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M12 10V16",
          stroke: "currentColor",
          strokeWidth: "1.8",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ B(
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
}, i0 = ({ className: e } = {}) => /* @__PURE__ */ je(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-h-4 luca-w-4", e),
    children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M4 4L12 12",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ B(
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
), l0 = "luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)]", s0 = M.createContext(null), E3 = () => {
  const e = M.useContext(s0);
  if (!e)
    throw new Error(
      "Los componentes compuestos de Notification deben usarse dentro de <Notification>."
    );
  return e;
}, O3 = (e) => ({
  "top-left": "luca-top-4 luca-left-4",
  "top-center": "luca-top-4 luca-left-1/2 -luca-translate-x-1/2",
  "top-right": "luca-top-4 luca-right-4",
  "bottom-left": "luca-bottom-4 luca-left-4",
  "bottom-center": "luca-bottom-4 luca-left-1/2 -luca-translate-x-1/2",
  "bottom-right": "luca-bottom-4 luca-right-4"
})[e], P3 = (e, t) => {
  const n = {
    "top-left": {
      enter: "luca-animate-[slideInFromLeft_0.3s_ease-out]",
      exit: "luca-animate-[slideOutToLeft_0.3s_ease-in]"
    },
    "top-center": {
      enter: "luca-animate-[slideInFromTop_0.3s_ease-out]",
      exit: "luca-animate-[slideOutToTop_0.3s_ease-in]"
    },
    "top-right": {
      enter: "luca-animate-[slideInFromRight_0.3s_ease-out]",
      exit: "luca-animate-[slideOutToRight_0.3s_ease-in]"
    },
    "bottom-left": {
      enter: "luca-animate-[slideInFromLeft_0.3s_ease-out]",
      exit: "luca-animate-[slideOutToLeft_0.3s_ease-in]"
    },
    "bottom-center": {
      enter: "luca-animate-[slideInFromBottom_0.3s_ease-out]",
      exit: "luca-animate-[slideOutToBottom_0.3s_ease-in]"
    },
    "bottom-right": {
      enter: "luca-animate-[slideInFromRight_0.3s_ease-out]",
      exit: "luca-animate-[slideOutToRight_0.3s_ease-in]"
    }
  };
  return t ? n[e].exit : n[e].enter;
}, N3 = M.forwardRef(
  ({
    variant: e = "success",
    title: t,
    description: n,
    actions: r,
    icon: o,
    dismissible: a = !0,
    onDismiss: i,
    children: l,
    hideIcon: s = !1,
    className: c,
    closeButtonAriaLabel: u = "Cerrar notificación",
    floating: f = !1,
    position: m = "top-right",
    autoClose: h,
    maxWidth: g,
    ...p
  }, v) => {
    const C = qu[e], b = a0[e], x = !s && !!(o ?? b()), [$, y] = M.useState(!1), S = M.useCallback(() => {
      f ? (y(!0), setTimeout(() => {
        i?.();
      }, 300)) : i?.();
    }, [f, i]);
    return M.useEffect(() => {
      if (h && i) {
        const w = setTimeout(() => {
          S();
        }, h);
        return () => clearTimeout(w);
      }
    }, [h, i, S]), /* @__PURE__ */ B(s0.Provider, { value: { variant: e }, children: /* @__PURE__ */ je(
      "div",
      {
        ref: v,
        role: "alert",
        className: pe(
          "luca-flex luca-items-start luca-gap-4 luca-rounded-2xl luca-bg-white luca-p-4 luca-transition-colors luca-duration-200",
          l0,
          f ? `luca-fixed luca-z-50 ${O3(m)} ${P3(m, $)}` : "luca-relative luca-w-full",
          c
        ),
        style: g ? { maxWidth: g, ...p.style } : p.style,
        ...p,
        children: [
          x && /* @__PURE__ */ B(
            "span",
            {
              className: pe(
                "luca-flex luca-h-[34px] luca-w-[34px] luca-shrink-0 luca-items-center luca-justify-center luca-rounded-lg",
                C.iconBackground,
                C.iconColor
              ),
              "aria-hidden": !0,
              children: o ?? /* @__PURE__ */ B(b, {})
            }
          ),
          /* @__PURE__ */ je("div", { className: "luca-flex luca-min-w-0 luca-flex-1 luca-flex-col luca-gap-4", children: [
            (t || n || l) && /* @__PURE__ */ je(
              "div",
              {
                className: pe(
                  "luca-flex luca-flex-col luca-gap-1 luca-text-sm luca-leading-6",
                  C.descriptionColor
                ),
                children: [
                  t && /* @__PURE__ */ B("p", { className: pe("luca-font-medium", C.titleColor), children: t }),
                  (n ?? l) && /* @__PURE__ */ B("p", { className: "luca-text-sm luca-leading-6 luca-text-inherit", children: n ?? l })
                ]
              }
            ),
            r && /* @__PURE__ */ B("div", { className: "luca-flex luca-flex-wrap luca-gap-5 luca-text-sm luca-leading-[22px]", children: r })
          ] }),
          a && /* @__PURE__ */ B(
            "button",
            {
              type: "button",
              onClick: S,
              "aria-label": u,
              className: pe(
                "luca-absolute luca-right-4 luca-top-4 luca-inline-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-full luca-transition-colors luca-duration-200",
                C.closeButtonColor,
                C.closeButtonHoverColor,
                "focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200"
              ),
              children: /* @__PURE__ */ B(i0, {})
            }
          )
        ]
      }
    ) });
  }
);
N3.displayName = "Notification";
const R3 = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ B(
  "div",
  {
    ref: n,
    className: pe(
      "luca-flex luca-flex-wrap luca-gap-5 luca-text-sm luca-leading-[22px]",
      e
    ),
    ...t
  }
));
R3.displayName = "NotificationActions";
const I3 = M.forwardRef(
  ({
    actionVariant: e = "primary",
    className: t,
    type: n = "button",
    ...r
  }, o) => {
    const { variant: a } = E3(), i = qu[a], l = e === "primary" ? i.primaryActionColor : i.secondaryActionColor;
    return /* @__PURE__ */ B(
      "button",
      {
        ref: o,
        type: n,
        className: pe(
          "luca-inline-flex luca-items-center luca-gap-2 luca-rounded luca-border-none luca-bg-transparent luca-p-0 luca-text-sm luca-font-medium luca-leading-[22px] luca-transition-colors luca-duration-200",
          l,
          "hover:luca-underline focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200",
          t
        ),
        ...r
      }
    );
  }
);
I3.displayName = "NotificationAction";
const M3 = M.forwardRef(
  ({
    variant: e = "success",
    message: t,
    icon: n,
    dismissible: r = !1,
    onDismiss: o,
    className: a,
    closeButtonAriaLabel: i = "Cerrar notificación",
    ...l
  }, s) => {
    const c = qu[e], u = a0[e], f = !!(n ?? u());
    return /* @__PURE__ */ je(
      "div",
      {
        ref: s,
        role: "status",
        className: pe(
          "luca-inline-flex luca-items-center luca-gap-3 luca-rounded-xl luca-px-[18px] luca-py-[15px]",
          c.toastBackground,
          c.toastTextColor,
          l0,
          a
        ),
        ...l,
        children: [
          f && /* @__PURE__ */ B(
            "span",
            {
              className: pe(
                "luca-flex luca-h-6 luca-w-6 luca-shrink-0 luca-items-center luca-justify-center luca-rounded-full",
                c.iconBackground,
                c.iconColor
              ),
              "aria-hidden": !0,
              children: n ?? /* @__PURE__ */ B(u, { className: "luca-h-4 luca-w-4" })
            }
          ),
          /* @__PURE__ */ B("span", { className: "luca-text-sm luca-font-medium luca-leading-6", children: t }),
          r && /* @__PURE__ */ B(
            "button",
            {
              type: "button",
              onClick: o,
              "aria-label": i,
              className: pe(
                "luca-ml-auto luca-inline-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-full luca-transition-colors luca-duration-200",
                c.closeButtonColor,
                c.closeButtonHoverColor,
                "focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-neutral-200"
              ),
              children: /* @__PURE__ */ B(i0, {})
            }
          )
        ]
      }
    );
  }
);
M3.displayName = "Toast";
const T3 = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ je(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M8 3.33337V12.6667",
          stroke: "currentColor",
          strokeWidth: "1.6",
          strokeLinecap: "round"
        }
      ),
      /* @__PURE__ */ B(
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
), c0 = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: /* @__PURE__ */ B(
      "path",
      {
        d: "M2 7.5H14C14.2761 7.5 14.5 7.72386 14.5 8C14.5 8.27614 14.2761 8.5 14 8.5H2C1.72386 8.5 1.5 8.27614 1.5 8C1.5 7.72386 1.72386 7.5 2 7.5Z",
        fill: "currentColor"
      }
    )
  }
), _3 = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: /* @__PURE__ */ B(
      "path",
      {
        d: "M3.5 6L8 10.5L12.5 6",
        stroke: "currentColor",
        strokeWidth: "1.6",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), A3 = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ B(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: /* @__PURE__ */ B(
      "path",
      {
        d: "M4 8.25L6.66667 11L12 5",
        stroke: "currentColor",
        strokeWidth: "1.8",
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    )
  }
), u0 = ({
  size: e = 16,
  className: t,
  ...n
}) => /* @__PURE__ */ je(
  "svg",
  {
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-block", t),
    width: e,
    height: e,
    "aria-hidden": "true",
    focusable: "false",
    ...n,
    children: [
      /* @__PURE__ */ B(
        "path",
        {
          d: "M8 14.5C11.5899 14.5 14.5 11.5899 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5Z",
          stroke: "currentColor",
          strokeWidth: "1.2"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M8 11.75C8.34518 11.75 8.625 12.0298 8.625 12.375C8.625 12.7202 8.34518 13 8 13C7.65482 13 7.375 12.7202 7.375 12.375C7.375 12.0298 7.65482 11.75 8 11.75Z",
          fill: "currentColor"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M8 10.5C7.65482 10.5 7.375 10.2202 7.375 9.875C7.375 9.14365 7.72238 8.60498 8.35216 8.25067L8.53984 8.1462C8.95643 7.91372 9.25 7.4989 9.25 7C9.25 6.30964 8.69036 5.75 8 5.75C7.30964 5.75 6.75 6.30964 6.75 7C6.75 7.34518 6.47018 7.625 6.125 7.625C5.77982 7.625 5.5 7.34518 5.5 7C5.5 5.6219 6.6219 4.5 8 4.5C9.3781 4.5 10.5 5.6219 10.5 7C10.5 7.92365 10.0417 8.64676 9.21428 9.11044L9.02661 9.21492C8.69357 9.40096 8.625 9.57277 8.625 9.875C8.625 10.2202 8.34518 10.5 8 10.5Z",
          fill: "currentColor"
        }
      )
    ]
  }
), j3 = ({
  width: e = 120,
  height: t = 120,
  className: n,
  ...r
}) => /* @__PURE__ */ je(
  "svg",
  {
    viewBox: "0 0 120 120",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: pe("luca-block", n),
    width: e,
    height: t,
    "aria-hidden": "true",
    focusable: "false",
    ...r,
    children: [
      /* @__PURE__ */ B("g", { "clip-path": "url(#clip0_447_4555)", children: /* @__PURE__ */ B("g", { "clip-path": "url(#clip1_447_4555)", children: /* @__PURE__ */ je("g", { "clip-path": "url(#clip2_447_4555)", children: [
        /* @__PURE__ */ B(
          "path",
          {
            d: "M62.4498 87.2153H61.2678V89.6299C61.2678 90.3321 60.8769 90.6175 60.3677 90.6175C59.854 90.6175 59.4676 90.3321 59.4676 89.6299V87.2153H58.2811V89.7341C58.2811 91.1203 59.2631 91.7183 60.3677 91.7183C61.4679 91.7183 62.4498 91.1203 62.4498 89.7341V87.2153Z",
            fill: "#9CA3AF"
          }
        ),
        /* @__PURE__ */ B(
          "path",
          {
            d: "M65.3421 87.0974C63.9374 87.0974 62.9963 88.0805 62.9963 89.4078C62.9963 90.7397 63.9374 91.7182 65.3421 91.7182C66.0785 91.7182 66.6968 91.4237 67.1105 90.8937L66.2649 90.1734C66.0149 90.4452 65.6876 90.6173 65.3057 90.6173C64.692 90.6173 64.2056 90.1417 64.2056 89.4078C64.2056 88.6784 64.6966 88.1982 65.3103 88.1982C65.6967 88.1982 65.9831 88.3523 66.2513 88.6377L67.1059 87.9264C66.7013 87.3964 66.0785 87.0974 65.3421 87.0974Z",
            fill: "#9CA3AF"
          }
        ),
        /* @__PURE__ */ B(
          "path",
          {
            d: "M71.7958 87.2152H70.6366V87.6999C70.3456 87.342 69.9229 87.0974 69.3182 87.0974C68.1044 87.0974 67.1862 88.0895 67.1862 89.4078C67.1862 90.7261 68.1044 91.7182 69.3182 91.7182C69.9229 91.7182 70.3502 91.4735 70.6366 91.1202V91.6049H71.7958V87.2152ZM69.5365 88.1982C70.2138 88.1982 70.673 88.7147 70.673 89.4078C70.673 90.1009 70.2138 90.6173 69.5365 90.6173C68.8409 90.6173 68.4 90.0783 68.4 89.4078C68.4 88.7373 68.8409 88.1982 69.5365 88.1982Z",
            fill: "#9CA3AF"
          }
        ),
        /* @__PURE__ */ B(
          "path",
          {
            d: "M73.2911 89.9607C72.8184 89.9607 72.4047 90.3639 72.4047 90.835C72.4047 91.3107 72.8184 91.7184 73.2911 91.7184C73.7594 91.7184 74.1686 91.3107 74.1686 90.835C74.1686 90.3639 73.7594 89.9607 73.2911 89.9607Z",
            fill: "#9CA3AF"
          }
        )
      ] }) }) }),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M53.9834 73.6475C54.4776 73.4676 54.9946 73.5233 55.5039 73.5233C62.9798 73.5233 70.4557 73.5918 77.9316 73.4676C79.66 73.4397 81.3934 73.5183 83.1293 73.4473C86.3984 73.313 89.7486 69.9121 89.7233 66.1716C89.6929 62.0333 89.7309 57.8924 89.7131 53.754C89.6979 49.9324 86.1146 46.4961 82.3665 46.4327C78.9909 46.3744 75.6103 46.4302 72.2297 46.4935C66.9535 46.5924 61.6697 46.3643 56.3909 46.3085C51.0716 46.2502 45.7321 45.9842 40.4305 46.4606C37.2475 46.7444 35.281 48.8782 34.209 51.8534C33.7731 53.0596 33.9607 54.3115 33.8771 55.533C33.7377 57.5503 33.948 59.5928 33.7985 61.6101C33.7123 62.7834 33.9151 63.6754 34.5258 64.6992C34.9363 65.3885 35.3139 65.4874 35.8639 65.3987C37.2171 65.1757 38.5704 65.3151 39.9211 65.3049C40.765 65.2999 41.3606 65.6622 41.1933 66.6835C41.0539 67.5223 41.6925 68.2167 41.6064 69.0936C41.5329 69.8563 41.3352 70.1123 40.5547 70.1199C34.9668 70.1757 29.4042 70.718 23.8289 71.0145C22.8583 71.0652 22.3971 70.6546 22.1944 69.8462C21.9967 69.0606 21.9232 68.2319 21.8573 67.4362C21.7914 66.6506 22.5035 66.2806 23.3221 66.2958C24.8122 66.3237 26.3023 66.3262 27.7646 65.9106C28.0737 65.4063 27.7975 64.8234 27.9876 64.2659C28.5932 62.5072 30.2202 62.2461 32.4376 62.6516C32.7696 62.7124 33.1523 62.6617 33.4564 62.8797",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M53.4765 71.2409C53.9707 71.061 54.4877 71.1167 54.9971 71.1167C63.697 71.1167 72.3994 71.1167 81.0994 71.1167C84.1734 71.1167 87.1587 68.1061 87.1891 65.0347C87.2195 61.9936 87.1156 58.9526 87.2904 55.9115C87.4957 52.351 84.7613 49.0692 80.7192 48.945C80.5925 48.9399 80.4658 48.945 80.3391 48.945C67.9646 49.016 55.5901 48.7879 43.213 48.7803C39.3458 48.7803 36.2642 52.1533 36.2465 55.7873C36.2338 58.3646 36.2414 60.9394 36.2465 63.5167C36.2465 64.0691 36.206 64.6241 36.3732 65.1639",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M30.4154 26.0044C29.3586 23.9441 29.8147 21.9421 30.8183 20.0617C31.7737 18.2726 33.4539 16.9928 35.3647 16.8559C37.3489 16.714 39.4498 16.5873 41.4341 17.1499C42.8608 17.5554 43.9885 18.4626 44.8603 19.6689C45.9348 21.154 45.9348 22.895 45.9982 24.6106C46.0945 27.1854 45.8233 29.7702 46.1325 32.3399C46.6165 36.3642 48.9201 38.9289 52.5846 40.4646C54.5182 41.273 56.543 41.2401 58.5475 41.3135C61.249 41.4098 63.953 41.3794 66.657 41.4403C69.5916 41.5061 72.2779 40.7079 74.5156 38.6805C76.6215 36.7723 77.7669 34.4281 77.7999 31.5797C77.8278 29.1291 77.8176 26.6811 77.8024 24.2305C77.772 19.1291 81.4694 16.5848 85.1541 16.894C86.6316 17.0181 88.0913 16.5721 89.6093 17.2183C92.2018 18.3207 93.8008 20.3151 93.7502 23.0926C93.735 23.8909 94.1202 24.674 93.6817 25.5179C93.3878 26.0855 93.1191 26.3009 92.5059 26.2705C91.4516 26.2198 90.3898 26.3085 89.3381 26.1337",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M39.375 15.9374C40.9375 16.2499 45.9375 18.6761 45.9375 22.5003V32.8124C47.8125 37.4999 51.5625 41.2494 56.25 41.2496C61.875 41.2499 68.4375 42.1871 71.25 40.3121C74.0625 38.4371 75.9375 36.5623 76.875 34.6873C78.0609 32.3155 75 20.6248 82.5 16.8754C89.2607 13.4956 56.25 15.6249 39.375 15.9374Z",
          fill: "#9CA3AF"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M17.6176 99.3696C18.5426 103.982 19.3941 108.612 20.5218 113.184C20.6004 113.503 20.4559 113.878 20.5446 114.19C20.9298 115.52 21.8497 116.301 23.0662 116.247C28.9759 115.986 34.8958 115.893 40.8005 115.637C44.5613 115.474 48.3322 115.7 52.0802 115.327C54.7792 115.059 57.4933 115.373 60.1897 115.084C61.3047 114.965 62.0904 113.972 61.8369 112.925C60.8891 109.027 60.0427 105.107 59.4345 101.141C58.9353 97.8921 57.9875 94.7396 57.4173 91.5085C57.3184 90.951 56.543 87.0711 56.543 87.0711C55.7118 83.1406 54.8856 79.2075 54.0569 75.2769C53.4918 72.5932 52.9698 69.8867 52.4477 67.1852C52.2678 66.2526 51.7381 65.5506 50.6839 65.543C47.5871 65.5177 44.5004 65.7027 41.4341 66.169",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M88.0685 16.6279C88.1091 15.822 87.4933 15.3557 87.0397 14.8666C82.0828 9.53214 76.1806 5.87781 68.9404 4.43078C64.8274 3.6097 60.7726 3.53368 56.6394 4.19003C48.6541 5.45967 42.0347 9.15961 36.6293 15.1125C36.2618 15.5179 35.9248 15.9665 35.7372 16.5012",
          fill: "#9CA3AF"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M88.0685 16.6279C88.1091 15.822 87.4933 15.3557 87.0397 14.8666C82.0828 9.53214 76.1806 5.87781 68.9404 4.43078C64.8274 3.6097 60.7726 3.53368 56.6394 4.19003C48.6541 5.45967 42.0347 9.15961 36.6293 15.1125C36.2618 15.5179 35.9248 15.9665 35.7372 16.5012",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M20.1518 98.9893C21.0236 103.563 21.9485 108.125 22.909 112.682C23.0788 113.485 23.4437 113.599 24.0798 113.561C29.4397 113.242 34.8147 113.313 40.1745 112.948C42.0245 112.821 43.8998 113.049 45.7473 112.902C49.6322 112.595 53.5247 112.813 57.4071 112.56C58.0559 112.517 58.6033 112.256 59.1811 112.04",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M41.8192 68.4521C42.3134 68.2721 42.8329 68.3076 43.3397 68.3304C45.4254 68.4292 47.4654 67.8464 49.9109 68.1606C50.5698 68.7714 50.4355 70.0511 50.6484 71.1206C51.6317 76.0699 52.8303 80.971 53.7578 85.933C54.2571 88.6091 55.0097 91.2523 55.4482 93.9309C56.102 97.9172 57.0523 101.84 57.6681 105.832C57.99 107.92 58.5374 109.965 58.9251 112.043",
          fill: "white"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M41.8192 68.4521C42.3134 68.2721 42.8329 68.3076 43.3397 68.3304C45.4254 68.4292 47.4654 67.8464 49.9109 68.1606C50.5698 68.7714 50.4355 70.0511 50.6484 71.1206C51.6317 76.0699 52.8303 80.971 53.7578 85.933C54.2571 88.6091 55.0097 91.2523 55.4482 93.9309C56.102 97.9172 57.0523 101.84 57.6681 105.832C57.99 107.92 58.5374 109.965 58.9251 112.043",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M21.6724 67.311C19.7286 67.3591 17.7849 67.2223 15.8412 67.4225C15.1291 67.496 14.417 67.5897 13.6896 67.577C11.6369 67.5416 10.8843 68.497 11.4139 70.4762C12.4555 74.3636 13.122 78.3297 13.9937 82.2501C14.5285 84.655 14.7287 87.1234 15.4636 89.4852",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M21.9258 69.4666C19.8554 69.5654 17.7951 69.8594 15.717 69.8492C14.2142 69.8416 14.2016 70.019 14.4271 71.4965C15.2254 76.6941 16.6547 81.7625 17.496 86.95C17.5999 87.5861 17.7038 88.2247 17.8711 88.8507",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M93.3902 66.1716C91.5783 72.6795 88.2356 75.8599 84.8956 78.2015C83.3573 79.2811 81.6036 80.3277 79.9209 80.7002C78.2838 81.0601 76.5682 81.5847 74.7613 81.5542C68.9352 81.4554 63.104 81.4833 57.2753 81.5061C56.7659 81.5061 56.2489 81.4503 55.7548 81.6303",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M76.918 95.5681C77.5642 97.304 76.1907 98.6142 74.6423 99.0045C70.6763 100.008 66.6469 100.059 62.5998 100.003C61.5861 99.9903 60.5724 100.003 59.5587 100.003",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M94.4039 51.9802C96.3401 52.6188 97.8403 54.3218 97.5844 56.671C97.3487 58.8302 97.9163 60.9665 97.8378 63.1333C97.7415 65.746 95.5342 68.3512 93.0101 68.7085",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M30.162 33.48C29.5462 34.2808 29.6602 35.226 29.6577 36.1409C29.6526 40.8723 29.6704 45.6011 29.645 50.3324C29.6374 51.7288 29.8173 53.1175 29.7819 54.5139",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M93.2635 33.48C94.556 35.0132 93.9985 36.8505 93.9807 38.5484C93.9605 40.4921 93.8692 42.4308 94.0061 44.3796C94.0998 45.7253 94.0263 47.0811 94.0238 48.4318C94.0187 50.4591 94.0694 52.489 93.8971 54.5139",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M79.9591 80.9968C80.5496 84.0379 81.2743 87.051 81.7609 90.1149C81.8673 90.789 81.7482 91.4834 82.0828 92.1625C82.3641 92.7378 81.7863 93.2066 81.3453 93.3916C78.4386 94.6004 75.5141 95.7281 72.3641 96.2325C68.2739 96.8863 64.171 96.643 60.0681 96.7114C59.6424 96.719 59.2116 96.6785 58.801 96.8381",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M84.3938 91.0076C87.5996 90.7846 90.4506 89.629 93.076 87.7081C92.2271 86.1673 92.1156 84.3832 91.1348 82.8804C89.8677 80.9392 87.3969 80.1257 85.4075 80.9949C83.2205 81.9529 82.1409 84.2843 82.7644 86.5651C83.3599 88.7471 84.0745 90.891 85.144 92.9108C86.9534 96.3294 90.8079 95.8581 92.9518 93.7344C93.9858 92.7106 94.0264 90.9721 93.593 89.4997C93.4612 89.0486 93.5322 88.3391 92.8834 88.0907",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M29.275 52.1074C27.2705 52.7891 25.902 54.5605 25.864 56.669C25.8209 59.2032 25.864 61.7374 25.8463 64.2716C25.8437 64.8621 26.1605 65.3562 26.234 65.9188",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M14.8299 88.2192C11.8851 89.2988 11.4087 92.3449 12.2095 95.1756C12.5719 96.4529 12.985 97.9759 14.4624 98.4371C15.618 98.797 16.8065 99.5395 18.1319 98.8781C18.322 98.7843 18.6033 98.7894 18.8871 98.8173C21.135 99.0352 22.7949 96.6987 22.4477 94.423C22.2348 93.0317 22.0295 91.6582 21.1603 90.5C20.2429 89.2785 18.4132 88.7666 16.989 89.3748C16.505 89.5826 16.0159 89.3546 15.5952 89.5066C14.4725 89.9121 14.209 91.3743 14.541 93.166C14.878 94.9957 15.5977 96.7367 15.7143 98.6095",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M93.2637 93.9209C94.1785 94.8814 94.1278 96.0851 93.5931 97.0608C92.9849 98.1733 91.9104 98.9234 90.476 98.7333C89.2267 98.5686 88.4462 97.8033 87.9444 96.706C87.7543 96.2929 87.7721 95.8621 87.9418 95.4414",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M16.3505 89.74C16.9689 92.7506 17.3389 95.8195 18.3779 98.7364",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M76.4111 81.6301C76.5556 82.3549 76.7634 83.0645 76.9078 83.7867C76.9965 84.2252 77.1308 84.6686 77.5566 84.7827C79.2773 85.2414 79.1126 86.7137 79.3077 87.9707C79.3863 88.4801 79.4547 88.9895 79.584 89.5039C77.9646 90.8622 78.5348 92.5297 78.9479 94.177",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M95.7977 55.9075C95.1743 58.7382 95.2681 61.5663 95.7977 64.3971",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M92.1232 85.9377C89.6727 87.77 86.9737 88.9889 83.8871 89.2322",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M27.8811 55.2742C28.2384 57.076 28.8061 58.855 28.6287 60.7227C28.5552 61.4906 28.3094 62.2432 28.6414 63.0035",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M34.3434 29.6792C33.3348 29.5069 32.3186 29.55 31.3023 29.5551C30.1898 29.5601 29.7666 30.0999 29.7818 31.4532C29.7945 32.6088 30.2431 33.0953 31.3023 33.1004C32.4022 33.1029 33.502 33.07 34.5968 33.2271",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M65.6408 64.3342C64.2115 66.5162 60.988 66.8482 59.0519 64.3976",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M89.0822 33.354C90.1389 33.354 91.2007 33.278 92.2474 33.3794C93.0761 33.4579 93.6082 33.1336 93.8769 32.4595C94.1708 31.722 94.1658 30.9187 93.7628 30.1914C93.5854 29.872 93.2737 29.7859 92.8835 29.7935C91.7 29.8214 90.514 29.8467 89.3356 29.6794",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M34.3434 26.131C33.3779 25.9638 32.4022 26.0043 31.4291 26.0068C30.2278 26.0068 29.9542 26.2983 29.9035 27.5248C29.8731 28.2572 29.9187 28.9592 30.4154 29.5522",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M93.5171 26.6384C94.1785 27.6952 94.0594 28.7494 93.5171 29.8062",
          stroke: "#9CA3AF",
          "stroke-width": "1.3125",
          "stroke-linecap": "round",
          "stroke-linejoin": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M43.4401 52.6216C48.702 51.2641 48.8375 61.7435 43.669 60.6874C40.4119 60.0215 40.5521 53.367 43.4401 52.6216Z",
          fill: "#9CA3AF"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M77.1901 52.6216C82.452 51.2641 82.5875 61.7435 77.419 60.6874C74.1619 60.0215 74.3021 53.367 77.1901 52.6216Z",
          fill: "#9CA3AF"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M58.125 7.50056C62.1875 6.56306 71.25 6.18762 78.75 12.1876",
          stroke: "white",
          "stroke-width": "1.875",
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ B(
        "path",
        {
          d: "M45 12.8496C45 12.8496 48.75 9.65076 52.5 9.37518",
          stroke: "white",
          "stroke-width": "1.875",
          "stroke-linecap": "round"
        }
      ),
      /* @__PURE__ */ je("defs", { children: [
        /* @__PURE__ */ B("clipPath", { id: "clip0_447_4555", children: /* @__PURE__ */ B(
          "rect",
          {
            width: "20.8904",
            height: "6.61875",
            fill: "white",
            transform: "translate(53.3064 85.1814)"
          }
        ) }),
        /* @__PURE__ */ B("clipPath", { id: "clip1_447_4555", children: /* @__PURE__ */ B(
          "rect",
          {
            width: "20.8904",
            height: "6.61875",
            fill: "white",
            transform: "translate(53.3064 85.1814)"
          }
        ) }),
        /* @__PURE__ */ B("clipPath", { id: "clip2_447_4555", children: /* @__PURE__ */ B(
          "rect",
          {
            width: "20.8904",
            height: "6.61875",
            fill: "white",
            transform: "translate(53.3064 85.1814)"
          }
        ) })
      ] })
    ]
  }
), d0 = M.createContext(null), f0 = () => {
  const e = M.useContext(d0);
  if (!e)
    throw new Error(
      "Los componentes compuestos de Selector deben usarse dentro de <Selector>."
    );
  return e;
}, F3 = "luca-group/selector luca-flex luca-w-full luca-items-center luca-gap-6 luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-px-6 luca-py-4 luca-transition-all luca-duration-200", B3 = M.forwardRef(
  ({ className: e, children: t, disabled: n = !1, ...r }, o) => /* @__PURE__ */ B(d0.Provider, { value: { disabled: n }, children: /* @__PURE__ */ B(
    "div",
    {
      ref: o,
      "data-disabled": n || void 0,
      className: pe(
        F3,
        !n && "hover:luca-border-primary-100 hover:luca-bg-neutral-50 focus-within:luca-border-primary-100 focus-within:luca-bg-neutral-50",
        n && "luca-border-neutral-200 luca-bg-neutral-50 luca-opacity-70 luca-cursor-not-allowed",
        e
      ),
      ...r,
      children: t
    }
  ) })
);
B3.displayName = "Selector";
const k3 = M.forwardRef(({ className: e, ...t }, n) => /* @__PURE__ */ B(
  "span",
  {
    ref: n,
    className: pe(
      "luca-text-sm luca-font-semibold luca-leading-6 luca-text-neutral-900",
      e
    ),
    ...t
  }
));
k3.displayName = "SelectorLabel";
const D3 = M.forwardRef(({ as: e = "button", className: t, children: n, ...r }, o) => {
  const { disabled: a } = f0();
  if (e === "span") {
    const l = r;
    return /* @__PURE__ */ B(
      "span",
      {
        ref: o,
        className: pe(
          "luca-text-sm luca-leading-6 luca-text-primary-600",
          t
        ),
        ...l,
        children: n
      }
    );
  }
  const i = r;
  return /* @__PURE__ */ B(
    "button",
    {
      ref: o,
      type: "button",
      disabled: a,
      className: pe(
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
D3.displayName = "SelectorDetail";
const L3 = M.forwardRef(({ className: e, iconVariant: t = "plus", icon: n, type: r = "button", ...o }, a) => {
  const { disabled: i } = f0(), l = n ?? (t === "minus" ? /* @__PURE__ */ B(c0, { size: 16 }) : /* @__PURE__ */ B(T3, { size: 16 }));
  return /* @__PURE__ */ B(
    Ah,
    {
      ref: a,
      type: r,
      state: i ? "disabled" : "default",
      outline: "rounded",
      className: pe(
        "luca-size-8 luca-border-neutral-200 luca-bg-white luca-text-primary-600",
        !i && "hover:luca-border-primary-200 hover:luca-bg-[#edf5ff] hover:luca-text-primary-600 focus-visible:luca-outline-none focus-visible:luca-ring-2 focus-visible:luca-ring-offset-2 focus-visible:luca-ring-primary-200",
        e
      ),
      icon: l,
      disabled: i,
      ...o
    }
  );
});
L3.displayName = "SelectorAction";
const Uu = ({
  content: e,
  children: t,
  className: n,
  overlayClassName: r,
  placement: o = "top",
  ...a
}) => /* @__PURE__ */ B(
  Nl,
  {
    placement: o,
    title: e,
    overlayClassName: pe("luca-tooltip-overlay", r),
    overlayInnerStyle: {
      borderRadius: 8,
      backgroundColor: "#111827",
      color: "#ffffff",
      padding: "8px 12px",
      fontSize: 12,
      fontWeight: 500,
      lineHeight: "18px",
      boxShadow: "0px 4px 6px -1px rgba(15, 23, 42, 0.15), 0px 2px 4px -2px rgba(15, 23, 42, 0.1)"
    },
    ...a,
    children: /* @__PURE__ */ B("span", { className: pe("luca-inline-flex luca-items-center", n), children: t })
  }
);
Uu.displayName = "Tooltip";
function Ps(e) {
  return e == null ? "" : Array.isArray(e) ? e.join("") : String(e);
}
function m0({
  value: e,
  defaultValue: t
}) {
  const n = e != null, r = M.useMemo(
    () => Ps(n ? e : t),
    [t, n, e]
  ), [o, a] = M.useState(r);
  M.useEffect(() => {
    n || a(Ps(t));
  }, [t, n]);
  const i = n ? Ps(e) : o, l = M.useCallback(
    (s) => {
      a(s.target.value);
    },
    []
  );
  return {
    isControlled: n,
    currentValue: i,
    handleUncontrolledChange: l
  };
}
const z3 = M.forwardRef(
  ({
    label: e,
    required: t,
    tooltip: n,
    helpText: r,
    message: o,
    status: a = "default",
    showCounter: i = !1,
    wrapperClassName: l,
    className: s,
    id: c,
    disabled: u,
    type: f = "text",
    value: m,
    onChange: h,
    maxLength: g,
    defaultValue: p,
    ...v
  }, C) => {
    const b = M.useId(), x = c ?? b, $ = r ? `${x}-help` : void 0, y = a === "danger" && o ? `${x}-message` : void 0, S = [
      $,
      y,
      v["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0, { isControlled: w, currentValue: E, handleUncontrolledChange: O } = m0({ value: m, defaultValue: p }), P = E.length, N = i || typeof g == "number", R = N ? typeof g == "number" ? `${P}/${g}` : `${P}` : void 0, _ = M.useCallback(
      (I) => {
        w || O(I), h?.(I);
      },
      [O, w, h]
    );
    return /* @__PURE__ */ je(
      "div",
      {
        className: pe(
          "luca-flex luca-w-full luca-flex-col luca-gap-2",
          l
        ),
        children: [
          (e || n) && /* @__PURE__ */ je("div", { className: "luca-flex luca-items-center luca-gap-2", children: [
            e && /* @__PURE__ */ B(
              "label",
              {
                htmlFor: x,
                className: "luca-flex luca-items-center luca-gap-1 luca-text-base luca-font-medium luca-leading-6 luca-text-neutral-900",
                children: /* @__PURE__ */ je("span", { children: [
                  e,
                  t && /* @__PURE__ */ B("span", { className: "luca-text-danger-500", children: "*" })
                ] })
              }
            ),
            n && /* @__PURE__ */ B(Uu, { content: n, children: /* @__PURE__ */ B(
              "button",
              {
                type: "button",
                className: "luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-primary-600",
                children: /* @__PURE__ */ B(u0, { size: 16 })
              }
            ) })
          ] }),
          r && /* @__PURE__ */ B(
            "p",
            {
              id: $,
              className: "luca-text-xs luca-font-normal luca-leading-6 luca-text-neutral-400",
              children: r
            }
          ),
          /* @__PURE__ */ je("div", { className: "luca-flex luca-flex-col luca-gap-1", children: [
            /* @__PURE__ */ B(
              Fr,
              {
                ref: C,
                id: x,
                type: f,
                disabled: u,
                value: E,
                maxLength: g,
                status: a === "danger" ? "error" : void 0,
                className: pe(
                  "luca-h-12 luca-w-full luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-px-4 luca-text-sm luca-leading-6 luca-text-neutral-700 luca-transition-colors luca-duration-200",
                  "placeholder:luca-text-neutral-400 placeholder:luca-opacity-100",
                  !u && "hover:luca-border-primary-100 focus:luca-border-primary-200 focus:luca-ring-2 focus:luca-ring-primary-200 focus:luca-outline-none",
                  u && "luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400",
                  s
                ),
                "aria-invalid": a === "danger" || void 0,
                "aria-describedby": S,
                onChange: _,
                ...v
              }
            ),
            N && R && /* @__PURE__ */ B("div", { className: "luca-flex luca-justify-end", children: /* @__PURE__ */ B("span", { className: "luca-text-xs luca-font-normal luca-leading-tight luca-text-neutral-400", children: R }) }),
            a === "danger" && o && /* @__PURE__ */ B(
              "p",
              {
                id: y,
                className: "luca-text-xs luca-font-medium luca-leading-6 luca-text-danger-500",
                children: o
              }
            )
          ] })
        ]
      }
    );
  }
);
z3.displayName = "InputField";
const H3 = M.forwardRef(
  ({
    label: e,
    required: t,
    tooltip: n,
    helpText: r,
    message: o,
    status: a = "default",
    showCounter: i = !0,
    wrapperClassName: l,
    className: s,
    id: c,
    disabled: u,
    value: f,
    onChange: m,
    maxLength: h,
    rows: g = 6,
    defaultValue: p,
    ...v
  }, C) => {
    const b = M.useId(), x = c ?? b, $ = r ? `${x}-help` : void 0, y = a === "danger" && o ? `${x}-message` : void 0, S = [
      $,
      y,
      v["aria-describedby"]
    ].filter(Boolean).join(" ") || void 0, { isControlled: w, currentValue: E, handleUncontrolledChange: O } = m0({ value: f, defaultValue: p }), P = E.length, N = i || typeof h == "number", R = N ? typeof h == "number" ? `${P}/${h}` : `${P}` : void 0, _ = M.useCallback(
      (I) => {
        w || O(I), m?.(I);
      },
      [O, w, m]
    );
    return /* @__PURE__ */ je(
      "div",
      {
        className: pe(
          "luca-flex luca-w-full luca-flex-col luca-gap-2",
          l
        ),
        children: [
          (e || n) && /* @__PURE__ */ je("div", { className: "luca-flex luca-items-center luca-gap-2", children: [
            e && /* @__PURE__ */ B(
              "label",
              {
                htmlFor: x,
                className: "luca-flex luca-items-center luca-gap-1 luca-text-base luca-font-medium luca-leading-6 luca-text-neutral-900",
                children: /* @__PURE__ */ je("span", { children: [
                  e,
                  t && /* @__PURE__ */ B("span", { className: "luca-text-danger-500", children: "*" })
                ] })
              }
            ),
            n && /* @__PURE__ */ B(Uu, { content: n, children: /* @__PURE__ */ B(
              "button",
              {
                type: "button",
                className: "luca-inline-flex luca-h-5 luca-w-5 luca-items-center luca-justify-center luca-text-primary-600",
                children: /* @__PURE__ */ B(u0, { size: 16 })
              }
            ) })
          ] }),
          r && /* @__PURE__ */ B(
            "p",
            {
              id: $,
              className: "luca-text-xs luca-font-normal luca-leading-6 luca-text-neutral-400",
              children: r
            }
          ),
          /* @__PURE__ */ je("div", { className: "luca-flex luca-flex-col luca-gap-1", children: [
            /* @__PURE__ */ B(
              Fr.TextArea,
              {
                ref: C,
                id: x,
                disabled: u,
                value: E,
                maxLength: h,
                rows: g,
                status: a === "danger" ? "error" : void 0,
                className: pe(
                  "luca-w-full luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-p-4 luca-text-sm luca-leading-6 luca-text-neutral-700 luca-transition-colors luca-duration-200",
                  "placeholder:luca-text-neutral-400 placeholder:luca-opacity-100",
                  "luca-resize-y luca-overflow-auto",
                  !u && "hover:luca-border-primary-100 focus:luca-border-primary-200 focus:luca-ring-2 focus:luca-ring-primary-200 focus:luca-outline-none",
                  u && "luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400",
                  s
                ),
                "aria-invalid": a === "danger" || void 0,
                "aria-describedby": S,
                onChange: _,
                ...v
              }
            ),
            N && R && /* @__PURE__ */ B("div", { className: "luca-flex luca-justify-end", children: /* @__PURE__ */ B("span", { className: "luca-text-xs luca-font-normal luca-leading-tight luca-text-neutral-400", children: R }) }),
            a === "danger" && o && /* @__PURE__ */ B(
              "p",
              {
                id: y,
                className: "luca-text-xs luca-font-medium luca-leading-6 luca-text-danger-500",
                children: o
              }
            )
          ] })
        ]
      }
    );
  }
);
H3.displayName = "TextAreaField";
const V3 = {
  md: "luca-min-h-11",
  lg: "luca-min-h-12"
}, W3 = ({
  label: e,
  placeholder: t = "Selecciona una opción",
  items: n,
  value: r,
  defaultValue: o,
  onChange: a,
  disabled: i,
  size: l = "lg",
  overlayClassName: s,
  className: c,
  wrapperClassName: u,
  multiple: f = !0,
  selectAll: m = !1,
  selectAllLabel: h = "Seleccionar todo",
  allSelectedLabel: g = "Todos los elementos seleccionados",
  summaryMaxItems: p = 3,
  enableSearch: v = !1,
  virtualizationThreshold: C = 10,
  virtualListHeight: b = 256,
  virtualItemHeight: x = 40
}) => {
  const [$, y] = M.useState(
    o ?? []
  ), [S, w] = M.useState(!1), [E, O] = M.useState(""), P = r !== void 0, N = P ? r : $;
  M.useEffect(() => {
    !P && o && y(o);
  }, [o, P]), M.useEffect(() => {
    !S && E && O("");
  }, [S, E]);
  const R = M.useMemo(
    () => n.filter((L) => !L.disabled).map((L) => L.key),
    [n]
  ), _ = M.useCallback(
    (L) => {
      let z;
      f ? z = N.includes(L) ? N.filter((H) => H !== L) : [...N, L] : (z = N.length === 1 && N[0] === L ? [] : [L], w(!1)), P || y(z), a?.(z);
    },
    [P, f, a, N]
  ), I = M.useCallback(() => {
    const z = R.length > 0 && R.every((H) => N.includes(H)) ? [] : R;
    P || y(z), a?.(z);
  }, [R, P, a, N]), k = M.useCallback(
    (L) => {
      f && f && (P || y((z) => z.filter((H) => H !== L)), a?.(N.filter((z) => z !== L)));
    },
    [P, f, a, N]
  ), A = M.useMemo(() => {
    if (!v || !E.trim())
      return n;
    const L = E.trim().toLowerCase();
    return n.filter(
      (z) => `${z.label} ${z.description ?? ""}`.toLowerCase().includes(L)
    );
  }, [v, n, E]), D = M.useCallback(
    (L) => /* @__PURE__ */ B(
      Dc,
      {
        label: L.label,
        description: L.description,
        checked: N.includes(L.key),
        disabled: L.disabled,
        onToggle: () => _(L.key)
      },
      L.key
    ),
    [N, _]
  ), F = A.length > C && A.length > 0, q = R.length > 0 && R.every((L) => N.includes(L)), K = !q && N.some((L) => R.includes(L)), Q = M.useMemo(() => {
    if (N.length === 0)
      return /* @__PURE__ */ B("span", { className: "luca-text-sm luca-font-medium luca-text-neutral-500", children: t });
    if (!f) {
      const V = N[0], te = n.find((Y) => Y.key === V)?.label ?? t;
      return /* @__PURE__ */ B(
        $o,
        {
          bordered: !1,
          className: "luca-m-0 luca-bg-primary-50 luca-text-primary-600 luca-rounded-full luca-px-2 luca-py-0.5 luca-text-xs luca-font-semibold luca-leading-5",
          children: te
        },
        V
      );
    }
    if (m && R.length > 0 && R.every((V) => N.includes(V)))
      return /* @__PURE__ */ B(
        $o,
        {
          bordered: !1,
          closable: !0,
          onClose: (V) => {
            V.preventDefault(), I();
          },
          className: "luca-m-0 luca-bg-primary-50 luca-text-primary-600 luca-rounded-full luca-px-2 luca-py-0.5 luca-text-xs luca-font-semibold luca-leading-5",
          closeIcon: /* @__PURE__ */ B("span", { className: "luca-ml-1 luca-text-primary-600 luca-font-bold", children: "×" }),
          children: g
        }
      );
    const L = n.filter(
      (V) => N.includes(V.key)
    );
    if (L.length <= p)
      return L.map((V) => /* @__PURE__ */ B(
        $o,
        {
          bordered: !1,
          closable: !0,
          onClose: (te) => {
            te.preventDefault(), k(V.key);
          },
          closeIcon: /* @__PURE__ */ B("span", { className: "luca-ml-1 luca-text-primary-600 luca-font-bold", children: "×" }),
          className: "luca-m-0 luca-bg-primary-50 luca-text-primary-600 luca-rounded-full luca-px-2 luca-py-0.5 luca-text-xs luca-font-semibold luca-leading-5",
          children: V.label
        },
        V.key
      ));
    const z = L.slice(0, p).map((V) => /* @__PURE__ */ B(
      $o,
      {
        bordered: !1,
        closable: !0,
        onClose: (te) => {
          te.preventDefault(), k(V.key);
        },
        closeIcon: /* @__PURE__ */ B("span", { className: "luca-ml-1 luca-text-primary-600 luca-font-bold", children: "×" }),
        className: "luca-m-0 luca-bg-primary-50 luca-text-primary-600 luca-rounded-full luca-px-2 luca-py-0.5 luca-text-xs luca-font-semibold luca-leading-5",
        children: V.label
      },
      V.key
    )), H = L.length - p;
    return /* @__PURE__ */ je(ra, { children: [
      z,
      /* @__PURE__ */ je("span", { className: "luca-text-xs luca-font-medium luca-text-neutral-500 luca-leading-5", children: [
        "... y ",
        H,
        " más"
      ] })
    ] });
  }, [
    g,
    R,
    n,
    f,
    t,
    m,
    N,
    p,
    k,
    I
  ]), W = M.useMemo(() => {
    const L = /* @__PURE__ */ B(
      Tp,
      {
        data: A,
        height: b,
        itemHeight: x,
        itemKey: "key",
        children: (H) => D(H)
      }
    ), z = /* @__PURE__ */ B("div", { className: "luca-flex luca-flex-col luca-gap-1 luca-max-h-[320px] luca-overflow-y-auto luca-pr-1", children: A.map((H) => D(H)) });
    return /* @__PURE__ */ je("div", { className: "luca-flex luca-w-[min(320px,100vw)] luca-flex-col luca-gap-3 luca-rounded-xl luca-bg-white luca-p-2 luca-shadow-lg", children: [
      v && /* @__PURE__ */ B(
        Fr,
        {
          value: E,
          onChange: (H) => O(H.target.value),
          placeholder: "Buscar...",
          className: "luca-rounded-lg luca-border luca-border-neutral-200 luca-text-sm",
          allowClear: !0
        }
      ),
      /* @__PURE__ */ je("div", { className: "luca-flex luca-flex-col luca-gap-1", children: [
        f && m && R.length > 0 && /* @__PURE__ */ B(
          Dc,
          {
            label: h,
            checked: q,
            indeterminate: K,
            onToggle: I
          },
          "__select_all__"
        ),
        A.length === 0 ? /* @__PURE__ */ B("p", { className: "luca-p-3 luca-text-sm luca-text-neutral-400", children: "No se encontraron resultados" }) : F ? L : z
      ] })
    ] });
  }, [
    q,
    v,
    A,
    I,
    K,
    D,
    m,
    h,
    F,
    x,
    b,
    E,
    f,
    R.length
  ]);
  return /* @__PURE__ */ je(
    "div",
    {
      className: pe(
        "luca-flex luca-w-full luca-flex-col luca-gap-2",
        u
      ),
      children: [
        e && /* @__PURE__ */ B("label", { className: "luca-text-sm luca-font-medium luca-leading-6 luca-text-neutral-900", children: e }),
        /* @__PURE__ */ B(
          Ch,
          {
            trigger: ["click"],
            disabled: i,
            open: S,
            onOpenChange: w,
            menu: {
              items: []
            },
            dropdownRender: () => W,
            overlayClassName: pe("luca-dropdown-overlay", s),
            children: /* @__PURE__ */ je(
              "button",
              {
                type: "button",
                className: pe(
                  "luca-flex luca-w-full luca-items-start luca-justify-between luca-rounded-2xl luca-border luca-border-neutral-200 luca-bg-white luca-px-4 luca-py-2 luca-text-sm luca-font-medium luca-text-neutral-500 luca-transition-colors luca-duration-200",
                  "hover:luca-border-primary-100 hover:luca-text-primary-600",
                  "focus:luca-border-primary-200 focus:luca-text-primary-600 focus:luca-outline-none focus:luca-ring-2 focus:luca-ring-primary-200",
                  i && "luca-cursor-not-allowed luca-border-neutral-200 luca-bg-neutral-100 luca-text-neutral-400",
                  V3[l],
                  c
                ),
                disabled: i,
                "aria-haspopup": "listbox",
                "aria-expanded": S,
                children: [
                  /* @__PURE__ */ B("div", { className: "luca-flex luca-max-w-[calc(100%-1.75rem)] luca-flex-wrap luca-gap-1 luca-items-center luca-whitespace-normal luca-text-left", children: Q }),
                  /* @__PURE__ */ B(_3, { size: 16, className: "luca-text-primary-600" })
                ]
              }
            )
          }
        )
      ]
    }
  );
};
W3.displayName = "Dropdown";
const Dc = ({
  label: e,
  description: t,
  checked: n,
  disabled: r,
  onToggle: o,
  indeterminate: a = !1
}) => {
  const i = M.useCallback(
    (l) => {
      l.preventDefault(), l.stopPropagation(), r || o?.();
    },
    [r, o]
  );
  return /* @__PURE__ */ je(
    "button",
    {
      type: "button",
      role: "menuitemcheckbox",
      "aria-checked": n,
      disabled: r,
      onClick: i,
      className: pe(
        "luca-flex luca-w-full luca-items-center luca-gap-3 luca-rounded-xl luca-px-2 luca-py-1.5 luca-transition-colors luca-duration-150",
        n ? "luca-bg-primary-50" : "luca-bg-white",
        "hover:luca-bg-neutral-100 focus:luca-outline-none focus:luca-ring-2 focus:luca-ring-primary-100",
        r && "luca-cursor-not-allowed luca-opacity-70"
      ),
      children: [
        /* @__PURE__ */ B(
          "span",
          {
            className: pe(
              "luca-flex luca-h-6 luca-w-6 luca-items-center luca-justify-center luca-rounded-lg luca-border-2 luca-transition-colors luca-duration-150",
              n ? "luca-border-primary-500 luca-bg-primary-500 luca-text-white" : "luca-border-neutral-200 luca-bg-white luca-text-transparent"
            ),
            "aria-hidden": !0,
            children: n ? /* @__PURE__ */ B(A3, { size: 14 }) : a ? /* @__PURE__ */ B(c0, { size: 12 }) : null
          }
        ),
        /* @__PURE__ */ je("div", { className: "luca-flex luca-min-w-0 luca-flex-col luca-items-start luca-gap-0.5", children: [
          /* @__PURE__ */ B("span", { className: "luca-text-sm luca-font-medium luca-text-neutral-700 luca-truncate", children: e }),
          t && /* @__PURE__ */ B("span", { className: "luca-text-xs luca-font-normal luca-text-neutral-400 luca-truncate", children: t })
        ] })
      ]
    }
  );
};
Dc.displayName = "DropdownItem";
const G3 = M.forwardRef(
  ({
    illustrationSrc: e,
    illustrationAlt: t = "Estado vacío",
    title: n,
    description: r = "No hay registros disponibles en este momento.",
    footer: o,
    compact: a = !1,
    className: i,
    ...l
  }, s) => /* @__PURE__ */ B(
    Mh,
    {
      ref: s,
      align: "center",
      interactive: !1,
      className: pe(
        "luca-flex luca-min-h-[260px] luca-flex-col luca-items-center luca-justify-center luca-gap-4 luca-text-center luca-max-w-full",
        a && "luca-min-h-[200px]",
        i
      ),
      ...l,
      children: /* @__PURE__ */ je("div", { className: "luca-flex luca-flex-col luca-items-center luca-gap-3", children: [
        /* @__PURE__ */ B("div", { className: "luca-flex luca-h-[120px] luca-w-[120px] luca-items-center luca-justify-center luca-p-6", children: e ? /* @__PURE__ */ B(
          "img",
          {
            src: e,
            alt: t,
            className: "luca-max-h-full luca-max-w-full luca-object-contain luca-opacity-80",
            loading: "lazy"
          }
        ) : /* @__PURE__ */ B(j3, {}) }),
        /* @__PURE__ */ je("div", { className: "luca-flex luca-flex-col luca-items-center luca-gap-1", children: [
          n && /* @__PURE__ */ B("h3", { className: "luca-text-base luca-font-semibold luca-text-neutral-700", children: n }),
          r && /* @__PURE__ */ B("p", { className: "luca-max-w-[320px] luca-text-sm luca-font-normal luca-leading-6 luca-text-neutral-400", children: r })
        ] }),
        o && /* @__PURE__ */ B("div", { className: "luca-mt-2 luca-flex luca-items-center luca-justify-center", children: o })
      ] })
    }
  )
);
G3.displayName = "EmptyStateCard";
dn.config({
  theme: {
    token: {
      fontFamily: 'Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'
    }
  }
});
export {
  Y3 as Badge,
  Z3 as Breadcrumb,
  _h as Button,
  Ah as ButtonIcon,
  Mh as Card,
  IO as CardContent,
  RO as CardDescription,
  PO as CardHeader,
  Th as CardIcon,
  NO as CardTitle,
  $3 as Chips,
  W3 as Dropdown,
  Dc as DropdownItem,
  G3 as EmptyStateCard,
  z3 as InputField,
  Au as Layout,
  Fh as LayoutContent,
  jh as LayoutHeader,
  C3 as Modal,
  N3 as Notification,
  I3 as NotificationAction,
  R3 as NotificationActions,
  w3 as SearchBar,
  B3 as Selector,
  L3 as SelectorAction,
  D3 as SelectorDetail,
  k3 as SelectorLabel,
  LO as TabList,
  H3 as TextAreaField,
  M3 as Toast,
  Uu as Tooltip,
  pe as cn
};

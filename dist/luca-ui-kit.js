import j from "react";
var ae = { exports: {} }, B = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Se;
function pr() {
  if (Se) return B;
  Se = 1;
  var t = j, o = Symbol.for("react.element"), u = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, g = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, p, y) {
    var v, O = {}, k = null, D = null;
    y !== void 0 && (k = "" + y), p.key !== void 0 && (k = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (v in p) l.call(p, v) && !h.hasOwnProperty(v) && (O[v] = p[v]);
    if (_ && _.defaultProps) for (v in p = _.defaultProps, p) O[v] === void 0 && (O[v] = p[v]);
    return { $$typeof: o, type: _, key: k, ref: D, props: O, _owner: g.current };
  }
  return B.Fragment = u, B.jsx = S, B.jsxs = S, B;
}
var M = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function br() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var t = j, o = Symbol.for("react.element"), u = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), _ = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), d = Symbol.iterator, m = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = d && e[d] || e[m];
      return typeof r == "function" ? r : null;
    }
    var N = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          a[n - 1] = arguments[n];
        Ne("error", e, a);
      }
    }
    function Ne(e, r, a) {
      {
        var n = N.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", a = a.concat([s]));
        var f = a.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, $e = !1, Ye = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === h || Ye || e === g || e === y || e === v || $e || e === D || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === O || e.$$typeof === S || e.$$typeof === _ || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Le(e, r, a) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case u:
          return "Portal";
        case h:
          return "Profiler";
        case g:
          return "StrictMode";
        case y:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return ne(r) + ".Consumer";
          case S:
            var a = e;
            return ne(a._context) + ".Provider";
          case p:
            return Le(e, e.render, "ForwardRef");
          case O:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case k: {
            var s = e, f = s._payload, i = s._init;
            try {
              return A(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, L = 0, le, ue, ce, oe, ie, se, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ue() {
      {
        if (L === 0) {
          le = console.log, ue = console.info, ce = console.warn, oe = console.error, ie = console.group, se = console.groupCollapsed, fe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        L++;
      }
    }
    function Be() {
      {
        if (L--, L === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: le
            }),
            info: I({}, e, {
              value: ue
            }),
            warn: I({}, e, {
              value: ce
            }),
            error: I({}, e, {
              value: oe
            }),
            group: I({}, e, {
              value: ie
            }),
            groupCollapsed: I({}, e, {
              value: se
            }),
            groupEnd: I({}, e, {
              value: fe
            })
          });
        }
        L < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = N.ReactCurrentDispatcher, G;
    function V(e, r, a) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            G = n && n[1] || "";
          }
        return `
` + G + e;
      }
    }
    var H = !1, J;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Me();
    }
    function ve(e, r) {
      if (!e || H)
        return "";
      {
        var a = J.get(e);
        if (a !== void 0)
          return a;
      }
      var n;
      H = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, Ue();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (C) {
              n = C;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (C) {
            n = C;
          }
          e();
        }
      } catch (C) {
        if (C && n && typeof C.stack == "string") {
          for (var c = C.stack.split(`
`), w = n.stack.split(`
`), b = c.length - 1, x = w.length - 1; b >= 1 && x >= 0 && c[b] !== w[x]; )
            x--;
          for (; b >= 1 && x >= 0; b--, x--)
            if (c[b] !== w[x]) {
              if (b !== 1 || x !== 1)
                do
                  if (b--, x--, x < 0 || c[b] !== w[x]) {
                    var P = `
` + c[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, P), P;
                  }
                while (b >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = f, Be(), Error.prepareStackTrace = s;
      }
      var W = e ? e.displayName || e.name : "", $ = W ? V(W) : "";
      return typeof e == "function" && J.set(e, $), $;
    }
    function Ve(e, r, a) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Je(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case y:
          return V("Suspense");
        case v:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ve(e.render);
          case O:
            return K(e.type, r, a);
          case k: {
            var n = e, s = n._payload, f = n._init;
            try {
              return K(f(s), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, pe = {}, be = N.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, a = K(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(a);
      } else
        be.setExtraStackFrame(null);
    }
    function Ke(e, r, a, n, s) {
      {
        var f = Function.call.bind(U);
        for (var i in e)
          if (f(e, i)) {
            var c = void 0;
            try {
              if (typeof e[i] != "function") {
                var w = Error((n || "React class") + ": " + a + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              c = e[i](r, i, n, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              c = b;
            }
            c && !(c instanceof Error) && (q(s), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", a, i, typeof c), q(null)), c instanceof Error && !(c.message in pe) && (pe[c.message] = !0, q(s), E("Failed %s type: %s", a, c.message), q(null));
          }
      }
    }
    var qe = Array.isArray;
    function X(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ge(e) {
      try {
        return ge(e), !1;
      } catch {
        return !0;
      }
    }
    function ge(e) {
      return "" + e;
    }
    function xe(e) {
      if (Ge(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ge(e);
    }
    var ye = N.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, he, _e;
    function Xe(e) {
      if (U.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (U.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, r) {
      typeof e.ref == "string" && ye.current;
    }
    function er(e, r) {
      {
        var a = function() {
          he || (he = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var a = function() {
          _e || (_e = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, a, n, s, f, i) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, r, a, n, s) {
      {
        var f, i = {}, c = null, w = null;
        a !== void 0 && (xe(a), c = "" + a), Ze(r) && (xe(r.key), c = "" + r.key), Xe(r) && (w = r.ref, Qe(r, s));
        for (f in r)
          U.call(r, f) && !He.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (f in b)
            i[f] === void 0 && (i[f] = b[f]);
        }
        if (c || w) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && er(i, x), w && rr(i, x);
        }
        return ar(e, c, w, s, n, ye.current, i);
      }
    }
    var Z = N.ReactCurrentOwner, me = N.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, a = K(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(a);
      } else
        me.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function Re() {
      {
        if (Z.current) {
          var e = A(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function nr(e) {
      return "";
    }
    var Ee = {};
    function lr(e) {
      {
        var r = Re();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = lr(r);
        if (Ee[a])
          return;
        Ee[a] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + A(e._owner.type) + "."), Y(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, n), Y(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var a = 0; a < e.length; a++) {
            var n = e[a];
            ee(n) && we(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = F(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), i; !(i = f.next()).done; )
              ee(i.value) && we(i.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          a = r.propTypes;
        else
          return;
        if (a) {
          var n = A(r);
          Ke(a, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var s = A(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var n = r[a];
          if (n !== "children" && n !== "key") {
            Y(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Te = {};
    function Ce(e, r, a, n, s, f) {
      {
        var i = We(e);
        if (!i) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = nr();
          w ? c += w : c += Re();
          var b;
          e === null ? b = "null" : X(e) ? b = "array" : e !== void 0 && e.$$typeof === o ? (b = "<" + (A(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, c);
        }
        var x = tr(e, r, a, s, f);
        if (x == null)
          return x;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (X(P)) {
                for (var W = 0; W < P.length; W++)
                  je(P[W], e);
                Object.freeze && Object.freeze(P);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(P, e);
        }
        if (U.call(r, "key")) {
          var $ = A(e), C = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), re = C.length > 0 ? "{key: someKey, " + C.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[$ + re]) {
            var dr = C.length > 0 ? "{" + C.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, $, dr, $), Te[$ + re] = !0;
          }
        }
        return e === l ? cr(x) : ur(x), x;
      }
    }
    function or(e, r, a) {
      return Ce(e, r, a, !0);
    }
    function ir(e, r, a) {
      return Ce(e, r, a, !1);
    }
    var sr = ir, fr = or;
    M.Fragment = l, M.jsx = sr, M.jsxs = fr;
  }()), M;
}
process.env.NODE_ENV === "production" ? ae.exports = pr() : ae.exports = br();
var R = ae.exports;
function Pe(t) {
  var o, u, l = "";
  if (typeof t == "string" || typeof t == "number") l += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var g = t.length;
    for (o = 0; o < g; o++) t[o] && (u = Pe(t[o])) && (l && (l += " "), l += u);
  } else for (u in t) t[u] && (l && (l += " "), l += u);
  return l;
}
function gr() {
  for (var t, o, u = 0, l = "", g = arguments.length; u < g; u++) (t = arguments[u]) && (o = Pe(t)) && (l && (l += " "), l += o);
  return l;
}
function T(...t) {
  return gr(t);
}
const xr = {
  default: "luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full",
  hover: "luca-bg-[rgba(237,245,255,0.5)] luca-border-[var(--borders-hover,#c5daff)] luca-text-[#3843d0] luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] luca-cursor-pointer luca-w-full"
}, yr = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, hr = "luca-hover:-translate-y-0.5 luca-hover:bg-[rgba(237,245,255,0.5)] luca-hover:border-[var(--borders-hover,#c5daff)] luca-hover:text-[#3843d0] luca-hover:shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] luca-hover:cursor-pointer luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-focus-visible:outline-[#3843d0]", _r = j.forwardRef(
  ({
    variant: t = "default",
    align: o = "center",
    interactive: u = !0,
    className: l,
    icon: g,
    iconSrc: h,
    iconAlt: S,
    iconSize: _ = "lg",
    iconBackground: p = !1,
    iconClassName: y,
    children: v,
    ...O
  }, k) => {
    const D = !!(g ?? h), d = () => {
      if (!D) return null;
      const m = g ?? (h ? /* @__PURE__ */ R.jsx(
        "img",
        {
          src: h,
          alt: S ?? "Card icon",
          className: "luca-h-full luca-w-full luca-object-contain"
        }
      ) : null);
      return /* @__PURE__ */ R.jsx(
        De,
        {
          size: _,
          background: p,
          className: y,
          children: m
        }
      );
    };
    return /* @__PURE__ */ R.jsxs(
      "div",
      {
        ref: k,
        "data-card-variant": t,
        "data-card-align": o,
        className: T(
          "luca-group/card luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm",
          xr[t],
          yr[o],
          u ? t === "default" ? hr : "luca-cursor-pointer" : "luca-cursor-default",
          t === "hover" && "luca-border luca-border-[var(--borders-hover,#c5daff)]",
          l
        ),
        ...O,
        children: [
          d(),
          v
        ]
      }
    );
  }
);
_r.displayName = "Card";
const mr = j.forwardRef(
  ({ className: t, children: o, ...u }, l) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: l,
      className: T(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        "luca-items-center luca-text-center",
        "luca-group-data-[card-align=start]/card:luca-items-start luca-group-data-[card-align=start]/card:luca-text-left",
        t
      ),
      ...u,
      children: o
    }
  )
);
mr.displayName = "CardHeader";
const Rr = j.forwardRef(
  ({ className: t, children: o, ...u }, l) => /* @__PURE__ */ R.jsx(
    "h3",
    {
      ref: l,
      className: T(
        "luca-text-base luca-font-semibold luca-leading-tight luca-tracking-tight luca-text-gray-900 luca-transition-colors luca-duration-200",
        "luca-group-hover/card:luca-text-[#3843d0]",
        "luca-group-data-[card-variant=hover]/card:luca-text-[#3843d0]",
        t
      ),
      ...u,
      children: o
    }
  )
);
Rr.displayName = "CardTitle";
const Er = j.forwardRef(({ className: t, children: o, ...u }, l) => /* @__PURE__ */ R.jsx(
  "p",
  {
    ref: l,
    className: T(
      "luca-text-sm luca-leading-relaxed luca-text-gray-500 luca-transition-colors luca-duration-200 luca-whitespace-pre-line",
      "luca-group-data-[card-align=center]/card:luca-text-center luca-group-data-[card-align=start]/card:luca-text-left",
      "luca-group-hover/card:luca-text-[#3843d0]",
      "luca-group-data-[card-variant=hover]/card:luca-text-[#3843d0]",
      t
    ),
    ...u,
    children: o
  }
));
Er.displayName = "CardDescription";
const wr = j.forwardRef(
  ({ className: t, children: o, ...u }, l) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: l,
      className: T(
        "luca-w-full luca-text-sm luca-text-gray-600",
        "luca-group-data-[card-align=center]/card:luca-text-center luca-group-data-[card-align=start]/card:luca-text-left",
        "luca-group-hover/card:luca-text-[#3843d0]",
        "luca-group-data-[card-variant=hover]/card:luca-text-[#3843d0]",
        t
      ),
      ...u,
      children: o
    }
  )
);
wr.displayName = "CardContent";
const jr = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, De = j.forwardRef(
  ({ className: t, children: o, size: u = "lg", background: l = !1, ...g }, h) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: h,
      className: T(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden luca-text-[#3843d0] luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        jr[u],
        l && T(
          u === "md" ? "luca-rounded-xl" : "luca-rounded-2xl",
          "luca-bg-[rgba(56,67,208,0.08)]"
        ),
        "luca-group-hover/card:luca-scale-[1.02]",
        t
      ),
      ...g,
      children: o
    }
  )
);
De.displayName = "CardIcon";
const Tr = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-disabled:cursor-not-allowed", Cr = {
  primary: {
    default: T(
      "luca-bg-[#ffba31] luca-text-gray-900 luca-shadow-[0px_4px_0px_0px_#f58f00]",
      "luca-hover:bg-[#f58f00] luca-hover:shadow-[0px_4px_0px_0px_#d0780f]",
      "luca-active:bg-[#ffba31]",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:shadow-[0px_4px_0px_0px_#adadad]",
      "luca-focus-visible:outline-[#ffba31]"
    ),
    alert: T(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "luca-hover:bg-red-50",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-red-500"
    )
  },
  secondary: {
    default: T(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200",
      "luca-hover:border-[#c5daff] luca-hover:text-[#3843d0]",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-[#3843d0]"
    ),
    alert: T(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "luca-hover:bg-red-50",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-red-500"
    )
  }
}, Sr = j.forwardRef(
  ({
    variant: t = "primary",
    state: o = "default",
    leftIcon: u,
    rightIcon: l,
    className: g,
    children: h,
    disabled: S,
    type: _ = "button",
    ...p
  }, y) => /* @__PURE__ */ R.jsxs(
    "button",
    {
      ref: y,
      type: _,
      disabled: S,
      className: T(
        Tr,
        Cr[t][o],
        g
      ),
      ...p,
      children: [
        u && /* @__PURE__ */ R.jsx("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: u }),
        /* @__PURE__ */ R.jsx("span", { className: "luca-leading-tight", children: h }),
        l && /* @__PURE__ */ R.jsx("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: l })
      ]
    }
  )
);
Sr.displayName = "Button";
const ke = {
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
}, Or = j.forwardRef(
  ({
    state: t = "default",
    outline: o = "default",
    icon: u,
    className: l,
    disabled: g,
    ...h
  }, S) => {
    const _ = t === "disabled" || g;
    return /* @__PURE__ */ R.jsx(
      "button",
      {
        ref: S,
        disabled: _,
        className: T(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          ke.state[t],
          ke.outline[o],
          // Hover styles solo si no está disabled
          !_ && "luca-hover:bg-[#edf5ff] luca-hover:text-[#3843d0]",
          l
        ),
        ...h,
        children: /* @__PURE__ */ R.jsx("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: u })
      }
    );
  }
);
Or.displayName = "ButtonIcon";
const kr = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", Pr = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-focus-visible:outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", Dr = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", Nr = "luca-hover:text-[#3843d0] luca-focus-visible:outline-[#3843d0]", Ar = "luca-cursor-not-allowed luca-text-gray-400 luca-hover:text-gray-400 luca-focus-visible:outline-none luca-opacity-60", Fr = j.forwardRef(
  ({
    items: t,
    value: o,
    defaultValue: u,
    onValueChange: l,
    fullWidth: g = !1,
    ariaLabel: h,
    className: S,
    ..._
  }, p) => {
    const y = o !== void 0, v = j.useMemo(
      () => {
        var d;
        return (d = t.find((m) => !m.disabled)) == null ? void 0 : d.key;
      },
      [t]
    ), [O, k] = j.useState(() => u !== void 0 ? u : v);
    j.useEffect(() => {
      if (y || u === void 0) return;
      const d = t.some(
        (m) => m.key === u && !m.disabled
      );
      k(d ? u : v);
    }, [u, v, y, t]), j.useEffect(() => {
      y || k((d) => d && t.some((m) => m.key === d && !m.disabled) ? d : v ?? d);
    }, [v, t, y]);
    const D = y ? o : O;
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: p,
        role: "tablist",
        "aria-label": h,
        className: T(kr, g && "luca-w-full", S),
        ..._,
        children: t.map((d) => {
          const m = d.key === D, F = !!d.disabled, N = m || !D && d.key === v ? 0 : -1;
          return /* @__PURE__ */ R.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": m,
              "aria-disabled": F,
              disabled: F,
              tabIndex: N,
              "data-selected": m || void 0,
              "data-disabled": F || void 0,
              "data-value": d.key,
              className: T(
                Pr,
                g ? "luca-flex-1" : "luca-min-w-[88px]",
                m ? Dr : Nr,
                F && Ar
              ),
              onClick: () => {
                F || (y || k(d.key), l == null || l(d.key));
              },
              children: d.label
            },
            d.key
          );
        })
      }
    );
  }
);
Fr.displayName = "TabList";
export {
  Sr as Button,
  Or as ButtonIcon,
  _r as Card,
  wr as CardContent,
  Er as CardDescription,
  mr as CardHeader,
  De as CardIcon,
  Rr as CardTitle,
  Fr as TabList,
  T as cn
};

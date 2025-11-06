import j from "react";
var te = { exports: {} }, B = {};
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
  var a = j, l = Symbol.for("react.element"), i = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, g = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, h = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(_, p, y) {
    var v, O = {}, k = null, D = null;
    y !== void 0 && (k = "" + y), p.key !== void 0 && (k = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (v in p) o.call(p, v) && !h.hasOwnProperty(v) && (O[v] = p[v]);
    if (_ && _.defaultProps) for (v in p = _.defaultProps, p) O[v] === void 0 && (O[v] = p[v]);
    return { $$typeof: l, type: _, key: k, ref: D, props: O, _owner: g.current };
  }
  return B.Fragment = i, B.jsx = S, B.jsxs = S, B;
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
    var a = j, l = Symbol.for("react.element"), i = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), g = Symbol.for("react.strict_mode"), h = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), _ = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), d = Symbol.iterator, m = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = d && e[d] || e[m];
      return typeof r == "function" ? r : null;
    }
    var N = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Ne("error", e, t);
      }
    }
    function Ne(e, r, t) {
      {
        var n = N.ReactDebugCurrentFrame, c = n.getStackAddendum();
        c !== "" && (r += "%s", t = t.concat([c]));
        var f = t.map(function(u) {
          return String(u);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, $e = !1, Ye = !1, ae;
    ae = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === h || Ye || e === g || e === y || e === v || $e || e === D || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === O || e.$$typeof === S || e.$$typeof === _ || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var c = r.displayName || r.name || "";
      return c !== "" ? t + "(" + c + ")" : t;
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
        case o:
          return "Fragment";
        case i:
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
            var t = e;
            return ne(t._context) + ".Provider";
          case p:
            return Le(e, e.render, "ForwardRef");
          case O:
            var n = e.displayName || null;
            return n !== null ? n : A(e.type) || "Memo";
          case k: {
            var c = e, f = c._payload, u = c._init;
            try {
              return A(u(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, L = 0, oe, ie, se, le, ue, ce, fe;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ue() {
      {
        if (L === 0) {
          oe = console.log, ie = console.info, se = console.warn, le = console.error, ue = console.group, ce = console.groupCollapsed, fe = console.groupEnd;
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
              value: oe
            }),
            info: I({}, e, {
              value: ie
            }),
            warn: I({}, e, {
              value: se
            }),
            error: I({}, e, {
              value: le
            }),
            group: I({}, e, {
              value: ue
            }),
            groupCollapsed: I({}, e, {
              value: ce
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
    function V(e, r, t) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (c) {
            var n = c.stack.trim().match(/\n( *(at )?)/);
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
        var t = J.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      H = !0;
      var c = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, Ue();
      try {
        if (r) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (C) {
              n = C;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (C) {
              n = C;
            }
            e.call(u.prototype);
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
          for (var s = C.stack.split(`
`), w = n.stack.split(`
`), b = s.length - 1, x = w.length - 1; b >= 1 && x >= 0 && s[b] !== w[x]; )
            x--;
          for (; b >= 1 && x >= 0; b--, x--)
            if (s[b] !== w[x]) {
              if (b !== 1 || x !== 1)
                do
                  if (b--, x--, x < 0 || s[b] !== w[x]) {
                    var P = `
` + s[b].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, P), P;
                  }
                while (b >= 1 && x >= 0);
              break;
            }
        }
      } finally {
        H = !1, z.current = f, Be(), Error.prepareStackTrace = c;
      }
      var W = e ? e.displayName || e.name : "", $ = W ? V(W) : "";
      return typeof e == "function" && J.set(e, $), $;
    }
    function Ve(e, r, t) {
      return ve(e, !1);
    }
    function Je(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, t) {
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
            return K(e.type, r, t);
          case k: {
            var n = e, c = n._payload, f = n._init;
            try {
              return K(f(c), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var U = Object.prototype.hasOwnProperty, pe = {}, be = N.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Ke(e, r, t, n, c) {
      {
        var f = Function.call.bind(U);
        for (var u in e)
          if (f(e, u)) {
            var s = void 0;
            try {
              if (typeof e[u] != "function") {
                var w = Error((n || "React class") + ": " + t + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              s = e[u](r, u, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              s = b;
            }
            s && !(s instanceof Error) && (q(c), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, u, typeof s), q(null)), s instanceof Error && !(s.message in pe) && (pe[s.message] = !0, q(c), E("Failed %s type: %s", t, s.message), q(null));
          }
      }
    }
    var qe = Array.isArray;
    function X(e) {
      return qe(e);
    }
    function ze(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
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
        var t = function() {
          he || (he = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          _e || (_e = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, n, c, f, u) {
      var s = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: l,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: u,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return s._store = {}, Object.defineProperty(s._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(s, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(s, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: c
      }), Object.freeze && (Object.freeze(s.props), Object.freeze(s)), s;
    };
    function ar(e, r, t, n, c) {
      {
        var f, u = {}, s = null, w = null;
        t !== void 0 && (xe(t), s = "" + t), Ze(r) && (xe(r.key), s = "" + r.key), Xe(r) && (w = r.ref, Qe(r, c));
        for (f in r)
          U.call(r, f) && !He.hasOwnProperty(f) && (u[f] = r[f]);
        if (e && e.defaultProps) {
          var b = e.defaultProps;
          for (f in b)
            u[f] === void 0 && (u[f] = b[f]);
        }
        if (s || w) {
          var x = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          s && er(u, x), w && rr(u, x);
        }
        return tr(e, s, w, c, n, ye.current, u);
      }
    }
    var Z = N.ReactCurrentOwner, me = N.ReactDebugCurrentFrame;
    function Y(e) {
      if (e) {
        var r = e._owner, t = K(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === l;
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
    function or(e) {
      {
        var r = Re();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function we(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (Ee[t])
          return;
        Ee[t] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + A(e._owner.type) + "."), Y(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), Y(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            ee(n) && we(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var c = F(e);
          if (typeof c == "function" && c !== e.entries)
            for (var f = c.call(e), u; !(u = f.next()).done; )
              ee(u.value) && we(u.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = A(r);
          Ke(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var c = A(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", c || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            Y(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Te = {};
    function Ce(e, r, t, n, c, f) {
      {
        var u = We(e);
        if (!u) {
          var s = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (s += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = nr();
          w ? s += w : s += Re();
          var b;
          e === null ? b = "null" : X(e) ? b = "array" : e !== void 0 && e.$$typeof === l ? (b = "<" + (A(e.type) || "Unknown") + " />", s = " Did you accidentally export a JSX literal instead of a component?") : b = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", b, s);
        }
        var x = ar(e, r, t, c, f);
        if (x == null)
          return x;
        if (u) {
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
        return e === o ? sr(x) : ir(x), x;
      }
    }
    function lr(e, r, t) {
      return Ce(e, r, t, !0);
    }
    function ur(e, r, t) {
      return Ce(e, r, t, !1);
    }
    var cr = ur, fr = lr;
    M.Fragment = o, M.jsx = cr, M.jsxs = fr;
  }()), M;
}
process.env.NODE_ENV === "production" ? te.exports = pr() : te.exports = br();
var R = te.exports;
function Pe(a) {
  var l, i, o = "";
  if (typeof a == "string" || typeof a == "number") o += a;
  else if (typeof a == "object") if (Array.isArray(a)) {
    var g = a.length;
    for (l = 0; l < g; l++) a[l] && (i = Pe(a[l])) && (o && (o += " "), o += i);
  } else for (i in a) a[i] && (o && (o += " "), o += i);
  return o;
}
function gr() {
  for (var a, l, i = 0, o = "", g = arguments.length; i < g; i++) (a = arguments[i]) && (l = Pe(a)) && (o && (o += " "), o += l);
  return o;
}
function T(...a) {
  return gr(a);
}
const xr = {
  default: "bg-white/80 shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] w-full",
  hover: "bg-[rgba(237,245,255,0.5)] border-[var(--borders-hover,#c5daff)] text-[#3843d0] shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] cursor-pointer w-full"
}, yr = {
  center: "items-center text-center",
  start: "items-start text-left"
}, hr = "hover:-translate-y-0.5 hover:bg-[rgba(237,245,255,0.5)] hover:border-[var(--borders-hover,#c5daff)] hover:text-[#3843d0] hover:shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:cursor-pointer focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3843d0]", _r = j.forwardRef(
  ({
    variant: a = "default",
    align: l = "center",
    interactive: i = !0,
    className: o,
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
          className: "h-full w-full object-contain"
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
        "data-card-variant": a,
        "data-card-align": l,
        className: T(
          "group/card relative flex w-full flex-col gap-4 rounded-2xl border border-transparent px-6 py-8 transition-all duration-200 backdrop-blur-sm",
          xr[a],
          yr[l],
          i ? a === "default" ? hr : "cursor-pointer" : "cursor-default",
          a === "hover" && "border border-[var(--borders-hover,#c5daff)]",
          o
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
  ({ className: a, children: l, ...i }, o) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: o,
      className: T(
        "flex w-full flex-col gap-3",
        "items-center text-center",
        "group-data-[card-align=start]/card:items-start group-data-[card-align=start]/card:text-left",
        a
      ),
      ...i,
      children: l
    }
  )
);
mr.displayName = "CardHeader";
const Rr = j.forwardRef(
  ({ className: a, children: l, ...i }, o) => /* @__PURE__ */ R.jsx(
    "h3",
    {
      ref: o,
      className: T(
        "text-base font-semibold leading-tight tracking-tight text-gray-900 transition-colors duration-200",
        "group-hover/card:text-[#3843d0]",
        "group-data-[card-variant=hover]/card:text-[#3843d0]",
        a
      ),
      ...i,
      children: l
    }
  )
);
Rr.displayName = "CardTitle";
const Er = j.forwardRef(({ className: a, children: l, ...i }, o) => /* @__PURE__ */ R.jsx(
  "p",
  {
    ref: o,
    className: T(
      "text-sm leading-relaxed text-gray-500 transition-colors duration-200 whitespace-pre-line",
      "group-data-[card-align=center]/card:text-center group-data-[card-align=start]/card:text-left",
      "group-hover/card:text-[#3843d0]",
      "group-data-[card-variant=hover]/card:text-[#3843d0]",
      a
    ),
    ...i,
    children: l
  }
));
Er.displayName = "CardDescription";
const wr = j.forwardRef(
  ({ className: a, children: l, ...i }, o) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: o,
      className: T(
        "w-full text-sm text-gray-600",
        "group-data-[card-align=center]/card:text-center group-data-[card-align=start]/card:text-left",
        "group-hover/card:text-[#3843d0]",
        "group-data-[card-variant=hover]/card:text-[#3843d0]",
        a
      ),
      ...i,
      children: l
    }
  )
);
wr.displayName = "CardContent";
const jr = {
  md: "h-12 w-12",
  lg: "h-16 w-16"
}, De = j.forwardRef(
  ({ className: a, children: l, size: i = "lg", background: o = !1, ...g }, h) => /* @__PURE__ */ R.jsx(
    "div",
    {
      ref: h,
      className: T(
        "flex items-center justify-center overflow-hidden text-[#3843d0] transition-transform duration-200",
        "rounded-none",
        jr[i],
        o && T(
          i === "md" ? "rounded-xl" : "rounded-2xl",
          "bg-[rgba(56,67,208,0.08)]"
        ),
        "group-hover/card:scale-[1.02]",
        a
      ),
      ...g,
      children: l
    }
  )
);
De.displayName = "CardIcon";
const Tr = "inline-flex items-center justify-center gap-2.5 h-9 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed", Cr = {
  primary: {
    default: T(
      "bg-[#ffba31] text-gray-900 shadow-[0px_4px_0px_0px_#f58f00]",
      "hover:bg-[#f58f00] hover:shadow-[0px_4px_0px_0px_#d0780f]",
      "active:bg-[#ffba31]",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:shadow-[0px_4px_0px_0px_#adadad]",
      "focus-visible:outline-[#ffba31]"
    ),
    alert: T(
      "bg-white text-red-500 border border-red-400",
      "hover:bg-red-50",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300",
      "focus-visible:outline-red-500"
    )
  },
  secondary: {
    default: T(
      "bg-white text-gray-900 border border-gray-200",
      "hover:border-[#c5daff] hover:text-[#3843d0]",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300",
      "focus-visible:outline-[#3843d0]"
    ),
    alert: T(
      "bg-white text-red-500 border border-red-400",
      "hover:bg-red-50",
      "disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-300",
      "focus-visible:outline-red-500"
    )
  }
}, Sr = j.forwardRef(
  ({
    variant: a = "primary",
    state: l = "default",
    leftIcon: i,
    rightIcon: o,
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
        Cr[a][l],
        g
      ),
      ...p,
      children: [
        i && /* @__PURE__ */ R.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 shrink-0", children: i }),
        /* @__PURE__ */ R.jsx("span", { className: "leading-tight", children: h }),
        o && /* @__PURE__ */ R.jsx("span", { className: "inline-flex items-center justify-center w-6 h-6 shrink-0", children: o })
      ]
    }
  )
);
Sr.displayName = "Button";
const ke = {
  state: {
    default: "bg-white border-[#e5e7eb] text-[#3843d0]",
    hover: "bg-[#edf5ff] border-[#e5e7eb] text-[#3843d0]",
    selected: "bg-[#3843d0] border-[#3843d0] text-white",
    disabled: "bg-[#f3f4f6] border-[#e5e7eb] text-[#9ca3af] cursor-not-allowed"
  },
  outline: {
    default: "rounded-lg",
    rounded: "rounded-full"
  }
}, Or = j.forwardRef(
  ({
    state: a = "default",
    outline: l = "default",
    icon: i,
    className: o,
    disabled: g,
    ...h
  }, S) => {
    const _ = a === "disabled" || g;
    return /* @__PURE__ */ R.jsx(
      "button",
      {
        ref: S,
        disabled: _,
        className: T(
          "flex items-center justify-center w-8 h-8 p-1 border transition-all duration-200",
          ke.state[a],
          ke.outline[l],
          // Hover styles solo si no está disabled
          !_ && "hover:bg-[#edf5ff] hover:text-[#3843d0]",
          o
        ),
        ...h,
        children: /* @__PURE__ */ R.jsx("span", { className: "w-4 h-4 flex items-center justify-center", children: i })
      }
    );
  }
);
Or.displayName = "ButtonIcon";
const kr = "inline-flex items-center gap-1 rounded-[14px] bg-[#ececf0] p-1 text-sm font-medium text-gray-900", Pr = "inline-flex items-center justify-center rounded-[12px] px-[9px] py-[5px] transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3843d0] tracking-[-0.010em] text-[#111827]", Dr = "bg-[#fdc700] text-[#111827] shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", Nr = "hover:text-[#3843d0] focus-visible:outline-[#3843d0]", Ar = "cursor-not-allowed text-gray-400 hover:text-gray-400 focus-visible:outline-none opacity-60", Fr = j.forwardRef(
  ({
    items: a,
    value: l,
    defaultValue: i,
    onValueChange: o,
    fullWidth: g = !1,
    ariaLabel: h,
    className: S,
    ..._
  }, p) => {
    const y = l !== void 0, v = j.useMemo(
      () => {
        var d;
        return (d = a.find((m) => !m.disabled)) == null ? void 0 : d.key;
      },
      [a]
    ), [O, k] = j.useState(() => i !== void 0 ? i : v);
    j.useEffect(() => {
      if (y || i === void 0) return;
      const d = a.some(
        (m) => m.key === i && !m.disabled
      );
      k(d ? i : v);
    }, [i, v, y, a]), j.useEffect(() => {
      y || k((d) => d && a.some((m) => m.key === d && !m.disabled) ? d : v ?? d);
    }, [v, a, y]);
    const D = y ? l : O;
    return /* @__PURE__ */ R.jsx(
      "div",
      {
        ref: p,
        role: "tablist",
        "aria-label": h,
        className: T(kr, g && "w-full", S),
        ..._,
        children: a.map((d) => {
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
                g ? "flex-1" : "min-w-[88px]",
                m ? Dr : Nr,
                F && Ar
              ),
              onClick: () => {
                F || (y || k(d.key), o == null || o(d.key));
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

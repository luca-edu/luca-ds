import E from "react";
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
  var n = E, i = Symbol.for("react.element"), u = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, v = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, k = { key: !0, ref: !0, __self: !0, __source: !0 };
  function C(h, p, x) {
    var d, S = {}, O = null, D = null;
    x !== void 0 && (O = "" + x), p.key !== void 0 && (O = "" + p.key), p.ref !== void 0 && (D = p.ref);
    for (d in p) l.call(p, d) && !k.hasOwnProperty(d) && (S[d] = p[d]);
    if (h && h.defaultProps) for (d in p = h.defaultProps, p) S[d] === void 0 && (S[d] = p[d]);
    return { $$typeof: i, type: h, key: O, ref: D, props: S, _owner: v.current };
  }
  return B.Fragment = u, B.jsx = C, B.jsxs = C, B;
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
    var n = E, i = Symbol.for("react.element"), u = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), v = Symbol.for("react.strict_mode"), k = Symbol.for("react.profiler"), C = Symbol.for("react.provider"), h = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), D = Symbol.for("react.offscreen"), b = Symbol.iterator, w = "@@iterator";
    function F(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = b && e[b] || e[w];
      return typeof r == "function" ? r : null;
    }
    var N = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function m(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), t = 1; t < r; t++)
          a[t - 1] = arguments[t];
        Ne("error", e, a);
      }
    }
    function Ne(e, r, a) {
      {
        var t = N.ReactDebugCurrentFrame, s = t.getStackAddendum();
        s !== "" && (r += "%s", a = a.concat([s]));
        var f = a.map(function(o) {
          return String(o);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Ae = !1, Fe = !1, Ie = !1, $e = !1, Ye = !1, te;
    te = Symbol.for("react.module.reference");
    function We(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === k || Ye || e === v || e === x || e === d || $e || e === D || Ae || Fe || Ie || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === S || e.$$typeof === C || e.$$typeof === h || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Le(e, r, a) {
      var t = e.displayName;
      if (t)
        return t;
      var s = r.displayName || r.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function ne(e) {
      return e.displayName || "Context";
    }
    function A(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && m("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case l:
          return "Fragment";
        case u:
          return "Portal";
        case k:
          return "Profiler";
        case v:
          return "StrictMode";
        case x:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case h:
            var r = e;
            return ne(r) + ".Consumer";
          case C:
            var a = e;
            return ne(a._context) + ".Provider";
          case p:
            return Le(e, e.render, "ForwardRef");
          case S:
            var t = e.displayName || null;
            return t !== null ? t : A(e.type) || "Memo";
          case O: {
            var s = e, f = s._payload, o = s._init;
            try {
              return A(o(f));
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
        L < 0 && m("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var z = N.ReactCurrentDispatcher, G;
    function V(e, r, a) {
      {
        if (G === void 0)
          try {
            throw Error();
          } catch (s) {
            var t = s.stack.trim().match(/\n( *(at )?)/);
            G = t && t[1] || "";
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
      var t;
      H = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = z.current, z.current = null, Ue();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (j) {
              t = j;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (j) {
              t = j;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (j) {
            t = j;
          }
          e();
        }
      } catch (j) {
        if (j && t && typeof j.stack == "string") {
          for (var c = j.stack.split(`
`), R = t.stack.split(`
`), g = c.length - 1, y = R.length - 1; g >= 1 && y >= 0 && c[g] !== R[y]; )
            y--;
          for (; g >= 1 && y >= 0; g--, y--)
            if (c[g] !== R[y]) {
              if (g !== 1 || y !== 1)
                do
                  if (g--, y--, y < 0 || c[g] !== R[y]) {
                    var P = `
` + c[g].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, P), P;
                  }
                while (g >= 1 && y >= 0);
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
        case x:
          return V("Suspense");
        case d:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Ve(e.render);
          case S:
            return K(e.type, r, a);
          case O: {
            var t = e, s = t._payload, f = t._init;
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
    function Ke(e, r, a, t, s) {
      {
        var f = Function.call.bind(U);
        for (var o in e)
          if (f(e, o)) {
            var c = void 0;
            try {
              if (typeof e[o] != "function") {
                var R = Error((t || "React class") + ": " + a + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw R.name = "Invariant Violation", R;
              }
              c = e[o](r, o, t, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (g) {
              c = g;
            }
            c && !(c instanceof Error) && (q(s), m("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", t || "React class", a, o, typeof c), q(null)), c instanceof Error && !(c.message in pe) && (pe[c.message] = !0, q(s), m("Failed %s type: %s", a, c.message), q(null));
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
    function ye(e) {
      if (Ge(e))
        return m("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ge(e);
    }
    var xe = N.ReactCurrentOwner, He = {
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
      typeof e.ref == "string" && xe.current;
    }
    function er(e, r) {
      {
        var a = function() {
          he || (he = !0, m("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
          _e || (_e = !0, m("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, a, t, s, f, o) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: o,
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
        value: t
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function tr(e, r, a, t, s) {
      {
        var f, o = {}, c = null, R = null;
        a !== void 0 && (ye(a), c = "" + a), Ze(r) && (ye(r.key), c = "" + r.key), Xe(r) && (R = r.ref, Qe(r, s));
        for (f in r)
          U.call(r, f) && !He.hasOwnProperty(f) && (o[f] = r[f]);
        if (e && e.defaultProps) {
          var g = e.defaultProps;
          for (f in g)
            o[f] === void 0 && (o[f] = g[f]);
        }
        if (c || R) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && er(o, y), R && rr(o, y);
        }
        return ar(e, c, R, s, t, xe.current, o);
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
      return typeof e == "object" && e !== null && e.$$typeof === i;
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
        var t = "";
        e && e._owner && e._owner !== Z.current && (t = " It was passed a child from " + A(e._owner.type) + "."), Y(e), m('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, t), Y(null);
      }
    }
    function je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var a = 0; a < e.length; a++) {
            var t = e[a];
            ee(t) && we(t, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = F(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), o; !(o = f.next()).done; )
              ee(o.value) && we(o.value, r);
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
        r.$$typeof === S))
          a = r.propTypes;
        else
          return;
        if (a) {
          var t = A(r);
          Ke(a, e.props, "prop", t, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var s = A(r);
          m("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && m("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var t = r[a];
          if (t !== "children" && t !== "key") {
            Y(e), m("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", t), Y(null);
            break;
          }
        }
        e.ref !== null && (Y(e), m("Invalid attribute `ref` supplied to `React.Fragment`."), Y(null));
      }
    }
    var Te = {};
    function Ce(e, r, a, t, s, f) {
      {
        var o = We(e);
        if (!o) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var R = nr();
          R ? c += R : c += Re();
          var g;
          e === null ? g = "null" : X(e) ? g = "array" : e !== void 0 && e.$$typeof === i ? (g = "<" + (A(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : g = typeof e, m("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", g, c);
        }
        var y = tr(e, r, a, s, f);
        if (y == null)
          return y;
        if (o) {
          var P = r.children;
          if (P !== void 0)
            if (t)
              if (X(P)) {
                for (var W = 0; W < P.length; W++)
                  je(P[W], e);
                Object.freeze && Object.freeze(P);
              } else
                m("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(P, e);
        }
        if (U.call(r, "key")) {
          var $ = A(e), j = Object.keys(r).filter(function(vr) {
            return vr !== "key";
          }), re = j.length > 0 ? "{key: someKey, " + j.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[$ + re]) {
            var dr = j.length > 0 ? "{" + j.join(": ..., ") + ": ...}" : "{}";
            m(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, $, dr, $), Te[$ + re] = !0;
          }
        }
        return e === l ? cr(y) : ur(y), y;
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
var _ = ae.exports;
function Pe(n) {
  var i, u, l = "";
  if (typeof n == "string" || typeof n == "number") l += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var v = n.length;
    for (i = 0; i < v; i++) n[i] && (u = Pe(n[i])) && (l && (l += " "), l += u);
  } else for (u in n) n[u] && (l && (l += " "), l += u);
  return l;
}
function gr() {
  for (var n, i, u = 0, l = "", v = arguments.length; u < v; u++) (n = arguments[u]) && (i = Pe(n)) && (l && (l += " "), l += i);
  return l;
}
function T(...n) {
  return gr(n);
}
const yr = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, xr = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", hr = E.forwardRef(
  ({
    align: n = "center",
    interactive: i = !0,
    className: u,
    icon: l,
    iconSrc: v,
    iconAlt: k,
    iconSize: C = "lg",
    iconClassName: h,
    children: p,
    ...x
  }, d) => {
    const S = !!(l ?? v), O = () => {
      if (!S) return null;
      const D = l ?? (v ? /* @__PURE__ */ _.jsx(
        "img",
        {
          src: v,
          alt: k ?? "Card icon",
          className: "luca-h-full luca-w-full luca-object-contain"
        }
      ) : null);
      return /* @__PURE__ */ _.jsx(
        De,
        {
          size: C,
          className: h,
          children: D
        }
      );
    };
    return /* @__PURE__ */ _.jsxs(
      "div",
      {
        ref: d,
        "data-card-align": n,
        className: T(
          "luca-group/card luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          i && xr,
          yr[n],
          u
        ),
        ...x,
        children: [
          O(),
          p
        ]
      }
    );
  }
);
hr.displayName = "Card";
const _r = E.forwardRef(
  ({ className: n, children: i, ...u }, l) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: l,
      className: T(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        "luca-items-center luca-text-center",
        "group-data-[card-align=start]/card:luca-items-start group-data-[card-align=start]/card:luca-text-left",
        n
      ),
      ...u,
      children: i
    }
  )
);
_r.displayName = "CardHeader";
const mr = E.forwardRef(
  ({ className: n, children: i, ...u }, l) => /* @__PURE__ */ _.jsx(
    "h3",
    {
      ref: l,
      className: T(
        "luca-text-base luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        n
      ),
      ...u,
      children: i
    }
  )
);
mr.displayName = "CardTitle";
const Rr = E.forwardRef(({ className: n, children: i, ...u }, l) => /* @__PURE__ */ _.jsx(
  "p",
  {
    ref: l,
    className: T(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line",
      "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
      n
    ),
    ...u,
    children: i
  }
));
Rr.displayName = "CardDescription";
const Er = E.forwardRef(
  ({ className: n, children: i, ...u }, l) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: l,
      className: T(
        "luca-w-full luca-text-sm",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        n
      ),
      ...u,
      children: i
    }
  )
);
Er.displayName = "CardContent";
const wr = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, De = E.forwardRef(
  ({ className: n, children: i, size: u = "lg", ...l }, v) => /* @__PURE__ */ _.jsx(
    "div",
    {
      ref: v,
      className: T(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        wr[u],
        "luca-group-hover/card:luca-scale-[1.02]",
        n
      ),
      ...l,
      children: i
    }
  )
);
De.displayName = "CardIcon";
const jr = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-disabled:cursor-not-allowed", Tr = {
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
}, Cr = E.forwardRef(
  ({
    variant: n = "primary",
    state: i = "default",
    leftIcon: u,
    rightIcon: l,
    className: v,
    children: k,
    disabled: C,
    type: h = "button",
    ...p
  }, x) => /* @__PURE__ */ _.jsxs(
    "button",
    {
      ref: x,
      type: h,
      disabled: C,
      className: T(
        jr,
        Tr[n][i],
        v
      ),
      ...p,
      children: [
        u && /* @__PURE__ */ _.jsx("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: u }),
        /* @__PURE__ */ _.jsx("span", { className: "luca-leading-tight", children: k }),
        l && /* @__PURE__ */ _.jsx("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: l })
      ]
    }
  )
);
Cr.displayName = "Button";
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
}, Sr = E.forwardRef(
  ({
    state: n = "default",
    outline: i = "default",
    icon: u,
    className: l,
    disabled: v,
    ...k
  }, C) => {
    const h = n === "disabled" || v;
    return /* @__PURE__ */ _.jsx(
      "button",
      {
        ref: C,
        disabled: h,
        className: T(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          ke.state[n],
          ke.outline[i],
          // Hover styles solo si no está disabled
          !h && "luca-hover:bg-[#edf5ff] luca-hover:text-[#3843d0]",
          l
        ),
        ...k,
        children: /* @__PURE__ */ _.jsx("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: u })
      }
    );
  }
);
Sr.displayName = "ButtonIcon";
const Or = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", kr = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-focus-visible:outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", Pr = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", Dr = "luca-hover:text-[#3843d0] luca-focus-visible:outline-[#3843d0]", Nr = "luca-cursor-not-allowed luca-text-gray-400 luca-hover:text-gray-400 luca-focus-visible:outline-none luca-opacity-60", Ar = E.forwardRef(
  ({
    items: n,
    value: i,
    defaultValue: u,
    onValueChange: l,
    fullWidth: v = !1,
    ariaLabel: k,
    className: C,
    ...h
  }, p) => {
    const x = i !== void 0, d = E.useMemo(
      () => {
        var b;
        return (b = n.find((w) => !w.disabled)) == null ? void 0 : b.key;
      },
      [n]
    ), [S, O] = E.useState(() => u !== void 0 ? u : d);
    E.useEffect(() => {
      if (x || u === void 0) return;
      const b = n.some(
        (w) => w.key === u && !w.disabled
      );
      O(b ? u : d);
    }, [u, d, x, n]), E.useEffect(() => {
      x || O((b) => b && n.some((w) => w.key === b && !w.disabled) ? b : d ?? b);
    }, [d, n, x]);
    const D = x ? i : S;
    return /* @__PURE__ */ _.jsx(
      "div",
      {
        ref: p,
        role: "tablist",
        "aria-label": k,
        className: T(Or, v && "luca-w-full", C),
        ...h,
        children: n.map((b) => {
          const w = b.key === D, F = !!b.disabled, N = w || !D && b.key === d ? 0 : -1;
          return /* @__PURE__ */ _.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": w,
              "aria-disabled": F,
              disabled: F,
              tabIndex: N,
              "data-selected": w || void 0,
              "data-disabled": F || void 0,
              "data-value": b.key,
              className: T(
                kr,
                v ? "luca-flex-1" : "luca-min-w-[88px]",
                w ? Pr : Dr,
                F && Nr
              ),
              onClick: () => {
                F || (x || O(b.key), l == null || l(b.key));
              },
              children: b.label
            },
            b.key
          );
        })
      }
    );
  }
);
Ar.displayName = "TabList";
export {
  Cr as Button,
  Sr as ButtonIcon,
  hr as Card,
  Er as CardContent,
  Rr as CardDescription,
  _r as CardHeader,
  De as CardIcon,
  mr as CardTitle,
  Ar as TabList,
  T as cn
};

import j from "react";
var ae = { exports: {} }, U = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function xr() {
  if (Oe) return U;
  Oe = 1;
  var t = j, c = Symbol.for("react.element"), u = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, d = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, C = { key: !0, ref: !0, __self: !0, __source: !0 };
  function R(_, b, h) {
    var p, O = {}, k = null, N = null;
    h !== void 0 && (k = "" + h), b.key !== void 0 && (k = "" + b.key), b.ref !== void 0 && (N = b.ref);
    for (p in b) l.call(b, p) && !C.hasOwnProperty(p) && (O[p] = b[p]);
    if (_ && _.defaultProps) for (p in b = _.defaultProps, b) O[p] === void 0 && (O[p] = b[p]);
    return { $$typeof: c, type: _, key: k, ref: N, props: O, _owner: d.current };
  }
  return U.Fragment = u, U.jsx = R, U.jsxs = R, U;
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
var ke;
function yr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var t = j, c = Symbol.for("react.element"), u = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), d = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), R = Symbol.for("react.provider"), _ = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), g = Symbol.iterator, T = "@@iterator";
    function A(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = g && e[g] || e[T];
      return typeof r == "function" ? r : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          a[n - 1] = arguments[n];
        Ie("error", e, a);
      }
    }
    function Ie(e, r, a) {
      {
        var n = D.ReactDebugCurrentFrame, s = n.getStackAddendum();
        s !== "" && (r += "%s", a = a.concat([s]));
        var f = a.map(function(i) {
          return String(i);
        });
        f.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, f);
      }
    }
    var Le = !1, $e = !1, Ye = !1, We = !1, Be = !1, ne;
    ne = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === l || e === C || Be || e === d || e === h || e === p || We || e === N || Le || $e || Ye || typeof e == "object" && e !== null && (e.$$typeof === k || e.$$typeof === O || e.$$typeof === R || e.$$typeof === _ || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ne || e.getModuleId !== void 0));
    }
    function Me(e, r, a) {
      var n = e.displayName;
      if (n)
        return n;
      var s = r.displayName || r.name || "";
      return s !== "" ? a + "(" + s + ")" : a;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function F(e) {
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
        case C:
          return "Profiler";
        case d:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case _:
            var r = e;
            return le(r) + ".Consumer";
          case R:
            var a = e;
            return le(a._context) + ".Provider";
          case b:
            return Me(e, e.render, "ForwardRef");
          case O:
            var n = e.displayName || null;
            return n !== null ? n : F(e.type) || "Memo";
          case k: {
            var s = e, f = s._payload, i = s._init;
            try {
              return F(i(f));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, W = 0, ue, ce, oe, ie, se, fe, de;
    function ve() {
    }
    ve.__reactDisabledLog = !0;
    function Ve() {
      {
        if (W === 0) {
          ue = console.log, ce = console.info, oe = console.warn, ie = console.error, se = console.group, fe = console.groupCollapsed, de = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ve,
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
        W++;
      }
    }
    function Je() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ue
            }),
            info: I({}, e, {
              value: ce
            }),
            warn: I({}, e, {
              value: oe
            }),
            error: I({}, e, {
              value: ie
            }),
            group: I({}, e, {
              value: se
            }),
            groupCollapsed: I({}, e, {
              value: fe
            }),
            groupEnd: I({}, e, {
              value: de
            })
          });
        }
        W < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var q = D.ReactCurrentDispatcher, z;
    function V(e, r, a) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (s) {
            var n = s.stack.trim().match(/\n( *(at )?)/);
            z = n && n[1] || "";
          }
        return `
` + z + e;
      }
    }
    var G = !1, J;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      J = new Ke();
    }
    function pe(e, r) {
      if (!e || G)
        return "";
      {
        var a = J.get(e);
        if (a !== void 0)
          return a;
      }
      var n;
      G = !0;
      var s = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var f;
      f = q.current, q.current = null, Ve();
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
            } catch (S) {
              n = S;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (S) {
              n = S;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (S) {
            n = S;
          }
          e();
        }
      } catch (S) {
        if (S && n && typeof S.stack == "string") {
          for (var o = S.stack.split(`
`), w = n.stack.split(`
`), x = o.length - 1, y = w.length - 1; x >= 1 && y >= 0 && o[x] !== w[y]; )
            y--;
          for (; x >= 1 && y >= 0; x--, y--)
            if (o[x] !== w[y]) {
              if (x !== 1 || y !== 1)
                do
                  if (x--, y--, y < 0 || o[x] !== w[y]) {
                    var P = `
` + o[x].replace(" at new ", " at ");
                    return e.displayName && P.includes("<anonymous>") && (P = P.replace("<anonymous>", e.displayName)), typeof e == "function" && J.set(e, P), P;
                  }
                while (x >= 1 && y >= 0);
              break;
            }
        }
      } finally {
        G = !1, q.current = f, Je(), Error.prepareStackTrace = s;
      }
      var Y = e ? e.displayName || e.name : "", L = Y ? V(Y) : "";
      return typeof e == "function" && J.set(e, L), L;
    }
    function He(e, r, a) {
      return pe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function K(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return pe(e, qe(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case h:
          return V("Suspense");
        case p:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return He(e.render);
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
    var B = Object.prototype.hasOwnProperty, be = {}, ge = D.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, a = K(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(a);
      } else
        ge.setExtraStackFrame(null);
    }
    function ze(e, r, a, n, s) {
      {
        var f = Function.call.bind(B);
        for (var i in e)
          if (f(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var w = Error((n || "React class") + ": " + a + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw w.name = "Invariant Violation", w;
              }
              o = e[i](r, i, n, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              o = x;
            }
            o && !(o instanceof Error) && (H(s), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", a, i, typeof o), H(null)), o instanceof Error && !(o.message in be) && (be[o.message] = !0, H(s), E("Failed %s type: %s", a, o.message), H(null));
          }
      }
    }
    var Ge = Array.isArray;
    function X(e) {
      return Ge(e);
    }
    function Xe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Ze(e) {
      try {
        return xe(e), !1;
      } catch {
        return !0;
      }
    }
    function xe(e) {
      return "" + e;
    }
    function ye(e) {
      if (Ze(e))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Xe(e)), xe(e);
    }
    var he = D.ReactCurrentOwner, Qe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, _e;
    function er(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function rr(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, r) {
      typeof e.ref == "string" && he.current;
    }
    function tr(e, r) {
      {
        var a = function() {
          me || (me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function nr(e, r) {
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
    var lr = function(e, r, a, n, s, f, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: c,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
        props: i,
        // Record the component responsible for creating this element.
        _owner: f
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function ur(e, r, a, n, s) {
      {
        var f, i = {}, o = null, w = null;
        a !== void 0 && (ye(a), o = "" + a), rr(r) && (ye(r.key), o = "" + r.key), er(r) && (w = r.ref, ar(r, s));
        for (f in r)
          B.call(r, f) && !Qe.hasOwnProperty(f) && (i[f] = r[f]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (f in x)
            i[f] === void 0 && (i[f] = x[f]);
        }
        if (o || w) {
          var y = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && tr(i, y), w && nr(i, y);
        }
        return lr(e, o, w, s, n, he.current, i);
      }
    }
    var Z = D.ReactCurrentOwner, Re = D.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, a = K(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(a);
      } else
        Re.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === c;
    }
    function Ee() {
      {
        if (Z.current) {
          var e = F(Z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function cr(e) {
      return "";
    }
    var we = {};
    function or(e) {
      {
        var r = Ee();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function je(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = or(r);
        if (we[a])
          return;
        we[a] = !0;
        var n = "";
        e && e._owner && e._owner !== Z.current && (n = " It was passed a child from " + F(e._owner.type) + "."), $(e), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, n), $(null);
      }
    }
    function Ce(e, r) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var a = 0; a < e.length; a++) {
            var n = e[a];
            ee(n) && je(n, r);
          }
        else if (ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var s = A(e);
          if (typeof s == "function" && s !== e.entries)
            for (var f = s.call(e), i; !(i = f.next()).done; )
              ee(i.value) && je(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === O))
          a = r.propTypes;
        else
          return;
        if (a) {
          var n = F(r);
          ze(a, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var s = F(r);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", s || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var n = r[a];
          if (n !== "children" && n !== "key") {
            $(e), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), E("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var Te = {};
    function Se(e, r, a, n, s, f) {
      {
        var i = Ue(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var w = cr();
          w ? o += w : o += Ee();
          var x;
          e === null ? x = "null" : X(e) ? x = "array" : e !== void 0 && e.$$typeof === c ? (x = "<" + (F(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, o);
        }
        var y = ur(e, r, a, s, f);
        if (y == null)
          return y;
        if (i) {
          var P = r.children;
          if (P !== void 0)
            if (n)
              if (X(P)) {
                for (var Y = 0; Y < P.length; Y++)
                  Ce(P[Y], e);
                Object.freeze && Object.freeze(P);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ce(P, e);
        }
        if (B.call(r, "key")) {
          var L = F(e), S = Object.keys(r).filter(function(gr) {
            return gr !== "key";
          }), re = S.length > 0 ? "{key: someKey, " + S.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[L + re]) {
            var br = S.length > 0 ? "{" + S.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, re, L, br, L), Te[L + re] = !0;
          }
        }
        return e === l ? sr(y) : ir(y), y;
      }
    }
    function fr(e, r, a) {
      return Se(e, r, a, !0);
    }
    function dr(e, r, a) {
      return Se(e, r, a, !1);
    }
    var vr = dr, pr = fr;
    M.Fragment = l, M.jsx = vr, M.jsxs = pr;
  }()), M;
}
process.env.NODE_ENV === "production" ? ae.exports = xr() : ae.exports = yr();
var v = ae.exports;
function Ne(t) {
  var c, u, l = "";
  if (typeof t == "string" || typeof t == "number") l += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var d = t.length;
    for (c = 0; c < d; c++) t[c] && (u = Ne(t[c])) && (l && (l += " "), l += u);
  } else for (u in t) t[u] && (l && (l += " "), l += u);
  return l;
}
function hr() {
  for (var t, c, u = 0, l = "", d = arguments.length; u < d; u++) (t = arguments[u]) && (c = Ne(t)) && (l && (l += " "), l += c);
  return l;
}
function m(...t) {
  return hr(t);
}
const mr = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, _r = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", Rr = j.forwardRef(
  ({
    align: t = "center",
    interactive: c = !0,
    className: u,
    icon: l,
    iconSrc: d,
    iconAlt: C,
    iconSize: R = "lg",
    iconClassName: _,
    children: b,
    ...h
  }, p) => {
    const O = !!(l ?? d), k = () => {
      if (!O) return null;
      const N = l ?? (d ? /* @__PURE__ */ v.jsx(
        "img",
        {
          src: d,
          alt: C ?? "Card icon",
          className: "luca-h-full luca-w-full luca-object-contain"
        }
      ) : null);
      return /* @__PURE__ */ v.jsx(
        De,
        {
          size: R,
          className: _,
          children: N
        }
      );
    };
    return /* @__PURE__ */ v.jsxs(
      "div",
      {
        ref: p,
        "data-card-align": t,
        className: m(
          "luca-group/card luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          c && _r,
          mr[t],
          u
        ),
        ...h,
        children: [
          k(),
          b
        ]
      }
    );
  }
);
Rr.displayName = "Card";
const Er = j.forwardRef(
  ({ className: t, children: c, ...u }, l) => /* @__PURE__ */ v.jsx(
    "div",
    {
      ref: l,
      className: m(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        "luca-items-center luca-text-center",
        "group-data-[card-align=start]/card:luca-items-start group-data-[card-align=start]/card:luca-text-left",
        t
      ),
      ...u,
      children: c
    }
  )
);
Er.displayName = "CardHeader";
const wr = j.forwardRef(
  ({ className: t, children: c, ...u }, l) => /* @__PURE__ */ v.jsx(
    "strong",
    {
      ref: l,
      className: m(
        "luca-text-base luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        t
      ),
      ...u,
      children: c
    }
  )
);
wr.displayName = "CardTitle";
const jr = j.forwardRef(({ className: t, children: c, ...u }, l) => /* @__PURE__ */ v.jsx(
  "p",
  {
    ref: l,
    className: m(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line",
      "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
      t
    ),
    ...u,
    children: c
  }
));
jr.displayName = "CardDescription";
const Cr = j.forwardRef(
  ({ className: t, children: c, ...u }, l) => /* @__PURE__ */ v.jsx(
    "div",
    {
      ref: l,
      className: m(
        "luca-w-full luca-text-sm",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        t
      ),
      ...u,
      children: c
    }
  )
);
Cr.displayName = "CardContent";
const Tr = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, De = j.forwardRef(
  ({ className: t, children: c, size: u = "lg", ...l }, d) => /* @__PURE__ */ v.jsx(
    "div",
    {
      ref: d,
      className: m(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        Tr[u],
        "luca-group-hover/card:luca-scale-[1.02]",
        t
      ),
      ...l,
      children: c
    }
  )
);
De.displayName = "CardIcon";
const Sr = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-disabled:cursor-not-allowed", Or = {
  primary: {
    default: m(
      "luca-bg-[#ffba31] luca-text-gray-900 luca-shadow-[0px_4px_0px_0px_#f58f00]",
      "luca-hover:bg-[#f58f00] luca-hover:shadow-[0px_4px_0px_0px_#d0780f]",
      "luca-active:bg-[#ffba31]",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:shadow-[0px_4px_0px_0px_#adadad]",
      "luca-focus-visible:outline-[#ffba31]"
    ),
    alert: m(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "luca-hover:bg-red-50",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-red-500"
    )
  },
  secondary: {
    default: m(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200",
      "luca-hover:border-[#c5daff] luca-hover:text-[#3843d0]",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-[#3843d0]"
    ),
    alert: m(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "luca-hover:bg-red-50",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-red-500"
    )
  }
}, kr = j.forwardRef(
  ({
    variant: t = "primary",
    state: c = "default",
    leftIcon: u,
    rightIcon: l,
    className: d,
    children: C,
    disabled: R,
    type: _ = "button",
    ...b
  }, h) => /* @__PURE__ */ v.jsxs(
    "button",
    {
      ref: h,
      type: _,
      disabled: R,
      className: m(
        Sr,
        Or[t][c],
        d
      ),
      ...b,
      children: [
        u && /* @__PURE__ */ v.jsx("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: u }),
        /* @__PURE__ */ v.jsx("span", { className: "luca-leading-tight", children: C }),
        l && /* @__PURE__ */ v.jsx("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: l })
      ]
    }
  )
);
kr.displayName = "Button";
const Pe = {
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
}, Pr = j.forwardRef(
  ({
    state: t = "default",
    outline: c = "default",
    icon: u,
    className: l,
    disabled: d,
    ...C
  }, R) => {
    const _ = t === "disabled" || d;
    return /* @__PURE__ */ v.jsx(
      "button",
      {
        ref: R,
        disabled: _,
        className: m(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          Pe.state[t],
          Pe.outline[c],
          // Hover styles solo si no está disabled
          !_ && "luca-hover:bg-[#edf5ff] luca-hover:text-[#3843d0]",
          l
        ),
        ...C,
        children: /* @__PURE__ */ v.jsx("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: u })
      }
    );
  }
);
Pr.displayName = "ButtonIcon";
const Nr = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", Dr = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-focus-visible:outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", Fr = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", Ar = "luca-hover:text-[#3843d0] luca-focus-visible:outline-[#3843d0]", Ir = "luca-cursor-not-allowed luca-text-gray-400 luca-hover:text-gray-400 luca-focus-visible:outline-none luca-opacity-60", Lr = j.forwardRef(
  ({
    items: t,
    value: c,
    defaultValue: u,
    onValueChange: l,
    fullWidth: d = !1,
    ariaLabel: C,
    className: R,
    ..._
  }, b) => {
    const h = c !== void 0, p = j.useMemo(
      () => {
        var g;
        return (g = t.find((T) => !T.disabled)) == null ? void 0 : g.key;
      },
      [t]
    ), [O, k] = j.useState(() => u !== void 0 ? u : p);
    j.useEffect(() => {
      if (h || u === void 0) return;
      const g = t.some(
        (T) => T.key === u && !T.disabled
      );
      k(g ? u : p);
    }, [u, p, h, t]), j.useEffect(() => {
      h || k((g) => g && t.some((T) => T.key === g && !T.disabled) ? g : p ?? g);
    }, [p, t, h]);
    const N = h ? c : O;
    return /* @__PURE__ */ v.jsx(
      "div",
      {
        ref: b,
        role: "tablist",
        "aria-label": C,
        className: m(Nr, d && "luca-w-full", R),
        ..._,
        children: t.map((g) => {
          const T = g.key === N, A = !!g.disabled, D = T || !N && g.key === p ? 0 : -1;
          return /* @__PURE__ */ v.jsx(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": T,
              "aria-disabled": A,
              disabled: A,
              tabIndex: D,
              "data-selected": T || void 0,
              "data-disabled": A || void 0,
              "data-value": g.key,
              className: m(
                Dr,
                d ? "luca-flex-1" : "luca-min-w-[88px]",
                T ? Fr : Ar,
                A && Ir
              ),
              onClick: () => {
                A || (h || k(g.key), l == null || l(g.key));
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
Lr.displayName = "TabList";
const Fe = ({
  backgroundImage: t,
  title: c,
  subtitle: u,
  avatarImage: l,
  avatarAlt: d = "Layout avatar",
  heroClassName: C,
  heroStyle: R
}) => /* @__PURE__ */ v.jsxs(
  "div",
  {
    className: m(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      C
    ),
    style: { backgroundImage: `url(${t})`, ...R },
    children: [
      /* @__PURE__ */ v.jsx("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-Left", children: c }),
      /* @__PURE__ */ v.jsx("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ v.jsx(
        "img",
        {
          src: l,
          alt: d,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ v.jsx("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: u })
    ]
  }
);
Fe.displayName = "LayoutHeader";
const Ae = ({ children: t, className: c, ...u }) => /* @__PURE__ */ v.jsx(
  "div",
  {
    className: m(
      "luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      c
    ),
    ...u,
    children: t
  }
);
Ae.displayName = "LayoutContent";
const te = ({ className: t, style: c, children: u }) => /* @__PURE__ */ v.jsx("div", { className: m("luca-bg-[#F9FAFB]", t), style: c, children: u });
te.displayName = "Layout";
te.Header = Fe;
te.Content = Ae;
export {
  kr as Button,
  Pr as ButtonIcon,
  Rr as Card,
  Cr as CardContent,
  jr as CardDescription,
  Er as CardHeader,
  De as CardIcon,
  wr as CardTitle,
  te as Layout,
  Ae as LayoutContent,
  Fe as LayoutHeader,
  Lr as TabList,
  m as cn
};

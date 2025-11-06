import je from "react";
var X = { exports: {} }, $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var we;
function gr() {
  if (we) return $;
  we = 1;
  var l = je, f = Symbol.for("react.element"), v = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, E = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(T, p, P) {
    var b, _ = {}, O = null, N = null;
    P !== void 0 && (O = "" + P), p.key !== void 0 && (O = "" + p.key), p.ref !== void 0 && (N = p.ref);
    for (b in p) s.call(p, b) && !S.hasOwnProperty(b) && (_[b] = p[b]);
    if (T && T.defaultProps) for (b in p = T.defaultProps, p) _[b] === void 0 && (_[b] = p[b]);
    return { $$typeof: f, type: T, key: O, ref: N, props: _, _owner: E.current };
  }
  return $.Fragment = v, $.jsx = x, $.jsxs = x, $;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function yr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && function() {
    var l = je, f = Symbol.for("react.element"), v = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), E = Symbol.for("react.strict_mode"), S = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), T = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), O = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), ee = Symbol.iterator, Fe = "@@iterator";
    function De(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = ee && e[ee] || e[Fe];
      return typeof r == "function" ? r : null;
    }
    var k = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Ae("error", e, t);
      }
    }
    function Ae(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, i = a.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Ie = !1, $e = !1, Le = !1, Ne = !1, We = !1, re;
    re = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === S || We || e === E || e === P || e === b || Ne || e === N || Ie || $e || Le || typeof e == "object" && e !== null && (e.$$typeof === O || e.$$typeof === _ || e.$$typeof === x || e.$$typeof === T || e.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === re || e.getModuleId !== void 0));
    }
    function Ve(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function te(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case v:
          return "Portal";
        case S:
          return "Profiler";
        case E:
          return "StrictMode";
        case P:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return te(r) + ".Consumer";
          case x:
            var t = e;
            return te(t._context) + ".Provider";
          case p:
            return Ve(e, e.render, "ForwardRef");
          case _:
            var a = e.displayName || null;
            return a !== null ? a : R(e.type) || "Memo";
          case O: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, A = 0, ae, ne, oe, ie, ue, le, se;
    function ce() {
    }
    ce.__reactDisabledLog = !0;
    function Me() {
      {
        if (A === 0) {
          ae = console.log, ne = console.info, oe = console.warn, ie = console.error, ue = console.group, le = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ce,
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
        A++;
      }
    }
    function Ue() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: ae
            }),
            info: w({}, e, {
              value: ne
            }),
            warn: w({}, e, {
              value: oe
            }),
            error: w({}, e, {
              value: ie
            }),
            group: w({}, e, {
              value: ue
            }),
            groupCollapsed: w({}, e, {
              value: le
            }),
            groupEnd: w({}, e, {
              value: se
            })
          });
        }
        A < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = k.ReactCurrentDispatcher, B;
    function W(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var a = i.stack.trim().match(/\n( *(at )?)/);
            B = a && a[1] || "";
          }
        return `
` + B + e;
      }
    }
    var J = !1, Y;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new Be();
    }
    function fe(e, r) {
      if (!e || J)
        return "";
      {
        var t = Y.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      J = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Me();
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
            } catch (m) {
              a = m;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (m) {
              a = m;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            a = m;
          }
          e();
        }
      } catch (m) {
        if (m && a && typeof m.stack == "string") {
          for (var n = m.stack.split(`
`), y = a.stack.split(`
`), c = n.length - 1, d = y.length - 1; c >= 1 && d >= 0 && n[c] !== y[d]; )
            d--;
          for (; c >= 1 && d >= 0; c--, d--)
            if (n[c] !== y[d]) {
              if (c !== 1 || d !== 1)
                do
                  if (c--, d--, d < 0 || n[c] !== y[d]) {
                    var h = `
` + n[c].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && Y.set(e, h), h;
                  }
                while (c >= 1 && d >= 0);
              break;
            }
        }
      } finally {
        J = !1, U.current = u, Ue(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", C = D ? W(D) : "";
      return typeof e == "function" && Y.set(e, C), C;
    }
    function Je(e, r, t) {
      return fe(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return fe(e, qe(e));
      if (typeof e == "string")
        return W(e);
      switch (e) {
        case P:
          return W("Suspense");
        case b:
          return W("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case p:
            return Je(e.render);
          case _:
            return V(e.type, r, t);
          case O: {
            var a = e, i = a._payload, u = a._init;
            try {
              return V(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var I = Object.prototype.hasOwnProperty, de = {}, ve = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        ve.setExtraStackFrame(t);
      } else
        ve.setExtraStackFrame(null);
    }
    function Ke(e, r, t, a, i) {
      {
        var u = Function.call.bind(I);
        for (var o in e)
          if (u(e, o)) {
            var n = void 0;
            try {
              if (typeof e[o] != "function") {
                var y = Error((a || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              n = e[o](r, o, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (c) {
              n = c;
            }
            n && !(n instanceof Error) && (M(i), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, o, typeof n), M(null)), n instanceof Error && !(n.message in de) && (de[n.message] = !0, M(i), g("Failed %s type: %s", t, n.message), M(null));
          }
      }
    }
    var Ge = Array.isArray;
    function q(e) {
      return Ge(e);
    }
    function He(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ze(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function ge(e) {
      if (ze(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", He(e)), pe(e);
    }
    var ye = k.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, be;
    function Ze(e) {
      if (I.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Qe(e) {
      if (I.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function er(e, r) {
      typeof e.ref == "string" && ye.current;
    }
    function rr(e, r) {
      {
        var t = function() {
          me || (me = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function tr(e, r) {
      {
        var t = function() {
          be || (be = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var ar = function(e, r, t, a, i, u, o) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: f,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function nr(e, r, t, a, i) {
      {
        var u, o = {}, n = null, y = null;
        t !== void 0 && (ge(t), n = "" + t), Qe(r) && (ge(r.key), n = "" + r.key), Ze(r) && (y = r.ref, er(r, i));
        for (u in r)
          I.call(r, u) && !Xe.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var c = e.defaultProps;
          for (u in c)
            o[u] === void 0 && (o[u] = c[u]);
        }
        if (n || y) {
          var d = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && rr(o, d), y && tr(o, d);
        }
        return ar(e, n, y, i, a, ye.current, o);
      }
    }
    var K = k.ReactCurrentOwner, he = k.ReactDebugCurrentFrame;
    function F(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var G;
    G = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === f;
    }
    function Ee() {
      {
        if (K.current) {
          var e = R(K.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var _e = {};
    function ir(e) {
      {
        var r = Ee();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Re(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = ir(r);
        if (_e[t])
          return;
        _e[t] = !0;
        var a = "";
        e && e._owner && e._owner !== K.current && (a = " It was passed a child from " + R(e._owner.type) + "."), F(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), F(null);
      }
    }
    function xe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (q(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            H(a) && Re(a, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = De(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && Re(o.value, r);
        }
      }
    }
    function ur(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === _))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = R(r);
          Ke(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !G) {
          G = !0;
          var i = R(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            F(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), F(null);
            break;
          }
        }
        e.ref !== null && (F(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), F(null));
      }
    }
    var Te = {};
    function Oe(e, r, t, a, i, u) {
      {
        var o = Ye(e);
        if (!o) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var y = or();
          y ? n += y : n += Ee();
          var c;
          e === null ? c = "null" : q(e) ? c = "array" : e !== void 0 && e.$$typeof === f ? (c = "<" + (R(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : c = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", c, n);
        }
        var d = nr(e, r, t, i, u);
        if (d == null)
          return d;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (a)
              if (q(h)) {
                for (var D = 0; D < h.length; D++)
                  xe(h[D], e);
                Object.freeze && Object.freeze(h);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              xe(h, e);
        }
        if (I.call(r, "key")) {
          var C = R(e), m = Object.keys(r).filter(function(pr) {
            return pr !== "key";
          }), z = m.length > 0 ? "{key: someKey, " + m.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Te[C + z]) {
            var vr = m.length > 0 ? "{" + m.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, z, C, vr, C), Te[C + z] = !0;
          }
        }
        return e === s ? lr(d) : ur(d), d;
      }
    }
    function sr(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function cr(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var fr = cr, dr = sr;
    L.Fragment = s, L.jsx = fr, L.jsxs = dr;
  }()), L;
}
process.env.NODE_ENV === "production" ? X.exports = gr() : X.exports = yr();
var j = X.exports;
function Se(l) {
  var f, v, s = "";
  if (typeof l == "string" || typeof l == "number") s += l;
  else if (typeof l == "object") if (Array.isArray(l)) {
    var E = l.length;
    for (f = 0; f < E; f++) l[f] && (v = Se(l[f])) && (s && (s += " "), s += v);
  } else for (v in l) l[v] && (s && (s += " "), s += v);
  return s;
}
function mr() {
  for (var l, f, v = 0, s = "", E = arguments.length; v < E; v++) (l = arguments[v]) && (f = Se(l)) && (s && (s += " "), s += f);
  return s;
}
function Z(...l) {
  return mr(l);
}
const Pe = ({
  backgroundImage: l,
  title: f,
  subtitle: v,
  avatarImage: s,
  avatarAlt: E = "Layout avatar",
  heroClassName: S,
  heroStyle: x
}) => /* @__PURE__ */ j.jsxs(
  "div",
  {
    className: Z(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      S
    ),
    style: { backgroundImage: `url(${l})`, ...x },
    children: [
      /* @__PURE__ */ j.jsx("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-center", children: f }),
      /* @__PURE__ */ j.jsx("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ j.jsx(
        "img",
        {
          src: s,
          alt: E,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ j.jsx("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: v })
    ]
  }
);
Pe.displayName = "LayoutHeader";
const ke = ({ children: l, className: f, ...v }) => /* @__PURE__ */ j.jsx(
  "div",
  {
    className: Z(
      "luca-py-6 luca-px-4 luca-max-w-[1400px] luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      f
    ),
    ...v,
    children: l
  }
);
ke.displayName = "LayoutContent";
const Q = ({ className: l, style: f, children: v }) => /* @__PURE__ */ j.jsx("div", { className: Z("luca-bg-[#F9FAFB]", l), style: f, children: v });
Q.displayName = "Layout";
Q.Header = Pe;
Q.Content = ke;
export {
  Q as Layout,
  Z as cn
};

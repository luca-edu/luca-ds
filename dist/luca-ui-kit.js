import { jsxs as gr, jsx as le } from "react/jsx-runtime";
import * as g from "react";
import T, { isValidElement as nu, version as ou, useContext as Ie, createContext as da, useRef as ne, useLayoutEffect as au, useEffect as Ue, forwardRef as Er, useState as un, useMemo as Rt, Children as iu } from "react";
import * as ps from "react-dom";
import ka, { createPortal as su } from "react-dom";
function hs(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object") if (Array.isArray(e)) {
    var o = e.length;
    for (t = 0; t < o; t++) e[t] && (r = hs(e[t])) && (n && (n += " "), n += r);
  } else for (r in e) e[r] && (n && (n += " "), n += r);
  return n;
}
function lu() {
  for (var e, t, r = 0, n = "", o = arguments.length; r < o; r++) (e = arguments[r]) && (t = hs(e)) && (n && (n += " "), n += t);
  return n;
}
function Oe(...e) {
  return lu(e);
}
const cu = {
  center: "luca-items-center luca-text-center",
  start: "luca-items-start luca-text-left"
}, uu = "hover:luca-bg-[rgba(237,245,255,0.5)] hover:luca-border-[var(--borders-hover,#c5daff)] hover:luca-text-[#3843d0] hover:luca-shadow-[0px_4px_6px_-1px_rgba(156,163,175,0.1),0px_2px_4px_-1px_rgba(156,163,175,0.08)] hover:luca-cursor-pointer", du = T.forwardRef(
  ({
    align: e = "center",
    interactive: t = !0,
    className: r,
    icon: n,
    iconSrc: o,
    iconAlt: a,
    iconSize: i = "lg",
    iconClassName: s,
    children: l,
    ...u
  }, c) => {
    const d = !!(n ?? o), f = () => d ? /* @__PURE__ */ le(
      ys,
      {
        size: i,
        className: s,
        children: n ?? (o ? /* @__PURE__ */ le(
          "img",
          {
            src: o,
            alt: a ?? "Card icon",
            className: "luca-h-full luca-w-full luca-object-contain"
          }
        ) : null)
      }
    ) : null;
    return /* @__PURE__ */ gr(
      "div",
      {
        ref: c,
        "data-card-align": e,
        className: Oe(
          "luca-group/card luca-relative luca-flex luca-w-full luca-flex-col luca-gap-4 luca-rounded-2xl luca-border luca-border-transparent luca-px-6 luca-py-8 luca-transition-all luca-duration-200 luca-backdrop-blur-sm luca-bg-white/80 luca-shadow-[0px_0px_8.304px_0px_rgba(0,0,0,0.03),0px_1.107px_16.609px_0px_rgba(246,246,246,0.1),0px_0px_0.554px_0px_rgba(246,246,246,0.3)] luca-w-full luca-text-gray-900",
          t && uu,
          cu[e],
          r
        ),
        ...u,
        children: [
          f(),
          l
        ]
      }
    );
  }
);
du.displayName = "Card";
const fu = T.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ le(
    "div",
    {
      ref: n,
      className: Oe(
        "luca-flex luca-w-full luca-flex-col luca-gap-3",
        "luca-items-center luca-text-center",
        "group-data-[card-align=start]/card:luca-items-start group-data-[card-align=start]/card:luca-text-left",
        e
      ),
      ...r,
      children: t
    }
  )
);
fu.displayName = "CardHeader";
const mu = T.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ le(
    "strong",
    {
      ref: n,
      className: Oe(
        "luca-text-[#111827] luca-font-semibold luca-leading-tight luca-tracking-tight luca-transition-colors luca-duration-200",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        e
      ),
      ...r,
      children: t
    }
  )
);
mu.displayName = "CardTitle";
const gu = T.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ le(
  "p",
  {
    ref: n,
    className: Oe(
      "luca-text-sm luca-leading-relaxed luca-transition-colors luca-duration-200 luca-whitespace-pre-line luca-text-[#6B7280]",
      "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
      e
    ),
    ...r,
    children: t
  }
));
gu.displayName = "CardDescription";
const vu = T.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ le(
    "div",
    {
      ref: n,
      className: Oe(
        "luca-w-full luca-text-sm",
        "group-data-[card-align=center]/card:luca-text-center group-data-[card-align=start]/card:luca-text-left",
        e
      ),
      ...r,
      children: t
    }
  )
);
vu.displayName = "CardContent";
const pu = {
  md: "luca-h-12 luca-w-12",
  lg: "luca-h-16 luca-w-16"
}, ys = T.forwardRef(
  ({ className: e, children: t, size: r = "lg", ...n }, o) => /* @__PURE__ */ le(
    "div",
    {
      ref: o,
      className: Oe(
        "luca-flex luca-items-center luca-justify-center luca-overflow-hidden  luca-transition-transform luca-duration-200",
        "luca-rounded-none",
        pu[r],
        "luca-group-hover/card:luca-scale-[1.02]",
        e
      ),
      ...n,
      children: t
    }
  )
);
ys.displayName = "CardIcon";
const hu = "luca-inline-flex luca-items-center luca-justify-center luca-gap-2.5 luca-h-9 luca-px-4 luca-py-2.5 luca-rounded-xl luca-font-semibold luca-text-sm luca-transition-all luca-duration-200 luca-whitespace-nowrap luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-disabled:cursor-not-allowed", yu = {
  primary: {
    default: Oe(
      "luca-bg-[#ffba31] luca-text-gray-900 luca-shadow-[0px_4px_0px_0px_#f58f00]",
      "luca-hover:bg-[#f58f00] luca-hover:shadow-[0px_4px_0px_0px_#d0780f]",
      "luca-active:bg-[#ffba31]",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:shadow-[0px_4px_0px_0px_#adadad]",
      "luca-focus-visible:outline-[#ffba31]"
    ),
    alert: Oe(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "luca-hover:bg-red-50",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-red-500"
    )
  },
  secondary: {
    default: Oe(
      "luca-bg-white luca-text-gray-900 luca-border luca-border-gray-200 luca-shadow-[0px_4px_0px_0px_#adadad]",
      "luca-hover:border-[#c5daff] luca-hover:text-[#3843d0]",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-[#3843d0]"
    ),
    alert: Oe(
      "luca-bg-white luca-text-red-500 luca-border luca-border-red-400",
      "luca-hover:bg-red-50",
      "luca-disabled:bg-gray-100 luca-disabled:text-gray-400 luca-disabled:border-gray-300",
      "luca-focus-visible:outline-red-500"
    )
  }
}, mo = T.forwardRef(
  ({
    variant: e = "primary",
    state: t = "default",
    leftIcon: r,
    rightIcon: n,
    className: o,
    children: a,
    disabled: i,
    type: s = "button",
    ...l
  }, u) => /* @__PURE__ */ gr(
    "button",
    {
      ref: u,
      type: s,
      disabled: i,
      className: Oe(
        hu,
        yu[e][t],
        o
      ),
      ...l,
      children: [
        r && /* @__PURE__ */ le("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: r }),
        /* @__PURE__ */ le("span", { className: "luca-leading-tight", children: a }),
        n && /* @__PURE__ */ le("span", { className: "luca-inline-flex luca-items-center luca-justify-center luca-w-6 luca-h-6 luca-shrink-0", children: n })
      ]
    }
  )
);
mo.displayName = "Button";
const Ha = {
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
}, bu = T.forwardRef(
  ({
    state: e = "default",
    outline: t = "default",
    icon: r,
    className: n,
    disabled: o,
    ...a
  }, i) => {
    const s = e === "disabled" || o;
    return /* @__PURE__ */ le(
      "button",
      {
        ref: i,
        disabled: s,
        className: Oe(
          "luca-flex luca-items-center luca-justify-center luca-w-8 luca-h-8 luca-p-1 luca-border luca-transition-all luca-duration-200",
          Ha.state[e],
          Ha.outline[t],
          // Hover styles solo si no está disabled
          !s && "luca-hover:bg-[#edf5ff] luca-hover:text-[#3843d0]",
          n
        ),
        ...a,
        children: /* @__PURE__ */ le("span", { className: "luca-w-4 luca-h-4 luca-flex luca-items-center luca-justify-center", children: r })
      }
    );
  }
);
bu.displayName = "ButtonIcon";
const Cu = "luca-inline-flex luca-items-center luca-gap-1 luca-rounded-[14px] luca-bg-[#ececf0] luca-p-1 luca-text-sm luca-font-medium luca-text-gray-900", xu = "luca-inline-flex luca-items-center luca-justify-center luca-rounded-[12px] luca-px-[9px] luca-py-[5px] luca-transition-all luca-duration-200 luca-focus-visible:outline luca-focus-visible:outline-2 luca-focus-visible:outline-offset-2 luca-focus-visible:outline-[#3843d0] luca-tracking-[-0.010em] luca-text-[#111827]", Su = "luca-bg-[#fdc700] luca-text-[#111827] luca-shadow-[0px_1px_2px_rgba(0,0,0,0.05)]", Eu = "luca-hover:text-[#3843d0] luca-focus-visible:outline-[#3843d0]", wu = "luca-cursor-not-allowed luca-text-gray-400 luca-hover:text-gray-400 luca-focus-visible:outline-none luca-opacity-60", Ou = T.forwardRef(
  ({
    items: e,
    value: t,
    defaultValue: r,
    onValueChange: n,
    fullWidth: o = !1,
    ariaLabel: a,
    className: i,
    ...s
  }, l) => {
    const u = t !== void 0, c = T.useMemo(
      () => e.find((v) => !v.disabled)?.key,
      [e]
    ), [d, f] = T.useState(() => r !== void 0 ? r : c);
    T.useEffect(() => {
      if (u || r === void 0) return;
      const v = e.some(
        (h) => h.key === r && !h.disabled
      );
      f(v ? r : c);
    }, [r, c, u, e]), T.useEffect(() => {
      u || f((v) => v && e.some((h) => h.key === v && !h.disabled) ? v : c ?? v);
    }, [c, e, u]);
    const p = u ? t : d;
    return /* @__PURE__ */ le(
      "div",
      {
        ref: l,
        role: "tablist",
        "aria-label": a,
        className: Oe(Cu, o && "luca-w-full", i),
        ...s,
        children: e.map((v) => {
          const h = v.key === p, m = !!v.disabled, b = h || !p && v.key === c ? 0 : -1;
          return /* @__PURE__ */ le(
            "button",
            {
              type: "button",
              role: "tab",
              "aria-selected": h,
              "aria-disabled": m,
              disabled: m,
              tabIndex: b,
              "data-selected": h || void 0,
              "data-disabled": m || void 0,
              "data-value": v.key,
              className: Oe(
                xu,
                o ? "luca-flex-1" : "luca-min-w-[88px]",
                h ? Su : Eu,
                m && wu
              ),
              onClick: () => {
                m || (u || f(v.key), n?.(v.key));
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
Ou.displayName = "TabList";
const bs = ({
  backgroundImage: e,
  title: t,
  subtitle: r,
  avatarImage: n,
  avatarAlt: o = "Layout avatar",
  heroClassName: a,
  heroStyle: i
}) => /* @__PURE__ */ gr(
  "div",
  {
    className: Oe(
      "luca-pt-[34px] luca-px-6 luca-pb-[52px]",
      "luca-bg-cover luca-bg-center luca-bg-no-repeat",
      a
    ),
    style: { backgroundImage: `url(${e})`, ...i },
    children: [
      /* @__PURE__ */ le("h3", { className: "luca-font-semibold luca-text-lg luca-text-[#3843D0] luca-leading-[120%] luca-text-Left", children: t }),
      /* @__PURE__ */ le("div", { className: "luca-flex luca-flex-row luca-items-center luca-justify-center luca-w-full luca-mt-4", children: /* @__PURE__ */ le(
        "img",
        {
          src: n,
          alt: o,
          className: "luca-w-[169px] luca-h-[140px]"
        }
      ) }),
      /* @__PURE__ */ le("div", { className: "luca-font-semibold luca-text-base luca-text-[#111827] luca-leading-[180%] luca-text-center luca-mt-6", children: r })
    ]
  }
);
bs.displayName = "LayoutHeader";
const Cs = ({ children: e, className: t, ...r }) => /* @__PURE__ */ le(
  "div",
  {
    className: Oe(
      "luca-w-full luca-mx-auto luca-relative luca-min-h-[calc(100vh-280px)]",
      t
    ),
    ...r,
    children: e
  }
);
Cs.displayName = "LayoutContent";
const fa = ({ className: e, style: t, children: r }) => /* @__PURE__ */ le("div", { className: Oe("luca-bg-[#F9FAFB]", e), style: t, children: r });
fa.displayName = "Layout";
fa.Header = bs;
fa.Content = Cs;
function $u(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Hn = { exports: {} };
var Ba;
function Pu() {
  return Ba || (Ba = 1, (function(e) {
    (function() {
      var t = {}.hasOwnProperty;
      function r() {
        for (var a = "", i = 0; i < arguments.length; i++) {
          var s = arguments[i];
          s && (a = o(a, n(s)));
        }
        return a;
      }
      function n(a) {
        if (typeof a == "string" || typeof a == "number")
          return a;
        if (typeof a != "object")
          return "";
        if (Array.isArray(a))
          return r.apply(null, a);
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
      e.exports ? (r.default = r, e.exports = r) : window.classNames = r;
    })();
  })(Hn)), Hn.exports;
}
var Nu = Pu();
const z = /* @__PURE__ */ $u(Nu);
function ue() {
  return ue = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ue.apply(null, arguments);
}
function W(e) {
  "@babel/helpers - typeof";
  return W = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, W(e);
}
var Tu = Symbol.for("react.element"), Ru = Symbol.for("react.transitional.element"), _u = Symbol.for("react.fragment");
function xs(e) {
  return (
    // Base object type
    e && W(e) === "object" && // React Element type
    (e.$$typeof === Tu || e.$$typeof === Ru) && // React Fragment type
    e.type === _u
  );
}
function go(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return T.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(go(n)) : xs(n) && n.props ? r = r.concat(go(n.props.children, t)) : r.push(n));
  }), r;
}
var vo = {}, ma = [], Fu = function(t) {
  ma.push(t);
};
function vr(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ma.reduce(function(n, o) {
      return o(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Iu(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = ma.reduce(function(n, o) {
      return o(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function Ss() {
  vo = {};
}
function Es(e, t, r) {
  !t && !vo[r] && (e(!1, r), vo[r] = !0);
}
function ce(e, t) {
  Es(vr, e, t);
}
function Mu(e, t) {
  Es(Iu, e, t);
}
ce.preMessage = Fu;
ce.resetWarned = Ss;
ce.noteOnce = Mu;
function ju(e, t) {
  if (W(e) != "object" || !e) return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t);
    if (W(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ws(e) {
  var t = ju(e, "string");
  return W(t) == "symbol" ? t : t + "";
}
function w(e, t, r) {
  return (t = ws(t)) in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function za(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function P(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? za(Object(r), !0).forEach(function(n) {
      w(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : za(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Wa(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function Au(e) {
  return e && W(e) === "object" && Wa(e.nativeElement) ? e.nativeElement : Wa(e) ? e : null;
}
function Lu(e) {
  var t = Au(e);
  if (t)
    return t;
  if (e instanceof T.Component) {
    var r;
    return (r = ka.findDOMNode) === null || r === void 0 ? void 0 : r.call(ka, e);
  }
  return null;
}
var Wr = { exports: {} }, te = {};
var qa;
function Vu() {
  if (qa) return te;
  qa = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v;
  v = Symbol.for("react.module.reference");
  function h(m) {
    if (typeof m == "object" && m !== null) {
      var b = m.$$typeof;
      switch (b) {
        case e:
          switch (m = m.type, m) {
            case r:
            case o:
            case n:
            case u:
            case c:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case i:
                case l:
                case f:
                case d:
                case a:
                  return m;
                default:
                  return b;
              }
          }
        case t:
          return b;
      }
    }
  }
  return te.ContextConsumer = i, te.ContextProvider = a, te.Element = e, te.ForwardRef = l, te.Fragment = r, te.Lazy = f, te.Memo = d, te.Portal = t, te.Profiler = o, te.StrictMode = n, te.Suspense = u, te.SuspenseList = c, te.isAsyncMode = function() {
    return !1;
  }, te.isConcurrentMode = function() {
    return !1;
  }, te.isContextConsumer = function(m) {
    return h(m) === i;
  }, te.isContextProvider = function(m) {
    return h(m) === a;
  }, te.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === e;
  }, te.isForwardRef = function(m) {
    return h(m) === l;
  }, te.isFragment = function(m) {
    return h(m) === r;
  }, te.isLazy = function(m) {
    return h(m) === f;
  }, te.isMemo = function(m) {
    return h(m) === d;
  }, te.isPortal = function(m) {
    return h(m) === t;
  }, te.isProfiler = function(m) {
    return h(m) === o;
  }, te.isStrictMode = function(m) {
    return h(m) === n;
  }, te.isSuspense = function(m) {
    return h(m) === u;
  }, te.isSuspenseList = function(m) {
    return h(m) === c;
  }, te.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === r || m === o || m === n || m === u || m === c || m === p || typeof m == "object" && m !== null && (m.$$typeof === f || m.$$typeof === d || m.$$typeof === a || m.$$typeof === i || m.$$typeof === l || m.$$typeof === v || m.getModuleId !== void 0);
  }, te.typeOf = h, te;
}
var re = {};
var Ua;
function Du() {
  return Ua || (Ua = 1, process.env.NODE_ENV !== "production" && (function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), s = Symbol.for("react.server_context"), l = Symbol.for("react.forward_ref"), u = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = !1, h = !1, m = !1, b = !1, y = !1, C;
    C = Symbol.for("react.module.reference");
    function S(V) {
      return !!(typeof V == "string" || typeof V == "function" || V === r || V === o || y || V === n || V === u || V === c || b || V === p || v || h || m || typeof V == "object" && V !== null && (V.$$typeof === f || V.$$typeof === d || V.$$typeof === a || V.$$typeof === i || V.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      V.$$typeof === C || V.getModuleId !== void 0));
    }
    function x(V) {
      if (typeof V == "object" && V !== null) {
        var J = V.$$typeof;
        switch (J) {
          case e:
            var se = V.type;
            switch (se) {
              case r:
              case o:
              case n:
              case u:
              case c:
                return se;
              default:
                var Ke = se && se.$$typeof;
                switch (Ke) {
                  case s:
                  case i:
                  case l:
                  case f:
                  case d:
                  case a:
                    return Ke;
                  default:
                    return J;
                }
            }
          case t:
            return J;
        }
      }
    }
    var O = i, E = a, $ = e, N = l, _ = r, I = f, F = d, M = t, R = o, j = n, L = u, A = c, B = !1, k = !1;
    function U(V) {
      return B || (B = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function Q(V) {
      return k || (k = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function q(V) {
      return x(V) === i;
    }
    function K(V) {
      return x(V) === a;
    }
    function G(V) {
      return typeof V == "object" && V !== null && V.$$typeof === e;
    }
    function oe(V) {
      return x(V) === l;
    }
    function Y(V) {
      return x(V) === r;
    }
    function ie(V) {
      return x(V) === f;
    }
    function Re(V) {
      return x(V) === d;
    }
    function _e(V) {
      return x(V) === t;
    }
    function Ve(V) {
      return x(V) === o;
    }
    function pe(V) {
      return x(V) === n;
    }
    function Ee(V) {
      return x(V) === u;
    }
    function xe(V) {
      return x(V) === c;
    }
    re.ContextConsumer = O, re.ContextProvider = E, re.Element = $, re.ForwardRef = N, re.Fragment = _, re.Lazy = I, re.Memo = F, re.Portal = M, re.Profiler = R, re.StrictMode = j, re.Suspense = L, re.SuspenseList = A, re.isAsyncMode = U, re.isConcurrentMode = Q, re.isContextConsumer = q, re.isContextProvider = K, re.isElement = G, re.isForwardRef = oe, re.isFragment = Y, re.isLazy = ie, re.isMemo = Re, re.isPortal = _e, re.isProfiler = Ve, re.isStrictMode = pe, re.isSuspense = Ee, re.isSuspenseList = xe, re.isValidElementType = S, re.typeOf = x;
  })()), re;
}
var Ga;
function ku() {
  return Ga || (Ga = 1, process.env.NODE_ENV === "production" ? Wr.exports = Vu() : Wr.exports = Du()), Wr.exports;
}
var Bn = ku();
function ga(e, t, r) {
  var n = g.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
var Hu = Number(ou.split(".")[0]), Os = function(t, r) {
  typeof t == "function" ? t(r) : W(t) === "object" && t && "current" in t && (t.current = r);
}, Cn = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  var o = r.filter(Boolean);
  return o.length <= 1 ? o[0] : function(a) {
    r.forEach(function(i) {
      Os(i, a);
    });
  };
}, va = function() {
  for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n];
  return ga(function() {
    return Cn.apply(void 0, r);
  }, r, function(o, a) {
    return o.length !== a.length || o.every(function(i, s) {
      return i !== a[s];
    });
  });
}, pa = function(t) {
  var r, n;
  if (!t)
    return !1;
  if ($s(t) && Hu >= 19)
    return !0;
  var o = Bn.isMemo(t) ? t.type.type : t.type;
  return !(typeof o == "function" && !((r = o.prototype) !== null && r !== void 0 && r.render) && o.$$typeof !== Bn.ForwardRef || typeof t == "function" && !((n = t.prototype) !== null && n !== void 0 && n.render) && t.$$typeof !== Bn.ForwardRef);
};
function $s(e) {
  return /* @__PURE__ */ nu(e) && !xs(e);
}
var Ps = function(t) {
  if (t && $s(t)) {
    var r = t;
    return r.props.propertyIsEnumerable("ref") ? r.props.ref : r.ref;
  }
  return null;
};
function Ne(e, t) {
  if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
}
function Xa(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, ws(n.key), n);
  }
}
function Te(e, t, r) {
  return t && Xa(e.prototype, t), r && Xa(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function pr(e, t) {
  return pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, n) {
    return r.__proto__ = n, r;
  }, pr(e, t);
}
function _t(e, t) {
  if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && pr(e, t);
}
function hr(e) {
  return hr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, hr(e);
}
function ha() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ha = function() {
    return !!e;
  })();
}
function X(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Bu(e, t) {
  if (t && (W(t) == "object" || typeof t == "function")) return t;
  if (t !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return X(e);
}
function Ft(e) {
  var t = ha();
  return function() {
    var r, n = hr(e);
    if (t) {
      var o = hr(this).constructor;
      r = Reflect.construct(n, arguments, o);
    } else r = n.apply(this, arguments);
    return Bu(this, r);
  };
}
function po(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
  return n;
}
function zu(e) {
  if (Array.isArray(e)) return po(e);
}
function Ns(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null) return Array.from(e);
}
function ya(e, t) {
  if (e) {
    if (typeof e == "string") return po(e, t);
    var r = {}.toString.call(e).slice(8, -1);
    return r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set" ? Array.from(e) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? po(e, t) : void 0;
  }
}
function Wu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function H(e) {
  return zu(e) || Ns(e) || ya(e) || Wu();
}
var Ts = function(t) {
  return +setTimeout(t, 16);
}, Rs = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (Ts = function(t) {
  return window.requestAnimationFrame(t);
}, Rs = function(t) {
  return window.cancelAnimationFrame(t);
});
var Ka = 0, xn = /* @__PURE__ */ new Map();
function _s(e) {
  xn.delete(e);
}
var St = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  Ka += 1;
  var n = Ka;
  function o(a) {
    if (a === 0)
      _s(n), t();
    else {
      var i = Ts(function() {
        o(a - 1);
      });
      xn.set(n, i);
    }
  }
  return o(r), n;
};
St.cancel = function(e) {
  var t = xn.get(e);
  return _s(e), Rs(t);
};
process.env.NODE_ENV !== "production" && (St.ids = function() {
  return xn;
});
function Fs(e) {
  if (Array.isArray(e)) return e;
}
function qu(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, o, a, i, s = [], l = !0, u = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r) return;
        l = !1;
      } else for (; !(l = (n = a.call(r)).done) && (s.push(n.value), s.length !== t); l = !0) ;
    } catch (c) {
      u = !0, o = c;
    } finally {
      try {
        if (!l && r.return != null && (i = r.return(), Object(i) !== i)) return;
      } finally {
        if (u) throw o;
      }
    }
    return s;
  }
}
function Is() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function D(e, t) {
  return Fs(e) || qu(e, t) || ya(e, t) || Is();
}
function yr(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function Ae() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function ho(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var Ya = "data-rc-order", Qa = "data-rc-priority", Uu = "rc-util-key", yo = /* @__PURE__ */ new Map();
function Ms() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Uu;
}
function Sn(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Gu(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ba(e) {
  return Array.from((yo.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function js(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ae())
    return null;
  var r = t.csp, n = t.prepend, o = t.priority, a = o === void 0 ? 0 : o, i = Gu(n), s = i === "prependQueue", l = document.createElement("style");
  l.setAttribute(Ya, i), s && a && l.setAttribute(Qa, "".concat(a)), r != null && r.nonce && (l.nonce = r?.nonce), l.innerHTML = e;
  var u = Sn(t), c = u.firstChild;
  if (n) {
    if (s) {
      var d = (t.styles || ba(u)).filter(function(f) {
        if (!["prepend", "prependQueue"].includes(f.getAttribute(Ya)))
          return !1;
        var p = Number(f.getAttribute(Qa) || 0);
        return a >= p;
      });
      if (d.length)
        return u.insertBefore(l, d[d.length - 1].nextSibling), l;
    }
    u.insertBefore(l, c);
  } else
    u.appendChild(l);
  return l;
}
function As(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Sn(t);
  return (t.styles || ba(r)).find(function(n) {
    return n.getAttribute(Ms(t)) === e;
  });
}
function br(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = As(e, t);
  if (r) {
    var n = Sn(t);
    n.removeChild(r);
  }
}
function Xu(e, t) {
  var r = yo.get(e);
  if (!r || !ho(document, r)) {
    var n = js("", t), o = n.parentNode;
    yo.set(e, o), e.removeChild(n);
  }
}
function ft(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Sn(r), o = ba(n), a = P(P({}, r), {}, {
    styles: o
  });
  Xu(n, a);
  var i = As(t, a);
  if (i) {
    var s, l;
    if ((s = a.csp) !== null && s !== void 0 && s.nonce && i.nonce !== ((l = a.csp) === null || l === void 0 ? void 0 : l.nonce)) {
      var u;
      i.nonce = (u = a.csp) === null || u === void 0 ? void 0 : u.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var c = js(e, a);
  return c.setAttribute(Ms(a), t), c;
}
function Ku(e, t) {
  if (e == null) return {};
  var r = {};
  for (var n in e) if ({}.hasOwnProperty.call(e, n)) {
    if (t.indexOf(n) !== -1) continue;
    r[n] = e[n];
  }
  return r;
}
function at(e, t) {
  if (e == null) return {};
  var r, n, o = Ku(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) === -1 && {}.propertyIsEnumerable.call(e, r) && (o[r] = e[r]);
  }
  return o;
}
function bo(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = /* @__PURE__ */ new Set();
  function o(a, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, l = n.has(a);
    if (ce(!l, "Warning: There may be circular references"), l)
      return !1;
    if (a === i)
      return !0;
    if (r && s > 1)
      return !1;
    n.add(a);
    var u = s + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(i) || a.length !== i.length)
        return !1;
      for (var c = 0; c < a.length; c++)
        if (!o(a[c], i[c], u))
          return !1;
      return !0;
    }
    if (a && i && W(a) === "object" && W(i) === "object") {
      var d = Object.keys(a);
      return d.length !== Object.keys(i).length ? !1 : d.every(function(f) {
        return o(a[f], i[f], u);
      });
    }
    return !1;
  }
  return o(e, t);
}
var Yu = "%";
function Co(e) {
  return e.join(Yu);
}
var Qu = /* @__PURE__ */ (function() {
  function e(t) {
    Ne(this, e), w(this, "instanceId", void 0), w(this, "cache", /* @__PURE__ */ new Map()), w(this, "extracted", /* @__PURE__ */ new Set()), this.instanceId = t;
  }
  return Te(e, [{
    key: "get",
    value: function(r) {
      return this.opGet(Co(r));
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opGet",
    value: function(r) {
      return this.cache.get(r) || null;
    }
  }, {
    key: "update",
    value: function(r, n) {
      return this.opUpdate(Co(r), n);
    }
    /** A fast get cache with `get` concat. */
  }, {
    key: "opUpdate",
    value: function(r, n) {
      var o = this.cache.get(r), a = n(o);
      a === null ? this.cache.delete(r) : this.cache.set(r, a);
    }
  }]), e;
})(), Gt = "data-token-hash", Je = "data-css-hash", Zu = "data-cache-path", Ct = "__cssinjs_instance__";
function Ju() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat(Je, "]")) || [], r = document.head.firstChild;
    Array.from(t).forEach(function(o) {
      o[Ct] = o[Ct] || e, o[Ct] === e && document.head.insertBefore(o, r);
    });
    var n = {};
    Array.from(document.querySelectorAll("style[".concat(Je, "]"))).forEach(function(o) {
      var a = o.getAttribute(Je);
      if (n[a]) {
        if (o[Ct] === e) {
          var i;
          (i = o.parentNode) === null || i === void 0 || i.removeChild(o);
        }
      } else
        n[a] = !0;
    });
  }
  return new Qu(e);
}
var wr = /* @__PURE__ */ g.createContext({
  hashPriority: "low",
  cache: Ju(),
  defaultCache: !0
});
function ed(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var r = 0; r < e.length; r++)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
var Ca = /* @__PURE__ */ (function() {
  function e() {
    Ne(this, e), w(this, "cache", void 0), w(this, "keys", void 0), w(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return Te(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(r) {
      var n, o, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = {
        map: this.cache
      };
      return r.forEach(function(s) {
        if (!i)
          i = void 0;
        else {
          var l;
          i = (l = i) === null || l === void 0 || (l = l.map) === null || l === void 0 ? void 0 : l.get(s);
        }
      }), (n = i) !== null && n !== void 0 && n.value && a && (i.value[1] = this.cacheCallTimes++), (o = i) === null || o === void 0 ? void 0 : o.value;
    }
  }, {
    key: "get",
    value: function(r) {
      var n;
      return (n = this.internalGet(r, !0)) === null || n === void 0 ? void 0 : n[0];
    }
  }, {
    key: "has",
    value: function(r) {
      return !!this.internalGet(r);
    }
  }, {
    key: "set",
    value: function(r, n) {
      var o = this;
      if (!this.has(r)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var a = this.keys.reduce(function(u, c) {
            var d = D(u, 2), f = d[1];
            return o.internalGet(c)[1] < f ? [c, o.internalGet(c)[1]] : u;
          }, [this.keys[0], this.cacheCallTimes]), i = D(a, 1), s = i[0];
          this.delete(s);
        }
        this.keys.push(r);
      }
      var l = this.cache;
      r.forEach(function(u, c) {
        if (c === r.length - 1)
          l.set(u, {
            value: [n, o.cacheCallTimes++]
          });
        else {
          var d = l.get(u);
          d ? d.map || (d.map = /* @__PURE__ */ new Map()) : l.set(u, {
            map: /* @__PURE__ */ new Map()
          }), l = l.get(u).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(r, n) {
      var o = r.get(n[0]);
      if (n.length === 1) {
        var a;
        return o.map ? r.set(n[0], {
          map: o.map
        }) : r.delete(n[0]), (a = o.value) === null || a === void 0 ? void 0 : a[0];
      }
      var i = this.deleteByPath(o.map, n.slice(1));
      return (!o.map || o.map.size === 0) && !o.value && r.delete(n[0]), i;
    }
  }, {
    key: "delete",
    value: function(r) {
      if (this.has(r))
        return this.keys = this.keys.filter(function(n) {
          return !ed(n, r);
        }), this.deleteByPath(this.cache, r);
    }
  }]), e;
})();
w(Ca, "MAX_CACHE_SIZE", 20);
w(Ca, "MAX_CACHE_OFFSET", 5);
var Za = 0, Ls = /* @__PURE__ */ (function() {
  function e(t) {
    Ne(this, e), w(this, "derivatives", void 0), w(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = Za, t.length === 0 && vr(t.length > 0, "[Ant Design CSS-in-JS] Theme should have at least one derivative function."), Za += 1;
  }
  return Te(e, [{
    key: "getDerivativeToken",
    value: function(r) {
      return this.derivatives.reduce(function(n, o) {
        return o(r, n);
      }, void 0);
    }
  }]), e;
})(), zn = new Ca();
function xo(e) {
  var t = Array.isArray(e) ? e : [e];
  return zn.has(t) || zn.set(t, new Ls(t)), zn.get(t);
}
var td = /* @__PURE__ */ new WeakMap(), Wn = {};
function rd(e, t) {
  for (var r = td, n = 0; n < t.length; n += 1) {
    var o = t[n];
    r.has(o) || r.set(o, /* @__PURE__ */ new WeakMap()), r = r.get(o);
  }
  return r.has(Wn) || r.set(Wn, e()), r.get(Wn);
}
var Ja = /* @__PURE__ */ new WeakMap();
function dr(e) {
  var t = Ja.get(e) || "";
  return t || (Object.keys(e).forEach(function(r) {
    var n = e[r];
    t += r, n instanceof Ls ? t += n.id : n && W(n) === "object" ? t += dr(n) : t += n;
  }), t = yr(t), Ja.set(e, t)), t;
}
function ei(e, t) {
  return yr("".concat(t, "_").concat(dr(e)));
}
var So = Ae();
function ee(e) {
  return typeof e == "number" ? "".concat(e, "px") : e;
}
function dn(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1;
  if (o)
    return e;
  var a = P(P({}, n), {}, w(w({}, Gt, t), Je, r)), i = Object.keys(a).map(function(s) {
    var l = a[s];
    return l ? "".concat(s, '="').concat(l, '"') : null;
  }).filter(function(s) {
    return s;
  }).join(" ");
  return "<style ".concat(i, ">").concat(e, "</style>");
}
var en = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return "--".concat(r ? "".concat(r, "-") : "").concat(t).replace(/([a-z0-9])([A-Z])/g, "$1-$2").replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, "$1-$2").replace(/([a-z])([A-Z0-9])/g, "$1-$2").toLowerCase();
}, nd = function(t, r, n) {
  return Object.keys(t).length ? ".".concat(r).concat(n != null && n.scope ? ".".concat(n.scope) : "", "{").concat(Object.entries(t).map(function(o) {
    var a = D(o, 2), i = a[0], s = a[1];
    return "".concat(i, ":").concat(s, ";");
  }).join(""), "}") : "";
}, Vs = function(t, r, n) {
  var o = {}, a = {};
  return Object.entries(t).forEach(function(i) {
    var s, l, u = D(i, 2), c = u[0], d = u[1];
    if (n != null && (s = n.preserve) !== null && s !== void 0 && s[c])
      a[c] = d;
    else if ((typeof d == "string" || typeof d == "number") && !(n != null && (l = n.ignore) !== null && l !== void 0 && l[c])) {
      var f, p = en(c, n?.prefix);
      o[p] = typeof d == "number" && !(n != null && (f = n.unitless) !== null && f !== void 0 && f[c]) ? "".concat(d, "px") : String(d), a[c] = "var(".concat(p, ")");
    }
  }), [a, nd(o, r, {
    scope: n?.scope
  })];
}, ti = process.env.NODE_ENV !== "test" && Ae() ? g.useLayoutEffect : g.useEffect, Xt = function(t, r) {
  var n = g.useRef(!0);
  ti(function() {
    return t(n.current);
  }, r), ti(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, ri = function(t, r) {
  Xt(function(n) {
    if (!n)
      return t();
  }, r);
}, od = P({}, g), ni = od.useInsertionEffect, ad = function(t, r, n) {
  g.useMemo(t, n), Xt(function() {
    return r(!0);
  }, n);
}, id = ni ? function(e, t, r) {
  return ni(function() {
    return e(), t();
  }, r);
} : ad, sd = P({}, g), ld = sd.useInsertionEffect, cd = function(t) {
  var r = [], n = !1;
  function o(a) {
    if (n) {
      process.env.NODE_ENV !== "production" && vr(!1, "[Ant Design CSS-in-JS] You are registering a cleanup function after unmount, which will not have any effect.");
      return;
    }
    r.push(a);
  }
  return g.useEffect(function() {
    return n = !1, function() {
      n = !0, r.length && r.forEach(function(a) {
        return a();
      });
    };
  }, t), o;
}, ud = function() {
  return function(t) {
    t();
  };
}, dd = typeof ld < "u" ? cd : ud;
function fd() {
  return !1;
}
var Eo = !1;
function md() {
  return Eo;
}
const gd = process.env.NODE_ENV === "production" ? fd : md;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var qr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : null;
  if (qr && typeof qr.webpackHotUpdate == "function") {
    var vd = qr.webpackHotUpdate;
    qr.webpackHotUpdate = function() {
      return Eo = !0, setTimeout(function() {
        Eo = !1;
      }, 0), vd.apply(void 0, arguments);
    };
  }
}
function xa(e, t, r, n, o) {
  var a = g.useContext(wr), i = a.cache, s = [e].concat(H(t)), l = Co(s), u = dd([l]), c = gd(), d = function(h) {
    i.opUpdate(l, function(m) {
      var b = m || [void 0, void 0], y = D(b, 2), C = y[0], S = C === void 0 ? 0 : C, x = y[1], O = x;
      process.env.NODE_ENV !== "production" && x && c && (n?.(O, c), O = null);
      var E = O || r(), $ = [S, E];
      return h ? h($) : $;
    });
  };
  g.useMemo(
    function() {
      d();
    },
    /* eslint-disable react-hooks/exhaustive-deps */
    [l]
    /* eslint-enable */
  );
  var f = i.opGet(l);
  process.env.NODE_ENV !== "production" && !f && (d(), f = i.opGet(l));
  var p = f[1];
  return id(function() {
    o?.(p);
  }, function(v) {
    return d(function(h) {
      var m = D(h, 2), b = m[0], y = m[1];
      return v && b === 0 && o?.(p), [b + 1, y];
    }), function() {
      i.opUpdate(l, function(h) {
        var m = h || [], b = D(m, 2), y = b[0], C = y === void 0 ? 0 : y, S = b[1], x = C - 1;
        return x === 0 ? (u(function() {
          (v || !i.opGet(l)) && n?.(S, !1);
        }), null) : [C - 1, S];
      });
    };
  }, [l]), p;
}
var pd = {}, hd = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", $t = /* @__PURE__ */ new Map();
function yd(e) {
  $t.set(e, ($t.get(e) || 0) + 1);
}
function bd(e, t) {
  if (typeof document < "u") {
    var r = document.querySelectorAll("style[".concat(Gt, '="').concat(e, '"]'));
    r.forEach(function(n) {
      if (n[Ct] === t) {
        var o;
        (o = n.parentNode) === null || o === void 0 || o.removeChild(n);
      }
    });
  }
}
var Cd = 0;
function xd(e, t) {
  $t.set(e, ($t.get(e) || 0) - 1);
  var r = /* @__PURE__ */ new Set();
  $t.forEach(function(n, o) {
    n <= 0 && r.add(o);
  }), $t.size - r.size > Cd && r.forEach(function(n) {
    bd(n, t), $t.delete(n);
  });
}
var Sd = function(t, r, n, o) {
  var a = n.getDerivativeToken(t), i = P(P({}, a), r);
  return o && (i = o(i)), i;
}, Ds = "token";
function Ed(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = Ie(wr), o = n.cache.instanceId, a = n.container, i = r.salt, s = i === void 0 ? "" : i, l = r.override, u = l === void 0 ? pd : l, c = r.formatToken, d = r.getComputedToken, f = r.cssVar, p = rd(function() {
    return Object.assign.apply(Object, [{}].concat(H(t)));
  }, t), v = dr(p), h = dr(u), m = f ? dr(f) : "", b = xa(Ds, [s, e.id, v, h, m], function() {
    var y, C = d ? d(p, u, e) : Sd(p, u, e, c), S = P({}, C), x = "";
    if (f) {
      var O = Vs(C, f.key, {
        prefix: f.prefix,
        ignore: f.ignore,
        unitless: f.unitless,
        preserve: f.preserve
      }), E = D(O, 2);
      C = E[0], x = E[1];
    }
    var $ = ei(C, s);
    C._tokenKey = $, S._tokenKey = ei(S, s);
    var N = (y = f?.key) !== null && y !== void 0 ? y : $;
    C._themeKey = N, yd(N);
    var _ = "".concat(hd, "-").concat(yr($));
    return C._hashId = _, [C, _, S, x, f?.key || ""];
  }, function(y) {
    xd(y[0]._themeKey, o);
  }, function(y) {
    var C = D(y, 4), S = C[0], x = C[3];
    if (f && x) {
      var O = ft(x, yr("css-variables-".concat(S._themeKey)), {
        mark: Je,
        prepend: "queue",
        attachTo: a,
        priority: -999
      });
      O[Ct] = o, O.setAttribute(Gt, S._themeKey);
    }
  });
  return b;
}
var wd = function(t, r, n) {
  var o = D(t, 5), a = o[2], i = o[3], s = o[4], l = n || {}, u = l.plain;
  if (!i)
    return null;
  var c = a._tokenKey, d = -999, f = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(d)
  }, p = dn(i, s, c, f, u);
  return [d, c, p];
}, Od = {
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
}, ks = "comm", Hs = "rule", Bs = "decl", $d = "@import", Pd = "@namespace", Nd = "@keyframes", Td = "@layer", zs = Math.abs, Sa = String.fromCharCode;
function Ws(e) {
  return e.trim();
}
function tn(e, t, r) {
  return e.replace(t, r);
}
function Rd(e, t, r) {
  return e.indexOf(t, r);
}
function zt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Kt(e, t, r) {
  return e.slice(t, r);
}
function nt(e) {
  return e.length;
}
function _d(e) {
  return e.length;
}
function Ur(e, t) {
  return t.push(e), e;
}
var En = 1, Yt = 1, qs = 0, Ge = 0, be = 0, er = "";
function Ea(e, t, r, n, o, a, i, s) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: En, column: Yt, length: i, return: "", siblings: s };
}
function Fd() {
  return be;
}
function Id() {
  return be = Ge > 0 ? zt(er, --Ge) : 0, Yt--, be === 10 && (Yt = 1, En--), be;
}
function et() {
  return be = Ge < qs ? zt(er, Ge++) : 0, Yt++, be === 10 && (Yt = 1, En++), be;
}
function xt() {
  return zt(er, Ge);
}
function rn() {
  return Ge;
}
function wn(e, t) {
  return Kt(er, e, t);
}
function Cr(e) {
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
function Md(e) {
  return En = Yt = 1, qs = nt(er = e), Ge = 0, [];
}
function jd(e) {
  return er = "", e;
}
function qn(e) {
  return Ws(wn(Ge - 1, wo(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ad(e) {
  for (; (be = xt()) && be < 33; )
    et();
  return Cr(e) > 2 || Cr(be) > 3 ? "" : " ";
}
function Ld(e, t) {
  for (; --t && et() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return wn(e, rn() + (t < 6 && xt() == 32 && et() == 32));
}
function wo(e) {
  for (; et(); )
    switch (be) {
      // ] ) " '
      case e:
        return Ge;
      // " '
      case 34:
      case 39:
        e !== 34 && e !== 39 && wo(be);
        break;
      // (
      case 40:
        e === 41 && wo(e);
        break;
      // \
      case 92:
        et();
        break;
    }
  return Ge;
}
function Vd(e, t) {
  for (; et() && e + be !== 57; )
    if (e + be === 84 && xt() === 47)
      break;
  return "/*" + wn(t, Ge - 1) + "*" + Sa(e === 47 ? e : et());
}
function Dd(e) {
  for (; !Cr(xt()); )
    et();
  return wn(e, Ge);
}
function kd(e) {
  return jd(nn("", null, null, null, [""], e = Md(e), 0, [0], e));
}
function nn(e, t, r, n, o, a, i, s, l) {
  for (var u = 0, c = 0, d = i, f = 0, p = 0, v = 0, h = 1, m = 1, b = 1, y = 0, C = "", S = o, x = a, O = n, E = C; m; )
    switch (v = y, y = et()) {
      // (
      case 40:
        if (v != 108 && zt(E, d - 1) == 58) {
          Rd(E += tn(qn(y), "&", "&\f"), "&\f", zs(u ? s[u - 1] : 0)) != -1 && (b = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        E += qn(y);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        E += Ad(v);
        break;
      // \
      case 92:
        E += Ld(rn() - 1, 7);
        continue;
      // /
      case 47:
        switch (xt()) {
          case 42:
          case 47:
            Ur(Hd(Vd(et(), rn()), t, r, l), l), (Cr(v || 1) == 5 || Cr(xt() || 1) == 5) && nt(E) && Kt(E, -1, void 0) !== " " && (E += " ");
            break;
          default:
            E += "/";
        }
        break;
      // {
      case 123 * h:
        s[u++] = nt(E) * b;
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
          case 59 + c:
            b == -1 && (E = tn(E, /\f/g, "")), p > 0 && (nt(E) - d || h === 0 && v === 47) && Ur(p > 32 ? ai(E + ";", n, r, d - 1, l) : ai(tn(E, " ", "") + ";", n, r, d - 2, l), l);
            break;
          // @ ;
          case 59:
            E += ";";
          // { rule/at-rule
          default:
            if (Ur(O = oi(E, t, r, u, c, o, s, C, S = [], x = [], d, a), a), y === 123)
              if (c === 0)
                nn(E, t, O, O, S, a, d, s, x);
              else {
                switch (f) {
                  // c(ontainer)
                  case 99:
                    if (zt(E, 3) === 110) break;
                  // l(ayer)
                  case 108:
                    if (zt(E, 2) === 97) break;
                  default:
                    c = 0;
                  // d(ocument) m(edia) s(upports)
                  case 100:
                  case 109:
                  case 115:
                }
                c ? nn(e, O, O, n && Ur(oi(e, O, O, 0, 0, o, s, C, o, S = [], d, x), x), o, x, d, s, n ? S : x) : nn(E, O, O, O, [""], x, 0, s, x);
              }
        }
        u = c = p = 0, h = b = 1, C = E = "", d = i;
        break;
      // :
      case 58:
        d = 1 + nt(E), p = v;
      default:
        if (h < 1) {
          if (y == 123)
            --h;
          else if (y == 125 && h++ == 0 && Id() == 125)
            continue;
        }
        switch (E += Sa(y), y * h) {
          // &
          case 38:
            b = c > 0 ? 1 : (E += "\f", -1);
            break;
          // ,
          case 44:
            s[u++] = (nt(E) - 1) * b, b = 1;
            break;
          // @
          case 64:
            xt() === 45 && (E += qn(et())), f = xt(), c = d = nt(C = E += Dd(rn())), y++;
            break;
          // -
          case 45:
            v === 45 && nt(E) == 2 && (h = 0);
        }
    }
  return a;
}
function oi(e, t, r, n, o, a, i, s, l, u, c, d) {
  for (var f = o - 1, p = o === 0 ? a : [""], v = _d(p), h = 0, m = 0, b = 0; h < n; ++h)
    for (var y = 0, C = Kt(e, f + 1, f = zs(m = i[h])), S = e; y < v; ++y)
      (S = Ws(m > 0 ? p[y] + " " + C : tn(C, /&\f/g, p[y]))) && (l[b++] = S);
  return Ea(e, t, r, o === 0 ? Hs : s, l, u, c, d);
}
function Hd(e, t, r, n) {
  return Ea(e, t, r, ks, Sa(Fd()), Kt(e, 2, -2), 0, n);
}
function ai(e, t, r, n, o) {
  return Ea(e, t, r, Bs, Kt(e, 0, n), Kt(e, n + 1, -1), n, o);
}
function Oo(e, t) {
  for (var r = "", n = 0; n < e.length; n++)
    r += t(e[n], n, e, t) || "";
  return r;
}
function Bd(e, t, r, n) {
  switch (e.type) {
    case Td:
      if (e.children.length) break;
    case $d:
    case Pd:
    case Bs:
      return e.return = e.return || e.value;
    case ks:
      return "";
    case Nd:
      return e.return = e.value + "{" + Oo(e.children, n) + "}";
    case Hs:
      if (!nt(e.value = e.props.join(","))) return "";
  }
  return nt(r = Oo(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function Us(e, t) {
  var r = t.path, n = t.parentSelectors;
  ce(!1, "[Ant Design CSS-in-JS] ".concat(r ? "Error in ".concat(r, ": ") : "").concat(e).concat(n.length ? " Selector: ".concat(n.join(" | ")) : ""));
}
var zd = function(t, r, n) {
  if (t === "content") {
    var o = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, a = ["normal", "none", "initial", "inherit", "unset"];
    (typeof r != "string" || a.indexOf(r) === -1 && !o.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")) && Us("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(r, "\"'`."), n);
  }
}, Wd = function(t, r, n) {
  t === "animation" && n.hashId && r !== "none" && Us("You seem to be using hashed animation '".concat(r, "', in which case 'animationName' with Keyframe as value is recommended."), n);
}, ii = "data-ant-cssinjs-cache-path", Gs = "_FILE_STYLE__", Tt, Xs = !0;
function qd() {
  if (!Tt && (Tt = {}, Ae())) {
    var e = document.createElement("div");
    e.className = ii, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(o) {
      var a = o.split(":"), i = D(a, 2), s = i[0], l = i[1];
      Tt[s] = l;
    });
    var r = document.querySelector("style[".concat(ii, "]"));
    if (r) {
      var n;
      Xs = !1, (n = r.parentNode) === null || n === void 0 || n.removeChild(r);
    }
    document.body.removeChild(e);
  }
}
function Ud(e) {
  return qd(), !!Tt[e];
}
function Gd(e) {
  var t = Tt[e], r = null;
  if (t && Ae())
    if (Xs)
      r = Gs;
    else {
      var n = document.querySelector("style[".concat(Je, '="').concat(Tt[e], '"]'));
      n ? r = n.innerHTML : delete Tt[e];
    }
  return [r, t];
}
var Ks = "_skip_check_", Ys = "_multi_value_";
function on(e) {
  var t = Oo(kd(e), Bd);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Xd(e) {
  return W(e) === "object" && e && (Ks in e || Ys in e);
}
function si(e, t, r) {
  if (!t)
    return e;
  var n = ".".concat(t), o = r === "low" ? ":where(".concat(n, ")") : n, a = e.split(",").map(function(i) {
    var s, l = i.trim().split(/\s+/), u = l[0] || "", c = ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || "";
    return u = "".concat(c).concat(o).concat(u.slice(c.length)), [u].concat(H(l.slice(1))).join(" ");
  });
  return a.join(",");
}
var Kd = function e(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, o = n.root, a = n.injectHash, i = n.parentSelectors, s = r.hashId, l = r.layer, u = r.path, c = r.hashPriority, d = r.transformers, f = d === void 0 ? [] : d, p = r.linters, v = p === void 0 ? [] : p, h = "", m = {};
  function b(S) {
    var x = S.getName(s);
    if (!m[x]) {
      var O = e(S.style, r, {
        root: !1,
        parentSelectors: i
      }), E = D(O, 1), $ = E[0];
      m[x] = "@keyframes ".concat(S.getName(s)).concat($);
    }
  }
  function y(S) {
    var x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return S.forEach(function(O) {
      Array.isArray(O) ? y(O, x) : O && x.push(O);
    }), x;
  }
  var C = y(Array.isArray(t) ? t : [t]);
  return C.forEach(function(S) {
    var x = typeof S == "string" && !o ? {} : S;
    if (typeof x == "string")
      h += "".concat(x, `
`);
    else if (x._keyframe)
      b(x);
    else {
      var O = f.reduce(function(E, $) {
        var N;
        return ($ == null || (N = $.visit) === null || N === void 0 ? void 0 : N.call($, E)) || E;
      }, x);
      Object.keys(O).forEach(function(E) {
        var $ = O[E];
        if (W($) === "object" && $ && (E !== "animationName" || !$._keyframe) && !Xd($)) {
          var N = !1, _ = E.trim(), I = !1;
          (o || a) && s ? _.startsWith("@") ? N = !0 : _ === "&" ? _ = si("", s, c) : _ = si(E, s, c) : o && !s && (_ === "&" || _ === "") && (_ = "", I = !0);
          var F = e($, r, {
            root: I,
            injectHash: N,
            parentSelectors: [].concat(H(i), [_])
          }), M = D(F, 2), R = M[0], j = M[1];
          m = P(P({}, m), j), h += "".concat(_).concat(R);
        } else {
          let B = function(k, U) {
            process.env.NODE_ENV !== "production" && (W($) !== "object" || !($ != null && $[Ks])) && [zd, Wd].concat(H(v)).forEach(function(K) {
              return K(k, U, {
                path: u,
                hashId: s,
                parentSelectors: i
              });
            });
            var Q = k.replace(/[A-Z]/g, function(K) {
              return "-".concat(K.toLowerCase());
            }), q = U;
            !Od[k] && typeof q == "number" && q !== 0 && (q = "".concat(q, "px")), k === "animationName" && U !== null && U !== void 0 && U._keyframe && (b(U), q = U.getName(s)), h += "".concat(Q, ":").concat(q, ";");
          };
          var L, A = (L = $?.value) !== null && L !== void 0 ? L : $;
          W($) === "object" && $ !== null && $ !== void 0 && $[Ys] && Array.isArray(A) ? A.forEach(function(k) {
            B(E, k);
          }) : B(E, A);
        }
      });
    }
  }), o ? l && (h && (h = "@layer ".concat(l.name, " {").concat(h, "}")), l.dependencies && (m["@layer ".concat(l.name)] = l.dependencies.map(function(S) {
    return "@layer ".concat(S, ", ").concat(l.name, ";");
  }).join(`
`))) : h = "{".concat(h, "}"), [h, m];
};
function Qs(e, t) {
  return yr("".concat(e.join("%")).concat(t));
}
function Yd() {
  return null;
}
var Zs = "style";
function $o(e, t) {
  var r = e.token, n = e.path, o = e.hashId, a = e.layer, i = e.nonce, s = e.clientOnly, l = e.order, u = l === void 0 ? 0 : l, c = g.useContext(wr), d = c.autoClear, f = c.mock, p = c.defaultCache, v = c.hashPriority, h = c.container, m = c.ssrInline, b = c.transformers, y = c.linters, C = c.cache, S = c.layer, x = r._tokenKey, O = [x];
  S && O.push("layer"), O.push.apply(O, H(n));
  var E = So;
  process.env.NODE_ENV !== "production" && f !== void 0 && (E = f === "client");
  var $ = xa(
    Zs,
    O,
    // Create cache if needed
    function() {
      var M = O.join("|");
      if (Ud(M)) {
        var R = Gd(M), j = D(R, 2), L = j[0], A = j[1];
        if (L)
          return [L, x, A, {}, s, u];
      }
      var B = t(), k = Kd(B, {
        hashId: o,
        hashPriority: v,
        layer: S ? a : void 0,
        path: n.join("-"),
        transformers: b,
        linters: y
      }), U = D(k, 2), Q = U[0], q = U[1], K = on(Q), G = Qs(O, K);
      return [K, x, G, q, s, u];
    },
    // Remove cache if no need
    function(M, R) {
      var j = D(M, 3), L = j[2];
      (R || d) && So && br(L, {
        mark: Je,
        attachTo: h
      });
    },
    // Effect: Inject style here
    function(M) {
      var R = D(M, 4), j = R[0];
      R[1];
      var L = R[2], A = R[3];
      if (E && j !== Gs) {
        var B = {
          mark: Je,
          prepend: S ? !1 : "queue",
          attachTo: h,
          priority: u
        }, k = typeof i == "function" ? i() : i;
        k && (B.csp = {
          nonce: k
        });
        var U = [], Q = [];
        Object.keys(A).forEach(function(K) {
          K.startsWith("@layer") ? U.push(K) : Q.push(K);
        }), U.forEach(function(K) {
          ft(on(A[K]), "_layer-".concat(K), P(P({}, B), {}, {
            prepend: !0
          }));
        });
        var q = ft(j, L, B);
        q[Ct] = C.instanceId, q.setAttribute(Gt, x), process.env.NODE_ENV !== "production" && q.setAttribute(Zu, O.join("|")), Q.forEach(function(K) {
          ft(on(A[K]), "_effect-".concat(K), B);
        });
      }
    }
  ), N = D($, 3), _ = N[0], I = N[1], F = N[2];
  return function(M) {
    var R;
    return !m || E || !p ? R = /* @__PURE__ */ g.createElement(Yd, null) : R = /* @__PURE__ */ g.createElement("style", ue({}, w(w({}, Gt, I), Je, F), {
      dangerouslySetInnerHTML: {
        __html: _
      }
    })), /* @__PURE__ */ g.createElement(g.Fragment, null, R, M);
  };
}
var Qd = function(t, r, n) {
  var o = D(t, 6), a = o[0], i = o[1], s = o[2], l = o[3], u = o[4], c = o[5], d = n || {}, f = d.plain;
  if (u)
    return null;
  var p = a, v = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  };
  return p = dn(a, i, s, v, f), l && Object.keys(l).forEach(function(h) {
    if (!r[h]) {
      r[h] = !0;
      var m = on(l[h]), b = dn(m, i, "_effect-".concat(h), v, f);
      h.startsWith("@layer") ? p = b + p : p += b;
    }
  }), [c, s, p];
}, Js = "cssVar", Zd = function(t, r) {
  var n = t.key, o = t.prefix, a = t.unitless, i = t.ignore, s = t.token, l = t.scope, u = l === void 0 ? "" : l, c = Ie(wr), d = c.cache.instanceId, f = c.container, p = s._tokenKey, v = [].concat(H(t.path), [n, u, p]), h = xa(Js, v, function() {
    var m = r(), b = Vs(m, n, {
      prefix: o,
      unitless: a,
      ignore: i,
      scope: u
    }), y = D(b, 2), C = y[0], S = y[1], x = Qs(v, S);
    return [C, S, x, n];
  }, function(m) {
    var b = D(m, 3), y = b[2];
    So && br(y, {
      mark: Je,
      attachTo: f
    });
  }, function(m) {
    var b = D(m, 3), y = b[1], C = b[2];
    if (y) {
      var S = ft(y, C, {
        mark: Je,
        prepend: "queue",
        attachTo: f,
        priority: -999
      });
      S[Ct] = d, S.setAttribute(Gt, n);
    }
  });
  return h;
}, Jd = function(t, r, n) {
  var o = D(t, 4), a = o[1], i = o[2], s = o[3], l = n || {}, u = l.plain;
  if (!a)
    return null;
  var c = -999, d = {
    "data-rc-order": "prependQueue",
    "data-rc-priority": "".concat(c)
  }, f = dn(a, s, i, d, u);
  return [c, i, f];
};
w(w(w({}, Zs, Qd), Ds, wd), Js, Jd);
var Le = /* @__PURE__ */ (function() {
  function e(t, r) {
    Ne(this, e), w(this, "name", void 0), w(this, "style", void 0), w(this, "_keyframe", !0), this.name = t, this.style = r;
  }
  return Te(e, [{
    key: "getName",
    value: function() {
      var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return r ? "".concat(r, "-").concat(this.name) : this.name;
    }
  }]), e;
})();
function Lt(e) {
  return e.notSplit = !0, e;
}
Lt(["borderTop", "borderBottom"]), Lt(["borderTop"]), Lt(["borderBottom"]), Lt(["borderLeft", "borderRight"]), Lt(["borderLeft"]), Lt(["borderRight"]);
var wa = /* @__PURE__ */ da({});
function ef(e) {
  return Fs(e) || Ns(e) || ya(e) || Is();
}
function ot(e, t) {
  for (var r = e, n = 0; n < t.length; n += 1) {
    if (r == null)
      return;
    r = r[t[n]];
  }
  return r;
}
function el(e, t, r, n) {
  if (!t.length)
    return r;
  var o = ef(t), a = o[0], i = o.slice(1), s;
  return !e && typeof a == "number" ? s = [] : Array.isArray(e) ? s = H(e) : s = P({}, e), n && r === void 0 && i.length === 1 ? delete s[a][i[0]] : s[a] = el(s[a], i, r, n), s;
}
function Qe(e, t, r) {
  var n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1;
  return t.length && n && r === void 0 && !ot(e, t.slice(0, -1)) ? e : el(e, t, r, n);
}
function tf(e) {
  return W(e) === "object" && e !== null && Object.getPrototypeOf(e) === Object.prototype;
}
function li(e) {
  return Array.isArray(e) ? [] : {};
}
var rf = typeof Reflect > "u" ? Object.keys : Reflect.ownKeys;
function kt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = li(t[0]);
  return t.forEach(function(o) {
    function a(i, s) {
      var l = new Set(s), u = ot(o, i), c = Array.isArray(u);
      if (c || tf(u)) {
        if (!l.has(u)) {
          l.add(u);
          var d = ot(n, i);
          c ? n = Qe(n, i, []) : (!d || W(d) !== "object") && (n = Qe(n, i, li(u))), rf(u).forEach(function(f) {
            a([].concat(H(i), [f]), l);
          });
        }
      } else
        n = Qe(n, i, u);
    }
    a([]);
  }), n;
}
function tl() {
}
let ut = null;
function nf() {
  ut = null, Ss();
}
let rl = tl;
process.env.NODE_ENV !== "production" && (rl = (e, t, r) => {
  ce(e, `[antd: ${t}] ${r}`), process.env.NODE_ENV === "test" && nf();
});
const wt = rl, nl = /* @__PURE__ */ g.createContext({}), st = process.env.NODE_ENV !== "production" ? (e) => {
  const {
    strict: t
  } = g.useContext(nl), r = (n, o, a) => {
    if (!n)
      if (t === !1 && o === "deprecated") {
        const i = ut;
        ut || (ut = {}), ut[e] = ut[e] || [], ut[e].includes(a || "") || ut[e].push(a || ""), i || console.warn("[antd] There exists deprecated usage in your code:", ut);
      } else
        process.env.NODE_ENV !== "production" && wt(n, e, a);
  };
  return r.deprecated = (n, o, a, i) => {
    r(n, "deprecated", `\`${o}\` is deprecated. Please use \`${a}\` instead.${i ? ` ${i}` : ""}`);
  }, r;
} : () => {
  const e = () => {
  };
  return e.deprecated = tl, e;
}, of = /* @__PURE__ */ da(void 0);
var af = {
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
}, sf = {
  yearFormat: "YYYY",
  dayFormat: "D",
  cellMeridiemFormat: "A",
  monthBeforeYear: !0
}, lf = P(P({}, sf), {}, {
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
const ol = {
  placeholder: "Select time",
  rangePlaceholder: ["Start time", "End time"]
}, ci = {
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
  }, lf),
  timePickerLocale: Object.assign({}, ol)
}, He = "${label} is not a valid ${type}", Et = {
  locale: "en",
  Pagination: af,
  DatePicker: ci,
  TimePicker: ol,
  Calendar: ci,
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
        string: He,
        method: He,
        array: He,
        object: He,
        number: He,
        date: He,
        boolean: He,
        integer: He,
        float: He,
        regexp: He,
        email: He,
        url: He,
        hex: He
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
let an = Object.assign({}, Et.Modal), sn = [];
const ui = () => sn.reduce((e, t) => Object.assign(Object.assign({}, e), t), Et.Modal);
function cf(e) {
  if (e) {
    const t = Object.assign({}, e);
    return sn.push(t), an = ui(), () => {
      sn = sn.filter((r) => r !== t), an = ui();
    };
  }
  an = Object.assign({}, Et.Modal);
}
function al() {
  return an;
}
const Oa = /* @__PURE__ */ da(void 0), On = (e, t) => {
  const r = g.useContext(Oa), n = g.useMemo(() => {
    var a;
    const i = t || Et[e], s = (a = r?.[e]) !== null && a !== void 0 ? a : {};
    return Object.assign(Object.assign({}, typeof i == "function" ? i() : i), s || {});
  }, [e, t, r]), o = g.useMemo(() => {
    const a = r?.locale;
    return r?.exist && !a ? Et.locale : a;
  }, [r]);
  return [n, o];
}, il = "internalMark", sl = (e) => {
  const {
    locale: t = {},
    children: r,
    _ANT_MARK__: n
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const a = st("LocaleProvider");
    process.env.NODE_ENV !== "production" && a(n === il, "deprecated", "`LocaleProvider` is deprecated. Please use `locale` with `ConfigProvider` instead: http://u.ant.design/locale");
  }
  g.useEffect(() => cf(t?.Modal), [t]);
  const o = g.useMemo(() => Object.assign(Object.assign({}, t), {
    exist: !0
  }), [t]);
  return /* @__PURE__ */ g.createElement(Oa.Provider, {
    value: o
  }, r);
};
process.env.NODE_ENV !== "production" && (sl.displayName = "LocaleProvider");
const ll = {
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
}, xr = Object.assign(Object.assign({}, ll), {
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
}), we = Math.round;
function Un(e, t) {
  const r = e.replace(/^[^(]*\((.*)/, "$1").replace(/\).*/, "").match(/\d*\.?\d+%?/g) || [], n = r.map((o) => parseFloat(o));
  for (let o = 0; o < 3; o += 1)
    n[o] = t(n[o] || 0, r[o] || "", o);
  return r[3] ? n[3] = r[3].includes("%") ? n[3] / 100 : n[3] : n[3] = 1, n;
}
const di = (e, t, r) => r === 0 ? e : e / 100;
function sr(e, t) {
  const r = t || 255;
  return e > r ? r : e < 0 ? 0 : e;
}
class fe {
  constructor(t) {
    w(this, "isValid", !0), w(this, "r", 0), w(this, "g", 0), w(this, "b", 0), w(this, "a", 1), w(this, "_h", void 0), w(this, "_s", void 0), w(this, "_l", void 0), w(this, "_v", void 0), w(this, "_max", void 0), w(this, "_min", void 0), w(this, "_brightness", void 0);
    function r(n) {
      return n[0] in t && n[1] in t && n[2] in t;
    }
    if (t) if (typeof t == "string") {
      let o = function(a) {
        return n.startsWith(a);
      };
      const n = t.trim();
      /^#?[A-F\d]{3,8}$/i.test(n) ? this.fromHexString(n) : o("rgb") ? this.fromRgbString(n) : o("hsl") ? this.fromHslString(n) : (o("hsv") || o("hsb")) && this.fromHsvString(n);
    } else if (t instanceof fe)
      this.r = t.r, this.g = t.g, this.b = t.b, this.a = t.a, this._h = t._h, this._s = t._s, this._l = t._l, this._v = t._v;
    else if (r("rgb"))
      this.r = sr(t.r), this.g = sr(t.g), this.b = sr(t.b), this.a = typeof t.a == "number" ? sr(t.a, 1) : 1;
    else if (r("hsl"))
      this.fromHsl(t);
    else if (r("hsv"))
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
    const r = this.toHsv();
    return r.h = t, this._c(r);
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
    const r = t(this.r), n = t(this.g), o = t(this.b);
    return 0.2126 * r + 0.7152 * n + 0.0722 * o;
  }
  getHue() {
    if (typeof this._h > "u") {
      const t = this.getMax() - this.getMin();
      t === 0 ? this._h = 0 : this._h = we(60 * (this.r === this.getMax() ? (this.g - this.b) / t + (this.g < this.b ? 6 : 0) : this.g === this.getMax() ? (this.b - this.r) / t + 2 : (this.r - this.g) / t + 4));
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
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() - t / 100;
    return o < 0 && (o = 0), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  lighten(t = 10) {
    const r = this.getHue(), n = this.getSaturation();
    let o = this.getLightness() + t / 100;
    return o > 1 && (o = 1), this._c({
      h: r,
      s: n,
      l: o,
      a: this.a
    });
  }
  /**
   * Mix the current color a given amount with another color, from 0 to 100.
   * 0 means no mixing (return current color).
   */
  mix(t, r = 50) {
    const n = this._c(t), o = r / 100, a = (s) => (n[s] - this[s]) * o + this[s], i = {
      r: we(a("r")),
      g: we(a("g")),
      b: we(a("b")),
      a: we(a("a") * 100) / 100
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
    const r = this._c(t), n = this.a + r.a * (1 - this.a), o = (a) => we((this[a] * this.a + r[a] * r.a * (1 - this.a)) / n);
    return this._c({
      r: o("r"),
      g: o("g"),
      b: o("b"),
      a: n
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
    const r = (this.r || 0).toString(16);
    t += r.length === 2 ? r : "0" + r;
    const n = (this.g || 0).toString(16);
    t += n.length === 2 ? n : "0" + n;
    const o = (this.b || 0).toString(16);
    if (t += o.length === 2 ? o : "0" + o, typeof this.a == "number" && this.a >= 0 && this.a < 1) {
      const a = we(this.a * 255).toString(16);
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
    const t = this.getHue(), r = we(this.getSaturation() * 100), n = we(this.getLightness() * 100);
    return this.a !== 1 ? `hsla(${t},${r}%,${n}%,${this.a})` : `hsl(${t},${r}%,${n}%)`;
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
  _sc(t, r, n) {
    const o = this.clone();
    return o[t] = sr(r, n), o;
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
    const r = t.replace("#", "");
    function n(o, a) {
      return parseInt(r[o] + r[a || o], 16);
    }
    r.length < 6 ? (this.r = n(0), this.g = n(1), this.b = n(2), this.a = r[3] ? n(3) / 255 : 1) : (this.r = n(0, 1), this.g = n(2, 3), this.b = n(4, 5), this.a = r[6] ? n(6, 7) / 255 : 1);
  }
  fromHsl({
    h: t,
    s: r,
    l: n,
    a: o
  }) {
    if (this._h = t % 360, this._s = r, this._l = n, this.a = typeof o == "number" ? o : 1, r <= 0) {
      const f = we(n * 255);
      this.r = f, this.g = f, this.b = f;
    }
    let a = 0, i = 0, s = 0;
    const l = t / 60, u = (1 - Math.abs(2 * n - 1)) * r, c = u * (1 - Math.abs(l % 2 - 1));
    l >= 0 && l < 1 ? (a = u, i = c) : l >= 1 && l < 2 ? (a = c, i = u) : l >= 2 && l < 3 ? (i = u, s = c) : l >= 3 && l < 4 ? (i = c, s = u) : l >= 4 && l < 5 ? (a = c, s = u) : l >= 5 && l < 6 && (a = u, s = c);
    const d = n - u / 2;
    this.r = we((a + d) * 255), this.g = we((i + d) * 255), this.b = we((s + d) * 255);
  }
  fromHsv({
    h: t,
    s: r,
    v: n,
    a: o
  }) {
    this._h = t % 360, this._s = r, this._v = n, this.a = typeof o == "number" ? o : 1;
    const a = we(n * 255);
    if (this.r = a, this.g = a, this.b = a, r <= 0)
      return;
    const i = t / 60, s = Math.floor(i), l = i - s, u = we(n * (1 - r) * 255), c = we(n * (1 - r * l) * 255), d = we(n * (1 - r * (1 - l)) * 255);
    switch (s) {
      case 0:
        this.g = d, this.b = u;
        break;
      case 1:
        this.r = c, this.b = u;
        break;
      case 2:
        this.r = u, this.b = d;
        break;
      case 3:
        this.r = u, this.g = c;
        break;
      case 4:
        this.r = d, this.g = u;
        break;
      case 5:
      default:
        this.g = u, this.b = c;
        break;
    }
  }
  fromHsvString(t) {
    const r = Un(t, di);
    this.fromHsv({
      h: r[0],
      s: r[1],
      v: r[2],
      a: r[3]
    });
  }
  fromHslString(t) {
    const r = Un(t, di);
    this.fromHsl({
      h: r[0],
      s: r[1],
      l: r[2],
      a: r[3]
    });
  }
  fromRgbString(t) {
    const r = Un(t, (n, o) => (
      // Convert percentage to number. e.g. 50% -> 128
      o.includes("%") ? we(n / 100 * 255) : n
    ));
    this.r = r[0], this.g = r[1], this.b = r[2], this.a = r[3];
  }
}
var Gr = 2, fi = 0.16, uf = 0.05, df = 0.05, ff = 0.15, cl = 5, ul = 4, mf = [{
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
function mi(e, t, r) {
  var n;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? n = r ? Math.round(e.h) - Gr * t : Math.round(e.h) + Gr * t : n = r ? Math.round(e.h) + Gr * t : Math.round(e.h) - Gr * t, n < 0 ? n += 360 : n >= 360 && (n -= 360), n;
}
function gi(e, t, r) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var n;
  return r ? n = e.s - fi * t : t === ul ? n = e.s + fi : n = e.s + uf * t, n > 1 && (n = 1), r && t === cl && n > 0.1 && (n = 0.1), n < 0.06 && (n = 0.06), Math.round(n * 100) / 100;
}
function vi(e, t, r) {
  var n;
  return r ? n = e.v + df * t : n = e.v - ff * t, n = Math.max(0, Math.min(1, n)), Math.round(n * 100) / 100;
}
function Sr(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [], n = new fe(e), o = n.toHsv(), a = cl; a > 0; a -= 1) {
    var i = new fe({
      h: mi(o, a, !0),
      s: gi(o, a, !0),
      v: vi(o, a, !0)
    });
    r.push(i);
  }
  r.push(n);
  for (var s = 1; s <= ul; s += 1) {
    var l = new fe({
      h: mi(o, s),
      s: gi(o, s),
      v: vi(o, s)
    });
    r.push(l);
  }
  return t.theme === "dark" ? mf.map(function(u) {
    var c = u.index, d = u.amount;
    return new fe(t.backgroundColor || "#141414").mix(r[c], d).toHexString();
  }) : r.map(function(u) {
    return u.toHexString();
  });
}
var Gn = {
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
}, Po = ["#fff1f0", "#ffccc7", "#ffa39e", "#ff7875", "#ff4d4f", "#f5222d", "#cf1322", "#a8071a", "#820014", "#5c0011"];
Po.primary = Po[5];
var No = ["#fff2e8", "#ffd8bf", "#ffbb96", "#ff9c6e", "#ff7a45", "#fa541c", "#d4380d", "#ad2102", "#871400", "#610b00"];
No.primary = No[5];
var To = ["#fff7e6", "#ffe7ba", "#ffd591", "#ffc069", "#ffa940", "#fa8c16", "#d46b08", "#ad4e00", "#873800", "#612500"];
To.primary = To[5];
var Ro = ["#fffbe6", "#fff1b8", "#ffe58f", "#ffd666", "#ffc53d", "#faad14", "#d48806", "#ad6800", "#874d00", "#613400"];
Ro.primary = Ro[5];
var _o = ["#feffe6", "#ffffb8", "#fffb8f", "#fff566", "#ffec3d", "#fadb14", "#d4b106", "#ad8b00", "#876800", "#614700"];
_o.primary = _o[5];
var Fo = ["#fcffe6", "#f4ffb8", "#eaff8f", "#d3f261", "#bae637", "#a0d911", "#7cb305", "#5b8c00", "#3f6600", "#254000"];
Fo.primary = Fo[5];
var Io = ["#f6ffed", "#d9f7be", "#b7eb8f", "#95de64", "#73d13d", "#52c41a", "#389e0d", "#237804", "#135200", "#092b00"];
Io.primary = Io[5];
var Mo = ["#e6fffb", "#b5f5ec", "#87e8de", "#5cdbd3", "#36cfc9", "#13c2c2", "#08979c", "#006d75", "#00474f", "#002329"];
Mo.primary = Mo[5];
var fn = ["#e6f4ff", "#bae0ff", "#91caff", "#69b1ff", "#4096ff", "#1677ff", "#0958d9", "#003eb3", "#002c8c", "#001d66"];
fn.primary = fn[5];
var jo = ["#f0f5ff", "#d6e4ff", "#adc6ff", "#85a5ff", "#597ef7", "#2f54eb", "#1d39c4", "#10239e", "#061178", "#030852"];
jo.primary = jo[5];
var Ao = ["#f9f0ff", "#efdbff", "#d3adf7", "#b37feb", "#9254de", "#722ed1", "#531dab", "#391085", "#22075e", "#120338"];
Ao.primary = Ao[5];
var Lo = ["#fff0f6", "#ffd6e7", "#ffadd2", "#ff85c0", "#f759ab", "#eb2f96", "#c41d7f", "#9e1068", "#780650", "#520339"];
Lo.primary = Lo[5];
var Vo = ["#a6a6a6", "#999999", "#8c8c8c", "#808080", "#737373", "#666666", "#404040", "#1a1a1a", "#000000", "#000000"];
Vo.primary = Vo[5];
var Xn = {
  red: Po,
  volcano: No,
  orange: To,
  gold: Ro,
  yellow: _o,
  lime: Fo,
  green: Io,
  cyan: Mo,
  blue: fn,
  geekblue: jo,
  purple: Ao,
  magenta: Lo,
  grey: Vo
};
function gf(e, {
  generateColorPalettes: t,
  generateNeutralColorPalettes: r
}) {
  const {
    colorSuccess: n,
    colorWarning: o,
    colorError: a,
    colorInfo: i,
    colorPrimary: s,
    colorBgBase: l,
    colorTextBase: u
  } = e, c = t(s), d = t(n), f = t(o), p = t(a), v = t(i), h = r(l, u), m = e.colorLink || e.colorInfo, b = t(m), y = new fe(p[1]).mix(new fe(p[3]), 50).toHexString();
  return Object.assign(Object.assign({}, h), {
    colorPrimaryBg: c[1],
    colorPrimaryBgHover: c[2],
    colorPrimaryBorder: c[3],
    colorPrimaryBorderHover: c[4],
    colorPrimaryHover: c[5],
    colorPrimary: c[6],
    colorPrimaryActive: c[7],
    colorPrimaryTextHover: c[8],
    colorPrimaryText: c[9],
    colorPrimaryTextActive: c[10],
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
    colorLinkHover: b[4],
    colorLink: b[6],
    colorLinkActive: b[7],
    colorBgMask: new fe("#000").setA(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
const vf = (e) => {
  let t = e, r = e, n = e, o = e;
  return e < 6 && e >= 5 ? t = e + 1 : e < 16 && e >= 6 ? t = e + 2 : e >= 16 && (t = 16), e < 7 && e >= 5 ? r = 4 : e < 8 && e >= 7 ? r = 5 : e < 14 && e >= 8 ? r = 6 : e < 16 && e >= 14 ? r = 7 : e >= 16 && (r = 8), e < 6 && e >= 2 ? n = 1 : e >= 6 && (n = 2), e > 4 && e < 8 ? o = 4 : e >= 8 && (o = 6), {
    borderRadius: e,
    borderRadiusXS: n,
    borderRadiusSM: r,
    borderRadiusLG: t,
    borderRadiusOuter: o
  };
};
function pf(e) {
  const {
    motionUnit: t,
    motionBase: r,
    borderRadius: n,
    lineWidth: o
  } = e;
  return Object.assign({
    // motion
    motionDurationFast: `${(r + t).toFixed(1)}s`,
    motionDurationMid: `${(r + t * 2).toFixed(1)}s`,
    motionDurationSlow: `${(r + t * 3).toFixed(1)}s`,
    // line
    lineWidthBold: o + 1
  }, vf(n));
}
const hf = (e) => {
  const {
    controlHeight: t
  } = e;
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25
  };
};
function ln(e) {
  return (e + 8) / e;
}
function yf(e) {
  const t = Array.from({
    length: 10
  }).map((r, n) => {
    const o = n - 1, a = e * Math.pow(Math.E, o / 5), i = n > 1 ? Math.floor(a) : Math.ceil(a);
    return Math.floor(i / 2) * 2;
  });
  return t[1] = e, t.map((r) => ({
    size: r,
    lineHeight: ln(r)
  }));
}
const bf = (e) => {
  const t = yf(e), r = t.map((c) => c.size), n = t.map((c) => c.lineHeight), o = r[1], a = r[0], i = r[2], s = n[1], l = n[0], u = n[2];
  return {
    fontSizeSM: a,
    fontSize: o,
    fontSizeLG: i,
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: s,
    lineHeightLG: u,
    lineHeightSM: l,
    fontHeight: Math.round(s * o),
    fontHeightLG: Math.round(u * i),
    fontHeightSM: Math.round(l * a),
    lineHeightHeading1: n[6],
    lineHeightHeading2: n[5],
    lineHeightHeading3: n[4],
    lineHeightHeading4: n[3],
    lineHeightHeading5: n[2]
  };
};
function Cf(e) {
  const {
    sizeUnit: t,
    sizeStep: r
  } = e;
  return {
    sizeXXL: t * (r + 8),
    // 48
    sizeXL: t * (r + 4),
    // 32
    sizeLG: t * (r + 2),
    // 24
    sizeMD: t * (r + 1),
    // 20
    sizeMS: t * r,
    // 16
    size: t * r,
    // 16
    sizeSM: t * (r - 1),
    // 12
    sizeXS: t * (r - 2),
    // 8
    sizeXXS: t * (r - 3)
    // 4
  };
}
const We = (e, t) => new fe(e).setA(t).toRgbString(), lr = (e, t) => new fe(e).darken(t).toHexString(), xf = (e) => {
  const t = Sr(e);
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
}, Sf = (e, t) => {
  const r = e || "#fff", n = t || "#000";
  return {
    colorBgBase: r,
    colorTextBase: n,
    colorText: We(n, 0.88),
    colorTextSecondary: We(n, 0.65),
    colorTextTertiary: We(n, 0.45),
    colorTextQuaternary: We(n, 0.25),
    colorFill: We(n, 0.15),
    colorFillSecondary: We(n, 0.06),
    colorFillTertiary: We(n, 0.04),
    colorFillQuaternary: We(n, 0.02),
    colorBgSolid: We(n, 1),
    colorBgSolidHover: We(n, 0.75),
    colorBgSolidActive: We(n, 0.95),
    colorBgLayout: lr(r, 4),
    colorBgContainer: lr(r, 0),
    colorBgElevated: lr(r, 0),
    colorBgSpotlight: We(n, 0.85),
    colorBgBlur: "transparent",
    colorBorder: lr(r, 15),
    colorBorderSecondary: lr(r, 6)
  };
};
function Ef(e) {
  Gn.pink = Gn.magenta, Xn.pink = Xn.magenta;
  const t = Object.keys(ll).map((r) => {
    const n = e[r] === Gn[r] ? Xn[r] : Sr(e[r]);
    return Array.from({
      length: 10
    }, () => 1).reduce((o, a, i) => (o[`${r}-${i + 1}`] = n[i], o[`${r}${i + 1}`] = n[i], o), {});
  }).reduce((r, n) => (r = Object.assign(Object.assign({}, r), n), r), {});
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, e), t), gf(e, {
    generateColorPalettes: xf,
    generateNeutralColorPalettes: Sf
  })), bf(e.fontSize)), Cf(e)), hf(e)), pf(e));
}
const dl = xo(Ef), Do = {
  token: xr,
  override: {
    override: xr
  },
  hashed: !0
}, fl = /* @__PURE__ */ T.createContext(Do), mn = "ant", $n = "anticon", wf = (e, t) => t || (e ? `${mn}-${e}` : mn), Ce = /* @__PURE__ */ g.createContext({
  // We provide a default function for Context without provider
  getPrefixCls: wf,
  iconPrefixCls: $n
}), {
  Consumer: p0
} = Ce, pi = {};
function ml(e) {
  const t = g.useContext(Ce), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  } = t, a = t[e];
  return Object.assign(Object.assign({
    classNames: pi,
    styles: pi
  }, a), {
    getPrefixCls: r,
    direction: n,
    getPopupContainer: o
  });
}
const Of = `-ant-${Date.now()}-${Math.random()}`;
function $f(e, t) {
  const r = {}, n = (i, s) => {
    let l = i.clone();
    return l = s?.(l) || l, l.toRgbString();
  }, o = (i, s) => {
    const l = new fe(i), u = Sr(l.toRgbString());
    r[`${s}-color`] = n(l), r[`${s}-color-disabled`] = u[1], r[`${s}-color-hover`] = u[4], r[`${s}-color-active`] = u[6], r[`${s}-color-outline`] = l.clone().setA(0.2).toRgbString(), r[`${s}-color-deprecated-bg`] = u[0], r[`${s}-color-deprecated-border`] = u[2];
  };
  if (t.primaryColor) {
    o(t.primaryColor, "primary");
    const i = new fe(t.primaryColor), s = Sr(i.toRgbString());
    s.forEach((u, c) => {
      r[`primary-${c + 1}`] = u;
    }), r["primary-color-deprecated-l-35"] = n(i, (u) => u.lighten(35)), r["primary-color-deprecated-l-20"] = n(i, (u) => u.lighten(20)), r["primary-color-deprecated-t-20"] = n(i, (u) => u.tint(20)), r["primary-color-deprecated-t-50"] = n(i, (u) => u.tint(50)), r["primary-color-deprecated-f-12"] = n(i, (u) => u.setA(u.a * 0.12));
    const l = new fe(s[0]);
    r["primary-color-active-deprecated-f-30"] = n(l, (u) => u.setA(u.a * 0.3)), r["primary-color-active-deprecated-d-02"] = n(l, (u) => u.darken(2));
  }
  return t.successColor && o(t.successColor, "success"), t.warningColor && o(t.warningColor, "warning"), t.errorColor && o(t.errorColor, "error"), t.infoColor && o(t.infoColor, "info"), `
  :root {
    ${Object.keys(r).map((i) => `--${e}-${i}: ${r[i]};`).join(`
`)}
  }
  `.trim();
}
function Pf(e, t) {
  const r = $f(e, t);
  Ae() ? ft(r, `${Of}-dynamic-theme`) : process.env.NODE_ENV !== "production" && wt(!1, "ConfigProvider", "SSR do not support dynamic theme with css variables.");
}
const gn = /* @__PURE__ */ g.createContext(!1), gl = ({
  children: e,
  disabled: t
}) => {
  const r = g.useContext(gn);
  return /* @__PURE__ */ g.createElement(gn.Provider, {
    value: t ?? r
  }, e);
}, Qt = /* @__PURE__ */ g.createContext(void 0), Nf = ({
  children: e,
  size: t
}) => {
  const r = g.useContext(Qt);
  return /* @__PURE__ */ g.createElement(Qt.Provider, {
    value: t || r
  }, e);
};
function Tf() {
  const e = Ie(gn), t = Ie(Qt);
  return {
    componentDisabled: e,
    componentSize: t
  };
}
var vl = /* @__PURE__ */ Te(function e() {
  Ne(this, e);
}), pl = "CALC_UNIT", Rf = new RegExp(pl, "g");
function Kn(e) {
  return typeof e == "number" ? "".concat(e).concat(pl) : e;
}
var _f = /* @__PURE__ */ (function(e) {
  _t(r, e);
  var t = Ft(r);
  function r(n, o) {
    var a;
    Ne(this, r), a = t.call(this), w(X(a), "result", ""), w(X(a), "unitlessCssVar", void 0), w(X(a), "lowPriority", void 0);
    var i = W(n);
    return a.unitlessCssVar = o, n instanceof r ? a.result = "(".concat(n.result, ")") : i === "number" ? a.result = Kn(n) : i === "string" && (a.result = n), a;
  }
  return Te(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " + ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " + ").concat(Kn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result = "".concat(this.result, " - ").concat(o.getResult()) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " - ").concat(Kn(o))), this.lowPriority = !0, this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " * ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " * ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "div",
    value: function(o) {
      return this.lowPriority && (this.result = "(".concat(this.result, ")")), o instanceof r ? this.result = "".concat(this.result, " / ").concat(o.getResult(!0)) : (typeof o == "number" || typeof o == "string") && (this.result = "".concat(this.result, " / ").concat(o)), this.lowPriority = !1, this;
    }
  }, {
    key: "getResult",
    value: function(o) {
      return this.lowPriority || o ? "(".concat(this.result, ")") : this.result;
    }
  }, {
    key: "equal",
    value: function(o) {
      var a = this, i = o || {}, s = i.unit, l = !0;
      return typeof s == "boolean" ? l = s : Array.from(this.unitlessCssVar).some(function(u) {
        return a.result.includes(u);
      }) && (l = !1), this.result = this.result.replace(Rf, l ? "px" : ""), typeof this.lowPriority < "u" ? "calc(".concat(this.result, ")") : this.result;
    }
  }]), r;
})(vl), Ff = /* @__PURE__ */ (function(e) {
  _t(r, e);
  var t = Ft(r);
  function r(n) {
    var o;
    return Ne(this, r), o = t.call(this), w(X(o), "result", 0), n instanceof r ? o.result = n.result : typeof n == "number" && (o.result = n), o;
  }
  return Te(r, [{
    key: "add",
    value: function(o) {
      return o instanceof r ? this.result += o.result : typeof o == "number" && (this.result += o), this;
    }
  }, {
    key: "sub",
    value: function(o) {
      return o instanceof r ? this.result -= o.result : typeof o == "number" && (this.result -= o), this;
    }
  }, {
    key: "mul",
    value: function(o) {
      return o instanceof r ? this.result *= o.result : typeof o == "number" && (this.result *= o), this;
    }
  }, {
    key: "div",
    value: function(o) {
      return o instanceof r ? this.result /= o.result : typeof o == "number" && (this.result /= o), this;
    }
  }, {
    key: "equal",
    value: function() {
      return this.result;
    }
  }]), r;
})(vl), If = function(t, r) {
  var n = t === "css" ? _f : Ff;
  return function(o) {
    return new n(o, r);
  };
}, hi = function(t, r) {
  return "".concat([r, t.replace(/([A-Z]+)([A-Z][a-z]+)/g, "$1-$2").replace(/([a-z])([A-Z])/g, "$1-$2")].filter(Boolean).join("-"));
};
function mt(e) {
  var t = g.useRef();
  t.current = e;
  var r = g.useCallback(function() {
    for (var n, o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Zt(e) {
  var t = g.useRef(!1), r = g.useState(e), n = D(r, 2), o = n[0], a = n[1];
  g.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function i(s, l) {
    l && t.current || a(s);
  }
  return [o, i];
}
function Yn(e) {
  return e !== void 0;
}
function Mf(e, t) {
  var r = t || {}, n = r.defaultValue, o = r.value, a = r.onChange, i = r.postState, s = Zt(function() {
    return Yn(o) ? o : Yn(n) ? typeof n == "function" ? n() : n : typeof e == "function" ? e() : e;
  }), l = D(s, 2), u = l[0], c = l[1], d = o !== void 0 ? o : u, f = i ? i(d) : d, p = mt(a), v = Zt([d]), h = D(v, 2), m = h[0], b = h[1];
  ri(function() {
    var C = m[0];
    u !== C && p(u, C);
  }, [m]), ri(function() {
    Yn(o) || c(o);
  }, [o]);
  var y = mt(function(C, S) {
    c(C, S), b([d], S);
  });
  return [f, y];
}
function yi(e, t, r, n) {
  var o = P({}, t[e]);
  if (n != null && n.deprecatedTokens) {
    var a = n.deprecatedTokens;
    a.forEach(function(s) {
      var l = D(s, 2), u = l[0], c = l[1];
      if (process.env.NODE_ENV !== "production" && ce(!(o != null && o[u]), "Component Token `".concat(String(u), "` of ").concat(String(e), " is deprecated. Please use `").concat(String(c), "` instead.")), o != null && o[u] || o != null && o[c]) {
        var d;
        (d = o[c]) !== null && d !== void 0 || (o[c] = o?.[u]);
      }
    });
  }
  var i = P(P({}, r), o);
  return Object.keys(i).forEach(function(s) {
    i[s] === t[s] && delete i[s];
  }), i;
}
var hl = process.env.NODE_ENV !== "production" || typeof CSSINJS_STATISTIC < "u", ko = !0;
function vt() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  if (!hl)
    return Object.assign.apply(Object, [{}].concat(t));
  ko = !1;
  var n = {};
  return t.forEach(function(o) {
    if (W(o) === "object") {
      var a = Object.keys(o);
      a.forEach(function(i) {
        Object.defineProperty(n, i, {
          configurable: !0,
          enumerable: !0,
          get: function() {
            return o[i];
          }
        });
      });
    }
  }), ko = !0, n;
}
var bi = {};
function jf() {
}
var Af = function(t) {
  var r, n = t, o = jf;
  return hl && typeof Proxy < "u" && (r = /* @__PURE__ */ new Set(), n = new Proxy(t, {
    get: function(i, s) {
      if (ko) {
        var l;
        (l = r) === null || l === void 0 || l.add(s);
      }
      return i[s];
    }
  }), o = function(i, s) {
    var l;
    bi[i] = {
      global: Array.from(r),
      component: P(P({}, (l = bi[i]) === null || l === void 0 ? void 0 : l.component), s)
    };
  }), {
    token: n,
    keys: r,
    flush: o
  };
};
function Ci(e, t, r) {
  if (typeof r == "function") {
    var n;
    return r(vt(t, (n = t[e]) !== null && n !== void 0 ? n : {}));
  }
  return r ?? {};
}
function Lf(e) {
  return e === "js" ? {
    max: Math.max,
    min: Math.min
  } : {
    max: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "max(".concat(n.map(function(a) {
        return ee(a);
      }).join(","), ")");
    },
    min: function() {
      for (var r = arguments.length, n = new Array(r), o = 0; o < r; o++)
        n[o] = arguments[o];
      return "min(".concat(n.map(function(a) {
        return ee(a);
      }).join(","), ")");
    }
  };
}
var Vf = 1e3 * 60 * 10, Df = /* @__PURE__ */ (function() {
  function e() {
    Ne(this, e), w(this, "map", /* @__PURE__ */ new Map()), w(this, "objectIDMap", /* @__PURE__ */ new WeakMap()), w(this, "nextID", 0), w(this, "lastAccessBeat", /* @__PURE__ */ new Map()), w(this, "accessBeat", 0);
  }
  return Te(e, [{
    key: "set",
    value: function(r, n) {
      this.clear();
      var o = this.getCompositeKey(r);
      this.map.set(o, n), this.lastAccessBeat.set(o, Date.now());
    }
  }, {
    key: "get",
    value: function(r) {
      var n = this.getCompositeKey(r), o = this.map.get(n);
      return this.lastAccessBeat.set(n, Date.now()), this.accessBeat += 1, o;
    }
  }, {
    key: "getCompositeKey",
    value: function(r) {
      var n = this, o = r.map(function(a) {
        return a && W(a) === "object" ? "obj_".concat(n.getObjectID(a)) : "".concat(W(a), "_").concat(a);
      });
      return o.join("|");
    }
  }, {
    key: "getObjectID",
    value: function(r) {
      if (this.objectIDMap.has(r))
        return this.objectIDMap.get(r);
      var n = this.nextID;
      return this.objectIDMap.set(r, n), this.nextID += 1, n;
    }
  }, {
    key: "clear",
    value: function() {
      var r = this;
      if (this.accessBeat > 1e4) {
        var n = Date.now();
        this.lastAccessBeat.forEach(function(o, a) {
          n - o > Vf && (r.map.delete(a), r.lastAccessBeat.delete(a));
        }), this.accessBeat = 0;
      }
    }
  }]), e;
})(), xi = new Df();
function kf(e, t) {
  return T.useMemo(function() {
    var r = xi.get(t);
    if (r)
      return r;
    var n = e();
    return xi.set(t, n), n;
  }, t);
}
var Hf = function() {
  return {};
};
function Bf(e) {
  var t = e.useCSP, r = t === void 0 ? Hf : t, n = e.useToken, o = e.usePrefix, a = e.getResetStyles, i = e.getCommonStyle, s = e.getCompUnitless;
  function l(f, p, v, h) {
    var m = Array.isArray(f) ? f[0] : f;
    function b($) {
      return "".concat(String(m)).concat($.slice(0, 1).toUpperCase()).concat($.slice(1));
    }
    var y = h?.unitless || {}, C = typeof s == "function" ? s(f) : {}, S = P(P({}, C), {}, w({}, b("zIndexPopup"), !0));
    Object.keys(y).forEach(function($) {
      S[b($)] = y[$];
    });
    var x = P(P({}, h), {}, {
      unitless: S,
      prefixToken: b
    }), O = c(f, p, v, x), E = u(m, v, x);
    return function($) {
      var N = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $, _ = O($, N), I = D(_, 2), F = I[1], M = E(N), R = D(M, 2), j = R[0], L = R[1];
      return [j, F, L];
    };
  }
  function u(f, p, v) {
    var h = v.unitless, m = v.injectStyle, b = m === void 0 ? !0 : m, y = v.prefixToken, C = v.ignore, S = function(E) {
      var $ = E.rootCls, N = E.cssVar, _ = N === void 0 ? {} : N, I = n(), F = I.realToken;
      return Zd({
        path: [f],
        prefix: _.prefix,
        key: _.key,
        unitless: h,
        ignore: C,
        token: F,
        scope: $
      }, function() {
        var M = Ci(f, F, p), R = yi(f, F, M, {
          deprecatedTokens: v?.deprecatedTokens
        });
        return Object.keys(M).forEach(function(j) {
          R[y(j)] = R[j], delete R[j];
        }), R;
      }), null;
    }, x = function(E) {
      var $ = n(), N = $.cssVar;
      return [function(_) {
        return b && N ? /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(S, {
          rootCls: E,
          cssVar: N,
          component: f
        }), _) : _;
      }, N?.key];
    };
    return x;
  }
  function c(f, p, v) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = Array.isArray(f) ? f : [f, f], b = D(m, 1), y = b[0], C = m.join("-"), S = e.layer || {
      name: "antd"
    };
    return function(x) {
      var O = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x, E = n(), $ = E.theme, N = E.realToken, _ = E.hashId, I = E.token, F = E.cssVar, M = o(), R = M.rootPrefixCls, j = M.iconPrefixCls, L = r(), A = F ? "css" : "js", B = kf(function() {
        var G = /* @__PURE__ */ new Set();
        return F && Object.keys(h.unitless || {}).forEach(function(oe) {
          G.add(en(oe, F.prefix)), G.add(en(oe, hi(y, F.prefix)));
        }), If(A, G);
      }, [A, y, F?.prefix]), k = Lf(A), U = k.max, Q = k.min, q = {
        theme: $,
        token: I,
        hashId: _,
        nonce: function() {
          return L.nonce;
        },
        clientOnly: h.clientOnly,
        layer: S,
        // antd is always at top of styles
        order: h.order || -999
      };
      typeof a == "function" && $o(P(P({}, q), {}, {
        clientOnly: !1,
        path: ["Shared", R]
      }), function() {
        return a(I, {
          prefix: {
            rootPrefixCls: R,
            iconPrefixCls: j
          },
          csp: L
        });
      });
      var K = $o(P(P({}, q), {}, {
        path: [C, x, j]
      }), function() {
        if (h.injectStyle === !1)
          return [];
        var G = Af(I), oe = G.token, Y = G.flush, ie = Ci(y, N, v), Re = ".".concat(x), _e = yi(y, N, ie, {
          deprecatedTokens: h.deprecatedTokens
        });
        F && ie && W(ie) === "object" && Object.keys(ie).forEach(function(xe) {
          ie[xe] = "var(".concat(en(xe, hi(y, F.prefix)), ")");
        });
        var Ve = vt(oe, {
          componentCls: Re,
          prefixCls: x,
          iconCls: ".".concat(j),
          antCls: ".".concat(R),
          calc: B,
          // @ts-ignore
          max: U,
          // @ts-ignore
          min: Q
        }, F ? ie : _e), pe = p(Ve, {
          hashId: _,
          prefixCls: x,
          rootPrefixCls: R,
          iconPrefixCls: j
        });
        Y(y, _e);
        var Ee = typeof i == "function" ? i(Ve, x, O, h.resetFont) : null;
        return [h.resetStyle === !1 ? null : Ee, pe];
      });
      return [K, _];
    };
  }
  function d(f, p, v) {
    var h = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, m = c(f, p, v, P({
      resetStyle: !1,
      // Sub Style should default after root one
      order: -998
    }, h)), b = function(C) {
      var S = C.prefixCls, x = C.rootCls, O = x === void 0 ? S : x;
      return m(S, O), null;
    };
    return process.env.NODE_ENV !== "production" && (b.displayName = "SubStyle_".concat(String(Array.isArray(f) ? f.join(".") : f))), b;
  }
  return {
    genStyleHooks: l,
    genSubStyleComponent: d,
    genComponentStyleHook: c
  };
}
const $a = ["blue", "purple", "cyan", "green", "magenta", "pink", "red", "orange", "yellow", "volcano", "geekblue", "lime", "gold"], zf = "5.28.0";
function Qn(e) {
  return e >= 0 && e <= 255;
}
function cr(e, t) {
  const {
    r,
    g: n,
    b: o,
    a
  } = new fe(e).toRgb();
  if (a < 1)
    return e;
  const {
    r: i,
    g: s,
    b: l
  } = new fe(t).toRgb();
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((r - i * (1 - u)) / u), d = Math.round((n - s * (1 - u)) / u), f = Math.round((o - l * (1 - u)) / u);
    if (Qn(c) && Qn(d) && Qn(f))
      return new fe({
        r: c,
        g: d,
        b: f,
        a: Math.round(u * 100) / 100
      }).toRgbString();
  }
  return new fe({
    r,
    g: n,
    b: o,
    a: 1
  }).toRgbString();
}
var Wf = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function yl(e) {
  const {
    override: t
  } = e, r = Wf(e, ["override"]), n = Object.assign({}, t);
  Object.keys(xr).forEach((f) => {
    delete n[f];
  });
  const o = Object.assign(Object.assign({}, r), n), a = 480, i = 576, s = 768, l = 992, u = 1200, c = 1600;
  return o.motion === !1 && (o.motionDurationFast = "0s", o.motionDurationMid = "0s", o.motionDurationSlow = "0s"), Object.assign(Object.assign(Object.assign({}, o), {
    // ============== Background ============== //
    colorFillContent: o.colorFillSecondary,
    colorFillContentHover: o.colorFill,
    colorFillAlter: o.colorFillQuaternary,
    colorBgContainerDisabled: o.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: o.colorBgContainer,
    colorSplit: cr(o.colorBorderSecondary, o.colorBgContainer),
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
    colorErrorOutline: cr(o.colorErrorBg, o.colorBgContainer),
    colorWarningOutline: cr(o.colorWarningBg, o.colorBgContainer),
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
    controlOutline: cr(o.colorPrimaryBg, o.colorBgContainer),
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
    screenMDMax: l - 1,
    screenLG: l,
    screenLGMin: l,
    screenLGMax: u - 1,
    screenXL: u,
    screenXLMin: u,
    screenXLMax: c - 1,
    screenXXL: c,
    screenXXLMin: c,
    boxShadowPopoverArrow: "2px 2px 5px rgba(0, 0, 0, 0.05)",
    boxShadowCard: `
      0 1px 2px -2px ${new fe("rgba(0, 0, 0, 0.16)").toRgbString()},
      0 3px 6px 0 ${new fe("rgba(0, 0, 0, 0.12)").toRgbString()},
      0 5px 12px 4px ${new fe("rgba(0, 0, 0, 0.09)").toRgbString()}
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
  }), n);
}
var Si = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const bl = {
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
}, qf = {
  motionBase: !0,
  motionUnit: !0
}, Uf = {
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
}, Cl = (e, t, r) => {
  const n = r.getDerivativeToken(e), {
    override: o
  } = t, a = Si(t, ["override"]);
  let i = Object.assign(Object.assign({}, n), {
    override: o
  });
  return i = yl(i), a && Object.entries(a).forEach(([s, l]) => {
    const {
      theme: u
    } = l, c = Si(l, ["theme"]);
    let d = c;
    u && (d = Cl(Object.assign(Object.assign({}, i), c), {
      override: c
    }, u)), i[s] = d;
  }), i;
};
function Ot() {
  const {
    token: e,
    hashed: t,
    theme: r,
    override: n,
    cssVar: o
  } = T.useContext(fl), a = `${zf}-${t || ""}`, i = r || dl, [s, l, u] = Ed(i, [xr, e], {
    salt: a,
    override: n,
    getComputedToken: Cl,
    // formatToken will not be consumed after 1.15.0 with getComputedToken.
    // But token will break if @ant-design/cssinjs is under 1.15.0 without it
    formatToken: yl,
    cssVar: o && {
      prefix: o.prefix,
      key: o.key,
      unitless: bl,
      ignore: qf,
      preserve: Uf
    }
  });
  return [i, u, t ? l : "", s, o];
}
const Gf = (e, t = !1) => ({
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
}), xl = () => ({
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
}), Xf = () => ({
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
}), Kf = (e) => ({
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
}), Yf = (e, t, r, n) => {
  const o = `[class^="${t}"], [class*=" ${t}"]`, a = r ? `.${r}` : o, i = {
    boxSizing: "border-box",
    "&::before, &::after": {
      boxSizing: "border-box"
    }
  };
  let s = {};
  return n !== !1 && (s = {
    fontFamily: e.fontFamily,
    fontSize: e.fontSize
  }), {
    [a]: Object.assign(Object.assign(Object.assign({}, s), i), {
      [o]: i
    })
  };
}, Qf = (e, t) => ({
  outline: `${ee(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
  outlineOffset: t ?? 1,
  transition: "outline-offset 0s, outline 0s"
}), Sl = (e, t) => ({
  "&:focus-visible": Qf(e, t)
}), El = (e) => ({
  [`.${e}`]: Object.assign(Object.assign({}, xl()), {
    [`.${e} .${e}-icon`]: {
      display: "block"
    }
  })
}), {
  genStyleHooks: Or,
  genComponentStyleHook: Zf,
  genSubStyleComponent: wl
} = Bf({
  usePrefix: () => {
    const {
      getPrefixCls: e,
      iconPrefixCls: t
    } = Ie(Ce);
    return {
      rootPrefixCls: e(),
      iconPrefixCls: t
    };
  },
  useToken: () => {
    const [e, t, r, n, o] = Ot();
    return {
      theme: e,
      realToken: t,
      hashId: r,
      token: n,
      cssVar: o
    };
  },
  useCSP: () => {
    const {
      csp: e
    } = Ie(Ce);
    return e ?? {};
  },
  getResetStyles: (e, t) => {
    var r;
    const n = Kf(e);
    return [n, {
      "&": n
    }, El((r = t?.prefix.iconPrefixCls) !== null && r !== void 0 ? r : $n)];
  },
  getCommonStyle: Yf,
  getCompUnitless: () => bl
}), Jf = (e, t) => {
  const [r, n] = Ot();
  return $o({
    token: n,
    hashId: "",
    path: ["ant-design-icons", e],
    nonce: () => t?.nonce,
    layer: {
      name: "antd"
    }
  }, () => El(e));
}, em = Object.assign({}, g), {
  useId: Ei
} = em, tm = () => "", rm = typeof Ei > "u" ? tm : Ei;
function nm(e, t, r) {
  var n, o;
  const a = st("ConfigProvider"), i = e || {}, s = i.inherit === !1 || !t ? Object.assign(Object.assign({}, Do), {
    hashed: (n = t?.hashed) !== null && n !== void 0 ? n : Do.hashed,
    cssVar: t?.cssVar
  }) : t, l = rm();
  if (process.env.NODE_ENV !== "production") {
    const u = i.cssVar || s.cssVar, c = !!(typeof i.cssVar == "object" && (!((o = i.cssVar) === null || o === void 0) && o.key) || l);
    process.env.NODE_ENV !== "production" && a(!u || c, "breaking", "Missing key in `cssVar` config. Please upgrade to React 18 or set `cssVar.key` manually in each ConfigProvider inside `cssVar` enabled ConfigProvider.");
  }
  return ga(() => {
    var u, c;
    if (!e)
      return t;
    const d = Object.assign({}, s.components);
    Object.keys(e.components || {}).forEach((v) => {
      d[v] = Object.assign(Object.assign({}, d[v]), e.components[v]);
    });
    const f = `css-var-${l.replace(/:/g, "")}`, p = ((u = i.cssVar) !== null && u !== void 0 ? u : s.cssVar) && Object.assign(Object.assign(Object.assign({
      prefix: r?.prefixCls
    }, typeof s.cssVar == "object" ? s.cssVar : {}), typeof i.cssVar == "object" ? i.cssVar : {}), {
      key: typeof i.cssVar == "object" && ((c = i.cssVar) === null || c === void 0 ? void 0 : c.key) || f
    });
    return Object.assign(Object.assign(Object.assign({}, s), i), {
      token: Object.assign(Object.assign({}, s.token), i.token),
      components: d,
      cssVar: p
    });
  }, [i, s], (u, c) => u.some((d, f) => {
    const p = c[f];
    return !bo(d, p, !0);
  }));
}
var om = ["children"], Ol = /* @__PURE__ */ g.createContext({});
function am(e) {
  var t = e.children, r = at(e, om);
  return /* @__PURE__ */ g.createElement(Ol.Provider, {
    value: r
  }, t);
}
var im = /* @__PURE__ */ (function(e) {
  _t(r, e);
  var t = Ft(r);
  function r() {
    return Ne(this, r), t.apply(this, arguments);
  }
  return Te(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
})(g.Component);
function sm(e) {
  var t = g.useReducer(function(s) {
    return s + 1;
  }, 0), r = D(t, 2), n = r[1], o = g.useRef(e), a = mt(function() {
    return o.current;
  }), i = mt(function(s) {
    o.current = typeof s == "function" ? s(o.current) : s, n();
  });
  return [a, i];
}
var bt = "none", Xr = "appear", Kr = "enter", Yr = "leave", wi = "none", Ze = "prepare", Ht = "start", Bt = "active", Pa = "end", $l = "prepared";
function Oi(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function lm(e, t) {
  var r = {
    animationend: Oi("Animation", "AnimationEnd"),
    transitionend: Oi("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var cm = lm(Ae(), typeof window < "u" ? window : {}), Pl = {};
if (Ae()) {
  var um = document.createElement("div");
  Pl = um.style;
}
var Qr = {};
function Nl(e) {
  if (Qr[e])
    return Qr[e];
  var t = cm[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, o = 0; o < n; o += 1) {
      var a = r[o];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in Pl)
        return Qr[e] = t[a], Qr[e];
    }
  return "";
}
var Tl = Nl("animationend"), Rl = Nl("transitionend"), _l = !!(Tl && Rl), $i = Tl || "animationend", Pi = Rl || "transitionend";
function Ni(e, t) {
  if (!e) return null;
  if (W(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const dm = (function(e) {
  var t = ne();
  function r(o) {
    o && (o.removeEventListener(Pi, e), o.removeEventListener($i, e));
  }
  function n(o) {
    t.current && t.current !== o && r(t.current), o && o !== t.current && (o.addEventListener(Pi, e), o.addEventListener($i, e), t.current = o);
  }
  return g.useEffect(function() {
    return function() {
      r(t.current);
    };
  }, []), [n, r];
});
var Fl = Ae() ? au : Ue;
const fm = (function() {
  var e = g.useRef(null);
  function t() {
    St.cancel(e.current);
  }
  function r(n) {
    var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = St(function() {
      o <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, o - 1);
    });
    e.current = a;
  }
  return g.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
});
var mm = [Ze, Ht, Bt, Pa], gm = [Ze, $l], Il = !1, vm = !0;
function Ml(e) {
  return e === Bt || e === Pa;
}
const pm = (function(e, t, r) {
  var n = Zt(wi), o = D(n, 2), a = o[0], i = o[1], s = fm(), l = D(s, 2), u = l[0], c = l[1];
  function d() {
    i(Ze, !0);
  }
  var f = t ? gm : mm;
  return Fl(function() {
    if (a !== wi && a !== Pa) {
      var p = f.indexOf(a), v = f[p + 1], h = r(a);
      h === Il ? i(v, !0) : v && u(function(m) {
        function b() {
          m.isCanceled() || i(v, !0);
        }
        h === !0 ? b() : Promise.resolve(h).then(b);
      });
    }
  }, [e, a]), g.useEffect(function() {
    return function() {
      c();
    };
  }, []), [d, a];
});
function hm(e, t, r, n) {
  var o = n.motionEnter, a = o === void 0 ? !0 : o, i = n.motionAppear, s = i === void 0 ? !0 : i, l = n.motionLeave, u = l === void 0 ? !0 : l, c = n.motionDeadline, d = n.motionLeaveImmediately, f = n.onAppearPrepare, p = n.onEnterPrepare, v = n.onLeavePrepare, h = n.onAppearStart, m = n.onEnterStart, b = n.onLeaveStart, y = n.onAppearActive, C = n.onEnterActive, S = n.onLeaveActive, x = n.onAppearEnd, O = n.onEnterEnd, E = n.onLeaveEnd, $ = n.onVisibleChanged, N = Zt(), _ = D(N, 2), I = _[0], F = _[1], M = sm(bt), R = D(M, 2), j = R[0], L = R[1], A = Zt(null), B = D(A, 2), k = B[0], U = B[1], Q = j(), q = ne(!1), K = ne(null);
  function G() {
    return r();
  }
  var oe = ne(!1);
  function Y() {
    L(bt), U(null, !0);
  }
  var ie = mt(function(he) {
    var me = j();
    if (me !== bt) {
      var ke = G();
      if (!(he && !he.deadline && he.target !== ke)) {
        var lt = oe.current, yt;
        me === Xr && lt ? yt = x?.(ke, he) : me === Kr && lt ? yt = O?.(ke, he) : me === Yr && lt && (yt = E?.(ke, he)), lt && yt !== !1 && Y();
      }
    }
  }), Re = dm(ie), _e = D(Re, 1), Ve = _e[0], pe = function(me) {
    switch (me) {
      case Xr:
        return w(w(w({}, Ze, f), Ht, h), Bt, y);
      case Kr:
        return w(w(w({}, Ze, p), Ht, m), Bt, C);
      case Yr:
        return w(w(w({}, Ze, v), Ht, b), Bt, S);
      default:
        return {};
    }
  }, Ee = g.useMemo(function() {
    return pe(Q);
  }, [Q]), xe = pm(Q, !e, function(he) {
    if (he === Ze) {
      var me = Ee[Ze];
      return me ? me(G()) : Il;
    }
    if (se in Ee) {
      var ke;
      U(((ke = Ee[se]) === null || ke === void 0 ? void 0 : ke.call(Ee, G(), null)) || null);
    }
    return se === Bt && Q !== bt && (Ve(G()), c > 0 && (clearTimeout(K.current), K.current = setTimeout(function() {
      ie({
        deadline: !0
      });
    }, c))), se === $l && Y(), vm;
  }), V = D(xe, 2), J = V[0], se = V[1], Ke = Ml(se);
  oe.current = Ke;
  var de = ne(null);
  Fl(function() {
    if (!(q.current && de.current === t)) {
      F(t);
      var he = q.current;
      q.current = !0;
      var me;
      !he && t && s && (me = Xr), he && t && a && (me = Kr), (he && !t && u || !he && d && !t && u) && (me = Yr);
      var ke = pe(me);
      me && (e || ke[Ze]) ? (L(me), J()) : L(bt), de.current = t;
    }
  }, [t]), Ue(function() {
    // Cancel appear
    (Q === Xr && !s || // Cancel enter
    Q === Kr && !a || // Cancel leave
    Q === Yr && !u) && L(bt);
  }, [s, a, u]), Ue(function() {
    return function() {
      q.current = !1, clearTimeout(K.current);
    };
  }, []);
  var De = g.useRef(!1);
  Ue(function() {
    I && (De.current = !0), I !== void 0 && Q === bt && ((De.current || I) && $?.(I), De.current = !0);
  }, [I, Q]);
  var je = k;
  return Ee[Ze] && se === Ht && (je = P({
    transition: "none"
  }, je)), [Q, se, je, I ?? t];
}
function ym(e) {
  var t = e;
  W(e) === "object" && (t = e.transitionSupport);
  function r(o, a) {
    return !!(o.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ g.forwardRef(function(o, a) {
    var i = o.visible, s = i === void 0 ? !0 : i, l = o.removeOnLeave, u = l === void 0 ? !0 : l, c = o.forceRender, d = o.children, f = o.motionName, p = o.leavedClassName, v = o.eventProps, h = g.useContext(Ol), m = h.motion, b = r(o, m), y = ne(), C = ne();
    function S() {
      try {
        return y.current instanceof HTMLElement ? y.current : Lu(C.current);
      } catch {
        return null;
      }
    }
    var x = hm(b, s, S, o), O = D(x, 4), E = O[0], $ = O[1], N = O[2], _ = O[3], I = g.useRef(_);
    _ && (I.current = !0);
    var F = g.useCallback(function(B) {
      y.current = B, Os(a, B);
    }, [a]), M, R = P(P({}, v), {}, {
      visible: s
    });
    if (!d)
      M = null;
    else if (E === bt)
      _ ? M = d(P({}, R), F) : !u && I.current && p ? M = d(P(P({}, R), {}, {
        className: p
      }), F) : c || !u && !p ? M = d(P(P({}, R), {}, {
        style: {
          display: "none"
        }
      }), F) : M = null;
    else {
      var j;
      $ === Ze ? j = "prepare" : Ml($) ? j = "active" : $ === Ht && (j = "start");
      var L = Ni(f, "".concat(E, "-").concat(j));
      M = d(P(P({}, R), {}, {
        className: z(Ni(f, E), w(w({}, L, L && j), f, typeof f == "string")),
        style: N
      }), F);
    }
    if (/* @__PURE__ */ g.isValidElement(M) && pa(M)) {
      var A = Ps(M);
      A || (M = /* @__PURE__ */ g.cloneElement(M, {
        ref: F
      }));
    }
    return /* @__PURE__ */ g.createElement(im, {
      ref: C
    }, M);
  });
  return n.displayName = "CSSMotion", n;
}
const $r = ym(_l);
var Ho = "add", Bo = "keep", zo = "remove", Zn = "removed";
function bm(e) {
  var t;
  return e && W(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, P(P({}, t), {}, {
    key: String(t.key)
  });
}
function Wo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(bm);
}
function Cm() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, o = t.length, a = Wo(e), i = Wo(t);
  a.forEach(function(u) {
    for (var c = !1, d = n; d < o; d += 1) {
      var f = i[d];
      if (f.key === u.key) {
        n < d && (r = r.concat(i.slice(n, d).map(function(p) {
          return P(P({}, p), {}, {
            status: Ho
          });
        })), n = d), r.push(P(P({}, f), {}, {
          status: Bo
        })), n += 1, c = !0;
        break;
      }
    }
    c || r.push(P(P({}, u), {}, {
      status: zo
    }));
  }), n < o && (r = r.concat(i.slice(n).map(function(u) {
    return P(P({}, u), {}, {
      status: Ho
    });
  })));
  var s = {};
  r.forEach(function(u) {
    var c = u.key;
    s[c] = (s[c] || 0) + 1;
  });
  var l = Object.keys(s).filter(function(u) {
    return s[u] > 1;
  });
  return l.forEach(function(u) {
    r = r.filter(function(c) {
      var d = c.key, f = c.status;
      return d !== u || f !== zo;
    }), r.forEach(function(c) {
      c.key === u && (c.status = Bo);
    });
  }), r;
}
var xm = ["component", "children", "onVisibleChanged", "onAllRemoved"], Sm = ["status"], Em = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function wm(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $r, r = /* @__PURE__ */ (function(n) {
    _t(a, n);
    var o = Ft(a);
    function a() {
      var i;
      Ne(this, a);
      for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
        l[u] = arguments[u];
      return i = o.call.apply(o, [this].concat(l)), w(X(i), "state", {
        keyEntities: []
      }), w(X(i), "removeKey", function(c) {
        i.setState(function(d) {
          var f = d.keyEntities.map(function(p) {
            return p.key !== c ? p : P(P({}, p), {}, {
              status: Zn
            });
          });
          return {
            keyEntities: f
          };
        }, function() {
          var d = i.state.keyEntities, f = d.filter(function(p) {
            var v = p.status;
            return v !== Zn;
          }).length;
          f === 0 && i.props.onAllRemoved && i.props.onAllRemoved();
        });
      }), i;
    }
    return Te(a, [{
      key: "render",
      value: function() {
        var s = this, l = this.state.keyEntities, u = this.props, c = u.component, d = u.children, f = u.onVisibleChanged;
        u.onAllRemoved;
        var p = at(u, xm), v = c || g.Fragment, h = {};
        return Em.forEach(function(m) {
          h[m] = p[m], delete p[m];
        }), delete p.keys, /* @__PURE__ */ g.createElement(v, p, l.map(function(m, b) {
          var y = m.status, C = at(m, Sm), S = y === Ho || y === Bo;
          return /* @__PURE__ */ g.createElement(t, ue({}, h, {
            key: C.key,
            visible: S,
            eventProps: C,
            onVisibleChanged: function(O) {
              f?.(O, {
                key: C.key
              }), O || s.removeKey(C.key);
            }
          }), function(x, O) {
            return d(P(P({}, x), {}, {
              index: b
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(s, l) {
        var u = s.keys, c = l.keyEntities, d = Wo(u), f = Cm(c, d);
        return {
          keyEntities: f.filter(function(p) {
            var v = c.find(function(h) {
              var m = h.key;
              return p.key === m;
            });
            return !(v && v.status === Zn && p.status === zo);
          })
        };
      }
    }]), a;
  })(g.Component);
  return w(r, "defaultProps", {
    component: "div"
  }), r;
}
wm(_l);
const qo = /* @__PURE__ */ g.createContext(!0);
process.env.NODE_ENV !== "production" && (qo.displayName = "MotionCacheContext");
function Om(e) {
  const t = g.useContext(qo), {
    children: r
  } = e, [, n] = Ot(), {
    motion: o
  } = n, a = g.useRef(!1);
  return a.current || (a.current = t !== o), a.current ? /* @__PURE__ */ g.createElement(qo.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement(am, {
    motion: o
  }, r)) : r;
}
const jl = /* @__PURE__ */ g.memo(({
  dropdownMatchSelectWidth: e
}) => (st("ConfigProvider").deprecated(e === void 0, "dropdownMatchSelectWidth", "popupMatchSelectWidth"), null));
process.env.NODE_ENV !== "production" && (jl.displayName = "PropWarning");
const $m = process.env.NODE_ENV !== "production" ? jl : () => null;
var Pm = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let Uo = !1;
const Nm = process.env.NODE_ENV !== "production" ? (e) => {
  process.env.NODE_ENV !== "production" && wt(!Uo, e, "Static function can not consume context like dynamic theme. Please use 'App' component instead.");
} : (
  /* istanbul ignore next */
  null
), Tm = ["getTargetContainer", "getPopupContainer", "renderEmpty", "input", "pagination", "form", "select", "button"];
let vn, Al, Ll, Vl;
function cn() {
  return vn || mn;
}
function Rm() {
  return Al || $n;
}
function _m(e) {
  return Object.keys(e).some((t) => t.endsWith("Color"));
}
const Fm = (e) => {
  const {
    prefixCls: t,
    iconPrefixCls: r,
    theme: n,
    holderRender: o
  } = e;
  t !== void 0 && (vn = t), r !== void 0 && (Al = r), "holderRender" in e && (Vl = o), n && (_m(n) ? (process.env.NODE_ENV !== "production" && wt(!1, "ConfigProvider", "`config` of css variable theme is not work in v5. Please use new `theme` config instead."), Pf(cn(), n)) : Ll = n);
}, Im = () => ({
  getPrefixCls: (e, t) => t || (e ? `${cn()}-${e}` : cn()),
  getIconPrefixCls: Rm,
  getRootPrefixCls: () => vn || cn(),
  getTheme: () => Ll,
  holderRender: Vl
}), Mm = (e) => {
  const {
    children: t,
    csp: r,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    form: i,
    locale: s,
    componentSize: l,
    direction: u,
    space: c,
    splitter: d,
    virtual: f,
    dropdownMatchSelectWidth: p,
    popupMatchSelectWidth: v,
    popupOverflow: h,
    legacyLocale: m,
    parentContext: b,
    iconPrefixCls: y,
    theme: C,
    componentDisabled: S,
    segmented: x,
    statistic: O,
    spin: E,
    calendar: $,
    carousel: N,
    cascader: _,
    collapse: I,
    typography: F,
    checkbox: M,
    descriptions: R,
    divider: j,
    drawer: L,
    skeleton: A,
    steps: B,
    image: k,
    layout: U,
    list: Q,
    mentions: q,
    modal: K,
    progress: G,
    result: oe,
    slider: Y,
    breadcrumb: ie,
    menu: Re,
    pagination: _e,
    input: Ve,
    textArea: pe,
    empty: Ee,
    badge: xe,
    radio: V,
    rate: J,
    switch: se,
    transfer: Ke,
    avatar: de,
    message: De,
    tag: je,
    table: he,
    card: me,
    tabs: ke,
    timeline: lt,
    timePicker: yt,
    upload: Fr,
    notification: Ir,
    tree: Vn,
    colorPicker: or,
    datePicker: Mr,
    rangePicker: jr,
    flex: Ar,
    wave: Lr,
    dropdown: Vr,
    warning: Dr,
    tour: ar,
    tooltip: ge,
    popover: Ye,
    popconfirm: ir,
    floatButton: Gc,
    floatButtonGroup: Xc,
    variant: Kc,
    inputNumber: Yc,
    treeSelect: Qc
  } = e, ja = g.useCallback((ye, Pe) => {
    const {
      prefixCls: tt
    } = e;
    if (Pe)
      return Pe;
    const rt = tt || b.getPrefixCls("");
    return ye ? `${rt}-${ye}` : rt;
  }, [b.getPrefixCls, e.prefixCls]), kr = y || b.iconPrefixCls || $n, Hr = r || b.csp;
  Jf(kr, Hr);
  const Br = nm(C, b.theme, {
    prefixCls: ja("")
  });
  process.env.NODE_ENV !== "production" && (Uo = Uo || !!Br);
  const Dn = {
    csp: Hr,
    autoInsertSpaceInButton: n,
    alert: o,
    anchor: a,
    locale: s || m,
    direction: u,
    space: c,
    splitter: d,
    virtual: f,
    popupMatchSelectWidth: v ?? p,
    popupOverflow: h,
    getPrefixCls: ja,
    iconPrefixCls: kr,
    theme: Br,
    segmented: x,
    statistic: O,
    spin: E,
    calendar: $,
    carousel: N,
    cascader: _,
    collapse: I,
    typography: F,
    checkbox: M,
    descriptions: R,
    divider: j,
    drawer: L,
    skeleton: A,
    steps: B,
    image: k,
    input: Ve,
    textArea: pe,
    layout: U,
    list: Q,
    mentions: q,
    modal: K,
    progress: G,
    result: oe,
    slider: Y,
    breadcrumb: ie,
    menu: Re,
    pagination: _e,
    empty: Ee,
    badge: xe,
    radio: V,
    rate: J,
    switch: se,
    transfer: Ke,
    avatar: de,
    message: De,
    tag: je,
    table: he,
    card: me,
    tabs: ke,
    timeline: lt,
    timePicker: yt,
    upload: Fr,
    notification: Ir,
    tree: Vn,
    colorPicker: or,
    datePicker: Mr,
    rangePicker: jr,
    flex: Ar,
    wave: Lr,
    dropdown: Vr,
    warning: Dr,
    tour: ar,
    tooltip: ge,
    popover: Ye,
    popconfirm: ir,
    floatButton: Gc,
    floatButtonGroup: Xc,
    variant: Kc,
    inputNumber: Yc,
    treeSelect: Qc
  };
  process.env.NODE_ENV !== "production" && st("ConfigProvider")(!("autoInsertSpaceInButton" in e), "deprecated", "`autoInsertSpaceInButton` is deprecated. Please use `{ button: { autoInsertSpace: boolean }}` instead.");
  const jt = Object.assign({}, b);
  Object.keys(Dn).forEach((ye) => {
    Dn[ye] !== void 0 && (jt[ye] = Dn[ye]);
  }), Tm.forEach((ye) => {
    const Pe = e[ye];
    Pe && (jt[ye] = Pe);
  }), typeof n < "u" && (jt.button = Object.assign({
    autoInsertSpace: n
  }, jt.button));
  const At = ga(() => jt, jt, (ye, Pe) => {
    const tt = Object.keys(ye), rt = Object.keys(Pe);
    return tt.length !== rt.length || tt.some((zr) => ye[zr] !== Pe[zr]);
  }), {
    layer: Aa
  } = g.useContext(wr), Zc = g.useMemo(() => ({
    prefixCls: kr,
    csp: Hr,
    layer: Aa ? "antd" : void 0
  }), [kr, Hr, Aa]);
  let $e = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement($m, {
    dropdownMatchSelectWidth: p
  }), t);
  const La = g.useMemo(() => {
    var ye, Pe, tt, rt;
    return kt(((ye = Et.Form) === null || ye === void 0 ? void 0 : ye.defaultValidateMessages) || {}, ((tt = (Pe = At.locale) === null || Pe === void 0 ? void 0 : Pe.Form) === null || tt === void 0 ? void 0 : tt.defaultValidateMessages) || {}, ((rt = At.form) === null || rt === void 0 ? void 0 : rt.validateMessages) || {}, i?.validateMessages || {});
  }, [At, i?.validateMessages]);
  Object.keys(La).length > 0 && ($e = /* @__PURE__ */ g.createElement(of.Provider, {
    value: La
  }, $e)), s && ($e = /* @__PURE__ */ g.createElement(sl, {
    locale: s,
    _ANT_MARK__: il
  }, $e)), $e = /* @__PURE__ */ g.createElement(wa.Provider, {
    value: Zc
  }, $e), l && ($e = /* @__PURE__ */ g.createElement(Nf, {
    size: l
  }, $e)), $e = /* @__PURE__ */ g.createElement(Om, null, $e);
  const Jc = g.useMemo(() => {
    const ye = Br || {}, {
      algorithm: Pe,
      token: tt,
      components: rt,
      cssVar: zr
    } = ye, eu = Pm(ye, ["algorithm", "token", "components", "cssVar"]), Va = Pe && (!Array.isArray(Pe) || Pe.length > 0) ? xo(Pe) : dl, kn = {};
    Object.entries(rt || {}).forEach(([tu, ru]) => {
      const ct = Object.assign({}, ru);
      "algorithm" in ct && (ct.algorithm === !0 ? ct.theme = Va : (Array.isArray(ct.algorithm) || typeof ct.algorithm == "function") && (ct.theme = xo(ct.algorithm)), delete ct.algorithm), kn[tu] = ct;
    });
    const Da = Object.assign(Object.assign({}, xr), tt);
    return Object.assign(Object.assign({}, eu), {
      theme: Va,
      token: Da,
      components: kn,
      override: Object.assign({
        override: Da
      }, kn),
      cssVar: zr
    });
  }, [Br]);
  return C && ($e = /* @__PURE__ */ g.createElement(fl.Provider, {
    value: Jc
  }, $e)), At.warning && ($e = /* @__PURE__ */ g.createElement(nl.Provider, {
    value: At.warning
  }, $e)), S !== void 0 && ($e = /* @__PURE__ */ g.createElement(gl, {
    disabled: S
  }, $e)), /* @__PURE__ */ g.createElement(Ce.Provider, {
    value: At
  }, $e);
}, pt = (e) => {
  const t = g.useContext(Ce), r = g.useContext(Oa);
  return /* @__PURE__ */ g.createElement(Mm, Object.assign({
    parentContext: t,
    legacyLocale: r
  }, e));
};
pt.ConfigContext = Ce;
pt.SizeContext = Qt;
pt.config = Fm;
pt.useConfig = Tf;
Object.defineProperty(pt, "SizeContext", {
  get: () => (process.env.NODE_ENV !== "production" && wt(!1, "ConfigProvider", "ConfigProvider.SizeContext is deprecated. Please use `ConfigProvider.useConfig().componentSize` instead."), Qt)
});
process.env.NODE_ENV !== "production" && (pt.displayName = "ConfigProvider");
var jm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z" } }] }, name: "check-circle", theme: "filled" };
function Dl(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Am(e) {
  return Dl(e) instanceof ShadowRoot;
}
function Lm(e) {
  return Am(e) ? Dl(e) : null;
}
function Vm(e) {
  return e.replace(/-(.)/g, function(t, r) {
    return r.toUpperCase();
  });
}
function Dm(e, t) {
  ce(e, "[@ant-design/icons] ".concat(t));
}
function Ti(e) {
  return W(e) === "object" && typeof e.name == "string" && typeof e.theme == "string" && (W(e.icon) === "object" || typeof e.icon == "function");
}
function Ri() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  return Object.keys(e).reduce(function(t, r) {
    var n = e[r];
    switch (r) {
      case "class":
        t.className = n, delete t.class;
        break;
      default:
        delete t[r], t[Vm(r)] = n;
    }
    return t;
  }, {});
}
function Go(e, t, r) {
  return r ? /* @__PURE__ */ T.createElement(e.tag, P(P({
    key: t
  }, Ri(e.attrs)), r), (e.children || []).map(function(n, o) {
    return Go(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  })) : /* @__PURE__ */ T.createElement(e.tag, P({
    key: t
  }, Ri(e.attrs)), (e.children || []).map(function(n, o) {
    return Go(n, "".concat(t, "-").concat(e.tag, "-").concat(o));
  }));
}
function kl(e) {
  return Sr(e)[0];
}
function Hl(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var km = `
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
`, Hm = function(t) {
  var r = Ie(wa), n = r.csp, o = r.prefixCls, a = r.layer, i = km;
  o && (i = i.replace(/anticon/g, o)), a && (i = "@layer ".concat(a, ` {
`).concat(i, `
}`)), Ue(function() {
    var s = t.current, l = Lm(s);
    ft(i, "@ant-design-icons", {
      prepend: !a,
      csp: n,
      attachTo: l
    });
  }, []);
}, Bm = ["icon", "className", "onClick", "style", "primaryColor", "secondaryColor"], fr = {
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
};
function zm(e) {
  var t = e.primaryColor, r = e.secondaryColor;
  fr.primaryColor = t, fr.secondaryColor = r || kl(t), fr.calculated = !!r;
}
function Wm() {
  return P({}, fr);
}
var tr = function(t) {
  var r = t.icon, n = t.className, o = t.onClick, a = t.style, i = t.primaryColor, s = t.secondaryColor, l = at(t, Bm), u = g.useRef(), c = fr;
  if (i && (c = {
    primaryColor: i,
    secondaryColor: s || kl(i)
  }), Hm(u), Dm(Ti(r), "icon should be icon definiton, but got ".concat(r)), !Ti(r))
    return null;
  var d = r;
  return d && typeof d.icon == "function" && (d = P(P({}, d), {}, {
    icon: d.icon(c.primaryColor, c.secondaryColor)
  })), Go(d.icon, "svg-".concat(d.name), P(P({
    className: n,
    onClick: o,
    style: a,
    "data-icon": d.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }, l), {}, {
    ref: u
  }));
};
tr.displayName = "IconReact";
tr.getTwoToneColors = Wm;
tr.setTwoToneColors = zm;
function Bl(e) {
  var t = Hl(e), r = D(t, 2), n = r[0], o = r[1];
  return tr.setTwoToneColors({
    primaryColor: n,
    secondaryColor: o
  });
}
function qm() {
  var e = tr.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Um = ["className", "icon", "spin", "rotate", "tabIndex", "onClick", "twoToneColor"];
Bl(fn.primary);
var ht = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.className, n = e.icon, o = e.spin, a = e.rotate, i = e.tabIndex, s = e.onClick, l = e.twoToneColor, u = at(e, Um), c = g.useContext(wa), d = c.prefixCls, f = d === void 0 ? "anticon" : d, p = c.rootClassName, v = z(p, f, w(w({}, "".concat(f, "-").concat(n.name), !!n.name), "".concat(f, "-spin"), !!o || n.name === "loading"), r), h = i;
  h === void 0 && s && (h = -1);
  var m = a ? {
    msTransform: "rotate(".concat(a, "deg)"),
    transform: "rotate(".concat(a, "deg)")
  } : void 0, b = Hl(l), y = D(b, 2), C = y[0], S = y[1];
  return /* @__PURE__ */ g.createElement("span", ue({
    role: "img",
    "aria-label": n.name
  }, u, {
    ref: t,
    tabIndex: h,
    onClick: s,
    className: v
  }), /* @__PURE__ */ g.createElement(tr, {
    icon: n,
    primaryColor: C,
    secondaryColor: S,
    style: m
  }));
});
ht.displayName = "AntdIcon";
ht.getTwoToneColor = qm;
ht.setTwoToneColor = Bl;
var Gm = function(t, r) {
  return /* @__PURE__ */ g.createElement(ht, ue({}, t, {
    ref: r,
    icon: jm
  }));
}, zl = /* @__PURE__ */ g.forwardRef(Gm);
process.env.NODE_ENV !== "production" && (zl.displayName = "CheckCircleFilled");
var Xm = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64c247.4 0 448 200.6 448 448S759.4 960 512 960 64 759.4 64 512 264.6 64 512 64zm127.98 274.82h-.04l-.08.06L512 466.75 384.14 338.88c-.04-.05-.06-.06-.08-.06a.12.12 0 00-.07 0c-.03 0-.05.01-.09.05l-45.02 45.02a.2.2 0 00-.05.09.12.12 0 000 .07v.02a.27.27 0 00.06.06L466.75 512 338.88 639.86c-.05.04-.06.06-.06.08a.12.12 0 000 .07c0 .03.01.05.05.09l45.02 45.02a.2.2 0 00.09.05.12.12 0 00.07 0c.02 0 .04-.01.08-.05L512 557.25l127.86 127.87c.04.04.06.05.08.05a.12.12 0 00.07 0c.03 0 .05-.01.09-.05l45.02-45.02a.2.2 0 00.05-.09.12.12 0 000-.07v-.02a.27.27 0 00-.05-.06L557.25 512l127.87-127.86c.04-.04.05-.06.05-.08a.12.12 0 000-.07c0-.03-.01-.05-.05-.09l-45.02-45.02a.2.2 0 00-.09-.05.12.12 0 00-.07 0z" } }] }, name: "close-circle", theme: "filled" }, Km = function(t, r) {
  return /* @__PURE__ */ g.createElement(ht, ue({}, t, {
    ref: r,
    icon: Xm
  }));
}, Wl = /* @__PURE__ */ g.forwardRef(Km);
process.env.NODE_ENV !== "production" && (Wl.displayName = "CloseCircleFilled");
var Ym = { icon: { tag: "svg", attrs: { "fill-rule": "evenodd", viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z" } }] }, name: "close", theme: "outlined" }, Qm = function(t, r) {
  return /* @__PURE__ */ g.createElement(ht, ue({}, t, {
    ref: r,
    icon: Ym
  }));
}, Pn = /* @__PURE__ */ g.forwardRef(Qm);
process.env.NODE_ENV !== "production" && (Pn.displayName = "CloseOutlined");
var Zm = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "exclamation-circle", theme: "filled" }, Jm = function(t, r) {
  return /* @__PURE__ */ g.createElement(ht, ue({}, t, {
    ref: r,
    icon: Zm
  }));
}, ql = /* @__PURE__ */ g.forwardRef(Jm);
process.env.NODE_ENV !== "production" && (ql.displayName = "ExclamationCircleFilled");
var eg = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z" } }] }, name: "info-circle", theme: "filled" }, tg = function(t, r) {
  return /* @__PURE__ */ g.createElement(ht, ue({}, t, {
    ref: r,
    icon: eg
  }));
}, Ul = /* @__PURE__ */ g.forwardRef(tg);
process.env.NODE_ENV !== "production" && (Ul.displayName = "InfoCircleFilled");
var rg = `accept acceptCharset accessKey action allowFullScreen allowTransparency
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
    summary tabIndex target title type useMap value width wmode wrap`, ng = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`, og = "".concat(rg, " ").concat(ng).split(/[\s\n]+/), ag = "aria-", ig = "data-";
function _i(e, t) {
  return e.indexOf(t) === 0;
}
function Na(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r;
  t === !1 ? r = {
    aria: !0,
    data: !0,
    attr: !0
  } : t === !0 ? r = {
    aria: !0
  } : r = P({}, t);
  var n = {};
  return Object.keys(e).forEach(function(o) {
    // Aria
    (r.aria && (o === "role" || _i(o, ag)) || // Data
    r.data && _i(o, ig) || // Attr
    r.attr && og.includes(o)) && (n[o] = e[o]);
  }), n;
}
function sg(e) {
  return e && /* @__PURE__ */ T.isValidElement(e) && e.type === T.Fragment;
}
const lg = (e, t, r) => /* @__PURE__ */ T.isValidElement(e) ? /* @__PURE__ */ T.cloneElement(e, typeof r == "function" ? r(e.props || {}) : r) : t;
function Gl(e, t) {
  return lg(e, e, t);
}
const Xl = (e) => {
  const [, , , , t] = Ot();
  return t ? `${e}-css-var` : "";
};
var Fi = {
  /**
   * TAB
   */
  TAB: 9,
  /**
   * ESC
   */
  ESC: 27
}, cg = { icon: { tag: "svg", attrs: { viewBox: "0 0 1024 1024", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z" } }] }, name: "loading", theme: "outlined" }, ug = function(t, r) {
  return /* @__PURE__ */ g.createElement(ht, ue({}, t, {
    ref: r,
    icon: cg
  }));
}, Kl = /* @__PURE__ */ g.forwardRef(ug);
process.env.NODE_ENV !== "production" && (Kl.displayName = "LoadingOutlined");
function Ii(...e) {
  const t = {};
  return e.forEach((r) => {
    r && Object.keys(r).forEach((n) => {
      r[n] !== void 0 && (t[n] = r[n]);
    });
  }), t;
}
function Mi(e) {
  if (!e)
    return;
  const {
    closable: t,
    closeIcon: r
  } = e;
  return {
    closable: t,
    closeIcon: r
  };
}
function ji(e) {
  const {
    closable: t,
    closeIcon: r
  } = e || {};
  return T.useMemo(() => {
    if (
      // If `closable`, whatever rest be should be true
      !t && (t === !1 || r === !1 || r === null)
    )
      return !1;
    if (t === void 0 && r === void 0)
      return null;
    let n = {
      closeIcon: typeof r != "boolean" && r !== null ? r : void 0
    };
    return t && typeof t == "object" && (n = Object.assign(Object.assign({}, n), t)), n;
  }, [t, r]);
}
const dg = {}, fg = (e, t, r = dg) => {
  const n = ji(e), o = ji(t), [a] = On("global", Et.global), i = typeof n != "boolean" ? !!n?.disabled : !1, s = T.useMemo(() => Object.assign({
    closeIcon: /* @__PURE__ */ T.createElement(Pn, null)
  }, r), [r]), l = T.useMemo(() => n === !1 ? !1 : n ? Ii(s, o, n) : o === !1 ? !1 : o ? Ii(s, o) : s.closable ? s : !1, [n, o, s]);
  return T.useMemo(() => {
    var u, c;
    if (l === !1)
      return [!1, null, i, {}];
    const {
      closeIconRender: d
    } = s, {
      closeIcon: f
    } = l;
    let p = f;
    const v = Na(l, !0);
    return p != null && (d && (p = d(f)), p = /* @__PURE__ */ T.isValidElement(p) ? /* @__PURE__ */ T.cloneElement(p, Object.assign(Object.assign(Object.assign({}, p.props), {
      "aria-label": (c = (u = p.props) === null || u === void 0 ? void 0 : u["aria-label"]) !== null && c !== void 0 ? c : a.close
    }), v)) : /* @__PURE__ */ T.createElement("span", Object.assign({
      "aria-label": a.close
    }, v), p)), [!0, p, i, v];
  }, [i, a.close, l, s]);
}, mg = () => {
  const [e, t] = g.useState([]), r = g.useCallback((n) => (t((o) => [].concat(H(o), [n])), () => {
    t((o) => o.filter((a) => a !== n));
  }), []);
  return [e, r];
}, Ta = /* @__PURE__ */ T.createContext(void 0);
process.env.NODE_ENV !== "production" && (Ta.displayName = "zIndexContext");
const dt = 100, gg = 10, Yl = dt * gg, vg = Yl + dt, Ql = {
  Modal: dt,
  Drawer: dt,
  Popover: dt,
  Popconfirm: dt,
  Tooltip: dt,
  Tour: dt,
  FloatButton: dt
}, pg = {
  SelectLike: 50,
  Dropdown: 50,
  DatePicker: 50,
  Menu: 50,
  ImagePreview: 1
};
function hg(e) {
  return e in Ql;
}
const yg = (e, t) => {
  const [, r] = Ot(), n = T.useContext(Ta), o = hg(e);
  let a;
  if (t !== void 0)
    a = [t, t];
  else {
    let i = n ?? 0;
    o ? i += // Use preset token zIndex by default but not stack when has parent container
    (n ? 0 : r.zIndexPopupBase) + // Container offset
    Ql[e] : i += pg[e], a = [n === void 0 ? t : i, i];
  }
  if (process.env.NODE_ENV !== "production") {
    const i = st(e), s = r.zIndexPopupBase + vg, l = a[0] || 0;
    process.env.NODE_ENV !== "production" && i(t !== void 0 || l <= s, "usage", "`zIndex` is over design token `zIndexPopupBase` too much. It may cause unexpected override.");
  }
  return a;
};
function Zl(e, t) {
  this.v = e, this.k = t;
}
function Fe(e, t, r, n) {
  var o = Object.defineProperty;
  try {
    o({}, "", {});
  } catch {
    o = 0;
  }
  Fe = function(i, s, l, u) {
    function c(d, f) {
      Fe(i, d, function(p) {
        return this._invoke(d, f, p);
      });
    }
    s ? o ? o(i, s, {
      value: l,
      enumerable: !u,
      configurable: !u,
      writable: !u
    }) : i[s] = l : (c("next", 0), c("throw", 1), c("return", 2));
  }, Fe(e, t, r, n);
}
function Ra() {
  var e, t, r = typeof Symbol == "function" ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag";
  function a(p, v, h, m) {
    var b = v && v.prototype instanceof s ? v : s, y = Object.create(b.prototype);
    return Fe(y, "_invoke", (function(C, S, x) {
      var O, E, $, N = 0, _ = x || [], I = !1, F = {
        p: 0,
        n: 0,
        v: e,
        a: M,
        f: M.bind(e, 4),
        d: function(j, L) {
          return O = j, E = 0, $ = e, F.n = L, i;
        }
      };
      function M(R, j) {
        for (E = R, $ = j, t = 0; !I && N && !L && t < _.length; t++) {
          var L, A = _[t], B = F.p, k = A[2];
          R > 3 ? (L = k === j) && ($ = A[(E = A[4]) ? 5 : (E = 3, 3)], A[4] = A[5] = e) : A[0] <= B && ((L = R < 2 && B < A[1]) ? (E = 0, F.v = j, F.n = A[1]) : B < k && (L = R < 3 || A[0] > j || j > k) && (A[4] = R, A[5] = j, F.n = k, E = 0));
        }
        if (L || R > 1) return i;
        throw I = !0, j;
      }
      return function(R, j, L) {
        if (N > 1) throw TypeError("Generator is already running");
        for (I && j === 1 && M(j, L), E = j, $ = L; (t = E < 2 ? e : $) || !I; ) {
          O || (E ? E < 3 ? (E > 1 && (F.n = -1), M(E, $)) : F.n = $ : F.v = $);
          try {
            if (N = 2, O) {
              if (E || (R = "next"), t = O[R]) {
                if (!(t = t.call(O, $))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                $ = t.value, E < 2 && (E = 0);
              } else E === 1 && (t = O.return) && t.call(O), E < 2 && ($ = TypeError("The iterator does not provide a '" + R + "' method"), E = 1);
              O = e;
            } else if ((t = (I = F.n < 0) ? $ : C.call(S, F)) !== i) break;
          } catch (A) {
            O = e, E = 1, $ = A;
          } finally {
            N = 1;
          }
        }
        return {
          value: t,
          done: I
        };
      };
    })(p, h, m), !0), y;
  }
  var i = {};
  function s() {
  }
  function l() {
  }
  function u() {
  }
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (Fe(t = {}, n, function() {
    return this;
  }), t), d = u.prototype = s.prototype = Object.create(c);
  function f(p) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(p, u) : (p.__proto__ = u, Fe(p, o, "GeneratorFunction")), p.prototype = Object.create(d), p;
  }
  return l.prototype = u, Fe(d, "constructor", u), Fe(u, "constructor", l), l.displayName = "GeneratorFunction", Fe(u, o, "GeneratorFunction"), Fe(d), Fe(d, o, "Generator"), Fe(d, n, function() {
    return this;
  }), Fe(d, "toString", function() {
    return "[object Generator]";
  }), (Ra = function() {
    return {
      w: a,
      m: f
    };
  })();
}
function pn(e, t) {
  function r(o, a, i, s) {
    try {
      var l = e[o](a), u = l.value;
      return u instanceof Zl ? t.resolve(u.v).then(function(c) {
        r("next", c, i, s);
      }, function(c) {
        r("throw", c, i, s);
      }) : t.resolve(u).then(function(c) {
        l.value = c, i(l);
      }, function(c) {
        return r("throw", c, i, s);
      });
    } catch (c) {
      s(c);
    }
  }
  var n;
  this.next || (Fe(pn.prototype), Fe(pn.prototype, typeof Symbol == "function" && Symbol.asyncIterator || "@asyncIterator", function() {
    return this;
  })), Fe(this, "_invoke", function(o, a, i) {
    function s() {
      return new t(function(l, u) {
        r(o, i, l, u);
      });
    }
    return n = n ? n.then(s, s) : s();
  }, !0);
}
function Jl(e, t, r, n, o) {
  return new pn(Ra().w(e, t, r, n), o || Promise);
}
function bg(e, t, r, n, o) {
  var a = Jl(e, t, r, n, o);
  return a.next().then(function(i) {
    return i.done ? i.value : a.next();
  });
}
function Cg(e) {
  var t = Object(e), r = [];
  for (var n in t) r.unshift(n);
  return function o() {
    for (; r.length; ) if ((n = r.pop()) in t) return o.value = n, o.done = !1, o;
    return o.done = !0, o;
  };
}
function Ai(e) {
  if (e != null) {
    var t = e[typeof Symbol == "function" && Symbol.iterator || "@@iterator"], r = 0;
    if (t) return t.call(e);
    if (typeof e.next == "function") return e;
    if (!isNaN(e.length)) return {
      next: function() {
        return e && r >= e.length && (e = void 0), {
          value: e && e[r++],
          done: !e
        };
      }
    };
  }
  throw new TypeError(W(e) + " is not iterable");
}
function Me() {
  var e = Ra(), t = e.m(Me), r = (Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__).constructor;
  function n(i) {
    var s = typeof i == "function" && i.constructor;
    return !!s && (s === r || (s.displayName || s.name) === "GeneratorFunction");
  }
  var o = {
    throw: 1,
    return: 2,
    break: 3,
    continue: 3
  };
  function a(i) {
    var s, l;
    return function(u) {
      s || (s = {
        stop: function() {
          return l(u.a, 2);
        },
        catch: function() {
          return u.v;
        },
        abrupt: function(d, f) {
          return l(u.a, o[d], f);
        },
        delegateYield: function(d, f, p) {
          return s.resultName = f, l(u.d, Ai(d), p);
        },
        finish: function(d) {
          return l(u.f, d);
        }
      }, l = function(d, f, p) {
        u.p = s.prev, u.n = s.next;
        try {
          return d(f, p);
        } finally {
          s.next = u.n;
        }
      }), s.resultName && (s[s.resultName] = u.v, s.resultName = void 0), s.sent = u.v, s.next = u.n;
      try {
        return i.call(this, s);
      } finally {
        u.p = s.prev, u.n = s.next;
      }
    };
  }
  return (Me = function() {
    return {
      wrap: function(l, u, c, d) {
        return e.w(a(l), u, c, d && d.reverse());
      },
      isGeneratorFunction: n,
      mark: e.m,
      awrap: function(l, u) {
        return new Zl(l, u);
      },
      AsyncIterator: pn,
      async: function(l, u, c, d, f) {
        return (n(u) ? Jl : bg)(a(l), u, c, d, f);
      },
      keys: Cg,
      values: Ai
    };
  })();
}
function Li(e, t, r, n, o, a, i) {
  try {
    var s = e[a](i), l = s.value;
  } catch (u) {
    return void r(u);
  }
  s.done ? t(l) : Promise.resolve(l).then(n, o);
}
function It(e) {
  return function() {
    var t = this, r = arguments;
    return new Promise(function(n, o) {
      var a = e.apply(t, r);
      function i(l) {
        Li(a, n, o, i, s, "next", l);
      }
      function s(l) {
        Li(a, n, o, i, s, "throw", l);
      }
      i(void 0);
    });
  };
}
var Pr = P({}, ps), xg = Pr.version, Jn = Pr.render, Sg = Pr.unmountComponentAtNode, Nn;
try {
  var Eg = Number((xg || "").split(".")[0]);
  Eg >= 18 && (Nn = Pr.createRoot);
} catch {
}
function Vi(e) {
  var t = Pr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  t && W(t) === "object" && (t.usingClientEntryPoint = e);
}
var hn = "__rc_react_root__";
function wg(e, t) {
  Vi(!0);
  var r = t[hn] || Nn(t);
  Vi(!1), r.render(e), t[hn] = r;
}
function Og(e, t) {
  Jn?.(e, t);
}
function $g(e, t) {
  if (Nn) {
    wg(e, t);
    return;
  }
  Og(e, t);
}
function Pg(e) {
  return Xo.apply(this, arguments);
}
function Xo() {
  return Xo = It(/* @__PURE__ */ Me().mark(function e(t) {
    return Me().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.resolve().then(function() {
            var o;
            (o = t[hn]) === null || o === void 0 || o.unmount(), delete t[hn];
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), Xo.apply(this, arguments);
}
function Ng(e) {
  Sg(e);
}
function Tg(e) {
  return Ko.apply(this, arguments);
}
function Ko() {
  return Ko = It(/* @__PURE__ */ Me().mark(function e(t) {
    return Me().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          if (Nn === void 0) {
            n.next = 2;
            break;
          }
          return n.abrupt("return", Pg(t));
        case 2:
          Ng(t);
        case 3:
        case "end":
          return n.stop();
      }
    }, e);
  })), Ko.apply(this, arguments);
}
const Rg = (e, t) => {
  if (process.env.NODE_ENV !== "production") {
    const r = Number.parseInt(g.version.split(".")[0], 10), n = Object.keys(ps);
    process.env.NODE_ENV !== "production" && wt(r < 19 || n.includes("createRoot"), "compatible", "antd v5 support React is 16 ~ 18. see https://u.ant.design/v5-for-19 for compatible.");
  }
  return $g(e, t), () => Tg(t);
};
let _g = Rg;
function ec(e) {
  return _g;
}
const yn = (e, t, r) => r !== void 0 ? r : `${e}-${t}`;
function Tn(e, t) {
  var r = Object.assign({}, e);
  return Array.isArray(t) && t.forEach(function(n) {
    delete r[n];
  }), r;
}
const Fg = (function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var o = e.getBoundingClientRect(), a = o.width, i = o.height;
      if (a || i)
        return !0;
    }
  }
  return !1;
}), Ig = (e) => {
  const {
    componentCls: t,
    colorPrimary: r
  } = e;
  return {
    [t]: {
      position: "absolute",
      background: "transparent",
      pointerEvents: "none",
      boxSizing: "border-box",
      color: `var(--wave-color, ${r})`,
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
}, Mg = Zf("Wave", Ig), tc = `${mn}-wave-target`;
function jg(e) {
  return e && e !== "#fff" && e !== "#ffffff" && e !== "rgb(255, 255, 255)" && e !== "rgba(255, 255, 255, 1)" && !/rgba\((?:\d*, ){3}0\)/.test(e) && // any transparent rgba color
  e !== "transparent" && e !== "canvastext";
}
function Ag(e) {
  var t;
  const {
    borderTopColor: r,
    borderColor: n,
    backgroundColor: o
  } = getComputedStyle(e);
  return (t = [r, n, o].find(jg)) !== null && t !== void 0 ? t : null;
}
function eo(e) {
  return Number.isNaN(e) ? 0 : e;
}
const Lg = (e) => {
  const {
    className: t,
    target: r,
    component: n,
    registerUnmount: o
  } = e, a = g.useRef(null), i = g.useRef(null);
  g.useEffect(() => {
    i.current = o();
  }, []);
  const [s, l] = g.useState(null), [u, c] = g.useState([]), [d, f] = g.useState(0), [p, v] = g.useState(0), [h, m] = g.useState(0), [b, y] = g.useState(0), [C, S] = g.useState(!1), x = {
    left: d,
    top: p,
    width: h,
    height: b,
    borderRadius: u.map(($) => `${$}px`).join(" ")
  };
  s && (x["--wave-color"] = s);
  function O() {
    const $ = getComputedStyle(r);
    l(Ag(r));
    const N = $.position === "static", {
      borderLeftWidth: _,
      borderTopWidth: I
    } = $;
    f(N ? r.offsetLeft : eo(-Number.parseFloat(_))), v(N ? r.offsetTop : eo(-Number.parseFloat(I))), m(r.offsetWidth), y(r.offsetHeight);
    const {
      borderTopLeftRadius: F,
      borderTopRightRadius: M,
      borderBottomLeftRadius: R,
      borderBottomRightRadius: j
    } = $;
    c([F, M, j, R].map((L) => eo(Number.parseFloat(L))));
  }
  if (g.useEffect(() => {
    if (r) {
      const $ = St(() => {
        O(), S(!0);
      });
      let N;
      return typeof ResizeObserver < "u" && (N = new ResizeObserver(O), N.observe(r)), () => {
        St.cancel($), N?.disconnect();
      };
    }
  }, [r]), !C)
    return null;
  const E = (n === "Checkbox" || n === "Radio") && r?.classList.contains(tc);
  return /* @__PURE__ */ g.createElement($r, {
    visible: !0,
    motionAppear: !0,
    motionName: "wave-motion",
    motionDeadline: 5e3,
    onAppearEnd: ($, N) => {
      var _, I;
      if (N.deadline || N.propertyName === "opacity") {
        const F = (_ = a.current) === null || _ === void 0 ? void 0 : _.parentElement;
        (I = i.current) === null || I === void 0 || I.call(i).then(() => {
          F?.remove();
        });
      }
      return !1;
    }
  }, ({
    className: $
  }, N) => /* @__PURE__ */ g.createElement("div", {
    ref: Cn(a, N),
    className: z(t, $, {
      "wave-quick": E
    }),
    style: x
  }));
}, Vg = (e, t) => {
  var r;
  const {
    component: n
  } = t;
  if (n === "Checkbox" && !(!((r = e.querySelector("input")) === null || r === void 0) && r.checked))
    return;
  const o = document.createElement("div");
  o.style.position = "absolute", o.style.left = "0px", o.style.top = "0px", e?.insertBefore(o, e?.firstChild);
  const a = ec();
  let i = null;
  function s() {
    return i;
  }
  i = a(/* @__PURE__ */ g.createElement(Lg, Object.assign({}, t, {
    target: e,
    registerUnmount: s
  })), o);
}, Dg = (e, t, r) => {
  const {
    wave: n
  } = g.useContext(Ce), [, o, a] = Ot(), i = mt((u) => {
    const c = e.current;
    if (n?.disabled || !c)
      return;
    const d = c.querySelector(`.${tc}`) || c, {
      showEffect: f
    } = n || {};
    (f || Vg)(d, {
      className: t,
      token: o,
      component: r,
      event: u,
      hashId: a
    });
  }), s = g.useRef(null);
  return (u) => {
    St.cancel(s.current), s.current = St(() => {
      i(u);
    });
  };
}, rc = (e) => {
  const {
    children: t,
    disabled: r,
    component: n
  } = e, {
    getPrefixCls: o
  } = Ie(Ce), a = ne(null), i = o("wave"), [, s] = Mg(i), l = Dg(a, z(i, s), n);
  if (T.useEffect(() => {
    const c = a.current;
    if (!c || c.nodeType !== window.Node.ELEMENT_NODE || r)
      return;
    const d = (f) => {
      !Fg(f.target) || // No need wave
      !c.getAttribute || c.getAttribute("disabled") || c.disabled || c.className.includes("disabled") && !c.className.includes("disabled:") || c.getAttribute("aria-disabled") === "true" || c.className.includes("-leave") || l(f);
    };
    return c.addEventListener("click", d, !0), () => {
      c.removeEventListener("click", d, !0);
    };
  }, [r]), !/* @__PURE__ */ T.isValidElement(t))
    return t ?? null;
  const u = pa(t) ? Cn(Ps(t), a) : a;
  return Gl(t, {
    ref: u
  });
};
process.env.NODE_ENV !== "production" && (rc.displayName = "Wave");
const kg = (e) => {
  const t = T.useContext(Qt);
  return T.useMemo(() => e ? typeof e == "string" ? e ?? t : typeof e == "function" ? e(t) : t : t, [e, t]);
}, nc = /* @__PURE__ */ g.createContext(null), Hg = (e, t) => {
  const r = g.useContext(nc), n = g.useMemo(() => {
    if (!r)
      return "";
    const {
      compactDirection: o,
      isFirstItem: a,
      isLastItem: i
    } = r, s = o === "vertical" ? "-vertical-" : "-";
    return z(`${e}-compact${s}item`, {
      [`${e}-compact${s}first-item`]: a,
      [`${e}-compact${s}last-item`]: i,
      [`${e}-compact${s}item-rtl`]: t === "rtl"
    });
  }, [e, t, r]);
  return {
    compactSize: r?.compactSize,
    compactDirection: r?.compactDirection,
    compactItemClassnames: n
  };
}, Bg = (e) => {
  const {
    children: t
  } = e;
  return /* @__PURE__ */ g.createElement(nc.Provider, {
    value: null
  }, t);
};
var zg = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const oc = /* @__PURE__ */ g.createContext(void 0), Wg = (e) => {
  const {
    getPrefixCls: t,
    direction: r
  } = g.useContext(Ce), {
    prefixCls: n,
    size: o,
    className: a
  } = e, i = zg(e, ["prefixCls", "size", "className"]), s = t("btn-group", n), [, , l] = Ot(), u = g.useMemo(() => {
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
  const c = z(s, {
    [`${s}-${u}`]: u,
    [`${s}-rtl`]: r === "rtl"
  }, a, l);
  return /* @__PURE__ */ g.createElement(oc.Provider, {
    value: o
  }, /* @__PURE__ */ g.createElement("div", Object.assign({}, i, {
    className: c
  })));
}, Di = /^[\u4E00-\u9FA5]{2}$/, Yo = Di.test.bind(Di);
function ac(e) {
  return e === "danger" ? {
    danger: !0
  } : {
    type: e
  };
}
function ki(e) {
  return typeof e == "string";
}
function Zr(e) {
  return e === "text" || e === "link";
}
function qg(e, t) {
  if (e == null)
    return;
  const r = t ? " " : "";
  return typeof e != "string" && typeof e != "number" && ki(e.type) && Yo(e.props.children) ? Gl(e, {
    children: e.props.children.split("").join(r)
  }) : ki(e) ? Yo(e) ? /* @__PURE__ */ T.createElement("span", null, e.split("").join(r)) : /* @__PURE__ */ T.createElement("span", null, e) : sg(e) ? /* @__PURE__ */ T.createElement("span", null, e) : e;
}
function Ug(e, t) {
  let r = !1;
  const n = [];
  return T.Children.forEach(e, (o) => {
    const a = typeof o, i = a === "string" || a === "number";
    if (r && i) {
      const s = n.length - 1, l = n[s];
      n[s] = `${l}${o}`;
    } else
      n.push(o);
    r = i;
  }), T.Children.map(n, (o) => qg(o, t));
}
["default", "primary", "danger"].concat(H($a));
const Qo = /* @__PURE__ */ Er((e, t) => {
  const {
    className: r,
    style: n,
    children: o,
    prefixCls: a
  } = e, i = z(`${a}-icon`, r);
  return /* @__PURE__ */ T.createElement("span", {
    ref: t,
    className: i,
    style: n
  }, o);
}), Hi = /* @__PURE__ */ Er((e, t) => {
  const {
    prefixCls: r,
    className: n,
    style: o,
    iconClassName: a
  } = e, i = z(`${r}-loading-icon`, n);
  return /* @__PURE__ */ T.createElement(Qo, {
    prefixCls: r,
    className: i,
    style: o,
    ref: t
  }, /* @__PURE__ */ T.createElement(Kl, {
    className: a
  }));
}), to = () => ({
  width: 0,
  opacity: 0,
  transform: "scale(0)"
}), ro = (e) => ({
  width: e.scrollWidth,
  opacity: 1,
  transform: "scale(1)"
}), Gg = (e) => {
  const {
    prefixCls: t,
    loading: r,
    existIcon: n,
    className: o,
    style: a,
    mount: i
  } = e, s = !!r;
  return n ? /* @__PURE__ */ T.createElement(Hi, {
    prefixCls: t,
    className: o,
    style: a
  }) : /* @__PURE__ */ T.createElement($r, {
    visible: s,
    // Used for minus flex gap style only
    motionName: `${t}-loading-icon-motion`,
    motionAppear: !i,
    motionEnter: !i,
    motionLeave: !i,
    removeOnLeave: !0,
    onAppearStart: to,
    onAppearActive: ro,
    onEnterStart: to,
    onEnterActive: ro,
    onLeaveStart: ro,
    onLeaveActive: to
  }, ({
    className: l,
    style: u
  }, c) => {
    const d = Object.assign(Object.assign({}, a), u);
    return /* @__PURE__ */ T.createElement(Hi, {
      prefixCls: t,
      className: z(o, l),
      style: d,
      ref: c
    });
  });
}, Bi = (e, t) => ({
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
}), Xg = (e) => {
  const {
    componentCls: t,
    fontSize: r,
    lineWidth: n,
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
            marginInlineStart: e.calc(n).mul(-1).equal(),
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
          fontSize: r
        }
      },
      // Border Color
      Bi(`${t}-primary`, o),
      Bi(`${t}-danger`, a)
    ]
  };
};
var Kg = ["b"], Yg = ["v"], no = function(t) {
  return Math.round(Number(t || 0));
}, Qg = function(t) {
  if (t instanceof fe)
    return t;
  if (t && W(t) === "object" && "h" in t && "b" in t) {
    var r = t, n = r.b, o = at(r, Kg);
    return P(P({}, o), {}, {
      v: n
    });
  }
  return typeof t == "string" && /hsb/.test(t) ? t.replace(/hsb/, "hsv") : t;
}, gt = /* @__PURE__ */ (function(e) {
  _t(r, e);
  var t = Ft(r);
  function r(n) {
    return Ne(this, r), t.call(this, Qg(n));
  }
  return Te(r, [{
    key: "toHsbString",
    value: function() {
      var o = this.toHsb(), a = no(o.s * 100), i = no(o.b * 100), s = no(o.h), l = o.a, u = "hsb(".concat(s, ", ").concat(a, "%, ").concat(i, "%)"), c = "hsba(".concat(s, ", ").concat(a, "%, ").concat(i, "%, ").concat(l.toFixed(l === 0 ? 0 : 2), ")");
      return l === 1 ? u : c;
    }
  }, {
    key: "toHsb",
    value: function() {
      var o = this.toHsv(), a = o.v, i = at(o, Yg);
      return P(P({}, i), {}, {
        b: a,
        a: this.a
      });
    }
  }]), r;
})(fe), Zg = "rc-color-picker", Wt = function(t) {
  return t instanceof gt ? t : new gt(t);
}, Jg = Wt("#1677ff"), ic = function(t) {
  var r = t.offset, n = t.targetRef, o = t.containerRef, a = t.color, i = t.type, s = o.current.getBoundingClientRect(), l = s.width, u = s.height, c = n.current.getBoundingClientRect(), d = c.width, f = c.height, p = d / 2, v = f / 2, h = (r.x + p) / l, m = 1 - (r.y + v) / u, b = a.toHsb(), y = h, C = (r.x + p) / l * 360;
  if (i)
    switch (i) {
      case "hue":
        return Wt(P(P({}, b), {}, {
          h: C <= 0 ? 0 : C
        }));
      case "alpha":
        return Wt(P(P({}, b), {}, {
          a: y <= 0 ? 0 : y
        }));
    }
  return Wt({
    h: b.h,
    s: h <= 0 ? 0 : h,
    b: m >= 1 ? 1 : m,
    a: b.a
  });
}, sc = function(t, r) {
  var n = t.toHsb();
  switch (r) {
    case "hue":
      return {
        x: n.h / 360 * 100,
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
        x: n.s * 100,
        y: (1 - n.b) * 100
      };
  }
}, ev = function(t) {
  var r = t.color, n = t.prefixCls, o = t.className, a = t.style, i = t.onClick, s = "".concat(n, "-color-block");
  return /* @__PURE__ */ T.createElement("div", {
    className: z(s, o),
    style: a,
    onClick: i
  }, /* @__PURE__ */ T.createElement("div", {
    className: "".concat(s, "-inner"),
    style: {
      background: r
    }
  }));
};
function tv(e) {
  var t = "touches" in e ? e.touches[0] : e, r = document.documentElement.scrollLeft || document.body.scrollLeft || window.pageXOffset, n = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
  return {
    pageX: t.pageX - r,
    pageY: t.pageY - n
  };
}
function lc(e) {
  var t = e.targetRef, r = e.containerRef, n = e.direction, o = e.onDragChange, a = e.onDragChangeComplete, i = e.calculate, s = e.color, l = e.disabledDrag, u = un({
    x: 0,
    y: 0
  }), c = D(u, 2), d = c[0], f = c[1], p = ne(null), v = ne(null);
  Ue(function() {
    f(i());
  }, [s]), Ue(function() {
    return function() {
      document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", v.current), p.current = null, v.current = null;
    };
  }, []);
  var h = function(S) {
    var x = tv(S), O = x.pageX, E = x.pageY, $ = r.current.getBoundingClientRect(), N = $.x, _ = $.y, I = $.width, F = $.height, M = t.current.getBoundingClientRect(), R = M.width, j = M.height, L = R / 2, A = j / 2, B = Math.max(0, Math.min(O - N, I)) - L, k = Math.max(0, Math.min(E - _, F)) - A, U = {
      x: B,
      y: n === "x" ? d.y : k
    };
    if (R === 0 && j === 0 || R !== j)
      return !1;
    o?.(U);
  }, m = function(S) {
    S.preventDefault(), h(S);
  }, b = function(S) {
    S.preventDefault(), document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), document.removeEventListener("touchmove", p.current), document.removeEventListener("touchend", v.current), p.current = null, v.current = null, a?.();
  }, y = function(S) {
    document.removeEventListener("mousemove", p.current), document.removeEventListener("mouseup", v.current), !l && (h(S), document.addEventListener("mousemove", m), document.addEventListener("mouseup", b), document.addEventListener("touchmove", m), document.addEventListener("touchend", b), p.current = m, v.current = b);
  };
  return [d, y];
}
var cc = function(t) {
  var r = t.size, n = r === void 0 ? "default" : r, o = t.color, a = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: z("".concat(a, "-handler"), w({}, "".concat(a, "-handler-sm"), n === "small")),
    style: {
      backgroundColor: o
    }
  });
}, uc = function(t) {
  var r = t.children, n = t.style, o = t.prefixCls;
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(o, "-palette"),
    style: P({
      position: "relative"
    }, n)
  }, r);
}, dc = /* @__PURE__ */ Er(function(e, t) {
  var r = e.children, n = e.x, o = e.y;
  return /* @__PURE__ */ T.createElement("div", {
    ref: t,
    style: {
      position: "absolute",
      left: "".concat(n, "%"),
      top: "".concat(o, "%"),
      zIndex: 1,
      transform: "translate(-50%, -50%)"
    }
  }, r);
}), rv = function(t) {
  var r = t.color, n = t.onChange, o = t.prefixCls, a = t.onChangeComplete, i = t.disabled, s = ne(), l = ne(), u = ne(r), c = mt(function(h) {
    var m = ic({
      offset: h,
      targetRef: l,
      containerRef: s,
      color: r
    });
    u.current = m, n(m);
  }), d = lc({
    color: r,
    containerRef: s,
    targetRef: l,
    calculate: function() {
      return sc(r);
    },
    onDragChange: c,
    onDragChangeComplete: function() {
      return a?.(u.current);
    },
    disabledDrag: i
  }), f = D(d, 2), p = f[0], v = f[1];
  return /* @__PURE__ */ T.createElement("div", {
    ref: s,
    className: "".concat(o, "-select"),
    onMouseDown: v,
    onTouchStart: v
  }, /* @__PURE__ */ T.createElement(uc, {
    prefixCls: o
  }, /* @__PURE__ */ T.createElement(dc, {
    x: p.x,
    y: p.y,
    ref: l
  }, /* @__PURE__ */ T.createElement(cc, {
    color: r.toRgbString(),
    prefixCls: o
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(o, "-saturation"),
    style: {
      backgroundColor: "hsl(".concat(r.toHsb().h, ",100%, 50%)"),
      backgroundImage: "linear-gradient(0deg, #000, transparent),linear-gradient(90deg, #fff, hsla(0, 0%, 100%, 0))"
    }
  })));
}, nv = function(t, r) {
  var n = Mf(t, {
    value: r
  }), o = D(n, 2), a = o[0], i = o[1], s = Rt(function() {
    return Wt(a);
  }, [a]);
  return [s, i];
}, ov = function(t) {
  var r = t.colors, n = t.children, o = t.direction, a = o === void 0 ? "to right" : o, i = t.type, s = t.prefixCls, l = Rt(function() {
    return r.map(function(u, c) {
      var d = Wt(u);
      return i === "alpha" && c === r.length - 1 && (d = new gt(d.setA(1))), d.toRgbString();
    }).join(",");
  }, [r, i]);
  return /* @__PURE__ */ T.createElement("div", {
    className: "".concat(s, "-gradient"),
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(".concat(a, ", ").concat(l, ")")
    }
  }, n);
}, av = function(t) {
  var r = t.prefixCls, n = t.colors, o = t.disabled, a = t.onChange, i = t.onChangeComplete, s = t.color, l = t.type, u = ne(), c = ne(), d = ne(s), f = function(x) {
    return l === "hue" ? x.getHue() : x.a * 100;
  }, p = mt(function(S) {
    var x = ic({
      offset: S,
      targetRef: c,
      containerRef: u,
      color: s,
      type: l
    });
    d.current = x, a(f(x));
  }), v = lc({
    color: s,
    targetRef: c,
    containerRef: u,
    calculate: function() {
      return sc(s, l);
    },
    onDragChange: p,
    onDragChangeComplete: function() {
      i(f(d.current));
    },
    direction: "x",
    disabledDrag: o
  }), h = D(v, 2), m = h[0], b = h[1], y = T.useMemo(function() {
    if (l === "hue") {
      var S = s.toHsb();
      S.s = 1, S.b = 1, S.a = 1;
      var x = new gt(S);
      return x;
    }
    return s;
  }, [s, l]), C = T.useMemo(function() {
    return n.map(function(S) {
      return "".concat(S.color, " ").concat(S.percent, "%");
    });
  }, [n]);
  return /* @__PURE__ */ T.createElement("div", {
    ref: u,
    className: z("".concat(r, "-slider"), "".concat(r, "-slider-").concat(l)),
    onMouseDown: b,
    onTouchStart: b
  }, /* @__PURE__ */ T.createElement(uc, {
    prefixCls: r
  }, /* @__PURE__ */ T.createElement(dc, {
    x: m.x,
    y: m.y,
    ref: c
  }, /* @__PURE__ */ T.createElement(cc, {
    size: "small",
    color: y.toHexString(),
    prefixCls: r
  })), /* @__PURE__ */ T.createElement(ov, {
    colors: C,
    type: l,
    prefixCls: r
  })));
};
function iv(e) {
  return g.useMemo(function() {
    var t = e || {}, r = t.slider;
    return [r || av];
  }, [e]);
}
var sv = [{
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
}], lv = /* @__PURE__ */ Er(function(e, t) {
  var r = e.value, n = e.defaultValue, o = e.prefixCls, a = o === void 0 ? Zg : o, i = e.onChange, s = e.onChangeComplete, l = e.className, u = e.style, c = e.panelRender, d = e.disabledAlpha, f = d === void 0 ? !1 : d, p = e.disabled, v = p === void 0 ? !1 : p, h = e.components, m = iv(h), b = D(m, 1), y = b[0], C = nv(n || Jg, r), S = D(C, 2), x = S[0], O = S[1], E = Rt(function() {
    return x.setA(1).toRgbString();
  }, [x]), $ = function(k, U) {
    r || O(k), i?.(k, U);
  }, N = function(k) {
    return new gt(x.setHue(k));
  }, _ = function(k) {
    return new gt(x.setA(k / 100));
  }, I = function(k) {
    $(N(k), {
      type: "hue",
      value: k
    });
  }, F = function(k) {
    $(_(k), {
      type: "alpha",
      value: k
    });
  }, M = function(k) {
    s && s(N(k));
  }, R = function(k) {
    s && s(_(k));
  }, j = z("".concat(a, "-panel"), l, w({}, "".concat(a, "-panel-disabled"), v)), L = {
    prefixCls: a,
    disabled: v,
    color: x
  }, A = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(rv, ue({
    onChange: $
  }, L, {
    onChangeComplete: s
  })), /* @__PURE__ */ T.createElement("div", {
    className: "".concat(a, "-slider-container")
  }, /* @__PURE__ */ T.createElement("div", {
    className: z("".concat(a, "-slider-group"), w({}, "".concat(a, "-slider-group-disabled-alpha"), f))
  }, /* @__PURE__ */ T.createElement(y, ue({}, L, {
    type: "hue",
    colors: sv,
    min: 0,
    max: 359,
    value: x.getHue(),
    onChange: I,
    onChangeComplete: M
  })), !f && /* @__PURE__ */ T.createElement(y, ue({}, L, {
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
    value: x.a * 100,
    onChange: F,
    onChangeComplete: R
  }))), /* @__PURE__ */ T.createElement(ev, {
    color: x.toRgbString(),
    prefixCls: a
  })));
  return /* @__PURE__ */ T.createElement("div", {
    className: j,
    style: u,
    ref: t
  }, typeof c == "function" ? c(A) : A);
});
process.env.NODE_ENV !== "production" && (lv.displayName = "ColorPicker");
const cv = (e, t) => e?.replace(/[^\w/]/g, "").slice(0, t ? 8 : 6) || "", uv = (e, t) => e ? cv(e, t) : "";
let dv = /* @__PURE__ */ (function() {
  function e(t) {
    Ne(this, e);
    var r;
    if (this.cleared = !1, t instanceof e) {
      this.metaColor = t.metaColor.clone(), this.colors = (r = t.colors) === null || r === void 0 ? void 0 : r.map((o) => ({
        color: new e(o.color),
        percent: o.percent
      })), this.cleared = t.cleared;
      return;
    }
    const n = Array.isArray(t);
    n && t.length ? (this.colors = t.map(({
      color: o,
      percent: a
    }) => ({
      color: new e(o),
      percent: a
    })), this.metaColor = new gt(this.colors[0].color.metaColor)) : this.metaColor = new gt(n ? "" : t), (!t || n && !this.colors) && (this.metaColor = this.metaColor.setA(0), this.cleared = !0);
  }
  return Te(e, [{
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
      return uv(this.toHexString(), this.metaColor.a < 1);
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
        colors: r
      } = this;
      return r ? `linear-gradient(90deg, ${r.map((o) => `${o.color.toRgbString()} ${o.percent}%`).join(", ")})` : this.metaColor.toRgbString();
    }
  }, {
    key: "equals",
    value: function(r) {
      return !r || this.isGradient() !== r.isGradient() ? !1 : this.isGradient() ? this.colors.length === r.colors.length && this.colors.every((n, o) => {
        const a = r.colors[o];
        return n.percent === a.percent && n.color.equals(a.color);
      }) : this.toHexString() === r.toHexString();
    }
  }]);
})();
const fv = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), mv = (e) => ({
  animationDuration: e,
  animationFillMode: "both"
}), fc = (e, t, r, n, o = !1) => {
  const a = o ? "&" : "";
  return {
    [`
      ${a}${e}-enter,
      ${a}${e}-appear
    `]: Object.assign(Object.assign({}, fv(n)), {
      animationPlayState: "paused"
    }),
    [`${a}${e}-leave`]: Object.assign(Object.assign({}, mv(n)), {
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
      animationName: r,
      animationPlayState: "running",
      pointerEvents: "none"
    }
  };
}, gv = new Le("antFadeIn", {
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
}), vv = new Le("antFadeOut", {
  "0%": {
    opacity: 1
  },
  "100%": {
    opacity: 0
  }
}), pv = (e, t = !1) => {
  const {
    antCls: r
  } = e, n = `${r}-fade`, o = t ? "&" : "";
  return [fc(n, gv, vv, e.motionDurationMid, t), {
    [`
        ${o}${n}-enter,
        ${o}${n}-appear
      `]: {
      opacity: 0,
      animationTimingFunction: "linear"
    },
    [`${o}${n}-leave`]: {
      animationTimingFunction: "linear"
    }
  }];
}, hv = new Le("antZoomIn", {
  "0%": {
    transform: "scale(0.2)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), yv = new Le("antZoomOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.2)",
    opacity: 0
  }
}), zi = new Le("antZoomBigIn", {
  "0%": {
    transform: "scale(0.8)",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    opacity: 1
  }
}), Wi = new Le("antZoomBigOut", {
  "0%": {
    transform: "scale(1)"
  },
  "100%": {
    transform: "scale(0.8)",
    opacity: 0
  }
}), bv = new Le("antZoomUpIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  }
}), Cv = new Le("antZoomUpOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 0%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 0%",
    opacity: 0
  }
}), xv = new Le("antZoomLeftIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  }
}), Sv = new Le("antZoomLeftOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "0% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "0% 50%",
    opacity: 0
  }
}), Ev = new Le("antZoomRightIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  }
}), wv = new Le("antZoomRightOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "100% 50%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "100% 50%",
    opacity: 0
  }
}), Ov = new Le("antZoomDownIn", {
  "0%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  },
  "100%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  }
}), $v = new Le("antZoomDownOut", {
  "0%": {
    transform: "scale(1)",
    transformOrigin: "50% 100%"
  },
  "100%": {
    transform: "scale(0.8)",
    transformOrigin: "50% 100%",
    opacity: 0
  }
}), Pv = {
  zoom: {
    inKeyframes: hv,
    outKeyframes: yv
  },
  "zoom-big": {
    inKeyframes: zi,
    outKeyframes: Wi
  },
  "zoom-big-fast": {
    inKeyframes: zi,
    outKeyframes: Wi
  },
  "zoom-left": {
    inKeyframes: xv,
    outKeyframes: Sv
  },
  "zoom-right": {
    inKeyframes: Ev,
    outKeyframes: wv
  },
  "zoom-up": {
    inKeyframes: bv,
    outKeyframes: Cv
  },
  "zoom-down": {
    inKeyframes: Ov,
    outKeyframes: $v
  }
}, Nv = (e, t) => {
  const {
    antCls: r
  } = e, n = `${r}-${t}`, {
    inKeyframes: o,
    outKeyframes: a
  } = Pv[t];
  return [fc(n, o, a, e.motionDurationMid), {
    [`
        ${n}-enter,
        ${n}-appear
      `]: {
      transform: "scale(0)",
      opacity: 0,
      animationTimingFunction: e.motionEaseOutCirc,
      "&-prepare": {
        transform: "none"
      }
    },
    [`${n}-leave`]: {
      animationTimingFunction: e.motionEaseInOutCirc
    }
  }];
}, Tv = (e, t) => {
  const {
    r,
    g: n,
    b: o,
    a
  } = e.toRgb(), i = new gt(e.toRgbString()).onBackground(t).toHsv();
  return a <= 0.5 ? i.v > 0.5 : r * 0.299 + n * 0.587 + o * 0.114 > 192;
}, mc = (e) => {
  const {
    paddingInline: t,
    onlyIconSize: r
  } = e;
  return vt(e, {
    buttonPaddingHorizontal: t,
    buttonPaddingVertical: 0,
    buttonIconOnlyFontSize: r
  });
}, gc = (e) => {
  var t, r, n, o, a, i;
  const s = (t = e.contentFontSize) !== null && t !== void 0 ? t : e.fontSize, l = (r = e.contentFontSizeSM) !== null && r !== void 0 ? r : e.fontSize, u = (n = e.contentFontSizeLG) !== null && n !== void 0 ? n : e.fontSizeLG, c = (o = e.contentLineHeight) !== null && o !== void 0 ? o : ln(s), d = (a = e.contentLineHeightSM) !== null && a !== void 0 ? a : ln(l), f = (i = e.contentLineHeightLG) !== null && i !== void 0 ? i : ln(u), p = Tv(new dv(e.colorBgSolid), "#fff") ? "#000" : "#fff", v = $a.reduce((h, m) => Object.assign(Object.assign({}, h), {
    [`${m}ShadowColor`]: `0 ${ee(e.controlOutlineWidth)} 0 ${cr(e[`${m}1`], e.colorBgContainer)}`
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
    contentFontSizeSM: l,
    contentFontSizeLG: u,
    contentLineHeight: c,
    contentLineHeightSM: d,
    contentLineHeightLG: f,
    paddingBlock: Math.max((e.controlHeight - s * c) / 2 - e.lineWidth, 0),
    paddingBlockSM: Math.max((e.controlHeightSM - l * d) / 2 - e.lineWidth, 0),
    paddingBlockLG: Math.max((e.controlHeightLG - u * f) / 2 - e.lineWidth, 0)
  });
}, Rv = (e) => {
  const {
    componentCls: t,
    iconCls: r,
    fontWeight: n,
    opacityLoading: o,
    motionDurationSlow: a,
    motionEaseInOut: i,
    iconGap: s,
    calc: l
  } = e;
  return {
    [t]: {
      outline: "none",
      position: "relative",
      display: "inline-flex",
      gap: s,
      alignItems: "center",
      justifyContent: "center",
      fontWeight: n,
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
      [`${t}-icon > svg`]: xl(),
      "> a": {
        color: "currentColor"
      },
      "&:not(:disabled)": Sl(e),
      [`&${t}-two-chinese-chars::first-letter`]: {
        letterSpacing: "0.34em"
      },
      [`&${t}-two-chinese-chars > *:not(${r})`]: {
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
        transition: ["width", "opacity", "margin"].map((u) => `${u} ${a} ${i}`).join(",")
      },
      // iconPosition
      [`&:not(${t}-icon-end)`]: {
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineEnd: l(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineEnd: 0
          },
          "&-leave-start": {
            marginInlineEnd: 0
          },
          "&-leave-active": {
            marginInlineEnd: l(s).mul(-1).equal()
          }
        }
      },
      "&-icon-end": {
        flexDirection: "row-reverse",
        [`${t}-loading-icon-motion`]: {
          "&-appear-start, &-enter-start": {
            marginInlineStart: l(s).mul(-1).equal()
          },
          "&-appear-active, &-enter-active": {
            marginInlineStart: 0
          },
          "&-leave-start": {
            marginInlineStart: 0
          },
          "&-leave-active": {
            marginInlineStart: l(s).mul(-1).equal()
          }
        }
      }
    }
  };
}, vc = (e, t, r) => ({
  [`&:not(:disabled):not(${e}-disabled)`]: {
    "&:hover": t,
    "&:active": r
  }
}), _v = (e) => ({
  minWidth: e.controlHeight,
  paddingInline: 0,
  borderRadius: "50%"
}), Fv = (e) => ({
  cursor: "not-allowed",
  borderColor: e.borderColorDisabled,
  color: e.colorTextDisabled,
  background: e.colorBgContainerDisabled,
  boxShadow: "none"
}), Rn = (e, t, r, n, o, a, i, s) => ({
  [`&${e}-background-ghost`]: Object.assign(Object.assign({
    color: r || void 0,
    background: t,
    borderColor: n || void 0,
    boxShadow: "none"
  }, vc(e, Object.assign({
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
}), Iv = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: Object.assign({}, Fv(e))
}), Mv = (e) => ({
  [`&:disabled, &${e.componentCls}-disabled`]: {
    cursor: "not-allowed",
    color: e.colorTextDisabled
  }
}), _n = (e, t, r, n) => {
  const a = n && ["link", "text"].includes(n) ? Mv : Iv;
  return Object.assign(Object.assign({}, a(e)), vc(e.componentCls, t, r));
}, Fn = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-solid`]: Object.assign({
    color: t,
    background: r
  }, _n(e, n, o))
}), In = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-outlined, &${e.componentCls}-variant-dashed`]: Object.assign({
    borderColor: t,
    background: r
  }, _n(e, n, o))
}), Mn = (e) => ({
  [`&${e.componentCls}-variant-dashed`]: {
    borderStyle: "dashed"
  }
}), jn = (e, t, r, n) => ({
  [`&${e.componentCls}-variant-filled`]: Object.assign({
    boxShadow: "none",
    background: t
  }, _n(e, r, n))
}), it = (e, t, r, n, o) => ({
  [`&${e.componentCls}-variant-${r}`]: Object.assign({
    color: t,
    boxShadow: "none"
  }, _n(e, n, o, r))
}), jv = (e) => {
  const {
    componentCls: t
  } = e;
  return $a.reduce((r, n) => {
    const o = e[`${n}6`], a = e[`${n}1`], i = e[`${n}5`], s = e[`${n}2`], l = e[`${n}3`], u = e[`${n}7`];
    return Object.assign(Object.assign({}, r), {
      [`&${t}-color-${n}`]: Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
        color: o,
        boxShadow: e[`${n}ShadowColor`]
      }, Fn(e, e.colorTextLightSolid, o, {
        background: i
      }, {
        background: u
      })), In(e, o, e.colorBgContainer, {
        color: i,
        borderColor: i,
        background: e.colorBgContainer
      }, {
        color: u,
        borderColor: u,
        background: e.colorBgContainer
      })), Mn(e)), jn(e, a, {
        color: o,
        background: s
      }, {
        color: o,
        background: l
      })), it(e, o, "link", {
        color: i
      }, {
        color: u
      })), it(e, o, "text", {
        color: i,
        background: a
      }, {
        color: u,
        background: l
      }))
    });
  }, {});
}, Av = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.defaultColor,
  boxShadow: e.defaultShadow
}, Fn(e, e.solidTextColor, e.colorBgSolid, {
  color: e.solidTextColor,
  background: e.colorBgSolidHover
}, {
  color: e.solidTextColor,
  background: e.colorBgSolidActive
})), Mn(e)), jn(e, e.colorFillTertiary, {
  color: e.defaultColor,
  background: e.colorFillSecondary
}, {
  color: e.defaultColor,
  background: e.colorFill
})), Rn(e.componentCls, e.ghostBg, e.defaultGhostColor, e.defaultGhostBorderColor, e.colorTextDisabled, e.colorBorder)), it(e, e.textTextColor, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), Lv = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorPrimary,
  boxShadow: e.primaryShadow
}, In(e, e.colorPrimary, e.colorBgContainer, {
  color: e.colorPrimaryTextHover,
  borderColor: e.colorPrimaryHover,
  background: e.colorBgContainer
}, {
  color: e.colorPrimaryTextActive,
  borderColor: e.colorPrimaryActive,
  background: e.colorBgContainer
})), Mn(e)), jn(e, e.colorPrimaryBg, {
  color: e.colorPrimary,
  background: e.colorPrimaryBgHover
}, {
  color: e.colorPrimary,
  background: e.colorPrimaryBorder
})), it(e, e.colorPrimaryText, "text", {
  color: e.colorPrimaryTextHover,
  background: e.colorPrimaryBg
}, {
  color: e.colorPrimaryTextActive,
  background: e.colorPrimaryBorder
})), it(e, e.colorPrimaryText, "link", {
  color: e.colorPrimaryTextHover,
  background: e.linkHoverBg
}, {
  color: e.colorPrimaryTextActive
})), Rn(e.componentCls, e.ghostBg, e.colorPrimary, e.colorPrimary, e.colorTextDisabled, e.colorBorder, {
  color: e.colorPrimaryHover,
  borderColor: e.colorPrimaryHover
}, {
  color: e.colorPrimaryActive,
  borderColor: e.colorPrimaryActive
})), Vv = (e) => Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
  color: e.colorError,
  boxShadow: e.dangerShadow
}, Fn(e, e.dangerColor, e.colorError, {
  background: e.colorErrorHover
}, {
  background: e.colorErrorActive
})), In(e, e.colorError, e.colorBgContainer, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorBorderHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Mn(e)), jn(e, e.colorErrorBg, {
  color: e.colorError,
  background: e.colorErrorBgFilledHover
}, {
  color: e.colorError,
  background: e.colorErrorBgActive
})), it(e, e.colorError, "text", {
  color: e.colorErrorHover,
  background: e.colorErrorBg
}, {
  color: e.colorErrorHover,
  background: e.colorErrorBgActive
})), it(e, e.colorError, "link", {
  color: e.colorErrorHover
}, {
  color: e.colorErrorActive
})), Rn(e.componentCls, e.ghostBg, e.colorError, e.colorError, e.colorTextDisabled, e.colorBorder, {
  color: e.colorErrorHover,
  borderColor: e.colorErrorHover
}, {
  color: e.colorErrorActive,
  borderColor: e.colorErrorActive
})), Dv = (e) => Object.assign(Object.assign({}, it(e, e.colorLink, "link", {
  color: e.colorLinkHover
}, {
  color: e.colorLinkActive
})), Rn(e.componentCls, e.ghostBg, e.colorInfo, e.colorInfo, e.colorTextDisabled, e.colorBorder, {
  color: e.colorInfoHover,
  borderColor: e.colorInfoHover
}, {
  color: e.colorInfoActive,
  borderColor: e.colorInfoActive
})), kv = (e) => {
  const {
    componentCls: t
  } = e;
  return Object.assign({
    [`${t}-color-default`]: Av(e),
    [`${t}-color-primary`]: Lv(e),
    [`${t}-color-dangerous`]: Vv(e),
    [`${t}-color-link`]: Dv(e)
  }, jv(e));
}, Hv = (e) => Object.assign(Object.assign(Object.assign(Object.assign({}, In(e, e.defaultBorderColor, e.defaultBg, {
  color: e.defaultHoverColor,
  borderColor: e.defaultHoverBorderColor,
  background: e.defaultHoverBg
}, {
  color: e.defaultActiveColor,
  borderColor: e.defaultActiveBorderColor,
  background: e.defaultActiveBg
})), it(e, e.textTextColor, "text", {
  color: e.textTextHoverColor,
  background: e.textHoverBg
}, {
  color: e.textTextActiveColor,
  background: e.colorBgTextActive
})), Fn(e, e.primaryColor, e.colorPrimary, {
  background: e.colorPrimaryHover,
  color: e.primaryColor
}, {
  background: e.colorPrimaryActive,
  color: e.primaryColor
})), it(e, e.colorLink, "link", {
  color: e.colorLinkHover,
  background: e.linkHoverBg
}, {
  color: e.colorLinkActive
})), _a = (e, t = "") => {
  const {
    componentCls: r,
    controlHeight: n,
    fontSize: o,
    borderRadius: a,
    buttonPaddingHorizontal: i,
    iconCls: s,
    buttonPaddingVertical: l,
    buttonIconOnlyFontSize: u
  } = e;
  return [
    {
      [t]: {
        fontSize: o,
        height: n,
        padding: `${ee(l)} ${ee(i)}`,
        borderRadius: a,
        [`&${r}-icon-only`]: {
          width: n,
          [s]: {
            fontSize: u
          }
        }
      }
    },
    // Shape - patch prefixCls again to override solid border radius style
    {
      [`${r}${r}-circle${t}`]: _v(e)
    },
    {
      [`${r}${r}-round${t}`]: {
        borderRadius: e.controlHeight,
        [`&:not(${r}-icon-only)`]: {
          paddingInline: e.buttonPaddingHorizontal
        }
      }
    }
  ];
}, Bv = (e) => {
  const t = vt(e, {
    fontSize: e.contentFontSize
  });
  return _a(t, e.componentCls);
}, zv = (e) => {
  const t = vt(e, {
    controlHeight: e.controlHeightSM,
    fontSize: e.contentFontSizeSM,
    padding: e.paddingXS,
    buttonPaddingHorizontal: e.paddingInlineSM,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusSM,
    buttonIconOnlyFontSize: e.onlyIconSizeSM
  });
  return _a(t, `${e.componentCls}-sm`);
}, Wv = (e) => {
  const t = vt(e, {
    controlHeight: e.controlHeightLG,
    fontSize: e.contentFontSizeLG,
    buttonPaddingHorizontal: e.paddingInlineLG,
    buttonPaddingVertical: 0,
    borderRadius: e.borderRadiusLG,
    buttonIconOnlyFontSize: e.onlyIconSizeLG
  });
  return _a(t, `${e.componentCls}-lg`);
}, qv = (e) => {
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
}, Uv = Or("Button", (e) => {
  const t = mc(e);
  return [
    // Shared
    Rv(t),
    // Size
    Bv(t),
    zv(t),
    Wv(t),
    // Block
    qv(t),
    // Color
    kv(t),
    // https://github.com/ant-design/ant-design/issues/50969
    Hv(t),
    // Button Group
    Xg(t)
  ];
}, gc, {
  unitless: {
    fontWeight: !0,
    contentLineHeight: !0,
    contentLineHeightSM: !0,
    contentLineHeightLG: !0
  }
});
function Gv(e, t, r, n) {
  const {
    focusElCls: o,
    focus: a,
    borderElCls: i
  } = r, s = i ? "> *" : "", l = ["hover", a ? "focus" : null, "active"].filter(Boolean).map((u) => `&:${u} ${s}`).join(",");
  return {
    [`&-item:not(${t}-last-item)`]: {
      marginInlineEnd: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${n}-status-success)`]: {
      zIndex: 2
    },
    "&-item": Object.assign(Object.assign({
      [l]: {
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
function Xv(e, t, r) {
  const {
    borderElCls: n
  } = r, o = n ? `> ${n}` : "";
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
function Kv(e, t = {
  focus: !0
}) {
  const {
    componentCls: r
  } = e, n = `${r}-compact`;
  return {
    [n]: Object.assign(Object.assign({}, Gv(e, n, t, r)), Xv(r, n, t))
  };
}
function Yv(e, t, r) {
  return {
    // border collapse
    [`&-item:not(${t}-last-item)`]: {
      marginBottom: e.calc(e.lineWidth).mul(-1).equal()
    },
    [`&-item:not(${r}-status-success)`]: {
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
function Qv(e, t) {
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
function Zv(e) {
  const t = `${e.componentCls}-compact-vertical`;
  return {
    [t]: Object.assign(Object.assign({}, Yv(e, t, e.componentCls)), Qv(e.componentCls, t))
  };
}
const Jv = (e) => {
  const {
    componentCls: t,
    colorPrimaryHover: r,
    lineWidth: n,
    calc: o
  } = e, a = o(n).mul(-1).equal(), i = (s) => {
    const l = `${t}-compact${s ? "-vertical" : ""}-item${t}-primary:not([disabled])`;
    return {
      [`${l} + ${l}::before`]: {
        position: "absolute",
        top: s ? a : 0,
        insetInlineStart: s ? 0 : a,
        backgroundColor: r,
        content: '""',
        width: s ? "100%" : n,
        height: s ? n : "100%"
      }
    };
  };
  return Object.assign(Object.assign({}, i()), i(!0));
}, ep = wl(["Button", "compact"], (e) => {
  const t = mc(e);
  return [
    // Space Compact
    Kv(t),
    Zv(t),
    Jv(t)
  ];
}, gc);
var tp = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function rp(e) {
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
const np = {
  default: ["default", "outlined"],
  primary: ["primary", "solid"],
  dashed: ["default", "dashed"],
  // `link` is not a real color but we should compatible with it
  link: ["link", "link"],
  text: ["default", "text"]
}, op = /* @__PURE__ */ T.forwardRef((e, t) => {
  var r, n;
  const {
    loading: o = !1,
    prefixCls: a,
    color: i,
    variant: s,
    type: l,
    danger: u = !1,
    shape: c,
    size: d,
    styles: f,
    disabled: p,
    className: v,
    rootClassName: h,
    children: m,
    icon: b,
    iconPosition: y = "start",
    ghost: C = !1,
    block: S = !1,
    // React does not recognize the `htmlType` prop on a DOM element. Here we pick it out of `rest`.
    htmlType: x = "button",
    classNames: O,
    style: E = {},
    autoInsertSpace: $,
    autoFocus: N
  } = e, _ = tp(e, ["loading", "prefixCls", "color", "variant", "type", "danger", "shape", "size", "styles", "disabled", "className", "rootClassName", "children", "icon", "iconPosition", "ghost", "block", "htmlType", "classNames", "style", "autoInsertSpace", "autoFocus"]), I = l || "default", {
    button: F
  } = T.useContext(Ce), M = c || F?.shape || "default", [R, j] = Rt(() => {
    if (i && s)
      return [i, s];
    if (l || u) {
      const ge = np[I] || [];
      return u ? ["danger", ge[1]] : ge;
    }
    return F?.color && F?.variant ? [F.color, F.variant] : ["default", "outlined"];
  }, [i, s, l, u, F?.color, F?.variant, I]), A = R === "danger" ? "dangerous" : R, {
    getPrefixCls: B,
    direction: k,
    autoInsertSpace: U,
    className: Q,
    style: q,
    classNames: K,
    styles: G
  } = ml("button"), oe = (r = $ ?? U) !== null && r !== void 0 ? r : !0, Y = B("btn", a), [ie, Re, _e] = Uv(Y), Ve = Ie(gn), pe = p ?? Ve, Ee = Ie(oc), xe = Rt(() => rp(o), [o]), [V, J] = un(xe.loading), [se, Ke] = un(!1), de = ne(null), De = va(t, de), je = iu.count(m) === 1 && !b && !Zr(j), he = ne(!0);
  T.useEffect(() => (he.current = !1, () => {
    he.current = !0;
  }), []), Xt(() => {
    let ge = null;
    xe.delay > 0 ? ge = setTimeout(() => {
      ge = null, J(!0);
    }, xe.delay) : J(xe.loading);
    function Ye() {
      ge && (clearTimeout(ge), ge = null);
    }
    return Ye;
  }, [xe.delay, xe.loading]), Ue(() => {
    if (!de.current || !oe)
      return;
    const ge = de.current.textContent || "";
    je && Yo(ge) ? se || Ke(!0) : se && Ke(!1);
  }), Ue(() => {
    N && de.current && de.current.focus();
  }, []);
  const me = T.useCallback((ge) => {
    var Ye;
    if (V || pe) {
      ge.preventDefault();
      return;
    }
    (Ye = e.onClick) === null || Ye === void 0 || Ye.call(e, ("href" in e, ge));
  }, [e.onClick, V, pe]);
  if (process.env.NODE_ENV !== "production") {
    const ge = st("Button");
    process.env.NODE_ENV !== "production" && ge(!(typeof b == "string" && b.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${b}\` at https://ant.design/components/icon`), process.env.NODE_ENV !== "production" && ge(!(C && Zr(j)), "usage", "`link` or `text` button can't be a `ghost` button.");
  }
  const {
    compactSize: ke,
    compactItemClassnames: lt
  } = Hg(Y, k), yt = {
    large: "lg",
    small: "sm",
    middle: void 0
  }, Fr = kg((ge) => {
    var Ye, ir;
    return (ir = (Ye = d ?? ke) !== null && Ye !== void 0 ? Ye : Ee) !== null && ir !== void 0 ? ir : ge;
  }), Ir = Fr && (n = yt[Fr]) !== null && n !== void 0 ? n : "", Vn = V ? "loading" : b, or = Tn(_, ["navigate"]), Mr = z(Y, Re, _e, {
    [`${Y}-${M}`]: M !== "default" && M,
    // Compatible with versions earlier than 5.21.0
    [`${Y}-${I}`]: I,
    [`${Y}-dangerous`]: u,
    [`${Y}-color-${A}`]: A,
    [`${Y}-variant-${j}`]: j,
    [`${Y}-${Ir}`]: Ir,
    [`${Y}-icon-only`]: !m && m !== 0 && !!Vn,
    [`${Y}-background-ghost`]: C && !Zr(j),
    [`${Y}-loading`]: V,
    [`${Y}-two-chinese-chars`]: se && oe && !V,
    [`${Y}-block`]: S,
    [`${Y}-rtl`]: k === "rtl",
    [`${Y}-icon-end`]: y === "end"
  }, lt, v, h, Q), jr = Object.assign(Object.assign({}, q), E), Ar = z(O?.icon, K.icon), Lr = Object.assign(Object.assign({}, f?.icon || {}), G.icon || {}), Vr = b && !V ? /* @__PURE__ */ T.createElement(Qo, {
    prefixCls: Y,
    className: Ar,
    style: Lr
  }, b) : o && typeof o == "object" && o.icon ? /* @__PURE__ */ T.createElement(Qo, {
    prefixCls: Y,
    className: Ar,
    style: Lr
  }, o.icon) : /* @__PURE__ */ T.createElement(Gg, {
    existIcon: !!b,
    prefixCls: Y,
    loading: V,
    mount: he.current
  }), Dr = m || m === 0 ? Ug(m, je && oe) : null;
  if (or.href !== void 0)
    return ie(/* @__PURE__ */ T.createElement("a", Object.assign({}, or, {
      className: z(Mr, {
        [`${Y}-disabled`]: pe
      }),
      href: pe ? void 0 : or.href,
      style: jr,
      onClick: me,
      ref: De,
      tabIndex: pe ? -1 : 0,
      "aria-disabled": pe
    }), Vr, Dr));
  let ar = /* @__PURE__ */ T.createElement("button", Object.assign({}, _, {
    type: x,
    className: Mr,
    style: jr,
    onClick: me,
    disabled: pe,
    ref: De
  }), Vr, Dr, lt && /* @__PURE__ */ T.createElement(ep, {
    prefixCls: Y
  }));
  return Zr(j) || (ar = /* @__PURE__ */ T.createElement(rc, {
    component: "Button",
    disabled: V
  }, ar)), ie(ar);
}), rr = op;
rr.Group = Wg;
rr.__ANT_BUTTON = !0;
process.env.NODE_ENV !== "production" && (rr.displayName = "Button");
const oo = (e) => typeof e?.then == "function", pc = (e) => {
  const {
    type: t,
    children: r,
    prefixCls: n,
    buttonProps: o,
    close: a,
    autoFocus: i,
    emitEvent: s,
    isSilent: l,
    quitOnNullishReturnValue: u,
    actionFn: c
  } = e, d = g.useRef(!1), f = g.useRef(null), [p, v] = Zt(!1), h = (...y) => {
    a?.apply(void 0, y);
  };
  g.useEffect(() => {
    let y = null;
    return i && (y = setTimeout(() => {
      var C;
      (C = f.current) === null || C === void 0 || C.focus({
        preventScroll: !0
      });
    })), () => {
      y && clearTimeout(y);
    };
  }, [i]);
  const m = (y) => {
    oo(y) && (v(!0), y.then((...C) => {
      v(!1, !0), h.apply(void 0, C), d.current = !1;
    }, (C) => {
      if (v(!1, !0), d.current = !1, !l?.())
        return Promise.reject(C);
    }));
  }, b = (y) => {
    if (d.current)
      return;
    if (d.current = !0, !c) {
      h();
      return;
    }
    let C;
    if (s) {
      if (C = c(y), u && !oo(C)) {
        d.current = !1, h(y);
        return;
      }
    } else if (c.length)
      C = c(a), d.current = !1;
    else if (C = c(), !oo(C)) {
      h();
      return;
    }
    m(C);
  };
  return /* @__PURE__ */ g.createElement(rr, Object.assign({}, ac(t), {
    onClick: b,
    loading: p,
    prefixCls: n
  }, o, {
    ref: f
  }), r);
}, Nr = /* @__PURE__ */ T.createContext({}), {
  Provider: hc
} = Nr, qi = () => {
  const {
    autoFocusButton: e,
    cancelButtonProps: t,
    cancelTextLocale: r,
    isSilent: n,
    mergedOkCancel: o,
    rootPrefixCls: a,
    close: i,
    onCancel: s,
    onConfirm: l
  } = Ie(Nr);
  return o ? /* @__PURE__ */ T.createElement(pc, {
    isSilent: n,
    actionFn: s,
    close: (...u) => {
      i?.apply(void 0, u), l?.(!1);
    },
    autoFocus: e === "cancel",
    buttonProps: t,
    prefixCls: `${a}-btn`
  }, r) : null;
}, Ui = () => {
  const {
    autoFocusButton: e,
    close: t,
    isSilent: r,
    okButtonProps: n,
    rootPrefixCls: o,
    okTextLocale: a,
    okType: i,
    onConfirm: s,
    onOk: l
  } = Ie(Nr);
  return /* @__PURE__ */ T.createElement(pc, {
    isSilent: r,
    type: i || "primary",
    actionFn: l,
    close: (...u) => {
      t?.apply(void 0, u), s?.(!0);
    },
    autoFocus: e === "ok",
    buttonProps: n,
    prefixCls: `${o}-btn`
  }, a);
};
var yc = /* @__PURE__ */ g.createContext(null), Gi = [];
function ap(e, t) {
  var r = g.useState(function() {
    if (!Ae())
      return null;
    var v = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && v.setAttribute("data-debug", t), v;
  }), n = D(r, 1), o = n[0], a = g.useRef(!1), i = g.useContext(yc), s = g.useState(Gi), l = D(s, 2), u = l[0], c = l[1], d = i || (a.current ? void 0 : function(v) {
    c(function(h) {
      var m = [v].concat(H(h));
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
  return Xt(function() {
    return e ? i ? i(f) : f() : p(), p;
  }, [e]), Xt(function() {
    u.length && (u.forEach(function(v) {
      return v();
    }), c(Gi));
  }, [u]), [o, d];
}
function ip(e) {
  var t = "rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)), r = document.createElement("div");
  r.id = t;
  var n = r.style;
  n.position = "absolute", n.left = "0", n.top = "0", n.width = "100px", n.height = "100px", n.overflow = "scroll";
  var o, a;
  if (e) {
    var i = getComputedStyle(e);
    n.scrollbarColor = i.scrollbarColor, n.scrollbarWidth = i.scrollbarWidth;
    var s = getComputedStyle(e, "::-webkit-scrollbar"), l = parseInt(s.width, 10), u = parseInt(s.height, 10);
    try {
      var c = l ? "width: ".concat(s.width, ";") : "", d = u ? "height: ".concat(s.height, ";") : "";
      ft(`
#`.concat(t, `::-webkit-scrollbar {
`).concat(c, `
`).concat(d, `
}`), t);
    } catch (v) {
      console.error(v), o = l, a = u;
    }
  }
  document.body.appendChild(r);
  var f = e && o && !isNaN(o) ? o : r.offsetWidth - r.clientWidth, p = e && a && !isNaN(a) ? a : r.offsetHeight - r.clientHeight;
  return document.body.removeChild(r), br(t), {
    width: f,
    height: p
  };
}
function sp(e) {
  return typeof document > "u" || !e || !(e instanceof Element) ? {
    width: 0,
    height: 0
  } : ip(e);
}
function lp() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var cp = "rc-util-locker-".concat(Date.now()), Xi = 0;
function up(e) {
  var t = !!e, r = g.useState(function() {
    return Xi += 1, "".concat(cp, "_").concat(Xi);
  }), n = D(r, 1), o = n[0];
  Xt(function() {
    if (t) {
      var a = sp(document.body).width, i = lp();
      ft(`
html body {
  overflow-y: hidden;
  `.concat(i ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), o);
    } else
      br(o);
    return function() {
      br(o);
    };
  }, [t, o]);
}
var dp = !1;
function fp(e) {
  return dp;
}
var Ki = function(t) {
  return t === !1 ? !1 : !Ae() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, bc = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, o = e.getContainer, a = e.debug, i = e.autoDestroy, s = i === void 0 ? !0 : i, l = e.children, u = g.useState(r), c = D(u, 2), d = c[0], f = c[1], p = d || r;
  process.env.NODE_ENV !== "production" && ce(Ae() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), g.useEffect(function() {
    (s || r) && f(r);
  }, [r, s]);
  var v = g.useState(function() {
    return Ki(o);
  }), h = D(v, 2), m = h[0], b = h[1];
  g.useEffect(function() {
    var F = Ki(o);
    b(F ?? null);
  });
  var y = ap(p && !m, a), C = D(y, 2), S = C[0], x = C[1], O = m ?? S;
  up(n && r && Ae() && (O === S || O === document.body));
  var E = null;
  if (l && pa(l) && t) {
    var $ = l;
    E = $.ref;
  }
  var N = va(E, t);
  if (!p || !Ae() || m === void 0)
    return null;
  var _ = O === !1 || fp(), I = l;
  return t && (I = /* @__PURE__ */ g.cloneElement(l, {
    ref: N
  })), /* @__PURE__ */ g.createElement(yc.Provider, {
    value: x
  }, _ ? I : /* @__PURE__ */ su(I, O));
});
process.env.NODE_ENV !== "production" && (bc.displayName = "Portal");
var Cc = /* @__PURE__ */ g.createContext({});
function mp() {
  var e = P({}, g);
  return e.useId;
}
var Yi = 0, Qi = mp();
const gp = Qi ? (
  // Use React `useId`
  function(t) {
    var r = Qi();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = g.useState("ssr-id"), n = D(r, 2), o = n[0], a = n[1];
    return g.useEffect(function() {
      var i = Yi;
      Yi += 1, a("rc_unique_".concat(i));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : o);
  }
);
function Zi(e, t, r) {
  var n = t;
  return !n && r && (n = "".concat(e, "-").concat(r)), n;
}
function Ji(e, t) {
  var r = e["page".concat(t ? "Y" : "X", "Offset")], n = "scroll".concat(t ? "Top" : "Left");
  if (typeof r != "number") {
    var o = e.document;
    r = o.documentElement[n], typeof r != "number" && (r = o.body[n]);
  }
  return r;
}
function vp(e) {
  var t = e.getBoundingClientRect(), r = {
    left: t.left,
    top: t.top
  }, n = e.ownerDocument, o = n.defaultView || n.parentWindow;
  return r.left += Ji(o), r.top += Ji(o, !0), r;
}
const pp = /* @__PURE__ */ g.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  var r = t.shouldUpdate;
  return !r;
});
var hp = {
  width: 0,
  height: 0,
  overflow: "hidden",
  outline: "none"
}, yp = {
  outline: "none"
}, Fa = /* @__PURE__ */ T.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.className, o = e.style, a = e.title, i = e.ariaId, s = e.footer, l = e.closable, u = e.closeIcon, c = e.onClose, d = e.children, f = e.bodyStyle, p = e.bodyProps, v = e.modalRender, h = e.onMouseDown, m = e.onMouseUp, b = e.holderRef, y = e.visible, C = e.forceRender, S = e.width, x = e.height, O = e.classNames, E = e.styles, $ = T.useContext(Cc), N = $.panel, _ = va(b, N), I = ne(), F = ne();
  T.useImperativeHandle(t, function() {
    return {
      focus: function() {
        var q;
        (q = I.current) === null || q === void 0 || q.focus({
          preventScroll: !0
        });
      },
      changeActive: function(q) {
        var K = document, G = K.activeElement;
        q && G === F.current ? I.current.focus({
          preventScroll: !0
        }) : !q && G === I.current && F.current.focus({
          preventScroll: !0
        });
      }
    };
  });
  var M = {};
  S !== void 0 && (M.width = S), x !== void 0 && (M.height = x);
  var R = s ? /* @__PURE__ */ T.createElement("div", {
    className: z("".concat(r, "-footer"), O?.footer),
    style: P({}, E?.footer)
  }, s) : null, j = a ? /* @__PURE__ */ T.createElement("div", {
    className: z("".concat(r, "-header"), O?.header),
    style: P({}, E?.header)
  }, /* @__PURE__ */ T.createElement("div", {
    className: "".concat(r, "-title"),
    id: i
  }, a)) : null, L = Rt(function() {
    return W(l) === "object" && l !== null ? l : l ? {
      closeIcon: u ?? /* @__PURE__ */ T.createElement("span", {
        className: "".concat(r, "-close-x")
      })
    } : {};
  }, [l, u, r]), A = Na(L, !0), B = W(l) === "object" && l.disabled, k = l ? /* @__PURE__ */ T.createElement("button", ue({
    type: "button",
    onClick: c,
    "aria-label": "Close"
  }, A, {
    className: "".concat(r, "-close"),
    disabled: B
  }), L.closeIcon) : null, U = /* @__PURE__ */ T.createElement("div", {
    className: z("".concat(r, "-content"), O?.content),
    style: E?.content
  }, k, j, /* @__PURE__ */ T.createElement("div", ue({
    className: z("".concat(r, "-body"), O?.body),
    style: P(P({}, f), E?.body)
  }, p), d), R);
  return /* @__PURE__ */ T.createElement("div", {
    key: "dialog-element",
    role: "dialog",
    "aria-labelledby": a ? i : null,
    "aria-modal": "true",
    ref: _,
    style: P(P({}, o), M),
    className: z(r, n),
    onMouseDown: h,
    onMouseUp: m
  }, /* @__PURE__ */ T.createElement("div", {
    ref: I,
    tabIndex: 0,
    style: yp
  }, /* @__PURE__ */ T.createElement(pp, {
    shouldUpdate: y || C
  }, v ? v(U) : U)), /* @__PURE__ */ T.createElement("div", {
    tabIndex: 0,
    ref: F,
    style: hp
  }));
});
process.env.NODE_ENV !== "production" && (Fa.displayName = "Panel");
var xc = /* @__PURE__ */ g.forwardRef(function(e, t) {
  var r = e.prefixCls, n = e.title, o = e.style, a = e.className, i = e.visible, s = e.forceRender, l = e.destroyOnClose, u = e.motionName, c = e.ariaId, d = e.onVisibleChanged, f = e.mousePosition, p = ne(), v = g.useState(), h = D(v, 2), m = h[0], b = h[1], y = {};
  m && (y.transformOrigin = m);
  function C() {
    var S = vp(p.current);
    b(f && (f.x || f.y) ? "".concat(f.x - S.left, "px ").concat(f.y - S.top, "px") : "");
  }
  return /* @__PURE__ */ g.createElement($r, {
    visible: i,
    onVisibleChanged: d,
    onAppearPrepare: C,
    onEnterPrepare: C,
    forceRender: s,
    motionName: u,
    removeOnLeave: l,
    ref: p
  }, function(S, x) {
    var O = S.className, E = S.style;
    return /* @__PURE__ */ g.createElement(Fa, ue({}, e, {
      ref: t,
      title: n,
      ariaId: c,
      prefixCls: r,
      holderRef: x,
      style: P(P(P({}, E), o), y),
      className: z(a, O)
    }));
  });
});
xc.displayName = "Content";
var bp = function(t) {
  var r = t.prefixCls, n = t.style, o = t.visible, a = t.maskProps, i = t.motionName, s = t.className;
  return /* @__PURE__ */ g.createElement($r, {
    key: "mask",
    visible: o,
    motionName: i,
    leavedClassName: "".concat(r, "-mask-hidden")
  }, function(l, u) {
    var c = l.className, d = l.style;
    return /* @__PURE__ */ g.createElement("div", ue({
      ref: u,
      style: P(P({}, d), n),
      className: z("".concat(r, "-mask"), c, s)
    }, a));
  });
}, Cp = function(t) {
  var r = t.prefixCls, n = r === void 0 ? "rc-dialog" : r, o = t.zIndex, a = t.visible, i = a === void 0 ? !1 : a, s = t.keyboard, l = s === void 0 ? !0 : s, u = t.focusTriggerAfterClose, c = u === void 0 ? !0 : u, d = t.wrapStyle, f = t.wrapClassName, p = t.wrapProps, v = t.onClose, h = t.afterOpenChange, m = t.afterClose, b = t.transitionName, y = t.animation, C = t.closable, S = C === void 0 ? !0 : C, x = t.mask, O = x === void 0 ? !0 : x, E = t.maskTransitionName, $ = t.maskAnimation, N = t.maskClosable, _ = N === void 0 ? !0 : N, I = t.maskStyle, F = t.maskProps, M = t.rootClassName, R = t.classNames, j = t.styles;
  process.env.NODE_ENV !== "production" && (["wrapStyle", "bodyStyle", "maskStyle"].forEach(function(J) {
    vr(!(J in t), "".concat(J, " is deprecated, please use styles instead."));
  }), "wrapClassName" in t && vr(!1, "wrapClassName is deprecated, please use classNames instead."));
  var L = ne(), A = ne(), B = ne(), k = g.useState(i), U = D(k, 2), Q = U[0], q = U[1], K = gp();
  function G() {
    ho(A.current, document.activeElement) || (L.current = document.activeElement);
  }
  function oe() {
    if (!ho(A.current, document.activeElement)) {
      var J;
      (J = B.current) === null || J === void 0 || J.focus();
    }
  }
  function Y(J) {
    if (J)
      oe();
    else {
      if (q(!1), O && L.current && c) {
        try {
          L.current.focus({
            preventScroll: !0
          });
        } catch {
        }
        L.current = null;
      }
      Q && m?.();
    }
    h?.(J);
  }
  function ie(J) {
    v?.(J);
  }
  var Re = ne(!1), _e = ne(), Ve = function() {
    clearTimeout(_e.current), Re.current = !0;
  }, pe = function() {
    _e.current = setTimeout(function() {
      Re.current = !1;
    });
  }, Ee = null;
  _ && (Ee = function(se) {
    Re.current ? Re.current = !1 : A.current === se.target && ie(se);
  });
  function xe(J) {
    if (l && J.keyCode === Fi.ESC) {
      J.stopPropagation(), ie(J);
      return;
    }
    i && J.keyCode === Fi.TAB && B.current.changeActive(!J.shiftKey);
  }
  Ue(function() {
    i && (q(!0), G());
  }, [i]), Ue(function() {
    return function() {
      clearTimeout(_e.current);
    };
  }, []);
  var V = P(P(P({
    zIndex: o
  }, d), j?.wrapper), {}, {
    display: Q ? null : "none"
  });
  return /* @__PURE__ */ g.createElement("div", ue({
    className: z("".concat(n, "-root"), M)
  }, Na(t, {
    data: !0
  })), /* @__PURE__ */ g.createElement(bp, {
    prefixCls: n,
    visible: O && i,
    motionName: Zi(n, E, $),
    style: P(P({
      zIndex: o
    }, I), j?.mask),
    maskProps: F,
    className: R?.mask
  }), /* @__PURE__ */ g.createElement("div", ue({
    tabIndex: -1,
    onKeyDown: xe,
    className: z("".concat(n, "-wrap"), f, R?.wrapper),
    ref: A,
    onClick: Ee,
    style: V
  }, p), /* @__PURE__ */ g.createElement(xc, ue({}, t, {
    onMouseDown: Ve,
    onMouseUp: pe,
    ref: B,
    closable: S,
    ariaId: K,
    prefixCls: n,
    visible: i && Q,
    onClose: ie,
    onVisibleChanged: Y,
    motionName: Zi(n, b, y)
  }))));
}, Sc = function(t) {
  var r = t.visible, n = t.getContainer, o = t.forceRender, a = t.destroyOnClose, i = a === void 0 ? !1 : a, s = t.afterClose, l = t.panelRef, u = g.useState(r), c = D(u, 2), d = c[0], f = c[1], p = g.useMemo(function() {
    return {
      panel: l
    };
  }, [l]);
  return g.useEffect(function() {
    r && f(!0);
  }, [r]), !o && i && !d ? null : /* @__PURE__ */ g.createElement(Cc.Provider, {
    value: p
  }, /* @__PURE__ */ g.createElement(bc, {
    open: r || o || d,
    autoDestroy: !1,
    getContainer: n,
    autoLock: r || d
  }, /* @__PURE__ */ g.createElement(Cp, ue({}, t, {
    destroyOnClose: i,
    afterClose: function() {
      s?.(), f(!1);
    }
  }))));
};
Sc.displayName = "Dialog";
var Pt = "RC_FORM_INTERNAL_HOOKS", ae = function() {
  ce(!1, "Can not find FormContext. Please make sure you wrap Field under Form.");
}, Jt = /* @__PURE__ */ g.createContext({
  getFieldValue: ae,
  getFieldsValue: ae,
  getFieldError: ae,
  getFieldWarning: ae,
  getFieldsError: ae,
  isFieldsTouched: ae,
  isFieldTouched: ae,
  isFieldValidating: ae,
  isFieldsValidating: ae,
  resetFields: ae,
  setFields: ae,
  setFieldValue: ae,
  setFieldsValue: ae,
  validateFields: ae,
  submit: ae,
  getInternalHooks: function() {
    return ae(), {
      dispatch: ae,
      initEntityValue: ae,
      registerField: ae,
      useSubscribe: ae,
      setInitialValues: ae,
      destroyForm: ae,
      setCallbacks: ae,
      registerWatch: ae,
      getFields: ae,
      setValidateMessages: ae,
      setPreserve: ae,
      getInitialValue: ae
    };
  }
}), bn = /* @__PURE__ */ g.createContext(null);
function Zo(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e];
}
function xp(e) {
  return e && !!e._init;
}
function Jo() {
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
var ea = Jo();
function Sp(e) {
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
function Ep(e, t, r) {
  if (ha()) return Reflect.construct.apply(null, arguments);
  var n = [null];
  n.push.apply(n, t);
  var o = new (e.bind.apply(e, n))();
  return r && pr(o, r.prototype), o;
}
function ta(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return ta = function(n) {
    if (n === null || !Sp(n)) return n;
    if (typeof n != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(n)) return t.get(n);
      t.set(n, o);
    }
    function o() {
      return Ep(n, arguments, hr(this).constructor);
    }
    return o.prototype = Object.create(n.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), pr(o, n);
  }, ta(e);
}
var wp = /%[sdj%]/g, Ec = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ec = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(n) {
    return typeof n == "string";
  }) && console.warn(t, r);
});
function ra(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var n = r.field;
    t[n] = t[n] || [], t[n].push(r);
  }), t;
}
function ze(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  var o = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var i = e.replace(wp, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(r[o++]);
        case "%d":
          return Number(r[o++]);
        case "%j":
          try {
            return JSON.stringify(r[o++]);
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
function Op(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Se(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || Op(t) && typeof e == "string" && !e);
}
function $p(e, t, r) {
  var n = [], o = 0, a = e.length;
  function i(s) {
    n.push.apply(n, H(s || [])), o++, o === a && r(n);
  }
  e.forEach(function(s) {
    t(s, i);
  });
}
function es(e, t, r) {
  var n = 0, o = e.length;
  function a(i) {
    if (i && i.length) {
      r(i);
      return;
    }
    var s = n;
    n = n + 1, s < o ? t(e[s], a) : r([]);
  }
  a([]);
}
function Pp(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, H(e[r] || []));
  }), t;
}
var ts = /* @__PURE__ */ (function(e) {
  _t(r, e);
  var t = Ft(r);
  function r(n, o) {
    var a;
    return Ne(this, r), a = t.call(this, "Async Validation Error"), w(X(a), "errors", void 0), w(X(a), "fields", void 0), a.errors = n, a.fields = o, a;
  }
  return Te(r);
})(/* @__PURE__ */ ta(Error));
function Np(e, t, r, n, o) {
  if (t.first) {
    var a = new Promise(function(f, p) {
      var v = function(b) {
        return n(b), b.length ? p(new ts(b, ra(b))) : f(o);
      }, h = Pp(e);
      es(h, r, v);
    });
    return a.catch(function(f) {
      return f;
    }), a;
  }
  var i = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), l = s.length, u = 0, c = [], d = new Promise(function(f, p) {
    var v = function(m) {
      if (c.push.apply(c, m), u++, u === l)
        return n(c), c.length ? p(new ts(c, ra(c))) : f(o);
    };
    s.length || (n(c), f(o)), s.forEach(function(h) {
      var m = e[h];
      i.indexOf(h) !== -1 ? es(m, r, v) : $p(m, r, v);
    });
  });
  return d.catch(function(f) {
    return f;
  }), d;
}
function Tp(e) {
  return !!(e && e.message !== void 0);
}
function Rp(e, t) {
  for (var r = e, n = 0; n < t.length; n++) {
    if (r == null)
      return r;
    r = r[t[n]];
  }
  return r;
}
function rs(e, t) {
  return function(r) {
    var n;
    return e.fullFields ? n = Rp(t, e.fullFields) : n = t[r.field || e.fullField], Tp(r) ? (r.field = r.field || e.fullField, r.fieldValue = n, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: n,
      field: r.field || e.fullField
    };
  };
}
function ns(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var n = t[r];
        W(n) === "object" && W(e[r]) === "object" ? e[r] = P(P({}, e[r]), n) : e[r] = n;
      }
  }
  return e;
}
var Vt = "enum", _p = function(t, r, n, o, a) {
  t[Vt] = Array.isArray(t[Vt]) ? t[Vt] : [], t[Vt].indexOf(r) === -1 && o.push(ze(a.messages[Vt], t.fullField, t[Vt].join(", ")));
}, Fp = function(t, r, n, o, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || o.push(ze(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var i = new RegExp(t.pattern);
      i.test(r) || o.push(ze(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Ip = function(t, r, n, o, a) {
  var i = typeof t.len == "number", s = typeof t.min == "number", l = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, d = null, f = typeof r == "number", p = typeof r == "string", v = Array.isArray(r);
  if (f ? d = "number" : p ? d = "string" : v && (d = "array"), !d)
    return !1;
  v && (c = r.length), p && (c = r.replace(u, "_").length), i ? c !== t.len && o.push(ze(a.messages[d].len, t.fullField, t.len)) : s && !l && c < t.min ? o.push(ze(a.messages[d].min, t.fullField, t.min)) : l && !s && c > t.max ? o.push(ze(a.messages[d].max, t.fullField, t.max)) : s && l && (c < t.min || c > t.max) && o.push(ze(a.messages[d].range, t.fullField, t.min, t.max));
}, wc = function(t, r, n, o, a, i) {
  t.required && (!n.hasOwnProperty(t.field) || Se(r, i || t.type)) && o.push(ze(a.messages.required, t.fullField));
}, Jr;
const Mp = (function() {
  if (Jr)
    return Jr;
  var e = "[a-fA-F\\d:]", t = function(O) {
    return O && O.includeBoundaries ? "(?:(?<=\\s|^)(?=".concat(e, ")|(?<=").concat(e, ")(?=\\s|$))") : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", o = [
    "(?:".concat(n, ":){7}(?:").concat(n, "|:)"),
    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
    "(?:".concat(n, ":){6}(?:").concat(r, "|:").concat(n, "|:)"),
    // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::
    "(?:".concat(n, ":){5}(?::").concat(r, "|(?::").concat(n, "){1,2}|:)"),
    // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::
    "(?:".concat(n, ":){4}(?:(?::").concat(n, "){0,1}:").concat(r, "|(?::").concat(n, "){1,3}|:)"),
    // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::
    "(?:".concat(n, ":){3}(?:(?::").concat(n, "){0,2}:").concat(r, "|(?::").concat(n, "){1,4}|:)"),
    // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::
    "(?:".concat(n, ":){2}(?:(?::").concat(n, "){0,3}:").concat(r, "|(?::").concat(n, "){1,5}|:)"),
    // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::
    "(?:".concat(n, ":){1}(?:(?::").concat(n, "){0,4}:").concat(r, "|(?::").concat(n, "){1,6}|:)"),
    // 1::              1::3:4:5:6:7:8   1::8            1::
    "(?::(?:(?::".concat(n, "){0,5}:").concat(r, "|(?::").concat(n, "){1,7}|:))")
    // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::
  ], a = "(?:%[0-9a-zA-Z]{1,})?", i = "(?:".concat(o.join("|"), ")").concat(a), s = new RegExp("(?:^".concat(r, "$)|(?:^").concat(i, "$)")), l = new RegExp("^".concat(r, "$")), u = new RegExp("^".concat(i, "$")), c = function(O) {
    return O && O.exact ? s : new RegExp("(?:".concat(t(O)).concat(r).concat(t(O), ")|(?:").concat(t(O)).concat(i).concat(t(O), ")"), "g");
  };
  c.v4 = function(x) {
    return x && x.exact ? l : new RegExp("".concat(t(x)).concat(r).concat(t(x)), "g");
  }, c.v6 = function(x) {
    return x && x.exact ? u : new RegExp("".concat(t(x)).concat(i).concat(t(x)), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", f = "(?:\\S+(?::\\S*)?@)?", p = c.v4().source, v = c.v6().source, h = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", m = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", b = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", y = "(?::\\d{2,5})?", C = '(?:[/?#][^\\s"]*)?', S = "(?:".concat(d, "|www\\.)").concat(f, "(?:localhost|").concat(p, "|").concat(v, "|").concat(h).concat(m).concat(b, ")").concat(y).concat(C);
  return Jr = new RegExp("(?:^".concat(S, "$)"), "i"), Jr;
});
var os = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ur = {
  integer: function(t) {
    return ur.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ur.number(t) && !ur.integer(t);
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
    return W(t) === "object" && !ur.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(os.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(Mp());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(os.hex);
  }
}, jp = function(t, r, n, o, a) {
  if (t.required && r === void 0) {
    wc(t, r, n, o, a);
    return;
  }
  var i = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  i.indexOf(s) > -1 ? ur[s](r) || o.push(ze(a.messages.types[s], t.fullField, t.type)) : s && W(r) !== t.type && o.push(ze(a.messages.types[s], t.fullField, t.type));
}, Ap = function(t, r, n, o, a) {
  (/^\s+$/.test(r) || r === "") && o.push(ze(a.messages.whitespace, t.fullField));
};
const Z = {
  required: wc,
  whitespace: Ap,
  type: jp,
  range: Ip,
  enum: _p,
  pattern: Fp
};
var Lp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a);
  }
  n(i);
}, Vp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return n();
    Z.required(t, r, o, i, a, "array"), r != null && (Z.type(t, r, o, i, a), Z.range(t, r, o, i, a));
  }
  n(i);
}, Dp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && Z.type(t, r, o, i, a);
  }
  n(i);
}, kp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r, "date") && !t.required)
      return n();
    if (Z.required(t, r, o, i, a), !Se(r, "date")) {
      var l;
      r instanceof Date ? l = r : l = new Date(r), Z.type(t, l, o, i, a), l && Z.range(t, l.getTime(), o, i, a);
    }
  }
  n(i);
}, Hp = "enum", Bp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && Z[Hp](t, r, o, i, a);
  }
  n(i);
}, zp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && (Z.type(t, r, o, i, a), Z.range(t, r, o, i, a));
  }
  n(i);
}, Wp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && (Z.type(t, r, o, i, a), Z.range(t, r, o, i, a));
  }
  n(i);
}, qp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && Z.type(t, r, o, i, a);
  }
  n(i);
}, Up = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && (Z.type(t, r, o, i, a), Z.range(t, r, o, i, a));
  }
  n(i);
}, Gp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), r !== void 0 && Z.type(t, r, o, i, a);
  }
  n(i);
}, Xp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r, "string") && !t.required)
      return n();
    Z.required(t, r, o, i, a), Se(r, "string") || Z.pattern(t, r, o, i, a);
  }
  n(i);
}, Kp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r) && !t.required)
      return n();
    Z.required(t, r, o, i, a), Se(r) || Z.type(t, r, o, i, a);
  }
  n(i);
}, Yp = function(t, r, n, o, a) {
  var i = [], s = Array.isArray(r) ? "array" : W(r);
  Z.required(t, r, o, i, a, s), n(i);
}, Qp = function(t, r, n, o, a) {
  var i = [], s = t.required || !t.required && o.hasOwnProperty(t.field);
  if (s) {
    if (Se(r, "string") && !t.required)
      return n();
    Z.required(t, r, o, i, a, "string"), Se(r, "string") || (Z.type(t, r, o, i, a), Z.range(t, r, o, i, a), Z.pattern(t, r, o, i, a), t.whitespace === !0 && Z.whitespace(t, r, o, i, a));
  }
  n(i);
}, ao = function(t, r, n, o, a) {
  var i = t.type, s = [], l = t.required || !t.required && o.hasOwnProperty(t.field);
  if (l) {
    if (Se(r, i) && !t.required)
      return n();
    Z.required(t, r, o, s, a, i), Se(r, i) || Z.type(t, r, o, s, a);
  }
  n(s);
};
const mr = {
  string: Qp,
  method: qp,
  number: Up,
  boolean: Dp,
  regexp: Kp,
  integer: Wp,
  float: zp,
  array: Vp,
  object: Gp,
  enum: Bp,
  pattern: Xp,
  date: kp,
  url: ao,
  hex: ao,
  email: ao,
  required: Yp,
  any: Lp
};
var Tr = /* @__PURE__ */ (function() {
  function e(t) {
    Ne(this, e), w(this, "rules", null), w(this, "_messages", ea), this.define(t);
  }
  return Te(e, [{
    key: "define",
    value: function(r) {
      var n = this;
      if (!r)
        throw new Error("Cannot configure a schema with no rules");
      if (W(r) !== "object" || Array.isArray(r))
        throw new Error("Rules must be an object");
      this.rules = {}, Object.keys(r).forEach(function(o) {
        var a = r[o];
        n.rules[o] = Array.isArray(a) ? a : [a];
      });
    }
  }, {
    key: "messages",
    value: function(r) {
      return r && (this._messages = ns(Jo(), r)), this._messages;
    }
  }, {
    key: "validate",
    value: function(r) {
      var n = this, o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
      }, i = r, s = o, l = a;
      if (typeof s == "function" && (l = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
        return l && l(null, i), Promise.resolve(i);
      function u(v) {
        var h = [], m = {};
        function b(C) {
          if (Array.isArray(C)) {
            var S;
            h = (S = h).concat.apply(S, H(C));
          } else
            h.push(C);
        }
        for (var y = 0; y < v.length; y++)
          b(v[y]);
        h.length ? (m = ra(h), l(h, m)) : l(null, i);
      }
      if (s.messages) {
        var c = this.messages();
        c === ea && (c = Jo()), ns(c, s.messages), s.messages = c;
      } else
        s.messages = this.messages();
      var d = {}, f = s.keys || Object.keys(this.rules);
      f.forEach(function(v) {
        var h = n.rules[v], m = i[v];
        h.forEach(function(b) {
          var y = b;
          typeof y.transform == "function" && (i === r && (i = P({}, i)), m = i[v] = y.transform(m), m != null && (y.type = y.type || (Array.isArray(m) ? "array" : W(m)))), typeof y == "function" ? y = {
            validator: y
          } : y = P({}, y), y.validator = n.getValidationMethod(y), y.validator && (y.field = v, y.fullField = y.fullField || v, y.type = n.getType(y), d[v] = d[v] || [], d[v].push({
            rule: y,
            value: m,
            source: i,
            field: v
          }));
        });
      });
      var p = {};
      return Np(d, s, function(v, h) {
        var m = v.rule, b = (m.type === "object" || m.type === "array") && (W(m.fields) === "object" || W(m.defaultField) === "object");
        b = b && (m.required || !m.required && v.value), m.field = v.field;
        function y(E, $) {
          return P(P({}, $), {}, {
            fullField: "".concat(m.fullField, ".").concat(E),
            fullFields: m.fullFields ? [].concat(H(m.fullFields), [E]) : [E]
          });
        }
        function C() {
          var E = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], $ = Array.isArray(E) ? E : [E];
          !s.suppressWarning && $.length && e.warning("async-validator:", $), $.length && m.message !== void 0 && ($ = [].concat(m.message));
          var N = $.map(rs(m, i));
          if (s.first && N.length)
            return p[m.field] = 1, h(N);
          if (!b)
            h(N);
          else {
            if (m.required && !v.value)
              return m.message !== void 0 ? N = [].concat(m.message).map(rs(m, i)) : s.error && (N = [s.error(m, ze(s.messages.required, m.field))]), h(N);
            var _ = {};
            m.defaultField && Object.keys(v.value).map(function(M) {
              _[M] = m.defaultField;
            }), _ = P(P({}, _), v.rule.fields);
            var I = {};
            Object.keys(_).forEach(function(M) {
              var R = _[M], j = Array.isArray(R) ? R : [R];
              I[M] = j.map(y.bind(null, M));
            });
            var F = new e(I);
            F.messages(s.messages), v.rule.options && (v.rule.options.messages = s.messages, v.rule.options.error = s.error), F.validate(v.value, v.rule.options || s, function(M) {
              var R = [];
              N && N.length && R.push.apply(R, H(N)), M && M.length && R.push.apply(R, H(M)), h(R.length ? R : null);
            });
          }
        }
        var S;
        if (m.asyncValidator)
          S = m.asyncValidator(m, v.value, C, v.source, s);
        else if (m.validator) {
          try {
            S = m.validator(m, v.value, C, v.source, s);
          } catch (E) {
            var x, O;
            (x = (O = console).error) === null || x === void 0 || x.call(O, E), s.suppressValidatorError || setTimeout(function() {
              throw E;
            }, 0), C(E.message);
          }
          S === !0 ? C() : S === !1 ? C(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || "".concat(m.fullField || m.field, " fails")) : S instanceof Array ? C(S) : S instanceof Error && C(S.message);
        }
        S && S.then && S.then(function() {
          return C();
        }, function(E) {
          return C(E);
        });
      }, function(v) {
        u(v);
      }, i);
    }
  }, {
    key: "getType",
    value: function(r) {
      if (r.type === void 0 && r.pattern instanceof RegExp && (r.type = "pattern"), typeof r.validator != "function" && r.type && !mr.hasOwnProperty(r.type))
        throw new Error(ze("Unknown rule type %s", r.type));
      return r.type || "string";
    }
  }, {
    key: "getValidationMethod",
    value: function(r) {
      if (typeof r.validator == "function")
        return r.validator;
      var n = Object.keys(r), o = n.indexOf("message");
      return o !== -1 && n.splice(o, 1), n.length === 1 && n[0] === "required" ? mr.required : mr[this.getType(r)] || void 0;
    }
  }]), e;
})();
w(Tr, "register", function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  mr[t] = r;
});
w(Tr, "warning", Ec);
w(Tr, "messages", ea);
w(Tr, "validators", mr);
var Be = "'${name}' is not a valid ${type}", Oc = {
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
    string: Be,
    method: Be,
    array: Be,
    object: Be,
    number: Be,
    date: Be,
    boolean: Be,
    integer: Be,
    float: Be,
    regexp: Be,
    email: Be,
    url: Be,
    hex: Be
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
}, as = Tr;
function Zp(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function(r) {
    if (r.startsWith("\\"))
      return r.slice(1);
    var n = r.slice(2, -1);
    return t[n];
  });
}
var is = "CODE_LOGIC_ERROR";
function na(e, t, r, n, o) {
  return oa.apply(this, arguments);
}
function oa() {
  return oa = It(/* @__PURE__ */ Me().mark(function e(t, r, n, o, a) {
    var i, s, l, u, c, d, f, p, v;
    return Me().wrap(function(m) {
      for (; ; ) switch (m.prev = m.next) {
        case 0:
          return i = P({}, n), delete i.ruleIndex, as.warning = function() {
          }, i.validator && (s = i.validator, i.validator = function() {
            try {
              return s.apply(void 0, arguments);
            } catch (b) {
              return console.error(b), Promise.reject(is);
            }
          }), l = null, i && i.type === "array" && i.defaultField && (l = i.defaultField, delete i.defaultField), u = new as(w({}, t, [i])), c = kt(Oc, o.validateMessages), u.messages(c), d = [], m.prev = 10, m.next = 13, Promise.resolve(u.validate(w({}, t, r), P({}, o)));
        case 13:
          m.next = 18;
          break;
        case 15:
          m.prev = 15, m.t0 = m.catch(10), m.t0.errors && (d = m.t0.errors.map(function(b, y) {
            var C = b.message, S = C === is ? c.default : C;
            return /* @__PURE__ */ g.isValidElement(S) ? (
              // Wrap ReactNode with `key`
              /* @__PURE__ */ g.cloneElement(S, {
                key: "error_".concat(y)
              })
            ) : S;
          }));
        case 18:
          if (!(!d.length && l && Array.isArray(r) && r.length > 0)) {
            m.next = 23;
            break;
          }
          return m.next = 21, Promise.all(r.map(function(b, y) {
            return na("".concat(t, ".").concat(y), b, l, o, a);
          }));
        case 21:
          return f = m.sent, m.abrupt("return", f.reduce(function(b, y) {
            return [].concat(H(b), H(y));
          }, []));
        case 23:
          return p = P(P({}, n), {}, {
            name: t,
            enum: (n.enum || []).join(", ")
          }, a), v = d.map(function(b) {
            return typeof b == "string" ? Zp(b, p) : b;
          }), m.abrupt("return", v);
        case 26:
        case "end":
          return m.stop();
      }
    }, e, null, [[10, 15]]);
  })), oa.apply(this, arguments);
}
function Jp(e, t, r, n, o, a) {
  var i = e.join("."), s = r.map(function(c, d) {
    var f = c.validator, p = P(P({}, c), {}, {
      ruleIndex: d
    });
    return f && (p.validator = function(v, h, m) {
      var b = !1, y = function() {
        for (var x = arguments.length, O = new Array(x), E = 0; E < x; E++)
          O[E] = arguments[E];
        Promise.resolve().then(function() {
          ce(!b, "Your validator function has already return a promise. `callback` will be ignored."), b || m.apply(void 0, O);
        });
      }, C = f(v, h, y);
      b = C && typeof C.then == "function" && typeof C.catch == "function", ce(b, "`callback` is deprecated. Please return a promise instead."), b && C.then(function() {
        m();
      }).catch(function(S) {
        m(S || " ");
      });
    }), p;
  }).sort(function(c, d) {
    var f = c.warningOnly, p = c.ruleIndex, v = d.warningOnly, h = d.ruleIndex;
    return !!f == !!v ? p - h : f ? 1 : -1;
  }), l;
  if (o === !0)
    l = new Promise(/* @__PURE__ */ (function() {
      var c = It(/* @__PURE__ */ Me().mark(function d(f, p) {
        var v, h, m;
        return Me().wrap(function(y) {
          for (; ; ) switch (y.prev = y.next) {
            case 0:
              v = 0;
            case 1:
              if (!(v < s.length)) {
                y.next = 12;
                break;
              }
              return h = s[v], y.next = 5, na(i, t, h, n, a);
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
        return c.apply(this, arguments);
      };
    })());
  else {
    var u = s.map(function(c) {
      return na(i, t, c, n, a).then(function(d) {
        return {
          errors: d,
          rule: c
        };
      });
    });
    l = (o ? th(u) : eh(u)).then(function(c) {
      return Promise.reject(c);
    });
  }
  return l.catch(function(c) {
    return c;
  }), l;
}
function eh(e) {
  return aa.apply(this, arguments);
}
function aa() {
  return aa = It(/* @__PURE__ */ Me().mark(function e(t) {
    return Me().wrap(function(n) {
      for (; ; ) switch (n.prev = n.next) {
        case 0:
          return n.abrupt("return", Promise.all(t).then(function(o) {
            var a, i = (a = []).concat.apply(a, H(o));
            return i;
          }));
        case 1:
        case "end":
          return n.stop();
      }
    }, e);
  })), aa.apply(this, arguments);
}
function th(e) {
  return ia.apply(this, arguments);
}
function ia() {
  return ia = It(/* @__PURE__ */ Me().mark(function e(t) {
    var r;
    return Me().wrap(function(o) {
      for (; ; ) switch (o.prev = o.next) {
        case 0:
          return r = 0, o.abrupt("return", new Promise(function(a) {
            t.forEach(function(i) {
              i.then(function(s) {
                s.errors.length && a([s]), r += 1, r === t.length && a([]);
              });
            });
          }));
        case 2:
        case "end":
          return o.stop();
      }
    }, e);
  })), ia.apply(this, arguments);
}
function ve(e) {
  return Zo(e);
}
function ss(e, t) {
  var r = {};
  return t.forEach(function(n) {
    var o = ot(e, n);
    r = Qe(r, n, o);
  }), r;
}
function qt(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return e && e.some(function(n) {
    return $c(t, n, r);
  });
}
function $c(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  return !e || !t || !r && e.length !== t.length ? !1 : t.every(function(n, o) {
    return e[o] === n;
  });
}
function rh(e, t) {
  if (e === t)
    return !0;
  if (!e && t || e && !t || !e || !t || W(e) !== "object" || W(t) !== "object")
    return !1;
  var r = Object.keys(e), n = Object.keys(t), o = new Set([].concat(r, n));
  return H(o).every(function(a) {
    var i = e[a], s = t[a];
    return typeof i == "function" && typeof s == "function" ? !0 : i === s;
  });
}
function nh(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1];
  return t && t.target && W(t.target) === "object" && e in t.target ? t.target[e] : t;
}
function ls(e, t, r) {
  var n = e.length;
  if (t < 0 || t >= n || r < 0 || r >= n)
    return e;
  var o = e[t], a = t - r;
  return a > 0 ? [].concat(H(e.slice(0, r)), [o], H(e.slice(r, t)), H(e.slice(t + 1, n))) : a < 0 ? [].concat(H(e.slice(0, t)), H(e.slice(t + 1, r + 1)), [o], H(e.slice(r + 1, n))) : e;
}
var oh = ["name"], qe = [];
function io(e, t, r, n, o, a) {
  return typeof e == "function" ? e(t, r, "source" in a ? {
    source: a.source
  } : {}) : n !== o;
}
var Ia = /* @__PURE__ */ (function(e) {
  _t(r, e);
  var t = Ft(r);
  function r(n) {
    var o;
    if (Ne(this, r), o = t.call(this, n), w(X(o), "state", {
      resetCount: 0
    }), w(X(o), "cancelRegisterFunc", null), w(X(o), "mounted", !1), w(X(o), "touched", !1), w(X(o), "dirty", !1), w(X(o), "validatePromise", void 0), w(X(o), "prevValidating", void 0), w(X(o), "errors", qe), w(X(o), "warnings", qe), w(X(o), "cancelRegister", function() {
      var l = o.props, u = l.preserve, c = l.isListField, d = l.name;
      o.cancelRegisterFunc && o.cancelRegisterFunc(c, u, ve(d)), o.cancelRegisterFunc = null;
    }), w(X(o), "getNamePath", function() {
      var l = o.props, u = l.name, c = l.fieldContext, d = c.prefixName, f = d === void 0 ? [] : d;
      return u !== void 0 ? [].concat(H(f), H(u)) : [];
    }), w(X(o), "getRules", function() {
      var l = o.props, u = l.rules, c = u === void 0 ? [] : u, d = l.fieldContext;
      return c.map(function(f) {
        return typeof f == "function" ? f(d) : f;
      });
    }), w(X(o), "refresh", function() {
      o.mounted && o.setState(function(l) {
        var u = l.resetCount;
        return {
          resetCount: u + 1
        };
      });
    }), w(X(o), "metaCache", null), w(X(o), "triggerMetaEvent", function(l) {
      var u = o.props.onMetaChange;
      if (u) {
        var c = P(P({}, o.getMeta()), {}, {
          destroy: l
        });
        bo(o.metaCache, c) || u(c), o.metaCache = c;
      } else
        o.metaCache = null;
    }), w(X(o), "onStoreChange", function(l, u, c) {
      var d = o.props, f = d.shouldUpdate, p = d.dependencies, v = p === void 0 ? [] : p, h = d.onReset, m = c.store, b = o.getNamePath(), y = o.getValue(l), C = o.getValue(m), S = u && qt(u, b);
      switch (c.type === "valueUpdate" && c.source === "external" && !bo(y, C) && (o.touched = !0, o.dirty = !0, o.validatePromise = null, o.errors = qe, o.warnings = qe, o.triggerMetaEvent()), c.type) {
        case "reset":
          if (!u || S) {
            o.touched = !1, o.dirty = !1, o.validatePromise = void 0, o.errors = qe, o.warnings = qe, o.triggerMetaEvent(), h?.(), o.refresh();
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
          if (f && io(f, l, m, y, C, c)) {
            o.reRender();
            return;
          }
          break;
        }
        case "setField": {
          var x = c.data;
          if (S) {
            "touched" in x && (o.touched = x.touched), "validating" in x && !("originRCField" in x) && (o.validatePromise = x.validating ? Promise.resolve([]) : null), "errors" in x && (o.errors = x.errors || qe), "warnings" in x && (o.warnings = x.warnings || qe), o.dirty = !0, o.triggerMetaEvent(), o.reRender();
            return;
          } else if ("value" in x && qt(u, b, !0)) {
            o.reRender();
            return;
          }
          if (f && !b.length && io(f, l, m, y, C, c)) {
            o.reRender();
            return;
          }
          break;
        }
        case "dependenciesUpdate": {
          var O = v.map(ve);
          if (O.some(function(E) {
            return qt(c.relatedFields, E);
          })) {
            o.reRender();
            return;
          }
          break;
        }
        default:
          if (S || (!v.length || b.length || f) && io(f, l, m, y, C, c)) {
            o.reRender();
            return;
          }
          break;
      }
      f === !0 && o.reRender();
    }), w(X(o), "validateRules", function(l) {
      var u = o.getNamePath(), c = o.getValue(), d = l || {}, f = d.triggerName, p = d.validateOnly, v = p === void 0 ? !1 : p, h = Promise.resolve().then(/* @__PURE__ */ It(/* @__PURE__ */ Me().mark(function m() {
        var b, y, C, S, x, O, E;
        return Me().wrap(function(N) {
          for (; ; ) switch (N.prev = N.next) {
            case 0:
              if (o.mounted) {
                N.next = 2;
                break;
              }
              return N.abrupt("return", []);
            case 2:
              if (b = o.props, y = b.validateFirst, C = y === void 0 ? !1 : y, S = b.messageVariables, x = b.validateDebounce, O = o.getRules(), f && (O = O.filter(function(_) {
                return _;
              }).filter(function(_) {
                var I = _.validateTrigger;
                if (!I)
                  return !0;
                var F = Zo(I);
                return F.includes(f);
              })), !(x && f)) {
                N.next = 10;
                break;
              }
              return N.next = 8, new Promise(function(_) {
                setTimeout(_, x);
              });
            case 8:
              if (o.validatePromise === h) {
                N.next = 10;
                break;
              }
              return N.abrupt("return", []);
            case 10:
              return E = Jp(u, c, O, l, C, S), E.catch(function(_) {
                return _;
              }).then(function() {
                var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : qe;
                if (o.validatePromise === h) {
                  var I;
                  o.validatePromise = null;
                  var F = [], M = [];
                  (I = _.forEach) === null || I === void 0 || I.call(_, function(R) {
                    var j = R.rule.warningOnly, L = R.errors, A = L === void 0 ? qe : L;
                    j ? M.push.apply(M, H(A)) : F.push.apply(F, H(A));
                  }), o.errors = F, o.warnings = M, o.triggerMetaEvent(), o.reRender();
                }
              }), N.abrupt("return", E);
            case 13:
            case "end":
              return N.stop();
          }
        }, m);
      })));
      return v || (o.validatePromise = h, o.dirty = !0, o.errors = qe, o.warnings = qe, o.triggerMetaEvent(), o.reRender()), h;
    }), w(X(o), "isFieldValidating", function() {
      return !!o.validatePromise;
    }), w(X(o), "isFieldTouched", function() {
      return o.touched;
    }), w(X(o), "isFieldDirty", function() {
      if (o.dirty || o.props.initialValue !== void 0)
        return !0;
      var l = o.props.fieldContext, u = l.getInternalHooks(Pt), c = u.getInitialValue;
      return c(o.getNamePath()) !== void 0;
    }), w(X(o), "getErrors", function() {
      return o.errors;
    }), w(X(o), "getWarnings", function() {
      return o.warnings;
    }), w(X(o), "isListField", function() {
      return o.props.isListField;
    }), w(X(o), "isList", function() {
      return o.props.isList;
    }), w(X(o), "isPreserve", function() {
      return o.props.preserve;
    }), w(X(o), "getMeta", function() {
      o.prevValidating = o.isFieldValidating();
      var l = {
        touched: o.isFieldTouched(),
        validating: o.prevValidating,
        errors: o.errors,
        warnings: o.warnings,
        name: o.getNamePath(),
        validated: o.validatePromise === null
      };
      return l;
    }), w(X(o), "getOnlyChild", function(l) {
      if (typeof l == "function") {
        var u = o.getMeta();
        return P(P({}, o.getOnlyChild(l(o.getControlled(), u, o.props.fieldContext))), {}, {
          isFunction: !0
        });
      }
      var c = go(l);
      return c.length !== 1 || !/* @__PURE__ */ g.isValidElement(c[0]) ? {
        child: c,
        isFunction: !1
      } : {
        child: c[0],
        isFunction: !1
      };
    }), w(X(o), "getValue", function(l) {
      var u = o.props.fieldContext.getFieldsValue, c = o.getNamePath();
      return ot(l || u(!0), c);
    }), w(X(o), "getControlled", function() {
      var l = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, u = o.props, c = u.name, d = u.trigger, f = u.validateTrigger, p = u.getValueFromEvent, v = u.normalize, h = u.valuePropName, m = u.getValueProps, b = u.fieldContext, y = f !== void 0 ? f : b.validateTrigger, C = o.getNamePath(), S = b.getInternalHooks, x = b.getFieldsValue, O = S(Pt), E = O.dispatch, $ = o.getValue(), N = m || function(R) {
        return w({}, h, R);
      }, _ = l[d], I = c !== void 0 ? N($) : {};
      process.env.NODE_ENV !== "production" && I && Object.keys(I).forEach(function(R) {
        ce(typeof I[R] != "function", "It's not recommended to generate dynamic function prop by `getValueProps`. Please pass it to child component directly (prop: ".concat(R, ")"));
      });
      var F = P(P({}, l), I);
      F[d] = function() {
        o.touched = !0, o.dirty = !0, o.triggerMetaEvent();
        for (var R, j = arguments.length, L = new Array(j), A = 0; A < j; A++)
          L[A] = arguments[A];
        p ? R = p.apply(void 0, L) : R = nh.apply(void 0, [h].concat(L)), v && (R = v(R, $, x(!0))), R !== $ && E({
          type: "updateValue",
          namePath: C,
          value: R
        }), _ && _.apply(void 0, L);
      };
      var M = Zo(y || []);
      return M.forEach(function(R) {
        var j = F[R];
        F[R] = function() {
          j && j.apply(void 0, arguments);
          var L = o.props.rules;
          L && L.length && E({
            type: "validateField",
            namePath: C,
            triggerName: R
          });
        };
      }), F;
    }), n.fieldContext) {
      var a = n.fieldContext.getInternalHooks, i = a(Pt), s = i.initEntityValue;
      s(X(o));
    }
    return o;
  }
  return Te(r, [{
    key: "componentDidMount",
    value: function() {
      var o = this.props, a = o.shouldUpdate, i = o.fieldContext;
      if (this.mounted = !0, i) {
        var s = i.getInternalHooks, l = s(Pt), u = l.registerField;
        this.cancelRegisterFunc = u(this);
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
      var o = this.state.resetCount, a = this.props.children, i = this.getOnlyChild(a), s = i.child, l = i.isFunction, u;
      return l ? u = s : /* @__PURE__ */ g.isValidElement(s) ? u = /* @__PURE__ */ g.cloneElement(s, this.getControlled(s.props)) : (ce(!s, "`children` of Field is not validate ReactElement."), u = s), /* @__PURE__ */ g.createElement(g.Fragment, {
        key: o
      }, u);
    }
  }]), r;
})(g.Component);
w(Ia, "contextType", Jt);
w(Ia, "defaultProps", {
  trigger: "onChange",
  valuePropName: "value"
});
function Pc(e) {
  var t, r = e.name, n = at(e, oh), o = g.useContext(Jt), a = g.useContext(bn), i = r !== void 0 ? ve(r) : void 0, s = (t = n.isListField) !== null && t !== void 0 ? t : !!a, l = "keep";
  return s || (l = "_".concat((i || []).join("_"))), process.env.NODE_ENV !== "production" && n.preserve === !1 && s && i.length <= 1 && ce(!1, "`preserve` should not apply on Form.List fields."), /* @__PURE__ */ g.createElement(Ia, ue({
    key: l,
    name: i,
    isListField: s
  }, n, {
    fieldContext: o
  }));
}
function ah(e) {
  var t = e.name, r = e.initialValue, n = e.children, o = e.rules, a = e.validateTrigger, i = e.isListField, s = g.useContext(Jt), l = g.useContext(bn), u = g.useRef({
    keys: [],
    id: 0
  }), c = u.current, d = g.useMemo(function() {
    var h = ve(s.prefixName) || [];
    return [].concat(H(h), H(ve(t)));
  }, [s.prefixName, t]), f = g.useMemo(function() {
    return P(P({}, s), {}, {
      prefixName: d
    });
  }, [s, d]), p = g.useMemo(function() {
    return {
      getKey: function(m) {
        var b = d.length, y = m[b];
        return [c.keys[y], m.slice(b + 1)];
      }
    };
  }, [d]);
  if (typeof n != "function")
    return ce(!1, "Form.List only accepts function as children."), null;
  var v = function(m, b, y) {
    var C = y.source;
    return C === "internal" ? !1 : m !== b;
  };
  return /* @__PURE__ */ g.createElement(bn.Provider, {
    value: p
  }, /* @__PURE__ */ g.createElement(Jt.Provider, {
    value: f
  }, /* @__PURE__ */ g.createElement(Pc, {
    name: [],
    shouldUpdate: v,
    rules: o,
    validateTrigger: a,
    initialValue: r,
    isList: !0,
    isListField: i ?? !!l
  }, function(h, m) {
    var b = h.value, y = b === void 0 ? [] : b, C = h.onChange, S = s.getFieldValue, x = function() {
      var N = S(d || []);
      return N || [];
    }, O = {
      add: function(N, _) {
        var I = x();
        _ >= 0 && _ <= I.length ? (c.keys = [].concat(H(c.keys.slice(0, _)), [c.id], H(c.keys.slice(_))), C([].concat(H(I.slice(0, _)), [N], H(I.slice(_))))) : (process.env.NODE_ENV !== "production" && (_ < 0 || _ > I.length) && ce(!1, "The second parameter of the add function should be a valid positive number."), c.keys = [].concat(H(c.keys), [c.id]), C([].concat(H(I), [N]))), c.id += 1;
      },
      remove: function(N) {
        var _ = x(), I = new Set(Array.isArray(N) ? N : [N]);
        I.size <= 0 || (c.keys = c.keys.filter(function(F, M) {
          return !I.has(M);
        }), C(_.filter(function(F, M) {
          return !I.has(M);
        })));
      },
      move: function(N, _) {
        if (N !== _) {
          var I = x();
          N < 0 || N >= I.length || _ < 0 || _ >= I.length || (c.keys = ls(c.keys, N, _), C(ls(I, N, _)));
        }
      }
    }, E = y || [];
    return Array.isArray(E) || (E = [], process.env.NODE_ENV !== "production" && ce(!1, "Current value of '".concat(d.join(" > "), "' is not an array type."))), n(E.map(function($, N) {
      var _ = c.keys[N];
      return _ === void 0 && (c.keys[N] = c.id, _ = c.keys[N], c.id += 1), {
        name: N,
        key: _,
        isListField: !0
      };
    }), O, m);
  })));
}
function ih(e) {
  var t = !1, r = e.length, n = [];
  return e.length ? new Promise(function(o, a) {
    e.forEach(function(i, s) {
      i.catch(function(l) {
        return t = !0, l;
      }).then(function(l) {
        r -= 1, n[s] = l, !(r > 0) && (t && a(n), o(n));
      });
    });
  }) : Promise.resolve([]);
}
var Nc = "__@field_split__";
function so(e) {
  return e.map(function(t) {
    return "".concat(W(t), ":").concat(t);
  }).join(Nc);
}
var Dt = /* @__PURE__ */ (function() {
  function e() {
    Ne(this, e), w(this, "kvs", /* @__PURE__ */ new Map());
  }
  return Te(e, [{
    key: "set",
    value: function(r, n) {
      this.kvs.set(so(r), n);
    }
  }, {
    key: "get",
    value: function(r) {
      return this.kvs.get(so(r));
    }
  }, {
    key: "update",
    value: function(r, n) {
      var o = this.get(r), a = n(o);
      a ? this.set(r, a) : this.delete(r);
    }
  }, {
    key: "delete",
    value: function(r) {
      this.kvs.delete(so(r));
    }
    // Since we only use this in test, let simply realize this
  }, {
    key: "map",
    value: function(r) {
      return H(this.kvs.entries()).map(function(n) {
        var o = D(n, 2), a = o[0], i = o[1], s = a.split(Nc);
        return r({
          key: s.map(function(l) {
            var u = l.match(/^([^:]*):(.*)$/), c = D(u, 3), d = c[1], f = c[2];
            return d === "number" ? Number(f) : f;
          }),
          value: i
        });
      });
    }
  }, {
    key: "toJSON",
    value: function() {
      var r = {};
      return this.map(function(n) {
        var o = n.key, a = n.value;
        return r[o.join(".")] = a, null;
      }), r;
    }
  }]), e;
})(), sh = ["name"], lh = /* @__PURE__ */ Te(function e(t) {
  var r = this;
  Ne(this, e), w(this, "formHooked", !1), w(this, "forceRootUpdate", void 0), w(this, "subscribable", !0), w(this, "store", {}), w(this, "fieldEntities", []), w(this, "initialValues", {}), w(this, "callbacks", {}), w(this, "validateMessages", null), w(this, "preserve", null), w(this, "lastValidatePromise", null), w(this, "getForm", function() {
    return {
      getFieldValue: r.getFieldValue,
      getFieldsValue: r.getFieldsValue,
      getFieldError: r.getFieldError,
      getFieldWarning: r.getFieldWarning,
      getFieldsError: r.getFieldsError,
      isFieldsTouched: r.isFieldsTouched,
      isFieldTouched: r.isFieldTouched,
      isFieldValidating: r.isFieldValidating,
      isFieldsValidating: r.isFieldsValidating,
      resetFields: r.resetFields,
      setFields: r.setFields,
      setFieldValue: r.setFieldValue,
      setFieldsValue: r.setFieldsValue,
      validateFields: r.validateFields,
      submit: r.submit,
      _init: !0,
      getInternalHooks: r.getInternalHooks
    };
  }), w(this, "getInternalHooks", function(n) {
    return n === Pt ? (r.formHooked = !0, {
      dispatch: r.dispatch,
      initEntityValue: r.initEntityValue,
      registerField: r.registerField,
      useSubscribe: r.useSubscribe,
      setInitialValues: r.setInitialValues,
      destroyForm: r.destroyForm,
      setCallbacks: r.setCallbacks,
      setValidateMessages: r.setValidateMessages,
      getFields: r.getFields,
      setPreserve: r.setPreserve,
      getInitialValue: r.getInitialValue,
      registerWatch: r.registerWatch
    }) : (ce(!1, "`getInternalHooks` is internal usage. Should not call directly."), null);
  }), w(this, "useSubscribe", function(n) {
    r.subscribable = n;
  }), w(this, "prevWithoutPreserves", null), w(this, "setInitialValues", function(n, o) {
    if (r.initialValues = n || {}, o) {
      var a, i = kt(n, r.store);
      (a = r.prevWithoutPreserves) === null || a === void 0 || a.map(function(s) {
        var l = s.key;
        i = Qe(i, l, ot(n, l));
      }), r.prevWithoutPreserves = null, r.updateStore(i);
    }
  }), w(this, "destroyForm", function(n) {
    if (n)
      r.updateStore({});
    else {
      var o = new Dt();
      r.getFieldEntities(!0).forEach(function(a) {
        r.isMergedPreserve(a.isPreserve()) || o.set(a.getNamePath(), !0);
      }), r.prevWithoutPreserves = o;
    }
  }), w(this, "getInitialValue", function(n) {
    var o = ot(r.initialValues, n);
    return n.length ? kt(o) : o;
  }), w(this, "setCallbacks", function(n) {
    r.callbacks = n;
  }), w(this, "setValidateMessages", function(n) {
    r.validateMessages = n;
  }), w(this, "setPreserve", function(n) {
    r.preserve = n;
  }), w(this, "watchList", []), w(this, "registerWatch", function(n) {
    return r.watchList.push(n), function() {
      r.watchList = r.watchList.filter(function(o) {
        return o !== n;
      });
    };
  }), w(this, "notifyWatch", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
    if (r.watchList.length) {
      var o = r.getFieldsValue(), a = r.getFieldsValue(!0);
      r.watchList.forEach(function(i) {
        i(o, a, n);
      });
    }
  }), w(this, "timeoutId", null), w(this, "warningUnhooked", function() {
    process.env.NODE_ENV !== "production" && !r.timeoutId && typeof window < "u" && (r.timeoutId = setTimeout(function() {
      r.timeoutId = null, r.formHooked || ce(!1, "Instance created by `useForm` is not connected to any Form element. Forget to pass `form` prop?");
    }));
  }), w(this, "updateStore", function(n) {
    r.store = n;
  }), w(this, "getFieldEntities", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1;
    return n ? r.fieldEntities.filter(function(o) {
      return o.getNamePath().length;
    }) : r.fieldEntities;
  }), w(this, "getFieldsMap", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, o = new Dt();
    return r.getFieldEntities(n).forEach(function(a) {
      var i = a.getNamePath();
      o.set(i, a);
    }), o;
  }), w(this, "getFieldEntitiesForNamePathList", function(n) {
    if (!n)
      return r.getFieldEntities(!0);
    var o = r.getFieldsMap(!0);
    return n.map(function(a) {
      var i = ve(a);
      return o.get(i) || {
        INVALIDATE_NAME_PATH: ve(a)
      };
    });
  }), w(this, "getFieldsValue", function(n, o) {
    r.warningUnhooked();
    var a, i, s;
    if (n === !0 || Array.isArray(n) ? (a = n, i = o) : n && W(n) === "object" && (s = n.strict, i = n.filter), a === !0 && !i)
      return r.store;
    var l = r.getFieldEntitiesForNamePathList(Array.isArray(a) ? a : null), u = [];
    return l.forEach(function(c) {
      var d, f, p = "INVALIDATE_NAME_PATH" in c ? c.INVALIDATE_NAME_PATH : c.getNamePath();
      if (s) {
        var v, h;
        if ((v = (h = c).isList) !== null && v !== void 0 && v.call(h))
          return;
      } else if (!a && (d = (f = c).isListField) !== null && d !== void 0 && d.call(f))
        return;
      if (!i)
        u.push(p);
      else {
        var m = "getMeta" in c ? c.getMeta() : null;
        i(m) && u.push(p);
      }
    }), ss(r.store, u.map(ve));
  }), w(this, "getFieldValue", function(n) {
    r.warningUnhooked();
    var o = ve(n);
    return ot(r.store, o);
  }), w(this, "getFieldsError", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntitiesForNamePathList(n);
    return o.map(function(a, i) {
      return a && !("INVALIDATE_NAME_PATH" in a) ? {
        name: a.getNamePath(),
        errors: a.getErrors(),
        warnings: a.getWarnings()
      } : {
        name: ve(n[i]),
        errors: [],
        warnings: []
      };
    });
  }), w(this, "getFieldError", function(n) {
    r.warningUnhooked();
    var o = ve(n), a = r.getFieldsError([o])[0];
    return a.errors;
  }), w(this, "getFieldWarning", function(n) {
    r.warningUnhooked();
    var o = ve(n), a = r.getFieldsError([o])[0];
    return a.warnings;
  }), w(this, "isFieldsTouched", function() {
    r.warningUnhooked();
    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++)
      o[a] = arguments[a];
    var i = o[0], s = o[1], l, u = !1;
    o.length === 0 ? l = null : o.length === 1 ? Array.isArray(i) ? (l = i.map(ve), u = !1) : (l = null, u = i) : (l = i.map(ve), u = s);
    var c = r.getFieldEntities(!0), d = function(m) {
      return m.isFieldTouched();
    };
    if (!l)
      return u ? c.every(function(h) {
        return d(h) || h.isList();
      }) : c.some(d);
    var f = new Dt();
    l.forEach(function(h) {
      f.set(h, []);
    }), c.forEach(function(h) {
      var m = h.getNamePath();
      l.forEach(function(b) {
        b.every(function(y, C) {
          return m[C] === y;
        }) && f.update(b, function(y) {
          return [].concat(H(y), [h]);
        });
      });
    });
    var p = function(m) {
      return m.some(d);
    }, v = f.map(function(h) {
      var m = h.value;
      return m;
    });
    return u ? v.every(p) : v.some(p);
  }), w(this, "isFieldTouched", function(n) {
    return r.warningUnhooked(), r.isFieldsTouched([n]);
  }), w(this, "isFieldsValidating", function(n) {
    r.warningUnhooked();
    var o = r.getFieldEntities();
    if (!n)
      return o.some(function(i) {
        return i.isFieldValidating();
      });
    var a = n.map(ve);
    return o.some(function(i) {
      var s = i.getNamePath();
      return qt(a, s) && i.isFieldValidating();
    });
  }), w(this, "isFieldValidating", function(n) {
    return r.warningUnhooked(), r.isFieldsValidating([n]);
  }), w(this, "resetWithFieldInitialValue", function() {
    var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, o = new Dt(), a = r.getFieldEntities(!0);
    a.forEach(function(l) {
      var u = l.props.initialValue, c = l.getNamePath();
      if (u !== void 0) {
        var d = o.get(c) || /* @__PURE__ */ new Set();
        d.add({
          entity: l,
          value: u
        }), o.set(c, d);
      }
    });
    var i = function(u) {
      u.forEach(function(c) {
        var d = c.props.initialValue;
        if (d !== void 0) {
          var f = c.getNamePath(), p = r.getInitialValue(f);
          if (p !== void 0)
            ce(!1, "Form already set 'initialValues' with path '".concat(f.join("."), "'. Field can not overwrite it."));
          else {
            var v = o.get(f);
            if (v && v.size > 1)
              ce(!1, "Multiple Field with path '".concat(f.join("."), "' set 'initialValue'. Can not decide which one to pick."));
            else if (v) {
              var h = r.getFieldValue(f), m = c.isListField();
              !m && (!n.skipExist || h === void 0) && r.updateStore(Qe(r.store, f, H(v)[0].value));
            }
          }
        }
      });
    }, s;
    n.entities ? s = n.entities : n.namePathList ? (s = [], n.namePathList.forEach(function(l) {
      var u = o.get(l);
      if (u) {
        var c;
        (c = s).push.apply(c, H(H(u).map(function(d) {
          return d.entity;
        })));
      }
    })) : s = a, i(s);
  }), w(this, "resetFields", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (!n) {
      r.updateStore(kt(r.initialValues)), r.resetWithFieldInitialValue(), r.notifyObservers(o, null, {
        type: "reset"
      }), r.notifyWatch();
      return;
    }
    var a = n.map(ve);
    a.forEach(function(i) {
      var s = r.getInitialValue(i);
      r.updateStore(Qe(r.store, i, s));
    }), r.resetWithFieldInitialValue({
      namePathList: a
    }), r.notifyObservers(o, a, {
      type: "reset"
    }), r.notifyWatch(a);
  }), w(this, "setFields", function(n) {
    r.warningUnhooked();
    var o = r.store, a = [];
    n.forEach(function(i) {
      var s = i.name, l = at(i, sh), u = ve(s);
      a.push(u), "value" in l && r.updateStore(Qe(r.store, u, l.value)), r.notifyObservers(o, [u], {
        type: "setField",
        data: i
      });
    }), r.notifyWatch(a);
  }), w(this, "getFields", function() {
    var n = r.getFieldEntities(!0), o = n.map(function(a) {
      var i = a.getNamePath(), s = a.getMeta(), l = P(P({}, s), {}, {
        name: i,
        value: r.getFieldValue(i)
      });
      return Object.defineProperty(l, "originRCField", {
        value: !0
      }), l;
    });
    return o;
  }), w(this, "initEntityValue", function(n) {
    var o = n.props.initialValue;
    if (o !== void 0) {
      var a = n.getNamePath(), i = ot(r.store, a);
      i === void 0 && r.updateStore(Qe(r.store, a, o));
    }
  }), w(this, "isMergedPreserve", function(n) {
    var o = n !== void 0 ? n : r.preserve;
    return o ?? !0;
  }), w(this, "registerField", function(n) {
    r.fieldEntities.push(n);
    var o = n.getNamePath();
    if (r.notifyWatch([o]), n.props.initialValue !== void 0) {
      var a = r.store;
      r.resetWithFieldInitialValue({
        entities: [n],
        skipExist: !0
      }), r.notifyObservers(a, [n.getNamePath()], {
        type: "valueUpdate",
        source: "internal"
      });
    }
    return function(i, s) {
      var l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
      if (r.fieldEntities = r.fieldEntities.filter(function(d) {
        return d !== n;
      }), !r.isMergedPreserve(s) && (!i || l.length > 1)) {
        var u = i ? void 0 : r.getInitialValue(o);
        if (o.length && r.getFieldValue(o) !== u && r.fieldEntities.every(function(d) {
          return (
            // Only reset when no namePath exist
            !$c(d.getNamePath(), o)
          );
        })) {
          var c = r.store;
          r.updateStore(Qe(c, o, u, !0)), r.notifyObservers(c, [o], {
            type: "remove"
          }), r.triggerDependenciesUpdate(c, o);
        }
      }
      r.notifyWatch([o]);
    };
  }), w(this, "dispatch", function(n) {
    switch (n.type) {
      case "updateValue": {
        var o = n.namePath, a = n.value;
        r.updateValue(o, a);
        break;
      }
      case "validateField": {
        var i = n.namePath, s = n.triggerName;
        r.validateFields([i], {
          triggerName: s
        });
        break;
      }
    }
  }), w(this, "notifyObservers", function(n, o, a) {
    if (r.subscribable) {
      var i = P(P({}, a), {}, {
        store: r.getFieldsValue(!0)
      });
      r.getFieldEntities().forEach(function(s) {
        var l = s.onStoreChange;
        l(n, o, i);
      });
    } else
      r.forceRootUpdate();
  }), w(this, "triggerDependenciesUpdate", function(n, o) {
    var a = r.getDependencyChildrenFields(o);
    return a.length && r.validateFields(a), r.notifyObservers(n, a, {
      type: "dependenciesUpdate",
      relatedFields: [o].concat(H(a))
    }), a;
  }), w(this, "updateValue", function(n, o) {
    var a = ve(n), i = r.store;
    r.updateStore(Qe(r.store, a, o)), r.notifyObservers(i, [a], {
      type: "valueUpdate",
      source: "internal"
    }), r.notifyWatch([a]);
    var s = r.triggerDependenciesUpdate(i, a), l = r.callbacks.onValuesChange;
    if (l) {
      var u = ss(r.store, [a]);
      l(u, r.getFieldsValue());
    }
    r.triggerOnFieldsChange([a].concat(H(s)));
  }), w(this, "setFieldsValue", function(n) {
    r.warningUnhooked();
    var o = r.store;
    if (n) {
      var a = kt(r.store, n);
      r.updateStore(a);
    }
    r.notifyObservers(o, null, {
      type: "valueUpdate",
      source: "external"
    }), r.notifyWatch();
  }), w(this, "setFieldValue", function(n, o) {
    r.setFields([{
      name: n,
      value: o,
      errors: [],
      warnings: []
    }]);
  }), w(this, "getDependencyChildrenFields", function(n) {
    var o = /* @__PURE__ */ new Set(), a = [], i = new Dt();
    r.getFieldEntities().forEach(function(l) {
      var u = l.props.dependencies;
      (u || []).forEach(function(c) {
        var d = ve(c);
        i.update(d, function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : /* @__PURE__ */ new Set();
          return f.add(l), f;
        });
      });
    });
    var s = function l(u) {
      var c = i.get(u) || /* @__PURE__ */ new Set();
      c.forEach(function(d) {
        if (!o.has(d)) {
          o.add(d);
          var f = d.getNamePath();
          d.isFieldDirty() && f.length && (a.push(f), l(f));
        }
      });
    };
    return s(n), a;
  }), w(this, "triggerOnFieldsChange", function(n, o) {
    var a = r.callbacks.onFieldsChange;
    if (a) {
      var i = r.getFields();
      if (o) {
        var s = new Dt();
        o.forEach(function(u) {
          var c = u.name, d = u.errors;
          s.set(c, d);
        }), i.forEach(function(u) {
          u.errors = s.get(u.name) || u.errors;
        });
      }
      var l = i.filter(function(u) {
        var c = u.name;
        return qt(n, c);
      });
      l.length && a(l, i);
    }
  }), w(this, "validateFields", function(n, o) {
    r.warningUnhooked();
    var a, i;
    Array.isArray(n) || typeof n == "string" || typeof o == "string" ? (a = n, i = o) : i = n;
    var s = !!a, l = s ? a.map(ve) : [], u = [], c = String(Date.now()), d = /* @__PURE__ */ new Set(), f = i || {}, p = f.recursive, v = f.dirty;
    r.getFieldEntities(!0).forEach(function(y) {
      if (s || l.push(y.getNamePath()), !(!y.props.rules || !y.props.rules.length) && !(v && !y.isFieldDirty())) {
        var C = y.getNamePath();
        if (d.add(C.join(c)), !s || qt(l, C, p)) {
          var S = y.validateRules(P({
            validateMessages: P(P({}, Oc), r.validateMessages)
          }, i));
          u.push(S.then(function() {
            return {
              name: C,
              errors: [],
              warnings: []
            };
          }).catch(function(x) {
            var O, E = [], $ = [];
            return (O = x.forEach) === null || O === void 0 || O.call(x, function(N) {
              var _ = N.rule.warningOnly, I = N.errors;
              _ ? $.push.apply($, H(I)) : E.push.apply(E, H(I));
            }), E.length ? Promise.reject({
              name: C,
              errors: E,
              warnings: $
            }) : {
              name: C,
              errors: E,
              warnings: $
            };
          }));
        }
      }
    });
    var h = ih(u);
    r.lastValidatePromise = h, h.catch(function(y) {
      return y;
    }).then(function(y) {
      var C = y.map(function(S) {
        var x = S.name;
        return x;
      });
      r.notifyObservers(r.store, C, {
        type: "validateFinish"
      }), r.triggerOnFieldsChange(C, y);
    });
    var m = h.then(function() {
      return r.lastValidatePromise === h ? Promise.resolve(r.getFieldsValue(l)) : Promise.reject([]);
    }).catch(function(y) {
      var C = y.filter(function(S) {
        return S && S.errors.length;
      });
      return Promise.reject({
        values: r.getFieldsValue(l),
        errorFields: C,
        outOfDate: r.lastValidatePromise !== h
      });
    });
    m.catch(function(y) {
      return y;
    });
    var b = l.filter(function(y) {
      return d.has(y.join(c));
    });
    return r.triggerOnFieldsChange(b), m;
  }), w(this, "submit", function() {
    r.warningUnhooked(), r.validateFields().then(function(n) {
      var o = r.callbacks.onFinish;
      if (o)
        try {
          o(n);
        } catch (a) {
          console.error(a);
        }
    }).catch(function(n) {
      var o = r.callbacks.onFinishFailed;
      o && o(n);
    });
  }), this.forceRootUpdate = t;
});
function Tc(e) {
  var t = g.useRef(), r = g.useState({}), n = D(r, 2), o = n[1];
  if (!t.current)
    if (e)
      t.current = e;
    else {
      var a = function() {
        o({});
      }, i = new lh(a);
      t.current = i.getForm();
    }
  return [t.current];
}
var sa = /* @__PURE__ */ g.createContext({
  triggerFormChange: function() {
  },
  triggerFormFinish: function() {
  },
  registerForm: function() {
  },
  unregisterForm: function() {
  }
}), ch = function(t) {
  var r = t.validateMessages, n = t.onFormChange, o = t.onFormFinish, a = t.children, i = g.useContext(sa), s = g.useRef({});
  return /* @__PURE__ */ g.createElement(sa.Provider, {
    value: P(P({}, i), {}, {
      validateMessages: P(P({}, i.validateMessages), r),
      // =========================================================
      // =                  Global Form Control                  =
      // =========================================================
      triggerFormChange: function(u, c) {
        n && n(u, {
          changedFields: c,
          forms: s.current
        }), i.triggerFormChange(u, c);
      },
      triggerFormFinish: function(u, c) {
        o && o(u, {
          values: c,
          forms: s.current
        }), i.triggerFormFinish(u, c);
      },
      registerForm: function(u, c) {
        u && (s.current = P(P({}, s.current), {}, w({}, u, c))), i.registerForm(u, c);
      },
      unregisterForm: function(u) {
        var c = P({}, s.current);
        delete c[u], s.current = c, i.unregisterForm(u);
      }
    })
  }, a);
}, uh = ["name", "initialValues", "fields", "form", "preserve", "children", "component", "validateMessages", "validateTrigger", "onValuesChange", "onFieldsChange", "onFinish", "onFinishFailed", "clearOnDestroy"], dh = function(t, r) {
  var n = t.name, o = t.initialValues, a = t.fields, i = t.form, s = t.preserve, l = t.children, u = t.component, c = u === void 0 ? "form" : u, d = t.validateMessages, f = t.validateTrigger, p = f === void 0 ? "onChange" : f, v = t.onValuesChange, h = t.onFieldsChange, m = t.onFinish, b = t.onFinishFailed, y = t.clearOnDestroy, C = at(t, uh), S = g.useRef(null), x = g.useContext(sa), O = Tc(i), E = D(O, 1), $ = E[0], N = $.getInternalHooks(Pt), _ = N.useSubscribe, I = N.setInitialValues, F = N.setCallbacks, M = N.setValidateMessages, R = N.setPreserve, j = N.destroyForm;
  g.useImperativeHandle(r, function() {
    return P(P({}, $), {}, {
      nativeElement: S.current
    });
  }), g.useEffect(function() {
    return x.registerForm(n, $), function() {
      x.unregisterForm(n);
    };
  }, [x, $, n]), M(P(P({}, x.validateMessages), d)), F({
    onValuesChange: v,
    onFieldsChange: function(G) {
      if (x.triggerFormChange(n, G), h) {
        for (var oe = arguments.length, Y = new Array(oe > 1 ? oe - 1 : 0), ie = 1; ie < oe; ie++)
          Y[ie - 1] = arguments[ie];
        h.apply(void 0, [G].concat(Y));
      }
    },
    onFinish: function(G) {
      x.triggerFormFinish(n, G), m && m(G);
    },
    onFinishFailed: b
  }), R(s);
  var L = g.useRef(null);
  I(o, !L.current), L.current || (L.current = !0), g.useEffect(
    function() {
      return function() {
        return j(y);
      };
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  var A, B = typeof l == "function";
  if (B) {
    var k = $.getFieldsValue(!0);
    A = l(k, $);
  } else
    A = l;
  _(!B);
  var U = g.useRef();
  g.useEffect(function() {
    rh(U.current || [], a || []) || $.setFields(a || []), U.current = a;
  }, [a, $]);
  var Q = g.useMemo(function() {
    return P(P({}, $), {}, {
      validateTrigger: p
    });
  }, [$, p]), q = /* @__PURE__ */ g.createElement(bn.Provider, {
    value: null
  }, /* @__PURE__ */ g.createElement(Jt.Provider, {
    value: Q
  }, A));
  return c === !1 ? q : /* @__PURE__ */ g.createElement(c, ue({}, C, {
    ref: S,
    onSubmit: function(G) {
      G.preventDefault(), G.stopPropagation(), $.submit();
    },
    onReset: function(G) {
      var oe;
      G.preventDefault(), $.resetFields(), (oe = C.onReset) === null || oe === void 0 || oe.call(C, G);
    }
  }), q);
};
function cs(e) {
  try {
    return JSON.stringify(e);
  } catch {
    return Math.random();
  }
}
var fh = process.env.NODE_ENV !== "production" ? function(e) {
  var t = e.join("__RC_FIELD_FORM_SPLIT__"), r = ne(t);
  ce(r.current === t, "`useWatch` is not support dynamic `namePath`. Please provide static instead.");
} : function() {
};
function mh() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t[0], o = t[1], a = o === void 0 ? {} : o, i = xp(a) ? {
    form: a
  } : a, s = i.form, l = un(), u = D(l, 2), c = u[0], d = u[1], f = Rt(function() {
    return cs(c);
  }, [c]), p = ne(f);
  p.current = f;
  var v = Ie(Jt), h = s || v, m = h && h._init;
  process.env.NODE_ENV !== "production" && ce(t.length === 2 ? s ? m : !0 : m, "useWatch requires a form instance since it can not auto detect from context.");
  var b = ve(n), y = ne(b);
  return y.current = b, fh(b), Ue(
    function() {
      if (m) {
        var C = h.getFieldsValue, S = h.getInternalHooks, x = S(Pt), O = x.registerWatch, E = function(I, F) {
          var M = i.preserve ? F : I;
          return typeof n == "function" ? n(M) : ot(M, y.current);
        }, $ = O(function(_, I) {
          var F = E(_, I), M = cs(F);
          p.current !== M && (p.current = M, d(F));
        }), N = E(C(), C(!0));
        return c !== N && d(N), $;
      }
    },
    // We do not need re-register since namePath content is the same
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [m]
  ), c;
}
var gh = /* @__PURE__ */ g.forwardRef(dh), Rr = gh;
Rr.FormProvider = ch;
Rr.Field = Pc;
Rr.List = ah;
Rr.useForm = Tc;
Rr.useWatch = mh;
const la = /* @__PURE__ */ g.createContext({});
process.env.NODE_ENV !== "production" && (la.displayName = "FormItemInputContext");
const vh = ({
  children: e,
  status: t,
  override: r
}) => {
  const n = g.useContext(la), o = g.useMemo(() => {
    const a = Object.assign({}, n);
    return r && delete a.isFormItemInput, t && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon), a;
  }, [t, r, n]);
  return /* @__PURE__ */ g.createElement(la.Provider, {
    value: o
  }, e);
}, ph = (e) => {
  const {
    space: t,
    form: r,
    children: n
  } = e;
  if (n == null)
    return null;
  let o = n;
  return r && (o = /* @__PURE__ */ T.createElement(vh, {
    override: !0,
    status: !0
  }, o)), t && (o = /* @__PURE__ */ T.createElement(Bg, null, o)), o;
}, hh = () => Ae() && window.document.documentElement, An = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    size: o,
    shape: a
  } = e, i = z({
    [`${t}-lg`]: o === "large",
    [`${t}-sm`]: o === "small"
  }), s = z({
    [`${t}-circle`]: a === "circle",
    [`${t}-square`]: a === "square",
    [`${t}-round`]: a === "round"
  }), l = g.useMemo(() => typeof o == "number" ? {
    width: o,
    height: o,
    lineHeight: `${o}px`
  } : {}, [o]);
  return /* @__PURE__ */ g.createElement("span", {
    className: z(t, i, s, r),
    style: Object.assign(Object.assign({}, l), n)
  });
}, yh = new Le("ant-skeleton-loading", {
  "0%": {
    backgroundPosition: "100% 50%"
  },
  "100%": {
    backgroundPosition: "0 50%"
  }
}), Ln = (e) => ({
  height: e,
  lineHeight: ee(e)
}), Ut = (e) => Object.assign({
  width: e
}, Ln(e)), bh = (e) => ({
  background: e.skeletonLoadingBackground,
  backgroundSize: "400% 100%",
  animationName: yh,
  animationDuration: e.skeletonLoadingMotionDuration,
  animationTimingFunction: "ease",
  animationIterationCount: "infinite"
}), lo = (e, t) => Object.assign({
  width: t(e).mul(5).equal(),
  minWidth: t(e).mul(5).equal()
}, Ln(e)), Ch = (e) => {
  const {
    skeletonAvatarCls: t,
    gradientFromColor: r,
    controlHeight: n,
    controlHeightLG: o,
    controlHeightSM: a
  } = e;
  return {
    [t]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: r
    }, Ut(n)),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    },
    [`${t}${t}-lg`]: Object.assign({}, Ut(o)),
    [`${t}${t}-sm`]: Object.assign({}, Ut(a))
  };
}, xh = (e) => {
  const {
    controlHeight: t,
    borderRadiusSM: r,
    skeletonInputCls: n,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: s
  } = e;
  return {
    [n]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: r
    }, lo(t, s)),
    [`${n}-lg`]: Object.assign({}, lo(o, s)),
    [`${n}-sm`]: Object.assign({}, lo(a, s))
  };
}, us = (e) => Object.assign({
  width: e
}, Ln(e)), Sh = (e) => {
  const {
    skeletonImageCls: t,
    imageSizeBase: r,
    gradientFromColor: n,
    borderRadiusSM: o,
    calc: a
  } = e;
  return {
    [t]: Object.assign(Object.assign({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      verticalAlign: "middle",
      background: n,
      borderRadius: o
    }, us(a(r).mul(2).equal())), {
      [`${t}-path`]: {
        fill: "#bfbfbf"
      },
      [`${t}-svg`]: Object.assign(Object.assign({}, us(r)), {
        maxWidth: a(r).mul(4).equal(),
        maxHeight: a(r).mul(4).equal()
      }),
      [`${t}-svg${t}-svg-circle`]: {
        borderRadius: "50%"
      }
    }),
    [`${t}${t}-circle`]: {
      borderRadius: "50%"
    }
  };
}, co = (e, t, r) => {
  const {
    skeletonButtonCls: n
  } = e;
  return {
    [`${r}${n}-circle`]: {
      width: t,
      minWidth: t,
      borderRadius: "50%"
    },
    [`${r}${n}-round`]: {
      borderRadius: t
    }
  };
}, uo = (e, t) => Object.assign({
  width: t(e).mul(2).equal(),
  minWidth: t(e).mul(2).equal()
}, Ln(e)), Eh = (e) => {
  const {
    borderRadiusSM: t,
    skeletonButtonCls: r,
    controlHeight: n,
    controlHeightLG: o,
    controlHeightSM: a,
    gradientFromColor: i,
    calc: s
  } = e;
  return Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({
    [r]: Object.assign({
      display: "inline-block",
      verticalAlign: "top",
      background: i,
      borderRadius: t,
      width: s(n).mul(2).equal(),
      minWidth: s(n).mul(2).equal()
    }, uo(n, s))
  }, co(e, n, r)), {
    [`${r}-lg`]: Object.assign({}, uo(o, s))
  }), co(e, o, `${r}-lg`)), {
    [`${r}-sm`]: Object.assign({}, uo(a, s))
  }), co(e, a, `${r}-sm`));
}, wh = (e) => {
  const {
    componentCls: t,
    skeletonAvatarCls: r,
    skeletonTitleCls: n,
    skeletonParagraphCls: o,
    skeletonButtonCls: a,
    skeletonInputCls: i,
    skeletonImageCls: s,
    controlHeight: l,
    controlHeightLG: u,
    controlHeightSM: c,
    gradientFromColor: d,
    padding: f,
    marginSM: p,
    borderRadius: v,
    titleHeight: h,
    blockRadius: m,
    paragraphLiHeight: b,
    controlHeightXS: y,
    paragraphMarginTop: C
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
        [r]: Object.assign({
          display: "inline-block",
          verticalAlign: "top",
          background: d
        }, Ut(l)),
        [`${r}-circle`]: {
          borderRadius: "50%"
        },
        [`${r}-lg`]: Object.assign({}, Ut(u)),
        [`${r}-sm`]: Object.assign({}, Ut(c))
      },
      [`${t}-content`]: {
        display: "table-cell",
        width: "100%",
        verticalAlign: "top",
        // Title
        [n]: {
          width: "100%",
          height: h,
          background: d,
          borderRadius: m,
          [`+ ${o}`]: {
            marginBlockStart: c
          }
        },
        // paragraph
        [o]: {
          padding: 0,
          "> li": {
            width: "100%",
            height: b,
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
        [`${n}, ${o} > li`]: {
          borderRadius: v
        }
      }
    },
    [`${t}-with-avatar ${t}-content`]: {
      // Title
      [n]: {
        marginBlockStart: p,
        [`+ ${o}`]: {
          marginBlockStart: C
        }
      }
    },
    // Skeleton element
    [`${t}${t}-element`]: Object.assign(Object.assign(Object.assign(Object.assign({
      display: "inline-block",
      width: "auto"
    }, Eh(e)), Ch(e)), xh(e)), Sh(e)),
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
        ${n},
        ${o} > li,
        ${r},
        ${a},
        ${i},
        ${s}
      `]: Object.assign({}, bh(e))
    }
  };
}, Oh = (e) => {
  const {
    colorFillContent: t,
    colorFill: r
  } = e, n = t, o = r;
  return {
    color: n,
    colorGradientEnd: o,
    gradientFromColor: n,
    gradientToColor: o,
    titleHeight: e.controlHeight / 2,
    blockRadius: e.borderRadiusSM,
    paragraphMarginTop: e.marginLG + e.marginXXS,
    paragraphLiHeight: e.controlHeight / 2
  };
}, nr = Or("Skeleton", (e) => {
  const {
    componentCls: t,
    calc: r
  } = e, n = vt(e, {
    skeletonAvatarCls: `${t}-avatar`,
    skeletonTitleCls: `${t}-title`,
    skeletonParagraphCls: `${t}-paragraph`,
    skeletonButtonCls: `${t}-button`,
    skeletonInputCls: `${t}-input`,
    skeletonImageCls: `${t}-image`,
    imageSizeBase: r(e.controlHeight).mul(1.5).equal(),
    borderRadius: 100,
    // Large number to make capsule shape
    skeletonLoadingBackground: `linear-gradient(90deg, ${e.gradientFromColor} 25%, ${e.gradientToColor} 37%, ${e.gradientFromColor} 63%)`,
    skeletonLoadingMotionDuration: "1.4s"
  });
  return wh(n);
}, Oh, {
  deprecatedTokens: [["color", "gradientFromColor"], ["colorGradientEnd", "gradientToColor"]]
}), $h = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: o,
    shape: a = "circle",
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(Ce), l = s("skeleton", t), [u, c, d] = nr(l), f = Tn(e, ["prefixCls", "className"]), p = z(l, `${l}-element`, {
    [`${l}-active`]: o
  }, r, n, c, d);
  return u(/* @__PURE__ */ g.createElement("div", {
    className: p
  }, /* @__PURE__ */ g.createElement(An, Object.assign({
    prefixCls: `${l}-avatar`,
    shape: a,
    size: i
  }, f))));
}, Ph = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: o,
    block: a = !1,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(Ce), l = s("skeleton", t), [u, c, d] = nr(l), f = Tn(e, ["prefixCls"]), p = z(l, `${l}-element`, {
    [`${l}-active`]: o,
    [`${l}-block`]: a
  }, r, n, c, d);
  return u(/* @__PURE__ */ g.createElement("div", {
    className: p
  }, /* @__PURE__ */ g.createElement(An, Object.assign({
    prefixCls: `${l}-button`,
    size: i
  }, f))));
}, Nh = "M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z", Th = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: o,
    active: a
  } = e, {
    getPrefixCls: i
  } = g.useContext(Ce), s = i("skeleton", t), [l, u, c] = nr(s), d = z(s, `${s}-element`, {
    [`${s}-active`]: a
  }, r, n, u, c);
  return l(/* @__PURE__ */ g.createElement("div", {
    className: d
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(`${s}-image`, r),
    style: o
  }, /* @__PURE__ */ g.createElement("svg", {
    viewBox: "0 0 1098 1024",
    xmlns: "http://www.w3.org/2000/svg",
    className: `${s}-image-svg`
  }, /* @__PURE__ */ g.createElement("title", null, "Image placeholder"), /* @__PURE__ */ g.createElement("path", {
    d: Nh,
    className: `${s}-image-path`
  })))));
}, Rh = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    active: o,
    block: a,
    size: i = "default"
  } = e, {
    getPrefixCls: s
  } = g.useContext(Ce), l = s("skeleton", t), [u, c, d] = nr(l), f = Tn(e, ["prefixCls"]), p = z(l, `${l}-element`, {
    [`${l}-active`]: o,
    [`${l}-block`]: a
  }, r, n, c, d);
  return u(/* @__PURE__ */ g.createElement("div", {
    className: p
  }, /* @__PURE__ */ g.createElement(An, Object.assign({
    prefixCls: `${l}-input`,
    size: i
  }, f))));
}, _h = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    style: o,
    active: a,
    children: i
  } = e, {
    getPrefixCls: s
  } = g.useContext(Ce), l = s("skeleton", t), [u, c, d] = nr(l), f = z(l, `${l}-element`, {
    [`${l}-active`]: a
  }, c, r, n, d);
  return u(/* @__PURE__ */ g.createElement("div", {
    className: f
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(`${l}-image`, r),
    style: o
  }, i)));
}, Fh = (e, t) => {
  const {
    width: r,
    rows: n = 2
  } = t;
  if (Array.isArray(r))
    return r[e];
  if (n - 1 === e)
    return r;
}, Ih = (e) => {
  const {
    prefixCls: t,
    className: r,
    style: n,
    rows: o = 0
  } = e, a = Array.from({
    length: o
  }).map((i, s) => (
    // eslint-disable-next-line react/no-array-index-key
    /* @__PURE__ */ g.createElement("li", {
      key: s,
      style: {
        width: Fh(s, e)
      }
    })
  ));
  return /* @__PURE__ */ g.createElement("ul", {
    className: z(t, r),
    style: n
  }, a);
}, Mh = ({
  prefixCls: e,
  className: t,
  width: r,
  style: n
}) => (
  // biome-ignore lint/a11y/useHeadingContent: HOC here
  /* @__PURE__ */ g.createElement("h3", {
    className: z(e, t),
    style: Object.assign({
      width: r
    }, n)
  })
);
function fo(e) {
  return e && typeof e == "object" ? e : {};
}
function jh(e, t) {
  return e && !t ? {
    size: "large",
    shape: "square"
  } : {
    size: "large",
    shape: "circle"
  };
}
function Ah(e, t) {
  return !e && t ? {
    width: "38%"
  } : e && t ? {
    width: "50%"
  } : {};
}
function Lh(e, t) {
  const r = {};
  return (!e || !t) && (r.width = "61%"), !e && t ? r.rows = 3 : r.rows = 2, r;
}
const Mt = (e) => {
  const {
    prefixCls: t,
    loading: r,
    className: n,
    rootClassName: o,
    style: a,
    children: i,
    avatar: s = !1,
    title: l = !0,
    paragraph: u = !0,
    active: c,
    round: d
  } = e, {
    getPrefixCls: f,
    direction: p,
    className: v,
    style: h
  } = ml("skeleton"), m = f("skeleton", t), [b, y, C] = nr(m);
  if (r || !("loading" in e)) {
    const S = !!s, x = !!l, O = !!u;
    let E;
    if (S) {
      const _ = Object.assign(Object.assign({
        prefixCls: `${m}-avatar`
      }, jh(x, O)), fo(s));
      E = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-header`
      }, /* @__PURE__ */ g.createElement(An, Object.assign({}, _)));
    }
    let $;
    if (x || O) {
      let _;
      if (x) {
        const F = Object.assign(Object.assign({
          prefixCls: `${m}-title`
        }, Ah(S, O)), fo(l));
        _ = /* @__PURE__ */ g.createElement(Mh, Object.assign({}, F));
      }
      let I;
      if (O) {
        const F = Object.assign(Object.assign({
          prefixCls: `${m}-paragraph`
        }, Lh(S, x)), fo(u));
        I = /* @__PURE__ */ g.createElement(Ih, Object.assign({}, F));
      }
      $ = /* @__PURE__ */ g.createElement("div", {
        className: `${m}-content`
      }, _, I);
    }
    const N = z(m, {
      [`${m}-with-avatar`]: S,
      [`${m}-active`]: c,
      [`${m}-rtl`]: p === "rtl",
      [`${m}-round`]: d
    }, v, n, o, y, C);
    return b(/* @__PURE__ */ g.createElement("div", {
      className: N,
      style: Object.assign(Object.assign({}, h), a)
    }, E, $));
  }
  return i ?? null;
};
Mt.Button = Ph;
Mt.Avatar = $h;
Mt.Input = Rh;
Mt.Image = Th;
Mt.Node = _h;
process.env.NODE_ENV !== "production" && (Mt.displayName = "Skeleton");
function ds() {
}
const Vh = /* @__PURE__ */ g.createContext({
  add: ds,
  remove: ds
});
function Dh(e) {
  const t = g.useContext(Vh), r = g.useRef(null);
  return mt((o) => {
    if (o) {
      const a = e ? o.querySelector(e) : o;
      a && (t.add(a), r.current = a);
    } else
      t.remove(r.current);
  });
}
const fs = () => {
  const {
    cancelButtonProps: e,
    cancelTextLocale: t,
    onCancel: r
  } = Ie(Nr);
  return /* @__PURE__ */ T.createElement(rr, Object.assign({
    onClick: r
  }, e), t);
}, ms = () => {
  const {
    confirmLoading: e,
    okButtonProps: t,
    okType: r,
    okTextLocale: n,
    onOk: o
  } = Ie(Nr);
  return /* @__PURE__ */ T.createElement(rr, Object.assign({}, ac(r), {
    loading: e,
    onClick: o
  }, t), n);
};
function Rc(e, t) {
  return /* @__PURE__ */ T.createElement("span", {
    className: `${e}-close-x`
  }, t || /* @__PURE__ */ T.createElement(Pn, {
    className: `${e}-close-icon`
  }));
}
const _c = (e) => {
  const {
    okText: t,
    okType: r = "primary",
    cancelText: n,
    confirmLoading: o,
    onOk: a,
    onCancel: i,
    okButtonProps: s,
    cancelButtonProps: l,
    footer: u
  } = e, [c] = On("Modal", al()), d = t || c?.okText, f = n || c?.cancelText, p = T.useMemo(() => ({
    confirmLoading: o,
    okButtonProps: s,
    cancelButtonProps: l,
    okTextLocale: d,
    cancelTextLocale: f,
    okType: r,
    onOk: a,
    onCancel: i
  }), [o, s, l, d, f, r, a, i]);
  let v;
  return typeof u == "function" || typeof u > "u" ? (v = /* @__PURE__ */ T.createElement(T.Fragment, null, /* @__PURE__ */ T.createElement(fs, null), /* @__PURE__ */ T.createElement(ms, null)), typeof u == "function" && (v = u(v, {
    OkBtn: ms,
    CancelBtn: fs
  })), v = /* @__PURE__ */ T.createElement(hc, {
    value: p
  }, v)) : v = u, /* @__PURE__ */ T.createElement(gl, {
    disabled: !1
  }, v);
}, kh = (e) => {
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
}, Hh = (e) => {
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
}, Bh = (e, t) => {
  const {
    prefixCls: r,
    componentCls: n,
    gridColumns: o
  } = e, a = {};
  for (let i = o; i >= 0; i--)
    i === 0 ? (a[`${n}${t}-${i}`] = {
      display: "none"
    }, a[`${n}-push-${i}`] = {
      insetInlineStart: "auto"
    }, a[`${n}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, a[`${n}${t}-push-${i}`] = {
      insetInlineStart: "auto"
    }, a[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: "auto"
    }, a[`${n}${t}-offset-${i}`] = {
      marginInlineStart: 0
    }, a[`${n}${t}-order-${i}`] = {
      order: 0
    }) : (a[`${n}${t}-${i}`] = [
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
    ], a[`${n}${t}-push-${i}`] = {
      insetInlineStart: `${i / o * 100}%`
    }, a[`${n}${t}-pull-${i}`] = {
      insetInlineEnd: `${i / o * 100}%`
    }, a[`${n}${t}-offset-${i}`] = {
      marginInlineStart: `${i / o * 100}%`
    }, a[`${n}${t}-order-${i}`] = {
      order: i
    });
  return a[`${n}${t}-flex`] = {
    flex: `var(--${r}${t}-flex)`
  }, a;
}, ca = (e, t) => Bh(e, t), zh = (e, t, r) => ({
  [`@media (min-width: ${ee(t)})`]: Object.assign({}, ca(e, r))
}), Wh = () => ({}), qh = () => ({});
Or("Grid", kh, Wh);
const Fc = (e) => ({
  xs: e.screenXSMin,
  sm: e.screenSMMin,
  md: e.screenMDMin,
  lg: e.screenLGMin,
  xl: e.screenXLMin,
  xxl: e.screenXXLMin
});
Or("Grid", (e) => {
  const t = vt(e, {
    gridColumns: 24
    // Row is divided into 24 parts in Grid
  }), r = Fc(t);
  return delete r.xs, [Hh(t), ca(t, ""), ca(t, "-xs"), Object.keys(r).map((n) => zh(t, r[n], `-${n}`)).reduce((n, o) => Object.assign(Object.assign({}, n), o), {})];
}, qh);
function gs(e) {
  return {
    position: e,
    inset: 0
  };
}
const Uh = (e) => {
  const {
    componentCls: t,
    antCls: r
  } = e;
  return [{
    [`${t}-root`]: {
      [`${t}${r}-zoom-enter, ${t}${r}-zoom-appear`]: {
        // reset scale avoid mousePosition bug
        transform: "none",
        opacity: 0,
        animationDuration: e.motionDurationSlow,
        // https://github.com/ant-design/ant-design/issues/11777
        userSelect: "none"
      },
      // https://github.com/ant-design/ant-design/issues/37329
      // https://github.com/ant-design/ant-design/issues/40272
      [`${t}${r}-zoom-leave ${t}-content`]: {
        pointerEvents: "none"
      },
      [`${t}-mask`]: Object.assign(Object.assign({}, gs("fixed")), {
        zIndex: e.zIndexPopupBase,
        height: "100%",
        backgroundColor: e.colorBgMask,
        pointerEvents: "none",
        [`${t}-hidden`]: {
          display: "none"
        }
      }),
      [`${t}-wrap`]: Object.assign(Object.assign({}, gs("fixed")), {
        zIndex: e.zIndexPopupBase,
        overflow: "auto",
        outline: 0,
        WebkitOverflowScrolling: "touch"
      })
    }
  }, {
    [`${t}-root`]: pv(e)
  }];
}, Gh = (e) => {
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
      [t]: Object.assign(Object.assign({}, Gf(e)), {
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
        }, Sl(e)),
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
}, Xh = (e) => {
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
}, Kh = (e) => {
  const {
    componentCls: t
  } = e, r = Fc(e), n = Object.assign({}, r);
  delete n.xs;
  const o = `--${t.replace(".", "")}-`, a = Object.keys(n).map((i) => ({
    [`@media (min-width: ${ee(n[i])})`]: {
      width: `var(${o}${i}-width)`
    }
  }));
  return {
    [`${t}-root`]: {
      [t]: [].concat(H(Object.keys(r).map((i, s) => {
        const l = Object.keys(r)[s - 1];
        return l ? {
          [`${o}${i}-width`]: `var(${o}${l}-width)`
        } : null;
      })), [{
        width: `var(${o}xs-width)`
      }], H(a))
    }
  };
}, Ic = (e) => {
  const t = e.padding, r = e.fontSizeHeading5, n = e.lineHeightHeading5;
  return vt(e, {
    modalHeaderHeight: e.calc(e.calc(n).mul(r).equal()).add(e.calc(t).mul(2).equal()).equal(),
    modalFooterBorderColorSplit: e.colorSplit,
    modalFooterBorderStyle: e.lineType,
    modalFooterBorderWidth: e.lineWidth,
    modalCloseIconColor: e.colorIcon,
    modalCloseIconHoverColor: e.colorIconHover,
    modalCloseBtnSize: e.controlHeight,
    modalConfirmIconSize: e.fontHeight,
    modalTitleHeight: e.calc(e.titleFontSize).mul(e.titleLineHeight).equal()
  });
}, Mc = (e) => ({
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
}), jc = Or("Modal", (e) => {
  const t = Ic(e);
  return [Gh(t), Xh(t), Uh(t), Nv(t, "zoom"), Kh(t)];
}, Mc, {
  unitless: {
    titleLineHeight: !0
  }
});
var Yh = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
let ua;
const Qh = (e) => {
  ua = {
    x: e.pageX,
    y: e.pageY
  }, setTimeout(() => {
    ua = null;
  }, 100);
};
hh() && document.documentElement.addEventListener("click", Qh, !0);
const Ac = (e) => {
  const {
    prefixCls: t,
    className: r,
    rootClassName: n,
    open: o,
    wrapClassName: a,
    centered: i,
    getContainer: s,
    focusTriggerAfterClose: l = !0,
    style: u,
    // Deprecated
    visible: c,
    width: d = 520,
    footer: f,
    classNames: p,
    styles: v,
    children: h,
    loading: m,
    confirmLoading: b,
    zIndex: y,
    mousePosition: C,
    onOk: S,
    onCancel: x,
    destroyOnHidden: O,
    destroyOnClose: E,
    panelRef: $ = null,
    modalRender: N
  } = e, _ = Yh(e, ["prefixCls", "className", "rootClassName", "open", "wrapClassName", "centered", "getContainer", "focusTriggerAfterClose", "style", "visible", "width", "footer", "classNames", "styles", "children", "loading", "confirmLoading", "zIndex", "mousePosition", "onOk", "onCancel", "destroyOnHidden", "destroyOnClose", "panelRef", "modalRender"]), {
    getPopupContainer: I,
    getPrefixCls: F,
    direction: M,
    modal: R
  } = g.useContext(Ce), j = (de) => {
    b || x?.(de);
  }, L = (de) => {
    S?.(de);
  };
  if (process.env.NODE_ENV !== "production") {
    const de = st("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"], ["destroyOnClose", "destroyOnHidden"]].forEach(([De, je]) => {
      de.deprecated(!(De in e), De, je);
    });
  }
  const A = F("modal", t), B = F(), k = Xl(A), [U, Q, q] = jc(A, k), K = z(a, {
    [`${A}-centered`]: i ?? R?.centered,
    [`${A}-wrap-rtl`]: M === "rtl"
  }), G = f !== null && !m ? /* @__PURE__ */ g.createElement(_c, Object.assign({}, e, {
    onOk: L,
    onCancel: j
  })) : null, [oe, Y, ie, Re] = fg(Mi(e), Mi(R), {
    closable: !0,
    closeIcon: /* @__PURE__ */ g.createElement(Pn, {
      className: `${A}-close-icon`
    }),
    closeIconRender: (de) => Rc(A, de)
  }), _e = N ? (de) => /* @__PURE__ */ g.createElement("div", {
    className: `${A}-render`
  }, N(de)) : void 0, Ve = `.${A}-${N ? "render" : "content"}`, pe = Dh(Ve), Ee = Cn($, pe), [xe, V] = yg("Modal", y), [J, se] = g.useMemo(() => d && typeof d == "object" ? [void 0, d] : [d, void 0], [d]), Ke = g.useMemo(() => {
    const de = {};
    return se && Object.keys(se).forEach((De) => {
      const je = se[De];
      je !== void 0 && (de[`--${A}-${De}-width`] = typeof je == "number" ? `${je}px` : je);
    }), de;
  }, [A, se]);
  return U(/* @__PURE__ */ g.createElement(ph, {
    form: !0,
    space: !0
  }, /* @__PURE__ */ g.createElement(Ta.Provider, {
    value: V
  }, /* @__PURE__ */ g.createElement(Sc, Object.assign({
    width: J
  }, _, {
    zIndex: xe,
    getContainer: s === void 0 ? I : s,
    prefixCls: A,
    rootClassName: z(Q, n, q, k),
    footer: G,
    visible: o ?? c,
    mousePosition: C ?? ua,
    onClose: j,
    closable: oe && Object.assign({
      disabled: ie,
      closeIcon: Y
    }, Re),
    closeIcon: Y,
    focusTriggerAfterClose: l,
    transitionName: yn(B, "zoom", e.transitionName),
    maskTransitionName: yn(B, "fade", e.maskTransitionName),
    className: z(Q, r, R?.className),
    style: Object.assign(Object.assign(Object.assign({}, R?.style), u), Ke),
    classNames: Object.assign(Object.assign(Object.assign({}, R?.classNames), p), {
      wrapper: z(K, p?.wrapper)
    }),
    styles: Object.assign(Object.assign({}, R?.styles), v),
    panelRef: Ee,
    // TODO: In the future, destroyOnClose in rc-dialog needs to be upgrade to destroyOnHidden
    destroyOnClose: O ?? E,
    modalRender: _e
  }), m ? /* @__PURE__ */ g.createElement(Mt, {
    active: !0,
    title: !1,
    paragraph: {
      rows: 4
    },
    className: `${A}-body-skeleton`
  }) : h))));
}, Zh = (e) => {
  const {
    componentCls: t,
    titleFontSize: r,
    titleLineHeight: n,
    modalConfirmIconSize: o,
    fontSize: a,
    lineHeight: i,
    modalTitleHeight: s,
    fontHeight: l,
    confirmBodyPadding: u
  } = e, c = `${t}-confirm`;
  return {
    [c]: {
      "&-rtl": {
        direction: "rtl"
      },
      [`${e.antCls}-modal-header`]: {
        display: "none"
      },
      [`${c}-body-wrapper`]: Object.assign({}, Xf()),
      [`&${t} ${t}-body`]: {
        padding: u
      },
      // ====================== Body ======================
      [`${c}-body`]: {
        display: "flex",
        flexWrap: "nowrap",
        alignItems: "start",
        [`> ${e.iconCls}`]: {
          flex: "none",
          fontSize: o,
          marginInlineEnd: e.confirmIconMarginInlineEnd,
          marginTop: e.calc(e.calc(l).sub(o).equal()).div(2).equal()
        },
        [`&-has-title > ${e.iconCls}`]: {
          marginTop: e.calc(e.calc(s).sub(o).equal()).div(2).equal()
        }
      },
      [`${c}-paragraph`]: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        rowGap: e.marginXS,
        // https://github.com/ant-design/ant-design/issues/51912
        maxWidth: `calc(100% - ${ee(e.marginSM)})`
      },
      // https://github.com/ant-design/ant-design/issues/48159
      [`${e.iconCls} + ${c}-paragraph`]: {
        maxWidth: `calc(100% - ${ee(e.calc(e.modalConfirmIconSize).add(e.marginSM).equal())})`
      },
      [`${c}-title`]: {
        color: e.colorTextHeading,
        fontWeight: e.fontWeightStrong,
        fontSize: r,
        lineHeight: n
      },
      [`${c}-content`]: {
        color: e.colorText,
        fontSize: a,
        lineHeight: i
      },
      // ===================== Footer =====================
      [`${c}-btns`]: {
        textAlign: "end",
        marginTop: e.confirmBtnsMarginTop,
        [`${e.antCls}-btn + ${e.antCls}-btn`]: {
          marginBottom: 0,
          marginInlineStart: e.marginXS
        }
      }
    },
    [`${c}-error ${c}-body > ${e.iconCls}`]: {
      color: e.colorError
    },
    [`${c}-warning ${c}-body > ${e.iconCls},
        ${c}-confirm ${c}-body > ${e.iconCls}`]: {
      color: e.colorWarning
    },
    [`${c}-info ${c}-body > ${e.iconCls}`]: {
      color: e.colorInfo
    },
    [`${c}-success ${c}-body > ${e.iconCls}`]: {
      color: e.colorSuccess
    }
  };
}, Jh = wl(["Modal", "confirm"], (e) => {
  const t = Ic(e);
  return Zh(t);
}, Mc, {
  // confirm is weak than modal since no conflict here
  order: -1e3
});
var e0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const Lc = (e) => {
  const {
    prefixCls: t,
    icon: r,
    okText: n,
    cancelText: o,
    confirmPrefixCls: a,
    type: i,
    okCancel: s,
    footer: l,
    // Legacy for static function usage
    locale: u
  } = e, c = e0(e, ["prefixCls", "icon", "okText", "cancelText", "confirmPrefixCls", "type", "okCancel", "footer", "locale"]);
  if (process.env.NODE_ENV !== "production") {
    const O = st("Modal");
    process.env.NODE_ENV !== "production" && O(!(typeof r == "string" && r.length > 2), "breaking", `\`icon\` is using ReactNode instead of string naming in v4. Please check \`${r}\` at https://ant.design/components/icon`);
  }
  let d = r;
  if (!r && r !== null)
    switch (i) {
      case "info":
        d = /* @__PURE__ */ g.createElement(Ul, null);
        break;
      case "success":
        d = /* @__PURE__ */ g.createElement(zl, null);
        break;
      case "error":
        d = /* @__PURE__ */ g.createElement(Wl, null);
        break;
      default:
        d = /* @__PURE__ */ g.createElement(ql, null);
    }
  const f = s ?? i === "confirm", p = e.autoFocusButton === null ? !1 : e.autoFocusButton || "ok", [v] = On("Modal"), h = u || v, m = n || (f ? h?.okText : h?.justOkText), b = o || h?.cancelText, y = g.useMemo(() => Object.assign({
    autoFocusButton: p,
    cancelTextLocale: b,
    okTextLocale: m,
    mergedOkCancel: f
  }, c), [p, b, m, f, c]), C = /* @__PURE__ */ g.createElement(g.Fragment, null, /* @__PURE__ */ g.createElement(qi, null), /* @__PURE__ */ g.createElement(Ui, null)), S = e.title !== void 0 && e.title !== null, x = `${a}-body`;
  return /* @__PURE__ */ g.createElement("div", {
    className: `${a}-body-wrapper`
  }, /* @__PURE__ */ g.createElement("div", {
    className: z(x, {
      [`${x}-has-title`]: S
    })
  }, d, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-paragraph`
  }, S && /* @__PURE__ */ g.createElement("span", {
    className: `${a}-title`
  }, e.title), /* @__PURE__ */ g.createElement("div", {
    className: `${a}-content`
  }, e.content))), l === void 0 || typeof l == "function" ? /* @__PURE__ */ g.createElement(hc, {
    value: y
  }, /* @__PURE__ */ g.createElement("div", {
    className: `${a}-btns`
  }, typeof l == "function" ? l(C, {
    OkBtn: Ui,
    CancelBtn: qi
  }) : C)) : l, /* @__PURE__ */ g.createElement(Jh, {
    prefixCls: t
  }));
}, Vc = (e) => {
  const {
    close: t,
    zIndex: r,
    maskStyle: n,
    direction: o,
    prefixCls: a,
    wrapClassName: i,
    rootPrefixCls: s,
    bodyStyle: l,
    closable: u = !1,
    onConfirm: c,
    styles: d,
    title: f
  } = e;
  if (process.env.NODE_ENV !== "production") {
    const x = st("Modal");
    [["visible", "open"], ["bodyStyle", "styles.body"], ["maskStyle", "styles.mask"]].forEach(([O, E]) => {
      x.deprecated(!(O in e), O, E);
    });
  }
  const p = `${a}-confirm`, v = e.width || 416, h = e.style || {}, m = e.mask === void 0 ? !0 : e.mask, b = e.maskClosable === void 0 ? !1 : e.maskClosable, y = z(p, `${p}-${e.type}`, {
    [`${p}-rtl`]: o === "rtl"
  }, e.className), [, C] = Ot(), S = g.useMemo(() => r !== void 0 ? r : C.zIndexPopupBase + Yl, [r, C]);
  return /* @__PURE__ */ g.createElement(Ac, Object.assign({}, e, {
    className: y,
    wrapClassName: z({
      [`${p}-centered`]: !!e.centered
    }, i),
    onCancel: () => {
      t?.({
        triggerCancel: !0
      }), c?.(!1);
    },
    title: f,
    footer: null,
    transitionName: yn(s || "", "zoom", e.transitionName),
    maskTransitionName: yn(s || "", "fade", e.maskTransitionName),
    mask: m,
    maskClosable: b,
    style: h,
    styles: Object.assign({
      body: l,
      mask: n
    }, d),
    width: v,
    zIndex: S,
    closable: u
  }), /* @__PURE__ */ g.createElement(Lc, Object.assign({}, e, {
    confirmPrefixCls: p
  })));
}, Ma = (e) => {
  const {
    rootPrefixCls: t,
    iconPrefixCls: r,
    direction: n,
    theme: o
  } = e;
  return /* @__PURE__ */ g.createElement(pt, {
    prefixCls: t,
    iconPrefixCls: r,
    direction: n,
    theme: o
  }, /* @__PURE__ */ g.createElement(Vc, Object.assign({}, e)));
};
process.env.NODE_ENV !== "production" && (Vc.displayName = "ConfirmDialog", Ma.displayName = "ConfirmDialogWrapper");
const Nt = [];
let Dc = "";
function kc() {
  return Dc;
}
const t0 = (e) => {
  var t, r;
  const {
    prefixCls: n,
    getContainer: o,
    direction: a
  } = e, i = al(), s = Ie(Ce), l = kc() || s.getPrefixCls(), u = n || `${l}-modal`;
  let c = o;
  return c === !1 && (c = void 0, process.env.NODE_ENV !== "production" && process.env.NODE_ENV !== "production" && wt(!1, "Modal", "Static method not support `getContainer` to be `false` since it do not have context env.")), /* @__PURE__ */ T.createElement(Ma, Object.assign({}, e, {
    rootPrefixCls: l,
    prefixCls: u,
    iconPrefixCls: s.iconPrefixCls,
    theme: s.theme,
    direction: a ?? s.direction,
    locale: (r = (t = s.locale) === null || t === void 0 ? void 0 : t.Modal) !== null && r !== void 0 ? r : i,
    getContainer: c
  }));
};
function _r(e) {
  const t = Im();
  process.env.NODE_ENV !== "production" && !t.holderRender && Nm("Modal");
  const r = document.createDocumentFragment();
  let n = Object.assign(Object.assign({}, e), {
    close: l,
    open: !0
  }), o, a;
  function i(...c) {
    var d;
    if (c.some((v) => v?.triggerCancel)) {
      var p;
      (d = e.onCancel) === null || d === void 0 || (p = d).call.apply(p, [e, () => {
      }].concat(H(c.slice(1))));
    }
    for (let v = 0; v < Nt.length; v++)
      if (Nt[v] === l) {
        Nt.splice(v, 1);
        break;
      }
    a();
  }
  const s = (c) => {
    clearTimeout(o), o = setTimeout(() => {
      const d = t.getPrefixCls(void 0, kc()), f = t.getIconPrefixCls(), p = t.getTheme(), v = /* @__PURE__ */ T.createElement(t0, Object.assign({}, c));
      a = ec()(/* @__PURE__ */ T.createElement(pt, {
        prefixCls: d,
        iconPrefixCls: f,
        theme: p
      }, typeof t.holderRender == "function" ? t.holderRender(v) : v), r);
    });
  };
  function l(...c) {
    n = Object.assign(Object.assign({}, n), {
      open: !1,
      afterClose: () => {
        typeof e.afterClose == "function" && e.afterClose(), i.apply(this, c);
      }
    }), n.visible && delete n.visible, s(n);
  }
  function u(c) {
    typeof c == "function" ? n = c(n) : n = Object.assign(Object.assign({}, n), c), s(n);
  }
  return s(n), Nt.push(l), {
    destroy: l,
    update: u
  };
}
function Hc(e) {
  return Object.assign(Object.assign({}, e), {
    type: "warning"
  });
}
function Bc(e) {
  return Object.assign(Object.assign({}, e), {
    type: "info"
  });
}
function zc(e) {
  return Object.assign(Object.assign({}, e), {
    type: "success"
  });
}
function Wc(e) {
  return Object.assign(Object.assign({}, e), {
    type: "error"
  });
}
function qc(e) {
  return Object.assign(Object.assign({}, e), {
    type: "confirm"
  });
}
function r0({
  rootPrefixCls: e
}) {
  process.env.NODE_ENV !== "production" && wt(!1, "Modal", "Modal.config is deprecated. Please use ConfigProvider.config instead."), Dc = e;
}
var n0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const o0 = (e, t) => {
  var r, {
    afterClose: n,
    config: o
  } = e, a = n0(e, ["afterClose", "config"]);
  const [i, s] = g.useState(!0), [l, u] = g.useState(o), {
    direction: c,
    getPrefixCls: d
  } = g.useContext(Ce), f = d("modal"), p = d(), v = () => {
    var y;
    n(), (y = l.afterClose) === null || y === void 0 || y.call(l);
  }, h = (...y) => {
    var C;
    if (s(!1), y.some((O) => O?.triggerCancel)) {
      var x;
      (C = l.onCancel) === null || C === void 0 || (x = C).call.apply(x, [l, () => {
      }].concat(H(y.slice(1))));
    }
  };
  g.useImperativeHandle(t, () => ({
    destroy: h,
    update: (y) => {
      u((C) => {
        const S = typeof y == "function" ? y(C) : y;
        return Object.assign(Object.assign({}, C), S);
      });
    }
  }));
  const m = (r = l.okCancel) !== null && r !== void 0 ? r : l.type === "confirm", [b] = On("Modal", Et.Modal);
  return /* @__PURE__ */ g.createElement(Ma, Object.assign({
    prefixCls: f,
    rootPrefixCls: p
  }, l, {
    close: h,
    open: i,
    afterClose: v,
    okText: l.okText || (m ? b?.okText : b?.justOkText),
    direction: l.direction || c,
    cancelText: l.cancelText || b?.cancelText
  }, a));
}, a0 = /* @__PURE__ */ g.forwardRef(o0);
let vs = 0;
const i0 = /* @__PURE__ */ g.memo(/* @__PURE__ */ g.forwardRef((e, t) => {
  const [r, n] = mg();
  return g.useImperativeHandle(t, () => ({
    patchElement: n
  }), [n]), /* @__PURE__ */ g.createElement(g.Fragment, null, r);
}));
function s0() {
  const e = g.useRef(null), [t, r] = g.useState([]);
  g.useEffect(() => {
    t.length && (H(t).forEach((i) => {
      i();
    }), r([]));
  }, [t]);
  const n = g.useCallback((a) => function(s) {
    var l;
    vs += 1;
    const u = /* @__PURE__ */ g.createRef();
    let c;
    const d = new Promise((m) => {
      c = m;
    });
    let f = !1, p;
    const v = /* @__PURE__ */ g.createElement(a0, {
      key: `modal-${vs}`,
      config: a(s),
      ref: u,
      afterClose: () => {
        p?.();
      },
      isSilent: () => f,
      onConfirm: (m) => {
        c(m);
      }
    });
    return p = (l = e.current) === null || l === void 0 ? void 0 : l.patchElement(v), p && Nt.push(p), {
      destroy: () => {
        function m() {
          var b;
          (b = u.current) === null || b === void 0 || b.destroy();
        }
        u.current ? m() : r((b) => [].concat(H(b), [m]));
      },
      update: (m) => {
        function b() {
          var y;
          (y = u.current) === null || y === void 0 || y.update(m);
        }
        u.current ? b() : r((y) => [].concat(H(y), [b]));
      },
      then: (m) => (f = !0, d.then(m))
    };
  }, []);
  return [g.useMemo(() => ({
    info: n(Bc),
    success: n(zc),
    error: n(Wc),
    warning: n(Hc),
    confirm: n(qc)
  }), [n]), /* @__PURE__ */ g.createElement(i0, {
    key: "modal-holder",
    ref: e
  })];
}
function l0(e) {
  return (t) => /* @__PURE__ */ g.createElement(pt, {
    theme: {
      token: {
        motion: !1,
        zIndexPopupBase: 0
      }
    }
  }, /* @__PURE__ */ g.createElement(e, Object.assign({}, t)));
}
var c0 = function(e, t) {
  var r = {};
  for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function") for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
    t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
const u0 = (e) => {
  const {
    prefixCls: t,
    className: r,
    closeIcon: n,
    closable: o,
    type: a,
    title: i,
    children: s,
    footer: l
  } = e, u = c0(e, ["prefixCls", "className", "closeIcon", "closable", "type", "title", "children", "footer"]), {
    getPrefixCls: c
  } = g.useContext(Ce), d = c(), f = t || c("modal"), p = Xl(d), [v, h, m] = jc(f, p), b = `${f}-confirm`;
  let y = {};
  return a ? y = {
    closable: o ?? !1,
    title: "",
    footer: "",
    children: /* @__PURE__ */ g.createElement(Lc, Object.assign({}, e, {
      prefixCls: f,
      confirmPrefixCls: b,
      rootPrefixCls: d,
      content: s
    }))
  } : y = {
    closable: o ?? !0,
    title: i,
    footer: l !== null && /* @__PURE__ */ g.createElement(_c, Object.assign({}, e)),
    children: s
  }, v(/* @__PURE__ */ g.createElement(Fa, Object.assign({
    prefixCls: f,
    className: z(h, `${f}-pure-panel`, a && b, a && `${b}-${a}`, r, m, p)
  }, u, {
    closeIcon: Rc(f, n),
    closable: o
  }, y)));
}, d0 = l0(u0);
function Uc(e) {
  return _r(Hc(e));
}
const Xe = Ac;
Xe.useModal = s0;
Xe.info = function(t) {
  return _r(Bc(t));
};
Xe.success = function(t) {
  return _r(zc(t));
};
Xe.error = function(t) {
  return _r(Wc(t));
};
Xe.warning = Uc;
Xe.warn = Uc;
Xe.confirm = function(t) {
  return _r(qc(t));
};
Xe.destroyAll = function() {
  for (; Nt.length; ) {
    const t = Nt.pop();
    t && t();
  }
};
Xe.config = r0;
Xe._InternalPanelDoNotUseOrYouWillBeFired = d0;
process.env.NODE_ENV !== "production" && (Xe.displayName = "Modal");
const f0 = Er(
  ({
    isOpen: e,
    onClose: t,
    onSubmit: r,
    title: n,
    subtitle: o,
    description: a,
    cancelButtonText: i = "CANCELAR",
    submitButtonText: s = "ACEPTAR",
    closeOnOverlayClick: l = !0,
    closeOnEscape: u = !0,
    className: c,
    children: d
  }, f) => /* @__PURE__ */ le(
    Xe,
    {
      open: e || !1,
      title: /* @__PURE__ */ le("span", { className: "luca-font-semibold luca-text-lg luca-text-[#111827] luca-leading-[30px]", children: n }),
      maskClosable: l,
      footer: null,
      keyboard: u,
      centered: !0,
      className: Oe("luca-modal", c),
      modalRender: (p) => /* @__PURE__ */ le("div", { ref: f, className: "luca-modal-wrapper", children: p }),
      children: /* @__PURE__ */ gr("div", { className: "luca-flex luca-flex-col luca-gap-4", children: [
        o && /* @__PURE__ */ le("p", { className: "luca-font-medium luca-text-sm luca-text-[#111827] luca-leading-[30px] luca-m-0", children: o }),
        a && /* @__PURE__ */ le("p", { className: "luca-font-normal luca-text-sm luca-text-[#6b7280] luca-leading-normal luca-m-0", children: a }),
        d,
        /* @__PURE__ */ gr("div", { className: "luca-flex luca-justify-end luca-gap-2", children: [
          /* @__PURE__ */ le(mo, { variant: "secondary", onClick: t, children: i }),
          /* @__PURE__ */ le(mo, { variant: "primary", onClick: r, children: s })
        ] })
      ] })
    }
  )
);
f0.displayName = "Modal";
export {
  mo as Button,
  bu as ButtonIcon,
  du as Card,
  vu as CardContent,
  gu as CardDescription,
  fu as CardHeader,
  ys as CardIcon,
  mu as CardTitle,
  fa as Layout,
  Cs as LayoutContent,
  bs as LayoutHeader,
  f0 as Modal,
  Ou as TabList,
  Oe as cn
};

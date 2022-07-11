import {
  m as memoize,
  _ as _extends,
  w as withEmotionCache,
  e as ThemeContext,
  h as getRegisteredStyles,
  s as serializeStyles,
  r as registerStyles,
  i as insertStyles,
  j as jsxRuntime,
  C as CacheProvider,
  k as createCache,
  d as deepmerge,
  n as isPlainObject,
  f as formatMuiErrorMessage,
  o as capitalize,
  p as resolveProps,
  q as merge,
  t as style,
  v as createUnaryUnit,
  x as handleBreakpoints,
  y as getValue,
  z as values,
  A as spacing,
  B as createEmptyBreakpointObject,
  D as removeUnusedBreakpoints,
  a as _objectWithoutPropertiesLoose,
  E as useTheme,
  c as createTheme,
  G as GlobalStyles,
  T as ThemeProvider,
  u as useThemeProps,
  F as css,
  H as keyframes,
  I as breakpoints,
  J as mergeBreakpointsInOrder,
  K as resolveBreakpointValues,
  L as getPath,
  M as createBreakpoints,
  N as createSpacing,
  O as shape,
  P as getThemeProps,
  Q as useTheme$1,
  R as createUnarySpacing,
  S as getStyleFromPropValue,
  U as margin,
  V as padding,
  W as hexToRgb,
  X as decomposeColor,
  Y as colorChannel,
  Z as recomposeColor,
  $ as rgbToHex,
  a0 as hslToRgb,
  a1 as getLuminance,
  g as getContrastRatio,
  a2 as alpha,
  b as darken,
  l as lighten,
  a3 as emphasize,
  a4 as _extends_1,
} from './ThemeProvider-a5f96362.js';
import {
  R as React,
  r as react,
  c as createCommonjsModule,
} from './index-9bbaa05c.js';
import { r as reactDom } from './index-eace2e96.js';

var reactPropsRegex =
  /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23

var isPropValid = /* #__PURE__ */ memoize(
  function (prop) {
    return (
      reactPropsRegex.test(prop) ||
      (prop.charCodeAt(0) === 111 &&
        /* o */
        prop.charCodeAt(1) === 110 &&
        /* n */
        prop.charCodeAt(2) < 91)
    );
  }
  /* Z+1 */
);

var testOmitPropsOnStringTag = isPropValid;

var testOmitPropsOnComponent = function testOmitPropsOnComponent(key) {
  return key !== 'theme';
};

var getDefaultShouldForwardProp = function getDefaultShouldForwardProp(tag) {
  return typeof tag === 'string' && // 96 is one less than the char code
    // for "a" so this is checking that
    // it's a lowercase character
    tag.charCodeAt(0) > 96
    ? testOmitPropsOnStringTag
    : testOmitPropsOnComponent;
};
var composeShouldForwardProps = function composeShouldForwardProps(
  tag,
  options,
  isReal
) {
  var shouldForwardProp;

  if (options) {
    var optionsShouldForwardProp = options.shouldForwardProp;
    shouldForwardProp =
      tag.__emotion_forwardProp && optionsShouldForwardProp
        ? function (propName) {
            return (
              tag.__emotion_forwardProp(propName) &&
              optionsShouldForwardProp(propName)
            );
          }
        : optionsShouldForwardProp;
  }

  if (typeof shouldForwardProp !== 'function' && isReal) {
    shouldForwardProp = tag.__emotion_forwardProp;
  }

  return shouldForwardProp;
};

var useInsertionEffect = React['useInsertion' + 'Effect']
  ? React['useInsertion' + 'Effect']
  : function useInsertionEffect(create) {
      create();
    };
function useInsertionEffectMaybe(create) {
  useInsertionEffect(create);
}

var Insertion = function Insertion(_ref) {
  var cache = _ref.cache,
    serialized = _ref.serialized,
    isStringTag = _ref.isStringTag;
  registerStyles(cache, serialized, isStringTag);
  var rules = useInsertionEffectMaybe(function () {
    return insertStyles(cache, serialized, isStringTag);
  });

  return null;
};

var createStyled = function createStyled(tag, options) {
  var isReal = tag.__emotion_real === tag;
  var baseTag = (isReal && tag.__emotion_base) || tag;
  var identifierName;
  var targetClassName;

  if (options !== undefined) {
    identifierName = options.label;
    targetClassName = options.target;
  }

  var shouldForwardProp = composeShouldForwardProps(tag, options, isReal);
  var defaultShouldForwardProp =
    shouldForwardProp || getDefaultShouldForwardProp(baseTag);
  var shouldUseAs = !defaultShouldForwardProp('as');
  return function () {
    var args = arguments;
    var styles =
      isReal && tag.__emotion_styles !== undefined
        ? tag.__emotion_styles.slice(0)
        : [];

    if (identifierName !== undefined) {
      styles.push('label:' + identifierName + ';');
    }

    if (args[0] == null || args[0].raw === undefined) {
      styles.push.apply(styles, args);
    } else {
      styles.push(args[0][0]);
      var len = args.length;
      var i = 1;

      for (; i < len; i++) {
        styles.push(args[i], args[0][i]);
      }
    } // $FlowFixMe: we need to cast StatelessFunctionalComponent to our PrivateStyledComponent class

    var Styled = withEmotionCache(function (props, cache, ref) {
      var FinalTag = (shouldUseAs && props.as) || baseTag;
      var className = '';
      var classInterpolations = [];
      var mergedProps = props;

      if (props.theme == null) {
        mergedProps = {};

        for (var key in props) {
          mergedProps[key] = props[key];
        }

        mergedProps.theme = react.useContext(ThemeContext);
      }

      if (typeof props.className === 'string') {
        className = getRegisteredStyles(
          cache.registered,
          classInterpolations,
          props.className
        );
      } else if (props.className != null) {
        className = props.className + ' ';
      }

      var serialized = serializeStyles(
        styles.concat(classInterpolations),
        cache.registered,
        mergedProps
      );
      className += cache.key + '-' + serialized.name;

      if (targetClassName !== undefined) {
        className += ' ' + targetClassName;
      }

      var finalShouldForwardProp =
        shouldUseAs && shouldForwardProp === undefined
          ? getDefaultShouldForwardProp(FinalTag)
          : defaultShouldForwardProp;
      var newProps = {};

      for (var _key in props) {
        if (shouldUseAs && _key === 'as') continue;

        if (
          // $FlowFixMe
          finalShouldForwardProp(_key)
        ) {
          newProps[_key] = props[_key];
        }
      }

      newProps.className = className;
      newProps.ref = ref;
      return /*#__PURE__*/ react.createElement(
        react.Fragment,
        null,
        /*#__PURE__*/ react.createElement(Insertion, {
          cache: cache,
          serialized: serialized,
          isStringTag: typeof FinalTag === 'string',
        }),
        /*#__PURE__*/ react.createElement(FinalTag, newProps)
      );
    });
    Styled.displayName =
      identifierName !== undefined
        ? identifierName
        : 'Styled(' +
          (typeof baseTag === 'string'
            ? baseTag
            : baseTag.displayName || baseTag.name || 'Component') +
          ')';
    Styled.defaultProps = tag.defaultProps;
    Styled.__emotion_real = Styled;
    Styled.__emotion_base = baseTag;
    Styled.__emotion_styles = styles;
    Styled.__emotion_forwardProp = shouldForwardProp;
    Object.defineProperty(Styled, 'toString', {
      value: function value() {
        if (targetClassName === undefined && 'production' !== 'production') {
          return 'NO_COMPONENT_SELECTOR';
        } // $FlowFixMe: coerce undefined to string

        return '.' + targetClassName;
      },
    });

    Styled.withComponent = function (nextTag, nextOptions) {
      return createStyled(
        nextTag,
        _extends({}, options, nextOptions, {
          shouldForwardProp: composeShouldForwardProps(
            Styled,
            nextOptions,
            true
          ),
        })
      ).apply(void 0, styles);
    };

    return Styled;
  };
};

var tags = [
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'b',
  'base',
  'bdi',
  'bdo',
  'big',
  'blockquote',
  'body',
  'br',
  'button',
  'canvas',
  'caption',
  'cite',
  'code',
  'col',
  'colgroup',
  'data',
  'datalist',
  'dd',
  'del',
  'details',
  'dfn',
  'dialog',
  'div',
  'dl',
  'dt',
  'em',
  'embed',
  'fieldset',
  'figcaption',
  'figure',
  'footer',
  'form',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'head',
  'header',
  'hgroup',
  'hr',
  'html',
  'i',
  'iframe',
  'img',
  'input',
  'ins',
  'kbd',
  'keygen',
  'label',
  'legend',
  'li',
  'link',
  'main',
  'map',
  'mark',
  'marquee',
  'menu',
  'menuitem',
  'meta',
  'meter',
  'nav',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'picture',
  'pre',
  'progress',
  'q',
  'rp',
  'rt',
  'ruby',
  's',
  'samp',
  'script',
  'section',
  'select',
  'small',
  'source',
  'span',
  'strong',
  'style',
  'sub',
  'summary',
  'sup',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'track',
  'u',
  'ul',
  'var',
  'video',
  'wbr', // SVG
  'circle',
  'clipPath',
  'defs',
  'ellipse',
  'foreignObject',
  'g',
  'image',
  'line',
  'linearGradient',
  'mask',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'stop',
  'svg',
  'text',
  'tspan',
];

var newStyled = createStyled.bind();
tags.forEach(function (tagName) {
  // $FlowFixMe: we can ignore this because its exposed type is defined by the CreateStyled type
  newStyled[tagName] = newStyled(tagName);
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function () {
  function shim(
    props,
    propName,
    componentName,
    location,
    propFullName,
    secret
  ) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  } // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction,
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
});

const cache = createCache({
  key: 'css',
  prepend: true,
});
function StyledEngineProvider(props) {
  const { injectFirst, children } = props;
  return injectFirst
    ? /*#__PURE__*/ jsxRuntime.jsx(CacheProvider, {
        value: cache,
        children: children,
      })
    : children;
}

/** @license MUI v5.8.0
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function styled(tag, options) {
  const stylesFactory = newStyled(tag, options);

  return stylesFactory;
}

function chainPropTypes(propType1, propType2) {
  {
    return () => null;
  }
}

const elementAcceptingRef = chainPropTypes(propTypes.element);
elementAcceptingRef.isRequired = chainPropTypes(propTypes.element.isRequired);

var elementTypeAcceptingRef = chainPropTypes(propTypes.elementType);

function exactProp(propTypes) {
  {
    return propTypes;
  }
}

/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = 60103,
  c = 60106,
  d = 60107,
  e = 60108,
  f = 60114,
  g = 60109,
  h = 60110,
  k = 60112,
  l = 60113,
  m = 60120,
  n = 60115,
  p = 60116,
  q = 60121,
  r = 60122,
  u = 60117,
  v = 60129,
  w = 60131;
if ('function' === typeof Symbol && Symbol.for) {
  var x = Symbol.for;
  b = x('react.element');
  c = x('react.portal');
  d = x('react.fragment');
  e = x('react.strict_mode');
  f = x('react.profiler');
  g = x('react.provider');
  h = x('react.context');
  k = x('react.forward_ref');
  l = x('react.suspense');
  m = x('react.suspense_list');
  n = x('react.memo');
  p = x('react.lazy');
  q = x('react.block');
  r = x('react.server.block');
  u = x('react.fundamental');
  v = x('react.debug_trace_mode');
  w = x('react.legacy_hidden');
}
function y(a) {
  if ('object' === typeof a && null !== a) {
    var t = a.$$typeof;
    switch (t) {
      case b:
        switch (((a = a.type), a)) {
          case d:
          case f:
          case e:
          case l:
          case m:
            return a;
          default:
            switch (((a = a && a.$$typeof), a)) {
              case h:
              case k:
              case p:
              case n:
              case g:
                return a;
              default:
                return t;
            }
        }
      case c:
        return t;
    }
  }
}
var z = g,
  A = b,
  B = k,
  C = d,
  D = p,
  E = n,
  F = c,
  G = f,
  H = e,
  I = l;
var ContextConsumer = h;
var ContextProvider = z;
var Element$1 = A;
var ForwardRef = B;
var Fragment = C;
var Lazy = D;
var Memo = E;
var Portal = F;
var Profiler = G;
var StrictMode = H;
var Suspense = I;
var isAsyncMode = function () {
  return !1;
};
var isConcurrentMode = function () {
  return !1;
};
var isContextConsumer = function (a) {
  return y(a) === h;
};
var isContextProvider = function (a) {
  return y(a) === g;
};
var isElement = function (a) {
  return 'object' === typeof a && null !== a && a.$$typeof === b;
};
var isForwardRef = function (a) {
  return y(a) === k;
};
var isFragment = function (a) {
  return y(a) === d;
};
var isLazy = function (a) {
  return y(a) === p;
};
var isMemo = function (a) {
  return y(a) === n;
};
var isPortal = function (a) {
  return y(a) === c;
};
var isProfiler = function (a) {
  return y(a) === f;
};
var isStrictMode = function (a) {
  return y(a) === e;
};
var isSuspense = function (a) {
  return y(a) === l;
};
var isValidElementType = function (a) {
  return 'string' === typeof a ||
    'function' === typeof a ||
    a === d ||
    a === f ||
    a === v ||
    a === e ||
    a === l ||
    a === m ||
    a === w ||
    ('object' === typeof a &&
      null !== a &&
      (a.$$typeof === p ||
        a.$$typeof === n ||
        a.$$typeof === g ||
        a.$$typeof === h ||
        a.$$typeof === k ||
        a.$$typeof === u ||
        a.$$typeof === q ||
        a[0] === r))
    ? !0
    : !1;
};
var typeOf = y;

var reactIs_production_min = {
  ContextConsumer: ContextConsumer,
  ContextProvider: ContextProvider,
  Element: Element$1,
  ForwardRef: ForwardRef,
  Fragment: Fragment,
  Lazy: Lazy,
  Memo: Memo,
  Portal: Portal,
  Profiler: Profiler,
  StrictMode: StrictMode,
  Suspense: Suspense,
  isAsyncMode: isAsyncMode,
  isConcurrentMode: isConcurrentMode,
  isContextConsumer: isContextConsumer,
  isContextProvider: isContextProvider,
  isElement: isElement,
  isForwardRef: isForwardRef,
  isFragment: isFragment,
  isLazy: isLazy,
  isMemo: isMemo,
  isPortal: isPortal,
  isProfiler: isProfiler,
  isStrictMode: isStrictMode,
  isSuspense: isSuspense,
  isValidElementType: isValidElementType,
  typeOf: typeOf,
};

var reactIs = createCommonjsModule(function (module) {
  {
    module.exports = reactIs_production_min;
  }
});

// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3

const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}

function getFunctionComponentName(Component, fallback = '') {
  return (
    Component.displayName ||
    Component.name ||
    getFunctionName(Component) ||
    fallback
  );
}

function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return (
    outerType.displayName ||
    (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName)
  );
}
/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */

function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  } // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`

  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case reactIs.ForwardRef:
        return getWrappedName(Component, Component.render, 'ForwardRef');

      case reactIs.Memo:
        return getWrappedName(Component, Component.type, 'memo');

      default:
        return undefined;
    }
  }

  return undefined;
}

function HTMLElementType(
  props,
  propName,
  componentName,
  location,
  propFullName
) {
  {
    return null;
  }
}

/* eslint-disable */
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var ponyfillGlobal =
  typeof window != 'undefined' && window.Math == Math
    ? window
    : typeof self != 'undefined' && self.Math == Math
    ? self
    : Function('return this')();

const refType = propTypes.oneOfType([propTypes.func, propTypes.object]);

/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce(
    (acc, func) => {
      if (func == null) {
        return acc;
      }

      return function chainedFunction(...args) {
        acc.apply(this, args);
        func.apply(this, args);
      };
    },
    () => {}
  );
}

// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;

  function debounced(...args) {
    const later = () => {
      func.apply(this, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }

  debounced.clear = () => {
    clearTimeout(timeout);
  };

  return debounced;
}

function deprecatedPropType(validator, reason) {
  {
    return () => null;
  }
}

function isMuiElement(element, muiNames) {
  return (
    /*#__PURE__*/ react.isValidElement(element) &&
    muiNames.indexOf(element.type.muiName) !== -1
  );
}

function ownerDocument(node) {
  return (node && node.ownerDocument) || document;
}

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}

function requirePropFactory(componentNameInError, Component) {
  {
    return () => null;
  } // eslint-disable-next-line react/forbid-foreign-prop-types
}

/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}

const useEnhancedEffect =
  typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;

let globalId = 0;

function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react.useState(idOverride);
  const id = idOverride || defaultId;
  react.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
} // eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814

const maybeReactUseId = React['useId' + ''];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */

function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  } // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.

  return useGlobalId(idOverride);
}

function unsupportedProp(
  props,
  propName,
  componentName,
  location,
  propFullName
) {
  {
    return null;
  }
}

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value',
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const { current: isControlled } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;

  const setValueIfUncontrolled = react.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}

/**
 * https://github.com/facebook/react/issues/14099#issuecomment-440013892
 */

function useEventCallback(fn) {
  const ref = react.useRef(fn);
  useEnhancedEffect(() => {
    ref.current = fn;
  });
  return react.useCallback(
    (
      ...args // @ts-expect-error hide `this`
    ) =>
      // tslint:disable-next-line:ban-comma-operator
      (0, ref.current)(...args),
    []
  );
}

function useForkRef(refA, refB) {
  /**
   * This will create a new function if the ref props change and are defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react.useMemo(() => {
    if (refA == null && refB == null) {
      return null;
    }

    return (refValue) => {
      setRef(refA, refValue);
      setRef(refB, refValue);
    };
  }, [refA, refB]);
}

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js
let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
let hadFocusVisibleRecentlyTimeout;
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true,
};
/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */

function focusTriggersKeyboardModality(node) {
  const { type, tagName } = node;

  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }

  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }

  if (node.isContentEditable) {
    return true;
  }

  return false;
}
/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */

function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }

  hadKeyboardEvent = true;
}
/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */

function handlePointerDown() {
  hadKeyboardEvent = false;
}

function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}

function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}

function isFocusVisible(event) {
  const { target } = event;

  try {
    return target.matches(':focus-visible');
  } catch (error) {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  } // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.

  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}

function useIsFocusVisible() {
  const ref = react.useCallback((node) => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react.useRef(false);
  /**
   * Should be called if a blur event is fired
   */

  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      window.clearTimeout(hadFocusVisibleRecentlyTimeout);
      hadFocusVisibleRecentlyTimeout = window.setTimeout(() => {
        hadFocusVisibleRecently = false;
      }, 100);
      isFocusVisibleRef.current = false;
      return true;
    }

    return false;
  }
  /**
   * Should be called if a blur event is fired
   */

  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }

    return false;
  }

  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref,
  };
}

// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}

// Source from https://github.com/alitaheri/normalize-scroll-left
let cachedType;
/**
 * Based on the jquery plugin https://github.com/othree/jquery.rtl-scroll-type
 *
 * Types of scrollLeft, assuming scrollWidth=100 and direction is rtl.
 *
 * Type             | <- Most Left | Most Right -> | Initial
 * ---------------- | ------------ | ------------- | -------
 * default          | 0            | 100           | 100
 * negative (spec*) | -100         | 0             | 0
 * reverse          | 100          | 0             | 0
 *
 * Edge 85: default
 * Safari 14: negative
 * Chrome 85: negative
 * Firefox 81: negative
 * IE11: reverse
 *
 * spec* https://drafts.csswg.org/cssom-view/#dom-window-scroll
 */

function detectScrollType() {
  if (cachedType) {
    return cachedType;
  }

  const dummy = document.createElement('div');
  const container = document.createElement('div');
  container.style.width = '10px';
  container.style.height = '1px';
  dummy.appendChild(container);
  dummy.dir = 'rtl';
  dummy.style.fontSize = '14px';
  dummy.style.width = '4px';
  dummy.style.height = '1px';
  dummy.style.position = 'absolute';
  dummy.style.top = '-1000px';
  dummy.style.overflow = 'scroll';
  document.body.appendChild(dummy);
  cachedType = 'reverse';

  if (dummy.scrollLeft > 0) {
    cachedType = 'default';
  } else {
    dummy.scrollLeft = 1;

    if (dummy.scrollLeft === 0) {
      cachedType = 'negative';
    }
  }

  document.body.removeChild(dummy);
  return cachedType;
} // Based on https://stackoverflow.com/a/24394376

function getNormalizedScrollLeft(element, direction) {
  const scrollLeft = element.scrollLeft; // Perform the calculations only when direction is rtl to avoid messing up the ltr behavior

  if (direction !== 'rtl') {
    return scrollLeft;
  }

  const type = detectScrollType();

  switch (type) {
    case 'negative':
      return element.scrollWidth - element.clientWidth + scrollLeft;

    case 'reverse':
      return element.scrollWidth - element.clientWidth - scrollLeft;

    default:
      return scrollLeft;
  }
}

const usePreviousProps = (value) => {
  const ref = react.useRef({});
  react.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: -1,
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px',
};

function validatorNoop() {
  return null;
}
validatorNoop.isRequired = validatorNoop;
var integerPropType = validatorNoop;

function composeClasses(slots, getUtilityClass, classes) {
  const output = {};
  Object.keys(slots).forEach(
    // `Objet.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (slot) => {
      output[slot] = slots[slot]
        .reduce((acc, key) => {
          if (key) {
            if (classes && classes[key]) {
              acc.push(classes[key]);
            }

            acc.push(getUtilityClass(key));
          }

          return acc;
        }, [])
        .join(' ');
    }
  );
  return output;
}

const defaultGenerator = (componentName) => componentName;

const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },

    generate(componentName) {
      return generate(componentName);
    },

    reset() {
      generate = defaultGenerator;
    },
  };
};

const ClassNameGenerator = createClassNameGenerator();

const globalStateClassesMapping = {
  active: 'Mui-active',
  checked: 'Mui-checked',
  completed: 'Mui-completed',
  disabled: 'Mui-disabled',
  error: 'Mui-error',
  expanded: 'Mui-expanded',
  focused: 'Mui-focused',
  focusVisible: 'Mui-focusVisible',
  required: 'Mui-required',
  selected: 'Mui-selected',
};
function generateUtilityClass(componentName, slot) {
  const globalStateClass = globalStateClassesMapping[slot];
  return (
    globalStateClass || `${ClassNameGenerator.generate(componentName)}-${slot}`
  );
}

function generateUtilityClasses(componentName, slots) {
  const result = {};
  slots.forEach((slot) => {
    result[slot] = generateUtilityClass(componentName, slot);
  });
  return result;
}

var esm = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  chainPropTypes: chainPropTypes,
  deepmerge: deepmerge,
  isPlainObject: isPlainObject,
  elementAcceptingRef: elementAcceptingRef,
  elementTypeAcceptingRef: elementTypeAcceptingRef,
  exactProp: exactProp,
  formatMuiErrorMessage: formatMuiErrorMessage,
  getDisplayName: getDisplayName,
  HTMLElementType: HTMLElementType,
  ponyfillGlobal: ponyfillGlobal,
  refType: refType,
  unstable_capitalize: capitalize,
  unstable_createChainedFunction: createChainedFunction,
  unstable_debounce: debounce,
  unstable_deprecatedPropType: deprecatedPropType,
  unstable_isMuiElement: isMuiElement,
  unstable_ownerDocument: ownerDocument,
  unstable_ownerWindow: ownerWindow,
  unstable_requirePropFactory: requirePropFactory,
  unstable_setRef: setRef,
  unstable_useEnhancedEffect: useEnhancedEffect,
  unstable_useId: useId,
  unstable_unsupportedProp: unsupportedProp,
  unstable_useControlled: useControlled,
  unstable_useEventCallback: useEventCallback,
  unstable_useForkRef: useForkRef,
  unstable_useIsFocusVisible: useIsFocusVisible,
  unstable_getScrollbarSize: getScrollbarSize,
  unstable_detectScrollType: detectScrollType,
  unstable_getNormalizedScrollLeft: getNormalizedScrollLeft,
  usePreviousProps: usePreviousProps,
  visuallyHidden: visuallyHidden,
  integerPropType: integerPropType,
  internal_resolveProps: resolveProps,
  unstable_composeClasses: composeClasses,
  unstable_generateUtilityClass: generateUtilityClass,
  unstable_generateUtilityClasses: generateUtilityClasses,
  unstable_ClassNameGenerator: ClassNameGenerator,
});

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach((prop) => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  const fn = (props) => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return merge(acc, handlers[prop](props));
      }

      return acc;
    }, {});
  };

  fn.propTypes = {};
  fn.filterProps = styles.reduce(
    (acc, style) => acc.concat(style.filterProps),
    []
  );
  return fn;
}

function getBorder(value) {
  if (typeof value !== 'number') {
    return value;
  }

  return `${value}px solid`;
}

const border = style({
  prop: 'border',
  themeKey: 'borders',
  transform: getBorder,
});
const borderTop = style({
  prop: 'borderTop',
  themeKey: 'borders',
  transform: getBorder,
});
const borderRight = style({
  prop: 'borderRight',
  themeKey: 'borders',
  transform: getBorder,
});
const borderBottom = style({
  prop: 'borderBottom',
  themeKey: 'borders',
  transform: getBorder,
});
const borderLeft = style({
  prop: 'borderLeft',
  themeKey: 'borders',
  transform: getBorder,
});
const borderColor = style({
  prop: 'borderColor',
  themeKey: 'palette',
});
const borderTopColor = style({
  prop: 'borderTopColor',
  themeKey: 'palette',
});
const borderRightColor = style({
  prop: 'borderRightColor',
  themeKey: 'palette',
});
const borderBottomColor = style({
  prop: 'borderBottomColor',
  themeKey: 'palette',
});
const borderLeftColor = style({
  prop: 'borderLeftColor',
  themeKey: 'palette',
});
const borderRadius = (props) => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = createUnaryUnit(props.theme, 'shape.borderRadius', 4);

    const styleFromPropValue = (propValue) => ({
      borderRadius: getValue(transformer, propValue),
    });

    return handleBreakpoints(props, props.borderRadius, styleFromPropValue);
  }

  return null;
};
borderRadius.propTypes = {};
borderRadius.filterProps = ['borderRadius'];
const borders = compose(
  border,
  borderTop,
  borderRight,
  borderBottom,
  borderLeft,
  borderColor,
  borderTopColor,
  borderRightColor,
  borderBottomColor,
  borderLeftColor,
  borderRadius
);

const displayPrint = style({
  prop: 'displayPrint',
  cssProperty: false,
  transform: (value) => ({
    '@media print': {
      display: value,
    },
  }),
});
const displayRaw = style({
  prop: 'display',
});
const overflow = style({
  prop: 'overflow',
});
const textOverflow = style({
  prop: 'textOverflow',
});
const visibility = style({
  prop: 'visibility',
});
const whiteSpace = style({
  prop: 'whiteSpace',
});
var display = compose(
  displayPrint,
  displayRaw,
  overflow,
  textOverflow,
  visibility,
  whiteSpace
);

const flexBasis = style({
  prop: 'flexBasis',
});
const flexDirection = style({
  prop: 'flexDirection',
});
const flexWrap = style({
  prop: 'flexWrap',
});
const justifyContent = style({
  prop: 'justifyContent',
});
const alignItems = style({
  prop: 'alignItems',
});
const alignContent = style({
  prop: 'alignContent',
});
const order = style({
  prop: 'order',
});
const flex = style({
  prop: 'flex',
});
const flexGrow = style({
  prop: 'flexGrow',
});
const flexShrink = style({
  prop: 'flexShrink',
});
const alignSelf = style({
  prop: 'alignSelf',
});
const justifyItems = style({
  prop: 'justifyItems',
});
const justifySelf = style({
  prop: 'justifySelf',
});
const flexbox = compose(
  flexBasis,
  flexDirection,
  flexWrap,
  justifyContent,
  alignItems,
  alignContent,
  order,
  flex,
  flexGrow,
  flexShrink,
  alignSelf,
  justifyItems,
  justifySelf
);

const gap = (props) => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = (propValue) => ({
      gap: getValue(transformer, propValue),
    });

    return handleBreakpoints(props, props.gap, styleFromPropValue);
  }

  return null;
};
gap.propTypes = {};
gap.filterProps = ['gap'];
const columnGap = (props) => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = (propValue) => ({
      columnGap: getValue(transformer, propValue),
    });

    return handleBreakpoints(props, props.columnGap, styleFromPropValue);
  }

  return null;
};
columnGap.propTypes = {};
columnGap.filterProps = ['columnGap'];
const rowGap = (props) => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = createUnaryUnit(props.theme, 'spacing', 8);

    const styleFromPropValue = (propValue) => ({
      rowGap: getValue(transformer, propValue),
    });

    return handleBreakpoints(props, props.rowGap, styleFromPropValue);
  }

  return null;
};
rowGap.propTypes = {};
rowGap.filterProps = ['rowGap'];
const gridColumn = style({
  prop: 'gridColumn',
});
const gridRow = style({
  prop: 'gridRow',
});
const gridAutoFlow = style({
  prop: 'gridAutoFlow',
});
const gridAutoColumns = style({
  prop: 'gridAutoColumns',
});
const gridAutoRows = style({
  prop: 'gridAutoRows',
});
const gridTemplateColumns = style({
  prop: 'gridTemplateColumns',
});
const gridTemplateRows = style({
  prop: 'gridTemplateRows',
});
const gridTemplateAreas = style({
  prop: 'gridTemplateAreas',
});
const gridArea = style({
  prop: 'gridArea',
});
const grid = compose(
  gap,
  columnGap,
  rowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea
);

const color = style({
  prop: 'color',
  themeKey: 'palette',
});
const bgcolor = style({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
});
const backgroundColor = style({
  prop: 'backgroundColor',
  themeKey: 'palette',
});
const palette = compose(color, bgcolor, backgroundColor);

const position = style({
  prop: 'position',
});
const zIndex = style({
  prop: 'zIndex',
  themeKey: 'zIndex',
});
const top = style({
  prop: 'top',
});
const right = style({
  prop: 'right',
});
const bottom = style({
  prop: 'bottom',
});
const left = style({
  prop: 'left',
});
var positions = compose(position, zIndex, top, right, bottom, left);

const boxShadow = style({
  prop: 'boxShadow',
  themeKey: 'shadows',
});

function transform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}

const width = style({
  prop: 'width',
  transform,
});
const maxWidth = (props) => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = (propValue) => {
      var _props$theme, _props$theme$breakpoi, _props$theme$breakpoi2;

      const breakpoint =
        ((_props$theme = props.theme) == null
          ? void 0
          : (_props$theme$breakpoi = _props$theme.breakpoints) == null
          ? void 0
          : (_props$theme$breakpoi2 = _props$theme$breakpoi.values) == null
          ? void 0
          : _props$theme$breakpoi2[propValue]) || values[propValue];
      return {
        maxWidth: breakpoint || transform(propValue),
      };
    };

    return handleBreakpoints(props, props.maxWidth, styleFromPropValue);
  }

  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = style({
  prop: 'minWidth',
  transform,
});
const height = style({
  prop: 'height',
  transform,
});
const maxHeight = style({
  prop: 'maxHeight',
  transform,
});
const minHeight = style({
  prop: 'minHeight',
  transform,
});
const sizeWidth = style({
  prop: 'size',
  cssProperty: 'width',
  transform,
});
const sizeHeight = style({
  prop: 'size',
  cssProperty: 'height',
  transform,
});
const boxSizing = style({
  prop: 'boxSizing',
});
const sizing = compose(
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  boxSizing
);

const fontFamily = style({
  prop: 'fontFamily',
  themeKey: 'typography',
});
const fontSize = style({
  prop: 'fontSize',
  themeKey: 'typography',
});
const fontStyle = style({
  prop: 'fontStyle',
  themeKey: 'typography',
});
const fontWeight = style({
  prop: 'fontWeight',
  themeKey: 'typography',
});
const letterSpacing = style({
  prop: 'letterSpacing',
});
const textTransform = style({
  prop: 'textTransform',
});
const lineHeight = style({
  prop: 'lineHeight',
});
const textAlign = style({
  prop: 'textAlign',
});
const typographyVariant = style({
  prop: 'typography',
  cssProperty: false,
  themeKey: 'typography',
});
const typography = compose(
  typographyVariant,
  fontFamily,
  fontSize,
  fontStyle,
  fontWeight,
  letterSpacing,
  lineHeight,
  textAlign,
  textTransform
);

const filterPropsMapping = {
  borders: borders.filterProps,
  display: display.filterProps,
  flexbox: flexbox.filterProps,
  grid: grid.filterProps,
  positions: positions.filterProps,
  palette: palette.filterProps,
  shadows: boxShadow.filterProps,
  sizing: sizing.filterProps,
  spacing: spacing.filterProps,
  typography: typography.filterProps,
};
const styleFunctionMapping = {
  borders,
  display,
  flexbox,
  grid,
  positions,
  palette,
  shadows: boxShadow,
  sizing,
  spacing,
  typography,
};
const propToStyleFunction = Object.keys(filterPropsMapping).reduce(
  (acc, styleFnName) => {
    filterPropsMapping[styleFnName].forEach((propName) => {
      acc[propName] = styleFunctionMapping[styleFnName];
    });
    return acc;
  },
  {}
);

function getThemeValue(prop, value, theme) {
  const inputProps = {
    [prop]: value,
    theme,
  };
  const styleFunction = propToStyleFunction[prop];
  return styleFunction
    ? styleFunction(inputProps)
    : {
        [prop]: value,
      };
}

function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce(
    (keys, object) => keys.concat(Object.keys(object)),
    []
  );
  const union = new Set(allKeys);
  return objects.every((object) => union.size === Object.keys(object).length);
}

function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
} // eslint-disable-next-line @typescript-eslint/naming-convention

function unstable_createStyleFunctionSx(
  styleFunctionMapping$1 = styleFunctionMapping
) {
  const propToStyleFunction = Object.keys(styleFunctionMapping$1).reduce(
    (acc, styleFnName) => {
      styleFunctionMapping$1[styleFnName].filterProps.forEach((propName) => {
        acc[propName] = styleFunctionMapping$1[styleFnName];
      });
      return acc;
    },
    {}
  );

  function getThemeValue(prop, value, theme) {
    const inputProps = {
      [prop]: value,
      theme,
    };
    const styleFunction = propToStyleFunction[prop];
    return styleFunction
      ? styleFunction(inputProps)
      : {
          [prop]: value,
        };
  }

  function styleFunctionSx(props) {
    const { sx, theme = {} } = props || {};

    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */

    function traverse(sxInput) {
      let sxObject = sxInput;

      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }

      if (!sxObject) {
        return null;
      }

      const emptyBreakpoints = createEmptyBreakpointObject(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach((styleKey) => {
        const value = callIfFn(sxObject[styleKey], theme);

        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (propToStyleFunction[styleKey]) {
              css = merge(css, getThemeValue(styleKey, value, theme));
            } else {
              const breakpointsValues = handleBreakpoints(
                {
                  theme,
                },
                value,
                (x) => ({
                  [styleKey]: x,
                })
              );

              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme,
                });
              } else {
                css = merge(css, breakpointsValues);
              }
            }
          } else {
            css = merge(css, getThemeValue(styleKey, value, theme));
          }
        }
      });
      return removeUnusedBreakpoints(breakpointsKeys, css);
    }

    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }

  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];

const _excluded = ['sx'];

const splitProps = (props) => {
  const result = {
    systemProps: {},
    otherProps: {},
  };
  Object.keys(props).forEach((prop) => {
    if (propToStyleFunction[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};

function extendSxProp(props) {
  const { sx: inSx } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded);

  const { systemProps, otherProps } = splitProps(other);
  let finalSx;

  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);

      if (!isPlainObject(result)) {
        return systemProps;
      }

      return _extends({}, systemProps, result);
    };
  } else {
    finalSx = _extends({}, systemProps, inSx);
  }

  return _extends({}, otherProps, {
    sx: finalSx,
  });
}

function sx(styles) {
  return ({ theme }) =>
    styleFunctionSx({
      sx: styles,
      theme,
    });
}

function toVal(mix) {
  var k,
    y,
    str = '';

  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix;
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (k = 0; k < mix.length; k++) {
        if (mix[k]) {
          if ((y = toVal(mix[k]))) {
            str && (str += ' ');
            str += y;
          }
        }
      }
    } else {
      for (k in mix) {
        if (mix[k]) {
          str && (str += ' ');
          str += k;
        }
      }
    }
  }

  return str;
}

function require$$4() {
  var i = 0,
    tmp,
    x,
    str = '';
  while (i < arguments.length) {
    if ((tmp = arguments[i++])) {
      if ((x = toVal(tmp))) {
        str && (str += ' ');
        str += x;
      }
    }
  }
  return str;
}

const _excluded$1 = ['className', 'component'];
function createBox(options = {}) {
  const {
    defaultTheme,
    defaultClassName = 'MuiBox-root',
    generateClassName,
    styleFunctionSx: styleFunctionSx$1 = styleFunctionSx,
  } = options;
  const BoxRoot = styled('div')(styleFunctionSx$1);
  const Box = /*#__PURE__*/ react.forwardRef(function Box(inProps, ref) {
    const theme = useTheme(defaultTheme);

    const _extendSxProp = extendSxProp(inProps),
      { className, component = 'div' } = _extendSxProp,
      other = _objectWithoutPropertiesLoose(_extendSxProp, _excluded$1);

    return /*#__PURE__*/ jsxRuntime.jsx(
      BoxRoot,
      _extends(
        {
          as: component,
          ref: ref,
          className: require$$4(
            className,
            generateClassName
              ? generateClassName(defaultClassName)
              : defaultClassName
          ),
          theme: theme,
        },
        other
      )
    );
  });
  return Box;
}

const Box = createBox();

const _excluded$2 = ['variant'];

function isEmpty(string) {
  return string.length === 0;
}
/**
 * Generates string classKey based on the properties provided. It starts with the
 * variant if defined, and then it appends all other properties in alphabetical order.
 * @param {object} props - the properties for which the classKey should be created.
 */

function propsToClassKey(props) {
  const { variant } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$2);

  let classKey = variant || '';
  Object.keys(other)
    .sort()
    .forEach((key) => {
      if (key === 'color') {
        classKey += isEmpty(classKey) ? props[key] : capitalize(props[key]);
      } else {
        classKey += `${isEmpty(classKey) ? key : capitalize(key)}${capitalize(
          props[key].toString()
        )}`;
      }
    });
  return classKey;
}

const _excluded$3 = [
    'name',
    'slot',
    'skipVariantsResolver',
    'skipSx',
    'overridesResolver',
  ],
  _excluded2 = ['theme'],
  _excluded3 = ['theme'];

function isEmpty$1(obj) {
  return Object.keys(obj).length === 0;
}

const getStyleOverrides = (name, theme) => {
  if (
    theme.components &&
    theme.components[name] &&
    theme.components[name].styleOverrides
  ) {
    return theme.components[name].styleOverrides;
  }

  return null;
};

const getVariantStyles = (name, theme) => {
  let variants = [];

  if (
    theme &&
    theme.components &&
    theme.components[name] &&
    theme.components[name].variants
  ) {
    variants = theme.components[name].variants;
  }

  const variantsStyles = {};
  variants.forEach((definition) => {
    const key = propsToClassKey(definition.props);
    variantsStyles[key] = definition.style;
  });
  return variantsStyles;
};

const variantsResolver = (props, styles, theme, name) => {
  var _theme$components, _theme$components$nam;

  const { ownerState = {} } = props;
  const variantsStyles = [];
  const themeVariants =
    theme == null
      ? void 0
      : (_theme$components = theme.components) == null
      ? void 0
      : (_theme$components$nam = _theme$components[name]) == null
      ? void 0
      : _theme$components$nam.variants;

  if (themeVariants) {
    themeVariants.forEach((themeVariant) => {
      let isMatch = true;
      Object.keys(themeVariant.props).forEach((key) => {
        if (
          ownerState[key] !== themeVariant.props[key] &&
          props[key] !== themeVariant.props[key]
        ) {
          isMatch = false;
        }
      });

      if (isMatch) {
        variantsStyles.push(styles[propsToClassKey(themeVariant.props)]);
      }
    });
  }

  return variantsStyles;
}; // Update /system/styled/#api in case if this changes

function shouldForwardProp(prop) {
  return (
    prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as'
  );
}
const systemDefaultTheme = createTheme();

function createStyled$1(input = {}) {
  const {
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp,
    styleFunctionSx: styleFunctionSx$1 = styleFunctionSx,
  } = input;
  return (tag, inputOptions = {}) => {
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        overridesResolver,
      } = inputOptions,
      options = _objectWithoutPropertiesLoose(inputOptions, _excluded$3); // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.

    const skipVariantsResolver =
      inputSkipVariantsResolver !== undefined
        ? inputSkipVariantsResolver
        : (componentSlot && componentSlot !== 'Root') || false;
    const skipSx = inputSkipSx || false;
    let label;

    let shouldForwardPropOption = shouldForwardProp;

    if (componentSlot === 'Root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    }

    const defaultStyledResolver = styled(
      tag,
      _extends(
        {
          shouldForwardProp: shouldForwardPropOption,
          label,
        },
        options
      )
    );

    const muiStyledResolver = (styleArg, ...expressions) => {
      const expressionsWithDefaultTheme = expressions
        ? expressions.map((stylesArg) => {
            // On the server Emotion doesn't use React.forwardRef for creating components, so the created
            // component stays as a function. This condition makes sure that we do not interpolate functions
            // which are basically components used as a selectors.
            // eslint-disable-next-line no-underscore-dangle
            return typeof stylesArg === 'function' &&
              stylesArg.__emotion_real !== stylesArg
              ? (_ref) => {
                  let { theme: themeInput } = _ref,
                    other = _objectWithoutPropertiesLoose(_ref, _excluded2);

                  return stylesArg(
                    _extends(
                      {
                        theme: isEmpty$1(themeInput)
                          ? defaultTheme
                          : themeInput,
                      },
                      other
                    )
                  );
                }
              : stylesArg;
          })
        : [];
      let transformedStyleArg = styleArg;

      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          const styleOverrides = getStyleOverrides(componentName, theme);

          if (styleOverrides) {
            const resolvedStyleOverrides = {};
            Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
              resolvedStyleOverrides[slotKey] =
                typeof slotStyle === 'function'
                  ? slotStyle(
                      _extends({}, props, {
                        theme,
                      })
                    )
                  : slotStyle;
            });
            return overridesResolver(props, resolvedStyleOverrides);
          }

          return null;
        });
      }

      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return variantsResolver(
            props,
            getVariantStyles(componentName, theme),
            theme,
            componentName
          );
        });
      }

      if (!skipSx) {
        expressionsWithDefaultTheme.push((props) => {
          const theme = isEmpty$1(props.theme) ? defaultTheme : props.theme;
          return styleFunctionSx$1(
            _extends({}, props, {
              theme,
            })
          );
        });
      }

      const numOfCustomFnsApplied =
        expressionsWithDefaultTheme.length - expressions.length;

      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill(''); // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.

        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      } else if (
        typeof styleArg === 'function' && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        // eslint-disable-next-line no-underscore-dangle
        styleArg.__emotion_real !== styleArg
      ) {
        // If the type is function, we need to define the default theme.
        transformedStyleArg = (_ref2) => {
          let { theme: themeInput } = _ref2,
            other = _objectWithoutPropertiesLoose(_ref2, _excluded3);

          return styleArg(
            _extends(
              {
                theme: isEmpty$1(themeInput) ? defaultTheme : themeInput,
              },
              other
            )
          );
        };
      }

      const Component = defaultStyledResolver(
        transformedStyleArg,
        ...expressionsWithDefaultTheme
      );

      return Component;
    };

    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }

    return muiStyledResolver;
  };
}

const styled$1 = createStyled$1();

/**
 * This function create an object from keys, value and then assign to target
 *
 * @param {Object} obj : the target object to be assigned
 * @param {string[]} keys
 * @param {string | number} value
 *
 * @example
 * const source = {}
 * assignNestedKeys(source, ['palette', 'primary'], 'var(--palette-primary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)' } }
 *
 * @example
 * const source = { palette: { primary: 'var(--palette-primary)' } }
 * assignNestedKeys(source, ['palette', 'secondary'], 'var(--palette-secondary)')
 * console.log(source) // { palette: { primary: 'var(--palette-primary)', secondary: 'var(--palette-secondary)' } }
 */
const assignNestedKeys = (obj, keys, value, arrayKeys = []) => {
  let temp = obj;
  keys.forEach((k, index) => {
    if (index === keys.length - 1) {
      if (Array.isArray(temp)) {
        temp[Number(k)] = value;
      } else if (temp && typeof temp === 'object') {
        temp[k] = value;
      }
    } else if (temp && typeof temp === 'object') {
      if (!temp[k]) {
        temp[k] = arrayKeys.includes(k) ? [] : {};
      }

      temp = temp[k];
    }
  });
};
/**
 *
 * @param {Object} obj : source object
 * @param {Function} callback : a function that will be called when
 *                   - the deepest key in source object is reached
 *                   - the value of the deepest key is NOT `undefined` | `null`
 *
 * @example
 * walkObjectDeep({ palette: { primary: { main: '#000000' } } }, console.log)
 * // ['palette', 'primary', 'main'] '#000000'
 */

const walkObjectDeep = (obj, callback, shouldSkipPaths) => {
  function recurse(object, parentKeys = [], arrayKeys = []) {
    Object.entries(object).forEach(([key, value]) => {
      if (
        !shouldSkipPaths ||
        (shouldSkipPaths && !shouldSkipPaths([...parentKeys, key]))
      ) {
        if (value !== undefined && value !== null) {
          if (typeof value === 'object' && Object.keys(value).length > 0) {
            recurse(
              value,
              [...parentKeys, key],
              Array.isArray(value) ? [...arrayKeys, key] : arrayKeys
            );
          } else {
            callback([...parentKeys, key], value, arrayKeys);
          }
        }
      }
    });
  }

  recurse(obj);
};

const getCssValue = (keys, value) => {
  if (typeof value === 'number') {
    if (
      ['lineHeight', 'fontWeight', 'opacity', 'zIndex'].some((prop) =>
        keys.includes(prop)
      )
    ) {
      // CSS property that are unitless
      return value;
    }

    const lastKey = keys[keys.length - 1];

    if (lastKey.toLowerCase().indexOf('opacity') >= 0) {
      // opacity values are unitless
      return value;
    }

    return `${value}px`;
  }

  return value;
};
/**
 * a function that parse theme and return { css, vars }
 *
 * @param {Object} theme
 * @param {{
 *  prefix?: string,
 *  basePrefix?: string,
 *  shouldSkipGeneratingVar?: (objectPathKeys: Array<string>, value: string | number) => boolean
 * }} options.
 *  `basePrefix`: defined by design system.
 *  `prefix`: defined by application
 *
 *   the CSS variable value will be adjusted based on the provided `basePrefix` & `prefix` which can be found in `parsedTheme`.
 *
 * @returns {{ css: Object, vars: Object, parsedTheme: typeof theme }} `css` is the stylesheet, `vars` is an object to get css variable (same structure as theme), and `parsedTheme` is the cloned version of theme.
 *
 * @example
 * const { css, vars, parsedTheme } = parser({
 *   fontSize: 12,
 *   lineHeight: 1.2,
 *   palette: { primary: { 500: 'var(--color)' } }
 * }, { prefix: 'foo' })
 *
 * console.log(css) // { '--foo-fontSize': '12px', '--foo-lineHeight': 1.2, '--foo-palette-primary-500': 'var(--foo-color)' }
 * console.log(vars) // { fontSize: '--foo-fontSize', lineHeight: '--foo-lineHeight', palette: { primary: { 500: 'var(--foo-palette-primary-500)' } } }
 * console.log(parsedTheme) // { fontSize: 12, lineHeight: 1.2, palette: { primary: { 500: 'var(--foo-color)' } } }
 */

function cssVarsParser(theme, options) {
  const { prefix, basePrefix = '', shouldSkipGeneratingVar } = options || {};
  const css = {};
  const vars = {};
  const parsedTheme = {};
  walkObjectDeep(
    theme,
    (keys, value, arrayKeys) => {
      if (typeof value === 'string' || typeof value === 'number') {
        if (typeof value === 'string' && value.match(/var\(\s*--/)) {
          // for CSS variable, apply prefix or remove basePrefix from the variable
          if (!basePrefix && prefix) {
            value = value.replace(/var\(\s*--/g, `var(--${prefix}-`);
          } else {
            value = prefix
              ? value.replace(
                  new RegExp(`var\\(\\s*--${basePrefix}`, 'g'),
                  `var(--${prefix}`
                ) // removing spaces
              : value.replace(
                  new RegExp(`var\\(\\s*--${basePrefix}-`, 'g'),
                  'var(--'
                );
          }
        }

        if (
          !shouldSkipGeneratingVar ||
          (shouldSkipGeneratingVar && !shouldSkipGeneratingVar(keys, value))
        ) {
          // only create css & var if `shouldSkipGeneratingVar` return false
          const cssVar = `--${prefix ? `${prefix}-` : ''}${keys.join('-')}`;
          Object.assign(css, {
            [cssVar]: getCssValue(keys, value),
          });
          assignNestedKeys(vars, keys, `var(${cssVar})`, arrayKeys);
        }
      }

      assignNestedKeys(parsedTheme, keys, value, arrayKeys);
    },
    (keys) => keys[0] === 'vars' // skip 'vars/*' paths
  );
  return {
    css,
    vars,
    parsedTheme,
  };
}

const DEFAULT_MODE_STORAGE_KEY = 'mode';
const DEFAULT_COLOR_SCHEME_STORAGE_KEY = 'color-scheme';
const DEFAULT_ATTRIBUTE = 'data-color-scheme';
function getInitColorSchemeScript(options) {
  const {
    enableSystem = false,
    defaultLightColorScheme = 'light',
    defaultDarkColorScheme = 'dark',
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    attribute = DEFAULT_ATTRIBUTE,
    colorSchemeNode = 'document.documentElement',
  } = options || {};
  return /*#__PURE__*/ jsxRuntime.jsx('script', {
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML: {
      __html: `(function() { try {
        var mode = localStorage.getItem('${modeStorageKey}');
        var colorScheme = '';
        if (mode === 'system' || (!mode && !!${enableSystem})) {
          // handle system mode
          var mql = window.matchMedia('(prefers-color-scheme: dark)');
          if (mql.matches) {
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
          } else {
            colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
          }
        }
        if (mode === 'light') {
          colorScheme = localStorage.getItem('${colorSchemeStorageKey}-light') || '${defaultLightColorScheme}';
        }
        if (mode === 'dark') {
          colorScheme = localStorage.getItem('${colorSchemeStorageKey}-dark') || '${defaultDarkColorScheme}';
        }
        if (colorScheme) {
          ${colorSchemeNode}.setAttribute('${attribute}', colorScheme);
        }
      } catch (e) {} })();`,
    },
  });
}

function getSystemMode(mode) {
  if (typeof window !== 'undefined' && mode === 'system') {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');

    if (mql.matches) {
      return 'dark';
    }

    return 'light';
  }

  return undefined;
}

function processState(state, callback) {
  if (
    state.mode === 'light' ||
    (state.mode === 'system' && state.systemMode === 'light')
  ) {
    return callback('light');
  }

  if (
    state.mode === 'dark' ||
    (state.mode === 'system' && state.systemMode === 'dark')
  ) {
    return callback('dark');
  }

  return undefined;
}

function getColorScheme(state) {
  return processState(state, (mode) => {
    if (mode === 'light') {
      return state.lightColorScheme;
    }

    if (mode === 'dark') {
      return state.darkColorScheme;
    }

    return undefined;
  });
}

function resolveValue(key, defaultValue) {
  if (typeof window === 'undefined') {
    return undefined;
  }

  let value;

  try {
    value = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
  }

  return value || defaultValue;
}

function useCurrentColorScheme(options) {
  const {
    defaultMode = 'light',
    defaultLightColorScheme,
    defaultDarkColorScheme,
    supportedColorSchemes = [],
    modeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    storageWindow = typeof window === 'undefined' ? undefined : window,
  } = options;
  const joinedColorSchemes = supportedColorSchemes.join(',');
  const [state, setState] = react.useState(() => {
    const initialMode = resolveValue(modeStorageKey, defaultMode);
    return {
      mode: initialMode,
      systemMode: getSystemMode(initialMode),
      lightColorScheme:
        resolveValue(`${colorSchemeStorageKey}-light`) ||
        defaultLightColorScheme,
      darkColorScheme:
        resolveValue(`${colorSchemeStorageKey}-dark`) || defaultDarkColorScheme,
    };
  });
  const colorScheme = getColorScheme(state);
  const setMode = react.useCallback(
    (mode) => {
      setState((currentState) => {
        const newMode = !mode ? defaultMode : mode;

        if (mode === currentState.mode) {
          return currentState;
        }

        if (typeof localStorage !== 'undefined') {
          localStorage.setItem(modeStorageKey, newMode);
        }

        return _extends({}, currentState, {
          mode: newMode,
          systemMode: getSystemMode(newMode),
        });
      });
    },
    [modeStorageKey, defaultMode]
  );
  const setColorScheme = react.useCallback(
    (value) => {
      if (!value || typeof value === 'string') {
        if (value && !joinedColorSchemes.includes(value)) {
          console.error(
            `\`${value}\` does not exist in \`theme.colorSchemes\`.`
          );
        } else {
          setState((currentState) => {
            const newState = _extends({}, currentState);

            if (!value) {
              // reset to default color scheme
              newState.lightColorScheme = defaultLightColorScheme;
              newState.darkColorScheme = defaultDarkColorScheme;
              return newState;
            }

            processState(currentState, (mode) => {
              localStorage.setItem(`${colorSchemeStorageKey}-${mode}`, value);

              if (mode === 'light') {
                newState.lightColorScheme = value;
              }

              if (mode === 'dark') {
                newState.darkColorScheme = value;
              }
            });
            return newState;
          });
        }
      } else if (
        (value.light && !joinedColorSchemes.includes(value.light)) ||
        (value.dark && !joinedColorSchemes.includes(value.dark))
      ) {
        console.error(`\`${value}\` does not exist in \`theme.colorSchemes\`.`);
      } else {
        setState((currentState) => {
          const newState = _extends({}, currentState);

          if (value.light || value.light === null) {
            newState.lightColorScheme =
              value.light === null ? defaultLightColorScheme : value.light;
          }

          if (value.dark || value.dark === null) {
            newState.darkColorScheme =
              value.dark === null ? defaultDarkColorScheme : value.dark;
          }

          return newState;
        });

        if (value.light) {
          localStorage.setItem(`${colorSchemeStorageKey}-light`, value.light);
        }

        if (value.dark) {
          localStorage.setItem(`${colorSchemeStorageKey}-dark`, value.dark);
        }
      }
    },
    [
      joinedColorSchemes,
      colorSchemeStorageKey,
      defaultLightColorScheme,
      defaultDarkColorScheme,
    ]
  );
  const handleMediaQuery = react.useCallback(
    (e) => {
      if (state.mode === 'system') {
        setState((currentState) =>
          _extends({}, currentState, {
            systemMode: e.matches ? 'dark' : 'light',
          })
        );
      }
    },
    [state.mode]
  ); // Ref hack to avoid adding handleMediaQuery as a dep

  const mediaListener = react.useRef(handleMediaQuery);
  mediaListener.current = handleMediaQuery;
  react.useEffect(() => {
    const handler = (...args) => mediaListener.current(...args); // Always listen to System preference

    const media = window.matchMedia('(prefers-color-scheme: dark)'); // Intentionally use deprecated listener methods to support iOS & old browsers

    media.addListener(handler);
    handler(media);
    return () => media.removeListener(handler);
  }, []); // Save mode, lightColorScheme & darkColorScheme to localStorage

  react.useEffect(() => {
    if (state.mode) {
      localStorage.setItem(modeStorageKey, state.mode);
    }

    processState(state, (mode) => {
      if (mode === 'light') {
        localStorage.setItem(
          `${colorSchemeStorageKey}-light`,
          state.lightColorScheme
        );
      }

      if (mode === 'dark') {
        localStorage.setItem(
          `${colorSchemeStorageKey}-dark`,
          state.darkColorScheme
        );
      }
    });
  }, [state, colorSchemeStorageKey, modeStorageKey]); // Handle when localStorage has changed

  react.useEffect(() => {
    const handleStorage = (event) => {
      const value = event.newValue;

      if (
        typeof event.key === 'string' &&
        event.key.startsWith(colorSchemeStorageKey) &&
        (!value || joinedColorSchemes.match(value))
      ) {
        // If the key is deleted, value will be null then reset color scheme to the default one.
        if (event.key.endsWith('light')) {
          setColorScheme({
            light: value,
          });
        }

        if (event.key.endsWith('dark')) {
          setColorScheme({
            dark: value,
          });
        }
      }

      if (
        event.key === modeStorageKey &&
        (!value || ['light', 'dark', 'system'].includes(value))
      ) {
        setMode(value || defaultMode);
      }
    };

    if (storageWindow) {
      // For syncing color-scheme changes between iframes
      storageWindow.addEventListener('storage', handleStorage);
      return () => storageWindow.removeEventListener('storage', handleStorage);
    }

    return undefined;
  }, [
    setColorScheme,
    setMode,
    modeStorageKey,
    colorSchemeStorageKey,
    joinedColorSchemes,
    defaultMode,
    storageWindow,
  ]);
  return _extends({}, state, {
    colorScheme,
    setMode,
    setColorScheme,
  });
}

/**
 * The benefit of this function is to help developers get CSS var from theme without specifying the whole variable
 * and they does not need to remember the prefix (defined once).
 */
function createGetCssVar(prefix = '') {
  function appendVar(...vars) {
    if (!vars.length) {
      return '';
    }

    const value = vars[0];

    if (
      typeof value === 'string' &&
      !value.match(
        /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))/
      )
    ) {
      return `, var(--${prefix ? `${prefix}-` : ''}${value}${appendVar(
        ...vars.slice(1)
      )})`;
    }

    return `, ${value}`;
  } // AdditionalVars makes `getCssVar` less strict, so it can be use like this `getCssVar('non-mui-variable')` without type error.

  const getCssVar = (field, ...vars) => {
    return `var(--${prefix ? `${prefix}-` : ''}${field}${appendVar(...vars)})`;
  };

  return getCssVar;
}

const _excluded$4 = ['colorSchemes', 'components'];
const DISABLE_CSS_TRANSITION =
  '*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}';
function createCssVarsProvider(options) {
  const {
    theme: defaultTheme = {},
    attribute: defaultAttribute = DEFAULT_ATTRIBUTE,
    modeStorageKey: defaultModeStorageKey = DEFAULT_MODE_STORAGE_KEY,
    colorSchemeStorageKey:
      defaultColorSchemeStorageKey = DEFAULT_COLOR_SCHEME_STORAGE_KEY,
    defaultMode: desisgnSystemMode = 'light',
    defaultColorScheme: designSystemColorScheme,
    disableTransitionOnChange: designSystemTransitionOnChange = false,
    enableColorScheme: designSystemEnableColorScheme = true,
    prefix: designSystemPrefix = '',
    shouldSkipGeneratingVar,
    resolveTheme,
  } = options;

  if (
    !defaultTheme.colorSchemes ||
    (typeof designSystemColorScheme === 'string' &&
      !defaultTheme.colorSchemes[designSystemColorScheme]) ||
    (typeof designSystemColorScheme === 'object' &&
      !defaultTheme.colorSchemes[
        designSystemColorScheme == null ? void 0 : designSystemColorScheme.light
      ]) ||
    (typeof designSystemColorScheme === 'object' &&
      !defaultTheme.colorSchemes[
        designSystemColorScheme == null ? void 0 : designSystemColorScheme.dark
      ])
  ) {
    console.error(
      `MUI: \`${designSystemColorScheme}\` does not exist in \`theme.colorSchemes\`.`
    );
  }

  const ColorSchemeContext = /*#__PURE__*/ react.createContext(undefined);

  const useColorScheme = () => {
    const value = react.useContext(ColorSchemeContext);

    if (!value) {
      throw new Error(formatMuiErrorMessage(19));
    }

    return value;
  };

  function CssVarsProvider({
    children,
    theme: themeProp = defaultTheme,
    prefix = designSystemPrefix,
    modeStorageKey = defaultModeStorageKey,
    colorSchemeStorageKey = defaultColorSchemeStorageKey,
    attribute = defaultAttribute,
    defaultMode = desisgnSystemMode,
    defaultColorScheme = designSystemColorScheme,
    disableTransitionOnChange = designSystemTransitionOnChange,
    enableColorScheme = designSystemEnableColorScheme,
    storageWindow = typeof window === 'undefined' ? undefined : window,
    documentNode = typeof document === 'undefined' ? undefined : document,
    colorSchemeNode = typeof document === 'undefined'
      ? undefined
      : document.documentElement,
    colorSchemeSelector = ':root',
  }) {
    const hasMounted = react.useRef(false);

    const { colorSchemes = {}, components = {} } = themeProp,
      restThemeProp = _objectWithoutPropertiesLoose(themeProp, _excluded$4);

    const allColorSchemes = Object.keys(colorSchemes);
    const defaultLightColorScheme =
      typeof defaultColorScheme === 'string'
        ? defaultColorScheme
        : defaultColorScheme.light;
    const defaultDarkColorScheme =
      typeof defaultColorScheme === 'string'
        ? defaultColorScheme
        : defaultColorScheme.dark;
    const {
      mode,
      setMode,
      systemMode,
      lightColorScheme,
      darkColorScheme,
      colorScheme,
      setColorScheme,
    } = useCurrentColorScheme({
      supportedColorSchemes: allColorSchemes,
      defaultLightColorScheme,
      defaultDarkColorScheme,
      modeStorageKey,
      colorSchemeStorageKey,
      defaultMode,
      storageWindow,
    });

    const resolvedColorScheme = (() => {
      if (!colorScheme) {
        // This scope occurs on the server
        if (defaultMode === 'dark') {
          return defaultDarkColorScheme;
        } // use light color scheme, if default mode is 'light' | 'auto'

        return defaultLightColorScheme;
      }

      return colorScheme;
    })();

    let theme = restThemeProp;
    const {
      css: rootCss,
      vars: rootVars,
      parsedTheme,
    } = cssVarsParser(theme, {
      prefix,
      basePrefix: designSystemPrefix,
      shouldSkipGeneratingVar,
    });
    theme = _extends({}, parsedTheme, {
      components,
      colorSchemes,
      prefix,
      vars: rootVars,
      getCssVar: createGetCssVar(prefix),
      getColorSchemeSelector: (targetColorScheme) =>
        `[${attribute}="${targetColorScheme}"] &`,
    });
    const defaultColorSchemeStyleSheet = {};
    const otherColorSchemesStyleSheet = {};
    Object.entries(colorSchemes).forEach(([key, scheme]) => {
      const {
        css,
        vars,
        parsedTheme: parsedScheme,
      } = cssVarsParser(scheme, {
        prefix,
        basePrefix: designSystemPrefix,
        shouldSkipGeneratingVar,
      });
      theme.vars = deepmerge(theme.vars, vars);

      if (key === resolvedColorScheme) {
        theme = _extends({}, theme, parsedScheme);

        if (theme.palette) {
          // assign runtime mode & colorScheme
          theme.palette.mode = mode;
          theme.palette.colorScheme = resolvedColorScheme;
        }
      }

      const resolvedDefaultColorScheme = (() => {
        if (typeof defaultColorScheme === 'string') {
          return defaultColorScheme;
        }

        if (defaultMode === 'dark') {
          return defaultColorScheme.dark;
        }

        return defaultColorScheme.light;
      })();

      if (key === resolvedDefaultColorScheme) {
        defaultColorSchemeStyleSheet[colorSchemeSelector] = css;
      } else {
        otherColorSchemesStyleSheet[
          `${
            colorSchemeSelector === ':root' ? '' : colorSchemeSelector
          }[${attribute}="${key}"]`
        ] = css;
      }
    });
    react.useEffect(() => {
      if (colorScheme && colorSchemeNode) {
        // attaches attribute to <html> because the css variables are attached to :root (html)
        colorSchemeNode.setAttribute(attribute, colorScheme);
      }
    }, [colorScheme, attribute, colorSchemeNode]);
    useEnhancedEffect(() => {
      if (!mode || !enableColorScheme || !colorSchemeNode) {
        return undefined;
      }

      const priorColorScheme =
        colorSchemeNode.style.getPropertyValue('color-scheme'); // `color-scheme` tells browser to render built-in elements according to its value: `light` or `dark`

      if (mode === 'system') {
        colorSchemeNode.style.setProperty('color-scheme', systemMode);
      } else {
        colorSchemeNode.style.setProperty('color-scheme', mode);
      }

      return () => {
        colorSchemeNode.style.setProperty('color-scheme', priorColorScheme);
      };
    }, [mode, systemMode, enableColorScheme, colorSchemeNode]);
    react.useEffect(() => {
      let timer;

      if (disableTransitionOnChange && hasMounted.current && documentNode) {
        // credit: https://github.com/pacocoursey/next-themes/blob/b5c2bad50de2d61ad7b52a9c5cdc801a78507d7a/index.tsx#L313
        const css = documentNode.createElement('style');
        css.appendChild(documentNode.createTextNode(DISABLE_CSS_TRANSITION));
        documentNode.head.appendChild(css); // Force browser repaint

        (() => window.getComputedStyle(documentNode.body))();

        timer = setTimeout(() => {
          documentNode.head.removeChild(css);
        }, 1);
      }

      return () => {
        clearTimeout(timer);
      };
    }, [colorScheme, disableTransitionOnChange, documentNode]);
    react.useEffect(() => {
      hasMounted.current = true;
      return () => {
        hasMounted.current = false;
      };
    }, []);
    return /*#__PURE__*/ jsxRuntime.jsxs(ColorSchemeContext.Provider, {
      value: {
        mode,
        setMode,
        lightColorScheme,
        darkColorScheme,
        colorScheme,
        setColorScheme,
        allColorSchemes,
      },
      children: [
        /*#__PURE__*/ jsxRuntime.jsx(GlobalStyles, {
          styles: {
            [colorSchemeSelector]: rootCss,
          },
        }),
        /*#__PURE__*/ jsxRuntime.jsx(GlobalStyles, {
          styles: defaultColorSchemeStyleSheet,
        }),
        /*#__PURE__*/ jsxRuntime.jsx(GlobalStyles, {
          styles: otherColorSchemesStyleSheet,
        }),
        /*#__PURE__*/ jsxRuntime.jsx(ThemeProvider, {
          theme: resolveTheme ? resolveTheme(theme) : theme,
          children: children,
        }),
      ],
    });
  }

  const getInitColorSchemeScript$1 = (params) =>
    getInitColorSchemeScript(
      _extends(
        {
          attribute: defaultAttribute,
          colorSchemeStorageKey: defaultColorSchemeStorageKey,
          modeStorageKey: defaultModeStorageKey,
        },
        params
      )
    );

  return {
    CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript: getInitColorSchemeScript$1,
  };
}

const _excluded$5 = [
  'className',
  'component',
  'disableGutters',
  'fixed',
  'maxWidth',
  'classes',
];
const defaultTheme = createTheme();
const defaultCreateStyledComponent = styled$1('div', {
  name: 'MuiContainer',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const { ownerState } = props;
    return [
      styles.root,
      styles[`maxWidth${capitalize(String(ownerState.maxWidth))}`],
      ownerState.fixed && styles.fixed,
      ownerState.disableGutters && styles.disableGutters,
    ];
  },
});

const useThemePropsDefault = (inProps) =>
  useThemeProps({
    props: inProps,
    name: 'MuiContainer',
    defaultTheme,
  });

const useUtilityClasses = (ownerState, componentName) => {
  const getContainerUtilityClass = (slot) => {
    return generateUtilityClass(componentName, slot);
  };

  const { classes, fixed, disableGutters, maxWidth } = ownerState;
  const slots = {
    root: [
      'root',
      maxWidth && `maxWidth${capitalize(String(maxWidth))}`,
      fixed && 'fixed',
      disableGutters && 'disableGutters',
    ],
  };
  return composeClasses(slots, getContainerUtilityClass, classes);
};

function createContainer(options = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent = defaultCreateStyledComponent,
    useThemeProps = useThemePropsDefault,
    componentName = 'MuiContainer',
  } = options;
  const ContainerRoot = createStyledComponent(
    ({ theme, ownerState }) =>
      _extends(
        {
          width: '100%',
          marginLeft: 'auto',
          boxSizing: 'border-box',
          marginRight: 'auto',
          display: 'block',
        },
        !ownerState.disableGutters && {
          paddingLeft: theme.spacing(2),
          paddingRight: theme.spacing(2),
          // @ts-ignore module augmentation fails if custom breakpoints are used
          [theme.breakpoints.up('sm')]: {
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
          },
        }
      ),
    ({ theme, ownerState }) =>
      ownerState.fixed &&
      Object.keys(theme.breakpoints.values).reduce(
        (acc, breakpointValueKey) => {
          const breakpoint = breakpointValueKey;
          const value = theme.breakpoints.values[breakpoint];

          if (value !== 0) {
            // @ts-ignore
            acc[theme.breakpoints.up(breakpoint)] = {
              maxWidth: `${value}${theme.breakpoints.unit}`,
            };
          }

          return acc;
        },
        {}
      ),
    ({ theme, ownerState }) =>
      _extends(
        {},
        ownerState.maxWidth === 'xs' && {
          // @ts-ignore module augmentation fails if custom breakpoints are used
          [theme.breakpoints.up('xs')]: {
            // @ts-ignore module augmentation fails if custom breakpoints are used
            maxWidth: Math.max(theme.breakpoints.values.xs, 444),
          },
        },
        ownerState.maxWidth && // @ts-ignore module augmentation fails if custom breakpoints are used
          ownerState.maxWidth !== 'xs' && {
            // @ts-ignore module augmentation fails if custom breakpoints are used
            [theme.breakpoints.up(ownerState.maxWidth)]: {
              // @ts-ignore module augmentation fails if custom breakpoints are used
              maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${
                theme.breakpoints.unit
              }`,
            },
          }
      )
  );
  const Container = /*#__PURE__*/ react.forwardRef(function Container(
    inProps,
    ref
  ) {
    const props = useThemeProps(inProps);

    const {
        className,
        component = 'div',
        disableGutters = false,
        fixed = false,
        maxWidth = 'lg',
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$5);

    const ownerState = _extends({}, props, {
      component,
      disableGutters,
      fixed,
      maxWidth,
    }); // @ts-ignore module augmentation fails if custom breakpoints are used

    const classes = useUtilityClasses(ownerState, componentName);
    return (
      /*#__PURE__*/
      // @ts-ignore theme is injected by the styled util
      jsxRuntime.jsx(
        ContainerRoot,
        _extends(
          {
            as: component, // @ts-ignore module augmentation fails if custom breakpoints are used
            ownerState: ownerState,
            className: require$$4(classes.root, className),
            ref: ref,
          },
          other
        )
      )
    );
  });
  return Container;
}

/**
 *
 * Demos:
 *
 * - [Container (Material UI)](https://mui.com/material-ui/react-container/)
 * - [Container (MUI System)](https://mui.com/system/react-container/)
 *
 * API:
 *
 * - [Container API](https://mui.com/system/api/container/)
 */

const Container = createContainer();

function getContainerUtilityClass(slot) {
  return generateUtilityClass('MuiContainer', slot);
}
const containerClasses = generateUtilityClasses('MuiContainer', [
  'root',
  'disableGutters',
  'fixed',
  'maxWidthXs',
  'maxWidthSm',
  'maxWidthMd',
  'maxWidthLg',
  'maxWidthXl',
]);

var esm$1 = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  css: css,
  keyframes: keyframes,
  GlobalStyles: GlobalStyles,
  StyledEngineProvider: StyledEngineProvider,
  borders: borders,
  breakpoints: breakpoints,
  handleBreakpoints: handleBreakpoints,
  mergeBreakpointsInOrder: mergeBreakpointsInOrder,
  unstable_resolveBreakpointValues: resolveBreakpointValues,
  compose: compose,
  display: display,
  flexbox: flexbox,
  grid: grid,
  palette: palette,
  positions: positions,
  shadows: boxShadow,
  sizing: sizing,
  spacing: spacing,
  style: style,
  getPath: getPath,
  typography: typography,
  unstable_styleFunctionSx: styleFunctionSx,
  unstable_createStyleFunctionSx: unstable_createStyleFunctionSx,
  unstable_extendSxProp: extendSxProp,
  experimental_sx: sx,
  unstable_getThemeValue: getThemeValue,
  Box: Box,
  createBox: createBox,
  createStyled: createStyled$1,
  styled: styled$1,
  createTheme: createTheme,
  createBreakpoints: createBreakpoints,
  createSpacing: createSpacing,
  shape: shape,
  useThemeProps: useThemeProps,
  getThemeProps: getThemeProps,
  useTheme: useTheme,
  useThemeWithoutDefault: useTheme$1,
  ThemeProvider: ThemeProvider,
  unstable_createCssVarsProvider: createCssVarsProvider,
  unstable_createGetCssVar: createGetCssVar,
  createContainer: createContainer,
  Container: Container,
  border: border,
  borderTop: borderTop,
  borderRight: borderRight,
  borderBottom: borderBottom,
  borderLeft: borderLeft,
  borderColor: borderColor,
  borderTopColor: borderTopColor,
  borderRightColor: borderRightColor,
  borderBottomColor: borderBottomColor,
  borderLeftColor: borderLeftColor,
  borderRadius: borderRadius,
  flexBasis: flexBasis,
  flexDirection: flexDirection,
  flexWrap: flexWrap,
  justifyContent: justifyContent,
  alignItems: alignItems,
  alignContent: alignContent,
  order: order,
  flex: flex,
  flexGrow: flexGrow,
  flexShrink: flexShrink,
  alignSelf: alignSelf,
  justifyItems: justifyItems,
  justifySelf: justifySelf,
  gap: gap,
  columnGap: columnGap,
  rowGap: rowGap,
  gridColumn: gridColumn,
  gridRow: gridRow,
  gridAutoFlow: gridAutoFlow,
  gridAutoColumns: gridAutoColumns,
  gridAutoRows: gridAutoRows,
  gridTemplateColumns: gridTemplateColumns,
  gridTemplateRows: gridTemplateRows,
  gridTemplateAreas: gridTemplateAreas,
  gridArea: gridArea,
  color: color,
  bgcolor: bgcolor,
  backgroundColor: backgroundColor,
  position: position,
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  width: width,
  maxWidth: maxWidth,
  minWidth: minWidth,
  height: height,
  maxHeight: maxHeight,
  minHeight: minHeight,
  sizeWidth: sizeWidth,
  sizeHeight: sizeHeight,
  boxSizing: boxSizing,
  createUnaryUnit: createUnaryUnit,
  createUnarySpacing: createUnarySpacing,
  getValue: getValue,
  getStyleFromPropValue: getStyleFromPropValue,
  margin: margin,
  padding: padding,
  fontFamily: fontFamily,
  fontSize: fontSize,
  fontStyle: fontStyle,
  fontWeight: fontWeight,
  letterSpacing: letterSpacing,
  textTransform: textTransform,
  lineHeight: lineHeight,
  textAlign: textAlign,
  typographyVariant: typographyVariant,
  shouldForwardProp: shouldForwardProp,
  systemDefaultTheme: systemDefaultTheme,
  hexToRgb: hexToRgb,
  decomposeColor: decomposeColor,
  colorChannel: colorChannel,
  recomposeColor: recomposeColor,
  rgbToHex: rgbToHex,
  hslToRgb: hslToRgb,
  getLuminance: getLuminance,
  getContrastRatio: getContrastRatio,
  alpha: alpha,
  darken: darken,
  lighten: lighten,
  emphasize: emphasize,
  containerClasses: containerClasses,
  getContainerUtilityClass: getContainerUtilityClass,
});

/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node, `ownerState` are not applied.
 * @param existingProps Props of the element.
 * @param ownerState
 */

function appendOwnerState(elementType, existingProps = {}, ownerState) {
  if (isHostComponent(elementType)) {
    return existingProps;
  }

  return _extends({}, existingProps, {
    ownerState: _extends({}, existingProps.ownerState, ownerState),
  });
}

function areArraysEqual(array1, array2, itemComparer = (a, b) => a === b) {
  return (
    array1.length === array2.length &&
    array1.every((value, index) => itemComparer(value, array2[index]))
  );
}

/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }

  const result = {};
  Object.keys(object)
    .filter(
      (prop) =>
        prop.match(/^on[A-Z]/) &&
        typeof object[prop] === 'function' &&
        !excludeKeys.includes(prop)
    )
    .forEach((prop) => {
      result[prop] = object[prop];
    });
  return result;
}

/**
 * Creates a type that is T with removed properties that are functions with names beginning with `on`.
 * Note that it does not exactly follow the logic of `omitEventHandlers` as it also removes fields where
 * `on` is followed by a non-letter character,
 */

/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }

  const result = {};
  Object.keys(object)
    .filter(
      (prop) => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')
    )
    .forEach((prop) => {
      result[prop] = object[prop];
    });
  return result;
}

/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on an unstyled component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `componentsProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className,
  } = parameters;

  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = require$$4(
      externalForwardedProps == null
        ? void 0
        : externalForwardedProps.className,
      externalSlotProps == null ? void 0 : externalSlotProps.className,
      className,
      additionalProps == null ? void 0 : additionalProps.className
    );

    const props = _extends(
      {},
      additionalProps,
      externalForwardedProps,
      externalSlotProps,
      {
        className: joinedClasses,
      }
    );

    if (joinedClasses.length === 0) {
      delete props.className;
    }

    return {
      props,
      internalRef: undefined,
    };
  } // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers(
    _extends({}, externalForwardedProps, externalSlotProps)
  );
  const componentsPropsWithoutEventHandlers =
    omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers(
    externalForwardedProps
  );
  const internalSlotProps = getSlotProps(eventHandlers);
  const joinedClasses = require$$4(
    externalForwardedProps == null ? void 0 : externalForwardedProps.className,
    externalSlotProps == null ? void 0 : externalSlotProps.className,
    className,
    additionalProps == null ? void 0 : additionalProps.className,
    internalSlotProps == null ? void 0 : internalSlotProps.className
  );

  const props = _extends(
    {},
    internalSlotProps,
    additionalProps,
    otherPropsWithoutEventHandlers,
    componentsPropsWithoutEventHandlers,
    {
      className: joinedClasses,
    }
  );

  if (joinedClasses.length === 0) {
    delete props.className;
  }

  return {
    props,
    internalRef: internalSlotProps.ref,
  };
}

/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState);
  }

  return componentProps;
}

const _excluded$6 = ['elementType', 'externalSlotProps', 'ownerState'];

/**
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;

  const { elementType, externalSlotProps, ownerState } = parameters,
    rest = _objectWithoutPropertiesLoose(parameters, _excluded$6);

  const resolvedComponentsProps = resolveComponentProps(
    externalSlotProps,
    ownerState
  );
  const merged = mergeSlotProps(
    _extends({}, rest, {
      externalSlotProps: resolvedComponentsProps,
    })
  );
  const props = appendOwnerState(
    elementType,
    _extends({}, merged.props, {
      ref: useForkRef(
        merged.internalRef,
        useForkRef(
          resolvedComponentsProps == null
            ? void 0
            : resolvedComponentsProps.ref,
          (_parameters$additiona = parameters.additionalProps) == null
            ? void 0
            : _parameters$additiona.ref
        )
      ),
    }),
    ownerState
  );
  return props;
}

// Give up on IE11 support for this feature

function stripDiacritics(string) {
  return typeof string.normalize !== 'undefined'
    ? string.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    : string;
}

function createFilterOptions(config = {}) {
  const {
    ignoreAccents = true,
    ignoreCase = true,
    limit,
    matchFrom = 'any',
    stringify,
    trim = false,
  } = config;
  return (options, { inputValue, getOptionLabel }) => {
    let input = trim ? inputValue.trim() : inputValue;

    if (ignoreCase) {
      input = input.toLowerCase();
    }

    if (ignoreAccents) {
      input = stripDiacritics(input);
    }

    const filteredOptions = options.filter((option) => {
      let candidate = (stringify || getOptionLabel)(option);

      if (ignoreCase) {
        candidate = candidate.toLowerCase();
      }

      if (ignoreAccents) {
        candidate = stripDiacritics(candidate);
      }

      return matchFrom === 'start'
        ? candidate.indexOf(input) === 0
        : candidate.indexOf(input) > -1;
    });
    return typeof limit === 'number'
      ? filteredOptions.slice(0, limit)
      : filteredOptions;
  };
} // To replace with .findIndex() once we stop IE11 support.

function findIndex(array, comp) {
  for (let i = 0; i < array.length; i += 1) {
    if (comp(array[i])) {
      return i;
    }
  }

  return -1;
}

const defaultFilterOptions = createFilterOptions(); // Number of options to jump in list box when pageup and pagedown keys are used.

const pageSize = 5;
function useAutocomplete(props) {
  const {
    autoComplete = false,
    autoHighlight = false,
    autoSelect = false,
    blurOnSelect = false,
    disabled: disabledProp,
    clearOnBlur = !props.freeSolo,
    clearOnEscape = false,
    componentName = 'useAutocomplete',
    defaultValue = props.multiple ? [] : null,
    disableClearable = false,
    disableCloseOnSelect = false,
    disabledItemsFocusable = false,
    disableListWrap = false,
    filterOptions = defaultFilterOptions,
    filterSelectedOptions = false,
    freeSolo = false,
    getOptionDisabled,
    getOptionLabel: getOptionLabelProp = (option) => {
      var _option$label;

      return (_option$label = option.label) != null ? _option$label : option;
    },
    isOptionEqualToValue = (option, value) => option === value,
    groupBy,
    handleHomeEndKeys = !props.freeSolo,
    id: idProp,
    includeInputInList = false,
    inputValue: inputValueProp,
    multiple = false,
    onChange,
    onClose,
    onHighlightChange,
    onInputChange,
    onOpen,
    open: openProp,
    openOnFocus = false,
    options,
    readOnly = false,
    selectOnFocus = !props.freeSolo,
    value: valueProp,
  } = props;
  const id = useId(idProp);
  let getOptionLabel = getOptionLabelProp;

  getOptionLabel = (option) => {
    const optionLabel = getOptionLabelProp(option);

    if (typeof optionLabel !== 'string') {
      return String(optionLabel);
    }

    return optionLabel;
  };

  const ignoreFocus = react.useRef(false);
  const firstFocus = react.useRef(true);
  const inputRef = react.useRef(null);
  const listboxRef = react.useRef(null);
  const [anchorEl, setAnchorEl] = react.useState(null);
  const [focusedTag, setFocusedTag] = react.useState(-1);
  const defaultHighlighted = autoHighlight ? 0 : -1;
  const highlightedIndexRef = react.useRef(defaultHighlighted);
  const [value, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: componentName,
  });
  const [inputValue, setInputValueState] = useControlled({
    controlled: inputValueProp,
    default: '',
    name: componentName,
    state: 'inputValue',
  });
  const [focused, setFocused] = react.useState(false);
  const resetInputValue = react.useCallback(
    (event, newValue) => {
      // retain current `inputValue` if new option isn't selected and `clearOnBlur` is false
      // When `multiple` is enabled, `newValue` is an array of all selected items including the newly selected item
      const isOptionSelected = multiple
        ? value.length < newValue.length
        : newValue !== null;

      if (!isOptionSelected && !clearOnBlur) {
        return;
      }

      let newInputValue;

      if (multiple) {
        newInputValue = '';
      } else if (newValue == null) {
        newInputValue = '';
      } else {
        const optionLabel = getOptionLabel(newValue);
        newInputValue = typeof optionLabel === 'string' ? optionLabel : '';
      }

      if (inputValue === newInputValue) {
        return;
      }

      setInputValueState(newInputValue);

      if (onInputChange) {
        onInputChange(event, newInputValue, 'reset');
      }
    },
    [
      getOptionLabel,
      inputValue,
      multiple,
      onInputChange,
      setInputValueState,
      clearOnBlur,
      value,
    ]
  );
  const prevValue = react.useRef();
  react.useEffect(() => {
    const valueChange = value !== prevValue.current;
    prevValue.current = value;

    if (focused && !valueChange) {
      return;
    } // Only reset the input's value when freeSolo if the component's value changes.

    if (freeSolo && !valueChange) {
      return;
    }

    resetInputValue(null, value);
  }, [value, resetInputValue, focused, prevValue, freeSolo]);
  const [open, setOpenState] = useControlled({
    controlled: openProp,
    default: false,
    name: componentName,
    state: 'open',
  });
  const [inputPristine, setInputPristine] = react.useState(true);
  const inputValueIsSelectedValue =
    !multiple && value != null && inputValue === getOptionLabel(value);
  const popupOpen = open && !readOnly;
  const filteredOptions = popupOpen
    ? filterOptions(
        options.filter((option) => {
          if (
            filterSelectedOptions &&
            (multiple ? value : [value]).some(
              (value2) =>
                value2 !== null && isOptionEqualToValue(option, value2)
            )
          ) {
            return false;
          }

          return true;
        }), // we use the empty string to manipulate `filterOptions` to not filter any options
        // i.e. the filter predicate always returns true
        {
          inputValue:
            inputValueIsSelectedValue && inputPristine ? '' : inputValue,
          getOptionLabel,
        }
      )
    : [];
  const listboxAvailable = open && filteredOptions.length > 0 && !readOnly;

  const focusTag = useEventCallback((tagToFocus) => {
    if (tagToFocus === -1) {
      inputRef.current.focus();
    } else {
      anchorEl.querySelector(`[data-tag-index="${tagToFocus}"]`).focus();
    }
  }); // Ensure the focusedTag is never inconsistent

  react.useEffect(() => {
    if (multiple && focusedTag > value.length - 1) {
      setFocusedTag(-1);
      focusTag(-1);
    }
  }, [value, multiple, focusedTag, focusTag]);

  function validOptionIndex(index, direction) {
    if (!listboxRef.current || index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (
        (direction === 'next' && nextFocus === filteredOptions.length) ||
        (direction === 'previous' && nextFocus === -1)
      ) {
        return -1;
      }

      const option = listboxRef.current.querySelector(
        `[data-option-index="${nextFocus}"]`
      ); // Same logic as MenuList.js

      const nextFocusDisabled = disabledItemsFocusable
        ? false
        : !option ||
          option.disabled ||
          option.getAttribute('aria-disabled') === 'true';

      if ((option && !option.hasAttribute('tabindex')) || nextFocusDisabled) {
        // Move to the next element.
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const setHighlightedIndex = useEventCallback(
    ({ event, index, reason = 'auto' }) => {
      highlightedIndexRef.current = index; // does the index exist?

      if (index === -1) {
        inputRef.current.removeAttribute('aria-activedescendant');
      } else {
        inputRef.current.setAttribute(
          'aria-activedescendant',
          `${id}-option-${index}`
        );
      }

      if (onHighlightChange) {
        onHighlightChange(
          event,
          index === -1 ? null : filteredOptions[index],
          reason
        );
      }

      if (!listboxRef.current) {
        return;
      }

      const prev = listboxRef.current.querySelector(
        '[role="option"].Mui-focused'
      );

      if (prev) {
        prev.classList.remove('Mui-focused');
        prev.classList.remove('Mui-focusVisible');
      }

      const listboxNode =
        listboxRef.current.parentElement.querySelector('[role="listbox"]'); // "No results"

      if (!listboxNode) {
        return;
      }

      if (index === -1) {
        listboxNode.scrollTop = 0;
        return;
      }

      const option = listboxRef.current.querySelector(
        `[data-option-index="${index}"]`
      );

      if (!option) {
        return;
      }

      option.classList.add('Mui-focused');

      if (reason === 'keyboard') {
        option.classList.add('Mui-focusVisible');
      } // Scroll active descendant into view.
      // Logic copied from https://www.w3.org/WAI/ARIA/apg/example-index/combobox/js/select-only.js
      //
      // Consider this API instead once it has a better browser support:
      // .scrollIntoView({ scrollMode: 'if-needed', block: 'nearest' });

      if (
        listboxNode.scrollHeight > listboxNode.clientHeight &&
        reason !== 'mouse'
      ) {
        const element = option;
        const scrollBottom = listboxNode.clientHeight + listboxNode.scrollTop;
        const elementBottom = element.offsetTop + element.offsetHeight;

        if (elementBottom > scrollBottom) {
          listboxNode.scrollTop = elementBottom - listboxNode.clientHeight;
        } else if (
          element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0) <
          listboxNode.scrollTop
        ) {
          listboxNode.scrollTop =
            element.offsetTop - element.offsetHeight * (groupBy ? 1.3 : 0);
        }
      }
    }
  );
  const changeHighlightedIndex = useEventCallback(
    ({ event, diff, direction = 'next', reason = 'auto' }) => {
      if (!popupOpen) {
        return;
      }

      const getNextIndex = () => {
        const maxIndex = filteredOptions.length - 1;

        if (diff === 'reset') {
          return defaultHighlighted;
        }

        if (diff === 'start') {
          return 0;
        }

        if (diff === 'end') {
          return maxIndex;
        }

        const newIndex = highlightedIndexRef.current + diff;

        if (newIndex < 0) {
          if (newIndex === -1 && includeInputInList) {
            return -1;
          }

          if (
            (disableListWrap && highlightedIndexRef.current !== -1) ||
            Math.abs(diff) > 1
          ) {
            return 0;
          }

          return maxIndex;
        }

        if (newIndex > maxIndex) {
          if (newIndex === maxIndex + 1 && includeInputInList) {
            return -1;
          }

          if (disableListWrap || Math.abs(diff) > 1) {
            return maxIndex;
          }

          return 0;
        }

        return newIndex;
      };

      const nextIndex = validOptionIndex(getNextIndex(), direction);
      setHighlightedIndex({
        index: nextIndex,
        reason,
        event,
      }); // Sync the content of the input with the highlighted option.

      if (autoComplete && diff !== 'reset') {
        if (nextIndex === -1) {
          inputRef.current.value = inputValue;
        } else {
          const option = getOptionLabel(filteredOptions[nextIndex]);
          inputRef.current.value = option; // The portion of the selected suggestion that has not been typed by the user,
          // a completion string, appears inline after the input cursor in the textbox.

          const index = option.toLowerCase().indexOf(inputValue.toLowerCase());

          if (index === 0 && inputValue.length > 0) {
            inputRef.current.setSelectionRange(
              inputValue.length,
              option.length
            );
          }
        }
      }
    }
  );
  const syncHighlightedIndex = react.useCallback(() => {
    if (!popupOpen) {
      return;
    }

    const valueItem = multiple ? value[0] : value; // The popup is empty, reset

    if (filteredOptions.length === 0 || valueItem == null) {
      changeHighlightedIndex({
        diff: 'reset',
      });
      return;
    }

    if (!listboxRef.current) {
      return;
    } // Synchronize the value with the highlighted index

    if (valueItem != null) {
      const currentOption = filteredOptions[highlightedIndexRef.current]; // Keep the current highlighted index if possible

      if (
        multiple &&
        currentOption &&
        findIndex(value, (val) => isOptionEqualToValue(currentOption, val)) !==
          -1
      ) {
        return;
      }

      const itemIndex = findIndex(filteredOptions, (optionItem) =>
        isOptionEqualToValue(optionItem, valueItem)
      );

      if (itemIndex === -1) {
        changeHighlightedIndex({
          diff: 'reset',
        });
      } else {
        setHighlightedIndex({
          index: itemIndex,
        });
      }

      return;
    } // Prevent the highlighted index to leak outside the boundaries.

    if (highlightedIndexRef.current >= filteredOptions.length - 1) {
      setHighlightedIndex({
        index: filteredOptions.length - 1,
      });
      return;
    } // Restore the focus to the previous index.

    setHighlightedIndex({
      index: highlightedIndexRef.current,
    }); // Ignore filteredOptions (and options, isOptionEqualToValue, getOptionLabel) not to break the scroll position
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    filteredOptions.length, // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    multiple ? false : value,
    filterSelectedOptions,
    changeHighlightedIndex,
    setHighlightedIndex,
    popupOpen,
    inputValue,
    multiple,
  ]);
  const handleListboxRef = useEventCallback((node) => {
    setRef(listboxRef, node);

    if (!node) {
      return;
    }

    syncHighlightedIndex();
  });

  react.useEffect(() => {
    syncHighlightedIndex();
  }, [syncHighlightedIndex]);

  const handleOpen = (event) => {
    if (open) {
      return;
    }

    setOpenState(true);
    setInputPristine(true);

    if (onOpen) {
      onOpen(event);
    }
  };

  const handleClose = (event, reason) => {
    if (!open) {
      return;
    }

    setOpenState(false);

    if (onClose) {
      onClose(event, reason);
    }
  };

  const handleValue = (event, newValue, reason, details) => {
    if (multiple) {
      if (
        value.length === newValue.length &&
        value.every((val, i) => val === newValue[i])
      ) {
        return;
      }
    } else if (value === newValue) {
      return;
    }

    if (onChange) {
      onChange(event, newValue, reason, details);
    }

    setValueState(newValue);
  };

  const isTouch = react.useRef(false);

  const selectNewValue = (
    event,
    option,
    reasonProp = 'selectOption',
    origin = 'options'
  ) => {
    let reason = reasonProp;
    let newValue = option;

    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];

      const itemIndex = findIndex(newValue, (valueItem) =>
        isOptionEqualToValue(option, valueItem)
      );

      if (itemIndex === -1) {
        newValue.push(option);
      } else if (origin !== 'freeSolo') {
        newValue.splice(itemIndex, 1);
        reason = 'removeOption';
      }
    }

    resetInputValue(event, newValue);
    handleValue(event, newValue, reason, {
      option,
    });

    if (!disableCloseOnSelect && !event.ctrlKey && !event.metaKey) {
      handleClose(event, reason);
    }

    if (
      blurOnSelect === true ||
      (blurOnSelect === 'touch' && isTouch.current) ||
      (blurOnSelect === 'mouse' && !isTouch.current)
    ) {
      inputRef.current.blur();
    }
  };

  function validTagIndex(index, direction) {
    if (index === -1) {
      return -1;
    }

    let nextFocus = index;

    while (true) {
      // Out of range
      if (
        (direction === 'next' && nextFocus === value.length) ||
        (direction === 'previous' && nextFocus === -1)
      ) {
        return -1;
      }

      const option = anchorEl.querySelector(`[data-tag-index="${nextFocus}"]`); // Same logic as MenuList.js

      if (
        !option ||
        !option.hasAttribute('tabindex') ||
        option.disabled ||
        option.getAttribute('aria-disabled') === 'true'
      ) {
        nextFocus += direction === 'next' ? 1 : -1;
      } else {
        return nextFocus;
      }
    }
  }

  const handleFocusTag = (event, direction) => {
    if (!multiple) {
      return;
    }

    if (inputValue === '') {
      handleClose(event, 'toggleInput');
    }

    let nextTag = focusedTag;

    if (focusedTag === -1) {
      if (inputValue === '' && direction === 'previous') {
        nextTag = value.length - 1;
      }
    } else {
      nextTag += direction === 'next' ? 1 : -1;

      if (nextTag < 0) {
        nextTag = 0;
      }

      if (nextTag === value.length) {
        nextTag = -1;
      }
    }

    nextTag = validTagIndex(nextTag, direction);
    setFocusedTag(nextTag);
    focusTag(nextTag);
  };

  const handleClear = (event) => {
    ignoreFocus.current = true;
    setInputValueState('');

    if (onInputChange) {
      onInputChange(event, '', 'clear');
    }

    handleValue(event, multiple ? [] : null, 'clear');
  };

  const handleKeyDown = (other) => (event) => {
    if (other.onKeyDown) {
      other.onKeyDown(event);
    }

    if (event.defaultMuiPrevented) {
      return;
    }

    if (
      focusedTag !== -1 &&
      ['ArrowLeft', 'ArrowRight'].indexOf(event.key) === -1
    ) {
      setFocusedTag(-1);
      focusTag(-1);
    } // Wait until IME is settled.

    if (event.which !== 229) {
      switch (event.key) {
        case 'Home':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'start',
              direction: 'next',
              reason: 'keyboard',
              event,
            });
          }

          break;

        case 'End':
          if (popupOpen && handleHomeEndKeys) {
            // Prevent scroll of the page
            event.preventDefault();
            changeHighlightedIndex({
              diff: 'end',
              direction: 'previous',
              reason: 'keyboard',
              event,
            });
          }

          break;

        case 'PageUp':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: -pageSize,
            direction: 'previous',
            reason: 'keyboard',
            event,
          });
          handleOpen(event);
          break;

        case 'PageDown':
          // Prevent scroll of the page
          event.preventDefault();
          changeHighlightedIndex({
            diff: pageSize,
            direction: 'next',
            reason: 'keyboard',
            event,
          });
          handleOpen(event);
          break;

        case 'ArrowDown':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: 1,
            direction: 'next',
            reason: 'keyboard',
            event,
          });
          handleOpen(event);
          break;

        case 'ArrowUp':
          // Prevent cursor move
          event.preventDefault();
          changeHighlightedIndex({
            diff: -1,
            direction: 'previous',
            reason: 'keyboard',
            event,
          });
          handleOpen(event);
          break;

        case 'ArrowLeft':
          handleFocusTag(event, 'previous');
          break;

        case 'ArrowRight':
          handleFocusTag(event, 'next');
          break;

        case 'Enter':
          if (highlightedIndexRef.current !== -1 && popupOpen) {
            const option = filteredOptions[highlightedIndexRef.current];
            const disabled = getOptionDisabled
              ? getOptionDisabled(option)
              : false; // Avoid early form validation, let the end-users continue filling the form.

            event.preventDefault();

            if (disabled) {
              return;
            }

            selectNewValue(event, option, 'selectOption'); // Move the selection to the end.

            if (autoComplete) {
              inputRef.current.setSelectionRange(
                inputRef.current.value.length,
                inputRef.current.value.length
              );
            }
          } else if (
            freeSolo &&
            inputValue !== '' &&
            inputValueIsSelectedValue === false
          ) {
            if (multiple) {
              // Allow people to add new values before they submit the form.
              event.preventDefault();
            }

            selectNewValue(event, inputValue, 'createOption', 'freeSolo');
          }

          break;

        case 'Escape':
          if (popupOpen) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClose(event, 'escape');
          } else if (
            clearOnEscape &&
            (inputValue !== '' || (multiple && value.length > 0))
          ) {
            // Avoid Opera to exit fullscreen mode.
            event.preventDefault(); // Avoid the Modal to handle the event.

            event.stopPropagation();
            handleClear(event);
          }

          break;

        case 'Backspace':
          if (multiple && !readOnly && inputValue === '' && value.length > 0) {
            const index = focusedTag === -1 ? value.length - 1 : focusedTag;
            const newValue = value.slice();
            newValue.splice(index, 1);
            handleValue(event, newValue, 'removeOption', {
              option: value[index],
            });
          }

          break;
      }
    }
  };

  const handleFocus = (event) => {
    setFocused(true);

    if (openOnFocus && !ignoreFocus.current) {
      handleOpen(event);
    }
  };

  const handleBlur = (event) => {
    // Ignore the event when using the scrollbar with IE11
    if (
      listboxRef.current !== null &&
      listboxRef.current.parentElement.contains(document.activeElement)
    ) {
      inputRef.current.focus();
      return;
    }

    setFocused(false);
    firstFocus.current = true;
    ignoreFocus.current = false;

    if (autoSelect && highlightedIndexRef.current !== -1 && popupOpen) {
      selectNewValue(
        event,
        filteredOptions[highlightedIndexRef.current],
        'blur'
      );
    } else if (autoSelect && freeSolo && inputValue !== '') {
      selectNewValue(event, inputValue, 'blur', 'freeSolo');
    } else if (clearOnBlur) {
      resetInputValue(event, value);
    }

    handleClose(event, 'blur');
  };

  const handleInputChange = (event) => {
    const newValue = event.target.value;

    if (inputValue !== newValue) {
      setInputValueState(newValue);
      setInputPristine(false);

      if (onInputChange) {
        onInputChange(event, newValue, 'input');
      }
    }

    if (newValue === '') {
      if (!disableClearable && !multiple) {
        handleValue(event, null, 'clear');
      }
    } else {
      handleOpen(event);
    }
  };

  const handleOptionMouseOver = (event) => {
    setHighlightedIndex({
      event,
      index: Number(event.currentTarget.getAttribute('data-option-index')),
      reason: 'mouse',
    });
  };

  const handleOptionTouchStart = () => {
    isTouch.current = true;
  };

  const handleOptionClick = (event) => {
    const index = Number(event.currentTarget.getAttribute('data-option-index'));
    selectNewValue(event, filteredOptions[index], 'selectOption');
    isTouch.current = false;
  };

  const handleTagDelete = (index) => (event) => {
    const newValue = value.slice();
    newValue.splice(index, 1);
    handleValue(event, newValue, 'removeOption', {
      option: value[index],
    });
  };

  const handlePopupIndicator = (event) => {
    if (open) {
      handleClose(event, 'toggleInput');
    } else {
      handleOpen(event);
    }
  }; // Prevent input blur when interacting with the combobox

  const handleMouseDown = (event) => {
    if (event.target.getAttribute('id') !== id) {
      event.preventDefault();
    }
  }; // Focus the input when interacting with the combobox

  const handleClick = () => {
    inputRef.current.focus();

    if (
      selectOnFocus &&
      firstFocus.current &&
      inputRef.current.selectionEnd - inputRef.current.selectionStart === 0
    ) {
      inputRef.current.select();
    }

    firstFocus.current = false;
  };

  const handleInputMouseDown = (event) => {
    if (inputValue === '' || !open) {
      handlePopupIndicator(event);
    }
  };

  let dirty = freeSolo && inputValue.length > 0;
  dirty = dirty || (multiple ? value.length > 0 : value !== null);
  let groupedOptions = filteredOptions;

  if (groupBy) {
    groupedOptions = filteredOptions.reduce((acc, option, index) => {
      const group = groupBy(option);

      if (acc.length > 0 && acc[acc.length - 1].group === group) {
        acc[acc.length - 1].options.push(option);
      } else {
        acc.push({
          key: index,
          index,
          group,
          options: [option],
        });
      }

      return acc;
    }, []);
  }

  if (disabledProp && focused) {
    handleBlur();
  }

  return {
    getRootProps: (other = {}) =>
      _extends(
        {
          'aria-owns': listboxAvailable ? `${id}-listbox` : null,
        },
        other,
        {
          onKeyDown: handleKeyDown(other),
          onMouseDown: handleMouseDown,
          onClick: handleClick,
        }
      ),
    getInputLabelProps: () => ({
      id: `${id}-label`,
      htmlFor: id,
    }),
    getInputProps: () => ({
      id,
      value: inputValue,
      onBlur: handleBlur,
      onFocus: handleFocus,
      onChange: handleInputChange,
      onMouseDown: handleInputMouseDown,
      // if open then this is handled imperativeley so don't let react override
      // only have an opinion about this when closed
      'aria-activedescendant': popupOpen ? '' : null,
      'aria-autocomplete': autoComplete ? 'both' : 'list',
      'aria-controls': listboxAvailable ? `${id}-listbox` : undefined,
      'aria-expanded': listboxAvailable,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: 'off',
      ref: inputRef,
      autoCapitalize: 'none',
      spellCheck: 'false',
      role: 'combobox',
    }),
    getClearProps: () => ({
      tabIndex: -1,
      onClick: handleClear,
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      onClick: handlePopupIndicator,
    }),
    getTagProps: ({ index }) =>
      _extends(
        {
          key: index,
          'data-tag-index': index,
          tabIndex: -1,
        },
        !readOnly && {
          onDelete: handleTagDelete(index),
        }
      ),
    getListboxProps: () => ({
      role: 'listbox',
      id: `${id}-listbox`,
      'aria-labelledby': `${id}-label`,
      ref: handleListboxRef,
      onMouseDown: (event) => {
        // Prevent blur
        event.preventDefault();
      },
    }),
    getOptionProps: ({ index, option }) => {
      const selected = (multiple ? value : [value]).some(
        (value2) => value2 != null && isOptionEqualToValue(option, value2)
      );
      const disabled = getOptionDisabled ? getOptionDisabled(option) : false;
      return {
        key: getOptionLabel(option),
        tabIndex: -1,
        role: 'option',
        id: `${id}-option-${index}`,
        onMouseOver: handleOptionMouseOver,
        onClick: handleOptionClick,
        onTouchStart: handleOptionTouchStart,
        'data-option-index': index,
        'aria-disabled': disabled,
        'aria-selected': selected,
      };
    },
    id,
    inputValue,
    value,
    dirty,
    popupOpen,
    focused: focused || focusedTag !== -1,
    anchorEl,
    setAnchorEl,
    focusedTag,
    groupedOptions,
  };
}

function useBadge(parameters) {
  const {
    badgeContent: badgeContentProp,
    invisible: invisibleProp = false,
    max: maxProp = 99,
    showZero = false,
  } = parameters;
  const prevProps = usePreviousProps({
    badgeContent: badgeContentProp,
    max: maxProp,
  });
  let invisible = invisibleProp;

  if (invisibleProp === false && badgeContentProp === 0 && !showZero) {
    invisible = true;
  }

  const { badgeContent, max = maxProp } = invisible ? prevProps : parameters;
  const displayValue =
    badgeContent && Number(badgeContent) > max ? `${max}+` : badgeContent;
  return {
    badgeContent,
    invisible,
    max,
    displayValue,
  };
}

function getBadgeUnstyledUtilityClass(slot) {
  return generateUtilityClass('BaseBadge', slot);
}
const badgeUnstyledClasses = generateUtilityClasses('BaseBadge', [
  'root',
  'badge',
  'invisible',
]);

const _excluded$7 = [
  'badgeContent',
  'component',
  'children',
  'components',
  'componentsProps',
  'invisible',
  'max',
  'showZero',
];

const useUtilityClasses$1 = (ownerState) => {
  const { invisible } = ownerState;
  const slots = {
    root: ['root'],
    badge: ['badge', invisible && 'invisible'],
  };
  return composeClasses(slots, getBadgeUnstyledUtilityClass, undefined);
};
/**
 *
 * Demos:
 *
 * - [Badge](https://mui.com/base/react-badge/)
 *
 * API:
 *
 * - [BadgeUnstyled API](https://mui.com/base/api/badge-unstyled/)
 */

const BadgeUnstyled = /*#__PURE__*/ react.forwardRef(function BadgeUnstyled(
  props,
  ref
) {
  const {
      component,
      children,
      components = {},
      componentsProps = {},
      max: maxProp = 99,
      showZero = false,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$7);

  const { badgeContent, max, displayValue, invisible } = useBadge(
    _extends({}, props, {
      max: maxProp,
    })
  );

  const ownerState = _extends({}, props, {
    badgeContent,
    invisible,
    max,
    showZero,
  });

  const classes = useUtilityClasses$1(ownerState);
  const Root = component || components.Root || 'span';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
    },
    ownerState,
    className: classes.root,
  });
  const Badge = components.Badge || 'span';
  const badgeProps = useSlotProps({
    elementType: Badge,
    externalSlotProps: componentsProps.badge,
    ownerState,
    className: classes.badge,
  });
  return /*#__PURE__*/ jsxRuntime.jsxs(
    Root,
    _extends({}, rootProps, {
      children: [
        children,
        /*#__PURE__*/ jsxRuntime.jsx(
          Badge,
          _extends({}, badgeProps, {
            children: displayValue,
          })
        ),
      ],
    })
  );
});

function getButtonUnstyledUtilityClass(slot) {
  return generateUtilityClass('ButtonUnstyled', slot);
}
const buttonUnstyledClasses = generateUtilityClasses('ButtonUnstyled', [
  'root',
  'active',
  'disabled',
  'focusVisible',
]);

function useButton(parameters) {
  const {
    disabled = false,
    focusableWhenDisabled,
    href,
    ref,
    tabIndex,
    to,
    type,
  } = parameters;
  const buttonRef = react.useRef();
  const [active, setActive] = react.useState(false);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(false);

  if (disabled && !focusableWhenDisabled && focusVisible) {
    setFocusVisible(false);
  }

  react.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const [hostElementName, setHostElementName] = react.useState('');

  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;

    if (focusVisible) {
      event.preventDefault();
    }

    (_otherHandlers$onMous = otherHandlers.onMouseLeave) == null
      ? void 0
      : _otherHandlers$onMous.call(otherHandlers, event);
  };

  const createHandleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;

    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null
      ? void 0
      : _otherHandlers$onBlur.call(otherHandlers, event);
  };

  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu2;

    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      var _otherHandlers$onFocu;

      setFocusVisible(true);
      (_otherHandlers$onFocu = otherHandlers.onFocusVisible) == null
        ? void 0
        : _otherHandlers$onFocu.call(otherHandlers, event);
    }

    (_otherHandlers$onFocu2 = otherHandlers.onFocus) == null
      ? void 0
      : _otherHandlers$onFocu2.call(otherHandlers, event);
  };

  const isNativeButton = () => {
    const button = buttonRef.current;
    return (
      hostElementName === 'BUTTON' ||
      (hostElementName === 'INPUT' &&
        ['button', 'submit', 'reset'].includes(
          button == null ? void 0 : button.type
        )) ||
      (hostElementName === 'A' && (button == null ? void 0 : button.href))
    );
  };

  const createHandleClick = (otherHandlers) => (event) => {
    if (!disabled) {
      var _otherHandlers$onClic;

      (_otherHandlers$onClic = otherHandlers.onClick) == null
        ? void 0
        : _otherHandlers$onClic.call(otherHandlers, event);
    }
  };

  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;

    if (event.target === event.currentTarget && !disabled) {
      setActive(true);
    }

    (_otherHandlers$onMous2 = otherHandlers.onMouseDown) == null
      ? void 0
      : _otherHandlers$onMous2.call(otherHandlers, event);
  };

  const createHandleMouseUp = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;

    if (event.target === event.currentTarget) {
      setActive(false);
    }

    (_otherHandlers$onMous3 = otherHandlers.onMouseUp) == null
      ? void 0
      : _otherHandlers$onMous3.call(otherHandlers, event);
  };

  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;

    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null
      ? void 0
      : _otherHandlers$onKeyD.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (
      event.target === event.currentTarget &&
      !isNativeButton() &&
      event.key === ' '
    ) {
      event.preventDefault();
    }

    if (
      event.target === event.currentTarget &&
      event.key === ' ' &&
      !disabled
    ) {
      setActive(true);
    } // Keyboard accessibility for non interactive elements

    if (
      event.target === event.currentTarget &&
      !isNativeButton() &&
      event.key === 'Enter' &&
      !disabled
    ) {
      var _otherHandlers$onClic2;

      (_otherHandlers$onClic2 = otherHandlers.onClick) == null
        ? void 0
        : _otherHandlers$onClic2.call(otherHandlers, event);
      event.preventDefault();
    }
  };

  const createHandleKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;

    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/s/button-keyup-preventdefault-dn7f0
    if (event.target === event.currentTarget) {
      setActive(false);
    }

    (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null
      ? void 0
      : _otherHandlers$onKeyU.call(otherHandlers, event); // Keyboard accessibility for non interactive elements

    if (
      event.target === event.currentTarget &&
      !isNativeButton() &&
      !disabled &&
      event.key === ' ' &&
      !event.defaultPrevented
    ) {
      var _otherHandlers$onClic3;

      (_otherHandlers$onClic3 = otherHandlers.onClick) == null
        ? void 0
        : _otherHandlers$onClic3.call(otherHandlers, event);
    }
  };

  const handleOwnRef = useForkRef(focusVisibleRef, buttonRef);
  const handleRef = useForkRef(ref, handleOwnRef);

  const updateRef = (instance) => {
    var _instance$tagName;

    setHostElementName(
      (_instance$tagName = instance == null ? void 0 : instance.tagName) != null
        ? _instance$tagName
        : ''
    );
    setRef(handleRef, instance);
  };

  const buttonProps = {};

  if (hostElementName === 'BUTTON') {
    buttonProps.type = type != null ? type : 'button';

    if (focusableWhenDisabled) {
      buttonProps['aria-disabled'] = disabled;
    } else {
      buttonProps.disabled = disabled;
    }
  } else if (hostElementName !== '') {
    if (!href && !to) {
      buttonProps.role = 'button';
      buttonProps.tabIndex = tabIndex != null ? tabIndex : 0;
    }

    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
      buttonProps.tabIndex = focusableWhenDisabled
        ? tabIndex != null
          ? tabIndex
          : 0
        : -1;
    }
  }

  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);

    const externalEventHandlers = _extends(
      {},
      propsEventHandlers,
      otherHandlers
    ); // onFocusVisible can be present on the props, but since it's not a valid React event handler,
    // it must not be forwarded to the inner component.

    delete externalEventHandlers.onFocusVisible;
    return _extends(
      {
        type,
      },
      externalEventHandlers,
      buttonProps,
      {
        onBlur: createHandleBlur(externalEventHandlers),
        onClick: createHandleClick(externalEventHandlers),
        onFocus: createHandleFocus(externalEventHandlers),
        onKeyDown: createHandleKeyDown(externalEventHandlers),
        onKeyUp: createHandleKeyUp(externalEventHandlers),
        onMouseDown: createHandleMouseDown(externalEventHandlers),
        onMouseLeave: createHandleMouseLeave(externalEventHandlers),
        onMouseUp: createHandleMouseUp(externalEventHandlers),
        ref: updateRef,
      }
    );
  };

  return {
    getRootProps,
    focusVisible,
    setFocusVisible,
    disabled,
    active,
  };
}

const _excluded$8 = [
  'action',
  'children',
  'component',
  'components',
  'componentsProps',
  'disabled',
  'focusableWhenDisabled',
  'onBlur',
  'onClick',
  'onFocus',
  'onFocusVisible',
  'onKeyDown',
  'onKeyUp',
  'onMouseLeave',
];

const useUtilityClasses$2 = (ownerState) => {
  const { active, disabled, focusVisible } = ownerState;
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      focusVisible && 'focusVisible',
      active && 'active',
    ],
  };
  return composeClasses(slots, getButtonUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled buttons.
 *
 * Demos:
 *
 * - [Button](https://mui.com/base/react-button/)
 *
 * API:
 *
 * - [ButtonUnstyled API](https://mui.com/base/api/button-unstyled/)
 */

const ButtonUnstyled = /*#__PURE__*/ react.forwardRef(function ButtonUnstyled(
  props,
  forwardedRef
) {
  var _ref;

  const {
      action,
      children,
      component,
      components = {},
      componentsProps = {},
      focusableWhenDisabled = false,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$8);

  const buttonRef = react.useRef();
  const { active, focusVisible, setFocusVisible, getRootProps } = useButton(
    _extends({}, props, {
      focusableWhenDisabled,
    })
  );
  react.useImperativeHandle(
    action,
    () => ({
      focusVisible: () => {
        setFocusVisible(true);
        buttonRef.current.focus();
      },
    }),
    [setFocusVisible]
  );

  const ownerState = _extends({}, props, {
    active,
    focusableWhenDisabled,
    focusVisible,
  });

  const classes = useUtilityClasses$2(ownerState);
  const Root =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'button';
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalForwardedProps: other,
    externalSlotProps: componentsProps.root,
    additionalProps: {
      ref: forwardedRef,
    },
    ownerState,
    className: classes.root,
  });
  return /*#__PURE__*/ jsxRuntime.jsx(
    Root,
    _extends({}, rootProps, {
      children: children,
    })
  );
});

function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event, doc) {
  return (
    doc.documentElement.clientWidth < event.clientX ||
    doc.documentElement.clientHeight < event.clientY
  );
}

/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 *
 * Demos:
 *
 * - [Click away listener](https://mui.com/base/react-click-away-listener/)
 *
 * API:
 *
 * - [ClickAwayListener API](https://mui.com/base/api/click-away-listener/)
 */
function ClickAwayListener(props) {
  const {
    children,
    disableReactTree = false,
    mouseEvent = 'onClick',
    onClickAway,
    touchEvent = 'onTouchEnd',
  } = props;
  const movedRef = react.useRef(false);
  const nodeRef = react.useRef(null);
  const activatedRef = react.useRef(false);
  const syntheticEventRef = react.useRef(false);
  react.useEffect(() => {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(() => {
      activatedRef.current = true;
    }, 0);
    return () => {
      activatedRef.current = false;
    };
  }, []);
  const handleRef = useForkRef(
    // @ts-expect-error TODO upstream fix
    children.ref,
    nodeRef
  ); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  const handleClickAway = useEventCallback((event) => {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current); // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (
      !activatedRef.current ||
      !nodeRef.current ||
      ('clientX' in event && clickedRootScrollbar(event, doc))
    ) {
      return;
    } // Do not act if user performed touchmove

    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    let insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM =
        !doc.documentElement.contains(
          // @ts-expect-error returns `false` as intended when not dispatched from a Node
          event.target
        ) ||
        nodeRef.current.contains(
          // @ts-expect-error returns `false` as intended when not dispatched from a Node
          event.target
        );
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  const createHandleSynthetic = (handlerName) => (event) => {
    syntheticEventRef.current = true;
    const childrenPropsHandler = children.props[handlerName];

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const childrenProps = {
    ref: handleRef,
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  react.useEffect(() => {
    if (touchEvent !== false) {
      const mappedTouchEvent = mapEventPropToEvent(touchEvent);
      const doc = ownerDocument(nodeRef.current);

      const handleTouchMove = () => {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  react.useEffect(() => {
    if (mouseEvent !== false) {
      const mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return () => {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/ jsxRuntime.jsx(react.Fragment, {
    children: /*#__PURE__*/ react.cloneElement(children, childrenProps),
  });
}

/**
 * @ignore - internal component.
 */
const FormControlUnstyledContext = /*#__PURE__*/ react.createContext(undefined);

function getFormControlUnstyledUtilityClass(slot) {
  return generateUtilityClass('BaseFormControl', slot);
}
const formControlUnstyledClasses = generateUtilityClasses('BaseFormControl', [
  'root',
  'disabled',
  'error',
  'filled',
  'focused',
  'required',
]);

const _excluded$9 = [
  'defaultValue',
  'children',
  'component',
  'components',
  'componentsProps',
  'disabled',
  'error',
  'onChange',
  'required',
  'value',
];

function hasValue(value) {
  return (
    value != null &&
    !(Array.isArray(value) && value.length === 0) &&
    value !== ''
  );
}

function useUtilityClasses$3(ownerState) {
  const { disabled, error, filled, focused, required } = ownerState;
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      focused && 'focused',
      error && 'error',
      filled && 'filled',
      required && 'required',
    ],
  };
  return composeClasses(slots, getFormControlUnstyledUtilityClass, {});
}
/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 * *   FormLabel
 * *   FormHelperText
 * *   Input
 * *   InputLabel
 *
 * You can find one composition example below and more going to [the demos](https://mui.com/material-ui/react-text-field/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `Input` can be used within a FormControl because it create visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 *
 * Demos:
 *
 * - [Form control](https://mui.com/base/react-form-control/)
 *
 * API:
 *
 * - [FormControlUnstyled API](https://mui.com/base/api/form-control-unstyled/)
 */

const FormControlUnstyled = /*#__PURE__*/ react.forwardRef(
  function FormControlUnstyled(props, ref) {
    var _ref;

    const {
        defaultValue,
        children,
        component,
        components = {},
        componentsProps = {},
        disabled = false,
        error = false,
        onChange,
        required = false,
        value: incomingValue,
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$9);

    const [value, setValue] = useControlled({
      controlled: incomingValue,
      default: defaultValue,
      name: 'FormControl',
      state: 'value',
    });
    const filled = hasValue(value);
    const [focused, setFocused] = react.useState(false);

    if (disabled && focused) {
      setFocused(false);
    }

    const ownerState = _extends({}, props, {
      disabled,
      error,
      filled,
      focused,
      required,
    });

    const handleChange = (event) => {
      setValue(event.target.value);
      onChange == null ? void 0 : onChange(event);
    };

    const childContext = {
      disabled,
      error,
      filled,
      focused,
      onBlur: () => {
        setFocused(false);
      },
      onChange: handleChange,
      onFocus: () => {
        setFocused(true);
      },
      required,
      value: value != null ? value : '',
    };
    const classes = useUtilityClasses$3(ownerState);
    const Root =
      (_ref = component != null ? component : components.Root) != null
        ? _ref
        : 'div';
    const rootProps = useSlotProps({
      elementType: Root,
      externalSlotProps: componentsProps.root,
      externalForwardedProps: other,
      additionalProps: {
        ref,
      },
      ownerState,
      className: classes.root,
    });

    const renderChildren = () => {
      if (typeof children === 'function') {
        return children(childContext);
      }

      return children;
    };

    return /*#__PURE__*/ jsxRuntime.jsx(FormControlUnstyledContext.Provider, {
      value: childContext,
      children: /*#__PURE__*/ jsxRuntime.jsx(
        Root,
        _extends({}, rootProps, {
          children: renderChildren(),
        })
      ),
    });
  }
);

function useFormControlUnstyledContext() {
  return react.useContext(FormControlUnstyledContext);
}

function getInputUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiInput', slot);
}
const inputBaseClasses = generateUtilityClasses('MuiInput', [
  'root',
  'formControl',
  'focused',
  'disabled',
  'error',
  'multiline',
  'input',
  'inputMultiline',
  'inputTypeSearch',
  'adornedStart',
  'adornedEnd',
]);

function useInput(parameters) {
  const {
    defaultValue: defaultValueProp,
    disabled: disabledProp = false,
    error: errorProp = false,
    onBlur,
    onChange,
    onFocus,
    required: requiredProp = false,
    value: valueProp,
  } = parameters;
  const formControlContext = useFormControlUnstyledContext();
  let defaultValue;
  let disabled;
  let error;
  let required;
  let value;

  if (formControlContext) {
    var _formControlContext$d, _formControlContext$e, _formControlContext$r;

    defaultValue = undefined;
    disabled =
      (_formControlContext$d = formControlContext.disabled) != null
        ? _formControlContext$d
        : false;
    error =
      (_formControlContext$e = formControlContext.error) != null
        ? _formControlContext$e
        : false;
    required =
      (_formControlContext$r = formControlContext.required) != null
        ? _formControlContext$r
        : false;
    value = formControlContext.value;
  } else {
    defaultValue = defaultValueProp;
    disabled = disabledProp;
    error = errorProp;
    required = requiredProp;
    value = valueProp;
  }

  const { current: isControlled } = react.useRef(value != null);
  const handleInputRefWarning = react.useCallback((instance) => {}, []);
  const inputRef = react.useRef(null);
  const handleInputRef = useForkRef(inputRef, handleInputRefWarning);
  const [focused, setFocused] = react.useState(false); // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.

  react.useEffect(() => {
    if (!formControlContext && disabled && focused) {
      setFocused(false); // @ts-ignore

      onBlur == null ? void 0 : onBlur();
    }
  }, [formControlContext, disabled, focused, onBlur]);

  const handleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;

    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (formControlContext != null && formControlContext.disabled) {
      event.stopPropagation();
      return;
    }

    (_otherHandlers$onFocu = otherHandlers.onFocus) == null
      ? void 0
      : _otherHandlers$onFocu.call(otherHandlers, event);

    if (formControlContext && formControlContext.onFocus) {
      var _formControlContext$o;

      formControlContext == null
        ? void 0
        : (_formControlContext$o = formControlContext.onFocus) == null
        ? void 0
        : _formControlContext$o.call(formControlContext);
    } else {
      setFocused(true);
    }
  };

  const handleBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null
      ? void 0
      : _otherHandlers$onBlur.call(otherHandlers, event);

    if (formControlContext && formControlContext.onBlur) {
      formControlContext.onBlur();
    } else {
      setFocused(false);
    }
  };

  const handleChange =
    (otherHandlers) =>
    (event, ...args) => {
      var _formControlContext$o2, _otherHandlers$onChan;

      if (!isControlled) {
        const element = event.target || inputRef.current;

        if (element == null) {
          throw new Error(formatMuiErrorMessage(17));
        }
      }

      formControlContext == null
        ? void 0
        : (_formControlContext$o2 = formControlContext.onChange) == null
        ? void 0
        : _formControlContext$o2.call(formControlContext, event); // @ts-ignore

      (_otherHandlers$onChan = otherHandlers.onChange) == null
        ? void 0
        : _otherHandlers$onChan.call(otherHandlers, event, ...args);
    };

  const handleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;

    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }

    (_otherHandlers$onClic = otherHandlers.onClick) == null
      ? void 0
      : _otherHandlers$onClic.call(otherHandlers, event);
  };

  const getRootProps = (externalProps = {}) => {
    // onBlur, onChange and onFocus are forwarded to the input slot.
    const propsEventHandlers = extractEventHandlers(parameters, [
      'onBlur',
      'onChange',
      'onFocus',
    ]);

    const externalEventHandlers = _extends(
      {},
      propsEventHandlers,
      extractEventHandlers(externalProps)
    );

    return _extends({}, externalProps, externalEventHandlers, {
      onClick: handleClick(externalEventHandlers),
    });
  };

  const getInputProps = (externalProps = {}) => {
    const propsEventHandlers = {
      onBlur,
      onChange,
      onFocus,
    };

    const externalEventHandlers = _extends(
      {},
      propsEventHandlers,
      extractEventHandlers(externalProps)
    );

    const mergedEventHandlers = _extends(
      {},
      externalProps,
      externalEventHandlers,
      {
        onBlur: handleBlur(externalEventHandlers),
        onChange: handleChange(externalEventHandlers),
        onFocus: handleFocus(externalEventHandlers),
      }
    );

    return _extends({}, mergedEventHandlers, {
      'aria-invalid': error || undefined,
      defaultValue: defaultValue,
      ref: handleInputRef,
      value: value,
      required,
      disabled,
    });
  };

  return {
    disabled,
    error,
    focused,
    formControlContext,
    getInputProps,
    getRootProps,
    required,
    value,
  };
}

const _excluded$a = [
    'aria-describedby',
    'aria-label',
    'aria-labelledby',
    'autoComplete',
    'autoFocus',
    'className',
    'component',
    'components',
    'componentsProps',
    'defaultValue',
    'disabled',
    'endAdornment',
    'error',
    'id',
    'maxRows',
    'minRows',
    'multiline',
    'name',
    'onClick',
    'onChange',
    'onKeyDown',
    'onKeyUp',
    'onFocus',
    'onBlur',
    'placeholder',
    'readOnly',
    'required',
    'rows',
    'type',
    'startAdornment',
    'value',
  ],
  _excluded2$1 = ['ownerState'];
const InputUnstyled = /*#__PURE__*/ react.forwardRef(function InputUnstyled(
  props,
  forwardedRef
) {
  var _ref, _components$Input;

  const {
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      'aria-labelledby': ariaLabelledby,
      autoComplete,
      autoFocus,
      className,
      component,
      components = {},
      componentsProps = {},
      defaultValue,
      disabled,
      endAdornment,
      error,
      id,
      maxRows,
      minRows,
      multiline = false,
      name,
      onClick,
      onChange,
      onKeyDown,
      onKeyUp,
      onFocus,
      onBlur,
      placeholder,
      readOnly,
      required,
      rows,
      type = 'text',
      startAdornment,
      value,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$a);

  const {
    getRootProps,
    getInputProps,
    focused,
    formControlContext,
    error: errorState,
    disabled: disabledState,
  } = useInput({
    disabled,
    defaultValue,
    error,
    onBlur,
    onClick,
    onChange,
    onFocus,
    required,
    value,
  });

  const ownerState = _extends({}, props, {
    disabled: disabledState,
    error: errorState,
    focused,
    formControlContext,
    multiline,
    type,
  });

  const rootStateClasses = {
    [inputBaseClasses.disabled]: disabledState,
    [inputBaseClasses.error]: errorState,
    [inputBaseClasses.focused]: focused,
    [inputBaseClasses.formControl]: Boolean(formControlContext),
    [inputBaseClasses.multiline]: multiline,
    [inputBaseClasses.adornedStart]: Boolean(startAdornment),
    [inputBaseClasses.adornedEnd]: Boolean(endAdornment),
  };
  const inputStateClasses = {
    [inputBaseClasses.disabled]: disabledState,
    [inputBaseClasses.multiline]: multiline,
  };
  const propsToForward = {
    'aria-describedby': ariaDescribedby,
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledby,
    autoComplete,
    autoFocus,
    id,
    onKeyDown,
    onKeyUp,
    name,
    placeholder,
    readOnly,
    type,
  };
  const Root =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'div';
  const rootProps = useSlotProps({
    elementType: Root,
    getSlotProps: getRootProps,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: forwardedRef,
    },
    ownerState,
    className: [inputBaseClasses.root, rootStateClasses, className],
  });
  let Input =
    (_components$Input = components.Input) != null
      ? _components$Input
      : 'input';
  let inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: (otherHandlers) =>
      getInputProps(_extends({}, otherHandlers, propsToForward)),
    externalSlotProps: componentsProps.input,
    ownerState,
    className: [inputBaseClasses.input, inputStateClasses],
  });

  if (multiline) {
    var _components$Textarea, _components$Textarea2;

    const hasHostTextarea = isHostComponent(
      (_components$Textarea = components.Textarea) != null
        ? _components$Textarea
        : 'textarea'
    );

    const inputPropsWithoutOwnerState = _objectWithoutPropertiesLoose(
      inputProps,
      _excluded2$1
    );

    inputProps = _extends(
      {},
      !hasHostTextarea && {
        minRows: rows || minRows,
        maxRows: rows || maxRows,
      },
      hasHostTextarea ? inputPropsWithoutOwnerState : inputProps,
      {
        type: undefined,
      }
    );
    Input =
      (_components$Textarea2 = components.Textarea) != null
        ? _components$Textarea2
        : 'textarea';
  }

  return /*#__PURE__*/ jsxRuntime.jsxs(
    Root,
    _extends({}, rootProps, {
      children: [
        startAdornment,
        /*#__PURE__*/ jsxRuntime.jsx(Input, _extends({}, inputProps)),
        endAdornment,
      ],
    })
  );
});

var ActionTypes; // split declaration and export due to https://github.com/codesandbox/codesandbox-client/issues/6435

(function (ActionTypes) {
  ActionTypes['blur'] = 'blur';
  ActionTypes['focus'] = 'focus';
  ActionTypes['keyDown'] = 'keyDown';
  ActionTypes['optionClick'] = 'optionClick';
  ActionTypes['optionHover'] = 'optionHover';
  ActionTypes['optionsChange'] = 'optionsChange';
  ActionTypes['setValue'] = 'setValue';
  ActionTypes['setHighlight'] = 'setHighlight';
  ActionTypes['textNavigation'] = 'textNagivation';
})(ActionTypes || (ActionTypes = {}));

const pageSize$1 = 5;

function findValidOptionToHighlight(
  index,
  lookupDirection,
  options,
  focusDisabled,
  isOptionDisabled,
  wrapAround
) {
  if (options.length === 0 || options.every((o, i) => isOptionDisabled(o, i))) {
    return -1;
  }

  let nextFocus = index;

  for (;;) {
    // No valid options found
    if (
      (!wrapAround &&
        lookupDirection === 'next' &&
        nextFocus === options.length) ||
      (!wrapAround && lookupDirection === 'previous' && nextFocus === -1)
    ) {
      return -1;
    }

    const nextFocusDisabled = focusDisabled
      ? false
      : isOptionDisabled(options[nextFocus], nextFocus);

    if (nextFocusDisabled) {
      nextFocus += lookupDirection === 'next' ? 1 : -1;

      if (wrapAround) {
        nextFocus = (nextFocus + options.length) % options.length;
      }
    } else {
      return nextFocus;
    }
  }
}

function getNewHighlightedOption(
  options,
  previouslyHighlightedOption,
  diff,
  lookupDirection,
  highlightDisabled,
  isOptionDisabled,
  wrapAround,
  optionComparer
) {
  var _options$nextIndex;

  const maxIndex = options.length - 1;
  let nextIndexCandidate;
  const previouslyHighlightedIndex =
    previouslyHighlightedOption == null
      ? -1
      : options.findIndex((option) =>
          optionComparer(option, previouslyHighlightedOption)
        );

  if (diff === 'reset') {
    return null;
  }

  if (diff === 'start') {
    nextIndexCandidate = 0;
  } else if (diff === 'end') {
    nextIndexCandidate = maxIndex;
  } else {
    const newIndex = previouslyHighlightedIndex + diff;

    if (newIndex < 0) {
      if (
        (!wrapAround && previouslyHighlightedIndex !== -1) ||
        Math.abs(diff) > 1
      ) {
        nextIndexCandidate = 0;
      } else {
        nextIndexCandidate = maxIndex;
      }
    } else if (newIndex > maxIndex) {
      if (!wrapAround || Math.abs(diff) > 1) {
        nextIndexCandidate = maxIndex;
      } else {
        nextIndexCandidate = 0;
      }
    } else {
      nextIndexCandidate = newIndex;
    }
  }

  const nextIndex = findValidOptionToHighlight(
    nextIndexCandidate,
    lookupDirection,
    options,
    highlightDisabled,
    isOptionDisabled,
    wrapAround
  );
  return (_options$nextIndex = options[nextIndex]) != null
    ? _options$nextIndex
    : null;
}

function handleOptionSelection(option, state, props) {
  const {
    multiple,
    optionComparer = (o, v) => o === v,
    isOptionDisabled = () => false,
  } = props;
  const { selectedValue } = state;
  const optionIndex = props.options.indexOf(option);

  if (isOptionDisabled(option, optionIndex)) {
    return state;
  }

  if (multiple) {
    var _ref, _ref2;

    const selectedValues = (_ref = selectedValue) != null ? _ref : []; // if the option is already selected, remove it from the selection, otherwise add it

    const newSelectedValues = selectedValues.some((sv) =>
      optionComparer(sv, option)
    )
      ? selectedValue.filter((v) => !optionComparer(v, option))
      : [...((_ref2 = selectedValue) != null ? _ref2 : []), option];
    return {
      selectedValue: newSelectedValues,
      highlightedValue: option,
    };
  }

  if (selectedValue != null && optionComparer(option, selectedValue)) {
    return state;
  }

  return {
    selectedValue: option,
    highlightedValue: option,
  };
}

function handleKeyDown$1(event, state, props) {
  const {
    options,
    isOptionDisabled,
    disableListWrap,
    disabledItemsFocusable,
    optionComparer,
  } = props;

  const moveHighlight = (diff, direction, wrapAround) => {
    return getNewHighlightedOption(
      options,
      state.highlightedValue,
      diff,
      direction,
      disabledItemsFocusable != null ? disabledItemsFocusable : false,
      isOptionDisabled != null ? isOptionDisabled : () => false,
      wrapAround,
      optionComparer
    );
  };

  switch (event.key) {
    case 'Home':
      return _extends({}, state, {
        highlightedValue: moveHighlight('start', 'next', false),
      });

    case 'End':
      return _extends({}, state, {
        highlightedValue: moveHighlight('end', 'previous', false),
      });

    case 'PageUp':
      return _extends({}, state, {
        highlightedValue: moveHighlight(-pageSize$1, 'previous', false),
      });

    case 'PageDown':
      return _extends({}, state, {
        highlightedValue: moveHighlight(pageSize$1, 'next', false),
      });

    case 'ArrowUp':
      // TODO: extend current selection with Shift modifier
      return _extends({}, state, {
        highlightedValue: moveHighlight(
          -1,
          'previous',
          !(disableListWrap != null ? disableListWrap : false)
        ),
      });

    case 'ArrowDown':
      // TODO: extend current selection with Shift modifier
      return _extends({}, state, {
        highlightedValue: moveHighlight(
          1,
          'next',
          !(disableListWrap != null ? disableListWrap : false)
        ),
      });

    case 'Enter':
    case ' ':
      if (state.highlightedValue === null) {
        return state;
      }

      return handleOptionSelection(state.highlightedValue, state, props);
  }

  return state;
}

function handleBlur(state) {
  return _extends({}, state, {
    highlightedValue: null,
  });
}

const textCriteriaMatches = (nextFocus, searchString, stringifyOption) => {
  var _stringifyOption;

  const text =
    (_stringifyOption = stringifyOption(nextFocus)) == null
      ? void 0
      : _stringifyOption.trim().toLowerCase();

  if (!text || text.length === 0) {
    // Make option not navigable if stringification fails or results in empty string.
    return false;
  }

  return text.indexOf(searchString) === 0;
};

function handleTextNavigation(state, searchString, props) {
  const {
    options,
    isOptionDisabled,
    disableListWrap,
    disabledItemsFocusable,
    optionComparer,
    optionStringifier,
  } = props;

  const moveHighlight = (previouslyHighlightedOption) => {
    return getNewHighlightedOption(
      options,
      previouslyHighlightedOption,
      1,
      'next',
      disabledItemsFocusable != null ? disabledItemsFocusable : false,
      isOptionDisabled != null ? isOptionDisabled : () => false,
      !(disableListWrap != null ? disableListWrap : false),
      optionComparer
    );
  };

  const startWithCurrentOption = searchString.length > 1;
  let nextOption = startWithCurrentOption
    ? state.highlightedValue
    : moveHighlight(state.highlightedValue); // use `for` instead of `while` prevent infinite loop

  for (let index = 0; index < options.length; index += 1) {
    // Return un-mutated state if looped back to the currently highlighted value
    if (
      !nextOption ||
      (!startWithCurrentOption && state.highlightedValue === nextOption)
    ) {
      return state;
    }

    if (
      textCriteriaMatches(nextOption, searchString, optionStringifier) &&
      (!isOptionDisabled(nextOption, options.indexOf(nextOption)) ||
        disabledItemsFocusable)
    ) {
      // The nextOption is the element to be highlighted
      return _extends({}, state, {
        highlightedValue: nextOption,
      });
    } // Move to the next element.

    nextOption = moveHighlight(nextOption);
  } // No option match text search criteria

  return state;
}

function handleOptionsChange(options, previousOptions, state, props) {
  var _options$find, _options$find2;

  const { multiple, optionComparer } = props;
  const newHighlightedOption =
    state.highlightedValue == null
      ? null
      : (_options$find = options.find((option) =>
          optionComparer(option, state.highlightedValue)
        )) != null
      ? _options$find
      : null;

  if (multiple) {
    var _ref3;

    // exclude selected values that are no longer in the options
    const selectedValues = (_ref3 = state.selectedValue) != null ? _ref3 : [];
    const newSelectedValues = selectedValues.filter((selectedValue) =>
      options.some((option) => optionComparer(option, selectedValue))
    );
    return {
      highlightedValue: newHighlightedOption,
      selectedValue: newSelectedValues,
    };
  }

  const newSelectedValue =
    (_options$find2 = options.find((option) =>
      optionComparer(option, state.selectedValue)
    )) != null
      ? _options$find2
      : null;
  return {
    highlightedValue: newHighlightedOption,
    selectedValue: newSelectedValue,
  };
}

function defaultListboxReducer(state, action) {
  const { type } = action;

  switch (type) {
    case ActionTypes.keyDown:
      return handleKeyDown$1(action.event, state, action.props);

    case ActionTypes.optionClick:
      return handleOptionSelection(action.option, state, action.props);

    case ActionTypes.blur:
      return handleBlur(state);

    case ActionTypes.setValue:
      return _extends({}, state, {
        selectedValue: action.value,
      });

    case ActionTypes.setHighlight:
      return _extends({}, state, {
        highlightedValue: action.highlight,
      });

    case ActionTypes.textNavigation:
      return handleTextNavigation(state, action.searchString, action.props);

    case ActionTypes.optionsChange:
      return handleOptionsChange(
        action.options,
        action.previousOptions,
        state,
        action.props
      );

    default:
      return state;
  }
}

/**
 * Triggers change event handlers when reducer returns changed state.
 */

function useReducerReturnValueHandler(
  state,
  value,
  options,
  optionComparer,
  setValueState,
  onValueChange,
  onHighlightChange
) {
  const valueRef = react.useRef(value);
  valueRef.current = value;
  const onValueChangeRef = react.useRef(onValueChange);
  react.useEffect(() => {
    onValueChangeRef.current = onValueChange;
  }, [onValueChange]);
  const onHighlightChangeRef = react.useRef(onHighlightChange);
  react.useEffect(() => {
    onHighlightChangeRef.current = onHighlightChange;
  }, [onHighlightChange]);
  react.useEffect(() => {
    if (Array.isArray(state.selectedValue)) {
      if (areArraysEqual(state.selectedValue, valueRef.current)) {
        return;
      }
    } else if (
      (state.selectedValue == null && valueRef.current == null) ||
      (state.selectedValue != null &&
        valueRef.current != null &&
        optionComparer.current(state.selectedValue, valueRef.current))
    ) {
      return;
    }

    setValueState(state.selectedValue);

    if (state.selectedValue != null) {
      var _onValueChangeRef$cur;

      // @ts-ignore We know that selectedValue has the correct type depending on `selectMultiple` prop.
      (_onValueChangeRef$cur = onValueChangeRef.current) == null
        ? void 0
        : _onValueChangeRef$cur.call(onValueChangeRef, state.selectedValue);
    }
  }, [state.selectedValue, setValueState, optionComparer]);
  react.useEffect(() => {
    var _onHighlightChangeRef;

    // Fire the highlightChange event when reducer returns changed `highlightedIndex`.
    (_onHighlightChangeRef = onHighlightChangeRef.current) == null
      ? void 0
      : _onHighlightChangeRef.call(
          onHighlightChangeRef,
          state.highlightedValue
        );
  }, [state.highlightedValue]);
}

function useControllableReducer(internalReducer, externalReducer, props) {
  const {
    value: controlledValue,
    defaultValue,
    onChange: onValueChange,
    onHighlightChange,
    options,
    optionComparer,
  } = props;
  const propsRef = react.useRef(props);
  propsRef.current = props;
  const [value, setValueState] = useControlled({
    controlled: controlledValue,
    default: defaultValue,
    name: 'useListbox',
  });
  const previousValueRef = react.useRef(null);
  const [state, dispatch] = react.useReducer(
    externalReducer != null ? externalReducer : internalReducer,
    {
      highlightedValue: null,
      selectedValue: value,
    }
  );
  const optionComparerRef = react.useRef(optionComparer);
  optionComparerRef.current = optionComparer;
  react.useEffect(() => {
    // Detect external changes to the controlled `value` prop and update the state.
    if (controlledValue === undefined) {
      return;
    }

    if (
      Array.isArray(controlledValue) &&
      Array.isArray(previousValueRef.current) &&
      areArraysEqual(
        previousValueRef.current,
        controlledValue,
        optionComparerRef.current
      )
    ) {
      // `value` is an array and it did not change.
      return;
    }

    if (
      !Array.isArray(controlledValue) &&
      controlledValue != null &&
      previousValueRef.current != null &&
      optionComparerRef.current(controlledValue, previousValueRef.current)
    ) {
      // `value` is a single option and it did not change.
      return;
    }

    previousValueRef.current = controlledValue;
    dispatch({
      type: ActionTypes.setValue,
      value: controlledValue,
    });
  }, [controlledValue]);
  useReducerReturnValueHandler(
    state,
    value,
    options,
    optionComparerRef,
    setValueState,
    onValueChange,
    onHighlightChange
  );
  return [state, dispatch];
}

const TEXT_NAVIGATION_RESET_TIMEOUT = 500; // milliseconds

const defaultOptionComparer = (optionA, optionB) => optionA === optionB;

const defaultIsOptionDisabled = () => false;

const defaultOptionStringifier = (option) =>
  typeof option === 'string' ? option : String(option);

function useListbox(props) {
  var _props$optionIdGenera, _options$highlightedI;

  const {
    disabledItemsFocusable = false,
    disableListWrap = false,
    focusManagement = 'activeDescendant',
    id: idProp,
    isOptionDisabled = defaultIsOptionDisabled,
    listboxRef: externalListboxRef,
    multiple = false,
    optionComparer = defaultOptionComparer,
    optionStringifier = defaultOptionStringifier,
    options,
    stateReducer: externalReducer,
  } = props;
  const id = useId(idProp);

  function defaultIdGenerator(_, index) {
    return `${id}-option-${index}`;
  }

  const optionIdGenerator =
    (_props$optionIdGenera = props.optionIdGenerator) != null
      ? _props$optionIdGenera
      : defaultIdGenerator;

  const propsWithDefaults = _extends({}, props, {
    disabledItemsFocusable,
    disableListWrap,
    focusManagement,
    isOptionDisabled,
    multiple,
    optionComparer,
    optionStringifier,
  });

  const listboxRef = react.useRef(null);
  const handleRef = useForkRef(externalListboxRef, listboxRef);
  const textCriteriaRef = react.useRef({
    searchString: '',
    lastTime: null,
  });
  const [{ highlightedValue, selectedValue }, dispatch] =
    useControllableReducer(
      defaultListboxReducer,
      externalReducer,
      propsWithDefaults
    );
  const highlightedIndex = react.useMemo(() => {
    return highlightedValue == null
      ? -1
      : options.findIndex((option) => optionComparer(option, highlightedValue));
  }, [highlightedValue, options, optionComparer]);
  const previousOptions = react.useRef([]);
  react.useEffect(() => {
    if (areArraysEqual(previousOptions.current, options, optionComparer)) {
      return;
    }

    dispatch({
      type: ActionTypes.optionsChange,
      options,
      previousOptions: previousOptions.current,
      props: propsWithDefaults,
    });
    previousOptions.current = options; // No need to re-run this effect if props change
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, optionComparer, dispatch]);
  const setSelectedValue = react.useCallback(
    (option) => {
      dispatch({
        type: ActionTypes.setValue,
        value: option,
      });
    },
    [dispatch]
  );
  const setHighlightedValue = react.useCallback(
    (option) => {
      dispatch({
        type: ActionTypes.setHighlight,
        highlight: option,
      });
    },
    [dispatch]
  );

  const createHandleOptionClick = (option, other) => (event) => {
    var _other$onClick;

    (_other$onClick = other.onClick) == null
      ? void 0
      : _other$onClick.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    event.preventDefault();
    dispatch({
      type: ActionTypes.optionClick,
      option,
      event,
      props: propsWithDefaults,
    });
  };

  const createHandleOptionMouseOver = (option, other) => (event) => {
    var _other$onMouseOver;

    (_other$onMouseOver = other.onMouseOver) == null
      ? void 0
      : _other$onMouseOver.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    dispatch({
      type: ActionTypes.optionHover,
      option,
      event,
      props: propsWithDefaults,
    });
  };

  const createHandleKeyDown = (other) => (event) => {
    var _other$onKeyDown;

    (_other$onKeyDown = other.onKeyDown) == null
      ? void 0
      : _other$onKeyDown.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    const keysToPreventDefault = [
      ' ',
      'Enter',
      'ArrowUp',
      'ArrowDown',
      'Home',
      'End',
      'PageUp',
      'PageDown',
    ];

    if (keysToPreventDefault.includes(event.key)) {
      event.preventDefault();
    }

    dispatch({
      type: ActionTypes.keyDown,
      event,
      props: propsWithDefaults,
    }); // Handle text navigation

    if (event.key.length === 1) {
      const textCriteria = textCriteriaRef.current;
      const lowerKey = event.key.toLowerCase();
      const currentTime = performance.now();

      if (
        textCriteria.searchString.length > 0 &&
        textCriteria.lastTime &&
        currentTime - textCriteria.lastTime > TEXT_NAVIGATION_RESET_TIMEOUT
      ) {
        textCriteria.searchString = lowerKey;
      } else if (
        textCriteria.searchString.length !== 1 ||
        lowerKey !== textCriteria.searchString
      ) {
        // If there is just one character in the buffer and the key is the same, do not append
        textCriteria.searchString += lowerKey;
      }

      textCriteria.lastTime = currentTime;
      dispatch({
        type: ActionTypes.textNavigation,
        searchString: textCriteria.searchString,
        props: propsWithDefaults,
      });
    }
  };

  const createHandleBlur = (other) => (event) => {
    var _other$onBlur, _listboxRef$current;

    (_other$onBlur = other.onBlur) == null
      ? void 0
      : _other$onBlur.call(other, event);

    if (event.defaultPrevented) {
      return;
    }

    if (
      (_listboxRef$current = listboxRef.current) != null &&
      _listboxRef$current.contains(document.activeElement)
    ) {
      // focus is within the listbox
      return;
    }

    dispatch({
      type: ActionTypes.blur,
      event,
      props: propsWithDefaults,
    });
  };

  const getRootProps = (otherHandlers = {}) => {
    return _extends({}, otherHandlers, {
      'aria-activedescendant':
        focusManagement === 'activeDescendant' && highlightedValue != null
          ? optionIdGenerator(highlightedValue, highlightedIndex)
          : undefined,
      id,
      onBlur: createHandleBlur(otherHandlers),
      onKeyDown: createHandleKeyDown(otherHandlers),
      role: 'listbox',
      tabIndex: focusManagement === 'DOM' ? -1 : 0,
      ref: handleRef,
    });
  };

  const getOptionState = (option) => {
    let selected;
    const index = options.findIndex((opt) => optionComparer(opt, option));

    if (multiple) {
      var _ref;

      selected = ((_ref = selectedValue) != null ? _ref : []).some(
        (value) => value != null && optionComparer(option, value)
      );
    } else {
      selected = optionComparer(option, selectedValue);
    }

    const disabled = isOptionDisabled(option, index);
    return {
      selected,
      disabled,
      highlighted: highlightedIndex === index,
    };
  };

  const getOptionTabIndex = (optionState) => {
    if (focusManagement === 'activeDescendant') {
      return undefined;
    }

    if (!optionState.highlighted) {
      return -1;
    }

    if (optionState.disabled && !disabledItemsFocusable) {
      return -1;
    }

    return 0;
  };

  const getOptionProps = (option, otherHandlers = {}) => {
    const optionState = getOptionState(option);
    const index = options.findIndex((opt) => optionComparer(opt, option));
    return _extends({}, otherHandlers, {
      'aria-disabled': optionState.disabled || undefined,
      'aria-selected': optionState.selected,
      tabIndex: getOptionTabIndex(optionState),
      id: optionIdGenerator(option, index),
      onClick: createHandleOptionClick(option, otherHandlers),
      onMouseOver: createHandleOptionMouseOver(option, otherHandlers),
      role: 'option',
    });
  };

  react.useDebugValue({
    highlightedOption: options[highlightedIndex],
    selectedOption: selectedValue,
  });
  return {
    getRootProps,
    getOptionProps,
    getOptionState,
    highlightedOption:
      (_options$highlightedI = options[highlightedIndex]) != null
        ? _options$highlightedI
        : null,
    selectedOption: selectedValue,
    setSelectedValue,
    setHighlightedValue,
  };
}

const MenuUnstyledContext = /*#__PURE__*/ react.createContext(null);
MenuUnstyledContext.displayName = 'MenuUnstyledContext';

function getMenuUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiMenuUnstyled', slot);
}
const menuUnstyledClasses = generateUtilityClasses('MuiMenuUnstyled', [
  'root',
  'listbox',
  'expanded',
]);

function stateReducer(state, action) {
  if (
    action.type === ActionTypes.blur ||
    action.type === ActionTypes.optionHover ||
    action.type === ActionTypes.setValue
  ) {
    return state;
  }

  const newState = defaultListboxReducer(state, action);

  if (
    action.type !== ActionTypes.setHighlight &&
    newState.highlightedValue === null &&
    action.props.options.length > 0
  ) {
    return _extends({}, newState, {
      highlightedValue: action.props.options[0],
    });
  }

  return newState;
}

function useMenu(parameters = {}) {
  const {
    listboxRef: listboxRefProp,
    open = false,
    onClose,
    listboxId,
  } = parameters;
  const [menuItems, setMenuItems] = react.useState({});
  const listboxRef = react.useRef(null);
  const handleRef = useForkRef(listboxRef, listboxRefProp);
  const registerItem = react.useCallback((id, metadata) => {
    setMenuItems((previousState) => {
      const newState = _extends({}, previousState);

      newState[id] = metadata;
      return newState;
    });
  }, []);
  const unregisterItem = react.useCallback((id) => {
    setMenuItems((previousState) => {
      const newState = _extends({}, previousState);

      delete newState[id];
      return newState;
    });
  }, []);
  const {
    getOptionState,
    getOptionProps,
    getRootProps,
    highlightedOption,
    setHighlightedValue: setListboxHighlight,
  } = useListbox({
    options: Object.keys(menuItems),
    optionStringifier: (id) => {
      var _menuItems$id$ref$cur;

      return (
        menuItems[id].label ||
        ((_menuItems$id$ref$cur = menuItems[id].ref.current) == null
          ? void 0
          : _menuItems$id$ref$cur.innerText)
      );
    },
    isOptionDisabled: (id) => {
      var _menuItems$id;

      return (
        (menuItems == null
          ? void 0
          : (_menuItems$id = menuItems[id]) == null
          ? void 0
          : _menuItems$id.disabled) || false
      );
    },
    listboxRef: handleRef,
    focusManagement: 'DOM',
    id: listboxId,
    stateReducer,
    disabledItemsFocusable: true,
  });
  const highlightFirstItem = react.useCallback(() => {
    if (Object.keys(menuItems).length > 0) {
      setListboxHighlight(menuItems[Object.keys(menuItems)[0]].id);
    }
  }, [menuItems, setListboxHighlight]);
  const highlightLastItem = react.useCallback(() => {
    if (Object.keys(menuItems).length > 0) {
      setListboxHighlight(
        menuItems[Object.keys(menuItems)[Object.keys(menuItems).length - 1]].id
      );
    }
  }, [menuItems, setListboxHighlight]);
  react.useEffect(() => {
    if (!open) {
      highlightFirstItem();
    }
  }, [open, highlightFirstItem]);

  const createHandleKeyDown = (otherHandlers) => (e) => {
    var _otherHandlers$onKeyD;

    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null
      ? void 0
      : _otherHandlers$onKeyD.call(otherHandlers, e);

    if (e.defaultPrevented) {
      return;
    }

    if (e.key === 'Escape' && open) {
      onClose == null ? void 0 : onClose();
    }
  };

  const createHandleBlur = (otherHandlers) => (e) => {
    var _otherHandlers$onBlur, _listboxRef$current;

    (_otherHandlers$onBlur = otherHandlers.onBlur) == null
      ? void 0
      : _otherHandlers$onBlur.call(otherHandlers, e);

    if (
      !(
        (_listboxRef$current = listboxRef.current) != null &&
        _listboxRef$current.contains(e.relatedTarget)
      )
    ) {
      onClose == null ? void 0 : onClose();
    }
  };

  react.useEffect(() => {
    var _listboxRef$current2;

    // set focus to the highlighted item (but prevent stealing focus from other elements on the page)
    if (
      (_listboxRef$current2 = listboxRef.current) != null &&
      _listboxRef$current2.contains(document.activeElement) &&
      highlightedOption !== null
    ) {
      var _menuItems$highlighte, _menuItems$highlighte2;

      menuItems == null
        ? void 0
        : (_menuItems$highlighte = menuItems[highlightedOption]) == null
        ? void 0
        : (_menuItems$highlighte2 = _menuItems$highlighte.ref.current) == null
        ? void 0
        : _menuItems$highlighte2.focus();
    }
  }, [highlightedOption, menuItems]);

  const getListboxProps = (otherHandlers = {}) => {
    const rootProps = getRootProps(
      _extends({}, otherHandlers, {
        onBlur: createHandleBlur(otherHandlers),
        onKeyDown: createHandleKeyDown(otherHandlers),
      })
    );
    return _extends({}, otherHandlers, rootProps, {
      role: 'menu',
    });
  };

  const getItemState = (id) => {
    const { disabled, highlighted } = getOptionState(id);
    return {
      disabled,
      highlighted,
    };
  };

  react.useDebugValue({
    menuItems,
    highlightedOption,
  });
  return {
    registerItem,
    unregisterItem,
    menuItems,
    getListboxProps,
    getItemState,
    getItemProps: getOptionProps,
    highlightedOption,
    highlightFirstItem,
    highlightLastItem,
  };
}

var top$1 = 'top';
var bottom$1 = 'bottom';
var right$1 = 'right';
var left$1 = 'left';
var auto = 'auto';
var basePlacements = [top$1, bottom$1, right$1, left$1];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/ basePlacements.reduce(function (
  acc,
  placement
) {
  return acc.concat([placement + '-' + start, placement + '-' + end]);
},
[]);
var placements = /*#__PURE__*/ []
  .concat(basePlacements, [auto])
  .reduce(function (acc, placement) {
    return acc.concat([
      placement,
      placement + '-' + start,
      placement + '-' + end,
    ]);
  }, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [
  beforeRead,
  read,
  afterRead,
  beforeMain,
  main,
  afterMain,
  beforeWrite,
  write,
  afterWrite,
];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement$1(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]

    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0',
    },
    arrow: {
      position: 'absolute',
    },
    reference: {},
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(
        state.styles.hasOwnProperty(name)
          ? state.styles[name]
          : initialStyles[name]
      ); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules

var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect,
  requires: ['computeStyles'],
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = round(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = round(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY,
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height,
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
    var next = child;

    do {
      if (next && parent.isSameNode(next)) {
        return true;
      } // $FlowFixMe[prop-missing]: need a better way to handle this...

      next = next.parentNode || next.host;
    } while (next);
  } // Give up, the result is false

  return false;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return (
    (isElement$1(element)
      ? element.ownerDocument // $FlowFixMe[prop-missing]
      : element.document) || window.document
  ).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    (isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback
  );
}

function getTrueOffsetParent(element) {
  if (
    !isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
    getComputedStyle(element).position === 'fixed'
  ) {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block

function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (
    isHTMLElement(currentNode) &&
    ['html', 'body'].indexOf(getNodeName(currentNode)) < 0
  ) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (
      css.transform !== 'none' ||
      css.perspective !== 'none' ||
      css.contain === 'paint' ||
      ['transform', 'perspective'].indexOf(css.willChange) !== -1 ||
      (isFirefox && css.willChange === 'filter') ||
      (isFirefox && css.filter && css.filter !== 'none')
    ) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.

function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (
    offsetParent &&
    isTableElement(offsetParent) &&
    getComputedStyle(offsetParent).position === 'static'
  ) {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (
    offsetParent &&
    (getNodeName(offsetParent) === 'html' ||
      (getNodeName(offsetParent) === 'body' &&
        getComputedStyle(offsetParent).position === 'static'))
  ) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding =
    typeof padding === 'function'
      ? padding(
          Object.assign({}, state.rects, {
            placement: state.placement,
          })
        )
      : padding;
  return mergePaddingObject(
    typeof padding !== 'number'
      ? padding
      : expandToHashMap(padding, basePlacements)
  );
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
    name = _ref.name,
    options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left$1, right$1].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top$1 : left$1;
  var maxProp = axis === 'y' ? bottom$1 : right$1;
  var endDiff =
    state.rects.reference[len] +
    state.rects.reference[axis] -
    popperOffsets[axis] -
    state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent
    ? axis === 'y'
      ? arrowOffsetParent.clientHeight || 0
      : arrowOffsetParent.clientWidth || 0
    : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] =
    ((_state$modifiersData$ = {}),
    (_state$modifiersData$[axisProp] = offset),
    (_state$modifiersData$.centerOffset = offset - center),
    _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
    options = _ref2.options;
  var _options$element = options.element,
    arrowElement =
      _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules

var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};

function getVariation(placement) {
  return placement.split('-')[1];
}

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto',
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
    y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(x * dpr) / dpr || 0,
    y: round(y * dpr) / dpr || 0,
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
    popperRect = _ref2.popperRect,
    placement = _ref2.placement,
    variation = _ref2.variation,
    offsets = _ref2.offsets,
    position = _ref2.position,
    gpuAcceleration = _ref2.gpuAcceleration,
    adaptive = _ref2.adaptive,
    roundOffsets = _ref2.roundOffsets,
    isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
    x = _offsets$x === void 0 ? 0 : _offsets$x,
    _offsets$y = offsets.y,
    y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 =
    typeof roundOffsets === 'function'
      ? roundOffsets({
          x: x,
          y: y,
        })
      : {
          x: x,
          y: y,
        };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left$1;
  var sideY = top$1;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (
        getComputedStyle(offsetParent).position !== 'static' &&
        position === 'absolute'
      ) {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    offsetParent = offsetParent;

    if (
      placement === top$1 ||
      ((placement === left$1 || placement === right$1) && variation === end)
    ) {
      sideY = bottom$1;
      var offsetY =
        isFixed && offsetParent === win && win.visualViewport
          ? win.visualViewport.height // $FlowFixMe[prop-missing]
          : offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (
      placement === left$1 ||
      ((placement === top$1 || placement === bottom$1) && variation === end)
    ) {
      sideX = right$1;
      var offsetX =
        isFixed && offsetParent === win && win.visualViewport
          ? win.visualViewport.width // $FlowFixMe[prop-missing]
          : offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign(
    {
      position: position,
    },
    adaptive && unsetSides
  );

  var _ref4 =
    roundOffsets === true
      ? roundOffsetsByDPR({
          x: x,
          y: y,
        })
      : {
          x: x,
          y: y,
        };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(
      {},
      commonStyles,
      ((_Object$assign = {}),
      (_Object$assign[sideY] = hasY ? '0' : ''),
      (_Object$assign[sideX] = hasX ? '0' : ''),
      (_Object$assign.transform =
        (win.devicePixelRatio || 1) <= 1
          ? 'translate(' + x + 'px, ' + y + 'px)'
          : 'translate3d(' + x + 'px, ' + y + 'px, 0)'),
      _Object$assign)
    );
  }

  return Object.assign(
    {},
    commonStyles,
    ((_Object$assign2 = {}),
    (_Object$assign2[sideY] = hasY ? y + 'px' : ''),
    (_Object$assign2[sideX] = hasX ? x + 'px' : ''),
    (_Object$assign2.transform = ''),
    _Object$assign2)
  );
}

function computeStyles(_ref5) {
  var state = _ref5.state,
    options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
    gpuAcceleration =
      _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
    _options$adaptive = options.adaptive,
    adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
    _options$roundOffsets = options.roundOffsets,
    roundOffsets =
      _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    variation: getVariation(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed',
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(
      {},
      state.styles.popper,
      mapToStyles(
        Object.assign({}, commonStyles, {
          offsets: state.modifiersData.popperOffsets,
          position: state.options.strategy,
          adaptive: adaptive,
          roundOffsets: roundOffsets,
        })
      )
    );
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(
      {},
      state.styles.arrow,
      mapToStyles(
        Object.assign({}, commonStyles, {
          offsets: state.modifiersData.arrow,
          position: 'absolute',
          adaptive: false,
          roundOffsets: roundOffsets,
        })
      )
    );
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement,
  });
} // eslint-disable-next-line import/no-unused-modules

var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {},
};

var passive = {
  passive: true,
};

function effect$2(_ref) {
  var state = _ref.state,
    instance = _ref.instance,
    options = _ref.options;
  var _options$scroll = options.scroll,
    scroll = _options$scroll === void 0 ? true : _options$scroll,
    _options$resize = options.resize,
    resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(
    state.scrollParents.reference,
    state.scrollParents.popper
  );

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules

var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$2,
  data: {},
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom',
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start',
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop,
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return (
    getBoundingClientRect(getDocumentElement(element)).left +
    getWindowScroll(element).scrollLeft
  );
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y,
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body =
    (_element$ownerDocumen = element.ownerDocument) == null
      ? void 0
      : _element$ownerDocumen.body;
  var width = max(
    html.scrollWidth,
    html.clientWidth,
    body ? body.scrollWidth : 0,
    body ? body.clientWidth : 0
  );
  var height = max(
    html.scrollHeight,
    html.clientHeight,
    body ? body.scrollHeight : 0,
    body ? body.clientHeight : 0
  );
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y,
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
    overflow = _getComputedStyle.overflow,
    overflowX = _getComputedStyle.overflowX,
    overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody =
    scrollParent ===
    ((_element$ownerDocumen = element.ownerDocument) == null
      ? void 0
      : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody
    ? [win].concat(
        win.visualViewport || [],
        isScrollParent(scrollParent) ? scrollParent : []
      )
    : scrollParent;
  var updatedList = list.concat(target);
  return isBody
    ? updatedList // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    : updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height,
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport
    ? rectToClientRect(getViewportRect(element))
    : isElement$1(clippingParent)
    ? getInnerBoundingClientRect(clippingParent)
    : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`

function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping =
    ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement =
    canEscapeClipping && isHTMLElement(element)
      ? getOffsetParent(element)
      : element;

  if (!isElement$1(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414

  return clippingParents.filter(function (clippingParent) {
    return (
      isElement$1(clippingParent) &&
      contains(clippingParent, clipperElement) &&
      getNodeName(clippingParent) !== 'body'
    );
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents

function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents =
    boundary === 'clippingParents'
      ? getClippingParents(element)
      : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
    element = _ref.element,
    placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top$1:
      offsets = {
        x: commonX,
        y: reference.y - element.height,
      };
      break;

    case bottom$1:
      offsets = {
        x: commonX,
        y: reference.y + reference.height,
      };
      break;

    case right$1:
      offsets = {
        x: reference.x + reference.width,
        y: commonY,
      };
      break;

    case left$1:
      offsets = {
        x: reference.x - element.width,
        y: commonY,
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y,
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] =
          offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] =
          offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    _options$placement = _options.placement,
    placement =
      _options$placement === void 0 ? state.placement : _options$placement,
    _options$boundary = _options.boundary,
    boundary =
      _options$boundary === void 0 ? clippingParents : _options$boundary,
    _options$rootBoundary = _options.rootBoundary,
    rootBoundary =
      _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
    _options$elementConte = _options.elementContext,
    elementContext =
      _options$elementConte === void 0 ? popper : _options$elementConte,
    _options$altBoundary = _options.altBoundary,
    altBoundary =
      _options$altBoundary === void 0 ? false : _options$altBoundary,
    _options$padding = _options.padding,
    padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(
    typeof padding !== 'number'
      ? padding
      : expandToHashMap(padding, basePlacements)
  );
  var altContext = elementContext === popper ? reference : popper;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(
    isElement$1(element)
      ? element
      : element.contextElement || getDocumentElement(state.elements.popper),
    boundary,
    rootBoundary
  );
  var referenceClientRect = getBoundingClientRect(state.elements.reference);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement,
  });
  var popperClientRect = rectToClientRect(
    Object.assign({}, popperRect, popperOffsets)
  );
  var elementClientRect =
    elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom:
      elementClientRect.bottom -
      clippingClientRect.bottom +
      paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right:
      elementClientRect.right - clippingClientRect.right + paddingObject.right,
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right$1, bottom$1].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top$1, bottom$1].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
    placement = _options.placement,
    boundary = _options.boundary,
    rootBoundary = _options.rootBoundary,
    padding = _options.padding,
    flipVariations = _options.flipVariations,
    _options$allowedAutoP = _options.allowedAutoPlacements,
    allowedAutoPlacements =
      _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation
    ? flipVariations
      ? variationPlacements
      : variationPlacements.filter(function (placement) {
          return getVariation(placement) === variation;
        })
    : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...

  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [
    getOppositeVariationPlacement(placement),
    oppositePlacement,
    getOppositeVariationPlacement(oppositePlacement),
  ];
}

function flip(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
    specifiedFallbackPlacements = options.fallbackPlacements,
    padding = options.padding,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    _options$flipVariatio = options.flipVariations,
    flipVariations =
      _options$flipVariatio === void 0 ? true : _options$flipVariatio,
    allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements =
    specifiedFallbackPlacements ||
    (isBasePlacement || !flipVariations
      ? [getOppositePlacement(preferredPlacement)]
      : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement]
    .concat(fallbackPlacements)
    .reduce(function (acc, placement) {
      return acc.concat(
        getBasePlacement(placement) === auto
          ? computeAutoPlacement(state, {
              placement: placement,
              boundary: boundary,
              rootBoundary: rootBoundary,
              padding: padding,
              flipVariations: flipVariations,
              allowedAutoPlacements: allowedAutoPlacements,
            })
          : placement
      );
    }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top$1, bottom$1].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding,
    });
    var mainVariationSide = isVertical
      ? isStartVariation
        ? right$1
        : left$1
      : isStartVariation
      ? bottom$1
      : top$1;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(
        overflow[mainVariationSide] <= 0,
        overflow[altVariationSide] <= 0
      );
    }

    if (
      checks.every(function (check) {
        return check;
      })
    ) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return 'break';
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === 'break') break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules

var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false,
  },
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0,
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x,
  };
}

function isAnySideFullyClipped(overflow) {
  return [top$1, right$1, bottom$1, left$1].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
    name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference',
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true,
  });
  var referenceClippingOffsets = getSideOffsets(
    referenceOverflow,
    referenceRect
  );
  var popperEscapeOffsets = getSideOffsets(
    popperAltOverflow,
    popperRect,
    preventedOffsets
  );
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped,
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped,
  });
} // eslint-disable-next-line import/no-unused-modules

var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide,
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left$1, top$1].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref =
      typeof offset === 'function'
        ? offset(
            Object.assign({}, rects, {
              placement: placement,
            })
          )
        : offset,
    skidding = _ref[0],
    distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left$1, right$1].indexOf(basePlacement) >= 0
    ? {
        x: distance,
        y: skidding,
      }
    : {
        x: skidding,
        y: distance,
      };
}

function offset(_ref2) {
  var state = _ref2.state,
    options = _ref2.options,
    name = _ref2.name;
  var _options$offset = options.offset,
    offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
    x = _data$state$placement.x,
    y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset,
};

function popperOffsets(_ref) {
  var state = _ref.state,
    name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement,
  });
} // eslint-disable-next-line import/no-unused-modules

var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {},
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
    options = _ref.options,
    name = _ref.name;
  var _options$mainAxis = options.mainAxis,
    checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
    _options$altAxis = options.altAxis,
    checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
    boundary = options.boundary,
    rootBoundary = options.rootBoundary,
    altBoundary = options.altBoundary,
    padding = options.padding,
    _options$tether = options.tether,
    tether = _options$tether === void 0 ? true : _options$tether,
    _options$tetherOffset = options.tetherOffset,
    tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary,
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue =
    typeof tetherOffset === 'function'
      ? tetherOffset(
          Object.assign({}, state.rects, {
            placement: state.placement,
          })
        )
      : tetherOffset;
  var normalizedTetherOffsetValue =
    typeof tetherOffsetValue === 'number'
      ? {
          mainAxis: tetherOffsetValue,
          altAxis: tetherOffsetValue,
        }
      : Object.assign(
          {
            mainAxis: 0,
            altAxis: 0,
          },
          tetherOffsetValue
        );
  var offsetModifierState = state.modifiersData.offset
    ? state.modifiersData.offset[state.placement]
    : null;
  var data = {
    x: 0,
    y: 0,
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? top$1 : left$1;
    var altSide = mainAxis === 'y' ? bottom$1 : right$1;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = offset + overflow[mainSide];
    var max$1 = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect =
      tether && arrowElement
        ? getLayoutRect(arrowElement)
        : {
            width: 0,
            height: 0,
          };
    var arrowPaddingObject = state.modifiersData['arrow#persistent']
      ? state.modifiersData['arrow#persistent'].padding
      : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement
      ? referenceRect[len] / 2 -
        additive -
        arrowLen -
        arrowPaddingMin -
        normalizedTetherOffsetValue.mainAxis
      : minLen -
        arrowLen -
        arrowPaddingMin -
        normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement
      ? -referenceRect[len] / 2 +
        additive +
        arrowLen +
        arrowPaddingMax +
        normalizedTetherOffsetValue.mainAxis
      : maxLen +
        arrowLen +
        arrowPaddingMax +
        normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent =
      state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent
      ? mainAxis === 'y'
        ? arrowOffsetParent.clientTop || 0
        : arrowOffsetParent.clientLeft || 0
      : 0;
    var offsetModifierValue =
      (_offsetModifierState$ =
        offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) !=
      null
        ? _offsetModifierState$
        : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = within(
      tether ? min(min$1, tetherMin) : min$1,
      offset,
      tether ? max(max$1, tetherMax) : max$1
    );
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? top$1 : left$1;

    var _altSide = mainAxis === 'x' ? bottom$1 : right$1;

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [top$1, left$1].indexOf(basePlacement) !== -1;

    var _offsetModifierValue =
      (_offsetModifierState$2 =
        offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) !=
      null
        ? _offsetModifierState$2
        : 0;

    var _tetherMin = isOriginSide
      ? _min
      : _offset -
        referenceRect[_len] -
        popperRect[_len] -
        _offsetModifierValue +
        normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide
      ? _offset +
        referenceRect[_len] +
        popperRect[_len] -
        _offsetModifierValue -
        normalizedTetherOffsetValue.altAxis
      : _max;

    var _preventedOffset =
      tether && isOriginSide
        ? withinMaxClamp(_tetherMin, _offset, _tetherMax)
        : within(
            tether ? _tetherMin : _min,
            _offset,
            tether ? _tetherMax : _max
          );

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules

var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset'],
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop,
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = round(rect.width) / element.offsetWidth || 1;
  var scaleY = round(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled =
    isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(
    elementOrVirtualElement,
    offsetParentIsScaled
  );
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0,
  };
  var offsets = {
    x: 0,
    y: 0,
  };

  if (isOffsetParentAnElement || (!isOffsetParentAnElement && !isFixed)) {
    if (
      getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
      isScrollParent(documentElement)
    ) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height,
  };
}

function order$1(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(
      modifier.requires || [],
      modifier.requiresIfExists || []
    );
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order$1(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(
      orderedModifiers.filter(function (modifier) {
        return modifier.phase === phase;
      })
    );
  }, []);
}

function debounce$1(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing
      ? Object.assign({}, existing, current, {
          options: Object.assign({}, existing.options, current.options),
          data: Object.assign({}, existing.data, current.data),
        })
      : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute',
};

function areValidElements() {
  for (
    var _len = arguments.length, args = new Array(_len), _key = 0;
    _key < _len;
    _key++
  ) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
    _generatorOptions$def = _generatorOptions.defaultModifiers,
    defaultModifiers =
      _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
    _generatorOptions$def2 = _generatorOptions.defaultOptions,
    defaultOptions =
      _generatorOptions$def2 === void 0
        ? DEFAULT_OPTIONS
        : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper,
      },
      attributes: {},
      styles: {},
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options =
          typeof setOptionsAction === 'function'
            ? setOptionsAction(state.options)
            : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign(
          {},
          defaultOptions,
          state.options,
          options
        );
        state.scrollParents = {
          reference: isElement$1(reference)
            ? listScrollParents(reference)
            : reference.contextElement
            ? listScrollParents(reference.contextElement)
            : [],
          popper: listScrollParents(popper),
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(
          mergeByName([].concat(defaultModifiers, state.options.modifiers))
        ); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          return;
        } // Store the reference and popper rects to be read by modifiers

        state.rects = {
          reference: getCompositeRect(
            reference,
            getOffsetParent(popper),
            state.options.strategy === 'fixed'
          ),
          popper: getLayoutRect(popper),
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return (state.modifiersData[modifier.name] = Object.assign(
            {},
            modifier.data
          ));
        });

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
            fn = _state$orderedModifie.fn,
            _state$orderedModifie2 = _state$orderedModifie.options,
            _options =
              _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
            name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state =
              fn({
                state: state,
                options: _options,
                name: name,
                instance: instance,
              }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce$1(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      },
    };

    if (!areValidElements(reference, popper)) {
      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
          _ref3$options = _ref3.options,
          options = _ref3$options === void 0 ? {} : _ref3$options,
          effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options,
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [
  eventListeners,
  popperOffsets$1,
  computeStyles$1,
  applyStyles$1,
  offset$1,
  flip$1,
  preventOverflow$1,
  arrow$1,
  hide$1,
];
var createPopper = /*#__PURE__*/ popperGenerator({
  defaultModifiers: defaultModifiers,
}); // eslint-disable-next-line import/no-unused-modules

function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 */

const Portal$1 = /*#__PURE__*/ react.forwardRef(function Portal(props, ref) {
  const { children, container, disablePortal = false } = props;
  const [mountNode, setMountNode] = react.useState(null);
  const handleRef = useForkRef(
    /*#__PURE__*/ react.isValidElement(children) ? children.ref : null,
    ref
  );
  useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(ref, mountNode);
      return () => {
        setRef(ref, null);
      };
    }

    return undefined;
  }, [ref, mountNode, disablePortal]);

  if (disablePortal) {
    if (/*#__PURE__*/ react.isValidElement(children)) {
      return /*#__PURE__*/ react.cloneElement(children, {
        ref: handleRef,
      });
    }

    return children;
  }

  return mountNode
    ? /*#__PURE__*/ reactDom.createPortal(children, mountNode)
    : mountNode;
});

const _excluded$b = [
    'anchorEl',
    'children',
    'direction',
    'disablePortal',
    'modifiers',
    'open',
    'ownerState',
    'placement',
    'popperOptions',
    'popperRef',
    'TransitionProps',
  ],
  _excluded2$2 = [
    'anchorEl',
    'children',
    'container',
    'direction',
    'disablePortal',
    'keepMounted',
    'modifiers',
    'open',
    'placement',
    'popperOptions',
    'popperRef',
    'style',
    'transition',
  ];

function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }

  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';

    case 'bottom-start':
      return 'bottom-end';

    case 'top-end':
      return 'top-start';

    case 'top-start':
      return 'top-end';

    default:
      return placement;
  }
}

function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}

const defaultPopperOptions = {};
/* eslint-disable react/prop-types */

const PopperTooltip = /*#__PURE__*/ react.forwardRef(function PopperTooltip(
  props,
  ref
) {
  const {
      anchorEl,
      children,
      direction,
      disablePortal,
      modifiers,
      open,
      placement: initialPlacement,
      popperOptions,
      popperRef: popperRefProp,
      TransitionProps,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$b);

  const tooltipRef = react.useRef(null);
  const ownRef = useForkRef(tooltipRef, ref);
  const popperRef = react.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = react.useRef(handlePopperRef);
  useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */

  const [placement, setPlacement] = react.useState(rtlPlacement);
  react.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  useEnhancedEffect(() => {
    if (!anchorEl || !open) {
      return undefined;
    }

    const handlePopperUpdate = (data) => {
      setPlacement(data.placement);
    };

    const resolvedAnchorEl = resolveAnchorEl(anchorEl);

    let popperModifiers = [
      {
        name: 'preventOverflow',
        options: {
          altBoundary: disablePortal,
        },
      },
      {
        name: 'flip',
        options: {
          altBoundary: disablePortal,
        },
      },
      {
        name: 'onUpdate',
        enabled: true,
        phase: 'afterWrite',
        fn: ({ state }) => {
          handlePopperUpdate(state);
        },
      },
    ];

    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }

    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }

    const popper = createPopper(
      resolveAnchorEl(anchorEl),
      tooltipRef.current,
      _extends(
        {
          placement: rtlPlacement,
        },
        popperOptions,
        {
          modifiers: popperModifiers,
        }
      )
    );
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [anchorEl, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement,
  };

  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }

  return /*#__PURE__*/ jsxRuntime.jsx(
    'div',
    _extends(
      {
        ref: ownRef,
        role: 'tooltip',
      },
      other,
      {
        children:
          typeof children === 'function' ? children(childProps) : children,
      }
    )
  );
});
/* eslint-enable react/prop-types */

/**
 * Poppers rely on the 3rd party library [Popper.js](https://popper.js.org/docs/v2/) for positioning.
 */

const PopperUnstyled = /*#__PURE__*/ react.forwardRef(function PopperUnstyled(
  props,
  ref
) {
  const {
      anchorEl,
      children,
      container: containerProp,
      direction = 'ltr',
      disablePortal = false,
      keepMounted = false,
      modifiers,
      open,
      placement = 'bottom',
      popperOptions = defaultPopperOptions,
      popperRef,
      style,
      transition = false,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded2$2);

  const [exited, setExited] = react.useState(true);

  const handleEnter = () => {
    setExited(false);
  };

  const handleExited = () => {
    setExited(true);
  };

  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  } // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container

  const container =
    containerProp ||
    (anchorEl ? ownerDocument(resolveAnchorEl(anchorEl)).body : undefined);
  return /*#__PURE__*/ jsxRuntime.jsx(Portal$1, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/ jsxRuntime.jsx(
      PopperTooltip,
      _extends(
        {
          anchorEl: anchorEl,
          direction: direction,
          disablePortal: disablePortal,
          modifiers: modifiers,
          ref: ref,
          open: transition ? !exited : open,
          placement: placement,
          popperOptions: popperOptions,
          popperRef: popperRef,
        },
        other,
        {
          style: _extends(
            {
              // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
              position: 'fixed',
              // Fix Popper.js display issue
              top: 0,
              left: 0,
              display:
                !open && keepMounted && (!transition || exited) ? 'none' : null,
            },
            style
          ),
          TransitionProps: transition
            ? {
                in: open,
                onEnter: handleEnter,
                onExited: handleExited,
              }
            : null,
          children: children,
        }
      )
    ),
  });
});

const _excluded$c = [
  'actions',
  'anchorEl',
  'children',
  'component',
  'components',
  'componentsProps',
  'keepMounted',
  'listboxId',
  'onClose',
  'open',
];

function getUtilityClasses(ownerState) {
  const { open } = ownerState;
  const slots = {
    root: ['root', open && 'expanded'],
    listbox: ['listbox', open && 'expanded'],
  };
  return composeClasses(slots, getMenuUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuUnstyled API](https://mui.com/base/api/menu-unstyled/)
 */

const MenuUnstyled = /*#__PURE__*/ react.forwardRef(function MenuUnstyled(
  props,
  forwardedRef
) {
  var _ref, _components$Listbox;

  const {
      actions,
      anchorEl,
      children,
      component,
      components = {},
      componentsProps = {},
      keepMounted = false,
      listboxId,
      onClose,
      open = false,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$c);

  const {
    registerItem,
    unregisterItem,
    getListboxProps,
    getItemProps,
    getItemState,
    highlightFirstItem,
    highlightLastItem,
  } = useMenu({
    open,
    onClose,
    listboxId,
  });
  react.useImperativeHandle(
    actions,
    () => ({
      highlightFirstItem,
      highlightLastItem,
    }),
    [highlightFirstItem, highlightLastItem]
  );

  const ownerState = _extends({}, props, {
    open,
  });

  const classes = getUtilityClasses(ownerState);
  const Root =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : PopperUnstyled;
  const rootProps = useSlotProps({
    elementType: Root,
    externalForwardedProps: other,
    externalSlotProps: componentsProps.root,
    additionalProps: {
      anchorEl,
      open,
      keepMounted,
      role: undefined,
      ref: forwardedRef,
    },
    className: classes.root,
    ownerState,
  });
  const Listbox =
    (_components$Listbox = components.Listbox) != null
      ? _components$Listbox
      : 'ul';
  const listboxProps = useSlotProps({
    elementType: Listbox,
    getSlotProps: getListboxProps,
    externalSlotProps: componentsProps.listbox,
    ownerState,
    className: classes.listbox,
  });
  const contextValue = {
    registerItem,
    unregisterItem,
    getItemState,
    getItemProps,
    open,
  };
  return /*#__PURE__*/ jsxRuntime.jsx(
    Root,
    _extends({}, rootProps, {
      children: /*#__PURE__*/ jsxRuntime.jsx(
        Listbox,
        _extends({}, listboxProps, {
          children: /*#__PURE__*/ jsxRuntime.jsx(MenuUnstyledContext.Provider, {
            value: contextValue,
            children: children,
          }),
        })
      ),
    })
  );
});

function getMenuItemUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiMenuItemUnstyled', slot);
}
const menuItemUnstyledClasses = generateUtilityClasses('MuiMenuItemUnstyled', [
  'root',
  'disabled',
  'focusVisible',
]);

function useMenuItem(props) {
  var _itemState$disabled;

  const { disabled = false, ref, label } = props;
  const id = useId();
  const menuContext = react.useContext(MenuUnstyledContext);
  const itemRef = react.useRef(null);
  const handleRef = useForkRef(itemRef, ref);

  if (menuContext === null) {
    throw new Error('MenuItemUnstyled must be used within a MenuUnstyled');
  }

  const { registerItem, unregisterItem, open } = menuContext;
  react.useEffect(() => {
    if (id === undefined) {
      return undefined;
    }

    registerItem(id, {
      disabled,
      id,
      ref: itemRef,
      label,
    });
    return () => unregisterItem(id);
  }, [id, registerItem, unregisterItem, disabled, ref, label]);
  const { getRootProps: getButtonProps, focusVisible } = useButton({
    disabled,
    focusableWhenDisabled: true,
    ref: handleRef,
  }); // Ensure the menu item is focused when highlighted

  const [focusRequested, requestFocus] = react.useState(false);
  const focusIfRequested = react.useCallback(() => {
    if (focusRequested && itemRef.current != null) {
      itemRef.current.focus();
      requestFocus(false);
    }
  }, [focusRequested]);
  react.useEffect(() => {
    focusIfRequested();
  });
  react.useDebugValue({
    id,
    disabled,
    label,
  });
  const itemState = menuContext.getItemState(id != null ? id : '');
  const { highlighted } =
    itemState != null
      ? itemState
      : {
          highlighted: false,
        };
  react.useEffect(() => {
    requestFocus(highlighted && open);
  }, [highlighted, open]);

  if (id === undefined) {
    return {
      getRootProps: (other) =>
        _extends({}, other, getButtonProps(other), {
          role: 'menuitem',
        }),
      disabled: false,
      focusVisible,
    };
  }

  return {
    getRootProps: (other) => {
      const optionProps = menuContext.getItemProps(id, other);
      return _extends({}, other, getButtonProps(other), {
        tabIndex: optionProps.tabIndex,
        id: optionProps.id,
        role: 'menuitem',
      });
    },
    disabled:
      (_itemState$disabled = itemState == null ? void 0 : itemState.disabled) !=
      null
        ? _itemState$disabled
        : false,
    focusVisible,
  };
}

const _excluded$d = [
  'children',
  'disabled',
  'component',
  'components',
  'componentsProps',
  'label',
];

function getUtilityClasses$1(ownerState) {
  const { disabled, focusVisible } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible'],
  };
  return composeClasses(slots, getMenuItemUnstyledUtilityClass, {});
}
/**
 *
 * Demos:
 *
 * - [Menu](https://mui.com/base/react-menu/)
 *
 * API:
 *
 * - [MenuItemUnstyled API](https://mui.com/base/api/menu-item-unstyled/)
 */

const MenuItemUnstyled = /*#__PURE__*/ react.forwardRef(
  function MenuItemUnstyled(props, ref) {
    var _ref;

    const {
        children,
        disabled: disabledProp = false,
        component,
        components = {},
        componentsProps = {},
        label,
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$d);

    const { getRootProps, disabled, focusVisible } = useMenuItem({
      disabled: disabledProp,
      ref,
      label,
    });

    const ownerState = _extends({}, props, {
      disabled,
      focusVisible,
    });

    const classes = getUtilityClasses$1(ownerState);
    const Root =
      (_ref = component != null ? component : components.Root) != null
        ? _ref
        : 'li';
    const rootProps = useSlotProps({
      elementType: Root,
      getSlotProps: getRootProps,
      externalSlotProps: componentsProps.root,
      externalForwardedProps: other,
      className: classes.root,
      ownerState,
    });
    return /*#__PURE__*/ jsxRuntime.jsx(
      Root,
      _extends({}, rootProps, {
        children: children,
      })
    );
  }
);

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = ownerDocument(container);

  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }

  return container.scrollHeight > container.clientHeight;
}

function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}

function getPaddingRight(element) {
  return (
    parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) ||
    0
  );
}

function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = [
    'TEMPLATE',
    'SCRIPT',
    'STYLE',
    'LINK',
    'MAP',
    'META',
    'NOSCRIPT',
    'PICTURE',
    'COL',
    'COLGROUP',
    'PARAM',
    'SLOT',
    'SOURCE',
    'TRACK',
  ];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden =
    element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}

function ariaHiddenSiblings(
  container,
  mountElement,
  currentElement,
  elementsToExclude = [],
  show
) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, (element) => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);

    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}

function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }

    return false;
  });
  return idx;
}

function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;

  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container,
      }); // Use computed style, here to get the real padding to add our scrollbar width.

      container.style.paddingRight = `${
        getPaddingRight(container) + scrollbarSize
      }px`; // .mui-fixed is a global helper.

      const fixedElements =
        ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, (element) => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element,
        });
        element.style.paddingRight = `${
          getPaddingRight(element) + scrollbarSize
        }px`;
      });
    } // Improve Gatsby support
    // https://css-tricks.com/snippets/css/force-vertical-scrollbar/

    const parent = container.parentElement;
    const containerWindow = ownerWindow(container);
    const scrollContainer =
      (parent == null ? void 0 : parent.nodeName) === 'HTML' &&
      containerWindow.getComputedStyle(parent).overflowY === 'scroll'
        ? parent
        : container; // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.

    restoreStyle.push(
      {
        value: scrollContainer.style.overflow,
        property: 'overflow',
        el: scrollContainer,
      },
      {
        value: scrollContainer.style.overflowX,
        property: 'overflow-x',
        el: scrollContainer,
      },
      {
        value: scrollContainer.style.overflowY,
        property: 'overflow-y',
        el: scrollContainer,
      }
    );
    scrollContainer.style.overflow = 'hidden';
  }

  const restore = () => {
    restoreStyle.forEach(({ value, el, property }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };

  return restore;
}

function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, (element) => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}

/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }

  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);

    if (modalIndex !== -1) {
      return modalIndex;
    }

    modalIndex = this.modals.length;
    this.modals.push(modal); // If the modal we are adding is already in the DOM.

    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }

    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(
      container,
      modal.mount,
      modal.modalRef,
      hiddenSiblings,
      true
    );
    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.container === container
    );

    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }

    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings,
    });
    return modalIndex;
  }

  mount(modal, props) {
    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.modals.indexOf(modal) !== -1
    );
    const containerInfo = this.containers[containerIndex];

    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }

  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);

    if (modalIndex === -1) {
      return modalIndex;
    }

    const containerIndex = findIndexOf(
      this.containers,
      (item) => item.modals.indexOf(modal) !== -1
    );
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1); // If that was the last modal in a container, clean up the container.

    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }

      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }

      ariaHiddenSiblings(
        containerInfo.container,
        modal.mount,
        modal.modalRef,
        containerInfo.hiddenSiblings,
        false
      );
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1]; // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null

      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }

    return modalIndex;
  }

  isTopModal(modal) {
    return (
      this.modals.length > 0 && this.modals[this.modals.length - 1] === modal
    );
  }
}

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */
const candidatesSelector = [
  'input',
  'select',
  'textarea',
  'a[href]',
  'button',
  '[tabindex]',
  'audio[controls]',
  'video[controls]',
  '[contenteditable]:not([contenteditable="false"])',
].join(',');

function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex'), 10);

  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  } // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.

  if (
    node.contentEditable === 'true' ||
    ((node.nodeName === 'AUDIO' ||
      node.nodeName === 'VIDEO' ||
      node.nodeName === 'DETAILS') &&
      node.getAttribute('tabindex') === null)
  ) {
    return 0;
  }

  return node.tabIndex;
}

function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }

  if (!node.name) {
    return false;
  }

  const getRadio = (selector) =>
    node.ownerDocument.querySelector(`input[type="radio"]${selector}`);

  let roving = getRadio(`[name="${node.name}"]:checked`);

  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }

  return roving !== node;
}

function isNodeMatchingSelectorFocusable(node) {
  if (
    node.disabled ||
    (node.tagName === 'INPUT' && node.type === 'hidden') ||
    isNonTabbableRadio(node)
  ) {
    return false;
  }

  return true;
}

function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);

    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }

    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node,
      });
    }
  });
  return orderedTabNodes
    .sort((a, b) =>
      a.tabIndex === b.tabIndex
        ? a.documentOrder - b.documentOrder
        : a.tabIndex - b.tabIndex
    )
    .map((a) => a.node)
    .concat(regularTabNodes);
}

function defaultIsEnabled() {
  return true;
}
/**
 * Utility component that locks focus inside the component.
 */

function TrapFocus(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open,
  } = props;
  const ignoreNextEnforceFocus = react.useRef();
  const sentinelStart = react.useRef(null);
  const sentinelEnd = react.useRef(null);
  const nodeToRestore = react.useRef(null);
  const reactFocusEventTarget = react.useRef(null); // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.

  const activated = react.useRef(false);
  const rootRef = react.useRef(null);
  const handleRef = useForkRef(children.ref, rootRef);
  const lastKeydown = react.useRef(null);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        rootRef.current.setAttribute('tabIndex', -1);
      }

      if (activated.current) {
        rootRef.current.focus();
      }
    }

    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }

        nodeToRestore.current = null;
      }
    }; // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open TrapFocus
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }

    const doc = ownerDocument(rootRef.current);

    const contain = (nativeEvent) => {
      const { current: rootElement } = rootRef; // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.

      if (rootElement === null) {
        return;
      }

      if (
        !doc.hasFocus() ||
        disableEnforceFocus ||
        !isEnabled() ||
        ignoreNextEnforceFocus.current
      ) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      if (!rootElement.contains(doc.activeElement)) {
        // if the focus event is not coming from inside the children's react tree, reset the refs
        if (
          (nativeEvent &&
            reactFocusEventTarget.current !== nativeEvent.target) ||
          doc.activeElement !== reactFocusEventTarget.current
        ) {
          reactFocusEventTarget.current = null;
        } else if (reactFocusEventTarget.current !== null) {
          return;
        }

        if (!activated.current) {
          return;
        }

        let tabbable = [];

        if (
          doc.activeElement === sentinelStart.current ||
          doc.activeElement === sentinelEnd.current
        ) {
          tabbable = getTabbable(rootRef.current);
        }

        if (tabbable.length > 0) {
          var _lastKeydown$current, _lastKeydown$current2;

          const isShiftTab = Boolean(
            ((_lastKeydown$current = lastKeydown.current) == null
              ? void 0
              : _lastKeydown$current.shiftKey) &&
              ((_lastKeydown$current2 = lastKeydown.current) == null
                ? void 0
                : _lastKeydown$current2.key) === 'Tab'
          );
          const focusNext = tabbable[0];
          const focusPrevious = tabbable[tabbable.length - 1];

          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        } else {
          rootElement.focus();
        }
      }
    };

    const loopFocus = (nativeEvent) => {
      lastKeydown.current = nativeEvent;

      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      } // Make sure the next tab starts from the right place.
      // doc.activeElement referes to the origin.

      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        sentinelEnd.current.focus();
      }
    };

    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true); // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // e.g. https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.

    const interval = setInterval(() => {
      if (doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [
    disableAutoFocus,
    disableEnforceFocus,
    disableRestoreFocus,
    isEnabled,
    open,
    getTabbable,
  ]);

  const onFocus = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;

    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };

  const handleFocusSentinel = (event) => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }

    activated.current = true;
  };

  return /*#__PURE__*/ jsxRuntime.jsxs(react.Fragment, {
    children: [
      /*#__PURE__*/ jsxRuntime.jsx('div', {
        tabIndex: 0,
        onFocus: handleFocusSentinel,
        ref: sentinelStart,
        'data-test': 'sentinelStart',
      }),
      /*#__PURE__*/ react.cloneElement(children, {
        ref: handleRef,
        onFocus,
      }),
      /*#__PURE__*/ jsxRuntime.jsx('div', {
        tabIndex: 0,
        onFocus: handleFocusSentinel,
        ref: sentinelEnd,
        'data-test': 'sentinelEnd',
      }),
    ],
  });
}

function getModalUtilityClass(slot) {
  return generateUtilityClass('MuiModal', slot);
}
const modalUnstyledClasses = generateUtilityClasses('MuiModal', [
  'root',
  'hidden',
]);

const _excluded$e = [
  'children',
  'classes',
  'className',
  'closeAfterTransition',
  'component',
  'components',
  'componentsProps',
  'container',
  'disableAutoFocus',
  'disableEnforceFocus',
  'disableEscapeKeyDown',
  'disablePortal',
  'disableRestoreFocus',
  'disableScrollLock',
  'hideBackdrop',
  'keepMounted',
  'manager',
  'onBackdropClick',
  'onClose',
  'onKeyDown',
  'open',
  'onTransitionEnter',
  'onTransitionExited',
];

const useUtilityClasses$4 = (ownerState) => {
  const { open, exited, classes } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
  };
  return composeClasses(slots, getModalUtilityClass, classes);
};

function getContainer$1(container) {
  return typeof container === 'function' ? container() : container;
}

function getHasTransition(props) {
  return props.children ? props.children.props.hasOwnProperty('in') : false;
} // A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.

const defaultManager = new ModalManager();
/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */

const ModalUnstyled = /*#__PURE__*/ react.forwardRef(function ModalUnstyled(
  props,
  ref
) {
  var _props$ariaHidden, _componentsProps$root;

  const {
      children,
      classes: classesProp,
      className,
      closeAfterTransition = false,
      component = 'div',
      components = {},
      componentsProps = {},
      container,
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      // private
      // eslint-disable-next-line react/prop-types
      manager = defaultManager,
      onBackdropClick,
      onClose,
      onKeyDown,
      open,

      /* eslint-disable react/prop-types */
      onTransitionEnter,
      onTransitionExited,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$e);

  const [exited, setExited] = react.useState(true);
  const modal = react.useRef({});
  const mountNodeRef = react.useRef(null);
  const modalRef = react.useRef(null);
  const handleRef = useForkRef(modalRef, ref);
  const hasTransition = getHasTransition(props);
  const ariaHiddenProp =
    (_props$ariaHidden = props['aria-hidden']) != null
      ? _props$ariaHidden
      : true;

  const getDoc = () => ownerDocument(mountNodeRef.current);

  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mountNode = mountNodeRef.current;
    return modal.current;
  };

  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock,
    }); // Fix a bug on Chrome where the scroll isn't initially 0.

    modalRef.current.scrollTop = 0;
  };

  const handleOpen = useEventCallback(() => {
    const resolvedContainer = getContainer$1(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer); // The element was already mounted.

    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.useCallback(
    () => manager.isTopModal(getModal()),
    [manager]
  );
  const handlePortalRef = useEventCallback((node) => {
    mountNodeRef.current = node;

    if (!node) {
      return;
    }

    if (open && isTopModal()) {
      handleMounted();
    } else {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = react.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [manager, ariaHiddenProp]);
  react.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);

  const ownerState = _extends({}, props, {
    classes: classesProp,
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    exited,
    hideBackdrop,
    keepMounted,
  });

  const classes = useUtilityClasses$4(ownerState);

  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }

  const handleEnter = () => {
    setExited(false);

    if (onTransitionEnter) {
      onTransitionEnter();
    }
  };

  const handleExited = () => {
    setExited(true);

    if (onTransitionExited) {
      onTransitionExited();
    }

    if (closeAfterTransition) {
      handleClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.target !== event.currentTarget) {
      return;
    }

    if (onBackdropClick) {
      onBackdropClick(event);
    }

    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };

  const handleKeyDown = (event) => {
    if (onKeyDown) {
      onKeyDown(event);
    } // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.

    if (event.key !== 'Escape' || !isTopModal()) {
      return;
    }

    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();

      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };

  const childProps = {};

  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  } // It's a Transition like component

  if (hasTransition) {
    childProps.onEnter = createChainedFunction(
      handleEnter,
      children.props.onEnter
    );
    childProps.onExited = createChainedFunction(
      handleExited,
      children.props.onExited
    );
  }

  const Root = components.Root || component;
  const rootProps = appendOwnerState(
    Root,
    _extends(
      {
        role: 'presentation',
      },
      other,
      componentsProps.root,
      {
        ref: handleRef,
        onKeyDown: handleKeyDown,
        className: require$$4(
          classes.root,
          (_componentsProps$root = componentsProps.root) == null
            ? void 0
            : _componentsProps$root.className,
          className
        ),
      }
    ),
    ownerState
  );
  const BackdropComponent = components.Backdrop;
  const backdropProps = appendOwnerState(
    BackdropComponent,
    _extends(
      {
        'aria-hidden': true,
        open,
        onClick: handleBackdropClick,
      },
      componentsProps.backdrop
    ),
    ownerState
  );
  return /*#__PURE__*/ jsxRuntime.jsx(Portal$1, {
    ref: handlePortalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/ jsxRuntime.jsxs(
      Root,
      _extends({}, rootProps, {
        children: [
          !hideBackdrop && BackdropComponent
            ? /*#__PURE__*/ jsxRuntime.jsx(
                BackdropComponent,
                _extends({}, backdropProps)
              )
            : null,
          /*#__PURE__*/ jsxRuntime.jsx(TrapFocus, {
            disableEnforceFocus: disableEnforceFocus,
            disableAutoFocus: disableAutoFocus,
            disableRestoreFocus: disableRestoreFocus,
            isEnabled: isTopModal,
            open: open,
            children: /*#__PURE__*/ react.cloneElement(children, childProps),
          }),
        ],
      })
    ),
  });
});

function isOptionGroup(child) {
  return !!child.options;
}

function getOptionsFromChildren(children) {
  if (children == null) {
    return [];
  }

  const selectChildren = [];
  react.Children.forEach(children, (node) => {
    var _props, _props2, _element$props$disabl2;

    const nodeChildren =
      node == null
        ? void 0
        : (_props = node.props) == null
        ? void 0
        : _props.children;

    if (
      (node == null
        ? void 0
        : (_props2 = node.props) == null
        ? void 0
        : _props2.value) === undefined
    ) {
      if (nodeChildren != null) {
        var _element$props$disabl;

        const element = node;
        const group = {
          options: getOptionsFromChildren(nodeChildren),
          label: element.props.label,
          disabled:
            (_element$props$disabl = element.props.disabled) != null
              ? _element$props$disabl
              : false,
        };
        selectChildren.push(group);
      }

      return;
    }

    const element = node;
    const option = {
      value: element.props.value,
      label: element.props.label || element.props.children,
      disabled:
        (_element$props$disabl2 = element.props.disabled) != null
          ? _element$props$disabl2
          : false,
    };
    selectChildren.push(option);
  });
  return selectChildren != null ? selectChildren : [];
}
function flattenOptionGroups(groupedOptions, isGroupDisabled = false) {
  let flatOptions = [];
  groupedOptions.forEach((optionOrGroup) => {
    if (isOptionGroup(optionOrGroup)) {
      flatOptions = flatOptions.concat(
        flattenOptionGroups(optionOrGroup.options, optionOrGroup.disabled)
      );
    } else {
      flatOptions.push(
        _extends({}, optionOrGroup, {
          disabled: isGroupDisabled || optionOrGroup.disabled,
        })
      );
    }
  });
  return flatOptions;
}

const defaultOptionStringifier$1 = (option) => {
  const { label, value } = option;

  if (typeof label === 'string') {
    return label;
  }

  if (typeof value === 'string') {
    return value;
  } // Fall back string representation

  return String(option);
};

function useSelect(props) {
  const {
    buttonRef: buttonRefProp,
    defaultValue,
    disabled = false,
    listboxId,
    listboxRef: listboxRefProp,
    multiple = false,
    onChange,
    onOpenChange,
    open = false,
    options,
    optionStringifier = defaultOptionStringifier$1,
    value: valueProp,
  } = props;
  const buttonRef = react.useRef(null);
  const handleButtonRef = useForkRef(buttonRefProp, buttonRef);
  const listboxRef = react.useRef(null);
  const intermediaryListboxRef = useForkRef(listboxRefProp, listboxRef);
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'SelectUnstyled',
    state: 'value',
  }); // prevents closing the listbox on keyUp right after opening it

  const ignoreEnterKeyUp = react.useRef(false); // prevents reopening the listbox when button is clicked
  // (listbox closes on lost focus, then immediately reopens on click)

  const ignoreClick = react.useRef(false); // Ensure the listbox is focused after opening

  const [listboxFocusRequested, requestListboxFocus] = react.useState(false);
  const focusListboxIfRequested = react.useCallback(() => {
    if (listboxFocusRequested && listboxRef.current != null) {
      listboxRef.current.focus();
      requestListboxFocus(false);
    }
  }, [listboxFocusRequested]);

  const updateListboxRef = (listboxElement) => {
    listboxRef.current = listboxElement;
    focusListboxIfRequested();
  };

  const handleListboxRef = useForkRef(intermediaryListboxRef, updateListboxRef);
  react.useEffect(() => {
    focusListboxIfRequested();
  }, [focusListboxIfRequested]);
  react.useEffect(() => {
    requestListboxFocus(open);
  }, [open]);

  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;

    otherHandlers == null
      ? void 0
      : (_otherHandlers$onMous = otherHandlers.onMouseDown) == null
      ? void 0
      : _otherHandlers$onMous.call(otherHandlers, event);

    if (!event.defaultPrevented && open) {
      ignoreClick.current = true;
    }
  };

  const createHandleButtonClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;

    otherHandlers == null
      ? void 0
      : (_otherHandlers$onClic = otherHandlers.onClick) == null
      ? void 0
      : _otherHandlers$onClic.call(otherHandlers, event);

    if (!event.defaultPrevented && !ignoreClick.current) {
      onOpenChange == null ? void 0 : onOpenChange(!open);
    }

    ignoreClick.current = false;
  };

  const createHandleButtonKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;

    otherHandlers == null
      ? void 0
      : (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null
      ? void 0
      : _otherHandlers$onKeyD.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter') {
      ignoreEnterKeyUp.current = true;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      onOpenChange == null ? void 0 : onOpenChange(true);
    }
  };

  const createHandleListboxKeyUp = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyU;

    otherHandlers == null
      ? void 0
      : (_otherHandlers$onKeyU = otherHandlers.onKeyUp) == null
      ? void 0
      : _otherHandlers$onKeyU.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    const closingKeys = multiple ? ['Escape'] : ['Escape', 'Enter', ' '];

    if (open && !ignoreEnterKeyUp.current && closingKeys.includes(event.key)) {
      var _buttonRef$current;

      buttonRef == null
        ? void 0
        : (_buttonRef$current = buttonRef.current) == null
        ? void 0
        : _buttonRef$current.focus();
    }

    ignoreEnterKeyUp.current = false;
  };

  const createHandleListboxItemClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic2;

    otherHandlers == null
      ? void 0
      : (_otherHandlers$onClic2 = otherHandlers.onClick) == null
      ? void 0
      : _otherHandlers$onClic2.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (!multiple) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };

  const createHandleListboxBlur = (otherHandlers) => (event) => {
    var _otherHandlers$blur;

    otherHandlers == null
      ? void 0
      : (_otherHandlers$blur = otherHandlers.blur) == null
      ? void 0
      : _otherHandlers$blur.call(otherHandlers, event);

    if (!event.defaultPrevented) {
      onOpenChange == null ? void 0 : onOpenChange(false);
    }
  };

  const listboxReducer = (state, action) => {
    const newState = defaultListboxReducer(state, action); // change selection when listbox is closed

    if (
      action.type === ActionTypes.keyDown &&
      !open &&
      (action.event.key === 'ArrowUp' || action.event.key === 'ArrowDown')
    ) {
      return _extends({}, newState, {
        selectedValue: newState.highlightedValue,
      });
    }

    if (
      action.type === ActionTypes.blur ||
      action.type === ActionTypes.setValue ||
      action.type === ActionTypes.optionsChange
    ) {
      return _extends({}, newState, {
        highlightedValue: newState.selectedValue,
      });
    }

    return newState;
  };

  const {
    getRootProps: getButtonRootProps,
    active: buttonActive,
    focusVisible: buttonFocusVisible,
  } = useButton({
    disabled,
    ref: handleButtonRef,
  });
  const selectedOption = react.useMemo(() => {
    var _props$options$find;

    return props.multiple
      ? props.options.filter((o) => value.includes(o.value))
      : (_props$options$find = props.options.find((o) => o.value === value)) !=
        null
      ? _props$options$find
      : null;
  }, [props.multiple, props.options, value]);
  let useListboxParameters;

  if (props.multiple) {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: (o) => {
        var _o$disabled;

        return (_o$disabled = o == null ? void 0 : o.disabled) != null
          ? _o$disabled
          : false;
      },
      optionComparer: (o, v) =>
        (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: true,
      onChange: (newOptions) => {
        setValue(newOptions.map((o) => o.value));
        onChange == null ? void 0 : onChange(newOptions.map((o) => o.value));
      },
      options,
      optionStringifier,
      value: selectedOption,
    };
  } else {
    useListboxParameters = {
      id: listboxId,
      isOptionDisabled: (o) => {
        var _o$disabled2;

        return (_o$disabled2 = o == null ? void 0 : o.disabled) != null
          ? _o$disabled2
          : false;
      },
      optionComparer: (o, v) =>
        (o == null ? void 0 : o.value) === (v == null ? void 0 : v.value),
      listboxRef: handleListboxRef,
      multiple: false,
      onChange: (option) => {
        var _option$value, _option$value2;

        setValue(
          (_option$value = option == null ? void 0 : option.value) != null
            ? _option$value
            : null
        );
        onChange == null
          ? void 0
          : onChange(
              (_option$value2 = option == null ? void 0 : option.value) != null
                ? _option$value2
                : null
            );
      },
      options,
      optionStringifier,
      stateReducer: listboxReducer,
      value: selectedOption,
    };
  }

  const {
    getRootProps: getListboxRootProps,
    getOptionProps: getListboxOptionProps,
    getOptionState,
    highlightedOption,
    selectedOption: listboxSelectedOption,
  } = useListbox(useListboxParameters);

  const getButtonProps = (otherHandlers = {}) => {
    return _extends(
      {},
      getButtonRootProps(
        _extends({}, otherHandlers, {
          onClick: createHandleButtonClick(otherHandlers),
          onMouseDown: createHandleMouseDown(otherHandlers),
          onKeyDown: createHandleButtonKeyDown(otherHandlers),
        })
      ),
      {
        'aria-expanded': open,
        'aria-haspopup': 'listbox',
      }
    );
  };

  const getListboxProps = (otherHandlers = {}) =>
    getListboxRootProps(
      _extends({}, otherHandlers, {
        onBlur: createHandleListboxBlur(otherHandlers),
        onKeyUp: createHandleListboxKeyUp(otherHandlers),
      })
    );

  const getOptionProps = (option, otherHandlers = {}) => {
    return getListboxOptionProps(
      option,
      _extends({}, otherHandlers, {
        onClick: createHandleListboxItemClick(otherHandlers),
      })
    );
  };

  react.useDebugValue({
    selectedOption: listboxSelectedOption,
    open,
    highlightedOption,
  });
  return {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    open,
    value,
  };
}

const SelectUnstyledContext = /*#__PURE__*/ react.createContext(undefined);

function getSelectUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSelectUnstyled', slot);
}
const selectUnstyledClasses = generateUtilityClasses('MuiSelectUnstyled', [
  'root',
  'button',
  'listbox',
  'popper',
  'active',
  'expanded',
  'disabled',
  'focusVisible',
]);

const _excluded$f = [
  'autoFocus',
  'children',
  'className',
  'component',
  'components',
  'componentsProps',
  'defaultListboxOpen',
  'defaultValue',
  'disabled',
  'listboxOpen',
  'onChange',
  'onListboxOpenChange',
  'value',
];

function defaultRenderMultipleValues(selectedOptions) {
  return /*#__PURE__*/ jsxRuntime.jsx(react.Fragment, {
    children: selectedOptions.map((o) => o.label).join(', '),
  });
}

function useUtilityClasses$5(ownerState) {
  const { active, disabled, open, focusVisible } = ownerState;
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      focusVisible && 'focusVisible',
      active && 'active',
      open && 'expanded',
    ],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper'],
  };
  return composeClasses(slots, getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled multi-selection select components.
 */

const MultiSelectUnstyled = /*#__PURE__*/ react.forwardRef(
  function MultiSelectUnstyled(props, ref) {
    var _props$renderValue,
      _ref,
      _components$Listbox,
      _components$Popper,
      _componentsProps$list,
      _componentsProps$list2,
      _componentsProps$root,
      _componentsProps$list3,
      _componentsProps$popp;

    const {
        autoFocus,
        children,
        className,
        component,
        components = {},
        componentsProps = {},
        defaultListboxOpen = false,
        defaultValue = [],
        disabled: disabledProp,
        listboxOpen: listboxOpenProp,
        onChange,
        onListboxOpenChange,
        value: valueProp,
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$f);

    const renderValue =
      (_props$renderValue = props.renderValue) != null
        ? _props$renderValue
        : defaultRenderMultipleValues;
    const [groupedOptions, setGroupedOptions] = react.useState([]);
    const options = react.useMemo(
      () => flattenOptionGroups(groupedOptions),
      [groupedOptions]
    );
    const [listboxOpen, setListboxOpen] = useControlled({
      controlled: listboxOpenProp,
      default: defaultListboxOpen,
      name: 'MultiSelectUnstyled',
      state: 'listboxOpen',
    });
    react.useEffect(() => {
      setGroupedOptions(getOptionsFromChildren(children));
    }, [children]);
    const [buttonDefined, setButtonDefined] = react.useState(false);
    const buttonRef = react.useRef(null);
    const listboxRef = react.useRef(null);
    const Button =
      (_ref = component != null ? component : components.Root) != null
        ? _ref
        : 'button';
    const ListboxRoot =
      (_components$Listbox = components.Listbox) != null
        ? _components$Listbox
        : 'ul';
    const Popper =
      (_components$Popper = components.Popper) != null
        ? _components$Popper
        : PopperUnstyled;

    const handleButtonRefChange = (element) => {
      buttonRef.current = element;

      if (element != null) {
        setButtonDefined(true);
      }
    };

    const handleButtonRef = useForkRef(ref, handleButtonRefChange);
    const handleListboxRef = useForkRef(
      listboxRef,
      (_componentsProps$list = componentsProps.listbox) == null
        ? void 0
        : _componentsProps$list.ref
    );
    react.useEffect(() => {
      if (autoFocus) {
        buttonRef.current.focus();
      }
    }, [autoFocus]);

    const handleOpenChange = (isOpen) => {
      setListboxOpen(isOpen);
      onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
    };

    const {
      buttonActive,
      buttonFocusVisible,
      disabled,
      getButtonProps,
      getListboxProps,
      getOptionProps,
      getOptionState,
      value,
    } = useSelect({
      buttonRef: handleButtonRef,
      defaultValue,
      disabled: disabledProp,
      listboxId:
        (_componentsProps$list2 = componentsProps.listbox) == null
          ? void 0
          : _componentsProps$list2.id,
      listboxRef: handleListboxRef,
      multiple: true,
      onChange,
      onOpenChange: handleOpenChange,
      open: listboxOpen,
      options,
      value: valueProp,
    });

    const ownerState = _extends({}, props, {
      active: buttonActive,
      defaultListboxOpen,
      disabled,
      focusVisible: buttonFocusVisible,
      open: listboxOpen,
      renderValue,
      value,
    });

    const classes = useUtilityClasses$5(ownerState);
    const selectedOptions = react.useMemo(() => {
      if (value == null) {
        return [];
      }

      return options.filter((o) => value.includes(o.value));
    }, [options, value]);
    const buttonProps = appendOwnerState(
      Button,
      _extends({}, getButtonProps(), other, componentsProps.root, {
        className: require$$4(
          className,
          (_componentsProps$root = componentsProps.root) == null
            ? void 0
            : _componentsProps$root.className,
          classes.root
        ),
      }),
      ownerState
    );
    const listboxProps = appendOwnerState(
      ListboxRoot,
      _extends({}, getListboxProps(), componentsProps.listbox, {
        className: require$$4(
          (_componentsProps$list3 = componentsProps.listbox) == null
            ? void 0
            : _componentsProps$list3.className,
          classes.listbox
        ),
      }),
      ownerState
    ); // Popper must be a (non-host) component, therefore ownerState will be present within the props

    const popperProps = appendOwnerState(
      Popper,
      _extends(
        {
          open: listboxOpen,
          anchorEl: buttonRef.current,
          placement: 'bottom-start',
          disablePortal: true,
          role: undefined,
        },
        componentsProps.popper,
        {
          className: require$$4(
            (_componentsProps$popp = componentsProps.popper) == null
              ? void 0
              : _componentsProps$popp.className,
            classes.popper
          ),
        }
      ),
      ownerState
    );
    const context = {
      getOptionProps,
      getOptionState,
      listboxRef,
    };
    return /*#__PURE__*/ jsxRuntime.jsxs(react.Fragment, {
      children: [
        /*#__PURE__*/ jsxRuntime.jsx(
          Button,
          _extends({}, buttonProps, {
            children: renderValue(selectedOptions),
          })
        ),
        buttonDefined &&
          /*#__PURE__*/ jsxRuntime.jsx(
            Popper,
            _extends({}, popperProps, {
              children: /*#__PURE__*/ jsxRuntime.jsx(
                ListboxRoot,
                _extends({}, listboxProps, {
                  children: /*#__PURE__*/ jsxRuntime.jsx(
                    SelectUnstyledContext.Provider,
                    {
                      value: context,
                      children: children,
                    }
                  ),
                })
              ),
            })
          ),
      ],
    });
  }
);

function NoSsr(props) {
  const { children, defer = false, fallback = null } = props;
  const [mountedState, setMountedState] = react.useState(false);
  useEnhancedEffect(() => {
    if (!defer) {
      setMountedState(true);
    }
  }, [defer]);
  react.useEffect(() => {
    if (defer) {
      setMountedState(true);
    }
  }, [defer]); // We need the Fragment here to force react-docgen to recognise NoSsr as a component.

  return /*#__PURE__*/ jsxRuntime.jsx(react.Fragment, {
    children: mountedState ? children : fallback,
  });
}

function getOptionGroupUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOptionGroupUnstyled', slot);
}
const optionGroupUnstyledClasses = generateUtilityClasses(
  'MuiOptionGroupUnstyled',
  ['root', 'label', 'list']
);

const _excluded$g = [
  'className',
  'component',
  'components',
  'disabled',
  'componentsProps',
];

function useUtilityClasses$6(disabled) {
  const slots = {
    root: ['root', disabled && 'disabled'],
    label: ['label'],
    list: ['list'],
  };
  return composeClasses(slots, getOptionGroupUnstyledUtilityClass, {});
}
/**
 * An unstyled option group to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionGroupUnstyled API](https://mui.com/base/api/option-group-unstyled/)
 */

const OptionGroupUnstyled = /*#__PURE__*/ react.forwardRef(
  function OptionGroupUnstyled(props, ref) {
    var _componentsProps$root, _componentsProps$labe, _componentsProps$list;

    const {
        className,
        component,
        components = {},
        disabled = false,
        componentsProps = {},
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$g);

    const Root =
      component || (components == null ? void 0 : components.Root) || 'li';
    const Label = (components == null ? void 0 : components.Label) || 'span';
    const List = (components == null ? void 0 : components.List) || 'ul';
    const classes = useUtilityClasses$6(disabled);

    const rootProps = _extends(
      {},
      other,
      {
        ref,
      },
      componentsProps.root,
      {
        className: require$$4(
          classes.root,
          className,
          (_componentsProps$root = componentsProps.root) == null
            ? void 0
            : _componentsProps$root.className
        ),
      }
    );

    const labelProps = _extends({}, componentsProps.label, {
      className: require$$4(
        classes.label,
        (_componentsProps$labe = componentsProps.label) == null
          ? void 0
          : _componentsProps$labe.className
      ),
    });

    const listProps = _extends({}, componentsProps.list, {
      className: require$$4(
        classes.list,
        (_componentsProps$list = componentsProps.list) == null
          ? void 0
          : _componentsProps$list.className
      ),
    });

    return /*#__PURE__*/ jsxRuntime.jsxs(
      Root,
      _extends({}, rootProps, {
        children: [
          /*#__PURE__*/ jsxRuntime.jsx(
            Label,
            _extends({}, labelProps, {
              children: props.label,
            })
          ),
          /*#__PURE__*/ jsxRuntime.jsx(
            List,
            _extends({}, listProps, {
              children: props.children,
            })
          ),
        ],
      })
    );
  }
);

function getOptionUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiOptionUnstyled', slot);
}
const optionUnstyledClasses = generateUtilityClasses('MuiOptionUnstyled', [
  'root',
  'disabled',
  'selected',
  'highlighted',
]);

const _excluded$h = [
  'children',
  'className',
  'component',
  'components',
  'componentsProps',
  'disabled',
  'value',
  'label',
];

function useUtilityClasses$7(ownerState) {
  const { disabled, highlighted, selected } = ownerState;
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      highlighted && 'highlighted',
      selected && 'selected',
    ],
  };
  return composeClasses(slots, getOptionUnstyledUtilityClass, {});
}
/**
 * An unstyled option to be used within a SelectUnstyled.
 */

const OptionUnstyled = /*#__PURE__*/ react.forwardRef(function OptionUnstyled(
  props,
  ref
) {
  var _componentsProps$root;

  const {
      children,
      className,
      component,
      components = {},
      componentsProps = {},
      disabled,
      value,
      label,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$h);

  const selectContext = react.useContext(SelectUnstyledContext);

  if (!selectContext) {
    throw new Error('OptionUnstyled must be used within a SelectUnstyled');
  }

  const Root = component || components.Root || 'li';
  const selectOption = {
    value,
    label: label || children,
    disabled,
  };
  const optionState = selectContext.getOptionState(selectOption);
  const optionProps = selectContext.getOptionProps(selectOption);
  const listboxRef = selectContext.listboxRef;

  const ownerState = _extends({}, props, optionState);

  const optionRef = react.useRef(null);
  const handleRef = useForkRef(ref, optionRef);
  react.useEffect(() => {
    // Scroll to the currently highlighted option
    if (optionState.highlighted) {
      if (!listboxRef.current || !optionRef.current) {
        return;
      }

      const listboxClientRect = listboxRef.current.getBoundingClientRect();
      const optionClientRect = optionRef.current.getBoundingClientRect();

      if (optionClientRect.top < listboxClientRect.top) {
        listboxRef.current.scrollTop -=
          listboxClientRect.top - optionClientRect.top;
      } else if (optionClientRect.bottom > listboxClientRect.bottom) {
        listboxRef.current.scrollTop +=
          optionClientRect.bottom - listboxClientRect.bottom;
      }
    }
  }, [optionState.highlighted, listboxRef]);
  const classes = useUtilityClasses$7(ownerState);
  const rootProps = appendOwnerState(
    Root,
    _extends({}, other, optionProps, componentsProps.root, {
      ref: handleRef,
      className: require$$4(
        classes.root,
        className,
        (_componentsProps$root = componentsProps.root) == null
          ? void 0
          : _componentsProps$root.className
      ),
    }),
    ownerState
  );
  return /*#__PURE__*/ jsxRuntime.jsx(
    Root,
    _extends({}, rootProps, {
      children: children,
    })
  );
});
/**
 * An unstyled option to be used within a SelectUnstyled.
 *
 * Demos:
 *
 * - [Select](https://mui.com/base/react-select/)
 *
 * API:
 *
 * - [OptionUnstyled API](https://mui.com/base/api/option-unstyled/)
 */

var OptionUnstyled$1 = /*#__PURE__*/ react.memo(OptionUnstyled);

const _excluded$i = [
  'autoFocus',
  'children',
  'className',
  'component',
  'components',
  'componentsProps',
  'defaultValue',
  'defaultListboxOpen',
  'disabled',
  'listboxOpen',
  'onChange',
  'onListboxOpenChange',
  'renderValue',
  'value',
];

function defaultRenderSingleValue(selectedOption) {
  var _selectedOption$label;

  return (_selectedOption$label =
    selectedOption == null ? void 0 : selectedOption.label) != null
    ? _selectedOption$label
    : '';
}

function useUtilityClasses$8(ownerState) {
  const { active, disabled, open, focusVisible } = ownerState;
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      focusVisible && 'focusVisible',
      active && 'active',
      open && 'expanded',
    ],
    listbox: ['listbox', disabled && 'disabled'],
    popper: ['popper'],
  };
  return composeClasses(slots, getSelectUnstyledUtilityClass, {});
}
/**
 * The foundation for building custom-styled select components.
 */

const SelectUnstyled = /*#__PURE__*/ react.forwardRef(function SelectUnstyled(
  props,
  ref
) {
  var _ref,
    _components$Listbox,
    _components$Popper,
    _componentsProps$list,
    _componentsProps$list2,
    _componentsProps$root,
    _componentsProps$list3,
    _componentsProps$popp;

  const {
      autoFocus,
      children,
      className,
      component,
      components = {},
      componentsProps = {},
      defaultValue,
      defaultListboxOpen = false,
      disabled: disabledProp,
      listboxOpen: listboxOpenProp,
      onChange,
      onListboxOpenChange,
      renderValue: renderValueProp,
      value: valueProp,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$i);

  const renderValue =
    renderValueProp != null ? renderValueProp : defaultRenderSingleValue;
  const [groupedOptions, setGroupedOptions] = react.useState([]);
  const options = react.useMemo(
    () => flattenOptionGroups(groupedOptions),
    [groupedOptions]
  );
  const [listboxOpen, setListboxOpen] = useControlled({
    controlled: listboxOpenProp,
    default: defaultListboxOpen,
    name: 'SelectUnstyled',
    state: 'listboxOpen',
  });
  react.useEffect(() => {
    setGroupedOptions(getOptionsFromChildren(children));
  }, [children]);
  const [buttonDefined, setButtonDefined] = react.useState(false);
  const buttonRef = react.useRef(null);
  const listboxRef = react.useRef(null);
  const Button =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'button';
  const ListboxRoot =
    (_components$Listbox = components.Listbox) != null
      ? _components$Listbox
      : 'ul';
  const Popper =
    (_components$Popper = components.Popper) != null
      ? _components$Popper
      : PopperUnstyled;

  const handleButtonRefChange = (element) => {
    buttonRef.current = element;

    if (element != null) {
      setButtonDefined(true);
    }
  };

  const handleButtonRef = useForkRef(ref, handleButtonRefChange);
  const handleListboxRef = useForkRef(
    listboxRef,
    (_componentsProps$list = componentsProps.listbox) == null
      ? void 0
      : _componentsProps$list.ref
  );
  react.useEffect(() => {
    if (autoFocus) {
      buttonRef.current.focus();
    }
  }, [autoFocus]);

  const handleOpenChange = (isOpen) => {
    setListboxOpen(isOpen);
    onListboxOpenChange == null ? void 0 : onListboxOpenChange(isOpen);
  };

  const {
    buttonActive,
    buttonFocusVisible,
    disabled,
    getButtonProps,
    getListboxProps,
    getOptionProps,
    getOptionState,
    value,
  } = useSelect({
    buttonRef: handleButtonRef,
    defaultValue,
    disabled: disabledProp,
    listboxId:
      (_componentsProps$list2 = componentsProps.listbox) == null
        ? void 0
        : _componentsProps$list2.id,
    listboxRef: handleListboxRef,
    multiple: false,
    onChange,
    onOpenChange: handleOpenChange,
    open: listboxOpen,
    options,
    value: valueProp,
  });

  const ownerState = _extends({}, props, {
    active: buttonActive,
    defaultListboxOpen,
    disabled,
    focusVisible: buttonFocusVisible,
    open: listboxOpen,
    renderValue,
    value,
  });

  const classes = useUtilityClasses$8(ownerState);
  const selectedOptions = react.useMemo(() => {
    return options.find((o) => value === o.value);
  }, [options, value]);
  const buttonProps = appendOwnerState(
    Button,
    _extends({}, getButtonProps(), other, componentsProps.root, {
      className: require$$4(
        className,
        (_componentsProps$root = componentsProps.root) == null
          ? void 0
          : _componentsProps$root.className,
        classes.root
      ),
    }),
    ownerState
  );
  const listboxProps = appendOwnerState(
    ListboxRoot,
    _extends({}, getListboxProps(), componentsProps.listbox, {
      className: require$$4(
        (_componentsProps$list3 = componentsProps.listbox) == null
          ? void 0
          : _componentsProps$list3.className,
        classes.listbox
      ),
    }),
    ownerState
  ); // Popper must be a (non-host) component, therefore ownerState will be present within the props

  const popperProps = appendOwnerState(
    Popper,
    _extends(
      {
        open: listboxOpen,
        anchorEl: buttonRef.current,
        placement: 'bottom-start',
        disablePortal: true,
        role: undefined,
      },
      componentsProps.popper,
      {
        className: require$$4(
          (_componentsProps$popp = componentsProps.popper) == null
            ? void 0
            : _componentsProps$popp.className,
          classes.popper
        ),
      }
    ),
    ownerState
  );
  const context = {
    getOptionProps,
    getOptionState,
    listboxRef,
  };
  return /*#__PURE__*/ jsxRuntime.jsxs(react.Fragment, {
    children: [
      /*#__PURE__*/ jsxRuntime.jsx(
        Button,
        _extends({}, buttonProps, {
          children: renderValue(selectedOptions),
        })
      ),
      buttonDefined &&
        /*#__PURE__*/ jsxRuntime.jsx(
          Popper,
          _extends({}, popperProps, {
            children: /*#__PURE__*/ jsxRuntime.jsx(
              ListboxRoot,
              _extends({}, listboxProps, {
                children: /*#__PURE__*/ jsxRuntime.jsx(
                  SelectUnstyledContext.Provider,
                  {
                    value: context,
                    children: children,
                  }
                ),
              })
            ),
          })
        ),
    ],
  });
});

function getSliderUtilityClass(slot) {
  return generateUtilityClass('MuiSlider', slot);
}
const sliderUnstyledClasses = generateUtilityClasses('MuiSlider', [
  'root',
  'active',
  'focusVisible',
  'disabled',
  'dragging',
  'marked',
  'vertical',
  'trackInverted',
  'trackFalse',
  'rail',
  'track',
  'mark',
  'markActive',
  'markLabel',
  'markLabelActive',
  'thumb',
  'valueLabel',
  'valueLabelOpen',
  'valueLabelCircle',
  'valueLabelLabel',
]);

const useValueLabelClasses = (props) => {
  const { open } = props;
  const utilityClasses = {
    offset: require$$4(open && sliderUnstyledClasses.valueLabelOpen),
    circle: sliderUnstyledClasses.valueLabelCircle,
    label: sliderUnstyledClasses.valueLabelLabel,
  };
  return utilityClasses;
};
/**
 * @ignore - internal component.
 */

function SliderValueLabelUnstyled(props) {
  const { children, className, value, theme } = props;
  const classes = useValueLabelClasses(props);
  return /*#__PURE__*/ react.cloneElement(
    children,
    {
      className: require$$4(children.props.className),
    },
    /*#__PURE__*/ jsxRuntime.jsxs(react.Fragment, {
      children: [
        children.props.children,
        /*#__PURE__*/ jsxRuntime.jsx('span', {
          className: require$$4(classes.offset, className),
          theme: theme,
          'aria-hidden': true,
          children: /*#__PURE__*/ jsxRuntime.jsx('span', {
            className: classes.circle,
            children: /*#__PURE__*/ jsxRuntime.jsx('span', {
              className: classes.label,
              children: value,
            }),
          }),
        }),
      ],
    })
  );
}

const INTENTIONAL_DRAG_COUNT_THRESHOLD = 2;

function asc(a, b) {
  return a - b;
}

function clamp(value, min, max) {
  if (value == null) {
    return min;
  }

  return Math.min(Math.max(min, value), max);
}

function findClosest(values, currentValue) {
  var _values$reduce;

  const { index: closestIndex } =
    (_values$reduce = values.reduce((acc, value, index) => {
      const distance = Math.abs(currentValue - value);

      if (
        acc === null ||
        distance < acc.distance ||
        distance === acc.distance
      ) {
        return {
          distance,
          index,
        };
      }

      return acc;
    }, null)) != null
      ? _values$reduce
      : {};
  return closestIndex;
}

function trackFinger(event, touchId) {
  // The event is TouchEvent
  if (touchId.current !== undefined && event.changedTouches) {
    const touchEvent = event;

    for (let i = 0; i < touchEvent.changedTouches.length; i += 1) {
      const touch = touchEvent.changedTouches[i];

      if (touch.identifier === touchId.current) {
        return {
          x: touch.clientX,
          y: touch.clientY,
        };
      }
    }

    return false;
  } // The event is MouseEvent

  return {
    x: event.clientX,
    y: event.clientY,
  };
}

function valueToPercent(value, min, max) {
  return ((value - min) * 100) / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function getDecimalPrecision(num) {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (
      (matissaDecimalPart ? matissaDecimalPart.length : 0) +
      parseInt(parts[1], 10)
    );
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
}

function roundValueToStep(value, step, min) {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
}

function setValueIndex({ values, newValue, index }) {
  const output = values.slice();
  output[index] = newValue;
  return output.sort(asc);
}

function focusThumb({ sliderRef, activeIndex, setActive }) {
  var _sliderRef$current, _doc$activeElement;

  const doc = ownerDocument(sliderRef.current);

  if (
    !(
      (_sliderRef$current = sliderRef.current) != null &&
      _sliderRef$current.contains(doc.activeElement)
    ) ||
    Number(
      doc == null
        ? void 0
        : (_doc$activeElement = doc.activeElement) == null
        ? void 0
        : _doc$activeElement.getAttribute('data-index')
    ) !== activeIndex
  ) {
    var _sliderRef$current2;

    (_sliderRef$current2 = sliderRef.current) == null
      ? void 0
      : _sliderRef$current2
          .querySelector(`[type="range"][data-index="${activeIndex}"]`)
          .focus();
  }

  if (setActive) {
    setActive(activeIndex);
  }
}

const axisProps = {
  horizontal: {
    offset: (percent) => ({
      left: `${percent}%`,
    }),
    leap: (percent) => ({
      width: `${percent}%`,
    }),
  },
  'horizontal-reverse': {
    offset: (percent) => ({
      right: `${percent}%`,
    }),
    leap: (percent) => ({
      width: `${percent}%`,
    }),
  },
  vertical: {
    offset: (percent) => ({
      bottom: `${percent}%`,
    }),
    leap: (percent) => ({
      height: `${percent}%`,
    }),
  },
};
const Identity = (x) => x; // TODO: remove support for Safari < 13.
// https://caniuse.com/#search=touch-action
//
// Safari, on iOS, supports touch action since v13.
// Over 80% of the iOS phones are compatible
// in August 2020.
// Utilizing the CSS.supports method to check if touch-action is supported.
// Since CSS.supports is supported on all but Edge@12 and IE and touch-action
// is supported on both Edge@12 and IE if CSS.supports is not available that means that
// touch-action will be supported

let cachedSupportsTouchActionNone;

function doesSupportTouchActionNone() {
  if (cachedSupportsTouchActionNone === undefined) {
    if (typeof CSS !== 'undefined' && typeof CSS.supports === 'function') {
      cachedSupportsTouchActionNone = CSS.supports('touch-action', 'none');
    } else {
      cachedSupportsTouchActionNone = true;
    }
  }

  return cachedSupportsTouchActionNone;
}

function useSlider(parameters) {
  const {
    'aria-labelledby': ariaLabelledby,
    defaultValue,
    disabled = false,
    disableSwap = false,
    isRtl = false,
    marks: marksProp = false,
    max = 100,
    min = 0,
    name,
    onChange,
    onChangeCommitted,
    orientation = 'horizontal',
    ref,
    scale = Identity,
    step = 1,
    tabIndex,
    value: valueProp,
  } = parameters;
  const touchId = react.useRef(); // We can't use the :active browser pseudo-classes.
  // - The active state isn't triggered when clicking on the rail.
  // - The active state isn't transferred when inversing a range slider.

  const [active, setActive] = react.useState(-1);
  const [open, setOpen] = react.useState(-1);
  const [dragging, setDragging] = react.useState(false);
  const moveCount = react.useRef(0);
  const [valueDerived, setValueState] = useControlled({
    controlled: valueProp,
    default: defaultValue != null ? defaultValue : min,
    name: 'Slider',
  });

  const handleChange =
    onChange &&
    ((event, value, thumbIndex) => {
      // Redefine target to allow name and value to be read.
      // This allows seamless integration with the most popular form libraries.
      // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
      // Clone the event to not override `target` of the original event.
      const nativeEvent = event.nativeEvent || event; // @ts-ignore The nativeEvent is function, not object

      const clonedEvent = new nativeEvent.constructor(
        nativeEvent.type,
        nativeEvent
      );
      Object.defineProperty(clonedEvent, 'target', {
        writable: true,
        value: {
          value,
          name,
        },
      });
      onChange(clonedEvent, value, thumbIndex);
    });

  const range = Array.isArray(valueDerived);
  let values = range ? valueDerived.slice().sort(asc) : [valueDerived];
  values = values.map((value) => clamp(value, min, max));
  const marks =
    marksProp === true && step !== null
      ? [...Array(Math.floor((max - min) / step) + 1)].map((_, index) => ({
          value: min + step * index,
        }))
      : marksProp || [];
  const marksValues = marks.map((mark) => mark.value);
  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(-1);
  const sliderRef = react.useRef();
  const handleFocusRef = useForkRef(focusVisibleRef, sliderRef);
  const handleRef = useForkRef(ref, handleFocusRef);

  const createHandleHiddenInputFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;

    const index = Number(event.currentTarget.getAttribute('data-index'));
    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(index);
    }

    setOpen(index);
    otherHandlers == null
      ? void 0
      : (_otherHandlers$onFocu = otherHandlers.onFocus) == null
      ? void 0
      : _otherHandlers$onFocu.call(otherHandlers, event);
  };

  const createHandleHiddenInputBlur = (otherHandlers) => (event) => {
    var _otherHandlers$onBlur;

    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(-1);
    }

    setOpen(-1);
    otherHandlers == null
      ? void 0
      : (_otherHandlers$onBlur = otherHandlers.onBlur) == null
      ? void 0
      : _otherHandlers$onBlur.call(otherHandlers, event);
  };

  useEnhancedEffect(() => {
    if (disabled && sliderRef.current.contains(document.activeElement)) {
      var _document$activeEleme;

      // This is necessary because Firefox and Safari will keep focus
      // on a disabled element:
      // https://codesandbox.io/s/mui-pr-22247-forked-h151h?file=/src/App.js
      // @ts-ignore
      (_document$activeEleme = document.activeElement) == null
        ? void 0
        : _document$activeEleme.blur();
    }
  }, [disabled]);

  if (disabled && active !== -1) {
    setActive(-1);
  }

  if (disabled && focusVisible !== -1) {
    setFocusVisible(-1);
  }

  const createHandleHiddenInputChange = (otherHandlers) => (event) => {
    var _otherHandlers$onChan;

    (_otherHandlers$onChan = otherHandlers.onChange) == null
      ? void 0
      : _otherHandlers$onChan.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    const value = values[index];
    const marksIndex = marksValues.indexOf(value); // @ts-ignore

    let newValue = event.target.valueAsNumber;

    if (marks && step == null) {
      newValue =
        newValue < value
          ? marksValues[marksIndex - 1]
          : marksValues[marksIndex + 1];
    }

    newValue = clamp(newValue, min, max);

    if (marks && step == null) {
      const currentMarkIndex = marksValues.indexOf(values[index]);
      newValue =
        newValue < values[index]
          ? marksValues[currentMarkIndex - 1]
          : marksValues[currentMarkIndex + 1];
    }

    if (range) {
      // Bound the new value to the thumb's neighbours.
      if (disableSwap) {
        newValue = clamp(
          newValue,
          values[index - 1] || -Infinity,
          values[index + 1] || Infinity
        );
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values,
        newValue,
        index,
      });
      let activeIndex = index; // Potentially swap the index if needed.

      if (!disableSwap) {
        activeIndex = newValue.indexOf(previousValue);
      }

      focusThumb({
        sliderRef,
        activeIndex,
      });
    }

    setValueState(newValue);
    setFocusVisible(index);

    if (handleChange) {
      handleChange(event, newValue, index);
    }

    if (onChangeCommitted) {
      onChangeCommitted(event, newValue);
    }
  };

  const previousIndex = react.useRef();
  let axis = orientation;

  if (isRtl && orientation === 'horizontal') {
    axis += '-reverse';
  }

  const getFingerNewValue = ({ finger, move = false, values: values2 }) => {
    const { current: slider } = sliderRef;
    const { width, height, bottom, left } = slider.getBoundingClientRect();
    let percent;

    if (axis.indexOf('vertical') === 0) {
      percent = (bottom - finger.y) / height;
    } else {
      percent = (finger.x - left) / width;
    }

    if (axis.indexOf('-reverse') !== -1) {
      percent = 1 - percent;
    }

    let newValue;
    newValue = percentToValue(percent, min, max);

    if (step) {
      newValue = roundValueToStep(newValue, step, min);
    } else {
      const closestIndex = findClosest(marksValues, newValue);
      newValue = marksValues[closestIndex];
    }

    newValue = clamp(newValue, min, max);
    let activeIndex = 0;

    if (range) {
      if (!move) {
        activeIndex = findClosest(values2, newValue);
      } else {
        activeIndex = previousIndex.current;
      } // Bound the new value to the thumb's neighbours.

      if (disableSwap) {
        newValue = clamp(
          newValue,
          values2[activeIndex - 1] || -Infinity,
          values2[activeIndex + 1] || Infinity
        );
      }

      const previousValue = newValue;
      newValue = setValueIndex({
        values: values2,
        newValue,
        index: activeIndex,
      }); // Potentially swap the index if needed.

      if (!(disableSwap && move)) {
        activeIndex = newValue.indexOf(previousValue);
        previousIndex.current = activeIndex;
      }
    }

    return {
      newValue,
      activeIndex,
    };
  };

  const handleTouchMove = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);

    if (!finger) {
      return;
    }

    moveCount.current += 1; // Cancel move in case some other element consumed a mouseup event and it was not fired.
    // @ts-ignore buttons doesn't not exists on touch event

    if (nativeEvent.type === 'mousemove' && nativeEvent.buttons === 0) {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleTouchEnd(nativeEvent);
      return;
    }

    const { newValue, activeIndex } = getFingerNewValue({
      finger,
      move: true,
      values,
    });
    focusThumb({
      sliderRef,
      activeIndex,
      setActive,
    });
    setValueState(newValue);

    if (!dragging && moveCount.current > INTENTIONAL_DRAG_COUNT_THRESHOLD) {
      setDragging(true);
    }

    if (handleChange) {
      handleChange(nativeEvent, newValue, activeIndex);
    }
  });
  const handleTouchEnd = useEventCallback((nativeEvent) => {
    const finger = trackFinger(nativeEvent, touchId);
    setDragging(false);

    if (!finger) {
      return;
    }

    const { newValue } = getFingerNewValue({
      finger,
      move: true,
      values,
    });
    setActive(-1);

    if (nativeEvent.type === 'touchend') {
      setOpen(-1);
    }

    if (onChangeCommitted) {
      onChangeCommitted(nativeEvent, newValue);
    }

    touchId.current = undefined; // eslint-disable-next-line @typescript-eslint/no-use-before-define

    stopListening();
  });
  const handleTouchStart = useEventCallback((nativeEvent) => {
    if (disabled) {
      return;
    } // If touch-action: none; is not supported we need to prevent the scroll manually.

    if (!doesSupportTouchActionNone()) {
      nativeEvent.preventDefault();
    }

    const touch = nativeEvent.changedTouches[0];

    if (touch != null) {
      // A number that uniquely identifies the current finger in the touch session.
      touchId.current = touch.identifier;
    }

    const finger = trackFinger(nativeEvent, touchId);

    if (finger !== false) {
      const { newValue, activeIndex } = getFingerNewValue({
        finger,
        values,
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive,
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(nativeEvent, newValue, activeIndex);
      }
    }

    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('touchmove', handleTouchMove);
    doc.addEventListener('touchend', handleTouchEnd);
  });
  const stopListening = react.useCallback(() => {
    const doc = ownerDocument(sliderRef.current);
    doc.removeEventListener('mousemove', handleTouchMove);
    doc.removeEventListener('mouseup', handleTouchEnd);
    doc.removeEventListener('touchmove', handleTouchMove);
    doc.removeEventListener('touchend', handleTouchEnd);
  }, [handleTouchEnd, handleTouchMove]);
  react.useEffect(() => {
    const { current: slider } = sliderRef;
    slider.addEventListener('touchstart', handleTouchStart, {
      passive: doesSupportTouchActionNone(),
    });
    return () => {
      // @ts-ignore
      slider.removeEventListener('touchstart', handleTouchStart, {
        passive: doesSupportTouchActionNone(),
      });
      stopListening();
    };
  }, [stopListening, handleTouchStart]);
  react.useEffect(() => {
    if (disabled) {
      stopListening();
    }
  }, [disabled, stopListening]);

  const createHandleMouseDown = (otherHandlers) => (event) => {
    var _otherHandlers$onMous;

    (_otherHandlers$onMous = otherHandlers.onMouseDown) == null
      ? void 0
      : _otherHandlers$onMous.call(otherHandlers, event);

    if (disabled) {
      return;
    }

    if (event.defaultPrevented) {
      return;
    } // Only handle left clicks

    if (event.button !== 0) {
      return;
    } // Avoid text selection

    event.preventDefault();
    const finger = trackFinger(event, touchId);

    if (finger !== false) {
      const { newValue, activeIndex } = getFingerNewValue({
        finger,
        values,
      });
      focusThumb({
        sliderRef,
        activeIndex,
        setActive,
      });
      setValueState(newValue);

      if (handleChange) {
        handleChange(event, newValue, activeIndex);
      }
    }

    moveCount.current = 0;
    const doc = ownerDocument(sliderRef.current);
    doc.addEventListener('mousemove', handleTouchMove);
    doc.addEventListener('mouseup', handleTouchEnd);
  };

  const trackOffset = valueToPercent(range ? values[0] : min, min, max);
  const trackLeap =
    valueToPercent(values[values.length - 1], min, max) - trackOffset;

  const getRootProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseDown: createHandleMouseDown(otherHandlers || {}),
    };

    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);

    return _extends(
      {
        ref: handleRef,
      },
      mergedEventHandlers
    );
  };

  const createHandleMouseOver = (otherHandlers) => (event) => {
    var _otherHandlers$onMous2;

    (_otherHandlers$onMous2 = otherHandlers.onMouseOver) == null
      ? void 0
      : _otherHandlers$onMous2.call(otherHandlers, event);
    const index = Number(event.currentTarget.getAttribute('data-index'));
    setOpen(index);
  };

  const createHandleMouseLeave = (otherHandlers) => (event) => {
    var _otherHandlers$onMous3;

    (_otherHandlers$onMous3 = otherHandlers.onMouseLeave) == null
      ? void 0
      : _otherHandlers$onMous3.call(otherHandlers, event);
    setOpen(-1);
  };

  const getThumbProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onMouseOver: createHandleMouseOver(otherHandlers || {}),
      onMouseLeave: createHandleMouseLeave(otherHandlers || {}),
    };

    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);

    return _extends({}, mergedEventHandlers);
  };

  const getHiddenInputProps = (otherHandlers = {}) => {
    const ownEventHandlers = {
      onChange: createHandleHiddenInputChange(otherHandlers || {}),
      onFocus: createHandleHiddenInputFocus(otherHandlers || {}),
      onBlur: createHandleHiddenInputBlur(otherHandlers || {}),
    };

    const mergedEventHandlers = _extends({}, otherHandlers, ownEventHandlers);

    return _extends(
      {
        tabIndex,
        'aria-labelledby': ariaLabelledby,
        'aria-orientation': orientation,
        'aria-valuemax': scale(max),
        'aria-valuemin': scale(min),
        name,
        type: 'range',
        min: parameters.min,
        max: parameters.max,
        step: parameters.step,
        disabled,
      },
      mergedEventHandlers,
      {
        style: _extends({}, visuallyHidden, {
          direction: isRtl ? 'rtl' : 'ltr',
          // So that VoiceOver's focus indicator matches the thumb's dimensions
          width: '100%',
          height: '100%',
        }),
      }
    );
  };

  return {
    active,
    axis: axis,
    axisProps,
    dragging,
    focusVisible,
    getHiddenInputProps,
    getRootProps,
    getThumbProps,
    marks: marks,
    open,
    range,
    trackLeap,
    trackOffset,
    values,
  };
}

const _excluded$j = [
  'aria-label',
  'aria-valuetext',
  'className',
  'component',
  'classes',
  'disableSwap',
  'disabled',
  'getAriaLabel',
  'getAriaValueText',
  'marks',
  'max',
  'min',
  'name',
  'onChange',
  'onChangeCommitted',
  'onMouseDown',
  'orientation',
  'scale',
  'step',
  'tabIndex',
  'track',
  'value',
  'valueLabelDisplay',
  'valueLabelFormat',
  'isRtl',
  'components',
  'componentsProps',
];

const Identity$1 = (x) => x;

const useUtilityClasses$9 = (ownerState) => {
  const { disabled, dragging, marked, orientation, track, classes } =
    ownerState;
  const slots = {
    root: [
      'root',
      disabled && 'disabled',
      dragging && 'dragging',
      marked && 'marked',
      orientation === 'vertical' && 'vertical',
      track === 'inverted' && 'trackInverted',
      track === false && 'trackFalse',
    ],
    rail: ['rail'],
    track: ['track'],
    mark: ['mark'],
    markActive: ['markActive'],
    markLabel: ['markLabel'],
    markLabelActive: ['markLabelActive'],
    valueLabel: ['valueLabel'],
    thumb: ['thumb', disabled && 'disabled'],
    active: ['active'],
    disabled: ['disabled'],
    focusVisible: ['focusVisible'],
  };
  return composeClasses(slots, getSliderUtilityClass, classes);
};

const Forward = ({ children }) => children;

const SliderUnstyled = /*#__PURE__*/ react.forwardRef(function SliderUnstyled(
  props,
  ref
) {
  var _ref,
    _components$Rail,
    _components$Track,
    _components$Thumb,
    _components$ValueLabe,
    _components$Mark,
    _components$MarkLabel;

  const {
      'aria-label': ariaLabel,
      'aria-valuetext': ariaValuetext,
      className,
      component,
      classes: classesProp,
      disableSwap = false,
      disabled = false,
      getAriaLabel,
      getAriaValueText,
      marks: marksProp = false,
      max = 100,
      min = 0,
      onMouseDown,
      orientation = 'horizontal',
      scale = Identity$1,
      step = 1,
      track = 'normal',
      valueLabelDisplay = 'off',
      valueLabelFormat = Identity$1,
      isRtl = false,
      components = {},
      componentsProps = {},
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$j); // all props with defaults
  // consider extracting to hook an reusing the lint rule for the varints

  const ownerState = _extends({}, props, {
    marks: marksProp,
    classes: classesProp,
    disabled,
    isRtl,
    max,
    min,
    orientation,
    scale,
    step,
    track,
    valueLabelDisplay,
    valueLabelFormat,
  });

  const {
    axisProps,
    getRootProps,
    getHiddenInputProps,
    getThumbProps,
    open,
    active,
    axis,
    range,
    focusVisible,
    dragging,
    marks,
    values,
    trackOffset,
    trackLeap,
  } = useSlider(
    _extends({}, ownerState, {
      ref,
    })
  );
  ownerState.marked = marks.length > 0 && marks.some((mark) => mark.label);
  ownerState.dragging = dragging;
  const Root =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'span';
  const rootProps = appendOwnerState(
    Root,
    _extends({}, other, componentsProps.root),
    ownerState
  );
  const Rail =
    (_components$Rail = components.Rail) != null ? _components$Rail : 'span';
  const railProps = appendOwnerState(Rail, componentsProps.rail, ownerState);
  const Track =
    (_components$Track = components.Track) != null ? _components$Track : 'span';
  const trackProps = appendOwnerState(Track, componentsProps.track, ownerState);

  const trackStyle = _extends(
    {},
    axisProps[axis].offset(trackOffset),
    axisProps[axis].leap(trackLeap)
  );

  const Thumb =
    (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  const thumbProps = appendOwnerState(Thumb, componentsProps.thumb, ownerState);
  const ValueLabel =
    (_components$ValueLabe = components.ValueLabel) != null
      ? _components$ValueLabe
      : SliderValueLabelUnstyled;
  const valueLabelProps = appendOwnerState(
    ValueLabel,
    componentsProps.valueLabel,
    ownerState
  );
  const Mark =
    (_components$Mark = components.Mark) != null ? _components$Mark : 'span';
  const markProps = appendOwnerState(Mark, componentsProps.mark, ownerState);
  const MarkLabel =
    (_components$MarkLabel = components.MarkLabel) != null
      ? _components$MarkLabel
      : 'span';
  const markLabelProps = appendOwnerState(
    MarkLabel,
    componentsProps.markLabel,
    ownerState
  );
  const Input = components.Input || 'input';
  const inputProps = appendOwnerState(Input, componentsProps.input, ownerState);
  const hiddenInputProps = getHiddenInputProps();
  const classes = useUtilityClasses$9(ownerState);
  return /*#__PURE__*/ jsxRuntime.jsxs(
    Root,
    _extends(
      {},
      rootProps,
      getRootProps({
        onMouseDown,
      }),
      {
        className: require$$4(classes.root, rootProps.className, className),
        children: [
          /*#__PURE__*/ jsxRuntime.jsx(
            Rail,
            _extends({}, railProps, {
              className: require$$4(classes.rail, railProps.className),
            })
          ),
          /*#__PURE__*/ jsxRuntime.jsx(
            Track,
            _extends({}, trackProps, {
              className: require$$4(classes.track, trackProps.className),
              style: _extends({}, trackStyle, trackProps.style),
            })
          ),
          marks
            .filter((mark) => mark.value >= min && mark.value <= max)
            .map((mark, index) => {
              const percent = valueToPercent(mark.value, min, max);
              const style = axisProps[axis].offset(percent);
              let markActive;

              if (track === false) {
                markActive = values.indexOf(mark.value) !== -1;
              } else {
                markActive =
                  (track === 'normal' &&
                    (range
                      ? mark.value >= values[0] &&
                        mark.value <= values[values.length - 1]
                      : mark.value <= values[0])) ||
                  (track === 'inverted' &&
                    (range
                      ? mark.value <= values[0] ||
                        mark.value >= values[values.length - 1]
                      : mark.value >= values[0]));
              }

              return /*#__PURE__*/ jsxRuntime.jsxs(
                react.Fragment,
                {
                  children: [
                    /*#__PURE__*/ jsxRuntime.jsx(
                      Mark,
                      _extends(
                        {
                          'data-index': index,
                        },
                        markProps,
                        !isHostComponent(Mark) && {
                          markActive,
                        },
                        {
                          style: _extends({}, style, markProps.style),
                          className: require$$4(
                            classes.mark,
                            markProps.className,
                            markActive && classes.markActive
                          ),
                        }
                      )
                    ),
                    mark.label != null
                      ? /*#__PURE__*/ jsxRuntime.jsx(
                          MarkLabel,
                          _extends(
                            {
                              'aria-hidden': true,
                              'data-index': index,
                            },
                            markLabelProps,
                            !isHostComponent(MarkLabel) && {
                              markLabelActive: markActive,
                            },
                            {
                              style: _extends({}, style, markLabelProps.style),
                              className: require$$4(
                                classes.markLabel,
                                markLabelProps.className,
                                markActive && classes.markLabelActive
                              ),
                              children: mark.label,
                            }
                          )
                        )
                      : null,
                  ],
                },
                mark.value
              );
            }),
          values.map((value, index) => {
            const percent = valueToPercent(value, min, max);
            const style = axisProps[axis].offset(percent);
            const ValueLabelComponent =
              valueLabelDisplay === 'off' ? Forward : ValueLabel;
            return /*#__PURE__*/ jsxRuntime.jsx(
              react.Fragment,
              {
                children: /*#__PURE__*/ jsxRuntime.jsx(
                  ValueLabelComponent,
                  _extends(
                    {},
                    !isHostComponent(ValueLabelComponent) && {
                      valueLabelFormat,
                      valueLabelDisplay,
                      value:
                        typeof valueLabelFormat === 'function'
                          ? valueLabelFormat(scale(value), index)
                          : valueLabelFormat,
                      index,
                      open:
                        open === index ||
                        active === index ||
                        valueLabelDisplay === 'on',
                      disabled,
                    },
                    valueLabelProps,
                    {
                      className: require$$4(
                        classes.valueLabel,
                        valueLabelProps.className
                      ),
                      children: /*#__PURE__*/ jsxRuntime.jsx(
                        Thumb,
                        _extends(
                          {
                            'data-index': index,
                          },
                          thumbProps,
                          getThumbProps(),
                          {
                            className: require$$4(
                              classes.thumb,
                              thumbProps.className,
                              active === index && classes.active,
                              focusVisible === index && classes.focusVisible
                            ),
                            style: _extends(
                              {},
                              style,
                              {
                                pointerEvents:
                                  disableSwap && active !== index
                                    ? 'none'
                                    : undefined,
                              },
                              thumbProps.style
                            ),
                            children: /*#__PURE__*/ jsxRuntime.jsx(
                              Input,
                              _extends(
                                {},
                                hiddenInputProps,
                                {
                                  'data-index': index,
                                  'aria-label': getAriaLabel
                                    ? getAriaLabel(index)
                                    : ariaLabel,
                                  'aria-valuenow': scale(value),
                                  'aria-valuetext': getAriaValueText
                                    ? getAriaValueText(scale(value), index)
                                    : ariaValuetext,
                                  value: values[index],
                                },
                                !isHostComponent(Input) && {
                                  ownerState: _extends(
                                    {},
                                    ownerState,
                                    inputProps.ownerState
                                  ),
                                },
                                inputProps,
                                {
                                  style: _extends(
                                    {},
                                    hiddenInputProps.style,
                                    inputProps.style
                                  ),
                                }
                              )
                            ),
                          }
                        )
                      ),
                    }
                  )
                ),
              },
              index
            );
          }),
        ],
      }
    )
  );
});

/**
 * The basic building block for creating custom switches.
 *
 * Demos:
 *
 * - [Switches](https://mui.com/components/switches/)
 */
function useSwitch(props) {
  const {
    checked: checkedProp,
    defaultChecked,
    disabled,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly,
    required,
  } = props;
  const [checked, setCheckedState] = useControlled({
    controlled: checkedProp,
    default: Boolean(defaultChecked),
    name: 'Switch',
    state: 'checked',
  });

  const createHandleInputChange = (otherProps) => (event) => {
    var _otherProps$onChange;

    // Workaround for https://github.com/facebook/react/issues/9023
    if (event.nativeEvent.defaultPrevented) {
      return;
    }

    setCheckedState(event.target.checked);
    onChange == null ? void 0 : onChange(event);
    (_otherProps$onChange = otherProps.onChange) == null
      ? void 0
      : _otherProps$onChange.call(otherProps, event);
  };

  const {
    isFocusVisibleRef,
    onBlur: handleBlurVisible,
    onFocus: handleFocusVisible,
    ref: focusVisibleRef,
  } = useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(false);

  if (disabled && focusVisible) {
    setFocusVisible(false);
  }

  react.useEffect(() => {
    isFocusVisibleRef.current = focusVisible;
  }, [focusVisible, isFocusVisibleRef]);
  const inputRef = react.useRef(null);

  const createHandleFocus = (otherProps) => (event) => {
    var _otherProps$onFocus;

    // Fix for https://github.com/facebook/react/issues/7769
    if (!inputRef.current) {
      inputRef.current = event.currentTarget;
    }

    handleFocusVisible(event);

    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      onFocusVisible == null ? void 0 : onFocusVisible(event);
    }

    onFocus == null ? void 0 : onFocus(event);
    (_otherProps$onFocus = otherProps.onFocus) == null
      ? void 0
      : _otherProps$onFocus.call(otherProps, event);
  };

  const createHandleBlur = (otherProps) => (event) => {
    var _otherProps$onBlur;

    handleBlurVisible(event);

    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }

    onBlur == null ? void 0 : onBlur(event);
    (_otherProps$onBlur = otherProps.onBlur) == null
      ? void 0
      : _otherProps$onBlur.call(otherProps, event);
  };

  const handleRefChange = useForkRef(focusVisibleRef, inputRef);

  const getInputProps = (otherProps = {}) =>
    _extends(
      {
        checked: checkedProp,
        defaultChecked,
        disabled,
        readOnly,
        ref: handleRefChange,
        required,
        type: 'checkbox',
      },
      otherProps,
      {
        onChange: createHandleInputChange(otherProps),
        onFocus: createHandleFocus(otherProps),
        onBlur: createHandleBlur(otherProps),
      }
    );

  return {
    checked,
    disabled: Boolean(disabled),
    focusVisible,
    getInputProps,
    readOnly: Boolean(readOnly),
  };
}

function getSwitchUnstyledUtilityClass(slot) {
  return generateUtilityClass('MuiSwitch', slot);
}
const switchUnstyledClasses = generateUtilityClasses('MuiSwitch', [
  'root',
  'input',
  'track',
  'thumb',
  'checked',
  'disabled',
  'focusVisible',
  'readOnly',
]);

const _excluded$k = [
  'checked',
  'component',
  'components',
  'componentsProps',
  'defaultChecked',
  'disabled',
  'onBlur',
  'onChange',
  'onFocus',
  'onFocusVisible',
  'readOnly',
  'required',
];

const useUtilityClasses$a = (ownerState) => {
  const { checked, disabled, focusVisible, readOnly } = ownerState;
  const slots = {
    root: [
      'root',
      checked && 'checked',
      disabled && 'disabled',
      focusVisible && 'focusVisible',
      readOnly && 'readOnly',
    ],
    thumb: ['thumb'],
    input: ['input'],
    track: ['track'],
  };
  return composeClasses(slots, getSwitchUnstyledUtilityClass, {});
};
/**
 * The foundation for building custom-styled switches.
 *
 * Demos:
 *
 * - [Switch](https://mui.com/base/react-switch/)
 *
 * API:
 *
 * - [SwitchUnstyled API](https://mui.com/base/api/switch-unstyled/)
 */

const SwitchUnstyled = /*#__PURE__*/ react.forwardRef(function SwitchUnstyled(
  props,
  ref
) {
  var _ref, _components$Thumb, _components$Input, _components$Track;

  const {
      checked: checkedProp,
      component,
      components = {},
      componentsProps = {},
      defaultChecked,
      disabled: disabledProp,
      onBlur,
      onChange,
      onFocus,
      onFocusVisible,
      readOnly: readOnlyProp,
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$k);

  const useSwitchProps = {
    checked: checkedProp,
    defaultChecked,
    disabled: disabledProp,
    onBlur,
    onChange,
    onFocus,
    onFocusVisible,
    readOnly: readOnlyProp,
  };
  const { getInputProps, checked, disabled, focusVisible, readOnly } =
    useSwitch(useSwitchProps);

  const ownerState = _extends({}, props, {
    checked,
    disabled,
    focusVisible,
    readOnly,
  });

  const classes = useUtilityClasses$a(ownerState);
  const Root =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'span';
  const rootProps = useSlotProps({
    elementType: Root,
    externalSlotProps: componentsProps.root,
    externalForwardedProps: other,
    additionalProps: {
      ref,
    },
    ownerState,
    className: classes.root,
  });
  const Thumb =
    (_components$Thumb = components.Thumb) != null ? _components$Thumb : 'span';
  const thumbProps = useSlotProps({
    elementType: Thumb,
    externalSlotProps: componentsProps.thumb,
    ownerState,
    className: classes.thumb,
  });
  const Input =
    (_components$Input = components.Input) != null
      ? _components$Input
      : 'input';
  const inputProps = useSlotProps({
    elementType: Input,
    getSlotProps: getInputProps,
    externalSlotProps: componentsProps.input,
    ownerState,
    className: classes.input,
  });
  const Track =
    components.Track === null
      ? () => null
      : (_components$Track = components.Track) != null
      ? _components$Track
      : 'span';
  const trackProps = useSlotProps({
    elementType: Track,
    externalSlotProps: componentsProps.track,
    ownerState,
    className: classes.track,
  });
  return /*#__PURE__*/ jsxRuntime.jsxs(
    Root,
    _extends({}, rootProps, {
      children: [
        /*#__PURE__*/ jsxRuntime.jsx(Track, _extends({}, trackProps)),
        /*#__PURE__*/ jsxRuntime.jsx(Thumb, _extends({}, thumbProps)),
        /*#__PURE__*/ jsxRuntime.jsx(Input, _extends({}, inputProps)),
      ],
    })
  );
});

function getTabPanelUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabPanelUnstyled', slot);
}
const tabPanelUnstyledClasses = generateUtilityClasses('TabPanelUnstyled', [
  'root',
  'hidden',
]);

function getTabsUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabsUnstyled', slot);
}
const tabsUnstyledClasses = generateUtilityClasses('TabsUnstyled', [
  'root',
  'horizontal',
  'vertical',
]);

const useTabs = (parameters) => {
  const {
    value: valueProp,
    defaultValue,
    onChange,
    orientation,
    direction,
    selectionFollowsFocus,
  } = parameters;
  const [value, setValue] = useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Tabs',
    state: 'value',
  });
  const idPrefix = useId();
  const onSelected = react.useCallback(
    (e, newValue) => {
      setValue(newValue);

      if (onChange) {
        onChange(e, newValue);
      }
    },
    [onChange, setValue]
  );
  const tabsContextValue = react.useMemo(() => {
    return {
      idPrefix,
      value,
      onSelected,
      orientation,
      direction,
      selectionFollowsFocus,
    };
  }, [
    idPrefix,
    value,
    onSelected,
    orientation,
    direction,
    selectionFollowsFocus,
  ]);
  return {
    tabsContextValue,
  };
};

/**
 * @ignore - internal component.
 */
const Context = /*#__PURE__*/ react.createContext(null);
/**
 * @returns {unknown}
 */

function useTabContext() {
  return react.useContext(Context);
}
function getPanelId(context, value) {
  const { idPrefix } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-P-${value}`;
}
function getTabId(context, value) {
  const { idPrefix } = context;

  if (idPrefix === null) {
    return null;
  }

  return `${context.idPrefix}-T-${value}`;
}

const _excluded$l = [
  'children',
  'className',
  'value',
  'defaultValue',
  'orientation',
  'direction',
  'component',
  'components',
  'componentsProps',
  'onChange',
  'selectionFollowsFocus',
];

const useUtilityClasses$b = (ownerState) => {
  const { orientation } = ownerState;
  const slots = {
    root: ['root', orientation],
  };
  return composeClasses(slots, getTabsUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabsUnstyled API](https://mui.com/base/api/tabs-unstyled/)
 */

const TabsUnstyled = /*#__PURE__*/ react.forwardRef((props, ref) => {
  var _ref, _componentsProps$root;

  const {
      children,
      className,
      orientation = 'horizontal',
      direction = 'ltr',
      component,
      components = {},
      componentsProps = {},
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$l);

  const { tabsContextValue } = useTabs(props);

  const ownerState = _extends({}, props, {
    orientation,
    direction,
  });

  const classes = useUtilityClasses$b(ownerState);
  const TabsRoot =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'div';
  const tabsRootProps = appendOwnerState(
    TabsRoot,
    _extends({}, other, componentsProps.root, {
      ref,
      className: require$$4(
        classes.root,
        (_componentsProps$root = componentsProps.root) == null
          ? void 0
          : _componentsProps$root.className,
        className
      ),
    }),
    ownerState
  );
  return /*#__PURE__*/ jsxRuntime.jsx(
    TabsRoot,
    _extends({}, tabsRootProps, {
      children: /*#__PURE__*/ jsxRuntime.jsx(Context.Provider, {
        value: tabsContextValue,
        children: children,
      }),
    })
  );
});

const useTabPanel = (parameters) => {
  const { value } = parameters;
  const context = useTabContext();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const hidden = value !== context.value;
  const id = getPanelId(context, value);
  const tabId = getTabId(context, value);

  const getRootProps = () => {
    return {
      'aria-labelledby': tabId != null ? tabId : undefined,
      hidden,
      id: id != null ? id : undefined,
    };
  };

  return {
    hidden,
    getRootProps,
  };
};

const _excluded$m = [
  'children',
  'className',
  'value',
  'components',
  'componentsProps',
  'component',
];

const useUtilityClasses$c = (ownerState) => {
  const { hidden } = ownerState;
  const slots = {
    root: ['root', hidden && 'hidden'],
  };
  return composeClasses(slots, getTabPanelUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabPanelUnstyled API](https://mui.com/base/api/tab-panel-unstyled/)
 */

const TabPanelUnstyled = /*#__PURE__*/ react.forwardRef(
  function TabPanelUnstyled(props, ref) {
    var _ref, _componentsProps$root;

    const {
        children,
        className,
        components = {},
        componentsProps = {},
        component,
      } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$m);

    const { hidden, getRootProps } = useTabPanel(props);

    const ownerState = _extends({}, props, {
      hidden,
    });

    const classes = useUtilityClasses$c(ownerState);
    const TabPanelRoot =
      (_ref = component != null ? component : components.Root) != null
        ? _ref
        : 'div';
    const tabPanelRootProps = appendOwnerState(
      TabPanelRoot,
      _extends(
        {},
        getRootProps(),
        {
          role: 'tabpanel',
        },
        other,
        componentsProps.root,
        {
          ref,
          className: require$$4(
            classes.root,
            (_componentsProps$root = componentsProps.root) == null
              ? void 0
              : _componentsProps$root.className,
            className
          ),
        }
      ),
      ownerState
    );
    return /*#__PURE__*/ jsxRuntime.jsx(
      TabPanelRoot,
      _extends({}, tabPanelRootProps, {
        children: !hidden && children,
      })
    );
  }
);

function getTabsListUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabsListUnstyled', slot);
}
const tabsListUnstyledClasses = generateUtilityClasses('TabsListUnstyled', [
  'root',
  'horizontal',
  'vertical',
]);

const nextItem = (list, item) => {
  if (!list) {
    return null;
  }

  if (list === item) {
    return list.firstChild;
  }

  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }

  return list.firstChild;
};

const previousItem = (list, item) => {
  if (!list) {
    return null;
  }

  if (list === item) {
    return list.lastChild;
  }

  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }

  return list.lastChild;
};

const moveFocus = (list, currentFocus, traversalFunction) => {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus);

  while (list && nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return;
      }

      wrappedOnce = true;
    } // Same logic as useAutocomplete.js

    const nextFocusDisabled =
      nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';

    if (!nextFocus.hasAttribute('tabindex') || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus);
    } else {
      nextFocus.focus();
      return;
    }
  }
};

const useTabsList = (parameters) => {
  const {
    'aria-label': ariaLabel,
    'aria-labelledby': ariaLabelledBy,
    children,
    ref,
  } = parameters;
  const tabsListRef = /*#__PURE__*/ react.createRef();
  const handleRef = useForkRef(tabsListRef, ref);
  const context = useTabContext();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const { value, orientation = 'horizontal', direction = 'ltr' } = context;
  const isRtl = direction === 'rtl';

  const handleKeyDown = (event) => {
    const list = tabsListRef.current;
    const currentFocus = ownerDocument(list).activeElement; // Keyboard navigation assumes that [role="tab"] are siblings
    // though we might warn in the future about nested, interactive elements
    // as a a11y violation

    const role =
      currentFocus == null ? void 0 : currentFocus.getAttribute('role');

    if (role !== 'tab') {
      return;
    }

    let previousItemKey =
      orientation === 'horizontal' ? 'ArrowLeft' : 'ArrowUp';
    let nextItemKey = orientation === 'horizontal' ? 'ArrowRight' : 'ArrowDown';

    if (orientation === 'horizontal' && isRtl) {
      // swap previousItemKey with nextItemKey
      previousItemKey = 'ArrowRight';
      nextItemKey = 'ArrowLeft';
    }

    switch (event.key) {
      case previousItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, previousItem);
        break;

      case nextItemKey:
        event.preventDefault();
        moveFocus(list, currentFocus, nextItem);
        break;

      case 'Home':
        event.preventDefault();
        moveFocus(list, null, nextItem);
        break;

      case 'End':
        event.preventDefault();
        moveFocus(list, null, previousItem);
        break;
    }
  };

  const createHandleKeyDown = (otherHandlers) => (event) => {
    var _otherHandlers$onKeyD;

    handleKeyDown(event);
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null
      ? void 0
      : _otherHandlers$onKeyD.call(otherHandlers, event);
  };

  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers(parameters);

    const externalEventHandlers = _extends(
      {},
      propsEventHandlers,
      otherHandlers
    );

    const ownEventHandlers = {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
    };

    const mergedEventHandlers = _extends(
      {},
      externalEventHandlers,
      ownEventHandlers
    );

    return _extends(
      {
        'aria-label': ariaLabel,
        'aria-labelledby': ariaLabelledBy,
        'aria-orientation': orientation === 'vertical' ? 'vertical' : undefined,
        role: 'tablist',
        ref: handleRef,
      },
      mergedEventHandlers
    );
  };

  const processChildren = react.useCallback(() => {
    const valueToIndex = new Map();
    let childIndex = 0;
    const processedChildren = react.Children.map(children, (child) => {
      if (!(/*#__PURE__*/ react.isValidElement(child))) {
        return null;
      }

      const childValue =
        child.props.value === undefined ? childIndex : child.props.value;
      valueToIndex.set(childValue, childIndex);
      childIndex += 1;
      return /*#__PURE__*/ react.cloneElement(
        child,
        _extends(
          {
            value: childValue,
          },
          (childIndex === 1 && value === false && !child.props.tabIndex) ||
            value === childValue
            ? {
                tabIndex: 0,
              }
            : {
                tabIndex: -1,
              }
        )
      );
    });
    return processedChildren;
  }, [children, value]);
  return {
    isRtl,
    orientation,
    value,
    processChildren,
    getRootProps,
  };
};

const _excluded$n = [
  'className',
  'children',
  'component',
  'components',
  'componentsProps',
];

const useUtilityClasses$d = (ownerState) => {
  const { orientation } = ownerState;
  const slots = {
    root: ['root', orientation],
  };
  return composeClasses(slots, getTabsListUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabsListUnstyled API](https://mui.com/base/api/tabs-list-unstyled/)
 */

const TabsListUnstyled = /*#__PURE__*/ react.forwardRef((props, ref) => {
  var _ref, _componentsProps$root;

  const { className, component, components = {}, componentsProps = {} } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$n);

  const { isRtl, orientation, getRootProps, processChildren } = useTabsList(
    _extends({}, props, {
      ref,
    })
  );

  const ownerState = _extends({}, props, {
    isRtl,
    orientation,
  });

  const classes = useUtilityClasses$d(ownerState);
  const TabsListRoot =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'div';
  const tabsListRootProps = appendOwnerState(
    TabsListRoot,
    _extends({}, getRootProps(), other, componentsProps.root, {
      className: require$$4(
        className,
        (_componentsProps$root = componentsProps.root) == null
          ? void 0
          : _componentsProps$root.className,
        classes.root
      ),
    }),
    ownerState
  );
  const processedChildren = processChildren();
  return /*#__PURE__*/ jsxRuntime.jsx(
    TabsListRoot,
    _extends({}, tabsListRootProps, {
      children: processedChildren,
    })
  );
});

function getTabUnstyledUtilityClass(slot) {
  return generateUtilityClass('TabUnstyled', slot);
}
const tabUnstyledClasses = generateUtilityClasses('TabUnstyled', [
  'root',
  'selected',
  'disabled',
]);

const _excluded$o = ['getRootProps'];

const useTab = (parameters) => {
  var _getPanelId, _getTabId;

  const { value: valueProp, onChange, onClick, onFocus } = parameters;

  const _useButton = useButton(parameters),
    { getRootProps: getRootPropsButton } = _useButton,
    otherButtonProps = _objectWithoutPropertiesLoose(_useButton, _excluded$o);

  const context = useTabContext();

  if (context === null) {
    throw new Error('No TabContext provided');
  }

  const value = valueProp != null ? valueProp : 0;
  const selected = context.value === value;
  const selectionFollowsFocus = context.selectionFollowsFocus;
  const a11yAttributes = {
    role: 'tab',
    'aria-controls':
      (_getPanelId = getPanelId(context, value)) != null
        ? _getPanelId
        : undefined,
    id: (_getTabId = getTabId(context, value)) != null ? _getTabId : undefined,
    'aria-selected': selected,
    disabled: otherButtonProps.disabled,
  };

  const createHandleFocus = (otherHandlers) => (event) => {
    var _otherHandlers$onFocu;

    (_otherHandlers$onFocu = otherHandlers.onFocus) == null
      ? void 0
      : _otherHandlers$onFocu.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (selectionFollowsFocus && !selected) {
      if (onChange) {
        onChange(event, value);
      }

      context.onSelected(event, value);
    }

    if (onFocus) {
      onFocus(event);
    }
  };

  const createHandleClick = (otherHandlers) => (event) => {
    var _otherHandlers$onClic;

    (_otherHandlers$onClic = otherHandlers.onClick) == null
      ? void 0
      : _otherHandlers$onClic.call(otherHandlers, event);

    if (event.defaultPrevented) {
      return;
    }

    if (!selected) {
      if (onChange) {
        onChange(event, value);
      }

      context.onSelected(event, value);
    }

    if (onClick) {
      onClick(event);
    }
  };

  const getRootProps = (otherHandlers = {}) => {
    const buttonResolvedProps = getRootPropsButton(
      _extends({}, otherHandlers, {
        onClick: createHandleClick(otherHandlers),
        onFocus: createHandleFocus(otherHandlers),
      })
    );
    return _extends({}, buttonResolvedProps, a11yAttributes);
  };

  return _extends(
    {
      getRootProps,
    },
    otherButtonProps,
    {
      selected,
    }
  );
};

const _excluded$p = [
  'action',
  'children',
  'value',
  'className',
  'disabled',
  'onChange',
  'onClick',
  'onFocus',
  'component',
  'components',
  'componentsProps',
];

const useUtilityClasses$e = (ownerState) => {
  const { selected, disabled } = ownerState;
  const slots = {
    root: ['root', selected && 'selected', disabled && 'disabled'],
  };
  return composeClasses(slots, getTabUnstyledUtilityClass, {});
};
/**
 *
 * Demos:
 *
 * - [Tabs](https://mui.com/base/react-tabs/)
 *
 * API:
 *
 * - [TabUnstyled API](https://mui.com/base/api/tab-unstyled/)
 */

const TabUnstyled = /*#__PURE__*/ react.forwardRef(function TabUnstyled(
  props,
  ref
) {
  var _ref, _componentsProps$root;

  const {
      action,
      children,
      className,
      disabled = false,
      component,
      components = {},
      componentsProps = {},
    } = props,
    other = _objectWithoutPropertiesLoose(props, _excluded$p);

  const tabRef = react.useRef();
  const handleRef = useForkRef(tabRef, ref);
  const { active, focusVisible, setFocusVisible, selected, getRootProps } =
    useTab(
      _extends({}, props, {
        ref: handleRef,
      })
    );
  react.useImperativeHandle(
    action,
    () => ({
      focusVisible: () => {
        setFocusVisible(true);
        tabRef.current.focus();
      },
    }),
    [setFocusVisible]
  );

  const ownerState = _extends({}, props, {
    active,
    focusVisible,
    disabled,
    selected,
  });

  const classes = useUtilityClasses$e(ownerState);
  const TabRoot =
    (_ref = component != null ? component : components.Root) != null
      ? _ref
      : 'button';
  const tabRootProps = appendOwnerState(
    TabRoot,
    _extends({}, getRootProps(), other, componentsProps.root, {
      className: require$$4(
        classes.root,
        (_componentsProps$root = componentsProps.root) == null
          ? void 0
          : _componentsProps$root.className,
        className
      ),
      ref,
    }),
    ownerState
  );
  return /*#__PURE__*/ jsxRuntime.jsx(
    TabRoot,
    _extends({}, tabRootProps, {
      children: children,
    })
  );
});

const _excluded$q = ['onChange', 'maxRows', 'minRows', 'style', 'value'];

function getStyleValue(computedStyle, property) {
  return parseInt(computedStyle[property], 10) || 0;
}

const styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)',
  },
};
const TextareaAutosize = /*#__PURE__*/ react.forwardRef(
  function TextareaAutosize(props, ref) {
    const { onChange, maxRows, minRows = 1, style, value } = props,
      other = _objectWithoutPropertiesLoose(props, _excluded$q);

    const { current: isControlled } = react.useRef(value != null);
    const inputRef = react.useRef(null);
    const handleRef = useForkRef(ref, inputRef);
    const shadowRef = react.useRef(null);
    const renders = react.useRef(0);
    const [state, setState] = react.useState({});
    const syncHeight = react.useCallback(() => {
      const input = inputRef.current;
      const containerWindow = ownerWindow(input);
      const computedStyle = containerWindow.getComputedStyle(input); // If input's width is shrunk and it's not visible, don't sync height.

      if (computedStyle.width === '0px') {
        return;
      }

      const inputShallow = shadowRef.current;
      inputShallow.style.width = computedStyle.width;
      inputShallow.value = input.value || props.placeholder || 'x';

      if (inputShallow.value.slice(-1) === '\n') {
        // Certain fonts which overflow the line height will cause the textarea
        // to report a different scrollHeight depending on whether the last line
        // is empty. Make it non-empty to avoid this issue.
        inputShallow.value += ' ';
      }

      const boxSizing = computedStyle['box-sizing'];
      const padding =
        getStyleValue(computedStyle, 'padding-bottom') +
        getStyleValue(computedStyle, 'padding-top');
      const border =
        getStyleValue(computedStyle, 'border-bottom-width') +
        getStyleValue(computedStyle, 'border-top-width'); // The height of the inner content

      const innerHeight = inputShallow.scrollHeight; // Measure height of a textarea with a single row

      inputShallow.value = 'x';
      const singleRowHeight = inputShallow.scrollHeight; // The height of the outer content

      let outerHeight = innerHeight;

      if (minRows) {
        outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
      }

      if (maxRows) {
        outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
      }

      outerHeight = Math.max(outerHeight, singleRowHeight); // Take the box sizing into account for applying this value as a style.

      const outerHeightStyle =
        outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
      const overflow = Math.abs(outerHeight - innerHeight) <= 1;
      setState((prevState) => {
        // Need a large enough difference to update the height.
        // This prevents infinite rendering loop.
        if (
          renders.current < 20 &&
          ((outerHeightStyle > 0 &&
            Math.abs((prevState.outerHeightStyle || 0) - outerHeightStyle) >
              1) ||
            prevState.overflow !== overflow)
        ) {
          renders.current += 1;
          return {
            overflow,
            outerHeightStyle,
          };
        }

        return prevState;
      });
    }, [maxRows, minRows, props.placeholder]);
    react.useEffect(() => {
      const handleResize = debounce(() => {
        renders.current = 0;
        syncHeight();
      });
      const containerWindow = ownerWindow(inputRef.current);
      containerWindow.addEventListener('resize', handleResize);
      let resizeObserver;

      if (typeof ResizeObserver !== 'undefined') {
        resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(inputRef.current);
      }

      return () => {
        handleResize.clear();
        containerWindow.removeEventListener('resize', handleResize);

        if (resizeObserver) {
          resizeObserver.disconnect();
        }
      };
    }, [syncHeight]);
    useEnhancedEffect(() => {
      syncHeight();
    });
    react.useEffect(() => {
      renders.current = 0;
    }, [value]);

    const handleChange = (event) => {
      renders.current = 0;

      if (!isControlled) {
        syncHeight();
      }

      if (onChange) {
        onChange(event);
      }
    };

    return /*#__PURE__*/ jsxRuntime.jsxs(react.Fragment, {
      children: [
        /*#__PURE__*/ jsxRuntime.jsx(
          'textarea',
          _extends(
            {
              value: value,
              onChange: handleChange,
              ref: handleRef, // Apply the rows prop to get a "correct" first SSR paint
              rows: minRows,
              style: _extends(
                {
                  height: state.outerHeightStyle,
                  // Need a large enough difference to allow scrolling.
                  // This prevents infinite rendering loop.
                  overflow: state.overflow ? 'hidden' : null,
                },
                style
              ),
            },
            other
          )
        ),
        /*#__PURE__*/ jsxRuntime.jsx('textarea', {
          'aria-hidden': true,
          className: props.className,
          readOnly: true,
          ref: shadowRef,
          tabIndex: -1,
          style: _extends({}, styles.shadow, style, {
            padding: 0,
          }),
        }),
      ],
    });
  }
);

/** @license MUI v5.0.0-alpha.86
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var base = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  BadgeUnstyled: BadgeUnstyled,
  ButtonUnstyled: ButtonUnstyled,
  ClickAwayListener: ClickAwayListener,
  unstable_composeClasses: composeClasses,
  generateUtilityClass: generateUtilityClass,
  generateUtilityClasses: generateUtilityClasses,
  FormControlUnstyled: FormControlUnstyled,
  InputUnstyled: InputUnstyled,
  MenuUnstyled: MenuUnstyled,
  MenuItemUnstyled: MenuItemUnstyled,
  ModalUnstyled: ModalUnstyled,
  MultiSelectUnstyled: MultiSelectUnstyled,
  NoSsr: NoSsr,
  OptionGroupUnstyled: OptionGroupUnstyled,
  OptionUnstyled: OptionUnstyled$1,
  PopperUnstyled: PopperUnstyled,
  Portal: Portal$1,
  SelectUnstyled: SelectUnstyled,
  SliderUnstyled: SliderUnstyled,
  SwitchUnstyled: SwitchUnstyled,
  TabPanelUnstyled: TabPanelUnstyled,
  TabsListUnstyled: TabsListUnstyled,
  TabsUnstyled: TabsUnstyled,
  TabUnstyled: TabUnstyled,
  TextareaAutosize: TextareaAutosize,
  TrapFocus: TrapFocus,
  appendOwnerState: appendOwnerState,
  areArraysEqual: areArraysEqual,
  extractEventHandlers: extractEventHandlers,
  isHostComponent: isHostComponent,
  useSlotProps: useSlotProps,
  useAutocomplete: useAutocomplete,
  createFilterOptions: createFilterOptions,
  useBadge: useBadge,
  badgeUnstyledClasses: badgeUnstyledClasses,
  getBadgeUnstyledUtilityClass: getBadgeUnstyledUtilityClass,
  buttonUnstyledClasses: buttonUnstyledClasses,
  getButtonUnstyledUtilityClass: getButtonUnstyledUtilityClass,
  useButton: useButton,
  FormControlUnstyledContext: FormControlUnstyledContext,
  formControlUnstyledClasses: formControlUnstyledClasses,
  useFormControlUnstyledContext: useFormControlUnstyledContext,
  getFormControlUnstyledUtilityClass: getFormControlUnstyledUtilityClass,
  useInput: useInput,
  inputUnstyledClasses: inputBaseClasses,
  getInputUnstyledUtilityClass: getInputUnstyledUtilityClass,
  useListbox: useListbox,
  defaultListboxReducer: defaultListboxReducer,
  get ActionTypes() {
    return ActionTypes;
  },
  MenuUnstyledContext: MenuUnstyledContext,
  menuUnstyledClasses: menuUnstyledClasses,
  useMenu: useMenu,
  getMenuUnstyledUtilityClass: getMenuUnstyledUtilityClass,
  menuItemUnstyledClasses: menuItemUnstyledClasses,
  useMenuItem: useMenuItem,
  getMenuItemUnstyledUtilityClass: getMenuItemUnstyledUtilityClass,
  ModalManager: ModalManager,
  modalUnstyledClasses: modalUnstyledClasses,
  getModalUtilityClass: getModalUtilityClass,
  optionGroupUnstyledClasses: optionGroupUnstyledClasses,
  getOptionGroupUnstyledUtilityClass: getOptionGroupUnstyledUtilityClass,
  optionUnstyledClasses: optionUnstyledClasses,
  getOptionUnstyledUtilityClass: getOptionUnstyledUtilityClass,
  selectUnstyledClasses: selectUnstyledClasses,
  useSelect: useSelect,
  SelectUnstyledContext: SelectUnstyledContext,
  getSelectUnstyledUtilityClass: getSelectUnstyledUtilityClass,
  isOptionGroup: isOptionGroup,
  SliderValueLabelUnstyled: SliderValueLabelUnstyled,
  sliderUnstyledClasses: sliderUnstyledClasses,
  useSlider: useSlider,
  getSliderUtilityClass: getSliderUtilityClass,
  useSwitch: useSwitch,
  switchUnstyledClasses: switchUnstyledClasses,
  getSwitchUnstyledUtilityClass: getSwitchUnstyledUtilityClass,
  tabPanelUnstyledClasses: tabPanelUnstyledClasses,
  useTabPanel: useTabPanel,
  getTabPanelUnstyledUtilityClass: getTabPanelUnstyledUtilityClass,
  tabsListUnstyledClasses: tabsListUnstyledClasses,
  useTabsList: useTabsList,
  getTabsListUnstyledUtilityClass: getTabsListUnstyledUtilityClass,
  TabsContext: Context,
  tabsUnstyledClasses: tabsUnstyledClasses,
  useTabs: useTabs,
  useTabContext: useTabContext,
  getPanelId: getPanelId,
  getTabId: getTabId,
  getTabsUnstyledUtilityClass: getTabsUnstyledUtilityClass,
  tabUnstyledClasses: tabUnstyledClasses,
  useTab: useTab,
  getTabUnstyledUtilityClass: getTabUnstyledUtilityClass,
});

var interopRequireDefault = createCommonjsModule(function (module) {
  function _interopRequireDefault(obj) {
    return obj && obj.__esModule
      ? obj
      : {
          default: obj,
        };
  }

  (module.exports = _interopRequireDefault),
    (module.exports.__esModule = true),
    (module.exports['default'] = module.exports);
});

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  (module.exports = _objectWithoutPropertiesLoose),
    (module.exports.__esModule = true),
    (module.exports['default'] = module.exports);
});

var createMixins_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createMixins;

  var _extends2 = interopRequireDefault(_extends_1);

  function createMixins(breakpoints, mixins) {
    return (0, _extends2.default)(
      {
        toolbar: {
          minHeight: 56,
          [breakpoints.up('xs')]: {
            '@media (orientation: landscape)': {
              minHeight: 48,
            },
          },
          [breakpoints.up('sm')]: {
            minHeight: 64,
          },
        },
      },
      mixins
    );
  }
});

var common_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const common = {
    black: '#000',
    white: '#fff',
  };
  var _default = common;
  exports.default = _default;
});

var grey_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const grey = {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#eeeeee',
    300: '#e0e0e0',
    400: '#bdbdbd',
    500: '#9e9e9e',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
    A100: '#f5f5f5',
    A200: '#eeeeee',
    A400: '#bdbdbd',
    A700: '#616161',
  };
  var _default = grey;
  exports.default = _default;
});

var purple_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const purple = {
    50: '#f3e5f5',
    100: '#e1bee7',
    200: '#ce93d8',
    300: '#ba68c8',
    400: '#ab47bc',
    500: '#9c27b0',
    600: '#8e24aa',
    700: '#7b1fa2',
    800: '#6a1b9a',
    900: '#4a148c',
    A100: '#ea80fc',
    A200: '#e040fb',
    A400: '#d500f9',
    A700: '#aa00ff',
  };
  var _default = purple;
  exports.default = _default;
});

var red_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const red = {
    50: '#ffebee',
    100: '#ffcdd2',
    200: '#ef9a9a',
    300: '#e57373',
    400: '#ef5350',
    500: '#f44336',
    600: '#e53935',
    700: '#d32f2f',
    800: '#c62828',
    900: '#b71c1c',
    A100: '#ff8a80',
    A200: '#ff5252',
    A400: '#ff1744',
    A700: '#d50000',
  };
  var _default = red;
  exports.default = _default;
});

var orange_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const orange = {
    50: '#fff3e0',
    100: '#ffe0b2',
    200: '#ffcc80',
    300: '#ffb74d',
    400: '#ffa726',
    500: '#ff9800',
    600: '#fb8c00',
    700: '#f57c00',
    800: '#ef6c00',
    900: '#e65100',
    A100: '#ffd180',
    A200: '#ffab40',
    A400: '#ff9100',
    A700: '#ff6d00',
  };
  var _default = orange;
  exports.default = _default;
});

var blue_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const blue = {
    50: '#e3f2fd',
    100: '#bbdefb',
    200: '#90caf9',
    300: '#64b5f6',
    400: '#42a5f5',
    500: '#2196f3',
    600: '#1e88e5',
    700: '#1976d2',
    800: '#1565c0',
    900: '#0d47a1',
    A100: '#82b1ff',
    A200: '#448aff',
    A400: '#2979ff',
    A700: '#2962ff',
  };
  var _default = blue;
  exports.default = _default;
});

var lightBlue_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const lightBlue = {
    50: '#e1f5fe',
    100: '#b3e5fc',
    200: '#81d4fa',
    300: '#4fc3f7',
    400: '#29b6f6',
    500: '#03a9f4',
    600: '#039be5',
    700: '#0288d1',
    800: '#0277bd',
    900: '#01579b',
    A100: '#80d8ff',
    A200: '#40c4ff',
    A400: '#00b0ff',
    A700: '#0091ea',
  };
  var _default = lightBlue;
  exports.default = _default;
});

var green_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const green = {
    50: '#e8f5e9',
    100: '#c8e6c9',
    200: '#a5d6a7',
    300: '#81c784',
    400: '#66bb6a',
    500: '#4caf50',
    600: '#43a047',
    700: '#388e3c',
    800: '#2e7d32',
    900: '#1b5e20',
    A100: '#b9f6ca',
    A200: '#69f0ae',
    A400: '#00e676',
    A700: '#00c853',
  };
  var _default = green;
  exports.default = _default;
});

var createPalette_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.dark = void 0;
  exports.default = createPalette;
  exports.light = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _common = interopRequireDefault(common_1);

  var _grey = interopRequireDefault(grey_1);

  var _purple = interopRequireDefault(purple_1);

  var _red = interopRequireDefault(red_1);

  var _orange = interopRequireDefault(orange_1);

  var _blue = interopRequireDefault(blue_1);

  var _lightBlue = interopRequireDefault(lightBlue_1);

  var _green = interopRequireDefault(green_1);

  const _excluded = ['mode', 'contrastThreshold', 'tonalOffset'];
  const light = {
    // The colors used to style the text.
    text: {
      // The most important text.
      primary: 'rgba(0, 0, 0, 0.87)',
      // Secondary text.
      secondary: 'rgba(0, 0, 0, 0.6)',
      // Disabled text have even lower visual prominence.
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    // The color used to divide different elements.
    divider: 'rgba(0, 0, 0, 0.12)',
    // The background colors used to style the surfaces.
    // Consistency between these values is important.
    background: {
      paper: _common.default.white,
      default: _common.default.white,
    },
    // The colors used to style the action elements.
    action: {
      // The color of an active action like an icon button.
      active: 'rgba(0, 0, 0, 0.54)',
      // The color of an hovered action.
      hover: 'rgba(0, 0, 0, 0.04)',
      hoverOpacity: 0.04,
      // The color of a selected action.
      selected: 'rgba(0, 0, 0, 0.08)',
      selectedOpacity: 0.08,
      // The color of a disabled action.
      disabled: 'rgba(0, 0, 0, 0.26)',
      // The background color of a disabled action.
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(0, 0, 0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.12,
    },
  };
  exports.light = light;
  const dark = {
    text: {
      primary: _common.default.white,
      secondary: 'rgba(255, 255, 255, 0.7)',
      disabled: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
    },
    divider: 'rgba(255, 255, 255, 0.12)',
    background: {
      paper: '#121212',
      default: '#121212',
    },
    action: {
      active: _common.default.white,
      hover: 'rgba(255, 255, 255, 0.08)',
      hoverOpacity: 0.08,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: 'rgba(255, 255, 255, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    },
  };
  exports.dark = dark;

  function addLightOrDark(intent, direction, shade, tonalOffset) {
    const tonalOffsetLight = tonalOffset.light || tonalOffset;
    const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;

    if (!intent[direction]) {
      if (intent.hasOwnProperty(shade)) {
        intent[direction] = intent[shade];
      } else if (direction === 'light') {
        intent.light = (0, esm$1.lighten)(intent.main, tonalOffsetLight);
      } else if (direction === 'dark') {
        intent.dark = (0, esm$1.darken)(intent.main, tonalOffsetDark);
      }
    }
  }

  function getDefaultPrimary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: _blue.default[200],
        light: _blue.default[50],
        dark: _blue.default[400],
      };
    }

    return {
      main: _blue.default[700],
      light: _blue.default[400],
      dark: _blue.default[800],
    };
  }

  function getDefaultSecondary(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: _purple.default[200],
        light: _purple.default[50],
        dark: _purple.default[400],
      };
    }

    return {
      main: _purple.default[500],
      light: _purple.default[300],
      dark: _purple.default[700],
    };
  }

  function getDefaultError(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: _red.default[500],
        light: _red.default[300],
        dark: _red.default[700],
      };
    }

    return {
      main: _red.default[700],
      light: _red.default[400],
      dark: _red.default[800],
    };
  }

  function getDefaultInfo(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: _lightBlue.default[400],
        light: _lightBlue.default[300],
        dark: _lightBlue.default[700],
      };
    }

    return {
      main: _lightBlue.default[700],
      light: _lightBlue.default[500],
      dark: _lightBlue.default[900],
    };
  }

  function getDefaultSuccess(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: _green.default[400],
        light: _green.default[300],
        dark: _green.default[700],
      };
    }

    return {
      main: _green.default[800],
      light: _green.default[500],
      dark: _green.default[900],
    };
  }

  function getDefaultWarning(mode = 'light') {
    if (mode === 'dark') {
      return {
        main: _orange.default[400],
        light: _orange.default[300],
        dark: _orange.default[700],
      };
    }

    return {
      main: '#ed6c02',
      // closest to orange[800] that pass 3:1.
      light: _orange.default[500],
      dark: _orange.default[900],
    };
  }

  function createPalette(palette) {
    const {
        mode = 'light',
        contrastThreshold = 3,
        tonalOffset = 0.2,
      } = palette,
      other = (0, _objectWithoutPropertiesLoose2.default)(palette, _excluded);
    const primary = palette.primary || getDefaultPrimary(mode);
    const secondary = palette.secondary || getDefaultSecondary(mode);
    const error = palette.error || getDefaultError(mode);
    const info = palette.info || getDefaultInfo(mode);
    const success = palette.success || getDefaultSuccess(mode);
    const warning = palette.warning || getDefaultWarning(mode); // Use the same logic as
    // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
    // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54

    function getContrastText(background) {
      const contrastText =
        (0, esm$1.getContrastRatio)(background, dark.text.primary) >=
        contrastThreshold
          ? dark.text.primary
          : light.text.primary;

      return contrastText;
    }

    const augmentColor = ({
      color,
      name,
      mainShade = 500,
      lightShade = 300,
      darkShade = 700,
    }) => {
      color = (0, _extends2.default)({}, color);

      if (!color.main && color[mainShade]) {
        color.main = color[mainShade];
      }

      if (!color.hasOwnProperty('main')) {
        throw new Error(
          (0, esm.formatMuiErrorMessage)(
            11,
            name ? ` (${name})` : '',
            mainShade
          )
        );
      }

      if (typeof color.main !== 'string') {
        throw new Error(
          (0, esm.formatMuiErrorMessage)(
            12,
            name ? ` (${name})` : '',
            JSON.stringify(color.main)
          )
        );
      }

      addLightOrDark(color, 'light', lightShade, tonalOffset);
      addLightOrDark(color, 'dark', darkShade, tonalOffset);

      if (!color.contrastText) {
        color.contrastText = getContrastText(color.main);
      }

      return color;
    };

    const modes = {
      dark,
      light,
    };

    const paletteOutput = (0, esm.deepmerge)(
      (0, _extends2.default)(
        {
          // A collection of common colors.
          common: (0, _extends2.default)({}, _common.default),
          // prevent mutable object.
          // The palette mode, can be light or dark.
          mode,
          // The colors used to represent primary interface elements for a user.
          primary: augmentColor({
            color: primary,
            name: 'primary',
          }),
          // The colors used to represent secondary interface elements for a user.
          secondary: augmentColor({
            color: secondary,
            name: 'secondary',
            mainShade: 'A400',
            lightShade: 'A200',
            darkShade: 'A700',
          }),
          // The colors used to represent interface elements that the user should be made aware of.
          error: augmentColor({
            color: error,
            name: 'error',
          }),
          // The colors used to represent potentially dangerous actions or important messages.
          warning: augmentColor({
            color: warning,
            name: 'warning',
          }),
          // The colors used to present information to the user that is neutral and not necessarily important.
          info: augmentColor({
            color: info,
            name: 'info',
          }),
          // The colors used to indicate the successful completion of an action that user triggered.
          success: augmentColor({
            color: success,
            name: 'success',
          }),
          // The grey colors.
          grey: _grey.default,
          // Used by `getContrastText()` to maximize the contrast between
          // the background and the text.
          contrastThreshold,
          // Takes a background color and returns the text color that maximizes the contrast.
          getContrastText,
          // Generate a rich color object.
          augmentColor,
          // Used by the functions below to shift a color's luminance by approximately
          // two indexes within its tonal palette.
          // E.g., shift from Red 500 to Red 300 or Red 700.
          tonalOffset,
        },
        modes[mode]
      ),
      other
    );
    return paletteOutput;
  }
});

var createTypography_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createTypography;

  var _extends2 = interopRequireDefault(_extends_1);

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  const _excluded = [
    'fontFamily',
    'fontSize',
    'fontWeightLight',
    'fontWeightRegular',
    'fontWeightMedium',
    'fontWeightBold',
    'htmlFontSize',
    'allVariants',
    'pxToRem',
  ];

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  const caseAllCaps = {
    textTransform: 'uppercase',
  };
  const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
  /**
   * @see @link{https://material.io/design/typography/the-type-system.html}
   * @see @link{https://material.io/design/typography/understanding-typography.html}
   */

  function createTypography(palette, typography) {
    const _ref =
        typeof typography === 'function' ? typography(palette) : typography,
      {
        fontFamily = defaultFontFamily,
        // The default font size of the Material Specification.
        fontSize = 14,
        // px
        fontWeightLight = 300,
        fontWeightRegular = 400,
        fontWeightMedium = 500,
        fontWeightBold = 700,
        // Tell MUI what's the font-size on the html element.
        // 16px is the default font-size used by browsers.
        htmlFontSize = 16,
        // Apply the CSS properties to all the variants.
        allVariants,
        pxToRem: pxToRem2,
      } = _ref,
      other = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);

    const coef = fontSize / 14;

    const pxToRem =
      pxToRem2 || ((size) => `${(size / htmlFontSize) * coef}rem`);

    const buildVariant = (
      fontWeight,
      size,
      lineHeight,
      letterSpacing,
      casing
    ) =>
      (0, _extends2.default)(
        {
          fontFamily,
          fontWeight,
          fontSize: pxToRem(size),
          // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
          lineHeight,
        },
        fontFamily === defaultFontFamily
          ? {
              letterSpacing: `${round(letterSpacing / size)}em`,
            }
          : {},
        casing,
        allVariants
      );

    const variants = {
      h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
      h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
      h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
      h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
      h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
      h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
      subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
      subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
      body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
      body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
      button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
      caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
      overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    };
    return (0, esm.deepmerge)(
      (0, _extends2.default)(
        {
          htmlFontSize,
          pxToRem,
          fontFamily,
          fontSize,
          fontWeightLight,
          fontWeightRegular,
          fontWeightMedium,
          fontWeightBold,
        },
        variants
      ),
      other,
      {
        clone: false, // No need to clone deep
      }
    );
  }
});

var shadows_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  const shadowKeyUmbraOpacity = 0.2;
  const shadowKeyPenumbraOpacity = 0.14;
  const shadowAmbientShadowOpacity = 0.12;

  function createShadow(...px) {
    return [
      `${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`,
      `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`,
      `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`,
    ].join(',');
  } // Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss

  const shadows = [
    'none',
    createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
    createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
    createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
    createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
    createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
    createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
    createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
    createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
    createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
    createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
    createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
    createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
    createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
    createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
    createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
    createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
    createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
    createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
    createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
    createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
    createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
    createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
    createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
    createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
  ];
  var _default = shadows;
  exports.default = _default;
});

var createTransitions_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createTransitions;
  exports.easing = exports.duration = void 0;

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _extends2 = interopRequireDefault(_extends_1);

  const _excluded = ['duration', 'easing', 'delay'];
  // Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
  // to learn the context in which each easing should be used.
  const easing = {
    // This is the most common easing curve.
    easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
    // Objects enter the screen at full velocity from off-screen and
    // slowly decelerate to a resting point.
    easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
    // Objects leave the screen at full velocity. They do not decelerate when off-screen.
    easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
    // The sharp curve is used by objects that may return to the screen at any time.
    sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  }; // Follow https://material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
  // to learn when use what timing

  exports.easing = easing;
  const duration = {
    shortest: 150,
    shorter: 200,
    short: 250,
    // most basic recommended timing
    standard: 300,
    // this is to be used in complex animations
    complex: 375,
    // recommended when something is entering screen
    enteringScreen: 225,
    // recommended when something is leaving screen
    leavingScreen: 195,
  };
  exports.duration = duration;

  function formatMs(milliseconds) {
    return `${Math.round(milliseconds)}ms`;
  }

  function getAutoHeightDuration(height) {
    if (!height) {
      return 0;
    }

    const constant = height / 36; // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10

    return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
  }

  function createTransitions(inputTransitions) {
    const mergedEasing = (0, _extends2.default)(
      {},
      easing,
      inputTransitions.easing
    );
    const mergedDuration = (0, _extends2.default)(
      {},
      duration,
      inputTransitions.duration
    );

    const create = (props = ['all'], options = {}) => {
      const {
          duration: durationOption = mergedDuration.standard,
          easing: easingOption = mergedEasing.easeInOut,
          delay = 0,
        } = options,
        other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);

      return (Array.isArray(props) ? props : [props])
        .map(
          (animatedProp) =>
            `${animatedProp} ${
              typeof durationOption === 'string'
                ? durationOption
                : formatMs(durationOption)
            } ${easingOption} ${
              typeof delay === 'string' ? delay : formatMs(delay)
            }`
        )
        .join(',');
    };

    return (0, _extends2.default)(
      {
        getAutoHeightDuration,
        create,
      },
      inputTransitions,
      {
        easing: mergedEasing,
        duration: mergedDuration,
      }
    );
  }
});

var zIndex_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  // We need to centralize the zIndex definitions as they work
  // like global values in the browser.
  const zIndex = {
    mobileStepper: 1000,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };
  var _default = zIndex;
  exports.default = _default;
});

var createTheme_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.createMuiTheme = createMuiTheme;
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _createMixins = interopRequireDefault(createMixins_1);

  var _createPalette = interopRequireDefault(createPalette_1);

  var _createTypography = interopRequireDefault(createTypography_1);

  var _shadows = interopRequireDefault(shadows_1);

  var _createTransitions = interopRequireDefault(createTransitions_1);

  var _zIndex = interopRequireDefault(zIndex_1);

  const _excluded = [
    'breakpoints',
    'mixins',
    'spacing',
    'palette',
    'transitions',
    'typography',
    'shape',
  ];

  function createTheme(options = {}, ...args) {
    const {
        mixins: mixinsInput = {},
        palette: paletteInput = {},
        transitions: transitionsInput = {},
        typography: typographyInput = {},
      } = options,
      other = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);
    const palette = (0, _createPalette.default)(paletteInput);
    const systemTheme = (0, esm$1.createTheme)(options);
    let muiTheme = (0, esm.deepmerge)(systemTheme, {
      mixins: (0, _createMixins.default)(systemTheme.breakpoints, mixinsInput),
      palette,
      // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
      shadows: _shadows.default.slice(),
      typography: (0, _createTypography.default)(palette, typographyInput),
      transitions: (0, _createTransitions.default)(transitionsInput),
      zIndex: (0, _extends2.default)({}, _zIndex.default),
    });
    muiTheme = (0, esm.deepmerge)(muiTheme, other);
    muiTheme = args.reduce(
      (acc, argument) => (0, esm.deepmerge)(acc, argument),
      muiTheme
    );

    return muiTheme;
  }

  function createMuiTheme(...args) {
    return createTheme(...args);
  }

  var _default = createTheme;
  exports.default = _default;
});

var defaultTheme_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _createTheme = interopRequireDefault(createTheme_1);

  const defaultTheme = (0, _createTheme.default)();
  var _default = defaultTheme;
  exports.default = _default;
});

var useThemeProps_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = useThemeProps;

  var _defaultTheme = interopRequireDefault(defaultTheme_1);

  function useThemeProps({ props, name }) {
    return (0, esm$1.useThemeProps)({
      props,
      name,
      defaultTheme: _defaultTheme.default,
    });
  }
});

var styled_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.slotShouldForwardProp =
    exports.rootShouldForwardProp =
    exports.default =
      void 0;

  var _defaultTheme = interopRequireDefault(defaultTheme_1);

  const rootShouldForwardProp = (prop) =>
    (0, esm$1.shouldForwardProp)(prop) && prop !== 'classes';

  exports.rootShouldForwardProp = rootShouldForwardProp;
  const slotShouldForwardProp = esm$1.shouldForwardProp;
  exports.slotShouldForwardProp = slotShouldForwardProp;
  const styled = (0, esm$1.createStyled)({
    defaultTheme: _defaultTheme.default,
    rootShouldForwardProp,
  });
  var _default = styled;
  exports.default = _default;
});

export {
  PopperUnstyled as P,
  esm$1 as a,
  base as b,
  createTheme_1 as c,
  defaultTheme_1 as d,
  esm as e,
  createTypography_1 as f,
  createTransitions_1 as g,
  interopRequireDefault as i,
  objectWithoutPropertiesLoose as o,
  propTypes as p,
  require$$4 as r,
  styled_1 as s,
  useThemeProps_1 as u,
};

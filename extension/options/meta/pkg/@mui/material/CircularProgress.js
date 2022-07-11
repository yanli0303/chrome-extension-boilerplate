import {
  c as createCommonjsModule,
  r as react,
  g as getDefaultExportFromCjs,
} from '../../common/index-9bbaa05c.js';
import {
  b as base,
  i as interopRequireDefault,
  o as objectWithoutPropertiesLoose,
  p as propTypes,
  r as require$$4,
  u as useThemeProps_1,
  s as styled_1,
  a as esm,
} from '../../common/styled-b8db6930.js';
import {
  a4 as _extends_1,
  j as jsxRuntime,
} from '../../common/ThemeProvider-a5f96362.js';
import { c as capitalize } from '../../common/capitalize-ee96e136.js';
import '../../common/index-eace2e96.js';
import '../../common/hoist-non-react-statics.cjs-cb9d1f2a.js';

var circularProgressClasses_1 = createCommonjsModule(function (
  module,
  exports
) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  exports.getCircularProgressUtilityClass = getCircularProgressUtilityClass;

  function getCircularProgressUtilityClass(slot) {
    return (0, base.generateUtilityClass)('MuiCircularProgress', slot);
  }

  const circularProgressClasses = (0, base.generateUtilityClasses)(
    'MuiCircularProgress',
    [
      'root',
      'determinate',
      'indeterminate',
      'colorPrimary',
      'colorSecondary',
      'svg',
      'circle',
      'circleDeterminate',
      'circleIndeterminate',
      'circleDisableShrink',
    ]
  );
  var _default = circularProgressClasses;
  exports.default = _default;
});

var CircularProgress_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _extends2 = interopRequireDefault(_extends_1);

  var React = _interopRequireWildcard(react);

  var _propTypes = interopRequireDefault(propTypes);

  var _clsx = interopRequireDefault(require$$4);

  var _capitalize = interopRequireDefault(capitalize);

  var _useThemeProps = interopRequireDefault(useThemeProps_1);

  var _styled = interopRequireDefault(styled_1);

  const _excluded = [
    'className',
    'color',
    'disableShrink',
    'size',
    'style',
    'thickness',
    'value',
    'variant',
  ];

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (
      obj === null ||
      (typeof obj !== 'object' && typeof obj !== 'function')
    ) {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }

  const SIZE = 44;
  const circularRotateKeyframe = esm.keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;
  const circularDashKeyframe = esm.keyframes`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`;

  const useUtilityClasses = (ownerState) => {
    const { classes, variant, color, disableShrink } = ownerState;
    const slots = {
      root: ['root', variant, `color${(0, _capitalize.default)(color)}`],
      svg: ['svg'],
      circle: [
        'circle',
        `circle${(0, _capitalize.default)(variant)}`,
        disableShrink && 'circleDisableShrink',
      ],
    };
    return (0, base.unstable_composeClasses)(
      slots,
      circularProgressClasses_1.getCircularProgressUtilityClass,
      classes
    );
  };

  const CircularProgressRoot = (0, _styled.default)('span', {
    name: 'MuiCircularProgress',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const { ownerState } = props;
      return [
        styles.root,
        styles[ownerState.variant],
        styles[`color${(0, _capitalize.default)(ownerState.color)}`],
      ];
    },
  })(
    ({ ownerState, theme }) =>
      (0, _extends2.default)(
        {
          display: 'inline-block',
        },
        ownerState.variant === 'determinate' && {
          transition: theme.transitions.create('transform'),
        },
        ownerState.color !== 'inherit' && {
          color: (theme.vars || theme).palette[ownerState.color].main,
        }
      ),
    ({ ownerState }) =>
      ownerState.variant === 'indeterminate' &&
      esm.css`
      animation: ${circularRotateKeyframe} 1.4s linear infinite;
    `
  );
  const CircularProgressSVG = (0, _styled.default)('svg', {
    name: 'MuiCircularProgress',
    slot: 'Svg',
    overridesResolver: (props, styles) => styles.svg,
  })({
    display: 'block', // Keeps the progress centered
  });
  const CircularProgressCircle = (0, _styled.default)('circle', {
    name: 'MuiCircularProgress',
    slot: 'Circle',
    overridesResolver: (props, styles) => {
      const { ownerState } = props;
      return [
        styles.circle,
        styles[`circle${(0, _capitalize.default)(ownerState.variant)}`],
        ownerState.disableShrink && styles.circleDisableShrink,
      ];
    },
  })(
    ({ ownerState, theme }) =>
      (0, _extends2.default)(
        {
          stroke: 'currentColor',
        },
        ownerState.variant === 'determinate' && {
          transition: theme.transitions.create('stroke-dashoffset'),
        },
        ownerState.variant === 'indeterminate' && {
          // Some default value that looks fine waiting for the animation to kicks in.
          strokeDasharray: '80px, 200px',
          strokeDashoffset: 0, // Add the unit to fix a Edge 16 and below bug.
        }
      ),
    ({ ownerState }) =>
      ownerState.variant === 'indeterminate' &&
      !ownerState.disableShrink &&
      esm.css`
      animation: ${circularDashKeyframe} 1.4s ease-in-out infinite;
    `
  );
  /**
   * ## ARIA
   *
   * If the progress bar is describing the loading progress of a particular region of a page,
   * you should use `aria-describedby` to point to the progress bar, and set the `aria-busy`
   * attribute to `true` on that region until it has finished loading.
   */

  const CircularProgress = /*#__PURE__*/ React.forwardRef(
    function CircularProgress(inProps, ref) {
      const props = (0, _useThemeProps.default)({
        props: inProps,
        name: 'MuiCircularProgress',
      });
      const {
          className,
          color = 'primary',
          disableShrink = false,
          size = 40,
          style,
          thickness = 3.6,
          value = 0,
          variant = 'indeterminate',
        } = props,
        other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
      const ownerState = (0, _extends2.default)({}, props, {
        color,
        disableShrink,
        size,
        thickness,
        value,
        variant,
      });
      const classes = useUtilityClasses(ownerState);
      const circleStyle = {};
      const rootStyle = {};
      const rootProps = {};

      if (variant === 'determinate') {
        const circumference = 2 * Math.PI * ((SIZE - thickness) / 2);
        circleStyle.strokeDasharray = circumference.toFixed(3);
        rootProps['aria-valuenow'] = Math.round(value);
        circleStyle.strokeDashoffset = `${(
          ((100 - value) / 100) *
          circumference
        ).toFixed(3)}px`;
        rootStyle.transform = 'rotate(-90deg)';
      }

      return /*#__PURE__*/ (0, jsxRuntime.jsx)(
        CircularProgressRoot,
        (0, _extends2.default)(
          {
            className: (0, _clsx.default)(classes.root, className),
            style: (0, _extends2.default)(
              {
                width: size,
                height: size,
              },
              rootStyle,
              style
            ),
            ownerState: ownerState,
            ref: ref,
            role: 'progressbar',
          },
          rootProps,
          other,
          {
            children: /*#__PURE__*/ (0, jsxRuntime.jsx)(CircularProgressSVG, {
              className: classes.svg,
              ownerState: ownerState,
              viewBox: `${SIZE / 2} ${SIZE / 2} ${SIZE} ${SIZE}`,
              children: /*#__PURE__*/ (0, jsxRuntime.jsx)(
                CircularProgressCircle,
                {
                  className: classes.circle,
                  style: circleStyle,
                  ownerState: ownerState,
                  cx: SIZE,
                  cy: SIZE,
                  r: (SIZE - thickness) / 2,
                  fill: 'none',
                  strokeWidth: thickness,
                }
              ),
            }),
          }
        )
      );
    }
  );
  var _default = CircularProgress;
  exports.default = _default;
});

var CircularProgress = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  var _exportNames = {
    circularProgressClasses: true,
  };
  Object.defineProperty(exports, 'circularProgressClasses', {
    enumerable: true,
    get: function () {
      return _circularProgressClasses.default;
    },
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _CircularProgress.default;
    },
  });

  var _CircularProgress = interopRequireDefault(CircularProgress_1);

  var _circularProgressClasses = _interopRequireWildcard(
    circularProgressClasses_1
  );

  Object.keys(_circularProgressClasses).forEach(function (key) {
    if (key === 'default' || key === '__esModule') return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _circularProgressClasses[key])
      return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _circularProgressClasses[key];
      },
    });
  });

  function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== 'function') return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function (nodeInterop) {
      return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
  }

  function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
      return obj;
    }
    if (
      obj === null ||
      (typeof obj !== 'object' && typeof obj !== 'function')
    ) {
      return { default: obj };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
      return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor =
      Object.defineProperty && Object.getOwnPropertyDescriptor;
    for (var key in obj) {
      if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor
          ? Object.getOwnPropertyDescriptor(obj, key)
          : null;
        if (desc && (desc.get || desc.set)) {
          Object.defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    newObj.default = obj;
    if (cache) {
      cache.set(obj, newObj);
    }
    return newObj;
  }
});

var __pika_web_default_export_for_treeshaking__ =
  /*@__PURE__*/ getDefaultExportFromCjs(CircularProgress);

export default __pika_web_default_export_for_treeshaking__;

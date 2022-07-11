import { c as createCommonjsModule, r as react } from './index-9bbaa05c.js';
import {
  i as interopRequireDefault,
  o as objectWithoutPropertiesLoose,
  a as esm,
  c as createTheme_1,
  e as esm$1,
  d as defaultTheme_1,
  b as base,
  p as propTypes,
  r as require$$4,
  s as styled_1,
  u as useThemeProps_1,
  f as createTypography_1,
  g as createTransitions_1,
} from './styled-b8db6930.js';
import { a4 as _extends_1, j as jsxRuntime } from './ThemeProvider-a5f96362.js';

var adaptV4Theme_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = adaptV4Theme;

  var _extends2 = interopRequireDefault(_extends_1);

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  const _excluded = [
      'defaultProps',
      'mixins',
      'overrides',
      'palette',
      'props',
      'styleOverrides',
    ],
    _excluded2 = ['type', 'mode'];

  function adaptV4Theme(inputTheme) {
    const {
        defaultProps = {},
        mixins = {},
        overrides = {},
        palette = {},
        props = {},
        styleOverrides = {},
      } = inputTheme,
      other = (0, _objectWithoutPropertiesLoose2.default)(
        inputTheme,
        _excluded
      );
    const theme = (0, _extends2.default)({}, other, {
      components: {},
    }); // default props

    Object.keys(defaultProps).forEach((component) => {
      const componentValue = theme.components[component] || {};
      componentValue.defaultProps = defaultProps[component];
      theme.components[component] = componentValue;
    });
    Object.keys(props).forEach((component) => {
      const componentValue = theme.components[component] || {};
      componentValue.defaultProps = props[component];
      theme.components[component] = componentValue;
    }); // CSS overrides

    Object.keys(styleOverrides).forEach((component) => {
      const componentValue = theme.components[component] || {};
      componentValue.styleOverrides = styleOverrides[component];
      theme.components[component] = componentValue;
    });
    Object.keys(overrides).forEach((component) => {
      const componentValue = theme.components[component] || {};
      componentValue.styleOverrides = overrides[component];
      theme.components[component] = componentValue;
    }); // theme.spacing

    theme.spacing = (0, esm.createSpacing)(inputTheme.spacing); // theme.mixins.gutters

    const breakpoints = (0, esm.createBreakpoints)(
      inputTheme.breakpoints || {}
    );
    const spacing = theme.spacing;
    theme.mixins = (0, _extends2.default)(
      {
        gutters: (styles = {}) => {
          return (0, _extends2.default)(
            {
              paddingLeft: spacing(2),
              paddingRight: spacing(2),
            },
            styles,
            {
              [breakpoints.up('sm')]: (0, _extends2.default)(
                {
                  paddingLeft: spacing(3),
                  paddingRight: spacing(3),
                },
                styles[breakpoints.up('sm')]
              ),
            }
          );
        },
      },
      mixins
    );
    const { type: typeInput, mode: modeInput } = palette,
      paletteRest = (0, _objectWithoutPropertiesLoose2.default)(
        palette,
        _excluded2
      );
    const finalMode = modeInput || typeInput || 'light';
    theme.palette = (0, _extends2.default)(
      {
        // theme.palette.text.hint
        text: {
          hint:
            finalMode === 'dark'
              ? 'rgba(255, 255, 255, 0.5)'
              : 'rgba(0, 0, 0, 0.38)',
        },
        mode: finalMode,
        type: finalMode,
      },
      paletteRest
    );
    return theme;
  }
});

var createMuiStrictModeTheme_1 = createCommonjsModule(function (
  module,
  exports
) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createMuiStrictModeTheme;

  var _createTheme = interopRequireDefault(createTheme_1);

  function createMuiStrictModeTheme(options, ...args) {
    return (0, _createTheme.default)(
      (0, esm$1.deepmerge)(
        {
          unstable_strictMode: true,
        },
        options
      ),
      ...args
    );
  }
});

var createStyles_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = createStyles;
  let warnedOnce = false; // To remove in v6

  function createStyles(styles) {
    if (!warnedOnce) {
      console.warn(
        [
          'MUI: createStyles from @mui/material/styles is deprecated.',
          'Please use @mui/styles/createStyles',
        ].join('\n')
      );
      warnedOnce = true;
    }

    return styles;
  }
});

var cssUtils = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.alignProperty = alignProperty;
  exports.convertLength = convertLength;
  exports.fontGrid = fontGrid;
  exports.getUnit = getUnit;
  exports.isUnitless = isUnitless;
  exports.responsiveProperty = responsiveProperty;
  exports.toUnitless = toUnitless;

  function isUnitless(value) {
    return String(parseFloat(value)).length === String(value).length;
  } // Ported from Compass
  // https://github.com/Compass/compass/blob/master/core/stylesheets/compass/typography/_units.scss
  // Emulate the sass function "unit"

  function getUnit(input) {
    return String(input).match(/[\d.\-+]*\s*(.*)/)[1] || '';
  } // Emulate the sass function "unitless"

  function toUnitless(length) {
    return parseFloat(length);
  } // Convert any CSS <length> or <percentage> value to any another.
  // From https://github.com/KyleAMathews/convert-css-length

  function convertLength(baseFontSize) {
    return (length, toUnit) => {
      const fromUnit = getUnit(length); // Optimize for cases where `from` and `to` units are accidentally the same.

      if (fromUnit === toUnit) {
        return length;
      } // Convert input length to pixels.

      let pxLength = toUnitless(length);

      if (fromUnit !== 'px') {
        if (fromUnit === 'em') {
          pxLength = toUnitless(length) * toUnitless(baseFontSize);
        } else if (fromUnit === 'rem') {
          pxLength = toUnitless(length) * toUnitless(baseFontSize);
        }
      } // Convert length in pixels to the output unit

      let outputLength = pxLength;

      if (toUnit !== 'px') {
        if (toUnit === 'em') {
          outputLength = pxLength / toUnitless(baseFontSize);
        } else if (toUnit === 'rem') {
          outputLength = pxLength / toUnitless(baseFontSize);
        } else {
          return length;
        }
      }

      return parseFloat(outputLength.toFixed(5)) + toUnit;
    };
  }

  function alignProperty({ size, grid }) {
    const sizeBelow = size - (size % grid);
    const sizeAbove = sizeBelow + grid;
    return size - sizeBelow < sizeAbove - size ? sizeBelow : sizeAbove;
  } // fontGrid finds a minimal grid (in rem) for the fontSize values so that the
  // lineHeight falls under a x pixels grid, 4px in the case of Material Design,
  // without changing the relative line height

  function fontGrid({ lineHeight, pixels, htmlFontSize }) {
    return pixels / (lineHeight * htmlFontSize);
  }
  /**
   * generate a responsive version of a given CSS property
   * @example
   * responsiveProperty({
   *   cssProperty: 'fontSize',
   *   min: 15,
   *   max: 20,
   *   unit: 'px',
   *   breakpoints: [300, 600],
   * })
   *
   * // this returns
   *
   * {
   *   fontSize: '15px',
   *   '@media (min-width:300px)': {
   *     fontSize: '17.5px',
   *   },
   *   '@media (min-width:600px)': {
   *     fontSize: '20px',
   *   },
   * }
   * @param {Object} params
   * @param {string} params.cssProperty - The CSS property to be made responsive
   * @param {number} params.min - The smallest value of the CSS property
   * @param {number} params.max - The largest value of the CSS property
   * @param {string} [params.unit] - The unit to be used for the CSS property
   * @param {Array.number} [params.breakpoints]  - An array of breakpoints
   * @param {number} [params.alignStep] - Round scaled value to fall under this grid
   * @returns {Object} responsive styles for {params.cssProperty}
   */

  function responsiveProperty({
    cssProperty,
    min,
    max,
    unit = 'rem',
    breakpoints = [600, 900, 1200],
    transform = null,
  }) {
    const output = {
      [cssProperty]: `${min}${unit}`,
    };
    const factor = (max - min) / breakpoints[breakpoints.length - 1];
    breakpoints.forEach((breakpoint) => {
      let value = min + factor * breakpoint;

      if (transform !== null) {
        value = transform(value);
      }

      output[`@media (min-width:${breakpoint}px)`] = {
        [cssProperty]: `${Math.round(value * 10000) / 10000}${unit}`,
      };
    });
    return output;
  }
});

var responsiveFontSizes_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = responsiveFontSizes;

  var _extends2 = interopRequireDefault(_extends_1);

  function responsiveFontSizes(themeInput, options = {}) {
    const {
      breakpoints = ['sm', 'md', 'lg'],
      disableAlign = false,
      factor = 2,
      variants = [
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
      ],
    } = options;
    const theme = (0, _extends2.default)({}, themeInput);
    theme.typography = (0, _extends2.default)({}, theme.typography);
    const typography = theme.typography; // Convert between CSS lengths e.g. em->px or px->rem
    // Set the baseFontSize for your project. Defaults to 16px (also the browser default).

    const convert = (0, cssUtils.convertLength)(typography.htmlFontSize);
    const breakpointValues = breakpoints.map(
      (x) => theme.breakpoints.values[x]
    );
    variants.forEach((variant) => {
      const style = typography[variant];
      const remFontSize = parseFloat(convert(style.fontSize, 'rem'));

      if (remFontSize <= 1) {
        return;
      }

      const maxFontSize = remFontSize;
      const minFontSize = 1 + (maxFontSize - 1) / factor;
      let { lineHeight } = style;

      if (!(0, cssUtils.isUnitless)(lineHeight) && !disableAlign) {
        throw new Error((0, esm$1.formatMuiErrorMessage)(6));
      }

      if (!(0, cssUtils.isUnitless)(lineHeight)) {
        // make it unitless
        lineHeight =
          parseFloat(convert(lineHeight, 'rem')) / parseFloat(remFontSize);
      }

      let transform = null;

      if (!disableAlign) {
        transform = (value) =>
          (0, cssUtils.alignProperty)({
            size: value,
            grid: (0, cssUtils.fontGrid)({
              pixels: 4,
              lineHeight,
              htmlFontSize: typography.htmlFontSize,
            }),
          });
      }

      typography[variant] = (0, _extends2.default)(
        {},
        style,
        (0, cssUtils.responsiveProperty)({
          cssProperty: 'fontSize',
          min: minFontSize,
          max: maxFontSize,
          unit: 'rem',
          breakpoints: breakpointValues,
          transform,
        })
      );
    });
    return theme;
  }
});

var useTheme_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = useTheme;

  var React = _interopRequireWildcard(react);

  var _defaultTheme = interopRequireDefault(defaultTheme_1);

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

  function useTheme() {
    const theme = (0, esm.useTheme)(_defaultTheme.default);

    return theme;
  }
});

var ThemeProvider = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return esm.ThemeProvider;
    },
  });
});

var makeStyles_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = makeStyles;

  function makeStyles() {
    throw new Error((0, esm$1.formatMuiErrorMessage)(14));
  }
});

var withStyles_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = withStyles;

  function withStyles() {
    throw new Error((0, esm$1.formatMuiErrorMessage)(15));
  }
});

var withTheme_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = withTheme;

  function withTheme() {
    throw new Error((0, esm$1.formatMuiErrorMessage)(16));
  }
});

var paperClasses_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  exports.getPaperUtilityClass = getPaperUtilityClass;

  function getPaperUtilityClass(slot) {
    return (0, base.generateUtilityClass)('MuiPaper', slot);
  }

  const paperClasses = (0, base.generateUtilityClasses)('MuiPaper', [
    'root',
    'rounded',
    'outlined',
    'elevation',
    'elevation0',
    'elevation1',
    'elevation2',
    'elevation3',
    'elevation4',
    'elevation5',
    'elevation6',
    'elevation7',
    'elevation8',
    'elevation9',
    'elevation10',
    'elevation11',
    'elevation12',
    'elevation13',
    'elevation14',
    'elevation15',
    'elevation16',
    'elevation17',
    'elevation18',
    'elevation19',
    'elevation20',
    'elevation21',
    'elevation22',
    'elevation23',
    'elevation24',
  ]);
  var _default = paperClasses;
  exports.default = _default;
});

var Paper_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getOverlayAlpha = exports.default = void 0;

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _extends2 = interopRequireDefault(_extends_1);

  var React = _interopRequireWildcard(react);

  var _propTypes = interopRequireDefault(propTypes);

  var _clsx = interopRequireDefault(require$$4);

  var _styled = interopRequireDefault(styled_1);

  var _useThemeProps = interopRequireDefault(useThemeProps_1);

  var _useTheme = interopRequireDefault(useTheme_1);

  const _excluded = [
    'className',
    'component',
    'elevation',
    'square',
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

  // Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
  const getOverlayAlpha = (elevation) => {
    let alphaValue;

    if (elevation < 1) {
      alphaValue = 5.11916 * elevation ** 2;
    } else {
      alphaValue = 4.5 * Math.log(elevation + 1) + 2;
    }

    return (alphaValue / 100).toFixed(2);
  };

  exports.getOverlayAlpha = getOverlayAlpha;

  const useUtilityClasses = (ownerState) => {
    const { square, elevation, variant, classes } = ownerState;
    const slots = {
      root: [
        'root',
        variant,
        !square && 'rounded',
        variant === 'elevation' && `elevation${elevation}`,
      ],
    };
    return (0, base.unstable_composeClasses)(
      slots,
      paperClasses_1.getPaperUtilityClass,
      classes
    );
  };

  const PaperRoot = (0, _styled.default)('div', {
    name: 'MuiPaper',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const { ownerState } = props;
      return [
        styles.root,
        styles[ownerState.variant],
        !ownerState.square && styles.rounded,
        ownerState.variant === 'elevation' &&
          styles[`elevation${ownerState.elevation}`],
      ];
    },
  })(({ theme, ownerState }) => {
    var _theme$vars$overlays;

    return (0, _extends2.default)(
      {
        backgroundColor: (theme.vars || theme).palette.background.paper,
        color: (theme.vars || theme).palette.text.primary,
        transition: theme.transitions.create('box-shadow'),
      },
      !ownerState.square && {
        borderRadius: theme.shape.borderRadius,
      },
      ownerState.variant === 'outlined' && {
        border: `1px solid ${(theme.vars || theme).palette.divider}`,
      },
      ownerState.variant === 'elevation' &&
        (0, _extends2.default)(
          {
            boxShadow: (theme.vars || theme).shadows[ownerState.elevation],
          },
          !theme.vars &&
            theme.palette.mode === 'dark' && {
              backgroundImage: `linear-gradient(${(0, esm.alpha)(
                '#fff',
                getOverlayAlpha(ownerState.elevation)
              )}, ${(0, esm.alpha)(
                '#fff',
                getOverlayAlpha(ownerState.elevation)
              )})`,
            },
          theme.vars && {
            backgroundImage:
              (_theme$vars$overlays = theme.vars.overlays) == null
                ? void 0
                : _theme$vars$overlays[ownerState.elevation],
          }
        )
    );
  });
  const Paper = /*#__PURE__*/ React.forwardRef(function Paper(inProps, ref) {
    const props = (0, _useThemeProps.default)({
      props: inProps,
      name: 'MuiPaper',
    });
    const {
        className,
        component = 'div',
        elevation = 1,
        square = false,
        variant = 'elevation',
      } = props,
      other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    const ownerState = (0, _extends2.default)({}, props, {
      component,
      elevation,
      square,
      variant,
    });
    const classes = useUtilityClasses(ownerState);

    return /*#__PURE__*/ (0, jsxRuntime.jsx)(
      PaperRoot,
      (0, _extends2.default)(
        {
          as: component,
          ownerState: ownerState,
          className: (0, _clsx.default)(classes.root, className),
          ref: ref,
        },
        other
      )
    );
  });
  var _default = Paper;
  exports.default = _default;
});

var experimental_extendTheme = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = extendTheme;

  var _extends2 = interopRequireDefault(_extends_1);

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _createTheme = interopRequireDefault(createTheme_1);

  const _excluded = ['colorSchemes'],
    _excluded2 = ['palette'];
  const defaultDarkOverlays = [...Array(25)].map((_, index) => {
    if (index === 0) {
      return undefined;
    }

    const overlay = (0, Paper_1.getOverlayAlpha)(index);
    return `linear-gradient(rgba(255 255 255 / ${overlay}), rgba(255 255 255 / ${overlay}))`;
  });

  function assignNode(obj, keys) {
    keys.forEach((k) => {
      if (!obj[k]) {
        obj[k] = {};
      }
    });
  }

  function setColor(obj, key, defaultValue) {
    obj[key] = obj[key] || defaultValue;
  }

  function extendTheme(options = {}, ...args) {
    var _colorSchemesInput$li,
      _colorSchemesInput$da,
      _colorSchemesInput$li2,
      _colorSchemesInput$li3,
      _colorSchemesInput$da2,
      _colorSchemesInput$da3;

    const { colorSchemes: colorSchemesInput = {} } = options,
      input = (0, _objectWithoutPropertiesLoose2.default)(options, _excluded);

    const _createThemeWithoutVa = (0, _createTheme.default)(
        (0, _extends2.default)(
          {},
          input,
          colorSchemesInput.light && {
            palette:
              (_colorSchemesInput$li = colorSchemesInput.light) == null
                ? void 0
                : _colorSchemesInput$li.palette,
          }
        )
      ),
      { palette: lightPalette } = _createThemeWithoutVa,
      muiTheme = (0, _objectWithoutPropertiesLoose2.default)(
        _createThemeWithoutVa,
        _excluded2
      );

    const { palette: darkPalette } = (0, _createTheme.default)({
      palette: (0, _extends2.default)(
        {
          mode: 'dark',
        },
        (_colorSchemesInput$da = colorSchemesInput.dark) == null
          ? void 0
          : _colorSchemesInput$da.palette
      ),
    });
    let theme = (0, _extends2.default)({}, muiTheme, {
      colorSchemes: (0, _extends2.default)({}, colorSchemesInput, {
        light: (0, _extends2.default)({}, colorSchemesInput.light, {
          palette: lightPalette,
          opacity: (0, _extends2.default)(
            {
              inputPlaceholder: 0.42,
              inputTouchBottomLine: 0.42,
              switchTrackDisabled: 0.12,
              switchTrack: 0.38,
            },
            (_colorSchemesInput$li2 = colorSchemesInput.light) == null
              ? void 0
              : _colorSchemesInput$li2.opacity
          ),
          overlays:
            ((_colorSchemesInput$li3 = colorSchemesInput.light) == null
              ? void 0
              : _colorSchemesInput$li3.overlays) || [],
        }),
        dark: (0, _extends2.default)({}, colorSchemesInput.dark, {
          palette: darkPalette,
          opacity: (0, _extends2.default)(
            {
              inputPlaceholder: 0.5,
              inputTouchBottomLine: 0.7,
              switchTrackDisabled: 0.2,
              switchTrack: 0.3,
            },
            (_colorSchemesInput$da2 = colorSchemesInput.dark) == null
              ? void 0
              : _colorSchemesInput$da2.opacity
          ),
          overlays:
            ((_colorSchemesInput$da3 = colorSchemesInput.dark) == null
              ? void 0
              : _colorSchemesInput$da3.overlays) || defaultDarkOverlays,
        }),
      }),
    });
    Object.keys(theme.colorSchemes).forEach((key) => {
      const palette = theme.colorSchemes[key].palette; // attach black & white channels to common node

      if (key === 'light') {
        setColor(palette.common, 'background', '#fff');
        setColor(palette.common, 'onBackground', '#000');
      } else {
        setColor(palette.common, 'background', '#000');
        setColor(palette.common, 'onBackground', '#fff');
      } // assign component variables

      assignNode(palette, [
        'AppBar',
        'Avatar',
        'Chip',
        'FilledInput',
        'LinearProgress',
        'Skeleton',
        'Slider',
        'SnackbarContent',
        'SpeedDialAction',
        'StepConnector',
        'StepContent',
        'Switch',
        'TableCell',
        'Tooltip',
      ]);

      if (key === 'light') {
        setColor(palette.AppBar, 'defaultBg', 'var(--mui-palette-grey-100)');
        setColor(palette.Avatar, 'defaultBg', 'var(--mui-palette-grey-400)');
        setColor(palette.Chip, 'defaultBorder', 'var(--mui-palette-grey-400)');
        setColor(
          palette.Chip,
          'defaultAvatarColor',
          'var(--mui-palette-grey-700)'
        );
        setColor(
          palette.Chip,
          'defaultIconColor',
          'var(--mui-palette-grey-700)'
        );
        setColor(palette.FilledInput, 'bg', 'rgba(0, 0, 0, 0.06)');
        setColor(palette.FilledInput, 'hoverBg', 'rgba(0, 0, 0, 0.09)');
        setColor(palette.FilledInput, 'disabledBg', 'rgba(0, 0, 0, 0.12)');
        setColor(
          palette.LinearProgress,
          'primaryBg',
          (0, esm.lighten)(palette.primary.main, 0.62)
        );
        setColor(
          palette.LinearProgress,
          'secondaryBg',
          (0, esm.lighten)(palette.secondary.main, 0.62)
        );
        setColor(
          palette.LinearProgress,
          'errorBg',
          (0, esm.lighten)(palette.error.main, 0.62)
        );
        setColor(
          palette.LinearProgress,
          'infoBg',
          (0, esm.lighten)(palette.info.main, 0.62)
        );
        setColor(
          palette.LinearProgress,
          'successBg',
          (0, esm.lighten)(palette.success.main, 0.62)
        );
        setColor(
          palette.LinearProgress,
          'warningBg',
          (0, esm.lighten)(palette.warning.main, 0.62)
        );
        setColor(
          palette.Skeleton,
          'bg',
          'rgba(var(--mui-palette-text-primaryChannel) / 0.11)'
        );
        setColor(
          palette.Slider,
          'primaryTrack',
          (0, esm.lighten)(palette.primary.main, 0.62)
        );
        setColor(
          palette.Slider,
          'secondaryTrack',
          (0, esm.lighten)(palette.secondary.main, 0.62)
        );
        setColor(
          palette.Slider,
          'errorTrack',
          (0, esm.lighten)(palette.error.main, 0.62)
        );
        setColor(
          palette.Slider,
          'infoTrack',
          (0, esm.lighten)(palette.info.main, 0.62)
        );
        setColor(
          palette.Slider,
          'successTrack',
          (0, esm.lighten)(palette.success.main, 0.62)
        );
        setColor(
          palette.Slider,
          'warningTrack',
          (0, esm.lighten)(palette.warning.main, 0.62)
        );
        setColor(
          palette.SnackbarContent,
          'bg',
          (0, esm.emphasize)(palette.background.default, 0.8)
        );
        setColor(
          palette.SpeedDialAction,
          'fabHoverBg',
          (0, esm.emphasize)(palette.background.paper, 0.15)
        );
        setColor(
          palette.StepConnector,
          'border',
          'var(--mui-palette-grey-400)'
        );
        setColor(palette.StepContent, 'border', 'var(--mui-palette-grey-400)');
        setColor(
          palette.Switch,
          'defaultColor',
          'var(--mui-palette-common-white)'
        );
        setColor(
          palette.Switch,
          'defaultDisabledColor',
          'var(--mui-palette-grey-100)'
        );
        setColor(
          palette.Switch,
          'primaryDisabledColor',
          (0, esm.lighten)(palette.primary.main, 0.62)
        );
        setColor(
          palette.Switch,
          'secondaryDisabledColor',
          (0, esm.lighten)(palette.secondary.main, 0.62)
        );
        setColor(
          palette.Switch,
          'errorDisabledColor',
          (0, esm.lighten)(palette.error.main, 0.62)
        );
        setColor(
          palette.Switch,
          'infoDisabledColor',
          (0, esm.lighten)(palette.info.main, 0.62)
        );
        setColor(
          palette.Switch,
          'successDisabledColor',
          (0, esm.lighten)(palette.success.main, 0.62)
        );
        setColor(
          palette.Switch,
          'warningDisabledColor',
          (0, esm.lighten)(palette.warning.main, 0.62)
        );
        setColor(
          palette.TableCell,
          'border',
          (0, esm.lighten)((0, esm.alpha)(palette.divider, 1), 0.88)
        );
        setColor(
          palette.Tooltip,
          'bg',
          (0, esm.alpha)(palette.grey[700], 0.92)
        );
      } else {
        setColor(palette.AppBar, 'defaultBg', 'var(--mui-palette-grey-900)');
        setColor(
          palette.AppBar,
          'darkBg',
          'var(--mui-palette-background-paper)'
        ); // specific for dark mode

        setColor(
          palette.AppBar,
          'darkColor',
          'var(--mui-palette-text-primary)'
        ); // specific for dark mode

        setColor(palette.Avatar, 'defaultBg', 'var(--mui-palette-grey-600)');
        setColor(palette.Chip, 'defaultBorder', 'var(--mui-palette-grey-700)');
        setColor(
          palette.Chip,
          'defaultAvatarColor',
          'var(--mui-palette-grey-300)'
        );
        setColor(
          palette.Chip,
          'defaultIconColor',
          'var(--mui-palette-grey-300)'
        );
        setColor(palette.FilledInput, 'bg', 'rgba(255, 255, 255, 0.09)');
        setColor(palette.FilledInput, 'hoverBg', 'rgba(255, 255, 255, 0.13)');
        setColor(
          palette.FilledInput,
          'disabledBg',
          'rgba(255, 255, 255, 0.12)'
        );
        setColor(
          palette.LinearProgress,
          'primaryBg',
          (0, esm.darken)(palette.primary.main, 0.5)
        );
        setColor(
          palette.LinearProgress,
          'secondaryBg',
          (0, esm.darken)(palette.secondary.main, 0.5)
        );
        setColor(
          palette.LinearProgress,
          'errorBg',
          (0, esm.darken)(palette.error.main, 0.5)
        );
        setColor(
          palette.LinearProgress,
          'infoBg',
          (0, esm.darken)(palette.info.main, 0.5)
        );
        setColor(
          palette.LinearProgress,
          'successBg',
          (0, esm.darken)(palette.success.main, 0.5)
        );
        setColor(
          palette.LinearProgress,
          'warningBg',
          (0, esm.darken)(palette.warning.main, 0.5)
        );
        setColor(
          palette.Skeleton,
          'bg',
          'rgba(var(--mui-palette-text-primaryChannel) / 0.13)'
        );
        setColor(
          palette.Slider,
          'primaryTrack',
          (0, esm.darken)(palette.primary.main, 0.5)
        );
        setColor(
          palette.Slider,
          'secondaryTrack',
          (0, esm.darken)(palette.secondary.main, 0.5)
        );
        setColor(
          palette.Slider,
          'errorTrack',
          (0, esm.darken)(palette.error.main, 0.5)
        );
        setColor(
          palette.Slider,
          'infoTrack',
          (0, esm.darken)(palette.info.main, 0.5)
        );
        setColor(
          palette.Slider,
          'successTrack',
          (0, esm.darken)(palette.success.main, 0.5)
        );
        setColor(
          palette.Slider,
          'warningTrack',
          (0, esm.darken)(palette.warning.main, 0.5)
        );
        setColor(
          palette.SnackbarContent,
          'bg',
          (0, esm.emphasize)(palette.background.default, 0.98)
        );
        setColor(
          palette.SpeedDialAction,
          'fabHoverBg',
          (0, esm.emphasize)(palette.background.paper, 0.15)
        );
        setColor(
          palette.StepConnector,
          'border',
          'var(--mui-palette-grey-600)'
        );
        setColor(palette.StepContent, 'border', 'var(--mui-palette-grey-600)');
        setColor(palette.Switch, 'defaultColor', 'var(--mui-palette-grey-300)');
        setColor(
          palette.Switch,
          'defaultDisabledColor',
          'var(--mui-palette-grey-600)'
        );
        setColor(
          palette.Switch,
          'primaryDisabledColor',
          (0, esm.darken)(palette.primary.main, 0.55)
        );
        setColor(
          palette.Switch,
          'secondaryDisabledColor',
          (0, esm.darken)(palette.secondary.main, 0.55)
        );
        setColor(
          palette.Switch,
          'errorDisabledColor',
          (0, esm.darken)(palette.error.main, 0.55)
        );
        setColor(
          palette.Switch,
          'infoDisabledColor',
          (0, esm.darken)(palette.info.main, 0.55)
        );
        setColor(
          palette.Switch,
          'successDisabledColor',
          (0, esm.darken)(palette.success.main, 0.55)
        );
        setColor(
          palette.Switch,
          'warningDisabledColor',
          (0, esm.darken)(palette.warning.main, 0.55)
        );
        setColor(
          palette.TableCell,
          'border',
          (0, esm.darken)((0, esm.alpha)(palette.divider, 1), 0.68)
        );
        setColor(
          palette.Tooltip,
          'bg',
          (0, esm.alpha)(palette.grey[700], 0.92)
        );
      }

      palette.common.backgroundChannel = (0, esm.colorChannel)(
        palette.common.background
      );
      palette.common.onBackgroundChannel = (0, esm.colorChannel)(
        palette.common.onBackground
      );
      palette.dividerChannel = (0, esm.colorChannel)(palette.divider);
      Object.keys(palette).forEach((color) => {
        const colors = palette[color]; // Color palettes: primary, secondary, error, info, success, and warning

        if (colors.main) {
          palette[color].mainChannel = (0, esm.colorChannel)(colors.main);
        }

        if (colors.light) {
          palette[color].lightChannel = (0, esm.colorChannel)(colors.light);
        }

        if (colors.dark) {
          palette[color].darkChannel = (0, esm.colorChannel)(colors.dark);
        }

        if (colors.contrastText) {
          palette[color].contrastTextChannel = (0, esm.colorChannel)(
            colors.contrastText
          );
        } // Text colors: text.primary, text.secondary

        if (colors.primary) {
          palette[color].primaryChannel = (0, esm.colorChannel)(colors.primary);
        }

        if (colors.secondary) {
          palette[color].secondaryChannel = (0, esm.colorChannel)(
            colors.secondary
          );
        } // Action colors: action.active, action.selected

        if (colors.active) {
          palette[color].activeChannel = (0, esm.colorChannel)(colors.active);
        }

        if (colors.selected) {
          palette[color].selectedChannel = (0, esm.colorChannel)(
            colors.selected
          );
        }
      });
    });
    theme = args.reduce(
      (acc, argument) => (0, esm$1.deepmerge)(acc, argument),
      theme
    );
    return theme;
  }
});

var CssVarsProvider = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.useColorScheme =
    exports.getInitColorSchemeScript =
    exports.Experimental_CssVarsProvider =
      void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _experimental_extendTheme = interopRequireDefault(
    experimental_extendTheme
  );

  var _createTypography = interopRequireDefault(createTypography_1);

  /* eslint-disable @typescript-eslint/naming-convention */
  const defaultTheme = (0, _experimental_extendTheme.default)();
  const {
    CssVarsProvider: Experimental_CssVarsProvider,
    useColorScheme,
    getInitColorSchemeScript,
  } = (0, esm.unstable_createCssVarsProvider)({
    theme: defaultTheme,
    attribute: 'data-mui-color-scheme',
    modeStorageKey: 'mui-mode',
    colorSchemeStorageKey: 'mui-color-scheme',
    defaultColorScheme: {
      light: 'light',
      dark: 'dark',
    },
    prefix: 'mui',
    resolveTheme: (theme) => {
      const newTheme = (0, _extends2.default)({}, theme, {
        typography: (0, _createTypography.default)(
          theme.palette,
          theme.typography
        ),
      });
      return newTheme;
    },
    shouldSkipGeneratingVar: (keys) =>
      !!keys[0].match(/(typography|mixins|breakpoints|direction|transitions)/),
  });
  exports.getInitColorSchemeScript = getInitColorSchemeScript;
  exports.useColorScheme = useColorScheme;
  exports.Experimental_CssVarsProvider = Experimental_CssVarsProvider;
});

var styles = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  var _exportNames = {
    adaptV4Theme: true,
    hexToRgb: true,
    rgbToHex: true,
    hslToRgb: true,
    decomposeColor: true,
    recomposeColor: true,
    getContrastRatio: true,
    getLuminance: true,
    emphasize: true,
    alpha: true,
    darken: true,
    lighten: true,
    css: true,
    keyframes: true,
    experimental_sx: true,
    StyledEngineProvider: true,
    createTheme: true,
    createMuiTheme: true,
    unstable_createMuiStrictModeTheme: true,
    createStyles: true,
    unstable_getUnit: true,
    unstable_toUnitless: true,
    responsiveFontSizes: true,
    duration: true,
    easing: true,
    useTheme: true,
    useThemeProps: true,
    styled: true,
    experimentalStyled: true,
    ThemeProvider: true,
    makeStyles: true,
    withStyles: true,
    withTheme: true,
    experimental_extendTheme: true,
  };
  Object.defineProperty(exports, 'StyledEngineProvider', {
    enumerable: true,
    get: function () {
      return esm.StyledEngineProvider;
    },
  });
  Object.defineProperty(exports, 'ThemeProvider', {
    enumerable: true,
    get: function () {
      return _ThemeProvider.default;
    },
  });
  Object.defineProperty(exports, 'adaptV4Theme', {
    enumerable: true,
    get: function () {
      return _adaptV4Theme.default;
    },
  });
  Object.defineProperty(exports, 'alpha', {
    enumerable: true,
    get: function () {
      return esm.alpha;
    },
  });
  Object.defineProperty(exports, 'createMuiTheme', {
    enumerable: true,
    get: function () {
      return _createTheme.createMuiTheme;
    },
  });
  Object.defineProperty(exports, 'createStyles', {
    enumerable: true,
    get: function () {
      return _createStyles.default;
    },
  });
  Object.defineProperty(exports, 'createTheme', {
    enumerable: true,
    get: function () {
      return _createTheme.default;
    },
  });
  Object.defineProperty(exports, 'css', {
    enumerable: true,
    get: function () {
      return esm.css;
    },
  });
  Object.defineProperty(exports, 'darken', {
    enumerable: true,
    get: function () {
      return esm.darken;
    },
  });
  Object.defineProperty(exports, 'decomposeColor', {
    enumerable: true,
    get: function () {
      return esm.decomposeColor;
    },
  });
  Object.defineProperty(exports, 'duration', {
    enumerable: true,
    get: function () {
      return createTransitions_1.duration;
    },
  });
  Object.defineProperty(exports, 'easing', {
    enumerable: true,
    get: function () {
      return createTransitions_1.easing;
    },
  });
  Object.defineProperty(exports, 'emphasize', {
    enumerable: true,
    get: function () {
      return esm.emphasize;
    },
  });
  Object.defineProperty(exports, 'experimentalStyled', {
    enumerable: true,
    get: function () {
      return _styled.default;
    },
  });
  Object.defineProperty(exports, 'experimental_extendTheme', {
    enumerable: true,
    get: function () {
      return _experimental_extendTheme.default;
    },
  });
  Object.defineProperty(exports, 'experimental_sx', {
    enumerable: true,
    get: function () {
      return esm.experimental_sx;
    },
  });
  Object.defineProperty(exports, 'getContrastRatio', {
    enumerable: true,
    get: function () {
      return esm.getContrastRatio;
    },
  });
  Object.defineProperty(exports, 'getLuminance', {
    enumerable: true,
    get: function () {
      return esm.getLuminance;
    },
  });
  Object.defineProperty(exports, 'hexToRgb', {
    enumerable: true,
    get: function () {
      return esm.hexToRgb;
    },
  });
  Object.defineProperty(exports, 'hslToRgb', {
    enumerable: true,
    get: function () {
      return esm.hslToRgb;
    },
  });
  Object.defineProperty(exports, 'keyframes', {
    enumerable: true,
    get: function () {
      return esm.keyframes;
    },
  });
  Object.defineProperty(exports, 'lighten', {
    enumerable: true,
    get: function () {
      return esm.lighten;
    },
  });
  Object.defineProperty(exports, 'makeStyles', {
    enumerable: true,
    get: function () {
      return _makeStyles.default;
    },
  });
  Object.defineProperty(exports, 'recomposeColor', {
    enumerable: true,
    get: function () {
      return esm.recomposeColor;
    },
  });
  Object.defineProperty(exports, 'responsiveFontSizes', {
    enumerable: true,
    get: function () {
      return _responsiveFontSizes.default;
    },
  });
  Object.defineProperty(exports, 'rgbToHex', {
    enumerable: true,
    get: function () {
      return esm.rgbToHex;
    },
  });
  Object.defineProperty(exports, 'styled', {
    enumerable: true,
    get: function () {
      return _styled.default;
    },
  });
  Object.defineProperty(exports, 'unstable_createMuiStrictModeTheme', {
    enumerable: true,
    get: function () {
      return _createMuiStrictModeTheme.default;
    },
  });
  Object.defineProperty(exports, 'unstable_getUnit', {
    enumerable: true,
    get: function () {
      return cssUtils.getUnit;
    },
  });
  Object.defineProperty(exports, 'unstable_toUnitless', {
    enumerable: true,
    get: function () {
      return cssUtils.toUnitless;
    },
  });
  Object.defineProperty(exports, 'useTheme', {
    enumerable: true,
    get: function () {
      return _useTheme.default;
    },
  });
  Object.defineProperty(exports, 'useThemeProps', {
    enumerable: true,
    get: function () {
      return _useThemeProps.default;
    },
  });
  Object.defineProperty(exports, 'withStyles', {
    enumerable: true,
    get: function () {
      return _withStyles.default;
    },
  });
  Object.defineProperty(exports, 'withTheme', {
    enumerable: true,
    get: function () {
      return _withTheme.default;
    },
  });

  var _adaptV4Theme = interopRequireDefault(adaptV4Theme_1);

  var _createTheme = _interopRequireWildcard(createTheme_1);

  var _createMuiStrictModeTheme = interopRequireDefault(
    createMuiStrictModeTheme_1
  );

  var _createStyles = interopRequireDefault(createStyles_1);

  var _responsiveFontSizes = interopRequireDefault(responsiveFontSizes_1);

  var _useTheme = interopRequireDefault(useTheme_1);

  var _useThemeProps = interopRequireDefault(useThemeProps_1);

  var _styled = interopRequireDefault(styled_1);

  var _ThemeProvider = interopRequireDefault(ThemeProvider);

  var _makeStyles = interopRequireDefault(makeStyles_1);

  var _withStyles = interopRequireDefault(withStyles_1);

  var _withTheme = interopRequireDefault(withTheme_1);

  Object.keys(CssVarsProvider).forEach(function (key) {
    if (key === 'default' || key === '__esModule') return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === CssVarsProvider[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return CssVarsProvider[key];
      },
    });
  });

  var _experimental_extendTheme = interopRequireDefault(
    experimental_extendTheme
  );

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

export { styles as s, useTheme_1 as u };

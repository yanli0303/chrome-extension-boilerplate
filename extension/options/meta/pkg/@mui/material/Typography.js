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
  s as styled_1,
  u as useThemeProps_1,
  a as esm,
} from '../../common/styled-b8db6930.js';
import {
  a4 as _extends_1,
  j as jsxRuntime,
} from '../../common/ThemeProvider-a5f96362.js';
import { c as capitalize } from '../../common/capitalize-ee96e136.js';
import '../../common/index-eace2e96.js';
import '../../common/hoist-non-react-statics.cjs-cb9d1f2a.js';

var typographyClasses_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  exports.getTypographyUtilityClass = getTypographyUtilityClass;

  function getTypographyUtilityClass(slot) {
    return (0, base.generateUtilityClass)('MuiTypography', slot);
  }

  const typographyClasses = (0, base.generateUtilityClasses)('MuiTypography', [
    'root',
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
    'inherit',
    'button',
    'caption',
    'overline',
    'alignLeft',
    'alignRight',
    'alignCenter',
    'alignJustify',
    'noWrap',
    'gutterBottom',
    'paragraph',
  ]);
  var _default = typographyClasses;
  exports.default = _default;
});

var Typography_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = exports.TypographyRoot = void 0;

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _extends2 = interopRequireDefault(_extends_1);

  var React = _interopRequireWildcard(react);

  var _propTypes = interopRequireDefault(propTypes);

  var _clsx = interopRequireDefault(require$$4);

  var _styled = interopRequireDefault(styled_1);

  var _useThemeProps = interopRequireDefault(useThemeProps_1);

  var _capitalize = interopRequireDefault(capitalize);

  const _excluded = [
    'align',
    'className',
    'component',
    'gutterBottom',
    'noWrap',
    'paragraph',
    'variant',
    'variantMapping',
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

  const useUtilityClasses = (ownerState) => {
    const { align, gutterBottom, noWrap, paragraph, variant, classes } =
      ownerState;
    const slots = {
      root: [
        'root',
        variant,
        ownerState.align !== 'inherit' &&
          `align${(0, _capitalize.default)(align)}`,
        gutterBottom && 'gutterBottom',
        noWrap && 'noWrap',
        paragraph && 'paragraph',
      ],
    };
    return (0, base.unstable_composeClasses)(
      slots,
      typographyClasses_1.getTypographyUtilityClass,
      classes
    );
  };

  const TypographyRoot = (0, _styled.default)('span', {
    name: 'MuiTypography',
    slot: 'Root',
    overridesResolver: (props, styles) => {
      const { ownerState } = props;
      return [
        styles.root,
        ownerState.variant && styles[ownerState.variant],
        ownerState.align !== 'inherit' &&
          styles[`align${(0, _capitalize.default)(ownerState.align)}`],
        ownerState.noWrap && styles.noWrap,
        ownerState.gutterBottom && styles.gutterBottom,
        ownerState.paragraph && styles.paragraph,
      ];
    },
  })(({ theme, ownerState }) =>
    (0, _extends2.default)(
      {
        margin: 0,
      },
      ownerState.variant && theme.typography[ownerState.variant],
      ownerState.align !== 'inherit' && {
        textAlign: ownerState.align,
      },
      ownerState.noWrap && {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      },
      ownerState.gutterBottom && {
        marginBottom: '0.35em',
      },
      ownerState.paragraph && {
        marginBottom: 16,
      }
    )
  );
  exports.TypographyRoot = TypographyRoot;
  const defaultVariantMapping = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5',
    h6: 'h6',
    subtitle1: 'h6',
    subtitle2: 'h6',
    body1: 'p',
    body2: 'p',
    inherit: 'p',
  }; // TODO v6: deprecate these color values in v5.x and remove the transformation in v6

  const colorTransformations = {
    primary: 'primary.main',
    textPrimary: 'text.primary',
    secondary: 'secondary.main',
    textSecondary: 'text.secondary',
    error: 'error.main',
  };

  const transformDeprecatedColors = (color) => {
    return colorTransformations[color] || color;
  };

  const Typography = /*#__PURE__*/ React.forwardRef(function Typography(
    inProps,
    ref
  ) {
    const themeProps = (0, _useThemeProps.default)({
      props: inProps,
      name: 'MuiTypography',
    });
    const color = transformDeprecatedColors(themeProps.color);
    const props = (0, esm.unstable_extendSxProp)(
      (0, _extends2.default)({}, themeProps, {
        color,
      })
    );
    const {
        align = 'inherit',
        className,
        component,
        gutterBottom = false,
        noWrap = false,
        paragraph = false,
        variant = 'body1',
        variantMapping = defaultVariantMapping,
      } = props,
      other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    const ownerState = (0, _extends2.default)({}, props, {
      align,
      color,
      className,
      component,
      gutterBottom,
      noWrap,
      paragraph,
      variant,
      variantMapping,
    });
    const Component =
      component ||
      (paragraph
        ? 'p'
        : variantMapping[variant] || defaultVariantMapping[variant]) ||
      'span';
    const classes = useUtilityClasses(ownerState);
    return /*#__PURE__*/ (0, jsxRuntime.jsx)(
      TypographyRoot,
      (0, _extends2.default)(
        {
          as: Component,
          ref: ref,
          ownerState: ownerState,
          className: (0, _clsx.default)(classes.root, className),
        },
        other
      )
    );
  });
  var _default = Typography;
  exports.default = _default;
});

var Typography = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  var _exportNames = {
    typographyClasses: true,
  };
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _Typography.default;
    },
  });
  Object.defineProperty(exports, 'typographyClasses', {
    enumerable: true,
    get: function () {
      return _typographyClasses.default;
    },
  });

  var _Typography = interopRequireDefault(Typography_1);

  var _typographyClasses = _interopRequireWildcard(typographyClasses_1);

  Object.keys(_typographyClasses).forEach(function (key) {
    if (key === 'default' || key === '__esModule') return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _typographyClasses[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _typographyClasses[key];
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
  /*@__PURE__*/ getDefaultExportFromCjs(Typography);

export default __pika_web_default_export_for_treeshaking__;

import {
  c as createCommonjsModule,
  g as getDefaultExportFromCjs,
} from '../../common/index-9bbaa05c.js';
import {
  e as esm,
  i as interopRequireDefault,
  p as propTypes,
  a as esm$1,
} from '../../common/styled-b8db6930.js';
import { s as styles } from '../../common/index-f8fdf76a.js';
import '../../common/ThemeProvider-a5f96362.js';
import '../../common/hoist-non-react-statics.cjs-cb9d1f2a.js';
import '../../common/index-eace2e96.js';

var className = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'unstable_ClassNameGenerator', {
    enumerable: true,
    get: function () {
      return esm.unstable_ClassNameGenerator;
    },
  });
});

var Box_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _propTypes = interopRequireDefault(propTypes);

  const defaultTheme = (0, styles.createTheme)();
  const Box = (0, esm$1.createBox)({
    defaultTheme,
    defaultClassName: 'MuiBox-root',
    generateClassName: className.unstable_ClassNameGenerator.generate,
  });
  var _default = Box;
  exports.default = _default;
});

var Box = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _Box.default;
    },
  });

  var _Box = interopRequireDefault(Box_1);
});

var __pika_web_default_export_for_treeshaking__ =
  /*@__PURE__*/ getDefaultExportFromCjs(Box);

export default __pika_web_default_export_for_treeshaking__;

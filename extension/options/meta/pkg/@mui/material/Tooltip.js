import {
  r as react,
  c as createCommonjsModule,
  g as getDefaultExportFromCjs,
} from '../../common/index-9bbaa05c.js';
import {
  e as esm$1,
  i as interopRequireDefault,
  o as objectWithoutPropertiesLoose,
  p as propTypes,
  P as PopperUnstyled,
  a as esm$2,
  b as base,
  r as require$$4,
  s as styled_1,
  u as useThemeProps_1,
} from '../../common/styled-b8db6930.js';
import {
  a as _objectWithoutPropertiesLoose,
  _ as _extends,
  a4 as _extends_1,
  j as jsxRuntime,
} from '../../common/ThemeProvider-a5f96362.js';
import { u as useTheme_1, s as styles } from '../../common/index-f8fdf76a.js';
import { c as capitalize } from '../../common/capitalize-ee96e136.js';
import { r as reactDom } from '../../common/index-eace2e96.js';
import '../../common/hoist-non-react-statics.cjs-cb9d1f2a.js';

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/**
 * Checks if a given element has a CSS class.
 *
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList)
    return !!className && element.classList.contains(className);
  return (
    (' ' + (element.className.baseVal || element.className) + ' ').indexOf(
      ' ' + className + ' '
    ) !== -1
  );
}

/**
 * Adds a CSS class to a given element.
 *
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);
  else if (!hasClass(element, className))
    if (typeof element.className === 'string')
      element.className = element.className + ' ' + className;
    else
      element.setAttribute(
        'class',
        ((element.className && element.className.baseVal) || '') +
          ' ' +
          className
      );
}

function replaceClassName(origClass, classToRemove) {
  return origClass
    .replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1')
    .replace(/\s+/g, ' ')
    .replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 *
 * @param element the element
 * @param className the CSS class name
 */

function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute(
      'class',
      replaceClassName(
        (element.className && element.className.baseVal) || '',
        className
      )
    );
  }
}

var config = {
  disabled: false,
};

var TransitionGroupContext = react.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear =
      parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus,
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(
    _ref,
    prevState
  ) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED,
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear,
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED,
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef
        ? [appearing]
        : [reactDom.findDOMNode(this), appearing],
      maybeNode = _ref2[0],
      maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if ((!mounting && !enter) || config.disabled) {
      this.safeSetState(
        {
          status: ENTERED,
        },
        function () {
          _this2.props.onEntered(maybeNode);
        }
      );
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState(
      {
        status: ENTERING,
      },
      function () {
        _this2.props.onEntering(maybeNode, maybeAppearing);

        _this2.onTransitionEnd(enterTimeout, function () {
          _this2.safeSetState(
            {
              status: ENTERED,
            },
            function () {
              _this2.props.onEntered(maybeNode, maybeAppearing);
            }
          );
        });
      }
    );
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : reactDom.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState(
        {
          status: EXITED,
        },
        function () {
          _this3.props.onExited(maybeNode);
        }
      );
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState(
      {
        status: EXITING,
      },
      function () {
        _this3.props.onExiting(maybeNode);

        _this3.onTransitionEnd(timeouts.exit, function () {
          _this3.safeSetState(
            {
              status: EXITED,
            },
            function () {
              _this3.props.onExited(maybeNode);
            }
          );
        });
      }
    );
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef
      ? this.props.nodeRef.current
      : reactDom.findDOMNode(this);
    var doesNotHaveTimeoutOrListener =
      timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef
          ? [this.nextCallback]
          : [node, this.nextCallback],
        maybeNode = _ref3[0],
        maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
      children = _this$props.children,
      _in = _this$props.in,
      _mountOnEnter = _this$props.mountOnEnter,
      _unmountOnExit = _this$props.unmountOnExit,
      _appear = _this$props.appear,
      _enter = _this$props.enter,
      _exit = _this$props.exit,
      _timeout = _this$props.timeout,
      _addEndListener = _this$props.addEndListener,
      _onEnter = _this$props.onEnter,
      _onEntering = _this$props.onEntering,
      _onEntered = _this$props.onEntered,
      _onExit = _this$props.onExit,
      _onExiting = _this$props.onExiting,
      _onExited = _this$props.onExited,
      _nodeRef = _this$props.nodeRef,
      childProps = _objectWithoutPropertiesLoose(_this$props, [
        'children',
        'in',
        'mountOnEnter',
        'unmountOnExit',
        'appear',
        'enter',
        'exit',
        'timeout',
        'addEndListener',
        'onEnter',
        'onEntering',
        'onEntered',
        'onExit',
        'onExiting',
        'onExited',
        'nodeRef',
      ]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react.createElement(
        TransitionGroupContext.Provider,
        {
          value: null,
        },
        typeof children === 'function'
          ? children(status, childProps)
          : react.cloneElement(react.Children.only(children), childProps)
      )
    );
  };

  return Transition;
})(react.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes = {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop,
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;

var _addClass = function addClass$1(node, classes) {
  return (
    node &&
    classes &&
    classes.split(' ').forEach(function (c) {
      return addClass(node, c);
    })
  );
};

var removeClass$1 = function removeClass$1(node, classes) {
  return (
    node &&
    classes &&
    classes.split(' ').forEach(function (c) {
      return removeClass(node, c);
    })
  );
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */

var CSSTransition = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this =
      _React$Component.call.apply(_React$Component, [this].concat(args)) ||
      this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {},
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(
          maybeNode,
          maybeAppearing
        ),
        node = _this$resolveArgument[0],
        appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(
          maybeNode,
          maybeAppearing
        ),
        node = _this$resolveArgument2[0],
        appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(
          maybeNode,
          maybeAppearing
        ),
        node = _this$resolveArgument3[0],
        appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
        node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
        node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
        node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef
        ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
        : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var baseClassName = isStringClassNames
        ? '' + prefix + type
        : classNames[type];
      var activeClassName = isStringClassNames
        ? baseClassName + '-active'
        : classNames[type + 'Active'];
      var doneClassName = isStringClassNames
        ? baseClassName + '-done'
        : classNames[type + 'Done'];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName,
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + 'ClassName'];

    var _this$getClassNames = this.getClassNames('enter'),
      doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += ' ' + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.

    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
      baseClassName = _this$appliedClasses$.base,
      activeClassName = _this$appliedClasses$.active,
      doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass$1(node, baseClassName);
    }

    if (activeClassName) {
      removeClass$1(node, activeClassName);
    }

    if (doneClassName) {
      removeClass$1(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
      _ = _this$props.classNames,
      props = _objectWithoutPropertiesLoose(_this$props, ['classNames']);

    return /*#__PURE__*/ react.createElement(
      Transition,
      _extends({}, props, {
        onEnter: this.onEnter,
        onEntered: this.onEntered,
        onEntering: this.onEntering,
        onExit: this.onExit,
        onExiting: this.onExiting,
        onExited: this.onExited,
      })
    );
  };

  return CSSTransition;
})(react.Component);

CSSTransition.defaultProps = {
  classNames: '',
};
CSSTransition.propTypes = {};

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }

  return self;
}

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */

function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && react.isValidElement(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children)
    react.Children.map(children, function (c) {
      return c;
    }).forEach(function (child) {
      // run the map function here instead so that the key is the computed one
      result[child.key] = mapper(child);
    });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */

function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list

  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] =
          getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`

  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return react.cloneElement(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props),
    });
  });
}
function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!react.isValidElement(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = react.isValidElement(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps),
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = react.cloneElement(child, {
        in: false,
      });
    } else if (hasNext && hasPrev && react.isValidElement(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = react.cloneElement(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps),
      });
    }
  });
  return children;
}

var values =
  Object.values ||
  function (obj) {
    return Object.keys(obj).map(function (k) {
      return obj[k];
    });
  };

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  },
};
/**
 * The `<TransitionGroup>` component manages a set of transition components
 * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
 * components, `<TransitionGroup>` is a state machine for managing the mounting
 * and unmounting of components over time.
 *
 * Consider the example below. As items are removed or added to the TodoList the
 * `in` prop is toggled automatically by the `<TransitionGroup>`.
 *
 * Note that `<TransitionGroup>`  does not define any animation behavior!
 * Exactly _how_ a list item animates is up to the individual transition
 * component. This means you can mix and match animations across different list
 * items.
 */

var TransitionGroup = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_this)); // Initial children should all be entering, dependent on appear

    _this.state = {
      contextValue: {
        isMounting: true,
      },
      handleExited: handleExited,
      firstRender: true,
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.mounted = true;
    this.setState({
      contextValue: {
        isMounting: false,
      },
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(
    nextProps,
    _ref
  ) {
    var prevChildMapping = _ref.children,
      handleExited = _ref.handleExited,
      firstRender = _ref.firstRender;
    return {
      children: firstRender
        ? getInitialChildMapping(nextProps, handleExited)
        : getNextChildMapping(nextProps, prevChildMapping, handleExited),
      firstRender: false,
    };
  }; // node is `undefined` when user provided `nodeRef` prop

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = getChildMapping(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children,
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
      Component = _this$props.component,
      childFactory = _this$props.childFactory,
      props = _objectWithoutPropertiesLoose(_this$props, [
        'component',
        'childFactory',
      ]);

    var contextValue = this.state.contextValue;
    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return /*#__PURE__*/ react.createElement(
        TransitionGroupContext.Provider,
        {
          value: contextValue,
        },
        children
      );
    }

    return /*#__PURE__*/ react.createElement(
      TransitionGroupContext.Provider,
      {
        value: contextValue,
      },
      /*#__PURE__*/ react.createElement(Component, props, children)
    );
  };

  return TransitionGroup;
})(react.Component);

TransitionGroup.propTypes = {};
TransitionGroup.defaultProps = defaultProps;

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (
      var _len = arguments.length, _args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      _args[_key] = arguments[_key];
    }

    _this =
      _React$Component.call.apply(_React$Component, [this].concat(_args)) ||
      this;

    _this.handleEnter = function () {
      for (
        var _len2 = arguments.length, args = new Array(_len2), _key2 = 0;
        _key2 < _len2;
        _key2++
      ) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (
        var _len3 = arguments.length, args = new Array(_len3), _key3 = 0;
        _key3 < _len3;
        _key3++
      ) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (
        var _len4 = arguments.length, args = new Array(_len4), _key4 = 0;
        _key4 < _len4;
        _key4++
      ) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (
        var _len5 = arguments.length, args = new Array(_len5), _key5 = 0;
        _key5 < _len5;
        _key5++
      ) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (
        var _len6 = arguments.length, args = new Array(_len6), _key6 = 0;
        _key6 < _len6;
        _key6++
      ) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (
        var _len7 = arguments.length, args = new Array(_len7), _key7 = 0;
        _key7 < _len7;
        _key7++
      ) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(
    handler,
    idx,
    originalArgs
  ) {
    var _child$props;

    var children = this.props.children;
    var child = react.Children.toArray(children)[idx];
    if (child.props[handler])
      (_child$props = child.props)[handler].apply(_child$props, originalArgs);

    if (this.props[handler]) {
      var maybeNode = child.props.nodeRef
        ? undefined
        : reactDom.findDOMNode(this);
      this.props[handler](maybeNode);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      inProp = _this$props.in,
      props = _objectWithoutPropertiesLoose(_this$props, ['children', 'in']);

    var _React$Children$toArr = react.Children.toArray(children),
      first = _React$Children$toArr[0],
      second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return /*#__PURE__*/ react.createElement(
      TransitionGroup,
      props,
      inProp
        ? react.cloneElement(first, {
            key: 'first',
            onEnter: this.handleEnter,
            onEntering: this.handleEntering,
            onEntered: this.handleEntered,
          })
        : react.cloneElement(second, {
            key: 'second',
            onEnter: this.handleExit,
            onEntering: this.handleExiting,
            onEntered: this.handleExited,
          })
    );
  };

  return ReplaceTransition;
})(react.Component);

ReplaceTransition.propTypes = {};

var _leaveRenders, _enterRenders;

function areChildrenDifferent(oldChildren, newChildren) {
  if (oldChildren === newChildren) return false;

  if (
    react.isValidElement(oldChildren) &&
    react.isValidElement(newChildren) &&
    oldChildren.key != null &&
    oldChildren.key === newChildren.key
  ) {
    return false;
  }

  return true;
}
/**
 * Enum of modes for SwitchTransition component
 * @enum { string }
 */

var modes = {
  out: 'out-in',
  in: 'in-out',
};

var callHook = function callHook(element, name, cb) {
  return function () {
    var _element$props;

    element.props[name] &&
      (_element$props = element.props)[name].apply(_element$props, arguments);
    cb();
  };
};

var leaveRenders =
  ((_leaveRenders = {}),
  (_leaveRenders[modes.out] = function (_ref) {
    var current = _ref.current,
      changeState = _ref.changeState;
    return react.cloneElement(current, {
      in: false,
      onExited: callHook(current, 'onExited', function () {
        changeState(ENTERING, null);
      }),
    });
  }),
  (_leaveRenders[modes.in] = function (_ref2) {
    var current = _ref2.current,
      changeState = _ref2.changeState,
      children = _ref2.children;
    return [
      current,
      react.cloneElement(children, {
        in: true,
        onEntered: callHook(children, 'onEntered', function () {
          changeState(ENTERING);
        }),
      }),
    ];
  }),
  _leaveRenders);
var enterRenders =
  ((_enterRenders = {}),
  (_enterRenders[modes.out] = function (_ref3) {
    var children = _ref3.children,
      changeState = _ref3.changeState;
    return react.cloneElement(children, {
      in: true,
      onEntered: callHook(children, 'onEntered', function () {
        changeState(
          ENTERED,
          react.cloneElement(children, {
            in: true,
          })
        );
      }),
    });
  }),
  (_enterRenders[modes.in] = function (_ref4) {
    var current = _ref4.current,
      children = _ref4.children,
      changeState = _ref4.changeState;
    return [
      react.cloneElement(current, {
        in: false,
        onExited: callHook(current, 'onExited', function () {
          changeState(
            ENTERED,
            react.cloneElement(children, {
              in: true,
            })
          );
        }),
      }),
      react.cloneElement(children, {
        in: true,
      }),
    ];
  }),
  _enterRenders);
/**
 * A transition component inspired by the [vue transition modes](https://vuejs.org/v2/guide/transitions.html#Transition-Modes).
 * You can use it when you want to control the render between state transitions.
 * Based on the selected mode and the child's key which is the `Transition` or `CSSTransition` component, the `SwitchTransition` makes a consistent transition between them.
 *
 * If the `out-in` mode is selected, the `SwitchTransition` waits until the old child leaves and then inserts a new child.
 * If the `in-out` mode is selected, the `SwitchTransition` inserts a new child first, waits for the new child to enter and then removes the old child.
 *
 * **Note**: If you want the animation to happen simultaneously
 * (that is, to have the old child removed and a new child inserted **at the same time**),
 * you should use
 * [`TransitionGroup`](https://reactcommunity.org/react-transition-group/transition-group)
 * instead.
 *
 * ```jsx
 * function App() {
 *  const [state, setState] = useState(false);
 *  return (
 *    <SwitchTransition>
 *      <CSSTransition
 *        key={state ? "Goodbye, world!" : "Hello, world!"}
 *        addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
 *        classNames='fade'
 *      >
 *        <button onClick={() => setState(state => !state)}>
 *          {state ? "Goodbye, world!" : "Hello, world!"}
 *        </button>
 *      </CSSTransition>
 *    </SwitchTransition>
 *  );
 * }
 * ```
 *
 * ```css
 * .fade-enter{
 *    opacity: 0;
 * }
 * .fade-exit{
 *    opacity: 1;
 * }
 * .fade-enter-active{
 *    opacity: 1;
 * }
 * .fade-exit-active{
 *    opacity: 0;
 * }
 * .fade-enter-active,
 * .fade-exit-active{
 *    transition: opacity 500ms;
 * }
 * ```
 */

var SwitchTransition = /*#__PURE__*/ (function (_React$Component) {
  _inheritsLoose(SwitchTransition, _React$Component);

  function SwitchTransition() {
    var _this;

    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }

    _this =
      _React$Component.call.apply(_React$Component, [this].concat(args)) ||
      this;
    _this.state = {
      status: ENTERED,
      current: null,
    };
    _this.appeared = false;

    _this.changeState = function (status, current) {
      if (current === void 0) {
        current = _this.state.current;
      }

      _this.setState({
        status: status,
        current: current,
      });
    };

    return _this;
  }

  var _proto = SwitchTransition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  SwitchTransition.getDerivedStateFromProps = function getDerivedStateFromProps(
    props,
    state
  ) {
    if (props.children == null) {
      return {
        current: null,
      };
    }

    if (state.status === ENTERING && props.mode === modes.in) {
      return {
        status: ENTERING,
      };
    }

    if (state.current && areChildrenDifferent(state.current, props.children)) {
      return {
        status: EXITING,
      };
    }

    return {
      current: react.cloneElement(props.children, {
        in: true,
      }),
    };
  };

  _proto.render = function render() {
    var _this$props = this.props,
      children = _this$props.children,
      mode = _this$props.mode,
      _this$state = this.state,
      status = _this$state.status,
      current = _this$state.current;
    var data = {
      children: children,
      current: current,
      changeState: this.changeState,
      status: status,
    };
    var component;

    switch (status) {
      case ENTERING:
        component = enterRenders[mode](data);
        break;

      case EXITING:
        component = leaveRenders[mode](data);
        break;

      case ENTERED:
        component = current;
    }

    return /*#__PURE__*/ react.createElement(
      TransitionGroupContext.Provider,
      {
        value: {
          isMounting: !this.appeared,
        },
      },
      component
    );
  };

  return SwitchTransition;
})(react.Component);

SwitchTransition.propTypes = {};
SwitchTransition.defaultProps = {
  mode: modes.out,
};

var esm = /*#__PURE__*/ Object.freeze({
  __proto__: null,
  CSSTransition: CSSTransition,
  ReplaceTransition: ReplaceTransition,
  SwitchTransition: SwitchTransition,
  TransitionGroup: TransitionGroup,
  Transition: Transition,
  config: config,
});

var utils = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.getTransitionProps = getTransitionProps;
  exports.reflow = void 0;

  const reflow = (node) => node.scrollTop;

  exports.reflow = reflow;

  function getTransitionProps(props, options) {
    var _style$transitionDura, _style$transitionTimi;

    const { timeout, easing, style = {} } = props;
    return {
      duration:
        (_style$transitionDura = style.transitionDuration) != null
          ? _style$transitionDura
          : typeof timeout === 'number'
          ? timeout
          : timeout[options.mode] || 0,
      easing:
        (_style$transitionTimi = style.transitionTimingFunction) != null
          ? _style$transitionTimi
          : typeof easing === 'object'
          ? easing[options.mode]
          : easing,
      delay: style.transitionDelay,
    };
  }
});

var useForkRef = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _default = esm$1.unstable_useForkRef;
  exports.default = _default;
});

var Grow_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var React = _interopRequireWildcard(react);

  var _propTypes = interopRequireDefault(propTypes);

  var _useTheme = interopRequireDefault(useTheme_1);

  var _useForkRef = interopRequireDefault(useForkRef);

  const _excluded = [
    'addEndListener',
    'appear',
    'children',
    'easing',
    'in',
    'onEnter',
    'onEntered',
    'onEntering',
    'onExit',
    'onExited',
    'onExiting',
    'style',
    'timeout',
    'TransitionComponent',
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

  function getScale(value) {
    return `scale(${value}, ${value ** 2})`;
  }

  const styles = {
    entering: {
      opacity: 1,
      transform: getScale(1),
    },
    entered: {
      opacity: 1,
      transform: 'none',
    },
  };
  /*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */

  const isWebKit154 =
    typeof navigator !== 'undefined' &&
    /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) &&
    /(os |version\/)15(.|_)4/i.test(navigator.userAgent);
  /**
   * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
   * [Popover](/material-ui/react-popover/) components.
   * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
   */

  const Grow = /*#__PURE__*/ React.forwardRef(function Grow(props, ref) {
    const {
        addEndListener,
        appear = true,
        children,
        easing,
        in: inProp,
        onEnter,
        onEntered,
        onEntering,
        onExit,
        onExited,
        onExiting,
        style,
        timeout = 'auto',
        // eslint-disable-next-line react/prop-types
        TransitionComponent = esm.Transition,
      } = props,
      other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    const timer = React.useRef();
    const autoTimeout = React.useRef();
    const theme = (0, _useTheme.default)();
    const nodeRef = React.useRef(null);
    const foreignRef = (0, _useForkRef.default)(children.ref, ref);
    const handleRef = (0, _useForkRef.default)(nodeRef, foreignRef);

    const normalizedTransitionCallback = (callback) => (maybeIsAppearing) => {
      if (callback) {
        const node = nodeRef.current; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.

        if (maybeIsAppearing === undefined) {
          callback(node);
        } else {
          callback(node, maybeIsAppearing);
        }
      }
    };

    const handleEntering = normalizedTransitionCallback(onEntering);
    const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
      (0, utils.reflow)(node); // So the animation always start from the start.

      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction,
      } = (0, utils.getTransitionProps)(
        {
          style,
          timeout,
          easing,
        },
        {
          mode: 'enter',
        }
      );
      let duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [
        theme.transitions.create('opacity', {
          duration,
          delay,
        }),
        theme.transitions.create('transform', {
          duration: isWebKit154 ? duration : duration * 0.666,
          delay,
          easing: transitionTimingFunction,
        }),
      ].join(',');

      if (onEnter) {
        onEnter(node, isAppearing);
      }
    });
    const handleEntered = normalizedTransitionCallback(onEntered);
    const handleExiting = normalizedTransitionCallback(onExiting);
    const handleExit = normalizedTransitionCallback((node) => {
      const {
        duration: transitionDuration,
        delay,
        easing: transitionTimingFunction,
      } = (0, utils.getTransitionProps)(
        {
          style,
          timeout,
          easing,
        },
        {
          mode: 'exit',
        }
      );
      let duration;

      if (timeout === 'auto') {
        duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
        autoTimeout.current = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [
        theme.transitions.create('opacity', {
          duration,
          delay,
        }),
        theme.transitions.create('transform', {
          duration: isWebKit154 ? duration : duration * 0.666,
          delay: isWebKit154 ? delay : delay || duration * 0.333,
          easing: transitionTimingFunction,
        }),
      ].join(',');
      node.style.opacity = 0;
      node.style.transform = getScale(0.75);

      if (onExit) {
        onExit(node);
      }
    });
    const handleExited = normalizedTransitionCallback(onExited);

    const handleAddEndListener = (next) => {
      if (timeout === 'auto') {
        timer.current = setTimeout(next, autoTimeout.current || 0);
      }

      if (addEndListener) {
        // Old call signature before `react-transition-group` implemented `nodeRef`
        addEndListener(nodeRef.current, next);
      }
    };

    React.useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);
    return /*#__PURE__*/ (0, jsxRuntime.jsx)(
      TransitionComponent,
      (0, _extends2.default)(
        {
          appear: appear,
          in: inProp,
          nodeRef: nodeRef,
          onEnter: handleEnter,
          onEntered: handleEntered,
          onEntering: handleEntering,
          onExit: handleExit,
          onExited: handleExited,
          onExiting: handleExiting,
          addEndListener: handleAddEndListener,
          timeout: timeout === 'auto' ? null : timeout,
        },
        other,
        {
          children: (state, childProps) => {
            return /*#__PURE__*/ React.cloneElement(
              children,
              (0, _extends2.default)(
                {
                  style: (0, _extends2.default)(
                    {
                      opacity: 0,
                      transform: getScale(0.75),
                      visibility:
                        state === 'exited' && !inProp ? 'hidden' : undefined,
                    },
                    styles[state],
                    style,
                    children.props.style
                  ),
                  ref: handleRef,
                },
                childProps
              )
            );
          },
        }
      )
    );
  });
  Grow.muiSupportAuto = true;
  var _default = Grow;
  exports.default = _default;
});

var Grow = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _Grow.default;
    },
  });

  var _Grow = interopRequireDefault(Grow_1);
});

var Popper_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _extends2 = interopRequireDefault(_extends_1);

  var _PopperUnstyled = interopRequireDefault(PopperUnstyled);

  var _propTypes = interopRequireDefault(propTypes);

  var React = _interopRequireWildcard(react);

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

  const PopperRoot = (0, styles.styled)(_PopperUnstyled.default, {
    name: 'MuiPopper',
    slot: 'Root',
    overridesResolver: (props, styles) => styles.root,
  })({});
  /**
   *
   * Demos:
   *
   * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
   * - [Menus](https://mui.com/material-ui/react-menu/)
   * - [Popper](https://mui.com/material-ui/react-popper/)
   *
   * API:
   *
   * - [Popper API](https://mui.com/material-ui/api/popper/)
   */

  const Popper = /*#__PURE__*/ React.forwardRef(function Popper(inProps, ref) {
    const theme = (0, esm$2.useThemeWithoutDefault)();
    const props = (0, styles.useThemeProps)({
      props: inProps,
      name: 'MuiPopper',
    });
    return /*#__PURE__*/ (0, jsxRuntime.jsx)(
      PopperRoot,
      (0, _extends2.default)(
        {
          direction: theme == null ? void 0 : theme.direction,
        },
        props,
        {
          ref: ref,
        }
      )
    );
  });
  var _default = Popper;
  exports.default = _default;
});

var Popper = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _Popper.default;
    },
  });

  var _Popper = interopRequireDefault(Popper_1);
});

var useEventCallback = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _default = esm$1.unstable_useEventCallback;
  exports.default = _default;
});

var useId = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _default = esm$1.unstable_useId;
  exports.default = _default;
});

var useIsFocusVisible = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _default = esm$1.unstable_useIsFocusVisible;
  exports.default = _default;
});

var useControlled = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;

  var _default = esm$1.unstable_useControlled;
  exports.default = _default;
});

var tooltipClasses_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  exports.getTooltipUtilityClass = getTooltipUtilityClass;

  function getTooltipUtilityClass(slot) {
    return (0, base.generateUtilityClass)('MuiTooltip', slot);
  }

  const tooltipClasses = (0, base.generateUtilityClasses)('MuiTooltip', [
    'popper',
    'popperInteractive',
    'popperArrow',
    'popperClose',
    'tooltip',
    'tooltipArrow',
    'touch',
    'tooltipPlacementLeft',
    'tooltipPlacementRight',
    'tooltipPlacementTop',
    'tooltipPlacementBottom',
    'arrow',
  ]);
  var _default = tooltipClasses;
  exports.default = _default;
});

var Tooltip_1 = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  exports.default = void 0;
  exports.testReset = testReset;

  var _objectWithoutPropertiesLoose2 = interopRequireDefault(
    objectWithoutPropertiesLoose
  );

  var _extends2 = interopRequireDefault(_extends_1);

  var React = _interopRequireWildcard(react);

  var _propTypes = interopRequireDefault(propTypes);

  var _clsx = interopRequireDefault(require$$4);

  var _styled = interopRequireDefault(styled_1);

  var _useTheme = interopRequireDefault(useTheme_1);

  var _useThemeProps = interopRequireDefault(useThemeProps_1);

  var _capitalize = interopRequireDefault(capitalize);

  var _Grow = interopRequireDefault(Grow);

  var _Popper = interopRequireDefault(Popper);

  var _useEventCallback = interopRequireDefault(useEventCallback);

  var _useForkRef = interopRequireDefault(useForkRef);

  var _useId = interopRequireDefault(useId);

  var _useIsFocusVisible = interopRequireDefault(useIsFocusVisible);

  var _useControlled = interopRequireDefault(useControlled);

  var _tooltipClasses = _interopRequireWildcard(tooltipClasses_1);

  const _excluded = [
    'arrow',
    'children',
    'classes',
    'components',
    'componentsProps',
    'describeChild',
    'disableFocusListener',
    'disableHoverListener',
    'disableInteractive',
    'disableTouchListener',
    'enterDelay',
    'enterNextDelay',
    'enterTouchDelay',
    'followCursor',
    'id',
    'leaveDelay',
    'leaveTouchDelay',
    'onClose',
    'onOpen',
    'open',
    'placement',
    'PopperComponent',
    'PopperProps',
    'title',
    'TransitionComponent',
    'TransitionProps',
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

  function round(value) {
    return Math.round(value * 1e5) / 1e5;
  }

  const useUtilityClasses = (ownerState) => {
    const { classes, disableInteractive, arrow, touch, placement } = ownerState;
    const slots = {
      popper: [
        'popper',
        !disableInteractive && 'popperInteractive',
        arrow && 'popperArrow',
      ],
      tooltip: [
        'tooltip',
        arrow && 'tooltipArrow',
        touch && 'touch',
        `tooltipPlacement${(0, _capitalize.default)(placement.split('-')[0])}`,
      ],
      arrow: ['arrow'],
    };
    return (0, base.unstable_composeClasses)(
      slots,
      _tooltipClasses.getTooltipUtilityClass,
      classes
    );
  };

  const TooltipPopper = (0, _styled.default)(_Popper.default, {
    name: 'MuiTooltip',
    slot: 'Popper',
    overridesResolver: (props, styles) => {
      const { ownerState } = props;
      return [
        styles.popper,
        !ownerState.disableInteractive && styles.popperInteractive,
        ownerState.arrow && styles.popperArrow,
        !ownerState.open && styles.popperClose,
      ];
    },
  })(({ theme, ownerState, open }) =>
    (0, _extends2.default)(
      {
        zIndex: (theme.vars || theme).zIndex.tooltip,
        pointerEvents: 'none',
      },
      !ownerState.disableInteractive && {
        pointerEvents: 'auto',
      },
      !open && {
        pointerEvents: 'none',
      },
      ownerState.arrow && {
        [`&[data-popper-placement*="bottom"] .${_tooltipClasses.default.arrow}`]:
          {
            top: 0,
            marginTop: '-0.71em',
            '&::before': {
              transformOrigin: '0 100%',
            },
          },
        [`&[data-popper-placement*="top"] .${_tooltipClasses.default.arrow}`]: {
          bottom: 0,
          marginBottom: '-0.71em',
          '&::before': {
            transformOrigin: '100% 0',
          },
        },
        [`&[data-popper-placement*="right"] .${_tooltipClasses.default.arrow}`]:
          (0, _extends2.default)(
            {},
            !ownerState.isRtl
              ? {
                  left: 0,
                  marginLeft: '-0.71em',
                }
              : {
                  right: 0,
                  marginRight: '-0.71em',
                },
            {
              height: '1em',
              width: '0.71em',
              '&::before': {
                transformOrigin: '100% 100%',
              },
            }
          ),
        [`&[data-popper-placement*="left"] .${_tooltipClasses.default.arrow}`]:
          (0, _extends2.default)(
            {},
            !ownerState.isRtl
              ? {
                  right: 0,
                  marginRight: '-0.71em',
                }
              : {
                  left: 0,
                  marginLeft: '-0.71em',
                },
            {
              height: '1em',
              width: '0.71em',
              '&::before': {
                transformOrigin: '0 0',
              },
            }
          ),
      }
    )
  );
  const TooltipTooltip = (0, _styled.default)('div', {
    name: 'MuiTooltip',
    slot: 'Tooltip',
    overridesResolver: (props, styles) => {
      const { ownerState } = props;
      return [
        styles.tooltip,
        ownerState.touch && styles.touch,
        ownerState.arrow && styles.tooltipArrow,
        styles[
          `tooltipPlacement${(0, _capitalize.default)(
            ownerState.placement.split('-')[0]
          )}`
        ],
      ];
    },
  })(({ theme, ownerState }) =>
    (0, _extends2.default)(
      {
        backgroundColor: theme.vars
          ? theme.vars.palette.Tooltip.bg
          : (0, esm$2.alpha)(theme.palette.grey[700], 0.92),
        borderRadius: (theme.vars || theme).shape.borderRadius,
        color: (theme.vars || theme).palette.common.white,
        fontFamily: theme.typography.fontFamily,
        padding: '4px 8px',
        fontSize: theme.typography.pxToRem(11),
        maxWidth: 300,
        margin: 2,
        wordWrap: 'break-word',
        fontWeight: theme.typography.fontWeightMedium,
      },
      ownerState.arrow && {
        position: 'relative',
        margin: 0,
      },
      ownerState.touch && {
        padding: '8px 16px',
        fontSize: theme.typography.pxToRem(14),
        lineHeight: `${round(16 / 14)}em`,
        fontWeight: theme.typography.fontWeightRegular,
      },
      {
        [`.${_tooltipClasses.default.popper}[data-popper-placement*="left"] &`]:
          (0, _extends2.default)(
            {
              transformOrigin: 'right center',
            },
            !ownerState.isRtl
              ? (0, _extends2.default)(
                  {
                    marginRight: '14px',
                  },
                  ownerState.touch && {
                    marginRight: '24px',
                  }
                )
              : (0, _extends2.default)(
                  {
                    marginLeft: '14px',
                  },
                  ownerState.touch && {
                    marginLeft: '24px',
                  }
                )
          ),
        [`.${_tooltipClasses.default.popper}[data-popper-placement*="right"] &`]:
          (0, _extends2.default)(
            {
              transformOrigin: 'left center',
            },
            !ownerState.isRtl
              ? (0, _extends2.default)(
                  {
                    marginLeft: '14px',
                  },
                  ownerState.touch && {
                    marginLeft: '24px',
                  }
                )
              : (0, _extends2.default)(
                  {
                    marginRight: '14px',
                  },
                  ownerState.touch && {
                    marginRight: '24px',
                  }
                )
          ),
        [`.${_tooltipClasses.default.popper}[data-popper-placement*="top"] &`]:
          (0, _extends2.default)(
            {
              transformOrigin: 'center bottom',
              marginBottom: '14px',
            },
            ownerState.touch && {
              marginBottom: '24px',
            }
          ),
        [`.${_tooltipClasses.default.popper}[data-popper-placement*="bottom"] &`]:
          (0, _extends2.default)(
            {
              transformOrigin: 'center top',
              marginTop: '14px',
            },
            ownerState.touch && {
              marginTop: '24px',
            }
          ),
      }
    )
  );
  const TooltipArrow = (0, _styled.default)('span', {
    name: 'MuiTooltip',
    slot: 'Arrow',
    overridesResolver: (props, styles) => styles.arrow,
  })(({ theme }) => ({
    overflow: 'hidden',
    position: 'absolute',
    width: '1em',
    height: '0.71em',
    /* = width / sqrt(2) = (length of the hypotenuse) */
    boxSizing: 'border-box',
    color: theme.vars
      ? `rgba(${theme.vars.palette.grey.darkChannel} / 0.9)`
      : (0, esm$2.alpha)(theme.palette.grey[700], 0.9),
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: '100%',
      height: '100%',
      backgroundColor: 'currentColor',
      transform: 'rotate(45deg)',
    },
  }));
  let hystersisOpen = false;
  let hystersisTimer = null;

  function testReset() {
    hystersisOpen = false;
    clearTimeout(hystersisTimer);
  }

  function composeEventHandler(handler, eventHandler) {
    return (event) => {
      if (eventHandler) {
        eventHandler(event);
      }

      handler(event);
    };
  } // TODO v6: Remove PopperComponent, PopperProps, TransitionComponent and TransitionProps.

  const Tooltip = /*#__PURE__*/ React.forwardRef(function Tooltip(
    inProps,
    ref
  ) {
    var _components$Popper,
      _ref,
      _components$Transitio,
      _components$Tooltip,
      _components$Arrow,
      _componentsProps$popp;

    const props = (0, _useThemeProps.default)({
      props: inProps,
      name: 'MuiTooltip',
    });
    const {
        arrow = false,
        children,
        components = {},
        componentsProps = {},
        describeChild = false,
        disableFocusListener = false,
        disableHoverListener = false,
        disableInteractive: disableInteractiveProp = false,
        disableTouchListener = false,
        enterDelay = 100,
        enterNextDelay = 0,
        enterTouchDelay = 700,
        followCursor = false,
        id: idProp,
        leaveDelay = 0,
        leaveTouchDelay = 1500,
        onClose,
        onOpen,
        open: openProp,
        placement = 'bottom',
        PopperComponent: PopperComponentProp,
        PopperProps = {},
        title,
        TransitionComponent: TransitionComponentProp = _Grow.default,
        TransitionProps,
      } = props,
      other = (0, _objectWithoutPropertiesLoose2.default)(props, _excluded);
    const theme = (0, _useTheme.default)();
    const isRtl = theme.direction === 'rtl';
    const [childNode, setChildNode] = React.useState();
    const [arrowRef, setArrowRef] = React.useState(null);
    const ignoreNonTouchEvents = React.useRef(false);
    const disableInteractive = disableInteractiveProp || followCursor;
    const closeTimer = React.useRef();
    const enterTimer = React.useRef();
    const leaveTimer = React.useRef();
    const touchTimer = React.useRef();
    const [openState, setOpenState] = (0, _useControlled.default)({
      controlled: openProp,
      default: false,
      name: 'Tooltip',
      state: 'open',
    });
    let open = openState;

    const id = (0, _useId.default)(idProp);
    const prevUserSelect = React.useRef();
    const stopTouchInteraction = React.useCallback(() => {
      if (prevUserSelect.current !== undefined) {
        document.body.style.WebkitUserSelect = prevUserSelect.current;
        prevUserSelect.current = undefined;
      }

      clearTimeout(touchTimer.current);
    }, []);
    React.useEffect(() => {
      return () => {
        clearTimeout(closeTimer.current);
        clearTimeout(enterTimer.current);
        clearTimeout(leaveTimer.current);
        stopTouchInteraction();
      };
    }, [stopTouchInteraction]);

    const handleOpen = (event) => {
      clearTimeout(hystersisTimer);
      hystersisOpen = true; // The mouseover event will trigger for every nested element in the tooltip.
      // We can skip rerendering when the tooltip is already open.
      // We are using the mouseover event instead of the mouseenter event to fix a hide/show issue.

      setOpenState(true);

      if (onOpen && !open) {
        onOpen(event);
      }
    };

    const handleClose = (0, _useEventCallback.default)(
      /**
       * @param {React.SyntheticEvent | Event} event
       */
      (event) => {
        clearTimeout(hystersisTimer);
        hystersisTimer = setTimeout(() => {
          hystersisOpen = false;
        }, 800 + leaveDelay);
        setOpenState(false);

        if (onClose && open) {
          onClose(event);
        }

        clearTimeout(closeTimer.current);
        closeTimer.current = setTimeout(() => {
          ignoreNonTouchEvents.current = false;
        }, theme.transitions.duration.shortest);
      }
    );

    const handleEnter = (event) => {
      if (ignoreNonTouchEvents.current && event.type !== 'touchstart') {
        return;
      } // Remove the title ahead of time.
      // We don't want to wait for the next render commit.
      // We would risk displaying two tooltips at the same time (native + this one).

      if (childNode) {
        childNode.removeAttribute('title');
      }

      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);

      if (enterDelay || (hystersisOpen && enterNextDelay)) {
        enterTimer.current = setTimeout(
          () => {
            handleOpen(event);
          },
          hystersisOpen ? enterNextDelay : enterDelay
        );
      } else {
        handleOpen(event);
      }
    };

    const handleLeave = (event) => {
      clearTimeout(enterTimer.current);
      clearTimeout(leaveTimer.current);
      leaveTimer.current = setTimeout(() => {
        handleClose(event);
      }, leaveDelay);
    };

    const {
      isFocusVisibleRef,
      onBlur: handleBlurVisible,
      onFocus: handleFocusVisible,
      ref: focusVisibleRef,
    } = (0, _useIsFocusVisible.default)(); // We don't necessarily care about the focusVisible state (which is safe to access via ref anyway).
    // We just need to re-render the Tooltip if the focus-visible state changes.

    const [, setChildIsFocusVisible] = React.useState(false);

    const handleBlur = (event) => {
      handleBlurVisible(event);

      if (isFocusVisibleRef.current === false) {
        setChildIsFocusVisible(false);
        handleLeave(event);
      }
    };

    const handleFocus = (event) => {
      // Workaround for https://github.com/facebook/react/issues/7769
      // The autoFocus of React might trigger the event before the componentDidMount.
      // We need to account for this eventuality.
      if (!childNode) {
        setChildNode(event.currentTarget);
      }

      handleFocusVisible(event);

      if (isFocusVisibleRef.current === true) {
        setChildIsFocusVisible(true);
        handleEnter(event);
      }
    };

    const detectTouchStart = (event) => {
      ignoreNonTouchEvents.current = true;
      const childrenProps = children.props;

      if (childrenProps.onTouchStart) {
        childrenProps.onTouchStart(event);
      }
    };

    const handleMouseOver = handleEnter;
    const handleMouseLeave = handleLeave;

    const handleTouchStart = (event) => {
      detectTouchStart(event);
      clearTimeout(leaveTimer.current);
      clearTimeout(closeTimer.current);
      stopTouchInteraction();
      prevUserSelect.current = document.body.style.WebkitUserSelect; // Prevent iOS text selection on long-tap.

      document.body.style.WebkitUserSelect = 'none';
      touchTimer.current = setTimeout(() => {
        document.body.style.WebkitUserSelect = prevUserSelect.current;
        handleEnter(event);
      }, enterTouchDelay);
    };

    const handleTouchEnd = (event) => {
      if (children.props.onTouchEnd) {
        children.props.onTouchEnd(event);
      }

      stopTouchInteraction();
      clearTimeout(leaveTimer.current);
      leaveTimer.current = setTimeout(() => {
        handleClose(event);
      }, leaveTouchDelay);
    };

    React.useEffect(() => {
      if (!open) {
        return undefined;
      }
      /**
       * @param {KeyboardEvent} nativeEvent
       */

      function handleKeyDown(nativeEvent) {
        // IE11, Edge (prior to using Bink?) use 'Esc'
        if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
          handleClose(nativeEvent);
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [handleClose, open]);
    const handleUseRef = (0, _useForkRef.default)(setChildNode, ref);
    const handleFocusRef = (0, _useForkRef.default)(
      focusVisibleRef,
      handleUseRef
    );
    const handleRef = (0, _useForkRef.default)(children.ref, handleFocusRef); // There is no point in displaying an empty tooltip.

    if (title === '') {
      open = false;
    }

    const positionRef = React.useRef({
      x: 0,
      y: 0,
    });
    const popperRef = React.useRef();

    const handleMouseMove = (event) => {
      const childrenProps = children.props;

      if (childrenProps.onMouseMove) {
        childrenProps.onMouseMove(event);
      }

      positionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (popperRef.current) {
        popperRef.current.update();
      }
    };

    const nameOrDescProps = {};
    const titleIsString = typeof title === 'string';

    if (describeChild) {
      nameOrDescProps.title =
        !open && titleIsString && !disableHoverListener ? title : null;
      nameOrDescProps['aria-describedby'] = open ? id : null;
    } else {
      nameOrDescProps['aria-label'] = titleIsString ? title : null;
      nameOrDescProps['aria-labelledby'] = open && !titleIsString ? id : null;
    }

    const childrenProps = (0, _extends2.default)(
      {},
      nameOrDescProps,
      other,
      children.props,
      {
        className: (0, _clsx.default)(
          other.className,
          children.props.className
        ),
        onTouchStart: detectTouchStart,
        ref: handleRef,
      },
      followCursor
        ? {
            onMouseMove: handleMouseMove,
          }
        : {}
    );

    const interactiveWrapperListeners = {};

    if (!disableTouchListener) {
      childrenProps.onTouchStart = handleTouchStart;
      childrenProps.onTouchEnd = handleTouchEnd;
    }

    if (!disableHoverListener) {
      childrenProps.onMouseOver = composeEventHandler(
        handleMouseOver,
        childrenProps.onMouseOver
      );
      childrenProps.onMouseLeave = composeEventHandler(
        handleMouseLeave,
        childrenProps.onMouseLeave
      );

      if (!disableInteractive) {
        interactiveWrapperListeners.onMouseOver = handleMouseOver;
        interactiveWrapperListeners.onMouseLeave = handleMouseLeave;
      }
    }

    if (!disableFocusListener) {
      childrenProps.onFocus = composeEventHandler(
        handleFocus,
        childrenProps.onFocus
      );
      childrenProps.onBlur = composeEventHandler(
        handleBlur,
        childrenProps.onBlur
      );

      if (!disableInteractive) {
        interactiveWrapperListeners.onFocus = handleFocus;
        interactiveWrapperListeners.onBlur = handleBlur;
      }
    }

    const popperOptions = React.useMemo(() => {
      var _PopperProps$popperOp;

      let tooltipModifiers = [
        {
          name: 'arrow',
          enabled: Boolean(arrowRef),
          options: {
            element: arrowRef,
            padding: 4,
          },
        },
      ];

      if (
        (_PopperProps$popperOp = PopperProps.popperOptions) != null &&
        _PopperProps$popperOp.modifiers
      ) {
        tooltipModifiers = tooltipModifiers.concat(
          PopperProps.popperOptions.modifiers
        );
      }

      return (0, _extends2.default)({}, PopperProps.popperOptions, {
        modifiers: tooltipModifiers,
      });
    }, [arrowRef, PopperProps]);
    const ownerState = (0, _extends2.default)({}, props, {
      isRtl,
      arrow,
      disableInteractive,
      placement,
      PopperComponentProp,
      touch: ignoreNonTouchEvents.current,
    });
    const classes = useUtilityClasses(ownerState);
    const PopperComponent =
      (_components$Popper = components.Popper) != null
        ? _components$Popper
        : TooltipPopper;
    const TransitionComponent =
      (_ref =
        (_components$Transitio = components.Transition) != null
          ? _components$Transitio
          : TransitionComponentProp) != null
        ? _ref
        : _Grow.default;
    const TooltipComponent =
      (_components$Tooltip = components.Tooltip) != null
        ? _components$Tooltip
        : TooltipTooltip;
    const ArrowComponent =
      (_components$Arrow = components.Arrow) != null
        ? _components$Arrow
        : TooltipArrow;
    const popperProps = (0, base.appendOwnerState)(
      PopperComponent,
      (0, _extends2.default)({}, PopperProps, componentsProps.popper),
      ownerState
    );
    const transitionProps = (0, base.appendOwnerState)(
      TransitionComponent,
      (0, _extends2.default)({}, TransitionProps, componentsProps.transition),
      ownerState
    );
    const tooltipProps = (0, base.appendOwnerState)(
      TooltipComponent,
      (0, _extends2.default)({}, componentsProps.tooltip),
      ownerState
    );
    const tooltipArrowProps = (0, base.appendOwnerState)(
      ArrowComponent,
      (0, _extends2.default)({}, componentsProps.arrow),
      ownerState
    );
    return /*#__PURE__*/ (0, jsxRuntime.jsxs)(React.Fragment, {
      children: [
        /*#__PURE__*/ React.cloneElement(children, childrenProps),
        /*#__PURE__*/ (0, jsxRuntime.jsx)(
          PopperComponent,
          (0, _extends2.default)(
            {
              as:
                PopperComponentProp != null
                  ? PopperComponentProp
                  : _Popper.default,
              placement: placement,
              anchorEl: followCursor
                ? {
                    getBoundingClientRect: () => ({
                      top: positionRef.current.y,
                      left: positionRef.current.x,
                      right: positionRef.current.x,
                      bottom: positionRef.current.y,
                      width: 0,
                      height: 0,
                    }),
                  }
                : childNode,
              popperRef: popperRef,
              open: childNode ? open : false,
              id: id,
              transition: true,
            },
            interactiveWrapperListeners,
            popperProps,
            {
              className: (0, _clsx.default)(
                classes.popper,
                PopperProps == null ? void 0 : PopperProps.className,
                (_componentsProps$popp = componentsProps.popper) == null
                  ? void 0
                  : _componentsProps$popp.className
              ),
              popperOptions: popperOptions,
              children: ({ TransitionProps: TransitionPropsInner }) => {
                var _componentsProps$tool, _componentsProps$arro;

                return /*#__PURE__*/ (0, jsxRuntime.jsx)(
                  TransitionComponent,
                  (0, _extends2.default)(
                    {
                      timeout: theme.transitions.duration.shorter,
                    },
                    TransitionPropsInner,
                    transitionProps,
                    {
                      children: /*#__PURE__*/ (0, jsxRuntime.jsxs)(
                        TooltipComponent,
                        (0, _extends2.default)({}, tooltipProps, {
                          className: (0, _clsx.default)(
                            classes.tooltip,
                            (_componentsProps$tool = componentsProps.tooltip) ==
                              null
                              ? void 0
                              : _componentsProps$tool.className
                          ),
                          children: [
                            title,
                            arrow
                              ? /*#__PURE__*/ (0, jsxRuntime.jsx)(
                                  ArrowComponent,
                                  (0, _extends2.default)(
                                    {},
                                    tooltipArrowProps,
                                    {
                                      className: (0, _clsx.default)(
                                        classes.arrow,
                                        (_componentsProps$arro =
                                          componentsProps.arrow) == null
                                          ? void 0
                                          : _componentsProps$arro.className
                                      ),
                                      ref: setArrowRef,
                                    }
                                  )
                                )
                              : null,
                          ],
                        })
                      ),
                    }
                  )
                );
              },
            }
          )
        ),
      ],
    });
  });
  var _default = Tooltip;
  exports.default = _default;
});

var Tooltip = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports, '__esModule', {
    value: true,
  });
  var _exportNames = {
    tooltipClasses: true,
  };
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _Tooltip.default;
    },
  });
  Object.defineProperty(exports, 'tooltipClasses', {
    enumerable: true,
    get: function () {
      return _tooltipClasses.default;
    },
  });

  var _Tooltip = interopRequireDefault(Tooltip_1);

  var _tooltipClasses = _interopRequireWildcard(tooltipClasses_1);

  Object.keys(_tooltipClasses).forEach(function (key) {
    if (key === 'default' || key === '__esModule') return;
    if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
    if (key in exports && exports[key] === _tooltipClasses[key]) return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _tooltipClasses[key];
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
  /*@__PURE__*/ getDefaultExportFromCjs(Tooltip);

export default __pika_web_default_export_for_treeshaking__;

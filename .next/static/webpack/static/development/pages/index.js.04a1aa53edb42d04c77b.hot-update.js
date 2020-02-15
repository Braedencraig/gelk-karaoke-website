webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/react-spring/web.js":
/*!******************************************!*\
  !*** ./node_modules/react-spring/web.js ***!
  \******************************************/
/*! exports provided: apply, config, update, animated, a, interpolate, Globals, useSpring, useTrail, useTransition, useChain, useSprings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apply", function() { return apply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animated", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return extendedAnimated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return interpolate$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Globals", function() { return Globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSpring", function() { return useSpring; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTrail", function() { return useTrail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useTransition", function() { return useTransition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useChain", function() { return useChain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSprings", function() { return useSprings; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const is = {
  arr: Array.isArray,
  obj: a => Object.prototype.toString.call(a) === '[object Object]',
  fun: a => typeof a === 'function',
  str: a => typeof a === 'string',
  num: a => typeof a === 'number',
  und: a => a === void 0,
  nul: a => a === null,
  set: a => a instanceof Set,
  map: a => a instanceof Map,

  equ(a, b) {
    if (typeof a !== typeof b) return false;
    if (is.str(a) || is.num(a)) return a === b;
    if (is.obj(a) && is.obj(b) && Object.keys(a).length + Object.keys(b).length === 0) return true;
    let i;

    for (i in a) if (!(i in b)) return false;

    for (i in b) if (a[i] !== b[i]) return false;

    return is.und(i) ? a === b : true;
  }

};
function merge(target, lowercase) {
  if (lowercase === void 0) {
    lowercase = true;
  }

  return object => (is.arr(object) ? object : Object.keys(object)).reduce((acc, element) => {
    const key = lowercase ? element[0].toLowerCase() + element.substring(1) : element;
    acc[key] = target(key);
    return acc;
  }, target);
}
function useForceUpdate() {
  const _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
        f = _useState[1];

  const forceUpdate = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(() => f(v => !v), []);
  return forceUpdate;
}
function withDefault(value, defaultValue) {
  return is.und(value) || is.nul(value) ? defaultValue : value;
}
function toArray(a) {
  return !is.und(a) ? is.arr(a) ? a : [a] : [];
}
function callProp(obj) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return is.fun(obj) ? obj(...args) : obj;
}

function getForwardProps(props) {
  const to = props.to,
        from = props.from,
        config = props.config,
        onStart = props.onStart,
        onRest = props.onRest,
        onFrame = props.onFrame,
        children = props.children,
        reset = props.reset,
        reverse = props.reverse,
        force = props.force,
        immediate = props.immediate,
        delay = props.delay,
        attach = props.attach,
        destroyed = props.destroyed,
        interpolateTo = props.interpolateTo,
        ref = props.ref,
        lazy = props.lazy,
        forward = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["to", "from", "config", "onStart", "onRest", "onFrame", "children", "reset", "reverse", "force", "immediate", "delay", "attach", "destroyed", "interpolateTo", "ref", "lazy"]);

  return forward;
}

function interpolateTo(props) {
  const forward = getForwardProps(props);
  if (is.und(forward)) return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, props);
  const rest = Object.keys(props).reduce((a, k) => !is.und(forward[k]) ? a : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, a, {
    [k]: props[k]
  }), {});
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    to: forward
  }, rest);
}
function handleRef(ref, forward) {
  if (forward) {
    // If it's a function, assume it's a ref callback
    if (is.fun(forward)) forward(ref);else if (is.obj(forward)) {
      forward.current = ref;
    }
  }

  return ref;
}

class Animated {
  constructor() {
    this.payload = void 0;
    this.children = [];
  }

  getAnimatedValue() {
    return this.getValue();
  }

  getPayload() {
    return this.payload || this;
  }

  attach() {}

  detach() {}

  getChildren() {
    return this.children;
  }

  addChild(child) {
    if (this.children.length === 0) this.attach();
    this.children.push(child);
  }

  removeChild(child) {
    const index = this.children.indexOf(child);
    this.children.splice(index, 1);
    if (this.children.length === 0) this.detach();
  }

}
class AnimatedArray extends Animated {
  constructor() {
    super(...arguments);
    this.payload = [];

    this.attach = () => this.payload.forEach(p => p instanceof Animated && p.addChild(this));

    this.detach = () => this.payload.forEach(p => p instanceof Animated && p.removeChild(this));
  }

}
class AnimatedObject extends Animated {
  constructor() {
    super(...arguments);
    this.payload = {};

    this.attach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.addChild(this));

    this.detach = () => Object.values(this.payload).forEach(s => s instanceof Animated && s.removeChild(this));
  }

  getValue(animated) {
    if (animated === void 0) {
      animated = false;
    }

    const payload = {};

    for (const key in this.payload) {
      const value = this.payload[key];
      if (animated && !(value instanceof Animated)) continue;
      payload[key] = value instanceof Animated ? value[animated ? 'getAnimatedValue' : 'getValue']() : value;
    }

    return payload;
  }

  getAnimatedValue() {
    return this.getValue(true);
  }

}

let applyAnimatedValues;
function injectApplyAnimatedValues(fn, transform) {
  applyAnimatedValues = {
    fn,
    transform
  };
}
let colorNames;
function injectColorNames(names) {
  colorNames = names;
}
let requestFrame = cb => typeof window !== 'undefined' ? window.requestAnimationFrame(cb) : -1;
let cancelFrame = id => {
  typeof window !== 'undefined' && window.cancelAnimationFrame(id);
};
function injectFrame(raf, caf) {
  requestFrame = raf;
  cancelFrame = caf;
}
let interpolation;
function injectStringInterpolator(fn) {
  interpolation = fn;
}
let now = () => Date.now();
function injectNow(nowFn) {
  now = nowFn;
}
let defaultElement;
function injectDefaultElement(el) {
  defaultElement = el;
}
let animatedApi = node => node.current;
function injectAnimatedApi(fn) {
  animatedApi = fn;
}
let createAnimatedStyle;
function injectCreateAnimatedStyle(factory) {
  createAnimatedStyle = factory;
}
let manualFrameloop;
function injectManualFrameloop(callback) {
  manualFrameloop = callback;
}

var Globals = /*#__PURE__*/Object.freeze({
  get applyAnimatedValues () { return applyAnimatedValues; },
  injectApplyAnimatedValues: injectApplyAnimatedValues,
  get colorNames () { return colorNames; },
  injectColorNames: injectColorNames,
  get requestFrame () { return requestFrame; },
  get cancelFrame () { return cancelFrame; },
  injectFrame: injectFrame,
  get interpolation () { return interpolation; },
  injectStringInterpolator: injectStringInterpolator,
  get now () { return now; },
  injectNow: injectNow,
  get defaultElement () { return defaultElement; },
  injectDefaultElement: injectDefaultElement,
  get animatedApi () { return animatedApi; },
  injectAnimatedApi: injectAnimatedApi,
  get createAnimatedStyle () { return createAnimatedStyle; },
  injectCreateAnimatedStyle: injectCreateAnimatedStyle,
  get manualFrameloop () { return manualFrameloop; },
  injectManualFrameloop: injectManualFrameloop
});

/**
 * Wraps the `style` property with `AnimatedStyle`.
 */

class AnimatedProps extends AnimatedObject {
  constructor(props, callback) {
    super();
    this.update = void 0;
    this.payload = !props.style ? props : Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      style: createAnimatedStyle(props.style)
    });
    this.update = callback;
    this.attach();
  }

}

const isFunctionComponent = val => is.fun(val) && !(val.prototype instanceof react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);

const createAnimatedComponent = Component => {
  const AnimatedComponent = Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])((props, ref) => {
    const forceUpdate = useForceUpdate();
    const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(true);
    const propsAnimated = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const node = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
    const attachProps = Object(react__WEBPACK_IMPORTED_MODULE_2__["useCallback"])(props => {
      const oldPropsAnimated = propsAnimated.current;

      const callback = () => {
        let didUpdate = false;

        if (node.current) {
          didUpdate = applyAnimatedValues.fn(node.current, propsAnimated.current.getAnimatedValue());
        }

        if (!node.current || didUpdate === false) {
          // If no referenced node has been found, or the update target didn't have a
          // native-responder, then forceUpdate the animation ...
          forceUpdate();
        }
      };

      propsAnimated.current = new AnimatedProps(props, callback);
      oldPropsAnimated && oldPropsAnimated.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => () => {
      mounted.current = false;
      propsAnimated.current && propsAnimated.current.detach();
    }, []);
    Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => animatedApi(node, mounted, forceUpdate));
    attachProps(props);

    const _getValue = propsAnimated.current.getValue(),
          scrollTop = _getValue.scrollTop,
          scrollLeft = _getValue.scrollLeft,
          animatedProps = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_getValue, ["scrollTop", "scrollLeft"]); // Functions cannot have refs, see:
    // See: https://github.com/react-spring/react-spring/issues/569


    const refFn = isFunctionComponent(Component) ? undefined : childRef => node.current = handleRef(childRef, ref);
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, animatedProps, {
      ref: refFn
    }));
  });
  return AnimatedComponent;
};

let active = false;
const controllers = new Set();

const update = () => {
  if (!active) return false;
  let time = now();

  for (let controller of controllers) {
    let isActive = false;

    for (let configIdx = 0; configIdx < controller.configs.length; configIdx++) {
      let config = controller.configs[configIdx];
      let endOfAnimation, lastTime;

      for (let valIdx = 0; valIdx < config.animatedValues.length; valIdx++) {
        let animation = config.animatedValues[valIdx]; // If an animation is done, skip, until all of them conclude

        if (animation.done) continue;
        let from = config.fromValues[valIdx];
        let to = config.toValues[valIdx];
        let position = animation.lastPosition;
        let isAnimated = to instanceof Animated;
        let velocity = Array.isArray(config.initialVelocity) ? config.initialVelocity[valIdx] : config.initialVelocity;
        if (isAnimated) to = to.getValue(); // Conclude animation if it's either immediate, or from-values match end-state

        if (config.immediate) {
          animation.setValue(to);
          animation.done = true;
          continue;
        } // Break animation when string values are involved


        if (typeof from === 'string' || typeof to === 'string') {
          animation.setValue(to);
          animation.done = true;
          continue;
        }

        if (config.duration !== void 0) {
          /** Duration easing */
          position = from + config.easing((time - animation.startTime) / config.duration) * (to - from);
          endOfAnimation = time >= animation.startTime + config.duration;
        } else if (config.decay) {
          /** Decay easing */
          position = from + velocity / (1 - 0.998) * (1 - Math.exp(-(1 - 0.998) * (time - animation.startTime)));
          endOfAnimation = Math.abs(animation.lastPosition - position) < 0.1;
          if (endOfAnimation) to = position;
        } else {
          /** Spring easing */
          lastTime = animation.lastTime !== void 0 ? animation.lastTime : time;
          velocity = animation.lastVelocity !== void 0 ? animation.lastVelocity : config.initialVelocity; // If we lost a lot of frames just jump to the end.

          if (time > lastTime + 64) lastTime = time; // http://gafferongames.com/game-physics/fix-your-timestep/

          let numSteps = Math.floor(time - lastTime);

          for (let i = 0; i < numSteps; ++i) {
            let force = -config.tension * (position - to);
            let damping = -config.friction * velocity;
            let acceleration = (force + damping) / config.mass;
            velocity = velocity + acceleration * 1 / 1000;
            position = position + velocity * 1 / 1000;
          } // Conditions for stopping the spring animation


          let isOvershooting = config.clamp && config.tension !== 0 ? from < to ? position > to : position < to : false;
          let isVelocity = Math.abs(velocity) <= config.precision;
          let isDisplacement = config.tension !== 0 ? Math.abs(to - position) <= config.precision : true;
          endOfAnimation = isOvershooting || isVelocity && isDisplacement;
          animation.lastVelocity = velocity;
          animation.lastTime = time;
        } // Trails aren't done until their parents conclude


        if (isAnimated && !config.toValues[valIdx].done) endOfAnimation = false;

        if (endOfAnimation) {
          // Ensure that we end up with a round value
          if (animation.value !== to) position = to;
          animation.done = true;
        } else isActive = true;

        animation.setValue(position);
        animation.lastPosition = position;
      } // Keep track of updated values only when necessary


      if (controller.props.onFrame) controller.values[config.name] = config.interpolation.getValue();
    } // Update callbacks in the end of the frame


    if (controller.props.onFrame) controller.props.onFrame(controller.values); // Either call onEnd or next frame

    if (!isActive) {
      controllers.delete(controller);
      controller.stop(true);
    }
  } // Loop over as long as there are controllers ...


  if (controllers.size) {
    if (manualFrameloop) manualFrameloop();else requestFrame(update);
  } else {
    active = false;
  }

  return active;
};

const start = controller => {
  if (!controllers.has(controller)) controllers.add(controller);

  if (!active) {
    active = true;
    if (manualFrameloop) requestFrame(manualFrameloop);else requestFrame(update);
  }
};

const stop = controller => {
  if (controllers.has(controller)) controllers.delete(controller);
};

function createInterpolator(range, output, extrapolate) {
  if (typeof range === 'function') {
    return range;
  }

  if (Array.isArray(range)) {
    return createInterpolator({
      range,
      output: output,
      extrapolate
    });
  }

  if (interpolation && typeof range.output[0] === 'string') {
    return interpolation(range);
  }

  const config = range;
  const outputRange = config.output;
  const inputRange = config.range || [0, 1];
  const extrapolateLeft = config.extrapolateLeft || config.extrapolate || 'extend';
  const extrapolateRight = config.extrapolateRight || config.extrapolate || 'extend';

  const easing = config.easing || (t => t);

  return input => {
    const range = findRange(input, inputRange);
    return interpolate(input, inputRange[range], inputRange[range + 1], outputRange[range], outputRange[range + 1], easing, extrapolateLeft, extrapolateRight, config.map);
  };
}

function interpolate(input, inputMin, inputMax, outputMin, outputMax, easing, extrapolateLeft, extrapolateRight, map) {
  let result = map ? map(input) : input; // Extrapolate

  if (result < inputMin) {
    if (extrapolateLeft === 'identity') return result;else if (extrapolateLeft === 'clamp') result = inputMin;
  }

  if (result > inputMax) {
    if (extrapolateRight === 'identity') return result;else if (extrapolateRight === 'clamp') result = inputMax;
  }

  if (outputMin === outputMax) return outputMin;
  if (inputMin === inputMax) return input <= inputMin ? outputMin : outputMax; // Input Range

  if (inputMin === -Infinity) result = -result;else if (inputMax === Infinity) result = result - inputMin;else result = (result - inputMin) / (inputMax - inputMin); // Easing

  result = easing(result); // Output Range

  if (outputMin === -Infinity) result = -result;else if (outputMax === Infinity) result = result + outputMin;else result = result * (outputMax - outputMin) + outputMin;
  return result;
}

function findRange(input, inputRange) {
  for (var i = 1; i < inputRange.length - 1; ++i) if (inputRange[i] >= input) break;

  return i - 1;
}

class AnimatedInterpolation extends AnimatedArray {
  constructor(parents, range, output, extrapolate) {
    super();
    this.calc = void 0;
    this.payload = parents instanceof AnimatedArray && !(parents instanceof AnimatedInterpolation) ? parents.getPayload() : Array.isArray(parents) ? parents : [parents];
    this.calc = createInterpolator(range, output, extrapolate);
  }

  getValue() {
    return this.calc(...this.payload.map(value => value.getValue()));
  }

  updateConfig(range, output, extrapolate) {
    this.calc = createInterpolator(range, output, extrapolate);
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

const interpolate$1 = (parents, range, output) => parents && new AnimatedInterpolation(parents, range, output);

const config = {
  default: {
    tension: 170,
    friction: 26
  },
  gentle: {
    tension: 120,
    friction: 14
  },
  wobbly: {
    tension: 180,
    friction: 12
  },
  stiff: {
    tension: 210,
    friction: 20
  },
  slow: {
    tension: 280,
    friction: 60
  },
  molasses: {
    tension: 280,
    friction: 120
  }
};

/** API
 *  useChain(references, timeSteps, timeFrame)
 */

function useChain(refs, timeSteps, timeFrame) {
  if (timeFrame === void 0) {
    timeFrame = 1000;
  }

  const previous = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (is.equ(refs, previous.current)) refs.forEach((_ref) => {
      let current = _ref.current;
      return current && current.start();
    });else if (timeSteps) {
      refs.forEach((_ref2, index) => {
        let current = _ref2.current;

        if (current) {
          const ctrls = current.controllers;

          if (ctrls.length) {
            const t = timeFrame * timeSteps[index];
            ctrls.forEach(ctrl => {
              ctrl.queue = ctrl.queue.map(e => Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, e, {
                delay: e.delay + t
              }));
              ctrl.start();
            });
          }
        }
      });
    } else refs.reduce((q, _ref3, rI) => {
      let current = _ref3.current;
      return q = q.then(() => current.start());
    }, Promise.resolve());
    previous.current = refs;
  });
}

/**
 * Animated works by building a directed acyclic graph of dependencies
 * transparently when you render your Animated components.
 *
 *               new Animated.Value(0)
 *     .interpolate()        .interpolate()    new Animated.Value(1)
 *         opacity               translateY      scale
 *          style                         transform
 *         View#234                         style
 *                                         View#123
 *
 * A) Top Down phase
 * When an AnimatedValue is updated, we recursively go down through this
 * graph in order to find leaf nodes: the views that we flag as needing
 * an update.
 *
 * B) Bottom Up phase
 * When a view is flagged as needing an update, we recursively go back up
 * in order to build the new value that it needs. The reason why we need
 * this two-phases process is to deal with composite props such as
 * transform which can receive values from multiple parents.
 */
function addAnimatedStyles(node, styles) {
  if ('update' in node) {
    styles.add(node);
  } else {
    node.getChildren().forEach(child => addAnimatedStyles(child, styles));
  }
}

class AnimatedValue extends Animated {
  constructor(_value) {
    var _this;

    super();
    _this = this;
    this.animatedStyles = new Set();
    this.value = void 0;
    this.startPosition = void 0;
    this.lastPosition = void 0;
    this.lastVelocity = void 0;
    this.startTime = void 0;
    this.lastTime = void 0;
    this.done = false;

    this.setValue = function (value, flush) {
      if (flush === void 0) {
        flush = true;
      }

      _this.value = value;
      if (flush) _this.flush();
    };

    this.value = _value;
    this.startPosition = _value;
    this.lastPosition = _value;
  }

  flush() {
    if (this.animatedStyles.size === 0) {
      addAnimatedStyles(this, this.animatedStyles);
    }

    this.animatedStyles.forEach(animatedStyle => animatedStyle.update());
  }

  clearStyles() {
    this.animatedStyles.clear();
  }

  getValue() {
    return this.value;
  }

  interpolate(range, output, extrapolate) {
    return new AnimatedInterpolation(this, range, output, extrapolate);
  }

}

class AnimatedValueArray extends AnimatedArray {
  constructor(values) {
    super();
    this.payload = values.map(n => new AnimatedValue(n));
  }

  setValue(value, flush) {
    if (flush === void 0) {
      flush = true;
    }

    if (Array.isArray(value)) {
      if (value.length === this.payload.length) {
        value.forEach((v, i) => this.payload[i].setValue(v, flush));
      }
    } else {
      this.payload.forEach(p => p.setValue(value, flush));
    }
  }

  getValue() {
    return this.payload.map(v => v.getValue());
  }

  interpolate(range, output) {
    return new AnimatedInterpolation(this, range, output);
  }

}

let G = 0;

class Controller {
  constructor() {
    this.id = void 0;
    this.idle = true;
    this.hasChanged = false;
    this.guid = 0;
    this.local = 0;
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.listeners = [];
    this.queue = [];
    this.localQueue = void 0;

    this.getValues = () => this.interpolations;

    this.id = G++;
  }
  /** update(props)
   *  This function filters input props and creates an array of tasks which are executed in .start()
   *  Each task is allowed to carry a delay, which means it can execute asnychroneously */


  update(args) {
    //this._id = n + this.id
    if (!args) return this; // Extract delay and the to-prop from props

    const _ref = interpolateTo(args),
          _ref$delay = _ref.delay,
          delay = _ref$delay === void 0 ? 0 : _ref$delay,
          to = _ref.to,
          props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["delay", "to"]);

    if (is.arr(to) || is.fun(to)) {
      // If config is either a function or an array queue it up as is
      this.queue.push(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        delay,
        to
      }));
    } else if (to) {
      // Otherwise go through each key since it could be delayed individually
      let ops = {};
      Object.entries(to).forEach((_ref2) => {
        let k = _ref2[0],
            v = _ref2[1];

        // Fetch delay and create an entry, consisting of the to-props, the delay, and basic props
        const entry = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
          to: {
            [k]: v
          },
          delay: callProp(delay, k)
        }, props);

        const previous = ops[entry.delay] && ops[entry.delay].to;
        ops[entry.delay] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ops[entry.delay], entry, {
          to: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, previous, entry.to)
        });
      });
      this.queue = Object.values(ops);
    } // Sort queue, so that async calls go last


    this.queue = this.queue.sort((a, b) => a.delay - b.delay); // Diff the reduced props immediately (they'll contain the from-prop and some config)

    this.diff(props);
    return this;
  }
  /** start(onEnd)
   *  This function either executes a queue, if present, or starts the frameloop, which animates */


  start(onEnd) {
    // If a queue is present we must excecute it
    if (this.queue.length) {
      this.idle = false; // Updates can interrupt trailing queues, in that case we just merge values

      if (this.localQueue) {
        this.localQueue.forEach((_ref3) => {
          let _ref3$from = _ref3.from,
              from = _ref3$from === void 0 ? {} : _ref3$from,
              _ref3$to = _ref3.to,
              to = _ref3$to === void 0 ? {} : _ref3$to;
          if (is.obj(from)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged);
          if (is.obj(to)) this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.merged, to);
        });
      } // The guid helps us tracking frames, a new queue over an old one means an override
      // We discard async calls in that caseÍ


      const local = this.local = ++this.guid;
      const queue = this.localQueue = this.queue;
      this.queue = []; // Go through each entry and execute it

      queue.forEach((_ref4, index) => {
        let delay = _ref4.delay,
            props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, ["delay"]);

        const cb = finished => {
          if (index === queue.length - 1 && local === this.guid && finished) {
            this.idle = true;
            if (this.props.onRest) this.props.onRest(this.merged);
          }

          if (onEnd) onEnd();
        }; // Entries can be delayed, ansyc or immediate


        let async = is.arr(props.to) || is.fun(props.to);

        if (delay) {
          setTimeout(() => {
            if (local === this.guid) {
              if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
            }
          }, delay);
        } else if (async) this.runAsync(props, cb);else this.diff(props).start(cb);
      });
    } // Otherwise we kick of the frameloop
    else {
        if (is.fun(onEnd)) this.listeners.push(onEnd);
        if (this.props.onStart) this.props.onStart();
        start(this);
      }

    return this;
  }

  stop(finished) {
    this.listeners.forEach(onEnd => onEnd(finished));
    this.listeners = [];
    return this;
  }
  /** Pause sets onEnd listeners free, but also removes the controller from the frameloop */


  pause(finished) {
    this.stop(true);
    if (finished) stop(this);
    return this;
  }

  runAsync(_ref5, onEnd) {
    var _this = this;

    let delay = _ref5.delay,
        props = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref5, ["delay"]);

    const local = this.local; // If "to" is either a function or an array it will be processed async, therefor "to" should be empty right now
    // If the view relies on certain values "from" has to be present

    let queue = Promise.resolve(undefined);

    if (is.arr(props.to)) {
      for (let i = 0; i < props.to.length; i++) {
        const index = i;

        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(props.to[index]));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        queue = queue.then(() => {
          //this.stop()
          if (local === this.guid) return new Promise(r => this.diff(fresh).start(r));
        });
      }
    } else if (is.fun(props.to)) {
      let index = 0;
      let last;
      queue = queue.then(() => props.to( // next(props)
      p => {
        const fresh = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, interpolateTo(p));

        if (is.arr(fresh.config)) fresh.config = fresh.config[index];
        index++; //this.stop()

        if (local === this.guid) return last = new Promise(r => this.diff(fresh).start(r));
        return;
      }, // cancel()
      function (finished) {
        if (finished === void 0) {
          finished = true;
        }

        return _this.stop(finished);
      }).then(() => last));
    }

    queue.then(onEnd);
  }

  diff(props) {
    this.props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.props, props);
    let _this$props = this.props,
        _this$props$from = _this$props.from,
        from = _this$props$from === void 0 ? {} : _this$props$from,
        _this$props$to = _this$props.to,
        to = _this$props$to === void 0 ? {} : _this$props$to,
        _this$props$config = _this$props.config,
        config = _this$props$config === void 0 ? {} : _this$props$config,
        reverse = _this$props.reverse,
        attach = _this$props.attach,
        reset = _this$props.reset,
        immediate = _this$props.immediate; // Reverse values when requested

    if (reverse) {
      var _ref6 = [to, from];
      from = _ref6[0];
      to = _ref6[1];
    } // This will collect all props that were ever set, reset merged props when necessary


    this.merged = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, from, this.merged, to);
    this.hasChanged = false; // Attachment handling, trailed springs can "attach" themselves to a previous spring

    let target = attach && attach(this); // Reduces input { name: value } pairs into animated values

    this.animations = Object.entries(this.merged).reduce((acc, _ref7) => {
      let name = _ref7[0],
          value = _ref7[1];
      // Issue cached entries, except on reset
      let entry = acc[name] || {}; // Figure out what the value is supposed to be

      const isNumber = is.num(value);
      const isString = is.str(value) && !value.startsWith('#') && !/\d/.test(value) && !colorNames[value];
      const isArray = is.arr(value);
      const isInterpolation = !isNumber && !isArray && !isString;
      let fromValue = !is.und(from[name]) ? from[name] : value;
      let toValue = isNumber || isArray ? value : isString ? value : 1;
      let toConfig = callProp(config, name);
      if (target) toValue = target.animations[name].parent;
      let parent = entry.parent,
          interpolation$$1 = entry.interpolation,
          toValues = toArray(target ? toValue.getPayload() : toValue),
          animatedValues;
      let newValue = value;
      if (isInterpolation) newValue = interpolation({
        range: [0, 1],
        output: [value, value]
      })(1);
      let currentValue = interpolation$$1 && interpolation$$1.getValue(); // Change detection flags

      const isFirst = is.und(parent);
      const isActive = !isFirst && entry.animatedValues.some(v => !v.done);
      const currentValueDiffersFromGoal = !is.equ(newValue, currentValue);
      const hasNewGoal = !is.equ(newValue, entry.previous);
      const hasNewConfig = !is.equ(toConfig, entry.config); // Change animation props when props indicate a new goal (new value differs from previous one)
      // and current values differ from it. Config changes trigger a new update as well (though probably shouldn't?)

      if (reset || hasNewGoal && currentValueDiffersFromGoal || hasNewConfig) {
        // Convert regular values into animated values, ALWAYS re-use if possible
        if (isNumber || isString) parent = interpolation$$1 = entry.parent || new AnimatedValue(fromValue);else if (isArray) parent = interpolation$$1 = entry.parent || new AnimatedValueArray(fromValue);else if (isInterpolation) {
          let prev = entry.interpolation && entry.interpolation.calc(entry.parent.value);
          prev = prev !== void 0 && !reset ? prev : fromValue;

          if (entry.parent) {
            parent = entry.parent;
            parent.setValue(0, false);
          } else parent = new AnimatedValue(0);

          const range = {
            output: [prev, value]
          };

          if (entry.interpolation) {
            interpolation$$1 = entry.interpolation;
            entry.interpolation.updateConfig(range);
          } else interpolation$$1 = parent.interpolate(range);
        }
        toValues = toArray(target ? toValue.getPayload() : toValue);
        animatedValues = toArray(parent.getPayload());
        if (reset && !isInterpolation) parent.setValue(fromValue, false);
        this.hasChanged = true; // Reset animated values

        animatedValues.forEach(value => {
          value.startPosition = value.value;
          value.lastPosition = value.value;
          value.lastVelocity = isActive ? value.lastVelocity : undefined;
          value.lastTime = isActive ? value.lastTime : undefined;
          value.startTime = now();
          value.done = false;
          value.animatedStyles.clear();
        }); // Set immediate values

        if (callProp(immediate, name)) {
          parent.setValue(isInterpolation ? toValue : value, false);
        }

        return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
          [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry, {
            name,
            parent,
            interpolation: interpolation$$1,
            animatedValues,
            toValues,
            previous: newValue,
            config: toConfig,
            fromValues: toArray(parent.getValue()),
            immediate: callProp(immediate, name),
            initialVelocity: withDefault(toConfig.velocity, 0),
            clamp: withDefault(toConfig.clamp, false),
            precision: withDefault(toConfig.precision, 0.01),
            tension: withDefault(toConfig.tension, 170),
            friction: withDefault(toConfig.friction, 26),
            mass: withDefault(toConfig.mass, 1),
            duration: toConfig.duration,
            easing: withDefault(toConfig.easing, t => t),
            decay: toConfig.decay
          })
        });
      } else {
        if (!currentValueDiffersFromGoal) {
          // So ... the current target value (newValue) appears to be different from the previous value,
          // which normally constitutes an update, but the actual value (currentValue) matches the target!
          // In order to resolve this without causing an animation update we silently flag the animation as done,
          // which it technically is. Interpolations also needs a config update with their target set to 1.
          if (isInterpolation) {
            parent.setValue(1, false);
            interpolation$$1.updateConfig({
              output: [newValue, newValue]
            });
          }

          parent.done = true;
          this.hasChanged = true;
          return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc, {
            [name]: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, acc[name], {
              previous: newValue
            })
          });
        }

        return acc;
      }
    }, this.animations);

    if (this.hasChanged) {
      // Make animations available to frameloop
      this.configs = Object.values(this.animations);
      this.values = {};
      this.interpolations = {};

      for (let key in this.animations) {
        this.interpolations[key] = this.animations[key].interpolation;
        this.values[key] = this.animations[key].interpolation.getValue();
      }
    }

    return this;
  }

  destroy() {
    this.stop();
    this.props = {};
    this.merged = {};
    this.animations = {};
    this.interpolations = {};
    this.values = {};
    this.configs = [];
    this.local = 0;
  }

}

/** API
 * const props = useSprings(number, [{ ... }, { ... }, ...])
 * const [props, set] = useSprings(number, (i, controller) => ({ ... }))
 */

const useSprings = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const ctrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  const isFn = is.fun(props); // The controller maintains the animation values, starts and stops animations

  const _useMemo = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => {
    // Remove old controllers
    if (ctrl.current) {
      ctrl.current.map(c => c.destroy());
      ctrl.current = undefined;
    }

    let ref;
    return [new Array(length).fill().map((_, i) => {
      const ctrl = new Controller();
      const newProps = isFn ? callProp(props, i, ctrl) : props[i];
      if (i === 0) ref = newProps.ref;
      ctrl.update(newProps);
      if (!ref) ctrl.start();
      return ctrl;
    }), ref];
  }, [length]),
        controllers = _useMemo[0],
        ref = _useMemo[1];

  ctrl.current = controllers; // The hooks reference api gets defined here ...

  const api = Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(ref, () => ({
    start: () => Promise.all(ctrl.current.map(c => new Promise(r => c.start(r)))),
    stop: finished => ctrl.current.forEach(c => c.stop(finished)),

    get controllers() {
      return ctrl.current;
    }

  })); // This function updates the controllers

  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => updateProps => ctrl.current.map((c, i) => {
    c.update(isFn ? callProp(updateProps, i, c) : updateProps[i]);
    if (!ref) c.start();
  }), [length]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    if (mounted.current) {
      if (!isFn) updateCtrl(props);
    } else if (!ref) ctrl.current.forEach(c => c.start());
  }); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => (mounted.current = true, () => ctrl.current.forEach(c => c.destroy())), []); // Return animated props, or, anim-props + the update-setter above

  const propValues = ctrl.current.map(c => c.getValues());
  return isFn ? [propValues, updateCtrl, finished => ctrl.current.forEach(c => c.pause(finished))] : propValues;
};

/** API
 * const props = useSpring({ ... })
 * const [props, set] = useSpring(() => ({ ... }))
 */

const useSpring = props => {
  const isFn = is.fun(props);

  const _useSprings = useSprings(1, isFn ? props : [props]),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2];

  return isFn ? [result[0], set, pause] : result;
};

/** API
 * const trails = useTrail(number, { ... })
 * const [trails, set] = useTrail(number, () => ({ ... }))
 */

const useTrail = (length, props) => {
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const isFn = is.fun(props);
  const updateProps = callProp(props);
  const instances = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  const _useSprings = useSprings(length, (i, ctrl) => {
    if (i === 0) instances.current = [];
    instances.current.push(ctrl);
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, updateProps, {
      config: callProp(updateProps.config, i),
      attach: i > 0 && (() => instances.current[i - 1])
    });
  }),
        result = _useSprings[0],
        set = _useSprings[1],
        pause = _useSprings[2]; // Set up function to update controller


  const updateCtrl = Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(() => props => set((i, ctrl) => {
    const last = props.reverse ? i === 0 : length - 1 === i;
    const attachIdx = props.reverse ? i + 1 : i - 1;
    const attachController = instances.current[attachIdx];
    return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      config: callProp(props.config || updateProps.config, i),
      attach: attachController && (() => attachController)
    });
  }), [length, updateProps.reverse]); // Update controller if props aren't functional

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current && !isFn && updateCtrl(props))); // Update mounted flag and destroy controller on unmount

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => void (mounted.current = true), []);
  return isFn ? [result, updateCtrl, pause] : result;
};

/** API
 * const transitions = useTransition(items, itemKeys, { ... })
 * const [transitions, update] = useTransition(items, itemKeys, () => ({ ... }))
 */

let guid = 0;
const ENTER = 'enter';
const LEAVE = 'leave';
const UPDATE = 'update';

const mapKeys = (items, keys) => (typeof keys === 'function' ? items.map(keys) : toArray(keys)).map(String);

const get = props => {
  let items = props.items,
      _props$keys = props.keys,
      keys = _props$keys === void 0 ? item => item : _props$keys,
      rest = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["items", "keys"]);

  items = toArray(items !== void 0 ? items : null);
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items,
    keys: mapKeys(items, keys)
  }, rest);
};

function useTransition(input, keyTransform, config) {
  const props = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    items: input,
    keys: keyTransform || (i => i)
  }, config);

  const _get = get(props),
        _get$lazy = _get.lazy,
        lazy = _get$lazy === void 0 ? false : _get$lazy,
        _get$unique = _get.unique,
        _get$reset = _get.reset,
        reset = _get$reset === void 0 ? false : _get$reset,
        enter = _get.enter,
        leave = _get.leave,
        update = _get.update,
        onDestroyed = _get.onDestroyed,
        keys = _get.keys,
        items = _get.items,
        onFrame = _get.onFrame,
        _onRest = _get.onRest,
        onStart = _get.onStart,
        ref = _get.ref,
        extra = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_get, ["lazy", "unique", "reset", "enter", "leave", "update", "onDestroyed", "keys", "items", "onFrame", "onRest", "onStart", "ref"]);

  const forceUpdate = useForceUpdate();
  const mounted = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(false);
  const state = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])({
    mounted: false,
    first: true,
    deleted: [],
    current: {},
    transitions: [],
    prevProps: {},
    paused: !!props.ref,
    instances: !mounted.current && new Map(),
    forceUpdate
  });
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useImperativeHandle"])(props.ref, () => ({
    start: () => Promise.all(Array.from(state.current.instances).map((_ref) => {
      let c = _ref[1];
      return new Promise(r => c.start(r));
    })),
    stop: finished => Array.from(state.current.instances).forEach((_ref2) => {
      let c = _ref2[1];
      return c.stop(finished);
    }),

    get controllers() {
      return Array.from(state.current.instances).map((_ref3) => {
        let c = _ref3[1];
        return c;
      });
    }

  })); // Update state

  state.current = diffItems(state.current, props);

  if (state.current.changed) {
    // Update state
    state.current.transitions.forEach(transition => {
      const slot = transition.slot,
            from = transition.from,
            to = transition.to,
            config = transition.config,
            trail = transition.trail,
            key = transition.key,
            item = transition.item;
      if (!state.current.instances.has(key)) state.current.instances.set(key, new Controller()); // update the map object

      const ctrl = state.current.instances.get(key);

      const newProps = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, extra, {
        to,
        from,
        config,
        ref,
        onRest: values => {
          if (state.current.mounted) {
            if (transition.destroyed) {
              // If no ref is given delete destroyed items immediately
              if (!ref && !lazy) cleanUp(state, key);
              if (onDestroyed) onDestroyed(item);
            } // A transition comes to rest once all its springs conclude


            const curInstances = Array.from(state.current.instances);
            const active = curInstances.some((_ref4) => {
              let c = _ref4[1];
              return !c.idle;
            });
            if (!active && (ref || lazy) && state.current.deleted.length > 0) cleanUp(state);
            if (_onRest) _onRest(item, slot, values);
          }
        },
        onStart: onStart && (() => onStart(item, slot)),
        onFrame: onFrame && (values => onFrame(item, slot, values)),
        delay: trail,
        reset: reset && slot === ENTER // Update controller

      });

      ctrl.update(newProps);
      if (!state.current.paused) ctrl.start();
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    state.current.mounted = mounted.current = true;
    return () => {
      state.current.mounted = mounted.current = false;
      Array.from(state.current.instances).map((_ref5) => {
        let c = _ref5[1];
        return c.destroy();
      });
      state.current.instances.clear();
    };
  }, []);
  return state.current.transitions.map((_ref6) => {
    let item = _ref6.item,
        slot = _ref6.slot,
        key = _ref6.key;
    return {
      item,
      key,
      state: slot,
      props: state.current.instances.get(key).getValues()
    };
  });
}

function cleanUp(state, filterKey) {
  const deleted = state.current.deleted;

  for (let _ref7 of deleted) {
    let key = _ref7.key;

    const filter = t => t.key !== key;

    if (is.und(filterKey) || filterKey === key) {
      state.current.instances.delete(key);
      state.current.transitions = state.current.transitions.filter(filter);
      state.current.deleted = state.current.deleted.filter(filter);
    }
  }

  state.current.forceUpdate();
}

function diffItems(_ref8, props) {
  let first = _ref8.first,
      prevProps = _ref8.prevProps,
      state = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref8, ["first", "prevProps"]);

  let _get2 = get(props),
      items = _get2.items,
      keys = _get2.keys,
      initial = _get2.initial,
      from = _get2.from,
      enter = _get2.enter,
      leave = _get2.leave,
      update = _get2.update,
      _get2$trail = _get2.trail,
      trail = _get2$trail === void 0 ? 0 : _get2$trail,
      unique = _get2.unique,
      config = _get2.config,
      _get2$order = _get2.order,
      order = _get2$order === void 0 ? [ENTER, LEAVE, UPDATE] : _get2$order;

  let _get3 = get(prevProps),
      _keys = _get3.keys,
      _items = _get3.items;

  let current = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.current);

  let deleted = [...state.deleted]; // Compare next keys with current keys

  let currentKeys = Object.keys(current);
  let currentSet = new Set(currentKeys);
  let nextSet = new Set(keys);
  let added = keys.filter(item => !currentSet.has(item));
  let removed = state.transitions.filter(item => !item.destroyed && !nextSet.has(item.originalKey)).map(i => i.originalKey);
  let updated = keys.filter(item => currentSet.has(item));
  let delay = -trail;

  while (order.length) {
    const changeType = order.shift();

    switch (changeType) {
      case ENTER:
        {
          added.forEach((key, index) => {
            // In unique mode, remove fading out transitions if their key comes in again
            if (unique && deleted.find(d => d.originalKey === key)) deleted = deleted.filter(t => t.originalKey !== key);
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = first && initial !== void 0 ? 'initial' : ENTER;
            current[key] = {
              slot,
              originalKey: key,
              key: unique ? String(key) : guid++,
              item,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              from: callProp(first ? initial !== void 0 ? initial || {} : from : from, item),
              to: callProp(enter, item)
            };
          });
          break;
        }

      case LEAVE:
        {
          removed.forEach(key => {
            const keyIndex = _keys.indexOf(key);

            const item = _items[keyIndex];
            const slot = LEAVE;
            deleted.unshift(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              slot,
              destroyed: true,
              left: _keys[Math.max(0, keyIndex - 1)],
              right: _keys[Math.min(_keys.length, keyIndex + 1)],
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(leave, item)
            }));
            delete current[key];
          });
          break;
        }

      case UPDATE:
        {
          updated.forEach(key => {
            const keyIndex = keys.indexOf(key);
            const item = items[keyIndex];
            const slot = UPDATE;
            current[key] = Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, current[key], {
              item,
              slot,
              trail: delay = delay + trail,
              config: callProp(config, item, slot),
              to: callProp(update, item)
            });
          });
          break;
        }
    }
  }

  let out = keys.map(key => current[key]); // This tries to restore order for deleted items by finding their last known siblings
  // only using the left sibling to keep order placement consistent for all deleted items

  deleted.forEach((_ref9) => {
    let left = _ref9.left,
        right = _ref9.right,
        item = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref9, ["left", "right"]);

    let pos; // Was it the element on the left, if yes, move there ...

    if ((pos = out.findIndex(t => t.originalKey === left)) !== -1) pos += 1; // And if nothing else helps, move it to the start ¯\_(ツ)_/¯

    pos = Math.max(0, pos);
    out = [...out.slice(0, pos), item, ...out.slice(pos)];
  });
  return Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
    changed: added.length || removed.length || updated.length,
    first: first && added.length === 0,
    transitions: out,
    current,
    deleted,
    prevProps: props
  });
}

class AnimatedStyle extends AnimatedObject {
  constructor(style) {
    if (style === void 0) {
      style = {};
    }

    super();

    if (style.transform && !(style.transform instanceof Animated)) {
      style = applyAnimatedValues.transform(style);
    }

    this.payload = style;
  }

}

// http://www.w3.org/TR/css3-color/#svg-color
const colors = {
  transparent: 0x00000000,
  aliceblue: 0xf0f8ffff,
  antiquewhite: 0xfaebd7ff,
  aqua: 0x00ffffff,
  aquamarine: 0x7fffd4ff,
  azure: 0xf0ffffff,
  beige: 0xf5f5dcff,
  bisque: 0xffe4c4ff,
  black: 0x000000ff,
  blanchedalmond: 0xffebcdff,
  blue: 0x0000ffff,
  blueviolet: 0x8a2be2ff,
  brown: 0xa52a2aff,
  burlywood: 0xdeb887ff,
  burntsienna: 0xea7e5dff,
  cadetblue: 0x5f9ea0ff,
  chartreuse: 0x7fff00ff,
  chocolate: 0xd2691eff,
  coral: 0xff7f50ff,
  cornflowerblue: 0x6495edff,
  cornsilk: 0xfff8dcff,
  crimson: 0xdc143cff,
  cyan: 0x00ffffff,
  darkblue: 0x00008bff,
  darkcyan: 0x008b8bff,
  darkgoldenrod: 0xb8860bff,
  darkgray: 0xa9a9a9ff,
  darkgreen: 0x006400ff,
  darkgrey: 0xa9a9a9ff,
  darkkhaki: 0xbdb76bff,
  darkmagenta: 0x8b008bff,
  darkolivegreen: 0x556b2fff,
  darkorange: 0xff8c00ff,
  darkorchid: 0x9932ccff,
  darkred: 0x8b0000ff,
  darksalmon: 0xe9967aff,
  darkseagreen: 0x8fbc8fff,
  darkslateblue: 0x483d8bff,
  darkslategray: 0x2f4f4fff,
  darkslategrey: 0x2f4f4fff,
  darkturquoise: 0x00ced1ff,
  darkviolet: 0x9400d3ff,
  deeppink: 0xff1493ff,
  deepskyblue: 0x00bfffff,
  dimgray: 0x696969ff,
  dimgrey: 0x696969ff,
  dodgerblue: 0x1e90ffff,
  firebrick: 0xb22222ff,
  floralwhite: 0xfffaf0ff,
  forestgreen: 0x228b22ff,
  fuchsia: 0xff00ffff,
  gainsboro: 0xdcdcdcff,
  ghostwhite: 0xf8f8ffff,
  gold: 0xffd700ff,
  goldenrod: 0xdaa520ff,
  gray: 0x808080ff,
  green: 0x008000ff,
  greenyellow: 0xadff2fff,
  grey: 0x808080ff,
  honeydew: 0xf0fff0ff,
  hotpink: 0xff69b4ff,
  indianred: 0xcd5c5cff,
  indigo: 0x4b0082ff,
  ivory: 0xfffff0ff,
  khaki: 0xf0e68cff,
  lavender: 0xe6e6faff,
  lavenderblush: 0xfff0f5ff,
  lawngreen: 0x7cfc00ff,
  lemonchiffon: 0xfffacdff,
  lightblue: 0xadd8e6ff,
  lightcoral: 0xf08080ff,
  lightcyan: 0xe0ffffff,
  lightgoldenrodyellow: 0xfafad2ff,
  lightgray: 0xd3d3d3ff,
  lightgreen: 0x90ee90ff,
  lightgrey: 0xd3d3d3ff,
  lightpink: 0xffb6c1ff,
  lightsalmon: 0xffa07aff,
  lightseagreen: 0x20b2aaff,
  lightskyblue: 0x87cefaff,
  lightslategray: 0x778899ff,
  lightslategrey: 0x778899ff,
  lightsteelblue: 0xb0c4deff,
  lightyellow: 0xffffe0ff,
  lime: 0x00ff00ff,
  limegreen: 0x32cd32ff,
  linen: 0xfaf0e6ff,
  magenta: 0xff00ffff,
  maroon: 0x800000ff,
  mediumaquamarine: 0x66cdaaff,
  mediumblue: 0x0000cdff,
  mediumorchid: 0xba55d3ff,
  mediumpurple: 0x9370dbff,
  mediumseagreen: 0x3cb371ff,
  mediumslateblue: 0x7b68eeff,
  mediumspringgreen: 0x00fa9aff,
  mediumturquoise: 0x48d1ccff,
  mediumvioletred: 0xc71585ff,
  midnightblue: 0x191970ff,
  mintcream: 0xf5fffaff,
  mistyrose: 0xffe4e1ff,
  moccasin: 0xffe4b5ff,
  navajowhite: 0xffdeadff,
  navy: 0x000080ff,
  oldlace: 0xfdf5e6ff,
  olive: 0x808000ff,
  olivedrab: 0x6b8e23ff,
  orange: 0xffa500ff,
  orangered: 0xff4500ff,
  orchid: 0xda70d6ff,
  palegoldenrod: 0xeee8aaff,
  palegreen: 0x98fb98ff,
  paleturquoise: 0xafeeeeff,
  palevioletred: 0xdb7093ff,
  papayawhip: 0xffefd5ff,
  peachpuff: 0xffdab9ff,
  peru: 0xcd853fff,
  pink: 0xffc0cbff,
  plum: 0xdda0ddff,
  powderblue: 0xb0e0e6ff,
  purple: 0x800080ff,
  rebeccapurple: 0x663399ff,
  red: 0xff0000ff,
  rosybrown: 0xbc8f8fff,
  royalblue: 0x4169e1ff,
  saddlebrown: 0x8b4513ff,
  salmon: 0xfa8072ff,
  sandybrown: 0xf4a460ff,
  seagreen: 0x2e8b57ff,
  seashell: 0xfff5eeff,
  sienna: 0xa0522dff,
  silver: 0xc0c0c0ff,
  skyblue: 0x87ceebff,
  slateblue: 0x6a5acdff,
  slategray: 0x708090ff,
  slategrey: 0x708090ff,
  snow: 0xfffafaff,
  springgreen: 0x00ff7fff,
  steelblue: 0x4682b4ff,
  tan: 0xd2b48cff,
  teal: 0x008080ff,
  thistle: 0xd8bfd8ff,
  tomato: 0xff6347ff,
  turquoise: 0x40e0d0ff,
  violet: 0xee82eeff,
  wheat: 0xf5deb3ff,
  white: 0xffffffff,
  whitesmoke: 0xf5f5f5ff,
  yellow: 0xffff00ff,
  yellowgreen: 0x9acd32ff
};

// const INTEGER = '[-+]?\\d+';
const NUMBER = '[-+]?\\d*\\.?\\d+';
const PERCENTAGE = NUMBER + '%';

function call() {
  for (var _len = arguments.length, parts = new Array(_len), _key = 0; _key < _len; _key++) {
    parts[_key] = arguments[_key];
  }

  return '\\(\\s*(' + parts.join(')\\s*,\\s*(') + ')\\s*\\)';
}

const rgb = new RegExp('rgb' + call(NUMBER, NUMBER, NUMBER));
const rgba = new RegExp('rgba' + call(NUMBER, NUMBER, NUMBER, NUMBER));
const hsl = new RegExp('hsl' + call(NUMBER, PERCENTAGE, PERCENTAGE));
const hsla = new RegExp('hsla' + call(NUMBER, PERCENTAGE, PERCENTAGE, NUMBER));
const hex3 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex4 = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
const hex6 = /^#([0-9a-fA-F]{6})$/;
const hex8 = /^#([0-9a-fA-F]{8})$/;

/*
https://github.com/react-community/normalize-css-color

BSD 3-Clause License

Copyright (c) 2016, React Community
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
function normalizeColor(color) {
  let match;

  if (typeof color === 'number') {
    return color >>> 0 === color && color >= 0 && color <= 0xffffffff ? color : null;
  } // Ordered based on occurrences on Facebook codebase


  if (match = hex6.exec(color)) return parseInt(match[1] + 'ff', 16) >>> 0;
  if (colors.hasOwnProperty(color)) return colors[color];

  if (match = rgb.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    0x000000ff) >>> // a
    0;
  }

  if (match = rgba.exec(color)) {
    return (parse255(match[1]) << 24 | // r
    parse255(match[2]) << 16 | // g
    parse255(match[3]) << 8 | // b
    parse1(match[4])) >>> // a
    0;
  }

  if (match = hex3.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    'ff', // a
    16) >>> 0;
  } // https://drafts.csswg.org/css-color-4/#hex-notation


  if (match = hex8.exec(color)) return parseInt(match[1], 16) >>> 0;

  if (match = hex4.exec(color)) {
    return parseInt(match[1] + match[1] + // r
    match[2] + match[2] + // g
    match[3] + match[3] + // b
    match[4] + match[4], // a
    16) >>> 0;
  }

  if (match = hsl.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | 0x000000ff) >>> // a
    0;
  }

  if (match = hsla.exec(color)) {
    return (hslToRgb(parse360(match[1]), // h
    parsePercentage(match[2]), // s
    parsePercentage(match[3]) // l
    ) | parse1(match[4])) >>> // a
    0;
  }

  return null;
}

function hue2rgb(p, q, t) {
  if (t < 0) t += 1;
  if (t > 1) t -= 1;
  if (t < 1 / 6) return p + (q - p) * 6 * t;
  if (t < 1 / 2) return q;
  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
  return p;
}

function hslToRgb(h, s, l) {
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const r = hue2rgb(p, q, h + 1 / 3);
  const g = hue2rgb(p, q, h);
  const b = hue2rgb(p, q, h - 1 / 3);
  return Math.round(r * 255) << 24 | Math.round(g * 255) << 16 | Math.round(b * 255) << 8;
}

function parse255(str) {
  const int = parseInt(str, 10);
  if (int < 0) return 0;
  if (int > 255) return 255;
  return int;
}

function parse360(str) {
  const int = parseFloat(str);
  return (int % 360 + 360) % 360 / 360;
}

function parse1(str) {
  const num = parseFloat(str);
  if (num < 0) return 0;
  if (num > 1) return 255;
  return Math.round(num * 255);
}

function parsePercentage(str) {
  // parseFloat conveniently ignores the final %
  const int = parseFloat(str);
  if (int < 0) return 0;
  if (int > 100) return 1;
  return int / 100;
}

function colorToRgba(input) {
  let int32Color = normalizeColor(input);
  if (int32Color === null) return input;
  int32Color = int32Color || 0;
  let r = (int32Color & 0xff000000) >>> 24;
  let g = (int32Color & 0x00ff0000) >>> 16;
  let b = (int32Color & 0x0000ff00) >>> 8;
  let a = (int32Color & 0x000000ff) / 255;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
} // Problem: https://github.com/animatedjs/animated/pull/102
// Solution: https://stackoverflow.com/questions/638565/parsing-scientific-notation-sensibly/658662


const stringShapeRegex = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g; // Covers rgb, rgba, hsl, hsla
// Taken from https://gist.github.com/olmokramer/82ccce673f86db7cda5e

const colorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi; // Covers color names (transparent, blue, etc.)

const colorNamesRegex = new RegExp(`(${Object.keys(colors).join('|')})`, 'g');
/**
 * Supports string shapes by extracting numbers so new values can be computed,
 * and recombines those values into new strings of the same shape.  Supports
 * things like:
 *
 *   rgba(123, 42, 99, 0.36)           // colors
 *   -45deg                            // values with units
 *   0 2px 2px 0px rgba(0, 0, 0, 0.12) // box shadows
 */

const createStringInterpolator = config => {
  // Replace colors with rgba
  const outputRange = config.output.map(rangeValue => rangeValue.replace(colorRegex, colorToRgba)).map(rangeValue => rangeValue.replace(colorNamesRegex, colorToRgba));
  const outputRanges = outputRange[0].match(stringShapeRegex).map(() => []);
  outputRange.forEach(value => {
    value.match(stringShapeRegex).forEach((number, i) => outputRanges[i].push(+number));
  });
  const interpolations = outputRange[0].match(stringShapeRegex).map((_value, i) => createInterpolator(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, config, {
    output: outputRanges[i]
  })));
  return input => {
    let i = 0;
    return outputRange[0] // 'rgba(0, 100, 200, 0)'
    // ->
    // 'rgba(${interpolations[0](input)}, ${interpolations[1](input)}, ...'
    .replace(stringShapeRegex, () => interpolations[i++](input)) // rgba requires that the r,g,b are integers.... so we want to round them, but we *dont* want to
    // round the opacity (4th column).
    .replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi, (_, p1, p2, p3, p4) => `rgba(${Math.round(p1)}, ${Math.round(p2)}, ${Math.round(p3)}, ${p4})`);
  };
};

let isUnitlessNumber = {
  animationIterationCount: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  // SVG-related properties
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
};

const prefixKey = (prefix, key) => prefix + key.charAt(0).toUpperCase() + key.substring(1);

const prefixes = ['Webkit', 'Ms', 'Moz', 'O'];
isUnitlessNumber = Object.keys(isUnitlessNumber).reduce((acc, prop) => {
  prefixes.forEach(prefix => acc[prefixKey(prefix, prop)] = acc[prop]);
  return acc;
}, isUnitlessNumber);

function dangerousStyleValue(name, value, isCustomProperty) {
  if (value == null || typeof value === 'boolean' || value === '') return '';
  if (!isCustomProperty && typeof value === 'number' && value !== 0 && !(isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name])) return value + 'px'; // Presumes implicit 'px' suffix for unitless numbers

  return ('' + value).trim();
}

const attributeCache = {};
injectCreateAnimatedStyle(style => new AnimatedStyle(style));
injectDefaultElement('div');
injectStringInterpolator(createStringInterpolator);
injectColorNames(colors);
injectApplyAnimatedValues((instance, props) => {
  if (instance.nodeType && instance.setAttribute !== undefined) {
    const style = props.style,
          children = props.children,
          scrollTop = props.scrollTop,
          scrollLeft = props.scrollLeft,
          attributes = Object(_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["style", "children", "scrollTop", "scrollLeft"]);

    const filter = instance.nodeName === 'filter' || instance.parentNode && instance.parentNode.nodeName === 'filter';
    if (scrollTop !== void 0) instance.scrollTop = scrollTop;
    if (scrollLeft !== void 0) instance.scrollLeft = scrollLeft; // Set textContent, if children is an animatable value

    if (children !== void 0) instance.textContent = children; // Set styles ...

    for (let styleName in style) {
      if (!style.hasOwnProperty(styleName)) continue;
      var isCustomProperty = styleName.indexOf('--') === 0;
      var styleValue = dangerousStyleValue(styleName, style[styleName], isCustomProperty);
      if (styleName === 'float') styleName = 'cssFloat';
      if (isCustomProperty) instance.style.setProperty(styleName, styleValue);else instance.style[styleName] = styleValue;
    } // Set attributes ...


    for (let name in attributes) {
      // Attributes are written in dash case
      const dashCase = filter ? name : attributeCache[name] || (attributeCache[name] = name.replace(/([A-Z])/g, n => '-' + n.toLowerCase()));
      if (typeof instance.getAttribute(dashCase) !== 'undefined') instance.setAttribute(dashCase, attributes[name]);
    }

    return;
  } else return false;
}, style => style);

const domElements = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', // SVG
'circle', 'clipPath', 'defs', 'ellipse', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'mask', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'svg', 'text', 'tspan'];
// Extend animated with all the available THREE elements
const apply = merge(createAnimatedComponent, false);
const extendedAnimated = apply(domElements);




/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_MyLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/MyLayout */ "./components/MyLayout.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_TestHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/TestHeader */ "./components/TestHeader.js");
/* harmony import */ var _components_NeonLogo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/NeonLogo */ "./components/NeonLogo.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-scroll */ "./node_modules/react-scroll/modules/index.js");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Carousel */ "./components/Carousel.js");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-spotify-player */ "./node_modules/react-spotify-player/dist/SpotifyPlayer.js");
/* harmony import */ var react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_spotify_player__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_clientComp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/clientComp */ "./components/clientComp.js");
/* harmony import */ var _components_mediaComp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mediaComp */ "./components/mediaComp.js");
/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Gallery */ "./components/Gallery.js");
/* harmony import */ var _components_ContactComp__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/ContactComp */ "./components/ContactComp.js");
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/web.js");
var _jsxFileName = "/Users/braedencraig/Desktop/GELK-SITE/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
















var size = {
  width: '90%',
  height: 600,
  maxHeight: '600px'
};
var view = 'list'; // or 'coverart'

var theme = 'black'; // or 'white'

var Index = function Index(props) {
  return __jsx(_components_MyLayout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("div", {
    id: "text",
    className: "jsx-2674058118" + " " + 'scrollBox',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2674058118" + " " + 'gelkLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("img", {
    src: "/testNeon.gif",
    alt: "good enough live karaoke neon logo",
    className: "jsx-2674058118" + " " + 'gelkImageLogo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2674058118" + " " + 'songButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("a", {
    href: "/list",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "View Song List"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3885837156",
    __self: this
  }, ".songButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:2.5%;}.songButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.songButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.gelkImageLogo.jsx-2674058118{display:block;width:100%;height:auto;max-height:800px;}.gelkLogo.jsx-2674058118{width:62%;margin:0 auto;margin-top:3.5%;max-width:1400px;margin-bottom:0.5%;}svg.jsx-2674058118:hover{fill:rgba(241,241,241,0.6);cursor:pointer;}svg.jsx-2674058118{-webkit-transition:all 0.4s;transition:all 0.4s;}h1.jsx-2674058118,a.jsx-2674058118{font-family:'Montserrat',sans-serif;}ul.jsx-2674058118{padding:0;}li.jsx-2674058118{list-style:none;margin:5px 0;}a.jsx-2674058118{-webkit-text-decoration:none;text-decoration:none;}a.jsx-2674058118:hover{opacity:0.6;}.chevron.jsx-2674058118{margin-bottom:200px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:94%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;position:fixed;top:92vh;z-index:100;-webkit-transform:scale(1,-1);-ms-transform:scale(1,-1);transform:scale(1,-1);}.wrapper.jsx-2674058118{margin:0 auto;max-width:960px;padding:0 2%;}.scrollBox.jsx-2674058118{position:relative;color:white;width:20px;height:20px;bottom:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQixBQUlrQixBQU1LLEFBYU4sQUFNSSxBQU9KLEFBT29CLEFBS1IsQUFJaUIsQUFJM0IsQUFJTSxBQUtLLEFBSVQsQUFJUSxBQVdOLEFBTUksVUFqRWtCLEFBWXhCLEFBb0JkLENBcERrQixDQWlFbEIsRUF4Q1csQUF1RE8sRUExRUEsQUFrREgsRUE4QkQsRUFqQkMsSUFwQ0MsQ0FQSixFQWFLLEVBdENFLEFBd0RuQixDQXdCZSxBQU1GLElBaEZNLEVBeUNuQixDQXJCaUIsR0FPQSxDQXNESCxDQWhEZCxDQTBDQSxLQWhGRixBQTBDRSxFQWlCQSxHQXJEeUIsQUFpRlYsQ0E3RGpCLEdBT3FCLFNBdURuQixVQXRERixFQTNCbUIsZ0JBNkRMLEVBNURRLFFBNkRPLFNBbEQ3QiwrQkFWZ0IsY0FDTywyQ0E0REosT0EzREYsUUE0REosT0ExRGQsRUEyRGlCLFlBRWYsQ0E3REQsNkVBNkRFIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICA8YSBocmVmPScvbGlzdCc+VmlldyBTb25nIExpc3Q8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NoZXZyb24nPlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPSdzY3JvbGxDaGV2cm9uJ1xuICAgICAgICB0bz0ndGV4dCdcbiAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzQwcHgnXG4gICAgICAgICAgd2lkdGg9JzQwcHgnXG4gICAgICAgICAgZmlsbD0nI0YxRjFGMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgZD0nTTEyLDIzIEM1LjkyNDg2Nzc1LDIzIDEsMTguMDc1MTMyMiAxLDEyIEMxLDUuOTI0ODY3NzUgNS45MjQ4Njc3NSwxIDEyLDEgQzE4LjA3NTEzMjIsMSAyMyw1LjkyNDg2Nzc1IDIzLDEyIEMyMywxOC4wNzUxMzIyIDE4LjA3NTEzMjIsMjMgMTIsMjMgWiBNMTIsMjEgQzE2Ljk3MDU2MjcsMjEgMjEsMTYuOTcwNTYyNyAyMSwxMiBDMjEsNy4wMjk0MzcyNSAxNi45NzA1NjI3LDMgMTIsMyBDNy4wMjk0MzcyNSwzIDMsNy4wMjk0MzcyNSAzLDEyIEMzLDE2Ljk3MDU2MjcgNy4wMjk0MzcyNSwyMSAxMiwyMSBaIE0xNS4yOTI4OTMyLDkuMjkyODkzMjIgTDE2LjcwNzEwNjgsMTAuNzA3MTA2OCBMMTIsMTUuNDE0MjEzNiBMNy4yOTI4OTMyMiwxMC43MDcxMDY4IEw4LjcwNzEwNjc4LDkuMjkyODkzMjIgTDEyLDEyLjU4NTc4NjQgTDE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBaJ1xuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuc29uZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA2MiU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMuNSU7XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogOTJ2aDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsQm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPD5cbiAgICAgIHsvKiA8Q2Fyb3VzZWwgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeUFib3V0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhPbmVTaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm9UZXh0Jz5cbiAgICAgICAgICAgIDxoMz5BQk9VVCBHRUxLPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBHb29kIEVub3VnaCBMaXZlIEthcmFva2UgaXMgVG9yb250bydzIG1vc3QgcG9wdWxhciBsaXZlIGJhbmRcbiAgICAgICAgICAgICAga2FyYW9rZSBleHBlcmllbmNlLCBsZXR0aW5nIGFueW9uZSB3aXRoIHRoZSBkZXNpcmUgYW5kIGd1dHMgdG9cbiAgICAgICAgICAgICAgam9pbiB1cyBvbiBzdGFnZSwgdGFrZSB0aGUgbWljIGFuZCBzaW5nISBJZGVhbCBmb3IgY29ycG9yYXRlXG4gICAgICAgICAgICAgIGV2ZW50cywgYmlydGhkYXkgcGFydGllcyBhbmQgd2VkZGluZ3MsIEdvb2QgRW5vdWdoIGlzIGEgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGZlYXR1cmluZyBndWl0YXJzLCBiYXNzLCBrZXlib2FyZHMgYW5kIGRydW1zLCBhbmQgYSByZXBlcnRvaXJlIG9mXG4gICAgICAgICAgICAgIG92ZXIgNDAwIHNvbmdzIHNwYW5uaW5nIGdlbnJlcyBhbmQgZXJhcy4gR2V0IGluIHRvdWNoIGF0eycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSdtYWlsdG86c2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tP1N1YmplY3Q9SGVsbG8lMjAnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfdG9wJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBib29rIHlvdXIgZXZlbnQsIGFuZCBmb2xsb3cgdXMgb24gSW5zdGFncmFtIHRvIHNlZSB3ZWVrbHlcbiAgICAgICAgICAgICAgcHVibGljIHNob3dzIGFjcm9zcyBPbnRhcmlvLiBTaW5jZSAyMDEzLCB3ZSBoYXZlIHBsYXllZCB0aG91c2FuZHNcbiAgICAgICAgICAgICAgb2YgaG91cnMgb24gc3RhZ2UgYXQgcHJpdmF0ZSBhbmQgcHVibGljIGV2ZW50cyB3aXRoIG91ciB1bmlxdWUsXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlIHJvY2snbidyb2xsIGV4cGVyaWVuY2UuIEl04oCZcyBhIGJpdCB0ZXJyaWZ5aW5nLCBodWdlbHlcbiAgICAgICAgICAgICAgZXhoaWxhcmF0aW5nIGFuZCBjb21wbGV0ZWx5IGF3ZXNvbWUhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RCdXR0b24nPlxuICAgICAgICAgICAgPGEgaHJlZj0nL3Nob3dzJz5VcGNvbWluZyBTaG93czwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnknPlxuICAgICAgICAgICAgPFNwb3RpZnlQbGF5ZXJcbiAgICAgICAgICAgICAgdXJpPSdzcG90aWZ5OnBsYXlsaXN0OjRRbVg0NGR5elphNmtPYlltNWpYelMnXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdFN2Zyc+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzEwMHB4J1xuICAgICAgICAgIHdpZHRoPScxMDBweCdcbiAgICAgICAgICBmaWxsPScjZjFmMWYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgNjQgNjQnXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00yNiwyMWMtMS42NTQsMC0zLDEuMzQ2LTMsM2gyYzAtMC41NTEsMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFoMkMyOSwyMi4zNDYsMjcuNjU0LDIxLDI2LDIxeic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTM4LDIxYy0xLjY1NCwwLTMsMS4zNDYtMywzaDJjMC0wLjU1MSwwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMWgyQzQxLDIyLjM0NiwzOS42NTQsMjEsMzgsMjF6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNNTEuNDA1LDQyLjIyM2MtMC43NTQtMC40MzEtMS41NjctMC43NjQtMi40MDUtMS4wMDhWMThjMC05LjM3NC03LjYyNi0xNy0xNy0xN1MxNSw4LjYyNiwxNSwxOHYyMy4yODcgICBjLTAuMDQsMC4wMTMtMC4wODEsMC4wMi0wLjEyLDAuMDMzQzExLjM2Myw0Mi40OTEsOSw0NS43Nyw5LDQ5LjQ3N3YwLjI5YzAsMC45MjUsMC4xNDgsMS44MzksMC40NDEsMi43MTlMMTAsNTQuMTYyVjYzaDE4aDdoMTIgICB2LTcuOTMzYzAuMzksMC4zMDQsMC44MywwLjU0OSwxLjMwNiwwLjczNEw1Mi40Miw2M2gxMC4xOThsLTUuNjI2LTExLjI1MkM1Ni45NTEsNDcuODE4LDU0LjgyMyw0NC4xNzUsNTEuNDA1LDQyLjIyM3ogICAgTTU2LjIyLDU0LjY3NWwtNS4wMjMsMi4xNTNsLTAuNzcyLTEuMzUxbDUuMTAzLTIuMTg3TDU2LjIyLDU0LjY3NXogTTQ2LjkwMSw0MC44MDVMMzksNDAuMDg3VjM5aC0wLjEwNCAgIGMzLjE0NC0xLjk3OCw1LjM3OC01LjI2LDUuOTQ3LTkuMDg1YzAuODAzLTAuMTM4LDEuNTMzLTAuNDY4LDIuMTU3LTAuOTR2MTEuODQ1QzQ2Ljk2Nyw0MC44MTYsNDYuOTM0LDQwLjgwOCw0Ni45MDEsNDAuODA1eiAgICBNMzQuOTUyLDQzLjI3NmMtMC4xMDgtMC44OTUtMC40MTUtMS43MjgtMC44NzQtMi40NThjMS4wMTctMC4xNjQsMS45OTgtMC40MzQsMi45MjItMC44MjF2MC44NTkgICBDMzYuODg1LDQxLjIwNiwzNi4zNjYsNDIuNDYxLDM0Ljk1Miw0My4yNzZ6IE0yOSw1NmgtMXYtNi4wOWMwLjMyNiwwLjA1NSwwLjY1OSwwLjA5LDEsMC4wOXMwLjY3NC0wLjAzNSwxLTAuMDl2Ni4xODEgICBDMjkuNjc0LDU2LjAzNSwyOS4zNDEsNTYsMjksNTZ6IE0yOSw0OGMtMi4yMDYsMC00LTEuNzk0LTQtNGMwLTEuNzI5LDEuMTA4LTMuMTkxLDIuNjQ3LTMuNzQ4ICAgYzAuMDA4LDAuMDAzLDAuMDE2LDAuMDA3LDAuMDI0LDAuMDA5bDAuMDA3LTAuMDE5QzI4LjA5NCw0MC4wOTUsMjguNTM0LDQwLDI5LDQwYzIuMjA2LDAsNCwxLjc5NCw0LDRTMzEuMjA2LDQ4LDI5LDQ4eiBNMTksMjcuODE2ICAgYy0xLjE2MS0wLjQxNC0yLTEuNTE0LTItMi44MTZzMC44MzktMi40MDIsMi0yLjgxNlYyNy44MTZ6IE0xOS4xNDYsMjkuOTE0YzAuNTgsMy44ODYsMi45LDcuMzAyLDYuMjY5LDkuMjg3ICAgYy0wLjM3MywwLjI4LTAuNzE2LDAuNTk3LTEuMDE1LDAuOTU1TDE3LDQwLjg5NXYtMTEuOTJDMTcuNjIxLDI5LjQ0NSwxOC4zNDcsMjkuNzc1LDE5LjE0NiwyOS45MTR6IE0zMi4yODYsMzguOTg2ICAgQzMxLjM0MSwzOC4zNjQsMzAuMjEzLDM4LDI5LDM4Yy0wLjQzNCwwLTAuODU2LDAuMDQ5LTEuMjYzLDAuMTM2QzIzLjY4MywzNi40MzEsMjEsMzIuNDM5LDIxLDI4VjE4aDEuMzQzICAgYzMuNTksMCw2Ljk4My0xLjI4Miw5LjY1Ny0zLjYzYzIuNjc0LDIuMzQ4LDYuMDY3LDMuNjMsOS42NTcsMy42M0g0M3YxMEM0MywzMy45NjksMzguMjE4LDM4LjgzMiwzMi4yODYsMzguOTg2eiBNNDUsMjIuMTg0ICAgYzEuMTYxLDAuNDE0LDIsMS41MTQsMiwyLjgxNnMtMC44MzksMi40MDItMiwyLjgxNlYyMi4xODR6IE0zMiwzYzguMjcxLDAsMTUsNi43MjksMTUsMTV2My4wMjZjLTAuNTg0LTAuNDQyLTEuMjU3LTAuNzczLTItMC45MjQgICBWMTZoLTMuMzQzYy0zLjM4MSwwLTYuNTYtMS4zMTYtOC45NS0zLjcwN0wzMiwxMS41ODZsLTAuNzA3LDAuNzA3QzI4LjkwMiwxNC42ODQsMjUuNzI0LDE2LDIyLjM0MywxNkgxOXY0LjEwMSAgIGMtMC43NDMsMC4xNTItMS40MTYsMC40ODItMiwwLjkyNFYxOEMxNyw5LjcyOSwyMy43MjksMywzMiwzeiBNMTEsNDkuNDc3YzAtMi44NDUsMS44MTMtNS4zNjEsNC41MTMtNi4yNiAgIGMwLjQ2My0wLjE1NCwwLjk0My0wLjI1NywxLjQzLTAuMzA2bDYuMzEyLTAuNjMxQzIzLjA5MSw0Mi44MjUsMjMsNDMuNDAyLDIzLDQ0YzAsMi4yMTUsMS4yMSw0LjE0OSwzLDUuMTg4VjU2aC02di03aC0ydjRoLTJ2MmgyICAgdjFoLTZ2LTFoMnYtMmgtMi4yNzlsLTAuMzgyLTEuMTQ2QzExLjExNCw1MS4xNzksMTEsNTAuNDc3LDExLDQ5Ljc2N1Y0OS40Nzd6IE0yOCw2MUgxMnYtM2g2aDFoMTBjMS44NiwwLDMuNDI5LDEuMjc3LDMuODczLDNIMjh6ICAgIE00Nyw1MC45ODdjMC0wLjQ5MSwwLjExNi0wLjk4MywwLjMzNi0xLjQyMmwwLjU1OS0xLjExN2wtMS43ODktMC44OTVsLTAuNTU5LDEuMTE4QzQ1LjE4OSw0OS4zODYsNDUsNTAuMTg4LDQ1LDUwLjk4NyAgIGMwLDAuMDA0LDAuMDAxLDAuMDA5LDAuMDAxLDAuMDEzSDQ1djEwSDM0LjkxYy0wLjMwMi0xLjc4OS0xLjM5NS0zLjMwOS0yLjkxLTQuMTg4di03LjYyNGMxLjM1OS0wLjc4OSwyLjM3OC0yLjA5NCwyLjc5Mi0zLjY0OCAgIGMyLjI5OC0wLjgwMywzLjQwNC0yLjQ2NiwzLjg3Mi0zLjQ3Nmw4LjA1NiwwLjczMmMxLjI5MSwwLjExNywyLjU2OCwwLjUyLDMuNjkzLDEuMTYyYzIuNjc5LDEuNTMxLDQuMzk3LDQuMzI5LDQuNTcyLDcuMzg4ICAgbC02LjAxOSwyLjU4QzQ3Ljc4MSw1My40MzgsNDcsNTIuMjg0LDQ3LDUwLjk4N3ogTTUzLjU4LDYxbC0xLjM4NS0yLjQyNGw0LjkyLTIuMTA5TDU5LjM4Miw2MUg1My41OHonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00zMiwyOGMtMi4yMDYsMC00LDEuNzk0LTQsNHMxLjc5NCw0LDQsNHM0LTEuNzk0LDQtNFMzNC4yMDYsMjgsMzIsMjh6IE0zMiwzNGMtMS4xMDMsMC0yLTAuODk3LTItMnMwLjg5Ny0yLDItMiAgIHMyLDAuODk3LDIsMlMzMy4xMDMsMzQsMzIsMzR6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMTMsMUg1djExLjE4NEM0LjY4NiwxMi4wNzIsNC4zNTIsMTIsNCwxMmMtMS42NTQsMC0zLDEuMzQ2LTMsM3MxLjM0NiwzLDMsM3MzLTEuMzQ2LDMtM1YzaDZWMXogTTQsMTYgICBjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFTNC41NTIsMTYsNCwxNnonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J001MywxdjhoLTAuNWMtMS4zNzksMC0yLjUsMS4xMjItMi41LDIuNXMxLjEyMSwyLjUsMi41LDIuNXMyLjUtMS4xMjIsMi41LTIuNVY3aDZ2MmgtMC41Yy0xLjM3OSwwLTIuNSwxLjEyMi0yLjUsMi41ICAgczEuMTIxLDIuNSwyLjUsMi41czIuNS0xLjEyMiwyLjUtMi41VjFINTN6IE01MywxMS41YzAsMC4yNzYtMC4yMjUsMC41LTAuNSwwLjVTNTIsMTEuNzc2LDUyLDExLjVzMC4yMjUtMC41LDAuNS0wLjVINTNWMTEuNXogICAgTTYxLDExLjVjMCwwLjI3Ni0wLjIyNSwwLjUtMC41LDAuNVM2MCwxMS43NzYsNjAsMTEuNXMwLjIyNS0wLjUsMC41LTAuNUg2MVYxMS41eiBNNTUsNVYzaDZ2Mkg1NXonPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFjdENvbXAgLz5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB9XG5cblxuICAgICAgLmNvbnRhY3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAgICAubGlzdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2U1MzQ0MTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2U1MzQ0MSwgMCAwIDAuNWVtICNlNTM0NDEsXG4gICAgICAgICAgMCAwIDAuMWVtICNlNTM0NDEsIDAgMTBweCAzcHggI2YxZjFmMTtcbiAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyJSAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5QWJvdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhPbmVTaWRlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4VHdvU2lkZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNTM0NDE7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2U1MzQ0MSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"), __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotifyAbout',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexOneSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'introText',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: this
  }, __jsx("h3", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, "ABOUT GELK"), __jsx("p", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Good Enough Live Karaoke is Toronto's most popular live band karaoke experience, letting anyone with the desire and guts to join us on stage, take the mic and sing! Ideal for corporate events, birthday parties and weddings, Good Enough is a live band featuring guitars, bass, keyboards and drums, and a repertoire of over 400 songs spanning genres and eras. Get in touch at", ' ', __jsx("a", {
    href: "mailto:sing@goodenoughlivekaraoke.com?Subject=Hello%20",
    target: "_top",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }, "sing@goodenoughlivekaraoke.com"), ' ', "to book your event, and follow us on Instagram to see weekly public shows across Ontario. Since 2013, we have played thousands of hours on stage at private and public events with our unique, interactive rock'n'roll experience. It\u2019s a bit terrifying, hugely exhilarating and completely awesome!")), __jsx("div", {
    className: "jsx-2674058118" + " " + 'listButton',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196
    },
    __self: this
  }, __jsx("a", {
    href: "/shows",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197
    },
    __self: this
  }, "Upcoming Shows"))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'flexTwoSide',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2674058118" + " " + 'spotify',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, __jsx(react_spotify_player__WEBPACK_IMPORTED_MODULE_11___default.a, {
    uri: "spotify:playlist:4QmX44dyzZa6kObYm5jXzS",
    size: size,
    view: view,
    theme: theme,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  })))), __jsx("div", {
    className: "jsx-2674058118" + " " + 'contactSvg',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }, __jsx("svg", {
    height: "100px",
    width: "100px",
    fill: "#f1f1f1",
    xmlns: "http://www.w3.org/2000/svg",
    version: "1.1",
    x: "0px",
    y: "0px",
    viewBox: "0 0 64 64",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("g", {
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }, __jsx("path", {
    d: "M26,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C29,22.346,27.654,21,26,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), __jsx("path", {
    d: "M38,21c-1.654,0-3,1.346-3,3h2c0-0.551,0.448-1,1-1s1,0.449,1,1h2C41,22.346,39.654,21,38,21z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), __jsx("path", {
    d: "M51.405,42.223c-0.754-0.431-1.567-0.764-2.405-1.008V18c0-9.374-7.626-17-17-17S15,8.626,15,18v23.287   c-0.04,0.013-0.081,0.02-0.12,0.033C11.363,42.491,9,45.77,9,49.477v0.29c0,0.925,0.148,1.839,0.441,2.719L10,54.162V63h18h7h12   v-7.933c0.39,0.304,0.83,0.549,1.306,0.734L52.42,63h10.198l-5.626-11.252C56.951,47.818,54.823,44.175,51.405,42.223z    M56.22,54.675l-5.023,2.153l-0.772-1.351l5.103-2.187L56.22,54.675z M46.901,40.805L39,40.087V39h-0.104   c3.144-1.978,5.378-5.26,5.947-9.085c0.803-0.138,1.533-0.468,2.157-0.94v11.845C46.967,40.816,46.934,40.808,46.901,40.805z    M34.952,43.276c-0.108-0.895-0.415-1.728-0.874-2.458c1.017-0.164,1.998-0.434,2.922-0.821v0.859   C36.885,41.206,36.366,42.461,34.952,43.276z M29,56h-1v-6.09c0.326,0.055,0.659,0.09,1,0.09s0.674-0.035,1-0.09v6.181   C29.674,56.035,29.341,56,29,56z M29,48c-2.206,0-4-1.794-4-4c0-1.729,1.108-3.191,2.647-3.748   c0.008,0.003,0.016,0.007,0.024,0.009l0.007-0.019C28.094,40.095,28.534,40,29,40c2.206,0,4,1.794,4,4S31.206,48,29,48z M19,27.816   c-1.161-0.414-2-1.514-2-2.816s0.839-2.402,2-2.816V27.816z M19.146,29.914c0.58,3.886,2.9,7.302,6.269,9.287   c-0.373,0.28-0.716,0.597-1.015,0.955L17,40.895v-11.92C17.621,29.445,18.347,29.775,19.146,29.914z M32.286,38.986   C31.341,38.364,30.213,38,29,38c-0.434,0-0.856,0.049-1.263,0.136C23.683,36.431,21,32.439,21,28V18h1.343   c3.59,0,6.983-1.282,9.657-3.63c2.674,2.348,6.067,3.63,9.657,3.63H43v10C43,33.969,38.218,38.832,32.286,38.986z M45,22.184   c1.161,0.414,2,1.514,2,2.816s-0.839,2.402-2,2.816V22.184z M32,3c8.271,0,15,6.729,15,15v3.026c-0.584-0.442-1.257-0.773-2-0.924   V16h-3.343c-3.381,0-6.56-1.316-8.95-3.707L32,11.586l-0.707,0.707C28.902,14.684,25.724,16,22.343,16H19v4.101   c-0.743,0.152-1.416,0.482-2,0.924V18C17,9.729,23.729,3,32,3z M11,49.477c0-2.845,1.813-5.361,4.513-6.26   c0.463-0.154,0.943-0.257,1.43-0.306l6.312-0.631C23.091,42.825,23,43.402,23,44c0,2.215,1.21,4.149,3,5.188V56h-6v-7h-2v4h-2v2h2   v1h-6v-1h2v-2h-2.279l-0.382-1.146C11.114,51.179,11,50.477,11,49.767V49.477z M28,61H12v-3h6h1h10c1.86,0,3.429,1.277,3.873,3H28z    M47,50.987c0-0.491,0.116-0.983,0.336-1.422l0.559-1.117l-1.789-0.895l-0.559,1.118C45.189,49.386,45,50.188,45,50.987   c0,0.004,0.001,0.009,0.001,0.013H45v10H34.91c-0.302-1.789-1.395-3.309-2.91-4.188v-7.624c1.359-0.789,2.378-2.094,2.792-3.648   c2.298-0.803,3.404-2.466,3.872-3.476l8.056,0.732c1.291,0.117,2.568,0.52,3.693,1.162c2.679,1.531,4.397,4.329,4.572,7.388   l-6.019,2.58C47.781,53.438,47,52.284,47,50.987z M53.58,61l-1.385-2.424l4.92-2.109L59.382,61H53.58z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }), __jsx("path", {
    d: "M32,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S34.206,28,32,28z M32,34c-1.103,0-2-0.897-2-2s0.897-2,2-2   s2,0.897,2,2S33.103,34,32,34z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx("path", {
    d: "M13,1H5v11.184C4.686,12.072,4.352,12,4,12c-1.654,0-3,1.346-3,3s1.346,3,3,3s3-1.346,3-3V3h6V1z M4,16   c-0.552,0-1-0.449-1-1s0.448-1,1-1s1,0.449,1,1S4.552,16,4,16z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), __jsx("path", {
    d: "M53,1v8h-0.5c-1.379,0-2.5,1.122-2.5,2.5s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V7h6v2h-0.5c-1.379,0-2.5,1.122-2.5,2.5   s1.121,2.5,2.5,2.5s2.5-1.122,2.5-2.5V1H53z M53,11.5c0,0.276-0.225,0.5-0.5,0.5S52,11.776,52,11.5s0.225-0.5,0.5-0.5H53V11.5z    M61,11.5c0,0.276-0.225,0.5-0.5,0.5S60,11.776,60,11.5s0.225-0.5,0.5-0.5H61V11.5z M55,5V3h6v2H55z",
    className: "jsx-2674058118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  })))), __jsx(_components_ContactComp__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4073361451",
    __self: this
  }, "@import url('https://fonts.googleapis.com/css?family=Concert+One|Montserrat&display=swap');svg.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;margin-top:70px;}.contactButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:0;margin-top:50px;}.contactButton.jsx-2674058118 a.jsx-2674058118{background:none;padding:10px 20px;border-radius:50px;border:3px solid #f1f1f1;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#f1f1f1;-webkit-text-decoration:none;text-decoration:none;font-size:20px;font-family:'Montserrat',sans-serif;cursor:pointer;}.contactButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 -40px 100px,0 0 2px,0 0 1em #761f6b,0 0 0.5em #761f6b, 0 0 0.1em #761f6b,0 10px 3px #000;}.listButton.jsx-2674058118{width:100%;text-align:center;margin-bottom:4%;}.listButton.jsx-2674058118 a.jsx-2674058118{background:none;font-family:'Montserrat',sans-serif;padding:10px 20px;border-radius:50px;border:3px solid #e53441;text-align:center;-webkit-transition:all 0.4s;transition:all 0.4s;color:#e53441;-webkit-text-decoration:none;text-decoration:none;font-size:20px;cursor:pointer;}.listButton.jsx-2674058118 a.jsx-2674058118:hover{opacity:1;text-shadow:0 40px 100px,0 0 2px,0 0 1em #e53441,0 0 0.5em #e53441, 0 0 0.1em #e53441,0 10px 3px #f1f1f1;}h3.jsx-2674058118{text-align:center;font-family:'Concert One',sans-serif;color:#e53441;font-size:40px;-webkit-letter-spacing:5px;-moz-letter-spacing:5px;-ms-letter-spacing:5px;letter-spacing:5px;}.spotify.jsx-2674058118{margin:0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:2% 0;padding:20px 0;}.spotifyAbout.jsx-2674058118{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;}.flexOneSide.jsx-2674058118{width:60%;padding:2%;background:#f1f1f1;}.flexTwoSide.jsx-2674058118{background:#e53441;width:40%;padding:2%;}.introText.jsx-2674058118{max-width:1400px;font-family:'Montserrat',sans-serif;font-size:28px;color:rgb(25,3,22);font-weight:bold;padding:0 25px;}.introText.jsx-2674058118 a.jsx-2674058118{color:rgb(25,3,22) !important;}.introText.jsx-2674058118 a.jsx-2674058118:hover{color:#e53441 !important;}a.jsx-2674058118{color:rgb(25,3,22) text-decoration:underline;cursor:pointer;-webkit-transition:all 0.4s;transition:all 0.4s;}a.jsx-2674058118:hover{opacity:0.65;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:38px;margin-bottom:50px;font-size:20px;text-align:left;}h2.jsx-2674058118{text-align:center;font-size:70px;margin-top:-100px;font-family:'Concert One',cursive;color:#f1f1f1;}@media screen and (max-width:1075px){.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;font-family:'Concert One',cursive;}.introText.jsx-2674058118{font-size:20px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:36px;}.gelkLogo.jsx-2674058118{margin-top:33%;}}@media screen and (max-width:690px){.gelkLogo.jsx-2674058118{margin-top:25vh;}.chevron.jsx-2674058118{margin-top:50px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:30px;margin-top:-70px;margin-bottom:30px;}.introText.jsx-2674058118{font-size:16px;}.introText.jsx-2674058118 p.jsx-2674058118{line-height:32px;}}@media screen and (max-width:557px){svg.jsx-2674058118{width:30px;}.introText.jsx-2674058118 h2.jsx-2674058118{font-size:22px;}.gelkLogo.jsx-2674058118{width:90%;}.gelkLogo.jsx-2674058118{margin-top:33vh;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeU9nQixBQUVpRyxBQUd2RSxBQVFSLEFBT0ssQUFjTixBQU1DLEFBTUssQUFjTixBQU1TLEFBUUgsQUFRRCxBQUtILEFBTVMsQUFNRixBQVNhLEFBSUwsQUFNQyxBQU1iLEFBSUksQUFPQyxBQVNELEFBS0EsQUFJRSxBQUlGLEFBTUMsQUFJQSxBQUdELEFBTUEsQUFJRSxBQU1OLEFBSUksQUFJTCxBQUdNLFVBaktrQixBQTBCRyxBQTBCNUIsQUEyR1gsQ0FyTGdCLEFBMkJBLEFBa0poQixFQTlERixDQWxEZSxDQXNFd0IsQUFLckMsQUFRQSxBQWFtQixBQU1uQixBQWNBLENBMUtnQixBQTBCbUIsQUFxSG5DLEFBSUEsQUE4QkEsQ0FsR3FDLEFBNkJsQixBQXlCbkIsQUEyQkEsQ0FsSHNDLEFBcUV2QixDQTFDTCxFQUxTLElBd0JyQixJQWxHZ0IsQUEyQkMsQUFxREosQ0FjYixFQStEdUIsQ0FuQ0gsQ0FuSEQsRUE0R0YsSUF4Q2pCLEFBTUEsS0FoRmdCLEFBdUdDLENBNUVuQixHQXVHSSxFQWZnQixBQU9tQixBQW1DbkMsQ0E3SGdCLENBekJPLEFBOEVSLEVBakNELEtBb0RNLENBdkd4QixNQW1IRSxDQTlCcUIsQ0FqQ0osQ0FwQkUsSUEzQ1UsQUE2RWhCLElBM0RJLE1BOENJLENBY3JCLEFBdURnQixFQXBDRyxDQTNCTSxDQTFCQSxPQXpCTCxHQW1IcEIsS0FwQ2lCLElBaUJqQixLQXBGRixDQWNtQixDQVluQixJQTBDRSxhQXJEb0IsWUExQk4sY0FDTyxlQXBCSixJQWdFakIsR0FsQmMsSUE3Q1EsR0FxRVIsT0F2Qk8sS0F3QkosQ0FyRWIsUUFtQlcsTUFtRGYsU0FsRHFDLHFCQTBCdEIsZUF4QmxCLEFBMEJBLGVBMUJDLEFBMEJBIiwiZmlsZSI6Ii9Vc2Vycy9icmFlZGVuY3JhaWcvRGVza3RvcC9HRUxLLVNJVEUvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTXlMYXlvdXQnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtdW5mZXRjaCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XG5pbXBvcnQgVGVzdEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL1Rlc3RIZWFkZXInO1xuaW1wb3J0IE5lb25Mb2dvIGZyb20gJy4uL2NvbXBvbmVudHMvTmVvbkxvZ28nO1xuaW1wb3J0ICogYXMgU2Nyb2xsIGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJvdXNlbCc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLmNzcyc7XG5pbXBvcnQgJ3NsaWNrLWNhcm91c2VsL3NsaWNrL3NsaWNrLXRoZW1lLmNzcyc7XG5pbXBvcnQgU3BvdGlmeVBsYXllciBmcm9tICdyZWFjdC1zcG90aWZ5LXBsYXllcic7XG5pbXBvcnQgQ2xpZW50Q29tcCBmcm9tICcuLi9jb21wb25lbnRzL2NsaWVudENvbXAnO1xuaW1wb3J0IE1lZGlhQ29tcCBmcm9tICcuLi9jb21wb25lbnRzL21lZGlhQ29tcCc7XG5pbXBvcnQgR2FsbGVyeSBmcm9tICcuLi9jb21wb25lbnRzL0dhbGxlcnknO1xuaW1wb3J0IENvbnRhY3RDb21wIGZyb20gJy4uL2NvbXBvbmVudHMvQ29udGFjdENvbXAnO1xuaW1wb3J0IHsgdXNlU3ByaW5nLCBhbmltYXRlZCB9IGZyb20gJ3JlYWN0LXNwcmluZyc7XG5cbmltcG9ydCB7XG4gIExpbmssXG4gIEVsZW1lbnQsXG4gIEV2ZW50cyxcbiAgYW5pbWF0ZVNjcm9sbCBhcyBzY3JvbGwsXG4gIHNjcm9sbFNweSxcbiAgc2Nyb2xsZXIsXG59IGZyb20gJ3JlYWN0LXNjcm9sbCc7XG5cbmNvbnN0IHNpemUgPSB7XG4gIHdpZHRoOiAnOTAlJyxcbiAgaGVpZ2h0OiA2MDAsXG4gIG1heEhlaWdodDogJzYwMHB4Jyxcbn07XG5jb25zdCB2aWV3ID0gJ2xpc3QnOyAvLyBvciAnY292ZXJhcnQnXG5jb25zdCB0aGVtZSA9ICdibGFjayc7IC8vIG9yICd3aGl0ZSdcblxuY29uc3QgSW5kZXggPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQ+XG4gICAgPGRpdj5cbiAgICAgIDxkaXYgaWQ9J3RleHQnIGNsYXNzTmFtZT0nc2Nyb2xsQm94Jz48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdnZWxrTG9nbyc+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBjbGFzc05hbWU9J2dlbGtJbWFnZUxvZ28nXG4gICAgICAgICAgc3JjPScvdGVzdE5lb24uZ2lmJ1xuICAgICAgICAgIGFsdD0nZ29vZCBlbm91Z2ggbGl2ZSBrYXJhb2tlIG5lb24gbG9nbydcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3NvbmdCdXR0b24nPlxuICAgICAgICA8YSBocmVmPScvbGlzdCc+VmlldyBTb25nIExpc3Q8L2E+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICB7LyogPGRpdiBjbGFzc05hbWU9J2NoZXZyb24nPlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPSdzY3JvbGxDaGV2cm9uJ1xuICAgICAgICB0bz0ndGV4dCdcbiAgICAgICAgc3B5PXt0cnVlfVxuICAgICAgICBzbW9vdGg9e3RydWV9XG4gICAgICAgIGR1cmF0aW9uPXs1MDB9XG4gICAgICA+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzQwcHgnXG4gICAgICAgICAgd2lkdGg9JzQwcHgnXG4gICAgICAgICAgZmlsbD0nI0YxRjFGMSdcbiAgICAgICAgICB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnXG4gICAgICAgICAgdmlld0JveD0nMCAwIDI0IDI0J1xuICAgICAgICAgIHg9JzBweCdcbiAgICAgICAgICB5PScwcHgnXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgZmlsbC1ydWxlPSdldmVub2RkJ1xuICAgICAgICAgICAgZD0nTTEyLDIzIEM1LjkyNDg2Nzc1LDIzIDEsMTguMDc1MTMyMiAxLDEyIEMxLDUuOTI0ODY3NzUgNS45MjQ4Njc3NSwxIDEyLDEgQzE4LjA3NTEzMjIsMSAyMyw1LjkyNDg2Nzc1IDIzLDEyIEMyMywxOC4wNzUxMzIyIDE4LjA3NTEzMjIsMjMgMTIsMjMgWiBNMTIsMjEgQzE2Ljk3MDU2MjcsMjEgMjEsMTYuOTcwNTYyNyAyMSwxMiBDMjEsNy4wMjk0MzcyNSAxNi45NzA1NjI3LDMgMTIsMyBDNy4wMjk0MzcyNSwzIDMsNy4wMjk0MzcyNSAzLDEyIEMzLDE2Ljk3MDU2MjcgNy4wMjk0MzcyNSwyMSAxMiwyMSBaIE0xNS4yOTI4OTMyLDkuMjkyODkzMjIgTDE2LjcwNzEwNjgsMTAuNzA3MTA2OCBMMTIsMTUuNDE0MjEzNiBMNy4yOTI4OTMyMiwxMC43MDcxMDY4IEw4LjcwNzEwNjc4LDkuMjkyODkzMjIgTDEyLDEyLjU4NTc4NjQgTDE1LjI5Mjg5MzIsOS4yOTI4OTMyMiBaJ1xuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PiAqL31cbiAgICA8c3R5bGUganN4PntgXG5cbiAgICAuc29uZ0J1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIuNSU7XG4gICAgfVxuXG4gICAgLnNvbmdCdXR0b24gYSB7XG4gICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJvcmRlcjogM3B4IHNvbGlkICNmMWYxZjE7XG4gICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuc29uZ0J1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAuZ2Vsa0ltYWdlTG9nbyB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgbWF4LWhlaWdodDogODAwcHg7XG4gICAgfVxuXG4gICAgLmdlbGtMb2dvIHtcbiAgICAgIHdpZHRoOiA2MiU7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIG1hcmdpbi10b3A6IDMuNSU7XG4gICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNSU7XG4gICAgfVxuICAgICAgc3ZnOmhvdmVyIHtcbiAgICAgICAgZmlsbDogcmdiYSgyNDEsMjQxLDI0MSwgMC42KTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBzdmcge1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIH1cbiAgICAgIGgxLFxuICAgICAgYSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgbGkge1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBtYXJnaW46IDVweCAwO1xuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgfVxuXG4gICAgICAuY2hldnJvbiB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogOTQlO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogOTJ2aDtcbiAgICAgICAgei1pbmRleDogMTAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIC0xKVxuICAgICAgfVxuXG4gICAgICAud3JhcHBlciB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDk2MHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIlO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsQm94e1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgYm90dG9tOiAyMDBweDtcbiAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPD5cbiAgICAgIHsvKiA8Q2Fyb3VzZWwgLz4gKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nc3BvdGlmeUFib3V0Jz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXhPbmVTaWRlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0naW50cm9UZXh0Jz5cbiAgICAgICAgICAgIDxoMz5BQk9VVCBHRUxLPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBHb29kIEVub3VnaCBMaXZlIEthcmFva2UgaXMgVG9yb250bydzIG1vc3QgcG9wdWxhciBsaXZlIGJhbmRcbiAgICAgICAgICAgICAga2FyYW9rZSBleHBlcmllbmNlLCBsZXR0aW5nIGFueW9uZSB3aXRoIHRoZSBkZXNpcmUgYW5kIGd1dHMgdG9cbiAgICAgICAgICAgICAgam9pbiB1cyBvbiBzdGFnZSwgdGFrZSB0aGUgbWljIGFuZCBzaW5nISBJZGVhbCBmb3IgY29ycG9yYXRlXG4gICAgICAgICAgICAgIGV2ZW50cywgYmlydGhkYXkgcGFydGllcyBhbmQgd2VkZGluZ3MsIEdvb2QgRW5vdWdoIGlzIGEgbGl2ZSBiYW5kXG4gICAgICAgICAgICAgIGZlYXR1cmluZyBndWl0YXJzLCBiYXNzLCBrZXlib2FyZHMgYW5kIGRydW1zLCBhbmQgYSByZXBlcnRvaXJlIG9mXG4gICAgICAgICAgICAgIG92ZXIgNDAwIHNvbmdzIHNwYW5uaW5nIGdlbnJlcyBhbmQgZXJhcy4gR2V0IGluIHRvdWNoIGF0eycgJ31cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPSdtYWlsdG86c2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tP1N1YmplY3Q9SGVsbG8lMjAnXG4gICAgICAgICAgICAgICAgdGFyZ2V0PSdfdG9wJ1xuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgc2luZ0Bnb29kZW5vdWdobGl2ZWthcmFva2UuY29tXG4gICAgICAgICAgICAgIDwvYT57JyAnfVxuICAgICAgICAgICAgICB0byBib29rIHlvdXIgZXZlbnQsIGFuZCBmb2xsb3cgdXMgb24gSW5zdGFncmFtIHRvIHNlZSB3ZWVrbHlcbiAgICAgICAgICAgICAgcHVibGljIHNob3dzIGFjcm9zcyBPbnRhcmlvLiBTaW5jZSAyMDEzLCB3ZSBoYXZlIHBsYXllZCB0aG91c2FuZHNcbiAgICAgICAgICAgICAgb2YgaG91cnMgb24gc3RhZ2UgYXQgcHJpdmF0ZSBhbmQgcHVibGljIGV2ZW50cyB3aXRoIG91ciB1bmlxdWUsXG4gICAgICAgICAgICAgIGludGVyYWN0aXZlIHJvY2snbidyb2xsIGV4cGVyaWVuY2UuIEl04oCZcyBhIGJpdCB0ZXJyaWZ5aW5nLCBodWdlbHlcbiAgICAgICAgICAgICAgZXhoaWxhcmF0aW5nIGFuZCBjb21wbGV0ZWx5IGF3ZXNvbWUhXG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2xpc3RCdXR0b24nPlxuICAgICAgICAgICAgPGEgaHJlZj0nL3Nob3dzJz5VcGNvbWluZyBTaG93czwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4VHdvU2lkZSc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Nwb3RpZnknPlxuICAgICAgICAgICAgPFNwb3RpZnlQbGF5ZXJcbiAgICAgICAgICAgICAgdXJpPSdzcG90aWZ5OnBsYXlsaXN0OjRRbVg0NGR5elphNmtPYlltNWpYelMnXG4gICAgICAgICAgICAgIHNpemU9e3NpemV9XG4gICAgICAgICAgICAgIHZpZXc9e3ZpZXd9XG4gICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFjdFN2Zyc+XG4gICAgICAgIDxzdmdcbiAgICAgICAgICBoZWlnaHQ9JzEwMHB4J1xuICAgICAgICAgIHdpZHRoPScxMDBweCdcbiAgICAgICAgICBmaWxsPScjZjFmMWYxJ1xuICAgICAgICAgIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgICAgICAgICB2ZXJzaW9uPScxLjEnXG4gICAgICAgICAgeD0nMHB4J1xuICAgICAgICAgIHk9JzBweCdcbiAgICAgICAgICB2aWV3Qm94PScwIDAgNjQgNjQnXG4gICAgICAgID5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00yNiwyMWMtMS42NTQsMC0zLDEuMzQ2LTMsM2gyYzAtMC41NTEsMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFoMkMyOSwyMi4zNDYsMjcuNjU0LDIxLDI2LDIxeic+PC9wYXRoPlxuICAgICAgICAgICAgPHBhdGggZD0nTTM4LDIxYy0xLjY1NCwwLTMsMS4zNDYtMywzaDJjMC0wLjU1MSwwLjQ0OC0xLDEtMXMxLDAuNDQ5LDEsMWgyQzQxLDIyLjM0NiwzOS42NTQsMjEsMzgsMjF6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNNTEuNDA1LDQyLjIyM2MtMC43NTQtMC40MzEtMS41NjctMC43NjQtMi40MDUtMS4wMDhWMThjMC05LjM3NC03LjYyNi0xNy0xNy0xN1MxNSw4LjYyNiwxNSwxOHYyMy4yODcgICBjLTAuMDQsMC4wMTMtMC4wODEsMC4wMi0wLjEyLDAuMDMzQzExLjM2Myw0Mi40OTEsOSw0NS43Nyw5LDQ5LjQ3N3YwLjI5YzAsMC45MjUsMC4xNDgsMS44MzksMC40NDEsMi43MTlMMTAsNTQuMTYyVjYzaDE4aDdoMTIgICB2LTcuOTMzYzAuMzksMC4zMDQsMC44MywwLjU0OSwxLjMwNiwwLjczNEw1Mi40Miw2M2gxMC4xOThsLTUuNjI2LTExLjI1MkM1Ni45NTEsNDcuODE4LDU0LjgyMyw0NC4xNzUsNTEuNDA1LDQyLjIyM3ogICAgTTU2LjIyLDU0LjY3NWwtNS4wMjMsMi4xNTNsLTAuNzcyLTEuMzUxbDUuMTAzLTIuMTg3TDU2LjIyLDU0LjY3NXogTTQ2LjkwMSw0MC44MDVMMzksNDAuMDg3VjM5aC0wLjEwNCAgIGMzLjE0NC0xLjk3OCw1LjM3OC01LjI2LDUuOTQ3LTkuMDg1YzAuODAzLTAuMTM4LDEuNTMzLTAuNDY4LDIuMTU3LTAuOTR2MTEuODQ1QzQ2Ljk2Nyw0MC44MTYsNDYuOTM0LDQwLjgwOCw0Ni45MDEsNDAuODA1eiAgICBNMzQuOTUyLDQzLjI3NmMtMC4xMDgtMC44OTUtMC40MTUtMS43MjgtMC44NzQtMi40NThjMS4wMTctMC4xNjQsMS45OTgtMC40MzQsMi45MjItMC44MjF2MC44NTkgICBDMzYuODg1LDQxLjIwNiwzNi4zNjYsNDIuNDYxLDM0Ljk1Miw0My4yNzZ6IE0yOSw1NmgtMXYtNi4wOWMwLjMyNiwwLjA1NSwwLjY1OSwwLjA5LDEsMC4wOXMwLjY3NC0wLjAzNSwxLTAuMDl2Ni4xODEgICBDMjkuNjc0LDU2LjAzNSwyOS4zNDEsNTYsMjksNTZ6IE0yOSw0OGMtMi4yMDYsMC00LTEuNzk0LTQtNGMwLTEuNzI5LDEuMTA4LTMuMTkxLDIuNjQ3LTMuNzQ4ICAgYzAuMDA4LDAuMDAzLDAuMDE2LDAuMDA3LDAuMDI0LDAuMDA5bDAuMDA3LTAuMDE5QzI4LjA5NCw0MC4wOTUsMjguNTM0LDQwLDI5LDQwYzIuMjA2LDAsNCwxLjc5NCw0LDRTMzEuMjA2LDQ4LDI5LDQ4eiBNMTksMjcuODE2ICAgYy0xLjE2MS0wLjQxNC0yLTEuNTE0LTItMi44MTZzMC44MzktMi40MDIsMi0yLjgxNlYyNy44MTZ6IE0xOS4xNDYsMjkuOTE0YzAuNTgsMy44ODYsMi45LDcuMzAyLDYuMjY5LDkuMjg3ICAgYy0wLjM3MywwLjI4LTAuNzE2LDAuNTk3LTEuMDE1LDAuOTU1TDE3LDQwLjg5NXYtMTEuOTJDMTcuNjIxLDI5LjQ0NSwxOC4zNDcsMjkuNzc1LDE5LjE0NiwyOS45MTR6IE0zMi4yODYsMzguOTg2ICAgQzMxLjM0MSwzOC4zNjQsMzAuMjEzLDM4LDI5LDM4Yy0wLjQzNCwwLTAuODU2LDAuMDQ5LTEuMjYzLDAuMTM2QzIzLjY4MywzNi40MzEsMjEsMzIuNDM5LDIxLDI4VjE4aDEuMzQzICAgYzMuNTksMCw2Ljk4My0xLjI4Miw5LjY1Ny0zLjYzYzIuNjc0LDIuMzQ4LDYuMDY3LDMuNjMsOS42NTcsMy42M0g0M3YxMEM0MywzMy45NjksMzguMjE4LDM4LjgzMiwzMi4yODYsMzguOTg2eiBNNDUsMjIuMTg0ICAgYzEuMTYxLDAuNDE0LDIsMS41MTQsMiwyLjgxNnMtMC44MzksMi40MDItMiwyLjgxNlYyMi4xODR6IE0zMiwzYzguMjcxLDAsMTUsNi43MjksMTUsMTV2My4wMjZjLTAuNTg0LTAuNDQyLTEuMjU3LTAuNzczLTItMC45MjQgICBWMTZoLTMuMzQzYy0zLjM4MSwwLTYuNTYtMS4zMTYtOC45NS0zLjcwN0wzMiwxMS41ODZsLTAuNzA3LDAuNzA3QzI4LjkwMiwxNC42ODQsMjUuNzI0LDE2LDIyLjM0MywxNkgxOXY0LjEwMSAgIGMtMC43NDMsMC4xNTItMS40MTYsMC40ODItMiwwLjkyNFYxOEMxNyw5LjcyOSwyMy43MjksMywzMiwzeiBNMTEsNDkuNDc3YzAtMi44NDUsMS44MTMtNS4zNjEsNC41MTMtNi4yNiAgIGMwLjQ2My0wLjE1NCwwLjk0My0wLjI1NywxLjQzLTAuMzA2bDYuMzEyLTAuNjMxQzIzLjA5MSw0Mi44MjUsMjMsNDMuNDAyLDIzLDQ0YzAsMi4yMTUsMS4yMSw0LjE0OSwzLDUuMTg4VjU2aC02di03aC0ydjRoLTJ2MmgyICAgdjFoLTZ2LTFoMnYtMmgtMi4yNzlsLTAuMzgyLTEuMTQ2QzExLjExNCw1MS4xNzksMTEsNTAuNDc3LDExLDQ5Ljc2N1Y0OS40Nzd6IE0yOCw2MUgxMnYtM2g2aDFoMTBjMS44NiwwLDMuNDI5LDEuMjc3LDMuODczLDNIMjh6ICAgIE00Nyw1MC45ODdjMC0wLjQ5MSwwLjExNi0wLjk4MywwLjMzNi0xLjQyMmwwLjU1OS0xLjExN2wtMS43ODktMC44OTVsLTAuNTU5LDEuMTE4QzQ1LjE4OSw0OS4zODYsNDUsNTAuMTg4LDQ1LDUwLjk4NyAgIGMwLDAuMDA0LDAuMDAxLDAuMDA5LDAuMDAxLDAuMDEzSDQ1djEwSDM0LjkxYy0wLjMwMi0xLjc4OS0xLjM5NS0zLjMwOS0yLjkxLTQuMTg4di03LjYyNGMxLjM1OS0wLjc4OSwyLjM3OC0yLjA5NCwyLjc5Mi0zLjY0OCAgIGMyLjI5OC0wLjgwMywzLjQwNC0yLjQ2NiwzLjg3Mi0zLjQ3Nmw4LjA1NiwwLjczMmMxLjI5MSwwLjExNywyLjU2OCwwLjUyLDMuNjkzLDEuMTYyYzIuNjc5LDEuNTMxLDQuMzk3LDQuMzI5LDQuNTcyLDcuMzg4ICAgbC02LjAxOSwyLjU4QzQ3Ljc4MSw1My40MzgsNDcsNTIuMjg0LDQ3LDUwLjk4N3ogTTUzLjU4LDYxbC0xLjM4NS0yLjQyNGw0LjkyLTIuMTA5TDU5LjM4Miw2MUg1My41OHonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J00zMiwyOGMtMi4yMDYsMC00LDEuNzk0LTQsNHMxLjc5NCw0LDQsNHM0LTEuNzk0LDQtNFMzNC4yMDYsMjgsMzIsMjh6IE0zMiwzNGMtMS4xMDMsMC0yLTAuODk3LTItMnMwLjg5Ny0yLDItMiAgIHMyLDAuODk3LDIsMlMzMy4xMDMsMzQsMzIsMzR6Jz48L3BhdGg+XG4gICAgICAgICAgICA8cGF0aCBkPSdNMTMsMUg1djExLjE4NEM0LjY4NiwxMi4wNzIsNC4zNTIsMTIsNCwxMmMtMS42NTQsMC0zLDEuMzQ2LTMsM3MxLjM0NiwzLDMsM3MzLTEuMzQ2LDMtM1YzaDZWMXogTTQsMTYgICBjLTAuNTUyLDAtMS0wLjQ0OS0xLTFzMC40NDgtMSwxLTFzMSwwLjQ0OSwxLDFTNC41NTIsMTYsNCwxNnonPjwvcGF0aD5cbiAgICAgICAgICAgIDxwYXRoIGQ9J001MywxdjhoLTAuNWMtMS4zNzksMC0yLjUsMS4xMjItMi41LDIuNXMxLjEyMSwyLjUsMi41LDIuNXMyLjUtMS4xMjIsMi41LTIuNVY3aDZ2MmgtMC41Yy0xLjM3OSwwLTIuNSwxLjEyMi0yLjUsMi41ICAgczEuMTIxLDIuNSwyLjUsMi41czIuNS0xLjEyMiwyLjUtMi41VjFINTN6IE01MywxMS41YzAsMC4yNzYtMC4yMjUsMC41LTAuNSwwLjVTNTIsMTEuNzc2LDUyLDExLjVzMC4yMjUtMC41LDAuNS0wLjVINTNWMTEuNXogICAgTTYxLDExLjVjMCwwLjI3Ni0wLjIyNSwwLjUtMC41LDAuNVM2MCwxMS43NzYsNjAsMTEuNXMwLjIyNS0wLjUsMC41LTAuNUg2MVYxMS41eiBNNTUsNVYzaDZ2Mkg1NXonPjwvcGF0aD5cbiAgICAgICAgICA8L2c+XG4gICAgICAgIDwvc3ZnPlxuICAgICAgPC9kaXY+XG4gICAgICA8Q29udGFjdENvbXAgLz5cbiAgICA8Lz5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICBAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUNvbmNlcnQrT25lfE1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XG5cbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNzBweDtcbiAgICAgICAgICB9XG5cblxuICAgICAgLmNvbnRhY3RCdXR0b24ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgbWFyZ2luLXRvcDogNTBweDtcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhIHtcbiAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2YxZjFmMTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2YxZjFmMTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXJcbiAgICB9XG5cbiAgICAuY29udGFjdEJ1dHRvbiBhOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgdGV4dC1zaGFkb3c6IDAgLTQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gIzc2MWY2YiwgMCAwIDAuNWVtICM3NjFmNmIsXG4gICAgICAgICAgMCAwIDAuMWVtICM3NjFmNmIsIDAgMTBweCAzcHggIzAwMDtcbiAgICB9XG5cbiAgICAgICAubGlzdEJ1dHRvbiB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQlO1xuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGEge1xuICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgYm9yZGVyOiAzcHggc29saWQgI2U1MzQ0MTtcbiAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIC5saXN0QnV0dG9uIGE6aG92ZXIge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRleHQtc2hhZG93OiAwIDQwcHggMTAwcHgsIDAgMCAycHgsIDAgMCAxZW0gI2U1MzQ0MSwgMCAwIDAuNWVtICNlNTM0NDEsXG4gICAgICAgICAgMCAwIDAuMWVtICNlNTM0NDEsIDAgMTBweCAzcHggI2YxZjFmMTtcbiAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29uY2VydCBPbmUnLCBzYW5zLXNlcmlmO1xuICAgICAgICBjb2xvcjogI2U1MzQ0MTtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICAgICAgfVxuXG4gICAgICAuc3BvdGlmeSB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAyJSAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC5zcG90aWZ5QWJvdXQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmZsZXhPbmVTaWRlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgcGFkZGluZzogMiU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIC5mbGV4VHdvU2lkZSB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlNTM0NDE7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIHBhZGRpbmc6IDIlO1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBhIHtcbiAgICAgICAgY29sb3I6IHJnYigyNSwzLDIyKSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAuaW50cm9UZXh0IGE6aG92ZXIge1xuICAgICAgICBjb2xvcjogI2U1MzQ0MSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG5cbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogcmdiKDI1LDMsMjIpXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgfVxuXG4gICAgICBhOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMC42NTtcbiAgICAgIH1cblxuICAgICAgLmludHJvVGV4dCBwIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cblxuICAgICAgaDIge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogNzBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvbmNlcnQgT25lJywgY3Vyc2l2ZTtcbiAgICAgICAgY29sb3I6ICNmMWYxZjE7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwNzVweCkge1xuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb25jZXJ0IE9uZScsIGN1cnNpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMyU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjkwcHgpIHtcbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyNXZoO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNoZXZyb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmludHJvVGV4dCBoMiB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IC03MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IHAge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1N3B4KSB7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW50cm9UZXh0IGgyIHtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZ2Vsa0xvZ28ge1xuICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIH1cbiAgICAgICAgLmdlbGtMb2dvIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzM3ZoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/braedencraig/Desktop/GELK-SITE/pages/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.04a1aa53edb42d04c77b.hot-update.js.map
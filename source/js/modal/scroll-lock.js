(function webpackUniversalModuleDefinition(root, factory) {
  if(typeof exports === 'object' && typeof module === 'object') {
    module.exports = factory();
  } else if(typeof define === 'function' && define.amd) {
    define([], factory);
  } else if(typeof exports === 'object') {
    exports['scrollLock'] = factory();
  } else {
    root['scrollLock'] = factory();
  }
})(this, () =>
/******/ (function(modules) { // webpackBootstrap
    /******/ 	// The module cache
    /******/ 	const installedModules = {};
    /******/
    /******/ 	// The require function
    /******/ 	function __webpack_require__(moduleId) {
      /******/
      /******/ 		// Check if module is in cache
      /******/ 		if(installedModules[moduleId]) {
        /******/ 			return installedModules[moduleId].exports;
        /******/ 		}
      /******/ 		// Create a new module (and put it into the cache)
      /******/ 		const module = installedModules[moduleId] = {
        /******/ 			i: moduleId,
        /******/ 			l: false,
        /******/ 			exports: {}
        /******/ 		};
      /******/
      /******/ 		// Execute the module function
      /******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
      /******/
      /******/ 		// Flag the module as loaded
      /******/ 		module.l = true;
      /******/
      /******/ 		// Return the exports of the module
      /******/ 		return module.exports;
      /******/ 	}
    /******/
    /******/
    /******/ 	// expose the modules object (__webpack_modules__)
    /******/ 	__webpack_require__.m = modules;
    /******/
    /******/ 	// expose the module cache
    /******/ 	__webpack_require__.c = installedModules;
    /******/
    /******/ 	// define getter function for harmony exports
    /******/ 	__webpack_require__.d = function(exports, name, getter) {
      /******/ 		if(!__webpack_require__.o(exports, name)) {
        /******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
        /******/ 		}
      /******/ 	};
    /******/
    /******/ 	// define __esModule on exports
    /******/ 	__webpack_require__.r = function(exports) {
      /******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
        /******/ 		}
      /******/ 		Object.defineProperty(exports, '__esModule', { value: true });
      /******/ 	};
    /******/
    /******/ 	// create a fake namespace object
    /******/ 	// mode & 1: value is a module id, require it
    /******/ 	// mode & 2: merge all properties of value into the ns
    /******/ 	// mode & 4: return value when already ns object
    /******/ 	// mode & 8|1: behave like require
    /******/ 	__webpack_require__.t = function(value, mode) {
      /******/ 		if(mode & 1) {
        value = __webpack_require__(value);
      }
      /******/ 		if(mode & 8) {
        return value;
      }
      /******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) {
        return value;
      }
      /******/ 		const ns = Object.create(null);
      /******/ 		__webpack_require__.r(ns);
      /******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
      /******/ 		if(mode & 2 && typeof value !== 'string') {
        for(const key in value) {
          __webpack_require__.d(ns, key, ((key) => value[key]).bind(null, key));
        }
      }
      /******/ 		return ns;
      /******/ 	};
    /******/
    /******/ 	// getDefaultExport function for compatibility with non-harmony modules
    /******/ 	__webpack_require__.n = function(module) {
      /******/ 		const getter = module && module.__esModule ?
      /******/ 			function getDefault() {
          return module['default'];
        } :
      /******/ 			function getModuleExports() {
          return module;
        };
      /******/ 		__webpack_require__.d(getter, 'a', getter);
      /******/ 		return getter;
      /******/ 	};
    /******/
    /******/ 	// Object.prototype.hasOwnProperty.call
    /******/ 	__webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ 	// __webpack_public_path__
    /******/ 	__webpack_require__.p = '';
    /******/
    /******/
    /******/ 	// Load entry module and return exports
    /******/ 	return __webpack_require__(__webpack_require__.s = 0);
    /******/ })
  /************************************************************************/
  /******/ ([
    /* 0 */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {


      __webpack_require__.r(__webpack_exports__);

      // CONCATENATED MODULE: ./src/tools.js
      const argumentAsArray = function argumentAsArray(argument) {
        return Array.isArray(argument) ? argument : [argument];
      };
      const isElement = function isElement(target) {
        return target instanceof Node;
      };
      const isElementList = function isElementList(nodeList) {
        return nodeList instanceof NodeList;
      };
      const eachNode = function eachNode(nodeList, callback) {
        if (nodeList && callback) {
          nodeList = isElementList(nodeList) ? nodeList : [nodeList];

          for (let i = 0; i < nodeList.length; i++) {
            if (callback(nodeList[i], i, nodeList.length) === true) {
              break;
            }
          }
        }
      };
      const throwError = function throwError(message) {
        return console.error('[scroll-lock] '.concat(message));
      };
      const arrayAsSelector = function arrayAsSelector(array) {
        if (Array.isArray(array)) {
          const selector = array.join(', ');
          return selector;
        }
      };
      const nodeListAsArray = function nodeListAsArray(nodeList) {
        const nodes = [];
        eachNode(nodeList, (node) => nodes.push(node));
        return nodes;
      };
      const findParentBySelector = function findParentBySelector($el, selector) {
        const self = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        const $root = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : document;

        if (self && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1) {
          return $el;
        }

        while (($el = $el.parentElement) && nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) === -1) {

        }

        return $el;
      };
      const elementHasSelector = function elementHasSelector($el, selector) {
        const $root = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document;
        const has = nodeListAsArray($root.querySelectorAll(selector)).indexOf($el) !== -1;
        return has;
      };
      const elementHasOverflowHidden = function elementHasOverflowHidden($el) {
        if ($el) {
          const computedStyle = getComputedStyle($el);
          const overflowIsHidden = computedStyle.overflow === 'hidden';
          return overflowIsHidden;
        }
      };
      const elementScrollTopOnStart = function elementScrollTopOnStart($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          const scrollTop = $el.scrollTop;
          return scrollTop <= 0;
        }
      };
      const elementScrollTopOnEnd = function elementScrollTopOnEnd($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          const scrollTop = $el.scrollTop;
          const scrollHeight = $el.scrollHeight;
          const scrollTopWithHeight = scrollTop + $el.offsetHeight;
          return scrollTopWithHeight >= scrollHeight;
        }
      };
      const elementScrollLeftOnStart = function elementScrollLeftOnStart($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          const scrollLeft = $el.scrollLeft;
          return scrollLeft <= 0;
        }
      };
      const elementScrollLeftOnEnd = function elementScrollLeftOnEnd($el) {
        if ($el) {
          if (elementHasOverflowHidden($el)) {
            return true;
          }

          const scrollLeft = $el.scrollLeft;
          const scrollWidth = $el.scrollWidth;
          const scrollLeftWithWidth = scrollLeft + $el.offsetWidth;
          return scrollLeftWithWidth >= scrollWidth;
        }
      };
      const elementIsScrollableField = function elementIsScrollableField($el) {
        const selector = 'textarea, [contenteditable="true"]';
        return elementHasSelector($el, selector);
      };
      const elementIsInputRange = function elementIsInputRange($el) {
        const selector = 'input[type="range"]';
        return elementHasSelector($el, selector);
      };
      // CONCATENATED MODULE: ./src/scroll-lock.js
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'disablePageScroll', () => disablePageScroll);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'enablePageScroll', () => enablePageScroll);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getScrollState', () => getScrollState);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'clearQueueScrollLocks', () => clearQueueScrollLocks);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getTargetScrollBarWidth', () => scroll_lock_getTargetScrollBarWidth);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getCurrentTargetScrollBarWidth', () => scroll_lock_getCurrentTargetScrollBarWidth);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getPageScrollBarWidth', () => getPageScrollBarWidth);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'getCurrentPageScrollBarWidth', () => getCurrentPageScrollBarWidth);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addScrollableTarget', () => scroll_lock_addScrollableTarget);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'removeScrollableTarget', () => scroll_lock_removeScrollableTarget);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addScrollableSelector', () => scroll_lock_addScrollableSelector);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'removeScrollableSelector', () => scroll_lock_removeScrollableSelector);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addLockableTarget', () => scroll_lock_addLockableTarget);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addLockableSelector', () => scroll_lock_addLockableSelector);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'setFillGapMethod', () => scroll_lock_setFillGapMethod);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addFillGapTarget', () => scroll_lock_addFillGapTarget);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'removeFillGapTarget', () => scroll_lock_removeFillGapTarget);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'addFillGapSelector', () => scroll_lock_addFillGapSelector);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'removeFillGapSelector', () => scroll_lock_removeFillGapSelector);
      /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, 'refillGaps', () => refillGaps);
      function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = arguments[i] != null ? arguments[i] : {}; let ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') {
            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter((sym) => Object.getOwnPropertyDescriptor(source, sym).enumerable));
          } ownKeys.forEach((key) => {
            _defineProperty(target, key, source[key]);
          });
        } return target;
      }

      function _defineProperty(obj, key, value) {
        if (key in obj) {
          Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });
        } else {
          obj[key] = value;
        } return obj;
      }


      const FILL_GAP_AVAILABLE_METHODS = ['padding', 'margin', 'width', 'max-width', 'none'];
      const TOUCH_DIRECTION_DETECT_OFFSET = 3;
      const state = {
        scroll: true,
        queue: 0,
        scrollableSelectors: ['[data-scroll-lock-scrollable]'],
        lockableSelectors: ['body', '[data-scroll-lock-lockable]'],
        fillGapSelectors: ['body', '[data-scroll-lock-fill-gap]', '[data-scroll-lock-lockable]'],
        fillGapMethod: FILL_GAP_AVAILABLE_METHODS[0],
        //
        startTouchY: 0,
        startTouchX: 0
      };
      var disablePageScroll = function disablePageScroll(target) {
        if (state.queue <= 0) {
          state.scroll = false;
          scroll_lock_hideLockableOverflow();
          fillGaps();
        }

        scroll_lock_addScrollableTarget(target);
        state.queue++;
      };
      var enablePageScroll = function enablePageScroll(target) {
        state.queue > 0 && state.queue--;

        if (state.queue <= 0) {
          state.scroll = true;
          scroll_lock_showLockableOverflow();
          unfillGaps();
        }

        scroll_lock_removeScrollableTarget(target);
      };
      var getScrollState = function getScrollState() {
        return state.scroll;
      };
      var clearQueueScrollLocks = function clearQueueScrollLocks() {
        state.queue = 0;
      };
      var scroll_lock_getTargetScrollBarWidth = function getTargetScrollBarWidth($target) {
        const onlyExists = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isElement($target)) {
          const currentOverflowYProperty = $target.style.overflowY;

          if (onlyExists) {
            if (!getScrollState()) {
              $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-overflow-y-property');
            }
          } else {
            $target.style.overflowY = 'scroll';
          }

          const width = scroll_lock_getCurrentTargetScrollBarWidth($target);
          $target.style.overflowY = currentOverflowYProperty;
          return width;
        } else {
          return 0;
        }
      };
      var scroll_lock_getCurrentTargetScrollBarWidth = function getCurrentTargetScrollBarWidth($target) {
        if (isElement($target)) {
          if ($target === document.body) {
            const documentWidth = document.documentElement.clientWidth;
            const windowWidth = window.innerWidth;
            const currentWidth = windowWidth - documentWidth;
            return currentWidth;
          } else {
            const borderLeftWidthCurrentProperty = $target.style.borderLeftWidth;
            const borderRightWidthCurrentProperty = $target.style.borderRightWidth;
            $target.style.borderLeftWidth = '0px';
            $target.style.borderRightWidth = '0px';

            const _currentWidth = $target.offsetWidth - $target.clientWidth;

            $target.style.borderLeftWidth = borderLeftWidthCurrentProperty;
            $target.style.borderRightWidth = borderRightWidthCurrentProperty;
            return _currentWidth;
          }
        } else {
          return 0;
        }
      };
      var getPageScrollBarWidth = function getPageScrollBarWidth() {
        const onlyExists = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        return scroll_lock_getTargetScrollBarWidth(document.body, onlyExists);
      };
      var getCurrentPageScrollBarWidth = function getCurrentPageScrollBarWidth() {
        return scroll_lock_getCurrentTargetScrollBarWidth(document.body);
      };
      var scroll_lock_addScrollableTarget = function addScrollableTarget(target) {
        if (target) {
          const targets = argumentAsArray(target);
          targets.map(($targets) => {
            eachNode($targets, ($target) => {
              if (isElement($target)) {
                $target.setAttribute('data-scroll-lock-scrollable', '');
              } else {
                throwError('"'.concat($target, '" is not a Element.'));
              }
            });
          });
        }
      };
      var scroll_lock_removeScrollableTarget = function removeScrollableTarget(target) {
        if (target) {
          const targets = argumentAsArray(target);
          targets.map(($targets) => {
            eachNode($targets, ($target) => {
              if (isElement($target)) {
                $target.removeAttribute('data-scroll-lock-scrollable');
              } else {
                throwError('"'.concat($target, '" is not a Element.'));
              }
            });
          });
        }
      };
      var scroll_lock_addScrollableSelector = function addScrollableSelector(selector) {
        if (selector) {
          const selectors = argumentAsArray(selector);
          selectors.map((selector) => {
            state.scrollableSelectors.push(selector);
          });
        }
      };
      var scroll_lock_removeScrollableSelector = function removeScrollableSelector(selector) {
        if (selector) {
          const selectors = argumentAsArray(selector);
          selectors.map((selector) => {
            state.scrollableSelectors = state.scrollableSelectors.filter((sSelector) => sSelector !== selector);
          });
        }
      };
      var scroll_lock_addLockableTarget = function addLockableTarget(target) {
        if (target) {
          const targets = argumentAsArray(target);
          targets.map(($targets) => {
            eachNode($targets, ($target) => {
              if (isElement($target)) {
                $target.setAttribute('data-scroll-lock-lockable', '');
              } else {
                throwError('"'.concat($target, '" is not a Element.'));
              }
            });
          });

          if (!getScrollState()) {
            scroll_lock_hideLockableOverflow();
          }
        }
      };
      var scroll_lock_addLockableSelector = function addLockableSelector(selector) {
        if (selector) {
          const selectors = argumentAsArray(selector);
          selectors.map((selector) => {
            state.lockableSelectors.push(selector);
          });

          if (!getScrollState()) {
            scroll_lock_hideLockableOverflow();
          }

          scroll_lock_addFillGapSelector(selector);
        }
      };
      var scroll_lock_setFillGapMethod = function setFillGapMethod(method) {
        if (method) {
          if (FILL_GAP_AVAILABLE_METHODS.indexOf(method) !== -1) {
            state.fillGapMethod = method;
            refillGaps();
          } else {
            const methods = FILL_GAP_AVAILABLE_METHODS.join(', ');
            throwError('"'.concat(method, '" method is not available!\nAvailable fill gap methods: ').concat(methods, '.'));
          }
        }
      };
      var scroll_lock_addFillGapTarget = function addFillGapTarget(target) {
        if (target) {
          const targets = argumentAsArray(target);
          targets.map(($targets) => {
            eachNode($targets, ($target) => {
              if (isElement($target)) {
                $target.setAttribute('data-scroll-lock-fill-gap', '');

                if (!state.scroll) {
                  scroll_lock_fillGapTarget($target);
                }
              } else {
                throwError('"'.concat($target, '" is not a Element.'));
              }
            });
          });
        }
      };
      var scroll_lock_removeFillGapTarget = function removeFillGapTarget(target) {
        if (target) {
          const targets = argumentAsArray(target);
          targets.map(($targets) => {
            eachNode($targets, ($target) => {
              if (isElement($target)) {
                $target.removeAttribute('data-scroll-lock-fill-gap');

                if (!state.scroll) {
                  scroll_lock_unfillGapTarget($target);
                }
              } else {
                throwError('"'.concat($target, '" is not a Element.'));
              }
            });
          });
        }
      };
      var scroll_lock_addFillGapSelector = function addFillGapSelector(selector) {
        if (selector) {
          const selectors = argumentAsArray(selector);
          selectors.map((selector) => {
            if (state.fillGapSelectors.indexOf(selector) === -1) {
              state.fillGapSelectors.push(selector);

              if (!state.scroll) {
                scroll_lock_fillGapSelector(selector);
              }
            }
          });
        }
      };
      var scroll_lock_removeFillGapSelector = function removeFillGapSelector(selector) {
        if (selector) {
          const selectors = argumentAsArray(selector);
          selectors.map((selector) => {
            state.fillGapSelectors = state.fillGapSelectors.filter((fSelector) => fSelector !== selector);

            if (!state.scroll) {
              scroll_lock_unfillGapSelector(selector);
            }
          });
        }
      };
      var refillGaps = function refillGaps() {
        if (!state.scroll) {
          fillGaps();
        }
      };

      var scroll_lock_hideLockableOverflow = function hideLockableOverflow() {
        const selector = arrayAsSelector(state.lockableSelectors);
        scroll_lock_hideLockableOverflowSelector(selector);
      };

      var scroll_lock_showLockableOverflow = function showLockableOverflow() {
        const selector = arrayAsSelector(state.lockableSelectors);
        scroll_lock_showLockableOverflowSelector(selector);
      };

      var scroll_lock_hideLockableOverflowSelector = function hideLockableOverflowSelector(selector) {
        const $targets = document.querySelectorAll(selector);
        eachNode($targets, ($target) => {
          scroll_lock_hideLockableOverflowTarget($target);
        });
      };

      var scroll_lock_showLockableOverflowSelector = function showLockableOverflowSelector(selector) {
        const $targets = document.querySelectorAll(selector);
        eachNode($targets, ($target) => {
          scroll_lock_showLockableOverflowTarget($target);
        });
      };

      var scroll_lock_hideLockableOverflowTarget = function hideLockableOverflowTarget($target) {
        if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') !== 'true') {
          const computedStyle = window.getComputedStyle($target);
          $target.setAttribute('data-scroll-lock-saved-overflow-y-property', computedStyle.overflowY);
          $target.setAttribute('data-scroll-lock-saved-inline-overflow-property', $target.style.overflow);
          $target.setAttribute('data-scroll-lock-saved-inline-overflow-y-property', $target.style.overflowY);
          $target.style.overflow = 'hidden';
          $target.setAttribute('data-scroll-lock-locked', 'true');
        }
      };

      var scroll_lock_showLockableOverflowTarget = function showLockableOverflowTarget($target) {
        if (isElement($target) && $target.getAttribute('data-scroll-lock-locked') === 'true') {
          $target.style.overflow = $target.getAttribute('data-scroll-lock-saved-inline-overflow-property');
          $target.style.overflowY = $target.getAttribute('data-scroll-lock-saved-inline-overflow-y-property');
          $target.removeAttribute('data-scroll-lock-saved-overflow-property');
          $target.removeAttribute('data-scroll-lock-saved-inline-overflow-property');
          $target.removeAttribute('data-scroll-lock-saved-inline-overflow-y-property');
          $target.removeAttribute('data-scroll-lock-locked');
        }
      };

      var fillGaps = function fillGaps() {
        state.fillGapSelectors.map((selector) => {
          scroll_lock_fillGapSelector(selector);
        });
      };

      var unfillGaps = function unfillGaps() {
        state.fillGapSelectors.map((selector) => {
          scroll_lock_unfillGapSelector(selector);
        });
      };

      var scroll_lock_fillGapSelector = function fillGapSelector(selector) {
        const $targets = document.querySelectorAll(selector);
        const isLockable = state.lockableSelectors.indexOf(selector) !== -1;
        eachNode($targets, ($target) => {
          scroll_lock_fillGapTarget($target, isLockable);
        });
      };

      var scroll_lock_fillGapTarget = function fillGapTarget($target) {
        const isLockable = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

        if (isElement($target)) {
          let scrollBarWidth;

          if ($target.getAttribute('data-scroll-lock-lockable') === '' || isLockable) {
            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($target, true);
          } else {
            const $lockableParent = findParentBySelector($target, arrayAsSelector(state.lockableSelectors));
            scrollBarWidth = scroll_lock_getTargetScrollBarWidth($lockableParent, true);
          }

          if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
            scroll_lock_unfillGapTarget($target);
          }

          const computedStyle = window.getComputedStyle($target);
          $target.setAttribute('data-scroll-lock-filled-gap', 'true');
          $target.setAttribute('data-scroll-lock-current-fill-gap-method', state.fillGapMethod);

          if (state.fillGapMethod === 'margin') {
            const currentMargin = parseFloat(computedStyle.marginRight);
            $target.style.marginRight = ''.concat(currentMargin + scrollBarWidth, 'px');
          } else if (state.fillGapMethod === 'width') {
            $target.style.width = 'calc(100% - '.concat(scrollBarWidth, 'px)');
          } else if (state.fillGapMethod === 'max-width') {
            $target.style.maxWidth = 'calc(100% - '.concat(scrollBarWidth, 'px)');
          } else if (state.fillGapMethod === 'padding') {
            const currentPadding = parseFloat(computedStyle.paddingRight);
            $target.style.paddingRight = ''.concat(currentPadding + scrollBarWidth, 'px');
          }
        }
      };

      var scroll_lock_unfillGapSelector = function unfillGapSelector(selector) {
        const $targets = document.querySelectorAll(selector);
        eachNode($targets, ($target) => {
          scroll_lock_unfillGapTarget($target);
        });
      };

      var scroll_lock_unfillGapTarget = function unfillGapTarget($target) {
        if (isElement($target)) {
          if ($target.getAttribute('data-scroll-lock-filled-gap') === 'true') {
            const currentFillGapMethod = $target.getAttribute('data-scroll-lock-current-fill-gap-method');
            $target.removeAttribute('data-scroll-lock-filled-gap');
            $target.removeAttribute('data-scroll-lock-current-fill-gap-method');

            if (currentFillGapMethod === 'margin') {
              $target.style.marginRight = '';
            } else if (currentFillGapMethod === 'width') {
              $target.style.width = '';
            } else if (currentFillGapMethod === 'max-width') {
              $target.style.maxWidth = '';
            } else if (currentFillGapMethod === 'padding') {
              $target.style.paddingRight = '';
            }
          }
        }
      };

      const onResize = function onResize(e) {
        refillGaps();
      };

      const onTouchStart = function onTouchStart(e) {
        if (!state.scroll) {
          state.startTouchY = e.touches[0].clientY;
          state.startTouchX = e.touches[0].clientX;
        }
      };

      const scroll_lock_onTouchMove = function onTouchMove(e) {
        if (!state.scroll) {
          const startTouchY = state.startTouchY,
            startTouchX = state.startTouchX;
          const currentClientY = e.touches[0].clientY;
          const currentClientX = e.touches[0].clientX;

          if (e.touches.length < 2) {
            const selector = arrayAsSelector(state.scrollableSelectors);
            const direction = {
              up: startTouchY < currentClientY,
              down: startTouchY > currentClientY,
              left: startTouchX < currentClientX,
              right: startTouchX > currentClientX
            };
            const directionWithOffset = {
              up: startTouchY + TOUCH_DIRECTION_DETECT_OFFSET < currentClientY,
              down: startTouchY - TOUCH_DIRECTION_DETECT_OFFSET > currentClientY,
              left: startTouchX + TOUCH_DIRECTION_DETECT_OFFSET < currentClientX,
              right: startTouchX - TOUCH_DIRECTION_DETECT_OFFSET > currentClientX
            };

            const handle = function handle($el) {
              const skip = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

              if ($el) {
                const parentScrollableEl = findParentBySelector($el, selector, false);

                if (elementIsInputRange($el)) {
                  return false;
                }

                if (skip || elementIsScrollableField($el) && findParentBySelector($el, selector) || elementHasSelector($el, selector)) {
                  let prevent = false;

                  if (elementScrollLeftOnStart($el) && elementScrollLeftOnEnd($el)) {
                    if (direction.up && elementScrollTopOnStart($el) || direction.down && elementScrollTopOnEnd($el)) {
                      prevent = true;
                    }
                  } else if (elementScrollTopOnStart($el) && elementScrollTopOnEnd($el)) {
                    if (direction.left && elementScrollLeftOnStart($el) || direction.right && elementScrollLeftOnEnd($el)) {
                      prevent = true;
                    }
                  } else if (directionWithOffset.up && elementScrollTopOnStart($el) || directionWithOffset.down && elementScrollTopOnEnd($el) || directionWithOffset.left && elementScrollLeftOnStart($el) || directionWithOffset.right && elementScrollLeftOnEnd($el)) {
                    prevent = true;
                  }

                  if (prevent) {
                    if (parentScrollableEl) {
                      handle(parentScrollableEl, true);
                    } else {
                      if (e.cancelable) {
                        e.preventDefault();
                      }
                    }
                  }
                } else {
                  handle(parentScrollableEl);
                }
              } else {
                if (e.cancelable) {
                  e.preventDefault();
                }
              }
            };

            handle(e.target);
          }
        }
      };

      const onTouchEnd = function onTouchEnd(e) {
        if (!state.scroll) {
          state.startTouchY = 0;
          state.startTouchX = 0;
        }
      };

      if (typeof window !== 'undefined') {
        window.addEventListener('resize', onResize);
      }

      if (typeof document !== 'undefined') {
        document.addEventListener('touchstart', onTouchStart);
        document.addEventListener('touchmove', scroll_lock_onTouchMove, {
          passive: false
        });
        document.addEventListener('touchend', onTouchEnd);
      }

      const deprecatedMethods = {
        hide: function hide(target) {
          throwError('"hide" is deprecated! Use "disablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#disablepagescrollscrollabletarget');
          disablePageScroll(target);
        },
        show: function show(target) {
          throwError('"show" is deprecated! Use "enablePageScroll" instead. \n https://github.com/FL3NKEY/scroll-lock#enablepagescrollscrollabletarget');
          enablePageScroll(target);
        },
        toggle: function toggle(target) {
          throwError('"toggle" is deprecated! Do not use it.');

          if (getScrollState()) {
            disablePageScroll();
          } else {
            enablePageScroll(target);
          }
        },
        getState: function getState() {
          throwError('"getState" is deprecated! Use "getScrollState" instead. \n https://github.com/FL3NKEY/scroll-lock#getscrollstate');
          return getScrollState();
        },
        getWidth: function getWidth() {
          throwError('"getWidth" is deprecated! Use "getPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getpagescrollbarwidth');
          return getPageScrollBarWidth();
        },
        getCurrentWidth: function getCurrentWidth() {
          throwError('"getCurrentWidth" is deprecated! Use "getCurrentPageScrollBarWidth" instead. \n https://github.com/FL3NKEY/scroll-lock#getcurrentpagescrollbarwidth');
          return getCurrentPageScrollBarWidth();
        },
        setScrollableTargets: function setScrollableTargets(target) {
          throwError('"setScrollableTargets" is deprecated! Use "addScrollableTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addscrollabletargetscrollabletarget');
          scroll_lock_addScrollableTarget(target);
        },
        setFillGapSelectors: function setFillGapSelectors(selector) {
          throwError('"setFillGapSelectors" is deprecated! Use "addFillGapSelector" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgapselectorfillgapselector');
          scroll_lock_addFillGapSelector(selector);
        },
        setFillGapTargets: function setFillGapTargets(target) {
          throwError('"setFillGapTargets" is deprecated! Use "addFillGapTarget" instead. \n https://github.com/FL3NKEY/scroll-lock#addfillgaptargetfillgaptarget');
          scroll_lock_addFillGapTarget(target);
        },
        clearQueue: function clearQueue() {
          throwError('"clearQueue" is deprecated! Use "clearQueueScrollLocks" instead. \n https://github.com/FL3NKEY/scroll-lock#clearqueuescrolllocks');
          clearQueueScrollLocks();
        }
      };

      const scrollLock = _objectSpread({
        disablePageScroll: disablePageScroll,
        enablePageScroll: enablePageScroll,
        getScrollState: getScrollState,
        clearQueueScrollLocks: clearQueueScrollLocks,
        getTargetScrollBarWidth: scroll_lock_getTargetScrollBarWidth,
        getCurrentTargetScrollBarWidth: scroll_lock_getCurrentTargetScrollBarWidth,
        getPageScrollBarWidth: getPageScrollBarWidth,
        getCurrentPageScrollBarWidth: getCurrentPageScrollBarWidth,
        addScrollableSelector: scroll_lock_addScrollableSelector,
        removeScrollableSelector: scroll_lock_removeScrollableSelector,
        addScrollableTarget: scroll_lock_addScrollableTarget,
        removeScrollableTarget: scroll_lock_removeScrollableTarget,
        addLockableSelector: scroll_lock_addLockableSelector,
        addLockableTarget: scroll_lock_addLockableTarget,
        addFillGapSelector: scroll_lock_addFillGapSelector,
        removeFillGapSelector: scroll_lock_removeFillGapSelector,
        addFillGapTarget: scroll_lock_addFillGapTarget,
        removeFillGapTarget: scroll_lock_removeFillGapTarget,
        setFillGapMethod: scroll_lock_setFillGapMethod,
        refillGaps: refillGaps,
        _state: state
      }, deprecatedMethods);

      /* harmony default export */ const scroll_lock = __webpack_exports__['default'] = (scrollLock);

      /***/ })
    /******/ ])['default']
);

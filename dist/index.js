(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Aperture"] = factory();
	else
		root["Aperture"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _aperture = __webpack_require__(2);
	
	var _aperture2 = _interopRequireDefault(_aperture);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _aperture2.default;
	
	module.exports = _aperture2.default;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _element = __webpack_require__(3);
	
	var _element2 = _interopRequireDefault(_element);
	
	var _util = __webpack_require__(4);
	
	var util = _interopRequireWildcard(_util);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Aperture = function () {
	    function Aperture() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var _ref$onInit = _ref.onInit;
	        var onInit = _ref$onInit === undefined ? util.identity : _ref$onInit;
	        var _ref$onRender = _ref.onRender;
	        var onRender = _ref$onRender === undefined ? util.identity : _ref$onRender;
	        var _ref$onRerender = _ref.onRerender;
	        var onRerender = _ref$onRerender === undefined ? util.identity : _ref$onRerender;
	        var _ref$onScroll = _ref.onScroll;
	        var onScroll = _ref$onScroll === undefined ? util.identity : _ref$onScroll;
	        var _ref$onOverflow = _ref.onOverflow;
	        var onOverflow = _ref$onOverflow === undefined ? util.identity : _ref$onOverflow;
	        var _ref$items = _ref.items;
	        var items = _ref$items === undefined ? [] : _ref$items;
	        var _ref$height = _ref.height;
	        var height = _ref$height === undefined ? '100%' : _ref$height;
	
	        _classCallCheck(this, Aperture);
	
	        this.container = new _element2.default({
	            className: 'aperture',
	            style: {
	                position: 'relative',
	                overflow: 'hidden',
	                height: height
	            }
	        });
	        this.viewport = new _element2.default({
	            className: 'viewport',
	            style: {
	                position: 'absolute',
	                top: 0
	            }
	        }).appendTo(this.container);
	        this.scrollable = new _element2.default({
	            className: 'scrollable',
	            style: {
	                height: '100%',
	                position: 'absolute',
	                top: 0,
	                right: 0,
	                overflow: 'auto'
	            }
	        }).appendTo(this.container);
	        this.filler = new _element2.default({
	            className: 'filler'
	        }).appendTo(this.scrollable);
	
	        this.items = items;
	        this.onInit = onInit;
	        this.onRender = onRender;
	        this.onRerender = onRerender;
	        this.onScroll = onScroll;
	        this.onOverflow = onOverflow;
	        this.config = {
	            itemStartIndex: 0,
	            defaultScrollbarWidth: 16,
	            initHeight: 0,
	            itemHeight: 0,
	            totalHeight: 0,
	            numOfItemsToRender: 0,
	            numOfPlaceholders: 1
	        };
	    }
	
	    _createClass(Aperture, [{
	        key: 'init',
	        value: function init() {
	            this.onInit(this.viewport.domNode);
	            this.config.initHeight = this.viewport.domNode.offsetHeight;
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var i = 0;
	            while (this.viewport.domNode.scrollHeight < this.container.domNode.scrollHeight && i < this.items.length) {
	                this.onRender(this.viewport.domNode, this.items[i], i, i - this.config.itemStartIndex);
	                ++i;
	            }
	            this.config.numOfItemsToRender = i;
	            this.config.itemHeight = (this.viewport.domNode.scrollHeight - this.config.initHeight) / this.config.numOfItemsToRender;
	            this.config.totalHeight = this.config.itemHeight * this.items.length + this.config.itemHeight * this.config.numOfPlaceholders;
	        }
	    }, {
	        key: 'updateLayout',
	        value: function updateLayout() {
	            this.filler.style.height = this.config.totalHeight + 'px';
	            var scrollbarWidth = this.scrollable.domNode.offsetWidth - this.scrollable.domNode.clientWidth;
	            this.scrollable.style.width = (scrollbarWidth || this.config.defaultScrollbarWidth) + 'px';
	            this.viewport.style.width = (1 - scrollbarWidth / this.container.domNode.clientWidth) * 100 + '%';
	        }
	    }, {
	        key: 'handleWheel',
	        value: function handleWheel(event) {
	            var browser = util.browser;
	            if (browser.isBlink || browser.isSafari) {
	                var wheelEvent = new WheelEvent('wheel', {
	                    deltaX: event.deltaX,
	                    deltaY: event.deltaY,
	                    deltaZ: event.deltaZ,
	                    deltaMode: event.deltaMode
	                });
	                this.scrollable.domNode.dispatchEvent(wheelEvent);
	            } else {
	                this.scrollable.domNode.scrollTop += event.deltaY;
	            }
	        }
	    }, {
	        key: 'handleScroll',
	        value: function handleScroll(event) {
	            var scrollTop = this.scrollable.domNode.scrollTop;
	            var startIndex = Math.ceil(scrollTop / this.config.itemHeight);
	            var endIndex = startIndex + this.config.numOfItemsToRender - 1;
	            this.onScroll(this.viewport.domNode, items, startIndex, endIndex);
	            if (endIndex >= this.items.length) {
	                this.onOverflow(this.viewport.domNode, endIndex - startIndex);
	                endIndex--;
	            }
	            for (var i = startIndex; i <= endIndex; ++i) {
	                this.onRerender(this.viewport.domNode, this.items[i], i, i - startIndex, // index related to the visible items
	                i >= this.items.length);
	            }
	        }
	    }, {
	        key: 'renderTo',
	        value: function renderTo(target) {
	            var _this = this;
	
	            target.appendChild(this.container.domNode);
	            this.init();
	            this.render();
	            this.updateLayout();
	            this.container.domNode.addEventListener('wheel', function (event) {
	                event.preventDefault();
	                _this.handleWheel(event);
	            });
	
	            this.scrollable.domNode.addEventListener('scroll', function (event) {
	                if (requestAnimationFrame) {
	                    requestAnimationFrame(function () {
	                        return _this.handleScroll(event);
	                    });
	                } else {
	                    _this.handleScroll(event);
	                }
	            });
	        }
	    }]);
	
	    return Aperture;
	}();

	exports.default = Aperture;

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Element = function () {
	    function Element() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        var _ref$elementType = _ref.elementType;
	        var elementType = _ref$elementType === undefined ? 'div' : _ref$elementType;
	        var style = _ref.style;
	        var className = _ref.className;
	
	        _classCallCheck(this, Element);
	
	        this.domNode = document.createElement(elementType);
	        this.style = style;
	        this.className = className;
	    }
	
	    _createClass(Element, [{
	        key: 'appendTo',
	        value: function appendTo(target) {
	            if (target instanceof HTMLElement) target.appendChild(this.domNode);else if (target instanceof Element) target.domNode.appendChild(this.domNode);
	            return this;
	        }
	    }, {
	        key: 'removeAllChildren',
	        value: function removeAllChildren() {
	            while (this.domNode.firstChild) {
	                this.domNode.removeChild(this.domNode.firstChild);
	            }
	        }
	    }, {
	        key: 'className',
	        set: function set(className) {
	            if (className) this.domNode.setAttribute('class', className);
	        },
	        get: function get() {
	            return this.domNode.getAttribute('class');
	        }
	    }, {
	        key: 'style',
	        set: function set(style) {
	            for (var styleName in style) {
	                this.domNode.style[styleName] = style[styleName];
	            }
	        },
	        get: function get() {
	            return this.domNode.style;
	        }
	    }]);
	
	    return Element;
	}();

	exports.default = Element;

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.identity = identity;
	function identity(arg) {
	    return arg;
	}
	
	var browser = exports.browser = function () {
	    if (typeof window === 'undefined') return { isBrowser: false };
	    // Opera 8.0+
	    var isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	    // Firefox 1.0+
	    var isFirefox = typeof InstallTrigger !== 'undefined';
	    // At least Safari 3+: "[object HTMLElementConstructor]"
	    var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
	    // Internet Explorer 6-11
	    var isIE = /*@cc_on!@*/false || !!document.documentMode;
	    // Edge 20+
	    var isEdge = !isIE && !!window.StyleMedia;
	    // Chrome 1+
	    var isChrome = !!window.chrome && !!window.chrome.webstore;
	    // Blink engine detection
	    var isBlink = (isChrome || isOpera) && !!window.CSS;
	    return {
	        isOpera: isOpera,
	        isFirefox: isFirefox,
	        isIE: isIE,
	        isEdge: isEdge,
	        isChrome: isChrome,
	        isBlink: isBlink
	    };
	}();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=index.js.map
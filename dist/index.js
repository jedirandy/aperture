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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _htmlBlock = __webpack_require__(2);

	var _htmlBlock2 = _interopRequireDefault(_htmlBlock);

	var _viewport = __webpack_require__(3);

	var _viewport2 = _interopRequireDefault(_viewport);

	var _util = __webpack_require__(4);

	var util = _interopRequireWildcard(_util);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Aperture = function () {
	    function Aperture() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$height = _ref.height;
	        var height = _ref$height === undefined ? 200 : _ref$height;
	        var _ref$items = _ref.items;
	        var items = _ref$items === undefined ? [] : _ref$items;
	        var _ref$itemHeight = _ref.itemHeight;
	        var itemHeight = _ref$itemHeight === undefined ? 18 : _ref$itemHeight;

	        _classCallCheck(this, Aperture);

	        this.element = document.createElement('div');
	        this.element.style.height = height + 'px';
	        this.element.style.overflow = 'auto';
	        this.element.style.position = 'relative';
	        this.element.setAttribute('class', 'aperture');
	        this.items = items;
	        this.itemHeight = itemHeight;
	        this.viewport = new _viewport2.default({
	            height: height,
	            itemHeight: itemHeight,
	            className: 'viewport'
	        }).appendTo(this.element);
	        this.viewport.style.position = 'absolute';
	        this.viewport.style.width = '100%';
	        this.filler = new _htmlBlock2.default().appendTo(this.element);
	    }

	    _createClass(Aperture, [{
	        key: 'getLayout',
	        value: function getLayout() {
	            var totalHeight = this.items.length * this.itemHeight;
	            var contentHeight = Math.ceil(this.viewport.height / this.itemHeight) * this.itemHeight;
	            var numOfItemsToRender = Math.ceil(contentHeight / this.itemHeight);
	            return {
	                totalHeight: totalHeight,
	                numOfItemsToRender: numOfItemsToRender,
	                contentHeight: contentHeight
	            };
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _getLayout = this.getLayout();

	            var totalHeight = _getLayout.totalHeight;
	            var numOfItemsToRender = _getLayout.numOfItemsToRender;


	            var top = Math.min(this.element.scrollTop, Math.max(totalHeight - this.viewport.height, 0));
	            this.filler.height = totalHeight;
	            this.viewport.element.style.top = top + 'px';
	            var startIndex = Math.min(Math.floor(top / this.itemHeight), Math.max(items.length - numOfItemsToRender));
	            var endIndex = startIndex + numOfItemsToRender;
	            this.viewport.render(this.items.slice(startIndex, endIndex));
	        }
	    }, {
	        key: 'renderTo',
	        value: function renderTo(target, renderFn) {
	            var _this = this;

	            target.appendChild(this.element);
	            this.render();
	            this.element.addEventListener('scroll', function (event) {
	                requestAnimationFrame(function () {
	                    return _this.render();
	                });
	            });
	        }
	    }]);

	    return Aperture;
	}();

	module.exports = Aperture;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HTMLBlock = function () {
	    function HTMLBlock() {
	        var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

	        var _ref$height = _ref.height;
	        var height = _ref$height === undefined ? 200 : _ref$height;
	        var _ref$className = _ref.className;
	        var className = _ref$className === undefined ? '' : _ref$className;

	        _classCallCheck(this, HTMLBlock);

	        this.element = document.createElement('div');
	        this.element.setAttribute('class', className);
	        this.height = height;
	    }

	    _createClass(HTMLBlock, [{
	        key: 'appendTo',
	        value: function appendTo(target) {
	            target.appendChild(this.element);
	            return this;
	        }
	    }, {
	        key: 'height',
	        set: function set(h) {
	            this._height = h;
	            this.element.style.height = this._height + 'px';
	        },
	        get: function get() {
	            return this._height;
	        }
	    }, {
	        key: 'style',
	        get: function get() {
	            return this.element.style;
	        }
	    }]);

	    return HTMLBlock;
	}();

	exports.default = HTMLBlock;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _util = __webpack_require__(4);

	var util = _interopRequireWildcard(_util);

	var _htmlBlock = __webpack_require__(2);

	var _htmlBlock2 = _interopRequireDefault(_htmlBlock);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Viewport = function (_HTMLBlock) {
	    _inherits(Viewport, _HTMLBlock);

	    function Viewport(config) {
	        _classCallCheck(this, Viewport);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Viewport).call(this, config));

	        var itemHeight = config.itemHeight;
	        var height = config.height;

	        _this.height = Math.ceil(_this.height / itemHeight) * itemHeight;
	        return _this;
	    }

	    _createClass(Viewport, [{
	        key: 'render',
	        value: function render(items) {
	            var renderFn = arguments.length <= 1 || arguments[1] === undefined ? this.defaultRenderFn : arguments[1];

	            util.removeChildren(this.element);
	            for (var i = 0; i < items.length; ++i) {
	                renderFn(this.element, items[i]);
	            }
	        }
	    }, {
	        key: 'defaultRenderFn',
	        get: function get() {
	            return function (element, item) {
	                var ele = document.createElement('div');
	                ele.innerHTML = item;
	                element.appendChild(ele);
	            };
	        }
	    }]);

	    return Viewport;
	}(_htmlBlock2.default);

	exports.default = Viewport;

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.removeChildren = removeChildren;
	function removeChildren(node) {
	    while (node.firstChild) {
	        node.removeChild(node.firstChild);
	    }
	}

/***/ }
/******/ ])
});
;
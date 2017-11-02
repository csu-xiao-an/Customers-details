/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_topnav_jsx__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_styl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__home_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import SocialNetwork from '../social-network/social-network.jsx'
// import Signature from '../signature/signature.jsx'
// import Details from '../details/details.jsx'
// import Events from '../events/events.jsx'

// import Source from '../source/source.jsx'
// import Groups from '../groups/groups.jsx'
// import Adress from '../adress/adress.jsx'
// import React, {Component} from 'react'
// import Email from '../email/email.jsx'
// import Media from '../media/media.jsx'
// import Notes from '../notes/notes.jsx'
// import Debts from '../debts/debts.jsx'
// import Phone from '../phone/phone.jsx'
// import Line from '../line/line.jsx'
// import Hero from '../hero/hero.jsx'


var Home = function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Home);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), _this), _this.componentWillMount = function () {
      if (config.data.isRtL) document.getElementsByTagName('body')[0].style.direction = 'rtl';
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'home' },
        React.createElement(__WEBPACK_IMPORTED_MODULE_0__topnav_topnav_jsx__["a" /* default */], null),
        React.createElement('div', { className: 'test' })
      );
    }
  }]);

  return Home;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Home);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509624367760
      var cssReload = require("../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509624367757
      var cssReload = require("../../css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_styl__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topnav_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__topnav_styl__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// import React, {Component} from 'react'


var Topnav = function (_React$Component) {
  _inherits(Topnav, _React$Component);

  function Topnav() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Topnav);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Topnav.__proto__ || Object.getPrototypeOf(Topnav)).call.apply(_ref, [this].concat(args))), _this), _this.age = function (d) {
      return Math.floor(moment.duration(moment() - moment(d)).asYears());
    }, _this.countAppointment = function () {
      var c = 0;
      config.data.recent_appoinments && config.data.recent_appoinments[0] && config.data.recent_appoinments.forEach(function (i) {
        return i.procedures.forEach(function () {
          return c++;
        });
      });
      return c;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Topnav, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { id: 'topnav' },
        React.createElement(
          'div',
          { className: 'header' },
          React.createElement(
            'div',
            { className: 'arrow-wrap', onClick: function onClick() {
                window.history.go(-1);
              } },
            React.createElement('img', { className: 'arrow-back', src: config.urls.media + 'arrow-back.svg' })
          ),
          React.createElement(
            'div',
            { className: 'client-name' },
            React.createElement('div', { className: 'icon-online' }),
            React.createElement(
              'h1',
              null,
              config.data.name
            ),
            React.createElement(
              'h1',
              null,
              '(',
              this.age(config.data.birthdate),
              ')'
            )
          ),
          React.createElement(
            'div',
            { className: 'edit-wrap' },
            React.createElement(
              'button',
              { className: 'edit' },
              config.translations.edit
            )
          )
        ),
        React.createElement(
          'div',
          { className: 'buttons' },
          React.createElement(
            'div',
            { className: 'customers-wrap' },
            React.createElement(
              'button',
              null,
              config.translations.customer
            )
          ),
          React.createElement(
            'div',
            { className: 'appointments-wrap' },
            React.createElement(
              'button',
              null,
              this.countAppointment(),
              ' - ',
              config.translations.appointment
            )
          )
        )
      );
    }
  }]);

  return Topnav;
}(React.Component);

/* harmony default export */ __webpack_exports__["a"] = (Topnav);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_home_home_jsx__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select_dist_react_select_css__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_select_dist_react_select_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_select_dist_react_select_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_styl__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_styl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_styl__);


// import ReactDOM from 'react-dom'
// import React from 'react'


ReactDOM.render(React.createElement(__WEBPACK_IMPORTED_MODULE_0__components_home_home_jsx__["a" /* default */], null), document.getElementById('root'));

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509624367773
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

// removed by extract-text-webpack-plugin
    if(false) {
      // 1509624367775
      var cssReload = require("../../../node_modules/css-hot-loader/hotModuleReplacement.js")(module.id, {"fileMap":"{fileName}"});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
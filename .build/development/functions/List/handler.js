(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _squeezerEventNode = __webpack_require__(2);

var _squeezerEventNode2 = _interopRequireDefault(_squeezerEventNode);

var _vars = __webpack_require__(3);

var _vars2 = _interopRequireDefault(_vars);

var _db = __webpack_require__(4);

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var db = new _db2.default(_vars2.default);

exports.handler = function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _squeezerEventNode2.default.apply(undefined, [_vars2.default, function (req, res) {
    db.listUsers().then(function (data) {
      return res.json(200, {
        message: 'success',
        data: data
      });
    }).catch(function (err) {
      return res.json(400, err);
    });
  }].concat(args));
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("squeezer-event-node");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = {"name":"api-rest-nodejs","path":"/home/i0026/Projects/SQZapi","identifier":"ApiRestNodejs","stage":"local","config":{},"provider":"local","runtime":"nodejs","appBaseUrl":"http://localhost:4001","storageBaseUrl":"http://localhost:4001/.build","mongodb":{"uri":"mongodb://127.0.0.1/users","options":{"useMongoClient":true}},"response-http-headers":[{"Access-Control-Allow-Origin":"*"},{"Access-Control-Allow-Headers":"Authorization, Content-Type"}],"function":{"name":"list","event":{"type":"http","path":"/v1/users","methods":["GET"]},"packaging":["vars.json"],"swagger":{"paths":{"/v1/users":{"get":{"summary":"List all users","description":"List all users as an JSON array","tags":["User"],"produces":["application/json"],"responses":{"200":{"description":"successful operation","schema":{"$ref":"#/definitions/ListResponse"}},"400":{"description":"bad request","schema":{"$ref":"#/definitions/ErrorResponseV1"}},"500":{"description":"internal error"}}}}},"definitions":{"ListResponse":{"type":"object","properties":{"message":{"type":"string","default":"success"},"data":{"type":"array","items":{"$ref":"#/definitions/UserInfo"}}}},"UserInfo":{"type":"object","properties":{"name":{"type":"string","default":""},"email":{"type":"string","default":""},"id":{"type":"string","default":""},"__v":{"type":"integer","default":0}}}}},"handler":"handler","timeout":6,"memory":128,"identifier":"List","service":"Users","serviceIdentifier":"Users","path":"/home/i0026/Projects/SQZapi/services/Users/list","packagePath":"/home/i0026/Projects/SQZapi/.build/deploy/functions","packageFile":"List.zip","flagged":true,"force":false}}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _db = __webpack_require__(5);

var _db2 = _interopRequireDefault(_db);

var _User = __webpack_require__(7);

var _User2 = _interopRequireDefault(_User);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Database = function () {
  function Database(vars) {
    _classCallCheck(this, Database);

    this.vars = vars;
    this.db = new _db2.default(vars);
  }

  _createClass(Database, [{
    key: 'listUsers',
    value: function listUsers() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        _this.db.init().then(function () {
          _User2.default.find({}, { password: 0 }, function (err, data) {
            if (err) return reject(err);

            return resolve(data);
          });
        });
      });
    }
  }]);

  return Database;
}();

exports.default = Database;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bluebird = __webpack_require__(6);

var _bluebird2 = _interopRequireDefault(_bluebird);

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

_mongoose2.default.Promise = _bluebird2.default;

var Database = function () {
  function Database(vars) {
    _classCallCheck(this, Database);

    this.vars = vars;
  }

  _createClass(Database, [{
    key: 'init',
    value: function init() {
      var mongoConfig = this.vars.mongodb;

      return new _bluebird2.default(function (resolve, reject) {
        if (_mongoose2.default.connection && _mongoose2.default.connection.readyState === 1) {
          resolve();
        } else {
          _mongoose2.default.connect(mongoConfig.uri, mongoConfig.options);
        }

        _mongoose2.default.connection.on('error', function (err) {
          return reject(err);
        });

        _mongoose2.default.connection.once('open', function () {
          return resolve();
        });
      });
    }
  }]);

  return Database;
}();

exports.default = Database;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(0);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = new _mongoose2.default.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

exports.default = _mongoose2.default.model('User', Schema);

/***/ })
/******/ ])));
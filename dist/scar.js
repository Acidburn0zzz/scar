/*! scar v2.1.0 - https://larsjung.de/scar/ */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("scar", [], factory);
	else if(typeof exports === 'object')
		exports["scar"] = factory();
	else
		root["scar"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var Scar = __webpack_require__(1);

module.exports = {
  Scar: Scar,
  test: new Scar()["static"](),
  assert: __webpack_require__(9),
  insp: __webpack_require__(10),
  spy: __webpack_require__(11),
  uniq: __webpack_require__(12)
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Test = __webpack_require__(3);

var Suite = __webpack_require__(5);

var Reporter = __webpack_require__(6);

var _cli = __webpack_require__(8);

var Scar =
/*#__PURE__*/
function () {
  function Scar() {
    _classCallCheck(this, Scar);

    this.tests = [];
  }

  _createClass(Scar, [{
    key: "test",
    value: function test() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this.tests.push(_construct(Test, args));
    }
  }, {
    key: "skip",
    value: function skip() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      this.test.apply(this, args.concat([{
        skip: true
      }]));
    }
  }, {
    key: "sync",
    value: function sync() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      this.test.apply(this, args.concat([{
        sync: true
      }]));
    }
  }, {
    key: "run",
    value: function run(options) {
      options = _objectSpread({
        reporter: new Reporter()
      }, options);
      return new Suite(this.tests, options).run();
    }
  }, {
    key: "cli",
    value: function cli(options) {
      var _this = this;

      if (global.window) {
        return new Promise(function (resolve) {
          global.window.addEventListener('load', function () {
            return resolve();
          });
        }).then(function () {
          return _cli(_this, options);
        });
      }

      return _cli(this, options);
    }
  }, {
    key: "static",
    value: function _static() {
      return Object.assign(this.test.bind(this), {
        scar: this,
        skip: this.skip.bind(this),
        sync: this.sync.bind(this),
        run: this.run.bind(this),
        cli: this.cli.bind(this)
      });
    }
  }]);

  return Scar;
}();

module.exports = Scar;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(4),
    is_str = _require.is_str,
    is_num = _require.is_num,
    is_fn = _require.is_fn,
    as_fn = _require.as_fn;

var promised_timeout = function promised_timeout(millis) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return reject(new Error("Timeout (".concat(millis, "ms)")));
    }, millis);
  });
};

var Test =
/*#__PURE__*/
function () {
  function Test() {
    _classCallCheck(this, Test);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    Object.assign.apply(Object, [this, {
      desc: '[No Description]',
      fn: null,
      skip: false,
      sync: false,
      timeout: null
    }].concat(_toConsumableArray(args.map(function (arg) {
      return is_str(arg) ? {
        desc: arg
      } : is_fn(arg) ? {
        fn: arg
      } : arg;
    })), [{
      status: Test.WAITING,
      err: null,
      starttime: null,
      duration: null,
      promise: null
    }]));
  }

  _createClass(Test, [{
    key: "__TRACE_MARKER__",
    value: function __TRACE_MARKER__() {
      return as_fn(this.fn)();
    }
  }, {
    key: "run_fn",
    value: function run_fn() {
      var _this = this;

      var promise = Promise.resolve().then(function () {
        return _this.__TRACE_MARKER__();
      });

      if (is_num(this.timeout) && this.timeout > 0) {
        return Promise.race([promise, promised_timeout(this.timeout)]);
      }

      return promise;
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.promise = this.promise || Promise.resolve().then(function () {
        _this2.starttime = Date.now();
        _this2.status = Test.PENDING;

        if (!_this2.skip) {
          return _this2.run_fn();
        }

        return null;
      }).then(function () {
        _this2.status = _this2.skip ? Test.SKIPPED : Test.PASSED;
      })["catch"](function (err) {
        _this2.status = Test.FAILED;
        _this2.err = err;
      }).then(function () {
        _this2.duration = Date.now() - _this2.starttime;
      });
      return this.promise;
    }
  }]);

  return Test;
}();

Test.WAITING = 'WAITING';
Test.PENDING = 'PENDING';
Test.PASSED = 'PASSED';
Test.FAILED = 'FAILED';
Test.SKIPPED = 'SKIPPED';
module.exports = Test;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var is_bool = function is_bool(x) {
  return typeof x === 'boolean';
};

var is_num = function is_num(x) {
  return typeof x === 'number';
};

var is_str = function is_str(x) {
  return typeof x === 'string';
};

var is_arr = function is_arr(x) {
  return Array.isArray(x);
};

var is_fn = function is_fn(x) {
  return typeof x === 'function';
};

var as_fn = function as_fn(x) {
  return is_fn(x) ? x : function () {
    return x;
  };
};

var is_regexp = function is_regexp(x) {
  return x instanceof RegExp;
};

var is_plain_obj = function is_plain_obj(x) {
  return Reflect.apply(Object.prototype.toString, x, []) === '[object Object]';
};

var run_seq = function run_seq(fns) {
  return fns.reduce(function (p, fn) {
    return p.then(fn);
  }, Promise.resolve());
};

var run_conc = function run_conc(fns) {
  var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1024;

  if (max < 2) {
    return run_seq(fns);
  }

  return new Promise(function (resolve) {
    fns = Array.from(fns);
    var awaiting = fns.length;
    var pending = 0;

    var run_fn = function run_fn(fn) {
      return Promise.resolve().then(fn)["catch"](function () {}).then(function () {
        pending -= 1;
        awaiting -= 1;
      });
    };

    var check = function check() {
      while (fns.length && pending < max) {
        run_fn(fns.shift()).then(check);
        pending += 1;
      }

      if (!awaiting) {
        resolve();
      }
    };

    check();
  });
};

module.exports = {
  is_bool: is_bool,
  is_num: is_num,
  is_str: is_str,
  is_arr: is_arr,
  is_fn: is_fn,
  is_regexp: is_regexp,
  is_plain_obj: is_plain_obj,
  as_fn: as_fn,
  run_seq: run_seq,
  run_conc: run_conc
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = __webpack_require__(4),
    is_fn = _require.is_fn,
    as_fn = _require.as_fn,
    run_seq = _require.run_seq,
    run_conc = _require.run_conc;

var Test = __webpack_require__(3);

var Suite =
/*#__PURE__*/
function () {
  function Suite() {
    var tests = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 ? arguments[1] : undefined;

    _classCallCheck(this, Suite);

    Object.assign(this, {
      sync: false,
      reporter: null,
      filter: null,
      max_conc: 64
    }, options, {
      tests: tests,
      status: Test.WAITING,
      starttime: null,
      duration: null,
      promise: null
    });
  }

  _createClass(Suite, [{
    key: "run_test",
    value: function run_test(test) {
      var _this = this;

      return Promise.resolve().then(function () {
        return _this.reporter && is_fn(_this.reporter.before_test) && _this.reporter.before_test(_this, test);
      }).then(function () {
        _this.run_count += 1;
        test.run_idx = _this.run_count;
      }).then(function () {
        return test.run();
      }).then(function () {
        _this.settled_count += 1;
        test.settled_idx = _this.settled_count;

        if (test.status === Test.PASSED) {
          _this.passed_count += 1;
          test.passedIdx = _this.passed_count;
        } else if (test.status === Test.SKIPPED) {
          _this.skipped_count += 1;
          test.skipped_idx = _this.skipped_count;
        } else {
          _this.failed_count += 1;
          test.failed_idx = _this.failed_count;
        }
      }).then(function () {
        return _this.reporter && is_fn(_this.reporter.after_test) && _this.reporter.after_test(_this, test);
      });
    }
  }, {
    key: "run",
    value: function run() {
      var _this2 = this;

      this.promise = this.promise || Promise.resolve().then(function () {
        _this2.tests.forEach(function (test, idx) {
          test.defIdx = idx + 1;
        });

        _this2.total = _this2.tests.length;
        _this2.filtered_tests = _this2.tests.filter(as_fn(_this2.filter || true));
        _this2.filtered_total = _this2.filtered_tests.length;
        _this2.run_count = 0;
        _this2.settled_count = 0;
        _this2.passed_count = 0;
        _this2.failed_count = 0;
        _this2.skipped_count = 0;
      }).then(function () {
        return _this2.reporter && is_fn(_this2.reporter.before_all) && _this2.reporter.before_all(_this2);
      }).then(function () {
        _this2.starttime = Date.now();
        _this2.status = Test.PENDING;

        var test_to_fn = function test_to_fn(test) {
          return function () {
            return _this2.run_test(test);
          };
        };

        var tests = _this2.filtered_tests;
        var sync_tests = _this2.sync ? tests : tests.filter(function (t) {
          return !!t.sync;
        });
        var async_tests = _this2.sync ? [] : tests.filter(function (t) {
          return !t.sync;
        });
        var sync_fns = sync_tests.map(test_to_fn);
        var async_fns = async_tests.map(test_to_fn);
        return run_seq(sync_fns).then(function () {
          return run_conc(async_fns, _this2.max_conc);
        });
      }).then(function () {
        _this2.status = _this2.failed_count ? Test.FAILED : Test.PASSED;
        _this2.duration = Date.now() - _this2.starttime;
      }).then(function () {
        return _this2.reporter && is_fn(_this2.reporter.after_all) && _this2.reporter.after_all(_this2);
      }).then(function () {
        return _this2;
      });
      return this.promise;
    }
  }]);

  return Suite;
}();

module.exports = Suite;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Err = __webpack_require__(7);

var Test = __webpack_require__(3);

var DOC = global.window && global.window.document;
var ICON_TPL = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA3XAAAN1wFCKJt4AAAAB3RJTUUH3wsZER*AAAAAElFTkSuQmCC';
var ICON_RED = ICON_TPL.replace('*', 'Y0VbWlewAAAB1JREFUOMtj/OJs9p+BAsDEQCEYNWDUgFEDBosBABZOAow9yV0y');
var ICON_GREEN = ICON_TPL.replace('*', 'kM+i8BKgAAAB1JREFUOMtj9Fkf8J+BAsDEQCEYNWDUgFEDBosBAIuhAmqCXURi');
var ICON_GREY = ICON_TPL.replace('*', 'kjUf48cwAAAB1JREFUOMtjDA0N/c9AAWBioBCMGjBqwKgBg8UAAFduAh79mcom');

var log = function log(x) {
  return console.log(x);
};

var noop = function noop() {
  return null;
};

var set_title = !DOC ? noop : function (title) {
  DOC.title = title;
};
var set_fav_icon = !DOC ? noop : function () {
  var head = DOC.querySelector('head');
  var rel = 'shortcut icon';
  return function (href) {
    var old_el = head.querySelector("link[rel=\"".concat(rel, "\"]"));

    if (old_el) {
      head.removeChild(old_el);
    }

    var el = DOC.createElement('link');
    el.rel = rel;
    el.href = href;
    head.appendChild(el);
  };
}();

var Reporter =
/*#__PURE__*/
function () {
  function Reporter() {
    _classCallCheck(this, Reporter);
  }

  _createClass(Reporter, [{
    key: "before_all",
    value: function before_all(suite) {
      var str = 'running ';

      if (suite.filtered_total !== suite.total) {
        str += "".concat(suite.filtered_total, " of ");
      }

      str += "".concat(suite.total, " tests\n ");
      log(str);
      set_title("running ".concat(suite.filtered_total, " tests..."));
      set_fav_icon(ICON_GREY); // take time to update icon

      return new Promise(function (resolve) {
        return setTimeout(function () {
          return resolve();
        }, 100);
      });
    }
  }, {
    key: "before_test",
    value: function before_test() {}
  }, {
    key: "after_test",
    value: function after_test(suite, test) {
      var status = test.status === Test.PASSED ? ' ok ' : test.status === Test.SKIPPED ? 'skip' : 'FAIL';
      log(" ".concat(status, " ").concat(test.desc));
    }
  }, {
    key: "after_all",
    value: function after_all(suite) {
      suite.tests.filter(function (test) {
        return test.status === Test.FAILED;
      }).forEach(function (test) {
        var str = new Err(test.err).format('  ', true, false);
        log("\n[".concat(test.failed_idx, "] ").concat(test.desc, "\n").concat(str));
      });
      var resume = '\n';

      if (suite.failed_count) {
        resume += "".concat(suite.failed_count, " failed, ");
      }

      if (suite.skipped_count) {
        resume += "".concat(suite.skipped_count, " skipped, ");
      }

      resume += "".concat(suite.passed_count, " passed (").concat(suite.duration, "ms)");
      log(resume);
      set_title(resume);
      set_fav_icon(suite.failed_count ? ICON_RED : ICON_GREEN);
    }
  }]);

  return Reporter;
}();

module.exports = Reporter;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var LINE_PATTERNS = [{
  // v8: ' at <method> (<url>:<line>:<col>)'
  re: /^\s*at\s+(.*?)\s+\((.*?)(?::(\d+))?(?::(\d+))?\)\s*$/,
  method: 1,
  url: 2,
  line: 3,
  column: 4
}, {
  // v8 no method: ' at <url>:<line>:<col>'
  re: /^\s*at\s+(.*?)(?::(\d+))?(?::(\d+))?\s*$/,
  method: null,
  url: 1,
  line: 2,
  column: 3
}, {
  // spidermonkey: '<method>@<url>:<line>:<col>'
  re: /^(.*?)@(.*?)(?::(\d+))?(?::(\d+))?\s*$/,
  method: 1,
  url: 2,
  line: 3,
  column: 4
}];
var RE_MARKER = /__TRACE_MARKER__$|^process\._tickCallback$/;

var parse_stack_line = function parse_stack_line(line) {
  for (var _i = 0, _LINE_PATTERNS = LINE_PATTERNS; _i < _LINE_PATTERNS.length; _i++) {
    var pattern = _LINE_PATTERNS[_i];
    var match = pattern.re.exec(line);

    if (match) {
      return {
        method: match[pattern.method] || '',
        url: match[pattern.url],
        basename: match[pattern.url].replace(/^.*\//, ''),
        line: parseInt(match[pattern.line], 10),
        column: parseInt(match[pattern.column], 10),
        drop: false
      };
    }
  }

  return null;
};

var parse_stack = function parse_stack(sequence, drop) {
  drop = Number(drop) || 0;
  var lines = sequence.split('\n');
  var frames = lines.map(function (line) {
    return parse_stack_line(line);
  }).filter(function (x) {
    return x;
  });
  var drop_frames = false;
  frames.forEach(function (frame, idx) {
    drop_frames = drop_frames || RE_MARKER.test(frame.method);
    frame.drop = idx < drop || drop_frames;
  });
  return frames;
};

var format_frame = function format_frame(frame, _short) {
  var loc = [_short ? frame.basename : frame.url, frame.line].filter(function (x) {
    return x;
  }).join('  ');
  return frame.method ? "".concat(loc, "  (").concat(frame.method, ")") : loc;
};

var format_frames = function format_frames(frames, _short2) {
  return frames.map(function (frame) {
    return format_frame(frame, _short2);
  }).join('\n');
};

var indent = function indent(str, prefix) {
  return prefix + str.replace(/\n/g, '\n' + prefix);
};

var Err =
/*#__PURE__*/
function (_Error) {
  _inherits(Err, _Error);

  function Err(arg) {
    var _this;

    _classCallCheck(this, Err);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Err).call(this));
    _this.name = 'Err';
    _this.message = '[no message]';
    _this.drop = 0;

    if (arg) {
      for (var _i2 = 0, _arr = ['name', 'message', 'stack', 'drop']; _i2 < _arr.length; _i2++) {
        var prop = _arr[_i2];

        if (arg[prop] !== undefined) {
          _this[prop] = arg[prop];
        }
      }
    }

    _this.frames = parse_stack(_this.stack, _this.drop);
    return _this;
  }

  _createClass(Err, [{
    key: "format",
    value: function format() {
      var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _short3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      var full_stack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var str = "".concat(this.name, ": ").concat(this.message, "\n");
      str += indent(format_frames(this.frames.filter(function (frame) {
        return full_stack || !frame.drop;
      }), _short3), '->  ');
      return indent(str, prefix);
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.format();
    }
  }]);

  return Err;
}(_wrapNativeSuper(Error));

module.exports = Err;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Err = __webpack_require__(7);

var HELP = "\n  scar - a test runner for node and the browser\n\n  Usage:\n    node tests.js [opt...] [arg...]\n    tests.html?opt&...&arg&...\n\n  Options:\n    -h: show this help message\n    -s: show test stats\n\n  Arguments:\n    all arguments are used as test filters\n\n";
var log = console.log.bind(console);

var create_filter_fn = function create_filter_fn(filters) {
  if (!filters || !filters.length) {
    return null;
  }

  return function (test) {
    return filters.every(function (filter) {
      return test.desc.includes(filter);
    });
  };
};

var parse_args = function parse_args() {
  var args = [];

  if (global.process) {
    args = global.process.argv.slice(2);
  } else if (global.window) {
    args = global.window.location.href.split(/[\?&]+/).slice(1);
  }

  return {
    show_help: args.includes('-h'),
    show_stats: args.includes('-s'),
    filters: args.filter(function (arg) {
      return arg.length && arg[0] !== '-';
    })
  };
};

var cli = function cli(scar, options) {
  return Promise.resolve().then(function () {
    var cli_opts = parse_args();

    if (cli_opts.show_help) {
      log(HELP);
    } else if (cli_opts.show_stats) {
      log("\n  ".concat(scar.tests.length, " tests defined\n \n"));
    } else {
      options = _objectSpread({}, options, {
        filter: create_filter_fn(cli_opts.filters)
      });
      return scar.run(options).then(function (suite) {
        if (global.process && suite.failed_count) {
          global.process.exit(1);
        }
      })["catch"](function (err) {
        log("\n".concat(new Err(err).format('  '), "\n"));

        if (global.process) {
          global.process.exit(2);
        }
      });
    }

    return null;
  });
};

module.exports = cli;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = __webpack_require__(4),
    is_fn = _require.is_fn,
    is_regexp = _require.is_regexp;

var insp = __webpack_require__(10);

var Err = __webpack_require__(7);

var get_type = function get_type(x) {
  return Reflect.apply(Object.prototype.toString, x, []);
};

var deep_equal = function deep_equal(a, b) {
  if (a === b || Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }

  var type = _typeof(a);

  if (type !== 'object' && type === _typeof(b)) {
    return a === b;
  }

  type = get_type(a);

  if (type !== get_type(b)) {
    return false;
  }

  if (type === '[object Array]') {
    return a.length === b.length && a.every(function (_, idx) {
      return deep_equal(a[idx], b[idx]);
    });
  }

  if (type === '[object Object]') {
    var keys = Object.keys(a);
    return deep_equal(keys.sort(), Object.keys(b).sort()) && keys.every(function (key) {
      return deep_equal(a[key], b[key]);
    });
  }

  return false;
};

var asrt = function asrt(expr, message) {
  var drop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;

  if (!expr) {
    throw new Err({
      name: 'AssertionError',
      message: message,
      drop: drop
    });
  }
};

var asrt_err = function asrt_err(err, exp, msg) {
  if (exp === undefined) {
    return;
  }

  if (is_regexp(exp)) {
    err = String(err);

    if (exp.test(err)) {
      return;
    }

    asrt(false, msg || "expected error ".concat(insp(err), " to be matched by ").concat(insp(exp)), 3);
  }

  if (is_fn(exp)) {
    exp(err);
    return;
  }

  if (err === exp) {
    return;
  }

  asrt(false, msg || "expected error ".concat(insp(err), " to be ").concat(insp(exp)), 3);
};

var assert = function assert(expr, msg) {
  asrt(expr, msg);
};

assert.fail = function (msg) {
  asrt(false, msg);
};

assert.ok = function (act, msg) {
  asrt(!!act, msg || "expected ".concat(insp(act), " to be truthy"));
};

assert.not_ok = function (act, msg) {
  asrt(!act, msg || "expected ".concat(insp(act), " to be falsy"));
};

assert.notOk = assert.not_ok;

assert.equal = function (act, exp, msg) {
  asrt(act === exp, msg || "expected ".concat(insp(act), " to equal ").concat(insp(exp)));
};

assert.not_equal = function (act, ref, msg) {
  asrt(act !== ref, msg || "expected ".concat(insp(act), " not to equal ").concat(insp(ref)));
};

assert.notEqual = assert.not_equal;

assert.deep_equal = function (act, exp, msg) {
  asrt(deep_equal(act, exp), msg || "expected ".concat(insp(act), " to deeply equal ").concat(insp(exp)));
};

assert.deepEqual = assert.deep_equal;

assert.not_deep_equal = function (act, ref, msg) {
  asrt(!deep_equal(act, ref), msg || "expected ".concat(insp(act), " not to deeply equal ").concat(insp(ref)));
};

assert.notDeepEqual = assert.not_deep_equal;

assert["throws"] = function (fn, exp, msg) {
  asrt(is_fn(fn), "expected ".concat(insp(fn), " to be a function"));
  var none = {};
  var val = none;

  try {
    val = fn();
  } catch (err) {
    asrt_err(err, exp, msg);
  }

  if (val !== none) {
    asrt(false, msg || "expected error but returned ".concat(val));
  }
};

assert.rejects = function (promise, exp, msg) {
  asrt(promise && is_fn(promise.then), "expected ".concat(insp(promise), " to be a thenable"));
  return Promise.resolve(promise).then(function (val) {
    return asrt(false, msg || "expected error but returned ".concat(val));
  }, function (err) {
    return asrt_err(err, exp, msg);
  });
};

module.exports = assert;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(4),
    is_str = _require.is_str,
    is_fn = _require.is_fn,
    is_arr = _require.is_arr,
    is_plain_obj = _require.is_plain_obj;

var insp = function insp(x) {
  var visited = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (visited.includes(x)) {
    return '[circular]';
  }

  visited.push(x);

  if (is_str(x)) {
    return "'".concat(x, "'");
  }

  if (is_fn(x)) {
    return String(x).split(')')[0] + ')';
  }

  if (is_arr(x)) {
    return '[' + Array.from(x, function (el) {
      return insp(el, visited);
    }).join(', ') + ']';
  }

  if (is_plain_obj(x)) {
    return '{' + Object.keys(x).map(function (key) {
      return "".concat(key, ": ").concat(insp(x[key], visited));
    }).join(', ') + '}';
  }

  return String(x);
};

module.exports = insp;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var _require = __webpack_require__(4),
    as_fn = _require.as_fn;

var spy = function spy(fn) {
  var calls = [];

  function wrapper() {
    'use strict'; // eslint-disable-line strict

    var call = {
      idx: calls.length,
      time: Date.now(),
      ctx: this,
      // eslint-disable-line no-invalid-this
      args: Array.from(arguments)
    };
    calls.push(call);
    call.ret = as_fn(fn)(call, calls);
    call.done = Date.now();
    return call.ret;
  }

  wrapper.calls = calls;
  return wrapper;
};

module.exports = spy;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

var PREFIX = 'UNIQ-';
var SUFFIX = '-ID';
var LENGTH = 4;
var ZEROPAD = '0000';
var RE_ID = new RegExp("^".concat(PREFIX, "\\d{").concat(LENGTH, "}").concat(SUFFIX, "$"));
var counter = 0;

var id = function id() {
  counter += 1;
  return PREFIX + (ZEROPAD + counter).substr(-LENGTH) + SUFFIX;
};

var is_id = function is_id(sequence) {
  return RE_ID.test(sequence);
};

var obj = function obj() {
  return {
    _uniq_id: id()
  };
};

var path = function path() {
  var ext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return '_uniq_path/' + id() + ext;
};

module.exports = {
  id: id,
  is_id: is_id,
  isId: is_id,
  obj: obj,
  path: path
};

/***/ })
/******/ ]);
});
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
								value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
								function Person() {
																var _name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'chao';

																var _age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 12;

																_classCallCheck(this, Person);

																this.name = _name;
																this.age = _age;
								}

								_createClass(Person, [{
																key: 'getName',
																value: function getName() {
																								return this.name;
																}
								}, {
																key: 'getAge',
																value: function getAge() {
																								return this.age;
																}
								}]);

								return Person;
}();

exports.default = Person;

},{}],2:[function(require,module,exports){
'use strict';

var _foo = require('./foo');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p1 = new _foo2.default();
alert('my name is: ' + p1.getName());

},{"./foo":1}]},{},[2,1])


//# sourceMappingURL=bundle.js.map

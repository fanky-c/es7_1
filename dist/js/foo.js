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
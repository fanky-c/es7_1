'use strict';

var _foo = require('./foo');

var _foo2 = _interopRequireDefault(_foo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var p1 = new _foo2.default();
alert('my name is: ' + p1.getName());
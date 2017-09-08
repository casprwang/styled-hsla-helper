'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('init test', function () {
  var color = 'hsla(0, 0%, 0%, 1)';
  expect((0, _2.default)(color, .8)).toBe('hsla(0, 0%, 0%, 0.8)');
  expect((0, _2.default)(color, .3)).toBe('hsla(0, 0%, 0%, 0.3)');
});
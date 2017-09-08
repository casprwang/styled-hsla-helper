'use strict';

var hslaChanger = function hslaChanger(color, num) {
  return color.slice(0, color.lastIndexOf(',')) + ', ' + parseFloat(color.slice(color.lastIndexOf(',') + 1, color.lastIndexOf(')'))) * num + ')';
};

module.exports = hslaChanger;
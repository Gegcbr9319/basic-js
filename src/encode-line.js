const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str ) {
  return (str.match(/(.)\1*/g) || [])
  .map(item => [item.length == 1 ? "" : item.length, item[0]].join(''))
  .join('');
}

module.exports = {
  encodeLine
};

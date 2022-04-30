const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.reduce((p, c) => p + (!Array.isArray(c) ? 0 : c.reduce((p, c) => p + (c !== "^^" ? 0 : 1), 0)), 0);
}

module.exports = {
  countCats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
 let result = new Object();
 domains.forEach(domain => {
   let key = "";
   domain.split('.').reverse().forEach(part =>{
     key = `${key}.${part}`;
     result[key] = Object.keys(result).includes(key) ? result[key] + 1 : 1 
   })
 })
 return result
}

module.exports = {
  getDNSStats
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason( date ) {
  if(!date){
    return 'Unable to determine the time of year!';

  }
  try{
    date.getTime();
  } catch {
    throw new Error(`Invalid date!`);
  }
  return [0, 1, 11].includes(date.getMonth()) ? "winter" : [2, 3, 4].includes(date.getMonth()) ? "spring" : [5, 6, 7].includes(date.getMonth()) ? "summer" : "fall";
}

module.exports = {
  getSeason
};

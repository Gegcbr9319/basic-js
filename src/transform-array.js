const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform( arr ) {
if(!Array.isArray(arr))
throw new Error (`'arr' parameter must be an instance of the Array!`);
let arr1 = [...arr]
let arr3 = [];
for (let i = 0; i < arr1.length; i++){
  if(arr1[i] === `--discard-next`){
  if(arr1[i+1]){
    arr1[i+1] = null;
  }  
  }
  else if(arr1[i] === `--discard-prev`) {
if(arr1[i - 1]){
 arr3.pop();
}
  }
  else if(arr1[i] === `--double-next`) {
  if(arr1[i + 1]){
    arr3.push(arr1[i + 1]);
  }

  }
  else if(arr1[i] === `--double-prev`) {
    if(arr1[i - 1]){
      arr3.push(arr1[i - 1]);  
    }

  }
  else{ if(arr1[i]){
    
arr3.push(arr1[i])}
  }
}
return arr3
}

module.exports = {
  transform
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
   return this.chain.length;
  },
  addLink(value) {
   if(value == undefined) this.chain.push('null');
   else this.chain.push(value);
   return this;
  },
  removeLink(position) {
    if(position > this.getLength() || isNaN(position) || (position <= 0) || (position % 1 > 0)){
      this.chain = [];
      throw new Error (`You can't remove incorrect link!`)
    }
    this.chain.splice(position -1, 1);
    return this;
    
  },
  reverseChain() {
   this.chain = this.chain.reverse();
   return this
  },
  finishChain() {
   let chain = this.chain.join(' )~~( ');
   chain = '( ' + chain + ' )';
   this.chain=[];
   return chain;
    
  }
};

module.exports = {
  chainMaker
};

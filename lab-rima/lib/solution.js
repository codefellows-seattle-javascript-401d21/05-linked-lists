'use strict';

const Sll = require('./sll');


function findMid(sll){
  if(!(sll instanceof Sll)){
    return false;
  }

  return sll.findNthNode(Math.ceil(sll.length / 2));
}

module.exports = findMid;

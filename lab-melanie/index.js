'use strict';

const sll = require('./lib/sll.js');

console.log(sll.SLL.reverse(
  {
    head: {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  })
);

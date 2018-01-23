'use strict';


const build = require('./lib/listbuild');


const arrayForTesting = [1,2,3,4];

let testlist = new build();

arrayForTesting.map(x => testlist.createHeadNode(x));
// testlist.createTailNode(2);
console.dir(testlist, {depth: null, colors: true});
testlist.reverse();
//testlist.removeNode(1);

//testlist.removeOffSet(0);
console.dir(testlist, {depth: null, colors: true});

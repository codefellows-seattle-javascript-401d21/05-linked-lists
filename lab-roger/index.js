'use strict';


const build = require('./lib/listbuild');


const arrayForTesting = [1];

let testlist = new build();

arrayForTesting.map(x => testlist.createHeadNode(x));
testlist.createTaillNode(2);

// testlist.reverse();
testlist.removeNode(1);

testlist.removeOffSet(0);

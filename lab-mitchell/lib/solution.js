'use strict';

const solution = module.exports = {};

solution.middleNode = (list) => {
  let listNodes = [];
  let obj = list;
  while (obj) {
    listNodes.push(obj);
    obj = obj.next;
  }
  let targetNode = Math.floor(listNodes.length / 2);
  return [listNodes[targetNode].value, listNodes[targetNode].next];
}

middleNode({
  value: 25, next:
    {
      value: 01, next:
        {
          value: 15, next:
            {
              value: 33, next:
                {
                  value: 04, next: null
                }
            }
        }
    }
});
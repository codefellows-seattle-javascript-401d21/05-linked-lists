var reverseList = function(head) {
    var result = null;
    var stack = [];

    var current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    // Set head to end of list.
    result = stack.pop() || [];
    current = result;

    while (current) {
        current.next = stack.pop();
        current = current.next;
    }

    return result;
};



var linkedList = {value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}

var reverseList = function(head) {
    var result = null;
    var stack = [];

    var current = head;
    while (current) {
        stack.push(current);
        current = current.next;
    }

    // Set head to end of list.
    result = stack.pop() || [];
    current = result;

    while (current) {
        current.next = stack.pop();
        current = current.next;
    }

    console.log(result);
};


reverseList(linkedList);




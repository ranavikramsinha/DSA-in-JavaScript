//* https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

var modifiedList = function(nums, head) {
    let set = new Set(nums);
    let previous = null;
    let current = head;

    while(current !== null && set.has(current.val)){
        head = head.next;
        current = head;
    }

    while(current !== null){
        if(!set.has(current.val)){
            previous = current;
            current = current.next;
        }
        else{
            previous.next = current.next;
            current = current.next;
        }
    }

    return head;
};
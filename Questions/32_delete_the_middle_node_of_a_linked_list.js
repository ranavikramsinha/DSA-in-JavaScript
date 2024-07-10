//* https://leetcode.com/problems/delete-the-middle-node-of-a-linked-list/description/

class ListNode {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

var deleteMiddle = function(head) {

    if(head === null || head.next === null){
        return null
    }

    let slowPointer = head
    let fastPointer = head
    let prevPointer = null

    while (fastPointer !== null && fastPointer.next !== null){
        prevPointer = slowPointer
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
    }

    prevPointer.next = slowPointer.next

    return head
    
};
//* https://leetcode.com/problems/linked-list-cycle-ii/

//* tc O(n) | sc O(1)
var detectCycle = function(head) {

    if(!head || !head.next){
        return null;
    }

    let slow = head;
    let fast = head;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            break;
        }
    }

    if(slow !== fast){
        return null;
    }

    let pointer = head;

    while(pointer !== slow){
        pointer = pointer.next;
        slow = slow.next;
    }

    return slow;
};
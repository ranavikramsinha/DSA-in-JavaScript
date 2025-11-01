//* https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/

//* tc : O(n) | sc : O(n)

var modifiedList = function(nums, head) {

    let set = new Set(nums);
    let dummy = new ListNode(0);
    let curr = dummy;
    curr.next = head;

    while(curr){
        while(curr.next && set.has(curr.next.val)){
                curr.next = curr.next.next;
        }
        
        curr = curr.next;
    }
    
    return dummy.next;
    
};
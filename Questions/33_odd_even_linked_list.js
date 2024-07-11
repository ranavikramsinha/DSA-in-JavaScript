//* https://leetcode.com/problems/odd-even-linked-list/

var oddEvenList = function(head) {

    if(head === null || head.next === null){
        return head
    }

    let oddHead = new ListNode()
    let oddTail = oddHead
    let evenHead = new ListNode()
    let evenTail = evenHead
    let index = 1

    while(head !== null){
        if(index % 2 === 0){
            evenTail.next = head
            evenTail = evenTail.next
        }
        else if(index % 2 !== 0){
            oddTail.next = head
            oddTail = oddTail.next
        }

        head = head.next
        index++
    }

        evenTail.next = null
        oddTail.next = evenHead.next

        return oddHead.next
    
};
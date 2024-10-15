//* https://leetcode.com/problems/linked-list-cycle/

//* tc O(n) | sc O(n)
var hasCycle = function(head) {

    if(!head || !head.next){
        return false;
    }

    let visitedNode = new Set();
    let currentNode = head;

    while(currentNode !== null){
        if(visitedNode.has(currentNode)){
            return true;
        }

        visitedNode.add(currentNode);
        currentNode = currentNode.next;
    }

    return false;
    
};

//* tc O(n + k) | sc O(1)
var hasCycle = function(head) {

    if(!head || !head.next){
        return false;
    }

    let slow = head;
    let fast = head.next;

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;

        if(slow === fast){
            return true;
        }
    }

    return false;
}
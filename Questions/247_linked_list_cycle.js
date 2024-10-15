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
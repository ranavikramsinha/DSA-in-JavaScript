//* https://leetcode.com/problems/split-linked-list-in-parts/

var splitListToParts = function(head, k) {
    let Length = 0;
    let current = head;

    while(current !== null){
        Length++;
        current = current.next;
    }

    let eachArrayNodes = Math.floor(Length / k);
    let remainingNodes = Length % k;

    let result = new Array(k).fill(null);

    let previous = null;
    current = head;
    
    for(let i = 0; i < k; i++){
        result[i] = current;

        let resultIArraySize = eachArrayNodes + (remainingNodes > 0 ? 1 : 0);

        for(let j = 1; j <= resultIArraySize; j++){
            previous = current;
            current = current.next;
        }

        if(previous !== null){
            previous.next = null;
        }

        remainingNodes--;
    }

    return result;
};
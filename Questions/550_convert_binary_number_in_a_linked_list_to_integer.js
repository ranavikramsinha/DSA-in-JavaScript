//* https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/

//* tc O(n) | sc O(1)

var getDecimalValue = function(head) {

    let result = 0;

    while(head !== null){
        result = (result << 1) | (head.val);

        head = head.next
    }

    return result;
    
};
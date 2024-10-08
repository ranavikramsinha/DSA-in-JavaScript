//* https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/

//* Iterative Approach
// var insertGreatestCommonDivisors = function(head) {
//     if(!head === null || !head.next === null){
//         return head;
//     }

//     function gcd(a, b){
//         while(b !== 0){
//             a = b;
//             b = a % b;
//         }

//         return a;
//     }

//     let currentNode = head;

//     while(currentNode.next){
//         let nextCurrentNode = currentNode.next;
//         let value = gcd(currentNode.val, nextCurrentNode.val);
//         let valueNode = new ListNode(value);
//         currentNode.next = valueNode;
//         valueNode.next = nextCurrentNode;
//         currentNode = nextCurrentNode;
//     }

//     return head;
// };

var insertGreatestCommonDivisors = function(head) {
    if(head === null || head.next === null){
        return head;
    }

    function gcd(a, b){
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    let currentNode = head;
    let nextCurrentNode = currentNode.next;

    while(currentNode.next){
        let value = gcd(currentNode.val, nextCurrentNode.val);
        let valueNode = new ListNode(value);
        
        currentNode.next = valueNode;
        valueNode.next = nextCurrentNode;
        currentNode = nextCurrentNode;
        nextCurrentNode = nextCurrentNode.next;
    }

    return head;
};

//* Recursive Approach
// var insertGreatestCommonDivisors = function(head) {
//     if(head === null || head.next === null){
//         return head;
//     }

//     function gcd(a, b){
//         while(b !== 0){
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }

//         return a;
//     }

//     let temp = insertGreatestCommonDivisors(head.next);
//     let value = gcd(head.val, head.next.val);
//     let valueNode = new ListNode(value);

//     valueNode.next = temp;
//     head.next = valueNode;

//     return head;
// };
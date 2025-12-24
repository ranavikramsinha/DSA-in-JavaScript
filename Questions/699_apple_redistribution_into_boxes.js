//* https://leetcode.com/problems/apple-redistribution-into-boxes/

//* tc : O(nlogn) | sc : O(1)

var minimumBoxes = function(apple, capacity) {

    let total = apple.reduce((a, b) => a + b);

    capacity.sort((a, b) => b - a);

    let need = 0;

    while (total > 0) {
        total -= capacity[need];
        need++;
    }

    return need;
    
};
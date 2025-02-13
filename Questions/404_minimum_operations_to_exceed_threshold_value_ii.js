//* https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/

//* tc O(nlogn) | sc O(n)

var minOperations = function(nums, k) {

    let n = nums.length;
    let count = 0;

    let priorityQueue = new MinPriorityQueue({ priority: x => x});

    for(let num of nums){
        priorityQueue.enqueue(num);
    }

    while(priorityQueue.size() > 1 && priorityQueue.front().element < k){
        let {element: num1} = priorityQueue.dequeue();
        let x = num1;

        let {element: num2} = priorityQueue.dequeue();
        let y = num2;

        let value = 2 * x + y;

        priorityQueue.enqueue(value);
        count++;
    }

    return count;
    
};
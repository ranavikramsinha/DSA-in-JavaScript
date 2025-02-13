//* https://leetcode.com/problems/minimum-operations-to-halve-array-sum/

//* tc O(nlogn) | sc O(n)

var halveArray = function(nums) {

    let n = nums.length;
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let half = parseFloat(totalSum / 2).toFixed(2);
    let count = 0;

    let priorityQueue = new MinPriorityQueue({ priority: x => x});

    for(let num of nums){
        priorityQueue.enqueue(-num);
    }

    while(totalSum > half){
        let {element: negativeValue} = priorityQueue.dequeue();
        let largest = Math.abs(negativeValue);

        let halfTheLargest = parseFloat(largest / 2).toFixed(2);

        totalSum -= halfTheLargest;

        priorityQueue.enqueue(-halfTheLargest);
        count++;
    }

    return count;
    
};
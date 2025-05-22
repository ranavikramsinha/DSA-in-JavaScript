//* https://leetcode.com/problems/zero-array-transformation-iii/

//* tc O(n + qlogn) | sc (n + q)

var maxRemoval = function(nums, queries) {

    let n = nums.length;
    let usedQueries = new MinPriorityQueue();
    let furthestDistance = new MaxPriorityQueue();
    let currentQuery = 0;
    let count = 0;

    queries.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    for(let i = 0; i < n; i++){
        while(currentQuery < queries.length && queries[currentQuery][0] === i){
            furthestDistance.enqueue(queries[currentQuery][1]);
            currentQuery++;
        }

        nums[i] -= usedQueries.size();

        while(nums[i] > 0 && !furthestDistance.isEmpty() && furthestDistance.front() >= i){
            usedQueries.enqueue(furthestDistance.dequeue());
            count++;
            nums[i]--;
        }

        if(nums[i] > 0){
            return -1;
        }

        while(!usedQueries.isEmpty() && usedQueries.front() === i){
            usedQueries.dequeue();
        }
    }

    return queries.length - count;
    
};
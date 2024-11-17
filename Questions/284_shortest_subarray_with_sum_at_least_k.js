//* https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/

//* tc O(n) | sc O(n)
var shortestSubarray = function(nums, k) {

    let n = nums.length;
    let dequeue = [];
    let prefixSums = new Array(n).fill(0);

    let minLength = Infinity;

    for(let i = 0; i < n; i++){
        if(i === 0){
            prefixSums[i] = nums[i];
        }
        else{
            prefixSums[i] = prefixSums[i - 1] + nums[i];
        }

        if(prefixSums[i] >= k){
            minLength = Math.min(minLength, i + 1);
        }

        while(dequeue.length > 0 && prefixSums[i] - prefixSums[dequeue[0]] >= k){
            minLength = Math.min(minLength, i - dequeue.shift());
        }

        while(dequeue.length > 0 && prefixSums[i] <= prefixSums[dequeue[dequeue.length - 1]]){
            dequeue.pop();
        }

        dequeue.push(i);
    }

    return minLength === Infinity ? -1 : minLength;
    
};
//* https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/

//* tc : O(n * k) | sc : O(n)

var findXSum = function(nums, k, x) {

    let map = new Map();
    let minHeap = new PriorityQueue((a, b) => a.count - b.count || a.val - b.val);
    let maxHeap = new PriorityQueue((a, b) => b.count - a.count || b.val - a.val);
    let leftSet = new Set();

    let cleanMinHeap = () => {
        while (minHeap.size() > 0 && (minHeap.front().count !== map.get(minHeap.front().val) || leftSet.has(minHeap.front().val) === false)) {
            minHeap.dequeue();
        }
    }
    
    let rightSet = new Set();

    let cleanMaxHeap = () => {
        while (maxHeap.size() > 0 && (maxHeap.front().count !== map.get(maxHeap.front().val) || rightSet.has(maxHeap.front().val) === false)) {
            maxHeap.dequeue();
        }
    }
    let res = [];
    let leftSum = 0;

    for (let right = 0; right < nums.length; right += 1) {
        map.set(nums[right], (map.get(nums[right]) ?? 0) + 1);

        if (leftSet.has(nums[right])) {
            leftSum += nums[right];
            minHeap.enqueue({val: nums[right], count: map.get(nums[right])});
        }
        else {
            maxHeap.enqueue({val: nums[right], count: map.get(nums[right])});
            rightSet.add(nums[right]);
        }

        if (right >= k) {
            map.set(nums[right - k], (map.get(nums[right - k]) ?? 0) - 1);

            if (leftSet.has(nums[right - k])) {
                leftSum -= nums[right - k];
                minHeap.enqueue({val: nums[right - k], count: map.get(nums[right - k])});
            }
        }

        while (leftSet.size < x && rightSet.size > 0) {
            cleanMaxHeap();

            let pop = maxHeap.dequeue();

            leftSet.add(pop.val);
            leftSum += pop.val * pop.count;
            rightSet.delete(pop.val);
            minHeap.enqueue(pop);
        }

        cleanMinHeap();
        cleanMaxHeap();

        if (maxHeap.size() > 0 && (minHeap.front().count < maxHeap.front().count || minHeap.front().count === maxHeap.front().count && minHeap.front().val < maxHeap.front().val)) {
            let minPop = minHeap.dequeue();
            leftSet.delete(minPop.val);
            leftSum -= minPop.val * minPop.count;

            let maxPop = maxHeap.dequeue();

            rightSet.delete(maxPop.val);
            maxHeap.enqueue(minPop);
            rightSet.add(minPop.val);
            minHeap.enqueue(maxPop);
            leftSet.add(maxPop.val);

            leftSum += maxPop.val * maxPop.count;

            cleanMinHeap();
            cleanMaxHeap();
        }

        if (right + 1 >= k) {
            res.push(leftSum);
        }
    }

    return res;
};
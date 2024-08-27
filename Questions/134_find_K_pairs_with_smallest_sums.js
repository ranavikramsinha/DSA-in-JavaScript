//* https://leetcode.com/problems/find-k-pairs-with-smallest-sums/

var kSmallestPairs = function(nums1, nums2, k) {
    let result = [];
    let priorityQueue = new MinPriorityQueue({compare: (a, b) => a[0] - b[0]});

    for(let i = 0; i < nums1.length; i++){
        priorityQueue.enqueue([nums1[i] + nums2[0], 0]);
    }

    while(k > 0 && !priorityQueue.isEmpty()){
        let [numbersSum, index] = priorityQueue.dequeue();
        result.push([numbersSum - nums2[index], nums2[index]]);

        if(index + 1 < nums2.length){
            priorityQueue.enqueue([numbersSum - nums2[index] + nums2[index + 1], index + 1]);
        }

        k--;
    }

    return result;
};
//* https://leetcode.com/problems/maximal-score-after-applying-k-operations/

//* tc O(n + klogn) | sc O(n)
var maxKelements = function(nums, k) {

    let score = 0;

    let maxHeap = new MaxPriorityQueue({priority: (x) => x});

    for(let num of nums){
        maxHeap.enqueue(num);
    }

    while(k--){
        let maxScore = maxHeap.dequeue().element;
        score += maxScore;

        maxScore = Math.ceil(maxScore / 3);
        maxHeap.enqueue(maxScore);
    }

    return score;
    
};
//* https://leetcode.com/problems/maximum-subsequence-score/

var maxScore = function(nums1, nums2, k) {

    let maxScore = 0
    let currentSum = 0
    let heap = new MinPriorityQueue({priority: (element) => element})

    const merged = nums1.map((nums1Val, i) => [nums2[i], nums1Val])

    merged.sort((a, b) => b[0] - a[0])

    for(const [maxOf2, num1Val] of merged){
        if(heap.size() === k){
            currentSum -= heap.dequeue().element
        }

        currentSum += num1Val
        heap.enqueue(num1Val)

        if(heap.size() === k){
            maxScore = Math.max(maxScore, currentSum * maxOf2)
        }
    }

    return maxScore
    
};
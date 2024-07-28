//* https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {

    nums.sort((a,b) => b - a)

    const largestKthNumber = nums[k - 1]

    return largestKthNumber

};


// var findKthLargest = function(nums, k) {

//    let maxElement = -Infinity

//    for(let i = 0; i < nums.length; i++){
//        if(nums[i] > maxElement){
//            maxElement = nums[i]
//        }
//    }

//    const map = {}

//    for(let i = 0; i < nums.length; i++){
//        const difference = maxElement - nums[i]
//        map[difference] = (map[difference] || 0) + 1
//    }

//    let count = 0
//    let difference = 0

//    while(count < k){
//        count += (map[difference] || 0)
//        difference++
//    }

//    return maxElement - difference + 1

// };
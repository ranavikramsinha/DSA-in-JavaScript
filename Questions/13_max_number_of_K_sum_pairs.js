//* https://leetcode.com/problems/max-number-of-k-sum-pairs/description/

// var maxOperations = function(nums, k) {

//     nums.sort((a, b) => a-b)

//     let left = 0
//     let right = nums.length - 1
//     let result = 0

//     while(left < right){
//         const sum = nums[left] + nums[right]
//         if(sum === k){
//             result++
//             left++
//             right--
//         }
//         else if(sum < k){
//             left++
//         }
//         else{
//             right--
//         }
//     }

//     return result
    
// };

// k = 10
// num = 2
// compliment = 8

var maxOperations = function(nums, k) {

    let map = new Map()
    let result = 0

    for(const num of nums){
        let compliment = k - num

        if(map.get(compliment) > 0){
            result++
            map.set(compliment, map.get(compliment) - 1)
        }
        else{
            map.set(num, (map.get(num) || 0) + 1)
        }
    }

    return result
    
};
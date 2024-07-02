//* https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/

var longestSubarray = function(nums) {

    let left = 0
    let right = 0
    let zeroCount = 0
    let maxLongest = 0

    for(right; right < nums.length; right++){
        if(nums[right] === 0){
            zeroCount++
        }

        if(zeroCount > 1){
            if(nums[left] === 0){
                zeroCount--
            }

            left++
        }

        if(zeroCount === 1){
            maxLongest = Math.max(maxLongest, right - left)
        }
    }

    return zeroCount === 0 ? nums.length - 1: maxLongest
    
};
 
console.log(longestSubarray([1, 1, 0, 1, 1, 0, 1, 1]))
 
//* 
//* Initial: left = 0, right = 0, zeroCount = 0, maxLongest = 0
//* 
//* Step-by-step:
//* 
//* 1. right = 0, nums[right] = 1
//*    Window: [1]
//*    zeroCount = 0
//*    maxLongest = 0
//* 
//* 2. right = 1, nums[right] = 1
//*    Window: [1, 1]
//*    zeroCount = 0
//*    maxLongest = 0
//* 
//* 3. right = 2, nums[right] = 0
//*    Window: [1, 1, 0]
//*    zeroCount = 1
//*    maxLongest = 2 - 0 = 2
//* 
//* 4. right = 3, nums[right] = 1
//*    Window: [1, 1, 0, 1]
//*    zeroCount = 1
//*    maxLongest = 3 - 0 = 3
//* 
//* 5. right = 4, nums[right] = 1
//*    Window: [1, 1, 0, 1, 1]
//*    zeroCount = 1
//*    maxLongest = 4 - 0 = 4
//* 
//* 6. right = 5, nums[right] = 0
//*    Window: [1, 1, 0, 1, 1, 0]
//*    zeroCount = 2
//*    Move left to reduce zeroCount:
//*    left = 1, Window: [1, 0, 1, 1, 0]
//*    left = 2, Window: [0, 1, 1, 0]
//*    left = 3, zeroCount = 1, Window: [1, 1, 0]
//*    maxLongest = 5 - 3 = 4
//* 
//* 7. right = 6, nums[right] = 1
//*    Window: [1, 1, 0, 1]
//*    zeroCount = 1
//*    maxLongest = 6 - 3 = 4
//* 
//* 8. right = 7, nums[right] = 1
//*    Window: [1, 1, 0, 1, 1]
//*    zeroCount = 1
//*    maxLongest = 7 - 3 = 4
//* 
//* Final Result: maxLongest = 4
//* 
//* https://leetcode.com/problems/max-consecutive-ones-iii/

var longestOnes = function(nums, k) {

    let left = 0
    let right = 0
    let zeroCount = 0
    let maxLongest = 0

    for(right; right < nums.length; right++){
        if(nums[right] === 0){
            zeroCount++
        }

        while(zeroCount > k){
            if(nums[left] === 0){
                zeroCount--
            }

            left++
        }

        maxLongest = Math.max(maxLongest, right - left + 1)
    }

    return maxLongest
    
};

console.log(longestOnes([1, 1, 0, 0, 1, 1, 0, 1, 1], 2))

//* 
//* nums = [1, 1, 0, 0, 1, 1, 0, 1, 1]
//* k = 2
//* 
//* Initially:
//* left = 0, right = 0, zeroCount = 0, maxLongest = 0
//* 
//* Step-by-Step:
//* 1. right = 0
//*    [1]
//*    zeroCount = 0, maxLongest = 1
//* 
//* 2. right = 1
//*    [1, 1]
//*    zeroCount = 0, maxLongest = 2
//* 
//* 3. right = 2
//*    [1, 1, 0]
//*    zeroCount = 1, maxLongest = 3
//* 
//* 4. right = 3
//*    [1, 1, 0, 0]
//*    zeroCount = 2, maxLongest = 4
//* 
//* 5. right = 4
//*    [1, 1, 0, 0, 1]
//*    zeroCount = 2, maxLongest = 5
//* 
//* 6. right = 5
//*    [1, 1, 0, 0, 1, 1]
//*    zeroCount = 2, maxLongest = 6
//* 
//* 7. right = 6
//*    [1, 1, 0, 0, 1, 1, 0]
//*    zeroCount = 3 (exceeds k)
//*    Move left to reduce zeroCount:
//*    [1, 0, 0, 1, 1, 0]
//*    left = 1, zeroCount = 3
//*    [0, 0, 1, 1, 0]
//*    left = 2, zeroCount = 3
//*    [0, 1, 1, 0]
//*    left = 3, zeroCount = 2
//* 
//* 8. right = 7
//*    [0, 1, 1, 0, 1]
//*    zeroCount = 2, maxLongest = 6
//* 
//* 9. right = 8
//*    [0, 1, 1, 0, 1, 1]
//*    zeroCount = 2, maxLongest = 6
//* 
//* https://leetcode.com/problems/minimum-size-subarray-sum/

var minSubArrayLen = function(target, nums) {
    let n = nums.length;
    let i = 0;
    let j = 0;
    let minimumLength = Infinity;
    let sum = 0;

    while(j < n){
        sum += nums[j];

        while(sum >= target){
            minimumLength = Math.min(minimumLength, j - i + 1);
            sum -= nums[i];
            i++;
        }
        j++;
    }

    return minimumLength === Infinity ? 0 : minimumLength;
};

//* 
//* Initial:
//* target = 7
//* nums = [2, 3, 1, 2, 4, 3]
//* n = 6
//* 
//* i = 0, j = 0, sum = 0, minimumLength = Infinity
//* 
//* Step 1: j = 0, nums[j] = 2
//*   sum = 0 + 2 = 2
//*   sum < target, so move j forward
//*   i = 0, j = 1
//* 
//* Step 2: j = 1, nums[j] = 3
//*   sum = 2 + 3 = 5
//*   sum < target, so move j forward
//*   i = 0, j = 2
//* 
//* Step 3: j = 2, nums[j] = 1
//*   sum = 5 + 1 = 6
//*   sum < target, so move j forward
//*   i = 0, j = 3
//* 
//* Step 4: j = 3, nums[j] = 2
//*   sum = 6 + 2 = 8
//*   sum >= target, so update minimumLength = min(Infinity, 4) = 4
//*   sum = 8 - nums[i] = 8 - 2 = 6
//*   i = 1, j = 4
//* 
//* Step 5: j = 4, nums[j] = 4
//*   sum = 6 + 4 = 10
//*   sum >= target, so update minimumLength = min(4, 4) = 4
//*   sum = 10 - nums[i] = 10 - 3 = 7
//*   i = 2, j = 5
//* 
//* Step 6: j = 5, nums[j] = 3
//*   sum = 7 + 3 = 10
//*   sum >= target, so update minimumLength = min(4, 3) = 3
//*   sum = 10 - nums[i] = 10 - 1 = 9
//*   i = 3
//*   sum >= target, so update minimumLength = min(3, 3) = 3
//*   sum = 9 - nums[i] = 9 - 2 = 7
//*   i = 4
//*   sum >= target, so update minimumLength = min(3, 2) = 2
//*   sum = 7 - nums[i] = 7 - 4 = 3
//*   i = 5
//* 
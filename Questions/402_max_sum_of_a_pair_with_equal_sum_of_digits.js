//* https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/

//* tc O(n) | sc O(1)

var maximumSum = function(nums) {

    let n = nums.length;
    let arr = new Array(90).fill(-1);
    let ans = -1;

    for(let i = 0; i < n; i++){
        let sum = digitSum(nums[i]);

        if(arr[sum] !== -1){
            ans = Math.max(ans, nums[i] + arr[sum]);
        }

        arr[sum] = Math.max(nums[i], arr[sum]);
    }

    return ans;

    function digitSum(num){
        let sum = 0;

        while(num){
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    } 
};

//* tc O(n) | sc O(n)

var maximumSum = function(nums) {

    let n = nums.length;
    let map = new Map();
    let ans = -1;

    for(let i = 0; i < n; i++){
        let sum = digitSum(nums[i]);

        if(map.get(sum)){
            ans = Math.max(ans, nums[i] + map.get(sum));

            map.set(sum, Math.max(map.get(sum), nums[i]));
        }
        else{
            map.set(sum, nums[i]);
        }
        
    }

    return ans;

    function digitSum(num){
        let sum = 0;

        while(num){
            sum += num % 10;
            num = Math.floor(num / 10);
        }

        return sum;
    }
    
};

//* tc O(n^2 × d) | sc O(1) where d is the number of digits (give TLE btw)

var maximumSum = function(nums) {

    let n = nums.length;
    let result = -1;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(i !== j){
                let num1 = nums[i];
                let num2 = nums[j];

                let sum1 = 0;
                let sum2 = 0;

                while(num1 || num2){
                    sum1 += num1 % 10;
                    num1 = Math.floor(num1 / 10);

                    sum2 += num2 % 10;
                    num2 = Math.floor(num2 / 10);
                }

                if(sum1 === sum2){
                    result = Math.max(result, nums[i] + nums[j]);
                }
            }
        }
    }

    return result;
    
};
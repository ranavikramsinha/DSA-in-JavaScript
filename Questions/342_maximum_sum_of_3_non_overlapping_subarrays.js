//* 

//* tc O(n) | sc O(1)

var maxSumOfThreeSubarrays = function(nums, k) {

    let n = nums.length;
    let currentSumFirst = 0;
    let currentSumSecond = 0;
    let currentSumThird = 0;
    let maxFirst = 0;
    let maxFirstAndSecond = 0;
    let maxFirstSecondAndThird = 0;
    let firstIndex = 0;
    let firstIndexInPair = 0;
    let secondIndexInPair = k;
    let result = [0, k, 2 * k];

    for (let i = 0; i < k; i++){
        currentSumFirst += nums[i];
        currentSumSecond += nums[i + k];
        currentSumThird += nums[i + 2 * k];
    }

    maxFirst = currentSumFirst;
    maxFirstAndSecond = currentSumFirst + currentSumSecond;
    maxFirstSecondAndThird = currentSumFirst + currentSumSecond + currentSumThird;

    for (let i = 0; i <= n - 3 * k; i++){
        if (i > 0){
            currentSumFirst = currentSumFirst - nums[i - 1] + nums[i + k - 1];
            currentSumSecond = currentSumSecond - nums[i + k - 1] + nums[i + 2 * k - 1];
            currentSumThird = currentSumThird - nums[i + 2 * k - 1] + nums[i + 3 * k - 1];
        }

        if (currentSumFirst > maxFirst){
            maxFirst = currentSumFirst;
            firstIndex = i;
        }

        if (maxFirst + currentSumSecond > maxFirstAndSecond){
            maxFirstAndSecond = maxFirst + currentSumSecond;
            firstIndexInPair = firstIndex;
            secondIndexInPair = i + k;
        }

        if (maxFirstAndSecond + currentSumThird > maxFirstSecondAndThird){
            maxFirstSecondAndThird = maxFirstAndSecond + currentSumThird;
            result = [firstIndexInPair, secondIndexInPair, i + 2 * k];
        }
    }

    return result;
};

//* tc O(n) | sc O(n)

var maxSumOfThreeSubarrays = function(nums, k) {

    let n = nums.length;
    let memo = Array.from({ length: n}, () => new Array(4).fill(-1));
    let allPossibleSum = [];
    let slidingWindowSum = 0;
    let i = 0;
    let j = 0;
    
    while(j < n){
        slidingWindowSum += nums[j];

        if(j - i + 1 === k){
            allPossibleSum.push(slidingWindowSum);
            slidingWindowSum -= nums[i];
            i++;
        }

        j++;
    }

    let ans = [];
    solve1(allPossibleSum, k, 0, 3, ans);

    return ans;

    function solve1(allPossibleSum, k, idx, count, ans){
        if(count === 0){
            return;
        }

        if(idx >= allPossibleSum.length){
            return;
        }

        let take = allPossibleSum[idx] + solve2(allPossibleSum, k, idx + k, count - 1);
        let notTake = solve2(allPossibleSum, k, idx + 1, count);

        if(take >= notTake){
            ans.push(idx);
            solve1(allPossibleSum, k, idx + k, count - 1, ans);
        }
        else{
            solve1(allPossibleSum, k, idx + 1, count, ans);
        }
    }

    function solve2(allPossible, k, idx, count){
        if(count === 0){
            return 0;
        }

        if(idx >= allPossibleSum.length){
            return -Infinity;
        }

        if(memo[idx][count] !== -1){
            return memo[idx][count];
        }

        let take = allPossibleSum[idx] + solve2(allPossibleSum, k, idx + k, count - 1);
        let notTake = solve2(allPossibleSum, k, idx + 1, count);

        memo[idx][count] = Math.max(take, notTake);
        return memo[idx][count];
    }
    
};
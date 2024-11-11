//* https://leetcode.com/problems/prime-subtraction-operation/

//* O(m⋅log(log(m)))+O(n⋅p) | O(m) where m represents the largest number in the input array nums
var primeSubOperation = function(nums) {
    let primes = primeNumbers(Math.max(...nums));
    let n = nums.length;
    let prev = nums[n - 1]

    for(let i = n - 2; i >= 0; i--){
        if(nums[i] < prev){
            prev = nums[i];
            continue;
        }

        let foundValidPrime = false;

        for(let prime of primes){
            if(nums[i] <= prime){
                break;
            }

            if(nums[i] - prime < prev){
                prev = nums[i] - prime;
                foundValidPrime = true;
                break;
            }
        }

        if(!foundValidPrime){
            return false;
        }
    }

    return true;

    function primeNumbers(num){
        let isPrime = new Array(num + 1).fill(true);
        isPrime[0] = false;
        isPrime[1] = false;

        for(let i = 2; i * i <= num; i++){
            if(isPrime[i]){
                for(let j = i * i; j <= num; j += i){
                    isPrime[j] = false;
                }
            }
        }

        let primeNumberList = [];
        
        for(let i = 2; i <= num; i++){
            if(isPrime[i]){
                primeNumberList.push(i);
            }
        }

        return primeNumberList;
    }
    
};
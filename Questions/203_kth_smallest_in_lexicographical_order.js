//* https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/

var findKthNumber = function(n, k) {
    let currentNumber = 1;
    k -= 1;

    while(k > 0){
        let count = solve(currentNumber, currentNumber + 1, n);

        if(count <= k){
            currentNumber++;
            k -= count;
        }
        else{
            currentNumber *= 10;
            k -= 1;
        }
    }

    return currentNumber;

    function solve(currentNumber, nextNumber, n){
        let countNumber = 0;

        while(currentNumber <= n){
            countNumber += (nextNumber - currentNumber);

            currentNumber *= 10;
            nextNumber *= 10;

            nextNumber = Math.min(nextNumber, n + 1);
        }

        return countNumber;
    }
};
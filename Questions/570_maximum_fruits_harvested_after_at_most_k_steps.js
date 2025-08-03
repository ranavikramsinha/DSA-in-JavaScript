//* https://leetcode.com/problems/maximum-fruits-harvested-after-at-most-k-steps/

//* tc : O(n * logn) | sc : O(n)

var maxTotalFruits = function(fruits, startPos, k) {

    let n = fruits.length;
    let prefixSum = new Array(n);
    let indices = new Array(n);

    for(let i = 0; i < n; i++){
        indices[i] = fruits[i][0];
        prefixSum[i] = fruits[i][1] +(i > 0 ? prefixSum[i - 1] : 0);
    }

    let maxFruits = 0;

    let lowerBound =(arr, target) =>{
        let left = 0, right = arr.length;
        while(left < right){
            let middle = Math.trunc((left + right) / 2);
            
            if(arr[middle] < target){
                left = middle + 1;
            } else{
                right = middle;
            }
        }
        return left;
    };

    let upperBound =(arr, target) =>{
        let left = 0, right = arr.length;

        while(left < right){
            let middle = Math.trunc((left + right) / 2);

            if(arr[middle] <= target){
                left = middle + 1;
            }
            else{
                right = middle;
            }
        }

        return left;
    };

    for(let d = 0; d <= Math.trunc(k / 2); d++){
        let remain = k - 2 * d;
        let i = startPos - d;
        let j = startPos + remain;

        let left = lowerBound(indices, i);
        let right = upperBound(indices, j) - 1;

        if(left <= right){
            let total = prefixSum[right] -(left > 0 ? prefixSum[left - 1] : 0);
            maxFruits = Math.max(maxFruits, total);
        }


        i = startPos - remain;
        j = startPos + d;

        left = lowerBound(indices, i);
        right = upperBound(indices, j) - 1;

        if(left <= right){
            let total = prefixSum[right] -(left > 0 ? prefixSum[left - 1] : 0);
            maxFruits = Math.max(maxFruits, total);
        }
    }

    return maxFruits;
    
};
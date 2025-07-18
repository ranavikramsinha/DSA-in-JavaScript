//* https://leetcode.com/problems/minimum-difference-in-sums-after-removal-of-elements/

//* tc O(nlogn) | sc O(n)

var minimumDifference = function(nums){

    let n = nums.length / 3;
    let maxPQ = heapify(nums.slice(0, n).map(x => -x), n);
    let min = new Array(n + 1);
    min[0] = maxPQ.reduce((acc, v) => acc - v, 0);

    for(let i = 1; i <= n; i++){
        if(nums[n - 1 + i] < -maxPQ[0]){
            let tmp = -heapreplace(maxPQ, n, -nums[n - 1 + i]);
            min[i] = min[i - 1] + nums[n - 1 + i] - tmp;
        }
        else{
            min[i] = min[i - 1];
        }
    }

    let minPQ = heapify(nums.slice(2*n), n);
    let max = Array(n + 1).fill(0);
    max[n] = minPQ.reduce((acc, v) => acc + v, 0);

    for(let i = 1; i <= n; i++){
        if(nums[2*n - i] > minPQ[0]){
            let tmp = heapreplace(minPQ, n, nums[2*n - i]);
            max[n - i] = max[n - i + 1] - tmp + nums[2*n - i];
        } 
        else{
            max[n - i] = max[n - i + 1];
        }
    }

    let ans = Number.MAX_VALUE;

    for(let i = 0; i <= n; i++){
        ans = Math.min(ans, min[i] - max[i]);
    }
    
    return ans;

    function shiftdown(arr, i, len){
        while(i*2 + 2 < len &&(arr[i] > arr[i*2 + 1] || arr[i] > arr[i*2 + 2])){
            let j = i*2 + 1;

            if(arr[j] > arr[j + 1]){
                j++;
            }

            let tmp = arr[j];

            arr[j] = arr[i];
            arr[i] = tmp;
            i = j;
        }

        if(i*2 + 2 == len){ 
            if(arr[i] > arr[i*2 + 1]){
                let tmp = arr[i*2 + 1];

                arr[i*2 + 1] = arr[i];
                arr[i] = tmp;
            }

            return;
        }
    }

    function heapify(arr, len){
        for(let i = Math.floor((len - 2)/2); i >= 0; i--){
            shiftdown(arr, i, len);
        }

        return arr;
    };

    function heapreplace(arr, len, val){
        let top = arr[0];
        arr[0] = val;

        shiftdown(arr, 0, len);

        return top;
    };
};
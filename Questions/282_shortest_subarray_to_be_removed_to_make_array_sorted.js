//* https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/

//* tc O(n) | sc O(1)
var findLengthOfShortestSubarray = function(arr) {

    let n = arr.length;
    let left = 0;
    let right = n - 1;

    while(left + 1 < n && arr[left] <= arr[left + 1]){
        left++;
    }

    if(left === n - 1){
        return 0;
    }

    while(right - 1 >= 0 && arr[right] >= arr[right - 1]){
        right--;
    }

    // if(left >= right){
    //     return 0;
    // }
    
    let ans = right;
    let i = 0;
    let j = right;

    while(i <= left){
        while(j < n && arr[i] > arr[j]){
            j++;
        }

        ans = Math.min(ans, j - i - 1);

        i++;
    }

    return ans;
};
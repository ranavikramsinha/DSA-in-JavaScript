//* https://leetcode.com/problems/peak-index-in-a-mountain-array/

//* tc O(log(n)) | sc O(1)

var peakIndexInMountainArray = function(arr) {

    let n = arr.length;

    if(n === 1 || arr[0] > arr[1]){
        return 0;
    }

    if(arr[n - 1] > arr[n - 2]){
        return n - 1;
    }

    let low = 0;
    let high = n - 1;

    while(low < high){
        let middle = low + Math.trunc((high - low) / 2);

        if(arr[middle] < arr[middle + 1]){
            low = middle + 1;
        }
        else{
            high = middle;
        }
    }

    return high;
    // return low;
    
};
//* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/

//* tc O(nlog(k)) | sc O(k)
var smallestRange = function(nums) {
    let k = nums.length;
    let arr = new Array(k).fill(0);
    let range = [-1000000, 1000000];

    while(true){
        let minElement = Infinity;
        let maxElement = -Infinity;
        let minElementListIndex = 0;

        for(let i = 0; i < k; i++){
            let listIndex = i;
            let elementIndex = arr[i]
            let element = nums[listIndex][elementIndex];

            if(element < minElement){
                minElement = element;
                minElementListIndex = listIndex;
            }

            maxElement = Math.max(maxElement, element);
        }

        if(maxElement - minElement < range[1] - range[0]){
            range[0] = minElement;
            range[1] = maxElement;
        }

        let nextIndex = arr[minElementListIndex] + 1;

        if(nextIndex >= nums[minElementListIndex].length){
            break;
        }

        arr[minElementListIndex] = nextIndex;
    }

    return range;
};
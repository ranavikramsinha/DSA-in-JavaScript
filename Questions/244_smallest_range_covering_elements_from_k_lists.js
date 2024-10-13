//* https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/

//* tc O(nlog(k)) | sc O(k)
var smallestRange = function(nums) {
    let k = nums.length;
    let minHeap = new MinPriorityQueue({priority: (x) => x[0]});
    let maxElement = -Infinity;

    for(let i = 0; i < k; i++){
        minHeap.enqueue([nums[i][0], i, 0]);
        maxElement = Math.max(maxElement, nums[i][0]);
    }

    let range = [-1000000, 1000000];

    while(minHeap.size()){
        let dequeuedItem = minHeap.dequeue();
        let minElement = dequeuedItem.element[0];
        let listIndex = dequeuedItem.element[1];
        let elementIndex = dequeuedItem.element[2];

        if(maxElement - minElement < range[1] - range[0]){
            range[0] = minElement;
            range[1] = maxElement;
        }

        if(elementIndex + 1 < nums[listIndex].length){
            let nextElement = nums[listIndex][elementIndex + 1];
            minHeap.enqueue([nextElement, listIndex, elementIndex + 1]);
            maxElement = Math.max(maxElement, nextElement);
        }
        else{
            break;
        }
    }

    return range;
};

//* tc O(n * k)) | sc O(k)
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
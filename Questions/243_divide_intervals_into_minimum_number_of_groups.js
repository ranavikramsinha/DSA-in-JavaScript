//* https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/

var minGroups = function(intervals) {

    intervals.sort((a, b) => a[0] - b[0]);

    let minHeap = new MinPriorityQueue();

    for(let interval of intervals){
        let start = interval[0];
        let end = interval[1];

        if(!minHeap.isEmpty() && minHeap.front().element < start){
            minHeap.dequeue();
        }

        minHeap.enqueue(end);
    }

    return minHeap.size();
    
};
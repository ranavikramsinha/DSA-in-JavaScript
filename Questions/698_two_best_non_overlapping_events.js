//* https://leetcode.com/problems/two-best-non-overlapping-events/

//* tc : O(nlogn) | sc : O(n)

var maxTwoEvents = function(events) {

    let n = events.length;

    events.sort((a, b) => a[0] - b[0]);

    let ends = events.toSorted((a, b) => a[1] - b[1]);

    let maxSum = 0;
    let bestPrevious = 0;
    let j = 0;

    for (let [start, end, value] of events) {
        while (j < n && ends[j][1] < start) {
            bestPrevious = Math.max(bestPrevious, ends[j][2]);
            j++;
        }

        maxSum = Math.max(maxSum, value, value + bestPrevious);

    }

    return maxSum;

};
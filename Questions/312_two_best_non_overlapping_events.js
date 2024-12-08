//* https://leetcode.com/problems/two-best-non-overlapping-events/

//* tc O(nlog(n)) | sc O(n)

var maxTwoEvents = function(startSortedEvents) {
    let endSortedEvents = [...startSortedEvents];

    endSortedEvents.sort((a, b) => a[1] - b[1]);
    startSortedEvents.sort((a, b) => a[0] - b[0]);

    let maxValueBeforeCurrentStart = 0;
    let maxValueOverall = 0;
    let endPointer = 0;

    for (let index = 0; index < startSortedEvents.length; index++){
        let [start, end, value] = startSortedEvents[index];

        while(endPointer < endSortedEvents.length && endSortedEvents[endPointer][1] < start){
            let endEventValue = endSortedEvents[endPointer][2];

            maxValueBeforeCurrentStart = Math.max(endEventValue, maxValueBeforeCurrentStart);
            endPointer++;
        }

        maxValueOverall = Math.max(maxValueBeforeCurrentStart + value, maxValueOverall);
    }

    return maxValueOverall;
};
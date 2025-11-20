//* https://leetcode.com/problems/set-intersection-size-at-least-two/

//* tc : O(nlogn) | sc : O(1)

var intersectionSizeTwo = function(intervals) {

    intervals.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]);

    let nums = 0;
    let a = -1
    let b = -1;

    for (let [start, end] of intervals) {
        let count = 0;

        if (a >= start) {
            count++;
        }
        if (b >= start) {
            count++;
        }

        if (count >= 2) {
            continue;
        }

        if (count === 1) {
            a = b;
            b = end;

            nums++;
        }
        else {
            a = end - 1;
            b = end;

            nums += 2;
        }
    }

    return nums;

};
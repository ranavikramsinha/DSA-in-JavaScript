//* https://leetcode.com/problems/find-the-number-of-ways-to-place-people-ii/

//* tc : O(n ^ 2) | sc : O(1)

var numberOfPairs = function(points) {

    let n = points.length;

    points.sort((a, b) => {
        if (a[0] === b[0]) {
            return b[1] - a[1];
        }

        return a[0] - b[0]; 
    });

    let result = 0;

    for (let i = 0; i < n; i++) {
        let x1 = points[i][0];
        let y1 = points[i][1];

        let bestY = -Infinity;

        for (let j = i + 1; j < n; j++) {
            let x2 = points[j][0];
            let y2 = points[j][1];

            if (y2 > y1) {
                continue;
            }

            if (y2 > bestY) {
                result++;
                bestY = y2;
            }
        }
    }

    return result;
    
};
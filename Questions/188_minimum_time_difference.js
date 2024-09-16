//* https://leetcode.com/problems/minimum-time-difference/

var findMinDifference = function(timePoints) {
    let n = timePoints.length;
    let minutes = new Array(n);

    for(let i = 0; i < n; i++){
        let time = timePoints[i];

        let hour = Number(time.substr(0, 2));
        let minute = Number(time.substr(3));
        
        minutes[i] = (hour * 60) + minute;
    }

    minutes.sort((a, b) => a - b);

    let result = Infinity;
    
    for(let i = 1; i < n; i++){
        result = Math.min(result, minutes[i] - minutes[i - 1]);
    }

    return Math.min(result, ((24 * 60) - minutes[n - 1]) + minutes[0]);
};
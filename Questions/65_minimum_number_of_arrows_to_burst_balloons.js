//* https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/

var findMinArrowShots = function(points) {

    points.sort((a, b) => a[0] - b[0]);
    const n = points.length;
    let prev = points[0];
    let count = 1;

    for(let i = 1; i < n; i++){
        let currentStartPoint = points[i][0];
        let currentEndPoint = points[i][1];

        let prevStartPoint = prev[0];
        let prevEndPoint = prev[1];

        if(currentStartPoint > prevEndPoint){
            count++;
            prev = points[i];
        }
        else{
            prev[0] = Math.max(prevStartPoint, currentStartPoint);
            prev[1] = Math.min(currentEndPoint, prevEndPoint)
        }
    }

    return count;
    
};
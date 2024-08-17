//* https://leetcode.com/problems/maximum-number-of-points-with-cost/

var maxPoints = function(points) {
    let m = points.length;
    let n = points[0].length;
    let prev = new Array(n).fill(0);
    let score = 0;

    for(let col = 0; col < n; col++){
        prev[col] = points[0][col];
    }

    for(let i = 1; i < m; i++){
        let current = new Array(n).fill(0);
        let left = new Array(n).fill(0);
        let right = new Array(n).fill(0);

        left[0] = prev[0];
        for(let j = 1; j < n; j++){
            left[j] = Math.max(prev[j], left[j - 1] - 1);
        }

        right[n - 1] = prev[n - 1];
        for(let j = n - 2; j >= 0; j--){
            right[j] = Math.max(prev[j], right[j + 1] - 1);
        }

        for(let j = 0; j < n; j++){
            current[j] = points[i][j] + Math.max(left[j], right[j]);
        }

        prev = current;
    }

    return Math.max(...prev);
};
//* https://leetcode.com/problems/find-minimum-time-to-reach-last-room-i/

//* tc O(v + e) where v is the number of cells and e is the number of edges (directions) | sc O(m * n)

var minTimeToReach = function(moveTime) {

    let m = moveTime.length;
    let n = moveTime[0].length;
    let arr = Array.from({ length: m}, () => new Array(n).fill(Infinity));
    arr[0][0] = 0;

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    dfs(0, 0, 0);

    return arr[m - 1][n - 1] === Infinity ? -1 : arr[m - 1][n - 1];

    function dfs(i, j, currentTime){
        if(i === m - 1 && j === n - 1){
            return;
        }

        for(let [directionI, directionJ] of directions){
            let newI = i + directionI;
            let newJ = j + directionJ;

            if(newI >= 0 && newI < m && newJ >= 0 && newJ < n){
                let countingSeconds = currentTime + 1 + Math.max(0, moveTime[newI][newJ] - currentTime);

                if(countingSeconds < arr[newI][newJ]){
                    arr[newI][newJ] = countingSeconds;

                    dfs(newI, newJ, countingSeconds);
                }
            }
        }
    }
    
};
//* https://leetcode.com/problems/map-of-highest-peak/

//* tc O(m * n) | sc O(m * n)

var highestPeak = function(isWater) {
    
    let m = isWater.length;
    let n = isWater[0].length;
    let arr = Array.from({ length : m}, () => new Array(n).fill(-1));
    let bfs = [];
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let count = 0

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(isWater[i][j] === 1){
                arr[i][j] = 0;
                bfs.push([i, j]);
            }
        }
    }

    while(count < bfs.length){
        let [i, j] = bfs[count];
        count++;

        for(let [dirI, dirJ] of directions){
            let newI = i + dirI;
            let newJ = j + dirJ;

            if(newI >= 0 && newI < m && newJ >= 0 && newJ < n && arr[newI][newJ] === -1){
                arr[newI][newJ] = arr[i][j] + 1;
                bfs.push([newI, newJ]);
            }
        }
    }

    return arr;

};
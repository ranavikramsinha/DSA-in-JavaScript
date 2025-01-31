//* https://leetcode.com/problems/making-a-large-island/

//* tc O(m * n) | sc O(m * n)

/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function(grid) {

    let n = grid.length;
    let maximum = 0;
    let map = new Map();
    let landNumber = 2;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                let count = dfs(grid, i, j, landNumber);
                maximum = Math.max(maximum, count);
                map.set(landNumber, count);
                landNumber++;
            }
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 0){
                let set = new Set();

                for(let direction of directions){
                    let newI = i + direction[0];
                    let newJ = j + direction[1];

                    if(newI >= 0 && newI < n && newJ >= 0 && newJ < n && grid[newI][newJ] !== 0){
                        set.add(grid[newI][newJ]);
                    }
                }

                let sum = 1;

                for(let i of set){
                    sum += map.get(i);
                }

                maximum = Math.max(maximum, sum);
            }
        }
    }

    return maximum !== 0 ? maximum : (n * n);

    function dfs(grid, i, j, landNumber){
        if(i < 0 || i >=n || j < 0 || j >= n || grid[i][j] !== 1){
            return  0;
        }

        grid[i][j] = landNumber;

        let count = 1;

        for(let direction of directions){
            let newI = i + direction[0];
            let newY = j + direction[1];

            count += dfs(grid, newI, newY, landNumber);
        }

        return count;
    }  
};
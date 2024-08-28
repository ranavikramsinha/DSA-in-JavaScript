//* https://leetcode.com/problems/count-sub-islands/

var countSubIslands = function(grid1, grid2) {
    let m = grid1.length;
    let n = grid2[0].length;
    let countSubIsland = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid2[i][j] === 1 && dfs(grid1, grid2, i, j)){
                countSubIsland++;
            }
        }
    }

    function dfs(grid1, grid2, i, j){
        if(i < 0 || i >= m || j < 0 || j >= n){
            return true;
        }

        if(grid2[i][j] !== 1){
            return true;
        }

        if(grid1[i][j] !== 1){
            return false;
        }

        grid2[i][j] = false;

        let result = true;
        let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

        for(let [directionI, directionJ] of directions){
            if(!dfs(grid1, grid2, i + directionI, j + directionJ)) {
                result = false;
            }
        }

        return result;
    }

    return countSubIsland;
};
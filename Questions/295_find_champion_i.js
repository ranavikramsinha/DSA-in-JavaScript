//* https://leetcode.com/problems/find-champion-i/

//* tc O(n*2) | sc O(1)

var findChampion = function(grid) {

    let n = grid.length;

    for(let i = 0; i < n; i++){

        let flag = true;

        for(let j = 0; j < n; j++){
            if(i === j){
                continue;
            }

            if(grid[i][j] !== 1){
                flag = false;
                break;
            }
        }

        if(flag){
            return i;
        }
    }

    return -1;
    
};
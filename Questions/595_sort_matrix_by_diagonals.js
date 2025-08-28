//* https://leetcode.com/problems/sort-matrix-by-diagonals/

//* tc : O(n^2 * log(n)) | sc : O(n^2)

var sortMatrix = function(grid){

    let n = grid.length;
    let mp = new Map();

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let diagonalKey = i - j;

            if(!mp.has(diagonalKey)){
                mp.set(diagonalKey, []);
            }

            mp.get(diagonalKey).push(grid[i][j]);
        }
    }

    for(let [key, arr] of mp.entries()){
        if(key >= 0){
            arr.sort((a, b) => a - b);
        }
        else{
            arr.sort((a, b) => b - a);
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let diagonalKey = i - j;
            let arr = mp.get(diagonalKey);

            grid[i][j] = arr.pop();
        }
    }

    return grid;
    
};
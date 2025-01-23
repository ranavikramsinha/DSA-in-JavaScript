//* https://leetcode.com/problems/count-servers-that-communicate/

//* tc O(m * n) * (n + m) | sc O(m * n)

var countServers = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let count = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){

                let flag = false;

                for(let col = 0; col < n; col++){
                    if(grid[i][col] === 1 && col !== j){
                        flag = true;
                        break;
                    }    
                }

                if(flag){
                    count++;
                }
                else{
                    for(let row = 0; row < m; row++){
                        if(grid[row][j] === 1 && row !== i){
                            flag = true;
                            break;
                        }
                    }

                    if(flag){
                        count++;
                    }
                }
            }
        }
    }

    return count;
    
};

//* tc O(m * n) | sc O(m * n)

var countServers = function(grid) {

    let m = grid.length;
    let n = grid.length;

    let rowCountArray = new Array(m).fill(0);
    let colCountArray = new Array(n).fill(0);
    let count = 0;

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1){
                rowCountArray[i]++;
                colCountArray[j]++;
            }
        }
    }

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(grid[i][j] === 1 && (rowCountArray[i] > 1 || colCountArray[j] > 1)){
                count++;
            }
        }
    }

    return count;
    
};
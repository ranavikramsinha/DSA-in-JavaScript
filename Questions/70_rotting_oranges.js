//* https://leetcode.com/problems/rotting-oranges

var orangesRotting = function(grid) {

    let n = grid.length;
    let m = grid[0].length;
    let fresh = 0;
    let time = 0;
    let queue = [];

    function isValid(i, j, n, m, grid){
        return i >= 0 && i < n && j >= 0 && j < m && grid[i][j] === 1;
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] === 2){
                queue.push([i, j]);
            }
            else if(grid[i][j] === 1){
                fresh++;
            }
        }
    }

    if(fresh === 0){
        return 0;
    }

    while(queue.length > 0){
        let q = queue.length;
        let temp = 0;

        for(let k = 0; k < q; k++){
            let [x1, y1] = queue.shift();

            let ax = [1, -1, 0, 0];
            let ay = [0, 0, 1, -1];

            for(let i = 0; i < 4; i++){
                let x = ax[i] + x1;
                let y = ay[i] + y1;

                if(isValid(x, y, n, m, grid)){
                    temp++;
                    grid[x][y] = 2;
                    queue.push([x, y]);
                }
            }
        }

        if(temp !== 0){
            time++;
        }
    }

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(grid[i][j] === 1){
                time = 0;
                break;
            }
        }
    }

    return (time === 0) ? -1 : time;
    
};
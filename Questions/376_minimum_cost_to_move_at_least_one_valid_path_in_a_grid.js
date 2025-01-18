//* https://leetcode.com/problems/minimum-cost-to-make-at-least-one-valid-path-in-a-grid/

//* tc O(m * n * log(m * n)) | sc O(m * n)

var minCost = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let result = Array.from({ length: m}, () => Array(n).fill(Infinity));
    let priorityQueue = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0]});

    priorityQueue.enqueue([0, 0, 0]);
    result[0][0] = 0;

    while(!priorityQueue.isEmpty()){
        let [currentCost, i, j] = priorityQueue.dequeue();

        if(result[i][j] < currentCost){
            continue;
        }

        for(let dir = 0; dir < 4; dir++){
            let newI = i + directions[dir][0];
            let newJ = j + directions[dir][1];

            if(newI >= 0 && newJ >= 0 && newI < m && newJ < n){
                let gridDirection = grid[i][j];
                let directionCost = (gridDirection - 1 !== dir) ? 1 : 0;
                let newCost = currentCost + directionCost;

                if(newCost < result[newI][newJ]){
                    result[newI][newJ] = newCost;
                    priorityQueue.enqueue([newCost, newI, newJ]);
                }
            }
        }
    }

    return result[m - 1][n - 1];

};
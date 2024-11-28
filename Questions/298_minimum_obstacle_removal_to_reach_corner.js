//* https://leetcode.com/problems/minimum-obstacle-removal-to-reach-corner/

//* tc O((m * n) * log(m * n)) | sc O(m * n)

var minimumObstacles = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];

    let result = Array.from({ length: m}, () => new Array(n).fill(Infinity));
    result[0][0] = 0;

    let priorityQueue = new MinPriorityQueue({ priority: x => x.weight});
    priorityQueue.enqueue({ weight: 0, position: [0, 0]});

    while(!priorityQueue.isEmpty()){
        let { element} = priorityQueue.dequeue();
        let { weight: obstacleRemoved, position} = element;
        let [i, j] = position;

        for(let direction of directions){
            let x = i + direction[0];
            let y = j + direction[1];

            if(x < 0 || x >= m || y < 0 || y >= n){
                continue;
            }

            let additionalObstacle = grid[x][y] === 1 ? 1 : 0;

            if(obstacleRemoved + additionalObstacle < result[x][y]){
                result[x][y] = obstacleRemoved + additionalObstacle;
                priorityQueue.enqueue({ weight: obstacleRemoved + additionalObstacle, position: [x, y]});
            }
        }
    }

    return result[m - 1][n - 1];
};
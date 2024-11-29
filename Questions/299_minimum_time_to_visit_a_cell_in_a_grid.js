//* https://leetcode.com/problems/minimum-time-to-visit-a-cell-in-a-grid/

//* tc: O(m * n * log(m * n)) | sc: O(m * n)

var minimumTime = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    if(grid[0][1] > 1 && grid[1][0] > 1){
        return -1;
    }

    let visited = Array.from({ length: m}, () => new Array(n).fill(false));
    let pq = new MinPriorityQueue( {priority: x => x.time});
    pq.enqueue({time: grid[0][0], row: 0, col: 0});

    while(!pq.isEmpty()){
        let { element} = pq.dequeue();
        let { time, row, col} = element;

        if(row === m - 1 && col === n - 1){
            return time;
        }

        if(visited[row][col]){
            continue;
        }

        visited[row][col] = true;

        for(let direction of directions){
            let x = row + direction[0];
            let y = col + direction[1];

            if(x < 0 || x >= m || y < 0 || y >= n || visited[x][y]){
                continue;
            }

            if(grid[x][y] <= time + 1){
                pq.enqueue({ time: time + 1, row: x, col: y});
            }
            else if((grid[x][y] - time) % 2 === 0){
                pq.enqueue({ time: grid[x][y] + 1, row: x, col: y});
            }
            else if((grid[x][y] - time) % 2 !== 0){
                pq.enqueue( {time: grid[x][y], row: x, col: y});
            }
        }
    }

    return -1;
};
//* https://leetcode.com/problems/swim-in-rising-water/

//* tc : O(n^2 * log(n)) | sc : O(n^2)

var swimInWater = function(grid) {
    
    const n = grid.length;
    const visited = Array.from({ length: n }, () => Array(n).fill(false));

    const pq = new MinPriorityQueue({ compare: (a, b) => a.time - b.time });
    pq.enqueue({ x: 0, y: 0, time: grid[0][0] });

    const directions = [[1,0],[-1,0],[0,1],[0,-1]];

    while (!pq.isEmpty()) {
        const { x, y, time } = pq.dequeue();

        if (visited[x][y]) {
            continue;
        }

        visited[x][y] = true;

        if (x === n - 1 && y === n - 1) {
            return time;
        }

        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= n || ny >= n || visited[nx][ny]) {
                continue;
            }

            pq.enqueue({ x: nx, y: ny, time: Math.max(time, grid[nx][ny]) });
        }
    }

    return -1;

};
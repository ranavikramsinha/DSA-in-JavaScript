//* https://leetcode.com/problems/trapping-rain-water-ii/

//* tc O(m * n * log(m * n)) | sc O(m * n)

var trapRainWater = function(heightMap) {

    let m = heightMap.length;
    let n = heightMap[0].length;

    if(m === 0 || n === 0){
        return 0;
    }

    let directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let pq = new MinPriorityQueue({ compare: (a, b) => a.height - b.height });
    let visited = Array.from({ length: m}, () => new Array(n).fill(false));

    for(let row = 0; row < m; row++){
        for(let col of [0, n - 1]){
            pq.enqueue({ height: heightMap[row][col], row, col });
            visited[row][col] = true;
        }
    }

    for(let col = 0; col < n; col++){
        for(let row of [0, m - 1]){
            if (!visited[row][col]) {
                pq.enqueue({ height: heightMap[row][col], row, col });
                visited[row][col] = true;
            }
        }
    }

    let filledWater = 0;
    let currentMax = 0;

    while(!pq.isEmpty()){
        let { height, row: i, col: j } = pq.dequeue();
        currentMax = Math.max(currentMax, height);

        for(let [dirI, dirJ] of directions){
            let newI = i + dirI;
            let newJ = j + dirJ;

            if(newI >= 0 && newJ >= 0 && newI < m && newJ < n && !visited[newI][newJ]){
                visited[newI][newJ] = true;
                filledWater += Math.max(0, currentMax - heightMap[newI][newJ]);
                pq.enqueue({ height: Math.max(currentMax, heightMap[newI][newJ]), row: newI, col: newJ });
            }
        }
    }

    return filledWater;
    
};
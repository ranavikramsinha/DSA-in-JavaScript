//* https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/

//* tc O(m * n * log(m * n)) | sc O(m * n)

var maxPoints = function(grid, queries) {

    let m = grid.length;
    let n = grid[0].length;
    let mapping = queries.map((x,y) => ({ value: x, index: y })).sort((a,b) => a.value - b.value);
    let directions = [[1,0], [0,1], [-1,0], [0,-1]];
    let priorityQueue = new MinPriorityQueue(([r,c]) => grid[r][c]);
    let visited = new Set();
    let result = new Array(queries.length);

    priorityQueue.enqueue([0,0]);
    visited.add(`${0},${0}`);

    let mappingIndex = 0, point = 0;

    while(priorityQueue.size()) {
        let [row, col] = priorityQueue.dequeue();

        while(mappingIndex < mapping.length && grid[row][col] >= mapping[mappingIndex].value) {
            result[mapping[mappingIndex].index] = point;
            mappingIndex++;
        }

        if(mappingIndex === mapping.length){
            break;
        }

        point++;

        for(let [dx,dy] of directions) {
            let nextR = row + dx;
            let nextC = col + dy;

            if(0 <= nextR && nextR < m && 0 <= nextC && nextC < n && !visited.has(`${nextR},${nextC}`)) {
                visited.add(`${nextR},${nextC}`);

                priorityQueue.enqueue([nextR, nextC]);
            }
        }
    }

    for(let i = mappingIndex; i < mapping.length; i++) {
        result[mapping[i].index] = point;
    }

    return result;
    
};
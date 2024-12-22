//* https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/

//* tc O((n + m) * log(n)) | sc O(n + m) where n is the height and m is the number of queries

var leftmostBuildingQueries = function(heights, queries) {

    let n = heights.length;
    let m = queries.length;
    let queue = Array.from({ length: n}, () => []);
    let priorityQueue = new MinPriorityQueue({ compare: (a, b) => a.height - b.height});
    let result = new Array(m).fill(-1);

    for(let i = 0; i < m; i++){
        let x = queries[i][0];
        let y = queries[i][1];

        let minIndex = Math.min(x, y);
        let maxIndex = Math.max(x, y);

        if(minIndex === maxIndex || heights[minIndex] < heights[maxIndex]){
            result[i] = maxIndex;
        }
        else{
            queue[maxIndex].push({ height: heights[minIndex], index: i});
        }
    }

    for(let j = 0; j < n; j++){
        while(!priorityQueue.isEmpty() && priorityQueue.front().height < heights[j]){
            let currentQuery = priorityQueue.dequeue();
            result[currentQuery.index] = j;
        }

        for(let query of queue[j]){
            priorityQueue.enqueue(query);
        }
    }
    return result;
};
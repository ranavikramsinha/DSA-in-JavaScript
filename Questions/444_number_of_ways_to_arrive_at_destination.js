//* https://leetcode.com/problems/number-of-ways-to-arrive-at-destination/

//* tc O(eLogv) | sc O(v + e)

var countPaths = function(n, roads) {

    let arr = Array.from({ length: n}, () => []);
    let distance = new Array(n).fill(Infinity);
    let ways = new Array(n).fill(0);
    distance[0] = 0;
    ways[0] = 1;

    let priorityQueue = new MinPriorityQueue(x => x.time);
    priorityQueue.enqueue({time: 0, node: 0});

    let modulee = (10 ** 9) + 7;

    for(let road of roads){
        let u = road[0];
        let v = road[1];
        let time = road[2];

        arr[u].push([v, time]);
        arr[v].push([u, time]);
    }

    while(!priorityQueue.isEmpty()){
        const { time: currentTime, node: currentNode } = priorityQueue.dequeue();

        if(currentTime > distance[currentNode]){
            continue;
        }

        for(let [node, roadTime] of arr[currentNode]){
            let newTime = currentTime + roadTime;

            if(newTime < distance[node]){
                distance[node] = newTime;
                ways[node] = ways[currentNode];

                priorityQueue.enqueue({ time: newTime, node: node});
            }
            else if(newTime === distance[node]){
                ways[node] = (ways[node] + ways[currentNode]) % modulee;
            }
        }
    }

    return ways[n - 1];
    
};
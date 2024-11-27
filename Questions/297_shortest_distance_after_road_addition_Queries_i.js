//* https://leetcode.com/problems/shortest-distance-after-road-addition-queries-i/

//* tc:- O(k(v+e)) | sc:- priorityQueue: O(v), map: O(v+e)

var shortestDistanceAfterQueries = function(n, queries) {
    let map = new Map();

    for(let i = 0; i < n - 1; i++){
        if(!map.has(i)){
            map.set(i, []);
        }

        map.get(i).push([i + 1, 1]);
    }

    let result = [];

    for(let [u, v] of queries){
        if(!map.has(u)){
            map.set(u, []);
        }

        map.get(u).push([v, 1]);
        result.push(dijkAlgo());
    }

    return result;

    function dijkAlgo(){
        let distance = new Array(n).fill(Infinity);
        distance[0] = 0;

        let priorityQueue = new MinPriorityQueue({ compare: (a, b) => a[0] - b[0] });
        priorityQueue.enqueue([0, 0]);

        while(!priorityQueue.isEmpty()){
            let [currentDistance, node] = priorityQueue.dequeue();

            if(node === n - 1){
                return distance[n - 1];
            }

            if(currentDistance > distance[node]){
                continue;
            }

            if(map.has(node)){
                for(let [neighbor, weight] of map.get(node)){
                    let newDistance = currentDistance + weight;

                    if(newDistance < distance[neighbor]){
                        distance[neighbor] = newDistance;
                        priorityQueue.enqueue([newDistance, neighbor]);
                    }
                }
            }
        }

        return distance[n - 1];
    }
    
};
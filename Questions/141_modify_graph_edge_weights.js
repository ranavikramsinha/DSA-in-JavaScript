//* https://leetcode.com/problems/modify-graph-edge-weights/

var modifiedGraphEdges = function(n, edges, source, destination, target) {

    function solve(edges, n, source, destination){
        let map = new Map();

        for(let edge of edges){
            if(edge[2] !== -1){
                let a = edge[0];
                let b = edge[1];
                let weight = edge[2];

                if(!map.has(a)){
                    map.set(a, []);
                }

                if(!map.has(b)){
                    map.set(b, []);
                }

                map.get(a).push([b, weight]);
                map.get(b).push([a, weight]);
            }
        }

        let priorityQueue = new MinPriorityQueue({priority: x => x[0]});
        let result = new Array(n).fill(Infinity);
        let visited = new Array(n).fill(false);

        result[source] = 0;
        priorityQueue.enqueue([0, source]);

        while(!priorityQueue.isEmpty()){
            let [currentDistance, currentNode] = priorityQueue.dequeue().element;

            if(visited[currentNode]){
                continue;
            }

            visited[currentNode] = true;

            if(map.has(currentNode)){
                for(let [c, weight] of map.get(currentNode)){
                    if(result[c] > currentDistance + weight){
                        result[c] = currentDistance + weight;
                        priorityQueue.enqueue([result[c], c]);
                    }
                }
            }
        }

        return result[destination];
    }

    let value = 2e9;
    let currentShortestDistance = solve(edges, n, source, destination);

    if(currentShortestDistance < target){
        return [];
    }

    let targetMatched = (currentShortestDistance === target);

    for(let edge of edges){
        if(edge[2] === -1){
            edge[2] = targetMatched ? value : 1;

            if(!targetMatched){
                let newShortestDistance = solve(edges, n, source, destination)

                if(newShortestDistance <= target){
                    targetMatched = true;
                    edge[2] += (target - newShortestDistance);
                }
            }    
        }
    }

    if(!targetMatched){
        return [];
    }

    return edges;
};
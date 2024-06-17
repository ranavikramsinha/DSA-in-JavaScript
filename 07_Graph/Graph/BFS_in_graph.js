const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
}

function BFS(graph, start){
    const queue = [start]
    const visited = new Set()

    while(queue.length > 0){
        const node = queue.shift()

        for(const neighbour of graph[node]){
            if(!visited.has(neighbour)){
                console.log(neighbour)
                visited.add(neighbour)
                queue.push(neighbour)
            }
        }
    }

    return visited
}

const visitedNodes = BFS(graph, 'a')
console.log(visitedNodes)

function BFSR(graph, start) {
    const visited = new Set();
    const queue = [start];
    
    function recursiveBFS(queue) {
        if (queue.length === 0) {
            return;
        }
        
        const nextQueue = [];
        
        for (const node of queue) {
            if (!visited.has(node)) {
                console.log(node);
                visited.add(node);
                
                for (const neighbour of graph[node]) {
                    if (!visited.has(neighbour)) {
                        nextQueue.push(neighbour);
                    }
                }
            }
        }
        
        recursiveBFS(nextQueue);
    }
    
    recursiveBFS(queue);
    
    return visited;
}

const visitedNodesRecursive = BFSR(graph, 'a');
console.log(visitedNodesRecursive);
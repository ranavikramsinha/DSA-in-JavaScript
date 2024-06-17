const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
}

//* iterative
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
console.log(visitedNodes) //* b,c,a,d and Set(4) { 'b', 'c', 'a', 'd' }

console.log("*****************************************")

//* recursive
function BFSR(graph, start) {
    const visited = new Set()
    const queue = [start]

    recursiveBFS(queue)  //* start the recursive BFS with the initial queue
    
    function recursiveBFS(queue) {
        if (queue.length === 0) {
            return //* if the queue is empty then return
        }
        
        const nextQueue = []
        
        for (const node of queue) {
            if (!visited.has(node)) {
                console.log(node)  //* print the node
                visited.add(node) //* mark the node as visited
                
                for (const neighbour of graph[node]) {
                    if (!visited.has(neighbour)) {
                        nextQueue.push(neighbour) //* add unvisited neighbors to nextQueue
                    }
                }
            }
        }
        
        recursiveBFS(nextQueue) //* recursively call with nextQueue
    } 
    
    return visited
}

const visitedNodesRecursive = BFSR(graph, 'a')
console.log(visitedNodesRecursive) //* a,b,c,d & Set(4) { 'a', 'b', 'c', 'd' }
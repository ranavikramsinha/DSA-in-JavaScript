const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e'],
}

//* iterative

function depthFirstSearch(graph, start){
    const stack = [start]
    const visited = new Set()

    while(stack.length > 0){
        const node = stack.pop()
        if(!visited.has(node)){
            console.log(node)
            visited.add(node)

            for(const neighbour of graph[node]){
                if(!visited.has(neighbour)){
                    stack.push(neighbour)
                }
            }
        }
    }

    return visited
}

depthFirstSearch(graph, 'a') //* The DFS algorithm visits nodes in the order of a, c, d, b starting from node a

const visitedNodes = depthFirstSearch(graph, 'a')
console.log(visitedNodes) //* Set(4) { 'a', 'c', 'd', 'b' }

console.log("************************************")

//* Recursive

function depthFirstSearchRecursive(graph, start, visited = new Set()){

    if(!visited.has(start)){
        console.log(start)
        visited.add(start)

        for(const neighbour of graph[start]){
            depthFirstSearchRecursive(graph, neighbour, visited)
        }
    }

    return visited

}

depthFirstSearchRecursive(graph, 'a')

const visitedNodesRecursive = depthFirstSearchRecursive(graph, 'a')
console.log(visitedNodesRecursive) //* Set(4) { 'a', 'b', 'c', 'd' }
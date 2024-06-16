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
}

depthFirstSearch(graph, 'a') //* The DFS algorithm visits nodes in the order of a, c, d, b starting from node a
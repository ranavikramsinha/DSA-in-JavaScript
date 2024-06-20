const graph = {
    a: ['b', 'c'],
    b: ['a', 'c', 'd'],
    c: ['a', 'b', 'd'],
    d: ['b', 'c'],
    e: ['f'],
    f: ['e'],
}

function connectedIsland(graph){
    const visited = new Set()
    let count = 0

    function DFS(node){
        if(!visited.has(node)){
            visited.add(node)

            for(const neighbour of graph[node]){
                DFS(neighbour)
            }
        }
    }

    for(const node in graph){
        if(!visited.has(node)){
            DFS(node)
            count++
        }
    }

    return count
}

console.log(connectedIsland(graph)) //* 2
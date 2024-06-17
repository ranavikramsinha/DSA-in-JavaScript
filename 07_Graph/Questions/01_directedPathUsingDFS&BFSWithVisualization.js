/*
Given two nodes (start and dest) in a directed acyclic graph (DAG), return true if there is a directed path from start to dest, otherwise return false.

Example 1:

Input: start = 1, dest = 3
Output: true
Explanation: There is a directed path 1 -> 2 -> 3.
Example 2:

Input: start = 1, dest = 4
Output: false
Explanation: There is no path from 1 to 4.

*/

const graph = {
    a : ['b', 'c'],
    b: ['d', 'e'],
    c: ['f'],
    d: [],
    e: ['f'],
    f: []
}


function directedPathDFS(graph, start, dest){
    const stack = [start]
    const visited = new Set()
    console.log(`Starting DFS from ${start} to ${dest}`)

    while(stack.length > 0){
        const node = stack.pop()
        console.log(`Popped ${node} from stack`)

        if(node === dest){
            console.log(`Found destination ${dest}`)
            return true
        }

        if(!visited.has(node)){
            visited.add(node)
            console.log(`Visited ${node}`)

            for(const neighbour of graph[node]){
                console.log(`Adding neighbour ${neighbour} of ${node} to stack`)
                stack.push(neighbour)
            }
        }
    }

    console.log(`No path found from ${start} to ${dest}`)
    return false
}


function directedPathBFS(graph, start, dest){
    const queue = [start]
    const visited = new Set()
    console.log(`Starting BFS from ${start} to ${dest}`)

    while(queue.length > 0){
        const node = queue.shift()
        console.log(`Dequeued ${node} from queue`)

        if(node === dest){
            console.log(`Found destination ${dest}`)
            return true
        }

        if(!visited.has(node)){
            visited.add(node)
            console.log(`Visited ${node}`)

            for(const neighbour of graph[node]){
                console.log(`Adding neighbour ${neighbour} of ${node} to queue`)
                queue.push(neighbour)
            }
        }
    }

    console.log(`No path found from ${start} to ${dest}`)
    return false
}


console.log(directedPathDFS(graph, 'a', 'f')) //* true
console.log(directedPathDFS(graph, 'd', 'e')) //* false
console.log(directedPathBFS(graph, 'a', 'f')) //* true
console.log(directedPathBFS(graph, 'd', 'e')) //* false
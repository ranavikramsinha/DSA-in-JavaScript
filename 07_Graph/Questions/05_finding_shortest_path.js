//* finding shortest path in graph (BFS method)

const edges = [
    ['a', 'b'],
    ['b', 'c'],
    ['c', 'd'],
]

function createGraph(edges) {
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) {
            graph[a] = []
        }

        if (!(b in graph)) {
            graph[b] = []
        }

        graph[a].push(b)
        graph[b].push(a)
    }

    console.log("Graph created:", graph)
    return graph
}

function shortestPath(edges, start, dest) {
    const graph = createGraph(edges)
    const queue = [[start, 0]]
    const visited = new Set([start])

    console.log("Initial queue:", queue)
    console.log("Initial visited set:", visited)

    while (queue.length > 0) {
        const [node, distance] = queue.shift()
        console.log(`Dequeued node: ${node} with distance: ${distance}`)

        if (node === dest) {
            console.log(`Destination ${dest} found with distance: ${distance}`)
            return distance //* return distance when destination is found & also return [node, distance] if returning both node and distance
        }

        for (const neighbour of graph[node]) {
            if (!visited.has(neighbour)) {
                visited.add(neighbour)
                queue.push([neighbour, distance + 1])
                console.log(`Queued neighbour: ${neighbour} with distance: ${distance + 1}`)
            }
        }
        console.log("Queue after processing node:", queue)
    }
}

const start = 'a'
const dest = 'd'
const distance = shortestPath(edges, start, dest)
console.log(`Shortest distance from ${start} to ${dest}: ${distance}`)

//* 
//* Graph created: { a: [ 'b' ], b: [ 'a', 'c' ], c: [ 'b', 'd' ], d: [ 'c' ] }
//* Initial queue: [ [ 'a', 0 ] ]
//* Initial visited set: Set { 'a' }
//* Dequeued node: a with distance: 0
//* Queued neighbour: b with distance: 1
//* Queue after processing node: [ [ 'b', 1 ] ]
//* Dequeued node: b with distance: 1
//* Queued neighbour: c with distance: 2
//* Queue after processing node: [ [ 'c', 2 ] ]
//* Dequeued node: c with distance: 2
//* Queued neighbour: d with distance: 3
//* Queue after processing node: [ [ 'd', 3 ] ]
//* Dequeued node: d with distance: 3
//* Destination d found with distance: 3
//* Shortest distance from a to d: 3
//* 
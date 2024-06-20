//*
//* const edges = [
//*   ['b', 'a'],
//*   ['c', 'a'],
//*   ['b', 'c'],
//*   ['q', 'r'],
//*   ['q', 's'],
//*   ['q', 'u'],
//*   ['q', 't'],
//* ];
//* 
//* const graph = {
//*   b: [a,c],
//*   a: [b,c],
//*   c: [a,b],
//* }
//* 
//* loop => check if DOES NOT exist, then add key => push both nodes
//* 
//* Write a function, undirectedPath, that takes in an array of edges for an undirected graph and two nodes.
//* 
//* After that you can find and node path etc.
//* Take care of cycle via visited technique.
//* 

const edges = [
    ['b', 'a'],
    ['c', 'a'],
    ['b', 'c'],
    ['q', 'r'],
    ['q', 's'],
    ['q', 'u'],
    ['q', 't'],
]

function createGraph(edges){
    const graph = {}

    for(const edge of edges){
        const [a, b] = edge
        if(!(a in graph)){
            graph[a] = []
        }

        if(!(b in graph)){
            graph[b] = []
        }

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

//* find a path from start to dest-key

function directedPathRecursive(graph, start, dest, visited = new Set()) {
    
    if (start === dest) {
        return true
    }

    if (visited.has(start)) {
        return false
    }

    visited.add(start)

    for (const neighbour of graph[start]) {
        if (directedPathRecursive(graph, neighbour, dest, visited) === true) {
            return true
        }
    }

    return false
}

function bundle(edges, start, dest){
    const graph = createGraph(edges)
    return directedPathRecursive(graph, start, dest)
}

//* graph will be after createGraph
//*
//* const graph = {
//*     a: ['b', 'c'],
//*     b: ['a', 'c'],
//*     c: ['a', 'b'],
//*     q: ['r', 's', 'u', 't'],
//*     r: ['q'],
//*     s: ['q'],
//*     u: ['q'],
//*     t: ['q']
//* }
//*

console.log(bundle(edges, 'q', 'u')) //* true
console.log(bundle(edges, 'b', 'u')) //* false
console.log(bundle(edges, 'a', 'c')) //* true
console.log(bundle(edges, 'c', 'a')) //* true
console.log(bundle(edges, 'q', 't')) //* true
console.log(bundle(edges, 't', 'q')) //* true
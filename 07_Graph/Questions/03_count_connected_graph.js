const graph = {
    1: ['2', '3'],
    2: ['3'],
    3: [],
    4: ['5'],
    5: ['6', '7'],
    6: [],
    7: ['8'],
    8: [],
    9: [],
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

console.log(connectedIsland(graph)) //* 3

//* const graph = {
//*     a: ['b', 'c'],
//*     b: ['a', 'c', 'd'],
//*     c: ['a', 'b', 'd'],
//*     d: ['b', 'c'],
//*     e: ['f'],
//*     f: ['e'],
//* }
//* 
//* => Initial State:
//* 
//* visited = {}
//* count = 0
//*
//* => Processing Node 'a':
//* 
//* dfs(a) is called.
//* visited = {a}
//* dfs(b) is called from a.
//* visited = {a, b}
//* dfs(c) is called from b.
//* visited = {a, b, c}
//* dfs(d) is called from c.
//* visited = {a, b, c, d}
//* All reachable nodes from 'a' are visited, increment count to 1.
//*
//* => Skipping Already Visited Nodes:
//* 
//* Nodes 'b', 'c', and 'd' are already visited, so they are skipped.
//*
//* => Processing Node 'e':
//* 
//* dfs(e) is called.
//* visited = {a, b, c, d, e}
//* dfs(f) is called from e.
//* visited = {a, b, c, d, e, f}
//* All reachable nodes from 'e' are visited, increment count to 2.
//*
//* => Skipping Already Visited Node:
//* 
//* Node 'f' is already visited, so it is skipped.
//* Final State:
//* visited = {a, b, c, d, e, f}
//* count = 2
//*
//* => The graph has two connected components (islands):
//* 
//* {a, b, c, d}
//* {e, f}
//* 
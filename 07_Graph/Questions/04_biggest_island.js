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

function biggestIsland(graph){
    const visited = new Set()
    let largest = 0

    function dfs(node){
        if(visited.has(node)){
            return 0
        }

        visited.add(node)
        let size = 1

        for(const neighbour of graph[node]){
            size += dfs(neighbour) //* size = size + dfs(neighbour)
        }

        return size
    }

    for(const node in graph){
        if(!visited.has(node)){
            const componentSize = dfs(node)
            
            if(componentSize > largest){
                largest = componentSize
            }
        }
    }

    return largest
}

console.log(biggestIsland(graph))

//* 
//* 1. Initialization:
//*    visited = {}
//*    largest = 0
//* 
//* 2. Iterate over each node in the graph:
//*    
//*    Node 'a' not visited:
//*    Call dfs('a')
//*    - visited = {a}
//*    - size = 1
//*      - Call dfs('b')
//*        - visited = {a, b}
//*        - size = 1
//*          - Call dfs('a') -> already visited, returns 0
//*          - Call dfs('c')
//*            - visited = {a, b, c}
//*            - size = 1
//*              - Call dfs('a') -> already visited, returns 0
//*              - Call dfs('b') -> already visited, returns 0
//*              - Call dfs('d')
//*                - visited = {a, b, c, d}
//*                - size = 1
//*                  - Call dfs('b') -> already visited, returns 0
//*                  - Call dfs('c') -> already visited, returns 0
//*                - Returns 1
//*            - size = 2 (c + d)
//*          - size = 3 (b + c + d)
//*      - size = 4 (a + b + c + d)
//*    - Returns 4
//*    - largest = 4
//* 
//*    Node 'b' already visited, skip
//*    Node 'c' already visited, skip
//*    Node 'd' already visited, skip
//* 
//*    Node 'e' not visited:
//*    Call dfs('e')
//*    - visited = {a, b, c, d, e}
//*    - size = 1
//*      - Call dfs('f')
//*        - visited = {a, b, c, d, e, f}
//*        - size = 1
//*          - Call dfs('e') -> already visited, returns 0
//*        - Returns 1
//*    - size = 2 (e + f)
//*    - Returns 2
//*    - largest = 4 (remains unchanged)
//* 
//*    Node 'f' already visited, skip
//* 
//* 3. Return largest:
//*    largest = 4
//* 
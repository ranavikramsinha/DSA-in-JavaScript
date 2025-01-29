//* https://leetcode.com/problems/redundant-connection/

//* tc O(n * n) | sc O(n)

var findRedundantConnection = function(edges) {

    let n = edges.length;

    let map = new Map();

    for(let [a, b] of edges){
        let visited = new Set();

        if(map.has(a) && map.has(b) && dfs(a, b, visited)){
            return [a, b];
        }

        if(!map.has(a)){
            map.set(a, []);
        }

        if(!map.has(b)){
            map.set(b, []);
        }

        map.get(a).push(b);
        map.get(b).push(a);
    }

    return [];

    function dfs(a, b, visited){
        if(a === b){
            return true;
        }

        visited.add(a);

        for(let neighbor of (map.get(a) || [])){
            if(visited.has(neighbor)){
                continue;
            }

            if(dfs(neighbor, b, visited)){
                return true;
            }
        }

        return false;
    }
    
};
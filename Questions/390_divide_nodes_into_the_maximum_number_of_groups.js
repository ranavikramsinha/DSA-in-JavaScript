//* https://leetcode.com/problems/divide-nodes-into-the-maximum-number-of-groups/

//* tc O(v2 + ve) | sc O(v + e)

var magnificentSets = function(n, edges) {

    let map = new Map();
    
    for(let [a, b] of edges){
        a -= 1;
        b -= 1;
        if(!map.has(a)){
            map.set(a, []);
        }
        if(!map.has(b)){
            map.set(b, []);
        }

        map.get(a).push(b);
        map.get(b).push(a);
    }
    
    let colour = new Array(n).fill(-1);

    for(let node = 0; node < n; node++){
        if(colour[node] === -1 && !isBipartite(node, colour, 1)){
            return -1;
        }
    }

    function isBipartite(current, colour, currentcolour){
        colour[current] = currentcolour;

        for(let neighbor of map.get(current) || []){
            if(colour[neighbor] === colour[current]){
                return false;
            }

            if(colour[neighbor] === -1 && !isBipartite(neighbor, colour, 1 - currentcolour)){
                return false;
            }
        }
        return true;
    }
    
    let level = new Array(n).fill(0);

    for(let node = 0; node < n; node++){
        level[node] = bfs(node);
    }

    function bfs(currentNode){

        let queue = [currentNode];
        let visited = new Array(n).fill(false);
        visited[currentNode] = true;
        let level = 1;
        
        while (queue.length){
            let size = queue.length;

            while (size--){
                let current = queue.shift();

                for(let neighbor of map.get(current) || []){
                    if(visited[neighbor]){
                        continue;
                    }

                    queue.push(neighbor);
                    visited[neighbor] = true;
                }
            }

            level++;
        }
        return level - 1;
    }
    
    let maximumOfEachGroup = 0;
    let visited = new Array(n).fill(false);
    
    for(let node = 0; node < n; node++){
        if(!visited[node]){
            maximumOfEachGroup += solve(node, visited, level);
        }
    }
    
    return maximumOfEachGroup;

    function solve(current, visited, level){

        let maximumGroup = level[current];
        visited[current] = true;
        
        for(let neighbor of map.get(current) || []){
            if(!visited[neighbor]){
                maximumGroup = Math.max(maximumGroup, solve(neighbor, visited, level));
            }
        }
        return maximumGroup;
    }
};
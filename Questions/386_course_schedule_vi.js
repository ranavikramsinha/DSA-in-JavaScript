//* https://leetcode.com/problems/course-schedule-iv/

//* tc O(V + E) | sc O(V + E)

var checkIfPrerequisite = function(numCourses, prerequisites, queries) {

    let map = new Map();
    let arr = [];

    for(let [a, b] of prerequisites){
        if(!map.has(a)){
            map.set(a, []);
        }

        map.get(a).push(b);
    }

    for(let [a, b] of queries){
        let visited = new Array(numCourses).fill(false);

        arr.push(dfs(map, a, b, visited));
    }

    return arr;

    function dfs(map, i, j, visited){
        visited[i] = true;

        if(i === j){
            return true;
        }

        let neighborOfI = map.get(i) || [];

        for(let k of neighborOfI){
            if(!visited[k]){
                if(dfs(map, k, j, visited)){
                    return true
                }
            }
        }

        return false;

    }
    
};
//* https://leetcode.com/problems/count-the-number-of-complete-components/

//* tc O(v + e) | sc O(v + e)

var countCompleteComponents = function(n, edges) {

    let map = new Map();
    let visited = new Array(n).fill(false);
    let result = 0;

    for(let i = 0; i < n; i++){
        map.set(i, []);
    }

    for(let edge of edges){
        let u = edge[0];
        let v = edge[1];

        map.get(u).push(v);
        map.get(v).push(u);
    }

    for(let i = 0; i < n; i++){
        if(!visited[i]){
            let count = { v: 0, e: 0};

            dfs(i, map, visited, count);

            if((count.v * (count.v - 1)) === count.e){
                result++;
            }
        }
    }

    return result;

    function dfs(i, map, visited, count_of_v_and_e){
        visited[i] = true;

        count_of_v_and_e.v += 1;
        count_of_v_and_e.e += map.get(i).length;

        for(let num of map.get(i)){
            if(!visited[num]){
                dfs(num, map, visited, count_of_v_and_e);
            }
        }
    }
    
};
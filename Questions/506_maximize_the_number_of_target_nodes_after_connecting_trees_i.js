//* https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/

//* tc O(v * (v + e)) | sc O(v + e)

var maxTargetNodes = function(edges1, edges2, k) {

    let n1 = edges1.length + 1;
    let n2 = edges2.length + 1;
    let arr1 = solve(edges1, k, n1);
    let arr2 = solve(edges2, k - 1, n2);
    let maximum = Math.max(...arr2);

    for(let i = 0; i < arr1.length; i++){
        arr1[i] += maximum;
    }

    return arr1;

    function solve(edges, distance, size){
        let map = new Map();
        let arr = new Array(size);

        for(let [u, v] of edges){
            if(!map.has(u)){
                map.set(u, []);
            }

            map.get(u).push(v);

            if(!map.has(v)){
                map.set(v, []);
            }

            map.get(v).push(u);
        }

        for(let i = 0; i < size; i++){
            arr[i] = dfs(i, map, distance, null);
        }

        return arr;
    }

    function dfs(node, map, distance, nodeParent){
        if(distance < 0){
            return 0;
        }

        let count = 1;

        for(let neighbour of (map.get(node) || [])){
            if(neighbour !== nodeParent){
                count += dfs(neighbour, map, distance - 1, node);
            }
        }

        return count;
    }
    
};
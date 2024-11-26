//* https://leetcode.com/problems/find-champion-ii/

//* tc O(n + e) | sc O(n) where n is the number of nodes and e is the number of edges

var findChampion = function(n, edges) {

    let arr = new Array(n).fill(0);

    for(let edge of edges){
        let u = edge[0];
        let v = edge[1];

        arr[v]++;
    }

    let result = -1;
    let count = 0;

    for(let i = 0; i < n; i++){
        if(arr[i] === 0){
            result = i;
            count++

            if(count > 1){
                return -1;
            }
        }
    }

    return result;
    
};
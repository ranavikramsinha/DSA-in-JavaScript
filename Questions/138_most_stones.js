//* https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/

var removeStones = function(stones) {
    let n = stones.length;
    let set = new Set();
    let count = 0;

    function dfs(stones, i, set){
        set.add(`${stones[i][0]},${stones[i][1]}`);

        for(let j = 0; j < n; j++){
            let row = stones[j][0];
            let column = stones[j][1];
            if(!set.has(`${row},${column}`) && (stones[i][0] === row || stones[i][1] === column)){
                dfs(stones, j, set);
            }
        }
    }

    for(let i = 0; i < n; i++){
        if(set.has(`${stones[i][0]},${stones[i][1]}`)){
            continue;
        }

        dfs(stones, i, set);
        count++;
    }

    return n - count;
};
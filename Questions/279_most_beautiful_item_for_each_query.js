//* https://leetcode.com/problems/most-beautiful-item-for-each-query/

//* tc O((n+m)Log(n)) | sc O(n) where n is number of items and m is number of queries
var maximumBeauty = function(items, queries) {

    let n = items.length;
    let m = queries.length;

    items.sort((a, b) => a[0] - b[0]);

    let maxBeauty = new Array(n).fill(0);
    maxBeauty[0] = items[0][1];

    for(let i = 1; i < n; i++){
        maxBeauty[i] = Math.max(maxBeauty[i - 1], items[i][1]);
    }

    let result = new Array(m).fill(0);

    for(let i = 0; i < m; i++){
        let current = queries[i];
        let left = 0;
        let right = n - 1;
        let profit = -1

        while(left <= right){
            let middle = left + Math.trunc((right - left) / 2);

            if(items[middle][0] > current){
                right = middle - 1;
            }
            else{
                profit = middle;
                left = middle + 1;
            }
        }

        if(profit === -1){
            continue;
        }

        result[i] = maxBeauty[profit];
    }

    return result;
    
};
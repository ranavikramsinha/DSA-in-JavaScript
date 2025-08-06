//* https://leetcode.com/problems/fruits-into-baskets-iii/

//* tc : O(n * log(n)) | sc : O(n)

var numOfUnplacedFruits = function(fruits, baskets) {

    let n = fruits.length;
    let arr = new Array(4 * n).fill(-1);

    let build = (i, l, r) =>{
        if(l === r){
            arr[i] = baskets[l];
            return;
        }

        let m = Math.floor((l + r) / 2);

        build(2 * i + 1, l, m);
        build(2 * i + 2, m + 1, r);
        arr[i] = Math.max(arr[2 * i + 1], arr[2 * i + 2]);
    };

    let query = (i, l, r, val) =>{
        if(arr[i] < val){
            return false;
        }

        if(l === r){
            arr[i] = -1;
            return true;
        }

        let m = Math.floor((l + r) / 2);
        let placed = arr[2 * i + 1] >= val ? query(2 * i + 1, l, m, val) : query(2 * i + 2, m + 1, r, val);

        arr[i] = Math.max(arr[2 * i + 1], arr[2 * i + 2]);
        return placed;
    };


    build(0, 0, n - 1);

    let unplaced = 0;

    for(let f of fruits){
        if(!query(0, 0, n - 1, f)){
            unplaced++;
        }
    }

    return unplaced;
    
};
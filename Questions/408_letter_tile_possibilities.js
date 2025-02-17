//* https://leetcode.com/problems/letter-tile-possibilities/

//* tc O(2^n) | sc O(n)

var numTilePossibilities = function(tiles) {

    let n = tiles.length;
    let arr = new Array(26).fill(0);
    let count = 0;

    for(let char of tiles){
        arr[char.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }

    solve(arr);

    return count - 1;

    function solve(arr){
        count++;

        for(let i = 0; i < 26; i++){
            if(arr[i] === 0){
                continue;
            }

            arr[i]--;

            solve(arr);

            arr[i]++;
        }
    }
    
};

//* tc O(n!) | sc O(n * n!) + O(n)

var numTilePossibilities = function(tiles) {

    let n = tiles.length;
    let str = '';
    let set = new Set();
    let alreadyUsed = new Array(n).fill(false);

    solve(tiles, str, set, alreadyUsed);

    return set.size - 1;

    function solve(tiles, str, set, alreadyUsed){
        set.add(str);

        for(let i = 0; i < n; i++){
            if(alreadyUsed[i] === true){
                continue;
            }

            str += tiles[i];
            alreadyUsed[i] = true;

            solve(tiles, str, set, alreadyUsed);

            str = str.slice(0, -1);
            alreadyUsed[i] = false;
        }
    }
    
};
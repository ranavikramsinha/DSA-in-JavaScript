//* https://leetcode.com/problems/domino-and-tromino-tiling/

//* tc O(n) | sc O(n)

var numTilings = function(n) {

    if(n === 1 && n === 2){
        return n;
    }

    if(n === 3){
        return 5;
    }

    let arr = new Array(n + 1).fill(0);
    arr[1] = 1;
    arr[2] = 2;
    arr[3] = 5;
    
    let modulo = 10 ** 9 + 7;

    for(let i = 4; i <= n; i++){
        arr[i] = (2 * arr[i - 1] % modulo + arr[i - 3] % modulo) % modulo;
    }

    return arr[n];
    
};
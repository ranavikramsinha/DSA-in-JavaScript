//* https://leetcode.com/problems/domino-and-tromino-tiling/

var numTilings = function(n) {

    if(n === 1){
        return 1
    }

    if(n === 2){
        return 2
    }

    if(n === 3){
        return 5
    }
    
    let arr1 = new Array(n+1)
    arr1[1] = 1
    arr1[2] = 2

    let arr2 = new Array(n+1)
    arr2[1] = 1
    arr2[2] = 1

    for(let i = 3; i < n+1; i++){
        arr1[i] = (arr1[i-2] + arr1[i-1] + 2*arr2[i-1]) % (10**9 + 7)
        arr2[i] = (arr2[i-1] + arr1[i-2]) % (10**9 + 7)
    }

    return arr1[n]
};
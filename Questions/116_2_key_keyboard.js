//* https://leetcode.com/problems/2-keys-keyboard

var minSteps = function(n) {
    if(n === 1){
        return 0;
    }

    if(n === 2){
        return 2;
    }

    let min = 0;
    let factor = 2;

    while(n > 1){
        while(n % factor === 0){
            min += factor;
            n = Math.floor(n / factor);
        }
        factor++;
    }

    return min;
};

//* DP (Recursion + Memo)
// var minSteps = function(n) {
//     if(n === 1){
//         return 0;
//     }

//     let t = Array.from({length: n + 1}, () => Array(n + 1).fill(-1));

//     function solve(currentA, charA, n){
//         if(currentA === n){
//             return 0;
//         }

//         if(currentA > n){
//             return 1000;
//         }

//         if(t[currentA][charA] !== -1){
//             return t[currentA][charA];
//         }

//         let copy = 1 + 1 + solve(currentA + currentA, currentA, n);

//         let paste = 1 + solve(currentA + charA, charA, n);

//         t[currentA][charA] = Math.min(copy, paste);

//         return t[currentA][charA];
//     }

//     return 1 + solve(1, 1, n);
// };
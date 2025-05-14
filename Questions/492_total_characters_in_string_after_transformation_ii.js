//* https://leetcode.com/problems/total-characters-in-string-after-transformations-ii/

//* tc O(n + log(t)) | sc O(1) = O(26 * 26)

var lengthAfterTransformations = function(s, t, nums) {

    let arr = Array.from({ length: 26}, () => Array(26).fill(0n));
    let modulo = 1000000007n;
    let result = 0n;

    for(let i = 0; i < 26; i++){
        for(let j = 1; j <= nums[i]; j++){
            arr[(i + j) % 26][i] = 1n;
        }
    }

    let matrix = matrixExpo(arr, t);
    let frequency = new Array(26).fill(0);

    for(let character of s){
        frequency[character.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let i = 0; i < 26; i++){
        for(let j = 0; j < 26; j++){
            result = (result + matrix[i][j] * BigInt(frequency[j])) % modulo;
        }
    }

    return Number(result);

    function matrixExpo(matrix, expo){

        let same = Array.from({ length: 26}, (_, i) => Array.from({ length: 26}, (_, j) => i === j ? 1 : 0));

        if(expo === 0){
            return same;
        }

        let half = matrixExpo(matrix, Math.trunc(expo / 2));
        let res  = matrixMultiply(half, half);

        if(expo % 2 === 1){
            res = matrixMultiply(res, matrix);
        }

        return res;
    }

    function matrixMultiply(x, y){
        let multiply = Array.from({ length: 26}, () => new Array(26).fill(0n));

        for(let i = 0; i < 26; i++){
            for(let j = 0; j < 26; j++){
                for(let k = 0; k < 26; k++){
                    multiply[i][j] = (multiply[i][j] + x[i][k] * y[k][j]) % modulo;
                }
            }
        }

        return multiply;
    }
    
};
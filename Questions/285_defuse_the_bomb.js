//* https://leetcode.com/problems/defuse-the-bomb/

//* tc O(n) | sc O(n)
var decrypt = function(code, k) {
    let n = code.length;
    let result = new Array(n).fill(0);
    
    if(k === 0) {
        return result;
    }
    
    let start = k > 0 ? 1 : k;
    let end = k > 0 ? k : -1;
    let sum = 0;

    for(let i = start; i <= end; i++) {
        sum += code[(i + n) % n];
    }

    for(let i = 0; i < n; i++) {
        result[i] = sum;

        sum -= code[(start + i + n) % n];
        sum += code[(end + 1 + i + n) % n];
    }

    return result;
};
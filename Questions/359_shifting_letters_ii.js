//* https://leetcode.com/problems/shifting-letters-ii/

//* tc O(n) | sc O(1)

var shiftingLetters = function(s, shifts) {
    
    let n = s.length;
    let m = shifts.length;
    let arr = new Array(n).fill(0);

    for(let i = 0; i < m; i++){
        let start = shifts[i][0];
        let end = shifts[i][1];
        let value = shifts[i][2] === 0 ? -1 : 1;

        arr[start] += value;
        
        if(end + 1 < n){
            arr[end + 1] -= value;
        }
    }

    for(let i = 1; i < n; i++){
        arr[i] += arr[i - 1];
    }

    let result = s.split("");

    for(let i = 0; i < n; i++){

        let j = arr[i] % 26;

        result[i] = String.fromCharCode(((s.charCodeAt(i) - "a".charCodeAt(0) + j + 26) % 26) + "a".charCodeAt(0));
    }

    return result.join("");
    
};
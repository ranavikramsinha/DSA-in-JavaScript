//* https://leetcode.com/problems/shifting-letters/

//* tc O(n) | sc O(n)

var shiftingLetters = function(s, shifts) {

    let n = s.length;
    let m = shifts.length;
    let j = 0
    let arr = s.split("");

    for(let i = m - 1; i >= 0; i--){
        
        j = (j + shifts[i]) % 26;

        arr[i] = String.fromCharCode(((s.charCodeAt(i) - "a".charCodeAt(0) + j) % 26) + "a".charCodeAt(0));
    }

    return arr.join("");
    
};
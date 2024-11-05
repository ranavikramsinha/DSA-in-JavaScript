//* https://leetcode.com/problems/minimum-number-of-changes-to-make-binary-string-beautiful/

//* tc O(n) | sc O(1)
var minChanges = function(s) {

    let n = s.length;
    let count = 0;

    for(let i = 0; i < n; i += 2){

        if(s[i] !== s[i + 1]){
            count++;
        }
    }

    return count;
    
};
//* https://leetcode.com/problems/check-if-one-string-swap-can-make-strings-equal/

//* tc O(n) | sc O(1)

var areAlmostEqual = function(s1, s2) {

    let m = s1.length;
    let n = s2.length;

    if(m !== n){
        return false;
    }

    let count = 0;
    let indexPosition1 = 0;
    let indexPosition2 = 0;

    for(let i = 0; i < m; i++){
        if(s1[i] !== s2[i]){
            count++;

            if(count > 2){
                return false;
            }
            else if(count === 1){
                indexPosition1 = i;
            }
            else{
                indexPosition2 = i;
            }
        }
        
    }

    return (s1[indexPosition1] === s2[indexPosition2] && s1[indexPosition2] === s2[indexPosition1]);
    
};
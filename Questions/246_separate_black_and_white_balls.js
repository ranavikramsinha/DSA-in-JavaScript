//* https://leetcode.com/problems/separate-black-and-white-balls/

var minimumSteps = function(s) {

    let n = s.length;
    let count = 0;
    let step = 0;

    for(let i = 0; i < n; i++){
        if(s[i] !== '0'){
            count++
        }
        else{
            step += count;
        }
    }

    return step;
    
};
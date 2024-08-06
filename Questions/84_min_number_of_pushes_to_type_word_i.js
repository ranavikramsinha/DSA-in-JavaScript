//* https://leetcode.com/problems/minimum-number-of-pushes-to-type-word-i/

var minimumPushes = function(word) {

    let n = word.length;
    let result = 0;
    let arr = new Array(10).fill(0);
    let assignKey = 2;

    for(let i = 0; i < n; i++){
        if(assignKey > 9){
            assignKey = 2;
        }

        arr[assignKey]++;
        result += arr[assignKey];

        assignKey++;
    }

    return result;
    
};
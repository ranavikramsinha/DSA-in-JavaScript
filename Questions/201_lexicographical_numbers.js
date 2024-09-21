//* https://leetcode.com/problems/lexicographical-numbers/

var lexicalOrder = function(n) {

    let result = [];

    for(let i = 1; i <= 9; i++){
        solve(i, n, result);
    }

    return result;

    function solve(currentNumber, n, result){
        if(currentNumber > n){
            return;
        }

        result.push(currentNumber);

        for(let i = 0; i <= 9; i++){
            let newNumber = currentNumber * 10 + i;

            if(newNumber > n){
                return;
            }

            solve(newNumber, n, result);
        }
    }
    
};
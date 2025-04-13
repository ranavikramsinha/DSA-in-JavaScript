//* https://leetcode.com/problems/count-good-numbers

//* tc O(log(n)) | sc O(1)

var countGoodNumbers = function(n) {

    let modulo = 1000000007n;

    let result = solve(5n, BigInt(Math.trunc((n + 1) / 2))) * solve(4n, BigInt(Math.trunc(n / 2))) % modulo;

    return Number(result);

    function solve(num1, num2){

        if(num2 === 0n){
            return 1n;
        }

        let halvePower = solve(num1, num2 / 2n);
        let number = (halvePower * halvePower) % modulo;

        if(num2 % 2n === 1n){
            number = (number * num1) % modulo;
        }

        return number;

    }
    
};
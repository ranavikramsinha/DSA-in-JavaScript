//* https://leetcode.com/problems/find-the-punishment-number-of-an-integer/

//* tc O(n * 2^(log10(n^2))) | sc O(log10(n^2))

var punishmentNumber = function(n) {

    let ans = 0;

    for(let i = 1; i <= n; i++){
        let square = i * i;

        if(isPunishmentNumber(square, i, 0)){
            ans += square;
        }
    }

    return ans;

    function isPunishmentNumber(num, target, currentSum){
        if(num === 0){
            return currentSum === target;
        }

        return isPunishmentNumber(Math.floor(num / 10), target, currentSum + (num % 10)) ||
               isPunishmentNumber(Math.floor(num / 100), target, currentSum + (num % 100)) ||
               isPunishmentNumber(Math.floor(num / 1000), target, currentSum + (num % 1000)) ||
               isPunishmentNumber(Math.floor(num / 10000), target, currentSum + (num % 10000));
    }
    
};

//* tc O(n * 2^(log10(n^2))) | sc O(log10(n^2))

var punishmentNumber = function(n) {

    let ans = 0;

    for(let i = 0; i <= n; i++){
        let square = i * i;
        let s = square.toString();

        if(isPunishmentNumber(s, i, 0, 0)){
            ans += square;
        }
    }

    return ans;

    function isPunishmentNumber(s, num, currentSum, index){
        if(index === s.length){
            return currentSum == num;
        }

        if(currentSum > num){
            return false;
        }

        let isTrue = false;

        for(let i = index; i < s.length; i++){
            let currentString = s.substring(index, i + 1);
            let value = parseInt(currentString, 10);

            if(isPunishmentNumber(s, num, currentSum + value, i + 1)){
                isTrue = true;
                break;
            }
        }

        return isTrue;
    }

};

//* tc O(n * 2^(log10(n^2))) | sc O(n * log10(n^2))

var punishmentNumber = function(n) {

    let ans = 0;

    for(let i = 0; i <= n; i++){
        let square = i * i;
        let s = square.toString();

        let memo = Array.from({ length: s.length}, () => new Array(i + 1).fill(-1));

        if(isPunishmentNumber(s, i, 0, 0, memo)){
            ans += square;
        }
    }

    return ans;

    function isPunishmentNumber(s, num, currentSum, index, memo){
        if(index === s.length){
            return currentSum == num;
        }

        if(currentSum > num){
            return false;
        }

        if(memo[index][currentSum] !== -1){
            return memo[index][currentSum] === true;
        }

        let isTrue = false;

        for(let i = index; i < s.length; i++){
            let currentString = s.substring(index, i + 1);
            let value = parseInt(currentString, 10);

            if(isPunishmentNumber(s, num, currentSum + value, i + 1, memo)){
                isTrue = true;
                break;
            }
        }

        memo[index][currentSum] = isTrue ? true : false;

        return isTrue;
    }

};
//* https://leetcode.com/problems/sum-of-digits-of-string-after-convert/

var getLucky = function(s, k) {
    let result = 0;

    for(let i = 0; i < s.length; i++){
        let value = s.charCodeAt(i) - 'a'.charCodeAt() + 1;

        result += Math.floor(value / 10) + (value % 10);
    }

    for(let i = 1; i < k; i++){
        let sum = 0;

        while(result > 0){
            sum += result % 10;
            result = Math.floor(result / 10);
        }

        result = sum;
    }

    return result;
};
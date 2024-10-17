//* https://leetcode.com/problems/maximum-swap/

var maximumSwap = function(num) {
    let s = num.toString().split('');
    let n = s.length;
    let maxRight = Array(10).fill(-1);

    for(let i = 0; i < n; i++){

        let index = s[i] - '0';

        maxRight[index] = i;
    }

    for(let i = 0; i < n; i++){

        let currentChar = s[i];
        let currentDigit = currentChar - '0';

        for(let digit = 9; digit > currentDigit; digit--){

            if(maxRight[digit] > i){

                [s[i], s[maxRight[digit]]] = [s[maxRight[digit]], s[i]];

                return parseInt(s.join(''));
            }
        }
    }

    return num;
};
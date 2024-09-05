//* https://leetcode.com/problems/find-missing-observations/

var missingRolls = function(rolls, mean, n) {
    let m = rolls.length;
    let sum = mean * (n + m);

    for(let i = 0; i < m; i++){
        sum -= rolls[i];
    }

    if(sum < n || sum > (n * 6)){
        return [];
    }

    let average = Math.floor(sum / n);
    let remainder = sum % n;
    let result = new Array(n);

    for(let i = 0; i < n; i++){
        result[i] = average;

        if(remainder > 0){
            result[i]++;
            remainder--;
        }
    }

    return result;
};
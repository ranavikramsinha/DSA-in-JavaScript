//* https://leetcode.com/problems/count-the-number-of-powerful-integers/

//* tc O(log(n)) (number of digits) | sc O(1)

var numberOfPowerfulInt = function(start, finish, limit, s) {

    let startStr = (start - 1).toString();
    let endStr = finish.toString();

    let result = solve(endStr, limit, s) - solve(startStr, limit, s);

    return result;

    function solve(str, limit, suffix){
        if(str.length < suffix.length){
            return 0;
        }

        let count = 0;
        let strSuffix = str.substring(str.length - suffix.length);
        let remainingLength = str.length - suffix.length;

        for(let i = 0; i < remainingLength; i++){
            let digit = Number(str[i]);

            if(digit <= limit){
                count += digit * Math.pow(limit + 1, remainingLength - i - 1);
            }
            else{
                count += Math.pow(limit + 1, remainingLength - i);
                return count;
            }
        }

        if(strSuffix >= suffix){
            count += 1;
        }

        return count;
    }
    
};
//* https://leetcode.com/problems/find-the-count-of-good-integers/

//* tc O(n * 10^n/2) | sc O(n * 10^n/2)

var countGoodIntegers = function(n, k) {

    let digits = Math.trunc((n + 1) / 2);
    let start = Math.pow(10, digits - 1);
    let end = Math.pow(10, digits) - 1;
    let set = new Set();
    let result = 0;

    for(let i = start; i <= end; i++){
        let leftHalve = String(i);
        let complete = "";

        if(n % 2 == 0){
            let rightHalve = leftHalve;
            rightHalve = rightHalve.split("").reverse().join("");
            complete = leftHalve + rightHalve;
        }
        else{
            let rightHalve = leftHalve.substring(0, digits - 1);
            rightHalve = rightHalve.split("").reverse().join("");
            complete = leftHalve + rightHalve;
        }

        let number = Number(complete);

        if(number % k !== 0){
            continue;
        }

        complete = complete.split("").sort().join("");

        set.add(complete);
    }

    let factorial = new Array(n + 1).fill(1);

    for(let i = 1; i < n + 1; i++){
        factorial[i] = factorial[i - 1] * i;
    }

    for(let s of set){
        let count = new Array(10).fill(0);

        for(let char of s){
            count[Number(char)]++;
        }

        let totalDigits = s.length;
        let zeroDigits = count[0];
        let nonZeroDigits = totalDigits - zeroDigits;

        let permutation = (nonZeroDigits * factorial[totalDigits - 1]);

        for(let i = 0; i < 10; i++){
            permutation = Math.trunc(permutation / factorial[count[i]]);
        }

        result += permutation;
    }

    return result;
    
};
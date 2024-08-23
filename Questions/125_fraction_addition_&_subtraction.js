//* https://leetcode.com/problems/fraction-addition-and-subtraction/

var fractionAddition = function(expression) {
    let numerator = 0;
    let denominator = 1;
    let n = expression.length;
    let i = 0;

    while(i < n){
        let currentNumerator = 0;
        let currentDenominator = 0;
        let addOrSubtract = 1;

        if(expression[i] === '-'){
            addOrSubtract = -1;
            i++;
        }else if(expression[i] === '+'){
            i++;
        }

        while(i < n && !isNaN(expression[i])){
            let val = expression[i] - '0';
            currentNumerator = (currentNumerator * 10) + val;
            i++;
        }

        i++;

        currentNumerator *= addOrSubtract;

        while(i < n && !isNaN(expression[i])){
            let val = expression[i] - '0';
            currentDenominator = (currentDenominator * 10) + val;
            i++;
        }

        numerator = numerator * currentDenominator + currentNumerator * denominator;
        denominator = denominator * currentDenominator;
    }

    function gcd(a, b){
        while(b !== 0){
            let temp = b;
            b = a % b;
            a = temp;
        }

        return a;
    }

    let valueOfGCD = gcd(Math.abs(numerator), denominator);

    numerator /= valueOfGCD;
    denominator /= valueOfGCD;
    
    return `${numerator}/${denominator}`;
};
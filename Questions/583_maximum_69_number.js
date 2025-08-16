//* https://leetcode.com/problems/maximum-69-number/

//* tc : O(1) | sc : O(1)

var maximum69Number  = function(num) {

    let count = 0;
    let valueSixAtPosition = -1;

    let value = num;

    while(value > 0){
        let remainder = value % 10;

        if(remainder === 6){
            valueSixAtPosition = count;
        }

        value = Math.floor(value / 10);
        count++;
    }

    if(valueSixAtPosition === -1){
        return num;
    }

    return num + 3 * Math.pow(10, valueSixAtPosition);
    
};
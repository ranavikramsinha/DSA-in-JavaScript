//* https://leetcode.com/problems/minimize-xor/

//* tc O(log(n)) | sc O(1) where n is the value of the number

var minimizeXor = function(num1, num2) {

    let result = num1;
    let neededSetBit = countSetBit(num2);
    let presentSetBit = countSetBit(num1);

    if(presentSetBit < neededSetBit){
        let bitPosition = 0;
        while(presentSetBit < neededSetBit){
            if((result & (1 << bitPosition)) === 0){
                result |= (1 << bitPosition);
                presentSetBit++;
            }

            bitPosition++;
        }
    }
    else if(presentSetBit > neededSetBit){
        let bitPosition = 0;
        while(presentSetBit > neededSetBit){
            if((result & (1 << bitPosition)) !== 0){
                result &= ~(1 << bitPosition);
                presentSetBit--;
            }

            bitPosition++;
        }
    }

    return result;

    function countSetBit(number){
        return number.toString(2).split('0').join('').length;
    }

};

//* tc O(1) | sc O(1)

var minimizeXor = function(num1, num2) {

    let result = 0;
    let neededSetBit = countSetBit(num2);

    for(let bitPosition = 31; bitPosition >= 0 && neededSetBit > 0; bitPosition--){
        if((num1 & (1 << bitPosition)) !== 0){
            result |= (1 << bitPosition);
            neededSetBit--;
        }
    }

    for(let bitPosition = 0; bitPosition < 32 && neededSetBit > 0; bitPosition++){
        if((num1 & (1 << bitPosition)) === 0){
            result |= (1 << bitPosition);
            neededSetBit--;
        }
    }

    return result;

    function countSetBit(number){
        return number.toString(2).split('0').join('').length;
    }
};
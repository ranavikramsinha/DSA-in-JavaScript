//* https://leetcode.com/problems/count-symmetric-integers/

//* tc O(n) | sc O(1)

var countSymmetricIntegers = function(low, high) {

    let count = 0;

    for(let i = low; i <= high; i++){
        if(i >= 10 && i <= 99 && i % 11 === 0){
            count++;
        }
        else if(i >= 1000 && i <= 9999){
            let firstNumber = Math.trunc(i / 1000);
            let secondNumber = Math.trunc(i / 100) % 10;
            let thirdNumber = Math.trunc(i / 10) % 10;
            let fourthNumber = Math.trunc(i % 10);

            let firstHalf = firstNumber + secondNumber;
            let secondHalf = thirdNumber + fourthNumber;

            if(firstHalf === secondHalf){
                count++;
            }
        }
    }

    return count;
    
};
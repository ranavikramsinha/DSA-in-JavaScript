//* https://leetcode.com/problems/check-if-number-is-a-sum-of-powers-of-three/

//* tc O(log(n)) | sc O(1)

var checkPowersOfThree = function(n) {

    while(n > 0){
        if(n % 3 == 2){
            return false;
        }

        n = Math.trunc(n / 3);
    }

    return true;
    
};
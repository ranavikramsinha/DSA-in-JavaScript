//* https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/

//* tc : O(log(n)) | sc : O(1)

var getNoZeroIntegers = function(n) {

    let a = n;
    let b = 0;
    let placeValue = 1;

    while (n > 1) {
        let take = 1;

        if (n % 10 === 1) {
            take = 2;
        }

        a = a - take * placeValue;
        b = b + take * placeValue;

        n = Math.floor((n - take) / 10);

        placeValue *= 10;
    }

    return [a, b];
    
};
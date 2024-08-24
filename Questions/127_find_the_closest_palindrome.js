//* https://leetcode.com/problems/find-the-closest-palindrome/

var nearestPalindromic = function(n) {
    let length = n.length;
    let middle = Math.ceil(length / 2);
    let halfOfN = BigInt(n.slice(0, middle), 10);
    let results = new Set();

    results.add(makePalindrome(halfOfN, length % 2 === 0));
    results.add(makePalindrome(halfOfN + 1n, length % 2 === 0));
    results.add(makePalindrome(halfOfN - 1n, length % 2 === 0));
    results.add(BigInt(Math.pow(10, length - 1)) - 1n);
    results.add(BigInt(Math.pow(10, length)) + 1n);

    // let difference = BigInt(Number.MAX_SAFE_INTEGER);
    let difference = Infinity;
    let result = 0;
    let actualNumber = BigInt(n);

    for(let num of results){
        if(num === actualNumber){
            continue;
        }

        let currentDifference = num > actualNumber ? num - actualNumber : actualNumber - num;

        if(currentDifference < difference){
            difference = currentDifference;
            result = num;
        }
        else if(currentDifference === difference){
            result = num < result ? num : result;
        }
    }

    return result.toString();

    function makePalindrome(halfOfN, isEven) {
        let halfStr = halfOfN.toString();
        let reversedHalf = halfStr.split('').reverse().join('');

        return BigInt(halfStr + (isEven ? reversedHalf : reversedHalf.slice(1)));
    }
};
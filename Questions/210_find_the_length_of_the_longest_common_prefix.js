//* https://leetcode.com/problems/find-the-length-of-the-longest-common-prefix/

var longestCommonPrefix = function(arr1, arr2) {
    arr1 = Array.from(new Set(arr1.map(num => num.toString()))).sort();
    arr2 = Array.from(new Set(arr2.map(num => num.toString()))).sort();

    let i = 0;
    let j = 0;
    let maxLength = 0;

    while(i < arr1.length && j < arr2.length){
        let str1 = arr1[i];
        let str2 = arr2[j];

        let length = commonPrefixLength(str1, str2);
        maxLength = Math.max(maxLength, length);

        if(str1 === str2){
            i++;
            j++;
        }
        else if(str1 < str2){
            i++;
        }
        else{
            j++;
        }
    }

    return maxLength;

    function commonPrefixLength(str1, str2){
        let count = 0;

        while(count < str1.length && count < str2.length && str1[count] === str2[count]){
            count++;
        }

        return count;
    }
};
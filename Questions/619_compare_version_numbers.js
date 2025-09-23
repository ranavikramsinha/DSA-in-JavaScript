//* https://leetcode.com/problems/compare-version-numbers/

//* tc : O(max(n, m)) | sc : O(n + m)

var compareVersion = function(version1, version2) {

    let arr1 = version1.split(".");
    let arr2 = version2.split(".");
    let maxLength = Math.max(arr1.length, arr2.length);

    for (let i = 0; i < maxLength; i++) {

        let num1 = Number(arr1[i] ?? 0);
        let num2 = Number(arr2[i] ?? 0);

        if (num1 < num2) return -1;
        if (num1 > num2) return 1;
    }

    return 0;
};
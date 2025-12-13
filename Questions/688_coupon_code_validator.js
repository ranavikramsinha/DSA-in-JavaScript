//* https://leetcode.com/problems/coupon-code-validator/

//* tc : O(nlogn) | sc : O(n)

var validateCoupons = function(code, businessLine, isActive) {

    let n = code.length;
    let validCoupons = []; 
    let categories = ["electronics", "grocery", "pharmacy", "restaurant"];
    let priority = { electronics: 0, grocery: 1, pharmacy: 2, restaurant: 3 };

    for (let i = 0; i < n; i++) {
        if (isValid(i)) {
            validCoupons.push([businessLine[i], code[i]]);
        }
    }

    function isValid(idx) {
        if (!isActive[idx]) {
            return false;
        }

        if (!categories.includes(businessLine[idx])) {
            return false;
        }

        if (!/^\w+$/.test(code[idx])) {
            return false;
        }

        return true;
    };

    validCoupons.sort((a, b) => {
        let [catA, codeA] = a;
        let [catB, codeB] = b;

        if (priority[catA] !== priority[catB]) {
            return priority[catA] - priority[catB];
        }

        if (codeA === codeB) {
            return 0;
        }

        return codeA < codeB ? -1 : 1;
    });

    return validCoupons.map(([_, c]) => c);
};
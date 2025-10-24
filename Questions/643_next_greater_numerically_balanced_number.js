//* https://leetcode.com/problems/next-greater-numerically-balanced-number/

//* tc : O(n * log(n)) | sc : O(1)

var nextBeautifulNumber = function(n) {

    let x = n + 1;

    while (true) {
        if (isBalanced(x)) {
            return x;
        }
        
        x++;
    }

    function isBalanced(x) {
        let count = new Array(10).fill(0);
        let t = x;

        while (t > 0) {
            count[t % 10]++;
            t = Math.floor(t / 10);
        }

        if (count[0] > 0) {
            return false;
        }

        for (let d = 1; d <= 9; ++d) {
            if (count[d] !== 0 && count[d] !== d) return false;
        }

        return true;
    };
    
};
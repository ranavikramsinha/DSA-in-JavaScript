//* https://leetcode.com/problems/lexicographically-smallest-string-after-applying-operations/

//* tc : O(n) | sc : O(n)

var findLexSmallestString = function (s, a, b) {

    let set = new Set();
    let n = s.length;
    let queue = [];
    queue.push(s);

    let ans = s;

    while (queue.length) {
        let string = queue.shift();

        if (string < ans) {
            ans = string;
        }

        let rotated = rotate(string);
        let addA = add(string);

        if (!set.has(rotated)) {
            set.add(rotated);
            queue.push(rotated);
        }

        if (!set.has(addA)) {
            set.add(addA);
            queue.push(addA);
        }
    }

    return ans;

    function rotate(string) {
        let newStr = string.slice(b, n) + string.slice(0, b);
        return newStr;
    }

    function add(string) {
        let newStr = "";

        for (let i = 0; i < n; i++) {
            if (i % 2 === 0) {
                newStr += string[i];
            }
            else {
                newStr += String((parseInt(string[i]) + a) % 10);
            }
        }
        
        return newStr;
    }

};
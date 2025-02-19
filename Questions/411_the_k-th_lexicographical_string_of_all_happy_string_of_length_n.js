//* https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/

//* tc O(n * 3 * 2^(n - 1)) | sc O(n) due to recursion depth and the temoprary string

var getHappyString = function(n, k) {

    let ans = '';
    let str = '';
    let count = 0;

    solve(n, k, str);

    return ans;

    function solve(n, k, str){
        if(str.length === n){
            count++;

            if(count === k){
                ans += str;
            }

            return;
        }

        if(ans.length === n){
            return;
        }

        for(let char of ['a', 'b', 'c']){
            if(str.length > 0 && str[str.length - 1] === char){
                continue;
            }

            solve(n, k, str + char);

        }
    }
    
};
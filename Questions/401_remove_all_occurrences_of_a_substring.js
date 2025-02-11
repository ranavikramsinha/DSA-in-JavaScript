//* https://leetcode.com/problems/remove-all-occurrences-of-a-substring/

//* tc O(n) | sc O(n) 

var removeOccurrences = function(s, part) {

    let n = part.length;
    let ans = '';

    for(let char of s){
        ans += char;

        if(ans.length >= n && ans.slice(ans.length - n) === part){
            ans = ans.slice(0, ans.length - n);
        }
    }

    return ans;
    
};
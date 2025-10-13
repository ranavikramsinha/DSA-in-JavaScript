//* https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/

//* tc : O(n * k(log(K))) | sc : O(n * k)

var removeAnagrams = function (words) {
    let ans = [];

    for (let i = 0; i < words.length; i++) {
        if (i === 0) {
            ans.push(words[i]);
            continue;
        }

        let current = words[i].split("").sort().join();;
        let previous = words[i - 1].split("").sort().join();
        
        if(current === previous) {
            continue;
        }
        else {
            ans.push(words[i]);
        }
    }

    return ans;

};
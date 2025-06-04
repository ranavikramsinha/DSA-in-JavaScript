//* https://leetcode.com/problems/find-the-lexicographically-largest-string-from-the-box-i/

//* tc O(n^2) | sc O(n)

var answerString = function(word, numFriends) {

    if(numFriends === 1){
        return word;
    }

    let n = word.length;
    let longestString = n - (numFriends - 1);
    let result = "";

    for(let i = 0; i < n; i++){
        let take = Math.min(longestString, n - i);
        let str = word.substring(i, i + take);

        if(str > result){
            result = str;
        }
    }

    return result;
    
};
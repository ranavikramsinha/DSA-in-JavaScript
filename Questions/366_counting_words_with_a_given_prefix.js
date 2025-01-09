//* https://leetcode.com/problems/counting-words-with-a-given-prefix/

//* tc O(m * n) | sc O(1)

var prefixCount = function(words, pref) {

    let n = words.length;
    let m = pref.length;
    let count = 0;

    for(let i = 0; i < n; i++){

        if(words[i].substring(0, m) === pref){
            count++;
        }
        
    }

    return count;
    
};
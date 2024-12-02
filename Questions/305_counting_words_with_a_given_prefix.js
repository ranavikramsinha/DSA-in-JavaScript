//* https://leetcode.com/problems/counting-words-with-a-given-prefix/

//* tc O(n * k) | sc O(1) where k is the average length of the each word

var prefixCount = function(words, pref) {

    let n = words.length;
    let count = 0;

    for(let i = 0; i < n; i++){

        if(words[i].indexOf(pref) === 0){
            count++;
        }

    }

    return count;
    
};
//* https://leetcode.com/problems/circular-sentence/

//* tc O(n) | sc O(1)
var isCircularSentence = function(sentence) {

    let n = sentence.length;

    for(let i = 0; i < n; i++){

        if(sentence[i] === " "){

            if(sentence[i - 1] !== sentence[i + 1]){
                return false;
            }
        }
        
    }

    return sentence[0] === sentence[n - 1];
    
};
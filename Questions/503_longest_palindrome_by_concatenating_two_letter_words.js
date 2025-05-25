//* https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/

//* tc O(n) | sc O(n)

var longestPalindrome = function(words) {

    let n = words.length;
    let map = new Map();
    let result = 0;

    for(let i = 0; i < n; i++){
        let wordReversed = words[i].split('').reverse().join('');

        if(map.get(wordReversed) > 0){
            result += 4;
            map.set(wordReversed, (map.get(wordReversed)) - 1);
        }
        else{
            map.set(words[i], (map.get(words[i]) || 0) + 1);
        }
    }

    for(let [word, count] of map.entries()){
        if(word[0] === word[1] && count > 0){
            result += 2;
            break;
        }
    }

    return result;
    
};

//* tc O(n) | sc O(n)

var longestPalindrome = function(words) {

    let n = words.length;
    let map = new Map();
    let result = 0;
    let isCenter = false;

    for(let word of words){
        map.set(word, (map.get(word) || 0 ) + 1);
    }

    for(let [word, count] of map){
        let reversedWord = word.split('').reverse().join('');

        if(word === reversedWord){
            result += Math.trunc(count / 2) * 4;

            if(count % 2 === 1){
                isCenter = true;
            }
        }
        else if((map.get(reversedWord) || 0) > 0){
            let howManyPairs = Math.min(map.get(reversedWord), count);

            result += (howManyPairs * 4);
            map.set(reversedWord, 0);
        }

        map.set(word, 0);
    }

    if(isCenter){
        result += 2;
    }

    return result;
    
};
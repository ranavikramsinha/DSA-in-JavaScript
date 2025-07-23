//* https://leetcode.com/problems/maximum-score-from-removing-substrings/

//* tc : O(n) | sc : O(n)

var maximumGain = function(s, x, y) {

    let n = s.length;
    let totalPoints = 0;
    let maximumScore = (x > y) ? "ab" : "ba";
    let minimumScore = (maximumScore === "ab") ? "ba" : "ab";

    let firstString = removeSubString(s, maximumScore);
    let size = firstString.length;
    let charactersRemoved = (n - size);

    totalPoints += Math.trunc(charactersRemoved / 2) * Math.max(x, y);

    let secondString = removeSubString(firstString, minimumScore);
    charactersRemoved = size - secondString.length;
    
    totalPoints += Math.trunc(charactersRemoved / 2 ) * Math.min(x, y);

    return totalPoints;

    function removeSubString(s, str){
        let stack = [];

        for(let character of s){
            if(character === str[1] && stack.length > 0 && stack[stack.length - 1] === str[0]){
                stack.pop();
            }
            else{
                stack.push(character);
            }
        }

        return stack.join('');
    } 
};

//* Other solution but not solved by me :-

//* tc : O(n) | sc : O(n)

var maximumGain = function(s, x, y) {
    function removePair(str, first, second, reward) {
        const stack = [];
        let score = 0;

        for (let char of str) {
            if (stack.length && stack[stack.length - 1] === first && char === second) {
                stack.pop();      // remove matching first character
                score += reward;  // gain reward
            } else {
                stack.push(char);
            }
        }

        return [stack.join(''), score];
    }

    let total = 0;

    if (x > y) {
        // Remove "ab" first, then "ba"
        [s, score] = removePair(s, 'a', 'b', x);
        total += score;

        [s, score] = removePair(s, 'b', 'a', y);
        total += score;
    } else {
        // Remove "ba" first, then "ab"
        [s, score] = removePair(s, 'b', 'a', y);
        total += score;

        [s, score] = removePair(s, 'a', 'b', x);
        total += score;
    }

    return total;
};
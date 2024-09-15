//* https://leetcode.com/problems/find-the-longest-substring-containing-vowels-in-even-counts/

var findTheLongestSubstring = function(s) {
    let map = new Map();
    let vowelCount = new Array(5).fill(0);
    let currentState = '00000';
    map.set(currentState, -1);
    let maxLength = 0;

    for(let i = 0; i < s.length; i++){
        if(s[i] === 'a'){
            vowelCount[0] = (vowelCount[0] + 1) % 2;
        }
        if(s[i] === 'e'){
            vowelCount[1] = (vowelCount[1] + 1) % 2;
        }
        if(s[i] === 'i'){
            vowelCount[2] = (vowelCount[2] + 1) % 2;
        }
        if(s[i] === 'o'){
            vowelCount[3] = (vowelCount[3] + 1) % 2;
        }
        if(s[i] === 'u'){
            vowelCount[4] = (vowelCount[4] + 1) % 2;
        }

        currentState = vowelCount.join('');

        if(map.has(currentState)){
            maxLength = Math.max(maxLength, i - map.get(currentState))
        }
        else{
            map.set(currentState, i);
        }
    }
    return maxLength;
};
//* https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/

//* tc O(n) | sc O(n)

var clearStars = function(s) {

    let n = s.length;
    let arr = s.split("");
    let stacks = Array.from({ length: 26}, () => []);

    for(let i = 0; i < n; i++){
        let character = arr[i];

        if(character !== "*"){
            stacks[character.charCodeAt(0) - 97].push(i);
        }
        else{
            for(let i = 0; i < 26; i++){
                if(stacks[i].length){
                    let index = stacks[i].pop();
                    arr[index] = "*";
                    break;
                }
            }
        }
    }

    return arr.filter(character => character !== "*").join("");
    
};
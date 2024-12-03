//* https://leetcode.com/problems/adding-spaces-to-a-string/

//* tc O(n) | sc O(n)

var addSpaces = function(s, spaces) {

    let n = s.length;
    let spacesIndex = 0;
    let arr = [];

    for(let i = 0; i < n; i++){

        if(i === spaces[spacesIndex]){
            arr.push(" ");
            spacesIndex++;
        }

        if(i !== spaces[spacesIndex]){
            arr.push(s[i]);
        }

    }

    return arr.join("");
    
};
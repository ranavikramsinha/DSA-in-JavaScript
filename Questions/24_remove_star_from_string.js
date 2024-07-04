//* https://leetcode.com/problems/removing-stars-from-a-string/description/

var removeStars = function(s) {

    let stack = []

    for(const char of s){
        if(s[char] === "*"){
            stack.pop()
        }
        else{
            stack.push(char)
        }
    }

    return stack.join(",")
    
};
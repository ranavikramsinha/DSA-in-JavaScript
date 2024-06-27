//* https://leetcode.com/problems/reverse-vowels-of-a-string/

var reverseVowels = function(s) {

    const vowels = "aeiouAEIOU"

    const characters = s.split("")

    let left = 0
    let right = s.length - 1

    while(left < right){
        while(left < right && vowels.indexOf(characters[left]) === -1){
            left++
        }

        while(left < right && vowels.indexOf(characters[right]) === -1){
            right--
        }

        if(left < right){
            let temp = characters[right]
            characters[right] = characters[left]
            characters[left] = temp
    
            left++
            right--
        }
    }

    return characters.join("")
    
};

console.log(reverseVowels("Superman"))
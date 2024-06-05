//* Question => https://leetcode.com/problems/reverse-words-in-a-string/description/

const reverseWords = function (string) {
    const splitString = string.split(" ")
    const stack = []

    for(let i of splitString) {
        stack.push(i)
    }

    let finalString = ""

    while(stack.length) {
        const current = stack.pop()

        if(current){
            finalString += " " + current
        }
    }

    return finalString.trim()
}

console.log(reverseWords("the sky is blue"))
console.log(reverseWords("  hello world  "))
console.log(reverseWords("a good   example"))
//* https://leetcode.com/problems/decode-string/description/

var decodeString = function(s) {

    let stack = []
    let currentNum = 0
    let currentString = ''

    for(const char of s){
        if(char >= "0" && char <= "9"){
            currentNum = currentNum * 10 + Number(char)
        }
        else if(char === "["){
            stack.push(currentNum)
            stack.push(currentString)
            currentNum = 0
            currentString = ""
        }
        else if(char === "]"){
            let prevString = stack.pop()
            let repetition = stack.pop()

            currentString = prevString + currentString.repeat(repetition)
        }
        else{
            currentString += char
        }
    }
    
    return currentString

};

console.log(decodeString("11[a]2[bc]"))
console.log(decodeString("3[a2[c]]"))
//* 
//* Initial State:
//* stack = []
//* currentNum = 0
//* currentString = ''
//* 
//* Step 1: char = '3'
//* currentNum = 3
//* 
//* Step 2: char = '['
//* stack = [3, '']
//* currentNum = 0
//* currentString = ''
//* 
//* Step 3: char = 'a'
//* currentString = 'a'
//* 
//* Step 4: char = '2'
//* currentNum = 2
//* 
//* Step 5: char = '['
//* stack = [3, '', 2, 'a']
//* currentNum = 0
//* currentString = ''
//* 
//* Step 6: char = 'c'
//* currentString = 'c'
//* 
//* Step 7: char = ']'
//* stack = [3, '']
//* currentNum = 0
//* currentString = 'acc' (prevString = 'a', repetition = 2)
//* 
//* Step 8: char = ']'
//* stack = []
//* currentNum = 0
//* currentString = 'accaccacc' (prevString = '', repetition = 3)
//* 
//* Final Output:
//* ' accaccacc '
//* 
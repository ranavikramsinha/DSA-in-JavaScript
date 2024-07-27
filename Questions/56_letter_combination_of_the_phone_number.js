//* https://leetcode.com/problems/letter-combinations-of-a-phone-number/description/

var letterCombinations = function(digits) {

    if(digits.length === 0){
        return []
    }

    let map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
    }

    let result = []

    solve(0, digits, "", map)

    return result

    function solve(x, digits, temp, map){
        if(x === digits.length){
            result.push(temp)
            return
        }

        let character = digits[x]
        let str = map[character]

        for(let i = 0; i < str.length; i++){
            solve(x + 1, digits, temp + str[i], map)
        }
    }
    
};
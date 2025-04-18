//* https://leetcode.com/problems/count-and-say/

//* tc O(2 ^ n) | sc O(n)

var countAndSay = function(n) {

    if(n === 1){
        return "1";
    }

    let str = "1";

    for(let i = 1; i < n; i++){
        str = solve(str);
    }

    return str;

    function solve(s){
        let n = s.length;
        let strr = "";
        let count = 1;

        for(let i = 1; i < n; i++){
            if(s[i] === s[i - 1]){
                count++;
            }
            else{
                strr += String(count) + s[i - 1];
                count = 1;
            }
        }

        strr += String(count) + s[s.length - 1];
        return strr;
    }
    
};

//* Recursive approach

var countAndSay = function(n) {

    if(n === 1){
        return "1";
    }

    let str = countAndSay(n - 1);
    let result = "";

    for(let i = 0; i < str.length; i++){
        let count = 1;
        let char = str[i];

        while(i < str.length - 1 && str[i] === str[i + 1]){
            count++;
            i++;
        }

        result += String(count) + char;
    }

    return result;
    
};
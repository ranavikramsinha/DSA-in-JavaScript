//* https://leetcode.com/problems/minimum-string-length-after-removing-substrings/

//* tc : O(n) and sc : O(1)
// var minLength = function(s) {

//     let s1 = 'AB';
//     let s2 = 'CD';

//     while(s.includes(s1) || s.includes(s2)){
//         s = s.replace(s1, '').replace(s2, '');
//     }

//     return s.length;
    
// };

//* tc : O(n) and sc : O(1)
var minLength = function(s) {
    let n = s.length;

    let i = 0;
    let j = 1;

    while(j < n){
        if(i < 0){
            i++;
            s = s.substring(0, i) + s[j] + s.substring(i + 1);
        }
        else if(s[i] === 'A' && s[j] === 'B' || s[i] === 'C' && s[j] === 'D'){
            i--;
        }
        else{
            i++;
            s = s.substring(0, i) + s[j] + s.substring(i + 1);
        }

        j++;
    }

    return i + 1;
    
};

//* 
//* Initial state:
//* s = A C B A D B A
//*       ^
//*       i = 1         (This is where the character will be replaced)
//*           ^
//*           j = 3     (This is the character to be copied: 'A')
//* 
//* Step-by-step:
//* 
//* 1. Take the substring before `i`:
//*    s.substring(0, i) = "A"
//* 
//* 2. Take the character at `j`:
//*    s[j] = "A"
//* 
//* 3. Take the substring after `i+1`:
//*    s.substring(i+1) = "BADBA"
//* 
//* 4. Combine them:
//*    s = "A" + "A" + "BADBA"
//* 
//* Result:
//*    s = "AABADBA"
//* 
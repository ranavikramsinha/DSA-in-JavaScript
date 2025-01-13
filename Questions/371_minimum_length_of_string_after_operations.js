//* https://leetcode.com/problems/minimum-length-of-string-after-operations/

//* tc O(n) | sc O(1)

var minimumLength = function(s) {

    let n = s.length;
    let count = 0;
    let arr = new Array(26).fill(0);

    for(let i = 0; i < n; i++){
        arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;

        if(arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] === 3){
            arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] -= 2;
            count += 2;
        }
    }

    return n - count;
    
};

//* tc O(n) | sc O(1)

var minimumLength = function(s) {

    let n = s.length;
    let count = 0;
    let arr = new Array(26).fill(0);

    for(let i = 0; i < n; i++){
        arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
    }

    for(let i = 0; i < 26; i++){
        if(arr[i] === 0){
            continue;
        }

        if(arr[i] % 2 === 0){
            count += 2;
        }
        else{
            count += 1;
        }
    }

    return count;
    
};
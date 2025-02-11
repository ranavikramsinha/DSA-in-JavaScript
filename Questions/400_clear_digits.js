//* https://leetcode.com/problems/clear-digits/

//* tc O(n) | sc O(n)

var clearDigits = function(s) {

    let n = s.length;
    let arr = [];

    for(let char of s){
        if(char >= '0' && char <= '9'){
            arr.pop();
        }
        else{
            arr.push(char);
        }
    }

    return arr.join('');
    
};

//* tc O(n) | sc O(n)

var clearDigits = function(s) {

    let n = s.length;
    let arr = s.split('');

    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= '0' && arr[i] <= '9'){
            arr.splice(i, 1);
            arr.splice(i - 1, 1);
            i = -1;
        }
    }

    return arr.join('');
    
};

//* tc O(n) | sc O(n) 

var clearDigits = function(s) {

    let ans = '';

    for(let char of s){
        if(char >= 'a' && char <= 'z'){
            ans += char;
        }
        else if(ans.length > 0){
            ans = ans.slice(0, -1);
        }
    }

    return ans;
    
};
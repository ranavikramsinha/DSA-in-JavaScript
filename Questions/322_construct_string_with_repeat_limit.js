//* https://leetcode.com/problems/construct-string-with-repeat-limit/

//* tc O(n) | sc O(1)

var repeatLimitedString = function(s, repeatLimit) {

    let arr = new Array(26).fill(0);

    for(let char of s){
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let ans = [];
    
    for(let i = 25; i >= 0;){
        if(arr[i] === 0){
            i--;
            continue;
        }

        let char = String.fromCharCode('a'.charCodeAt(0) + i);
        let frequency = Math.min(arr[i], repeatLimit);

        for(let j = 0; j < frequency; j++){
            ans.push(char);
        }

        arr[i] -= frequency;

        if(arr[i] > 0){
            let k = i - 1;

            while(k >= 0 && arr[k] === 0){
                k--;
            }

            if(k < 0){
                break;
            }

            ans.push(String.fromCharCode('a'.charCodeAt(0) + k));
            arr[k]--;
        }
    }

    return ans.join('');
};
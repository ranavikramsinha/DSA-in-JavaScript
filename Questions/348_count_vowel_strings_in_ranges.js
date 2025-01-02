//* https://leetcode.com/problems/count-vowel-strings-in-ranges/

//* tc O(n + m) | sc O(n + m)

var vowelStrings = function(words, queries) {

    let n = words.length;
    let m = queries.length;
    let vowels = "aeiou";
    let arr = [];
    let sum = 0;

    for(let i = 0; i < n; i++){
        
        if(vowels.includes(words[i][0]) && vowels.includes(words[i][words[i].length - 1])){
            sum++;
        }

        arr.push(sum);
    }

    let ans = [];

    for(let i = 0; i < m; i++){
        let x = queries[i][0];
        let y = queries[i][1];

        if(x > 0){
            ans.push(arr[y] - (arr[x - 1]));
        }
        else{
            ans.push(arr[y]);
        }
    }

    return ans;
    
};
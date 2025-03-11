//* https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

//* tc O(n) | sc O(1)

var numberOfSubstrings = function(s) {

    let n = s.length;
    let arr = new Array(3).fill(0);
    let i = 0;
    let j = 0;
    let count = 0;

    while(j < n){
        let char = s[j];
        arr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;

        while(arr[0] > 0 && arr[1] > 0 && arr[2]){
            count += n - j;

            arr[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            i++;
        }

        j++;
    }

    return count;
    
};
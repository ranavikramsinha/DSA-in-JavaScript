//* https://leetcode.com/problems/permutation-in-string/

var checkInclusion = function(s1, s2) {
    let n = s1.length;
    let m = s2.length;

    if(n > m){
        return false;
    }

    let frequency1 = new Array(26).fill(0);
    let frequency2 = new Array(26).fill(0);

    for(let char of s1){
        frequency1[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    let i = 0;
    let j = 0;
    
    while(j < m){
        frequency2[s2[j].charCodeAt(0) - 'a'.charCodeAt(0)]++;

        if(j - i + 1 > n){
            frequency2[s2[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
            i++;
        }

        if(frequency1.toString() === frequency2.toString()){
            return true;
        }

        j++;
    }

    return false;
};
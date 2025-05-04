//* https://leetcode.com/problems/number-of-equivalent-domino-pairs/

//* tc O(n) | sc O(1)

var numEquivDominoPairs = function(dominoes) {

    let n = dominoes.length;
    let arr = new Array(100).fill(0);
    let result = 0;

    for(let i = 0; i < n; i++){
        if(dominoes[i][0] > dominoes[i][1]){
            [dominoes[i][0], dominoes[i][1]] = [dominoes[i][1], dominoes[i][0]];
        }

        let value = (dominoes[i][0] * 10) + dominoes[i][1];

        result += arr[value];

        arr[value]++;
    }

    return result;
    
};
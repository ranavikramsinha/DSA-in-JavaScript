//* https://leetcode.com/problems/h-index/

var hIndex = function(citations) {

    citations.sort((a, b) => b - a);

    let h = 0;

    for(let i = 0; i < citations.length && citations[i] > h; i++){
        h++;
    }

    return h;
    
};
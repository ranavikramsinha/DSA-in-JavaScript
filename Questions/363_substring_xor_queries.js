//* https://leetcode.com/problems/substring-xor-queries/

//* tc O(Q * (N + M)) | sc O(1)

var substringXorQueries = function(s, queries) {

    let result = [];

    for(let query of queries){

        let valueXOR = query[0] ^ query[1];
        let subString = valueXOR.toString(2);
        let startIndex = s.indexOf(subString);

        if(startIndex !== -1){
            let endIndex = startIndex + subString.length - 1;
            result.push([startIndex, endIndex]);
        }
        else{
            result.push([-1, -1]);
        }
    }

    return result;
    
};
//* https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/

//* tc (n + k) | sc O(n + k)

var divideString = function(s, k, fill) {

    let newString = s;

    while(newString.length % k !== 0){
        newString += fill;
    }

    let n = (newString.length / k);
    let arr = new Array(n);

    for(let i = 0; i < n; i++){
        arr[i] = newString.substring(i * k, (i + 1) * k);
    }

    return arr;
    
};
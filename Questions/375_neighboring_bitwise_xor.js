//* https://leetcode.com/problems/neighboring-bitwise-xor/

//* tc O(n) | sc O(n)

var doesValidArrayExist = function(derived) {

    let n = derived.length;
    let arr = new Array(n);
    arr[0] = 0;

    for(let i = 0; i < n - 1; i++){
        arr[i + 1] = arr[i] ^ derived[i];
    }

    if((arr[n - 1] ^ arr[0]) === derived[n - 1]){
        return true;
    }

    arr[0] = 1;

    for(let i = 0; i < n - 1; i++){
        arr[i + 1] = arr[i] ^ derived[i];
    }

    if((arr[n - 1] ^ arr[0]) === derived[n - 1]){
        return true;
    }

    return false;

};
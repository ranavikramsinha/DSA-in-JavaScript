//* https://leetcode.com/problems/max-difference-you-can-get-from-changing-an-integer/

//* tc O(n) | sc O(n) -> n is the length of the number of digits

var maxDiff = function(num) {

    let str1 = num.toString();
    let str2 = num.toString();
    let n = str1.length;

    let index = 0;

    while(str1[index] === "9"){
        index++;
    }

    let maximum = str1.replaceAll(str1[index], 9);
    let minimum = 0;

    for(let i = 0; i < n; i++){
        if(i === 0){
            if(str2[i] !== '1'){
                minimum = str2.replaceAll(str2[i], 1);
                break;
            }
        }
        else if(str2[i] !== '0' && str2[i] !== str2[0]){
            minimum = str2.replaceAll(str2[i], 0);
            break;
        }
    }

    return maximum - minimum;
    
};
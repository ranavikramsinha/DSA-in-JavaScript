//* https://leetcode.com/problems/maximum-difference-by-remapping-a-digit/

//* tc O(n) | sc O(n) -> n is the length of the number of digits

var minMaxDifference = function(num) {

    let str = num.toString();
    let i = 0;

    while(str[i] === "9"){
        i++;
    }

    let maximum = str.replaceAll(str[i], 9);
    let minimum = str.replaceAll(str[0], 0);

    return maximum - minimum;
    
};
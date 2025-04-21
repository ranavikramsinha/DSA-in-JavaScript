//* https://leetcode.com/problems/count-the-hidden-sequences/

//* tc O(n) | sc O(1)

var numberOfArrays = function(differences, lower, upper) {

    let startingValue = 0;
    let minimumValue = 0;
    let maximumValue = 0;

    for(let difference of differences){
        startingValue += difference;

        minimumValue = Math.min(minimumValue, startingValue);
        maximumValue = Math.max(maximumValue, startingValue);

        if((upper - maximumValue) - (lower - minimumValue) + 1 <= 0){
            return 0
        }
    }

    return (upper - maximumValue) - (lower - minimumValue) + 1;
    
};
//* https://leetcode.com/problems/count-collisions-on-a-road/

//* tc : O(n) | sc : O(1)

var countCollisions = function(directions) {

    let count = 0;
    let i = directions.length - 1;

    while(directions[i] === 'R') {
        i--;
    }
        
    let endtIdx = i;
    
    i = 0;

    while(directions[i] === 'L') {
        i++;
    }
        
    let startIdx = i;

    for(let i = startIdx; i <= endtIdx; i++){

        if(directions[i] !== 'S') {
            count++;

        }

    }

    return count;
    
};
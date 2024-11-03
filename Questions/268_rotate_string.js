//* https://leetcode.com/problems/rotate-string/

//* tc O(n^2) | sc O(n)
var rotateString = function(s, goal) {

    let m = s.length;
    let n = goal.length;

    for(let i = 0; i < m; i++){

        s = s.slice(1) + s[0];

        if(s === goal){
            return true;
        }

    }

    return false;
    
};

//* tc O(n) | sc O(2 * n) which equivalent to O(n)
var rotateString = function(s, goal) {

    if(s.length !== goal.length){
        return false;
    }

    return (s + s).includes(goal);
    
};
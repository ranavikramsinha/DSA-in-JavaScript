//* https://leetcode.com/problems/move-pieces-to-obtain-a-string/

//* tc O(n) | sc O(1)

var canChange = function(start, target) {
    let n = start.length;
    let startIndex = 0;
    let targetIndex = 0;

    while(startIndex < n || targetIndex < n){
        while(startIndex < n && start[startIndex] === '_'){
            startIndex++;
        }

        while(targetIndex < n && target[targetIndex] === '_'){
            targetIndex++;
        }

        if(startIndex === n || targetIndex === n){
            return startIndex === n && targetIndex === n;
        }

        if(start[startIndex] !== target[targetIndex]){
            return false;
        }

        if(start[startIndex] === 'L' && startIndex < targetIndex){
            return false;
        }

        if(start[startIndex] === 'R' && startIndex > targetIndex){
            return false;
        }

        startIndex++;
        targetIndex++;
    }
    return true;  
};
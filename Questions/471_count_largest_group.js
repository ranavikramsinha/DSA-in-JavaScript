//* https://leetcode.com/problems/count-largest-group/

//* tc O(n * log(n)) | sc O(n) where log(n) is the digitSum function to find the digit sum

var countLargestGroup = function(n) {

    let map = new Map();
    let count = 0;
    let maxSize = 0;

    for(let i = 0; i < n; i++){
        let digitSum = solve(i + 1);

        map.set(digitSum, (map.get(digitSum) || 0) + 1);

        if(map.get(digitSum) === maxSize){
            count++;
        }
        else if(map.get(digitSum) > maxSize){
            count = 1;
            maxSize = map.get(digitSum);
        }
    }

    return count;

    function solve(num){
        let sum = 0;

        while(num){
            sum += num % 10;
            num = Math.trunc(num / 10);
        }

        return sum;
    }
    
};
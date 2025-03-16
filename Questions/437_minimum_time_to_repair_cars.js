//* https://leetcode.com/problems/minimum-time-to-repair-cars/

//* tc O(n * log(max(maxRank * cars * cars))) | sc O(1)

var repairCars = function(ranks, cars) {

    let n = ranks.length;
    let left = 1;
    let right = (Math.max(...ranks)) * (cars * cars);
    let result = -1;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);

        if(solve(ranks, middle, cars)){
            result = middle;
            right = middle - 1;
        }
        else{
            left = middle + 1;
        }
    }

    return result;

    function solve(ranks, time, cars){
        for(let i = 0; i < ranks.length; i++){
            cars -= Math.trunc(Math.sqrt(time / ranks[i]));

            if(cars <= 0){
                return true;
            }
        }

        return false;
    }
    
};
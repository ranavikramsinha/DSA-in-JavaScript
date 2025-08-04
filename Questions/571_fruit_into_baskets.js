//* https://leetcode.com/problems/fruit-into-baskets/

//* tc : O(n) | sc : O(n)

var totalFruit = function(fruits) {

    let n = fruits.length;
    let map = new Map();

    let i = 0;
    let j = 0;
    let maxLength = 0;

    while(j < n){
        let current = fruits[j];
        map.set(current,(map.get(current) || 0) + 1);

        if(map.size <= 2){
            maxLength = Math.max(maxLength, j - i + 1);
        }
        else{
            let left = fruits[i];
            map.set(left, map.get(left) - 1);

            if(map.get(left) === 0){
                map.delete(left);
            }
            
            i++;
        }

        j++;
    }

    return maxLength;
    
};
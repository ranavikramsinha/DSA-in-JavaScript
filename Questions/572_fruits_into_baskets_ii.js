//* https://leetcode.com/problems/fruits-into-baskets-ii/

//* tc : O(n ^ 2) | sc : O(n)

var numOfUnplacedFruits = function(fruits, baskets) {

    let n = fruits.length;
    let arr = new Array(n).fill(false);
    let notPlaced = 0;

    for(let i = 0; i < n; i++){
        let placed = false;

        for(let j = 0; j < n; j++){
            if(!arr[j] && baskets[j] >= fruits[i]){
                arr[j] = true;
                placed = true;
                break;
            }
        }

        if(!placed){
            notPlaced++;
        }
    }

    return notPlaced;
    
};
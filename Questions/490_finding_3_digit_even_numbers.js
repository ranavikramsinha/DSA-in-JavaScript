//* https://leetcode.com/problems/finding-3-digit-even-numbers/

//* tc O(n) | sc O(1)

var findEvenNumbers = function(digits) {

    let map = new Map();
    let result = [];

    for(let digit of digits){
        map.set(digit, (map.get(digit) || 0) + 1);
    }

    for(let i = 1; i <= 9; i++){
        if(map.get(i) > 0){
            map.set(i, (map.get(i)) - 1);
        }
        else{
            continue;
        }

        for(let j = 0; j <= 9; j++){
            if(map.get(j) > 0){
                map.set(j, (map.get(j)) - 1);
            }
            else{
                continue;
            }

            for(let k = 0; k <= 9; k += 2){
                if(map.get(k) > 0){
                    map.set(k, (map.get(k)) - 1);
                }
                else{
                    continue;
                }

                let num = (i * 100) + (j * 10) + k;
                result.push(num);
                
                map.set(k, (map.get(k)) + 1);
            }

            map.set(j, (map.get(j)) + 1);
        }

        map.set(i, (map.get(i)) + 1);
    }

    return result;
    
};
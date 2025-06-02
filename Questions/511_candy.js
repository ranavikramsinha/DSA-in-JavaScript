//* https://leetcode.com/problems/candy/

//* tc O(n) | sc O(1)

var candy = function(ratings) {

    let n = ratings.length;
    let countOfCandies = n;
    let i = 1;

    while(i < n){
        if(ratings[i] === ratings[i - 1]){
            i++;
            continue;
        }

        let up = 0;

        while(ratings[i] > ratings[i - 1]){
            up++;
            countOfCandies += up;
            i++;

            if(i === n){
                return countOfCandies;
            }
        }

        let down = 0;

        while(i < n && ratings[i] < ratings[i - 1]){
            down++;
            countOfCandies += down;
            i++;
        }

        countOfCandies -= Math.min(up, down);
    }

    return countOfCandies;
    
};

//* tc O(n) | sc O(n)

var candy = function(ratings) {

    let n = ratings.length;
    let count = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        if(ratings[i - 1] < ratings[i]){
            count[i] = Math.max(count[i - 1] + 1, count[i]);
        }
    }

    for(let i = n - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1]){
           count[i] = Math.max(count[i], count[i + 1] + 1);
        }
    }

    let result = count.reduce((acc, curr) => acc + curr, 0);

    return result;
    
};
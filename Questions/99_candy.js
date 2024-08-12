//* https://leetcode.com/problems/candy/

//* 1st approach (t.c = O(n) & s.c = O(2*n))
var candy = function(ratings) {
    let n = ratings.length;
    let leftToRight = new Array(n).fill(1);
    let rightToLeft = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        if(ratings[i] > ratings[i - 1]){
            leftToRight[i] = Math.max(leftToRight[i], leftToRight[i - 1] + 1);
        }
    }

    for(let i = n - 2; i >= 0; i--){
        if(ratings[i] > ratings[i + 1]){
            rightToLeft[i] = Math.max(rightToLeft[i], rightToLeft[i + 1] + 1);
        }
    }

    let result = 0;

    for(let i = 0; i < n; i++){
        result += Math.max(leftToRight[i], rightToLeft[i]);
    }

    return result;
};


//* 1st approach (t.c = O(n) & s.c = O(n))
var candy = function(ratings) {
    let n = ratings.length;
    let count = new Array(n).fill(1);

    for(let i = 1; i < n; i++){
        if(ratings[i] > ratings[i - 1]){
            count[i] = Math.max(count[i], count[i - 1] + 1);
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


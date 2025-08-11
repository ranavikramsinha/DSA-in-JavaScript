//* https://leetcode.com/problems/range-product-queries-of-powers/

//* tc : O(Q * 32) | sc : O(n) where Q is the number of queries

var productQueries = function(n, queries) {

    let powers = [];
    let result = [];
    let modulo = 10 ** 9 + 7;

    for(let i = 0; i < 32; i++){
        if(n & (1 << i)){
            powers.push(1 << i);
        }
    }

    for(let query of queries){
        let start = query[0];
        let end = query[1];

        let product = 1;

        for(let i = start; i <= end; i++){
            product = (product * powers[i]) % modulo;
        }

        result.push(product);
    }

    return result;
    
};
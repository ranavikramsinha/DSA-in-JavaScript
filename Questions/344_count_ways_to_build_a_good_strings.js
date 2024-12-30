//* https://leetcode.com/problems/count-ways-to-build-good-strings/

//* DFS :- tc O(high - low) | O(high + 1)

var countGoodStrings = function(low, high, zero, one) {

    let memo = new Array(high + 1).fill(-1);
    let modulee = 10 ** 9 + 7;

    return solve(0);
    
    function solve(size){

        if(size > high){
            return 0;
        }

        if(memo[size] !== -1){
            return memo[size];
        }

        let add_One_If_Size_With_The_Range_Of_Low_And_High = (size >= low) ? 1 : 0;

        let takeZero = solve(size + zero);
        let takeOne = solve(size + one);

        return memo[size] = (add_One_If_Size_With_The_Range_Of_Low_And_High + takeZero + takeOne) % modulee;
    }
    
};
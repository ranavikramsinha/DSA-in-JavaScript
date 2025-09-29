//* https://leetcode.com/problems/minimum-score-triangulation-of-polygon/

//* tc : O(n^3) | sc : O(n^2)

var minScoreTriangulation = function(values) {

    let memo =Array(values.length).fill().map(i => []);

    return dp(0,values.length - 1,values);

    function dp(i,j){
     
        if (j - i < 2) {
            return 0;
        }

        if( memo[i][j]) {
            return memo[i][j];
        }

        let minimum =Infinity;
        let multi = values[i] * values[j];
        let n = values.length; 
    
        for(let k = i + 1; k < j; k++) {
            
            let sum = (multi * values[k]) + dp(i, k) + dp(k,j);

            if(minimum > sum) {
                minimum = sum;
            }
        }

        memo[i][j] = minimum;

        return minimum;
    }
    
};
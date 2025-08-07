//* https://leetcode.com/problems/find-the-maximum-number-of-fruits-collected/

//* tc : O(n^2) | sc : O(n^2)

var maxCollectedFruits = function(fruits) {
    
    let topLeft   = getTopLeft(fruits);
    let topRight  = getCorner(fruits);

    reverseMatrix(fruits);

    let bottomLeft = getCorner(fruits);

    return topLeft + topRight + bottomLeft;

    function getTopLeft(board){
        let score = 0;

        for(let i = 0; i < board.length; i++){
            score += board[i][i];
        }

        return score;
    }

    function reverseMatrix(board){
        let n = board.length;

        for(let i = 0, k = 1; i < n - 1; i++, k++){
            for(let j = k; j < n; j++){
                board[i][j] = board[j][i];
            }
        }
    }

    function getCorner(board){
        let n = board.length;
        let dp = Array.from({ length: n },() => Array(n).fill(0));

        dp[0][n - 1] = board[0][n - 1];

        for(let r = 1; r <= n - 2; r++){
            for(let c = Math.max(r + 1, n - r - 1); c < n; c++){
                let up     = dp[r - 1][c]     || 0;
                let upLeft = dp[r - 1][c - 1] || 0;
                let upRight  = dp[r - 1][c + 1] || 0;

                dp[r][c] = board[r][c] + Math.max(up, upLeft, upRight);
            }
        }

        return dp[n - 2][n - 1];
    }
    
};
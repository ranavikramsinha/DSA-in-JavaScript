//* https://leetcode.com/problems/surrounded-regions/

//* tc O(m * n) | sc O(m * n)

var solve = function(board) {
    let m = board.length;
    let n = board[0].length;
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    for (let i = 0; i < m; i++) {
        if (board[i][0] === "O"){
            dfs(i, 0, board);
        }

        if (board[i][n - 1] === "O"){
            dfs(i, n - 1, board);
        }
    }

    for (let j = 0; j < n; j++) {
        if (board[0][j] === "O"){
            dfs(0, j, board);
        }
        if (board[m - 1][j] === "O"){
            dfs(m - 1, j, board);
        }
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === "O") {
                board[i][j] = "X";
            } else if (board[i][j] === "$") {
                board[i][j] = "O";
            }
        }
    }

    return board;

    function dfs(row, col, board){
        if(row < 0 || col < 0 || row >= m || col >= n || board[row][col] !== "O"){
            return;
        }

        board[row][col] = "$";

        for(let [rowDirection, colDirection] of directions){
            dfs(row + rowDirection, col + colDirection, board);
        }
    } 
};
//* https://leetcode.com/problems/word-search/

var exist = function(board, word) {
    let m = board.length;
    let n = board[0].length;
    let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for(let i = 0; i < m; i++){
        for(let j = 0; j < n; j++){
            if(board[i][j] === word[0] && solve(board, i, j, 0, word)){
                return true;
            }
        }
    }

    return false;

    function solve(board, i, j, index, word){
        if(index === word.length){
            return true;
        }

        if(i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== word[index] || board[i][j] === "$"){
            return false;
        }

        let temp = board[i][j];
        board[i][j] = "$";

        for(let dir of directions){
            let newI = i + dir[0];
            let newJ = j + dir[1];

            if(solve(board, newI, newJ, index + 1, word)){
                return true;
            }
        }

        // for (let [newI, newJ] of directions) {
        //     if(solve(board, i + newI, j + newJ, index + 1, word)){
        //         return true;
        //     }
        // }

        board[i][j] = temp;
        return false;
    }
};
//* https://leetcode.com/problems/sudoku-solver/

//* tc : O(9^81) | sc : O(1)

var solveSudoku = function(board) {

    solve(board);

    function solve(board){
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(board[i][j] === '.'){
                    for(let d = 1; d <= 9; d++){
                        let characterD = String(d);

                        if(isValid(board, i, j, characterD)){
                            board[i][j] = characterD;

                            if(solve(board)){
                                return true;
                            }

                            board[i][j] = '.';
                        }
                    }

                    return false;
                }
            }
        }

        return true; 
    }

    function isValid(board, row, col, d){
        for(let i = 0; i < 9; i++){
            if(board[i][col] === d){
                return false;
            }

            if(board[row][i] === d){
                return false;
            }
        }

        let start_i = Math.trunc(row / 3) * 3;
        let start_j = Math.trunc(col / 3) * 3;

        for(let k = 0; k < 3; k++){
            for(let l = 0; l < 3; l++){
                if(board[start_i + k][start_j + l] === d){
                    return false;
                }
            }
        }

        return true;
    }

};
//* https://leetcode.com/problems/painting-a-grid-with-three-different-colors/

//* tc O(n * S * S * m) where m is the number of rows, n is the number of columns and S = total states i.e. 3 * 2^m-1 | sc  O((n * S) + (S * m)) where n * S is because of memoization array t and S * m is for storing columnWise

var colorTheGrid = function(m, n) {

    let columnWise = [];
    let modulo = 10 ** 9 + 7;
    let result = 0;

    possibleUniqueStringOfRGB(m, "", "noColor");

    let memo = Array.from({ length: n + 1}, () => new Array(columnWise.length + 1).fill(-1));

    for(let i = 0; i < columnWise.length; i++){
        result = (result + solve(n - 1, i, m)) % modulo;
    }

    return result;

    function possibleUniqueStringOfRGB(row, currentColumn, previousColor){
        if(row === 0){
            columnWise.push(currentColumn);
            return;
        }

        let str = "RGB";

        for(let color of str){
            if(color === previousColor){
                continue;
            }

            possibleUniqueStringOfRGB(row - 1, currentColumn + color, color);
        }
    }

    function solve(column, previousColumnIndex, m){
        if(column === 0){
            return 1;
        }

        if(memo[column][previousColumnIndex] !== -1){
            return memo[column][previousColumnIndex];
        }

        let ways = 0;
        let previousColumnString = columnWise[previousColumnIndex];

        for(let i = 0; i < columnWise.length; i++){
            let inNextNewColumn = columnWise[i];
            let noDuplicate = true;

            for(let j = 0; j < m; j++){
                if(previousColumnString[j] === inNextNewColumn[j]){
                    noDuplicate = false;
                    break;
                }
            }

            if(noDuplicate === true){
                ways = (ways + solve(column - 1, i, m)) % modulo;
            }
        }

        memo[column][previousColumnIndex] = ways;
        return memo[column][previousColumnIndex];
    }
};
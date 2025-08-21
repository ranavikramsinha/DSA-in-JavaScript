//* https://leetcode.com/problems/count-submatrices-with-all-ones/

//* tc : O(row ^ 2 * col) | sc : O(col)

var numSubmat = function(mat) {

    let m = mat.length;
    let n = mat[0].length;
    let result = 0;

    for(let startRow = 0; startRow < m; startRow++){
        let colTracking = new Array(n).fill(1);

        for(let endRow = startRow; endRow < m; endRow++){
            for(let col = 0; col < n; col++){
                colTracking[col] = colTracking[col] & mat[endRow][col];
            }

            result += solve(colTracking);
        }
    }

    return result;

    function solve(arr){
        let streak = 0;
        let total = 0;

        for(let num of arr){
            if(num === 0){
                streak = 0;
            }
            else{
                streak++;
            }

            total += streak;
        }

        return total;
    }
    
};
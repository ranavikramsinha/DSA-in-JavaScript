//* https://leetcode.com/problems/find-the-minimum-area-to-cover-all-ones-ii/

//* tc : (m ^ 2 * n ^ 2 + m ^ 3 * n) | sc : O(m * n)

var minimumSum = function(grid) {

    let m = grid.length;
    let n = grid[0].length;

    function rotateClockWise(grid){
        let m = grid.length;
        let n = grid[0].length;

        let rotatedGrid = Array.from({ length: n }, () => Array(m).fill(0));

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                rotatedGrid[j][m - i - 1] = grid[i][j];
            }
        }

        return rotatedGrid;
    }
        
        //* rotateAntiClockWise
    //     function rotateClockWise(grid){
    //     let m = grid.length;
    //     let n = grid[0].length;

    //     let rotatedGrid = Array.from({ length: n }, () => Array(m).fill(0));

    //     for(let i = 0; i < m; i++){
    //         for(let j = 0; j < n; j++){
    //             rotatedGrid[n - j - 1][i] = grid[i][j];
    //         }
    //     }

    //     return rotatedGrid;
    // }

    function minimumArea(startRow, endRow, startCol, endCol, grid){
        let m = grid.length;
        let n = grid[0].length;

        let minimumRow = m, maximumRow = -1;
        let minimumColumn = n, maximumColumn = -1;

        for(let i = startRow; i < endRow; i++){
            for(let j = startCol; j < endCol; j++){
                if(grid[i][j] === 1){
                    minimumRow = Math.min(minimumRow, i);
                    maximumRow = Math.max(maximumRow, i);
                    minimumColumn = Math.min(minimumColumn, j);
                    maximumColumn = Math.max(maximumColumn, j);
                }
            }
        }

        if(maximumRow === -1){
            return 0;
        }

        return(maximumRow - minimumRow + 1) * (maximumColumn - minimumColumn + 1);
    }

    function calculationMinimumAreaPartition(grid){
        let m = grid.length;
        let n = grid[0].length;
        let minimumTotalAreaResult = Infinity;

        for(let rowSplit = 1; rowSplit < m; rowSplit++){
            for(let colSplit = 1; colSplit < n; colSplit++){
                let topRectangle = minimumArea(0, rowSplit, 0, n, grid);
                let bottomLeftRectangle = minimumArea(rowSplit, m, 0, colSplit, grid);
                let bottomRightRectangle = minimumArea(rowSplit, m, colSplit, n, grid);

                minimumTotalAreaResult = Math.min(minimumTotalAreaResult, topRectangle + bottomLeftRectangle + bottomRightRectangle);

                let topLeftRectangle = minimumArea(0, rowSplit, 0, colSplit, grid);
                let topRightRectangle = minimumArea(0, rowSplit, colSplit, n, grid);
                let bottomRectangle = minimumArea(rowSplit, m, 0, n, grid);

                minimumTotalAreaResult = Math.min(minimumTotalAreaResult, topLeftRectangle + topRightRectangle + bottomRectangle);
            }
        }

        for(let firstCut = 1; firstCut < m; firstCut++){
            for(let secondCut = firstCut + 1; secondCut < m; secondCut++){
                let topRectangle = minimumArea(0, firstCut, 0, n, grid);
                let middleRectangle = minimumArea(firstCut, secondCut, 0, n, grid);
                let bottomRectangle = minimumArea(secondCut, m, 0, n, grid);

                minimumTotalAreaResult = Math.min(minimumTotalAreaResult, topRectangle + middleRectangle + bottomRectangle);
            }
        }

        return minimumTotalAreaResult;
    }

    let minimumTotalAreaResult = calculationMinimumAreaPartition(grid);
    let rotatedGrid = rotateClockWise(grid);

    minimumTotalAreaResult = Math.min(minimumTotalAreaResult, calculationMinimumAreaPartition(rotatedGrid));

    return minimumTotalAreaResult;
    
};
const grid = 
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],

]

//* Max

function robotDest(grid, row = 0, col = 0, memo = {}){

    const position = row + "," + col //* Create a unique key for the current cell

    if(row < 0 || row >= grid.length || 
        col < 0 || col >= grid[0].length ){
        return -Infinity //* Return a very small number to signify invalid path
    }

    if( row === grid.length - 1 && col === grid[0].length - 1){
        return grid[row][col] //* Return the value at the bottom-right corner
    }


    if(position in memo){  //* If the result for the current position is already computed, return it
        return memo[position]
    }

    //* Recursively calculate the max sum path from the current cell
    memo[position] = grid[row][col] + Math.max(robotDest(grid, row + 1, col, memo), robotDest(grid, row, col + 1, memo))

    return memo[position]
}

console.log(robotDest(grid)) //* 29

//* Min

function robotDestMin(grid, row = 0, col = 0, memo = {}){

    const position = row + "," + col //* Create a unique key for the current cell

    if(row < 0 || row >= grid.length || 
        col < 0 || col >= grid[0].length ){
        return Infinity
    }

    if( row === grid.length - 1 && col === grid[0].length - 1){
        return grid[row][col] //* Return the value at the bottom-right corner
    }


    if(position in memo){  //* If the result for the current position is already computed, return it
        return memo[position]
    }

    //* Recursively calculate the max sum path from the current cell
    memo[position] = grid[row][col] + Math.min(robotDestMin(grid, row + 1, col, memo), robotDestMin(grid, row, col + 1, memo))

    return memo[position]
}

console.log(robotDestMin(grid)) 
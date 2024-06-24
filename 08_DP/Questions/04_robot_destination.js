const grid = 
[
    [ ,  ,  ,  ],
    [ ,  ,  ,  ],
    [ ,  ,  ,  ],
    [ ,  ,  ,  ],
    [ ,  ,  ,  ],
    [ ,  ,  ,  ],
    [ ,  ,  ,  ],
]

function robotDest(grid, row = 0, col = 0, memo = {}){

    const position = row + "," + col

    if(row < 0 || row >= grid.length || 
        col < 0 || col >= grid[0].length || 
        grid[row][col] === "X"){ //* "X" represents an obstacle
        return 0
    }

    if( row === grid.length - 1 && col === grid[0].length - 1){
        return 1
    }


    if(position in memo){
        return memo[position]
    }

    memo[position] = robotDest(grid, row + 1, col, memo) + robotDest(grid, row, col + 1, memo)

    return memo[position]
}

console.log(robotDest(grid))

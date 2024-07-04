//* https://leetcode.com/problems/equal-row-and-column-pairs/description/

let grid = [[3,2,1],[1,7,6],[2,7,7]]

var equalPairs = function(grid) {

     const n = grid.length
     const rowMap = new Map()

     for(let i = 0; i < n; i++){
        const rowString = grid[i].join(",")
        rowMap.set(rowString, (rowMap.get(rowString) || 0) + 1)
     }

     let count = 0

     for(let j = 0; j < n; j++){
        let columnArray = []
        for(let i = 0; i < n; i++){
            columnArray.push(grid[i][j])
        }

        const columnString = columnArray.join(",")

        if(rowMap.has(columnString)){
            count += rowMap.get(columnString)
        }
     }

     return count
    
};

console.log(equalPairs(grid))
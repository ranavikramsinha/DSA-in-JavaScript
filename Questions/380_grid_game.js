//* https://leetcode.com/problems/grid-game/

//* tc O(n) | sc O(1)

var gridGame = function(grid) {

    let m = grid.length;
    let n = grid[0].length;
    let firstRow = grid[0].reduce((acc, num) => acc + num, 0);
    let secondRow = 0;
    let minimumSumOfRobot2 = Infinity;

    for(let i = 0; i < n; i++){
        firstRow -= grid[0][i];

        let maximumOfRobot2 = Math.max(firstRow, secondRow);
        
        minimumSumOfRobot2 = Math.min(minimumSumOfRobot2, maximumOfRobot2);

        secondRow += grid[1][i];
    }

    return minimumSumOfRobot2;
    
};
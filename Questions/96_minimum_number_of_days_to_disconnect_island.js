//* https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/

var minDays = function(grid) {
    let m = grid.length;
    let n = grid[0].length;
    let dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    let islands = numberOfIslandDfs(grid);

    if(islands > 1 || islands === 0){
        return 0;
    }
    else{
            for(let i = 0; i < m; i++){
                for(let j = 0; j < n; j++){
                    if(grid[i][j] === 1){
                        grid[i][j] = 0;

                        islands = numberOfIslandDfs(grid)

                        if(islands > 1 || islands === 0){
                            return 1;
                        }

                        grid[i][j] = 1;
                    }
                }
            }
        }

    function numberOfIslandDfs(grid){
        let m = grid.length;
        let n = grid[0].length;
        let count = 0;
        let visited = Array.from({length: m}, () => Array(n).fill(false));

        for(let i = 0; i < m; i++){
            for(let j = 0; j < n; j++){
                if(grid[i][j] === 1 && !visited[i][j]){
                    count++;
                    dfs(grid, visited, i, j);
                }
            }
        }
        return count;
    }

    function dfs(grid, visited, i, j){
        if(i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === 0 || visited[i][j]){
            return;
        }

        visited[i][j] = true;

        for (const [di, dj] of dir) {
            const newI = i + di;
            const newJ = j + dj;
            dfs(grid, visited, newI, newJ);
        }

        // dfs(grid, visited, i + 1, j);
        // dfs(grid, visited, i - 1, j);
        // dfs(grid, visited, i, j + 1);
        // dfs(grid, visited, i, j - 1);
    }

    return 2;
};

// class Solution {
//     constructor() {
//         this.directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
//         this.m = 0;
//         this.n = 0;
//     }

//     dfs(grid, i, j, visited) {
//         if (i < 0 || i >= this.m || j < 0 || j >= this.n || visited[i][j] || grid[i][j] === 0) {
//             return;
//         }
        
//         visited[i][j] = true; //* Mark as visited

//         for (const [di, dj] of this.directions) {
//             const newI = i + di;
//             const newJ = j + dj;
//             this.dfs(grid, newI, newJ, visited);
//         }
//     }

//     numberOfIslandsDFS(grid) {
//         const visited = Array.from({ length: this.m }, () => Array(this.n).fill(false));
//         let islands = 0;

//         for (let i = 0; i < this.m; i++) {
//             for (let j = 0; j < this.n; j++) {
//                 if (!visited[i][j] && grid[i][j] === 1) { //* Found an unvisited land
//                     this.dfs(grid, i, j, visited);
//                     islands += 1;
//                 }
//             }
//         }

//         return islands;
//     }

//     minDays(grid) {
//         this.m = grid.length;
//         this.n = grid[0].length;
//         const islands = this.numberOfIslandsDFS(grid);

//         //* Grid is already disconnected
//         if (islands > 1 || islands === 0) {
//             return 0;
//         } else {
//             //* Check for 1 move solution
//             for (let i = 0; i < this.m; i++) {
//                 for (let j = 0; j < this.n; j++) {
//                     if (grid[i][j] === 1) {
//                         grid[i][j] = 0; //* Temporarily mark as water
                        
//                         const newIslands = this.numberOfIslandsDFS(grid);
                        
//                         grid[i][j] = 1; //* Restore the original state
//                         if (newIslands > 1 || newIslands === 0) {
//                             return 1;
//                         }
//                     }
//                 }
//             }
//         }

//         return 2; //* It's always possible to break an island with 2 moves
//     }
// }

// //* Example usage:
// const solution = new Solution();
// const grid = [
//     [1, 1, 0, 0, 0],
//     [1, 1, 0, 0, 0],
//     [0, 1, 1, 1, 0],
//     [0, 0, 0, 1, 1],
//     [0, 0, 0, 1, 1],
// ];
// console.log(solution.minDays(grid)); //* Output: 1 or 2 based on the input
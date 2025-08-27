//* https://leetcode.com/problems/length-of-longest-v-shaped-diagonal-segment/

//* tc : O(row * col) | sc : O(row * col)

var lenOfVDiagonal = function(grid) {

    let rows = grid.length;
    let cols = grid[0].length;
    let directions = [[1,1],[1,-1],[-1,-1],[-1,1]];
    let memo = Array.from({length: rows}, () => Array.from({length: cols}, () => Array(8).fill(0)));

    let maxLen = 0;

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < cols; c++){
            if(grid[r][c] !== 1){
                continue;
            }

            let maxSteps = [rows - r, c + 1, r + 1, cols - c];

            for(let dir = 0; dir < 4; dir++){
                if(maxSteps[dir] > maxLen){
                    maxLen = Math.max(maxLen, explore (r, c, dir, 1, 2) + 1);
                }
            }
        }
    }

    return maxLen;

    function explore (r, c, dir, turnAllowed, expected){
        let nr = r + directions[dir][0];
        let nc = c + directions[dir][1];

        if(nr < 0 || nr >= rows || nc < 0 || nc >= cols || grid[nr][nc] !== expected){
            return 0;
        }

        let stateKey =(dir << 1) | turnAllowed;

        if(memo[nr][nc][stateKey] > 0){
            return memo[nr][nc][stateKey];
        }

        let best = explore(nr, nc, dir, turnAllowed, 2 - expected);

        if(turnAllowed === 1){
            let maxSteps = [rows - nr - 1, nc, nr, cols - nc - 1];
            let newDir =(dir + 1) % 4;

            if(maxSteps[newDir] > best){
                best = Math.max(best, explore (nr, nc, newDir, 0, 2 - expected));
            }
        }

        return memo[nr][nc][stateKey] = best + 1;
    }
    
};
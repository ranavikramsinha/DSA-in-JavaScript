//* https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/

var nearestExit = function(maze, entrance) {

    const m = maze.length
    const n = maze[0].length
    const queue = []
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]]

    queue.push([entrance[0], entrance[1]])
    maze[entrance[0]][entrance[1]]

    let steps = 0

    while(queue.length > 0){
        const size = queue.length

        for(let s = 0; s < size; s++){
            const[x, y] = queue.shift()

            if((x !== entrance[0] || y !== entrance[1]) && (x === 0 || x === m - 1 || y === 0 || y === n - 1)){
                return steps
            }

            for(const [dx, dy] of directions){
                const i = x + dx
                const j = y + dy

                if(i >= 0 && i < m && j >= 0 && j < n && maze[i][j] !== "+"){
                    queue.push([i, j])
                    maze[i][j] = "+"
                }
            }
        }
        steps++
    }
    return -1
};
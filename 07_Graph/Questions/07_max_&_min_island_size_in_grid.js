const grid = [
    ['L', 'W', 'W', 'L', 'L'],
    ['L', 'L', 'W', 'W', 'L'],
    ['W', 'W', 'L', 'W', 'W'],
    ['W', 'W', 'L', 'L', 'L'],
    ['L', 'W', 'L', 'L', 'L'],
    ['W', 'L', 'W', 'W', 'W'],
]

//* Minimum

function minIslandSize(grid){
    const rows = grid.length
    const columns = grid[0].length
    const visited = new Set()
    let smallest = Infinity

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){

            const pos = r + ',' + c

            if(grid[r][c] === 'L' && !visited.has(pos)){
                const size = islandSize(r, c)

                if(size < smallest){
                    smallest = size
                }
            }
        }
    }

    function islandSize(r, c){

        const pos = r + ',' + c

        if (
          r < 0 ||
          r >= rows ||
          c < 0 ||
          c >= columns || 
          grid[r][c] === 'W' ||
          visited.has(pos)
        ) {
          return 0
        }
    
        visited.add(pos)
        let size = 1
    
        size += islandSize(r + 1, c)
        size += islandSize(r - 1, c)
        size += islandSize(r, c + 1)
        size += islandSize(r, c - 1)

        return size
    }

    return smallest === Infinity ? 0 : smallest

}

console.log(minIslandSize(grid))


function minIslandSizeExplain(grid) {
    const rows = grid.length
    const columns = grid[0].length
    const visited = new Set()
    let smallest = Infinity

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            const pos = r + ',' + c
            console.log(`Checking cell (${r}, ${c}) - ${grid[r][c]}`)

            if (grid[r][c] === 'L' && !visited.has(pos)) {
                console.log(`Found new land at (${r}, ${c}), starting island size calculation`)
                const size = islandSize(r, c)
                console.log(`Island size at (${r}, ${c}) is ${size}`)

                if (size < smallest) {
                    console.log(`New smallest island size found: ${size}`)
                    smallest = size
                }
            }
        }
    }

    function islandSize(r, c) {

        const pos = r + ',' + c

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= columns || 
            grid[r][c] === 'W' ||
            visited.has(pos)
        ) {
            return 0
        }

        visited.add(pos)
        console.log(`Visiting cell (${r}, ${c}), marking as visited`)

        let size = 1

        size += islandSize(r + 1, c)
        size += islandSize(r - 1, c)
        size += islandSize(r, c + 1)
        size += islandSize(r, c - 1)

        return size;
    }

    const result = smallest === Infinity ? 0 : smallest
    console.log(`Smallest island size is ${result}`)
    return result
}

console.log(`Size of the smallest island: ${minIslandSizeExplain(grid)}`)

//* Maximum

function maxIslandSize(grid){
    const rows = grid.length
    const columns = grid[0].length
    const visited = new Set()
    let largest = 0

    for(let r = 0; r < rows; r++){
        for(let c = 0; c < columns; c++){

            const pos = r + ',' + c

            if(grid[r][c] === 'L' && !visited.has(pos)){
                const size = islandSize(r, c)

                if(size > largest){
                    largest = size
                }
            }
        }
    }

    function islandSize(r, c){

        const pos = r + ',' + c

        if (
          r < 0 ||
          r >= rows ||
          c < 0 ||
          c >= columns || 
          grid[r][c] === 'W' ||
          visited.has(pos)
        ) {
          return 0
        }
    
        visited.add(pos)
        let size = 1
    
        size += islandSize(r + 1, c)
        size += islandSize(r - 1, c)
        size += islandSize(r, c + 1)
        size += islandSize(r, c - 1)

        return size
    }

    return largest

}

console.log(maxIslandSize(grid))


function maxIslandSizeExplain(grid) {
    const rows = grid.length
    const columns = grid[0].length
    const visited = new Set()
    let largest = 0

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {

            const pos = r + ',' + c
            console.log(`Checking cell (${r}, ${c}) - ${grid[r][c]}`)

            if (grid[r][c] === 'L' && !visited.has(pos)) {
                console.log(`Found new land at (${r}, ${c}), starting island size calculation`)
                const size = islandSize(r, c)
                console.log(`Island size at (${r}, ${c}) is ${size}`)

                if (size > largest) {
                console.log(`New largest island size found: ${size}`)
                    largest = size
                }
            }
        }
    }

    function islandSize(r, c) {

        const pos = r + ',' + c

        if (
            r < 0 ||
            r >= rows ||
            c < 0 ||
            c >= columns || 
            grid[r][c] === 'W' ||
            visited.has(pos)
        ) {
            return 0
        }

        visited.add(pos)
        console.log(`Visiting cell (${r}, ${c}), marking as visited`)

        let size = 1

        size += islandSize(r + 1, c)
        size += islandSize(r - 1, c)
        size += islandSize(r, c + 1)
        size += islandSize(r, c - 1)

        return size;
    }

    const result = largest
    console.log(`largest island size is ${result}`)
    return result
}

console.log(`Size of the largest island: ${maxIslandSizeExplain(grid)}`)
//* https://leetcode.com/problems/spiral-matrix-iii/

var spiralMatrixIII = function(rows, cols, rStart, cStart) {
    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let result = [];
    let steps = 0;
    let dir = 0;

    result.push([rStart, cStart]);

    while(result.length < rows * cols){
        if(dir === 0 || dir === 2){
            steps++
        }

        for(let i = 0; i < steps; i++){
            rStart += directions[dir][0];
            cStart += directions[dir][1];

            if(rStart >= 0 && rStart < rows && cStart >= 0 && cStart < cols){
                result.push([rStart, cStart]);
            }
        }

        dir = (dir + 1) % 4;
    }

    return result;
};
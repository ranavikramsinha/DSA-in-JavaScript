//* https://leetcode.com/problems/rotating-the-box/

//* tc O(col * row * row) | sc O(col * row)

var rotateTheBox = function(box) {
    let m = box.length;
    let n = box[0].length;
    let rotatedBox = Array.from({ length: n}, () => Array(m).fill(""));

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            rotatedBox[i][m - 1 - j] = box[j][i];
        }
    }

    for(let j = 0; j < m; j++){
        for(let i = n - 1; i >= 0; i--){
            if(rotatedBox[i][j] === "."){
                let stonePosition = -1;

                for(let k = i - 1; k >= 0; k--){
                    if(rotatedBox[k][j] === "*"){
                        break;
                    }
                    else if(rotatedBox[k][j] === "#"){
                        stonePosition = k;
                        break;
                    }
                }

                if(stonePosition !== -1){
                    rotatedBox[i][j] = "#";
                    rotatedBox[stonePosition][j] = ".";
                }
            }
        }
    }
    return rotatedBox;
};

//* tc O(col * row) | sc O(col * row)

var rotateTheBox = function(box) {

    let m = box.length;
    let n = box[0].length;

    let rotatedBox = Array.from({ length: n}, () => Array(m).fill(""));

    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            rotatedBox[i][m - 1 - j] = box[j][i];
        }
    }

    for(let j = 0; j < m; j++){
        let k = n - 1;
        for(let i = n - 1; i >= 0; i--){
            if(rotatedBox[i][j] === "*"){
                k = i - 1;
            }
            else if(rotatedBox[i][j] === "#"){
                rotatedBox[i][j] = ".";
                rotatedBox[k][j] = "#";
                k--;
            }
        }
    }

    return rotatedBox;
    
};
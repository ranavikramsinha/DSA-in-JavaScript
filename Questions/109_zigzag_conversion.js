//* https://leetcode.com/problems/zigzag-conversion/

var convert = function(s, numRows) {
    if(numRows === 1 || numRows >= s.length){
        return s;
    }

    let rows = new Array(numRows).fill('');
    let idx = 0;
    let d = 1;

    for(let char of s){
        rows[idx] += char;

        if(idx === 0){
            d = 1;
        }
        else if(idx === numRows - 1){
            d = -1;
        }

        idx += d;
    }

    return rows.join('');
};
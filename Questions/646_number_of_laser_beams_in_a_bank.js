//* https://leetcode.com/problems/number-of-laser-beams-in-a-bank/

//* tc : O(m * n) | sc : O(1)

var numberOfBeams = function(bank) {

    let m = bank.length;
    let total = 0;
    let previous = 0;

    for (let i = 0; i < m; i++) {
        let row = bank[i];
        let count = 0;

        for (let j = 0, len = row.length; j < len; j++) {
            if (row.charCodeAt(j) === 49) {
                count++;
            }
        }
        if (count === 0) {
            continue;
        }

        if (previous !== 0) {
            total += previous * count;
        }

        previous = count;
    }

    return total;
    
};
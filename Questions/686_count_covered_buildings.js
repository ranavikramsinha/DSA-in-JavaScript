//* https://leetcode.com/problems/count-covered-buildings/

//* tc : O(n * m) | sc : O(n)

var countCoveredBuildings = function(n, buildings) {

    let minimumX = new Array(n + 1).fill(Infinity);
    let minimumY = new Array(n + 1).fill(Infinity);
    let maximumX = new Array(n + 1).fill(-Infinity);
    let maximumY = new Array(n + 1).fill(-Infinity);
    let count = 0;

    for (let i = 0; i < buildings.length; i++) {
            let [x, y] = buildings[i];

            if (x < minimumX[y]) {
                minimumX[y] = x;
            }

            if (x > maximumX[y]) {
                maximumX[y] = x;
            }

            if (y < minimumY[x]) {
                minimumY[x] = y;
            }
            
            if (y > maximumY[x]) {
                maximumY[x] = y;
            }
        }

    for (let i = 0; i < buildings.length; i++) {
        let [x, y] = buildings[i];

        if (x > minimumX[y] && x < maximumX[y] && y > minimumY[x] && y < maximumY[x]) {
            count++;
        }
    }

    return count;
    
};
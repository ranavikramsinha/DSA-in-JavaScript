//* https://leetcode.com/problems/max-points-on-a-line/

var maxPoints = function(points) {
    let n = points.length;

    if(n === 1){
        return 1;
    }

    let result = 0;

    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            let count = 2;

            let dy = points[j][1] - points[i][1];
            let dx = points[j][0] - points[i][0];

            for(let k = 0; k < n; k++){
                if(k !== i && k !== j){
                    let newDy = points[k][1] - points[i][1];
                    let newDx = points[k][0] - points[i][0];

                    if(dy * newDx === newDy * dx){
                        count++;
                    }
                }
            }

            result = Math.max(result, count);
        }
    }

    return result;
};
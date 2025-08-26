//* https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/

//* tc : O(n) | sc : O(1)

var areaOfMaxDiagonal = function(dimensions) {

    let maximumDiagonal = 0;
    let maximumArea  = 0;

    for(let arr of dimensions){
        let x = arr[0];
        let y = arr[1];

        let currentDiagonal = (x * x) + (y * y);
        let area = x * y;

        if(maximumArea < currentDiagonal){
            maximumDiagonal = area;
            maximumArea = currentDiagonal;
        }
        else if(maximumArea === currentDiagonal){
            maximumDiagonal = Math.max(maximumDiagonal, area);
        }
    }

    return maximumDiagonal;
    
};
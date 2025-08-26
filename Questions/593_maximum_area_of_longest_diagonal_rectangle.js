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

        if(currentDiagonal > maximumDiagonal){
            maximumDiagonal = currentDiagonal;
            maximumArea = area;
        }
        else if(currentDiagonal === maximumDiagonal){
            maximumArea = Math.max(maximumArea, area);
        }
    }

    return maximumArea;
    
};
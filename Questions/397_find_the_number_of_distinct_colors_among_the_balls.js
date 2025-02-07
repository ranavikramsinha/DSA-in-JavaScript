//* https://leetcode.com/problems/find-the-number-of-distinct-colors-among-the-balls/

//* tc O(n) | sc O(n)

var queryResults = function(limit, queries) {

    let n = queries.length;
    let result = new Array(n);
    let colorMap = new Map();
    let ballMap = new Map();
    
    for(let i = 0; i < n; i++){
        let ball = queries[i][0];
        let color = queries[i][1];
        
        if(ballMap.has(ball)){
            let prevColor = ballMap.get(ball);
            colorMap.set(prevColor, colorMap.get(prevColor) - 1);

            if(colorMap.get(prevColor) === 0){
                colorMap.delete(prevColor);
            }
        }
        
        ballMap.set(ball, color);

        if(colorMap.has(color)){
            colorMap.set(color, colorMap.get(color) + 1);
        } else{
            colorMap.set(color, 1);
        }
        
        result[i] = colorMap.size;
    }
    
    return result;
    
};
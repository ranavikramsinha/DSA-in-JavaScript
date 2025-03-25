//* https://leetcode.com/problems/check-if-grid-can-be-cut-into-sections/

//* tc O(nlogn) | sc O(n)

var checkValidCuts = function(n, rectangles) {

    let horizontal = [];
    let vertical = [];

    for(let arr of rectangles){
        let startX = arr[0];
        let endX = arr[1];
        let startY = arr[2];
        let endY = arr[3];

        horizontal.push([startX, startY]);
        vertical.push([endX, endY]);
    }

    let result1 = merge(horizontal);
    let result2 = merge(vertical);

    return result1.length >= 3 || result2.length >= 3;

    function merge(intervals) {

        let intLen = intervals.length;

        intervals.sort((a,b) => a[0] - b[0]);

        let result = [];
        result.push(intervals[0]);

        for(let i = 1; i < intLen; i++){
            let len = result.length;
            
            if(intervals[i][0] < result[len - 1][1]){
                result[len - 1][1] = Math.max(result[len - 1][1], intervals[i][1]);
            }
            else{
                result.push(intervals[i]);
            }
        }

        return result;
    
    };
    
};
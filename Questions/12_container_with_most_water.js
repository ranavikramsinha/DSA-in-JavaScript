//* https://leetcode.com/problems/container-with-most-water/description/

var maxArea = function(height) {

    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while(left < right){
        let currentHeight = Math.min(height[left], height[right])
        let currentWidth = right - left
        
        let currentArea = currentHeight * currentWidth

        maxArea = Math.max(maxArea, currentArea)

        if(height[left] < height[right]){
            left++
        }
        else{
            right--
        }
    }

    return maxArea
    
};

console.log(maxArea([1,4,3,5,3,7,8]))
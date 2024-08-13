//* https://leetcode.com/problems/trapping-rain-water/

var trap = function(height) {
    let n = height.length;
    let leftMax = getLeftMax(height, n);
    let rightMax = getRightMax(height, n);
    let sum = 0;

    function getLeftMax(height, n){
        let leftMax = new Array(n);

        leftMax[0] = height[0];

        for(let i = 1; i < n; i++){
            leftMax[i] = Math.max(leftMax[i - 1], height[i]);
        }
        return leftMax;
    }

    function getRightMax(height, n){
        let rightMax = new Array(n);

        rightMax[n - 1] = height[n - 1];

        for(let i = n - 2; i >= 0; i--){
            rightMax[i] = Math.max(rightMax[i + 1], height[i]);
        }
        return rightMax;
    }

    for(let i = 0; i < n; i++){
        sum += Math.min(leftMax[i], rightMax[i]) - height[i];
    }

    return sum;
};
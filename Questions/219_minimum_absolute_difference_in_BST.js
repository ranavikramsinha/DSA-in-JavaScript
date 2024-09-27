//* https://leetcode.com/problems/minimum-absolute-difference-in-bst/

var rangeSumBST = function(root, low, high) {
    if(root === null){
        return 0;
    }

    if(root.val < low){
        return rangeSumBST(root.right, low, high);
    }

    if(root.val > high){
        return rangeSumBST(root.left, low, high);
    }

    let currentValue = 0;

    if(root.val >= low && root.val <= high){
        currentValue = root.val;
    }

    let leftSum = rangeSumBST(root.left, low, high);
    let rightSum = rangeSumBST(root.right, low, high);

    let total = currentValue + leftSum + rightSum;
    return total;
};
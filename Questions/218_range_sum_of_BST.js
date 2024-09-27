//* https://leetcode.com/problems/range-sum-of-bst/

var rangeSumBST = function(root, low, high) {
    if(root === null){
        return 0;
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
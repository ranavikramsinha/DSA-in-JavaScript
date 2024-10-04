//* https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

var sortedArrayToBST = function(nums) {

    let n = nums.length;

    if(n === 0){
        return null;
    }

    let middle = Math.trunc(n / 2);

    let node = new TreeNode(nums[middle]);

    node.left = sortedArrayToBST(nums.slice(0, middle));
    node.right = sortedArrayToBST(nums.slice(middle + 1));

    return node;
    
};
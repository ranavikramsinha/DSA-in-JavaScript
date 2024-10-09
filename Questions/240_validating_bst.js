//* https://leetcode.com/problems/validate-binary-search-tree/

var isValidBST = function(root) {

    return solve(root, -Infinity, Infinity);

    function solve(node, min, max){
        if(node === null){
            return true;
        }

        if(node.val <= min || node.val >= max){
            return false;
        }

        return solve(node.left, min, node.val) && solve(node.right, node.val, max);
    }
    
};
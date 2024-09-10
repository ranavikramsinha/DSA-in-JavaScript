//* https://leetcode.com/problems/binary-tree-inorder-traversal/

var inorderTraversal = function(root) {
    let arr = [];
    
    function solve(root, arr){
        if(root !== null){
            solve(root.left, arr);
            arr.push(root.val);
            solve(root.right, arr);
        }
    }

    solve(root, arr);
    return arr;
};
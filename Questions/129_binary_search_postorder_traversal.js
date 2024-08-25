//* https://leetcode.com/problems/binary-tree-postorder-traversal/

var postorderTraversal = function(root) {

    let arr = [];

    function solve(root, arr){
        if(root === null){
            return [];
        }

        solve(root.left, arr);
        solve(root.right, arr);
        arr.push(root.val);
    }

    solve(root, arr);

    return arr;
    
};
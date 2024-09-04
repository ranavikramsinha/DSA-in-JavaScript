//* https://leetcode.com/problems/invert-binary-tree/

var invertTree = function(root) {
    function solve(root){
        if(root === null){
            return;
        }

        let temp = root.left;
        root.left = root.right;
        root.right = temp

        solve(root.left);
        solve(root.right);
    }

    solve(root);

    return root;
};
//* https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/

var buildTree = function(inorder, postorder) {
    let n = inorder.length;
    let inorderStart = 0;
    let inorderEnd = n - 1;
    let postorderStart = 0;
    let postorderEnd = n - 1;

    function solve(inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd){
        if(inorderStart > inorderEnd){
            return null;
        }

        let root = new TreeNode(postorder[postorderEnd]);
        let i = inorderStart;

        for(; i <= inorderEnd; i++){
            if(inorder[i] === root.val){
                break;
            }
        }

        let leftLength = i - inorderStart;
        let rightLength = inorderEnd - i;

        root.left = solve(inorder, postorder, inorderStart, i - 1, postorderStart, postorderStart + leftLength - 1);
        root.right = solve(inorder, postorder, i + 1, inorderEnd, postorderEnd - rightLength, postorderEnd - 1);

        return root;
    }

    return solve(inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd);
};
//* https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

var buildTree = function(preorder, inorder) {
    let n = preorder.length;
    let idx = {value: 0};

    function solve(preorder, inorder, start, end, idx){
        if(start > end){
            return null;
        }

        let rootValue = preorder[idx.value];
        let i = start;

        for(; i <= end; i++){
            if(inorder[i] === rootValue){
                break;
            }
        }

        idx.value++;

        let root = new TreeNode(rootValue)
        root.left = solve(preorder, inorder, start, i - 1, idx);
        root.right = solve(preorder, inorder, i + 1, end, idx);
        return root;
    }

    return solve(preorder, inorder, 0, n - 1, idx);
    
};
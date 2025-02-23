//* https://leetcode.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal/

//* tc O(n) | sc O(n)

var constructFromPrePost = function(preorder, postorder) {

    let n = preorder.length;
    let map = new Map();
    
    for (let i = 0; i < n; i++){
        map.set(postorder[i], i);
    }

    return solve(0, 0, n - 1);
    
    function solve(preStart, postStart, preEnd){
        if (preStart > preEnd){
            return null;
        }
        
        let root = new TreeNode(preorder[preStart]);

        if (preStart === preEnd){
            return root;
        }
        
        let nextNode = preorder[preStart + 1];
        let j = map.get(nextNode);
        
        let num = j - postStart + 1;
        
        root.left = solve(preStart + 1, postStart, preStart + num);
        root.right = solve(preStart + num + 1, j + 1, preEnd);
        
        return root;
    }
    
};
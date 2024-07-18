//* https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/

var lowestCommonAncestor = function(root, p, q) {

    if(!root || root === p || root === q){
        return root
    }

    const leftSubTree = lowestCommonAncestor(root.left, p, q)
    const rightSubTree = lowestCommonAncestor(root.right, p, q)

    return (leftSubTree && rightSubTree) ? root : (leftSubTree || rightSubTree)
    
};
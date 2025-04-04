//* https://leetcode.com/problems/lowest-common-ancestor-of-deepest-leaves/

//* tc O(n) | sc O(maximumDepth)

var lcaDeepestLeaves = function(root) {

    let map = new Map();
    let maximumDepth = 0;

    findMaximumDepthWithHelpOfRootLevel(root, 0);

    return lowestCommonAncestor(root);

    function findMaximumDepthWithHelpOfRootLevel(node, level){
        if(!node){
            return;
        }

        maximumDepth = Math.max(maximumDepth, level);
        map.set(node.val, level);

        findMaximumDepthWithHelpOfRootLevel(node.left, level + 1);
        findMaximumDepthWithHelpOfRootLevel(node.right, level + 1)
    }

    function lowestCommonAncestor(node){
        if(!node || map.get(node.val) === maximumDepth){
            return node;
        }

        let leftSubTree = lowestCommonAncestor(node.left);
        let rightSubTree = lowestCommonAncestor(node.right);

        return leftSubTree !== null && rightSubTree !== null ? node : leftSubTree || rightSubTree;
    }
    
};
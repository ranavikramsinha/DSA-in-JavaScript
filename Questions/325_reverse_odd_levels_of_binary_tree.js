//* https://leetcode.com/problems/reverse-odd-levels-of-binary-tree/

//* tc O(n) | sc O(n)

var reverseOddLevels = function(root) {

    if(!root){
        return null;
    }

    dfs(root.left, root.right, 0);
    return root;

    function dfs(leftNode, rightNode, level){

        if(!leftNode || !rightNode){
            return;
        }

        if(level % 2 === 0){
            [leftNode.val, rightNode.val] = [rightNode.val, leftNode.val];
        }

        dfs(leftNode.left, rightNode.right, level + 1);
        dfs(leftNode.right, rightNode.left, level + 1);
    }
    
};
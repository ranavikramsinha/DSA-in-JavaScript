//* https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/description/

var longestZigZag = function(root) {

    let maxLength = 0

    function dfs(tree, isLeft, count){

        if(!tree){
            return
        }

        maxLength = Math.max(maxLength, count)

        if(isLeft){
            dfs(tree.left, false, count + 1)
            dfs(tree.right, true, 1)
        }
        else{
            dfs(tree.right, true, count + 1)
            dfs(tree.left, false, 1)
        }
    }

    dfs(root.left, false, 1)
    dfs(root.right, true, 1)

    return maxLength
    
};
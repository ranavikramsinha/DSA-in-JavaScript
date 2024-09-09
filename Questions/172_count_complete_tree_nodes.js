//* https://leetcode.com/problems/count-complete-tree-nodes/

var countNodes = function(root) {
    let count = 0;

    let solve = (node) => {
        if(!node){
            return;
        }

        count++;

        solve(node.left);
        solve(node.right);
    }

    solve(root);
    
    return count;
};
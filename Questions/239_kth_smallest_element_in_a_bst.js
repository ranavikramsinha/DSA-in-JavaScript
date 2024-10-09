//* https://leetcode.com/problems/kth-smallest-element-in-a-bst/

var kthSmallest = function(root, k) {
    let count = 0;
    let result;

    function inorder(node){
        if(node === null){
            return;
        }

        inorder(node.left);
        count++;

        if(count === k){
            result = node.val;
            return;
        }
        inorder(node.right);
    }

    inorder(root);

    return result;
};
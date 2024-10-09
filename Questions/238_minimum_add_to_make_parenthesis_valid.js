//* https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/

var kthSmallest = function(root, k) {
    let count = 0;

    function inorder(node){
        if(node === null){
            count++;

            if(count === k){
                return node.val;
            }
            return;
        }

        inorder(node.left);
        inorder(node.right);
    }

    inorder(root);

    return arr[k - 1];
};
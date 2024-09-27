//* https://leetcode.com/problems/minimum-absolute-difference-in-bst/

var getMinimumDifference = function(root) {
    let arr = [];

    function inorder(node){
        if(node === null){
            return;
        }

        inorder(node.left);
        arr.push(node.val);
        inorder(node.right);
    }

    inorder(root);

    let minimum = Infinity;

    for(let i = 1; i < arr.length; i++){
        let current = arr[i];
        let previous = arr[i - 1];

        minimum = Math.min(minimum, current - previous);
    }

    return minimum;
};
//* https://leetcode.com/problems/symmetric-tree/

var isSymmetric = function(root) {

    if(!root){
        return true;
    }

    function check(l, r){
        if(l === null && r === null){
            return true;
        }

        if(l !== null && r === null || l === null && r !== null){
            return false;
        }

        return (l.val === r.val && check(l.left, r.right) && check(l.right, r.left))

    }

    return check(root.left, root.right)
};
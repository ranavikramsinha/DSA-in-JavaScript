//* https://leetcode.com/problems/linked-list-in-binary-tree/

var isSubPath = function(head, root) {
    
    if(root === null){
        return false;
    }

    return check(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right);

    function check(head, root){
        if(head === null){
            return true;
        }

        if(root === null){
            return false;
        }

        if(root.val !== head.val){
            return false;
        }

        return check(head.next, root.left) || check(head.next, root.right);
    }
};
//* https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

var connect = function(root) {
    
    if(root === null || !root.left){
        return root;
    }

    root.left.next = root.right;
    root.right.next = root.next ? root.next.left : null;

    connect(root.left);
    connect(root.right);
    return root;
};
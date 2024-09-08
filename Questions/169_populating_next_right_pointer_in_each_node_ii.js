//* https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/

var connect = function(root) {
    if(root === null){
        return root;
    }

    let current = root;
    let temp = new Node(0);
    let previous = temp;

    while(current !== null){
        if(current.left !== null){
            previous.next = current.left;
            previous = previous.next;
        }

        if(current.right !== null){
            previous.next = current.right;
            previous = previous.next;
        }

        current = current.next;

        if(current === null){
            current = temp.next;
            temp.next = null;
            previous = temp;
        }
    }

    return root;
};
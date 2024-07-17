//* https://leetcode.com/problems/delete-node-in-a-bst/

var deleteNode = function(root, key) {

    if(null === root){
        return null
    }

    if(root.val === key){
        if(null === root.left && null === root.right){
            return null
        }

        if(null !== root.left && null !== root.right){
            let current = root.right

            while(current.left){
                current = current.left
            }

            current.left = root.left

            return root.right
        }

        if(null === root.left){
            return root.right
        }

        if(null === root.right){
            return root.left
        }
    }

    if(key < root.val){
        root.left = deleteNode(root.left, key)
    }
    else{
        root.right = deleteNode(root.right, key)
    }

    return root
};
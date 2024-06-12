//* Tree Sum Problem

class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

function treeSum(root){
    if(!root){
        return 0
    }

    return root.key + treeSum(root.left) + treeSum(root.right)
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(treeSum(root))
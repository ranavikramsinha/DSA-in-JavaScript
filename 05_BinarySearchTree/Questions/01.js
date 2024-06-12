//* Tree Sum Problem

class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

function treeSumRecursive(root){
    if(!root){
        return 0
    }

    return root.key + treeSumRecursive(root.left) + treeSumRecursive(root.right)
}

function treeSum(root){
    if(!root){
        return 0
    }

    const queue = [root]
    let sum = 0

    while(queue.length){
        const node = queue.shift()
        sum += node.key

        if(node.left){
            queue.push(node.left)
        }

        if(node.right){
            queue.push(node.right)
        }
    }

    return sum
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(treeSumRecursive(root))
console.log(treeSum(root))
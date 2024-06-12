class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

function breadthFirstSearch(root){
    if(!root){
        return []
    }

    const values = []
    const queue = [root]

    while(queue.length){
        const node = queue.shift()
        values.push(node.key)

        if(node.left){
            queue.push(node.left)
        }

        if(node.right){
            queue.push(node.right)
        }
    }

    return values
}

let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

console.log(breadthFirstSearch(root))
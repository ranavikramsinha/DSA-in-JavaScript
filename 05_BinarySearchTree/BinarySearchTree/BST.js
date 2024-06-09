class BSTNode{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

class binarySearchTree{
    constructor(){
        this.root = null
    }

    insert(key){
        const newNode = new BSTNode(key)

        if(!this.root){
            this.root = newNode
        }
        else{
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(node, newNode){  //* node --> root node
        if(newNode.key < node.key){
            if(!node.left){
                node.left = newNode
            }
            else{
                this.insertNode(node.left, newNode)
            }
        }
        else{
            if(!node.right){
                node.right = newNode
            }
            else{
                this.insertNode(node.right, newNode)
            }
        }
    }

}
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

    // delete(key){
    //     this.root = this.deleteNode(this.root, key)
    // }

    // deleteNode(node, key){ //* node --> root
    //     if(node === null){
    //         return null
    //     }

    //     if(key < node.key){
    //         node.left = this.deleteNode(node.left, key)
    //     }

    //     else if(key > node.key){
    //         node.right = this.deleteNode(node.right, key)
    //     }

    //     else{
    //         if(node.left === null && node.right === null){
    //             return null
    //         }

    //         else if(node.left === null){
    //             return node.right
    //         }

    //         else if(node.right === null){
    //             return node.left
    //         }

    //         else{
    //             let tempNode = this.findMinNode(node.right)
    //             node.key = tempNode.key
    //             node.right = this.deleteNode(node.right, tempNode.key)
    //         }
    //     }

    //     return node
    // }

    // findMinNode(node){
    //     while(node.left !== null){
    //         node = node.left
    //     }

    //     return node
    // }

    delete(key){
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key){  // node --> root
        if(node === null){
            return null
        }

        if(key < node.key){
            node.left = this.delete(node.left, key)
        }

        else if(key > node.key){
            node.right = this.deleteNode(node.right, key)
        }

        else{
            if(node.left === null && node.right === null){
                return null
            }

            else if(node.left === null){
                return node.right
            }

            else if(node.right === null){
                return node.left
            }

            else{
                let tempNode = this.findMaxNode(node.left)
                node.key = tempNode.key
                node.left = this.deleteNode(node.left, tempNode)
            }
        }

        return node
    }

    findMaxNode(node){
        while(node.right !== null){
            node = node.right
        }

        return node
    }

}
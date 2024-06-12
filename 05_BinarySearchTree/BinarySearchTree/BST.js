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

    delete(key){
        this.root = this.deleteNode(this.root, key)
    }

    deleteNode(node, key){ //* node --> root
        if(node === null){
            return null
        }

        if(key < node.key){
            node.left = this.deleteNode(node.left, key)
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
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }

        return node
    }

    findMinNode(node){
        while(node.left !== null){
            node = node.left
        }

        return node
    }

    // delete(key){
    //     this.root = this.deleteNode(this.root, key)
    // }

    // deleteNode(node, key){  // node --> root
    //     if(node === null){
    //         return null
    //     }

    //     if(key < node.key){
    //         node.left = this.delete(node.left, key)
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
    //             let tempNode = this.findMaxNode(node.left)
    //             node.key = tempNode.key
    //             node.left = this.deleteNode(node.left, tempNode)
    //         }
    //     }

    //     return node
    // }

    // findMaxNode(node){
    //     while(node.right !== null){
    //         node = node.right
    //     }

    //     return node
    // }

    inorderTraversal(){
        const result = []
        this.inOrder(this.root, result)
        return result
    }

    inOrder(node, result){
        if(node !== null){
            this.inOrder(node.left, result)
            result.push(node.key)
            this.inOrder(node.right, result)
        }
    }

    preOrderTraversal(){
        const result = []
        this.preOrder(this.root, result)
        return result
    }

    preOrder(node, result){
        if(node !== null){
            result.push(node.key)
            this.preOrder(node.left, result)
            this.preOrder(node.right, result)
        }
    }

    postOrderTraversal(){
        const result = []
        this.postOrder(this.root, result)
        return result
    }

    postOrder(node, result){
        if(node !== null){
            this.postOrder(node.left, result)
            this.postOrder(node.right, result)
            result.push(node.key)
        }
    }

    depthFirstTraversal(root = this.root){ //* iterative approach
            if(!root){
                return [] //* empty
            }
        
            const values = []
            const stack = [root]
        
            while(stack.length > 0){
                const node = stack.pop()
                values.push(node.key)
        
                if(node.right){
                    stack.push(node.right)
                }
        
                if(node.left){
                    stack.push(node.left)
                }
            }
        
            return values
        }

    recursiveDFT(root = this.root){ //* recursive approach
        if(!root){
            return [] //* empty
        }

        const leftValues = this.recursiveDFT(root.left)
        const rightValues = this.recursiveDFT(root.right)

        // return [root.key, leftValues, rightValues]

        return [root.key, ...leftValues, ...rightValues]
    }
    
    breadthFirstSearch(root = this.root){
        if(!root){
            return []
        }
    
        const values = []
        const queue = [root]
    
        while(queue.length > 0){
            const node = queue.shift()
            values.push(node.key)
    
            if(node.left !== null){
                queue.push(node.left)
            }
    
            if(node.right !== null){
                queue.push(node.right)
            }
        }
    
        return values
    }

}

let bst = new binarySearchTree()

bst.insert(50)
bst.insert(30)
bst.insert(70)
bst.insert(20)
bst.insert(40)
bst.insert(60)
bst.insert(80)

bst.delete(20)
bst.delete(30)
bst.delete(50)

console.log("Inorder Traversal:", bst.inorderTraversal()) //* Preorder Traversal: [ 60, 40, 70, 80 ]
console.log("Preorder Traversal:", bst.preOrderTraversal()) //* Inorder Traversal: [ 40, 60, 70, 80 ]
console.log("Postorder Traversal:", bst.postOrderTraversal()) //* Postorder Traversal: [ 40, 80, 70, 60 ]

console.log(bst.depthFirstTraversal()) //* [ 60, 40, 70, 80 ]
console.log(bst.recursiveDFT()) //* [ 60, 40, 70, 80 ]
console.log(bst.breadthFirstSearch()) //* [ 60, 40, 70, 80 ]
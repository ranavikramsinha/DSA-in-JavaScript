class Node{
    constructor(key){
        this.key = key
        this.left = null
        this.right = null
    }
}

// function depthFirstTraversal(root){ //* iterative approach
//     if(!root){
//         return [] //* empty
//     }

//     const values = []
//     const stack = [root]

//     while(stack.length > 0){
//         const node = stack.pop()
//         values.push(node.key)

//         if(node.right !== null){
//             stack.push(node.right)
//         }

//         if(node.left !== null){
//             stack.push(node.left)
//         }
//     }

//     return values
// }


function recursiveDFT(root){ //* recursive approach
    if(!root){
        return [] //* empty
    }

    const leftValues = recursiveDFT(root.left)
    const rightValues = recursiveDFT(root.right)

    // return [root.key, leftValues, rightValues]

    return [root.key, ...leftValues, ...rightValues]
}


let root = new Node(1)
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)
root.right.left = new Node(6)
root.right.right = new Node(7)

// console.log(depthFirstTraversal(root))
console.log(recursiveDFT(root))
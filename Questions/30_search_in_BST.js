//* https://leetcode.com/problems/search-in-a-binary-search-tree/description/

class node{
    constructor(val = 0, left = null, right = null){
        this.val = val
        this.left = left
        this.right = right
    }
}

var searchBST = function(root, val) {

    let current = root
    
    while(current){
        if(current.val === target){
            return current
        }

        else{
            current = current.val > target ? current.left : current.right
        }
    }

    return null
    
};

let root = new node(8)
root.left = new node(3)
root.right = new node(10)
root.left.left = new node(1)
root.left.right = new node(6)
root.left.right.left = new node(4)
root.left.right.right = new node(7)
root.right.right = new node(14)
root.right.right.left = new node(13)

let target = 7
let result = searchBST(root, target);
console.log(`Result: ${result ? result.val : 'null'}`);
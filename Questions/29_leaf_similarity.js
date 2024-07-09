//* https://leetcode.com/problems/leaf-similar-trees/

class Node {
    constructor(val = 0, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

var leafSimilar = function(root1, root2) {
    
    let sequence1 = getLeafSequence(root1, "")
    let sequence2 = getLeafSequence(root2, "")
    
    return sequence1 === sequence2

    function getLeafSequence(root, currentSequence) {
        if (root === null) {
            return currentSequence;
        }

        if (root.left === null && root.right === null) {
            return currentSequence + "-" + root.val
        }

        let leftSequence = getLeafSequence(root.left, currentSequence);
        let rightSequence = getLeafSequence(root.right, leftSequence);
        
        return rightSequence;
    }
}

const root1 = new Node(1, new Node(2, new Node(4), null), new Node(3, new Node(5), new Node(6)))
const root2 = new Node(7, new Node(2, new Node(4), null), new Node(3, new Node(5), new Node(6)))

// const root1 = new Node(1, new Node(2, new Node(14), null), new Node(3, new Node(15), new Node(16)))
// const root2 = new Node(7, new Node(2, new Node(4), null), new Node(3, new Node(5), new Node(6)))

console.log(leafSimilar(root1, root2))
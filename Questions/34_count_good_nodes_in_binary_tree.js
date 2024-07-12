//*https://leetcode.com/problems/count-good-nodes-in-binary-tree/description/

var goodNodes = function(root) {

    let goodNodCount = 0;

    function traverse(node, max){

        if(!node){
            return
        }

        if(node.val >= max){
            goodNodCount++
        }

        max = Math.max(max, node.val)

        traverse(node.left, max)
        traverse(node.right, max)
    }

    traverse(root, root.val)

    return goodNodCount
    
};
//* https://leetcode.com/problems/binary-tree-right-side-view/

var rightSideView = function(root) {

    if(!root){
        return []
    }

    let result = []
    let line = []

    line.push(root)

    while(line.length){
        let values = []
        let n = line.length

        for(let i = 0; i < n; i++){
            let node = line.shift()

            if(root){
                if(node.left){
                    line.push(node.left)
                }
                if(node.right){
                    line.push(node.right)
                }

                values.push(node.val)
            }
        }

        result.push(values.pop())
    }

    return result
    
};
//* https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/

var maxLevelSum = function(root) {

    if(!root){
        return 0
    }

    let max = -Infinity
    let level = 0
    let currentLevel = 0
    let line = [root]

    while(line.length > 0){
        currentLevel++

        const levelSize = line.length
        let maxAtLevel = null

        for(let i = 0; i < levelSize; i++){
            const node = line.shift()
            maxAtLevel += node.val

            if(node.left){
                line.push(node.left)
            }

            if(node.right){
                line.push(node.right)
            }
        }

        if(maxAtLevel > max){
            level = currentLevel
        }

        max = Math.max(maxAtLevel, max)
    }

    return level
    
};
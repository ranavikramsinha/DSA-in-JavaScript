//* https://leetcode.com/problems/path-sum-iii/

var pathSum = function(root, targetSum) {

    const countPathsWithSum = function(currentPath, targetSum){
        let index = currentPath.length - 1
        let currentSum = 0
        let pathCount = 0

        while(index >= 0){
            currentSum += currentPath[index]

            if(currentSum === targetSum){
                pathCount++
            }

            index--
        }

        return pathCount
    }

    const traverseTree = function(node, targetSum, currentPath = [], result = [0]){
        if(node !== null){
            currentPath.push(node.val)
            result[0] += countPathsWithSum(currentPath, targetSum)
            traverseTree(node.left, targetSum, currentPath, result)
            traverseTree(node.right, targetSum, currentPath, result)
            currentPath.pop()
        }

        return result
    }

    return traverseTree(root, targetSum)[0]
    
};
//* https://leetcode.com/problems/find-largest-value-in-each-tree-row/

//* tc O(n) | sc O(n)

//* BFS
var largestValues = function(root) {

    if(!root){
        return [];
    }

    let queue = [root];
    let result = [];

    while(queue.length > 0){
        let currentLevelSize = queue.length;
        let maximumElement = -Infinity;

        for(let i = 0; i < currentLevelSize; i++){
            let currentNode = queue.shift();
            maximumElement = Math.max(maximumElement, currentNode.val);

            if(currentNode.left){
                queue.push(currentNode.left);
            }

            if(currentNode.right){
                queue.push(currentNode.right);
            }
        }

        result.push(maximumElement);
    }

    return result;
    
};

//* DFS
var largestValues = function(root) {

    let result = [];

    dfs(root, 0);

    return result;

    function dfs(root, depth){
        if(!root){
            return;
        }

        if(depth === result.length){
            result.push(root.val);
        }
        else{
            result[depth] = Math.max(result[depth], root.val);
        }

        dfs(root.left, depth + 1);
        dfs(root.right, depth + 1);
    }
    
};
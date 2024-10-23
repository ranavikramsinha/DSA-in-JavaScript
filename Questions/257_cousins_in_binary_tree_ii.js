//* https://leetcode.com/problems/cousins-in-binary-tree-ii/

//* tc O(n) | sc O(n)
var replaceValueInTree = function(root) {
    if(root === null){
        return root;
    }

    let queue = [root];
    let levelSum = root.val;

    while(queue.length > 0){
        let n = queue.length;
        let nextLevelSum = 0;

        for(let i = 0; i < n; i++){
            let current = queue.shift();
            current.val = levelSum - current.val;

            let siblingSum = (current.left !== null ? current.left.val : 0) + (current.right !== null ? current.right.val : 0);

            if(current.left !== null){
                nextLevelSum += current.left.val;
                current.left.val = siblingSum;
                queue.push(current.left);
            }

            if(current.right !== null){
                nextLevelSum += current.right.val;
                current.right.val = siblingSum;
                queue.push(current.right);
            }
        }

        levelSum = nextLevelSum;
    }

    return root;
};

//* tc O(2 * n) | sc O(n)
var replaceValueInTree = function(root) {
    if(root === null){
        return root;
    }

    let queue = [root];
    let levelSum = [];

    while(queue.length > 0){
        let currentLevelSum = 0;
        let n = queue.length;

        for(let i = 0; i < n; i++){
            let current = queue.shift();
            currentLevelSum += current.val;

            if(current.left !== null){
                queue.push(current.left);
            }
            
            if(current.right !== null){
                queue.push(current.right);
            }
        }

        levelSum.push(currentLevelSum);
    }

    queue = [root];
    
    root.val = 0;

    let level = 1;

    while(queue.length > 0){
        let n = queue.length;

        for(let i = 0; i < n; i++){
            let current = queue.shift();

            let siblingSum = (current.left !== null ? current.left.val : 0) + (current.right !== null ? current.right.val : 0);

            if(current.left !== null){
                current.left.val = levelSum[level] - siblingSum;
                queue.push(current.left);
            }

            if(current.right !== null){
                current.right.val = levelSum[level] - siblingSum;
                queue.push(current.right);
            }
        }

        level++;
    }

    return root;
};
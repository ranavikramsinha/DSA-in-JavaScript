//* https://leetcode.com/problems/minimum-number-of-operations-to-sort-a-binary-tree-by-level/

//* tc O(level * wlogw + w + w) | sc O(n) where w is number of elements in each level

var minimumOperations = function(root) {

    if(!root){
        return 0;
    }

    let queue = [root];
    let result = 0;

    while(queue.length > 0){
        let levelSize = queue.length;
        let levelValues = [];

        for(let i = 0; i < levelSize; i++){
            let node = queue.shift();
            levelValues.push(node.val);

            if(node.left){
                queue.push(node.left);
            }

            if(node.right){
                queue.push(node.right);
            }
        }

        result += solve(levelValues);
    }

    return result;

    function solve(arr){
        let n = arr.length;
        let sortedArr = [...arr].sort((a, b) => a - b);
        let map = new Map();
        let swapCount = 0;

        for(let i = 0; i < n; i++){
            map.set(arr[i], i);
        }

        for(let i = 0; i < n; i++){
            if(arr[i] === sortedArr[i]){
                continue;
            }

            let currentIndex = map.get(sortedArr[i]);

            map.set(arr[i], currentIndex);
            map.set(arr[currentIndex], i);

            [arr[i], arr[currentIndex]] = [arr[currentIndex], arr[i]];
            swapCount++;
        }

        return swapCount;
    }
    
};
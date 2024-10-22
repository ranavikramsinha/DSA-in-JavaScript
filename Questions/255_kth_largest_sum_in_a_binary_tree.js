//* https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/

//* tc O(n) | sc O(h)
var kthLargestLevelSum = function(root, k) {

    let arr = [];

    solve(root, 0);

    if(!arr[k - 1]){
        return -1;
    }

    arr.sort((a, b) => b - a);
    return arr[k - 1];

    function solve(node, level){
        if(node === null){
            return null;
        }

        if(arr[level]){
            arr[level] += node.val;
        }
        else{
            arr[level] = node.val;
        }

        solve(node.left, level + 1);
        solve(node.right, level + 1);
    }

};

//* tc O(nlog(n)) | sc O(n)
var kthLargestLevelSum = function(root, k) {

    let queue = [root];
    let minHeap = new MinPriorityQueue({ priority: x => x });

    while(queue.length > 0){
        let sum = 0;
        let size = queue.length;

        for(let i = 0; i < size; i++){
            let current = queue.shift();
            sum += current.val;

            if(current.left !== null) {
                queue.push(current.left);
            }

            if(current.right !== null){
                queue.push(current.right);
            }
        }

        if(minHeap.size() < k){
            minHeap.enqueue(sum);
        }
        else if(minHeap.front().element < sum){
            minHeap.dequeue();
            minHeap.enqueue(sum);
        }
    }

    if(minHeap.size() < k){
        return -1;
    }

    return minHeap.front().element;
    
};
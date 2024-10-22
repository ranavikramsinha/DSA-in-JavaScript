//* https://leetcode.com/problems/kth-largest-sum-in-a-binary-tree/

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
//* https://leetcode.com/problems/binary-tree-maximum-path-sum/

var maxPathSum = function(root) {
    let maxSum = -Infinity;

    function solve(root){
        if(root === null){
            return 0;
        }

        let l = solve(root.left);
        let r = solve(root.right);

        let all = l + r + root.val;
        let eitherLeftOrRight = Math.max(l, r) + root.val;
        let onlyRoot = root.val;

        maxSum = Math.max(maxSum, all, eitherLeftOrRight, onlyRoot);
        return Math.max(eitherLeftOrRight, onlyRoot);
    }

    solve(root);

    return maxSum;
};

// var maxPathSum = function(root) {
//     let MaxSum = root.val;

//     function solve(root){
//         if(root === null){
//             return 0;
//         }

//         let leftMaxSum = Math.max(0, solve(root.left));
//         let rightMaxSum = Math.max(0, solve(root.right));

//         MaxSum = Math.max(MaxSum, root.val + leftMaxSum + rightMaxSum);

//         return Math.max(root.val + leftMaxSum, root.val + rightMaxSum);
//     }

//     solve(root);

//     return MaxSum;
// };
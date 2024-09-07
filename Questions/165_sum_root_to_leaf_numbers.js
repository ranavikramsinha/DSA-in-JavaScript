//* https://leetcode.com/problems/sum-root-to-leaf-numbers/

var sumNumbers = function(root) {

    function solve(root, current){
        if(root === null){
            return 0;
        }

        current = (current * 10) + root.val;

        if(root.left === null && root.right === null){
            return current;
        }

        let leftSum = solve(root.left, current);
        let rightSum = solve(root.right, current);

        return leftSum + rightSum;
    }

    return solve(root, 0);

};
//* https://leetcode.com/problems/recover-a-tree-from-preorder-traversal/

//* tc O(n) | sc O(n)

var recoverFromPreorder = function(traversal) {

    let n = traversal.length;
    
    let indexObject = { i: 0};

    return solve(traversal, indexObject, 0);

    function solve(traversal, indexObject, depth){
        if(indexObject.i >= n){
            return null;
        }

        let i = indexObject.i;
        let dashCount = 0;

        while(i < n && traversal[i] === '-'){
            dashCount++;
            i++;
        }

        if(dashCount !== depth){
            return null;
        }

        indexObject.i += dashCount;

        let value = 0;

        while(indexObject.i < n && isDigit(traversal[indexObject.i])){
            value = value * 10 + (traversal[indexObject.i].charCodeAt(0) - '0'.charCodeAt(0));
            indexObject.i++;
        }

        let node = new TreeNode(value);

        node.left = solve(traversal, indexObject, depth + 1);
        node.right = solve(traversal, indexObject, depth + 1);

        return node;
    }

    function isDigit(char){
        return char >= '0' && char <= '9';
    }
    
};
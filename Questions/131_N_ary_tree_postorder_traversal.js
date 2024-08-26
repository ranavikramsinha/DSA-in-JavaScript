//* https://leetcode.com/problems/n-ary-tree-postorder-traversal/

var postorder = function(root) {
    
    let arr = [];

    function solve(root, arr){

        if(root === null){
            return [];
        }

        for(let child of root.children){
            solve(child, arr);
        }
        arr.push(root.val);

    }

    solve(root, arr);

    return arr;
};
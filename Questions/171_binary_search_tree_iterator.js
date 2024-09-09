//* https://leetcode.com/problems/binary-search-tree-iterator/

var BSTIterator = function(root) {
    this.arr = [];

    let solve = (node) => {
        if(!node){
            return;
        }
        
        solve(node.left);
        this.arr.push(node.val);
        solve(node.right);
    }

    solve(root);
};

BSTIterator.prototype.next = function() {
    return this.arr.shift();
};


BSTIterator.prototype.hasNext = function() {
    return this.arr.length > 0;
};
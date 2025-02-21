//* https://leetcode.com/problems/find-elements-in-a-contaminated-binary-tree/

//* tc O(n) | sc O(n)

var FindElements = function(root) {

    this.set = new Set();

    const dfs = (node, value) => {
        if(node === null){
            return;
        }

        node.val = value;
        this.set.add(value);

        dfs(node.left, 2 * value + 1);
        dfs(node.right, 2 * value + 2);
    }

    dfs(root, 0);
    
};

/** 
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {

    return this.set.has(target);
    
};
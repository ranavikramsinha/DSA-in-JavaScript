//* https://leetcode.com/problems/maximum-depth-of-binary-tree/

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function buildTreeFromArray(arr, index = 0) {
    if (index >= arr.length || arr[index] === null) {
        return null;
    }

    const node = new TreeNode(arr[index]);
    node.left = buildTreeFromArray(arr, 2 * index + 1);
    node.right = buildTreeFromArray(arr, 2 * index + 2);

    return node;
}

var maxDepth = function (TreeNode) {
  if (!TreeNode) {
    return 0;
  }

  const leftDepth = maxDepth(TreeNode.left);
  const rightDepth = maxDepth(TreeNode.right);

  return Math.max(leftDepth, rightDepth) + 1;
};

const arr = [1, 2, 3, 4, 5];
const root = buildTreeFromArray(arr)
console.log(maxDepth(root));
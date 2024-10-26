//* https://leetcode.com/problems/height-of-binary-tree-after-subtree-removal-queries/

var treeQueries = function(root, queries) {
    let level = new Array(1000001).fill(0);
    let height = new Array(1000001).fill(0);
    let levelMaxHeight = new Array(1000001).fill(0);
    let levelSecondMaxHeight = new Array (1000001).fill(0);

    function findingHeight(root, currentRootLevel){
        if(!root){
            return 0;
        }

        level[root.val] = currentRootLevel;

        height[root.val] = Math.max(findingHeight(root.left, currentRootLevel + 1),  findingHeight(root.right, currentRootLevel + 1)) + 1;

        if(levelMaxHeight[currentRootLevel] < height[root.val]){
            levelSecondMaxHeight[currentRootLevel] = levelMaxHeight[currentRootLevel];
            levelMaxHeight[currentRootLevel] = height[root.val];
        }else if(levelSecondMaxHeight[currentRootLevel] < height[root.val]){
            levelSecondMaxHeight[currentRootLevel] = height[root.val];
        }

        return height[root.val];
    }

    findingHeight(root, 0);

    let result = [];

    for(let node of queries){
        let nodeLevel = level[node];

        let ans = nodeLevel + (levelMaxHeight[nodeLevel] === height[node] ? levelSecondMaxHeight[nodeLevel] : levelMaxHeight[nodeLevel]) - 1;

        result.push(ans);
    }

    return result;
};
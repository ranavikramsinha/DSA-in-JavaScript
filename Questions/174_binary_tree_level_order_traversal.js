//* https://leetcode.com/problems/binary-tree-level-order-traversal/

var levelOrder = function(root) {
    if(root === null){
        return [];
    }

    let rootArr = [root];
    let arr = [];

    while(rootArr.length > 0){
        let rootArrLength = rootArr.length;
        let level = [];

        for(let i = 0; i < rootArrLength; i++){
            let value = rootArr.shift();
            level.push(value.val);

            if(value.left !== null){
                rootArr.push(value.left);
            }

            if(value.right !== null){
                rootArr.push(value.right);
            }
        }

        arr.push(level);
    }

    return arr;
};
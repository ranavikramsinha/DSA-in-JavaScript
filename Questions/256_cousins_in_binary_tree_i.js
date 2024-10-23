//* https://leetcode.com/problems/cousins-in-binary-tree/

var isCousins = function(root, x, y) {
    let queue = [root];

    while(queue.length > 0){
        let n = queue.length;
        let isX = false;
        let isY = false;

        for(let i = 0; i < n; i++){
            let current = queue.shift();

            if(current.left && current.right){
                if((current.left.val === x && current.right.val === y) || (current.left.val === y && current.right.val === x)){
                    return false;
                }
            }

            if(current.val === x){
                isX = true;
            }

            if(current.val === y){
                isY = true;
            }

            if(current.left){
                queue.push(current.left);
            }

            if(current.right){
                queue.push(current.right);
            }
        }

        if(isX && isY){
            return true;
        }
    }

    return false;
};
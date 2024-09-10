//* https://leetcode.com/problems/average-of-levels-in-binary-tree/

var averageOfLevels = function(root) {
    let rootArr = [root];
    let arr = [];

    while(rootArr.length > 0){
        let rootArrLength = rootArr.length;
        let level = 0;

        for(let i = 0; i < rootArrLength; i++){
            let value = rootArr.shift();
            level += value.val ;

            if(value.left !== null){
                rootArr.push(value.left);
            }

            if(value.right !== null){
                rootArr.push(value.right);
            }
        }

        arr.push((level / rootArrLength).toFixed(5));
    }

    return arr;
};
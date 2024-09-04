//* https://leetcode.com/problems/same-tree/

// var isSameTree = function(p, q) {

//     if(p === null && q === null){
//         return true;
//     }

//     if((p === null && q !== null) || (p !== null && q === null)){
//         return false;
//     }
    
//     return (isSameTree(p.left, q.left) && isSameTree(p.right, q.right)) && (p.val === q.val);
// };

var isSameTree = function(p, q) {

    if(p === null && q === null){
        return true;
    }

    if((p === null && q !== null) || (p !== null && q === null)){
        return false;
    }

    if(p.val !== q.val){
        return false;
    }
    
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};
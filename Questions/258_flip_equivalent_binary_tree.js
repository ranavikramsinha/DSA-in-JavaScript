//* https://leetcode.com/problems/flip-equivalent-binary-trees/

//* tc O(4 * n) | sc O(h) - where h is the height or depth of the tree
var flipEquiv = function(root1, root2) {

    if(root1 === null && root2 === null){
        return true;
    }

    if(root1 === null || root2 === null){
        return false;
    }

    if(root1.val === root2.val){
        let notFlipping = flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right);
        let flipping = flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left);

        return notFlipping || flipping;
    }
    else{
        return false;
    }
    
};
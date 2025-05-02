//* https://leetcode.com/problems/push-dominoes/

//* tc O(n) | sc O(n)

var pushDominoes = function(dominoes) {

    let n = dominoes.length;
    let forces = new Array(n);
    let leftToRightForce = 0;
    let result = "";

    for(let i = 0; i < n; i++){
        if(dominoes[i] === 'L'){
            leftToRightForce = 0;
        }
        else if(dominoes[i] === 'R'){
            leftToRightForce = n;
        }
        else{
            leftToRightForce = Math.max(leftToRightForce - 1, 0);
        }

        forces[i] = leftToRightForce;
    }

    let rightToLeftForce = 0;

    for(let i = n - 1; i >= 0; i--){
        if(dominoes[i] === 'R'){
            rightToLeftForce = 0;
        }
        else if(dominoes[i] === 'L'){
            rightToLeftForce = n;
        }
        else{
            rightToLeftForce = Math.max(rightToLeftForce - 1, 0);
        }

        forces[i] -= rightToLeftForce;
    }

    for(let i = 0; i < n; i++){
        if(forces[i] < 0){
            result += 'L';
        }
        else if(forces[i] > 0){
            result += 'R';
        }
        else{
            result += '.';
        }
    }

    return result;
    
};
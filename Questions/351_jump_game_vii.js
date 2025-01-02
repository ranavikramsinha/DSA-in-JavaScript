//* https://leetcode.com/problems/jump-game-vii/

//* tc O(n) | sc O(n)

var canReach = function(s, minJump, maxJump) {

    let n = s.length;
    
    if(s[0] !== "0" || s[n - 1] !== "0"){
        return false;
    }

    let memo = new Array(n).fill(0);
    memo[minJump] += 1;
    memo[maxJump + 1] -= 1;

    let count = 0;

    for(let i = 1; i < n; i++){
        let value = s[i];

        count += memo[i];

        if(count <= 0 || value === "1"){
            continue;
        }

        if(i + minJump < n){
            memo[i + minJump] += 1;
        }
        
        if(i + maxJump + 1 < n){
            memo[i + maxJump + 1] -= 1;
        }
    }

    return count > 0 ? true : false;
    
};
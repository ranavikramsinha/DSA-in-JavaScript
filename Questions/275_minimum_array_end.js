//* https://leetcode.com/problems/minimum-array-end/

//* tc O(1) | sc O(1) === tc(64) | sc(64)
var minEnd = function(n, x) {
    n = n - 1;
    
    let targetBits = new Array(64).fill(0);
    let sourceBits = new Array(64).fill(0);

    for(let i = 0; i < 32; i++){
        targetBits[i] = (x >> i) & 1;
        sourceBits[i] = (n >> i) & 1;
    }

    let i = 0;
    let j = 0;

    while(i < 64){
        if(targetBits[i] === 1){
            i++;
            continue;
        }
        
        if (j < 32){
            targetBits[i] = sourceBits[j++];
        }

        i++;
    }

    let ans = 0n;

    for(let i = 0; i < 64; i++){
        ans += BigInt(targetBits[i]) * (1n << BigInt(i));
    }

    return Number(ans);
};
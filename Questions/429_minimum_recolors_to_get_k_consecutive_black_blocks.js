//* https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

//* tc O(n) | sc O(1)

var minimumRecolors = function(blocks, k) {

    let n = blocks.length;
    let i = 0;
    let j = 0;
    let count = Infinity;
    let white = 0;

    while(j < n){
        if(blocks[j] === 'W'){
            white++;
        }

        if(j - i + 1 === k){
            count = Math.min(count, white);

            if(blocks[i] === 'W'){
                white--;
            }
            
            i++;
        }

        j++;
    }

    return count;
    
};
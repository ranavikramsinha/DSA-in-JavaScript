//* https://leetcode.com/problems/can-place-flowers/description/

var canPlaceFlowers = function(flowerbed, n) {

    let count = 0

    for(let i = 0; i < flowerbed.length; i++){

        if(flowerbed[i] === 0){
            let isLeftSideEmpty = (i === 0 || flowerbed[i-1] === 0)
            let isRightSideEmpty = (i === flowerbed.length-1 || flowerbed[i+1] === 0)

            if(isLeftSideEmpty && isRightSideEmpty){
                flowerbed[i] = 1
                count++
                if(count >= n){
                    return true
                }
            }
        }
    }

    return count >= n
    
};
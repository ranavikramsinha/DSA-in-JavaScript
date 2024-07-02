//* https://leetcode.com/problems/find-the-highest-altitude/description/

var largestAltitude = function(gain) {

    let currentAlt = 0
    let maxAlt = 0

    for(let i = 0; i < gain.length; i++){
        currentAlt += gain[i]
        maxAlt = Math.max(maxAlt, currentAlt)
    }

    return maxAlt
    
};
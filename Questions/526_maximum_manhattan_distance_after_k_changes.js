//* https://leetcode.com/problems/maximum-manhattan-distance-after-k-changes/

//* tc O(n) | sc O(1)

var maxDistance = function(s, k) {

    let n = s.length;
    let east = 0;
    let west = 0;
    let north = 0;
    let south = 0;
    let maximumMD = 0;

    for(let i = 0; i < n; i++){
        if(s[i] === "E"){
            east++;
        }
        else if(s[i] === "W"){
            west++;
        }
        else if(s[i] === "N"){
            north++;
        }
        else if(s[i] === "S"){
            south++;
        }

        currentMD = Math.abs(east - west) + Math.abs(north - south);

        let steps = i + 1;
        let extra = 0;

        if(steps !== currentMD){
            extra = Math.min((2 * k), steps - currentMD);
        }

        let finalMD = currentMD + extra;

        maximumMD = Math.max(maximumMD, finalMD);
    }

    return maximumMD;
    
};
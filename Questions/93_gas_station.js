//* https://leetcode.com/problems/gas-station/

//* Brute Force Approach
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;

    for(let i = 0; i < n; i++){
        if(gas[i] < cost[i]){
            continue;
        }

        let j = (i + 1) % n;
        let costForMovingFromThisI = cost[i];
        let gasEarnInNextStationJ = gas[j];
        currentGas = gas[i] - costForMovingFromThisI + gasEarnInNextStationJ;

        while(j !== i){
            if(currentGas < cost[j]){
                break;
            }

            let costForMovingFromThisJ = cost[j];
            j = (j + 1) % n;
            gasEarnInNextStationJ = gas[j];
            currentGas = currentGas - costForMovingFromThisJ + gasEarnInNextStationJ;
        }

        if(j === i){
            return i;
        }
    }

    return -1;
};
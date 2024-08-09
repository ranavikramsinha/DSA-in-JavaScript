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

//* Greedy Approach
var canCompleteCircuit = function(gas, cost) {
    let n = gas.length;
    let totalEarning = gas.reduce((a, b) => a + b, 0);
    let totalSpending = cost.reduce((a, b) => a + b, 0);
    
    // let totalEarning = 0;
    // let totalSpending = 0;

    // for(let i = 0; i < n; i++){
    //     totalEarning += gas[i];
    //     totalSpending += cost[i];
    // }

    if(totalEarning < totalSpending){
        return -1;
    }

    let total = 0;
    let result = 0;

    for(let i = 0; i < n; i++){
        total = total + gas[i] - cost[i];
        
        if(total < 0){
            total = 0;
            result = i + 1;
        }
    }

    return result;
};
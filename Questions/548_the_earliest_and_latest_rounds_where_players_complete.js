//* https://leetcode.com/problems/the-earliest-and-latest-rounds-where-players-compete/

//* tc O(n ^ 2) | sc O(1)

var earliestAndLatest = function(playersCount, playerA, playerB) {
    let startSlot = Math.min(playerA, playerB);
    let endSlot = Math.max(playerA, playerB);
    return simulateMatch(playersCount, startSlot, endSlot);

    function simulateMatch(playersCount, leftSlot, rightSlot){
        if(leftSlot + rightSlot === playersCount + 1){
            return [1, 1];
        }

        if(playersCount === 3 || playersCount === 4){
            return [2, 2];
        }

        if(leftSlot - 1 > playersCount - rightSlot){
            let mirroredRight = playersCount + 1 - leftSlot;
            let mirroredLeft = playersCount + 1 - rightSlot;
            leftSlot = mirroredLeft;
            rightSlot = mirroredRight;
        }

        let nextRoundCount = Math.floor((playersCount + 1) / 2);
        let earliestRound = playersCount;
        let latestRound = 1;

        if(rightSlot * 2 <= playersCount + 1){
            let leftGroupSize = leftSlot - 1;
            let betweenSlots = rightSlot - leftSlot - 1;

            for(let leftCount = 0; leftCount <= leftGroupSize; leftCount++){
                for(let betweenCount = 0; betweenCount <= betweenSlots; betweenCount++){
                    let [childEarliest, childLatest] = simulateMatch(nextRoundCount, leftCount + 1, leftCount + betweenCount + 2);
                    earliestRound = Math.min(earliestRound, 1 + childEarliest);
                    latestRound = Math.max(latestRound, 1 + childLatest);
                }
            }
        }
        else{
            let rightGroupSize = playersCount + 1 - rightSlot;
            let leftGroupSize = leftSlot - 1;
            let directSlots = rightGroupSize - leftSlot - 1;
            let innerSlots = rightSlot - rightGroupSize - 1;

            for(let leftCount = 0; leftCount <= leftGroupSize; leftCount++){
                for(let directCount = 0; directCount <= directSlots; directCount++){
                    let newLeft = leftCount + 1;
                    let newRight = leftCount + directCount + 1 + Math.floor((innerSlots + 1) / 2) + 1;
                    let [childEarliest, childLatest] = simulateMatch(nextRoundCount, newLeft, newRight);

                    earliestRound = Math.min(earliestRound, 1 + childEarliest);
                    latestRound = Math.max(latestRound, 1 + childLatest);
                }
            }
        }

        return [earliestRound, latestRound];
    }
};
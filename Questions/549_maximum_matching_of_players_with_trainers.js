//* https://leetcode.com/problems/maximum-matching-of-players-with-trainers/

//* tc O(mlogm + nlogn) | sc O(1)

var matchPlayersAndTrainers = function(players, trainers) {

    players.sort((a, b) => a - b);
    trainers.sort((a, b) => a - b);

    let m = players.length;
    let n = trainers.length;

    let i = 0;
    let j = 0;

    let count = 0;

    while(i < m && j < n){
        if(players[i] <= trainers[j]){
            count++;
            i++;
        }

        j++;
    }

    return count;
    
};
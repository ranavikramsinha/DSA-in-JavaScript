//* https://leetcode.com/problems/find-minimum-time-to-reach-last-room-ii/

//* tc O(m * n * log(m * n)) | sc O(m * n)

var minTimeToReach = function(moveTime) {

    let m = moveTime.length;
    let n = moveTime[0].length;
    let arr = Array.from({ length: m}, () => new Array(n).fill(Infinity));
    arr[0][0] = 0;

    let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    let priorityQueue = new PriorityQueue((a, b) => a.time - b.time);
    priorityQueue.enqueue({ i: 0, j: 0, time: 0, moving: 0});

    while(!priorityQueue.isEmpty()){
        let { i, j, time, moving} = priorityQueue.dequeue();

        if(i === m - 1 && j === n - 1){
            return time;
        }

        for(let [directionI, directionJ] of directions){
            let newI = i + directionI;
            let newJ = j + directionJ;

            if(newI >= 0 && newI < m && newJ >= 0 && newJ < n){
                let moves = moving % 2 === 0 ? 1 : 2;
                let countingSeconds = moves + Math.max(time, moveTime[newI][newJ]);

                if(countingSeconds < arr[newI][newJ]){
                    arr[newI][newJ] = countingSeconds;

                    priorityQueue.enqueue({ i: newI, j: newJ, time: countingSeconds, moving: moving + 1});
                }
            }
        }
    }

    return -1; 
};
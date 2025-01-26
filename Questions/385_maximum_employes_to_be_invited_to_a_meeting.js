//* https://leetcode.com/problems/maximum-employees-to-be-invited-to-a-meeting/

//* tc O(n) | sc O(n)

const maximumInvitations = function(favorite) {
    
    let n = favorite.length;
    let arr = Array(n).fill(0);

    for(let i = 0; i < n; i++){
        arr[favorite[i]]++;
    }

    let queue = [];
    let isVisited = Array(n).fill(0);
    let maxLengthOfEachNode = Array(n).fill(1);

    for(let i = 0; i < n; i++){
        if(arr[i] === 0){
            queue.push(i);
            isVisited[i] = 1;
            maxLengthOfEachNode[i] = 1;
        }
    }

    while(queue.length){
        let currentNode = queue.pop();
        let nextNode = favorite[currentNode];
        arr[nextNode]--;

        if(arr[nextNode] === 0){
            queue.push(nextNode);
            isVisited[nextNode] = 1;
        }

        maxLengthOfEachNode[nextNode] = Math.max(maxLengthOfEachNode[nextNode], maxLengthOfEachNode[currentNode] + 1);
    }

    let largestCycleSize = 0;
    let totalTwoNodeCycleSize = 0;

    for (let i = 0; i < n; i++){
        if(isVisited[i] === 1){
            continue;
        };

        let current = i;
        let cycleSize = 0;

        while(isVisited[current] === 0){
            cycleSize++;
            isVisited[current] = 1;
            current = favorite[current];
        }

        if(cycleSize > 2){
            largestCycleSize = Math.max(largestCycleSize, cycleSize);
        }
        else if(cycleSize === 2){
            totalTwoNodeCycleSize += maxLengthOfEachNode[i] + maxLengthOfEachNode[favorite[i]];
        }
    }

    return Math.max(largestCycleSize, totalTwoNodeCycleSize);
};
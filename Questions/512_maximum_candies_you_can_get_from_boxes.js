//* https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/

//* tc O(n + c + k) | sc O(n) where c + k is the total size of all adjacency lists (containedBoxes and keys)

var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {

    let n = status.length;
    let isVisited = new Array(n).fill(false);
    let boxesInBox = new Set();
    let maximumCandies = 0;

    for(let startingBox of initialBoxes){
        maximumCandies += dfs(startingBox, isVisited, boxesInBox, status, candies, keys, containedBoxes);
    }

    return maximumCandies;

    function dfs(currentBox, isVisited, insideBoxesInBox, status, candies, keys, containedBoxes){
        if(isVisited[currentBox] === true){
            return 0;
        }

        if(status[currentBox] === 0){
            insideBoxesInBox.add(currentBox);
            return 0;
        }

        isVisited[currentBox] = true;

        let numberOfCandies = candies[currentBox];

        for(let boxInContainedBoxes of containedBoxes[currentBox]){
            numberOfCandies += dfs(boxInContainedBoxes, isVisited, insideBoxesInBox, status, candies, keys, containedBoxes);
        }

        for(let keyForBox of keys[currentBox]){
            status[keyForBox] = 1;

            if(insideBoxesInBox.has(keyForBox)){
                numberOfCandies += dfs(keyForBox, isVisited, insideBoxesInBox, status, candies, keys, containedBoxes);
            }
        }

        return numberOfCandies;
    }
    
};
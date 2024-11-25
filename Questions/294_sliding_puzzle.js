//* https://leetcode.com/problems/sliding-puzzle/

//* tc O(6!) | sc O(6!)

var slidingPuzzle = function(board) {
    let initialState = "";

    for(let row = 0; row < 2; row++){
        for(let col = 0; col < 3; col++){
            initialState += board[row][col].toString();
        }
    }

    let targetState = "123450";

    let queue = [initialState];
    
    let swapPositions = {
        0: [1, 3],
        1: [0, 2, 4],
        2: [1, 5],
        3: [0, 4],
        4: [1, 3, 5],
        5: [2, 4],
    };

    let visitedStates = new Set();
    visitedStates.add(initialState);

    let moveCount = 0;

    while(queue.length > 0){
        let currentLevelSize = queue.length;

        for(let i = 0; i < currentLevelSize; i++){
            let currentState = queue.shift();

            if(currentState === targetState){
                return moveCount;
            }

            let zeroPosition = currentState.indexOf("0");

            for(let adjacentPosition of swapPositions[zeroPosition]){
                let newState = [...currentState];
                [newState[zeroPosition], newState[adjacentPosition]] = [newState[adjacentPosition], newState[zeroPosition]];

                let newString = newState.join("");

                if(!visitedStates.has(newString)){
                    queue.push(newString);
                    visitedStates.add(newString);
                }
            }
        }

        moveCount++;
    }

    return -1;
};
//* https://leetcode.com/problems/walking-robot-simulation/

var robotSim = function(commands, obstacles) {
    let set = new Set();

    for(let obstacle of obstacles){
        let initialDirection = `${obstacle[0]}_${obstacle[1]}`;
        set.add(initialDirection);
    }

    let x = 0;
    let y = 0;
    let maxDistance = 0;

    let direction = [0, 1];

    for(let i = 0; i < commands.length; i++){
        if(commands[i] === -2){
            direction = [-direction[1], direction[0]]; //* (x, y) = (-y, x) => left 90 degrees
        }
        else if(commands[i] === -1){
            direction = [direction[1], -direction[0]]; //* (x, y) = (y, -x) => right 90 degrees
        }
        else{
            for(let j = 0; j < commands[i]; j++){
                let newX = x + direction[0];
                let newY = y + direction[1];

                let nextInitialDirection = `${newX}_${newY}`;

                if(set.has(nextInitialDirection)){
                    break;
                }

                x = newX;
                y = newY;
            }
        }

        maxDistance = Math.max(maxDistance, (x * x) + (y * y));
    }

    return maxDistance;
};
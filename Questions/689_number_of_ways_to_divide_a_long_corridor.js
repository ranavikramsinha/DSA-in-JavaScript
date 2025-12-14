//* https://leetcode.com/problems/number-of-ways-to-divide-a-long-corridor/

//* tc : O(n) | sc : O(1)

var numberOfWays = function(corridor) {

    let seatCount = 0;
    let dividing = 0;
    let total = 1;

    for (let i=0; i< corridor.length; i++) {
        if (corridor[i] == "S") {
            seatCount++;

            if (seatCount == 3) {
                total *= dividing;
                total %= 1e9 + 7;
                seatCount = 1;
                dividing = 0;
            }

            if (seatCount == 2) {
                dividing = 1;
            }
        } 
        else {
            if (seatCount == 2) {
                dividing++;
            }
        }
    }

    return seatCount == 2 ? total : 0;

};
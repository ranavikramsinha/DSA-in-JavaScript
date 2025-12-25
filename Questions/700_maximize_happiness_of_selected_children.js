//* https://leetcode.com/problems/maximize-happiness-of-selected-children/

//* tc : O(nlogn) | sc : O(1)

var maximumHappinessSum = function(happiness, k) {

    let maximumHappiness = 0;

    happiness.sort((a, b) => b - a);

    for (let i = 0; i < k; i++) {
        let value = happiness[i] - i;

        if (value <= 0) {
            return maximumHappiness;
        }

        maximumHappiness += value;
    }

    return maximumHappiness;
    
};
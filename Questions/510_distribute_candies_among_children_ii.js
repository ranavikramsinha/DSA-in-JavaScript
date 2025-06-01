//* https://leetcode.com/problems/distribute-candies-among-children-ii/

//* tc O(n) | sc O(1)

var distributeCandies = function(n, limit) {

    let minimumCandiesFirstChildHave = Math.max(0, n - (2 * limit));
    let maximumCandiesFirstChildHave = Math.min(n, limit);
    let result = 0;

    for(let i = minimumCandiesFirstChildHave; i <= maximumCandiesFirstChildHave; i++){

        let currentRemainingCandies = n - i;

        let minimumCandiesSecondChildHave = Math.max(0, currentRemainingCandies - limit);
        let maximumCandiesSecondChildHave = Math.min(currentRemainingCandies, limit);

        result += maximumCandiesSecondChildHave - minimumCandiesSecondChildHave + 1;
    }

    return result;
    
};
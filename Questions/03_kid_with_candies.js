//* https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/description/

var kidsWithCandies = function(candies, extraCandies) {

    const maxCandy = Math.max(...candies) //* Find the maximum number of candies any kid currently has

    return candies.map(candy => candy + extraCandies >= maxCandy) //* Check if each kid can have the greatest number of candies with extraCandies
    
};
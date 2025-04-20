//* https://leetcode.com/problems/rabbits-in-forest/

//* tc O(n) | sc O(n)

var numRabbits = function(answers) {

    let n = answers.length;
    let map = new Map();
    let result = 0;

    for(let eachAnswer of answers){
        map.set(eachAnswer, (map.get(eachAnswer) || 0) + 1);
    }

    for(let [howManyAnswering, howManyAnswer] of map){
        let groupSize = howManyAnswering + 1;
        let groups = Math.ceil(howManyAnswer / groupSize);

        result += groups * (groupSize);
    }

    return result;
    
};
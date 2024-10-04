//* https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/

//* tc O(nlog(n)) | sc O(1)
var dividePlayers = function(skill) {
    let n = skill.length;

    if(n === 0){
        return -1;
    }

    skill.sort((a, b) => a - b);

    let left = 0;
    let right = n - 1;
    let sumOfLeftAndRight = skill[left] + skill[right];
    let eachTeamProduct = 0;

    while(left < right){
        let total = skill[left] + skill[right];

        if(total !== sumOfLeftAndRight){
            return -1;
        }

        eachTeamProduct += skill[left] * skill[right];

        left++;
        right--;
    }

    return eachTeamProduct;
};
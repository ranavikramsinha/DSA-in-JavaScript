//* https://leetcode.com/problems/find-the-minimum-amount-of-time-to-brew-potions/

//* tc : O(n * m) | sc : O(n)

var minTime = function(skill, mana) {
    
    let n = skill.length;
    let freeTime = new Array(n).fill(0);

    for (let x of mana) {
        let now = freeTime[0];

        for (let i = 1; i < n; i++) {
            let brew = skill[i - 1] * x;
            now = Math.max(now + brew, freeTime[i]);
        }

        freeTime[n - 1] = now + skill[n - 1] * x;

        for (let i = n - 2; i >= 0; i--) {
            freeTime[i] = freeTime[i + 1] - skill[i + 1] * x;
        }
    }

    return freeTime[n - 1];

};
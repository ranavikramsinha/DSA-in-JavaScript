//* https://leetcode.com/problems/minimum-number-of-people-to-teach/

//* tc : O(n * m) | sc : O(m)

var minimumTeachings = function(n, languages, friendships) {
        
    let userCount = languages.length;
    let knownLanguages = new Map();

    for (let i = 0; i < userCount; i++) {
        knownLanguages.set(i + 1, new Set(languages[i]));
    }

    let usersToTeach = new Set();

    for (let [userA, userB] of friendships) {
        let langsA = knownLanguages.get(userA);
        let langsB = knownLanguages.get(userB);

        let shared = [...langsA].some(lang => langsB.has(lang));
        
        if (!shared) {
            usersToTeach.add(userA);
            usersToTeach.add(userB);
        }
    }

    let minTeachCount = Infinity;

    for (let lang = 1; lang <= n; lang++) {
        let teachCount = 0;
        
        for (let user of usersToTeach) {
            if (!knownLanguages.get(user).has(lang)) {
                teachCount++;
            }
        }

        minTeachCount = Math.min(minTeachCount, teachCount);
    }

    return minTeachCount;
    
};
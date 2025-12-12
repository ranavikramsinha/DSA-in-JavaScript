//* https://leetcode.com/problems/count-mentions-per-user/

//* tc : O(n * m) | sc : O(n)

var countMentions = function(numberOfUsers, events) {

    let mentions = new Array(numberOfUsers).fill(0);
    let offline = mentions.slice();

    events.sort(([m1, t1], [m2, t2]) => (t1 - t2) || (m1 > m2 ? -1 : 1));

    for (let [event, time, users] of events) {
        if (event === 'MESSAGE') {
            if (users === 'HERE') {
                mentions.map((_, i, a) => offline[i] <= +time && a[i]++);
            } 
            else if (users === 'ALL') {
                mentions.map((_, i, a) => a[i]++);
            } 
            else {
                users.split(' ').map(idN => mentions[+idN.slice(2)]++);
            }
        } 
        else {
            offline[+users] = +time + 60;
        }
    }

    return mentions ;
    
};
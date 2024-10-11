//* https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/

//* tc O(n^2) | sc O(n)
var smallestChair = function(times, targetFriend) {
    let n = times.length;
    let arr = new Array(n).fill(-1);
    let target = times[targetFriend][0];

    times.sort((a, b) => a[0] - b[0]);

    for(let time of times){
        let arrival = time[0];
        let departure = time[1];

        for(let i = 0; i < n; i++){
            if(arr[i] <= arrival){
                arr[i] = departure;

                if(arrival === target){
                    return i;
                }
                break;
            }
        }
    }

    return -1;
    
};
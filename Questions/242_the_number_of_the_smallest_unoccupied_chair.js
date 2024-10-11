//* https://leetcode.com/problems/the-number-of-the-smallest-unoccupied-chair/

//* tc O(nlog(n)) | sc O(n)
var smallestChair = function(times, targetFriend) {
    let n = times.length;
    let target = times[targetFriend][0];
    let filled = new MinPriorityQueue({priority: (x) => x[0]});
    let free = new MinPriorityQueue();
    let chairNumber = 0;

    times.sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < n; i++){
        let arrivalTime = times[i][0];
        let departureTime = times[i][1];

        while(!filled.isEmpty() && filled.front().element[0] <= arrivalTime){
            free.enqueue(filled.dequeue().element[1]);
        }

        if(free.isEmpty()){
            filled.enqueue([departureTime, chairNumber]);

            if(arrivalTime === target){
                return chairNumber;
            }

            chairNumber++;
        }
        else{
            let reuseChairAvailable = free.dequeue().element;

            if(arrivalTime === target){
                return reuseChairAvailable;
            }

            filled.enqueue([departureTime, reuseChairAvailable]);
        }
    }

    return -1;

};

//* tc O(n^2) | sc O(n)
// var smallestChair = function(times, targetFriend) {
//     let n = times.length;
//     let arr = new Array(n).fill(-1);
//     let target = times[targetFriend][0];

//     times.sort((a, b) => a[0] - b[0]);

//     for(let time of times){
//         let arrival = time[0];
//         let departure = time[1];

//         for(let i = 0; i < n; i++){
//             if(arr[i] <= arrival){
//                 arr[i] = departure;

//                 if(arrival === target){
//                     return i;
//                 }
//                 break;
//             }
//         }
//     }

//     return -1;
    
// };
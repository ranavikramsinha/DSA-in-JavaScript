//* https://leetcode.com/problems/number-of-recent-calls/

var RecentCounter = function() {
    this.requestQueue = [null];
    this.start = 1;
    this.end = 0;
};

RecentCounter.prototype.ping = function(timestamp) {

    this.requestQueue.push(timestamp);
    this.end++;

    let timeWindow = [timestamp - 3000, timestamp];

    while (this.requestQueue[this.start] < timeWindow[0]) {
        this.start++;
    }

    return this.end - this.start + 1;

};

// Example usage:
const recentCounter = new RecentCounter();
console.log(recentCounter.ping(1));    //* Output: 1
console.log(recentCounter.ping(100));  //* Output: 2
console.log(recentCounter.ping(3001)); //* Output: 3
console.log(recentCounter.ping(3002)); //* Output: 3

//* 
//* Initial State:
//* requestQueue = [null]
//* start = 1
//* end = 0
//* 
//* 1. First request: ping(1)
//*    - Add 1 to the queue
//*    - requestQueue = [null, 1]
//*    - end = 1
//*    - No elements to remove
//*    - return 1
//* 
//* 2. Second request: ping(100)
//*    - Add 100 to the queue
//*    - requestQueue = [null, 1, 100]
//*    - end = 2
//*    - No elements to remove
//*    - return 2
//* 
//* 3. Third request: ping(3001)
//*    - Add 3001 to the queue
//*    - requestQueue = [null, 1, 100, 3001]
//*    - end = 3
//*    - Remove `null` (start moves to 2)
//*    - requestQueue = [1, 100, 3001]
//*    - start = 1
//*    - return 3
//* 
//* 4. Fourth request: ping(3002)
//*    - Add 3002 to the queue
//*    - requestQueue = [1, 100, 3001, 3002]
//*    - end = 4
//*    - Remove `1` (start moves to 2)
//*    - requestQueue = [100, 3001, 3002]
//*    - start = 2
//*    - return 3
//* 
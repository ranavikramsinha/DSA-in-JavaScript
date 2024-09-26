//* https://leetcode.com/problems/my-calendar-i/

//* tc O(log(n)) | sc O(n)
var MyCalendar = function() {
    this.calender = [];
};

MyCalendar.prototype.book = function(start, end) {
    let left = 0;
    let right = this.calender.length - 1;

    while(left <= right){
        let middle = left + Math.trunc((right - left) / 2);
        let middleInterval = this.calender[middle];
        let currentStart = middleInterval[0];
        let currentEnd = middleInterval[1];

        if(currentStart < end && start < currentEnd){
            return false;
        }

        if(start >= currentEnd){
            left = middle + 1;
        }
        else{
            right = middle - 1;
        }
    }

    this.calender.splice(left, 0, [start, end]);
    return true;
};

//* tc O(nlog(n)) | sc O(n)
var MyCalendar = function() {
    this.set = new Set();
};

MyCalendar.prototype.book = function(start, end) {
    let intervals = Array.from(this.set).sort((a, b) => a[0] - b[0]);

    for(let i = 0; i < intervals.length; i++){
        let currentStart = intervals[i][0];
        let currentEnd = intervals[i][1];

        if(currentStart >= end){
            break;
        }

        if(start < currentEnd){
            return false;
        }
    }

    this.set.add([start, end]);
    return true;
};
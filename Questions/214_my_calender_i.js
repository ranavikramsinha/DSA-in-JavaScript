//* https://leetcode.com/problems/my-calendar-i/

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
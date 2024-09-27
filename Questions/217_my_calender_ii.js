//* https://leetcode.com/problems/my-calendar-ii/

var MyCalendarTwo = function() {
    this.calender = [];
    this.doubleBooking = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {
    for(let bookingDate of this.doubleBooking){
        if(bookingDate[0] < end && start < bookingDate[1]){
            return false;
        }
    }

    for(let bookingDate of this.calender){
        if(bookingDate[0] < end && start < bookingDate[1]){
            let max = Math.max(bookingDate[0], start);
            let min = Math.min(bookingDate[1], end);

            this.doubleBooking.push([max, min]);
        }
    }

    this.calender.push([start, end]);
    return true;
};
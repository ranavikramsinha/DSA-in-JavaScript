//* https://leetcode.com/problems/design-circular-deque/

var MyCircularDeque = function(k) {
    this.deque = [];
    this.maximumCapacity = k;
};

MyCircularDeque.prototype.insertFront = function(value) {
    if(this.deque.length < this.maximumCapacity){
        this.deque.unshift(value);
        return true;
    }

    return false;
};

MyCircularDeque.prototype.insertLast = function(value) {
    if(this.deque.length < this.maximumCapacity){
        this.deque.push(value);
        return true;
    }

    return false;
};

MyCircularDeque.prototype.deleteFront = function() {
    if(this.deque.length > 0){
        this.deque.shift();
        return true;
    }

    return false;
};

MyCircularDeque.prototype.deleteLast = function() {
    if(this.deque.length > 0){
        this.deque.pop();
        return true;
    }

    return false;
};

MyCircularDeque.prototype.getFront = function() {
    return this.deque.length > 0 ? this.deque[0] : -1;
};

MyCircularDeque.prototype.getRear = function() {
    return this.deque.length > 0 ? this.deque[this.deque.length - 1] : -1;
};

MyCircularDeque.prototype.isEmpty = function() {
    return this.deque.length === 0;
};

MyCircularDeque.prototype.isFull = function() {
    return this.deque.length === this.maximumCapacity;
};
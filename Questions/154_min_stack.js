//* https://leetcode.com/problems/min-stack/

var MinStack = function() {
    this.stack = [];
};


MinStack.prototype.push = function(val) {
    this.stack.push(val);
};


MinStack.prototype.pop = function() {
    this.stack.pop();
};


MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};


MinStack.prototype.getMin = function() {
    if(this.stack.length === 0){
        return 0;
    }

    let min = this.stack[0];

    for(let i = 1; i < this.stack.length; i++){
        min = Math.min(min, this.stack[i]);
    }

    return min;
};
//* https://leetcode.com/problems/design-a-stack-with-increment-operation/

var CustomStack = function(maxSize) {
    this.stack = [];
    this.size = maxSize;
};

CustomStack.prototype.push = function(x) {
    if(this.stack.length < this.size){
        this.stack.push(x);
    }
};

CustomStack.prototype.pop = function() {
    return this.stack.length === 0 ? -1 : this.stack.pop();
};

CustomStack.prototype.increment = function(k, val) {
    let minimum = Math.min(k, this.stack.length);

    for(let i = 0; i < minimum; i++){
        this.stack[i] += val;
    }
};
//* https://leetcode.com/problems/insert-delete-getrandom-o1/

var RandomizedSet = function() {
    this.set = new Set();  
};

RandomizedSet.prototype.insert = function(val) {
    if(this.set.has(val)){
        return false;
    }
    else{
        this.set.add(val)
        return true;
    }  
};

RandomizedSet.prototype.remove = function(val) {
    return this.set.delete(val);
};

RandomizedSet.prototype.getRandom = function() {
    let idx = Math.floor(Math.random() * this.set.size);
    let arr = [...this.set];
    return arr[idx];
};
//* https://leetcode.com/problems/kth-largest-element-in-a-stream/

var KthLargest = function(k, nums) {
    
    this.k = k;
    this.min = new MinPriorityQueue();
    for(const num of nums){
        this.add(num)
    }
    
};


KthLargest.prototype.add = function(val) {
    
    if(this.k > this.min.size()){
        this.min.enqueue(val);
    }
    else if(val > this.min.front().element){
        this.min.dequeue();
        this.min.enqueue(val);
    }

    return this.min.front().element;

};
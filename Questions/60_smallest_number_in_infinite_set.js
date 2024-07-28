//* https://leetcode.com/problems/smallest-number-in-infinite-set/description/

var SmallestInfiniteSet = function() {
    heap = []
    min = 1  
};

SmallestInfiniteSet.prototype.popSmallest = function() {

    if(heap.length > 0){
        return heap.shift()
    }
    
    min += 1
    return min - 1
};

SmallestInfiniteSet.prototype.addBack = function(num) {

    if(num >= min){
        return
    }

    for(let i = 0; i < heap.length; i++){
        if(num === heap[i]){
            return
        }

        if(num < heap[i]){
            heap.splice(i, 0, num)
            return
        }
    }

    heap.push(num)
};

// var SmallestInfiniteSet = function() {

//     set = Array(1000).fill(1)
    
// };

// SmallestInfiniteSet.prototype.popSmallest = function() {

//     let num = set.findIndex(n => n)
//     set[num] = 0
//     return num + 1
    
// };

// SmallestInfiniteSet.prototype.addBack = function(num) {

//     set[num - 1] = 1
    
// };
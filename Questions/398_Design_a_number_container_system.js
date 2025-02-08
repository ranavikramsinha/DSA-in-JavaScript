//* https://leetcode.com/problems/design-a-number-container-system

//* tc O(logn) for change and O(n) for find | sc O(n)

var NumberContainers = function() {

    this.indexToNumber = new Map();
    this.numberToIndicesQueue = new Map();
   
};

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {

    this.indexToNumber.set(index, number);

    if(!this.numberToIndicesQueue.has(number)){
        this.numberToIndicesQueue.set(number, new MinPriorityQueue());
    }

    this.numberToIndicesQueue.get(number).enqueue(index, index);
    
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {

    if(!this.numberToIndicesQueue.has(number)){
        return -1;
    }

    let indicesQueue = this.numberToIndicesQueue.get(number);

    while(!indicesQueue.isEmpty()){
        let {element: currentIndex } = indicesQueue.front();

        if(this.indexToNumber.get(currentIndex) === number){
            return currentIndex;
        }

        indicesQueue.dequeue();
    }

    return -1;
    
};
//* https://leetcode.com/problems/product-of-the-last-k-numbers/

//* tc O(1) | sc O(n)

var ProductOfNumbers = function() {

    this.arr = [];
    this.cumumlativeMultiply = 1;
    
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {

    if(num === 0){
        this.arr = [];
        this.cumumlativeMultiply = 1;
    }
    else{
        this.cumumlativeMultiply *= num;
        this.arr.push(this.cumumlativeMultiply);
    }

};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {

    let n = this.arr.length;

    if(k > n){
        return 0;
    }

    if(k === n){
        return this.cumumlativeMultiply;
    }

    let value = Math.trunc(this.cumumlativeMultiply / this.arr[n - k - 1]);

    return value;
    
};
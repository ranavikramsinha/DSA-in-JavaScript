//* https://leetcode.com/problems/finding-pairs-with-a-certain-sum/

//* tc O(n) | sc O(n)

var FindSumPairs = function (num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.freqMap = new Map();

    //initialising frequency map for num2
    for (const num of num2) {
        this.freqMap.set(num, (this.freqMap.get(num) || 0) + 1);
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
FindSumPairs.prototype.add = function (index, val) {
    let oldval = this.num2[index];
    if (this.freqMap.has(oldval)) {
        this.freqMap.set(oldval, this.freqMap.get(oldval) - 1);
    }

    this.num2[index] += val;
    let newval = this.num2[index];

    this.freqMap.set(newval, (this.freqMap.get(newval) || 0) + 1);
};

/** 
 * @param {number} tot
 * @return {number}
 */
FindSumPairs.prototype.count = function (tot) {
    let pairCount = 0;
    for (let num of this.num1) {
        let target = tot - num;
        pairCount += this.freqMap.get(target) || 0;
    }
    return pairCount;
};
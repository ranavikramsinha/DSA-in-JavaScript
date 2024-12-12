//* https://leetcode.com/problems/take-gifts-from-the-richest-pile/

//* tc O(nlogn + klogn) | sc O(n)

var pickGifts = function(gifts, k) {

    let maxHeap = new MinPriorityQueue({ compare: (a, b) => b - a });

    for(let gift of gifts){
        maxHeap.enqueue(gift);
    }

    let sum = gifts.reduce((acc, gift) => acc + gift, 0);

    while (k--){

        let maxValue = maxHeap.dequeue();
        let remaining = Math.trunc(Math.sqrt(maxValue));

        sum -= (maxValue - remaining);

        maxHeap.enqueue(remaining);
    }

    return sum;
};
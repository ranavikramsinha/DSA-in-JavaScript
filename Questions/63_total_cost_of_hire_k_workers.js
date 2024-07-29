//* https://leetcode.com/problems/total-cost-to-hire-k-workers/

var totalCost = function(costs, k, candidates) {

    let ans = 0;
    let l = 0;
    let r = costs.length - 1;
    const max = 100001
    const h1 = new MinPriorityQueue();
    const h2 = new MinPriorityQueue();

    h1.enqueue(max);
    h2.enqueue(max);

    for(let i = 0; i < k; i++){
        while(h1.size() <= candidates && l <= r){
            h1.enqueue(costs[l++]);
        }

        while(h2.size() <= candidates && l <= r){
            h2.enqueue(costs[r--]);
        }

        ans += (h1.front().element <= h2.front().element ? h1 : h2).dequeue().element;
    }

    return ans;
    
};

//* MinPriorityQueue Class:-
//* 
//* A MinPriorityQueue is a priority queue where the smallest element has the highest priority. It supports various operations, including:
//* 
//* => enqueue(element): Adds an element to the priority queue.
//* => dequeue(): Removes and returns the element with the highest priority (i.e., the smallest element in a min-heap).
//* => front(): Returns the element with the highest priority without removing it from the queue.
//* => size(): Returns the number of elements in the queue.
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
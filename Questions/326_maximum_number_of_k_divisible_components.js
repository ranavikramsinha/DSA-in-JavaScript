//* https://leetcode.com/problems/maximum-number-of-k-divisible-components/

//* tc O(n) | sc O(n + m) where n is the number of nodes and m is the number of edges

var maxKDivisibleComponents = function(n, edges, values, k) {
    let arr = Array.from({ length: n}, () => []);
    let count = [0];

    for(let [node1, node2] of edges){
        arr[node1].push(node2);
        arr[node2].push(node1);
    }

    dfs(0, -1);

    return count[0];

    function dfs(currentNode, parentNode){
        let sum = 0;

        for(let neighborNode of arr[currentNode]){
            if(neighborNode !== parentNode){
                sum += dfs(neighborNode, currentNode);
            }
        }

        sum += values[currentNode];

        if(sum % k === 0){
            sum = 0;
            count[0]++;
        }

        return sum;
    }
    
};
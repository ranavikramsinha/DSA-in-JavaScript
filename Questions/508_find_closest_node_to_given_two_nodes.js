//* https://leetcode.com/problems/find-closest-node-to-given-two-nodes/

//* tc O(n) == 2 * O(n) | sc O(n)

var closestMeetingNode = function(edges, node1, node2) {

    let n = edges.length;
    let arr1 = new Array(n).fill(Infinity);
    let isVisited1 = new Array(n).fill(false);

    let arr2 = new Array(n).fill(Infinity);
    let isVisited2 = new Array(n).fill(false);
    
    let minimum = -1;
    let currentMinimum = Infinity;

    arr1[node1] = 0;
    arr2[node2] = 0;

    dfs(edges, node1, arr1, isVisited1);
    dfs(edges, node2, arr2, isVisited2);

    for(let i = 0; i < n; i++){
        let maximum = Math.max(arr1[i], arr2[i]);

        if(currentMinimum > maximum){
            currentMinimum = maximum;
            minimum = i;
        }
    }

    return minimum;

    function dfs(edges, node, arr, visited){
        visited[node] = true;

        let value = edges[node];

        if(value != -1 && !visited[value]){
            visited[value] = true;
            arr[value] = 1 + arr[node];

            dfs(edges, value, arr, visited);
        }
    }
    
};
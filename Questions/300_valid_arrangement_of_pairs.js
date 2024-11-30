//* https://leetcode.com/problems/valid-arrangement-of-pairs/

//* tc: O(v + e) | sc: O(v + e)

var validArrangement = function(pairs) {
    let adjacencyList = new Map();
    let indegree = new Map();
    let outdegree = new Map();

    for(let edge of pairs){
        let u = edge[0];
        let v = edge[1];

        if(!adjacencyList.has(u)){
            adjacencyList.set(u, []);
        }
        
        adjacencyList.get(u).push(v);

        outdegree.set(u, (outdegree.get(u) || 0) + 1);
        indegree.set(v, (indegree.get(v) || 0) + 1);
    }

    let startingNode = pairs[0][0];

    for(let [ node ] of adjacencyList){
        let outDeg = outdegree.get(node) || 0;
        let inDeg = indegree.get(node) || 0;

        if(outDeg - inDeg === 1){
            startingNode = node;
            break;
        }
    }

    let path = [];
    let stack = [startingNode];

    while(stack.length > 0){
        let current = stack[stack.length - 1];

        if(adjacencyList.get(current) && adjacencyList.get(current).length > 0){
            let next = adjacencyList.get(current).pop();
            stack.push(next);
        }
        else{
            path.push(stack.pop());
        }
    }

    path.reverse();

    let result = [];

    for(let i = 0; i < path.length - 1; i++){
        result.push([path[i], path[i + 1]]);
    }

    return result;
};
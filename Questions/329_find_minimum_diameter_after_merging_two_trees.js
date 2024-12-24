//* https://leetcode.com/problems/find-minimum-diameter-after-merging-two-trees/

//* tc O(V1 + E1 + V2 + E2) | sc O(V1 + E1 + V2 + E2) where V1 is the number of nodes in tree 1, E1 is the number of edges in tree 1, V2 is the number of nodes in tree 2, E2 is the number of edges in tree 2

var minimumDiameterAfterMerge = function(edges1, edges2) {
    let adjacencyList1 = adjacencyList(edges1);
    let adjacencyList2 = adjacencyList(edges2);
 
    let diameter1 = diameter(adjacencyList1);
    let diameter2 = diameter(adjacencyList2);
 
    let connectedDiameter = Math.floor((diameter1 + 1) /2) + Math.floor((diameter2 + 1) / 2) + 1;
 
    return Math.max(diameter1, diameter2, connectedDiameter);
 
    function adjacencyList(edges){
     let map = new Map();
 
     for(let [node1, node2] of edges){
         if(!map.has(node1)){
             map.set(node1, []);
         }
         if(!map.has(node2)){
             map.set(node2, []);
         }
 
         map.get(node1).push(node2);
         map.get(node2).push(node1);
     }
 
     return map;
    }
 
    function diameter(map){
     let [farthestNodeFromStart, distance] = longestPath(map, 0);
     let [findingOtherNode, diameterLength] = longestPath(map, farthestNodeFromStart);
 
     return diameterLength;
    }
 
    function longestPath(map, startNode){
     let queue = [startNode];
     let visitedNodes = new Map();
 
     visitedNodes.set(startNode, true);
 
     let maximumDistance = 0;
     let farthestNode = startNode;
 
     while(queue.length > 0){
         let currentLevelSize = queue.length;
 
         for(let i = 0; i < currentLevelSize; i++){
             let currentNode = queue.shift();
             farthestNode = currentNode;
 
             for(let neighbor of map.get(currentNode) || []){
                 if(!visitedNodes.get(neighbor)){
                     visitedNodes.set(neighbor, true);
                     queue.push(neighbor);
                 }
             }
         }
 
         if(queue.length > 0){
             maximumDistance++;
         }
     }
 
     return [farthestNode, maximumDistance];
    }
     
 };
//* https://leetcode.com/problems/most-profitable-path-in-a-tree/

//* tc O(n) | sc O(n)

var mostProfitablePath = function(edges, bob, amount){

    let n = amount.length;
  
    let arr = new Array(n).fill(0).map(() => []);

    for(let [u, v] of edges){
        arr[u].push(v);
        arr[v].push(u);
    }
    
    let map = new Map();
    
    function dfsForBob(current, time, visited){
        visited[current] = true;
        map[current] = time;
        
        if(current === 0){
            return true;
        }
        
        for(let neighbor of arr[current]){
            if(!visited[neighbor]){
                if(dfsForBob(neighbor, time + 1, visited)){
                    return true;
                }
            }
        }
        
        delete map[current];
        return false;
    }
    
    function dfsForAlice(current, time, income, visited){
        visited[current] = true;
        
        if(!(current in map) || time < map[current]){
            income += amount[current];
        }
        else if(time === map[current]){
            income += amount[current] / 2;
        }

        if(current !== 0 && arr[current].length === 1){
            maxIncome = Math.max(maxIncome, income);
        }
        
        for(let neighbor of arr[current]){
            if(!visited[neighbor]){
                dfsForAlice(neighbor, time + 1, income, visited);
            }
        }
    }
    
    let visitedBob = new Array(n).fill(false);
    dfsForBob(bob, 0, visitedBob);
    
    let maxIncome = -Infinity;
    let visitedAlice = new Array(n).fill(false);
    dfsForAlice(0, 0, 0, visitedAlice);
    
    return maxIncome;
    
};
//* https://leetcode.com/problems/number-of-provinces/

var findCircleNum = function(isConnected) {

    let provinces = 0
    const visitedCities = new Set()

    function dfs(city, isConnected, visitedCities){
        for(let i = 0; i < isConnected[city].length; i++){
            if(!visitedCities.has(i) && isConnected[city][i] === 1){
                visitedCities.add(i)
                dfs(i, isConnected, visitedCities)
            }
        }
    }
    
    for(let i = 0; i < isConnected.length; i++){
        if(!visitedCities.has(i)){
            provinces++
            visitedCities.add(i)
            dfs(i, isConnected, visitedCities)
        }
    }

    return provinces
};
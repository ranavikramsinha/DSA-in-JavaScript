//* https://leetcode.com/problems/keys-and-rooms/

var canVisitAllRooms = function(rooms) {

    const length = rooms.length
    const visited = Array(length)
    let count = 0

    function dfs(i){
        visited[i] = true
        count++

        return rooms[i].some(i => !visited[i] && dfs(i))
    }

    dfs(0)

    return count === length
    
};
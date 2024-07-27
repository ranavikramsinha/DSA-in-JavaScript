//* https://leetcode.com/problems/combinations/description/

var combine = function(n, k) {
    
    let result = []
    let temp = []

    solve(1, n, k, temp)

    return result

    function solve(start, n, k, temp){
        if(k === 0){
            result.push([...temp])
            return
        }

        for(let i = start; i <= n; i++){
            temp.push(i)
            solve(i + 1, n, k - 1, temp)
            temp.pop()
        }
    }
    
};
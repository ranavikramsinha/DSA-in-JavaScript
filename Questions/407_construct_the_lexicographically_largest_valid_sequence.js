//* https://leetcode.com/problems/construct-the-lexicographically-largest-valid-sequence/

//* tc O(n!) | sc O(n)

var constructDistancedSequence = function(n) {

    let used = new Array(n + 1).fill(false);
    let result = new Array((2 * n) - 1).fill(-1);

    solve(0, n, result, used);

    return result;

    function solve(index, n, result, used){
        if(index >= result.length){
            return true;
        }

        if(result[index] !== -1){
            return solve(index + 1, n, result, used);
        }

        for(let value = n; value >= 1; value--){
            if(used[value] === true){
                continue;
            }

            result[index] = value;
            used[value] = true;

            if(value === 1){
                if(solve(index + 1, n, result, used) === true){
                    return true;
                }
            }
            else{
                let x = index + result[index];
                // let x = index + value; //* another way

                if(x < result.length && result[x] === -1){
                    result[x] = value;

                    if(solve(index + 1, n, result, used) === true){
                        return true;
                    }

                    result[x] = -1;
                }
            }

            result[index] = -1;
            used[value] = false;
        }

        return false;
    }
    
};
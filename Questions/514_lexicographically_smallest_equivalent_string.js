//* https://leetcode.com/problems/lexicographically-smallest-equivalent-string/

//* tc s O(m × (26 + n)) == O(m + n) | sc O(n) where m is baseStr length and n is s1 and s2 length

var smallestEquivalentString = function(s1, s2, baseStr) {

    let n = s1.length;
    let map = new Map();
    let result = "";

    for(let i = 0; i < n; i++){
        let u = s1[i];
        let v = s2[i];

        if(!map.has(u)){
            map.set(u, []);
        }

        if(!map.has(v)){
            map.set(v, []);
        }

        map.get(u).push(v);
        map.get(v).push(u);
    }

    for(let character of baseStr){
        let arr = new Array(26).fill(0);
        result += dfs(character, arr, map);
    }

    return result;

    function dfs(currentCharacter, arr, map){
        let index = currentCharacter.charCodeAt(0) - 97;
        arr[index] = 1;

        let minimumCharacter = currentCharacter;

        for(let character of map.get(currentCharacter) || []){
            let characterIndex = character.charCodeAt(0) - 97;

            if(arr[characterIndex] === 0){
                let getCharacter = dfs(character, arr, map);

                if(getCharacter < minimumCharacter){
                    minimumCharacter = getCharacter;
                }
            }
        }

        return minimumCharacter;
    }
    
};
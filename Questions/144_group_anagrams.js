//* https://leetcode.com/problems/group-anagrams/

var groupAnagrams = function(strs) {

    let map = new Map();
    
    for(let str of strs){
        let character = str.split('').sort().join('');

        if(!map.get(character)){
            map.set(character, []);
        }

        let arr = map.get(character);
        arr.push(str);
        map.set(character, arr);
    }

    return [...map.values()];
    
};
//* https://leetcode.com/problems/uncommon-words-from-two-sentences/

var uncommonFromSentences = function(s1, s2) {
    let map = new Map();
    let str1 = s1.split(' ');
    let str2 = s2.split(' ');

    for(let i = 0; i < str1.length; i++){
        if(map.has(str1[i])){
            map.set(str1[i], map.get(str1[i]) + 1);
        }
        else{
            map.set(str1[i], 1);
        }
    }

    for(let i = 0; i < str2.length; i++){
        if(map.has(str2[i])){
            map.set(str2[i], map.get(str2[i]) + 1);
        }
        else{
            map.set(str2[i], 1);
        }
    }

    let  result = [];

    for(let [key, value] of map){
        if(value === 1){
            result.push(key);
        }
    }

    return result;
};
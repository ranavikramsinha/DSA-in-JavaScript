//* https://leetcode.com/problems/isomorphic-strings/

var isIsomorphic = function(s, t) {
    let n = s.length;
    let map1 = {};
    let map2 = {};

    for(let i = 0; i < n; i++){
        if(!map1[s[i]] && !map2[t[i]]){
            map1[s[i]] = t[i];
            map2[t[i]] = true;
        }

        if(!map1[s[i]] || map1[s[i]] !== t[i]){
            return false;
        }
    }

    return true;
};
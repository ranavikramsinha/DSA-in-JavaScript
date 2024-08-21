//* https://leetcode.com/problems/minimum-window-substring/

var minWindow = function(s, t) {
    let n = s.length;

    if(t.length > n){
        return "";
    }

    let map = new Map();

    for(let char of t){
        map.set(char, (map.get(char) || 0) + 1);
    }

    let count = t.length;
    let i = 0;
    let j = 0;
    let start = 0;
    let window = Infinity;

    while(j < n){
        let charJ = s[j];

        if(map.has(charJ)){
            if(map.get(charJ) > 0){
                count--;
            }
            map.set(charJ, map.get(charJ) - 1);
        }

        while(count === 0){
            if(window > j - i + 1){
                window = j - i + 1;
                start = i;
            }

            let charI = s[i];

            if(map.has(charI)){
                map.set(charI, map.get(charI) + 1);
                if(map.get(charI) > 0){
                    count++;
                }
            }
            i++;
        }
        j++;
    }

    return window === Infinity ? "" : s.substring(start, start + window);
};
//* https://leetcode.com/problems/unique-number-of-occurrences/description/

var uniqueOccurrences = function(arr) {

    const count = new Map()

    for(const num of arr){
        count.set(num, (count.get(num) || 0) + 1)
    }

    const set = new Set()

    for(const c of count.values()){
        if(set.has(c)){
            return false
        }

        set.add(c)
    }

    return true
    
};
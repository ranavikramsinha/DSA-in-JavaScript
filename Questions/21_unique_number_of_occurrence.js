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

console.log(uniqueOccurrences([1, 2, 2, 3, 3, 3]))

//* arr = [1, 2, 2, 3, 3, 3]
//* 
//* Step 1: Initialize count Map
//* count = {}
//* 
//* Step 2: Count Occurrences
//* Loop through arr:
//*   1 -> count = {1: 1}
//*   2 -> count = {1: 1, 2: 1}
//*   2 -> count = {1: 1, 2: 2}
//*   3 -> count = {1: 1, 2: 2, 3: 1}
//*   3 -> count = {1: 1, 2: 2, 3: 2}
//*   3 -> count = {1: 1, 2: 2, 3: 3}
//* 
//* Step 3: Initialize set Set
//* set = {}
//* 
//* Step 4: Check for Unique Frequencies
//* Loop through count values:
//*   1 -> set = {1}
//*   2 -> set = {1, 2}
//*   3 -> set = {1, 2, 3}
//* 
//* Step 5: Return True
//* No duplicates found, return true
//* 
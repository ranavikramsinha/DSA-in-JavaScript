//* https://leetcode.com/problems/determine-if-two-strings-are-close/description/

var closeStrings = function(word1, word2) {

    if(word1.length !== word2.length){
        return false
    }

    const map1 = new Map()
    const map2 = new Map()

    for(const alphabet of word1){
        map1.set(alphabet, (map1.get(alphabet) || 0) + 1)
    }

    for(const alphabet of word2){
        map2.set(alphabet, (map2.get(alphabet) || 0) + 1)
    }

    const alphabet1 = new Set(map1.keys())
    const alphabet2 = new Set(map2.keys())

    if(alphabet1.size !== alphabet2.size){
        return false
    }

    const sameAlphabet = [...alphabet1].every(alpha => alphabet2.has(alpha))

    if(!sameAlphabet){
        return false
    }

    const sortedMap1 = Array.from(map1.values()).sort((a,b) => a - b)
    const sortedMap2 = Array.from(map2.values()).sort((a,b) => a - b)

    const areMapSame = sortedMap1.join(",") === sortedMap2.join(",")

    if(!areMapSame){
        return false
    }

    return true
    
};

console.log(closeStrings("aabbcc", "ccbbaa"))

//* 
//* word1: "aabbcc"
//* word2: "ccbbaa"
//* 
//* Step 1: Check Lengths
//* ---------------------
//* Length of word1: 6
//* Length of word2: 6
//* Lengths match, continue.
//* 
//* Step 2: Count Character Frequencies
//* -----------------------------------
//* map1: { 'a' => 2, 'b' => 2, 'c' => 2 }
//* map2: { 'c' => 2, 'b' => 2, 'a' => 2 }
//* 
//* Step 3: Get Unique Characters
//* -----------------------------
//* alphabet1: { 'a', 'b', 'c' }
//* alphabet2: { 'c', 'b', 'a' }
//* 
//* Step 4: Compare Unique Characters
//* ---------------------------------
//* Size of alphabet1: 3
//* Size of alphabet2: 3
//* Sizes match.
//* Both sets contain the same characters: true
//* 
//* Step 5: Compare Frequency Distributions
//* ---------------------------------------
//* sortedMap1: [2, 2, 2]
//* sortedMap2: [2, 2, 2]
//* Distributions match.
//* 
//* Result: true
//* 
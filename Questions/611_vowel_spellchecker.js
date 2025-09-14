//* https://leetcode.com/problems/vowel-spellchecker/

//* tc : O((n + m) * k) | sc : O(n) where n = wordlist.length, m = queries.length and k = average length of a word/query

var spellchecker = function(wordlist, queries) {

    let exactWords = new Set();
    let caseMap = new Map();
    let vowelMap = new Map();

    for (let word of wordlist) {
        exactWords.add(word);

        let lower = toLower(word);

        if (!caseMap.has(lower)) {
            caseMap.set(lower, word);
        }

        let masked = maskVowels(lower);

        if (!vowelMap.has(masked)) {
            vowelMap.set(masked, word);
        }
    }

    let result = [];

    for (let query of queries) {
        if (exactWords.has(query)) {
            result.push(query);
            continue;
        }

        let lowerQuery = toLower(query);

        if (caseMap.has(lowerQuery)) {
            result.push(caseMap.get(lowerQuery));
            continue;
        }

        let maskedQuery = maskVowels(lowerQuery);

        if (vowelMap.has(maskedQuery)) {
            result.push(vowelMap.get(maskedQuery));
            continue;
        }

        result.push("");
    }

    return result;

    function toLower(s) {
        return s.toLowerCase();
    }

    function maskVowels(s) {
        return s.replace(/[aeiou]/g, '*');
    }
    
};
//* https://leetcode.com/problems/sum-of-prefix-scores-of-strings/

class TrieNode {
    constructor() {
        this.children = {};
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
            node.count++;
        }
    }

    getPrefixSumCount(word) {
        let node = this.root;
        let sumCount = 0;

        for (let char of word) {
            node = node.children[char];
            sumCount += node.count;
        }

        return sumCount;
    }
}

var sumPrefixScores = function(words) {
    const trie = new Trie();

    for (let word of words) {
        trie.insert(word);
    }

    const result = [];

    for (let word of words) {
        result.push(trie.getPrefixSumCount(word));
    }

    return result;
};

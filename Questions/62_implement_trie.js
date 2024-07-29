//* https://leetcode.com/problems/implement-trie-prefix-tree/

// var Trie = function() {

//     this.words = new Set();
//     this.prefixes = new Set();
    
// };

// Trie.prototype.insert = function(word) {

//     let currentPrefix = "";

//     for(let i = 0; i < word.length; i++){
//         currentPrefix += word[i];
//         this.prefixes.add(currentPrefix);
//     }

//     this.words.add(word);
// };

// Trie.prototype.search = function(word) {

//     return this.words.has(word);
    
// };

// Trie.prototype.startsWith = function(prefix) {

//     return this.prefixes.has(prefix);
    
// };

var Trie = function() {
    this.root = {};
};
Trie.prototype.insert = function(word) {
    let currentNode = this.root;
    for(const char of word){
        if(!currentNode[char]){
            currentNode[char] = {};
        }
        currentNode = currentNode[char];
    }
    currentNode.isEnd = true;
};
Trie.prototype.search = function(word) {
    let currentNode = this.root;
    for(const char of word){
        if(!currentNode[char]){
            return false;
        }
        currentNode = currentNode[char];
    }
    return currentNode.isEnd || false;
};
Trie.prototype.startsWith = function(prefix) {
    let currentNode = this.root;
    for(const char of prefix){
        if(!currentNode[char]){
            return false;
        }
        currentNode = currentNode[char];
    }
    return true;
};
//* insert, search, and startsWith methods for a Trie

class TrieNode {
    constructor() {
        this.children = {};  //* Store children nodes
        this.isEndOfWord = false;  //* Mark if it's the end of a word
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();  //* Initialize root node
    }
    
    //* Method to insert a word into the Trie
    insert(word) {
        let node = this.root;
        for (let char of word) {
            //* If the character is not in the children of the current node, add it
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];  //* Move to the next node (child)
        }
        node.isEndOfWord = true;  //* Mark the end of the word
    }
    
    //* Method to search for a word in the Trie
    search(word) {
        let node = this.root;
        for (let char of word) {
            //* If the character is not found in the children, return false
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];  //* Move to the next node (child)
        }
        return node.isEndOfWord;  //* Return true if it's the end of a word
    }
    
    //* Method to check if any word in the Trie starts with a given prefix
    startsWith(prefix) {
        let node = this.root;
        for (let char of prefix) {
            //* If the character is not found, return false
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];  //* Move to the next node (child)
        }
        return true;  //* Return true if the prefix exists
    }
}

//* Create a new Trie
let trie = new Trie();

//* Insert words into the Trie
trie.insert("cat");
trie.insert("car");
trie.insert("bat");

//* Search for words
console.log(trie.search("cat"));  //* true
console.log(trie.search("can"));  //* false (word is not inserted)

//* Check if any words start with a given prefix
console.log(trie.startsWith("ca"));  //* true (words "cat" and "car" start with "ca")
console.log(trie.startsWith("ba"));  //* true (word "bat" starts with "ba")
console.log(trie.startsWith("dog")); //* false (no word starts with "dog")

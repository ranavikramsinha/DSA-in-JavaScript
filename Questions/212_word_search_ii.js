//* https://leetcode.com/problems/word-search-ii/

class TrieNode {
    constructor() {
        this.children = new Array(26).fill(null);
        this.endOfWord = false;
        this.word = "";
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    
    insert(word) {
        let node = this.root;

        for (let char of word) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);
            if (!node.children[index]) {
                node.children[index] = new TrieNode();
            }
            node = node.children[index];
        }
        node.endOfWord = true;
        node.word = word;
    }
}

var findWords = function(board, words) {
    const trie = new Trie();
    for (let word of words) {
        trie.insert(word);
    }

    const result = new Set();
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const r = board.length;
    const c = board[0].length;

    const dfs = (i, j, node) => {
        if (i < 0 || j < 0 || i >= r || j >= c || board[i][j] === '$' || !node.children[board[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]) {
            return;
        }

        node = node.children[board[i][j].charCodeAt(0) - 'a'.charCodeAt(0)];

        if (node.endOfWord) {
            result.add(node.word);
            node.endOfWord = false;
        }

        let temp = board[i][j];
        board[i][j] = '$';

        for (let [newI, newJ] of directions) {
            dfs(i + newI, j + newJ, node);
        }

        board[i][j] = temp;
    };

    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            if (trie.root.children[board[i][j].charCodeAt(0) - 'a'.charCodeAt(0)]) {
                dfs(i, j, trie.root);
            }
        }
    }

    return Array.from(result);
};
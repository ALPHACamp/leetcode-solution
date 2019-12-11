/**
 * Initialize your data structure here.
 */
var Trie = function() {
    this.trie = {}
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let trie = this.trie;
    for (let i=0; i<word.length; i++) {
        if (!(word[i] in trie)) {
            trie[word[i]] = {};
        }
        trie = trie[word[i]]
    }
    trie["*"] = {};
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let trie = this.trie;
    for (let i=0; i<word.length; i++) {
        if (!(word[i] in trie)) {
            return false;
        }
        trie = trie[word[i]];
    }
    return ("*" in trie);
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let trie = this.trie;
    for (let i=0; i<prefix.length; i++) {
        if (!(prefix[i] in trie)) {
            return false;
        }
        trie = trie[prefix[i]];
    }
    return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let anagramDict = {};

    for (let i = 0; i < strs.length; i++) {
        let content = strs[i].split('');
        content.sort();
        if (content in anagramDict) {
            anagramDict[content].push(strs[i]);
        }
        else {
            anagramDict[content] = [strs[i]];
        }
    }

    return Object.values(anagramDict);
};

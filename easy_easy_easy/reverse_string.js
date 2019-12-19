/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let len = s.length;
    let half_len = s.length/2;
    for (let i=0; i<half_len; i++) {
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
};

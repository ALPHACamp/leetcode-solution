/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const brackets = {')':'(', '}':'{', ']':'['};
    let stack = [];
    for (let i=0; i<s.length; i++) {
        if (s[i] in brackets) {
            if (stack.pop()!=brackets[s[i]]) {
                return false;
            }
        }
        else {
            stack.push(s[i]);
        }
    }
    return stack.length==0;
};

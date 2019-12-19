/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const roman_map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
    let sum = 0;
    let prev = roman_map[s[s.length-1]];
    for (let i=s.length-1; i>=0; i--) {
        if (roman_map[s[i]]<prev) {
            sum-=roman_map[s[i]];
        }
        else {
            sum+=roman_map[s[i]];
        }
        prev = roman_map[s[i]];
    }
    return sum;
};

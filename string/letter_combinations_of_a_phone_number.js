/**
 * @param {string} digits
 * @return {string[]}
 */
const mapping = ["abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
var letterCombinations = function(digits) {
    let combinations = [];
    if (digits.length==0) {
        return combinations;
    }
    helper(digits,0,"",combinations);
    return combinations;
};
var helper = function(digits,i,current,combinations) {
    if (i==digits.length) {
        combinations.push(current);
    }
    else {
        let digit = parseInt(digits[i],10);
        let letters = mapping[digit-2];
        for (let j=0; j<letters.length; j++) {
            helper(digits,i+1,current+letters[j],combinations);
        }
    }
}

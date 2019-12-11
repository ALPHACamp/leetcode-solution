/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    let l1 = text1.length+1;
    let l2 = text2.length+1;
    let memo = new Array(l1);
    for (let i=0; i<l1; i++) {
        memo[i] = new Array(l2);
        for (let j=0; j<l2; j++) {
            if (i===0||j===0) {
                memo[i][j]=0;
            }
            else if (text1[i-1]===text2[j-1]) {
                memo[i][j]=memo[i-1][j-1]+1;
            }
            else {
                memo[i][j]=Math.max(memo[i][j-1],memo[i-1][j]);
            }
        }
    }
    return memo[l1-1][l2-1];
};

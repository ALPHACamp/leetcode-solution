/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let memo = new Array(n);
    return climbStairs2(n, memo);
};

function climbStairs2(n, memo) {
    if (n < 0) {
        return 0;
    }
    else if (n == 0) {
        return 1;
    }
    else if (memo[n]) {
        return memo[n];
    }
    else {
        memo[n] = climbStairs2(n-1, memo) + climbStairs2(n-2, memo);
        return memo[n];
    }
}

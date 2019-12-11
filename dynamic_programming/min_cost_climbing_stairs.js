/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let a = cost[0];
    let b = cost[1];
    for (let i=2; i<cost.length; i++) {
        if (i%2==0) {
            a = Math.min(a,b)+cost[i];
        }
        else {
            b = Math.min(a,b)+cost[i];
        }
    }
    return Math.min(a,b);
};

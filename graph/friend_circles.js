/**
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function(M) {
    const len = M.length;
    let groups = [];
    for (let i=0; i<len; i++) {
        groups.push(i);
    }
    for (let i=0; i<len; i++) {
        for (let j=i+1; j<len; j++) {
            if (M[i][j]==1&&groups[i]!=groups[j]) {
                union(i,j,groups);
            }
        }
    }
    let finalGroups = new Set();
    for (let i=0; i<len; i++) {
        finalGroups.add(root(i,groups));
    }
    return finalGroups.size;
};
var root = function(i, groups) {
    while (i!=groups[i]) {
        i = groups[i];
    }
    return i;
}
var union = function(i, j, groups) {
    let group1 = root(i, groups);
    let group2 = root(j, groups);
    groups[group2] = group1;
}

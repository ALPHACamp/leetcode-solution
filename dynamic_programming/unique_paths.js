/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    let paths = new Array(n+1);
    for (let i = 0; i < paths.length; i++) {
      paths[i] = new Array(m+1).fill(0);
    }
    for (let row=1; row<=n; row++) {
        for (let col=1; col<=m; col++) {
            if (row==1&&col==1) {
                paths[row][col] = 1;
            }
            else {
                paths[row][col] = paths[row-1][col] + paths[row][col-1];
            }
        }
    }
    return paths[n][m];
};

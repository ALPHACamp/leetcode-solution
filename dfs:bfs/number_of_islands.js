/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    const l = grid.length;
    if (l==0) {
        return 0;
    }
    const w = grid[0].length;
    var bfs = function(i,j) {
        if (i>=0&&i<l&&j>=0&&j<w&&grid[i][j]=='1') {
            grid[i][j]='0';
            bfs(i-1,j);
            bfs(i,j-1);
            bfs(i,j+1);
            bfs(i+1,j);
        }
    }
    let islands = 0;
    for (let i=0; i<l; i++) {
        for (let j=0; j<w; j++) {
            if (grid[i][j]=='1') {
                islands++;
                bfs(i,j);
            }
        }
    }
    return islands;
};

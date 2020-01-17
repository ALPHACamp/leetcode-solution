/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    const rows = M.length;
    const cols = M[0].length;
    let ans = [];
    for (let i=0; i<rows; i++) {
        ans.push(new Array(cols).fill(0));
    }
    for (let r=0; r<rows; r++) {
        for (let c=0; c<cols; c++) {
            let count = 0;
            for (let i=-1; i<2; i++) {
                for (let j=-1; j<2; j++) {
                    if (r+i>=0&&r+i<rows&&c+j>=0&&c+j<cols) {
                        ans[r][c]+=M[r+i][c+j];
                        count++;
                    }
                }
            }
            ans[r][c] = Math.floor(ans[r][c]/count);
        }
    }
    return ans;
};

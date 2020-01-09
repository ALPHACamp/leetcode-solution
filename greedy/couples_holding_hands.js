/**
 * @param {number[]} row
 * @return {number}
 */
var minSwapsCouples = function(row) {
    const n = row.length;
    let indices = new Array(n);
    for (let i=0; i<n; i++) {
        indices[row[i]] = i;
    }
    let count = 0;
    for (let i=0; i<n; i+=2) {
        let couple1 = row[i];
        let couple2 = couple1%2==0?couple1+1:couple1-1;
        if (row[i+1]!=couple2) {
            row[indices[couple2]] = row[i+1];
            indices[row[i+1]] = indices[couple2];
            count++;
        }
    }
    return count;
};

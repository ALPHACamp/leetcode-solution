/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let N = A.length;
    let B = [];
    let i = 0;
    while (i<N&&A[i]<=0) {
        i++;
    }
    let j = i;
    i--;
    let index = 0;
    while (i>=0&&j<N) {
        if (A[i]*A[i]<A[j]*A[j]) {
            B[index] = A[i]*A[i];
            index++;
            i--;
        }
        else {
            B[index] = A[j]*A[j];
            index++;
            j++;
        }
    }
    while (i>=0) {
        B[index] = A[i]*A[i];
        index++;
        i--;
    }
    while (j<N) {
        B[index] = A[j]*A[j];
        index++;
        j++;
    }
    return B;
};

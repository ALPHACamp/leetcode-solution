/**
 * @param {number[]} A
 * @return {number}
 */
var peakIndexInMountainArray = function(A) {
    let left = 0;
    let right = A.length;
    let mid = Math.floor((left+right)/2);
    while (A[mid-1]>A[mid] || A[mid]<A[mid+1]) {
        if (A[mid-1]>A[mid]) {
            right = mid-1;
        }
        else {
            left = mid+1;
        }
        mid = Math.floor((left+right)/2);
    }
    return mid;
};

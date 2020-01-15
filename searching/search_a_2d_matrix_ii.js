/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if (matrix.length==0) {
        return false;
    }
    return helper(matrix, target, 0, matrix[0].length-1);
};
var helper = function(matrix, target, row, col) {
    if (row<matrix.length&&col>=0) {
        if (matrix[row][col]==target) {
            return true;
        }
        if (target<matrix[row][col]) {
            return helper(matrix, target, row, col-1);
        }
        else {
            return helper(matrix, target, row+1, col);
        }
    }
    else {
        return false;
    }
}

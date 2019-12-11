/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (nums.length<=1) { // base case
        return nums;
    }
    let middle = Math.floor(nums.length/2);
    let a = nums.slice(0,middle); // first half of nums array
    let b = nums.slice(middle); // second half of nums array
    return merge(sortArray(a),sortArray(b));
};

var merge = function(a,b) {
    let temp = []; // array combining a and b
    let aIndex = 0;
    let bIndex = 0;
    while (aIndex<a.length&&bIndex<b.length) {
        if (a[aIndex]<b[bIndex]) {
            temp.push(a[aIndex]);
            aIndex++;
        }
        else {
            temp.push(b[bIndex]);
            bIndex++;
        }
    }
    return temp.concat(a.slice(aIndex)).concat(b.slice(bIndex)); // for remaining elements in a or b, since the while-loop stops when one of the indices reach the end of the array
}

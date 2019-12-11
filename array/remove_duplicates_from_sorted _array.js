/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let a = nums.length-1;
    while (a>0) {
        if (nums[a]==nums[a-1]) {
            nums.splice(a,1);
        }
        a-=1;
    }
    return nums.length;
};

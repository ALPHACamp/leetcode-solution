/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let len = nums.length;
    let zero = 0;
    let non_zero = 0;
    while (non_zero<len) {
        while (zero<len&&nums[zero]!=0) {
            zero++;
        }
        while (non_zero<len&&nums[non_zero]==0) {
            non_zero++;
        }
        if (zero<len&&non_zero<len&&zero<non_zero) {
            nums[zero] = nums[non_zero];
            nums[non_zero] = 0;
        }
        non_zero++;
    }
};

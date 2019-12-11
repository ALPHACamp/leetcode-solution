/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let length = nums.length;
    let max = nums[0];
    for (let i=1; i<=length; i++) {
        if (nums[i] < nums[i]+nums[i-1]) {
            nums[i] = nums[i]+nums[i-1];
        }
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
};

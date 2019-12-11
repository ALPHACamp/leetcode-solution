/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length==0) {
        return 0;
    }
    if (nums.length==1) {
        return nums[0];
    }
    let max = nums[0];
    for (let i=2; i<nums.length; i++) {
        nums[i] = Math.max(nums[i]+nums[i-2],nums[i]+max);
        max = Math.max(nums[i-1],max);
    }
    return Math.max(max,nums[nums.length-1]);
};

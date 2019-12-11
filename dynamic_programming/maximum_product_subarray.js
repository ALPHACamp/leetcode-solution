
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (nums.length==0) {
        return 0;
    }
    let max = nums[0];
    let localMax = nums[0];
    let localMin = nums[0];
    for (let i=1; i<nums.length; i++) {
        let tempMax = Math.max(Math.max(localMax*nums[i],localMin*nums[i]),nums[i]);
        let tempMin = Math.min(Math.min(localMax*nums[i],localMin*nums[i]),nums[i]);
        max = Math.max(tempMax,max);
        localMax = tempMax;
        localMin = tempMin;
    }
    return max;
};

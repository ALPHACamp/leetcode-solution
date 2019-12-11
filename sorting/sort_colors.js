/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let red = 0;
    let mid = 0;
    let blue = nums.length-1;
    while (mid<=blue) {
        if (nums[mid]==0) {
            let temp = nums[red];
            nums[red] = nums[mid];
            nums[mid] = temp;
            red++;
            mid++;
        }
        else if (nums[mid]==1) {
            mid++;
        }
        else {
            let temp = nums[blue];
            nums[blue] = nums[mid];
            nums[mid] = temp;
            blue--;
        }
    }
    return nums;
};

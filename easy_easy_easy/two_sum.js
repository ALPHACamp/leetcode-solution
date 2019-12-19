/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = {};
    const len = nums.length;
    for (let i=0; i<len; i++) {
        let diff = target-nums[i];
        if (diff in map) {
            return [map[diff],i];
        }
        else {
            map[nums[i]] = i;
        }
    }
};

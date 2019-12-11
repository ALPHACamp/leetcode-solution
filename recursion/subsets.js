/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let results = []
    function helper(nums, subset, i) {
        if (i==nums.length) {
            return results.push(subset);
        }
        else {
            helper(nums, subset, i+1);
            helper(nums, subset.concat([nums[i]]), i+1);
        }
    }
    helper(nums, [], 0);
    return results;
};

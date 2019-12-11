/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return binarySearch(nums, 0, nums.length-1, target);
};

function binarySearch(nums, left, right, target) {
    if (left > right)
        return -1;

    let mid = Math.floor(left + (right-left)/2);

    if (target == nums[mid])
        return mid;

    if (nums[left] <= nums[mid]){
        if (nums[left] <= target && target < nums[mid]) {
          return binarySearch(nums,left, mid-1, target);
        } else {
          return binarySearch(nums, mid+1, right, target);
        }
    } else {
        if (nums[mid]<target&& target<=nums[right]) {
          return binarySearch(nums,mid+1, right, target);
        } else {
          return binarySearch(nums, left, mid-1, target);
        }
    }
}

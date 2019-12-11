/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let nums1i = m-1;
    let nums2i = n-1;
    let current = nums1.length-1;
    while (nums2i>=0) {
        if (nums1i>=0) {
            if (nums1[nums1i]>nums2[nums2i]) {
                nums1[current]=nums1[nums1i];
                nums1i--;
            }
            else {
                nums1[current]=nums2[nums2i];
                nums2i--;
            }
        }
        else {
            nums1[current]=nums2[nums2i];
            nums2i--;
        }
        current--;
    }
    return nums1;
};

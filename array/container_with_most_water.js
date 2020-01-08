/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0;
    let low = 0;
    let high = height.length-1;
    while (low<high) {
        max = Math.max(max, (Math.min(height[low],height[high])*(high-low)));
        if (height[low]<height[high]) {
            low++;
        }
        else {
            high--;
        }
    }
    return max;
};

/*
11. Container With Most Water

Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maximumArea = 0;
    let a = 0;
    let b = height.length - 1;
    while (b - a > 0) {
        let currArea = Math.min(height[a], height[b]) * (b - a);
        if (currArea > maximumArea) {
            maximumArea = currArea;
        }
        if (height[a] < height[b]) {
            a++;
        } else {
            b--;
        }
    }
    return maximumArea;
};

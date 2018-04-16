169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Credits:
Special thanks to @ts for adding this problem and creating all test cases.

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const counter = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (counter[nums[i]]) {
            counter[nums[i]]++;
        } else {
            counter[nums[i]] = 1;
        }
    }
    
    let majority = null;
    let max = 0;
    let elements = Object.keys(counter);
    
    for (let i = 0; i < elements.length; i++) {
        if (counter[elements[i]] > max) {
            majority = elements[i];
            max = parseInt(counter[elements[i]]);
        }
    }
    
    return parseInt(majority);
};

/*
136. Single Number

Given an array of integers, every element appears twice except for one. Find that single one.

Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let total = 0;
    let s = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) {
            total -= nums[i];
        } else {
            s.add(nums[i]);
            total += nums[i];
        }
    }
    
    return total;
};

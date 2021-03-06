/*
217. Contains Duplicate

Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        seen.add(nums[i]);
        if (seen.size < i + 1) {
            return true;
        }
    }
    
    return false;
};

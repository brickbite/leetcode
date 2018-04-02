/*
219. Contains Duplicate II

Given an array of integers and an integer k, find out whether there are two distinct indices i and j in the array such that nums[i] = nums[j] and the absolute difference between i and j is at most k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let a = new Set();
    let b = {};
    
    // find duplicates and save indexes
    for (let i = 0; i < nums.length; i++) {
        if (a.has(nums[i])) {
            if (b[nums[i]]) {
                b[nums[i]].push(i);
            } else {
                b[nums[i]] = [nums.indexOf(nums[i]), i];
            }
        }
        a.add(nums[i]);
    }
    
    // iterate through duplicates and see if there are any that meet conditions
    let keys = Object.keys(b);
    
    for (let i = 0; i < keys.length; i++) {
        let arr = b[keys[i]];
        for (let j = 1; j < arr.length; j++) {
            if (arr[j] - arr[j - 1] <= k) {
                return true;
            }
        }
    }
    
    return false;
};

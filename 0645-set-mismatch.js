/*
645. Set Mismatch

The set S originally contains numbers from 1 to n. But unfortunately, due to the data error, one of the numbers in the set got duplicated to another number in the set, which results in repetition of one number and loss of another number.

Given an array nums representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.

Example 1:
Input: nums = [1,2,2,4]
Output: [2,3]
Note:
The given array size will in the range [2, 10000].
The given array's numbers won't have any order.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let dup = null;
    let missing = null;
    
    let unique = new Set(nums);
    let empty = new Set();
    
    for (let i = 0; i < nums.length; i++) {
        if (!empty.has(nums[i])) {
            empty.add(nums[i]);
        } else {
            dup = nums[i];
        }
        
        if (!unique.has(i + 1)) {
            missing = i + 1;
        }
    }
    
    return [dup, missing];
};

/*
215. Kth Largest Element in an Array

Find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.

For example,
Given [3,2,1,5,6,4] and k = 2, return 5.

Note: 
You may assume k is always valid, 1 ≤ k ≤ array's length.

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    
    const max = {};
    
    for (let i = 1; i <= k; i++) {
        max[i] = -Infinity;
    }
    
    function updateMax(obj, num) {
        for (let i = 1; i <= k; i++) {
            
            if (num > obj[i]) {
                
                for (let j = k; j > i; j--) {
                    obj[j] = obj[j - 1];
                }
                
                obj[i] = num;
                break;
            }
            
        }
        
        return obj;
    }
    
    for (let i = 0; i < nums.length; i++) {
        updateMax(max, nums[i]);
    }
    
    return max[k];
    
};

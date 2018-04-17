/*
349. Intersection of Two Arrays

Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ist = [];
    
    if (nums2.length > nums1.length) {
        let temp = nums1;
        nums1 = nums2;
        nums2 = temp;
    }
    
    let n2set = new Set();
    let n1added = new Set();
    
    for (let i = 0; i < nums2.length; i++) {
        n2set.add(nums2[i]);
    }
    
    for (let i = 0; i < nums1.length; i++) {
        if (n2set.has(nums1[i]) && !n1added.has(nums1[i])) {
            n1added.add(nums1[i]);
            ist.push(nums1[i]);
        }
    }
    
    return ist;
};

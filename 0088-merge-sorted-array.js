/*
88. Merge Sorted Array

Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.

Note:
You may assume that nums1 has enough space (size that is greater or equal to m + n) to hold additional elements from nums2. The number of elements initialized in nums1 and nums2 are m and n respectively.
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {

    let p1 = m - 1;
    let p2 = n - 1;
    
    while (p1 + p2 >= -1) {
        if (nums2[p2] === undefined) {
            nums1[p1 + p2 + 1] = nums1[p1];
            p1--;
        } else if (nums1[p1] === undefined) {
            nums1[p1 + p2 + 1] = nums2[p2];
            p2--;
        } else if (Math.max(nums1[p1], nums2[p2]) === nums1[p1]) {
            nums1[p1 + p2 + 1] = nums1[p1];
            p1--;
        } else if (Math.max(nums1[p1], nums2[p2]) === nums2[p2]) {
            nums1[p1 + p2 + 1] = nums2[p2];
            p2--;
        }
    }
    
};

/*
100. Same Tree

Given two binary trees, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical and the nodes have the same value.


Example 1:

Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
Example 2:

Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
Example 3:

Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    
    if (p === null && q === null) {
        return true;
    } else if (p === null && q !== null) {
        return false;
    } else if (p !== null && q === null) {
        return false;
    }
    
    let same = true;
    
    if (p.val !== q.val) {
        same = false;
    }
    
    if (p.left !== null && q.left !== null) {
        if (same !== false) {
            same = isSameTree(p.left, q.left);
        }
    } else if (p.left === null && q.left === null) {
        console.log(`left is null`);
    } else {
        same = false;
    }
    
    if (p.right !== null && q.right !== null) {
        if (same !== false) {
            same = isSameTree(p.right, q.right);
        }
    } else if (p.right === null && q.right === null) {
        console.log(`right is null`);
    } else {
        same = false;
    }
        
    return same;
};

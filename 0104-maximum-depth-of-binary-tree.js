/*
104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

For example:
Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
return its depth = 3.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    max = 1;
    
    let leftD = 0;
    let rightD = 0;
    
    if (root.left) {
        leftD = 1 + maxDepth(root.left);
    }
    
    if (root.right) {
       rightD = 1 + maxDepth(root.right);
    }
    
    max = Math.max(1, leftD, rightD);
    
    return max;
};

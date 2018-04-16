/*
111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.
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
var minDepth = function(root, depth = 1) {
    if (!root) {
        return 0;
    }
    
    if (!root.left && !root.right) {
        return depth;
    }
    
    let leftMin = Infinity;
    let rightMin = Infinity;
    
    if (root.left) {
        leftMin = minDepth(root.left, depth + 1);
    }
    
    if (root.right) {
        rightMin = minDepth(root.right, depth + 1);
    }
    
    return Math.min(leftMin, rightMin);
};

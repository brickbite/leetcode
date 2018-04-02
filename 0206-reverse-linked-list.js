/*
206. Reverse Linked List

Reverse a singly linked list.

click to show more hints.

Hint:
A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    if (!head) {
        return null;
    }
    
    if (!head.next) {
        return head;
    }
    
    let prev = null;
    let curr = head;
    let next = head.next;
    
    while (curr !== null) {        
        // update list
        curr.next = prev;
        
        // move pointers along
        prev = curr;
        curr = next;
        
        if (curr !== null) {
            next = curr.next;
        }
        
    }
    
    return prev;
};

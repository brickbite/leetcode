/*
61. Rotate List

Given a list, rotate the list to the right by k places, where k is non-negative.


Example:

Given 1->2->3->4->5->NULL and k = 2,

return 4->5->1->2->3->NULL.
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if (!head || k === 0) {
        return head;
    }
    
    let p = head;
    let tail = null;
    let newTail = null;
    let newHead = null;
    
    let length = 1;
    let counter = 1;
    
    // find length and tail
    while (p.next) {
        p = p.next;
        length++;
        tail = p;
    }
    
    k = k % length;
    p = head;
    
    // traverse list, find position
    // pointer should be at length - k
    while (counter < length - k) {
        p = p.next;
        counter++
    }
    
    newTail = p;
    newTail.next ? (tail.next = head, newHead = newTail.next) : newHead = head;
    newTail.next = null;
    
    return newHead;
};

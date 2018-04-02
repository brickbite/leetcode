/*
234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.

Follow up:
Could you do it in O(n) time and O(1) space?
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let a = [];
    
    while (head !== null) {
        a.push(head.val);
        head = head.next;
    }
    
    let p1 = 0;
    let p2 = a.length - 1;
    
    while (p2 - p1 > 0) {
        if (a[p1] !== a[p2]) {
            return false;
        }
        p1++;
        p2--;
    }
    
    return true;
};

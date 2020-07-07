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
 * @return {number}
 */
var kthToLast = function (head, k) {
    let p = head
    let q = head
    while(k--) {
        q = q.next
    }

    while(!q) {
        p = p.next
        q = q.next
    }
    return p.val
};

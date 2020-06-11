/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    let preNode = null
    let curNode = head
    while (curNode) {
        if (curNode.val === val) {
            if (preNode === null) return head.next
            preNode.next = curNode.next
            return head
        }
        preNode = curNode
        curNode = curNode.next
    }
    return head
};
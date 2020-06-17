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
var reverseList = function (head) {
    let pre = null
    while (head) {
        const next = head.next
        head.next = pre
        pre = Object.assign({}, head)
        head = next
    }
    return pre
};
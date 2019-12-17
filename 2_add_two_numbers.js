/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {

    if (!l1 || !l2) {
        return l1 || l2
    }
    var l1Root = l1
    var tens = 0
    var sum = 0

    while (l2) {
        sum = l1.val + l2.val + tens
        l1.val = sum % 10
        tens = sum >= 10 ? 1 : 0

        if (!l2.next && tens) {
            if (!l1.next) {
                l1.next = {
                    val: tens,
                    next: null
                }
            } else {
                l2.next = {
                    val: 0,
                    next: null
                }
            }
        }

        if (!l1.next && l2.next) {
            l1.next = {
                val: 0,
                next: null
            }
        }

        l1 = l1.next
        l2 = l2.next
    }

    return l1Root
};

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
var isPalindrome = function (head) {
    let i = head
    let j = null
    while (head !== null) {
        head.pre = j
        j = head
        head = head.next
    }
    while (i !== j) {
        if (i.val !== j.val) return false
        i = i.next
        j = j.pre
        if(i.pre === j) break
    }
    return true
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let dummyHead = new ListNode(0, head);
    let groupHead = dummyHead;
    let node = head;
    while (node) {
        let count = 0;
        let temp = node;
        while (temp && count < k) {
            temp = temp.next;
            count++;
        }
        if (count === k) {
            let prev = null, curr = node;
            for (let i = 0; i < k; i++) {
                let next = curr.next;
                curr.next = prev;
                prev = curr;
                curr = next;
            }
            let nextGroupHead = groupHead.next;
            groupHead.next = prev;
            nextGroupHead.next = curr;
            groupHead = nextGroupHead;
            node = curr;
        } else {
            break;
        }
    }
    return dummyHead.next;
}
//I tried this recursively but got mixed up with assignments
//Iteration works fine apparently

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, null)))))
//console.log(head)
console.log(reverseKGroup(head, 2))
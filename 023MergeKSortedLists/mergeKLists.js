/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var mergeKLists = function (lists) {
    let valArray = [];
    for (let list of lists) {
        while (list) {
            valArray.push(list.val);
            list = list.next;
        }
    }
    valArray.sort((a, b) => a - b);

    let dummy = new ListNode(0);
    let current = dummy;
    for (let val of valArray) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};

let list1 = new ListNode(0, new ListNode(2, new ListNode(5, null)))
let list2 = new ListNode(1, new ListNode(3, new ListNode(4, null)))
let list3 = new ListNode(2, new ListNode(6, null))

console.log(mergeKLists([list1]))
//There's no way this is the answer, right?
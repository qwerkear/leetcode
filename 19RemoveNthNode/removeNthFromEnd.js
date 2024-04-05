/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let count = 1
    if (head.next == null) {
        return null
    }
    const recurse = (current, previous, count) => {
        let target

        if (!current.next) {
            target = count - n + 1
            
        } else {
            target = recurse(current.next, current, count + 1)
        }

        if (target == count) {
            if(previous){
                previous.next = current.next;
            } else {
                head = current.next;
            }


        }
        return target

    }

    recurse(head, null, count)

    return head
};
//let n4 =  new ListNode(5, null)
//let n3 = new ListNode(4, n4)
//let n2 = new ListNode(3, n3)
let n1 = new ListNode(2, null)
let head = new ListNode(1, n1)

let result = removeNthFromEnd(head, 2)

console.log(result)


function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}


/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let newListHead = new ListNode(0, null)
    let newListCurrent = newListHead;

    while(list1 && list2){
        if(list1.val < list2.val){
            newListCurrent.next = list1
            list1 = list1.next
        } else {
            newListCurrent.next = list2
            list2 = list2.next
        }
        newListCurrent = newListCurrent.next
    }
    newListCurrent.next = list1 || list2

    return newListHead.next
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let first4 =  new ListNode(5, null)
let first3 = new ListNode(4, first4)
let first2 = new ListNode(3, first3)
let first1 = new ListNode(2, first2)
let firsthead = new ListNode(1, first1)

let second4 =  new ListNode(5, null)
let second3 = new ListNode(4, second4)
let second2 = new ListNode(3, second3)
let second1 = new ListNode(2, second2)
let secondhead = new ListNode(1, second1)
mergeTwoLists(firsthead, secondhead)
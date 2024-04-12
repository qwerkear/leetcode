class Solution {
    public class ListNode {
        int val;
        ListNode next;

        ListNode() {
        }

        ListNode(int val) {
            this.val = val;
        }

        ListNode(int val, ListNode next) {
            this.val = val;
            this.next = next;
        }
    }

    public ListNode swapPairs(ListNode head) {
        ListNode headNode = new ListNode(0, head);
        ListNode currentNode = head;
        //Set current to head initially. This is one of the values to modify.
        ListNode previousNode = headNode;
        //Keep track of the previous node for the next loop

        while (currentNode != null && currentNode.next != null){
            ListNode nextPair = currentNode.next.next;
            //value of the next pair to be swapped
            ListNode secondNode = currentNode.next;
            //reference to the next node. This is the other value to modify

            secondNode.next = currentNode;
            currentNode.next = nextPair;
            previousNode.next = secondNode;

            //Update pointers from outside
            previousNode = currentNode;
            currentNode = nextPair;

        }

        return headNode.next;
    }

    public static void main(String[] args){
        Solution sol = new Solution();
        ListNode head = sol.new ListNode(1, sol.new ListNode(2,null));
        sol.swapPairs(head);
    }

    
}

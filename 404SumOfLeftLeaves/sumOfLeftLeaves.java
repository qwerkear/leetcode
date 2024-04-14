
class Solution {
    public class TreeNode {
        int val;
        TreeNode left;
        TreeNode right;

        TreeNode() {
        }

        TreeNode(int val) {
            this.val = val;
        }

        TreeNode(int val, TreeNode left, TreeNode right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public int sumOfLeftLeaves(TreeNode root) {
        if (root == null) {
            return 0;
        }

        int result = 0;

        if (root.left != null) {
            if (root.left.left == null && root.left.right == null) {
                result += result + root.left.val;
            } else {
                result += sumOfLeftLeaves(root.left);
            }
        }

        if (root.right != null) {
            result += sumOfLeftLeaves(root.right);
        }
        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        TreeNode head = sol.new TreeNode(3, sol.new TreeNode(9),
                sol.new TreeNode(20, sol.new TreeNode(15), sol.new TreeNode(7)));
        System.out.println(sol.sumOfLeftLeaves(head));
    }

}

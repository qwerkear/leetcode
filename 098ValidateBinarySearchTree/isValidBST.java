import java.util.ArrayList;
import java.util.List;

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

    public boolean isValidBST(TreeNode root) {
        return DFS(root, Long.MIN_VALUE, Long.MAX_VALUE);
    }

    public boolean DFS(TreeNode node, long minVal, long maxVal) {
        if (node == null)
            return true;
        if (node.val >= maxVal || node.val <= minVal)
            return false;
        return DFS(node.left, minVal, node.val) && DFS(node.right, node.val, maxVal);
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        TreeNode root = sol.new TreeNode(5, sol.new TreeNode(4),
                sol.new TreeNode(6, sol.new TreeNode(3), sol.new TreeNode(7)));
        System.out.println(sol.isValidBST(root));
    }
}

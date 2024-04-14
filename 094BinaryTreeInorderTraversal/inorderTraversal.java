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

    public List<Integer> inorderTraversal(TreeNode root) {
        List<Integer> result = new ArrayList<Integer>();

        DFS(root, result);
        
        return result;
    }

    public void DFS(TreeNode node, List<Integer> list){
        if(node == null){
            return;
        }

        if(node.left != null){
            DFS(node.left, list);                        
        }

        list.add(node.val);

        if(node.right != null){
            DFS(node.right, list);
        }
    }

    public static void main(String[] args){
        Solution sol = new Solution();
        TreeNode head = sol.new TreeNode(1, null, sol.new TreeNode(2, sol.new TreeNode(3), null));
        System.out.println(sol.inorderTraversal(head));
    }
}

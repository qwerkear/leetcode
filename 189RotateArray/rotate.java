import java.util.Arrays;

class Solution {
    public void rotate(int[] nums, int k) {
        int count = 0;
        int numsLength = nums.length;
        while (count != k) {

            Integer intToMove = nums[0];
            for (int i = 1; i <= numsLength - 1; i++) {
                System.out.println(nums[i]);
                int currentValue = nums[i];
                nums[i] = intToMove;
                intToMove = currentValue;

            }
            nums[0] = intToMove;

            count++;
            // System.out.println(intToMove);

        }
        System.out.println(Arrays.toString(nums));

    }

    //this is naive solution, oops
    public static void main(String[] args) {
        Solution sol = new Solution();
        int[] nums = { 1, 2, 3, 4, 5, 6, 7 };
        int k = 3;
        sol.rotate(nums, k);
    }
}
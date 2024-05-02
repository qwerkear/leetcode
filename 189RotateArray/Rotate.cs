public class Solution {
    public void Rotate(int[] nums, int k) {
        int rotations = k % nums.Length;
        Array.Reverse(nums);
        Array.Reverse(nums, 0, rotations);
        Array.Reverse(nums, rotations, nums.Length - rotations);
    }
}
class Solution {
    public int removeDuplicates(int[] nums) {
        int validIndex = 1;
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] != nums[i - 1]) {
                nums[validIndex++] = nums[i];
            }

        }
        return validIndex;
    }
}
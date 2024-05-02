public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int previous = -101;
        int validIndex = 0;
        for(int i = 0; i < nums.Length; i++){
            if(nums[i] != previous){
                nums[validIndex] = nums[i];
                previous = nums[i];
                validIndex++;
            }
        }

        return validIndex;
    }
}
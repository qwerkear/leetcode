public class Solution {
    public int RemoveDuplicates(int[] nums) {
        int previous = -101;
        int validIndex = 0;
        int dupeCount = 0;
        for(int i = 0; i < nums.Length; i++){
            if(nums[i] != previous){
                nums[validIndex] = nums[i];
                previous = nums[i];
                validIndex++;
                dupeCount = 0;
            } else {
                if(dupeCount < 1){
                    nums[validIndex] = nums[i];
                    previous = nums[i];
                    validIndex++;
                    dupeCount++;
                }
            }
        }

        return validIndex;
    }
}
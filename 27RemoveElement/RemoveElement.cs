public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int validSpace = 0;
        for(int i = 0; i < nums.Length; i++){
            if(nums[i] != val){
                nums[validSpace++] = nums[i];
            }
        }
        return validSpace;
    }
}
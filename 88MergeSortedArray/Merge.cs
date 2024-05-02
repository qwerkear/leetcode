public class Solution {
    public void Merge(int[] nums1, int m, int[] nums2, int n) {
        int nums1Pointer = m - 1;
        int nums2Pointer = n - 1;
        int currentPosition = m + n - 1;

        while(nums2Pointer >= 0){
            if(nums1Pointer >= 0 && nums1[nums1Pointer] >= nums2[nums2Pointer]){
                nums1[currentPosition--] = nums1[nums1Pointer--];
            } else {
                nums1[currentPosition--] = nums2[nums2Pointer--];
            }
        }

        return;
    }
}
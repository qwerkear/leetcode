public class Solution {
    public int MajorityElement(int[] nums) {
        Dictionary<int, int> countMap = new Dictionary<int, int>();

        foreach(int num in nums){
            if(countMap.ContainsKey(num)){
                countMap[num]++;
            } else {
                countMap[num] = 1;
            }

            if(countMap[num] > nums.Length / 2){
                return num;
            }
        }
        return Int32.MaxValue;
    }
}
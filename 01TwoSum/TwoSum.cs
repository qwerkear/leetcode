public class Solution {
    public int[] TwoSum(int[] nums, int target) {
        Dictionary<int, int> TwoSumMap = new Dictionary<int, int>();

        for(int i = 0; i < nums.Length; i++){
            int remainder = target - nums[i];

            if(TwoSumMap.ContainsKey(remainder)){
                return [TwoSumMap[remainder], i];
            }
            TwoSumMap[nums[i]] = i;
        }

        return [];
    }
}
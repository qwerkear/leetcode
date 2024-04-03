#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

class Solution
{
public:
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        sort(nums.begin(), nums.end());
        vector<vector<int>> result;

        for (int i = 0; i < nums.size(); i++)
        {
            if (i > 0 && nums[i] == nums[i - 1])
            {
                continue;
            }
            int left = i + 1;
            int right = nums.size() - 1;
            while (left < right)
            {
                int threeSum = nums[i] + nums[left] + nums[right];
                if (threeSum > 0)
                {
                    right -= 1;
                }
                else if (threeSum < 0)
                {
                    left += 1;
                }
                else
                {
                    result.push_back({nums[i], nums[left], nums[right]});
                    left += 1;
                    while (nums[left] == nums[left - 1] && left < right)
                    {
                        left += 1;
                    }
                }
            }
        }
        return result;
    }
};

int main()
{
    Solution sol;
    vector<int> input = {-1, 0, 1, 2, -1, -4};
    vector<vector<int>> result = sol.threeSum(input);
    for (auto &triplet : result)
    {
        cout << triplet[0] << " " << triplet[1] << " " << triplet[2] << "\n";
    }
    return 0;
}

// TODO: explain why the sorting helps

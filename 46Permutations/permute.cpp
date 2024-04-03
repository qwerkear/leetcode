#include <iostream>
#include <vector>
using namespace std;

class Solution
{
public:
    vector<vector<int>> permute(vector<int> &nums)
    {
        vector<vector<int>> result;

        if (nums.size() == 1)
        {
            result.push_back(nums);
            return result;
        }
        for (int i = 0; i < nums.size(); i++)
        {
            int n = nums[i];
            nums.erase(nums.begin() + i);
            vector<vector<int>> currentPermutations = permute(nums);
            for (vector<int> &perm : currentPermutations)
            {
                perm.push_back(n);
                result.push_back(perm);
            }
            nums.insert(nums.begin() + i, n);
        }

        return result;
    }
};

int main()
{
    Solution sol;
    vector<int> input = {3, 2, 1};
    vector<vector<int>> result = sol.permute(input);
    for (auto &permutations : result)
    {
        for (auto &permutation : permutations)
        {
            cout << permutation;
        }
        cout << endl;
    }
    return 0;
}
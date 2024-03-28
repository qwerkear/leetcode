#include <iostream>
#include <vector>
#include <map>

using namespace std;

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int remainder = 0;
        map<int, int> needed;
        for (int i = 0; i < nums.size(); i++)
        {
            remainder = target - nums[i];
            if(needed.find(remainder) != needed.end()){
                return {needed[remainder], i};
            }
            needed[nums[i]] = i;
        }

        return {};
    }
};

int main()
{
    Solution sol;
    vector<int> input = {2, 7, 11, 15};
    vector<int> result = sol.twoSum(input, 9);
    for (int i : result)
    {
        cout << i << " ";
    }

    return 0;
};
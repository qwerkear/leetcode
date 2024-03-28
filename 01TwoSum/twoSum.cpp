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
        map<int, int> result;
        for (int i = 0; i < nums.size(); i++)
        {
            remainder = target - nums[i];

        //if the remainder is not found, find() should return result.end()
            if(result.find(remainder) != result.end()){ 
                return {result[remainder], i};
            }
            result[nums[i]] = i;
        //cout << "current result map: " << endl;
        //for(auto &[k, v] : result){
        //    cout << "k: " << k << " v: " << v << endl;
        //}
        }

        return {};
    }
};

int main()
{
    Solution sol;
    vector<int> input = {11, 15, 2, 7};
    vector<int> result = sol.twoSum(input, 9);
    for (int i : result)
    {
        cout << i << " ";
    }

    return 0;
};
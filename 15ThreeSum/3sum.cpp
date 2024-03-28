#include <iostream>
#include <vector>
#include <map>

using namespace std;

class Solution
{
public:
vector<vector<int>> twoSum(vector<int> &nums, int target)
    {
        map<int, int> visited;
        vector<vector<int>> results = {};
        for (int i = 0; i < nums.size(); i++)
        {
            int remainder = target - nums[i];

        //if the remainder is not found, find() should return result.end()
            if(visited.find(remainder) != visited.end()){
                results.push_back({visited[remainder], i});
            }
            visited[nums[i]] = i;

        }

        return results;
    }
    vector<vector<int>> threeSum(vector<int> &nums)
    {
        vector<vector<int>> result = {};

        for(int i = 0; i < nums.size(); i++){
            int twoSumTarget = 0 - nums[i];
            vector<int> twoSumArray;
            vector<vector<int>> twoSumIndexes;
            for(int j = i; j < nums.size(); j++){
                //cout << "j + i = " << j + i << "; nums j + i: " << nums[j] + i << endl;
                twoSumArray.push_back(nums[j]);
            }
            //cout << "twoSumArray:" << endl;
            //for(auto p : twoSumArray){
            //    cout << p << endl;
            //}
            twoSumIndexes = twoSum(twoSumArray, twoSumTarget);
            cout << i << "twoSumIndexes:" << endl;
            for(vector<int> pair : twoSumIndexes){
                for(int p : pair){
                    p = p + i;
                }
                result.push_back({nums[i], nums[pair[0]], nums[pair[1]]});
                
            }
            //for(auto p : result){
            //    for(auto g : p){
            //        cout << g << ", ";
            //    }
            //}

        }
        //for(auto n : result){
        //    cout << "new Result: " << endl;
        //            for(auto m: n){                        
        //                cout << m << endl;
        //            }
        //        }
        return result;
    }

    
};

int main()
{
    Solution sol;
    vector<int> input = {-1, 0, 1, 2, -1, -4};
    sol.threeSum(input);
    //cout << sol.threeSum(input) << endl;
    return 0;
};

// I believe this is two sum but using one of the parameters as `target`

// Here is the Javascript solution for two sum:
// var twoSum = function(nums, target) {
//     for(i = 0 ; i < nums.length; i++){
//         for(j = i + 1; j < nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 return [i,j]
//             }
//         }
//     }
// }

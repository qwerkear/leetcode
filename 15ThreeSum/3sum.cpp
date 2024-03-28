#include <iostream>
#include <vector> 

using namespace std;

class Solution {
    public:
        vector<vector<int>> threeSum(vector<int>& nums) {
            
        }
    };



int main(){
        Solution sol;
        vector<string> input = {-1,0,1,2,-1,-4};
        cout << sol.threeSum(strings) << endl;
        return 0;
    };

//I believe this is two sum but using one of the parameters as `target`

//Here is the Javascript solution for two sum:
//var twoSum = function(nums, target) {
//    for(i = 0 ; i < nums.length; i++){
//        for(j = i + 1; j < nums.length; j++){
//            if(nums[i] + nums[j] === target){
//                return [i,j]
//            }
//        }
//    }
//}

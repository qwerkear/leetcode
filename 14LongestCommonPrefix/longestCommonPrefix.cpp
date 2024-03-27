#include <iostream>
#include <vector> 

using namespace std;

class Solution {
public:
    string longestCommonPrefix(vector<string>& strs) {
        
        if(strs.size() == 0){
            return "";
        }

        string prefix = strs[0];
        for (int i = 0; i != strs.size(); ++i){
            while(strs[i].find(prefix) != 0){
                prefix = prefix.substr(0, prefix.size() - 1);
                //cout << prefix << endl;
            }
        }
        return prefix;
    }
};

int main(){
        Solution sol;
        vector<string> strings = {"flower", "flow", "flight"};
        cout << sol.longestCommonPrefix(strings) << endl;
        return 0;
    };
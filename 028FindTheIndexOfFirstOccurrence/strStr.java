class Solution {
    public int strStr(String haystack, String needle) {
        int haystackLength = haystack.length();
        int needleLength = needle.length();
        int limit = haystackLength - needleLength;

        for(int i = 0; i <= limit; i++){
            int j;
            for(j = 0; j < needleLength; j++){
                if(haystack.charAt(i + j) != needle.charAt(j)){
                    break;
                }
            }
            if(j == needleLength){
                return i;
            }
        }

        return -1;
    }

    public static void main(String[] args){
        Solution solution = new Solution();
        String haystack = "ssadbutsad";
        String needle = "sad";
        //solution.strStr(haystack, needle);
        System.out.println(solution.strStr(haystack, needle));


    }
}


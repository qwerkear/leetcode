class Solution {
    public String mergeAlternately(String word1, String word2) {
        StringBuilder result = new StringBuilder();
        int min = Math.min(word1.length(), word2.length());
        for(int i = 0; i < min; i++){
            result.append(word1.charAt(i));
            result.append(word2.charAt(i));
        }
        if(word1.length() > min){
            result.append(word1.substring(min));
        }
    
        if(word2.length() > min){
            result.append(word2.substring(min));
        }
        return result.toString();
    }
}
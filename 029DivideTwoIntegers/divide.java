class Solution {
    public int divide(int dividend, int divisor) {
        if (dividend == Integer.MIN_VALUE && divisor == -1) {
            return Integer.MAX_VALUE;
        }

        boolean negative = (dividend < 0) != (divisor < 0);
        long dividendLong = Math.abs((long) dividend);
        long divisorLong = Math.abs((long) divisor);
        int count = 0;
        System.out.println(divisorLong + " " + dividendLong);

        // This is binary search, even if it's hard to tell
        while (dividendLong >= divisorLong) {
            int shift = 0;
            while (dividendLong >= (divisorLong << shift)) {
                shift++;
            }
            dividendLong -= divisorLong << (shift - 1);
            count += 1 << (shift - 1);
        }

        if (negative) {
            count = count * -1;
        }

        return count;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.divide(-2147483648, -1));
    }
}

//
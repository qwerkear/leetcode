class Solution {
    public int islandPerimeter(int[][] grid) {
        int perimeter = 0;
        for (int i = 0; i < grid.length; i++) {
            for (int j = 0; j < grid[0].length; j++) {
                if (grid[i][j] == 1) {
                    // check north
                    if (i == 0 || grid[i - 1][j] == 0) {
                        perimeter++;
                    }
                    // check south
                    if (i == grid.length - 1 || grid[i + 1][j] == 0) {
                        perimeter++;
                    }
                    // check east
                    if (j == grid[0].length - 1 || grid[i][j + 1] == 0) {
                        perimeter++;
                    }
                    // check west
                    if (j == 0 || grid[i][j - 1] == 0) {
                        perimeter++;
                    }
                }
            }
        }

        return perimeter;
    }
}

// I have a hunch that this doesn't need nested for loops to check every single
// slot given the problems constraints.
// I theorize that if you find one piece of land, you are connected to them all.
// If you keep track of visited indexes, you can check neighbors and never have
// to deal with indexes beyond the first water connected to land
// This adds complexity and memory, but probably scales better/faster with
// larger problems. TODO: Give this a try.
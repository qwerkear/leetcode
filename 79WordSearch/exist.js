/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    let visited = new Set();
    const backtrack = (row, column, count) => {
        let key = `${row},${column}`;

        if (board[row][column] == word[count]) {
            visited.add(key);

            if (count == word.length - 1) {
                return true;
            }

            let neighbors = getNeighbors(row, column);

            for (let [r, c] of neighbors) {
                if (backtrack(r, c, count + 1)) {
                    return true;
                }
            }

            visited.delete(key);
        }

        return false;
    }

    const getNeighbors = (r, c) => {
        let neighbors = [];

        if (r + 1 < board.length && !visited.has(`${r + 1},${c}`)) {
            neighbors.push([r + 1, c]);
        }
        if (r - 1 >= 0 && !visited.has(`${r - 1},${c}`)) {
            neighbors.push([r - 1, c]);
        }
        if (c + 1 < board[r].length && !visited.has(`${r},${c + 1}`)) {
            neighbors.push([r, c + 1]);
        }
        if (c - 1 >= 0 && !visited.has(`${r},${c - 1}`)) {
            neighbors.push([r, c - 1]);
        }

        return neighbors;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (backtrack(i, j, 0)) {
                return true;
            }
        }
    }

    return false;
};

//console.log(exist([["A", "B", "C", "E"], ["S", "F", "C", "S"], ["A", "D", "E", "E"]], 'ABC'))
console.log(exist([["C","A","A"],["A","A","A"],["B","C","D"]], 'AAB'))

//["C","A","A"]
//["A","A","A"]
//["B","C","D"]
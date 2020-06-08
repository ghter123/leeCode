/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const dirX = [0, 1, 0, -1]
const dirY = [1, 0, -1, 0]

var exist = function (board, word) {
    const n = board.length
    const m = board[0].length
    const boardFlag = []

    for (let i = 0; i < n; i++) {
        boardFlag.push([])
        for (let j = 0; j < m; j++) {
            boardFlag[i][j] = 0
        }
    }

    for (let i = 0; i < n; i++)
        for (let j = 0; j < m; j++) {
            if (DFS(i, j, board, boardFlag, word)) return true
        }
    return false
};

function DFS(x, y, board, boardFlag, word) {
    if (x < 0 || x >= board.length) return false
    if (y < 0 || y >= board[0].length) return false
    if (boardFlag[x][y]) return false
    if (word.length === 1 && board[x][y] === word) return true
    if (board[x][y] != word.substr(0, 1)) return false
    boardFlag[x][y] = 1
    for (let d = 0; d < dirX.length; d++) {
        if (DFS(x + dirX[d], y + dirY[d], board, boardFlag, word.substr(1))) {
            return true
        }
    }
    boardFlag[x][y] = 0
    return false
}

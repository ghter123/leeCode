/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

const dirX = [-1, 0, 1, 0]
const dirY = [0, 1, 0, -1]

var movingCount = function (m, n, k) {
    const flag = []
    for (let i = 0; i < m; i++) {
        flag.push([])
        for (let j = 0; j < n; j++) {
            flag[i][j] = 0
        }
    }
    DFS(0, 0, flag, k)
    return flag.reduce((total, cur) => total + cur.reduce((total, cur) => total + cur), 0)
};

function DFS(x, y, flag, k) {
    if (x < 0 || x >= flag.length) return
    if (y < 0 || y >= flag[0].length) return
    if (flag[x][y]) return
    if (sumDigits(x) + sumDigits(y) > k) return
    flag[x][y] = 1
    for (let i = 0; i < dirX.length; i++) {
        DFS(x + dirX[i], y + dirY[i], flag, k)
    }
}

function sumDigits(num) {
    let sum = 0
    while (num >= 1) {
        sum += num % 10
        num = num / 10
    }
    return parseInt(sum)
}

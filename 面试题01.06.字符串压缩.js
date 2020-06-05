/**
 * @param {string} S
 * @return {string}
 */
var compressString = function (S) {
    if (S.length <= 0) return S
    let compressed = '';
    let char = S[0];
    let count = 1;

    for (let i = 1; i < S.length; i++) {
        if (S[i] === char) {
            count++
        } else {
            compressed += `${char}${count}`
            count = 1
            char = S[i]
        }
    }

    compressed += `${char}${count}`

    return compressed.length >= S.length ? S : compressed
};

console.log(compressString('aabcccccaa'))
/**
 * @param {number} num
 * @return {number}
 */
var exchangeBits = function (num) {
    const odd = num & 0x55555555
    const even = num & 0xaaaaaaaa
    return odd << 1 | even >>> 1
};
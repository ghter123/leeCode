/**
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
var oneEditAway = function (first, second) {
    let minCmd = 0
    const difLength = first.length - second.length
    if (difLength > 1) return false
    if (difLength < 0) {
        const temp = first
        first = second
        second = temp
    }

    for (let i = 0, j = 0; i < first.length; i++, j++) {
        if (first[i] !== second[j]) {
            if (++minCmd > 1) return false
            if (first.length !== second.length) j--
        }
    }

    return true
};

console.log(oneEditAway("pale", "ple"))
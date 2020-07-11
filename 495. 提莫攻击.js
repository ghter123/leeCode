/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length <= 0) return 0
    let tatol = 0
    let reduceDuration = duration
    for (let i = 1; i < timeSeries.length; i++) {
        const timeInterval = timeSeries[i] - timeSeries[i - 1]
        if (timeInterval > reduceDuration) {
            tatol += reduceDuration
            reduceDuration = duration
        } else {
            tatol += timeInterval
            reduceDuration = Math.max(reduceDuration - timeInterval, duration)
        }
    }
    return tatol + reduceDuration
};
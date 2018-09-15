/**
 *  This function should return sum of
 *  all numbers and strings which can be converted to numbers
 *  in passed array
 *
 * @param {Array<number|string>} arr - this is an array of numbers or strings
 * @return {number} - sum of all numbers of array
 * @example
 * sumElements([1, 2, 3]);          // 6
 * sumElements(['1', 'hi', 3]);     // 4
 * sumElements([Infinity, NaN, 1]); // 1
 */

const sumElements = arr => {
    if(!Array.isArray(arr)) return;
    let totalNumber = 0,
        i = -1;
    while (++i < arr.length) {
        let s2n = (parseFloat(arr[i]) || parseInt(arr[i])),
            s2n2 = Math.trunc(arr[i]);
        if(s2n !== Infinity) {
            if(typeof s2n === 'number' && !isNaN(s2n)) {
                totalNumber += s2n;
            } else if(Number.isInteger(s2n2)) {
                totalNumber += s2n2;
            }
        }
    }
    return totalNumber;
};

export default sumElements;

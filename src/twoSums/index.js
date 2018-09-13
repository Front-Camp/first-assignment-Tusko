/**
 * This function should return values of first two elements which sum equals to "base" parameter
 *
 * @param {Array<number>} arr - the an array of numbers
 * @param {number} base - the sum of two elements of array
 * @return {Array<number>} - should return an array of values
 * @example
 * twoSums([1, 2, 4], 3); // [1, 2]
 * twoSums([5, 9, 3], 12); // [9, 3]
 */

const twoSums = (arr, base) => {
    const map = [];
    const indexnum = [];
    let result;

    for (let x = 0; x < arr.length; x++) {
        if (map[arr[x]] != null) {
            let index = map[arr[x]];
                indexnum[0] = index+1;
                indexnum[1] = x+1;
            break;
        } else {
            map[base - arr[x]] = x;
        }
    }
    result =  indexnum.map(function(idx) {
        return arr[idx-1];
    });
    return result;
};

export default twoSums;

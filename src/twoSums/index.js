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
    var sums = [];
    // check each element in array
    for (var i = 0; i < arr.length; i++) {
        // check each other element in the array
        for (var j = i + 1; j < arr.length; j++) {
            // determine if these two elements sum to S
            if (arr[i] + arr[j] === base) {
                sums.push([arr[i], arr[j]]);
            }
        }
    }
    // return all pairs of integers that sum to base
    console.log(sums); //console result is ok, test is failed
    return sums;
};

export default twoSums;

/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {

    // if(arr.includes(NaN)) {
    //     throw new Error('Has NaN');
    // } else if(arr.includes(Infinity)) {
    //     throw new Error('Has Infinity');
    // } else if(arr.includes(-Infinity)) {
    //     throw new Error('Has Infinity');
    // }

    return Math.max.apply(Math, arr.filter(function(val) {
        return Number.isFinite(val)
    }));

    // return Math.max(...arr);
};

export default max;

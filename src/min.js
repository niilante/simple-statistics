'use strict';
/* @flow */

/**
 * The min is the lowest number in the array. This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x sample of one or more data points
 * @throws {Error} if the the length of x is less than one
 * @returns {number} minimum value
 * @example
 * min([1, 5, -10, 100, 2]); // => -10
 */
function min(x /*: Array<number> */)/*:number*/ {
    var value;
    for (var i = 0; i < x.length; i++) {
        // On the first iteration of this loop, min is
        // undefined and is thus made the minimum element in the array
        if (value === undefined || x[i] < value) {
            value = x[i];
        }
    }
    if (value === undefined) {
        throw new Error('min requires at least one data point');
    }
    return value;
}

module.exports = min;

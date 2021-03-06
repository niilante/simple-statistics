'use strict';
/* @flow */

/**
 * This computes the maximum number in an array.
 *
 * This runs on `O(n)`, linear time in respect to the array
 *
 * @param {Array<number>} x sample of one or more data points
 * @returns {number} maximum value
 * @throws {Error} if the the length of x is less than one
 * @example
 * max([1, 2, 3, 4]);
 * // => 4
 */
function max(x /*: Array<number> */) /*:number*/ {
    var value;
    for (var i = 0; i < x.length; i++) {
        // On the first iteration of this loop, max is
        // undefined and is thus made the maximum element in the array
        if (value === undefined || x[i] > value) {
            value = x[i];
        }
    }
    if (value === undefined) {
        throw new Error('max requires at least one data point');
    }
    return value;
}

module.exports = max;

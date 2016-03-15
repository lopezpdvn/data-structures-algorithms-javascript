var assert = require('assert');
var path = require('path');

var dsalg = require('../../..');

describe('Array Sorting', function () {
    var unsortedIntArray = [9, 6, 2, 5, 1, 0, 10];
    var sortedIntArray = [0, 1, 2, 5, 6, 9, 10];
    it('Insertion Sort', function () {
        unsortedIntArray.insertionSort();
        assert.deepEqual(unsortedIntArray, sortedIntArray);
    });
});

'use strict';

const assert = require('assert');
const path = require('path');

const dsalg = require('../../..');

describe('Array Sorting', () => {
    const unsortedIntArray = [9, 6, 2, 5, 1, 0, 10];
    const sortedIntArray = [0, 1, 2, 5, 6, 9, 10];
    it('Insertion Sort', () => {
        unsortedIntArray.insertionSort();
        assert.deepEqual(unsortedIntArray, sortedIntArray);
    });
});

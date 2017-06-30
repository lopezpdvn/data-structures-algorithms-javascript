'use strict';

const assert = require('assert');

const dsalg = require('../../../..');

const SortedArrayNumber = dsalg.data_structures.array.sorted_array.SortedArrayNumber;

describe('Sorted Array', function() {
    it('Instantiation', function() {
        const sa = new SortedArrayNumber();
        assert.ok(sa instanceof SortedArrayNumber);
    });

    it('Insert', function() {
        const unsortedArr = [9, 6, 2, 5, 1, 0, 10];
        const arrLen = unsortedArr.length;
        const initArr = Array(arrLen).fill(Number());
        const sortedArr = [0, 1, 2, 5, 6, 9, 10];
        const sa = new SortedArrayNumber(arrLen);

        assert.strictEqual(sa.count, 0);
        assert.deepEqual(Array.from(sa), initArr);
        for(let x of unsortedArr) {
            sa.insert(x);
        }
        assert.deepEqual(Array.from(sa), sortedArr);
        assert.strictEqual(sa.count, arrLen);
    });
});

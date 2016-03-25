'use strict';

const assert = require('assert');
const path = require('path');

const dsalg = require('../../..');
const fibonacciSeq = dsalg.algorithms.math.fibonacciSeq;

describe('Fibonacci numbers', () => {
    it('With generators', () => {
        assert.deepStrictEqual([...fibonacciSeq(5)], [0, 1, 1, 2, 3]);
        assert.deepStrictEqual([...fibonacciSeq(17)],
                [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
                987]);
    });
});

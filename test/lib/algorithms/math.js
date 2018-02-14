'use strict';

const assert = require('assert');
const path = require('path');

const dsalg = require('../../..');
const fibonacciSeq = dsalg.algorithms.math.fibonacciSeq;

describe('Fibonacci numbers', function() {
    it('With generators', function() {
        assert.deepStrictEqual([...fibonacciSeq(5)], [0, 1, 1, 2, 3]);
        assert.deepStrictEqual([...fibonacciSeq(17)],
                [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610,
                987]);
    });
});

describe('Factorial', function() {
    const factorial = dsalg.algorithms.math.factorial;
    it('Simple test', function() {
        assert.strictEqual(factorial(-99), 1);
        assert.strictEqual(factorial(-1), 1);
        assert.strictEqual(factorial(0), 1);
        assert.strictEqual(factorial(1), 1);
        assert.strictEqual(factorial(2), 2);
        assert.strictEqual(factorial(3), 6);
        assert.strictEqual(factorial(4), 24);
        assert.strictEqual(factorial(5), 120);
        assert.strictEqual(factorial(6), 720);
    });
});

describe('Modulo', function() {
    const modulo = dsalg.algorithms.math.modulo;
    it('Simple test', function() {
        assert.strictEqual(modulo(5,2), 5%2);
        assert.strictEqual(modulo(6,2), 6%2);
        assert.strictEqual(modulo(1,3), 1%3);
    });
});

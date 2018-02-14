'use strict';

function* fibonacciSeq(n) {
    if(n < 1) return;
    yield 0;
    let prev = 0, curr = 1, i = -1, tmp;
    while(++i < n - 1) {
        yield curr;
        tmp = curr;
        curr += prev;
        prev = tmp;
    }
}

const factorial = function f(n) {
    return n < 2 ? 1 : n*f(n-1);
}

function modulo(a, b) {
    if(b <= 0) {
        return -1;
    }
    const div = Math.trunc(a / b);
    return a - div * b;
}

exports.fibonacciSeq = fibonacciSeq;
exports.factorial = factorial;
exports.modulo = modulo;

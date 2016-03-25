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

exports.fibonacciSeq = fibonacciSeq;

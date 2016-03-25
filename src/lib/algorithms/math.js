'use strict';

function* fibonacciSeq(n) {
    let prev = 0, curr = 1, i = -1, tmp;
    while(++i < n) {
        yield curr;
        tmp = curr;
        curr += prev;
        prev = tmp;
    }
}

exports.fibonacciSeq = fibonacciSeq;

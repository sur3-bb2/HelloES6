/**
 * Created by z002j8f on 12/5/16.
 */

function *foo(x) {
    let squareroot = 0 + (yield Math.sqrt(x));
    let decrement = squareroot - (yield squareroot);

    return decrement;
}

function *bar(x) {
    let increment = 1 + (yield x);
    let square = increment * (yield increment)
    let result = x + increment + square;

    var original = yield *foo(square);

    console.log(result);
    console.log(original);
}

let it = bar(10);
console.log(it.next()); // pause at increment, print 10
console.log(it.next(20)); //pass back 20, increment = 21, pause at square
console.log(it.next(it.next(21).value)); //pass back 21, multiply by 21, pause at foo.squareroot
console.log(it.next(11));
//console.log()
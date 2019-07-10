/**
 * Created by z002j8f on 11/23/16.
 */


function outer() {
    var counter = 0;

    var inner = function () {
        console.log(counter);
    }

    function increment() {
        counter++;
    }

    return {
        inner: inner,
        increment: increment
    };
}

var f = outer();

f.increment();
f.increment();
f.increment();
f.inner();
/**
 * Created by z002j8f on 12/5/16.
 */

function *demoSimpleYield() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

/*
var it = demoSimpleYield();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next(10));
*/

for(let v of demoSimpleYield()) {
    console.log(v);
}

function *foo(x) {
    var y = 2 * (yield (x + 1));
    var z = yield (y / 3);
    return (x + y + z);
}

var it = foo( 5 );

// note: not sending anything into `next()` here
console.log( it.next() );       // { value:6, done:false }
console.log( it.next( 12 ) );   // { value:8, done:false }
console.log( it.next( 13 ) );   // { value:42, done:true }

function *foothrow() {

}

var it1 = foothrow();

try {
    it1.throw('oops');
} catch (err) {
    console.log(err);
}

function *foothrow1(y) {
    try {
        var x = 1 + (yield y);
    } catch (err) {
        console.log(err);
    }
}

var it1 = foothrow1(3);

it1.next();
it1.throw('handled exception');


/**
 * Created by z002j8f on 12/5/16.
 */

(function demoArrows() {
    let numbers = [1, 2, 3, 4, 5];

    let squares = numbers.map(number => number * number);

    squares.forEach(s => {
        console.log('arrows:demoArrows ' + s);
    });
})();

var fives = Symbol();

class DemoArrows {
    constructor() {
        this[fives] = []; //way to make variable private, use Symbol.
    }

    getNumbers() {
        const nums = [2, 5, 10, 23, 25, 30, 31, 35];

        return nums;
    }

    showFives() {
        this.getNumbers().map(num => {
           if(num % 5 === 0) {
               this[fives].push(num);
           }
        });
    }

    get getFives() {
        return this[fives]; //anti-pattern, don't return reference
    }

    defaultValues(x, y = 20, z = 30, ...a) {
        let spreads = [2, 3, 4, 5];
        let spreaded = [1, ...spreads];

        console.log(spreaded);

        return x + y + z + a.length;
    }

    get stringInterpolation() {
        let customer = { name: "Foo" }
        let card = { amount: 7, product: "Bar", unitprice: 42 }

        return `Hello ${customer.name},
                want to buy ${card.amount} ${card.product} for
                a total of ${card.amount * card.unitprice} bucks?`
    }
}

(function demoLexicalThis() {
    let demoA = new DemoArrows();

    demoA.showFives();
    //demoA.getFives.push(9);
    console.log(demoA.getFives);
    console.log(demoA.defaultValues(1, 30, 50, 2, 3, 4, 5, 6));
    console.log(demoA.stringInterpolation);
})();
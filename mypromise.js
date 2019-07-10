/**
 * Created by z002j8f on 12/5/16.
 */

function async1() {
    return new Promise((resolve, reject) => {
        let sum = 0;

        for(let i = 0; i <= 10000; i ++) {
            console.log(i);
            sum = i;
        }

        resolve(sum);
    });
}

function async2() {
    return new Promise((resolve, reject) => {
        let sum = 10001;

        for(let i = 10001; i <= 20000; i ++) {
            console.log(i);
            sum = i;
        }

        resolve(sum);
    });
}

Promise.all([
    async1(),
    async2()
]).then(([sum, sum1]) => {
   console.log(sum + sum1);
});

console.log('done');
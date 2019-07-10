const add = (x, y) => {
    console.log('add');

    return new Promise((resolve) => setTimeout(() => {resolve(x+y);}, 3000));
}

const sub = (x, y) => {
    console.log('sub');

    return x-y;
}

/*add(3,4)
    .then(() => console.log('done add'))
    .catch(error => console.log(error));

sub(5,4).then(() => console.log('done sub'));*/

new Promise((resolve) => resolve()).then(add).then(sub).then(() => console.log('all done')).catch(error => console.log(error));
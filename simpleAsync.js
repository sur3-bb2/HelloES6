const getJSON = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(JSON.parse('{ "title": "async/await", "source": "hacker noon"}'))
        }, 1000);
    });
};

const makeRequest = () => {
    return getJSON()
        .then(data => console.log(data))
        .then(() => { return "done"; });
};

const makeAsyncRequest = async () => {
    console.log(await getJSON());
    console.log('makeAsyncRequest done');
}

makeAsyncRequest();
const fn = () => {
    return window.fetch('https://html.spec.whatwg.org/').then(function (response) {
        var reader = response.body.getReader();
        var bytesReceived = 0;

        reader.read().then(function processResult(result) {
            if (result.done) {
                console.log("Fetch complete");
                return;
            }
            bytesReceived += result.value.length;
            console.log(`Received ${bytesReceived} bytes of data so far`);

            reader.read().then(processResult);
        });
    });
};
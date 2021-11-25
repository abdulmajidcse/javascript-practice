async function test() {
    // throw new Error("I am an error");
    let myPromise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve("I am from Resolved");
            // reject("I am from Rejected");
        }, 3000);
    });

    return await myPromise;
}

test().then(function(response) {
    console.log(response);
}).catch(function(error) {
    console.log(error);
});
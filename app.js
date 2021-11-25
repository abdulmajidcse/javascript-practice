let myPromise = new Promise(function(resolve, reject) {
    // resolve("I am from Resolve");
    reject("I am from Reject");
});

myPromise.then(function(value) {
        console.log(value);
})
.catch(function(error) {
    console.log(error);
})
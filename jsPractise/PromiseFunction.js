
// resolve is part of the syntax of promise asyn function
function promisedMyOwnSetTimeOut(duration) {
    const p = new Promise(function(resolve) {
        setTimeout(resolve, duration);
    });
    return p;
}

const ans = promisedMyOwnSetTimeOut(1000);
ans.then(function() {
    console.log("Code completed");
})
process.stdin.setEncoding('utf8');
process.stdin.on("data" , function(input) {
    const tests = input.split('\n');
    isGoodTurn(tests);
})

function isGoodTurn(tests) {
    let t = parseInt(tests[0]);
    for(let i=1; i <= t; i++) {
        const num = tests[i].split(" ");
        if((parseInt(num[0]) + parseInt(num[1])) > 6) {
            console.log("YES")
        } else {
            console.log("NO");
        }
    }
}
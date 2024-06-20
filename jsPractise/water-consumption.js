process.stdin.setEncoding('utf8');
process.stdin.on("data", function(input) {
    const tests = input.split('\n');
    waterConsumption(tests);
})

function waterConsumption(tests) {
    const t = tests[0];
    for(let i=1; i <= t; i++) {
        const num = tests[i];
        if (num >= 2000) {
            console.log("YES")
        }
        else {
            console.log("NO")
        }
    }
}
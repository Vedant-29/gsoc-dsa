// Complete the code

function addTwoNumbers(tests){
    let t = parseInt(tests[0]);
    for (let i=1; i<=t; i++) {
      const num = tests[i].split(" ");
      const a = parseInt(num[0]);
      const b = parseInt(num[1]);
      const sum = a + b;
      console.log(sum);
      
    }
  }
  
  // Input related code. Please do not change. 
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(input) {
    const tests = input.split('\n');
    addTwoNumbers(tests);
  });
  
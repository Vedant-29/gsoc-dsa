// const num = [1, 2, 3, 4];
// const mul = num.filter(function (num) {
//   return ;
// });

// console.log(mul);


const num = [1,2,3,4,5];
function filteringLogic(n) {
    if (n%2 == 0) {
        return true;
    } else {
        return false;
    }
}
const filteredVal = num.filter(filteringLogic)
console.log(filteredVal);
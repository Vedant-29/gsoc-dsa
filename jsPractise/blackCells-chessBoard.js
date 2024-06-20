function half(b) {
    const halfValue = b/2;
    return halfValue;
}

function square(num) {
    const foundValue = num*num;
    return half(foundValue);
}

function solve(a) {
    square(a);
    console.log(square(a));
}
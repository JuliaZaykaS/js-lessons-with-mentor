//function expression
const myFunc1 = function () {
    let a = 1;
    let b = 2;
    let result = a + b;
    return result;

}

let result = myFunc1();
console.log(result);

const myFunc2 = function (a = 0, b = 0) {
    a = parseFloat(a);
    b = parseFloat(b);
    let result = a + b;
    return result;

}
result = myFunc2(10,15);
console.log(result);

result = myFunc2(10);
console.log(result);

result = myFunc2(10, 15, 20);
console.log(result);

result = myFunc2('10', '15');
console.log(result);

result = myFunc2('10a', '15.5b');
console.log(result);

result = myFunc2('twelve', 'ten');
console.log(result);

const myFunc3 = function (a = 0, b = 0) {
    a = parseFloat(a);
    b = parseFloat(b);
    console.log(a, b);
    let result;
    // if (typeof a === 'string' || typeof b === 'string') {
    //     result = 'Вы ввели нечисловое значение!';
    // } else {result = a+b};
    if (a === NaN || b === NaN && a + b === NaN) {
        result = 'Вы ввели нечисловое значение!';
    }
    // } else {result = a+b};
    return result;
}
result = myFunc3('twelve', 'ten');
console.log(result);

// function declaration
result = myFunc4(4, 2);
function myFunc4(x, y) {
    return x * y;
}
console.log(result);

// arrow function

const myFunc5 = (x, y) => {
    return x ** y;
};

result = myFunc5(2, 3);
console.log(result);
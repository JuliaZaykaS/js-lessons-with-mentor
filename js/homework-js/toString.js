// TO STRING

// Number to String
let value = 0;

// 1)
let toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

value = 1;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

value = Infinity;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

value = NaN;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

// Boolean to String

value = true;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

value = false;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

// Undefined to String
value = undefined;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

// Null to String
value = null;
// 1)
toString = String(value);
console.log(`${value}, значение через конструктор String()`, toString);
console.log(`тип данных ${value}, значение через конструктор String()`, typeof toString);

// 2)
toString = value + '';
console.log(`${value}, значение через конкатенацию`, toString);
console.log(`тип данных ${value}, значение через конкатенацию`, typeof toString);

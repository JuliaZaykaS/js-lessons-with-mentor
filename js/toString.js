let value = 1;
let toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);

toString = value + '';
console.log('value:', toString);
console.log('typeof:', typeof toString);

value = true;
toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);

toString = value + '';
console.log('value:', toString);
console.log('typeof:', typeof toString);

value = null;
toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);

value = undefined;
toString = String(value);
console.log('value:', toString);
console.log('typeof:', typeof toString);
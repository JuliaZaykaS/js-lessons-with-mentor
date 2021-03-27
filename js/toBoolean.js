let value = '1';
let toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = '0';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = '';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = ' ';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 'Julia';
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 1;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 0;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = 5;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = NaN;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = Infinity;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = null;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

value = undefined;
toBoolean = Boolean(value);
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

toBoolean = !!value;
console.log('value:', toBoolean);
console.log('typeof:', typeof toBoolean);

//=====

console.log(!!'');
console.log(!!0);
console.log(!!NaN);
console.log(!!null);
console.log(!!undefined);
console.log(!!false);


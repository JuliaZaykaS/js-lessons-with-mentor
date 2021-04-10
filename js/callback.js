const toGetResult = function (a, b, callback) {
    return callback(a, b);
};

const toGetSum = function (x, y) {
    return x + y;
};

let result = toGetResult(5, 10, toGetSum);
console.log(result);

const toGetMultyply = function (x, y) {
    return x * y;
};
result = toGetResult(5, 10, toGetMultyply);
console.log(result);

const toGetPow = function (x, y) {
    return x ** y;
};
result = toGetResult(5, 10, toGetPow);
console.log(result);

const toLearnJs = function (value1, callback1, value2, callback2, value3, callback3) {
   let x = callback1(value1);
    let y = callback2(value2);
    let z = callback3(value3);
    return `${x}. ${y}. ${z}.`;
};

const toRead = function (book) {
    return `Нужно читать ${book}`;
};

const toWrite = function (code) {
    return `Нужно писать ${code}`;
};

const toWatch = function (video) {
    return `Нужно смотреть ${video}`;
};

result = toLearnJs('JS for babies', toRead, 'приложение', toWrite, 'webinars', toWatch)
console.log(result);

result = toLearnJs('docs', toRead, 'functions', toWrite, 'мастер-классы', toWatch);
console.log(result);

const toDo = function (x) {
    return `Нужно делать ${x}`;
};

result = toLearnJs('homework', toDo, 'classwork', toDo, 'practise', toDo);
console.log(result);

const toLearnProgramming = function (array,func) {
    console.log(array);
    // let value = '';
    for (let elem of array) {
        console.log(elem);
        console.log(func(elem));

    }
    // return value;
    // console.log(func);
};


result = toLearnProgramming(['homework', 'classwork'], toDo);
// console.log(result);

const product = {
    name: 'apple',
    weight: 1,
    price: 20,
    toChangeWeight(newWeight) {
        return this.weight = newWeight;
    },
    toChangePrice(newPrice) {
        return this.price = newPrice;

    },
    toChangeAllProps(value1='product',value2=0,value3=0) {
        this.name = value1;
        this.weight = value2;
        this.price = value3;
        return (this.name, this.weight, this.price)
    },
};

console.log(product);
console.log(product.weight);
console.log(product['price']);

product.toChangeWeight(5);
console.log(product);
console.log(product.weight);
console.log(product['price']);

product.toChangePrice(50)
console.log(product);
console.log(product.weight);
console.log(product['price']);

const product1 = {
    name: 'banana',
    price: 60,
    weight: 0,

};

const product2 = {
    name: 'ananas',
    weight: 0,
    price: 100,
};

console.log(product1,product2);
product.toChangePrice.call(product1, 80);
console.log(product1,product2);
product.toChangePrice.call(product2, 120);
console.log(product1, product2);

product.toChangeAllProps();
console.log(product);

const props = ['grape', 10, 100];
product.toChangeAllProps.call(product1, props);
console.log(product1);
product.toChangeAllProps.apply(product1, props);
console.log(product1);

const transformer = {
    name: 'bumblbee',
    speed: 160,
    maxSpeed: 200,
    charge: '65%',

};

transformer.toLowCharge = function () {
    this.charge = `${parseInt(this.charge) - 1}%`;
    // this.charge = parseInt(this.charge) - 1;
    console.log(this.charge);
};

transformer.toLowCharge();

transformer.toUpCharge = function () {
    this.charge = `${parseInt(this.charge) + 1}%`;
    // this.charge = parseInt(this.charge) - 1;
    console.log(this.charge);
};

transformer.toUpCharge();

transformer.toUpSpeed = function (value) {
    let { maxSpeed , speed } = this;
    // return speed + value >= maxSpeed ? speed += value : console.log('Ты превысил допустимую скорость');
    return maxSpeed >= speed + value ? speed += value : 'Ты превысил допустимую скорость';
    // return this.speed + value <= this.maxSpeed ? this.speed += value : console.log('Ты превысил допустимую скорость');
    // return this.maxSpeed >= this.speed + value ? this.speed += value : console.log('Ты превысил допустимую скорость');
    // if (this.speed + value <= this.maxSpeed) {
    //     this.speed += value;
    // }else{ console.log('Ты превысил допустимую скорость')};
    // return this.speed;
};

transformer.toUpSpeed(10);
console.log(transformer.speed);
transformer.toUpSpeed(100);
console.log(transformer.speed);

transformer.toLowSpeed = function (value) {
    let { speed } = this;
    return speed - value > 0 ? speed -= value : console.log('Ты скоро остановишься');
    // return this.speed - value > 0 ? this.speed -= value : console.log('Ты скоро остановишься');
    // if (this.speed - value > 0) {
    //     this.speed -= value;

    // } else{console.log('Ты скоро остановишься') };
    // return this.speed;
};
transformer.toLowSpeed(160);
console.log(transformer.speed);
transformer.toLowSpeed(170);
console.log(transformer.speed);

const user = {
    _name: 'Julia',
    _age: 31,
    _gender: 'female',
    get name() {
        return this._name;
     },
    set name(value) {
        return this._name = value;
    },
    get gender() {
        return this._gender;
    },
    set gender(value) {
        return this._gender = value;
    },
    get age() {
        return this._age;
    },
    set age(value) {
        return this._age += value;
    },
    toPaint(...picture) {
        // return `Я рисую ${picture}`;
        return `Я рисую ${picture}`

    },
};
console.log(user);

console.log(user.name);
user.name = 'Zayka';
console.log(user.name);

user.gender = 'male';
console.log(user.gender);

user.age = 1;
console.log(user.age);

const user1 = {
    _name: 'July',
    _age: 18,
    _gender: 'female',

};

console.log(user.toPaint.call(user1, 'Flowers'));
console.log(user.toPaint.call(user1, 'Trees'));

console.log(user.toPaint.call(user1, ['Dogs', 'Horses', 'Cats']));



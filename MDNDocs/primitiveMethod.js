let john = {
	name: 'John',

	sayHi: function () {
		console.log('친구야 반갑다!');
	},
};

john.sayHi();

let str = 'Hello';
console.log(str.toUpperCase());
let n = 1.23456;
console.log(n.toFixed(2));
console.log(typeof 0);
console.log(typeof new Number(0));
let zero = new Number(0);
if (zero) {
	console.log('zero');
}

let num = Number('123');
console.log(num);

str = 'hello';
str.test = 5;
console.log(str.test);

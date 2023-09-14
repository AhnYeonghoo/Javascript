function square(number) {
	return number * number;
}

function myFunc(theObject) {
	theObject.make = 'Toyota';
}
const myCar = {
	make: 'honda',
	model: 'Accord',
	year: 1998,
};

const x = myCar.make;
myFunc(myCar);
const y = myCar.make;
console.log(x);
console.log(y);

function myFunc2(theArr) {
	theArr[0] = 30;
}

const arr = [45];
console.log(arr[0]);
myFunc2(arr);
console.log(arr[0]);

const square2 = function (number) {
	return number * number;
};

const result = square2(4);
console.log(result);

const factorial = function fac(n) {
	return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));

function map(fn, arr) {
	const result = new Array(arr.length);
	for (let i = 0; i < arr.length; i++) {
		result[i] = fn(arr[i]);
	}
	return result;
}

const fn = function (x) {
	return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(fn, numbers);
console.log(cube);

let myFunc3;

// 조건에 따른 함수 정의
let num = 0;
if (num === 0) {
	myFunc3 = function (theObject) {
		theObject.make = 'Toyota';
	};
}

// 재귀적 함수 호출
function facto(n) {
	if (n == 0 || n == 1) return 1;
	else return n * facto(n - 1);
}
const a = facto(1);
const b = facto(2);
const c = facto(3);
const d = facto(4);
const e = facto(5);

// 함수 호이스팅
console.log(square3(5));
function square3(n) {
	return n * n;
}

const num1 = 20;
const num2 = 3;
const name = 'Chamakh';

function multiply() {
	return num1 * num2;
}

console.log(multiply());

function getScore() {
	const num1 = 2;
	const num2 = 3;
	function add() {
		return `${name} scored ${num1 + num2}`;
	}

	return add();
}

console.log(getScore());

function addSquares(a, b) {
	function square4(x) {
		return x * x;
	}
	return square4(a) + square4(b);
}

let a2 = addSquares(2, 3);
console.log(a2);
console.clear();

function outside(x) {
	function inside(y) {
		return x + y;
	}
	return inside;
}

fn_inside = outside(3);
result2 = fn_inside(5);
result1 = outside(3)(5);
console.log(result1);
console.log(result2);

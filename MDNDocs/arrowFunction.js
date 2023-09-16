let sum = (a, b) => a + b;
console.log(sum(1, 2));
let double = (n) => n * 2;
console.log(double(2));

const age = 19;
let welcome = age < 18 ? () => console.log('hi') : () => console.log('hello');
welcome();

const ask = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
};

let sayHi = () => console.log('Hello Say');
sayHi();

function pow(x, y) {
	if (y < 0) {
		console.log("'y'는 음수가 될 수 없습니다.");
		return;
	}

	let result = 1;

	for (let i = 0; i < y; i++) {
		result *= x;
	}

	return result;
}

console.log(pow(2, 2));

function showPrimes(n) {
	nextPrime: for (let i = 2; i < n; i++) {
		// i가 소수인지를 확인함
		for (let j = 2; j < i; j++) {
			if (i % j == 0) continue nextPrime;
		}
		console.log(i);
	}
}

const user = {
	name: 'John',
	age: 30,
	isAdmi: true,
};
user.name = 'pete';
console.log(user.name);
console.log('age' in user);
console.log('blabla' in user);

for (let key in user) {
	console.log(key);
	console.log(user[key]);
}

let codes = {
	49: '독일',
	41: '스위스',
	44: '영국',
	1: '미국',
};
for (let code in codes) {
	console.log(code);
}

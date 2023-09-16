// 스프레드 연산자 (Spread Operator)
// 전개구문
// 모든 Iterable은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르르륵 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// { ...obj }
// EcmaScript 2018

function add(a, b, c) {
	return a + b + c;
}

const nums = [1, 2, 3];
console.log(add(...nums));

// Rest parameters
function sum(first, second, ...nums) {
	console.log(nums);
	return first + second + nums;
}

console.log(sum(1, 2, 0, 1, 2, 3, 4, 5));

// Array Concat
const frutis1 = ['kiwi', 'apple'];
const frtuis2 = ['banana', 'pich'];
let arr = frutis1.concat(frtuis2);
console.log(arr);
arr = [...frutis1, ...frtuis2];
console.log(arr);

const ellie = { name: 'ellie', age: 20 };
const updated = {
	...ellie,
	job: 's/w engineer',
};

console.log(ellie);
console.log(updated);

const obj = { name: 'ahn', age: 20, home: { address: 'home' } };
const obj2 = {
	...obj,
	job: 'home',
};
console.log(obj);
console.log(obj2);

// 고차함수
const fruits = ['banana', 'apple', 'kiwi', 'grape'];

for (let i = 0; i < fruits.length; i++) {
	console.log(fruits[i]);
}

fruits.forEach((value, index, array) => {
	console.log(`${index}번째 과일 : ${value}`);
	console.log(array);
});

fruits.forEach((value) => console.log(value));

// 조건에 맞는(콜백함수) 아이템을 찾을 때
console.clear();

const item1 = { name: 'milk', price: 2 };
const item2 = { name: 'cookie', price: 3 };
const item3 = { name: 'kimbob', price: 1 };
const products = [item1, item2, item3, item2];
let found = products.find((value) => {
	return value.name === 'cookie';
});

console.log(found);

found = products.findIndex((value) => value.name === 'cookie');
console.log(found);

found = products.some((item) => item.name === 'cookie');
console.log(found);

found = products.every((item) => item.name === 'cookie');
console.log(found);

found = products.filter((item) => item.name === 'cookie');
console.log(found);

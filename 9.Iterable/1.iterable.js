// Iterable
const array = [1, 2, 3];
for (const item of array) {
	console.log(item);
}

const obj = { 0: 1, 1: 2, 2: 3 };
// object is not iterable

const iter = array.values();
console.log(iter.next());
for (const item of array.entries()) {
	console.log(item);
}

// Iterable 하다는건! 순회가 가능하다!
// [Symbol.iterator](): Iterator;
// 심볼 정의를 가진 객체가, 특정한 함수가 Iterator를 리턴한다는 것은
// 순회가 가능한 객체이다 라는걸 알 수 있음
// 순회가 가능하면 for..of, spread 사용 가능

for (const item in obj) {
	console.log(item);
}

const iterator = array.values();

// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().value);
// console.log(iterator.next().done);

while (true) {
	const item = iterator.next();
	if (item.done) break;
	console.log(item.value);
}

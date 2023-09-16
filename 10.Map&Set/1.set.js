// Set
const set = new Set([1, 2, 3]);
console.log(set);
console.log(set.size);

// 존재하는지 확인
console.log(set.has(1));
console.log(set.has(6));

// set은 Iterable함
set.forEach((item) => console.log(item));
console.log(set.entries());
for (const value of set.values()) {
	console.log(value);
}

// 추가
set.add(6);
console.log(set);
set.add(6);
console.log(set);

// Set은 중복 허용 X, 순서도 X

// 삭제
set.delete(6);
console.log(set);

// 전부 삭제
set.clear();
console.log(set);
console.log(set.size);

const obj1 = { name: 'apple', price: 1 };
const obj2 = { name: 'banana', price: 8 };
const objs = new Set([obj1, obj2]);
console.log(objs);

// 퀴즈
obj1.price = 10;
objs.add(obj1);
console.log(objs);

// 퀴즈
const obj3 = { name: 'banana', price: 8 };
objs.add(obj3);
console.log(objs); // 각 다른 객체이기 때문에 중복으로 치지 않음
// 메모리 주소가 다르기 때문
obj3.price = 3;
console.log(objs); // 각 다른 객체이기 때문에 중복으로 치지 않음

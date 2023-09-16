// Map
// [키, 값]
// 키는 중복 허용 X
const map = new Map([
	['key1', 'apple'],
	['key2', 'banana'],
	['key3', 'kiwi'],
]);
console.log(map);
console.log(map.keys());
console.log(map.size);
console.log(map.has('key1'));
console.log(map.get('key1'));
map.forEach((item, key) => console.log(item, key));
console.log(map.values());
console.log(map.entries());

map.set('key4', 'pich');
console.log(map);

map.delete('key4');
console.log(map);

map.clear();
console.log(map);

// 오브젝트와의 큰 차이점?
const key = { name: 'milk', price: 10 };
const milk = { name: 'milk', price: 10, description: '맛있는우유' };
const obj = {
	[key]: milk,
};
console.log(obj);

const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]); // undefined
console.log(map2.get(key));
console.log(map2.get({ name: 'milk', price: 10 }));

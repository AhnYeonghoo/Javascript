// Symbol 심벌
// 유일한 키를 생성할 수 있음
const map = new Map();
const key1 = 'key';
const key2 = 'key';
map.set(key1, 'hello');
console.log(map.get(key2)); // 다른 변수임에도 값이 같아서 동일한 키로 간주
console.log(key1 === key2);

const key3 = Symbol('key');
const key4 = Symbol('key');
map.set(key3, 'hello');
console.log(map.get(key4));
console.log(key3 === key4); // false

// 동일한 이름으로 하나의 키를 사용하고 싶다면, Symbol.for
// 전역 심벌 레지스트리 (Global Symbol Registry)
const k1 = Symbol.for('key');
const k2 = Symbol.for('key');
console.log(k1 === k2); // 동일한 Symbol

console.log(Symbol.keyFor(k1));
console.log(Symbol.keyFor(k2));
console.log(Symbol.keyFor(key3)); // 전역 심벌 레지스트리에 저장된 것만 가져옴

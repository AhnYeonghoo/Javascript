// 동등 비교 관계 연산자 (Equality Operators)
// == 값이 같음
// != 값이 다름
// === 값과 타입이 둘다 같음
// !== 값과 타입이 다름

console.log(2 === 2);
console.log(2 == 2);
console.log(2 != 2);
console.log(2 !== 2);
console.log(2 !== 3);
console.log(2 != 3);
console.log(2 == '2');
console.log(2 === '2'); // 웬만하면 타입비교 연산자 사용
console.log(true == 1);
console.log(true === 1);
console.log(0 == false);
console.log(0 === false);
console.clear();

const obj1 = {
	name: 'js',
};

const obj2 = {
	name: 'js',
};

console.log(obj1 == obj2);
console.log(obj1 === obj2);
console.log(obj1.name == obj2.name);
console.log(obj2.name === obj2.name);

let obj3 = obj2; // 레퍼런스 참조
console.log(obj3 == obj2);
console.log(obj3 === obj2);

// 논리연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation

const obj1 = { name: 'dog' };
const obj2 = { name: 'cat', owner: 'Ellie' };

if (obj1 && obj2) {
	console.log('둘다 True!');
}

// ||이면 위 예제에선 obj1가 true이므로 obj2는 평가하지 않음.
// obj1이 false 일 때만 obj2를 검사함

let result = obj1 && obj2;
console.log(result);
result = obj1 || obj2;
console.log(result);
if (result) {
	console.log('true');
}

// 활용예
// 조건이 truthy일때 && 무언가를 해야 할 경우
// 조건이 falshy일때 || 무언가를 해야 할 경우
function changeOwner(animal) {
	if (!animal.owner) {
		throw new Error('주인이 없어');
	}
	animal.owner = '바뀐주인!';
}

function makeNewOwner(animal) {
	if (animal.owner) {
		throw new Error('주인이 있어');
	}
	animal.owner = '새로운주인!';
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때
let item = { price: 1 };
item = {};
const price = item && item.price;
console.log(price);

function print(message) {
	const text = message || 'hello';
	console.log(text);
}

print();
print(undefined);
print(null);
print(0);

// 옵셔널 체이닝 연산자 Optional Chaning Operator
// ES11 (ECMAScript 2020)
// ?.
// null 또는 undefined를 확인할떄
let item = { price: 1 };
const price = item?.price;
console.log(price);

let obj = { name: 'dog', owner: { name: 'ellie' } };

function printName(obj) {
	const ownerName = obj?.owner?.name;
	console.log(ownerName);
}

printName(obj);

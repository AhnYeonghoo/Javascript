// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
function add(a, b) {
	console.log(arguments); // arguments 키워드!
	console.log(arguments[0]);
	console.log(arguments[1]);
	return a + b;
}

function addDefault(a = 1, b = 2) {
	console.log(arguments);
	return a + b;
}

console.log(add()); // NaN
console.log(add(3, 4, 5));
console.log(addDefault());

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
	// 인자 개수를 모를때 배열로 모두 받음
	console.log(a);
	console.log(b);
	console.log(numbers);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7));

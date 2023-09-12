// return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!

function add(a, b) {
	return a + b;
}

const result = add(3, 4);
console.log(result);

function print(text) {
	console.log(`${text} print function call`);
}

const outcome = print('hello');
console.log(outcome); // undefined 반환함

// return을 함수 중간에 하게 되면 함수가 종료됨
//; 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
function print2(num) {
	return num >= 0 ? console.log(num) : undefined;
}

print2(-1);
print2(1);

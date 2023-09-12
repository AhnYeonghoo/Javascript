// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정
// !! 불리언 값으로 변환

let num = 21;
if (num >= 0 && num < 9) {
	console.log('run');
} else {
	console.log('no run');
}

if (num >= 0 || num < 9) {
	console.log('run2');
} else {
	console.log('no run2');
}

if (num != 8) {
	console.log('num != 8');
}

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

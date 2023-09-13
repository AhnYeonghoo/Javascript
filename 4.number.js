const num1 = 123;
const num2 = new Number(123);
console.log(num1);
console.log(num2);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.NaN);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);

if (num1 < Number.MAX_SAFE_INTEGER) {
}
if (Number.isNaN(num1)) {
}

// 지수표기법
const num3 = 102;
console.log(num3.toExponential());

// 반올림하며 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed().toString());

console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); // 아랍어

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법이 됨

console.log(Number.EPSILON);

if (Number.EPSILON > 0 || Number.EPSILON < 1) {
	console.log('true');
}

const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
	return Math.abs(original - expected) < Number.EPSILON; // 작은 차이를 무시하고 싶다면
}

console.log(isEqual(1, 1));
console.log(isEqual(0.1, 0.1));

console.log(isEqual(num, 0.1));

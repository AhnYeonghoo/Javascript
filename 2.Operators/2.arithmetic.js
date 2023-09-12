// 산술 연산자 (Arithmetic operators)
// +
// -
// *
// /
// %
// ** 지수 (거듭제곱)

console.log(5 + 2);
console.log(5 - 2);
console.log(5 * 2);
console.log(5 / 2);
console.log(5 % 2);
console.log(5 ** 2); // ES7에 추가된 최신문법
console.log(Math.pow(5, 2)); // 기존엔 이렇게 거듭제곱함

// + 연산자 주의점!
let text = '두개의' + '문자를';
console.log(text);
text = '1' + 1; // 문자열과 숫자를 더하면 문자열로 반환
console.log(text);
console.log(typeof text);

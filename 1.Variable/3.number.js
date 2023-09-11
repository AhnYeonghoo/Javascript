// Data Type
// 단일 데이터인 Primitive와 복합 데이터인 object로 나뉨
/**
 * primitive는
 * number
 * string
 * boolean
 * null
 * undefined
 * Sysmbol
 * BigInt etc..
 */

/**
 * Object는
 * array
 * function
 * class
 *
 */

let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o172; // 8진수
let hex = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0 / 123);
console.log(123 / 0); // Infinity
console.log(123 / -0); // -Infinity
console.log(123 / 'text'); // Not A Number(NaN)

let bigInt = 12312412443243444123414241234n; // BigInt data type
console.log(bigInt);

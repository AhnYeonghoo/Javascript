// 불리언 타입
let t = true;
let f = false;
console.log(t);
console.log(f);

// 활용예:
let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isFree);
console.log(isActivated);
console.log(isEnrolled);

// Falshy 거짓인 값
console.log(!!0); // !!는 boolean으로 변환하는 연산자
console.log(!!'');
console.log(!!undefined);
console.log(!!null);
console.log(!!-0);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!{});
console.log(!!1);
console.log(!!-1);
console.log(!![]);
console.log(!!'d');
console.log(!!Symbol);
console.log(!!Infinity);
console.log(!!-Infinity);

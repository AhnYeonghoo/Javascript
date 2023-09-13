console.log(globalThis);
console.log(Infinity);
console.log(NaN);
console.log(undefined);
console.log(this);

eval('const num = 2; console.log(num);');
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat('12.43'));
console.log(parseInt('123'));
console.log(parseInt('12.23'));

// URL (URI, Uniform Resource Identifier 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = 'https://드림코딩.com';
const result = encodeURI(URL);
console.log(result);
const decoded = decodeURI(result);
console.log(decoded); // 사기다;; Javascript

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = '드림코딩.com';
console.log(encodeURIComponent(part));

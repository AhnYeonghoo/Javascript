// 문자열 타입
let string = '안녕하세여';
console.log(string);
string = '안녕!';
console.log(string);
string = '"안녕!"';
console.log(string);
string = `'안녕!'`;
console.log(string);

// 특수문자 출력하는법

string = '안녕!\n하세여\t탭을했어여';
console.log(string);

// 템플릿 리터럴 (Template Literal)
let id = '영후';
let greetings = `안녕 ${id}야`; // -> 템플릿 리터럴 백틱을 이용
console.log(greetings);

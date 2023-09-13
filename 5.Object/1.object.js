// Object 객체
// 객체 생성 방법
// Object literal { key: value }
// new Object()
// Object.create();
// key - 문자, 숫자, 문자열, 심볼
// value - 원시값, 객체를 가질 수도 있음. (함수 포함)

let apple = {
	name: 'apple',
	'hello-bye': 'hi',
	0: 1,
	['hello-bye2']: 'hi2',
};

// 속성, 데이터에 접근하기 위해서는
console.log(apple.name); // dot notation
console.log(apple['hello-bye']); // bracket notation
console.log(apple[['hello-bye2']]);
console.log(apple[0]);

// 속성 추가
apple.emoji = 'emoji';
console.log(apple.emoji);
console.log(apple['emoji']);

// 속성 삭제
delete apple.emoji;
console.log(apple); // emoji 삭제됨

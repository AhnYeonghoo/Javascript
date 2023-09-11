// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당이 불가능
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi' 이렇게 재할당 불가능하다.
console.log(text);

// 1. 상수
const MAX_FARUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
	name: 'apple',
	color: 'appleColor',
	display: 'appleDisplay',
};

// 프로그래밍을 할 때 let보다는 const를 선호해서 사용하기!
console.log(apple);
apple.name = 'banana'; // 이건 가능
console.log(apple);

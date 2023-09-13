// 배열 생성 방법
let array = new Array(2); // size 지정
console.log(array);
array[0] = 1;
array[1] = 2;
console.log(array);

array = new Array(1, 2, 3); // 생성자 함수
console.log(array);

array = Array.of(1, 2, 3, 4, 5); //
console.log(array);

const anotherArray = [1, 2, 3, 4]; // 배열 리터럴
console.log(anotherArray);

array = Array.from(anotherArray);
console.log(array);

array = Array.from('text');
console.log(array);

// 일반적으로 배열은 동일한 메모리 크기를 가지며, 연속적으로 이어져 있어야함
// 하지만 자바스크립트에서의 배열은 연속적으로 이어져 있지 않고'
// 오브젝트와 유사함!
// 자바스크립트의 배열은 일반적으로 배열의 동작을 흉내낸 특수한 객체다!
// 이걸 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음
// (Typed Coolections)
array = Array.from({
	0: '안',
	1: '녕',
	length: 2,
});

console.log(array);

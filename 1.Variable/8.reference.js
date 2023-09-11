// 원시타입은 call by value
let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

// 객체 타입은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨
let apple = {
	// apple이 저장되어 있는 주소가 banana에 할당
	name: 'apple',
};

let banana = apple;
banana.name = 'banana';
console.log(apple);
console.log(banana);

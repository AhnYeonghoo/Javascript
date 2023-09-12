// 함수 표현식
// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {} <- 표현식

const add = function (a, b) {
	// 무명함수라고 함
	return a + b;
};

console.log(typeof add);
console.log(add(1, 2));

// 화살표 함수 const name = () => {} 매우 편리!

const sum = (a, b) => {
	// 바로 리턴하는 경우 다 생략 가능
	return a + b;
};

const sum2 = (a, b) => a + b; // 이렇게 생략 가능

console.log(sum(1, 2));
console.log(sum2(1, 2));

// 생성자 함수 const object = new function(); // 뒤 객체편에서 다룸

// IIFE (Immediately Invoked Function Expression) 즉각 호출 함수 표현식
(function fun() {
	console.log('run');
})();

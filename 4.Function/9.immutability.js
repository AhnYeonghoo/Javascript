// 불변성
// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은
// 절대 XX
// 상태변경이 필요한 경우에는, 새로운 상태를(오브젝트, 값) 만들어서 반환해야 함!!
function display(num) {
	num = 5; // XX 절대 지양하는 방식!
	console.log(num);
}

function goodDisplay(num) {
	let result = num;
	result = 10;
	console.log(num);
}
const value = 4;
display(value);
console.log(value);
goodDisplay(value);

function displayObj(obj) {
	obj.name = 'bob';
	console.log(obj);
}

function changeName(obj) {
	// 이름부터 변경한다는 느낌을 주도록 짓기!
	return { ...obj, name: 'Bob' }; // 반환할 때는 새로운 오브젝트를 만들기!
}

const ellie = { name: 'ahn' };
displayObj(ellie);

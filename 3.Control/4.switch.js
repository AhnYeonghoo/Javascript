// 조건문 Conditional Statement
// switch
// if else if else if else if ... else
// 정해진 범위안의 값에 대해 특정한 일을 해야 하는 경우
let day = 6; // 0: 월요일, 1: 화요일, ... 6: 일요일

switch (day) {
	case 0:
		console.log('월');
		break;
	case 1:
		console.log('화');
		break;
	case 2:
		console.log('수');
		break;
	case 3:
		console.log('목');
		break;
	case 4:
		console.log('금');
		break;
	case 5:
		console.log('토');
		break;
	case 6:
		console.log('일');
		break;
	default:
		console.log('아무것도 아님');
}

let condition = 'okay'; // okay, good -> 좋음!, bad -> 나쁨!
let text;
switch (condition) {
	case 'okay':
	case 'good':
		text = '좋음!';
		break;
	case 'bad':
		text = '나쁨';
		break;
}
console.log(text);

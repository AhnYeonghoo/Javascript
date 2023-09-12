// 삼항 조건 연산자 Ternary Operator
// 조건식 ? 참인경우 : 거짓인경우
let fruit = 'apple';
fruit = 'orange';
if (fruit === 'apple') {
	console.log('fruit is apple');
} else if ('orange') {
	console.log('orange');
} else {
	console.log('!!');
}

fruit === 'apple' ? console.log('apple') : console.log('no apple');

let emoji = fruit === 'apple' ? 'apple' : '!!';
console.log(emoji);

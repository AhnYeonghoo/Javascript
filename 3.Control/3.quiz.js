// 퀴즈!
let num = 3;
// num의 숫자가 짝수이면 엄지척 출력, 홀수라면 덤스다운을 출력
// if문으로 하고
// 삼항연산자로 하기

if (num % 2 == 0) {
	console.log('엄지척');
} else {
	console.log('덤스다운');
}

const result = num % 2 == 0 ? '엄지척' : '덤스다운';
console.log(result);

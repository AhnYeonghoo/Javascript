// 주어진 seconds가 지나면 callback 함수를 호출함
// 단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(callback, seconds) {
	if (seconds < 1) throw Error('초 단위로 입력해주세요.');
	setTimeout(callback, seconds * 1000);
}

runInDelay(() => {
	console.log('1');
}, 3);

runInDelay(() => {
	console.log('1');
}, 0);

function runInDelaySolution(callback, seconds) {
	if (!seconds || seconds < 0) {
		throw new Error('seconds는 0보다 커야 함');
	}
	if (!callback) {
		throw new Error('콜백 함수를 전달 해주세요.');
	}
	setTimeout(callback, seconds * 1000);
}

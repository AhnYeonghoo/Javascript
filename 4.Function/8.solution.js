function print(i) {
	console.log(i);
}

function printDouble(i) {
	console.log(i * 2);
}

function iterate(max, action) {
	for (let i = 0; i < max; i++) {
		action(i);
	}
}

iterate(3, print);
iterate(5, (num) => console.log(num * 2));
iterate(3, (num) => console.log(num));

setTimeout(() => {
	console.log('1초 뒤 출력');
}, 1000);

setTimeout(() => {
	console.log('3초 뒤 출력');
}, 3000);

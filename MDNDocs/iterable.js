let range = {
	from: 1,
	to: 5,
};

range[Symbol.iterator] = function () {
	return {
		current: this.from,
		last: this.to,

		next() {
			if (this.current <= this.last) {
				return { done: false, value: this.current++ };
			} else {
				return { done: true };
			}
		},
	};
};

for (let num of range) {
	console.log(num);
}

for (let char of 'text') {
	console.log(char);
}

let str = 'Xd';
for (let char of str) {
	console.log(char);
}

str = 'hello';

let iterator = str[Symbol.iterator]();
while (true) {
	let result = iterator.next();
	if (result.done) break;
	console.log(result.value);
}

let arrayLike = {
	0: 'Hello',
	1: 'World',
	length: 2,
};

let arr = Array.from(arrayLike);
console.log(arr.pop());
arr = Array.from(range, (num) => num * num);
console.log(arr);

function slice(str, start, end) {
	return Array.from(str).slice(start, end).join('');
}

str = 'XED';
console.log(slice(str, 1, 3));
console.log(str.slice(1, 3));

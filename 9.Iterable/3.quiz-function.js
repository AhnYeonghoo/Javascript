function makeIterable(initialValue, maxValue, callback) {
	return {
		[Symbol.iterator]() {
			let num = initialValue;
			return {
				next() {
					return { value: callback(num++), done: num > maxValue };
				},
			};
		},
	};
}
const multiple = makeIterable(0, 20, (num) => num * 2);
for (const item of multiple) {
	console.log(item);
}
const single = makeIterable(0, 20, (num) => num);
for (const item of single) {
	console.log(item);
}

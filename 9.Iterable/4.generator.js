// iteration protocol을 준수하는 generator
// 좀 더 간편하게 iterator를 만들 수 있다.

const multiple = {
	[Symbol.iterator]: () => {
		const max = 10;
		let num = 0;
		return {
			next() {
				return { value: num++ * 2, done: num > max };
			},
		};
	},
};

function* multipleGenerator() {
	try {
		for (let i = 0; i < 10; i++) {
			console.log(i);
			yield i ** 2;
		}
	} catch (error) {
		console.log(error);
	}
}

const multipleGene = multipleGenerator();
let next = multipleGene.next();
console.log(next.value);
console.log(next.done);
next = multipleGene.next();
console.log(next.value);
console.log(next.done);
next = multipleGene.next();
console.log(next.value);
console.log(next.done);

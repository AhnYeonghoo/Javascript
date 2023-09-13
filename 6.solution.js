// 1. 퀴즈1
function replace(array) {
	const replaced = Array.from(array);
	for (let i = 0; i < replaced.length; i++) {
		if (replaced[i] === '🍓') {
			replaced[i] = '🥝';
		}
	}
	return replaced;
}

const array = ['🍌', '🍓', '🍇', '🍓'];
const result = replace(array);
console.log(result);

// 퀴즈 2

function count(array, item) {
	let counter = 0;
	for (let i = 0; i < array.length; i++) {
		if (array[i] === item) {
			counter++;
		}
	}
	return counter;
}

console.log(count(['🍌', '🥝', '🍇', '🥝'], '🥝'));

// 퀴즈 3

function match(input, search) {
	const result = [];
	for (let i = 0; i < input.length; i++) {
		if (search.includes(input[i])) {
			result.push(input[i]);
		}
	}
	return result;
}

console.log(match(['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']));

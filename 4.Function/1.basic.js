// Function
function add(a, b) {
	console.log('add function call');
	return a + b;
}

function sub(a, b) {
	console.log('sub function call');
	return a - b;
}

function multiply(a, b) {
	console.log('multiply function call');
	const result = a * b;
	return result;
}

function divide(a, b) {
	console.log('divide function call');
	return a / b;
}

function fullName(firstName, lastName) {
	return `${firstName} ${lastName}`;
}

console.log(add(5, 3));
console.log(fullName('ahn', 'yeonghoo'));

function a() {
	return 1;
}

function b() {
	return a() + 1;
}

function c() {
	return b() + 1;
}
const result = c();
console.log(result);

console.log('비동기');

// CallStack
// Event Loop
// Task Queue

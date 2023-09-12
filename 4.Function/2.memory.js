function add(a, b) {
	return a + b;
}

const sum = add;
console.log(typeof sum);
console.log(sum(3, 4));

const sub = (a, b) => {
	return a - b;
};

console.log(sub(5, 3));

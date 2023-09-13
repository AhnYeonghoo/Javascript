const apple = {
	name: 'apple',
	display: function () {
		console.log(`${this.name}님 안녕`);
	},
};

console.log(apple.display());
console.log(apple['display']);
console.log(apple['name']);
apple.display();

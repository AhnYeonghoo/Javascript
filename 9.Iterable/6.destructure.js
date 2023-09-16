// 구조 분해 할당 Destructuring Assignment

const fruits = ['apple', 'kwii', 'banana', 'others'];
console.log(fruits[0]);
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);
const [other1, other2] = others;
console.log(other1, other2);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
	return ['apple', 'emojiApple'];
}

const [name, emoji] = createEmoji();
console.log(name);
console.log(emoji);

const ellie = { name: 'ellie', age: 20, job: 's/w engineer' };
function display(person) {
	console.log(`이름: ${person.name}`);
	console.log(`나이: ${person.age}`);
	console.log(`직업: ${person.job}`);
}

function displayTwo({ name, age, job }) {
	// 구조 분해 할당 함수
	console.log(`이름: ${name}`);
	console.log(`나이: ${age}`);
	console.log(`직업: ${job}`);
}

displayTwo(ellie);

const { name2, age, job } = ellie;
console.log(name2); // name이 아니라 undefined 가 나옴
console.log(age);
console.log(job);

// Quiz
const prop = {
	name: 'Button',
	styles: {
		size: 20,
		color: 'black',
	},
};

function changeColor({ styles: { color } }) {
	console.log(color);
}

changeColor(prop);

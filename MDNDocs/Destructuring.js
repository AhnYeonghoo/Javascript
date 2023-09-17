let arr = ['bora', 'lee'];

let [firstName, surName] = arr;
console.log(firstName);
console.log(surName);
[firstName, surName] = 'Bora Lee.'.split(' ');
console.log(firstName);
console.log(surName);

let [a, b, c] = 'abc';
let [one, two, three] = new Set([1, 2, 3]);
console.log(a);
console.log(b);
console.log(c);
console.log(one);
console.log(two);
console.log(three);
let user = {};
[user.name, user.surName] = 'Bora Lee'.split(' ');
console.log(user.name);
console.log(user.surName);

user = {
	name: 'John',
	age: 30,
};

for (let [key, value] of Object.entries(user)) {
	console.log(`${key}:${value}`);
}
user = new Map();
user.set('name', 'John');
user.set('age', '30');

for (let [key, value] of user) {
	console.log(`${key}:${value}`);
}

let guest = 'Jane';
let admin = 'Pete';

[guest, admin] = [admin, guest];

console.log(`${guest}: ${admin}`);

let [name1, name2, ...rest] = ['Julius', 'Caesar', 'Consul', 'Of'];
console.log(name1);
console.log(name2);

console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length);
console.log(typeof rest);

let options = {
	title: 'menu',
	width: 100,
	height: 200,
};

let { title, width, height } = options;
console.log(title);
console.log(width);
console.log(height);

options = {
	size: {
		width: 100,
		height: 200,
	},
	items: ['cake', 'donut'],
	extra: true,
};

let salaries = {
	john: 100,
	pete: 300,
	mary: 250,
};

function topSalary(salaries) {
	let max = 0;
	let maxName = null;

	for (const [name, salary] of Object.entries(salaries)) {
		if (max < salary) {
			max = salary;
			maxName = name;
		}
	}

	return maxName;
}

console.log(topSalary(salaries));

let user = new Object(); // '객체 생성자' 문법
user = {}; // '객체 리터럴' 문법
user = {
	name: 'John',
	age: 30,
};

console.log(user.name);
console.log(user.age);
user.isAdmin = true;
console.log(user.isAdmin);
delete user.isAdmin;
console.log(user);

user = {
	name: 'John',
	age: 30,
	'likes birds': true,
};

console.log(user);
console.log(user['likes birds']);
delete user['likes birds'];
console.log(user);

let fruit = `apple`;
let bag = {
	[fruit]: 5,
};
console.log(bag.apple);
bag = {
	[fruit + 'Computers']: 5,
};
console.log(bag);

function makeUser(name, age) {
	return {
		name,
		age,
	};
}

user = makeUser('John', 30);
console.log(user);

user = {};
console.log(user.noSuchProperty === undefined);
user = { name: 'John', age: 30 };
console.log('age' in user);
console.log('blabla' in user);

user = {
	name: 'John',
	age: 30,
	isAdmin: true,
};

for (let key in user) {
	console.log(key);
	console.log(user[key]);
}

user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

let schedule = {};

function isEmpty(obj) {
	if (obj.constructor === Object && Object.keys(obj).length === 0)
		return true;
	else return false;
}
console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

function sum(obj) {
	let result = 0;
	for (let key in obj) {
		result += obj[key];
	}
	return result;
}

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

console.log(sum(salaries));

let menu = {
	width: 200,
	height: 300,
	title: 'My Menu',
};
console.log(menu);

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (Number(obj[key])) {
			obj[key] *= 2;
		}
	}
	return obj;
}
multiplyNumeric(menu);

console.log(menu);

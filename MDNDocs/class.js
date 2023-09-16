class User {
	constructor(name) {
		this.name = name;
	}
	sayHi() {
		console.log(this.name);
	}
}

let user = new User('John');
user.sayHi();
console.log(typeof User);
console.log(User === User.prototype.constructor);

console.log(User.prototype.sayHi);
console.log(Object.getOwnPropertyNames(User.prototype));
// class User와 동일한 기능을 하는 순수 함수
function Uuser(name) {
	this.name = name;
}

Uuser.prototype.sayHi = function () {
	console.log(this.name);
};

user = new Uuser('Hohn');
user.sayHi();

user = class {
	sayHi() {
		console.log(`안녕하세요`);
	}
};

function makeClass(phrase) {
	return class {
		sayHi() {
			console.log(phrase);
		}
	};
}

user = makeClass('dkssud');
new user().sayHi();

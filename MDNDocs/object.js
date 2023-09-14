const person = {
	name: ['bob', 'Smith'],
	age: 32,
	gender: 'male',
	interests: ['music', 'skiing'],
	bio: function () {
		alert(
			this.name[0] +
				' ' +
				this.name[1] +
				' is ' +
				this.age +
				' years old. He likes ' +
				this.interests[0] +
				' and ' +
				this.interests[1] +
				'.'
		);
	},
	greeting: function () {
		alert('Hi! I`m  ' + this.name[0] + '.');
	},
};

function person(first, last, age, gender, interests) {
	this.name = {
		first,
		last,
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
}

person.prototype.greeting = function () {
	alert('HI! I`m ' + this.name.first + '.');
};

class Person {
	constructor(first, last, age, gender, interests) {
		this.name = {
			first,
			last,
		};
		this.age = age;
		this.gender = gender;
		this.interests = interests;
	}

	greeting() {
		console.log(`HI! I'm ${this.name.first}`);
	}

	farewell() {
		console.log(`${this.name.first} has left the building. Bye for now!`);
	}
}

let han = new Person('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();

let leia = new Person('Leia', 'Organa', 19, ' female', ['Government']);
leia.farewell();
